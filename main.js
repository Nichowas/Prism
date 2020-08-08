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
    if (tree.children) {
        let ch = tree.children.map(n => textTree(n)), out = [tree.constructor.name]
        ch.forEach(i => out.push(...i.map(n => '>  ' + n)))
        return out
    } else
        return [tree.symbol.text]
}
var input = fs.readFileSync('./code.prsm', 'utf8')
console.log(input + '\n')
textTree(parse(input)).forEach(n => console.log(n))
