(self.webpackChunk=self.webpackChunk||[]).push([[47111],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(y,o(o({ref:t},c),{},{components:n})):r.createElement(y,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},68629:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(44256),a=n(67294);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function o(e){var t=e.children;return a.createElement("div",{className:"docsRating",id:"docsRating"},a.createElement("hr",null),t)}var l=function(){var e=a.useState(!1),t=e[0],n=e[1],r=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":a.createElement(a.Fragment,null,"Is this page useful?",a.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),a.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},s=function(){return a.createElement("p",null,"Let us know how these docs can be improved by",a.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},p=function(){return a.createElement(o,null,a.createElement(s,null),a.createElement(l,null))},c=function(){return a.createElement(o,null,a.createElement(l,null))};const d=function(){return(0,r.fbContent)({internal:a.createElement(p,null),external:a.createElement(c,null)})}},45189:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>c,metadata:()=>d,toc:()=>u,default:()=>y});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=n(68629),l=n(44256),s=["components"],p={id:"use-entrypoint-loader",title:"useEntryPointLoader",slug:"/api-reference/use-entrypoint-loader/",description:"API reference for useEntryPointLoader, a React hook used to load entrypoints in response to user events",keywords:["render-as-you-fetch","entrypoint","preload"]},c=void 0,d={unversionedId:"api-reference/entrypoint-apis/use-entrypoint-loader",id:"api-reference/entrypoint-apis/use-entrypoint-loader",isDocsHomePage:!1,title:"useEntryPointLoader",description:"API reference for useEntryPointLoader, a React hook used to load entrypoints in response to user events",source:"@site/docs/api-reference/entrypoint-apis/use-entrypoint-loader.md",sourceDirName:"api-reference/entrypoint-apis",slug:"/api-reference/use-entrypoint-loader/",permalink:"/docs/next/api-reference/use-entrypoint-loader/",editUrl:"https://github.com/facebook/relay/tree/main/website/docs/api-reference/entrypoint-apis/use-entrypoint-loader.md",version:"current",lastUpdatedBy:"Mofei Zhang",lastUpdatedAt:1635964769,formattedLastUpdatedAt:"11/3/2021",frontMatter:{id:"use-entrypoint-loader",title:"useEntryPointLoader",slug:"/api-reference/use-entrypoint-loader/",description:"API reference for useEntryPointLoader, a React hook used to load entrypoints in response to user events",keywords:["render-as-you-fetch","entrypoint","preload"]},sidebar:"docs",previous:{title:"useSubscription",permalink:"/docs/next/api-reference/use-subscription/"},next:{title:"loadEntryPoint",permalink:"/docs/next/api-reference/load-entrypoint/"}},u=[{value:"<code>useEntryPointLoader</code>",id:"useentrypointloader",children:[{value:"Arguments",id:"arguments",children:[]},{value:"Flow Type Parameters",id:"flow-type-parameters",children:[]},{value:"Return value",id:"return-value",children:[]},{value:"Behavior",id:"behavior",children:[]}]}],m={toc:u};function y(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"useentrypointloader"},(0,i.kt)("inlineCode",{parentName:"h2"},"useEntryPointLoader")),(0,i.kt)("p",null,"Hook used to make it easy to safely work with EntryPoints, while avoiding data leaking into the Relay store. It will keep an EntryPoint reference in state, and dispose of it when it is no longer accessible via state."),(0,i.kt)(l.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.kt)("p",null,"For more information, see the ",(0,i.kt)("a",{parentName:"p",href:"https://www.internalfb.com/intern/wiki/Relay/Guides/entry-points/#loading-entrypoints"},"Loading EntryPoints")," guide.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const {useEntryPointLoader, EntryPointContainer} = require('react-relay');\n\nconst ComponentEntryPoint = require('Component.entrypoint');\n\nfunction EntryPointRevealer(): React.MixedElement {\n  const environmentProvider = useMyEnvironmentProvider();\n  const [\n    entryPointReference,\n    loadEntryPoint,\n    disposeEntryPoint,\n  ] = useEntryPointLoader(environmentProvider, ComponentEntryPoint);\n\n  return (\n    <>\n      {\n        entryPointReference == null && (\n          <Button onClick={() => loadEntryPoint({})}>\n            Click to reveal the contents of the EntryPoint\n          </Button>\n        )\n      }\n      {\n        entryPointReference != null && (\n          <>\n            <Button onClick={disposeEntryPoint}>\n              Click to hide and dispose the EntryPoint.\n            </Button>\n            <Suspense fallback=\"Loading...\">\n              <EntryPointContainer\n                entryPointReference={entryPointReference}\n                props={{}}\n              />\n            </Suspense>\n          </>\n        )\n      }\n    </>\n  );\n}\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"environmentProvider"),": an object with a ",(0,i.kt)("inlineCode",{parentName:"li"},"getEnvironment")," method that returns a relay environment."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EntryPoint"),": the EntryPoint, usually acquired by importing a ",(0,i.kt)("inlineCode",{parentName:"li"},".entrypoint.js")," file.")),(0,i.kt)("h3",{id:"flow-type-parameters"},"Flow Type Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TEntryPointParams"),": the type of the first argument to the ",(0,i.kt)("inlineCode",{parentName:"li"},"getPreloadProps")," method of the EntryPoint."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TPreloadedQueries"),": the type of the ",(0,i.kt)("inlineCode",{parentName:"li"},"queries")," prop passed to the EntryPoint component."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TPreloadedEntryPoints"),": the type of the ",(0,i.kt)("inlineCode",{parentName:"li"},"entryPoints")," prop passed to the EntryPoint component."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TRuntimeProps"),": the type of the ",(0,i.kt)("inlineCode",{parentName:"li"},"props")," prop passed to ",(0,i.kt)("inlineCode",{parentName:"li"},"EntryPointContainer"),". This object is passed down to the EntryPoint component, also as ",(0,i.kt)("inlineCode",{parentName:"li"},"props"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TExtraProps"),": if an EntryPoint's ",(0,i.kt)("inlineCode",{parentName:"li"},"getPreloadProps")," method returns an object with an ",(0,i.kt)("inlineCode",{parentName:"li"},"extraProps")," property, those extra props will be passed to the EntryPoint component as ",(0,i.kt)("inlineCode",{parentName:"li"},"extraProps")," and have type ",(0,i.kt)("inlineCode",{parentName:"li"},"TExtraProps"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TEntryPointComponent"),": the type of the EntryPoint component."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TEntryPoint"),": the type of the EntryPoint.")),(0,i.kt)("h3",{id:"return-value"},"Return value"),(0,i.kt)("p",null,"A tuple containing the following values:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"entryPointReference"),": the EntryPoint reference, or ",(0,i.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"loadEntryPoint"),": a callback that, when executed, will load an EntryPoint, which will be accessible as ",(0,i.kt)("inlineCode",{parentName:"li"},"entryPointReference"),". If a previous EntryPoint was loaded, it will dispose of it. It may throw an error if called during React's render phase.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Parameters",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"params: TEntryPointParams"),": the params passed to the EntryPoint's ",(0,i.kt)("inlineCode",{parentName:"li"},"getPreloadProps")," method."))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"disposeEntryPoint"),": a callback that, when executed, will set ",(0,i.kt)("inlineCode",{parentName:"li"},"entryPointReference")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"null")," and call ",(0,i.kt)("inlineCode",{parentName:"li"},".dispose()")," on it. It has type ",(0,i.kt)("inlineCode",{parentName:"li"},"() => void"),". It should not be called during React's render phase.")),(0,i.kt)("h3",{id:"behavior"},"Behavior"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When the ",(0,i.kt)("inlineCode",{parentName:"li"},"loadEntryPoint")," callback is called, each of an EntryPoint's associated queries (if it has any) will load their query data and query AST. Once both the query AST and the data are available, the data will be written to the store. This differs from the behavior of ",(0,i.kt)("inlineCode",{parentName:"li"},"prepareEntryPoint_DEPRECATED"),", which would only write the data from an associated query to the store when that query was rendered with ",(0,i.kt)("inlineCode",{parentName:"li"},"usePreloadedQuery"),"."),(0,i.kt)("li",{parentName:"ul"},"The EntryPoint reference's associated query references will be retained by the Relay store, preventing it the data from being garbage collected. Once you call ",(0,i.kt)("inlineCode",{parentName:"li"},".dispose()")," on the EntryPoint reference, the data from the associated queries is liable to be garbage collected."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"loadEntryPoint")," callback may throw an error if it is called during React's render phase.")),(0,i.kt)(o.Z,{mdxType:"DocsRating"}))}y.isMDXComponent=!0}}]);