"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3160],{3160:function(e,l,t){t.r(l),t.d(l,{diagram:function(){return u}});var a=t(7576),n=t(7128),i=t(2437),o=t(347),s=t(904),r=t(9526);t(7326),t(6902),t(5680),t(1860),t(1937),t(458);let d=e=>o.e.sanitizeText(e,(0,o.g)()),c={dividerMargin:10,padding:5,textHeight:10,curve:void 0},g=function(e,l,t,a){let n=Object.keys(e);o.l.info("keys:",n),o.l.info(e),n.forEach(function(t){var n,i;let s=e[t],r="";s.cssClasses.length>0&&(r=r+" "+s.cssClasses.join(" "));let c={labelStyle:"",style:""},g=s.label??s.id,b={labelStyle:c.labelStyle,shape:"class_box",labelText:d(g),classData:s,rx:0,ry:0,class:r,style:c.style,id:s.id,domId:s.domId,tooltip:a.db.getTooltip(s.id)||"",haveCallback:s.haveCallback,link:s.link,width:"group"===s.type?500:void 0,type:s.type,padding:(null==(n=(0,o.g)().flowchart)?void 0:n.padding)??(null==(i=(0,o.g)().class)?void 0:i.padding)};l.setNode(s.id,b),o.l.info("setNode",b)})},b=function(e,l,t,a){o.l.info(e),e.forEach(function(e,i){var s,g;let b={labelStyle:"",style:""},p=e.text,y={labelStyle:b.labelStyle,shape:"note",labelText:d(p),noteData:e,rx:0,ry:0,class:"",style:b.style,id:e.id,domId:e.id,tooltip:"",type:"note",padding:(null==(s=(0,o.g)().flowchart)?void 0:s.padding)??(null==(g=(0,o.g)().class)?void 0:g.padding)};if(l.setNode(e.id,y),o.l.info("setNode",y),!e.class||!(e.class in a))return;let u=t+i,f={id:`edgeNote${u}`,classes:"relation",pattern:"dotted",arrowhead:"none",startLabelRight:"",endLabelLeft:"",arrowTypeStart:"none",arrowTypeEnd:"none",style:"fill:none",labelStyle:"",curve:(0,r.o)(c.curve,n.c_6)};l.setEdge(e.id,e.class,f,u)})},p=function(e,l){let t=(0,o.g)().flowchart,a=0;e.forEach(function(e){var i;a++;let s={classes:"relation",pattern:1==e.relation.lineType?"dashed":"solid",id:"id"+a,arrowhead:"arrow_open"===e.type?"none":"normal",startLabelRight:"none"===e.relationTitle1?"":e.relationTitle1,endLabelLeft:"none"===e.relationTitle2?"":e.relationTitle2,arrowTypeStart:y(e.relation.type1),arrowTypeEnd:y(e.relation.type2),style:"fill:none",labelStyle:"",curve:(0,r.o)(null==t?void 0:t.curve,n.c_6)};if(o.l.info(s,e),void 0!==e.style){let l=(0,r.n)(e.style);s.style=l.style,s.labelStyle=l.labelStyle}e.text=e.title,void 0===e.text?void 0!==e.style&&(s.arrowheadStyle="fill: #333"):(s.arrowheadStyle="fill: #333",s.labelpos="c",(null==(i=(0,o.g)().flowchart)?void 0:i.htmlLabels)??(0,o.g)().htmlLabels?(s.labelType="html",s.label='<span class="edgeLabel">'+e.text+"</span>"):(s.labelType="text",s.label=e.text.replace(o.e.lineBreakRegex,"\n"),void 0===e.style&&(s.style=s.style||"stroke: #333; stroke-width: 1.5px;fill:none"),s.labelStyle=s.labelStyle.replace("color:","fill:"))),l.setEdge(e.id1,e.id2,s,a)})};function y(e){let l;switch(e){case 0:l="aggregation";break;case 1:l="extension";break;case 2:l="composition";break;case 3:l="dependency";break;case 4:l="lollipop";break;default:l="none"}return l}let u={parser:a.p,db:a.d,renderer:{setConf:function(e){c={...c,...e}},draw:function(e,l,t,a){let d;o.l.info("Drawing class - ",l);let c=(0,o.g)().flowchart??(0,o.g)().class,y=(0,o.g)().securityLevel;o.l.info("config:",c);let u=(null==c?void 0:c.nodeSpacing)??50,f=(null==c?void 0:c.rankSpacing)??50,h=new i.k({multigraph:!0,compound:!0}).setGraph({rankdir:a.db.getDirection(),nodesep:u,ranksep:f,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),v=a.db.getClasses(),w=a.db.getRelations(),x=a.db.getNotes();o.l.info(w),g(v,h,l,a),p(w,h),b(x,h,w.length+1,v),"sandbox"===y&&(d=(0,n.Ys)("#i"+l));let k="sandbox"===y?(0,n.Ys)(d.nodes()[0].contentDocument.body):(0,n.Ys)("body"),m=k.select(`[id="${l}"]`),S=k.select("#"+l+" g");if((0,s.r)(S,h,["aggregation","extension","composition","dependency","lollipop"],"classDiagram",l),r.u.insertTitle(m,"classTitleText",(null==c?void 0:c.titleTopMargin)??5,a.db.getDiagramTitle()),(0,r.s)(h,m,null==c?void 0:c.diagramPadding,null==c?void 0:c.useMaxWidth),!(null==c?void 0:c.htmlLabels)){let e="sandbox"===y?d.nodes()[0].contentDocument:document,t=e.querySelectorAll('[id="'+l+'"] .edgeLabel .label');for(let l of t){let t=l.getBBox(),a=e.createElementNS("http://www.w3.org/2000/svg","rect");a.setAttribute("rx",0),a.setAttribute("ry",0),a.setAttribute("width",t.width),a.setAttribute("height",t.height),l.insertBefore(a,l.firstChild)}}}},styles:a.s,init:e=>{e.class||(e.class={}),e.class.arrowMarkerAbsolute=e.arrowMarkerAbsolute,a.d.clear()}}}}]);