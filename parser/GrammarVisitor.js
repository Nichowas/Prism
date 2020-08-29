// Generated from Grammar.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by GrammarParser.

function GrammarVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

GrammarVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
GrammarVisitor.prototype.constructor = GrammarVisitor;

// Visit a parse tree produced by GrammarParser#all.
GrammarVisitor.prototype.visitAll = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#iden.
GrammarVisitor.prototype.visitIden = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#idenParameter.
GrammarVisitor.prototype.visitIdenParameter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#spreadParameter.
GrammarVisitor.prototype.visitSpreadParameter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#propertyParameter.
GrammarVisitor.prototype.visitPropertyParameter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#parameters.
GrammarVisitor.prototype.visitParameters = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#tradFunc.
GrammarVisitor.prototype.visitTradFunc = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#arrowFunc.
GrammarVisitor.prototype.visitArrowFunc = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#forloop.
GrammarVisitor.prototype.visitForloop = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#whileloop.
GrammarVisitor.prototype.visitWhileloop = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#threeFuncIter.
GrammarVisitor.prototype.visitThreeFuncIter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#inIter.
GrammarVisitor.prototype.visitInIter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#ofIter.
GrammarVisitor.prototype.visitOfIter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#cond.
GrammarVisitor.prototype.visitCond = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#array.
GrammarVisitor.prototype.visitArray = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#dictionary.
GrammarVisitor.prototype.visitDictionary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#tradProperty.
GrammarVisitor.prototype.visitTradProperty = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#idenProperty.
GrammarVisitor.prototype.visitIdenProperty = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#iterProperty.
GrammarVisitor.prototype.visitIterProperty = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#declar.
GrammarVisitor.prototype.visitDeclar = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#setAssign.
GrammarVisitor.prototype.visitSetAssign = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#multAssign.
GrammarVisitor.prototype.visitMultAssign = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#divAssign.
GrammarVisitor.prototype.visitDivAssign = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#addAssign.
GrammarVisitor.prototype.visitAddAssign = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#subAssign.
GrammarVisitor.prototype.visitSubAssign = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#modAssign.
GrammarVisitor.prototype.visitModAssign = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#incAssign.
GrammarVisitor.prototype.visitIncAssign = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#decAssign.
GrammarVisitor.prototype.visitDecAssign = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#designator.
GrammarVisitor.prototype.visitDesignator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#forloopStatement.
GrammarVisitor.prototype.visitForloopStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#whileloopStatement.
GrammarVisitor.prototype.visitWhileloopStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#ifStatement.
GrammarVisitor.prototype.visitIfStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#funcStatement.
GrammarVisitor.prototype.visitFuncStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#unpackStatement.
GrammarVisitor.prototype.visitUnpackStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#assignStatement.
GrammarVisitor.prototype.visitAssignStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#declarStatement.
GrammarVisitor.prototype.visitDeclarStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#groupStatement.
GrammarVisitor.prototype.visitGroupStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#blockStatement.
GrammarVisitor.prototype.visitBlockStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#returnStatement.
GrammarVisitor.prototype.visitReturnStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#valueStatement.
GrammarVisitor.prototype.visitValueStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#commentStatement.
GrammarVisitor.prototype.visitCommentStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#lteValue.
GrammarVisitor.prototype.visitLteValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#ternaryValue.
GrammarVisitor.prototype.visitTernaryValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#orValue.
GrammarVisitor.prototype.visitOrValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#blankConcatValue.
GrammarVisitor.prototype.visitBlankConcatValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#instanceValue.
GrammarVisitor.prototype.visitInstanceValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#modValue.
GrammarVisitor.prototype.visitModValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#metaValue.
GrammarVisitor.prototype.visitMetaValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#stringValue.
GrammarVisitor.prototype.visitStringValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#applyFuncValue.
GrammarVisitor.prototype.visitApplyFuncValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#equalValue.
GrammarVisitor.prototype.visitEqualValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#gteValue.
GrammarVisitor.prototype.visitGteValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#andValue.
GrammarVisitor.prototype.visitAndValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#dictionaryValue.
GrammarVisitor.prototype.visitDictionaryValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#numberValue.
GrammarVisitor.prototype.visitNumberValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#bracketValue.
GrammarVisitor.prototype.visitBracketValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#elementValue.
GrammarVisitor.prototype.visitElementValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#addValue.
GrammarVisitor.prototype.visitAddValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#negateValue.
GrammarVisitor.prototype.visitNegateValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#multValue.
GrammarVisitor.prototype.visitMultValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#inequalValue.
GrammarVisitor.prototype.visitInequalValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#propertyValue.
GrammarVisitor.prototype.visitPropertyValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#arrayValue.
GrammarVisitor.prototype.visitArrayValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#notValue.
GrammarVisitor.prototype.visitNotValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#classValue.
GrammarVisitor.prototype.visitClassValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#ltValue.
GrammarVisitor.prototype.visitLtValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#idenValue.
GrammarVisitor.prototype.visitIdenValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#funcValue.
GrammarVisitor.prototype.visitFuncValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#gtValue.
GrammarVisitor.prototype.visitGtValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#boolValue.
GrammarVisitor.prototype.visitBoolValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#stringRepValue.
GrammarVisitor.prototype.visitStringRepValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#rangeValue.
GrammarVisitor.prototype.visitRangeValue = function(ctx) {
  return this.visitChildren(ctx);
};



exports.GrammarVisitor = GrammarVisitor;