(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Politics"],{"1b51":function(t,e,n){"use strict";n("4ccd")},"1dde":function(t,e,n){var r=n("d039"),c=n("b622"),i=n("2d00"),l=c("species");t.exports=function(t){return i>=51||!r((function(){var e=[],n=e.constructor={};return n[l]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"4ccd":function(t,e,n){},8418:function(t,e,n){"use strict";var r=n("c04e"),c=n("9bf2"),i=n("5c6c");t.exports=function(t,e,n){var l=r(e);l in t?c.f(t,l,i(0,n)):t[l]=n}},"857a":function(t,e,n){var r=n("1d80"),c=/"/g;t.exports=function(t,e,n,i){var l=String(r(t)),o="<"+e;return""!==n&&(o+=" "+n+'="'+String(i).replace(c,"&quot;")+'"'),o+">"+l+"</"+e+">"}},9911:function(t,e,n){"use strict";var r=n("23e7"),c=n("857a"),i=n("af03");r({target:"String",proto:!0,forced:i("link")},{link:function(t){return c(this,"a","href",t)}})},"9fc8":function(t,e,n){"use strict";n.r(e);n("9911");var r=n("7a23"),c=Object(r["I"])("data-v-6cd2d2e5");Object(r["t"])("data-v-6cd2d2e5");var i={class:"Politics"},l=Object(r["h"])("h1",null,"Political News",-1),o=Object(r["h"])("br",null,null,-1),u=Object(r["h"])("br",null,null,-1),a=Object(r["g"])(),b=Object(r["h"])("br",null,null,-1),f=Object(r["h"])("br",null,null,-1),s={key:0},d=Object(r["h"])("br",null,null,-1),h=Object(r["g"])(),O=Object(r["h"])("br",null,null,-1),j=Object(r["g"])(),v=Object(r["h"])("br",null,null,-1),p=Object(r["h"])("p",null," You have reached the end of the news buffer, please check back another time to see more.",-1);Object(r["r"])();var g=c((function(t,e,n,c,g,w){return Object(r["q"])(),Object(r["d"])("div",i,[l,(Object(r["q"])(!0),Object(r["d"])(r["a"],null,Object(r["w"])(g.articles,(function(t){return Object(r["q"])(),Object(r["d"])("ol",{key:t.link},[Object(r["h"])("h2",null,[Object(r["h"])("img",{src:t.image,width:"800",height:"500"},null,8,["src"])]),o,Object(r["h"])("h2",null,[Object(r["h"])("a",{href:t.link},"Link",8,["href"])]),u,a,b,Object(r["h"])("h2",null,Object(r["A"])(t.title),1),f,t.text?(Object(r["q"])(),Object(r["d"])("div",s,[Object(r["h"])("h2",null,[Object(r["G"])(Object(r["h"])("textarea",{rows:"10",cols:"200","onUpdate:modelValue":function(e){return t.text=e},disabled:"true",dark:"true"},null,8,["onUpdate:modelValue"]),[[r["C"],t.text]])])])):Object(r["e"])("",!0),d,h,O,j,v])})),128)),p])})),w=(n("fb6a"),n("46fe")),k={name:"Politics",data:function(){return{articles:null}},mounted:function(){var t=this;w["a"].get_articles("political").then((function(e){t.articles=e.data.slice(0,100)}))}};n("1b51");k.render=g,k.__scopeId="data-v-6cd2d2e5";e["default"]=k},ae40:function(t,e,n){var r=n("83ab"),c=n("d039"),i=n("5135"),l=Object.defineProperty,o={},u=function(t){throw t};t.exports=function(t,e){if(i(o,t))return o[t];e||(e={});var n=[][t],a=!!i(e,"ACCESSORS")&&e.ACCESSORS,b=i(e,0)?e[0]:u,f=i(e,1)?e[1]:void 0;return o[t]=!!n&&!c((function(){if(a&&!r)return!0;var t={length:-1};a?l(t,1,{enumerable:!0,get:u}):t[1]=1,n.call(t,b,f)}))}},af03:function(t,e,n){var r=n("d039");t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},fb6a:function(t,e,n){"use strict";var r=n("23e7"),c=n("861d"),i=n("e8b5"),l=n("23cb"),o=n("50c4"),u=n("fc6a"),a=n("8418"),b=n("b622"),f=n("1dde"),s=n("ae40"),d=f("slice"),h=s("slice",{ACCESSORS:!0,0:0,1:2}),O=b("species"),j=[].slice,v=Math.max;r({target:"Array",proto:!0,forced:!d||!h},{slice:function(t,e){var n,r,b,f=u(this),s=o(f.length),d=l(t,s),h=l(void 0===e?s:e,s);if(i(f)&&(n=f.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?c(n)&&(n=n[O],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return j.call(f,d,h);for(r=new(void 0===n?Array:n)(v(h-d,0)),b=0;d<h;d++,b++)d in f&&a(r,b,f[d]);return r.length=b,r}})}}]);
//# sourceMappingURL=Politics.ed17f46c.js.map