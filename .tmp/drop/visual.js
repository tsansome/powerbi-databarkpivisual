!function(){function n(n){return n&&(n.ownerDocument||n.document||n).documentElement}function t(n){return n&&(n.ownerDocument&&n.ownerDocument.defaultView||n.document&&n||n.defaultView)}function e(n,t){return t>n?-1:n>t?1:n>=t?0:NaN}function r(n){return null===n?NaN:+n}function i(n){return!isNaN(n)}function u(n){return{left:function(t,e,r,i){for(arguments.length<3&&(r=0),arguments.length<4&&(i=t.length);i>r;){var u=r+i>>>1;n(t[u],e)<0?r=u+1:i=u}return r},right:function(t,e,r,i){for(arguments.length<3&&(r=0),arguments.length<4&&(i=t.length);i>r;){var u=r+i>>>1;n(t[u],e)>0?i=u:r=u+1}return r}}}function o(n){return n.length}function a(n){for(var t=1;n*t%1;)t*=10;return t}function l(n,t){for(var e in t)Object.defineProperty(n.prototype,e,{value:t[e],enumerable:!1})}function c(){this._=Object.create(null)}function f(n){return(n+="")===bo||n[0]===_o?_o+n:n}function s(n){return(n+="")[0]===_o?n.slice(1):n}function h(n){return f(n)in this._}function p(n){return(n=f(n))in this._&&delete this._[n]}function g(){var n=[];for(var t in this._)n.push(s(t));return n}function v(){var n=0;for(var t in this._)++n;return n}function d(){for(var n in this._)return!1;return!0}function y(){this._=Object.create(null)}function m(n){return n}function M(n,t,e){return function(){var r=e.apply(t,arguments);return r===t?n:r}}function x(n,t){if(t in n)return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e=0,r=wo.length;r>e;++e){var i=wo[e]+t;if(i in n)return i}}function b(){}function _(){}function w(n){function t(){for(var t,r=e,i=-1,u=r.length;++i<u;)(t=r[i].on)&&t.apply(this,arguments);return n}var e=[],r=new c;return t.on=function(t,i){var u,o=r.get(t);return arguments.length<2?o&&o.on:(o&&(o.on=null,e=e.slice(0,u=e.indexOf(o)).concat(e.slice(u+1)),r.remove(t)),i&&e.push(r.set(t,{on:i})),n)},t}function S(){ao.event.preventDefault()}function k(){for(var n,t=ao.event;n=t.sourceEvent;)t=n;return t}function N(n){for(var t=new _,e=0,r=arguments.length;++e<r;)t[arguments[e]]=w(t);return t.of=function(e,r){return function(i){try{var u=i.sourceEvent=ao.event;i.target=n,ao.event=i,t[i.type].apply(e,r)}finally{ao.event=u}}},t}function E(n){return ko(n,Co),n}function A(n){return"function"==typeof n?n:function(){return No(n,this)}}function C(n){return"function"==typeof n?n:function(){return Eo(n,this)}}function z(n,t){function e(){this.removeAttribute(n)}function r(){this.removeAttributeNS(n.space,n.local)}function i(){this.setAttribute(n,t)}function u(){this.setAttributeNS(n.space,n.local,t)}function o(){var e=t.apply(this,arguments);null==e?this.removeAttribute(n):this.setAttribute(n,e)}function a(){var e=t.apply(this,arguments);null==e?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}return n=ao.ns.qualify(n),null==t?n.local?r:e:"function"==typeof t?n.local?a:o:n.local?u:i}function L(n){return n.trim().replace(/\s+/g," ")}function q(n){return new RegExp("(?:^|\\s+)"+ao.requote(n)+"(?:\\s+|$)","g")}function T(n){return(n+"").trim().split(/^|\s+/)}function R(n,t){function e(){for(var e=-1;++e<i;)n[e](this,t)}function r(){for(var e=-1,r=t.apply(this,arguments);++e<i;)n[e](this,r)}n=T(n).map(D);var i=n.length;return"function"==typeof t?r:e}function D(n){var t=q(n);return function(e,r){if(i=e.classList)return r?i.add(n):i.remove(n);var i=e.getAttribute("class")||"";r?(t.lastIndex=0,t.test(i)||e.setAttribute("class",L(i+" "+n))):e.setAttribute("class",L(i.replace(t," ")))}}function P(n,t,e){function r(){this.style.removeProperty(n)}function i(){this.style.setProperty(n,t,e)}function u(){var r=t.apply(this,arguments);null==r?this.style.removeProperty(n):this.style.setProperty(n,r,e)}return null==t?r:"function"==typeof t?u:i}function U(n,t){function e(){delete this[n]}function r(){this[n]=t}function i(){var e=t.apply(this,arguments);null==e?delete this[n]:this[n]=e}return null==t?e:"function"==typeof t?i:r}function j(n){function t(){var t=this.ownerDocument,e=this.namespaceURI;return e===zo&&t.documentElement.namespaceURI===zo?t.createElement(n):t.createElementNS(e,n)}function e(){return this.ownerDocument.createElementNS(n.space,n.local)}return"function"==typeof n?n:(n=ao.ns.qualify(n)).local?e:t}function F(){var n=this.parentNode;n&&n.removeChild(this)}function H(n){return{__data__:n}}function O(n){return function(){return Ao(this,n)}}function I(n){return arguments.length||(n=e),function(t,e){return t&&e?n(t.__data__,e.__data__):!t-!e}}function Y(n,t){for(var e=0,r=n.length;r>e;e++)for(var i,u=n[e],o=0,a=u.length;a>o;o++)(i=u[o])&&t(i,o,e);return n}function Z(n){return ko(n,qo),n}function V(n){var t,e;return function(r,i,u){var o,a=n[u].update,l=a.length;for(u!=e&&(e=u,t=0),i>=t&&(t=i+1);!(o=a[t])&&++t<l;);return o}}function X(n,t,e){function r(){var t=this[o];t&&(this.removeEventListener(n,t,t.$),delete this[o])}function i(){var i=l(t,co(arguments));r.call(this),this.addEventListener(n,this[o]=i,i.$=e),i._=t}function u(){var t,e=new RegExp("^__on([^.]+)"+ao.requote(n)+"$");for(var r in this)if(t=r.match(e)){var i=this[r];this.removeEventListener(t[1],i,i.$),delete this[r]}}var o="__on"+n,a=n.indexOf("."),l=$;a>0&&(n=n.slice(0,a));var c=To.get(n);return c&&(n=c,l=B),a?t?i:r:t?b:u}function $(n,t){return function(e){var r=ao.event;ao.event=e,t[0]=this.__data__;try{n.apply(this,t)}finally{ao.event=r}}}function B(n,t){var e=$(n,t);return function(n){var t=this,r=n.relatedTarget;r&&(r===t||8&r.compareDocumentPosition(t))||e.call(t,n)}}function W(e){var r=".dragsuppress-"+ ++Do,i="click"+r,u=ao.select(t(e)).on("touchmove"+r,S).on("dragstart"+r,S).on("selectstart"+r,S);if(null==Ro&&(Ro="onselectstart"in e?!1:x(e.style,"userSelect")),Ro){var o=n(e).style,a=o[Ro];o[Ro]="none"}return function(n){if(u.on(r,null),Ro&&(o[Ro]=a),n){var t=function(){u.on(i,null)};u.on(i,function(){S(),t()},!0),setTimeout(t,0)}}}function J(n,e){e.changedTouches&&(e=e.changedTouches[0]);var r=n.ownerSVGElement||n;if(r.createSVGPoint){var i=r.createSVGPoint();if(0>Po){var u=t(n);if(u.scrollX||u.scrollY){r=ao.select("body").append("svg").style({position:"absolute",top:0,left:0,margin:0,padding:0,border:"none"},"important");var o=r[0][0].getScreenCTM();Po=!(o.f||o.e),r.remove()}}return Po?(i.x=e.pageX,i.y=e.pageY):(i.x=e.clientX,i.y=e.clientY),i=i.matrixTransform(n.getScreenCTM().inverse()),[i.x,i.y]}var a=n.getBoundingClientRect();return[e.clientX-a.left-n.clientLeft,e.clientY-a.top-n.clientTop]}function G(){return ao.event.changedTouches[0].identifier}function K(n){return n>0?1:0>n?-1:0}function Q(n,t,e){return(t[0]-n[0])*(e[1]-n[1])-(t[1]-n[1])*(e[0]-n[0])}function nn(n){return n>1?0:-1>n?Fo:Math.acos(n)}function tn(n){return n>1?Io:-1>n?-Io:Math.asin(n)}function en(n){return((n=Math.exp(n))-1/n)/2}function rn(n){return((n=Math.exp(n))+1/n)/2}function un(n){return((n=Math.exp(2*n))-1)/(n+1)}function on(n){return(n=Math.sin(n/2))*n}function an(){}function ln(n,t,e){return this instanceof ln?(this.h=+n,this.s=+t,void(this.l=+e)):arguments.length<2?n instanceof ln?new ln(n.h,n.s,n.l):_n(""+n,wn,ln):new ln(n,t,e)}function cn(n,t,e){function r(n){return n>360?n-=360:0>n&&(n+=360),60>n?u+(o-u)*n/60:180>n?o:240>n?u+(o-u)*(240-n)/60:u}function i(n){return Math.round(255*r(n))}var u,o;return n=isNaN(n)?0:(n%=360)<0?n+360:n,t=isNaN(t)?0:0>t?0:t>1?1:t,e=0>e?0:e>1?1:e,o=.5>=e?e*(1+t):e+t-e*t,u=2*e-o,new mn(i(n+120),i(n),i(n-120))}function fn(n,t,e){return this instanceof fn?(this.h=+n,this.c=+t,void(this.l=+e)):arguments.length<2?n instanceof fn?new fn(n.h,n.c,n.l):n instanceof hn?gn(n.l,n.a,n.b):gn((n=Sn((n=ao.rgb(n)).r,n.g,n.b)).l,n.a,n.b):new fn(n,t,e)}function sn(n,t,e){return isNaN(n)&&(n=0),isNaN(t)&&(t=0),new hn(e,Math.cos(n*=Yo)*t,Math.sin(n)*t)}function hn(n,t,e){return this instanceof hn?(this.l=+n,this.a=+t,void(this.b=+e)):arguments.length<2?n instanceof hn?new hn(n.l,n.a,n.b):n instanceof fn?sn(n.h,n.c,n.l):Sn((n=mn(n)).r,n.g,n.b):new hn(n,t,e)}function pn(n,t,e){var r=(n+16)/116,i=r+t/500,u=r-e/200;return i=vn(i)*na,r=vn(r)*ta,u=vn(u)*ea,new mn(yn(3.2404542*i-1.5371385*r-.4985314*u),yn(-.969266*i+1.8760108*r+.041556*u),yn(.0556434*i-.2040259*r+1.0572252*u))}function gn(n,t,e){return n>0?new fn(Math.atan2(e,t)*Zo,Math.sqrt(t*t+e*e),n):new fn(NaN,NaN,n)}function vn(n){return n>.206893034?n*n*n:(n-4/29)/7.787037}function dn(n){return n>.008856?Math.pow(n,1/3):7.787037*n+4/29}function yn(n){return Math.round(255*(.00304>=n?12.92*n:1.055*Math.pow(n,1/2.4)-.055))}function mn(n,t,e){return this instanceof mn?(this.r=~~n,this.g=~~t,void(this.b=~~e)):arguments.length<2?n instanceof mn?new mn(n.r,n.g,n.b):_n(""+n,mn,cn):new mn(n,t,e)}function Mn(n){return new mn(n>>16,n>>8&255,255&n)}function xn(n){return Mn(n)+""}function bn(n){return 16>n?"0"+Math.max(0,n).toString(16):Math.min(255,n).toString(16)}function _n(n,t,e){var r,i,u,o=0,a=0,l=0;if(r=/([a-z]+)\((.*)\)/.exec(n=n.toLowerCase()))switch(i=r[2].split(","),r[1]){case"hsl":return e(parseFloat(i[0]),parseFloat(i[1])/100,parseFloat(i[2])/100);case"rgb":return t(Nn(i[0]),Nn(i[1]),Nn(i[2]))}return(u=ua.get(n))?t(u.r,u.g,u.b):(null==n||"#"!==n.charAt(0)||isNaN(u=parseInt(n.slice(1),16))||(4===n.length?(o=(3840&u)>>4,o=o>>4|o,a=240&u,a=a>>4|a,l=15&u,l=l<<4|l):7===n.length&&(o=(16711680&u)>>16,a=(65280&u)>>8,l=255&u)),t(o,a,l))}function wn(n,t,e){var r,i,u=Math.min(n/=255,t/=255,e/=255),o=Math.max(n,t,e),a=o-u,l=(o+u)/2;return a?(i=.5>l?a/(o+u):a/(2-o-u),r=n==o?(t-e)/a+(e>t?6:0):t==o?(e-n)/a+2:(n-t)/a+4,r*=60):(r=NaN,i=l>0&&1>l?0:r),new ln(r,i,l)}function Sn(n,t,e){n=kn(n),t=kn(t),e=kn(e);var r=dn((.4124564*n+.3575761*t+.1804375*e)/na),i=dn((.2126729*n+.7151522*t+.072175*e)/ta),u=dn((.0193339*n+.119192*t+.9503041*e)/ea);return hn(116*i-16,500*(r-i),200*(i-u))}function kn(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function Nn(n){var t=parseFloat(n);return"%"===n.charAt(n.length-1)?Math.round(2.55*t):t}function En(n){return"function"==typeof n?n:function(){return n}}function An(n){return function(t,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=null),Cn(t,e,n,r)}}function Cn(n,t,e,r){function i(){var n,t=l.status;if(!t&&Ln(l)||t>=200&&300>t||304===t){try{n=e.call(u,l)}catch(r){return void o.error.call(u,r)}o.load.call(u,n)}else o.error.call(u,l)}var u={},o=ao.dispatch("beforesend","progress","load","error"),a={},l=new XMLHttpRequest,c=null;return!this.XDomainRequest||"withCredentials"in l||!/^(http(s)?:)?\/\//.test(n)||(l=new XDomainRequest),"onload"in l?l.onload=l.onerror=i:l.onreadystatechange=function(){l.readyState>3&&i()},l.onprogress=function(n){var t=ao.event;ao.event=n;try{o.progress.call(u,l)}finally{ao.event=t}},u.header=function(n,t){return n=(n+"").toLowerCase(),arguments.length<2?a[n]:(null==t?delete a[n]:a[n]=t+"",u)},u.mimeType=function(n){return arguments.length?(t=null==n?null:n+"",u):t},u.responseType=function(n){return arguments.length?(c=n,u):c},u.response=function(n){return e=n,u},["get","post"].forEach(function(n){u[n]=function(){return u.send.apply(u,[n].concat(co(arguments)))}}),u.send=function(e,r,i){if(2===arguments.length&&"function"==typeof r&&(i=r,r=null),l.open(e,n,!0),null==t||"accept"in a||(a.accept=t+",*/*"),l.setRequestHeader)for(var f in a)l.setRequestHeader(f,a[f]);return null!=t&&l.overrideMimeType&&l.overrideMimeType(t),null!=c&&(l.responseType=c),null!=i&&u.on("error",i).on("load",function(n){i(null,n)}),o.beforesend.call(u,l),l.send(null==r?null:r),u},u.abort=function(){return l.abort(),u},ao.rebind(u,o,"on"),null==r?u:u.get(zn(r))}function zn(n){return 1===n.length?function(t,e){n(null==t?e:null)}:n}function Ln(n){var t=n.responseType;return t&&"text"!==t?n.response:n.responseText}function qn(n,t,e){var r=arguments.length;2>r&&(t=0),3>r&&(e=Date.now());var i=e+t,u={c:n,t:i,n:null};return aa?aa.n=u:oa=u,aa=u,la||(ca=clearTimeout(ca),la=1,fa(Tn)),u}function Tn(){var n=Rn(),t=Dn()-n;t>24?(isFinite(t)&&(clearTimeout(ca),ca=setTimeout(Tn,t)),la=0):(la=1,fa(Tn))}function Rn(){for(var n=Date.now(),t=oa;t;)n>=t.t&&t.c(n-t.t)&&(t.c=null),t=t.n;return n}function Dn(){for(var n,t=oa,e=1/0;t;)t.c?(t.t<e&&(e=t.t),t=(n=t).n):t=n?n.n=t.n:oa=t.n;return aa=n,e}function Pn(n,t){return t-(n?Math.ceil(Math.log(n)/Math.LN10):1)}function Un(n,t){var e=Math.pow(10,3*xo(8-t));return{scale:t>8?function(n){return n/e}:function(n){return n*e},symbol:n}}function jn(n){var t=n.decimal,e=n.thousands,r=n.grouping,i=n.currency,u=r&&e?function(n,t){for(var i=n.length,u=[],o=0,a=r[0],l=0;i>0&&a>0&&(l+a+1>t&&(a=Math.max(1,t-l)),u.push(n.substring(i-=a,i+a)),!((l+=a+1)>t));)a=r[o=(o+1)%r.length];return u.reverse().join(e)}:m;return function(n){var e=ha.exec(n),r=e[1]||" ",o=e[2]||">",a=e[3]||"-",l=e[4]||"",c=e[5],f=+e[6],s=e[7],h=e[8],p=e[9],g=1,v="",d="",y=!1,m=!0;switch(h&&(h=+h.substring(1)),(c||"0"===r&&"="===o)&&(c=r="0",o="="),p){case"n":s=!0,p="g";break;case"%":g=100,d="%",p="f";break;case"p":g=100,d="%",p="r";break;case"b":case"o":case"x":case"X":"#"===l&&(v="0"+p.toLowerCase());case"c":m=!1;case"d":y=!0,h=0;break;case"s":g=-1,p="r"}"$"===l&&(v=i[0],d=i[1]),"r"!=p||h||(p="g"),null!=h&&("g"==p?h=Math.max(1,Math.min(21,h)):"e"!=p&&"f"!=p||(h=Math.max(0,Math.min(20,h)))),p=pa.get(p)||Fn;var M=c&&s;return function(n){var e=d;if(y&&n%1)return"";var i=0>n||0===n&&0>1/n?(n=-n,"-"):"-"===a?"":a;if(0>g){var l=ao.formatPrefix(n,h);n=l.scale(n),e=l.symbol+d}else n*=g;n=p(n,h);var x,b,_=n.lastIndexOf(".");if(0>_){var w=m?n.lastIndexOf("e"):-1;0>w?(x=n,b=""):(x=n.substring(0,w),b=n.substring(w))}else x=n.substring(0,_),b=t+n.substring(_+1);!c&&s&&(x=u(x,1/0));var S=v.length+x.length+b.length+(M?0:i.length),k=f>S?new Array(S=f-S+1).join(r):"";return M&&(x=u(k+x,k.length?f-b.length:1/0)),i+=v,n=x+b,("<"===o?i+n+k:">"===o?k+i+n:"^"===o?k.substring(0,S>>=1)+i+n+k.substring(S):i+(M?n:k+n))+e}}}function Fn(n){return n+""}function Hn(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}function On(n,t,e){function r(t){var e=n(t),r=u(e,1);return r-t>t-e?e:r}function i(e){return t(e=n(new va(e-1)),1),e}function u(n,e){return t(n=new va(+n),e),n}function o(n,r,u){var o=i(n),a=[];if(u>1)for(;r>o;)e(o)%u||a.push(new Date(+o)),t(o,1);else for(;r>o;)a.push(new Date(+o)),t(o,1);return a}function a(n,t,e){try{va=Hn;var r=new Hn;return r._=n,o(r,t,e)}finally{va=Date}}n.floor=n,n.round=r,n.ceil=i,n.offset=u,n.range=o;var l=n.utc=In(n);return l.floor=l,l.round=In(r),l.ceil=In(i),l.offset=In(u),l.range=a,n}function In(n){return function(t,e){try{va=Hn;var r=new Hn;return r._=t,n(r,e)._}finally{va=Date}}}function Yn(n){function t(n){function t(t){for(var e,i,u,o=[],a=-1,l=0;++a<r;)37===n.charCodeAt(a)&&(o.push(n.slice(l,a)),null!=(i=ya[e=n.charAt(++a)])&&(e=n.charAt(++a)),(u=A[e])&&(e=u(t,null==i?"e"===e?" ":"0":i)),o.push(e),l=a+1);return o.push(n.slice(l,a)),o.join("")}var r=n.length;return t.parse=function(t){var r={y:1900,m:0,d:1,H:0,M:0,S:0,L:0,Z:null},i=e(r,n,t,0);if(i!=t.length)return null;"p"in r&&(r.H=r.H%12+12*r.p);var u=null!=r.Z&&va!==Hn,o=new(u?Hn:va);return"j"in r?o.setFullYear(r.y,0,r.j):"W"in r||"U"in r?("w"in r||(r.w="W"in r?1:0),o.setFullYear(r.y,0,1),o.setFullYear(r.y,0,"W"in r?(r.w+6)%7+7*r.W-(o.getDay()+5)%7:r.w+7*r.U-(o.getDay()+6)%7)):o.setFullYear(r.y,r.m,r.d),o.setHours(r.H+(r.Z/100|0),r.M+r.Z%100,r.S,r.L),u?o._:o},t.toString=function(){return n},t}function e(n,t,e,r){for(var i,u,o,a=0,l=t.length,c=e.length;l>a;){if(r>=c)return-1;if(i=t.charCodeAt(a++),37===i){if(o=t.charAt(a++),u=C[o in ya?t.charAt(a++):o],!u||(r=u(n,e,r))<0)return-1}else if(i!=e.charCodeAt(r++))return-1}return r}function r(n,t,e){_.lastIndex=0;var r=_.exec(t.slice(e));return r?(n.w=w.get(r[0].toLowerCase()),e+r[0].length):-1}function i(n,t,e){x.lastIndex=0;var r=x.exec(t.slice(e));return r?(n.w=b.get(r[0].toLowerCase()),e+r[0].length):-1}function u(n,t,e){N.lastIndex=0;var r=N.exec(t.slice(e));return r?(n.m=E.get(r[0].toLowerCase()),e+r[0].length):-1}function o(n,t,e){S.lastIndex=0;var r=S.exec(t.slice(e));return r?(n.m=k.get(r[0].toLowerCase()),e+r[0].length):-1}function a(n,t,r){return e(n,A.c.toString(),t,r)}function l(n,t,r){return e(n,A.x.toString(),t,r)}function c(n,t,r){return e(n,A.X.toString(),t,r)}function f(n,t,e){var r=M.get(t.slice(e,e+=2).toLowerCase());return null==r?-1:(n.p=r,e)}var s=n.dateTime,h=n.date,p=n.time,g=n.periods,v=n.days,d=n.shortDays,y=n.months,m=n.shortMonths;t.utc=function(n){function e(n){try{va=Hn;var t=new va;return t._=n,r(t)}finally{va=Date}}var r=t(n);return e.parse=function(n){try{va=Hn;var t=r.parse(n);return t&&t._}finally{va=Date}},e.toString=r.toString,e},t.multi=t.utc.multi=ct;var M=ao.map(),x=Vn(v),b=Xn(v),_=Vn(d),w=Xn(d),S=Vn(y),k=Xn(y),N=Vn(m),E=Xn(m);g.forEach(function(n,t){M.set(n.toLowerCase(),t)});var A={a:function(n){return d[n.getDay()]},A:function(n){return v[n.getDay()]},b:function(n){return m[n.getMonth()]},B:function(n){return y[n.getMonth()]},c:t(s),d:function(n,t){return Zn(n.getDate(),t,2)},e:function(n,t){return Zn(n.getDate(),t,2)},H:function(n,t){return Zn(n.getHours(),t,2)},I:function(n,t){return Zn(n.getHours()%12||12,t,2)},j:function(n,t){return Zn(1+ga.dayOfYear(n),t,3)},L:function(n,t){return Zn(n.getMilliseconds(),t,3)},m:function(n,t){return Zn(n.getMonth()+1,t,2)},M:function(n,t){return Zn(n.getMinutes(),t,2)},p:function(n){return g[+(n.getHours()>=12)]},S:function(n,t){return Zn(n.getSeconds(),t,2)},U:function(n,t){return Zn(ga.sundayOfYear(n),t,2)},w:function(n){return n.getDay()},W:function(n,t){return Zn(ga.mondayOfYear(n),t,2)},x:t(h),X:t(p),y:function(n,t){return Zn(n.getFullYear()%100,t,2)},Y:function(n,t){return Zn(n.getFullYear()%1e4,t,4)},Z:at,"%":function(){return"%"}},C={a:r,A:i,b:u,B:o,c:a,d:tt,e:tt,H:rt,I:rt,j:et,L:ot,m:nt,M:it,p:f,S:ut,U:Bn,w:$n,W:Wn,x:l,X:c,y:Gn,Y:Jn,Z:Kn,"%":lt};return t}function Zn(n,t,e){var r=0>n?"-":"",i=(r?-n:n)+"",u=i.length;return r+(e>u?new Array(e-u+1).join(t)+i:i)}function Vn(n){return new RegExp("^(?:"+n.map(ao.requote).join("|")+")","i")}function Xn(n){for(var t=new c,e=-1,r=n.length;++e<r;)t.set(n[e].toLowerCase(),e);return t}function $n(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+1));return r?(n.w=+r[0],e+r[0].length):-1}function Bn(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e));return r?(n.U=+r[0],e+r[0].length):-1}function Wn(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e));return r?(n.W=+r[0],e+r[0].length):-1}function Jn(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+4));return r?(n.y=+r[0],e+r[0].length):-1}function Gn(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+2));return r?(n.y=Qn(+r[0]),e+r[0].length):-1}function Kn(n,t,e){return/^[+-]\d{4}$/.test(t=t.slice(e,e+5))?(n.Z=-t,e+5):-1}function Qn(n){return n+(n>68?1900:2e3)}function nt(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+2));return r?(n.m=r[0]-1,e+r[0].length):-1}function tt(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+2));return r?(n.d=+r[0],e+r[0].length):-1}function et(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+3));return r?(n.j=+r[0],e+r[0].length):-1}function rt(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+2));return r?(n.H=+r[0],e+r[0].length):-1}function it(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+2));return r?(n.M=+r[0],e+r[0].length):-1}function ut(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+2));return r?(n.S=+r[0],e+r[0].length):-1}function ot(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+3));return r?(n.L=+r[0],e+r[0].length):-1}function at(n){var t=n.getTimezoneOffset(),e=t>0?"-":"+",r=xo(t)/60|0,i=xo(t)%60;return e+Zn(r,"0",2)+Zn(i,"0",2)}function lt(n,t,e){Ma.lastIndex=0;var r=Ma.exec(t.slice(e,e+1));return r?e+r[0].length:-1}function ct(n){for(var t=n.length,e=-1;++e<t;)n[e][0]=this(n[e][0]);return function(t){for(var e=0,r=n[e];!r[1](t);)r=n[++e];return r[0](t)}}function ft(){}function st(n,t,e){var r=e.s=n+t,i=r-n,u=r-i;e.t=n-u+(t-i)}function ht(n,t){n&&wa.hasOwnProperty(n.type)&&wa[n.type](n,t)}function pt(n,t,e){var r,i=-1,u=n.length-e;for(t.lineStart();++i<u;)r=n[i],t.point(r[0],r[1],r[2]);t.lineEnd()}function gt(n,t){var e=-1,r=n.length;for(t.polygonStart();++e<r;)pt(n[e],t,1);t.polygonEnd()}function vt(){function n(n,t){n*=Yo,t=t*Yo/2+Fo/4;var e=n-r,o=e>=0?1:-1,a=o*e,l=Math.cos(t),c=Math.sin(t),f=u*c,s=i*l+f*Math.cos(a),h=f*o*Math.sin(a);ka.add(Math.atan2(h,s)),r=n,i=l,u=c}var t,e,r,i,u;Na.point=function(o,a){Na.point=n,r=(t=o)*Yo,i=Math.cos(a=(e=a)*Yo/2+Fo/4),u=Math.sin(a)},Na.lineEnd=function(){n(t,e)}}function dt(n){var t=n[0],e=n[1],r=Math.cos(e);return[r*Math.cos(t),r*Math.sin(t),Math.sin(e)]}function yt(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function mt(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function Mt(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function xt(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function bt(n){var t=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function _t(n){return[Math.atan2(n[1],n[0]),tn(n[2])]}function wt(n,t){return xo(n[0]-t[0])<Uo&&xo(n[1]-t[1])<Uo}function St(n,t){n*=Yo;var e=Math.cos(t*=Yo);kt(e*Math.cos(n),e*Math.sin(n),Math.sin(t))}function kt(n,t,e){++Ea,Ca+=(n-Ca)/Ea,za+=(t-za)/Ea,La+=(e-La)/Ea}function Nt(){function n(n,i){n*=Yo;var u=Math.cos(i*=Yo),o=u*Math.cos(n),a=u*Math.sin(n),l=Math.sin(i),c=Math.atan2(Math.sqrt((c=e*l-r*a)*c+(c=r*o-t*l)*c+(c=t*a-e*o)*c),t*o+e*a+r*l);Aa+=c,qa+=c*(t+(t=o)),Ta+=c*(e+(e=a)),Ra+=c*(r+(r=l)),kt(t,e,r)}var t,e,r;ja.point=function(i,u){i*=Yo;var o=Math.cos(u*=Yo);t=o*Math.cos(i),e=o*Math.sin(i),r=Math.sin(u),ja.point=n,kt(t,e,r)}}function Et(){ja.point=St}function At(){function n(n,t){n*=Yo;var e=Math.cos(t*=Yo),o=e*Math.cos(n),a=e*Math.sin(n),l=Math.sin(t),c=i*l-u*a,f=u*o-r*l,s=r*a-i*o,h=Math.sqrt(c*c+f*f+s*s),p=r*o+i*a+u*l,g=h&&-nn(p)/h,v=Math.atan2(h,p);Da+=g*c,Pa+=g*f,Ua+=g*s,Aa+=v,qa+=v*(r+(r=o)),Ta+=v*(i+(i=a)),Ra+=v*(u+(u=l)),kt(r,i,u)}var t,e,r,i,u;ja.point=function(o,a){t=o,e=a,ja.point=n,o*=Yo;var l=Math.cos(a*=Yo);r=l*Math.cos(o),i=l*Math.sin(o),u=Math.sin(a),kt(r,i,u)},ja.lineEnd=function(){n(t,e),ja.lineEnd=Et,ja.point=St}}function Ct(n,t){function e(e,r){return e=n(e,r),t(e[0],e[1])}return n.invert&&t.invert&&(e.invert=function(e,r){return e=t.invert(e,r),e&&n.invert(e[0],e[1])}),e}function zt(){return!0}function Lt(n,t,e,r,i){var u=[],o=[];if(n.forEach(function(n){if(!((t=n.length-1)<=0)){var t,e=n[0],r=n[t];if(wt(e,r)){i.lineStart();for(var a=0;t>a;++a)i.point((e=n[a])[0],e[1]);return void i.lineEnd()}var l=new Tt(e,n,null,!0),c=new Tt(e,null,l,!1);l.o=c,u.push(l),o.push(c),l=new Tt(r,n,null,!1),c=new Tt(r,null,l,!0),l.o=c,u.push(l),o.push(c)}}),o.sort(t),qt(u),qt(o),u.length){for(var a=0,l=e,c=o.length;c>a;++a)o[a].e=l=!l;for(var f,s,h=u[0];;){for(var p=h,g=!0;p.v;)if((p=p.n)===h)return;f=p.z,i.lineStart();do{if(p.v=p.o.v=!0,p.e){if(g)for(var a=0,c=f.length;c>a;++a)i.point((s=f[a])[0],s[1]);else r(p.x,p.n.x,1,i);p=p.n}else{if(g){f=p.p.z;for(var a=f.length-1;a>=0;--a)i.point((s=f[a])[0],s[1])}else r(p.x,p.p.x,-1,i);p=p.p}p=p.o,f=p.z,g=!g}while(!p.v);i.lineEnd()}}}function qt(n){if(t=n.length){for(var t,e,r=0,i=n[0];++r<t;)i.n=e=n[r],e.p=i,i=e;i.n=e=n[0],e.p=i}}function Tt(n,t,e,r){this.x=n,this.z=t,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function Rt(n,t,e,r){return function(i,u){function o(t,e){var r=i(t,e);n(t=r[0],e=r[1])&&u.point(t,e)}function a(n,t){var e=i(n,t);d.point(e[0],e[1])}function l(){m.point=a,d.lineStart()}function c(){m.point=o,d.lineEnd()}function f(n,t){v.push([n,t]);var e=i(n,t);x.point(e[0],e[1])}function s(){x.lineStart(),v=[]}function h(){f(v[0][0],v[0][1]),x.lineEnd();var n,t=x.clean(),e=M.buffer(),r=e.length;if(v.pop(),g.push(v),v=null,r)if(1&t){n=e[0];var i,r=n.length-1,o=-1;if(r>0){for(b||(u.polygonStart(),b=!0),u.lineStart();++o<r;)u.point((i=n[o])[0],i[1]);u.lineEnd()}}else r>1&&2&t&&e.push(e.pop().concat(e.shift())),p.push(e.filter(Dt))}var p,g,v,d=t(u),y=i.invert(r[0],r[1]),m={point:o,lineStart:l,lineEnd:c,polygonStart:function(){m.point=f,m.lineStart=s,m.lineEnd=h,p=[],g=[]},polygonEnd:function(){m.point=o,m.lineStart=l,m.lineEnd=c,p=ao.merge(p);var n=Ot(y,g);p.length?(b||(u.polygonStart(),b=!0),Lt(p,Ut,n,e,u)):n&&(b||(u.polygonStart(),b=!0),u.lineStart(),e(null,null,1,u),u.lineEnd()),b&&(u.polygonEnd(),b=!1),p=g=null},sphere:function(){u.polygonStart(),u.lineStart(),e(null,null,1,u),u.lineEnd(),u.polygonEnd()}},M=Pt(),x=t(M),b=!1;return m}}function Dt(n){return n.length>1}function Pt(){var n,t=[];return{lineStart:function(){t.push(n=[])},point:function(t,e){n.push([t,e])},lineEnd:b,buffer:function(){var e=t;return t=[],n=null,e},rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))}}}function Ut(n,t){return((n=n.x)[0]<0?n[1]-Io-Uo:Io-n[1])-((t=t.x)[0]<0?t[1]-Io-Uo:Io-t[1])}function jt(n){var t,e=NaN,r=NaN,i=NaN;return{lineStart:function(){n.lineStart(),t=1},point:function(u,o){var a=u>0?Fo:-Fo,l=xo(u-e);xo(l-Fo)<Uo?(n.point(e,r=(r+o)/2>0?Io:-Io),n.point(i,r),n.lineEnd(),n.lineStart(),n.point(a,r),n.point(u,r),t=0):i!==a&&l>=Fo&&(xo(e-i)<Uo&&(e-=i*Uo),xo(u-a)<Uo&&(u-=a*Uo),r=Ft(e,r,u,o),n.point(i,r),n.lineEnd(),n.lineStart(),n.point(a,r),t=0),n.point(e=u,r=o),i=a},lineEnd:function(){n.lineEnd(),e=r=NaN},clean:function(){return 2-t}}}function Ft(n,t,e,r){var i,u,o=Math.sin(n-e);return xo(o)>Uo?Math.atan((Math.sin(t)*(u=Math.cos(r))*Math.sin(e)-Math.sin(r)*(i=Math.cos(t))*Math.sin(n))/(i*u*o)):(t+r)/2}function Ht(n,t,e,r){var i;if(null==n)i=e*Io,r.point(-Fo,i),r.point(0,i),r.point(Fo,i),r.point(Fo,0),r.point(Fo,-i),r.point(0,-i),r.point(-Fo,-i),r.point(-Fo,0),r.point(-Fo,i);else if(xo(n[0]-t[0])>Uo){var u=n[0]<t[0]?Fo:-Fo;i=e*u/2,r.point(-u,i),r.point(0,i),r.point(u,i)}else r.point(t[0],t[1])}function Ot(n,t){var e=n[0],r=n[1],i=[Math.sin(e),-Math.cos(e),0],u=0,o=0;ka.reset();for(var a=0,l=t.length;l>a;++a){var c=t[a],f=c.length;if(f)for(var s=c[0],h=s[0],p=s[1]/2+Fo/4,g=Math.sin(p),v=Math.cos(p),d=1;;){d===f&&(d=0),n=c[d];var y=n[0],m=n[1]/2+Fo/4,M=Math.sin(m),x=Math.cos(m),b=y-h,_=b>=0?1:-1,w=_*b,S=w>Fo,k=g*M;if(ka.add(Math.atan2(k*_*Math.sin(w),v*x+k*Math.cos(w))),u+=S?b+_*Ho:b,S^h>=e^y>=e){var N=mt(dt(s),dt(n));bt(N);var E=mt(i,N);bt(E);var A=(S^b>=0?-1:1)*tn(E[2]);(r>A||r===A&&(N[0]||N[1]))&&(o+=S^b>=0?1:-1)}if(!d++)break;h=y,g=M,v=x,s=n}}return(-Uo>u||Uo>u&&-Uo>ka)^1&o}function It(n){function t(n,t){return Math.cos(n)*Math.cos(t)>u}function e(n){var e,u,l,c,f;return{lineStart:function(){c=l=!1,f=1},point:function(s,h){var p,g=[s,h],v=t(s,h),d=o?v?0:i(s,h):v?i(s+(0>s?Fo:-Fo),h):0;if(!e&&(c=l=v)&&n.lineStart(),v!==l&&(p=r(e,g),(wt(e,p)||wt(g,p))&&(g[0]+=Uo,g[1]+=Uo,v=t(g[0],g[1]))),v!==l)f=0,v?(n.lineStart(),p=r(g,e),n.point(p[0],p[1])):(p=r(e,g),n.point(p[0],p[1]),n.lineEnd()),e=p;else if(a&&e&&o^v){var y;d&u||!(y=r(g,e,!0))||(f=0,o?(n.lineStart(),n.point(y[0][0],y[0][1]),n.point(y[1][0],y[1][1]),n.lineEnd()):(n.point(y[1][0],y[1][1]),n.lineEnd(),n.lineStart(),n.point(y[0][0],y[0][1])))}!v||e&&wt(e,g)||n.point(g[0],g[1]),e=g,l=v,u=d},lineEnd:function(){l&&n.lineEnd(),e=null},clean:function(){return f|(c&&l)<<1}}}function r(n,t,e){var r=dt(n),i=dt(t),o=[1,0,0],a=mt(r,i),l=yt(a,a),c=a[0],f=l-c*c;if(!f)return!e&&n;var s=u*l/f,h=-u*c/f,p=mt(o,a),g=xt(o,s),v=xt(a,h);Mt(g,v);var d=p,y=yt(g,d),m=yt(d,d),M=y*y-m*(yt(g,g)-1);if(!(0>M)){var x=Math.sqrt(M),b=xt(d,(-y-x)/m);if(Mt(b,g),b=_t(b),!e)return b;var _,w=n[0],S=t[0],k=n[1],N=t[1];w>S&&(_=w,w=S,S=_);var E=S-w,A=xo(E-Fo)<Uo,C=A||Uo>E;if(!A&&k>N&&(_=k,k=N,N=_),C?A?k+N>0^b[1]<(xo(b[0]-w)<Uo?k:N):k<=b[1]&&b[1]<=N:E>Fo^(w<=b[0]&&b[0]<=S)){var z=xt(d,(-y+x)/m);return Mt(z,g),[b,_t(z)]}}}function i(t,e){var r=o?n:Fo-n,i=0;return-r>t?i|=1:t>r&&(i|=2),-r>e?i|=4:e>r&&(i|=8),i}var u=Math.cos(n),o=u>0,a=xo(u)>Uo,l=ve(n,6*Yo);return Rt(t,e,l,o?[0,-n]:[-Fo,n-Fo])}function Yt(n,t,e,r){return function(i){var u,o=i.a,a=i.b,l=o.x,c=o.y,f=a.x,s=a.y,h=0,p=1,g=f-l,v=s-c;if(u=n-l,g||!(u>0)){if(u/=g,0>g){if(h>u)return;p>u&&(p=u)}else if(g>0){if(u>p)return;u>h&&(h=u)}if(u=e-l,g||!(0>u)){if(u/=g,0>g){if(u>p)return;u>h&&(h=u)}else if(g>0){if(h>u)return;p>u&&(p=u)}if(u=t-c,v||!(u>0)){if(u/=v,0>v){if(h>u)return;p>u&&(p=u)}else if(v>0){if(u>p)return;u>h&&(h=u)}if(u=r-c,v||!(0>u)){if(u/=v,0>v){if(u>p)return;u>h&&(h=u)}else if(v>0){if(h>u)return;p>u&&(p=u)}return h>0&&(i.a={x:l+h*g,y:c+h*v}),1>p&&(i.b={x:l+p*g,y:c+p*v}),i}}}}}}function Zt(n,t,e,r){function i(r,i){return xo(r[0]-n)<Uo?i>0?0:3:xo(r[0]-e)<Uo?i>0?2:1:xo(r[1]-t)<Uo?i>0?1:0:i>0?3:2}function u(n,t){return o(n.x,t.x)}function o(n,t){var e=i(n,1),r=i(t,1);return e!==r?e-r:0===e?t[1]-n[1]:1===e?n[0]-t[0]:2===e?n[1]-t[1]:t[0]-n[0]}return function(a){function l(n){for(var t=0,e=d.length,r=n[1],i=0;e>i;++i)for(var u,o=1,a=d[i],l=a.length,c=a[0];l>o;++o)u=a[o],c[1]<=r?u[1]>r&&Q(c,u,n)>0&&++t:u[1]<=r&&Q(c,u,n)<0&&--t,c=u;return 0!==t}function c(u,a,l,c){var f=0,s=0;if(null==u||(f=i(u,l))!==(s=i(a,l))||o(u,a)<0^l>0){do c.point(0===f||3===f?n:e,f>1?r:t);while((f=(f+l+4)%4)!==s)}else c.point(a[0],a[1])}function f(i,u){return i>=n&&e>=i&&u>=t&&r>=u}function s(n,t){f(n,t)&&a.point(n,t)}function h(){C.point=g,d&&d.push(y=[]),S=!0,w=!1,b=_=NaN}function p(){v&&(g(m,M),x&&w&&E.rejoin(),v.push(E.buffer())),C.point=s,w&&a.lineEnd()}function g(n,t){n=Math.max(-Ha,Math.min(Ha,n)),t=Math.max(-Ha,Math.min(Ha,t));var e=f(n,t);if(d&&y.push([n,t]),S)m=n,M=t,x=e,S=!1,e&&(a.lineStart(),a.point(n,t));else if(e&&w)a.point(n,t);else{var r={a:{x:b,y:_},b:{x:n,y:t}};A(r)?(w||(a.lineStart(),a.point(r.a.x,r.a.y)),a.point(r.b.x,r.b.y),e||a.lineEnd(),k=!1):e&&(a.lineStart(),a.point(n,t),k=!1)}b=n,_=t,w=e}var v,d,y,m,M,x,b,_,w,S,k,N=a,E=Pt(),A=Yt(n,t,e,r),C={point:s,lineStart:h,lineEnd:p,polygonStart:function(){a=E,v=[],d=[],k=!0},polygonEnd:function(){a=N,v=ao.merge(v);var t=l([n,r]),e=k&&t,i=v.length;(e||i)&&(a.polygonStart(),e&&(a.lineStart(),c(null,null,1,a),a.lineEnd()),i&&Lt(v,u,t,c,a),a.polygonEnd()),v=d=y=null}};return C}}function Vt(n){var t=0,e=Fo/3,r=ae(n),i=r(t,e);return i.parallels=function(n){return arguments.length?r(t=n[0]*Fo/180,e=n[1]*Fo/180):[t/Fo*180,e/Fo*180]},i}function Xt(n,t){function e(n,t){var e=Math.sqrt(u-2*i*Math.sin(t))/i;return[e*Math.sin(n*=i),o-e*Math.cos(n)]}var r=Math.sin(n),i=(r+Math.sin(t))/2,u=1+r*(2*i-r),o=Math.sqrt(u)/i;return e.invert=function(n,t){var e=o-t;return[Math.atan2(n,e)/i,tn((u-(n*n+e*e)*i*i)/(2*i))]},e}function $t(){function n(n,t){Ia+=i*n-r*t,r=n,i=t}var t,e,r,i;$a.point=function(u,o){$a.point=n,t=r=u,e=i=o},$a.lineEnd=function(){n(t,e)}}function Bt(n,t){Ya>n&&(Ya=n),n>Va&&(Va=n),Za>t&&(Za=t),t>Xa&&(Xa=t)}function Wt(){function n(n,t){o.push("M",n,",",t,u)}function t(n,t){o.push("M",n,",",t),a.point=e}function e(n,t){o.push("L",n,",",t)}function r(){a.point=n}function i(){o.push("Z")}var u=Jt(4.5),o=[],a={point:n,lineStart:function(){a.point=t},lineEnd:r,polygonStart:function(){a.lineEnd=i},polygonEnd:function(){a.lineEnd=r,a.point=n},pointRadius:function(n){return u=Jt(n),a},result:function(){if(o.length){var n=o.join("");return o=[],n}}};return a}function Jt(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}function Gt(n,t){Ca+=n,za+=t,++La}function Kt(){function n(n,r){var i=n-t,u=r-e,o=Math.sqrt(i*i+u*u);qa+=o*(t+n)/2,Ta+=o*(e+r)/2,Ra+=o,Gt(t=n,e=r)}var t,e;Wa.point=function(r,i){Wa.point=n,Gt(t=r,e=i)}}function Qt(){Wa.point=Gt}function ne(){function n(n,t){var e=n-r,u=t-i,o=Math.sqrt(e*e+u*u);qa+=o*(r+n)/2,Ta+=o*(i+t)/2,Ra+=o,o=i*n-r*t,Da+=o*(r+n),Pa+=o*(i+t),Ua+=3*o,Gt(r=n,i=t)}var t,e,r,i;Wa.point=function(u,o){Wa.point=n,Gt(t=r=u,e=i=o)},Wa.lineEnd=function(){n(t,e)}}function te(n){function t(t,e){n.moveTo(t+o,e),n.arc(t,e,o,0,Ho)}function e(t,e){n.moveTo(t,e),a.point=r}function r(t,e){n.lineTo(t,e)}function i(){a.point=t}function u(){n.closePath()}var o=4.5,a={point:t,lineStart:function(){a.point=e},lineEnd:i,polygonStart:function(){a.lineEnd=u},polygonEnd:function(){a.lineEnd=i,a.point=t},pointRadius:function(n){return o=n,a},result:b};return a}function ee(n){function t(n){return(a?r:e)(n)}function e(t){return ue(t,function(e,r){e=n(e,r),t.point(e[0],e[1])})}function r(t){function e(e,r){e=n(e,r),t.point(e[0],e[1])}function r(){M=NaN,S.point=u,t.lineStart()}function u(e,r){var u=dt([e,r]),o=n(e,r);i(M,x,m,b,_,w,M=o[0],x=o[1],m=e,b=u[0],_=u[1],w=u[2],a,t),t.point(M,x)}function o(){S.point=e,t.lineEnd()}function l(){
r(),S.point=c,S.lineEnd=f}function c(n,t){u(s=n,h=t),p=M,g=x,v=b,d=_,y=w,S.point=u}function f(){i(M,x,m,b,_,w,p,g,s,v,d,y,a,t),S.lineEnd=o,o()}var s,h,p,g,v,d,y,m,M,x,b,_,w,S={point:e,lineStart:r,lineEnd:o,polygonStart:function(){t.polygonStart(),S.lineStart=l},polygonEnd:function(){t.polygonEnd(),S.lineStart=r}};return S}function i(t,e,r,a,l,c,f,s,h,p,g,v,d,y){var m=f-t,M=s-e,x=m*m+M*M;if(x>4*u&&d--){var b=a+p,_=l+g,w=c+v,S=Math.sqrt(b*b+_*_+w*w),k=Math.asin(w/=S),N=xo(xo(w)-1)<Uo||xo(r-h)<Uo?(r+h)/2:Math.atan2(_,b),E=n(N,k),A=E[0],C=E[1],z=A-t,L=C-e,q=M*z-m*L;(q*q/x>u||xo((m*z+M*L)/x-.5)>.3||o>a*p+l*g+c*v)&&(i(t,e,r,a,l,c,A,C,N,b/=S,_/=S,w,d,y),y.point(A,C),i(A,C,N,b,_,w,f,s,h,p,g,v,d,y))}}var u=.5,o=Math.cos(30*Yo),a=16;return t.precision=function(n){return arguments.length?(a=(u=n*n)>0&&16,t):Math.sqrt(u)},t}function re(n){var t=ee(function(t,e){return n([t*Zo,e*Zo])});return function(n){return le(t(n))}}function ie(n){this.stream=n}function ue(n,t){return{point:t,sphere:function(){n.sphere()},lineStart:function(){n.lineStart()},lineEnd:function(){n.lineEnd()},polygonStart:function(){n.polygonStart()},polygonEnd:function(){n.polygonEnd()}}}function oe(n){return ae(function(){return n})()}function ae(n){function t(n){return n=a(n[0]*Yo,n[1]*Yo),[n[0]*h+l,c-n[1]*h]}function e(n){return n=a.invert((n[0]-l)/h,(c-n[1])/h),n&&[n[0]*Zo,n[1]*Zo]}function r(){a=Ct(o=se(y,M,x),u);var n=u(v,d);return l=p-n[0]*h,c=g+n[1]*h,i()}function i(){return f&&(f.valid=!1,f=null),t}var u,o,a,l,c,f,s=ee(function(n,t){return n=u(n,t),[n[0]*h+l,c-n[1]*h]}),h=150,p=480,g=250,v=0,d=0,y=0,M=0,x=0,b=Fa,_=m,w=null,S=null;return t.stream=function(n){return f&&(f.valid=!1),f=le(b(o,s(_(n)))),f.valid=!0,f},t.clipAngle=function(n){return arguments.length?(b=null==n?(w=n,Fa):It((w=+n)*Yo),i()):w},t.clipExtent=function(n){return arguments.length?(S=n,_=n?Zt(n[0][0],n[0][1],n[1][0],n[1][1]):m,i()):S},t.scale=function(n){return arguments.length?(h=+n,r()):h},t.translate=function(n){return arguments.length?(p=+n[0],g=+n[1],r()):[p,g]},t.center=function(n){return arguments.length?(v=n[0]%360*Yo,d=n[1]%360*Yo,r()):[v*Zo,d*Zo]},t.rotate=function(n){return arguments.length?(y=n[0]%360*Yo,M=n[1]%360*Yo,x=n.length>2?n[2]%360*Yo:0,r()):[y*Zo,M*Zo,x*Zo]},ao.rebind(t,s,"precision"),function(){return u=n.apply(this,arguments),t.invert=u.invert&&e,r()}}function le(n){return ue(n,function(t,e){n.point(t*Yo,e*Yo)})}function ce(n,t){return[n,t]}function fe(n,t){return[n>Fo?n-Ho:-Fo>n?n+Ho:n,t]}function se(n,t,e){return n?t||e?Ct(pe(n),ge(t,e)):pe(n):t||e?ge(t,e):fe}function he(n){return function(t,e){return t+=n,[t>Fo?t-Ho:-Fo>t?t+Ho:t,e]}}function pe(n){var t=he(n);return t.invert=he(-n),t}function ge(n,t){function e(n,t){var e=Math.cos(t),a=Math.cos(n)*e,l=Math.sin(n)*e,c=Math.sin(t),f=c*r+a*i;return[Math.atan2(l*u-f*o,a*r-c*i),tn(f*u+l*o)]}var r=Math.cos(n),i=Math.sin(n),u=Math.cos(t),o=Math.sin(t);return e.invert=function(n,t){var e=Math.cos(t),a=Math.cos(n)*e,l=Math.sin(n)*e,c=Math.sin(t),f=c*u-l*o;return[Math.atan2(l*u+c*o,a*r+f*i),tn(f*r-a*i)]},e}function ve(n,t){var e=Math.cos(n),r=Math.sin(n);return function(i,u,o,a){var l=o*t;null!=i?(i=de(e,i),u=de(e,u),(o>0?u>i:i>u)&&(i+=o*Ho)):(i=n+o*Ho,u=n-.5*l);for(var c,f=i;o>0?f>u:u>f;f-=l)a.point((c=_t([e,-r*Math.cos(f),-r*Math.sin(f)]))[0],c[1])}}function de(n,t){var e=dt(t);e[0]-=n,bt(e);var r=nn(-e[1]);return((-e[2]<0?-r:r)+2*Math.PI-Uo)%(2*Math.PI)}function ye(n,t,e){var r=ao.range(n,t-Uo,e).concat(t);return function(n){return r.map(function(t){return[n,t]})}}function me(n,t,e){var r=ao.range(n,t-Uo,e).concat(t);return function(n){return r.map(function(t){return[t,n]})}}function Me(n){return n.source}function xe(n){return n.target}function be(n,t,e,r){var i=Math.cos(t),u=Math.sin(t),o=Math.cos(r),a=Math.sin(r),l=i*Math.cos(n),c=i*Math.sin(n),f=o*Math.cos(e),s=o*Math.sin(e),h=2*Math.asin(Math.sqrt(on(r-t)+i*o*on(e-n))),p=1/Math.sin(h),g=h?function(n){var t=Math.sin(n*=h)*p,e=Math.sin(h-n)*p,r=e*l+t*f,i=e*c+t*s,o=e*u+t*a;return[Math.atan2(i,r)*Zo,Math.atan2(o,Math.sqrt(r*r+i*i))*Zo]}:function(){return[n*Zo,t*Zo]};return g.distance=h,g}function _e(){function n(n,i){var u=Math.sin(i*=Yo),o=Math.cos(i),a=xo((n*=Yo)-t),l=Math.cos(a);Ja+=Math.atan2(Math.sqrt((a=o*Math.sin(a))*a+(a=r*u-e*o*l)*a),e*u+r*o*l),t=n,e=u,r=o}var t,e,r;Ga.point=function(i,u){t=i*Yo,e=Math.sin(u*=Yo),r=Math.cos(u),Ga.point=n},Ga.lineEnd=function(){Ga.point=Ga.lineEnd=b}}function we(n,t){function e(t,e){var r=Math.cos(t),i=Math.cos(e),u=n(r*i);return[u*i*Math.sin(t),u*Math.sin(e)]}return e.invert=function(n,e){var r=Math.sqrt(n*n+e*e),i=t(r),u=Math.sin(i),o=Math.cos(i);return[Math.atan2(n*u,r*o),Math.asin(r&&e*u/r)]},e}function Se(n,t){function e(n,t){o>0?-Io+Uo>t&&(t=-Io+Uo):t>Io-Uo&&(t=Io-Uo);var e=o/Math.pow(i(t),u);return[e*Math.sin(u*n),o-e*Math.cos(u*n)]}var r=Math.cos(n),i=function(n){return Math.tan(Fo/4+n/2)},u=n===t?Math.sin(n):Math.log(r/Math.cos(t))/Math.log(i(t)/i(n)),o=r*Math.pow(i(n),u)/u;return u?(e.invert=function(n,t){var e=o-t,r=K(u)*Math.sqrt(n*n+e*e);return[Math.atan2(n,e)/u,2*Math.atan(Math.pow(o/r,1/u))-Io]},e):Ne}function ke(n,t){function e(n,t){var e=u-t;return[e*Math.sin(i*n),u-e*Math.cos(i*n)]}var r=Math.cos(n),i=n===t?Math.sin(n):(r-Math.cos(t))/(t-n),u=r/i+n;return xo(i)<Uo?ce:(e.invert=function(n,t){var e=u-t;return[Math.atan2(n,e)/i,u-K(i)*Math.sqrt(n*n+e*e)]},e)}function Ne(n,t){return[n,Math.log(Math.tan(Fo/4+t/2))]}function Ee(n){var t,e=oe(n),r=e.scale,i=e.translate,u=e.clipExtent;return e.scale=function(){var n=r.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.translate=function(){var n=i.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.clipExtent=function(n){var o=u.apply(e,arguments);if(o===e){if(t=null==n){var a=Fo*r(),l=i();u([[l[0]-a,l[1]-a],[l[0]+a,l[1]+a]])}}else t&&(o=null);return o},e.clipExtent(null)}function Ae(n,t){return[Math.log(Math.tan(Fo/4+t/2)),-n]}function Ce(n){return n[0]}function ze(n){return n[1]}function Le(n){for(var t=n.length,e=[0,1],r=2,i=2;t>i;i++){for(;r>1&&Q(n[e[r-2]],n[e[r-1]],n[i])<=0;)--r;e[r++]=i}return e.slice(0,r)}function qe(n,t){return n[0]-t[0]||n[1]-t[1]}function Te(n,t,e){return(e[0]-t[0])*(n[1]-t[1])<(e[1]-t[1])*(n[0]-t[0])}function Re(n,t,e,r){var i=n[0],u=e[0],o=t[0]-i,a=r[0]-u,l=n[1],c=e[1],f=t[1]-l,s=r[1]-c,h=(a*(l-c)-s*(i-u))/(s*o-a*f);return[i+h*o,l+h*f]}function De(n){var t=n[0],e=n[n.length-1];return!(t[0]-e[0]||t[1]-e[1])}function Pe(){rr(this),this.edge=this.site=this.circle=null}function Ue(n){var t=cl.pop()||new Pe;return t.site=n,t}function je(n){Be(n),ol.remove(n),cl.push(n),rr(n)}function Fe(n){var t=n.circle,e=t.x,r=t.cy,i={x:e,y:r},u=n.P,o=n.N,a=[n];je(n);for(var l=u;l.circle&&xo(e-l.circle.x)<Uo&&xo(r-l.circle.cy)<Uo;)u=l.P,a.unshift(l),je(l),l=u;a.unshift(l),Be(l);for(var c=o;c.circle&&xo(e-c.circle.x)<Uo&&xo(r-c.circle.cy)<Uo;)o=c.N,a.push(c),je(c),c=o;a.push(c),Be(c);var f,s=a.length;for(f=1;s>f;++f)c=a[f],l=a[f-1],nr(c.edge,l.site,c.site,i);l=a[0],c=a[s-1],c.edge=Ke(l.site,c.site,null,i),$e(l),$e(c)}function He(n){for(var t,e,r,i,u=n.x,o=n.y,a=ol._;a;)if(r=Oe(a,o)-u,r>Uo)a=a.L;else{if(i=u-Ie(a,o),!(i>Uo)){r>-Uo?(t=a.P,e=a):i>-Uo?(t=a,e=a.N):t=e=a;break}if(!a.R){t=a;break}a=a.R}var l=Ue(n);if(ol.insert(t,l),t||e){if(t===e)return Be(t),e=Ue(t.site),ol.insert(l,e),l.edge=e.edge=Ke(t.site,l.site),$e(t),void $e(e);if(!e)return void(l.edge=Ke(t.site,l.site));Be(t),Be(e);var c=t.site,f=c.x,s=c.y,h=n.x-f,p=n.y-s,g=e.site,v=g.x-f,d=g.y-s,y=2*(h*d-p*v),m=h*h+p*p,M=v*v+d*d,x={x:(d*m-p*M)/y+f,y:(h*M-v*m)/y+s};nr(e.edge,c,g,x),l.edge=Ke(c,n,null,x),e.edge=Ke(n,g,null,x),$e(t),$e(e)}}function Oe(n,t){var e=n.site,r=e.x,i=e.y,u=i-t;if(!u)return r;var o=n.P;if(!o)return-(1/0);e=o.site;var a=e.x,l=e.y,c=l-t;if(!c)return a;var f=a-r,s=1/u-1/c,h=f/c;return s?(-h+Math.sqrt(h*h-2*s*(f*f/(-2*c)-l+c/2+i-u/2)))/s+r:(r+a)/2}function Ie(n,t){var e=n.N;if(e)return Oe(e,t);var r=n.site;return r.y===t?r.x:1/0}function Ye(n){this.site=n,this.edges=[]}function Ze(n){for(var t,e,r,i,u,o,a,l,c,f,s=n[0][0],h=n[1][0],p=n[0][1],g=n[1][1],v=ul,d=v.length;d--;)if(u=v[d],u&&u.prepare())for(a=u.edges,l=a.length,o=0;l>o;)f=a[o].end(),r=f.x,i=f.y,c=a[++o%l].start(),t=c.x,e=c.y,(xo(r-t)>Uo||xo(i-e)>Uo)&&(a.splice(o,0,new tr(Qe(u.site,f,xo(r-s)<Uo&&g-i>Uo?{x:s,y:xo(t-s)<Uo?e:g}:xo(i-g)<Uo&&h-r>Uo?{x:xo(e-g)<Uo?t:h,y:g}:xo(r-h)<Uo&&i-p>Uo?{x:h,y:xo(t-h)<Uo?e:p}:xo(i-p)<Uo&&r-s>Uo?{x:xo(e-p)<Uo?t:s,y:p}:null),u.site,null)),++l)}function Ve(n,t){return t.angle-n.angle}function Xe(){rr(this),this.x=this.y=this.arc=this.site=this.cy=null}function $e(n){var t=n.P,e=n.N;if(t&&e){var r=t.site,i=n.site,u=e.site;if(r!==u){var o=i.x,a=i.y,l=r.x-o,c=r.y-a,f=u.x-o,s=u.y-a,h=2*(l*s-c*f);if(!(h>=-jo)){var p=l*l+c*c,g=f*f+s*s,v=(s*p-c*g)/h,d=(l*g-f*p)/h,s=d+a,y=fl.pop()||new Xe;y.arc=n,y.site=i,y.x=v+o,y.y=s+Math.sqrt(v*v+d*d),y.cy=s,n.circle=y;for(var m=null,M=ll._;M;)if(y.y<M.y||y.y===M.y&&y.x<=M.x){if(!M.L){m=M.P;break}M=M.L}else{if(!M.R){m=M;break}M=M.R}ll.insert(m,y),m||(al=y)}}}}function Be(n){var t=n.circle;t&&(t.P||(al=t.N),ll.remove(t),fl.push(t),rr(t),n.circle=null)}function We(n){for(var t,e=il,r=Yt(n[0][0],n[0][1],n[1][0],n[1][1]),i=e.length;i--;)t=e[i],(!Je(t,n)||!r(t)||xo(t.a.x-t.b.x)<Uo&&xo(t.a.y-t.b.y)<Uo)&&(t.a=t.b=null,e.splice(i,1))}function Je(n,t){var e=n.b;if(e)return!0;var r,i,u=n.a,o=t[0][0],a=t[1][0],l=t[0][1],c=t[1][1],f=n.l,s=n.r,h=f.x,p=f.y,g=s.x,v=s.y,d=(h+g)/2,y=(p+v)/2;if(v===p){if(o>d||d>=a)return;if(h>g){if(u){if(u.y>=c)return}else u={x:d,y:l};e={x:d,y:c}}else{if(u){if(u.y<l)return}else u={x:d,y:c};e={x:d,y:l}}}else if(r=(h-g)/(v-p),i=y-r*d,-1>r||r>1)if(h>g){if(u){if(u.y>=c)return}else u={x:(l-i)/r,y:l};e={x:(c-i)/r,y:c}}else{if(u){if(u.y<l)return}else u={x:(c-i)/r,y:c};e={x:(l-i)/r,y:l}}else if(v>p){if(u){if(u.x>=a)return}else u={x:o,y:r*o+i};e={x:a,y:r*a+i}}else{if(u){if(u.x<o)return}else u={x:a,y:r*a+i};e={x:o,y:r*o+i}}return n.a=u,n.b=e,!0}function Ge(n,t){this.l=n,this.r=t,this.a=this.b=null}function Ke(n,t,e,r){var i=new Ge(n,t);return il.push(i),e&&nr(i,n,t,e),r&&nr(i,t,n,r),ul[n.i].edges.push(new tr(i,n,t)),ul[t.i].edges.push(new tr(i,t,n)),i}function Qe(n,t,e){var r=new Ge(n,null);return r.a=t,r.b=e,il.push(r),r}function nr(n,t,e,r){n.a||n.b?n.l===e?n.b=r:n.a=r:(n.a=r,n.l=t,n.r=e)}function tr(n,t,e){var r=n.a,i=n.b;this.edge=n,this.site=t,this.angle=e?Math.atan2(e.y-t.y,e.x-t.x):n.l===t?Math.atan2(i.x-r.x,r.y-i.y):Math.atan2(r.x-i.x,i.y-r.y)}function er(){this._=null}function rr(n){n.U=n.C=n.L=n.R=n.P=n.N=null}function ir(n,t){var e=t,r=t.R,i=e.U;i?i.L===e?i.L=r:i.R=r:n._=r,r.U=i,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function ur(n,t){var e=t,r=t.L,i=e.U;i?i.L===e?i.L=r:i.R=r:n._=r,r.U=i,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function or(n){for(;n.L;)n=n.L;return n}function ar(n,t){var e,r,i,u=n.sort(lr).pop();for(il=[],ul=new Array(n.length),ol=new er,ll=new er;;)if(i=al,u&&(!i||u.y<i.y||u.y===i.y&&u.x<i.x))u.x===e&&u.y===r||(ul[u.i]=new Ye(u),He(u),e=u.x,r=u.y),u=n.pop();else{if(!i)break;Fe(i.arc)}t&&(We(t),Ze(t));var o={cells:ul,edges:il};return ol=ll=il=ul=null,o}function lr(n,t){return t.y-n.y||t.x-n.x}function cr(n,t,e){return(n.x-e.x)*(t.y-n.y)-(n.x-t.x)*(e.y-n.y)}function fr(n){return n.x}function sr(n){return n.y}function hr(){return{leaf:!0,nodes:[],point:null,x:null,y:null}}function pr(n,t,e,r,i,u){if(!n(t,e,r,i,u)){var o=.5*(e+i),a=.5*(r+u),l=t.nodes;l[0]&&pr(n,l[0],e,r,o,a),l[1]&&pr(n,l[1],o,r,i,a),l[2]&&pr(n,l[2],e,a,o,u),l[3]&&pr(n,l[3],o,a,i,u)}}function gr(n,t,e,r,i,u,o){var a,l=1/0;return function c(n,f,s,h,p){if(!(f>u||s>o||r>h||i>p)){if(g=n.point){var g,v=t-n.x,d=e-n.y,y=v*v+d*d;if(l>y){var m=Math.sqrt(l=y);r=t-m,i=e-m,u=t+m,o=e+m,a=g}}for(var M=n.nodes,x=.5*(f+h),b=.5*(s+p),_=t>=x,w=e>=b,S=w<<1|_,k=S+4;k>S;++S)if(n=M[3&S])switch(3&S){case 0:c(n,f,s,x,b);break;case 1:c(n,x,s,h,b);break;case 2:c(n,f,b,x,p);break;case 3:c(n,x,b,h,p)}}}(n,r,i,u,o),a}function vr(n,t){n=ao.rgb(n),t=ao.rgb(t);var e=n.r,r=n.g,i=n.b,u=t.r-e,o=t.g-r,a=t.b-i;return function(n){return"#"+bn(Math.round(e+u*n))+bn(Math.round(r+o*n))+bn(Math.round(i+a*n))}}function dr(n,t){var e,r={},i={};for(e in n)e in t?r[e]=Mr(n[e],t[e]):i[e]=n[e];for(e in t)e in n||(i[e]=t[e]);return function(n){for(e in r)i[e]=r[e](n);return i}}function yr(n,t){return n=+n,t=+t,function(e){return n*(1-e)+t*e}}function mr(n,t){var e,r,i,u=hl.lastIndex=pl.lastIndex=0,o=-1,a=[],l=[];for(n+="",t+="";(e=hl.exec(n))&&(r=pl.exec(t));)(i=r.index)>u&&(i=t.slice(u,i),a[o]?a[o]+=i:a[++o]=i),(e=e[0])===(r=r[0])?a[o]?a[o]+=r:a[++o]=r:(a[++o]=null,l.push({i:o,x:yr(e,r)})),u=pl.lastIndex;return u<t.length&&(i=t.slice(u),a[o]?a[o]+=i:a[++o]=i),a.length<2?l[0]?(t=l[0].x,function(n){return t(n)+""}):function(){return t}:(t=l.length,function(n){for(var e,r=0;t>r;++r)a[(e=l[r]).i]=e.x(n);return a.join("")})}function Mr(n,t){for(var e,r=ao.interpolators.length;--r>=0&&!(e=ao.interpolators[r](n,t)););return e}function xr(n,t){var e,r=[],i=[],u=n.length,o=t.length,a=Math.min(n.length,t.length);for(e=0;a>e;++e)r.push(Mr(n[e],t[e]));for(;u>e;++e)i[e]=n[e];for(;o>e;++e)i[e]=t[e];return function(n){for(e=0;a>e;++e)i[e]=r[e](n);return i}}function br(n){return function(t){return 0>=t?0:t>=1?1:n(t)}}function _r(n){return function(t){return 1-n(1-t)}}function wr(n){return function(t){return.5*(.5>t?n(2*t):2-n(2-2*t))}}function Sr(n){return n*n}function kr(n){return n*n*n}function Nr(n){if(0>=n)return 0;if(n>=1)return 1;var t=n*n,e=t*n;return 4*(.5>n?e:3*(n-t)+e-.75)}function Er(n){return function(t){return Math.pow(t,n)}}function Ar(n){return 1-Math.cos(n*Io)}function Cr(n){return Math.pow(2,10*(n-1))}function zr(n){return 1-Math.sqrt(1-n*n)}function Lr(n,t){var e;return arguments.length<2&&(t=.45),arguments.length?e=t/Ho*Math.asin(1/n):(n=1,e=t/4),function(r){return 1+n*Math.pow(2,-10*r)*Math.sin((r-e)*Ho/t)}}function qr(n){return n||(n=1.70158),function(t){return t*t*((n+1)*t-n)}}function Tr(n){return 1/2.75>n?7.5625*n*n:2/2.75>n?7.5625*(n-=1.5/2.75)*n+.75:2.5/2.75>n?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375}function Rr(n,t){n=ao.hcl(n),t=ao.hcl(t);var e=n.h,r=n.c,i=n.l,u=t.h-e,o=t.c-r,a=t.l-i;return isNaN(o)&&(o=0,r=isNaN(r)?t.c:r),isNaN(u)?(u=0,e=isNaN(e)?t.h:e):u>180?u-=360:-180>u&&(u+=360),function(n){return sn(e+u*n,r+o*n,i+a*n)+""}}function Dr(n,t){n=ao.hsl(n),t=ao.hsl(t);var e=n.h,r=n.s,i=n.l,u=t.h-e,o=t.s-r,a=t.l-i;return isNaN(o)&&(o=0,r=isNaN(r)?t.s:r),isNaN(u)?(u=0,e=isNaN(e)?t.h:e):u>180?u-=360:-180>u&&(u+=360),function(n){return cn(e+u*n,r+o*n,i+a*n)+""}}function Pr(n,t){n=ao.lab(n),t=ao.lab(t);var e=n.l,r=n.a,i=n.b,u=t.l-e,o=t.a-r,a=t.b-i;return function(n){return pn(e+u*n,r+o*n,i+a*n)+""}}function Ur(n,t){return t-=n,function(e){return Math.round(n+t*e)}}function jr(n){var t=[n.a,n.b],e=[n.c,n.d],r=Hr(t),i=Fr(t,e),u=Hr(Or(e,t,-i))||0;t[0]*e[1]<e[0]*t[1]&&(t[0]*=-1,t[1]*=-1,r*=-1,i*=-1),this.rotate=(r?Math.atan2(t[1],t[0]):Math.atan2(-e[0],e[1]))*Zo,this.translate=[n.e,n.f],this.scale=[r,u],this.skew=u?Math.atan2(i,u)*Zo:0}function Fr(n,t){return n[0]*t[0]+n[1]*t[1]}function Hr(n){var t=Math.sqrt(Fr(n,n));return t&&(n[0]/=t,n[1]/=t),t}function Or(n,t,e){return n[0]+=e*t[0],n[1]+=e*t[1],n}function Ir(n){return n.length?n.pop()+",":""}function Yr(n,t,e,r){if(n[0]!==t[0]||n[1]!==t[1]){var i=e.push("translate(",null,",",null,")");r.push({i:i-4,x:yr(n[0],t[0])},{i:i-2,x:yr(n[1],t[1])})}else(t[0]||t[1])&&e.push("translate("+t+")")}function Zr(n,t,e,r){n!==t?(n-t>180?t+=360:t-n>180&&(n+=360),r.push({i:e.push(Ir(e)+"rotate(",null,")")-2,x:yr(n,t)})):t&&e.push(Ir(e)+"rotate("+t+")")}function Vr(n,t,e,r){n!==t?r.push({i:e.push(Ir(e)+"skewX(",null,")")-2,x:yr(n,t)}):t&&e.push(Ir(e)+"skewX("+t+")")}function Xr(n,t,e,r){if(n[0]!==t[0]||n[1]!==t[1]){var i=e.push(Ir(e)+"scale(",null,",",null,")");r.push({i:i-4,x:yr(n[0],t[0])},{i:i-2,x:yr(n[1],t[1])})}else 1===t[0]&&1===t[1]||e.push(Ir(e)+"scale("+t+")")}function $r(n,t){var e=[],r=[];return n=ao.transform(n),t=ao.transform(t),Yr(n.translate,t.translate,e,r),Zr(n.rotate,t.rotate,e,r),Vr(n.skew,t.skew,e,r),Xr(n.scale,t.scale,e,r),n=t=null,function(n){for(var t,i=-1,u=r.length;++i<u;)e[(t=r[i]).i]=t.x(n);return e.join("")}}function Br(n,t){return t=(t-=n=+n)||1/t,function(e){return(e-n)/t}}function Wr(n,t){return t=(t-=n=+n)||1/t,function(e){return Math.max(0,Math.min(1,(e-n)/t))}}function Jr(n){for(var t=n.source,e=n.target,r=Kr(t,e),i=[t];t!==r;)t=t.parent,i.push(t);for(var u=i.length;e!==r;)i.splice(u,0,e),e=e.parent;return i}function Gr(n){for(var t=[],e=n.parent;null!=e;)t.push(n),n=e,e=e.parent;return t.push(n),t}function Kr(n,t){if(n===t)return n;for(var e=Gr(n),r=Gr(t),i=e.pop(),u=r.pop(),o=null;i===u;)o=i,i=e.pop(),u=r.pop();return o}function Qr(n){n.fixed|=2}function ni(n){n.fixed&=-7}function ti(n){n.fixed|=4,n.px=n.x,n.py=n.y}function ei(n){n.fixed&=-5}function ri(n,t,e){var r=0,i=0;if(n.charge=0,!n.leaf)for(var u,o=n.nodes,a=o.length,l=-1;++l<a;)u=o[l],null!=u&&(ri(u,t,e),n.charge+=u.charge,r+=u.charge*u.cx,i+=u.charge*u.cy);if(n.point){n.leaf||(n.point.x+=Math.random()-.5,n.point.y+=Math.random()-.5);var c=t*e[n.point.index];n.charge+=n.pointCharge=c,r+=c*n.point.x,i+=c*n.point.y}n.cx=r/n.charge,n.cy=i/n.charge}function ii(n,t){return ao.rebind(n,t,"sort","children","value"),n.nodes=n,n.links=fi,n}function ui(n,t){for(var e=[n];null!=(n=e.pop());)if(t(n),(i=n.children)&&(r=i.length))for(var r,i;--r>=0;)e.push(i[r])}function oi(n,t){for(var e=[n],r=[];null!=(n=e.pop());)if(r.push(n),(u=n.children)&&(i=u.length))for(var i,u,o=-1;++o<i;)e.push(u[o]);for(;null!=(n=r.pop());)t(n)}function ai(n){return n.children}function li(n){return n.value}function ci(n,t){return t.value-n.value}function fi(n){return ao.merge(n.map(function(n){return(n.children||[]).map(function(t){return{source:n,target:t}})}))}function si(n){return n.x}function hi(n){return n.y}function pi(n,t,e){n.y0=t,n.y=e}function gi(n){return ao.range(n.length)}function vi(n){for(var t=-1,e=n[0].length,r=[];++t<e;)r[t]=0;return r}function di(n){for(var t,e=1,r=0,i=n[0][1],u=n.length;u>e;++e)(t=n[e][1])>i&&(r=e,i=t);return r}function yi(n){return n.reduce(mi,0)}function mi(n,t){return n+t[1]}function Mi(n,t){return xi(n,Math.ceil(Math.log(t.length)/Math.LN2+1))}function xi(n,t){for(var e=-1,r=+n[0],i=(n[1]-r)/t,u=[];++e<=t;)u[e]=i*e+r;return u}function bi(n){return[ao.min(n),ao.max(n)]}function _i(n,t){return n.value-t.value}function wi(n,t){var e=n._pack_next;n._pack_next=t,t._pack_prev=n,t._pack_next=e,e._pack_prev=t}function Si(n,t){n._pack_next=t,t._pack_prev=n}function ki(n,t){var e=t.x-n.x,r=t.y-n.y,i=n.r+t.r;return.999*i*i>e*e+r*r}function Ni(n){function t(n){f=Math.min(n.x-n.r,f),s=Math.max(n.x+n.r,s),h=Math.min(n.y-n.r,h),p=Math.max(n.y+n.r,p)}if((e=n.children)&&(c=e.length)){var e,r,i,u,o,a,l,c,f=1/0,s=-(1/0),h=1/0,p=-(1/0);if(e.forEach(Ei),r=e[0],r.x=-r.r,r.y=0,t(r),c>1&&(i=e[1],i.x=i.r,i.y=0,t(i),c>2))for(u=e[2],zi(r,i,u),t(u),wi(r,u),r._pack_prev=u,wi(u,i),i=r._pack_next,o=3;c>o;o++){zi(r,i,u=e[o]);var g=0,v=1,d=1;for(a=i._pack_next;a!==i;a=a._pack_next,v++)if(ki(a,u)){g=1;break}if(1==g)for(l=r._pack_prev;l!==a._pack_prev&&!ki(l,u);l=l._pack_prev,d++);g?(d>v||v==d&&i.r<r.r?Si(r,i=a):Si(r=l,i),o--):(wi(r,u),i=u,t(u))}var y=(f+s)/2,m=(h+p)/2,M=0;for(o=0;c>o;o++)u=e[o],u.x-=y,u.y-=m,M=Math.max(M,u.r+Math.sqrt(u.x*u.x+u.y*u.y));n.r=M,e.forEach(Ai)}}function Ei(n){n._pack_next=n._pack_prev=n}function Ai(n){delete n._pack_next,delete n._pack_prev}function Ci(n,t,e,r){var i=n.children;if(n.x=t+=r*n.x,n.y=e+=r*n.y,n.r*=r,i)for(var u=-1,o=i.length;++u<o;)Ci(i[u],t,e,r)}function zi(n,t,e){var r=n.r+e.r,i=t.x-n.x,u=t.y-n.y;if(r&&(i||u)){var o=t.r+e.r,a=i*i+u*u;o*=o,r*=r;var l=.5+(r-o)/(2*a),c=Math.sqrt(Math.max(0,2*o*(r+a)-(r-=a)*r-o*o))/(2*a);e.x=n.x+l*i+c*u,e.y=n.y+l*u-c*i}else e.x=n.x+r,e.y=n.y}function Li(n,t){return n.parent==t.parent?1:2}function qi(n){var t=n.children;return t.length?t[0]:n.t}function Ti(n){var t,e=n.children;return(t=e.length)?e[t-1]:n.t}function Ri(n,t,e){var r=e/(t.i-n.i);t.c-=r,t.s+=e,n.c+=r,t.z+=e,t.m+=e}function Di(n){for(var t,e=0,r=0,i=n.children,u=i.length;--u>=0;)t=i[u],t.z+=e,t.m+=e,e+=t.s+(r+=t.c)}function Pi(n,t,e){return n.a.parent===t.parent?n.a:e}function Ui(n){return 1+ao.max(n,function(n){return n.y})}function ji(n){return n.reduce(function(n,t){return n+t.x},0)/n.length}function Fi(n){var t=n.children;return t&&t.length?Fi(t[0]):n}function Hi(n){var t,e=n.children;return e&&(t=e.length)?Hi(e[t-1]):n}function Oi(n){return{x:n.x,y:n.y,dx:n.dx,dy:n.dy}}function Ii(n,t){var e=n.x+t[3],r=n.y+t[0],i=n.dx-t[1]-t[3],u=n.dy-t[0]-t[2];return 0>i&&(e+=i/2,i=0),0>u&&(r+=u/2,u=0),{x:e,y:r,dx:i,dy:u}}function Yi(n){var t=n[0],e=n[n.length-1];return e>t?[t,e]:[e,t]}function Zi(n){return n.rangeExtent?n.rangeExtent():Yi(n.range())}function Vi(n,t,e,r){var i=e(n[0],n[1]),u=r(t[0],t[1]);return function(n){return u(i(n))}}function Xi(n,t){var e,r=0,i=n.length-1,u=n[r],o=n[i];return u>o&&(e=r,r=i,i=e,e=u,u=o,o=e),n[r]=t.floor(u),n[i]=t.ceil(o),n}function $i(n){return n?{floor:function(t){return Math.floor(t/n)*n},ceil:function(t){return Math.ceil(t/n)*n}}:Sl}function Bi(n,t,e,r){var i=[],u=[],o=0,a=Math.min(n.length,t.length)-1;for(n[a]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++o<=a;)i.push(e(n[o-1],n[o])),u.push(r(t[o-1],t[o]));return function(t){var e=ao.bisect(n,t,1,a)-1;return u[e](i[e](t))}}function Wi(n,t,e,r){function i(){var i=Math.min(n.length,t.length)>2?Bi:Vi,l=r?Wr:Br;return o=i(n,t,l,e),a=i(t,n,l,Mr),u}function u(n){return o(n)}var o,a;return u.invert=function(n){return a(n)},u.domain=function(t){return arguments.length?(n=t.map(Number),i()):n},u.range=function(n){return arguments.length?(t=n,i()):t},u.rangeRound=function(n){return u.range(n).interpolate(Ur)},u.clamp=function(n){return arguments.length?(r=n,i()):r},u.interpolate=function(n){return arguments.length?(e=n,i()):e},u.ticks=function(t){return Qi(n,t)},u.tickFormat=function(t,e){return nu(n,t,e)},u.nice=function(t){return Gi(n,t),i()},u.copy=function(){return Wi(n,t,e,r)},i()}function Ji(n,t){return ao.rebind(n,t,"range","rangeRound","interpolate","clamp")}function Gi(n,t){return Xi(n,$i(Ki(n,t)[2])),Xi(n,$i(Ki(n,t)[2])),n}function Ki(n,t){null==t&&(t=10);var e=Yi(n),r=e[1]-e[0],i=Math.pow(10,Math.floor(Math.log(r/t)/Math.LN10)),u=t/r*i;return.15>=u?i*=10:.35>=u?i*=5:.75>=u&&(i*=2),e[0]=Math.ceil(e[0]/i)*i,e[1]=Math.floor(e[1]/i)*i+.5*i,e[2]=i,e}function Qi(n,t){return ao.range.apply(ao,Ki(n,t))}function nu(n,t,e){var r=Ki(n,t);if(e){var i=ha.exec(e);if(i.shift(),"s"===i[8]){var u=ao.formatPrefix(Math.max(xo(r[0]),xo(r[1])));return i[7]||(i[7]="."+tu(u.scale(r[2]))),i[8]="f",e=ao.format(i.join("")),function(n){return e(u.scale(n))+u.symbol}}i[7]||(i[7]="."+eu(i[8],r)),e=i.join("")}else e=",."+tu(r[2])+"f";return ao.format(e)}function tu(n){return-Math.floor(Math.log(n)/Math.LN10+.01)}function eu(n,t){var e=tu(t[2]);return n in kl?Math.abs(e-tu(Math.max(xo(t[0]),xo(t[1]))))+ +("e"!==n):e-2*("%"===n)}function ru(n,t,e,r){function i(n){return(e?Math.log(0>n?0:n):-Math.log(n>0?0:-n))/Math.log(t)}function u(n){return e?Math.pow(t,n):-Math.pow(t,-n)}function o(t){return n(i(t))}return o.invert=function(t){return u(n.invert(t))},o.domain=function(t){return arguments.length?(e=t[0]>=0,n.domain((r=t.map(Number)).map(i)),o):r},o.base=function(e){return arguments.length?(t=+e,n.domain(r.map(i)),o):t},o.nice=function(){var t=Xi(r.map(i),e?Math:El);return n.domain(t),r=t.map(u),o},o.ticks=function(){var n=Yi(r),o=[],a=n[0],l=n[1],c=Math.floor(i(a)),f=Math.ceil(i(l)),s=t%1?2:t;if(isFinite(f-c)){if(e){for(;f>c;c++)for(var h=1;s>h;h++)o.push(u(c)*h);o.push(u(c))}else for(o.push(u(c));c++<f;)for(var h=s-1;h>0;h--)o.push(u(c)*h);for(c=0;o[c]<a;c++);for(f=o.length;o[f-1]>l;f--);o=o.slice(c,f)}return o},o.tickFormat=function(n,e){if(!arguments.length)return Nl;arguments.length<2?e=Nl:"function"!=typeof e&&(e=ao.format(e));var r=Math.max(1,t*n/o.ticks().length);return function(n){var o=n/u(Math.round(i(n)));return t-.5>o*t&&(o*=t),r>=o?e(n):""}},o.copy=function(){return ru(n.copy(),t,e,r)},Ji(o,n)}function iu(n,t,e){function r(t){return n(i(t))}var i=uu(t),u=uu(1/t);return r.invert=function(t){return u(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain((e=t.map(Number)).map(i)),r):e},r.ticks=function(n){return Qi(e,n)},r.tickFormat=function(n,t){return nu(e,n,t)},r.nice=function(n){return r.domain(Gi(e,n))},r.exponent=function(o){return arguments.length?(i=uu(t=o),u=uu(1/t),n.domain(e.map(i)),r):t},r.copy=function(){return iu(n.copy(),t,e)},Ji(r,n)}function uu(n){return function(t){return 0>t?-Math.pow(-t,n):Math.pow(t,n)}}function ou(n,t){function e(e){return u[((i.get(e)||("range"===t.t?i.set(e,n.push(e)):NaN))-1)%u.length]}function r(t,e){return ao.range(n.length).map(function(n){return t+e*n})}var i,u,o;return e.domain=function(r){if(!arguments.length)return n;n=[],i=new c;for(var u,o=-1,a=r.length;++o<a;)i.has(u=r[o])||i.set(u,n.push(u));return e[t.t].apply(e,t.a)},e.range=function(n){return arguments.length?(u=n,o=0,t={t:"range",a:arguments},e):u},e.rangePoints=function(i,a){arguments.length<2&&(a=0);var l=i[0],c=i[1],f=n.length<2?(l=(l+c)/2,0):(c-l)/(n.length-1+a);return u=r(l+f*a/2,f),o=0,t={t:"rangePoints",a:arguments},e},e.rangeRoundPoints=function(i,a){arguments.length<2&&(a=0);var l=i[0],c=i[1],f=n.length<2?(l=c=Math.round((l+c)/2),0):(c-l)/(n.length-1+a)|0;return u=r(l+Math.round(f*a/2+(c-l-(n.length-1+a)*f)/2),f),o=0,t={t:"rangeRoundPoints",a:arguments},e},e.rangeBands=function(i,a,l){arguments.length<2&&(a=0),arguments.length<3&&(l=a);var c=i[1]<i[0],f=i[c-0],s=i[1-c],h=(s-f)/(n.length-a+2*l);return u=r(f+h*l,h),c&&u.reverse(),o=h*(1-a),t={t:"rangeBands",a:arguments},e},e.rangeRoundBands=function(i,a,l){arguments.length<2&&(a=0),arguments.length<3&&(l=a);var c=i[1]<i[0],f=i[c-0],s=i[1-c],h=Math.floor((s-f)/(n.length-a+2*l));return u=r(f+Math.round((s-f-(n.length-a)*h)/2),h),c&&u.reverse(),o=Math.round(h*(1-a)),t={t:"rangeRoundBands",a:arguments},e},e.rangeBand=function(){return o},e.rangeExtent=function(){return Yi(t.a[0])},e.copy=function(){return ou(n,t)},e.domain(n)}function au(n,t){function u(){var e=0,r=t.length;for(a=[];++e<r;)a[e-1]=ao.quantile(n,e/r);return o}function o(n){return isNaN(n=+n)?void 0:t[ao.bisect(a,n)]}var a;return o.domain=function(t){return arguments.length?(n=t.map(r).filter(i).sort(e),u()):n},o.range=function(n){return arguments.length?(t=n,u()):t},o.quantiles=function(){return a},o.invertExtent=function(e){return e=t.indexOf(e),0>e?[NaN,NaN]:[e>0?a[e-1]:n[0],e<a.length?a[e]:n[n.length-1]]},o.copy=function(){return au(n,t)},u()}function lu(n,t,e){function r(t){return e[Math.max(0,Math.min(o,Math.floor(u*(t-n))))]}function i(){return u=e.length/(t-n),o=e.length-1,r}var u,o;return r.domain=function(e){return arguments.length?(n=+e[0],t=+e[e.length-1],i()):[n,t]},r.range=function(n){return arguments.length?(e=n,i()):e},r.invertExtent=function(t){return t=e.indexOf(t),t=0>t?NaN:t/u+n,[t,t+1/u]},r.copy=function(){return lu(n,t,e)},i()}function cu(n,t){function e(e){return e>=e?t[ao.bisect(n,e)]:void 0}return e.domain=function(t){return arguments.length?(n=t,e):n},e.range=function(n){return arguments.length?(t=n,e):t},e.invertExtent=function(e){return e=t.indexOf(e),[n[e-1],n[e]]},e.copy=function(){return cu(n,t)},e}function fu(n){function t(n){return+n}return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=e.map(t),t):n},t.ticks=function(t){return Qi(n,t)},t.tickFormat=function(t,e){return nu(n,t,e)},t.copy=function(){return fu(n)},t}function su(){return 0}function hu(n){return n.innerRadius}function pu(n){return n.outerRadius}function gu(n){return n.startAngle}function vu(n){return n.endAngle}function du(n){return n&&n.padAngle}function yu(n,t,e,r){return(n-e)*t-(t-r)*n>0?0:1}function mu(n,t,e,r,i){var u=n[0]-t[0],o=n[1]-t[1],a=(i?r:-r)/Math.sqrt(u*u+o*o),l=a*o,c=-a*u,f=n[0]+l,s=n[1]+c,h=t[0]+l,p=t[1]+c,g=(f+h)/2,v=(s+p)/2,d=h-f,y=p-s,m=d*d+y*y,M=e-r,x=f*p-h*s,b=(0>y?-1:1)*Math.sqrt(Math.max(0,M*M*m-x*x)),_=(x*y-d*b)/m,w=(-x*d-y*b)/m,S=(x*y+d*b)/m,k=(-x*d+y*b)/m,N=_-g,E=w-v,A=S-g,C=k-v;return N*N+E*E>A*A+C*C&&(_=S,w=k),[[_-l,w-c],[_*e/M,w*e/M]]}function Mu(n){function t(t){function o(){c.push("M",u(n(f),a))}for(var l,c=[],f=[],s=-1,h=t.length,p=En(e),g=En(r);++s<h;)i.call(this,l=t[s],s)?f.push([+p.call(this,l,s),+g.call(this,l,s)]):f.length&&(o(),f=[]);return f.length&&o(),c.length?c.join(""):null}var e=Ce,r=ze,i=zt,u=xu,o=u.key,a=.7;return t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t.defined=function(n){return arguments.length?(i=n,t):i},t.interpolate=function(n){return arguments.length?(o="function"==typeof n?u=n:(u=Tl.get(n)||xu).key,t):o},t.tension=function(n){return arguments.length?(a=n,t):a},t}function xu(n){return n.length>1?n.join("L"):n+"Z"}function bu(n){return n.join("L")+"Z"}function _u(n){for(var t=0,e=n.length,r=n[0],i=[r[0],",",r[1]];++t<e;)i.push("H",(r[0]+(r=n[t])[0])/2,"V",r[1]);return e>1&&i.push("H",r[0]),i.join("")}function wu(n){for(var t=0,e=n.length,r=n[0],i=[r[0],",",r[1]];++t<e;)i.push("V",(r=n[t])[1],"H",r[0]);return i.join("")}function Su(n){for(var t=0,e=n.length,r=n[0],i=[r[0],",",r[1]];++t<e;)i.push("H",(r=n[t])[0],"V",r[1]);return i.join("")}function ku(n,t){return n.length<4?xu(n):n[1]+Au(n.slice(1,-1),Cu(n,t))}function Nu(n,t){return n.length<3?bu(n):n[0]+Au((n.push(n[0]),n),Cu([n[n.length-2]].concat(n,[n[1]]),t))}function Eu(n,t){return n.length<3?xu(n):n[0]+Au(n,Cu(n,t))}function Au(n,t){if(t.length<1||n.length!=t.length&&n.length!=t.length+2)return xu(n);var e=n.length!=t.length,r="",i=n[0],u=n[1],o=t[0],a=o,l=1;if(e&&(r+="Q"+(u[0]-2*o[0]/3)+","+(u[1]-2*o[1]/3)+","+u[0]+","+u[1],i=n[1],l=2),t.length>1){a=t[1],u=n[l],l++,r+="C"+(i[0]+o[0])+","+(i[1]+o[1])+","+(u[0]-a[0])+","+(u[1]-a[1])+","+u[0]+","+u[1];for(var c=2;c<t.length;c++,l++)u=n[l],a=t[c],r+="S"+(u[0]-a[0])+","+(u[1]-a[1])+","+u[0]+","+u[1]}if(e){var f=n[l];r+="Q"+(u[0]+2*a[0]/3)+","+(u[1]+2*a[1]/3)+","+f[0]+","+f[1]}return r}function Cu(n,t){for(var e,r=[],i=(1-t)/2,u=n[0],o=n[1],a=1,l=n.length;++a<l;)e=u,u=o,o=n[a],r.push([i*(o[0]-e[0]),i*(o[1]-e[1])]);return r}function zu(n){if(n.length<3)return xu(n);var t=1,e=n.length,r=n[0],i=r[0],u=r[1],o=[i,i,i,(r=n[1])[0]],a=[u,u,u,r[1]],l=[i,",",u,"L",Ru(Pl,o),",",Ru(Pl,a)];for(n.push(n[e-1]);++t<=e;)r=n[t],o.shift(),o.push(r[0]),a.shift(),a.push(r[1]),Du(l,o,a);return n.pop(),l.push("L",r),l.join("")}function Lu(n){if(n.length<4)return xu(n);for(var t,e=[],r=-1,i=n.length,u=[0],o=[0];++r<3;)t=n[r],u.push(t[0]),o.push(t[1]);for(e.push(Ru(Pl,u)+","+Ru(Pl,o)),--r;++r<i;)t=n[r],u.shift(),u.push(t[0]),o.shift(),o.push(t[1]),Du(e,u,o);return e.join("")}function qu(n){for(var t,e,r=-1,i=n.length,u=i+4,o=[],a=[];++r<4;)e=n[r%i],o.push(e[0]),a.push(e[1]);for(t=[Ru(Pl,o),",",Ru(Pl,a)],--r;++r<u;)e=n[r%i],o.shift(),o.push(e[0]),a.shift(),a.push(e[1]),Du(t,o,a);return t.join("")}function Tu(n,t){var e=n.length-1;if(e)for(var r,i,u=n[0][0],o=n[0][1],a=n[e][0]-u,l=n[e][1]-o,c=-1;++c<=e;)r=n[c],i=c/e,r[0]=t*r[0]+(1-t)*(u+i*a),r[1]=t*r[1]+(1-t)*(o+i*l);return zu(n)}function Ru(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]}function Du(n,t,e){n.push("C",Ru(Rl,t),",",Ru(Rl,e),",",Ru(Dl,t),",",Ru(Dl,e),",",Ru(Pl,t),",",Ru(Pl,e))}function Pu(n,t){return(t[1]-n[1])/(t[0]-n[0])}function Uu(n){for(var t=0,e=n.length-1,r=[],i=n[0],u=n[1],o=r[0]=Pu(i,u);++t<e;)r[t]=(o+(o=Pu(i=u,u=n[t+1])))/2;return r[t]=o,r}function ju(n){for(var t,e,r,i,u=[],o=Uu(n),a=-1,l=n.length-1;++a<l;)t=Pu(n[a],n[a+1]),xo(t)<Uo?o[a]=o[a+1]=0:(e=o[a]/t,r=o[a+1]/t,i=e*e+r*r,i>9&&(i=3*t/Math.sqrt(i),o[a]=i*e,o[a+1]=i*r));for(a=-1;++a<=l;)i=(n[Math.min(l,a+1)][0]-n[Math.max(0,a-1)][0])/(6*(1+o[a]*o[a])),u.push([i||0,o[a]*i||0]);return u}function Fu(n){return n.length<3?xu(n):n[0]+Au(n,ju(n))}function Hu(n){for(var t,e,r,i=-1,u=n.length;++i<u;)t=n[i],e=t[0],r=t[1]-Io,t[0]=e*Math.cos(r),t[1]=e*Math.sin(r);return n}function Ou(n){function t(t){function l(){v.push("M",a(n(y),s),f,c(n(d.reverse()),s),"Z")}for(var h,p,g,v=[],d=[],y=[],m=-1,M=t.length,x=En(e),b=En(i),_=e===r?function(){
return p}:En(r),w=i===u?function(){return g}:En(u);++m<M;)o.call(this,h=t[m],m)?(d.push([p=+x.call(this,h,m),g=+b.call(this,h,m)]),y.push([+_.call(this,h,m),+w.call(this,h,m)])):d.length&&(l(),d=[],y=[]);return d.length&&l(),v.length?v.join(""):null}var e=Ce,r=Ce,i=0,u=ze,o=zt,a=xu,l=a.key,c=a,f="L",s=.7;return t.x=function(n){return arguments.length?(e=r=n,t):r},t.x0=function(n){return arguments.length?(e=n,t):e},t.x1=function(n){return arguments.length?(r=n,t):r},t.y=function(n){return arguments.length?(i=u=n,t):u},t.y0=function(n){return arguments.length?(i=n,t):i},t.y1=function(n){return arguments.length?(u=n,t):u},t.defined=function(n){return arguments.length?(o=n,t):o},t.interpolate=function(n){return arguments.length?(l="function"==typeof n?a=n:(a=Tl.get(n)||xu).key,c=a.reverse||a,f=a.closed?"M":"L",t):l},t.tension=function(n){return arguments.length?(s=n,t):s},t}function Iu(n){return n.radius}function Yu(n){return[n.x,n.y]}function Zu(n){return function(){var t=n.apply(this,arguments),e=t[0],r=t[1]-Io;return[e*Math.cos(r),e*Math.sin(r)]}}function Vu(){return 64}function Xu(){return"circle"}function $u(n){var t=Math.sqrt(n/Fo);return"M0,"+t+"A"+t+","+t+" 0 1,1 0,"+-t+"A"+t+","+t+" 0 1,1 0,"+t+"Z"}function Bu(n){return function(){var t,e,r;(t=this[n])&&(r=t[e=t.active])&&(r.timer.c=null,r.timer.t=NaN,--t.count?delete t[e]:delete this[n],t.active+=.5,r.event&&r.event.interrupt.call(this,this.__data__,r.index))}}function Wu(n,t,e){return ko(n,Yl),n.namespace=t,n.id=e,n}function Ju(n,t,e,r){var i=n.id,u=n.namespace;return Y(n,"function"==typeof e?function(n,o,a){n[u][i].tween.set(t,r(e.call(n,n.__data__,o,a)))}:(e=r(e),function(n){n[u][i].tween.set(t,e)}))}function Gu(n){return null==n&&(n=""),function(){this.textContent=n}}function Ku(n){return null==n?"__transition__":"__transition_"+n+"__"}function Qu(n,t,e,r,i){function u(n){var t=v.delay;return f.t=t+l,n>=t?o(n-t):void(f.c=o)}function o(e){var i=g.active,u=g[i];u&&(u.timer.c=null,u.timer.t=NaN,--g.count,delete g[i],u.event&&u.event.interrupt.call(n,n.__data__,u.index));for(var o in g)if(r>+o){var c=g[o];c.timer.c=null,c.timer.t=NaN,--g.count,delete g[o]}f.c=a,qn(function(){return f.c&&a(e||1)&&(f.c=null,f.t=NaN),1},0,l),g.active=r,v.event&&v.event.start.call(n,n.__data__,t),p=[],v.tween.forEach(function(e,r){(r=r.call(n,n.__data__,t))&&p.push(r)}),h=v.ease,s=v.duration}function a(i){for(var u=i/s,o=h(u),a=p.length;a>0;)p[--a].call(n,o);return u>=1?(v.event&&v.event.end.call(n,n.__data__,t),--g.count?delete g[r]:delete n[e],1):void 0}var l,f,s,h,p,g=n[e]||(n[e]={active:0,count:0}),v=g[r];v||(l=i.time,f=qn(u,0,l),v=g[r]={tween:new c,time:l,timer:f,delay:i.delay,duration:i.duration,ease:i.ease,index:t},i=null,++g.count)}function no(n,t,e){n.attr("transform",function(n){var r=t(n);return"translate("+(isFinite(r)?r:e(n))+",0)"})}function to(n,t,e){n.attr("transform",function(n){var r=t(n);return"translate(0,"+(isFinite(r)?r:e(n))+")"})}function eo(n){return n.toISOString()}function ro(n,t,e){function r(t){return n(t)}function i(n,e){var r=n[1]-n[0],i=r/e,u=ao.bisect(Kl,i);return u==Kl.length?[t.year,Ki(n.map(function(n){return n/31536e6}),e)[2]]:u?t[i/Kl[u-1]<Kl[u]/i?u-1:u]:[tc,Ki(n,e)[2]]}return r.invert=function(t){return io(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain(t),r):n.domain().map(io)},r.nice=function(n,t){function e(e){return!isNaN(e)&&!n.range(e,io(+e+1),t).length}var u=r.domain(),o=Yi(u),a=null==n?i(o,10):"number"==typeof n&&i(o,n);return a&&(n=a[0],t=a[1]),r.domain(Xi(u,t>1?{floor:function(t){for(;e(t=n.floor(t));)t=io(t-1);return t},ceil:function(t){for(;e(t=n.ceil(t));)t=io(+t+1);return t}}:n))},r.ticks=function(n,t){var e=Yi(r.domain()),u=null==n?i(e,10):"number"==typeof n?i(e,n):!n.range&&[{range:n},t];return u&&(n=u[0],t=u[1]),n.range(e[0],io(+e[1]+1),1>t?1:t)},r.tickFormat=function(){return e},r.copy=function(){return ro(n.copy(),t,e)},Ji(r,n)}function io(n){return new Date(n)}function uo(n){return JSON.parse(n.responseText)}function oo(n){var t=fo.createRange();return t.selectNode(fo.body),t.createContextualFragment(n.responseText)}var ao={version:"3.5.17"},lo=[].slice,co=function(n){return lo.call(n)},fo=this.document;if(fo)try{co(fo.documentElement.childNodes)[0].nodeType}catch(so){co=function(n){for(var t=n.length,e=new Array(t);t--;)e[t]=n[t];return e}}if(Date.now||(Date.now=function(){return+new Date}),fo)try{fo.createElement("DIV").style.setProperty("opacity",0,"")}catch(ho){var po=this.Element.prototype,go=po.setAttribute,vo=po.setAttributeNS,yo=this.CSSStyleDeclaration.prototype,mo=yo.setProperty;po.setAttribute=function(n,t){go.call(this,n,t+"")},po.setAttributeNS=function(n,t,e){vo.call(this,n,t,e+"")},yo.setProperty=function(n,t,e){mo.call(this,n,t+"",e)}}ao.ascending=e,ao.descending=function(n,t){return n>t?-1:t>n?1:t>=n?0:NaN},ao.min=function(n,t){var e,r,i=-1,u=n.length;if(1===arguments.length){for(;++i<u;)if(null!=(r=n[i])&&r>=r){e=r;break}for(;++i<u;)null!=(r=n[i])&&e>r&&(e=r)}else{for(;++i<u;)if(null!=(r=t.call(n,n[i],i))&&r>=r){e=r;break}for(;++i<u;)null!=(r=t.call(n,n[i],i))&&e>r&&(e=r)}return e},ao.max=function(n,t){var e,r,i=-1,u=n.length;if(1===arguments.length){for(;++i<u;)if(null!=(r=n[i])&&r>=r){e=r;break}for(;++i<u;)null!=(r=n[i])&&r>e&&(e=r)}else{for(;++i<u;)if(null!=(r=t.call(n,n[i],i))&&r>=r){e=r;break}for(;++i<u;)null!=(r=t.call(n,n[i],i))&&r>e&&(e=r)}return e},ao.extent=function(n,t){var e,r,i,u=-1,o=n.length;if(1===arguments.length){for(;++u<o;)if(null!=(r=n[u])&&r>=r){e=i=r;break}for(;++u<o;)null!=(r=n[u])&&(e>r&&(e=r),r>i&&(i=r))}else{for(;++u<o;)if(null!=(r=t.call(n,n[u],u))&&r>=r){e=i=r;break}for(;++u<o;)null!=(r=t.call(n,n[u],u))&&(e>r&&(e=r),r>i&&(i=r))}return[e,i]},ao.sum=function(n,t){var e,r=0,u=n.length,o=-1;if(1===arguments.length)for(;++o<u;)i(e=+n[o])&&(r+=e);else for(;++o<u;)i(e=+t.call(n,n[o],o))&&(r+=e);return r},ao.mean=function(n,t){var e,u=0,o=n.length,a=-1,l=o;if(1===arguments.length)for(;++a<o;)i(e=r(n[a]))?u+=e:--l;else for(;++a<o;)i(e=r(t.call(n,n[a],a)))?u+=e:--l;return l?u/l:void 0},ao.quantile=function(n,t){var e=(n.length-1)*t+1,r=Math.floor(e),i=+n[r-1],u=e-r;return u?i+u*(n[r]-i):i},ao.median=function(n,t){var u,o=[],a=n.length,l=-1;if(1===arguments.length)for(;++l<a;)i(u=r(n[l]))&&o.push(u);else for(;++l<a;)i(u=r(t.call(n,n[l],l)))&&o.push(u);return o.length?ao.quantile(o.sort(e),.5):void 0},ao.variance=function(n,t){var e,u,o=n.length,a=0,l=0,c=-1,f=0;if(1===arguments.length)for(;++c<o;)i(e=r(n[c]))&&(u=e-a,a+=u/++f,l+=u*(e-a));else for(;++c<o;)i(e=r(t.call(n,n[c],c)))&&(u=e-a,a+=u/++f,l+=u*(e-a));return f>1?l/(f-1):void 0},ao.deviation=function(){var n=ao.variance.apply(this,arguments);return n?Math.sqrt(n):n};var Mo=u(e);ao.bisectLeft=Mo.left,ao.bisect=ao.bisectRight=Mo.right,ao.bisector=function(n){return u(1===n.length?function(t,r){return e(n(t),r)}:n)},ao.shuffle=function(n,t,e){(u=arguments.length)<3&&(e=n.length,2>u&&(t=0));for(var r,i,u=e-t;u;)i=Math.random()*u--|0,r=n[u+t],n[u+t]=n[i+t],n[i+t]=r;return n},ao.permute=function(n,t){for(var e=t.length,r=new Array(e);e--;)r[e]=n[t[e]];return r},ao.pairs=function(n){for(var t,e=0,r=n.length-1,i=n[0],u=new Array(0>r?0:r);r>e;)u[e]=[t=i,i=n[++e]];return u},ao.transpose=function(n){if(!(i=n.length))return[];for(var t=-1,e=ao.min(n,o),r=new Array(e);++t<e;)for(var i,u=-1,a=r[t]=new Array(i);++u<i;)a[u]=n[u][t];return r},ao.zip=function(){return ao.transpose(arguments)},ao.keys=function(n){var t=[];for(var e in n)t.push(e);return t},ao.values=function(n){var t=[];for(var e in n)t.push(n[e]);return t},ao.entries=function(n){var t=[];for(var e in n)t.push({key:e,value:n[e]});return t},ao.merge=function(n){for(var t,e,r,i=n.length,u=-1,o=0;++u<i;)o+=n[u].length;for(e=new Array(o);--i>=0;)for(r=n[i],t=r.length;--t>=0;)e[--o]=r[t];return e};var xo=Math.abs;ao.range=function(n,t,e){if(arguments.length<3&&(e=1,arguments.length<2&&(t=n,n=0)),(t-n)/e===1/0)throw new Error("infinite range");var r,i=[],u=a(xo(e)),o=-1;if(n*=u,t*=u,e*=u,0>e)for(;(r=n+e*++o)>t;)i.push(r/u);else for(;(r=n+e*++o)<t;)i.push(r/u);return i},ao.map=function(n,t){var e=new c;if(n instanceof c)n.forEach(function(n,t){e.set(n,t)});else if(Array.isArray(n)){var r,i=-1,u=n.length;if(1===arguments.length)for(;++i<u;)e.set(i,n[i]);else for(;++i<u;)e.set(t.call(n,r=n[i],i),r)}else for(var o in n)e.set(o,n[o]);return e};var bo="__proto__",_o="\x00";l(c,{has:h,get:function(n){return this._[f(n)]},set:function(n,t){return this._[f(n)]=t},remove:p,keys:g,values:function(){var n=[];for(var t in this._)n.push(this._[t]);return n},entries:function(){var n=[];for(var t in this._)n.push({key:s(t),value:this._[t]});return n},size:v,empty:d,forEach:function(n){for(var t in this._)n.call(this,s(t),this._[t])}}),ao.nest=function(){function n(t,o,a){if(a>=u.length)return r?r.call(i,o):e?o.sort(e):o;for(var l,f,s,h,p=-1,g=o.length,v=u[a++],d=new c;++p<g;)(h=d.get(l=v(f=o[p])))?h.push(f):d.set(l,[f]);return t?(f=t(),s=function(e,r){f.set(e,n(t,r,a))}):(f={},s=function(e,r){f[e]=n(t,r,a)}),d.forEach(s),f}function t(n,e){if(e>=u.length)return n;var r=[],i=o[e++];return n.forEach(function(n,i){r.push({key:n,values:t(i,e)})}),i?r.sort(function(n,t){return i(n.key,t.key)}):r}var e,r,i={},u=[],o=[];return i.map=function(t,e){return n(e,t,0)},i.entries=function(e){return t(n(ao.map,e,0),0)},i.key=function(n){return u.push(n),i},i.sortKeys=function(n){return o[u.length-1]=n,i},i.sortValues=function(n){return e=n,i},i.rollup=function(n){return r=n,i},i},ao.set=function(n){var t=new y;if(n)for(var e=0,r=n.length;r>e;++e)t.add(n[e]);return t},l(y,{has:h,add:function(n){return this._[f(n+="")]=!0,n},remove:p,values:g,size:v,empty:d,forEach:function(n){for(var t in this._)n.call(this,s(t))}}),ao.behavior={},ao.rebind=function(n,t){for(var e,r=1,i=arguments.length;++r<i;)n[e=arguments[r]]=M(n,t,t[e]);return n};var wo=["webkit","ms","moz","Moz","o","O"];ao.dispatch=function(){for(var n=new _,t=-1,e=arguments.length;++t<e;)n[arguments[t]]=w(n);return n},_.prototype.on=function(n,t){var e=n.indexOf("."),r="";if(e>=0&&(r=n.slice(e+1),n=n.slice(0,e)),n)return arguments.length<2?this[n].on(r):this[n].on(r,t);if(2===arguments.length){if(null==t)for(n in this)this.hasOwnProperty(n)&&this[n].on(r,null);return this}},ao.event=null,ao.requote=function(n){return n.replace(So,"\\$&")};var So=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,ko={}.__proto__?function(n,t){n.__proto__=t}:function(n,t){for(var e in t)n[e]=t[e]},No=function(n,t){return t.querySelector(n)},Eo=function(n,t){return t.querySelectorAll(n)},Ao=function(n,t){var e=n.matches||n[x(n,"matchesSelector")];return(Ao=function(n,t){return e.call(n,t)})(n,t)};"function"==typeof Sizzle&&(No=function(n,t){return Sizzle(n,t)[0]||null},Eo=Sizzle,Ao=Sizzle.matchesSelector),ao.selection=function(){return ao.select(fo.documentElement)};var Co=ao.selection.prototype=[];Co.select=function(n){var t,e,r,i,u=[];n=A(n);for(var o=-1,a=this.length;++o<a;){u.push(t=[]),t.parentNode=(r=this[o]).parentNode;for(var l=-1,c=r.length;++l<c;)(i=r[l])?(t.push(e=n.call(i,i.__data__,l,o)),e&&"__data__"in i&&(e.__data__=i.__data__)):t.push(null)}return E(u)},Co.selectAll=function(n){var t,e,r=[];n=C(n);for(var i=-1,u=this.length;++i<u;)for(var o=this[i],a=-1,l=o.length;++a<l;)(e=o[a])&&(r.push(t=co(n.call(e,e.__data__,a,i))),t.parentNode=e);return E(r)};var zo="http://www.w3.org/1999/xhtml",Lo={svg:"http://www.w3.org/2000/svg",xhtml:zo,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};ao.ns={prefix:Lo,qualify:function(n){var t=n.indexOf(":"),e=n;return t>=0&&"xmlns"!==(e=n.slice(0,t))&&(n=n.slice(t+1)),Lo.hasOwnProperty(e)?{space:Lo[e],local:n}:n}},Co.attr=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node();return n=ao.ns.qualify(n),n.local?e.getAttributeNS(n.space,n.local):e.getAttribute(n)}for(t in n)this.each(z(t,n[t]));return this}return this.each(z(n,t))},Co.classed=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node(),r=(n=T(n)).length,i=-1;if(t=e.classList){for(;++i<r;)if(!t.contains(n[i]))return!1}else for(t=e.getAttribute("class");++i<r;)if(!q(n[i]).test(t))return!1;return!0}for(t in n)this.each(R(t,n[t]));return this}return this.each(R(n,t))},Co.style=function(n,e,r){var i=arguments.length;if(3>i){if("string"!=typeof n){2>i&&(e="");for(r in n)this.each(P(r,n[r],e));return this}if(2>i){var u=this.node();return t(u).getComputedStyle(u,null).getPropertyValue(n)}r=""}return this.each(P(n,e,r))},Co.property=function(n,t){if(arguments.length<2){if("string"==typeof n)return this.node()[n];for(t in n)this.each(U(t,n[t]));return this}return this.each(U(n,t))},Co.text=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.textContent=null==t?"":t}:null==n?function(){this.textContent=""}:function(){this.textContent=n}):this.node().textContent},Co.html=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.innerHTML=null==t?"":t}:null==n?function(){this.innerHTML=""}:function(){this.innerHTML=n}):this.node().innerHTML},Co.append=function(n){return n=j(n),this.select(function(){return this.appendChild(n.apply(this,arguments))})},Co.insert=function(n,t){return n=j(n),t=A(t),this.select(function(){return this.insertBefore(n.apply(this,arguments),t.apply(this,arguments)||null)})},Co.remove=function(){return this.each(F)},Co.data=function(n,t){function e(n,e){var r,i,u,o=n.length,s=e.length,h=Math.min(o,s),p=new Array(s),g=new Array(s),v=new Array(o);if(t){var d,y=new c,m=new Array(o);for(r=-1;++r<o;)(i=n[r])&&(y.has(d=t.call(i,i.__data__,r))?v[r]=i:y.set(d,i),m[r]=d);for(r=-1;++r<s;)(i=y.get(d=t.call(e,u=e[r],r)))?i!==!0&&(p[r]=i,i.__data__=u):g[r]=H(u),y.set(d,!0);for(r=-1;++r<o;)r in m&&y.get(m[r])!==!0&&(v[r]=n[r])}else{for(r=-1;++r<h;)i=n[r],u=e[r],i?(i.__data__=u,p[r]=i):g[r]=H(u);for(;s>r;++r)g[r]=H(e[r]);for(;o>r;++r)v[r]=n[r]}g.update=p,g.parentNode=p.parentNode=v.parentNode=n.parentNode,a.push(g),l.push(p),f.push(v)}var r,i,u=-1,o=this.length;if(!arguments.length){for(n=new Array(o=(r=this[0]).length);++u<o;)(i=r[u])&&(n[u]=i.__data__);return n}var a=Z([]),l=E([]),f=E([]);if("function"==typeof n)for(;++u<o;)e(r=this[u],n.call(r,r.parentNode.__data__,u));else for(;++u<o;)e(r=this[u],n);return l.enter=function(){return a},l.exit=function(){return f},l},Co.datum=function(n){return arguments.length?this.property("__data__",n):this.property("__data__")},Co.filter=function(n){var t,e,r,i=[];"function"!=typeof n&&(n=O(n));for(var u=0,o=this.length;o>u;u++){i.push(t=[]),t.parentNode=(e=this[u]).parentNode;for(var a=0,l=e.length;l>a;a++)(r=e[a])&&n.call(r,r.__data__,a,u)&&t.push(r)}return E(i)},Co.order=function(){for(var n=-1,t=this.length;++n<t;)for(var e,r=this[n],i=r.length-1,u=r[i];--i>=0;)(e=r[i])&&(u&&u!==e.nextSibling&&u.parentNode.insertBefore(e,u),u=e);return this},Co.sort=function(n){n=I.apply(this,arguments);for(var t=-1,e=this.length;++t<e;)this[t].sort(n);return this.order()},Co.each=function(n){return Y(this,function(t,e,r){n.call(t,t.__data__,e,r)})},Co.call=function(n){var t=co(arguments);return n.apply(t[0]=this,t),this},Co.empty=function(){return!this.node()},Co.node=function(){for(var n=0,t=this.length;t>n;n++)for(var e=this[n],r=0,i=e.length;i>r;r++){var u=e[r];if(u)return u}return null},Co.size=function(){var n=0;return Y(this,function(){++n}),n};var qo=[];ao.selection.enter=Z,ao.selection.enter.prototype=qo,qo.append=Co.append,qo.empty=Co.empty,qo.node=Co.node,qo.call=Co.call,qo.size=Co.size,qo.select=function(n){for(var t,e,r,i,u,o=[],a=-1,l=this.length;++a<l;){r=(i=this[a]).update,o.push(t=[]),t.parentNode=i.parentNode;for(var c=-1,f=i.length;++c<f;)(u=i[c])?(t.push(r[c]=e=n.call(i.parentNode,u.__data__,c,a)),e.__data__=u.__data__):t.push(null)}return E(o)},qo.insert=function(n,t){return arguments.length<2&&(t=V(this)),Co.insert.call(this,n,t)},ao.select=function(t){var e;return"string"==typeof t?(e=[No(t,fo)],e.parentNode=fo.documentElement):(e=[t],e.parentNode=n(t)),E([e])},ao.selectAll=function(n){var t;return"string"==typeof n?(t=co(Eo(n,fo)),t.parentNode=fo.documentElement):(t=co(n),t.parentNode=null),E([t])},Co.on=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t=!1);for(e in n)this.each(X(e,n[e],t));return this}if(2>r)return(r=this.node()["__on"+n])&&r._;e=!1}return this.each(X(n,t,e))};var To=ao.map({mouseenter:"mouseover",mouseleave:"mouseout"});fo&&To.forEach(function(n){"on"+n in fo&&To.remove(n)});var Ro,Do=0;ao.mouse=function(n){return J(n,k())};var Po=this.navigator&&/WebKit/.test(this.navigator.userAgent)?-1:0;ao.touch=function(n,t,e){if(arguments.length<3&&(e=t,t=k().changedTouches),t)for(var r,i=0,u=t.length;u>i;++i)if((r=t[i]).identifier===e)return J(n,r)},ao.behavior.drag=function(){function n(){this.on("mousedown.drag",u).on("touchstart.drag",o)}function e(n,t,e,u,o){return function(){function a(){var n,e,r=t(h,v);r&&(n=r[0]-M[0],e=r[1]-M[1],g|=n|e,M=r,p({type:"drag",x:r[0]+c[0],y:r[1]+c[1],dx:n,dy:e}))}function l(){t(h,v)&&(y.on(u+d,null).on(o+d,null),m(g),p({type:"dragend"}))}var c,f=this,s=ao.event.target.correspondingElement||ao.event.target,h=f.parentNode,p=r.of(f,arguments),g=0,v=n(),d=".drag"+(null==v?"":"-"+v),y=ao.select(e(s)).on(u+d,a).on(o+d,l),m=W(s),M=t(h,v);i?(c=i.apply(f,arguments),c=[c.x-M[0],c.y-M[1]]):c=[0,0],p({type:"dragstart"})}}var r=N(n,"drag","dragstart","dragend"),i=null,u=e(b,ao.mouse,t,"mousemove","mouseup"),o=e(G,ao.touch,m,"touchmove","touchend");return n.origin=function(t){return arguments.length?(i=t,n):i},ao.rebind(n,r,"on")},ao.touches=function(n,t){return arguments.length<2&&(t=k().touches),t?co(t).map(function(t){var e=J(n,t);return e.identifier=t.identifier,e}):[]};var Uo=1e-6,jo=Uo*Uo,Fo=Math.PI,Ho=2*Fo,Oo=Ho-Uo,Io=Fo/2,Yo=Fo/180,Zo=180/Fo,Vo=Math.SQRT2,Xo=2,$o=4;ao.interpolateZoom=function(n,t){var e,r,i=n[0],u=n[1],o=n[2],a=t[0],l=t[1],c=t[2],f=a-i,s=l-u,h=f*f+s*s;if(jo>h)r=Math.log(c/o)/Vo,e=function(n){return[i+n*f,u+n*s,o*Math.exp(Vo*n*r)]};else{var p=Math.sqrt(h),g=(c*c-o*o+$o*h)/(2*o*Xo*p),v=(c*c-o*o-$o*h)/(2*c*Xo*p),d=Math.log(Math.sqrt(g*g+1)-g),y=Math.log(Math.sqrt(v*v+1)-v);r=(y-d)/Vo,e=function(n){var t=n*r,e=rn(d),a=o/(Xo*p)*(e*un(Vo*t+d)-en(d));return[i+a*f,u+a*s,o*e/rn(Vo*t+d)]}}return e.duration=1e3*r,e},ao.behavior.zoom=function(){function n(n){n.on(L,s).on(Wo+".zoom",p).on("dblclick.zoom",g).on(R,h)}function e(n){return[(n[0]-k.x)/k.k,(n[1]-k.y)/k.k]}function r(n){return[n[0]*k.k+k.x,n[1]*k.k+k.y]}function i(n){k.k=Math.max(A[0],Math.min(A[1],n))}function u(n,t){t=r(t),k.x+=n[0]-t[0],k.y+=n[1]-t[1]}function o(t,e,r,o){t.__chart__={x:k.x,y:k.y,k:k.k},i(Math.pow(2,o)),u(d=e,r),t=ao.select(t),C>0&&(t=t.transition().duration(C)),t.call(n.event)}function a(){b&&b.domain(x.range().map(function(n){return(n-k.x)/k.k}).map(x.invert)),w&&w.domain(_.range().map(function(n){return(n-k.y)/k.k}).map(_.invert))}function l(n){z++||n({type:"zoomstart"})}function c(n){a(),n({type:"zoom",scale:k.k,translate:[k.x,k.y]})}function f(n){--z||(n({type:"zoomend"}),d=null)}function s(){function n(){a=1,u(ao.mouse(i),h),c(o)}function r(){s.on(q,null).on(T,null),p(a),f(o)}var i=this,o=D.of(i,arguments),a=0,s=ao.select(t(i)).on(q,n).on(T,r),h=e(ao.mouse(i)),p=W(i);Il.call(i),l(o)}function h(){function n(){var n=ao.touches(g);return p=k.k,n.forEach(function(n){n.identifier in d&&(d[n.identifier]=e(n))}),n}function t(){var t=ao.event.target;ao.select(t).on(x,r).on(b,a),_.push(t);for(var e=ao.event.changedTouches,i=0,u=e.length;u>i;++i)d[e[i].identifier]=null;var l=n(),c=Date.now();if(1===l.length){if(500>c-M){var f=l[0];o(g,f,d[f.identifier],Math.floor(Math.log(k.k)/Math.LN2)+1),S()}M=c}else if(l.length>1){var f=l[0],s=l[1],h=f[0]-s[0],p=f[1]-s[1];y=h*h+p*p}}function r(){var n,t,e,r,o=ao.touches(g);Il.call(g);for(var a=0,l=o.length;l>a;++a,r=null)if(e=o[a],r=d[e.identifier]){if(t)break;n=e,t=r}if(r){var f=(f=e[0]-n[0])*f+(f=e[1]-n[1])*f,s=y&&Math.sqrt(f/y);n=[(n[0]+e[0])/2,(n[1]+e[1])/2],t=[(t[0]+r[0])/2,(t[1]+r[1])/2],i(s*p)}M=null,u(n,t),c(v)}function a(){if(ao.event.touches.length){for(var t=ao.event.changedTouches,e=0,r=t.length;r>e;++e)delete d[t[e].identifier];for(var i in d)return void n()}ao.selectAll(_).on(m,null),w.on(L,s).on(R,h),N(),f(v)}var p,g=this,v=D.of(g,arguments),d={},y=0,m=".zoom-"+ao.event.changedTouches[0].identifier,x="touchmove"+m,b="touchend"+m,_=[],w=ao.select(g),N=W(g);t(),l(v),w.on(L,null).on(R,t)}function p(){var n=D.of(this,arguments);m?clearTimeout(m):(Il.call(this),v=e(d=y||ao.mouse(this)),l(n)),m=setTimeout(function(){m=null,f(n)},50),S(),i(Math.pow(2,.002*Bo())*k.k),u(d,v),c(n)}function g(){var n=ao.mouse(this),t=Math.log(k.k)/Math.LN2;o(this,n,e(n),ao.event.shiftKey?Math.ceil(t)-1:Math.floor(t)+1)}var v,d,y,m,M,x,b,_,w,k={x:0,y:0,k:1},E=[960,500],A=Jo,C=250,z=0,L="mousedown.zoom",q="mousemove.zoom",T="mouseup.zoom",R="touchstart.zoom",D=N(n,"zoomstart","zoom","zoomend");return Wo||(Wo="onwheel"in fo?(Bo=function(){return-ao.event.deltaY*(ao.event.deltaMode?120:1)},"wheel"):"onmousewheel"in fo?(Bo=function(){return ao.event.wheelDelta},"mousewheel"):(Bo=function(){return-ao.event.detail},"MozMousePixelScroll")),n.event=function(n){n.each(function(){var n=D.of(this,arguments),t=k;Hl?ao.select(this).transition().each("start.zoom",function(){k=this.__chart__||{x:0,y:0,k:1},l(n)}).tween("zoom:zoom",function(){var e=E[0],r=E[1],i=d?d[0]:e/2,u=d?d[1]:r/2,o=ao.interpolateZoom([(i-k.x)/k.k,(u-k.y)/k.k,e/k.k],[(i-t.x)/t.k,(u-t.y)/t.k,e/t.k]);return function(t){var r=o(t),a=e/r[2];this.__chart__=k={x:i-r[0]*a,y:u-r[1]*a,k:a},c(n)}}).each("interrupt.zoom",function(){f(n)}).each("end.zoom",function(){f(n)}):(this.__chart__=k,l(n),c(n),f(n))})},n.translate=function(t){return arguments.length?(k={x:+t[0],y:+t[1],k:k.k},a(),n):[k.x,k.y]},n.scale=function(t){return arguments.length?(k={x:k.x,y:k.y,k:null},i(+t),a(),n):k.k},n.scaleExtent=function(t){return arguments.length?(A=null==t?Jo:[+t[0],+t[1]],n):A},n.center=function(t){return arguments.length?(y=t&&[+t[0],+t[1]],n):y},n.size=function(t){return arguments.length?(E=t&&[+t[0],+t[1]],n):E},n.duration=function(t){return arguments.length?(C=+t,n):C},n.x=function(t){return arguments.length?(b=t,x=t.copy(),k={x:0,y:0,k:1},n):b},n.y=function(t){return arguments.length?(w=t,_=t.copy(),k={x:0,y:0,k:1},n):w},ao.rebind(n,D,"on")};var Bo,Wo,Jo=[0,1/0];ao.color=an,an.prototype.toString=function(){return this.rgb()+""},ao.hsl=ln;var Go=ln.prototype=new an;Go.brighter=function(n){return n=Math.pow(.7,arguments.length?n:1),new ln(this.h,this.s,this.l/n)},Go.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),new ln(this.h,this.s,n*this.l)},Go.rgb=function(){return cn(this.h,this.s,this.l)},ao.hcl=fn;var Ko=fn.prototype=new an;Ko.brighter=function(n){return new fn(this.h,this.c,Math.min(100,this.l+Qo*(arguments.length?n:1)))},Ko.darker=function(n){return new fn(this.h,this.c,Math.max(0,this.l-Qo*(arguments.length?n:1)))},Ko.rgb=function(){return sn(this.h,this.c,this.l).rgb()},ao.lab=hn;var Qo=18,na=.95047,ta=1,ea=1.08883,ra=hn.prototype=new an;ra.brighter=function(n){return new hn(Math.min(100,this.l+Qo*(arguments.length?n:1)),this.a,this.b)},ra.darker=function(n){return new hn(Math.max(0,this.l-Qo*(arguments.length?n:1)),this.a,this.b)},ra.rgb=function(){return pn(this.l,this.a,this.b)},ao.rgb=mn;var ia=mn.prototype=new an;ia.brighter=function(n){n=Math.pow(.7,arguments.length?n:1);var t=this.r,e=this.g,r=this.b,i=30;return t||e||r?(t&&i>t&&(t=i),e&&i>e&&(e=i),r&&i>r&&(r=i),new mn(Math.min(255,t/n),Math.min(255,e/n),Math.min(255,r/n))):new mn(i,i,i)},ia.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),new mn(n*this.r,n*this.g,n*this.b)},ia.hsl=function(){return wn(this.r,this.g,this.b)},ia.toString=function(){return"#"+bn(this.r)+bn(this.g)+bn(this.b)};var ua=ao.map({aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074});ua.forEach(function(n,t){ua.set(n,Mn(t))}),ao.functor=En,ao.xhr=An(m),ao.dsv=function(n,t){function e(n,e,u){arguments.length<3&&(u=e,e=null);var o=Cn(n,t,null==e?r:i(e),u);return o.row=function(n){return arguments.length?o.response(null==(e=n)?r:i(n)):e},o}function r(n){return e.parse(n.responseText)}function i(n){return function(t){return e.parse(t.responseText,n)}}function u(t){return t.map(o).join(n)}function o(n){return a.test(n)?'"'+n.replace(/\"/g,'""')+'"':n}var a=new RegExp('["'+n+"\n]"),l=n.charCodeAt(0);return e.parse=function(n,t){var r;return e.parseRows(n,function(n,e){if(r)return r(n,e-1);var i=new Function("d","return {"+n.map(function(n,t){return JSON.stringify(n)+": d["+t+"]"}).join(",")+"}");r=t?function(n,e){return t(i(n),e)}:i})},e.parseRows=function(n,t){function e(){if(f>=c)return o;if(i)return i=!1,u;var t=f;if(34===n.charCodeAt(t)){for(var e=t;e++<c;)if(34===n.charCodeAt(e)){if(34!==n.charCodeAt(e+1))break;++e}f=e+2;var r=n.charCodeAt(e+1);return 13===r?(i=!0,10===n.charCodeAt(e+2)&&++f):10===r&&(i=!0),n.slice(t+1,e).replace(/""/g,'"')}for(;c>f;){var r=n.charCodeAt(f++),a=1;if(10===r)i=!0;else if(13===r)i=!0,10===n.charCodeAt(f)&&(++f,++a);else if(r!==l)continue;return n.slice(t,f-a)}return n.slice(t)}for(var r,i,u={},o={},a=[],c=n.length,f=0,s=0;(r=e())!==o;){for(var h=[];r!==u&&r!==o;)h.push(r),r=e();t&&null==(h=t(h,s++))||a.push(h)}return a},e.format=function(t){if(Array.isArray(t[0]))return e.formatRows(t);var r=new y,i=[];return t.forEach(function(n){for(var t in n)r.has(t)||i.push(r.add(t))}),[i.map(o).join(n)].concat(t.map(function(t){return i.map(function(n){return o(t[n])}).join(n)})).join("\n")},e.formatRows=function(n){return n.map(u).join("\n")},e},ao.csv=ao.dsv(",","text/csv"),ao.tsv=ao.dsv("	","text/tab-separated-values");var oa,aa,la,ca,fa=this[x(this,"requestAnimationFrame")]||function(n){setTimeout(n,17)};ao.timer=function(){qn.apply(this,arguments)},ao.timer.flush=function(){Rn(),Dn()},ao.round=function(n,t){return t?Math.round(n*(t=Math.pow(10,t)))/t:Math.round(n)};var sa=["y","z","a","f","p","n","\xb5","m","","k","M","G","T","P","E","Z","Y"].map(Un);ao.formatPrefix=function(n,t){var e=0;return(n=+n)&&(0>n&&(n*=-1),t&&(n=ao.round(n,Pn(n,t))),e=1+Math.floor(1e-12+Math.log(n)/Math.LN10),e=Math.max(-24,Math.min(24,3*Math.floor((e-1)/3)))),sa[8+e/3]};var ha=/(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,pa=ao.map({b:function(n){return n.toString(2)},c:function(n){return String.fromCharCode(n)},o:function(n){return n.toString(8)},x:function(n){return n.toString(16)},X:function(n){return n.toString(16).toUpperCase()},g:function(n,t){return n.toPrecision(t)},e:function(n,t){return n.toExponential(t)},f:function(n,t){return n.toFixed(t)},r:function(n,t){return(n=ao.round(n,Pn(n,t))).toFixed(Math.max(0,Math.min(20,Pn(n*(1+1e-15),t))))}}),ga=ao.time={},va=Date;Hn.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){da.setUTCDate.apply(this._,arguments)},setDay:function(){da.setUTCDay.apply(this._,arguments)},setFullYear:function(){da.setUTCFullYear.apply(this._,arguments)},setHours:function(){da.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){da.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){da.setUTCMinutes.apply(this._,arguments)},setMonth:function(){da.setUTCMonth.apply(this._,arguments)},setSeconds:function(){da.setUTCSeconds.apply(this._,arguments)},setTime:function(){da.setTime.apply(this._,arguments)}};var da=Date.prototype;ga.year=On(function(n){return n=ga.day(n),n.setMonth(0,1),n},function(n,t){n.setFullYear(n.getFullYear()+t)},function(n){return n.getFullYear()}),ga.years=ga.year.range,ga.years.utc=ga.year.utc.range,ga.day=On(function(n){var t=new va(2e3,0);return t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),t},function(n,t){n.setDate(n.getDate()+t)},function(n){return n.getDate()-1}),ga.days=ga.day.range,ga.days.utc=ga.day.utc.range,ga.dayOfYear=function(n){var t=ga.year(n);return Math.floor((n-t-6e4*(n.getTimezoneOffset()-t.getTimezoneOffset()))/864e5)},["sunday","monday","tuesday","wednesday","thursday","friday","saturday"].forEach(function(n,t){t=7-t;var e=ga[n]=On(function(n){return(n=ga.day(n)).setDate(n.getDate()-(n.getDay()+t)%7),n},function(n,t){n.setDate(n.getDate()+7*Math.floor(t))},function(n){var e=ga.year(n).getDay();return Math.floor((ga.dayOfYear(n)+(e+t)%7)/7)-(e!==t)});ga[n+"s"]=e.range,ga[n+"s"].utc=e.utc.range,ga[n+"OfYear"]=function(n){var e=ga.year(n).getDay();return Math.floor((ga.dayOfYear(n)+(e+t)%7)/7)}}),ga.week=ga.sunday,ga.weeks=ga.sunday.range,ga.weeks.utc=ga.sunday.utc.range,ga.weekOfYear=ga.sundayOfYear;var ya={"-":"",_:" ",0:"0"},ma=/^\s*\d+/,Ma=/^%/;ao.locale=function(n){return{numberFormat:jn(n),timeFormat:Yn(n)}};var xa=ao.locale({decimal:".",thousands:",",grouping:[3],currency:["$",""],dateTime:"%a %b %e %X %Y",date:"%m/%d/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});ao.format=xa.numberFormat,ao.geo={},ft.prototype={s:0,t:0,add:function(n){st(n,this.t,ba),st(ba.s,this.s,this),this.s?this.t+=ba.t:this.s=ba.t},reset:function(){this.s=this.t=0},valueOf:function(){return this.s}};var ba=new ft;ao.geo.stream=function(n,t){n&&_a.hasOwnProperty(n.type)?_a[n.type](n,t):ht(n,t)};var _a={Feature:function(n,t){ht(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,r=-1,i=e.length;++r<i;)ht(e[r].geometry,t)}},wa={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)n=e[r],t.point(n[0],n[1],n[2])},LineString:function(n,t){pt(n.coordinates,t,0)},MultiLineString:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)pt(e[r],t,0)},Polygon:function(n,t){gt(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)gt(e[r],t)},GeometryCollection:function(n,t){for(var e=n.geometries,r=-1,i=e.length;++r<i;)ht(e[r],t)}};ao.geo.area=function(n){return Sa=0,ao.geo.stream(n,Na),Sa};var Sa,ka=new ft,Na={sphere:function(){Sa+=4*Fo},point:b,lineStart:b,lineEnd:b,polygonStart:function(){ka.reset(),Na.lineStart=vt},polygonEnd:function(){var n=2*ka;Sa+=0>n?4*Fo+n:n,Na.lineStart=Na.lineEnd=Na.point=b}};ao.geo.bounds=function(){function n(n,t){M.push(x=[f=n,h=n]),s>t&&(s=t),t>p&&(p=t)}function t(t,e){var r=dt([t*Yo,e*Yo]);if(y){var i=mt(y,r),u=[i[1],-i[0],0],o=mt(u,i);bt(o),o=_t(o);var l=t-g,c=l>0?1:-1,v=o[0]*Zo*c,d=xo(l)>180;if(d^(v>c*g&&c*t>v)){var m=o[1]*Zo;m>p&&(p=m)}else if(v=(v+360)%360-180,d^(v>c*g&&c*t>v)){var m=-o[1]*Zo;s>m&&(s=m)}else s>e&&(s=e),e>p&&(p=e);d?g>t?a(f,t)>a(f,h)&&(h=t):a(t,h)>a(f,h)&&(f=t):h>=f?(f>t&&(f=t),t>h&&(h=t)):t>g?a(f,t)>a(f,h)&&(h=t):a(t,h)>a(f,h)&&(f=t)}else n(t,e);y=r,g=t}function e(){b.point=t}function r(){x[0]=f,x[1]=h,b.point=n,y=null}function i(n,e){if(y){var r=n-g;m+=xo(r)>180?r+(r>0?360:-360):r}else v=n,d=e;Na.point(n,e),t(n,e)}function u(){Na.lineStart()}function o(){i(v,d),Na.lineEnd(),xo(m)>Uo&&(f=-(h=180)),x[0]=f,x[1]=h,y=null}function a(n,t){return(t-=n)<0?t+360:t}function l(n,t){return n[0]-t[0]}function c(n,t){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}var f,s,h,p,g,v,d,y,m,M,x,b={point:n,lineStart:e,lineEnd:r,polygonStart:function(){b.point=i,b.lineStart=u,b.lineEnd=o,m=0,Na.polygonStart()},polygonEnd:function(){Na.polygonEnd(),b.point=n,b.lineStart=e,b.lineEnd=r,0>ka?(f=-(h=180),s=-(p=90)):m>Uo?p=90:-Uo>m&&(s=-90),x[0]=f,x[1]=h}};return function(n){p=h=-(f=s=1/0),M=[],ao.geo.stream(n,b);var t=M.length;if(t){M.sort(l);for(var e,r=1,i=M[0],u=[i];t>r;++r)e=M[r],c(e[0],i)||c(e[1],i)?(a(i[0],e[1])>a(i[0],i[1])&&(i[1]=e[1]),a(e[0],i[1])>a(i[0],i[1])&&(i[0]=e[0])):u.push(i=e);for(var o,e,g=-(1/0),t=u.length-1,r=0,i=u[t];t>=r;i=e,++r)e=u[r],(o=a(i[1],e[0]))>g&&(g=o,f=e[0],h=i[1])}return M=x=null,f===1/0||s===1/0?[[NaN,NaN],[NaN,NaN]]:[[f,s],[h,p]]}}(),ao.geo.centroid=function(n){Ea=Aa=Ca=za=La=qa=Ta=Ra=Da=Pa=Ua=0,ao.geo.stream(n,ja);var t=Da,e=Pa,r=Ua,i=t*t+e*e+r*r;return jo>i&&(t=qa,e=Ta,r=Ra,Uo>Aa&&(t=Ca,e=za,r=La),i=t*t+e*e+r*r,jo>i)?[NaN,NaN]:[Math.atan2(e,t)*Zo,tn(r/Math.sqrt(i))*Zo]};var Ea,Aa,Ca,za,La,qa,Ta,Ra,Da,Pa,Ua,ja={sphere:b,point:St,lineStart:Nt,lineEnd:Et,polygonStart:function(){ja.lineStart=At},polygonEnd:function(){ja.lineStart=Nt}},Fa=Rt(zt,jt,Ht,[-Fo,-Fo/2]),Ha=1e9;ao.geo.clipExtent=function(){var n,t,e,r,i,u,o={stream:function(n){return i&&(i.valid=!1),i=u(n),i.valid=!0,i},extent:function(a){return arguments.length?(u=Zt(n=+a[0][0],t=+a[0][1],e=+a[1][0],r=+a[1][1]),i&&(i.valid=!1,i=null),o):[[n,t],[e,r]]}};return o.extent([[0,0],[960,500]])},(ao.geo.conicEqualArea=function(){return Vt(Xt)}).raw=Xt,ao.geo.albers=function(){return ao.geo.conicEqualArea().rotate([96,0]).center([-.6,38.7]).parallels([29.5,45.5]).scale(1070)},ao.geo.albersUsa=function(){function n(n){var u=n[0],o=n[1];return t=null,e(u,o),t||(r(u,o),t)||i(u,o),t}var t,e,r,i,u=ao.geo.albers(),o=ao.geo.conicEqualArea().rotate([154,0]).center([-2,58.5]).parallels([55,65]),a=ao.geo.conicEqualArea().rotate([157,0]).center([-3,19.9]).parallels([8,18]),l={point:function(n,e){t=[n,e]}};return n.invert=function(n){var t=u.scale(),e=u.translate(),r=(n[0]-e[0])/t,i=(n[1]-e[1])/t;return(i>=.12&&.234>i&&r>=-.425&&-.214>r?o:i>=.166&&.234>i&&r>=-.214&&-.115>r?a:u).invert(n)},n.stream=function(n){var t=u.stream(n),e=o.stream(n),r=a.stream(n);return{point:function(n,i){t.point(n,i),e.point(n,i),r.point(n,i)},sphere:function(){t.sphere(),e.sphere(),r.sphere()},lineStart:function(){t.lineStart(),e.lineStart(),r.lineStart()},lineEnd:function(){t.lineEnd(),e.lineEnd(),r.lineEnd()},polygonStart:function(){t.polygonStart(),e.polygonStart(),r.polygonStart()},polygonEnd:function(){t.polygonEnd(),e.polygonEnd(),r.polygonEnd()}}},n.precision=function(t){return arguments.length?(u.precision(t),o.precision(t),a.precision(t),n):u.precision()},n.scale=function(t){return arguments.length?(u.scale(t),o.scale(.35*t),a.scale(t),n.translate(u.translate())):u.scale()},n.translate=function(t){if(!arguments.length)return u.translate();var c=u.scale(),f=+t[0],s=+t[1];return e=u.translate(t).clipExtent([[f-.455*c,s-.238*c],[f+.455*c,s+.238*c]]).stream(l).point,r=o.translate([f-.307*c,s+.201*c]).clipExtent([[f-.425*c+Uo,s+.12*c+Uo],[f-.214*c-Uo,s+.234*c-Uo]]).stream(l).point,i=a.translate([f-.205*c,s+.212*c]).clipExtent([[f-.214*c+Uo,s+.166*c+Uo],[f-.115*c-Uo,s+.234*c-Uo]]).stream(l).point,n},n.scale(1070)};var Oa,Ia,Ya,Za,Va,Xa,$a={point:b,lineStart:b,lineEnd:b,polygonStart:function(){Ia=0,$a.lineStart=$t},polygonEnd:function(){$a.lineStart=$a.lineEnd=$a.point=b,Oa+=xo(Ia/2)}},Ba={point:Bt,lineStart:b,lineEnd:b,polygonStart:b,polygonEnd:b},Wa={point:Gt,lineStart:Kt,lineEnd:Qt,polygonStart:function(){Wa.lineStart=ne},polygonEnd:function(){Wa.point=Gt,Wa.lineStart=Kt,Wa.lineEnd=Qt}};ao.geo.path=function(){function n(n){return n&&("function"==typeof a&&u.pointRadius(+a.apply(this,arguments)),o&&o.valid||(o=i(u)),ao.geo.stream(n,o)),u.result()}function t(){return o=null,n}var e,r,i,u,o,a=4.5;return n.area=function(n){return Oa=0,ao.geo.stream(n,i($a)),Oa},n.centroid=function(n){return Ca=za=La=qa=Ta=Ra=Da=Pa=Ua=0,ao.geo.stream(n,i(Wa)),Ua?[Da/Ua,Pa/Ua]:Ra?[qa/Ra,Ta/Ra]:La?[Ca/La,za/La]:[NaN,NaN]},n.bounds=function(n){return Va=Xa=-(Ya=Za=1/0),ao.geo.stream(n,i(Ba)),[[Ya,Za],[Va,Xa]]},n.projection=function(n){return arguments.length?(i=(e=n)?n.stream||re(n):m,t()):e},n.context=function(n){return arguments.length?(u=null==(r=n)?new Wt:new te(n),"function"!=typeof a&&u.pointRadius(a),t()):r},n.pointRadius=function(t){return arguments.length?(a="function"==typeof t?t:(u.pointRadius(+t),+t),n):a},n.projection(ao.geo.albersUsa()).context(null)},ao.geo.transform=function(n){return{stream:function(t){var e=new ie(t);for(var r in n)e[r]=n[r];return e}}},ie.prototype={point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}},ao.geo.projection=oe,ao.geo.projectionMutator=ae,(ao.geo.equirectangular=function(){return oe(ce)}).raw=ce.invert=ce,ao.geo.rotation=function(n){function t(t){return t=n(t[0]*Yo,t[1]*Yo),t[0]*=Zo,t[1]*=Zo,t}return n=se(n[0]%360*Yo,n[1]*Yo,n.length>2?n[2]*Yo:0),t.invert=function(t){return t=n.invert(t[0]*Yo,t[1]*Yo),t[0]*=Zo,t[1]*=Zo,t},t},fe.invert=ce,ao.geo.circle=function(){function n(){var n="function"==typeof r?r.apply(this,arguments):r,t=se(-n[0]*Yo,-n[1]*Yo,0).invert,i=[];return e(null,null,1,{point:function(n,e){i.push(n=t(n,e)),n[0]*=Zo,n[1]*=Zo}}),{type:"Polygon",coordinates:[i]}}var t,e,r=[0,0],i=6;return n.origin=function(t){return arguments.length?(r=t,n):r},n.angle=function(r){return arguments.length?(e=ve((t=+r)*Yo,i*Yo),n):t},n.precision=function(r){return arguments.length?(e=ve(t*Yo,(i=+r)*Yo),n):i},n.angle(90)},ao.geo.distance=function(n,t){var e,r=(t[0]-n[0])*Yo,i=n[1]*Yo,u=t[1]*Yo,o=Math.sin(r),a=Math.cos(r),l=Math.sin(i),c=Math.cos(i),f=Math.sin(u),s=Math.cos(u);return Math.atan2(Math.sqrt((e=s*o)*e+(e=c*f-l*s*a)*e),l*f+c*s*a)},ao.geo.graticule=function(){function n(){return{type:"MultiLineString",coordinates:t()}}function t(){return ao.range(Math.ceil(u/d)*d,i,d).map(h).concat(ao.range(Math.ceil(c/y)*y,l,y).map(p)).concat(ao.range(Math.ceil(r/g)*g,e,g).filter(function(n){return xo(n%d)>Uo}).map(f)).concat(ao.range(Math.ceil(a/v)*v,o,v).filter(function(n){return xo(n%y)>Uo}).map(s))}var e,r,i,u,o,a,l,c,f,s,h,p,g=10,v=g,d=90,y=360,m=2.5;return n.lines=function(){return t().map(function(n){return{type:"LineString",coordinates:n}})},n.outline=function(){return{type:"Polygon",coordinates:[h(u).concat(p(l).slice(1),h(i).reverse().slice(1),p(c).reverse().slice(1))]}},n.extent=function(t){return arguments.length?n.majorExtent(t).minorExtent(t):n.minorExtent()},n.majorExtent=function(t){return arguments.length?(u=+t[0][0],i=+t[1][0],c=+t[0][1],l=+t[1][1],u>i&&(t=u,u=i,i=t),c>l&&(t=c,c=l,l=t),n.precision(m)):[[u,c],[i,l]]},n.minorExtent=function(t){return arguments.length?(r=+t[0][0],e=+t[1][0],a=+t[0][1],o=+t[1][1],r>e&&(t=r,r=e,e=t),a>o&&(t=a,a=o,o=t),n.precision(m)):[[r,a],[e,o]]},n.step=function(t){return arguments.length?n.majorStep(t).minorStep(t):n.minorStep()},n.majorStep=function(t){return arguments.length?(d=+t[0],y=+t[1],n):[d,y]},n.minorStep=function(t){return arguments.length?(g=+t[0],v=+t[1],n):[g,v]},n.precision=function(t){return arguments.length?(m=+t,f=ye(a,o,90),s=me(r,e,m),h=ye(c,l,90),p=me(u,i,m),n):m},n.majorExtent([[-180,-90+Uo],[180,90-Uo]]).minorExtent([[-180,-80-Uo],[180,80+Uo]])},ao.geo.greatArc=function(){function n(){return{type:"LineString",coordinates:[t||r.apply(this,arguments),e||i.apply(this,arguments)]}}var t,e,r=Me,i=xe;return n.distance=function(){return ao.geo.distance(t||r.apply(this,arguments),e||i.apply(this,arguments))},n.source=function(e){return arguments.length?(r=e,t="function"==typeof e?null:e,n):r},n.target=function(t){return arguments.length?(i=t,e="function"==typeof t?null:t,n):i},n.precision=function(){return arguments.length?n:0},n},ao.geo.interpolate=function(n,t){return be(n[0]*Yo,n[1]*Yo,t[0]*Yo,t[1]*Yo)},ao.geo.length=function(n){return Ja=0,ao.geo.stream(n,Ga),Ja};var Ja,Ga={sphere:b,point:b,lineStart:_e,lineEnd:b,polygonStart:b,polygonEnd:b},Ka=we(function(n){return Math.sqrt(2/(1+n))},function(n){return 2*Math.asin(n/2)});(ao.geo.azimuthalEqualArea=function(){return oe(Ka)}).raw=Ka;var Qa=we(function(n){var t=Math.acos(n);return t&&t/Math.sin(t)},m);(ao.geo.azimuthalEquidistant=function(){return oe(Qa)}).raw=Qa,(ao.geo.conicConformal=function(){return Vt(Se)}).raw=Se,(ao.geo.conicEquidistant=function(){return Vt(ke)}).raw=ke;var nl=we(function(n){return 1/n},Math.atan);(ao.geo.gnomonic=function(){return oe(nl)}).raw=nl,Ne.invert=function(n,t){return[n,2*Math.atan(Math.exp(t))-Io]},(ao.geo.mercator=function(){return Ee(Ne)}).raw=Ne;var tl=we(function(){return 1},Math.asin);(ao.geo.orthographic=function(){return oe(tl)}).raw=tl;var el=we(function(n){return 1/(1+n)},function(n){return 2*Math.atan(n)});(ao.geo.stereographic=function(){return oe(el)}).raw=el,Ae.invert=function(n,t){return[-t,2*Math.atan(Math.exp(n))-Io]},(ao.geo.transverseMercator=function(){var n=Ee(Ae),t=n.center,e=n.rotate;return n.center=function(n){return n?t([-n[1],n[0]]):(n=t(),[n[1],-n[0]])},n.rotate=function(n){return n?e([n[0],n[1],n.length>2?n[2]+90:90]):(n=e(),[n[0],n[1],n[2]-90])},e([0,0,90])}).raw=Ae,ao.geom={},ao.geom.hull=function(n){function t(n){if(n.length<3)return[];var t,i=En(e),u=En(r),o=n.length,a=[],l=[];for(t=0;o>t;t++)a.push([+i.call(this,n[t],t),+u.call(this,n[t],t),t]);for(a.sort(qe),t=0;o>t;t++)l.push([a[t][0],-a[t][1]]);var c=Le(a),f=Le(l),s=f[0]===c[0],h=f[f.length-1]===c[c.length-1],p=[];for(t=c.length-1;t>=0;--t)p.push(n[a[c[t]][2]]);for(t=+s;t<f.length-h;++t)p.push(n[a[f[t]][2]]);return p}var e=Ce,r=ze;return arguments.length?t(n):(t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t)},ao.geom.polygon=function(n){return ko(n,rl),n};var rl=ao.geom.polygon.prototype=[];rl.area=function(){for(var n,t=-1,e=this.length,r=this[e-1],i=0;++t<e;)n=r,r=this[t],i+=n[1]*r[0]-n[0]*r[1];return.5*i},rl.centroid=function(n){var t,e,r=-1,i=this.length,u=0,o=0,a=this[i-1];for(arguments.length||(n=-1/(6*this.area()));++r<i;)t=a,a=this[r],e=t[0]*a[1]-a[0]*t[1],u+=(t[0]+a[0])*e,o+=(t[1]+a[1])*e;return[u*n,o*n]},rl.clip=function(n){for(var t,e,r,i,u,o,a=De(n),l=-1,c=this.length-De(this),f=this[c-1];++l<c;){for(t=n.slice(),n.length=0,i=this[l],u=t[(r=t.length-a)-1],e=-1;++e<r;)o=t[e],Te(o,f,i)?(Te(u,f,i)||n.push(Re(u,o,f,i)),n.push(o)):Te(u,f,i)&&n.push(Re(u,o,f,i)),u=o;a&&n.push(n[0]),f=i}return n};var il,ul,ol,al,ll,cl=[],fl=[];Ye.prototype.prepare=function(){for(var n,t=this.edges,e=t.length;e--;)n=t[e].edge,n.b&&n.a||t.splice(e,1);return t.sort(Ve),t.length},tr.prototype={start:function(){return this.edge.l===this.site?this.edge.a:this.edge.b},end:function(){return this.edge.l===this.site?this.edge.b:this.edge.a}},er.prototype={insert:function(n,t){var e,r,i;if(n){if(t.P=n,t.N=n.N,n.N&&(n.N.P=t),n.N=t,n.R){for(n=n.R;n.L;)n=n.L;n.L=t}else n.R=t;e=n}else this._?(n=or(this._),t.P=null,t.N=n,n.P=n.L=t,e=n):(t.P=t.N=null,this._=t,e=null);for(t.L=t.R=null,t.U=e,t.C=!0,n=t;e&&e.C;)r=e.U,e===r.L?(i=r.R,i&&i.C?(e.C=i.C=!1,r.C=!0,n=r):(n===e.R&&(ir(this,e),n=e,e=n.U),e.C=!1,r.C=!0,ur(this,r))):(i=r.L,i&&i.C?(e.C=i.C=!1,r.C=!0,n=r):(n===e.L&&(ur(this,e),n=e,e=n.U),e.C=!1,r.C=!0,ir(this,r))),e=n.U;this._.C=!1},remove:function(n){n.N&&(n.N.P=n.P),n.P&&(n.P.N=n.N),n.N=n.P=null;var t,e,r,i=n.U,u=n.L,o=n.R;if(e=u?o?or(o):u:o,i?i.L===n?i.L=e:i.R=e:this._=e,u&&o?(r=e.C,e.C=n.C,e.L=u,u.U=e,e!==o?(i=e.U,e.U=n.U,n=e.R,i.L=n,e.R=o,o.U=e):(e.U=i,i=e,n=e.R)):(r=n.C,n=e),n&&(n.U=i),!r){if(n&&n.C)return void(n.C=!1);do{if(n===this._)break;if(n===i.L){if(t=i.R,t.C&&(t.C=!1,i.C=!0,ir(this,i),t=i.R),t.L&&t.L.C||t.R&&t.R.C){t.R&&t.R.C||(t.L.C=!1,t.C=!0,ur(this,t),t=i.R),t.C=i.C,i.C=t.R.C=!1,ir(this,i),n=this._;break}}else if(t=i.L,t.C&&(t.C=!1,i.C=!0,ur(this,i),t=i.L),t.L&&t.L.C||t.R&&t.R.C){t.L&&t.L.C||(t.R.C=!1,t.C=!0,ir(this,t),t=i.L),t.C=i.C,i.C=t.L.C=!1,ur(this,i),n=this._;break}t.C=!0,n=i,i=i.U}while(!n.C);n&&(n.C=!1)}}},ao.geom.voronoi=function(n){function t(n){var t=new Array(n.length),r=a[0][0],i=a[0][1],u=a[1][0],o=a[1][1];return ar(e(n),a).cells.forEach(function(e,a){var l=e.edges,c=e.site,f=t[a]=l.length?l.map(function(n){var t=n.start();return[t.x,t.y]}):c.x>=r&&c.x<=u&&c.y>=i&&c.y<=o?[[r,o],[u,o],[u,i],[r,i]]:[];f.point=n[a]}),t}function e(n){return n.map(function(n,t){return{x:Math.round(u(n,t)/Uo)*Uo,y:Math.round(o(n,t)/Uo)*Uo,i:t}})}var r=Ce,i=ze,u=r,o=i,a=sl;return n?t(n):(t.links=function(n){return ar(e(n)).edges.filter(function(n){return n.l&&n.r}).map(function(t){return{source:n[t.l.i],target:n[t.r.i]}})},t.triangles=function(n){var t=[];return ar(e(n)).cells.forEach(function(e,r){for(var i,u,o=e.site,a=e.edges.sort(Ve),l=-1,c=a.length,f=a[c-1].edge,s=f.l===o?f.r:f.l;++l<c;)i=f,u=s,f=a[l].edge,s=f.l===o?f.r:f.l,r<u.i&&r<s.i&&cr(o,u,s)<0&&t.push([n[r],n[u.i],n[s.i]])}),t},t.x=function(n){return arguments.length?(u=En(r=n),t):r},t.y=function(n){return arguments.length?(o=En(i=n),t):i},t.clipExtent=function(n){return arguments.length?(a=null==n?sl:n,t):a===sl?null:a},t.size=function(n){return arguments.length?t.clipExtent(n&&[[0,0],n]):a===sl?null:a&&a[1]},t)};var sl=[[-1e6,-1e6],[1e6,1e6]];ao.geom.delaunay=function(n){return ao.geom.voronoi().triangles(n)},ao.geom.quadtree=function(n,t,e,r,i){function u(n){function u(n,t,e,r,i,u,o,a){if(!isNaN(e)&&!isNaN(r))if(n.leaf){var l=n.x,f=n.y;if(null!=l)if(xo(l-e)+xo(f-r)<.01)c(n,t,e,r,i,u,o,a);else{var s=n.point;n.x=n.y=n.point=null,c(n,s,l,f,i,u,o,a),c(n,t,e,r,i,u,o,a)}else n.x=e,n.y=r,n.point=t}else c(n,t,e,r,i,u,o,a)}function c(n,t,e,r,i,o,a,l){var c=.5*(i+a),f=.5*(o+l),s=e>=c,h=r>=f,p=h<<1|s;n.leaf=!1,n=n.nodes[p]||(n.nodes[p]=hr()),s?i=c:a=c,h?o=f:l=f,u(n,t,e,r,i,o,a,l)}var f,s,h,p,g,v,d,y,m,M=En(a),x=En(l);if(null!=t)v=t,d=e,y=r,m=i;else if(y=m=-(v=d=1/0),s=[],h=[],g=n.length,o)for(p=0;g>p;++p)f=n[p],f.x<v&&(v=f.x),f.y<d&&(d=f.y),f.x>y&&(y=f.x),f.y>m&&(m=f.y),s.push(f.x),h.push(f.y);else for(p=0;g>p;++p){var b=+M(f=n[p],p),_=+x(f,p);v>b&&(v=b),d>_&&(d=_),b>y&&(y=b),_>m&&(m=_),s.push(b),h.push(_)}var w=y-v,S=m-d;w>S?m=d+w:y=v+S;var k=hr();if(k.add=function(n){u(k,n,+M(n,++p),+x(n,p),v,d,y,m)},k.visit=function(n){pr(n,k,v,d,y,m)},k.find=function(n){return gr(k,n[0],n[1],v,d,y,m)},p=-1,null==t){for(;++p<g;)u(k,n[p],s[p],h[p],v,d,y,m);--p}else n.forEach(k.add);return s=h=n=f=null,k}var o,a=Ce,l=ze;return(o=arguments.length)?(a=fr,l=sr,3===o&&(i=e,r=t,e=t=0),u(n)):(u.x=function(n){return arguments.length?(a=n,u):a},u.y=function(n){return arguments.length?(l=n,u):l},u.extent=function(n){return arguments.length?(null==n?t=e=r=i=null:(t=+n[0][0],e=+n[0][1],r=+n[1][0],i=+n[1][1]),u):null==t?null:[[t,e],[r,i]]},u.size=function(n){return arguments.length?(null==n?t=e=r=i=null:(t=e=0,r=+n[0],i=+n[1]),u):null==t?null:[r-t,i-e]},u)},ao.interpolateRgb=vr,ao.interpolateObject=dr,ao.interpolateNumber=yr,ao.interpolateString=mr;var hl=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,pl=new RegExp(hl.source,"g");ao.interpolate=Mr,ao.interpolators=[function(n,t){var e=typeof t;return("string"===e?ua.has(t.toLowerCase())||/^(#|rgb\(|hsl\()/i.test(t)?vr:mr:t instanceof an?vr:Array.isArray(t)?xr:"object"===e&&isNaN(t)?dr:yr)(n,t)}],ao.interpolateArray=xr;var gl=function(){return m},vl=ao.map({linear:gl,poly:Er,quad:function(){return Sr},cubic:function(){return kr},sin:function(){return Ar},exp:function(){return Cr},circle:function(){return zr},elastic:Lr,back:qr,bounce:function(){return Tr}}),dl=ao.map({"in":m,out:_r,"in-out":wr,"out-in":function(n){return wr(_r(n))}});ao.ease=function(n){var t=n.indexOf("-"),e=t>=0?n.slice(0,t):n,r=t>=0?n.slice(t+1):"in";return e=vl.get(e)||gl,r=dl.get(r)||m,br(r(e.apply(null,lo.call(arguments,1))))},ao.interpolateHcl=Rr,ao.interpolateHsl=Dr,ao.interpolateLab=Pr,ao.interpolateRound=Ur,ao.transform=function(n){var t=fo.createElementNS(ao.ns.prefix.svg,"g");return(ao.transform=function(n){if(null!=n){t.setAttribute("transform",n);var e=t.transform.baseVal.consolidate()}return new jr(e?e.matrix:yl)})(n)},jr.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"};var yl={a:1,b:0,c:0,d:1,e:0,f:0};ao.interpolateTransform=$r,ao.layout={},ao.layout.bundle=function(){return function(n){for(var t=[],e=-1,r=n.length;++e<r;)t.push(Jr(n[e]));return t}},ao.layout.chord=function(){function n(){var n,c,s,h,p,g={},v=[],d=ao.range(u),y=[];for(e=[],r=[],n=0,h=-1;++h<u;){for(c=0,p=-1;++p<u;)c+=i[h][p];v.push(c),y.push(ao.range(u)),n+=c}for(o&&d.sort(function(n,t){return o(v[n],v[t])}),a&&y.forEach(function(n,t){n.sort(function(n,e){return a(i[t][n],i[t][e])})}),n=(Ho-f*u)/n,c=0,h=-1;++h<u;){for(s=c,p=-1;++p<u;){var m=d[h],M=y[m][p],x=i[m][M],b=c,_=c+=x*n;g[m+"-"+M]={index:m,subindex:M,startAngle:b,endAngle:_,value:x}}r[m]={index:m,startAngle:s,endAngle:c,value:v[m]},c+=f}for(h=-1;++h<u;)for(p=h-1;++p<u;){var w=g[h+"-"+p],S=g[p+"-"+h];(w.value||S.value)&&e.push(w.value<S.value?{source:S,target:w}:{source:w,target:S})}l&&t()}function t(){e.sort(function(n,t){return l((n.source.value+n.target.value)/2,(t.source.value+t.target.value)/2)})}var e,r,i,u,o,a,l,c={},f=0;return c.matrix=function(n){return arguments.length?(u=(i=n)&&i.length,e=r=null,c):i},c.padding=function(n){return arguments.length?(f=n,e=r=null,c):f},c.sortGroups=function(n){return arguments.length?(o=n,e=r=null,c):o},c.sortSubgroups=function(n){return arguments.length?(a=n,e=null,c):a},c.sortChords=function(n){return arguments.length?(l=n,e&&t(),c):l},c.chords=function(){return e||n(),e},c.groups=function(){return r||n(),r},c},ao.layout.force=function(){function n(n){return function(t,e,r,i){if(t.point!==n){var u=t.cx-n.x,o=t.cy-n.y,a=i-e,l=u*u+o*o;if(l>a*a/y){if(v>l){var c=t.charge/l;n.px-=u*c,n.py-=o*c}return!0}if(t.point&&l&&v>l){var c=t.pointCharge/l;n.px-=u*c,n.py-=o*c}}return!t.charge}}function t(n){n.px=ao.event.x,n.py=ao.event.y,l.resume()}var e,r,i,u,o,a,l={},c=ao.dispatch("start","tick","end"),f=[1,1],s=.9,h=ml,p=Ml,g=-30,v=xl,d=.1,y=.64,M=[],x=[];return l.tick=function(){if((i*=.99)<.005)return e=null,c.end({type:"end",alpha:i=0}),!0;var t,r,l,h,p,v,y,m,b,_=M.length,w=x.length;for(r=0;w>r;++r)l=x[r],h=l.source,p=l.target,m=p.x-h.x,b=p.y-h.y,(v=m*m+b*b)&&(v=i*o[r]*((v=Math.sqrt(v))-u[r])/v,m*=v,b*=v,p.x-=m*(y=h.weight+p.weight?h.weight/(h.weight+p.weight):.5),p.y-=b*y,h.x+=m*(y=1-y),h.y+=b*y);if((y=i*d)&&(m=f[0]/2,b=f[1]/2,r=-1,y))for(;++r<_;)l=M[r],l.x+=(m-l.x)*y,l.y+=(b-l.y)*y;if(g)for(ri(t=ao.geom.quadtree(M),i,a),r=-1;++r<_;)(l=M[r]).fixed||t.visit(n(l));for(r=-1;++r<_;)l=M[r],l.fixed?(l.x=l.px,l.y=l.py):(l.x-=(l.px-(l.px=l.x))*s,l.y-=(l.py-(l.py=l.y))*s);c.tick({type:"tick",alpha:i})},l.nodes=function(n){return arguments.length?(M=n,l):M},l.links=function(n){return arguments.length?(x=n,l):x},l.size=function(n){return arguments.length?(f=n,l):f},l.linkDistance=function(n){return arguments.length?(h="function"==typeof n?n:+n,l):h},l.distance=l.linkDistance,l.linkStrength=function(n){return arguments.length?(p="function"==typeof n?n:+n,l):p},l.friction=function(n){return arguments.length?(s=+n,l):s},l.charge=function(n){return arguments.length?(g="function"==typeof n?n:+n,l):g},l.chargeDistance=function(n){return arguments.length?(v=n*n,l):Math.sqrt(v)},l.gravity=function(n){return arguments.length?(d=+n,l):d},l.theta=function(n){return arguments.length?(y=n*n,l):Math.sqrt(y)},l.alpha=function(n){return arguments.length?(n=+n,i?n>0?i=n:(e.c=null,e.t=NaN,e=null,c.end({type:"end",alpha:i=0})):n>0&&(c.start({type:"start",alpha:i=n}),e=qn(l.tick)),l):i},l.start=function(){function n(n,r){if(!e){for(e=new Array(i),l=0;i>l;++l)e[l]=[];for(l=0;c>l;++l){var u=x[l];e[u.source.index].push(u.target),e[u.target.index].push(u.source)}}for(var o,a=e[t],l=-1,f=a.length;++l<f;)if(!isNaN(o=a[l][n]))return o;return Math.random()*r}var t,e,r,i=M.length,c=x.length,s=f[0],v=f[1];for(t=0;i>t;++t)(r=M[t]).index=t,r.weight=0;for(t=0;c>t;++t)r=x[t],"number"==typeof r.source&&(r.source=M[r.source]),"number"==typeof r.target&&(r.target=M[r.target]),++r.source.weight,++r.target.weight;for(t=0;i>t;++t)r=M[t],isNaN(r.x)&&(r.x=n("x",s)),isNaN(r.y)&&(r.y=n("y",v)),isNaN(r.px)&&(r.px=r.x),isNaN(r.py)&&(r.py=r.y);if(u=[],"function"==typeof h)for(t=0;c>t;++t)u[t]=+h.call(this,x[t],t);else for(t=0;c>t;++t)u[t]=h;if(o=[],"function"==typeof p)for(t=0;c>t;++t)o[t]=+p.call(this,x[t],t);else for(t=0;c>t;++t)o[t]=p;if(a=[],"function"==typeof g)for(t=0;i>t;++t)a[t]=+g.call(this,M[t],t);else for(t=0;i>t;++t)a[t]=g;return l.resume()},l.resume=function(){return l.alpha(.1)},l.stop=function(){return l.alpha(0)},l.drag=function(){return r||(r=ao.behavior.drag().origin(m).on("dragstart.force",Qr).on("drag.force",t).on("dragend.force",ni)),arguments.length?void this.on("mouseover.force",ti).on("mouseout.force",ei).call(r):r},ao.rebind(l,c,"on")};var ml=20,Ml=1,xl=1/0;ao.layout.hierarchy=function(){function n(i){var u,o=[i],a=[];for(i.depth=0;null!=(u=o.pop());)if(a.push(u),(c=e.call(n,u,u.depth))&&(l=c.length)){for(var l,c,f;--l>=0;)o.push(f=c[l]),f.parent=u,f.depth=u.depth+1;r&&(u.value=0),u.children=c}else r&&(u.value=+r.call(n,u,u.depth)||0),delete u.children;return oi(i,function(n){var e,i;t&&(e=n.children)&&e.sort(t),r&&(i=n.parent)&&(i.value+=n.value)}),a}var t=ci,e=ai,r=li;return n.sort=function(e){return arguments.length?(t=e,n):t},n.children=function(t){return arguments.length?(e=t,n):e},n.value=function(t){return arguments.length?(r=t,n):r},n.revalue=function(t){return r&&(ui(t,function(n){n.children&&(n.value=0)}),oi(t,function(t){var e;t.children||(t.value=+r.call(n,t,t.depth)||0),(e=t.parent)&&(e.value+=t.value)})),t},n},ao.layout.partition=function(){function n(t,e,r,i){var u=t.children;if(t.x=e,t.y=t.depth*i,t.dx=r,t.dy=i,u&&(o=u.length)){var o,a,l,c=-1;for(r=t.value?r/t.value:0;++c<o;)n(a=u[c],e,l=a.value*r,i),e+=l}}function t(n){var e=n.children,r=0;if(e&&(i=e.length))for(var i,u=-1;++u<i;)r=Math.max(r,t(e[u]));return 1+r}function e(e,u){var o=r.call(this,e,u);return n(o[0],0,i[0],i[1]/t(o[0])),o}var r=ao.layout.hierarchy(),i=[1,1];return e.size=function(n){return arguments.length?(i=n,e):i},ii(e,r)},ao.layout.pie=function(){function n(o){var a,l=o.length,c=o.map(function(e,r){return+t.call(n,e,r)}),f=+("function"==typeof r?r.apply(this,arguments):r),s=("function"==typeof i?i.apply(this,arguments):i)-f,h=Math.min(Math.abs(s)/l,+("function"==typeof u?u.apply(this,arguments):u)),p=h*(0>s?-1:1),g=ao.sum(c),v=g?(s-l*p)/g:0,d=ao.range(l),y=[];return null!=e&&d.sort(e===bl?function(n,t){return c[t]-c[n]}:function(n,t){return e(o[n],o[t])}),d.forEach(function(n){y[n]={data:o[n],value:a=c[n],startAngle:f,endAngle:f+=a*v+p,padAngle:h}}),y}var t=Number,e=bl,r=0,i=Ho,u=0;return n.value=function(e){return arguments.length?(t=e,n):t},n.sort=function(t){return arguments.length?(e=t,n):e},n.startAngle=function(t){return arguments.length?(r=t,n):r},n.endAngle=function(t){return arguments.length?(i=t,n):i},n.padAngle=function(t){return arguments.length?(u=t,n):u},n};var bl={};ao.layout.stack=function(){function n(a,l){if(!(h=a.length))return a;var c=a.map(function(e,r){return t.call(n,e,r)}),f=c.map(function(t){return t.map(function(t,e){return[u.call(n,t,e),o.call(n,t,e)]})}),s=e.call(n,f,l);c=ao.permute(c,s),f=ao.permute(f,s);var h,p,g,v,d=r.call(n,f,l),y=c[0].length;for(g=0;y>g;++g)for(i.call(n,c[0][g],v=d[g],f[0][g][1]),p=1;h>p;++p)i.call(n,c[p][g],v+=f[p-1][g][1],f[p][g][1]);return a}var t=m,e=gi,r=vi,i=pi,u=si,o=hi;return n.values=function(e){return arguments.length?(t=e,n):t},n.order=function(t){return arguments.length?(e="function"==typeof t?t:_l.get(t)||gi,n):e},n.offset=function(t){return arguments.length?(r="function"==typeof t?t:wl.get(t)||vi,n):r},n.x=function(t){return arguments.length?(u=t,n):u},n.y=function(t){return arguments.length?(o=t,n):o},n.out=function(t){return arguments.length?(i=t,n):i},n};var _l=ao.map({"inside-out":function(n){var t,e,r=n.length,i=n.map(di),u=n.map(yi),o=ao.range(r).sort(function(n,t){return i[n]-i[t]}),a=0,l=0,c=[],f=[];for(t=0;r>t;++t)e=o[t],l>a?(a+=u[e],c.push(e)):(l+=u[e],f.push(e));return f.reverse().concat(c)},reverse:function(n){return ao.range(n.length).reverse()},"default":gi}),wl=ao.map({silhouette:function(n){var t,e,r,i=n.length,u=n[0].length,o=[],a=0,l=[];for(e=0;u>e;++e){for(t=0,r=0;i>t;t++)r+=n[t][e][1];r>a&&(a=r),o.push(r)}for(e=0;u>e;++e)l[e]=(a-o[e])/2;return l},wiggle:function(n){var t,e,r,i,u,o,a,l,c,f=n.length,s=n[0],h=s.length,p=[];for(p[0]=l=c=0,e=1;h>e;++e){for(t=0,i=0;f>t;++t)i+=n[t][e][1];for(t=0,u=0,a=s[e][0]-s[e-1][0];f>t;++t){for(r=0,o=(n[t][e][1]-n[t][e-1][1])/(2*a);t>r;++r)o+=(n[r][e][1]-n[r][e-1][1])/a;u+=o*n[t][e][1]}p[e]=l-=i?u/i*a:0,c>l&&(c=l)}for(e=0;h>e;++e)p[e]-=c;return p},expand:function(n){var t,e,r,i=n.length,u=n[0].length,o=1/i,a=[];for(e=0;u>e;++e){for(t=0,r=0;i>t;t++)r+=n[t][e][1];if(r)for(t=0;i>t;t++)n[t][e][1]/=r;else for(t=0;i>t;t++)n[t][e][1]=o}for(e=0;u>e;++e)a[e]=0;return a},zero:vi});ao.layout.histogram=function(){function n(n,u){for(var o,a,l=[],c=n.map(e,this),f=r.call(this,c,u),s=i.call(this,f,c,u),u=-1,h=c.length,p=s.length-1,g=t?1:1/h;++u<p;)o=l[u]=[],o.dx=s[u+1]-(o.x=s[u]),o.y=0;if(p>0)for(u=-1;++u<h;)a=c[u],a>=f[0]&&a<=f[1]&&(o=l[ao.bisect(s,a,1,p)-1],o.y+=g,o.push(n[u]));return l}var t=!0,e=Number,r=bi,i=Mi;return n.value=function(t){return arguments.length?(e=t,n):e},n.range=function(t){return arguments.length?(r=En(t),n):r},n.bins=function(t){return arguments.length?(i="number"==typeof t?function(n){return xi(n,t)}:En(t),n):i},n.frequency=function(e){return arguments.length?(t=!!e,n):t},n},ao.layout.pack=function(){function n(n,u){var o=e.call(this,n,u),a=o[0],l=i[0],c=i[1],f=null==t?Math.sqrt:"function"==typeof t?t:function(){return t};if(a.x=a.y=0,oi(a,function(n){n.r=+f(n.value)}),oi(a,Ni),r){var s=r*(t?1:Math.max(2*a.r/l,2*a.r/c))/2;oi(a,function(n){n.r+=s}),oi(a,Ni),oi(a,function(n){n.r-=s})}return Ci(a,l/2,c/2,t?1:1/Math.max(2*a.r/l,2*a.r/c)),o}var t,e=ao.layout.hierarchy().sort(_i),r=0,i=[1,1];return n.size=function(t){return arguments.length?(i=t,n):i},n.radius=function(e){return arguments.length?(t=null==e||"function"==typeof e?e:+e,n):t},n.padding=function(t){return arguments.length?(r=+t,n):r},ii(n,e)},ao.layout.tree=function(){function n(n,i){var f=o.call(this,n,i),s=f[0],h=t(s);if(oi(h,e),h.parent.m=-h.z,ui(h,r),c)ui(s,u);else{var p=s,g=s,v=s;ui(s,function(n){n.x<p.x&&(p=n),n.x>g.x&&(g=n),n.depth>v.depth&&(v=n)});var d=a(p,g)/2-p.x,y=l[0]/(g.x+a(g,p)/2+d),m=l[1]/(v.depth||1);ui(s,function(n){n.x=(n.x+d)*y,n.y=n.depth*m})}return f}function t(n){for(var t,e={A:null,children:[n]},r=[e];null!=(t=r.pop());)for(var i,u=t.children,o=0,a=u.length;a>o;++o)r.push((u[o]=i={_:u[o],parent:t,children:(i=u[o].children)&&i.slice()||[],A:null,a:null,z:0,m:0,c:0,s:0,t:null,i:o}).a=i);return e.children[0]}function e(n){var t=n.children,e=n.parent.children,r=n.i?e[n.i-1]:null;if(t.length){Di(n);var u=(t[0].z+t[t.length-1].z)/2;r?(n.z=r.z+a(n._,r._),n.m=n.z-u):n.z=u}else r&&(n.z=r.z+a(n._,r._));n.parent.A=i(n,r,n.parent.A||e[0])}function r(n){n._.x=n.z+n.parent.m,n.m+=n.parent.m}function i(n,t,e){if(t){for(var r,i=n,u=n,o=t,l=i.parent.children[0],c=i.m,f=u.m,s=o.m,h=l.m;o=Ti(o),i=qi(i),o&&i;)l=qi(l),u=Ti(u),u.a=n,r=o.z+s-i.z-c+a(o._,i._),r>0&&(Ri(Pi(o,n,e),n,r),c+=r,f+=r),s+=o.m,c+=i.m,h+=l.m,f+=u.m;o&&!Ti(u)&&(u.t=o,u.m+=s-f),i&&!qi(l)&&(l.t=i,l.m+=c-h,e=n)}return e}function u(n){n.x*=l[0],n.y=n.depth*l[1]}var o=ao.layout.hierarchy().sort(null).value(null),a=Li,l=[1,1],c=null;return n.separation=function(t){return arguments.length?(a=t,n):a},n.size=function(t){return arguments.length?(c=null==(l=t)?u:null,n):c?null:l},n.nodeSize=function(t){return arguments.length?(c=null==(l=t)?null:u,n):c?l:null},ii(n,o)},ao.layout.cluster=function(){function n(n,u){var o,a=t.call(this,n,u),l=a[0],c=0;oi(l,function(n){var t=n.children;t&&t.length?(n.x=ji(t),n.y=Ui(t)):(n.x=o?c+=e(n,o):0,n.y=0,o=n)});var f=Fi(l),s=Hi(l),h=f.x-e(f,s)/2,p=s.x+e(s,f)/2;return oi(l,i?function(n){n.x=(n.x-l.x)*r[0],n.y=(l.y-n.y)*r[1]}:function(n){n.x=(n.x-h)/(p-h)*r[0],n.y=(1-(l.y?n.y/l.y:1))*r[1]}),a}var t=ao.layout.hierarchy().sort(null).value(null),e=Li,r=[1,1],i=!1;return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(i=null==(r=t),n):i?null:r},n.nodeSize=function(t){return arguments.length?(i=null!=(r=t),n):i?r:null},ii(n,t)},ao.layout.treemap=function(){function n(n,t){for(var e,r,i=-1,u=n.length;++i<u;)r=(e=n[i]).value*(0>t?0:t),e.area=isNaN(r)||0>=r?0:r}function t(e){var u=e.children;if(u&&u.length){var o,a,l,c=s(e),f=[],h=u.slice(),g=1/0,v="slice"===p?c.dx:"dice"===p?c.dy:"slice-dice"===p?1&e.depth?c.dy:c.dx:Math.min(c.dx,c.dy);for(n(h,c.dx*c.dy/e.value),f.area=0;(l=h.length)>0;)f.push(o=h[l-1]),f.area+=o.area,"squarify"!==p||(a=r(f,v))<=g?(h.pop(),g=a):(f.area-=f.pop().area,i(f,v,c,!1),v=Math.min(c.dx,c.dy),f.length=f.area=0,g=1/0);f.length&&(i(f,v,c,!0),f.length=f.area=0),u.forEach(t)}}function e(t){var r=t.children;if(r&&r.length){var u,o=s(t),a=r.slice(),l=[];for(n(a,o.dx*o.dy/t.value),l.area=0;u=a.pop();)l.push(u),l.area+=u.area,null!=u.z&&(i(l,u.z?o.dx:o.dy,o,!a.length),l.length=l.area=0);r.forEach(e)}}function r(n,t){for(var e,r=n.area,i=0,u=1/0,o=-1,a=n.length;++o<a;)(e=n[o].area)&&(u>e&&(u=e),e>i&&(i=e));return r*=r,t*=t,r?Math.max(t*i*g/r,r/(t*u*g)):1/0}function i(n,t,e,r){var i,u=-1,o=n.length,a=e.x,c=e.y,f=t?l(n.area/t):0;
if(t==e.dx){for((r||f>e.dy)&&(f=e.dy);++u<o;)i=n[u],i.x=a,i.y=c,i.dy=f,a+=i.dx=Math.min(e.x+e.dx-a,f?l(i.area/f):0);i.z=!0,i.dx+=e.x+e.dx-a,e.y+=f,e.dy-=f}else{for((r||f>e.dx)&&(f=e.dx);++u<o;)i=n[u],i.x=a,i.y=c,i.dx=f,c+=i.dy=Math.min(e.y+e.dy-c,f?l(i.area/f):0);i.z=!1,i.dy+=e.y+e.dy-c,e.x+=f,e.dx-=f}}function u(r){var i=o||a(r),u=i[0];return u.x=u.y=0,u.value?(u.dx=c[0],u.dy=c[1]):u.dx=u.dy=0,o&&a.revalue(u),n([u],u.dx*u.dy/u.value),(o?e:t)(u),h&&(o=i),i}var o,a=ao.layout.hierarchy(),l=Math.round,c=[1,1],f=null,s=Oi,h=!1,p="squarify",g=.5*(1+Math.sqrt(5));return u.size=function(n){return arguments.length?(c=n,u):c},u.padding=function(n){function t(t){var e=n.call(u,t,t.depth);return null==e?Oi(t):Ii(t,"number"==typeof e?[e,e,e,e]:e)}function e(t){return Ii(t,n)}if(!arguments.length)return f;var r;return s=null==(f=n)?Oi:"function"==(r=typeof n)?t:"number"===r?(n=[n,n,n,n],e):e,u},u.round=function(n){return arguments.length?(l=n?Math.round:Number,u):l!=Number},u.sticky=function(n){return arguments.length?(h=n,o=null,u):h},u.ratio=function(n){return arguments.length?(g=n,u):g},u.mode=function(n){return arguments.length?(p=n+"",u):p},ii(u,a)},ao.random={normal:function(n,t){var e=arguments.length;return 2>e&&(t=1),1>e&&(n=0),function(){var e,r,i;do e=2*Math.random()-1,r=2*Math.random()-1,i=e*e+r*r;while(!i||i>1);return n+t*e*Math.sqrt(-2*Math.log(i)/i)}},logNormal:function(){var n=ao.random.normal.apply(ao,arguments);return function(){return Math.exp(n())}},bates:function(n){var t=ao.random.irwinHall(n);return function(){return t()/n}},irwinHall:function(n){return function(){for(var t=0,e=0;n>e;e++)t+=Math.random();return t}}},ao.scale={};var Sl={floor:m,ceil:m};ao.scale.linear=function(){return Wi([0,1],[0,1],Mr,!1)};var kl={s:1,g:1,p:1,r:1,e:1};ao.scale.log=function(){return ru(ao.scale.linear().domain([0,1]),10,!0,[1,10])};var Nl=ao.format(".0e"),El={floor:function(n){return-Math.ceil(-n)},ceil:function(n){return-Math.floor(-n)}};ao.scale.pow=function(){return iu(ao.scale.linear(),1,[0,1])},ao.scale.sqrt=function(){return ao.scale.pow().exponent(.5)},ao.scale.ordinal=function(){return ou([],{t:"range",a:[[]]})},ao.scale.category10=function(){return ao.scale.ordinal().range(Al)},ao.scale.category20=function(){return ao.scale.ordinal().range(Cl)},ao.scale.category20b=function(){return ao.scale.ordinal().range(zl)},ao.scale.category20c=function(){return ao.scale.ordinal().range(Ll)};var Al=[2062260,16744206,2924588,14034728,9725885,9197131,14907330,8355711,12369186,1556175].map(xn),Cl=[2062260,11454440,16744206,16759672,2924588,10018698,14034728,16750742,9725885,12955861,9197131,12885140,14907330,16234194,8355711,13092807,12369186,14408589,1556175,10410725].map(xn),zl=[3750777,5395619,7040719,10264286,6519097,9216594,11915115,13556636,9202993,12426809,15186514,15190932,8666169,11356490,14049643,15177372,8077683,10834324,13528509,14589654].map(xn),Ll=[3244733,7057110,10406625,13032431,15095053,16616764,16625259,16634018,3253076,7652470,10607003,13101504,7695281,10394312,12369372,14342891,6513507,9868950,12434877,14277081].map(xn);ao.scale.quantile=function(){return au([],[])},ao.scale.quantize=function(){return lu(0,1,[0,1])},ao.scale.threshold=function(){return cu([.5],[0,1])},ao.scale.identity=function(){return fu([0,1])},ao.svg={},ao.svg.arc=function(){function n(){var n=Math.max(0,+e.apply(this,arguments)),c=Math.max(0,+r.apply(this,arguments)),f=o.apply(this,arguments)-Io,s=a.apply(this,arguments)-Io,h=Math.abs(s-f),p=f>s?0:1;if(n>c&&(g=c,c=n,n=g),h>=Oo)return t(c,p)+(n?t(n,1-p):"")+"Z";var g,v,d,y,m,M,x,b,_,w,S,k,N=0,E=0,A=[];if((y=(+l.apply(this,arguments)||0)/2)&&(d=u===ql?Math.sqrt(n*n+c*c):+u.apply(this,arguments),p||(E*=-1),c&&(E=tn(d/c*Math.sin(y))),n&&(N=tn(d/n*Math.sin(y)))),c){m=c*Math.cos(f+E),M=c*Math.sin(f+E),x=c*Math.cos(s-E),b=c*Math.sin(s-E);var C=Math.abs(s-f-2*E)<=Fo?0:1;if(E&&yu(m,M,x,b)===p^C){var z=(f+s)/2;m=c*Math.cos(z),M=c*Math.sin(z),x=b=null}}else m=M=0;if(n){_=n*Math.cos(s-N),w=n*Math.sin(s-N),S=n*Math.cos(f+N),k=n*Math.sin(f+N);var L=Math.abs(f-s+2*N)<=Fo?0:1;if(N&&yu(_,w,S,k)===1-p^L){var q=(f+s)/2;_=n*Math.cos(q),w=n*Math.sin(q),S=k=null}}else _=w=0;if(h>Uo&&(g=Math.min(Math.abs(c-n)/2,+i.apply(this,arguments)))>.001){v=c>n^p?0:1;var T=g,R=g;if(Fo>h){var D=null==S?[_,w]:null==x?[m,M]:Re([m,M],[S,k],[x,b],[_,w]),P=m-D[0],U=M-D[1],j=x-D[0],F=b-D[1],H=1/Math.sin(Math.acos((P*j+U*F)/(Math.sqrt(P*P+U*U)*Math.sqrt(j*j+F*F)))/2),O=Math.sqrt(D[0]*D[0]+D[1]*D[1]);R=Math.min(g,(n-O)/(H-1)),T=Math.min(g,(c-O)/(H+1))}if(null!=x){var I=mu(null==S?[_,w]:[S,k],[m,M],c,T,p),Y=mu([x,b],[_,w],c,T,p);g===T?A.push("M",I[0],"A",T,",",T," 0 0,",v," ",I[1],"A",c,",",c," 0 ",1-p^yu(I[1][0],I[1][1],Y[1][0],Y[1][1]),",",p," ",Y[1],"A",T,",",T," 0 0,",v," ",Y[0]):A.push("M",I[0],"A",T,",",T," 0 1,",v," ",Y[0])}else A.push("M",m,",",M);if(null!=S){var Z=mu([m,M],[S,k],n,-R,p),V=mu([_,w],null==x?[m,M]:[x,b],n,-R,p);g===R?A.push("L",V[0],"A",R,",",R," 0 0,",v," ",V[1],"A",n,",",n," 0 ",p^yu(V[1][0],V[1][1],Z[1][0],Z[1][1]),",",1-p," ",Z[1],"A",R,",",R," 0 0,",v," ",Z[0]):A.push("L",V[0],"A",R,",",R," 0 0,",v," ",Z[0])}else A.push("L",_,",",w)}else A.push("M",m,",",M),null!=x&&A.push("A",c,",",c," 0 ",C,",",p," ",x,",",b),A.push("L",_,",",w),null!=S&&A.push("A",n,",",n," 0 ",L,",",1-p," ",S,",",k);return A.push("Z"),A.join("")}function t(n,t){return"M0,"+n+"A"+n+","+n+" 0 1,"+t+" 0,"+-n+"A"+n+","+n+" 0 1,"+t+" 0,"+n}var e=hu,r=pu,i=su,u=ql,o=gu,a=vu,l=du;return n.innerRadius=function(t){return arguments.length?(e=En(t),n):e},n.outerRadius=function(t){return arguments.length?(r=En(t),n):r},n.cornerRadius=function(t){return arguments.length?(i=En(t),n):i},n.padRadius=function(t){return arguments.length?(u=t==ql?ql:En(t),n):u},n.startAngle=function(t){return arguments.length?(o=En(t),n):o},n.endAngle=function(t){return arguments.length?(a=En(t),n):a},n.padAngle=function(t){return arguments.length?(l=En(t),n):l},n.centroid=function(){var n=(+e.apply(this,arguments)+ +r.apply(this,arguments))/2,t=(+o.apply(this,arguments)+ +a.apply(this,arguments))/2-Io;return[Math.cos(t)*n,Math.sin(t)*n]},n};var ql="auto";ao.svg.line=function(){return Mu(m)};var Tl=ao.map({linear:xu,"linear-closed":bu,step:_u,"step-before":wu,"step-after":Su,basis:zu,"basis-open":Lu,"basis-closed":qu,bundle:Tu,cardinal:Eu,"cardinal-open":ku,"cardinal-closed":Nu,monotone:Fu});Tl.forEach(function(n,t){t.key=n,t.closed=/-closed$/.test(n)});var Rl=[0,2/3,1/3,0],Dl=[0,1/3,2/3,0],Pl=[0,1/6,2/3,1/6];ao.svg.line.radial=function(){var n=Mu(Hu);return n.radius=n.x,delete n.x,n.angle=n.y,delete n.y,n},wu.reverse=Su,Su.reverse=wu,ao.svg.area=function(){return Ou(m)},ao.svg.area.radial=function(){var n=Ou(Hu);return n.radius=n.x,delete n.x,n.innerRadius=n.x0,delete n.x0,n.outerRadius=n.x1,delete n.x1,n.angle=n.y,delete n.y,n.startAngle=n.y0,delete n.y0,n.endAngle=n.y1,delete n.y1,n},ao.svg.chord=function(){function n(n,a){var l=t(this,u,n,a),c=t(this,o,n,a);return"M"+l.p0+r(l.r,l.p1,l.a1-l.a0)+(e(l,c)?i(l.r,l.p1,l.r,l.p0):i(l.r,l.p1,c.r,c.p0)+r(c.r,c.p1,c.a1-c.a0)+i(c.r,c.p1,l.r,l.p0))+"Z"}function t(n,t,e,r){var i=t.call(n,e,r),u=a.call(n,i,r),o=l.call(n,i,r)-Io,f=c.call(n,i,r)-Io;return{r:u,a0:o,a1:f,p0:[u*Math.cos(o),u*Math.sin(o)],p1:[u*Math.cos(f),u*Math.sin(f)]}}function e(n,t){return n.a0==t.a0&&n.a1==t.a1}function r(n,t,e){return"A"+n+","+n+" 0 "+ +(e>Fo)+",1 "+t}function i(n,t,e,r){return"Q 0,0 "+r}var u=Me,o=xe,a=Iu,l=gu,c=vu;return n.radius=function(t){return arguments.length?(a=En(t),n):a},n.source=function(t){return arguments.length?(u=En(t),n):u},n.target=function(t){return arguments.length?(o=En(t),n):o},n.startAngle=function(t){return arguments.length?(l=En(t),n):l},n.endAngle=function(t){return arguments.length?(c=En(t),n):c},n},ao.svg.diagonal=function(){function n(n,i){var u=t.call(this,n,i),o=e.call(this,n,i),a=(u.y+o.y)/2,l=[u,{x:u.x,y:a},{x:o.x,y:a},o];return l=l.map(r),"M"+l[0]+"C"+l[1]+" "+l[2]+" "+l[3]}var t=Me,e=xe,r=Yu;return n.source=function(e){return arguments.length?(t=En(e),n):t},n.target=function(t){return arguments.length?(e=En(t),n):e},n.projection=function(t){return arguments.length?(r=t,n):r},n},ao.svg.diagonal.radial=function(){var n=ao.svg.diagonal(),t=Yu,e=n.projection;return n.projection=function(n){return arguments.length?e(Zu(t=n)):t},n},ao.svg.symbol=function(){function n(n,r){return(Ul.get(t.call(this,n,r))||$u)(e.call(this,n,r))}var t=Xu,e=Vu;return n.type=function(e){return arguments.length?(t=En(e),n):t},n.size=function(t){return arguments.length?(e=En(t),n):e},n};var Ul=ao.map({circle:$u,cross:function(n){var t=Math.sqrt(n/5)/2;return"M"+-3*t+","+-t+"H"+-t+"V"+-3*t+"H"+t+"V"+-t+"H"+3*t+"V"+t+"H"+t+"V"+3*t+"H"+-t+"V"+t+"H"+-3*t+"Z"},diamond:function(n){var t=Math.sqrt(n/(2*Fl)),e=t*Fl;return"M0,"+-t+"L"+e+",0 0,"+t+" "+-e+",0Z"},square:function(n){var t=Math.sqrt(n)/2;return"M"+-t+","+-t+"L"+t+","+-t+" "+t+","+t+" "+-t+","+t+"Z"},"triangle-down":function(n){var t=Math.sqrt(n/jl),e=t*jl/2;return"M0,"+e+"L"+t+","+-e+" "+-t+","+-e+"Z"},"triangle-up":function(n){var t=Math.sqrt(n/jl),e=t*jl/2;return"M0,"+-e+"L"+t+","+e+" "+-t+","+e+"Z"}});ao.svg.symbolTypes=Ul.keys();var jl=Math.sqrt(3),Fl=Math.tan(30*Yo);Co.transition=function(n){for(var t,e,r=Hl||++Zl,i=Ku(n),u=[],o=Ol||{time:Date.now(),ease:Nr,delay:0,duration:250},a=-1,l=this.length;++a<l;){u.push(t=[]);for(var c=this[a],f=-1,s=c.length;++f<s;)(e=c[f])&&Qu(e,f,i,r,o),t.push(e)}return Wu(u,i,r)},Co.interrupt=function(n){return this.each(null==n?Il:Bu(Ku(n)))};var Hl,Ol,Il=Bu(Ku()),Yl=[],Zl=0;Yl.call=Co.call,Yl.empty=Co.empty,Yl.node=Co.node,Yl.size=Co.size,ao.transition=function(n,t){return n&&n.transition?Hl?n.transition(t):n:ao.selection().transition(n)},ao.transition.prototype=Yl,Yl.select=function(n){var t,e,r,i=this.id,u=this.namespace,o=[];n=A(n);for(var a=-1,l=this.length;++a<l;){o.push(t=[]);for(var c=this[a],f=-1,s=c.length;++f<s;)(r=c[f])&&(e=n.call(r,r.__data__,f,a))?("__data__"in r&&(e.__data__=r.__data__),Qu(e,f,u,i,r[u][i]),t.push(e)):t.push(null)}return Wu(o,u,i)},Yl.selectAll=function(n){var t,e,r,i,u,o=this.id,a=this.namespace,l=[];n=C(n);for(var c=-1,f=this.length;++c<f;)for(var s=this[c],h=-1,p=s.length;++h<p;)if(r=s[h]){u=r[a][o],e=n.call(r,r.__data__,h,c),l.push(t=[]);for(var g=-1,v=e.length;++g<v;)(i=e[g])&&Qu(i,g,a,o,u),t.push(i)}return Wu(l,a,o)},Yl.filter=function(n){var t,e,r,i=[];"function"!=typeof n&&(n=O(n));for(var u=0,o=this.length;o>u;u++){i.push(t=[]);for(var e=this[u],a=0,l=e.length;l>a;a++)(r=e[a])&&n.call(r,r.__data__,a,u)&&t.push(r)}return Wu(i,this.namespace,this.id)},Yl.tween=function(n,t){var e=this.id,r=this.namespace;return arguments.length<2?this.node()[r][e].tween.get(n):Y(this,null==t?function(t){t[r][e].tween.remove(n)}:function(i){i[r][e].tween.set(n,t)})},Yl.attr=function(n,t){function e(){this.removeAttribute(a)}function r(){this.removeAttributeNS(a.space,a.local)}function i(n){return null==n?e:(n+="",function(){var t,e=this.getAttribute(a);return e!==n&&(t=o(e,n),function(n){this.setAttribute(a,t(n))})})}function u(n){return null==n?r:(n+="",function(){var t,e=this.getAttributeNS(a.space,a.local);return e!==n&&(t=o(e,n),function(n){this.setAttributeNS(a.space,a.local,t(n))})})}if(arguments.length<2){for(t in n)this.attr(t,n[t]);return this}var o="transform"==n?$r:Mr,a=ao.ns.qualify(n);return Ju(this,"attr."+n,t,a.local?u:i)},Yl.attrTween=function(n,t){function e(n,e){var r=t.call(this,n,e,this.getAttribute(i));return r&&function(n){this.setAttribute(i,r(n))}}function r(n,e){var r=t.call(this,n,e,this.getAttributeNS(i.space,i.local));return r&&function(n){this.setAttributeNS(i.space,i.local,r(n))}}var i=ao.ns.qualify(n);return this.tween("attr."+n,i.local?r:e)},Yl.style=function(n,e,r){function i(){this.style.removeProperty(n)}function u(e){return null==e?i:(e+="",function(){var i,u=t(this).getComputedStyle(this,null).getPropertyValue(n);return u!==e&&(i=Mr(u,e),function(t){this.style.setProperty(n,i(t),r)})})}var o=arguments.length;if(3>o){if("string"!=typeof n){2>o&&(e="");for(r in n)this.style(r,n[r],e);return this}r=""}return Ju(this,"style."+n,e,u)},Yl.styleTween=function(n,e,r){function i(i,u){var o=e.call(this,i,u,t(this).getComputedStyle(this,null).getPropertyValue(n));return o&&function(t){this.style.setProperty(n,o(t),r)}}return arguments.length<3&&(r=""),this.tween("style."+n,i)},Yl.text=function(n){return Ju(this,"text",n,Gu)},Yl.remove=function(){var n=this.namespace;return this.each("end.transition",function(){var t;this[n].count<2&&(t=this.parentNode)&&t.removeChild(this)})},Yl.ease=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].ease:("function"!=typeof n&&(n=ao.ease.apply(ao,arguments)),Y(this,function(r){r[e][t].ease=n}))},Yl.delay=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].delay:Y(this,"function"==typeof n?function(r,i,u){r[e][t].delay=+n.call(r,r.__data__,i,u)}:(n=+n,function(r){r[e][t].delay=n}))},Yl.duration=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].duration:Y(this,"function"==typeof n?function(r,i,u){r[e][t].duration=Math.max(1,n.call(r,r.__data__,i,u))}:(n=Math.max(1,n),function(r){r[e][t].duration=n}))},Yl.each=function(n,t){var e=this.id,r=this.namespace;if(arguments.length<2){var i=Ol,u=Hl;try{Hl=e,Y(this,function(t,i,u){Ol=t[r][e],n.call(t,t.__data__,i,u)})}finally{Ol=i,Hl=u}}else Y(this,function(i){var u=i[r][e];(u.event||(u.event=ao.dispatch("start","end","interrupt"))).on(n,t)});return this},Yl.transition=function(){for(var n,t,e,r,i=this.id,u=++Zl,o=this.namespace,a=[],l=0,c=this.length;c>l;l++){a.push(n=[]);for(var t=this[l],f=0,s=t.length;s>f;f++)(e=t[f])&&(r=e[o][i],Qu(e,f,o,u,{time:r.time,ease:r.ease,delay:r.delay+r.duration,duration:r.duration})),n.push(e)}return Wu(a,o,u)},ao.svg.axis=function(){function n(n){n.each(function(){var n,c=ao.select(this),f=this.__chart__||e,s=this.__chart__=e.copy(),h=null==l?s.ticks?s.ticks.apply(s,a):s.domain():l,p=null==t?s.tickFormat?s.tickFormat.apply(s,a):m:t,g=c.selectAll(".tick").data(h,s),v=g.enter().insert("g",".domain").attr("class","tick").style("opacity",Uo),d=ao.transition(g.exit()).style("opacity",Uo).remove(),y=ao.transition(g.order()).style("opacity",1),M=Math.max(i,0)+o,x=Zi(s),b=c.selectAll(".domain").data([0]),_=(b.enter().append("path").attr("class","domain"),ao.transition(b));v.append("line"),v.append("text");var w,S,k,N,E=v.select("line"),A=y.select("line"),C=g.select("text").text(p),z=v.select("text"),L=y.select("text"),q="top"===r||"left"===r?-1:1;if("bottom"===r||"top"===r?(n=no,w="x",k="y",S="x2",N="y2",C.attr("dy",0>q?"0em":".71em").style("text-anchor","middle"),_.attr("d","M"+x[0]+","+q*u+"V0H"+x[1]+"V"+q*u)):(n=to,w="y",k="x",S="y2",N="x2",C.attr("dy",".32em").style("text-anchor",0>q?"end":"start"),_.attr("d","M"+q*u+","+x[0]+"H0V"+x[1]+"H"+q*u)),E.attr(N,q*i),z.attr(k,q*M),A.attr(S,0).attr(N,q*i),L.attr(w,0).attr(k,q*M),s.rangeBand){var T=s,R=T.rangeBand()/2;f=s=function(n){return T(n)+R}}else f.rangeBand?f=s:d.call(n,s,f);v.call(n,f,s),y.call(n,s,s)})}var t,e=ao.scale.linear(),r=Vl,i=6,u=6,o=3,a=[10],l=null;return n.scale=function(t){return arguments.length?(e=t,n):e},n.orient=function(t){return arguments.length?(r=t in Xl?t+"":Vl,n):r},n.ticks=function(){return arguments.length?(a=co(arguments),n):a},n.tickValues=function(t){return arguments.length?(l=t,n):l},n.tickFormat=function(e){return arguments.length?(t=e,n):t},n.tickSize=function(t){var e=arguments.length;return e?(i=+t,u=+arguments[e-1],n):i},n.innerTickSize=function(t){return arguments.length?(i=+t,n):i},n.outerTickSize=function(t){return arguments.length?(u=+t,n):u},n.tickPadding=function(t){return arguments.length?(o=+t,n):o},n.tickSubdivide=function(){return arguments.length&&n},n};var Vl="bottom",Xl={top:1,right:1,bottom:1,left:1};ao.svg.brush=function(){function n(t){t.each(function(){var t=ao.select(this).style("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush",u).on("touchstart.brush",u),o=t.selectAll(".background").data([0]);o.enter().append("rect").attr("class","background").style("visibility","hidden").style("cursor","crosshair"),t.selectAll(".extent").data([0]).enter().append("rect").attr("class","extent").style("cursor","move");var a=t.selectAll(".resize").data(v,m);a.exit().remove(),a.enter().append("g").attr("class",function(n){return"resize "+n}).style("cursor",function(n){return $l[n]}).append("rect").attr("x",function(n){return/[ew]$/.test(n)?-3:null}).attr("y",function(n){return/^[ns]/.test(n)?-3:null}).attr("width",6).attr("height",6).style("visibility","hidden"),a.style("display",n.empty()?"none":null);var l,s=ao.transition(t),h=ao.transition(o);c&&(l=Zi(c),h.attr("x",l[0]).attr("width",l[1]-l[0]),r(s)),f&&(l=Zi(f),h.attr("y",l[0]).attr("height",l[1]-l[0]),i(s)),e(s)})}function e(n){n.selectAll(".resize").attr("transform",function(n){return"translate("+s[+/e$/.test(n)]+","+h[+/^s/.test(n)]+")"})}function r(n){n.select(".extent").attr("x",s[0]),n.selectAll(".extent,.n>rect,.s>rect").attr("width",s[1]-s[0])}function i(n){n.select(".extent").attr("y",h[0]),n.selectAll(".extent,.e>rect,.w>rect").attr("height",h[1]-h[0])}function u(){function u(){32==ao.event.keyCode&&(C||(M=null,L[0]-=s[1],L[1]-=h[1],C=2),S())}function v(){32==ao.event.keyCode&&2==C&&(L[0]+=s[1],L[1]+=h[1],C=0,S())}function d(){var n=ao.mouse(b),t=!1;x&&(n[0]+=x[0],n[1]+=x[1]),C||(ao.event.altKey?(M||(M=[(s[0]+s[1])/2,(h[0]+h[1])/2]),L[0]=s[+(n[0]<M[0])],L[1]=h[+(n[1]<M[1])]):M=null),E&&y(n,c,0)&&(r(k),t=!0),A&&y(n,f,1)&&(i(k),t=!0),t&&(e(k),w({type:"brush",mode:C?"move":"resize"}))}function y(n,t,e){var r,i,u=Zi(t),l=u[0],c=u[1],f=L[e],v=e?h:s,d=v[1]-v[0];return C&&(l-=f,c-=d+f),r=(e?g:p)?Math.max(l,Math.min(c,n[e])):n[e],C?i=(r+=f)+d:(M&&(f=Math.max(l,Math.min(c,2*M[e]-r))),r>f?(i=r,r=f):i=f),v[0]!=r||v[1]!=i?(e?a=null:o=null,v[0]=r,v[1]=i,!0):void 0}function m(){d(),k.style("pointer-events","all").selectAll(".resize").style("display",n.empty()?"none":null),ao.select("body").style("cursor",null),q.on("mousemove.brush",null).on("mouseup.brush",null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.brush",null).on("keyup.brush",null),z(),w({type:"brushend"})}var M,x,b=this,_=ao.select(ao.event.target),w=l.of(b,arguments),k=ao.select(b),N=_.datum(),E=!/^(n|s)$/.test(N)&&c,A=!/^(e|w)$/.test(N)&&f,C=_.classed("extent"),z=W(b),L=ao.mouse(b),q=ao.select(t(b)).on("keydown.brush",u).on("keyup.brush",v);if(ao.event.changedTouches?q.on("touchmove.brush",d).on("touchend.brush",m):q.on("mousemove.brush",d).on("mouseup.brush",m),k.interrupt().selectAll("*").interrupt(),C)L[0]=s[0]-L[0],L[1]=h[0]-L[1];else if(N){var T=+/w$/.test(N),R=+/^n/.test(N);x=[s[1-T]-L[0],h[1-R]-L[1]],L[0]=s[T],L[1]=h[R]}else ao.event.altKey&&(M=L.slice());k.style("pointer-events","none").selectAll(".resize").style("display",null),ao.select("body").style("cursor",_.style("cursor")),w({type:"brushstart"}),d()}var o,a,l=N(n,"brushstart","brush","brushend"),c=null,f=null,s=[0,0],h=[0,0],p=!0,g=!0,v=Bl[0];return n.event=function(n){n.each(function(){var n=l.of(this,arguments),t={x:s,y:h,i:o,j:a},e=this.__chart__||t;this.__chart__=t,Hl?ao.select(this).transition().each("start.brush",function(){o=e.i,a=e.j,s=e.x,h=e.y,n({type:"brushstart"})}).tween("brush:brush",function(){var e=xr(s,t.x),r=xr(h,t.y);return o=a=null,function(i){s=t.x=e(i),h=t.y=r(i),n({type:"brush",mode:"resize"})}}).each("end.brush",function(){o=t.i,a=t.j,n({type:"brush",mode:"resize"}),n({type:"brushend"})}):(n({type:"brushstart"}),n({type:"brush",mode:"resize"}),n({type:"brushend"}))})},n.x=function(t){return arguments.length?(c=t,v=Bl[!c<<1|!f],n):c},n.y=function(t){return arguments.length?(f=t,v=Bl[!c<<1|!f],n):f},n.clamp=function(t){return arguments.length?(c&&f?(p=!!t[0],g=!!t[1]):c?p=!!t:f&&(g=!!t),n):c&&f?[p,g]:c?p:f?g:null},n.extent=function(t){var e,r,i,u,l;return arguments.length?(c&&(e=t[0],r=t[1],f&&(e=e[0],r=r[0]),o=[e,r],c.invert&&(e=c(e),r=c(r)),e>r&&(l=e,e=r,r=l),e==s[0]&&r==s[1]||(s=[e,r])),f&&(i=t[0],u=t[1],c&&(i=i[1],u=u[1]),a=[i,u],f.invert&&(i=f(i),u=f(u)),i>u&&(l=i,i=u,u=l),i==h[0]&&u==h[1]||(h=[i,u])),n):(c&&(o?(e=o[0],r=o[1]):(e=s[0],r=s[1],c.invert&&(e=c.invert(e),r=c.invert(r)),e>r&&(l=e,e=r,r=l))),f&&(a?(i=a[0],u=a[1]):(i=h[0],u=h[1],f.invert&&(i=f.invert(i),u=f.invert(u)),i>u&&(l=i,i=u,u=l))),c&&f?[[e,i],[r,u]]:c?[e,r]:f&&[i,u])},n.clear=function(){return n.empty()||(s=[0,0],h=[0,0],o=a=null),n},n.empty=function(){return!!c&&s[0]==s[1]||!!f&&h[0]==h[1]},ao.rebind(n,l,"on")};var $l={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},Bl=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["n","s"],[]],Wl=ga.format=xa.timeFormat,Jl=Wl.utc,Gl=Jl("%Y-%m-%dT%H:%M:%S.%LZ");Wl.iso=Date.prototype.toISOString&&+new Date("2000-01-01T00:00:00.000Z")?eo:Gl,eo.parse=function(n){var t=new Date(n);return isNaN(t)?null:t},eo.toString=Gl.toString,ga.second=On(function(n){return new va(1e3*Math.floor(n/1e3))},function(n,t){n.setTime(n.getTime()+1e3*Math.floor(t))},function(n){return n.getSeconds()}),ga.seconds=ga.second.range,ga.seconds.utc=ga.second.utc.range,ga.minute=On(function(n){return new va(6e4*Math.floor(n/6e4))},function(n,t){n.setTime(n.getTime()+6e4*Math.floor(t))},function(n){return n.getMinutes()}),ga.minutes=ga.minute.range,ga.minutes.utc=ga.minute.utc.range,ga.hour=On(function(n){var t=n.getTimezoneOffset()/60;return new va(36e5*(Math.floor(n/36e5-t)+t))},function(n,t){n.setTime(n.getTime()+36e5*Math.floor(t))},function(n){return n.getHours()}),ga.hours=ga.hour.range,ga.hours.utc=ga.hour.utc.range,ga.month=On(function(n){return n=ga.day(n),n.setDate(1),n},function(n,t){n.setMonth(n.getMonth()+t)},function(n){return n.getMonth()}),ga.months=ga.month.range,ga.months.utc=ga.month.utc.range;var Kl=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,108e5,216e5,432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6],Ql=[[ga.second,1],[ga.second,5],[ga.second,15],[ga.second,30],[ga.minute,1],[ga.minute,5],[ga.minute,15],[ga.minute,30],[ga.hour,1],[ga.hour,3],[ga.hour,6],[ga.hour,12],[ga.day,1],[ga.day,2],[ga.week,1],[ga.month,1],[ga.month,3],[ga.year,1]],nc=Wl.multi([[".%L",function(n){return n.getMilliseconds()}],[":%S",function(n){return n.getSeconds()}],["%I:%M",function(n){return n.getMinutes()}],["%I %p",function(n){return n.getHours()}],["%a %d",function(n){return n.getDay()&&1!=n.getDate()}],["%b %d",function(n){return 1!=n.getDate()}],["%B",function(n){return n.getMonth()}],["%Y",zt]]),tc={range:function(n,t,e){return ao.range(Math.ceil(n/e)*e,+t,e).map(io)},floor:m,ceil:m};Ql.year=ga.year,ga.scale=function(){return ro(ao.scale.linear(),Ql,nc)};var ec=Ql.map(function(n){return[n[0].utc,n[1]]}),rc=Jl.multi([[".%L",function(n){return n.getUTCMilliseconds()}],[":%S",function(n){return n.getUTCSeconds()}],["%I:%M",function(n){return n.getUTCMinutes()}],["%I %p",function(n){return n.getUTCHours()}],["%a %d",function(n){return n.getUTCDay()&&1!=n.getUTCDate()}],["%b %d",function(n){return 1!=n.getUTCDate()}],["%B",function(n){return n.getUTCMonth()}],["%Y",zt]]);ec.year=ga.year.utc,ga.scale.utc=function(){return ro(ao.scale.linear(),ec,rc)},ao.text=An(function(n){return n.responseText}),ao.json=function(n,t){return Cn(n,"application/json",uo,t)},ao.html=function(n,t){return Cn(n,"text/html",oo,t)},ao.xml=An(function(n){return n.responseXML}),"function"==typeof define&&define.amd?(this.d3=ao,define(ao)):"object"==typeof module&&module.exports?module.exports=ao:this.d3=ao}();
/*!
 * Globalize
 *
 * http://github.com/jquery/globalize
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */

(function( window, undefined ) {

var Globalize,
	// private variables
	regexHex,
	regexInfinity,
	regexParseFloat,
	regexTrim,
	// private JavaScript utility functions
	arrayIndexOf,
	endsWith,
	extend,
	isArray,
	isFunction,
	isObject,
	startsWith,
	trim,
	zeroPad,
	// private Globalization utility functions
	appendPreOrPostMatch,
	expandFormat,
	formatDate,
	formatNumber,
	getTokenRegExp,
	getEra,
	getEraYear,
	parseExact,
	parseNegativePattern;

// Global variable (Globalize) or CommonJS module (globalize)
Globalize = function( cultureSelector ) {
	return new Globalize.prototype.init( cultureSelector );
};

if ( typeof require !== "undefined"
	&& typeof exports !== "undefined"
	&& typeof module !== "undefined" ) {
	// Assume CommonJS
	module.exports = Globalize;
} else {
	// Export as global variable
	window.Globalize = Globalize;
}

Globalize.cultures = {};

Globalize.prototype = {
	constructor: Globalize,
	init: function( cultureSelector ) {
		this.cultures = Globalize.cultures;
		this.cultureSelector = cultureSelector;

		return this;
	}
};
Globalize.prototype.init.prototype = Globalize.prototype;

// 1.	 When defining a culture, all fields are required except the ones stated as optional.
// 2.	 Each culture should have a ".calendars" object with at least one calendar named "standard"
//		 which serves as the default calendar in use by that culture.
// 3.	 Each culture should have a ".calendar" object which is the current calendar being used,
//		 it may be dynamically changed at any time to one of the calendars in ".calendars".
Globalize.cultures[ "default" ] = {
	// A unique name for the culture in the form <language code>-<country/region code>
	name: "en",
	// the name of the culture in the english language
	englishName: "English",
	// the name of the culture in its own language
	nativeName: "English",
	// whether the culture uses right-to-left text
	isRTL: false,
	// "language" is used for so-called "specific" cultures.
	// For example, the culture "es-CL" means "Spanish, in Chili".
	// It represents the Spanish-speaking culture as it is in Chili,
	// which might have different formatting rules or even translations
	// than Spanish in Spain. A "neutral" culture is one that is not
	// specific to a region. For example, the culture "es" is the generic
	// Spanish culture, which may be a more generalized version of the language
	// that may or may not be what a specific culture expects.
	// For a specific culture like "es-CL", the "language" field refers to the
	// neutral, generic culture information for the language it is using.
	// This is not always a simple matter of the string before the dash.
	// For example, the "zh-Hans" culture is netural (Simplified Chinese).
	// And the "zh-SG" culture is Simplified Chinese in Singapore, whose lanugage
	// field is "zh-CHS", not "zh".
	// This field should be used to navigate from a specific culture to it's
	// more general, neutral culture. If a culture is already as general as it
	// can get, the language may refer to itself.
	language: "en",
	// numberFormat defines general number formatting rules, like the digits in
	// each grouping, the group separator, and how negative numbers are displayed.
	numberFormat: {
		// [negativePattern]
		// Note, numberFormat.pattern has no "positivePattern" unlike percent and currency,
		// but is still defined as an array for consistency with them.
		//   negativePattern: one of "(n)|-n|- n|n-|n -"
		pattern: [ "-n" ],
		// number of decimal places normally shown
		decimals: 2,
		// string that separates number groups, as in 1,000,000
		",": ",",
		// string that separates a number from the fractional portion, as in 1.99
		".": ".",
		// array of numbers indicating the size of each number group.
		// TODO: more detailed description and example
		groupSizes: [ 3 ],
		// symbol used for positive numbers
		"+": "+",
		// symbol used for negative numbers
		"-": "-",
		percent: {
			// [negativePattern, positivePattern]
			//   negativePattern: one of "-n %|-n%|-%n|%-n|%n-|n-%|n%-|-% n|n %-|% n-|% -n|n- %"
			//   positivePattern: one of "n %|n%|%n|% n"
			pattern: [ "-n %", "n %" ],
			// number of decimal places normally shown
			decimals: 2,
			// array of numbers indicating the size of each number group.
			// TODO: more detailed description and example
			groupSizes: [ 3 ],
			// string that separates number groups, as in 1,000,000
			",": ",",
			// string that separates a number from the fractional portion, as in 1.99
			".": ".",
			// symbol used to represent a percentage
			symbol: "%"
		},
		currency: {
			// [negativePattern, positivePattern]
			//   negativePattern: one of "($n)|-$n|$-n|$n-|(n$)|-n$|n-$|n$-|-n $|-$ n|n $-|$ n-|$ -n|n- $|($ n)|(n $)"
			//   positivePattern: one of "$n|n$|$ n|n $"
			pattern: [ "($n)", "$n" ],
			// number of decimal places normally shown
			decimals: 2,
			// array of numbers indicating the size of each number group.
			// TODO: more detailed description and example
			groupSizes: [ 3 ],
			// string that separates number groups, as in 1,000,000
			",": ",",
			// string that separates a number from the fractional portion, as in 1.99
			".": ".",
			// symbol used to represent currency
			symbol: "$"
		}
	},
	// calendars defines all the possible calendars used by this culture.
	// There should be at least one defined with name "standard", and is the default
	// calendar used by the culture.
	// A calendar contains information about how dates are formatted, information about
	// the calendar's eras, a standard set of the date formats,
	// translations for day and month names, and if the calendar is not based on the Gregorian
	// calendar, conversion functions to and from the Gregorian calendar.
	calendars: {
		standard: {
			// name that identifies the type of calendar this is
			name: "Gregorian_USEnglish",
			// separator of parts of a date (e.g. "/" in 11/05/1955)
			"/": "/",
			// separator of parts of a time (e.g. ":" in 05:44 PM)
			":": ":",
			// the first day of the week (0 = Sunday, 1 = Monday, etc)
			firstDay: 0,
			days: {
				// full day names
				names: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
				// abbreviated day names
				namesAbbr: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
				// shortest day names
				namesShort: [ "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa" ]
			},
			months: {
				// full month names (13 months for lunar calendards -- 13th month should be "" if not lunar)
				names: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "" ],
				// abbreviated month names
				namesAbbr: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "" ]
			},
			// AM and PM designators in one of these forms:
			// The usual view, and the upper and lower case versions
			//   [ standard, lowercase, uppercase ]
			// The culture does not use AM or PM (likely all standard date formats use 24 hour time)
			//   null
			AM: [ "AM", "am", "AM" ],
			PM: [ "PM", "pm", "PM" ],
			eras: [
				// eras in reverse chronological order.
				// name: the name of the era in this culture (e.g. A.D., C.E.)
				// start: when the era starts in ticks (gregorian, gmt), null if it is the earliest supported era.
				// offset: offset in years from gregorian calendar
				{
					"name": "A.D.",
					"start": null,
					"offset": 0
				}
			],
			// when a two digit year is given, it will never be parsed as a four digit
			// year greater than this year (in the appropriate era for the culture)
			// Set it as a full year (e.g. 2029) or use an offset format starting from
			// the current year: "+19" would correspond to 2029 if the current year 2010.
			twoDigitYearMax: 2029,
			// set of predefined date and time patterns used by the culture
			// these represent the format someone in this culture would expect
			// to see given the portions of the date that are shown.
			patterns: {
				// short date pattern
				d: "M/d/yyyy",
				// long date pattern
				D: "dddd, MMMM dd, yyyy",
				// short time pattern
				t: "h:mm tt",
				// long time pattern
				T: "h:mm:ss tt",
				// long date, short time pattern
				f: "dddd, MMMM dd, yyyy h:mm tt",
				// long date, long time pattern
				F: "dddd, MMMM dd, yyyy h:mm:ss tt",
				// month/day pattern
				M: "MMMM dd",
				// month/year pattern
				Y: "yyyy MMMM",
				// S is a sortable format that does not vary by culture
				S: "yyyy\u0027-\u0027MM\u0027-\u0027dd\u0027T\u0027HH\u0027:\u0027mm\u0027:\u0027ss"
			}
			// optional fields for each calendar:
			/*
			monthsGenitive:
				Same as months but used when the day preceeds the month.
				Omit if the culture has no genitive distinction in month names.
				For an explaination of genitive months, see http://blogs.msdn.com/michkap/archive/2004/12/25/332259.aspx
			convert:
				Allows for the support of non-gregorian based calendars. This convert object is used to
				to convert a date to and from a gregorian calendar date to handle parsing and formatting.
				The two functions:
					fromGregorian( date )
						Given the date as a parameter, return an array with parts [ year, month, day ]
						corresponding to the non-gregorian based year, month, and day for the calendar.
					toGregorian( year, month, day )
						Given the non-gregorian year, month, and day, return a new Date() object
						set to the corresponding date in the gregorian calendar.
			*/
		}
	},
	// For localized strings
	messages: {}
};

Globalize.cultures[ "default" ].calendar = Globalize.cultures[ "default" ].calendars.standard;

Globalize.cultures[ "en" ] = Globalize.cultures[ "default" ];

Globalize.cultureSelector = "en";

//
// private variables
//

regexHex = /^0x[a-f0-9]+$/i;
regexInfinity = /^[+-]?infinity$/i;
regexParseFloat = /^[+-]?\d*\.?\d*(e[+-]?\d+)?$/;
regexTrim = /^\s+|\s+$/g;

//
// private JavaScript utility functions
//

arrayIndexOf = function( array, item ) {
	if ( array.indexOf ) {
		return array.indexOf( item );
	}
	for ( var i = 0, length = array.length; i < length; i++ ) {
		if ( array[i] === item ) {
			return i;
		}
	}
	return -1;
};

endsWith = function( value, pattern ) {
	return value.substr( value.length - pattern.length ) === pattern;
};

extend = function( deep ) {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction(target) ) {
		target = {};
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( isObject(copy) || (copyIsArray = isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && isArray(src) ? src : [];

					} else {
						clone = src && isObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

isArray = Array.isArray || function( obj ) {
	return Object.prototype.toString.call( obj ) === "[object Array]";
};

isFunction = function( obj ) {
	return Object.prototype.toString.call( obj ) === "[object Function]"
}

isObject = function( obj ) {
	return Object.prototype.toString.call( obj ) === "[object Object]";
};

startsWith = function( value, pattern ) {
	return value.indexOf( pattern ) === 0;
};

trim = function( value ) {
	return ( value + "" ).replace( regexTrim, "" );
};

zeroPad = function( str, count, left ) {
	var l;
	for ( l = str.length; l < count; l += 1 ) {
		str = ( left ? ("0" + str) : (str + "0") );
	}
	return str;
};

//
// private Globalization utility functions
//

appendPreOrPostMatch = function( preMatch, strings ) {
	// appends pre- and post- token match strings while removing escaped characters.
	// Returns a single quote count which is used to determine if the token occurs
	// in a string literal.
	var quoteCount = 0,
		escaped = false;
	for ( var i = 0, il = preMatch.length; i < il; i++ ) {
		var c = preMatch.charAt( i );
		switch ( c ) {
			case "\'":
				if ( escaped ) {
					strings.push( "\'" );
				}
				else {
					quoteCount++;
				}
				escaped = false;
				break;
			case "\\":
				if ( escaped ) {
					strings.push( "\\" );
				}
				escaped = !escaped;
				break;
			default:
				strings.push( c );
				escaped = false;
				break;
		}
	}
	return quoteCount;
};

expandFormat = function( cal, format ) {
	// expands unspecified or single character date formats into the full pattern.
	format = format || "F";
	var pattern,
		patterns = cal.patterns,
		len = format.length;
	if ( len === 1 ) {
		pattern = patterns[ format ];
		if ( !pattern ) {
			throw "Invalid date format string \'" + format + "\'.";
		}
		format = pattern;
	}
	else if ( len === 2 && format.charAt(0) === "%" ) {
		// %X escape format -- intended as a custom format string that is only one character, not a built-in format.
		format = format.charAt( 1 );
	}
	return format;
};

formatDate = function( value, format, culture ) {
	var cal = culture.calendar,
		convert = cal.convert;

	if ( !format || !format.length || format === "i" ) {
		var ret;
		if ( culture && culture.name.length ) {
			if ( convert ) {
				// non-gregorian calendar, so we cannot use built-in toLocaleString()
				ret = formatDate( value, cal.patterns.F, culture );
			}
			else {
				var eraDate = new Date( value.getTime() ),
					era = getEra( value, cal.eras );
				eraDate.setFullYear( getEraYear(value, cal, era) );
				ret = eraDate.toLocaleString();
			}
		}
		else {
			ret = value.toString();
		}
		return ret;
	}

	var eras = cal.eras,
		sortable = format === "s";
	format = expandFormat( cal, format );

	// Start with an empty string
	ret = [];
	var hour,
		zeros = [ "0", "00", "000" ],
		foundDay,
		checkedDay,
		dayPartRegExp = /([^d]|^)(d|dd)([^d]|$)/g,
		quoteCount = 0,
		tokenRegExp = getTokenRegExp(),
		converted;

	function padZeros( num, c ) {
		var r, s = num + "";
		if ( c > 1 && s.length < c ) {
			r = ( zeros[c - 2] + s);
			return r.substr( r.length - c, c );
		}
		else {
			r = s;
		}
		return r;
	}

	function hasDay() {
		if ( foundDay || checkedDay ) {
			return foundDay;
		}
		foundDay = dayPartRegExp.test( format );
		checkedDay = true;
		return foundDay;
	}

	function getPart( date, part ) {
		if ( converted ) {
			return converted[ part ];
		}
		switch ( part ) {
			case 0: return date.getFullYear();
			case 1: return date.getMonth();
			case 2: return date.getDate();
		}
	}

	if ( !sortable && convert ) {
		converted = convert.fromGregorian( value );
	}

	for ( ; ; ) {
		// Save the current index
		var index = tokenRegExp.lastIndex,
			// Look for the next pattern
			ar = tokenRegExp.exec( format );

		// Append the text before the pattern (or the end of the string if not found)
		var preMatch = format.slice( index, ar ? ar.index : format.length );
		quoteCount += appendPreOrPostMatch( preMatch, ret );

		if ( !ar ) {
			break;
		}

		// do not replace any matches that occur inside a string literal.
		if ( quoteCount % 2 ) {
			ret.push( ar[0] );
			continue;
		}

		var current = ar[ 0 ],
			clength = current.length;

		switch ( current ) {
			case "ddd":
				//Day of the week, as a three-letter abbreviation
			case "dddd":
				// Day of the week, using the full name
				var names = ( clength === 3 ) ? cal.days.namesAbbr : cal.days.names;
				ret.push( names[value.getDay()] );
				break;
			case "d":
				// Day of month, without leading zero for single-digit days
			case "dd":
				// Day of month, with leading zero for single-digit days
				foundDay = true;
				ret.push(
					padZeros( getPart(value, 2), clength )
				);
				break;
			case "MMM":
				// Month, as a three-letter abbreviation
			case "MMMM":
				// Month, using the full name
				var part = getPart( value, 1 );
				ret.push(
					( cal.monthsGenitive && hasDay() )
					?
					cal.monthsGenitive[ clength === 3 ? "namesAbbr" : "names" ][ part ]
					:
					cal.months[ clength === 3 ? "namesAbbr" : "names" ][ part ]
				);
				break;
			case "M":
				// Month, as digits, with no leading zero for single-digit months
			case "MM":
				// Month, as digits, with leading zero for single-digit months
				ret.push(
					padZeros( getPart(value, 1) + 1, clength )
				);
				break;
			case "y":
				// Year, as two digits, but with no leading zero for years less than 10
			case "yy":
				// Year, as two digits, with leading zero for years less than 10
			case "yyyy":
				// Year represented by four full digits
				part = converted ? converted[ 0 ] : getEraYear( value, cal, getEra(value, eras), sortable );
				if ( clength < 4 ) {
					part = part % 100;
				}
				ret.push(
					padZeros( part, clength )
				);
				break;
			case "h":
				// Hours with no leading zero for single-digit hours, using 12-hour clock
			case "hh":
				// Hours with leading zero for single-digit hours, using 12-hour clock
				hour = value.getHours() % 12;
				if ( hour === 0 ) hour = 12;
				ret.push(
					padZeros( hour, clength )
				);
				break;
			case "H":
				// Hours with no leading zero for single-digit hours, using 24-hour clock
			case "HH":
				// Hours with leading zero for single-digit hours, using 24-hour clock
				ret.push(
					padZeros( value.getHours(), clength )
				);
				break;
			case "m":
				// Minutes with no leading zero for single-digit minutes
			case "mm":
				// Minutes with leading zero for single-digit minutes
				ret.push(
					padZeros( value.getMinutes(), clength )
				);
				break;
			case "s":
				// Seconds with no leading zero for single-digit seconds
			case "ss":
				// Seconds with leading zero for single-digit seconds
				ret.push(
					padZeros( value.getSeconds(), clength )
				);
				break;
			case "t":
				// One character am/pm indicator ("a" or "p")
			case "tt":
				// Multicharacter am/pm indicator
				part = value.getHours() < 12 ? ( cal.AM ? cal.AM[0] : " " ) : ( cal.PM ? cal.PM[0] : " " );
				ret.push( clength === 1 ? part.charAt(0) : part );
				break;
			case "f":
				// Deciseconds
			case "ff":
				// Centiseconds
			case "fff":
				// Milliseconds
				ret.push(
					padZeros( value.getMilliseconds(), 3 ).substr( 0, clength )
				);
				break;
			case "z":
				// Time zone offset, no leading zero
			case "zz":
				// Time zone offset with leading zero
				hour = value.getTimezoneOffset() / 60;
				ret.push(
					( hour <= 0 ? "+" : "-" ) + padZeros( Math.floor(Math.abs(hour)), clength )
				);
				break;
			case "zzz":
				// Time zone offset with leading zero
				hour = value.getTimezoneOffset() / 60;
				ret.push(
					( hour <= 0 ? "+" : "-" ) + padZeros( Math.floor(Math.abs(hour)), 2 )
					// Hard coded ":" separator, rather than using cal.TimeSeparator
					// Repeated here for consistency, plus ":" was already assumed in date parsing.
					+ ":" + padZeros( Math.abs(value.getTimezoneOffset() % 60), 2 )
				);
				break;
			case "g":
			case "gg":
				if ( cal.eras ) {
					ret.push(
						cal.eras[ getEra(value, eras) ].name
					);
				}
				break;
		case "/":
			ret.push( cal["/"] );
			break;
		default:
			throw "Invalid date format pattern \'" + current + "\'.";
			break;
		}
	}
	return ret.join( "" );
};

// formatNumber
(function() {
	var expandNumber;

	expandNumber = function( number, precision, formatInfo ) {
		var groupSizes = formatInfo.groupSizes,
			curSize = groupSizes[ 0 ],
			curGroupIndex = 1,
			factor = Math.pow( 10, precision ),
			rounded = Math.round( number * factor ) / factor;

		if ( !isFinite(rounded) ) {
			rounded = number;
		}
		number = rounded;

		var numberString = number+"",
			right = "",
			split = numberString.split( /e/i ),
			exponent = split.length > 1 ? parseInt( split[1], 10 ) : 0;
		numberString = split[ 0 ];
		split = numberString.split( "." );
		numberString = split[ 0 ];
		right = split.length > 1 ? split[ 1 ] : "";

		var l;
		if ( exponent > 0 ) {
			right = zeroPad( right, exponent, false );
			numberString += right.slice( 0, exponent );
			right = right.substr( exponent );
		}
		else if ( exponent < 0 ) {
			exponent = -exponent;
			numberString = zeroPad( numberString, exponent + 1 );
			right = numberString.slice( -exponent, numberString.length ) + right;
			numberString = numberString.slice( 0, -exponent );
		}

		if ( precision > 0 ) {
			right = formatInfo[ "." ] +
				( (right.length > precision) ? right.slice(0, precision) : zeroPad(right, precision) );
		}
		else {
			right = "";
		}

		var stringIndex = numberString.length - 1,
			sep = formatInfo[ "," ],
			ret = "";

		while ( stringIndex >= 0 ) {
			if ( curSize === 0 || curSize > stringIndex ) {
				return numberString.slice( 0, stringIndex + 1 ) + ( ret.length ? (sep + ret + right) : right );
			}
			ret = numberString.slice( stringIndex - curSize + 1, stringIndex + 1 ) + ( ret.length ? (sep + ret) : "" );

			stringIndex -= curSize;

			if ( curGroupIndex < groupSizes.length ) {
				curSize = groupSizes[ curGroupIndex ];
				curGroupIndex++;
			}
		}

		return numberString.slice( 0, stringIndex + 1 ) + sep + ret + right;
	};

	formatNumber = function( value, format, culture ) {
		if ( !format || format === "i" ) {
			return culture.name.length ? value.toLocaleString() : value.toString();
		}
		format = format || "D";

		var nf = culture.numberFormat,
			number = Math.abs( value ),
			precision = -1,
			pattern;
		if ( format.length > 1 ) precision = parseInt( format.slice(1), 10 );

		var current = format.charAt( 0 ).toUpperCase(),
			formatInfo;

		switch ( current ) {
			case "D":
				pattern = "n";
				if ( precision !== -1 ) {
					number = zeroPad( "" + number, precision, true );
				}
				if ( value < 0 ) number = -number;
				break;
			case "N":
				formatInfo = nf;
				// fall through
			case "C":
				formatInfo = formatInfo || nf.currency;
				// fall through
			case "P":
				formatInfo = formatInfo || nf.percent;
				pattern = value < 0 ? formatInfo.pattern[ 0 ] : ( formatInfo.pattern[1] || "n" );
				if ( precision === -1 ) precision = formatInfo.decimals;
				number = expandNumber( number * (current === "P" ? 100 : 1), precision, formatInfo );
				break;
			default:
				throw "Bad number format specifier: " + current;
		}

		var patternParts = /n|\$|-|%/g,
			ret = "";
		for ( ; ; ) {
			var index = patternParts.lastIndex,
				ar = patternParts.exec( pattern );

			ret += pattern.slice( index, ar ? ar.index : pattern.length );

			if ( !ar ) {
				break;
			}

			switch ( ar[0] ) {
				case "n":
					ret += number;
					break;
				case "$":
					ret += nf.currency.symbol;
					break;
				case "-":
					// don't make 0 negative
					if ( /[1-9]/.test(number) ) {
						ret += nf[ "-" ];
					}
					break;
				case "%":
					ret += nf.percent.symbol;
					break;
			}
		}

		return ret;
	};

}());

getTokenRegExp = function() {
	// regular expression for matching date and time tokens in format strings.
	return /\/|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z|gg|g/g;
};

getEra = function( date, eras ) {
	if ( !eras ) return 0;
	var start, ticks = date.getTime();
	for ( var i = 0, l = eras.length; i < l; i++ ) {
		start = eras[ i ].start;
		if ( start === null || ticks >= start ) {
			return i;
		}
	}
	return 0;
};

getEraYear = function( date, cal, era, sortable ) {
	var year = date.getFullYear();
	if ( !sortable && cal.eras ) {
		// convert normal gregorian year to era-shifted gregorian
		// year by subtracting the era offset
		year -= cal.eras[ era ].offset;
	}
	return year;
};

// parseExact
(function() {
	var expandYear,
		getDayIndex,
		getMonthIndex,
		getParseRegExp,
		outOfRange,
		toUpper,
		toUpperArray;

	expandYear = function( cal, year ) {
		// expands 2-digit year into 4 digits.
		var now = new Date(),
			era = getEra( now );
		if ( year < 100 ) {
			var twoDigitYearMax = cal.twoDigitYearMax;
			twoDigitYearMax = typeof twoDigitYearMax === "string" ? new Date().getFullYear() % 100 + parseInt( twoDigitYearMax, 10 ) : twoDigitYearMax;
			var curr = getEraYear( now, cal, era );
			year += curr - ( curr % 100 );
			if ( year > twoDigitYearMax ) {
				year -= 100;
			}
		}
		return year;
	};

	getDayIndex = function	( cal, value, abbr ) {
		var ret,
			days = cal.days,
			upperDays = cal._upperDays;
		if ( !upperDays ) {
			cal._upperDays = upperDays = [
				toUpperArray( days.names ),
				toUpperArray( days.namesAbbr ),
				toUpperArray( days.namesShort )
			];
		}
		value = toUpper( value );
		if ( abbr ) {
			ret = arrayIndexOf( upperDays[1], value );
			if ( ret === -1 ) {
				ret = arrayIndexOf( upperDays[2], value );
			}
		}
		else {
			ret = arrayIndexOf( upperDays[0], value );
		}
		return ret;
	};

	getMonthIndex = function( cal, value, abbr ) {
		var months = cal.months,
			monthsGen = cal.monthsGenitive || cal.months,
			upperMonths = cal._upperMonths,
			upperMonthsGen = cal._upperMonthsGen;
		if ( !upperMonths ) {
			cal._upperMonths = upperMonths = [
				toUpperArray( months.names ),
				toUpperArray( months.namesAbbr )
			];
			cal._upperMonthsGen = upperMonthsGen = [
				toUpperArray( monthsGen.names ),
				toUpperArray( monthsGen.namesAbbr )
			];
		}
		value = toUpper( value );
		var i = arrayIndexOf( abbr ? upperMonths[1] : upperMonths[0], value );
		if ( i < 0 ) {
			i = arrayIndexOf( abbr ? upperMonthsGen[1] : upperMonthsGen[0], value );
		}
		return i;
	};

	getParseRegExp = function( cal, format ) {
		// converts a format string into a regular expression with groups that
		// can be used to extract date fields from a date string.
		// check for a cached parse regex.
		var re = cal._parseRegExp;
		if ( !re ) {
			cal._parseRegExp = re = {};
		}
		else {
			var reFormat = re[ format ];
			if ( reFormat ) {
				return reFormat;
			}
		}

		// expand single digit formats, then escape regular expression characters.
		var expFormat = expandFormat( cal, format ).replace( /([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g, "\\\\$1" ),
			regexp = [ "^" ],
			groups = [],
			index = 0,
			quoteCount = 0,
			tokenRegExp = getTokenRegExp(),
			match;

		// iterate through each date token found.
		while ( (match = tokenRegExp.exec(expFormat)) !== null ) {
			var preMatch = expFormat.slice( index, match.index );
			index = tokenRegExp.lastIndex;

			// don't replace any matches that occur inside a string literal.
			quoteCount += appendPreOrPostMatch( preMatch, regexp );
			if ( quoteCount % 2 ) {
				regexp.push( match[0] );
				continue;
			}

			// add a regex group for the token.
			var m = match[ 0 ],
				len = m.length,
				add;
			switch ( m ) {
				case "dddd": case "ddd":
				case "MMMM": case "MMM":
				case "gg": case "g":
					add = "(\\D+)";
					break;
				case "tt": case "t":
					add = "(\\D*)";
					break;
				case "yyyy":
				case "fff":
				case "ff":
				case "f":
					add = "(\\d{" + len + "})";
					break;
				case "dd": case "d":
				case "MM": case "M":
				case "yy": case "y":
				case "HH": case "H":
				case "hh": case "h":
				case "mm": case "m":
				case "ss": case "s":
					add = "(\\d\\d?)";
					break;
				case "zzz":
					add = "([+-]?\\d\\d?:\\d{2})";
					break;
				case "zz": case "z":
					add = "([+-]?\\d\\d?)";
					break;
				case "/":
					add = "(\\" + cal[ "/" ] + ")";
					break;
				default:
					throw "Invalid date format pattern \'" + m + "\'.";
					break;
			}
			if ( add ) {
				regexp.push( add );
			}
			groups.push( match[0] );
		}
		appendPreOrPostMatch( expFormat.slice(index), regexp );
		regexp.push( "$" );

		// allow whitespace to differ when matching formats.
		var regexpStr = regexp.join( "" ).replace( /\s+/g, "\\s+" ),
			parseRegExp = { "regExp": regexpStr, "groups": groups };

		// cache the regex for this format.
		return re[ format ] = parseRegExp;
	};

	outOfRange = function( value, low, high ) {
		return value < low || value > high;
	};

	toUpper = function( value ) {
		// "he-IL" has non-breaking space in weekday names.
		return value.split( "\u00A0" ).join( " " ).toUpperCase();
	};

	toUpperArray = function( arr ) {
		var results = [];
		for ( var i = 0, l = arr.length; i < l; i++ ) {
			results[ i ] = toUpper( arr[i] );
		}
		return results;
	};

	parseExact = function( value, format, culture ) {
		// try to parse the date string by matching against the format string
		// while using the specified culture for date field names.
		value = trim( value );
		var cal = culture.calendar,
			// convert date formats into regular expressions with groupings.
			// use the regexp to determine the input format and extract the date fields.
			parseInfo = getParseRegExp( cal, format ),
			match = new RegExp( parseInfo.regExp ).exec( value );
		if ( match === null ) {
			return null;
		}
		// found a date format that matches the input.
		var groups = parseInfo.groups,
			era = null, year = null, month = null, date = null, weekDay = null,
			hour = 0, hourOffset, min = 0, sec = 0, msec = 0, tzMinOffset = null,
			pmHour = false;
		// iterate the format groups to extract and set the date fields.
		for ( var j = 0, jl = groups.length; j < jl; j++ ) {
			var matchGroup = match[ j + 1 ];
			if ( matchGroup ) {
				var current = groups[ j ],
					clength = current.length,
					matchInt = parseInt( matchGroup, 10 );
				switch ( current ) {
					case "dd": case "d":
						// Day of month.
						date = matchInt;
						// check that date is generally in valid range, also checking overflow below.
						if ( outOfRange(date, 1, 31) ) return null;
						break;
					case "MMM": case "MMMM":
						month = getMonthIndex( cal, matchGroup, clength === 3 );
						if ( outOfRange(month, 0, 11) ) return null;
						break;
					case "M": case "MM":
						// Month.
						month = matchInt - 1;
						if ( outOfRange(month, 0, 11) ) return null;
						break;
					case "y": case "yy":
					case "yyyy":
						year = clength < 4 ? expandYear( cal, matchInt ) : matchInt;
						if ( outOfRange(year, 0, 9999) ) return null;
						break;
					case "h": case "hh":
						// Hours (12-hour clock).
						hour = matchInt;
						if ( hour === 12 ) hour = 0;
						if ( outOfRange(hour, 0, 11) ) return null;
						break;
					case "H": case "HH":
						// Hours (24-hour clock).
						hour = matchInt;
						if ( outOfRange(hour, 0, 23) ) return null;
						break;
					case "m": case "mm":
						// Minutes.
						min = matchInt;
						if ( outOfRange(min, 0, 59) ) return null;
						break;
					case "s": case "ss":
						// Seconds.
						sec = matchInt;
						if ( outOfRange(sec, 0, 59) ) return null;
						break;
					case "tt": case "t":
						// AM/PM designator.
						// see if it is standard, upper, or lower case PM. If not, ensure it is at least one of
						// the AM tokens. If not, fail the parse for this format.
						pmHour = cal.PM && ( matchGroup === cal.PM[0] || matchGroup === cal.PM[1] || matchGroup === cal.PM[2] );
						if (
							!pmHour && (
								!cal.AM || ( matchGroup !== cal.AM[0] && matchGroup !== cal.AM[1] && matchGroup !== cal.AM[2] )
							)
						) return null;
						break;
					case "f":
						// Deciseconds.
					case "ff":
						// Centiseconds.
					case "fff":
						// Milliseconds.
						msec = matchInt * Math.pow( 10, 3 - clength );
						if ( outOfRange(msec, 0, 999) ) return null;
						break;
					case "ddd":
						// Day of week.
					case "dddd":
						// Day of week.
						weekDay = getDayIndex( cal, matchGroup, clength === 3 );
						if ( outOfRange(weekDay, 0, 6) ) return null;
						break;
					case "zzz":
						// Time zone offset in +/- hours:min.
						var offsets = matchGroup.split( /:/ );
						if ( offsets.length !== 2 ) return null;
						hourOffset = parseInt( offsets[0], 10 );
						if ( outOfRange(hourOffset, -12, 13) ) return null;
						var minOffset = parseInt( offsets[1], 10 );
						if ( outOfRange(minOffset, 0, 59) ) return null;
						tzMinOffset = ( hourOffset * 60 ) + ( startsWith(matchGroup, "-") ? -minOffset : minOffset );
						break;
					case "z": case "zz":
						// Time zone offset in +/- hours.
						hourOffset = matchInt;
						if ( outOfRange(hourOffset, -12, 13) ) return null;
						tzMinOffset = hourOffset * 60;
						break;
					case "g": case "gg":
						var eraName = matchGroup;
						if ( !eraName || !cal.eras ) return null;
						eraName = trim( eraName.toLowerCase() );
						for ( var i = 0, l = cal.eras.length; i < l; i++ ) {
							if ( eraName === cal.eras[i].name.toLowerCase() ) {
								era = i;
								break;
							}
						}
						// could not find an era with that name
						if ( era === null ) return null;
						break;
				}
			}
		}
		var result = new Date(), defaultYear, convert = cal.convert;
		defaultYear = convert ? convert.fromGregorian( result )[ 0 ] : result.getFullYear();
		if ( year === null ) {
			year = defaultYear;
		}
		else if ( cal.eras ) {
			// year must be shifted to normal gregorian year
			// but not if year was not specified, its already normal gregorian
			// per the main if clause above.
			year += cal.eras[( era || 0 )].offset;
		}
		// set default day and month to 1 and January, so if unspecified, these are the defaults
		// instead of the current day/month.
		if ( month === null ) {
			month = 0;
		}
		if ( date === null ) {
			date = 1;
		}
		// now have year, month, and date, but in the culture's calendar.
		// convert to gregorian if necessary
		if ( convert ) {
			result = convert.toGregorian( year, month, date );
			// conversion failed, must be an invalid match
			if ( result === null ) return null;
		}
		else {
			// have to set year, month and date together to avoid overflow based on current date.
			result.setFullYear( year, month, date );
			// check to see if date overflowed for specified month (only checked 1-31 above).
			if ( result.getDate() !== date ) return null;
			// invalid day of week.
			if ( weekDay !== null && result.getDay() !== weekDay ) {
				return null;
			}
		}
		// if pm designator token was found make sure the hours fit the 24-hour clock.
		if ( pmHour && hour < 12 ) {
			hour += 12;
		}
		result.setHours( hour, min, sec, msec );
		if ( tzMinOffset !== null ) {
			// adjust timezone to utc before applying local offset.
			var adjustedMin = result.getMinutes() - ( tzMinOffset + result.getTimezoneOffset() );
			// Safari limits hours and minutes to the range of -127 to 127.	 We need to use setHours
			// to ensure both these fields will not exceed this range.	adjustedMin will range
			// somewhere between -1440 and 1500, so we only need to split this into hours.
			result.setHours( result.getHours() + parseInt(adjustedMin / 60, 10), adjustedMin % 60 );
		}
		return result;
	};
}());

parseNegativePattern = function( value, nf, negativePattern ) {
	var neg = nf[ "-" ],
		pos = nf[ "+" ],
		ret;
	switch ( negativePattern ) {
		case "n -":
			neg = " " + neg;
			pos = " " + pos;
			// fall through
		case "n-":
			if ( endsWith(value, neg) ) {
				ret = [ "-", value.substr(0, value.length - neg.length) ];
			}
			else if ( endsWith(value, pos) ) {
				ret = [ "+", value.substr(0, value.length - pos.length) ];
			}
			break;
		case "- n":
			neg += " ";
			pos += " ";
			// fall through
		case "-n":
			if ( startsWith(value, neg) ) {
				ret = [ "-", value.substr(neg.length) ];
			}
			else if ( startsWith(value, pos) ) {
				ret = [ "+", value.substr(pos.length) ];
			}
			break;
		case "(n)":
			if ( startsWith(value, "(") && endsWith(value, ")") ) {
				ret = [ "-", value.substr(1, value.length - 2) ];
			}
			break;
	}
	return ret || [ "", value ];
};

//
// public instance functions
//

Globalize.prototype.findClosestCulture = function( cultureSelector ) {
	return Globalize.findClosestCulture.call( this, cultureSelector );
};

Globalize.prototype.format = function( value, format, cultureSelector ) {
	return Globalize.format.call( this, value, format, cultureSelector );
};

Globalize.prototype.localize = function( key, cultureSelector ) {
	return Globalize.localize.call( this, key, cultureSelector );
};

Globalize.prototype.parseInt = function( value, radix, cultureSelector ) {
	return Globalize.parseInt.call( this, value, radix, cultureSelector );
};

Globalize.prototype.parseFloat = function( value, radix, cultureSelector ) {
	return Globalize.parseFloat.call( this, value, radix, cultureSelector );
};

Globalize.prototype.culture = function( cultureSelector ) {
	return Globalize.culture.call( this, cultureSelector );
};

//
// public singleton functions
//

Globalize.addCultureInfo = function( cultureName, baseCultureName, info ) {

	var base = {},
		isNew = false;

	if ( typeof cultureName !== "string" ) {
		// cultureName argument is optional string. If not specified, assume info is first
		// and only argument. Specified info deep-extends current culture.
		info = cultureName;
		cultureName = this.culture().name;
		base = this.cultures[ cultureName ];
	} else if ( typeof baseCultureName !== "string" ) {
		// baseCultureName argument is optional string. If not specified, assume info is second
		// argument. Specified info deep-extends specified culture.
		// If specified culture does not exist, create by deep-extending default
		info = baseCultureName;
		isNew = ( this.cultures[ cultureName ] == null );
		base = this.cultures[ cultureName ] || this.cultures[ "default" ];
	} else {
		// cultureName and baseCultureName specified. Assume a new culture is being created
		// by deep-extending an specified base culture
		isNew = true;
		base = this.cultures[ baseCultureName ];
	}

	this.cultures[ cultureName ] = extend(true, {},
		base,
		info
	);
	// Make the standard calendar the current culture if it's a new culture
	if ( isNew ) {
		this.cultures[ cultureName ].calendar = this.cultures[ cultureName ].calendars.standard;
	}
};

Globalize.findClosestCulture = function( name ) {
	var match;
	if ( !name ) {
		return this.cultures[ this.cultureSelector ] || this.cultures[ "default" ];
	}
	if ( typeof name === "string" ) {
		name = name.split( "," );
	}
	if ( isArray(name) ) {
		var lang,
			cultures = this.cultures,
			list = name,
			i, l = list.length,
			prioritized = [];
		for ( i = 0; i < l; i++ ) {
			name = trim( list[i] );
			var pri, parts = name.split( ";" );
			lang = trim( parts[0] );
			if ( parts.length === 1 ) {
				pri = 1;
			}
			else {
				name = trim( parts[1] );
				if ( name.indexOf("q=") === 0 ) {
					name = name.substr( 2 );
					pri = parseFloat( name );
					pri = isNaN( pri ) ? 0 : pri;
				}
				else {
					pri = 1;
				}
			}
			prioritized.push({ lang: lang, pri: pri });
		}
		prioritized.sort(function( a, b ) {
			return a.pri < b.pri ? 1 : -1;
		});

		// exact match
		for ( i = 0; i < l; i++ ) {
			lang = prioritized[ i ].lang;
			match = cultures[ lang ];
			if ( match ) {
				return match;
			}
		}

		// neutral language match
		for ( i = 0; i < l; i++ ) {
			lang = prioritized[ i ].lang;
			do {
				var index = lang.lastIndexOf( "-" );
				if ( index === -1 ) {
					break;
				}
				// strip off the last part. e.g. en-US => en
				lang = lang.substr( 0, index );
				match = cultures[ lang ];
				if ( match ) {
					return match;
				}
			}
			while ( 1 );
		}

		// last resort: match first culture using that language
		for ( i = 0; i < l; i++ ) {
			lang = prioritized[ i ].lang;
			for ( var cultureKey in cultures ) {
				var culture = cultures[ cultureKey ];
				if ( culture.language == lang ) {
					return culture;
				}
			}
		}
	}
	else if ( typeof name === "object" ) {
		return name;
	}
	return match || null;
};

Globalize.format = function( value, format, cultureSelector ) {
	culture = this.findClosestCulture( cultureSelector );
	if ( value instanceof Date ) {
		value = formatDate( value, format, culture );
	}
	else if ( typeof value === "number" ) {
		value = formatNumber( value, format, culture );
	}
	return value;
};

Globalize.localize = function( key, cultureSelector ) {
	return (
		this.findClosestCulture( cultureSelector ).messages[ key ]
		||
		this.cultures[ "default" ].messages[ "key" ]
	);
};

Globalize.parseDate = function( value, formats, culture ) {
	culture = this.findClosestCulture( culture );

	var date, prop, patterns;
	if ( formats ) {
		if ( typeof formats === "string" ) {
			formats = [ formats ];
		}
		if ( formats.length ) {
			for ( var i = 0, l = formats.length; i < l; i++ ) {
				var format = formats[ i ];
				if ( format ) {
					date = parseExact( value, format, culture );
					if ( date ) {
						break;
					}
				}
			}
		}
	} else {
		patterns = culture.calendar.patterns;
		for ( prop in patterns ) {
			date = parseExact( value, patterns[prop], culture );
			if ( date ) {
				break;
			}
		}
	}

	return date || null;
};

Globalize.parseInt = function( value, radix, cultureSelector ) {
	return Math.floor( Globalize.parseFloat(value, radix, cultureSelector) );
};

Globalize.parseFloat = function( value, radix, cultureSelector ) {
	// radix argument is optional
	if ( typeof radix !== "number" ) {
		cultureSelector = radix;
		radix = 10;
	}

	var culture = this.findClosestCulture( cultureSelector );
	var ret = NaN,
		nf = culture.numberFormat;

	if ( value.indexOf(culture.numberFormat.currency.symbol) > -1 ) {
		// remove currency symbol
		value = value.replace( culture.numberFormat.currency.symbol, "" );
		// replace decimal seperator
		value = value.replace( culture.numberFormat.currency["."], culture.numberFormat["."] );
	}

	// trim leading and trailing whitespace
	value = trim( value );

	// allow infinity or hexidecimal
	if ( regexInfinity.test(value) ) {
		ret = parseFloat( value );
	}
	else if ( !radix && regexHex.test(value) ) {
		ret = parseInt( value, 16 );
	}
	else {
		var signInfo = parseNegativePattern( value, nf, nf.pattern[0] ),
			sign = signInfo[ 0 ],
			num = signInfo[ 1 ];
		// determine sign and number
		if ( sign === "" && nf.pattern[0] !== "-n" ) {
			signInfo = parseNegativePattern( value, nf, "-n" );
			sign = signInfo[ 0 ];
			num = signInfo[ 1 ];
		}
		sign = sign || "+";
		// determine exponent and number
		var exponent,
			intAndFraction,
			exponentPos = num.indexOf( "e" );
		if ( exponentPos < 0 ) exponentPos = num.indexOf( "E" );
		if ( exponentPos < 0 ) {
			intAndFraction = num;
			exponent = null;
		}
		else {
			intAndFraction = num.substr( 0, exponentPos );
			exponent = num.substr( exponentPos + 1 );
		}
		// determine decimal position
		var integer,
			fraction,
			decSep = nf[ "." ],
			decimalPos = intAndFraction.indexOf( decSep );
		if ( decimalPos < 0 ) {
			integer = intAndFraction;
			fraction = null;
		}
		else {
			integer = intAndFraction.substr( 0, decimalPos );
			fraction = intAndFraction.substr( decimalPos + decSep.length );
		}
		// handle groups (e.g. 1,000,000)
		var groupSep = nf[ "," ];
		integer = integer.split( groupSep ).join( "" );
		var altGroupSep = groupSep.replace( /\u00A0/g, " " );
		if ( groupSep !== altGroupSep ) {
			integer = integer.split( altGroupSep ).join( "" );
		}
		// build a natively parsable number string
		var p = sign + integer;
		if ( fraction !== null ) {
			p += "." + fraction;
		}
		if ( exponent !== null ) {
			// exponent itself may have a number patternd
			var expSignInfo = parseNegativePattern( exponent, nf, "-n" );
			p += "e" + ( expSignInfo[0] || "+" ) + expSignInfo[ 1 ];
		}
		if ( regexParseFloat.test(p) ) {
			ret = parseFloat( p );
		}
	}
	return ret;
};

Globalize.culture = function( cultureSelector ) {
	// setter
	if ( typeof cultureSelector !== "undefined" ) {
		this.cultureSelector = cultureSelector;
	}
	// getter
	return this.findClosestCulture( cultureSelector ) || this.culture[ "default" ];
};

}( this ));

/*
 * Globalize Culture en-US
 *
 * http://github.com/jquery/globalize
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * This file was generated by the Globalize Culture Generator
 * Translation: bugs found in this file need to be fixed in the generator
 */

(function( window, undefined ) {

var Globalize;

if ( typeof require !== "undefined"
	&& typeof exports !== "undefined"
	&& typeof module !== "undefined" ) {
	// Assume CommonJS
	Globalize = require( "globalize" );
} else {
	// Global variable
	Globalize = window.Globalize;
}

Globalize.addCultureInfo( "en-US", "default", {
	englishName: "English (United States)"
});

}( this ));

/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var type;
            (function (type) {
                /**
                 * Module Double contains a set of constants and precision based utility methods
                 * for dealing with doubles and their decimal garbage in the javascript.
                 */
                var Double;
                (function (Double) {
                    // Constants.
                    Double.MIN_VALUE = -Number.MAX_VALUE;
                    Double.MAX_VALUE = Number.MAX_VALUE;
                    Double.MIN_EXP = -308;
                    Double.MAX_EXP = 308;
                    Double.EPSILON = 1E-323;
                    Double.DEFAULT_PRECISION = 0.0001;
                    Double.DEFAULT_PRECISION_IN_DECIMAL_DIGITS = 12;
                    Double.LOG_E_10 = Math.log(10);
                    Double.POSITIVE_POWERS = [
                        1E0, 1E1, 1E2, 1E3, 1E4, 1E5, 1E6, 1E7, 1E8, 1E9, 1E10, 1E11, 1E12, 1E13, 1E14, 1E15, 1E16, 1E17, 1E18, 1E19, 1E20, 1E21, 1E22, 1E23, 1E24, 1E25, 1E26, 1E27, 1E28, 1E29, 1E30, 1E31, 1E32, 1E33, 1E34, 1E35, 1E36, 1E37, 1E38, 1E39, 1E40, 1E41, 1E42, 1E43, 1E44, 1E45, 1E46, 1E47, 1E48, 1E49, 1E50, 1E51, 1E52, 1E53, 1E54, 1E55, 1E56, 1E57, 1E58, 1E59, 1E60, 1E61, 1E62, 1E63, 1E64, 1E65, 1E66, 1E67, 1E68, 1E69, 1E70, 1E71, 1E72, 1E73, 1E74, 1E75, 1E76, 1E77, 1E78, 1E79, 1E80, 1E81, 1E82, 1E83, 1E84, 1E85, 1E86, 1E87, 1E88, 1E89, 1E90, 1E91, 1E92, 1E93, 1E94, 1E95, 1E96, 1E97, 1E98, 1E99,
                        1E100, 1E101, 1E102, 1E103, 1E104, 1E105, 1E106, 1E107, 1E108, 1E109, 1E110, 1E111, 1E112, 1E113, 1E114, 1E115, 1E116, 1E117, 1E118, 1E119, 1E120, 1E121, 1E122, 1E123, 1E124, 1E125, 1E126, 1E127, 1E128, 1E129, 1E130, 1E131, 1E132, 1E133, 1E134, 1E135, 1E136, 1E137, 1E138, 1E139, 1E140, 1E141, 1E142, 1E143, 1E144, 1E145, 1E146, 1E147, 1E148, 1E149, 1E150, 1E151, 1E152, 1E153, 1E154, 1E155, 1E156, 1E157, 1E158, 1E159, 1E160, 1E161, 1E162, 1E163, 1E164, 1E165, 1E166, 1E167, 1E168, 1E169, 1E170, 1E171, 1E172, 1E173, 1E174, 1E175, 1E176, 1E177, 1E178, 1E179, 1E180, 1E181, 1E182, 1E183, 1E184, 1E185, 1E186, 1E187, 1E188, 1E189, 1E190, 1E191, 1E192, 1E193, 1E194, 1E195, 1E196, 1E197, 1E198, 1E199,
                        1E200, 1E201, 1E202, 1E203, 1E204, 1E205, 1E206, 1E207, 1E208, 1E209, 1E210, 1E211, 1E212, 1E213, 1E214, 1E215, 1E216, 1E217, 1E218, 1E219, 1E220, 1E221, 1E222, 1E223, 1E224, 1E225, 1E226, 1E227, 1E228, 1E229, 1E230, 1E231, 1E232, 1E233, 1E234, 1E235, 1E236, 1E237, 1E238, 1E239, 1E240, 1E241, 1E242, 1E243, 1E244, 1E245, 1E246, 1E247, 1E248, 1E249, 1E250, 1E251, 1E252, 1E253, 1E254, 1E255, 1E256, 1E257, 1E258, 1E259, 1E260, 1E261, 1E262, 1E263, 1E264, 1E265, 1E266, 1E267, 1E268, 1E269, 1E270, 1E271, 1E272, 1E273, 1E274, 1E275, 1E276, 1E277, 1E278, 1E279, 1E280, 1E281, 1E282, 1E283, 1E284, 1E285, 1E286, 1E287, 1E288, 1E289, 1E290, 1E291, 1E292, 1E293, 1E294, 1E295, 1E296, 1E297, 1E298, 1E299,
                        1E300, 1E301, 1E302, 1E303, 1E304, 1E305, 1E306, 1E307, 1E308
                    ];
                    Double.NEGATIVE_POWERS = [
                        1E0, 1E-1, 1E-2, 1E-3, 1E-4, 1E-5, 1E-6, 1E-7, 1E-8, 1E-9, 1E-10, 1E-11, 1E-12, 1E-13, 1E-14, 1E-15, 1E-16, 1E-17, 1E-18, 1E-19, 1E-20, 1E-21, 1E-22, 1E-23, 1E-24, 1E-25, 1E-26, 1E-27, 1E-28, 1E-29, 1E-30, 1E-31, 1E-32, 1E-33, 1E-34, 1E-35, 1E-36, 1E-37, 1E-38, 1E-39, 1E-40, 1E-41, 1E-42, 1E-43, 1E-44, 1E-45, 1E-46, 1E-47, 1E-48, 1E-49, 1E-50, 1E-51, 1E-52, 1E-53, 1E-54, 1E-55, 1E-56, 1E-57, 1E-58, 1E-59, 1E-60, 1E-61, 1E-62, 1E-63, 1E-64, 1E-65, 1E-66, 1E-67, 1E-68, 1E-69, 1E-70, 1E-71, 1E-72, 1E-73, 1E-74, 1E-75, 1E-76, 1E-77, 1E-78, 1E-79, 1E-80, 1E-81, 1E-82, 1E-83, 1E-84, 1E-85, 1E-86, 1E-87, 1E-88, 1E-89, 1E-90, 1E-91, 1E-92, 1E-93, 1E-94, 1E-95, 1E-96, 1E-97, 1E-98, 1E-99,
                        1E-100, 1E-101, 1E-102, 1E-103, 1E-104, 1E-105, 1E-106, 1E-107, 1E-108, 1E-109, 1E-110, 1E-111, 1E-112, 1E-113, 1E-114, 1E-115, 1E-116, 1E-117, 1E-118, 1E-119, 1E-120, 1E-121, 1E-122, 1E-123, 1E-124, 1E-125, 1E-126, 1E-127, 1E-128, 1E-129, 1E-130, 1E-131, 1E-132, 1E-133, 1E-134, 1E-135, 1E-136, 1E-137, 1E-138, 1E-139, 1E-140, 1E-141, 1E-142, 1E-143, 1E-144, 1E-145, 1E-146, 1E-147, 1E-148, 1E-149, 1E-150, 1E-151, 1E-152, 1E-153, 1E-154, 1E-155, 1E-156, 1E-157, 1E-158, 1E-159, 1E-160, 1E-161, 1E-162, 1E-163, 1E-164, 1E-165, 1E-166, 1E-167, 1E-168, 1E-169, 1E-170, 1E-171, 1E-172, 1E-173, 1E-174, 1E-175, 1E-176, 1E-177, 1E-178, 1E-179, 1E-180, 1E-181, 1E-182, 1E-183, 1E-184, 1E-185, 1E-186, 1E-187, 1E-188, 1E-189, 1E-190, 1E-191, 1E-192, 1E-193, 1E-194, 1E-195, 1E-196, 1E-197, 1E-198, 1E-199,
                        1E-200, 1E-201, 1E-202, 1E-203, 1E-204, 1E-205, 1E-206, 1E-207, 1E-208, 1E-209, 1E-210, 1E-211, 1E-212, 1E-213, 1E-214, 1E-215, 1E-216, 1E-217, 1E-218, 1E-219, 1E-220, 1E-221, 1E-222, 1E-223, 1E-224, 1E-225, 1E-226, 1E-227, 1E-228, 1E-229, 1E-230, 1E-231, 1E-232, 1E-233, 1E-234, 1E-235, 1E-236, 1E-237, 1E-238, 1E-239, 1E-240, 1E-241, 1E-242, 1E-243, 1E-244, 1E-245, 1E-246, 1E-247, 1E-248, 1E-249, 1E-250, 1E-251, 1E-252, 1E-253, 1E-254, 1E-255, 1E-256, 1E-257, 1E-258, 1E-259, 1E-260, 1E-261, 1E-262, 1E-263, 1E-264, 1E-265, 1E-266, 1E-267, 1E-268, 1E-269, 1E-270, 1E-271, 1E-272, 1E-273, 1E-274, 1E-275, 1E-276, 1E-277, 1E-278, 1E-279, 1E-280, 1E-281, 1E-282, 1E-283, 1E-284, 1E-285, 1E-286, 1E-287, 1E-288, 1E-289, 1E-290, 1E-291, 1E-292, 1E-293, 1E-294, 1E-295, 1E-296, 1E-297, 1E-298, 1E-299,
                        1E-300, 1E-301, 1E-302, 1E-303, 1E-304, 1E-305, 1E-306, 1E-307, 1E-308, 1E-309, 1E-310, 1E-311, 1E-312, 1E-313, 1E-314, 1E-315, 1E-316, 1E-317, 1E-318, 1E-319, 1E-320, 1E-321, 1E-322, 1E-323, 1E-324
                    ];
                    /**
                     * Returns powers of 10.
                     * Unlike the Math.pow this function produces no decimal garbage.
                     * @param exp Exponent.
                     */
                    function pow10(exp) {
                        // Positive & zero
                        if (exp >= 0) {
                            if (exp < Double.POSITIVE_POWERS.length) {
                                return Double.POSITIVE_POWERS[exp];
                            }
                            else {
                                return Infinity;
                            }
                        }
                        // Negative
                        exp = -exp;
                        if (exp > 0 && exp < Double.NEGATIVE_POWERS.length) {
                            return Double.NEGATIVE_POWERS[exp];
                        }
                        else {
                            return 0;
                        }
                    }
                    Double.pow10 = pow10;
                    /**
                     * Returns the 10 base logarithm of the number.
                     * Unlike Math.log function this produces integer results with no decimal garbage.
                     * @param val Positive value or zero.
                     */
                    function log10(val) {
                        // Fast Log10() algorithm
                        if (val > 1 && val < 1E16) {
                            if (val < 1E8) {
                                if (val < 1E4) {
                                    if (val < 1E2) {
                                        if (val < 1E1) {
                                            return 0;
                                        }
                                        else {
                                            return 1;
                                        }
                                    }
                                    else {
                                        if (val < 1E3) {
                                            return 2;
                                        }
                                        else {
                                            return 3;
                                        }
                                    }
                                }
                                else {
                                    if (val < 1E6) {
                                        if (val < 1E5) {
                                            return 4;
                                        }
                                        else {
                                            return 5;
                                        }
                                    }
                                    else {
                                        if (val < 1E7) {
                                            return 6;
                                        }
                                        else {
                                            return 7;
                                        }
                                    }
                                }
                            }
                            else {
                                if (val < 1E12) {
                                    if (val < 1E10) {
                                        if (val < 1E9) {
                                            return 8;
                                        }
                                        else {
                                            return 9;
                                        }
                                    }
                                    else {
                                        if (val < 1E11) {
                                            return 10;
                                        }
                                        else {
                                            return 11;
                                        }
                                    }
                                }
                                else {
                                    if (val < 1E14) {
                                        if (val < 1E13) {
                                            return 12;
                                        }
                                        else {
                                            return 13;
                                        }
                                    }
                                    else {
                                        if (val < 1E15) {
                                            return 14;
                                        }
                                        else {
                                            return 15;
                                        }
                                    }
                                }
                            }
                        }
                        if (val > 1E-16 && val < 1) {
                            if (val < 1E-8) {
                                if (val < 1E-12) {
                                    if (val < 1E-14) {
                                        if (val < 1E-15) {
                                            return -16;
                                        }
                                        else {
                                            return -15;
                                        }
                                    }
                                    else {
                                        if (val < 1E-13) {
                                            return -14;
                                        }
                                        else {
                                            return -13;
                                        }
                                    }
                                }
                                else {
                                    if (val < 1E-10) {
                                        if (val < 1E-11) {
                                            return -12;
                                        }
                                        else {
                                            return -11;
                                        }
                                    }
                                    else {
                                        if (val < 1E-9) {
                                            return -10;
                                        }
                                        else {
                                            return -9;
                                        }
                                    }
                                }
                            }
                            else {
                                if (val < 1E-4) {
                                    if (val < 1E-6) {
                                        if (val < 1E-7) {
                                            return -8;
                                        }
                                        else {
                                            return -7;
                                        }
                                    }
                                    else {
                                        if (val < 1E-5) {
                                            return -6;
                                        }
                                        else {
                                            return -5;
                                        }
                                    }
                                }
                                else {
                                    if (val < 1E-2) {
                                        if (val < 1E-3) {
                                            return -4;
                                        }
                                        else {
                                            return -3;
                                        }
                                    }
                                    else {
                                        if (val < 1E-1) {
                                            return -2;
                                        }
                                        else {
                                            return -1;
                                        }
                                    }
                                }
                            }
                        }
                        // JS Math provides only natural log function so we need to calc the 10 base logarithm:
                        // logb(x) = logk(x)/logk(b);
                        var log10 = Math.log(val) / Double.LOG_E_10;
                        return Double.floorWithPrecision(log10);
                    }
                    Double.log10 = log10;
                    /**
                     * Returns a power of 10 representing precision of the number based on the number of meaningful decimal digits.
                     * For example the precision of 56,263.3767 with the 6 meaningful decimal digit is 0.1.
                     * @param x Value.
                     * @param decimalDigits How many decimal digits are meaningfull.
                     */
                    function getPrecision(x, decimalDigits) {
                        if (decimalDigits === undefined) {
                            decimalDigits = Double.DEFAULT_PRECISION_IN_DECIMAL_DIGITS;
                        }
                        if (!x || !isFinite(x)) {
                            return undefined;
                        }
                        var exp = Double.log10(Math.abs(x));
                        if (exp < Double.MIN_EXP) {
                            return 0;
                        }
                        var precisionExp = Math.max(exp - decimalDigits, -Double.NEGATIVE_POWERS.length + 1);
                        return Double.pow10(precisionExp);
                    }
                    Double.getPrecision = getPrecision;
                    /**
                     * Checks if a delta between 2 numbers is less than provided precision.
                     * @param x One value.
                     * @param y Another value.
                     * @param precision Precision value.
                     */
                    function equalWithPrecision(x, y, precision) {
                        precision = detectPrecision(precision, x, y);
                        return x === y || Math.abs(x - y) < precision;
                    }
                    Double.equalWithPrecision = equalWithPrecision;
                    /**
                     * Checks if a first value is less than another taking
                     * into account the loose precision based equality.
                     * @param x One value.
                     * @param y Another value.
                     * @param precision Precision value.
                     */
                    function lessWithPrecision(x, y, precision) {
                        precision = detectPrecision(precision, x, y);
                        return x < y && Math.abs(x - y) > precision;
                    }
                    Double.lessWithPrecision = lessWithPrecision;
                    /**
                     * Checks if a first value is less or equal than another taking
                     * into account the loose precision based equality.
                     * @param x One value.
                     * @param y Another value.
                     * @param precision Precision value.
                     */
                    function lessOrEqualWithPrecision(x, y, precision) {
                        precision = detectPrecision(precision, x, y);
                        return x < y || Math.abs(x - y) < precision;
                    }
                    Double.lessOrEqualWithPrecision = lessOrEqualWithPrecision;
                    /**
                     * Checks if a first value is greater than another taking
                     * into account the loose precision based equality.
                     * @param x One value.
                     * @param y Another value.
                     * @param precision Precision value.
                     */
                    function greaterWithPrecision(x, y, precision) {
                        precision = detectPrecision(precision, x, y);
                        return x > y && Math.abs(x - y) > precision;
                    }
                    Double.greaterWithPrecision = greaterWithPrecision;
                    /**
                     * Checks if a first value is greater or equal to another taking
                     * into account the loose precision based equality.
                     * @param x One value.
                     * @param y Another value.
                     * @param precision Precision value.
                     */
                    function greaterOrEqualWithPrecision(x, y, precision) {
                        precision = detectPrecision(precision, x, y);
                        return x > y || Math.abs(x - y) < precision;
                    }
                    Double.greaterOrEqualWithPrecision = greaterOrEqualWithPrecision;
                    /**
                     * Floors the number unless it's withing the precision distance from the higher int.
                     * @param x One value.
                     * @param precision Precision value.
                     */
                    function floorWithPrecision(x, precision) {
                        precision = precision != null ? precision : Double.DEFAULT_PRECISION;
                        var roundX = Math.round(x);
                        if (Math.abs(x - roundX) < precision) {
                            return roundX;
                        }
                        else {
                            return Math.floor(x);
                        }
                    }
                    Double.floorWithPrecision = floorWithPrecision;
                    /**
                     * Ceils the number unless it's withing the precision distance from the lower int.
                     * @param x One value.
                     * @param precision Precision value.
                     */
                    function ceilWithPrecision(x, precision) {
                        precision = detectPrecision(precision, Double.DEFAULT_PRECISION);
                        var roundX = Math.round(x);
                        if (Math.abs(x - roundX) < precision) {
                            return roundX;
                        }
                        else {
                            return Math.ceil(x);
                        }
                    }
                    Double.ceilWithPrecision = ceilWithPrecision;
                    /**
                     * Floors the number to the provided precision.
                     * For example 234,578 floored to 1,000 precision is 234,000.
                     * @param x One value.
                     * @param precision Precision value.
                     */
                    function floorToPrecision(x, precision) {
                        precision = detectPrecision(precision, Double.DEFAULT_PRECISION);
                        if (precision === 0 || x === 0) {
                            return x;
                        }
                        // Precision must be a Power of 10
                        return Math.floor(x / precision) * precision;
                    }
                    Double.floorToPrecision = floorToPrecision;
                    /**
                     * Ceils the number to the provided precision.
                     * For example 234,578 floored to 1,000 precision is 235,000.
                     * @param x One value.
                     * @param precision Precision value.
                     */
                    function ceilToPrecision(x, precision) {
                        precision = detectPrecision(precision, Double.DEFAULT_PRECISION);
                        if (precision === 0 || x === 0) {
                            return x;
                        }
                        // Precision must be a Power of 10
                        return Math.ceil(x / precision) * precision;
                    }
                    Double.ceilToPrecision = ceilToPrecision;
                    /**
                     * Rounds the number to the provided precision.
                     * For example 234,578 floored to 1,000 precision is 235,000.
                     * @param x One value.
                     * @param precision Precision value.
                     */
                    function roundToPrecision(x, precision) {
                        precision = detectPrecision(precision, Double.DEFAULT_PRECISION);
                        if (precision === 0 || x === 0) {
                            return x;
                        }
                        // Precision must be a Power of 10
                        var result = Math.round(x / precision) * precision;
                        var decimalDigits = Math.round(Double.log10(Math.abs(x)) - Double.log10(precision)) + 1;
                        if (decimalDigits > 0 && decimalDigits < 16) {
                            result = parseFloat(result.toPrecision(decimalDigits));
                        }
                        return result;
                    }
                    Double.roundToPrecision = roundToPrecision;
                    /**
                     * Returns the value making sure that it's restricted to the provided range.
                     * @param x One value.
                     * @param min Range min boundary.
                     * @param max Range max boundary.
                     */
                    function ensureInRange(x, min, max) {
                        if (x === undefined || x === null) {
                            return x;
                        }
                        if (x < min) {
                            return min;
                        }
                        if (x > max) {
                            return max;
                        }
                        return x;
                    }
                    Double.ensureInRange = ensureInRange;
                    /**
                     * Rounds the value - this method is actually faster than Math.round - used in the graphics utils.
                     * @param x Value to round.
                     */
                    function round(x) {
                        return (0.5 + x) << 0;
                    }
                    Double.round = round;
                    /**
                     * Projects the value from the source range into the target range.
                     * @param value Value to project.
                     * @param fromMin Minimum of the source range.
                     * @param toMin Minimum of the target range.
                     * @param toMax Maximum of the target range.
                     */
                    function project(value, fromMin, fromSize, toMin, toSize) {
                        if (fromSize === 0 || toSize === 0) {
                            if (fromMin <= value && value <= fromMin + fromSize) {
                                return toMin;
                            }
                            else {
                                return NaN;
                            }
                        }
                        var relativeX = (value - fromMin) / fromSize;
                        var projectedX = toMin + relativeX * toSize;
                        return projectedX;
                    }
                    Double.project = project;
                    /**
                     * Removes decimal noise.
                     * @param value Value to be processed.
                     */
                    function removeDecimalNoise(value) {
                        return roundToPrecision(value, getPrecision(value));
                    }
                    Double.removeDecimalNoise = removeDecimalNoise;
                    /**
                     * Checks whether the number is integer.
                     * @param value Value to be checked.
                     */
                    function isInteger(value) {
                        return value !== null && value % 1 === 0;
                    }
                    Double.isInteger = isInteger;
                    /**
                     * Dividing by increment will give us count of increments
                     * Round out the rough edges into even integer
                     * Multiply back by increment to get rounded value
                     * e.g. Rounder.toIncrement(0.647291, 0.05) => 0.65
                     * @param value - value to round to nearest increment
                     * @param increment - smallest increment to round toward
                     */
                    function toIncrement(value, increment) {
                        return Math.round(value / increment) * increment;
                    }
                    Double.toIncrement = toIncrement;
                    /**
                     * Overrides the given precision with defaults if necessary. Exported only for tests
                     *
                     * precision defined returns precision
                     * x defined with y undefined returns twelve digits of precision based on x
                     * x defined but zero with y defined; returns twelve digits of precision based on y
                     * x and y defined retursn twelve digits of precision based on the minimum of the two
                     * if no applicable precision is found based on those (such as x and y being zero), the default precision is used
                     */
                    function detectPrecision(precision, x, y) {
                        if (precision !== undefined) {
                            return precision;
                        }
                        var calculatedPrecision;
                        if (!y) {
                            calculatedPrecision = Double.getPrecision(x);
                        }
                        else if (!x) {
                            calculatedPrecision = Double.getPrecision(y);
                        }
                        else {
                            calculatedPrecision = Double.getPrecision(Math.min(Math.abs(x), Math.abs(y)));
                        }
                        return calculatedPrecision || Double.DEFAULT_PRECISION;
                    }
                    Double.detectPrecision = detectPrecision;
                })(Double = type.Double || (type.Double = {}));
            })(type = utils.type || (utils.type = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var type;
            (function (type) {
                var Prototype;
                (function (Prototype) {
                    /**
                     * Returns a new object with the provided obj as its prototype.
                     */
                    function inherit(obj, extension) {
                        function wrapCtor() { }
                        wrapCtor.prototype = obj;
                        var inherited = new wrapCtor();
                        if (extension)
                            extension(inherited);
                        return inherited;
                    }
                    Prototype.inherit = inherit;
                    /**
                     * Returns a new object with the provided obj as its prototype
                     * if, and only if, the prototype has not been previously set
                     */
                    function inheritSingle(obj) {
                        var proto = Object.getPrototypeOf(obj);
                        if (proto === Object.prototype || proto === Array.prototype)
                            obj = inherit(obj);
                        return obj;
                    }
                    Prototype.inheritSingle = inheritSingle;
                    /**
                     * Uses the provided callback function to selectively replace contents in the provided array.
                     * @return A new array with those values overriden
                     * or undefined if no overrides are necessary.
                     */
                    function overrideArray(prototype, override) {
                        if (!prototype)
                            return;
                        var overwritten;
                        for (var i = 0, len = prototype.length; i < len; i++) {
                            var value = override(prototype[i]);
                            if (value) {
                                if (!overwritten)
                                    overwritten = inherit(prototype);
                                overwritten[i] = value;
                            }
                        }
                        return overwritten;
                    }
                    Prototype.overrideArray = overrideArray;
                })(Prototype = type.Prototype || (type.Prototype = {}));
            })(type = utils.type || (utils.type = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var type;
            (function (type) {
                var ArrayExtensions;
                (function (ArrayExtensions) {
                    /**
                     * Returns items that exist in target and other.
                     */
                    function intersect(target, other) {
                        var result = [];
                        for (var i = target.length - 1; i >= 0; --i) {
                            if (other.indexOf(target[i]) !== -1) {
                                result.push(target[i]);
                            }
                        }
                        return result;
                    }
                    ArrayExtensions.intersect = intersect;
                    /**
                     * Return elements exists in target but not exists in other.
                     */
                    function diff(target, other) {
                        var result = [];
                        for (var i = target.length - 1; i >= 0; --i) {
                            var value = target[i];
                            if (other.indexOf(value) === -1) {
                                result.push(value);
                            }
                        }
                        return result;
                    }
                    ArrayExtensions.diff = diff;
                    /**
                     * Return an array with only the distinct items in the source.
                     */
                    function distinct(source) {
                        var result = [];
                        for (var i = 0, len = source.length; i < len; i++) {
                            var value = source[i];
                            if (result.indexOf(value) === -1) {
                                result.push(value);
                            }
                        }
                        return result;
                    }
                    ArrayExtensions.distinct = distinct;
                    /**
                     * Pushes content of source onto target,
                     * for parts of course that do not already exist in target.
                     */
                    function union(target, source) {
                        for (var i = 0, len = source.length; i < len; ++i) {
                            unionSingle(target, source[i]);
                        }
                    }
                    ArrayExtensions.union = union;
                    /**
                     * Pushes value onto target, if value does not already exist in target.
                     */
                    function unionSingle(target, value) {
                        if (target.indexOf(value) < 0) {
                            target.push(value);
                        }
                    }
                    ArrayExtensions.unionSingle = unionSingle;
                    /**
                     * Returns an array with a range of items from source,
                     * including the startIndex & endIndex.
                     */
                    function range(source, startIndex, endIndex) {
                        var result = [];
                        for (var i = startIndex; i <= endIndex; ++i) {
                            result.push(source[i]);
                        }
                        return result;
                    }
                    ArrayExtensions.range = range;
                    /**
                     * Returns an array that includes items from source, up to the specified count.
                     */
                    function take(source, count) {
                        var result = [];
                        for (var i = 0; i < count; ++i) {
                            result.push(source[i]);
                        }
                        return result;
                    }
                    ArrayExtensions.take = take;
                    function copy(source) {
                        return take(source, source.length);
                    }
                    ArrayExtensions.copy = copy;
                    /**
                      * Returns a value indicating whether the arrays have the same values in the same sequence.
                      */
                    function sequenceEqual(left, right, comparison) {
                        // Normalize falsy to null
                        if (!left) {
                            left = null;
                        }
                        if (!right) {
                            right = null;
                        }
                        // T can be same as U, and it is possible for left and right to be the same array object...
                        if (left === right) {
                            return true;
                        }
                        if (!!left !== !!right) {
                            return false;
                        }
                        var len = left.length;
                        if (len !== right.length) {
                            return false;
                        }
                        var i = 0;
                        while (i < len && comparison(left[i], right[i])) {
                            ++i;
                        }
                        return i === len;
                    }
                    ArrayExtensions.sequenceEqual = sequenceEqual;
                    /**
                     * Returns null if the specified array is empty.
                     * Otherwise returns the specified array.
                     */
                    function emptyToNull(array) {
                        if (array && array.length === 0) {
                            return null;
                        }
                        return array;
                    }
                    ArrayExtensions.emptyToNull = emptyToNull;
                    function indexOf(array, predicate) {
                        for (var i = 0, len = array.length; i < len; ++i) {
                            if (predicate(array[i])) {
                                return i;
                            }
                        }
                        return -1;
                    }
                    ArrayExtensions.indexOf = indexOf;
                    /**
                     * Returns a copy of the array rotated by the specified offset.
                     */
                    function rotate(array, offset) {
                        if (offset === 0)
                            return array.slice();
                        var rotated = array.slice(offset);
                        Array.prototype.push.apply(rotated, array.slice(0, offset));
                        return rotated;
                    }
                    ArrayExtensions.rotate = rotate;
                    function createWithId() {
                        return extendWithId([]);
                    }
                    ArrayExtensions.createWithId = createWithId;
                    function extendWithId(array) {
                        var extended = array;
                        extended.withId = withId;
                        return extended;
                    }
                    ArrayExtensions.extendWithId = extendWithId;
                    /**
                     * Finds and returns the first item with a matching ID.
                     */
                    function findWithId(array, id) {
                        for (var i = 0, len = array.length; i < len; i++) {
                            var item = array[i];
                            if (item.id === id)
                                return item;
                        }
                    }
                    ArrayExtensions.findWithId = findWithId;
                    function withId(id) {
                        return ArrayExtensions.findWithId(this, id);
                    }
                    function createWithName() {
                        return extendWithName([]);
                    }
                    ArrayExtensions.createWithName = createWithName;
                    function extendWithName(array) {
                        var extended = array;
                        extended.withName = withName;
                        return extended;
                    }
                    ArrayExtensions.extendWithName = extendWithName;
                    function findItemWithName(array, name) {
                        var index = indexWithName(array, name);
                        if (index >= 0)
                            return array[index];
                    }
                    ArrayExtensions.findItemWithName = findItemWithName;
                    function indexWithName(array, name) {
                        for (var i = 0, len = array.length; i < len; i++) {
                            var item = array[i];
                            if (item.name === name)
                                return i;
                        }
                        return -1;
                    }
                    ArrayExtensions.indexWithName = indexWithName;
                    /**
                     * Inserts a number in sorted order into a list of numbers already in sorted order.
                     * @returns True if the item was added, false if it already existed.
                     */
                    function insertSorted(list, value) {
                        var len = list.length;
                        // NOTE: iterate backwards because incoming values tend to be sorted already.
                        for (var i = len - 1; i >= 0; i--) {
                            var diff_1 = list[i] - value;
                            if (diff_1 === 0)
                                return false;
                            if (diff_1 > 0)
                                continue;
                            // diff < 0
                            list.splice(i + 1, 0, value);
                            return true;
                        }
                        list.unshift(value);
                        return true;
                    }
                    ArrayExtensions.insertSorted = insertSorted;
                    /**
                     * Removes the first occurrence of a value from a list if it exists.
                     * @returns True if the value was removed, false if it did not exist in the list.
                     */
                    function removeFirst(list, value) {
                        var index = list.indexOf(value);
                        if (index < 0)
                            return false;
                        list.splice(index, 1);
                        return true;
                    }
                    ArrayExtensions.removeFirst = removeFirst;
                    /**
                     * Finds and returns the first item with a matching name.
                     */
                    function withName(name) {
                        var array = this;
                        return findItemWithName(array, name);
                    }
                    /**
                     * Deletes all items from the array.
                     */
                    function clear(array) {
                        if (!array)
                            return;
                        while (array.length > 0)
                            array.pop();
                    }
                    ArrayExtensions.clear = clear;
                    function isUndefinedOrEmpty(array) {
                        if (!array || array.length === 0) {
                            return true;
                        }
                        return false;
                    }
                    ArrayExtensions.isUndefinedOrEmpty = isUndefinedOrEmpty;
                    function swap(array, firstIndex, secondIndex) {
                        var temp = array[firstIndex];
                        array[firstIndex] = array[secondIndex];
                        array[secondIndex] = temp;
                    }
                    ArrayExtensions.swap = swap;
                    function isInArray(array, lookupItem, compareCallback) {
                        return array.some(function (item) { return compareCallback(item, lookupItem); });
                    }
                    ArrayExtensions.isInArray = isInArray;
                    /** Checks if the given object is an Array, and looking all the way up the prototype chain. */
                    function isArrayOrInheritedArray(obj) {
                        var nextPrototype = obj;
                        while (nextPrototype != null) {
                            if (Array.isArray(nextPrototype))
                                return true;
                            nextPrototype = Object.getPrototypeOf(nextPrototype);
                        }
                        return false;
                    }
                    ArrayExtensions.isArrayOrInheritedArray = isArrayOrInheritedArray;
                    /**
                     * Returns true if the specified values array is sorted in an order as determined by the specified compareFunction.
                     */
                    function isSorted(values, compareFunction) {
                        var ilen = values.length;
                        if (ilen >= 2) {
                            for (var i = 1; i < ilen; i++) {
                                if (compareFunction(values[i - 1], values[i]) > 0) {
                                    return false;
                                }
                            }
                        }
                        return true;
                    }
                    ArrayExtensions.isSorted = isSorted;
                    /**
                     * Returns true if the specified number values array is sorted in ascending order
                     * (or descending order if the specified descendingOrder is truthy).
                     */
                    function isSortedNumeric(values, descendingOrder) {
                        var compareFunction = descendingOrder ?
                            function (a, b) { return b - a; } :
                            function (a, b) { return a - b; };
                        return isSorted(values, compareFunction);
                    }
                    ArrayExtensions.isSortedNumeric = isSortedNumeric;
                    /**
                     * Ensures that the given T || T[] is in array form, either returning the array or
                     * converting single items into an array of length one.
                     */
                    function ensureArray(value) {
                        if (Array.isArray(value)) {
                            return value;
                        }
                        return [value];
                    }
                    ArrayExtensions.ensureArray = ensureArray;
                })(ArrayExtensions = type.ArrayExtensions || (type.ArrayExtensions = {}));
            })(type = utils.type || (utils.type = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var type;
            (function (type) {
                // NOTE: this file includes standalone utilities that should have no dependencies on external libraries, including jQuery.
                var Double = powerbi.extensibility.utils.type.Double;
                /**
                 * Extensions for Enumerations.
                 */
                var EnumExtensions;
                (function (EnumExtensions) {
                    /**
                     * Gets a value indicating whether the value has the bit flags set.
                     */
                    function hasFlag(value, flag) {
                        return (value & flag) === flag;
                    }
                    EnumExtensions.hasFlag = hasFlag;
                    /**
                     * Sets a value of a flag without modifying any other flags.
                     */
                    function setFlag(value, flag) {
                        return value |= flag;
                    }
                    EnumExtensions.setFlag = setFlag;
                    /**
                     * Resets a value of a flag without modifying any other flags.
                     */
                    function resetFlag(value, flag) {
                        return value &= ~flag;
                    }
                    EnumExtensions.resetFlag = resetFlag;
                    /**
                     * According to the TypeScript Handbook, this is safe to do.
                     */
                    function toString(enumType, value) {
                        return enumType[value];
                    }
                    EnumExtensions.toString = toString;
                    /**
                     * Returns the number of 1's in the specified value that is a set of binary bit flags.
                     */
                    function getBitCount(value) {
                        if (!Double.isInteger(value))
                            return 0;
                        var bitCount = 0;
                        var shiftingValue = value;
                        while (shiftingValue !== 0) {
                            if ((shiftingValue & 1) === 1) {
                                bitCount++;
                            }
                            shiftingValue = shiftingValue >>> 1;
                        }
                        return bitCount;
                    }
                    EnumExtensions.getBitCount = getBitCount;
                })(EnumExtensions = type.EnumExtensions || (type.EnumExtensions = {}));
            })(type = utils.type || (utils.type = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var type;
            (function (type) {
                var Double = powerbi.extensibility.utils.type.Double;
                var NumericSequenceRange = (function () {
                    function NumericSequenceRange() {
                    }
                    NumericSequenceRange.prototype._ensureIncludeZero = function () {
                        if (this.includeZero) {
                            // fixed min and max has higher priority than includeZero
                            if (this.min > 0 && !this.hasFixedMin) {
                                this.min = 0;
                            }
                            if (this.max < 0 && !this.hasFixedMax) {
                                this.max = 0;
                            }
                        }
                    };
                    NumericSequenceRange.prototype._ensureNotEmpty = function () {
                        if (this.min === this.max) {
                            if (!this.min) {
                                this.min = 0;
                                this.max = NumericSequenceRange.DEFAULT_MAX;
                                this.hasFixedMin = true;
                                this.hasFixedMax = true;
                            }
                            else {
                                // We are dealing with a single data value (includeZero is not set)
                                // In order to fix the range we need to extend it in both directions by half of the interval.
                                // Interval is calculated based on the number:
                                // 1. Integers below 10,000 are extended by 0.5: so the [2006-2006] empty range is extended to [2005.5-2006.5] range and the ForsedSingleStop=2006
                                // 2. Other numbers are extended by half of their power: [700,001-700,001] => [650,001-750,001] and the ForsedSingleStop=null as we want the intervals to be calculated to cover the range.
                                var value = this.min;
                                var exp = Double.log10(Math.abs(value));
                                var step = void 0;
                                if (exp >= 0 && exp < 4) {
                                    step = 0.5;
                                    this.forcedSingleStop = value;
                                }
                                else {
                                    step = Double.pow10(exp) / 2;
                                    this.forcedSingleStop = null;
                                }
                                this.min = value - step;
                                this.max = value + step;
                            }
                        }
                    };
                    NumericSequenceRange.prototype._ensureDirection = function () {
                        if (this.min > this.max) {
                            var temp = this.min;
                            this.min = this.max;
                            this.max = temp;
                        }
                    };
                    NumericSequenceRange.prototype.getSize = function () {
                        return this.max - this.min;
                    };
                    NumericSequenceRange.prototype.shrinkByStep = function (range, step) {
                        var oldCount = this.min / step;
                        var newCount = range.min / step;
                        var deltaCount = Math.floor(newCount - oldCount);
                        this.min += deltaCount * step;
                        oldCount = this.max / step;
                        newCount = range.max / step;
                        deltaCount = Math.ceil(newCount - oldCount);
                        this.max += deltaCount * step;
                    };
                    NumericSequenceRange.calculate = function (dataMin, dataMax, fixedMin, fixedMax, includeZero) {
                        var result = new NumericSequenceRange();
                        result.includeZero = includeZero ? true : false;
                        result.hasDataRange = ValueUtil.hasValue(dataMin) && ValueUtil.hasValue(dataMax);
                        result.hasFixedMin = ValueUtil.hasValue(fixedMin);
                        result.hasFixedMax = ValueUtil.hasValue(fixedMax);
                        dataMin = Double.ensureInRange(dataMin, NumericSequenceRange.MIN_SUPPORTED_DOUBLE, NumericSequenceRange.MAX_SUPPORTED_DOUBLE);
                        dataMax = Double.ensureInRange(dataMax, NumericSequenceRange.MIN_SUPPORTED_DOUBLE, NumericSequenceRange.MAX_SUPPORTED_DOUBLE);
                        // Calculate the range using the min, max, dataRange
                        if (result.hasFixedMin && result.hasFixedMax) {
                            result.min = fixedMin;
                            result.max = fixedMax;
                        }
                        else if (result.hasFixedMin) {
                            result.min = fixedMin;
                            result.max = dataMax > fixedMin ? dataMax : fixedMin;
                        }
                        else if (result.hasFixedMax) {
                            result.min = dataMin < fixedMax ? dataMin : fixedMax;
                            result.max = fixedMax;
                        }
                        else if (result.hasDataRange) {
                            result.min = dataMin;
                            result.max = dataMax;
                        }
                        else {
                            result.min = 0;
                            result.max = 0;
                        }
                        result._ensureIncludeZero();
                        result._ensureNotEmpty();
                        result._ensureDirection();
                        if (result.min === 0) {
                            result.hasFixedMin = true; // If the range starts from zero we should prevent extending the intervals into the negative range
                        }
                        else if (result.max === 0) {
                            result.hasFixedMax = true; // If the range ends at zero we should prevent extending the intervals into the positive range
                        }
                        return result;
                    };
                    NumericSequenceRange.calculateDataRange = function (dataMin, dataMax, includeZero) {
                        if (!ValueUtil.hasValue(dataMin) || !ValueUtil.hasValue(dataMax)) {
                            return NumericSequenceRange.calculateFixedRange(0, NumericSequenceRange.DEFAULT_MAX);
                        }
                        else {
                            return NumericSequenceRange.calculate(dataMin, dataMax, null, null, includeZero);
                        }
                    };
                    NumericSequenceRange.calculateFixedRange = function (fixedMin, fixedMax, includeZero) {
                        var result = new NumericSequenceRange();
                        result.hasDataRange = false;
                        result.includeZero = includeZero;
                        result.min = fixedMin;
                        result.max = fixedMax;
                        result._ensureIncludeZero();
                        result._ensureNotEmpty();
                        result._ensureDirection();
                        result.hasFixedMin = true;
                        result.hasFixedMax = true;
                        return result;
                    };
                    return NumericSequenceRange;
                }());
                NumericSequenceRange.DEFAULT_MAX = 10;
                NumericSequenceRange.MIN_SUPPORTED_DOUBLE = -1E307;
                NumericSequenceRange.MAX_SUPPORTED_DOUBLE = 1E307;
                type.NumericSequenceRange = NumericSequenceRange;
                /** Note: Exported for testability */
                var ValueUtil;
                (function (ValueUtil) {
                    function hasValue(value) {
                        return value !== undefined && value !== null;
                    }
                    ValueUtil.hasValue = hasValue;
                })(ValueUtil = type.ValueUtil || (type.ValueUtil = {}));
            })(type = utils.type || (utils.type = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var type;
            (function (type) {
                var Double = powerbi.extensibility.utils.type.Double;
                var NumericSequenceRange = powerbi.extensibility.utils.type.NumericSequenceRange;
                var NumericSequence = (function () {
                    function NumericSequence() {
                    }
                    NumericSequence.calculate = function (range, expectedCount, maxAllowedMargin, minPower, useZeroRefPoint, steps) {
                        var result = new NumericSequence();
                        if (expectedCount === undefined)
                            expectedCount = 10;
                        else
                            expectedCount = Double.ensureInRange(expectedCount, NumericSequence.MIN_COUNT, NumericSequence.MAX_COUNT);
                        if (minPower === undefined)
                            minPower = Double.MIN_EXP;
                        if (useZeroRefPoint === undefined)
                            useZeroRefPoint = false;
                        if (maxAllowedMargin === undefined)
                            maxAllowedMargin = 1;
                        if (steps === undefined)
                            steps = [1, 2, 5];
                        // Handle single stop case
                        if (range.forcedSingleStop) {
                            result.interval = range.getSize();
                            result.intervalOffset = result.interval - (range.forcedSingleStop - range.min);
                            result.min = range.min;
                            result.max = range.max;
                            result.sequence = [range.forcedSingleStop];
                            return result;
                        }
                        var interval = 0;
                        var min = 0;
                        var max = 9;
                        var canExtendMin = maxAllowedMargin > 0 && !range.hasFixedMin;
                        var canExtendMax = maxAllowedMargin > 0 && !range.hasFixedMax;
                        var size = range.getSize();
                        var exp = Double.log10(size);
                        // Account for Exp of steps
                        var stepExp = Double.log10(steps[0]);
                        exp = exp - stepExp;
                        // Account for MaxCount
                        var expectedCountExp = Double.log10(expectedCount);
                        exp = exp - expectedCountExp;
                        // Account for MinPower
                        exp = Math.max(exp, minPower - stepExp + 1);
                        var count = undefined;
                        // Create array of "good looking" numbers
                        if (interval !== 0) {
                            // If explicit interval is defined - use it instead of the steps array.
                            var power = Double.pow10(exp);
                            var roundMin = Double.floorToPrecision(range.min, power);
                            var roundMax = Double.ceilToPrecision(range.max, power);
                            var roundRange = NumericSequenceRange.calculateFixedRange(roundMin, roundMax);
                            roundRange.shrinkByStep(range, interval);
                            min = roundRange.min;
                            max = roundRange.max;
                            count = Math.floor(roundRange.getSize() / interval);
                        }
                        else {
                            // No interval defined -> find optimal interval
                            var dexp = void 0;
                            for (dexp = 0; dexp < 3; dexp++) {
                                var e = exp + dexp;
                                var power = Double.pow10(e);
                                var roundMin = Double.floorToPrecision(range.min, power);
                                var roundMax = Double.ceilToPrecision(range.max, power);
                                // Go throught the steps array looking for the smallest step that produces the right interval count.
                                var stepsCount = steps.length;
                                var stepPower = Double.pow10(e - 1);
                                for (var i = 0; i < stepsCount; i++) {
                                    var step = steps[i] * stepPower;
                                    var roundRange = NumericSequenceRange.calculateFixedRange(roundMin, roundMax, useZeroRefPoint);
                                    roundRange.shrinkByStep(range, step);
                                    // If the range is based on Data we might need to extend it to provide nice data margins.
                                    if (canExtendMin && range.min === roundRange.min && maxAllowedMargin >= 1)
                                        roundRange.min -= step;
                                    if (canExtendMax && range.max === roundRange.max && maxAllowedMargin >= 1)
                                        roundRange.max += step;
                                    // Count the intervals
                                    count = Double.ceilWithPrecision(roundRange.getSize() / step, Double.DEFAULT_PRECISION);
                                    if (count <= expectedCount || (dexp === 2 && i === stepsCount - 1) || (expectedCount === 1 && count === 2 && (step > range.getSize() || (range.min < 0 && range.max > 0 && step * 2 >= range.getSize())))) {
                                        interval = step;
                                        min = roundRange.min;
                                        max = roundRange.max;
                                        break;
                                    }
                                }
                                // Increase the scale power until the interval is found
                                if (interval !== 0)
                                    break;
                            }
                        }
                        // Avoid extreme count cases (>1000 ticks)
                        if (count > expectedCount * 32 || count > NumericSequence.MAX_COUNT) {
                            count = Math.min(expectedCount * 32, NumericSequence.MAX_COUNT);
                            interval = (max - min) / count;
                        }
                        result.min = min;
                        result.max = max;
                        result.interval = interval;
                        result.intervalOffset = min - range.min;
                        result.maxAllowedMargin = maxAllowedMargin;
                        result.canExtendMin = canExtendMin;
                        result.canExtendMax = canExtendMax;
                        // Fill in the Sequence
                        var precision = Double.getPrecision(interval, 0);
                        result.precision = precision;
                        var sequence = [];
                        var x = Double.roundToPrecision(min, precision);
                        sequence.push(x);
                        for (var i = 0; i < count; i++) {
                            x = Double.roundToPrecision(x + interval, precision);
                            sequence.push(x);
                        }
                        result.sequence = sequence;
                        result.trimMinMax(range.min, range.max);
                        return result;
                    };
                    /**
                     * Calculates the sequence of int numbers which are mapped to the multiples of the units grid.
                     * @min - The minimum of the range.
                     * @max - The maximum of the range.
                     * @maxCount - The max count of intervals.
                     * @steps - array of intervals.
                     */
                    NumericSequence.calculateUnits = function (min, max, maxCount, steps) {
                        // Initialization actions
                        maxCount = Double.ensureInRange(maxCount, NumericSequence.MIN_COUNT, NumericSequence.MAX_COUNT);
                        if (min === max) {
                            max = min + 1;
                        }
                        var stepCount = 0;
                        var step = 0;
                        // Calculate step
                        for (var i = 0; i < steps.length; i++) {
                            step = steps[i];
                            var maxStepCount = Double.ceilWithPrecision(max / step);
                            var minStepCount = Double.floorWithPrecision(min / step);
                            stepCount = maxStepCount - minStepCount;
                            if (stepCount <= maxCount) {
                                break;
                            }
                        }
                        // Calculate the offset
                        var offset = -min;
                        offset = offset % step;
                        // Create sequence
                        var result = new NumericSequence();
                        result.sequence = [];
                        for (var x = min + offset;; x += step) {
                            result.sequence.push(x);
                            if (x >= max)
                                break;
                        }
                        result.interval = step;
                        result.intervalOffset = offset;
                        result.min = result.sequence[0];
                        result.max = result.sequence[result.sequence.length - 1];
                        return result;
                    };
                    NumericSequence.prototype.trimMinMax = function (min, max) {
                        var minMargin = (min - this.min) / this.interval;
                        var maxMargin = (this.max - max) / this.interval;
                        var marginPrecision = 0.001;
                        if (!this.canExtendMin || (minMargin > this.maxAllowedMargin && minMargin > marginPrecision)) {
                            this.min = min;
                        }
                        if (!this.canExtendMax || (maxMargin > this.maxAllowedMargin && maxMargin > marginPrecision)) {
                            this.max = max;
                        }
                    };
                    return NumericSequence;
                }());
                NumericSequence.MIN_COUNT = 1;
                NumericSequence.MAX_COUNT = 1000;
                type.NumericSequence = NumericSequence;
            })(type = utils.type || (utils.type = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var type;
            (function (type) {
                var PixelConverter;
                (function (PixelConverter) {
                    var PxPtRatio = 4 / 3;
                    var PixelString = "px";
                    /**
                     * Appends 'px' to the end of number value for use as pixel string in styles
                     */
                    function toString(px) {
                        return px + PixelString;
                    }
                    PixelConverter.toString = toString;
                    /**
                     * Converts point value (pt) to pixels
                     * Returns a string for font-size property
                     * e.g. fromPoint(8) => '24px'
                     */
                    function fromPoint(pt) {
                        return toString(fromPointToPixel(pt));
                    }
                    PixelConverter.fromPoint = fromPoint;
                    /**
                     * Converts point value (pt) to pixels
                     * Returns a number for font-size property
                     * e.g. fromPoint(8) => 24px
                     */
                    function fromPointToPixel(pt) {
                        return (PxPtRatio * pt);
                    }
                    PixelConverter.fromPointToPixel = fromPointToPixel;
                    /**
                     * Converts pixel value (px) to pt
                     * e.g. toPoint(24) => 8
                     */
                    function toPoint(px) {
                        return px / PxPtRatio;
                    }
                    PixelConverter.toPoint = toPoint;
                })(PixelConverter = type.PixelConverter || (type.PixelConverter = {}));
            })(type = utils.type || (utils.type = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var type;
            (function (type) {
                // NOTE: this file includes standalone utilities that should have no dependencies on external libraries, including jQuery.
                var RegExpExtensions;
                (function (RegExpExtensions) {
                    /**
                     * Runs exec on regex starting from 0 index
                     * This is the expected behavior but RegExp actually remember
                     * the last index they stopped at (found match at) and will
                     * return unexpected results when run in sequence.
                     * @param regex - regular expression object
                     * @param value - string to search wiht regex
                     * @param start - index within value to start regex
                     */
                    function run(regex, value, start) {
                        regex.lastIndex = start || 0;
                        return regex.exec(value);
                    }
                    RegExpExtensions.run = run;
                })(RegExpExtensions = type.RegExpExtensions || (type.RegExpExtensions = {}));
            })(type = utils.type || (utils.type = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var type;
            (function (type) {
                /**
                 * Extensions to String class.
                 */
                var StringExtensions;
                (function (StringExtensions) {
                    /**
                     * Checks if a string ends with a sub-string.
                     */
                    function endsWith(str, suffix) {
                        return str.indexOf(suffix, str.length - suffix.length) !== -1;
                    }
                    StringExtensions.endsWith = endsWith;
                })(StringExtensions = type.StringExtensions || (type.StringExtensions = {}));
            })(type = utils.type || (utils.type = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var type;
            (function (type) {
                // NOTE: this file includes standalone utilities that should have no dependencies on external libraries, including jQuery.
                var LogicExtensions;
                (function (LogicExtensions) {
                    function XOR(a, b) {
                        return (a || b) && !(a && b);
                    }
                    LogicExtensions.XOR = XOR;
                })(LogicExtensions = type.LogicExtensions || (type.LogicExtensions = {}));
            })(type = utils.type || (utils.type = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var type;
            (function (type) {
                // NOTE: this file includes standalone utilities that should have no dependencies on external libraries, including jQuery.
                var JsonComparer;
                (function (JsonComparer) {
                    /**
                     * Performs JSON-style comparison of two objects.
                     */
                    function equals(x, y) {
                        if (x === y)
                            return true;
                        return JSON.stringify(x) === JSON.stringify(y);
                    }
                    JsonComparer.equals = equals;
                })(JsonComparer = type.JsonComparer || (type.JsonComparer = {}));
            })(type = utils.type || (utils.type = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var type;
            (function (type) {
                // NOTE: this file includes standalone utilities that should have no dependencies on external libraries, including jQuery.
                /**
                 * Values are in terms of 'pt'
                 * Convert to pixels using PixelConverter.fromPoint
                 */
                var TextSizeDefaults;
                (function (TextSizeDefaults) {
                    /**
                     * Stored in terms of 'pt'
                     * Convert to pixels using PixelConverter.fromPoint
                     */
                    TextSizeDefaults.TextSizeMin = 8;
                    /**
                     * Stored in terms of 'pt'
                     * Convert to pixels using PixelConverter.fromPoint
                     */
                    TextSizeDefaults.TextSizeMax = 40;
                    var TextSizeRange = TextSizeDefaults.TextSizeMax - TextSizeDefaults.TextSizeMin;
                    /**
                     * Returns the percentage of this value relative to the TextSizeMax
                     * @param textSize - should be given in terms of 'pt'
                     */
                    function getScale(textSize) {
                        return (textSize - TextSizeDefaults.TextSizeMin) / TextSizeRange;
                    }
                    TextSizeDefaults.getScale = getScale;
                })(TextSizeDefaults = type.TextSizeDefaults || (type.TextSizeDefaults = {}));
            })(type = utils.type || (utils.type = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var type;
            (function (type) {
                // powerbi.extensibility.utils.type
                var EnumExtensions = powerbi.extensibility.utils.type.EnumExtensions;
                /** Describes a data value type, including a primitive type and extended type if any (derived from data category). */
                var ValueType = (function () {
                    /** Do not call the ValueType constructor directly. Use the ValueType.fromXXX methods. */
                    function ValueType(underlyingType, category, enumType, variantTypes) {
                        this.underlyingType = underlyingType;
                        this.category = category;
                        if (EnumExtensions.hasFlag(underlyingType, ExtendedType.Temporal)) {
                            this.temporalType = new TemporalType(underlyingType);
                        }
                        if (EnumExtensions.hasFlag(underlyingType, ExtendedType.Geography)) {
                            this.geographyType = new GeographyType(underlyingType);
                        }
                        if (EnumExtensions.hasFlag(underlyingType, ExtendedType.Miscellaneous)) {
                            this.miscType = new MiscellaneousType(underlyingType);
                        }
                        if (EnumExtensions.hasFlag(underlyingType, ExtendedType.Formatting)) {
                            this.formattingType = new FormattingType(underlyingType);
                        }
                        if (EnumExtensions.hasFlag(underlyingType, ExtendedType.Enumeration)) {
                            this.enumType = enumType;
                        }
                        if (EnumExtensions.hasFlag(underlyingType, ExtendedType.Scripting)) {
                            this.scriptingType = new ScriptType(underlyingType);
                        }
                        if (EnumExtensions.hasFlag(underlyingType, ExtendedType.Variant)) {
                            this.variationTypes = variantTypes;
                        }
                    }
                    /** Creates or retrieves a ValueType object based on the specified ValueTypeDescriptor. */
                    ValueType.fromDescriptor = function (descriptor) {
                        descriptor = descriptor || {};
                        // Simplified primitive types
                        if (descriptor.text)
                            return ValueType.fromExtendedType(ExtendedType.Text);
                        if (descriptor.integer)
                            return ValueType.fromExtendedType(ExtendedType.Integer);
                        if (descriptor.numeric)
                            return ValueType.fromExtendedType(ExtendedType.Double);
                        if (descriptor.bool)
                            return ValueType.fromExtendedType(ExtendedType.Boolean);
                        if (descriptor.dateTime)
                            return ValueType.fromExtendedType(ExtendedType.DateTime);
                        if (descriptor.duration)
                            return ValueType.fromExtendedType(ExtendedType.Duration);
                        if (descriptor.binary)
                            return ValueType.fromExtendedType(ExtendedType.Binary);
                        if (descriptor.none)
                            return ValueType.fromExtendedType(ExtendedType.None);
                        // Extended types
                        if (descriptor.scripting) {
                            if (descriptor.scripting.source)
                                return ValueType.fromExtendedType(ExtendedType.ScriptSource);
                        }
                        if (descriptor.enumeration)
                            return ValueType.fromEnum(descriptor.enumeration);
                        if (descriptor.temporal) {
                            if (descriptor.temporal.year)
                                return ValueType.fromExtendedType(ExtendedType.Years_Integer);
                            if (descriptor.temporal.quarter)
                                return ValueType.fromExtendedType(ExtendedType.Quarters_Integer);
                            if (descriptor.temporal.month)
                                return ValueType.fromExtendedType(ExtendedType.Months_Integer);
                            if (descriptor.temporal.day)
                                return ValueType.fromExtendedType(ExtendedType.DayOfMonth_Integer);
                            if (descriptor.temporal.paddedDateTableDate)
                                return ValueType.fromExtendedType(ExtendedType.PaddedDateTableDates);
                        }
                        if (descriptor.geography) {
                            if (descriptor.geography.address)
                                return ValueType.fromExtendedType(ExtendedType.Address);
                            if (descriptor.geography.city)
                                return ValueType.fromExtendedType(ExtendedType.City);
                            if (descriptor.geography.continent)
                                return ValueType.fromExtendedType(ExtendedType.Continent);
                            if (descriptor.geography.country)
                                return ValueType.fromExtendedType(ExtendedType.Country);
                            if (descriptor.geography.county)
                                return ValueType.fromExtendedType(ExtendedType.County);
                            if (descriptor.geography.region)
                                return ValueType.fromExtendedType(ExtendedType.Region);
                            if (descriptor.geography.postalCode)
                                return ValueType.fromExtendedType(ExtendedType.PostalCode_Text);
                            if (descriptor.geography.stateOrProvince)
                                return ValueType.fromExtendedType(ExtendedType.StateOrProvince);
                            if (descriptor.geography.place)
                                return ValueType.fromExtendedType(ExtendedType.Place);
                            if (descriptor.geography.latitude)
                                return ValueType.fromExtendedType(ExtendedType.Latitude_Double);
                            if (descriptor.geography.longitude)
                                return ValueType.fromExtendedType(ExtendedType.Longitude_Double);
                        }
                        if (descriptor.misc) {
                            if (descriptor.misc.image)
                                return ValueType.fromExtendedType(ExtendedType.Image);
                            if (descriptor.misc.imageUrl)
                                return ValueType.fromExtendedType(ExtendedType.ImageUrl);
                            if (descriptor.misc.webUrl)
                                return ValueType.fromExtendedType(ExtendedType.WebUrl);
                            if (descriptor.misc.barcode)
                                return ValueType.fromExtendedType(ExtendedType.Barcode_Text);
                        }
                        if (descriptor.formatting) {
                            if (descriptor.formatting.color)
                                return ValueType.fromExtendedType(ExtendedType.Color);
                            if (descriptor.formatting.formatString)
                                return ValueType.fromExtendedType(ExtendedType.FormatString);
                            if (descriptor.formatting.alignment)
                                return ValueType.fromExtendedType(ExtendedType.Alignment);
                            if (descriptor.formatting.labelDisplayUnits)
                                return ValueType.fromExtendedType(ExtendedType.LabelDisplayUnits);
                            if (descriptor.formatting.fontSize)
                                return ValueType.fromExtendedType(ExtendedType.FontSize);
                            if (descriptor.formatting.labelDensity)
                                return ValueType.fromExtendedType(ExtendedType.LabelDensity);
                        }
                        if (descriptor.extendedType) {
                            return ValueType.fromExtendedType(descriptor.extendedType);
                        }
                        if (descriptor.operations) {
                            if (descriptor.operations.searchEnabled)
                                return ValueType.fromExtendedType(ExtendedType.SearchEnabled);
                        }
                        if (descriptor.variant) {
                            var variantTypes = descriptor.variant.map(function (variantType) { return ValueType.fromDescriptor(variantType); });
                            return ValueType.fromVariant(variantTypes);
                        }
                        return ValueType.fromExtendedType(ExtendedType.Null);
                    };
                    /** Advanced: Generally use fromDescriptor instead. Creates or retrieves a ValueType object for the specified ExtendedType. */
                    ValueType.fromExtendedType = function (extendedType) {
                        extendedType = extendedType || ExtendedType.Null;
                        var primitiveType = getPrimitiveType(extendedType), category = getCategoryFromExtendedType(extendedType);
                        return ValueType.fromPrimitiveTypeAndCategory(primitiveType, category);
                    };
                    /** Creates or retrieves a ValueType object for the specified PrimitiveType and data category. */
                    ValueType.fromPrimitiveTypeAndCategory = function (primitiveType, category) {
                        primitiveType = primitiveType || PrimitiveType.Null;
                        category = category || null;
                        var id = primitiveType.toString();
                        if (category)
                            id += "|" + category;
                        return ValueType.typeCache[id] || (ValueType.typeCache[id] = new ValueType(toExtendedType(primitiveType, category), category));
                    };
                    /** Creates a ValueType to describe the given IEnumType. */
                    ValueType.fromEnum = function (enumType) {
                        return new ValueType(ExtendedType.Enumeration, null, enumType);
                    };
                    /** Creates a ValueType to describe the given Variant type. */
                    ValueType.fromVariant = function (variantTypes) {
                        return new ValueType(ExtendedType.Variant, /* category */ null, /* enumType */ null, variantTypes);
                    };
                    /** Determines if the specified type is compatible from at least one of the otherTypes. */
                    ValueType.isCompatibleTo = function (typeDescriptor, otherTypes) {
                        var valueType = ValueType.fromDescriptor(typeDescriptor);
                        for (var _i = 0, otherTypes_1 = otherTypes; _i < otherTypes_1.length; _i++) {
                            var otherType = otherTypes_1[_i];
                            var otherValueType = ValueType.fromDescriptor(otherType);
                            if (otherValueType.isCompatibleFrom(valueType))
                                return true;
                        }
                        return false;
                    };
                    /** Determines if the instance ValueType is convertable from the 'other' ValueType. */
                    ValueType.prototype.isCompatibleFrom = function (other) {
                        var otherPrimitiveType = other.primitiveType;
                        if (this === other ||
                            this.primitiveType === otherPrimitiveType ||
                            otherPrimitiveType === PrimitiveType.Null ||
                            // Return true if both types are numbers
                            (this.numeric && other.numeric))
                            return true;
                        return false;
                    };
                    /**
                     * Determines if the instance ValueType is equal to the 'other' ValueType
                     * @param {ValueType} other the other ValueType to check equality against
                     * @returns True if the instance ValueType is equal to the 'other' ValueType
                     */
                    ValueType.prototype.equals = function (other) {
                        return type.JsonComparer.equals(this, other);
                    };
                    Object.defineProperty(ValueType.prototype, "primitiveType", {
                        /** Gets the exact primitive type of this ValueType. */
                        get: function () {
                            return getPrimitiveType(this.underlyingType);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(ValueType.prototype, "extendedType", {
                        /** Gets the exact extended type of this ValueType. */
                        get: function () {
                            return this.underlyingType;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(ValueType.prototype, "categoryString", {
                        /** Gets the data category string (if any) for this ValueType. */
                        get: function () {
                            return this.category;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(ValueType.prototype, "text", {
                        // Simplified primitive types
                        /** Indicates whether the type represents text values. */
                        get: function () {
                            return this.primitiveType === PrimitiveType.Text;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(ValueType.prototype, "numeric", {
                        /** Indicates whether the type represents any numeric value. */
                        get: function () {
                            return EnumExtensions.hasFlag(this.underlyingType, ExtendedType.Numeric);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(ValueType.prototype, "integer", {
                        /** Indicates whether the type represents integer numeric values. */
                        get: function () {
                            return this.primitiveType === PrimitiveType.Integer;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(ValueType.prototype, "bool", {
                        /** Indicates whether the type represents Boolean values. */
                        get: function () {
                            return this.primitiveType === PrimitiveType.Boolean;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(ValueType.prototype, "dateTime", {
                        /** Indicates whether the type represents any date/time values. */
                        get: function () {
                            return this.primitiveType === PrimitiveType.DateTime ||
                                this.primitiveType === PrimitiveType.Date ||
                                this.primitiveType === PrimitiveType.Time;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(ValueType.prototype, "duration", {
                        /** Indicates whether the type represents duration values. */
                        get: function () {
                            return this.primitiveType === PrimitiveType.Duration;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(ValueType.prototype, "binary", {
                        /** Indicates whether the type represents binary values. */
                        get: function () {
                            return this.primitiveType === PrimitiveType.Binary;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(ValueType.prototype, "none", {
                        /** Indicates whether the type represents none values. */
                        get: function () {
                            return this.primitiveType === PrimitiveType.None;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(ValueType.prototype, "temporal", {
                        // Extended types
                        /** Returns an object describing temporal values represented by the type, if it represents a temporal type. */
                        get: function () {
                            return this.temporalType;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(ValueType.prototype, "geography", {
                        /** Returns an object describing geographic values represented by the type, if it represents a geographic type. */
                        get: function () {
                            return this.geographyType;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(ValueType.prototype, "misc", {
                        /** Returns an object describing the specific values represented by the type, if it represents a miscellaneous extended type. */
                        get: function () {
                            return this.miscType;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(ValueType.prototype, "formatting", {
                        /** Returns an object describing the formatting values represented by the type, if it represents a formatting type. */
                        get: function () {
                            return this.formattingType;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(ValueType.prototype, "enumeration", {
                        /** Returns an object describing the enum values represented by the type, if it represents an enumeration type. */
                        get: function () {
                            return this.enumType;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(ValueType.prototype, "scripting", {
                        get: function () {
                            return this.scriptingType;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(ValueType.prototype, "variant", {
                        /** Returns an array describing the variant values represented by the type, if it represents an Variant type. */
                        get: function () {
                            return this.variationTypes;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    return ValueType;
                }());
                ValueType.typeCache = {};
                type.ValueType = ValueType;
                var ScriptType = (function () {
                    function ScriptType(underlyingType) {
                        this.underlyingType = underlyingType;
                    }
                    Object.defineProperty(ScriptType.prototype, "source", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.ScriptSource);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    return ScriptType;
                }());
                type.ScriptType = ScriptType;
                var TemporalType = (function () {
                    function TemporalType(underlyingType) {
                        this.underlyingType = underlyingType;
                    }
                    Object.defineProperty(TemporalType.prototype, "year", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Years);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(TemporalType.prototype, "quarter", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Quarters);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(TemporalType.prototype, "month", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Months);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(TemporalType.prototype, "day", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.DayOfMonth);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(TemporalType.prototype, "paddedDateTableDate", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.PaddedDateTableDates);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    return TemporalType;
                }());
                type.TemporalType = TemporalType;
                var GeographyType = (function () {
                    function GeographyType(underlyingType) {
                        this.underlyingType = underlyingType;
                    }
                    Object.defineProperty(GeographyType.prototype, "address", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Address);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(GeographyType.prototype, "city", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.City);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(GeographyType.prototype, "continent", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Continent);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(GeographyType.prototype, "country", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Country);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(GeographyType.prototype, "county", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.County);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(GeographyType.prototype, "region", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Region);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(GeographyType.prototype, "postalCode", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.PostalCode);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(GeographyType.prototype, "stateOrProvince", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.StateOrProvince);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(GeographyType.prototype, "place", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Place);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(GeographyType.prototype, "latitude", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Latitude);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(GeographyType.prototype, "longitude", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Longitude);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    return GeographyType;
                }());
                type.GeographyType = GeographyType;
                var MiscellaneousType = (function () {
                    function MiscellaneousType(underlyingType) {
                        this.underlyingType = underlyingType;
                    }
                    Object.defineProperty(MiscellaneousType.prototype, "image", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Image);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(MiscellaneousType.prototype, "imageUrl", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.ImageUrl);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(MiscellaneousType.prototype, "webUrl", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.WebUrl);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(MiscellaneousType.prototype, "barcode", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Barcode);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    return MiscellaneousType;
                }());
                type.MiscellaneousType = MiscellaneousType;
                var FormattingType = (function () {
                    function FormattingType(underlyingType) {
                        this.underlyingType = underlyingType;
                    }
                    Object.defineProperty(FormattingType.prototype, "color", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Color);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(FormattingType.prototype, "formatString", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.FormatString);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(FormattingType.prototype, "alignment", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Alignment);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(FormattingType.prototype, "labelDisplayUnits", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.LabelDisplayUnits);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(FormattingType.prototype, "fontSize", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.FontSize);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(FormattingType.prototype, "labelDensity", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.LabelDensity);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    return FormattingType;
                }());
                type.FormattingType = FormattingType;
                /** Defines primitive value types. Must be consistent with types defined by server conceptual schema. */
                var PrimitiveType;
                (function (PrimitiveType) {
                    PrimitiveType[PrimitiveType["Null"] = 0] = "Null";
                    PrimitiveType[PrimitiveType["Text"] = 1] = "Text";
                    PrimitiveType[PrimitiveType["Decimal"] = 2] = "Decimal";
                    PrimitiveType[PrimitiveType["Double"] = 3] = "Double";
                    PrimitiveType[PrimitiveType["Integer"] = 4] = "Integer";
                    PrimitiveType[PrimitiveType["Boolean"] = 5] = "Boolean";
                    PrimitiveType[PrimitiveType["Date"] = 6] = "Date";
                    PrimitiveType[PrimitiveType["DateTime"] = 7] = "DateTime";
                    PrimitiveType[PrimitiveType["DateTimeZone"] = 8] = "DateTimeZone";
                    PrimitiveType[PrimitiveType["Time"] = 9] = "Time";
                    PrimitiveType[PrimitiveType["Duration"] = 10] = "Duration";
                    PrimitiveType[PrimitiveType["Binary"] = 11] = "Binary";
                    PrimitiveType[PrimitiveType["None"] = 12] = "None";
                    PrimitiveType[PrimitiveType["Variant"] = 13] = "Variant";
                })(PrimitiveType = type.PrimitiveType || (type.PrimitiveType = {}));
                var PrimitiveTypeStrings;
                (function (PrimitiveTypeStrings) {
                    PrimitiveTypeStrings[PrimitiveTypeStrings["Null"] = 0] = "Null";
                    PrimitiveTypeStrings[PrimitiveTypeStrings["Text"] = 1] = "Text";
                    PrimitiveTypeStrings[PrimitiveTypeStrings["Decimal"] = 2] = "Decimal";
                    PrimitiveTypeStrings[PrimitiveTypeStrings["Double"] = 3] = "Double";
                    PrimitiveTypeStrings[PrimitiveTypeStrings["Integer"] = 4] = "Integer";
                    PrimitiveTypeStrings[PrimitiveTypeStrings["Boolean"] = 5] = "Boolean";
                    PrimitiveTypeStrings[PrimitiveTypeStrings["Date"] = 6] = "Date";
                    PrimitiveTypeStrings[PrimitiveTypeStrings["DateTime"] = 7] = "DateTime";
                    PrimitiveTypeStrings[PrimitiveTypeStrings["DateTimeZone"] = 8] = "DateTimeZone";
                    PrimitiveTypeStrings[PrimitiveTypeStrings["Time"] = 9] = "Time";
                    PrimitiveTypeStrings[PrimitiveTypeStrings["Duration"] = 10] = "Duration";
                    PrimitiveTypeStrings[PrimitiveTypeStrings["Binary"] = 11] = "Binary";
                    PrimitiveTypeStrings[PrimitiveTypeStrings["None"] = 12] = "None";
                    PrimitiveTypeStrings[PrimitiveTypeStrings["Variant"] = 13] = "Variant";
                })(PrimitiveTypeStrings || (PrimitiveTypeStrings = {}));
                /** Defines extended value types, which include primitive types and known data categories constrained to expected primitive types. */
                var ExtendedType;
                (function (ExtendedType) {
                    // Flags (1 << 8-15 range [0xFF00])
                    // Important: Enum members must be declared before they are used in TypeScript.
                    ExtendedType[ExtendedType["Numeric"] = 256] = "Numeric";
                    ExtendedType[ExtendedType["Temporal"] = 512] = "Temporal";
                    ExtendedType[ExtendedType["Geography"] = 1024] = "Geography";
                    ExtendedType[ExtendedType["Miscellaneous"] = 2048] = "Miscellaneous";
                    ExtendedType[ExtendedType["Formatting"] = 4096] = "Formatting";
                    ExtendedType[ExtendedType["Scripting"] = 8192] = "Scripting";
                    // Primitive types (0-255 range [0xFF] | flags)
                    // The member names and base values must match those in PrimitiveType.
                    ExtendedType[ExtendedType["Null"] = 0] = "Null";
                    ExtendedType[ExtendedType["Text"] = 1] = "Text";
                    ExtendedType[ExtendedType["Decimal"] = 258] = "Decimal";
                    ExtendedType[ExtendedType["Double"] = 259] = "Double";
                    ExtendedType[ExtendedType["Integer"] = 260] = "Integer";
                    ExtendedType[ExtendedType["Boolean"] = 5] = "Boolean";
                    ExtendedType[ExtendedType["Date"] = 518] = "Date";
                    ExtendedType[ExtendedType["DateTime"] = 519] = "DateTime";
                    ExtendedType[ExtendedType["DateTimeZone"] = 520] = "DateTimeZone";
                    ExtendedType[ExtendedType["Time"] = 521] = "Time";
                    ExtendedType[ExtendedType["Duration"] = 10] = "Duration";
                    ExtendedType[ExtendedType["Binary"] = 11] = "Binary";
                    ExtendedType[ExtendedType["None"] = 12] = "None";
                    ExtendedType[ExtendedType["Variant"] = 13] = "Variant";
                    // Extended types (0-32767 << 16 range [0xFFFF0000] | corresponding primitive type | flags)
                    // Temporal
                    ExtendedType[ExtendedType["Years"] = 66048] = "Years";
                    ExtendedType[ExtendedType["Years_Text"] = 66049] = "Years_Text";
                    ExtendedType[ExtendedType["Years_Integer"] = 66308] = "Years_Integer";
                    ExtendedType[ExtendedType["Years_Date"] = 66054] = "Years_Date";
                    ExtendedType[ExtendedType["Years_DateTime"] = 66055] = "Years_DateTime";
                    ExtendedType[ExtendedType["Months"] = 131584] = "Months";
                    ExtendedType[ExtendedType["Months_Text"] = 131585] = "Months_Text";
                    ExtendedType[ExtendedType["Months_Integer"] = 131844] = "Months_Integer";
                    ExtendedType[ExtendedType["Months_Date"] = 131590] = "Months_Date";
                    ExtendedType[ExtendedType["Months_DateTime"] = 131591] = "Months_DateTime";
                    ExtendedType[ExtendedType["PaddedDateTableDates"] = 197127] = "PaddedDateTableDates";
                    ExtendedType[ExtendedType["Quarters"] = 262656] = "Quarters";
                    ExtendedType[ExtendedType["Quarters_Text"] = 262657] = "Quarters_Text";
                    ExtendedType[ExtendedType["Quarters_Integer"] = 262916] = "Quarters_Integer";
                    ExtendedType[ExtendedType["Quarters_Date"] = 262662] = "Quarters_Date";
                    ExtendedType[ExtendedType["Quarters_DateTime"] = 262663] = "Quarters_DateTime";
                    ExtendedType[ExtendedType["DayOfMonth"] = 328192] = "DayOfMonth";
                    ExtendedType[ExtendedType["DayOfMonth_Text"] = 328193] = "DayOfMonth_Text";
                    ExtendedType[ExtendedType["DayOfMonth_Integer"] = 328452] = "DayOfMonth_Integer";
                    ExtendedType[ExtendedType["DayOfMonth_Date"] = 328198] = "DayOfMonth_Date";
                    ExtendedType[ExtendedType["DayOfMonth_DateTime"] = 328199] = "DayOfMonth_DateTime";
                    // Geography
                    ExtendedType[ExtendedType["Address"] = 6554625] = "Address";
                    ExtendedType[ExtendedType["City"] = 6620161] = "City";
                    ExtendedType[ExtendedType["Continent"] = 6685697] = "Continent";
                    ExtendedType[ExtendedType["Country"] = 6751233] = "Country";
                    ExtendedType[ExtendedType["County"] = 6816769] = "County";
                    ExtendedType[ExtendedType["Region"] = 6882305] = "Region";
                    ExtendedType[ExtendedType["PostalCode"] = 6947840] = "PostalCode";
                    ExtendedType[ExtendedType["PostalCode_Text"] = 6947841] = "PostalCode_Text";
                    ExtendedType[ExtendedType["PostalCode_Integer"] = 6948100] = "PostalCode_Integer";
                    ExtendedType[ExtendedType["StateOrProvince"] = 7013377] = "StateOrProvince";
                    ExtendedType[ExtendedType["Place"] = 7078913] = "Place";
                    ExtendedType[ExtendedType["Latitude"] = 7144448] = "Latitude";
                    ExtendedType[ExtendedType["Latitude_Decimal"] = 7144706] = "Latitude_Decimal";
                    ExtendedType[ExtendedType["Latitude_Double"] = 7144707] = "Latitude_Double";
                    ExtendedType[ExtendedType["Longitude"] = 7209984] = "Longitude";
                    ExtendedType[ExtendedType["Longitude_Decimal"] = 7210242] = "Longitude_Decimal";
                    ExtendedType[ExtendedType["Longitude_Double"] = 7210243] = "Longitude_Double";
                    // Miscellaneous
                    ExtendedType[ExtendedType["Image"] = 13109259] = "Image";
                    ExtendedType[ExtendedType["ImageUrl"] = 13174785] = "ImageUrl";
                    ExtendedType[ExtendedType["WebUrl"] = 13240321] = "WebUrl";
                    ExtendedType[ExtendedType["Barcode"] = 13305856] = "Barcode";
                    ExtendedType[ExtendedType["Barcode_Text"] = 13305857] = "Barcode_Text";
                    ExtendedType[ExtendedType["Barcode_Integer"] = 13306116] = "Barcode_Integer";
                    // Formatting
                    ExtendedType[ExtendedType["Color"] = 19664897] = "Color";
                    ExtendedType[ExtendedType["FormatString"] = 19730433] = "FormatString";
                    ExtendedType[ExtendedType["Alignment"] = 20058113] = "Alignment";
                    ExtendedType[ExtendedType["LabelDisplayUnits"] = 20123649] = "LabelDisplayUnits";
                    ExtendedType[ExtendedType["FontSize"] = 20189443] = "FontSize";
                    ExtendedType[ExtendedType["LabelDensity"] = 20254979] = "LabelDensity";
                    // Enumeration
                    ExtendedType[ExtendedType["Enumeration"] = 26214401] = "Enumeration";
                    // Scripting
                    ExtendedType[ExtendedType["ScriptSource"] = 32776193] = "ScriptSource";
                    // NOTE: To avoid confusion, underscores should be used only to delimit primitive type variants of an extended type
                    // (e.g. Year_Integer or Latitude_Double above)
                    // Operations
                    ExtendedType[ExtendedType["SearchEnabled"] = 65541] = "SearchEnabled";
                })(ExtendedType = type.ExtendedType || (type.ExtendedType = {}));
                var ExtendedTypeStrings;
                (function (ExtendedTypeStrings) {
                    ExtendedTypeStrings[ExtendedTypeStrings["Numeric"] = 256] = "Numeric";
                    ExtendedTypeStrings[ExtendedTypeStrings["Temporal"] = 512] = "Temporal";
                    ExtendedTypeStrings[ExtendedTypeStrings["Geography"] = 1024] = "Geography";
                    ExtendedTypeStrings[ExtendedTypeStrings["Miscellaneous"] = 2048] = "Miscellaneous";
                    ExtendedTypeStrings[ExtendedTypeStrings["Formatting"] = 4096] = "Formatting";
                    ExtendedTypeStrings[ExtendedTypeStrings["Scripting"] = 8192] = "Scripting";
                    ExtendedTypeStrings[ExtendedTypeStrings["Null"] = 0] = "Null";
                    ExtendedTypeStrings[ExtendedTypeStrings["Text"] = 1] = "Text";
                    ExtendedTypeStrings[ExtendedTypeStrings["Decimal"] = 258] = "Decimal";
                    ExtendedTypeStrings[ExtendedTypeStrings["Double"] = 259] = "Double";
                    ExtendedTypeStrings[ExtendedTypeStrings["Integer"] = 260] = "Integer";
                    ExtendedTypeStrings[ExtendedTypeStrings["Boolean"] = 5] = "Boolean";
                    ExtendedTypeStrings[ExtendedTypeStrings["Date"] = 518] = "Date";
                    ExtendedTypeStrings[ExtendedTypeStrings["DateTime"] = 519] = "DateTime";
                    ExtendedTypeStrings[ExtendedTypeStrings["DateTimeZone"] = 520] = "DateTimeZone";
                    ExtendedTypeStrings[ExtendedTypeStrings["Time"] = 521] = "Time";
                    ExtendedTypeStrings[ExtendedTypeStrings["Duration"] = 10] = "Duration";
                    ExtendedTypeStrings[ExtendedTypeStrings["Binary"] = 11] = "Binary";
                    ExtendedTypeStrings[ExtendedTypeStrings["None"] = 12] = "None";
                    ExtendedTypeStrings[ExtendedTypeStrings["Variant"] = 13] = "Variant";
                    ExtendedTypeStrings[ExtendedTypeStrings["Years"] = 66048] = "Years";
                    ExtendedTypeStrings[ExtendedTypeStrings["Years_Text"] = 66049] = "Years_Text";
                    ExtendedTypeStrings[ExtendedTypeStrings["Years_Integer"] = 66308] = "Years_Integer";
                    ExtendedTypeStrings[ExtendedTypeStrings["Years_Date"] = 66054] = "Years_Date";
                    ExtendedTypeStrings[ExtendedTypeStrings["Years_DateTime"] = 66055] = "Years_DateTime";
                    ExtendedTypeStrings[ExtendedTypeStrings["Months"] = 131584] = "Months";
                    ExtendedTypeStrings[ExtendedTypeStrings["Months_Text"] = 131585] = "Months_Text";
                    ExtendedTypeStrings[ExtendedTypeStrings["Months_Integer"] = 131844] = "Months_Integer";
                    ExtendedTypeStrings[ExtendedTypeStrings["Months_Date"] = 131590] = "Months_Date";
                    ExtendedTypeStrings[ExtendedTypeStrings["Months_DateTime"] = 131591] = "Months_DateTime";
                    ExtendedTypeStrings[ExtendedTypeStrings["PaddedDateTableDates"] = 197127] = "PaddedDateTableDates";
                    ExtendedTypeStrings[ExtendedTypeStrings["Quarters"] = 262656] = "Quarters";
                    ExtendedTypeStrings[ExtendedTypeStrings["Quarters_Text"] = 262657] = "Quarters_Text";
                    ExtendedTypeStrings[ExtendedTypeStrings["Quarters_Integer"] = 262916] = "Quarters_Integer";
                    ExtendedTypeStrings[ExtendedTypeStrings["Quarters_Date"] = 262662] = "Quarters_Date";
                    ExtendedTypeStrings[ExtendedTypeStrings["Quarters_DateTime"] = 262663] = "Quarters_DateTime";
                    ExtendedTypeStrings[ExtendedTypeStrings["DayOfMonth"] = 328192] = "DayOfMonth";
                    ExtendedTypeStrings[ExtendedTypeStrings["DayOfMonth_Text"] = 328193] = "DayOfMonth_Text";
                    ExtendedTypeStrings[ExtendedTypeStrings["DayOfMonth_Integer"] = 328452] = "DayOfMonth_Integer";
                    ExtendedTypeStrings[ExtendedTypeStrings["DayOfMonth_Date"] = 328198] = "DayOfMonth_Date";
                    ExtendedTypeStrings[ExtendedTypeStrings["DayOfMonth_DateTime"] = 328199] = "DayOfMonth_DateTime";
                    ExtendedTypeStrings[ExtendedTypeStrings["Address"] = 6554625] = "Address";
                    ExtendedTypeStrings[ExtendedTypeStrings["City"] = 6620161] = "City";
                    ExtendedTypeStrings[ExtendedTypeStrings["Continent"] = 6685697] = "Continent";
                    ExtendedTypeStrings[ExtendedTypeStrings["Country"] = 6751233] = "Country";
                    ExtendedTypeStrings[ExtendedTypeStrings["County"] = 6816769] = "County";
                    ExtendedTypeStrings[ExtendedTypeStrings["Region"] = 6882305] = "Region";
                    ExtendedTypeStrings[ExtendedTypeStrings["PostalCode"] = 6947840] = "PostalCode";
                    ExtendedTypeStrings[ExtendedTypeStrings["PostalCode_Text"] = 6947841] = "PostalCode_Text";
                    ExtendedTypeStrings[ExtendedTypeStrings["PostalCode_Integer"] = 6948100] = "PostalCode_Integer";
                    ExtendedTypeStrings[ExtendedTypeStrings["StateOrProvince"] = 7013377] = "StateOrProvince";
                    ExtendedTypeStrings[ExtendedTypeStrings["Place"] = 7078913] = "Place";
                    ExtendedTypeStrings[ExtendedTypeStrings["Latitude"] = 7144448] = "Latitude";
                    ExtendedTypeStrings[ExtendedTypeStrings["Latitude_Decimal"] = 7144706] = "Latitude_Decimal";
                    ExtendedTypeStrings[ExtendedTypeStrings["Latitude_Double"] = 7144707] = "Latitude_Double";
                    ExtendedTypeStrings[ExtendedTypeStrings["Longitude"] = 7209984] = "Longitude";
                    ExtendedTypeStrings[ExtendedTypeStrings["Longitude_Decimal"] = 7210242] = "Longitude_Decimal";
                    ExtendedTypeStrings[ExtendedTypeStrings["Longitude_Double"] = 7210243] = "Longitude_Double";
                    ExtendedTypeStrings[ExtendedTypeStrings["Image"] = 13109259] = "Image";
                    ExtendedTypeStrings[ExtendedTypeStrings["ImageUrl"] = 13174785] = "ImageUrl";
                    ExtendedTypeStrings[ExtendedTypeStrings["WebUrl"] = 13240321] = "WebUrl";
                    ExtendedTypeStrings[ExtendedTypeStrings["Barcode"] = 13305856] = "Barcode";
                    ExtendedTypeStrings[ExtendedTypeStrings["Barcode_Text"] = 13305857] = "Barcode_Text";
                    ExtendedTypeStrings[ExtendedTypeStrings["Barcode_Integer"] = 13306116] = "Barcode_Integer";
                    ExtendedTypeStrings[ExtendedTypeStrings["Color"] = 19664897] = "Color";
                    ExtendedTypeStrings[ExtendedTypeStrings["FormatString"] = 19730433] = "FormatString";
                    ExtendedTypeStrings[ExtendedTypeStrings["Alignment"] = 20058113] = "Alignment";
                    ExtendedTypeStrings[ExtendedTypeStrings["LabelDisplayUnits"] = 20123649] = "LabelDisplayUnits";
                    ExtendedTypeStrings[ExtendedTypeStrings["FontSize"] = 20189443] = "FontSize";
                    ExtendedTypeStrings[ExtendedTypeStrings["LabelDensity"] = 20254979] = "LabelDensity";
                    ExtendedTypeStrings[ExtendedTypeStrings["Enumeration"] = 26214401] = "Enumeration";
                    ExtendedTypeStrings[ExtendedTypeStrings["ScriptSource"] = 32776193] = "ScriptSource";
                    ExtendedTypeStrings[ExtendedTypeStrings["SearchEnabled"] = 65541] = "SearchEnabled";
                })(ExtendedTypeStrings || (ExtendedTypeStrings = {}));
                var PrimitiveTypeMask = 0xFF;
                var PrimitiveTypeWithFlagsMask = 0xFFFF;
                var PrimitiveTypeFlagsExcludedMask = 0xFFFF0000;
                function getPrimitiveType(extendedType) {
                    return extendedType & PrimitiveTypeMask;
                }
                function isPrimitiveType(extendedType) {
                    return (extendedType & PrimitiveTypeWithFlagsMask) === extendedType;
                }
                function getCategoryFromExtendedType(extendedType) {
                    if (isPrimitiveType(extendedType))
                        return null;
                    var category = ExtendedTypeStrings[extendedType];
                    if (category) {
                        // Check for ExtendedType declaration without a primitive type.
                        // If exists, use it as category (e.g. Longitude rather than Longitude_Double)
                        // Otherwise use the ExtendedType declaration with a primitive type (e.g. Address)
                        var delimIdx = category.lastIndexOf("_");
                        if (delimIdx > 0) {
                            var baseCategory = category.slice(0, delimIdx);
                            if (ExtendedTypeStrings[baseCategory]) {
                                category = baseCategory;
                            }
                        }
                    }
                    return category || null;
                }
                function toExtendedType(primitiveType, category) {
                    var primitiveString = PrimitiveTypeStrings[primitiveType];
                    var t = ExtendedTypeStrings[primitiveString];
                    if (t == null) {
                        t = ExtendedType.Null;
                    }
                    if (primitiveType && category) {
                        var categoryType = ExtendedTypeStrings[category];
                        if (categoryType) {
                            var categoryPrimitiveType = getPrimitiveType(categoryType);
                            if (categoryPrimitiveType === PrimitiveType.Null) {
                                // Category supports multiple primitive types, check if requested primitive type is supported
                                // (note: important to use t here rather than primitiveType as it may include primitive type flags)
                                categoryType = t | categoryType;
                                if (ExtendedTypeStrings[categoryType]) {
                                    t = categoryType;
                                }
                            }
                            else if (categoryPrimitiveType === primitiveType) {
                                // Primitive type matches the single supported type for the category
                                t = categoryType;
                            }
                        }
                    }
                    return t;
                }
                function matchesExtendedTypeWithAnyPrimitive(a, b) {
                    return (a & PrimitiveTypeFlagsExcludedMask) === (b & PrimitiveTypeFlagsExcludedMask);
                }
            })(type = utils.type || (utils.type = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var svg;
            (function (svg) {
                var Rect = (function () {
                    // Constructor
                    function Rect(left, top, width, height) {
                        this.left = left || 0;
                        this.top = top || 0;
                        this.width = width || 0;
                        this.height = height || 0;
                    }
                    return Rect;
                }());
                svg.Rect = Rect;
            })(svg = utils.svg || (utils.svg = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var svg;
            (function (svg) {
                var Double = powerbi.extensibility.utils.type.Double;
                var shapes;
                (function (shapes) {
                    var Rect;
                    (function (Rect) {
                        function getOffset(rect) {
                            return { x: rect.left, y: rect.top };
                        }
                        Rect.getOffset = getOffset;
                        function getSize(rect) {
                            return { width: rect.width, height: rect.height };
                        }
                        Rect.getSize = getSize;
                        function setSize(rect, value) {
                            rect.width = value.width;
                            rect.height = value.height;
                        }
                        Rect.setSize = setSize;
                        function right(rect) {
                            return rect.left + rect.width;
                        }
                        Rect.right = right;
                        function bottom(rect) {
                            return rect.top + rect.height;
                        }
                        Rect.bottom = bottom;
                        function topLeft(rect) {
                            return { x: rect.left, y: rect.top };
                        }
                        Rect.topLeft = topLeft;
                        function topRight(rect) {
                            return { x: rect.left + rect.width, y: rect.top };
                        }
                        Rect.topRight = topRight;
                        function bottomLeft(rect) {
                            return { x: rect.left, y: rect.top + rect.height };
                        }
                        Rect.bottomLeft = bottomLeft;
                        function bottomRight(rect) {
                            return { x: rect.left + rect.width, y: rect.top + rect.height };
                        }
                        Rect.bottomRight = bottomRight;
                        function equals(rect, other) {
                            return other !== undefined && other !== null &&
                                rect.left === other.left && rect.top === other.top && rect.width === other.width && rect.height === other.height;
                        }
                        Rect.equals = equals;
                        function clone(rect) {
                            return (rect !== null) ? { left: rect.left, top: rect.top, width: rect.width, height: rect.height } : null;
                        }
                        Rect.clone = clone;
                        function toString(rect) {
                            return "{left:" + rect.left + ", top:" + rect.top + ", width:" + rect.width + ", height:" + rect.height + "}";
                        }
                        Rect.toString = toString;
                        function offset(rect, offsetX, offsetY) {
                            var newLeft = ((rect.left + offsetX) >= 0) ? rect.left + offsetX : 0;
                            var newTop = ((rect.top + offsetY) >= 0) ? rect.top + offsetY : 0;
                            return { left: newLeft, top: newTop, width: rect.width, height: rect.height };
                        }
                        Rect.offset = offset;
                        function add(rect, rect2) {
                            return {
                                left: rect.left + rect2.left,
                                top: rect.top + rect2.top,
                                height: rect.height + rect2.height,
                                width: rect.width + rect2.width
                            };
                        }
                        Rect.add = add;
                        function subtract(rect, rect2) {
                            return {
                                left: rect.left - rect2.left,
                                top: rect.top - rect2.top,
                                height: rect.height - rect2.height,
                                width: rect.width - rect2.width
                            };
                        }
                        Rect.subtract = subtract;
                        function inflate(rect, padding) {
                            var result = clone(rect);
                            if (padding) {
                                result.left -= padding.left;
                                result.top -= padding.top;
                                result.width += padding.left + padding.right;
                                result.height += padding.top + padding.bottom;
                            }
                            return result;
                        }
                        Rect.inflate = inflate;
                        function deflate(rect, padding) {
                            var result = clone(rect);
                            if (padding) {
                                result.left += padding.left;
                                result.top += padding.top;
                                result.width -= padding.left + padding.right;
                                result.height -= padding.top + padding.bottom;
                            }
                            return result;
                        }
                        Rect.deflate = deflate;
                        function inflateBy(rect, padding) {
                            return { left: rect.left - padding, top: rect.top - padding, width: rect.width + padding + padding, height: rect.height + padding + padding };
                        }
                        Rect.inflateBy = inflateBy;
                        function deflateBy(rect, padding) {
                            return { left: rect.left + padding, top: rect.top + padding, width: rect.width - padding - padding, height: rect.height - padding - padding };
                        }
                        Rect.deflateBy = deflateBy;
                        /**
                         * Get closest point.
                         *
                         * @return the closest point on the rect to the (x,y) point given.
                         * In case the (x,y) given is inside the rect, (x,y) will be returned.
                         * Otherwise, a point on a border will be returned.
                         */
                        function getClosestPoint(rect, x, y) {
                            return {
                                x: Math.min(Math.max(rect.left, x), rect.left + rect.width),
                                y: Math.min(Math.max(rect.top, y), rect.top + rect.height)
                            };
                        }
                        Rect.getClosestPoint = getClosestPoint;
                        function equal(rect1, rect2) {
                            return rect1 === rect2 ||
                                (rect1 !== undefined && rect2 !== undefined && rect1.left === rect2.left && rect1.top === rect2.top && rect1.width === rect2.width && rect1.height === rect2.height);
                        }
                        Rect.equal = equal;
                        function equalWithPrecision(rect1, rect2) {
                            return rect1 === rect2 ||
                                (rect1 !== undefined && rect2 !== undefined &&
                                    Double.equalWithPrecision(rect1.left, rect2.left) && Double.equalWithPrecision(rect1.top, rect2.top) &&
                                    Double.equalWithPrecision(rect1.width, rect2.width) && Double.equalWithPrecision(rect1.height, rect2.height));
                        }
                        Rect.equalWithPrecision = equalWithPrecision;
                        function isEmpty(rect) {
                            return rect === undefined || rect === null || (rect.width === 0 && rect.height === 0);
                        }
                        Rect.isEmpty = isEmpty;
                        function containsPoint(rect, point) {
                            if ((rect === null) || (point === null)) {
                                return false;
                            }
                            return Double.lessOrEqualWithPrecision(rect.left, point.x) &&
                                Double.lessOrEqualWithPrecision(point.x, rect.left + rect.width) &&
                                Double.lessOrEqualWithPrecision(rect.top, point.y) &&
                                Double.lessOrEqualWithPrecision(point.y, rect.top + rect.height);
                        }
                        Rect.containsPoint = containsPoint;
                        function isIntersecting(rect1, rect2) {
                            if (!rect1 || !rect2) {
                                return false;
                            }
                            var left = Math.max(rect1.left, rect2.left);
                            var right = Math.min(rect1.left + rect1.width, rect2.left + rect2.width);
                            if (left > right) {
                                return false;
                            }
                            var top = Math.max(rect1.top, rect2.top);
                            var bottom = Math.min(rect1.top + rect1.height, rect2.top + rect2.height);
                            return top <= bottom;
                        }
                        Rect.isIntersecting = isIntersecting;
                        function intersect(rect1, rect2) {
                            if (!rect1) {
                                return rect2;
                            }
                            if (!rect2) {
                                return rect1;
                            }
                            var left = Math.max(rect1.left, rect2.left);
                            var top = Math.max(rect1.top, rect2.top);
                            var right = Math.min(rect1.left + rect1.width, rect2.left + rect2.width);
                            var bottom = Math.min(rect1.top + rect1.height, rect2.top + rect2.height);
                            if (left <= right && top <= bottom) {
                                return { left: left, top: top, width: right - left, height: bottom - top };
                            }
                            else {
                                return { left: 0, top: 0, width: 0, height: 0 };
                            }
                        }
                        Rect.intersect = intersect;
                        function combine(rect1, rect2) {
                            if (!rect1) {
                                return rect2;
                            }
                            if (!rect2) {
                                return rect1;
                            }
                            var left = Math.min(rect1.left, rect2.left);
                            var top = Math.min(rect1.top, rect2.top);
                            var right = Math.max(rect1.left + rect1.width, rect2.left + rect2.width);
                            var bottom = Math.max(rect1.top + rect1.height, rect2.top + rect2.height);
                            return { left: left, top: top, width: right - left, height: bottom - top };
                        }
                        Rect.combine = combine;
                        function getCentroid(rect) {
                            return {
                                x: rect.left + (rect.width / 2),
                                y: rect.top + (rect.height / 2)
                            };
                        }
                        Rect.getCentroid = getCentroid;
                    })(Rect = shapes.Rect || (shapes.Rect = {}));
                })(shapes = svg.shapes || (svg.shapes = {}));
            })(svg = utils.svg || (utils.svg = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var svg;
            (function (svg) {
                var Point = (function () {
                    function Point(x, y) {
                        this.x = x || 0;
                        this.y = y || 0;
                    }
                    return Point;
                }());
                svg.Point = Point;
            })(svg = utils.svg || (utils.svg = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var svg;
            (function (svg) {
                /**
                 * CSS constants.
                 */
                var CssConstants;
                (function (CssConstants) {
                    function createClassAndSelector(className) {
                        return {
                            className: className,
                            selectorName: "." + className,
                        };
                    }
                    CssConstants.createClassAndSelector = createClassAndSelector;
                    CssConstants.styleAttribute = "style";
                    CssConstants.pixelUnits = "px";
                    CssConstants.heightProperty = "height";
                    CssConstants.widthProperty = "width";
                    CssConstants.topProperty = "top";
                    CssConstants.bottomProperty = "bottom";
                    CssConstants.leftProperty = "left";
                    CssConstants.rightProperty = "right";
                    CssConstants.marginTopProperty = "margin-top";
                    CssConstants.marginLeftProperty = "margin-left";
                    CssConstants.displayProperty = "display";
                    CssConstants.backgroundProperty = "background";
                    CssConstants.backgroundColorProperty = "background-color";
                    CssConstants.backgroundRepeatProperty = "background-repeat";
                    CssConstants.backgroundSizeProperty = "background-size";
                    CssConstants.backgroundImageProperty = "background-image";
                    CssConstants.textShadowProperty = "text-shadow";
                    CssConstants.textAlignProperty = "text-align";
                    CssConstants.borderProperty = "border";
                    CssConstants.borderTopWidthProperty = "border-top-width";
                    CssConstants.borderBottomWidthProperty = "border-bottom-width";
                    CssConstants.borderLeftWidthProperty = "border-left-width";
                    CssConstants.borderRightWidthProperty = "border-right-width";
                    CssConstants.fontSizeProperty = "font-size";
                    CssConstants.fontWeightProperty = "font-weight";
                    CssConstants.colorProperty = "color";
                    CssConstants.opacityProperty = "opacity";
                    CssConstants.paddingLeftProperty = "padding-left";
                    CssConstants.paddingRightProperty = "padding-right";
                    CssConstants.positionProperty = "position";
                    CssConstants.maxWidthProperty = "max-width";
                    CssConstants.minWidthProperty = "min-width";
                    CssConstants.overflowProperty = "overflow";
                    CssConstants.overflowXProperty = "overflow-x";
                    CssConstants.overflowYProperty = "overflow-y";
                    CssConstants.transformProperty = "transform";
                    CssConstants.webkitTransformProperty = "-webkit-transform";
                    CssConstants.cursorProperty = "cursor";
                    CssConstants.visibilityProperty = "visibility";
                    CssConstants.absoluteValue = "absolute";
                    CssConstants.zeroPixelValue = "0px";
                    CssConstants.autoValue = "auto";
                    CssConstants.hiddenValue = "hidden";
                    CssConstants.noneValue = "none";
                    CssConstants.blockValue = "block";
                    CssConstants.inlineBlockValue = "inline-block";
                    CssConstants.transparentValue = "transparent";
                    CssConstants.boldValue = "bold";
                    CssConstants.visibleValue = "visible";
                    CssConstants.tableRowValue = "table-row";
                    CssConstants.coverValue = "cover";
                    CssConstants.pointerValue = "pointer";
                    CssConstants.scrollValue = "scroll";
                })(CssConstants = svg.CssConstants || (svg.CssConstants = {}));
            })(svg = utils.svg || (utils.svg = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var svg;
            (function (svg) {
                var touch;
                (function (touch) {
                    var Point = (function () {
                        function Point(x, y) {
                            this.x = x || 0;
                            this.y = y || 0;
                        }
                        Point.prototype.offset = function (offsetX, offsetY) {
                            this.x += offsetX;
                            this.y += offsetY;
                        };
                        return Point;
                    }());
                    touch.Point = Point;
                    var Rectangle = (function (_super) {
                        __extends(Rectangle, _super);
                        function Rectangle(x, y, width, height) {
                            var _this = _super.call(this, x, y) || this;
                            _this.width = width || 0;
                            _this.height = height || 0;
                            return _this;
                        }
                        Object.defineProperty(Rectangle.prototype, "point", {
                            get: function () {
                                return new Point(this.x, this.y);
                            },
                            enumerable: true,
                            configurable: true
                        });
                        Rectangle.prototype.contains = function (p) {
                            return Rectangle.contains(this, p);
                        };
                        Rectangle.contains = function (rect, p) {
                            if (p && !Rectangle.isEmpty(rect)) {
                                return rect.x <= p.x && p.x < rect.x + rect.width && rect.y <= p.y && p.y < rect.y + rect.height;
                            }
                            return false;
                        };
                        Rectangle.isEmpty = function (rect) {
                            return !(rect !== undefined && rect.width >= 0 && rect.height >= 0);
                        };
                        return Rectangle;
                    }(Point));
                    touch.Rectangle = Rectangle;
                })(touch = svg.touch || (svg.touch = {}));
            })(svg = utils.svg || (utils.svg = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var svg;
            (function (svg) {
                var touch;
                (function (touch) {
                    function touchStartEventName() {
                        var eventName = "touchstart";
                        if (window["PointerEvent"]) {
                            // IE11
                            eventName = "pointerdown";
                        }
                        return eventName;
                    }
                    touch.touchStartEventName = touchStartEventName;
                    function touchMoveEventName() {
                        var eventName = "touchmove";
                        if (window["PointerEvent"]) {
                            // IE11
                            eventName = "pointermove";
                        }
                        return eventName;
                    }
                    touch.touchMoveEventName = touchMoveEventName;
                    function touchEndEventName() {
                        var eventName = "touchend";
                        if (window["PointerEvent"]) {
                            // IE11
                            eventName = "pointerup";
                        }
                        return eventName;
                    }
                    touch.touchEndEventName = touchEndEventName;
                    function usePointerEvents() {
                        var eventName = touchStartEventName();
                        return eventName === "pointerdown" || eventName === "MSPointerDown";
                    }
                    touch.usePointerEvents = usePointerEvents;
                })(touch = svg.touch || (svg.touch = {}));
            })(svg = utils.svg || (utils.svg = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var svg;
            (function (svg) {
                function getCoordinates(rootNode, isPointerEvent) {
                    var coordinates;
                    if (isPointerEvent) {
                        // DO NOT USE - WebKit bug in getScreenCTM with nested SVG results in slight negative coordinate shift
                        // Also, IE will incorporate transform scale but WebKit does not, forcing us to detect browser and adjust appropriately.
                        // Just use non-scaled coordinates for all browsers, and adjust for the transform scale later (see lineChart.findIndex)
                        // coordinates = d3.mouse(rootNode);
                        // copied from d3_eventSource (which is not exposed)
                        var e = d3.event, s = void 0;
                        while (s = e.sourceEvent)
                            e = s;
                        var rect = rootNode.getBoundingClientRect();
                        coordinates = [e.clientX - rect.left - rootNode.clientLeft, e.clientY - rect.top - rootNode.clientTop];
                    }
                    else {
                        var touchCoordinates = d3.touches(rootNode);
                        if (touchCoordinates && touchCoordinates.length > 0) {
                            coordinates = touchCoordinates[0];
                        }
                    }
                    return coordinates;
                }
                svg.getCoordinates = getCoordinates;
            })(svg = utils.svg || (utils.svg = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var svg;
            (function (svg) {
                /**
                 * Very small values, when stringified, may be converted to scientific notation and cause a temporarily
                 * invalid attribute or style property value.
                 * For example, the number 0.0000001 is converted to the string "1e-7".
                 * This is particularly noticeable when interpolating opacity values.
                 * To avoid scientific notation, start or end the transition at 1e-6,
                 * which is the smallest value that is not stringified in exponential notation.
                 */
                svg.AlmostZero = 1e-6;
                /**
                     * Creates a translate string for use with the SVG transform call.
                     */
                function translate(x, y) {
                    return "translate(" + x + "," + y + ")";
                }
                svg.translate = translate;
                /**
                 * Creates a translateX string for use with the SVG transform call.
                 */
                function translateXWithPixels(x) {
                    return "translateX(" + x + "px)";
                }
                svg.translateXWithPixels = translateXWithPixels;
                function translateWithPixels(x, y) {
                    return "translate(" + x + "px," + y + "px)";
                }
                svg.translateWithPixels = translateWithPixels;
                /**
                 * Creates a translate + rotate string for use with the SVG transform call.
                 */
                function translateAndRotate(x, y, px, py, angle) {
                    return "translate("
                        + x + "," + y + ")"
                        + " rotate(" + angle + "," + px + "," + py + ")";
                }
                svg.translateAndRotate = translateAndRotate;
                /**
                 * Creates a scale string for use in a CSS transform property.
                 */
                function scale(scale) {
                    return "scale(" + scale + ")";
                }
                svg.scale = scale;
                /**
                 * Creates a translate + scale string for use with the SVG transform call.
                 */
                function translateAndScale(x, y, ratio) {
                    return "translate("
                        + x + "," + y + ")"
                        + " scale(" + ratio + ")";
                }
                svg.translateAndScale = translateAndScale;
                /**
                 * Creates a transform origin string for use in a CSS transform-origin property.
                 */
                function transformOrigin(xOffset, yOffset) {
                    return xOffset + " " + yOffset;
                }
                svg.transformOrigin = transformOrigin;
                /**
                 * Forces all D3 transitions to complete.
                 * Normally, zero-delay transitions are executed after an instantaneous delay (<10ms).
                 * This can cause a brief flicker if the browser renders the page twice: once at the end of the first event loop,
                 * then again immediately on the first timer callback. By flushing the timer queue at the end of the first event loop,
                 * you can run any zero-delay transitions immediately and avoid the flicker.
                 *
                 * These flickers are noticable on IE, and with a large number of webviews(not recommend you ever do this) on iOS.
                 */
                function flushAllD3Transitions() {
                    var now = Date.now;
                    Date.now = function () { return Infinity; };
                    d3.timer.flush();
                    Date.now = now;
                }
                svg.flushAllD3Transitions = flushAllD3Transitions;
                /**
                 * Wrapper for flushAllD3Transitions.
                 */
                function flushAllD3TransitionsIfNeeded(options) {
                    if (!options)
                        return;
                    var animationOptions = options;
                    if (animationOptions && animationOptions.transitionImmediate) {
                        flushAllD3Transitions();
                    }
                }
                svg.flushAllD3TransitionsIfNeeded = flushAllD3TransitionsIfNeeded;
                /**
                 * There is a known bug in IE10 that causes cryptic crashes for SVG elements with a null "d" attribute:
                 * https://github.com/mbostock/d3/issues/1737
                 */
                function ensureDAttribute(pathElement) {
                    if (!pathElement.getAttribute("d")) {
                        pathElement.setAttribute("d", "");
                    }
                }
                svg.ensureDAttribute = ensureDAttribute;
                /**
                 * In IE10, it is possible to return SVGPoints with NaN members.
                 */
                function ensureValidSVGPoint(point) {
                    if (isNaN(point.x)) {
                        point.x = 0;
                    }
                    if (isNaN(point.y)) {
                        point.y = 0;
                    }
                }
                svg.ensureValidSVGPoint = ensureValidSVGPoint;
                /**
                 * Parse the Transform string with value "translate(x,y)".
                 * In Chrome for the translate(position) string the delimiter
                 * is a comma and in IE it is a spaceso checking for both.
                 */
                function parseTranslateTransform(input) {
                    if (!input || input.length === 0) {
                        return {
                            x: "0",
                            y: "0",
                        };
                    }
                    var translateCoordinates = input.split(/[\s,]+/);
                    var yValue = "0";
                    var xValue;
                    var xCoord = translateCoordinates[0];
                    // Y coordinate is ommited in I.E if it is 0, so need to check against that
                    if (translateCoordinates.length === 1) {
                        // 10 refers to the length of "translate("
                        xValue = xCoord.substring(10, xCoord.length - 1);
                    }
                    else {
                        var yCoord = translateCoordinates[1];
                        yValue = yCoord.substring(0, yCoord.length - 1);
                        // 10 refers to the length of "translate("
                        xValue = xCoord.substring(10, xCoord.length);
                    }
                    return {
                        x: xValue,
                        y: yValue
                    };
                }
                svg.parseTranslateTransform = parseTranslateTransform;
                /**
                 * Create an arrow.
                 */
                function createArrow(width, height, rotate) {
                    var transform = "rotate(" + rotate + " " + width / 2 + " " + height / 2 + ")";
                    var path = "M0 0";
                    path += "L0 " + height;
                    path += "L" + width + " " + height / 2 + " Z";
                    return {
                        path: path,
                        transform: transform
                    };
                }
                svg.createArrow = createArrow;
                /**
                 * Use the ratio of the scaled bounding rect and the SVG DOM bounding box to get the x and y transform scale values
                 * @deprecated This function is unreliable across browser implementations, prefer to use SVGScaleDetector if needed.
                 */
                function getTransformScaleRatios(svgElement) {
                    if (svgElement != null) {
                        var scaledRect = svgElement.getBoundingClientRect();
                        var domRect = svgElement.getBBox();
                        if (domRect.height > 0 && domRect.width > 0) {
                            return {
                                x: scaledRect.width / domRect.width,
                                y: scaledRect.height / domRect.height
                            };
                        }
                    }
                    return { x: 1, y: 1 };
                }
                svg.getTransformScaleRatios = getTransformScaleRatios;
            })(svg = utils.svg || (utils.svg = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var svg;
            (function (svg) {
                var SVGScaleDetector = (function () {
                    function SVGScaleDetector(svgElement) {
                        this.scaleDetectorElement = svgElement
                            .append("rect") // Using a <rect> which should have a reliable bounding box across browser implementations.
                            .classed("scale-detector", true)
                            .attr({
                            width: 1,
                            height: 1,
                            "stroke-width": "0px",
                            fill: "none",
                        })
                            .node();
                    }
                    SVGScaleDetector.prototype.getScale = function () {
                        var scaledRect = this.scaleDetectorElement.getBoundingClientRect();
                        var domRect = this.scaleDetectorElement.getBBox();
                        if (domRect.height > 0 && domRect.width > 0) {
                            return {
                                x: scaledRect.width / domRect.width,
                                y: scaledRect.height / domRect.height
                            };
                        }
                        return {
                            x: 1,
                            y: 1
                        };
                    };
                    return SVGScaleDetector;
                }());
                svg.SVGScaleDetector = SVGScaleDetector;
            })(svg = utils.svg || (utils.svg = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));

/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var dataview;
            (function (dataview) {
                // TODO: refactor & focus DataViewTransform into a service with well-defined dependencies.
                var DataViewTransform;
                (function (DataViewTransform) {
                    // TODO: refactor this, setGrouped, and groupValues to a test helper to stop using it in the product
                    function createValueColumns(values, valueIdentityFields, source) {
                        if (values === void 0) { values = []; }
                        var result = values;
                        setGrouped(result);
                        if (valueIdentityFields) {
                            result.identityFields = valueIdentityFields;
                        }
                        if (source) {
                            result.source = source;
                        }
                        return result;
                    }
                    DataViewTransform.createValueColumns = createValueColumns;
                    function setGrouped(values, groupedResult) {
                        values.grouped = groupedResult
                            ? function () { return groupedResult; }
                            : function () { return groupValues(values); };
                    }
                    DataViewTransform.setGrouped = setGrouped;
                    /** Group together the values with a common identity. */
                    function groupValues(values) {
                        var groups = [], currentGroup;
                        for (var i = 0, len = values.length; i < len; i++) {
                            var value = values[i];
                            if (!currentGroup || currentGroup.identity !== value.identity) {
                                currentGroup = {
                                    values: []
                                };
                                if (value.identity) {
                                    currentGroup.identity = value.identity;
                                    var source = value.source;
                                    // allow null, which will be formatted as (Blank).
                                    if (source.groupName !== undefined) {
                                        currentGroup.name = source.groupName;
                                    }
                                    else if (source.displayName) {
                                        currentGroup.name = source.displayName;
                                    }
                                }
                                groups.push(currentGroup);
                            }
                            currentGroup.values.push(value);
                        }
                        return groups;
                    }
                    DataViewTransform.groupValues = groupValues;
                })(DataViewTransform = dataview.DataViewTransform || (dataview.DataViewTransform = {}));
            })(dataview = utils.dataview || (utils.dataview = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var dataview;
            (function (dataview) {
                var DataRoleHelper;
                (function (DataRoleHelper) {
                    function getMeasureIndexOfRole(grouped, roleName) {
                        if (!grouped || !grouped.length) {
                            return -1;
                        }
                        var firstGroup = grouped[0];
                        if (firstGroup.values && firstGroup.values.length > 0) {
                            for (var i = 0, len = firstGroup.values.length; i < len; ++i) {
                                var value = firstGroup.values[i];
                                if (value && value.source) {
                                    if (hasRole(value.source, roleName)) {
                                        return i;
                                    }
                                }
                            }
                        }
                        return -1;
                    }
                    DataRoleHelper.getMeasureIndexOfRole = getMeasureIndexOfRole;
                    function getCategoryIndexOfRole(categories, roleName) {
                        if (categories && categories.length) {
                            for (var i = 0, ilen = categories.length; i < ilen; i++) {
                                if (hasRole(categories[i].source, roleName)) {
                                    return i;
                                }
                            }
                        }
                        return -1;
                    }
                    DataRoleHelper.getCategoryIndexOfRole = getCategoryIndexOfRole;
                    function hasRole(column, name) {
                        var roles = column.roles;
                        return roles && roles[name];
                    }
                    DataRoleHelper.hasRole = hasRole;
                    function hasRoleInDataView(dataView, name) {
                        return dataView != null
                            && dataView.metadata != null
                            && dataView.metadata.columns
                            && dataView.metadata.columns.some(function (c) { return c.roles && c.roles[name] !== undefined; }); // any is an alias of some
                    }
                    DataRoleHelper.hasRoleInDataView = hasRoleInDataView;
                    function hasRoleInValueColumn(valueColumn, name) {
                        return valueColumn
                            && valueColumn.source
                            && valueColumn.source.roles
                            && (valueColumn.source.roles[name] === true);
                    }
                    DataRoleHelper.hasRoleInValueColumn = hasRoleInValueColumn;
                })(DataRoleHelper = dataview.DataRoleHelper || (dataview.DataRoleHelper = {}));
            })(dataview = utils.dataview || (utils.dataview = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var dataview;
            (function (dataview) {
                var DataViewObject;
                (function (DataViewObject) {
                    function getValue(object, propertyName, defaultValue) {
                        if (!object) {
                            return defaultValue;
                        }
                        var propertyValue = object[propertyName];
                        if (propertyValue === undefined) {
                            return defaultValue;
                        }
                        return propertyValue;
                    }
                    DataViewObject.getValue = getValue;
                    /** Gets the solid color from a fill property using only a propertyName */
                    function getFillColorByPropertyName(object, propertyName, defaultColor) {
                        var value = getValue(object, propertyName);
                        if (!value || !value.solid) {
                            return defaultColor;
                        }
                        return value.solid.color;
                    }
                    DataViewObject.getFillColorByPropertyName = getFillColorByPropertyName;
                })(DataViewObject = dataview.DataViewObject || (dataview.DataViewObject = {}));
            })(dataview = utils.dataview || (utils.dataview = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var dataview;
            (function (dataview) {
                var DataViewObjects;
                (function (DataViewObjects) {
                    /** Gets the value of the given object/property pair. */
                    function getValue(objects, propertyId, defaultValue) {
                        if (!objects) {
                            return defaultValue;
                        }
                        return dataview.DataViewObject.getValue(objects[propertyId.objectName], propertyId.propertyName, defaultValue);
                    }
                    DataViewObjects.getValue = getValue;
                    /** Gets an object from objects. */
                    function getObject(objects, objectName, defaultValue) {
                        if (objects && objects[objectName]) {
                            return objects[objectName];
                        }
                        return defaultValue;
                    }
                    DataViewObjects.getObject = getObject;
                    /** Gets the solid color from a fill property. */
                    function getFillColor(objects, propertyId, defaultColor) {
                        var value = getValue(objects, propertyId);
                        if (!value || !value.solid) {
                            return defaultColor;
                        }
                        return value.solid.color;
                    }
                    DataViewObjects.getFillColor = getFillColor;
                    function getCommonValue(objects, propertyId, defaultValue) {
                        var value = getValue(objects, propertyId, defaultValue);
                        if (value && value.solid) {
                            return value.solid.color;
                        }
                        if (value === undefined
                            || value === null
                            || (typeof value === "object" && !value.solid)) {
                            return defaultValue;
                        }
                        return value;
                    }
                    DataViewObjects.getCommonValue = getCommonValue;
                })(DataViewObjects = dataview.DataViewObjects || (dataview.DataViewObjects = {}));
            })(dataview = utils.dataview || (utils.dataview = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var dataview;
            (function (dataview) {
                // powerbi.extensibility.utils.dataview
                var DataRoleHelper = powerbi.extensibility.utils.dataview.DataRoleHelper;
                var converterHelper;
                (function (converterHelper) {
                    function categoryIsAlsoSeriesRole(dataView, seriesRoleName, categoryRoleName) {
                        if (dataView.categories && dataView.categories.length > 0) {
                            // Need to pivot data if our category soure is a series role
                            var category = dataView.categories[0];
                            return category.source &&
                                DataRoleHelper.hasRole(category.source, seriesRoleName) &&
                                DataRoleHelper.hasRole(category.source, categoryRoleName);
                        }
                        return false;
                    }
                    converterHelper.categoryIsAlsoSeriesRole = categoryIsAlsoSeriesRole;
                    function getSeriesName(source) {
                        return (source.groupName !== undefined)
                            ? source.groupName
                            : source.queryName;
                    }
                    converterHelper.getSeriesName = getSeriesName;
                    function isImageUrlColumn(column) {
                        var misc = getMiscellaneousTypeDescriptor(column);
                        return misc != null && misc.imageUrl === true;
                    }
                    converterHelper.isImageUrlColumn = isImageUrlColumn;
                    function isWebUrlColumn(column) {
                        var misc = getMiscellaneousTypeDescriptor(column);
                        return misc != null && misc.webUrl === true;
                    }
                    converterHelper.isWebUrlColumn = isWebUrlColumn;
                    function getMiscellaneousTypeDescriptor(column) {
                        return column
                            && column.type
                            && column.type.misc;
                    }
                    converterHelper.getMiscellaneousTypeDescriptor = getMiscellaneousTypeDescriptor;
                    function hasImageUrlColumn(dataView) {
                        if (!dataView || !dataView.metadata || !dataView.metadata.columns || !dataView.metadata.columns.length) {
                            return false;
                        }
                        return dataView.metadata.columns.some(function (column) { return isImageUrlColumn(column) === true; });
                    }
                    converterHelper.hasImageUrlColumn = hasImageUrlColumn;
                })(converterHelper = dataview.converterHelper || (dataview.converterHelper = {}));
            })(dataview = utils.dataview || (utils.dataview = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var dataview;
            (function (dataview) {
                var validationHelper;
                (function (validationHelper) {
                    function isImageUrlAllowed(url) {
                        // Excludes all URLs that don't contain .gif .jpg .png or .svg extensions and don't start from "http(s)://".
                        // Base64 incoded images are allowable too.
                        return (/^https?:\/\/.+\.(gif|jpg|png|svg)$/i).test(url) || (/^data:image\/(gif|jpeg|png|svg\+xml);base64,/i).test(url);
                    }
                    validationHelper.isImageUrlAllowed = isImageUrlAllowed;
                    function isFileImage(url, imageCheckResultCallBack) {
                        var request = new XMLHttpRequest();
                        request.onreadystatechange = function () {
                            if (request.readyState !== this.HEADERS_RECEIVED) {
                                return;
                            }
                            var contentType = request.getResponseHeader("Content-Type"), supportedTypes = ["image/png", "image/jpeg", "image/gif", "image/svg+xml"];
                            if (supportedTypes.indexOf(contentType) > -1) {
                                return imageCheckResultCallBack(true, contentType);
                            }
                            return imageCheckResultCallBack(false, contentType);
                        };
                        request.open("HEAD", url, true);
                        request.send();
                    }
                    validationHelper.isFileImage = isFileImage;
                })(validationHelper = dataview.validationHelper || (dataview.validationHelper = {}));
            })(dataview = utils.dataview || (utils.dataview = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var dataview;
            (function (dataview) {
                var DataViewObjectsParser = (function () {
                    function DataViewObjectsParser() {
                    }
                    DataViewObjectsParser.getDefault = function () {
                        return new this();
                    };
                    DataViewObjectsParser.createPropertyIdentifier = function (objectName, propertyName) {
                        return {
                            objectName: objectName,
                            propertyName: propertyName
                        };
                    };
                    DataViewObjectsParser.parse = function (dataView) {
                        var dataViewObjectParser = this.getDefault(), properties;
                        if (!dataView || !dataView.metadata || !dataView.metadata.objects) {
                            return dataViewObjectParser;
                        }
                        properties = dataViewObjectParser.getProperties();
                        for (var objectName in properties) {
                            for (var propertyName in properties[objectName]) {
                                var defaultValue = dataViewObjectParser[objectName][propertyName];
                                dataViewObjectParser[objectName][propertyName] = dataview.DataViewObjects.getCommonValue(dataView.metadata.objects, properties[objectName][propertyName], defaultValue);
                            }
                        }
                        return dataViewObjectParser;
                    };
                    DataViewObjectsParser.isPropertyEnumerable = function (propertyName) {
                        return !DataViewObjectsParser.InnumerablePropertyPrefix.test(propertyName);
                    };
                    DataViewObjectsParser.enumerateObjectInstances = function (dataViewObjectParser, options) {
                        var dataViewProperties = dataViewObjectParser && dataViewObjectParser[options.objectName];
                        if (!dataViewProperties) {
                            return [];
                        }
                        var instance = {
                            objectName: options.objectName,
                            selector: null,
                            properties: {}
                        };
                        for (var key in dataViewProperties) {
                            if (dataViewProperties.hasOwnProperty(key)) {
                                instance.properties[key] = dataViewProperties[key];
                            }
                        }
                        return {
                            instances: [instance]
                        };
                    };
                    DataViewObjectsParser.prototype.getProperties = function () {
                        var _this = this;
                        var properties = {}, objectNames = Object.keys(this);
                        objectNames.forEach(function (objectName) {
                            if (DataViewObjectsParser.isPropertyEnumerable(objectName)) {
                                var propertyNames = Object.keys(_this[objectName]);
                                properties[objectName] = {};
                                propertyNames.forEach(function (propertyName) {
                                    if (DataViewObjectsParser.isPropertyEnumerable(objectName)) {
                                        properties[objectName][propertyName] =
                                            DataViewObjectsParser.createPropertyIdentifier(objectName, propertyName);
                                    }
                                });
                            }
                        });
                        return properties;
                    };
                    return DataViewObjectsParser;
                }());
                DataViewObjectsParser.InnumerablePropertyPrefix = /^_/;
                dataview.DataViewObjectsParser = DataViewObjectsParser;
            })(dataview = utils.dataview || (utils.dataview = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Custom implementation of Globalize from PowerView team
// The public implementation from https://github.com/borisyankov/DefinitelyTyped/tree/master/globalize doesn't work
"use strict";
/* tslint:disable:no-var-keyword */
var Globalize = Globalize || window["Globalize"];
/* tslint:enable */
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
"use strict";
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
"use strict";
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var formatting;
            (function (formatting) {
                var LocalStorageService = (function () {
                    function LocalStorageService() {
                    }
                    LocalStorageService.prototype.getData = function (key) {
                        try {
                            if (localStorage) {
                                var value = localStorage[key];
                                if (value) {
                                    return JSON.parse(value);
                                }
                            }
                        }
                        catch (exception) { }
                        return null;
                    };
                    LocalStorageService.prototype.setData = function (key, data) {
                        try {
                            if (localStorage) {
                                localStorage[key] = JSON.stringify(data);
                            }
                        }
                        catch (e) { }
                    };
                    return LocalStorageService;
                }());
                formatting.LocalStorageService = LocalStorageService;
            })(formatting = utils.formatting || (utils.formatting = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
"use strict";
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var formatting;
            (function (formatting) {
                var EphemeralStorageService = (function () {
                    function EphemeralStorageService(clearCacheInterval) {
                        this.cache = {};
                        this.clearCacheInterval = (clearCacheInterval != null)
                            ? clearCacheInterval
                            : EphemeralStorageService.defaultClearCacheInterval;
                        this.clearCache();
                    }
                    EphemeralStorageService.prototype.getData = function (key) {
                        return this.cache[key];
                    };
                    EphemeralStorageService.prototype.setData = function (key, data) {
                        var _this = this;
                        this.cache[key] = data;
                        if (this.clearCacheTimerId == null) {
                            this.clearCacheTimerId = setTimeout(function () { return _this.clearCache(); }, this.clearCacheInterval);
                        }
                    };
                    EphemeralStorageService.prototype.clearCache = function () {
                        this.cache = {};
                        this.clearCacheTimerId = undefined;
                    };
                    return EphemeralStorageService;
                }());
                EphemeralStorageService.defaultClearCacheInterval = (1000 * 60 * 60 * 24); // 1 day
                formatting.EphemeralStorageService = EphemeralStorageService;
                formatting.ephemeralStorageService = new EphemeralStorageService();
            })(formatting = utils.formatting || (utils.formatting = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
"use strict";
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var formatting;
            (function (formatting) {
                /**
                 * Extensions to String class.
                 */
                var stringExtensions;
                (function (stringExtensions) {
                    var HtmlTagRegex = new RegExp("[<>]", "g");
                    /**
                     * Checks if a string ends with a sub-string.
                     */
                    function endsWith(str, suffix) {
                        return str.indexOf(suffix, str.length - suffix.length) !== -1;
                    }
                    stringExtensions.endsWith = endsWith;
                    function format() {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        var s = args[0];
                        if (isNullOrUndefinedOrWhiteSpaceString(s))
                            return s;
                        for (var i = 0; i < args.length - 1; i++) {
                            var reg = new RegExp("\\{" + i + "\\}", "gm");
                            s = s.replace(reg, args[i + 1]);
                        }
                        return s;
                    }
                    stringExtensions.format = format;
                    /**
                     * Compares two strings for equality, ignoring case.
                     */
                    function equalIgnoreCase(a, b) {
                        return stringExtensions.normalizeCase(a) === stringExtensions.normalizeCase(b);
                    }
                    stringExtensions.equalIgnoreCase = equalIgnoreCase;
                    function startsWithIgnoreCase(a, b) {
                        var normalizedSearchString = stringExtensions.normalizeCase(b);
                        return stringExtensions.normalizeCase(a).indexOf(normalizedSearchString) === 0;
                    }
                    stringExtensions.startsWithIgnoreCase = startsWithIgnoreCase;
                    function startsWith(a, b) {
                        return a.indexOf(b) === 0;
                    }
                    stringExtensions.startsWith = startsWith;
                    /** Determines whether a string contains a specified substring (by case-sensitive comparison). */
                    function contains(source, substring) {
                        if (source == null)
                            return false;
                        return source.indexOf(substring) !== -1;
                    }
                    stringExtensions.contains = contains;
                    /** Determines whether a string contains a specified substring (while ignoring case). */
                    function containsIgnoreCase(source, substring) {
                        if (source == null)
                            return false;
                        return contains(normalizeCase(source), normalizeCase(substring));
                    }
                    stringExtensions.containsIgnoreCase = containsIgnoreCase;
                    /**
                     * Normalizes case for a string.
                     * Used by equalIgnoreCase method.
                     */
                    function normalizeCase(value) {
                        return value.toUpperCase();
                    }
                    stringExtensions.normalizeCase = normalizeCase;
                    /**
                     * Receives a string and returns an ArrayBuffer of its characters.
                     * @return An ArrayBuffer of the string's characters.
                     * If the string is empty or null or undefined - returns null.
                     */
                    function stringToArrayBuffer(str) {
                        if (isNullOrEmpty(str)) {
                            return null;
                        }
                        var buffer = new ArrayBuffer(str.length);
                        var bufferView = new Uint8Array(buffer);
                        for (var i = 0, strLen = str.length; i < strLen; i++) {
                            bufferView[i] = str.charCodeAt(i);
                        }
                        return bufferView;
                    }
                    stringExtensions.stringToArrayBuffer = stringToArrayBuffer;
                    /**
                     * Is string null or empty or undefined?
                     * @return True if the value is null or undefined or empty string,
                     * otherwise false.
                     */
                    function isNullOrEmpty(value) {
                        return (value == null) || (value.length === 0);
                    }
                    stringExtensions.isNullOrEmpty = isNullOrEmpty;
                    /**
                     * Returns true if the string is null, undefined, empty, or only includes white spaces.
                     * @return True if the str is null, undefined, empty, or only includes white spaces,
                     * otherwise false.
                     */
                    function isNullOrUndefinedOrWhiteSpaceString(str) {
                        return stringExtensions.isNullOrEmpty(str) || stringExtensions.isNullOrEmpty(str.trim());
                    }
                    stringExtensions.isNullOrUndefinedOrWhiteSpaceString = isNullOrUndefinedOrWhiteSpaceString;
                    /**
                     * Returns a value indicating whether the str contains any whitespace.
                     */
                    function containsWhitespace(str) {
                        var expr = /\s/;
                        return expr.test(str);
                    }
                    stringExtensions.containsWhitespace = containsWhitespace;
                    /**
                     * Returns a value indicating whether the str is a whitespace string.
                     */
                    function isWhitespace(str) {
                        return str.trim() === "";
                    }
                    stringExtensions.isWhitespace = isWhitespace;
                    /**
                     * Returns the string with any trailing whitespace from str removed.
                     */
                    function trimTrailingWhitespace(str) {
                        return str.replace(/\s+$/, "");
                    }
                    stringExtensions.trimTrailingWhitespace = trimTrailingWhitespace;
                    /**
                     * Returns the string with any leading and trailing whitespace from str removed.
                     */
                    function trimWhitespace(str) {
                        return str.replace(/^\s+/, "").replace(/\s+$/, "");
                    }
                    stringExtensions.trimWhitespace = trimWhitespace;
                    /**
                     * Returns length difference between the two provided strings.
                     */
                    function getLengthDifference(left, right) {
                        return Math.abs(left.length - right.length);
                    }
                    stringExtensions.getLengthDifference = getLengthDifference;
                    /**
                     * Repeat char or string several times.
                     * @param char The string to repeat.
                     * @param count How many times to repeat the string.
                     */
                    function repeat(char, count) {
                        var result = "";
                        for (var i = 0; i < count; i++) {
                            result += char;
                        }
                        return result;
                    }
                    stringExtensions.repeat = repeat;
                    /**
                     * Replace all the occurrences of the textToFind in the text with the textToReplace.
                     * @param text The original string.
                     * @param textToFind Text to find in the original string.
                     * @param textToReplace New text replacing the textToFind.
                     */
                    function replaceAll(text, textToFind, textToReplace) {
                        if (!textToFind)
                            return text;
                        var pattern = escapeStringForRegex(textToFind);
                        return text.replace(new RegExp(pattern, "gi"), textToReplace);
                    }
                    stringExtensions.replaceAll = replaceAll;
                    function ensureUniqueNames(names) {
                        var usedNames = {};
                        // Make sure we are giving fair chance for all columns to stay with their original name
                        // First we fill the used names map to contain all the original unique names from the list.
                        for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
                            var name_1 = names_1[_i];
                            usedNames[name_1] = false;
                        }
                        var uniqueNames = [];
                        // Now we go over all names and find a unique name for each
                        for (var _a = 0, names_2 = names; _a < names_2.length; _a++) {
                            var name_2 = names_2[_a];
                            var uniqueName = name_2;
                            // If the (original) column name is already taken lets try to find another name
                            if (usedNames[uniqueName]) {
                                var counter = 0;
                                // Find a name that is not already in the map
                                while (usedNames[uniqueName] !== undefined) {
                                    uniqueName = name_2 + "." + (++counter);
                                }
                            }
                            uniqueNames.push(uniqueName);
                            usedNames[uniqueName] = true;
                        }
                        return uniqueNames;
                    }
                    stringExtensions.ensureUniqueNames = ensureUniqueNames;
                    /**
                     * Returns a name that is not specified in the values.
                     */
                    function findUniqueName(usedNames, baseName) {
                        // Find a unique name
                        var i = 0, uniqueName = baseName;
                        while (usedNames[uniqueName]) {
                            uniqueName = baseName + (++i);
                        }
                        return uniqueName;
                    }
                    stringExtensions.findUniqueName = findUniqueName;
                    function constructNameFromList(list, separator, maxCharacter) {
                        var labels = [];
                        var exceeded;
                        var length = 0;
                        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                            var item = list_1[_i];
                            if (length + item.length > maxCharacter && labels.length > 0) {
                                exceeded = true;
                                break;
                            }
                            labels.push(item);
                            length += item.length;
                        }
                        var separatorWithSpace = " " + separator + " ";
                        var name = labels.join(separatorWithSpace);
                        if (exceeded)
                            name += separatorWithSpace + "...";
                        return name;
                    }
                    stringExtensions.constructNameFromList = constructNameFromList;
                    function escapeStringForRegex(s) {
                        return s.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1");
                    }
                    stringExtensions.escapeStringForRegex = escapeStringForRegex;
                    /**
                     * Remove file name reserved characters <>:"/\|?* from input string.
                     */
                    function normalizeFileName(fileName) {
                        return fileName.replace(/[\<\>\:"\/\\\|\?*]/g, "");
                    }
                    stringExtensions.normalizeFileName = normalizeFileName;
                    /**
                     * Similar to JSON.stringify, but strips away escape sequences so that the resulting
                     * string is human-readable (and parsable by JSON formatting/validating tools).
                     */
                    function stringifyAsPrettyJSON(object) {
                        // let specialCharacterRemover = (key: string, value: string) => value.replace(/[^\w\s]/gi, "");
                        return JSON.stringify(object /*, specialCharacterRemover*/);
                    }
                    stringExtensions.stringifyAsPrettyJSON = stringifyAsPrettyJSON;
                    /**
                     * Derive a CLS-compliant name from a specified string.  If no allowed characters are present, return a fallback string instead.
                     * TODO (6708134): this should have a fully Unicode-aware implementation
                     */
                    function deriveClsCompliantName(input, fallback) {
                        var result = input.replace(/^[^A-Za-z]*/g, "").replace(/[ :\.\/\\\-\u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000]/g, "_").replace(/[\W]/g, "");
                        return result.length > 0 ? result : fallback;
                    }
                    stringExtensions.deriveClsCompliantName = deriveClsCompliantName;
                    /** Performs cheap sanitization by stripping away HTML tag (<>) characters. */
                    function stripTagDelimiters(s) {
                        return s.replace(HtmlTagRegex, "");
                    }
                    stringExtensions.stripTagDelimiters = stripTagDelimiters;
                })(stringExtensions = formatting.stringExtensions || (formatting.stringExtensions = {}));
            })(formatting = utils.formatting || (utils.formatting = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
"use strict";
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var formatting;
            (function (formatting) {
                var wordBreaker;
                (function (wordBreaker) {
                    var SPACE = " ";
                    var BREAKERS_REGEX = /[\s\n]+/g;
                    function search(index, content, backward) {
                        if (backward) {
                            for (var i = index - 1; i > -1; i--) {
                                if (hasBreakers(content[i]))
                                    return i + 1;
                            }
                        }
                        else {
                            for (var i = index, ilen = content.length; i < ilen; i++) {
                                if (hasBreakers(content[i]))
                                    return i;
                            }
                        }
                        return backward ? 0 : content.length;
                    }
                    /**
                     * Find the word nearest the cursor specified within content
                     * @param index - point within content to search forward/backward from
                     * @param content - string to search
                    */
                    function find(index, content) {
                        var result = { start: 0, end: 0 };
                        if (content.length === 0) {
                            return result;
                        }
                        result.start = search(index, content, true);
                        result.end = search(index, content, false);
                        return result;
                    }
                    wordBreaker.find = find;
                    /**
                     * Test for presence of breakers within content
                     * @param content - string to test
                    */
                    function hasBreakers(content) {
                        BREAKERS_REGEX.lastIndex = 0;
                        return BREAKERS_REGEX.test(content);
                    }
                    wordBreaker.hasBreakers = hasBreakers;
                    /**
                     * Count the number of pieces when broken by BREAKERS_REGEX
                     * ~2.7x faster than WordBreaker.split(content).length
                     * @param content - string to break and count
                    */
                    function wordCount(content) {
                        var count = 1;
                        BREAKERS_REGEX.lastIndex = 0;
                        BREAKERS_REGEX.exec(content);
                        while (BREAKERS_REGEX.lastIndex !== 0) {
                            count++;
                            BREAKERS_REGEX.exec(content);
                        }
                        return count;
                    }
                    wordBreaker.wordCount = wordCount;
                    function getMaxWordWidth(content, textWidthMeasurer, properties) {
                        var words = split(content);
                        var maxWidth = 0;
                        for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
                            var w = words_1[_i];
                            properties.text = w;
                            maxWidth = Math.max(maxWidth, textWidthMeasurer(properties));
                        }
                        return maxWidth;
                    }
                    wordBreaker.getMaxWordWidth = getMaxWordWidth;
                    function split(content) {
                        return content.split(BREAKERS_REGEX);
                    }
                    function getWidth(content, properties, textWidthMeasurer) {
                        properties.text = content;
                        return textWidthMeasurer(properties);
                    }
                    function truncate(content, properties, truncator, maxWidth) {
                        properties.text = content;
                        return truncator(properties, maxWidth);
                    }
                    /**
                     * Split content by breakers (words) and greedy fit as many words
                     * into each index in the result based on max width and number of lines
                     * e.g. Each index in result corresponds to a line of content
                     *      when used by AxisHelper.LabelLayoutStrategy.wordBreak
                     * @param content - string to split
                     * @param properties - text properties to be used by @param:textWidthMeasurer
                     * @param textWidthMeasurer - function to calculate width of given text content
                     * @param maxWidth - maximum allowed width of text content in each result
                     * @param maxNumLines - maximum number of results we will allow, valid values must be greater than 0
                     * @param truncator - (optional) if specified, used as a function to truncate content to a given width
                    */
                    function splitByWidth(content, properties, textWidthMeasurer, maxWidth, maxNumLines, truncator) {
                        // Default truncator returns string as-is
                        truncator = truncator ? truncator : function (properties, maxWidth) { return properties.text; };
                        var result = [];
                        var words = split(content);
                        var usedWidth = 0;
                        var wordsInLine = [];
                        for (var _i = 0, words_2 = words; _i < words_2.length; _i++) {
                            var word = words_2[_i];
                            // Last line? Just add whatever is left
                            if ((maxNumLines > 0) && (result.length >= maxNumLines - 1)) {
                                wordsInLine.push(word);
                                continue;
                            }
                            // Determine width if we add this word
                            // Account for SPACE we will add when joining...
                            var wordWidth = wordsInLine.length === 0
                                ? getWidth(word, properties, textWidthMeasurer)
                                : getWidth(SPACE + word, properties, textWidthMeasurer);
                            // If width would exceed max width,
                            // then push used words and start new split result
                            if (usedWidth + wordWidth > maxWidth) {
                                // Word alone exceeds max width, just add it.
                                if (wordsInLine.length === 0) {
                                    result.push(truncate(word, properties, truncator, maxWidth));
                                    usedWidth = 0;
                                    wordsInLine = [];
                                    continue;
                                }
                                result.push(truncate(wordsInLine.join(SPACE), properties, truncator, maxWidth));
                                usedWidth = 0;
                                wordsInLine = [];
                            }
                            // ...otherwise, add word and continue
                            wordsInLine.push(word);
                            usedWidth += wordWidth;
                        }
                        // Push remaining words onto result (if any)
                        if (wordsInLine && wordsInLine.length) {
                            result.push(truncate(wordsInLine.join(SPACE), properties, truncator, maxWidth));
                        }
                        return result;
                    }
                    wordBreaker.splitByWidth = splitByWidth;
                })(wordBreaker = formatting.wordBreaker || (formatting.wordBreaker = {}));
            })(formatting = utils.formatting || (utils.formatting = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
"use strict";
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var formatting;
            (function (formatting) {
                /** Enumeration of DateTimeUnits */
                var DateTimeUnit;
                (function (DateTimeUnit) {
                    DateTimeUnit[DateTimeUnit["Year"] = 0] = "Year";
                    DateTimeUnit[DateTimeUnit["Month"] = 1] = "Month";
                    DateTimeUnit[DateTimeUnit["Week"] = 2] = "Week";
                    DateTimeUnit[DateTimeUnit["Day"] = 3] = "Day";
                    DateTimeUnit[DateTimeUnit["Hour"] = 4] = "Hour";
                    DateTimeUnit[DateTimeUnit["Minute"] = 5] = "Minute";
                    DateTimeUnit[DateTimeUnit["Second"] = 6] = "Second";
                    DateTimeUnit[DateTimeUnit["Millisecond"] = 7] = "Millisecond";
                })(DateTimeUnit = formatting.DateTimeUnit || (formatting.DateTimeUnit = {}));
            })(formatting = utils.formatting || (utils.formatting = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
"use strict";
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var formatting;
            (function (formatting) {
                var createClassAndSelector = powerbi.extensibility.utils.svg.CssConstants.createClassAndSelector;
                // powerbi.extensibility.utils.type
                var PixelConverter = powerbi.extensibility.utils.type.PixelConverter;
                var Prototype = powerbi.extensibility.utils.type.Prototype;
                // powerbi.extensibility.utils.formatting
                var wordBreaker = powerbi.extensibility.utils.formatting.wordBreaker;
                var textMeasurementService;
                (function (textMeasurementService) {
                    var ellipsis = "...";
                    var OverflowingText = createClassAndSelector("overflowingText");
                    var spanElement;
                    var svgTextElement;
                    var canvasCtx;
                    var fallbackFontFamily;
                    /**
                     * Idempotent function for adding the elements to the DOM.
                     */
                    function ensureDOM() {
                        if (spanElement) {
                            return;
                        }
                        spanElement = document.createElement("span");
                        document.body.appendChild(spanElement);
                        // The style hides the svg element from the canvas, preventing canvas from scrolling down to show svg black square.
                        svgTextElement = d3.select(document.body)
                            .append("svg")
                            .style({
                            "height": "0px",
                            "width": "0px",
                            "position": "absolute"
                        })
                            .append("text");
                        var canvasElement = document.createElement("canvas");
                        canvasCtx = canvasElement.getContext("2d");
                        var style = window.getComputedStyle(svgTextElement.node());
                        if (style) {
                            fallbackFontFamily = style.fontFamily;
                        }
                        else {
                            fallbackFontFamily = "";
                        }
                    }
                    /**
                     * Removes spanElement from DOM.
                     */
                    function removeSpanElement() {
                        if (spanElement && spanElement.remove) {
                            spanElement.remove();
                        }
                        spanElement = null;
                    }
                    textMeasurementService.removeSpanElement = removeSpanElement;
                    /**
                     * This method measures the width of the text with the given SVG text properties.
                     * @param textProperties The text properties to use for text measurement.
                     * @param text The text to measure.
                     */
                    function measureSvgTextWidth(textProperties, text) {
                        ensureDOM();
                        canvasCtx.font =
                            (textProperties.fontStyle || "") + " " +
                                (textProperties.fontVariant || "") + " " +
                                (textProperties.fontWeight || "") + " " +
                                textProperties.fontSize + " " +
                                (textProperties.fontFamily || fallbackFontFamily);
                        return canvasCtx.measureText(text || textProperties.text).width;
                    }
                    textMeasurementService.measureSvgTextWidth = measureSvgTextWidth;
                    /**
                     * This method return the rect with the given SVG text properties.
                     * @param textProperties The text properties to use for text measurement.
                     * @param text The text to measure.
                     */
                    function measureSvgTextRect(textProperties, text) {
                        ensureDOM();
                        svgTextElement.style(null);
                        svgTextElement
                            .text(text || textProperties.text)
                            .attr({
                            "visibility": "hidden",
                            "font-family": textProperties.fontFamily || fallbackFontFamily,
                            "font-variant": textProperties.fontVariant,
                            "font-size": textProperties.fontSize,
                            "font-weight": textProperties.fontWeight,
                            "font-style": textProperties.fontStyle,
                            "white-space": textProperties.whiteSpace || "nowrap"
                        });
                        // We're expecting the browser to give a synchronous measurement here
                        // We're using SVGTextElement because it works across all browsers
                        return svgTextElement.node().getBBox();
                    }
                    textMeasurementService.measureSvgTextRect = measureSvgTextRect;
                    /**
                     * This method measures the height of the text with the given SVG text properties.
                     * @param textProperties The text properties to use for text measurement.
                     * @param text The text to measure.
                     */
                    function measureSvgTextHeight(textProperties, text) {
                        return measureSvgTextRect(textProperties, text).height;
                    }
                    textMeasurementService.measureSvgTextHeight = measureSvgTextHeight;
                    /**
                     * This method returns the text Rect with the given SVG text properties.
                     * Does NOT return text width; obliterates text value
                     * @param {TextProperties} textProperties - The text properties to use for text measurement
                     */
                    function estimateSvgTextRect(textProperties) {
                        var propertiesKey = textProperties.fontFamily + textProperties.fontSize;
                        var rect = formatting.ephemeralStorageService.getData(propertiesKey);
                        if (rect == null) {
                            // To estimate we check the height of a particular character, once it is cached, subsequent
                            // calls should always get the height from the cache (regardless of the text).
                            var estimatedTextProperties = {
                                fontFamily: textProperties.fontFamily,
                                fontSize: textProperties.fontSize,
                                text: "M",
                            };
                            rect = textMeasurementService.measureSvgTextRect(estimatedTextProperties);
                            // NOTE: In some cases (disconnected/hidden DOM) we may provide incorrect measurement results (zero sized bounding-box), so
                            // we only store values in the cache if we are confident they are correct.
                            if (rect.height > 0)
                                formatting.ephemeralStorageService.setData(propertiesKey, rect);
                        }
                        return rect;
                    }
                    /**
                     * This method returns the text Rect with the given SVG text properties.
                     * @param {TextProperties} textProperties - The text properties to use for text measurement
                     */
                    function estimateSvgTextBaselineDelta(textProperties) {
                        var rect = estimateSvgTextRect(textProperties);
                        return rect.y + rect.height;
                    }
                    textMeasurementService.estimateSvgTextBaselineDelta = estimateSvgTextBaselineDelta;
                    /**
                     * This method estimates the height of the text with the given SVG text properties.
                     * @param {TextProperties} textProperties - The text properties to use for text measurement
                     */
                    function estimateSvgTextHeight(textProperties, tightFightForNumeric) {
                        if (tightFightForNumeric === void 0) { tightFightForNumeric = false; }
                        var height = estimateSvgTextRect(textProperties).height;
                        // TODO: replace it with new baseline calculation
                        if (tightFightForNumeric)
                            height *= 0.7;
                        return height;
                    }
                    textMeasurementService.estimateSvgTextHeight = estimateSvgTextHeight;
                    /**
                     * This method measures the width of the svgElement.
                     * @param svgElement The SVGTextElement to be measured.
                     */
                    function measureSvgTextElementWidth(svgElement) {
                        return measureSvgTextWidth(getSvgMeasurementProperties(svgElement));
                    }
                    textMeasurementService.measureSvgTextElementWidth = measureSvgTextElementWidth;
                    /**
                     * This method fetches the text measurement properties of the given DOM element.
                     * @param element The selector for the DOM Element.
                     */
                    function getMeasurementProperties(element) {
                        var style = getComputedStyle(element);
                        return {
                            text: element.value || element.textContent,
                            fontFamily: style.fontFamily,
                            fontSize: style.fontSize,
                            fontWeight: style.fontWeight,
                            fontStyle: style.fontStyle,
                            fontVariant: style.fontVariant,
                            whiteSpace: style.whiteSpace
                        };
                    }
                    textMeasurementService.getMeasurementProperties = getMeasurementProperties;
                    /**
                     * This method fetches the text measurement properties of the given SVG text element.
                     * @param svgElement The SVGTextElement to be measured.
                     */
                    function getSvgMeasurementProperties(svgElement) {
                        var style = window.getComputedStyle(svgElement, null);
                        if (style) {
                            return {
                                text: svgElement.textContent,
                                fontFamily: style.fontFamily,
                                fontSize: style.fontSize,
                                fontWeight: style.fontWeight,
                                fontStyle: style.fontStyle,
                                fontVariant: style.fontVariant,
                                whiteSpace: style.whiteSpace
                            };
                        }
                        else {
                            return {
                                text: svgElement.textContent,
                                fontFamily: "",
                                fontSize: "0",
                            };
                        }
                    }
                    textMeasurementService.getSvgMeasurementProperties = getSvgMeasurementProperties;
                    /**
                     * This method returns the width of a div element.
                     * @param element The div element.
                     */
                    function getDivElementWidth(element) {
                        var style = getComputedStyle(element);
                        if (style)
                            return style.width;
                        else
                            return "0";
                    }
                    textMeasurementService.getDivElementWidth = getDivElementWidth;
                    /**
                     * Compares labels text size to the available size and renders ellipses when the available size is smaller.
                     * @param textProperties The text properties (including text content) to use for text measurement.
                     * @param maxWidth The maximum width available for rendering the text.
                     */
                    function getTailoredTextOrDefault(textProperties, maxWidth) {
                        ensureDOM();
                        var strLength = textProperties.text.length;
                        if (strLength === 0) {
                            return textProperties.text;
                        }
                        var width = measureSvgTextWidth(textProperties);
                        if (width < maxWidth) {
                            return textProperties.text;
                        }
                        // Create a copy of the textProperties so we don't modify the one that's passed in.
                        var copiedTextProperties = Prototype.inherit(textProperties);
                        // Take the properties and apply them to svgTextElement
                        // Then, do the binary search to figure out the substring we want
                        // Set the substring on textElement argument
                        var text = copiedTextProperties.text = ellipsis + copiedTextProperties.text;
                        var min = 1;
                        var max = text.length;
                        var i = ellipsis.length;
                        while (min <= max) {
                            // num | 0 prefered to Math.floor(num) for performance benefits
                            i = (min + max) / 2 | 0;
                            copiedTextProperties.text = text.substr(0, i);
                            width = measureSvgTextWidth(copiedTextProperties);
                            if (maxWidth > width) {
                                min = i + 1;
                            }
                            else if (maxWidth < width) {
                                max = i - 1;
                            }
                            else {
                                break;
                            }
                        }
                        // Since the search algorithm almost never finds an exact match,
                        // it will pick one of the closest two, which could result in a
                        // value bigger with than 'maxWidth' thus we need to go back by
                        // one to guarantee a smaller width than 'maxWidth'.
                        copiedTextProperties.text = text.substr(0, i);
                        width = measureSvgTextWidth(copiedTextProperties);
                        if (width > maxWidth) {
                            i--;
                        }
                        return text.substr(ellipsis.length, i - ellipsis.length) + ellipsis;
                    }
                    textMeasurementService.getTailoredTextOrDefault = getTailoredTextOrDefault;
                    /**
                     * Compares labels text size to the available size and renders ellipses when the available size is smaller.
                     * @param textElement The SVGTextElement containing the text to render.
                     * @param maxWidth The maximum width available for rendering the text.
                     */
                    function svgEllipsis(textElement, maxWidth) {
                        var properties = getSvgMeasurementProperties(textElement);
                        var originalText = properties.text;
                        var tailoredText = getTailoredTextOrDefault(properties, maxWidth);
                        if (originalText !== tailoredText) {
                            textElement.textContent = tailoredText;
                        }
                    }
                    textMeasurementService.svgEllipsis = svgEllipsis;
                    /**
                     * Word break textContent of <text> SVG element into <tspan>s
                     * Each tspan will be the height of a single line of text
                     * @param textElement - the SVGTextElement containing the text to wrap
                     * @param maxWidth - the maximum width available
                     * @param maxHeight - the maximum height available (defaults to single line)
                     * @param linePadding - (optional) padding to add to line height
                     */
                    function wordBreak(textElement, maxWidth, maxHeight, linePadding) {
                        if (linePadding === void 0) { linePadding = 0; }
                        var properties = getSvgMeasurementProperties(textElement);
                        var height = estimateSvgTextHeight(properties) + linePadding;
                        var maxNumLines = Math.max(1, Math.floor(maxHeight / height));
                        var node = d3.select(textElement);
                        // Save y of parent textElement to apply as first tspan dy
                        var firstDY = node.attr("y");
                        // Store and clear text content
                        var labelText = textElement.textContent;
                        textElement.textContent = null;
                        // Append a tspan for each word broken section
                        var words = wordBreaker.splitByWidth(labelText, properties, measureSvgTextWidth, maxWidth, maxNumLines);
                        for (var i = 0, ilen = words.length; i < ilen; i++) {
                            properties.text = words[i];
                            node
                                .append("tspan")
                                .attr({
                                "x": 0,
                                "dy": i === 0 ? firstDY : height,
                            })
                                .text(getTailoredTextOrDefault(properties, maxWidth));
                        }
                    }
                    textMeasurementService.wordBreak = wordBreak;
                    /**
                     * Word break textContent of span element into <span>s
                     * Each span will be the height of a single line of text
                     * @param textElement - the element containing the text to wrap
                     * @param maxWidth - the maximum width available
                     * @param maxHeight - the maximum height available (defaults to single line)
                     * @param linePadding - (optional) padding to add to line height
                     */
                    function wordBreakOverflowingText(textElement, maxWidth, maxHeight, linePadding) {
                        if (linePadding === void 0) { linePadding = 0; }
                        var properties = getSvgMeasurementProperties(textElement);
                        var height = estimateSvgTextHeight(properties) + linePadding;
                        var maxNumLines = Math.max(1, Math.floor(maxHeight / height));
                        // Store and clear text content
                        var labelText = textElement.textContent;
                        textElement.textContent = null;
                        // Append a span for each word broken section
                        var words = wordBreaker.splitByWidth(labelText, properties, measureSvgTextWidth, maxWidth, maxNumLines);
                        var spanItem = d3.select(textElement)
                            .selectAll(OverflowingText.selectorName)
                            .data(words);
                        spanItem
                            .enter()
                            .append("span")
                            .classed(OverflowingText.className, true)
                            .text(function (d) { return d; })
                            .style("width", PixelConverter.toString(maxWidth));
                    }
                    textMeasurementService.wordBreakOverflowingText = wordBreakOverflowingText;
                })(textMeasurementService = formatting.textMeasurementService || (formatting.textMeasurementService = {}));
            })(formatting = utils.formatting || (utils.formatting = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
"use strict";
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var formatting;
            (function (formatting) {
                /** dateUtils module provides DateTimeSequence with set of additional date manipulation routines */
                var dateUtils;
                (function (dateUtils) {
                    var MonthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                    var MonthDaysLeap = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                    /**
                     * Returns bool indicating weither the provided year is a leap year.
                     * @param year - year value
                     */
                    function isLeap(year) {
                        return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
                    }
                    /**
                     * Returns number of days in the provided year/month.
                     * @param year - year value
                     * @param month - month value
                     */
                    function getMonthDays(year, month) {
                        return isLeap(year) ? MonthDaysLeap[month] : MonthDays[month];
                    }
                    /**
                     * Adds a specified number of years to the provided date.
                     * @param date - date value
                     * @param yearDelta - number of years to add
                     */
                    function addYears(date, yearDelta) {
                        var year = date.getFullYear();
                        var month = date.getMonth();
                        var day = date.getDate();
                        var isLeapDay = month === 2 && day === 29;
                        var result = new Date(date.getTime());
                        year = year + yearDelta;
                        if (isLeapDay && !isLeap(year)) {
                            day = 28;
                        }
                        result.setFullYear(year, month, day);
                        return result;
                    }
                    dateUtils.addYears = addYears;
                    /**
                     * Adds a specified number of months to the provided date.
                     * @param date - date value
                     * @param monthDelta - number of months to add
                     */
                    function addMonths(date, monthDelta) {
                        var year = date.getFullYear();
                        var month = date.getMonth();
                        var day = date.getDate();
                        var result = new Date(date.getTime());
                        year += (monthDelta - (monthDelta % 12)) / 12;
                        month += monthDelta % 12;
                        // VSTS 1325771: Certain column charts don't display any data
                        // Wrap arround the month if is after december (value 11)
                        if (month > 11) {
                            month = month % 12;
                            year++;
                        }
                        day = Math.min(day, getMonthDays(year, month));
                        result.setFullYear(year, month, day);
                        return result;
                    }
                    dateUtils.addMonths = addMonths;
                    /**
                     * Adds a specified number of weeks to the provided date.
                     * @param date - date value
                     * @param weeks - number of weeks to add
                     */
                    function addWeeks(date, weeks) {
                        return addDays(date, weeks * 7);
                    }
                    dateUtils.addWeeks = addWeeks;
                    /**
                     * Adds a specified number of days to the provided date.
                     * @param date - date value
                     * @param days - number of days to add
                     */
                    function addDays(date, days) {
                        var year = date.getFullYear();
                        var month = date.getMonth();
                        var day = date.getDate();
                        var result = new Date(date.getTime());
                        result.setFullYear(year, month, day + days);
                        return result;
                    }
                    dateUtils.addDays = addDays;
                    /**
                     * Adds a specified number of hours to the provided date.
                     * @param date - date value
                     * @param hours - number of hours to add
                     */
                    function addHours(date, hours) {
                        return new Date(date.getTime() + hours * 3600000);
                    }
                    dateUtils.addHours = addHours;
                    /**
                     * Adds a specified number of minutes to the provided date.
                     * @param date - date value
                     * @param minutes - number of minutes to add
                     */
                    function addMinutes(date, minutes) {
                        return new Date(date.getTime() + minutes * 60000);
                    }
                    dateUtils.addMinutes = addMinutes;
                    /**
                     * Adds a specified number of seconds to the provided date.
                     * @param date - date value
                     * @param seconds - number of seconds to add
                     */
                    function addSeconds(date, seconds) {
                        return new Date(date.getTime() + seconds * 1000);
                    }
                    dateUtils.addSeconds = addSeconds;
                    /**
                     * Adds a specified number of milliseconds to the provided date.
                     * @param date - date value
                     * @param milliseconds - number of milliseconds to add
                     */
                    function addMilliseconds(date, milliseconds) {
                        return new Date(date.getTime() + milliseconds);
                    }
                    dateUtils.addMilliseconds = addMilliseconds;
                })(dateUtils = formatting.dateUtils || (formatting.dateUtils = {}));
            })(formatting = utils.formatting || (utils.formatting = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
"use strict";
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var formatting;
            (function (formatting) {
                // powerbi.extensibility.utils.type
                var NumericSequenceRange = powerbi.extensibility.utils.type.NumericSequenceRange;
                var NumericSequence = powerbi.extensibility.utils.type.NumericSequence;
                var Double = powerbi.extensibility.utils.type.Double;
                // powerbi.extensibility.utils.formatting
                var DateTimeUnit = powerbi.extensibility.utils.formatting.DateTimeUnit;
                /** Repreasents the sequence of the dates/times */
                var DateTimeSequence = (function () {
                    // Constructors
                    /** Creates new instance of the DateTimeSequence */
                    function DateTimeSequence(unit) {
                        this.unit = unit;
                        this.sequence = [];
                        this.min = new Date("9999-12-31T23:59:59.999");
                        this.max = new Date("0001-01-01T00:00:00.000");
                    }
                    // Methods
                    /**
                     * Add a new Date to a sequence.
                     * @param date - date to add
                     */
                    DateTimeSequence.prototype.add = function (date) {
                        if (date < this.min) {
                            this.min = date;
                        }
                        if (date > this.max) {
                            this.max = date;
                        }
                        this.sequence.push(date);
                    };
                    // Methods
                    /**
                     * Extends the sequence to cover new date range
                     * @param min - new min to be covered by sequence
                     * @param max - new max to be covered by sequence
                     */
                    DateTimeSequence.prototype.extendToCover = function (min, max) {
                        var x = this.min;
                        while (min < x) {
                            x = DateTimeSequence.addInterval(x, -this.interval, this.unit);
                            this.sequence.splice(0, 0, x);
                        }
                        this.min = x;
                        x = this.max;
                        while (x < max) {
                            x = DateTimeSequence.addInterval(x, this.interval, this.unit);
                            this.sequence.push(x);
                        }
                        this.max = x;
                    };
                    /**
                     * Move the sequence to cover new date range
                     * @param min - new min to be covered by sequence
                     * @param max - new max to be covered by sequence
                     */
                    DateTimeSequence.prototype.moveToCover = function (min, max) {
                        var delta = DateTimeSequence.getDelta(min, max, this.unit);
                        var count = Math.floor(delta / this.interval);
                        this.min = DateTimeSequence.addInterval(this.min, count * this.interval, this.unit);
                        this.sequence = [];
                        this.sequence.push(this.min);
                        this.max = this.min;
                        while (this.max < max) {
                            this.max = DateTimeSequence.addInterval(this.max, this.interval, this.unit);
                            this.sequence.push(this.max);
                        }
                    };
                    // Static
                    /**
                     * Calculate a new DateTimeSequence
                     * @param dataMin - Date representing min of the data range
                     * @param dataMax - Date representing max of the data range
                     * @param expectedCount - expected number of intervals in the sequence
                     * @param unit - of the intervals in the sequence
                     */
                    DateTimeSequence.calculate = function (dataMin, dataMax, expectedCount, unit) {
                        if (!unit) {
                            unit = DateTimeSequence.getIntervalUnit(dataMin, dataMax, expectedCount);
                        }
                        switch (unit) {
                            case DateTimeUnit.Year:
                                return DateTimeSequence.calculateYears(dataMin, dataMax, expectedCount);
                            case DateTimeUnit.Month:
                                return DateTimeSequence.calculateMonths(dataMin, dataMax, expectedCount);
                            case DateTimeUnit.Week:
                                return DateTimeSequence.calculateWeeks(dataMin, dataMax, expectedCount);
                            case DateTimeUnit.Day:
                                return DateTimeSequence.calculateDays(dataMin, dataMax, expectedCount);
                            case DateTimeUnit.Hour:
                                return DateTimeSequence.calculateHours(dataMin, dataMax, expectedCount);
                            case DateTimeUnit.Minute:
                                return DateTimeSequence.calculateMinutes(dataMin, dataMax, expectedCount);
                            case DateTimeUnit.Second:
                                return DateTimeSequence.calculateSeconds(dataMin, dataMax, expectedCount);
                            case DateTimeUnit.Millisecond:
                                return DateTimeSequence.calculateMilliseconds(dataMin, dataMax, expectedCount);
                        }
                    };
                    DateTimeSequence.calculateYears = function (dataMin, dataMax, expectedCount) {
                        // Calculate range and sequence
                        var yearsRange = NumericSequenceRange.calculateDataRange(dataMin.getFullYear(), dataMax.getFullYear(), false);
                        // Calculate year sequence
                        var sequence = NumericSequence.calculate(NumericSequenceRange.calculate(0, yearsRange.max - yearsRange.min), expectedCount, 0, null, null, [1, 2, 5]);
                        var newMinYear = Math.floor(yearsRange.min / sequence.interval) * sequence.interval;
                        var date = new Date(newMinYear, 0, 1);
                        // Convert to date sequence
                        var result = DateTimeSequence.fromNumericSequence(date, sequence, DateTimeUnit.Year);
                        return result;
                    };
                    DateTimeSequence.calculateMonths = function (dataMin, dataMax, expectedCount) {
                        // Calculate range
                        var minYear = dataMin.getFullYear();
                        var maxYear = dataMax.getFullYear();
                        var minMonth = dataMin.getMonth();
                        var maxMonth = (maxYear - minYear) * 12 + dataMax.getMonth();
                        var date = new Date(minYear, 0, 1);
                        // Calculate month sequence
                        var sequence = NumericSequence.calculateUnits(minMonth, maxMonth, expectedCount, [1, 2, 3, 6, 12]);
                        // Convert to date sequence
                        var result = DateTimeSequence.fromNumericSequence(date, sequence, DateTimeUnit.Month);
                        return result;
                    };
                    DateTimeSequence.calculateWeeks = function (dataMin, dataMax, expectedCount) {
                        var firstDayOfWeek = 0;
                        var minDayOfWeek = dataMin.getDay();
                        var dayOffset = (minDayOfWeek - firstDayOfWeek + 7) % 7;
                        var minDay = dataMin.getDate() - dayOffset;
                        // Calculate range
                        var date = new Date(dataMin.getFullYear(), dataMin.getMonth(), minDay);
                        var min = 0;
                        var max = Double.ceilWithPrecision(DateTimeSequence.getDelta(date, dataMax, DateTimeUnit.Week));
                        // Calculate week sequence
                        var sequence = NumericSequence.calculateUnits(min, max, expectedCount, [1, 2, 4, 8]);
                        // Convert to date sequence
                        var result = DateTimeSequence.fromNumericSequence(date, sequence, DateTimeUnit.Week);
                        return result;
                    };
                    DateTimeSequence.calculateDays = function (dataMin, dataMax, expectedCount) {
                        // Calculate range
                        var date = new Date(dataMin.getFullYear(), dataMin.getMonth(), dataMin.getDate());
                        var min = 0;
                        var max = Double.ceilWithPrecision(DateTimeSequence.getDelta(dataMin, dataMax, DateTimeUnit.Day));
                        // Calculate day sequence
                        var sequence = NumericSequence.calculateUnits(min, max, expectedCount, [1, 2, 7, 14]);
                        // Convert to date sequence
                        var result = DateTimeSequence.fromNumericSequence(date, sequence, DateTimeUnit.Day);
                        return result;
                    };
                    DateTimeSequence.calculateHours = function (dataMin, dataMax, expectedCount) {
                        // Calculate range
                        var date = new Date(dataMin.getFullYear(), dataMin.getMonth(), dataMin.getDate());
                        var min = Double.floorWithPrecision(DateTimeSequence.getDelta(date, dataMin, DateTimeUnit.Hour));
                        var max = Double.ceilWithPrecision(DateTimeSequence.getDelta(date, dataMax, DateTimeUnit.Hour));
                        // Calculate hour sequence
                        var sequence = NumericSequence.calculateUnits(min, max, expectedCount, [1, 2, 3, 6, 12, 24]);
                        // Convert to date sequence
                        var result = DateTimeSequence.fromNumericSequence(date, sequence, DateTimeUnit.Hour);
                        return result;
                    };
                    DateTimeSequence.calculateMinutes = function (dataMin, dataMax, expectedCount) {
                        // Calculate range
                        var date = new Date(dataMin.getFullYear(), dataMin.getMonth(), dataMin.getDate(), dataMin.getHours());
                        var min = Double.floorWithPrecision(DateTimeSequence.getDelta(date, dataMin, DateTimeUnit.Minute));
                        var max = Double.ceilWithPrecision(DateTimeSequence.getDelta(date, dataMax, DateTimeUnit.Minute));
                        // Calculate minutes numeric sequence
                        var sequence = NumericSequence.calculateUnits(min, max, expectedCount, [1, 2, 5, 10, 15, 30, 60, 60 * 2, 60 * 3, 60 * 6, 60 * 12, 60 * 24]);
                        // Convert to date sequence
                        var result = DateTimeSequence.fromNumericSequence(date, sequence, DateTimeUnit.Minute);
                        return result;
                    };
                    DateTimeSequence.calculateSeconds = function (dataMin, dataMax, expectedCount) {
                        // Calculate range
                        var date = new Date(dataMin.getFullYear(), dataMin.getMonth(), dataMin.getDate(), dataMin.getHours(), dataMin.getMinutes());
                        var min = Double.floorWithPrecision(DateTimeSequence.getDelta(date, dataMin, DateTimeUnit.Second));
                        var max = Double.ceilWithPrecision(DateTimeSequence.getDelta(date, dataMax, DateTimeUnit.Second));
                        // Calculate minutes numeric sequence
                        var sequence = NumericSequence.calculateUnits(min, max, expectedCount, [1, 2, 5, 10, 15, 30, 60, 60 * 2, 60 * 5, 60 * 10, 60 * 15, 60 * 30, 60 * 60]);
                        // Convert to date sequence
                        var result = DateTimeSequence.fromNumericSequence(date, sequence, DateTimeUnit.Second);
                        return result;
                    };
                    DateTimeSequence.calculateMilliseconds = function (dataMin, dataMax, expectedCount) {
                        // Calculate range
                        var date = new Date(dataMin.getFullYear(), dataMin.getMonth(), dataMin.getDate(), dataMin.getHours(), dataMin.getMinutes(), dataMin.getSeconds());
                        var min = DateTimeSequence.getDelta(date, dataMin, DateTimeUnit.Millisecond);
                        var max = DateTimeSequence.getDelta(date, dataMax, DateTimeUnit.Millisecond);
                        // Calculate milliseconds numeric sequence
                        var sequence = NumericSequence.calculate(NumericSequenceRange.calculate(min, max), expectedCount, 0);
                        // Convert to date sequence
                        var result = DateTimeSequence.fromNumericSequence(date, sequence, DateTimeUnit.Millisecond);
                        return result;
                    };
                    DateTimeSequence.addInterval = function (value, interval, unit) {
                        interval = Math.round(interval);
                        switch (unit) {
                            case DateTimeUnit.Year:
                                return formatting.dateUtils.addYears(value, interval);
                            case DateTimeUnit.Month:
                                return formatting.dateUtils.addMonths(value, interval);
                            case DateTimeUnit.Week:
                                return formatting.dateUtils.addWeeks(value, interval);
                            case DateTimeUnit.Day:
                                return formatting.dateUtils.addDays(value, interval);
                            case DateTimeUnit.Hour:
                                return formatting.dateUtils.addHours(value, interval);
                            case DateTimeUnit.Minute:
                                return formatting.dateUtils.addMinutes(value, interval);
                            case DateTimeUnit.Second:
                                return formatting.dateUtils.addSeconds(value, interval);
                            case DateTimeUnit.Millisecond:
                                return formatting.dateUtils.addMilliseconds(value, interval);
                        }
                    };
                    DateTimeSequence.fromNumericSequence = function (date, sequence, unit) {
                        var result = new DateTimeSequence(unit);
                        for (var i = 0; i < sequence.sequence.length; i++) {
                            var x = sequence.sequence[i];
                            var d = DateTimeSequence.addInterval(date, x, unit);
                            result.add(d);
                        }
                        result.interval = sequence.interval;
                        result.intervalOffset = sequence.intervalOffset;
                        return result;
                    };
                    DateTimeSequence.getDelta = function (min, max, unit) {
                        var delta = 0;
                        switch (unit) {
                            case DateTimeUnit.Year:
                                delta = max.getFullYear() - min.getFullYear();
                                break;
                            case DateTimeUnit.Month:
                                delta = (max.getFullYear() - min.getFullYear()) * 12 + max.getMonth() - min.getMonth();
                                break;
                            case DateTimeUnit.Week:
                                delta = (max.getTime() - min.getTime()) / (7 * 24 * 3600000);
                                break;
                            case DateTimeUnit.Day:
                                delta = (max.getTime() - min.getTime()) / (24 * 3600000);
                                break;
                            case DateTimeUnit.Hour:
                                delta = (max.getTime() - min.getTime()) / 3600000;
                                break;
                            case DateTimeUnit.Minute:
                                delta = (max.getTime() - min.getTime()) / 60000;
                                break;
                            case DateTimeUnit.Second:
                                delta = (max.getTime() - min.getTime()) / 1000;
                                break;
                            case DateTimeUnit.Millisecond:
                                delta = max.getTime() - min.getTime();
                                break;
                        }
                        return delta;
                    };
                    DateTimeSequence.getIntervalUnit = function (min, max, maxCount) {
                        maxCount = Math.max(maxCount, 2);
                        var totalDays = DateTimeSequence.getDelta(min, max, DateTimeUnit.Day);
                        if (totalDays > 356 && totalDays >= 30 * 6 * maxCount)
                            return DateTimeUnit.Year;
                        if (totalDays > 60 && totalDays > 7 * maxCount)
                            return DateTimeUnit.Month;
                        if (totalDays > 14 && totalDays > 2 * maxCount)
                            return DateTimeUnit.Week;
                        var totalHours = DateTimeSequence.getDelta(min, max, DateTimeUnit.Hour);
                        if (totalDays > 2 && totalHours > 12 * maxCount)
                            return DateTimeUnit.Day;
                        if (totalHours >= 24 && totalHours >= maxCount)
                            return DateTimeUnit.Hour;
                        var totalMinutes = DateTimeSequence.getDelta(min, max, DateTimeUnit.Minute);
                        if (totalMinutes > 2 && totalMinutes >= maxCount)
                            return DateTimeUnit.Minute;
                        var totalSeconds = DateTimeSequence.getDelta(min, max, DateTimeUnit.Second);
                        if (totalSeconds > 2 && totalSeconds >= 0.8 * maxCount)
                            return DateTimeUnit.Second;
                        var totalMilliseconds = DateTimeSequence.getDelta(min, max, DateTimeUnit.Millisecond);
                        if (totalMilliseconds > 0)
                            return DateTimeUnit.Millisecond;
                        // If the size of the range is 0 we need to guess the unit based on the date's non-zero values starting with milliseconds
                        var date = min;
                        if (date.getMilliseconds() !== 0)
                            return DateTimeUnit.Millisecond;
                        if (date.getSeconds() !== 0)
                            return DateTimeUnit.Second;
                        if (date.getMinutes() !== 0)
                            return DateTimeUnit.Minute;
                        if (date.getHours() !== 0)
                            return DateTimeUnit.Hour;
                        if (date.getDate() !== 1)
                            return DateTimeUnit.Day;
                        if (date.getMonth() !== 0)
                            return DateTimeUnit.Month;
                        return DateTimeUnit.Year;
                    };
                    return DateTimeSequence;
                }());
                // Constants
                DateTimeSequence.MIN_COUNT = 1;
                DateTimeSequence.MAX_COUNT = 1000;
                formatting.DateTimeSequence = DateTimeSequence;
            })(formatting = utils.formatting || (utils.formatting = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
"use strict";
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var formatting;
            (function (formatting) {
                var regexCache;
                /**
                 * Translate .NET format into something supported by jQuery.Globalize.
                 */
                function findDateFormat(value, format, cultureName) {
                    switch (format) {
                        case "m":
                            // Month + day
                            format = "M";
                            break;
                        case "O":
                        case "o":
                            // Roundtrip
                            format = "yyyy'-'MM'-'dd'T'HH':'mm':'ss'.'fff'0000'";
                            break;
                        case "R":
                        case "r":
                            // RFC1123 pattern - - time must be converted to UTC before formatting
                            value = new Date(value.getUTCFullYear(), value.getUTCMonth(), value.getUTCDate(), value.getUTCHours(), value.getUTCMinutes(), value.getUTCSeconds(), value.getUTCMilliseconds());
                            format = "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'";
                            break;
                        case "s":
                            // Sortable - should use invariant culture
                            format = "S";
                            break;
                        case "u":
                            // Universal sortable - should convert to UTC before applying the "yyyy'-'MM'-'dd HH':'mm':'ss'Z' format.
                            value = new Date(value.getUTCFullYear(), value.getUTCMonth(), value.getUTCDate(), value.getUTCHours(), value.getUTCMinutes(), value.getUTCSeconds(), value.getUTCMilliseconds());
                            format = "yyyy'-'MM'-'dd HH':'mm':'ss'Z'";
                            break;
                        case "U":
                            // Universal full - the pattern is same as F but the time must be converted to UTC before formatting
                            value = new Date(value.getUTCFullYear(), value.getUTCMonth(), value.getUTCDate(), value.getUTCHours(), value.getUTCMinutes(), value.getUTCSeconds(), value.getUTCMilliseconds());
                            format = "F";
                            break;
                        case "y":
                        case "Y":
                            // Year and month
                            switch (cultureName) {
                                case "default":
                                case "en":
                                case "en-US":
                                    format = "MMMM, yyyy"; // Fix the default year-month pattern for english
                                    break;
                                default:
                                    format = "Y"; // For other cultures - use the localized pattern
                            }
                            break;
                    }
                    return { value: value, format: format };
                }
                formatting.findDateFormat = findDateFormat;
                /**
                 * Translates unsupported .NET custom format expressions to the custom expressions supported by JQuery.Globalize.
                 */
                function fixDateTimeFormat(format) {
                    // Fix for the "K" format (timezone):
                    // T he js dates don't have a kind property so we'll support only local kind which is equavalent to zzz format.
                    format = format.replace(/%K/g, "zzz");
                    format = format.replace(/K/g, "zzz");
                    format = format.replace(/fffffff/g, "fff0000");
                    format = format.replace(/ffffff/g, "fff000");
                    format = format.replace(/fffff/g, "fff00");
                    format = format.replace(/ffff/g, "fff0");
                    // Fix for the 5 digit year: "yyyyy" format.
                    // The Globalize doesn't support dates greater than 9999 so we replace the "yyyyy" with "0yyyy".
                    format = format.replace(/yyyyy/g, "0yyyy");
                    // Fix for the 3 digit year: "yyy" format.
                    // The Globalize doesn't support this formatting so we need to replace it with the 4 digit year "yyyy" format.
                    format = format.replace(/(^y|^)yyy(^y|$)/g, "yyyy");
                    if (!regexCache) {
                        // Creating Regexes for cases "Using single format specifier"
                        // - http://msdn.microsoft.com/en-us/library/8kb3ddd4.aspx#UsingSingleSpecifiers
                        // This is not supported from The Globalize.
                        // The case covers all single "%" lead specifier (like "%d" but not %dd)
                        // The cases as single "%d" are filtered in if the bellow.
                        // (?!S) where S is the specifier make sure that we only one symbol for specifier.
                        regexCache = ["d", "f", "F", "g", "h", "H", "K", "m", "M", "s", "t", "y", "z", ":", "/"].map(function (s) {
                            return { r: new RegExp("\%" + s + "(?!" + s + ")", "g"), s: s };
                        });
                    }
                    if (format.indexOf("%") !== -1 && format.length > 2) {
                        for (var i = 0; i < regexCache.length; i++) {
                            format = format.replace(regexCache[i].r, regexCache[i].s);
                        }
                    }
                    return format;
                }
                formatting.fixDateTimeFormat = fixDateTimeFormat;
            })(formatting = utils.formatting || (utils.formatting = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
"use strict";
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var formatting;
            (function (formatting) {
                var font;
                (function (font_1) {
                    var FamilyInfo = (function () {
                        function FamilyInfo(families) {
                            this.families = families;
                        }
                        Object.defineProperty(FamilyInfo.prototype, "family", {
                            /**
                             * Gets the first font "wf_" font family since it will always be loaded.
                             */
                            get: function () {
                                return this.getFamily();
                            },
                            enumerable: true,
                            configurable: true
                        });
                        /**
                        * Gets the first font family that matches regex (if provided).
                        * Default regex looks for "wf_" fonts which are always loaded.
                        */
                        FamilyInfo.prototype.getFamily = function (regex) {
                            if (regex === void 0) { regex = /^wf_/; }
                            if (!this.families) {
                                return null;
                            }
                            if (regex) {
                                for (var _i = 0, _a = this.families; _i < _a.length; _i++) {
                                    var fontFamily = _a[_i];
                                    if (regex.test(fontFamily)) {
                                        return fontFamily;
                                    }
                                }
                            }
                            return this.families[0];
                        };
                        Object.defineProperty(FamilyInfo.prototype, "css", {
                            /**
                             * Gets the CSS string for the "font-family" CSS attribute.
                             */
                            get: function () {
                                return this.getCSS();
                            },
                            enumerable: true,
                            configurable: true
                        });
                        /**
                         * Gets the CSS string for the "font-family" CSS attribute.
                         */
                        FamilyInfo.prototype.getCSS = function () {
                            return this.families ? this.families.map((function (font) { return font.indexOf(" ") > 0 ? "'" + font + "'" : font; })).join(", ") : null;
                        };
                        return FamilyInfo;
                    }());
                    font_1.FamilyInfo = FamilyInfo;
                })(font = formatting.font || (formatting.font = {}));
            })(formatting = utils.formatting || (utils.formatting = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
"use strict";
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var formatting;
            (function (formatting) {
                var font;
                (function (font) {
                    font.fallbackFonts = ["helvetica", "arial", "sans-serif"];
                    font.Family = {
                        light: new font.FamilyInfo(font.fallbackFonts),
                        semilight: new font.FamilyInfo(font.fallbackFonts),
                        regular: new font.FamilyInfo(font.fallbackFonts),
                        semibold: new font.FamilyInfo(font.fallbackFonts),
                        bold: new font.FamilyInfo(font.fallbackFonts),
                        lightSecondary: new font.FamilyInfo(font.fallbackFonts),
                        regularSecondary: new font.FamilyInfo(font.fallbackFonts),
                        boldSecondary: new font.FamilyInfo(font.fallbackFonts)
                    };
                })(font = formatting.font || (formatting.font = {}));
            })(formatting = utils.formatting || (utils.formatting = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
"use strict";
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var formatting;
            (function (formatting) {
                // powerbi.extensibility.utils.type
                var Double = powerbi.extensibility.utils.type.Double;
                var RegExpExtensions = powerbi.extensibility.utils.type.RegExpExtensions;
                // powerbi.extensibility.utils.formatting
                var stringExtensions = powerbi.extensibility.utils.formatting.stringExtensions;
                var findDateFormat = powerbi.extensibility.utils.formatting.findDateFormat;
                var fixDateTimeFormat = powerbi.extensibility.utils.formatting.fixDateTimeFormat;
                var DateTimeUnit = powerbi.extensibility.utils.formatting.DateTimeUnit;
                /** Formatting Encoder */
                var formattingEncoder;
                (function (formattingEncoder) {
                    // quoted and escaped literal patterns
                    // NOTE: the final three cases match .NET behavior
                    var literalPatterns = [
                        "'[^']*'",
                        "\"[^\"]*\"",
                        "\\\\.",
                        "'[^']*$",
                        "\"[^\"]*$",
                        "\\\\$",
                    ];
                    var literalMatcher = new RegExp(literalPatterns.join("|"), "g");
                    // Unicode U+E000 - U+F8FF is a private area and so we can use the chars from the range to encode the escaped sequences
                    function removeLiterals(format) {
                        literalMatcher.lastIndex = 0;
                        // just in case consecutive non-literals have some meaning
                        return format.replace(literalMatcher, "\uE100");
                    }
                    formattingEncoder.removeLiterals = removeLiterals;
                    function preserveLiterals(format, literals) {
                        literalMatcher.lastIndex = 0;
                        for (;;) {
                            var match = literalMatcher.exec(format);
                            if (!match)
                                break;
                            var literal = match[0];
                            var literalOffset = literalMatcher.lastIndex - literal.length;
                            var token = String.fromCharCode(0xE100 + literals.length);
                            literals.push(literal);
                            format = format.substr(0, literalOffset) + token + format.substr(literalMatcher.lastIndex);
                            // back to avoid skipping due to removed literal substring
                            literalMatcher.lastIndex = literalOffset + 1;
                        }
                        return format;
                    }
                    formattingEncoder.preserveLiterals = preserveLiterals;
                    function restoreLiterals(format, literals, quoted) {
                        if (quoted === void 0) { quoted = true; }
                        var count = literals.length;
                        for (var i = 0; i < count; i++) {
                            var token = String.fromCharCode(0xE100 + i);
                            var literal = literals[i];
                            if (!quoted) {
                                // caller wants literals to be re-inserted without escaping
                                var firstChar = literal[0];
                                if (firstChar === "\\" || literal.length === 1 || literal[literal.length - 1] !== firstChar) {
                                    // either escaped literal OR quoted literal that's missing the trailing quote
                                    // in either case we only remove the leading character
                                    literal = literal.substring(1);
                                }
                                else {
                                    // so must be a quoted literal with both starting and ending quote
                                    literal = literal.substring(1, literal.length - 1);
                                }
                            }
                            format = format.replace(token, literal);
                        }
                        return format;
                    }
                    formattingEncoder.restoreLiterals = restoreLiterals;
                })(formattingEncoder || (formattingEncoder = {}));
                var IndexedTokensRegex = /({{)|(}})|{(\d+[^}]*)}/g;
                var ZeroPlaceholder = "0";
                var DigitPlaceholder = "#";
                var ExponentialFormatChar = "E";
                var NumericPlaceholders = [ZeroPlaceholder, DigitPlaceholder];
                var NumericPlaceholderRegex = new RegExp(NumericPlaceholders.join("|"), "g");
                /** Formatting Service */
                var FormattingService = (function () {
                    function FormattingService() {
                    }
                    FormattingService.prototype.formatValue = function (value, format, cultureSelector) {
                        // Handle special cases
                        if (value === undefined || value === null) {
                            return "";
                        }
                        var gculture = this.getCulture(cultureSelector);
                        if (dateTimeFormat.canFormat(value)) {
                            // Dates
                            return dateTimeFormat.format(value, format, gculture);
                        }
                        else if (numberFormat.canFormat(value)) {
                            // Numbers
                            return numberFormat.format(value, format, gculture);
                        }
                        // Other data types - return as string
                        return value.toString();
                    };
                    FormattingService.prototype.format = function (formatWithIndexedTokens, args, culture) {
                        var _this = this;
                        if (!formatWithIndexedTokens) {
                            return "";
                        }
                        var result = formatWithIndexedTokens.replace(IndexedTokensRegex, function (match, left, right, argToken) {
                            if (left) {
                                return "{";
                            }
                            else if (right) {
                                return "}";
                            }
                            else {
                                var parts = argToken.split(":");
                                var argIndex = parseInt(parts[0], 10);
                                var argFormat = parts[1];
                                return _this.formatValue(args[argIndex], argFormat, culture);
                            }
                        });
                        return result;
                    };
                    FormattingService.prototype.isStandardNumberFormat = function (format) {
                        return numberFormat.isStandardFormat(format);
                    };
                    FormattingService.prototype.formatNumberWithCustomOverride = function (value, format, nonScientificOverrideFormat, culture) {
                        var gculture = this.getCulture(culture);
                        return numberFormat.formatWithCustomOverride(value, format, nonScientificOverrideFormat, gculture);
                    };
                    FormattingService.prototype.dateFormatString = function (unit) {
                        if (!this._dateTimeScaleFormatInfo)
                            this.initialize();
                        return this._dateTimeScaleFormatInfo.getFormatString(unit);
                    };
                    /**
                     * Sets the current localization culture
                     * @param cultureSelector - name of a culture: "en", "en-UK", "fr-FR" etc. (See National Language Support (NLS) for full lists. Use "default" for invariant culture).
                     */
                    FormattingService.prototype.setCurrentCulture = function (cultureSelector) {
                        if (this._currentCultureSelector !== cultureSelector) {
                            this._currentCulture = this.getCulture(cultureSelector);
                            this._currentCultureSelector = cultureSelector;
                            this._dateTimeScaleFormatInfo = new DateTimeScaleFormatInfo(this._currentCulture);
                        }
                    };
                    /**
                     * Gets the culture assotiated with the specified cultureSelector ("en", "en-US", "fr-FR" etc).
                     * @param cultureSelector - name of a culture: "en", "en-UK", "fr-FR" etc. (See National Language Support (NLS) for full lists. Use "default" for invariant culture).
                     * Exposing this function for testability of unsupported cultures
                     */
                    FormattingService.prototype.getCulture = function (cultureSelector) {
                        if (cultureSelector == null) {
                            if (this._currentCulture == null) {
                                this.initialize();
                            }
                            return this._currentCulture;
                        }
                        else {
                            var culture = Globalize.findClosestCulture(cultureSelector);
                            if (!culture)
                                culture = Globalize.culture("en-US");
                            return culture;
                        }
                    };
                    /** By default the Globalization module initializes to the culture/calendar provided in the language/culture URL params */
                    FormattingService.prototype.initialize = function () {
                        var cultureName = this.getCurrentCulture();
                        this.setCurrentCulture(cultureName);
                        var calendarName = this.getUrlParam("calendar");
                        if (calendarName) {
                            var culture = this._currentCulture;
                            var c = culture.calendars[calendarName];
                            if (c) {
                                culture.calendar = c;
                            }
                        }
                    };
                    /**
                     *  Exposing this function for testability
                     */
                    FormattingService.prototype.getCurrentCulture = function () {
                        var urlParam = this.getUrlParam("language");
                        if (urlParam) {
                            return urlParam;
                        }
                        if (powerbi && powerbi.common && powerbi.common.cultureInfo) {
                            // Get cultureInfo set in powerbi
                            return powerbi.common.cultureInfo;
                        }
                        return window.navigator.userLanguage || window.navigator["language"] || Globalize.culture().name;
                    };
                    /**
                     *  Exposing this function for testability
                     *  @param name: queryString name
                     */
                    FormattingService.prototype.getUrlParam = function (name) {
                        var param = window.location.search.match(RegExp("[?&]" + name + "=([^&]*)"));
                        return param ? param[1] : undefined;
                    };
                    return FormattingService;
                }());
                formatting.FormattingService = FormattingService;
                /**
                 * DateTimeFormat module contains the static methods for formatting the DateTimes.
                 * It extends the JQuery.Globalize functionality to support complete set of .NET
                 * formatting expressions for dates.
                 */
                var dateTimeFormat;
                (function (dateTimeFormat) {
                    var _currentCachedFormat;
                    var _currentCachedProcessedFormat;
                    /** Evaluates if the value can be formatted using the NumberFormat */
                    function canFormat(value) {
                        var result = value instanceof Date;
                        return result;
                    }
                    dateTimeFormat.canFormat = canFormat;
                    /** Formats the date using provided format and culture */
                    function format(value, format, culture) {
                        format = format || "G";
                        var isStandard = format.length === 1;
                        try {
                            if (isStandard) {
                                return formatDateStandard(value, format, culture);
                            }
                            else {
                                return formatDateCustom(value, format, culture);
                            }
                        }
                        catch (e) {
                            return formatDateStandard(value, "G", culture);
                        }
                    }
                    dateTimeFormat.format = format;
                    /** Formats the date using standard format expression */
                    function formatDateStandard(value, format, culture) {
                        // In order to provide parity with .NET we have to support additional set of DateTime patterns.
                        var patterns = culture.calendar.patterns;
                        // Extend supported set of patterns
                        ensurePatterns(culture.calendar);
                        // Handle extended set of formats
                        var output = findDateFormat(value, format, culture.name);
                        if (output.format.length === 1)
                            format = patterns[output.format];
                        else
                            format = output.format;
                        // need to revisit when globalization is enabled
                        if (!culture) {
                            culture = Globalize.culture("en-US");
                        }
                        return Globalize.format(output.value, format, culture);
                    }
                    /** Formats the date using custom format expression */
                    function formatDateCustom(value, format, culture) {
                        var result;
                        var literals = [];
                        format = formattingEncoder.preserveLiterals(format, literals);
                        if (format.indexOf("F") > -1) {
                            // F is not supported so we need to replace the F with f based on the milliseconds
                            // Replace all sequences of F longer than 3 with "FFF"
                            format = stringExtensions.replaceAll(format, "FFFF", "FFF");
                            // Based on milliseconds update the format to use fff
                            var milliseconds = value.getMilliseconds();
                            if (milliseconds % 10 >= 1) {
                                format = stringExtensions.replaceAll(format, "FFF", "fff");
                            }
                            format = stringExtensions.replaceAll(format, "FFF", "FF");
                            if ((milliseconds % 100) / 10 >= 1) {
                                format = stringExtensions.replaceAll(format, "FF", "ff");
                            }
                            format = stringExtensions.replaceAll(format, "FF", "F");
                            if ((milliseconds % 1000) / 100 >= 1) {
                                format = stringExtensions.replaceAll(format, "F", "f");
                            }
                            format = stringExtensions.replaceAll(format, "F", "");
                            if (format === "" || format === "%")
                                return "";
                        }
                        format = processCustomDateTimeFormat(format);
                        result = Globalize.format(value, format, culture);
                        result = localize(result, culture.calendar);
                        result = formattingEncoder.restoreLiterals(result, literals, false);
                        return result;
                    }
                    /** Translates unsupported .NET custom format expressions to the custom expressions supported by JQuery.Globalize */
                    function processCustomDateTimeFormat(format) {
                        if (format === _currentCachedFormat) {
                            return _currentCachedProcessedFormat;
                        }
                        _currentCachedFormat = format;
                        format = fixDateTimeFormat(format);
                        _currentCachedProcessedFormat = format;
                        return format;
                    }
                    /** Localizes the time separator symbol */
                    function localize(value, dictionary) {
                        var timeSeparator = dictionary[":"];
                        if (timeSeparator === ":") {
                            return value;
                        }
                        var result = "";
                        var count = value.length;
                        for (var i = 0; i < count; i++) {
                            var char = value.charAt(i);
                            switch (char) {
                                case ":":
                                    result += timeSeparator;
                                    break;
                                default:
                                    result += char;
                                    break;
                            }
                        }
                        return result;
                    }
                    function ensurePatterns(calendar) {
                        var patterns = calendar.patterns;
                        if (patterns["g"] === undefined) {
                            patterns["g"] = patterns["f"].replace(patterns["D"], patterns["d"]); // Generic: Short date, short time
                            patterns["G"] = patterns["F"].replace(patterns["D"], patterns["d"]); // Generic: Short date, long time
                        }
                    }
                })(dateTimeFormat || (dateTimeFormat = {}));
                /**
                 * NumberFormat module contains the static methods for formatting the numbers.
                 * It extends the JQuery.Globalize functionality to support complete set of .NET
                 * formatting expressions for numeric types including custom formats.
                 */
                var numberFormat;
                (function (numberFormat) {
                    var NonScientificFormatRegex = /^\{.+\}.*/;
                    var NumericalPlaceHolderRegex = /\{.+\}/;
                    var ScientificFormatRegex = /e[+-]*[0#]+/i;
                    var StandardFormatRegex = /^[a-z]\d{0,2}$/i; // a letter + up to 2 digits for precision specifier
                    var TrailingZerosRegex = /0+$/;
                    var DecimalFormatRegex = /\.([0#]*)/g;
                    var NumericFormatRegex = /[0#,\.]+[0,#]*/g;
                    // (?=...) is a positive lookahead assertion. The RE is asking for the last digit placeholder, [0#],
                    // which is followed by non-digit placeholders and the end of string, [^0#]*$. But it only matches
                    // the last digit placeholder, not anything that follows because the positive lookahead isn"t included
                    // in the match - it is only a condition.
                    var LastNumericPlaceholderRegex = /([0#])(?=[^0#]*$)/;
                    var DecimalFormatCharacter = ".";
                    numberFormat.NumberFormatComponentsDelimeter = ";";
                    function getNonScientificFormatWithPrecision(baseFormat, numericFormat) {
                        if (!numericFormat || baseFormat === undefined)
                            return baseFormat;
                        var newFormat = "{0:" + numericFormat + "}";
                        return baseFormat.replace("{0}", newFormat);
                    }
                    function getNumericFormat(value, baseFormat) {
                        if (baseFormat == null)
                            return baseFormat;
                        if (hasFormatComponents(baseFormat)) {
                            var _a = numberFormat.getComponents(baseFormat), positive = _a.positive, negative = _a.negative, zero = _a.zero;
                            if (value > 0)
                                return getNumericFormatFromComponent(value, positive);
                            else if (value === 0)
                                return getNumericFormatFromComponent(value, zero);
                            return getNumericFormatFromComponent(value, negative);
                        }
                        return getNumericFormatFromComponent(value, baseFormat);
                    }
                    numberFormat.getNumericFormat = getNumericFormat;
                    function getNumericFormatFromComponent(value, format) {
                        var match = RegExpExtensions.run(NumericFormatRegex, format);
                        if (match)
                            return match[0];
                        return format;
                    }
                    function addDecimalsToFormat(baseFormat, decimals, trailingZeros) {
                        if (decimals == null)
                            return baseFormat;
                        // Default format string
                        if (baseFormat == null)
                            baseFormat = ZeroPlaceholder;
                        if (hasFormatComponents(baseFormat)) {
                            var _a = numberFormat.getComponents(baseFormat), positive = _a.positive, negative = _a.negative, zero = _a.zero;
                            var formats = [positive, negative, zero];
                            for (var i = 0; i < formats.length; i++) {
                                // Update format in formats array
                                formats[i] = addDecimalsToFormatComponent(formats[i], decimals, trailingZeros);
                            }
                            return formats.join(numberFormat.NumberFormatComponentsDelimeter);
                        }
                        return addDecimalsToFormatComponent(baseFormat, decimals, trailingZeros);
                    }
                    numberFormat.addDecimalsToFormat = addDecimalsToFormat;
                    function addDecimalsToFormatComponent(format, decimals, trailingZeros) {
                        decimals = Math.abs(decimals);
                        if (decimals >= 0) {
                            var literals = [];
                            format = formattingEncoder.preserveLiterals(format, literals);
                            var placeholder = trailingZeros ? ZeroPlaceholder : DigitPlaceholder;
                            var decimalPlaceholders = stringExtensions.repeat(placeholder, Math.abs(decimals));
                            var match = RegExpExtensions.run(DecimalFormatRegex, format);
                            if (match) {
                                var beforeDecimal = format.substr(0, match.index);
                                var formatDecimal = format.substr(match.index + 1, match[1].length);
                                var afterDecimal = format.substr(match.index + match[0].length);
                                if (trailingZeros)
                                    // Use explicit decimals argument as placeholders
                                    formatDecimal = decimalPlaceholders;
                                else {
                                    var decimalChange = decimalPlaceholders.length - formatDecimal.length;
                                    if (decimalChange > 0)
                                        // Append decimalPlaceholders to existing decimal portion of format string
                                        formatDecimal = formatDecimal + decimalPlaceholders.slice(-decimalChange);
                                    else if (decimalChange < 0)
                                        // Remove decimals from formatDecimal
                                        formatDecimal = formatDecimal.slice(0, decimalChange);
                                }
                                if (formatDecimal.length > 0)
                                    formatDecimal = DecimalFormatCharacter + formatDecimal;
                                format = beforeDecimal + formatDecimal + afterDecimal;
                            }
                            else if (decimalPlaceholders.length > 0) {
                                // Replace last numeric placeholder with decimal portion
                                format = format.replace(LastNumericPlaceholderRegex, "$1" + DecimalFormatCharacter + decimalPlaceholders);
                            }
                            if (literals.length !== 0)
                                format = formattingEncoder.restoreLiterals(format, literals);
                        }
                        return format;
                    }
                    function hasFormatComponents(format) {
                        return formattingEncoder.removeLiterals(format).indexOf(numberFormat.NumberFormatComponentsDelimeter) !== -1;
                    }
                    numberFormat.hasFormatComponents = hasFormatComponents;
                    function getComponents(format) {
                        var signFormat = {
                            hasNegative: false,
                            positive: format,
                            negative: format,
                            zero: format,
                        };
                        // escape literals so semi-colon in a literal isn't interpreted as a delimiter
                        // NOTE: OK to use the literals extracted here for all three components before since the literals are indexed.
                        // For example, "'pos-lit';'neg-lit'" will get preserved as "\uE000;\uE001" and the literal array will be
                        // ['pos-lit', 'neg-lit']. When the negative components is restored, its \uE001 will select the second
                        // literal.
                        var literals = [];
                        format = formattingEncoder.preserveLiterals(format, literals);
                        var signSpecificFormats = format.split(numberFormat.NumberFormatComponentsDelimeter);
                        var formatCount = signSpecificFormats.length;
                        if (formatCount > 1) {
                            if (literals.length !== 0)
                                signSpecificFormats = signSpecificFormats.map(function (signSpecificFormat) { return formattingEncoder.restoreLiterals(signSpecificFormat, literals); });
                            signFormat.hasNegative = true;
                            signFormat.positive = signFormat.zero = signSpecificFormats[0];
                            signFormat.negative = signSpecificFormats[1];
                            if (formatCount > 2)
                                signFormat.zero = signSpecificFormats[2];
                        }
                        return signFormat;
                    }
                    numberFormat.getComponents = getComponents;
                    var _lastCustomFormatMeta;
                    /** Evaluates if the value can be formatted using the NumberFormat */
                    function canFormat(value) {
                        var result = typeof (value) === "number";
                        return result;
                    }
                    numberFormat.canFormat = canFormat;
                    function isStandardFormat(format) {
                        return StandardFormatRegex.test(format);
                    }
                    numberFormat.isStandardFormat = isStandardFormat;
                    /** Formats the number using specified format expression and culture */
                    function format(value, format, culture) {
                        format = format || "G";
                        try {
                            if (isStandardFormat(format))
                                return formatNumberStandard(value, format, culture);
                            return formatNumberCustom(value, format, culture);
                        }
                        catch (e) {
                            return Globalize.format(value, undefined, culture);
                        }
                    }
                    numberFormat.format = format;
                    /** Performs a custom format with a value override.  Typically used for custom formats showing scaled values. */
                    function formatWithCustomOverride(value, format, nonScientificOverrideFormat, culture) {
                        return formatNumberCustom(value, format, culture, nonScientificOverrideFormat);
                    }
                    numberFormat.formatWithCustomOverride = formatWithCustomOverride;
                    /** Formats the number using standard format expression */
                    function formatNumberStandard(value, format, culture) {
                        var result;
                        var precision = (format.length > 1 ? parseInt(format.substr(1, format.length - 1), 10) : undefined);
                        var numberFormatInfo = culture.numberFormat;
                        var formatChar = format.charAt(0);
                        switch (formatChar) {
                            case "e":
                            case "E":
                                if (precision === undefined) {
                                    precision = 6;
                                }
                                var mantissaDecimalDigits = stringExtensions.repeat("0", precision);
                                format = "0." + mantissaDecimalDigits + formatChar + "+000";
                                result = formatNumberCustom(value, format, culture);
                                break;
                            case "f":
                            case "F":
                                result = precision !== undefined ? value.toFixed(precision) : value.toFixed(numberFormatInfo.decimals);
                                result = localize(result, numberFormatInfo);
                                break;
                            case "g":
                            case "G":
                                var abs = Math.abs(value);
                                if (abs === 0 || (1E-4 <= abs && abs < 1E15)) {
                                    // For the range of 0.0001 to 1,000,000,000,000,000 - use the normal form
                                    result = precision !== undefined ? value.toPrecision(precision) : value.toString();
                                }
                                else {
                                    // Otherwise use exponential
                                    // Assert that value is a number and fall back on returning value if it is not
                                    if (typeof (value) !== "number")
                                        return String(value);
                                    result = precision !== undefined ? value.toExponential(precision) : value.toExponential();
                                    result = result.replace("e", "E");
                                }
                                result = localize(result, numberFormatInfo);
                                break;
                            case "r":
                            case "R":
                                result = value.toString();
                                result = localize(result, numberFormatInfo);
                                break;
                            case "x":
                            case "X":
                                result = value.toString(16);
                                if (formatChar === "X") {
                                    result = result.toUpperCase();
                                }
                                if (precision !== undefined) {
                                    var actualPrecision = result.length;
                                    var isNegative = value < 0;
                                    if (isNegative) {
                                        actualPrecision--;
                                    }
                                    var paddingZerosCount = precision - actualPrecision;
                                    var paddingZeros = undefined;
                                    if (paddingZerosCount > 0) {
                                        paddingZeros = stringExtensions.repeat("0", paddingZerosCount);
                                    }
                                    if (isNegative) {
                                        result = "-" + paddingZeros + result.substr(1);
                                    }
                                    else {
                                        result = paddingZeros + result;
                                    }
                                }
                                result = localize(result, numberFormatInfo);
                                break;
                            default:
                                result = Globalize.format(value, format, culture);
                        }
                        return result;
                    }
                    /** Formats the number using custom format expression */
                    function formatNumberCustom(value, format, culture, nonScientificOverrideFormat) {
                        var result;
                        var numberFormatInfo = culture.numberFormat;
                        if (isFinite(value)) {
                            // Split format by positive[;negative;zero] pattern
                            var formatComponents = getComponents(format);
                            // Pick a format based on the sign of value
                            if (value > 0) {
                                format = formatComponents.positive;
                            }
                            else if (value === 0) {
                                format = formatComponents.zero;
                            }
                            else {
                                format = formatComponents.negative;
                            }
                            // Normalize value if we have an explicit negative format
                            if (formatComponents.hasNegative)
                                value = Math.abs(value);
                            // Get format metadata
                            var formatMeta = getCustomFormatMetadata(format, true /*calculatePrecision*/);
                            // Preserve literals and escaped chars
                            var literals = [];
                            if (formatMeta.hasLiterals) {
                                format = formattingEncoder.preserveLiterals(format, literals);
                            }
                            // Scientific format
                            if (formatMeta.hasE && !nonScientificOverrideFormat) {
                                var scientificMatch = RegExpExtensions.run(ScientificFormatRegex, format);
                                if (scientificMatch) {
                                    // Case 2.1. Scientific custom format
                                    var formatM = format.substr(0, scientificMatch.index);
                                    var formatE = format.substr(scientificMatch.index + 2); // E(+|-)
                                    var precision = getCustomFormatPrecision(formatM, formatMeta);
                                    var scale = getCustomFormatScale(formatM, formatMeta);
                                    if (scale !== 1) {
                                        value = value * scale;
                                    }
                                    // Assert that value is a number and fall back on returning value if it is not
                                    if (typeof (value) !== "number")
                                        return String(value);
                                    var s = value.toExponential(precision);
                                    var indexOfE = s.indexOf("e");
                                    var mantissa = s.substr(0, indexOfE);
                                    var exp = s.substr(indexOfE + 1);
                                    var resultM = fuseNumberWithCustomFormat(mantissa, formatM, numberFormatInfo);
                                    var resultE = fuseNumberWithCustomFormat(exp, formatE, numberFormatInfo);
                                    if (resultE.charAt(0) === "+" && scientificMatch[0].charAt(1) !== "+") {
                                        resultE = resultE.substr(1);
                                    }
                                    var e = scientificMatch[0].charAt(0);
                                    result = resultM + e + resultE;
                                }
                            }
                            // Non scientific format
                            if (result === undefined) {
                                var valueFormatted = void 0;
                                var isValueGlobalized = false;
                                var precision = getCustomFormatPrecision(format, formatMeta);
                                var scale = getCustomFormatScale(format, formatMeta);
                                if (scale !== 1)
                                    value = value * scale;
                                // Rounding
                                value = parseFloat(toNonScientific(value, precision));
                                if (!isFinite(value)) {
                                    // very large and small finite values can become infinite by parseFloat(toNonScientific())
                                    return Globalize.format(value, undefined);
                                }
                                if (nonScientificOverrideFormat) {
                                    // Get numeric format from format string
                                    var numericFormat = numberFormat.getNumericFormat(value, format);
                                    // Add separators and decimalFormat to nonScientificFormat
                                    nonScientificOverrideFormat = getNonScientificFormatWithPrecision(nonScientificOverrideFormat, numericFormat);
                                    // Format the value
                                    valueFormatted = formatting.formattingService.format(nonScientificOverrideFormat, [value], culture.name);
                                    isValueGlobalized = true;
                                }
                                else
                                    valueFormatted = toNonScientific(value, precision);
                                result = fuseNumberWithCustomFormat(valueFormatted, format, numberFormatInfo, nonScientificOverrideFormat, isValueGlobalized);
                            }
                            if (formatMeta.hasLiterals) {
                                result = formattingEncoder.restoreLiterals(result, literals, false);
                            }
                            _lastCustomFormatMeta = formatMeta;
                        }
                        else {
                            return Globalize.format(value, undefined);
                        }
                        return result;
                    }
                    /** Returns string with the fixed point respresentation of the number */
                    function toNonScientific(value, precision) {
                        var result = "";
                        var precisionZeros = 0;
                        // Double precision numbers support actual 15-16 decimal digits of precision.
                        if (precision > 16) {
                            precisionZeros = precision - 16;
                            precision = 16;
                        }
                        var digitsBeforeDecimalPoint = Double.log10(Math.abs(value));
                        if (digitsBeforeDecimalPoint < 16) {
                            if (digitsBeforeDecimalPoint > 0) {
                                var maxPrecision = 16 - digitsBeforeDecimalPoint;
                                if (precision > maxPrecision) {
                                    precisionZeros += precision - maxPrecision;
                                    precision = maxPrecision;
                                }
                            }
                            result = value.toFixed(precision);
                        }
                        else if (digitsBeforeDecimalPoint === 16) {
                            result = value.toFixed(0);
                            precisionZeros += precision;
                            if (precisionZeros > 0) {
                                result += ".";
                            }
                        }
                        else {
                            // Different browsers have different implementations of the toFixed().
                            // In IE it returns fixed format no matter what's the number. In FF and Chrome the method returns exponential format for numbers greater than 1E21.
                            // So we need to check for range and convert the to exponential with the max precision.
                            // Then we convert exponential string to fixed by removing the dot and padding with "power" zeros.
                            // Assert that value is a number and fall back on returning value if it is not
                            if (typeof (value) !== "number")
                                return String(value);
                            result = value.toExponential(15);
                            var indexOfE = result.indexOf("e");
                            if (indexOfE > 0) {
                                var indexOfDot = result.indexOf(".");
                                var mantissa = result.substr(0, indexOfE);
                                var exp = result.substr(indexOfE + 1);
                                var powerZeros = parseInt(exp, 10) - (mantissa.length - indexOfDot - 1);
                                result = mantissa.replace(".", "") + stringExtensions.repeat("0", powerZeros);
                                if (precision > 0) {
                                    result = result + "." + stringExtensions.repeat("0", precision);
                                }
                            }
                        }
                        if (precisionZeros > 0) {
                            result = result + stringExtensions.repeat("0", precisionZeros);
                        }
                        return result;
                    }
                    /**
                     * Returns the formatMetadata of the format
                     * When calculating precision and scale, if format string of
                     * positive[;negative;zero] => positive format will be used
                     * @param (required) format - format string
                     * @param (optional) calculatePrecision - calculate precision of positive format
                     * @param (optional) calculateScale - calculate scale of positive format
                     */
                    function getCustomFormatMetadata(format, calculatePrecision, calculateScale, calculatePartsPerScale) {
                        if (_lastCustomFormatMeta !== undefined && format === _lastCustomFormatMeta.format) {
                            return _lastCustomFormatMeta;
                        }
                        var literals = [];
                        var escaped = formattingEncoder.preserveLiterals(format, literals);
                        var result = {
                            format: format,
                            hasLiterals: literals.length !== 0,
                            hasE: false,
                            hasCommas: false,
                            hasDots: false,
                            hasPercent: false,
                            hasPermile: false,
                            precision: undefined,
                            scale: undefined,
                            partsPerScale: undefined,
                        };
                        for (var i = 0, length_1 = escaped.length; i < length_1; i++) {
                            var c = escaped.charAt(i);
                            switch (c) {
                                case "e":
                                case "E":
                                    result.hasE = true;
                                    break;
                                case ",":
                                    result.hasCommas = true;
                                    break;
                                case ".":
                                    result.hasDots = true;
                                    break;
                                case "%":
                                    result.hasPercent = true;
                                    break;
                                case "\u2030":
                                    result.hasPermile = true;
                                    break;
                            }
                        }
                        // Use positive format for calculating these values
                        var formatComponents = getComponents(format);
                        if (calculatePrecision)
                            result.precision = getCustomFormatPrecision(formatComponents.positive, result);
                        if (calculatePartsPerScale)
                            result.partsPerScale = getCustomFormatPartsPerScale(formatComponents.positive, result);
                        if (calculateScale)
                            result.scale = getCustomFormatScale(formatComponents.positive, result);
                        return result;
                    }
                    numberFormat.getCustomFormatMetadata = getCustomFormatMetadata;
                    /** Returns the decimal precision of format based on the number of # and 0 chars after the decimal point
                      * Important: The input format string needs to be split to the appropriate pos/neg/zero portion to work correctly */
                    function getCustomFormatPrecision(format, formatMeta) {
                        if (formatMeta.precision > -1) {
                            return formatMeta.precision;
                        }
                        var result = 0;
                        if (formatMeta.hasDots) {
                            if (formatMeta.hasLiterals) {
                                format = formattingEncoder.removeLiterals(format);
                            }
                            var dotIndex = format.indexOf(".");
                            if (dotIndex > -1) {
                                var count = format.length;
                                for (var i = dotIndex; i < count; i++) {
                                    var char = format.charAt(i);
                                    if (char.match(NumericPlaceholderRegex))
                                        result++;
                                    // 0.00E+0 :: Break before counting 0 in
                                    // exponential portion of format string
                                    if (char === ExponentialFormatChar)
                                        break;
                                }
                                result = Math.min(19, result);
                            }
                        }
                        formatMeta.precision = result;
                        return result;
                    }
                    function getCustomFormatPartsPerScale(format, formatMeta) {
                        if (formatMeta.partsPerScale != null)
                            return formatMeta.partsPerScale;
                        var result = 1;
                        if (formatMeta.hasPercent && format.indexOf("%") > -1) {
                            result = result * 100;
                        }
                        if (formatMeta.hasPermile && format.indexOf(/* ‰ */ "\u2030") > -1) {
                            result = result * 1000;
                        }
                        formatMeta.partsPerScale = result;
                        return result;
                    }
                    /** Returns the scale factor of the format based on the "%" and scaling "," chars in the format */
                    function getCustomFormatScale(format, formatMeta) {
                        if (formatMeta.scale > -1) {
                            return formatMeta.scale;
                        }
                        var result = getCustomFormatPartsPerScale(format, formatMeta);
                        if (formatMeta.hasCommas) {
                            var dotIndex = format.indexOf(".");
                            if (dotIndex === -1) {
                                dotIndex = format.length;
                            }
                            for (var i = dotIndex - 1; i > -1; i--) {
                                var char = format.charAt(i);
                                if (char === ",") {
                                    result = result / 1000;
                                }
                                else {
                                    break;
                                }
                            }
                        }
                        formatMeta.scale = result;
                        return result;
                    }
                    function fuseNumberWithCustomFormat(value, format, numberFormatInfo, nonScientificOverrideFormat, isValueGlobalized) {
                        var suppressModifyValue = !!nonScientificOverrideFormat;
                        var formatParts = format.split(".", 2);
                        if (formatParts.length === 2) {
                            var wholeFormat = formatParts[0];
                            var fractionFormat = formatParts[1];
                            var displayUnit = "";
                            // Remove display unit from value before splitting on "." as localized display units sometimes end with "."
                            if (nonScientificOverrideFormat) {
                                displayUnit = nonScientificOverrideFormat.replace(NumericalPlaceHolderRegex, "");
                                value = value.replace(displayUnit, "");
                            }
                            var globalizedDecimalSeparator = numberFormatInfo["."];
                            var decimalSeparator = isValueGlobalized ? globalizedDecimalSeparator : ".";
                            var valueParts = value.split(decimalSeparator, 2);
                            var wholeValue = valueParts.length === 1 ? valueParts[0] + displayUnit : valueParts[0];
                            var fractionValue = valueParts.length === 2 ? valueParts[1] + displayUnit : "";
                            fractionValue = fractionValue.replace(TrailingZerosRegex, "");
                            var wholeFormattedValue = fuseNumberWithCustomFormatLeft(wholeValue, wholeFormat, numberFormatInfo, suppressModifyValue);
                            var fractionFormattedValue = fuseNumberWithCustomFormatRight(fractionValue, fractionFormat, suppressModifyValue);
                            if (fractionFormattedValue.fmtOnly || fractionFormattedValue.value === "")
                                return wholeFormattedValue + fractionFormattedValue.value;
                            return wholeFormattedValue + globalizedDecimalSeparator + fractionFormattedValue.value;
                        }
                        return fuseNumberWithCustomFormatLeft(value, format, numberFormatInfo, suppressModifyValue);
                    }
                    function fuseNumberWithCustomFormatLeft(value, format, numberFormatInfo, suppressModifyValue) {
                        var groupSymbolIndex = format.indexOf(",");
                        var enableGroups = groupSymbolIndex > -1 && groupSymbolIndex < Math.max(format.lastIndexOf("0"), format.lastIndexOf("#")) && numberFormatInfo[","];
                        var groupDigitCount = 0;
                        var groupIndex = 0;
                        var groupSizes = numberFormatInfo.groupSizes || [3];
                        var groupSize = groupSizes[0];
                        var groupSeparator = numberFormatInfo[","];
                        var sign = "";
                        var firstChar = value.charAt(0);
                        if (firstChar === "+" || firstChar === "-") {
                            sign = numberFormatInfo[firstChar];
                            value = value.substr(1);
                        }
                        var isZero = value === "0";
                        var result = "";
                        var leftBuffer = "";
                        var vi = value.length - 1;
                        var fmtOnly = true;
                        // Iterate through format chars and replace 0 and # with the digits from the value string
                        for (var fi = format.length - 1; fi > -1; fi--) {
                            var formatChar = format.charAt(fi);
                            switch (formatChar) {
                                case ZeroPlaceholder:
                                case DigitPlaceholder:
                                    fmtOnly = false;
                                    if (leftBuffer !== "") {
                                        result = leftBuffer + result;
                                        leftBuffer = "";
                                    }
                                    if (!suppressModifyValue) {
                                        if (vi > -1 || formatChar === ZeroPlaceholder) {
                                            if (enableGroups) {
                                                // If the groups are enabled we'll need to keep track of the current group index and periodically insert group separator,
                                                if (groupDigitCount === groupSize) {
                                                    result = groupSeparator + result;
                                                    groupIndex++;
                                                    if (groupIndex < groupSizes.length) {
                                                        groupSize = groupSizes[groupIndex];
                                                    }
                                                    groupDigitCount = 1;
                                                }
                                                else {
                                                    groupDigitCount++;
                                                }
                                            }
                                        }
                                        if (vi > -1) {
                                            if (isZero && formatChar === DigitPlaceholder) {
                                            }
                                            else {
                                                result = value.charAt(vi) + result;
                                            }
                                            vi--;
                                        }
                                        else if (formatChar !== DigitPlaceholder) {
                                            result = formatChar + result;
                                        }
                                    }
                                    break;
                                case ",":
                                    // We should skip all the , chars
                                    break;
                                default:
                                    leftBuffer = formatChar + leftBuffer;
                                    break;
                            }
                        }
                        // If the value didn't fit into the number of zeros provided in the format then we should insert the missing part of the value into the result
                        if (!suppressModifyValue) {
                            if (vi > -1 && result !== "") {
                                if (enableGroups) {
                                    while (vi > -1) {
                                        if (groupDigitCount === groupSize) {
                                            result = groupSeparator + result;
                                            groupIndex++;
                                            if (groupIndex < groupSizes.length) {
                                                groupSize = groupSizes[groupIndex];
                                            }
                                            groupDigitCount = 1;
                                        }
                                        else {
                                            groupDigitCount++;
                                        }
                                        result = value.charAt(vi) + result;
                                        vi--;
                                    }
                                }
                                else {
                                    result = value.substr(0, vi + 1) + result;
                                }
                            }
                            // Insert sign in front of the leftBuffer and result
                            return sign + leftBuffer + result;
                        }
                        if (fmtOnly)
                            // If the format doesn't specify any digits to be displayed, then just return the format we've parsed up until now.
                            return sign + leftBuffer + result;
                        return sign + leftBuffer + value + result;
                    }
                    function fuseNumberWithCustomFormatRight(value, format, suppressModifyValue) {
                        var vi = 0;
                        var fCount = format.length;
                        var vCount = value.length;
                        if (suppressModifyValue) {
                            var lastChar = format.charAt(fCount - 1);
                            if (!lastChar.match(NumericPlaceholderRegex))
                                return {
                                    value: value + lastChar,
                                    fmtOnly: value === "",
                                };
                            return {
                                value: value,
                                fmtOnly: value === "",
                            };
                        }
                        var result = "", fmtOnly = true;
                        for (var fi = 0; fi < fCount; fi++) {
                            var formatChar = format.charAt(fi);
                            if (vi < vCount) {
                                switch (formatChar) {
                                    case ZeroPlaceholder:
                                    case DigitPlaceholder:
                                        result += value[vi++];
                                        fmtOnly = false;
                                        break;
                                    default:
                                        result += formatChar;
                                }
                            }
                            else {
                                if (formatChar !== DigitPlaceholder) {
                                    result += formatChar;
                                    fmtOnly = fmtOnly && (formatChar !== ZeroPlaceholder);
                                }
                            }
                        }
                        return {
                            value: result,
                            fmtOnly: fmtOnly,
                        };
                    }
                    function localize(value, dictionary) {
                        var plus = dictionary["+"];
                        var minus = dictionary["-"];
                        var dot = dictionary["."];
                        var comma = dictionary[","];
                        if (plus === "+" && minus === "-" && dot === "." && comma === ",") {
                            return value;
                        }
                        var count = value.length;
                        var result = "";
                        for (var i = 0; i < count; i++) {
                            var char = value.charAt(i);
                            switch (char) {
                                case "+":
                                    result = result + plus;
                                    break;
                                case "-":
                                    result = result + minus;
                                    break;
                                case ".":
                                    result = result + dot;
                                    break;
                                case ",":
                                    result = result + comma;
                                    break;
                                default:
                                    result = result + char;
                                    break;
                            }
                        }
                        return result;
                    }
                })(numberFormat = formatting.numberFormat || (formatting.numberFormat = {}));
                /** DateTimeScaleFormatInfo is used to calculate and keep the Date formats used for different units supported by the DateTimeScaleModel */
                var DateTimeScaleFormatInfo = (function () {
                    // Constructor
                    /**
                     * Creates new instance of the DateTimeScaleFormatInfo class.
                     * @param culture - culture which calendar info is going to be used to derive the formats.
                     */
                    function DateTimeScaleFormatInfo(culture) {
                        var calendar = culture.calendar;
                        var patterns = calendar.patterns;
                        var monthAbbreviations = calendar["months"]["namesAbbr"];
                        var cultureHasMonthAbbr = monthAbbreviations && monthAbbreviations[0];
                        var yearMonthPattern = patterns["Y"];
                        var monthDayPattern = patterns["M"];
                        var fullPattern = patterns["f"];
                        var longTimePattern = patterns["T"];
                        var shortTimePattern = patterns["t"];
                        var separator = fullPattern.indexOf(",") > -1 ? ", " : " ";
                        var hasYearSymbol = yearMonthPattern.indexOf("yyyy'") === 0 && yearMonthPattern.length > 6 && yearMonthPattern[6] === "\'";
                        this.YearPattern = hasYearSymbol ? yearMonthPattern.substr(0, 7) : "yyyy";
                        var yearPos = fullPattern.indexOf("yy");
                        var monthPos = fullPattern.indexOf("MMMM");
                        this.MonthPattern = cultureHasMonthAbbr && monthPos > -1 ? (yearPos > monthPos ? "MMM yyyy" : "yyyy MMM") : yearMonthPattern;
                        this.DayPattern = cultureHasMonthAbbr ? monthDayPattern.replace("MMMM", "MMM") : monthDayPattern;
                        var minutePos = fullPattern.indexOf("mm");
                        var pmPos = fullPattern.indexOf("tt");
                        var shortHourPattern = pmPos > -1 ? shortTimePattern.replace(":mm ", "") : shortTimePattern;
                        this.HourPattern = yearPos < minutePos ? this.DayPattern + separator + shortHourPattern : shortHourPattern + separator + this.DayPattern;
                        this.MinutePattern = shortTimePattern;
                        this.SecondPattern = longTimePattern;
                        this.MillisecondPattern = longTimePattern.replace("ss", "ss.fff");
                        // Special cases
                        switch (culture.name) {
                            case "fi-FI":
                                this.DayPattern = this.DayPattern.replace("'ta'", ""); // Fix for finish 'ta' suffix for month names.
                                this.HourPattern = this.HourPattern.replace("'ta'", "");
                                break;
                        }
                    }
                    // Methods
                    /**
                     * Returns the format string of the provided DateTimeUnit.
                     * @param unit - date or time unit
                     */
                    DateTimeScaleFormatInfo.prototype.getFormatString = function (unit) {
                        switch (unit) {
                            case DateTimeUnit.Year:
                                return this.YearPattern;
                            case DateTimeUnit.Month:
                                return this.MonthPattern;
                            case DateTimeUnit.Week:
                            case DateTimeUnit.Day:
                                return this.DayPattern;
                            case DateTimeUnit.Hour:
                                return this.HourPattern;
                            case DateTimeUnit.Minute:
                                return this.MinutePattern;
                            case DateTimeUnit.Second:
                                return this.SecondPattern;
                            case DateTimeUnit.Millisecond:
                                return this.MillisecondPattern;
                        }
                    };
                    return DateTimeScaleFormatInfo;
                }());
                formatting.formattingService = new FormattingService();
            })(formatting = utils.formatting || (utils.formatting = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
"use strict";
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var formatting;
            (function (formatting) {
                /** The system used to determine display units used during formatting */
                var DisplayUnitSystemType;
                (function (DisplayUnitSystemType) {
                    /** Default display unit system, which saves space by using units such as K, M, bn with PowerView rules for when to pick a unit. Suitable for chart axes. */
                    DisplayUnitSystemType[DisplayUnitSystemType["Default"] = 0] = "Default";
                    /** A verbose display unit system that will only respect the formatting defined in the model. Suitable for explore mode single-value cards. */
                    DisplayUnitSystemType[DisplayUnitSystemType["Verbose"] = 1] = "Verbose";
                    /**
                     * A display unit system that uses units such as K, M, bn if we have at least one of those units (e.g. 0.9M is not valid as it's less than 1 million).
                     * Suitable for dashboard tile cards
                     */
                    DisplayUnitSystemType[DisplayUnitSystemType["WholeUnits"] = 2] = "WholeUnits";
                    /**A display unit system that also contains Auto and None units for data labels*/
                    DisplayUnitSystemType[DisplayUnitSystemType["DataLabels"] = 3] = "DataLabels";
                })(DisplayUnitSystemType = formatting.DisplayUnitSystemType || (formatting.DisplayUnitSystemType = {}));
            })(formatting = utils.formatting || (utils.formatting = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
"use strict";
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var formatting;
            (function (formatting) {
                var Double = powerbi.extensibility.utils.type.Double;
                var NumberFormat = powerbi.extensibility.utils.formatting.numberFormat;
                var formattingService = powerbi.extensibility.utils.formatting.formattingService;
                // Constants
                var maxExponent = 24;
                var defaultScientificBigNumbersBoundary = 1E15;
                var scientificSmallNumbersBoundary = 1E-4;
                var PERCENTAGE_FORMAT = "%";
                var SCIENTIFIC_FORMAT = "E+0";
                var DEFAULT_SCIENTIFIC_FORMAT = "0.##" + SCIENTIFIC_FORMAT;
                // Regular expressions
                /**
                 * This regex looks for strings that match one of the following conditions:
                 *   - Optionally contain "0", "#", followed by a period, followed by at least one "0" or "#" (Ex. ###,000.###)
                 *   - Contains at least one of "0", "#", or "," (Ex. ###,000)
                 *   - Contain a "g" (indicates to use the general .NET numeric format string)
                 * The entire string (start to end) must match, and the match is not case-sensitive.
                 */
                var SUPPORTED_SCIENTIFIC_FORMATS = /^([0\#,]*\.[0\#]+|[0\#,]+|g)$/i;
                var DisplayUnit = (function () {
                    function DisplayUnit() {
                    }
                    // Methods
                    DisplayUnit.prototype.project = function (value) {
                        if (this.value) {
                            return Double.removeDecimalNoise(value / this.value);
                        }
                        else {
                            return value;
                        }
                    };
                    DisplayUnit.prototype.reverseProject = function (value) {
                        if (this.value) {
                            return value * this.value;
                        }
                        else {
                            return value;
                        }
                    };
                    DisplayUnit.prototype.isApplicableTo = function (value) {
                        value = Math.abs(value);
                        var precision = Double.getPrecision(value, 3);
                        return Double.greaterOrEqualWithPrecision(value, this.applicableRangeMin, precision) && Double.lessWithPrecision(value, this.applicableRangeMax, precision);
                    };
                    DisplayUnit.prototype.isScaling = function () {
                        return this.value > 1;
                    };
                    return DisplayUnit;
                }());
                formatting.DisplayUnit = DisplayUnit;
                var DisplayUnitSystem = (function () {
                    // Constructor
                    function DisplayUnitSystem(units) {
                        this.units = units ? units : [];
                    }
                    Object.defineProperty(DisplayUnitSystem.prototype, "title", {
                        // Properties
                        get: function () {
                            return this.displayUnit ? this.displayUnit.title : undefined;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    // Methods
                    DisplayUnitSystem.prototype.update = function (value) {
                        if (value === undefined)
                            return;
                        this.unitBaseValue = value;
                        this.displayUnit = this.findApplicableDisplayUnit(value);
                    };
                    DisplayUnitSystem.prototype.findApplicableDisplayUnit = function (value) {
                        for (var _i = 0, _a = this.units; _i < _a.length; _i++) {
                            var unit = _a[_i];
                            if (unit.isApplicableTo(value))
                                return unit;
                        }
                        return undefined;
                    };
                    DisplayUnitSystem.prototype.format = function (value, format, decimals, trailingZeros, cultureSelector) {
                        decimals = this.getNumberOfDecimalsForFormatting(format, decimals);
                        var nonScientificFormat = "";
                        if (this.isFormatSupported(format)
                            && !this.hasScientitifcFormat(format)
                            && this.isScalingUnit()
                            && this.shouldRespectScalingUnit(format)) {
                            value = this.displayUnit.project(value);
                            nonScientificFormat = this.displayUnit.labelFormat;
                        }
                        return this.formatHelper({
                            value: value,
                            nonScientificFormat: nonScientificFormat,
                            format: format,
                            decimals: decimals,
                            trailingZeros: trailingZeros,
                            cultureSelector: cultureSelector
                        });
                    };
                    DisplayUnitSystem.prototype.isFormatSupported = function (format) {
                        return !DisplayUnitSystem.UNSUPPORTED_FORMATS.test(format);
                    };
                    DisplayUnitSystem.prototype.isPercentageFormat = function (format) {
                        return format && format.indexOf(PERCENTAGE_FORMAT) >= 0;
                    };
                    DisplayUnitSystem.prototype.shouldRespectScalingUnit = function (format) {
                        return true;
                    };
                    DisplayUnitSystem.prototype.getNumberOfDecimalsForFormatting = function (format, decimals) {
                        return decimals;
                    };
                    DisplayUnitSystem.prototype.isScalingUnit = function () {
                        return this.displayUnit && this.displayUnit.isScaling();
                    };
                    DisplayUnitSystem.prototype.formatHelper = function (options) {
                        var value = options.value, nonScientificFormat = options.nonScientificFormat, cultureSelector = options.cultureSelector, format = options.format, decimals = options.decimals, trailingZeros = options.trailingZeros;
                        // If the format is "general" and we want to override the number of decimal places then use the default numeric format string.
                        if ((format === "g" || format === "G") && decimals != null) {
                            format = "#,0.00";
                        }
                        format = NumberFormat.addDecimalsToFormat(format, decimals, trailingZeros);
                        if (format && !formattingService.isStandardNumberFormat(format))
                            return formattingService.formatNumberWithCustomOverride(value, format, nonScientificFormat);
                        if (!format) {
                            format = "G";
                        }
                        if (!nonScientificFormat) {
                            nonScientificFormat = "{0}";
                        }
                        var text = formattingService.formatValue(value, format, cultureSelector);
                        return formattingService.format(nonScientificFormat, [text]);
                    };
                    /** Formats a single value by choosing an appropriate base for the DisplayUnitSystem before formatting. */
                    DisplayUnitSystem.prototype.formatSingleValue = function (value, format, decimals, trailingZeros, cultureSelector) {
                        // Change unit base to a value appropriate for this value
                        this.update(this.shouldUseValuePrecision(value) ? Double.getPrecision(value, 8) : value);
                        return this.format(value, format, decimals, trailingZeros, cultureSelector);
                    };
                    DisplayUnitSystem.prototype.shouldUseValuePrecision = function (value) {
                        if (this.units.length === 0)
                            return true;
                        // Check if the value is big enough to have a valid unit by checking against the smallest unit (that it's value bigger than 1).
                        var applicableRangeMin = 0;
                        for (var i = 0; i < this.units.length; i++) {
                            if (this.units[i].isScaling()) {
                                applicableRangeMin = this.units[i].applicableRangeMin;
                                break;
                            }
                        }
                        return Math.abs(value) < applicableRangeMin;
                    };
                    DisplayUnitSystem.prototype.isScientific = function (value) {
                        return value < -defaultScientificBigNumbersBoundary || value > defaultScientificBigNumbersBoundary ||
                            (-scientificSmallNumbersBoundary < value && value < scientificSmallNumbersBoundary && value !== 0);
                    };
                    DisplayUnitSystem.prototype.hasScientitifcFormat = function (format) {
                        return format && format.toUpperCase().indexOf("E") !== -1;
                    };
                    DisplayUnitSystem.prototype.supportsScientificFormat = function (format) {
                        if (format)
                            return SUPPORTED_SCIENTIFIC_FORMATS.test(format);
                        return true;
                    };
                    DisplayUnitSystem.prototype.shouldFallbackToScientific = function (value, format) {
                        return !this.hasScientitifcFormat(format)
                            && this.supportsScientificFormat(format)
                            && this.isScientific(value);
                    };
                    DisplayUnitSystem.prototype.getScientificFormat = function (data, format, decimals, trailingZeros) {
                        // Use scientific format outside of the range
                        if (this.isFormatSupported(format) && this.shouldFallbackToScientific(data, format)) {
                            var numericFormat = NumberFormat.getNumericFormat(data, format);
                            if (decimals)
                                numericFormat = NumberFormat.addDecimalsToFormat(numericFormat ? numericFormat : "0", Math.abs(decimals), trailingZeros);
                            if (numericFormat)
                                return numericFormat + SCIENTIFIC_FORMAT;
                            else
                                return DEFAULT_SCIENTIFIC_FORMAT;
                        }
                        return format;
                    };
                    return DisplayUnitSystem;
                }());
                DisplayUnitSystem.UNSUPPORTED_FORMATS = /^(p\d*)|(e\d*)$/i;
                formatting.DisplayUnitSystem = DisplayUnitSystem;
                /** Provides a unit system that is defined by formatting in the model, and is suitable for visualizations shown in single number visuals in explore mode. */
                var NoDisplayUnitSystem = (function (_super) {
                    __extends(NoDisplayUnitSystem, _super);
                    // Constructor
                    function NoDisplayUnitSystem() {
                        return _super.call(this, []) || this;
                    }
                    return NoDisplayUnitSystem;
                }(DisplayUnitSystem));
                formatting.NoDisplayUnitSystem = NoDisplayUnitSystem;
                /** Provides a unit system that creates a more concise format for displaying values. This is suitable for most of the cases where
                    we are showing values (chart axes) and as such it is the default unit system. */
                var DefaultDisplayUnitSystem = (function (_super) {
                    __extends(DefaultDisplayUnitSystem, _super);
                    // Constructor
                    function DefaultDisplayUnitSystem(unitLookup) {
                        return _super.call(this, DefaultDisplayUnitSystem.getUnits(unitLookup)) || this;
                    }
                    // Methods
                    DefaultDisplayUnitSystem.prototype.format = function (data, format, decimals, trailingZeros, cultureSelector) {
                        format = this.getScientificFormat(data, format, decimals, trailingZeros);
                        return _super.prototype.format.call(this, data, format, decimals, trailingZeros, cultureSelector);
                    };
                    DefaultDisplayUnitSystem.reset = function () {
                        DefaultDisplayUnitSystem.units = null;
                    };
                    DefaultDisplayUnitSystem.getUnits = function (unitLookup) {
                        if (!DefaultDisplayUnitSystem.units) {
                            DefaultDisplayUnitSystem.units = createDisplayUnits(unitLookup, function (value, previousUnitValue, min) {
                                // When dealing with millions/billions/trillions we need to switch to millions earlier: for example instead of showing 100K 200K 300K we should show 0.1M 0.2M 0.3M etc
                                if (value - previousUnitValue >= 1000) {
                                    return value / 10;
                                }
                                return min;
                            });
                            // Ensure last unit has max of infinity
                            DefaultDisplayUnitSystem.units[DefaultDisplayUnitSystem.units.length - 1].applicableRangeMax = Infinity;
                        }
                        return DefaultDisplayUnitSystem.units;
                    };
                    return DefaultDisplayUnitSystem;
                }(DisplayUnitSystem));
                formatting.DefaultDisplayUnitSystem = DefaultDisplayUnitSystem;
                /** Provides a unit system that creates a more concise format for displaying values, but only allows showing a unit if we have at least
                    one of those units (e.g. 0.9M is not allowed since it's less than 1 million). This is suitable for cases such as dashboard tiles
                    where we have restricted space but do not want to show partial units. */
                var WholeUnitsDisplayUnitSystem = (function (_super) {
                    __extends(WholeUnitsDisplayUnitSystem, _super);
                    // Constructor
                    function WholeUnitsDisplayUnitSystem(unitLookup) {
                        return _super.call(this, WholeUnitsDisplayUnitSystem.getUnits(unitLookup)) || this;
                    }
                    WholeUnitsDisplayUnitSystem.reset = function () {
                        WholeUnitsDisplayUnitSystem.units = null;
                    };
                    WholeUnitsDisplayUnitSystem.getUnits = function (unitLookup) {
                        if (!WholeUnitsDisplayUnitSystem.units) {
                            WholeUnitsDisplayUnitSystem.units = createDisplayUnits(unitLookup);
                            // Ensure last unit has max of infinity
                            WholeUnitsDisplayUnitSystem.units[WholeUnitsDisplayUnitSystem.units.length - 1].applicableRangeMax = Infinity;
                        }
                        return WholeUnitsDisplayUnitSystem.units;
                    };
                    WholeUnitsDisplayUnitSystem.prototype.format = function (data, format, decimals, trailingZeros, cultureSelector) {
                        format = this.getScientificFormat(data, format, decimals, trailingZeros);
                        return _super.prototype.format.call(this, data, format, decimals, trailingZeros, cultureSelector);
                    };
                    return WholeUnitsDisplayUnitSystem;
                }(DisplayUnitSystem));
                formatting.WholeUnitsDisplayUnitSystem = WholeUnitsDisplayUnitSystem;
                var DataLabelsDisplayUnitSystem = (function (_super) {
                    __extends(DataLabelsDisplayUnitSystem, _super);
                    function DataLabelsDisplayUnitSystem(unitLookup) {
                        return _super.call(this, DataLabelsDisplayUnitSystem.getUnits(unitLookup)) || this;
                    }
                    DataLabelsDisplayUnitSystem.prototype.isFormatSupported = function (format) {
                        return !DataLabelsDisplayUnitSystem.UNSUPPORTED_FORMATS.test(format);
                    };
                    DataLabelsDisplayUnitSystem.getUnits = function (unitLookup) {
                        if (!DataLabelsDisplayUnitSystem.units) {
                            var units = [];
                            var adjustMinBasedOnPreviousUnit = function (value, previousUnitValue, min) {
                                // Never returns true, we are always ignoring
                                // We do not early switch (e.g. 100K instead of 0.1M)
                                // Intended? If so, remove this function, otherwise, remove if statement
                                if (value === -1)
                                    if (value - previousUnitValue >= 1000) {
                                        return value / 10;
                                    }
                                return min;
                            };
                            // Add Auto & None
                            var names = unitLookup(-1);
                            addUnitIfNonEmpty(units, DataLabelsDisplayUnitSystem.AUTO_DISPLAYUNIT_VALUE, names.title, names.format, adjustMinBasedOnPreviousUnit);
                            names = unitLookup(0);
                            addUnitIfNonEmpty(units, DataLabelsDisplayUnitSystem.NONE_DISPLAYUNIT_VALUE, names.title, names.format, adjustMinBasedOnPreviousUnit);
                            // Add normal units
                            DataLabelsDisplayUnitSystem.units = units.concat(createDisplayUnits(unitLookup, adjustMinBasedOnPreviousUnit));
                            // Ensure last unit has max of infinity
                            DataLabelsDisplayUnitSystem.units[DataLabelsDisplayUnitSystem.units.length - 1].applicableRangeMax = Infinity;
                        }
                        return DataLabelsDisplayUnitSystem.units;
                    };
                    DataLabelsDisplayUnitSystem.prototype.format = function (data, format, decimals, trailingZeros, cultureSelector) {
                        format = this.getScientificFormat(data, format, decimals, trailingZeros);
                        return _super.prototype.format.call(this, data, format, decimals, trailingZeros, cultureSelector);
                    };
                    return DataLabelsDisplayUnitSystem;
                }(DisplayUnitSystem));
                // Constants
                DataLabelsDisplayUnitSystem.AUTO_DISPLAYUNIT_VALUE = 0;
                DataLabelsDisplayUnitSystem.NONE_DISPLAYUNIT_VALUE = 1;
                DataLabelsDisplayUnitSystem.UNSUPPORTED_FORMATS = /^(e\d*)$/i;
                formatting.DataLabelsDisplayUnitSystem = DataLabelsDisplayUnitSystem;
                function createDisplayUnits(unitLookup, adjustMinBasedOnPreviousUnit) {
                    var units = [];
                    for (var i = 3; i < maxExponent; i++) {
                        var names = unitLookup(i);
                        if (names)
                            addUnitIfNonEmpty(units, Double.pow10(i), names.title, names.format, adjustMinBasedOnPreviousUnit);
                    }
                    return units;
                }
                function addUnitIfNonEmpty(units, value, title, labelFormat, adjustMinBasedOnPreviousUnit) {
                    if (title || labelFormat) {
                        var min = value;
                        if (units.length > 0) {
                            var previousUnit = units[units.length - 1];
                            if (adjustMinBasedOnPreviousUnit)
                                min = adjustMinBasedOnPreviousUnit(value, previousUnit.value, min);
                            previousUnit.applicableRangeMax = min;
                        }
                        var unit = new DisplayUnit();
                        unit.value = value;
                        unit.applicableRangeMin = min;
                        unit.applicableRangeMax = min * 1000;
                        unit.title = title;
                        unit.labelFormat = labelFormat;
                        units.push(unit);
                    }
                }
            })(formatting = utils.formatting || (utils.formatting = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
"use strict";
/**
 * Contains functions/constants to aid in text manupilation.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var formatting;
            (function (formatting) {
                var textUtil;
                (function (textUtil) {
                    /**
                     * Remove breaking spaces from given string and replace by none breaking space (&nbsp).
                     */
                    function removeBreakingSpaces(str) {
                        return str.toString().replace(new RegExp(" ", "g"), "&nbsp");
                    }
                    textUtil.removeBreakingSpaces = removeBreakingSpaces;
                    /**
                     * Remove ellipses from a given string
                     */
                    function removeEllipses(str) {
                        return str.replace(/(…)|(\.\.\.)/g, "");
                    }
                    textUtil.removeEllipses = removeEllipses;
                    /**
                    * Replace every whitespace (0x20) with Non-Breaking Space (0xA0)
                     * @param {string} txt String to replace White spaces
                     * @returns Text after replcing white spaces
                     */
                    function replaceSpaceWithNBSP(txt) {
                        if (txt != null) {
                            return txt.replace(/ /g, "\xA0");
                        }
                    }
                    textUtil.replaceSpaceWithNBSP = replaceSpaceWithNBSP;
                })(textUtil = formatting.textUtil || (formatting.textUtil = {}));
            })(formatting = utils.formatting || (utils.formatting = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
"use strict";
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var formatting;
            (function (formatting) {
                // powerbi.extensibility.utils.type
                var ValueType = powerbi.extensibility.utils.type.ValueType;
                var PrimitiveType = powerbi.extensibility.utils.type.PrimitiveType;
                var Double = powerbi.extensibility.utils.type.Double;
                // powerbi.extensibility.utils.formatting
                var stringExtensions = powerbi.extensibility.utils.formatting.stringExtensions;
                var DisplayUnitSystemType = powerbi.extensibility.utils.formatting.DisplayUnitSystemType;
                var DefaultDisplayUnitSystem = powerbi.extensibility.utils.formatting.DefaultDisplayUnitSystem;
                var NumberFormat = powerbi.extensibility.utils.formatting.numberFormat;
                var WholeUnitsDisplayUnitSystem = powerbi.extensibility.utils.formatting.WholeUnitsDisplayUnitSystem;
                var DateTimeSequence = powerbi.extensibility.utils.formatting.DateTimeSequence;
                var NoDisplayUnitSystem = powerbi.extensibility.utils.formatting.NoDisplayUnitSystem;
                var DataLabelsDisplayUnitSystem = powerbi.extensibility.utils.formatting.DataLabelsDisplayUnitSystem;
                var formattingService = powerbi.extensibility.utils.formatting.formattingService;
                // powerbi.extensibility.utils.dataview
                var DataViewObjects = powerbi.extensibility.utils.dataview.DataViewObjects;
                var valueFormatter;
                (function (valueFormatter) {
                    var StringExtensions = stringExtensions;
                    var BeautifiedFormat = {
                        "0.00 %;-0.00 %;0.00 %": "Percentage",
                        "0.0 %;-0.0 %;0.0 %": "Percentage1",
                    };
                    valueFormatter.DefaultIntegerFormat = "g";
                    valueFormatter.DefaultNumericFormat = "#,0.00";
                    valueFormatter.DefaultDateFormat = "d";
                    var defaultLocalizedStrings = {
                        "NullValue": "(Blank)",
                        "BooleanTrue": "True",
                        "BooleanFalse": "False",
                        "NaNValue": "NaN",
                        "InfinityValue": "+Infinity",
                        "NegativeInfinityValue": "-Infinity",
                        "RestatementComma": "{0}, {1}",
                        "RestatementCompoundAnd": "{0} and {1}",
                        "RestatementCompoundOr": "{0} or {1}",
                        "DisplayUnitSystem_EAuto_Title": "Auto",
                        "DisplayUnitSystem_E0_Title": "None",
                        "DisplayUnitSystem_E3_LabelFormat": "{0}K",
                        "DisplayUnitSystem_E3_Title": "Thousands",
                        "DisplayUnitSystem_E6_LabelFormat": "{0}M",
                        "DisplayUnitSystem_E6_Title": "Millions",
                        "DisplayUnitSystem_E9_LabelFormat": "{0}bn",
                        "DisplayUnitSystem_E9_Title": "Billions",
                        "DisplayUnitSystem_E12_LabelFormat": "{0}T",
                        "DisplayUnitSystem_E12_Title": "Trillions",
                        "Percentage": "#,0.##%",
                        "Percentage1": "#,0.#%",
                        "TableTotalLabel": "Total",
                        "Tooltip_HighlightedValueDisplayName": "Highlighted",
                        "Funnel_PercentOfFirst": "Percent of first",
                        "Funnel_PercentOfPrevious": "Percent of previous",
                        "Funnel_PercentOfFirst_Highlight": "Percent of first (highlighted)",
                        "Funnel_PercentOfPrevious_Highlight": "Percent of previous (highlighted)",
                        // Geotagging strings
                        "GeotaggingString_Continent": "continent",
                        "GeotaggingString_Continents": "continents",
                        "GeotaggingString_Country": "country",
                        "GeotaggingString_Countries": "countries",
                        "GeotaggingString_State": "state",
                        "GeotaggingString_States": "states",
                        "GeotaggingString_City": "city",
                        "GeotaggingString_Cities": "cities",
                        "GeotaggingString_Town": "town",
                        "GeotaggingString_Towns": "towns",
                        "GeotaggingString_Province": "province",
                        "GeotaggingString_Provinces": "provinces",
                        "GeotaggingString_County": "county",
                        "GeotaggingString_Counties": "counties",
                        "GeotaggingString_Village": "village",
                        "GeotaggingString_Villages": "villages",
                        "GeotaggingString_Post": "post",
                        "GeotaggingString_Zip": "zip",
                        "GeotaggingString_Code": "code",
                        "GeotaggingString_Place": "place",
                        "GeotaggingString_Places": "places",
                        "GeotaggingString_Address": "address",
                        "GeotaggingString_Addresses": "addresses",
                        "GeotaggingString_Street": "street",
                        "GeotaggingString_Streets": "streets",
                        "GeotaggingString_Longitude": "longitude",
                        "GeotaggingString_Longitude_Short": "lon",
                        "GeotaggingString_Longitude_Short2": "long",
                        "GeotaggingString_Latitude": "latitude",
                        "GeotaggingString_Latitude_Short": "lat",
                        "GeotaggingString_PostalCode": "postal code",
                        "GeotaggingString_PostalCodes": "postal codes",
                        "GeotaggingString_ZipCode": "zip code",
                        "GeotaggingString_ZipCodes": "zip codes",
                        "GeotaggingString_Territory": "territory",
                        "GeotaggingString_Territories": "territories",
                    };
                    function beautify(format) {
                        var key = BeautifiedFormat[format];
                        if (key)
                            return defaultLocalizedStrings[key] || format;
                        return format;
                    }
                    function describeUnit(exponent) {
                        var exponentLookup = (exponent === -1) ? "Auto" : exponent.toString();
                        var title = defaultLocalizedStrings["DisplayUnitSystem_E" + exponentLookup + "_Title"];
                        var format = (exponent <= 0) ? "{0}" : defaultLocalizedStrings["DisplayUnitSystem_E" + exponentLookup + "_LabelFormat"];
                        if (title || format)
                            return { title: title, format: format };
                    }
                    function getLocalizedString(stringId) {
                        return defaultLocalizedStrings[stringId];
                    }
                    valueFormatter.getLocalizedString = getLocalizedString;
                    // NOTE: Define default locale options, but these can be overriden by setLocaleOptions.
                    var localizationOptions = {
                        nullValue: defaultLocalizedStrings["NullValue"],
                        trueValue: defaultLocalizedStrings["BooleanTrue"],
                        falseValue: defaultLocalizedStrings["BooleanFalse"],
                        NaN: defaultLocalizedStrings["NaNValue"],
                        infinity: defaultLocalizedStrings["InfinityValue"],
                        negativeInfinity: defaultLocalizedStrings["NegativeInfinityValue"],
                        beautify: function (format) { return beautify(format); },
                        describe: function (exponent) { return describeUnit(exponent); },
                        restatementComma: defaultLocalizedStrings["RestatementComma"],
                        restatementCompoundAnd: defaultLocalizedStrings["RestatementCompoundAnd"],
                        restatementCompoundOr: defaultLocalizedStrings["RestatementCompoundOr"],
                    };
                    var MaxScaledDecimalPlaces = 2;
                    var MaxValueForDisplayUnitRounding = 1000;
                    var MinIntegerValueForDisplayUnits = 10000;
                    var MinPrecisionForDisplayUnits = 2;
                    var DateTimeMetadataColumn = {
                        displayName: "",
                        type: ValueType.fromPrimitiveTypeAndCategory(PrimitiveType.DateTime),
                    };
                    function getFormatMetadata(format) {
                        return NumberFormat.getCustomFormatMetadata(format);
                    }
                    valueFormatter.getFormatMetadata = getFormatMetadata;
                    function setLocaleOptions(options) {
                        localizationOptions = options;
                        DefaultDisplayUnitSystem.reset();
                        WholeUnitsDisplayUnitSystem.reset();
                    }
                    valueFormatter.setLocaleOptions = setLocaleOptions;
                    function createDefaultFormatter(formatString, allowFormatBeautification, cultureSelector) {
                        var formatBeautified = allowFormatBeautification
                            ? localizationOptions.beautify(formatString)
                            : formatString;
                        return {
                            format: function (value) {
                                if (value == null) {
                                    return localizationOptions.nullValue;
                                }
                                return formatCore({
                                    value: value,
                                    cultureSelector: cultureSelector,
                                    format: formatBeautified
                                });
                            }
                        };
                    }
                    valueFormatter.createDefaultFormatter = createDefaultFormatter;
                    /** Creates an IValueFormatter to be used for a range of values. */
                    function create(options) {
                        var format = !!options.allowFormatBeautification
                            ? localizationOptions.beautify(options.format)
                            : options.format;
                        var cultureSelector = options.cultureSelector;
                        if (shouldUseNumericDisplayUnits(options)) {
                            var displayUnitSystem_1 = createDisplayUnitSystem(options.displayUnitSystemType);
                            var singleValueFormattingMode_1 = !!options.formatSingleValues;
                            displayUnitSystem_1.update(Math.max(Math.abs(options.value || 0), Math.abs(options.value2 || 0)));
                            var forcePrecision_1 = options.precision != null;
                            var decimals_1;
                            if (forcePrecision_1)
                                decimals_1 = -options.precision;
                            else if (displayUnitSystem_1.displayUnit && displayUnitSystem_1.displayUnit.value > 1)
                                decimals_1 = -MaxScaledDecimalPlaces;
                            return {
                                format: function (value) {
                                    var formattedValue = getStringFormat(value, true /*nullsAreBlank*/);
                                    if (!StringExtensions.isNullOrUndefinedOrWhiteSpaceString(formattedValue)) {
                                        return formattedValue;
                                    }
                                    // Round to Double.DEFAULT_PRECISION
                                    if (value
                                        && !displayUnitSystem_1.isScalingUnit()
                                        && Math.abs(value) < MaxValueForDisplayUnitRounding
                                        && !forcePrecision_1) {
                                        value = Double.roundToPrecision(value);
                                    }
                                    return singleValueFormattingMode_1
                                        ? displayUnitSystem_1.formatSingleValue(value, format, decimals_1, forcePrecision_1, cultureSelector)
                                        : displayUnitSystem_1.format(value, format, decimals_1, forcePrecision_1, cultureSelector);
                                },
                                displayUnit: displayUnitSystem_1.displayUnit,
                                options: options
                            };
                        }
                        if (shouldUseDateUnits(options.value, options.value2, options.tickCount)) {
                            var unit_1 = DateTimeSequence.getIntervalUnit(options.value /* minDate */, options.value2 /* maxDate */, options.tickCount);
                            return {
                                format: function (value) {
                                    if (value == null) {
                                        return localizationOptions.nullValue;
                                    }
                                    var formatString = formattingService.dateFormatString(unit_1);
                                    return formatCore({
                                        value: value,
                                        cultureSelector: cultureSelector,
                                        format: formatString,
                                    });
                                },
                                options: options
                            };
                        }
                        return createDefaultFormatter(format, false, cultureSelector);
                    }
                    valueFormatter.create = create;
                    function format(value, format, allowFormatBeautification, cultureSelector) {
                        if (value == null) {
                            return localizationOptions.nullValue;
                        }
                        var formatString = !!allowFormatBeautification
                            ? localizationOptions.beautify(format)
                            : format;
                        return formatCore({
                            value: value,
                            cultureSelector: cultureSelector,
                            format: formatString
                        });
                    }
                    valueFormatter.format = format;
                    /**
                     * Value formatting function to handle variant measures.
                     * For a Date/Time value within a non-date/time field, it's formatted with the default date/time formatString instead of as a number
                     * @param {any} value Value to be formatted
                     * @param {DataViewMetadataColumn} column Field which the value belongs to
                     * @param {DataViewObjectPropertyIdentifier} formatStringProp formatString Property ID
                     * @param {boolean} nullsAreBlank? Whether to show "(Blank)" instead of empty string for null values
                     * @returns Formatted value
                     */
                    function formatVariantMeasureValue(value, column, formatStringProp, nullsAreBlank, cultureSelector) {
                        // If column type is not datetime, but the value is of time datetime,
                        // then use the default date format string
                        if (!(column && column.type && column.type.dateTime) && value instanceof Date) {
                            var valueFormat = getFormatString(DateTimeMetadataColumn, null, false);
                            return formatCore({
                                value: value,
                                nullsAreBlank: nullsAreBlank,
                                cultureSelector: cultureSelector,
                                format: valueFormat
                            });
                        }
                        else {
                            var valueFormat = getFormatString(column, formatStringProp);
                            return formatCore({
                                value: value,
                                nullsAreBlank: nullsAreBlank,
                                cultureSelector: cultureSelector,
                                format: valueFormat
                            });
                        }
                    }
                    valueFormatter.formatVariantMeasureValue = formatVariantMeasureValue;
                    function createDisplayUnitSystem(displayUnitSystemType) {
                        if (displayUnitSystemType == null)
                            return new DefaultDisplayUnitSystem(localizationOptions.describe);
                        switch (displayUnitSystemType) {
                            case DisplayUnitSystemType.Default:
                                return new DefaultDisplayUnitSystem(localizationOptions.describe);
                            case DisplayUnitSystemType.WholeUnits:
                                return new WholeUnitsDisplayUnitSystem(localizationOptions.describe);
                            case DisplayUnitSystemType.Verbose:
                                return new NoDisplayUnitSystem();
                            case DisplayUnitSystemType.DataLabels:
                                return new DataLabelsDisplayUnitSystem(localizationOptions.describe);
                            default:
                                return new DefaultDisplayUnitSystem(localizationOptions.describe);
                        }
                    }
                    valueFormatter.createDisplayUnitSystem = createDisplayUnitSystem;
                    function shouldUseNumericDisplayUnits(options) {
                        var value = options.value;
                        var value2 = options.value2;
                        var format = options.format;
                        // For singleValue visuals like card, gauge we don't want to roundoff data to the nearest thousands so format the whole number / integers below 10K to not use display units
                        if (options.formatSingleValues && format) {
                            if (Math.abs(value) < MinIntegerValueForDisplayUnits) {
                                var isCustomFormat = !NumberFormat.isStandardFormat(format);
                                if (isCustomFormat) {
                                    var precision = NumberFormat.getCustomFormatMetadata(format, true /*calculatePrecision*/).precision;
                                    if (precision < MinPrecisionForDisplayUnits)
                                        return false;
                                }
                                else if (Double.isInteger(value))
                                    return false;
                            }
                        }
                        if ((typeof value === "number") || (typeof value2 === "number")) {
                            return true;
                        }
                    }
                    function shouldUseDateUnits(value, value2, tickCount) {
                        // must check both value and value2 because we'll need to get an interval for date units
                        return (value instanceof Date) && (value2 instanceof Date) && (tickCount !== undefined && tickCount !== null);
                    }
                    /*
                     * Get the column format. Order of precendence is:
                     *  1. Column format
                     *  2. Default PowerView policy for column type
                     */
                    function getFormatString(column, formatStringProperty, suppressTypeFallback) {
                        if (column) {
                            if (formatStringProperty) {
                                var propertyValue = DataViewObjects.getValue(column.objects, formatStringProperty);
                                if (propertyValue)
                                    return propertyValue;
                            }
                            if (!suppressTypeFallback) {
                                var columnType = column.type;
                                if (columnType) {
                                    if (columnType.dateTime)
                                        return valueFormatter.DefaultDateFormat;
                                    if (columnType.integer) {
                                        if (columnType.temporal && columnType.temporal.year)
                                            return "0";
                                        return valueFormatter.DefaultIntegerFormat;
                                    }
                                    if (columnType.numeric)
                                        return valueFormatter.DefaultNumericFormat;
                                }
                            }
                        }
                    }
                    valueFormatter.getFormatString = getFormatString;
                    function getFormatStringByColumn(column, suppressTypeFallback) {
                        if (column) {
                            if (column.format) {
                                return column.format;
                            }
                            if (!suppressTypeFallback) {
                                var columnType = column.type;
                                if (columnType) {
                                    if (columnType.dateTime) {
                                        return valueFormatter.DefaultDateFormat;
                                    }
                                    if (columnType.integer) {
                                        if (columnType.temporal && columnType.temporal.year) {
                                            return "0";
                                        }
                                        return valueFormatter.DefaultIntegerFormat;
                                    }
                                    if (columnType.numeric) {
                                        return valueFormatter.DefaultNumericFormat;
                                    }
                                }
                            }
                        }
                        return undefined;
                    }
                    valueFormatter.getFormatStringByColumn = getFormatStringByColumn;
                    function formatListCompound(strings, conjunction) {
                        var result;
                        if (!strings) {
                            return null;
                        }
                        var length = strings.length;
                        if (length > 0) {
                            result = strings[0];
                            var lastIndex = length - 1;
                            for (var i = 1, len = lastIndex; i < len; i++) {
                                var value = strings[i];
                                result = StringExtensions.format(localizationOptions.restatementComma, result, value);
                            }
                            if (length > 1) {
                                var value = strings[lastIndex];
                                result = StringExtensions.format(conjunction, result, value);
                            }
                        }
                        else {
                            result = null;
                        }
                        return result;
                    }
                    /** The returned string will look like 'A, B, ..., and C'  */
                    function formatListAnd(strings) {
                        return formatListCompound(strings, localizationOptions.restatementCompoundAnd);
                    }
                    valueFormatter.formatListAnd = formatListAnd;
                    /** The returned string will look like 'A, B, ..., or C' */
                    function formatListOr(strings) {
                        return formatListCompound(strings, localizationOptions.restatementCompoundOr);
                    }
                    valueFormatter.formatListOr = formatListOr;
                    function formatCore(options) {
                        var value = options.value, format = options.format, nullsAreBlank = options.nullsAreBlank, cultureSelector = options.cultureSelector;
                        var formattedValue = getStringFormat(value, nullsAreBlank ? nullsAreBlank : false);
                        if (!StringExtensions.isNullOrUndefinedOrWhiteSpaceString(formattedValue)) {
                            return formattedValue;
                        }
                        return formattingService.formatValue(value, format, cultureSelector);
                    }
                    function getStringFormat(value, nullsAreBlank) {
                        if (value == null && nullsAreBlank) {
                            return localizationOptions.nullValue;
                        }
                        if (value === true) {
                            return localizationOptions.trueValue;
                        }
                        if (value === false) {
                            return localizationOptions.falseValue;
                        }
                        if (typeof value === "number" && isNaN(value)) {
                            return localizationOptions.NaN;
                        }
                        if (value === Number.NEGATIVE_INFINITY) {
                            return localizationOptions.negativeInfinity;
                        }
                        if (value === Number.POSITIVE_INFINITY) {
                            return localizationOptions.infinity;
                        }
                        return "";
                    }
                    function getDisplayUnits(displayUnitSystemType) {
                        var displayUnitSystem = createDisplayUnitSystem(displayUnitSystemType);
                        return displayUnitSystem.units;
                    }
                    valueFormatter.getDisplayUnits = getDisplayUnits;
                })(valueFormatter = formatting.valueFormatter || (formatting.valueFormatter = {}));
            })(formatting = utils.formatting || (utils.formatting = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));

/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var tooltip;
            (function (tooltip) {
                var touch;
                (function (touch) {
                    function touchStartEventName() {
                        var eventName = "touchstart";
                        if (window["PointerEvent"]) {
                            // IE11
                            eventName = "pointerdown";
                        }
                        return eventName;
                    }
                    touch.touchStartEventName = touchStartEventName;
                    function touchEndEventName() {
                        var eventName = "touchend";
                        if (window["PointerEvent"]) {
                            // IE11
                            eventName = "pointerup";
                        }
                        return eventName;
                    }
                    touch.touchEndEventName = touchEndEventName;
                    function usePointerEvents() {
                        var eventName = touchStartEventName();
                        return eventName === "pointerdown" || eventName === "MSPointerDown";
                    }
                    touch.usePointerEvents = usePointerEvents;
                })(touch = tooltip.touch || (tooltip.touch = {}));
            })(tooltip = utils.tooltip || (utils.tooltip = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var tooltip;
            (function (tooltip_1) {
                var DefaultHandleTouchDelay = 1000;
                function createTooltipServiceWrapper(tooltipService, rootElement, handleTouchDelay) {
                    if (handleTouchDelay === void 0) { handleTouchDelay = DefaultHandleTouchDelay; }
                    return new TooltipServiceWrapper(tooltipService, rootElement, handleTouchDelay);
                }
                tooltip_1.createTooltipServiceWrapper = createTooltipServiceWrapper;
                var TooltipServiceWrapper = (function () {
                    function TooltipServiceWrapper(tooltipService, rootElement, handleTouchDelay) {
                        if (handleTouchDelay === void 0) { handleTouchDelay = DefaultHandleTouchDelay; }
                        this.visualHostTooltipService = tooltipService;
                        this.rootElement = rootElement;
                        this.handleTouchDelay = handleTouchDelay;
                    }
                    /*
                     * Converts values of VisualTooltipDataItem object to string for prevent passing numbers to Tooltip API of Power BI
                     */
                    TooltipServiceWrapper.prototype.convertValuesToString = function (tooltips) {
                        return tooltips.map(function (tooltip) {
                            tooltip.value = "" + tooltip.value;
                            tooltip.displayName = "" + tooltip.displayName;
                            if (tooltip.color) {
                                tooltip.color = "" + tooltip.color;
                            }
                            if (tooltip.opacity) {
                                tooltip.opacity = "" + tooltip.opacity;
                            }
                            if (tooltip.header) {
                                tooltip.header = "" + tooltip.header;
                            }
                            return tooltip;
                        });
                    };
                    TooltipServiceWrapper.prototype.addTooltip = function (selection, getTooltipInfoDelegate, getDataPointIdentity, reloadTooltipDataOnMouseMove) {
                        var _this = this;
                        if (!selection || !this.visualHostTooltipService.enabled()) {
                            return;
                        }
                        var rootNode = this.rootElement;
                        // Mouse events
                        selection.on("mouseover.tooltip", function () {
                            // Ignore mouseover while handling touch events
                            if (!_this.canDisplayTooltip(d3.event)) {
                                return;
                            }
                            var tooltipEventArgs = _this.makeTooltipEventArgs(rootNode, true, false);
                            if (!tooltipEventArgs) {
                                return;
                            }
                            var tooltipInfo = getTooltipInfoDelegate(tooltipEventArgs);
                            if (tooltipInfo == null) {
                                return;
                            }
                            tooltipInfo = _this.convertValuesToString(tooltipInfo);
                            var selectionIds = _this.getSelectionIds(tooltipEventArgs, getDataPointIdentity);
                            _this.visualHostTooltipService.show({
                                coordinates: tooltipEventArgs.coordinates,
                                isTouchEvent: false,
                                dataItems: tooltipInfo,
                                identities: selectionIds
                            });
                        });
                        selection.on("mouseout.tooltip", function () {
                            _this.visualHostTooltipService.hide({
                                isTouchEvent: false,
                                immediately: false,
                            });
                        });
                        selection.on("mousemove.tooltip", function () {
                            // Ignore mousemove while handling touch events
                            if (!_this.canDisplayTooltip(d3.event)) {
                                return;
                            }
                            var tooltipEventArgs = _this.makeTooltipEventArgs(rootNode, true, false);
                            if (!tooltipEventArgs) {
                                return;
                            }
                            var tooltipInfo;
                            if (reloadTooltipDataOnMouseMove) {
                                tooltipInfo = getTooltipInfoDelegate(tooltipEventArgs);
                                if (tooltipInfo == null) {
                                    return;
                                }
                            }
                            var selectionIds = _this.getSelectionIds(tooltipEventArgs, getDataPointIdentity);
                            _this.visualHostTooltipService.move({
                                coordinates: tooltipEventArgs.coordinates,
                                isTouchEvent: false,
                                dataItems: tooltipInfo,
                                identities: selectionIds
                            });
                        });
                        // --- Touch events ---
                        var touchStartEventName = tooltip_1.touch.touchStartEventName(), touchEndEventName = tooltip_1.touch.touchEndEventName(), isPointerEvent = tooltip_1.touch.usePointerEvents();
                        selection.on(touchStartEventName + ".tooltip", function () {
                            _this.visualHostTooltipService.hide({
                                isTouchEvent: true,
                                immediately: true,
                            });
                            var tooltipEventArgs = _this.makeTooltipEventArgs(rootNode, isPointerEvent, true);
                            if (!tooltipEventArgs) {
                                return;
                            }
                            var tooltipInfo = getTooltipInfoDelegate(tooltipEventArgs), selectionIds = _this.getSelectionIds(tooltipEventArgs, getDataPointIdentity);
                            _this.visualHostTooltipService.show({
                                coordinates: tooltipEventArgs.coordinates,
                                isTouchEvent: true,
                                dataItems: tooltipInfo,
                                identities: selectionIds
                            });
                        });
                        selection.on(touchEndEventName + ".tooltip", function () {
                            _this.visualHostTooltipService.hide({
                                isTouchEvent: true,
                                immediately: false,
                            });
                            if (_this.handleTouchTimeoutId) {
                                clearTimeout(_this.handleTouchTimeoutId);
                            }
                            // At the end of touch action, set a timeout that will let us ignore the incoming mouse events for a small amount of time
                            // TODO: any better way to do this?
                            _this.handleTouchTimeoutId = setTimeout(function () {
                                _this.handleTouchTimeoutId = undefined;
                            }, _this.handleTouchDelay);
                        });
                    };
                    TooltipServiceWrapper.prototype.getSelectionIds = function (tooltipEventArgs, getDataPointIdentity) {
                        var selectionId = getDataPointIdentity
                            ? getDataPointIdentity(tooltipEventArgs)
                            : null;
                        return selectionId
                            ? [selectionId]
                            : [];
                    };
                    TooltipServiceWrapper.prototype.hide = function () {
                        this.visualHostTooltipService.hide({ immediately: true, isTouchEvent: false });
                    };
                    TooltipServiceWrapper.prototype.makeTooltipEventArgs = function (rootNode, isPointerEvent, isTouchEvent) {
                        var target = d3.event.target, data = d3.select(target).datum();
                        var mouseCoordinates = this.getCoordinates(rootNode, isPointerEvent), elementCoordinates = this.getCoordinates(target, isPointerEvent);
                        var tooltipEventArgs = {
                            data: data,
                            coordinates: mouseCoordinates,
                            elementCoordinates: elementCoordinates,
                            context: target,
                            isTouchEvent: isTouchEvent
                        };
                        return tooltipEventArgs;
                    };
                    TooltipServiceWrapper.prototype.canDisplayTooltip = function (d3Event) {
                        var canDisplay = true, mouseEvent = d3Event;
                        if (mouseEvent.buttons !== undefined) {
                            // Check mouse buttons state
                            var hasMouseButtonPressed = mouseEvent.buttons !== 0;
                            canDisplay = !hasMouseButtonPressed;
                        }
                        // Make sure we are not ignoring mouse events immediately after touch end.
                        canDisplay = canDisplay && (this.handleTouchTimeoutId == null);
                        return canDisplay;
                    };
                    TooltipServiceWrapper.prototype.getCoordinates = function (rootNode, isPointerEvent) {
                        var coordinates;
                        if (isPointerEvent) {
                            // DO NOT USE - WebKit bug in getScreenCTM with nested SVG results in slight negative coordinate shift
                            // Also, IE will incorporate transform scale but WebKit does not, forcing us to detect browser and adjust appropriately.
                            // Just use non-scaled coordinates for all browsers, and adjust for the transform scale later (see lineChart.findIndex)
                            // coordinates = d3.mouse(rootNode);
                            // copied from d3_eventSource (which is not exposed)
                            var e = d3.event, s = void 0;
                            while (s = e.sourceEvent)
                                e = s;
                            var rect = rootNode.getBoundingClientRect();
                            coordinates = [
                                e.clientX - rect.left - rootNode.clientLeft,
                                e.clientY - rect.top - rootNode.clientTop
                            ];
                        }
                        else {
                            var touchCoordinates = d3.touches(rootNode);
                            if (touchCoordinates && touchCoordinates.length > 0) {
                                coordinates = touchCoordinates[0];
                            }
                        }
                        return coordinates;
                    };
                    return TooltipServiceWrapper;
                }());
                tooltip_1.TooltipServiceWrapper = TooltipServiceWrapper;
            })(tooltip = utils.tooltip || (utils.tooltip = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var visual;
        (function (visual) {
            var databarKPIB8060E2B144244C5A38807466893C9F6;
            (function (databarKPIB8060E2B144244C5A38807466893C9F6) {
                "use strict";
                var DataViewObjectsParser = powerbi.extensibility.utils.dataview.DataViewObjectsParser;
                var VisualSettings = (function (_super) {
                    __extends(VisualSettings, _super);
                    function VisualSettings() {
                        var _this = _super !== null && _super.apply(this, arguments) || this;
                        _this.itemsSettings = new itemsSettings();
                        _this.sectionSettings = new sectionSettings();
                        _this.textSettings = new textSettings();
                        _this.colorSettings = new colorSettings();
                        _this.targetLineSettings = new targetLineSettings();
                        _this.outerBarSettings = new outerBarSettings();
                        _this.headerSettings = new headerSettings();
                        return _this;
                    }
                    return VisualSettings;
                }(DataViewObjectsParser));
                databarKPIB8060E2B144244C5A38807466893C9F6.VisualSettings = VisualSettings;
                var itemsSettings = (function () {
                    function itemsSettings() {
                        this.orientation = "vertical";
                        this.padding = 5;
                        this.minWidth = 20;
                        this.minHeight = 20;
                    }
                    return itemsSettings;
                }());
                databarKPIB8060E2B144244C5A38807466893C9F6.itemsSettings = itemsSettings;
                var sectionSettings = (function () {
                    function sectionSettings() {
                        this.position = "left";
                        this.fontSize = 8;
                        this.fontColor = "#00000";
                        this.margin_between = 10;
                    }
                    return sectionSettings;
                }());
                databarKPIB8060E2B144244C5A38807466893C9F6.sectionSettings = sectionSettings;
                var textSettings = (function () {
                    function textSettings() {
                        this.position = "below";
                        // Text Size
                        this.fontSize = 12;
                        this.displayUnits = 0;
                        this.showValueText = true;
                        this.displayUnitsForValue = 0;
                        this.showMaxText = true;
                        this.displayUnitsForMax = 0;
                        this.repPositiveGapAsNegativeNumber = true;
                        this.showPercentagesOnGaps = true;
                        this.ignoreFormattingForTooltips = false;
                        this.treatBlanksAsZeros = false;
                    }
                    return textSettings;
                }());
                databarKPIB8060E2B144244C5A38807466893C9F6.textSettings = textSettings;
                var colorSettings = (function () {
                    function colorSettings() {
                        this.defaultColorNoTargetText = "#00000";
                        this.defaultColorNoTargetFill = "#000000";
                        this.lessThanColor = "#f44336";
                        this.equalToColor = "#4caf50";
                        this.greaterThanColor = "#4caf50";
                    }
                    return colorSettings;
                }());
                databarKPIB8060E2B144244C5A38807466893C9F6.colorSettings = colorSettings;
                var targetLineSettings = (function () {
                    function targetLineSettings() {
                        this.color = "grey";
                        this.strokeWidth = 1;
                        this.lineStyle = "dashed";
                    }
                    return targetLineSettings;
                }());
                databarKPIB8060E2B144244C5A38807466893C9F6.targetLineSettings = targetLineSettings;
                var outerBarSettings = (function () {
                    function outerBarSettings() {
                        this.fillWhenNoTarget = true;
                        this.fill = "white";
                        this.outlineColor = "grey";
                    }
                    return outerBarSettings;
                }());
                databarKPIB8060E2B144244C5A38807466893C9F6.outerBarSettings = outerBarSettings;
                var headerSettings = (function () {
                    function headerSettings() {
                        this.show = false;
                        this.position = "left";
                        this.value = "";
                        this.fontSize = 18;
                        this.margin_between = 5;
                    }
                    return headerSettings;
                }());
                databarKPIB8060E2B144244C5A38807466893C9F6.headerSettings = headerSettings;
            })(databarKPIB8060E2B144244C5A38807466893C9F6 = visual.databarKPIB8060E2B144244C5A38807466893C9F6 || (visual.databarKPIB8060E2B144244C5A38807466893C9F6 = {}));
        })(visual = extensibility.visual || (extensibility.visual = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var visual;
        (function (visual) {
            var databarKPIB8060E2B144244C5A38807466893C9F6;
            (function (databarKPIB8060E2B144244C5A38807466893C9F6) {
                var Area = (function () {
                    function Area(x_min, x_max, y_min, y_max) {
                        this.x_min = x_min;
                        this.x_max = x_max;
                        this.y_min = y_min;
                        this.y_max = y_max;
                    }
                    Area.prototype.width = function () {
                        return this.x_max - this.x_min;
                    };
                    Area.prototype.height = function () {
                        return this.y_max - this.y_min;
                    };
                    return Area;
                }());
                databarKPIB8060E2B144244C5A38807466893C9F6.Area = Area;
                var Label = (function () {
                    function Label(defaultSVGContainer, content, font_size, font_family) {
                        this.content = content;
                        this.font_size = font_size;
                        this.font_family = font_family;
                        this._container = defaultSVGContainer;
                        //now set everything to null
                        this.class_name = null;
                        this._height = null;
                        this._width = null;
                    }
                    Label.prototype.paint = function (class_name, container, x, y) {
                        this._container = container;
                        this.class_name = class_name;
                        //now let's paint it
                        this._container.append("text")
                            .attr("y", y)
                            .attr("x", x)
                            .classed(this.class_name, true)
                            .text(this.content)
                            .style("font-size", this.font_size)
                            .style("font-family", this.font_family);
                    };
                    Label.prototype.width = function () {
                        var sample_class = "sampleText";
                        if (this.class_name == null) {
                            //draw this with a sample class then remove it
                            this.paint(sample_class, this._container, 0, 0);
                        }
                        var tmp = this._container.select("." + this.class_name).node().getBBox().width;
                        if (this.class_name == sample_class) {
                            this.remove();
                        }
                        return tmp;
                    };
                    Label.prototype.height = function () {
                        var sample_class = "sampleText";
                        if (this.class_name == null) {
                            //draw this with a sample class then remove it
                            this.paint(sample_class, this._container, 0, 0);
                        }
                        var tmp = this._container.select("." + this.class_name).node().getBBox().height;
                        if (this.class_name == sample_class) {
                            this.remove();
                        }
                        return tmp;
                    };
                    Label.prototype.remove = function () {
                        //unpaint it
                        if (this.class_name != null) {
                            this._container.select("." + this.class_name).remove();
                        }
                        //now unset the attributes set when drawn
                        this.class_name = null;
                        this._height = null;
                        this._width = null;
                    };
                    return Label;
                }());
                databarKPIB8060E2B144244C5A38807466893C9F6.Label = Label;
            })(databarKPIB8060E2B144244C5A38807466893C9F6 = visual.databarKPIB8060E2B144244C5A38807466893C9F6 || (visual.databarKPIB8060E2B144244C5A38807466893C9F6 = {}));
        })(visual = extensibility.visual || (extensibility.visual = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/// <reference path="D3Utility.ts" />
/*
 *  Power BI Visual CLI
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var visual;
        (function (visual) {
            var databarKPIB8060E2B144244C5A38807466893C9F6;
            (function (databarKPIB8060E2B144244C5A38807466893C9F6) {
                "use strict";
                var tooltip = powerbi.extensibility.utils.tooltip;
                var ValueFormatter = powerbi.extensibility.utils.formatting.valueFormatter;
                var BarDataTransform = (function () {
                    function BarDataTransform() {
                    }
                    return BarDataTransform;
                }());
                databarKPIB8060E2B144244C5A38807466893C9F6.BarDataTransform = BarDataTransform;
                var Field = (function () {
                    function Field(value, format, displayName, displayUnits) {
                        this.value = value;
                        this.format = format;
                        this.displayName = displayName;
                        this.displayUnits = displayUnits ? displayUnits : 0;
                    }
                    Field.prototype.toString = function (withFormatting, withDisplayUnits, overrideBlankWithNumber) {
                        var valueToFormat = this.value;
                        var displayUnits = withDisplayUnits ? this.displayUnits : 0;
                        if (valueToFormat == null) {
                            if (overrideBlankWithNumber != null) {
                                valueToFormat = overrideBlankWithNumber;
                            }
                            else {
                                return "blank";
                            }
                        }
                        if (withFormatting) {
                            return ValueFormatter.create({ format: this.format, value: displayUnits })
                                .format(valueToFormat);
                        }
                        else {
                            if (withDisplayUnits) {
                                return ValueFormatter.create({ value: displayUnits })
                                    .format(valueToFormat);
                            }
                            else {
                                return valueToFormat.toString();
                            }
                        }
                    };
                    return Field;
                }());
                databarKPIB8060E2B144244C5A38807466893C9F6.Field = Field;
                var BarData = (function () {
                    function BarData(category) {
                        this.value = new Field(null, "", "", 0);
                        this.tooltipsData = [];
                        this.target = null;
                        this.max = null;
                        this.category = category;
                        this.status_message = null;
                    }
                    BarData.prototype.largest = function () {
                        var base = null;
                        if (this.value != null)
                            base = this.value;
                        if (this.target != null) {
                            if (base == null) {
                                base = this.target;
                            }
                            else {
                                if (this.target.value != null && base.value < this.target.value) {
                                    base = this.target;
                                }
                            }
                        }
                        if (this.max != null) {
                            if (base == null) {
                                base = this.max;
                            }
                            else {
                                if (this.max.value != null && base.value < this.max.value) {
                                    base = this.max;
                                }
                            }
                        }
                        return base;
                    };
                    BarData.prototype.gapBetweenValueAndTarget = function () {
                        var ff = new Field(this.target.value - this.value.value, this.value.format, "Gap - " + this.value.displayName + " & " + this.target.displayName);
                        return ff;
                    };
                    BarData.prototype.gapBetweenValueAndMax = function () {
                        var ff = new Field(this.max.value - this.value.value, this.value.format, "Gap - " + this.value.displayName + " & " + this.max.displayName);
                        return ff;
                    };
                    return BarData;
                }());
                databarKPIB8060E2B144244C5A38807466893C9F6.BarData = BarData;
                var StatusColor = (function () {
                    function StatusColor() {
                    }
                    return StatusColor;
                }());
                databarKPIB8060E2B144244C5A38807466893C9F6.StatusColor = StatusColor;
                /**
                 * Function that converts queried data into a view model that will be used by the visual
                 *
                 * @function
                 * @param {VisualUpdateOptions} options - Contains references to the size of the container
                 *                                        and the dataView which contains all the data
                 *                                        the visual had queried.
                 * @param {IVisualHost} host            - Contains references to the host which contains services
                 */
                function visualTransform(options, host) {
                    /*Convert dataView to your viewModel*/
                    var bdf = new BarDataTransform();
                    var categorical_data = options.dataViews[0].categorical;
                    //now set up my data
                    //loop through the data set and set up a value mapping table
                    var valueArray = [];
                    var valueSets = options.dataViews[0].categorical.values;
                    valueArray["tooltips"] = [];
                    for (var i = 0; i < valueSets.length; i++) {
                        var columnRole = valueSets[i].source.roles;
                        if (columnRole["value"] == true) {
                            valueArray["value"] = i;
                        }
                        if (columnRole["target"] == true) {
                            valueArray["target"] = i;
                        }
                        if (columnRole["max"] == true) {
                            valueArray["max"] = i;
                        }
                        if (columnRole["tooltips"] == true) {
                            valueArray["tooltips"].push(i);
                        }
                    }
                    if (valueArray["value"] == undefined) {
                        bdf.bars = null;
                        bdf.statusMessage = "The value field must be supplied";
                        return bdf;
                    }
                    //collect the data
                    //setup the bars
                    var arrays_of_bars = [];
                    var cats = null;
                    if (categorical_data.categories == null) {
                        arrays_of_bars.push(new BarData());
                    }
                    else {
                        cats = categorical_data.categories[0].values;
                        if (cats.length == 0) {
                            arrays_of_bars.push(new BarData());
                        }
                        else {
                            cats.forEach(function (cate, idx) {
                                //okay let's setup a new bar data 
                                var bd = new BarData(cate.toString());
                                //now assign the selection id
                                bd.selectionId = host.createSelectionIdBuilder()
                                    .withCategory(categorical_data.categories[0], idx)
                                    .createSelectionId();
                                arrays_of_bars.push(bd);
                            });
                        }
                    }
                    // okay so let's first handle the value
                    if (valueArray["value"] != undefined) {
                        var valueColumn = valueSets[valueArray["value"]];
                        for (var i = 0; i < valueColumn.values.length; i++) {
                            var value = null;
                            if (valueColumn.values[i] != null) {
                                var value_string = valueColumn.values[i].toString();
                                value = Number(value_string);
                            }
                            arrays_of_bars[i].value = new Field(value, valueColumn.source.format, valueColumn.source.displayName);
                        }
                    }
                    else {
                        //set value to null for all of the bars
                        for (var i = 0; i < arrays_of_bars.length; i++) {
                            arrays_of_bars[i].value = null;
                        }
                    }
                    //now let's handle the target column
                    if (valueArray["target"] != undefined) {
                        var targetColumn = valueSets[valueArray["target"]];
                        for (var i = 0; i < targetColumn.values.length; i++) {
                            var target = null;
                            if (targetColumn.values[i] != null) {
                                var target_string = targetColumn.values[i].toString();
                                arrays_of_bars[i].target = new Field(Number(target_string), targetColumn.source.format, targetColumn.source.displayName);
                            }
                        }
                    }
                    //finally the max column
                    if (valueArray["max"] != undefined) {
                        var maxColumn = valueSets[valueArray["max"]];
                        for (var i = 0; i < maxColumn.values.length; i++) {
                            var max = null;
                            if (maxColumn.values[i] != null) {
                                var max_string = maxColumn.values[i].toString();
                                arrays_of_bars[i].max = new Field(Number(max_string), maxColumn.source.format, maxColumn.source.displayName);
                            }
                        }
                    }
                    //now lastly the tooltips
                    if (valueArray["tooltips"] != undefined) {
                        for (var i = 0; i < valueArray["tooltips"].length; i++) {
                            var index = valueArray["tooltips"][i];
                            var tooltipColumn = valueSets[index];
                            for (var i = 0; i < tooltipColumn.values.length; i++) {
                                var max = null;
                                if (tooltipColumn.values[i] != null) {
                                    var max_string = tooltipColumn.values[i].toString();
                                    max = Number(max_string);
                                    arrays_of_bars[i].max = new Field(max, tooltipColumn.source.format, tooltipColumn.source.displayName);
                                }
                            }
                        }
                    }
                    //and now we can pass it on        
                    bdf.bars = arrays_of_bars;
                    bdf.statusMessage = null;
                    return bdf;
                }
                var databarvisual = (function () {
                    function databarvisual(options) {
                        this.font_family = "'Segoe UI', 'wf_segoe-ui_normal', helvetica, arial, sans-serif;";
                        console.log('Visual constructor', options);
                        this.target = options.element;
                        this.host = options.host;
                        this.selectionManager = options.host.createSelectionManager();
                        this.tooltipServiceWrapper = tooltip.createTooltipServiceWrapper(options.host.tooltipService, options.element);
                        this.canvas_setup();
                    }
                    databarvisual.prototype.update = function (options) {
                        var _this = this;
                        this.settings = databarvisual.parseSettings(options && options.dataViews && options.dataViews[0]);
                        console.log('Visual update', options);
                        this.canvas_clear();
                        var svg_area = new databarKPIB8060E2B144244C5A38807466893C9F6.Area(0, parseInt(this.svg.style("width")), 0, parseInt(this.svg.style("height")));
                        try {
                            var transform = visualTransform(options, this.host);
                            //now let's first add the header if they have requested it.
                            if (this.settings.headerSettings.show == true) {
                                var header_svg = this.svg.append("g").classed("headerTextG", true);
                                var header_label = new databarKPIB8060E2B144244C5A38807466893C9F6.Label(this.svg, this.settings.headerSettings.value, this.settings.headerSettings.fontSize + "px", this.font_family);
                                var x = null;
                                var y = null;
                                switch (this.settings.headerSettings.position) {
                                    case "left":
                                        svg_area.x_min = header_label.width() + this.settings.headerSettings.margin_between;
                                        y = (svg_area.height() / 2) + (header_label.height() / 4);
                                        header_label.paint("headerText", header_svg, 0, y);
                                        break;
                                    case "top":
                                        x = (svg_area.width() / 2) - (header_label.width() / 2);
                                        header_label.paint("headerText", header_svg, x, header_label.height());
                                        svg_area.y_min = header_label.height() + this.settings.headerSettings.margin_between;
                                        break;
                                    case "right":
                                        y = (svg_area.height() / 2) + (header_label.height() / 4);
                                        header_label.paint("headerText", header_svg, svg_area.width() - header_label.width(), y);
                                        svg_area.x_max = svg_area.x_max - header_label.width() - this.settings.headerSettings.margin_between;
                                        break;
                                    case "bottom":
                                        x = (svg_area.width() / 2) - (header_label.width() / 2);
                                        header_label.paint("headerText", header_svg, x, svg_area.y_max - 5); //5 for padding
                                        svg_area.y_max = svg_area.height() - (header_label.height() + this.settings.headerSettings.margin_between);
                                        break;
                                    default:
                                        throw new Error("Somehow the position wasn't set to one of the available values (left, right, top, bottom).");
                                }
                            }
                            //now add the bars
                            if (transform.bars == null) {
                                //print out the error message
                            }
                            else {
                                if (transform.bars.length > 1) {
                                    //okay we need to determine the max
                                    var maxFound = transform.bars.map(function (value) { return value.largest(); })
                                        .reduce(function (cV, pV) {
                                        return pV.value < cV.value ? cV : pV;
                                    });
                                    //now we need to draw the max and find the maximum height and width it could be
                                    var max_text_string = maxFound.toString(true, true, this.overrideBlanksWithValue);
                                    var max_text = new databarKPIB8060E2B144244C5A38807466893C9F6.Label(this.svg, max_text_string, this.settings.textSettings.fontSize + "px", this.font_family);
                                    var max_text_height = max_text.height();
                                    var max_text_width = max_text.width();
                                    //and now we need to work out the maximum category size
                                    //just need to be careful because the category may not be set
                                    var maxCategory = transform.bars.reduce(function (pV, cV) {
                                        if (pV == null && cV == null)
                                            return null;
                                        if (pV.category == null && cV.category == null)
                                            return null;
                                        if ((pV == null || pV.category == null) && (cV != null && cV.category != null))
                                            return (cV);
                                        if ((cV == null || cV.category == null) && (pV != null && pV.category != null))
                                            return (cV);
                                        return pV.category.length < cV.category.length ? cV : pV;
                                    });
                                    var max_category_height = null;
                                    var max_category_width = null;
                                    if (maxCategory != null) {
                                        var max_category_label = new databarKPIB8060E2B144244C5A38807466893C9F6.Label(this.svg, maxCategory.category, this.settings.sectionSettings.fontSize + "px", this.font_family);
                                        max_category_height = max_category_label.height() + 5;
                                        max_category_width = max_category_label.width() + 5;
                                    }
                                    //now let's handle drawing them
                                    //we need to see if we can fit them in the space first
                                    var one_visual_height = (max_text_height + this.settings.itemsSettings.minHeight);
                                    var one_visual_width = (max_text_width * 2);
                                    if (maxCategory != null) {
                                        switch (this.settings.sectionSettings.position) {
                                            case "left":
                                                one_visual_width += max_category_width + this.settings.sectionSettings.margin_between;
                                                break;
                                            case "right":
                                                one_visual_width += max_category_width + this.settings.sectionSettings.margin_between;
                                                break;
                                            case "top":
                                                one_visual_height += max_category_height + this.settings.sectionSettings.margin_between;
                                                one_visual_width = one_visual_width < max_category_width ? max_category_width : one_visual_width;
                                                break;
                                            case "bottom":
                                                one_visual_height += max_category_height + this.settings.sectionSettings.margin_between;
                                                one_visual_width = one_visual_width < max_category_width ? max_category_width : one_visual_width;
                                                break;
                                            default:
                                                throw new Error("Somehow the position wasn't set to one of the available values (left, right, top, bottom).");
                                        }
                                    }
                                    var padding_total = (this.settings.itemsSettings.padding * (transform.bars.length - 1));
                                    //now let's see
                                    var min_height_needed = one_visual_height;
                                    var min_width_needed = one_visual_width;
                                    if (this.settings.itemsSettings.orientation == "vertical") {
                                        min_height_needed = (one_visual_height * transform.bars.length) + padding_total;
                                    }
                                    else {
                                        min_width_needed = (one_visual_width * transform.bars.length) + padding_total;
                                    }
                                    //now we're going to either try and squeeze it in or just make it overflow if the minimum does not meet
                                    var master_height_of_visual = min_height_needed < svg_area.height() ? svg_area.height() : min_height_needed;
                                    var master_width_of_visual = min_width_needed < svg_area.width() ? svg_area.width() : min_width_needed;
                                    if (this.settings.itemsSettings.orientation == "vertical") {
                                        master_height_of_visual = (master_height_of_visual - padding_total) / transform.bars.length;
                                    }
                                    else {
                                        master_width_of_visual = (master_width_of_visual - padding_total) / transform.bars.length;
                                    }
                                    //now do the others with padding
                                    for (var i = 0; i < transform.bars.length; i++) {
                                        var barData = transform.bars[i];
                                        var x_min = svg_area.x_min;
                                        var y_min = svg_area.y_min;
                                        if (this.settings.itemsSettings.orientation == "vertical") {
                                            y_min = svg_area.y_min + (this.settings.itemsSettings.padding * i) + (master_height_of_visual * i);
                                        }
                                        else {
                                            x_min = svg_area.x_min + (this.settings.itemsSettings.padding * i) + (master_width_of_visual * i);
                                        }
                                        //okay now let's start drawing
                                        var barElement = this.barsContainerElement.append("g").classed("barVisual", true);
                                        var square = new databarKPIB8060E2B144244C5A38807466893C9F6.Area(x_min, x_min + master_width_of_visual, y_min, y_min + master_height_of_visual);
                                        //firstly set up the area that we're going to put the data label on
                                        //secondly draw the category label and adjust the bar visual
                                        if (barData.category != null) {
                                            var category_label = new databarKPIB8060E2B144244C5A38807466893C9F6.Label(barElement, barData.category, this.settings.sectionSettings.fontSize + "px", this.font_family);
                                            var cat_x = null;
                                            var cat_y = null;
                                            //now we need to adjust the actual visual based on the position
                                            switch (this.settings.sectionSettings.position) {
                                                case "left":
                                                    cat_y = (square.y_min + (square.height() / 2));
                                                    category_label.paint("categoryText", barElement, square.x_min, cat_y);
                                                    square.x_min = square.x_min + max_category_width + this.settings.sectionSettings.margin_between;
                                                    break;
                                                case "top":
                                                    cat_x = (square.x_min + (square.width() / 2)) - (max_category_width / 2);
                                                    cat_y = square.y_min + max_category_height;
                                                    category_label.paint("categoryText", barElement, cat_x, cat_y);
                                                    square.y_min = square.y_min + max_category_height + this.settings.sectionSettings.margin_between;
                                                    break;
                                                case "right":
                                                    cat_x = square.x_max - max_category_width;
                                                    cat_y = (square.y_min + (square.height() / 2));
                                                    category_label.paint("categoryText", barElement, cat_x, cat_y);
                                                    square.x_max = square.x_max - max_category_width - this.settings.sectionSettings.margin_between;
                                                    break;
                                                case "bottom":
                                                    cat_x = (square.x_min + (square.width() / 2)) - (max_category_width / 2);
                                                    cat_y = square.y_max - max_category_height;
                                                    category_label.paint("categoryText", barElement, cat_x, cat_y);
                                                    square.y_max = square.y_max - max_category_height - this.settings.sectionSettings.margin_between;
                                                    break;
                                                default:
                                                    throw new Error("Somehow the position wasn't set to one of the available values (left, right, top, bottom).");
                                            }
                                            //global svg reference for use in the on click for transperency
                                            barData.global_svg_ref = this.svg;
                                            //now color the text based on what the user chose
                                            barElement.select(".categoryText").style("fill", this.settings.sectionSettings.fontColor);
                                        }
                                        //lastly draw the bar visual
                                        this.add_one_data_bar(barElement, square, barData);
                                    }
                                }
                                else {
                                    //set up the main visual
                                    var barData = transform.bars[0];
                                    var barElement = this.barsContainerElement.append("g").classed("barVisual", true);
                                    var square = svg_area;
                                    if (barData.category != null) {
                                        var category_label = new databarKPIB8060E2B144244C5A38807466893C9F6.Label(barElement, barData.category, this.settings.sectionSettings.fontSize + "px", this.font_family);
                                        var cat_x = null;
                                        var cat_y = null;
                                        //now we need to adjust the actual visual based on the position
                                        switch (this.settings.sectionSettings.position) {
                                            case "left":
                                                cat_y = (square.y_min + (square.height() / 2));
                                                category_label.paint("categoryText", barElement, square.x_min, cat_y);
                                                square.x_min = square.x_min + category_label.width() + this.settings.sectionSettings.margin_between;
                                                break;
                                            case "top":
                                                cat_x = (square.x_min + (square.width() / 2)) - (category_label.width() / 2);
                                                cat_y = square.y_min + category_label.height();
                                                category_label.paint("categoryText", barElement, cat_x, cat_y);
                                                square.y_min = square.y_min + category_label.height() + this.settings.sectionSettings.margin_between;
                                                break;
                                            case "right":
                                                cat_x = square.x_max - category_label.width();
                                                cat_y = (square.y_min + (square.height() / 2));
                                                category_label.paint("categoryText", barElement, cat_x, cat_y);
                                                square.x_max = square.x_max - category_label.width() - this.settings.sectionSettings.margin_between;
                                                break;
                                            case "bottom":
                                                cat_x = (square.x_min + (square.width() / 2)) - (category_label.width() / 2);
                                                cat_y = square.y_max - category_label.height();
                                                category_label.paint("categoryText", barElement, cat_x, cat_y);
                                                square.y_max = square.y_max - category_label.height() - this.settings.sectionSettings.margin_between;
                                                break;
                                            default:
                                                throw new Error("Somehow the position wasn't set to one of the available values (left, right, top, bottom).");
                                        }
                                        //now color the text based on what the user chose
                                        barElement.select(".categoryText").style("fill", this.settings.sectionSettings.fontColor);
                                    }
                                    this.add_one_data_bar(barElement, square, barData);
                                }
                            }
                        }
                        catch (e) {
                            //in the circumstance of an error just draw a blank one
                            var barData = new BarData();
                            barData.status_message = e.message;
                            var barElement = this.barsContainerElement.append("g").classed("barVisual", true);
                            this.add_one_data_bar(barElement, svg_area, barData);
                            //now add the tooltip error message 
                            this.tooltipServiceWrapper.addTooltip(barElement, function (tooltipEvent) { return databarvisual.getToolTipDataError(tooltipEvent.data, _this.settings); }, function (tooltipEvent) { return null; });
                        }
                    };
                    databarvisual.getToolTipDataError = function (dataNonCasted, settings) {
                        var data = dataNonCasted;
                        var tooltipDataFieldList = [{ displayName: "status", value: data.status_message }];
                        return tooltipDataFieldList;
                    };
                    databarvisual.getToolTipDataForBar = function (dataNonCasted, settings) {
                        var useDisplayUnits = !settings.textSettings.ignoreFormattingForTooltips;
                        var data = dataNonCasted;
                        var overrideBlanksWithValue = settings.textSettings.treatBlanksAsZeros == true ? 0 : null;
                        if (data != null) {
                            var toolTipDataBegin = [data.value];
                            if (data.target != null) {
                                toolTipDataBegin.push(data.target);
                            }
                            if (data.max != null) {
                                toolTipDataBegin.push(data.max);
                            }
                            var tooltipDataFieldList = toolTipDataBegin.map(function (f) {
                                return { displayName: f.displayName, value: f.toString(true, useDisplayUnits, overrideBlanksWithValue) };
                            });
                            var percentageFormatter = ValueFormatter.create({ format: "0.00 %;-0.00 %;0.00 %", value: 1, allowFormatBeautification: true });
                            if (data.target != null) {
                                var formattedGapValueTarget = "";
                                var gapTargetField = data.gapBetweenValueAndTarget();
                                gapTargetField.displayUnits = useDisplayUnits ? settings.textSettings.displayUnits : 0;
                                gapTargetField.value = settings.textSettings.repPositiveGapAsNegativeNumber == true ? gapTargetField.value * -1 : gapTargetField.value;
                                formattedGapValueTarget = gapTargetField.toString(true, useDisplayUnits, overrideBlanksWithValue);
                                if (settings.textSettings.showPercentagesOnGaps == true) {
                                    var formattedPercent = percentageFormatter.format(Math.abs(gapTargetField.value) / data.target.value);
                                    formattedGapValueTarget += "(" + formattedPercent + ")";
                                }
                                tooltipDataFieldList.push({
                                    displayName: gapTargetField.displayName,
                                    value: formattedGapValueTarget
                                });
                            }
                            if (data.max != null) {
                                var formattedGapValueMax = "";
                                var gapMaxField = data.gapBetweenValueAndMax();
                                gapMaxField.displayUnits = useDisplayUnits ? settings.textSettings.displayUnits : 0;
                                gapMaxField.value = settings.textSettings.repPositiveGapAsNegativeNumber == true ? gapMaxField.value * -1 : gapMaxField.value;
                                formattedGapValueMax = gapMaxField.toString(true, useDisplayUnits, overrideBlanksWithValue);
                                if (settings.textSettings.showPercentagesOnGaps == true) {
                                    var formattedPercent = percentageFormatter.format(Math.abs(gapMaxField.value) / data.max.value);
                                    formattedGapValueMax += "(" + formattedPercent + ")";
                                }
                                tooltipDataFieldList.push({
                                    displayName: gapMaxField.displayName,
                                    value: formattedGapValueMax
                                });
                            }
                            //now let's push the tooltips
                            for (var i = 0; i < data.tooltipsData.length; i++) {
                                var ttData = data.tooltipsData[i];
                                tooltipDataFieldList.push({
                                    displayName: ttData.displayName,
                                    value: ttData.toString(true, useDisplayUnits, overrideBlanksWithValue)
                                });
                            }
                            //now return the tooltip data
                            return tooltipDataFieldList;
                        }
                        else {
                            return null;
                        }
                    };
                    /** Draws a single data bar within the area passed in to the function for the data passed in. */
                    databarvisual.prototype.add_one_data_bar = function (container, area, data) {
                        var _this = this;
                        //Let's derive some of the sizing
                        //set the bar area to take up 100% of the space
                        var bar_area = area;
                        //attach the data to the visual element so that it can be used in the tooltip
                        container.data([data]);
                        //now we need to check if all values are blank we just need to show a blank bar
                        if ((data.value == null || data.value.value == null) && (data.target == null || data.target.value == null) && (data.max == null || data.max.value == null)) {
                            //okay set up the blank label
                            var text_y_location_2 = bar_area.y_max;
                            var label = new databarKPIB8060E2B144244C5A38807466893C9F6.Label(container, "blank", this.settings.textSettings.fontSize + "px", this.font_family);
                            label.paint("valueTxt", container, bar_area.x_min + 3, text_y_location_2);
                            bar_area.y_max = (bar_area.y_max - margin_between_bar_and_text) - label.height();
                            //now draw the bar
                            var mainBarFill_2 = this.settings.colorSettings.defaultColorNoTargetFill;
                            container.select(".mabar")
                                .attr("width", bar_area.width())
                                .attr("fill", mainBarFill_2)
                                .attr("stroke", this.settings.outerBarSettings.outlineColor)
                                .attr("height", bar_area.height())
                                .attr("x", bar_area.x_min)
                                .attr("y", bar_area.y_min);
                            //and finish
                        }
                        else {
                            //now we can draw the actual visual
                            if (this.settings.textSettings.treatBlanksAsZeros == true) {
                                this.overrideBlanksWithValue = 0;
                            }
                            else {
                                this.overrideBlanksWithValue = null;
                            }
                            //add the display units from settings
                            var tS = this.settings.textSettings;
                            data.value.displayUnits = tS.displayUnitsForValue != 0 ? tS.displayUnitsForValue : tS.displayUnits;
                            if (data.max != null) {
                                data.max.displayUnits = tS.displayUnitsForMax != 0 ? tS.displayUnitsForMax : tS.displayUnits;
                            }
                            for (var i = 0; i < data.tooltipsData.length; i++) {
                                data.tooltipsData[i].displayUnits = this.settings.textSettings.displayUnits;
                            }
                            var position_percent_bar_in_percent = 0;
                            var position_dashed_line_in_percent = 0;
                            //first we need to determine how much to fill the bar and where the dashed
                            //line should be positioned
                            if (data.target == null) {
                                position_dashed_line_in_percent = 0;
                                position_percent_bar_in_percent = data.max == null ? 0 : (data.value.value / data.max.value) * 100;
                            }
                            else {
                                if (data.max == null) {
                                    // so we have a target and a value but no max   
                                    position_percent_bar_in_percent = (data.value.value / (data.target.value * 2)) * 100;
                                    position_dashed_line_in_percent = 50;
                                }
                                else {
                                    //we have a target and a max
                                    position_percent_bar_in_percent = (data.value.value / data.max.value) * 100;
                                    position_dashed_line_in_percent = (data.target.value / data.max.value) * 100;
                                }
                            }
                            //we need to derive the status bar color
                            var stColor = this.derive_status_color(data.value, data.target, data.max);
                            var margin_between_bar_and_text = 2;
                            if (this.settings.textSettings.position != "onbar") {
                                var text_y_location = null;
                                switch (this.settings.textSettings.position) {
                                    case "below":
                                        text_y_location = bar_area.y_max - margin_between_bar_and_text;
                                        break;
                                }
                                if (this.settings.textSettings.showValueText == true) {
                                    //get the formatted value string
                                    this.add_text(container, "valueTxt", this.settings.textSettings.fontSize, text_y_location, data.value, stColor.barColor)
                                        .attr("x", bar_area.x_min + 3);
                                }
                                if (data.max != null && this.settings.textSettings.showMaxText == true) {
                                    this.add_text(container, "goalTxt", this.settings.textSettings.fontSize, text_y_location, data.max, "#000000")
                                        .attr("x", bar_area.x_max - container.select(".goalTxt").node().getBBox().width);
                                }
                                //now do the bar placement 
                                //derive the bar attributes using the overall text height
                                var goal_txt_height = this.settings.textSettings.showMaxText == false || data.max == null ? 0 : container.select(".goalTxt").node().getBBox().height;
                                var value_txt_height = this.settings.textSettings.showValueText == false || data.value == null ? 0 : container.select(".valueTxt").node().getBBox().height;
                                var max_txt_height = goal_txt_height > value_txt_height ? goal_txt_height : value_txt_height;
                                switch (this.settings.textSettings.position) {
                                    case "below":
                                        bar_area.y_max = (bar_area.y_max - margin_between_bar_and_text) - max_txt_height;
                                        break;
                                }
                            }
                            //okay now make the dashed line area and readjust the bar's area
                            var dashed_line_area = new databarKPIB8060E2B144244C5A38807466893C9F6.Area(bar_area.x_min, bar_area.x_max, bar_area.y_min, bar_area.y_max);
                            var margin = (dashed_line_area.height() * 0.15);
                            bar_area.y_min += margin;
                            bar_area.y_max -= margin;
                            if (data.target == null && data.max == null) {
                                //just draw the main bar as we just want to show the value     
                                container.append("rect")
                                    .classed("mabar", true);
                            }
                            else {
                                // draw the complete visual
                                container.append("rect")
                                    .classed("mabar", true);
                                container.append("rect")
                                    .classed("pebar", true)
                                    .attr("x", bar_area.x_min)
                                    .attr("y", bar_area.y_min)
                                    .attr("height", bar_area.height())
                                    .attr("fill", stColor.barColor)
                                    .attr("width", bar_area.width() * (position_percent_bar_in_percent / 100));
                            }
                            var mainBarFill = null;
                            if ((data.target == null && data.max == null) && this.settings.outerBarSettings.fillWhenNoTarget) {
                                mainBarFill = this.settings.colorSettings.defaultColorNoTargetFill;
                            }
                            else {
                                mainBarFill = this.settings.outerBarSettings.fill;
                            }
                            //add the extra styling to the main outer bar
                            container.select(".mabar")
                                .attr("width", bar_area.width())
                                .attr("fill", mainBarFill)
                                .attr("stroke", this.settings.outerBarSettings.outlineColor)
                                .attr("height", bar_area.height())
                                .attr("x", bar_area.x_min)
                                .attr("y", bar_area.y_min);
                            // now if a target was specified we need to draw the dashed line
                            if (data.target != null) {
                                //determine where the dashed line should end
                                var x = bar_area.x_min + (bar_area.width() * (position_dashed_line_in_percent / 100));
                                container.append("line")
                                    .classed("tline", true)
                                    .attr("y1", dashed_line_area.y_min)
                                    .attr("x1", x)
                                    .attr("x2", x)
                                    .attr("y2", dashed_line_area.y_max)
                                    .style("stroke", this.settings.targetLineSettings.color)
                                    .style("stroke-width", this.settings.targetLineSettings.strokeWidth);
                                if (this.settings.targetLineSettings.lineStyle == "dashed") {
                                    container.select(".tline").style("stroke-dasharray", "2,2");
                                }
                            }
                            //if the data labels were set to onbar we draw them last
                            if (this.settings.textSettings.position == "onbar") {
                                if (this.settings.textSettings.showValueText == true) {
                                    var yOffset = (bar_area.y_min + (bar_area.height() / 2));
                                    //get the formatted value string
                                    this.add_text(container, "valueTxt", this.settings.textSettings.fontSize, 0, data.value, "#000000")
                                        .attr("x", bar_area.x_min + 3)
                                        .attr("y", yOffset + (container.select(".valueTxt").node().getBBox().height / 4));
                                }
                                if (data.max != null && this.settings.textSettings.showMaxText == true) {
                                    var yOffSet = (bar_area.y_min + (bar_area.height() / 2));
                                    this.add_text(container, "goalTxt", this.settings.textSettings.fontSize, 0, data.max, "#000000")
                                        .attr("x", bar_area.x_max - container.select(".goalTxt").node().getBBox().width)
                                        .attr("y", yOffSet + (container.select(".goalTxt").node().getBBox().height / 4))
                                        .style("stroke");
                                }
                            }
                            var selectionManager_1 = this.selectionManager;
                            container.on('click', function (d) {
                                var _this = this;
                                selectionManager_1.select(d.selectionId).then(function (ids) {
                                    d.global_svg_ref.selectAll(".pebar")
                                        .attr("fill-opacity", ids.length > 0 ? 0.2 : 1);
                                    d3.select(_this).select(".pebar").attr("fill-opacity", 1);
                                });
                                d3.event.stopPropagation();
                            });
                            this.tooltipServiceWrapper.addTooltip(container, function (tooltipEvent) { return databarvisual.getToolTipDataForBar(tooltipEvent.data, _this.settings); }, function (tooltipEvent) { return null; });
                        }
                    };
                    databarvisual.prototype.add_text = function (element, cssClass, fontSize, yPos, field, fill) {
                        var tmp = element.append("text")
                            .attr("y", yPos)
                            .classed(cssClass, true)
                            .text(field.toString(true, true, this.overrideBlanksWithValue))
                            .style("font-size", fontSize + "px")
                            .style("font-family", this.font_family)
                            .style("fill", fill);
                        return (tmp);
                    };
                    databarvisual.prototype.derive_status_color = function (value, target, max) {
                        var stColor = new StatusColor();
                        if (value.value == null || value.value == undefined) {
                            return {
                                barColor: this.settings.colorSettings.defaultColorNoTargetFill,
                                fontColor: this.settings.colorSettings.defaultColorNoTargetText
                            };
                        }
                        if (target != null) {
                            if (value.value > target.value) {
                                stColor.barColor = this.settings.colorSettings.greaterThanColor;
                                stColor.fontColor = this.settings.colorSettings.greaterThanColor;
                            }
                            else if (value.value < target.value) {
                                stColor.barColor = this.settings.colorSettings.lessThanColor;
                                stColor.fontColor = this.settings.colorSettings.lessThanColor;
                            }
                            else {
                                stColor.barColor = this.settings.colorSettings.equalToColor;
                                stColor.fontColor = this.settings.colorSettings.equalToColor;
                            }
                        }
                        else {
                            if (max != null) {
                                if (value.value > max.value) {
                                    stColor.barColor = this.settings.colorSettings.greaterThanColor;
                                    stColor.fontColor = this.settings.colorSettings.greaterThanColor;
                                }
                                else if (value.value < max.value) {
                                    stColor.barColor = this.settings.colorSettings.lessThanColor;
                                    stColor.fontColor = this.settings.colorSettings.lessThanColor;
                                }
                                else {
                                    stColor.barColor = this.settings.colorSettings.equalToColor;
                                    stColor.fontColor = this.settings.colorSettings.equalToColor;
                                }
                            }
                        }
                        if (target == null && max == null) {
                            stColor.barColor = this.settings.colorSettings.defaultColorNoTargetFill;
                            stColor.fontColor = this.settings.colorSettings.defaultColorNoTargetText;
                        }
                        return stColor;
                    };
                    databarvisual.prototype.canvas_setup = function () {
                        var container = d3.select(this.target);
                        this.svg = container.append("svg")
                            .attr("width", "100%")
                            .attr("height", "100%");
                        this.barsContainerElement = this.svg.append("g").classed("bars_container", true);
                    };
                    databarvisual.prototype.canvas_clear = function () {
                        this.barsContainerElement.selectAll(".barVisual").remove();
                        this.svg.selectAll(".headerTextG").remove();
                    };
                    databarvisual.parseSettings = function (dataView) {
                        return databarKPIB8060E2B144244C5A38807466893C9F6.VisualSettings.parse(dataView);
                    };
                    /**
                     * This function gets called for each of the objects defined in the capabilities files and allows you to select which of the
                     * objects and properties you want to expose to the users in the property pane.
                     *
                     */
                    databarvisual.prototype.enumerateObjectInstances = function (options) {
                        return databarKPIB8060E2B144244C5A38807466893C9F6.VisualSettings.enumerateObjectInstances(this.settings || databarKPIB8060E2B144244C5A38807466893C9F6.VisualSettings.getDefault(), options);
                    };
                    return databarvisual;
                }());
                databarKPIB8060E2B144244C5A38807466893C9F6.databarvisual = databarvisual;
            })(databarKPIB8060E2B144244C5A38807466893C9F6 = visual.databarKPIB8060E2B144244C5A38807466893C9F6 || (visual.databarKPIB8060E2B144244C5A38807466893C9F6 = {}));
        })(visual = extensibility.visual || (extensibility.visual = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
var powerbi;
(function (powerbi) {
    var visuals;
    (function (visuals) {
        var plugins;
        (function (plugins) {
            plugins.databarKPIB8060E2B144244C5A38807466893C9F6 = {
                name: 'databarKPIB8060E2B144244C5A38807466893C9F6',
                displayName: 'Data bar KPI',
                class: 'databarvisual',
                version: '1.1.1',
                apiVersion: '1.7.0',
                create: function (options) { return new powerbi.extensibility.visual.databarKPIB8060E2B144244C5A38807466893C9F6.databarvisual(options); },
                custom: true
            };
        })(plugins = visuals.plugins || (visuals.plugins = {}));
    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
})(powerbi || (powerbi = {}));
//# sourceMappingURL=visual.js.map