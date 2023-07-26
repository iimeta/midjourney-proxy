"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2671],{4347:function(e,t,r){r.d(t,{a:function(){return a}});var l=r(3390);function a(e,t){var r=e.append("foreignObject").attr("width","100000"),a=r.append("xhtml:div");a.attr("xmlns","http://www.w3.org/1999/xhtml");var o=t.label;switch(typeof o){case"function":a.insert(o);break;case"object":a.insert(function(){return o});break;default:a.html(o)}l.bg(a,t.labelStyle),a.style("display","inline-block"),a.style("white-space","nowrap");var n=a.node().getBoundingClientRect();return r.attr("width",n.width).attr("height",n.height),r}},3390:function(e,t,r){r.d(t,{$p:function(){return d},O1:function(){return n},WR:function(){return p},bF:function(){return o},bg:function(){return c}});var l=r(6316),a=r(4886);function o(e,t){return!!e.children(t).length}function n(e){return s(e.v)+":"+s(e.w)+":"+s(e.name)}var i=/:/g;function s(e){return e?String(e).replace(i,"\\:"):""}function c(e,t){t&&e.attr("style",t)}function d(e,t,r){t&&e.attr("class",t).attr("class",r+" "+e.attr("class"))}function p(e,t){var r=t.graph();if(l.Z(r)){var o=r.transition;if(a.Z(o))return o(e)}return e}},2671:function(e,t,r){r.r(t),r.d(t,{diagram:function(){return n}});var l=r(7471),a=r(8707),o=r(347);r(7128),r(458),r(7326),r(2437),r(5680),r(1860),r(1937),r(6902);let n={parser:l.p,db:l.f,renderer:a.f,styles:a.a,init:e=>{e.flowchart||(e.flowchart={}),e.flowchart.arrowMarkerAbsolute=e.arrowMarkerAbsolute,(0,o.h)({flowchart:{arrowMarkerAbsolute:e.arrowMarkerAbsolute}}),a.f.setConf(e.flowchart),l.f.clear(),l.f.setGen("gen-2")}}},8707:function(e,t,r){r.d(t,{a:function(){return w},f:function(){return f}});var l=r(2437),a=r(7128),o=r(7471),n=r(347),i=r(9526),s=r(904),c=r(4347);let d={},p=function(e,t,r,l,a,o){let s=l.select(`[id="${r}"]`),d=Object.keys(e);d.forEach(function(r){let l;let d=e[r],p="default";d.classes.length>0&&(p=d.classes.join(" ")),p+=" flowchart-label";let b=(0,i.n)(d.styles),f=void 0!==d.text?d.text:d.id;if(n.l.info("vertex",d,d.labelType),"markdown"===d.labelType)n.l.info("vertex",d,d.labelType);else if((0,n.k)((0,n.g)().flowchart.htmlLabels)){let e={label:f.replace(/fa[blrs]?:fa-[\w-]+/g,e=>`<i class='${e.replace(":"," ")}'></i>`)};(l=(0,c.a)(s,e).node()).parentNode.removeChild(l)}else{let e=a.createElementNS("http://www.w3.org/2000/svg","text");e.setAttribute("style",b.labelStyle.replace("color:","fill:"));let t=f.split(n.e.lineBreakRegex);for(let r of t){let t=a.createElementNS("http://www.w3.org/2000/svg","tspan");t.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),t.setAttribute("dy","1em"),t.setAttribute("x","1"),t.textContent=r,e.appendChild(t)}l=e}let u=0,w="";switch(d.type){case"round":u=5,w="rect";break;case"square":case"group":default:w="rect";break;case"diamond":w="question";break;case"hexagon":w="hexagon";break;case"odd":case"odd_right":w="rect_left_inv_arrow";break;case"lean_right":w="lean_right";break;case"lean_left":w="lean_left";break;case"trapezoid":w="trapezoid";break;case"inv_trapezoid":w="inv_trapezoid";break;case"circle":w="circle";break;case"ellipse":w="ellipse";break;case"stadium":w="stadium";break;case"subroutine":w="subroutine";break;case"cylinder":w="cylinder";break;case"doublecircle":w="doublecircle"}t.setNode(d.id,{labelStyle:b.labelStyle,shape:w,labelText:f,labelType:d.labelType,rx:u,ry:u,class:p,style:b.style,id:d.id,link:d.link,linkTarget:d.linkTarget,tooltip:o.db.getTooltip(d.id)||"",domId:o.db.lookUpDomId(d.id),haveCallback:d.haveCallback,width:"group"===d.type?500:void 0,dir:d.dir,type:d.type,props:d.props,padding:(0,n.g)().flowchart.padding}),n.l.info("setNode",{labelStyle:b.labelStyle,labelType:d.labelType,shape:w,labelText:f,rx:u,ry:u,class:p,style:b.style,id:d.id,domId:o.db.lookUpDomId(d.id),width:"group"===d.type?500:void 0,type:d.type,dir:d.dir,props:d.props,padding:(0,n.g)().flowchart.padding})})},b=function(e,t,r){let l,o;n.l.info("abc78 edges = ",e);let s=0,c={};if(void 0!==e.defaultStyle){let t=(0,i.n)(e.defaultStyle);l=t.style,o=t.labelStyle}e.forEach(function(r){s++;var p="L-"+r.start+"-"+r.end;void 0===c[p]?(c[p]=0,n.l.info("abc78 new entry",p,c[p])):(c[p]++,n.l.info("abc78 new entry",p,c[p]));let b=p+"-"+c[p];n.l.info("abc78 new link id to be used is",p,b,c[p]);var f="LS-"+r.start,u="LE-"+r.end;let w={style:"",labelStyle:""};switch(w.minlen=r.length||1,"arrow_open"===r.type?w.arrowhead="none":w.arrowhead="normal",w.arrowTypeStart="arrow_open",w.arrowTypeEnd="arrow_open",r.type){case"double_arrow_cross":w.arrowTypeStart="arrow_cross";case"arrow_cross":w.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":w.arrowTypeStart="arrow_point";case"arrow_point":w.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":w.arrowTypeStart="arrow_circle";case"arrow_circle":w.arrowTypeEnd="arrow_circle"}let h="",g="";switch(r.stroke){case"normal":h="fill:none;",void 0!==l&&(h=l),void 0!==o&&(g=o),w.thickness="normal",w.pattern="solid";break;case"dotted":w.thickness="normal",w.pattern="dotted",w.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":w.thickness="thick",w.pattern="solid",w.style="stroke-width: 3.5px;fill:none;";break;case"invisible":w.thickness="invisible",w.pattern="solid",w.style="stroke-width: 0;fill:none;"}if(void 0!==r.style){let e=(0,i.n)(r.style);h=e.style,g=e.labelStyle}w.style=w.style+=h,w.labelStyle=w.labelStyle+=g,void 0!==r.interpolate?w.curve=(0,i.o)(r.interpolate,a.c_6):void 0!==e.defaultInterpolate?w.curve=(0,i.o)(e.defaultInterpolate,a.c_6):w.curve=(0,i.o)(d.curve,a.c_6),void 0===r.text?void 0!==r.style&&(w.arrowheadStyle="fill: #333"):(w.arrowheadStyle="fill: #333",w.labelpos="c"),w.labelType=r.labelType,w.label=r.text.replace(n.e.lineBreakRegex,"\n"),void 0===r.style&&(w.style=w.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),w.labelStyle=w.labelStyle.replace("color:","fill:"),w.id=b,w.classes="flowchart-link "+f+" "+u,t.setEdge(r.start,r.end,w,s)})},f={setConf:function(e){let t=Object.keys(e);for(let r of t)d[r]=e[r]},addVertices:p,addEdges:b,getClasses:function(e,t){n.l.info("Extracting classes"),t.db.clear();try{return t.parse(e),t.db.getClasses()}catch(e){return}},draw:function(e,t,r,c){let d,f;n.l.info("Drawing flowchart"),c.db.clear(),o.f.setGen("gen-2"),c.parser.parse(e);let u=c.db.getDirection();void 0===u&&(u="TD");let{securityLevel:w,flowchart:h}=(0,n.g)(),g=h.nodeSpacing||50,y=h.rankSpacing||50;"sandbox"===w&&(d=(0,a.Ys)("#i"+t));let k="sandbox"===w?(0,a.Ys)(d.nodes()[0].contentDocument.body):(0,a.Ys)("body"),x="sandbox"===w?d.nodes()[0].contentDocument:document,v=new l.k({multigraph:!0,compound:!0}).setGraph({rankdir:u,nodesep:g,ranksep:y,marginx:0,marginy:0}).setDefaultEdgeLabel(function(){return{}}),m=c.db.getSubGraphs();n.l.info("Subgraphs - ",m);for(let e=m.length-1;e>=0;e--)f=m[e],n.l.info("Subgraph - ",f),c.db.addVertex(f.id,{text:f.title,type:f.labelType},"group",void 0,f.classes,f.dir);let S=c.db.getVertices(),T=c.db.getEdges();n.l.info("Edges",T);let _=0;for(_=m.length-1;_>=0;_--){f=m[_],(0,a.td_)("cluster").append("text");for(let e=0;e<f.nodes.length;e++)n.l.info("Setting up subgraphs",f.nodes[e],f.id),v.setParent(f.nodes[e],f.id)}p(S,v,t,k,x,c),b(T,v);let C=k.select(`[id="${t}"]`),$=k.select("#"+t+" g");if((0,s.r)($,v,["point","circle","cross"],"flowchart",t),i.u.insertTitle(C,"flowchartTitleText",h.titleTopMargin,c.db.getDiagramTitle()),(0,i.s)(v,C,h.diagramPadding,h.useMaxWidth),c.db.indexNodes("subGraph"+_),!h.htmlLabels){let e=x.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(let t of e){let e=t.getBBox(),r=x.createElementNS("http://www.w3.org/2000/svg","rect");r.setAttribute("rx",0),r.setAttribute("ry",0),r.setAttribute("width",e.width),r.setAttribute("height",e.height),t.insertBefore(r,t.firstChild)}}let E=Object.keys(S);E.forEach(function(e){let r=S[e];if(r.link){let l=(0,a.Ys)("#"+t+' [id="'+e+'"]');if(l){let e=x.createElementNS("http://www.w3.org/2000/svg","a");e.setAttributeNS("http://www.w3.org/2000/svg","class",r.classes.join(" ")),e.setAttributeNS("http://www.w3.org/2000/svg","href",r.link),e.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),"sandbox"===w?e.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):r.linkTarget&&e.setAttributeNS("http://www.w3.org/2000/svg","target",r.linkTarget);let t=l.insert(function(){return e},":first-child"),a=l.select(".label-container");a&&t.append(function(){return a.node()});let o=l.select(".label");o&&t.append(function(){return o.node()})}}})}},u=e=>`.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor||e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span,p {
    color: ${e.titleColor};
  }

  .label text,span,p {
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
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

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
      opacity: 0.5;
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

  .cluster span,p {
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
`,w=u}}]);