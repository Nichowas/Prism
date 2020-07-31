//List of tokens for lexer
let Tokens = 'var = ( ) [ ] { } + - * / . ,'.split(' ')
//Sorts to ensure longer tokens are priorites in matching to fix edge cases (e.g. matches += to += before +)
Tokens = ['/n', ...Tokens.sort((a, b) => b.length - a.length)]

// [0, 1, ..., 8, 9] (0 - 9)
let Numbers = Array.from({ length: 10 }, (_, i) => i.toString())

// [a, b, ..., y, z] (Alphabet)
let Alphabet = Array.from({ length: 26 }, (_, i) => (i + 10).toString(36))

// Brackets: ( ) { } [ ]
let Brackets = [
    ['(', '[', '{'],
    [')', ']', '}']
]