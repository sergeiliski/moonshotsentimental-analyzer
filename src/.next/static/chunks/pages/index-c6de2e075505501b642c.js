_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{WRm0:function(e,t,a){a("bmCC"),e.exports=self.fetch.bind(self)},bmCC:function(e,t,a){"use strict";t.Headers=self.Headers,t.Request=self.Request,t.Response=self.Response,t.fetch=self.fetch},cMU6:function(e,t,a){"use strict";a.r(t);var r=a("NthX"),s=a.n(r),n=a("eijD"),c=a("oYCi"),i=a("mXGw"),o=a.n(i),l=a("48eU"),d=a("0DFq"),b=a("qprh"),u=a("WRm0"),j=a.n(u),h=a("Qkzy"),m=a("Fcif"),f=a("+I+c"),x=a("8Jek"),p=a.n(x),v=(a("FIWN"),a("0ZwX")),O=a("HCZ3"),g=a("YzBh"),y=a("+avB"),N=a("1GLU"),w={variant:void 0,active:!1,disabled:!1},P=o.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.active,s=e.disabled,n=e.className,c=e.variant,l=e.action,d=e.as,b=e.eventKey,u=e.onClick,j=Object(f.a)(e,["bsPrefix","active","disabled","className","variant","action","as","eventKey","onClick"]);a=Object(O.a)(a,"list-group-item");var h=Object(i.useCallback)((function(e){if(s)return e.preventDefault(),void e.stopPropagation();u&&u(e)}),[s,u]);return s&&void 0===j.tabIndex&&(j.tabIndex=-1,j["aria-disabled"]=!0),o.a.createElement(y.a,Object(m.a)({ref:t},j,{eventKey:Object(N.b)(b,j.href),as:d||(l?j.href?"a":"button":"div"),onClick:h,className:p()(n,a,r&&"active",s&&"disabled",c&&a+"-"+c,l&&a+"-action")}))}));P.defaultProps=w,P.displayName="ListGroupItem";var C=P,R={variant:void 0,horizontal:void 0},k=o.a.forwardRef((function(e,t){var a,r=Object(v.a)(e,{activeKey:"onSelect"}),s=r.className,n=r.bsPrefix,c=r.variant,i=r.horizontal,l=r.as,d=void 0===l?"div":l,b=Object(f.a)(r,["className","bsPrefix","variant","horizontal","as"]),u=Object(O.a)(n,"list-group");return a=i?!0===i?"horizontal":"horizontal-"+i:null,o.a.createElement(g.a,Object(m.a)({ref:t},b,{as:d,className:p()(s,u,c&&u+"-"+c,a&&u+"-"+a)}))}));k.defaultProps=R,k.displayName="ListGroup",k.Item=C;var _=k,E=a("skzL"),I=function(e){return o.a.forwardRef((function(t,a){return o.a.createElement("div",Object(m.a)({},t,{ref:a,className:p()(t.className,e)}))}))},H=a("e1QG"),L=o.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,s=e.variant,n=e.as,c=void 0===n?"img":n,i=Object(f.a)(e,["bsPrefix","className","variant","as"]),l=Object(O.a)(a,"card-img");return o.a.createElement(c,Object(m.a)({ref:t,className:p()(s?l+"-"+s:l,r)},i))}));L.displayName="CardImg",L.defaultProps={variant:null};var z=L,G=I("h5"),T=I("h6"),q=Object(E.a)("card-body"),B=Object(E.a)("card-title",{Component:G}),F=Object(E.a)("card-subtitle",{Component:T}),S=Object(E.a)("card-link",{Component:"a"}),D=Object(E.a)("card-text",{Component:"p"}),J=Object(E.a)("card-header"),M=Object(E.a)("card-footer"),W=Object(E.a)("card-img-overlay"),X=o.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,s=e.bg,n=e.text,c=e.border,l=e.body,d=e.children,b=e.as,u=void 0===b?"div":b,j=Object(f.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),h=Object(O.a)(a,"card"),x=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:h+"-header"}}),[h]);return o.a.createElement(H.a.Provider,{value:x},o.a.createElement(u,Object(m.a)({ref:t},j,{className:p()(r,h,s&&"bg-"+s,n&&"text-"+n,c&&"border-"+c)}),l?o.a.createElement(q,null,d):d))}));X.displayName="Card",X.defaultProps={body:!1},X.Img=z,X.Title=B,X.Subtitle=F,X.Body=q,X.Link=S,X.Text=D,X.Header=J,X.Footer=M,X.ImgOverlay=W;var K=X;function U(e){var t=e.thought,a=Object(i.useState)(!1),r=a[0],s=a[1],n=function(){return s(!r)};return Object(c.jsxs)(K,{style:{marginTop:"15px",borderRadius:"10px",height:"360px",width:"255px",marginRight:"20px",cursor:"pointer"},className:r?"shadow-sm":"",onMouseEnter:n,onMouseLeave:n,children:[Object(c.jsx)(K.Img,{style:{borderRadius:"10px 10px 0 0"},variant:"top",src:"https://dummyimage.com/600x300/362f36/ffffff"}),Object(c.jsxs)(K.Body,{children:[Object(c.jsx)(K.Title,{children:t.message}),Object(c.jsxs)(K.Text,{children:["by ",t.author]})]}),Object(c.jsx)(K.Footer,{style:{borderRadius:"0 0 10px 10px"},className:"bg-white",children:Object(c.jsx)("small",{className:"text-muted",children:"Posted 3 mins ago"})})]})}var A=a("AesL");function Q(e){var t=e.thoughts;return Object(c.jsx)("div",{className:"bg-light py-5",children:Object(c.jsx)("div",{className:"py-5",children:Object(c.jsxs)(l.a,{children:[Object(c.jsxs)(d.a,{children:[Object(c.jsx)(b.a,{xs:10,children:Object(c.jsx)("h4",{children:"Recommended to you"})}),Object(c.jsx)(b.a,{className:"text-center",children:Object(c.jsx)(h.a,{variant:"outline-primary",children:"View all"})})]}),Object(c.jsxs)(_,{className:"flex-md-row",style:{justifyContent:"start"},children:[t&&t.map((function(e){return Object(c.jsx)(A.a,{to:"/ad/".concat(e._id),children:Object(c.jsx)(U,{thought:e},e._id)})})),!t&&Object(c.jsx)(b.a,{xs:12,children:"Loading..."})]})]})})})}function Y(e){var t=e.thoughts,a={minWidth:"100px",margin:"0 5px 0 5px"};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(d.a,{noGutters:!0,style:{minHeight:"300px"},children:Object(c.jsx)(b.a,{className:"bg-primary",children:Object(c.jsx)(l.a,{style:{height:"100%"},children:Object(c.jsxs)(d.a,{style:{height:"100%",justifyContent:"space-between"},noGutters:!0,className:"align-items-center",children:[Object(c.jsx)(b.a,{xs:12,md:12,lg:6,xl:5,children:Object(c.jsxs)("div",{className:"py-5 py-lg-0",children:[Object(c.jsx)("h1",{className:"text-white font-weight-bold",children:"Welcome to Horse Selling Application"}),Object(c.jsx)("p",{className:"text-white-50 mb-4 lead",children:"Hand-picked Sellers and expertly crafted horses, designed for the modern people and basketcases."}),Object(c.jsx)(h.a,{variant:"secondary",style:a,children:"Sell"}),Object(c.jsx)(h.a,{style:a,variant:"light",children:"Browse"})]})}),Object(c.jsx)(b.a,{className:"text-right",xs:12,md:12,lg:6,xl:5,children:Object(c.jsx)("img",{alt:"",width:"300px",src:"https://i.ibb.co/bP0DhqL/Png-Item-372709.png"})})]})})})}),Object(c.jsx)(d.a,{noGutters:!0,children:Object(c.jsx)(b.a,{style:{height:"100px"},className:"py-4 shadow-sm"})}),Object(c.jsx)(Q,{thoughts:t})]})}Y.getInitialProps=function(){var e=Object(n.a)(s.a.mark((function e(t){var a,r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.req,r=a?"".concat(a.protocol,"://").concat(a.get("Host")):"",e.next=4,j()("".concat(r,"/api/thoughts"));case 4:return n=e.sent,e.next=7,n.json();case 7:return e.t0=e.sent,e.abrupt("return",{thoughts:e.t0});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.default=Y},eijD:function(e,t,a){"use strict";function r(e,t,a,r,s,n,c){try{var i=e[n](c),o=i.value}catch(l){return void a(l)}i.done?t(o):Promise.resolve(o).then(r,s)}function s(e){return function(){var t=this,a=arguments;return new Promise((function(s,n){var c=e.apply(t,a);function i(e){r(c,s,n,i,o,"next",e)}function o(e){r(c,s,n,i,o,"throw",e)}i(void 0)}))}}a.d(t,"a",(function(){return s}))},mJN6:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("cMU6")}])}},[["mJN6",0,2,1,3,4]]]);