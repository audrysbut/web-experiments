(this["webpackJsonpweb-experiments"]=this["webpackJsonpweb-experiments"]||[]).push([[0],{54:function(e,n,t){},62:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t.n(c),l=t(8),i=t.n(l),r=(t(54),t(34)),j=t(10),u=t(3),s=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"This is a root page"}),Object(u.jsx)("p",{children:"Soo there will be added something more..."})]})},d=t(46),o=t(33),b=t(92),h=t(93),O=function(e){var n=e.value,t=e.onValueChanged,c=a.a.useState(!1),l=Object(o.a)(c,2),i=l[0],r=l[1];return Object(u.jsxs)(b.a,{labelId:"val",id:"value",open:i,onClose:function(){r(!1)},onOpen:function(){r(!0)},value:n,onChange:function(e){var n=e.target.value;t(n||void 0)},variant:"outlined",renderValue:function(e){return Object(u.jsx)("div",{style:{fontSize:"30px",textAlign:"center"},children:n})},children:[Object(u.jsx)(h.a,{value:"",children:Object(u.jsx)("em",{children:"None"})}),Object(u.jsx)(h.a,{value:1,children:"1"}),Object(u.jsx)(h.a,{value:2,children:"2"}),Object(u.jsx)(h.a,{value:3,children:"3"}),Object(u.jsx)(h.a,{value:4,children:"4"}),Object(u.jsx)(h.a,{value:5,children:"5"}),Object(u.jsx)(h.a,{value:6,children:"6"}),Object(u.jsx)(h.a,{value:7,children:"7"}),Object(u.jsx)(h.a,{value:8,children:"8"}),Object(u.jsx)(h.a,{value:9,children:"9"})]})},x={border:"1px solid black",height:"70px",width:"70px",textAlign:"center",fontSize:"30px"},v={border:"1px solid black"},p=function(e){var n=e.values,t=e.part,c=e.viewOnly,a=e.onValueChanged,l=function(e,n){var t=3*n-1,c=t+6,a=c+6;return[[e[t+1],e[t+2],e[t+3]],[e[c+4],e[c+5],e[c+6]],[e[a+7],e[a+8],e[a+9]]]}(n,t),i=3*t-1,r=i+6,j=r+6,s=new Map([[0,i+1],[1,i+2],[2,i+3],[3,r+4],[4,r+5],[5,r+6],[6,j+7],[7,j+8],[8,j+9]]);return Object(u.jsx)("table",{style:v,children:Object(u.jsx)("tbody",{children:l.map((function(e,n){return Object(u.jsx)("tr",{style:x,children:e.map((function(e,t){return Object(u.jsx)("td",{style:x,children:c?e:Object(u.jsx)(O,{value:e,onValueChanged:function(e){if(a){var c=3*n+t,l=s.get(c);a(l,e)}}})},t)}))},n)}))})})},f=function(e){var n=e.values,t=e.sudokuRow,c=e.onValueChanged,a=e.viewOnly,l=9*t,i=l+1,r=i+1;return Object(u.jsxs)("div",{style:{flexDirection:"row",display:"flex"},children:[Object(u.jsx)(p,{values:n,viewOnly:a,part:l,onValueChanged:c},l),Object(u.jsx)(p,{values:n,viewOnly:a,part:i,onValueChanged:c},i),Object(u.jsx)(p,{values:n,viewOnly:a,part:r,onValueChanged:c},r)]})},g=function(e){var n=e.input,t=e.onValueChanged,c=e.viewOnly;return Object(u.jsxs)("div",{children:[Object(u.jsx)(f,{values:n,sudokuRow:0,viewOnly:c,onValueChanged:t},0),Object(u.jsx)(f,{values:n,sudokuRow:1,viewOnly:c,onValueChanged:t},1),Object(u.jsx)(f,{values:n,sudokuRow:2,viewOnly:c,onValueChanged:t},2)]})},w=function(){var e=Object(c.useState)(new Array(81)),n=Object(o.a)(e,2),t=n[0],a=n[1];return Object(u.jsx)(g,{viewOnly:!1,input:t,onValueChanged:function(e,n){a((function(t){var c=Object(d.a)(t);return c[e]=n,c}))}})},y=function(){return Object(u.jsx)(r.a,{basename:"/",children:Object(u.jsxs)("div",{children:[Object(u.jsx)("nav",{children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(r.b,{to:"/",children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)(r.b,{to:"/sudoku",children:"Sudoku solver"})})]})}),Object(u.jsxs)(j.c,{children:[Object(u.jsx)(j.a,{exact:!0,path:"/",children:Object(u.jsx)(s,{})}),Object(u.jsx)(j.a,{path:"/sudoku",children:Object(u.jsx)(w,{})})]})]})})},C=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,95)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,l=n.getLCP,i=n.getTTFB;t(e),c(e),a(e),l(e),i(e)}))};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root")),C()}},[[62,1,2]]]);
//# sourceMappingURL=main.9b043542.chunk.js.map