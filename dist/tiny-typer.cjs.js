"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),y=[{order:0,toolbarItems:[{id:"undo",order:0,name:"Undo",icon:"icon-undo",functionName:"undoRedo"},{id:"redo",order:1,name:"Redo",icon:"icon-redo",functionName:"undoRedo"}]},{order:1,toolbarItems:[{id:"bold",order:0,name:"Bold",icon:"icon-bold",functionName:"toggleFormat"},{id:"italic",order:1,name:"Italic",icon:"icon-italic",functionName:"toggleFormat"},{id:"strikeThrough",order:2,name:"Strike",icon:"icon-strike",functionName:"toggleFormat"},{id:"underline",order:3,name:"Underline",icon:"icon-underline",functionName:"toggleFormat"}]}],f={toggleFormat:t=>{document.execCommand(t)},undoRedo:t=>{document.execCommand(t)}};function _({content:t,editorRef:o}){const c=e.computed(()=>y),a=(n,i)=>{f[n](i)},s=e.computed(()=>({content:t,editorRef:o}));return{getToolBarItems:c,getInstances:s,handleEnterKey:n=>{n.key==="Enter"&&(n.preventDefault(),document.execCommand("insertHTML",!1,"<br><br>"))},setEditorRef:()=>{o.value=document.querySelector(".tiny-typer-content")},callFunction:a,getContent:()=>{const n=o.value;if(n){const i=document.createRange(),d=document.getSelection();return i.selectNodeContents(n),i.collapse(!1),d==null||d.removeAllRanges(),d==null||d.addRange(i),n==null?void 0:n.innerHTML}return""}}}const T={class:"tiny-typer-toolbar"},g={class:"tiny-typer-toolbar-nav"},b=["onClick"],m=e.defineComponent({__name:"TinyTyperToolbar",setup(t){const{getToolBarItems:o,callFunction:c}=e.inject("tinyTyper");return(a,s)=>(e.openBlock(),e.createElementBlock("div",T,[e.createElementVNode("div",g,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(o),r=>(e.openBlock(),e.createElementBlock("ul",{class:"tiny-typer-toolbar-nav-item",key:r.order},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(r.toolbarItems,l=>(e.openBlock(),e.createElementBlock("li",{key:l.order},[e.createElementVNode("button",{onClick:u=>e.unref(c)(l.functionName,l.id)},e.toDisplayString(l.name),9,b)]))),128))]))),128))])]))}}),k=t=>(e.pushScopeId("data-v-6b2cb368"),t=t(),e.popScopeId(),t),E={class:"tiny-typer-wrapper"},v=["innerHTML"],B=k(()=>e.createElementVNode("div",{class:"tiny-typer-footer"},[e.createElementVNode("span",{class:"tiny-typer-copyright"},"TinyTyper")],-1)),h=e.defineComponent({__name:"TinyTyperBase",emits:["onInput","onFocusOut"],setup(t,{emit:o}){const c=e.ref(""),a=e.ref(null),s=o,r=_({content:c,editorRef:a});e.provide("tinyTyper",r);const l=()=>{const u=r.getContent();s("onInput",u)};return(u,n)=>(e.openBlock(),e.createElementBlock("div",E,[e.createVNode(m),e.createElementVNode("div",{id:"tinyTyperEditor",class:"tiny-typer-content",contenteditable:"true",onInput:l,onKeydown:n[0]||(n[0]=e.withKeys(e.withModifiers((...i)=>e.unref(r).handleEnterKey&&e.unref(r).handleEnterKey(...i),["prevent"]),["enter"])),innerHTML:c.value,onMousedown:n[1]||(n[1]=(...i)=>e.unref(r).setEditorRef&&e.unref(r).setEditorRef(...i))},null,40,v),B]))}}),N=(t,o)=>{const c=t.__vccOpts||t;for(const[a,s]of o)c[a]=s;return c},p=N(h,[["__scopeId","data-v-6b2cb368"]]),I=Object.freeze(Object.defineProperty({__proto__:null,TinyTyperBase:p,TinyTyperToolbar:m},Symbol.toStringTag,{value:"Module"}));function C(t){for(const o in I)(void 0)(o)}const F={install:C};exports.TinyTyperBase=p;exports.TinyTyperToolbar=m;exports.default=F;
