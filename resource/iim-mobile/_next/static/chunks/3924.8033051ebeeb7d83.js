(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3924],{350:function(t){t.exports=function(t,e){var i=e.prototype,r=i.format;i.format=function(t){var e=this,i=this.$locale();if(!this.isValid())return r.bind(this)(t);var n=this.$utils(),s=(t||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(t){switch(t){case"Q":return Math.ceil((e.$M+1)/3);case"Do":return i.ordinal(e.$D);case"gggg":return e.weekYear();case"GGGG":return e.isoWeekYear();case"wo":return i.ordinal(e.week(),"W");case"w":case"ww":return n.s(e.week(),"w"===t?1:2,"0");case"W":case"WW":return n.s(e.isoWeek(),"W"===t?1:2,"0");case"k":case"kk":return n.s(String(0===e.$H?24:e.$H),"k"===t?1:2,"0");case"X":return Math.floor(e.$d.getTime()/1e3);case"x":return e.$d.getTime();case"z":return"["+e.offsetName()+"]";case"zzz":return"["+e.offsetName("long")+"]";default:return t}});return r.bind(this)(s)}}},7874:function(t){var e,i,r,n,s,a,o,c,l,u,d,h;t.exports=(e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},i=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,s=/\d*[^-_:/,()\s\d]+/,a={},o=function(t){return(t=+t)+(t>68?1900:2e3)},c=function(t){return function(e){this[t]=+e}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t||"Z"===t)return 0;var e=t.match(/([+-]|\d\d)/g),i=60*e[1]+(+e[2]||0);return 0===i?0:"+"===e[0]?-i:i}(t)}],u=function(t){var e=a[t];return e&&(e.indexOf?e:e.s.concat(e.f))},d=function(t,e){var i,r=a.meridiem;if(r){for(var n=1;n<=24;n+=1)if(t.indexOf(r(n,0,e))>-1){i=n>12;break}}else i=t===(e?"pm":"PM");return i},h={A:[s,function(t){this.afternoon=d(t,!1)}],a:[s,function(t){this.afternoon=d(t,!0)}],S:[/\d/,function(t){this.milliseconds=100*+t}],SS:[r,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[n,c("seconds")],ss:[n,c("seconds")],m:[n,c("minutes")],mm:[n,c("minutes")],H:[n,c("hours")],h:[n,c("hours")],HH:[n,c("hours")],hh:[n,c("hours")],D:[n,c("day")],DD:[r,c("day")],Do:[s,function(t){var e=a.ordinal,i=t.match(/\d+/);if(this.day=i[0],e)for(var r=1;r<=31;r+=1)e(r).replace(/\[|\]/g,"")===t&&(this.day=r)}],M:[n,c("month")],MM:[r,c("month")],MMM:[s,function(t){var e=u("months"),i=(u("monthsShort")||e.map(function(t){return t.slice(0,3)})).indexOf(t)+1;if(i<1)throw Error();this.month=i%12||i}],MMMM:[s,function(t){var e=u("months").indexOf(t)+1;if(e<1)throw Error();this.month=e%12||e}],Y:[/[+-]?\d+/,c("year")],YY:[r,function(t){this.year=o(t)}],YYYY:[/\d{4}/,c("year")],Z:l,ZZ:l},function(t,r,n){n.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(o=t.parseTwoDigitYear);var s=r.prototype,c=s.parse;s.parse=function(t){var r=t.date,s=t.utc,o=t.args;this.$u=s;var l=o[1];if("string"==typeof l){var u=!0===o[2],d=!0===o[3],f=o[2];d&&(f=o[2]),a=this.$locale(),!u&&f&&(a=n.Ls[f]),this.$d=function(t,r,n){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*t);var s=(function(t){var r,n;r=t,n=a&&a.formats;for(var s=(t=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(t,i,r){var s=r&&r.toUpperCase();return i||n[r]||e[r]||n[s].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(t,e,i){return e||i.slice(1)})})).match(i),o=s.length,c=0;c<o;c+=1){var l=s[c],u=h[l],d=u&&u[0],f=u&&u[1];s[c]=f?{regex:d,parser:f}:l.replace(/^\[|\]$/g,"")}return function(t){for(var e={},i=0,r=0;i<o;i+=1){var n=s[i];if("string"==typeof n)r+=n.length;else{var a=n.regex,c=n.parser,l=t.slice(r),u=a.exec(l)[0];c.call(e,u),t=t.replace(u,"")}}return function(t){var e=t.afternoon;if(void 0!==e){var i=t.hours;e?i<12&&(t.hours+=12):12===i&&(t.hours=0),delete t.afternoon}}(e),e}})(r)(t),o=s.year,c=s.month,l=s.day,u=s.hours,d=s.minutes,f=s.seconds,m=s.milliseconds,p=s.zone,y=new Date,k=l||(o||c?1:y.getDate()),g=o||y.getFullYear(),v=0;o&&!c||(v=c>0?c-1:y.getMonth());var b=u||0,x=d||0,T=f||0,_=m||0;return p?new Date(Date.UTC(g,v,k,b,x,T,_+60*p.offset*1e3)):n?new Date(Date.UTC(g,v,k,b,x,T,_)):new Date(g,v,k,b,x,T,_)}catch(t){return new Date("")}}(r,l,s),this.init(),f&&!0!==f&&(this.$L=this.locale(f).$L),(u||d)&&r!=this.format(l)&&(this.$d=new Date("")),a={}}else if(l instanceof Array)for(var m=l.length,p=1;p<=m;p+=1){o[1]=l[p-1];var y=n.apply(this,o);if(y.isValid()){this.$d=y.$d,this.$L=y.$L,this.init();break}p===m&&(this.$d=new Date(""))}else c.call(this,t)}})},3692:function(t){t.exports=function(t,e,i){var r=function(t){return t.add(4-t.isoWeekday(),"day")},n=e.prototype;n.isoWeekYear=function(){return r(this).year()},n.isoWeek=function(t){if(!this.$utils().u(t))return this.add(7*(t-this.isoWeek()),"day");var e,n,s,a=r(this),o=(e=this.isoWeekYear(),s=4-(n=(this.$u?i.utc:i)().year(e).startOf("year")).isoWeekday(),n.isoWeekday()>4&&(s+=7),n.add(s,"day"));return a.diff(o,"week")+1},n.isoWeekday=function(t){return this.$utils().u(t)?this.day()||7:this.day(this.day()%7?t:t-7)};var s=n.startOf;n.startOf=function(t,e){var i=this.$utils(),r=!!i.u(e)||e;return"isoweek"===i.p(t)?r?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):s.bind(this)(t,e)}}},3924:function(t,e,i){"use strict";let r,n,s,a;i.r(e),i.d(e,{diagram:function(){return K}});var o=i(458),c=i(6902),l=i(3692),u=i(7874),d=i(350),h=i(347),f=i(9526),m=i(9828),p=i(7128);i(7326);var y=function(){var t=function(t,e,i,r){for(i=i||{},r=t.length;r--;i[t[r]]=e);return i},e=[1,3],i=[1,5],r=[7,9,11,12,13,14,15,16,17,18,19,20,21,23,25,26,28,35,40],n=[1,15],s=[1,16],a=[1,17],o=[1,18],c=[1,19],l=[1,20],u=[1,21],d=[1,22],h=[1,23],f=[1,24],m=[1,25],p=[1,26],y=[1,27],k=[1,29],g=[1,31],v=[1,34],b=[5,7,9,11,12,13,14,15,16,17,18,19,20,21,23,25,26,28,35,40],x={trace:function(){},yy:{},symbols_:{error:2,start:3,directive:4,gantt:5,document:6,EOF:7,line:8,SPACE:9,statement:10,NL:11,dateFormat:12,inclusiveEndDates:13,topAxis:14,axisFormat:15,tickInterval:16,excludes:17,includes:18,todayMarker:19,title:20,acc_title:21,acc_title_value:22,acc_descr:23,acc_descr_value:24,acc_descr_multiline_value:25,section:26,clickStatement:27,taskTxt:28,taskData:29,openDirective:30,typeDirective:31,closeDirective:32,":":33,argDirective:34,click:35,callbackname:36,callbackargs:37,href:38,clickStatementDebug:39,open_directive:40,type_directive:41,arg_directive:42,close_directive:43,$accept:0,$end:1},terminals_:{2:"error",5:"gantt",7:"EOF",9:"SPACE",11:"NL",12:"dateFormat",13:"inclusiveEndDates",14:"topAxis",15:"axisFormat",16:"tickInterval",17:"excludes",18:"includes",19:"todayMarker",20:"title",21:"acc_title",22:"acc_title_value",23:"acc_descr",24:"acc_descr_value",25:"acc_descr_multiline_value",26:"section",28:"taskTxt",29:"taskData",33:":",35:"click",36:"callbackname",37:"callbackargs",38:"href",40:"open_directive",41:"type_directive",42:"arg_directive",43:"close_directive"},productions_:[0,[3,2],[3,3],[6,0],[6,2],[8,2],[8,1],[8,1],[8,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,2],[10,2],[10,1],[10,1],[10,1],[10,2],[10,1],[4,4],[4,6],[27,2],[27,3],[27,3],[27,4],[27,3],[27,4],[27,2],[39,2],[39,3],[39,3],[39,4],[39,3],[39,4],[39,2],[30,1],[31,1],[34,1],[32,1]],performAction:function(t,e,i,r,n,s,a){var o=s.length-1;switch(n){case 2:return s[o-1];case 3:case 7:case 8:this.$=[];break;case 4:s[o-1].push(s[o]),this.$=s[o-1];break;case 5:case 6:this.$=s[o];break;case 9:r.setDateFormat(s[o].substr(11)),this.$=s[o].substr(11);break;case 10:r.enableInclusiveEndDates(),this.$=s[o].substr(18);break;case 11:r.TopAxis(),this.$=s[o].substr(8);break;case 12:r.setAxisFormat(s[o].substr(11)),this.$=s[o].substr(11);break;case 13:r.setTickInterval(s[o].substr(13)),this.$=s[o].substr(13);break;case 14:r.setExcludes(s[o].substr(9)),this.$=s[o].substr(9);break;case 15:r.setIncludes(s[o].substr(9)),this.$=s[o].substr(9);break;case 16:r.setTodayMarker(s[o].substr(12)),this.$=s[o].substr(12);break;case 17:r.setDiagramTitle(s[o].substr(6)),this.$=s[o].substr(6);break;case 18:this.$=s[o].trim(),r.setAccTitle(this.$);break;case 19:case 20:this.$=s[o].trim(),r.setAccDescription(this.$);break;case 21:r.addSection(s[o].substr(8)),this.$=s[o].substr(8);break;case 23:r.addTask(s[o-1],s[o]),this.$="task";break;case 27:this.$=s[o-1],r.setClickEvent(s[o-1],s[o],null);break;case 28:this.$=s[o-2],r.setClickEvent(s[o-2],s[o-1],s[o]);break;case 29:this.$=s[o-2],r.setClickEvent(s[o-2],s[o-1],null),r.setLink(s[o-2],s[o]);break;case 30:this.$=s[o-3],r.setClickEvent(s[o-3],s[o-2],s[o-1]),r.setLink(s[o-3],s[o]);break;case 31:this.$=s[o-2],r.setClickEvent(s[o-2],s[o],null),r.setLink(s[o-2],s[o-1]);break;case 32:this.$=s[o-3],r.setClickEvent(s[o-3],s[o-1],s[o]),r.setLink(s[o-3],s[o-2]);break;case 33:this.$=s[o-1],r.setLink(s[o-1],s[o]);break;case 34:case 40:this.$=s[o-1]+" "+s[o];break;case 35:case 36:case 38:this.$=s[o-2]+" "+s[o-1]+" "+s[o];break;case 37:case 39:this.$=s[o-3]+" "+s[o-2]+" "+s[o-1]+" "+s[o];break;case 41:r.parseDirective("%%{","open_directive");break;case 42:r.parseDirective(s[o],"type_directive");break;case 43:s[o]=s[o].trim().replace(/'/g,'"'),r.parseDirective(s[o],"arg_directive");break;case 44:r.parseDirective("}%%","close_directive","gantt")}},table:[{3:1,4:2,5:e,30:4,40:i},{1:[3]},{3:6,4:2,5:e,30:4,40:i},t(r,[2,3],{6:7}),{31:8,41:[1,9]},{41:[2,41]},{1:[2,1]},{4:30,7:[1,10],8:11,9:[1,12],10:13,11:[1,14],12:n,13:s,14:a,15:o,16:c,17:l,18:u,19:d,20:h,21:f,23:m,25:p,26:y,27:28,28:k,30:4,35:g,40:i},{32:32,33:[1,33],43:v},t([33,43],[2,42]),t(r,[2,8],{1:[2,2]}),t(r,[2,4]),{4:30,10:35,12:n,13:s,14:a,15:o,16:c,17:l,18:u,19:d,20:h,21:f,23:m,25:p,26:y,27:28,28:k,30:4,35:g,40:i},t(r,[2,6]),t(r,[2,7]),t(r,[2,9]),t(r,[2,10]),t(r,[2,11]),t(r,[2,12]),t(r,[2,13]),t(r,[2,14]),t(r,[2,15]),t(r,[2,16]),t(r,[2,17]),{22:[1,36]},{24:[1,37]},t(r,[2,20]),t(r,[2,21]),t(r,[2,22]),{29:[1,38]},t(r,[2,24]),{36:[1,39],38:[1,40]},{11:[1,41]},{34:42,42:[1,43]},{11:[2,44]},t(r,[2,5]),t(r,[2,18]),t(r,[2,19]),t(r,[2,23]),t(r,[2,27],{37:[1,44],38:[1,45]}),t(r,[2,33],{36:[1,46]}),t(b,[2,25]),{32:47,43:v},{43:[2,43]},t(r,[2,28],{38:[1,48]}),t(r,[2,29]),t(r,[2,31],{37:[1,49]}),{11:[1,50]},t(r,[2,30]),t(r,[2,32]),t(b,[2,26])],defaultActions:{5:[2,41],6:[2,1],34:[2,44],43:[2,43]},parseError:function(t,e){if(e.recoverable)this.trace(t);else{var i=Error(t);throw i.hash=e,i}},parse:function(t){var e=this,i=[0],r=[],n=[null],s=[],a=this.table,o="",c=0,l=0,u=s.slice.call(arguments,1),d=Object.create(this.lexer),h={yy:{}};for(var f in this.yy)Object.prototype.hasOwnProperty.call(this.yy,f)&&(h.yy[f]=this.yy[f]);d.setInput(t,h.yy),h.yy.lexer=d,h.yy.parser=this,void 0===d.yylloc&&(d.yylloc={});var m=d.yylloc;s.push(m);var p=d.options&&d.options.ranges;"function"==typeof h.yy.parseError?this.parseError=h.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var y,k,g,v,b,x,T,_,$={};;){if(k=i[i.length-1],this.defaultActions[k]?g=this.defaultActions[k]:(null==y&&(y=function(){var t;return"number"!=typeof(t=r.pop()||d.lex()||1)&&(t instanceof Array&&(t=(r=t).pop()),t=e.symbols_[t]||t),t}()),g=a[k]&&a[k][y]),void 0===g||!g.length||!g[0]){var D="";for(b in _=[],a[k])this.terminals_[b]&&b>2&&_.push("'"+this.terminals_[b]+"'");D=d.showPosition?"Parse error on line "+(c+1)+":\n"+d.showPosition()+"\nExpecting "+_.join(", ")+", got '"+(this.terminals_[y]||y)+"'":"Parse error on line "+(c+1)+": Unexpected "+(1==y?"end of input":"'"+(this.terminals_[y]||y)+"'"),this.parseError(D,{text:d.match,token:this.terminals_[y]||y,line:d.yylineno,loc:m,expected:_})}if(g[0]instanceof Array&&g.length>1)throw Error("Parse Error: multiple actions possible at state: "+k+", token: "+y);switch(g[0]){case 1:i.push(y),n.push(d.yytext),s.push(d.yylloc),i.push(g[1]),y=null,l=d.yyleng,o=d.yytext,c=d.yylineno,m=d.yylloc;break;case 2:if(x=this.productions_[g[1]][1],$.$=n[n.length-x],$._$={first_line:s[s.length-(x||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(x||1)].first_column,last_column:s[s.length-1].last_column},p&&($._$.range=[s[s.length-(x||1)].range[0],s[s.length-1].range[1]]),void 0!==(v=this.performAction.apply($,[o,l,c,h.yy,g[1],n,s].concat(u))))return v;x&&(i=i.slice(0,-1*x*2),n=n.slice(0,-1*x),s=s.slice(0,-1*x)),i.push(this.productions_[g[1]][0]),n.push($.$),s.push($._$),T=a[i[i.length-2]][i[i.length-1]],i.push(T);break;case 3:return!0}}return!0}};function T(){this.yy={}}return x.lexer={EOF:1,parseError:function(t,e){if(this.yy.parser)this.yy.parser.parseError(t,e);else throw Error(t)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,i=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var n=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===r.length?this.yylloc.first_column:0)+r[r.length-i.length].length-i[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[n[0],n[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var i,r,n;if(this.options.backtrack_lexer&&(n={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(n.yylloc.range=this.yylloc.range.slice(0))),(r=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=r.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:r?r[r.length-1].length-r[r.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],i=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack)for(var s in n)this[s]=n[s];return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var t,e,i,r,n=this._currentRules(),s=0;s<n.length;s++)if((i=this._input.match(this.rules[n[s]]))&&(!e||i[0].length>e[0].length)){if(e=i,r=s,this.options.backtrack_lexer){if(!1!==(t=this.test_match(i,n[s])))return t;if(!this._backtrack)return!1;e=!1;continue}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,n[r]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,i,r){switch(i){case 0:return this.begin("open_directive"),40;case 1:return this.begin("type_directive"),41;case 2:return this.popState(),this.begin("arg_directive"),33;case 3:return this.popState(),this.popState(),43;case 4:return 42;case 5:return this.begin("acc_title"),21;case 6:return this.popState(),"acc_title_value";case 7:return this.begin("acc_descr"),23;case 8:return this.popState(),"acc_descr_value";case 9:this.begin("acc_descr_multiline");break;case 10:case 20:case 23:case 26:case 29:this.popState();break;case 11:return"acc_descr_multiline_value";case 12:case 13:case 14:case 16:case 17:case 18:break;case 15:return 11;case 19:this.begin("href");break;case 21:return 38;case 22:this.begin("callbackname");break;case 24:this.popState(),this.begin("callbackargs");break;case 25:return 36;case 27:return 37;case 28:this.begin("click");break;case 30:return 35;case 31:return 5;case 32:return 12;case 33:return 13;case 34:return 14;case 35:return 15;case 36:return 16;case 37:return 18;case 38:return 17;case 39:return 19;case 40:return"date";case 41:return 20;case 42:return"accDescription";case 43:return 26;case 44:return 28;case 45:return 29;case 46:return 33;case 47:return 7;case 48:return"INVALID"}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[10,11],inclusive:!1},acc_descr:{rules:[8],inclusive:!1},acc_title:{rules:[6],inclusive:!1},close_directive:{rules:[],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},open_directive:{rules:[1],inclusive:!1},callbackargs:{rules:[26,27],inclusive:!1},callbackname:{rules:[23,24,25],inclusive:!1},href:{rules:[20,21],inclusive:!1},click:{rules:[29,30],inclusive:!1},INITIAL:{rules:[0,5,7,9,12,13,14,15,16,17,18,19,22,28,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48],inclusive:!0}}},T.prototype=x,x.Parser=T,new T}();y.parser=y,c.extend(l),c.extend(u),c.extend(d);let k="",g="",v="",b=[],x=[],T={},_=[],$=[],D="",w="",S=["active","done","crit","milestone"],C=[],E=!1,M=!1,A=0,Y=function(t,e,i,r){return!r.includes(t.format(e.trim()))&&(!!(t.isoWeekday()>=6&&i.includes("weekends")||i.includes(t.format("dddd").toLowerCase()))||i.includes(t.format(e.trim())))},L=function(t,e,i,r){let n,s;if(!i.length||t.manualEndTime)return;n=(n=t.startTime instanceof Date?c(t.startTime):c(t.startTime,e,!0)).add(1,"d"),s=t.endTime instanceof Date?c(t.endTime):c(t.endTime,e,!0);let[a,o]=F(n,s,e,i,r);t.endTime=a.toDate(),t.renderEndTime=o},F=function(t,e,i,r,n){let s=!1,a=null;for(;t<=e;)s||(a=e.toDate()),(s=Y(t,i,r,n))&&(e=e.add(1,"d")),t=t.add(1,"d");return[e,a]},I=function(t,e,i){i=i.trim();let r=/^after\s+([\d\w- ]+)/.exec(i.trim());if(null!==r){let t=null;if(r[1].split(" ").forEach(function(e){let i=j(e);void 0!==i&&(t?i.endTime>t.endTime&&(t=i):t=i)}),t)return t.endTime;{let t=new Date;return t.setHours(0,0,0,0),t}}let n=c(i,e.trim(),!0);if(n.isValid())return n.toDate();{h.l.debug("Invalid date:"+i),h.l.debug("With date format:"+e.trim());let t=new Date(i);if(void 0===t||isNaN(t.getTime()))throw Error("Invalid date:"+i);return t}},O=function(t){let e=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return null!==e?[Number.parseFloat(e[1]),e[2]]:[NaN,"ms"]},z=function(t,e,i,r=!1){let n=c(i=i.trim(),e.trim(),!0);if(n.isValid())return r&&(n=n.add(1,"d")),n.toDate();let s=c(t),[a,o]=O(i);if(!Number.isNaN(a)){let t=s.add(a,o);t.isValid()&&(s=t)}return s.toDate()},P=0,W=function(t){return void 0===t?"task"+(P+=1):t},B=function(t,e){let i;i=":"===e.substr(0,1)?e.substr(1,e.length):e;let r=i.split(","),n={};X(r,n,S);for(let t=0;t<r.length;t++)r[t]=r[t].trim();let s="";switch(r.length){case 1:n.id=W(),n.startTime=t.endTime,s=r[0];break;case 2:n.id=W(),n.startTime=I(void 0,k,r[0]),s=r[1];break;case 3:n.id=W(r[0]),n.startTime=I(void 0,k,r[1]),s=r[2]}return s&&(n.endTime=z(n.startTime,k,s,E),n.manualEndTime=c(s,"YYYY-MM-DD",!0).isValid(),L(n,k,x,b)),n},N=function(t,e){let i;i=":"===e.substr(0,1)?e.substr(1,e.length):e;let r=i.split(","),n={};X(r,n,S);for(let t=0;t<r.length;t++)r[t]=r[t].trim();switch(r.length){case 1:n.id=W(),n.startTime={type:"prevTaskEnd",id:t},n.endTime={data:r[0]};break;case 2:n.id=W(),n.startTime={type:"getStartDate",startData:r[0]},n.endTime={data:r[1]};break;case 3:n.id=W(r[0]),n.startTime={type:"getStartDate",startData:r[1]},n.endTime={data:r[2]}}return n},H=[],G={},j=function(t){let e=G[t];return H[e]},Z=function(){let t=!0;for(let[e,i]of H.entries())!function(t){let e=H[t],i="";switch(H[t].raw.startTime.type){case"prevTaskEnd":{let t=j(e.prevTaskId);e.startTime=t.endTime;break}case"getStartDate":(i=I(void 0,k,H[t].raw.startTime.startData))&&(H[t].startTime=i)}H[t].startTime&&(H[t].endTime=z(H[t].startTime,k,H[t].raw.endTime.data,E),H[t].endTime&&(H[t].processed=!0,H[t].manualEndTime=c(H[t].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),L(H[t],k,x,b))),H[t].processed}(e),t=t&&i.processed;return t},V=function(t,e){t.split(",").forEach(function(t){let i=j(t);void 0!==i&&i.classes.push(e)})},R=function(t,e,i){if("loose"!==(0,h.g)().securityLevel||void 0===e)return;let r=[];if("string"==typeof i){r=i.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let t=0;t<r.length;t++){let e=r[t].trim();'"'===e.charAt(0)&&'"'===e.charAt(e.length-1)&&(e=e.substr(1,e.length-2)),r[t]=e}}0===r.length&&r.push(t),void 0!==j(t)&&q(t,()=>{f.u.runFunc(e,...r)})},q=function(t,e){C.push(function(){let i=document.querySelector(`[id="${t}"]`);null!==i&&i.addEventListener("click",function(){e()})},function(){let i=document.querySelector(`[id="${t}-text"]`);null!==i&&i.addEventListener("click",function(){e()})})},U={parseDirective:function(t,e,i){m.m.parseDirective(this,t,e,i)},getConfig:()=>(0,h.g)().gantt,clear:function(){_=[],$=[],D="",C=[],P=0,r=void 0,n=void 0,H=[],k="",g="",w="",a=void 0,v="",b=[],x=[],E=!1,M=!1,A=0,T={},(0,h.y)()},setDateFormat:function(t){k=t},getDateFormat:function(){return k},enableInclusiveEndDates:function(){E=!0},endDatesAreInclusive:function(){return E},enableTopAxis:function(){M=!0},topAxisEnabled:function(){return M},setAxisFormat:function(t){g=t},getAxisFormat:function(){return g},setTickInterval:function(t){a=t},getTickInterval:function(){return a},setTodayMarker:function(t){v=t},getTodayMarker:function(){return v},setAccTitle:h.o,getAccTitle:h.p,setDiagramTitle:h.w,getDiagramTitle:h.x,setDisplayMode:function(t){w=t},getDisplayMode:function(){return w},setAccDescription:h.v,getAccDescription:h.q,addSection:function(t){D=t,_.push(t)},getSections:function(){return _},getTasks:function(){let t=Z(),e=0;for(;!t&&e<10;)t=Z(),e++;return $=H},addTask:function(t,e){let i={section:D,type:D,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:e},task:t,classes:[]},r=N(n,e);i.raw.startTime=r.startTime,i.raw.endTime=r.endTime,i.id=r.id,i.prevTaskId=n,i.active=r.active,i.done=r.done,i.crit=r.crit,i.milestone=r.milestone,i.order=A,A++;let s=H.push(i);n=i.id,G[i.id]=s-1},findTaskById:j,addTaskOrg:function(t,e){let i={section:D,type:D,description:t,task:t,classes:[]},n=B(r,e);i.startTime=n.startTime,i.endTime=n.endTime,i.id=n.id,i.active=n.active,i.done=n.done,i.crit=n.crit,i.milestone=n.milestone,r=i,$.push(i)},setIncludes:function(t){b=t.toLowerCase().split(/[\s,]+/)},getIncludes:function(){return b},setExcludes:function(t){x=t.toLowerCase().split(/[\s,]+/)},getExcludes:function(){return x},setClickEvent:function(t,e,i){t.split(",").forEach(function(t){R(t,e,i)}),V(t,"clickable")},setLink:function(t,e){let i=e;"loose"!==(0,h.g)().securityLevel&&(i=(0,o.N)(e)),t.split(",").forEach(function(t){void 0!==j(t)&&(q(t,()=>{window.open(i,"_self")}),T[t]=i)}),V(t,"clickable")},getLinks:function(){return T},bindFunctions:function(t){C.forEach(function(e){e(t)})},parseDuration:O,isInvalidDate:Y};function X(t,e,i){let r=!0;for(;r;)r=!1,i.forEach(function(i){let n="^\\s*"+i+"\\s*$",s=new RegExp(n);t[0].match(s)&&(e[i]=!0,t.shift(1),r=!0)})}let Q=(t,e)=>{let i=[...t].map(()=>-1/0),r=[...t].sort((t,e)=>t.startTime-e.startTime||t.order-e.order),n=0;for(let t of r)for(let r=0;r<i.length;r++)if(t.startTime>=i[r]){i[r]=t.endTime,t.order=r+e,r>n&&(n=r);break}return n},J=t=>`
  .mermaid-main-font {
    font-family: "trebuchet ms", verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    // font-size: ${t.ganttFontSize};
    // text-height: 14px;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);

  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
    text {
      font-family: ${t.fontFamily};
      fill: ${t.textColor};
    }
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }

  // .taskText:not([font-size]) {
  //   font-size: ${t.ganttFontSize};
  // }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    // font-size: ${t.ganttFontSize};
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);

  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
    // font-size: ${t.ganttFontSize};
  }

  /* Special case clickable */
  .task.clickable {
    cursor: pointer;
  }
  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.textColor}    ;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
`,K={parser:y,db:U,renderer:{setConf:function(){h.l.debug("Something is calling, setConf, remove the call")},draw:function(t,e,i,r){let n;let a=(0,h.g)().gantt,o=(0,h.g)().securityLevel;"sandbox"===o&&(n=(0,p.Ys)("#i"+e));let l="sandbox"===o?(0,p.Ys)(n.nodes()[0].contentDocument.body):(0,p.Ys)("body"),u="sandbox"===o?n.nodes()[0].contentDocument:document,d=u.getElementById(e);void 0===(s=d.parentElement.offsetWidth)&&(s=1200),void 0!==a.useWidth&&(s=a.useWidth);let m=r.db.getTasks(),y=[];for(let t of m)y.push(t.type);y=function(t){let e={},i=[];for(let r=0,n=t.length;r<n;++r)Object.prototype.hasOwnProperty.call(e,t[r])||(e[t[r]]=!0,i.push(t[r]));return i}(y);let k={},g=2*a.topPadding;if("compact"===r.db.getDisplayMode()||"compact"===a.displayMode){let t={};for(let e of m)void 0===t[e.section]?t[e.section]=[e]:t[e.section].push(e);let e=0;for(let i of Object.keys(t)){let r=Q(t[i],e)+1;e+=r,g+=r*(a.barHeight+a.barGap),k[i]=r}}else for(let t of(g+=m.length*(a.barHeight+a.barGap),y))k[t]=m.filter(e=>e.type===t).length;d.setAttribute("viewBox","0 0 "+s+" "+g);let v=l.select(`[id="${e}"]`),b=(0,p.Xf)().domain([(0,p.VV$)(m,function(t){return t.startTime}),(0,p.Fp7)(m,function(t){return t.endTime})]).rangeRound([0,s-a.leftPadding-a.rightPadding]);m.sort(function(t,e){let i=t.startTime,r=e.startTime,n=0;return i>r?n=1:i<r&&(n=-1),n}),function(t,i,n){let s=a.barHeight,o=s+a.barGap,l=a.topPadding,d=a.leftPadding;(0,p.BYU)().domain([0,y.length]).range(["#00B9FA","#F95002"]).interpolate(p.JHv),function(t,e,i,n,s,o,l,u){let d=o.reduce((t,{startTime:e})=>t?Math.min(t,e):e,0),h=o.reduce((t,{endTime:e})=>t?Math.max(t,e):e,0),f=r.db.getDateFormat();if(!d||!h)return;let m=[],p=null,y=c(d);for(;y.valueOf()<=h;)r.db.isInvalidDate(y,f,l,u)?p?p.end=y:p={start:y,end:y}:p&&(m.push(p),p=null),y=y.add(1,"d");let k=v.append("g").selectAll("rect").data(m).enter();k.append("rect").attr("id",function(t){return"exclude-"+t.start.format("YYYY-MM-DD")}).attr("x",function(t){return b(t.start)+i}).attr("y",a.gridLineStartPadding).attr("width",function(t){let e=t.end.add(1,"day");return b(e)-b(t.start)}).attr("height",s-e-a.gridLineStartPadding).attr("transform-origin",function(e,r){return(b(e.start)+i+.5*(b(e.end)-b(e.start))).toString()+"px "+(r*t+.5*s).toString()+"px"}).attr("class","exclude-range")}(o,l,d,0,n,t,r.db.getExcludes(),r.db.getIncludes()),function(t,e,i,n){let s=(0,p.LLu)(b).tickSize(-n+e+a.gridLineStartPadding).tickFormat((0,p.i$Z)(r.db.getAxisFormat()||a.axisFormat||"%Y-%m-%d")),o=/^([1-9]\d*)(minute|hour|day|week|month)$/.exec(r.db.getTickInterval()||a.tickInterval);if(null!==o){let t=o[1],e=o[2];switch(e){case"minute":s.ticks(p.Z_i.every(t));break;case"hour":s.ticks(p.WQD.every(t));break;case"day":s.ticks(p.rr1.every(t));break;case"week":s.ticks(p.NGh.every(t));break;case"month":s.ticks(p.F0B.every(t))}}if(v.append("g").attr("class","grid").attr("transform","translate("+t+", "+(n-50)+")").call(s).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),r.db.topAxisEnabled()||a.topAxis){let i=(0,p.F5q)(b).tickSize(-n+e+a.gridLineStartPadding).tickFormat((0,p.i$Z)(r.db.getAxisFormat()||a.axisFormat||"%Y-%m-%d"));if(null!==o){let t=o[1],e=o[2];switch(e){case"minute":i.ticks(p.Z_i.every(t));break;case"hour":i.ticks(p.WQD.every(t));break;case"day":i.ticks(p.rr1.every(t));break;case"week":i.ticks(p.NGh.every(t));break;case"month":i.ticks(p.F0B.every(t))}}v.append("g").attr("class","grid").attr("transform","translate("+t+", "+e+")").call(i).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}(d,l,0,n),function(t,i,n,s,o,c,l){let u=[...new Set(t.map(t=>t.order))],d=u.map(e=>t.find(t=>t.order===e));v.append("g").selectAll("rect").data(d).enter().append("rect").attr("x",0).attr("y",function(t,e){return t.order*i+n-2}).attr("width",function(){return l-a.rightPadding/2}).attr("height",i).attr("class",function(t){for(let[e,i]of y.entries())if(t.type===i)return"section section"+e%a.numberSectionStyles;return"section section0"});let f=v.append("g").selectAll("rect").data(t).enter(),m=r.db.getLinks();f.append("rect").attr("id",function(t){return t.id}).attr("rx",3).attr("ry",3).attr("x",function(t){return t.milestone?b(t.startTime)+s+.5*(b(t.endTime)-b(t.startTime))-.5*o:b(t.startTime)+s}).attr("y",function(t,e){return t.order*i+n}).attr("width",function(t){return t.milestone?o:b(t.renderEndTime||t.endTime)-b(t.startTime)}).attr("height",o).attr("transform-origin",function(t,e){return e=t.order,(b(t.startTime)+s+.5*(b(t.endTime)-b(t.startTime))).toString()+"px "+(e*i+n+.5*o).toString()+"px"}).attr("class",function(t){let e="";t.classes.length>0&&(e=t.classes.join(" "));let i=0;for(let[e,r]of y.entries())t.type===r&&(i=e%a.numberSectionStyles);let r="";return t.active?t.crit?r+=" activeCrit":r=" active":t.done?r=t.crit?" doneCrit":" done":t.crit&&(r+=" crit"),0===r.length&&(r=" task"),t.milestone&&(r=" milestone "+r),"task"+(r+=i+" "+e)}),f.append("text").attr("id",function(t){return t.id+"-text"}).text(function(t){return t.task}).attr("font-size",a.fontSize).attr("x",function(t){let e=b(t.startTime),i=b(t.renderEndTime||t.endTime);t.milestone&&(e+=.5*(b(t.endTime)-b(t.startTime))-.5*o),t.milestone&&(i=e+o);let r=this.getBBox().width;return r>i-e?i+r+1.5*a.leftPadding>l?e+s-5:i+s+5:(i-e)/2+e+s}).attr("y",function(t,e){return t.order*i+a.barHeight/2+(a.fontSize/2-2)+n}).attr("text-height",o).attr("class",function(t){let e=b(t.startTime),i=b(t.endTime);t.milestone&&(i=e+o);let r=this.getBBox().width,n="";t.classes.length>0&&(n=t.classes.join(" "));let s=0;for(let[e,i]of y.entries())t.type===i&&(s=e%a.numberSectionStyles);let c="";return(t.active&&(c=t.crit?"activeCritText"+s:"activeText"+s),t.done?c=t.crit?c+" doneCritText"+s:c+" doneText"+s:t.crit&&(c=c+" critText"+s),t.milestone&&(c+=" milestoneText"),r>i-e)?i+r+1.5*a.leftPadding>l?n+" taskTextOutsideLeft taskTextOutside"+s+" "+c:n+" taskTextOutsideRight taskTextOutside"+s+" "+c+" width-"+r:n+" taskText taskText"+s+" "+c+" width-"+r});let k=(0,h.g)().securityLevel;if("sandbox"===k){let t;t=(0,p.Ys)("#i"+e);let i=t.nodes()[0].contentDocument;f.filter(function(t){return void 0!==m[t.id]}).each(function(t){var e=i.querySelector("#"+t.id),r=i.querySelector("#"+t.id+"-text");let n=e.parentNode;var s=i.createElement("a");s.setAttribute("xlink:href",m[t.id]),s.setAttribute("target","_top"),n.appendChild(s),s.appendChild(e),s.appendChild(r)})}}(t,o,l,d,s,0,i),function(t,e){let i=0,r=Object.keys(k).map(t=>[t,k[t]]);v.append("g").selectAll("text").data(r).enter().append(function(t){let e=t[0].split(h.e.lineBreakRegex),i=-(e.length-1)/2,r=u.createElementNS("http://www.w3.org/2000/svg","text");for(let[t,n]of(r.setAttribute("dy",i+"em"),e.entries())){let e=u.createElementNS("http://www.w3.org/2000/svg","tspan");e.setAttribute("alignment-baseline","central"),e.setAttribute("x","10"),t>0&&e.setAttribute("dy","1em"),e.textContent=n,r.appendChild(e)}return r}).attr("x",10).attr("y",function(n,s){if(!(s>0))return n[1]*t/2+e;for(let a=0;a<s;a++)return i+=r[s-1][1],n[1]*t/2+i*t+e}).attr("font-size",a.sectionFontSize).attr("class",function(t){for(let[e,i]of y.entries())if(t[0]===i)return"sectionTitle sectionTitle"+e%a.numberSectionStyles;return"sectionTitle"})}(o,l),function(t,e,i,n){let s=r.db.getTodayMarker();if("off"===s)return;let o=v.append("g").attr("class","today"),c=new Date,l=o.append("line");l.attr("x1",b(c)+t).attr("x2",b(c)+t).attr("y1",a.titleTopMargin).attr("y2",n-a.titleTopMargin).attr("class","today"),""!==s&&l.attr("style",s.replace(/,/g,";"))}(d,0,0,n)}(m,s,g),(0,f.k)(v,g,s,a.useMaxWidth),v.append("text").text(r.db.getDiagramTitle()).attr("x",s/2).attr("y",a.titleTopMargin).attr("class","titleText")}},styles:J}}}]);