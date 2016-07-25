;/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define('deps/jquery',['require'],function(require){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});
;
var define,require,esl;!function(n){function e(n){p(n,N)||(_[n]=1)}function r(n,e){function r(n){0===n.indexOf(".")&&i.push(n)}var i=[];if("string"==typeof n?r(n):D(n,function(n){r(n)}),i.length>0)throw new Error("[REQUIRE_FATAL]Relative ID is not allowed in global require: "+i.join(", "));var o=P.waitSeconds;return o&&n instanceof Array&&(T&&clearTimeout(T),T=setTimeout(t,1e3*o)),H(n,e)}function t(){function n(a,u){if(!o[a]&&!p(a,N)){o[a]=1,p(a,L)||t[a]||(t[a]=1,e.push(a));var f=F[a];f?u&&(t[a]||(t[a]=1,e.push(a)),D(f.depMs,function(e){n(e.absId,e.hard)})):i[a]||(i[a]=1,r.push(a))}}var e=[],r=[],t={},i={},o={};for(var a in _)n(a,1);if(e.length||r.length)throw new Error("[MODULE_TIMEOUT]Hang( "+(e.join(", ")||"none")+" ) Miss( "+(r.join(", ")||"none")+" )")}function i(n){D(Q,function(e){u(n,e.deps,e.factory)}),Q.length=0}function o(n,e,r){if(null==r&&(null==e?(r=n,n=null):(r=e,e=null,n instanceof Array&&(e=n,n=null))),null!=r){var t=window.opera;if(!n&&document.attachEvent&&(!t||"[object Opera]"!==t.toString())){var i=O();n=i&&i.getAttribute("data-require-id")}n?u(n,e,r):Q[0]={deps:e,factory:r}}}function a(){var n=P.config[this.id];return n&&"object"==typeof n?n:{}}function u(n,e,r){F[n]||(F[n]={id:n,depsDec:e,deps:e||["require","exports","module"],factoryDeps:[],factory:r,exports:{},config:a,state:z,require:M(n),depMs:[],depMkv:{},depRs:[]})}function f(n){var e=F[n];if(e&&!p(n,B)){var r=e.deps,t=e.factory,i=0;"function"==typeof t&&(i=Math.min(t.length,r.length),!e.depsDec&&t.toString().replace(/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,"").replace(/require\(\s*(['"])([^'"]+)\1\s*\)/g,function(n,e,t){r.push(t)}));var o=[],a=[];D(r,function(r,t){var u,f,c=S(r),s=q(c.mod,n);s&&!C[s]?(c.res&&(f={id:r,mod:s,res:c.res},a.push(r),e.depRs.push(f)),u=e.depMkv[s],u||(u={id:c.mod,absId:s,hard:i>t},e.depMs.push(u),e.depMkv[s]=u,o.push(s))):u={absId:s},i>t&&e.factoryDeps.push(f||u)}),e.state=B,l(n),m(o),a.length&&e.require(a,function(){D(e.depRs,function(e){e.absId||(e.absId=q(e.id,n))}),c()})}}function c(){for(var n in _)f(n),s(n),d(n)}function s(n){function e(n){if(f(n),!p(n,B))return!1;if(p(n,L)||r[n])return!0;r[n]=1;var t=F[n],i=!0;return D(t.depMs,function(n){return i=e(n.absId)}),i&&D(t.depRs,function(n){return i=!!n.absId}),i&&!p(n,L)&&(t.state=L),i}var r={};e(n)}function l(e){function r(){if(!t&&i.state===L){t=1;var r=1;if(D(i.factoryDeps,function(n){var e=n.absId;return C[e]?void 0:(d(e),r=p(e,N))}),r){try{var o=i.factory,a="function"==typeof o?o.apply(n,v(i.factoryDeps,{require:i.require,exports:i.exports,module:i})):o;null!=a&&(i.exports=a),i.invokeFactory=null}catch(u){if(/^\[MODULE_MISS\]"([^"]+)/.test(u.message)){var f=i.depMkv[RegExp.$1];return f&&(f.hard=1),void(t=0)}throw u}g(e)}}}var t,i=F[e];i.invokeFactory=r}function p(n,e){return F[n]&&F[n].state>=e}function d(n){var e=F[n];e&&e.invokeFactory&&e.invokeFactory()}function v(n,e){var r=[];return D(n,function(n,t){"object"==typeof n&&(n=n.absId),r[t]=e[n]||F[n].exports}),r}function h(n,e){if(p(n,N))return void e();var r=G[n];r||(r=G[n]=[]),r.push(e)}function g(n){var e=F[n];e.state=N,delete _[n];for(var r=G[n]||[],t=r.length;t--;)r[t]();r.length=0,G[n]=null}function m(e,r,t){function i(){if("function"==typeof r&&!o){var t=1;D(e,function(n){return C[n]?void 0:t=!!p(n,N)}),t&&(o=1,r.apply(n,v(e,C)))}}var o=0;D(e,function(n){C[n]||p(n,N)||(h(n,i),(n.indexOf("!")>0?b:y)(n,t))}),i()}function y(e){function r(){var n=X[e];R(n||e,t)}function t(){if(a){var r;"function"==typeof a.init&&(r=a.init.apply(n,v(u,C))),null==r&&a.exports&&(r=n,D(a.exports.split("."),function(n){return r=r[n],!!r})),o(e,u,r||{})}else i(e);c()}if(!J[e]&&!F[e]){J[e]=1;var a=P.shim[e];a instanceof Array&&(P.shim[e]=a={deps:a});var u=a&&(a.deps||[]);u?(D(u,function(n){P.shim[n]||(P.shim[n]={})}),H(u,r)):r()}}function b(n,e){function r(e){f.exports=e||!0,g(n)}function t(t){var i=e?F[e].require:H;t.load(u.res,i,r,a.call({id:n}))}if(!F[n]){var o=X[n];if(o)return void y(o);var u=S(n),f={id:n,state:B};F[n]=f,r.fromText=function(n,e){new Function(e)(),i(n)},t(H(u.mod))}}function x(n,e){var r=U(n,1,e);return r.sort($),r}function k(){function n(n){X[A(n)]=e}P.baseUrl=P.baseUrl.replace(/\/$/,"")+"/",K=x(P.paths),W=x(P.map,1),D(W,function(n){n.v=x(n.v)}),V=[],D(P.packages,function(n){var e=n;"string"==typeof n&&(e={name:n.split("/")[0],location:n,main:"main"}),e.location=e.location||e.name,e.main=(e.main||"main").replace(/\.js$/i,""),e.reg=j(e.name),V.push(e)}),V.sort($),Y=x(P.urlArgs,1),X={};for(var e in P.bundles)D(P.bundles[e],n)}function E(n,e,r){D(e,function(e){return e.reg.test(n)?(r(e.v,e.k,e),!1):void 0})}function w(n,e){var r=/(\.[a-z0-9]+)$/i,t=/(\?[^#]*)$/,i="",o=n,a="";t.test(n)&&(a=RegExp.$1,n=n.replace(t,"")),r.test(n)&&(i=RegExp.$1,o=n.replace(r,"")),null!=e&&(o=q(o,e));var u,f=o;return E(o,K,function(n,e){f=f.replace(e,n),u=1}),u||E(o,V,function(n,e,r){f=f.replace(r.name,r.location)}),/^([a-z]{2,10}:\/)?\//i.test(f)||(f=P.baseUrl+f),f+=i+a,E(o,Y,function(n){f+=(f.indexOf("?")>0?"&":"?")+n}),f}function M(n){function r(r,i){if("string"==typeof r){if(!t[r]){var o=q(r,n);if(d(o),!p(o,N))throw new Error('[MODULE_MISS]"'+o+'" is not exists!');t[r]=F[o].exports}return t[r]}if(r instanceof Array){var a=[],u=[];D(r,function(r,t){var i=S(r),o=q(i.mod,n),f=i.res,c=o;if(f){var s=o+"!"+f;0!==f.indexOf(".")&&X[s]?o=c=s:c=null}u[t]=c,e(o),a.push(o)}),m(a,function(){D(u,function(t,i){null==t&&(t=u[i]=q(r[i],n),e(t))}),m(u,i,n),c()},n),c()}}var t={};return r.toUrl=function(e){return w(e,n||"")},r}function q(n,e){if(!n)return"";e=e||"";var r=S(n);if(!r)return n;var t=r.res,i=I(r.mod,e);if(E(e,W,function(n){E(i,n,function(n,e){i=i.replace(e,n)})}),i=A(i),t){var o=p(i,N)&&H(i);t=o&&o.normalize?o.normalize(t,function(n){return q(n,e)}):q(t,e),i+="!"+t}return i}function A(n){return D(V,function(e){var r=e.name;return r===n?(n=r+"/"+e.main,!1):void 0}),n}function I(n,e){if(0===n.indexOf(".")){var r=e.split("/"),t=n.split("/"),i=r.length-1,o=t.length,a=0,u=0;n:for(var f=0;o>f;f++)switch(t[f]){case"..":if(!(i>a))break n;a++,u++;break;case".":u++;break;default:break n}return r.length=i-a,t=t.slice(u),r.concat(t).join("/")}return n}function S(n){var e=n.split("!");return e[0]?{mod:e[0],res:e[1]}:void 0}function U(n,e,r){var t=[];for(var i in n)if(n.hasOwnProperty(i)){var o={k:i,v:n[i]};t.push(o),e&&(o.reg="*"===i&&r?/^/:j(i))}return t}function O(){if(Z)return Z;if(ne&&"interactive"===ne.readyState)return ne;for(var n=document.getElementsByTagName("script"),e=n.length;e--;){var r=n[e];if("interactive"===r.readyState)return ne=r,r}}function R(n,e){function r(){var n=t.readyState;("undefined"==typeof n||/^(loaded|complete)$/.test(n))&&(t.onload=t.onreadystatechange=null,t=null,e())}var t=document.createElement("script");t.setAttribute("data-require-id",n),t.src=w(n+".js"),t.async=!0,t.readyState?t.onreadystatechange=r:t.onload=r,Z=t,re?ee.insertBefore(t,re):ee.appendChild(t),Z=null}function j(n){return new RegExp("^"+n+"(/|$)")}function D(n,e){if(n instanceof Array)for(var r=0,t=n.length;t>r&&e(n[r],r)!==!1;r++);}function $(n,e){var r=n.k||n.name,t=e.k||e.name;return"*"===t?-1:"*"===r?1:t.length-r.length}var T,F={},z=1,B=2,L=3,N=4,_={},C={require:r,exports:1,module:1},H=M(),P={baseUrl:"./",paths:{},config:{},map:{},packages:[],shim:{},waitSeconds:0,bundles:{},urlArgs:{}};r.version="2.0.6",r.loader="esl",r.toUrl=H.toUrl;var Q=[];o.amd={};var G={},J={};r.config=function(n){if(n){for(var e in P){var r=n[e],t=P[e];if(r)if("urlArgs"===e&&"string"==typeof r)P.urlArgs["*"]=r;else if(t instanceof Array)t.push.apply(t,r);else if("object"==typeof t)for(var i in r)t[i]=r[i];else P[e]=r}k()}},k();var K,V,W,X,Y,Z,ne,ee=document.getElementsByTagName("head")[0],re=document.getElementsByTagName("base")[0];re&&(ee=re.parentNode),define||(define=o,require||(require=r),esl=r)}(this);;
window.require.config({
    paths: {
        'searchbox/openjs/aio': '//m.baidu.com/static/searchbox/openjs/aio.js?v=201606'
    }
});
;
/**
 * @file 事件触发机制
 * @author luofei02
 * @date 2015-12-09
 */
define('deps/emit', ['require'], function (require) {
    function EventEmitter() {}

    var proto = EventEmitter.prototype;

    function indexOfListener(listeners, listener) {
        var i = listeners.length;
        while (i--) {
            if (listeners[i].listener === listener) {
                return i;
            }
        }

        return -1;
    }

    proto.addEventListener = proto.on = function (evt, listener) {
        var listeners = this._getEventListenersAsObject(evt);
        var isMulti = typeof listener === 'object';

        for (var key in listeners) {
            if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
                listeners[key].push(isMulti ? listener : {
                    listener: listener,
                    once: false
                });
            }
        }

        return this;
    };

    proto.one = function (evt, listener) {
        return this.on(evt, {
            listener: listener,
            once: true
        });
    };

    proto.removeEventListener = proto.off = function (evt, listener) {
        var listeners = this._getEventListenersAsObject(evt);

        for (var key in listeners) {
            if (listeners.hasOwnProperty(key)) {
                var index = indexOfListener(listeners[key], listener);

                if (index !== -1) {
                    listeners[key].splice(index, 1);
                }
            }
        }

        return this;
    };

    proto.trigger = function (evt, args) {
        var listenersMap = this._getEventListenersAsObject(evt);
        var response;

        for (var key in listenersMap) {
            if (listenersMap.hasOwnProperty(key)) {
                var listeners = listenersMap[key].slice(0);
                var i = listeners.length;
                while (i--) {
                    var listener = listeners[i];

                    if (listener.once === true) {
                        this.off(evt, listener.listener);
                    }

                    response = listener.listener.apply(this, args || []);
                }
            }
        }

        return this;
    };

    proto._getEventListenersAsObject = function (evt) {
        var listeners = this._getEventListeners(evt);
        var response;

        if (listeners instanceof Array) {
            response = {};
            response[evt] = listeners;
        }

        return response || listeners;
    };

    proto._getEventListeners = function (evt) {
        var events = this._getEvents();
        return events[evt] || (events[evt] = []);
    };

    proto._getEvents = function () {
        return this._events || (this._events = {});
    };

    return EventEmitter;
});
;
define('observable', ['require'], function(require){
    function Observable(){
        this.handlers_ = []; 
    }

    /**
    * Adds the observer to this instance.
    * @param {function(TYPE)} handler Observer's handler.
    * @return {!Unlisten}
    */

    Observable.prototype.add = function(handler){
        var _this = this;
        this.handlers_.push(handler);
        return function () {
            _this.remove(handler);
        };
    }

    /**
    * Removes the observer from this instance.
    * @param {function(TYPE)} handler Observer's instance.
    */

    Observable.prototype.remove = function(handler){
        for (var i = 0; i < this.handlers_.length; i++) {
            if (handler == this.handlers_[i]) {
                this.handlers_.splice(i, 1);
                break;
            }
        }
    }
    /**
    * Fires an event. All observers are called.
    * @param {TYPE} event
    */

    Observable.prototype.fire = function(){
        var args = Array.prototype.slice.call(arguments);
        this.handlers_.forEach(function (handler) {
            handler.apply(null,args);
        });

    }
    /**
    * Returns number of handlers. Mostly needed for tests.
    * @return {number}
    */

    Observable.prototype.getHandlerCount = function(){

        return this.handlers_.length;
    }
    return new Observable();
});
;
var platform = (function() {

    function isIos() {
        return /iPhone|iPad|iPod/i.test(window.navigator.userAgent); 
    }

    function isSafari() {
        return /Safari/i.test(window.navigator.userAgent) && !isChrome(); 
    }
    function isChrome() {
        return /Chrome|CriOS/i.test(window.navigator.userAgent);
    }
    function isUc() {
        return /UCBrowser/i.test(window.navigator.userAgent);
    }

    return {
        isIos:isIos,
        isSafari:isSafari,
        isChrome:isChrome,
        isUc: isUc,
        needSpecialScroll: isIos() && !isUc()
    }
})(); 
;
define('message_center', ['require', 'observable'], function(require){
    /**
    * @des 消息中心 如果初始化时候，不指定target，则只会监听当前页面，不可以发送请求，否则会报错
    * @author shenzhou@baidu.com
    * @version 1.0
    * @copyright 2015 Baidu.com, Inc. All Rights Reserved
    */
    //发送postMessage时候，目标response的回掉函数
    responseHandlers = {};
    var messageObserver = require('observable');

    var isListener = false;
    var sentinel = '__MIP__';
    var sentinelRequest = sentinel + 'REQUEST'; 
    var sentinelResponse = sentinel + 'RESPONSE'; 
    /**
    * {send request to targe frame}
    * 
    * @param data {type json} 
    * @param responseHandler {type function} 
    * @return nothing return
    */
    function sendRequest(target,data,responseHandler){
        var sessionID = ((new Date()).getTime()+parseInt(Math.random()*1000)).toString(); 
        data.requestData = {};
        data.sentinel = sentinelRequest;
        data.requestData.sessionID = sessionID;
        if(typeof responseHandler != undefined){
            responseHandlers[sessionID] = responseHandler;
        }
        target.postMessage(data, '*');

        //TODO 响应页面消息逻辑，需要额外函数处理
    }

    function onMessage(messageHandler){
        if(!isListener) {
            window.addEventListener('message', function(event){
                messageFire(event);
            } , false);
            isListener = true;
        }
        messageObserver.add(messageHandler);
    }

    function messageFire(event){
        var data = event.data;
        if(data.sentinel == sentinelRequest){
            messageObserver.fire(event);
        } else if(data.sentinel == sentinelResponse){
            var sessionID =  data.sessionID;
            if(responseHandlers[sessionID]){
                responseHandlers[sessionID](event);
            } 
        }
    }

    function sendResponse(target, requestData, responseData) {
        var sessionID = requestData.sessionID;
        var data = responseData;
        data.sessionID = sessionID;
        data.sentinel = sentinelResponse;
        target.postMessage(data, '*');
    }
    return {
        sendRequest:sendRequest,
        sendResponse:sendRequest,
        onMessage:onMessage
    };
});
;
define('gesture', ['require', 'observable'], function(require){
    
    var state = {
    }
    
    var gestureObserver = require('observable');
    
    function message(data,event){
       gestureObserver.fire(data,event);
    }
    
    function bind(handler){
        gestureObserver.add(handler);
    }
    
    function unbind(handler){
        gestureObserver.remove(handler);
    }
     
    var point = {
        "startX" : 0,
        "startY" : 0,
        "lastX" : 0,
        "lastY" : 0,
        "startT" : 0
    };

    
    function touchStart(evt){
        try {
            var touch = evt.touches[0];
            point.startX = Number(touch.screenX);
            point.startY = Number(touch.screenY);
            point.startT = evt.timeStamp;
            var data = {"event" : "touchstart", "x" : point.startX, "y" : point.startY, "_t" : evt.timeStamp};
            message(evt,data);
        }
        catch (e) {

        }
    }
    
    function touchEnd(evt){

        try {
            nChangX = evt.changedTouches[0].screenX;
            nChangY = evt.changedTouches[0].screenY;

            var distX = nChangX - point.startX;
            var distY = nChangY - point.startY;

            var speed = (evt.timeStamp - point.startT)/distX;
            message(evt, {"event" : "touchend", "x" : distX, "y" : distY, "_t" : evt.timeStamp, "speed" : speed});

        }
        catch (e) {

        }

    }

    function touchMove(evt){
        try {
            var touch = evt.touches[0]; 
            var x = Number(touch.screenX);
            var y = Number(touch.screenY);
            var data = {"event" : "touchmove", "x" : x - point.startX, "y" : y - point.startY, "_t" : evt.timeStamp};
            message(evt,data);

        }
        catch (e) {

        }
    }

    //绑定事件
    var isBind = false;
    function bindEvent(){
        if(!isBind) {
            window.addEventListener('touchstart', touchStart, false);
            window.addEventListener('touchmove', touchMove, false);
            window.addEventListener('touchend', touchEnd, false);
            isBind = true;
        }
    }
    
    function init(){
        bindEvent();
    }
    return {
        init:init,
        bind:bind,
        unbind:unbind
    }
});
;
define('viewport', ['require', 'observable', 'gesture'], function(require){

    /**
        界面可视窗口模块，提供窗口各属性，以及窗口整体scroll、resize等事件接口
    */
    var Viewport = {};

    /**
        Viewer对象，用于做父页面和子页面的通信代理
    */
    var viewer  = null;

    var _scrollTop = null,
        _scrollLeft = null,
        _size = null,
        _scrollCount = 0,
        _scrollTracking = false,
        _swapTracking = false,
        _isViewportNormal = true,
        _changeObservable = require('observable'),
        _scrollObservable = require('observable'),
        _touchObservable = require('observable');

    var gesture = require('gesture');

    gesture.init();

    Viewport.getTop = function() {
        return this.getScrollTop();
    };

    Viewport.getScrollTop = function() {
        _scrollTop = $(window).scrollTop();
        return _scrollTop;
    };

    Viewport.getScrollLeft = function() {
        if(_scrollLeft == null) {
            _scrollLeft = $(window).scrollLeft();
        }
        return _scrollLeft;
    };

    /**
     *  
     * */
    Viewport.setScrollTop = function(scrollPos) {
        _scrollTop = null;
        $(window).scrollTop(scrollPos);
    };

    /**
     * Returns the size of the viewport.
     * @return {!{width: number, height: number}}
    */
    Viewport.getSize = function() {
        if (_size) {
            return _size;
        }
        return _size = {
            "width" : $(window).width(),
            "height" : $(window).height()
        };
    };

    Viewport.getWidth = function() {
        return this.getSize().width;
    };

    Viewport.getScrollWidth = function() {
        return _getScrollingElement.scrollWidth;
    };

    Viewport.onChanged = function(handler) {
        return _changeObservable.add(handler);
    };

    Viewport.onScroll = function(handler) {
        return _scrollObservable.add(handler);
    };

    Viewport.onTouch = function(handler) {
        return _touchObservable.add(handler);
    }

    Viewport.resetTouchZoom = function(){
        var windowHeight = window.innerHeight;
        var documentHeight = window.document.documentElement.clientHeight;
        
        if(windowHeight && documentHeight && windowHeight === documentHeight) {
            return;
        }

        if(disableTouchZoom()) {
            //restore touch zoom
        }

    };

    Viewport.disableTouchZoom = function() {
        var viewportMeta = _getViewportMeta();
    };

    Viewport.setViewportNormal = function(flag) {
        _isViewportNormal = flag;
    };

    function _touch(evt, data) {
         if(_isViewportNormal) {
            //正常浏览时执行
            //此处应该调用recognizeGesture来识别
            _recognizeGesture(evt, data);
         } else {
            //图片浏览、全屏视频播放时，不触发viewport的touch
            return;
         }
    }

    function _recognizeGesture(evt, data) {


        if(typeof data === "object") {
            var eventType = data.event;

            switch(eventType) {
                case "touchstart" :
                    window.parent.postMessage(data,'*');
                    break;
                case "touchmove" :

                    if (Math.abs(data.x) > 15 && Math.abs(data.x/data.y) >= 3 && !_scrollTracking ) {
                        evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等
                        _swapTracking = true;
                        window.parent.postMessage(data,'*');
                    } else if(Math.abs(data.y/data.x) >= 3 && !_swapTracking) {
                        _scrollTracking = true; 
                    }
                    if(data.y != 0 && _swapTracking) {
                        evt.preventDefault && evt.preventDefault();
                        evt.stopPropagation && evt.stopPropagation();
                    }
                    break;
                case "touchend" :
                    window.parent.postMessage(data,'*');
                    _swapTracking = false;
                    _scrollTracking = false;
                    break;
            } 
        }
    }

    function _changed() {
        var size = Viewport.getSize();
        var scrollTop = Viewport.getScrollTop();
        _changeObservable.fire({
            top: scrollTop,
            width: size.width,
            height: size.height
        });
    }

    function _getScrollingElement() {
        var doc = this.win.document;
        if (doc.scrollingElement) {
          return doc.scrollingElement;
        }
        if (doc.body) {
          return doc.body;
        }
        return doc.documentElement;
    }

    /**
     *  触发scroll，并向observerfire事件
     * */
    function _scroll() {

        _scrollCount ++;
        _scrollObservable.fire();
        _scrollLeft = Viewport.getScrollLeft();
        
        /*
        if(_scrollTracking) {
            return;
        }
        */

        var newScrollTop = Viewport.getScrollTop();
        if(newScrollTop < 0) {
            return;
        }

        //正在进行scroll，scrollTracking设为true
        //TODO 
        //计算滚动速度，速度为0的时候，
        //_scrollTracking = true;
        _scrollTop = newScrollTop;

    }

    Viewport.hasScrolled = function() {
        return _scrollCount > 0;
    };

    function _init() {
        $(window).on("scroll",_scroll);
        
        if (window.parent !== window && platform.needSpecialScroll) {
            $('body').on('scroll', _scroll);
        }
        gesture.bind(_touch);
        return Viewport;
    }

    return _init();

});
;
/*!
Copyright (C) 2014-2015 by WebReflection

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
(function(window, document, Object, REGISTER_ELEMENT){'use strict';

// in case it's there or already patched
if (REGISTER_ELEMENT in document) return;

// DO NOT USE THIS FILE DIRECTLY, IT WON'T WORK
// THIS IS A PROJECT BASED ON A BUILD SYSTEM
// THIS FILE IS JUST WRAPPED UP RESULTING IN
// build/document-register-element.js
// and its .max.js counter part

var
  // IE < 11 only + old WebKit for attributes + feature detection
  EXPANDO_UID = '__' + REGISTER_ELEMENT + (Math.random() * 10e4 >> 0),

  // shortcuts and costants
  ATTACHED = 'attached',
  DETACHED = 'detached',
  EXTENDS = 'extends',
  ADDITION = 'ADDITION',
  MODIFICATION = 'MODIFICATION',
  REMOVAL = 'REMOVAL',
  DOM_ATTR_MODIFIED = 'DOMAttrModified',
  DOM_CONTENT_LOADED = 'DOMContentLoaded',
  DOM_SUBTREE_MODIFIED = 'DOMSubtreeModified',
  PREFIX_TAG = '<',
  PREFIX_IS = '=',

  // valid and invalid node names
  validName = /^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,
  invalidNames = [
    'ANNOTATION-XML',
    'COLOR-PROFILE',
    'FONT-FACE',
    'FONT-FACE-SRC',
    'FONT-FACE-URI',
    'FONT-FACE-FORMAT',
    'FONT-FACE-NAME',
    'MISSING-GLYPH'
  ],

  // registered types and their prototypes
  types = [],
  protos = [],

  // to query subnodes
  query = '',

  // html shortcut used to feature detect
  documentElement = document.documentElement,

  // ES5 inline helpers || basic patches
  indexOf = types.indexOf || function (v) {
    for(var i = this.length; i-- && this[i] !== v;){}
    return i;
  },

  // other helpers / shortcuts
  OP = Object.prototype,
  hOP = OP.hasOwnProperty,
  iPO = OP.isPrototypeOf,

  defineProperty = Object.defineProperty,
  gOPD = Object.getOwnPropertyDescriptor,
  gOPN = Object.getOwnPropertyNames,
  gPO = Object.getPrototypeOf,
  sPO = Object.setPrototypeOf,

  // jshint proto: true
  hasProto = !!Object.__proto__,

  // used to create unique instances
  create = Object.create || function Bridge(proto) {
    // silly broken polyfill probably ever used but short enough to work
    return proto ? ((Bridge.prototype = proto), new Bridge()) : this;
  },

  // will set the prototype if possible
  // or copy over all properties
  setPrototype = sPO || (
    hasProto ?
      function (o, p) {
        o.__proto__ = p;
        return o;
      } : (
    (gOPN && gOPD) ?
      (function(){
        function setProperties(o, p) {
          for (var
            key,
            names = gOPN(p),
            i = 0, length = names.length;
            i < length; i++
          ) {
            key = names[i];
            if (!hOP.call(o, key)) {
              defineProperty(o, key, gOPD(p, key));
            }
          }
        }
        return function (o, p) {
          do {
            setProperties(o, p);
          } while ((p = gPO(p)) && !iPO.call(p, o));
          return o;
        };
      }()) :
      function (o, p) {
        for (var key in p) {
          o[key] = p[key];
        }
        return o;
      }
  )),

  // DOM shortcuts and helpers, if any

  MutationObserver = window.MutationObserver ||
                     window.WebKitMutationObserver,

  HTMLElementPrototype = (
    window.HTMLElement ||
    window.Element ||
    window.Node
  ).prototype,

  IE8 = !iPO.call(HTMLElementPrototype, documentElement),

  isValidNode = IE8 ?
    function (node) {
      return node.nodeType === 1;
    } :
    function (node) {
      return iPO.call(HTMLElementPrototype, node);
    },

  targets = IE8 && [],

  cloneNode = HTMLElementPrototype.cloneNode,
  setAttribute = HTMLElementPrototype.setAttribute,
  removeAttribute = HTMLElementPrototype.removeAttribute,

  // replaced later on
  createElement = document.createElement,

  // shared observer for all attributes
  attributesObserver = MutationObserver && {
    attributes: true,
    characterData: true,
    attributeOldValue: true
  },

  // useful to detect only if there's no MutationObserver
  DOMAttrModified = MutationObserver || function(e) {
    doesNotSupportDOMAttrModified = false;
    documentElement.removeEventListener(
      DOM_ATTR_MODIFIED,
      DOMAttrModified
    );
  },

  // will both be used to make DOMNodeInserted asynchronous
  asapQueue,
  rAF = window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (fn) { setTimeout(fn, 10); },

  // internal flags
  setListener = false,
  doesNotSupportDOMAttrModified = true,
  dropDomContentLoaded = true,

  // needed for the innerHTML helper
  notFromInnerHTMLHelper = true,

  // optionally defined later on
  onSubtreeModified,
  callDOMAttrModified,
  getAttributesMirror,
  observer,

  // based on setting prototype capability
  // will check proto or the expando attribute
  // in order to setup the node once
  patchIfNotAlready,
  patch
;

if (sPO || hasProto) {
    patchIfNotAlready = function (node, proto) {
      if (!iPO.call(proto, node)) {
        setupNode(node, proto);
      }
    };
    patch = setupNode;
} else {
    patchIfNotAlready = function (node, proto) {
      if (!node[EXPANDO_UID]) {
        node[EXPANDO_UID] = Object(true);
        setupNode(node, proto);
      }
    };
    patch = patchIfNotAlready;
}
if (IE8) {
  doesNotSupportDOMAttrModified = false;
  (function (){
    var
      descriptor = gOPD(HTMLElementPrototype, 'addEventListener'),
      addEventListener = descriptor.value,
      patchedRemoveAttribute = function (name) {
        var e = new CustomEvent(DOM_ATTR_MODIFIED, {bubbles: true});
        e.attrName = name;
        e.prevValue = this.getAttribute(name);
        e.newValue = null;
        e[REMOVAL] = e.attrChange = 2;
        removeAttribute.call(this, name);
        this.dispatchEvent(e);
      },
      patchedSetAttribute = function (name, value) {
        var
          had = this.hasAttribute(name),
          old = had && this.getAttribute(name),
          e = new CustomEvent(DOM_ATTR_MODIFIED, {bubbles: true})
        ;
        setAttribute.call(this, name, value);
        e.attrName = name;
        e.prevValue = had ? old : null;
        e.newValue = value;
        if (had) {
          e[MODIFICATION] = e.attrChange = 1;
        } else {
          e[ADDITION] = e.attrChange = 0;
        }
        this.dispatchEvent(e);
      },
      onPropertyChange = function (e) {
        // jshint eqnull:true
        var
          node = e.currentTarget,
          superSecret = node[EXPANDO_UID],
          propertyName = e.propertyName,
          event
        ;
        if (superSecret.hasOwnProperty(propertyName)) {
          superSecret = superSecret[propertyName];
          event = new CustomEvent(DOM_ATTR_MODIFIED, {bubbles: true});
          event.attrName = superSecret.name;
          event.prevValue = superSecret.value || null;
          event.newValue = (superSecret.value = node[propertyName] || null);
          if (event.prevValue == null) {
            event[ADDITION] = event.attrChange = 0;
          } else {
            event[MODIFICATION] = event.attrChange = 1;
          }
          node.dispatchEvent(event);
        }
      }
    ;
    descriptor.value = function (type, handler, capture) {
      if (
        type === DOM_ATTR_MODIFIED &&
        this.attributeChangedCallback &&
        this.setAttribute !== patchedSetAttribute
      ) {
        this[EXPANDO_UID] = {
          className: {
            name: 'class',
            value: this.className
          }
        };
        this.setAttribute = patchedSetAttribute;
        this.removeAttribute = patchedRemoveAttribute;
        addEventListener.call(this, 'propertychange', onPropertyChange);
      }
      addEventListener.call(this, type, handler, capture);
    };
    defineProperty(HTMLElementPrototype, 'addEventListener', descriptor);
  }());
} else if (!MutationObserver) {
  documentElement.addEventListener(DOM_ATTR_MODIFIED, DOMAttrModified);
  documentElement.setAttribute(EXPANDO_UID, 1);
  documentElement.removeAttribute(EXPANDO_UID);
  if (doesNotSupportDOMAttrModified) {
    onSubtreeModified = function (e) {
      var
        node = this,
        oldAttributes,
        newAttributes,
        key
      ;
      if (node === e.target) {
        oldAttributes = node[EXPANDO_UID];
        node[EXPANDO_UID] = (newAttributes = getAttributesMirror(node));
        for (key in newAttributes) {
          if (!(key in oldAttributes)) {
            // attribute was added
            return callDOMAttrModified(
              0,
              node,
              key,
              oldAttributes[key],
              newAttributes[key],
              ADDITION
            );
          } else if (newAttributes[key] !== oldAttributes[key]) {
            // attribute was changed
            return callDOMAttrModified(
              1,
              node,
              key,
              oldAttributes[key],
              newAttributes[key],
              MODIFICATION
            );
          }
        }
        // checking if it has been removed
        for (key in oldAttributes) {
          if (!(key in newAttributes)) {
            // attribute removed
            return callDOMAttrModified(
              2,
              node,
              key,
              oldAttributes[key],
              newAttributes[key],
              REMOVAL
            );
          }
        }
      }
    };
    callDOMAttrModified = function (
      attrChange,
      currentTarget,
      attrName,
      prevValue,
      newValue,
      action
    ) {
      var e = {
        attrChange: attrChange,
        currentTarget: currentTarget,
        attrName: attrName,
        prevValue: prevValue,
        newValue: newValue
      };
      e[action] = attrChange;
      onDOMAttrModified(e);
    };
    getAttributesMirror = function (node) {
      for (var
        attr, name,
        result = {},
        attributes = node.attributes,
        i = 0, length = attributes.length;
        i < length; i++
      ) {
        attr = attributes[i];
        name = attr.name;
        if (name !== 'setAttribute') {
          result[name] = attr.value;
        }
      }
      return result;
    };
  }
}

function loopAndVerify(list, action) {
  for (var i = 0, length = list.length; i < length; i++) {
    verifyAndSetupAndAction(list[i], action);
  }
}

function loopAndSetup(list) {
  for (var i = 0, length = list.length, node; i < length; i++) {
    node = list[i];
    patch(node, protos[getTypeIndex(node)]);
  }
}

function executeAction(action) {
  return function (node) {
    if (isValidNode(node)) {
      verifyAndSetupAndAction(node, action);
      loopAndVerify(
        node.querySelectorAll(query),
        action
      );
    }
  };
}

function getTypeIndex(target) {
  var
    is = target.getAttribute('is'),
    nodeName = target.nodeName.toUpperCase(),
    i = indexOf.call(
      types,
      is ?
          PREFIX_IS + is.toUpperCase() :
          PREFIX_TAG + nodeName
    )
  ;
  return is && -1 < i && !isInQSA(nodeName, is) ? -1 : i;
}

function isInQSA(name, type) {
  return -1 < query.indexOf(name + '[is="' + type + '"]');
}

function onDOMAttrModified(e) {
  var
    node = e.currentTarget,
    attrChange = e.attrChange,
    attrName = e.attrName,
    target = e.target
  ;
  if (notFromInnerHTMLHelper &&
      (!target || target === node) &&
      node.attributeChangedCallback &&
      attrName !== 'style') {
    node.attributeChangedCallback(
      attrName,
      attrChange === e[ADDITION] ? null : e.prevValue,
      attrChange === e[REMOVAL] ? null : e.newValue
    );
  }
}

function onDOMNode(action) {
  var executor = executeAction(action);
  return function (e) {
    asapQueue.push(executor, e.target);
  };
}

function onReadyStateChange(e) {
  if (dropDomContentLoaded) {
    dropDomContentLoaded = false;
    e.currentTarget.removeEventListener(DOM_CONTENT_LOADED, onReadyStateChange);
  }
  loopAndVerify(
    (e.target || document).querySelectorAll(query),
    e.detail === DETACHED ? DETACHED : ATTACHED
  );
  if (IE8) purge();
}

function patchedSetAttribute(name, value) {
  // jshint validthis:true
  var self = this;
  setAttribute.call(self, name, value);
  onSubtreeModified.call(self, {target: self});
}

function setupNode(node, proto) {
  setPrototype(node, proto);
  if (observer) {
    observer.observe(node, attributesObserver);
  } else {
    if (doesNotSupportDOMAttrModified) {
      node.setAttribute = patchedSetAttribute;
      node[EXPANDO_UID] = getAttributesMirror(node);
      node.addEventListener(DOM_SUBTREE_MODIFIED, onSubtreeModified);
    }
    node.addEventListener(DOM_ATTR_MODIFIED, onDOMAttrModified);
  }
  if (node.createdCallback && notFromInnerHTMLHelper) {
    node.created = true;
    node.createdCallback();
    node.created = false;
  }
}

function purge() {
  for (var
    node,
    i = 0,
    length = targets.length;
    i < length; i++
  ) {
    node = targets[i];
    if (!documentElement.contains(node)) {
      targets.splice(i, 1);
      verifyAndSetupAndAction(node, DETACHED);
    }
  }
}

function verifyAndSetupAndAction(node, action) {
  var
    fn,
    i = getTypeIndex(node)
  ;
  if (-1 < i) {
    patchIfNotAlready(node, protos[i]);
    i = 0;
    if (action === ATTACHED && !node[ATTACHED]) {
      node[DETACHED] = false;
      node[ATTACHED] = true;
      i = 1;
      if (IE8 && indexOf.call(targets, node) < 0) {
        targets.push(node);
      }
    } else if (action === DETACHED && !node[DETACHED]) {
      node[ATTACHED] = false;
      node[DETACHED] = true;
      i = 1;
    }
    if (i && (fn = node[action + 'Callback'])) fn.call(node);
  }
}

// set as enumerable, writable and configurable
document[REGISTER_ELEMENT] = function registerElement(type, options) {
  upperType = type.toUpperCase();
  if (!setListener) {
    // only first time document.registerElement is used
    // we need to set this listener
    // setting it by default might slow down for no reason
    setListener = true;
    if (MutationObserver) {
      observer = (function(attached, detached){
        function checkEmAll(list, callback) {
          for (var i = 0, length = list.length; i < length; callback(list[i++])){}
        }
        return new MutationObserver(function (records) {
          for (var
            current, node,
            i = 0, length = records.length; i < length; i++
          ) {
            current = records[i];
            if (current.type === 'childList') {
              checkEmAll(current.addedNodes, attached);
              checkEmAll(current.removedNodes, detached);
            } else {
              node = current.target;
              if (notFromInnerHTMLHelper &&
                  node.attributeChangedCallback &&
                  current.attributeName !== 'style') {
                node.attributeChangedCallback(
                  current.attributeName,
                  current.oldValue,
                  node.getAttribute(current.attributeName)
                );
              }
            }
          }
        });
      }(executeAction(ATTACHED), executeAction(DETACHED)));
      observer.observe(
        document,
        {
          childList: true,
          subtree: true
        }
      );
    } else {
      asapQueue = [];
      rAF(function ASAP() {
        while (asapQueue.length) {
          asapQueue.shift().call(
            null, asapQueue.shift()
          );
        }
        rAF(ASAP);
      });
      document.addEventListener('DOMNodeInserted', onDOMNode(ATTACHED));
      document.addEventListener('DOMNodeRemoved', onDOMNode(DETACHED));
    }

    document.addEventListener(DOM_CONTENT_LOADED, onReadyStateChange);
    document.addEventListener('readystatechange', onReadyStateChange);

    document.createElement = function (localName, typeExtension) {
      var
        node = createElement.apply(document, arguments),
        name = '' + localName,
        i = indexOf.call(
          types,
          (typeExtension ? PREFIX_IS : PREFIX_TAG) +
          (typeExtension || name).toUpperCase()
        ),
        setup = -1 < i
      ;
      if (typeExtension) {
        node.setAttribute('is', typeExtension = typeExtension.toLowerCase());
        if (setup) {
          setup = isInQSA(name.toUpperCase(), typeExtension);
        }
      }
      notFromInnerHTMLHelper = !document.createElement.innerHTMLHelper;
      if (setup) patch(node, protos[i]);
      return node;
    };

    HTMLElementPrototype.cloneNode = function (deep) {
      var
        node = cloneNode.call(this, !!deep),
        i = getTypeIndex(node)
      ;
      if (-1 < i) patch(node, protos[i]);
      if (deep) loopAndSetup(node.querySelectorAll(query));
      return node;
    };
  }

  if (-2 < (
    indexOf.call(types, PREFIX_IS + upperType) +
    indexOf.call(types, PREFIX_TAG + upperType)
  )) {
    throw new Error('A ' + type + ' type is already registered');
  }

  if (!validName.test(upperType) || -1 < indexOf.call(invalidNames, upperType)) {
    throw new Error('The type ' + type + ' is invalid');
  }

  var
    constructor = function () {
      return extending ?
        document.createElement(nodeName, upperType) :
        document.createElement(nodeName);
    },
    opt = options || OP,
    extending = hOP.call(opt, EXTENDS),
    nodeName = extending ? options[EXTENDS].toUpperCase() : upperType,
    i = types.push((extending ? PREFIX_IS : PREFIX_TAG) + upperType) - 1,
    upperType
  ;

  query = query.concat(
    query.length ? ',' : '',
    extending ? nodeName + '[is="' + type.toLowerCase() + '"]' : nodeName
  );

  constructor.prototype = (
    protos[i] = hOP.call(opt, 'prototype') ?
      opt.prototype :
      create(HTMLElementPrototype)
  );

  loopAndVerify(
    document.querySelectorAll(query),
    ATTACHED
  );

  return constructor;
};

}(window, document, Object, 'registerElement'));;
/**
 * 自定义组件基类
 * @exports modulename
 * @author shenzhou@baidu.com
 * @version 1.0
 * @copyright 2015 Baidu.com, Inc. All Rights Reserved
 */
define('customElement', ['require'], function(require){
   
    function customElement(){
        if(this.init){
        this.init();
        }    
    }
//    var customElement =  Object.create(HTMLElement.prototype); 
       
    customElement.prototype.mipCreatedCallback = function(){
         
    };
    
    customElement.prototype.mipAttachedCallback = function(){
    };
    
    customElement.prototype.mipDetachedCallback = function(){
    
    };

    customElement.prototype.mipAttributeChangedCallback = function(){
    };
    
    //自定义元素进入可视区域的默认处理函数，此处可以覆写，如果有特殊逻辑

    customElement.prototype.inviewCallback = function(){
        if(this.isInviewer()){
            this.build();
        }
    };
   //模板的元素build功能，即元素的默认初始化功能 
    customElement.prototype.build = function(){
    
    };
    
    return customElement;

});
;
/**
 * 自定义组件类注册组件
 * @exports registerMipElement
 * 说明：自定义组件生生命周期如下：
 *      创建节点：执行createCallback
 *      插入节点：执行attachedCallback
 *      渲染接口：build，用户在可视区域内，才会渲染，如果在build里面定义渲染，
 * @author shenzhou@baidu.com
 * @version 1.0
 * @copyright 2015 Baidu.com, Inc. All Rights Reserved
 */
define('registerMipElement', ['require', 'utils/cssLoader'], function(require){
    if(MIP['registerMipElement']){
        return MIP['registerMipElement'];
    }

    var cssLoader = require('utils/cssLoader');

    var mipTagList = {};


    function registerElement(name, elementClass, css){
       if(mipTagList[name]){
            return; 
        }
        if (css) {
            cssLoader.insertStyleElement(document, document.head, css, name, false);
        }
        mipTagList[name] = 1;
        var elemProto = Object.create(HTMLElement.prototype);

        if (typeof elementClass === 'string') {
            require([elementClass], function(ele){
                elementClass = ele;
                createMipElementProto(elemProto, elementClass, name);
            });
            return;
        }
        createMipElementProto(elemProto, elementClass, name);
        
    }

    function createMipElementProto(elemProto, elementClass, name) {
        //创建元素实例时候自动调用
        var implClass = new elementClass();
        //elemProto._implementation = new elementClass();
        $.extend(true,elemProto, implClass);
        elemProto.createdCallback = function(){
            this.classList.add('mip-element');
            this.mipCreatedCallback();
        };
        //向文档中插入实例时候调用
        elemProto.attachedCallback = function(){
            this.mipAttachedCallback();
        };
        //删除实例时候调用
        elemProto.detachedCallback = function(){
            this.mipDetachedCallback();
        };
       //属性变化时候调用
        elemProto.attributeChangedCallback = function(){
            this.mipAttributeChangedCallback();
        };
        elemProto.isInviewer = function(){
            var elmTop = $(this).offset().top;
            var pageHight  = $(window).height();
            var scrollTop = pageYOffset;

            if (window.parent !== window && platform.needSpecialScroll) {
                return elmTop <= pageHight;
            }
            if(elmTop - scrollTop>pageHight){
                return false;
            } else {
                return true;
            }
        }

        document.registerElement(name, {prototype:elemProto});
    }

    MIP['registerMipElement'] = registerElement;
    
    return registerElement;

});
;
define('utils/util', ['require'], function(require) {
    /**
     *  页面资源url转成可用的cache url
     *  @pageUrl 当前页面url地址
     *  @url 需要替换的url地址，默认全局路径
     *  @return url
     *  by lilangbo@baidu.com
     * */
    function urlToCacheUrl (pageUrl, url, type) { 
        // 不合法的url 或 pageUrl非mip cache域名 直接return 
        if (pageUrl.indexOf('mipcache.bdstatic.com') < 0 
            || (url && url.length < 8) 
            || !(url.indexOf('http') == 0 || url.indexOf('//') == 0)) {
            return url;
        }
        var prefix = (type === 'img') ? '/i/' : '/c/';
        if (url.indexOf('//') == 0 || url.indexOf('https') == 0) {
            prefix += 's/';
        }
        //去掉http头
        var urlParas = url.split('//');
        urlParas.shift();
        url = urlParas.join('//');
        return prefix + url;
    }
    return {
        urlToCacheUrl : urlToCacheUrl
    }
});
;
define('utils/cssLoader', ['require'], function(require) {
  /**
   * Creates the properly configured style element.
   * @param {!Document} doc
   * @param {!Element|!ShadowRoot} cssRoot
   * @param {string} cssText
   * @param {boolean} isRuntimeCss
   * @param {?string} name
   * @return {!Element}
   */
  function insertStyleElement(doc, cssRoot, cssText, name, isRuntimeCss) {
    var style = doc.createElement('style');
    style.textContent = cssText;
    var afterElement = null;
    // 先加载mip-main css
    if (isRuntimeCss) {
      style.setAttribute('mip-main', '');
    } else {
      style.setAttribute('mip-extension', name || '');
      afterElement = cssRoot.querySelector('style[mip-main]');
    }
    insertAfterOrAtStart(cssRoot, style, afterElement);
    return style;
  }

  /**
   * 将标签插入自定义的css标签的后面后者放到styleRoot的第一个标签之前
   * @param styleRoot style标签插入的根节点
   * @param styleElement 要插入的style标签
   * @param afterElement 自定义的css标签，可能为空
   */
  function insertAfterOrAtStart(styleRoot, styleElement, afterElement) {
    if (afterElement) {
      if (afterElement.nextSibling) {
        styleRoot.insertBefore(styleElement, afterElement.nextSibling);
      } else {
        styleRoot.appendChild(styleElement);
      }
    } else {
      // 加入到最开始
      styleRoot.insertBefore(styleElement, styleRoot.firstChild);
    }
  }
  return {
    insertStyleElement : insertStyleElement
  }
});
;


;/**
 * @file MIP: mobile instant baidu
 * @author shenzhou@baidu.com
 * @version 1.0
 * @copyright 2015 Baidu.com, Inc. All Rights Reserved
 */
define('builtins/mip-img', ['../utils/util', 'customElement'], function(util){
   var customElem = require('customElement');
   var build = function(){
        if(this.isRender){
            return; 
        }
        this.isRender = true;
        var _img = new Image();
        var src = util.urlToCacheUrl (document.location.href, this.getAttribute('src'), 'img');
        //var src = this.getAttribute('src');
        _img.src = src;

        if(this.getAttribute('alt')) {
            _img.setAttribute('alt', this.getAttribute('alt'));
        }

        this.insertBefore(_img, this.firstChild);
        if ($(this).attr('popup') === '' || $(this).attr('popup') === 'popup') {
            // 弹层dom
            var popUpDom = [
                '<div class="mip-img-popUp-wrapper">',
                    '<div class="mip-img-popUp-bg"></div>',
                    '<img src="' + src + '" />',
                '</div>'
            ].join('');

            var $img = $(_img);
            var $mipImg = $(this);

            var $popUp = $(popUpDom).insertAfter($img);
            var $popUpBg = $popUp.find('.mip-img-popUp-bg');
            var $popUpImg = $popUp.find('img');

            // 动画时长
            var DURATION = 400;

            // 点击弹层任何地方，关闭弹层
            $popUp.on('click', function () {
                // 黑色背景fadeout
                $popUpBg.fadeOut(DURATION);
                // 页面上原始图片当前所处的位置
                var currentLeft = $img.offset().left;
                var currentTop = $img.offset().top - $(window).scrollTop();
                // 弹层图片退回到原始图片的位置和大小
                $popUpImg.animate({
                    left: currentLeft,
                    top: currentTop,
                    width: $img.width(),
                    height: $img.height()
                }, DURATION, function () {
                    $popUp.hide();
                });
            });

            // 点击图片，弹出弹层
            $img.on('click', function () {
                // 图片原始宽高
                var oWid = _img.width;
                var oHei = _img.height;

                // 获取弹层中的图片最终需要的位置和大小
                var info = getPopUpImgInfo({
                    oWid: oWid,
                    oHei: oHei
                });

                // 页面原始图片当前的位置，弹层图片出现时需要与原始图片保持一致的大小和位置，营造一种原始图片弹出的效果
                var currentLeft = $img.offset().left;
                var currentTop = $img.offset().top - $(window).scrollTop();

                $popUpImg.css({
                    left: currentLeft,
                    top: currentTop,
                    width: $img.width(),
                    height: $img.height()
                });

                $popUpBg.show();
                $popUp.show();

                // 弹层图片由原始图片的位置和大小渐变到最终需要的位置和大小
                $popUpImg.animate({
                    left: info.left,
                    top: info.top,
                    width: info.wid,
                    height: info.hei
                }, DURATION);
            });
        }
    };

    /**
     * 获取图片最后展示的宽高和位置
     *
     * @param  {Object} opt [图片的原始信息]
     *                      opt.oWid(origin width): 图片原始宽度
     *                      opt.oHei(origin height): 图片原始高度
     *                      opt.uWid(user width): 用户设置的图片宽度
     *                      opt.uHei(user heigth): 用户设置的图片高度
     *                      opt.$wrapper: 最终的弹层dom
     *
     * @return {Object}     [图片在弹出层中的宽高和位置信息]
     *                      wid: 图片在弹层中的显示宽度
     *                      hei: 图片在弹层中的显示高度
     *                      left: 图片在弹层中的显示位置left
     *                      top: 图片在弹层中的显示位置top
     */
    function getPopUpImgInfo(opt) {
        // 计算前图片的宽高 before width && before height
        var bWid = +opt.oWid;
        var bHei = +opt.oHei;

        var $win = $(window);
        // 计算后图片的宽高 after width && after height
        var aWid = $win.width();
        var aHei = Math.round(aWid * bHei / bWid);

        var top = ($win.height() - aHei) / 2;

        return {
            wid: aWid,
            hei: aHei,
            left: 0,
            top: top
        };
    }


    customElem.prototype.init = function(){
        this.build = build; 
    };

    return customElem;

});
;
define('builtins/mip-gif', ['require', 'customElement'], function(require){
    var customGif = require('customElement');
   function build(){
        if(this.isRender){
            return; 
        }
        this.isRender = true;
        var _img = new Image();
        var src = this.getAttribute('src');
        _img.src = src;
        if(this.getAttribute('width')){
            _img.setAttribute('width',this.getAttribute('width'));
        }
        if(this.getAttribute('height')){
            _img.setAttribute('height',this.getAttribute('height'));
        }
        if(this.getAttribute('srcset')){
            _img.setAttribute('srcset',this.getAttribute('srcset'));
        }

        if(this.getAttribute('sizes')){
            _img.setAttribute('sizes',this.getAttribute('sizes'));
        }
        this.appendChild(_img);
        $(_img).on('click',function(){
           var mipGifNode = this.parentNode;
           var src = mipGifNode.getAttribute('src');
           var img  = new Image();
           _this = this;
           img.onload = function(){
                mipGifNode.removeChild(_this);
                mipGifNode.appendChild(this);
                _this = null;
           };
           img.src = src;
        });
    }
    customGif.prototype.init = function(){
        this.build = build; 
    };
    return customGif;

});
;
/**
* 统计标签
* @exports modulename
* @author shenzhou@baidu.com
* @version 1.0
* @copyright 2015 Baidu.com, Inc. All Rights Reserved
*/
define('builtins/mip-pix', ['require', 'customElement'], function(require){
    var customElem = require('customElement');

    function build(){
        if(this.isRender){
            return; 
        }
        this.isRender = true;
        var _img = new Image();
        var src = this.getAttribute('src');
        var proxy = this.getAttribute("proxy-title");
        var time = (new Date().getTime());
        var _src = "";
        if(proxy) { //如果是要开启代理
            src = _src+"?t="+time+"&"+"title="+proxy+"&host=mip.bdstatic.com&from=baidu";
        }else {
            src = _src+"?t="+time;
        }
        _img.src= src;
        _img.setAttribute('width',0);
        _img.setAttribute('height',0);
        this.setAttribute('width','');
        this.setAttribute('height','');
        this.appendChild(_img);
    }

    customElem.prototype.init = function(){
        this.build = build;
        /*
        *覆盖默认inviewCallBack
        * */
        this.inviewCallback = function(){

        }
        this.mipAttachedCallback = function(){
            this.build();
        }

    };
    return customElem;
});
;
define('extensions/mip-carousel', ['require', 'customElement', 'gesture'], function(require){
    var customElem = require('customElement');

    var build = function () {
        // 避免多次渲染
        if(this.isRender){
            return; 
        }
        this.isRender = true;

        var $this = $(this);

        var hei = $this.attr('height');
        var wid = $this.attr('width');

        if (!wid || !hei || typeof +hei !== 'number' || typeof +wid !== 'number') {
            return;
        }

        // padding-bottom
        var pdb = +hei / +wid * 100 + '%';
        $this.css('padding-bottom', pdb);

        // 如果子节点少于2个，则不需要轮播
        var $childs = $this.children();
        if ($childs.length < 2) {
            return;
        }

        // 当前展示的图片序号
        var currentIndex = 0;

        // 被隐藏的图片的left属性值
        var HIDE_LEFT = -9999;

        // 轮播动画时长
        var DURATION = 800;

        // 轮播思路：轮播只涉及2张图片，分别是当前图片和下一张要出现的图片，把下一张图片放到当前图片的前面或者后面，
        //         然后移动到当前图片的位置，其余不涉及的图片全部设置left:-9999px，具体可以看效果
        $childs.css({
            'position': 'absolute',
            'left': HIDE_LEFT,
            'top': 0,
        });
        $childs.eq(currentIndex).css('left', 0);

        // 如果mip-carousel里子节点是mip-img，并且mip-img弹出了浮层
        var isMipImgPop = false;

        // 当前是否处于轮播动画中
        var isAnimating = false;

        /**
         * 切换图片函数
         *
         * @param  {Boolean} forward 前进(true)或者后退(false)
         *
         * @return {Object}         Deferred/Promise对象
         */
        var switchItem = function (forward) {
            var index = forward ? (currentIndex + 1) : (currentIndex - 1);
            if (index < 0) {
                index = $childs.length - 1;
            }
            else if (index >= $childs.length) {
                index = 0;
            }
            // 图片占据的一屏宽度
            var perWid = $this.width();
            var left = (forward ? 1 : -1) * perWid;
            $childs.filter(function (i) {
                return (i !== currentIndex && i !== index);
            }).css('left', HIDE_LEFT);
            $childs.css({
                'display': 'block',
                'opacity': 1,
                'z-index': 1
            });
            $childs.eq(index).css({
                'left': left,
                'z-index': 2
            });
            var def = $.Deferred();
            isAnimating = true;
            $childs.eq(index).animate({
                left: 0
            }, DURATION, function () {
                currentIndex = index;
                isMipImgPop ? def.reject() : def.resolve();
                isAnimating = false;
            });
            $childs.eq(currentIndex).fadeOut(DURATION);
            return def.promise();
        };

        // 是否需要自动轮播
        var autoTimer;

        function autoPlay(time) {
            autoTimer = setTimeout(function () {
                switchItem(true).then(function () {
                    autoPlay(time);
                });
            }, time);
        }

        var defer;
        var isAutoPlay = false;
        if ($this.attr('autoplay') === 'autoplay' || $this.attr('autoplay') === '') {
            if (typeof +this.getAttribute('defer') === 'number') {
                defer = +this.getAttribute('defer');
            }
            else {
                defer = 2000;
            }
            isAutoPlay = true;
            autoPlay(defer);
        }

        var gesture = require('gesture');
        gesture.init();
        gesture.bind(function (evt, data) {
            // 用户手指滑动结束且手势为横向滑动且当前不处于动画播放状态
            if (data.event === 'touchend' && Math.abs(data.x) > Math.abs(data.y) && !isAnimating) {
                autoTimer && clearTimeout(autoTimer);
                // 向右滑（上一张）or 向左滑(下一张)
                var forward = !(data.x > 0);
                switchItem(forward).then(function () {
                    if (isAutoPlay) {
                        autoPlay(defer);
                    }
                });
            }
        });

        if (isAutoPlay) {
            $this.delegate('mip-img', 'click', function () {
                if ($(this).attr('popup') === 'popup' || $(this).attr('popup') === '') {
                    autoTimer && clearTimeout(autoTimer);
                    isMipImgPop = true;
                }
            });

            $this.delegate('.mip-img-popUp-wrapper', 'click', function () {
                autoPlay(defer);
                isMipImgPop = false;
                return false;
            });
        }

    };

    customElem.prototype.init = function () {
        this.build = build;
    };

    return customElem;
});
;
define('extensions/mip-iframe', ['require', 'customElement'], function (require) {
    var customElem = require('customElement');
    var build = function () {
        // 防止多次渲染
        if(this.isRender){
            return; 
        }
        this.isRender = true;
        var $this = $(this);
        // 获取src属性的值，如果用户传递了srcdoc，则将src内容转为base64编码用于iframe的src
        var src = $this.attr('src');
        if ($this.attr('srcdoc')) {
            src = 'data:text/html;charset=utf-8;base64,' + window.btoa($this.attr('srcdoc'));
        }
        var hei = $this.attr('height');
        var wid = $this.attr('width');

        if (!src || !wid || !hei) {
            return;
        }

        if (hei && wid && typeof +hei === 'number' && typeof +wid === 'number') {
            // padding-bottom
            var pdb = +hei / +wid * 100 + '%';
            $this.append('<div style="padding-bottom: ' + pdb + ';"></div>');
        }
        var $iframe = $('<iframe frameBorder="0" scrolling="no"></iframe>');
        $iframe.attr('src', src);
        if ($this.attr('allowfullscreen') === '') {
            $iframe.attr('allowfullscreen', '');
        }
        if ($this.attr('allowtransparency') === 'true') {
            $iframe.attr('allowtransparency', 'true');
        }
        var sandbox = $this.attr('sandbox');
        if (sandbox || sandbox === '') {
            $iframe.attr('sandbox', sandbox);
        }
        $this.append($iframe);
    };

    customElem.prototype.init = function(){
        this.build = build; 
    };

    return customElem;
});
;
;
define('builtins/img-viewer', ['deps/emit'], function (EventEmitter) {
    var $win = $(window);
    var winInfo = {
        width: $win.width(),
        height: $win.height()
    };

    function MipViewer(opt) {
        this.opt = $.extend({
            selector: '[data-carousel]',
            viewerClass: '.mip-viewer',
            // 影藏header的延迟
            timeoutHideHeader: 3000,
            // 竖屏滑动阈值
            verticalThreshold: .2,
            // 横屏滑动阈值
            horizontalThreshold: .2,
            // 页面中只会保留最多3张图片，供预览
            maxShowItem: 3
        }, opt);

        this.init();
        this.createDom();
        this.bindEv();
    }

    $.extend(MipViewer.prototype, {
        init: function () {
            this.imgs = $(this.opt.selector);
            this.urlList = [];

            this.wrapper = $(this.opt.viewerClass);

            if (!this.wrapper.length) {
                this.wrapper = $('<div class="mip-viewer"/>');
                $('body').append(this.wrapper);
            }

            this.updateDirection();
        },
        createDom: function () {
            var tplSidebar = '<div class="mip-viewer-header">' +
                                '<a href="javascript:;" class="mip-viewer-header-ret"><i class="c-icon">&#xe783</i></a>' +
                                '<div class="mip-viewer-header-inner">' +
                                    '<span class="mip-viewer-header-txt"></span>' +
                                '</div>' +
                             '</div>';
            var tplHeader = '<div class="mip-viewer-viewer">' +
                                '<div class="mip-viewer-list mip-viewer-normal">';
            var tplItem = '<div class="mip-viewer-item">' +
                            '<div class="mip-viewer-item-inner">' +
                                '<img src="" />' +
                            '</div>' +
                          '</div>';
            var tplFooter = '</div></div>';
            var html = '';

            this.updateList();

            html += tplSidebar;
            html += tplHeader;

            for (var i = 0, len = this.opt.maxShowItem; i < len; i++) {
                html += tplItem;
            }

            html += tplFooter;

            this.wrapper.html(html);
            this.viewer = this.wrapper.find('.mip-viewer-viewer');
            this.list = this.viewer.find('.mip-viewer-list');
            this.items = this.list.find('.mip-viewer-item');

            this.header = this.wrapper.find('.mip-viewer-header');
            this.pager = this.header.find('.mip-viewer-header-txt');
            // 关闭按钮
            this.ret = this.header.find('.mip-viewer-header-ret');
        },
        show: function () {
            var self = this;

            window.parent.postMessage({
                event: 'jqHandle',
                data: {
                    selector: '.sf-header',
                    handle: 'hide'
                }
            }, '*');
            // BUGFIX ios下iframe window高度获取bug
            $('.main').hide(0, function () {
                $win.trigger('resize');
                self.wrapper.height(winInfo.height).show();
                self.replaceDom(self.getShowList(self.carouselId));
            });

            this.updatePager();
            this.hideHeader();
        },
        hide: function () {
            this.wrapper.hide();
            $('.main').show();

            window.parent.postMessage({
                event: 'jqHandle',
                data: {
                    selector: '.sf-header',
                    handle: 'show'
                }
            }, '*');
        },
        updateDirection: function () {
            var horizonClassName = 'mip-viewer-horizon';
            if (winInfo.width > winInfo.height) {
                this.phoneDirection = 'horizontal';
                this.wrapper.addClass(horizonClassName);
            }
            else {
                this.phoneDirection = 'vertical';
                this.wrapper.removeClass(horizonClassName);
            }
        },
        getShowList: function (carouselId) {
            var list = [];
            // prev
            list.push({
                src: this.urlList[carouselId - 1] || ''
            })
            // active
            list.push({
                src: this.urlList[carouselId]
            });
            // next
            list.push({
                src: this.urlList[carouselId + 1] || ''
            });
            return list;
        },
        replaceDom: function (list) {
            this.items.each(function (index) {
                var $img = $(this).find('img');
                $img.removeAttr('style').attr('src', list[index].src);
                !list[index].src && $img.hide();
            });
        },
        showHeader: function () {
            this.headerTimer && window.clearTimeout(this.headerTimer);
            this.header.show();
            this.hideHeader();
        },
        hideHeader: function () {
            var self = this;
            this.headerTimer = setTimeout(function () {
                self.header.hide();
            }, this.opt.timeoutHideHeader);
        },
        updatePager: function() {
            this.pager.text((this.carouselId + 1) + '/' + this.urlList.length);
        },
        updateList: function ($container) {
            var $dom = $container || this.imgs;
            var self = this;
            self.urlList.length = 0;
            $dom.each(function (index) {
                var $this = $(this);
                self.urlList.push($this.attr('src'));
                $this.attr('carouselId', index);
            });
        },
        bindEv: function () {
            var self = this;
            var xPos;
            var initTransX;

            // TODO 事件代理
            // this.wrapper.on('click', this.opt.selector, function () {
            this.imgs.on('click', function () {
                var $this = $(this);
                var carouselId = $this.attr('carouselId');
                self.carouselId = +carouselId;
                self.show();
            });

            this.ret.on('click', function () {
                self.hide();
                return false;
            });

            // 点击显示header
            this.viewer.on('click', function () {
                self.showHeader();
            });
            this.viewer.on('touchstart', function (e) {
                // prevent(e);
                // 交互锁：可多状态组合，目前只有动画状态
                self.locked = !!self.animationStatus;

                if (self.locked) return;

                xPos = e.originalEvent.touches[0].pageX;
                initTransX = self.list.css('-webkit-transform').match(/(-?[0-9\.]+)/g);
                
                self.initTransX = initTransX && +initTransX[4] || 0;
            })
            .on('touchmove', function (e) {
                if (self.locked) return;

                var x = e.originalEvent.touches[0].pageX;
                var diff = x - xPos + self.initTransX;
                prevent(e);

                self.list.css({
                    '-webkit-transition-duration': '0s',
                    '-webkit-transform': 'translateX(' + diff + 'px)'
                });
            })
            .on('touchend', function (e) {
                if (self.locked) return;

                var x = e.originalEvent.changedTouches[0].pageX;
                var diff = x - xPos;
                // prevent(e);

                var needChange = (Math.abs(diff) > winInfo.width * self.opt[self.phoneDirection + 'Threshold']);

                if (needChange) {
                    (diff > 0) ? self._goPrev() : self._goNext();
                }
                else {
                    self._goNormal();
                }
            })
            .on('touchcancel', function (e) {
            });

            this.list.on('transitionend webkitTransitionEnd', function () {
                self.replaceDom(self.getShowList(self.carouselId));
                self._goCommon();

                self.animationStatus = '';
                self.updatePager();
            });

            $win.on('viewport_resize.img_viewer', function (e, info) {
                winInfo = info;
                self.updateDirection();
                self.wrapper.height(winInfo.height);
            });

            function prevent(e) {
                // e.stopPropagation();
                e.preventDefault();
            }
        },
        // TODO 可优化 -- 目前的策略：如果在动画中，则不处理后续请求
        // 停止动画，立即完成动画
        stop: function () {
        },
        _goNormal: function () {
            this.animationStatus = '_goNormal';
            this.list.css({
                '-webkit-transition-duration': '400ms',
                '-webkit-transform': 'translateX(-33.33%)'
            });
        },
        _goNext: function () {
            this.animationStatus = '_goNext';
            if (!this.urlList[this.carouselId + 1]) {
                this._goNormal();
                return;
            }
            this.list.removeAttr('style').addClass('mip-viewer-toright');
            this.carouselId++;
        },
        _goPrev: function () {
            this.animationStatus = '_goPrev';
            if (!this.urlList[this.carouselId - 1]) {
                this._goNormal();
                return;
            }
            this.list.removeAttr('style').addClass('mip-viewer-toleft');
            this.carouselId--;
        },
        _goCommon: function () {
            this.list.removeAttr('style').removeClass('mip-viewer-toright mip-viewer-toleft');
        },
        destroy: function () {
        }
    }, EventEmitter.prototype);

    return MipViewer;
});
;
define('builtins/mip-video', ['utils/util', 'customElement', 'builtins/video/player'], function(util){
    var customElem = require('customElement');
    var player = require('builtins/video/player');

    var bdPlayer;
    var build = function () {
        if (this.isRender) {
            return; 
        }
        this.isRender = true;

        var me = this;
        var $me = $(this);

        $(this).on('click', function (event) {
            // 如果有视屏正在播放，则移除视屏
            bdPlayer && bdPlayer.remove();
            // if(bdPlayers.length) {
            //     for(var index = 0; index < bdPlayers.length; index ++) {
            //         bdPlayers[index].pause();
            //     }
            // }
            bdPlayer = new player({});

            // video容器  如果未设置的话  则传入me
            var container = $me.attr('container');
            if (container && $(container) && $(container).length) {
                container = $(container);
            } else {
                container = me;
            }

            var mip_video = $(container).parent().find('mip-video');
            
            // 广告数据信息
            var adInfo = [];
            var adInfoString = $me.attr('adInfo');
            if (adInfoString) {
                try {
                    adInfo = new Function('return ' + adInfoString)()
                } catch (e) {}
            }

            // 正片播放时 设置多type时 数据处理
            var sources = $me.find('source');
            var playInfo = [];
            sources.each(function () {
                var src = $(this).attr('src');
                var type = $(this).attr('type');
                if (!src) {
                    return;
                }
                playInfo.push({
                    type: type,
                    src: src
                });
            });

            // 加载视频、并播放

            bdPlayer.render({
                // 播放器容器，必选
                container: container,

                height: $me.attr('height'),
                width: $me.attr('width'),
                src: $me.attr('src'),
                type: $me.attr('type'),
                poster: $me.attr('poster'),
                autoplay: $me.attr('autoplay'),
                controls: $me.attr('controls'),
                loop: $me.attr('loop'),
                muted: $me.attr('muted'),

                android: {
                    playMode: $me.attr('android-mode') || ''
                },
                ios: {
                    playMode: $me.attr('ios-mode') || ''
                },

                // 广告数据信息
                adInfo: adInfo,

                // 正片视频数据信息
                playInfo: playInfo
                // src: 'http://v1.bdstatic.com/8aa369effe2cc6280c1bd413723ce0ac/mp4/8aa369effe2cc6280c1bd413723ce0ac.mp4'
            });
            // bdPlayers.push(bdPlayer);
        });

        // 防止点击video区域时 造成重播
        $(this).on('click', 'video', function (event) {
            event.stopPropagation();
            event.preventDefault();
        });

    };

    customElem.prototype.init = function(){
        this.build = build; 
    };

    return customElem;

});



;
/**
 * h5 video播放器
 *
 * @file player.js
 * @author songgenlei@baidu.com
 */
define('builtins/video/player', ['require'], function(require) {

    /**
     * 构造函数
     *
     * @param {Object}              opt 配置对象
     * @param {Object}              opt.ios   可选 单独配置ios下某个表现形式
     * @param {boolean}             opt.ios.playMode  可选 播放模式
     *** 播放模式字段值说明：
     *** hide 容器中对video的显示进行隐藏 （ios默认为全屏播放，针对ui设定 当前播放区域不显示video）
     *** false || undefined 不使用插件带有的播放容器样式
     * @param {Object}              opt.android   可选  单独配置android下某个表现形式
     * @param {boolean}             opt.android.playMode  可选 播放模式
     *** 播放模式字段值说明：
     *** fullsreen 全屏 (android模拟全屏播放)
     *** false || undefined 不使用插件带有的播放容器样式
     */
    function VideoPlayer(opt) {
        this.params = $.extend(true, {
            // 视频容器   必填
            container: null,

            height: null,
            width: null,
            src: null,
            type: null,
            poster: null,
            autoplay: null,
            controls: null,
            loop: null,
            muted: null,

            ios: {
                playMode: false
            },

            android: {
                playMode: false
            },

            // 广告数据信息
            adInfo: [],

            // 正片视频数据信息
            playInfo: []

        }, opt);

        // 控制视频位置 和 样式 容器
        this.box = {
            normal: $('<div class="mip-video-box"></div>'),
            // ios playmode 设置为hide时使用  视频缩小为1*1px 当前不显示出来
            hide: $('<div class="mip-video-box-ios"></div>')
        }

        // 当前广告播放到第几个  （广告可设置多个）
        this.adIdx = 0;

        // 视频播放到的位置
        this.lastTime = 0;

        // 事件命名空间
        this.eventNS = '.mipvideo';

        // 初始化video
        this.init();

        // 绑定事件
        this.bindEvents();
    }

    VideoPlayer.prototype = {
        constructor: VideoPlayer,

        // 容器代码
        // tplWrap: '<video class="mip-video-player" <%=(poster ? "poster=" + poster : "")%>"></video>',

        // source代码
        tplSource: ['<% for (var i = 0, len = data.length; i < len; i++) { var item = data[i]; %>',
            '<source <%=(item.type ? "type=" + item.type : "")%> src="<%=item.src%>"></source>',
        '<% } %>'].join(''),

        // 模板引擎
        tmpl: (function(){
            var cache = {};

            var tmpl = function tmpl(str, data){
                // Figure out if we’re getting a template, or if we need to
                // load the template – and be sure to cache the result.
                var fn = !/\W/.test(str) ?
                cache[str] = cache[str] ||
                tmpl(document.getElementById(str).innerHTML) :

                // Generate a reusable function that will serve as a template
                // generator (and which will be cached).
                new Function("obj",
                    "var p=[],print=function(){p.push.apply(p,arguments);};" +

                    // Introduce the data as local variables using with(){}
                    "with(obj){p.push('" +

                    // Convert the template into pure JavaScript
                    str
                        .replace(/[\r\t\n]/g, " ")
                        .split("<%").join("\t") .replace(/((^|%>)[^\t]*)’/g, "$1\r")
                        .replace(/\t=(.*?)%>/g, "',$1,'")
                        .split("\t").join("');")
                        .split("%>").join("p.push('")
                        .split("\r").join("\\'")
                    + "');}return p.join('');");

                // Provide some basic currying to the user
                return data ? fn( data ) : fn;
            };

            return tmpl;
        })(),
        
        // 初始化video标签
        init: function () {
            var me = this;
            me.$video = $('<video></video>');
            me.video = me.$video[0];

            // 设置video标签默认样式
            me.video.className = 'mip-video-player';

            me.isWorking = false;
        },

        // 初始化各参数
        initParams: function () {
            var me = this;
            me.lastTime = 0;
        },

        // params 同上方 创建时参数
        render: function (options) {
            var me = this;

            // render时 可设置参数 覆盖实例化时设置的信息
            this.options = $.extend({}, me.params, options);

            me.setAttrs();

            me.loadSource();

            me.appendVideo();

            me.play();

            me.isWorking = true;
        },

        // 设置video的各项参数
        setAttrs: function () {
            var me = this;
            var options = me.options;

            // 设置视频宽度 需要考虑height 为0 的时候的处理
            me.setAttr('width', options.width);

            // 需要考虑height 为0 的时候的处理
            me.setAttr('height', options.height);

            // 设置视频资源地址   单一视频资源时使用 ------ 使用source标签实现
            // me.setAttr('src', options.src);

            // 设置视频资源地址   单一视频资源时使用 ------ 使用source标签实现
            // me.setAttr('type', options.type);

            // 设置视频封面
            me.setAttr('poster', options.poster);

            // 设置视频是否自动播放
            me.setAttr('autoplay', options.autoplay);

            // 设置视频是否使用控制条
            me.setAttr('controls', options.controls);

            // 设置视频是否循环播放
            me.setAttr('loop', options.loop);

            // 设置视频是否静音
            me.setAttr('muted', options.muted);
        },

        // 设置video属性     字段是否为0, 是否为原始字段名
        setAttr: function (attr, value) {
            var me = this;
            var $video = me.$video;

            if (value || value === 0 || value === '') {
                $video.attr(attr, value);
            } else {
                $video.removeAttr(attr);
            }
        },

        // 插入视频元素   需要区分ios  android是否全屏播放等  TODO
        appendVideo: function () {
            var me = this;
            var video = me.$video;
            var options = me.options;

            var container = $(options.container);
            if (!container.length) {
                return;
            }

            // 如果设置了playMode 且 ios 进行如下操作
            // ios不区分fullscreen || inline, 均为为默认系统全屏播放
            if (me.isIos() && options.ios && options.ios.playMode === 'hide') {
                var html = me.box.hide.html(video);
                container.append(html);
                return;
            }

            // 非ios下 全屏播放
            if (!me.isIos() && options.android && options.android.playMode === 'fullscreen') {
                me.fullscreenForAndriod();
                return;
            }

            // 非ios下 当前区域播放  --- 暂无当前播放规范 尚未开发
            // if (options.playMode === 'inline') { }

            // 如果未设置playMode 则只会简单的插入video节点
            container.append(this.box.normal.html(video));
        },

        // 移除视频 及 其父元素
        // removeVideo: function () {
            // this.box
        // },

        // 播放视频，  兼容手百等无法播放的问题
        play: function () {
            var me = this;
            var uaReg = /(iphone.+mqqbrowser)|(android.*(baidubrowser)|(baiduboxapp))/i;

            if (navigator.userAgent.match(uaReg)) {
                setTimeout(function() {
                    me.video.play();
                }, 30);
            } else {
                me.video.play();
            }
        },

        // 加载视频资源
        load: function () {
            // 加载资源  必需  否则切换资源播放时 仍然会播放上次视频
            this.video.load();
        },

        // 加载视频资源  判断要播放的资源是否为广告
        loadSource: function () {
            var me = this;
            var options = me.options;
            var video = me.video;

            // 初始化时间等参数
            me.initParams();

            // 移除广告事件
            me.removeEventsForAD();

            if (me.hasAd(options)) {
                me.playForAD(options);
            } else {
                me.playForNormal(options);
            }

            // 加载资源  必需  否则切换资源播放时 仍然会播放上次视频
            me.load();

        },

        // 正常 - 视频资源
        playForNormal: function () {
            var me = this;
            var options = me.options;
            var playInfo = options.playInfo;
            var video = me.video;
            // 如果没有playInfo时 使用src和type参数 
            if (!playInfo || !playInfo.length) {
                playInfo = [];
                playInfo[0] = {
                    type: options.type,
                    src: options.src
                };
            }

            // 插入视频 开始播放
            me.appendSource(playInfo);
        },

        // 广告 - 资源
        playForAD: function () {
            var me = this;
            var options = me.options;
            var ads = options.adInfo;
            var video = me.video;
            if (!me.hasAd(options)) {
                return;
            }

            // 插入第几组广告 开始播放
            me.appendSource(ads[me.adIdx]);

            me.adIdx++;
            
            // 广告播放事件绑定
            me.eventsForAD();
        },

        // 添加广告事件
        eventsForAD: function () {
            var me = this;
            var adEventNS = me.eventNS + 'forad';
            var video = me.video;

            // 移除事件 防止多次绑定
            me.removeEventsForAD();

            // 广告播放时 不可以拖动快进
            me.$video.on('timeupdate' + adEventNS, function() {
                var currentTime = Math.ceil(video.currentTime);
                var duration = me.getVideoTime();
                    // alert('duration');

                // for ad  can not drag to play
                if (currentTime - me.lastTime > 2) {
                    video.currentTime = me.lastTime;
                    me.lastTime = me.lastTime;

                    // 解决快进拖动到视频结束时触发pause事件 视频暂停播放现象
                    me.play();
                    return;
                }

                me.lastTime = currentTime;
                    // alert(duration);

                // 广告播放结束后 继续播放
                if (duration && currentTime >= duration) {
                    // alert(duration);
                    me.loadSource();
                    me.play();
                }
            });
        },

        // 移除广告事件
        removeEventsForAD: function () {
            var me = this;
            var adEventNS = me.eventNS + 'forad';
            me.$video.off('timeupdate' + adEventNS);
        },

        // 是否有广告
        hasAd: function () {
            var me = this;
            var options = me.options;
            var ads = options.adInfo;
            if (!ads || !ads.length || me.adIdx >= ads.length) {
                return false;
            }

            return true;
        },

        // 插入一组source数据 进行播放使用
        // data array() 为当前一组视频的数据信息
        // data.type  视频资源类型
        // data.src  视频资源地址
        appendSource: function (data) {
            var me = this;
            var $video = me.$video;
            var sources = this.tmpl(this.tplSource, { data: data });
            if (sources) {
                $video.html(sources);
            }
        },

        // 是否ios
        isIos: function () {
            return /iPhone|iPad|iPod/i.test(window.navigator.userAgent); 
        },

        // 未重构部分----------------------------------------------------------------------

        // 绑定事件
        bindEvents: function() {
            var me = this;
            me.$video.on('loadeddata', function() {
                me.video.play();
            });
        },

        fullscreenForAndriod: function () {
            var self = this;
            var video = self.$video;
            var options = self.options;
            var eventNS = self.eventNS + 'fullscreen';

            //注释原有功能
            // QQ browser由于自有实现的播放器问题 特殊处理
            // 避免2次点击关闭按钮
            // if (navigator.userAgent.match(/(android.+mqqbrowser)/i)) {
            //     return;
            // }

            // 引用通用弹窗组件
            require(['builtins/video/popup'], function (Popup) {
                var popup = new Popup({
                    title: options.title || '',
                    content: '',
                    fullView: true,
                    customClassName: 'mip-video-player-popup',
                    onOpen: function () {
                        popup.$popupContent.html(video);

                        // 设置视频居中显示
                        self.setVideoCenterForFullscreen();
                    },
                    onClose: function () {
                        // 初始化
                        $(window).off('orientationchange' + eventNS);
                        self.initStyle();
                    }
                });

                // 解决android手百关闭时页面抖动问题  待popup组件升级后更改 @士浩
                var remove = $('.mip-video-player-popup .mip-video-popup-remove');
                remove.length && remove.off('click' + eventNS)
                    .on('click' + eventNS, function () {
                        popup.$popupContent.length && popup.$popupContent.html('');
                    });
            });
        },

        initStyle: function () {
            var self = this;
            var video = self.$video;
            video.removeAttr('style');
        },

        // 设置视频居中显示  and  屏幕旋转时大小控制 - android模拟全屏
        setVideoCenterForFullscreen: function () {
            var self = this;
            var eventNS = self.eventNS + 'fullscreen';

            // 关闭按钮距离上方的距离
            var freesize = 0;
            var remove = $('.mip-video-player-popup .mip-video-popup-remove');
            if (remove.length) {
                freesize = remove.height() + remove.offset().top;
            }

            // 屏幕旋转后，设置video的位置和尺寸
            $(window).off('orientationchange' + eventNS + ' resize' + eventNS)
                .on('orientationchange' + eventNS + ' resize' + eventNS, function () {
                    self.calculateVideo({
                        freesize: freesize
                    });
                });

            // 设置video的位置和尺寸
            self.calculateVideo({
                freesize: freesize
            });
        },

        // android全屏时计算video的高度和位置
        // @param {boolean}    params.freesize  可选 上下需要空闲出来的尺寸
        calculateVideo: function (params) {
            var self = this;
            var video = self.$video;
            var params = params || {};

            // 初始化样式避免被设定影响
            self.initStyle();

            setTimeout(function () {
                var winHeight = $(window).height();
                var winWidth = $(window).width();
                var freesize = params.freesize || 0;
                var h = video.height();

                if (winHeight <= winWidth) {
                    h = winHeight - freesize * 2;
                }
                video.css({
                    'height': h + 'px',
                    'margin-top': - h / 2 + 'px',
                    'visibility': 'visible'
                });

            }, 10);
        },

        pause: function() {
            this.video.pause();
        },

        remove: function() {
            this.$video.parent().remove();
            this.isWorking = false;
        },

        // 获取视频时长
        getVideoTime: function() {
            return Math.ceil(this.video.duration);
        },

        on: function(name, fn) {
            this.$video.on(name, fn);
        },

        off: function(name, fn) {
            this.$video.off(name, fn);
        },

        trigger: function(name) {
            this.$video.trigger(name);
        }
        
    }

    return VideoPlayer;
});;
/**
 * @file popup上滑弹窗
 * @author dongshihao
 */
define('builtins/video/popup', ['require'], function (require) {

    var PopupFrame = function (opt) {
        var me = this;
        // 设置默认值
        me.options = $.extend({
            title: '',              // 标题，支持html和Zepto对象
            content: '',            // 内容，支持html和Zepto对象
            fullView: false,        // 是否全屏
            duration: 400,          // 动画执行时间
            customClassName: '',    // 自定义样式名
            onOpen: function () {},
            onClose: function () {}
        }, opt);
        // 初始化
        me._init();
    };

    PopupFrame.prototype = {

        constructor: PopupFrame,

        version: '0.0.1',

        /*
        *  初始化：渲染父层dom，阻止遮罩的滚动，弹出popup
        */
        _init: function () {
            var me = this;
            // 渲染父层dom单例
            me._preparePopupWrapper();
            // 阻止遮罩滚动
            me._stopScroll();
            me.popup();
        },
        /*
         * 创建.mip-video-popup-wrapper父容器单例,所有pop内容都append到这个dom中
         */
        _preparePopupWrapper: function () {
            var me = this;
            var popWrapperDom = $('.mip-video-popup-wrapper');
            if (popWrapperDom.length) {
                me.$popupFrame = popWrapperDom;
                me.$popupFrame.empty();
            } else {
                me.$popupFrame = $('<div class="mip-video-popup-wrapper"></div>');
                $(document.body).append(me.$popupFrame);
            }
        },
        /*
        *  阻止mask以及结果层的滚动
        */
        _stopScroll: function () {
            var me = this;
            // 阻止遮罩层滚动,不会影响内部touchmove事件
            me.$popupFrame.on('touchmove', function (e) {
                e.preventDefault();
            });
        },
        /*
        * 父层事件绑定
        */
        _bindEvent: function () {
            var me = this;
            // mask遮罩和绑定退场事件
            me.$popupFrame.on('click', '.mip-video-popup-mask,.mip-video-popup-remove', function () {
                me.closePopup();
            });
        },
        /*
        * 装填&&渲染
        */
        _randerContent: function () {
            var me = this;
            // 遮罩层
            me.$popupMask = $('<div class="mip-video-popup-mask"></div>');
            // modal层
            me.$popupModal = $('<div class="mip-video-popup-modal"></div>');
            // modal内content
            me.$popupContent = $('<div class="mip-video-popup-content"></div>');
            // modal内head
            me.$popupHead = $('<div class="mip-video-popup-head"></div>');
            // 装填head内容
            if (me.options.title) {
                var titleWrapper = $('<div class="mip-video-popup-title"></div>');
                titleWrapper.append(me.options.title);
                me.$popupHead.append(titleWrapper);
            }
            var remove = $('<div class="mip-video-popup-remove">X</div>');
            me.$popupHead.append(remove);
            // 装填content
            me.$popupContent.append(me.options.content);
            // 装填modal
            me.$popupModal.append(me.$popupHead).append(me.$popupContent).addClass(me.options.customClassName);
            // 最后装填外层wrapper
            me.$popupFrame.append(me.$popupModal).append(me.$popupMask);
        },
        /*
        * 弹出层
        */
        popup: function () {
            var me = this;
            var wHeight = $(window).height();
            me._randerContent();
            me._bindEvent();
            // mask淡入
            me.$popupMask.show().animate({
                opacity: 1
            }, 'fast', 'linear');
            // 展现modal
            me.$popupModal.show();
            // 计算modal实际高度
            var mHeight = me.$popupModal.height();
            if (me.options.fullView || mHeight > wHeight) {
                me.$popupModal.height('100%');
            }
            // 入场动画
            me.$popupModal.animate({
                '-webkit-transform': 'translate3d(0, 0, 0)',
                'transform': 'translate3d(0, 0, 0)'
            }, me.options.duration, 'linear', function () {
                $(this).css({
                    '-webkit-transform': 'none',
                    'transform': 'none'
                });
                me.options.onOpen();
            });
        },
        /*
        * 关闭弹层
        */
        closePopup: function () {
            var me = this;
            // 退场动画
            me.$popupModal.animate({
                '-webkit-transform': 'translate3d(0, 100%, 0)',
                'transform': 'translate3d(0, 100%, 0)'
            }, me.options.duration, 'linear', function () {
                $(this).css({
                    '-webkit-transform': 'none',
                    'transform': 'none'
                }).hide();
                me.options.onClose();
                me._destroy();
            });
            // mask淡出
            me.$popupMask.animate({
                opacity: 0
            }, 'fast', 'linear', function () {
                $(this).hide();
            });
        },
        /*
        * 解绑事件&清除dom
        */
        _destroy: function () {
            var me = this;
            // 解绑事件
            me.$popupFrame.off('click', '.mip-video-popup-mask,.mip-video-popup-remove');
            // 清除dom
            me.$popupFrame.empty();
        }
    };
    return PopupFrame;
});
;

define('builtins/mip_builtins', ['require', 'gesture', 'viewport', 'registerMipElement', 'builtins/mip-pix', 'builtins/mip-gif', 'builtins/mip-img', 'extensions/mip-carousel', 'extensions/mip-iframe', 'builtins/mip-video'], function(require){
    /**
    * 初始化相关JS
    */
    window.MIP = {};

    MIP.css = {};

    /**
     *  初始化touch手势
     * */
    var gesture = require('gesture');
    gesture.init();

    /**
     *  初始化视图
     * */
    var viewport = require('viewport');

    /*
    if (window.parent && window.parent != window){
        var target = window.parent;
        var pageMessageCenter = require('message_center');
        gesture.onChange(function(event){
            //console.log("in iframe: start postMessage");
            //console.log(event);
            pageMessageCenter.sendRequest(target,event);
        });
    }
    */

    /**
     *  订阅相关逻辑
     *  TODO:封装成模块
     * */
    /*
    function subscribe(){
        var isSub = false;
        $('.subscrib-action').on("click",function(ev){
            var clickEv = ev;
            $this = $(this);
            $this.children("div").fadeOut(400,"linear",function(){
                $this.children(".subscrib-ok").fadeIn(200);
                clickEv.stopPropagation();
            });
        });
    }
    $(subscribe);
    */

    /**
     *  web compenent组件初始化
     * */
    require('registerMipElement');

    /***
     *  注册统计组件
     */

    MIP.registerMipElement('mip-pix', require('builtins/mip-pix'));

    /*
     *注册mip-gif组件
     */
    MIP.registerMipElement('mip-gif', require('builtins/mip-gif'));

    /*
     * 注册mip-img组件
     */
    MIP.registerMipElement('mip-img',require('builtins/mip-img'));

    /*
     * 注册mip-carousel组件
     */
    MIP.registerMipElement('mip-carousel',require('extensions/mip-carousel'));

    /*
     * 注册mip-iframe组件
     */
    MIP.registerMipElement('mip-iframe',require('extensions/mip-iframe'));

    /*
     * 注册mip-video组件
     */
    MIP.registerMipElement('mip-video',require('builtins/mip-video'));

    //页面初始化后，处理可视区域内元素
    $(function(){
        window.setTimeout(function(){
            $('.mip-element').each(function(){
                this.inviewCallback();
            });
        },100);
    });

    //元素绑定scroll，用于lazy load等场景
    viewport.onScroll(function(){
        $('.mip-element').each(function(){
            this.inviewCallback();
        });
    });

    if (window.parent !== window) {
        // IOS非UC解决方案
        if (platform.needSpecialScroll) {
            $('body,html').css({
                height: '100%',
                overflow: 'auto',
                '-webkit-overflow-scrolling': 'touch'
            });
        }
        //页面传递消息给父页面
        window.parent.postMessage({
            event: 'mippageload',
            data: {
                time: new Date().getTime()
            }
        }, '*');
    }

    /**
     *  初始化图片浏览组件，并处理viewport中的事件冲突
     * */
    /*
    require(['dom/mip-carousel'],function(mipCarousel){
        mipCarousel.initData();
        $(window).bind("mip.carousel.open", function() {
            viewport.setViewportNormal(false);
        });
        $(window).bind("mip.carousel.close", function() {
            viewport.setViewportNormal(true);
        });
    });
    */

   /*
    require(['dom/img-viewer'], function (mipViewer) {
        new mipViewer();
    });
    */

});
require(['builtins/mip_builtins']);
