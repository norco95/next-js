(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2562:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return g}});var r=e(4942),i=e(885),c=e(7294),a=e(1120),s=e(7623),o=e(9127),u=e(1594),l=e(8941),p=e(3530),d=e(2318),f=e(5893);function h(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function j(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?h(Object(e),!0).forEach((function(t){(0,r.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):h(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var b=(0,a.Z)((function(n){return(0,s.Z)({root:{width:"100%"},button:{marginRight:n.spacing(1)},instructions:{marginTop:n.spacing(1),marginBottom:n.spacing(1)}})}));function v(n){switch(n){case 0:return"Select campaign settings...";case 1:return"What is an ad group anyways?";case 2:return"This is the bit I really care about!";default:return"Unknown step"}}function g(){var n=b(),t=c.useState(0),e=(0,i.Z)(t,2),r=e[0],a=e[1],s=c.useState(new Set),h=(0,i.Z)(s,2),g=h[0],m=h[1],w=["Select campaign settings","Create an ad group","Create an ad"],O=function(n){return 1===n},y=function(n){return g.has(n)};return(0,f.jsxs)("div",{className:n.root,children:[(0,f.jsx)(o.Z,{activeStep:r,children:w.map((function(n,t){var e={},r={};return O(t)&&(r.optional=(0,f.jsx)(d.Z,{variant:"caption",children:"Optional"})),y(t)&&(e.completed=!1),(0,f.jsx)(u.Z,j(j({},e),{},{children:(0,f.jsx)(l.Z,j(j({},r),{},{children:n}))}),n)}))}),(0,f.jsx)("div",{children:r===w.length?(0,f.jsxs)("div",{children:[(0,f.jsx)(d.Z,{className:n.instructions,children:"All steps completed - you're finished"}),(0,f.jsx)(p.Z,{onClick:function(){a(0)},className:n.button,children:"Reset"})]}):(0,f.jsxs)("div",{children:[(0,f.jsx)(d.Z,{className:n.instructions,children:v(r)}),(0,f.jsxs)("div",{children:[(0,f.jsx)(p.Z,{disabled:0===r,onClick:function(){a((function(n){return n-1}))},className:n.button,children:"Back"}),O(r)&&(0,f.jsx)(p.Z,{variant:"contained",color:"primary",onClick:function(){if(!O(r))throw new Error("You can't skip a step that isn't optional.");a((function(n){return n+1})),m((function(n){var t=new Set(n.values());return t.add(r),t}))},className:n.button,children:"Skip"}),(0,f.jsx)(p.Z,{variant:"contained",color:"primary",onClick:function(){var n=g;y(r)&&(n=new Set(n.values())).delete(r),a((function(n){return n+1})),m(n)},className:n.button,children:r===w.length-1?"Finish":"Next"})]})]})})]})}},5301:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(2562)}])}},function(n){n.O(0,[774,389,888,179],(function(){return t=5301,n(n.s=t);var t}));var t=n.O();_N_E=t}]);