import{r as y,_ as b,C as T,a as S,E as W,b as Ie,F as Y,L as ye,c as D,i as be,d as Te,v as Ae,e as q,f as ve,h as Se,j as ke,k as Ce,l as Ee,G as Re}from"./firebase-D66Ql5mr.js";import{e as Pe,u as L,f as _e,n as De}from"./index-DOWsnNlE.js";const J="@firebase/installations",F="0.6.22";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X=1e4,Q=`w:${F}`,Z="FIS_v2",Fe="https://firebaseinstallations.googleapis.com/v1",Ne=60*60*1e3,Me="installations",Oe="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},m=new W(Me,Oe,$e);function ee(e){return e instanceof Y&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te({projectId:e}){return`${Fe}/projects/${e}/installations`}function ne(e){return{token:e.token,requestStatus:2,expiresIn:qe(e.expiresIn),creationTime:Date.now()}}async function ae(e,t){const a=(await t.json()).error;return m.create("request-failed",{requestName:e,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})}function ie({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function xe(e,{refreshToken:t}){const n=ie(e);return n.append("Authorization",Le(t)),n}async function se(e){const t=await e();return t.status>=500&&t.status<600?e():t}function qe(e){return Number(e.replace("s","000"))}function Le(e){return`${Z} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function je({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const a=te(e),i=ie(e),s=t.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const r={fid:n,authVersion:Z,appId:e.appId,sdkVersion:Q},o={method:"POST",headers:i,body:JSON.stringify(r)},c=await se(()=>fetch(a,o));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:ne(l.authToken)}}else throw await ae("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue=/^[cdef][\w-]{21}$/,_="";function Ve(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Ge(e);return Ue.test(n)?n:_}catch{return _}}function Ge(e){return Be(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe=new Map;function ce(e,t){const n=k(e);le(n,t),ze(n,t)}function le(e,t){const n=oe.get(e);if(n)for(const a of n)a(t)}function ze(e,t){const n=Ke();n&&n.postMessage({key:e,fid:t}),He()}let h=null;function Ke(){return!h&&"BroadcastChannel"in self&&(h=new BroadcastChannel("[Firebase] FID Change"),h.onmessage=e=>{le(e.data.key,e.data.fid)}),h}function He(){oe.size===0&&h&&(h.close(),h=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We="firebase-installations-database",Ye=1,w="firebase-installations-store";let E=null;function N(){return E||(E=Ie(We,Ye,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(w)}}})),E}async function A(e,t){const n=k(e),i=(await N()).transaction(w,"readwrite"),s=i.objectStore(w),r=await s.get(n);return await s.put(t,n),await i.done,(!r||r.fid!==t.fid)&&ce(e,t.fid),t}async function ue(e){const t=k(e),a=(await N()).transaction(w,"readwrite");await a.objectStore(w).delete(t),await a.done}async function C(e,t){const n=k(e),i=(await N()).transaction(w,"readwrite"),s=i.objectStore(w),r=await s.get(n),o=t(r);return o===void 0?await s.delete(n):await s.put(o,n),await i.done,o&&(!r||r.fid!==o.fid)&&ce(e,o.fid),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M(e){let t;const n=await C(e.appConfig,a=>{const i=Je(a),s=Xe(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===_?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Je(e){const t=e||{fid:Ve(),registrationStatus:0};return de(t)}function Xe(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(m.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},a=Qe(e,n);return{installationEntry:n,registrationPromise:a}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Ze(e)}:{installationEntry:t}}async function Qe(e,t){try{const n=await je(e,t);return A(e.appConfig,n)}catch(n){throw ee(n)&&n.customData.serverCode===409?await ue(e.appConfig):await A(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Ze(e){let t=await j(e.appConfig);for(;t.registrationStatus===1;)await re(100),t=await j(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:a}=await M(e);return a||n}return t}function j(e){return C(e,t=>{if(!t)throw m.create("installation-not-found");return de(t)})}function de(e){return et(e)?{fid:e.fid,registrationStatus:0}:e}function et(e){return e.registrationStatus===1&&e.registrationTime+X<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tt({appConfig:e,heartbeatServiceProvider:t},n){const a=nt(e,n),i=xe(e,n),s=t.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const r={installation:{sdkVersion:Q,appId:e.appId}},o={method:"POST",headers:i,body:JSON.stringify(r)},c=await se(()=>fetch(a,o));if(c.ok){const l=await c.json();return ne(l)}else throw await ae("Generate Auth Token",c)}function nt(e,{fid:t}){return`${te(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O(e,t=!1){let n;const a=await C(e.appConfig,s=>{if(!fe(s))throw m.create("not-registered");const r=s.authToken;if(!t&&st(r))return s;if(r.requestStatus===1)return n=at(e,t),s;{if(!navigator.onLine)throw m.create("app-offline");const o=ot(s);return n=it(e,o),o}});return n?await n:a.authToken}async function at(e,t){let n=await B(e.appConfig);for(;n.authToken.requestStatus===1;)await re(100),n=await B(e.appConfig);const a=n.authToken;return a.requestStatus===0?O(e,t):a}function B(e){return C(e,t=>{if(!fe(t))throw m.create("not-registered");const n=t.authToken;return ct(n)?{...t,authToken:{requestStatus:0}}:t})}async function it(e,t){try{const n=await tt(e,t),a={...t,authToken:n};return await A(e.appConfig,a),n}catch(n){if(ee(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ue(e.appConfig);else{const a={...t,authToken:{requestStatus:0}};await A(e.appConfig,a)}throw n}}function fe(e){return e!==void 0&&e.registrationStatus===2}function st(e){return e.requestStatus===2&&!rt(e)}function rt(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Ne}function ot(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}function ct(e){return e.requestStatus===1&&e.requestTime+X<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lt(e){const t=e,{installationEntry:n,registrationPromise:a}=await M(t);return a?a.catch(console.error):O(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ut(e,t=!1){const n=e;return await dt(n),(await O(n,t)).token}async function dt(e){const{registrationPromise:t}=await M(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(e){if(!e||!e.options)throw R("App Configuration");if(!e.name)throw R("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw R(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function R(e){return m.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe="installations",pt="installations-internal",gt=e=>{const t=e.getProvider("app").getImmediate(),n=ft(t),a=S(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:a,_delete:()=>Promise.resolve()}},ht=e=>{const t=e.getProvider("app").getImmediate(),n=S(t,pe).getImmediate();return{getId:()=>lt(n),getToken:i=>ut(n,i)}};function mt(){b(new T(pe,gt,"PUBLIC")),b(new T(pt,ht,"PRIVATE"))}mt();y(J,F);y(J,F,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v="analytics",wt="firebase_id",It="origin",yt=60*1e3,bt="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",$="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u=new ye("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},d=new W("analytics","Analytics",Tt);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(e){if(!e.startsWith($)){const t=d.create("invalid-gtag-resource",{gtagURL:e});return u.warn(t.message),""}return e}function ge(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function vt(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function St(e,t){const n=vt("firebase-js-sdk-policy",{createScriptURL:At}),a=document.createElement("script"),i=`${$}?l=${e}&id=${t}`;a.src=n?n==null?void 0:n.createScriptURL(i):i,a.async=!0,document.head.appendChild(a)}function kt(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Ct(e,t,n,a,i,s){const r=a[i];try{if(r)await t[r];else{const c=(await ge(n)).find(l=>l.measurementId===i);c&&await t[c.appId]}}catch(o){u.error(o)}e("config",i,s)}async function Et(e,t,n,a,i){try{let s=[];if(i&&i.send_to){let r=i.send_to;Array.isArray(r)||(r=[r]);const o=await ge(n);for(const c of r){const l=o.find(p=>p.measurementId===c),f=l&&t[l.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",a,i||{})}catch(s){u.error(s)}}function Rt(e,t,n,a){async function i(s,...r){try{if(s==="event"){const[o,c]=r;await Et(e,t,n,o,c)}else if(s==="config"){const[o,c]=r;await Ct(e,t,n,a,o,c)}else if(s==="consent"){const[o,c]=r;e("consent",o,c)}else if(s==="get"){const[o,c,l]=r;e("get",o,c,l)}else if(s==="set"){const[o]=r;e("set",o)}else e(s,...r)}catch(o){u.error(o)}}return i}function Pt(e,t,n,a,i){let s=function(...r){window[a].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=Rt(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function _t(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes($)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt=30,Ft=1e3;class Nt{constructor(t={},n=Ft){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const he=new Nt;function Mt(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Ot(e){var r;const{appId:t,apiKey:n}=e,a={method:"GET",headers:Mt(n)},i=bt.replace("{app-id}",t),s=await fetch(i,a);if(s.status!==200&&s.status!==304){let o="";try{const c=await s.json();(r=c.error)!=null&&r.message&&(o=c.error.message)}catch{}throw d.create("config-fetch-failed",{httpStatus:s.status,responseMessage:o})}return s.json()}async function $t(e,t=he,n){const{appId:a,apiKey:i,measurementId:s}=e.options;if(!a)throw d.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:a};throw d.create("no-api-key")}const r=t.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new Lt;return setTimeout(async()=>{o.abort()},yt),me({appId:a,apiKey:i,measurementId:s},r,o,t)}async function me(e,{throttleEndTimeMillis:t,backoffCount:n},a,i=he){var o;const{appId:s,measurementId:r}=e;try{await xt(a,t)}catch(c){if(r)return u.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${r} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:s,measurementId:r};throw c}try{const c=await Ot(e);return i.deleteThrottleMetadata(s),c}catch(c){const l=c;if(!qt(l)){if(i.deleteThrottleMetadata(s),r)return u.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${r} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:r};throw c}const f=Number((o=l==null?void 0:l.customData)==null?void 0:o.httpStatus)===503?q(n,i.intervalMillis,Dt):q(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(s,p),u.debug(`Calling attemptFetch again in ${f} millis`),me(e,p,a,i)}}function xt(e,t){return new Promise((n,a)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),a(d.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function qt(e){if(!(e instanceof Y)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Lt{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function jt(e,t,n,a,i){if(i&&i.global){e("event",n,a);return}else{const s=await t,r={...a,send_to:s};e("event",n,r)}}async function Bt(e,t,n,a){if(a&&a.global){const i={};for(const s of Object.keys(n))i[`user_properties.${s}`]=n[s];return e("set",i),Promise.resolve()}else{const i=await t;e("config",i,{update:!0,user_properties:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ut(){if(Te())try{await Ae()}catch(e){return u.warn(d.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return u.warn(d.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Vt(e,t,n,a,i,s,r){const o=$t(e);o.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&u.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>u.error(g)),t.push(o);const c=Ut().then(g=>{if(g)return a.getId()}),[l,f]=await Promise.all([o,c]);_t(s)||St(s,l.measurementId),i("js",new Date);const p=(r==null?void 0:r.config)??{};return p[It]="firebase",p.update=!0,f!=null&&(p[wt]=f),i("config",l.measurementId,p),l.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(t){this.app=t}_delete(){return delete I[this.app.options.appId],Promise.resolve()}}let I={},U=[];const V={};let P="dataLayer",zt="gtag",G,x,z=!1;function Kt(){const e=[];if(be()&&e.push("This is a browser extension environment."),ke()||e.push("Cookies are not available."),e.length>0){const t=e.map((a,i)=>`(${i+1}) ${a}`).join(" "),n=d.create("invalid-analytics-context",{errorInfo:t});u.warn(n.message)}}function Ht(e,t,n){Kt();const a=e.options.appId;if(!a)throw d.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)u.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw d.create("no-api-key");if(I[a]!=null)throw d.create("already-exists",{id:a});if(!z){kt(P);const{wrappedGtag:s,gtagCore:r}=Pt(I,U,V,P,zt);x=s,G=r,z=!0}return I[a]=Vt(e,U,V,t,G,P,n),new Gt(e)}function Wt(e=ve()){e=D(e);const t=S(e,v);return t.isInitialized()?t.getImmediate():Yt(e)}function Yt(e,t={}){const n=S(e,v);if(n.isInitialized()){const i=n.getImmediate();if(Se(t,n.getOptions()))return i;throw d.create("already-initialized")}return n.initialize({options:t})}function Jt(e,t,n){e=D(e),Bt(x,I[e.app.options.appId],t,n).catch(a=>u.error(a))}function Xt(e,t,n,a){e=D(e),jt(x,I[e.app.options.appId],t,n,a).catch(i=>u.error(i))}const K="@firebase/analytics",H="0.10.22";function Qt(){b(new T(v,(t,{options:n})=>{const a=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return Ht(a,i,n)},"PUBLIC")),b(new T("analytics-internal",e,"PRIVATE")),y(K,H),y(K,H,"esm2020");function e(t){try{const n=t.getProvider(v).getImmediate();return{logEvent:(a,i,s)=>Xt(n,a,i,s),setUserProperties:(a,i)=>Jt(n,a,i)}}catch(n){throw d.create("interop-component-reg-failed",{reason:n})}}}Qt();const Zt={apiKey:"AIzaSyBrN3xcDqdVAJEGYpvXb-3r_hKIL_UrqCA",authDomain:"origami-ddde3.firebaseapp.com",projectId:"origami-ddde3",storageBucket:"origami-ddde3.firebasestorage.app",messagingSenderId:"11246339329",appId:"1:11246339329:web:2d68441056aa4351c80700",measurementId:"G-N0WJN4VJ51"},we=Ce(Zt);Wt(we);const en=Ee(we);en.languageCode="en";console.log("use auth emulator: ","false");const tn=new Re;tn.setCustomParameters({prompt:"select_account"});const sn=()=>{const e=Pe(),t=L(_e),n=L(De);return a=>{t(!0),n(!1),e(a)}};export{en as a,tn as p,sn as u};
