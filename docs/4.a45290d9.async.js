(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{C1Fs:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__("g09b");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__("qIgq")),_react=_interopRequireWildcard(__webpack_require__("q1tI"));function _getRequireWildcardCache(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(_getRequireWildcardCache=function(e){return e?a:t})(e)}function _interopRequireWildcard(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=_getRequireWildcardCache(t);if(a&&a.has(e))return a.get(e);var r={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var n=u?Object.getOwnPropertyDescriptor(e,l):null;n&&(n.get||n.set)?Object.defineProperty(r,l,n):r[l]=e[l]}return r.default=e,a&&a.set(e,r),r}var App=()=>{var text=(0,_react.useRef)(),_useState=(0,_react.useState)(""),_useState2=(0,_slicedToArray2.default)(_useState,2),result=_useState2[0],setResult=_useState2[1],_useState3=(0,_react.useState)(""),_useState4=(0,_slicedToArray2.default)(_useState3,2),data=_useState4[0],setData=_useState4[1],_useState5=(0,_react.useState)(1),_useState6=(0,_slicedToArray2.default)(_useState5,2),index=_useState6[0],setIndex=_useState6[1],_useState7=(0,_react.useState)(""),_useState8=(0,_slicedToArray2.default)(_useState7,2),appCode=_useState8[0],setAppCode=_useState8[1],_useState9=(0,_react.useState)(""),_useState10=(0,_slicedToArray2.default)(_useState9,2),parentCode=_useState10[0],setParentCode=_useState10[1];function formatRouter(e,t,a,r){var u=[],l={appCode:a,uniqueCode:e.name,parentUniqueCode:r,type:1,level:1,name:e.meta.title,code:e.name,index:t,icon:"",url:"/".concat(e.path),remark:null,isHidden:e.meta.hideMenu?1:0,extra:null};function n(e,t){t.children.forEach(t=>{var r={appCode:a,uniqueCode:t.name,parentUniqueCode:e.uniqueCode,type:1,level:e.level+1,name:t.meta.title,code:t.name,index:100,icon:"",url:"".concat(e.url,"/").concat(t.path),remark:null,isHidden:t.meta.hideMenu?1:0,extra:null};u.push(r),t.children&&n(r,t)})}u.push(l),n(l,e),setResult(JSON.stringify(u))}function onClick(){formatRouter(eval("(".concat(data,")")),index,appCode,parentCode)}return _react.default.createElement("div",null,_react.default.createElement("h6",null,_react.default.createElement("div",null,_react.default.createElement("span",null,"\u6392\u5e8f\uff1a"),_react.default.createElement("input",{type:"text",value:index,onChange:e=>{setIndex(e.target.value)}}))),_react.default.createElement("h6",null,_react.default.createElement("div",null,_react.default.createElement("span",null,"appCode\uff1a"),_react.default.createElement("input",{type:"text",value:appCode,onChange:e=>{setAppCode(e.target.value)}}))),_react.default.createElement("h6",null,_react.default.createElement("div",null,_react.default.createElement("span",null,"parentCode\uff1a"),_react.default.createElement("input",{type:"text",value:parentCode,onChange:e=>{setParentCode(e.target.value)}}))),_react.default.createElement("h6",null,_react.default.createElement("div",null,_react.default.createElement("span",null,"router\u6570\u636e\uff1a"),_react.default.createElement("textarea",{rows:5,value:data,onChange:e=>{setData(e.target.value)}}))),_react.default.createElement("button",{onClick:onClick},"\u8f6c\u6362"),_react.default.createElement("h6",null,_react.default.createElement("div",null,_react.default.createElement("div",null,"\u5bfc\u5165\u7ed3\u679c\uff1a",_react.default.createElement("button",{onClick:()=>{text.current.select(),document.execCommand("copy")}},"\u590d\u5236")),_react.default.createElement("textarea",{ref:text,rows:5,defaultValue:result}))))},_default=App;exports.default=_default}}]);