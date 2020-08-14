import {CommonTokenStream, Parser, ParserRuleContext, Token} from 'antlr4';
import {TerminalNode} from 'antlr4/tree/Tree';


export declare class IdenContext extends ParserRuleContext {
    
    WORD(): TerminalNode;
    
}

export declare class PropertyParameterContext extends ParserRuleContext {
    
    iden(): IdenContext;
    
}

export declare class SpreadParameterContext extends ParserRuleContext {
    
    iden(): IdenContext;
    
}

export declare class IdenParameterContext extends ParserRuleContext {
    
    iden(): IdenContext;
    
}

export declare class ParameterContext extends ParserRuleContext {
    
}

export declare class ParametersContext extends ParserRuleContext {
    
}

export declare class TradFuncContext extends ParserRuleContext {
    
    parameters(): ParametersContext;
    
    statement(): StatementContext;
    
}

export declare class ArrowFuncContext extends ParserRuleContext {
    
    statement(): StatementContext;
    
    parameters(): ParametersContext;
    
    parameter(): ParameterContext;
    
}

export declare class FuncContext extends ParserRuleContext {
    
}

export declare class ForloopContext extends ParserRuleContext {
    
    iter(): IterContext;
    
    statement(): StatementContext;
    
}

export declare class WhileloopContext extends ParserRuleContext {
    
    value(): ValueContext;
    
    statement(): StatementContext;
    
}

export declare class InIterContext extends ParserRuleContext {
    
    designator(): DesignatorContext;
    
    iden(): IdenContext;
    
    value(): ValueContext;
    
}

export declare class OfIterContext extends ParserRuleContext {
    
    designator(): DesignatorContext;
    
    iden(): IdenContext;
    
    value(): ValueContext;
    
}

export declare class ThreeFuncIterContext extends ParserRuleContext {
    
    value(): ValueContext;
    
}

export declare class IterContext extends ParserRuleContext {
    
}

export declare class CondContext extends ParserRuleContext {
    
}

export declare class TupleContext extends ParserRuleContext {
    
}

export declare class ArrayContext extends ParserRuleContext {
    
}

export declare class DictionaryContext extends ParserRuleContext {
    
}

export declare class IterPropertyContext extends ParserRuleContext {
    
    value(): ValueContext;
    
}

export declare class IdenPropertyContext extends ParserRuleContext {
    
    iden(): IdenContext;
    
}

export declare class TradPropertyContext extends ParserRuleContext {
    
    iden(): IdenContext;
    
    value(): ValueContext;
    
}

export declare class PropertyContext extends ParserRuleContext {
    
}

export declare class DeclarContext extends ParserRuleContext {
    
    designator(): DesignatorContext;
    
}

export declare class SubAssignContext extends ParserRuleContext {
    
    iden(): IdenContext;
    
    value(): ValueContext;
    
}

export declare class DecAssignContext extends ParserRuleContext {
    
    iden(): IdenContext;
    
}

export declare class AddAssignContext extends ParserRuleContext {
    
    iden(): IdenContext;
    
    value(): ValueContext;
    
}

export declare class DivAssignContext extends ParserRuleContext {
    
    iden(): IdenContext;
    
    value(): ValueContext;
    
}

export declare class ModAssignContext extends ParserRuleContext {
    
    iden(): IdenContext;
    
    value(): ValueContext;
    
}

export declare class MultAssignContext extends ParserRuleContext {
    
    iden(): IdenContext;
    
    value(): ValueContext;
    
}

export declare class IncAssignContext extends ParserRuleContext {
    
    iden(): IdenContext;
    
}

export declare class SetAssignContext extends ParserRuleContext {
    
    iden(): IdenContext;
    
    value(): ValueContext;
    
}

export declare class AssignContext extends ParserRuleContext {
    
}

export declare class DesignatorContext extends ParserRuleContext {
    
}

export declare class CommentStatementContext extends ParserRuleContext {
    
    COMMENT(): TerminalNode;
    
}

export declare class WhileloopStatementContext extends ParserRuleContext {
    
    whileloop(): WhileloopContext;
    
}

export declare class ForloopStatementContext extends ParserRuleContext {
    
    forloop(): ForloopContext;
    
}

export declare class ValueStatementContext extends ParserRuleContext {
    
    value(): ValueContext;
    
}

export declare class AssignStatementContext extends ParserRuleContext {
    
    assign(): AssignContext;
    
}

export declare class IfStatementContext extends ParserRuleContext {
    
    cond(): CondContext;
    
}

export declare class ReturnStatementContext extends ParserRuleContext {
    
    value(): ValueContext;
    
}

export declare class DeclarStatementContext extends ParserRuleContext {
    
    declar(): DeclarContext;
    
}

export declare class GroupStatementContext extends ParserRuleContext {
    
}

export declare class StatementContext extends ParserRuleContext {
    
}

export declare class LteValueContext extends ParserRuleContext {
    
}

export declare class TernaryValueContext extends ParserRuleContext {
    
}

export declare class OrValueContext extends ParserRuleContext {
    
}

export declare class BlankConcatValueContext extends ParserRuleContext {
    
}

export declare class InstanceValueContext extends ParserRuleContext {
    
    value(): ValueContext;
    
}

export declare class ModValueContext extends ParserRuleContext {
    
}

export declare class StringValueContext extends ParserRuleContext {
    
    STRING(): TerminalNode;
    
}

export declare class ApplyFuncValueContext extends ParserRuleContext {
    
    value(): ValueContext;
    
    tuple(): TupleContext;
    
}

export declare class EqualValueContext extends ParserRuleContext {
    
}

export declare class GteValueContext extends ParserRuleContext {
    
}

export declare class AndValueContext extends ParserRuleContext {
    
}

export declare class DictionaryValueContext extends ParserRuleContext {
    
    dictionary(): DictionaryContext;
    
}

export declare class BracketValueContext extends ParserRuleContext {
    
    value(): ValueContext;
    
}

export declare class NumberValueContext extends ParserRuleContext {
    
    NUM(): TerminalNode;
    
}

export declare class ElementValueContext extends ParserRuleContext {
    
}

export declare class AddValueContext extends ParserRuleContext {
    
}

export declare class NegateValueContext extends ParserRuleContext {
    
    value(): ValueContext;
    
}

export declare class MultValueContext extends ParserRuleContext {
    
}

export declare class InequalValueContext extends ParserRuleContext {
    
}

export declare class PropertyValueContext extends ParserRuleContext {
    
    value(): ValueContext;
    
    iden(): IdenContext;
    
}

export declare class ArrayValueContext extends ParserRuleContext {
    
    array(): ArrayContext;
    
}

export declare class NotValueContext extends ParserRuleContext {
    
    value(): ValueContext;
    
}

export declare class ClassValueContext extends ParserRuleContext {
    
    value(): ValueContext;
    
}

export declare class LtValueContext extends ParserRuleContext {
    
}

export declare class IdenValueContext extends ParserRuleContext {
    
    iden(): IdenContext;
    
}

export declare class FuncValueContext extends ParserRuleContext {
    
    func(): FuncContext;
    
}

export declare class GtValueContext extends ParserRuleContext {
    
}

export declare class BoolValueContext extends ParserRuleContext {
    
    TRUE(): TerminalNode;
    
    FALSE(): TerminalNode;
    
}

export declare class StringRepValueContext extends ParserRuleContext {
    
    value(): ValueContext;
    
}

export declare class TupleValueContext extends ParserRuleContext {
    
    tuple(): TupleContext;
    
}

export declare class RangeValueContext extends ParserRuleContext {
    
}

export declare class ValueContext extends ParserRuleContext {
    
}


export declare class GrammarParser extends Parser {
    readonly ruleNames: string[];
    readonly literalNames: string[];
    readonly symbolicNames: string[];

    constructor(input: CommonTokenStream);
    
    iden(): IdenContext;

    parameter(): ParameterContext;

    parameters(): ParametersContext;

    func(): FuncContext;

    forloop(): ForloopContext;

    whileloop(): WhileloopContext;

    iter(): IterContext;

    cond(): CondContext;

    tuple(): TupleContext;

    array(): ArrayContext;

    dictionary(): DictionaryContext;

    property(): PropertyContext;

    declar(): DeclarContext;

    assign(): AssignContext;

    designator(): DesignatorContext;

    statement(): StatementContext;

}
