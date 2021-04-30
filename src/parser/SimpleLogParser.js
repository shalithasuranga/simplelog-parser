// Generated from SimpleLog.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import SimpleLogListener from './SimpleLogListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\r,\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0003\u0002\u0006\u0002\u0010\n\u0002\r\u0002\u000e\u0002\u0011\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0006\u0005\u001f",
    "\n\u0005\r\u0005\u000e\u0005 \u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0006\u0007(\n\u0007\r\u0007\u000e\u0007)\u0003\u0007",
    "\u0004 )\u0002\b\u0002\u0004\u0006\b\n\f\u0002\u0003\u0003\u0002\b\n",
    "\u0002(\u0002\u000f\u0003\u0002\u0002\u0002\u0004\u0013\u0003\u0002",
    "\u0002\u0002\u0006\u001b\u0003\u0002\u0002\u0002\b\u001e\u0003\u0002",
    "\u0002\u0002\n\"\u0003\u0002\u0002\u0002\f\'\u0003\u0002\u0002\u0002",
    "\u000e\u0010\u0005\u0004\u0003\u0002\u000f\u000e\u0003\u0002\u0002\u0002",
    "\u0010\u0011\u0003\u0002\u0002\u0002\u0011\u000f\u0003\u0002\u0002\u0002",
    "\u0011\u0012\u0003\u0002\u0002\u0002\u0012\u0003\u0003\u0002\u0002\u0002",
    "\u0013\u0014\u0007\u0003\u0002\u0002\u0014\u0015\u0005\u0006\u0004\u0002",
    "\u0015\u0016\u0007\u0004\u0002\u0002\u0016\u0017\u0007\u0005\u0002\u0002",
    "\u0017\u0018\u0005\b\u0005\u0002\u0018\u0019\u0007\u0006\u0002\u0002",
    "\u0019\u001a\u0005\n\u0006\u0002\u001a\u0005\u0003\u0002\u0002\u0002",
    "\u001b\u001c\t\u0002\u0002\u0002\u001c\u0007\u0003\u0002\u0002\u0002",
    "\u001d\u001f\u0007\u000b\u0002\u0002\u001e\u001d\u0003\u0002\u0002\u0002",
    "\u001f \u0003\u0002\u0002\u0002 !\u0003\u0002\u0002\u0002 \u001e\u0003",
    "\u0002\u0002\u0002!\t\u0003\u0002\u0002\u0002\"#\u0005\f\u0007\u0002",
    "#$\u0007\u0007\u0002\u0002$%\u0007\f\u0002\u0002%\u000b\u0003\u0002",
    "\u0002\u0002&(\u0007\u000b\u0002\u0002\'&\u0003\u0002\u0002\u0002()",
    "\u0003\u0002\u0002\u0002)*\u0003\u0002\u0002\u0002)\'\u0003\u0002\u0002",
    "\u0002*\r\u0003\u0002\u0002\u0002\u0005\u0011 )"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class SimpleLogParser extends antlr4.Parser {

    static grammarFileName = "SimpleLog.g4";
    static literalNames = [ null, "'['", "']'", "' => '", "' :: '", "':'", 
                            "'INFO'", "'WARNING'", "'ERROR'" ];
    static symbolicNames = [ null, null, null, null, null, null, "INFO", 
                             "WARNING", "ERROR", "TEXT", "DIGITS", "WS" ];
    static ruleNames = [ "logEntry", "logLine", "logType", "logMessage", 
                         "logSender", "logFile" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = SimpleLogParser.ruleNames;
        this.literalNames = SimpleLogParser.literalNames;
        this.symbolicNames = SimpleLogParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	logEntry() {
	    let localctx = new LogEntryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, SimpleLogParser.RULE_logEntry);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 13; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 12;
	            this.logLine();
	            this.state = 15; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===SimpleLogParser.T__0);
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
	}



	logLine() {
	    let localctx = new LogLineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, SimpleLogParser.RULE_logLine);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17;
	        this.match(SimpleLogParser.T__0);
	        this.state = 18;
	        this.logType();
	        this.state = 19;
	        this.match(SimpleLogParser.T__1);
	        this.state = 20;
	        this.match(SimpleLogParser.T__2);
	        this.state = 21;
	        this.logMessage();
	        this.state = 22;
	        this.match(SimpleLogParser.T__3);
	        this.state = 23;
	        this.logSender();
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
	}



	logType() {
	    let localctx = new LogTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, SimpleLogParser.RULE_logType);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SimpleLogParser.INFO) | (1 << SimpleLogParser.WARNING) | (1 << SimpleLogParser.ERROR))) !== 0))) {
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
	}



	logMessage() {
	    let localctx = new LogMessageContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, SimpleLogParser.RULE_logMessage);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28; 
	        this._errHandler.sync(this);
	        var _alt = 1+1;
	        do {
	        	switch (_alt) {
	        	case 1+1:
	        		this.state = 27;
	        		this.match(SimpleLogParser.TEXT);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 30; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,1, this._ctx);
	        } while ( _alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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
	}



	logSender() {
	    let localctx = new LogSenderContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, SimpleLogParser.RULE_logSender);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this.logFile();
	        this.state = 33;
	        this.match(SimpleLogParser.T__4);
	        this.state = 34;
	        this.match(SimpleLogParser.DIGITS);
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
	}



	logFile() {
	    let localctx = new LogFileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, SimpleLogParser.RULE_logFile);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37; 
	        this._errHandler.sync(this);
	        var _alt = 1+1;
	        do {
	        	switch (_alt) {
	        	case 1+1:
	        		this.state = 36;
	        		this.match(SimpleLogParser.TEXT);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 39; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,2, this._ctx);
	        } while ( _alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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
	}


}

SimpleLogParser.EOF = antlr4.Token.EOF;
SimpleLogParser.T__0 = 1;
SimpleLogParser.T__1 = 2;
SimpleLogParser.T__2 = 3;
SimpleLogParser.T__3 = 4;
SimpleLogParser.T__4 = 5;
SimpleLogParser.INFO = 6;
SimpleLogParser.WARNING = 7;
SimpleLogParser.ERROR = 8;
SimpleLogParser.TEXT = 9;
SimpleLogParser.DIGITS = 10;
SimpleLogParser.WS = 11;

SimpleLogParser.RULE_logEntry = 0;
SimpleLogParser.RULE_logLine = 1;
SimpleLogParser.RULE_logType = 2;
SimpleLogParser.RULE_logMessage = 3;
SimpleLogParser.RULE_logSender = 4;
SimpleLogParser.RULE_logFile = 5;

class LogEntryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLogParser.RULE_logEntry;
    }

	logLine = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LogLineContext);
	    } else {
	        return this.getTypedRuleContext(LogLineContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLogListener ) {
	        listener.enterLogEntry(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLogListener ) {
	        listener.exitLogEntry(this);
		}
	}


}



class LogLineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLogParser.RULE_logLine;
    }

	logType() {
	    return this.getTypedRuleContext(LogTypeContext,0);
	};

	logMessage() {
	    return this.getTypedRuleContext(LogMessageContext,0);
	};

	logSender() {
	    return this.getTypedRuleContext(LogSenderContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLogListener ) {
	        listener.enterLogLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLogListener ) {
	        listener.exitLogLine(this);
		}
	}


}



class LogTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLogParser.RULE_logType;
    }

	INFO() {
	    return this.getToken(SimpleLogParser.INFO, 0);
	};

	WARNING() {
	    return this.getToken(SimpleLogParser.WARNING, 0);
	};

	ERROR() {
	    return this.getToken(SimpleLogParser.ERROR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLogListener ) {
	        listener.enterLogType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLogListener ) {
	        listener.exitLogType(this);
		}
	}


}



class LogMessageContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLogParser.RULE_logMessage;
    }

	TEXT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SimpleLogParser.TEXT);
	    } else {
	        return this.getToken(SimpleLogParser.TEXT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SimpleLogListener ) {
	        listener.enterLogMessage(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLogListener ) {
	        listener.exitLogMessage(this);
		}
	}


}



class LogSenderContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLogParser.RULE_logSender;
    }

	logFile() {
	    return this.getTypedRuleContext(LogFileContext,0);
	};

	DIGITS() {
	    return this.getToken(SimpleLogParser.DIGITS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLogListener ) {
	        listener.enterLogSender(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLogListener ) {
	        listener.exitLogSender(this);
		}
	}


}



class LogFileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLogParser.RULE_logFile;
    }

	TEXT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SimpleLogParser.TEXT);
	    } else {
	        return this.getToken(SimpleLogParser.TEXT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SimpleLogListener ) {
	        listener.enterLogFile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLogListener ) {
	        listener.exitLogFile(this);
		}
	}


}




SimpleLogParser.LogEntryContext = LogEntryContext; 
SimpleLogParser.LogLineContext = LogLineContext; 
SimpleLogParser.LogTypeContext = LogTypeContext; 
SimpleLogParser.LogMessageContext = LogMessageContext; 
SimpleLogParser.LogSenderContext = LogSenderContext; 
SimpleLogParser.LogFileContext = LogFileContext; 
