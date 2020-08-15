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
GrammarListener.prototype.enterIden = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#iden.
GrammarListener.prototype.exitIden = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#idenParameter.
GrammarListener.prototype.enterIdenParameter = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#idenParameter.
GrammarListener.prototype.exitIdenParameter = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#spreadParameter.
GrammarListener.prototype.enterSpreadParameter = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#spreadParameter.
GrammarListener.prototype.exitSpreadParameter = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#propertyParameter.
GrammarListener.prototype.enterPropertyParameter = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#propertyParameter.
GrammarListener.prototype.exitPropertyParameter = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#parameters.
GrammarListener.prototype.enterParameters = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#parameters.
GrammarListener.prototype.exitParameters = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#tradFunc.
GrammarListener.prototype.enterTradFunc = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#tradFunc.
GrammarListener.prototype.exitTradFunc = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#arrowFunc.
GrammarListener.prototype.enterArrowFunc = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#arrowFunc.
GrammarListener.prototype.exitArrowFunc = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#forloop.
GrammarListener.prototype.enterForloop = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#forloop.
GrammarListener.prototype.exitForloop = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#whileloop.
GrammarListener.prototype.enterWhileloop = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#whileloop.
GrammarListener.prototype.exitWhileloop = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#threeFuncIter.
GrammarListener.prototype.enterThreeFuncIter = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#threeFuncIter.
GrammarListener.prototype.exitThreeFuncIter = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#inIter.
GrammarListener.prototype.enterInIter = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#inIter.
GrammarListener.prototype.exitInIter = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#ofIter.
GrammarListener.prototype.enterOfIter = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#ofIter.
GrammarListener.prototype.exitOfIter = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#cond.
GrammarListener.prototype.enterCond = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#cond.
GrammarListener.prototype.exitCond = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#tuple.
GrammarListener.prototype.enterTuple = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#tuple.
GrammarListener.prototype.exitTuple = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#array.
GrammarListener.prototype.enterArray = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#array.
GrammarListener.prototype.exitArray = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#dictionary.
GrammarListener.prototype.enterDictionary = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#dictionary.
GrammarListener.prototype.exitDictionary = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#tradProperty.
GrammarListener.prototype.enterTradProperty = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#tradProperty.
GrammarListener.prototype.exitTradProperty = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#idenProperty.
GrammarListener.prototype.enterIdenProperty = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#idenProperty.
GrammarListener.prototype.exitIdenProperty = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#iterProperty.
GrammarListener.prototype.enterIterProperty = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#iterProperty.
GrammarListener.prototype.exitIterProperty = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#declar.
GrammarListener.prototype.enterDeclar = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#declar.
GrammarListener.prototype.exitDeclar = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#setAssign.
GrammarListener.prototype.enterSetAssign = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#setAssign.
GrammarListener.prototype.exitSetAssign = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#multAssign.
GrammarListener.prototype.enterMultAssign = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#multAssign.
GrammarListener.prototype.exitMultAssign = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#divAssign.
GrammarListener.prototype.enterDivAssign = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#divAssign.
GrammarListener.prototype.exitDivAssign = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#addAssign.
GrammarListener.prototype.enterAddAssign = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#addAssign.
GrammarListener.prototype.exitAddAssign = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#subAssign.
GrammarListener.prototype.enterSubAssign = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#subAssign.
GrammarListener.prototype.exitSubAssign = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#modAssign.
GrammarListener.prototype.enterModAssign = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#modAssign.
GrammarListener.prototype.exitModAssign = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#incAssign.
GrammarListener.prototype.enterIncAssign = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#incAssign.
GrammarListener.prototype.exitIncAssign = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#decAssign.
GrammarListener.prototype.enterDecAssign = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#decAssign.
GrammarListener.prototype.exitDecAssign = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#designator.
GrammarListener.prototype.enterDesignator = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#designator.
GrammarListener.prototype.exitDesignator = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#forloopStatement.
GrammarListener.prototype.enterForloopStatement = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#forloopStatement.
GrammarListener.prototype.exitForloopStatement = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#whileloopStatement.
GrammarListener.prototype.enterWhileloopStatement = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#whileloopStatement.
GrammarListener.prototype.exitWhileloopStatement = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#ifStatement.
GrammarListener.prototype.enterIfStatement = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#ifStatement.
GrammarListener.prototype.exitIfStatement = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#assignStatement.
GrammarListener.prototype.enterAssignStatement = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#assignStatement.
GrammarListener.prototype.exitAssignStatement = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#declarStatement.
GrammarListener.prototype.enterDeclarStatement = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#declarStatement.
GrammarListener.prototype.exitDeclarStatement = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#groupStatement.
GrammarListener.prototype.enterGroupStatement = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#groupStatement.
GrammarListener.prototype.exitGroupStatement = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#returnStatement.
GrammarListener.prototype.enterReturnStatement = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#returnStatement.
GrammarListener.prototype.exitReturnStatement = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#valueStatement.
GrammarListener.prototype.enterValueStatement = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#valueStatement.
GrammarListener.prototype.exitValueStatement = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#commentStatement.
GrammarListener.prototype.enterCommentStatement = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#commentStatement.
GrammarListener.prototype.exitCommentStatement = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#lteValue.
GrammarListener.prototype.enterLteValue = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#lteValue.
GrammarListener.prototype.exitLteValue = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#ternaryValue.
GrammarListener.prototype.enterTernaryValue = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#ternaryValue.
GrammarListener.prototype.exitTernaryValue = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#orValue.
GrammarListener.prototype.enterOrValue = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#orValue.
GrammarListener.prototype.exitOrValue = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#blankConcatValue.
GrammarListener.prototype.enterBlankConcatValue = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#blankConcatValue.
GrammarListener.prototype.exitBlankConcatValue = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#instanceValue.
GrammarListener.prototype.enterInstanceValue = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#instanceValue.
GrammarListener.prototype.exitInstanceValue = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#modValue.
GrammarListener.prototype.enterModValue = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#modValue.
GrammarListener.prototype.exitModValue = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#stringValue.
GrammarListener.prototype.enterStringValue = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#stringValue.
GrammarListener.prototype.exitStringValue = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#applyFuncValue.
GrammarListener.prototype.enterApplyFuncValue = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#applyFuncValue.
GrammarListener.prototype.exitApplyFuncValue = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#equalValue.
GrammarListener.prototype.enterEqualValue = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#equalValue.
GrammarListener.prototype.exitEqualValue = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#gteValue.
GrammarListener.prototype.enterGteValue = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#gteValue.
GrammarListener.prototype.exitGteValue = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#andValue.
GrammarListener.prototype.enterAndValue = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#andValue.
GrammarListener.prototype.exitAndValue = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#dictionaryValue.
GrammarListener.prototype.enterDictionaryValue = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#dictionaryValue.
GrammarListener.prototype.exitDictionaryValue = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#bracketValue.
GrammarListener.prototype.enterBracketValue = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#bracketValue.
GrammarListener.prototype.exitBracketValue = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#numberValue.
GrammarListener.prototype.enterNumberValue = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#numberValue.
GrammarListener.prototype.exitNumberValue = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#elementValue.
GrammarListener.prototype.enterElementValue = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#elementValue.
GrammarListener.prototype.exitElementValue = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#addValue.
GrammarListener.prototype.enterAddValue = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#addValue.
GrammarListener.prototype.exitAddValue = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#negateValue.
GrammarListener.prototype.enterNegateValue = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#negateValue.
GrammarListener.prototype.exitNegateValue = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#multValue.
GrammarListener.prototype.enterMultValue = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#multValue.
GrammarListener.prototype.exitMultValue = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#inequalValue.
GrammarListener.prototype.enterInequalValue = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#inequalValue.
GrammarListener.prototype.exitInequalValue = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#propertyValue.
GrammarListener.prototype.enterPropertyValue = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#propertyValue.
GrammarListener.prototype.exitPropertyValue = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#arrayValue.
GrammarListener.prototype.enterArrayValue = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#arrayValue.
GrammarListener.prototype.exitArrayValue = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#notValue.
GrammarListener.prototype.enterNotValue = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#notValue.
GrammarListener.prototype.exitNotValue = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#classValue.
GrammarListener.prototype.enterClassValue = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#classValue.
GrammarListener.prototype.exitClassValue = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#ltValue.
GrammarListener.prototype.enterLtValue = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#ltValue.
GrammarListener.prototype.exitLtValue = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#idenValue.
GrammarListener.prototype.enterIdenValue = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#idenValue.
GrammarListener.prototype.exitIdenValue = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#funcValue.
GrammarListener.prototype.enterFuncValue = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#funcValue.
GrammarListener.prototype.exitFuncValue = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#gtValue.
GrammarListener.prototype.enterGtValue = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#gtValue.
GrammarListener.prototype.exitGtValue = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#boolValue.
GrammarListener.prototype.enterBoolValue = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#boolValue.
GrammarListener.prototype.exitBoolValue = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#stringRepValue.
GrammarListener.prototype.enterStringRepValue = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#stringRepValue.
GrammarListener.prototype.exitStringRepValue = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#tupleValue.
GrammarListener.prototype.enterTupleValue = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#tupleValue.
GrammarListener.prototype.exitTupleValue = function (ctx) {
};


// Enter a parse tree produced by GrammarParser#rangeValue.
GrammarListener.prototype.enterRangeValue = function (ctx) {
};

// Exit a parse tree produced by GrammarParser#rangeValue.
GrammarListener.prototype.exitRangeValue = function (ctx) {
};



exports.GrammarListener = GrammarListener;