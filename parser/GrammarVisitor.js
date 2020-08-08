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

// Visit a parse tree produced by GrammarParser#iden.
GrammarVisitor.prototype.visitIden = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#classState.
GrammarVisitor.prototype.visitClassState = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#valueParameter.
GrammarVisitor.prototype.visitValueParameter = function(ctx) {
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


// Visit a parse tree produced by GrammarParser#loop.
GrammarVisitor.prototype.visitLoop = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#threeFuncIter.
GrammarVisitor.prototype.visitThreeFuncIter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#inOfIter.
GrammarVisitor.prototype.visitInOfIter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#cond.
GrammarVisitor.prototype.visitCond = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#tuple.
GrammarVisitor.prototype.visitTuple = function(ctx) {
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


// Visit a parse tree produced by GrammarParser#assign.
GrammarVisitor.prototype.visitAssign = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#designator.
GrammarVisitor.prototype.visitDesignator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#loopStatement.
GrammarVisitor.prototype.visitLoopStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#ifStatement.
GrammarVisitor.prototype.visitIfStatement = function(ctx) {
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


// Visit a parse tree produced by GrammarParser#returnStatement.
GrammarVisitor.prototype.visitReturnStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#valueStatement.
GrammarVisitor.prototype.visitValueStatement = function(ctx) {
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


// Visit a parse tree produced by GrammarParser#blankConcatValue.
GrammarVisitor.prototype.visitBlankConcatValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#instanceValue.
GrammarVisitor.prototype.visitInstanceValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#multExpr.
GrammarVisitor.prototype.visitMultExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#classValue.
GrammarVisitor.prototype.visitClassValue = function(ctx) {
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


// Visit a parse tree produced by GrammarParser#addExpr.
GrammarVisitor.prototype.visitAddExpr = function(ctx) {
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


// Visit a parse tree produced by GrammarParser#dictionaryValue.
GrammarVisitor.prototype.visitDictionaryValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#bracketValue.
GrammarVisitor.prototype.visitBracketValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#stringRepValue.
GrammarVisitor.prototype.visitStringRepValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#numberValue.
GrammarVisitor.prototype.visitNumberValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#elementValue.
GrammarVisitor.prototype.visitElementValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#tupleValue.
GrammarVisitor.prototype.visitTupleValue = function(ctx) {
  return this.visitChildren(ctx);
};



exports.GrammarVisitor = GrammarVisitor;