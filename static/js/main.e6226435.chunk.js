(this["webpackJsonpweb-experiments"]=this["webpackJsonpweb-experiments"]||[]).push([[0],{53:function(e,n,t){},61:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t.n(c),l=t(8),i=t.n(l),r=(t(53),t(33)),u=t(10),j=t(31),s=t(91),d=t(92),o=t(3),b=function(e){var n=e.value,t=e.onValueChanged,c=a.a.useState(!1),l=Object(j.a)(c,2),i=l[0],r=l[1];return Object(o.jsxs)(s.a,{labelId:"val",id:"value",open:i,onClose:function(){r(!1)},onOpen:function(){r(!0)},value:n,onChange:function(e){var n=e.target.value;t(n||void 0)},variant:"outlined",renderValue:function(e){return Object(o.jsx)("div",{style:{fontSize:"30px",textAlign:"center"},children:n})},children:[Object(o.jsx)(d.a,{value:"",children:Object(o.jsx)("em",{children:"None"})}),Object(o.jsx)(d.a,{value:1,children:"1"}),Object(o.jsx)(d.a,{value:2,children:"2"}),Object(o.jsx)(d.a,{value:3,children:"3"}),Object(o.jsx)(d.a,{value:4,children:"4"}),Object(o.jsx)(d.a,{value:5,children:"5"}),Object(o.jsx)(d.a,{value:6,children:"6"}),Object(o.jsx)(d.a,{value:7,children:"7"}),Object(o.jsx)(d.a,{value:8,children:"8"}),Object(o.jsx)(d.a,{value:9,children:"9"})]})},O={border:"1px solid black",height:"70px",width:"70px",textAlign:"center",fontSize:"30px"},h={border:"1px solid black"},x=function(e){var n=e.values,t=e.part,c=e.viewOnly,a=e.onValueChanged,l=function(e,n){var t=3*n-1,c=t+6,a=c+6;return[[e[t+1],e[t+2],e[t+3]],[e[c+4],e[c+5],e[c+6]],[e[a+7],e[a+8],e[a+9]]]}(n,t),i=3*t-1,r=i+6,u=r+6,j=new Map([[0,i+1],[1,i+2],[2,i+3],[3,r+4],[4,r+5],[5,r+6],[6,u+7],[7,u+8],[8,u+9]]);return Object(o.jsx)("table",{style:h,children:Object(o.jsx)("tbody",{children:l.map((function(e,n){return Object(o.jsx)("tr",{style:O,children:e.map((function(e,t){return Object(o.jsx)("td",{style:O,children:c?e:Object(o.jsx)(b,{value:e,onValueChanged:function(e){if(a){var c=3*n+t,l=j.get(c);a(l,e)}}})},t)}))},n)}))})})},v=function(e){var n=e.values,t=e.sudokuRow,c=e.onValueChanged,a=e.viewOnly,l=9*t,i=l+1,r=i+1;return Object(o.jsxs)("div",{style:{flexDirection:"row",display:"flex"},children:[Object(o.jsx)(x,{values:n,viewOnly:a,part:l,onValueChanged:c},l),Object(o.jsx)(x,{values:n,viewOnly:a,part:i,onValueChanged:c},i),Object(o.jsx)(x,{values:n,viewOnly:a,part:r,onValueChanged:c},r)]})},p=function(e){var n=e.input,t=e.onValueChanged,c=e.viewOnly;return Object(o.jsxs)("div",{children:[Object(o.jsx)(v,{values:n,sudokuRow:0,viewOnly:c,onValueChanged:t},0),Object(o.jsx)(v,{values:n,sudokuRow:1,viewOnly:c,onValueChanged:t},1),Object(o.jsx)(v,{values:n,sudokuRow:2,viewOnly:c,onValueChanged:t},2)]})},f=function(){var e=Object(c.useState)(new Array(81)),n=Object(j.a)(e,1)[0];return Object(o.jsx)(p,{input:n,viewOnly:!1})},g=function(){return Object(o.jsx)(r.a,{basename:"/",children:Object(o.jsxs)("div",{children:[Object(o.jsx)("nav",{children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{to:"/",children:"Home"})}),Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{to:"/sudoku",children:"Sudoku solver"})})]})}),Object(o.jsxs)(u.c,{children:[Object(o.jsx)(u.a,{exact:!0,path:"/",children:Object(o.jsx)("h1",{children:"root"})}),Object(o.jsx)(u.a,{path:"/sudoku",children:Object(o.jsx)(f,{})})]})]})})},w=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,94)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,l=n.getLCP,i=n.getTTFB;t(e),c(e),a(e),l(e),i(e)}))};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root")),w()}},[[61,1,2]]]);
//# sourceMappingURL=main.e6226435.chunk.js.map