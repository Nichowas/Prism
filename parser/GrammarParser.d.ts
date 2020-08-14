import {CommonTokenStream, Parser, ParserRuleContext, Token} from 'antlr4';
import {TerminalNode} from 'antlr4/tree/Tree';


export declare class IdenContext extends ParserRuleContext {
    
    WORD(): TerminalNode;
    
}

<<<<<<< HEAD
=======
export declare class ClassStateContext extends ParserRuleContext {
    
}

>>>>>>> 33772c8f2d8c1c8d6e38936542a4915daadd0e92
export declare class PropertyParameterContext extends ParserRuleContext {
    
    iden(): IdenContext;
    
}

export declare class SpreadParameterContext extends ParserRuleContext {
    
    iden(): IdenContext;
    
}

<<<<<<< HEAD
export declare class IdenParameterContext extends ParserRuleContext {
=======
export declare class ValueParameterContext extends ParserRuleContext {
>>>>>>> 33772c8f2d8c1c8d6e38936542a4915daadd0e92
    
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

<<<<<<< HEAD
export declare class ForloopContext extends ParserRuleContext {
=======
export declare class LoopContext extends ParserRuleContext {
>>>>>>> 33772c8f2d8c1c8d6e38936542a4915daadd0e92
    
    iter(): IterContext;
    
    statement(): StatementContext;
    
}

<<<<<<< HEAD
export declare class WhileloopContext extends ParserRuleContext {
    
    value(): ValueContext;
    
    statement(): StatementContext;
    
}

export declare class InIterContext extends ParserRuleContext {
=======
export declare class ThreeFuncIterContext extends ParserRuleContext {
    
}

export declare class InOfIterContext extends ParserRuleContext {
>>>>>>> 33772c8f2d8c1c8d6e38936542a4915daadd0e92
    
    designator(): DesignatorContext;
    
    iden(): IdenContext;
    
    value(): ValueContext;
    
}

<<<<<<< HEAD
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
=======
export declare class IterContext extends ParserRuleContext {
    
}

export declare class CondContext extends ParserRuleContext {
    
    value(): ValueContext;
    
    statement(): StatementContext;
>>>>>>> 33772c8f2d8c1c8d6e38936542a4915daadd0e92
    
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

<<<<<<< HEAD
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
=======
export declare class AssignContext extends ParserRuleContext {
>>>>>>> 33772c8f2d8c1c8d6e38936542a4915daadd0e92
    
    iden(): IdenContext;
    
    value(): ValueContext;
    
}

<<<<<<< HEAD
export declare class AssignContext extends ParserRuleContext {
    
}

=======
>>>>>>> 33772c8f2d8c1c8d6e38936542a4915daadd0e92
export declare class DesignatorContext extends ParserRuleContext {
    
}

<<<<<<< HEAD
export declare class CommentStatementContext extends ParserRuleContext {
    
    COMMENT(): TerminalNode;
    
}

export declare class WhileloopStatementContext extends ParserRuleContext {
    
    whileloop(): WhileloopContext;
    
}

export declare class ForloopStatementContext extends ParserRuleContext {
    
    forloop(): ForloopContext;
    
}

=======
>>>>>>> 33772c8f2d8c1c8d6e38936542a4915daadd0e92
export declare class ValueStatementContext extends ParserRuleContext {
    
    value(): ValueContext;
    
}

export declare class AssignStatementContext extends ParserRuleContext {
    
    assign(): AssignContext;
    
}

<<<<<<< HEAD
=======
export declare class LoopStatementContext extends ParserRuleContext {
    
    loop(): LoopContext;
    
}

>>>>>>> 33772c8f2d8c1c8d6e38936542a4915daadd0e92
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

<<<<<<< HEAD
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
=======
export declare class PropertyValueContext extends ParserRuleContext {
    
    value(): ValueContext;
    
    iden(): IdenContext;
    
}

export declare class ArrayValueContext extends ParserRuleContext {
    
    array(): ArrayContext;
    
}

export declare class BlankConcatValueContext extends ParserRuleContext {
    
}

export declare class InstanceValueContext extends ParserRuleContext {
>>>>>>> 33772c8f2d8c1c8d6e38936542a4915daadd0e92
    
    value(): ValueContext;
    
}

<<<<<<< HEAD
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
=======
export declare class MultExprContext extends ParserRuleContext {
    
}

export declare class ClassValueContext extends ParserRuleContext {
    
    classState(): ClassStateContext;
    
}

export declare class StringValueContext extends ParserRuleContext {
    
    STRING(): TerminalNode;
    
}

export declare class ApplyFuncValueContext extends ParserRuleContext {
    
}

export declare class AddExprContext extends ParserRuleContext {
    
}

export declare class IdenValueContext extends ParserRuleContext {
>>>>>>> 33772c8f2d8c1c8d6e38936542a4915daadd0e92
    
    iden(): IdenContext;
    
}

<<<<<<< HEAD
export declare class ArrayValueContext extends ParserRuleContext {
    
    array(): ArrayContext;
    
}

export declare class NotValueContext extends ParserRuleContext {
    
    value(): ValueContext;
    
}

export declare class ClassValueContext extends ParserRuleContext {
=======
export declare class FuncValueContext extends ParserRuleContext {
    
    func(): FuncContext;
    
}

export declare class DictionaryValueContext extends ParserRuleContext {
    
    dictionary(): DictionaryContext;
    
}

export declare class BracketValueContext extends ParserRuleContext {
>>>>>>> 33772c8f2d8c1c8d6e38936542a4915daadd0e92
    
    value(): ValueContext;
    
}

<<<<<<< HEAD
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
=======
export declare class StringRepValueContext extends ParserRuleContext {
    
    value(): ValueContext;
    
}

export declare class NumberValueContext extends ParserRuleContext {
    
    NUM(): TerminalNode;
    
}

export declare class ElementValueContext extends ParserRuleContext {
>>>>>>> 33772c8f2d8c1c8d6e38936542a4915daadd0e92
    
}

export declare class TupleValueContext extends ParserRuleContext {
    
    tuple(): TupleContext;
    
}

<<<<<<< HEAD
export declare class RangeValueContext extends ParserRuleContext {
    
}

=======
>>>>>>> 33772c8f2d8c1c8d6e38936542a4915daadd0e92
export declare class ValueContext extends ParserRuleContext {
    
}


export declare class GrammarParser extends Parser {
    readonly ruleNames: string[];
    readonly literalNames: string[];
    readonly symbolicNames: string[];

    constructor(input: CommonTokenStream);
    
    iden(): IdenContext;

<<<<<<< HEAD
=======
    classState(): ClassStateContext;

>>>>>>> 33772c8f2d8c1c8d6e38936542a4915daadd0e92
    parameter(): ParameterContext;

    parameters(): ParametersContext;

    func(): FuncContext;

<<<<<<< HEAD
    forloop(): ForloopContext;

    whileloop(): WhileloopContext;
=======
    loop(): LoopContext;
>>>>>>> 33772c8f2d8c1c8d6e38936542a4915daadd0e92

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
