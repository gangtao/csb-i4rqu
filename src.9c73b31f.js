parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"D9Nj":[function(require,module,exports) {

},{}],"H99C":[function(require,module,exports) {
"use strict";function t(t,n){return i(t)||e(t,n)||r(t,n)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t,a){if(t){if("string"==typeof t)return n(t,a);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,a):void 0}}function n(t,a){(null==a||a>t.length)&&(a=t.length);for(var r=0,n=new Array(a);r<a;r++)n[r]=t[r];return n}function e(t,a){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,e,i=[],o=!0,c=!1;try{for(r=r.call(t);!(o=(n=r.next()).done)&&(i.push(n.value),!a||i.length!==a);o=!0);}catch(s){c=!0,e=s}finally{try{o||null==r.return||r.return()}finally{if(c)throw e}}return i}}function i(t){if(Array.isArray(t))return t}require("./styles.css");var o=rxjs,c=o.fromEvent,s=o.interval,l=rxjs.operators,u=l.take,d=l.map,f=[d3.curveBasis,d3.curveStep,d3.curveLinear,d3.curveCardinal,d3.curveBundle],p=50,h=5,v=d3.scaleOrdinal(d3.schemeCategory10),y=100,m=20,g=["A","B","C","D","E"],x=50,w=["point","bar","figure"],b=5,k=3e3,I=600,A=500,D=d3.line().curve(f[0]),L=0,S=100,B=1e4,M=!1,T=g.slice(0,3),R=5e3,V=5,j=!1,z="point",C="line",O=!0,E=!0,q=void 0,F=void 0,P=void 0,U=void 0,G=void 0,H=void 0,J=void 0,K=void 0,N=!1,Q={top:p,right:p,bottom:p,left:p},W=I-Q.left-Q.right,X=I-Q.top-Q.bottom;function Y(){var t=s(A),a=30,r=70;return t.pipe(u(1e3),d(function(t){return[T.map(function(){return Math.floor(Math.random()*(r-a))+a}),t,Date.now()-Math.floor(Math.random()*L)]}))}function Z(){new Date;return(new Date).toLocaleTimeString()}function _(t){var a=Date.now(),r=null;do{r=Date.now()}while(r-a<t)}function tt(){$("#sizeInput").change(function(t){I=parseInt(this.value),W=I-Q.left-Q.right,X=I-Q.top-Q.bottom,ot()}),$("#intervalInput").change(function(t){A=parseInt(this.value),ot()}),$("#durationInput").change(function(t){B=parseInt(this.value),ot()}),$("#timeMarginInput").change(function(t){S=parseInt(this.value)}),$("#curveSelect").change(function(t){D.curve(f[parseInt(this.value)])}),$("#latestDataTypeSelect").change(function(t){z=w[parseInt(this.value)],nt()}),$("#numberInput").change(function(t){T=g.slice(0,parseInt(this.value)),ot()}),$("#shareValueRangeInput").change(function(t){M=this.checked,rt()}),$("#historyFadeInput").change(function(t){R=parseInt(this.value)}),$("#historySizeInput").change(function(t){V=parseInt(this.value)}),$("#showRecentDataInput").change(function(t){j=this.checked}),$("#showTimeAxisInput").change(function(t){O=this.checked,at()}),$("#trendAsBarCheck").change(function(t){C=this.checked?"bar":"line"}),$("#showValueAxisInput").change(function(t){E=this.checked,rt()}),$("#restartButton").click(function(){ot()}),$("#stopButton").click(function(){N=!N,$(this).attr("disabled",!0)})}function at(){O?F=U.append("g").attr("class","timeAxis").attr("transform","translate(0,"+X+")").call(d3.axisBottom(P).ticks(d3.timeSecond.every(2))):$(".timeAxis").remove()}function rt(){$(".yAxis").remove(),$(".historyDistribution").remove();var t=X/T.length;G=T.map(function(a,r){if(M){var n=d3.scaleLinear().rangeRound([X,0]);return n.domain([0,y]),n}var e=d3.scaleLinear().rangeRound([X-r*t,X-(r+1)*t]);return e.domain([0,y]),e}),E&&(q=M?U.append("g").attr("class","yAxis").attr("transform","translate("+-m+", 0) ").call(d3.axisLeft(G[0]).ticks(0)):G.map(function(t){return U.append("g").attr("class","yAxis").attr("transform","translate("+-m+", 0) ").call(d3.axisLeft(t).ticks(0))}))}function nt(){$(".latest").remove(),J=T.map(function(t){return"bar"==z?H.append("rect").attr("class","latest").attr("new","1").attr("x",0).attr("y",X).attr("width",x).attr("height",0):"figure"==z?H.append("g").attr("class","latest").attr("new","1"):H.append("circle").attr("class","latest").attr("new","1").attr("cx",0).attr("cy",X).attr("r",0)})}function et(t,a,r,n,e,i,o){var c=t.select(".figureValue");c.empty()?t.append("text").attr("class","figureValue").attr("x",n).attr("y",e).text(a).style("fill",i).style("font-size",96):c.transition().duration(o).attr("x",n).attr("y",e).text(a);var s=r.length,l=r;s>20&&(l=r.slice(s-20,s));var u=l.length,d=d3.scaleTime().range([0,100]);d.domain([l[0][2],l[u-1][2]]);var p=d3.scaleLinear().rangeRound([50,0]);p.domain([0,y]);var h=d3.line().curve(f[3]);h.x(function(t){return d(t[2])}),h.y(function(t){return p(t[0])});var v=t.select(".figureLine");v.empty()&&(v=t.append("path").attr("class","figureLine").style("stroke",i)),v.transition().duration(o).attr("transform","translate("+n+","+e+")").attr("d",h(l))}function it(t,a,r,n,e,i){var o=20*A/500;M&&(o/=T.length),t.append("rect").attr("class","trend").attr("x",r+a-o/2+a*o).attr("y",n+e).attr("width",o).attr("height",0).style("fill",i).transition().duration(A).attr("y",n).attr("height",e)}function ot(){$("#chart").empty(),K&&K.unsubscribe(),ct(Y())}function ct(a){var r=d3.select("#chart").append("svg").attr("width",I).attr("height",I),n=(U=r.append("g").attr("transform","translate("+Q.left+","+Q.top+")")).append("clipPath").attr("id","rect-clip").append("rect").attr("x",0).attr("y",0).attr("width",I).attr("height",I);H=U.append("g").attr("clip-path","url(#rect-clip)"),rt(),P=d3.scaleTime().range([0,W]);var e=Date.now(),i=e+B;P.domain([e,i]),O&&(F=U.append("g").attr("class","timeAxis").attr("transform","translate(0,"+X+")").call(d3.axisBottom(P).ticks(d3.timeSecond.every(2)))),nt();var o=H.append("circle").attr("cx",0).attr("cy",X).attr("r",5).attr("class","data-time-indicator"),c=H.append("circle").attr("cx",0).attr("cy",X-10).attr("r",5).attr("class","current-time-indicator"),s=T.map(function(t){return[]}),l=T.map(function(t){return H.append("path").attr("class","line")}),u=U.append("text").attr("class","now").attr("x",I/2-80).attr("y",X+50).text(Z());D.x(function(t){return P(t[2])});var d=0,f=0;K=a.subscribe(function(a){var r=t(a,3),p=r[0],h=r[1],y=r[2];N&&(_(k),$("#stopButton").attr("disabled",!1),N=!1),o.transition().duration(A).attr("cx",P(y)),c.transition().duration(A).attr("cx",P(Date.now())),T.map(function(t){var a,r=T.indexOf(t),n=v(t),e=p[r],i=G[r],o=s[r];o.length>0&&(a=o[o.length-1]),o.push([e,h,y]);var c=function(){var t=I/T.length;return 0==B?r*t+x/2:P(y)};if(0!=B)if("bar"==C){var u=0;M&&(u=r),it(H,u,c(),i(e),i.range()[0]-i(e),n)}else D.y(function(t){return i(t[0])}),l[r].transition().delay(A).attr("d",D(o)).style("stroke",n);if(0==B){var d=J[r].attr("new"),f="1"==d?0:A;"bar"==z?J[r].transition().duration(f).attr("x",c()).attr("y",i(e)).attr("height",i.range()[0]-i(e)).style("fill",n):"figure"==z?et(J[r],e,o,c(),i(50),n,f):J[r].transition().duration(A).attr("cx",c()).attr("cy",i(e)).attr("r",5).style("fill",n),"1"==d&&J[r].attr("new","0")}else J[r].transition().duration(A).attr("cx",c()).attr("cy",i(e)).attr("r",5).style("fill",n);a&&0!=B&&H.append("line").attr("x1",P(a[2])).attr("y1",i(a[0])).attr("x2",P(a[2])).attr("y2",i(a[0])).attr("class","deltaline").attr("stroke",n).attr("stroke-width",2).transition().duration(A).attr("x2",P(y)).attr("y2",i(e)).transition().duration(0).attr("stroke-width",0);if(E){var g=d3.min(o,function(t){return t[0]}),w=d3.max(o,function(t){return t[0]}),$=d3.scaleLinear().rangeRound([i(g),i(w)]);$.domain([g,w]),M?q.transition().call(d3.axisLeft($).tickValues($.domain()).ticks(3)):q[r].transition().call(d3.axisLeft($).tickValues($.domain()).ticks(3)),U.append("circle").attr("class","historyDistribution").attr("cx",-m+Math.floor(10*Math.random())).attr("cy",i(e)).attr("r",2).style("fill",n).style("opacity",.3)}if(j){var k=H.append("circle").attr("cx",c()).attr("cy",i(e)).attr("r",0).classed("circle",!0).style("fill-opacity",.5);k.transition().delay(A).attr("x",c()).attr("cy",i(e)).attr("r",V).style("fill",n).transition().duration(R).attr("r",0).on("end",function(){k.remove()});var L=H.append("text").attr("class","dataLabel").attr("x",c()+10).attr("y",i(e)-10).attr("font-size",12);L.transition().delay(A).text(e).transition().duration(A*b).attr("font-size",0).on("end",function(){L.remove()})}});var g=s[0];if(g.length>1){var w=g[g.length-1];w[2],P(Date.now());u.text(Z())}if(g.length>2&&0!=B){var L=g[g.length-2],K=P(y),Q=P(L[2]);if(P(i+f)-K<S){var X=K-Q;X,f+=y-L[2],d-=X,H.transition().duration(A).attr("transform","translate("+d+",0)"),n.attr("x",-d).attr("width",I-d);var Y=d3.scaleTime().range([0,W]);Y.domain([e+f,i+f]),O&&F.transition().duration(A).call(d3.axisBottom(Y).ticks(d3.timeSecond.every(2)))}}})}$(function(){console.log("ready!"),tt(),ot()});
},{"./styles.css":"D9Nj"}]},{},["H99C"], null)
//# sourceMappingURL=/csb-i4rqu/src.9c73b31f.js.map