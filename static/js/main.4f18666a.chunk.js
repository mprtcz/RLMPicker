(this["webpackJsonprlm-picker"]=this["webpackJsonprlm-picker"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t),n.d(t,"EpisodeSeries",(function(){return s})),n.d(t,"Members",(function(){return r})),n.d(t,"SubSeries",(function(){return i})),n.d(t,"Titles",(function(){return o}));var s={BestOfTheWorst:"BestOfTheWorst"},r={JAY:"Jay",MIKE:"Mike",RICH:"Rich Evans",JESS:"Jess",JOSH:"Josh",Jack:"Jack"},i={DEFAULT:"",WHEEL_OF_THE_WORST:"Wheel of the worst",WHEEL_OF_MISFORTUNE:"Wheel of misfortune"},o={RUSSIAN_TERMINATOR:"Russian terminator",NINJA_VENGENCE:"Ninja Vengence",NEVER_TOO_YOUNG_TO_DIE:"Never too young to die",THE_NEW_GLADIATORS:"The New Gladiators",EXTERMINATOR_2:"Exterminator 2",THE_AFTERMATH:"The Aftermath"}},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var s=n(1),r=n.n(s),i=n(3),o=n.n(i),c=(n(10),n(11)),a=c.Titles,l=c.Members,u=[{episodeName:"Best of the Worst Episode 1",url:"https://www.youtube.com/watch?v=q6TY-nBkxqY",members:[l.JAY,l.JESS,l.JOSH,l.MIKE],titles:[a.RUSSIAN_TERMINATOR,a.NINJA_VENGENCE,a.NEVER_TOO_YOUNG_TO_DIE],airdate:"2013-01-18"},{episodeName:"Best of the Worst: The New Gladiators, Exterminator 2, and Aftermath",url:"https://www.youtube.com/watch?v=cnDJa_HZVP0",members:[l.JAY,l.RICH,l.JOSH,l.JACK],titles:[a.THE_NEW_GLADIATORS,a.EXTERMINATOR_2,a.THE_AFTERMATH],airdate:"2013-02-01"}],d=n(5),E=n(4),O=n.n(E),f=n(0),T=function(e){var t=e.data,n=e.filterType,r=Object(s.useState)([]),i=Object(d.a)(r,2),o=i[0];i[1];console.log("data in select",t);var c=(t||[]).flatMap((function(e){return e[n]})).filter((function(e){return!!e})).filter((function(e,t,n){return n.indexOf(e)===t})).map((function(e){return{name:e}}));console.log("options in select",c);return Object(f.jsx)("div",{children:Object(f.jsx)(O.a,{options:c,selectedValues:o,onSelect:function(e){return function(e){console.log(e)}(e)},onRemove:function(e){return function(e){console.log(e)}(e)},displayValue:"name",showCheckbox:!0})})},h=function(){var e=u;return console.log("data",u),Object(f.jsxs)("div",{className:"mainDiv",children:[Object(f.jsx)("div",{className:"header",children:Object(f.jsx)("h2",{children:"Hello, sir."})}),Object(f.jsxs)("div",{className:"content",children:[Object(f.jsx)("div",{className:"results",children:"results go here"}),Object(f.jsxs)("div",{className:"fitlers",children:[Object(f.jsx)(T,{data:e,filterType:"titles"}),Object(f.jsx)(T,{data:e,filterType:"members"})]})]})]})};n(14);var m=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(h,{})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),s(e),r(e),i(e),o(e)}))};o.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(m,{})}),document.getElementById("root")),N()}},[[15,1,2]]]);
//# sourceMappingURL=main.4f18666a.chunk.js.map