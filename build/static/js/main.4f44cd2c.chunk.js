(this["webpackJsonpfetch-testing"]=this["webpackJsonpfetch-testing"]||[]).push([[0],{14:function(e,t,s){},9:function(e,t,s){"use strict";s.r(t);var c=s(4),n=s(5),a=s(8),i=s(7),l=s(2),o=s(1),r=s.n(o),j=s(6),b=s.n(j),d=(s(14),s(0));function u(e){return Object(d.jsx)("input",{className:"moviesinput",type:"search",onChange:e.handleChange})}function h(e){var t=[];if(e.ratings&&0!==e.ratings.length)for(var s=0;s<e.ratings.length;s++)t.push(Object(d.jsxs)("div",{children:["Ocena ",e.ratings[s].Source,": ",e.ratings[s].Value]},s));else t.push(Object(d.jsx)("div",{children:"Brak innych ocen"},0));return t}function O(e){return Object(d.jsx)("button",{className:"scrollButton fas fa-chevron-down",onClick:function(){window.scroll({top:document.body.offsetHeight,left:0,behavior:"smooth"})}})}function x(){var e=Object(o.useState)(!1),t=Object(l.a)(e,2),s=t[0],c=t[1],n=Object(o.useState)(null),a=Object(l.a)(n,2),i=a[0],r=a[1],j=Object(o.useState)([]),b=Object(l.a)(j,2),x=b[0],v=b[1],m=Object(o.useState)("The Room"),p=Object(l.a)(m,2),y=p[0],k=p[1];return Object(o.useEffect)((function(){fetch("https://www.omdbapi.com/?t=".concat(y,"&apikey=63e8f48b"),{method:"GET",headers:{Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e),c(!0),v(e),console.log(e.Ratings)}),(function(e){c(!1),r(e)}))}),[y]),i?Object(d.jsxs)("h1",{style:{fontStyle:150},className:"error",children:["Error! ",i.message]}):s?Object(d.jsxs)("div",{className:"moviesfetch",children:[Object(d.jsxs)("div",{className:"movies",children:[Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("h2",{className:"title",children:"Tabela z danymi nt. film\xf3w"}),Object(d.jsx)("h3",{className:"subtitle",children:"wpisz tytu\u0142 filmu:"})]}),Object(d.jsx)(u,{handleChange:function(e){k(e.target.value)}}),Object(d.jsxs)("div",{className:"moviestable",children:[Object(d.jsxs)("div",{children:["Tytu\u0142: ",x.Title]}),Object(d.jsxs)("div",{children:["Aktorzy: ",x.Actors]}),Object(d.jsxs)("div",{children:["Re\u017cyser: ",x.Director]}),Object(d.jsxs)("div",{children:["Gatunek: ",x.Genre]}),Object(d.jsxs)("div",{children:["Rok produkcji: ",x.Year]}),Object(d.jsxs)("div",{children:["Ocena imdb: ",x.imdbRating]}),Object(d.jsxs)("div",{children:["Ocena metascore: ",x.Metascore]}),Object(d.jsx)(h,{ratings:x.Ratings}),Object(d.jsxs)("div",{children:["Data wydania: ",x.Released]})]})]}),Object(d.jsx)(O,{})]}):Object(d.jsxs)("div",{className:"movies",children:[Object(d.jsx)("div",{className:"header skeleton"}),Object(d.jsxs)("div",{className:"moviestableSkeleton",children:[Object(d.jsx)("div",{className:"skeleton-text skeleton"}),Object(d.jsx)("div",{className:"skeleton-text skeleton"}),Object(d.jsx)("div",{className:"skeleton-text skeleton"}),Object(d.jsx)("div",{className:"skeleton-text skeleton"}),Object(d.jsx)("div",{className:"skeleton-text skeleton"}),Object(d.jsx)("div",{className:"skeleton-text skeleton"}),Object(d.jsx)("div",{className:"skeleton-text skeleton"}),Object(d.jsx)("div",{className:"skeleton-text skeleton"}),Object(d.jsx)("div",{className:"skeleton-text skeleton"})]})]})}function v(e){var t=[];return"58"===e.stop?t.push(Object(d.jsxs)("select",{className:"busSelect",onChange:e.handleChange,children:[Object(d.jsx)("option",{value:"3 Sienna / Le\u015bna",children:"3 Sienna / Le\u015bna"},"3"),Object(d.jsx)("option",{value:"8 \u017bywiec P\u0119tla MZK",children:"8 \u017bywiec P\u0119tla MZK"},"8")]},e.stop)):"647"===e.stop?t.push(Object(d.jsxs)("select",{className:"busSelect",onChange:e.handleChange,children:[Object(d.jsx)("option",{value:"1 \u015awinna, Przy\u0142\u0119k\xf3w, Pewel \u015alemie\u0144ska",children:"1 \u015awinna, Przy\u0142\u0119k\xf3w, Pewel \u015alemie\u0144ska"},"1"),Object(d.jsx)("option",{value:"2 Trzebinia",children:"2 Trzebinia"},"2"),Object(d.jsx)("option",{value:"3 \u017bywiec ul. Sporyska",children:"3 \u017bywiec ul.Sporyska"},"3"),Object(d.jsx)("option",{value:"5 \u017bywiec Fabryka \u015arub",children:"5 \u017bywiec Fabryka \u015arub"},"5"),Object(d.jsx)("option",{value:"8 Rychwa\u0142dek, Pewel \u015alemie\u0144ska",children:"8 Rychwa\u0142dek, Pewel \u015alemie\u0144ska"},"8"),Object(d.jsx)("option",{value:"10 Kocur\xf3w p\u0119tla",children:"10 Kocur\xf3w p\u0119tla"},"10"),Object(d.jsx)("option",{value:"12 \u017bywiec Kocur\xf3w",children:"12 \u017bywiec Kocur\xf3w"},"12"),Object(d.jsx)("option",{value:"13 Przy\u0142\u0119k\xf3w",children:"13 Przy\u0142\u0119k\xf3w"},"13"),Object(d.jsx)("option",{value:"15 \u017bywiec Sp\xf3\u0142dzielnia, Kocur\xf3w",children:"15 \u017bywiec Sp\xf3\u0142dzielnia, Kocur\xf3w"},"15")]},e.stop)):"548"===e.stop&&t.push(Object(d.jsxs)("select",{className:"busSelect",onChange:e.handleChange,children:[Object(d.jsx)("option",{value:"1 \u017bywiec Os. Zgoda",children:"1 \u017bywiec Os. Zgoda"},"1"),Object(d.jsx)("option",{value:"2 \u017bywiec P\u0119tla MZK",children:"2 \u017bywiec P\u0119tla MZK"},"2"),Object(d.jsx)("option",{value:"5 Radziechowy, Przyb\u0119dza",children:"5 Radziechowy, Przyb\u0119dza"},"5"),Object(d.jsx)("option",{value:"10 Juszczyna",children:"10 Juszczyna"},"10"),Object(d.jsx)("option",{value:"12 \u017bywiec P\u0119tla MZK, Dz. Przemys\u0142owa",children:"12 \u017bywiec P\u0119tla MZK, Dz. Przemys\u0142owa"},"12"),Object(d.jsx)("option",{value:"13 \u017bywiec P\u0119tla MZK, Os. Kochanowskiego",children:"13 \u017bywiec P\u0119tla MZK, Os. Kochanowskiego"},"13"),Object(d.jsx)("option",{value:"15 Brzu\u015bnik",children:"15 Brzu\u015bnik"},"15")]},e.stop)),t}function m(){var e=Object(o.useState)(!1),t=Object(l.a)(e,2),s=t[0],c=t[1],n=Object(o.useState)(null),a=Object(l.a)(n,2),i=a[0],r=a[1],j=Object(o.useState)([]),b=Object(l.a)(j,2),u=b[0],h=b[1],O=Object(o.useState)("3"),x=Object(l.a)(O,2),m=x[0],p=x[1],y=Object(o.useState)("Sienna / Le\u015bna"),k=Object(l.a)(y,2),w=k[0],g=k[1],f=Object(o.useState)("58"),z=Object(l.a)(f,2),N=z[0],S=z[1],P=new FormData;return P.append("kierunek",w),P.append("linia",m),P.append("przystanek",N),Object(o.useEffect)((function(){fetch("https://limitless-everglades-89814.herokuapp.com/mzk",{method:"POST",headers:{Accept:"*/*","Accept-Encoding":"gzip, deflate, br",authorization:"no-scam","Access-Control-Allow-Origin":"*"},body:P}).then((function(e){return e.text()})).then((function(e){c(!0),h(e)}),(function(e){c(!1),r(e)}))})),i?Object(d.jsxs)("h1",{style:{fontStyle:150},className:"error",children:["Error! ",i.message]}):s?Object(d.jsx)("div",{className:"MZKfetch",children:Object(d.jsxs)("div",{className:"zywiectable",children:[Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("h2",{className:"title",children:"Tabela rozk\u0142adu jazdy MZK \u017bywiec"}),Object(d.jsx)("h3",{className:"subtitle",children:"wybierz przystanek i lini\u0119:"})]}),Object(d.jsxs)("select",{className:"stopSelect",onChange:function(e){var t=e.target.value;return console.log(t),console.log(e.target.nextSibling.value),S(t),setTimeout((function(){g(e.target.nextSibling.value.slice(2,e.target.nextSibling.value.length))}),0),setTimeout((function(){p(e.target.nextSibling.value.split(" ")[0])}),0)},children:[Object(d.jsx)("option",{value:"58",children:"Jubileuszowa"},"58"),Object(d.jsx)("option",{value:"647",children:"Dworzec"},"647"),Object(d.jsx)("option",{value:"548",children:"Pi\u0142sudskiego II"},"548")]}),Object(d.jsx)(v,{handleChange:function(e){var t=e.target.value;return console.log(t),p(t.split(" ")[0]),g(t.slice(2,t.length))},stop:N,direction:g,line:p}),Object(d.jsx)("div",{className:"timetable",dangerouslySetInnerHTML:{__html:u}})]})}):Object(d.jsxs)("div",{className:"zywiectable",children:[Object(d.jsx)("div",{className:"header skeleton"}),Object(d.jsx)("div",{className:"timetableSkeleton skeleton"}),Object(d.jsx)("div",{className:"legendSkeleton skeleton"})]})}var p=function(e){Object(a.a)(s,e);var t=Object(i.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(n.a)(s,[{key:"render",value:function(){return Object(d.jsxs)(r.a.Fragment,{children:[Object(d.jsx)(x,{className:"moviefetch"}),Object(d.jsx)(m,{className:"MZKfetch"})]})}}]),s}(r.a.Component);b.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.4f44cd2c.chunk.js.map