(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./docz/examples/06-example-filtering.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return j});var r=t("./node_modules/docz-core/node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),i=t.n(r),a=t("./node_modules/docz-core/node_modules/@babel/runtime/helpers/classCallCheck.js"),o=t.n(a),l=t("./node_modules/docz-core/node_modules/@babel/runtime/helpers/createClass.js"),s=t.n(l),d=t("./node_modules/docz-core/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),m=t.n(d),u=t("./node_modules/docz-core/node_modules/@babel/runtime/helpers/getPrototypeOf.js"),c=t.n(u),p=t("./node_modules/docz-core/node_modules/@babel/runtime/helpers/inherits.js"),b=t.n(p),h=t("./node_modules/react/index.js"),_=t.n(h),f=t("./node_modules/@mdx-js/tag/dist/index.js"),y=t("./node_modules/docz/dist/index.m.js"),g=t("./src/material-table.js"),j=function(e){function n(e){var t;return o()(this,n),(t=m()(this,c()(n).call(this,e))).layout=null,t}return b()(n,e),s()(n,[{key:"render",value:function(){var e=this.props,n=e.components,t=i()(e,["components"]);return _.a.createElement(f.MDXTag,{name:"wrapper",components:n},_.a.createElement(f.MDXTag,{name:"h2",components:n,props:{id:"filtering-example"}},"Filtering Example"),_.a.createElement(y.e,{__codesandbox:"undefined",__position:0,__code:"<MaterialTable\n  columns={[\n    { title: 'Name', field: 'name' },\n    { title: 'Surname', field: 'surname' },\n    { title: 'Birth Year', field: 'birthYear', type: 'numeric' },\n    {\n      title: 'Birth Place',\n      field: 'birthCity',\n      lookup: { 34: '\u0130stanbul', 63: '\u015eanl\u0131urfa' },\n    },\n  ]}\n  data={[\n    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },\n    { name: 'Zerya Bet\xfcl', surname: 'Baran', birthYear: 2017, birthCity: 34 },\n  ]}\n  title=\"Filtering\"\n  options={{\n    filtering: true,\n  }}\n/>",__scope:{props:this?this.props:t,MaterialTable:g.b}},_.a.createElement(g.b,{columns:[{title:"Name",field:"name"},{title:"Surname",field:"surname"},{title:"Birth Year",field:"birthYear",type:"numeric"},{title:"Birth Place",field:"birthCity",lookup:{34:"\u0130stanbul",63:"\u015eanl\u0131urfa"}}],data:[{name:"Mehmet",surname:"Baran",birthYear:1987,birthCity:63},{name:"Zerya Bet\xfcl",surname:"Baran",birthYear:2017,birthCity:34}],title:"Filtering",options:{filtering:!0}})))}}]),n}(_.a.Component);j.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=docz-examples-06-example-filtering.fa9336432047c07fa7d0.js.map