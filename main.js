//just an example
let lexer = new Lexer()
let codetokens = lexer.process('[(a b c)] ([1 2 3])')
let parser = new Parser()
console.log(parser.process(codetokens))
/* returns:
[
    {
        type: '[]', ch: [
            {
                type: '()', ch: [
                    { type: 'a', ch: [] },
                    { type: 'b', ch: [] },
                    { type: 'b', ch: [] },

                ]
            }
        ]
    },
    {
        type: '()', ch: [
            {
                type: '[]', ch: [
                    { type: '1', ch: [] },
                    { type: '2', ch: [] },
                    { type: '3', ch: [] },

                ]
            }
        ]
    }
]
*/
