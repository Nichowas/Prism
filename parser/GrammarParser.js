// Generated from Grammar.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var GrammarListener = require('./GrammarListener').GrammarListener;
var GrammarVisitor = require('./GrammarVisitor').GrammarVisitor;

var grammarFileName = "Grammar.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003$\u010e\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0007\u0003*\n\u0003\f\u0003\u000e\u0003-\u000b",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0005\u00046\n\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0007\u0005<\n\u0005\f\u0005\u000e\u0005?\u000b\u0005",
    "\u0003\u0005\u0005\u0005B\n\u0005\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006",
    "L\n\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006Q\n\u0006\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\b\u0005\bZ\n\b\u0003\b\u0003\b\u0005\b^\n\b\u0003\b\u0003\b\u0005\b",
    "b\n\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\bi\n\b\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0005\ns\n\n\u0003",
    "\n\u0003\n\u0003\n\u0006\nx\n\n\r\n\u000e\ny\u0003\n\u0005\n}\n\n\u0003",
    "\n\u0005\n\u0080\n\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0005\u000b",
    "\u0086\n\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0007\u000b\u008b",
    "\n\u000b\f\u000b\u000e\u000b\u008e\u000b\u000b\u0003\u000b\u0005\u000b",
    "\u0091\n\u000b\u0003\u000b\u0005\u000b\u0094\n\u000b\u0003\u000b\u0003",
    "\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0007\f\u009c\n\f\f\f\u000e\f",
    "\u009f\u000b\f\u0003\f\u0005\f\u00a2\n\f\u0003\f\u0005\f\u00a5\n\f\u0003",
    "\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0005",
    "\r\u00b0\n\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0007\u000e",
    "\u00b6\n\u000e\f\u000e\u000e\u000e\u00b9\u000b\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0005",
    "\u0010\u00c2\n\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0007\u0011\u00cc\n",
    "\u0011\f\u0011\u000e\u0011\u00cf\u000b\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0005\u0011\u00d5\n\u0011\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0005\u0012\u00e8\n\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0007\u0012\u00f8\n\u0012\f\u0012\u000e\u0012",
    "\u00fb\u000b\u0012\u0003\u0012\u0005\u0012\u00fe\n\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0007\u0012\u0109\n\u0012\f\u0012\u000e\u0012",
    "\u010c\u000b\u0012\u0003\u0012\u0002\u0003\"\u0013\u0002\u0004\u0006",
    "\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"\u0002",
    "\u0006\u0003\u0002\u000f\u0010\u0003\u0002\u0017\u0018\u0003\u0002\u001b",
    "\u001c\u0003\u0002\u001d\u001e\u0002\u012f\u0002$\u0003\u0002\u0002",
    "\u0002\u0004&\u0003\u0002\u0002\u0002\u00065\u0003\u0002\u0002\u0002",
    "\b7\u0003\u0002\u0002\u0002\nP\u0003\u0002\u0002\u0002\fR\u0003\u0002",
    "\u0002\u0002\u000eh\u0003\u0002\u0002\u0002\u0010j\u0003\u0002\u0002",
    "\u0002\u0012p\u0003\u0002\u0002\u0002\u0014\u0083\u0003\u0002\u0002",
    "\u0002\u0016\u0097\u0003\u0002\u0002\u0002\u0018\u00af\u0003\u0002\u0002",
    "\u0002\u001a\u00b1\u0003\u0002\u0002\u0002\u001c\u00bc\u0003\u0002\u0002",
    "\u0002\u001e\u00c1\u0003\u0002\u0002\u0002 \u00d4\u0003\u0002\u0002",
    "\u0002\"\u00e7\u0003\u0002\u0002\u0002$%\u0007\"\u0002\u0002%\u0003",
    "\u0003\u0002\u0002\u0002&\'\u0007\u0003\u0002\u0002\'+\u0007\u0004\u0002",
    "\u0002(*\u0005\u001a\u000e\u0002)(\u0003\u0002\u0002\u0002*-\u0003\u0002",
    "\u0002\u0002+)\u0003\u0002\u0002\u0002+,\u0003\u0002\u0002\u0002,.\u0003",
    "\u0002\u0002\u0002-+\u0003\u0002\u0002\u0002./\u0007\u0005\u0002\u0002",
    "/\u0005\u0003\u0002\u0002\u000206\u0005\u0002\u0002\u000212\u0007\u0006",
    "\u0002\u000226\u0005\u0002\u0002\u000234\u0007\u0007\u0002\u000246\u0005",
    "\u0002\u0002\u000250\u0003\u0002\u0002\u000251\u0003\u0002\u0002\u0002",
    "53\u0003\u0002\u0002\u00026\u0007\u0003\u0002\u0002\u00027=\u0007\b",
    "\u0002\u000289\u0005\u0006\u0004\u00029:\u0007\t\u0002\u0002:<\u0003",
    "\u0002\u0002\u0002;8\u0003\u0002\u0002\u0002<?\u0003\u0002\u0002\u0002",
    "=;\u0003\u0002\u0002\u0002=>\u0003\u0002\u0002\u0002>A\u0003\u0002\u0002",
    "\u0002?=\u0003\u0002\u0002\u0002@B\u0005\u0006\u0004\u0002A@\u0003\u0002",
    "\u0002\u0002AB\u0003\u0002\u0002\u0002BC\u0003\u0002\u0002\u0002CD\u0007",
    "\n\u0002\u0002D\t\u0003\u0002\u0002\u0002EF\u0007\u000b\u0002\u0002",
    "FG\u0005\b\u0005\u0002GH\u0005 \u0011\u0002HQ\u0003\u0002\u0002\u0002",
    "IL\u0005\b\u0005\u0002JL\u0005\u0006\u0004\u0002KI\u0003\u0002\u0002",
    "\u0002KJ\u0003\u0002\u0002\u0002LM\u0003\u0002\u0002\u0002MN\u0007\f",
    "\u0002\u0002NO\u0005 \u0011\u0002OQ\u0003\u0002\u0002\u0002PE\u0003",
    "\u0002\u0002\u0002PK\u0003\u0002\u0002\u0002Q\u000b\u0003\u0002\u0002",
    "\u0002RS\u0007\r\u0002\u0002ST\u0007\b\u0002\u0002TU\u0005\u000e\b\u0002",
    "UV\u0007\n\u0002\u0002VW\u0005 \u0011\u0002W\r\u0003\u0002\u0002\u0002",
    "XZ\u0005 \u0011\u0002YX\u0003\u0002\u0002\u0002YZ\u0003\u0002\u0002",
    "\u0002Z[\u0003\u0002\u0002\u0002[]\u0007\u000e\u0002\u0002\\^\u0005",
    " \u0011\u0002]\\\u0003\u0002\u0002\u0002]^\u0003\u0002\u0002\u0002^",
    "_\u0003\u0002\u0002\u0002_a\u0007\u000e\u0002\u0002`b\u0005 \u0011\u0002",
    "a`\u0003\u0002\u0002\u0002ab\u0003\u0002\u0002\u0002bi\u0003\u0002\u0002",
    "\u0002cd\u0005\u001e\u0010\u0002de\u0005\u0002\u0002\u0002ef\t\u0002",
    "\u0002\u0002fg\u0005\"\u0012\u0002gi\u0003\u0002\u0002\u0002hY\u0003",
    "\u0002\u0002\u0002hc\u0003\u0002\u0002\u0002i\u000f\u0003\u0002\u0002",
    "\u0002jk\u0007\u0011\u0002\u0002kl\u0007\b\u0002\u0002lm\u0005\"\u0012",
    "\u0002mn\u0007\n\u0002\u0002no\u0005 \u0011\u0002o\u0011\u0003\u0002",
    "\u0002\u0002pw\u0007\b\u0002\u0002qs\u0007\u0006\u0002\u0002rq\u0003",
    "\u0002\u0002\u0002rs\u0003\u0002\u0002\u0002st\u0003\u0002\u0002\u0002",
    "tu\u0005\"\u0012\u0002uv\u0007\t\u0002\u0002vx\u0003\u0002\u0002\u0002",
    "wr\u0003\u0002\u0002\u0002xy\u0003\u0002\u0002\u0002yw\u0003\u0002\u0002",
    "\u0002yz\u0003\u0002\u0002\u0002z\u007f\u0003\u0002\u0002\u0002{}\u0007",
    "\u0006\u0002\u0002|{\u0003\u0002\u0002\u0002|}\u0003\u0002\u0002\u0002",
    "}~\u0003\u0002\u0002\u0002~\u0080\u0005\"\u0012\u0002\u007f|\u0003\u0002",
    "\u0002\u0002\u007f\u0080\u0003\u0002\u0002\u0002\u0080\u0081\u0003\u0002",
    "\u0002\u0002\u0081\u0082\u0007\n\u0002\u0002\u0082\u0013\u0003\u0002",
    "\u0002\u0002\u0083\u008c\u0007\u0012\u0002\u0002\u0084\u0086\u0007\u0006",
    "\u0002\u0002\u0085\u0084\u0003\u0002\u0002\u0002\u0085\u0086\u0003\u0002",
    "\u0002\u0002\u0086\u0087\u0003\u0002\u0002\u0002\u0087\u0088\u0005\"",
    "\u0012\u0002\u0088\u0089\u0007\t\u0002\u0002\u0089\u008b\u0003\u0002",
    "\u0002\u0002\u008a\u0085\u0003\u0002\u0002\u0002\u008b\u008e\u0003\u0002",
    "\u0002\u0002\u008c\u008a\u0003\u0002\u0002\u0002\u008c\u008d\u0003\u0002",
    "\u0002\u0002\u008d\u0093\u0003\u0002\u0002\u0002\u008e\u008c\u0003\u0002",
    "\u0002\u0002\u008f\u0091\u0007\u0006\u0002\u0002\u0090\u008f\u0003\u0002",
    "\u0002\u0002\u0090\u0091\u0003\u0002\u0002\u0002\u0091\u0092\u0003\u0002",
    "\u0002\u0002\u0092\u0094\u0005\"\u0012\u0002\u0093\u0090\u0003\u0002",
    "\u0002\u0002\u0093\u0094\u0003\u0002\u0002\u0002\u0094\u0095\u0003\u0002",
    "\u0002\u0002\u0095\u0096\u0007\u0013\u0002\u0002\u0096\u0015\u0003\u0002",
    "\u0002\u0002\u0097\u009d\u0007\u0004\u0002\u0002\u0098\u0099\u0005\u0018",
    "\r\u0002\u0099\u009a\u0007\t\u0002\u0002\u009a\u009c\u0003\u0002\u0002",
    "\u0002\u009b\u0098\u0003\u0002\u0002\u0002\u009c\u009f\u0003\u0002\u0002",
    "\u0002\u009d\u009b\u0003\u0002\u0002\u0002\u009d\u009e\u0003\u0002\u0002",
    "\u0002\u009e\u00a4\u0003\u0002\u0002\u0002\u009f\u009d\u0003\u0002\u0002",
    "\u0002\u00a0\u00a2\u0007\u0006\u0002\u0002\u00a1\u00a0\u0003\u0002\u0002",
    "\u0002\u00a1\u00a2\u0003\u0002\u0002\u0002\u00a2\u00a3\u0003\u0002\u0002",
    "\u0002\u00a3\u00a5\u0005\u0018\r\u0002\u00a4\u00a1\u0003\u0002\u0002",
    "\u0002\u00a4\u00a5\u0003\u0002\u0002\u0002\u00a5\u00a6\u0003\u0002\u0002",
    "\u0002\u00a6\u00a7\u0007\u0005\u0002\u0002\u00a7\u0017\u0003\u0002\u0002",
    "\u0002\u00a8\u00a9\u0005\u0002\u0002\u0002\u00a9\u00aa\u0007\u0014\u0002",
    "\u0002\u00aa\u00ab\u0005\"\u0012\u0002\u00ab\u00b0\u0003\u0002\u0002",
    "\u0002\u00ac\u00b0\u0005\u0002\u0002\u0002\u00ad\u00ae\u0007\u0006\u0002",
    "\u0002\u00ae\u00b0\u0005\"\u0012\u0002\u00af\u00a8\u0003\u0002\u0002",
    "\u0002\u00af\u00ac\u0003\u0002\u0002\u0002\u00af\u00ad\u0003\u0002\u0002",
    "\u0002\u00b0\u0019\u0003\u0002\u0002\u0002\u00b1\u00b7\u0005\u001e\u0010",
    "\u0002\u00b2\u00b3\u0005\u001c\u000f\u0002\u00b3\u00b4\u0007\t\u0002",
    "\u0002\u00b4\u00b6\u0003\u0002\u0002\u0002\u00b5\u00b2\u0003\u0002\u0002",
    "\u0002\u00b6\u00b9\u0003\u0002\u0002\u0002\u00b7\u00b5\u0003\u0002\u0002",
    "\u0002\u00b7\u00b8\u0003\u0002\u0002\u0002\u00b8\u00ba\u0003\u0002\u0002",
    "\u0002\u00b9\u00b7\u0003\u0002\u0002\u0002\u00ba\u00bb\u0005\u001c\u000f",
    "\u0002\u00bb\u001b\u0003\u0002\u0002\u0002\u00bc\u00bd\u0005\u0002\u0002",
    "\u0002\u00bd\u00be\u0007\u0015\u0002\u0002\u00be\u00bf\u0005\"\u0012",
    "\u0002\u00bf\u001d\u0003\u0002\u0002\u0002\u00c0\u00c2\u0007\u0016\u0002",
    "\u0002\u00c1\u00c0\u0003\u0002\u0002\u0002\u00c1\u00c2\u0003\u0002\u0002",
    "\u0002\u00c2\u00c3\u0003\u0002\u0002\u0002\u00c3\u00c4\t\u0003\u0002",
    "\u0002\u00c4\u001f\u0003\u0002\u0002\u0002\u00c5\u00d5\u0005\f\u0007",
    "\u0002\u00c6\u00d5\u0005\u0010\t\u0002\u00c7\u00d5\u0005\u001c\u000f",
    "\u0002\u00c8\u00d5\u0005\u001a\u000e\u0002\u00c9\u00cd\u0007\u0004\u0002",
    "\u0002\u00ca\u00cc\u0005 \u0011\u0002\u00cb\u00ca\u0003\u0002\u0002",
    "\u0002\u00cc\u00cf\u0003\u0002\u0002\u0002\u00cd\u00cb\u0003\u0002\u0002",
    "\u0002\u00cd\u00ce\u0003\u0002\u0002\u0002\u00ce\u00d0\u0003\u0002\u0002",
    "\u0002\u00cf\u00cd\u0003\u0002\u0002\u0002\u00d0\u00d5\u0007\u0005\u0002",
    "\u0002\u00d1\u00d2\u0007\u0019\u0002\u0002\u00d2\u00d5\u0005\"\u0012",
    "\u0002\u00d3\u00d5\u0005\"\u0012\u0002\u00d4\u00c5\u0003\u0002\u0002",
    "\u0002\u00d4\u00c6\u0003\u0002\u0002\u0002\u00d4\u00c7\u0003\u0002\u0002",
    "\u0002\u00d4\u00c8\u0003\u0002\u0002\u0002\u00d4\u00c9\u0003\u0002\u0002",
    "\u0002\u00d4\u00d1\u0003\u0002\u0002\u0002\u00d4\u00d3\u0003\u0002\u0002",
    "\u0002\u00d5!\u0003\u0002\u0002\u0002\u00d6\u00d7\b\u0012\u0001\u0002",
    "\u00d7\u00d8\u0007\b\u0002\u0002\u00d8\u00d9\u0005\"\u0012\u0002\u00d9",
    "\u00da\u0007\n\u0002\u0002\u00da\u00e8\u0003\u0002\u0002\u0002\u00db",
    "\u00dc\u0007\u001a\u0002\u0002\u00dc\u00e8\u0005\"\u0012\u0012\u00dd",
    "\u00e8\u0005\u0004\u0003\u0002\u00de\u00e8\u0005\u0016\f\u0002\u00df",
    "\u00e8\u0005\u0012\n\u0002\u00e0\u00e8\u0005\u0014\u000b\u0002\u00e1",
    "\u00e2\u0007 \u0002\u0002\u00e2\u00e8\u0005\"\u0012\u0007\u00e3\u00e8",
    "\u0005\u0002\u0002\u0002\u00e4\u00e8\u0005\n\u0006\u0002\u00e5\u00e8",
    "\u0007$\u0002\u0002\u00e6\u00e8\u0007#\u0002\u0002\u00e7\u00d6\u0003",
    "\u0002\u0002\u0002\u00e7\u00db\u0003\u0002\u0002\u0002\u00e7\u00dd\u0003",
    "\u0002\u0002\u0002\u00e7\u00de\u0003\u0002\u0002\u0002\u00e7\u00df\u0003",
    "\u0002\u0002\u0002\u00e7\u00e0\u0003\u0002\u0002\u0002\u00e7\u00e1\u0003",
    "\u0002\u0002\u0002\u00e7\u00e3\u0003\u0002\u0002\u0002\u00e7\u00e4\u0003",
    "\u0002\u0002\u0002\u00e7\u00e5\u0003\u0002\u0002\u0002\u00e7\u00e6\u0003",
    "\u0002\u0002\u0002\u00e8\u010a\u0003\u0002\u0002\u0002\u00e9\u00ea\f",
    "\r\u0002\u0002\u00ea\u00eb\t\u0004\u0002\u0002\u00eb\u0109\u0005\"\u0012",
    "\u000e\u00ec\u00ed\f\f\u0002\u0002\u00ed\u00ee\t\u0005\u0002\u0002\u00ee",
    "\u0109\u0005\"\u0012\r\u00ef\u00f0\f\u000b\u0002\u0002\u00f0\u00f1\u0007",
    "\u001f\u0002\u0002\u00f1\u0109\u0005\"\u0012\f\u00f2\u00f3\f\n\u0002",
    "\u0002\u00f3\u00f9\u0007\b\u0002\u0002\u00f4\u00f5\u0005\"\u0012\u0002",
    "\u00f5\u00f6\u0007\t\u0002\u0002\u00f6\u00f8\u0003\u0002\u0002\u0002",
    "\u00f7\u00f4\u0003\u0002\u0002\u0002\u00f8\u00fb\u0003\u0002\u0002\u0002",
    "\u00f9\u00f7\u0003\u0002\u0002\u0002\u00f9\u00fa\u0003\u0002\u0002\u0002",
    "\u00fa\u00fd\u0003\u0002\u0002\u0002\u00fb\u00f9\u0003\u0002\u0002\u0002",
    "\u00fc\u00fe\u0005\"\u0012\u0002\u00fd\u00fc\u0003\u0002\u0002\u0002",
    "\u00fd\u00fe\u0003\u0002\u0002\u0002\u00fe\u00ff\u0003\u0002\u0002\u0002",
    "\u00ff\u0109\u0007\n\u0002\u0002\u0100\u0101\f\t\u0002\u0002\u0101\u0102",
    "\u0007\u0012\u0002\u0002\u0102\u0103\u0005\"\u0012\u0002\u0103\u0104",
    "\u0007\u0013\u0002\u0002\u0104\u0109\u0003\u0002\u0002\u0002\u0105\u0106",
    "\f\b\u0002\u0002\u0106\u0107\u0007\u0007\u0002\u0002\u0107\u0109\u0005",
    "\u0002\u0002\u0002\u0108\u00e9\u0003\u0002\u0002\u0002\u0108\u00ec\u0003",
    "\u0002\u0002\u0002\u0108\u00ef\u0003\u0002\u0002\u0002\u0108\u00f2\u0003",
    "\u0002\u0002\u0002\u0108\u0100\u0003\u0002\u0002\u0002\u0108\u0105\u0003",
    "\u0002\u0002\u0002\u0109\u010c\u0003\u0002\u0002\u0002\u010a\u0108\u0003",
    "\u0002\u0002\u0002\u010a\u010b\u0003\u0002\u0002\u0002\u010b#\u0003",
    "\u0002\u0002\u0002\u010c\u010a\u0003\u0002\u0002\u0002!+5=AKPY]ahry",
    "|\u007f\u0085\u008c\u0090\u0093\u009d\u00a1\u00a4\u00af\u00b7\u00c1",
    "\u00cd\u00d4\u00e7\u00f9\u00fd\u0108\u010a"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'class'", "'{'", "'}'", "'...'", "'.'", "'('", 
                     "','", "')'", "'void'", "'=>'", "'for'", "';'", "'in'", 
                     "'of'", "'if'", "'['", "']'", "':'", "'='", "'stat'", 
                     "'pub'", "'var'", "'return'", "'new'", "'*'", "'/'", 
                     "'+'", "'-'", "'_'", "'#'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, "WS", "WORD", "STRING", "NUM" ];

var ruleNames =  [ "iden", "classState", "parameter", "parameters", "func", 
                   "loop", "iter", "cond", "tuple", "array", "dictionary", 
                   "property", "declar", "assign", "designator", "statement", 
                   "value" ];

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
GrammarParser.WS = 31;
GrammarParser.WORD = 32;
GrammarParser.STRING = 33;
GrammarParser.NUM = 34;

GrammarParser.RULE_iden = 0;
GrammarParser.RULE_classState = 1;
GrammarParser.RULE_parameter = 2;
GrammarParser.RULE_parameters = 3;
GrammarParser.RULE_func = 4;
GrammarParser.RULE_loop = 5;
GrammarParser.RULE_iter = 6;
GrammarParser.RULE_cond = 7;
GrammarParser.RULE_tuple = 8;
GrammarParser.RULE_array = 9;
GrammarParser.RULE_dictionary = 10;
GrammarParser.RULE_property = 11;
GrammarParser.RULE_declar = 12;
GrammarParser.RULE_assign = 13;
GrammarParser.RULE_designator = 14;
GrammarParser.RULE_statement = 15;
GrammarParser.RULE_value = 16;


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
    this.enterRule(localctx, 0, GrammarParser.RULE_iden);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 34;
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


function ClassStateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_classState;
    return this;
}

ClassStateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClassStateContext.prototype.constructor = ClassStateContext;

ClassStateContext.prototype.declar = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DeclarContext);
    } else {
        return this.getTypedRuleContext(DeclarContext,i);
    }
};

ClassStateContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterClassState(this);
	}
};

ClassStateContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitClassState(this);
	}
};

ClassStateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitClassState(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.ClassStateContext = ClassStateContext;

GrammarParser.prototype.classState = function() {

    var localctx = new ClassStateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, GrammarParser.RULE_classState);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 36;
        this.match(GrammarParser.T__0);
        this.state = 37;
        this.match(GrammarParser.T__1);
        this.state = 41;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GrammarParser.T__19) | (1 << GrammarParser.T__20) | (1 << GrammarParser.T__21))) !== 0)) {
            this.state = 38;
            this.declar();
            this.state = 43;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 44;
        this.match(GrammarParser.T__2);
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


function ValueParameterContext(parser, ctx) {
	ParameterContext.call(this, parser);
    ParameterContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ValueParameterContext.prototype = Object.create(ParameterContext.prototype);
ValueParameterContext.prototype.constructor = ValueParameterContext;

GrammarParser.ValueParameterContext = ValueParameterContext;

ValueParameterContext.prototype.iden = function() {
    return this.getTypedRuleContext(IdenContext,0);
};
ValueParameterContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterValueParameter(this);
	}
};

ValueParameterContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitValueParameter(this);
	}
};

ValueParameterContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitValueParameter(this);
    } else {
        return visitor.visitChildren(this);
    }
};



GrammarParser.ParameterContext = ParameterContext;

GrammarParser.prototype.parameter = function() {

    var localctx = new ParameterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, GrammarParser.RULE_parameter);
    try {
        this.state = 51;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case GrammarParser.WORD:
            localctx = new ValueParameterContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 46;
            this.iden();
            break;
        case GrammarParser.T__3:
            localctx = new SpreadParameterContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 47;
            this.match(GrammarParser.T__3);
            this.state = 48;
            this.iden();
            break;
        case GrammarParser.T__4:
            localctx = new PropertyParameterContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 49;
            this.match(GrammarParser.T__4);
            this.state = 50;
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
        this.state = 53;
        this.match(GrammarParser.T__5);
        this.state = 59;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 54;
                this.parameter();
                this.state = 55;
                this.match(GrammarParser.T__6); 
            }
            this.state = 61;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
        }

        this.state = 63;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 4)) & ~0x1f) == 0 && ((1 << (_la - 4)) & ((1 << (GrammarParser.T__3 - 4)) | (1 << (GrammarParser.T__4 - 4)) | (1 << (GrammarParser.WORD - 4)))) !== 0)) {
            this.state = 62;
            this.parameter();
        }

        this.state = 65;
        this.match(GrammarParser.T__7);
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
        this.state = 78;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case GrammarParser.T__8:
            localctx = new TradFuncContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 67;
            this.match(GrammarParser.T__8);
            this.state = 68;
            this.parameters();
            this.state = 69;
            this.statement();
            break;
        case GrammarParser.T__3:
        case GrammarParser.T__4:
        case GrammarParser.T__5:
        case GrammarParser.WORD:
            localctx = new ArrowFuncContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 73;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case GrammarParser.T__5:
                this.state = 71;
                this.parameters();
                break;
            case GrammarParser.T__3:
            case GrammarParser.T__4:
            case GrammarParser.WORD:
                this.state = 72;
                this.parameter();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 75;
            this.match(GrammarParser.T__9);
            this.state = 76;
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


function LoopContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_loop;
    return this;
}

LoopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LoopContext.prototype.constructor = LoopContext;

LoopContext.prototype.iter = function() {
    return this.getTypedRuleContext(IterContext,0);
};

LoopContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

LoopContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterLoop(this);
	}
};

LoopContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitLoop(this);
	}
};

LoopContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitLoop(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.LoopContext = LoopContext;

GrammarParser.prototype.loop = function() {

    var localctx = new LoopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, GrammarParser.RULE_loop);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 80;
        this.match(GrammarParser.T__10);
        this.state = 81;
        this.match(GrammarParser.T__5);
        this.state = 82;
        this.iter();
        this.state = 83;
        this.match(GrammarParser.T__7);
        this.state = 84;
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


function InOfIterContext(parser, ctx) {
	IterContext.call(this, parser);
    IterContext.prototype.copyFrom.call(this, ctx);
    return this;
}

InOfIterContext.prototype = Object.create(IterContext.prototype);
InOfIterContext.prototype.constructor = InOfIterContext;

GrammarParser.InOfIterContext = InOfIterContext;

InOfIterContext.prototype.designator = function() {
    return this.getTypedRuleContext(DesignatorContext,0);
};

InOfIterContext.prototype.iden = function() {
    return this.getTypedRuleContext(IdenContext,0);
};

InOfIterContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};
InOfIterContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterInOfIter(this);
	}
};

InOfIterContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitInOfIter(this);
	}
};

InOfIterContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitInOfIter(this);
    } else {
        return visitor.visitChildren(this);
    }
};



GrammarParser.IterContext = IterContext;

GrammarParser.prototype.iter = function() {

    var localctx = new IterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, GrammarParser.RULE_iter);
    var _la = 0; // Token type
    try {
        this.state = 102;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        switch(la_) {
        case 1:
            localctx = new ThreeFuncIterContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 87;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GrammarParser.T__0) | (1 << GrammarParser.T__1) | (1 << GrammarParser.T__3) | (1 << GrammarParser.T__4) | (1 << GrammarParser.T__5) | (1 << GrammarParser.T__8) | (1 << GrammarParser.T__10) | (1 << GrammarParser.T__14) | (1 << GrammarParser.T__15) | (1 << GrammarParser.T__19) | (1 << GrammarParser.T__20) | (1 << GrammarParser.T__21) | (1 << GrammarParser.T__22) | (1 << GrammarParser.T__23) | (1 << GrammarParser.T__29))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (GrammarParser.WORD - 32)) | (1 << (GrammarParser.STRING - 32)) | (1 << (GrammarParser.NUM - 32)))) !== 0)) {
                this.state = 86;
                this.statement();
            }

            this.state = 89;
            this.match(GrammarParser.T__11);
            this.state = 91;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GrammarParser.T__0) | (1 << GrammarParser.T__1) | (1 << GrammarParser.T__3) | (1 << GrammarParser.T__4) | (1 << GrammarParser.T__5) | (1 << GrammarParser.T__8) | (1 << GrammarParser.T__10) | (1 << GrammarParser.T__14) | (1 << GrammarParser.T__15) | (1 << GrammarParser.T__19) | (1 << GrammarParser.T__20) | (1 << GrammarParser.T__21) | (1 << GrammarParser.T__22) | (1 << GrammarParser.T__23) | (1 << GrammarParser.T__29))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (GrammarParser.WORD - 32)) | (1 << (GrammarParser.STRING - 32)) | (1 << (GrammarParser.NUM - 32)))) !== 0)) {
                this.state = 90;
                this.statement();
            }

            this.state = 93;
            this.match(GrammarParser.T__11);
            this.state = 95;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GrammarParser.T__0) | (1 << GrammarParser.T__1) | (1 << GrammarParser.T__3) | (1 << GrammarParser.T__4) | (1 << GrammarParser.T__5) | (1 << GrammarParser.T__8) | (1 << GrammarParser.T__10) | (1 << GrammarParser.T__14) | (1 << GrammarParser.T__15) | (1 << GrammarParser.T__19) | (1 << GrammarParser.T__20) | (1 << GrammarParser.T__21) | (1 << GrammarParser.T__22) | (1 << GrammarParser.T__23) | (1 << GrammarParser.T__29))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (GrammarParser.WORD - 32)) | (1 << (GrammarParser.STRING - 32)) | (1 << (GrammarParser.NUM - 32)))) !== 0)) {
                this.state = 94;
                this.statement();
            }

            break;

        case 2:
            localctx = new InOfIterContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 97;
            this.designator();
            this.state = 98;
            this.iden();
            this.state = 99;
            _la = this._input.LA(1);
            if(!(_la===GrammarParser.T__12 || _la===GrammarParser.T__13)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 100;
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

CondContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

CondContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
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
    this.enterRule(localctx, 14, GrammarParser.RULE_cond);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 104;
        this.match(GrammarParser.T__14);
        this.state = 105;
        this.match(GrammarParser.T__5);
        this.state = 106;
        this.value(0);
        this.state = 107;
        this.match(GrammarParser.T__7);
        this.state = 108;
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


function TupleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_tuple;
    return this;
}

TupleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TupleContext.prototype.constructor = TupleContext;

TupleContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};

TupleContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterTuple(this);
	}
};

TupleContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitTuple(this);
	}
};

TupleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitTuple(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.TupleContext = TupleContext;

GrammarParser.prototype.tuple = function() {

    var localctx = new TupleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, GrammarParser.RULE_tuple);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 110;
        this.match(GrammarParser.T__5);
        this.state = 117; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 112;
        		this._errHandler.sync(this);
        		var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
        		if(la_===1) {
        		    this.state = 111;
        		    this.match(GrammarParser.T__3);

        		}
        		this.state = 114;
        		this.value(0);
        		this.state = 115;
        		this.match(GrammarParser.T__6);
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 119; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,11, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
        this.state = 125;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GrammarParser.T__0) | (1 << GrammarParser.T__1) | (1 << GrammarParser.T__3) | (1 << GrammarParser.T__4) | (1 << GrammarParser.T__5) | (1 << GrammarParser.T__8) | (1 << GrammarParser.T__15) | (1 << GrammarParser.T__23) | (1 << GrammarParser.T__29))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (GrammarParser.WORD - 32)) | (1 << (GrammarParser.STRING - 32)) | (1 << (GrammarParser.NUM - 32)))) !== 0)) {
            this.state = 122;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
            if(la_===1) {
                this.state = 121;
                this.match(GrammarParser.T__3);

            }
            this.state = 124;
            this.value(0);
        }

        this.state = 127;
        this.match(GrammarParser.T__7);
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
        this.state = 129;
        this.match(GrammarParser.T__15);
        this.state = 138;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 131;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
                if(la_===1) {
                    this.state = 130;
                    this.match(GrammarParser.T__3);

                }
                this.state = 133;
                this.value(0);
                this.state = 134;
                this.match(GrammarParser.T__6); 
            }
            this.state = 140;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
        }

        this.state = 145;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GrammarParser.T__0) | (1 << GrammarParser.T__1) | (1 << GrammarParser.T__3) | (1 << GrammarParser.T__4) | (1 << GrammarParser.T__5) | (1 << GrammarParser.T__8) | (1 << GrammarParser.T__15) | (1 << GrammarParser.T__23) | (1 << GrammarParser.T__29))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (GrammarParser.WORD - 32)) | (1 << (GrammarParser.STRING - 32)) | (1 << (GrammarParser.NUM - 32)))) !== 0)) {
            this.state = 142;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
            if(la_===1) {
                this.state = 141;
                this.match(GrammarParser.T__3);

            }
            this.state = 144;
            this.value(0);
        }

        this.state = 147;
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
        this.state = 149;
        this.match(GrammarParser.T__1);
        this.state = 155;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 150;
                this.property();
                this.state = 151;
                this.match(GrammarParser.T__6); 
            }
            this.state = 157;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,18,this._ctx);
        }

        this.state = 162;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===GrammarParser.T__3 || _la===GrammarParser.WORD) {
            this.state = 159;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
            if(la_===1) {
                this.state = 158;
                this.match(GrammarParser.T__3);

            }
            this.state = 161;
            this.property();
        }

        this.state = 164;
        this.match(GrammarParser.T__2);
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
        this.state = 173;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
        switch(la_) {
        case 1:
            localctx = new TradPropertyContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 166;
            this.iden();
            this.state = 167;
            this.match(GrammarParser.T__17);
            this.state = 168;
            this.value(0);
            break;

        case 2:
            localctx = new IdenPropertyContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 170;
            this.iden();
            break;

        case 3:
            localctx = new IterPropertyContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 171;
            this.match(GrammarParser.T__3);
            this.state = 172;
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
        this.state = 175;
        this.designator();
        this.state = 181;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,22,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 176;
                this.assign();
                this.state = 177;
                this.match(GrammarParser.T__6); 
            }
            this.state = 183;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,22,this._ctx);
        }

        this.state = 184;
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

AssignContext.prototype.iden = function() {
    return this.getTypedRuleContext(IdenContext,0);
};

AssignContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

AssignContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterAssign(this);
	}
};

AssignContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitAssign(this);
	}
};

AssignContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitAssign(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.AssignContext = AssignContext;

GrammarParser.prototype.assign = function() {

    var localctx = new AssignContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, GrammarParser.RULE_assign);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 186;
        this.iden();
        this.state = 187;
        this.match(GrammarParser.T__18);
        this.state = 188;
        this.value(0);
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
        this.state = 191;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===GrammarParser.T__19) {
            this.state = 190;
            this.match(GrammarParser.T__19);
        }

        this.state = 193;
        _la = this._input.LA(1);
        if(!(_la===GrammarParser.T__20 || _la===GrammarParser.T__21)) {
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


function LoopStatementContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LoopStatementContext.prototype = Object.create(StatementContext.prototype);
LoopStatementContext.prototype.constructor = LoopStatementContext;

GrammarParser.LoopStatementContext = LoopStatementContext;

LoopStatementContext.prototype.loop = function() {
    return this.getTypedRuleContext(LoopContext,0);
};
LoopStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterLoopStatement(this);
	}
};

LoopStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitLoopStatement(this);
	}
};

LoopStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitLoopStatement(this);
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



GrammarParser.StatementContext = StatementContext;

GrammarParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, GrammarParser.RULE_statement);
    var _la = 0; // Token type
    try {
        this.state = 210;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
        switch(la_) {
        case 1:
            localctx = new LoopStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 195;
            this.loop();
            break;

        case 2:
            localctx = new IfStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 196;
            this.cond();
            break;

        case 3:
            localctx = new AssignStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 197;
            this.assign();
            break;

        case 4:
            localctx = new DeclarStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 198;
            this.declar();
            break;

        case 5:
            localctx = new GroupStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 199;
            this.match(GrammarParser.T__1);
            this.state = 203;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GrammarParser.T__0) | (1 << GrammarParser.T__1) | (1 << GrammarParser.T__3) | (1 << GrammarParser.T__4) | (1 << GrammarParser.T__5) | (1 << GrammarParser.T__8) | (1 << GrammarParser.T__10) | (1 << GrammarParser.T__14) | (1 << GrammarParser.T__15) | (1 << GrammarParser.T__19) | (1 << GrammarParser.T__20) | (1 << GrammarParser.T__21) | (1 << GrammarParser.T__22) | (1 << GrammarParser.T__23) | (1 << GrammarParser.T__29))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (GrammarParser.WORD - 32)) | (1 << (GrammarParser.STRING - 32)) | (1 << (GrammarParser.NUM - 32)))) !== 0)) {
                this.state = 200;
                this.statement();
                this.state = 205;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 206;
            this.match(GrammarParser.T__2);
            break;

        case 6:
            localctx = new ReturnStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 207;
            this.match(GrammarParser.T__22);
            this.state = 208;
            this.value(0);
            break;

        case 7:
            localctx = new ValueStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 209;
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


function MultExprContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MultExprContext.prototype = Object.create(ValueContext.prototype);
MultExprContext.prototype.constructor = MultExprContext;

GrammarParser.MultExprContext = MultExprContext;

MultExprContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};
MultExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterMultExpr(this);
	}
};

MultExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitMultExpr(this);
	}
};

MultExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitMultExpr(this);
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

ClassValueContext.prototype.classState = function() {
    return this.getTypedRuleContext(ClassStateContext,0);
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


function AddExprContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AddExprContext.prototype = Object.create(ValueContext.prototype);
AddExprContext.prototype.constructor = AddExprContext;

GrammarParser.AddExprContext = AddExprContext;

AddExprContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};
AddExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterAddExpr(this);
	}
};

AddExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitAddExpr(this);
	}
};

AddExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitAddExpr(this);
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


function TupleValueContext(parser, ctx) {
	ValueContext.call(this, parser);
    ValueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TupleValueContext.prototype = Object.create(ValueContext.prototype);
TupleValueContext.prototype.constructor = TupleValueContext;

GrammarParser.TupleValueContext = TupleValueContext;

TupleValueContext.prototype.tuple = function() {
    return this.getTypedRuleContext(TupleContext,0);
};
TupleValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterTupleValue(this);
	}
};

TupleValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitTupleValue(this);
	}
};

TupleValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitTupleValue(this);
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
        this.state = 229;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
        switch(la_) {
        case 1:
            localctx = new BracketValueContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 213;
            this.match(GrammarParser.T__5);
            this.state = 214;
            this.value(0);
            this.state = 215;
            this.match(GrammarParser.T__7);
            break;

        case 2:
            localctx = new InstanceValueContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 217;
            this.match(GrammarParser.T__23);
            this.state = 218;
            this.value(16);
            break;

        case 3:
            localctx = new ClassValueContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 219;
            this.classState();
            break;

        case 4:
            localctx = new DictionaryValueContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 220;
            this.dictionary();
            break;

        case 5:
            localctx = new TupleValueContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 221;
            this.tuple();
            break;

        case 6:
            localctx = new ArrayValueContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 222;
            this.array();
            break;

        case 7:
            localctx = new StringRepValueContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 223;
            this.match(GrammarParser.T__29);
            this.state = 224;
            this.value(5);
            break;

        case 8:
            localctx = new IdenValueContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 225;
            this.iden();
            break;

        case 9:
            localctx = new FuncValueContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 226;
            this.func();
            break;

        case 10:
            localctx = new NumberValueContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 227;
            this.match(GrammarParser.NUM);
            break;

        case 11:
            localctx = new StringValueContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 228;
            this.match(GrammarParser.STRING);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 264;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,30,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 262;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new MultExprContext(this, new ValueContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_value);
                    this.state = 231;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 232;
                    _la = this._input.LA(1);
                    if(!(_la===GrammarParser.T__24 || _la===GrammarParser.T__25)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 233;
                    this.value(12);
                    break;

                case 2:
                    localctx = new AddExprContext(this, new ValueContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_value);
                    this.state = 234;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 235;
                    _la = this._input.LA(1);
                    if(!(_la===GrammarParser.T__26 || _la===GrammarParser.T__27)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 236;
                    this.value(11);
                    break;

                case 3:
                    localctx = new BlankConcatValueContext(this, new ValueContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_value);
                    this.state = 237;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 238;
                    this.match(GrammarParser.T__28);
                    this.state = 239;
                    this.value(10);
                    break;

                case 4:
                    localctx = new ApplyFuncValueContext(this, new ValueContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_value);
                    this.state = 240;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 241;
                    this.match(GrammarParser.T__5);
                    this.state = 247;
                    this._errHandler.sync(this);
                    var _alt = this._interp.adaptivePredict(this._input,27,this._ctx)
                    while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                        if(_alt===1) {
                            this.state = 242;
                            this.value(0);
                            this.state = 243;
                            this.match(GrammarParser.T__6); 
                        }
                        this.state = 249;
                        this._errHandler.sync(this);
                        _alt = this._interp.adaptivePredict(this._input,27,this._ctx);
                    }

                    this.state = 251;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GrammarParser.T__0) | (1 << GrammarParser.T__1) | (1 << GrammarParser.T__3) | (1 << GrammarParser.T__4) | (1 << GrammarParser.T__5) | (1 << GrammarParser.T__8) | (1 << GrammarParser.T__15) | (1 << GrammarParser.T__23) | (1 << GrammarParser.T__29))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (GrammarParser.WORD - 32)) | (1 << (GrammarParser.STRING - 32)) | (1 << (GrammarParser.NUM - 32)))) !== 0)) {
                        this.state = 250;
                        this.value(0);
                    }

                    this.state = 253;
                    this.match(GrammarParser.T__7);
                    break;

                case 5:
                    localctx = new ElementValueContext(this, new ValueContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_value);
                    this.state = 254;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 255;
                    this.match(GrammarParser.T__15);
                    this.state = 256;
                    this.value(0);
                    this.state = 257;
                    this.match(GrammarParser.T__16);
                    break;

                case 6:
                    localctx = new PropertyValueContext(this, new ValueContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_value);
                    this.state = 259;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 260;
                    this.match(GrammarParser.T__4);
                    this.state = 261;
                    this.iden();
                    break;

                } 
            }
            this.state = 266;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,30,this._ctx);
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
			return this.precpred(this._ctx, 11);
		case 1:
			return this.precpred(this._ctx, 10);
		case 2:
			return this.precpred(this._ctx, 9);
		case 3:
			return this.precpred(this._ctx, 8);
		case 4:
			return this.precpred(this._ctx, 7);
		case 5:
			return this.precpred(this._ctx, 6);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.GrammarParser = GrammarParser;
exports.IdenContext = IdenContext;
GrammarParser.IdenContext = IdenContext;
exports.ClassStateContext = ClassStateContext;
GrammarParser.ClassStateContext = ClassStateContext;
exports.ParameterContext = ParameterContext;
GrammarParser.ParameterContext = ParameterContext;
exports.ParametersContext = ParametersContext;
GrammarParser.ParametersContext = ParametersContext;
exports.FuncContext = FuncContext;
GrammarParser.FuncContext = FuncContext;
exports.LoopContext = LoopContext;
GrammarParser.LoopContext = LoopContext;
exports.IterContext = IterContext;
GrammarParser.IterContext = IterContext;
exports.CondContext = CondContext;
GrammarParser.CondContext = CondContext;
exports.TupleContext = TupleContext;
GrammarParser.TupleContext = TupleContext;
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
exports.ValueParameterContext = ValueParameterContext;
GrammarParser.ValueParameterContext = ValueParameterContext;
exports.TradFuncContext = TradFuncContext;
GrammarParser.TradFuncContext = TradFuncContext;
exports.ArrowFuncContext = ArrowFuncContext;
GrammarParser.ArrowFuncContext = ArrowFuncContext;
exports.ThreeFuncIterContext = ThreeFuncIterContext;
GrammarParser.ThreeFuncIterContext = ThreeFuncIterContext;
exports.InOfIterContext = InOfIterContext;
GrammarParser.InOfIterContext = InOfIterContext;
exports.IterPropertyContext = IterPropertyContext;
GrammarParser.IterPropertyContext = IterPropertyContext;
exports.IdenPropertyContext = IdenPropertyContext;
GrammarParser.IdenPropertyContext = IdenPropertyContext;
exports.TradPropertyContext = TradPropertyContext;
GrammarParser.TradPropertyContext = TradPropertyContext;
exports.ValueStatementContext = ValueStatementContext;
GrammarParser.ValueStatementContext = ValueStatementContext;
exports.AssignStatementContext = AssignStatementContext;
GrammarParser.AssignStatementContext = AssignStatementContext;
exports.LoopStatementContext = LoopStatementContext;
GrammarParser.LoopStatementContext = LoopStatementContext;
exports.IfStatementContext = IfStatementContext;
GrammarParser.IfStatementContext = IfStatementContext;
exports.ReturnStatementContext = ReturnStatementContext;
GrammarParser.ReturnStatementContext = ReturnStatementContext;
exports.DeclarStatementContext = DeclarStatementContext;
GrammarParser.DeclarStatementContext = DeclarStatementContext;
exports.GroupStatementContext = GroupStatementContext;
GrammarParser.GroupStatementContext = GroupStatementContext;
exports.PropertyValueContext = PropertyValueContext;
GrammarParser.PropertyValueContext = PropertyValueContext;
exports.ArrayValueContext = ArrayValueContext;
GrammarParser.ArrayValueContext = ArrayValueContext;
exports.BlankConcatValueContext = BlankConcatValueContext;
GrammarParser.BlankConcatValueContext = BlankConcatValueContext;
exports.InstanceValueContext = InstanceValueContext;
GrammarParser.InstanceValueContext = InstanceValueContext;
exports.MultExprContext = MultExprContext;
GrammarParser.MultExprContext = MultExprContext;
exports.ClassValueContext = ClassValueContext;
GrammarParser.ClassValueContext = ClassValueContext;
exports.StringValueContext = StringValueContext;
GrammarParser.StringValueContext = StringValueContext;
exports.ApplyFuncValueContext = ApplyFuncValueContext;
GrammarParser.ApplyFuncValueContext = ApplyFuncValueContext;
exports.AddExprContext = AddExprContext;
GrammarParser.AddExprContext = AddExprContext;
exports.IdenValueContext = IdenValueContext;
GrammarParser.IdenValueContext = IdenValueContext;
exports.FuncValueContext = FuncValueContext;
GrammarParser.FuncValueContext = FuncValueContext;
exports.DictionaryValueContext = DictionaryValueContext;
GrammarParser.DictionaryValueContext = DictionaryValueContext;
exports.BracketValueContext = BracketValueContext;
GrammarParser.BracketValueContext = BracketValueContext;
exports.StringRepValueContext = StringRepValueContext;
GrammarParser.StringRepValueContext = StringRepValueContext;
exports.NumberValueContext = NumberValueContext;
GrammarParser.NumberValueContext = NumberValueContext;
exports.ElementValueContext = ElementValueContext;
GrammarParser.ElementValueContext = ElementValueContext;
exports.TupleValueContext = TupleValueContext;
GrammarParser.TupleValueContext = TupleValueContext;
