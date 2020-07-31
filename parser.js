class Parser {
    //Not really needed
    constructor() { }
    //parse a list ok tokens
    process(tokens) {
        this.tokens = tokens
        //convert to tree form ({type, ch})
        this.Tree()
        //group brackets
        this.fullBracketise()

        //more work needed

        //return output
        return this.tree
    }
    Tree() {
        //output: tree form
        this.tree = this.tokens.map(e => ({ type: e, ch: [] }))
    }
    //transform tree with brackets grouped in tree form
    fullBracketise() {
        //loop through "tree" and run recursive function on start brackets ({,[,(, etc.)
        for (let i = 0; i < this.tree.length; i++) {
            //If a part of start bracket list
            if (Brackets[0].find(e => this.tree[i].type == e))
                this.tree = this.partBracketise(this.tree, i)
        }
    }
    //a recursive funtion for grouping brackets
    partBracketise(tree, i) {
        //tree is parent tree of start bracket, i is index of said bracket

        //get start bracket
        let bracket = tree[i]
        //record index of matching end bracket and indexes of any other brackets between that need grouping
        let [end, brackets] = this.bracketEnd(tree, i)
        //between brackets
        let between = tree.slice(i + 1, end)

        //loop through the inbetween brackets
        for (let j in brackets) {
            //group them
            let pbr = this.partBracketise(between, brackets[j] - i - 1)
            //offsets index of inbetween brackets by any elements that were cut in grouping
            brackets = brackets.map(e => e + pbr.length - between.length)
            //update between
            between = pbr
        }
        //cut inbetween and put processed between into ch of starting bracket
        tree.splice(i + 1, end - i)
        bracket.ch = between

        //adds end brackets symbol for "aesthetics"
        bracket.type += Brackets[1][Brackets[0].findIndex(e => e == bracket.type)]
        //return processed tree
        return tree
    }
    //gets end bracket index and indexes of other brackets between
    bracketEnd(tree, i) {
        //bracket count should be 0 after end bracket, inbrackets is brackets needed to be grouped inbetween
        let bracketCount = 1, inbrackets = [],
            //start and end bracket symbols ([],{},(), etc.)
            brs = tree[i].type, bre = Brackets[1][Brackets[0].findIndex(e => e == brs)]
        //skips over start
        i++
        //stops at index after end bracket (why i is subtracted by 1 at return statement) or if no end bracket is found
        while (i < tree.length && bracketCount != 0) {
            //start increases bracket count (further into depth)
            if (tree[i].type == brs) bracketCount++
            //end decreases bracket count (comes out of a layer of depth)
            if (tree[i].type == bre) bracketCount--
            //record any inbetween brackets and increment
            if (Brackets[0].find(e => e == tree[i].type)) inbrackets.push(i)
            i++
        }
        //return index of end bracket and inbetween brackets
        return [i - 1, inbrackets]
    }
}