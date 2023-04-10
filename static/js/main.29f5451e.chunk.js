(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var i=n(7),a=n.n(i),s=n(2),r=n(3),c=n(5),o=n(4),u=n(1),l=n.n(u),m=(n(12),n(13),n(0)),p=function(t){Object(c.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(s.a)(this,n);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={position:0},t.handleNextButton=function(e,n,i,a,s){a?t.setState({position:n}):t.setState((function(t){return{position:t.position-i}})),s&&e===n&&t.setState({position:0})},t.handlePrevButton=function(e,n,i,a){t.state.position+i>=0?t.setState({position:0}):t.setState((function(t){return{position:t.position+i}})),a&&e+i===i&&t.setState({position:n})},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this,e=this.props,n=e.images,i=e.step,a=e.frameSize,s=e.itemWidth,r=e.animationDuration,c=e.infinite,o=this.state.position,u=-s*(n.length-a),l=i*s,p=o-i*s<=u;+o%s!==0&&((o-=+o%s)<u&&(o=u));return Object(m.jsxs)("div",{className:"Carousel",style:{width:"".concat(a*s,"px")},children:[Object(m.jsx)("ul",{className:"Carousel__list",children:n.map((function(t){var e=t.lastIndexOf("/")+1,n=t.lastIndexOf("."),i=t.slice(e,n);return Object(m.jsx)("li",{style:{transform:"translateX(".concat(o,"px)"),transition:"transform ".concat(r,"ms")},children:Object(m.jsx)("img",{src:t,alt:i,width:s})},i)}))}),Object(m.jsxs)("div",{className:"Carousel__buttons",children:[Object(m.jsx)("button",{type:"button",disabled:!c&&0===o,onClick:function(){t.handlePrevButton(o,u,l,c)},children:"Prev"}),Object(m.jsx)("button",{"data-cy":"next",type:"button",disabled:!c&&o===u,onClick:function(){t.handleNextButton(o,u,l,p,c)},children:"Next"})]})]})}}]),n}(l.a.Component),h=(n(15),function(t){var e=t.updateInputValues,n=t.updateCheckboxValue;return Object(m.jsxs)("form",{className:"Form",children:[[["step","Step","1","3"],["frameSize","Frame Size","2","3"],["itemWidth","Item Width","3","130"],["animationDuration","Animation Duration","4","1000"]].map((function(t){var n=t[0],i=t[1],a=t[2],s=t[3];return Object(m.jsxs)("div",{className:"Form__content",children:[Object(m.jsx)("label",{htmlFor:n,className:"Form__label",children:i}),Object(m.jsx)("input",{className:"Form__input",type:"number",name:n,id:n,min:1,defaultValue:s,onChange:function(t){Number(t.currentTarget.value)<=0&&(t.currentTarget.value=String(1)),e(Number(t.currentTarget.value),t.currentTarget.name)}})]},a)})),Object(m.jsxs)("div",{className:"Form__content",children:[Object(m.jsx)("label",{htmlFor:"infinite",className:"Form__label",children:"Infinite:"}),Object(m.jsx)("input",{className:"Form__checkbox",id:"infinite",name:"infinite",type:"checkbox",onChange:function(t){n(t.currentTarget.checked)}})]})]})}),d=function(t){Object(c.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(s.a)(this,n);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinite:!1},t.updateInputValues=function(e,n){switch(n){case"step":t.setState({step:e});break;case"frameSize":t.setState({frameSize:e});break;case"itemWidth":t.setState({itemWidth:e});break;case"animationDuration":t.setState({animationDuration:e});break;default:throw new Error("Something went wrong")}},t.updateCheckboxValue=function(e){t.setState({infinite:e})},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this.state,e=t.images,n=t.step,i=t.frameSize,a=t.itemWidth,s=t.animationDuration,r=t.infinite;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{className:"App__title","data-cy":"title",children:"Carousel with ".concat(e.length," images")}),Object(m.jsx)(h,{updateInputValues:this.updateInputValues,updateCheckboxValue:this.updateCheckboxValue}),Object(m.jsx)(p,{images:e,step:n,frameSize:i,itemWidth:a,animationDuration:s,infinite:r})]})}}]),n}(l.a.Component),b=d;a.a.render(Object(m.jsx)(b,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.29f5451e.chunk.js.map