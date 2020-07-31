class Lexer {
    //Not really needed
    constructor() { }
    //Advance index along
    advance(len = 1) {
        this.i += len
        this.symbol = this.code[this.i]
    }
    //Lex a chunk of code
    process(code) {
        //output: list of tokens
        this.tokens = []
        this.code = code
        //initialise
        this.i = 0
        this.symbol = this.code[0]
        //loop for as long as current symbol is not undefined (index in good range)
        while (this.symbol) {
            //White space
            if (this.symbol == ' ') {
                this.advance()
                continue
            }
            //Check for any matched tokens
            let token = this.checkTokens()
            //If there is a matched token
            if (token) {
                //add and advance
                this.addToken(token)
                this.advance(token.length)
                continue
            }
            //It must be a number or identifer (variable name)

            //If current symbol is in number list (0-9)
            if (Numbers.find(e => this.symbol == e)) {
                //Number - process and add
                let num = this.number()
                this.addToken(num)
                continue
            }
            //identifier - process and add
            let iden = this.iden()
            this.addToken(iden)
        }
        //return output
        return this.tokens
    }
    //Checks if current symbol is beggining of a token
    checkTokens() {
        //loop through tokens array (it's in order which was why it was important to sort token list)
        for (let token of Tokens) {
            //transform token into equivalent part of code
            let text = token.split('').map((_, i) => this.code[this.i + i]).join('')
            //if it matches return it
            if (text == token)
                return token
        }
    }
    //Finds number that current symbol is the beggining of
    number() {
        //output: string representing the number
        let num = ''
        //while a part of number (add more checks involing decimal places)
        while (Numbers.find(e => this.symbol == e)) {
            //add and advane
            num += this.symbol
            this.advance()
        }
        //return output
        return num
    }
    //Finds identifier that current symbol is the beggining of
    iden() {
        //output: string representing identifier (name of variable)
        let iden = ''
        //while still in the alphabet (a part of the identifier)
        while (Alphabet.find(e => this.symbol == e)) {
            //add and advance
            iden += this.symbol
            this.advance()
        }
        //return output
        return iden
    }
    //add a token to output
    addToken(token) {
        this.tokens.push(token)
    }
}