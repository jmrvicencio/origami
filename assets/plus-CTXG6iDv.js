import{e as A,r as s}from"./index-CpM0zTbw.js";const N=A();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=(...e)=>e.filter((t,o,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===o).join(" ").trim();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,o,r)=>r?r.toUpperCase():o.toLowerCase());/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=e=>{const t=y(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},W=s.createContext({}),v=()=>s.useContext(W),S=s.forwardRef(({color:e,size:t,strokeWidth:o,absoluteStrokeWidth:r,className:n="",children:a,iconNode:m,...l},p)=>{const{size:c=24,strokeWidth:u=2,absoluteStrokeWidth:C=!1,color:x="currentColor",className:f=""}=v()??{},w=r??C?Number(o??u)*24/Number(t??c):o??u;return s.createElement("svg",{ref:p,...i,width:t??c??i.width,height:t??c??i.height,stroke:e??x,strokeWidth:w,className:h("lucide",f,n),...!a&&!L(l)&&{"aria-hidden":"true"},...l},[...m.map(([k,g])=>s.createElement(k,g)),...Array.isArray(a)?a:[a]])});/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=(e,t)=>{const o=s.forwardRef(({className:r,...n},a)=>s.createElement(S,{ref:a,iconNode:t,className:h(`lucide-${b(d(e))}`,`lucide-${e}`,r),...n}));return o.displayName=d(e),o};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],_=E("plus",P);export{_ as P,E as c,N as m};
