// Generated from Grammar.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var GrammarListener = require('./GrammarListener').GrammarListener;
var GrammarVisitor = require('./GrammarVisitor').GrammarVisitor;

var grammarFileName = "Grammar.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003>\u0166\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0003\u0002\u0003",
    "\u0002\u0007\u0002)\n\u0002\f\u0002\u000e\u0002,\u000b\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0005\u00045\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0007\u0005;\n\u0005\f\u0005\u000e\u0005>\u000b\u0005\u0003\u0005\u0005",
    "\u0005A\n\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006K\n\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0005\u0006P\n\u0006\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0005\t_\n\t\u0003\t\u0003",
    "\t\u0005\tc\n\t\u0003\t\u0003\t\u0005\tg\n\t\u0003\t\u0003\t\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\ts\n",
    "\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0007\n\u0080\n\n\f\n\u000e\n\u0083\u000b\n\u0003",
    "\n\u0003\n\u0005\n\u0087\n\n\u0003\u000b\u0003\u000b\u0005\u000b\u008b",
    "\n\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0006\u000b\u0090\n\u000b",
    "\r\u000b\u000e\u000b\u0091\u0003\u000b\u0005\u000b\u0095\n\u000b\u0003",
    "\u000b\u0005\u000b\u0098\n\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003",
    "\f\u0005\f\u009e\n\f\u0003\f\u0003\f\u0003\f\u0007\f\u00a3\n\f\f\f\u000e",
    "\f\u00a6\u000b\f\u0003\f\u0005\f\u00a9\n\f\u0003\f\u0005\f\u00ac\n\f",
    "\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0007\r\u00b4\n\r\f",
    "\r\u000e\r\u00b7\u000b\r\u0003\r\u0005\r\u00ba\n\r\u0003\r\u0005\r\u00bd",
    "\n\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u00c8\n\u000e\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0007\u000f\u00ce\n\u000f",
    "\f\u000f\u000e\u000f\u00d1\u000b\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005",
    "\u0010\u00f3\n\u0010\u0003\u0011\u0005\u0011\u00f6\n\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0007\u0012\u0101\n\u0012\f\u0012\u000e\u0012",
    "\u0104\u000b\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0005\u0012\u010b\n\u0012\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0005\u0013\u0124\n\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0005\u0013\u0155\n\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0007\u0013\u0161\n",
    "\u0013\f\u0013\u000e\u0013\u0164\u000b\u0013\u0003\u0013\u0002\u0003",
    "$\u0014\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018",
    "\u001a\u001c\u001e \"$\u0002\u0006\u0003\u0002 !\u0003\u000289\u0003",
    "\u000223\u0003\u000245\u0002\u01a0\u0002*\u0003\u0002\u0002\u0002\u0004",
    "-\u0003\u0002\u0002\u0002\u00064\u0003\u0002\u0002\u0002\b6\u0003\u0002",
    "\u0002\u0002\nO\u0003\u0002\u0002\u0002\fQ\u0003\u0002\u0002\u0002\u000e",
    "W\u0003\u0002\u0002\u0002\u0010r\u0003\u0002\u0002\u0002\u0012t\u0003",
    "\u0002\u0002\u0002\u0014\u0088\u0003\u0002\u0002\u0002\u0016\u009b\u0003",
    "\u0002\u0002\u0002\u0018\u00af\u0003\u0002\u0002\u0002\u001a\u00c7\u0003",
    "\u0002\u0002\u0002\u001c\u00c9\u0003\u0002\u0002\u0002\u001e\u00f2\u0003",
    "\u0002\u0002\u0002 \u00f5\u0003\u0002\u0002\u0002\"\u010a\u0003\u0002",
    "\u0002\u0002$\u0123\u0003\u0002\u0002\u0002&)\u0005\"\u0012\u0002\'",
    ")\u0005$\u0013\u0002(&\u0003\u0002\u0002\u0002(\'\u0003\u0002\u0002",
    "\u0002),\u0003\u0002\u0002\u0002*(\u0003\u0002\u0002\u0002*+\u0003\u0002",
    "\u0002\u0002+\u0003\u0003\u0002\u0002\u0002,*\u0003\u0002\u0002\u0002",
    "-.\u0007<\u0002\u0002.\u0005\u0003\u0002\u0002\u0002/5\u0005\u0004\u0003",
    "\u000201\u0007\u0003\u0002\u000215\u0005\u0004\u0003\u000223\u0007\u0004",
    "\u0002\u000235\u0005\u0004\u0003\u00024/\u0003\u0002\u0002\u000240\u0003",
    "\u0002\u0002\u000242\u0003\u0002\u0002\u00025\u0007\u0003\u0002\u0002",
    "\u00026<\u0007\u0005\u0002\u000278\u0005\u0006\u0004\u000289\u0007\u0006",
    "\u0002\u00029;\u0003\u0002\u0002\u0002:7\u0003\u0002\u0002\u0002;>\u0003",
    "\u0002\u0002\u0002<:\u0003\u0002\u0002\u0002<=\u0003\u0002\u0002\u0002",
    "=@\u0003\u0002\u0002\u0002><\u0003\u0002\u0002\u0002?A\u0005\u0006\u0004",
    "\u0002@?\u0003\u0002\u0002\u0002@A\u0003\u0002\u0002\u0002AB\u0003\u0002",
    "\u0002\u0002BC\u0007\u0007\u0002\u0002C\t\u0003\u0002\u0002\u0002DE",
    "\u0007\b\u0002\u0002EF\u0005\b\u0005\u0002FG\u0005\"\u0012\u0002GP\u0003",
    "\u0002\u0002\u0002HK\u0005\b\u0005\u0002IK\u0005\u0006\u0004\u0002J",
    "H\u0003\u0002\u0002\u0002JI\u0003\u0002\u0002\u0002KL\u0003\u0002\u0002",
    "\u0002LM\u0007\t\u0002\u0002MN\u0005\"\u0012\u0002NP\u0003\u0002\u0002",
    "\u0002OD\u0003\u0002\u0002\u0002OJ\u0003\u0002\u0002\u0002P\u000b\u0003",
    "\u0002\u0002\u0002QR\u0007\n\u0002\u0002RS\u0007\u0005\u0002\u0002S",
    "T\u0005\u0010\t\u0002TU\u0007\u0007\u0002\u0002UV\u0005\"\u0012\u0002",
    "V\r\u0003\u0002\u0002\u0002WX\u0007\u000b\u0002\u0002XY\u0007\u0005",
    "\u0002\u0002YZ\u0005$\u0013\u0002Z[\u0007\u0007\u0002\u0002[\\\u0005",
    "\"\u0012\u0002\\\u000f\u0003\u0002\u0002\u0002]_\u0005\"\u0012\u0002",
    "^]\u0003\u0002\u0002\u0002^_\u0003\u0002\u0002\u0002_`\u0003\u0002\u0002",
    "\u0002`b\u0007\f\u0002\u0002ac\u0005$\u0013\u0002ba\u0003\u0002\u0002",
    "\u0002bc\u0003\u0002\u0002\u0002cd\u0003\u0002\u0002\u0002df\u0007\f",
    "\u0002\u0002eg\u0005\"\u0012\u0002fe\u0003\u0002\u0002\u0002fg\u0003",
    "\u0002\u0002\u0002gs\u0003\u0002\u0002\u0002hi\u0005 \u0011\u0002ij",
    "\u0005\u0004\u0003\u0002jk\u0007\r\u0002\u0002kl\u0005$\u0013\u0002",
    "ls\u0003\u0002\u0002\u0002mn\u0005 \u0011\u0002no\u0005\u0004\u0003",
    "\u0002op\u0007\u000e\u0002\u0002pq\u0005$\u0013\u0002qs\u0003\u0002",
    "\u0002\u0002r^\u0003\u0002\u0002\u0002rh\u0003\u0002\u0002\u0002rm\u0003",
    "\u0002\u0002\u0002s\u0011\u0003\u0002\u0002\u0002tu\u0007\u000f\u0002",
    "\u0002uv\u0007\u0005\u0002\u0002vw\u0005$\u0013\u0002wx\u0007\u0007",
    "\u0002\u0002x\u0081\u0005\"\u0012\u0002yz\u0007\u0010\u0002\u0002z{",
    "\u0007\u0005\u0002\u0002{|\u0005$\u0013\u0002|}\u0007\u0007\u0002\u0002",
    "}~\u0005\"\u0012\u0002~\u0080\u0003\u0002\u0002\u0002\u007fy\u0003\u0002",
    "\u0002\u0002\u0080\u0083\u0003\u0002\u0002\u0002\u0081\u007f\u0003\u0002",
    "\u0002\u0002\u0081\u0082\u0003\u0002\u0002\u0002\u0082\u0086\u0003\u0002",
    "\u0002\u0002\u0083\u0081\u0003\u0002\u0002\u0002\u0084\u0085\u0007\u0011",
    "\u0002\u0002\u0085\u0087\u0005\"\u0012\u0002\u0086\u0084\u0003\u0002",
    "\u0002\u0002\u0086\u0087\u0003\u0002\u0002\u0002\u0087\u0013\u0003\u0002",
    "\u0002\u0002\u0088\u008f\u0007\u0005\u0002\u0002\u0089\u008b\u0007\u0003",
    "\u0002\u0002\u008a\u0089\u0003\u0002\u0002\u0002\u008a\u008b\u0003\u0002",
    "\u0002\u0002\u008b\u008c\u0003\u0002\u0002\u0002\u008c\u008d\u0005$",
    "\u0013\u0002\u008d\u008e\u0007\u0006\u0002\u0002\u008e\u0090\u0003\u0002",
    "\u0002\u0002\u008f\u008a\u0003\u0002\u0002\u0002\u0090\u0091\u0003\u0002",
    "\u0002\u0002\u0091\u008f\u0003\u0002\u0002\u0002\u0091\u0092\u0003\u0002",
    "\u0002\u0002\u0092\u0097\u0003\u0002\u0002\u0002\u0093\u0095\u0007\u0003",
    "\u0002\u0002\u0094\u0093\u0003\u0002\u0002\u0002\u0094\u0095\u0003\u0002",
    "\u0002\u0002\u0095\u0096\u0003\u0002\u0002\u0002\u0096\u0098\u0005$",
    "\u0013\u0002\u0097\u0094\u0003\u0002\u0002\u0002\u0097\u0098\u0003\u0002",
    "\u0002\u0002\u0098\u0099\u0003\u0002\u0002\u0002\u0099\u009a\u0007\u0007",
    "\u0002\u0002\u009a\u0015\u0003\u0002\u0002\u0002\u009b\u00a4\u0007\u0012",
    "\u0002\u0002\u009c\u009e\u0007\u0003\u0002\u0002\u009d\u009c\u0003\u0002",
    "\u0002\u0002\u009d\u009e\u0003\u0002\u0002\u0002\u009e\u009f\u0003\u0002",
    "\u0002\u0002\u009f\u00a0\u0005$\u0013\u0002\u00a0\u00a1\u0007\u0006",
    "\u0002\u0002\u00a1\u00a3\u0003\u0002\u0002\u0002\u00a2\u009d\u0003\u0002",
    "\u0002\u0002\u00a3\u00a6\u0003\u0002\u0002\u0002\u00a4\u00a2\u0003\u0002",
    "\u0002\u0002\u00a4\u00a5\u0003\u0002\u0002\u0002\u00a5\u00ab\u0003\u0002",
    "\u0002\u0002\u00a6\u00a4\u0003\u0002\u0002\u0002\u00a7\u00a9\u0007\u0003",
    "\u0002\u0002\u00a8\u00a7\u0003\u0002\u0002\u0002\u00a8\u00a9\u0003\u0002",
    "\u0002\u0002\u00a9\u00aa\u0003\u0002\u0002\u0002\u00aa\u00ac\u0005$",
    "\u0013\u0002\u00ab\u00a8\u0003\u0002\u0002\u0002\u00ab\u00ac\u0003\u0002",
    "\u0002\u0002\u00ac\u00ad\u0003\u0002\u0002\u0002\u00ad\u00ae\u0007\u0013",
    "\u0002\u0002\u00ae\u0017\u0003\u0002\u0002\u0002\u00af\u00b5\u0007\u0014",
    "\u0002\u0002\u00b0\u00b1\u0005\u001a\u000e\u0002\u00b1\u00b2\u0007\u0006",
    "\u0002\u0002\u00b2\u00b4\u0003\u0002\u0002\u0002\u00b3\u00b0\u0003\u0002",
    "\u0002\u0002\u00b4\u00b7\u0003\u0002\u0002\u0002\u00b5\u00b3\u0003\u0002",
    "\u0002\u0002\u00b5\u00b6\u0003\u0002\u0002\u0002\u00b6\u00bc\u0003\u0002",
    "\u0002\u0002\u00b7\u00b5\u0003\u0002\u0002\u0002\u00b8\u00ba\u0007\u0003",
    "\u0002\u0002\u00b9\u00b8\u0003\u0002\u0002\u0002\u00b9\u00ba\u0003\u0002",
    "\u0002\u0002\u00ba\u00bb\u0003\u0002\u0002\u0002\u00bb\u00bd\u0005\u001a",
    "\u000e\u0002\u00bc\u00b9\u0003\u0002\u0002\u0002\u00bc\u00bd\u0003\u0002",
    "\u0002\u0002\u00bd\u00be\u0003\u0002\u0002\u0002\u00be\u00bf\u0007\u0015",
    "\u0002\u0002\u00bf\u0019\u0003\u0002\u0002\u0002\u00c0\u00c1\u0005\u0004",
    "\u0003\u0002\u00c1\u00c2\u0007\u0016\u0002\u0002\u00c2\u00c3\u0005$",
    "\u0013\u0002\u00c3\u00c8\u0003\u0002\u0002\u0002\u00c4\u00c8\u0005\u0004",
    "\u0003\u0002\u00c5\u00c6\u0007\u0003\u0002\u0002\u00c6\u00c8\u0005$",
    "\u0013\u0002\u00c7\u00c0\u0003\u0002\u0002\u0002\u00c7\u00c4\u0003\u0002",
    "\u0002\u0002\u00c7\u00c5\u0003\u0002\u0002\u0002\u00c8\u001b\u0003\u0002",
    "\u0002\u0002\u00c9\u00cf\u0005 \u0011\u0002\u00ca\u00cb\u0005\u001e",
    "\u0010\u0002\u00cb\u00cc\u0007\u0006\u0002\u0002\u00cc\u00ce\u0003\u0002",
    "\u0002\u0002\u00cd\u00ca\u0003\u0002\u0002\u0002\u00ce\u00d1\u0003\u0002",
    "\u0002\u0002\u00cf\u00cd\u0003\u0002\u0002\u0002\u00cf\u00d0\u0003\u0002",
    "\u0002\u0002\u00d0\u00d2\u0003\u0002\u0002\u0002\u00d1\u00cf\u0003\u0002",
    "\u0002\u0002\u00d2\u00d3\u0005\u001e\u0010\u0002\u00d3\u001d\u0003\u0002",
    "\u0002\u0002\u00d4\u00d5\u0005\u0004\u0003\u0002\u00d5\u00d6\u0007\u0017",
    "\u0002\u0002\u00d6\u00d7\u0005$\u0013\u0002\u00d7\u00f3\u0003\u0002",
    "\u0002\u0002\u00d8\u00d9\u0005\u0004\u0003\u0002\u00d9\u00da\u0007\u0018",
    "\u0002\u0002\u00da\u00db\u0005$\u0013\u0002\u00db\u00f3\u0003\u0002",
    "\u0002\u0002\u00dc\u00dd\u0005\u0004\u0003\u0002\u00dd\u00de\u0007\u0019",
    "\u0002\u0002\u00de\u00df\u0005$\u0013\u0002\u00df\u00f3\u0003\u0002",
    "\u0002\u0002\u00e0\u00e1\u0005\u0004\u0003\u0002\u00e1\u00e2\u0007\u001a",
    "\u0002\u0002\u00e2\u00e3\u0005$\u0013\u0002\u00e3\u00f3\u0003\u0002",
    "\u0002\u0002\u00e4\u00e5\u0005\u0004\u0003\u0002\u00e5\u00e6\u0007\u001b",
    "\u0002\u0002\u00e6\u00e7\u0005$\u0013\u0002\u00e7\u00f3\u0003\u0002",
    "\u0002\u0002\u00e8\u00e9\u0005\u0004\u0003\u0002\u00e9\u00ea\u0007\u001c",
    "\u0002\u0002\u00ea\u00eb\u0005$\u0013\u0002\u00eb\u00f3\u0003\u0002",
    "\u0002\u0002\u00ec\u00ed\u0005\u0004\u0003\u0002\u00ed\u00ee\u0007\u001d",
    "\u0002\u0002\u00ee\u00f3\u0003\u0002\u0002\u0002\u00ef\u00f0\u0005\u0004",
    "\u0003\u0002\u00f0\u00f1\u0007\u001e\u0002\u0002\u00f1\u00f3\u0003\u0002",
    "\u0002\u0002\u00f2\u00d4\u0003\u0002\u0002\u0002\u00f2\u00d8\u0003\u0002",
    "\u0002\u0002\u00f2\u00dc\u0003\u0002\u0002\u0002\u00f2\u00e0\u0003\u0002",
    "\u0002\u0002\u00f2\u00e4\u0003\u0002\u0002\u0002\u00f2\u00e8\u0003\u0002",
    "\u0002\u0002\u00f2\u00ec\u0003\u0002\u0002\u0002\u00f2\u00ef\u0003\u0002",
    "\u0002\u0002\u00f3\u001f\u0003\u0002\u0002\u0002\u00f4\u00f6\u0007\u001f",
    "\u0002\u0002\u00f5\u00f4\u0003\u0002\u0002\u0002\u00f5\u00f6\u0003\u0002",
    "\u0002\u0002\u00f6\u00f7\u0003\u0002\u0002\u0002\u00f7\u00f8\t\u0002",
    "\u0002\u0002\u00f8!\u0003\u0002\u0002\u0002\u00f9\u010b\u0005\f\u0007",
    "\u0002\u00fa\u010b\u0005\u000e\b\u0002\u00fb\u010b\u0005\u0012\n\u0002",
    "\u00fc\u010b\u0005\u001e\u0010\u0002\u00fd\u010b\u0005\u001c\u000f\u0002",
    "\u00fe\u0102\u0007\u0014\u0002\u0002\u00ff\u0101\u0005\"\u0012\u0002",
    "\u0100\u00ff\u0003\u0002\u0002\u0002\u0101\u0104\u0003\u0002\u0002\u0002",
    "\u0102\u0100\u0003\u0002\u0002\u0002\u0102\u0103\u0003\u0002\u0002\u0002",
    "\u0103\u0105\u0003\u0002\u0002\u0002\u0104\u0102\u0003\u0002\u0002\u0002",
    "\u0105\u010b\u0007\u0015\u0002\u0002\u0106\u0107\u0007\"\u0002\u0002",
    "\u0107\u010b\u0005$\u0013\u0002\u0108\u010b\u0005$\u0013\u0002\u0109",
    "\u010b\u0007;\u0002\u0002\u010a\u00f9\u0003\u0002\u0002\u0002\u010a",
    "\u00fa\u0003\u0002\u0002\u0002\u010a\u00fb\u0003\u0002\u0002\u0002\u010a",
    "\u00fc\u0003\u0002\u0002\u0002\u010a\u00fd\u0003\u0002\u0002\u0002\u010a",
    "\u00fe\u0003\u0002\u0002\u0002\u010a\u0106\u0003\u0002\u0002\u0002\u010a",
    "\u0108\u0003\u0002\u0002\u0002\u010a\u0109\u0003\u0002\u0002\u0002\u010b",
    "#\u0003\u0002\u0002\u0002\u010c\u010d\b\u0013\u0001\u0002\u010d\u010e",
    "\u0007\u0005\u0002\u0002\u010e\u010f\u0005$\u0013\u0002\u010f\u0110",
    "\u0007\u0007\u0002\u0002\u0110\u0124\u0003\u0002\u0002\u0002\u0111\u0112",
    "\u0007#\u0002\u0002\u0112\u0124\u0005$\u0013 \u0113\u0114\u0007$\u0002",
    "\u0002\u0114\u0124\u0005$\u0013\u001f\u0115\u0124\u0005\u0018\r\u0002",
    "\u0116\u0124\u0005\u0014\u000b\u0002\u0117\u0124\u0005\u0016\f\u0002",
    "\u0118\u0119\u00070\u0002\u0002\u0119\u0124\u0005$\u0013\u0011\u011a",
    "\u011b\u00075\u0002\u0002\u011b\u0124\u0005$\u0013\f\u011c\u011d\u0007",
    "7\u0002\u0002\u011d\u0124\u0005$\u0013\b\u011e\u0124\u0005\u0004\u0003",
    "\u0002\u011f\u0124\u0005\n\u0006\u0002\u0120\u0124\u0007>\u0002\u0002",
    "\u0121\u0124\u0007=\u0002\u0002\u0122\u0124\t\u0003\u0002\u0002\u0123",
    "\u010c\u0003\u0002\u0002\u0002\u0123\u0111\u0003\u0002\u0002\u0002\u0123",
    "\u0113\u0003\u0002\u0002\u0002\u0123\u0115\u0003\u0002\u0002\u0002\u0123",
    "\u0116\u0003\u0002\u0002\u0002\u0123\u0117\u0003\u0002\u0002\u0002\u0123",
    "\u0118\u0003\u0002\u0002\u0002\u0123\u011a\u0003\u0002\u0002\u0002\u0123",
    "\u011c\u0003\u0002\u0002\u0002\u0123\u011e\u0003\u0002\u0002\u0002\u0123",
    "\u011f\u0003\u0002\u0002\u0002\u0123\u0120\u0003\u0002\u0002\u0002\u0123",
    "\u0121\u0003\u0002\u0002\u0002\u0123\u0122\u0003\u0002\u0002\u0002\u0124",
    "\u0162\u0003\u0002\u0002\u0002\u0125\u0126\f\u001a\u0002\u0002\u0126",
    "\u0127\u0007\'\u0002\u0002\u0127\u0128\u0005$\u0013\u0002\u0128\u0129",
    "\u0007\u0016\u0002\u0002\u0129\u012a\u0005$\u0013\u001b\u012a\u0161",
    "\u0003\u0002\u0002\u0002\u012b\u012c\f\u0019\u0002\u0002\u012c\u012d",
    "\u0007(\u0002\u0002\u012d\u0161\u0005$\u0013\u001a\u012e\u012f\f\u0018",
    "\u0002\u0002\u012f\u0130\u0007)\u0002\u0002\u0130\u0161\u0005$\u0013",
    "\u0019\u0131\u0132\f\u0017\u0002\u0002\u0132\u0133\u0007*\u0002\u0002",
    "\u0133\u0161\u0005$\u0013\u0018\u0134\u0135\f\u0016\u0002\u0002\u0135",
    "\u0136\u0007+\u0002\u0002\u0136\u0161\u0005$\u0013\u0017\u0137\u0138",
    "\f\u0015\u0002\u0002\u0138\u0139\u0007,\u0002\u0002\u0139\u0161\u0005",
    "$\u0013\u0016\u013a\u013b\f\u0014\u0002\u0002\u013b\u013c\u0007-\u0002",
    "\u0002\u013c\u0161\u0005$\u0013\u0015\u013d\u013e\f\u0013\u0002\u0002",
    "\u013e\u013f\u0007.\u0002\u0002\u013f\u0161\u0005$\u0013\u0014\u0140",
    "\u0141\f\u0012\u0002\u0002\u0141\u0142\u0007/\u0002\u0002\u0142\u0161",
    "\u0005$\u0013\u0013\u0143\u0144\f\u0010\u0002\u0002\u0144\u0145\u0007",
    "1\u0002\u0002\u0145\u0161\u0005$\u0013\u0011\u0146\u0147\f\u000f\u0002",
    "\u0002\u0147\u0148\t\u0004\u0002\u0002\u0148\u0161\u0005$\u0013\u0010",
    "\u0149\u014a\f\u000e\u0002\u0002\u014a\u014b\t\u0005\u0002\u0002\u014b",
    "\u0161\u0005$\u0013\u000f\u014c\u014d\f\r\u0002\u0002\u014d\u014e\u0007",
    "6\u0002\u0002\u014e\u0161\u0005$\u0013\u000e\u014f\u0150\f\u001b\u0002",
    "\u0002\u0150\u0151\u0007%\u0002\u0002\u0151\u0154\u0005$\u0013\u0002",
    "\u0152\u0153\u0007&\u0002\u0002\u0153\u0155\u0005$\u0013\u0002\u0154",
    "\u0152\u0003\u0002\u0002\u0002\u0154\u0155\u0003\u0002\u0002\u0002\u0155",
    "\u0161\u0003\u0002\u0002\u0002\u0156\u0157\f\u000b\u0002\u0002\u0157",
    "\u0161\u0005\u0014\u000b\u0002\u0158\u0159\f\n\u0002\u0002\u0159\u015a",
    "\u0007\u0012\u0002\u0002\u015a\u015b\u0005$\u0013\u0002\u015b\u015c",
    "\u0007\u0013\u0002\u0002\u015c\u0161\u0003\u0002\u0002\u0002\u015d\u015e",
    "\f\t\u0002\u0002\u015e\u015f\u0007\u0004\u0002\u0002\u015f\u0161\u0005",
    "\u0004\u0003\u0002\u0160\u0125\u0003\u0002\u0002\u0002\u0160\u012b\u0003",
    "\u0002\u0002\u0002\u0160\u012e\u0003\u0002\u0002\u0002\u0160\u0131\u0003",
    "\u0002\u0002\u0002\u0160\u0134\u0003\u0002\u0002\u0002\u0160\u0137\u0003",
    "\u0002\u0002\u0002\u0160\u013a\u0003\u0002\u0002\u0002\u0160\u013d\u0003",
    "\u0002\u0002\u0002\u0160\u0140\u0003\u0002\u0002\u0002\u0160\u0143\u0003",
    "\u0002\u0002\u0002\u0160\u0146\u0003\u0002\u0002\u0002\u0160\u0149\u0003",
    "\u0002\u0002\u0002\u0160\u014c\u0003\u0002\u0002\u0002\u0160\u014f\u0003",
    "\u0002\u0002\u0002\u0160\u0156\u0003\u0002\u0002\u0002\u0160\u0158\u0003",
    "\u0002\u0002\u0002\u0160\u015d\u0003\u0002\u0002\u0002\u0161\u0164\u0003",
    "\u0002\u0002\u0002\u0162\u0160\u0003\u0002\u0002\u0002\u0162\u0163\u0003",
    "\u0002\u0002\u0002\u0163%\u0003\u0002\u0002\u0002\u0164\u0162\u0003",
    "\u0002\u0002\u0002$(*4<@JO^bfr\u0081\u0086\u008a\u0091\u0094\u0097\u009d",
    "\u00a4\u00a8\u00ab\u00b5\u00b9\u00bc\u00c7\u00cf\u00f2\u00f5\u0102\u010a",
    "\u0123\u0154\u0160\u0162"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'...'", "'.'", "'('", "','", "')'", "'void'", 
                     "'=>'", "'for'", "'while'", "';'", "'in'", "'of'", 
                     "'if'", "'elif'", "'else'", "'['", "']'", "'{'", "'}'", 
                     "':'", "'='", "'*='", "'/='", "'+='", "'-='", "'%='", 
                     "'++'", "'--'", "'stat'", "'pub'", "'var'", "'return'", 
                     "'new'", "'class'", "'to'", "'by'", "'?'", "'!='", 
                     "'=='", "'>'", "'>='", "'<'", "'<='", "'&&'", "'||'", 
                     "'!'", "'%'", "'*'", "'/'", "'+'", "'-'", "'_'", "'#'", 
                     "'true'", "'false'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      "TRUE", "FALSE", "WS", "COMMENT", "WORD", "STRING", 
                      "NUM" ];

var ruleNames =  [ "all", "iden", "parameter", "parameters", "func", "forloop", 
                   "whileloop", "iter", "cond", "tuple", "array", "dictionary", 
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
GrammarParser.TRUE = 54;
GrammarParser.FALSE = 55;
GrammarParser.WS = 56;
GrammarParser.COMMENT = 57;
GrammarParser.WORD = 58;
GrammarParser.STRING = 59;
GrammarParser.NUM = 60;

GrammarParser.RULE_all = 0;
GrammarParser.RULE_iden = 1;
GrammarParser.RULE_parameter = 2;
GrammarParser.RULE_parameters = 3;
GrammarParser.RULE_func = 4;
GrammarParser.RULE_forloop = 5;
GrammarParser.RULE_whileloop = 6;
GrammarParser.RULE_iter = 7;
GrammarParser.RULE_cond = 8;
GrammarParser.RULE_tuple = 9;
GrammarParser.RULE_array = 10;
GrammarParser.RULE_dictionary = 11;
GrammarParser.RULE_property = 12;
GrammarParser.RULE_declar = 13;
GrammarParser.RULE_assign = 14;
GrammarParser.RULE_designator = 15;
GrammarParser.RULE_statement = 16;
GrammarParser.RULE_value = 17;


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
        this.state = 40;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GrammarParser.T__0) | (1 << GrammarParser.T__1) | (1 << GrammarParser.T__2) | (1 << GrammarParser.T__5) | (1 << GrammarParser.T__7) | (1 << GrammarParser.T__8) | (1 << GrammarParser.T__12) | (1 << GrammarParser.T__15) | (1 << GrammarParser.T__17) | (1 << GrammarParser.T__28) | (1 << GrammarParser.T__29) | (1 << GrammarParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (GrammarParser.T__31 - 32)) | (1 << (GrammarParser.T__32 - 32)) | (1 << (GrammarParser.T__33 - 32)) | (1 << (GrammarParser.T__45 - 32)) | (1 << (GrammarParser.T__50 - 32)) | (1 << (GrammarParser.T__52 - 32)) | (1 << (GrammarParser.TRUE - 32)) | (1 << (GrammarParser.FALSE - 32)) | (1 << (GrammarParser.COMMENT - 32)) | (1 << (GrammarParser.WORD - 32)) | (1 << (GrammarParser.STRING - 32)) | (1 << (GrammarParser.NUM - 32)))) !== 0)) {
            this.state = 38;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
            switch(la_) {
            case 1:
                this.state = 36;
                this.statement();
                break;

            case 2:
                this.state = 37;
                this.value(0);
                break;

            }
            this.state = 42;
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
        this.state = 43;
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
        this.state = 50;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case GrammarParser.WORD:
            localctx = new IdenParameterContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 45;
            this.iden();
            break;
        case GrammarParser.T__0:
            localctx = new SpreadParameterContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 46;
            this.match(GrammarParser.T__0);
            this.state = 47;
            this.iden();
            break;
        case GrammarParser.T__1:
            localctx = new PropertyParameterContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 48;
            this.match(GrammarParser.T__1);
            this.state = 49;
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
        this.state = 52;
        this.match(GrammarParser.T__2);
        this.state = 58;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 53;
                this.parameter();
                this.state = 54;
                this.match(GrammarParser.T__3); 
            }
            this.state = 60;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
        }

        this.state = 62;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===GrammarParser.T__0 || _la===GrammarParser.T__1 || _la===GrammarParser.WORD) {
            this.state = 61;
            this.parameter();
        }

        this.state = 64;
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
        this.state = 77;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case GrammarParser.T__5:
            localctx = new TradFuncContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 66;
            this.match(GrammarParser.T__5);
            this.state = 67;
            this.parameters();
            this.state = 68;
            this.statement();
            break;
        case GrammarParser.T__0:
        case GrammarParser.T__1:
        case GrammarParser.T__2:
        case GrammarParser.WORD:
            localctx = new ArrowFuncContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 72;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case GrammarParser.T__2:
                this.state = 70;
                this.parameters();
                break;
            case GrammarParser.T__0:
            case GrammarParser.T__1:
            case GrammarParser.WORD:
                this.state = 71;
                this.parameter();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 74;
            this.match(GrammarParser.T__6);
            this.state = 75;
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
        this.state = 79;
        this.match(GrammarParser.T__7);
        this.state = 80;
        this.match(GrammarParser.T__2);
        this.state = 81;
        this.iter();
        this.state = 82;
        this.match(GrammarParser.T__4);
        this.state = 83;
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
        this.state = 85;
        this.match(GrammarParser.T__8);
        this.state = 86;
        this.match(GrammarParser.T__2);
        this.state = 87;
        this.value(0);
        this.state = 88;
        this.match(GrammarParser.T__4);
        this.state = 89;
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
        this.state = 112;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
        switch(la_) {
        case 1:
            localctx = new ThreeFuncIterContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 92;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GrammarParser.T__0) | (1 << GrammarParser.T__1) | (1 << GrammarParser.T__2) | (1 << GrammarParser.T__5) | (1 << GrammarParser.T__7) | (1 << GrammarParser.T__8) | (1 << GrammarParser.T__12) | (1 << GrammarParser.T__15) | (1 << GrammarParser.T__17) | (1 << GrammarParser.T__28) | (1 << GrammarParser.T__29) | (1 << GrammarParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (GrammarParser.T__31 - 32)) | (1 << (GrammarParser.T__32 - 32)) | (1 << (GrammarParser.T__33 - 32)) | (1 << (GrammarParser.T__45 - 32)) | (1 << (GrammarParser.T__50 - 32)) | (1 << (GrammarParser.T__52 - 32)) | (1 << (GrammarParser.TRUE - 32)) | (1 << (GrammarParser.FALSE - 32)) | (1 << (GrammarParser.COMMENT - 32)) | (1 << (GrammarParser.WORD - 32)) | (1 << (GrammarParser.STRING - 32)) | (1 << (GrammarParser.NUM - 32)))) !== 0)) {
                this.state = 91;
                this.statement();
            }

            this.state = 94;
            this.match(GrammarParser.T__9);
            this.state = 96;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GrammarParser.T__0) | (1 << GrammarParser.T__1) | (1 << GrammarParser.T__2) | (1 << GrammarParser.T__5) | (1 << GrammarParser.T__15) | (1 << GrammarParser.T__17))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (GrammarParser.T__32 - 33)) | (1 << (GrammarParser.T__33 - 33)) | (1 << (GrammarParser.T__45 - 33)) | (1 << (GrammarParser.T__50 - 33)) | (1 << (GrammarParser.T__52 - 33)) | (1 << (GrammarParser.TRUE - 33)) | (1 << (GrammarParser.FALSE - 33)) | (1 << (GrammarParser.WORD - 33)) | (1 << (GrammarParser.STRING - 33)) | (1 << (GrammarParser.NUM - 33)))) !== 0)) {
                this.state = 95;
                this.value(0);
            }

            this.state = 98;
            this.match(GrammarParser.T__9);
            this.state = 100;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GrammarParser.T__0) | (1 << GrammarParser.T__1) | (1 << GrammarParser.T__2) | (1 << GrammarParser.T__5) | (1 << GrammarParser.T__7) | (1 << GrammarParser.T__8) | (1 << GrammarParser.T__12) | (1 << GrammarParser.T__15) | (1 << GrammarParser.T__17) | (1 << GrammarParser.T__28) | (1 << GrammarParser.T__29) | (1 << GrammarParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (GrammarParser.T__31 - 32)) | (1 << (GrammarParser.T__32 - 32)) | (1 << (GrammarParser.T__33 - 32)) | (1 << (GrammarParser.T__45 - 32)) | (1 << (GrammarParser.T__50 - 32)) | (1 << (GrammarParser.T__52 - 32)) | (1 << (GrammarParser.TRUE - 32)) | (1 << (GrammarParser.FALSE - 32)) | (1 << (GrammarParser.COMMENT - 32)) | (1 << (GrammarParser.WORD - 32)) | (1 << (GrammarParser.STRING - 32)) | (1 << (GrammarParser.NUM - 32)))) !== 0)) {
                this.state = 99;
                this.statement();
            }

            break;

        case 2:
            localctx = new InIterContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 102;
            this.designator();
            this.state = 103;
            this.iden();
            this.state = 104;
            this.match(GrammarParser.T__10);
            this.state = 105;
            this.value(0);
            break;

        case 3:
            localctx = new OfIterContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 107;
            this.designator();
            this.state = 108;
            this.iden();
            this.state = 109;
            this.match(GrammarParser.T__11);
            this.state = 110;
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
        this.state = 114;
        this.match(GrammarParser.T__12);
        this.state = 115;
        this.match(GrammarParser.T__2);
        this.state = 116;
        this.value(0);
        this.state = 117;
        this.match(GrammarParser.T__4);
        this.state = 118;
        this.statement();
        this.state = 127;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 119;
                this.match(GrammarParser.T__13);
                this.state = 120;
                this.match(GrammarParser.T__2);
                this.state = 121;
                this.value(0);
                this.state = 122;
                this.match(GrammarParser.T__4);
                this.state = 123;
                this.statement(); 
            }
            this.state = 129;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
        }

        this.state = 132;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        if(la_===1) {
            this.state = 130;
            this.match(GrammarParser.T__14);
            this.state = 131;
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
    this.enterRule(localctx, 18, GrammarParser.RULE_tuple);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 134;
        this.match(GrammarParser.T__2);
        this.state = 141; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 136;
        		this._errHandler.sync(this);
        		var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
        		if(la_===1) {
        		    this.state = 135;
        		    this.match(GrammarParser.T__0);

        		}
        		this.state = 138;
        		this.value(0);
        		this.state = 139;
        		this.match(GrammarParser.T__3);
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 143; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,14, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
        this.state = 149;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GrammarParser.T__0) | (1 << GrammarParser.T__1) | (1 << GrammarParser.T__2) | (1 << GrammarParser.T__5) | (1 << GrammarParser.T__15) | (1 << GrammarParser.T__17))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (GrammarParser.T__32 - 33)) | (1 << (GrammarParser.T__33 - 33)) | (1 << (GrammarParser.T__45 - 33)) | (1 << (GrammarParser.T__50 - 33)) | (1 << (GrammarParser.T__52 - 33)) | (1 << (GrammarParser.TRUE - 33)) | (1 << (GrammarParser.FALSE - 33)) | (1 << (GrammarParser.WORD - 33)) | (1 << (GrammarParser.STRING - 33)) | (1 << (GrammarParser.NUM - 33)))) !== 0)) {
            this.state = 146;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
            if(la_===1) {
                this.state = 145;
                this.match(GrammarParser.T__0);

            }
            this.state = 148;
            this.value(0);
        }

        this.state = 151;
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
    this.enterRule(localctx, 20, GrammarParser.RULE_array);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 153;
        this.match(GrammarParser.T__15);
        this.state = 162;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 155;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
                if(la_===1) {
                    this.state = 154;
                    this.match(GrammarParser.T__0);

                }
                this.state = 157;
                this.value(0);
                this.state = 158;
                this.match(GrammarParser.T__3); 
            }
            this.state = 164;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,18,this._ctx);
        }

        this.state = 169;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GrammarParser.T__0) | (1 << GrammarParser.T__1) | (1 << GrammarParser.T__2) | (1 << GrammarParser.T__5) | (1 << GrammarParser.T__15) | (1 << GrammarParser.T__17))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (GrammarParser.T__32 - 33)) | (1 << (GrammarParser.T__33 - 33)) | (1 << (GrammarParser.T__45 - 33)) | (1 << (GrammarParser.T__50 - 33)) | (1 << (GrammarParser.T__52 - 33)) | (1 << (GrammarParser.TRUE - 33)) | (1 << (GrammarParser.FALSE - 33)) | (1 << (GrammarParser.WORD - 33)) | (1 << (GrammarParser.STRING - 33)) | (1 << (GrammarParser.NUM - 33)))) !== 0)) {
            this.state = 166;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
            if(la_===1) {
                this.state = 165;
                this.match(GrammarParser.T__0);

            }
            this.state = 168;
            this.value(0);
        }

        this.state = 171;
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
    this.enterRule(localctx, 22, GrammarParser.RULE_dictionary);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 173;
        this.match(GrammarParser.T__17);
        this.state = 179;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 174;
                this.property();
                this.state = 175;
                this.match(GrammarParser.T__3); 
            }
            this.state = 181;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,21,this._ctx);
        }

        this.state = 186;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===GrammarParser.T__0 || _la===GrammarParser.WORD) {
            this.state = 183;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
            if(la_===1) {
                this.state = 182;
                this.match(GrammarParser.T__0);

            }
            this.state = 185;
            this.property();
        }

        this.state = 188;
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
    this.enterRule(localctx, 24, GrammarParser.RULE_property);
    try {
        this.state = 197;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
        switch(la_) {
        case 1:
            localctx = new TradPropertyContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 190;
            this.iden();
            this.state = 191;
            this.match(GrammarParser.T__19);
            this.state = 192;
            this.value(0);
            break;

        case 2:
            localctx = new IdenPropertyContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 194;
            this.iden();
            break;

        case 3:
            localctx = new IterPropertyContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 195;
            this.match(GrammarParser.T__0);
            this.state = 196;
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
    this.enterRule(localctx, 26, GrammarParser.RULE_declar);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 199;
        this.designator();
        this.state = 205;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,25,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 200;
                this.assign();
                this.state = 201;
                this.match(GrammarParser.T__3); 
            }
            this.state = 207;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,25,this._ctx);
        }

        this.state = 208;
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

SubAssignContext.prototype.iden = function() {
    return this.getTypedRuleContext(IdenContext,0);
};

SubAssignContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
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

DecAssignContext.prototype.iden = function() {
    return this.getTypedRuleContext(IdenContext,0);
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

AddAssignContext.prototype.iden = function() {
    return this.getTypedRuleContext(IdenContext,0);
};

AddAssignContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
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

DivAssignContext.prototype.iden = function() {
    return this.getTypedRuleContext(IdenContext,0);
};

DivAssignContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
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

ModAssignContext.prototype.iden = function() {
    return this.getTypedRuleContext(IdenContext,0);
};

ModAssignContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
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

MultAssignContext.prototype.iden = function() {
    return this.getTypedRuleContext(IdenContext,0);
};

MultAssignContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
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

IncAssignContext.prototype.iden = function() {
    return this.getTypedRuleContext(IdenContext,0);
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

SetAssignContext.prototype.iden = function() {
    return this.getTypedRuleContext(IdenContext,0);
};

SetAssignContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
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
    this.enterRule(localctx, 28, GrammarParser.RULE_assign);
    try {
        this.state = 240;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
        switch(la_) {
        case 1:
            localctx = new SetAssignContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 210;
            this.iden();
            this.state = 211;
            this.match(GrammarParser.T__20);
            this.state = 212;
            this.value(0);
            break;

        case 2:
            localctx = new MultAssignContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 214;
            this.iden();
            this.state = 215;
            this.match(GrammarParser.T__21);
            this.state = 216;
            this.value(0);
            break;

        case 3:
            localctx = new DivAssignContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 218;
            this.iden();
            this.state = 219;
            this.match(GrammarParser.T__22);
            this.state = 220;
            this.value(0);
            break;

        case 4:
            localctx = new AddAssignContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 222;
            this.iden();
            this.state = 223;
            this.match(GrammarParser.T__23);
            this.state = 224;
            this.value(0);
            break;

        case 5:
            localctx = new SubAssignContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 226;
            this.iden();
            this.state = 227;
            this.match(GrammarParser.T__24);
            this.state = 228;
            this.value(0);
            break;

        case 6:
            localctx = new ModAssignContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 230;
            this.iden();
            this.state = 231;
            this.match(GrammarParser.T__25);
            this.state = 232;
            this.value(0);
            break;

        case 7:
            localctx = new IncAssignContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 234;
            this.iden();
            this.state = 235;
            this.match(GrammarParser.T__26);
            break;

        case 8:
            localctx = new DecAssignContext(this, localctx);
            this.enterOuterAlt(localctx, 8);
            this.state = 237;
            this.iden();
            this.state = 238;
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
    this.enterRule(localctx, 30, GrammarParser.RULE_designator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 243;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===GrammarParser.T__28) {
            this.state = 242;
            this.match(GrammarParser.T__28);
        }

        this.state = 245;
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



GrammarParser.StatementContext = StatementContext;

GrammarParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, GrammarParser.RULE_statement);
    var _la = 0; // Token type
    try {
        this.state = 264;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
        switch(la_) {
        case 1:
            localctx = new ForloopStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 247;
            this.forloop();
            break;

        case 2:
            localctx = new WhileloopStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 248;
            this.whileloop();
            break;

        case 3:
            localctx = new IfStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 249;
            this.cond();
            break;

        case 4:
            localctx = new AssignStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 250;
            this.assign();
            break;

        case 5:
            localctx = new DeclarStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 251;
            this.declar();
            break;

        case 6:
            localctx = new GroupStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 252;
            this.match(GrammarParser.T__17);
            this.state = 256;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GrammarParser.T__0) | (1 << GrammarParser.T__1) | (1 << GrammarParser.T__2) | (1 << GrammarParser.T__5) | (1 << GrammarParser.T__7) | (1 << GrammarParser.T__8) | (1 << GrammarParser.T__12) | (1 << GrammarParser.T__15) | (1 << GrammarParser.T__17) | (1 << GrammarParser.T__28) | (1 << GrammarParser.T__29) | (1 << GrammarParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (GrammarParser.T__31 - 32)) | (1 << (GrammarParser.T__32 - 32)) | (1 << (GrammarParser.T__33 - 32)) | (1 << (GrammarParser.T__45 - 32)) | (1 << (GrammarParser.T__50 - 32)) | (1 << (GrammarParser.T__52 - 32)) | (1 << (GrammarParser.TRUE - 32)) | (1 << (GrammarParser.FALSE - 32)) | (1 << (GrammarParser.COMMENT - 32)) | (1 << (GrammarParser.WORD - 32)) | (1 << (GrammarParser.STRING - 32)) | (1 << (GrammarParser.NUM - 32)))) !== 0)) {
                this.state = 253;
                this.statement();
                this.state = 258;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 259;
            this.match(GrammarParser.T__18);
            break;

        case 7:
            localctx = new ReturnStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 260;
            this.match(GrammarParser.T__31);
            this.state = 261;
            this.value(0);
            break;

        case 8:
            localctx = new ValueStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 8);
            this.state = 262;
            this.value(0);
            break;

        case 9:
            localctx = new CommentStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 9);
            this.state = 263;
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

ApplyFuncValueContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

ApplyFuncValueContext.prototype.tuple = function() {
    return this.getTypedRuleContext(TupleContext,0);
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
    var _startState = 34;
    this.enterRecursionRule(localctx, 34, GrammarParser.RULE_value, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 289;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
        switch(la_) {
        case 1:
            localctx = new BracketValueContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 267;
            this.match(GrammarParser.T__2);
            this.state = 268;
            this.value(0);
            this.state = 269;
            this.match(GrammarParser.T__4);
            break;

        case 2:
            localctx = new InstanceValueContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 271;
            this.match(GrammarParser.T__32);
            this.state = 272;
            this.value(30);
            break;

        case 3:
            localctx = new ClassValueContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 273;
            this.match(GrammarParser.T__33);
            this.state = 274;
            this.value(29);
            break;

        case 4:
            localctx = new DictionaryValueContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 275;
            this.dictionary();
            break;

        case 5:
            localctx = new TupleValueContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 276;
            this.tuple();
            break;

        case 6:
            localctx = new ArrayValueContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 277;
            this.array();
            break;

        case 7:
            localctx = new NotValueContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 278;
            this.match(GrammarParser.T__45);
            this.state = 279;
            this.value(15);
            break;

        case 8:
            localctx = new NegateValueContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 280;
            this.match(GrammarParser.T__50);
            this.state = 281;
            this.value(10);
            break;

        case 9:
            localctx = new StringRepValueContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 282;
            this.match(GrammarParser.T__52);
            this.state = 283;
            this.value(6);
            break;

        case 10:
            localctx = new IdenValueContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 284;
            this.iden();
            break;

        case 11:
            localctx = new FuncValueContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 285;
            this.func();
            break;

        case 12:
            localctx = new NumberValueContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 286;
            this.match(GrammarParser.NUM);
            break;

        case 13:
            localctx = new StringValueContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 287;
            this.match(GrammarParser.STRING);
            break;

        case 14:
            localctx = new BoolValueContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 288;
            _la = this._input.LA(1);
            if(!(_la===GrammarParser.TRUE || _la===GrammarParser.FALSE)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 352;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,33,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 350;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new TernaryValueContext(this, new ValueContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_value);
                    this.state = 291;
                    if (!( this.precpred(this._ctx, 24))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 24)");
                    }
                    this.state = 292;
                    this.match(GrammarParser.T__36);
                    this.state = 293;
                    this.value(0);
                    this.state = 294;
                    this.match(GrammarParser.T__19);
                    this.state = 295;
                    this.value(25);
                    break;

                case 2:
                    localctx = new InequalValueContext(this, new ValueContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_value);
                    this.state = 297;
                    if (!( this.precpred(this._ctx, 23))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 23)");
                    }
                    this.state = 298;
                    this.match(GrammarParser.T__37);
                    this.state = 299;
                    this.value(24);
                    break;

                case 3:
                    localctx = new EqualValueContext(this, new ValueContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_value);
                    this.state = 300;
                    if (!( this.precpred(this._ctx, 22))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 22)");
                    }
                    this.state = 301;
                    this.match(GrammarParser.T__38);
                    this.state = 302;
                    this.value(23);
                    break;

                case 4:
                    localctx = new GtValueContext(this, new ValueContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_value);
                    this.state = 303;
                    if (!( this.precpred(this._ctx, 21))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 21)");
                    }
                    this.state = 304;
                    this.match(GrammarParser.T__39);
                    this.state = 305;
                    this.value(22);
                    break;

                case 5:
                    localctx = new GteValueContext(this, new ValueContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_value);
                    this.state = 306;
                    if (!( this.precpred(this._ctx, 20))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 20)");
                    }
                    this.state = 307;
                    this.match(GrammarParser.T__40);
                    this.state = 308;
                    this.value(21);
                    break;

                case 6:
                    localctx = new LtValueContext(this, new ValueContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_value);
                    this.state = 309;
                    if (!( this.precpred(this._ctx, 19))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 19)");
                    }
                    this.state = 310;
                    this.match(GrammarParser.T__41);
                    this.state = 311;
                    this.value(20);
                    break;

                case 7:
                    localctx = new LteValueContext(this, new ValueContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_value);
                    this.state = 312;
                    if (!( this.precpred(this._ctx, 18))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
                    }
                    this.state = 313;
                    this.match(GrammarParser.T__42);
                    this.state = 314;
                    this.value(19);
                    break;

                case 8:
                    localctx = new AndValueContext(this, new ValueContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_value);
                    this.state = 315;
                    if (!( this.precpred(this._ctx, 17))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
                    }
                    this.state = 316;
                    this.match(GrammarParser.T__43);
                    this.state = 317;
                    this.value(18);
                    break;

                case 9:
                    localctx = new OrValueContext(this, new ValueContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_value);
                    this.state = 318;
                    if (!( this.precpred(this._ctx, 16))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
                    }
                    this.state = 319;
                    this.match(GrammarParser.T__44);
                    this.state = 320;
                    this.value(17);
                    break;

                case 10:
                    localctx = new ModValueContext(this, new ValueContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_value);
                    this.state = 321;
                    if (!( this.precpred(this._ctx, 14))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                    }
                    this.state = 322;
                    this.match(GrammarParser.T__46);
                    this.state = 323;
                    this.value(15);
                    break;

                case 11:
                    localctx = new MultValueContext(this, new ValueContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_value);
                    this.state = 324;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 325;
                    _la = this._input.LA(1);
                    if(!(_la===GrammarParser.T__47 || _la===GrammarParser.T__48)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 326;
                    this.value(14);
                    break;

                case 12:
                    localctx = new AddValueContext(this, new ValueContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_value);
                    this.state = 327;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 328;
                    _la = this._input.LA(1);
                    if(!(_la===GrammarParser.T__49 || _la===GrammarParser.T__50)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 329;
                    this.value(13);
                    break;

                case 13:
                    localctx = new BlankConcatValueContext(this, new ValueContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_value);
                    this.state = 330;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 331;
                    this.match(GrammarParser.T__51);
                    this.state = 332;
                    this.value(12);
                    break;

                case 14:
                    localctx = new RangeValueContext(this, new ValueContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_value);
                    this.state = 333;
                    if (!( this.precpred(this._ctx, 25))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 25)");
                    }
                    this.state = 334;
                    this.match(GrammarParser.T__34);
                    this.state = 335;
                    this.value(0);
                    this.state = 338;
                    this._errHandler.sync(this);
                    var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
                    if(la_===1) {
                        this.state = 336;
                        this.match(GrammarParser.T__35);
                        this.state = 337;
                        this.value(0);

                    }
                    break;

                case 15:
                    localctx = new ApplyFuncValueContext(this, new ValueContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_value);
                    this.state = 340;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 341;
                    this.tuple();
                    break;

                case 16:
                    localctx = new ElementValueContext(this, new ValueContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_value);
                    this.state = 342;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 343;
                    this.match(GrammarParser.T__15);
                    this.state = 344;
                    this.value(0);
                    this.state = 345;
                    this.match(GrammarParser.T__16);
                    break;

                case 17:
                    localctx = new PropertyValueContext(this, new ValueContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_value);
                    this.state = 347;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 348;
                    this.match(GrammarParser.T__1);
                    this.state = 349;
                    this.iden();
                    break;

                } 
            }
            this.state = 354;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,33,this._ctx);
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
	case 17:
			return this.value_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

GrammarParser.prototype.value_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 24);
		case 1:
			return this.precpred(this._ctx, 23);
		case 2:
			return this.precpred(this._ctx, 22);
		case 3:
			return this.precpred(this._ctx, 21);
		case 4:
			return this.precpred(this._ctx, 20);
		case 5:
			return this.precpred(this._ctx, 19);
		case 6:
			return this.precpred(this._ctx, 18);
		case 7:
			return this.precpred(this._ctx, 17);
		case 8:
			return this.precpred(this._ctx, 16);
		case 9:
			return this.precpred(this._ctx, 14);
		case 10:
			return this.precpred(this._ctx, 13);
		case 11:
			return this.precpred(this._ctx, 12);
		case 12:
			return this.precpred(this._ctx, 11);
		case 13:
			return this.precpred(this._ctx, 25);
		case 14:
			return this.precpred(this._ctx, 9);
		case 15:
			return this.precpred(this._ctx, 8);
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
exports.WhileloopStatementContext = WhileloopStatementContext;
GrammarParser.WhileloopStatementContext = WhileloopStatementContext;
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
exports.BracketValueContext = BracketValueContext;
GrammarParser.BracketValueContext = BracketValueContext;
exports.NumberValueContext = NumberValueContext;
GrammarParser.NumberValueContext = NumberValueContext;
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
exports.TupleValueContext = TupleValueContext;
GrammarParser.TupleValueContext = TupleValueContext;
exports.RangeValueContext = RangeValueContext;
GrammarParser.RangeValueContext = RangeValueContext;
