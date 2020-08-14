var antlr4 = require('antlr4'),
    fs = require('fs'),
    GrammarLexer = require('./parser/GrammarLexer').GrammarLexer,
    GrammarParser = require('./parser/GrammarParser').GrammarParser
var parse = (code) => {
    let chars = new antlr4.InputStream('{' + code + '}'),
        lexer = new GrammarLexer(chars),
        tokens = new antlr4.CommonTokenStream(lexer),
        parser = new GrammarParser(tokens)
    parser.buildParseTrees = true;
    return parser.statement()
}
var textTree = (tree) => {
    if (tree.ch.length > 0) {
        let ch = tree.ch.map(n => textTree(n)), out = [tree.string]
        ch.forEach(i => out.push(...i.map(n => '>  ' + n)))
        return out
    }
    return [tree.string]
}

class Node {
    constructor(symbol, ch, add = {}) {
        this.symbol = symbol
        this.ch = ch
        for (let [i, e] of Object.entries(add)) this[i] = e
        Object.defineProperty(this, 'string', {
            get: () => this.symbol + (this.type ? ` (${this.type})` : '')
        })
    }
    static number(n) {
        return new Node('number', [new Node(n, [])])
    }
    static toNode(tree) {
        let symb, ch = tree.children ? tree.children.map(Node.toNode) : []
        if (ch.length > 0) symb = tree.constructor.name.replace(/Context/, '')
        else symb = tree.symbol.text
        switch (symb) {
            //Parameters/Properties
            case 'Parameters':
                return new Node('params', ch.filter(c => !'(),'.includes(c.symbol)))
            case 'IdenParameter':
                ch[0].type = 'iden'
                return ch[0]
            case 'SpreadParameter':
                ch[1].type = 'spread'
                return ch[1]
            case 'PropertyParameter':
                ch[1].type = 'property'
                return ch[1]
            case 'TradProperty':
                return new Node('property', [ch[0], ch[2]], { type: 'property' })
            case 'IdenProperty':
                return new Node('property', ch, { type: 'iden' })
            case 'IterProperty':
                return new Node('property', [ch[1]], { type: 'spread' })

            //Functions
            case 'ArrowFunc':
                if (ch[0].symbol == 'iden') ch[0] = new Node('params', [ch[0]])
                return new Node('func', [ch[0], ch[2]])
            case 'TradFunc':
                return new Node('func', [ch[1], ch[2]])
            case 'FuncValue':
                return ch[0]
            case 'ApplyFuncValue':
                symb = 'apply'
                break

            //Conditions
            case 'IfStatement':
                return ch[0]
            case 'Cond':
                let st = []
                for (let i = 0; i < ch.length; i++) {
                    switch (ch[i].symbol) {
                        case 'if':
                            ch[i + 4].type = 'if'
                            st.push(ch[i + 2], ch[i + 4])
                            i += 4
                            break
                        case 'elif':
                            ch[i + 4].type = 'elif'
                            st.push(ch[i + 2], ch[i + 4])
                            i += 4
                            break
                        case 'else':
                            ch[i + 1].type = 'else'
                            st.push(ch[i + 1])
                            break
                    }
                }
                return new Node('if', st)
            //Loops
            case 'ForloopStatement':
                return ch[0]
            case 'Forloop':
                return new Node('for', [ch[2], ch[4]])
            case 'ThreeFuncIter':
                return new Node('iter', ch.filter(c => c.symbol != ';'), { type: 'bce' })
            case 'OfIter':
                return new Node('iter', [ch[0], ch[1], ch[3]], { type: 'of' })
            case 'InIter':
                return new Node('iter', [ch[0], ch[1], ch[3]], { type: 'in' })
            case 'WhileloopStatement':
                return ch[0]
            case 'Whileloop':
                return new Node('while', [ch[2], ch[4]])

            //Number/String/Boolean
            case 'NumberValue':
                return new Node('number', [ch[0]])
            case 'StringValue':
                return new Node('string', [ch[0]])
            case 'BoolValue':
                return new Node('boolean', [ch[0]])

            //Arrays/Tuples/Dictionaries
            case 'ArrayValue':
                return ch[0]
            case 'Array':
                ch = ch.filter(c => !'[],'.includes(c.symbol))
                for (let i = 0; i < ch.length; i++) {
                    if (ch[i].symbol == '...') {
                        ch[i + 1].type = 'spread'
                        ch.splice(i, 1)
                        i--
                    }
                }
                return new Node('array', ch)
            case 'TupleValue':
                return ch[0]
            case 'Tuple':
                ch = ch.filter(c => !'(),'.includes(c.symbol))
                for (let i = 0; i < ch.length; i++) {
                    if (ch[i].symbol == '...') {
                        ch[i + 1].type = 'spread'
                        ch.splice(i, 1)
                        i--
                    }
                }
                return new Node('tuple', ch)
            case 'DictionaryValue':
                return ch[0]
            case 'Dictionary':
                return new Node('dictionary', ch.filter(c => !'{},'.includes(c.symbol)))

            //Assignments/Declarations
            case 'AssignStatement':
                return ch[0]
            case 'SetAssign':
                return new Node('assign', [ch[0], ch[2]])
            case 'AddAssign':
                return new Node('assign', [ch[0], new Node('+', [ch[0], ch[2]])])
            case 'MultAssign':
                return new Node('assign', [ch[0], new Node('*', [ch[0], ch[2]])])
            case 'SubAssign':
                return new Node('assign', [ch[0], new Node('-', [ch[0], ch[2]])])
            case 'DivAssign':
                return new Node('assign', [ch[0], new Node('/', [ch[0], ch[2]])])
            case 'IncAssign':
                return new Node('assign', [ch[0], new Node('+', [ch[0], Node.number(1)])])
            case 'DecAssign':
                return new Node('assign', [ch[0], new Node('-', [ch[0], Node.number(1)])])
            case 'DeclarStatement':
                return ch[0]
            case 'Designator':
                return new Node('designator', [], { type: ch.map(c => c.symbol) })
            case 'Declar':
                ch[0].ch = ch.slice(1).map(c => c.ch[0])
                return new Node('declaration', ch)

            //Operations
            case 'AddValue':
                return new Node(ch[1].symbol, [ch[0], ch[2]])
            case 'MultValue':
                return new Node(ch[1].symbol, [ch[0], ch[2]])
            case 'StringRepValue':
                return new Node('#', [ch[1]])
            case 'NegateValue':
                return new Node('-', [Node.number(0), ch[1]])
            case 'BlankConcatValue':
                return new Node('_', [ch[0], ch[2]])
            case 'ModValue':
                return new Node('%', [ch[0], ch[2]])
            case 'NotValue':
                return new Node('!', [ch[1]])
            case 'AndValue':
                return new Node('&&', [ch[0], ch[2]])
            case 'OrValue':
                return new Node('||', [ch[0], ch[2]])
            case 'LtValue':
                return new Node('<', [ch[0], ch[2]])
            case 'LteValue':
                return new Node('<=', [ch[0], ch[2]])
            case 'GtValue':
                return new Node('>', [ch[0], ch[2]])
            case 'GteValue':
                return new Node('>=', [ch[0], ch[2]])
            case 'EqualValue':
                return new Node('==', [ch[0], ch[2]])
            case 'InequalValue':
                return new Node('!=', [ch[0], ch[2]])
            case 'TernaryValue':
                return new Node('?', [ch[0], ch[2], ch[4]])
            case 'RangeValue':
                return new Node('to', [ch[0], ch[2], ch[4] ? ch[4] : Node.number(1)])
            case 'BracketValue':
                return ch[1]

            case 'Iden':
                symb = 'iden'
                break
            case 'IdenValue':
                return ch[0]
            case 'GroupStatement':
                return new Node('block', ch.filter(c => !'{}'.includes(c.symbol)))
            case 'ValueStatement':
                return ch[0]
            case 'CommentStatement':
                return new Node('comment', [new Node(ch[0].symbol.slice(2, ch[0].symbol.length - 1), [])])
        }
        return new Node(symb, ch)
    }
}


var input = fs.readFileSync('./code.prsm', 'utf8')
var parsed = Node.toNode(parse(input))

console.log(input + '\n')
textTree(parsed).forEach(n => console.log(n))

//Ideas for interpreter
//Reference System (register and variables) e.g. Rx006, Vx012
