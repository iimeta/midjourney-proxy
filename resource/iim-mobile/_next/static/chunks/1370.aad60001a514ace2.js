"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1370],{4347:function(e,t,r){r.d(t,{a:function(){return n}});var a=r(3390);function n(e,t){var r=e.append("foreignObject").attr("width","100000"),n=r.append("xhtml:div");n.attr("xmlns","http://www.w3.org/1999/xhtml");var l=t.label;switch(typeof l){case"function":n.insert(l);break;case"object":n.insert(function(){return l});break;default:n.html(l)}a.bg(n,t.labelStyle),n.style("display","inline-block"),n.style("white-space","nowrap");var i=n.node().getBoundingClientRect();return r.attr("width",i.width).attr("height",i.height),r}},3390:function(e,t,r){r.d(t,{$p:function(){return c},O1:function(){return i},WR:function(){return h},bF:function(){return l},bg:function(){return d}});var a=r(6316),n=r(4886);function l(e,t){return!!e.children(t).length}function i(e){return s(e.v)+":"+s(e.w)+":"+s(e.name)}var o=/:/g;function s(e){return e?String(e).replace(o,"\\:"):""}function d(e,t){t&&e.attr("style",t)}function c(e,t,r){t&&e.attr("class",t).attr("class",r+" "+e.attr("class"))}function h(e,t){var r=t.graph();if(a.Z(r)){var l=r.transition;if(n.Z(l))return l(e)}return e}},1370:function(e,t,r){r.r(t),r.d(t,{diagram:function(){return Q}});var a=r(7471),n=r(2437),l=r(7128),i=r(347),o=r(6348),s=r(6651),d=r(1676),c=r(5680),h=r(3390),u={normal:function(e,t,r,a){var n=e.append("marker").attr("id",t).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerUnits","strokeWidth").attr("markerWidth",8).attr("markerHeight",6).attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").style("stroke-width",1).style("stroke-dasharray","1,0");h.bg(n,r[a+"Style"]),r[a+"Class"]&&n.attr("class",r[a+"Class"])},vee:function(e,t,r,a){var n=e.append("marker").attr("id",t).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerUnits","strokeWidth").attr("markerWidth",8).attr("markerHeight",6).attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 L 4 5 z").style("stroke-width",1).style("stroke-dasharray","1,0");h.bg(n,r[a+"Style"]),r[a+"Class"]&&n.attr("class",r[a+"Class"])},undirected:function(e,t,r,a){var n=e.append("marker").attr("id",t).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerUnits","strokeWidth").attr("markerWidth",8).attr("markerHeight",6).attr("orient","auto").append("path").attr("d","M 0 5 L 10 5").style("stroke-width",1).style("stroke-dasharray","1,0");h.bg(n,r[a+"Style"]),r[a+"Class"]&&n.attr("class",r[a+"Class"])}},p=r(4347);function f(e,t,r){var a,n=t.label,l=e.append("g");"svg"===t.labelType?(l.node().appendChild(t.label),h.bg(l,t.labelStyle)):"string"!=typeof n||"html"===t.labelType?(0,p.a)(l,t):function(e,t){for(var r=e.append("text"),a=(function(e){for(var t,r="",a=!1,n=0;n<e.length;++n)(t=e[n],a)?("n"===t?r+="\n":r+=t,a=!1):"\\"===t?a=!0:r+=t;return r})(t.label).split("\n"),n=0;n<a.length;n++)r.append("tspan").attr("xml:space","preserve").attr("dy","1em").attr("x","1").text(a[n]);return h.bg(r,t.labelStyle),r}(l,t);var i=l.node().getBBox();switch(r){case"top":a=-t.height/2;break;case"bottom":a=t.height/2-i.height;break;default:a=-i.height/2}return l.attr("transform","translate("+-i.width/2+","+a+")"),l}var g=function(e,t){var r=t.nodes().filter(function(e){return h.bF(t,e)}),a=e.selectAll("g.cluster").data(r,function(e){return e});h.WR(a.exit(),t).style("opacity",0).remove();var n=a.enter().append("g").attr("class","cluster").attr("id",function(e){return t.node(e).id}).style("opacity",0).each(function(e){var r=t.node(e),a=l.Ys(this);l.Ys(this).append("rect"),f(a.append("g").attr("class","label"),r,r.clusterLabelPos)});return a=a.merge(n),(a=h.WR(a,t).style("opacity",1)).selectAll("rect").each(function(e){var r=t.node(e),a=l.Ys(this);h.bg(a,r.style)}),a};let y=function(e,t){var r,a=e.selectAll("g.edgeLabel").data(t.edges(),function(e){return h.O1(e)}).classed("update",!0);return a.exit().remove(),a.enter().append("g").classed("edgeLabel",!0).style("opacity",0),(a=e.selectAll("g.edgeLabel")).each(function(e){var r=l.Ys(this);r.select(".label").remove();var a=t.edge(e),n=f(r,t.edge(e),0).classed("label",!0),i=n.node().getBBox();a.labelId&&n.attr("id",a.labelId),o.Z(a,"width")||(a.width=i.width),o.Z(a,"height")||(a.height=i.height)}),r=a.exit?a.exit():a.selectAll(null),h.WR(r,t).style("opacity",0).remove(),a};var b=r(3571),w=r(6971);function x(e,t){return e.intersect(t)}var v=function(e,t,r){var a,n=e.selectAll("g.edgePath").data(t.edges(),function(e){return h.O1(e)}).classed("update",!0),i=((a=n.enter().append("g").attr("class","edgePath").style("opacity",0)).append("path").attr("class","path").attr("d",function(e){var r=t.edge(e),a=t.node(e.v).elem,n=w.Z(r.points.length).map(function(){var e,t;return e=a.getBBox(),{x:(t=a.ownerSVGElement.getScreenCTM().inverse().multiply(a.getScreenCTM()).translate(e.width/2,e.height/2)).e,y:t.f}});return k(r,n)}),a.append("defs"),a);!function(e,t){var r=e.exit();h.WR(r,t).style("opacity",0).remove()}(n,t);var o=void 0!==n.merge?n.merge(i):n;return h.WR(o,t).style("opacity",1),o.each(function(e){var r=l.Ys(this),a=t.edge(e);a.elem=this,a.id&&r.attr("id",a.id),h.$p(r,a.class,(r.classed("update")?"update ":"")+"edgePath")}),o.selectAll("path.path").each(function(e){var r=t.edge(e);r.arrowheadId=b.Z("arrowhead");var a=l.Ys(this).attr("marker-end",function(){var e,t;return"url("+(e=location.href,t=r.arrowheadId,e.split("#")[0]+"#"+t)+")"}).style("fill","none");h.WR(a,t).attr("d",function(e){var r,a,n,l;return r=t.edge(e),a=t.node(e.v),n=t.node(e.w),(l=r.points.slice(1,r.points.length-1)).unshift(x(a,l[0])),l.push(x(n,l[l.length-1])),k(r,l)}),h.bg(a,r.style)}),o.selectAll("defs *").remove(),o.selectAll("defs").each(function(e){var a=t.edge(e);(0,r[a.arrowhead])(l.Ys(this),a.arrowheadId,a,"arrowhead")}),o};function k(e,t){var r=(l.jvg||l.YPS.line)().x(function(e){return e.x}).y(function(e){return e.y});return(r.curve||r.interpolate)(e.curve),r(t)}var m=r(546),S=function(e,t,r){var a,n=t.nodes().filter(function(e){return!h.bF(t,e)}),i=e.selectAll("g.node").data(n,function(e){return e}).classed("update",!0);return i.exit().remove(),i.enter().append("g").attr("class","node").style("opacity",0),(i=e.selectAll("g.node")).each(function(e){var a=t.node(e),n=l.Ys(this);h.$p(n,a.class,(n.classed("update")?"update ":"")+"node"),n.select("g.label").remove();var i=n.append("g").attr("class","label"),s=f(i,a),d=r[a.shape],c=m.Z(s.node().getBBox(),"width","height");a.elem=this,a.id&&n.attr("id",a.id),a.labelId&&i.attr("id",a.labelId),o.Z(a,"width")&&(c.width=a.width),o.Z(a,"height")&&(c.height=a.height),c.width+=a.paddingLeft+a.paddingRight,c.height+=a.paddingTop+a.paddingBottom,i.attr("transform","translate("+(a.paddingLeft-a.paddingRight)/2+","+(a.paddingTop-a.paddingBottom)/2+")");var u=l.Ys(this);u.select(".label-container").remove();var p=d(u,c,a).classed("label-container",!0);h.bg(p,a.style);var g=p.node().getBBox();a.width=g.width,a.height=g.height}),a=i.exit?i.exit():i.selectAll(null),h.WR(a,t).style("opacity",0).remove(),i};function _(e,t,r,a){var n=e.x,l=e.y,i=n-a.x,o=l-a.y,s=Math.sqrt(t*t*o*o+r*r*i*i),d=Math.abs(t*r*i/s);a.x<n&&(d=-d);var c=Math.abs(t*r*o/s);return a.y<l&&(c=-c),{x:n+d,y:l+c}}function T(e,t,r){var a=e.x,n=e.y,l=[],i=Number.POSITIVE_INFINITY,o=Number.POSITIVE_INFINITY;t.forEach(function(e){i=Math.min(i,e.x),o=Math.min(o,e.y)});for(var s=a-e.width/2-i,d=n-e.height/2-o,c=0;c<t.length;c++){var h=t[c],u=t[c<t.length-1?c+1:0],p=function(e,t,r,a){var n,l,i,o,s,d,c,h,u,p,f,g,y;if(n=t.y-e.y,i=e.x-t.x,s=t.x*e.y-e.x*t.y,u=n*r.x+i*r.y+s,p=n*a.x+i*a.y+s,(0===u||0===p||!(u*p>0))&&(l=a.y-r.y,o=r.x-a.x,d=a.x*r.y-r.x*a.y,c=l*e.x+o*e.y+d,h=l*t.x+o*t.y+d,!(0!==c&&0!==h&&c*h>0)&&0!=(f=n*o-l*i)))return g=Math.abs(f/2),{x:(y=i*d-o*s)<0?(y-g)/f:(y+g)/f,y:(y=l*s-n*d)<0?(y-g)/f:(y+g)/f}}(e,r,{x:s+h.x,y:d+h.y},{x:s+u.x,y:d+u.y});p&&l.push(p)}return l.length?(l.length>1&&l.sort(function(e,t){var a=e.x-r.x,n=e.y-r.y,l=Math.sqrt(a*a+n*n),i=t.x-r.x,o=t.y-r.y,s=Math.sqrt(i*i+o*o);return l<s?-1:l===s?0:1}),l[0]):(console.log("NO INTERSECTION FOUND, RETURN NODE CENTER",e),e)}function C(e,t){var r,a,n=e.x,l=e.y,i=t.x-n,o=t.y-l,s=e.width/2,d=e.height/2;return Math.abs(o)*s>Math.abs(i)*d?(o<0&&(d=-d),r=0===o?0:d*i/o,a=d):(i<0&&(s=-s),r=s,a=0===i?0:s*o/i),{x:n+r,y:l+a}}var L={rect:function(e,t,r){var a=e.insert("rect",":first-child").attr("rx",r.rx).attr("ry",r.ry).attr("x",-t.width/2).attr("y",-t.height/2).attr("width",t.width).attr("height",t.height);return r.intersect=function(e){return C(r,e)},a},ellipse:function(e,t,r){var a=t.width/2,n=t.height/2,l=e.insert("ellipse",":first-child").attr("x",-t.width/2).attr("y",-t.height/2).attr("rx",a).attr("ry",n);return r.intersect=function(e){return _(r,a,n,e)},l},circle:function(e,t,r){var a=Math.max(t.width,t.height)/2,n=e.insert("circle",":first-child").attr("x",-t.width/2).attr("y",-t.height/2).attr("r",a);return r.intersect=function(e){return _(r,a,a,e)},n},diamond:function(e,t,r){var a=t.width*Math.SQRT2/2,n=t.height*Math.SQRT2/2,l=[{x:0,y:-n},{x:-a,y:0},{x:0,y:n},{x:a,y:0}],i=e.insert("polygon",":first-child").attr("points",l.map(function(e){return e.x+","+e.y}).join(" "));return r.intersect=function(e){return T(r,l,e)},i}};function A(){var e=function(e,t){t.nodes().forEach(function(e){var r=t.node(e);o.Z(r,"label")||t.children(e).length||(r.label=e),o.Z(r,"paddingX")&&s.Z(r,{paddingLeft:r.paddingX,paddingRight:r.paddingX}),o.Z(r,"paddingY")&&s.Z(r,{paddingTop:r.paddingY,paddingBottom:r.paddingY}),o.Z(r,"padding")&&s.Z(r,{paddingLeft:r.padding,paddingRight:r.padding,paddingTop:r.padding,paddingBottom:r.padding}),s.Z(r,E),d.Z(["paddingLeft","paddingRight","paddingTop","paddingBottom"],function(e){r[e]=Number(r[e])}),o.Z(r,"width")&&(r._prevWidth=r.width),o.Z(r,"height")&&(r._prevHeight=r.height)}),t.edges().forEach(function(e){var r=t.edge(e);o.Z(r,"label")||(r.label=""),s.Z(r,N)});var r=$(e,"output"),a=$(r,"clusters"),n=$(r,"edgePaths"),i=y($(r,"edgeLabels"),t),p=S($(r,"nodes"),t,L);(0,c.bK)(t),function(e,t){function r(e){var r=t.node(e);return"translate("+r.x+","+r.y+")"}e.filter(function(){return!l.Ys(this).classed("update")}).attr("transform",r),h.WR(e,t).style("opacity",1).attr("transform",r)}(p,t),function(e,t){function r(e){var r=t.edge(e);return o.Z(r,"x")?"translate("+r.x+","+r.y+")":""}e.filter(function(){return!l.Ys(this).classed("update")}).attr("transform",r),h.WR(e,t).style("opacity",1).attr("transform",r)}(i,t),v(n,t,u),function(e,t){var r=e.filter(function(){return!l.Ys(this).classed("update")});function a(e){var r=t.node(e);return"translate("+r.x+","+r.y+")"}r.attr("transform",a),h.WR(e,t).style("opacity",1).attr("transform",a),h.WR(r.selectAll("rect"),t).attr("width",function(e){return t.node(e).width}).attr("height",function(e){return t.node(e).height}).attr("x",function(e){return-t.node(e).width/2}).attr("y",function(e){return-t.node(e).height/2})}(g(a,t),t),d.Z(t.nodes(),function(e){var r=t.node(e);o.Z(r,"_prevWidth")?r.width=r._prevWidth:delete r.width,o.Z(r,"_prevHeight")?r.height=r._prevHeight:delete r.height,delete r._prevWidth,delete r._prevHeight})};return e.createNodes=function(t){return arguments.length?(S=t,e):S},e.createClusters=function(t){return arguments.length?(g=t,e):g},e.createEdgeLabels=function(t){return arguments.length?(y=t,e):y},e.createEdgePaths=function(t){return arguments.length?(v=t,e):v},e.shapes=function(t){return arguments.length?(L=t,e):L},e.arrows=function(t){return arguments.length?(u=t,e):u},e}var E={paddingLeft:10,paddingRight:10,paddingTop:10,paddingBottom:10,rx:0,ry:0,shape:"rect"},N={arrowhead:"normal",curve:l.c_6};function $(e,t){var r=e.select("g."+t);return r.empty()&&(r=e.append("g").attr("class",t)),r}var B=r(9526),I=r(8707);function M(e,t,r){let a=t.width,n=t.height,l=(a+n)*.9,i=[{x:l/2,y:0},{x:l,y:-l/2},{x:l/2,y:-l},{x:0,y:-l/2}],o=q(e,l,l,i);return r.intersect=function(e){return T(r,i,e)},o}function R(e,t,r){let a=t.height,n=a/4,l=t.width+2*n,i=[{x:n,y:0},{x:l-n,y:0},{x:l,y:-a/2},{x:l-n,y:-a},{x:n,y:-a},{x:0,y:-a/2}],o=q(e,l,a,i);return r.intersect=function(e){return T(r,i,e)},o}function Y(e,t,r){let a=t.width,n=t.height,l=[{x:-n/2,y:0},{x:a,y:0},{x:a,y:-n},{x:-n/2,y:-n},{x:0,y:-n/2}],i=q(e,a,n,l);return r.intersect=function(e){return T(r,l,e)},i}function D(e,t,r){let a=t.width,n=t.height,l=[{x:-2*n/6,y:0},{x:a-n/6,y:0},{x:a+2*n/6,y:-n},{x:n/6,y:-n}],i=q(e,a,n,l);return r.intersect=function(e){return T(r,l,e)},i}function W(e,t,r){let a=t.width,n=t.height,l=[{x:2*n/6,y:0},{x:a+n/6,y:0},{x:a-2*n/6,y:-n},{x:-n/6,y:-n}],i=q(e,a,n,l);return r.intersect=function(e){return T(r,l,e)},i}function Z(e,t,r){let a=t.width,n=t.height,l=[{x:-2*n/6,y:0},{x:a+2*n/6,y:0},{x:a-n/6,y:-n},{x:n/6,y:-n}],i=q(e,a,n,l);return r.intersect=function(e){return T(r,l,e)},i}function U(e,t,r){let a=t.width,n=t.height,l=[{x:n/6,y:0},{x:a-n/6,y:0},{x:a+2*n/6,y:-n},{x:-2*n/6,y:-n}],i=q(e,a,n,l);return r.intersect=function(e){return T(r,l,e)},i}function z(e,t,r){let a=t.width,n=t.height,l=[{x:0,y:0},{x:a+n/2,y:0},{x:a,y:-n/2},{x:a+n/2,y:-n},{x:0,y:-n}],i=q(e,a,n,l);return r.intersect=function(e){return T(r,l,e)},i}function P(e,t,r){let a=t.height,n=t.width+a/4,l=e.insert("rect",":first-child").attr("rx",a/2).attr("ry",a/2).attr("x",-n/2).attr("y",-a/2).attr("width",n).attr("height",a);return r.intersect=function(e){return C(r,e)},l}function O(e,t,r){let a=t.width,n=t.height,l=[{x:0,y:0},{x:a,y:0},{x:a,y:-n},{x:0,y:-n},{x:0,y:0},{x:-8,y:0},{x:a+8,y:0},{x:a+8,y:-n},{x:-8,y:-n},{x:-8,y:0}],i=q(e,a,n,l);return r.intersect=function(e){return T(r,l,e)},i}function j(e,t,r){let a=t.width,n=a/2,l=n/(2.5+a/50),i=t.height+l,o=e.attr("label-offset-y",l).insert("path",":first-child").attr("d","M 0,"+l+" a "+n+","+l+" 0,0,0 "+a+" 0 a "+n+","+l+" 0,0,0 "+-a+" 0 l 0,"+i+" a "+n+","+l+" 0,0,0 "+a+" 0 l 0,"+-i).attr("transform","translate("+-a/2+","+-(i/2+l)+")");return r.intersect=function(e){let t=C(r,e),a=t.x-r.x;if(0!=n&&(Math.abs(a)<r.width/2||Math.abs(a)==r.width/2&&Math.abs(t.y-r.y)>r.height/2-l)){let i=l*l*(1-a*a/(n*n));0!=i&&(i=Math.sqrt(i)),i=l-i,e.y-r.y>0&&(i=-i),t.y+=i}return t},o}function q(e,t,r,a){return e.insert("polygon",":first-child").attr("points",a.map(function(e){return e.x+","+e.y}).join(" ")).attr("transform","translate("+-t/2+","+r/2+")")}r(7326),r(6902),r(458),r(1860),r(1937);let V={addToRender:function(e){e.shapes().question=M,e.shapes().hexagon=R,e.shapes().stadium=P,e.shapes().subroutine=O,e.shapes().cylinder=j,e.shapes().rect_left_inv_arrow=Y,e.shapes().lean_right=D,e.shapes().lean_left=W,e.shapes().trapezoid=Z,e.shapes().inv_trapezoid=U,e.shapes().rect_right_inv_arrow=z},addToRenderV2:function(e){e({question:M}),e({hexagon:R}),e({stadium:P}),e({subroutine:O}),e({cylinder:j}),e({rect_left_inv_arrow:Y}),e({lean_right:D}),e({lean_left:W}),e({trapezoid:Z}),e({inv_trapezoid:U}),e({rect_right_inv_arrow:z})}},G={},X=function(e,t,r,a,n,o){let s=a?a.select(`[id="${r}"]`):(0,l.Ys)(`[id="${r}"]`),d=n||document,c=Object.keys(e);c.forEach(function(r){let a;let n=e[r],l="default";n.classes.length>0&&(l=n.classes.join(" "));let c=(0,B.n)(n.styles),h=void 0!==n.text?n.text:n.id;if((0,i.k)((0,i.g)().flowchart.htmlLabels)){let e={label:h.replace(/fa[blrs]?:fa-[\w-]+/g,e=>`<i class='${e.replace(":"," ")}'></i>`)};(a=(0,p.a)(s,e).node()).parentNode.removeChild(a)}else{let e=d.createElementNS("http://www.w3.org/2000/svg","text");e.setAttribute("style",c.labelStyle.replace("color:","fill:"));let t=h.split(i.e.lineBreakRegex);for(let r of t){let t=d.createElementNS("http://www.w3.org/2000/svg","tspan");t.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),t.setAttribute("dy","1em"),t.setAttribute("x","1"),t.textContent=r,e.appendChild(t)}a=e}let u=0,f="";switch(n.type){case"round":u=5,f="rect";break;case"square":case"group":default:f="rect";break;case"diamond":f="question";break;case"hexagon":f="hexagon";break;case"odd":case"odd_right":f="rect_left_inv_arrow";break;case"lean_right":f="lean_right";break;case"lean_left":f="lean_left";break;case"trapezoid":f="trapezoid";break;case"inv_trapezoid":f="inv_trapezoid";break;case"circle":f="circle";break;case"ellipse":f="ellipse";break;case"stadium":f="stadium";break;case"subroutine":f="subroutine";break;case"cylinder":f="cylinder"}i.l.warn("Adding node",n.id,n.domId),t.setNode(o.db.lookUpDomId(n.id),{labelType:"svg",labelStyle:c.labelStyle,shape:f,label:a,rx:u,ry:u,class:l,style:c.style,id:o.db.lookUpDomId(n.id)})})},H=function(e,t,r){let a,n,o=0;if(void 0!==e.defaultStyle){let t=(0,B.n)(e.defaultStyle);a=t.style,n=t.labelStyle}e.forEach(function(s){o++;var d="L-"+s.start+"-"+s.end,c="LS-"+s.start,h="LE-"+s.end;let u={};"arrow_open"===s.type?u.arrowhead="none":u.arrowhead="normal";let p="",f="";if(void 0!==s.style){let e=(0,B.n)(s.style);p=e.style,f=e.labelStyle}else switch(s.stroke){case"normal":p="fill:none",void 0!==a&&(p=a),void 0!==n&&(f=n);break;case"dotted":p="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":p=" stroke-width: 3.5px;fill:none"}u.style=p,u.labelStyle=f,void 0!==s.interpolate?u.curve=(0,B.o)(s.interpolate,l.c_6):void 0!==e.defaultInterpolate?u.curve=(0,B.o)(e.defaultInterpolate,l.c_6):u.curve=(0,B.o)(G.curve,l.c_6),void 0===s.text?void 0!==s.style&&(u.arrowheadStyle="fill: #333"):(u.arrowheadStyle="fill: #333",u.labelpos="c",(0,i.k)((0,i.g)().flowchart.htmlLabels)?(u.labelType="html",u.label=`<span id="L-${d}" class="edgeLabel L-${c}' L-${h}" style="${u.labelStyle}">${s.text.replace(/fa[blrs]?:fa-[\w-]+/g,e=>`<i class='${e.replace(":"," ")}'></i>`)}</span>`):(u.labelType="text",u.label=s.text.replace(i.e.lineBreakRegex,"\n"),void 0===s.style&&(u.style=u.style||"stroke: #333; stroke-width: 1.5px;fill:none"),u.labelStyle=u.labelStyle.replace("color:","fill:"))),u.id=d,u.class=c+" "+h,u.minlen=s.length||1,t.setEdge(r.db.lookUpDomId(s.start),r.db.lookUpDomId(s.end),u,o)})},F={setConf:function(e){let t=Object.keys(e);for(let r of t)G[r]=e[r]},addVertices:X,addEdges:H,getClasses:function(e,t){i.l.info("Extracting classes"),t.db.clear();try{return t.parse(e),t.db.getClasses()}catch(e){return i.l.error(e),{}}},draw:function(e,t,r,a){let o,s;i.l.info("Drawing flowchart"),a.db.clear();let{securityLevel:d,flowchart:c}=(0,i.g)();"sandbox"===d&&(o=(0,l.Ys)("#i"+t));let u="sandbox"===d?(0,l.Ys)(o.nodes()[0].contentDocument.body):(0,l.Ys)("body"),p="sandbox"===d?o.nodes()[0].contentDocument:document;try{a.parser.parse(e)}catch(e){i.l.debug("Parsing failed")}let f=a.db.getDirection();void 0===f&&(f="TD");let g=c.nodeSpacing||50,y=c.rankSpacing||50,b=new n.k({multigraph:!0,compound:!0}).setGraph({rankdir:f,nodesep:g,ranksep:y,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),w=a.db.getSubGraphs();for(let e=w.length-1;e>=0;e--)s=w[e],a.db.addVertex(s.id,s.title,"group",void 0,s.classes);let x=a.db.getVertices();i.l.warn("Get vertices",x);let v=a.db.getEdges(),k=0;for(k=w.length-1;k>=0;k--){s=w[k],(0,l.td_)("cluster").append("text");for(let e=0;e<s.nodes.length;e++)i.l.warn("Setting subgraph",s.nodes[e],a.db.lookUpDomId(s.nodes[e]),a.db.lookUpDomId(s.id)),b.setParent(a.db.lookUpDomId(s.nodes[e]),a.db.lookUpDomId(s.id))}X(x,b,t,u,p,a),H(v,b,a);let m=new A;V.addToRender(m),m.arrows().none=function(e,t,r,a){let n=e.append("marker").attr("id",t).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerUnits","strokeWidth").attr("markerWidth",8).attr("markerHeight",6).attr("orient","auto"),l=n.append("path").attr("d","M 0 0 L 0 0 L 0 0 z");(0,h.bg)(l,r[a+"Style"])},m.arrows().normal=function(e,t){let r=e.append("marker").attr("id",t).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerUnits","strokeWidth").attr("markerWidth",8).attr("markerHeight",6).attr("orient","auto");r.append("path").attr("d","M 0 0 L 10 5 L 0 10 z").attr("class","arrowheadPath").style("stroke-width",1).style("stroke-dasharray","1,0")};let S=u.select(`[id="${t}"]`),_=u.select("#"+t+" g");for(m(_,b),_.selectAll("g.node").attr("title",function(){return a.db.getTooltip(this.id)}),a.db.indexNodes("subGraph"+k),k=0;k<w.length;k++)if("undefined"!==(s=w[k]).title){let e=p.querySelectorAll("#"+t+' [id="'+a.db.lookUpDomId(s.id)+'"] rect'),r=p.querySelectorAll("#"+t+' [id="'+a.db.lookUpDomId(s.id)+'"]'),n=e[0].x.baseVal.value,i=e[0].y.baseVal.value,o=e[0].width.baseVal.value,d=(0,l.Ys)(r[0]),c=d.select(".label");c.attr("transform",`translate(${n+o/2}, ${i+14})`),c.attr("id",t+"Text");for(let e=0;e<s.classes.length;e++)r[0].classList.add(s.classes[e])}if(!c.htmlLabels){let e=p.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(let t of e){let e=t.getBBox(),r=p.createElementNS("http://www.w3.org/2000/svg","rect");r.setAttribute("rx",0),r.setAttribute("ry",0),r.setAttribute("width",e.width),r.setAttribute("height",e.height),t.insertBefore(r,t.firstChild)}}(0,B.s)(b,S,c.diagramPadding,c.useMaxWidth);let T=Object.keys(x);T.forEach(function(e){let r=x[e];if(r.link){let n=u.select("#"+t+' [id="'+a.db.lookUpDomId(e)+'"]');if(n){let e=p.createElementNS("http://www.w3.org/2000/svg","a");e.setAttributeNS("http://www.w3.org/2000/svg","class",r.classes.join(" ")),e.setAttributeNS("http://www.w3.org/2000/svg","href",r.link),e.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),"sandbox"===d?e.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):r.linkTarget&&e.setAttributeNS("http://www.w3.org/2000/svg","target",r.linkTarget);let t=n.insert(function(){return e},":first-child"),a=n.select(".label-container");a&&t.append(function(){return a.node()});let l=n.select(".label");l&&t.append(function(){return l.node()})}}})}},Q={parser:a.p,db:a.f,renderer:I.f,styles:I.a,init:e=>{e.flowchart||(e.flowchart={}),e.flowchart.arrowMarkerAbsolute=e.arrowMarkerAbsolute,F.setConf(e.flowchart),a.f.clear(),a.f.setGen("gen-1")}}},8707:function(e,t,r){r.d(t,{a:function(){return g},f:function(){return p}});var a=r(2437),n=r(7128),l=r(7471),i=r(347),o=r(9526),s=r(904),d=r(4347);let c={},h=function(e,t,r,a,n,l){let s=a.select(`[id="${r}"]`),c=Object.keys(e);c.forEach(function(r){let a;let c=e[r],h="default";c.classes.length>0&&(h=c.classes.join(" ")),h+=" flowchart-label";let u=(0,o.n)(c.styles),p=void 0!==c.text?c.text:c.id;if(i.l.info("vertex",c,c.labelType),"markdown"===c.labelType)i.l.info("vertex",c,c.labelType);else if((0,i.k)((0,i.g)().flowchart.htmlLabels)){let e={label:p.replace(/fa[blrs]?:fa-[\w-]+/g,e=>`<i class='${e.replace(":"," ")}'></i>`)};(a=(0,d.a)(s,e).node()).parentNode.removeChild(a)}else{let e=n.createElementNS("http://www.w3.org/2000/svg","text");e.setAttribute("style",u.labelStyle.replace("color:","fill:"));let t=p.split(i.e.lineBreakRegex);for(let r of t){let t=n.createElementNS("http://www.w3.org/2000/svg","tspan");t.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),t.setAttribute("dy","1em"),t.setAttribute("x","1"),t.textContent=r,e.appendChild(t)}a=e}let f=0,g="";switch(c.type){case"round":f=5,g="rect";break;case"square":case"group":default:g="rect";break;case"diamond":g="question";break;case"hexagon":g="hexagon";break;case"odd":case"odd_right":g="rect_left_inv_arrow";break;case"lean_right":g="lean_right";break;case"lean_left":g="lean_left";break;case"trapezoid":g="trapezoid";break;case"inv_trapezoid":g="inv_trapezoid";break;case"circle":g="circle";break;case"ellipse":g="ellipse";break;case"stadium":g="stadium";break;case"subroutine":g="subroutine";break;case"cylinder":g="cylinder";break;case"doublecircle":g="doublecircle"}t.setNode(c.id,{labelStyle:u.labelStyle,shape:g,labelText:p,labelType:c.labelType,rx:f,ry:f,class:h,style:u.style,id:c.id,link:c.link,linkTarget:c.linkTarget,tooltip:l.db.getTooltip(c.id)||"",domId:l.db.lookUpDomId(c.id),haveCallback:c.haveCallback,width:"group"===c.type?500:void 0,dir:c.dir,type:c.type,props:c.props,padding:(0,i.g)().flowchart.padding}),i.l.info("setNode",{labelStyle:u.labelStyle,labelType:c.labelType,shape:g,labelText:p,rx:f,ry:f,class:h,style:u.style,id:c.id,domId:l.db.lookUpDomId(c.id),width:"group"===c.type?500:void 0,type:c.type,dir:c.dir,props:c.props,padding:(0,i.g)().flowchart.padding})})},u=function(e,t,r){let a,l;i.l.info("abc78 edges = ",e);let s=0,d={};if(void 0!==e.defaultStyle){let t=(0,o.n)(e.defaultStyle);a=t.style,l=t.labelStyle}e.forEach(function(r){s++;var h="L-"+r.start+"-"+r.end;void 0===d[h]?(d[h]=0,i.l.info("abc78 new entry",h,d[h])):(d[h]++,i.l.info("abc78 new entry",h,d[h]));let u=h+"-"+d[h];i.l.info("abc78 new link id to be used is",h,u,d[h]);var p="LS-"+r.start,f="LE-"+r.end;let g={style:"",labelStyle:""};switch(g.minlen=r.length||1,"arrow_open"===r.type?g.arrowhead="none":g.arrowhead="normal",g.arrowTypeStart="arrow_open",g.arrowTypeEnd="arrow_open",r.type){case"double_arrow_cross":g.arrowTypeStart="arrow_cross";case"arrow_cross":g.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":g.arrowTypeStart="arrow_point";case"arrow_point":g.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":g.arrowTypeStart="arrow_circle";case"arrow_circle":g.arrowTypeEnd="arrow_circle"}let y="",b="";switch(r.stroke){case"normal":y="fill:none;",void 0!==a&&(y=a),void 0!==l&&(b=l),g.thickness="normal",g.pattern="solid";break;case"dotted":g.thickness="normal",g.pattern="dotted",g.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":g.thickness="thick",g.pattern="solid",g.style="stroke-width: 3.5px;fill:none;";break;case"invisible":g.thickness="invisible",g.pattern="solid",g.style="stroke-width: 0;fill:none;"}if(void 0!==r.style){let e=(0,o.n)(r.style);y=e.style,b=e.labelStyle}g.style=g.style+=y,g.labelStyle=g.labelStyle+=b,void 0!==r.interpolate?g.curve=(0,o.o)(r.interpolate,n.c_6):void 0!==e.defaultInterpolate?g.curve=(0,o.o)(e.defaultInterpolate,n.c_6):g.curve=(0,o.o)(c.curve,n.c_6),void 0===r.text?void 0!==r.style&&(g.arrowheadStyle="fill: #333"):(g.arrowheadStyle="fill: #333",g.labelpos="c"),g.labelType=r.labelType,g.label=r.text.replace(i.e.lineBreakRegex,"\n"),void 0===r.style&&(g.style=g.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),g.labelStyle=g.labelStyle.replace("color:","fill:"),g.id=u,g.classes="flowchart-link "+p+" "+f,t.setEdge(r.start,r.end,g,s)})},p={setConf:function(e){let t=Object.keys(e);for(let r of t)c[r]=e[r]},addVertices:h,addEdges:u,getClasses:function(e,t){i.l.info("Extracting classes"),t.db.clear();try{return t.parse(e),t.db.getClasses()}catch(e){return}},draw:function(e,t,r,d){let c,p;i.l.info("Drawing flowchart"),d.db.clear(),l.f.setGen("gen-2"),d.parser.parse(e);let f=d.db.getDirection();void 0===f&&(f="TD");let{securityLevel:g,flowchart:y}=(0,i.g)(),b=y.nodeSpacing||50,w=y.rankSpacing||50;"sandbox"===g&&(c=(0,n.Ys)("#i"+t));let x="sandbox"===g?(0,n.Ys)(c.nodes()[0].contentDocument.body):(0,n.Ys)("body"),v="sandbox"===g?c.nodes()[0].contentDocument:document,k=new a.k({multigraph:!0,compound:!0}).setGraph({rankdir:f,nodesep:b,ranksep:w,marginx:0,marginy:0}).setDefaultEdgeLabel(function(){return{}}),m=d.db.getSubGraphs();i.l.info("Subgraphs - ",m);for(let e=m.length-1;e>=0;e--)p=m[e],i.l.info("Subgraph - ",p),d.db.addVertex(p.id,{text:p.title,type:p.labelType},"group",void 0,p.classes,p.dir);let S=d.db.getVertices(),_=d.db.getEdges();i.l.info("Edges",_);let T=0;for(T=m.length-1;T>=0;T--){p=m[T],(0,n.td_)("cluster").append("text");for(let e=0;e<p.nodes.length;e++)i.l.info("Setting up subgraphs",p.nodes[e],p.id),k.setParent(p.nodes[e],p.id)}h(S,k,t,x,v,d),u(_,k);let C=x.select(`[id="${t}"]`),L=x.select("#"+t+" g");if((0,s.r)(L,k,["point","circle","cross"],"flowchart",t),o.u.insertTitle(C,"flowchartTitleText",y.titleTopMargin,d.db.getDiagramTitle()),(0,o.s)(k,C,y.diagramPadding,y.useMaxWidth),d.db.indexNodes("subGraph"+T),!y.htmlLabels){let e=v.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(let t of e){let e=t.getBBox(),r=v.createElementNS("http://www.w3.org/2000/svg","rect");r.setAttribute("rx",0),r.setAttribute("ry",0),r.setAttribute("width",e.width),r.setAttribute("height",e.height),t.insertBefore(r,t.firstChild)}}let A=Object.keys(S);A.forEach(function(e){let r=S[e];if(r.link){let a=(0,n.Ys)("#"+t+' [id="'+e+'"]');if(a){let e=v.createElementNS("http://www.w3.org/2000/svg","a");e.setAttributeNS("http://www.w3.org/2000/svg","class",r.classes.join(" ")),e.setAttributeNS("http://www.w3.org/2000/svg","href",r.link),e.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),"sandbox"===g?e.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):r.linkTarget&&e.setAttributeNS("http://www.w3.org/2000/svg","target",r.linkTarget);let t=a.insert(function(){return e},":first-child"),n=a.select(".label-container");n&&t.append(function(){return n.node()});let l=a.select(".label");l&&t.append(function(){return l.node()})}}})}},f=e=>`.label {
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
`,g=f}}]);