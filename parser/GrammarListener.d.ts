import {CommonTokenStream, ParserRuleContext, Token} from 'antlr4';
import {ErrorNode, ParseTreeListener, TerminalNode} from 'antlr4/tree/Tree';

import {IdenContext} from './GrammarParser';

import {ClassStateContext} from './GrammarParser';

import {ParameterContext} from './GrammarParser';

import {ParametersContext} from './GrammarParser';

import {FuncContext} from './GrammarParser';

import {LoopContext} from './GrammarParser';

import {IterContext} from './GrammarParser';

import {CondContext} from './GrammarParser';

import {TupleContext} from './GrammarParser';

import {ArrayContext} from './GrammarParser';

import {DictionaryContext} from './GrammarParser';

import {PropertyContext} from './GrammarParser';

import {DeclarContext} from './GrammarParser';

import {AssignContext} from './GrammarParser';

import {DesignatorContext} from './GrammarParser';

import {StatementContext} from './GrammarParser';

import {ValueContext} from './GrammarParser';


export declare class GrammarListener implements ParseTreeListener {
    constructor();
    
    enterIden(ctx: IdenContext): void;
    
    exitIden(ctx: IdenContext): void;
    
    enterClassState(ctx: ClassStateContext): void;
    
    exitClassState(ctx: ClassStateContext): void;
    
    enterParameter(ctx: ParameterContext): void;
    
    exitParameter(ctx: ParameterContext): void;
    
    enterParameters(ctx: ParametersContext): void;
    
    exitParameters(ctx: ParametersContext): void;
    
    enterFunc(ctx: FuncContext): void;
    
    exitFunc(ctx: FuncContext): void;
    
    enterLoop(ctx: LoopContext): void;
    
    exitLoop(ctx: LoopContext): void;
    
    enterIter(ctx: IterContext): void;
    
    exitIter(ctx: IterContext): void;
    
    enterCond(ctx: CondContext): void;
    
    exitCond(ctx: CondContext): void;
    
    enterTuple(ctx: TupleContext): void;
    
    exitTuple(ctx: TupleContext): void;
    
    enterArray(ctx: ArrayContext): void;
    
    exitArray(ctx: ArrayContext): void;
    
    enterDictionary(ctx: DictionaryContext): void;
    
    exitDictionary(ctx: DictionaryContext): void;
    
    enterProperty(ctx: PropertyContext): void;
    
    exitProperty(ctx: PropertyContext): void;
    
    enterDeclar(ctx: DeclarContext): void;
    
    exitDeclar(ctx: DeclarContext): void;
    
    enterAssign(ctx: AssignContext): void;
    
    exitAssign(ctx: AssignContext): void;
    
    enterDesignator(ctx: DesignatorContext): void;
    
    exitDesignator(ctx: DesignatorContext): void;
    
    enterStatement(ctx: StatementContext): void;
    
    exitStatement(ctx: StatementContext): void;
    
    enterValue(ctx: ValueContext): void;
    
    exitValue(ctx: ValueContext): void;
    
    visitTerminal(node: TerminalNode): void;

    visitErrorNode(node: ErrorNode): void;

    enterEveryRule(node: ParserRuleContext): void;

    exitEveryRule(node: ParserRuleContext): void;
}
