// Generated from Grammar.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var GrammarListener = require('./GrammarListener').GrammarListener;
var GrammarVisitor = require('./GrammarVisitor').GrammarVisitor;

var grammarFileName = "Grammar.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003A\u0193\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0003\u0002\u0003\u0002\u0007\u0002",
    "\'\n\u0002\f\u0002\u000e\u0002*\u000b\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004",
    "3\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005",
    "9\n\u0005\f\u0005\u000e\u0005<\u000b\u0005\u0003\u0005\u0005\u0005?",
    "\n\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006I\n\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0005\u0006N\n\u0006\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\t\u0005\t]\n\t\u0003\t\u0003\t\u0005",
    "\ta\n\t\u0003\t\u0003\t\u0005\te\n\t\u0003\t\u0003\t\u0003\t\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\tq\n\t\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0007\n~\n\n\f\n\u000e\n\u0081\u000b\n\u0003\n\u0003\n\u0005",
    "\n\u0085\n\n\u0003\u000b\u0003\u000b\u0005\u000b\u0089\n\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0007\u000b\u008e\n\u000b\f\u000b\u000e",
    "\u000b\u0091\u000b\u000b\u0003\u000b\u0005\u000b\u0094\n\u000b\u0003",
    "\u000b\u0005\u000b\u0097\n\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0007\f\u009f\n\f\f\f\u000e\f\u00a2\u000b\f\u0003",
    "\f\u0005\f\u00a5\n\f\u0003\f\u0005\f\u00a8\n\f\u0003\f\u0003\f\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0005\r\u00b3\n\r",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0007\u000e\u00b9\n",
    "\u000e\f\u000e\u000e\u000e\u00bc\u000b\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0005\u000f\u00de\n\u000f\u0003\u0010\u0005\u0010\u00e1\n\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0007\u0011\u00f3\n\u0011",
    "\f\u0011\u000e\u0011\u00f6\u000b\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0007\u0011\u00fe\n\u0011",
    "\f\u0011\u000e\u0011\u0101\u000b\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0007\u0011\u0106\n\u0011\f\u0011\u000e\u0011\u0109\u000b\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0005\u0011",
    "\u0110\n\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0005\u0012\u0125\n\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0007\u0012\u012a\n\u0012\f\u0012\u000e\u0012",
    "\u012d\u000b\u0012\u0003\u0012\u0005\u0012\u0130\n\u0012\u0003\u0012",
    "\u0005\u0012\u0133\n\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0005\u0012\u013f\n\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0005\u0012\u016e\n\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0007",
    "\u0012\u0173\n\u0012\f\u0012\u000e\u0012\u0176\u000b\u0012\u0003\u0012",
    "\u0005\u0012\u0179\n\u0012\u0003\u0012\u0005\u0012\u017c\n\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0005\u0012\u018c\n\u0012\u0007\u0012\u018e\n\u0012",
    "\f\u0012\u000e\u0012\u0191\u000b\u0012\u0003\u0012\u0002\u0003\"\u0013",
    "\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c",
    "\u001e \"\u0002\u0006\u0003\u0002 !\u0003\u0002;<\u0003\u0002()\u0004",
    "\u0002\'\'**\u0002\u01d7\u0002(\u0003\u0002\u0002\u0002\u0004+\u0003",
    "\u0002\u0002\u0002\u00062\u0003\u0002\u0002\u0002\b4\u0003\u0002\u0002",
    "\u0002\nM\u0003\u0002\u0002\u0002\fO\u0003\u0002\u0002\u0002\u000eU",
    "\u0003\u0002\u0002\u0002\u0010p\u0003\u0002\u0002\u0002\u0012r\u0003",
    "\u0002\u0002\u0002\u0014\u0086\u0003\u0002\u0002\u0002\u0016\u009a\u0003",
    "\u0002\u0002\u0002\u0018\u00b2\u0003\u0002\u0002\u0002\u001a\u00b4\u0003",
    "\u0002\u0002\u0002\u001c\u00dd\u0003\u0002\u0002\u0002\u001e\u00e0\u0003",
    "\u0002\u0002\u0002 \u010f\u0003\u0002\u0002\u0002\"\u013e\u0003\u0002",
    "\u0002\u0002$\'\u0005 \u0011\u0002%\'\u0005\"\u0012\u0002&$\u0003\u0002",
    "\u0002\u0002&%\u0003\u0002\u0002\u0002\'*\u0003\u0002\u0002\u0002(&",
    "\u0003\u0002\u0002\u0002()\u0003\u0002\u0002\u0002)\u0003\u0003\u0002",
    "\u0002\u0002*(\u0003\u0002\u0002\u0002+,\u0007?\u0002\u0002,\u0005\u0003",
    "\u0002\u0002\u0002-3\u0005\u0004\u0003\u0002./\u0007\u0003\u0002\u0002",
    "/3\u0005\u0004\u0003\u000201\u0007\u0004\u0002\u000213\u0005\u0004\u0003",
    "\u00022-\u0003\u0002\u0002\u00022.\u0003\u0002\u0002\u000220\u0003\u0002",
    "\u0002\u00023\u0007\u0003\u0002\u0002\u00024:\u0007\u0005\u0002\u0002",
    "56\u0005\u0006\u0004\u000267\u0007\u0006\u0002\u000279\u0003\u0002\u0002",
    "\u000285\u0003\u0002\u0002\u00029<\u0003\u0002\u0002\u0002:8\u0003\u0002",
    "\u0002\u0002:;\u0003\u0002\u0002\u0002;>\u0003\u0002\u0002\u0002<:\u0003",
    "\u0002\u0002\u0002=?\u0005\u0006\u0004\u0002>=\u0003\u0002\u0002\u0002",
    ">?\u0003\u0002\u0002\u0002?@\u0003\u0002\u0002\u0002@A\u0007\u0007\u0002",
    "\u0002A\t\u0003\u0002\u0002\u0002BC\u0007\b\u0002\u0002CD\u0005\b\u0005",
    "\u0002DE\u0005 \u0011\u0002EN\u0003\u0002\u0002\u0002FI\u0005\b\u0005",
    "\u0002GI\u0005\u0006\u0004\u0002HF\u0003\u0002\u0002\u0002HG\u0003\u0002",
    "\u0002\u0002IJ\u0003\u0002\u0002\u0002JK\u0007\t\u0002\u0002KL\u0005",
    " \u0011\u0002LN\u0003\u0002\u0002\u0002MB\u0003\u0002\u0002\u0002MH",
    "\u0003\u0002\u0002\u0002N\u000b\u0003\u0002\u0002\u0002OP\u0007\n\u0002",
    "\u0002PQ\u0007\u0005\u0002\u0002QR\u0005\u0010\t\u0002RS\u0007\u0007",
    "\u0002\u0002ST\u0005 \u0011\u0002T\r\u0003\u0002\u0002\u0002UV\u0007",
    "\u000b\u0002\u0002VW\u0007\u0005\u0002\u0002WX\u0005\"\u0012\u0002X",
    "Y\u0007\u0007\u0002\u0002YZ\u0005 \u0011\u0002Z\u000f\u0003\u0002\u0002",
    "\u0002[]\u0005 \u0011\u0002\\[\u0003\u0002\u0002\u0002\\]\u0003\u0002",
    "\u0002\u0002]^\u0003\u0002\u0002\u0002^`\u0007\f\u0002\u0002_a\u0005",
    "\"\u0012\u0002`_\u0003\u0002\u0002\u0002`a\u0003\u0002\u0002\u0002a",
    "b\u0003\u0002\u0002\u0002bd\u0007\f\u0002\u0002ce\u0005 \u0011\u0002",
    "dc\u0003\u0002\u0002\u0002de\u0003\u0002\u0002\u0002eq\u0003\u0002\u0002",
    "\u0002fg\u0005\u001e\u0010\u0002gh\u0005\u0004\u0003\u0002hi\u0007\r",
    "\u0002\u0002ij\u0005\"\u0012\u0002jq\u0003\u0002\u0002\u0002kl\u0005",
    "\u001e\u0010\u0002lm\u0005\u0004\u0003\u0002mn\u0007\u000e\u0002\u0002",
    "no\u0005\"\u0012\u0002oq\u0003\u0002\u0002\u0002p\\\u0003\u0002\u0002",
    "\u0002pf\u0003\u0002\u0002\u0002pk\u0003\u0002\u0002\u0002q\u0011\u0003",
    "\u0002\u0002\u0002rs\u0007\u000f\u0002\u0002st\u0007\u0005\u0002\u0002",
    "tu\u0005\"\u0012\u0002uv\u0007\u0007\u0002\u0002v\u007f\u0005 \u0011",
    "\u0002wx\u0007\u0010\u0002\u0002xy\u0007\u0005\u0002\u0002yz\u0005\"",
    "\u0012\u0002z{\u0007\u0007\u0002\u0002{|\u0005 \u0011\u0002|~\u0003",
    "\u0002\u0002\u0002}w\u0003\u0002\u0002\u0002~\u0081\u0003\u0002\u0002",
    "\u0002\u007f}\u0003\u0002\u0002\u0002\u007f\u0080\u0003\u0002\u0002",
    "\u0002\u0080\u0084\u0003\u0002\u0002\u0002\u0081\u007f\u0003\u0002\u0002",
    "\u0002\u0082\u0083\u0007\u0011\u0002\u0002\u0083\u0085\u0005 \u0011",
    "\u0002\u0084\u0082\u0003\u0002\u0002\u0002\u0084\u0085\u0003\u0002\u0002",
    "\u0002\u0085\u0013\u0003\u0002\u0002\u0002\u0086\u008f\u0007\u0012\u0002",
    "\u0002\u0087\u0089\u0007\u0003\u0002\u0002\u0088\u0087\u0003\u0002\u0002",
    "\u0002\u0088\u0089\u0003\u0002\u0002\u0002\u0089\u008a\u0003\u0002\u0002",
    "\u0002\u008a\u008b\u0005\"\u0012\u0002\u008b\u008c\u0007\u0006\u0002",
    "\u0002\u008c\u008e\u0003\u0002\u0002\u0002\u008d\u0088\u0003\u0002\u0002",
    "\u0002\u008e\u0091\u0003\u0002\u0002\u0002\u008f\u008d\u0003\u0002\u0002",
    "\u0002\u008f\u0090\u0003\u0002\u0002\u0002\u0090\u0096\u0003\u0002\u0002",
    "\u0002\u0091\u008f\u0003\u0002\u0002\u0002\u0092\u0094\u0007\u0003\u0002",
    "\u0002\u0093\u0092\u0003\u0002\u0002\u0002\u0093\u0094\u0003\u0002\u0002",
    "\u0002\u0094\u0095\u0003\u0002\u0002\u0002\u0095\u0097\u0005\"\u0012",
    "\u0002\u0096\u0093\u0003\u0002\u0002\u0002\u0096\u0097\u0003\u0002\u0002",
    "\u0002\u0097\u0098\u0003\u0002\u0002\u0002\u0098\u0099\u0007\u0013\u0002",
    "\u0002\u0099\u0015\u0003\u0002\u0002\u0002\u009a\u00a0\u0007\u0014\u0002",
    "\u0002\u009b\u009c\u0005\u0018\r\u0002\u009c\u009d\u0007\u0006\u0002",
    "\u0002\u009d\u009f\u0003\u0002\u0002\u0002\u009e\u009b\u0003\u0002\u0002",
    "\u0002\u009f\u00a2\u0003\u0002\u0002\u0002\u00a0\u009e\u0003\u0002\u0002",
    "\u0002\u00a0\u00a1\u0003\u0002\u0002\u0002\u00a1\u00a7\u0003\u0002\u0002",
    "\u0002\u00a2\u00a0\u0003\u0002\u0002\u0002\u00a3\u00a5\u0007\u0003\u0002",
    "\u0002\u00a4\u00a3\u0003\u0002\u0002\u0002\u00a4\u00a5\u0003\u0002\u0002",
    "\u0002\u00a5\u00a6\u0003\u0002\u0002\u0002\u00a6\u00a8\u0005\u0018\r",
    "\u0002\u00a7\u00a4\u0003\u0002\u0002\u0002\u00a7\u00a8\u0003\u0002\u0002",
    "\u0002\u00a8\u00a9\u0003\u0002\u0002\u0002\u00a9\u00aa\u0007\u0015\u0002",
    "\u0002\u00aa\u0017\u0003\u0002\u0002\u0002\u00ab\u00ac\u0005\u0004\u0003",
    "\u0002\u00ac\u00ad\u0007\u0016\u0002\u0002\u00ad\u00ae\u0005\"\u0012",
    "\u0002\u00ae\u00b3\u0003\u0002\u0002\u0002\u00af\u00b3\u0005\u0004\u0003",
    "\u0002\u00b0\u00b1\u0007\u0003\u0002\u0002\u00b1\u00b3\u0005\"\u0012",
    "\u0002\u00b2\u00ab\u0003\u0002\u0002\u0002\u00b2\u00af\u0003\u0002\u0002",
    "\u0002\u00b2\u00b0\u0003\u0002\u0002\u0002\u00b3\u0019\u0003\u0002\u0002",
    "\u0002\u00b4\u00ba\u0005\u001e\u0010\u0002\u00b5\u00b6\u0005\u001c\u000f",
    "\u0002\u00b6\u00b7\u0007\u0006\u0002\u0002\u00b7\u00b9\u0003\u0002\u0002",
    "\u0002\u00b8\u00b5\u0003\u0002\u0002\u0002\u00b9\u00bc\u0003\u0002\u0002",
    "\u0002\u00ba\u00b8\u0003\u0002\u0002\u0002\u00ba\u00bb\u0003\u0002\u0002",
    "\u0002\u00bb\u00bd\u0003\u0002\u0002\u0002\u00bc\u00ba\u0003\u0002\u0002",
    "\u0002\u00bd\u00be\u0005\u001c\u000f\u0002\u00be\u001b\u0003\u0002\u0002",
    "\u0002\u00bf\u00c0\u0005\"\u0012\u0002\u00c0\u00c1\u0007\u0017\u0002",
    "\u0002\u00c1\u00c2\u0005\"\u0012\u0002\u00c2\u00de\u0003\u0002\u0002",
    "\u0002\u00c3\u00c4\u0005\"\u0012\u0002\u00c4\u00c5\u0007\u0018\u0002",
    "\u0002\u00c5\u00c6\u0005\"\u0012\u0002\u00c6\u00de\u0003\u0002\u0002",
    "\u0002\u00c7\u00c8\u0005\"\u0012\u0002\u00c8\u00c9\u0007\u0019\u0002",
    "\u0002\u00c9\u00ca\u0005\"\u0012\u0002\u00ca\u00de\u0003\u0002\u0002",
    "\u0002\u00cb\u00cc\u0005\"\u0012\u0002\u00cc\u00cd\u0007\u001a\u0002",
    "\u0002\u00cd\u00ce\u0005\"\u0012\u0002\u00ce\u00de\u0003\u0002\u0002",
    "\u0002\u00cf\u00d0\u0005\"\u0012\u0002\u00d0\u00d1\u0007\u001b\u0002",
    "\u0002\u00d1\u00d2\u0005\"\u0012\u0002\u00d2\u00de\u0003\u0002\u0002",
    "\u0002\u00d3\u00d4\u0005\"\u0012\u0002\u00d4\u00d5\u0007\u001c\u0002",
    "\u0002\u00d5\u00d6\u0005\"\u0012\u0002\u00d6\u00de\u0003\u0002\u0002",
    "\u0002\u00d7\u00d8\u0005\"\u0012\u0002\u00d8\u00d9\u0007\u001d\u0002",
    "\u0002\u00d9\u00de\u0003\u0002\u0002\u0002\u00da\u00db\u0005\"\u0012",
    "\u0002\u00db\u00dc\u0007\u001e\u0002\u0002\u00dc\u00de\u0003\u0002\u0002",
    "\u0002\u00dd\u00bf\u0003\u0002\u0002\u0002\u00dd\u00c3\u0003\u0002\u0002",
    "\u0002\u00dd\u00c7\u0003\u0002\u0002\u0002\u00dd\u00cb\u0003\u0002\u0002",
    "\u0002\u00dd\u00cf\u0003\u0002\u0002\u0002\u00dd\u00d3\u0003\u0002\u0002",
    "\u0002\u00dd\u00d7\u0003\u0002\u0002\u0002\u00dd\u00da\u0003\u0002\u0002",
    "\u0002\u00de\u001d\u0003\u0002\u0002\u0002\u00df\u00e1\u0007\u001f\u0002",
    "\u0002\u00e0\u00df\u0003\u0002\u0002\u0002\u00e0\u00e1\u0003\u0002\u0002",
    "\u0002\u00e1\u00e2\u0003\u0002\u0002\u0002\u00e2\u00e3\t\u0002\u0002",
    "\u0002\u00e3\u001f\u0003\u0002\u0002\u0002\u00e4\u0110\u0005\f\u0007",
    "\u0002\u00e5\u0110\u0005\u000e\b\u0002\u00e6\u0110\u0005\u0012\n\u0002",
    "\u00e7\u00e8\u0005\u001e\u0010\u0002\u00e8\u00e9\u0007\b\u0002\u0002",
    "\u00e9\u00ea\u0005\u0004\u0003\u0002\u00ea\u00eb\u0005\b\u0005\u0002",
    "\u00eb\u00ec\u0005 \u0011\u0002\u00ec\u0110\u0003\u0002\u0002\u0002",
    "\u00ed\u00ee\u0005\u001e\u0010\u0002\u00ee\u00f4\u0007\"\u0002\u0002",
    "\u00ef\u00f0\u0005\"\u0012\u0002\u00f0\u00f1\u0007\u0006\u0002\u0002",
    "\u00f1\u00f3\u0003\u0002\u0002\u0002\u00f2\u00ef\u0003\u0002\u0002\u0002",
    "\u00f3\u00f6\u0003\u0002\u0002\u0002\u00f4\u00f2\u0003\u0002\u0002\u0002",
    "\u00f4\u00f5\u0003\u0002\u0002\u0002\u00f5\u00f7\u0003\u0002\u0002\u0002",
    "\u00f6\u00f4\u0003\u0002\u0002\u0002\u00f7\u00f8\u0005\"\u0012\u0002",
    "\u00f8\u0110\u0003\u0002\u0002\u0002\u00f9\u0110\u0005\u001c\u000f\u0002",
    "\u00fa\u0110\u0005\u001a\u000e\u0002\u00fb\u00ff\u0007#\u0002\u0002",
    "\u00fc\u00fe\u0005 \u0011\u0002\u00fd\u00fc\u0003\u0002\u0002\u0002",
    "\u00fe\u0101\u0003\u0002\u0002\u0002\u00ff\u00fd\u0003\u0002\u0002\u0002",
    "\u00ff\u0100\u0003\u0002\u0002\u0002\u0100\u0102\u0003\u0002\u0002\u0002",
    "\u0101\u00ff\u0003\u0002\u0002\u0002\u0102\u0110\u0007\u0015\u0002\u0002",
    "\u0103\u0107\u0007\u0014\u0002\u0002\u0104\u0106\u0005 \u0011\u0002",
    "\u0105\u0104\u0003\u0002\u0002\u0002\u0106\u0109\u0003\u0002\u0002\u0002",
    "\u0107\u0105\u0003\u0002\u0002\u0002\u0107\u0108\u0003\u0002\u0002\u0002",
    "\u0108\u010a\u0003\u0002\u0002\u0002\u0109\u0107\u0003\u0002\u0002\u0002",
    "\u010a\u0110\u0007\u0015\u0002\u0002\u010b\u010c\u0007$\u0002\u0002",
    "\u010c\u0110\u0005\"\u0012\u0002\u010d\u0110\u0005\"\u0012\u0002\u010e",
    "\u0110\u0007>\u0002\u0002\u010f\u00e4\u0003\u0002\u0002\u0002\u010f",
    "\u00e5\u0003\u0002\u0002\u0002\u010f\u00e6\u0003\u0002\u0002\u0002\u010f",
    "\u00e7\u0003\u0002\u0002\u0002\u010f\u00ed\u0003\u0002\u0002\u0002\u010f",
    "\u00f9\u0003\u0002\u0002\u0002\u010f\u00fa\u0003\u0002\u0002\u0002\u010f",
    "\u00fb\u0003\u0002\u0002\u0002\u010f\u0103\u0003\u0002\u0002\u0002\u010f",
    "\u010b\u0003\u0002\u0002\u0002\u010f\u010d\u0003\u0002\u0002\u0002\u010f",
    "\u010e\u0003\u0002\u0002\u0002\u0110!\u0003\u0002\u0002\u0002\u0111",
    "\u0112\b\u0012\u0001\u0002\u0112\u013f\u0005\u0004\u0003\u0002\u0113",
    "\u013f\u0005\n\u0006\u0002\u0114\u013f\u0005\u0016\f\u0002\u0115\u013f",
    "\u0005\u0014\u000b\u0002\u0116\u013f\u0007A\u0002\u0002\u0117\u013f",
    "\u0007@\u0002\u0002\u0118\u013f\t\u0003\u0002\u0002\u0119\u011a\u0007",
    "%\u0002\u0002\u011a\u013f\u0005\"\u0012\u001a\u011b\u011c\u0007&\u0002",
    "\u0002\u011c\u013f\u0005\"\u0012\u0019\u011d\u011e\u0007\'\u0002\u0002",
    "\u011e\u013f\u0005\"\u0012\u0018\u011f\u0120\u0007-\u0002\u0002\u0120",
    "\u0121\u0005\u0004\u0003\u0002\u0121\u0122\u0003\u0002\u0002\u0002\u0122",
    "\u012b\u0007\u0005\u0002\u0002\u0123\u0125\u0007\u0003\u0002\u0002\u0124",
    "\u0123\u0003\u0002\u0002\u0002\u0124\u0125\u0003\u0002\u0002\u0002\u0125",
    "\u0126\u0003\u0002\u0002\u0002\u0126\u0127\u0005\"\u0012\u0002\u0127",
    "\u0128\u0007\u0006\u0002\u0002\u0128\u012a\u0003\u0002\u0002\u0002\u0129",
    "\u0124\u0003\u0002\u0002\u0002\u012a\u012d\u0003\u0002\u0002\u0002\u012b",
    "\u0129\u0003\u0002\u0002\u0002\u012b\u012c\u0003\u0002\u0002\u0002\u012c",
    "\u0132\u0003\u0002\u0002\u0002\u012d\u012b\u0003\u0002\u0002\u0002\u012e",
    "\u0130\u0007\u0003\u0002\u0002\u012f\u012e\u0003\u0002\u0002\u0002\u012f",
    "\u0130\u0003\u0002\u0002\u0002\u0130\u0131\u0003\u0002\u0002\u0002\u0131",
    "\u0133\u0005\"\u0012\u0002\u0132\u012f\u0003\u0002\u0002\u0002\u0132",
    "\u0133\u0003\u0002\u0002\u0002\u0133\u0134\u0003\u0002\u0002\u0002\u0134",
    "\u0135\u0007\u0007\u0002\u0002\u0135\u013f\u0003\u0002\u0002\u0002\u0136",
    "\u0137\u00076\u0002\u0002\u0137\u013f\u0005\"\u0012\b\u0138\u0139\u0007",
    "8\u0002\u0002\u0139\u013f\u0005\"\u0012\u0006\u013a\u013b\u0007\u0005",
    "\u0002\u0002\u013b\u013c\u0005\"\u0012\u0002\u013c\u013d\u0007\u0007",
    "\u0002\u0002\u013d\u013f\u0003\u0002\u0002\u0002\u013e\u0111\u0003\u0002",
    "\u0002\u0002\u013e\u0113\u0003\u0002\u0002\u0002\u013e\u0114\u0003\u0002",
    "\u0002\u0002\u013e\u0115\u0003\u0002\u0002\u0002\u013e\u0116\u0003\u0002",
    "\u0002\u0002\u013e\u0117\u0003\u0002\u0002\u0002\u013e\u0118\u0003\u0002",
    "\u0002\u0002\u013e\u0119\u0003\u0002\u0002\u0002\u013e\u011b\u0003\u0002",
    "\u0002\u0002\u013e\u011d\u0003\u0002\u0002\u0002\u013e\u011f\u0003\u0002",
    "\u0002\u0002\u013e\u0136\u0003\u0002\u0002\u0002\u013e\u0138\u0003\u0002",
    "\u0002\u0002\u013e\u013a\u0003\u0002\u0002\u0002\u013f\u018f\u0003\u0002",
    "\u0002\u0002\u0140\u0141\f\u0017\u0002\u0002\u0141\u0142\t\u0004\u0002",
    "\u0002\u0142\u018e\u0005\"\u0012\u0018\u0143\u0144\f\u0016\u0002\u0002",
    "\u0144\u0145\t\u0005\u0002\u0002\u0145\u018e\u0005\"\u0012\u0017\u0146",
    "\u0147\f\u0015\u0002\u0002\u0147\u0148\u0007+\u0002\u0002\u0148\u018e",
    "\u0005\"\u0012\u0016\u0149\u014a\f\u0014\u0002\u0002\u014a\u014b\u0007",
    ",\u0002\u0002\u014b\u018e\u0005\"\u0012\u0015\u014c\u014d\f\u000f\u0002",
    "\u0002\u014d\u014e\u0007.\u0002\u0002\u014e\u018e\u0005\"\u0012\u0010",
    "\u014f\u0150\f\u000e\u0002\u0002\u0150\u0151\u0007/\u0002\u0002\u0151",
    "\u018e\u0005\"\u0012\u000f\u0152\u0153\f\r\u0002\u0002\u0153\u0154\u0007",
    "0\u0002\u0002\u0154\u018e\u0005\"\u0012\u000e\u0155\u0156\f\f\u0002",
    "\u0002\u0156\u0157\u00071\u0002\u0002\u0157\u018e\u0005\"\u0012\r\u0158",
    "\u0159\f\u000b\u0002\u0002\u0159\u015a\u00072\u0002\u0002\u015a\u018e",
    "\u0005\"\u0012\f\u015b\u015c\f\n\u0002\u0002\u015c\u015d\u00073\u0002",
    "\u0002\u015d\u015e\u0005\"\u0012\u0002\u015e\u015f\u0007\u0016\u0002",
    "\u0002\u015f\u0160\u0005\"\u0012\u000b\u0160\u018e\u0003\u0002\u0002",
    "\u0002\u0161\u0162\f\u0007\u0002\u0002\u0162\u0163\u00077\u0002\u0002",
    "\u0163\u018e\u0005\"\u0012\b\u0164\u0165\f\u0005\u0002\u0002\u0165\u0166",
    "\u00079\u0002\u0002\u0166\u018e\u0005\"\u0012\u0006\u0167\u0168\f\u0004",
    "\u0002\u0002\u0168\u0169\u0007:\u0002\u0002\u0169\u018e\u0005\"\u0012",
    "\u0005\u016a\u016b\f\u0012\u0002\u0002\u016b\u0174\u0007\u0005\u0002",
    "\u0002\u016c\u016e\u0007\u0003\u0002\u0002\u016d\u016c\u0003\u0002\u0002",
    "\u0002\u016d\u016e\u0003\u0002\u0002\u0002\u016e\u016f\u0003\u0002\u0002",
    "\u0002\u016f\u0170\u0005\"\u0012\u0002\u0170\u0171\u0007\u0006\u0002",
    "\u0002\u0171\u0173\u0003\u0002\u0002\u0002\u0172\u016d\u0003\u0002\u0002",
    "\u0002\u0173\u0176\u0003\u0002\u0002\u0002\u0174\u0172\u0003\u0002\u0002",
    "\u0002\u0174\u0175\u0003\u0002\u0002\u0002\u0175\u017b\u0003\u0002\u0002",
    "\u0002\u0176\u0174\u0003\u0002\u0002\u0002\u0177\u0179\u0007\u0003\u0002",
    "\u0002\u0178\u0177\u0003\u0002\u0002\u0002\u0178\u0179\u0003\u0002\u0002",
    "\u0002\u0179\u017a\u0003\u0002\u0002\u0002\u017a\u017c\u0005\"\u0012",
    "\u0002\u017b\u0178\u0003\u0002\u0002\u0002\u017b\u017c\u0003\u0002\u0002",
    "\u0002\u017c\u017d\u0003\u0002\u0002\u0002\u017d\u018e\u0007\u0007\u0002",
    "\u0002\u017e\u017f\f\u0011\u0002\u0002\u017f\u0180\u0007\u0012\u0002",
    "\u0002\u0180\u0181\u0005\"\u0012\u0002\u0181\u0182\u0007\u0013\u0002",
    "\u0002\u0182\u018e\u0003\u0002\u0002\u0002\u0183\u0184\f\u0010\u0002",
    "\u0002\u0184\u0185\u0007\u0004\u0002\u0002\u0185\u018e\u0005\u0004\u0003",
    "\u0002\u0186\u0187\f\t\u0002\u0002\u0187\u0188\u00074\u0002\u0002\u0188",
    "\u018b\u0005\"\u0012\u0002\u0189\u018a\u00075\u0002\u0002\u018a\u018c",
    "\u0005\"\u0012\u0002\u018b\u0189\u0003\u0002\u0002\u0002\u018b\u018c",
    "\u0003\u0002\u0002\u0002\u018c\u018e\u0003\u0002\u0002\u0002\u018d\u0140",
    "\u0003\u0002\u0002\u0002\u018d\u0143\u0003\u0002\u0002\u0002\u018d\u0146",
    "\u0003\u0002\u0002\u0002\u018d\u0149\u0003\u0002\u0002\u0002\u018d\u014c",
    "\u0003\u0002\u0002\u0002\u018d\u014f\u0003\u0002\u0002\u0002\u018d\u0152",
    "\u0003\u0002\u0002\u0002\u018d\u0155\u0003\u0002\u0002\u0002\u018d\u0158",
    "\u0003\u0002\u0002\u0002\u018d\u015b\u0003\u0002\u0002\u0002\u018d\u0161",
    "\u0003\u0002\u0002\u0002\u018d\u0164\u0003\u0002\u0002\u0002\u018d\u0167",
    "\u0003\u0002\u0002\u0002\u018d\u016a\u0003\u0002\u0002\u0002\u018d\u017e",
    "\u0003\u0002\u0002\u0002\u018d\u0183\u0003\u0002\u0002\u0002\u018d\u0186",
    "\u0003\u0002\u0002\u0002\u018e\u0191\u0003\u0002\u0002\u0002\u018f\u018d",
    "\u0003\u0002\u0002\u0002\u018f\u0190\u0003\u0002\u0002\u0002\u0190#",
    "\u0003\u0002\u0002\u0002\u0191\u018f\u0003\u0002\u0002\u0002*&(2:>H",
    "M\\`dp\u007f\u0084\u0088\u008f\u0093\u0096\u00a0\u00a4\u00a7\u00b2\u00ba",
    "\u00dd\u00e0\u00f4\u00ff\u0107\u010f\u0124\u012b\u012f\u0132\u013e\u016d",
    "\u0174\u0178\u017b\u018b\u018d\u018f"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'...'", "'.'", "'('", "','", "')'", "'void'", 
                     "'=>'", "'for'", "'while'", "';'", "'in'", "'of'", 
                     "'if'", "'elif'", "'else'", "'['", "']'", "'{'", "'}'", 
                     "':'", "'='", "'*='", "'/='", "'+='", "'-='", "'%='", 
                     "'++'", "'--'", "'stat'", "'pub'", "'var'", "'unpack'", 
                     "'~{'", "'return'", "'new'", "'class'", "'-'", "'*'", 
                     "'/'", "'+'", "'%'", "'_'", "'~'", "'>'", "'>='", "'<'", 
                     "'<='", "'!='", "'?'", "'to'", "'by'", "'#'", "'=='", 
                     "'!'", "'&&'", "'||'", "'true'", "'false'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, "TRUE", "FALSE", "WS", "COMMENT", 
                      "WORD", "STRING", "NUM" ];

var ruleNames =  [ "all", "iden", "parameter", "parameters", "func", "forloop", 
                   "whileloop", "iter", "cond", "array", "dictionary", "property", 
                   "declar", "assign", "designator", "statement", "value" ];

function GrammarParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

GrammarParser.prototype = Object.create(antlr4.Parser.prototype);
GrammarParser.prototype.constructor = GrammarParser;

Object.defineProperty(GrammarParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

GrammarParser.EOF = antlr4.Token.EOF;
GrammarParser.T__0 = 1;
GrammarParser.T__1 = 2;
GrammarParser.T__2 = 3;
GrammarParser.T__3 = 4;
GrammarParser.T__4 = 5;
GrammarParser.T__5 = 6;
GrammarParser.T__6 = 7;
GrammarParser.T__7 = 8;
GrammarParser.T__8 = 9;
GrammarParser.T__9 = 10;
GrammarParser.T__10 = 11;
GrammarParser.T__11 = 12;
GrammarParser.T__12 = 13;
GrammarParser.T__13 = 14;
GrammarParser.T__14 = 15;
GrammarParser.T__15 = 16;
GrammarParser.T__16 = 17;
GrammarParser.T__17 = 18;
GrammarParser.T__18 = 19;
GrammarParser.T__19 = 20;
GrammarParser.T__20 = 21;
GrammarParser.T__21 = 22;
GrammarParser.T__22 = 23;
GrammarParser.T__23 = 24;
GrammarParser.T__24 = 25;
GrammarParser.T__25 = 26;
GrammarParser.T__26 = 27;
GrammarParser.T__27 = 28;
GrammarParser.T__28 = 29;
GrammarParser.T__29 = 30;
GrammarParser.T__30 = 31;
GrammarParser.T__31 = 32;
GrammarParser.T__32 = 33;
GrammarParser.T__33 = 34;
GrammarParser.T__34 = 35;
GrammarParser.T__35 = 36;
GrammarParser.T__36 = 37;
GrammarParser.T__37 = 38;
GrammarParser.T__38 = 39;
GrammarParser.T__39 = 40;
GrammarParser.T__40 = 41;
GrammarParser.T__41 = 42;
GrammarParser.T__42 = 43;
GrammarParser.T__43 = 44;
GrammarParser.T__44 = 45;
GrammarParser.T__45 = 46;
GrammarParser.T__46 = 47;
GrammarParser.T__47 = 48;
GrammarParser.T__48 = 49;
GrammarParser.T__49 = 50;
GrammarParser.T__50 = 51;
GrammarParser.T__51 = 52;
GrammarParser.T__52 = 53;
GrammarParser.T__53 = 54;
GrammarParser.T__54 = 55;
GrammarParser.T__55 = 56;
GrammarParser.TRUE = 57;
GrammarParser.FALSE = 58;
GrammarParser.WS = 59;
GrammarParser.COMMENT = 60;
GrammarParser.WORD = 61;
GrammarParser.STRING = 62;
GrammarParser.NUM = 63;

GrammarParser.RULE_all = 0;
GrammarParser.RULE_iden = 1;
GrammarParser.RULE_parameter = 2;
GrammarParser.RULE_parameters = 3;
GrammarParser.RULE_func = 4;
GrammarParser.RULE_forloop = 5;
GrammarParser.RULE_whileloop = 6;
GrammarParser.RULE_iter = 7;
GrammarParser.RULE_cond = 8;
GrammarParser.RULE_array = 9;
GrammarParser.RULE_dictionary = 10;
GrammarParser.RULE_property = 11;
GrammarParser.RULE_declar = 12;
GrammarParser.RULE_assign = 13;
GrammarParser.RULE_designator = 14;
GrammarParser.RULE_statement = 15;
GrammarParser.RULE_value = 16;


function AllContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_all;
    return this;
}

AllContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AllContext.prototype.constructor = AllContext;

AllContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

AllContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};

AllContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterAll(this);
	}
};

AllContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitAll(this);
	}
};

AllContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitAll(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.AllContext = AllContext;

GrammarParser.prototype.all = function() {

    var localctx = new AllContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, GrammarParser.RULE_all);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 38;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GrammarParser.T__0) | (1 << GrammarParser.T__1) | (1 << GrammarParser.T__2) | (1 << GrammarParser.T__5) | (1 << GrammarParser.T__7) | (1 << GrammarParser.T__8) | (1 << GrammarParser.T__12) | (1 << GrammarParser.T__15) | (1 << GrammarParser.T__17) | (1 << GrammarParser.T__28) | (1 << GrammarParser.T__29) | (1 << GrammarParser.T__30))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (GrammarParser.T__32 - 33)) | (1 << (GrammarParser.T__33 - 33)) | (1 << (GrammarParser.T__34 - 33)) | (1 << (GrammarParser.T__35 - 33)) | (1 << (GrammarParser.T__36 - 33)) | (1 << (GrammarParser.T__42 - 33)) | (1 << (GrammarParser.T__51 - 33)) | (1 << (GrammarParser.T__53 - 33)) | (1 << (GrammarParser.TRUE - 33)) | (1 << (GrammarParser.FALSE - 33)) | (1 << (GrammarParser.COMMENT - 33)) | (1 << (GrammarParser.WORD - 33)) | (1 << (GrammarParser.STRING - 33)) | (1 << (GrammarParser.NUM - 33)))) !== 0)) {
            this.state = 36;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
            switch(la_) {
            case 1:
                this.state = 34;
                this.statement();
                break;

            case 2:
                this.state = 35;
                this.value(0);
                break;

            }
            this.state = 40;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function IdenContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_iden;
    return this;
}

IdenContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdenContext.prototype.constructor = IdenContext;

IdenContext.prototype.WORD = function() {
    return this.getToken(GrammarParser.WORD, 0);
};

IdenContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterIden(this);
	}
};

IdenContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitIden(this);
	}
};

IdenContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitIden(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.IdenContext = IdenContext;

GrammarParser.prototype.iden = function() {

    var localctx = new IdenContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, GrammarParser.RULE_iden);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 41;
        this.match(GrammarParser.WORD);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ParameterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_parameter;
    return this;
}

ParameterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParameterContext.prototype.constructor = ParameterContext;


 
ParameterContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function PropertyParameterContext(parser, ctx) {
	ParameterContext.call(this, parser);
    ParameterContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PropertyParameterContext.prototype = Object.create(ParameterContext.prototype);
PropertyParameterContext.prototype.constructor = PropertyParameterContext;

GrammarParser.PropertyParameterContext = PropertyParameterContext;

PropertyParameterContext.prototype.iden = function() {
    return this.getTypedRuleContext(IdenContext,0);
};
PropertyParameterContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterPropertyParameter(this);
	}
};

PropertyParameterContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitPropertyParameter(this);
	}
};

PropertyParameterContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitPropertyParameter(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function SpreadParameterContext(parser, ctx) {
	ParameterContext.call(this, parser);
    ParameterContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SpreadParameterContext.prototype = Object.create(ParameterContext.prototype);
SpreadParameterContext.prototype.constructor = SpreadParameterContext;

GrammarParser.SpreadParameterContext = SpreadParameterContext;

SpreadParameterContext.prototype.iden = function() {
    return this.getTypedRuleContext(IdenContext,0);
};
SpreadParameterContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterSpreadParameter(this);
	}
};

SpreadParameterContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitSpreadParameter(this);
	}
};

SpreadParameterContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitSpreadParameter(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IdenParameterContext(parser, ctx) {
	ParameterContext.call(this, parser);
    ParameterContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdenParameterContext.prototype = Object.create(ParameterContext.prototype);
IdenParameterContext.prototype.constructor = IdenParameterContext;

GrammarParser.IdenParameterContext = IdenParameterContext;

IdenParameterContext.prototype.iden = function() {
    return this.getTypedRuleContext(IdenContext,0);
};
IdenParameterContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterIdenParameter(this);
	}
};

IdenParameterContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitIdenParameter(this);
	}
};

IdenParameterContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitIdenParameter(this);
    } else {
        return visitor.visitChildren(this);
    }
};



GrammarParser.ParameterContext = ParameterContext;

GrammarParser.prototype.parameter = function() {

    var localctx = new ParameterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, GrammarParser.RULE_parameter);
    try {
        this.state = 48;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case GrammarParser.WORD:
            localctx = new IdenParameterContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 43;
            this.iden();
            break;
        case GrammarParser.T__0:
            localctx = new SpreadParameterContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 44;
            this.match(GrammarParser.T__0);
            this.state = 45;
            this.iden();
            break;
        case GrammarParser.T__1:
            localctx = new PropertyParameterContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 46;
            this.match(GrammarParser.T__1);
            this.state = 47;
            this.iden();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ParametersContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_parameters;
    return this;
}

ParametersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParametersContext.prototype.constructor = ParametersContext;

ParametersContext.prototype.parameter = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ParameterContext);
    } else {
        return this.getTypedRuleContext(ParameterContext,i);
    }
};

ParametersContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterParameters(this);
	}
};

ParametersContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitParameters(this);
	}
};

ParametersContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitParameters(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.ParametersContext = ParametersContext;

GrammarParser.prototype.parameters = function() {

    var localctx = new ParametersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, GrammarParser.RULE_parameters);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 50;
        this.match(GrammarParser.T__2);
        this.state = 56;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 51;
                this.parameter();
                this.state = 52;
                this.match(GrammarParser.T__3); 
            }
            this.state = 58;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
        }

        this.state = 60;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===GrammarParser.T__0 || _la===GrammarParser.T__1 || _la===GrammarParser.WORD) {
            this.state = 59;
            this.parameter();
        }

        this.state = 62;
        this.match(GrammarParser.T__4);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FuncContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_func;
    return this;
}

FuncContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FuncContext.prototype.constructor = FuncContext;


 
FuncContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function TradFuncContext(parser, ctx) {
	FuncContext.call(this, parser);
    FuncContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TradFuncContext.prototype = Object.create(FuncContext.prototype);
TradFuncContext.prototype.constructor = TradFuncContext;

GrammarParser.TradFuncContext = TradFuncContext;

TradFuncContext.prototype.parameters = function() {
    return this.getTypedRuleContext(ParametersContext,0);
};

TradFuncContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};
TradFuncContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterTradFunc(this);
	}
};

TradFuncContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitTradFunc(this);
	}
};

TradFuncContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitTradFunc(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ArrowFuncContext(parser, ctx) {
	FuncContext.call(this, parser);
    FuncContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ArrowFuncContext.prototype = Object.create(FuncContext.prototype);
ArrowFuncContext.prototype.constructor = ArrowFuncContext;

GrammarParser.ArrowFuncContext = ArrowFuncContext;

ArrowFuncContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

ArrowFuncContext.prototype.parameters = function() {
    return this.getTypedRuleContext(ParametersContext,0);
};

ArrowFuncContext.prototype.parameter = function() {
    return this.getTypedRuleContext(ParameterContext,0);
};
ArrowFuncContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterArrowFunc(this);
	}
};

ArrowFuncContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitArrowFunc(this);
	}
};

ArrowFuncContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitArrowFunc(this);
    } else {
        return visitor.visitChildren(this);
    }
};



GrammarParser.FuncContext = FuncContext;

GrammarParser.prototype.func = function() {

    var localctx = new FuncContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, GrammarParser.RULE_func);
    try {
        this.state = 75;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case GrammarParser.T__5:
            localctx = new TradFuncContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 64;
            this.match(GrammarParser.T__5);
            this.state = 65;
            this.parameters();
            this.state = 66;
            this.statement();
            break;
        case GrammarParser.T__0:
        case GrammarParser.T__1:
        case GrammarParser.T__2:
        case GrammarParser.WORD:
            localctx = new ArrowFuncContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 70;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case GrammarParser.T__2:
                this.state = 68;
                this.parameters();
                break;
            case GrammarParser.T__0:
            case GrammarParser.T__1:
            case GrammarParser.WORD:
                this.state = 69;
                this.parameter();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 72;
            this.match(GrammarParser.T__6);
            this.state = 73;
            this.statement();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ForloopContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_forloop;
    return this;
}

ForloopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ForloopContext.prototype.constructor = ForloopContext;

ForloopContext.prototype.iter = function() {
    return this.getTypedRuleContext(IterContext,0);
};

ForloopContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

ForloopContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterForloop(this);
	}
};

ForloopContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitForloop(this);
	}
};

ForloopContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitForloop(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.ForloopContext = ForloopContext;

GrammarParser.prototype.forloop = function() {

    var localctx = new ForloopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, GrammarParser.RULE_forloop);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 77;
        this.match(GrammarParser.T__7);
        this.state = 78;
        this.match(GrammarParser.T__2);
        this.state = 79;
        this.iter();
        this.state = 80;
        this.match(GrammarParser.T__4);
        this.state = 81;
        this.statement();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function WhileloopContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_whileloop;
    return this;
}

WhileloopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WhileloopContext.prototype.constructor = WhileloopContext;

WhileloopContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

WhileloopContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

WhileloopContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterWhileloop(this);
	}
};

WhileloopContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitWhileloop(this);
	}
};

WhileloopContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitWhileloop(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.WhileloopContext = WhileloopContext;

GrammarParser.prototype.whileloop = function() {

    var localctx = new WhileloopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, GrammarParser.RULE_whileloop);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 83;
        this.match(GrammarParser.T__8);
        this.state = 84;
        this.match(GrammarParser.T__2);
        this.state = 85;
        this.value(0);
        this.state = 86;
        this.match(GrammarParser.T__4);
        this.state = 87;
        this.statement();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function IterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_iter;
    return this;
}

IterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IterContext.prototype.constructor = IterContext;


 
IterContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function InIterContext(parser, ctx) {
	IterContext.call(this, parser);
    IterContext.prototype.copyFrom.call(this, ctx);
    return this;
}

InIterContext.prototype = Object.create(IterContext.prototype);
InIterContext.prototype.constructor = InIterContext;

GrammarParser.InIterContext = InIterContext;

InIterContext.prototype.designator = function() {
    return this.getTypedRuleContext(DesignatorContext,0);
};

InIterContext.prototype.iden = function() {
    return this.getTypedRuleContext(IdenContext,0);
};

InIterContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};
InIterContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterInIter(this);
	}
};

InIterContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitInIter(this);
	}
};

InIterContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitInIter(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function OfIterContext(parser, ctx) {
	IterContext.call(this, parser);
    IterContext.prototype.copyFrom.call(this, ctx);
    return this;
}

OfIterContext.prototype = Object.create(IterContext.prototype);
OfIterContext.prototype.constructor = OfIterContext;

GrammarParser.OfIterContext = OfIterContext;

OfIterContext.prototype.designator = function() {
    return this.getTypedRuleContext(DesignatorContext,0);
};

OfIterContext.prototype.iden = function() {
    return this.getTypedRuleContext(IdenContext,0);
};

OfIterContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};
OfIterContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterOfIter(this);
	}
};

OfIterContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitOfIter(this);
	}
};

OfIterContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitOfIter(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ThreeFuncIterContext(parser, ctx) {
	IterContext.call(this, parser);
    IterContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ThreeFuncIterContext.prototype = Object.create(IterContext.prototype);
ThreeFuncIterContext.prototype.constructor = ThreeFuncIterContext;

GrammarParser.ThreeFuncIterContext = ThreeFuncIterContext;

ThreeFuncIterContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

ThreeFuncIterContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};
ThreeFuncIterContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterThreeFuncIter(this);
	}
};

ThreeFuncIterContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitThreeFuncIter(this);
	}
};

ThreeFuncIterContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitThreeFuncIter(this);
    } else {
        return visitor.visitChildren(this);
    }
};



GrammarParser.IterContext = IterContext;

GrammarParser.prototype.iter = function() {

    var localctx = new IterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, GrammarParser.RULE_iter);
    var _la = 0; // Token type
    try {
        this.state = 110;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
        switch(la_) {
        case 1:
            localctx = new ThreeFuncIterContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 90;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GrammarParser.T__0) | (1 << GrammarParser.T__1) | (1 << GrammarParser.T__2) | (1 << GrammarParser.T__5) | (1 << GrammarParser.T__7) | (1 << GrammarParser.T__8) | (1 << GrammarParser.T__12) | (1 << GrammarParser.T__15) | (1 << GrammarParser.T__17) | (1 << GrammarParser.T__28) | (1 << GrammarParser.T__29) | (1 << GrammarParser.T__30))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (GrammarParser.T__32 - 33)) | (1 << (GrammarParser.T__33 - 33)) | (1 << (GrammarParser.T__34 - 33)) | (1 << (GrammarParser.T__35 - 33)) | (1 << (GrammarParser.T__36 - 33)) | (1 << (GrammarParser.T__42 - 33)) | (1 << (GrammarParser.T__51 - 33)) | (1 << (GrammarParser.T__53 - 33)) | (1 << (GrammarParser.TRUE - 33)) | (1 << (GrammarParser.FALSE - 33)) | (1 << (GrammarParser.COMMENT - 33)) | (1 << (GrammarParser.WORD - 33)) | (1 << (GrammarParser.STRING - 33)) | (1 << (GrammarParser.NUM - 33)))) !== 0)) {
                this.state = 89;
                this.statement();
            }

            this.state = 92;
            this.match(GrammarParser.T__9);
            this.state = 94;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GrammarParser.T__0) | (1 << GrammarParser.T__1) | (1 << GrammarParser.T__2) | (1 << GrammarParser.T__5) | (1 << GrammarParser.T__15) | (1 << GrammarParser.T__17))) !== 0) || ((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & ((1 << (GrammarParser.T__34 - 35)) | (1 << (GrammarParser.T__35 - 35)) | (1 << (GrammarParser.T__36 - 35)) | (1 << (GrammarParser.T__42 - 35)) | (1 << (GrammarParser.T__51 - 35)) | (1 << (GrammarParser.T__53 - 35)) | (1 << (GrammarParser.TRUE - 35)) | (1 << (GrammarParser.FALSE - 35)) | (1 << (GrammarParser.WORD - 35)) | (1 << (GrammarParser.STRING - 35)) | (1 << (GrammarParser.NUM - 35)))) !== 0)) {
                this.state = 93;
                this.value(0);
            }

            this.state = 96;
            this.match(GrammarParser.T__9);
            this.state = 98;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GrammarParser.T__0) | (1 << GrammarParser.T__1) | (1 << GrammarParser.T__2) | (1 << GrammarParser.T__5) | (1 << GrammarParser.T__7) | (1 << GrammarParser.T__8) | (1 << GrammarParser.T__12) | (1 << GrammarParser.T__15) | (1 << GrammarParser.T__17) | (1 << GrammarParser.T__28) | (1 << GrammarParser.T__29) | (1 << GrammarParser.T__30))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (GrammarParser.T__32 - 33)) | (1 << (GrammarParser.T__33 - 33)) | (1 << (GrammarParser.T__34 - 33)) | (1 << (GrammarParser.T__35 - 33)) | (1 << (GrammarParser.T__36 - 33)) | (1 << (GrammarParser.T__42 - 33)) | (1 << (GrammarParser.T__51 - 33)) | (1 << (GrammarParser.T__53 - 33)) | (1 << (GrammarParser.TRUE - 33)) | (1 << (GrammarParser.FALSE - 33)) | (1 << (GrammarParser.COMMENT - 33)) | (1 << (GrammarParser.WORD - 33)) | (1 << (GrammarParser.STRING - 33)) | (1 << (GrammarParser.NUM - 33)))) !== 0)) {
                this.state = 97;
                this.statement();
            }

            break;

        case 2:
            localctx = new InIterContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 100;
            this.designator();
            this.state = 101;
            this.iden();
            this.state = 102;
            this.match(GrammarParser.T__10);
            this.state = 103;
            this.value(0);
            break;

        case 3:
            localctx = new OfIterContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 105;
            this.designator();
            this.state = 106;
            this.iden();
            this.state = 107;
            this.match(GrammarParser.T__11);
            this.state = 108;
            this.value(0);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CondContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_cond;
    return this;
}

CondContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CondContext.prototype.constructor = CondContext;

CondContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};

CondContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

CondContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterCond(this);
	}
};

CondContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitCond(this);
	}
};

CondContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitCond(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.CondContext = CondContext;

GrammarParser.prototype.cond = function() {

    var localctx = new CondContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, GrammarParser.RULE_cond);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 112;
        this.match(GrammarParser.T__12);
        this.state = 113;
        this.match(GrammarParser.T__2);
        this.state = 114;
        this.value(0);
        this.state = 115;
        this.match(GrammarParser.T__4);
        this.state = 116;
        this.statement();
        this.state = 125;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 117;
                this.match(GrammarParser.T__13);
                this.state = 118;
                this.match(GrammarParser.T__2);
                this.state = 119;
                this.value(0);
                this.state = 120;
                this.match(GrammarParser.T__4);
                this.state = 121;
                this.statement(); 
            }
            this.state = 127;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
        }

        this.state = 130;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        if(la_===1) {
            this.state = 128;
            this.match(GrammarParser.T__14);
            this.state = 129;
            this.statement();

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ArrayContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_array;
    return this;
}

ArrayContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayContext.prototype.constructor = ArrayContext;

ArrayContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};

ArrayContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterArray(this);
	}
};

ArrayContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitArray(this);
	}
};

ArrayContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitArray(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.ArrayContext = ArrayContext;

GrammarParser.prototype.array = function() {

    var localctx = new ArrayContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, GrammarParser.RULE_array);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 132;
        this.match(GrammarParser.T__15);
        this.state = 141;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 134;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
                if(la_===1) {
                    this.state = 133;
                    this.match(GrammarParser.T__0);

                }
                this.state = 136;
                this.value(0);
                this.state = 137;
                this.match(GrammarParser.T__3); 
            }
            this.state = 143;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
        }

        this.state = 148;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GrammarParser.T__0) | (1 << GrammarParser.T__1) | (1 << GrammarParser.T__2) | (1 << GrammarParser.T__5) | (1 << GrammarParser.T__15) | (1 << GrammarParser.T__17))) !== 0) || ((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & ((1 << (GrammarParser.T__34 - 35)) | (1 << (GrammarParser.T__35 - 35)) | (1 << (GrammarParser.T__36 - 35)) | (1 << (GrammarParser.T__42 - 35)) | (1 << (GrammarParser.T__51 - 35)) | (1 << (GrammarParser.T__53 - 35)) | (1 << (GrammarParser.TRUE - 35)) | (1 << (GrammarParser.FALSE - 35)) | (1 << (GrammarParser.WORD - 35)) | (1 << (GrammarParser.STRING - 35)) | (1 << (GrammarParser.NUM - 35)))) !== 0)) {
            this.state = 145;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
            if(la_===1) {
                this.state = 144;
                this.match(GrammarParser.T__0);

            }
            this.state = 147;
            this.value(0);
        }

        this.state = 150;
        this.match(GrammarParser.T__16);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DictionaryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_dictionary;
    return this;
}

DictionaryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DictionaryContext.prototype.constructor = DictionaryContext;

DictionaryContext.prototype.property = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PropertyContext);
    } else {
        return this.getTypedRuleContext(PropertyContext,i);
    }
};

DictionaryContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterDictionary(this);
	}
};

DictionaryContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitDictionary(this);
	}
};

DictionaryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitDictionary(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.DictionaryContext = DictionaryContext;

GrammarParser.prototype.dictionary = function() {

    var localctx = new DictionaryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, GrammarParser.RULE_dictionary);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 152;
        this.match(GrammarParser.T__17);
        this.state = 158;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 153;
                this.property();
                this.state = 154;
                this.match(GrammarParser.T__3); 
            }
            this.state = 160;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
        }

        this.state = 165;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===GrammarParser.T__0 || _la===GrammarParser.WORD) {
            this.state = 162;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
            if(la_===1) {
                this.state = 161;
                this.match(GrammarParser.T__0);

            }
            this.state = 164;
            this.property();
        }

        this.state = 167;
        this.match(GrammarParser.T__18);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PropertyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_property;
    return this;
}

PropertyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertyContext.prototype.constructor = PropertyContext;


 
PropertyContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function IterPropertyContext(parser, ctx) {
	PropertyContext.call(this, parser);
    PropertyContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IterPropertyContext.prototype = Object.create(PropertyContext.prototype);
IterPropertyContext.prototype.constructor = IterPropertyContext;

GrammarParser.IterPropertyContext = IterPropertyContext;

IterPropertyContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};
IterPropertyContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterIterProperty(this);
	}
};

IterPropertyContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitIterProperty(this);
	}
};

IterPropertyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitIterProperty(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IdenPropertyContext(parser, ctx) {
	PropertyContext.call(this, parser);
    PropertyContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdenPropertyContext.prototype = Object.create(PropertyContext.prototype);
IdenPropertyContext.prototype.constructor = IdenPropertyContext;

GrammarParser.IdenPropertyContext = IdenPropertyContext;

IdenPropertyContext.prototype.iden = function() {
    return this.getTypedRuleContext(IdenContext,0);
};
IdenPropertyContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterIdenProperty(this);
	}
};

IdenPropertyContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitIdenProperty(this);
	}
};

IdenPropertyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitIdenProperty(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function TradPropertyContext(parser, ctx) {
	PropertyContext.call(this, parser);
    PropertyContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TradPropertyContext.prototype = Object.create(PropertyContext.prototype);
TradPropertyContext.prototype.constructor = TradPropertyContext;

GrammarParser.TradPropertyContext = TradPropertyContext;

TradPropertyContext.prototype.iden = function() {
    return this.getTypedRuleContext(IdenContext,0);
};

TradPropertyContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};
TradPropertyContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterTradProperty(this);
	}
};

TradPropertyContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitTradProperty(this);
	}
};

TradPropertyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitTradProperty(this);
    } else {
        return visitor.visitChildren(this);
    }
};



GrammarParser.PropertyContext = PropertyContext;

GrammarParser.prototype.property = function() {

    var localctx = new PropertyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, GrammarParser.RULE_property);
    try {
        this.state = 176;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
        switch(la_) {
        case 1:
            localctx = new TradPropertyContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 169;
            this.iden();
            this.state = 170;
            this.match(GrammarParser.T__19);
            this.state = 171;
            this.value(0);
            break;

        case 2:
            localctx = new IdenPropertyContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 173;
            this.iden();
            break;

        case 3:
            localctx = new IterPropertyContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 174;
            this.match(GrammarParser.T__0);
            this.state = 175;
            this.value(0);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DeclarContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_declar;
    return this;
}

DeclarContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclarContext.prototype.constructor = DeclarContext;

DeclarContext.prototype.designator = function() {
    return this.getTypedRuleContext(DesignatorContext,0);
};

DeclarContext.prototype.assign = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AssignContext);
    } else {
        return this.getTypedRuleContext(AssignContext,i);
    }
};

DeclarContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterDeclar(this);
	}
};

DeclarContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitDeclar(this);
	}
};

DeclarContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitDeclar(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.DeclarContext = DeclarContext;

GrammarParser.prototype.declar = function() {

    var localctx = new DeclarContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, GrammarParser.RULE_declar);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 178;
        this.designator();
        this.state = 184;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 179;
                this.assign();
                this.state = 180;
                this.match(GrammarParser.T__3); 
            }
            this.state = 186;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,21,this._ctx);
        }

        this.state = 187;
        this.assign();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AssignContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_assign;
    return this;
}

AssignContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignContext.prototype.constructor = AssignContext;


 
AssignContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function SubAssignContext(parser, ctx) {
	AssignContext.call(this, parser);
    AssignContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SubAssignContext.prototype = Object.create(AssignContext.prototype);
SubAssignContext.prototype.constructor = SubAssignContext;

GrammarParser.SubAssignContext = SubAssignContext;

SubAssignContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};
SubAssignContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterSubAssign(this);
	}
};

SubAssignContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitSubAssign(this);
	}
};

SubAssignContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitSubAssign(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function DecAssignContext(parser, ctx) {
	AssignContext.call(this, parser);
    AssignContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DecAssignContext.prototype = Object.create(AssignContext.prototype);
DecAssignContext.prototype.constructor = DecAssignContext;

GrammarParser.DecAssignContext = DecAssignContext;

DecAssignContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};
DecAssignContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterDecAssign(this);
	}
};

DecAssignContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitDecAssign(this);
	}
};

DecAssignContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitDecAssign(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AddAssignContext(parser, ctx) {
	AssignContext.call(this, parser);
    AssignContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AddAssignContext.prototype = Object.create(AssignContext.prototype);
AddAssignContext.prototype.constructor = AddAssignContext;

GrammarParser.AddAssignContext = AddAssignContext;

AddAssignContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};
AddAssignContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterAddAssign(this);
	}
};

AddAssignContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitAddAssign(this);
	}
};

AddAssignContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitAddAssign(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function DivAssignContext(parser, ctx) {
	AssignContext.call(this, parser);
    AssignContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DivAssignContext.prototype = Object.create(AssignContext.prototype);
DivAssignContext.prototype.constructor = DivAssignContext;

GrammarParser.DivAssignContext = DivAssignContext;

DivAssignContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};
DivAssignContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterDivAssign(this);
	}
};

DivAssignContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitDivAssign(this);
	}
};

DivAssignContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitDivAssign(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ModAssignContext(parser, ctx) {
	AssignContext.call(this, parser);
    AssignContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ModAssignContext.prototype = Object.create(AssignContext.prototype);
ModAssignContext.prototype.constructor = ModAssignContext;

GrammarParser.ModAssignContext = ModAssignContext;

ModAssignContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};
ModAssignContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterModAssign(this);
	}
};

ModAssignContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitModAssign(this);
	}
};

ModAssignContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitModAssign(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MultAssignContext(parser, ctx) {
	AssignContext.call(this, parser);
    AssignContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MultAssignContext.prototype = Object.create(AssignContext.prototype);
MultAssignContext.prototype.constructor = MultAssignContext;

GrammarParser.MultAssignContext = MultAssignContext;

MultAssignContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};
MultAssignContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterMultAssign(this);
	}
};

MultAssignContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitMultAssign(this);
	}
};

MultAssignContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitMultAssign(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IncAssignContext(parser, ctx) {
	AssignContext.call(this, parser);
    AssignContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IncAssignContext.prototype = Object.create(AssignContext.prototype);
IncAssignContext.prototype.constructor = IncAssignContext;

GrammarParser.IncAssignContext = IncAssignContext;

IncAssignContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};
IncAssignContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterIncAssign(this);
	}
};

IncAssignContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitIncAssign(this);
	}
};

IncAssignContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitIncAssign(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function SetAssignContext(parser, ctx) {
	AssignContext.call(this, parser);
    AssignContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SetAssignContext.prototype = Object.create(AssignContext.prototype);
SetAssignContext.prototype.constructor = SetAssignContext;

GrammarParser.SetAssignContext = SetAssignContext;

SetAssignContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};
SetAssignContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterSetAssign(this);
	}
};

SetAssignContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitSetAssign(this);
	}
};

SetAssignContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitSetAssign(this);
    } else {
        return visitor.visitChildren(this);
    }
};



GrammarParser.AssignContext = AssignContext;

GrammarParser.prototype.assign = function() {

    var localctx = new AssignContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, GrammarParser.RULE_assign);
    try {
        this.state = 219;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
        switch(la_) {
        case 1:
            localctx = new SetAssignContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 189;
            this.value(0);
            this.state = 190;
            this.match(GrammarParser.T__20);
            this.state = 191;
            this.value(0);
            break;

        case 2:
            localctx = new MultAssignContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 193;
            this.value(0);
            this.state = 194;
            this.match(GrammarParser.T__21);
            this.state = 195;
            this.value(0);
            break;

        case 3:
            localctx = new DivAssignContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 197;
            this.value(0);
            this.state = 198;
            this.match(GrammarParser.T__22);
            this.state = 199;
            this.value(0);
            break;

        case 4:
            localctx = new AddAssignContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 201;
            this.value(0);
            this.state = 202;
            this.match(GrammarParser.T__23);
            this.state = 203;
            this.value(0);
            break;

        case 5:
            localctx = new SubAssignContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 205;
            this.value(0);
            this.state = 206;
            this.match(GrammarParser.T__24);
            this.state = 207;
            this.value(0);
            break;

        case 6:
            localctx = new ModAssignContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 209;
            this.value(0);
            this.state = 210;
            this.match(GrammarParser.T__25);
            this.state = 211;
            this.value(0);
            break;

        case 7:
            localctx = new IncAssignContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 213;
            this.value(0);
            this.state = 214;
            this.match(GrammarParser.T__26);
            break;

        case 8:
            localctx = new DecAssignContext(this, localctx);
            this.enterOuterAlt(localctx, 8);
            this.state = 216;
            this.value(0);
            this.state = 217;
            this.match(GrammarParser.T__27);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DesignatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_designator;
    return this;
}

DesignatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DesignatorContext.prototype.constructor = DesignatorContext;


DesignatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterDesignator(this);
	}
};

DesignatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitDesignator(this);
	}
};

DesignatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitDesignator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.DesignatorContext = DesignatorContext;

GrammarParser.prototype.designator = function() {

    var localctx = new DesignatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, GrammarParser.RULE_designator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 222;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===GrammarParser.T__28) {
            this.state = 221;
            this.match(GrammarParser.T__28);
        }

        this.state = 224;
        _la = this._input.LA(1);
        if(!(_la===GrammarParser.T__29 || _la===GrammarParser.T__30)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;


 
StatementContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function CommentStatementContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CommentStatementContext.prototype = Object.create(StatementContext.prototype);
CommentStatementContext.prototype.constructor = CommentStatementContext;

GrammarParser.CommentStatementContext = CommentStatementContext;

CommentStatementContext.prototype.COMMENT = function() {
    return this.getToken(GrammarParser.COMMENT, 0);
};
CommentStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterCommentStatement(this);
	}
};

CommentStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitCommentStatement(this);
	}
};

CommentStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitCommentStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FuncStatementContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FuncStatementContext.prototype = Object.create(StatementContext.prototype);
FuncStatementContext.prototype.constructor = FuncStatementContext;

GrammarParser.FuncStatementContext = FuncStatementContext;

FuncStatementContext.prototype.designator = function() {
    return this.getTypedRuleContext(DesignatorContext,0);
};

FuncStatementContext.prototype.iden = function() {
    return this.getTypedRuleContext(IdenContext,0);
};

FuncStatementContext.prototype.parameters = function() {
    return this.getTypedRuleContext(ParametersContext,0);
};

FuncStatementContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};
FuncStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterFuncStatement(this);
	}
};

FuncStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitFuncStatement(this);
	}
};

FuncStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitFuncStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function WhileloopStatementContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

WhileloopStatementContext.prototype = Object.create(StatementContext.prototype);
WhileloopStatementContext.prototype.constructor = WhileloopStatementContext;

GrammarParser.WhileloopStatementContext = WhileloopStatementContext;

WhileloopStatementContext.prototype.whileloop = function() {
    return this.getTypedRuleContext(WhileloopContext,0);
};
WhileloopStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterWhileloopStatement(this);
	}
};

WhileloopStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitWhileloopStatement(this);
	}
};

WhileloopStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitWhileloopStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BlockStatementContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BlockStatementContext.prototype = Object.create(StatementContext.prototype);
BlockStatementContext.prototype.constructor = BlockStatementContext;

GrammarParser.BlockStatementContext = BlockStatementContext;

BlockStatementContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};
BlockStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterBlockStatement(this);
	}
};

BlockStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitBlockStatement(this);
	}
};

BlockStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitBlockStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ForloopStatementContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ForloopStatementContext.prototype = Object.create(StatementContext.prototype);
ForloopStatementContext.prototype.constructor = ForloopStatementContext;

GrammarParser.ForloopStatementContext = ForloopStatementContext;

ForloopStatementContext.prototype.forloop = function() {
    return this.getTypedRuleContext(ForloopContext,0);
};
ForloopStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterForloopStatement(this);
	}
};

ForloopStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitForloopStatement(this);
	}
};

ForloopStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitForloopStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ValueStatementContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ValueStatementContext.prototype = Object.create(StatementContext.prototype);
ValueStatementContext.prototype.constructor = ValueStatementContext;

GrammarParser.ValueStatementContext = ValueStatementContext;

ValueStatementContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};
ValueStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterValueStatement(this);
	}
};

ValueStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitValueStatement(this);
	}
};

ValueStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitValueStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AssignStatementContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AssignStatementContext.prototype = Object.create(StatementContext.prototype);
AssignStatementContext.prototype.constructor = AssignStatementContext;

GrammarParser.AssignStatementContext = AssignStatementContext;

AssignStatementContext.prototype.assign = function() {
    return this.getTypedRuleContext(AssignContext,0);
};
AssignStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterAssignStatement(this);
	}
};

AssignStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitAssignStatement(this);
	}
};

AssignStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitAssignStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IfStatementContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IfStatementContext.prototype = Object.create(StatementContext.prototype);
IfStatementContext.prototype.constructor = IfStatementContext;

GrammarParser.IfStatementContext = IfStatementContext;

IfStatementContext.prototype.cond = function() {
    return this.getTypedRuleContext(CondContext,0);
};
IfStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterIfStatement(this);
	}
};

IfStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitIfStatement(this);
	}
};

IfStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitIfStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ReturnStatementContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ReturnStatementContext.prototype = Object.create(StatementContext.prototype);
ReturnStatementContext.prototype.constructor = ReturnStatementContext;

GrammarParser.ReturnStatementContext = ReturnStatementContext;

ReturnStatementContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};
ReturnStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterReturnStatement(this);
	}
};

ReturnStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitReturnStatement(this);
	}
};

ReturnStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitReturnStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function DeclarStatementContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DeclarStatementContext.prototype = Object.create(StatementContext.prototype);
DeclarStatementContext.prototype.constructor = DeclarStatementContext;

GrammarParser.DeclarStatementContext = DeclarStatementContext;

DeclarStatementContext.prototype.declar = function() {
    return this.getTypedRuleContext(DeclarContext,0);
};
DeclarStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterDeclarStatement(this);
	}
};

DeclarStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitDeclarStatement(this);
	}
};

DeclarStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitDeclarStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function GroupStatementContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

GroupStatementContext.prototype = Object.create(StatementContext.prototype);
GroupStatementContext.prototype.constructor = GroupStatementContext;

GrammarParser.GroupStatementContext = GroupStatementContext;

GroupStatementContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};
GroupStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterGroupStatement(this);
	}
};

GroupStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitGroupStatement(this);
	}
};

GroupStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitGroupStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function UnpackStatementContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UnpackStatementContext.prototype = Object.create(StatementContext.prototype);
UnpackStatementContext.prototype.constructor = UnpackStatementContext;

GrammarParser.UnpackStatementContext = UnpackStatementContext;

UnpackStatementContext.prototype.designator = function() {
    return this.getTypedRuleContext(DesignatorContext,0);
};

UnpackStatementContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};
UnpackStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterUnpackStatement(this);
	}
};

UnpackStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitUnpackStatement(this);
	}
};

UnpackStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitUnpackStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};



GrammarParser.StatementContext = StatementContext;

GrammarParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, GrammarParser.RULE_statement);
    var _la = 0; // Token type
    try {
        this.state = 269;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
        switch(la_) {
        case 1:
            localctx = new ForloopStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 226;
            this.forloop();
            break;

        case 2:
            localctx = new WhileloopStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 227;
            this.whileloop();
            break;

        case 3:
            localctx = new IfStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 228;
            this.cond();
            break;

        case 4:
            localctx = new FuncStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 229;
            this.designator();
            this.state = 230;
            this.match(GrammarParser.T__5);
            this.state = 231;
            this.iden();
            this.state = 232;
            this.parameters();
            this.state = 233;
            this.statement();
            break;

        case 5:
            localctx = new UnpackStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 235;
            this.designator();
            this.state = 236;
            this.match(GrammarParser.T__31);
            this.state = 242;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,24,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 237;
                    this.value(0);
                    this.state = 238;
                    this.match(GrammarParser.T__3); 
                }
                this.state = 244;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,24,this._ctx);
            }

            this.state = 245;
            this.value(0);
            break;

        case 6:
            localctx = new AssignStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 247;
            this.assign();
            break;

        case 7:
            localctx = new DeclarStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 248;
            this.declar();
            break;

        case 8:
            localctx = new GroupStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 8);
            this.state = 249;
            this.match(GrammarParser.T__32);
            this.state = 253;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GrammarParser.T__0) | (1 << GrammarParser.T__1) | (1 << GrammarParser.T__2) | (1 << GrammarParser.T__5) | (1 << GrammarParser.T__7) | (1 << GrammarParser.T__8) | (1 << GrammarParser.T__12) | (1 << GrammarParser.T__15) | (1 << GrammarParser.T__17) | (1 << GrammarParser.T__28) | (1 << GrammarParser.T__29) | (1 << GrammarParser.T__30))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (GrammarParser.T__32 - 33)) | (1 << (GrammarParser.T__33 - 33)) | (1 << (GrammarParser.T__34 - 33)) | (1 << (GrammarParser.T__35 - 33)) | (1 << (GrammarParser.T__36 - 33)) | (1 << (GrammarParser.T__42 - 33)) | (1 << (GrammarParser.T__51 - 33)) | (1 << (GrammarParser.T__53 - 33)) | (1 << (GrammarParser.TRUE - 33)) | (1 << (GrammarParser.FALSE - 33)) | (1 << (GrammarParser.COMMENT - 33)) | (1 << (GrammarParser.WORD - 33)) | (1 << (GrammarParser.STRING - 33)) | (1 << (GrammarParser.NUM - 33)))) !== 0)) {
                this.state = 250;
                this.statement();
                this.state = 255;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 256;
            this.match(GrammarParser.T__18);
            break;

        case 9:
            localctx = new BlockStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 9);
            this.state = 257;
            this.match(GrammarParser.T__17);
            this.state = 261;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GrammarParser.T__0) | (1 << GrammarParser.T__1) | (1 << GrammarParser.T__2) | (1 << GrammarParser.T__5) | (1 << GrammarParser.T__7) | (1 << GrammarParser.T__8) | (1 << GrammarParser.T__12) | (1 << GrammarParser.T__15) | (1 << GrammarParser.T__17) | (1 << GrammarParser.T__28) | (1 << GrammarParser.T__29) | (1 << GrammarParser.T__30))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (GrammarParser.T__32 - 33)) | (1 << (GrammarParser.T__33 - 33)) | (1 << (GrammarParser.T__34 - 33)) | (1 << (GrammarParser.T__35 - 33)) | (1 << (GrammarParser.T__36 - 33)) | (1 << (GrammarParser.T__42 - 33)) | (1 << (GrammarParser.T__51 - 33)) | (1 << (GrammarParser.T__53 - 33)) | (1 << (GrammarParser.TRUE - 33)) | (1 << (GrammarParser.FALSE - 33)) | (1 << (GrammarParser.COMMENT - 33)) | (1 << (GrammarParser.WORD - 33)) | (1 << (GrammarParser.STRING - 33)) | (1 << (GrammarParser.NUM - 33)))) !== 0)) {
                this.state = 258;
                this.statement();
                this.state = 263;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 264;
            this.match(GrammarParser.T__18);
            break;

        case 10:
            localctx = new ReturnStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 10);
            this.state = 265;
            this.match(GrammarParser.T__33);
            this.state = 266;
            this.value(0);
            break;

        case 11:
            localctx = new ValueStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 11);
            this.state = 267;
            this.value(0);
            break;

        case 12:
            localctx = new CommentStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 12);
            this.state = 268;
            this.match(GrammarParser.COMMENT);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;


 
ValueContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function LteValueContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LteValueContext.prototype = Object.create(ValueContext.prototype);
LteValueContext.prototype.constructor = LteValueContext;

GrammarParser.LteValueContext = LteValueContext;

LteValueContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};
LteValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterLteValue(this);
	}
};

LteValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitLteValue(this);
	}
};

LteValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitLteValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function TernaryValueContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TernaryValueContext.prototype = Object.create(ValueContext.prototype);
TernaryValueContext.prototype.constructor = TernaryValueContext;

GrammarParser.TernaryValueContext = TernaryValueContext;

TernaryValueContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};
TernaryValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterTernaryValue(this);
	}
};

TernaryValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitTernaryValue(this);
	}
};

TernaryValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitTernaryValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function OrValueContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

OrValueContext.prototype = Object.create(ValueContext.prototype);
OrValueContext.prototype.constructor = OrValueContext;

GrammarParser.OrValueContext = OrValueContext;

OrValueContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};
OrValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterOrValue(this);
	}
};

OrValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitOrValue(this);
	}
};

OrValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitOrValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BlankConcatValueContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BlankConcatValueContext.prototype = Object.create(ValueContext.prototype);
BlankConcatValueContext.prototype.constructor = BlankConcatValueContext;

GrammarParser.BlankConcatValueContext = BlankConcatValueContext;

BlankConcatValueContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};
BlankConcatValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterBlankConcatValue(this);
	}
};

BlankConcatValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitBlankConcatValue(this);
	}
};

BlankConcatValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitBlankConcatValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function InstanceValueContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

InstanceValueContext.prototype = Object.create(ValueContext.prototype);
InstanceValueContext.prototype.constructor = InstanceValueContext;

GrammarParser.InstanceValueContext = InstanceValueContext;

InstanceValueContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};
InstanceValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterInstanceValue(this);
	}
};

InstanceValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitInstanceValue(this);
	}
};

InstanceValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitInstanceValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ModValueContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ModValueContext.prototype = Object.create(ValueContext.prototype);
ModValueContext.prototype.constructor = ModValueContext;

GrammarParser.ModValueContext = ModValueContext;

ModValueContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};
ModValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterModValue(this);
	}
};

ModValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitModValue(this);
	}
};

ModValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitModValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MetaValueContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MetaValueContext.prototype = Object.create(ValueContext.prototype);
MetaValueContext.prototype.constructor = MetaValueContext;

GrammarParser.MetaValueContext = MetaValueContext;

MetaValueContext.prototype.iden = function() {
    return this.getTypedRuleContext(IdenContext,0);
};

MetaValueContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};
MetaValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterMetaValue(this);
	}
};

MetaValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitMetaValue(this);
	}
};

MetaValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitMetaValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StringValueContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StringValueContext.prototype = Object.create(ValueContext.prototype);
StringValueContext.prototype.constructor = StringValueContext;

GrammarParser.StringValueContext = StringValueContext;

StringValueContext.prototype.STRING = function() {
    return this.getToken(GrammarParser.STRING, 0);
};
StringValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterStringValue(this);
	}
};

StringValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitStringValue(this);
	}
};

StringValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitStringValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ApplyFuncValueContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ApplyFuncValueContext.prototype = Object.create(ValueContext.prototype);
ApplyFuncValueContext.prototype.constructor = ApplyFuncValueContext;

GrammarParser.ApplyFuncValueContext = ApplyFuncValueContext;

ApplyFuncValueContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};
ApplyFuncValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterApplyFuncValue(this);
	}
};

ApplyFuncValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitApplyFuncValue(this);
	}
};

ApplyFuncValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitApplyFuncValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EqualValueContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EqualValueContext.prototype = Object.create(ValueContext.prototype);
EqualValueContext.prototype.constructor = EqualValueContext;

GrammarParser.EqualValueContext = EqualValueContext;

EqualValueContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};
EqualValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterEqualValue(this);
	}
};

EqualValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitEqualValue(this);
	}
};

EqualValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitEqualValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function GteValueContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

GteValueContext.prototype = Object.create(ValueContext.prototype);
GteValueContext.prototype.constructor = GteValueContext;

GrammarParser.GteValueContext = GteValueContext;

GteValueContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};
GteValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterGteValue(this);
	}
};

GteValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitGteValue(this);
	}
};

GteValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitGteValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AndValueContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AndValueContext.prototype = Object.create(ValueContext.prototype);
AndValueContext.prototype.constructor = AndValueContext;

GrammarParser.AndValueContext = AndValueContext;

AndValueContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};
AndValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterAndValue(this);
	}
};

AndValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitAndValue(this);
	}
};

AndValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitAndValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function DictionaryValueContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DictionaryValueContext.prototype = Object.create(ValueContext.prototype);
DictionaryValueContext.prototype.constructor = DictionaryValueContext;

GrammarParser.DictionaryValueContext = DictionaryValueContext;

DictionaryValueContext.prototype.dictionary = function() {
    return this.getTypedRuleContext(DictionaryContext,0);
};
DictionaryValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterDictionaryValue(this);
	}
};

DictionaryValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitDictionaryValue(this);
	}
};

DictionaryValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitDictionaryValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NumberValueContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NumberValueContext.prototype = Object.create(ValueContext.prototype);
NumberValueContext.prototype.constructor = NumberValueContext;

GrammarParser.NumberValueContext = NumberValueContext;

NumberValueContext.prototype.NUM = function() {
    return this.getToken(GrammarParser.NUM, 0);
};
NumberValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterNumberValue(this);
	}
};

NumberValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitNumberValue(this);
	}
};

NumberValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitNumberValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BracketValueContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BracketValueContext.prototype = Object.create(ValueContext.prototype);
BracketValueContext.prototype.constructor = BracketValueContext;

GrammarParser.BracketValueContext = BracketValueContext;

BracketValueContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};
BracketValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterBracketValue(this);
	}
};

BracketValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitBracketValue(this);
	}
};

BracketValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitBracketValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ElementValueContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ElementValueContext.prototype = Object.create(ValueContext.prototype);
ElementValueContext.prototype.constructor = ElementValueContext;

GrammarParser.ElementValueContext = ElementValueContext;

ElementValueContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};
ElementValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterElementValue(this);
	}
};

ElementValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitElementValue(this);
	}
};

ElementValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitElementValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AddValueContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AddValueContext.prototype = Object.create(ValueContext.prototype);
AddValueContext.prototype.constructor = AddValueContext;

GrammarParser.AddValueContext = AddValueContext;

AddValueContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};
AddValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterAddValue(this);
	}
};

AddValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitAddValue(this);
	}
};

AddValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitAddValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NegateValueContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NegateValueContext.prototype = Object.create(ValueContext.prototype);
NegateValueContext.prototype.constructor = NegateValueContext;

GrammarParser.NegateValueContext = NegateValueContext;

NegateValueContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};
NegateValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterNegateValue(this);
	}
};

NegateValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitNegateValue(this);
	}
};

NegateValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitNegateValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MultValueContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MultValueContext.prototype = Object.create(ValueContext.prototype);
MultValueContext.prototype.constructor = MultValueContext;

GrammarParser.MultValueContext = MultValueContext;

MultValueContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};
MultValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterMultValue(this);
	}
};

MultValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitMultValue(this);
	}
};

MultValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitMultValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function InequalValueContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

InequalValueContext.prototype = Object.create(ValueContext.prototype);
InequalValueContext.prototype.constructor = InequalValueContext;

GrammarParser.InequalValueContext = InequalValueContext;

InequalValueContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};
InequalValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterInequalValue(this);
	}
};

InequalValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitInequalValue(this);
	}
};

InequalValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitInequalValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PropertyValueContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PropertyValueContext.prototype = Object.create(ValueContext.prototype);
PropertyValueContext.prototype.constructor = PropertyValueContext;

GrammarParser.PropertyValueContext = PropertyValueContext;

PropertyValueContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

PropertyValueContext.prototype.iden = function() {
    return this.getTypedRuleContext(IdenContext,0);
};
PropertyValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterPropertyValue(this);
	}
};

PropertyValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitPropertyValue(this);
	}
};

PropertyValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitPropertyValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ArrayValueContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ArrayValueContext.prototype = Object.create(ValueContext.prototype);
ArrayValueContext.prototype.constructor = ArrayValueContext;

GrammarParser.ArrayValueContext = ArrayValueContext;

ArrayValueContext.prototype.array = function() {
    return this.getTypedRuleContext(ArrayContext,0);
};
ArrayValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterArrayValue(this);
	}
};

ArrayValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitArrayValue(this);
	}
};

ArrayValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitArrayValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NotValueContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NotValueContext.prototype = Object.create(ValueContext.prototype);
NotValueContext.prototype.constructor = NotValueContext;

GrammarParser.NotValueContext = NotValueContext;

NotValueContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};
NotValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterNotValue(this);
	}
};

NotValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitNotValue(this);
	}
};

NotValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitNotValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ClassValueContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ClassValueContext.prototype = Object.create(ValueContext.prototype);
ClassValueContext.prototype.constructor = ClassValueContext;

GrammarParser.ClassValueContext = ClassValueContext;

ClassValueContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};
ClassValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterClassValue(this);
	}
};

ClassValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitClassValue(this);
	}
};

ClassValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitClassValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LtValueContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LtValueContext.prototype = Object.create(ValueContext.prototype);
LtValueContext.prototype.constructor = LtValueContext;

GrammarParser.LtValueContext = LtValueContext;

LtValueContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};
LtValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterLtValue(this);
	}
};

LtValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitLtValue(this);
	}
};

LtValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitLtValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IdenValueContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdenValueContext.prototype = Object.create(ValueContext.prototype);
IdenValueContext.prototype.constructor = IdenValueContext;

GrammarParser.IdenValueContext = IdenValueContext;

IdenValueContext.prototype.iden = function() {
    return this.getTypedRuleContext(IdenContext,0);
};
IdenValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterIdenValue(this);
	}
};

IdenValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitIdenValue(this);
	}
};

IdenValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitIdenValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FuncValueContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FuncValueContext.prototype = Object.create(ValueContext.prototype);
FuncValueContext.prototype.constructor = FuncValueContext;

GrammarParser.FuncValueContext = FuncValueContext;

FuncValueContext.prototype.func = function() {
    return this.getTypedRuleContext(FuncContext,0);
};
FuncValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterFuncValue(this);
	}
};

FuncValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitFuncValue(this);
	}
};

FuncValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitFuncValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function GtValueContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

GtValueContext.prototype = Object.create(ValueContext.prototype);
GtValueContext.prototype.constructor = GtValueContext;

GrammarParser.GtValueContext = GtValueContext;

GtValueContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};
GtValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterGtValue(this);
	}
};

GtValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitGtValue(this);
	}
};

GtValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitGtValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BoolValueContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BoolValueContext.prototype = Object.create(ValueContext.prototype);
BoolValueContext.prototype.constructor = BoolValueContext;

GrammarParser.BoolValueContext = BoolValueContext;

BoolValueContext.prototype.TRUE = function() {
    return this.getToken(GrammarParser.TRUE, 0);
};

BoolValueContext.prototype.FALSE = function() {
    return this.getToken(GrammarParser.FALSE, 0);
};
BoolValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterBoolValue(this);
	}
};

BoolValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitBoolValue(this);
	}
};

BoolValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitBoolValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StringRepValueContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StringRepValueContext.prototype = Object.create(ValueContext.prototype);
StringRepValueContext.prototype.constructor = StringRepValueContext;

GrammarParser.StringRepValueContext = StringRepValueContext;

StringRepValueContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};
StringRepValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterStringRepValue(this);
	}
};

StringRepValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitStringRepValue(this);
	}
};

StringRepValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitStringRepValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function RangeValueContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RangeValueContext.prototype = Object.create(ValueContext.prototype);
RangeValueContext.prototype.constructor = RangeValueContext;

GrammarParser.RangeValueContext = RangeValueContext;

RangeValueContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};
RangeValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterRangeValue(this);
	}
};

RangeValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitRangeValue(this);
	}
};

RangeValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitRangeValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};



GrammarParser.prototype.value = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ValueContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 32;
    this.enterRecursionRule(localctx, 32, GrammarParser.RULE_value, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 316;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
        switch(la_) {
        case 1:
            localctx = new IdenValueContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 272;
            this.iden();
            break;

        case 2:
            localctx = new FuncValueContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 273;
            this.func();
            break;

        case 3:
            localctx = new DictionaryValueContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 274;
            this.dictionary();
            break;

        case 4:
            localctx = new ArrayValueContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 275;
            this.array();
            break;

        case 5:
            localctx = new NumberValueContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 276;
            this.match(GrammarParser.NUM);
            break;

        case 6:
            localctx = new StringValueContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 277;
            this.match(GrammarParser.STRING);
            break;

        case 7:
            localctx = new BoolValueContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 278;
            _la = this._input.LA(1);
            if(!(_la===GrammarParser.TRUE || _la===GrammarParser.FALSE)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            break;

        case 8:
            localctx = new InstanceValueContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 279;
            this.match(GrammarParser.T__34);
            this.state = 280;
            this.value(24);
            break;

        case 9:
            localctx = new ClassValueContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 281;
            this.match(GrammarParser.T__35);
            this.state = 282;
            this.value(23);
            break;

        case 10:
            localctx = new NegateValueContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 283;
            this.match(GrammarParser.T__36);
            this.state = 284;
            this.value(22);
            break;

        case 11:
            localctx = new MetaValueContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 285;
            this.match(GrammarParser.T__42);
            this.state = 286;
            this.iden();
            this.state = 288;
            this.match(GrammarParser.T__2);
            this.state = 297;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,29,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 290;
                    this._errHandler.sync(this);
                    var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
                    if(la_===1) {
                        this.state = 289;
                        this.match(GrammarParser.T__0);

                    }
                    this.state = 292;
                    this.value(0);
                    this.state = 293;
                    this.match(GrammarParser.T__3); 
                }
                this.state = 299;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,29,this._ctx);
            }

            this.state = 304;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GrammarParser.T__0) | (1 << GrammarParser.T__1) | (1 << GrammarParser.T__2) | (1 << GrammarParser.T__5) | (1 << GrammarParser.T__15) | (1 << GrammarParser.T__17))) !== 0) || ((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & ((1 << (GrammarParser.T__34 - 35)) | (1 << (GrammarParser.T__35 - 35)) | (1 << (GrammarParser.T__36 - 35)) | (1 << (GrammarParser.T__42 - 35)) | (1 << (GrammarParser.T__51 - 35)) | (1 << (GrammarParser.T__53 - 35)) | (1 << (GrammarParser.TRUE - 35)) | (1 << (GrammarParser.FALSE - 35)) | (1 << (GrammarParser.WORD - 35)) | (1 << (GrammarParser.STRING - 35)) | (1 << (GrammarParser.NUM - 35)))) !== 0)) {
                this.state = 301;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
                if(la_===1) {
                    this.state = 300;
                    this.match(GrammarParser.T__0);

                }
                this.state = 303;
                this.value(0);
            }

            this.state = 306;
            this.match(GrammarParser.T__4);
            break;

        case 12:
            localctx = new StringRepValueContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 308;
            this.match(GrammarParser.T__51);
            this.state = 309;
            this.value(6);
            break;

        case 13:
            localctx = new NotValueContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 310;
            this.match(GrammarParser.T__53);
            this.state = 311;
            this.value(4);
            break;

        case 14:
            localctx = new BracketValueContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 312;
            this.match(GrammarParser.T__2);
            this.state = 313;
            this.value(0);
            this.state = 314;
            this.match(GrammarParser.T__4);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 397;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,39,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 395;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new MultValueContext(this, new ValueContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_value);
                    this.state = 318;
                    if (!( this.precpred(this._ctx, 21))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 21)");
                    }
                    this.state = 319;
                    _la = this._input.LA(1);
                    if(!(_la===GrammarParser.T__37 || _la===GrammarParser.T__38)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 320;
                    this.value(22);
                    break;

                case 2:
                    localctx = new AddValueContext(this, new ValueContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_value);
                    this.state = 321;
                    if (!( this.precpred(this._ctx, 20))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 20)");
                    }
                    this.state = 322;
                    _la = this._input.LA(1);
                    if(!(_la===GrammarParser.T__36 || _la===GrammarParser.T__39)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 323;
                    this.value(21);
                    break;

                case 3:
                    localctx = new ModValueContext(this, new ValueContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_value);
                    this.state = 324;
                    if (!( this.precpred(this._ctx, 19))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 19)");
                    }
                    this.state = 325;
                    this.match(GrammarParser.T__40);
                    this.state = 326;
                    this.value(20);
                    break;

                case 4:
                    localctx = new BlankConcatValueContext(this, new ValueContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_value);
                    this.state = 327;
                    if (!( this.precpred(this._ctx, 18))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
                    }
                    this.state = 328;
                    this.match(GrammarParser.T__41);
                    this.state = 329;
                    this.value(19);
                    break;

                case 5:
                    localctx = new GtValueContext(this, new ValueContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_value);
                    this.state = 330;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 331;
                    this.match(GrammarParser.T__43);
                    this.state = 332;
                    this.value(14);
                    break;

                case 6:
                    localctx = new GteValueContext(this, new ValueContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_value);
                    this.state = 333;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 334;
                    this.match(GrammarParser.T__44);
                    this.state = 335;
                    this.value(13);
                    break;

                case 7:
                    localctx = new LtValueContext(this, new ValueContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_value);
                    this.state = 336;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 337;
                    this.match(GrammarParser.T__45);
                    this.state = 338;
                    this.value(12);
                    break;

                case 8:
                    localctx = new LteValueContext(this, new ValueContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_value);
                    this.state = 339;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 340;
                    this.match(GrammarParser.T__46);
                    this.state = 341;
                    this.value(11);
                    break;

                case 9:
                    localctx = new InequalValueContext(this, new ValueContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_value);
                    this.state = 342;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 343;
                    this.match(GrammarParser.T__47);
                    this.state = 344;
                    this.value(10);
                    break;

                case 10:
                    localctx = new TernaryValueContext(this, new ValueContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_value);
                    this.state = 345;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 346;
                    this.match(GrammarParser.T__48);
                    this.state = 347;
                    this.value(0);
                    this.state = 348;
                    this.match(GrammarParser.T__19);
                    this.state = 349;
                    this.value(9);
                    break;

                case 11:
                    localctx = new EqualValueContext(this, new ValueContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_value);
                    this.state = 351;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 352;
                    this.match(GrammarParser.T__52);
                    this.state = 353;
                    this.value(6);
                    break;

                case 12:
                    localctx = new AndValueContext(this, new ValueContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_value);
                    this.state = 354;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 355;
                    this.match(GrammarParser.T__54);
                    this.state = 356;
                    this.value(4);
                    break;

                case 13:
                    localctx = new OrValueContext(this, new ValueContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_value);
                    this.state = 357;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 358;
                    this.match(GrammarParser.T__55);
                    this.state = 359;
                    this.value(3);
                    break;

                case 14:
                    localctx = new ApplyFuncValueContext(this, new ValueContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_value);
                    this.state = 360;
                    if (!( this.precpred(this._ctx, 16))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
                    }
                    this.state = 361;
                    this.match(GrammarParser.T__2);
                    this.state = 370;
                    this._errHandler.sync(this);
                    var _alt = this._interp.adaptivePredict(this._input,34,this._ctx)
                    while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                        if(_alt===1) {
                            this.state = 363;
                            this._errHandler.sync(this);
                            var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
                            if(la_===1) {
                                this.state = 362;
                                this.match(GrammarParser.T__0);

                            }
                            this.state = 365;
                            this.value(0);
                            this.state = 366;
                            this.match(GrammarParser.T__3); 
                        }
                        this.state = 372;
                        this._errHandler.sync(this);
                        _alt = this._interp.adaptivePredict(this._input,34,this._ctx);
                    }

                    this.state = 377;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GrammarParser.T__0) | (1 << GrammarParser.T__1) | (1 << GrammarParser.T__2) | (1 << GrammarParser.T__5) | (1 << GrammarParser.T__15) | (1 << GrammarParser.T__17))) !== 0) || ((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & ((1 << (GrammarParser.T__34 - 35)) | (1 << (GrammarParser.T__35 - 35)) | (1 << (GrammarParser.T__36 - 35)) | (1 << (GrammarParser.T__42 - 35)) | (1 << (GrammarParser.T__51 - 35)) | (1 << (GrammarParser.T__53 - 35)) | (1 << (GrammarParser.TRUE - 35)) | (1 << (GrammarParser.FALSE - 35)) | (1 << (GrammarParser.WORD - 35)) | (1 << (GrammarParser.STRING - 35)) | (1 << (GrammarParser.NUM - 35)))) !== 0)) {
                        this.state = 374;
                        this._errHandler.sync(this);
                        var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
                        if(la_===1) {
                            this.state = 373;
                            this.match(GrammarParser.T__0);

                        }
                        this.state = 376;
                        this.value(0);
                    }

                    this.state = 379;
                    this.match(GrammarParser.T__4);
                    break;

                case 15:
                    localctx = new ElementValueContext(this, new ValueContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_value);
                    this.state = 380;
                    if (!( this.precpred(this._ctx, 15))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
                    }
                    this.state = 381;
                    this.match(GrammarParser.T__15);
                    this.state = 382;
                    this.value(0);
                    this.state = 383;
                    this.match(GrammarParser.T__16);
                    break;

                case 16:
                    localctx = new PropertyValueContext(this, new ValueContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_value);
                    this.state = 385;
                    if (!( this.precpred(this._ctx, 14))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                    }
                    this.state = 386;
                    this.match(GrammarParser.T__1);
                    this.state = 387;
                    this.iden();
                    break;

                case 17:
                    localctx = new RangeValueContext(this, new ValueContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_value);
                    this.state = 388;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 389;
                    this.match(GrammarParser.T__49);
                    this.state = 390;
                    this.value(0);
                    this.state = 393;
                    this._errHandler.sync(this);
                    var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
                    if(la_===1) {
                        this.state = 391;
                        this.match(GrammarParser.T__50);
                        this.state = 392;
                        this.value(0);

                    }
                    break;

                } 
            }
            this.state = 399;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,39,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


GrammarParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 16:
			return this.value_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

GrammarParser.prototype.value_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 21);
		case 1:
			return this.precpred(this._ctx, 20);
		case 2:
			return this.precpred(this._ctx, 19);
		case 3:
			return this.precpred(this._ctx, 18);
		case 4:
			return this.precpred(this._ctx, 13);
		case 5:
			return this.precpred(this._ctx, 12);
		case 6:
			return this.precpred(this._ctx, 11);
		case 7:
			return this.precpred(this._ctx, 10);
		case 8:
			return this.precpred(this._ctx, 9);
		case 9:
			return this.precpred(this._ctx, 8);
		case 10:
			return this.precpred(this._ctx, 5);
		case 11:
			return this.precpred(this._ctx, 3);
		case 12:
			return this.precpred(this._ctx, 2);
		case 13:
			return this.precpred(this._ctx, 16);
		case 14:
			return this.precpred(this._ctx, 15);
		case 15:
			return this.precpred(this._ctx, 14);
		case 16:
			return this.precpred(this._ctx, 7);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.GrammarParser = GrammarParser;
exports.AllContext = AllContext;
GrammarParser.AllContext = AllContext;
exports.IdenContext = IdenContext;
GrammarParser.IdenContext = IdenContext;
exports.ParameterContext = ParameterContext;
GrammarParser.ParameterContext = ParameterContext;
exports.ParametersContext = ParametersContext;
GrammarParser.ParametersContext = ParametersContext;
exports.FuncContext = FuncContext;
GrammarParser.FuncContext = FuncContext;
exports.ForloopContext = ForloopContext;
GrammarParser.ForloopContext = ForloopContext;
exports.WhileloopContext = WhileloopContext;
GrammarParser.WhileloopContext = WhileloopContext;
exports.IterContext = IterContext;
GrammarParser.IterContext = IterContext;
exports.CondContext = CondContext;
GrammarParser.CondContext = CondContext;
exports.ArrayContext = ArrayContext;
GrammarParser.ArrayContext = ArrayContext;
exports.DictionaryContext = DictionaryContext;
GrammarParser.DictionaryContext = DictionaryContext;
exports.PropertyContext = PropertyContext;
GrammarParser.PropertyContext = PropertyContext;
exports.DeclarContext = DeclarContext;
GrammarParser.DeclarContext = DeclarContext;
exports.AssignContext = AssignContext;
GrammarParser.AssignContext = AssignContext;
exports.DesignatorContext = DesignatorContext;
GrammarParser.DesignatorContext = DesignatorContext;
exports.StatementContext = StatementContext;
GrammarParser.StatementContext = StatementContext;
exports.ValueContext = ValueContext;
GrammarParser.ValueContext = ValueContext;
exports.PropertyParameterContext = PropertyParameterContext;
GrammarParser.PropertyParameterContext = PropertyParameterContext;
exports.SpreadParameterContext = SpreadParameterContext;
GrammarParser.SpreadParameterContext = SpreadParameterContext;
exports.IdenParameterContext = IdenParameterContext;
GrammarParser.IdenParameterContext = IdenParameterContext;
exports.TradFuncContext = TradFuncContext;
GrammarParser.TradFuncContext = TradFuncContext;
exports.ArrowFuncContext = ArrowFuncContext;
GrammarParser.ArrowFuncContext = ArrowFuncContext;
exports.InIterContext = InIterContext;
GrammarParser.InIterContext = InIterContext;
exports.OfIterContext = OfIterContext;
GrammarParser.OfIterContext = OfIterContext;
exports.ThreeFuncIterContext = ThreeFuncIterContext;
GrammarParser.ThreeFuncIterContext = ThreeFuncIterContext;
exports.IterPropertyContext = IterPropertyContext;
GrammarParser.IterPropertyContext = IterPropertyContext;
exports.IdenPropertyContext = IdenPropertyContext;
GrammarParser.IdenPropertyContext = IdenPropertyContext;
exports.TradPropertyContext = TradPropertyContext;
GrammarParser.TradPropertyContext = TradPropertyContext;
exports.SubAssignContext = SubAssignContext;
GrammarParser.SubAssignContext = SubAssignContext;
exports.DecAssignContext = DecAssignContext;
GrammarParser.DecAssignContext = DecAssignContext;
exports.AddAssignContext = AddAssignContext;
GrammarParser.AddAssignContext = AddAssignContext;
exports.DivAssignContext = DivAssignContext;
GrammarParser.DivAssignContext = DivAssignContext;
exports.ModAssignContext = ModAssignContext;
GrammarParser.ModAssignContext = ModAssignContext;
exports.MultAssignContext = MultAssignContext;
GrammarParser.MultAssignContext = MultAssignContext;
exports.IncAssignContext = IncAssignContext;
GrammarParser.IncAssignContext = IncAssignContext;
exports.SetAssignContext = SetAssignContext;
GrammarParser.SetAssignContext = SetAssignContext;
exports.CommentStatementContext = CommentStatementContext;
GrammarParser.CommentStatementContext = CommentStatementContext;
exports.FuncStatementContext = FuncStatementContext;
GrammarParser.FuncStatementContext = FuncStatementContext;
exports.WhileloopStatementContext = WhileloopStatementContext;
GrammarParser.WhileloopStatementContext = WhileloopStatementContext;
exports.BlockStatementContext = BlockStatementContext;
GrammarParser.BlockStatementContext = BlockStatementContext;
exports.ForloopStatementContext = ForloopStatementContext;
GrammarParser.ForloopStatementContext = ForloopStatementContext;
exports.ValueStatementContext = ValueStatementContext;
GrammarParser.ValueStatementContext = ValueStatementContext;
exports.AssignStatementContext = AssignStatementContext;
GrammarParser.AssignStatementContext = AssignStatementContext;
exports.IfStatementContext = IfStatementContext;
GrammarParser.IfStatementContext = IfStatementContext;
exports.ReturnStatementContext = ReturnStatementContext;
GrammarParser.ReturnStatementContext = ReturnStatementContext;
exports.DeclarStatementContext = DeclarStatementContext;
GrammarParser.DeclarStatementContext = DeclarStatementContext;
exports.GroupStatementContext = GroupStatementContext;
GrammarParser.GroupStatementContext = GroupStatementContext;
exports.UnpackStatementContext = UnpackStatementContext;
GrammarParser.UnpackStatementContext = UnpackStatementContext;
exports.LteValueContext = LteValueContext;
GrammarParser.LteValueContext = LteValueContext;
exports.TernaryValueContext = TernaryValueContext;
GrammarParser.TernaryValueContext = TernaryValueContext;
exports.OrValueContext = OrValueContext;
GrammarParser.OrValueContext = OrValueContext;
exports.BlankConcatValueContext = BlankConcatValueContext;
GrammarParser.BlankConcatValueContext = BlankConcatValueContext;
exports.InstanceValueContext = InstanceValueContext;
GrammarParser.InstanceValueContext = InstanceValueContext;
exports.ModValueContext = ModValueContext;
GrammarParser.ModValueContext = ModValueContext;
exports.MetaValueContext = MetaValueContext;
GrammarParser.MetaValueContext = MetaValueContext;
exports.StringValueContext = StringValueContext;
GrammarParser.StringValueContext = StringValueContext;
exports.ApplyFuncValueContext = ApplyFuncValueContext;
GrammarParser.ApplyFuncValueContext = ApplyFuncValueContext;
exports.EqualValueContext = EqualValueContext;
GrammarParser.EqualValueContext = EqualValueContext;
exports.GteValueContext = GteValueContext;
GrammarParser.GteValueContext = GteValueContext;
exports.AndValueContext = AndValueContext;
GrammarParser.AndValueContext = AndValueContext;
exports.DictionaryValueContext = DictionaryValueContext;
GrammarParser.DictionaryValueContext = DictionaryValueContext;
exports.NumberValueContext = NumberValueContext;
GrammarParser.NumberValueContext = NumberValueContext;
exports.BracketValueContext = BracketValueContext;
GrammarParser.BracketValueContext = BracketValueContext;
exports.ElementValueContext = ElementValueContext;
GrammarParser.ElementValueContext = ElementValueContext;
exports.AddValueContext = AddValueContext;
GrammarParser.AddValueContext = AddValueContext;
exports.NegateValueContext = NegateValueContext;
GrammarParser.NegateValueContext = NegateValueContext;
exports.MultValueContext = MultValueContext;
GrammarParser.MultValueContext = MultValueContext;
exports.InequalValueContext = InequalValueContext;
GrammarParser.InequalValueContext = InequalValueContext;
exports.PropertyValueContext = PropertyValueContext;
GrammarParser.PropertyValueContext = PropertyValueContext;
exports.ArrayValueContext = ArrayValueContext;
GrammarParser.ArrayValueContext = ArrayValueContext;
exports.NotValueContext = NotValueContext;
GrammarParser.NotValueContext = NotValueContext;
exports.ClassValueContext = ClassValueContext;
GrammarParser.ClassValueContext = ClassValueContext;
exports.LtValueContext = LtValueContext;
GrammarParser.LtValueContext = LtValueContext;
exports.IdenValueContext = IdenValueContext;
GrammarParser.IdenValueContext = IdenValueContext;
exports.FuncValueContext = FuncValueContext;
GrammarParser.FuncValueContext = FuncValueContext;
exports.GtValueContext = GtValueContext;
GrammarParser.GtValueContext = GtValueContext;
exports.BoolValueContext = BoolValueContext;
GrammarParser.BoolValueContext = BoolValueContext;
exports.StringRepValueContext = StringRepValueContext;
GrammarParser.StringRepValueContext = StringRepValueContext;
exports.RangeValueContext = RangeValueContext;
GrammarParser.RangeValueContext = RangeValueContext;
