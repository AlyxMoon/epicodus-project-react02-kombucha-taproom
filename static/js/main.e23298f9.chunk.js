(this["webpackJsonpepicodus-project-react02-kombucha-taproom"]=this["webpackJsonpepicodus-project-react02-kombucha-taproom"]||[]).push([[0],{23:function(e,t,r){},25:function(e,t,r){},29:function(e,t,r){"use strict";r.r(t);var c=r(1),n=r.n(c),a=r(14),o=r.n(a),i=(r(23),r(2)),s=r.n(i),d=r(4),u=r(6),l=r(15),p=r(16),h=r(18),b=r(17),j=(r(25),r(10)),v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;return new Promise((function(t){window.setTimeout(t,e)}))},m=r(0),f=function(e){var t=e.product,r=e.seeProductDetails,n=e.removeProduct,a=Object(c.useState)(!1),o=Object(j.a)(a,2),i=o[0],u=o[1],l=function(){var e=Object(d.a)(s.a.mark((function e(r){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),u(!0),e.next=4,v(2100);case 4:n(t.id),u(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("article",{className:i?"removing":"",children:[Object(m.jsxs)("div",{className:"name-box",children:[Object(m.jsx)("h4",{children:t.name}),Object(m.jsx)("p",{children:t.brand})]}),Object(m.jsxs)("div",{className:"summary-box",children:[Object(m.jsxs)("dl",{children:[Object(m.jsx)("dt",{children:"Price"}),Object(m.jsxs)("dd",{children:["$",t.price]}),Object(m.jsx)("dt",{children:"Flavor"}),Object(m.jsx)("dd",{children:t.flavor}),Object(m.jsx)("dt",{children:"Pints Left"}),Object(m.jsx)("dd",{children:t.pints})]}),Object(m.jsx)("a",{href:"/products/".concat(t.id),className:"btn btn-primary",onClick:function(e){e.preventDefault(),r(t.id)},children:"See Details"}),Object(m.jsx)("a",{href:"/products/".concat(t.id,"/delete"),className:"btn btn-danger",onClick:l,disabled:i,children:"Remove Keg"})]}),Object(m.jsx)("div",{className:"details-box",children:Object(m.jsx)("p",{children:t.description})})]})},O=function(e){var t=e.products,r=e.seeProductDetails,c=e.removeProduct,n=e.intro;return Object(m.jsxs)("section",{className:"featured-products-list",children:[n&&Object(m.jsx)("h3",{children:n}),t.map((function(e){return Object(m.jsx)(f,{product:e,seeProductDetails:r,removeProduct:c},e.id)}))]})},x=function(e){var t=e.featuredProducts,r=e.seeProductDetails,n=e.removeProduct;return Object(m.jsxs)(c.Fragment,{children:[Object(m.jsx)("h2",{children:"Welcome to the taproom!"}),Object(m.jsx)("p",{children:"Feeling down? Feeling thirsty? Feeling bored? All good reasons to have a cold glass of kombucha. Check out the product list for our full offerings!"}),Object(m.jsx)("hr",{}),Object(m.jsx)(O,{intro:"Wow! These kegs sure are popular. Be sure to get some before they run out!",products:t,seeProductDetails:r,removeProduct:n})]})},g=r(9),P=r(5),y=r(3),k=function(e){var t=e.createProduct,r=Object(c.useState)({id:Object(y.v4)(),name:"",brand:"",price:"",flavor:"",description:"",pints:120}),n=Object(j.a)(r,2),a=n[0],o=n[1];return Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(a)},children:[Object(m.jsx)("h1",{children:"Product Create"}),[{name:"name",label:"Name",type:"text"},{name:"brand",label:"Brand",type:"text"},{name:"price",label:"Price",type:"number"},{name:"flavor",label:"Flavor",type:"text"},{name:"description",label:"Description",type:"text"}].map((function(e){return Object(m.jsxs)(c.Fragment,{children:[Object(m.jsx)("label",{children:e.label}),Object(m.jsx)("input",{required:!0,type:e.type,value:a[e.name],onChange:function(t){return r=t.target.value,c=e.name,void o(Object(P.a)(Object(P.a)({},a),{},Object(g.a)({},c,"price"===c?parseInt(r):r)));var r,c}})]},e.name)})),Object(m.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Submit"})]})};k.defaultProps={createProduct:function(e){console.log("test submit product:",e)}};var w=k,D=function(e){var t=e.product,r=e.updateProduct;return Object(m.jsxs)("section",{className:"product-details-page",children:[Object(m.jsx)("h2",{children:t.name}),Object(m.jsxs)("h5",{children:["By: ",t.brand]}),Object(m.jsxs)("dl",{children:[Object(m.jsx)("dt",{children:"Price"}),Object(m.jsxs)("dd",{children:["$",t.price]}),Object(m.jsx)("dt",{children:"Flavor"}),Object(m.jsx)("dd",{children:t.flavor}),Object(m.jsx)("dt",{children:"Pints Left"}),Object(m.jsx)("dd",{children:t.pints||"Out of Stock"})]}),Object(m.jsx)("p",{children:t.description}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{className:"btn btn-primary",onClick:function(){r(Object(P.a)(Object(P.a)({},t),{},{pints:Math.max(0,t.pints-1)}))},disabled:t.pints<=0,children:"Buy a Pint"})})]})};D.defaultProps={updateProduct:function(e){console.log("test update product:",e)}};var S=D,N=function(e){var t=e.products,r=e.seeProductDetails,c=e.removeProduct;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{children:"Product List"}),Object(m.jsx)(O,{intro:"We have a lot of great offerings, check it out!",products:t,seeProductDetails:r,removeProduct:c})]})};N.defaultProps={products:[],seeProductDetails:function(e){console.log("test see product details:",e)}};var I=[x,w,S,N],C=[{id:Object(y.v4)(),name:"Health-Ade",brand:"Health-Right",price:6,pints:90,flavor:"ginger, lemon",description:"Ready for a delicious and healthy taste bud experience? Get health-ade!"},{id:Object(y.v4)(),name:"Strawberry Yum",brand:"Health-Right",price:8,pints:8,flavor:"strawberry, basil",description:"Our seasonal classic. Fresh organic strawberries combined with fresh herbs combine to make a treat that everyone can enjoy. Get a glass while supplies last!"},{id:Object(y.v4)(),name:"Rowdy Earth",brand:"Rough Tongue Tonics",price:5,pints:110,flavor:"molasses, pumpkin",description:"Two flavors you don't typically see together. But you aren't typical. You're tough, and you need a drink to match. With fresh, strong ingredients from the earth, this drink will revitalize you and give you the energy you need to keep on trucking."},{id:Object(y.v4)(),name:"Tea You In Hell",brand:"Rough Tongue Tonics",price:9,pints:14,flavor:"green tea, jalapeno",description:"You would wish this drink on your greatest friend, because it'll see you through thick and thin. When the times are tough and you need some tough love back, throw back a glass Tea You In Hell and get your act together."},{id:Object(y.v4)(),name:"Blueberry Lemon",brand:"Simple",price:3,pints:3,flavor:"lemon, blueberry",description:"We don't believe in wasting time with slogans. We make kombucha, enjoy."},{id:Object(y.v4)(),name:"Apple Cinammon",brand:"Simple",price:3,pints:20,flavor:"apple, cinnamon",description:"We don't believe in wasting time with slogans. We make kombucha, enjoy."}],F=function(){var e=Object(d.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.localStorage.getItem("r2-kombucha-products"),e.abrupt("return",t?JSON.parse(t):C);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(d.a)(s.a.mark((function e(){var t,r=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:[],window.localStorage.setItem("r2-kombucha-products",JSON.stringify(t)),e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(e){var t=e.activePage,r=e.changePage,c=[{text:"Home",url:"/",index:0,handler:function(e){e.preventDefault(),r(0)}},{text:"Product List",url:"/products",index:3,handler:function(e){e.preventDefault(),r(3)}},{text:"Create Product",url:"/products/create",index:1,handler:function(e){e.preventDefault(),r(1)}}];return Object(m.jsx)("nav",{children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h1",{children:"Kombucha Taproom"}),Object(m.jsx)("ul",{children:c.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"nav-link ".concat(t===e.index?"active":""),href:e.url,onClick:e.handler,children:e.text})},e.index)}))})]})})};W.defaultProps={activePage:-1,changePage:function(e){console.log("test change page:",e)}};var B=W,R=function(e){Object(h.a)(r,e);var t=Object(b.a)(r);function r(){var e;return Object(l.a)(this,r),(e=t.call(this)).setPage=function(t){e.setState({activePage:Math.max(0,Math.min(t,I.length-1)),activeProduct:{},activeProductIndex:-1})},e.seeProductDetails=function(t){var r=e.state.products.findIndex((function(e){return e.id===t}));e.setState({activePage:2,activeProduct:-1===r?{}:e.state.products[r],activeProductIndex:r})},e.addProduct=function(t){e.setState({products:[].concat(Object(u.a)(e.state.products),[t]),activePage:3},(function(){T(e.state.products),console.log("product list updated",e.state.products)}))},e.updateActiveProduct=function(t){e.setState({activeProduct:t,products:[].concat(Object(u.a)(e.state.products.slice(0,e.state.activeProductIndex)),[t],Object(u.a)(e.state.products.slice(e.state.activeProductIndex+1)))},(function(){T(e.state.products)}))},e.removeProduct=function(t){var r=e.state.products.findIndex((function(e){return e.id===t}));r<0||e.setState({activeProduct:{},products:[].concat(Object(u.a)(e.state.products.slice(0,r)),Object(u.a)(e.state.products.slice(r+1))),activePage:2===e.state.activePage?3:e.state.activePage},(function(){T(e.state.products)}))},e.state={activePage:0,activeProduct:{},activeProductIndex:-1,products:[]},e}return Object(p.a)(r,[{key:"componentDidMount",value:function(){var e=Object(d.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:t=e.sent,this.setState({products:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=I[this.state.activePage],t=this.state.products.filter((function(e){return e.pints>0&&e.pints<15}));return Object(m.jsxs)("div",{className:"app",children:[Object(m.jsx)(B,{activePage:this.state.activePage,changePage:this.setPage}),Object(m.jsx)("main",{children:Object(m.jsx)(e,{createProduct:this.addProduct,updateProduct:this.updateActiveProduct,removeProduct:this.removeProduct,products:this.state.products,featuredProducts:t,product:this.state.activeProduct,seeProductDetails:this.seeProductDetails})})]})}}]),r}(c.Component);o.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(R,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.e23298f9.chunk.js.map