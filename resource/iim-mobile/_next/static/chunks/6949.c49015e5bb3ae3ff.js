"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6949],{6949:function(t,e,i){i.r(e),i.d(e,{diagram:function(){return P}});var r=i(9828),s=i(347),n=i(7128),a=i(9526);i(7326),i(6902),i(458);var l=function(){var t=function(t,e,i,r){for(i=i||{},r=t.length;r--;i[t[r]]=e);return i},e=[1,2],i=[1,5],r=[6,9,11,17,18,20,22,23,24,26],s=[1,15],n=[1,16],a=[1,17],l=[1,18],o=[1,19],c=[1,20],h=[1,24],u=[4,6,9,11,17,18,20,22,23,24,26],y={trace:function(){},yy:{},symbols_:{error:2,start:3,journey:4,document:5,EOF:6,directive:7,line:8,SPACE:9,statement:10,NEWLINE:11,openDirective:12,typeDirective:13,closeDirective:14,":":15,argDirective:16,title:17,acc_title:18,acc_title_value:19,acc_descr:20,acc_descr_value:21,acc_descr_multiline_value:22,section:23,taskName:24,taskData:25,open_directive:26,type_directive:27,arg_directive:28,close_directive:29,$accept:0,$end:1},terminals_:{2:"error",4:"journey",6:"EOF",9:"SPACE",11:"NEWLINE",15:":",17:"title",18:"acc_title",19:"acc_title_value",20:"acc_descr",21:"acc_descr_value",22:"acc_descr_multiline_value",23:"section",24:"taskName",25:"taskData",26:"open_directive",27:"type_directive",28:"arg_directive",29:"close_directive"},productions_:[0,[3,3],[3,2],[5,0],[5,2],[8,2],[8,1],[8,1],[8,1],[7,4],[7,6],[10,1],[10,2],[10,2],[10,1],[10,1],[10,2],[10,1],[12,1],[13,1],[16,1],[14,1]],performAction:function(t,e,i,r,s,n,a){var l=n.length-1;switch(s){case 1:return n[l-1];case 3:case 7:case 8:this.$=[];break;case 4:n[l-1].push(n[l]),this.$=n[l-1];break;case 5:case 6:this.$=n[l];break;case 11:r.setDiagramTitle(n[l].substr(6)),this.$=n[l].substr(6);break;case 12:this.$=n[l].trim(),r.setAccTitle(this.$);break;case 13:case 14:this.$=n[l].trim(),r.setAccDescription(this.$);break;case 15:r.addSection(n[l].substr(8)),this.$=n[l].substr(8);break;case 16:r.addTask(n[l-1],n[l]),this.$="task";break;case 18:r.parseDirective("%%{","open_directive");break;case 19:r.parseDirective(n[l],"type_directive");break;case 20:n[l]=n[l].trim().replace(/'/g,'"'),r.parseDirective(n[l],"arg_directive");break;case 21:r.parseDirective("}%%","close_directive","journey")}},table:[{3:1,4:e,7:3,12:4,26:i},{1:[3]},t(r,[2,3],{5:6}),{3:7,4:e,7:3,12:4,26:i},{13:8,27:[1,9]},{27:[2,18]},{6:[1,10],7:21,8:11,9:[1,12],10:13,11:[1,14],12:4,17:s,18:n,20:a,22:l,23:o,24:c,26:i},{1:[2,2]},{14:22,15:[1,23],29:h},t([15,29],[2,19]),t(r,[2,8],{1:[2,1]}),t(r,[2,4]),{7:21,10:25,12:4,17:s,18:n,20:a,22:l,23:o,24:c,26:i},t(r,[2,6]),t(r,[2,7]),t(r,[2,11]),{19:[1,26]},{21:[1,27]},t(r,[2,14]),t(r,[2,15]),{25:[1,28]},t(r,[2,17]),{11:[1,29]},{16:30,28:[1,31]},{11:[2,21]},t(r,[2,5]),t(r,[2,12]),t(r,[2,13]),t(r,[2,16]),t(u,[2,9]),{14:32,29:h},{29:[2,20]},{11:[1,33]},t(u,[2,10])],defaultActions:{5:[2,18],7:[2,2],24:[2,21],31:[2,20]},parseError:function(t,e){if(e.recoverable)this.trace(t);else{var i=Error(t);throw i.hash=e,i}},parse:function(t){var e=this,i=[0],r=[],s=[null],n=[],a=this.table,l="",o=0,c=0,h=n.slice.call(arguments,1),u=Object.create(this.lexer),y={yy:{}};for(var p in this.yy)Object.prototype.hasOwnProperty.call(this.yy,p)&&(y.yy[p]=this.yy[p]);u.setInput(t,y.yy),y.yy.lexer=u,y.yy.parser=this,void 0===u.yylloc&&(u.yylloc={});var d=u.yylloc;n.push(d);var f=u.options&&u.options.ranges;"function"==typeof y.yy.parseError?this.parseError=y.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var g,x,m,k,_,b,v,w,$={};;){if(x=i[i.length-1],this.defaultActions[x]?m=this.defaultActions[x]:(null==g&&(g=function(){var t;return"number"!=typeof(t=r.pop()||u.lex()||1)&&(t instanceof Array&&(t=(r=t).pop()),t=e.symbols_[t]||t),t}()),m=a[x]&&a[x][g]),void 0===m||!m.length||!m[0]){var M="";for(_ in w=[],a[x])this.terminals_[_]&&_>2&&w.push("'"+this.terminals_[_]+"'");M=u.showPosition?"Parse error on line "+(o+1)+":\n"+u.showPosition()+"\nExpecting "+w.join(", ")+", got '"+(this.terminals_[g]||g)+"'":"Parse error on line "+(o+1)+": Unexpected "+(1==g?"end of input":"'"+(this.terminals_[g]||g)+"'"),this.parseError(M,{text:u.match,token:this.terminals_[g]||g,line:u.yylineno,loc:d,expected:w})}if(m[0]instanceof Array&&m.length>1)throw Error("Parse Error: multiple actions possible at state: "+x+", token: "+g);switch(m[0]){case 1:i.push(g),s.push(u.yytext),n.push(u.yylloc),i.push(m[1]),g=null,c=u.yyleng,l=u.yytext,o=u.yylineno,d=u.yylloc;break;case 2:if(b=this.productions_[m[1]][1],$.$=s[s.length-b],$._$={first_line:n[n.length-(b||1)].first_line,last_line:n[n.length-1].last_line,first_column:n[n.length-(b||1)].first_column,last_column:n[n.length-1].last_column},f&&($._$.range=[n[n.length-(b||1)].range[0],n[n.length-1].range[1]]),void 0!==(k=this.performAction.apply($,[l,c,o,y.yy,m[1],s,n].concat(h))))return k;b&&(i=i.slice(0,-1*b*2),s=s.slice(0,-1*b),n=n.slice(0,-1*b)),i.push(this.productions_[m[1]][0]),s.push($.$),n.push($._$),v=a[i[i.length-2]][i[i.length-1]],i.push(v);break;case 3:return!0}}return!0}};function p(){this.yy={}}return y.lexer={EOF:1,parseError:function(t,e){if(this.yy.parser)this.yy.parser.parseError(t,e);else throw Error(t)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,i=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var s=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===r.length?this.yylloc.first_column:0)+r[r.length-i.length].length-i[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[s[0],s[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var i,r,s;if(this.options.backtrack_lexer&&(s={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(s.yylloc.range=this.yylloc.range.slice(0))),(r=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=r.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:r?r[r.length-1].length-r[r.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],i=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack)for(var n in s)this[n]=s[n];return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var t,e,i,r,s=this._currentRules(),n=0;n<s.length;n++)if((i=this._input.match(this.rules[s[n]]))&&(!e||i[0].length>e[0].length)){if(e=i,r=n,this.options.backtrack_lexer){if(!1!==(t=this.test_match(i,s[n])))return t;if(!this._backtrack)return!1;e=!1;continue}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,s[r]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,i,r){switch(i){case 0:return this.begin("open_directive"),26;case 1:return this.begin("type_directive"),27;case 2:return this.popState(),this.begin("arg_directive"),15;case 3:return this.popState(),this.popState(),29;case 4:return 28;case 5:case 6:case 8:case 9:break;case 7:return 11;case 10:return 4;case 11:return 17;case 12:return this.begin("acc_title"),18;case 13:return this.popState(),"acc_title_value";case 14:return this.begin("acc_descr"),20;case 15:return this.popState(),"acc_descr_value";case 16:this.begin("acc_descr_multiline");break;case 17:this.popState();break;case 18:return"acc_descr_multiline_value";case 19:return 23;case 20:return 24;case 21:return 25;case 22:return 15;case 23:return 6;case 24:return"INVALID"}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:journey\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{open_directive:{rules:[1],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},acc_descr_multiline:{rules:[17,18],inclusive:!1},acc_descr:{rules:[15],inclusive:!1},acc_title:{rules:[13],inclusive:!1},INITIAL:{rules:[0,5,6,7,8,9,10,11,12,14,16,19,20,21,22,23,24],inclusive:!0}}},p.prototype=y,y.Parser=p,new p}();l.parser=l;let o="",c=[],h=[],u=[],y=function(){let t=[];h.forEach(e=>{e.people&&t.push(...e.people)});let e=new Set(t);return[...e].sort()},p=function(){let t=!0;for(let[e,i]of u.entries())u[e].processed,t=t&&i.processed;return t},d={parseDirective:function(t,e,i){r.m.parseDirective(this,t,e,i)},getConfig:()=>(0,s.g)().journey,clear:function(){c.length=0,h.length=0,o="",u.length=0,(0,s.y)()},setDiagramTitle:s.w,getDiagramTitle:s.x,setAccTitle:s.o,getAccTitle:s.p,setAccDescription:s.v,getAccDescription:s.q,addSection:function(t){o=t,c.push(t)},getSections:function(){return c},getTasks:function(){let t=p(),e=0;for(;!t&&e<100;)t=p(),e++;return h.push(...u),h},addTask:function(t,e){let i=e.substr(1).split(":"),r=0,s=[];1===i.length?(r=Number(i[0]),s=[]):(r=Number(i[0]),s=i[1].split(","));let n=s.map(t=>t.trim()),a={section:o,type:o,people:n,task:t,score:r};u.push(a)},addTaskOrg:function(t){let e={section:o,type:o,description:t,task:t,classes:[]};h.push(e)},getActors:function(){return y()}},f=t=>`.label {
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
    color: ${t.textColor};
  }
  .mouth {
    stroke: #666;
  }

  line {
    stroke: ${t.textColor}
  }

  .legend {
    fill: ${t.textColor};
  }

  .label text {
    fill: #333;
  }
  .label {
    color: ${t.textColor}
  }

  .face {
    ${t.faceColor?`fill: ${t.faceColor}`:"fill: #FFF8DC"};
    stroke: #999;
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${t.mainBkg};
    stroke: ${t.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${t.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${t.lineColor};
    stroke-width: 1.5px;
  }

  .flowchart-link {
    stroke: ${t.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${t.edgeLabelBackground};
    rect {
      opacity: 0.5;
    }
    text-align: center;
  }

  .cluster rect {
  }

  .cluster text {
    fill: ${t.titleColor};
  }

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
    font-size: 12px;
    background: ${t.tertiaryColor};
    border: 1px solid ${t.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .task-type-0, .section-type-0  {
    ${t.fillType0?`fill: ${t.fillType0}`:""};
  }
  .task-type-1, .section-type-1  {
    ${t.fillType0?`fill: ${t.fillType1}`:""};
  }
  .task-type-2, .section-type-2  {
    ${t.fillType0?`fill: ${t.fillType2}`:""};
  }
  .task-type-3, .section-type-3  {
    ${t.fillType0?`fill: ${t.fillType3}`:""};
  }
  .task-type-4, .section-type-4  {
    ${t.fillType0?`fill: ${t.fillType4}`:""};
  }
  .task-type-5, .section-type-5  {
    ${t.fillType0?`fill: ${t.fillType5}`:""};
  }
  .task-type-6, .section-type-6  {
    ${t.fillType0?`fill: ${t.fillType6}`:""};
  }
  .task-type-7, .section-type-7  {
    ${t.fillType0?`fill: ${t.fillType7}`:""};
  }

  .actor-0 {
    ${t.actor0?`fill: ${t.actor0}`:""};
  }
  .actor-1 {
    ${t.actor1?`fill: ${t.actor1}`:""};
  }
  .actor-2 {
    ${t.actor2?`fill: ${t.actor2}`:""};
  }
  .actor-3 {
    ${t.actor3?`fill: ${t.actor3}`:""};
  }
  .actor-4 {
    ${t.actor4?`fill: ${t.actor4}`:""};
  }
  .actor-5 {
    ${t.actor5?`fill: ${t.actor5}`:""};
  }
`,g=function(t,e){let i=t.append("rect");return i.attr("x",e.x),i.attr("y",e.y),i.attr("fill",e.fill),i.attr("stroke",e.stroke),i.attr("width",e.width),i.attr("height",e.height),i.attr("rx",e.rx),i.attr("ry",e.ry),void 0!==e.class&&i.attr("class",e.class),i},x=function(t,e){let i=t.append("circle").attr("cx",e.cx).attr("cy",e.cy).attr("class","face").attr("r",15).attr("stroke-width",2).attr("overflow","visible"),r=t.append("g");return r.append("circle").attr("cx",e.cx-5).attr("cy",e.cy-5).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),r.append("circle").attr("cx",e.cx+5).attr("cy",e.cy-5).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),e.score>3?function(t){let i=(0,n.Nb1)().startAngle(Math.PI/2).endAngle(3*(Math.PI/2)).innerRadius(7.5).outerRadius(15/2.2);t.append("path").attr("class","mouth").attr("d",i).attr("transform","translate("+e.cx+","+(e.cy+2)+")")}(r):e.score<3?function(t){let i=(0,n.Nb1)().startAngle(3*Math.PI/2).endAngle(5*(Math.PI/2)).innerRadius(7.5).outerRadius(15/2.2);t.append("path").attr("class","mouth").attr("d",i).attr("transform","translate("+e.cx+","+(e.cy+7)+")")}(r):function(t){t.append("line").attr("class","mouth").attr("stroke",2).attr("x1",e.cx-5).attr("y1",e.cy+7).attr("x2",e.cx+5).attr("y2",e.cy+7).attr("class","mouth").attr("stroke-width","1px").attr("stroke","#666")}(r),i},m=function(t,e){let i=t.append("circle");return i.attr("cx",e.cx),i.attr("cy",e.cy),i.attr("class","actor-"+e.pos),i.attr("fill",e.fill),i.attr("stroke",e.stroke),i.attr("r",e.r),void 0!==i.class&&i.attr("class",i.class),void 0!==e.title&&i.append("title").text(e.title),i},k=function(t,e){let i=e.text.replace(/<br\s*\/?>/gi," "),r=t.append("text");r.attr("x",e.x),r.attr("y",e.y),r.attr("class","legend"),r.style("text-anchor",e.anchor),void 0!==e.class&&r.attr("class",e.class);let s=r.append("tspan");return s.attr("x",e.x+2*e.textMargin),s.text(i),r},_=-1,b=function(){return{x:0,y:0,width:100,anchor:"start",height:100,rx:0,ry:0}},v=function(){function t(t,e,i,s,n,a,l,o){let c=e.append("text").attr("x",i+n/2).attr("y",s+a/2+5).style("font-color",o).style("text-anchor","middle").text(t);r(c,l)}function e(t,e,i,s,n,a,l,o,c){let{taskFontSize:h,taskFontFamily:u}=o,y=t.split(/<br\s*\/?>/gi);for(let t=0;t<y.length;t++){let o=t*h-h*(y.length-1)/2,p=e.append("text").attr("x",i+n/2).attr("y",s).attr("fill",c).style("text-anchor","middle").style("font-size",h).style("font-family",u);p.append("tspan").attr("x",i+n/2).attr("dy",o).text(y[t]),p.attr("y",s+a/2).attr("dominant-baseline","central").attr("alignment-baseline","central"),r(p,l)}}function i(t,i,s,n,a,l,o,c){let h=i.append("switch"),u=h.append("foreignObject").attr("x",s).attr("y",n).attr("width",a).attr("height",l).attr("position","fixed"),y=u.append("xhtml:div").style("display","table").style("height","100%").style("width","100%");y.append("div").attr("class","label").style("display","table-cell").style("text-align","center").style("vertical-align","middle").text(t),e(t,h,s,n,a,l,o,c),r(y,o)}function r(t,e){for(let i in e)i in e&&t.attr(i,e[i])}return function(r){return"fo"===r.textPlacement?i:"old"===r.textPlacement?t:e}}(),w={drawRect:g,drawCircle:m,drawSection:function(t,e,i){let r=t.append("g"),s=b();s.x=e.x,s.y=e.y,s.fill=e.fill,s.width=i.width*e.taskCount+i.diagramMarginX*(e.taskCount-1),s.height=i.height,s.class="journey-section section-type-"+e.num,s.rx=3,s.ry=3,g(r,s),v(i)(e.text,r,s.x,s.y,s.width,s.height,{class:"journey-section section-type-"+e.num},i,e.colour)},drawText:k,drawLabel:function(t,e){var i,r;let s=t.append("polygon");s.attr("points",(i=e.x)+","+(r=e.y)+" "+(i+50)+","+r+" "+(i+50)+","+(r+20-7)+" "+(i+50-8.4)+","+(r+20)+" "+i+","+(r+20)),s.attr("class","labelBox"),e.y=e.y+e.labelMargin,e.x=e.x+.5*e.labelMargin,k(t,e)},drawTask:function(t,e,i){let r=e.x+i.width/2,s=t.append("g");_++,s.append("line").attr("id","task"+_).attr("x1",r).attr("y1",e.y).attr("x2",r).attr("y2",450).attr("class","task-line").attr("stroke-width","1px").attr("stroke-dasharray","4 2").attr("stroke","#666"),x(s,{cx:r,cy:300+(5-e.score)*30,score:e.score});let n=b();n.x=e.x,n.y=e.y,n.fill=e.fill,n.width=i.width,n.height=i.height,n.class="task task-type-"+e.num,n.rx=3,n.ry=3,g(s,n);let a=e.x+14;e.people.forEach(t=>{let i=e.actors[t].color,r={cx:a,cy:e.y,r:7,fill:i,stroke:"#000",title:t,pos:e.actors[t].position};m(s,r),a+=10}),v(i)(e.task,s,n.x,n.y,n.width,n.height,{class:"task"},i,e.colour)},drawBackgroundRect:function(t,e){let i=g(t,{x:e.startx,y:e.starty,width:e.stopx-e.startx,height:e.stopy-e.starty,fill:e.fill,class:"rect"});i.lower()},getTextObj:function(){return{x:0,y:0,fill:void 0,"text-anchor":"start",width:100,height:100,textMargin:0,rx:0,ry:0}},getNoteRect:b,initGraphics:function(t){t.append("defs").append("marker").attr("id","arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z")}},$={},M=(0,s.g)().journey,T=M.leftMargin,S={data:{startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},verticalPos:0,sequenceItems:[],init:function(){this.sequenceItems=[],this.data={startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},this.verticalPos=0},updateVal:function(t,e,i,r){void 0===t[e]?t[e]=i:t[e]=r(i,t[e])},updateBounds:function(t,e,i,r){let n=(0,s.g)().journey,a=this,l=0;this.sequenceItems.forEach(function(s){l++;let o=a.sequenceItems.length-l+1;a.updateVal(s,"starty",e-o*n.boxMargin,Math.min),a.updateVal(s,"stopy",r+o*n.boxMargin,Math.max),a.updateVal(S.data,"startx",t-o*n.boxMargin,Math.min),a.updateVal(S.data,"stopx",i+o*n.boxMargin,Math.max),a.updateVal(s,"startx",t-o*n.boxMargin,Math.min),a.updateVal(s,"stopx",i+o*n.boxMargin,Math.max),a.updateVal(S.data,"starty",e-o*n.boxMargin,Math.min),a.updateVal(S.data,"stopy",r+o*n.boxMargin,Math.max)})},insert:function(t,e,i,r){let s=Math.min(t,i),n=Math.max(t,i),a=Math.min(e,r),l=Math.max(e,r);this.updateVal(S.data,"startx",s,Math.min),this.updateVal(S.data,"starty",a,Math.min),this.updateVal(S.data,"stopx",n,Math.max),this.updateVal(S.data,"stopy",l,Math.max),this.updateBounds(s,a,n,l)},bumpVerticalPos:function(t){this.verticalPos=this.verticalPos+t,this.data.stopy=this.verticalPos},getVerticalPos:function(){return this.verticalPos},getBounds:function(){return this.data}},E=M.sectionFills,A=M.sectionColours,I=function(t,e,i){let r=(0,s.g)().journey,n="",a=2*r.height+r.diagramMarginY,l=i+a,o=0,c="#CCC",h="black",u=0;for(let[i,s]of e.entries()){if(n!==s.section){c=E[o%E.length],u=o%E.length,h=A[o%A.length];let a=0,l=s.section;for(let t=i;t<e.length;t++)if(e[t].section==l)a+=1;else break;let y={x:i*r.taskMargin+i*r.width+T,y:50,text:s.section,fill:c,num:u,colour:h,taskCount:a};w.drawSection(t,y,r),n=s.section,o++}let a=s.people.reduce((t,e)=>($[e]&&(t[e]=$[e]),t),{});s.x=i*r.taskMargin+i*r.width+T,s.y=l,s.width=r.diagramMarginX,s.height=r.diagramMarginY,s.colour=h,s.fill=c,s.num=u,s.actors=a,w.drawTask(t,s,r),S.insert(s.x,s.y,s.x+s.width+r.taskMargin,450)}},C={setConf:function(t){let e=Object.keys(t);e.forEach(function(e){M[e]=t[e]})},draw:function(t,e,i,r){let l;let o=(0,s.g)().journey;r.db.clear(),r.parser.parse(t+"\n");let c=(0,s.g)().securityLevel;"sandbox"===c&&(l=(0,n.Ys)("#i"+e));let h="sandbox"===c?(0,n.Ys)(l.nodes()[0].contentDocument.body):(0,n.Ys)("body");S.init();let u=h.select("#"+e);w.initGraphics(u);let y=r.db.getTasks(),p=r.db.getDiagramTitle(),d=r.db.getActors();for(let t in $)delete $[t];let f=0;d.forEach(t=>{$[t]={color:o.actorColours[f%o.actorColours.length],position:f},f++}),function(t){let e=(0,s.g)().journey,i=60;Object.keys($).forEach(r=>{let s=$[r].color,n={cx:20,cy:i,r:7,fill:s,stroke:"#000",pos:$[r].position};w.drawCircle(t,n);let a={x:40,y:i+7,fill:"#666",text:r,textMargin:5|e.boxTextMargin};w.drawText(t,a),i+=20})}(u),S.insert(0,0,T,50*Object.keys($).length),I(u,y,0);let g=S.getBounds();p&&u.append("text").text(p).attr("x",T).attr("font-size","4ex").attr("font-weight","bold").attr("y",25);let x=g.stopy-g.starty+2*o.diagramMarginY,m=T+g.stopx+2*o.diagramMarginX;(0,a.k)(u,x,m,o.useMaxWidth),u.append("line").attr("x1",T).attr("y1",4*o.height).attr("x2",m-T-4).attr("y2",4*o.height).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#arrowhead)");let k=p?70:0;u.attr("viewBox",`${g.startx} -25 ${m} ${x+k}`),u.attr("preserveAspectRatio","xMinYMin meet"),u.attr("height",x+k+25)}},P={parser:l,db:d,renderer:C,styles:f,init:t=>{C.setConf(t.journey),d.clear()}}}}]);