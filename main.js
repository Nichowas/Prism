var antlr4 = require('antlr4'),
    fs = require('fs'),
    GrammarLexer = require('./parser/GrammarLexer').GrammarLexer,
    GrammarParser = require('./parser/GrammarParser').GrammarParser
var parse = (code) => {
    let chars = new antlr4.InputStream(code),
        lexer = new GrammarLexer(chars),
        tokens = new antlr4.CommonTokenStream(lexer),
        parser = new GrammarParser(tokens)
    parser.buildParseTrees = true;
    return parser.all()
}
var textTree = (tree) => {
    let out = ''
    let txtTree = (tree, indent = "", last = true, notroot = false) => {
        out += `${indent}${notroot ? (last ? "└╴ " : "├╴ ") : ''}${tree.string} \n`
        if (notroot)
            indent += last ? "   " : "│  ";
        for (let i = 0; i < tree.ch.length; i++) {
            txtTree(tree.ch[i], indent, i == tree.ch.length - 1, true);
        }
    }
    txtTree(tree)
    return out
}

class Node {
    constructor(symbol, ch, add = {}) {
        this.symbol = symbol
        this.ch = ch
        for (let [i, e] of Object.entries(add)) this[i] = e
        Object.defineProperty(this, 'string', {
            get: () => {
                let symb = this.symbol,
                    type = this.type ? ` (${this.type})` : '',
                    val = (this.value != undefined) ? (` => ${
                        this.value.returnVal ?
                            '$' + this.value.returnVal.str() :
                            this.value.str()
                        }`) : '',
                    //scope may or may not be represented in tree (it's too messy)
                    scope = this.scope ? ` {${Object.entries(this.scope).map(v => `${v[0]}: ${v[1].str()}`)}}` : ''
                return `${symb}${type}${val}`
            }
        })
    }
    exec(scope = {}) {
        this.scope = scope
        switch (this.symbol) {
            case 'iden': {
                let local = scope[this.ch[0].symbol], global = Node.root.scope[this.ch[0].symbol]
                this.value = local ? local : global
                return this.value
            }
            case 'boolean': {
                let bool = new Variable('boolean', this.ch[0].symbol == 'true')
                this.value = bool.saveTo('r')
                return this.value
            }
            case 'number': {
                let num = new Variable('number', Number(this.ch[0].symbol))
                this.value = num.saveTo('r')
                return this.value
            }
            case 'string': {
                let str = new Variable('string', this.ch[0].symbol)
                this.value = str.saveTo('r')
                return this.value
            }
            case 'array': {
                let ch = []
                this.ch.forEach(c => {
                    let ref = c.exec(scope)
                    if (c.type == 'spread' && ref.v.type == 'array') {
                        ch.push(...ref.v.val)
                        return
                    }
                    ch.push(ref)
                })
                let arr = new Variable('array', ch)
                this.value = arr.saveTo('r')
                return this.value
            }
            case 'dictionary': {
                let ch = []
                this.ch.forEach(c => {
                    if (c.type == 'spread') {
                        let ref = c.ch[0].exec(scope)
                        if (ref.v.type == 'dictionary') {
                            ch.push(...ref.v.val)
                            return
                        }
                    }
                    let key = new Variable('string', c.ch[0].ch[0].symbol).saveTo('r')
                    c.value = key
                    ch.push(key, c.ch[1].exec(scope))
                })
                this.value = new Variable('dictionary', ch).saveTo('r')
                return this.value
            }
            case 'func': {
                let func = new Variable('function', this.address)
                this.value = func.saveTo('r')
                return this.value
            }
            case 'designator': {
                for (let c of this.ch) {
                    let symb = c.ch[0].symbol
                    let val = new Variable('undefined', undefined)
                    let ref = val.saveTo('v')
                    // console.log(this.type)
                    switch (this.type.join(' ')) {
                        case 'var':
                            scope[symb] = ref
                            break
                        case 'pub':
                            Node.root.scope[symb] = ref
                            break
                    }
                }
                break;
            }
            case 'assign': {
                let iden = this.ch[0].exec(scope), val = this.ch[1].exec(scope)
                if (val) {
                    // if (['number', 'string', 'boolean'].some(v => v == val.v.type))
                    iden.setVar(val.v.copy())
                    // else
                    // iden.v = val
                    val.delete()
                    this.value = iden
                    return this.value
                }
                break;
            }
            case '+': {
                let v1 = this.ch[0].exec(scope), v2 = this.ch[1].exec(scope)
                if (v1 && v2) {
                    v1.delete(); v2.delete()
                    let v3 = new Variable('number', v1.v.val + v2.v.val)
                    this.value = v3.saveTo('r')
                    return this.value
                }
                break;
            }
            case '*': {
                let v1 = this.ch[0].exec(scope), v2 = this.ch[1].exec(scope)
                if (v1 && v2) {
                    v1.delete(); v2.delete()
                    let v3 = new Variable('number', v1.v.val * v2.v.val)
                    this.value = v3.saveTo('r')
                    return this.value

                }
                break;
            }
            case '-': {
                let v1 = this.ch[0].exec(scope), v2 = this.ch[1].exec(scope)
                if (v1 && v2) {
                    v1.delete(); v2.delete()
                    let v3 = new Variable('number', v1.v.val - v2.v.val)
                    this.value = v3.saveTo('r')
                    return this.value

                }
                break;
            }
            case '/': {
                let v1 = this.ch[0].exec(scope), v2 = this.ch[1].exec(scope)
                if (v1 && v2) {
                    v1.delete(); v2.delete()
                    let v3 = new Variable('number', v1.v.val / v2.v.val)
                    this.value = v3.saveTo('r')
                    return this.value

                }
                break;
            }
            case '%': {
                let v1 = this.ch[0].exec(scope), v2 = this.ch[1].exec(scope)
                if (v1 && v2) {
                    v1.delete(); v2.delete()
                    let v3 = new Variable('number', v1.v.val % v2.v.val)
                    this.value = v3.saveTo('r')
                    return this.value

                }
                break;
            }
            case '>': {
                let v1 = this.ch[0].exec(scope), v2 = this.ch[1].exec(scope)
                if (v1 && v2) {
                    v1.delete(); v2.delete()
                    let v3 = new Variable('boolean', v1.v.val > v2.v.val)
                    this.value = v3.saveTo('r')
                    return this.value

                }
                break;
            }
            case '<': {
                let v1 = this.ch[0].exec(scope), v2 = this.ch[1].exec(scope)
                if (v1 && v2) {
                    v1.delete(); v2.delete()
                    let v3 = new Variable('boolean', v1.v.val < v2.v.val)
                    this.value = v3.saveTo('r')
                    return this.value

                }
                break;
            }
            case '>=': {
                let v1 = this.ch[0].exec(scope), v2 = this.ch[1].exec(scope)
                if (v1 && v2) {
                    v1.delete(); v2.delete()
                    let v3 = new Variable('boolean', v1.v.val >= v2.v.val)
                    this.value = v3.saveTo('r')
                    return this.value

                }
                break;
            }
            case '<=': {
                let v1 = this.ch[0].exec(scope), v2 = this.ch[1].exec(scope)
                if (v1 && v2) {
                    v1.delete(); v2.delete()
                    let v3 = new Variable('boolean', v1.v.val <= v2.v.val)
                    this.value = v3.saveTo('r')
                    return this.value

                }
                break;
            }
            case '==': {
                let v1 = this.ch[0].exec(scope), v2 = this.ch[1].exec(scope)
                if (v1 && v2) {
                    v1.delete(); v2.delete()
                    let v3 = new Variable('boolean', v1.v.val == v2.v.val)
                    this.value = v3.saveTo('r')
                    return this.value

                }
                break;
            }
            case '&&': {
                let v1 = this.ch[0].exec(scope), v2 = this.ch[1].exec(scope)
                if (v1 && v2) {
                    v1.delete(); v2.delete()
                    let v3 = new Variable('boolean', v1.v.val && v2.v.val)
                    this.value = v3.saveTo('r')
                    return this.value
                }
                break;
            }
            case '||': {
                let v1 = this.ch[0].exec(scope), v2 = this.ch[1].exec(scope)
                if (v1 && v2) {
                    v1.delete(); v2.delete()
                    let v3 = new Variable('boolean', v1.v.val || v2.v.val)
                    this.value = v3.saveTo('r')
                    return this.value
                }
                break;
            }
            case '!': {
                let v1 = this.ch[0].exec(scope)
                if (v1) {
                    v1.delete()
                    let v2 = new Variable('boolean', !v1.v.val)
                    this.value = v2.saveTo('r')
                    return this.value
                }
                break;
            }
            case 'for': {
                let iter = this.ch[0], block = this.ch[1]
                if (iter.type = 'bce') {
                    let [b, c, e] = iter.ch
                    b.exec(scope)
                    while (true) {
                        block.exec(scope)
                        if (block.value && block.value.returnVal) {
                            this.value = block.value
                            return this.value
                        }
                        if (!c.exec(scope).v.val)
                            break
                        e.exec(scope)
                    }
                }
                break
            }
            case 'while': {
                let cond = this.ch[0], block = this.ch[1]
                while (true) {
                    block.exec(scope)
                    if (block.value && block.value.returnVal) {
                        this.value = block.value
                        return this.value
                    }
                    if (!cond.exec(scope).v.val)
                        break
                }
                break
            }
            case 'if': {
                for (let i = 0; i < this.ch.length;) {
                    if (this.ch[i + 1] && (this.ch[i + 1].type == 'if' || this.ch[i + 1].type == 'elif')) {
                        if (this.ch[i].exec(scope).v.val) {
                            this.value = this.ch[i + 1].exec(scope)
                            return this.value
                        }
                        i += 2
                    } else {
                        this.value = this.ch[i].exec(scope)
                        return this.value
                    }
                }
                break
            }
            case 'apply': {
                let func = this.ch[0].exec(scope),
                    params = this.ch[1].ch.map(c => c.exec(scope)),
                    node = Node.root.getNodeByAddress(func.v.val),
                    expected = node.ch[0].ch.map(c => c.ch[0].symbol), newScope = {}
                expected.forEach((v, i) => newScope[v] = params[i])
                let val = node.ch[1].exec({ ...node.scope, ...newScope })
                this.value = val && val.returnVal
                return this.value
            }
            case 'element': {
                let obj = this.ch[0].exec(scope),
                    index = this.ch[1].exec(scope)
                if (obj.v.type == 'array')
                    this.value = obj.v.val[index.v.val]
                else if (obj.v.type == 'dictionary') {
                    let key = obj.v.val.findIndex((ref, i) => i % 2 == 0 && ref.v.val === index.v.val)
                    this.value = obj.v.val[key + 1]
                }
                return this.value
            }
            case 'return': {
                this.value = { returnVal: this.ch[0].exec(scope) }
                return this.value
            }
            case 'block': {
                let i = 0, ret = undefined
                if (this.ch.length != 0)
                    do {
                        ret = this.ch[i].exec(scope)
                        i++
                    } while (i < this.ch.length && !(ret && ret.returnVal))
                if (ret && ret.returnVal) {
                    this.value = ret
                    return this.value
                }
                break
            }
            default: {
                for (let c of this.ch) c.exec(scope)
                break;
            }
        }
    }
    setAddress(address = []) {
        this.address = address
        this.ch.forEach((c, i) => c.setAddress([...address, i]))
        return this
    }
    getNodeByAddress(address, d = 0) {
        if (address.length != 0)
            return this.ch[address[0]].getNodeByAddress(address.slice(1), d + 1)
        return this
    }
    static number(n) {
        return new Node('number', [new Node(n, [])])
    }
    static toNode(tree, root = true) {
        let symb, ch = tree.children ? tree.children.map(n => Node.toNode(n, false)) : []
        if (root)
            return new Node('block', ch).setAddress()
        else if (ch.length > 0) symb = tree.constructor.name.replace(/Context/, '')
        else symb = tree.symbol.text
        switch (symb) {
            //Classes
            case 'InstanceValue':
                return new Node('new', [ch[1]])
            case 'ClassValue':
                return new Node('class', [ch[1]])
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
                if (ch[2].symbol != 'block') ch[2] = new Node('block', [new Node('return', [ch[2]])])
                return new Node('func', [ch[0], ch[2]])
            case 'TradFunc':
                if (ch[2].symbol != 'block') ch[2] = new Node('block', [new Node('return', [ch[2]])])
                return new Node('func', [ch[1], ch[2]])
            case 'FuncValue':
                return ch[0]
            case 'ApplyFuncValue': {
                symb = 'apply'
                let params = ch.slice(2, ch.length - 1)
                for (let i = 0; i < params.length;) {
                    if (params[i].symbol == '...') {
                        params.splice(i, 1)
                        params[i].type = 'spread'
                        continue
                    }
                    if (params[i].symbol == ',') { params.splice(i, 1); continue }
                    i++
                }
                ch = [ch[0], new Node('params', params)]
                break
            }
            case 'ReturnStatement':
                return new Node('return', [ch[1]])
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
                ch = ch.filter(c => c.symbol != ';')
                ch = [...ch, ...Array.from({ length: 3 - ch.length }, _ => new Node('block', []))]
                return new Node('iter', ch, { type: 'bce' })
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
                return new Node('string', [new Node(ch[0].symbol.slice(1, ch[0].symbol.length - 1), [])])
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
            case 'ElementValue':
                return new Node('element', [ch[0], ch[2]])
            case 'PropertyValue':
                return new Node('element', [ch[0], new Node('string', [ch[2].ch[0]])])
            /*
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
            */
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
            case 'ModAssign':
                return new Node('assign', [ch[0], new Node('%', [ch[0], ch[2]])])
            case 'IncAssign':
                return new Node('assign', [ch[0], new Node('+', [ch[0], Node.number(1)])])
            case 'DecAssign':
                return new Node('assign', [ch[0], new Node('-', [ch[0], Node.number(1)])])
            case 'DeclarStatement':
                return ch[0]
            case 'Designator':
                return new Node('designator', [], { type: ch.map(c => c.symbol) })
            case 'Declar':
                ch = ch.filter(c => c.symbol != ',')
                ch[0].ch = ch.slice(1).map(c => c.ch[0])
                return new Node('block', ch)
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
                return new Node('!', [new Node('==', [ch[0], ch[2]])])
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
    static runCode(code) {
        var parsed = Node.toNode(parse(code))
        //Set up interpreter
        Node.root = parsed
        Reference.total = { r: 0, v: 0 }
        Reference.refs = []

        parsed.exec()
        return textTree(parsed)
    }
    static varOutput(cleaned = true) {
        let scope = Node.root.scope, out = ''
        for (let i in scope) {
            out += `${i}: ${cleaned ? scope[i].valstr() : scope[i].val()}\n`
        }
        return out
    }
}
class Reference {
    constructor(type, index) {
        this.type = type
        this.index = index
        Reference.refs.push(this)
        Reference.total[this.type]++
    }
    valstr(raw) {
        let v = this.v.val
        let clean = val => {
            if (val instanceof Reference)
                return raw ? val.str() : val.valstr(raw)
            return val
        }
        if (this.v.type == 'array')
            return `[${v.map(clean)}]`
        if (this.v.type == 'dictionary') {
            let out = []
            for (let i = 0; i < v.length; i += 2) out.push(`${clean(v[i])}: ${clean(v[i + 1])}`)
            return `{ ${out.join(', ')} }`
        }
        if (this.v.type == 'function')
            return `(${v.map(clean)})`
        if (this.v.type == 'string')
            return `"${v}"`
        return clean(v)
    }
    setVar(v) {
        v.ref = this
        this.v = v
    }
    str() {
        return `${this.type}x${this.index}${this.deleted() ? ' (X)' : ''}`
    }
    equals(ref) {
        return ref.type == this.type && ref.index == this.index
    }
    isReferenced() {
        let out = []
        Reference.refs.forEach(ref => {
            if (ref.v.type == 'array')
                return out.push(...ref.v.val.filter(ref2 => this.equals(ref2)))
            if (ref.v.type == 'dictionary')
                return out.push(...ref.v.val.filter(ref2 => this.equals(ref2)))
        })
        return out
    }
    delete() {
        if (this.isReferenced().length == 0 && this.type != 'v') {
            Reference.refs.forEach((ref, i) => {
                if (this.equals(ref))
                    return Reference.refs.splice(i, 1)
                if (this.type == ref.type && ref.index > this.index)
                    ref.index--
            })
            Reference.total[this.type]--
        }
    }
    deleted() {
        return !Reference.refs.find(ref => ref === this)
    }
    static getRef(type, index) {
        return Reference.refs.find(r => r.type == type && r.index == index)
    }
    static memory(raw = false) {
        let out = ''
        for (let ref of Reference.refs) out += `${ref.str()}: ${ref.valstr(raw)} \n`
        return out
    }
}

class Variable {
    constructor(type, val) {
        this.type = type
        this.val = val
    }
    saveTo(reg) {
        let i = Reference.total[reg]
        let ref = new Reference(reg, i)
        ref.setVar(this)
        return ref
    }
    copy() {
        return new Variable(this.type, this.val)
    }
}

var input = fs.readFileSync('./code.prsm', 'utf8')
console.log(input + '\n')
console.log(Node.runCode(input))
console.log(Reference.memory(false))
console.log(Node.varOutput())
