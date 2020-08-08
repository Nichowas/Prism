// Generated from Grammar.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by GrammarParser.
function GrammarListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

GrammarListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
GrammarListener.prototype.constructor = GrammarListener;

// Enter a parse tree produced by GrammarParser#iden.
GrammarListener.prototype.enterIden = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#iden.
GrammarListener.prototype.exitIden = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#classState.
GrammarListener.prototype.enterClassState = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#classState.
GrammarListener.prototype.exitClassState = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#valueParameter.
GrammarListener.prototype.enterValueParameter = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#valueParameter.
GrammarListener.prototype.exitValueParameter = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#spreadParameter.
GrammarListener.prototype.enterSpreadParameter = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#spreadParameter.
GrammarListener.prototype.exitSpreadParameter = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#propertyParameter.
GrammarListener.prototype.enterPropertyParameter = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#propertyParameter.
GrammarListener.prototype.exitPropertyParameter = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#parameters.
GrammarListener.prototype.enterParameters = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#parameters.
GrammarListener.prototype.exitParameters = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#tradFunc.
GrammarListener.prototype.enterTradFunc = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#tradFunc.
GrammarListener.prototype.exitTradFunc = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#arrowFunc.
GrammarListener.prototype.enterArrowFunc = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#arrowFunc.
GrammarListener.prototype.exitArrowFunc = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#loop.
GrammarListener.prototype.enterLoop = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#loop.
GrammarListener.prototype.exitLoop = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#threeFuncIter.
GrammarListener.prototype.enterThreeFuncIter = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#threeFuncIter.
GrammarListener.prototype.exitThreeFuncIter = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#inOfIter.
GrammarListener.prototype.enterInOfIter = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#inOfIter.
GrammarListener.prototype.exitInOfIter = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#cond.
GrammarListener.prototype.enterCond = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#cond.
GrammarListener.prototype.exitCond = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#tuple.
GrammarListener.prototype.enterTuple = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#tuple.
GrammarListener.prototype.exitTuple = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#array.
GrammarListener.prototype.enterArray = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#array.
GrammarListener.prototype.exitArray = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#dictionary.
GrammarListener.prototype.enterDictionary = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#dictionary.
GrammarListener.prototype.exitDictionary = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#tradProperty.
GrammarListener.prototype.enterTradProperty = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#tradProperty.
GrammarListener.prototype.exitTradProperty = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#idenProperty.
GrammarListener.prototype.enterIdenProperty = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#idenProperty.
GrammarListener.prototype.exitIdenProperty = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#iterProperty.
GrammarListener.prototype.enterIterProperty = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#iterProperty.
GrammarListener.prototype.exitIterProperty = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#declar.
GrammarListener.prototype.enterDeclar = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#declar.
GrammarListener.prototype.exitDeclar = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#assign.
GrammarListener.prototype.enterAssign = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#assign.
GrammarListener.prototype.exitAssign = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#designator.
GrammarListener.prototype.enterDesignator = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#designator.
GrammarListener.prototype.exitDesignator = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#loopStatement.
GrammarListener.prototype.enterLoopStatement = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#loopStatement.
GrammarListener.prototype.exitLoopStatement = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#ifStatement.
GrammarListener.prototype.enterIfStatement = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#ifStatement.
GrammarListener.prototype.exitIfStatement = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#assignStatement.
GrammarListener.prototype.enterAssignStatement = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#assignStatement.
GrammarListener.prototype.exitAssignStatement = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#declarStatement.
GrammarListener.prototype.enterDeclarStatement = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#declarStatement.
GrammarListener.prototype.exitDeclarStatement = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#groupStatement.
GrammarListener.prototype.enterGroupStatement = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#groupStatement.
GrammarListener.prototype.exitGroupStatement = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#returnStatement.
GrammarListener.prototype.enterReturnStatement = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#returnStatement.
GrammarListener.prototype.exitReturnStatement = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#valueStatement.
GrammarListener.prototype.enterValueStatement = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#valueStatement.
GrammarListener.prototype.exitValueStatement = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#propertyValue.
GrammarListener.prototype.enterPropertyValue = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#propertyValue.
GrammarListener.prototype.exitPropertyValue = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#arrayValue.
GrammarListener.prototype.enterArrayValue = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#arrayValue.
GrammarListener.prototype.exitArrayValue = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#blankConcatValue.
GrammarListener.prototype.enterBlankConcatValue = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#blankConcatValue.
GrammarListener.prototype.exitBlankConcatValue = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#instanceValue.
GrammarListener.prototype.enterInstanceValue = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#instanceValue.
GrammarListener.prototype.exitInstanceValue = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#multExpr.
GrammarListener.prototype.enterMultExpr = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#multExpr.
GrammarListener.prototype.exitMultExpr = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#classValue.
GrammarListener.prototype.enterClassValue = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#classValue.
GrammarListener.prototype.exitClassValue = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#stringValue.
GrammarListener.prototype.enterStringValue = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#stringValue.
GrammarListener.prototype.exitStringValue = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#applyFuncValue.
GrammarListener.prototype.enterApplyFuncValue = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#applyFuncValue.
GrammarListener.prototype.exitApplyFuncValue = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#addExpr.
GrammarListener.prototype.enterAddExpr = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#addExpr.
GrammarListener.prototype.exitAddExpr = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#idenValue.
GrammarListener.prototype.enterIdenValue = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#idenValue.
GrammarListener.prototype.exitIdenValue = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#funcValue.
GrammarListener.prototype.enterFuncValue = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#funcValue.
GrammarListener.prototype.exitFuncValue = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#dictionaryValue.
GrammarListener.prototype.enterDictionaryValue = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#dictionaryValue.
GrammarListener.prototype.exitDictionaryValue = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#bracketValue.
GrammarListener.prototype.enterBracketValue = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#bracketValue.
GrammarListener.prototype.exitBracketValue = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#stringRepValue.
GrammarListener.prototype.enterStringRepValue = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#stringRepValue.
GrammarListener.prototype.exitStringRepValue = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#numberValue.
GrammarListener.prototype.enterNumberValue = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#numberValue.
GrammarListener.prototype.exitNumberValue = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#elementValue.
GrammarListener.prototype.enterElementValue = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#elementValue.
GrammarListener.prototype.exitElementValue = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#tupleValue.
GrammarListener.prototype.enterTupleValue = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#tupleValue.
GrammarListener.prototype.exitTupleValue = function(ctx) {
};



exports.GrammarListener = GrammarListener;