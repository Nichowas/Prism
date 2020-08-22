grammar Grammar;
all: (statement|value)*;

iden: WORD;

//Function
parameter: 
    iden                                                    #idenParameter
    | '...' iden                                            #spreadParameter
    | '.' iden                                              #propertyParameter
    ;
parameters: '(' (parameter ',')* parameter? ')';
func:
    'void' parameters statement                             #tradFunc
    | (parameters|parameter) '=>' statement                 #arrowFunc
    ;

//Loops
forloop: 'for' '(' iter ')' statement;
whileloop: 'while' '(' value ')' statement;
iter: 
    statement?';'value?';'statement?                        #threeFuncIter
    | designator iden 'in' value                            #inIter
    | designator iden 'of' value                            #ofIter
    ;

//Conditional
cond: 
    'if' '(' value ')' statement 
    ('elif' '(' value ')' statement)* 
    ('else' statement)?
    ;

//Arrays/Tuples/Dictionaries
// tuple: '(' ('...'? value ',')+ ('...'? value)? ')';
array: '[' ('...'? value ',')* ('...'? value)? ']';
dictionary: '{' (property ',')* ('...'? property)? '}';
property: 
    iden ':' value                                          #tradProperty
    | iden                                                  #idenProperty
    | '...' value                                           #iterProperty
    ;

//Variable
declar: designator (assign ',')* assign;
assign: 
    value '=' value                                          #setAssign
    | value '*=' value                                       #multAssign
    | value '/=' value                                       #divAssign
    | value '+=' value                                       #addAssign
    | value '-=' value                                       #subAssign
    | value '%=' value                                       #modAssign
    | value '++'                                             #incAssign
    | value '--'                                             #decAssign
    ;
designator: ('stat')? ('pub'|'var');

//Statement/Block
statement:
    forloop                                                 #forloopStatement
    | whileloop                                             #whileloopStatement
    | cond                                                  #ifStatement
    | assign                                                #assignStatement    
    | declar                                                #declarStatement
    | '~{'statement*'}'                                     #groupStatement
    |  '{'statement*'}'                                     #blockStatement
    | 'return' value                                        #returnStatement
    | value                                                 #valueStatement
    | COMMENT                                               #commentStatement
    ;

//Value/Variable
value:
    '('value')'                                             #bracketValue
    | 'new' value                                           #instanceValue
    | 'class' value                                         #classValue

    | value 'to' value ('by' value)?                        #rangeValue

    | value '?' value ':' value                             #ternaryValue
    | value '!=' value                                      #inequalValue
    | value '==' value                                      #equalValue
    | value '>' value                                       #gtValue
    | value '>=' value                                      #gteValue
    | value '<' value                                       #ltValue
    | value '<=' value                                      #lteValue

    | value '&&' value                                      #andValue
    | value '||' value                                      #orValue
    | '!' value                                             #notValue

    | value '%' value                                       #modValue
    | value ('*'|'/') value                                 #multValue
    | value ('+'|'-') value                                 #addValue
    | value '_' value                                       #blankConcatValue
    | '-' value                                             #negateValue
    | value '(' ('...'? value ',')* ('...'? value)? ')'     #applyFuncValue
    | value '[' value ']'                                   #elementValue
    | value '.' iden                                        #propertyValue
    | '#' value                                             #stringRepValue

    | iden                                                  #idenValue
    | func                                                  #funcValue
    | dictionary                                            #dictionaryValue
    | array                                                 #arrayValue
    | NUM                                                   #numberValue
    | STRING                                                #stringValue
    | (TRUE|FALSE)                                          #boolValue
    ;

//Lexer Rules
TRUE: 'true';
FALSE: 'false';
WS: [' '\r\n\t] -> skip;
COMMENT: '//' ~('\n')* '\n';
WORD: [a-zA-Z]+;
STRING: '"' ~('"')* '"';
NUM: '-'? DIGIT+ ('.' DIGIT+)?;
fragment DIGIT: [0-9];