grammar Grammar;

iden: WORD;

classState: 'class' '{' declar* '}';

//Function
parameter: 
    iden                                                    #valueParameter
    | '...' iden                                            #spreadParameter
    | '.' iden                                              #propertyParameter
    ;
parameters: '(' (parameter ',')* parameter? ')';
func:
    'void' parameters statement                             #tradFunc
    | (parameters|parameter) '=>' statement                 #arrowFunc
    ;

//Loop
loop: 'for' '(' iter ')' statement;
iter: 
    statement?';'statement?';'statement?                    #threeFuncIter
    | designator iden ('in'|'of') value                     #inOfIter
    ;

//Conditional
cond: 'if' '(' value ')' statement ('elif' '(' value ')' statement)* ('else' '('value')')?;

//Arrays/Tuples/Dictionaries
tuple: '(' ('...'? value ',')+ ('...'? value)? ')';
array: '[' ('...'? value ',')* ('...'? value)? ']';
dictionary: '{' (property ',')* ('...'? property)? '}';
property: 
    iden ':' value                                          #tradProperty
    | iden                                                  #idenProperty
    | '...' value                                           #iterProperty
    ;

//Variable
declar: designator (assign ',')* assign;
assign: iden '=' value;
designator: ('stat')? ('pub'|'var');

//Statement/Block
statement:
    loop                                                    #loopStatement
    | cond                                                  #ifStatement
    | assign                                                #assignStatement    
    | declar                                                #declarStatement
    | '{'statement*'}'                                      #groupStatement
    | 'return' value                                        #returnStatement
    | value                                                 #valueStatement
    ;

//Value/Variable
value:
    '('value')'                                             #bracketValue
    | 'new' value                                           #instanceValue
    | classState                                            #classValue
    | dictionary                                            #dictionaryValue
    | tuple                                                 #tupleValue
    | array                                                 #arrayValue

    | value ('*'|'/') value                                 #multExpr
    | value ('+'|'-') value                                 #addExpr
    | value '_' value                                       #blankConcatValue
    | value '(' (value ',')* value? ')'                     #applyFuncValue
    | value '[' value ']'                                   #elementValue
    | value '.' iden                                        #propertyValue
    | '#' value                                             #stringRepValue

    | iden                                                  #idenValue
    | func                                                  #funcValue
    | NUM                                                   #numberValue
    | STRING                                                #stringValue
    ;


//Lexer Rules
WS: [' '\r\n\t] -> skip;
WORD: [a-zA-Z]+;
STRING: '"' ~('"')* '"';
NUM: DIGIT+ ('.' DIGIT+)?;
fragment DIGIT: [0-9];