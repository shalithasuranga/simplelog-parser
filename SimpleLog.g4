grammar SimpleLog;

logEntry : logLine+;

logLine : '[' logType ']' ' => ' logMessage ' :: ' logSender;
logType  : (INFO | WARNING | ERROR);
logMessage : TEXT+?;
logSender: logFile ':' DIGITS;
logFile : TEXT+?;

INFO     : 'INFO';
WARNING  : 'WARNING';
ERROR    : 'ERROR';
TEXT     : [a-zA-Z ./]+?;
DIGITS  : [0-9]+;
WS       : [ \n\t]+ -> skip;
