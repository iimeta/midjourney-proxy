"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4993],{4993:function(e,t,r){r.r(t),r.d(t,{diagram:function(){return C}});var a=r(7471),o=r(7128),l=r(9803),i=r(347),n=r(9526),s=r(5816);r(7326),r(1937),r(6902),r(458);let d=(e,t,r)=>{let{parentById:a}=r,o=new Set,l=e;for(;l;){if(o.add(l),l===t)return l;l=a[l]}for(l=t;l;){if(o.has(l))return l;l=a[l]}return"root"},c=new s,h={},p={},u={},b=function(e,t,r,a,o,s,d){let c=r.select(`[id="${t}"]`),h=c.insert("g").attr("class","nodes"),p=Object.keys(e);return p.forEach(function(t){let r,d;let c=e[t],p="default";c.classes.length>0&&(p=c.classes.join(" ")),p+=" flowchart-label";let b=(0,n.n)(c.styles),g=void 0!==c.text?c.text:c.id,y={width:0,height:0},w=[{id:c.id+"-west",layoutOptions:{"port.side":"WEST"}},{id:c.id+"-east",layoutOptions:{"port.side":"EAST"}},{id:c.id+"-south",layoutOptions:{"port.side":"SOUTH"}},{id:c.id+"-north",layoutOptions:{"port.side":"NORTH"}}],f=0,k="",x={};switch(c.type){case"round":f=5,k="rect";break;case"square":case"group":default:k="rect";break;case"diamond":k="question",x={portConstraints:"FIXED_SIDE"};break;case"hexagon":k="hexagon";break;case"odd":case"odd_right":k="rect_left_inv_arrow";break;case"lean_right":k="lean_right";break;case"lean_left":k="lean_left";break;case"trapezoid":k="trapezoid";break;case"inv_trapezoid":k="inv_trapezoid";break;case"circle":k="circle";break;case"ellipse":k="ellipse";break;case"stadium":k="stadium";break;case"subroutine":k="subroutine";break;case"cylinder":k="cylinder";break;case"doublecircle":k="doublecircle"}let m={labelStyle:b.labelStyle,shape:k,labelText:g,labelType:c.labelType,rx:f,ry:f,class:p,style:b.style,id:c.id,link:c.link,linkTarget:c.linkTarget,tooltip:o.db.getTooltip(c.id)||"",domId:o.db.lookUpDomId(c.id),haveCallback:c.haveCallback,width:"group"===c.type?500:void 0,dir:c.dir,type:c.type,props:c.props,padding:(0,i.g)().flowchart.padding};if("group"!==m.type)r=(d=(0,l.e)(h,m,c.dir)).node().getBBox();else{a.createElementNS("http://www.w3.org/2000/svg","text");let{shapeSvg:e,bbox:t}=(0,l.l)(h,m,void 0,!0);y.width=t.width,y.wrappingWidth=(0,i.g)().flowchart.wrappingWidth,y.height=t.height,y.labelNode=e.node(),m.labelData=y}let _={id:c.id,ports:"diamond"===c.type?w:[],layoutOptions:x,labelText:g,labelData:y,domId:o.db.lookUpDomId(c.id),width:null==r?void 0:r.width,height:null==r?void 0:r.height,type:c.type,el:d,parent:s.parentById[c.id]};u[m.id]=_}),d},g=(e,t,r)=>{let a={TB:{in:{north:"north"},out:{south:"west",west:"east",east:"south"}},LR:{in:{west:"west"},out:{east:"south",south:"north",north:"east"}},RL:{in:{east:"east"},out:{west:"north",north:"south",south:"west"}},BT:{in:{south:"south"},out:{north:"east",east:"west",west:"north"}}};return a.TD=a.TB,i.l.info("abc88",r,t,e),a[r][t][e]},y=(e,t,r)=>{if(i.l.info("getNextPort abc88",{node:e,edgeDirection:t,graphDirection:r}),!h[e])switch(r){case"TB":case"TD":h[e]={inPosition:"north",outPosition:"south"};break;case"BT":h[e]={inPosition:"south",outPosition:"north"};break;case"RL":h[e]={inPosition:"east",outPosition:"west"};break;case"LR":h[e]={inPosition:"west",outPosition:"east"}}let a="in"===t?h[e].inPosition:h[e].outPosition;return"in"===t?h[e].inPosition=g(h[e].inPosition,t,r):h[e].outPosition=g(h[e].outPosition,t,r),a},w=(e,t)=>{let r=e.start,a=e.end,o=r,l=a,i=u[r],n=u[a];return i&&n?("diamond"===i.type&&(r=`${r}-${y(r,"out",t)}`),"diamond"===n.type&&(a=`${a}-${y(a,"in",t)}`),{source:r,target:a,sourceId:o,targetId:l}):{source:r,target:a}},f=function(e,t,r,a){let s,d;i.l.info("abc78 edges = ",e);let c=a.insert("g").attr("class","edgeLabels"),h={},u=t.db.getDirection();if(void 0!==e.defaultStyle){let t=(0,n.n)(e.defaultStyle);s=t.style,d=t.labelStyle}return e.forEach(function(t){var a="L-"+t.start+"-"+t.end;void 0===h[a]?(h[a]=0,i.l.info("abc78 new entry",a,h[a])):(h[a]++,i.l.info("abc78 new entry",a,h[a]));let b=a+"-"+h[a];i.l.info("abc78 new link id to be used is",a,b,h[a]);var g="LS-"+t.start,y="LE-"+t.end;let f={style:"",labelStyle:""};switch(f.minlen=t.length||1,"arrow_open"===t.type?f.arrowhead="none":f.arrowhead="normal",f.arrowTypeStart="arrow_open",f.arrowTypeEnd="arrow_open",t.type){case"double_arrow_cross":f.arrowTypeStart="arrow_cross";case"arrow_cross":f.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":f.arrowTypeStart="arrow_point";case"arrow_point":f.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":f.arrowTypeStart="arrow_circle";case"arrow_circle":f.arrowTypeEnd="arrow_circle"}let k="",x="";switch(t.stroke){case"normal":k="fill:none;",void 0!==s&&(k=s),void 0!==d&&(x=d),f.thickness="normal",f.pattern="solid";break;case"dotted":f.thickness="normal",f.pattern="dotted",f.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":f.thickness="thick",f.pattern="solid",f.style="stroke-width: 3.5px;fill:none;"}if(void 0!==t.style){let e=(0,n.n)(t.style);k=e.style,x=e.labelStyle}f.style=f.style+=k,f.labelStyle=f.labelStyle+=x,void 0!==t.interpolate?f.curve=(0,n.o)(t.interpolate,o.c_6):void 0!==e.defaultInterpolate?f.curve=(0,n.o)(e.defaultInterpolate,o.c_6):f.curve=(0,n.o)(p.curve,o.c_6),void 0===t.text?void 0!==t.style&&(f.arrowheadStyle="fill: #333"):(f.arrowheadStyle="fill: #333",f.labelpos="c"),f.labelType=t.labelType,f.label=t.text.replace(i.e.lineBreakRegex,"\n"),void 0===t.style&&(f.style=f.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),f.labelStyle=f.labelStyle.replace("color:","fill:"),f.id=b,f.classes="flowchart-link "+g+" "+y;let m=(0,l.f)(c,f),{source:_,target:v,sourceId:T,targetId:E}=w(t,u);i.l.debug("abc78 source and target",_,v),r.edges.push({id:"e"+t.start+t.end,sources:[_],targets:[v],sourceId:T,targetId:E,labelEl:m,labels:[{width:f.width,height:f.height,orgWidth:f.width,orgHeight:f.height,text:f.label,layoutOptions:{"edgeLabels.inline":"true","edgeLabels.placement":"CENTER"}}],edgeData:f})}),r},k=function(e,t,r,a){let o="";switch(a&&(o=(o=(o=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search).replace(/\(/g,"\\(")).replace(/\)/g,"\\)")),t.arrowTypeStart){case"arrow_cross":e.attr("marker-start","url("+o+"#"+r+"-crossStart)");break;case"arrow_point":e.attr("marker-start","url("+o+"#"+r+"-pointStart)");break;case"arrow_barb":e.attr("marker-start","url("+o+"#"+r+"-barbStart)");break;case"arrow_circle":e.attr("marker-start","url("+o+"#"+r+"-circleStart)");break;case"aggregation":e.attr("marker-start","url("+o+"#"+r+"-aggregationStart)");break;case"extension":e.attr("marker-start","url("+o+"#"+r+"-extensionStart)");break;case"composition":e.attr("marker-start","url("+o+"#"+r+"-compositionStart)");break;case"dependency":e.attr("marker-start","url("+o+"#"+r+"-dependencyStart)");break;case"lollipop":e.attr("marker-start","url("+o+"#"+r+"-lollipopStart)")}switch(t.arrowTypeEnd){case"arrow_cross":e.attr("marker-end","url("+o+"#"+r+"-crossEnd)");break;case"arrow_point":e.attr("marker-end","url("+o+"#"+r+"-pointEnd)");break;case"arrow_barb":e.attr("marker-end","url("+o+"#"+r+"-barbEnd)");break;case"arrow_circle":e.attr("marker-end","url("+o+"#"+r+"-circleEnd)");break;case"aggregation":e.attr("marker-end","url("+o+"#"+r+"-aggregationEnd)");break;case"extension":e.attr("marker-end","url("+o+"#"+r+"-extensionEnd)");break;case"composition":e.attr("marker-end","url("+o+"#"+r+"-compositionEnd)");break;case"dependency":e.attr("marker-end","url("+o+"#"+r+"-dependencyEnd)");break;case"lollipop":e.attr("marker-end","url("+o+"#"+r+"-lollipopEnd)")}},x=function(e){let t={parentById:{},childrenById:{}},r=e.getSubGraphs();return i.l.info("Subgraphs - ",r),r.forEach(function(e){e.nodes.forEach(function(r){t.parentById[r]=e.id,void 0===t.childrenById[e.id]&&(t.childrenById[e.id]=[]),t.childrenById[e.id].push(r)})}),r.forEach(function(e){e.id,void 0!==t.parentById[e.id]&&t.parentById[e.id]}),t},m=function(e,t,r){let a=d(e,t,r);if(void 0===a||"root"===a)return{x:0,y:0};let o=u[a].offset;return{x:o.posX,y:o.posY}},_=function(e,t,r,a,l){let i=m(t.sourceId,t.targetId,l),n=t.sections[0].startPoint,s=t.sections[0].endPoint,d=t.sections[0].bendPoints?t.sections[0].bendPoints:[],c=d.map(e=>[e.x+i.x,e.y+i.y]),h=[[n.x+i.x,n.y+i.y],...c,[s.x+i.x,s.y+i.y]],p=(0,o.jvg)().curve(o.c_6),u=e.insert("path").attr("d",p(h)).attr("class","path").attr("fill","none"),b=e.insert("g").attr("class","edgeLabel"),g=(0,o.Ys)(b.node().appendChild(t.labelEl)),y=g.node().firstChild.getBoundingClientRect();g.attr("width",y.width),g.attr("height",y.height),b.attr("transform",`translate(${t.labels[0].x+i.x}, ${t.labels[0].y+i.y})`),k(u,r,a.type,a.arrowMarkerAbsolute)},v=(e,t)=>{e.forEach(e=>{e.children||(e.children=[]);let r=t.childrenById[e.id];r&&r.forEach(t=>{e.children.push(u[t])}),v(e.children,t)})},T=async function(e,t,r,a){var s;let d,p;a.db.clear(),u={},h={},a.db.setGen("gen-2"),a.parser.parse(e);let g=(0,o.Ys)("body").append("div").attr("style","height:400px").attr("id","cy"),y={id:"root",layoutOptions:{"elk.hierarchyHandling":"INCLUDE_CHILDREN","org.eclipse.elk.padding":"[top=100, left=100, bottom=110, right=110]","elk.layered.spacing.edgeNodeBetweenLayers":"30","elk.direction":"DOWN"},children:[],edges:[]};switch(i.l.info("Drawing flowchart using v3 renderer",c),a.db.getDirection()){case"BT":y.layoutOptions["elk.direction"]="UP";break;case"TB":y.layoutOptions["elk.direction"]="DOWN";break;case"LR":y.layoutOptions["elk.direction"]="RIGHT";break;case"RL":y.layoutOptions["elk.direction"]="LEFT"}let{securityLevel:w,flowchart:k}=(0,i.g)();"sandbox"===w&&(d=(0,o.Ys)("#i"+t));let m="sandbox"===w?(0,o.Ys)(d.nodes()[0].contentDocument.body):(0,o.Ys)("body"),T="sandbox"===w?d.nodes()[0].contentDocument:document,$=m.select(`[id="${t}"]`);(0,l.a)($,["point","circle","cross"],a.type,a.arrowMarkerAbsolute);let S=a.db.getVertices(),C=a.db.getSubGraphs();i.l.info("Subgraphs - ",C);for(let e=C.length-1;e>=0;e--)p=C[e],a.db.addVertex(p.id,{text:p.title,type:p.labelType},"group",void 0,p.classes,p.dir);let B=$.insert("g").attr("class","subgraphs"),I=x(a.db);y=b(S,t,m,T,a,I,y);let P=$.insert("g").attr("class","edges edgePath"),L=a.db.getEdges();y=f(L,a,y,$);let D=Object.keys(u);D.forEach(e=>{let t=u[e];t.parent||y.children.push(t),void 0!==I.childrenById[e]&&(t.labels=[{text:t.labelText,layoutOptions:{"nodeLabels.placement":"[H_CENTER, V_TOP, INSIDE]"},width:t.labelData.width,height:t.labelData.height}],delete t.x,delete t.y,delete t.width,delete t.height)}),v(y.children,I),i.l.info("after layout",JSON.stringify(y,null,2));let O=await c.layout(y);E(0,0,O.children,$,B,a,0),i.l.info("after layout",O),null==(s=O.edges)||s.map(e=>{_(P,e,e.edgeData,a,I)}),(0,n.s)({},$,k.diagramPadding,k.useMaxWidth),g.remove()},E=(e,t,r,a,o,l,n)=>{r.forEach(function(r){if(r){if(u[r.id].offset={posX:r.x+e,posY:r.y+t,x:e,y:t,depth:n,width:r.width,height:r.height},"group"===r.type){let a=o.insert("g").attr("class","subgraph");a.insert("rect").attr("class","subgraph subgraph-lvl-"+n%5+" node").attr("x",r.x+e).attr("y",r.y+t).attr("width",r.width).attr("height",r.height);let l=a.insert("g").attr("class","label"),s=(0,i.g)().flowchart.htmlLabels?r.labelData.width/2:0;l.attr("transform",`translate(${r.labels[0].x+e+r.x+s}, ${r.labels[0].y+t+r.y+3})`),l.node().appendChild(r.labelData.labelNode),i.l.info("Id (UGH)= ",r.type,r.labels)}else i.l.info("Id (UGH)= ",r.id),r.el.attr("transform",`translate(${r.x+e+r.width/2}, ${r.y+t+r.height/2})`)}}),r.forEach(function(r){r&&"group"===r.type&&E(e+r.x,t+r.y,r.children,a,o,l,n+1)})},$=e=>{let t="";for(let r=0;r<5;r++)t+=`
      .subgraph-lvl-${r} {
        fill: ${e[`surface${r}`]};
        stroke: ${e[`surfacePeer${r}`]};
      }
    `;return t},S=e=>`.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor||e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span {
    color: ${e.titleColor};
  }

  .label text,span {
    fill: ${e.nodeTextColor||e.textColor};
    color: ${e.nodeTextColor||e.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.85;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  .cluster rect {
    fill: ${e.clusterBkg};
    stroke: ${e.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
  .subgraph {
    stroke-width:2;
    rx:3;
  }
  // .subgraph-lvl-1 {
  //   fill:#ccc;
  //   // stroke:black;
  // }

  .flowchart-label text {
    text-anchor: middle;
  }

  ${$(e)}
`,C={db:a.d,renderer:{getClasses:function(e,t){i.l.info("Extracting classes"),t.db.clear("ver-2");try{return t.parse(e),t.db.getClasses()}catch(e){return{}}},draw:T},parser:a.p,styles:S}}}]);