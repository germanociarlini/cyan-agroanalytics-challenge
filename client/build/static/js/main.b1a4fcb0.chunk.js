(this["webpackJsonpcyan-frontend-challenge"]=this["webpackJsonpcyan-frontend-challenge"]||[]).push([[0],{116:function(e,t,n){},148:function(e,t,n){},150:function(e,t,n){},151:function(e,t,n){},259:function(e,t,n){},260:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),o=n(25),a=n.n(o),i=(n(116),n(6)),u=n(4),s=n.n(u),l=n(9),j=n(28),f=n(27),d=n(40),b=n.n(d),p=Object(c.createContext)(null),O=Object(c.createContext)([]),h=n(8),v=n(103),x=n.n(v).a.create({baseUrl:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).DATABASE_URL||"http://localhost:3001"}),m=function(e){var t=e.toGeoJSON();return t.properties=Object(h.a)({},e.options),t},y=function(){var e=Object(l.a)(s.a.mark((function e(t){var n,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("/collections/".concat(t.id,"/features"));case 2:return n=e.sent,c={type:"FeatureCollection",features:n.data.map((function(e){return{type:"Feature",properties:Object(h.a)({},e.properties),geometry:e.geometry}}))},e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=(n(148),n(3)),C=function(e){var t=e.isOpen,n=e.onRequestClose,c=e.content;return Object(_.jsxs)(b.a,{className:"modal__content",isOpen:t,onRequestClose:n,style:{overlay:{zIndex:1001},content:{zIndex:1001}},children:[Object(_.jsx)(f.a,{icon:j.c,className:"modal__close-button",onClick:n}),c]})},g=(n(77),n(150),function(e){var t=e.onLoad,n=Object(c.useState)([]),r=Object(i.a)(n,2),o=r[0],a=r[1],u=Object(c.useState)(null),j=Object(i.a)(u,2),f=j[0],d=j[1];Object(c.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("/collections");case 2:t=e.sent,a(t.data.map((function(e){return Object(h.a)(Object(h.a)({},e),{},{updatedAt:new Date(e.updatedAt.replace(" ","T"))})})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var b=function(){t(f)};return Object(_.jsxs)("div",{className:"load-modal__content",children:[Object(_.jsx)("header",{className:"modal__header",children:Object(_.jsx)("h2",{children:"Load Feature Collection"})}),Object(_.jsx)("main",{className:"load-modal__collection-list",children:o.map((function(e){return Object(_.jsxs)("div",{className:"load-modal__collection-item ".concat(e===f?"selected":""),onClick:function(){return function(e){d(e)}(e)},onDoubleClick:b,children:[Object(_.jsx)("span",{children:e.name}),Object(_.jsx)("span",{children:e.updatedAt.toLocaleString("default")})]},e.id)}))}),Object(_.jsx)("footer",{children:Object(_.jsx)("button",{className:"modal__button",onClick:b,disabled:null===f,children:"Load Collection"})})]})}),w=(n(151),function(e){var t=e.onSaveAs,n=e.onOverwrite,r=Object(c.useContext)(p).collection,o=Object(c.useState)(""),a=Object(i.a)(o,2),u=a[0],s=a[1];Object(c.useEffect)((function(){s(r?r.name:"")}),[r]);return Object(_.jsxs)("div",{className:"save-modal__content",children:[Object(_.jsx)("header",{children:Object(_.jsx)("h2",{children:"Save Feature Collection"})}),Object(_.jsx)("main",{children:Object(_.jsx)("input",{className:"save-modal__input",type:"text",value:u,placeholder:"MyCollection...",autoFocus:!0,onChange:function(e){return t=e.target.value,void s(t);var t}})}),Object(_.jsxs)("footer",{children:[r&&Object(_.jsx)("button",{className:"modal__button",disabled:0===u.length,onClick:function(){n(u,r)},children:"Overwrite..."}),Object(_.jsx)("button",{className:"modal__button",disabled:0===u.length,onClick:function(){t(u)},children:"Save as..."})]})]})}),S=function(){var e=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.put("/collections",{name:t});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(l.a)(s.a.mark((function e(t,n){var c,r,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="/collections/".concat(n.id),r={name:t},e.next=4,x.put(c,r);case 4:return o=e.sent,e.abrupt("return",o.data);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),N=function(){var e=Object(l.a)(s.a.mark((function e(t,n){var c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="/collections/".concat(t,"/features"),e.next=3,x.put(c,n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();b.a.setAppElement(document.getElementById("root"));var E=function(){var e=Object(c.useState)(null),t=Object(i.a)(e,2),n=t[0],r=t[1],o=Object(c.useContext)(p),a=o.collection,u=o.setCollection,d=Object(c.useContext)(O).layers,b=function(){var e=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(t);case 2:n=e.sent,v(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(l.a)(s.a.mark((function e(t,n){var c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(t,n);case 2:c=e.sent,v(c);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),v=function(){var e=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=d.map((function(e){return m(e)})),e.next=3,N(t.id,n);case 3:e.sent&&(r(null),u(t));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r(null),u(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=Object(_.jsx)(w,{onSaveAs:b,onOverwrite:h}),E=Object(_.jsx)(g,{onLoad:function(e){return x(e)}}),L=a?"Editing ".concat(a.name):"New Collection";return Object(_.jsxs)("div",{className:"collection-controller__container",children:[Object(_.jsx)("span",{className:"collection-controller__editing-label",children:L}),Object(_.jsxs)("div",{className:"collection-controller_toolbar",children:[Object(_.jsx)("div",{className:"collection-controller_toolbar-button",onClick:function(){return r(y)},children:Object(_.jsx)(f.a,{icon:j.b})}),Object(_.jsx)("div",{className:"collection-controller_toolbar-button",onClick:function(){return r(E)},children:Object(_.jsx)(f.a,{icon:j.a})}),Object(_.jsx)(C,{isOpen:null!==n,onRequestClose:function(){return r(null)},content:n})]})]})},L=n(109),A=n(265),T=n(267),D=n(266),F=n(7),P=n.n(F),R=n(108),I=n(262),z=n(263),B=n(264),M=n(110),J={default:{color:"#000",opacity:.9,fillOpacity:.5,weight:1},polyline:{color:"#000",opacity:.7,weight:4}},U=function(e){var t=e.onCreate,n=e.onEdit,r=e.onDelete,o=Object(c.useState)(null),a=Object(i.a)(o,2),u=a[0],j=a[1],f=Object(c.useState)(null),d=Object(i.a)(f,2),b=d[0],v=d[1],x=Object(c.useState)(J.default.color),m=Object(i.a)(x,2),C=m[0],g=m[1],w=Object(c.useContext)(p).collection,S=Object(c.useContext)(O).setLayers;Object(I.a)({click:function(){v(null)}}),Object(c.useEffect)((function(){null===u||void 0===u||u.clearLayers(),w?function(){var e=Object(l.a)(s.a.mark((function e(t){var n,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],e.next=3,y(t);case 3:c=e.sent,new P.a.GeoJSON(c,{style:function(e){return Object(h.a)({},e.properties)}}).eachLayer((function(e){u.addLayer(e),e.on({click:function(e){v(e.target),g(e.target.options.color)}}),n.push(e)})),S(n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()(w):S([])}),[w]);return Object(_.jsxs)(z.a,{ref:function(e){var t;null!==(t=e)&&j(t)},children:[Object(_.jsx)(M.a,{position:"topright",onCreated:function(e){var n=e.layer,c="polyline"===e.layerType?J.polyline:J.default;n.setStyle(c),n.on({click:function(e){v(e.target),g(e.target.options.color)}}),t(n)},onEdited:function(e){var t=Object.values(e.layers._layers);n(t)},onDeleted:function(e){var t=Object.keys(e.layers._layers).map((function(e){return+e}));r(t)},draw:{circlemarker:!1,marker:!1,circle:!1}}),Object(_.jsx)(B.a,{children:Object(_.jsx)(R.a,{triangle:"hide",color:C,onChangeComplete:function(e){var t=e.hex;b.setStyle(Object(h.a)(Object(h.a)({},b.options),{},{color:t})),g(t),n([b])}})})]})},Z=(n(259),{initialPosition:[-3.731862,-38.526669],initialZoom:12,enableZoomControl:!1}),q=function(){var e=Object(c.useContext)(O).setLayers;return Object(_.jsxs)(A.a,{center:Z.initialPosition,zoom:Z.initialZoom,zoomControl:Z.enableZoomControl,children:[Object(_.jsx)(T.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(_.jsx)(D.a,{position:"bottomleft"}),Object(_.jsx)(U,{onCreate:function(t){return function(t){e((function(e){return[].concat(Object(L.a)(e),[t])}))}(t)},onEdit:function(t){return function(t){e((function(e){return e.map((function(e){return Object.assign(e,t.find((function(t){return t._leaflet_id===e._leaflet_id})))}))}))}(t)},onDelete:function(t){return n=t,void e((function(e){return e.filter((function(e){return!n.includes(e._leaflet_id)}))}));var n}})]})},H=function(){var e=Object(c.useState)(null),t=Object(i.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)([]),a=Object(i.a)(o,2),u=a[0],s=a[1],l=Object(c.useMemo)((function(){return{collection:n,setCollection:r}}),[n,r]),j=Object(c.useMemo)((function(){return{layers:u,setLayers:s}}),[u,s]);return Object(_.jsx)("div",{className:"App",children:Object(_.jsx)(p.Provider,{value:l,children:Object(_.jsxs)(O.Provider,{value:j,children:[Object(_.jsx)(E,{}),Object(_.jsx)(q,{})]})})})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,268)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),o(e),a(e)}))};a.a.render(Object(_.jsx)(r.a.StrictMode,{children:Object(_.jsx)(H,{})}),document.getElementById("root")),K()},77:function(e,t,n){}},[[260,1,2]]]);
//# sourceMappingURL=main.b1a4fcb0.chunk.js.map