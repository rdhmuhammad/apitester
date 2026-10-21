import{j as g,P as GS,S as xv,D as pv,a as mv,b as gv,c as vv,d as yv,e as bv,f as Sv,g as qS,h as VS,i as KS,k as YS,l as JS,m as QS,n as ZS,o as $S,p as e3,q as t3,r as n3,s as r3,t as a3,u as s3,R as i3,C as l3,T as o3,v as c3,w as f3,x as u3,O as d3,y as h3,L as x3,z as p3,A as m3,B as g3,E as v3,F as y3,G as b3,H as S3,I as _3}from"./vendor-radix-Ct2LXVCH.js";import{b as C3,d as E3,r as te,T as w3,X as ma,e as A3,S as Gd,F as T3,f as ga,C as Lc,h as k3,i as D3,j as B3,k as F3,l as qd,m as R3,t as Ja,n as N3,o as O3,p as M3,P as Ws,M as L3,q as _v,s as j3,u as Fm,v as I3,w as H3,E as jc,x as Ic,y as hc,L as z3,G as U3,B as W3,z as P3,A as X3,D as G3,H as q3,I as V3,J as K3,K as Y3,N as J3,O as Hc,Q as zc,U as Q3,V as Z3,W as $3,Y as e_,Z as t_}from"./vendor-misc-CJz51Esd.js";import{u as n_,a as r_,c as a_,b as Vd,e as s_,d as i_,P as l_}from"./vendor-redux-uS_TKClz.js";import{u as o_,N as c_,a as f_,b as Cv,O as Ev,c as u_,R as d_}from"./vendor-router-C4_oGhIZ.js";import{c as wv}from"./vendor-charts-BybdJvdG.js";import{S as Ps,g as Av,E as Mr,a as h_,s as x_,b as Wn,P as p_,c as Tv,d as kv,F as Kd,e as Yd,V as Jd,D as tn,f as m_,h as g_,i as v_,R as Dv,j as jt,r as y_,C as br,k as b_,l as Bv,t as S_,m as Rm,n as __,o as C_,p as E_,q as w_,u as A_,v as T_,w as k_,x as D_,W as B_,y as F_}from"./vendor-editor-6GJiszZB.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function r(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerPolicy&&(c.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?c.credentials="include":i.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(i){if(i.ep)return;i.ep=!0;const c=r(i);fetch(i.href,c)}})();var sd={exports:{}},V0={},id={exports:{}},ld={};var Nm;function R_(){return Nm||(Nm=1,(function(e){function n(X,ee){var we=X.length;X.push(ee);e:for(;0<we;){var K=we-1>>>1,ne=X[K];if(0<i(ne,ee))X[K]=ee,X[we]=ne,we=K;else break e}}function r(X){return X.length===0?null:X[0]}function s(X){if(X.length===0)return null;var ee=X[0],we=X.pop();if(we!==ee){X[0]=we;e:for(var K=0,ne=X.length,Te=ne>>>1;K<Te;){var O=2*(K+1)-1,J=X[O],P=O+1,G=X[P];if(0>i(J,we))P<ne&&0>i(G,J)?(X[K]=G,X[P]=we,K=P):(X[K]=J,X[O]=we,K=O);else if(P<ne&&0>i(G,we))X[K]=G,X[P]=we,K=P;else break e}}return ee}function i(X,ee){var we=X.sortIndex-ee.sortIndex;return we!==0?we:X.id-ee.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;e.unstable_now=function(){return c.now()}}else{var f=Date,u=f.now();e.unstable_now=function(){return f.now()-u}}var h=[],x=[],m=1,v=null,y=3,_=!1,E=!1,b=!1,C=!1,D=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function H(X){for(var ee=r(x);ee!==null;){if(ee.callback===null)s(x);else if(ee.startTime<=X)s(x),ee.sortIndex=ee.expirationTime,n(h,ee);else break;ee=r(x)}}function V(X){if(b=!1,H(X),!E)if(r(h)!==null)E=!0,z||(z=!0,L());else{var ee=r(x);ee!==null&&me(V,ee.startTime-X)}}var z=!1,R=-1,W=5,U=-1;function fe(){return C?!0:!(e.unstable_now()-U<W)}function Z(){if(C=!1,z){var X=e.unstable_now();U=X;var ee=!0;try{e:{E=!1,b&&(b=!1,k(R),R=-1),_=!0;var we=y;try{t:{for(H(X),v=r(h);v!==null&&!(v.expirationTime>X&&fe());){var K=v.callback;if(typeof K=="function"){v.callback=null,y=v.priorityLevel;var ne=K(v.expirationTime<=X);if(X=e.unstable_now(),typeof ne=="function"){v.callback=ne,H(X),ee=!0;break t}v===r(h)&&s(h),H(X)}else s(h);v=r(h)}if(v!==null)ee=!0;else{var Te=r(x);Te!==null&&me(V,Te.startTime-X),ee=!1}}break e}finally{v=null,y=we,_=!1}ee=void 0}}finally{ee?L():z=!1}}}var L;if(typeof w=="function")L=function(){w(Z)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,Ce=de.port2;de.port1.onmessage=Z,L=function(){Ce.postMessage(null)}}else L=function(){D(Z,0)};function me(X,ee){R=D(function(){X(e.unstable_now())},ee)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(X){X.callback=null},e.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<X?Math.floor(1e3/X):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_next=function(X){switch(y){case 1:case 2:case 3:var ee=3;break;default:ee=y}var we=y;y=ee;try{return X()}finally{y=we}},e.unstable_requestPaint=function(){C=!0},e.unstable_runWithPriority=function(X,ee){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var we=y;y=X;try{return ee()}finally{y=we}},e.unstable_scheduleCallback=function(X,ee,we){var K=e.unstable_now();switch(typeof we=="object"&&we!==null?(we=we.delay,we=typeof we=="number"&&0<we?K+we:K):we=K,X){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=we+ne,X={id:m++,callback:ee,priorityLevel:X,startTime:we,expirationTime:ne,sortIndex:-1},we>K?(X.sortIndex=we,n(x,X),r(h)===null&&X===r(x)&&(b?(k(R),R=-1):b=!0,me(V,we-K))):(X.sortIndex=ne,n(h,X),E||_||(E=!0,z||(z=!0,L()))),X},e.unstable_shouldYield=fe,e.unstable_wrapCallback=function(X){var ee=y;return function(){var we=y;y=ee;try{return X.apply(this,arguments)}finally{y=we}}}})(ld)),ld}var Om;function N_(){return Om||(Om=1,id.exports=R_()),id.exports}var Mm;function O_(){if(Mm)return V0;Mm=1;var e=N_(),n=C3(),r=E3();function s(t){var a="https://react.dev/errors/"+t;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)a+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var a=t,l=t;if(t.alternate)for(;a.return;)a=a.return;else{t=a;do a=t,(a.flags&4098)!==0&&(l=a.return),t=a.return;while(t)}return a.tag===3?l:null}function f(t){if(t.tag===13){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function u(t){if(t.tag===31){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function h(t){if(c(t)!==t)throw Error(s(188))}function x(t){var a=t.alternate;if(!a){if(a=c(t),a===null)throw Error(s(188));return a!==t?null:t}for(var l=t,o=a;;){var d=l.return;if(d===null)break;var p=d.alternate;if(p===null){if(o=d.return,o!==null){l=o;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===l)return h(d),t;if(p===o)return h(d),a;p=p.sibling}throw Error(s(188))}if(l.return!==o.return)l=d,o=p;else{for(var S=!1,T=d.child;T;){if(T===l){S=!0,l=d,o=p;break}if(T===o){S=!0,o=d,l=p;break}T=T.sibling}if(!S){for(T=p.child;T;){if(T===l){S=!0,l=p,o=d;break}if(T===o){S=!0,o=p,l=d;break}T=T.sibling}if(!S)throw Error(s(189))}}if(l.alternate!==o)throw Error(s(190))}if(l.tag!==3)throw Error(s(188));return l.stateNode.current===l?t:a}function m(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t;for(t=t.child;t!==null;){if(a=m(t),a!==null)return a;t=t.sibling}return null}var v=Object.assign,y=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),k=Symbol.for("react.consumer"),w=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),fe=Symbol.for("react.memo_cache_sentinel"),Z=Symbol.iterator;function L(t){return t===null||typeof t!="object"?null:(t=Z&&t[Z]||t["@@iterator"],typeof t=="function"?t:null)}var de=Symbol.for("react.client.reference");function Ce(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===de?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case b:return"Fragment";case D:return"Profiler";case C:return"StrictMode";case V:return"Suspense";case z:return"SuspenseList";case U:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case w:return t.displayName||"Context";case k:return(t._context.displayName||"Context")+".Consumer";case H:var a=t.render;return t=t.displayName,t||(t=a.displayName||a.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case R:return a=t.displayName||null,a!==null?a:Ce(t.type)||"Memo";case W:a=t._payload,t=t._init;try{return Ce(t(a))}catch{}}return null}var me=Array.isArray,X=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,we={pending:!1,data:null,method:null,action:null},K=[],ne=-1;function Te(t){return{current:t}}function O(t){0>ne||(t.current=K[ne],K[ne]=null,ne--)}function J(t,a){ne++,K[ne]=t.current,t.current=a}var P=Te(null),G=Te(null),ue=Te(null),he=Te(null);function ve(t,a){switch(J(ue,a),J(G,t),J(P,null),a.nodeType){case 9:case 11:t=(t=a.documentElement)&&(t=t.namespaceURI)?em(t):0;break;default:if(t=a.tagName,a=a.namespaceURI)a=em(a),t=tm(a,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}O(P),J(P,t)}function ye(){O(P),O(G),O(ue)}function _e(t){t.memoizedState!==null&&J(he,t);var a=P.current,l=tm(a,t.type);a!==l&&(J(G,t),J(P,l))}function Pe(t){G.current===t&&(O(P),O(G)),he.current===t&&(O(he),P0._currentValue=we)}var I,st;function Ue(t){if(I===void 0)try{throw Error()}catch(l){var a=l.stack.trim().match(/\n( *(at )?)/);I=a&&a[1]||"",st=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+I+t+st}var it=!1;function qe(t,a){if(!t||it)return"";it=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(a){var Se=function(){throw Error()};if(Object.defineProperty(Se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Se,[])}catch(xe){var oe=xe}Reflect.construct(t,[],Se)}else{try{Se.call()}catch(xe){oe=xe}t.call(Se.prototype)}}else{try{throw Error()}catch(xe){oe=xe}(Se=t())&&typeof Se.catch=="function"&&Se.catch(function(){})}}catch(xe){if(xe&&oe&&typeof xe.stack=="string")return[xe.stack,oe.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=o.DetermineComponentFrameRoot(),S=p[0],T=p[1];if(S&&T){var q=S.split(`
`),ae=T.split(`
`);for(d=o=0;o<q.length&&!q[o].includes("DetermineComponentFrameRoot");)o++;for(;d<ae.length&&!ae[d].includes("DetermineComponentFrameRoot");)d++;if(o===q.length||d===ae.length)for(o=q.length-1,d=ae.length-1;1<=o&&0<=d&&q[o]!==ae[d];)d--;for(;1<=o&&0<=d;o--,d--)if(q[o]!==ae[d]){if(o!==1||d!==1)do if(o--,d--,0>d||q[o]!==ae[d]){var pe=`
`+q[o].replace(" at new "," at ");return t.displayName&&pe.includes("<anonymous>")&&(pe=pe.replace("<anonymous>",t.displayName)),pe}while(1<=o&&0<=d);break}}}finally{it=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?Ue(l):""}function Be(t,a){switch(t.tag){case 26:case 27:case 5:return Ue(t.type);case 16:return Ue("Lazy");case 13:return t.child!==a&&a!==null?Ue("Suspense Fallback"):Ue("Suspense");case 19:return Ue("SuspenseList");case 0:case 15:return qe(t.type,!1);case 11:return qe(t.type.render,!1);case 1:return qe(t.type,!0);case 31:return Ue("Activity");default:return""}}function Ct(t){try{var a="",l=null;do a+=Be(t,l),l=t,t=t.return;while(t);return a}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var an=Object.prototype.hasOwnProperty,gn=e.unstable_scheduleCallback,De=e.unstable_cancelCallback,ze=e.unstable_shouldYield,mt=e.unstable_requestPaint,je=e.unstable_now,Ot=e.unstable_getCurrentPriorityLevel,Pn=e.unstable_ImmediatePriority,Ca=e.unstable_UserBlockingPriority,Xt=e.unstable_NormalPriority,ar=e.unstable_LowPriority,Qe=e.unstable_IdlePriority,Nt=e.log,Nn=e.unstable_setDisableYieldValue,Tt=null,zt=null;function Cr(t){if(typeof Nt=="function"&&Nn(t),zt&&typeof zt.setStrictMode=="function")try{zt.setStrictMode(Tt,t)}catch{}}var An=Math.clz32?Math.clz32:Ol,Kc=Math.log,Nl=Math.LN2;function Ol(t){return t>>>=0,t===0?32:31-(Kc(t)/Nl|0)|0}var ls=256,Zs=262144,$s=4194304;function sr(t){var a=t&42;if(a!==0)return a;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ei(t,a,l){var o=t.pendingLanes;if(o===0)return 0;var d=0,p=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var T=o&134217727;return T!==0?(o=T&~p,o!==0?d=sr(o):(S&=T,S!==0?d=sr(S):l||(l=T&~t,l!==0&&(d=sr(l))))):(T=o&~p,T!==0?d=sr(T):S!==0?d=sr(S):l||(l=o&~t,l!==0&&(d=sr(l)))),d===0?0:a!==0&&a!==d&&(a&p)===0&&(p=d&-d,l=a&-a,p>=l||p===32&&(l&4194048)!==0)?a:d}function os(t,a){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&a)===0}function Yc(t,a){switch(t){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ml(){var t=$s;return $s<<=1,($s&62914560)===0&&($s=4194304),t}function n0(t){for(var a=[],l=0;31>l;l++)a.push(t);return a}function cs(t,a){t.pendingLanes|=a,a!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Jc(t,a,l,o,d,p){var S=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var T=t.entanglements,q=t.expirationTimes,ae=t.hiddenUpdates;for(l=S&~l;0<l;){var pe=31-An(l),Se=1<<pe;T[pe]=0,q[pe]=-1;var oe=ae[pe];if(oe!==null)for(ae[pe]=null,pe=0;pe<oe.length;pe++){var xe=oe[pe];xe!==null&&(xe.lane&=-536870913)}l&=~Se}o!==0&&Ll(t,o,0),p!==0&&d===0&&t.tag!==0&&(t.suspendedLanes|=p&~(S&~a))}function Ll(t,a,l){t.pendingLanes|=a,t.suspendedLanes&=~a;var o=31-An(a);t.entangledLanes|=a,t.entanglements[o]=t.entanglements[o]|1073741824|l&261930}function ti(t,a){var l=t.entangledLanes|=a;for(t=t.entanglements;l;){var o=31-An(l),d=1<<o;d&a|t[o]&a&&(t[o]|=a),l&=~d}}function jl(t,a){var l=a&-a;return l=(l&42)!==0?1:r0(l),(l&(t.suspendedLanes|a))!==0?0:l}function r0(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function a0(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function A(){var t=ee.p;return t!==0?t:(t=window.event,t===void 0?32:Em(t.type))}function M(t,a){var l=ee.p;try{return ee.p=t,a()}finally{ee.p=l}}var B=Math.random().toString(36).slice(2),F="__reactFiber$"+B,N="__reactProps$"+B,j="__reactContainer$"+B,se="__reactEvents$"+B,ge="__reactListeners$"+B,ie="__reactHandles$"+B,le="__reactResources$"+B,ce="__reactMarker$"+B;function Ee(t){delete t[F],delete t[N],delete t[se],delete t[ge],delete t[ie]}function ke(t){var a=t[F];if(a)return a;for(var l=t.parentNode;l;){if(a=l[j]||l[F]){if(l=a.alternate,a.child!==null||l!==null&&l.child!==null)for(t=om(t);t!==null;){if(l=t[F])return l;t=om(t)}return a}t=l,l=t.parentNode}return null}function Ne(t){if(t=t[F]||t[j]){var a=t.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return t}return null}function Ae(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t.stateNode;throw Error(s(33))}function Fe(t){var a=t[le];return a||(a=t[le]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Ie(t){t[ce]=!0}var Et=new Set,wt={};function Bt(t,a){ir(t,a),ir(t+"Capture",a)}function ir(t,a){for(wt[t]=a,t=0;t<a.length;t++)Et.add(a[t])}var fs=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ea={},Lr={};function s0(t){return an.call(Lr,t)?!0:an.call(Ea,t)?!1:fs.test(t)?Lr[t]=!0:(Ea[t]=!0,!1)}function On(t,a,l){if(s0(a))if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(a);return;case"boolean":var o=a.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(a);return}}t.setAttribute(a,""+l)}}function Il(t,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttribute(a,""+l)}}function Yr(t,a,l,o){if(o===null)t.removeAttribute(l);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(a,l,""+o)}}function lr(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qh(t){var a=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Ib(t,a,l){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,a);if(!t.hasOwnProperty(a)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,p=o.set;return Object.defineProperty(t,a,{configurable:!0,get:function(){return d.call(this)},set:function(S){l=""+S,p.call(this,S)}}),Object.defineProperty(t,a,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(S){l=""+S},stopTracking:function(){t._valueTracker=null,delete t[a]}}}}function Qc(t){if(!t._valueTracker){var a=qh(t)?"checked":"value";t._valueTracker=Ib(t,a,""+t[a])}}function Vh(t){if(!t)return!1;var a=t._valueTracker;if(!a)return!0;var l=a.getValue(),o="";return t&&(o=qh(t)?t.checked?"true":"false":t.value),t=o,t!==l?(a.setValue(t),!0):!1}function Hl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Hb=/[\n"\\]/g;function or(t){return t.replace(Hb,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Zc(t,a,l,o,d,p,S,T){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),a!=null?S==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+lr(a)):t.value!==""+lr(a)&&(t.value=""+lr(a)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),a!=null?$c(t,S,lr(a)):l!=null?$c(t,S,lr(l)):o!=null&&t.removeAttribute("value"),d==null&&p!=null&&(t.defaultChecked=!!p),d!=null&&(t.checked=d&&typeof d!="function"&&typeof d!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+lr(T):t.removeAttribute("name")}function Kh(t,a,l,o,d,p,S,T){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(t.type=p),a!=null||l!=null){if(!(p!=="submit"&&p!=="reset"||a!=null)){Qc(t);return}l=l!=null?""+lr(l):"",a=a!=null?""+lr(a):l,T||a===t.value||(t.value=a),t.defaultValue=a}o=o??d,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=T?t.checked:!!o,t.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),Qc(t)}function $c(t,a,l){a==="number"&&Hl(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function ni(t,a,l,o){if(t=t.options,a){a={};for(var d=0;d<l.length;d++)a["$"+l[d]]=!0;for(l=0;l<t.length;l++)d=a.hasOwnProperty("$"+t[l].value),t[l].selected!==d&&(t[l].selected=d),d&&o&&(t[l].defaultSelected=!0)}else{for(l=""+lr(l),a=null,d=0;d<t.length;d++){if(t[d].value===l){t[d].selected=!0,o&&(t[d].defaultSelected=!0);return}a!==null||t[d].disabled||(a=t[d])}a!==null&&(a.selected=!0)}}function Yh(t,a,l){if(a!=null&&(a=""+lr(a),a!==t.value&&(t.value=a),l==null)){t.defaultValue!==a&&(t.defaultValue=a);return}t.defaultValue=l!=null?""+lr(l):""}function Jh(t,a,l,o){if(a==null){if(o!=null){if(l!=null)throw Error(s(92));if(me(o)){if(1<o.length)throw Error(s(93));o=o[0]}l=o}l==null&&(l=""),a=l}l=lr(a),t.defaultValue=l,o=t.textContent,o===l&&o!==""&&o!==null&&(t.value=o),Qc(t)}function ri(t,a){if(a){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=a;return}}t.textContent=a}var zb=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Qh(t,a,l){var o=a.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?o?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="":o?t.setProperty(a,l):typeof l!="number"||l===0||zb.has(a)?a==="float"?t.cssFloat=l:t[a]=(""+l).trim():t[a]=l+"px"}function Zh(t,a,l){if(a!=null&&typeof a!="object")throw Error(s(62));if(t=t.style,l!=null){for(var o in l)!l.hasOwnProperty(o)||a!=null&&a.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var d in a)o=a[d],a.hasOwnProperty(d)&&l[d]!==o&&Qh(t,d,o)}else for(var p in a)a.hasOwnProperty(p)&&Qh(t,p,a[p])}function ef(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ub=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Wb=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function zl(t){return Wb.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Jr(){}var tf=null;function nf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ai=null,si=null;function $h(t){var a=Ne(t);if(a&&(t=a.stateNode)){var l=t[N]||null;e:switch(t=a.stateNode,a.type){case"input":if(Zc(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),a=l.name,l.type==="radio"&&a!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+or(""+a)+'"][type="radio"]'),a=0;a<l.length;a++){var o=l[a];if(o!==t&&o.form===t.form){var d=o[N]||null;if(!d)throw Error(s(90));Zc(o,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(a=0;a<l.length;a++)o=l[a],o.form===t.form&&Vh(o)}break e;case"textarea":Yh(t,l.value,l.defaultValue);break e;case"select":a=l.value,a!=null&&ni(t,!!l.multiple,a,!1)}}}var rf=!1;function ex(t,a,l){if(rf)return t(a,l);rf=!0;try{var o=t(a);return o}finally{if(rf=!1,(ai!==null||si!==null)&&(ko(),ai&&(a=ai,t=si,si=ai=null,$h(a),t)))for(a=0;a<t.length;a++)$h(t[a])}}function i0(t,a){var l=t.stateNode;if(l===null)return null;var o=l[N]||null;if(o===null)return null;l=o[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(s(231,a,typeof l));return l}var Qr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),af=!1;if(Qr)try{var l0={};Object.defineProperty(l0,"passive",{get:function(){af=!0}}),window.addEventListener("test",l0,l0),window.removeEventListener("test",l0,l0)}catch{af=!1}var wa=null,sf=null,Ul=null;function tx(){if(Ul)return Ul;var t,a=sf,l=a.length,o,d="value"in wa?wa.value:wa.textContent,p=d.length;for(t=0;t<l&&a[t]===d[t];t++);var S=l-t;for(o=1;o<=S&&a[l-o]===d[p-o];o++);return Ul=d.slice(t,1<o?1-o:void 0)}function Wl(t){var a=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&a===13&&(t=13)):t=a,t===10&&(t=13),32<=t||t===13?t:0}function Pl(){return!0}function nx(){return!1}function Mn(t){function a(l,o,d,p,S){this._reactName=l,this._targetInst=d,this.type=o,this.nativeEvent=p,this.target=S,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(l=t[T],this[T]=l?l(p):p[T]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Pl:nx,this.isPropagationStopped=nx,this}return v(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Pl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Pl)},persist:function(){},isPersistent:Pl}),a}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xl=Mn(us),o0=v({},us,{view:0,detail:0}),Pb=Mn(o0),lf,of,c0,Gl=v({},o0,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ff,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==c0&&(c0&&t.type==="mousemove"?(lf=t.screenX-c0.screenX,of=t.screenY-c0.screenY):of=lf=0,c0=t),lf)},movementY:function(t){return"movementY"in t?t.movementY:of}}),rx=Mn(Gl),Xb=v({},Gl,{dataTransfer:0}),Gb=Mn(Xb),qb=v({},o0,{relatedTarget:0}),cf=Mn(qb),Vb=v({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),Kb=Mn(Vb),Yb=v({},us,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Jb=Mn(Yb),Qb=v({},us,{data:0}),ax=Mn(Qb),Zb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$b={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},e4={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function t4(t){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(t):(t=e4[t])?!!a[t]:!1}function ff(){return t4}var n4=v({},o0,{key:function(t){if(t.key){var a=Zb[t.key]||t.key;if(a!=="Unidentified")return a}return t.type==="keypress"?(t=Wl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$b[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ff,charCode:function(t){return t.type==="keypress"?Wl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Wl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),r4=Mn(n4),a4=v({},Gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sx=Mn(a4),s4=v({},o0,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ff}),i4=Mn(s4),l4=v({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),o4=Mn(l4),c4=v({},Gl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),f4=Mn(c4),u4=v({},us,{newState:0,oldState:0}),d4=Mn(u4),h4=[9,13,27,32],uf=Qr&&"CompositionEvent"in window,f0=null;Qr&&"documentMode"in document&&(f0=document.documentMode);var x4=Qr&&"TextEvent"in window&&!f0,ix=Qr&&(!uf||f0&&8<f0&&11>=f0),lx=" ",ox=!1;function cx(t,a){switch(t){case"keyup":return h4.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ii=!1;function p4(t,a){switch(t){case"compositionend":return fx(a);case"keypress":return a.which!==32?null:(ox=!0,lx);case"textInput":return t=a.data,t===lx&&ox?null:t;default:return null}}function m4(t,a){if(ii)return t==="compositionend"||!uf&&cx(t,a)?(t=tx(),Ul=sf=wa=null,ii=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return ix&&a.locale!=="ko"?null:a.data;default:return null}}var g4={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ux(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a==="input"?!!g4[t.type]:a==="textarea"}function dx(t,a,l,o){ai?si?si.push(o):si=[o]:ai=o,a=Mo(a,"onChange"),0<a.length&&(l=new Xl("onChange","change",null,l,o),t.push({event:l,listeners:a}))}var u0=null,d0=null;function v4(t){Kp(t,0)}function ql(t){var a=Ae(t);if(Vh(a))return t}function hx(t,a){if(t==="change")return a}var xx=!1;if(Qr){var df;if(Qr){var hf="oninput"in document;if(!hf){var px=document.createElement("div");px.setAttribute("oninput","return;"),hf=typeof px.oninput=="function"}df=hf}else df=!1;xx=df&&(!document.documentMode||9<document.documentMode)}function mx(){u0&&(u0.detachEvent("onpropertychange",gx),d0=u0=null)}function gx(t){if(t.propertyName==="value"&&ql(d0)){var a=[];dx(a,d0,t,nf(t)),ex(v4,a)}}function y4(t,a,l){t==="focusin"?(mx(),u0=a,d0=l,u0.attachEvent("onpropertychange",gx)):t==="focusout"&&mx()}function b4(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ql(d0)}function S4(t,a){if(t==="click")return ql(a)}function _4(t,a){if(t==="input"||t==="change")return ql(a)}function C4(t,a){return t===a&&(t!==0||1/t===1/a)||t!==t&&a!==a}var Xn=typeof Object.is=="function"?Object.is:C4;function h0(t,a){if(Xn(t,a))return!0;if(typeof t!="object"||t===null||typeof a!="object"||a===null)return!1;var l=Object.keys(t),o=Object.keys(a);if(l.length!==o.length)return!1;for(o=0;o<l.length;o++){var d=l[o];if(!an.call(a,d)||!Xn(t[d],a[d]))return!1}return!0}function vx(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function yx(t,a){var l=vx(t);t=0;for(var o;l;){if(l.nodeType===3){if(o=t+l.textContent.length,t<=a&&o>=a)return{node:l,offset:a-t};t=o}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=vx(l)}}function bx(t,a){return t&&a?t===a?!0:t&&t.nodeType===3?!1:a&&a.nodeType===3?bx(t,a.parentNode):"contains"in t?t.contains(a):t.compareDocumentPosition?!!(t.compareDocumentPosition(a)&16):!1:!1}function Sx(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var a=Hl(t.document);a instanceof t.HTMLIFrameElement;){try{var l=typeof a.contentWindow.location.href=="string"}catch{l=!1}if(l)t=a.contentWindow;else break;a=Hl(t.document)}return a}function xf(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a&&(a==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||a==="textarea"||t.contentEditable==="true")}var E4=Qr&&"documentMode"in document&&11>=document.documentMode,li=null,pf=null,x0=null,mf=!1;function _x(t,a,l){var o=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;mf||li==null||li!==Hl(o)||(o=li,"selectionStart"in o&&xf(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),x0&&h0(x0,o)||(x0=o,o=Mo(pf,"onSelect"),0<o.length&&(a=new Xl("onSelect","select",null,a,l),t.push({event:a,listeners:o}),a.target=li)))}function ds(t,a){var l={};return l[t.toLowerCase()]=a.toLowerCase(),l["Webkit"+t]="webkit"+a,l["Moz"+t]="moz"+a,l}var oi={animationend:ds("Animation","AnimationEnd"),animationiteration:ds("Animation","AnimationIteration"),animationstart:ds("Animation","AnimationStart"),transitionrun:ds("Transition","TransitionRun"),transitionstart:ds("Transition","TransitionStart"),transitioncancel:ds("Transition","TransitionCancel"),transitionend:ds("Transition","TransitionEnd")},gf={},Cx={};Qr&&(Cx=document.createElement("div").style,"AnimationEvent"in window||(delete oi.animationend.animation,delete oi.animationiteration.animation,delete oi.animationstart.animation),"TransitionEvent"in window||delete oi.transitionend.transition);function hs(t){if(gf[t])return gf[t];if(!oi[t])return t;var a=oi[t],l;for(l in a)if(a.hasOwnProperty(l)&&l in Cx)return gf[t]=a[l];return t}var Ex=hs("animationend"),wx=hs("animationiteration"),Ax=hs("animationstart"),w4=hs("transitionrun"),A4=hs("transitionstart"),T4=hs("transitioncancel"),Tx=hs("transitionend"),kx=new Map,vf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vf.push("scrollEnd");function Er(t,a){kx.set(t,a),Bt(a,[t])}var Vl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},cr=[],ci=0,yf=0;function Kl(){for(var t=ci,a=yf=ci=0;a<t;){var l=cr[a];cr[a++]=null;var o=cr[a];cr[a++]=null;var d=cr[a];cr[a++]=null;var p=cr[a];if(cr[a++]=null,o!==null&&d!==null){var S=o.pending;S===null?d.next=d:(d.next=S.next,S.next=d),o.pending=d}p!==0&&Dx(l,d,p)}}function Yl(t,a,l,o){cr[ci++]=t,cr[ci++]=a,cr[ci++]=l,cr[ci++]=o,yf|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function bf(t,a,l,o){return Yl(t,a,l,o),Jl(t)}function xs(t,a){return Yl(t,null,null,a),Jl(t)}function Dx(t,a,l){t.lanes|=l;var o=t.alternate;o!==null&&(o.lanes|=l);for(var d=!1,p=t.return;p!==null;)p.childLanes|=l,o=p.alternate,o!==null&&(o.childLanes|=l),p.tag===22&&(t=p.stateNode,t===null||t._visibility&1||(d=!0)),t=p,p=p.return;return t.tag===3?(p=t.stateNode,d&&a!==null&&(d=31-An(l),t=p.hiddenUpdates,o=t[d],o===null?t[d]=[a]:o.push(a),a.lane=l|536870912),p):null}function Jl(t){if(50<L0)throw L0=0,Du=null,Error(s(185));for(var a=t.return;a!==null;)t=a,a=t.return;return t.tag===3?t.stateNode:null}var fi={};function k4(t,a,l,o){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(t,a,l,o){return new k4(t,a,l,o)}function Sf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Zr(t,a){var l=t.alternate;return l===null?(l=Gn(t.tag,a,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=a,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,a=t.dependencies,l.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function Bx(t,a){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=a,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,a=l.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),t}function Ql(t,a,l,o,d,p){var S=0;if(o=t,typeof t=="function")Sf(t)&&(S=1);else if(typeof t=="string")S=NS(t,l,P.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case U:return t=Gn(31,l,a,d),t.elementType=U,t.lanes=p,t;case b:return ps(l.children,d,p,a);case C:S=8,d|=24;break;case D:return t=Gn(12,l,a,d|2),t.elementType=D,t.lanes=p,t;case V:return t=Gn(13,l,a,d),t.elementType=V,t.lanes=p,t;case z:return t=Gn(19,l,a,d),t.elementType=z,t.lanes=p,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case w:S=10;break e;case k:S=9;break e;case H:S=11;break e;case R:S=14;break e;case W:S=16,o=null;break e}S=29,l=Error(s(130,t===null?"null":typeof t,"")),o=null}return a=Gn(S,l,a,d),a.elementType=t,a.type=o,a.lanes=p,a}function ps(t,a,l,o){return t=Gn(7,t,o,a),t.lanes=l,t}function _f(t,a,l){return t=Gn(6,t,null,a),t.lanes=l,t}function Fx(t){var a=Gn(18,null,null,0);return a.stateNode=t,a}function Cf(t,a,l){return a=Gn(4,t.children!==null?t.children:[],t.key,a),a.lanes=l,a.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},a}var Rx=new WeakMap;function fr(t,a){if(typeof t=="object"&&t!==null){var l=Rx.get(t);return l!==void 0?l:(a={value:t,source:a,stack:Ct(a)},Rx.set(t,a),a)}return{value:t,source:a,stack:Ct(a)}}var ui=[],di=0,Zl=null,p0=0,ur=[],dr=0,Aa=null,jr=1,Ir="";function $r(t,a){ui[di++]=p0,ui[di++]=Zl,Zl=t,p0=a}function Nx(t,a,l){ur[dr++]=jr,ur[dr++]=Ir,ur[dr++]=Aa,Aa=t;var o=jr;t=Ir;var d=32-An(o)-1;o&=~(1<<d),l+=1;var p=32-An(a)+d;if(30<p){var S=d-d%5;p=(o&(1<<S)-1).toString(32),o>>=S,d-=S,jr=1<<32-An(a)+d|l<<d|o,Ir=p+t}else jr=1<<p|l<<d|o,Ir=t}function Ef(t){t.return!==null&&($r(t,1),Nx(t,1,0))}function wf(t){for(;t===Zl;)Zl=ui[--di],ui[di]=null,p0=ui[--di],ui[di]=null;for(;t===Aa;)Aa=ur[--dr],ur[dr]=null,Ir=ur[--dr],ur[dr]=null,jr=ur[--dr],ur[dr]=null}function Ox(t,a){ur[dr++]=jr,ur[dr++]=Ir,ur[dr++]=Aa,jr=a.id,Ir=a.overflow,Aa=t}var fn=null,kt=null,lt=!1,Ta=null,hr=!1,Af=Error(s(519));function ka(t){var a=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw m0(fr(a,t)),Af}function Mx(t){var a=t.stateNode,l=t.type,o=t.memoizedProps;switch(a[F]=t,a[N]=o,l){case"dialog":nt("cancel",a),nt("close",a);break;case"iframe":case"object":case"embed":nt("load",a);break;case"video":case"audio":for(l=0;l<I0.length;l++)nt(I0[l],a);break;case"source":nt("error",a);break;case"img":case"image":case"link":nt("error",a),nt("load",a);break;case"details":nt("toggle",a);break;case"input":nt("invalid",a),Kh(a,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":nt("invalid",a);break;case"textarea":nt("invalid",a),Jh(a,o.value,o.defaultValue,o.children)}l=o.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||a.textContent===""+l||o.suppressHydrationWarning===!0||Zp(a.textContent,l)?(o.popover!=null&&(nt("beforetoggle",a),nt("toggle",a)),o.onScroll!=null&&nt("scroll",a),o.onScrollEnd!=null&&nt("scrollend",a),o.onClick!=null&&(a.onclick=Jr),a=!0):a=!1,a||ka(t,!0)}function Lx(t){for(fn=t.return;fn;)switch(fn.tag){case 5:case 31:case 13:hr=!1;return;case 27:case 3:hr=!0;return;default:fn=fn.return}}function hi(t){if(t!==fn)return!1;if(!lt)return Lx(t),lt=!0,!1;var a=t.tag,l;if((l=a!==3&&a!==27)&&((l=a===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||Xu(t.type,t.memoizedProps)),l=!l),l&&kt&&ka(t),Lx(t),a===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));kt=lm(t)}else if(a===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));kt=lm(t)}else a===27?(a=kt,Wa(t.type)?(t=Yu,Yu=null,kt=t):kt=a):kt=fn?pr(t.stateNode.nextSibling):null;return!0}function ms(){kt=fn=null,lt=!1}function Tf(){var t=Ta;return t!==null&&(Hn===null?Hn=t:Hn.push.apply(Hn,t),Ta=null),t}function m0(t){Ta===null?Ta=[t]:Ta.push(t)}var kf=Te(null),gs=null,ea=null;function Da(t,a,l){J(kf,a._currentValue),a._currentValue=l}function ta(t){t._currentValue=kf.current,O(kf)}function Df(t,a,l){for(;t!==null;){var o=t.alternate;if((t.childLanes&a)!==a?(t.childLanes|=a,o!==null&&(o.childLanes|=a)):o!==null&&(o.childLanes&a)!==a&&(o.childLanes|=a),t===l)break;t=t.return}}function Bf(t,a,l,o){var d=t.child;for(d!==null&&(d.return=t);d!==null;){var p=d.dependencies;if(p!==null){var S=d.child;p=p.firstContext;e:for(;p!==null;){var T=p;p=d;for(var q=0;q<a.length;q++)if(T.context===a[q]){p.lanes|=l,T=p.alternate,T!==null&&(T.lanes|=l),Df(p.return,l,t),o||(S=null);break e}p=T.next}}else if(d.tag===18){if(S=d.return,S===null)throw Error(s(341));S.lanes|=l,p=S.alternate,p!==null&&(p.lanes|=l),Df(S,l,t),S=null}else S=d.child;if(S!==null)S.return=d;else for(S=d;S!==null;){if(S===t){S=null;break}if(d=S.sibling,d!==null){d.return=S.return,S=d;break}S=S.return}d=S}}function xi(t,a,l,o){t=null;for(var d=a,p=!1;d!==null;){if(!p){if((d.flags&524288)!==0)p=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var S=d.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var T=d.type;Xn(d.pendingProps.value,S.value)||(t!==null?t.push(T):t=[T])}}else if(d===he.current){if(S=d.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(t!==null?t.push(P0):t=[P0])}d=d.return}t!==null&&Bf(a,t,l,o),a.flags|=262144}function $l(t){for(t=t.firstContext;t!==null;){if(!Xn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function vs(t){gs=t,ea=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function un(t){return jx(gs,t)}function eo(t,a){return gs===null&&vs(t),jx(t,a)}function jx(t,a){var l=a._currentValue;if(a={context:a,memoizedValue:l,next:null},ea===null){if(t===null)throw Error(s(308));ea=a,t.dependencies={lanes:0,firstContext:a},t.flags|=524288}else ea=ea.next=a;return l}var D4=typeof AbortController<"u"?AbortController:function(){var t=[],a=this.signal={aborted:!1,addEventListener:function(l,o){t.push(o)}};this.abort=function(){a.aborted=!0,t.forEach(function(l){return l()})}},B4=e.unstable_scheduleCallback,F4=e.unstable_NormalPriority,Gt={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ff(){return{controller:new D4,data:new Map,refCount:0}}function g0(t){t.refCount--,t.refCount===0&&B4(F4,function(){t.controller.abort()})}var v0=null,Rf=0,pi=0,mi=null;function R4(t,a){if(v0===null){var l=v0=[];Rf=0,pi=Mu(),mi={status:"pending",value:void 0,then:function(o){l.push(o)}}}return Rf++,a.then(Ix,Ix),a}function Ix(){if(--Rf===0&&v0!==null){mi!==null&&(mi.status="fulfilled");var t=v0;v0=null,pi=0,mi=null;for(var a=0;a<t.length;a++)(0,t[a])()}}function N4(t,a){var l=[],o={status:"pending",value:null,reason:null,then:function(d){l.push(d)}};return t.then(function(){o.status="fulfilled",o.value=a;for(var d=0;d<l.length;d++)(0,l[d])(a)},function(d){for(o.status="rejected",o.reason=d,d=0;d<l.length;d++)(0,l[d])(void 0)}),o}var Hx=X.S;X.S=function(t,a){_p=je(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&R4(t,a),Hx!==null&&Hx(t,a)};var ys=Te(null);function Nf(){var t=ys.current;return t!==null?t:_t.pooledCache}function to(t,a){a===null?J(ys,ys.current):J(ys,a.pool)}function zx(){var t=Nf();return t===null?null:{parent:Gt._currentValue,pool:t}}var gi=Error(s(460)),Of=Error(s(474)),no=Error(s(542)),ro={then:function(){}};function Ux(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Wx(t,a,l){switch(l=t[l],l===void 0?t.push(a):l!==a&&(a.then(Jr,Jr),a=l),a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,Xx(t),t;default:if(typeof a.status=="string")a.then(Jr,Jr);else{if(t=_t,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=a,t.status="pending",t.then(function(o){if(a.status==="pending"){var d=a;d.status="fulfilled",d.value=o}},function(o){if(a.status==="pending"){var d=a;d.status="rejected",d.reason=o}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,Xx(t),t}throw Ss=a,gi}}function bs(t){try{var a=t._init;return a(t._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Ss=l,gi):l}}var Ss=null;function Px(){if(Ss===null)throw Error(s(459));var t=Ss;return Ss=null,t}function Xx(t){if(t===gi||t===no)throw Error(s(483))}var vi=null,y0=0;function ao(t){var a=y0;return y0+=1,vi===null&&(vi=[]),Wx(vi,t,a)}function b0(t,a){a=a.props.ref,t.ref=a!==void 0?a:null}function so(t,a){throw a.$$typeof===y?Error(s(525)):(t=Object.prototype.toString.call(a),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":t)))}function Gx(t){function a(Q,Y){if(t){var re=Q.deletions;re===null?(Q.deletions=[Y],Q.flags|=16):re.push(Y)}}function l(Q,Y){if(!t)return null;for(;Y!==null;)a(Q,Y),Y=Y.sibling;return null}function o(Q){for(var Y=new Map;Q!==null;)Q.key!==null?Y.set(Q.key,Q):Y.set(Q.index,Q),Q=Q.sibling;return Y}function d(Q,Y){return Q=Zr(Q,Y),Q.index=0,Q.sibling=null,Q}function p(Q,Y,re){return Q.index=re,t?(re=Q.alternate,re!==null?(re=re.index,re<Y?(Q.flags|=67108866,Y):re):(Q.flags|=67108866,Y)):(Q.flags|=1048576,Y)}function S(Q){return t&&Q.alternate===null&&(Q.flags|=67108866),Q}function T(Q,Y,re,be){return Y===null||Y.tag!==6?(Y=_f(re,Q.mode,be),Y.return=Q,Y):(Y=d(Y,re),Y.return=Q,Y)}function q(Q,Y,re,be){var We=re.type;return We===b?pe(Q,Y,re.props.children,be,re.key):Y!==null&&(Y.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===W&&bs(We)===Y.type)?(Y=d(Y,re.props),b0(Y,re),Y.return=Q,Y):(Y=Ql(re.type,re.key,re.props,null,Q.mode,be),b0(Y,re),Y.return=Q,Y)}function ae(Q,Y,re,be){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==re.containerInfo||Y.stateNode.implementation!==re.implementation?(Y=Cf(re,Q.mode,be),Y.return=Q,Y):(Y=d(Y,re.children||[]),Y.return=Q,Y)}function pe(Q,Y,re,be,We){return Y===null||Y.tag!==7?(Y=ps(re,Q.mode,be,We),Y.return=Q,Y):(Y=d(Y,re),Y.return=Q,Y)}function Se(Q,Y,re){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return Y=_f(""+Y,Q.mode,re),Y.return=Q,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case _:return re=Ql(Y.type,Y.key,Y.props,null,Q.mode,re),b0(re,Y),re.return=Q,re;case E:return Y=Cf(Y,Q.mode,re),Y.return=Q,Y;case W:return Y=bs(Y),Se(Q,Y,re)}if(me(Y)||L(Y))return Y=ps(Y,Q.mode,re,null),Y.return=Q,Y;if(typeof Y.then=="function")return Se(Q,ao(Y),re);if(Y.$$typeof===w)return Se(Q,eo(Q,Y),re);so(Q,Y)}return null}function oe(Q,Y,re,be){var We=Y!==null?Y.key:null;if(typeof re=="string"&&re!==""||typeof re=="number"||typeof re=="bigint")return We!==null?null:T(Q,Y,""+re,be);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case _:return re.key===We?q(Q,Y,re,be):null;case E:return re.key===We?ae(Q,Y,re,be):null;case W:return re=bs(re),oe(Q,Y,re,be)}if(me(re)||L(re))return We!==null?null:pe(Q,Y,re,be,null);if(typeof re.then=="function")return oe(Q,Y,ao(re),be);if(re.$$typeof===w)return oe(Q,Y,eo(Q,re),be);so(Q,re)}return null}function xe(Q,Y,re,be,We){if(typeof be=="string"&&be!==""||typeof be=="number"||typeof be=="bigint")return Q=Q.get(re)||null,T(Y,Q,""+be,We);if(typeof be=="object"&&be!==null){switch(be.$$typeof){case _:return Q=Q.get(be.key===null?re:be.key)||null,q(Y,Q,be,We);case E:return Q=Q.get(be.key===null?re:be.key)||null,ae(Y,Q,be,We);case W:return be=bs(be),xe(Q,Y,re,be,We)}if(me(be)||L(be))return Q=Q.get(re)||null,pe(Y,Q,be,We,null);if(typeof be.then=="function")return xe(Q,Y,re,ao(be),We);if(be.$$typeof===w)return xe(Q,Y,re,eo(Y,be),We);so(Y,be)}return null}function Le(Q,Y,re,be){for(var We=null,ht=null,He=Y,Ze=Y=0,at=null;He!==null&&Ze<re.length;Ze++){He.index>Ze?(at=He,He=null):at=He.sibling;var xt=oe(Q,He,re[Ze],be);if(xt===null){He===null&&(He=at);break}t&&He&&xt.alternate===null&&a(Q,He),Y=p(xt,Y,Ze),ht===null?We=xt:ht.sibling=xt,ht=xt,He=at}if(Ze===re.length)return l(Q,He),lt&&$r(Q,Ze),We;if(He===null){for(;Ze<re.length;Ze++)He=Se(Q,re[Ze],be),He!==null&&(Y=p(He,Y,Ze),ht===null?We=He:ht.sibling=He,ht=He);return lt&&$r(Q,Ze),We}for(He=o(He);Ze<re.length;Ze++)at=xe(He,Q,Ze,re[Ze],be),at!==null&&(t&&at.alternate!==null&&He.delete(at.key===null?Ze:at.key),Y=p(at,Y,Ze),ht===null?We=at:ht.sibling=at,ht=at);return t&&He.forEach(function(Va){return a(Q,Va)}),lt&&$r(Q,Ze),We}function Xe(Q,Y,re,be){if(re==null)throw Error(s(151));for(var We=null,ht=null,He=Y,Ze=Y=0,at=null,xt=re.next();He!==null&&!xt.done;Ze++,xt=re.next()){He.index>Ze?(at=He,He=null):at=He.sibling;var Va=oe(Q,He,xt.value,be);if(Va===null){He===null&&(He=at);break}t&&He&&Va.alternate===null&&a(Q,He),Y=p(Va,Y,Ze),ht===null?We=Va:ht.sibling=Va,ht=Va,He=at}if(xt.done)return l(Q,He),lt&&$r(Q,Ze),We;if(He===null){for(;!xt.done;Ze++,xt=re.next())xt=Se(Q,xt.value,be),xt!==null&&(Y=p(xt,Y,Ze),ht===null?We=xt:ht.sibling=xt,ht=xt);return lt&&$r(Q,Ze),We}for(He=o(He);!xt.done;Ze++,xt=re.next())xt=xe(He,Q,Ze,xt.value,be),xt!==null&&(t&&xt.alternate!==null&&He.delete(xt.key===null?Ze:xt.key),Y=p(xt,Y,Ze),ht===null?We=xt:ht.sibling=xt,ht=xt);return t&&He.forEach(function(XS){return a(Q,XS)}),lt&&$r(Q,Ze),We}function St(Q,Y,re,be){if(typeof re=="object"&&re!==null&&re.type===b&&re.key===null&&(re=re.props.children),typeof re=="object"&&re!==null){switch(re.$$typeof){case _:e:{for(var We=re.key;Y!==null;){if(Y.key===We){if(We=re.type,We===b){if(Y.tag===7){l(Q,Y.sibling),be=d(Y,re.props.children),be.return=Q,Q=be;break e}}else if(Y.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===W&&bs(We)===Y.type){l(Q,Y.sibling),be=d(Y,re.props),b0(be,re),be.return=Q,Q=be;break e}l(Q,Y);break}else a(Q,Y);Y=Y.sibling}re.type===b?(be=ps(re.props.children,Q.mode,be,re.key),be.return=Q,Q=be):(be=Ql(re.type,re.key,re.props,null,Q.mode,be),b0(be,re),be.return=Q,Q=be)}return S(Q);case E:e:{for(We=re.key;Y!==null;){if(Y.key===We)if(Y.tag===4&&Y.stateNode.containerInfo===re.containerInfo&&Y.stateNode.implementation===re.implementation){l(Q,Y.sibling),be=d(Y,re.children||[]),be.return=Q,Q=be;break e}else{l(Q,Y);break}else a(Q,Y);Y=Y.sibling}be=Cf(re,Q.mode,be),be.return=Q,Q=be}return S(Q);case W:return re=bs(re),St(Q,Y,re,be)}if(me(re))return Le(Q,Y,re,be);if(L(re)){if(We=L(re),typeof We!="function")throw Error(s(150));return re=We.call(re),Xe(Q,Y,re,be)}if(typeof re.then=="function")return St(Q,Y,ao(re),be);if(re.$$typeof===w)return St(Q,Y,eo(Q,re),be);so(Q,re)}return typeof re=="string"&&re!==""||typeof re=="number"||typeof re=="bigint"?(re=""+re,Y!==null&&Y.tag===6?(l(Q,Y.sibling),be=d(Y,re),be.return=Q,Q=be):(l(Q,Y),be=_f(re,Q.mode,be),be.return=Q,Q=be),S(Q)):l(Q,Y)}return function(Q,Y,re,be){try{y0=0;var We=St(Q,Y,re,be);return vi=null,We}catch(He){if(He===gi||He===no)throw He;var ht=Gn(29,He,null,Q.mode);return ht.lanes=be,ht.return=Q,ht}}}var _s=Gx(!0),qx=Gx(!1),Ba=!1;function Mf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Lf(t,a){t=t.updateQueue,a.updateQueue===t&&(a.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Fa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ra(t,a,l){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(pt&2)!==0){var d=o.pending;return d===null?a.next=a:(a.next=d.next,d.next=a),o.pending=a,a=Jl(t),Dx(t,null,l),a}return Yl(t,o,a,l),Jl(t)}function S0(t,a,l){if(a=a.updateQueue,a!==null&&(a=a.shared,(l&4194048)!==0)){var o=a.lanes;o&=t.pendingLanes,l|=o,a.lanes=l,ti(t,l)}}function jf(t,a){var l=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,l===o)){var d=null,p=null;if(l=l.firstBaseUpdate,l!==null){do{var S={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};p===null?d=p=S:p=p.next=S,l=l.next}while(l!==null);p===null?d=p=a:p=p.next=a}else d=p=a;l={baseState:o.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:o.shared,callbacks:o.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=a:t.next=a,l.lastBaseUpdate=a}var If=!1;function _0(){if(If){var t=mi;if(t!==null)throw t}}function C0(t,a,l,o){If=!1;var d=t.updateQueue;Ba=!1;var p=d.firstBaseUpdate,S=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var q=T,ae=q.next;q.next=null,S===null?p=ae:S.next=ae,S=q;var pe=t.alternate;pe!==null&&(pe=pe.updateQueue,T=pe.lastBaseUpdate,T!==S&&(T===null?pe.firstBaseUpdate=ae:T.next=ae,pe.lastBaseUpdate=q))}if(p!==null){var Se=d.baseState;S=0,pe=ae=q=null,T=p;do{var oe=T.lane&-536870913,xe=oe!==T.lane;if(xe?(rt&oe)===oe:(o&oe)===oe){oe!==0&&oe===pi&&(If=!0),pe!==null&&(pe=pe.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var Le=t,Xe=T;oe=a;var St=l;switch(Xe.tag){case 1:if(Le=Xe.payload,typeof Le=="function"){Se=Le.call(St,Se,oe);break e}Se=Le;break e;case 3:Le.flags=Le.flags&-65537|128;case 0:if(Le=Xe.payload,oe=typeof Le=="function"?Le.call(St,Se,oe):Le,oe==null)break e;Se=v({},Se,oe);break e;case 2:Ba=!0}}oe=T.callback,oe!==null&&(t.flags|=64,xe&&(t.flags|=8192),xe=d.callbacks,xe===null?d.callbacks=[oe]:xe.push(oe))}else xe={lane:oe,tag:T.tag,payload:T.payload,callback:T.callback,next:null},pe===null?(ae=pe=xe,q=Se):pe=pe.next=xe,S|=oe;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;xe=T,T=xe.next,xe.next=null,d.lastBaseUpdate=xe,d.shared.pending=null}}while(!0);pe===null&&(q=Se),d.baseState=q,d.firstBaseUpdate=ae,d.lastBaseUpdate=pe,p===null&&(d.shared.lanes=0),ja|=S,t.lanes=S,t.memoizedState=Se}}function Vx(t,a){if(typeof t!="function")throw Error(s(191,t));t.call(a)}function Kx(t,a){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)Vx(l[t],a)}var yi=Te(null),io=Te(0);function Yx(t,a){t=fa,J(io,t),J(yi,a),fa=t|a.baseLanes}function Hf(){J(io,fa),J(yi,yi.current)}function zf(){fa=io.current,O(yi),O(io)}var qn=Te(null),xr=null;function Na(t){var a=t.alternate;J(Ut,Ut.current&1),J(qn,t),xr===null&&(a===null||yi.current!==null||a.memoizedState!==null)&&(xr=t)}function Uf(t){J(Ut,Ut.current),J(qn,t),xr===null&&(xr=t)}function Jx(t){t.tag===22?(J(Ut,Ut.current),J(qn,t),xr===null&&(xr=t)):Oa()}function Oa(){J(Ut,Ut.current),J(qn,qn.current)}function Vn(t){O(qn),xr===t&&(xr=null),O(Ut)}var Ut=Te(0);function lo(t){for(var a=t;a!==null;){if(a.tag===13){var l=a.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||Vu(l)||Ku(l)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var na=0,Ye=null,yt=null,qt=null,oo=!1,bi=!1,Cs=!1,co=0,E0=0,Si=null,O4=0;function Mt(){throw Error(s(321))}function Wf(t,a){if(a===null)return!1;for(var l=0;l<a.length&&l<t.length;l++)if(!Xn(t[l],a[l]))return!1;return!0}function Pf(t,a,l,o,d,p){return na=p,Ye=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,X.H=t===null||t.memoizedState===null?N1:au,Cs=!1,p=l(o,d),Cs=!1,bi&&(p=Zx(a,l,o,d)),Qx(t),p}function Qx(t){X.H=T0;var a=yt!==null&&yt.next!==null;if(na=0,qt=yt=Ye=null,oo=!1,E0=0,Si=null,a)throw Error(s(300));t===null||Vt||(t=t.dependencies,t!==null&&$l(t)&&(Vt=!0))}function Zx(t,a,l,o){Ye=t;var d=0;do{if(bi&&(Si=null),E0=0,bi=!1,25<=d)throw Error(s(301));if(d+=1,qt=yt=null,t.updateQueue!=null){var p=t.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}X.H=O1,p=a(l,o)}while(bi);return p}function M4(){var t=X.H,a=t.useState()[0];return a=typeof a.then=="function"?w0(a):a,t=t.useState()[0],(yt!==null?yt.memoizedState:null)!==t&&(Ye.flags|=1024),a}function Xf(){var t=co!==0;return co=0,t}function Gf(t,a,l){a.updateQueue=t.updateQueue,a.flags&=-2053,t.lanes&=~l}function qf(t){if(oo){for(t=t.memoizedState;t!==null;){var a=t.queue;a!==null&&(a.pending=null),t=t.next}oo=!1}na=0,qt=yt=Ye=null,bi=!1,E0=co=0,Si=null}function Tn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qt===null?Ye.memoizedState=qt=t:qt=qt.next=t,qt}function Wt(){if(yt===null){var t=Ye.alternate;t=t!==null?t.memoizedState:null}else t=yt.next;var a=qt===null?Ye.memoizedState:qt.next;if(a!==null)qt=a,yt=t;else{if(t===null)throw Ye.alternate===null?Error(s(467)):Error(s(310));yt=t,t={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},qt===null?Ye.memoizedState=qt=t:qt=qt.next=t}return qt}function fo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function w0(t){var a=E0;return E0+=1,Si===null&&(Si=[]),t=Wx(Si,t,a),a=Ye,(qt===null?a.memoizedState:qt.next)===null&&(a=a.alternate,X.H=a===null||a.memoizedState===null?N1:au),t}function uo(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return w0(t);if(t.$$typeof===w)return un(t)}throw Error(s(438,String(t)))}function Vf(t){var a=null,l=Ye.updateQueue;if(l!==null&&(a=l.memoCache),a==null){var o=Ye.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(a={data:o.data.map(function(d){return d.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),l===null&&(l=fo(),Ye.updateQueue=l),l.memoCache=a,l=a.data[a.index],l===void 0)for(l=a.data[a.index]=Array(t),o=0;o<t;o++)l[o]=fe;return a.index++,l}function ra(t,a){return typeof a=="function"?a(t):a}function ho(t){var a=Wt();return Kf(a,yt,t)}function Kf(t,a,l){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=l;var d=t.baseQueue,p=o.pending;if(p!==null){if(d!==null){var S=d.next;d.next=p.next,p.next=S}a.baseQueue=d=p,o.pending=null}if(p=t.baseState,d===null)t.memoizedState=p;else{a=d.next;var T=S=null,q=null,ae=a,pe=!1;do{var Se=ae.lane&-536870913;if(Se!==ae.lane?(rt&Se)===Se:(na&Se)===Se){var oe=ae.revertLane;if(oe===0)q!==null&&(q=q.next={lane:0,revertLane:0,gesture:null,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),Se===pi&&(pe=!0);else if((na&oe)===oe){ae=ae.next,oe===pi&&(pe=!0);continue}else Se={lane:0,revertLane:ae.revertLane,gesture:null,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},q===null?(T=q=Se,S=p):q=q.next=Se,Ye.lanes|=oe,ja|=oe;Se=ae.action,Cs&&l(p,Se),p=ae.hasEagerState?ae.eagerState:l(p,Se)}else oe={lane:Se,revertLane:ae.revertLane,gesture:ae.gesture,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},q===null?(T=q=oe,S=p):q=q.next=oe,Ye.lanes|=Se,ja|=Se;ae=ae.next}while(ae!==null&&ae!==a);if(q===null?S=p:q.next=T,!Xn(p,t.memoizedState)&&(Vt=!0,pe&&(l=mi,l!==null)))throw l;t.memoizedState=p,t.baseState=S,t.baseQueue=q,o.lastRenderedState=p}return d===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Yf(t){var a=Wt(),l=a.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=t;var o=l.dispatch,d=l.pending,p=a.memoizedState;if(d!==null){l.pending=null;var S=d=d.next;do p=t(p,S.action),S=S.next;while(S!==d);Xn(p,a.memoizedState)||(Vt=!0),a.memoizedState=p,a.baseQueue===null&&(a.baseState=p),l.lastRenderedState=p}return[p,o]}function $x(t,a,l){var o=Ye,d=Wt(),p=lt;if(p){if(l===void 0)throw Error(s(407));l=l()}else l=a();var S=!Xn((yt||d).memoizedState,l);if(S&&(d.memoizedState=l,Vt=!0),d=d.queue,Zf(n1.bind(null,o,d,t),[t]),d.getSnapshot!==a||S||qt!==null&&qt.memoizedState.tag&1){if(o.flags|=2048,_i(9,{destroy:void 0},t1.bind(null,o,d,l,a),null),_t===null)throw Error(s(349));p||(na&127)!==0||e1(o,a,l)}return l}function e1(t,a,l){t.flags|=16384,t={getSnapshot:a,value:l},a=Ye.updateQueue,a===null?(a=fo(),Ye.updateQueue=a,a.stores=[t]):(l=a.stores,l===null?a.stores=[t]:l.push(t))}function t1(t,a,l,o){a.value=l,a.getSnapshot=o,r1(a)&&a1(t)}function n1(t,a,l){return l(function(){r1(a)&&a1(t)})}function r1(t){var a=t.getSnapshot;t=t.value;try{var l=a();return!Xn(t,l)}catch{return!0}}function a1(t){var a=xs(t,2);a!==null&&zn(a,t,2)}function Jf(t){var a=Tn();if(typeof t=="function"){var l=t;if(t=l(),Cs){Cr(!0);try{l()}finally{Cr(!1)}}}return a.memoizedState=a.baseState=t,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:t},a}function s1(t,a,l,o){return t.baseState=l,Kf(t,yt,typeof o=="function"?o:ra)}function L4(t,a,l,o,d){if(mo(t))throw Error(s(485));if(t=a.action,t!==null){var p={payload:d,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){p.listeners.push(S)}};X.T!==null?l(!0):p.isTransition=!1,o(p),l=a.pending,l===null?(p.next=a.pending=p,i1(a,p)):(p.next=l.next,a.pending=l.next=p)}}function i1(t,a){var l=a.action,o=a.payload,d=t.state;if(a.isTransition){var p=X.T,S={};X.T=S;try{var T=l(d,o),q=X.S;q!==null&&q(S,T),l1(t,a,T)}catch(ae){Qf(t,a,ae)}finally{p!==null&&S.types!==null&&(p.types=S.types),X.T=p}}else try{p=l(d,o),l1(t,a,p)}catch(ae){Qf(t,a,ae)}}function l1(t,a,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(o){o1(t,a,o)},function(o){return Qf(t,a,o)}):o1(t,a,l)}function o1(t,a,l){a.status="fulfilled",a.value=l,c1(a),t.state=l,a=t.pending,a!==null&&(l=a.next,l===a?t.pending=null:(l=l.next,a.next=l,i1(t,l)))}function Qf(t,a,l){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do a.status="rejected",a.reason=l,c1(a),a=a.next;while(a!==o)}t.action=null}function c1(t){t=t.listeners;for(var a=0;a<t.length;a++)(0,t[a])()}function f1(t,a){return a}function u1(t,a){if(lt){var l=_t.formState;if(l!==null){e:{var o=Ye;if(lt){if(kt){t:{for(var d=kt,p=hr;d.nodeType!==8;){if(!p){d=null;break t}if(d=pr(d.nextSibling),d===null){d=null;break t}}p=d.data,d=p==="F!"||p==="F"?d:null}if(d){kt=pr(d.nextSibling),o=d.data==="F!";break e}}ka(o)}o=!1}o&&(a=l[0])}}return l=Tn(),l.memoizedState=l.baseState=a,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:f1,lastRenderedState:a},l.queue=o,l=B1.bind(null,Ye,o),o.dispatch=l,o=Jf(!1),p=ru.bind(null,Ye,!1,o.queue),o=Tn(),d={state:a,dispatch:null,action:t,pending:null},o.queue=d,l=L4.bind(null,Ye,d,p,l),d.dispatch=l,o.memoizedState=t,[a,l,!1]}function d1(t){var a=Wt();return h1(a,yt,t)}function h1(t,a,l){if(a=Kf(t,a,f1)[0],t=ho(ra)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var o=w0(a)}catch(S){throw S===gi?no:S}else o=a;a=Wt();var d=a.queue,p=d.dispatch;return l!==a.memoizedState&&(Ye.flags|=2048,_i(9,{destroy:void 0},j4.bind(null,d,l),null)),[o,p,t]}function j4(t,a){t.action=a}function x1(t){var a=Wt(),l=yt;if(l!==null)return h1(a,l,t);Wt(),a=a.memoizedState,l=Wt();var o=l.queue.dispatch;return l.memoizedState=t,[a,o,!1]}function _i(t,a,l,o){return t={tag:t,create:l,deps:o,inst:a,next:null},a=Ye.updateQueue,a===null&&(a=fo(),Ye.updateQueue=a),l=a.lastEffect,l===null?a.lastEffect=t.next=t:(o=l.next,l.next=t,t.next=o,a.lastEffect=t),t}function p1(){return Wt().memoizedState}function xo(t,a,l,o){var d=Tn();Ye.flags|=t,d.memoizedState=_i(1|a,{destroy:void 0},l,o===void 0?null:o)}function po(t,a,l,o){var d=Wt();o=o===void 0?null:o;var p=d.memoizedState.inst;yt!==null&&o!==null&&Wf(o,yt.memoizedState.deps)?d.memoizedState=_i(a,p,l,o):(Ye.flags|=t,d.memoizedState=_i(1|a,p,l,o))}function m1(t,a){xo(8390656,8,t,a)}function Zf(t,a){po(2048,8,t,a)}function I4(t){Ye.flags|=4;var a=Ye.updateQueue;if(a===null)a=fo(),Ye.updateQueue=a,a.events=[t];else{var l=a.events;l===null?a.events=[t]:l.push(t)}}function g1(t){var a=Wt().memoizedState;return I4({ref:a,nextImpl:t}),function(){if((pt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}function v1(t,a){return po(4,2,t,a)}function y1(t,a){return po(4,4,t,a)}function b1(t,a){if(typeof a=="function"){t=t();var l=a(t);return function(){typeof l=="function"?l():a(null)}}if(a!=null)return t=t(),a.current=t,function(){a.current=null}}function S1(t,a,l){l=l!=null?l.concat([t]):null,po(4,4,b1.bind(null,a,t),l)}function $f(){}function _1(t,a){var l=Wt();a=a===void 0?null:a;var o=l.memoizedState;return a!==null&&Wf(a,o[1])?o[0]:(l.memoizedState=[t,a],t)}function C1(t,a){var l=Wt();a=a===void 0?null:a;var o=l.memoizedState;if(a!==null&&Wf(a,o[1]))return o[0];if(o=t(),Cs){Cr(!0);try{t()}finally{Cr(!1)}}return l.memoizedState=[o,a],o}function eu(t,a,l){return l===void 0||(na&1073741824)!==0&&(rt&261930)===0?t.memoizedState=a:(t.memoizedState=l,t=Ep(),Ye.lanes|=t,ja|=t,l)}function E1(t,a,l,o){return Xn(l,a)?l:yi.current!==null?(t=eu(t,l,o),Xn(t,a)||(Vt=!0),t):(na&42)===0||(na&1073741824)!==0&&(rt&261930)===0?(Vt=!0,t.memoizedState=l):(t=Ep(),Ye.lanes|=t,ja|=t,a)}function w1(t,a,l,o,d){var p=ee.p;ee.p=p!==0&&8>p?p:8;var S=X.T,T={};X.T=T,ru(t,!1,a,l);try{var q=d(),ae=X.S;if(ae!==null&&ae(T,q),q!==null&&typeof q=="object"&&typeof q.then=="function"){var pe=N4(q,o);A0(t,a,pe,Jn(t))}else A0(t,a,o,Jn(t))}catch(Se){A0(t,a,{then:function(){},status:"rejected",reason:Se},Jn())}finally{ee.p=p,S!==null&&T.types!==null&&(S.types=T.types),X.T=S}}function H4(){}function tu(t,a,l,o){if(t.tag!==5)throw Error(s(476));var d=A1(t).queue;w1(t,d,a,we,l===null?H4:function(){return T1(t),l(o)})}function A1(t){var a=t.memoizedState;if(a!==null)return a;a={memoizedState:we,baseState:we,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:we},next:null};var l={};return a.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:l},next:null},t.memoizedState=a,t=t.alternate,t!==null&&(t.memoizedState=a),a}function T1(t){var a=A1(t);a.next===null&&(a=t.alternate.memoizedState),A0(t,a.next.queue,{},Jn())}function nu(){return un(P0)}function k1(){return Wt().memoizedState}function D1(){return Wt().memoizedState}function z4(t){for(var a=t.return;a!==null;){switch(a.tag){case 24:case 3:var l=Jn();t=Fa(l);var o=Ra(a,t,l);o!==null&&(zn(o,a,l),S0(o,a,l)),a={cache:Ff()},t.payload=a;return}a=a.return}}function U4(t,a,l){var o=Jn();l={lane:o,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},mo(t)?F1(a,l):(l=bf(t,a,l,o),l!==null&&(zn(l,t,o),R1(l,a,o)))}function B1(t,a,l){var o=Jn();A0(t,a,l,o)}function A0(t,a,l,o){var d={lane:o,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(mo(t))F1(a,d);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=a.lastRenderedReducer,p!==null))try{var S=a.lastRenderedState,T=p(S,l);if(d.hasEagerState=!0,d.eagerState=T,Xn(T,S))return Yl(t,a,d,0),_t===null&&Kl(),!1}catch{}if(l=bf(t,a,d,o),l!==null)return zn(l,t,o),R1(l,a,o),!0}return!1}function ru(t,a,l,o){if(o={lane:2,revertLane:Mu(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},mo(t)){if(a)throw Error(s(479))}else a=bf(t,l,o,2),a!==null&&zn(a,t,2)}function mo(t){var a=t.alternate;return t===Ye||a!==null&&a===Ye}function F1(t,a){bi=oo=!0;var l=t.pending;l===null?a.next=a:(a.next=l.next,l.next=a),t.pending=a}function R1(t,a,l){if((l&4194048)!==0){var o=a.lanes;o&=t.pendingLanes,l|=o,a.lanes=l,ti(t,l)}}var T0={readContext:un,use:uo,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useLayoutEffect:Mt,useInsertionEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useSyncExternalStore:Mt,useId:Mt,useHostTransitionStatus:Mt,useFormState:Mt,useActionState:Mt,useOptimistic:Mt,useMemoCache:Mt,useCacheRefresh:Mt};T0.useEffectEvent=Mt;var N1={readContext:un,use:uo,useCallback:function(t,a){return Tn().memoizedState=[t,a===void 0?null:a],t},useContext:un,useEffect:m1,useImperativeHandle:function(t,a,l){l=l!=null?l.concat([t]):null,xo(4194308,4,b1.bind(null,a,t),l)},useLayoutEffect:function(t,a){return xo(4194308,4,t,a)},useInsertionEffect:function(t,a){xo(4,2,t,a)},useMemo:function(t,a){var l=Tn();a=a===void 0?null:a;var o=t();if(Cs){Cr(!0);try{t()}finally{Cr(!1)}}return l.memoizedState=[o,a],o},useReducer:function(t,a,l){var o=Tn();if(l!==void 0){var d=l(a);if(Cs){Cr(!0);try{l(a)}finally{Cr(!1)}}}else d=a;return o.memoizedState=o.baseState=d,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:d},o.queue=t,t=t.dispatch=U4.bind(null,Ye,t),[o.memoizedState,t]},useRef:function(t){var a=Tn();return t={current:t},a.memoizedState=t},useState:function(t){t=Jf(t);var a=t.queue,l=B1.bind(null,Ye,a);return a.dispatch=l,[t.memoizedState,l]},useDebugValue:$f,useDeferredValue:function(t,a){var l=Tn();return eu(l,t,a)},useTransition:function(){var t=Jf(!1);return t=w1.bind(null,Ye,t.queue,!0,!1),Tn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,a,l){var o=Ye,d=Tn();if(lt){if(l===void 0)throw Error(s(407));l=l()}else{if(l=a(),_t===null)throw Error(s(349));(rt&127)!==0||e1(o,a,l)}d.memoizedState=l;var p={value:l,getSnapshot:a};return d.queue=p,m1(n1.bind(null,o,p,t),[t]),o.flags|=2048,_i(9,{destroy:void 0},t1.bind(null,o,p,l,a),null),l},useId:function(){var t=Tn(),a=_t.identifierPrefix;if(lt){var l=Ir,o=jr;l=(o&~(1<<32-An(o)-1)).toString(32)+l,a="_"+a+"R_"+l,l=co++,0<l&&(a+="H"+l.toString(32)),a+="_"}else l=O4++,a="_"+a+"r_"+l.toString(32)+"_";return t.memoizedState=a},useHostTransitionStatus:nu,useFormState:u1,useActionState:u1,useOptimistic:function(t){var a=Tn();a.memoizedState=a.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=l,a=ru.bind(null,Ye,!0,l),l.dispatch=a,[t,a]},useMemoCache:Vf,useCacheRefresh:function(){return Tn().memoizedState=z4.bind(null,Ye)},useEffectEvent:function(t){var a=Tn(),l={impl:t};return a.memoizedState=l,function(){if((pt&2)!==0)throw Error(s(440));return l.impl.apply(void 0,arguments)}}},au={readContext:un,use:uo,useCallback:_1,useContext:un,useEffect:Zf,useImperativeHandle:S1,useInsertionEffect:v1,useLayoutEffect:y1,useMemo:C1,useReducer:ho,useRef:p1,useState:function(){return ho(ra)},useDebugValue:$f,useDeferredValue:function(t,a){var l=Wt();return E1(l,yt.memoizedState,t,a)},useTransition:function(){var t=ho(ra)[0],a=Wt().memoizedState;return[typeof t=="boolean"?t:w0(t),a]},useSyncExternalStore:$x,useId:k1,useHostTransitionStatus:nu,useFormState:d1,useActionState:d1,useOptimistic:function(t,a){var l=Wt();return s1(l,yt,t,a)},useMemoCache:Vf,useCacheRefresh:D1};au.useEffectEvent=g1;var O1={readContext:un,use:uo,useCallback:_1,useContext:un,useEffect:Zf,useImperativeHandle:S1,useInsertionEffect:v1,useLayoutEffect:y1,useMemo:C1,useReducer:Yf,useRef:p1,useState:function(){return Yf(ra)},useDebugValue:$f,useDeferredValue:function(t,a){var l=Wt();return yt===null?eu(l,t,a):E1(l,yt.memoizedState,t,a)},useTransition:function(){var t=Yf(ra)[0],a=Wt().memoizedState;return[typeof t=="boolean"?t:w0(t),a]},useSyncExternalStore:$x,useId:k1,useHostTransitionStatus:nu,useFormState:x1,useActionState:x1,useOptimistic:function(t,a){var l=Wt();return yt!==null?s1(l,yt,t,a):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:Vf,useCacheRefresh:D1};O1.useEffectEvent=g1;function su(t,a,l,o){a=t.memoizedState,l=l(o,a),l=l==null?a:v({},a,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var iu={enqueueSetState:function(t,a,l){t=t._reactInternals;var o=Jn(),d=Fa(o);d.payload=a,l!=null&&(d.callback=l),a=Ra(t,d,o),a!==null&&(zn(a,t,o),S0(a,t,o))},enqueueReplaceState:function(t,a,l){t=t._reactInternals;var o=Jn(),d=Fa(o);d.tag=1,d.payload=a,l!=null&&(d.callback=l),a=Ra(t,d,o),a!==null&&(zn(a,t,o),S0(a,t,o))},enqueueForceUpdate:function(t,a){t=t._reactInternals;var l=Jn(),o=Fa(l);o.tag=2,a!=null&&(o.callback=a),a=Ra(t,o,l),a!==null&&(zn(a,t,l),S0(a,t,l))}};function M1(t,a,l,o,d,p,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,p,S):a.prototype&&a.prototype.isPureReactComponent?!h0(l,o)||!h0(d,p):!0}function L1(t,a,l,o){t=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(l,o),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(l,o),a.state!==t&&iu.enqueueReplaceState(a,a.state,null)}function Es(t,a){var l=a;if("ref"in a){l={};for(var o in a)o!=="ref"&&(l[o]=a[o])}if(t=t.defaultProps){l===a&&(l=v({},l));for(var d in t)l[d]===void 0&&(l[d]=t[d])}return l}function j1(t){Vl(t)}function I1(t){console.error(t)}function H1(t){Vl(t)}function go(t,a){try{var l=t.onUncaughtError;l(a.value,{componentStack:a.stack})}catch(o){setTimeout(function(){throw o})}}function z1(t,a,l){try{var o=t.onCaughtError;o(l.value,{componentStack:l.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function lu(t,a,l){return l=Fa(l),l.tag=3,l.payload={element:null},l.callback=function(){go(t,a)},l}function U1(t){return t=Fa(t),t.tag=3,t}function W1(t,a,l,o){var d=l.type.getDerivedStateFromError;if(typeof d=="function"){var p=o.value;t.payload=function(){return d(p)},t.callback=function(){z1(a,l,o)}}var S=l.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){z1(a,l,o),typeof d!="function"&&(Ia===null?Ia=new Set([this]):Ia.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function W4(t,a,l,o,d){if(l.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(a=l.alternate,a!==null&&xi(a,l,d,!0),l=qn.current,l!==null){switch(l.tag){case 31:case 13:return xr===null?Do():l.alternate===null&&Lt===0&&(Lt=3),l.flags&=-257,l.flags|=65536,l.lanes=d,o===ro?l.flags|=16384:(a=l.updateQueue,a===null?l.updateQueue=new Set([o]):a.add(o),Ru(t,o,d)),!1;case 22:return l.flags|=65536,o===ro?l.flags|=16384:(a=l.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([o])},l.updateQueue=a):(l=a.retryQueue,l===null?a.retryQueue=new Set([o]):l.add(o)),Ru(t,o,d)),!1}throw Error(s(435,l.tag))}return Ru(t,o,d),Do(),!1}if(lt)return a=qn.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=d,o!==Af&&(t=Error(s(422),{cause:o}),m0(fr(t,l)))):(o!==Af&&(a=Error(s(423),{cause:o}),m0(fr(a,l))),t=t.current.alternate,t.flags|=65536,d&=-d,t.lanes|=d,o=fr(o,l),d=lu(t.stateNode,o,d),jf(t,d),Lt!==4&&(Lt=2)),!1;var p=Error(s(520),{cause:o});if(p=fr(p,l),M0===null?M0=[p]:M0.push(p),Lt!==4&&(Lt=2),a===null)return!0;o=fr(o,l),l=a;do{switch(l.tag){case 3:return l.flags|=65536,t=d&-d,l.lanes|=t,t=lu(l.stateNode,o,t),jf(l,t),!1;case 1:if(a=l.type,p=l.stateNode,(l.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Ia===null||!Ia.has(p))))return l.flags|=65536,d&=-d,l.lanes|=d,d=U1(d),W1(d,t,l,o),jf(l,d),!1}l=l.return}while(l!==null);return!1}var ou=Error(s(461)),Vt=!1;function dn(t,a,l,o){a.child=t===null?qx(a,null,l,o):_s(a,t.child,l,o)}function P1(t,a,l,o,d){l=l.render;var p=a.ref;if("ref"in o){var S={};for(var T in o)T!=="ref"&&(S[T]=o[T])}else S=o;return vs(a),o=Pf(t,a,l,S,p,d),T=Xf(),t!==null&&!Vt?(Gf(t,a,d),aa(t,a,d)):(lt&&T&&Ef(a),a.flags|=1,dn(t,a,o,d),a.child)}function X1(t,a,l,o,d){if(t===null){var p=l.type;return typeof p=="function"&&!Sf(p)&&p.defaultProps===void 0&&l.compare===null?(a.tag=15,a.type=p,G1(t,a,p,o,d)):(t=Ql(l.type,null,o,a,a.mode,d),t.ref=a.ref,t.return=a,a.child=t)}if(p=t.child,!mu(t,d)){var S=p.memoizedProps;if(l=l.compare,l=l!==null?l:h0,l(S,o)&&t.ref===a.ref)return aa(t,a,d)}return a.flags|=1,t=Zr(p,o),t.ref=a.ref,t.return=a,a.child=t}function G1(t,a,l,o,d){if(t!==null){var p=t.memoizedProps;if(h0(p,o)&&t.ref===a.ref)if(Vt=!1,a.pendingProps=o=p,mu(t,d))(t.flags&131072)!==0&&(Vt=!0);else return a.lanes=t.lanes,aa(t,a,d)}return cu(t,a,l,o,d)}function q1(t,a,l,o){var d=o.children,p=t!==null?t.memoizedState:null;if(t===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((a.flags&128)!==0){if(p=p!==null?p.baseLanes|l:l,t!==null){for(o=a.child=t.child,d=0;o!==null;)d=d|o.lanes|o.childLanes,o=o.sibling;o=d&~p}else o=0,a.child=null;return V1(t,a,p,l,o)}if((l&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},t!==null&&to(a,p!==null?p.cachePool:null),p!==null?Yx(a,p):Hf(),Jx(a);else return o=a.lanes=536870912,V1(t,a,p!==null?p.baseLanes|l:l,l,o)}else p!==null?(to(a,p.cachePool),Yx(a,p),Oa(),a.memoizedState=null):(t!==null&&to(a,null),Hf(),Oa());return dn(t,a,d,l),a.child}function k0(t,a){return t!==null&&t.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function V1(t,a,l,o,d){var p=Nf();return p=p===null?null:{parent:Gt._currentValue,pool:p},a.memoizedState={baseLanes:l,cachePool:p},t!==null&&to(a,null),Hf(),Jx(a),t!==null&&xi(t,a,o,!0),a.childLanes=d,null}function vo(t,a){return a=bo({mode:a.mode,children:a.children},t.mode),a.ref=t.ref,t.child=a,a.return=t,a}function K1(t,a,l){return _s(a,t.child,null,l),t=vo(a,a.pendingProps),t.flags|=2,Vn(a),a.memoizedState=null,t}function P4(t,a,l){var o=a.pendingProps,d=(a.flags&128)!==0;if(a.flags&=-129,t===null){if(lt){if(o.mode==="hidden")return t=vo(a,o),a.lanes=536870912,k0(null,t);if(Uf(a),(t=kt)?(t=im(t,hr),t=t!==null&&t.data==="&"?t:null,t!==null&&(a.memoizedState={dehydrated:t,treeContext:Aa!==null?{id:jr,overflow:Ir}:null,retryLane:536870912,hydrationErrors:null},l=Fx(t),l.return=a,a.child=l,fn=a,kt=null)):t=null,t===null)throw ka(a);return a.lanes=536870912,null}return vo(a,o)}var p=t.memoizedState;if(p!==null){var S=p.dehydrated;if(Uf(a),d)if(a.flags&256)a.flags&=-257,a=K1(t,a,l);else if(a.memoizedState!==null)a.child=t.child,a.flags|=128,a=null;else throw Error(s(558));else if(Vt||xi(t,a,l,!1),d=(l&t.childLanes)!==0,Vt||d){if(o=_t,o!==null&&(S=jl(o,l),S!==0&&S!==p.retryLane))throw p.retryLane=S,xs(t,S),zn(o,t,S),ou;Do(),a=K1(t,a,l)}else t=p.treeContext,kt=pr(S.nextSibling),fn=a,lt=!0,Ta=null,hr=!1,t!==null&&Ox(a,t),a=vo(a,o),a.flags|=4096;return a}return t=Zr(t.child,{mode:o.mode,children:o.children}),t.ref=a.ref,a.child=t,t.return=a,t}function yo(t,a){var l=a.ref;if(l===null)t!==null&&t.ref!==null&&(a.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(s(284));(t===null||t.ref!==l)&&(a.flags|=4194816)}}function cu(t,a,l,o,d){return vs(a),l=Pf(t,a,l,o,void 0,d),o=Xf(),t!==null&&!Vt?(Gf(t,a,d),aa(t,a,d)):(lt&&o&&Ef(a),a.flags|=1,dn(t,a,l,d),a.child)}function Y1(t,a,l,o,d,p){return vs(a),a.updateQueue=null,l=Zx(a,o,l,d),Qx(t),o=Xf(),t!==null&&!Vt?(Gf(t,a,p),aa(t,a,p)):(lt&&o&&Ef(a),a.flags|=1,dn(t,a,l,p),a.child)}function J1(t,a,l,o,d){if(vs(a),a.stateNode===null){var p=fi,S=l.contextType;typeof S=="object"&&S!==null&&(p=un(S)),p=new l(o,p),a.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=iu,a.stateNode=p,p._reactInternals=a,p=a.stateNode,p.props=o,p.state=a.memoizedState,p.refs={},Mf(a),S=l.contextType,p.context=typeof S=="object"&&S!==null?un(S):fi,p.state=a.memoizedState,S=l.getDerivedStateFromProps,typeof S=="function"&&(su(a,l,S,o),p.state=a.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(S=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),S!==p.state&&iu.enqueueReplaceState(p,p.state,null),C0(a,o,p,d),_0(),p.state=a.memoizedState),typeof p.componentDidMount=="function"&&(a.flags|=4194308),o=!0}else if(t===null){p=a.stateNode;var T=a.memoizedProps,q=Es(l,T);p.props=q;var ae=p.context,pe=l.contextType;S=fi,typeof pe=="object"&&pe!==null&&(S=un(pe));var Se=l.getDerivedStateFromProps;pe=typeof Se=="function"||typeof p.getSnapshotBeforeUpdate=="function",T=a.pendingProps!==T,pe||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(T||ae!==S)&&L1(a,p,o,S),Ba=!1;var oe=a.memoizedState;p.state=oe,C0(a,o,p,d),_0(),ae=a.memoizedState,T||oe!==ae||Ba?(typeof Se=="function"&&(su(a,l,Se,o),ae=a.memoizedState),(q=Ba||M1(a,l,q,o,oe,ae,S))?(pe||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(a.flags|=4194308)):(typeof p.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=o,a.memoizedState=ae),p.props=o,p.state=ae,p.context=S,o=q):(typeof p.componentDidMount=="function"&&(a.flags|=4194308),o=!1)}else{p=a.stateNode,Lf(t,a),S=a.memoizedProps,pe=Es(l,S),p.props=pe,Se=a.pendingProps,oe=p.context,ae=l.contextType,q=fi,typeof ae=="object"&&ae!==null&&(q=un(ae)),T=l.getDerivedStateFromProps,(ae=typeof T=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(S!==Se||oe!==q)&&L1(a,p,o,q),Ba=!1,oe=a.memoizedState,p.state=oe,C0(a,o,p,d),_0();var xe=a.memoizedState;S!==Se||oe!==xe||Ba||t!==null&&t.dependencies!==null&&$l(t.dependencies)?(typeof T=="function"&&(su(a,l,T,o),xe=a.memoizedState),(pe=Ba||M1(a,l,pe,o,oe,xe,q)||t!==null&&t.dependencies!==null&&$l(t.dependencies))?(ae||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(o,xe,q),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(o,xe,q)),typeof p.componentDidUpdate=="function"&&(a.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof p.componentDidUpdate!="function"||S===t.memoizedProps&&oe===t.memoizedState||(a.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&oe===t.memoizedState||(a.flags|=1024),a.memoizedProps=o,a.memoizedState=xe),p.props=o,p.state=xe,p.context=q,o=pe):(typeof p.componentDidUpdate!="function"||S===t.memoizedProps&&oe===t.memoizedState||(a.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&oe===t.memoizedState||(a.flags|=1024),o=!1)}return p=o,yo(t,a),o=(a.flags&128)!==0,p||o?(p=a.stateNode,l=o&&typeof l.getDerivedStateFromError!="function"?null:p.render(),a.flags|=1,t!==null&&o?(a.child=_s(a,t.child,null,d),a.child=_s(a,null,l,d)):dn(t,a,l,d),a.memoizedState=p.state,t=a.child):t=aa(t,a,d),t}function Q1(t,a,l,o){return ms(),a.flags|=256,dn(t,a,l,o),a.child}var fu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function uu(t){return{baseLanes:t,cachePool:zx()}}function du(t,a,l){return t=t!==null?t.childLanes&~l:0,a&&(t|=Yn),t}function Z1(t,a,l){var o=a.pendingProps,d=!1,p=(a.flags&128)!==0,S;if((S=p)||(S=t!==null&&t.memoizedState===null?!1:(Ut.current&2)!==0),S&&(d=!0,a.flags&=-129),S=(a.flags&32)!==0,a.flags&=-33,t===null){if(lt){if(d?Na(a):Oa(),(t=kt)?(t=im(t,hr),t=t!==null&&t.data!=="&"?t:null,t!==null&&(a.memoizedState={dehydrated:t,treeContext:Aa!==null?{id:jr,overflow:Ir}:null,retryLane:536870912,hydrationErrors:null},l=Fx(t),l.return=a,a.child=l,fn=a,kt=null)):t=null,t===null)throw ka(a);return Ku(t)?a.lanes=32:a.lanes=536870912,null}var T=o.children;return o=o.fallback,d?(Oa(),d=a.mode,T=bo({mode:"hidden",children:T},d),o=ps(o,d,l,null),T.return=a,o.return=a,T.sibling=o,a.child=T,o=a.child,o.memoizedState=uu(l),o.childLanes=du(t,S,l),a.memoizedState=fu,k0(null,o)):(Na(a),hu(a,T))}var q=t.memoizedState;if(q!==null&&(T=q.dehydrated,T!==null)){if(p)a.flags&256?(Na(a),a.flags&=-257,a=xu(t,a,l)):a.memoizedState!==null?(Oa(),a.child=t.child,a.flags|=128,a=null):(Oa(),T=o.fallback,d=a.mode,o=bo({mode:"visible",children:o.children},d),T=ps(T,d,l,null),T.flags|=2,o.return=a,T.return=a,o.sibling=T,a.child=o,_s(a,t.child,null,l),o=a.child,o.memoizedState=uu(l),o.childLanes=du(t,S,l),a.memoizedState=fu,a=k0(null,o));else if(Na(a),Ku(T)){if(S=T.nextSibling&&T.nextSibling.dataset,S)var ae=S.dgst;S=ae,o=Error(s(419)),o.stack="",o.digest=S,m0({value:o,source:null,stack:null}),a=xu(t,a,l)}else if(Vt||xi(t,a,l,!1),S=(l&t.childLanes)!==0,Vt||S){if(S=_t,S!==null&&(o=jl(S,l),o!==0&&o!==q.retryLane))throw q.retryLane=o,xs(t,o),zn(S,t,o),ou;Vu(T)||Do(),a=xu(t,a,l)}else Vu(T)?(a.flags|=192,a.child=t.child,a=null):(t=q.treeContext,kt=pr(T.nextSibling),fn=a,lt=!0,Ta=null,hr=!1,t!==null&&Ox(a,t),a=hu(a,o.children),a.flags|=4096);return a}return d?(Oa(),T=o.fallback,d=a.mode,q=t.child,ae=q.sibling,o=Zr(q,{mode:"hidden",children:o.children}),o.subtreeFlags=q.subtreeFlags&65011712,ae!==null?T=Zr(ae,T):(T=ps(T,d,l,null),T.flags|=2),T.return=a,o.return=a,o.sibling=T,a.child=o,k0(null,o),o=a.child,T=t.child.memoizedState,T===null?T=uu(l):(d=T.cachePool,d!==null?(q=Gt._currentValue,d=d.parent!==q?{parent:q,pool:q}:d):d=zx(),T={baseLanes:T.baseLanes|l,cachePool:d}),o.memoizedState=T,o.childLanes=du(t,S,l),a.memoizedState=fu,k0(t.child,o)):(Na(a),l=t.child,t=l.sibling,l=Zr(l,{mode:"visible",children:o.children}),l.return=a,l.sibling=null,t!==null&&(S=a.deletions,S===null?(a.deletions=[t],a.flags|=16):S.push(t)),a.child=l,a.memoizedState=null,l)}function hu(t,a){return a=bo({mode:"visible",children:a},t.mode),a.return=t,t.child=a}function bo(t,a){return t=Gn(22,t,null,a),t.lanes=0,t}function xu(t,a,l){return _s(a,t.child,null,l),t=hu(a,a.pendingProps.children),t.flags|=2,a.memoizedState=null,t}function $1(t,a,l){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a),Df(t.return,a,l)}function pu(t,a,l,o,d,p){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:o,tail:l,tailMode:d,treeForkCount:p}:(S.isBackwards=a,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=l,S.tailMode=d,S.treeForkCount=p)}function ep(t,a,l){var o=a.pendingProps,d=o.revealOrder,p=o.tail;o=o.children;var S=Ut.current,T=(S&2)!==0;if(T?(S=S&1|2,a.flags|=128):S&=1,J(Ut,S),dn(t,a,o,l),o=lt?p0:0,!T&&t!==null&&(t.flags&128)!==0)e:for(t=a.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$1(t,l,a);else if(t.tag===19)$1(t,l,a);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break e;for(;t.sibling===null;){if(t.return===null||t.return===a)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(d){case"forwards":for(l=a.child,d=null;l!==null;)t=l.alternate,t!==null&&lo(t)===null&&(d=l),l=l.sibling;l=d,l===null?(d=a.child,a.child=null):(d=l.sibling,l.sibling=null),pu(a,!1,d,l,p,o);break;case"backwards":case"unstable_legacy-backwards":for(l=null,d=a.child,a.child=null;d!==null;){if(t=d.alternate,t!==null&&lo(t)===null){a.child=d;break}t=d.sibling,d.sibling=l,l=d,d=t}pu(a,!0,l,null,p,o);break;case"together":pu(a,!1,null,null,void 0,o);break;default:a.memoizedState=null}return a.child}function aa(t,a,l){if(t!==null&&(a.dependencies=t.dependencies),ja|=a.lanes,(l&a.childLanes)===0)if(t!==null){if(xi(t,a,l,!1),(l&a.childLanes)===0)return null}else return null;if(t!==null&&a.child!==t.child)throw Error(s(153));if(a.child!==null){for(t=a.child,l=Zr(t,t.pendingProps),a.child=l,l.return=a;t.sibling!==null;)t=t.sibling,l=l.sibling=Zr(t,t.pendingProps),l.return=a;l.sibling=null}return a.child}function mu(t,a){return(t.lanes&a)!==0?!0:(t=t.dependencies,!!(t!==null&&$l(t)))}function X4(t,a,l){switch(a.tag){case 3:ve(a,a.stateNode.containerInfo),Da(a,Gt,t.memoizedState.cache),ms();break;case 27:case 5:_e(a);break;case 4:ve(a,a.stateNode.containerInfo);break;case 10:Da(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Uf(a),null;break;case 13:var o=a.memoizedState;if(o!==null)return o.dehydrated!==null?(Na(a),a.flags|=128,null):(l&a.child.childLanes)!==0?Z1(t,a,l):(Na(a),t=aa(t,a,l),t!==null?t.sibling:null);Na(a);break;case 19:var d=(t.flags&128)!==0;if(o=(l&a.childLanes)!==0,o||(xi(t,a,l,!1),o=(l&a.childLanes)!==0),d){if(o)return ep(t,a,l);a.flags|=128}if(d=a.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),J(Ut,Ut.current),o)break;return null;case 22:return a.lanes=0,q1(t,a,l,a.pendingProps);case 24:Da(a,Gt,t.memoizedState.cache)}return aa(t,a,l)}function tp(t,a,l){if(t!==null)if(t.memoizedProps!==a.pendingProps)Vt=!0;else{if(!mu(t,l)&&(a.flags&128)===0)return Vt=!1,X4(t,a,l);Vt=(t.flags&131072)!==0}else Vt=!1,lt&&(a.flags&1048576)!==0&&Nx(a,p0,a.index);switch(a.lanes=0,a.tag){case 16:e:{var o=a.pendingProps;if(t=bs(a.elementType),a.type=t,typeof t=="function")Sf(t)?(o=Es(t,o),a.tag=1,a=J1(null,a,t,o,l)):(a.tag=0,a=cu(null,a,t,o,l));else{if(t!=null){var d=t.$$typeof;if(d===H){a.tag=11,a=P1(null,a,t,o,l);break e}else if(d===R){a.tag=14,a=X1(null,a,t,o,l);break e}}throw a=Ce(t)||t,Error(s(306,a,""))}}return a;case 0:return cu(t,a,a.type,a.pendingProps,l);case 1:return o=a.type,d=Es(o,a.pendingProps),J1(t,a,o,d,l);case 3:e:{if(ve(a,a.stateNode.containerInfo),t===null)throw Error(s(387));o=a.pendingProps;var p=a.memoizedState;d=p.element,Lf(t,a),C0(a,o,null,l);var S=a.memoizedState;if(o=S.cache,Da(a,Gt,o),o!==p.cache&&Bf(a,[Gt],l,!0),_0(),o=S.element,p.isDehydrated)if(p={element:o,isDehydrated:!1,cache:S.cache},a.updateQueue.baseState=p,a.memoizedState=p,a.flags&256){a=Q1(t,a,o,l);break e}else if(o!==d){d=fr(Error(s(424)),a),m0(d),a=Q1(t,a,o,l);break e}else for(t=a.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,kt=pr(t.firstChild),fn=a,lt=!0,Ta=null,hr=!0,l=qx(a,null,o,l),a.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(ms(),o===d){a=aa(t,a,l);break e}dn(t,a,o,l)}a=a.child}return a;case 26:return yo(t,a),t===null?(l=dm(a.type,null,a.pendingProps,null))?a.memoizedState=l:lt||(l=a.type,t=a.pendingProps,o=Lo(ue.current).createElement(l),o[F]=a,o[N]=t,hn(o,l,t),Ie(o),a.stateNode=o):a.memoizedState=dm(a.type,t.memoizedProps,a.pendingProps,t.memoizedState),null;case 27:return _e(a),t===null&&lt&&(o=a.stateNode=cm(a.type,a.pendingProps,ue.current),fn=a,hr=!0,d=kt,Wa(a.type)?(Yu=d,kt=pr(o.firstChild)):kt=d),dn(t,a,a.pendingProps.children,l),yo(t,a),t===null&&(a.flags|=4194304),a.child;case 5:return t===null&&lt&&((d=o=kt)&&(o=bS(o,a.type,a.pendingProps,hr),o!==null?(a.stateNode=o,fn=a,kt=pr(o.firstChild),hr=!1,d=!0):d=!1),d||ka(a)),_e(a),d=a.type,p=a.pendingProps,S=t!==null?t.memoizedProps:null,o=p.children,Xu(d,p)?o=null:S!==null&&Xu(d,S)&&(a.flags|=32),a.memoizedState!==null&&(d=Pf(t,a,M4,null,null,l),P0._currentValue=d),yo(t,a),dn(t,a,o,l),a.child;case 6:return t===null&&lt&&((t=l=kt)&&(l=SS(l,a.pendingProps,hr),l!==null?(a.stateNode=l,fn=a,kt=null,t=!0):t=!1),t||ka(a)),null;case 13:return Z1(t,a,l);case 4:return ve(a,a.stateNode.containerInfo),o=a.pendingProps,t===null?a.child=_s(a,null,o,l):dn(t,a,o,l),a.child;case 11:return P1(t,a,a.type,a.pendingProps,l);case 7:return dn(t,a,a.pendingProps,l),a.child;case 8:return dn(t,a,a.pendingProps.children,l),a.child;case 12:return dn(t,a,a.pendingProps.children,l),a.child;case 10:return o=a.pendingProps,Da(a,a.type,o.value),dn(t,a,o.children,l),a.child;case 9:return d=a.type._context,o=a.pendingProps.children,vs(a),d=un(d),o=o(d),a.flags|=1,dn(t,a,o,l),a.child;case 14:return X1(t,a,a.type,a.pendingProps,l);case 15:return G1(t,a,a.type,a.pendingProps,l);case 19:return ep(t,a,l);case 31:return P4(t,a,l);case 22:return q1(t,a,l,a.pendingProps);case 24:return vs(a),o=un(Gt),t===null?(d=Nf(),d===null&&(d=_t,p=Ff(),d.pooledCache=p,p.refCount++,p!==null&&(d.pooledCacheLanes|=l),d=p),a.memoizedState={parent:o,cache:d},Mf(a),Da(a,Gt,d)):((t.lanes&l)!==0&&(Lf(t,a),C0(a,null,null,l),_0()),d=t.memoizedState,p=a.memoizedState,d.parent!==o?(d={parent:o,cache:o},a.memoizedState=d,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=d),Da(a,Gt,o)):(o=p.cache,Da(a,Gt,o),o!==d.cache&&Bf(a,[Gt],l,!0))),dn(t,a,a.pendingProps.children,l),a.child;case 29:throw a.pendingProps}throw Error(s(156,a.tag))}function sa(t){t.flags|=4}function gu(t,a,l,o,d){if((a=(t.mode&32)!==0)&&(a=!1),a){if(t.flags|=16777216,(d&335544128)===d)if(t.stateNode.complete)t.flags|=8192;else if(kp())t.flags|=8192;else throw Ss=ro,Of}else t.flags&=-16777217}function np(t,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!gm(a))if(kp())t.flags|=8192;else throw Ss=ro,Of}function So(t,a){a!==null&&(t.flags|=4),t.flags&16384&&(a=t.tag!==22?Ml():536870912,t.lanes|=a,Ai|=a)}function D0(t,a){if(!lt)switch(t.tailMode){case"hidden":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var o=null;l!==null;)l.alternate!==null&&(o=l),l=l.sibling;o===null?a||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Dt(t){var a=t.alternate!==null&&t.alternate.child===t.child,l=0,o=0;if(a)for(var d=t.child;d!==null;)l|=d.lanes|d.childLanes,o|=d.subtreeFlags&65011712,o|=d.flags&65011712,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)l|=d.lanes|d.childLanes,o|=d.subtreeFlags,o|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=o,t.childLanes=l,a}function G4(t,a,l){var o=a.pendingProps;switch(wf(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dt(a),null;case 1:return Dt(a),null;case 3:return l=a.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),a.memoizedState.cache!==o&&(a.flags|=2048),ta(Gt),ye(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(hi(a)?sa(a):t===null||t.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Tf())),Dt(a),null;case 26:var d=a.type,p=a.memoizedState;return t===null?(sa(a),p!==null?(Dt(a),np(a,p)):(Dt(a),gu(a,d,null,o,l))):p?p!==t.memoizedState?(sa(a),Dt(a),np(a,p)):(Dt(a),a.flags&=-16777217):(t=t.memoizedProps,t!==o&&sa(a),Dt(a),gu(a,d,t,o,l)),null;case 27:if(Pe(a),l=ue.current,d=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==o&&sa(a);else{if(!o){if(a.stateNode===null)throw Error(s(166));return Dt(a),null}t=P.current,hi(a)?Mx(a):(t=cm(d,o,l),a.stateNode=t,sa(a))}return Dt(a),null;case 5:if(Pe(a),d=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==o&&sa(a);else{if(!o){if(a.stateNode===null)throw Error(s(166));return Dt(a),null}if(p=P.current,hi(a))Mx(a);else{var S=Lo(ue.current);switch(p){case 1:p=S.createElementNS("http://www.w3.org/2000/svg",d);break;case 2:p=S.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;default:switch(d){case"svg":p=S.createElementNS("http://www.w3.org/2000/svg",d);break;case"math":p=S.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;case"script":p=S.createElement("div"),p.innerHTML="<script><\/script>",p=p.removeChild(p.firstChild);break;case"select":p=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?p.multiple=!0:o.size&&(p.size=o.size);break;default:p=typeof o.is=="string"?S.createElement(d,{is:o.is}):S.createElement(d)}}p[F]=a,p[N]=o;e:for(S=a.child;S!==null;){if(S.tag===5||S.tag===6)p.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===a)break e;for(;S.sibling===null;){if(S.return===null||S.return===a)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}a.stateNode=p;e:switch(hn(p,d,o),d){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&sa(a)}}return Dt(a),gu(a,a.type,t===null?null:t.memoizedProps,a.pendingProps,l),null;case 6:if(t&&a.stateNode!=null)t.memoizedProps!==o&&sa(a);else{if(typeof o!="string"&&a.stateNode===null)throw Error(s(166));if(t=ue.current,hi(a)){if(t=a.stateNode,l=a.memoizedProps,o=null,d=fn,d!==null)switch(d.tag){case 27:case 5:o=d.memoizedProps}t[F]=a,t=!!(t.nodeValue===l||o!==null&&o.suppressHydrationWarning===!0||Zp(t.nodeValue,l)),t||ka(a,!0)}else t=Lo(t).createTextNode(o),t[F]=a,a.stateNode=t}return Dt(a),null;case 31:if(l=a.memoizedState,t===null||t.memoizedState!==null){if(o=hi(a),l!==null){if(t===null){if(!o)throw Error(s(318));if(t=a.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[F]=a}else ms(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Dt(a),t=!1}else l=Tf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),t=!0;if(!t)return a.flags&256?(Vn(a),a):(Vn(a),null);if((a.flags&128)!==0)throw Error(s(558))}return Dt(a),null;case 13:if(o=a.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(d=hi(a),o!==null&&o.dehydrated!==null){if(t===null){if(!d)throw Error(s(318));if(d=a.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(s(317));d[F]=a}else ms(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Dt(a),d=!1}else d=Tf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=d),d=!0;if(!d)return a.flags&256?(Vn(a),a):(Vn(a),null)}return Vn(a),(a.flags&128)!==0?(a.lanes=l,a):(l=o!==null,t=t!==null&&t.memoizedState!==null,l&&(o=a.child,d=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(d=o.alternate.memoizedState.cachePool.pool),p=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(p=o.memoizedState.cachePool.pool),p!==d&&(o.flags|=2048)),l!==t&&l&&(a.child.flags|=8192),So(a,a.updateQueue),Dt(a),null);case 4:return ye(),t===null&&Hu(a.stateNode.containerInfo),Dt(a),null;case 10:return ta(a.type),Dt(a),null;case 19:if(O(Ut),o=a.memoizedState,o===null)return Dt(a),null;if(d=(a.flags&128)!==0,p=o.rendering,p===null)if(d)D0(o,!1);else{if(Lt!==0||t!==null&&(t.flags&128)!==0)for(t=a.child;t!==null;){if(p=lo(t),p!==null){for(a.flags|=128,D0(o,!1),t=p.updateQueue,a.updateQueue=t,So(a,t),a.subtreeFlags=0,t=l,l=a.child;l!==null;)Bx(l,t),l=l.sibling;return J(Ut,Ut.current&1|2),lt&&$r(a,o.treeForkCount),a.child}t=t.sibling}o.tail!==null&&je()>Ao&&(a.flags|=128,d=!0,D0(o,!1),a.lanes=4194304)}else{if(!d)if(t=lo(p),t!==null){if(a.flags|=128,d=!0,t=t.updateQueue,a.updateQueue=t,So(a,t),D0(o,!0),o.tail===null&&o.tailMode==="hidden"&&!p.alternate&&!lt)return Dt(a),null}else 2*je()-o.renderingStartTime>Ao&&l!==536870912&&(a.flags|=128,d=!0,D0(o,!1),a.lanes=4194304);o.isBackwards?(p.sibling=a.child,a.child=p):(t=o.last,t!==null?t.sibling=p:a.child=p,o.last=p)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=je(),t.sibling=null,l=Ut.current,J(Ut,d?l&1|2:l&1),lt&&$r(a,o.treeForkCount),t):(Dt(a),null);case 22:case 23:return Vn(a),zf(),o=a.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(a.flags|=8192):o&&(a.flags|=8192),o?(l&536870912)!==0&&(a.flags&128)===0&&(Dt(a),a.subtreeFlags&6&&(a.flags|=8192)):Dt(a),l=a.updateQueue,l!==null&&So(a,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),o=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(o=a.memoizedState.cachePool.pool),o!==l&&(a.flags|=2048),t!==null&&O(ys),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),ta(Gt),Dt(a),null;case 25:return null;case 30:return null}throw Error(s(156,a.tag))}function q4(t,a){switch(wf(a),a.tag){case 1:return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 3:return ta(Gt),ye(),t=a.flags,(t&65536)!==0&&(t&128)===0?(a.flags=t&-65537|128,a):null;case 26:case 27:case 5:return Pe(a),null;case 31:if(a.memoizedState!==null){if(Vn(a),a.alternate===null)throw Error(s(340));ms()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 13:if(Vn(a),t=a.memoizedState,t!==null&&t.dehydrated!==null){if(a.alternate===null)throw Error(s(340));ms()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 19:return O(Ut),null;case 4:return ye(),null;case 10:return ta(a.type),null;case 22:case 23:return Vn(a),zf(),t!==null&&O(ys),t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 24:return ta(Gt),null;case 25:return null;default:return null}}function rp(t,a){switch(wf(a),a.tag){case 3:ta(Gt),ye();break;case 26:case 27:case 5:Pe(a);break;case 4:ye();break;case 31:a.memoizedState!==null&&Vn(a);break;case 13:Vn(a);break;case 19:O(Ut);break;case 10:ta(a.type);break;case 22:case 23:Vn(a),zf(),t!==null&&O(ys);break;case 24:ta(Gt)}}function B0(t,a){try{var l=a.updateQueue,o=l!==null?l.lastEffect:null;if(o!==null){var d=o.next;l=d;do{if((l.tag&t)===t){o=void 0;var p=l.create,S=l.inst;o=p(),S.destroy=o}l=l.next}while(l!==d)}}catch(T){vt(a,a.return,T)}}function Ma(t,a,l){try{var o=a.updateQueue,d=o!==null?o.lastEffect:null;if(d!==null){var p=d.next;o=p;do{if((o.tag&t)===t){var S=o.inst,T=S.destroy;if(T!==void 0){S.destroy=void 0,d=a;var q=l,ae=T;try{ae()}catch(pe){vt(d,q,pe)}}}o=o.next}while(o!==p)}}catch(pe){vt(a,a.return,pe)}}function ap(t){var a=t.updateQueue;if(a!==null){var l=t.stateNode;try{Kx(a,l)}catch(o){vt(t,t.return,o)}}}function sp(t,a,l){l.props=Es(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(o){vt(t,a,o)}}function F0(t,a){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof l=="function"?t.refCleanup=l(o):l.current=o}}catch(d){vt(t,a,d)}}function Hr(t,a){var l=t.ref,o=t.refCleanup;if(l!==null)if(typeof o=="function")try{o()}catch(d){vt(t,a,d)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(d){vt(t,a,d)}else l.current=null}function ip(t){var a=t.type,l=t.memoizedProps,o=t.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":l.autoFocus&&o.focus();break e;case"img":l.src?o.src=l.src:l.srcSet&&(o.srcset=l.srcSet)}}catch(d){vt(t,t.return,d)}}function vu(t,a,l){try{var o=t.stateNode;xS(o,t.type,l,a),o[N]=a}catch(d){vt(t,t.return,d)}}function lp(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Wa(t.type)||t.tag===4}function yu(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||lp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Wa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function bu(t,a,l){var o=t.tag;if(o===5||o===6)t=t.stateNode,a?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,a):(a=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,a.appendChild(t),l=l._reactRootContainer,l!=null||a.onclick!==null||(a.onclick=Jr));else if(o!==4&&(o===27&&Wa(t.type)&&(l=t.stateNode,a=null),t=t.child,t!==null))for(bu(t,a,l),t=t.sibling;t!==null;)bu(t,a,l),t=t.sibling}function _o(t,a,l){var o=t.tag;if(o===5||o===6)t=t.stateNode,a?l.insertBefore(t,a):l.appendChild(t);else if(o!==4&&(o===27&&Wa(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(_o(t,a,l),t=t.sibling;t!==null;)_o(t,a,l),t=t.sibling}function op(t){var a=t.stateNode,l=t.memoizedProps;try{for(var o=t.type,d=a.attributes;d.length;)a.removeAttributeNode(d[0]);hn(a,o,l),a[F]=t,a[N]=l}catch(p){vt(t,t.return,p)}}var ia=!1,Kt=!1,Su=!1,cp=typeof WeakSet=="function"?WeakSet:Set,sn=null;function V4(t,a){if(t=t.containerInfo,Wu=Po,t=Sx(t),xf(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else e:{l=(l=t.ownerDocument)&&l.defaultView||window;var o=l.getSelection&&l.getSelection();if(o&&o.rangeCount!==0){l=o.anchorNode;var d=o.anchorOffset,p=o.focusNode;o=o.focusOffset;try{l.nodeType,p.nodeType}catch{l=null;break e}var S=0,T=-1,q=-1,ae=0,pe=0,Se=t,oe=null;t:for(;;){for(var xe;Se!==l||d!==0&&Se.nodeType!==3||(T=S+d),Se!==p||o!==0&&Se.nodeType!==3||(q=S+o),Se.nodeType===3&&(S+=Se.nodeValue.length),(xe=Se.firstChild)!==null;)oe=Se,Se=xe;for(;;){if(Se===t)break t;if(oe===l&&++ae===d&&(T=S),oe===p&&++pe===o&&(q=S),(xe=Se.nextSibling)!==null)break;Se=oe,oe=Se.parentNode}Se=xe}l=T===-1||q===-1?null:{start:T,end:q}}else l=null}l=l||{start:0,end:0}}else l=null;for(Pu={focusedElem:t,selectionRange:l},Po=!1,sn=a;sn!==null;)if(a=sn,t=a.child,(a.subtreeFlags&1028)!==0&&t!==null)t.return=a,sn=t;else for(;sn!==null;){switch(a=sn,p=a.alternate,t=a.flags,a.tag){case 0:if((t&4)!==0&&(t=a.updateQueue,t=t!==null?t.events:null,t!==null))for(l=0;l<t.length;l++)d=t[l],d.ref.impl=d.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&p!==null){t=void 0,l=a,d=p.memoizedProps,p=p.memoizedState,o=l.stateNode;try{var Le=Es(l.type,d);t=o.getSnapshotBeforeUpdate(Le,p),o.__reactInternalSnapshotBeforeUpdate=t}catch(Xe){vt(l,l.return,Xe)}}break;case 3:if((t&1024)!==0){if(t=a.stateNode.containerInfo,l=t.nodeType,l===9)qu(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":qu(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=a.sibling,t!==null){t.return=a.return,sn=t;break}sn=a.return}}function fp(t,a,l){var o=l.flags;switch(l.tag){case 0:case 11:case 15:oa(t,l),o&4&&B0(5,l);break;case 1:if(oa(t,l),o&4)if(t=l.stateNode,a===null)try{t.componentDidMount()}catch(S){vt(l,l.return,S)}else{var d=Es(l.type,a.memoizedProps);a=a.memoizedState;try{t.componentDidUpdate(d,a,t.__reactInternalSnapshotBeforeUpdate)}catch(S){vt(l,l.return,S)}}o&64&&ap(l),o&512&&F0(l,l.return);break;case 3:if(oa(t,l),o&64&&(t=l.updateQueue,t!==null)){if(a=null,l.child!==null)switch(l.child.tag){case 27:case 5:a=l.child.stateNode;break;case 1:a=l.child.stateNode}try{Kx(t,a)}catch(S){vt(l,l.return,S)}}break;case 27:a===null&&o&4&&op(l);case 26:case 5:oa(t,l),a===null&&o&4&&ip(l),o&512&&F0(l,l.return);break;case 12:oa(t,l);break;case 31:oa(t,l),o&4&&hp(t,l);break;case 13:oa(t,l),o&4&&xp(t,l),o&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=nS.bind(null,l),_S(t,l))));break;case 22:if(o=l.memoizedState!==null||ia,!o){a=a!==null&&a.memoizedState!==null||Kt,d=ia;var p=Kt;ia=o,(Kt=a)&&!p?ca(t,l,(l.subtreeFlags&8772)!==0):oa(t,l),ia=d,Kt=p}break;case 30:break;default:oa(t,l)}}function up(t){var a=t.alternate;a!==null&&(t.alternate=null,up(a)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(a=t.stateNode,a!==null&&Ee(a)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ft=null,Ln=!1;function la(t,a,l){for(l=l.child;l!==null;)dp(t,a,l),l=l.sibling}function dp(t,a,l){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(Tt,l)}catch{}switch(l.tag){case 26:Kt||Hr(l,a),la(t,a,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Kt||Hr(l,a);var o=Ft,d=Ln;Wa(l.type)&&(Ft=l.stateNode,Ln=!1),la(t,a,l),z0(l.stateNode),Ft=o,Ln=d;break;case 5:Kt||Hr(l,a);case 6:if(o=Ft,d=Ln,Ft=null,la(t,a,l),Ft=o,Ln=d,Ft!==null)if(Ln)try{(Ft.nodeType===9?Ft.body:Ft.nodeName==="HTML"?Ft.ownerDocument.body:Ft).removeChild(l.stateNode)}catch(p){vt(l,a,p)}else try{Ft.removeChild(l.stateNode)}catch(p){vt(l,a,p)}break;case 18:Ft!==null&&(Ln?(t=Ft,am(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),Oi(t)):am(Ft,l.stateNode));break;case 4:o=Ft,d=Ln,Ft=l.stateNode.containerInfo,Ln=!0,la(t,a,l),Ft=o,Ln=d;break;case 0:case 11:case 14:case 15:Ma(2,l,a),Kt||Ma(4,l,a),la(t,a,l);break;case 1:Kt||(Hr(l,a),o=l.stateNode,typeof o.componentWillUnmount=="function"&&sp(l,a,o)),la(t,a,l);break;case 21:la(t,a,l);break;case 22:Kt=(o=Kt)||l.memoizedState!==null,la(t,a,l),Kt=o;break;default:la(t,a,l)}}function hp(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Oi(t)}catch(l){vt(a,a.return,l)}}}function xp(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Oi(t)}catch(l){vt(a,a.return,l)}}function K4(t){switch(t.tag){case 31:case 13:case 19:var a=t.stateNode;return a===null&&(a=t.stateNode=new cp),a;case 22:return t=t.stateNode,a=t._retryCache,a===null&&(a=t._retryCache=new cp),a;default:throw Error(s(435,t.tag))}}function Co(t,a){var l=K4(t);a.forEach(function(o){if(!l.has(o)){l.add(o);var d=rS.bind(null,t,o);o.then(d,d)}})}function jn(t,a){var l=a.deletions;if(l!==null)for(var o=0;o<l.length;o++){var d=l[o],p=t,S=a,T=S;e:for(;T!==null;){switch(T.tag){case 27:if(Wa(T.type)){Ft=T.stateNode,Ln=!1;break e}break;case 5:Ft=T.stateNode,Ln=!1;break e;case 3:case 4:Ft=T.stateNode.containerInfo,Ln=!0;break e}T=T.return}if(Ft===null)throw Error(s(160));dp(p,S,d),Ft=null,Ln=!1,p=d.alternate,p!==null&&(p.return=null),d.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)pp(a,t),a=a.sibling}var wr=null;function pp(t,a){var l=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:jn(a,t),In(t),o&4&&(Ma(3,t,t.return),B0(3,t),Ma(5,t,t.return));break;case 1:jn(a,t),In(t),o&512&&(Kt||l===null||Hr(l,l.return)),o&64&&ia&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?o:l.concat(o))));break;case 26:var d=wr;if(jn(a,t),In(t),o&512&&(Kt||l===null||Hr(l,l.return)),o&4){var p=l!==null?l.memoizedState:null;if(o=t.memoizedState,l===null)if(o===null)if(t.stateNode===null){e:{o=t.type,l=t.memoizedProps,d=d.ownerDocument||d;t:switch(o){case"title":p=d.getElementsByTagName("title")[0],(!p||p[ce]||p[F]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=d.createElement(o),d.head.insertBefore(p,d.querySelector("head > title"))),hn(p,o,l),p[F]=t,Ie(p),o=p;break e;case"link":var S=pm("link","href",d).get(o+(l.href||""));if(S){for(var T=0;T<S.length;T++)if(p=S[T],p.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&p.getAttribute("rel")===(l.rel==null?null:l.rel)&&p.getAttribute("title")===(l.title==null?null:l.title)&&p.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){S.splice(T,1);break t}}p=d.createElement(o),hn(p,o,l),d.head.appendChild(p);break;case"meta":if(S=pm("meta","content",d).get(o+(l.content||""))){for(T=0;T<S.length;T++)if(p=S[T],p.getAttribute("content")===(l.content==null?null:""+l.content)&&p.getAttribute("name")===(l.name==null?null:l.name)&&p.getAttribute("property")===(l.property==null?null:l.property)&&p.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&p.getAttribute("charset")===(l.charSet==null?null:l.charSet)){S.splice(T,1);break t}}p=d.createElement(o),hn(p,o,l),d.head.appendChild(p);break;default:throw Error(s(468,o))}p[F]=t,Ie(p),o=p}t.stateNode=o}else mm(d,t.type,t.stateNode);else t.stateNode=xm(d,o,t.memoizedProps);else p!==o?(p===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):p.count--,o===null?mm(d,t.type,t.stateNode):xm(d,o,t.memoizedProps)):o===null&&t.stateNode!==null&&vu(t,t.memoizedProps,l.memoizedProps)}break;case 27:jn(a,t),In(t),o&512&&(Kt||l===null||Hr(l,l.return)),l!==null&&o&4&&vu(t,t.memoizedProps,l.memoizedProps);break;case 5:if(jn(a,t),In(t),o&512&&(Kt||l===null||Hr(l,l.return)),t.flags&32){d=t.stateNode;try{ri(d,"")}catch(Le){vt(t,t.return,Le)}}o&4&&t.stateNode!=null&&(d=t.memoizedProps,vu(t,d,l!==null?l.memoizedProps:d)),o&1024&&(Su=!0);break;case 6:if(jn(a,t),In(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,l=t.stateNode;try{l.nodeValue=o}catch(Le){vt(t,t.return,Le)}}break;case 3:if(Ho=null,d=wr,wr=jo(a.containerInfo),jn(a,t),wr=d,In(t),o&4&&l!==null&&l.memoizedState.isDehydrated)try{Oi(a.containerInfo)}catch(Le){vt(t,t.return,Le)}Su&&(Su=!1,mp(t));break;case 4:o=wr,wr=jo(t.stateNode.containerInfo),jn(a,t),In(t),wr=o;break;case 12:jn(a,t),In(t);break;case 31:jn(a,t),In(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Co(t,o)));break;case 13:jn(a,t),In(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(wo=je()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Co(t,o)));break;case 22:d=t.memoizedState!==null;var q=l!==null&&l.memoizedState!==null,ae=ia,pe=Kt;if(ia=ae||d,Kt=pe||q,jn(a,t),Kt=pe,ia=ae,In(t),o&8192)e:for(a=t.stateNode,a._visibility=d?a._visibility&-2:a._visibility|1,d&&(l===null||q||ia||Kt||ws(t)),l=null,a=t;;){if(a.tag===5||a.tag===26){if(l===null){q=l=a;try{if(p=q.stateNode,d)S=p.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{T=q.stateNode;var Se=q.memoizedProps.style,oe=Se!=null&&Se.hasOwnProperty("display")?Se.display:null;T.style.display=oe==null||typeof oe=="boolean"?"":(""+oe).trim()}}catch(Le){vt(q,q.return,Le)}}}else if(a.tag===6){if(l===null){q=a;try{q.stateNode.nodeValue=d?"":q.memoizedProps}catch(Le){vt(q,q.return,Le)}}}else if(a.tag===18){if(l===null){q=a;try{var xe=q.stateNode;d?sm(xe,!0):sm(q.stateNode,!1)}catch(Le){vt(q,q.return,Le)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===t)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break e;for(;a.sibling===null;){if(a.return===null||a.return===t)break e;l===a&&(l=null),a=a.return}l===a&&(l=null),a.sibling.return=a.return,a=a.sibling}o&4&&(o=t.updateQueue,o!==null&&(l=o.retryQueue,l!==null&&(o.retryQueue=null,Co(t,l))));break;case 19:jn(a,t),In(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Co(t,o)));break;case 30:break;case 21:break;default:jn(a,t),In(t)}}function In(t){var a=t.flags;if(a&2){try{for(var l,o=t.return;o!==null;){if(lp(o)){l=o;break}o=o.return}if(l==null)throw Error(s(160));switch(l.tag){case 27:var d=l.stateNode,p=yu(t);_o(t,p,d);break;case 5:var S=l.stateNode;l.flags&32&&(ri(S,""),l.flags&=-33);var T=yu(t);_o(t,T,S);break;case 3:case 4:var q=l.stateNode.containerInfo,ae=yu(t);bu(t,ae,q);break;default:throw Error(s(161))}}catch(pe){vt(t,t.return,pe)}t.flags&=-3}a&4096&&(t.flags&=-4097)}function mp(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var a=t;mp(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),t=t.sibling}}function oa(t,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)fp(t,a.alternate,a),a=a.sibling}function ws(t){for(t=t.child;t!==null;){var a=t;switch(a.tag){case 0:case 11:case 14:case 15:Ma(4,a,a.return),ws(a);break;case 1:Hr(a,a.return);var l=a.stateNode;typeof l.componentWillUnmount=="function"&&sp(a,a.return,l),ws(a);break;case 27:z0(a.stateNode);case 26:case 5:Hr(a,a.return),ws(a);break;case 22:a.memoizedState===null&&ws(a);break;case 30:ws(a);break;default:ws(a)}t=t.sibling}}function ca(t,a,l){for(l=l&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var o=a.alternate,d=t,p=a,S=p.flags;switch(p.tag){case 0:case 11:case 15:ca(d,p,l),B0(4,p);break;case 1:if(ca(d,p,l),o=p,d=o.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(ae){vt(o,o.return,ae)}if(o=p,d=o.updateQueue,d!==null){var T=o.stateNode;try{var q=d.shared.hiddenCallbacks;if(q!==null)for(d.shared.hiddenCallbacks=null,d=0;d<q.length;d++)Vx(q[d],T)}catch(ae){vt(o,o.return,ae)}}l&&S&64&&ap(p),F0(p,p.return);break;case 27:op(p);case 26:case 5:ca(d,p,l),l&&o===null&&S&4&&ip(p),F0(p,p.return);break;case 12:ca(d,p,l);break;case 31:ca(d,p,l),l&&S&4&&hp(d,p);break;case 13:ca(d,p,l),l&&S&4&&xp(d,p);break;case 22:p.memoizedState===null&&ca(d,p,l),F0(p,p.return);break;case 30:break;default:ca(d,p,l)}a=a.sibling}}function _u(t,a){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&g0(l))}function Cu(t,a){t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&g0(t))}function Ar(t,a,l,o){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)gp(t,a,l,o),a=a.sibling}function gp(t,a,l,o){var d=a.flags;switch(a.tag){case 0:case 11:case 15:Ar(t,a,l,o),d&2048&&B0(9,a);break;case 1:Ar(t,a,l,o);break;case 3:Ar(t,a,l,o),d&2048&&(t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&g0(t)));break;case 12:if(d&2048){Ar(t,a,l,o),t=a.stateNode;try{var p=a.memoizedProps,S=p.id,T=p.onPostCommit;typeof T=="function"&&T(S,a.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(q){vt(a,a.return,q)}}else Ar(t,a,l,o);break;case 31:Ar(t,a,l,o);break;case 13:Ar(t,a,l,o);break;case 23:break;case 22:p=a.stateNode,S=a.alternate,a.memoizedState!==null?p._visibility&2?Ar(t,a,l,o):R0(t,a):p._visibility&2?Ar(t,a,l,o):(p._visibility|=2,Ci(t,a,l,o,(a.subtreeFlags&10256)!==0||!1)),d&2048&&_u(S,a);break;case 24:Ar(t,a,l,o),d&2048&&Cu(a.alternate,a);break;default:Ar(t,a,l,o)}}function Ci(t,a,l,o,d){for(d=d&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var p=t,S=a,T=l,q=o,ae=S.flags;switch(S.tag){case 0:case 11:case 15:Ci(p,S,T,q,d),B0(8,S);break;case 23:break;case 22:var pe=S.stateNode;S.memoizedState!==null?pe._visibility&2?Ci(p,S,T,q,d):R0(p,S):(pe._visibility|=2,Ci(p,S,T,q,d)),d&&ae&2048&&_u(S.alternate,S);break;case 24:Ci(p,S,T,q,d),d&&ae&2048&&Cu(S.alternate,S);break;default:Ci(p,S,T,q,d)}a=a.sibling}}function R0(t,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var l=t,o=a,d=o.flags;switch(o.tag){case 22:R0(l,o),d&2048&&_u(o.alternate,o);break;case 24:R0(l,o),d&2048&&Cu(o.alternate,o);break;default:R0(l,o)}a=a.sibling}}var N0=8192;function Ei(t,a,l){if(t.subtreeFlags&N0)for(t=t.child;t!==null;)vp(t,a,l),t=t.sibling}function vp(t,a,l){switch(t.tag){case 26:Ei(t,a,l),t.flags&N0&&t.memoizedState!==null&&OS(l,wr,t.memoizedState,t.memoizedProps);break;case 5:Ei(t,a,l);break;case 3:case 4:var o=wr;wr=jo(t.stateNode.containerInfo),Ei(t,a,l),wr=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=N0,N0=16777216,Ei(t,a,l),N0=o):Ei(t,a,l));break;default:Ei(t,a,l)}}function yp(t){var a=t.alternate;if(a!==null&&(t=a.child,t!==null)){a.child=null;do a=t.sibling,t.sibling=null,t=a;while(t!==null)}}function O0(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var l=0;l<a.length;l++){var o=a[l];sn=o,Sp(o,t)}yp(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)bp(t),t=t.sibling}function bp(t){switch(t.tag){case 0:case 11:case 15:O0(t),t.flags&2048&&Ma(9,t,t.return);break;case 3:O0(t);break;case 12:O0(t);break;case 22:var a=t.stateNode;t.memoizedState!==null&&a._visibility&2&&(t.return===null||t.return.tag!==13)?(a._visibility&=-3,Eo(t)):O0(t);break;default:O0(t)}}function Eo(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var l=0;l<a.length;l++){var o=a[l];sn=o,Sp(o,t)}yp(t)}for(t=t.child;t!==null;){switch(a=t,a.tag){case 0:case 11:case 15:Ma(8,a,a.return),Eo(a);break;case 22:l=a.stateNode,l._visibility&2&&(l._visibility&=-3,Eo(a));break;default:Eo(a)}t=t.sibling}}function Sp(t,a){for(;sn!==null;){var l=sn;switch(l.tag){case 0:case 11:case 15:Ma(8,l,a);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var o=l.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:g0(l.memoizedState.cache)}if(o=l.child,o!==null)o.return=l,sn=o;else e:for(l=t;sn!==null;){o=sn;var d=o.sibling,p=o.return;if(up(o),o===l){sn=null;break e}if(d!==null){d.return=p,sn=d;break e}sn=p}}}var Y4={getCacheForType:function(t){var a=un(Gt),l=a.data.get(t);return l===void 0&&(l=t(),a.data.set(t,l)),l},cacheSignal:function(){return un(Gt).controller.signal}},J4=typeof WeakMap=="function"?WeakMap:Map,pt=0,_t=null,tt=null,rt=0,gt=0,Kn=null,La=!1,wi=!1,Eu=!1,fa=0,Lt=0,ja=0,As=0,wu=0,Yn=0,Ai=0,M0=null,Hn=null,Au=!1,wo=0,_p=0,Ao=1/0,To=null,Ia=null,Zt=0,Ha=null,Ti=null,ua=0,Tu=0,ku=null,Cp=null,L0=0,Du=null;function Jn(){return(pt&2)!==0&&rt!==0?rt&-rt:X.T!==null?Mu():A()}function Ep(){if(Yn===0)if((rt&536870912)===0||lt){var t=Zs;Zs<<=1,(Zs&3932160)===0&&(Zs=262144),Yn=t}else Yn=536870912;return t=qn.current,t!==null&&(t.flags|=32),Yn}function zn(t,a,l){(t===_t&&(gt===2||gt===9)||t.cancelPendingCommit!==null)&&(ki(t,0),za(t,rt,Yn,!1)),cs(t,l),((pt&2)===0||t!==_t)&&(t===_t&&((pt&2)===0&&(As|=l),Lt===4&&za(t,rt,Yn,!1)),zr(t))}function wp(t,a,l){if((pt&6)!==0)throw Error(s(327));var o=!l&&(a&127)===0&&(a&t.expiredLanes)===0||os(t,a),d=o?$4(t,a):Fu(t,a,!0),p=o;do{if(d===0){wi&&!o&&za(t,a,0,!1);break}else{if(l=t.current.alternate,p&&!Q4(l)){d=Fu(t,a,!1),p=!1;continue}if(d===2){if(p=a,t.errorRecoveryDisabledLanes&p)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){a=S;e:{var T=t;d=M0;var q=T.current.memoizedState.isDehydrated;if(q&&(ki(T,S).flags|=256),S=Fu(T,S,!1),S!==2){if(Eu&&!q){T.errorRecoveryDisabledLanes|=p,As|=p,d=4;break e}p=Hn,Hn=d,p!==null&&(Hn===null?Hn=p:Hn.push.apply(Hn,p))}d=S}if(p=!1,d!==2)continue}}if(d===1){ki(t,0),za(t,a,0,!0);break}e:{switch(o=t,p=d,p){case 0:case 1:throw Error(s(345));case 4:if((a&4194048)!==a)break;case 6:za(o,a,Yn,!La);break e;case 2:Hn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((a&62914560)===a&&(d=wo+300-je(),10<d)){if(za(o,a,Yn,!La),ei(o,0,!0)!==0)break e;ua=a,o.timeoutHandle=nm(Ap.bind(null,o,l,Hn,To,Au,a,Yn,As,Ai,La,p,"Throttled",-0,0),d);break e}Ap(o,l,Hn,To,Au,a,Yn,As,Ai,La,p,null,-0,0)}}break}while(!0);zr(t)}function Ap(t,a,l,o,d,p,S,T,q,ae,pe,Se,oe,xe){if(t.timeoutHandle=-1,Se=a.subtreeFlags,Se&8192||(Se&16785408)===16785408){Se={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Jr},vp(a,p,Se);var Le=(p&62914560)===p?wo-je():(p&4194048)===p?_p-je():0;if(Le=MS(Se,Le),Le!==null){ua=p,t.cancelPendingCommit=Le(Op.bind(null,t,a,p,l,o,d,S,T,q,pe,Se,null,oe,xe)),za(t,p,S,!ae);return}}Op(t,a,p,l,o,d,S,T,q)}function Q4(t){for(var a=t;;){var l=a.tag;if((l===0||l===11||l===15)&&a.flags&16384&&(l=a.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var o=0;o<l.length;o++){var d=l[o],p=d.getSnapshot;d=d.value;try{if(!Xn(p(),d))return!1}catch{return!1}}if(l=a.child,a.subtreeFlags&16384&&l!==null)l.return=a,a=l;else{if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function za(t,a,l,o){a&=~wu,a&=~As,t.suspendedLanes|=a,t.pingedLanes&=~a,o&&(t.warmLanes|=a),o=t.expirationTimes;for(var d=a;0<d;){var p=31-An(d),S=1<<p;o[p]=-1,d&=~S}l!==0&&Ll(t,l,a)}function ko(){return(pt&6)===0?(j0(0),!1):!0}function Bu(){if(tt!==null){if(gt===0)var t=tt.return;else t=tt,ea=gs=null,qf(t),vi=null,y0=0,t=tt;for(;t!==null;)rp(t.alternate,t),t=t.return;tt=null}}function ki(t,a){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,gS(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),ua=0,Bu(),_t=t,tt=l=Zr(t.current,null),rt=a,gt=0,Kn=null,La=!1,wi=os(t,a),Eu=!1,Ai=Yn=wu=As=ja=Lt=0,Hn=M0=null,Au=!1,(a&8)!==0&&(a|=a&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=a;0<o;){var d=31-An(o),p=1<<d;a|=t[d],o&=~p}return fa=a,Kl(),l}function Tp(t,a){Ye=null,X.H=T0,a===gi||a===no?(a=Px(),gt=3):a===Of?(a=Px(),gt=4):gt=a===ou?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Kn=a,tt===null&&(Lt=1,go(t,fr(a,t.current)))}function kp(){var t=qn.current;return t===null?!0:(rt&4194048)===rt?xr===null:(rt&62914560)===rt||(rt&536870912)!==0?t===xr:!1}function Dp(){var t=X.H;return X.H=T0,t===null?T0:t}function Bp(){var t=X.A;return X.A=Y4,t}function Do(){Lt=4,La||(rt&4194048)!==rt&&qn.current!==null||(wi=!0),(ja&134217727)===0&&(As&134217727)===0||_t===null||za(_t,rt,Yn,!1)}function Fu(t,a,l){var o=pt;pt|=2;var d=Dp(),p=Bp();(_t!==t||rt!==a)&&(To=null,ki(t,a)),a=!1;var S=Lt;e:do try{if(gt!==0&&tt!==null){var T=tt,q=Kn;switch(gt){case 8:Bu(),S=6;break e;case 3:case 2:case 9:case 6:qn.current===null&&(a=!0);var ae=gt;if(gt=0,Kn=null,Di(t,T,q,ae),l&&wi){S=0;break e}break;default:ae=gt,gt=0,Kn=null,Di(t,T,q,ae)}}Z4(),S=Lt;break}catch(pe){Tp(t,pe)}while(!0);return a&&t.shellSuspendCounter++,ea=gs=null,pt=o,X.H=d,X.A=p,tt===null&&(_t=null,rt=0,Kl()),S}function Z4(){for(;tt!==null;)Fp(tt)}function $4(t,a){var l=pt;pt|=2;var o=Dp(),d=Bp();_t!==t||rt!==a?(To=null,Ao=je()+500,ki(t,a)):wi=os(t,a);e:do try{if(gt!==0&&tt!==null){a=tt;var p=Kn;t:switch(gt){case 1:gt=0,Kn=null,Di(t,a,p,1);break;case 2:case 9:if(Ux(p)){gt=0,Kn=null,Rp(a);break}a=function(){gt!==2&&gt!==9||_t!==t||(gt=7),zr(t)},p.then(a,a);break e;case 3:gt=7;break e;case 4:gt=5;break e;case 7:Ux(p)?(gt=0,Kn=null,Rp(a)):(gt=0,Kn=null,Di(t,a,p,7));break;case 5:var S=null;switch(tt.tag){case 26:S=tt.memoizedState;case 5:case 27:var T=tt;if(S?gm(S):T.stateNode.complete){gt=0,Kn=null;var q=T.sibling;if(q!==null)tt=q;else{var ae=T.return;ae!==null?(tt=ae,Bo(ae)):tt=null}break t}}gt=0,Kn=null,Di(t,a,p,5);break;case 6:gt=0,Kn=null,Di(t,a,p,6);break;case 8:Bu(),Lt=6;break e;default:throw Error(s(462))}}eS();break}catch(pe){Tp(t,pe)}while(!0);return ea=gs=null,X.H=o,X.A=d,pt=l,tt!==null?0:(_t=null,rt=0,Kl(),Lt)}function eS(){for(;tt!==null&&!ze();)Fp(tt)}function Fp(t){var a=tp(t.alternate,t,fa);t.memoizedProps=t.pendingProps,a===null?Bo(t):tt=a}function Rp(t){var a=t,l=a.alternate;switch(a.tag){case 15:case 0:a=Y1(l,a,a.pendingProps,a.type,void 0,rt);break;case 11:a=Y1(l,a,a.pendingProps,a.type.render,a.ref,rt);break;case 5:qf(a);default:rp(l,a),a=tt=Bx(a,fa),a=tp(l,a,fa)}t.memoizedProps=t.pendingProps,a===null?Bo(t):tt=a}function Di(t,a,l,o){ea=gs=null,qf(a),vi=null,y0=0;var d=a.return;try{if(W4(t,d,a,l,rt)){Lt=1,go(t,fr(l,t.current)),tt=null;return}}catch(p){if(d!==null)throw tt=d,p;Lt=1,go(t,fr(l,t.current)),tt=null;return}a.flags&32768?(lt||o===1?t=!0:wi||(rt&536870912)!==0?t=!1:(La=t=!0,(o===2||o===9||o===3||o===6)&&(o=qn.current,o!==null&&o.tag===13&&(o.flags|=16384))),Np(a,t)):Bo(a)}function Bo(t){var a=t;do{if((a.flags&32768)!==0){Np(a,La);return}t=a.return;var l=G4(a.alternate,a,fa);if(l!==null){tt=l;return}if(a=a.sibling,a!==null){tt=a;return}tt=a=t}while(a!==null);Lt===0&&(Lt=5)}function Np(t,a){do{var l=q4(t.alternate,t);if(l!==null){l.flags&=32767,tt=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!a&&(t=t.sibling,t!==null)){tt=t;return}tt=t=l}while(t!==null);Lt=6,tt=null}function Op(t,a,l,o,d,p,S,T,q){t.cancelPendingCommit=null;do Fo();while(Zt!==0);if((pt&6)!==0)throw Error(s(327));if(a!==null){if(a===t.current)throw Error(s(177));if(p=a.lanes|a.childLanes,p|=yf,Jc(t,l,p,S,T,q),t===_t&&(tt=_t=null,rt=0),Ti=a,Ha=t,ua=l,Tu=p,ku=d,Cp=o,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,aS(Xt,function(){return Hp(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||o){o=X.T,X.T=null,d=ee.p,ee.p=2,S=pt,pt|=4;try{V4(t,a,l)}finally{pt=S,ee.p=d,X.T=o}}Zt=1,Mp(),Lp(),jp()}}function Mp(){if(Zt===1){Zt=0;var t=Ha,a=Ti,l=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||l){l=X.T,X.T=null;var o=ee.p;ee.p=2;var d=pt;pt|=4;try{pp(a,t);var p=Pu,S=Sx(t.containerInfo),T=p.focusedElem,q=p.selectionRange;if(S!==T&&T&&T.ownerDocument&&bx(T.ownerDocument.documentElement,T)){if(q!==null&&xf(T)){var ae=q.start,pe=q.end;if(pe===void 0&&(pe=ae),"selectionStart"in T)T.selectionStart=ae,T.selectionEnd=Math.min(pe,T.value.length);else{var Se=T.ownerDocument||document,oe=Se&&Se.defaultView||window;if(oe.getSelection){var xe=oe.getSelection(),Le=T.textContent.length,Xe=Math.min(q.start,Le),St=q.end===void 0?Xe:Math.min(q.end,Le);!xe.extend&&Xe>St&&(S=St,St=Xe,Xe=S);var Q=yx(T,Xe),Y=yx(T,St);if(Q&&Y&&(xe.rangeCount!==1||xe.anchorNode!==Q.node||xe.anchorOffset!==Q.offset||xe.focusNode!==Y.node||xe.focusOffset!==Y.offset)){var re=Se.createRange();re.setStart(Q.node,Q.offset),xe.removeAllRanges(),Xe>St?(xe.addRange(re),xe.extend(Y.node,Y.offset)):(re.setEnd(Y.node,Y.offset),xe.addRange(re))}}}}for(Se=[],xe=T;xe=xe.parentNode;)xe.nodeType===1&&Se.push({element:xe,left:xe.scrollLeft,top:xe.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<Se.length;T++){var be=Se[T];be.element.scrollLeft=be.left,be.element.scrollTop=be.top}}Po=!!Wu,Pu=Wu=null}finally{pt=d,ee.p=o,X.T=l}}t.current=a,Zt=2}}function Lp(){if(Zt===2){Zt=0;var t=Ha,a=Ti,l=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||l){l=X.T,X.T=null;var o=ee.p;ee.p=2;var d=pt;pt|=4;try{fp(t,a.alternate,a)}finally{pt=d,ee.p=o,X.T=l}}Zt=3}}function jp(){if(Zt===4||Zt===3){Zt=0,mt();var t=Ha,a=Ti,l=ua,o=Cp;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Zt=5:(Zt=0,Ti=Ha=null,Ip(t,t.pendingLanes));var d=t.pendingLanes;if(d===0&&(Ia=null),a0(l),a=a.stateNode,zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(Tt,a,void 0,(a.current.flags&128)===128)}catch{}if(o!==null){a=X.T,d=ee.p,ee.p=2,X.T=null;try{for(var p=t.onRecoverableError,S=0;S<o.length;S++){var T=o[S];p(T.value,{componentStack:T.stack})}}finally{X.T=a,ee.p=d}}(ua&3)!==0&&Fo(),zr(t),d=t.pendingLanes,(l&261930)!==0&&(d&42)!==0?t===Du?L0++:(L0=0,Du=t):L0=0,j0(0)}}function Ip(t,a){(t.pooledCacheLanes&=a)===0&&(a=t.pooledCache,a!=null&&(t.pooledCache=null,g0(a)))}function Fo(){return Mp(),Lp(),jp(),Hp()}function Hp(){if(Zt!==5)return!1;var t=Ha,a=Tu;Tu=0;var l=a0(ua),o=X.T,d=ee.p;try{ee.p=32>l?32:l,X.T=null,l=ku,ku=null;var p=Ha,S=ua;if(Zt=0,Ti=Ha=null,ua=0,(pt&6)!==0)throw Error(s(331));var T=pt;if(pt|=4,bp(p.current),gp(p,p.current,S,l),pt=T,j0(0,!1),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(Tt,p)}catch{}return!0}finally{ee.p=d,X.T=o,Ip(t,a)}}function zp(t,a,l){a=fr(l,a),a=lu(t.stateNode,a,2),t=Ra(t,a,2),t!==null&&(cs(t,2),zr(t))}function vt(t,a,l){if(t.tag===3)zp(t,t,l);else for(;a!==null;){if(a.tag===3){zp(a,t,l);break}else if(a.tag===1){var o=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ia===null||!Ia.has(o))){t=fr(l,t),l=U1(2),o=Ra(a,l,2),o!==null&&(W1(l,o,a,t),cs(o,2),zr(o));break}}a=a.return}}function Ru(t,a,l){var o=t.pingCache;if(o===null){o=t.pingCache=new J4;var d=new Set;o.set(a,d)}else d=o.get(a),d===void 0&&(d=new Set,o.set(a,d));d.has(l)||(Eu=!0,d.add(l),t=tS.bind(null,t,a,l),a.then(t,t))}function tS(t,a,l){var o=t.pingCache;o!==null&&o.delete(a),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,_t===t&&(rt&l)===l&&(Lt===4||Lt===3&&(rt&62914560)===rt&&300>je()-wo?(pt&2)===0&&ki(t,0):wu|=l,Ai===rt&&(Ai=0)),zr(t)}function Up(t,a){a===0&&(a=Ml()),t=xs(t,a),t!==null&&(cs(t,a),zr(t))}function nS(t){var a=t.memoizedState,l=0;a!==null&&(l=a.retryLane),Up(t,l)}function rS(t,a){var l=0;switch(t.tag){case 31:case 13:var o=t.stateNode,d=t.memoizedState;d!==null&&(l=d.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(a),Up(t,l)}function aS(t,a){return gn(t,a)}var Ro=null,Bi=null,Nu=!1,No=!1,Ou=!1,Ua=0;function zr(t){t!==Bi&&t.next===null&&(Bi===null?Ro=Bi=t:Bi=Bi.next=t),No=!0,Nu||(Nu=!0,iS())}function j0(t,a){if(!Ou&&No){Ou=!0;do for(var l=!1,o=Ro;o!==null;){if(t!==0){var d=o.pendingLanes;if(d===0)var p=0;else{var S=o.suspendedLanes,T=o.pingedLanes;p=(1<<31-An(42|t)+1)-1,p&=d&~(S&~T),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(l=!0,Gp(o,p))}else p=rt,p=ei(o,o===_t?p:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(p&3)===0||os(o,p)||(l=!0,Gp(o,p));o=o.next}while(l);Ou=!1}}function sS(){Wp()}function Wp(){No=Nu=!1;var t=0;Ua!==0&&mS()&&(t=Ua);for(var a=je(),l=null,o=Ro;o!==null;){var d=o.next,p=Pp(o,a);p===0?(o.next=null,l===null?Ro=d:l.next=d,d===null&&(Bi=l)):(l=o,(t!==0||(p&3)!==0)&&(No=!0)),o=d}Zt!==0&&Zt!==5||j0(t),Ua!==0&&(Ua=0)}function Pp(t,a){for(var l=t.suspendedLanes,o=t.pingedLanes,d=t.expirationTimes,p=t.pendingLanes&-62914561;0<p;){var S=31-An(p),T=1<<S,q=d[S];q===-1?((T&l)===0||(T&o)!==0)&&(d[S]=Yc(T,a)):q<=a&&(t.expiredLanes|=T),p&=~T}if(a=_t,l=rt,l=ei(t,t===a?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,l===0||t===a&&(gt===2||gt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&De(o),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||os(t,l)){if(a=l&-l,a===t.callbackPriority)return a;switch(o!==null&&De(o),a0(l)){case 2:case 8:l=Ca;break;case 32:l=Xt;break;case 268435456:l=Qe;break;default:l=Xt}return o=Xp.bind(null,t),l=gn(l,o),t.callbackPriority=a,t.callbackNode=l,a}return o!==null&&o!==null&&De(o),t.callbackPriority=2,t.callbackNode=null,2}function Xp(t,a){if(Zt!==0&&Zt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(Fo()&&t.callbackNode!==l)return null;var o=rt;return o=ei(t,t===_t?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(wp(t,o,a),Pp(t,je()),t.callbackNode!=null&&t.callbackNode===l?Xp.bind(null,t):null)}function Gp(t,a){if(Fo())return null;wp(t,a,!0)}function iS(){vS(function(){(pt&6)!==0?gn(Pn,sS):Wp()})}function Mu(){if(Ua===0){var t=pi;t===0&&(t=ls,ls<<=1,(ls&261888)===0&&(ls=256)),Ua=t}return Ua}function qp(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:zl(""+t)}function Vp(t,a){var l=a.ownerDocument.createElement("input");return l.name=a.name,l.value=a.value,t.id&&l.setAttribute("form",t.id),a.parentNode.insertBefore(l,a),t=new FormData(t),l.parentNode.removeChild(l),t}function lS(t,a,l,o,d){if(a==="submit"&&l&&l.stateNode===d){var p=qp((d[N]||null).action),S=o.submitter;S&&(a=(a=S[N]||null)?qp(a.formAction):S.getAttribute("formAction"),a!==null&&(p=a,S=null));var T=new Xl("action","action",null,o,d);t.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ua!==0){var q=S?Vp(d,S):new FormData(d);tu(l,{pending:!0,data:q,method:d.method,action:p},null,q)}}else typeof p=="function"&&(T.preventDefault(),q=S?Vp(d,S):new FormData(d),tu(l,{pending:!0,data:q,method:d.method,action:p},p,q))},currentTarget:d}]})}}for(var Lu=0;Lu<vf.length;Lu++){var ju=vf[Lu],oS=ju.toLowerCase(),cS=ju[0].toUpperCase()+ju.slice(1);Er(oS,"on"+cS)}Er(Ex,"onAnimationEnd"),Er(wx,"onAnimationIteration"),Er(Ax,"onAnimationStart"),Er("dblclick","onDoubleClick"),Er("focusin","onFocus"),Er("focusout","onBlur"),Er(w4,"onTransitionRun"),Er(A4,"onTransitionStart"),Er(T4,"onTransitionCancel"),Er(Tx,"onTransitionEnd"),ir("onMouseEnter",["mouseout","mouseover"]),ir("onMouseLeave",["mouseout","mouseover"]),ir("onPointerEnter",["pointerout","pointerover"]),ir("onPointerLeave",["pointerout","pointerover"]),Bt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Bt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Bt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Bt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Bt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Bt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var I0="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(I0));function Kp(t,a){a=(a&4)!==0;for(var l=0;l<t.length;l++){var o=t[l],d=o.event;o=o.listeners;e:{var p=void 0;if(a)for(var S=o.length-1;0<=S;S--){var T=o[S],q=T.instance,ae=T.currentTarget;if(T=T.listener,q!==p&&d.isPropagationStopped())break e;p=T,d.currentTarget=ae;try{p(d)}catch(pe){Vl(pe)}d.currentTarget=null,p=q}else for(S=0;S<o.length;S++){if(T=o[S],q=T.instance,ae=T.currentTarget,T=T.listener,q!==p&&d.isPropagationStopped())break e;p=T,d.currentTarget=ae;try{p(d)}catch(pe){Vl(pe)}d.currentTarget=null,p=q}}}}function nt(t,a){var l=a[se];l===void 0&&(l=a[se]=new Set);var o=t+"__bubble";l.has(o)||(Yp(a,t,2,!1),l.add(o))}function Iu(t,a,l){var o=0;a&&(o|=4),Yp(l,t,o,a)}var Oo="_reactListening"+Math.random().toString(36).slice(2);function Hu(t){if(!t[Oo]){t[Oo]=!0,Et.forEach(function(l){l!=="selectionchange"&&(fS.has(l)||Iu(l,!1,t),Iu(l,!0,t))});var a=t.nodeType===9?t:t.ownerDocument;a===null||a[Oo]||(a[Oo]=!0,Iu("selectionchange",!1,a))}}function Yp(t,a,l,o){switch(Em(a)){case 2:var d=IS;break;case 8:d=HS;break;default:d=ed}l=d.bind(null,a,l,t),d=void 0,!af||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(d=!0),o?d!==void 0?t.addEventListener(a,l,{capture:!0,passive:d}):t.addEventListener(a,l,!0):d!==void 0?t.addEventListener(a,l,{passive:d}):t.addEventListener(a,l,!1)}function zu(t,a,l,o,d){var p=o;if((a&1)===0&&(a&2)===0&&o!==null)e:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var T=o.stateNode.containerInfo;if(T===d)break;if(S===4)for(S=o.return;S!==null;){var q=S.tag;if((q===3||q===4)&&S.stateNode.containerInfo===d)return;S=S.return}for(;T!==null;){if(S=ke(T),S===null)return;if(q=S.tag,q===5||q===6||q===26||q===27){o=p=S;continue e}T=T.parentNode}}o=o.return}ex(function(){var ae=p,pe=nf(l),Se=[];e:{var oe=kx.get(t);if(oe!==void 0){var xe=Xl,Le=t;switch(t){case"keypress":if(Wl(l)===0)break e;case"keydown":case"keyup":xe=r4;break;case"focusin":Le="focus",xe=cf;break;case"focusout":Le="blur",xe=cf;break;case"beforeblur":case"afterblur":xe=cf;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":xe=rx;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":xe=Gb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":xe=i4;break;case Ex:case wx:case Ax:xe=Kb;break;case Tx:xe=o4;break;case"scroll":case"scrollend":xe=Pb;break;case"wheel":xe=f4;break;case"copy":case"cut":case"paste":xe=Jb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":xe=sx;break;case"toggle":case"beforetoggle":xe=d4}var Xe=(a&4)!==0,St=!Xe&&(t==="scroll"||t==="scrollend"),Q=Xe?oe!==null?oe+"Capture":null:oe;Xe=[];for(var Y=ae,re;Y!==null;){var be=Y;if(re=be.stateNode,be=be.tag,be!==5&&be!==26&&be!==27||re===null||Q===null||(be=i0(Y,Q),be!=null&&Xe.push(H0(Y,be,re))),St)break;Y=Y.return}0<Xe.length&&(oe=new xe(oe,Le,null,l,pe),Se.push({event:oe,listeners:Xe}))}}if((a&7)===0){e:{if(oe=t==="mouseover"||t==="pointerover",xe=t==="mouseout"||t==="pointerout",oe&&l!==tf&&(Le=l.relatedTarget||l.fromElement)&&(ke(Le)||Le[j]))break e;if((xe||oe)&&(oe=pe.window===pe?pe:(oe=pe.ownerDocument)?oe.defaultView||oe.parentWindow:window,xe?(Le=l.relatedTarget||l.toElement,xe=ae,Le=Le?ke(Le):null,Le!==null&&(St=c(Le),Xe=Le.tag,Le!==St||Xe!==5&&Xe!==27&&Xe!==6)&&(Le=null)):(xe=null,Le=ae),xe!==Le)){if(Xe=rx,be="onMouseLeave",Q="onMouseEnter",Y="mouse",(t==="pointerout"||t==="pointerover")&&(Xe=sx,be="onPointerLeave",Q="onPointerEnter",Y="pointer"),St=xe==null?oe:Ae(xe),re=Le==null?oe:Ae(Le),oe=new Xe(be,Y+"leave",xe,l,pe),oe.target=St,oe.relatedTarget=re,be=null,ke(pe)===ae&&(Xe=new Xe(Q,Y+"enter",Le,l,pe),Xe.target=re,Xe.relatedTarget=St,be=Xe),St=be,xe&&Le)t:{for(Xe=uS,Q=xe,Y=Le,re=0,be=Q;be;be=Xe(be))re++;be=0;for(var We=Y;We;We=Xe(We))be++;for(;0<re-be;)Q=Xe(Q),re--;for(;0<be-re;)Y=Xe(Y),be--;for(;re--;){if(Q===Y||Y!==null&&Q===Y.alternate){Xe=Q;break t}Q=Xe(Q),Y=Xe(Y)}Xe=null}else Xe=null;xe!==null&&Jp(Se,oe,xe,Xe,!1),Le!==null&&St!==null&&Jp(Se,St,Le,Xe,!0)}}e:{if(oe=ae?Ae(ae):window,xe=oe.nodeName&&oe.nodeName.toLowerCase(),xe==="select"||xe==="input"&&oe.type==="file")var ht=hx;else if(ux(oe))if(xx)ht=_4;else{ht=b4;var He=y4}else xe=oe.nodeName,!xe||xe.toLowerCase()!=="input"||oe.type!=="checkbox"&&oe.type!=="radio"?ae&&ef(ae.elementType)&&(ht=hx):ht=S4;if(ht&&(ht=ht(t,ae))){dx(Se,ht,l,pe);break e}He&&He(t,oe,ae),t==="focusout"&&ae&&oe.type==="number"&&ae.memoizedProps.value!=null&&$c(oe,"number",oe.value)}switch(He=ae?Ae(ae):window,t){case"focusin":(ux(He)||He.contentEditable==="true")&&(li=He,pf=ae,x0=null);break;case"focusout":x0=pf=li=null;break;case"mousedown":mf=!0;break;case"contextmenu":case"mouseup":case"dragend":mf=!1,_x(Se,l,pe);break;case"selectionchange":if(E4)break;case"keydown":case"keyup":_x(Se,l,pe)}var Ze;if(uf)e:{switch(t){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else ii?cx(t,l)&&(at="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(at="onCompositionStart");at&&(ix&&l.locale!=="ko"&&(ii||at!=="onCompositionStart"?at==="onCompositionEnd"&&ii&&(Ze=tx()):(wa=pe,sf="value"in wa?wa.value:wa.textContent,ii=!0)),He=Mo(ae,at),0<He.length&&(at=new ax(at,t,null,l,pe),Se.push({event:at,listeners:He}),Ze?at.data=Ze:(Ze=fx(l),Ze!==null&&(at.data=Ze)))),(Ze=x4?p4(t,l):m4(t,l))&&(at=Mo(ae,"onBeforeInput"),0<at.length&&(He=new ax("onBeforeInput","beforeinput",null,l,pe),Se.push({event:He,listeners:at}),He.data=Ze)),lS(Se,t,ae,l,pe)}Kp(Se,a)})}function H0(t,a,l){return{instance:t,listener:a,currentTarget:l}}function Mo(t,a){for(var l=a+"Capture",o=[];t!==null;){var d=t,p=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||p===null||(d=i0(t,l),d!=null&&o.unshift(H0(t,d,p)),d=i0(t,a),d!=null&&o.push(H0(t,d,p))),t.tag===3)return o;t=t.return}return[]}function uS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Jp(t,a,l,o,d){for(var p=a._reactName,S=[];l!==null&&l!==o;){var T=l,q=T.alternate,ae=T.stateNode;if(T=T.tag,q!==null&&q===o)break;T!==5&&T!==26&&T!==27||ae===null||(q=ae,d?(ae=i0(l,p),ae!=null&&S.unshift(H0(l,ae,q))):d||(ae=i0(l,p),ae!=null&&S.push(H0(l,ae,q)))),l=l.return}S.length!==0&&t.push({event:a,listeners:S})}var dS=/\r\n?/g,hS=/\u0000|\uFFFD/g;function Qp(t){return(typeof t=="string"?t:""+t).replace(dS,`
`).replace(hS,"")}function Zp(t,a){return a=Qp(a),Qp(t)===a}function bt(t,a,l,o,d,p){switch(l){case"children":typeof o=="string"?a==="body"||a==="textarea"&&o===""||ri(t,o):(typeof o=="number"||typeof o=="bigint")&&a!=="body"&&ri(t,""+o);break;case"className":Il(t,"class",o);break;case"tabIndex":Il(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Il(t,l,o);break;case"style":Zh(t,o,p);break;case"data":if(a!=="object"){Il(t,"data",o);break}case"src":case"href":if(o===""&&(a!=="a"||l!=="href")){t.removeAttribute(l);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(l);break}o=zl(""+o),t.setAttribute(l,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(l==="formAction"?(a!=="input"&&bt(t,a,"name",d.name,d,null),bt(t,a,"formEncType",d.formEncType,d,null),bt(t,a,"formMethod",d.formMethod,d,null),bt(t,a,"formTarget",d.formTarget,d,null)):(bt(t,a,"encType",d.encType,d,null),bt(t,a,"method",d.method,d,null),bt(t,a,"target",d.target,d,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(l);break}o=zl(""+o),t.setAttribute(l,o);break;case"onClick":o!=null&&(t.onclick=Jr);break;case"onScroll":o!=null&&nt("scroll",t);break;case"onScrollEnd":o!=null&&nt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(l=o.__html,l!=null){if(d.children!=null)throw Error(s(60));t.innerHTML=l}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}l=zl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(l,""+o):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":o===!0?t.setAttribute(l,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(l,o):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(l,o):t.removeAttribute(l);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(l):t.setAttribute(l,o);break;case"popover":nt("beforetoggle",t),nt("toggle",t),On(t,"popover",o);break;case"xlinkActuate":Yr(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Yr(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Yr(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Yr(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Yr(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Yr(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Yr(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Yr(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Yr(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":On(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Ub.get(l)||l,On(t,l,o))}}function Uu(t,a,l,o,d,p){switch(l){case"style":Zh(t,o,p);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(l=o.__html,l!=null){if(d.children!=null)throw Error(s(60));t.innerHTML=l}}break;case"children":typeof o=="string"?ri(t,o):(typeof o=="number"||typeof o=="bigint")&&ri(t,""+o);break;case"onScroll":o!=null&&nt("scroll",t);break;case"onScrollEnd":o!=null&&nt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Jr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!wt.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(d=l.endsWith("Capture"),a=l.slice(2,d?l.length-7:void 0),p=t[N]||null,p=p!=null?p[l]:null,typeof p=="function"&&t.removeEventListener(a,p,d),typeof o=="function")){typeof p!="function"&&p!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(a,o,d);break e}l in t?t[l]=o:o===!0?t.setAttribute(l,""):On(t,l,o)}}}function hn(t,a,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":nt("error",t),nt("load",t);var o=!1,d=!1,p;for(p in l)if(l.hasOwnProperty(p)){var S=l[p];if(S!=null)switch(p){case"src":o=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,a));default:bt(t,a,p,S,l,null)}}d&&bt(t,a,"srcSet",l.srcSet,l,null),o&&bt(t,a,"src",l.src,l,null);return;case"input":nt("invalid",t);var T=p=S=d=null,q=null,ae=null;for(o in l)if(l.hasOwnProperty(o)){var pe=l[o];if(pe!=null)switch(o){case"name":d=pe;break;case"type":S=pe;break;case"checked":q=pe;break;case"defaultChecked":ae=pe;break;case"value":p=pe;break;case"defaultValue":T=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(s(137,a));break;default:bt(t,a,o,pe,l,null)}}Kh(t,p,T,q,ae,S,d,!1);return;case"select":nt("invalid",t),o=S=p=null;for(d in l)if(l.hasOwnProperty(d)&&(T=l[d],T!=null))switch(d){case"value":p=T;break;case"defaultValue":S=T;break;case"multiple":o=T;default:bt(t,a,d,T,l,null)}a=p,l=S,t.multiple=!!o,a!=null?ni(t,!!o,a,!1):l!=null&&ni(t,!!o,l,!0);return;case"textarea":nt("invalid",t),p=d=o=null;for(S in l)if(l.hasOwnProperty(S)&&(T=l[S],T!=null))switch(S){case"value":o=T;break;case"defaultValue":d=T;break;case"children":p=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:bt(t,a,S,T,l,null)}Jh(t,o,d,p);return;case"option":for(q in l)l.hasOwnProperty(q)&&(o=l[q],o!=null)&&(q==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":bt(t,a,q,o,l,null));return;case"dialog":nt("beforetoggle",t),nt("toggle",t),nt("cancel",t),nt("close",t);break;case"iframe":case"object":nt("load",t);break;case"video":case"audio":for(o=0;o<I0.length;o++)nt(I0[o],t);break;case"image":nt("error",t),nt("load",t);break;case"details":nt("toggle",t);break;case"embed":case"source":case"link":nt("error",t),nt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ae in l)if(l.hasOwnProperty(ae)&&(o=l[ae],o!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,a));default:bt(t,a,ae,o,l,null)}return;default:if(ef(a)){for(pe in l)l.hasOwnProperty(pe)&&(o=l[pe],o!==void 0&&Uu(t,a,pe,o,l,void 0));return}}for(T in l)l.hasOwnProperty(T)&&(o=l[T],o!=null&&bt(t,a,T,o,l,null))}function xS(t,a,l,o){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,p=null,S=null,T=null,q=null,ae=null,pe=null;for(xe in l){var Se=l[xe];if(l.hasOwnProperty(xe)&&Se!=null)switch(xe){case"checked":break;case"value":break;case"defaultValue":q=Se;default:o.hasOwnProperty(xe)||bt(t,a,xe,null,o,Se)}}for(var oe in o){var xe=o[oe];if(Se=l[oe],o.hasOwnProperty(oe)&&(xe!=null||Se!=null))switch(oe){case"type":p=xe;break;case"name":d=xe;break;case"checked":ae=xe;break;case"defaultChecked":pe=xe;break;case"value":S=xe;break;case"defaultValue":T=xe;break;case"children":case"dangerouslySetInnerHTML":if(xe!=null)throw Error(s(137,a));break;default:xe!==Se&&bt(t,a,oe,xe,o,Se)}}Zc(t,S,T,q,ae,pe,p,d);return;case"select":xe=S=T=oe=null;for(p in l)if(q=l[p],l.hasOwnProperty(p)&&q!=null)switch(p){case"value":break;case"multiple":xe=q;default:o.hasOwnProperty(p)||bt(t,a,p,null,o,q)}for(d in o)if(p=o[d],q=l[d],o.hasOwnProperty(d)&&(p!=null||q!=null))switch(d){case"value":oe=p;break;case"defaultValue":T=p;break;case"multiple":S=p;default:p!==q&&bt(t,a,d,p,o,q)}a=T,l=S,o=xe,oe!=null?ni(t,!!l,oe,!1):!!o!=!!l&&(a!=null?ni(t,!!l,a,!0):ni(t,!!l,l?[]:"",!1));return;case"textarea":xe=oe=null;for(T in l)if(d=l[T],l.hasOwnProperty(T)&&d!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:bt(t,a,T,null,o,d)}for(S in o)if(d=o[S],p=l[S],o.hasOwnProperty(S)&&(d!=null||p!=null))switch(S){case"value":oe=d;break;case"defaultValue":xe=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(s(91));break;default:d!==p&&bt(t,a,S,d,o,p)}Yh(t,oe,xe);return;case"option":for(var Le in l)oe=l[Le],l.hasOwnProperty(Le)&&oe!=null&&!o.hasOwnProperty(Le)&&(Le==="selected"?t.selected=!1:bt(t,a,Le,null,o,oe));for(q in o)oe=o[q],xe=l[q],o.hasOwnProperty(q)&&oe!==xe&&(oe!=null||xe!=null)&&(q==="selected"?t.selected=oe&&typeof oe!="function"&&typeof oe!="symbol":bt(t,a,q,oe,o,xe));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Xe in l)oe=l[Xe],l.hasOwnProperty(Xe)&&oe!=null&&!o.hasOwnProperty(Xe)&&bt(t,a,Xe,null,o,oe);for(ae in o)if(oe=o[ae],xe=l[ae],o.hasOwnProperty(ae)&&oe!==xe&&(oe!=null||xe!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(s(137,a));break;default:bt(t,a,ae,oe,o,xe)}return;default:if(ef(a)){for(var St in l)oe=l[St],l.hasOwnProperty(St)&&oe!==void 0&&!o.hasOwnProperty(St)&&Uu(t,a,St,void 0,o,oe);for(pe in o)oe=o[pe],xe=l[pe],!o.hasOwnProperty(pe)||oe===xe||oe===void 0&&xe===void 0||Uu(t,a,pe,oe,o,xe);return}}for(var Q in l)oe=l[Q],l.hasOwnProperty(Q)&&oe!=null&&!o.hasOwnProperty(Q)&&bt(t,a,Q,null,o,oe);for(Se in o)oe=o[Se],xe=l[Se],!o.hasOwnProperty(Se)||oe===xe||oe==null&&xe==null||bt(t,a,Se,oe,o,xe)}function $p(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function pS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,a=0,l=performance.getEntriesByType("resource"),o=0;o<l.length;o++){var d=l[o],p=d.transferSize,S=d.initiatorType,T=d.duration;if(p&&T&&$p(S)){for(S=0,T=d.responseEnd,o+=1;o<l.length;o++){var q=l[o],ae=q.startTime;if(ae>T)break;var pe=q.transferSize,Se=q.initiatorType;pe&&$p(Se)&&(q=q.responseEnd,S+=pe*(q<T?1:(T-ae)/(q-ae)))}if(--o,a+=8*(p+S)/(d.duration/1e3),t++,10<t)break}}if(0<t)return a/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Wu=null,Pu=null;function Lo(t){return t.nodeType===9?t:t.ownerDocument}function em(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function tm(t,a){if(t===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&a==="foreignObject"?0:t}function Xu(t,a){return t==="textarea"||t==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Gu=null;function mS(){var t=window.event;return t&&t.type==="popstate"?t===Gu?!1:(Gu=t,!0):(Gu=null,!1)}var nm=typeof setTimeout=="function"?setTimeout:void 0,gS=typeof clearTimeout=="function"?clearTimeout:void 0,rm=typeof Promise=="function"?Promise:void 0,vS=typeof queueMicrotask=="function"?queueMicrotask:typeof rm<"u"?function(t){return rm.resolve(null).then(t).catch(yS)}:nm;function yS(t){setTimeout(function(){throw t})}function Wa(t){return t==="head"}function am(t,a){var l=a,o=0;do{var d=l.nextSibling;if(t.removeChild(l),d&&d.nodeType===8)if(l=d.data,l==="/$"||l==="/&"){if(o===0){t.removeChild(d),Oi(a);return}o--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")o++;else if(l==="html")z0(t.ownerDocument.documentElement);else if(l==="head"){l=t.ownerDocument.head,z0(l);for(var p=l.firstChild;p;){var S=p.nextSibling,T=p.nodeName;p[ce]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&p.rel.toLowerCase()==="stylesheet"||l.removeChild(p),p=S}}else l==="body"&&z0(t.ownerDocument.body);l=d}while(l);Oi(a)}function sm(t,a){var l=t;t=0;do{var o=l.nextSibling;if(l.nodeType===1?a?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(a?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),o&&o.nodeType===8)if(l=o.data,l==="/$"){if(t===0)break;t--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||t++;l=o}while(l)}function qu(t){var a=t.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var l=a;switch(a=a.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":qu(l),Ee(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function bS(t,a,l,o){for(;t.nodeType===1;){var d=l;if(t.nodeName.toLowerCase()!==a.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[ce])switch(a){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(p=t.getAttribute("rel"),p==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(p!==d.rel||t.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||t.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||t.getAttribute("title")!==(d.title==null?null:d.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(p=t.getAttribute("src"),(p!==(d.src==null?null:d.src)||t.getAttribute("type")!==(d.type==null?null:d.type)||t.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&p&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(a==="input"&&t.type==="hidden"){var p=d.name==null?null:""+d.name;if(d.type==="hidden"&&t.getAttribute("name")===p)return t}else return t;if(t=pr(t.nextSibling),t===null)break}return null}function SS(t,a,l){if(a==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=pr(t.nextSibling),t===null))return null;return t}function im(t,a){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=pr(t.nextSibling),t===null))return null;return t}function Vu(t){return t.data==="$?"||t.data==="$~"}function Ku(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function _S(t,a){var l=t.ownerDocument;if(t.data==="$~")t._reactRetry=a;else if(t.data!=="$?"||l.readyState!=="loading")a();else{var o=function(){a(),l.removeEventListener("DOMContentLoaded",o)};l.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function pr(t){for(;t!=null;t=t.nextSibling){var a=t.nodeType;if(a===1||a===3)break;if(a===8){if(a=t.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return t}var Yu=null;function lm(t){t=t.nextSibling;for(var a=0;t;){if(t.nodeType===8){var l=t.data;if(l==="/$"||l==="/&"){if(a===0)return pr(t.nextSibling);a--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||a++}t=t.nextSibling}return null}function om(t){t=t.previousSibling;for(var a=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(a===0)return t;a--}else l!=="/$"&&l!=="/&"||a++}t=t.previousSibling}return null}function cm(t,a,l){switch(a=Lo(l),t){case"html":if(t=a.documentElement,!t)throw Error(s(452));return t;case"head":if(t=a.head,!t)throw Error(s(453));return t;case"body":if(t=a.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function z0(t){for(var a=t.attributes;a.length;)t.removeAttributeNode(a[0]);Ee(t)}var mr=new Map,fm=new Set;function jo(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var da=ee.d;ee.d={f:CS,r:ES,D:wS,C:AS,L:TS,m:kS,X:BS,S:DS,M:FS};function CS(){var t=da.f(),a=ko();return t||a}function ES(t){var a=Ne(t);a!==null&&a.tag===5&&a.type==="form"?T1(a):da.r(t)}var Fi=typeof document>"u"?null:document;function um(t,a,l){var o=Fi;if(o&&typeof a=="string"&&a){var d=or(a);d='link[rel="'+t+'"][href="'+d+'"]',typeof l=="string"&&(d+='[crossorigin="'+l+'"]'),fm.has(d)||(fm.add(d),t={rel:t,crossOrigin:l,href:a},o.querySelector(d)===null&&(a=o.createElement("link"),hn(a,"link",t),Ie(a),o.head.appendChild(a)))}}function wS(t){da.D(t),um("dns-prefetch",t,null)}function AS(t,a){da.C(t,a),um("preconnect",t,a)}function TS(t,a,l){da.L(t,a,l);var o=Fi;if(o&&t&&a){var d='link[rel="preload"][as="'+or(a)+'"]';a==="image"&&l&&l.imageSrcSet?(d+='[imagesrcset="'+or(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(d+='[imagesizes="'+or(l.imageSizes)+'"]')):d+='[href="'+or(t)+'"]';var p=d;switch(a){case"style":p=Ri(t);break;case"script":p=Ni(t)}mr.has(p)||(t=v({rel:"preload",href:a==="image"&&l&&l.imageSrcSet?void 0:t,as:a},l),mr.set(p,t),o.querySelector(d)!==null||a==="style"&&o.querySelector(U0(p))||a==="script"&&o.querySelector(W0(p))||(a=o.createElement("link"),hn(a,"link",t),Ie(a),o.head.appendChild(a)))}}function kS(t,a){da.m(t,a);var l=Fi;if(l&&t){var o=a&&typeof a.as=="string"?a.as:"script",d='link[rel="modulepreload"][as="'+or(o)+'"][href="'+or(t)+'"]',p=d;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=Ni(t)}if(!mr.has(p)&&(t=v({rel:"modulepreload",href:t},a),mr.set(p,t),l.querySelector(d)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(W0(p)))return}o=l.createElement("link"),hn(o,"link",t),Ie(o),l.head.appendChild(o)}}}function DS(t,a,l){da.S(t,a,l);var o=Fi;if(o&&t){var d=Fe(o).hoistableStyles,p=Ri(t);a=a||"default";var S=d.get(p);if(!S){var T={loading:0,preload:null};if(S=o.querySelector(U0(p)))T.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":a},l),(l=mr.get(p))&&Ju(t,l);var q=S=o.createElement("link");Ie(q),hn(q,"link",t),q._p=new Promise(function(ae,pe){q.onload=ae,q.onerror=pe}),q.addEventListener("load",function(){T.loading|=1}),q.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Io(S,a,o)}S={type:"stylesheet",instance:S,count:1,state:T},d.set(p,S)}}}function BS(t,a){da.X(t,a);var l=Fi;if(l&&t){var o=Fe(l).hoistableScripts,d=Ni(t),p=o.get(d);p||(p=l.querySelector(W0(d)),p||(t=v({src:t,async:!0},a),(a=mr.get(d))&&Qu(t,a),p=l.createElement("script"),Ie(p),hn(p,"link",t),l.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},o.set(d,p))}}function FS(t,a){da.M(t,a);var l=Fi;if(l&&t){var o=Fe(l).hoistableScripts,d=Ni(t),p=o.get(d);p||(p=l.querySelector(W0(d)),p||(t=v({src:t,async:!0,type:"module"},a),(a=mr.get(d))&&Qu(t,a),p=l.createElement("script"),Ie(p),hn(p,"link",t),l.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},o.set(d,p))}}function dm(t,a,l,o){var d=(d=ue.current)?jo(d):null;if(!d)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(a=Ri(l.href),l=Fe(d).hoistableStyles,o=l.get(a),o||(o={type:"style",instance:null,count:0,state:null},l.set(a,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=Ri(l.href);var p=Fe(d).hoistableStyles,S=p.get(t);if(S||(d=d.ownerDocument||d,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(t,S),(p=d.querySelector(U0(t)))&&!p._p&&(S.instance=p,S.state.loading=5),mr.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},mr.set(t,l),p||RS(d,t,l,S.state))),a&&o===null)throw Error(s(528,""));return S}if(a&&o!==null)throw Error(s(529,""));return null;case"script":return a=l.async,l=l.src,typeof l=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Ni(l),l=Fe(d).hoistableScripts,o=l.get(a),o||(o={type:"script",instance:null,count:0,state:null},l.set(a,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Ri(t){return'href="'+or(t)+'"'}function U0(t){return'link[rel="stylesheet"]['+t+"]"}function hm(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function RS(t,a,l,o){t.querySelector('link[rel="preload"][as="style"]['+a+"]")?o.loading=1:(a=t.createElement("link"),o.preload=a,a.addEventListener("load",function(){return o.loading|=1}),a.addEventListener("error",function(){return o.loading|=2}),hn(a,"link",l),Ie(a),t.head.appendChild(a))}function Ni(t){return'[src="'+or(t)+'"]'}function W0(t){return"script[async]"+t}function xm(t,a,l){if(a.count++,a.instance===null)switch(a.type){case"style":var o=t.querySelector('style[data-href~="'+or(l.href)+'"]');if(o)return a.instance=o,Ie(o),o;var d=v({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),Ie(o),hn(o,"style",d),Io(o,l.precedence,t),a.instance=o;case"stylesheet":d=Ri(l.href);var p=t.querySelector(U0(d));if(p)return a.state.loading|=4,a.instance=p,Ie(p),p;o=hm(l),(d=mr.get(d))&&Ju(o,d),p=(t.ownerDocument||t).createElement("link"),Ie(p);var S=p;return S._p=new Promise(function(T,q){S.onload=T,S.onerror=q}),hn(p,"link",o),a.state.loading|=4,Io(p,l.precedence,t),a.instance=p;case"script":return p=Ni(l.src),(d=t.querySelector(W0(p)))?(a.instance=d,Ie(d),d):(o=l,(d=mr.get(p))&&(o=v({},l),Qu(o,d)),t=t.ownerDocument||t,d=t.createElement("script"),Ie(d),hn(d,"link",o),t.head.appendChild(d),a.instance=d);case"void":return null;default:throw Error(s(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(o=a.instance,a.state.loading|=4,Io(o,l.precedence,t));return a.instance}function Io(t,a,l){for(var o=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=o.length?o[o.length-1]:null,p=d,S=0;S<o.length;S++){var T=o[S];if(T.dataset.precedence===a)p=T;else if(p!==d)break}p?p.parentNode.insertBefore(t,p.nextSibling):(a=l.nodeType===9?l.head:l,a.insertBefore(t,a.firstChild))}function Ju(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.title==null&&(t.title=a.title)}function Qu(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.integrity==null&&(t.integrity=a.integrity)}var Ho=null;function pm(t,a,l){if(Ho===null){var o=new Map,d=Ho=new Map;d.set(l,o)}else d=Ho,o=d.get(l),o||(o=new Map,d.set(l,o));if(o.has(t))return o;for(o.set(t,null),l=l.getElementsByTagName(t),d=0;d<l.length;d++){var p=l[d];if(!(p[ce]||p[F]||t==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var S=p.getAttribute(a)||"";S=t+S;var T=o.get(S);T?T.push(p):o.set(S,[p])}}return o}function mm(t,a,l){t=t.ownerDocument||t,t.head.insertBefore(l,a==="title"?t.querySelector("head > title"):null)}function NS(t,a,l){if(l===1||a.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;return a.rel==="stylesheet"?(t=a.disabled,typeof a.precedence=="string"&&t==null):!0;case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function gm(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function OS(t,a,l,o){if(l.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var d=Ri(o.href),p=a.querySelector(U0(d));if(p){a=p._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(t.count++,t=zo.bind(t),a.then(t,t)),l.state.loading|=4,l.instance=p,Ie(p);return}p=a.ownerDocument||a,o=hm(o),(d=mr.get(d))&&Ju(o,d),p=p.createElement("link"),Ie(p);var S=p;S._p=new Promise(function(T,q){S.onload=T,S.onerror=q}),hn(p,"link",o),l.instance=p}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(l,a),(a=l.state.preload)&&(l.state.loading&3)===0&&(t.count++,l=zo.bind(t),a.addEventListener("load",l),a.addEventListener("error",l))}}var Zu=0;function MS(t,a){return t.stylesheets&&t.count===0&&Wo(t,t.stylesheets),0<t.count||0<t.imgCount?function(l){var o=setTimeout(function(){if(t.stylesheets&&Wo(t,t.stylesheets),t.unsuspend){var p=t.unsuspend;t.unsuspend=null,p()}},6e4+a);0<t.imgBytes&&Zu===0&&(Zu=62500*pS());var d=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Wo(t,t.stylesheets),t.unsuspend)){var p=t.unsuspend;t.unsuspend=null,p()}},(t.imgBytes>Zu?50:800)+a);return t.unsuspend=l,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(d)}}:null}function zo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Wo(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Uo=null;function Wo(t,a){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Uo=new Map,a.forEach(LS,t),Uo=null,zo.call(t))}function LS(t,a){if(!(a.state.loading&4)){var l=Uo.get(t);if(l)var o=l.get(null);else{l=new Map,Uo.set(t,l);for(var d=t.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<d.length;p++){var S=d[p];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(l.set(S.dataset.precedence,S),o=S)}o&&l.set(null,o)}d=a.instance,S=d.getAttribute("data-precedence"),p=l.get(S)||o,p===o&&l.set(null,d),l.set(S,d),this.count++,o=zo.bind(this),d.addEventListener("load",o),d.addEventListener("error",o),p?p.parentNode.insertBefore(d,p.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(d,t.firstChild)),a.state.loading|=4}}var P0={$$typeof:w,Provider:null,Consumer:null,_currentValue:we,_currentValue2:we,_threadCount:0};function jS(t,a,l,o,d,p,S,T,q){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=n0(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=n0(0),this.hiddenUpdates=n0(null),this.identifierPrefix=o,this.onUncaughtError=d,this.onCaughtError=p,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=q,this.incompleteTransitions=new Map}function vm(t,a,l,o,d,p,S,T,q,ae,pe,Se){return t=new jS(t,a,l,S,q,ae,pe,Se,T),a=1,p===!0&&(a|=24),p=Gn(3,null,null,a),t.current=p,p.stateNode=t,a=Ff(),a.refCount++,t.pooledCache=a,a.refCount++,p.memoizedState={element:o,isDehydrated:l,cache:a},Mf(p),t}function ym(t){return t?(t=fi,t):fi}function bm(t,a,l,o,d,p){d=ym(d),o.context===null?o.context=d:o.pendingContext=d,o=Fa(a),o.payload={element:l},p=p===void 0?null:p,p!==null&&(o.callback=p),l=Ra(t,o,a),l!==null&&(zn(l,t,a),S0(l,t,a))}function Sm(t,a){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<a?l:a}}function $u(t,a){Sm(t,a),(t=t.alternate)&&Sm(t,a)}function _m(t){if(t.tag===13||t.tag===31){var a=xs(t,67108864);a!==null&&zn(a,t,67108864),$u(t,67108864)}}function Cm(t){if(t.tag===13||t.tag===31){var a=Jn();a=r0(a);var l=xs(t,a);l!==null&&zn(l,t,a),$u(t,a)}}var Po=!0;function IS(t,a,l,o){var d=X.T;X.T=null;var p=ee.p;try{ee.p=2,ed(t,a,l,o)}finally{ee.p=p,X.T=d}}function HS(t,a,l,o){var d=X.T;X.T=null;var p=ee.p;try{ee.p=8,ed(t,a,l,o)}finally{ee.p=p,X.T=d}}function ed(t,a,l,o){if(Po){var d=td(o);if(d===null)zu(t,a,o,Xo,l),wm(t,o);else if(US(d,t,a,l,o))o.stopPropagation();else if(wm(t,o),a&4&&-1<zS.indexOf(t)){for(;d!==null;){var p=Ne(d);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var S=sr(p.pendingLanes);if(S!==0){var T=p;for(T.pendingLanes|=2,T.entangledLanes|=2;S;){var q=1<<31-An(S);T.entanglements[1]|=q,S&=~q}zr(p),(pt&6)===0&&(Ao=je()+500,j0(0))}}break;case 31:case 13:T=xs(p,2),T!==null&&zn(T,p,2),ko(),$u(p,2)}if(p=td(o),p===null&&zu(t,a,o,Xo,l),p===d)break;d=p}d!==null&&o.stopPropagation()}else zu(t,a,o,null,l)}}function td(t){return t=nf(t),nd(t)}var Xo=null;function nd(t){if(Xo=null,t=ke(t),t!==null){var a=c(t);if(a===null)t=null;else{var l=a.tag;if(l===13){if(t=f(a),t!==null)return t;t=null}else if(l===31){if(t=u(a),t!==null)return t;t=null}else if(l===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;t=null}else a!==t&&(t=null)}}return Xo=t,null}function Em(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ot()){case Pn:return 2;case Ca:return 8;case Xt:case ar:return 32;case Qe:return 268435456;default:return 32}default:return 32}}var rd=!1,Pa=null,Xa=null,Ga=null,X0=new Map,G0=new Map,qa=[],zS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function wm(t,a){switch(t){case"focusin":case"focusout":Pa=null;break;case"dragenter":case"dragleave":Xa=null;break;case"mouseover":case"mouseout":Ga=null;break;case"pointerover":case"pointerout":X0.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":G0.delete(a.pointerId)}}function q0(t,a,l,o,d,p){return t===null||t.nativeEvent!==p?(t={blockedOn:a,domEventName:l,eventSystemFlags:o,nativeEvent:p,targetContainers:[d]},a!==null&&(a=Ne(a),a!==null&&_m(a)),t):(t.eventSystemFlags|=o,a=t.targetContainers,d!==null&&a.indexOf(d)===-1&&a.push(d),t)}function US(t,a,l,o,d){switch(a){case"focusin":return Pa=q0(Pa,t,a,l,o,d),!0;case"dragenter":return Xa=q0(Xa,t,a,l,o,d),!0;case"mouseover":return Ga=q0(Ga,t,a,l,o,d),!0;case"pointerover":var p=d.pointerId;return X0.set(p,q0(X0.get(p)||null,t,a,l,o,d)),!0;case"gotpointercapture":return p=d.pointerId,G0.set(p,q0(G0.get(p)||null,t,a,l,o,d)),!0}return!1}function Am(t){var a=ke(t.target);if(a!==null){var l=c(a);if(l!==null){if(a=l.tag,a===13){if(a=f(l),a!==null){t.blockedOn=a,M(t.priority,function(){Cm(l)});return}}else if(a===31){if(a=u(l),a!==null){t.blockedOn=a,M(t.priority,function(){Cm(l)});return}}else if(a===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Go(t){if(t.blockedOn!==null)return!1;for(var a=t.targetContainers;0<a.length;){var l=td(t.nativeEvent);if(l===null){l=t.nativeEvent;var o=new l.constructor(l.type,l);tf=o,l.target.dispatchEvent(o),tf=null}else return a=Ne(l),a!==null&&_m(a),t.blockedOn=l,!1;a.shift()}return!0}function Tm(t,a,l){Go(t)&&l.delete(a)}function WS(){rd=!1,Pa!==null&&Go(Pa)&&(Pa=null),Xa!==null&&Go(Xa)&&(Xa=null),Ga!==null&&Go(Ga)&&(Ga=null),X0.forEach(Tm),G0.forEach(Tm)}function qo(t,a){t.blockedOn===a&&(t.blockedOn=null,rd||(rd=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,WS)))}var Vo=null;function km(t){Vo!==t&&(Vo=t,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){Vo===t&&(Vo=null);for(var a=0;a<t.length;a+=3){var l=t[a],o=t[a+1],d=t[a+2];if(typeof o!="function"){if(nd(o||l)===null)continue;break}var p=Ne(l);p!==null&&(t.splice(a,3),a-=3,tu(p,{pending:!0,data:d,method:l.method,action:o},o,d))}}))}function Oi(t){function a(q){return qo(q,t)}Pa!==null&&qo(Pa,t),Xa!==null&&qo(Xa,t),Ga!==null&&qo(Ga,t),X0.forEach(a),G0.forEach(a);for(var l=0;l<qa.length;l++){var o=qa[l];o.blockedOn===t&&(o.blockedOn=null)}for(;0<qa.length&&(l=qa[0],l.blockedOn===null);)Am(l),l.blockedOn===null&&qa.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(o=0;o<l.length;o+=3){var d=l[o],p=l[o+1],S=d[N]||null;if(typeof p=="function")S||km(l);else if(S){var T=null;if(p&&p.hasAttribute("formAction")){if(d=p,S=p[N]||null)T=S.formAction;else if(nd(d)!==null)continue}else T=S.action;typeof T=="function"?l[o+1]=T:(l.splice(o,3),o-=3),km(l)}}}function Dm(){function t(p){p.canIntercept&&p.info==="react-transition"&&p.intercept({handler:function(){return new Promise(function(S){return d=S})},focusReset:"manual",scroll:"manual"})}function a(){d!==null&&(d(),d=null),o||setTimeout(l,20)}function l(){if(!o&&!navigation.transition){var p=navigation.currentEntry;p&&p.url!=null&&navigation.navigate(p.url,{state:p.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,d=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(l,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),d!==null&&(d(),d=null)}}}function ad(t){this._internalRoot=t}Ko.prototype.render=ad.prototype.render=function(t){var a=this._internalRoot;if(a===null)throw Error(s(409));var l=a.current,o=Jn();bm(l,o,t,a,null,null)},Ko.prototype.unmount=ad.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var a=t.containerInfo;bm(t.current,2,null,t,null,null),ko(),a[j]=null}};function Ko(t){this._internalRoot=t}Ko.prototype.unstable_scheduleHydration=function(t){if(t){var a=A();t={blockedOn:null,target:t,priority:a};for(var l=0;l<qa.length&&a!==0&&a<qa[l].priority;l++);qa.splice(l,0,t),l===0&&Am(t)}};var Bm=n.version;if(Bm!=="19.2.8")throw Error(s(527,Bm,"19.2.8"));ee.findDOMNode=function(t){var a=t._reactInternals;if(a===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=x(a),t=t!==null?m(t):null,t=t===null?null:t.stateNode,t};var PS={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:X,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yo.isDisabled&&Yo.supportsFiber)try{Tt=Yo.inject(PS),zt=Yo}catch{}}return V0.createRoot=function(t,a){if(!i(t))throw Error(s(299));var l=!1,o="",d=j1,p=I1,S=H1;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(o=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(p=a.onCaughtError),a.onRecoverableError!==void 0&&(S=a.onRecoverableError)),a=vm(t,1,!1,null,null,l,o,null,d,p,S,Dm),t[j]=a.current,Hu(t),new ad(a)},V0.hydrateRoot=function(t,a,l){if(!i(t))throw Error(s(299));var o=!1,d="",p=j1,S=I1,T=H1,q=null;return l!=null&&(l.unstable_strictMode===!0&&(o=!0),l.identifierPrefix!==void 0&&(d=l.identifierPrefix),l.onUncaughtError!==void 0&&(p=l.onUncaughtError),l.onCaughtError!==void 0&&(S=l.onCaughtError),l.onRecoverableError!==void 0&&(T=l.onRecoverableError),l.formState!==void 0&&(q=l.formState)),a=vm(t,1,!0,a,l??null,o,d,q,p,S,T,Dm),a.context=ym(null),l=a.current,o=Jn(),o=r0(o),d=Fa(o),d.callback=null,Ra(l,d,o),l=o,a.current.lanes=l,cs(a,l),zr(a),t[j]=a.current,Hu(t),new Ko(a)},V0.version="19.2.8",V0}var Lm;function M_(){if(Lm)return sd.exports;Lm=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}return e(),sd.exports=O_(),sd.exports}var L_=M_(),j_=(e,n,r,s,i,c,f,u)=>{let h=document.documentElement,x=["light","dark"];function m(_){(Array.isArray(e)?e:[e]).forEach(E=>{let b=E==="class",C=b&&c?i.map(D=>c[D]||D):i;b?(h.classList.remove(...C),h.classList.add(c&&c[_]?c[_]:_)):h.setAttribute(E,_)}),v(_)}function v(_){u&&x.includes(_)&&(h.style.colorScheme=_)}function y(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(s)m(s);else try{let _=localStorage.getItem(n)||r,E=f&&_==="system"?y():_;m(E)}catch{}},jm=["light","dark"],Fv="(prefers-color-scheme: dark)",I_=typeof window>"u",Qd=te.createContext(void 0),H_={setTheme:e=>{},themes:[]},Zd=()=>{var e;return(e=te.useContext(Qd))!=null?e:H_},z_=e=>te.useContext(Qd)?te.createElement(te.Fragment,null,e.children):te.createElement(W_,{...e}),U_=["light","dark"],W_=({forcedTheme:e,disableTransitionOnChange:n=!1,enableSystem:r=!0,enableColorScheme:s=!0,storageKey:i="theme",themes:c=U_,defaultTheme:f=r?"system":"light",attribute:u="data-theme",value:h,children:x,nonce:m,scriptProps:v})=>{let[y,_]=te.useState(()=>X_(i,f)),[E,b]=te.useState(()=>y==="system"?od():y),C=h?Object.values(h):c,D=te.useCallback(V=>{let z=V;if(!z)return;V==="system"&&r&&(z=od());let R=h?h[z]:z,W=n?G_(m):null,U=document.documentElement,fe=Z=>{Z==="class"?(U.classList.remove(...C),R&&U.classList.add(R)):Z.startsWith("data-")&&(R?U.setAttribute(Z,R):U.removeAttribute(Z))};if(Array.isArray(u)?u.forEach(fe):fe(u),s){let Z=jm.includes(f)?f:null,L=jm.includes(z)?z:Z;U.style.colorScheme=L}W?.()},[m]),k=te.useCallback(V=>{let z=typeof V=="function"?V(y):V;_(z);try{localStorage.setItem(i,z)}catch{}},[y]),w=te.useCallback(V=>{let z=od(V);b(z),y==="system"&&r&&!e&&D("system")},[y,e]);te.useEffect(()=>{let V=window.matchMedia(Fv);return V.addListener(w),w(V),()=>V.removeListener(w)},[w]),te.useEffect(()=>{let V=z=>{z.key===i&&(z.newValue?_(z.newValue):k(f))};return window.addEventListener("storage",V),()=>window.removeEventListener("storage",V)},[k]),te.useEffect(()=>{D(e??y)},[e,y]);let H=te.useMemo(()=>({theme:y,setTheme:k,forcedTheme:e,resolvedTheme:y==="system"?E:y,themes:r?[...c,"system"]:c,systemTheme:r?E:void 0}),[y,k,e,E,r,c]);return te.createElement(Qd.Provider,{value:H},te.createElement(P_,{forcedTheme:e,storageKey:i,attribute:u,enableSystem:r,enableColorScheme:s,defaultTheme:f,value:h,themes:c,nonce:m,scriptProps:v}),x)},P_=te.memo(({forcedTheme:e,storageKey:n,attribute:r,enableSystem:s,enableColorScheme:i,defaultTheme:c,value:f,themes:u,nonce:h,scriptProps:x})=>{let m=JSON.stringify([r,n,c,e,u,f,s,i]).slice(1,-1);return te.createElement("script",{...x,suppressHydrationWarning:!0,nonce:typeof window>"u"?h:"",dangerouslySetInnerHTML:{__html:`(${j_.toString()})(${m})`}})}),X_=(e,n)=>{if(I_)return;let r;try{r=localStorage.getItem(e)||void 0}catch{}return r||n},G_=e=>{let n=document.createElement("style");return e&&n.setAttribute("nonce",e),n.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(n),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(n)},1)}},od=e=>(e||(e=window.matchMedia(Fv)),e.matches?"dark":"light");const q_=({...e})=>{const{theme:n="system"}=Zd();return g.jsx(w3,{theme:n,className:"toaster group",style:{"--normal-bg":"var(--popover)","--normal-text":"var(--popover-foreground)","--normal-border":"var(--border)"},...e})},V_=(e,n)=>{const r=new Array(e.length+n.length);for(let s=0;s<e.length;s++)r[s]=e[s];for(let s=0;s<n.length;s++)r[e.length+s]=n[s];return r},K_=(e,n)=>({classGroupId:e,validator:n}),Rv=(e=new Map,n=null,r)=>({nextPart:e,validators:n,classGroupId:r}),mc="-",Im=[],Y_="arbitrary..",J_=e=>{const n=Z_(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:s}=e;return{getClassGroupId:f=>{if(f.startsWith("[")&&f.endsWith("]"))return Q_(f);const u=f.split(mc),h=u[0]===""&&u.length>1?1:0;return Nv(u,h,n)},getConflictingClassGroupIds:(f,u)=>{if(u){const h=s[f],x=r[f];return h?x?V_(x,h):h:x||Im}return r[f]||Im}}},Nv=(e,n,r)=>{if(e.length-n===0)return r.classGroupId;const i=e[n],c=r.nextPart.get(i);if(c){const x=Nv(e,n+1,c);if(x)return x}const f=r.validators;if(f===null)return;const u=n===0?e.join(mc):e.slice(n).join(mc),h=f.length;for(let x=0;x<h;x++){const m=f[x];if(m.validator(u))return m.classGroupId}},Q_=e=>e.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const n=e.slice(1,-1),r=n.indexOf(":"),s=n.slice(0,r);return s?Y_+s:void 0})(),Z_=e=>{const{theme:n,classGroups:r}=e;return $_(r,n)},$_=(e,n)=>{const r=Rv();for(const s in e){const i=e[s];$d(i,r,s,n)}return r},$d=(e,n,r,s)=>{const i=e.length;for(let c=0;c<i;c++){const f=e[c];eC(f,n,r,s)}},eC=(e,n,r,s)=>{if(typeof e=="string"){tC(e,n,r);return}if(typeof e=="function"){nC(e,n,r,s);return}rC(e,n,r,s)},tC=(e,n,r)=>{const s=e===""?n:Ov(n,e);s.classGroupId=r},nC=(e,n,r,s)=>{if(aC(e)){$d(e(s),n,r,s);return}n.validators===null&&(n.validators=[]),n.validators.push(K_(r,e))},rC=(e,n,r,s)=>{const i=Object.entries(e),c=i.length;for(let f=0;f<c;f++){const[u,h]=i[f];$d(h,Ov(n,u),r,s)}},Ov=(e,n)=>{let r=e;const s=n.split(mc),i=s.length;for(let c=0;c<i;c++){const f=s[c];let u=r.nextPart.get(f);u||(u=Rv(),r.nextPart.set(f,u)),r=u}return r},aC=e=>"isThemeGetter"in e&&e.isThemeGetter===!0,sC=e=>{if(e<1)return{get:()=>{},set:()=>{}};let n=0,r=Object.create(null),s=Object.create(null);const i=(c,f)=>{r[c]=f,n++,n>e&&(n=0,s=r,r=Object.create(null))};return{get(c){let f=r[c];if(f!==void 0)return f;if((f=s[c])!==void 0)return i(c,f),f},set(c,f){c in r?r[c]=f:i(c,f)}}},kd="!",Hm=":",iC=[],zm=(e,n,r,s,i)=>({modifiers:e,hasImportantModifier:n,baseClassName:r,maybePostfixModifierPosition:s,isExternal:i}),lC=e=>{const{prefix:n,experimentalParseClassName:r}=e;let s=i=>{const c=[];let f=0,u=0,h=0,x;const m=i.length;for(let b=0;b<m;b++){const C=i[b];if(f===0&&u===0){if(C===Hm){c.push(i.slice(h,b)),h=b+1;continue}if(C==="/"){x=b;continue}}C==="["?f++:C==="]"?f--:C==="("?u++:C===")"&&u--}const v=c.length===0?i:i.slice(h);let y=v,_=!1;v.endsWith(kd)?(y=v.slice(0,-1),_=!0):v.startsWith(kd)&&(y=v.slice(1),_=!0);const E=x&&x>h?x-h:void 0;return zm(c,_,y,E)};if(n){const i=n+Hm,c=s;s=f=>f.startsWith(i)?c(f.slice(i.length)):zm(iC,!1,f,void 0,!0)}if(r){const i=s;s=c=>r({className:c,parseClassName:i})}return s},oC=e=>{const n=new Map;return e.orderSensitiveModifiers.forEach((r,s)=>{n.set(r,1e6+s)}),r=>{const s=[];let i=[];for(let c=0;c<r.length;c++){const f=r[c],u=f[0]==="[",h=n.has(f);u||h?(i.length>0&&(i.sort(),s.push(...i),i=[]),s.push(f)):i.push(f)}return i.length>0&&(i.sort(),s.push(...i)),s}},cC=e=>({cache:sC(e.cacheSize),parseClassName:lC(e),sortModifiers:oC(e),postfixLookupClassGroupIds:fC(e),...J_(e)}),fC=e=>{const n=Object.create(null),r=e.postfixLookupClassGroups;if(r)for(let s=0;s<r.length;s++)n[r[s]]=!0;return n},uC=/\s+/,dC=(e,n)=>{const{parseClassName:r,getClassGroupId:s,getConflictingClassGroupIds:i,sortModifiers:c,postfixLookupClassGroupIds:f}=n,u=[],h=e.trim().split(uC);let x="";for(let m=h.length-1;m>=0;m-=1){const v=h[m],{isExternal:y,modifiers:_,hasImportantModifier:E,baseClassName:b,maybePostfixModifierPosition:C}=r(v);if(y){x=v+(x.length>0?" "+x:x);continue}let D=!!C,k;if(D){const R=b.substring(0,C);k=s(R);const W=k&&f[k]?s(b):void 0;W&&W!==k&&(k=W,D=!1)}else k=s(b);if(!k){if(!D){x=v+(x.length>0?" "+x:x);continue}if(k=s(b),!k){x=v+(x.length>0?" "+x:x);continue}D=!1}const w=_.length===0?"":_.length===1?_[0]:c(_).join(":"),H=E?w+kd:w,V=H+k;if(u.indexOf(V)>-1)continue;u.push(V);const z=i(k,D);for(let R=0;R<z.length;++R){const W=z[R];u.push(H+W)}x=v+(x.length>0?" "+x:x)}return x},hC=(...e)=>{let n=0,r,s,i="";for(;n<e.length;)(r=e[n++])&&(s=Mv(r))&&(i&&(i+=" "),i+=s);return i},Mv=e=>{if(typeof e=="string")return e;let n,r="";for(let s=0;s<e.length;s++)e[s]&&(n=Mv(e[s]))&&(r&&(r+=" "),r+=n);return r},xC=(e,...n)=>{let r,s,i,c;const f=h=>{const x=n.reduce((m,v)=>v(m),e());return r=cC(x),s=r.cache.get,i=r.cache.set,c=u,u(h)},u=h=>{const x=s(h);if(x)return x;const m=dC(h,r);return i(h,m),m};return c=f,(...h)=>c(hC(...h))},pC=[],$t=e=>{const n=r=>r[e]||pC;return n.isThemeGetter=!0,n},Lv=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,jv=/^\((?:(\w[\w-]*):)?(.+)\)$/i,mC=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,gC=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,vC=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,yC=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,bC=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,SC=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ka=e=>mC.test(e),et=e=>!!e&&!Number.isNaN(Number(e)),Ur=e=>!!e&&Number.isInteger(Number(e)),cd=e=>e.endsWith("%")&&et(e.slice(0,-1)),ha=e=>gC.test(e),Iv=()=>!0,_C=e=>vC.test(e)&&!yC.test(e),eh=()=>!1,CC=e=>bC.test(e),EC=e=>SC.test(e),wC=e=>!Oe(e)&&!Me(e),AC=e=>e.startsWith("@container")&&(e[10]==="/"&&e[11]!==void 0||e[11]==="s"&&e[16]!==void 0&&e.startsWith("-size/",10)||e[11]==="n"&&e[18]!==void 0&&e.startsWith("-normal/",10)),TC=e=>as(e,Uv,eh),Oe=e=>Lv.test(e),Ts=e=>as(e,Wv,_C),Um=e=>as(e,MC,et),kC=e=>as(e,Xv,Iv),DC=e=>as(e,Pv,eh),Wm=e=>as(e,Hv,eh),BC=e=>as(e,zv,EC),Jo=e=>as(e,Gv,CC),Me=e=>jv.test(e),K0=e=>Xs(e,Wv),FC=e=>Xs(e,Pv),Pm=e=>Xs(e,Hv),RC=e=>Xs(e,Uv),NC=e=>Xs(e,zv),Qo=e=>Xs(e,Gv,!0),OC=e=>Xs(e,Xv,!0),as=(e,n,r)=>{const s=Lv.exec(e);return s?s[1]?n(s[1]):r(s[2]):!1},Xs=(e,n,r=!1)=>{const s=jv.exec(e);return s?s[1]?n(s[1]):r:!1},Hv=e=>e==="position"||e==="percentage",zv=e=>e==="image"||e==="url",Uv=e=>e==="length"||e==="size"||e==="bg-size",Wv=e=>e==="length",MC=e=>e==="number",Pv=e=>e==="family-name",Xv=e=>e==="number"||e==="weight",Gv=e=>e==="shadow",LC=()=>{const e=$t("color"),n=$t("font"),r=$t("text"),s=$t("font-weight"),i=$t("tracking"),c=$t("leading"),f=$t("breakpoint"),u=$t("container"),h=$t("spacing"),x=$t("radius"),m=$t("shadow"),v=$t("inset-shadow"),y=$t("text-shadow"),_=$t("drop-shadow"),E=$t("blur"),b=$t("perspective"),C=$t("aspect"),D=$t("ease"),k=$t("animate"),w=()=>["auto","avoid","all","avoid-page","page","left","right","column"],H=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],V=()=>[...H(),Me,Oe],z=()=>["auto","hidden","clip","visible","scroll"],R=()=>["auto","contain","none"],W=()=>[Me,Oe,h],U=()=>[Ka,"full","auto",...W()],fe=()=>[Ur,"none","subgrid",Me,Oe],Z=()=>["auto",{span:["full",Ur,Me,Oe]},Ur,Me,Oe],L=()=>[Ur,"auto",Me,Oe],de=()=>["auto","min","max","fr",Me,Oe],Ce=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],me=()=>["start","end","center","stretch","center-safe","end-safe"],X=()=>["auto",...W()],ee=()=>[Ka,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...W()],we=()=>[Ka,"screen","full","dvw","lvw","svw","min","max","fit",...W()],K=()=>[Ka,"screen","full","lh","dvh","lvh","svh","min","max","fit",...W()],ne=()=>[e,Me,Oe],Te=()=>[...H(),Pm,Wm,{position:[Me,Oe]}],O=()=>["no-repeat",{repeat:["","x","y","space","round"]}],J=()=>["auto","cover","contain",RC,TC,{size:[Me,Oe]}],P=()=>[cd,K0,Ts],G=()=>["","none","full",x,Me,Oe],ue=()=>["",et,K0,Ts],he=()=>["solid","dashed","dotted","double"],ve=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ye=()=>[et,cd,Pm,Wm],_e=()=>["","none",E,Me,Oe],Pe=()=>["none",et,Me,Oe],I=()=>["none",et,Me,Oe],st=()=>[et,Me,Oe],Ue=()=>[Ka,"full",...W()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[ha],breakpoint:[ha],color:[Iv],container:[ha],"drop-shadow":[ha],ease:["in","out","in-out"],font:[wC],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[ha],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[ha],shadow:[ha],spacing:["px",et],text:[ha],"text-shadow":[ha],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Ka,Oe,Me,C]}],container:["container"],"container-type":[{"@container":["","normal","size",Me,Oe]}],"container-named":[AC],columns:[{columns:[et,Oe,Me,u]}],"break-after":[{"break-after":w()}],"break-before":[{"break-before":w()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:V()}],overflow:[{overflow:z()}],"overflow-x":[{"overflow-x":z()}],"overflow-y":[{"overflow-y":z()}],overscroll:[{overscroll:R()}],"overscroll-x":[{"overscroll-x":R()}],"overscroll-y":[{"overscroll-y":R()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:U()}],"inset-x":[{"inset-x":U()}],"inset-y":[{"inset-y":U()}],start:[{"inset-s":U(),start:U()}],end:[{"inset-e":U(),end:U()}],"inset-bs":[{"inset-bs":U()}],"inset-be":[{"inset-be":U()}],top:[{top:U()}],right:[{right:U()}],bottom:[{bottom:U()}],left:[{left:U()}],visibility:["visible","invisible","collapse"],z:[{z:[Ur,"auto",Me,Oe]}],basis:[{basis:[Ka,"full","auto",u,...W()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[et,Ka,"auto","initial","none",Oe]}],grow:[{grow:["",et,Me,Oe]}],shrink:[{shrink:["",et,Me,Oe]}],order:[{order:[Ur,"first","last","none",Me,Oe]}],"grid-cols":[{"grid-cols":fe()}],"col-start-end":[{col:Z()}],"col-start":[{"col-start":L()}],"col-end":[{"col-end":L()}],"grid-rows":[{"grid-rows":fe()}],"row-start-end":[{row:Z()}],"row-start":[{"row-start":L()}],"row-end":[{"row-end":L()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":de()}],"auto-rows":[{"auto-rows":de()}],gap:[{gap:W()}],"gap-x":[{"gap-x":W()}],"gap-y":[{"gap-y":W()}],"justify-content":[{justify:[...Ce(),"normal"]}],"justify-items":[{"justify-items":[...me(),"normal"]}],"justify-self":[{"justify-self":["auto",...me()]}],"align-content":[{content:["normal",...Ce()]}],"align-items":[{items:[...me(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...me(),{baseline:["","last"]}]}],"place-content":[{"place-content":Ce()}],"place-items":[{"place-items":[...me(),"baseline"]}],"place-self":[{"place-self":["auto",...me()]}],p:[{p:W()}],px:[{px:W()}],py:[{py:W()}],ps:[{ps:W()}],pe:[{pe:W()}],pbs:[{pbs:W()}],pbe:[{pbe:W()}],pt:[{pt:W()}],pr:[{pr:W()}],pb:[{pb:W()}],pl:[{pl:W()}],m:[{m:X()}],mx:[{mx:X()}],my:[{my:X()}],ms:[{ms:X()}],me:[{me:X()}],mbs:[{mbs:X()}],mbe:[{mbe:X()}],mt:[{mt:X()}],mr:[{mr:X()}],mb:[{mb:X()}],ml:[{ml:X()}],"space-x":[{"space-x":W()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":W()}],"space-y-reverse":["space-y-reverse"],size:[{size:ee()}],"inline-size":[{inline:["auto",...we()]}],"min-inline-size":[{"min-inline":["auto",...we()]}],"max-inline-size":[{"max-inline":["none",...we()]}],"block-size":[{block:["auto",...K()]}],"min-block-size":[{"min-block":["auto",...K()]}],"max-block-size":[{"max-block":["none",...K()]}],w:[{w:[u,"screen",...ee()]}],"min-w":[{"min-w":[u,"screen","none",...ee()]}],"max-w":[{"max-w":[u,"screen","none","prose",{screen:[f]},...ee()]}],h:[{h:["screen","lh",...ee()]}],"min-h":[{"min-h":["screen","lh","none",...ee()]}],"max-h":[{"max-h":["screen","lh",...ee()]}],"font-size":[{text:["base",r,K0,Ts]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[s,OC,kC]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",cd,Oe]}],"font-family":[{font:[FC,DC,n]}],"font-features":[{"font-features":[Oe]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[i,Me,Oe]}],"line-clamp":[{"line-clamp":[et,"none",Me,Um]}],leading:[{leading:[c,...W()]}],"list-image":[{"list-image":["none",Me,Oe]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",Me,Oe]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:ne()}],"text-color":[{text:ne()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...he(),"wavy"]}],"text-decoration-thickness":[{decoration:[et,"from-font","auto",Me,Ts]}],"text-decoration-color":[{decoration:ne()}],"underline-offset":[{"underline-offset":[et,"auto",Me,Oe]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:W()}],"tab-size":[{tab:[Ur,Me,Oe]}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Me,Oe]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Me,Oe]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:Te()}],"bg-repeat":[{bg:O()}],"bg-size":[{bg:J()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Ur,Me,Oe],radial:["",Me,Oe],conic:[Ur,Me,Oe]},NC,BC]}],"bg-color":[{bg:ne()}],"gradient-from-pos":[{from:P()}],"gradient-via-pos":[{via:P()}],"gradient-to-pos":[{to:P()}],"gradient-from":[{from:ne()}],"gradient-via":[{via:ne()}],"gradient-to":[{to:ne()}],rounded:[{rounded:G()}],"rounded-s":[{"rounded-s":G()}],"rounded-e":[{"rounded-e":G()}],"rounded-t":[{"rounded-t":G()}],"rounded-r":[{"rounded-r":G()}],"rounded-b":[{"rounded-b":G()}],"rounded-l":[{"rounded-l":G()}],"rounded-ss":[{"rounded-ss":G()}],"rounded-se":[{"rounded-se":G()}],"rounded-ee":[{"rounded-ee":G()}],"rounded-es":[{"rounded-es":G()}],"rounded-tl":[{"rounded-tl":G()}],"rounded-tr":[{"rounded-tr":G()}],"rounded-br":[{"rounded-br":G()}],"rounded-bl":[{"rounded-bl":G()}],"border-w":[{border:ue()}],"border-w-x":[{"border-x":ue()}],"border-w-y":[{"border-y":ue()}],"border-w-s":[{"border-s":ue()}],"border-w-e":[{"border-e":ue()}],"border-w-bs":[{"border-bs":ue()}],"border-w-be":[{"border-be":ue()}],"border-w-t":[{"border-t":ue()}],"border-w-r":[{"border-r":ue()}],"border-w-b":[{"border-b":ue()}],"border-w-l":[{"border-l":ue()}],"divide-x":[{"divide-x":ue()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":ue()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...he(),"hidden","none"]}],"divide-style":[{divide:[...he(),"hidden","none"]}],"border-color":[{border:ne()}],"border-color-x":[{"border-x":ne()}],"border-color-y":[{"border-y":ne()}],"border-color-s":[{"border-s":ne()}],"border-color-e":[{"border-e":ne()}],"border-color-bs":[{"border-bs":ne()}],"border-color-be":[{"border-be":ne()}],"border-color-t":[{"border-t":ne()}],"border-color-r":[{"border-r":ne()}],"border-color-b":[{"border-b":ne()}],"border-color-l":[{"border-l":ne()}],"divide-color":[{divide:ne()}],"outline-style":[{outline:[...he(),"none","hidden"]}],"outline-offset":[{"outline-offset":[et,Me,Oe]}],"outline-w":[{outline:["",et,K0,Ts]}],"outline-color":[{outline:ne()}],shadow:[{shadow:["","none",m,Qo,Jo]}],"shadow-color":[{shadow:ne()}],"inset-shadow":[{"inset-shadow":["none",v,Qo,Jo]}],"inset-shadow-color":[{"inset-shadow":ne()}],"ring-w":[{ring:ue()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:ne()}],"ring-offset-w":[{"ring-offset":[et,Ts]}],"ring-offset-color":[{"ring-offset":ne()}],"inset-ring-w":[{"inset-ring":ue()}],"inset-ring-color":[{"inset-ring":ne()}],"text-shadow":[{"text-shadow":["none",y,Qo,Jo]}],"text-shadow-color":[{"text-shadow":ne()}],opacity:[{opacity:[et,Me,Oe]}],"mix-blend":[{"mix-blend":[...ve(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":ve()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[et]}],"mask-image-linear-from-pos":[{"mask-linear-from":ye()}],"mask-image-linear-to-pos":[{"mask-linear-to":ye()}],"mask-image-linear-from-color":[{"mask-linear-from":ne()}],"mask-image-linear-to-color":[{"mask-linear-to":ne()}],"mask-image-t-from-pos":[{"mask-t-from":ye()}],"mask-image-t-to-pos":[{"mask-t-to":ye()}],"mask-image-t-from-color":[{"mask-t-from":ne()}],"mask-image-t-to-color":[{"mask-t-to":ne()}],"mask-image-r-from-pos":[{"mask-r-from":ye()}],"mask-image-r-to-pos":[{"mask-r-to":ye()}],"mask-image-r-from-color":[{"mask-r-from":ne()}],"mask-image-r-to-color":[{"mask-r-to":ne()}],"mask-image-b-from-pos":[{"mask-b-from":ye()}],"mask-image-b-to-pos":[{"mask-b-to":ye()}],"mask-image-b-from-color":[{"mask-b-from":ne()}],"mask-image-b-to-color":[{"mask-b-to":ne()}],"mask-image-l-from-pos":[{"mask-l-from":ye()}],"mask-image-l-to-pos":[{"mask-l-to":ye()}],"mask-image-l-from-color":[{"mask-l-from":ne()}],"mask-image-l-to-color":[{"mask-l-to":ne()}],"mask-image-x-from-pos":[{"mask-x-from":ye()}],"mask-image-x-to-pos":[{"mask-x-to":ye()}],"mask-image-x-from-color":[{"mask-x-from":ne()}],"mask-image-x-to-color":[{"mask-x-to":ne()}],"mask-image-y-from-pos":[{"mask-y-from":ye()}],"mask-image-y-to-pos":[{"mask-y-to":ye()}],"mask-image-y-from-color":[{"mask-y-from":ne()}],"mask-image-y-to-color":[{"mask-y-to":ne()}],"mask-image-radial":[{"mask-radial":[Me,Oe]}],"mask-image-radial-from-pos":[{"mask-radial-from":ye()}],"mask-image-radial-to-pos":[{"mask-radial-to":ye()}],"mask-image-radial-from-color":[{"mask-radial-from":ne()}],"mask-image-radial-to-color":[{"mask-radial-to":ne()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":H()}],"mask-image-conic-pos":[{"mask-conic":[et]}],"mask-image-conic-from-pos":[{"mask-conic-from":ye()}],"mask-image-conic-to-pos":[{"mask-conic-to":ye()}],"mask-image-conic-from-color":[{"mask-conic-from":ne()}],"mask-image-conic-to-color":[{"mask-conic-to":ne()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:Te()}],"mask-repeat":[{mask:O()}],"mask-size":[{mask:J()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",Me,Oe]}],filter:[{filter:["","none",Me,Oe]}],blur:[{blur:_e()}],brightness:[{brightness:[et,Me,Oe]}],contrast:[{contrast:[et,Me,Oe]}],"drop-shadow":[{"drop-shadow":["","none",_,Qo,Jo]}],"drop-shadow-color":[{"drop-shadow":ne()}],grayscale:[{grayscale:["",et,Me,Oe]}],"hue-rotate":[{"hue-rotate":[et,Me,Oe]}],invert:[{invert:["",et,Me,Oe]}],saturate:[{saturate:[et,Me,Oe]}],sepia:[{sepia:["",et,Me,Oe]}],"backdrop-filter":[{"backdrop-filter":["","none",Me,Oe]}],"backdrop-blur":[{"backdrop-blur":_e()}],"backdrop-brightness":[{"backdrop-brightness":[et,Me,Oe]}],"backdrop-contrast":[{"backdrop-contrast":[et,Me,Oe]}],"backdrop-grayscale":[{"backdrop-grayscale":["",et,Me,Oe]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[et,Me,Oe]}],"backdrop-invert":[{"backdrop-invert":["",et,Me,Oe]}],"backdrop-opacity":[{"backdrop-opacity":[et,Me,Oe]}],"backdrop-saturate":[{"backdrop-saturate":[et,Me,Oe]}],"backdrop-sepia":[{"backdrop-sepia":["",et,Me,Oe]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":W()}],"border-spacing-x":[{"border-spacing-x":W()}],"border-spacing-y":[{"border-spacing-y":W()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",Me,Oe]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[et,"initial",Me,Oe]}],ease:[{ease:["linear","initial",D,Me,Oe]}],delay:[{delay:[et,Me,Oe]}],animate:[{animate:["none",k,Me,Oe]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[b,Me,Oe]}],"perspective-origin":[{"perspective-origin":V()}],rotate:[{rotate:Pe()}],"rotate-x":[{"rotate-x":Pe()}],"rotate-y":[{"rotate-y":Pe()}],"rotate-z":[{"rotate-z":Pe()}],scale:[{scale:I()}],"scale-x":[{"scale-x":I()}],"scale-y":[{"scale-y":I()}],"scale-z":[{"scale-z":I()}],"scale-3d":["scale-3d"],skew:[{skew:st()}],"skew-x":[{"skew-x":st()}],"skew-y":[{"skew-y":st()}],transform:[{transform:[Me,Oe,"","none","gpu","cpu"]}],"transform-origin":[{origin:V()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Ue()}],"translate-x":[{"translate-x":Ue()}],"translate-y":[{"translate-y":Ue()}],"translate-z":[{"translate-z":Ue()}],"translate-none":["translate-none"],zoom:[{zoom:[Ur,Me,Oe]}],accent:[{accent:ne()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:ne()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Me,Oe]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scrollbar-thumb-color":[{"scrollbar-thumb":ne()}],"scrollbar-track-color":[{"scrollbar-track":ne()}],"scrollbar-gutter":[{"scrollbar-gutter":["auto","stable","both"]}],"scrollbar-w":[{scrollbar:["auto","thin","none"]}],"scroll-m":[{"scroll-m":W()}],"scroll-mx":[{"scroll-mx":W()}],"scroll-my":[{"scroll-my":W()}],"scroll-ms":[{"scroll-ms":W()}],"scroll-me":[{"scroll-me":W()}],"scroll-mbs":[{"scroll-mbs":W()}],"scroll-mbe":[{"scroll-mbe":W()}],"scroll-mt":[{"scroll-mt":W()}],"scroll-mr":[{"scroll-mr":W()}],"scroll-mb":[{"scroll-mb":W()}],"scroll-ml":[{"scroll-ml":W()}],"scroll-p":[{"scroll-p":W()}],"scroll-px":[{"scroll-px":W()}],"scroll-py":[{"scroll-py":W()}],"scroll-ps":[{"scroll-ps":W()}],"scroll-pe":[{"scroll-pe":W()}],"scroll-pbs":[{"scroll-pbs":W()}],"scroll-pbe":[{"scroll-pbe":W()}],"scroll-pt":[{"scroll-pt":W()}],"scroll-pr":[{"scroll-pr":W()}],"scroll-pb":[{"scroll-pb":W()}],"scroll-pl":[{"scroll-pl":W()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Me,Oe]}],fill:[{fill:["none",...ne()]}],"stroke-w":[{stroke:[et,K0,Ts,Um]}],stroke:[{stroke:["none",...ne()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{"container-named":["container-type"],overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},postfixLookupClassGroups:["container-type"],orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},jC=xC(LC);function Re(...e){return jC(wv(e))}const IC=e=>{if(!e)return"";let n=e?.request?.header?.filter(r=>r?.key==="Content-Type")??[];return n.length>0?n[0].value:""},HC=e=>!e||e.length===0,zC=()=>"localhost";function qv({delayDuration:e=0,...n}){return g.jsx(GS,{"data-slot":"tooltip-provider",delayDuration:e,...n})}const Xi={EDITOR:"/editor",LOGIN:"/login"},Xm=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,Gm=wv,Vv=(e,n)=>r=>{var s;if(n?.variants==null)return Gm(e,r?.class,r?.className);const{variants:i,defaultVariants:c}=n,f=Object.keys(i).map(x=>{const m=r?.[x],v=c?.[x];if(m===null)return null;const y=Xm(m)||Xm(v);return i[x][y]}),u=r&&Object.entries(r).reduce((x,m)=>{let[v,y]=m;return y===void 0||(x[v]=y),x},{}),h=n==null||(s=n.compoundVariants)===null||s===void 0?void 0:s.reduce((x,m)=>{let{class:v,className:y,..._}=m;return Object.entries(_).every(E=>{let[b,C]=E;return Array.isArray(C)?C.includes({...c,...u}[b]):{...c,...u}[b]===C})?[...x,v,y]:x},[]);return Gm(e,f,h,r?.class,r?.className)},fd=768;function UC(){const[e,n]=te.useState(void 0);return te.useEffect(()=>{const r=window.matchMedia(`(max-width: ${fd-1}px)`),s=()=>{n(window.innerWidth<fd)};return r.addEventListener("change",s),n(window.innerWidth<fd),()=>r.removeEventListener("change",s)},[]),!!e}const Kv=Vv("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",xs:"h-6 rounded-md gap-1 px-2 has-[>svg]:px-2",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function Ve({className:e,variant:n,size:r,asChild:s=!1,...i}){const c=s?xv:"button";return g.jsx(c,{"data-slot":"button",className:Re(Kv({variant:n,size:r,className:e})),...i})}function ut({className:e,type:n,...r}){return g.jsx("input",{type:n,"data-slot":"input",className:Re("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",e),...r})}const WC=te.forwardRef(({className:e,icon:n,iconPosition:r="right",...s},i)=>g.jsxs("div",{className:"relative flex items-center w-full",children:[n&&r==="left"&&g.jsx("div",{className:"absolute left-3 flex items-center pointer-events-none text-muted-foreground",children:n}),g.jsx("input",{ref:i,"data-slot":"input",className:Re("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",n&&r==="left"&&"pl-10",n&&r==="right"&&"pr-10",e),...s}),n&&r==="right"&&g.jsx("div",{className:"absolute right-3 flex items-center pointer-events-none text-muted-foreground",children:n})]}));WC.displayName="InputWithIcon";function PC({...e}){return g.jsx(pv,{"data-slot":"sheet",...e})}function XC({...e}){return g.jsx(bv,{"data-slot":"sheet-portal",...e})}function GC({className:e,...n}){return g.jsx(Sv,{"data-slot":"sheet-overlay",className:Re("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",e),...n})}function qC({className:e,children:n,side:r="right",...s}){return g.jsxs(XC,{children:[g.jsx(GC,{}),g.jsxs(mv,{"data-slot":"sheet-content",className:Re("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",r==="right"&&"data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",r==="left"&&"data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",r==="top"&&"data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",r==="bottom"&&"data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",e),...s,children:[n,g.jsxs(gv,{className:"ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none",children:[g.jsx(ma,{className:"size-4"}),g.jsx("span",{className:"sr-only",children:"Close"})]})]})]})}function VC({className:e,...n}){return g.jsx("div",{"data-slot":"sheet-header",className:Re("flex flex-col gap-1.5 p-4",e),...n})}function KC({className:e,...n}){return g.jsx(vv,{"data-slot":"sheet-title",className:Re("text-foreground font-semibold",e),...n})}function YC({className:e,...n}){return g.jsx(yv,{"data-slot":"sheet-description",className:Re("text-muted-foreground text-sm",e),...n})}const JC="sidebar_state",QC=3600*24*7,ZC="16rem",$C="18rem",e8="3rem",t8="b",Yv=te.createContext(null);function n8(){const e=te.useContext(Yv);if(!e)throw new Error("useSidebar must be used within a SidebarProvider.");return e}function r8({defaultOpen:e=!0,open:n,onOpenChange:r,className:s,style:i,children:c,...f}){const u=UC(),[h,x]=te.useState(!1),[m,v]=te.useState(e),y=n??m,_=te.useCallback(D=>{const k=typeof D=="function"?D(y):D;r?r(k):v(k),document.cookie=`${JC}=${k}; path=/; max-age=${QC}`},[r,y]),E=te.useCallback(()=>u?x(D=>!D):_(D=>!D),[u,_,x]);te.useEffect(()=>{const D=k=>{k.key===t8&&(k.metaKey||k.ctrlKey)&&(k.preventDefault(),E())};return window.addEventListener("keydown",D),()=>window.removeEventListener("keydown",D)},[E]);const b=y?"expanded":"collapsed",C=te.useMemo(()=>({state:b,open:y,setOpen:_,isMobile:u,openMobile:h,setOpenMobile:x,toggleSidebar:E}),[b,y,_,u,h,x,E]);return g.jsx(Yv.Provider,{value:C,children:g.jsx(qv,{delayDuration:0,children:g.jsx("div",{"data-slot":"sidebar-wrapper",style:{"--sidebar-width":ZC,"--sidebar-width-icon":e8,...i},className:Re("group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",s),...f,children:c})})})}function a8({side:e="left",variant:n="sidebar",collapsible:r="offcanvas",className:s,children:i,...c}){const{isMobile:f,state:u,openMobile:h,setOpenMobile:x}=n8();return r==="none"?g.jsx("div",{"data-slot":"sidebar",className:Re("bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",s),...c,children:i}):f?g.jsx(PC,{open:h,onOpenChange:x,...c,children:g.jsxs(qC,{"data-sidebar":"sidebar","data-slot":"sidebar","data-mobile":"true",className:"bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",style:{"--sidebar-width":$C},side:e,children:[g.jsxs(VC,{className:"sr-only",children:[g.jsx(KC,{children:"Sidebar"}),g.jsx(YC,{children:"Displays the mobile sidebar."})]}),g.jsx("div",{className:"flex h-full w-full flex-col",children:i})]})}):g.jsxs("div",{className:"group peer text-sidebar-foreground hidden md:block","data-state":u,"data-collapsible":u==="collapsed"?r:"","data-variant":n,"data-side":e,"data-slot":"sidebar",children:[g.jsx("div",{"data-slot":"sidebar-gap",className:Re("relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear","group-data-[collapsible=offcanvas]:w-0","group-data-[side=right]:rotate-180",n==="floating"||n==="inset"?"group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]":"group-data-[collapsible=icon]:w-(--sidebar-width-icon)")}),g.jsx("div",{"data-slot":"sidebar-container",className:Re("fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",e==="left"?"left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]":"right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",n==="floating"||n==="inset"?"p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]":"group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",s),...c,children:g.jsx("div",{"data-sidebar":"sidebar","data-slot":"sidebar-inner",className:"bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm",children:i})})]})}function s8({className:e,...n}){return g.jsx("div",{"data-slot":"sidebar-content","data-sidebar":"content",className:Re("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",e),...n})}const cn=n_.withTypes(),$e=r_.withTypes(),th=a_.withTypes(),i8=e=>{const n={};for(const r of e.split(`
`)){const s=r.trim();if(!s||s.startsWith("#"))continue;const i=s.indexOf("=");if(i>0){const c=s.slice(0,i).trim(),f=s.slice(i+1).trim().replace(/^["']|["']$/g,"");n[c]=f}}return n};let gc="/api/v1";const ts=A3.create({baseURL:gc,withCredentials:!0}),l8=async()=>{try{const e=["/apitester/.env","./.env","/.env"];for(const n of e)try{const r=await fetch(n),s=r.headers.get("content-type")||"";if(r.ok&&!s.includes("text/html")){const i=await r.text(),c=i8(i);if(c.VITE_API_URL)return gc=c.VITE_API_URL,ts.defaults.baseURL=gc,c}}catch{}}catch{}return{}};typeof window<"u"&&l8();ts.interceptors.request.use(async e=>{const n=e;return(!n.baseURL||n.baseURL==="/api/v1"||n.baseURL==="/apitester/api/v1")&&(n.baseURL=gc),n.metadata={startTime:Date.now()},n},e=>Promise.reject(e));ts.interceptors.response.use(e=>{const n=e;return n.config.metadata&&(n.config.metadata.endTime=Date.now(),n.duration=n.config.metadata.endTime-n.config.metadata.startTime),n},async e=>{const n=e,r=e.response?.status,s=e.response?.data;console.log("Interceptor status:",r),console.log("Error data:",s),console.log("error => ",e);const i=n.config?.metadata?.startTime;return n.duration=typeof i=="number"?Date.now()-i:0,Promise.reject(n)});const Jv={getCollection:async()=>(await ts.get("/collection/read")).data.data,writeCollection:async e=>(await ts.put("/collection/write",e,{headers:{"Content-Type":"application/json"}})).data.message},xc=th("collections/fetchCollections",async()=>await Jv.getCollection()),Qv={data:null,activeTabId:"",openRequestTabs:[],cachedRequest:[],variable:[],baseUrl:[],status:"idle",dirTree:new Map,dirtyRequestIds:[]},o8=(e,n)=>e.id===n.id?{id:n.id,key:n.key,value:n.value,description:n.description,disabled:n.disabled,type:n.type,src:n.src}:e,nr=e=>{const n=e.activeTabId,r=n?e.openRequestTabs.find(s=>s.id===n):e.openRequestTabs[e.openRequestTabs.length-1];if(!r)return null;if(r.activeExampleId&&r.exampleResponse){const s=r.exampleResponse.find(i=>i.id===r.activeExampleId);if(s){const i=s.originalRequest??(r.request?JSON.parse(JSON.stringify(r.request)):{method:"GET",header:[],url:{raw:"",host:[""],path:[""],query:[]}});return s.originalRequest=i,i}}return r.request??null},nh=e=>{const n=e.collection?.activeTabId;if(n)return c8(e,n);const r=e.collection?.openRequestTabs?.[e.collection.openRequestTabs.length-1];if(!r)return null;if(r.activeExampleId&&r.exampleResponse){const s=r.exampleResponse.find(i=>i.id===r.activeExampleId);if(s?.originalRequest)return s.originalRequest;if(s)return r.request??null}return r?.request??null},c8=(e,n)=>{const r=e.collection?.openRequestTabs?.find(s=>s.id===n);if(!r)return null;if(r.activeExampleId&&r.exampleResponse){const s=r.exampleResponse.find(i=>i.id===r.activeExampleId);if(s?.originalRequest)return s.originalRequest;if(s)return r.request??null}return r.request??null},f8=e=>{const n=e.indexOf("?");return n>=0?e.slice(n):""},u8=e=>e.filter(Boolean),d8=e=>{if(!e.trim())return[];const n=e.split("?")[0];let r=n;if(/^https?:\/\//i.test(n))try{r=new URL(n).pathname}catch{r=n}return r.split("/").filter(Boolean)},Uc=e=>{const n=f8(e.raw),r=u8(e.path);e.path=r,e.raw=`${r.length>0?`/${r.join("/")}`:""}${n}`},rr=e=>{const n=e.activeTabId||e.openRequestTabs[e.openRequestTabs.length-1]?.id;n&&!e.dirtyRequestIds.includes(n)&&e.dirtyRequestIds.push(n)},Zv=(e,n)=>{const r=n.payload.id||e.activeTabId||e.openRequestTabs[e.openRequestTabs.length-1]?.id,s=r?e.openRequestTabs.find(c=>c.id===r):null;if(s){if(s.activeExampleId&&s.exampleResponse){const c=s.exampleResponse.find(f=>f.id===s.activeExampleId);if(c){const f=c.originalRequest??(s.request?JSON.parse(JSON.stringify(s.request)):{method:n.payload.method,header:[],url:{raw:"",host:[""],path:[""],query:[]}});f.method=n.payload.method,c.originalRequest=f,r&&!e.dirtyRequestIds.includes(r)&&e.dirtyRequestIds.push(r);return}}s.request?s.request.method=n.payload.method:s.request={method:n.payload.method,header:[],url:{raw:"",host:[""],path:[""],query:[]}},r&&!e.dirtyRequestIds.includes(r)&&e.dirtyRequestIds.push(r);return}const i=nr(e);i&&(i.method=n.payload.method,rr(e))},$v=(e,n)=>{const r=nr(e);r&&(r.header=r.header??[],r.header.push(n.payload.header),rr(e))},e2=(e,n)=>{const r=nr(e);if(!r)return;r.header||(r.header=[]),r.header.some(i=>i.id===n.payload.header.id)?r.header=r.header.map(i=>i.id===n.payload.header.id?n.payload.header:i):r.header.push(n.payload.header),rr(e)},t2=(e,n)=>{const r=nr(e);r&&(r.header=(r.header??[]).filter(s=>s.id!==n.payload.id),rr(e))},n2=(e,n)=>{const r=nr(e);r&&(r.url.query=r.url.query??[],r.url.query.push(n.payload.query),rr(e))},r2=(e,n)=>{const r=nr(e);r&&(r.url.query=r.url.query.map(s=>o8(s,n.payload.query)),rr(e))},a2=(e,n)=>{const r=nr(e);r&&(r.url.query=(r.url.query??[]).filter(s=>s.id!==n.payload.id),rr(e))},s2=(e,n)=>{const r=nr(e);r&&(r.body||(r.body={mode:"raw"}),typeof n.payload.body=="string"?(r.body.mode="raw",r.body.raw=n.payload.body,delete r.body.formdata):(r.body.mode="formdata",r.body.formdata=n.payload.body,delete r.body.raw),rr(e))},i2=(e,n)=>{const r=nr(e);r&&(r.url.path.push(n.payload.path),Uc(r.url),rr(e))},l2=(e,n)=>{const r=nr(e);r&&(n.payload.index<0||n.payload.index>=r.url.path.length||(r.url.path[n.payload.index]=n.payload.value,Uc(r.url),rr(e)))},o2=(e,n)=>{const r=nr(e);r&&(r.url.path=r.url.path.filter((s,i)=>i!==n.payload.index),Uc(r.url),rr(e))},c2=(e,n)=>{const r=nr(e);r&&(r.url.path=n.payload.path,Uc(r.url),rr(e))},f2=(e,n)=>{const r=nr(e);r&&(r.url.raw=n.payload.raw,r.url.path=d8(n.payload.raw),rr(e))},h8=Vd({name:"request",initialState:Qv,reducers:{setMethod:Zv,addHeader:$v,updateHeader:e2,removeHeader:t2,addQueryParam:n2,updateQueryParam:r2,removeQueryParam:a2,setBody:s2,addUrlPath:i2,updateUrlPath:l2,removeUrlPath:o2,setUrlPath:c2,setUrlRaw:f2}}),{setMethod:Dd,addHeader:u2,updateHeader:Rs,removeHeader:dl,addQueryParam:rh,updateQueryParam:ah,removeQueryParam:d2,setBody:Ii,addUrlPath:x8,updateUrlPath:p8,removeUrlPath:m8,setUrlPath:g8,setUrlRaw:h2}=h8.actions,v8=e=>nh(e)?.header??[],x2=e=>nh(e)?.body,sh=v8,y8=e=>nh(e)?.url?.query??[],p2="__CURRENT_ORIGIN__",m2=Vd({name:"collections",initialState:Qv,reducers:{addActiveRequest(e,n){if(!e.data?.item)return;const r=$0(n.payload.id,e.data.item);r?.request&&(e.openRequestTabs=e.openRequestTabs.filter(s=>s.id!==n.payload.id),e.openRequestTabs.push({id:n.payload.id,request:r.request,response:null,exampleResponse:r.response}),e.activeTabId=n.payload.id)},removeActiveRequest(e,n){e.openRequestTabs=e.openRequestTabs.filter(r=>r.id!==n.payload.id),e.activeTabId===n.payload.id&&(e.activeTabId=e.openRequestTabs[e.openRequestTabs.length-1]?.id??"")},setActiveTabId(e,n){e.activeTabId=n.payload.id},setCurrentRequest(e,n){const r=Mi(e.openRequestTabs,n.payload.id);if(r<0){e.openRequestTabs.push({id:n.payload.id,request:n.payload.request??null,response:null,exampleResponse:n.payload.response}),e.activeTabId||(e.activeTabId=n.payload.id);return}e.openRequestTabs[r].request=n.payload.request??null,n.payload.response&&(e.openRequestTabs[r].exampleResponse=n.payload.response)},setCurrentResponse(e,n){const r=Mi(e.openRequestTabs,n.payload.id);r<0||(e.openRequestTabs[r].response=n.payload.response)},setActiveRequestScript(e,n){if(!e.data?.item||!e.activeTabId)return;const r=$0(e.activeTabId,e.data.item);if(r){if(!r.event?.length){r.event=[{listen:"test",script:{exec:n.payload.script.split(`
`),type:"text/javascript"}}];return}r.event[0]={...r.event[0],script:{...r.event[0].script,exec:n.payload.script.split(`
`),type:r.event[0].script?.type??"text/javascript"}}}},setCollectionScript(e,n){if(!e.data)return;const r=e.data.event?.find(s=>s.listen==="prerequest");r?r.script={exec:n.payload.script.split(`
`),type:"text/javascript"}:(e.data.event||(e.data.event=[]),e.data.event.push({listen:"prerequest",script:{exec:n.payload.script.split(`
`),type:"text/javascript"}}))},setCollectionInfo(e,n){e.data&&(e.data.info=n.payload)},setCollectionAuth(e,n){e.data&&(e.data.auth=n.payload)},addVariable(e,n){e.variable.push(n.payload),Li(e)},removeVariable(e,n){e.variable=e.variable.filter(r=>r.id!==n.payload.id),Li(e)},updateVariable(e,n){e.variable=e.variable.map(r=>r.id===n.payload.id?n.payload:r),Li(e)},setVariables(e,n){e.variable=n.payload,Li(e)},addBaseUrl(e,n){e.baseUrl.push(n.payload),Li(e)},removeBaseUrl(e,n){e.baseUrl=e.baseUrl.filter(r=>r.id!==n.payload.id),Li(e)},setActiveTree(e,n){w2(n.payload.id,n.payload.status,e.dirTree)},clearDirtyRequestIds(e){e.dirtyRequestIds=[]},saveActiveToData(e){if(e.data?.item){for(const n of e.openRequestTabs){if(!n.request)continue;const r=$0(n.id,e.data.item);r&&(r.request=n.request,n.exampleResponse&&(r.response=n.exampleResponse))}e.dirtyRequestIds=[]}},setAuthType(e,n){const r=Mi(e.openRequestTabs,e.activeTabId);r<0||(e.openRequestTabs[r].authType=n.payload.authType)},setScriptResult(e,n){const r=Mi(e.openRequestTabs,n.payload.id);r<0||(e.openRequestTabs[r].scriptResult=n.payload.result,e.openRequestTabs[r].scriptLogs=n.payload.logs,e.openRequestTabs[r].scriptMutations=n.payload.mutations)},saveExampleResponse(e,n){const r=Mi(e.openRequestTabs,n.payload.id);if(r<0)return;const s=e.openRequestTabs[r];if(!s.response||!s.request)return;const i={id:crypto.randomUUID(),name:n.payload.name,status:s.response.statusText,code:s.response.statusCode,header:s.request.header.map(c=>({key:c.key,value:c.value,id:c.id})),cookie:[],body:JSON.stringify(s.response.data),originalRequest:s.request};s.exampleResponse=[...s.exampleResponse??[],i],e.dirtyRequestIds.includes(n.payload.id)||e.dirtyRequestIds.push(n.payload.id)},addExampleResponse(e,n){const r=n.payload?.id??e.activeTabId,s=r?Mi(e.openRequestTabs,r):e.openRequestTabs.length-1;if(s<0||!e.openRequestTabs[s])return;const i=e.openRequestTabs[s],c=i.request?JSON.parse(JSON.stringify(i.request)):{method:"GET",header:[],url:{raw:"",host:[""],path:[""],query:[]}},f=crypto.randomUUID(),u=(i.exampleResponse?.length??0)+1,h=n?.payload?.name?.trim()||`Example ${u}`,x={id:f,name:h,status:"OK",code:200,header:[],cookie:[],body:"",originalRequest:c};i.exampleResponse=[...i.exampleResponse??[],x],i.activeExampleId=f,e.dirtyRequestIds.includes(i.id)||e.dirtyRequestIds.push(i.id)},removeExampleResponse(e,n){const r=typeof n.payload=="string"?n.payload:n.payload.id??n.payload.exampleId??"",s=typeof n.payload=="object"?n.payload.index:void 0,i=typeof n.payload=="object"?n.payload.requestId:void 0;if(!r&&s===void 0)return;for(const f of e.openRequestTabs)if(!(i&&f.id!==i)){if(r&&f.exampleResponse?.some(u=>u.id===r))f.exampleResponse=f.exampleResponse.filter(u=>u.id!==r),f.activeExampleId===r&&(f.activeExampleId=null),e.dirtyRequestIds.includes(f.id)||e.dirtyRequestIds.push(f.id);else if(!r&&s!==void 0&&f.exampleResponse&&f.exampleResponse[s]){const u=f.exampleResponse[s];f.exampleResponse=f.exampleResponse.filter((h,x)=>x!==s),u?.id&&f.activeExampleId===u.id&&(f.activeExampleId=null),e.dirtyRequestIds.includes(f.id)||e.dirtyRequestIds.push(f.id)}}const c=f=>{for(const u of f)i&&u.id!==i&&!u.item||(r&&u.response?.some(h=>h.id===r)?(u.response=u.response.filter(h=>h.id!==r),e.dirtyRequestIds.includes(u.id)||e.dirtyRequestIds.push(u.id)):!r&&s!==void 0&&(!i||u.id===i)&&u.response&&u.response[s]&&(u.response=u.response.filter((h,x)=>x!==s),e.dirtyRequestIds.includes(u.id)||e.dirtyRequestIds.push(u.id)),u.item&&c(u.item))};e.data?.item&&c(e.data.item)},setActiveExampleId(e,n){const r=n.payload.id||e.activeTabId,s=e.openRequestTabs.find(i=>i.id===r);if(s&&(s.activeExampleId=n.payload.exampleId,n.payload.exampleId&&s.exampleResponse)){const i=s.exampleResponse.find(c=>c.id===n.payload.exampleId);i&&!i.originalRequest&&(i.originalRequest=s.request?JSON.parse(JSON.stringify(s.request)):{method:"GET",header:[],url:{raw:"",host:[""],path:[""],query:[]}})}},updateExampleResponseBody(e,n){const r=n.payload.id||e.activeTabId,s=e.openRequestTabs.find(f=>f.id===r),i=n.payload.exampleId||s?.activeExampleId;if(!s||!i)return;const c=s.exampleResponse?.find(f=>f.id===i);c&&(c.body=n.payload.body,e.dirtyRequestIds.includes(s.id)||e.dirtyRequestIds.push(s.id))},updateExampleResponseStatus(e,n){const r=n.payload.id||e.activeTabId,s=e.openRequestTabs.find(f=>f.id===r),i=n.payload.exampleId||s?.activeExampleId;if(!s||!i)return;const c=s.exampleResponse?.find(f=>f.id===i);c&&(c.code=n.payload.code,c.status=n.payload.status,e.dirtyRequestIds.includes(s.id)||e.dirtyRequestIds.push(s.id))},renameExampleResponse(e,n){const r=n.payload.id||e.activeTabId,s=e.openRequestTabs.find(f=>f.id===r),i=n.payload.exampleId||s?.activeExampleId;if(!s||!i)return;const c=s.exampleResponse?.find(f=>f.id===i);c&&(c.name=n.payload.name,e.dirtyRequestIds.includes(s.id)||e.dirtyRequestIds.push(s.id))},updateExampleResponseHeader(e,n){const r=n.payload.id||e.activeTabId,s=e.openRequestTabs.find(f=>f.id===r),i=n.payload.exampleId||s?.activeExampleId;if(!s||!i)return;const c=s.exampleResponse?.find(f=>f.id===i);c&&(c.header=n.payload.header,e.dirtyRequestIds.includes(s.id)||e.dirtyRequestIds.push(s.id))},createNewRequest(e){if(!e.data?.item)return;const n=crypto.randomUUID(),r={id:n,name:"New Request",request:{method:"GET",header:[],url:{raw:"",host:[""],path:[""],query:[]}}};e.data.item.push(r),e.dirTree.set(n,{id:n,name:"New Request",isActive:!1,category:"REQ",method:"GET"}),e.openRequestTabs.push({id:n,request:r.request,response:null}),e.activeTabId=n,e.dirtyRequestIds.push(n)},deleteRequest(e,n){e.data?.item&&(Bd(e.data.item,n.payload.id),Fd(e.dirTree,n.payload.id),e.openRequestTabs=e.openRequestTabs.filter(r=>r.id!==n.payload.id),e.dirtyRequestIds=e.dirtyRequestIds.filter(r=>r!==n.payload.id),e.activeTabId===n.payload.id&&(e.activeTabId=e.openRequestTabs[e.openRequestTabs.length-1]?.id??""))},deleteFolder(e,n){if(!e.data?.item)return;const r=A2(e.dirTree,n.payload.id),s=r?T2(r):[];Bd(e.data.item,n.payload.id),Fd(e.dirTree,n.payload.id),e.openRequestTabs=e.openRequestTabs.filter(i=>!s.includes(i.id)),e.dirtyRequestIds=e.dirtyRequestIds.filter(i=>!s.includes(i)),s.includes(e.activeTabId)&&(e.activeTabId=e.openRequestTabs[e.openRequestTabs.length-1]?.id??"")}},extraReducers:e=>{e.addCase(xc.pending,n=>{n.status="pending"}),e.addCase(xc.fulfilled,(n,r)=>{n.openRequestTabs=[],n.activeTabId="";let s=r.payload.content;if(s){n.data=s,n.cachedRequest=rE(s.item),n.dirTree=ch(s.item);const i=s?.variable?.reduce((c,f)=>(tE(f)?c.baseUrl.push(f):c.variable.push(f),c),{baseUrl:[],variable:[]});n.baseUrl=i?.baseUrl??[{id:"base_url",key:"base_url",value:p2,category:"BASE_URL",type:"string"}],n.variable=i?.variable??[]}n.dirtyRequestIds=[],n.status="succeeded"}),e.addCase(xc.rejected,n=>{n.status="rejected"}),e.addCase(Dd,Zv),e.addCase(u2,$v),e.addCase(Rs,e2),e.addCase(dl,t2),e.addCase(rh,n2),e.addCase(ah,r2),e.addCase(d2,a2),e.addCase(Ii,s2),e.addCase(x8,i2),e.addCase(p8,l2),e.addCase(m8,o2),e.addCase(g8,c2),e.addCase(h2,f2)}}),b8=m2.reducer,{addActiveRequest:S8,removeActiveRequest:_8,setActiveTabId:C8,setActiveTree:g2,setCurrentRequest:A9,setCurrentResponse:E8,setActiveRequestScript:w8,setCollectionScript:A8,setCollectionInfo:T9,setCollectionAuth:qm,addVariable:T8,removeVariable:k8,updateVariable:D8,setVariables:B8,addBaseUrl:F8,removeBaseUrl:k9,clearDirtyRequestIds:D9,saveActiveToData:R8,setAuthType:N8,setScriptResult:Vm,saveExampleResponse:O8,addExampleResponse:M8,removeExampleResponse:L8,setActiveExampleId:pc,updateExampleResponseBody:j8,updateExampleResponseStatus:I8,renameExampleResponse:H8,updateExampleResponseHeader:B9,createNewRequest:F9,deleteRequest:z8,deleteFolder:U8}=m2.actions,W8=S8,ih=e=>e.collection?.variable??[],v2=e=>e.collection?.data?.auth??{type:"string"},P8=e=>e.collection?.data?.info??null,y2=e=>e.collection?.data??null,X8=e=>e.collection?.baseUrl??[],G8=e=>X8(e).map(n=>nE(n.value)).filter(Boolean),hl=e=>e.collection?.activeTabId??"",q8=e=>oh(e,e.collection?.activeTabId),b2=e=>(lh(e)?.event?.[0]?.script?.exec??[]).join(`
`),S2=e=>e.collection?.data?.event?.find(r=>r.listen==="prerequest")?.script?.exec?.join(`
`)??"",V8=e=>e.collection?.openRequestTabs??[],lh=e=>{const n=ss(e);return n?E2(e,n):null},K8=(e,n)=>{const r=oh(e,n);return r?E2(e,r):null},Y8=e=>ss(e)?.response??null,_2=e=>e.collection?.dirtyRequestIds??[],J8=e=>{const n=ss(e);return n?.authType?n.authType:lh(e)?.request?.header?.find(i=>i.key==="Authorization")?e.collection?.data?.auth?"inherit":"bearer":"none"},Q8=e=>ss(e)?.scriptResult??null,Z8=e=>ss(e)?.scriptLogs??[],$8=e=>ss(e)?.scriptMutations??[],eE=e=>e.collection?.dirTree?e.collection.dirTree:new Map,Wc=e=>ss(e)?.activeExampleId??null,C2=e=>{const n=ss(e);return!n?.activeExampleId||!n.exampleResponse?null:n.exampleResponse.find(r=>r.id===n.activeExampleId)??null},E2=(e,n)=>{const r=e.collection?.data?.item?$0(n.id,e.collection.data.item):null;let s=n.request??r?.request;if(n.activeExampleId&&n.exampleResponse){const i=n.exampleResponse.find(c=>c.id===n.activeExampleId);i?.originalRequest&&(s=i.originalRequest)}return r?{...r,request:s??r.request,response:n.exampleResponse??r.response}:{id:n.id,name:"",request:s??void 0,response:n.exampleResponse}},$0=(e,n)=>{for(const r of n){if(r.id===e)return r;if(r.item){const s=$0(e,r.item);if(s)return s}}return null},w2=(e,n,r)=>{const s=r.get(e);s&&(s.isActive=n),r.forEach(i=>{i.item&&w2(e,n,i.item)})},Mi=(e,n)=>e.length?n?e.findIndex(r=>r.id===n):e.length-1:-1,ss=e=>{if(e.collection?.activeTabId)return oh(e,e.collection.activeTabId);const n=e.collection?.openRequestTabs??[];return n.length>0?n[n.length-1]:null},oh=(e,n)=>(e.collection?.openRequestTabs??[]).find(s=>s.id===n)??null,tE=e=>e.key.toLowerCase().includes("base_url")||e.category?.toUpperCase()==="BASE_URL",nE=e=>e===p2||!e.trim()?typeof window<"u"?window.location.origin:"":e,Li=e=>{e.data&&(e.data.variable=[...e.baseUrl,...e.variable])},rE=e=>Array.from(ch(e),([n,r])=>({value:r})).map(n=>({id:n.value.id,name:n.value.name,isActive:!1,category:n.value.category,method:n.value.method??"GET"})),ch=e=>{let n=new Map;for(const r of e){if(HC(r.item)){let i=r.request?"REQ":"FOLD";n.set(r.id,{id:r.id,name:r.name,isActive:!1,category:i,method:r.request?.method??"GET"});continue}let s={id:r.id,name:r.name,isActive:!1,item:ch(r.item),category:"FOLD"};n.set(r.id,s)}return n},Bd=(e,n)=>{const r=e.findIndex(s=>s.id===n);if(r>=0)return e.splice(r,1),!0;for(const s of e)if(s.item&&Bd(s.item,n))return!0;return!1},Fd=(e,n)=>{if(e.has(n))return e.delete(n),!0;for(const[,r]of e)if(r.item&&Fd(r.item,n))return!0;return!1},A2=(e,n)=>{if(e.has(n))return e.get(n);for(const[,r]of e)if(r.item){const s=A2(r.item,n);if(s)return s}},T2=e=>{if(e.category==="REQ")return[e.id];if(!e.item)return[];const n=[];for(const[,r]of e.item)n.push(...T2(r));return n};function k2({...e}){return g.jsx(pv,{"data-slot":"dialog",...e})}function aE({...e}){return g.jsx(bv,{"data-slot":"dialog-portal",...e})}function sE({className:e,...n}){return g.jsx(Sv,{"data-slot":"dialog-overlay",className:Re("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",e),...n})}function D2({className:e,children:n,showCloseButton:r=!0,...s}){return g.jsxs(aE,{"data-slot":"dialog-portal",children:[g.jsx(sE,{}),g.jsxs(mv,{"data-slot":"dialog-content",className:Re("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",e),...s,children:[n,r&&g.jsxs(gv,{"data-slot":"dialog-close",className:"ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",children:[g.jsx(ma,{}),g.jsx("span",{className:"sr-only",children:"Close"})]})]})]})}function B2({className:e,...n}){return g.jsx("div",{"data-slot":"dialog-header",className:Re("flex flex-col gap-2 text-center sm:text-left",e),...n})}function iE({className:e,...n}){return g.jsx("div",{"data-slot":"dialog-footer",className:Re("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",e),...n})}function F2({className:e,...n}){return g.jsx(vv,{"data-slot":"dialog-title",className:Re("text-lg leading-none font-semibold",e),...n})}function R2({className:e,...n}){return g.jsx(yv,{"data-slot":"dialog-description",className:Re("text-muted-foreground text-sm",e),...n})}const lE=({onClose:e,icon:n,onSubmit:r,open:s,title:i,labelYes:c="Confirm delete",labelNo:f="No, cancel"})=>{const[u,h]=te.useState(!1),x=async()=>{try{h(!0),await r(),e()}finally{h(!1)}};return g.jsx(k2,{open:s,onOpenChange:m=>{m||e()},children:g.jsxs(D2,{className:"w-[400px] gap-4",onInteractOutside:m=>m.preventDefault(),onEscapeKeyDown:m=>m.preventDefault(),"aria-describedby":"",children:[g.jsxs(B2,{className:"flex flex-col items-center",children:[g.jsx(F2,{children:n}),g.jsx(R2,{className:"text-center text-base font-normal text-gray-500 whitespace-pre-line",children:i})]}),g.jsxs("div",{className:"flex flex-row gap-4 justify-center",children:[g.jsx(Ve,{className:"h-[37px] cursor-pointer rounded-[8px] text-sm font-medium text-white bg-red-700 hover:bg-red-800",disabled:u,onClick:x,children:c}),g.jsx(Ve,{type:"button",variant:"outline",className:"h-[37px] cursor-pointer text-sm font-medium text-gray-800",onClick:e,children:f})]})]})})},oE={GET:"text-emerald-600",POST:"text-amber-600",PUT:"text-blue-600",PATCH:"text-violet-600",DELETE:"text-red-600"},N2=(e,n)=>e.category==="REQ"?n.includes(e.id):e?.item?Array.from(e.item.values()).some(r=>N2(r,n)):!1,cE=()=>{const e=$e(eE),n=cn(),r=$e(_2),[s,i]=te.useState({}),[c,f]=te.useState(""),u=te.useRef({}),[h,x]=te.useState(null),m=k=>{let w=0;for(const[,H]of k)H.category==="FOLD"&&w++,H.item&&(w+=m(H.item));return w},v=(k,w)=>{if(!w)return!0;const H=w.toLowerCase();return k.name.toLowerCase().includes(H)?!0:k.category==="FOLD"&&k.item?Array.from(k.item.values()).some(V=>v(V,H)):!1};te.useEffect(()=>{if(c){u.current={...s};const k={},w=H=>{for(const[,V]of H)V.category==="FOLD"&&v(V,c)&&(k[V.id]=!0,V.item&&w(V.item))};w(e),i(k)}else Object.keys(u.current).length>0&&(i(u.current),u.current={})},[c]);const y=k=>{n(W8({id:k})),n(g2({id:k,status:!0}))},_=k=>{i((w=>({...w,[k]:!w[k]})))},E=(k,w)=>{k.stopPropagation(),x(w)},b=async()=>{h&&(h.category==="REQ"?n(z8({id:h.id})):n(U8({id:h.id})),x(null))};te.useEffect(()=>{C(e,{})},[e]);const C=(k,w)=>{for(const[H,V]of k)V?.category==="FOLD"&&(w[H]=!1,V?.item&&C(V.item,w))},D=(k,w=0)=>{if(c&&!v(k,c))return null;const H={paddingLeft:`${w*14}px`};if(k.category==="FOLD"){const V=!!s[k.id];return g.jsxs("div",{className:"space-y-1",children:[g.jsxs("div",{className:"group flex items-center",style:H,children:[g.jsxs("button",{type:"button",onClick:()=>_(k.id),className:"flex min-w-0 flex-1 items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm font-medium text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-sidebar-accent",children:[V?g.jsx(Lc,{className:"h-4 w-4 text-muted-foreground"}):g.jsx(k3,{className:"h-4 w-4 text-muted-foreground"}),V?g.jsx(D3,{className:"h-4 w-4 text-indigo-500"}):g.jsx(B3,{className:"h-4 w-4 text-indigo-500"}),g.jsx("span",{className:"truncate",children:k.name}),N2(k,r)&&g.jsx("span",{className:"ml-auto h-2 w-2 rounded-full bg-orange-400 shrink-0"})]}),g.jsx("button",{type:"button",onClick:z=>E(z,k),className:"hidden group-hover:flex shrink-0 p-1 rounded text-muted-foreground hover:text-destructive hover:bg-destructive/10",children:g.jsx(ga,{className:"h-3.5 w-3.5"})})]}),V&&k?.item&&g.jsx("div",{className:"space-y-1",children:Array.from(k?.item?.entries()).map(([z,R])=>D(R,w+1))})]},k.id)}return g.jsxs("div",{className:"flex items-center group",style:H,children:[g.jsxs("button",{type:"button",onClick:()=>y(k.id),className:Re("flex min-w-0 flex-1 items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm hover:bg-sidebar-accent text-sidebar-foreground/80 hover:text-sidebar-foreground",k.isActive&&"bg-indigo-100 text-indigo-900 font-medium dark:bg-indigo-950/60 dark:text-indigo-300"),children:[g.jsx(F3,{className:"h-4 w-4 text-muted-foreground"}),g.jsx("span",{className:`w-12 text-xs font-semibold ${oE[k?.method??"GET"]}`,children:k?.method??"GET"}),g.jsx("span",{className:"truncate",children:k.name}),r.includes(k.id)&&g.jsx("span",{className:"ml-auto h-2 w-2 rounded-full bg-orange-400 shrink-0"})]}),g.jsx("button",{type:"button",onClick:V=>E(V,k),className:"hidden group-hover:flex shrink-0 p-1 rounded text-muted-foreground hover:text-destructive hover:bg-destructive/10",children:g.jsx(ga,{className:"h-3.5 w-3.5"})})]},k.id)};return g.jsxs(a8,{className:"fixed left-0 top-[60px] z-30 h-[calc(100dvh-60px)] w-64 flex-col border-r border-border bg-sidebar",collapsible:"none",children:[g.jsxs(s8,{className:"flex flex-col overflow-y-auto px-3 py-2 bg-sidebar",children:[g.jsx("div",{className:"px-3 pb-2",children:g.jsxs("div",{className:"relative",children:[g.jsx(Gd,{className:"w-3.5 h-3.5 absolute left-3 top-2.5 text-muted-foreground"}),g.jsx("input",{type:"text",placeholder:"Search collections",value:c,onChange:k=>f(k.target.value),className:"w-full bg-muted/40 border border-border text-foreground placeholder:text-muted-foreground text-xs pl-8 pr-3 py-1.5 rounded focus:outline-none focus:ring-1 focus:ring-ring transition"})]})}),g.jsxs("div",{className:"mb-2 px-2 flex items-center space-x-1.5",children:[g.jsx(T3,{className:"w-4 h-4 text-indigo-600"}),g.jsxs("p",{className:"text-xs font-semibold uppercase tracking-wide text-muted-foreground",children:["Collections (",m(e),")"]})]}),g.jsx("div",{className:"",children:Array.from(e.entries()).map(([k,w])=>D(w))})]}),g.jsx(lE,{open:h!==null,onClose:()=>x(null),title:`Are you sure you want to delete "${h?.name??""}"?`,icon:g.jsx(ga,{className:"h-10 w-10 text-red-500"}),onSubmit:b,labelYes:"Delete"})]})},fE="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cpolygon%20id='thunder-a'%20points='2.977%208.161%208.269%209.241%20.218%2018.519%201.882%2019.604%2012.128%208.161%205.893%206.809%208.821%20.998%207.387%20.185'/%3e%3cpath%20id='thunder-c'%20d='M10.2577032,5.88540233%20L13.3683613,6.4682972%20C14.894984,6.75436548%2015.5271239,8.59550311%2014.4981974,9.75899885%20L5.15432684,20.3249168%20C3.62851509,22.0502834%200.875362777,20.253925%201.83997631,18.1623916%20L4.9166534,11.4913543%20L2.63023839,11.061225%20C1.27422934,10.8061273%200.577759703,9.28698125%201.26946216,8.09308716%20L5.3804761,0.997384038%20C5.7381351,0.380056504%206.3975623,0%207.11101395,0%20L10.1949866,0%20C11.7353835,0%2012.697534,1.66821829%2011.9261411,3.00155082%20L10.2577032,5.88540233%20Z%20M10.1949866,2%20L7.11101395,2%20L3,9.09570312%20L7.80692226,10%20L3.65612945,19%20L13,8.43408203%20L7.11101395,7.33056641%20L10.1949866,2%20Z'/%3e%3c/defs%3e%3cg%20fill='none'%20fill-rule='evenodd'%20transform='translate(4%202)'%3e%3cg%20transform='translate(2)'%3e%3cmask%20id='thunder-b'%20fill='%23ffffff'%3e%3cuse%20xlink:href='%23thunder-a'/%3e%3c/mask%3e%3cuse%20fill='%23D8D8D8'%20xlink:href='%23thunder-a'/%3e%3cg%20fill='%23FFA0A0'%20mask='url(%23thunder-b)'%3e%3crect%20width='24'%20height='24'%20transform='translate(-6%20-2)'/%3e%3c/g%3e%3c/g%3e%3cmask%20id='thunder-d'%20fill='%23ffffff'%3e%3cuse%20xlink:href='%23thunder-c'/%3e%3c/mask%3e%3cuse%20fill='%23000000'%20fill-rule='nonzero'%20xlink:href='%23thunder-c'/%3e%3cg%20fill='%237600FF'%20mask='url(%23thunder-d)'%3e%3crect%20width='24'%20height='24'%20transform='translate(-4%20-2)'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",uE={APP_LOGO:fE},dE="test-",Km=e=>e.startsWith(dE);function Ms({...e}){return g.jsx(qS,{"data-slot":"select",...e})}function Ym({...e}){return g.jsx(n3,{"data-slot":"select-group",...e})}function Ls({...e}){return g.jsx(YS,{"data-slot":"select-value",...e})}function js({className:e,size:n="default",children:r,...s}){return g.jsxs(VS,{"data-slot":"select-trigger","data-size":n,className:Re("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",e),...s,children:[r,g.jsx(KS,{asChild:!0,children:g.jsx(Lc,{className:"size-4 opacity-50 text-gray"})})]})}function Is({className:e,children:n,position:r="popper",...s}){return g.jsx(JS,{children:g.jsxs(QS,{"data-slot":"select-content",className:Re("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",r==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",e),position:r,...s,children:[g.jsx(hE,{}),g.jsx(ZS,{className:Re("p-1",r==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),children:n}),g.jsx(xE,{})]})})}function Jm({className:e,...n}){return g.jsx(r3,{"data-slot":"select-label",className:Re("text-muted-foreground px-2 py-1.5 text-xs",e),...n})}function bn({className:e,children:n,...r}){return g.jsxs($S,{"data-slot":"select-item",className:Re("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",e),...r,children:[g.jsx("span",{className:"absolute right-2 flex size-3.5 items-center justify-center",children:g.jsx(e3,{children:g.jsx(qd,{className:"size-4"})})}),g.jsx(t3,{children:n})]})}function hE({className:e,...n}){return g.jsx(a3,{"data-slot":"select-scroll-up-button",className:Re("flex cursor-default items-center justify-center py-1",e),...n,children:g.jsx(R3,{className:"size-4"})})}function xE({className:e,...n}){return g.jsx(s3,{"data-slot":"select-scroll-down-button",className:Re("flex cursor-default items-center justify-center py-1",e),...n,children:g.jsx(Lc,{className:"size-4"})})}const pE=`;(function (root, factory) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory();
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define([], factory);
	}
	else {
		// Global (browser)
		root.CryptoJS = factory();
	}
}(this, function () {

	/*globals window, global, require*/

	/**
	 * CryptoJS core components.
	 */
	var CryptoJS = CryptoJS || (function (Math, undefined) {

	    var crypto;

	    // Native crypto from window (Browser)
	    if (typeof window !== 'undefined' && window.crypto) {
	        crypto = window.crypto;
	    }

	    // Native crypto in web worker (Browser)
	    if (typeof self !== 'undefined' && self.crypto) {
	        crypto = self.crypto;
	    }

	    // Native crypto from worker
	    if (typeof globalThis !== 'undefined' && globalThis.crypto) {
	        crypto = globalThis.crypto;
	    }

	    // Native (experimental IE 11) crypto from window (Browser)
	    if (!crypto && typeof window !== 'undefined' && window.msCrypto) {
	        crypto = window.msCrypto;
	    }

	    // Native crypto from global (NodeJS)
	    if (!crypto && typeof global !== 'undefined' && global.crypto) {
	        crypto = global.crypto;
	    }

	    // Native crypto import via require (NodeJS)
	    if (!crypto && typeof require === 'function') {
	        try {
	            crypto = require('crypto');
	        } catch (err) {}
	    }

	    /*
	     * Cryptographically secure pseudorandom number generator
	     *
	     * As Math.random() is cryptographically not safe to use
	     */
	    var cryptoSecureRandomInt = function () {
	        if (crypto) {
	            // Use getRandomValues method (Browser)
	            if (typeof crypto.getRandomValues === 'function') {
	                try {
	                    return crypto.getRandomValues(new Uint32Array(1))[0];
	                } catch (err) {}
	            }

	            // Use randomBytes method (NodeJS)
	            if (typeof crypto.randomBytes === 'function') {
	                try {
	                    return crypto.randomBytes(4).readInt32LE();
	                } catch (err) {}
	            }
	        }

	        throw new Error('Native crypto module could not be used to get secure random number.');
	    };

	    /*
	     * Local polyfill of Object.create

	     */
	    var create = Object.create || (function () {
	        function F() {}

	        return function (obj) {
	            var subtype;

	            F.prototype = obj;

	            subtype = new F();

	            F.prototype = null;

	            return subtype;
	        };
	    }());

	    /**
	     * CryptoJS namespace.
	     */
	    var C = {};

	    /**
	     * Library namespace.
	     */
	    var C_lib = C.lib = {};

	    /**
	     * Base object for prototypal inheritance.
	     */
	    var Base = C_lib.Base = (function () {


	        return {
	            /**
	             * Creates a new object that inherits from this object.
	             *
	             * @param {Object} overrides Properties to copy into the new object.
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         field: 'value',
	             *
	             *         method: function () {
	             *         }
	             *     });
	             */
	            extend: function (overrides) {
	                // Spawn
	                var subtype = create(this);

	                // Augment
	                if (overrides) {
	                    subtype.mixIn(overrides);
	                }

	                // Create default initializer
	                if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
	                    subtype.init = function () {
	                        subtype.$super.init.apply(this, arguments);
	                    };
	                }

	                // Initializer's prototype is the subtype object
	                subtype.init.prototype = subtype;

	                // Reference supertype
	                subtype.$super = this;

	                return subtype;
	            },

	            /**
	             * Extends this object and runs the init method.
	             * Arguments to create() will be passed to init().
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var instance = MyType.create();
	             */
	            create: function () {
	                var instance = this.extend();
	                instance.init.apply(instance, arguments);

	                return instance;
	            },

	            /**
	             * Initializes a newly created object.
	             * Override this method to add some logic when your objects are created.
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         init: function () {
	             *             // ...
	             *         }
	             *     });
	             */
	            init: function () {
	            },

	            /**
	             * Copies properties into this object.
	             *
	             * @param {Object} properties The properties to mix in.
	             *
	             * @example
	             *
	             *     MyType.mixIn({
	             *         field: 'value'
	             *     });
	             */
	            mixIn: function (properties) {
	                for (var propertyName in properties) {
	                    if (properties.hasOwnProperty(propertyName)) {
	                        this[propertyName] = properties[propertyName];
	                    }
	                }

	                // IE won't copy toString using the loop above
	                if (properties.hasOwnProperty('toString')) {
	                    this.toString = properties.toString;
	                }
	            },

	            /**
	             * Creates a copy of this object.
	             *
	             * @return {Object} The clone.
	             *
	             * @example
	             *
	             *     var clone = instance.clone();
	             */
	            clone: function () {
	                return this.init.prototype.extend(this);
	            }
	        };
	    }());

	    /**
	     * An array of 32-bit words.
	     *
	     * @property {Array} words The array of 32-bit words.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */
	    var WordArray = C_lib.WordArray = Base.extend({
	        /**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of 32-bit words.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.create();
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
	         */
	        init: function (words, sigBytes) {
	            words = this.words = words || [];

	            if (sigBytes != undefined) {
	                this.sigBytes = sigBytes;
	            } else {
	                this.sigBytes = words.length * 4;
	            }
	        },

	        /**
	         * Converts this word array to a string.
	         *
	         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
	         *
	         * @return {string} The stringified word array.
	         *
	         * @example
	         *
	         *     var string = wordArray + '';
	         *     var string = wordArray.toString();
	         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
	         */
	        toString: function (encoder) {
	            return (encoder || Hex).stringify(this);
	        },

	        /**
	         * Concatenates a word array to this word array.
	         *
	         * @param {WordArray} wordArray The word array to append.
	         *
	         * @return {WordArray} This word array.
	         *
	         * @example
	         *
	         *     wordArray1.concat(wordArray2);
	         */
	        concat: function (wordArray) {
	            // Shortcuts
	            var thisWords = this.words;
	            var thatWords = wordArray.words;
	            var thisSigBytes = this.sigBytes;
	            var thatSigBytes = wordArray.sigBytes;

	            // Clamp excess bits
	            this.clamp();

	            // Concat
	            if (thisSigBytes % 4) {
	                // Copy one byte at a time
	                for (var i = 0; i < thatSigBytes; i++) {
	                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
	                }
	            } else {
	                // Copy one word at a time
	                for (var j = 0; j < thatSigBytes; j += 4) {
	                    thisWords[(thisSigBytes + j) >>> 2] = thatWords[j >>> 2];
	                }
	            }
	            this.sigBytes += thatSigBytes;

	            // Chainable
	            return this;
	        },

	        /**
	         * Removes insignificant bits.
	         *
	         * @example
	         *
	         *     wordArray.clamp();
	         */
	        clamp: function () {
	            // Shortcuts
	            var words = this.words;
	            var sigBytes = this.sigBytes;

	            // Clamp
	            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
	            words.length = Math.ceil(sigBytes / 4);
	        },

	        /**
	         * Creates a copy of this word array.
	         *
	         * @return {WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = wordArray.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone.words = this.words.slice(0);

	            return clone;
	        },

	        /**
	         * Creates a word array filled with random bytes.
	         *
	         * @param {number} nBytes The number of random bytes to generate.
	         *
	         * @return {WordArray} The random word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.random(16);
	         */
	        random: function (nBytes) {
	            var words = [];

	            for (var i = 0; i < nBytes; i += 4) {
	                words.push(cryptoSecureRandomInt());
	            }

	            return new WordArray.init(words, nBytes);
	        }
	    });

	    /**
	     * Encoder namespace.
	     */
	    var C_enc = C.enc = {};

	    /**
	     * Hex encoding strategy.
	     */
	    var Hex = C_enc.Hex = {
	        /**
	         * Converts a word array to a hex string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The hex string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var hexChars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                hexChars.push((bite >>> 4).toString(16));
	                hexChars.push((bite & 0x0f).toString(16));
	            }

	            return hexChars.join('');
	        },

	        /**
	         * Converts a hex string to a word array.
	         *
	         * @param {string} hexStr The hex string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
	         */
	        parse: function (hexStr) {
	            // Shortcut
	            var hexStrLength = hexStr.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < hexStrLength; i += 2) {
	                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
	            }

	            return new WordArray.init(words, hexStrLength / 2);
	        }
	    };

	    /**
	     * Latin1 encoding strategy.
	     */
	    var Latin1 = C_enc.Latin1 = {
	        /**
	         * Converts a word array to a Latin1 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Latin1 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var latin1Chars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                latin1Chars.push(String.fromCharCode(bite));
	            }

	            return latin1Chars.join('');
	        },

	        /**
	         * Converts a Latin1 string to a word array.
	         *
	         * @param {string} latin1Str The Latin1 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
	         */
	        parse: function (latin1Str) {
	            // Shortcut
	            var latin1StrLength = latin1Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < latin1StrLength; i++) {
	                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
	            }

	            return new WordArray.init(words, latin1StrLength);
	        }
	    };

	    /**
	     * UTF-8 encoding strategy.
	     */
	    var Utf8 = C_enc.Utf8 = {
	        /**
	         * Converts a word array to a UTF-8 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-8 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            try {
	                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
	            } catch (e) {
	                throw new Error('Malformed UTF-8 data');
	            }
	        },

	        /**
	         * Converts a UTF-8 string to a word array.
	         *
	         * @param {string} utf8Str The UTF-8 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
	         */
	        parse: function (utf8Str) {
	            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
	        }
	    };

	    /**
	     * Abstract buffered block algorithm template.
	     *
	     * The property blockSize must be implemented in a concrete subtype.
	     *
	     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
	     */
	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
	        /**
	         * Resets this block algorithm's data buffer to its initial state.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm.reset();
	         */
	        reset: function () {
	            // Initial values
	            this._data = new WordArray.init();
	            this._nDataBytes = 0;
	        },

	        /**
	         * Adds new data to this block algorithm's buffer.
	         *
	         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm._append('data');
	         *     bufferedBlockAlgorithm._append(wordArray);
	         */
	        _append: function (data) {
	            // Convert string to WordArray, else assume WordArray already
	            if (typeof data == 'string') {
	                data = Utf8.parse(data);
	            }

	            // Append
	            this._data.concat(data);
	            this._nDataBytes += data.sigBytes;
	        },

	        /**
	         * Processes available data blocks.
	         *
	         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
	         *
	         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
	         *
	         * @return {WordArray} The processed data.
	         *
	         * @example
	         *
	         *     var processedData = bufferedBlockAlgorithm._process();
	         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
	         */
	        _process: function (doFlush) {
	            var processedWords;

	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	            var dataSigBytes = data.sigBytes;
	            var blockSize = this.blockSize;
	            var blockSizeBytes = blockSize * 4;

	            // Count blocks ready
	            var nBlocksReady = dataSigBytes / blockSizeBytes;
	            if (doFlush) {
	                // Round up to include partial blocks
	                nBlocksReady = Math.ceil(nBlocksReady);
	            } else {
	                // Round down to include only full blocks,
	                // less the number of blocks that must remain in the buffer
	                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
	            }

	            // Count words ready
	            var nWordsReady = nBlocksReady * blockSize;

	            // Count bytes ready
	            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

	            // Process blocks
	            if (nWordsReady) {
	                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
	                    // Perform concrete-algorithm logic
	                    this._doProcessBlock(dataWords, offset);
	                }

	                // Remove processed words
	                processedWords = dataWords.splice(0, nWordsReady);
	                data.sigBytes -= nBytesReady;
	            }

	            // Return processed words
	            return new WordArray.init(processedWords, nBytesReady);
	        },

	        /**
	         * Creates a copy of this object.
	         *
	         * @return {Object} The clone.
	         *
	         * @example
	         *
	         *     var clone = bufferedBlockAlgorithm.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone._data = this._data.clone();

	            return clone;
	        },

	        _minBufferSize: 0
	    });

	    /**
	     * Abstract hasher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
	     */
	    var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
	        /**
	         * Configuration options.
	         */
	        cfg: Base.extend(),

	        /**
	         * Initializes a newly created hasher.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
	         *
	         * @example
	         *
	         *     var hasher = CryptoJS.algo.SHA256.create();
	         */
	        init: function (cfg) {
	            // Apply config defaults
	            this.cfg = this.cfg.extend(cfg);

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this hasher to its initial state.
	         *
	         * @example
	         *
	         *     hasher.reset();
	         */
	        reset: function () {
	            // Reset data buffer
	            BufferedBlockAlgorithm.reset.call(this);

	            // Perform concrete-hasher logic
	            this._doReset();
	        },

	        /**
	         * Updates this hasher with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {Hasher} This hasher.
	         *
	         * @example
	         *
	         *     hasher.update('message');
	         *     hasher.update(wordArray);
	         */
	        update: function (messageUpdate) {
	            // Append
	            this._append(messageUpdate);

	            // Update the hash
	            this._process();

	            // Chainable
	            return this;
	        },

	        /**
	         * Finalizes the hash computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The hash.
	         *
	         * @example
	         *
	         *     var hash = hasher.finalize();
	         *     var hash = hasher.finalize('message');
	         *     var hash = hasher.finalize(wordArray);
	         */
	        finalize: function (messageUpdate) {
	            // Final message update
	            if (messageUpdate) {
	                this._append(messageUpdate);
	            }

	            // Perform concrete-hasher logic
	            var hash = this._doFinalize();

	            return hash;
	        },

	        blockSize: 512/32,

	        /**
	         * Creates a shortcut function to a hasher's object interface.
	         *
	         * @param {Hasher} hasher The hasher to create a helper for.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
	         */
	        _createHelper: function (hasher) {
	            return function (message, cfg) {
	                return new hasher.init(cfg).finalize(message);
	            };
	        },

	        /**
	         * Creates a shortcut function to the HMAC's object interface.
	         *
	         * @param {Hasher} hasher The hasher to use in this HMAC helper.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
	         */
	        _createHmacHelper: function (hasher) {
	            return function (message, key) {
	                return new C_algo.HMAC.init(hasher, key).finalize(message);
	            };
	        }
	    });

	    /**
	     * Algorithm namespace.
	     */
	    var C_algo = C.algo = {};

	    return C;
	}(Math));


	(function (undefined) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var X32WordArray = C_lib.WordArray;

	    /**
	     * x64 namespace.
	     */
	    var C_x64 = C.x64 = {};

	    /**
	     * A 64-bit word.
	     */
	    var X64Word = C_x64.Word = Base.extend({
	        /**
	         * Initializes a newly created 64-bit word.
	         *
	         * @param {number} high The high 32 bits.
	         * @param {number} low The low 32 bits.
	         *
	         * @example
	         *
	         *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
	         */
	        init: function (high, low) {
	            this.high = high;
	            this.low = low;
	        }

	        /**
	         * Bitwise NOTs this word.
	         *
	         * @return {X64Word} A new x64-Word object after negating.
	         *
	         * @example
	         *
	         *     var negated = x64Word.not();
	         */
	        // not: function () {
	            // var high = ~this.high;
	            // var low = ~this.low;

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Bitwise ANDs this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to AND with this word.
	         *
	         * @return {X64Word} A new x64-Word object after ANDing.
	         *
	         * @example
	         *
	         *     var anded = x64Word.and(anotherX64Word);
	         */
	        // and: function (word) {
	            // var high = this.high & word.high;
	            // var low = this.low & word.low;

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Bitwise ORs this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to OR with this word.
	         *
	         * @return {X64Word} A new x64-Word object after ORing.
	         *
	         * @example
	         *
	         *     var ored = x64Word.or(anotherX64Word);
	         */
	        // or: function (word) {
	            // var high = this.high | word.high;
	            // var low = this.low | word.low;

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Bitwise XORs this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to XOR with this word.
	         *
	         * @return {X64Word} A new x64-Word object after XORing.
	         *
	         * @example
	         *
	         *     var xored = x64Word.xor(anotherX64Word);
	         */
	        // xor: function (word) {
	            // var high = this.high ^ word.high;
	            // var low = this.low ^ word.low;

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Shifts this word n bits to the left.
	         *
	         * @param {number} n The number of bits to shift.
	         *
	         * @return {X64Word} A new x64-Word object after shifting.
	         *
	         * @example
	         *
	         *     var shifted = x64Word.shiftL(25);
	         */
	        // shiftL: function (n) {
	            // if (n < 32) {
	                // var high = (this.high << n) | (this.low >>> (32 - n));
	                // var low = this.low << n;
	            // } else {
	                // var high = this.low << (n - 32);
	                // var low = 0;
	            // }

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Shifts this word n bits to the right.
	         *
	         * @param {number} n The number of bits to shift.
	         *
	         * @return {X64Word} A new x64-Word object after shifting.
	         *
	         * @example
	         *
	         *     var shifted = x64Word.shiftR(7);
	         */
	        // shiftR: function (n) {
	            // if (n < 32) {
	                // var low = (this.low >>> n) | (this.high << (32 - n));
	                // var high = this.high >>> n;
	            // } else {
	                // var low = this.high >>> (n - 32);
	                // var high = 0;
	            // }

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Rotates this word n bits to the left.
	         *
	         * @param {number} n The number of bits to rotate.
	         *
	         * @return {X64Word} A new x64-Word object after rotating.
	         *
	         * @example
	         *
	         *     var rotated = x64Word.rotL(25);
	         */
	        // rotL: function (n) {
	            // return this.shiftL(n).or(this.shiftR(64 - n));
	        // },

	        /**
	         * Rotates this word n bits to the right.
	         *
	         * @param {number} n The number of bits to rotate.
	         *
	         * @return {X64Word} A new x64-Word object after rotating.
	         *
	         * @example
	         *
	         *     var rotated = x64Word.rotR(7);
	         */
	        // rotR: function (n) {
	            // return this.shiftR(n).or(this.shiftL(64 - n));
	        // },

	        /**
	         * Adds this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to add with this word.
	         *
	         * @return {X64Word} A new x64-Word object after adding.
	         *
	         * @example
	         *
	         *     var added = x64Word.add(anotherX64Word);
	         */
	        // add: function (word) {
	            // var low = (this.low + word.low) | 0;
	            // var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
	            // var high = (this.high + word.high + carry) | 0;

	            // return X64Word.create(high, low);
	        // }
	    });

	    /**
	     * An array of 64-bit words.
	     *
	     * @property {Array} words The array of CryptoJS.x64.Word objects.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */
	    var X64WordArray = C_x64.WordArray = Base.extend({
	        /**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.x64.WordArray.create();
	         *
	         *     var wordArray = CryptoJS.x64.WordArray.create([
	         *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
	         *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
	         *     ]);
	         *
	         *     var wordArray = CryptoJS.x64.WordArray.create([
	         *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
	         *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
	         *     ], 10);
	         */
	        init: function (words, sigBytes) {
	            words = this.words = words || [];

	            if (sigBytes != undefined) {
	                this.sigBytes = sigBytes;
	            } else {
	                this.sigBytes = words.length * 8;
	            }
	        },

	        /**
	         * Converts this 64-bit word array to a 32-bit word array.
	         *
	         * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
	         *
	         * @example
	         *
	         *     var x32WordArray = x64WordArray.toX32();
	         */
	        toX32: function () {
	            // Shortcuts
	            var x64Words = this.words;
	            var x64WordsLength = x64Words.length;

	            // Convert
	            var x32Words = [];
	            for (var i = 0; i < x64WordsLength; i++) {
	                var x64Word = x64Words[i];
	                x32Words.push(x64Word.high);
	                x32Words.push(x64Word.low);
	            }

	            return X32WordArray.create(x32Words, this.sigBytes);
	        },

	        /**
	         * Creates a copy of this word array.
	         *
	         * @return {X64WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = x64WordArray.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);

	            // Clone "words" array
	            var words = clone.words = this.words.slice(0);

	            // Clone each X64Word object
	            var wordsLength = words.length;
	            for (var i = 0; i < wordsLength; i++) {
	                words[i] = words[i].clone();
	            }

	            return clone;
	        }
	    });
	}());


	(function () {
	    // Check if typed arrays are supported
	    if (typeof ArrayBuffer != 'function') {
	        return;
	    }

	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;

	    // Reference original init
	    var superInit = WordArray.init;

	    // Augment WordArray.init to handle typed arrays
	    var subInit = WordArray.init = function (typedArray) {
	        // Convert buffers to uint8
	        if (typedArray instanceof ArrayBuffer) {
	            typedArray = new Uint8Array(typedArray);
	        }

	        // Convert other array views to uint8
	        if (
	            typedArray instanceof Int8Array ||
	            (typeof Uint8ClampedArray !== "undefined" && typedArray instanceof Uint8ClampedArray) ||
	            typedArray instanceof Int16Array ||
	            typedArray instanceof Uint16Array ||
	            typedArray instanceof Int32Array ||
	            typedArray instanceof Uint32Array ||
	            typedArray instanceof Float32Array ||
	            typedArray instanceof Float64Array
	        ) {
	            typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
	        }

	        // Handle Uint8Array
	        if (typedArray instanceof Uint8Array) {
	            // Shortcut
	            var typedArrayByteLength = typedArray.byteLength;

	            // Extract bytes
	            var words = [];
	            for (var i = 0; i < typedArrayByteLength; i++) {
	                words[i >>> 2] |= typedArray[i] << (24 - (i % 4) * 8);
	            }

	            // Initialize this word array
	            superInit.call(this, words, typedArrayByteLength);
	        } else {
	            // Else call normal init
	            superInit.apply(this, arguments);
	        }
	    };

	    subInit.prototype = WordArray;
	}());


	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var C_enc = C.enc;

	    /**
	     * UTF-16 BE encoding strategy.
	     */
	    var Utf16BE = C_enc.Utf16 = C_enc.Utf16BE = {
	        /**
	         * Converts a word array to a UTF-16 BE string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-16 BE string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var utf16Chars = [];
	            for (var i = 0; i < sigBytes; i += 2) {
	                var codePoint = (words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff;
	                utf16Chars.push(String.fromCharCode(codePoint));
	            }

	            return utf16Chars.join('');
	        },

	        /**
	         * Converts a UTF-16 BE string to a word array.
	         *
	         * @param {string} utf16Str The UTF-16 BE string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
	         */
	        parse: function (utf16Str) {
	            // Shortcut
	            var utf16StrLength = utf16Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < utf16StrLength; i++) {
	                words[i >>> 1] |= utf16Str.charCodeAt(i) << (16 - (i % 2) * 16);
	            }

	            return WordArray.create(words, utf16StrLength * 2);
	        }
	    };

	    /**
	     * UTF-16 LE encoding strategy.
	     */
	    C_enc.Utf16LE = {
	        /**
	         * Converts a word array to a UTF-16 LE string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-16 LE string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var utf16Chars = [];
	            for (var i = 0; i < sigBytes; i += 2) {
	                var codePoint = swapEndian((words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff);
	                utf16Chars.push(String.fromCharCode(codePoint));
	            }

	            return utf16Chars.join('');
	        },

	        /**
	         * Converts a UTF-16 LE string to a word array.
	         *
	         * @param {string} utf16Str The UTF-16 LE string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
	         */
	        parse: function (utf16Str) {
	            // Shortcut
	            var utf16StrLength = utf16Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < utf16StrLength; i++) {
	                words[i >>> 1] |= swapEndian(utf16Str.charCodeAt(i) << (16 - (i % 2) * 16));
	            }

	            return WordArray.create(words, utf16StrLength * 2);
	        }
	    };

	    function swapEndian(word) {
	        return ((word << 8) & 0xff00ff00) | ((word >>> 8) & 0x00ff00ff);
	    }
	}());


	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var C_enc = C.enc;

	    /**
	     * Base64 encoding strategy.
	     */
	    var Base64 = C_enc.Base64 = {
	        /**
	         * Converts a word array to a Base64 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Base64 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;
	            var map = this._map;

	            // Clamp excess bits
	            wordArray.clamp();

	            // Convert
	            var base64Chars = [];
	            for (var i = 0; i < sigBytes; i += 3) {
	                var byte1 = (words[i >>> 2]       >>> (24 - (i % 4) * 8))       & 0xff;
	                var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
	                var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;

	                var triplet = (byte1 << 16) | (byte2 << 8) | byte3;

	                for (var j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j++) {
	                    base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
	                }
	            }

	            // Add padding
	            var paddingChar = map.charAt(64);
	            if (paddingChar) {
	                while (base64Chars.length % 4) {
	                    base64Chars.push(paddingChar);
	                }
	            }

	            return base64Chars.join('');
	        },

	        /**
	         * Converts a Base64 string to a word array.
	         *
	         * @param {string} base64Str The Base64 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
	         */
	        parse: function (base64Str) {
	            // Shortcuts
	            var base64StrLength = base64Str.length;
	            var map = this._map;
	            var reverseMap = this._reverseMap;

	            if (!reverseMap) {
	                    reverseMap = this._reverseMap = [];
	                    for (var j = 0; j < map.length; j++) {
	                        reverseMap[map.charCodeAt(j)] = j;
	                    }
	            }

	            // Ignore padding
	            var paddingChar = map.charAt(64);
	            if (paddingChar) {
	                var paddingIndex = base64Str.indexOf(paddingChar);
	                if (paddingIndex !== -1) {
	                    base64StrLength = paddingIndex;
	                }
	            }

	            // Convert
	            return parseLoop(base64Str, base64StrLength, reverseMap);

	        },

	        _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
	    };

	    function parseLoop(base64Str, base64StrLength, reverseMap) {
	      var words = [];
	      var nBytes = 0;
	      for (var i = 0; i < base64StrLength; i++) {
	          if (i % 4) {
	              var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);
	              var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);
	              var bitsCombined = bits1 | bits2;
	              words[nBytes >>> 2] |= bitsCombined << (24 - (nBytes % 4) * 8);
	              nBytes++;
	          }
	      }
	      return WordArray.create(words, nBytes);
	    }
	}());


	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var C_enc = C.enc;

	    /**
	     * Base64url encoding strategy.
	     */
	    var Base64url = C_enc.Base64url = {
	        /**
	         * Converts a word array to a Base64url string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @param {boolean} urlSafe Whether to use url safe
	         *
	         * @return {string} The Base64url string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var base64String = CryptoJS.enc.Base64url.stringify(wordArray);
	         */
	        stringify: function (wordArray, urlSafe) {
	            if (urlSafe === undefined) {
	                urlSafe = true
	            }
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;
	            var map = urlSafe ? this._safe_map : this._map;

	            // Clamp excess bits
	            wordArray.clamp();

	            // Convert
	            var base64Chars = [];
	            for (var i = 0; i < sigBytes; i += 3) {
	                var byte1 = (words[i >>> 2]       >>> (24 - (i % 4) * 8))       & 0xff;
	                var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
	                var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;

	                var triplet = (byte1 << 16) | (byte2 << 8) | byte3;

	                for (var j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j++) {
	                    base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
	                }
	            }

	            // Add padding
	            var paddingChar = map.charAt(64);
	            if (paddingChar) {
	                while (base64Chars.length % 4) {
	                    base64Chars.push(paddingChar);
	                }
	            }

	            return base64Chars.join('');
	        },

	        /**
	         * Converts a Base64url string to a word array.
	         *
	         * @param {string} base64Str The Base64url string.
	         *
	         * @param {boolean} urlSafe Whether to use url safe
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Base64url.parse(base64String);
	         */
	        parse: function (base64Str, urlSafe) {
	            if (urlSafe === undefined) {
	                urlSafe = true
	            }

	            // Shortcuts
	            var base64StrLength = base64Str.length;
	            var map = urlSafe ? this._safe_map : this._map;
	            var reverseMap = this._reverseMap;

	            if (!reverseMap) {
	                reverseMap = this._reverseMap = [];
	                for (var j = 0; j < map.length; j++) {
	                    reverseMap[map.charCodeAt(j)] = j;
	                }
	            }

	            // Ignore padding
	            var paddingChar = map.charAt(64);
	            if (paddingChar) {
	                var paddingIndex = base64Str.indexOf(paddingChar);
	                if (paddingIndex !== -1) {
	                    base64StrLength = paddingIndex;
	                }
	            }

	            // Convert
	            return parseLoop(base64Str, base64StrLength, reverseMap);

	        },

	        _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
	        _safe_map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
	    };

	    function parseLoop(base64Str, base64StrLength, reverseMap) {
	        var words = [];
	        var nBytes = 0;
	        for (var i = 0; i < base64StrLength; i++) {
	            if (i % 4) {
	                var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);
	                var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);
	                var bitsCombined = bits1 | bits2;
	                words[nBytes >>> 2] |= bitsCombined << (24 - (nBytes % 4) * 8);
	                nBytes++;
	            }
	        }
	        return WordArray.create(words, nBytes);
	    }
	}());


	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Constants table
	    var T = [];

	    // Compute constants
	    (function () {
	        for (var i = 0; i < 64; i++) {
	            T[i] = (Math.abs(Math.sin(i + 1)) * 0x100000000) | 0;
	        }
	    }());

	    /**
	     * MD5 hash algorithm.
	     */
	    var MD5 = C_algo.MD5 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init([
	                0x67452301, 0xefcdab89,
	                0x98badcfe, 0x10325476
	            ]);
	        },

	        _doProcessBlock: function (M, offset) {
	            // Swap endian
	            for (var i = 0; i < 16; i++) {
	                // Shortcuts
	                var offset_i = offset + i;
	                var M_offset_i = M[offset_i];

	                M[offset_i] = (
	                    (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
	                    (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
	                );
	            }

	            // Shortcuts
	            var H = this._hash.words;

	            var M_offset_0  = M[offset + 0];
	            var M_offset_1  = M[offset + 1];
	            var M_offset_2  = M[offset + 2];
	            var M_offset_3  = M[offset + 3];
	            var M_offset_4  = M[offset + 4];
	            var M_offset_5  = M[offset + 5];
	            var M_offset_6  = M[offset + 6];
	            var M_offset_7  = M[offset + 7];
	            var M_offset_8  = M[offset + 8];
	            var M_offset_9  = M[offset + 9];
	            var M_offset_10 = M[offset + 10];
	            var M_offset_11 = M[offset + 11];
	            var M_offset_12 = M[offset + 12];
	            var M_offset_13 = M[offset + 13];
	            var M_offset_14 = M[offset + 14];
	            var M_offset_15 = M[offset + 15];

	            // Working variables
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];

	            // Computation
	            a = FF(a, b, c, d, M_offset_0,  7,  T[0]);
	            d = FF(d, a, b, c, M_offset_1,  12, T[1]);
	            c = FF(c, d, a, b, M_offset_2,  17, T[2]);
	            b = FF(b, c, d, a, M_offset_3,  22, T[3]);
	            a = FF(a, b, c, d, M_offset_4,  7,  T[4]);
	            d = FF(d, a, b, c, M_offset_5,  12, T[5]);
	            c = FF(c, d, a, b, M_offset_6,  17, T[6]);
	            b = FF(b, c, d, a, M_offset_7,  22, T[7]);
	            a = FF(a, b, c, d, M_offset_8,  7,  T[8]);
	            d = FF(d, a, b, c, M_offset_9,  12, T[9]);
	            c = FF(c, d, a, b, M_offset_10, 17, T[10]);
	            b = FF(b, c, d, a, M_offset_11, 22, T[11]);
	            a = FF(a, b, c, d, M_offset_12, 7,  T[12]);
	            d = FF(d, a, b, c, M_offset_13, 12, T[13]);
	            c = FF(c, d, a, b, M_offset_14, 17, T[14]);
	            b = FF(b, c, d, a, M_offset_15, 22, T[15]);

	            a = GG(a, b, c, d, M_offset_1,  5,  T[16]);
	            d = GG(d, a, b, c, M_offset_6,  9,  T[17]);
	            c = GG(c, d, a, b, M_offset_11, 14, T[18]);
	            b = GG(b, c, d, a, M_offset_0,  20, T[19]);
	            a = GG(a, b, c, d, M_offset_5,  5,  T[20]);
	            d = GG(d, a, b, c, M_offset_10, 9,  T[21]);
	            c = GG(c, d, a, b, M_offset_15, 14, T[22]);
	            b = GG(b, c, d, a, M_offset_4,  20, T[23]);
	            a = GG(a, b, c, d, M_offset_9,  5,  T[24]);
	            d = GG(d, a, b, c, M_offset_14, 9,  T[25]);
	            c = GG(c, d, a, b, M_offset_3,  14, T[26]);
	            b = GG(b, c, d, a, M_offset_8,  20, T[27]);
	            a = GG(a, b, c, d, M_offset_13, 5,  T[28]);
	            d = GG(d, a, b, c, M_offset_2,  9,  T[29]);
	            c = GG(c, d, a, b, M_offset_7,  14, T[30]);
	            b = GG(b, c, d, a, M_offset_12, 20, T[31]);

	            a = HH(a, b, c, d, M_offset_5,  4,  T[32]);
	            d = HH(d, a, b, c, M_offset_8,  11, T[33]);
	            c = HH(c, d, a, b, M_offset_11, 16, T[34]);
	            b = HH(b, c, d, a, M_offset_14, 23, T[35]);
	            a = HH(a, b, c, d, M_offset_1,  4,  T[36]);
	            d = HH(d, a, b, c, M_offset_4,  11, T[37]);
	            c = HH(c, d, a, b, M_offset_7,  16, T[38]);
	            b = HH(b, c, d, a, M_offset_10, 23, T[39]);
	            a = HH(a, b, c, d, M_offset_13, 4,  T[40]);
	            d = HH(d, a, b, c, M_offset_0,  11, T[41]);
	            c = HH(c, d, a, b, M_offset_3,  16, T[42]);
	            b = HH(b, c, d, a, M_offset_6,  23, T[43]);
	            a = HH(a, b, c, d, M_offset_9,  4,  T[44]);
	            d = HH(d, a, b, c, M_offset_12, 11, T[45]);
	            c = HH(c, d, a, b, M_offset_15, 16, T[46]);
	            b = HH(b, c, d, a, M_offset_2,  23, T[47]);

	            a = II(a, b, c, d, M_offset_0,  6,  T[48]);
	            d = II(d, a, b, c, M_offset_7,  10, T[49]);
	            c = II(c, d, a, b, M_offset_14, 15, T[50]);
	            b = II(b, c, d, a, M_offset_5,  21, T[51]);
	            a = II(a, b, c, d, M_offset_12, 6,  T[52]);
	            d = II(d, a, b, c, M_offset_3,  10, T[53]);
	            c = II(c, d, a, b, M_offset_10, 15, T[54]);
	            b = II(b, c, d, a, M_offset_1,  21, T[55]);
	            a = II(a, b, c, d, M_offset_8,  6,  T[56]);
	            d = II(d, a, b, c, M_offset_15, 10, T[57]);
	            c = II(c, d, a, b, M_offset_6,  15, T[58]);
	            b = II(b, c, d, a, M_offset_13, 21, T[59]);
	            a = II(a, b, c, d, M_offset_4,  6,  T[60]);
	            d = II(d, a, b, c, M_offset_11, 10, T[61]);
	            c = II(c, d, a, b, M_offset_2,  15, T[62]);
	            b = II(b, c, d, a, M_offset_9,  21, T[63]);

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);

	            var nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
	            var nBitsTotalL = nBitsTotal;
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = (
	                (((nBitsTotalH << 8)  | (nBitsTotalH >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotalH << 24) | (nBitsTotalH >>> 8))  & 0xff00ff00)
	            );
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
	                (((nBitsTotalL << 8)  | (nBitsTotalL >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotalL << 24) | (nBitsTotalL >>> 8))  & 0xff00ff00)
	            );

	            data.sigBytes = (dataWords.length + 1) * 4;

	            // Hash final blocks
	            this._process();

	            // Shortcuts
	            var hash = this._hash;
	            var H = hash.words;

	            // Swap endian
	            for (var i = 0; i < 4; i++) {
	                // Shortcut
	                var H_i = H[i];

	                H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
	                       (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
	            }

	            // Return final computed hash
	            return hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    function FF(a, b, c, d, x, s, t) {
	        var n = a + ((b & c) | (~b & d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function GG(a, b, c, d, x, s, t) {
	        var n = a + ((b & d) | (c & ~d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function HH(a, b, c, d, x, s, t) {
	        var n = a + (b ^ c ^ d) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function II(a, b, c, d, x, s, t) {
	        var n = a + (c ^ (b | ~d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.MD5('message');
	     *     var hash = CryptoJS.MD5(wordArray);
	     */
	    C.MD5 = Hasher._createHelper(MD5);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacMD5(message, key);
	     */
	    C.HmacMD5 = Hasher._createHmacHelper(MD5);
	}(Math));


	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Reusable object
	    var W = [];

	    /**
	     * SHA-1 hash algorithm.
	     */
	    var SHA1 = C_algo.SHA1 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init([
	                0x67452301, 0xefcdab89,
	                0x98badcfe, 0x10325476,
	                0xc3d2e1f0
	            ]);
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var H = this._hash.words;

	            // Working variables
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];
	            var e = H[4];

	            // Computation
	            for (var i = 0; i < 80; i++) {
	                if (i < 16) {
	                    W[i] = M[offset + i] | 0;
	                } else {
	                    var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
	                    W[i] = (n << 1) | (n >>> 31);
	                }

	                var t = ((a << 5) | (a >>> 27)) + e + W[i];
	                if (i < 20) {
	                    t += ((b & c) | (~b & d)) + 0x5a827999;
	                } else if (i < 40) {
	                    t += (b ^ c ^ d) + 0x6ed9eba1;
	                } else if (i < 60) {
	                    t += ((b & c) | (b & d) | (c & d)) - 0x70e44324;
	                } else /* if (i < 80) */ {
	                    t += (b ^ c ^ d) - 0x359d3e2a;
	                }

	                e = d;
	                d = c;
	                c = (b << 30) | (b >>> 2);
	                b = a;
	                a = t;
	            }

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	            H[4] = (H[4] + e) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Return final computed hash
	            return this._hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA1('message');
	     *     var hash = CryptoJS.SHA1(wordArray);
	     */
	    C.SHA1 = Hasher._createHelper(SHA1);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA1(message, key);
	     */
	    C.HmacSHA1 = Hasher._createHmacHelper(SHA1);
	}());


	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Initialization and round constants tables
	    var H = [];
	    var K = [];

	    // Compute constants
	    (function () {
	        function isPrime(n) {
	            var sqrtN = Math.sqrt(n);
	            for (var factor = 2; factor <= sqrtN; factor++) {
	                if (!(n % factor)) {
	                    return false;
	                }
	            }

	            return true;
	        }

	        function getFractionalBits(n) {
	            return ((n - (n | 0)) * 0x100000000) | 0;
	        }

	        var n = 2;
	        var nPrime = 0;
	        while (nPrime < 64) {
	            if (isPrime(n)) {
	                if (nPrime < 8) {
	                    H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
	                }
	                K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));

	                nPrime++;
	            }

	            n++;
	        }
	    }());

	    // Reusable object
	    var W = [];

	    /**
	     * SHA-256 hash algorithm.
	     */
	    var SHA256 = C_algo.SHA256 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init(H.slice(0));
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var H = this._hash.words;

	            // Working variables
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];
	            var e = H[4];
	            var f = H[5];
	            var g = H[6];
	            var h = H[7];

	            // Computation
	            for (var i = 0; i < 64; i++) {
	                if (i < 16) {
	                    W[i] = M[offset + i] | 0;
	                } else {
	                    var gamma0x = W[i - 15];
	                    var gamma0  = ((gamma0x << 25) | (gamma0x >>> 7))  ^
	                                  ((gamma0x << 14) | (gamma0x >>> 18)) ^
	                                   (gamma0x >>> 3);

	                    var gamma1x = W[i - 2];
	                    var gamma1  = ((gamma1x << 15) | (gamma1x >>> 17)) ^
	                                  ((gamma1x << 13) | (gamma1x >>> 19)) ^
	                                   (gamma1x >>> 10);

	                    W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
	                }

	                var ch  = (e & f) ^ (~e & g);
	                var maj = (a & b) ^ (a & c) ^ (b & c);

	                var sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));
	                var sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7)  | (e >>> 25));

	                var t1 = h + sigma1 + ch + K[i] + W[i];
	                var t2 = sigma0 + maj;

	                h = g;
	                g = f;
	                f = e;
	                e = (d + t1) | 0;
	                d = c;
	                c = b;
	                b = a;
	                a = (t1 + t2) | 0;
	            }

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	            H[4] = (H[4] + e) | 0;
	            H[5] = (H[5] + f) | 0;
	            H[6] = (H[6] + g) | 0;
	            H[7] = (H[7] + h) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Return final computed hash
	            return this._hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA256('message');
	     *     var hash = CryptoJS.SHA256(wordArray);
	     */
	    C.SHA256 = Hasher._createHelper(SHA256);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA256(message, key);
	     */
	    C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
	}(Math));


	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var C_algo = C.algo;
	    var SHA256 = C_algo.SHA256;

	    /**
	     * SHA-224 hash algorithm.
	     */
	    var SHA224 = C_algo.SHA224 = SHA256.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init([
	                0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939,
	                0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4
	            ]);
	        },

	        _doFinalize: function () {
	            var hash = SHA256._doFinalize.call(this);

	            hash.sigBytes -= 4;

	            return hash;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA224('message');
	     *     var hash = CryptoJS.SHA224(wordArray);
	     */
	    C.SHA224 = SHA256._createHelper(SHA224);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA224(message, key);
	     */
	    C.HmacSHA224 = SHA256._createHmacHelper(SHA224);
	}());


	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Hasher = C_lib.Hasher;
	    var C_x64 = C.x64;
	    var X64Word = C_x64.Word;
	    var X64WordArray = C_x64.WordArray;
	    var C_algo = C.algo;

	    function X64Word_create() {
	        return X64Word.create.apply(X64Word, arguments);
	    }

	    // Constants
	    var K = [
	        X64Word_create(0x428a2f98, 0xd728ae22), X64Word_create(0x71374491, 0x23ef65cd),
	        X64Word_create(0xb5c0fbcf, 0xec4d3b2f), X64Word_create(0xe9b5dba5, 0x8189dbbc),
	        X64Word_create(0x3956c25b, 0xf348b538), X64Word_create(0x59f111f1, 0xb605d019),
	        X64Word_create(0x923f82a4, 0xaf194f9b), X64Word_create(0xab1c5ed5, 0xda6d8118),
	        X64Word_create(0xd807aa98, 0xa3030242), X64Word_create(0x12835b01, 0x45706fbe),
	        X64Word_create(0x243185be, 0x4ee4b28c), X64Word_create(0x550c7dc3, 0xd5ffb4e2),
	        X64Word_create(0x72be5d74, 0xf27b896f), X64Word_create(0x80deb1fe, 0x3b1696b1),
	        X64Word_create(0x9bdc06a7, 0x25c71235), X64Word_create(0xc19bf174, 0xcf692694),
	        X64Word_create(0xe49b69c1, 0x9ef14ad2), X64Word_create(0xefbe4786, 0x384f25e3),
	        X64Word_create(0x0fc19dc6, 0x8b8cd5b5), X64Word_create(0x240ca1cc, 0x77ac9c65),
	        X64Word_create(0x2de92c6f, 0x592b0275), X64Word_create(0x4a7484aa, 0x6ea6e483),
	        X64Word_create(0x5cb0a9dc, 0xbd41fbd4), X64Word_create(0x76f988da, 0x831153b5),
	        X64Word_create(0x983e5152, 0xee66dfab), X64Word_create(0xa831c66d, 0x2db43210),
	        X64Word_create(0xb00327c8, 0x98fb213f), X64Word_create(0xbf597fc7, 0xbeef0ee4),
	        X64Word_create(0xc6e00bf3, 0x3da88fc2), X64Word_create(0xd5a79147, 0x930aa725),
	        X64Word_create(0x06ca6351, 0xe003826f), X64Word_create(0x14292967, 0x0a0e6e70),
	        X64Word_create(0x27b70a85, 0x46d22ffc), X64Word_create(0x2e1b2138, 0x5c26c926),
	        X64Word_create(0x4d2c6dfc, 0x5ac42aed), X64Word_create(0x53380d13, 0x9d95b3df),
	        X64Word_create(0x650a7354, 0x8baf63de), X64Word_create(0x766a0abb, 0x3c77b2a8),
	        X64Word_create(0x81c2c92e, 0x47edaee6), X64Word_create(0x92722c85, 0x1482353b),
	        X64Word_create(0xa2bfe8a1, 0x4cf10364), X64Word_create(0xa81a664b, 0xbc423001),
	        X64Word_create(0xc24b8b70, 0xd0f89791), X64Word_create(0xc76c51a3, 0x0654be30),
	        X64Word_create(0xd192e819, 0xd6ef5218), X64Word_create(0xd6990624, 0x5565a910),
	        X64Word_create(0xf40e3585, 0x5771202a), X64Word_create(0x106aa070, 0x32bbd1b8),
	        X64Word_create(0x19a4c116, 0xb8d2d0c8), X64Word_create(0x1e376c08, 0x5141ab53),
	        X64Word_create(0x2748774c, 0xdf8eeb99), X64Word_create(0x34b0bcb5, 0xe19b48a8),
	        X64Word_create(0x391c0cb3, 0xc5c95a63), X64Word_create(0x4ed8aa4a, 0xe3418acb),
	        X64Word_create(0x5b9cca4f, 0x7763e373), X64Word_create(0x682e6ff3, 0xd6b2b8a3),
	        X64Word_create(0x748f82ee, 0x5defb2fc), X64Word_create(0x78a5636f, 0x43172f60),
	        X64Word_create(0x84c87814, 0xa1f0ab72), X64Word_create(0x8cc70208, 0x1a6439ec),
	        X64Word_create(0x90befffa, 0x23631e28), X64Word_create(0xa4506ceb, 0xde82bde9),
	        X64Word_create(0xbef9a3f7, 0xb2c67915), X64Word_create(0xc67178f2, 0xe372532b),
	        X64Word_create(0xca273ece, 0xea26619c), X64Word_create(0xd186b8c7, 0x21c0c207),
	        X64Word_create(0xeada7dd6, 0xcde0eb1e), X64Word_create(0xf57d4f7f, 0xee6ed178),
	        X64Word_create(0x06f067aa, 0x72176fba), X64Word_create(0x0a637dc5, 0xa2c898a6),
	        X64Word_create(0x113f9804, 0xbef90dae), X64Word_create(0x1b710b35, 0x131c471b),
	        X64Word_create(0x28db77f5, 0x23047d84), X64Word_create(0x32caab7b, 0x40c72493),
	        X64Word_create(0x3c9ebe0a, 0x15c9bebc), X64Word_create(0x431d67c4, 0x9c100d4c),
	        X64Word_create(0x4cc5d4be, 0xcb3e42b6), X64Word_create(0x597f299c, 0xfc657e2a),
	        X64Word_create(0x5fcb6fab, 0x3ad6faec), X64Word_create(0x6c44198c, 0x4a475817)
	    ];

	    // Reusable objects
	    var W = [];
	    (function () {
	        for (var i = 0; i < 80; i++) {
	            W[i] = X64Word_create();
	        }
	    }());

	    /**
	     * SHA-512 hash algorithm.
	     */
	    var SHA512 = C_algo.SHA512 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new X64WordArray.init([
	                new X64Word.init(0x6a09e667, 0xf3bcc908), new X64Word.init(0xbb67ae85, 0x84caa73b),
	                new X64Word.init(0x3c6ef372, 0xfe94f82b), new X64Word.init(0xa54ff53a, 0x5f1d36f1),
	                new X64Word.init(0x510e527f, 0xade682d1), new X64Word.init(0x9b05688c, 0x2b3e6c1f),
	                new X64Word.init(0x1f83d9ab, 0xfb41bd6b), new X64Word.init(0x5be0cd19, 0x137e2179)
	            ]);
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcuts
	            var H = this._hash.words;

	            var H0 = H[0];
	            var H1 = H[1];
	            var H2 = H[2];
	            var H3 = H[3];
	            var H4 = H[4];
	            var H5 = H[5];
	            var H6 = H[6];
	            var H7 = H[7];

	            var H0h = H0.high;
	            var H0l = H0.low;
	            var H1h = H1.high;
	            var H1l = H1.low;
	            var H2h = H2.high;
	            var H2l = H2.low;
	            var H3h = H3.high;
	            var H3l = H3.low;
	            var H4h = H4.high;
	            var H4l = H4.low;
	            var H5h = H5.high;
	            var H5l = H5.low;
	            var H6h = H6.high;
	            var H6l = H6.low;
	            var H7h = H7.high;
	            var H7l = H7.low;

	            // Working variables
	            var ah = H0h;
	            var al = H0l;
	            var bh = H1h;
	            var bl = H1l;
	            var ch = H2h;
	            var cl = H2l;
	            var dh = H3h;
	            var dl = H3l;
	            var eh = H4h;
	            var el = H4l;
	            var fh = H5h;
	            var fl = H5l;
	            var gh = H6h;
	            var gl = H6l;
	            var hh = H7h;
	            var hl = H7l;

	            // Rounds
	            for (var i = 0; i < 80; i++) {
	                var Wil;
	                var Wih;

	                // Shortcut
	                var Wi = W[i];

	                // Extend message
	                if (i < 16) {
	                    Wih = Wi.high = M[offset + i * 2]     | 0;
	                    Wil = Wi.low  = M[offset + i * 2 + 1] | 0;
	                } else {
	                    // Gamma0
	                    var gamma0x  = W[i - 15];
	                    var gamma0xh = gamma0x.high;
	                    var gamma0xl = gamma0x.low;
	                    var gamma0h  = ((gamma0xh >>> 1) | (gamma0xl << 31)) ^ ((gamma0xh >>> 8) | (gamma0xl << 24)) ^ (gamma0xh >>> 7);
	                    var gamma0l  = ((gamma0xl >>> 1) | (gamma0xh << 31)) ^ ((gamma0xl >>> 8) | (gamma0xh << 24)) ^ ((gamma0xl >>> 7) | (gamma0xh << 25));

	                    // Gamma1
	                    var gamma1x  = W[i - 2];
	                    var gamma1xh = gamma1x.high;
	                    var gamma1xl = gamma1x.low;
	                    var gamma1h  = ((gamma1xh >>> 19) | (gamma1xl << 13)) ^ ((gamma1xh << 3) | (gamma1xl >>> 29)) ^ (gamma1xh >>> 6);
	                    var gamma1l  = ((gamma1xl >>> 19) | (gamma1xh << 13)) ^ ((gamma1xl << 3) | (gamma1xh >>> 29)) ^ ((gamma1xl >>> 6) | (gamma1xh << 26));

	                    // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
	                    var Wi7  = W[i - 7];
	                    var Wi7h = Wi7.high;
	                    var Wi7l = Wi7.low;

	                    var Wi16  = W[i - 16];
	                    var Wi16h = Wi16.high;
	                    var Wi16l = Wi16.low;

	                    Wil = gamma0l + Wi7l;
	                    Wih = gamma0h + Wi7h + ((Wil >>> 0) < (gamma0l >>> 0) ? 1 : 0);
	                    Wil = Wil + gamma1l;
	                    Wih = Wih + gamma1h + ((Wil >>> 0) < (gamma1l >>> 0) ? 1 : 0);
	                    Wil = Wil + Wi16l;
	                    Wih = Wih + Wi16h + ((Wil >>> 0) < (Wi16l >>> 0) ? 1 : 0);

	                    Wi.high = Wih;
	                    Wi.low  = Wil;
	                }

	                var chh  = (eh & fh) ^ (~eh & gh);
	                var chl  = (el & fl) ^ (~el & gl);
	                var majh = (ah & bh) ^ (ah & ch) ^ (bh & ch);
	                var majl = (al & bl) ^ (al & cl) ^ (bl & cl);

	                var sigma0h = ((ah >>> 28) | (al << 4))  ^ ((ah << 30)  | (al >>> 2)) ^ ((ah << 25) | (al >>> 7));
	                var sigma0l = ((al >>> 28) | (ah << 4))  ^ ((al << 30)  | (ah >>> 2)) ^ ((al << 25) | (ah >>> 7));
	                var sigma1h = ((eh >>> 14) | (el << 18)) ^ ((eh >>> 18) | (el << 14)) ^ ((eh << 23) | (el >>> 9));
	                var sigma1l = ((el >>> 14) | (eh << 18)) ^ ((el >>> 18) | (eh << 14)) ^ ((el << 23) | (eh >>> 9));

	                // t1 = h + sigma1 + ch + K[i] + W[i]
	                var Ki  = K[i];
	                var Kih = Ki.high;
	                var Kil = Ki.low;

	                var t1l = hl + sigma1l;
	                var t1h = hh + sigma1h + ((t1l >>> 0) < (hl >>> 0) ? 1 : 0);
	                var t1l = t1l + chl;
	                var t1h = t1h + chh + ((t1l >>> 0) < (chl >>> 0) ? 1 : 0);
	                var t1l = t1l + Kil;
	                var t1h = t1h + Kih + ((t1l >>> 0) < (Kil >>> 0) ? 1 : 0);
	                var t1l = t1l + Wil;
	                var t1h = t1h + Wih + ((t1l >>> 0) < (Wil >>> 0) ? 1 : 0);

	                // t2 = sigma0 + maj
	                var t2l = sigma0l + majl;
	                var t2h = sigma0h + majh + ((t2l >>> 0) < (sigma0l >>> 0) ? 1 : 0);

	                // Update working variables
	                hh = gh;
	                hl = gl;
	                gh = fh;
	                gl = fl;
	                fh = eh;
	                fl = el;
	                el = (dl + t1l) | 0;
	                eh = (dh + t1h + ((el >>> 0) < (dl >>> 0) ? 1 : 0)) | 0;
	                dh = ch;
	                dl = cl;
	                ch = bh;
	                cl = bl;
	                bh = ah;
	                bl = al;
	                al = (t1l + t2l) | 0;
	                ah = (t1h + t2h + ((al >>> 0) < (t1l >>> 0) ? 1 : 0)) | 0;
	            }

	            // Intermediate hash value
	            H0l = H0.low  = (H0l + al);
	            H0.high = (H0h + ah + ((H0l >>> 0) < (al >>> 0) ? 1 : 0));
	            H1l = H1.low  = (H1l + bl);
	            H1.high = (H1h + bh + ((H1l >>> 0) < (bl >>> 0) ? 1 : 0));
	            H2l = H2.low  = (H2l + cl);
	            H2.high = (H2h + ch + ((H2l >>> 0) < (cl >>> 0) ? 1 : 0));
	            H3l = H3.low  = (H3l + dl);
	            H3.high = (H3h + dh + ((H3l >>> 0) < (dl >>> 0) ? 1 : 0));
	            H4l = H4.low  = (H4l + el);
	            H4.high = (H4h + eh + ((H4l >>> 0) < (el >>> 0) ? 1 : 0));
	            H5l = H5.low  = (H5l + fl);
	            H5.high = (H5h + fh + ((H5l >>> 0) < (fl >>> 0) ? 1 : 0));
	            H6l = H6.low  = (H6l + gl);
	            H6.high = (H6h + gh + ((H6l >>> 0) < (gl >>> 0) ? 1 : 0));
	            H7l = H7.low  = (H7l + hl);
	            H7.high = (H7h + hh + ((H7l >>> 0) < (hl >>> 0) ? 1 : 0));
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 30] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 31] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Convert hash to 32-bit word array before returning
	            var hash = this._hash.toX32();

	            // Return final computed hash
	            return hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        },

	        blockSize: 1024/32
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA512('message');
	     *     var hash = CryptoJS.SHA512(wordArray);
	     */
	    C.SHA512 = Hasher._createHelper(SHA512);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA512(message, key);
	     */
	    C.HmacSHA512 = Hasher._createHmacHelper(SHA512);
	}());


	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_x64 = C.x64;
	    var X64Word = C_x64.Word;
	    var X64WordArray = C_x64.WordArray;
	    var C_algo = C.algo;
	    var SHA512 = C_algo.SHA512;

	    /**
	     * SHA-384 hash algorithm.
	     */
	    var SHA384 = C_algo.SHA384 = SHA512.extend({
	        _doReset: function () {
	            this._hash = new X64WordArray.init([
	                new X64Word.init(0xcbbb9d5d, 0xc1059ed8), new X64Word.init(0x629a292a, 0x367cd507),
	                new X64Word.init(0x9159015a, 0x3070dd17), new X64Word.init(0x152fecd8, 0xf70e5939),
	                new X64Word.init(0x67332667, 0xffc00b31), new X64Word.init(0x8eb44a87, 0x68581511),
	                new X64Word.init(0xdb0c2e0d, 0x64f98fa7), new X64Word.init(0x47b5481d, 0xbefa4fa4)
	            ]);
	        },

	        _doFinalize: function () {
	            var hash = SHA512._doFinalize.call(this);

	            hash.sigBytes -= 16;

	            return hash;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA384('message');
	     *     var hash = CryptoJS.SHA384(wordArray);
	     */
	    C.SHA384 = SHA512._createHelper(SHA384);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA384(message, key);
	     */
	    C.HmacSHA384 = SHA512._createHmacHelper(SHA384);
	}());


	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_x64 = C.x64;
	    var X64Word = C_x64.Word;
	    var C_algo = C.algo;

	    // Constants tables
	    var RHO_OFFSETS = [];
	    var PI_INDEXES  = [];
	    var ROUND_CONSTANTS = [];

	    // Compute Constants
	    (function () {
	        // Compute rho offset constants
	        var x = 1, y = 0;
	        for (var t = 0; t < 24; t++) {
	            RHO_OFFSETS[x + 5 * y] = ((t + 1) * (t + 2) / 2) % 64;

	            var newX = y % 5;
	            var newY = (2 * x + 3 * y) % 5;
	            x = newX;
	            y = newY;
	        }

	        // Compute pi index constants
	        for (var x = 0; x < 5; x++) {
	            for (var y = 0; y < 5; y++) {
	                PI_INDEXES[x + 5 * y] = y + ((2 * x + 3 * y) % 5) * 5;
	            }
	        }

	        // Compute round constants
	        var LFSR = 0x01;
	        for (var i = 0; i < 24; i++) {
	            var roundConstantMsw = 0;
	            var roundConstantLsw = 0;

	            for (var j = 0; j < 7; j++) {
	                if (LFSR & 0x01) {
	                    var bitPosition = (1 << j) - 1;
	                    if (bitPosition < 32) {
	                        roundConstantLsw ^= 1 << bitPosition;
	                    } else /* if (bitPosition >= 32) */ {
	                        roundConstantMsw ^= 1 << (bitPosition - 32);
	                    }
	                }

	                // Compute next LFSR
	                if (LFSR & 0x80) {
	                    // Primitive polynomial over GF(2): x^8 + x^6 + x^5 + x^4 + 1
	                    LFSR = (LFSR << 1) ^ 0x71;
	                } else {
	                    LFSR <<= 1;
	                }
	            }

	            ROUND_CONSTANTS[i] = X64Word.create(roundConstantMsw, roundConstantLsw);
	        }
	    }());

	    // Reusable objects for temporary values
	    var T = [];
	    (function () {
	        for (var i = 0; i < 25; i++) {
	            T[i] = X64Word.create();
	        }
	    }());

	    /**
	     * SHA-3 hash algorithm.
	     */
	    var SHA3 = C_algo.SHA3 = Hasher.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {number} outputLength
	         *   The desired number of bits in the output hash.
	         *   Only values permitted are: 224, 256, 384, 512.
	         *   Default: 512
	         */
	        cfg: Hasher.cfg.extend({
	            outputLength: 512
	        }),

	        _doReset: function () {
	            var state = this._state = []
	            for (var i = 0; i < 25; i++) {
	                state[i] = new X64Word.init();
	            }

	            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcuts
	            var state = this._state;
	            var nBlockSizeLanes = this.blockSize / 2;

	            // Absorb
	            for (var i = 0; i < nBlockSizeLanes; i++) {
	                // Shortcuts
	                var M2i  = M[offset + 2 * i];
	                var M2i1 = M[offset + 2 * i + 1];

	                // Swap endian
	                M2i = (
	                    (((M2i << 8)  | (M2i >>> 24)) & 0x00ff00ff) |
	                    (((M2i << 24) | (M2i >>> 8))  & 0xff00ff00)
	                );
	                M2i1 = (
	                    (((M2i1 << 8)  | (M2i1 >>> 24)) & 0x00ff00ff) |
	                    (((M2i1 << 24) | (M2i1 >>> 8))  & 0xff00ff00)
	                );

	                // Absorb message into state
	                var lane = state[i];
	                lane.high ^= M2i1;
	                lane.low  ^= M2i;
	            }

	            // Rounds
	            for (var round = 0; round < 24; round++) {
	                // Theta
	                for (var x = 0; x < 5; x++) {
	                    // Mix column lanes
	                    var tMsw = 0, tLsw = 0;
	                    for (var y = 0; y < 5; y++) {
	                        var lane = state[x + 5 * y];
	                        tMsw ^= lane.high;
	                        tLsw ^= lane.low;
	                    }

	                    // Temporary values
	                    var Tx = T[x];
	                    Tx.high = tMsw;
	                    Tx.low  = tLsw;
	                }
	                for (var x = 0; x < 5; x++) {
	                    // Shortcuts
	                    var Tx4 = T[(x + 4) % 5];
	                    var Tx1 = T[(x + 1) % 5];
	                    var Tx1Msw = Tx1.high;
	                    var Tx1Lsw = Tx1.low;

	                    // Mix surrounding columns
	                    var tMsw = Tx4.high ^ ((Tx1Msw << 1) | (Tx1Lsw >>> 31));
	                    var tLsw = Tx4.low  ^ ((Tx1Lsw << 1) | (Tx1Msw >>> 31));
	                    for (var y = 0; y < 5; y++) {
	                        var lane = state[x + 5 * y];
	                        lane.high ^= tMsw;
	                        lane.low  ^= tLsw;
	                    }
	                }

	                // Rho Pi
	                for (var laneIndex = 1; laneIndex < 25; laneIndex++) {
	                    var tMsw;
	                    var tLsw;

	                    // Shortcuts
	                    var lane = state[laneIndex];
	                    var laneMsw = lane.high;
	                    var laneLsw = lane.low;
	                    var rhoOffset = RHO_OFFSETS[laneIndex];

	                    // Rotate lanes
	                    if (rhoOffset < 32) {
	                        tMsw = (laneMsw << rhoOffset) | (laneLsw >>> (32 - rhoOffset));
	                        tLsw = (laneLsw << rhoOffset) | (laneMsw >>> (32 - rhoOffset));
	                    } else /* if (rhoOffset >= 32) */ {
	                        tMsw = (laneLsw << (rhoOffset - 32)) | (laneMsw >>> (64 - rhoOffset));
	                        tLsw = (laneMsw << (rhoOffset - 32)) | (laneLsw >>> (64 - rhoOffset));
	                    }

	                    // Transpose lanes
	                    var TPiLane = T[PI_INDEXES[laneIndex]];
	                    TPiLane.high = tMsw;
	                    TPiLane.low  = tLsw;
	                }

	                // Rho pi at x = y = 0
	                var T0 = T[0];
	                var state0 = state[0];
	                T0.high = state0.high;
	                T0.low  = state0.low;

	                // Chi
	                for (var x = 0; x < 5; x++) {
	                    for (var y = 0; y < 5; y++) {
	                        // Shortcuts
	                        var laneIndex = x + 5 * y;
	                        var lane = state[laneIndex];
	                        var TLane = T[laneIndex];
	                        var Tx1Lane = T[((x + 1) % 5) + 5 * y];
	                        var Tx2Lane = T[((x + 2) % 5) + 5 * y];

	                        // Mix rows
	                        lane.high = TLane.high ^ (~Tx1Lane.high & Tx2Lane.high);
	                        lane.low  = TLane.low  ^ (~Tx1Lane.low  & Tx2Lane.low);
	                    }
	                }

	                // Iota
	                var lane = state[0];
	                var roundConstant = ROUND_CONSTANTS[round];
	                lane.high ^= roundConstant.high;
	                lane.low  ^= roundConstant.low;
	            }
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;
	            var blockSizeBits = this.blockSize * 32;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x1 << (24 - nBitsLeft % 32);
	            dataWords[((Math.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits) >>> 5) - 1] |= 0x80;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Shortcuts
	            var state = this._state;
	            var outputLengthBytes = this.cfg.outputLength / 8;
	            var outputLengthLanes = outputLengthBytes / 8;

	            // Squeeze
	            var hashWords = [];
	            for (var i = 0; i < outputLengthLanes; i++) {
	                // Shortcuts
	                var lane = state[i];
	                var laneMsw = lane.high;
	                var laneLsw = lane.low;

	                // Swap endian
	                laneMsw = (
	                    (((laneMsw << 8)  | (laneMsw >>> 24)) & 0x00ff00ff) |
	                    (((laneMsw << 24) | (laneMsw >>> 8))  & 0xff00ff00)
	                );
	                laneLsw = (
	                    (((laneLsw << 8)  | (laneLsw >>> 24)) & 0x00ff00ff) |
	                    (((laneLsw << 24) | (laneLsw >>> 8))  & 0xff00ff00)
	                );

	                // Squeeze state to retrieve hash
	                hashWords.push(laneLsw);
	                hashWords.push(laneMsw);
	            }

	            // Return final computed hash
	            return new WordArray.init(hashWords, outputLengthBytes);
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);

	            var state = clone._state = this._state.slice(0);
	            for (var i = 0; i < 25; i++) {
	                state[i] = state[i].clone();
	            }

	            return clone;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA3('message');
	     *     var hash = CryptoJS.SHA3(wordArray);
	     */
	    C.SHA3 = Hasher._createHelper(SHA3);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA3(message, key);
	     */
	    C.HmacSHA3 = Hasher._createHmacHelper(SHA3);
	}(Math));


	/** @preserve
	(c) 2012 by Cédric Mesnil. All rights reserved.

	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
	    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Constants table
	    var _zl = WordArray.create([
	        0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15,
	        7,  4, 13,  1, 10,  6, 15,  3, 12,  0,  9,  5,  2, 14, 11,  8,
	        3, 10, 14,  4,  9, 15,  8,  1,  2,  7,  0,  6, 13, 11,  5, 12,
	        1,  9, 11, 10,  0,  8, 12,  4, 13,  3,  7, 15, 14,  5,  6,  2,
	        4,  0,  5,  9,  7, 12,  2, 10, 14,  1,  3,  8, 11,  6, 15, 13]);
	    var _zr = WordArray.create([
	        5, 14,  7,  0,  9,  2, 11,  4, 13,  6, 15,  8,  1, 10,  3, 12,
	        6, 11,  3,  7,  0, 13,  5, 10, 14, 15,  8, 12,  4,  9,  1,  2,
	        15,  5,  1,  3,  7, 14,  6,  9, 11,  8, 12,  2, 10,  0,  4, 13,
	        8,  6,  4,  1,  3, 11, 15,  0,  5, 12,  2, 13,  9,  7, 10, 14,
	        12, 15, 10,  4,  1,  5,  8,  7,  6,  2, 13, 14,  0,  3,  9, 11]);
	    var _sl = WordArray.create([
	         11, 14, 15, 12,  5,  8,  7,  9, 11, 13, 14, 15,  6,  7,  9,  8,
	        7, 6,   8, 13, 11,  9,  7, 15,  7, 12, 15,  9, 11,  7, 13, 12,
	        11, 13,  6,  7, 14,  9, 13, 15, 14,  8, 13,  6,  5, 12,  7,  5,
	          11, 12, 14, 15, 14, 15,  9,  8,  9, 14,  5,  6,  8,  6,  5, 12,
	        9, 15,  5, 11,  6,  8, 13, 12,  5, 12, 13, 14, 11,  8,  5,  6 ]);
	    var _sr = WordArray.create([
	        8,  9,  9, 11, 13, 15, 15,  5,  7,  7,  8, 11, 14, 14, 12,  6,
	        9, 13, 15,  7, 12,  8,  9, 11,  7,  7, 12,  7,  6, 15, 13, 11,
	        9,  7, 15, 11,  8,  6,  6, 14, 12, 13,  5, 14, 13, 13,  7,  5,
	        15,  5,  8, 11, 14, 14,  6, 14,  6,  9, 12,  9, 12,  5, 15,  8,
	        8,  5, 12,  9, 12,  5, 14,  6,  8, 13,  6,  5, 15, 13, 11, 11 ]);

	    var _hl =  WordArray.create([ 0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E]);
	    var _hr =  WordArray.create([ 0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000]);

	    /**
	     * RIPEMD160 hash algorithm.
	     */
	    var RIPEMD160 = C_algo.RIPEMD160 = Hasher.extend({
	        _doReset: function () {
	            this._hash  = WordArray.create([0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0]);
	        },

	        _doProcessBlock: function (M, offset) {

	            // Swap endian
	            for (var i = 0; i < 16; i++) {
	                // Shortcuts
	                var offset_i = offset + i;
	                var M_offset_i = M[offset_i];

	                // Swap
	                M[offset_i] = (
	                    (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
	                    (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
	                );
	            }
	            // Shortcut
	            var H  = this._hash.words;
	            var hl = _hl.words;
	            var hr = _hr.words;
	            var zl = _zl.words;
	            var zr = _zr.words;
	            var sl = _sl.words;
	            var sr = _sr.words;

	            // Working variables
	            var al, bl, cl, dl, el;
	            var ar, br, cr, dr, er;

	            ar = al = H[0];
	            br = bl = H[1];
	            cr = cl = H[2];
	            dr = dl = H[3];
	            er = el = H[4];
	            // Computation
	            var t;
	            for (var i = 0; i < 80; i += 1) {
	                t = (al +  M[offset+zl[i]])|0;
	                if (i<16){
		            t +=  f1(bl,cl,dl) + hl[0];
	                } else if (i<32) {
		            t +=  f2(bl,cl,dl) + hl[1];
	                } else if (i<48) {
		            t +=  f3(bl,cl,dl) + hl[2];
	                } else if (i<64) {
		            t +=  f4(bl,cl,dl) + hl[3];
	                } else {// if (i<80) {
		            t +=  f5(bl,cl,dl) + hl[4];
	                }
	                t = t|0;
	                t =  rotl(t,sl[i]);
	                t = (t+el)|0;
	                al = el;
	                el = dl;
	                dl = rotl(cl, 10);
	                cl = bl;
	                bl = t;

	                t = (ar + M[offset+zr[i]])|0;
	                if (i<16){
		            t +=  f5(br,cr,dr) + hr[0];
	                } else if (i<32) {
		            t +=  f4(br,cr,dr) + hr[1];
	                } else if (i<48) {
		            t +=  f3(br,cr,dr) + hr[2];
	                } else if (i<64) {
		            t +=  f2(br,cr,dr) + hr[3];
	                } else {// if (i<80) {
		            t +=  f1(br,cr,dr) + hr[4];
	                }
	                t = t|0;
	                t =  rotl(t,sr[i]) ;
	                t = (t+er)|0;
	                ar = er;
	                er = dr;
	                dr = rotl(cr, 10);
	                cr = br;
	                br = t;
	            }
	            // Intermediate hash value
	            t    = (H[1] + cl + dr)|0;
	            H[1] = (H[2] + dl + er)|0;
	            H[2] = (H[3] + el + ar)|0;
	            H[3] = (H[4] + al + br)|0;
	            H[4] = (H[0] + bl + cr)|0;
	            H[0] =  t;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
	                (((nBitsTotal << 8)  | (nBitsTotal >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotal << 24) | (nBitsTotal >>> 8))  & 0xff00ff00)
	            );
	            data.sigBytes = (dataWords.length + 1) * 4;

	            // Hash final blocks
	            this._process();

	            // Shortcuts
	            var hash = this._hash;
	            var H = hash.words;

	            // Swap endian
	            for (var i = 0; i < 5; i++) {
	                // Shortcut
	                var H_i = H[i];

	                // Swap
	                H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
	                       (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
	            }

	            // Return final computed hash
	            return hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });


	    function f1(x, y, z) {
	        return ((x) ^ (y) ^ (z));

	    }

	    function f2(x, y, z) {
	        return (((x)&(y)) | ((~x)&(z)));
	    }

	    function f3(x, y, z) {
	        return (((x) | (~(y))) ^ (z));
	    }

	    function f4(x, y, z) {
	        return (((x) & (z)) | ((y)&(~(z))));
	    }

	    function f5(x, y, z) {
	        return ((x) ^ ((y) |(~(z))));

	    }

	    function rotl(x,n) {
	        return (x<<n) | (x>>>(32-n));
	    }


	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.RIPEMD160('message');
	     *     var hash = CryptoJS.RIPEMD160(wordArray);
	     */
	    C.RIPEMD160 = Hasher._createHelper(RIPEMD160);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacRIPEMD160(message, key);
	     */
	    C.HmacRIPEMD160 = Hasher._createHmacHelper(RIPEMD160);
	}(Math));


	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var C_enc = C.enc;
	    var Utf8 = C_enc.Utf8;
	    var C_algo = C.algo;

	    /**
	     * HMAC algorithm.
	     */
	    var HMAC = C_algo.HMAC = Base.extend({
	        /**
	         * Initializes a newly created HMAC.
	         *
	         * @param {Hasher} hasher The hash algorithm to use.
	         * @param {WordArray|string} key The secret key.
	         *
	         * @example
	         *
	         *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
	         */
	        init: function (hasher, key) {
	            // Init hasher
	            hasher = this._hasher = new hasher.init();

	            // Convert string to WordArray, else assume WordArray already
	            if (typeof key == 'string') {
	                key = Utf8.parse(key);
	            }

	            // Shortcuts
	            var hasherBlockSize = hasher.blockSize;
	            var hasherBlockSizeBytes = hasherBlockSize * 4;

	            // Allow arbitrary length keys
	            if (key.sigBytes > hasherBlockSizeBytes) {
	                key = hasher.finalize(key);
	            }

	            // Clamp excess bits
	            key.clamp();

	            // Clone key for inner and outer pads
	            var oKey = this._oKey = key.clone();
	            var iKey = this._iKey = key.clone();

	            // Shortcuts
	            var oKeyWords = oKey.words;
	            var iKeyWords = iKey.words;

	            // XOR keys with pad constants
	            for (var i = 0; i < hasherBlockSize; i++) {
	                oKeyWords[i] ^= 0x5c5c5c5c;
	                iKeyWords[i] ^= 0x36363636;
	            }
	            oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this HMAC to its initial state.
	         *
	         * @example
	         *
	         *     hmacHasher.reset();
	         */
	        reset: function () {
	            // Shortcut
	            var hasher = this._hasher;

	            // Reset
	            hasher.reset();
	            hasher.update(this._iKey);
	        },

	        /**
	         * Updates this HMAC with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {HMAC} This HMAC instance.
	         *
	         * @example
	         *
	         *     hmacHasher.update('message');
	         *     hmacHasher.update(wordArray);
	         */
	        update: function (messageUpdate) {
	            this._hasher.update(messageUpdate);

	            // Chainable
	            return this;
	        },

	        /**
	         * Finalizes the HMAC computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The HMAC.
	         *
	         * @example
	         *
	         *     var hmac = hmacHasher.finalize();
	         *     var hmac = hmacHasher.finalize('message');
	         *     var hmac = hmacHasher.finalize(wordArray);
	         */
	        finalize: function (messageUpdate) {
	            // Shortcut
	            var hasher = this._hasher;

	            // Compute HMAC
	            var innerHash = hasher.finalize(messageUpdate);
	            hasher.reset();
	            var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));

	            return hmac;
	        }
	    });
	}());


	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var WordArray = C_lib.WordArray;
	    var C_algo = C.algo;
	    var SHA256 = C_algo.SHA256;
	    var HMAC = C_algo.HMAC;

	    /**
	     * Password-Based Key Derivation Function 2 algorithm.
	     */
	    var PBKDF2 = C_algo.PBKDF2 = Base.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
	         * @property {Hasher} hasher The hasher to use. Default: SHA256
	         * @property {number} iterations The number of iterations to perform. Default: 250000
	         */
	        cfg: Base.extend({
	            keySize: 128/32,
	            hasher: SHA256,
	            iterations: 250000
	        }),

	        /**
	         * Initializes a newly created key derivation function.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for the derivation.
	         *
	         * @example
	         *
	         *     var kdf = CryptoJS.algo.PBKDF2.create();
	         *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
	         *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
	         */
	        init: function (cfg) {
	            this.cfg = this.cfg.extend(cfg);
	        },

	        /**
	         * Computes the Password-Based Key Derivation Function 2.
	         *
	         * @param {WordArray|string} password The password.
	         * @param {WordArray|string} salt A salt.
	         *
	         * @return {WordArray} The derived key.
	         *
	         * @example
	         *
	         *     var key = kdf.compute(password, salt);
	         */
	        compute: function (password, salt) {
	            // Shortcut
	            var cfg = this.cfg;

	            // Init HMAC
	            var hmac = HMAC.create(cfg.hasher, password);

	            // Initial values
	            var derivedKey = WordArray.create();
	            var blockIndex = WordArray.create([0x00000001]);

	            // Shortcuts
	            var derivedKeyWords = derivedKey.words;
	            var blockIndexWords = blockIndex.words;
	            var keySize = cfg.keySize;
	            var iterations = cfg.iterations;

	            // Generate key
	            while (derivedKeyWords.length < keySize) {
	                var block = hmac.update(salt).finalize(blockIndex);
	                hmac.reset();

	                // Shortcuts
	                var blockWords = block.words;
	                var blockWordsLength = blockWords.length;

	                // Iterations
	                var intermediate = block;
	                for (var i = 1; i < iterations; i++) {
	                    intermediate = hmac.finalize(intermediate);
	                    hmac.reset();

	                    // Shortcut
	                    var intermediateWords = intermediate.words;

	                    // XOR intermediate with block
	                    for (var j = 0; j < blockWordsLength; j++) {
	                        blockWords[j] ^= intermediateWords[j];
	                    }
	                }

	                derivedKey.concat(block);
	                blockIndexWords[0]++;
	            }
	            derivedKey.sigBytes = keySize * 4;

	            return derivedKey;
	        }
	    });

	    /**
	     * Computes the Password-Based Key Derivation Function 2.
	     *
	     * @param {WordArray|string} password The password.
	     * @param {WordArray|string} salt A salt.
	     * @param {Object} cfg (Optional) The configuration options to use for this computation.
	     *
	     * @return {WordArray} The derived key.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var key = CryptoJS.PBKDF2(password, salt);
	     *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8 });
	     *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8, iterations: 1000 });
	     */
	    C.PBKDF2 = function (password, salt, cfg) {
	        return PBKDF2.create(cfg).compute(password, salt);
	    };
	}());


	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var WordArray = C_lib.WordArray;
	    var C_algo = C.algo;
	    var MD5 = C_algo.MD5;

	    /**
	     * This key derivation function is meant to conform with EVP_BytesToKey.
	     * www.openssl.org/docs/crypto/EVP_BytesToKey.html
	     */
	    var EvpKDF = C_algo.EvpKDF = Base.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
	         * @property {Hasher} hasher The hash algorithm to use. Default: MD5
	         * @property {number} iterations The number of iterations to perform. Default: 1
	         */
	        cfg: Base.extend({
	            keySize: 128/32,
	            hasher: MD5,
	            iterations: 1
	        }),

	        /**
	         * Initializes a newly created key derivation function.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for the derivation.
	         *
	         * @example
	         *
	         *     var kdf = CryptoJS.algo.EvpKDF.create();
	         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
	         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
	         */
	        init: function (cfg) {
	            this.cfg = this.cfg.extend(cfg);
	        },

	        /**
	         * Derives a key from a password.
	         *
	         * @param {WordArray|string} password The password.
	         * @param {WordArray|string} salt A salt.
	         *
	         * @return {WordArray} The derived key.
	         *
	         * @example
	         *
	         *     var key = kdf.compute(password, salt);
	         */
	        compute: function (password, salt) {
	            var block;

	            // Shortcut
	            var cfg = this.cfg;

	            // Init hasher
	            var hasher = cfg.hasher.create();

	            // Initial values
	            var derivedKey = WordArray.create();

	            // Shortcuts
	            var derivedKeyWords = derivedKey.words;
	            var keySize = cfg.keySize;
	            var iterations = cfg.iterations;

	            // Generate key
	            while (derivedKeyWords.length < keySize) {
	                if (block) {
	                    hasher.update(block);
	                }
	                block = hasher.update(password).finalize(salt);
	                hasher.reset();

	                // Iterations
	                for (var i = 1; i < iterations; i++) {
	                    block = hasher.finalize(block);
	                    hasher.reset();
	                }

	                derivedKey.concat(block);
	            }
	            derivedKey.sigBytes = keySize * 4;

	            return derivedKey;
	        }
	    });

	    /**
	     * Derives a key from a password.
	     *
	     * @param {WordArray|string} password The password.
	     * @param {WordArray|string} salt A salt.
	     * @param {Object} cfg (Optional) The configuration options to use for this computation.
	     *
	     * @return {WordArray} The derived key.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var key = CryptoJS.EvpKDF(password, salt);
	     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8 });
	     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8, iterations: 1000 });
	     */
	    C.EvpKDF = function (password, salt, cfg) {
	        return EvpKDF.create(cfg).compute(password, salt);
	    };
	}());


	/**
	 * Cipher core components.
	 */
	CryptoJS.lib.Cipher || (function (undefined) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var WordArray = C_lib.WordArray;
	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
	    var C_enc = C.enc;
	    var Utf8 = C_enc.Utf8;
	    var Base64 = C_enc.Base64;
	    var C_algo = C.algo;
	    var EvpKDF = C_algo.EvpKDF;

	    /**
	     * Abstract base cipher template.
	     *
	     * @property {number} keySize This cipher's key size. Default: 4 (128 bits)
	     * @property {number} ivSize This cipher's IV size. Default: 4 (128 bits)
	     * @property {number} _ENC_XFORM_MODE A constant representing encryption mode.
	     * @property {number} _DEC_XFORM_MODE A constant representing decryption mode.
	     */
	    var Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {WordArray} iv The IV to use for this operation.
	         */
	        cfg: Base.extend(),

	        /**
	         * Creates this cipher in encryption mode.
	         *
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {Cipher} A cipher instance.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
	         */
	        createEncryptor: function (key, cfg) {
	            return this.create(this._ENC_XFORM_MODE, key, cfg);
	        },

	        /**
	         * Creates this cipher in decryption mode.
	         *
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {Cipher} A cipher instance.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
	         */
	        createDecryptor: function (key, cfg) {
	            return this.create(this._DEC_XFORM_MODE, key, cfg);
	        },

	        /**
	         * Initializes a newly created cipher.
	         *
	         * @param {number} xformMode Either the encryption or decryption transormation mode constant.
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @example
	         *
	         *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
	         */
	        init: function (xformMode, key, cfg) {
	            // Apply config defaults
	            this.cfg = this.cfg.extend(cfg);

	            // Store transform mode and key
	            this._xformMode = xformMode;
	            this._key = key;

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this cipher to its initial state.
	         *
	         * @example
	         *
	         *     cipher.reset();
	         */
	        reset: function () {
	            // Reset data buffer
	            BufferedBlockAlgorithm.reset.call(this);

	            // Perform concrete-cipher logic
	            this._doReset();
	        },

	        /**
	         * Adds data to be encrypted or decrypted.
	         *
	         * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
	         *
	         * @return {WordArray} The data after processing.
	         *
	         * @example
	         *
	         *     var encrypted = cipher.process('data');
	         *     var encrypted = cipher.process(wordArray);
	         */
	        process: function (dataUpdate) {
	            // Append
	            this._append(dataUpdate);

	            // Process available blocks
	            return this._process();
	        },

	        /**
	         * Finalizes the encryption or decryption process.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
	         *
	         * @return {WordArray} The data after final processing.
	         *
	         * @example
	         *
	         *     var encrypted = cipher.finalize();
	         *     var encrypted = cipher.finalize('data');
	         *     var encrypted = cipher.finalize(wordArray);
	         */
	        finalize: function (dataUpdate) {
	            // Final data update
	            if (dataUpdate) {
	                this._append(dataUpdate);
	            }

	            // Perform concrete-cipher logic
	            var finalProcessedData = this._doFinalize();

	            return finalProcessedData;
	        },

	        keySize: 128/32,

	        ivSize: 128/32,

	        _ENC_XFORM_MODE: 1,

	        _DEC_XFORM_MODE: 2,

	        /**
	         * Creates shortcut functions to a cipher's object interface.
	         *
	         * @param {Cipher} cipher The cipher to create a helper for.
	         *
	         * @return {Object} An object with encrypt and decrypt shortcut functions.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
	         */
	        _createHelper: (function () {
	            function selectCipherStrategy(key) {
	                if (typeof key == 'string') {
	                    return PasswordBasedCipher;
	                } else {
	                    return SerializableCipher;
	                }
	            }

	            return function (cipher) {
	                return {
	                    encrypt: function (message, key, cfg) {
	                        return selectCipherStrategy(key).encrypt(cipher, message, key, cfg);
	                    },

	                    decrypt: function (ciphertext, key, cfg) {
	                        return selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);
	                    }
	                };
	            };
	        }())
	    });

	    /**
	     * Abstract base stream cipher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 1 (32 bits)
	     */
	    var StreamCipher = C_lib.StreamCipher = Cipher.extend({
	        _doFinalize: function () {
	            // Process partial blocks
	            var finalProcessedBlocks = this._process(!!'flush');

	            return finalProcessedBlocks;
	        },

	        blockSize: 1
	    });

	    /**
	     * Mode namespace.
	     */
	    var C_mode = C.mode = {};

	    /**
	     * Abstract base block cipher mode template.
	     */
	    var BlockCipherMode = C_lib.BlockCipherMode = Base.extend({
	        /**
	         * Creates this mode for encryption.
	         *
	         * @param {Cipher} cipher A block cipher instance.
	         * @param {Array} iv The IV words.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
	         */
	        createEncryptor: function (cipher, iv) {
	            return this.Encryptor.create(cipher, iv);
	        },

	        /**
	         * Creates this mode for decryption.
	         *
	         * @param {Cipher} cipher A block cipher instance.
	         * @param {Array} iv The IV words.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
	         */
	        createDecryptor: function (cipher, iv) {
	            return this.Decryptor.create(cipher, iv);
	        },

	        /**
	         * Initializes a newly created mode.
	         *
	         * @param {Cipher} cipher A block cipher instance.
	         * @param {Array} iv The IV words.
	         *
	         * @example
	         *
	         *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
	         */
	        init: function (cipher, iv) {
	            this._cipher = cipher;
	            this._iv = iv;
	        }
	    });

	    /**
	     * Cipher Block Chaining mode.
	     */
	    var CBC = C_mode.CBC = (function () {
	        /**
	         * Abstract base CBC mode.
	         */
	        var CBC = BlockCipherMode.extend();

	        /**
	         * CBC encryptor.
	         */
	        CBC.Encryptor = CBC.extend({
	            /**
	             * Processes the data block at offset.
	             *
	             * @param {Array} words The data words to operate on.
	             * @param {number} offset The offset where the block starts.
	             *
	             * @example
	             *
	             *     mode.processBlock(data.words, offset);
	             */
	            processBlock: function (words, offset) {
	                // Shortcuts
	                var cipher = this._cipher;
	                var blockSize = cipher.blockSize;

	                // XOR and encrypt
	                xorBlock.call(this, words, offset, blockSize);
	                cipher.encryptBlock(words, offset);

	                // Remember this block to use with next block
	                this._prevBlock = words.slice(offset, offset + blockSize);
	            }
	        });

	        /**
	         * CBC decryptor.
	         */
	        CBC.Decryptor = CBC.extend({
	            /**
	             * Processes the data block at offset.
	             *
	             * @param {Array} words The data words to operate on.
	             * @param {number} offset The offset where the block starts.
	             *
	             * @example
	             *
	             *     mode.processBlock(data.words, offset);
	             */
	            processBlock: function (words, offset) {
	                // Shortcuts
	                var cipher = this._cipher;
	                var blockSize = cipher.blockSize;

	                // Remember this block to use with next block
	                var thisBlock = words.slice(offset, offset + blockSize);

	                // Decrypt and XOR
	                cipher.decryptBlock(words, offset);
	                xorBlock.call(this, words, offset, blockSize);

	                // This block becomes the previous block
	                this._prevBlock = thisBlock;
	            }
	        });

	        function xorBlock(words, offset, blockSize) {
	            var block;

	            // Shortcut
	            var iv = this._iv;

	            // Choose mixing block
	            if (iv) {
	                block = iv;

	                // Remove IV for subsequent blocks
	                this._iv = undefined;
	            } else {
	                block = this._prevBlock;
	            }

	            // XOR blocks
	            for (var i = 0; i < blockSize; i++) {
	                words[offset + i] ^= block[i];
	            }
	        }

	        return CBC;
	    }());

	    /**
	     * Padding namespace.
	     */
	    var C_pad = C.pad = {};

	    /**
	     * PKCS #5/7 padding strategy.
	     */
	    var Pkcs7 = C_pad.Pkcs7 = {
	        /**
	         * Pads data using the algorithm defined in PKCS #5/7.
	         *
	         * @param {WordArray} data The data to pad.
	         * @param {number} blockSize The multiple that the data should be padded to.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
	         */
	        pad: function (data, blockSize) {
	            // Shortcut
	            var blockSizeBytes = blockSize * 4;

	            // Count padding bytes
	            var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

	            // Create padding word
	            var paddingWord = (nPaddingBytes << 24) | (nPaddingBytes << 16) | (nPaddingBytes << 8) | nPaddingBytes;

	            // Create padding
	            var paddingWords = [];
	            for (var i = 0; i < nPaddingBytes; i += 4) {
	                paddingWords.push(paddingWord);
	            }
	            var padding = WordArray.create(paddingWords, nPaddingBytes);

	            // Add padding
	            data.concat(padding);
	        },

	        /**
	         * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
	         *
	         * @param {WordArray} data The data to unpad.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     CryptoJS.pad.Pkcs7.unpad(wordArray);
	         */
	        unpad: function (data) {
	            // Get number of padding bytes from last byte
	            var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

	            // Remove padding
	            data.sigBytes -= nPaddingBytes;
	        }
	    };

	    /**
	     * Abstract base block cipher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 4 (128 bits)
	     */
	    var BlockCipher = C_lib.BlockCipher = Cipher.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {Mode} mode The block mode to use. Default: CBC
	         * @property {Padding} padding The padding strategy to use. Default: Pkcs7
	         */
	        cfg: Cipher.cfg.extend({
	            mode: CBC,
	            padding: Pkcs7
	        }),

	        reset: function () {
	            var modeCreator;

	            // Reset cipher
	            Cipher.reset.call(this);

	            // Shortcuts
	            var cfg = this.cfg;
	            var iv = cfg.iv;
	            var mode = cfg.mode;

	            // Reset block mode
	            if (this._xformMode == this._ENC_XFORM_MODE) {
	                modeCreator = mode.createEncryptor;
	            } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
	                modeCreator = mode.createDecryptor;
	                // Keep at least one block in the buffer for unpadding
	                this._minBufferSize = 1;
	            }

	            if (this._mode && this._mode.__creator == modeCreator) {
	                this._mode.init(this, iv && iv.words);
	            } else {
	                this._mode = modeCreator.call(mode, this, iv && iv.words);
	                this._mode.__creator = modeCreator;
	            }
	        },

	        _doProcessBlock: function (words, offset) {
	            this._mode.processBlock(words, offset);
	        },

	        _doFinalize: function () {
	            var finalProcessedBlocks;

	            // Shortcut
	            var padding = this.cfg.padding;

	            // Finalize
	            if (this._xformMode == this._ENC_XFORM_MODE) {
	                // Pad data
	                padding.pad(this._data, this.blockSize);

	                // Process final blocks
	                finalProcessedBlocks = this._process(!!'flush');
	            } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
	                // Process final blocks
	                finalProcessedBlocks = this._process(!!'flush');

	                // Unpad data
	                padding.unpad(finalProcessedBlocks);
	            }

	            return finalProcessedBlocks;
	        },

	        blockSize: 128/32
	    });

	    /**
	     * A collection of cipher parameters.
	     *
	     * @property {WordArray} ciphertext The raw ciphertext.
	     * @property {WordArray} key The key to this ciphertext.
	     * @property {WordArray} iv The IV used in the ciphering operation.
	     * @property {WordArray} salt The salt used with a key derivation function.
	     * @property {Cipher} algorithm The cipher algorithm.
	     * @property {Mode} mode The block mode used in the ciphering operation.
	     * @property {Padding} padding The padding scheme used in the ciphering operation.
	     * @property {number} blockSize The block size of the cipher.
	     * @property {Format} formatter The default formatting strategy to convert this cipher params object to a string.
	     */
	    var CipherParams = C_lib.CipherParams = Base.extend({
	        /**
	         * Initializes a newly created cipher params object.
	         *
	         * @param {Object} cipherParams An object with any of the possible cipher parameters.
	         *
	         * @example
	         *
	         *     var cipherParams = CryptoJS.lib.CipherParams.create({
	         *         ciphertext: ciphertextWordArray,
	         *         key: keyWordArray,
	         *         iv: ivWordArray,
	         *         salt: saltWordArray,
	         *         algorithm: CryptoJS.algo.AES,
	         *         mode: CryptoJS.mode.CBC,
	         *         padding: CryptoJS.pad.PKCS7,
	         *         blockSize: 4,
	         *         formatter: CryptoJS.format.OpenSSL
	         *     });
	         */
	        init: function (cipherParams) {
	            this.mixIn(cipherParams);
	        },

	        /**
	         * Converts this cipher params object to a string.
	         *
	         * @param {Format} formatter (Optional) The formatting strategy to use.
	         *
	         * @return {string} The stringified cipher params.
	         *
	         * @throws Error If neither the formatter nor the default formatter is set.
	         *
	         * @example
	         *
	         *     var string = cipherParams + '';
	         *     var string = cipherParams.toString();
	         *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
	         */
	        toString: function (formatter) {
	            return (formatter || this.formatter).stringify(this);
	        }
	    });

	    /**
	     * Format namespace.
	     */
	    var C_format = C.format = {};

	    /**
	     * OpenSSL formatting strategy.
	     */
	    var OpenSSLFormatter = C_format.OpenSSL = {
	        /**
	         * Converts a cipher params object to an OpenSSL-compatible string.
	         *
	         * @param {CipherParams} cipherParams The cipher params object.
	         *
	         * @return {string} The OpenSSL-compatible string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
	         */
	        stringify: function (cipherParams) {
	            var wordArray;

	            // Shortcuts
	            var ciphertext = cipherParams.ciphertext;
	            var salt = cipherParams.salt;

	            // Format
	            if (salt) {
	                wordArray = WordArray.create([0x53616c74, 0x65645f5f]).concat(salt).concat(ciphertext);
	            } else {
	                wordArray = ciphertext;
	            }

	            return wordArray.toString(Base64);
	        },

	        /**
	         * Converts an OpenSSL-compatible string to a cipher params object.
	         *
	         * @param {string} openSSLStr The OpenSSL-compatible string.
	         *
	         * @return {CipherParams} The cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
	         */
	        parse: function (openSSLStr) {
	            var salt;

	            // Parse base64
	            var ciphertext = Base64.parse(openSSLStr);

	            // Shortcut
	            var ciphertextWords = ciphertext.words;

	            // Test for salt
	            if (ciphertextWords[0] == 0x53616c74 && ciphertextWords[1] == 0x65645f5f) {
	                // Extract salt
	                salt = WordArray.create(ciphertextWords.slice(2, 4));

	                // Remove salt from ciphertext
	                ciphertextWords.splice(0, 4);
	                ciphertext.sigBytes -= 16;
	            }

	            return CipherParams.create({ ciphertext: ciphertext, salt: salt });
	        }
	    };

	    /**
	     * A cipher wrapper that returns ciphertext as a serializable cipher params object.
	     */
	    var SerializableCipher = C_lib.SerializableCipher = Base.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
	         */
	        cfg: Base.extend({
	            format: OpenSSLFormatter
	        }),

	        /**
	         * Encrypts a message.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {WordArray|string} message The message to encrypt.
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {CipherParams} A cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
	         */
	        encrypt: function (cipher, message, key, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Encrypt
	            var encryptor = cipher.createEncryptor(key, cfg);
	            var ciphertext = encryptor.finalize(message);

	            // Shortcut
	            var cipherCfg = encryptor.cfg;

	            // Create and return serializable cipher params
	            return CipherParams.create({
	                ciphertext: ciphertext,
	                key: key,
	                iv: cipherCfg.iv,
	                algorithm: cipher,
	                mode: cipherCfg.mode,
	                padding: cipherCfg.padding,
	                blockSize: cipher.blockSize,
	                formatter: cfg.format
	            });
	        },

	        /**
	         * Decrypts serialized ciphertext.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {WordArray} The plaintext.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
	         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
	         */
	        decrypt: function (cipher, ciphertext, key, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Convert string to CipherParams
	            ciphertext = this._parse(ciphertext, cfg.format);

	            // Decrypt
	            var plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);

	            return plaintext;
	        },

	        /**
	         * Converts serialized ciphertext to CipherParams,
	         * else assumed CipherParams already and returns ciphertext unchanged.
	         *
	         * @param {CipherParams|string} ciphertext The ciphertext.
	         * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
	         *
	         * @return {CipherParams} The unserialized ciphertext.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
	         */
	        _parse: function (ciphertext, format) {
	            if (typeof ciphertext == 'string') {
	                return format.parse(ciphertext, this);
	            } else {
	                return ciphertext;
	            }
	        }
	    });

	    /**
	     * Key derivation function namespace.
	     */
	    var C_kdf = C.kdf = {};

	    /**
	     * OpenSSL key derivation function.
	     */
	    var OpenSSLKdf = C_kdf.OpenSSL = {
	        /**
	         * Derives a key and IV from a password.
	         *
	         * @param {string} password The password to derive from.
	         * @param {number} keySize The size in words of the key to generate.
	         * @param {number} ivSize The size in words of the IV to generate.
	         * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
	         *
	         * @return {CipherParams} A cipher params object with the key, IV, and salt.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
	         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
	         */
	        execute: function (password, keySize, ivSize, salt, hasher) {
	            // Generate random salt
	            if (!salt) {
	                salt = WordArray.random(64/8);
	            }

	            // Derive key and IV
	            if (!hasher) {
	                var key = EvpKDF.create({ keySize: keySize + ivSize }).compute(password, salt);
	            } else {
	                var key = EvpKDF.create({ keySize: keySize + ivSize, hasher: hasher }).compute(password, salt);
	            }


	            // Separate key and IV
	            var iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
	            key.sigBytes = keySize * 4;

	            // Return params
	            return CipherParams.create({ key: key, iv: iv, salt: salt });
	        }
	    };

	    /**
	     * A serializable cipher wrapper that derives the key from a password,
	     * and returns ciphertext as a serializable cipher params object.
	     */
	    var PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
	         */
	        cfg: SerializableCipher.cfg.extend({
	            kdf: OpenSSLKdf
	        }),

	        /**
	         * Encrypts a message using a password.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {WordArray|string} message The message to encrypt.
	         * @param {string} password The password.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {CipherParams} A cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
	         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
	         */
	        encrypt: function (cipher, message, password, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Derive key and other params
	            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, cfg.salt, cfg.hasher);

	            // Add IV to config
	            cfg.iv = derivedParams.iv;

	            // Encrypt
	            var ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg);

	            // Mix in derived params
	            ciphertext.mixIn(derivedParams);

	            return ciphertext;
	        },

	        /**
	         * Decrypts serialized ciphertext using a password.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
	         * @param {string} password The password.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {WordArray} The plaintext.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
	         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
	         */
	        decrypt: function (cipher, ciphertext, password, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Convert string to CipherParams
	            ciphertext = this._parse(ciphertext, cfg.format);

	            // Derive key and other params
	            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt, cfg.hasher);

	            // Add IV to config
	            cfg.iv = derivedParams.iv;

	            // Decrypt
	            var plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);

	            return plaintext;
	        }
	    });
	}());


	/**
	 * Cipher Feedback block mode.
	 */
	CryptoJS.mode.CFB = (function () {
	    var CFB = CryptoJS.lib.BlockCipherMode.extend();

	    CFB.Encryptor = CFB.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher;
	            var blockSize = cipher.blockSize;

	            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

	            // Remember this block to use with next block
	            this._prevBlock = words.slice(offset, offset + blockSize);
	        }
	    });

	    CFB.Decryptor = CFB.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher;
	            var blockSize = cipher.blockSize;

	            // Remember this block to use with next block
	            var thisBlock = words.slice(offset, offset + blockSize);

	            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

	            // This block becomes the previous block
	            this._prevBlock = thisBlock;
	        }
	    });

	    function generateKeystreamAndEncrypt(words, offset, blockSize, cipher) {
	        var keystream;

	        // Shortcut
	        var iv = this._iv;

	        // Generate keystream
	        if (iv) {
	            keystream = iv.slice(0);

	            // Remove IV for subsequent blocks
	            this._iv = undefined;
	        } else {
	            keystream = this._prevBlock;
	        }
	        cipher.encryptBlock(keystream, 0);

	        // Encrypt
	        for (var i = 0; i < blockSize; i++) {
	            words[offset + i] ^= keystream[i];
	        }
	    }

	    return CFB;
	}());


	/**
	 * Counter block mode.
	 */
	CryptoJS.mode.CTR = (function () {
	    var CTR = CryptoJS.lib.BlockCipherMode.extend();

	    var Encryptor = CTR.Encryptor = CTR.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher
	            var blockSize = cipher.blockSize;
	            var iv = this._iv;
	            var counter = this._counter;

	            // Generate keystream
	            if (iv) {
	                counter = this._counter = iv.slice(0);

	                // Remove IV for subsequent blocks
	                this._iv = undefined;
	            }
	            var keystream = counter.slice(0);
	            cipher.encryptBlock(keystream, 0);

	            // Increment counter
	            counter[blockSize - 1] = (counter[blockSize - 1] + 1) | 0

	            // Encrypt
	            for (var i = 0; i < blockSize; i++) {
	                words[offset + i] ^= keystream[i];
	            }
	        }
	    });

	    CTR.Decryptor = Encryptor;

	    return CTR;
	}());


	/** @preserve
	 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
	 * derived from CryptoJS.mode.CTR
	 * Jan Hruby jhruby.web@gmail.com
	 */
	CryptoJS.mode.CTRGladman = (function () {
	    var CTRGladman = CryptoJS.lib.BlockCipherMode.extend();

		function incWord(word)
		{
			if (((word >> 24) & 0xff) === 0xff) { //overflow
			var b1 = (word >> 16)&0xff;
			var b2 = (word >> 8)&0xff;
			var b3 = word & 0xff;

			if (b1 === 0xff) // overflow b1
			{
			b1 = 0;
			if (b2 === 0xff)
			{
				b2 = 0;
				if (b3 === 0xff)
				{
					b3 = 0;
				}
				else
				{
					++b3;
				}
			}
			else
			{
				++b2;
			}
			}
			else
			{
			++b1;
			}

			word = 0;
			word += (b1 << 16);
			word += (b2 << 8);
			word += b3;
			}
			else
			{
			word += (0x01 << 24);
			}
			return word;
		}

		function incCounter(counter)
		{
			if ((counter[0] = incWord(counter[0])) === 0)
			{
				// encr_data in fileenc.c from  Dr Brian Gladman's counts only with DWORD j < 8
				counter[1] = incWord(counter[1]);
			}
			return counter;
		}

	    var Encryptor = CTRGladman.Encryptor = CTRGladman.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher
	            var blockSize = cipher.blockSize;
	            var iv = this._iv;
	            var counter = this._counter;

	            // Generate keystream
	            if (iv) {
	                counter = this._counter = iv.slice(0);

	                // Remove IV for subsequent blocks
	                this._iv = undefined;
	            }

				incCounter(counter);

				var keystream = counter.slice(0);
	            cipher.encryptBlock(keystream, 0);

	            // Encrypt
	            for (var i = 0; i < blockSize; i++) {
	                words[offset + i] ^= keystream[i];
	            }
	        }
	    });

	    CTRGladman.Decryptor = Encryptor;

	    return CTRGladman;
	}());




	/**
	 * Output Feedback block mode.
	 */
	CryptoJS.mode.OFB = (function () {
	    var OFB = CryptoJS.lib.BlockCipherMode.extend();

	    var Encryptor = OFB.Encryptor = OFB.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher
	            var blockSize = cipher.blockSize;
	            var iv = this._iv;
	            var keystream = this._keystream;

	            // Generate keystream
	            if (iv) {
	                keystream = this._keystream = iv.slice(0);

	                // Remove IV for subsequent blocks
	                this._iv = undefined;
	            }
	            cipher.encryptBlock(keystream, 0);

	            // Encrypt
	            for (var i = 0; i < blockSize; i++) {
	                words[offset + i] ^= keystream[i];
	            }
	        }
	    });

	    OFB.Decryptor = Encryptor;

	    return OFB;
	}());


	/**
	 * Electronic Codebook block mode.
	 */
	CryptoJS.mode.ECB = (function () {
	    var ECB = CryptoJS.lib.BlockCipherMode.extend();

	    ECB.Encryptor = ECB.extend({
	        processBlock: function (words, offset) {
	            this._cipher.encryptBlock(words, offset);
	        }
	    });

	    ECB.Decryptor = ECB.extend({
	        processBlock: function (words, offset) {
	            this._cipher.decryptBlock(words, offset);
	        }
	    });

	    return ECB;
	}());


	/**
	 * ANSI X.923 padding strategy.
	 */
	CryptoJS.pad.AnsiX923 = {
	    pad: function (data, blockSize) {
	        // Shortcuts
	        var dataSigBytes = data.sigBytes;
	        var blockSizeBytes = blockSize * 4;

	        // Count padding bytes
	        var nPaddingBytes = blockSizeBytes - dataSigBytes % blockSizeBytes;

	        // Compute last byte position
	        var lastBytePos = dataSigBytes + nPaddingBytes - 1;

	        // Pad
	        data.clamp();
	        data.words[lastBytePos >>> 2] |= nPaddingBytes << (24 - (lastBytePos % 4) * 8);
	        data.sigBytes += nPaddingBytes;
	    },

	    unpad: function (data) {
	        // Get number of padding bytes from last byte
	        var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

	        // Remove padding
	        data.sigBytes -= nPaddingBytes;
	    }
	};


	/**
	 * ISO 10126 padding strategy.
	 */
	CryptoJS.pad.Iso10126 = {
	    pad: function (data, blockSize) {
	        // Shortcut
	        var blockSizeBytes = blockSize * 4;

	        // Count padding bytes
	        var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

	        // Pad
	        data.concat(CryptoJS.lib.WordArray.random(nPaddingBytes - 1)).
	             concat(CryptoJS.lib.WordArray.create([nPaddingBytes << 24], 1));
	    },

	    unpad: function (data) {
	        // Get number of padding bytes from last byte
	        var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

	        // Remove padding
	        data.sigBytes -= nPaddingBytes;
	    }
	};


	/**
	 * ISO/IEC 9797-1 Padding Method 2.
	 */
	CryptoJS.pad.Iso97971 = {
	    pad: function (data, blockSize) {
	        // Add 0x80 byte
	        data.concat(CryptoJS.lib.WordArray.create([0x80000000], 1));

	        // Zero pad the rest
	        CryptoJS.pad.ZeroPadding.pad(data, blockSize);
	    },

	    unpad: function (data) {
	        // Remove zero padding
	        CryptoJS.pad.ZeroPadding.unpad(data);

	        // Remove one more byte -- the 0x80 byte
	        data.sigBytes--;
	    }
	};


	/**
	 * Zero padding strategy.
	 */
	CryptoJS.pad.ZeroPadding = {
	    pad: function (data, blockSize) {
	        // Shortcut
	        var blockSizeBytes = blockSize * 4;

	        // Pad
	        data.clamp();
	        data.sigBytes += blockSizeBytes - ((data.sigBytes % blockSizeBytes) || blockSizeBytes);
	    },

	    unpad: function (data) {
	        // Shortcut
	        var dataWords = data.words;

	        // Unpad
	        var i = data.sigBytes - 1;
	        for (var i = data.sigBytes - 1; i >= 0; i--) {
	            if (((dataWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff)) {
	                data.sigBytes = i + 1;
	                break;
	            }
	        }
	    }
	};


	/**
	 * A noop padding strategy.
	 */
	CryptoJS.pad.NoPadding = {
	    pad: function () {
	    },

	    unpad: function () {
	    }
	};


	(function (undefined) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var CipherParams = C_lib.CipherParams;
	    var C_enc = C.enc;
	    var Hex = C_enc.Hex;
	    var C_format = C.format;

	    var HexFormatter = C_format.Hex = {
	        /**
	         * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
	         *
	         * @param {CipherParams} cipherParams The cipher params object.
	         *
	         * @return {string} The hexadecimally encoded string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
	         */
	        stringify: function (cipherParams) {
	            return cipherParams.ciphertext.toString(Hex);
	        },

	        /**
	         * Converts a hexadecimally encoded ciphertext string to a cipher params object.
	         *
	         * @param {string} input The hexadecimally encoded string.
	         *
	         * @return {CipherParams} The cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
	         */
	        parse: function (input) {
	            var ciphertext = Hex.parse(input);
	            return CipherParams.create({ ciphertext: ciphertext });
	        }
	    };
	}());


	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var BlockCipher = C_lib.BlockCipher;
	    var C_algo = C.algo;

	    // Lookup tables
	    var SBOX = [];
	    var INV_SBOX = [];
	    var SUB_MIX_0 = [];
	    var SUB_MIX_1 = [];
	    var SUB_MIX_2 = [];
	    var SUB_MIX_3 = [];
	    var INV_SUB_MIX_0 = [];
	    var INV_SUB_MIX_1 = [];
	    var INV_SUB_MIX_2 = [];
	    var INV_SUB_MIX_3 = [];

	    // Compute lookup tables
	    (function () {
	        // Compute double table
	        var d = [];
	        for (var i = 0; i < 256; i++) {
	            if (i < 128) {
	                d[i] = i << 1;
	            } else {
	                d[i] = (i << 1) ^ 0x11b;
	            }
	        }

	        // Walk GF(2^8)
	        var x = 0;
	        var xi = 0;
	        for (var i = 0; i < 256; i++) {
	            // Compute sbox
	            var sx = xi ^ (xi << 1) ^ (xi << 2) ^ (xi << 3) ^ (xi << 4);
	            sx = (sx >>> 8) ^ (sx & 0xff) ^ 0x63;
	            SBOX[x] = sx;
	            INV_SBOX[sx] = x;

	            // Compute multiplication
	            var x2 = d[x];
	            var x4 = d[x2];
	            var x8 = d[x4];

	            // Compute sub bytes, mix columns tables
	            var t = (d[sx] * 0x101) ^ (sx * 0x1010100);
	            SUB_MIX_0[x] = (t << 24) | (t >>> 8);
	            SUB_MIX_1[x] = (t << 16) | (t >>> 16);
	            SUB_MIX_2[x] = (t << 8)  | (t >>> 24);
	            SUB_MIX_3[x] = t;

	            // Compute inv sub bytes, inv mix columns tables
	            var t = (x8 * 0x1010101) ^ (x4 * 0x10001) ^ (x2 * 0x101) ^ (x * 0x1010100);
	            INV_SUB_MIX_0[sx] = (t << 24) | (t >>> 8);
	            INV_SUB_MIX_1[sx] = (t << 16) | (t >>> 16);
	            INV_SUB_MIX_2[sx] = (t << 8)  | (t >>> 24);
	            INV_SUB_MIX_3[sx] = t;

	            // Compute next counter
	            if (!x) {
	                x = xi = 1;
	            } else {
	                x = x2 ^ d[d[d[x8 ^ x2]]];
	                xi ^= d[d[xi]];
	            }
	        }
	    }());

	    // Precomputed Rcon lookup
	    var RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];

	    /**
	     * AES block cipher algorithm.
	     */
	    var AES = C_algo.AES = BlockCipher.extend({
	        _doReset: function () {
	            var t;

	            // Skip reset of nRounds has been set before and key did not change
	            if (this._nRounds && this._keyPriorReset === this._key) {
	                return;
	            }

	            // Shortcuts
	            var key = this._keyPriorReset = this._key;
	            var keyWords = key.words;
	            var keySize = key.sigBytes / 4;

	            // Compute number of rounds
	            var nRounds = this._nRounds = keySize + 6;

	            // Compute number of key schedule rows
	            var ksRows = (nRounds + 1) * 4;

	            // Compute key schedule
	            var keySchedule = this._keySchedule = [];
	            for (var ksRow = 0; ksRow < ksRows; ksRow++) {
	                if (ksRow < keySize) {
	                    keySchedule[ksRow] = keyWords[ksRow];
	                } else {
	                    t = keySchedule[ksRow - 1];

	                    if (!(ksRow % keySize)) {
	                        // Rot word
	                        t = (t << 8) | (t >>> 24);

	                        // Sub word
	                        t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];

	                        // Mix Rcon
	                        t ^= RCON[(ksRow / keySize) | 0] << 24;
	                    } else if (keySize > 6 && ksRow % keySize == 4) {
	                        // Sub word
	                        t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];
	                    }

	                    keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
	                }
	            }

	            // Compute inv key schedule
	            var invKeySchedule = this._invKeySchedule = [];
	            for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
	                var ksRow = ksRows - invKsRow;

	                if (invKsRow % 4) {
	                    var t = keySchedule[ksRow];
	                } else {
	                    var t = keySchedule[ksRow - 4];
	                }

	                if (invKsRow < 4 || ksRow <= 4) {
	                    invKeySchedule[invKsRow] = t;
	                } else {
	                    invKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[(t >>> 16) & 0xff]] ^
	                                               INV_SUB_MIX_2[SBOX[(t >>> 8) & 0xff]] ^ INV_SUB_MIX_3[SBOX[t & 0xff]];
	                }
	            }
	        },

	        encryptBlock: function (M, offset) {
	            this._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
	        },

	        decryptBlock: function (M, offset) {
	            // Swap 2nd and 4th rows
	            var t = M[offset + 1];
	            M[offset + 1] = M[offset + 3];
	            M[offset + 3] = t;

	            this._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);

	            // Inv swap 2nd and 4th rows
	            var t = M[offset + 1];
	            M[offset + 1] = M[offset + 3];
	            M[offset + 3] = t;
	        },

	        _doCryptBlock: function (M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {
	            // Shortcut
	            var nRounds = this._nRounds;

	            // Get input, add round key
	            var s0 = M[offset]     ^ keySchedule[0];
	            var s1 = M[offset + 1] ^ keySchedule[1];
	            var s2 = M[offset + 2] ^ keySchedule[2];
	            var s3 = M[offset + 3] ^ keySchedule[3];

	            // Key schedule row counter
	            var ksRow = 4;

	            // Rounds
	            for (var round = 1; round < nRounds; round++) {
	                // Shift rows, sub bytes, mix columns, add round key
	                var t0 = SUB_MIX_0[s0 >>> 24] ^ SUB_MIX_1[(s1 >>> 16) & 0xff] ^ SUB_MIX_2[(s2 >>> 8) & 0xff] ^ SUB_MIX_3[s3 & 0xff] ^ keySchedule[ksRow++];
	                var t1 = SUB_MIX_0[s1 >>> 24] ^ SUB_MIX_1[(s2 >>> 16) & 0xff] ^ SUB_MIX_2[(s3 >>> 8) & 0xff] ^ SUB_MIX_3[s0 & 0xff] ^ keySchedule[ksRow++];
	                var t2 = SUB_MIX_0[s2 >>> 24] ^ SUB_MIX_1[(s3 >>> 16) & 0xff] ^ SUB_MIX_2[(s0 >>> 8) & 0xff] ^ SUB_MIX_3[s1 & 0xff] ^ keySchedule[ksRow++];
	                var t3 = SUB_MIX_0[s3 >>> 24] ^ SUB_MIX_1[(s0 >>> 16) & 0xff] ^ SUB_MIX_2[(s1 >>> 8) & 0xff] ^ SUB_MIX_3[s2 & 0xff] ^ keySchedule[ksRow++];

	                // Update state
	                s0 = t0;
	                s1 = t1;
	                s2 = t2;
	                s3 = t3;
	            }

	            // Shift rows, sub bytes, add round key
	            var t0 = ((SBOX[s0 >>> 24] << 24) | (SBOX[(s1 >>> 16) & 0xff] << 16) | (SBOX[(s2 >>> 8) & 0xff] << 8) | SBOX[s3 & 0xff]) ^ keySchedule[ksRow++];
	            var t1 = ((SBOX[s1 >>> 24] << 24) | (SBOX[(s2 >>> 16) & 0xff] << 16) | (SBOX[(s3 >>> 8) & 0xff] << 8) | SBOX[s0 & 0xff]) ^ keySchedule[ksRow++];
	            var t2 = ((SBOX[s2 >>> 24] << 24) | (SBOX[(s3 >>> 16) & 0xff] << 16) | (SBOX[(s0 >>> 8) & 0xff] << 8) | SBOX[s1 & 0xff]) ^ keySchedule[ksRow++];
	            var t3 = ((SBOX[s3 >>> 24] << 24) | (SBOX[(s0 >>> 16) & 0xff] << 16) | (SBOX[(s1 >>> 8) & 0xff] << 8) | SBOX[s2 & 0xff]) ^ keySchedule[ksRow++];

	            // Set output
	            M[offset]     = t0;
	            M[offset + 1] = t1;
	            M[offset + 2] = t2;
	            M[offset + 3] = t3;
	        },

	        keySize: 256/32
	    });

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.AES.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.AES.decrypt(ciphertext, key, cfg);
	     */
	    C.AES = BlockCipher._createHelper(AES);
	}());


	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var BlockCipher = C_lib.BlockCipher;
	    var C_algo = C.algo;

	    // Permuted Choice 1 constants
	    var PC1 = [
	        57, 49, 41, 33, 25, 17, 9,  1,
	        58, 50, 42, 34, 26, 18, 10, 2,
	        59, 51, 43, 35, 27, 19, 11, 3,
	        60, 52, 44, 36, 63, 55, 47, 39,
	        31, 23, 15, 7,  62, 54, 46, 38,
	        30, 22, 14, 6,  61, 53, 45, 37,
	        29, 21, 13, 5,  28, 20, 12, 4
	    ];

	    // Permuted Choice 2 constants
	    var PC2 = [
	        14, 17, 11, 24, 1,  5,
	        3,  28, 15, 6,  21, 10,
	        23, 19, 12, 4,  26, 8,
	        16, 7,  27, 20, 13, 2,
	        41, 52, 31, 37, 47, 55,
	        30, 40, 51, 45, 33, 48,
	        44, 49, 39, 56, 34, 53,
	        46, 42, 50, 36, 29, 32
	    ];

	    // Cumulative bit shift constants
	    var BIT_SHIFTS = [1,  2,  4,  6,  8,  10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];

	    // SBOXes and round permutation constants
	    var SBOX_P = [
	        {
	            0x0: 0x808200,
	            0x10000000: 0x8000,
	            0x20000000: 0x808002,
	            0x30000000: 0x2,
	            0x40000000: 0x200,
	            0x50000000: 0x808202,
	            0x60000000: 0x800202,
	            0x70000000: 0x800000,
	            0x80000000: 0x202,
	            0x90000000: 0x800200,
	            0xa0000000: 0x8200,
	            0xb0000000: 0x808000,
	            0xc0000000: 0x8002,
	            0xd0000000: 0x800002,
	            0xe0000000: 0x0,
	            0xf0000000: 0x8202,
	            0x8000000: 0x0,
	            0x18000000: 0x808202,
	            0x28000000: 0x8202,
	            0x38000000: 0x8000,
	            0x48000000: 0x808200,
	            0x58000000: 0x200,
	            0x68000000: 0x808002,
	            0x78000000: 0x2,
	            0x88000000: 0x800200,
	            0x98000000: 0x8200,
	            0xa8000000: 0x808000,
	            0xb8000000: 0x800202,
	            0xc8000000: 0x800002,
	            0xd8000000: 0x8002,
	            0xe8000000: 0x202,
	            0xf8000000: 0x800000,
	            0x1: 0x8000,
	            0x10000001: 0x2,
	            0x20000001: 0x808200,
	            0x30000001: 0x800000,
	            0x40000001: 0x808002,
	            0x50000001: 0x8200,
	            0x60000001: 0x200,
	            0x70000001: 0x800202,
	            0x80000001: 0x808202,
	            0x90000001: 0x808000,
	            0xa0000001: 0x800002,
	            0xb0000001: 0x8202,
	            0xc0000001: 0x202,
	            0xd0000001: 0x800200,
	            0xe0000001: 0x8002,
	            0xf0000001: 0x0,
	            0x8000001: 0x808202,
	            0x18000001: 0x808000,
	            0x28000001: 0x800000,
	            0x38000001: 0x200,
	            0x48000001: 0x8000,
	            0x58000001: 0x800002,
	            0x68000001: 0x2,
	            0x78000001: 0x8202,
	            0x88000001: 0x8002,
	            0x98000001: 0x800202,
	            0xa8000001: 0x202,
	            0xb8000001: 0x808200,
	            0xc8000001: 0x800200,
	            0xd8000001: 0x0,
	            0xe8000001: 0x8200,
	            0xf8000001: 0x808002
	        },
	        {
	            0x0: 0x40084010,
	            0x1000000: 0x4000,
	            0x2000000: 0x80000,
	            0x3000000: 0x40080010,
	            0x4000000: 0x40000010,
	            0x5000000: 0x40084000,
	            0x6000000: 0x40004000,
	            0x7000000: 0x10,
	            0x8000000: 0x84000,
	            0x9000000: 0x40004010,
	            0xa000000: 0x40000000,
	            0xb000000: 0x84010,
	            0xc000000: 0x80010,
	            0xd000000: 0x0,
	            0xe000000: 0x4010,
	            0xf000000: 0x40080000,
	            0x800000: 0x40004000,
	            0x1800000: 0x84010,
	            0x2800000: 0x10,
	            0x3800000: 0x40004010,
	            0x4800000: 0x40084010,
	            0x5800000: 0x40000000,
	            0x6800000: 0x80000,
	            0x7800000: 0x40080010,
	            0x8800000: 0x80010,
	            0x9800000: 0x0,
	            0xa800000: 0x4000,
	            0xb800000: 0x40080000,
	            0xc800000: 0x40000010,
	            0xd800000: 0x84000,
	            0xe800000: 0x40084000,
	            0xf800000: 0x4010,
	            0x10000000: 0x0,
	            0x11000000: 0x40080010,
	            0x12000000: 0x40004010,
	            0x13000000: 0x40084000,
	            0x14000000: 0x40080000,
	            0x15000000: 0x10,
	            0x16000000: 0x84010,
	            0x17000000: 0x4000,
	            0x18000000: 0x4010,
	            0x19000000: 0x80000,
	            0x1a000000: 0x80010,
	            0x1b000000: 0x40000010,
	            0x1c000000: 0x84000,
	            0x1d000000: 0x40004000,
	            0x1e000000: 0x40000000,
	            0x1f000000: 0x40084010,
	            0x10800000: 0x84010,
	            0x11800000: 0x80000,
	            0x12800000: 0x40080000,
	            0x13800000: 0x4000,
	            0x14800000: 0x40004000,
	            0x15800000: 0x40084010,
	            0x16800000: 0x10,
	            0x17800000: 0x40000000,
	            0x18800000: 0x40084000,
	            0x19800000: 0x40000010,
	            0x1a800000: 0x40004010,
	            0x1b800000: 0x80010,
	            0x1c800000: 0x0,
	            0x1d800000: 0x4010,
	            0x1e800000: 0x40080010,
	            0x1f800000: 0x84000
	        },
	        {
	            0x0: 0x104,
	            0x100000: 0x0,
	            0x200000: 0x4000100,
	            0x300000: 0x10104,
	            0x400000: 0x10004,
	            0x500000: 0x4000004,
	            0x600000: 0x4010104,
	            0x700000: 0x4010000,
	            0x800000: 0x4000000,
	            0x900000: 0x4010100,
	            0xa00000: 0x10100,
	            0xb00000: 0x4010004,
	            0xc00000: 0x4000104,
	            0xd00000: 0x10000,
	            0xe00000: 0x4,
	            0xf00000: 0x100,
	            0x80000: 0x4010100,
	            0x180000: 0x4010004,
	            0x280000: 0x0,
	            0x380000: 0x4000100,
	            0x480000: 0x4000004,
	            0x580000: 0x10000,
	            0x680000: 0x10004,
	            0x780000: 0x104,
	            0x880000: 0x4,
	            0x980000: 0x100,
	            0xa80000: 0x4010000,
	            0xb80000: 0x10104,
	            0xc80000: 0x10100,
	            0xd80000: 0x4000104,
	            0xe80000: 0x4010104,
	            0xf80000: 0x4000000,
	            0x1000000: 0x4010100,
	            0x1100000: 0x10004,
	            0x1200000: 0x10000,
	            0x1300000: 0x4000100,
	            0x1400000: 0x100,
	            0x1500000: 0x4010104,
	            0x1600000: 0x4000004,
	            0x1700000: 0x0,
	            0x1800000: 0x4000104,
	            0x1900000: 0x4000000,
	            0x1a00000: 0x4,
	            0x1b00000: 0x10100,
	            0x1c00000: 0x4010000,
	            0x1d00000: 0x104,
	            0x1e00000: 0x10104,
	            0x1f00000: 0x4010004,
	            0x1080000: 0x4000000,
	            0x1180000: 0x104,
	            0x1280000: 0x4010100,
	            0x1380000: 0x0,
	            0x1480000: 0x10004,
	            0x1580000: 0x4000100,
	            0x1680000: 0x100,
	            0x1780000: 0x4010004,
	            0x1880000: 0x10000,
	            0x1980000: 0x4010104,
	            0x1a80000: 0x10104,
	            0x1b80000: 0x4000004,
	            0x1c80000: 0x4000104,
	            0x1d80000: 0x4010000,
	            0x1e80000: 0x4,
	            0x1f80000: 0x10100
	        },
	        {
	            0x0: 0x80401000,
	            0x10000: 0x80001040,
	            0x20000: 0x401040,
	            0x30000: 0x80400000,
	            0x40000: 0x0,
	            0x50000: 0x401000,
	            0x60000: 0x80000040,
	            0x70000: 0x400040,
	            0x80000: 0x80000000,
	            0x90000: 0x400000,
	            0xa0000: 0x40,
	            0xb0000: 0x80001000,
	            0xc0000: 0x80400040,
	            0xd0000: 0x1040,
	            0xe0000: 0x1000,
	            0xf0000: 0x80401040,
	            0x8000: 0x80001040,
	            0x18000: 0x40,
	            0x28000: 0x80400040,
	            0x38000: 0x80001000,
	            0x48000: 0x401000,
	            0x58000: 0x80401040,
	            0x68000: 0x0,
	            0x78000: 0x80400000,
	            0x88000: 0x1000,
	            0x98000: 0x80401000,
	            0xa8000: 0x400000,
	            0xb8000: 0x1040,
	            0xc8000: 0x80000000,
	            0xd8000: 0x400040,
	            0xe8000: 0x401040,
	            0xf8000: 0x80000040,
	            0x100000: 0x400040,
	            0x110000: 0x401000,
	            0x120000: 0x80000040,
	            0x130000: 0x0,
	            0x140000: 0x1040,
	            0x150000: 0x80400040,
	            0x160000: 0x80401000,
	            0x170000: 0x80001040,
	            0x180000: 0x80401040,
	            0x190000: 0x80000000,
	            0x1a0000: 0x80400000,
	            0x1b0000: 0x401040,
	            0x1c0000: 0x80001000,
	            0x1d0000: 0x400000,
	            0x1e0000: 0x40,
	            0x1f0000: 0x1000,
	            0x108000: 0x80400000,
	            0x118000: 0x80401040,
	            0x128000: 0x0,
	            0x138000: 0x401000,
	            0x148000: 0x400040,
	            0x158000: 0x80000000,
	            0x168000: 0x80001040,
	            0x178000: 0x40,
	            0x188000: 0x80000040,
	            0x198000: 0x1000,
	            0x1a8000: 0x80001000,
	            0x1b8000: 0x80400040,
	            0x1c8000: 0x1040,
	            0x1d8000: 0x80401000,
	            0x1e8000: 0x400000,
	            0x1f8000: 0x401040
	        },
	        {
	            0x0: 0x80,
	            0x1000: 0x1040000,
	            0x2000: 0x40000,
	            0x3000: 0x20000000,
	            0x4000: 0x20040080,
	            0x5000: 0x1000080,
	            0x6000: 0x21000080,
	            0x7000: 0x40080,
	            0x8000: 0x1000000,
	            0x9000: 0x20040000,
	            0xa000: 0x20000080,
	            0xb000: 0x21040080,
	            0xc000: 0x21040000,
	            0xd000: 0x0,
	            0xe000: 0x1040080,
	            0xf000: 0x21000000,
	            0x800: 0x1040080,
	            0x1800: 0x21000080,
	            0x2800: 0x80,
	            0x3800: 0x1040000,
	            0x4800: 0x40000,
	            0x5800: 0x20040080,
	            0x6800: 0x21040000,
	            0x7800: 0x20000000,
	            0x8800: 0x20040000,
	            0x9800: 0x0,
	            0xa800: 0x21040080,
	            0xb800: 0x1000080,
	            0xc800: 0x20000080,
	            0xd800: 0x21000000,
	            0xe800: 0x1000000,
	            0xf800: 0x40080,
	            0x10000: 0x40000,
	            0x11000: 0x80,
	            0x12000: 0x20000000,
	            0x13000: 0x21000080,
	            0x14000: 0x1000080,
	            0x15000: 0x21040000,
	            0x16000: 0x20040080,
	            0x17000: 0x1000000,
	            0x18000: 0x21040080,
	            0x19000: 0x21000000,
	            0x1a000: 0x1040000,
	            0x1b000: 0x20040000,
	            0x1c000: 0x40080,
	            0x1d000: 0x20000080,
	            0x1e000: 0x0,
	            0x1f000: 0x1040080,
	            0x10800: 0x21000080,
	            0x11800: 0x1000000,
	            0x12800: 0x1040000,
	            0x13800: 0x20040080,
	            0x14800: 0x20000000,
	            0x15800: 0x1040080,
	            0x16800: 0x80,
	            0x17800: 0x21040000,
	            0x18800: 0x40080,
	            0x19800: 0x21040080,
	            0x1a800: 0x0,
	            0x1b800: 0x21000000,
	            0x1c800: 0x1000080,
	            0x1d800: 0x40000,
	            0x1e800: 0x20040000,
	            0x1f800: 0x20000080
	        },
	        {
	            0x0: 0x10000008,
	            0x100: 0x2000,
	            0x200: 0x10200000,
	            0x300: 0x10202008,
	            0x400: 0x10002000,
	            0x500: 0x200000,
	            0x600: 0x200008,
	            0x700: 0x10000000,
	            0x800: 0x0,
	            0x900: 0x10002008,
	            0xa00: 0x202000,
	            0xb00: 0x8,
	            0xc00: 0x10200008,
	            0xd00: 0x202008,
	            0xe00: 0x2008,
	            0xf00: 0x10202000,
	            0x80: 0x10200000,
	            0x180: 0x10202008,
	            0x280: 0x8,
	            0x380: 0x200000,
	            0x480: 0x202008,
	            0x580: 0x10000008,
	            0x680: 0x10002000,
	            0x780: 0x2008,
	            0x880: 0x200008,
	            0x980: 0x2000,
	            0xa80: 0x10002008,
	            0xb80: 0x10200008,
	            0xc80: 0x0,
	            0xd80: 0x10202000,
	            0xe80: 0x202000,
	            0xf80: 0x10000000,
	            0x1000: 0x10002000,
	            0x1100: 0x10200008,
	            0x1200: 0x10202008,
	            0x1300: 0x2008,
	            0x1400: 0x200000,
	            0x1500: 0x10000000,
	            0x1600: 0x10000008,
	            0x1700: 0x202000,
	            0x1800: 0x202008,
	            0x1900: 0x0,
	            0x1a00: 0x8,
	            0x1b00: 0x10200000,
	            0x1c00: 0x2000,
	            0x1d00: 0x10002008,
	            0x1e00: 0x10202000,
	            0x1f00: 0x200008,
	            0x1080: 0x8,
	            0x1180: 0x202000,
	            0x1280: 0x200000,
	            0x1380: 0x10000008,
	            0x1480: 0x10002000,
	            0x1580: 0x2008,
	            0x1680: 0x10202008,
	            0x1780: 0x10200000,
	            0x1880: 0x10202000,
	            0x1980: 0x10200008,
	            0x1a80: 0x2000,
	            0x1b80: 0x202008,
	            0x1c80: 0x200008,
	            0x1d80: 0x0,
	            0x1e80: 0x10000000,
	            0x1f80: 0x10002008
	        },
	        {
	            0x0: 0x100000,
	            0x10: 0x2000401,
	            0x20: 0x400,
	            0x30: 0x100401,
	            0x40: 0x2100401,
	            0x50: 0x0,
	            0x60: 0x1,
	            0x70: 0x2100001,
	            0x80: 0x2000400,
	            0x90: 0x100001,
	            0xa0: 0x2000001,
	            0xb0: 0x2100400,
	            0xc0: 0x2100000,
	            0xd0: 0x401,
	            0xe0: 0x100400,
	            0xf0: 0x2000000,
	            0x8: 0x2100001,
	            0x18: 0x0,
	            0x28: 0x2000401,
	            0x38: 0x2100400,
	            0x48: 0x100000,
	            0x58: 0x2000001,
	            0x68: 0x2000000,
	            0x78: 0x401,
	            0x88: 0x100401,
	            0x98: 0x2000400,
	            0xa8: 0x2100000,
	            0xb8: 0x100001,
	            0xc8: 0x400,
	            0xd8: 0x2100401,
	            0xe8: 0x1,
	            0xf8: 0x100400,
	            0x100: 0x2000000,
	            0x110: 0x100000,
	            0x120: 0x2000401,
	            0x130: 0x2100001,
	            0x140: 0x100001,
	            0x150: 0x2000400,
	            0x160: 0x2100400,
	            0x170: 0x100401,
	            0x180: 0x401,
	            0x190: 0x2100401,
	            0x1a0: 0x100400,
	            0x1b0: 0x1,
	            0x1c0: 0x0,
	            0x1d0: 0x2100000,
	            0x1e0: 0x2000001,
	            0x1f0: 0x400,
	            0x108: 0x100400,
	            0x118: 0x2000401,
	            0x128: 0x2100001,
	            0x138: 0x1,
	            0x148: 0x2000000,
	            0x158: 0x100000,
	            0x168: 0x401,
	            0x178: 0x2100400,
	            0x188: 0x2000001,
	            0x198: 0x2100000,
	            0x1a8: 0x0,
	            0x1b8: 0x2100401,
	            0x1c8: 0x100401,
	            0x1d8: 0x400,
	            0x1e8: 0x2000400,
	            0x1f8: 0x100001
	        },
	        {
	            0x0: 0x8000820,
	            0x1: 0x20000,
	            0x2: 0x8000000,
	            0x3: 0x20,
	            0x4: 0x20020,
	            0x5: 0x8020820,
	            0x6: 0x8020800,
	            0x7: 0x800,
	            0x8: 0x8020000,
	            0x9: 0x8000800,
	            0xa: 0x20800,
	            0xb: 0x8020020,
	            0xc: 0x820,
	            0xd: 0x0,
	            0xe: 0x8000020,
	            0xf: 0x20820,
	            0x80000000: 0x800,
	            0x80000001: 0x8020820,
	            0x80000002: 0x8000820,
	            0x80000003: 0x8000000,
	            0x80000004: 0x8020000,
	            0x80000005: 0x20800,
	            0x80000006: 0x20820,
	            0x80000007: 0x20,
	            0x80000008: 0x8000020,
	            0x80000009: 0x820,
	            0x8000000a: 0x20020,
	            0x8000000b: 0x8020800,
	            0x8000000c: 0x0,
	            0x8000000d: 0x8020020,
	            0x8000000e: 0x8000800,
	            0x8000000f: 0x20000,
	            0x10: 0x20820,
	            0x11: 0x8020800,
	            0x12: 0x20,
	            0x13: 0x800,
	            0x14: 0x8000800,
	            0x15: 0x8000020,
	            0x16: 0x8020020,
	            0x17: 0x20000,
	            0x18: 0x0,
	            0x19: 0x20020,
	            0x1a: 0x8020000,
	            0x1b: 0x8000820,
	            0x1c: 0x8020820,
	            0x1d: 0x20800,
	            0x1e: 0x820,
	            0x1f: 0x8000000,
	            0x80000010: 0x20000,
	            0x80000011: 0x800,
	            0x80000012: 0x8020020,
	            0x80000013: 0x20820,
	            0x80000014: 0x20,
	            0x80000015: 0x8020000,
	            0x80000016: 0x8000000,
	            0x80000017: 0x8000820,
	            0x80000018: 0x8020820,
	            0x80000019: 0x8000020,
	            0x8000001a: 0x8000800,
	            0x8000001b: 0x0,
	            0x8000001c: 0x20800,
	            0x8000001d: 0x820,
	            0x8000001e: 0x20020,
	            0x8000001f: 0x8020800
	        }
	    ];

	    // Masks that select the SBOX input
	    var SBOX_MASK = [
	        0xf8000001, 0x1f800000, 0x01f80000, 0x001f8000,
	        0x0001f800, 0x00001f80, 0x000001f8, 0x8000001f
	    ];

	    /**
	     * DES block cipher algorithm.
	     */
	    var DES = C_algo.DES = BlockCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var key = this._key;
	            var keyWords = key.words;

	            // Select 56 bits according to PC1
	            var keyBits = [];
	            for (var i = 0; i < 56; i++) {
	                var keyBitPos = PC1[i] - 1;
	                keyBits[i] = (keyWords[keyBitPos >>> 5] >>> (31 - keyBitPos % 32)) & 1;
	            }

	            // Assemble 16 subkeys
	            var subKeys = this._subKeys = [];
	            for (var nSubKey = 0; nSubKey < 16; nSubKey++) {
	                // Create subkey
	                var subKey = subKeys[nSubKey] = [];

	                // Shortcut
	                var bitShift = BIT_SHIFTS[nSubKey];

	                // Select 48 bits according to PC2
	                for (var i = 0; i < 24; i++) {
	                    // Select from the left 28 key bits
	                    subKey[(i / 6) | 0] |= keyBits[((PC2[i] - 1) + bitShift) % 28] << (31 - i % 6);

	                    // Select from the right 28 key bits
	                    subKey[4 + ((i / 6) | 0)] |= keyBits[28 + (((PC2[i + 24] - 1) + bitShift) % 28)] << (31 - i % 6);
	                }

	                // Since each subkey is applied to an expanded 32-bit input,
	                // the subkey can be broken into 8 values scaled to 32-bits,
	                // which allows the key to be used without expansion
	                subKey[0] = (subKey[0] << 1) | (subKey[0] >>> 31);
	                for (var i = 1; i < 7; i++) {
	                    subKey[i] = subKey[i] >>> ((i - 1) * 4 + 3);
	                }
	                subKey[7] = (subKey[7] << 5) | (subKey[7] >>> 27);
	            }

	            // Compute inverse subkeys
	            var invSubKeys = this._invSubKeys = [];
	            for (var i = 0; i < 16; i++) {
	                invSubKeys[i] = subKeys[15 - i];
	            }
	        },

	        encryptBlock: function (M, offset) {
	            this._doCryptBlock(M, offset, this._subKeys);
	        },

	        decryptBlock: function (M, offset) {
	            this._doCryptBlock(M, offset, this._invSubKeys);
	        },

	        _doCryptBlock: function (M, offset, subKeys) {
	            // Get input
	            this._lBlock = M[offset];
	            this._rBlock = M[offset + 1];

	            // Initial permutation
	            exchangeLR.call(this, 4,  0x0f0f0f0f);
	            exchangeLR.call(this, 16, 0x0000ffff);
	            exchangeRL.call(this, 2,  0x33333333);
	            exchangeRL.call(this, 8,  0x00ff00ff);
	            exchangeLR.call(this, 1,  0x55555555);

	            // Rounds
	            for (var round = 0; round < 16; round++) {
	                // Shortcuts
	                var subKey = subKeys[round];
	                var lBlock = this._lBlock;
	                var rBlock = this._rBlock;

	                // Feistel function
	                var f = 0;
	                for (var i = 0; i < 8; i++) {
	                    f |= SBOX_P[i][((rBlock ^ subKey[i]) & SBOX_MASK[i]) >>> 0];
	                }
	                this._lBlock = rBlock;
	                this._rBlock = lBlock ^ f;
	            }

	            // Undo swap from last round
	            var t = this._lBlock;
	            this._lBlock = this._rBlock;
	            this._rBlock = t;

	            // Final permutation
	            exchangeLR.call(this, 1,  0x55555555);
	            exchangeRL.call(this, 8,  0x00ff00ff);
	            exchangeRL.call(this, 2,  0x33333333);
	            exchangeLR.call(this, 16, 0x0000ffff);
	            exchangeLR.call(this, 4,  0x0f0f0f0f);

	            // Set output
	            M[offset] = this._lBlock;
	            M[offset + 1] = this._rBlock;
	        },

	        keySize: 64/32,

	        ivSize: 64/32,

	        blockSize: 64/32
	    });

	    // Swap bits across the left and right words
	    function exchangeLR(offset, mask) {
	        var t = ((this._lBlock >>> offset) ^ this._rBlock) & mask;
	        this._rBlock ^= t;
	        this._lBlock ^= t << offset;
	    }

	    function exchangeRL(offset, mask) {
	        var t = ((this._rBlock >>> offset) ^ this._lBlock) & mask;
	        this._lBlock ^= t;
	        this._rBlock ^= t << offset;
	    }

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.DES.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.DES.decrypt(ciphertext, key, cfg);
	     */
	    C.DES = BlockCipher._createHelper(DES);

	    /**
	     * Triple-DES block cipher algorithm.
	     */
	    var TripleDES = C_algo.TripleDES = BlockCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var key = this._key;
	            var keyWords = key.words;
	            // Make sure the key length is valid (64, 128 or >= 192 bit)
	            if (keyWords.length !== 2 && keyWords.length !== 4 && keyWords.length < 6) {
	                throw new Error('Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.');
	            }

	            // Extend the key according to the keying options defined in 3DES standard
	            var key1 = keyWords.slice(0, 2);
	            var key2 = keyWords.length < 4 ? keyWords.slice(0, 2) : keyWords.slice(2, 4);
	            var key3 = keyWords.length < 6 ? keyWords.slice(0, 2) : keyWords.slice(4, 6);

	            // Create DES instances
	            this._des1 = DES.createEncryptor(WordArray.create(key1));
	            this._des2 = DES.createEncryptor(WordArray.create(key2));
	            this._des3 = DES.createEncryptor(WordArray.create(key3));
	        },

	        encryptBlock: function (M, offset) {
	            this._des1.encryptBlock(M, offset);
	            this._des2.decryptBlock(M, offset);
	            this._des3.encryptBlock(M, offset);
	        },

	        decryptBlock: function (M, offset) {
	            this._des3.decryptBlock(M, offset);
	            this._des2.encryptBlock(M, offset);
	            this._des1.decryptBlock(M, offset);
	        },

	        keySize: 192/32,

	        ivSize: 64/32,

	        blockSize: 64/32
	    });

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.TripleDES.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.TripleDES.decrypt(ciphertext, key, cfg);
	     */
	    C.TripleDES = BlockCipher._createHelper(TripleDES);
	}());


	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var StreamCipher = C_lib.StreamCipher;
	    var C_algo = C.algo;

	    /**
	     * RC4 stream cipher algorithm.
	     */
	    var RC4 = C_algo.RC4 = StreamCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var key = this._key;
	            var keyWords = key.words;
	            var keySigBytes = key.sigBytes;

	            // Init sbox
	            var S = this._S = [];
	            for (var i = 0; i < 256; i++) {
	                S[i] = i;
	            }

	            // Key setup
	            for (var i = 0, j = 0; i < 256; i++) {
	                var keyByteIndex = i % keySigBytes;
	                var keyByte = (keyWords[keyByteIndex >>> 2] >>> (24 - (keyByteIndex % 4) * 8)) & 0xff;

	                j = (j + S[i] + keyByte) % 256;

	                // Swap
	                var t = S[i];
	                S[i] = S[j];
	                S[j] = t;
	            }

	            // Counters
	            this._i = this._j = 0;
	        },

	        _doProcessBlock: function (M, offset) {
	            M[offset] ^= generateKeystreamWord.call(this);
	        },

	        keySize: 256/32,

	        ivSize: 0
	    });

	    function generateKeystreamWord() {
	        // Shortcuts
	        var S = this._S;
	        var i = this._i;
	        var j = this._j;

	        // Generate keystream word
	        var keystreamWord = 0;
	        for (var n = 0; n < 4; n++) {
	            i = (i + 1) % 256;
	            j = (j + S[i]) % 256;

	            // Swap
	            var t = S[i];
	            S[i] = S[j];
	            S[j] = t;

	            keystreamWord |= S[(S[i] + S[j]) % 256] << (24 - n * 8);
	        }

	        // Update counters
	        this._i = i;
	        this._j = j;

	        return keystreamWord;
	    }

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.RC4.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.RC4.decrypt(ciphertext, key, cfg);
	     */
	    C.RC4 = StreamCipher._createHelper(RC4);

	    /**
	     * Modified RC4 stream cipher algorithm.
	     */
	    var RC4Drop = C_algo.RC4Drop = RC4.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {number} drop The number of keystream words to drop. Default 192
	         */
	        cfg: RC4.cfg.extend({
	            drop: 192
	        }),

	        _doReset: function () {
	            RC4._doReset.call(this);

	            // Drop
	            for (var i = this.cfg.drop; i > 0; i--) {
	                generateKeystreamWord.call(this);
	            }
	        }
	    });

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.RC4Drop.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.RC4Drop.decrypt(ciphertext, key, cfg);
	     */
	    C.RC4Drop = StreamCipher._createHelper(RC4Drop);
	}());


	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var StreamCipher = C_lib.StreamCipher;
	    var C_algo = C.algo;

	    // Reusable objects
	    var S  = [];
	    var C_ = [];
	    var G  = [];

	    /**
	     * Rabbit stream cipher algorithm
	     */
	    var Rabbit = C_algo.Rabbit = StreamCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var K = this._key.words;
	            var iv = this.cfg.iv;

	            // Swap endian
	            for (var i = 0; i < 4; i++) {
	                K[i] = (((K[i] << 8)  | (K[i] >>> 24)) & 0x00ff00ff) |
	                       (((K[i] << 24) | (K[i] >>> 8))  & 0xff00ff00);
	            }

	            // Generate initial state values
	            var X = this._X = [
	                K[0], (K[3] << 16) | (K[2] >>> 16),
	                K[1], (K[0] << 16) | (K[3] >>> 16),
	                K[2], (K[1] << 16) | (K[0] >>> 16),
	                K[3], (K[2] << 16) | (K[1] >>> 16)
	            ];

	            // Generate initial counter values
	            var C = this._C = [
	                (K[2] << 16) | (K[2] >>> 16), (K[0] & 0xffff0000) | (K[1] & 0x0000ffff),
	                (K[3] << 16) | (K[3] >>> 16), (K[1] & 0xffff0000) | (K[2] & 0x0000ffff),
	                (K[0] << 16) | (K[0] >>> 16), (K[2] & 0xffff0000) | (K[3] & 0x0000ffff),
	                (K[1] << 16) | (K[1] >>> 16), (K[3] & 0xffff0000) | (K[0] & 0x0000ffff)
	            ];

	            // Carry bit
	            this._b = 0;

	            // Iterate the system four times
	            for (var i = 0; i < 4; i++) {
	                nextState.call(this);
	            }

	            // Modify the counters
	            for (var i = 0; i < 8; i++) {
	                C[i] ^= X[(i + 4) & 7];
	            }

	            // IV setup
	            if (iv) {
	                // Shortcuts
	                var IV = iv.words;
	                var IV_0 = IV[0];
	                var IV_1 = IV[1];

	                // Generate four subvectors
	                var i0 = (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff) | (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
	                var i2 = (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff) | (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
	                var i1 = (i0 >>> 16) | (i2 & 0xffff0000);
	                var i3 = (i2 << 16)  | (i0 & 0x0000ffff);

	                // Modify counter values
	                C[0] ^= i0;
	                C[1] ^= i1;
	                C[2] ^= i2;
	                C[3] ^= i3;
	                C[4] ^= i0;
	                C[5] ^= i1;
	                C[6] ^= i2;
	                C[7] ^= i3;

	                // Iterate the system four times
	                for (var i = 0; i < 4; i++) {
	                    nextState.call(this);
	                }
	            }
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var X = this._X;

	            // Iterate the system
	            nextState.call(this);

	            // Generate four keystream words
	            S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
	            S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
	            S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
	            S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);

	            for (var i = 0; i < 4; i++) {
	                // Swap endian
	                S[i] = (((S[i] << 8)  | (S[i] >>> 24)) & 0x00ff00ff) |
	                       (((S[i] << 24) | (S[i] >>> 8))  & 0xff00ff00);

	                // Encrypt
	                M[offset + i] ^= S[i];
	            }
	        },

	        blockSize: 128/32,

	        ivSize: 64/32
	    });

	    function nextState() {
	        // Shortcuts
	        var X = this._X;
	        var C = this._C;

	        // Save old counter values
	        for (var i = 0; i < 8; i++) {
	            C_[i] = C[i];
	        }

	        // Calculate new counter values
	        C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
	        C[1] = (C[1] + 0xd34d34d3 + ((C[0] >>> 0) < (C_[0] >>> 0) ? 1 : 0)) | 0;
	        C[2] = (C[2] + 0x34d34d34 + ((C[1] >>> 0) < (C_[1] >>> 0) ? 1 : 0)) | 0;
	        C[3] = (C[3] + 0x4d34d34d + ((C[2] >>> 0) < (C_[2] >>> 0) ? 1 : 0)) | 0;
	        C[4] = (C[4] + 0xd34d34d3 + ((C[3] >>> 0) < (C_[3] >>> 0) ? 1 : 0)) | 0;
	        C[5] = (C[5] + 0x34d34d34 + ((C[4] >>> 0) < (C_[4] >>> 0) ? 1 : 0)) | 0;
	        C[6] = (C[6] + 0x4d34d34d + ((C[5] >>> 0) < (C_[5] >>> 0) ? 1 : 0)) | 0;
	        C[7] = (C[7] + 0xd34d34d3 + ((C[6] >>> 0) < (C_[6] >>> 0) ? 1 : 0)) | 0;
	        this._b = (C[7] >>> 0) < (C_[7] >>> 0) ? 1 : 0;

	        // Calculate the g-values
	        for (var i = 0; i < 8; i++) {
	            var gx = X[i] + C[i];

	            // Construct high and low argument for squaring
	            var ga = gx & 0xffff;
	            var gb = gx >>> 16;

	            // Calculate high and low result of squaring
	            var gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
	            var gl = (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);

	            // High XOR low
	            G[i] = gh ^ gl;
	        }

	        // Calculate new state values
	        X[0] = (G[0] + ((G[7] << 16) | (G[7] >>> 16)) + ((G[6] << 16) | (G[6] >>> 16))) | 0;
	        X[1] = (G[1] + ((G[0] << 8)  | (G[0] >>> 24)) + G[7]) | 0;
	        X[2] = (G[2] + ((G[1] << 16) | (G[1] >>> 16)) + ((G[0] << 16) | (G[0] >>> 16))) | 0;
	        X[3] = (G[3] + ((G[2] << 8)  | (G[2] >>> 24)) + G[1]) | 0;
	        X[4] = (G[4] + ((G[3] << 16) | (G[3] >>> 16)) + ((G[2] << 16) | (G[2] >>> 16))) | 0;
	        X[5] = (G[5] + ((G[4] << 8)  | (G[4] >>> 24)) + G[3]) | 0;
	        X[6] = (G[6] + ((G[5] << 16) | (G[5] >>> 16)) + ((G[4] << 16) | (G[4] >>> 16))) | 0;
	        X[7] = (G[7] + ((G[6] << 8)  | (G[6] >>> 24)) + G[5]) | 0;
	    }

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.Rabbit.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.Rabbit.decrypt(ciphertext, key, cfg);
	     */
	    C.Rabbit = StreamCipher._createHelper(Rabbit);
	}());


	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var StreamCipher = C_lib.StreamCipher;
	    var C_algo = C.algo;

	    // Reusable objects
	    var S  = [];
	    var C_ = [];
	    var G  = [];

	    /**
	     * Rabbit stream cipher algorithm.
	     *
	     * This is a legacy version that neglected to convert the key to little-endian.
	     * This error doesn't affect the cipher's security,
	     * but it does affect its compatibility with other implementations.
	     */
	    var RabbitLegacy = C_algo.RabbitLegacy = StreamCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var K = this._key.words;
	            var iv = this.cfg.iv;

	            // Generate initial state values
	            var X = this._X = [
	                K[0], (K[3] << 16) | (K[2] >>> 16),
	                K[1], (K[0] << 16) | (K[3] >>> 16),
	                K[2], (K[1] << 16) | (K[0] >>> 16),
	                K[3], (K[2] << 16) | (K[1] >>> 16)
	            ];

	            // Generate initial counter values
	            var C = this._C = [
	                (K[2] << 16) | (K[2] >>> 16), (K[0] & 0xffff0000) | (K[1] & 0x0000ffff),
	                (K[3] << 16) | (K[3] >>> 16), (K[1] & 0xffff0000) | (K[2] & 0x0000ffff),
	                (K[0] << 16) | (K[0] >>> 16), (K[2] & 0xffff0000) | (K[3] & 0x0000ffff),
	                (K[1] << 16) | (K[1] >>> 16), (K[3] & 0xffff0000) | (K[0] & 0x0000ffff)
	            ];

	            // Carry bit
	            this._b = 0;

	            // Iterate the system four times
	            for (var i = 0; i < 4; i++) {
	                nextState.call(this);
	            }

	            // Modify the counters
	            for (var i = 0; i < 8; i++) {
	                C[i] ^= X[(i + 4) & 7];
	            }

	            // IV setup
	            if (iv) {
	                // Shortcuts
	                var IV = iv.words;
	                var IV_0 = IV[0];
	                var IV_1 = IV[1];

	                // Generate four subvectors
	                var i0 = (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff) | (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
	                var i2 = (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff) | (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
	                var i1 = (i0 >>> 16) | (i2 & 0xffff0000);
	                var i3 = (i2 << 16)  | (i0 & 0x0000ffff);

	                // Modify counter values
	                C[0] ^= i0;
	                C[1] ^= i1;
	                C[2] ^= i2;
	                C[3] ^= i3;
	                C[4] ^= i0;
	                C[5] ^= i1;
	                C[6] ^= i2;
	                C[7] ^= i3;

	                // Iterate the system four times
	                for (var i = 0; i < 4; i++) {
	                    nextState.call(this);
	                }
	            }
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var X = this._X;

	            // Iterate the system
	            nextState.call(this);

	            // Generate four keystream words
	            S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
	            S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
	            S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
	            S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);

	            for (var i = 0; i < 4; i++) {
	                // Swap endian
	                S[i] = (((S[i] << 8)  | (S[i] >>> 24)) & 0x00ff00ff) |
	                       (((S[i] << 24) | (S[i] >>> 8))  & 0xff00ff00);

	                // Encrypt
	                M[offset + i] ^= S[i];
	            }
	        },

	        blockSize: 128/32,

	        ivSize: 64/32
	    });

	    function nextState() {
	        // Shortcuts
	        var X = this._X;
	        var C = this._C;

	        // Save old counter values
	        for (var i = 0; i < 8; i++) {
	            C_[i] = C[i];
	        }

	        // Calculate new counter values
	        C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
	        C[1] = (C[1] + 0xd34d34d3 + ((C[0] >>> 0) < (C_[0] >>> 0) ? 1 : 0)) | 0;
	        C[2] = (C[2] + 0x34d34d34 + ((C[1] >>> 0) < (C_[1] >>> 0) ? 1 : 0)) | 0;
	        C[3] = (C[3] + 0x4d34d34d + ((C[2] >>> 0) < (C_[2] >>> 0) ? 1 : 0)) | 0;
	        C[4] = (C[4] + 0xd34d34d3 + ((C[3] >>> 0) < (C_[3] >>> 0) ? 1 : 0)) | 0;
	        C[5] = (C[5] + 0x34d34d34 + ((C[4] >>> 0) < (C_[4] >>> 0) ? 1 : 0)) | 0;
	        C[6] = (C[6] + 0x4d34d34d + ((C[5] >>> 0) < (C_[5] >>> 0) ? 1 : 0)) | 0;
	        C[7] = (C[7] + 0xd34d34d3 + ((C[6] >>> 0) < (C_[6] >>> 0) ? 1 : 0)) | 0;
	        this._b = (C[7] >>> 0) < (C_[7] >>> 0) ? 1 : 0;

	        // Calculate the g-values
	        for (var i = 0; i < 8; i++) {
	            var gx = X[i] + C[i];

	            // Construct high and low argument for squaring
	            var ga = gx & 0xffff;
	            var gb = gx >>> 16;

	            // Calculate high and low result of squaring
	            var gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
	            var gl = (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);

	            // High XOR low
	            G[i] = gh ^ gl;
	        }

	        // Calculate new state values
	        X[0] = (G[0] + ((G[7] << 16) | (G[7] >>> 16)) + ((G[6] << 16) | (G[6] >>> 16))) | 0;
	        X[1] = (G[1] + ((G[0] << 8)  | (G[0] >>> 24)) + G[7]) | 0;
	        X[2] = (G[2] + ((G[1] << 16) | (G[1] >>> 16)) + ((G[0] << 16) | (G[0] >>> 16))) | 0;
	        X[3] = (G[3] + ((G[2] << 8)  | (G[2] >>> 24)) + G[1]) | 0;
	        X[4] = (G[4] + ((G[3] << 16) | (G[3] >>> 16)) + ((G[2] << 16) | (G[2] >>> 16))) | 0;
	        X[5] = (G[5] + ((G[4] << 8)  | (G[4] >>> 24)) + G[3]) | 0;
	        X[6] = (G[6] + ((G[5] << 16) | (G[5] >>> 16)) + ((G[4] << 16) | (G[4] >>> 16))) | 0;
	        X[7] = (G[7] + ((G[6] << 8)  | (G[6] >>> 24)) + G[5]) | 0;
	    }

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.RabbitLegacy.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.RabbitLegacy.decrypt(ciphertext, key, cfg);
	     */
	    C.RabbitLegacy = StreamCipher._createHelper(RabbitLegacy);
	}());


	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var BlockCipher = C_lib.BlockCipher;
	    var C_algo = C.algo;

	    const N = 16;

	    //Origin pbox and sbox, derived from PI
	    const ORIG_P = [
	        0x243F6A88, 0x85A308D3, 0x13198A2E, 0x03707344,
	        0xA4093822, 0x299F31D0, 0x082EFA98, 0xEC4E6C89,
	        0x452821E6, 0x38D01377, 0xBE5466CF, 0x34E90C6C,
	        0xC0AC29B7, 0xC97C50DD, 0x3F84D5B5, 0xB5470917,
	        0x9216D5D9, 0x8979FB1B
	    ];

	    const ORIG_S = [
	        [   0xD1310BA6, 0x98DFB5AC, 0x2FFD72DB, 0xD01ADFB7,
	            0xB8E1AFED, 0x6A267E96, 0xBA7C9045, 0xF12C7F99,
	            0x24A19947, 0xB3916CF7, 0x0801F2E2, 0x858EFC16,
	            0x636920D8, 0x71574E69, 0xA458FEA3, 0xF4933D7E,
	            0x0D95748F, 0x728EB658, 0x718BCD58, 0x82154AEE,
	            0x7B54A41D, 0xC25A59B5, 0x9C30D539, 0x2AF26013,
	            0xC5D1B023, 0x286085F0, 0xCA417918, 0xB8DB38EF,
	            0x8E79DCB0, 0x603A180E, 0x6C9E0E8B, 0xB01E8A3E,
	            0xD71577C1, 0xBD314B27, 0x78AF2FDA, 0x55605C60,
	            0xE65525F3, 0xAA55AB94, 0x57489862, 0x63E81440,
	            0x55CA396A, 0x2AAB10B6, 0xB4CC5C34, 0x1141E8CE,
	            0xA15486AF, 0x7C72E993, 0xB3EE1411, 0x636FBC2A,
	            0x2BA9C55D, 0x741831F6, 0xCE5C3E16, 0x9B87931E,
	            0xAFD6BA33, 0x6C24CF5C, 0x7A325381, 0x28958677,
	            0x3B8F4898, 0x6B4BB9AF, 0xC4BFE81B, 0x66282193,
	            0x61D809CC, 0xFB21A991, 0x487CAC60, 0x5DEC8032,
	            0xEF845D5D, 0xE98575B1, 0xDC262302, 0xEB651B88,
	            0x23893E81, 0xD396ACC5, 0x0F6D6FF3, 0x83F44239,
	            0x2E0B4482, 0xA4842004, 0x69C8F04A, 0x9E1F9B5E,
	            0x21C66842, 0xF6E96C9A, 0x670C9C61, 0xABD388F0,
	            0x6A51A0D2, 0xD8542F68, 0x960FA728, 0xAB5133A3,
	            0x6EEF0B6C, 0x137A3BE4, 0xBA3BF050, 0x7EFB2A98,
	            0xA1F1651D, 0x39AF0176, 0x66CA593E, 0x82430E88,
	            0x8CEE8619, 0x456F9FB4, 0x7D84A5C3, 0x3B8B5EBE,
	            0xE06F75D8, 0x85C12073, 0x401A449F, 0x56C16AA6,
	            0x4ED3AA62, 0x363F7706, 0x1BFEDF72, 0x429B023D,
	            0x37D0D724, 0xD00A1248, 0xDB0FEAD3, 0x49F1C09B,
	            0x075372C9, 0x80991B7B, 0x25D479D8, 0xF6E8DEF7,
	            0xE3FE501A, 0xB6794C3B, 0x976CE0BD, 0x04C006BA,
	            0xC1A94FB6, 0x409F60C4, 0x5E5C9EC2, 0x196A2463,
	            0x68FB6FAF, 0x3E6C53B5, 0x1339B2EB, 0x3B52EC6F,
	            0x6DFC511F, 0x9B30952C, 0xCC814544, 0xAF5EBD09,
	            0xBEE3D004, 0xDE334AFD, 0x660F2807, 0x192E4BB3,
	            0xC0CBA857, 0x45C8740F, 0xD20B5F39, 0xB9D3FBDB,
	            0x5579C0BD, 0x1A60320A, 0xD6A100C6, 0x402C7279,
	            0x679F25FE, 0xFB1FA3CC, 0x8EA5E9F8, 0xDB3222F8,
	            0x3C7516DF, 0xFD616B15, 0x2F501EC8, 0xAD0552AB,
	            0x323DB5FA, 0xFD238760, 0x53317B48, 0x3E00DF82,
	            0x9E5C57BB, 0xCA6F8CA0, 0x1A87562E, 0xDF1769DB,
	            0xD542A8F6, 0x287EFFC3, 0xAC6732C6, 0x8C4F5573,
	            0x695B27B0, 0xBBCA58C8, 0xE1FFA35D, 0xB8F011A0,
	            0x10FA3D98, 0xFD2183B8, 0x4AFCB56C, 0x2DD1D35B,
	            0x9A53E479, 0xB6F84565, 0xD28E49BC, 0x4BFB9790,
	            0xE1DDF2DA, 0xA4CB7E33, 0x62FB1341, 0xCEE4C6E8,
	            0xEF20CADA, 0x36774C01, 0xD07E9EFE, 0x2BF11FB4,
	            0x95DBDA4D, 0xAE909198, 0xEAAD8E71, 0x6B93D5A0,
	            0xD08ED1D0, 0xAFC725E0, 0x8E3C5B2F, 0x8E7594B7,
	            0x8FF6E2FB, 0xF2122B64, 0x8888B812, 0x900DF01C,
	            0x4FAD5EA0, 0x688FC31C, 0xD1CFF191, 0xB3A8C1AD,
	            0x2F2F2218, 0xBE0E1777, 0xEA752DFE, 0x8B021FA1,
	            0xE5A0CC0F, 0xB56F74E8, 0x18ACF3D6, 0xCE89E299,
	            0xB4A84FE0, 0xFD13E0B7, 0x7CC43B81, 0xD2ADA8D9,
	            0x165FA266, 0x80957705, 0x93CC7314, 0x211A1477,
	            0xE6AD2065, 0x77B5FA86, 0xC75442F5, 0xFB9D35CF,
	            0xEBCDAF0C, 0x7B3E89A0, 0xD6411BD3, 0xAE1E7E49,
	            0x00250E2D, 0x2071B35E, 0x226800BB, 0x57B8E0AF,
	            0x2464369B, 0xF009B91E, 0x5563911D, 0x59DFA6AA,
	            0x78C14389, 0xD95A537F, 0x207D5BA2, 0x02E5B9C5,
	            0x83260376, 0x6295CFA9, 0x11C81968, 0x4E734A41,
	            0xB3472DCA, 0x7B14A94A, 0x1B510052, 0x9A532915,
	            0xD60F573F, 0xBC9BC6E4, 0x2B60A476, 0x81E67400,
	            0x08BA6FB5, 0x571BE91F, 0xF296EC6B, 0x2A0DD915,
	            0xB6636521, 0xE7B9F9B6, 0xFF34052E, 0xC5855664,
	            0x53B02D5D, 0xA99F8FA1, 0x08BA4799, 0x6E85076A   ],
	        [   0x4B7A70E9, 0xB5B32944, 0xDB75092E, 0xC4192623,
	            0xAD6EA6B0, 0x49A7DF7D, 0x9CEE60B8, 0x8FEDB266,
	            0xECAA8C71, 0x699A17FF, 0x5664526C, 0xC2B19EE1,
	            0x193602A5, 0x75094C29, 0xA0591340, 0xE4183A3E,
	            0x3F54989A, 0x5B429D65, 0x6B8FE4D6, 0x99F73FD6,
	            0xA1D29C07, 0xEFE830F5, 0x4D2D38E6, 0xF0255DC1,
	            0x4CDD2086, 0x8470EB26, 0x6382E9C6, 0x021ECC5E,
	            0x09686B3F, 0x3EBAEFC9, 0x3C971814, 0x6B6A70A1,
	            0x687F3584, 0x52A0E286, 0xB79C5305, 0xAA500737,
	            0x3E07841C, 0x7FDEAE5C, 0x8E7D44EC, 0x5716F2B8,
	            0xB03ADA37, 0xF0500C0D, 0xF01C1F04, 0x0200B3FF,
	            0xAE0CF51A, 0x3CB574B2, 0x25837A58, 0xDC0921BD,
	            0xD19113F9, 0x7CA92FF6, 0x94324773, 0x22F54701,
	            0x3AE5E581, 0x37C2DADC, 0xC8B57634, 0x9AF3DDA7,
	            0xA9446146, 0x0FD0030E, 0xECC8C73E, 0xA4751E41,
	            0xE238CD99, 0x3BEA0E2F, 0x3280BBA1, 0x183EB331,
	            0x4E548B38, 0x4F6DB908, 0x6F420D03, 0xF60A04BF,
	            0x2CB81290, 0x24977C79, 0x5679B072, 0xBCAF89AF,
	            0xDE9A771F, 0xD9930810, 0xB38BAE12, 0xDCCF3F2E,
	            0x5512721F, 0x2E6B7124, 0x501ADDE6, 0x9F84CD87,
	            0x7A584718, 0x7408DA17, 0xBC9F9ABC, 0xE94B7D8C,
	            0xEC7AEC3A, 0xDB851DFA, 0x63094366, 0xC464C3D2,
	            0xEF1C1847, 0x3215D908, 0xDD433B37, 0x24C2BA16,
	            0x12A14D43, 0x2A65C451, 0x50940002, 0x133AE4DD,
	            0x71DFF89E, 0x10314E55, 0x81AC77D6, 0x5F11199B,
	            0x043556F1, 0xD7A3C76B, 0x3C11183B, 0x5924A509,
	            0xF28FE6ED, 0x97F1FBFA, 0x9EBABF2C, 0x1E153C6E,
	            0x86E34570, 0xEAE96FB1, 0x860E5E0A, 0x5A3E2AB3,
	            0x771FE71C, 0x4E3D06FA, 0x2965DCB9, 0x99E71D0F,
	            0x803E89D6, 0x5266C825, 0x2E4CC978, 0x9C10B36A,
	            0xC6150EBA, 0x94E2EA78, 0xA5FC3C53, 0x1E0A2DF4,
	            0xF2F74EA7, 0x361D2B3D, 0x1939260F, 0x19C27960,
	            0x5223A708, 0xF71312B6, 0xEBADFE6E, 0xEAC31F66,
	            0xE3BC4595, 0xA67BC883, 0xB17F37D1, 0x018CFF28,
	            0xC332DDEF, 0xBE6C5AA5, 0x65582185, 0x68AB9802,
	            0xEECEA50F, 0xDB2F953B, 0x2AEF7DAD, 0x5B6E2F84,
	            0x1521B628, 0x29076170, 0xECDD4775, 0x619F1510,
	            0x13CCA830, 0xEB61BD96, 0x0334FE1E, 0xAA0363CF,
	            0xB5735C90, 0x4C70A239, 0xD59E9E0B, 0xCBAADE14,
	            0xEECC86BC, 0x60622CA7, 0x9CAB5CAB, 0xB2F3846E,
	            0x648B1EAF, 0x19BDF0CA, 0xA02369B9, 0x655ABB50,
	            0x40685A32, 0x3C2AB4B3, 0x319EE9D5, 0xC021B8F7,
	            0x9B540B19, 0x875FA099, 0x95F7997E, 0x623D7DA8,
	            0xF837889A, 0x97E32D77, 0x11ED935F, 0x16681281,
	            0x0E358829, 0xC7E61FD6, 0x96DEDFA1, 0x7858BA99,
	            0x57F584A5, 0x1B227263, 0x9B83C3FF, 0x1AC24696,
	            0xCDB30AEB, 0x532E3054, 0x8FD948E4, 0x6DBC3128,
	            0x58EBF2EF, 0x34C6FFEA, 0xFE28ED61, 0xEE7C3C73,
	            0x5D4A14D9, 0xE864B7E3, 0x42105D14, 0x203E13E0,
	            0x45EEE2B6, 0xA3AAABEA, 0xDB6C4F15, 0xFACB4FD0,
	            0xC742F442, 0xEF6ABBB5, 0x654F3B1D, 0x41CD2105,
	            0xD81E799E, 0x86854DC7, 0xE44B476A, 0x3D816250,
	            0xCF62A1F2, 0x5B8D2646, 0xFC8883A0, 0xC1C7B6A3,
	            0x7F1524C3, 0x69CB7492, 0x47848A0B, 0x5692B285,
	            0x095BBF00, 0xAD19489D, 0x1462B174, 0x23820E00,
	            0x58428D2A, 0x0C55F5EA, 0x1DADF43E, 0x233F7061,
	            0x3372F092, 0x8D937E41, 0xD65FECF1, 0x6C223BDB,
	            0x7CDE3759, 0xCBEE7460, 0x4085F2A7, 0xCE77326E,
	            0xA6078084, 0x19F8509E, 0xE8EFD855, 0x61D99735,
	            0xA969A7AA, 0xC50C06C2, 0x5A04ABFC, 0x800BCADC,
	            0x9E447A2E, 0xC3453484, 0xFDD56705, 0x0E1E9EC9,
	            0xDB73DBD3, 0x105588CD, 0x675FDA79, 0xE3674340,
	            0xC5C43465, 0x713E38D8, 0x3D28F89E, 0xF16DFF20,
	            0x153E21E7, 0x8FB03D4A, 0xE6E39F2B, 0xDB83ADF7   ],
	        [   0xE93D5A68, 0x948140F7, 0xF64C261C, 0x94692934,
	            0x411520F7, 0x7602D4F7, 0xBCF46B2E, 0xD4A20068,
	            0xD4082471, 0x3320F46A, 0x43B7D4B7, 0x500061AF,
	            0x1E39F62E, 0x97244546, 0x14214F74, 0xBF8B8840,
	            0x4D95FC1D, 0x96B591AF, 0x70F4DDD3, 0x66A02F45,
	            0xBFBC09EC, 0x03BD9785, 0x7FAC6DD0, 0x31CB8504,
	            0x96EB27B3, 0x55FD3941, 0xDA2547E6, 0xABCA0A9A,
	            0x28507825, 0x530429F4, 0x0A2C86DA, 0xE9B66DFB,
	            0x68DC1462, 0xD7486900, 0x680EC0A4, 0x27A18DEE,
	            0x4F3FFEA2, 0xE887AD8C, 0xB58CE006, 0x7AF4D6B6,
	            0xAACE1E7C, 0xD3375FEC, 0xCE78A399, 0x406B2A42,
	            0x20FE9E35, 0xD9F385B9, 0xEE39D7AB, 0x3B124E8B,
	            0x1DC9FAF7, 0x4B6D1856, 0x26A36631, 0xEAE397B2,
	            0x3A6EFA74, 0xDD5B4332, 0x6841E7F7, 0xCA7820FB,
	            0xFB0AF54E, 0xD8FEB397, 0x454056AC, 0xBA489527,
	            0x55533A3A, 0x20838D87, 0xFE6BA9B7, 0xD096954B,
	            0x55A867BC, 0xA1159A58, 0xCCA92963, 0x99E1DB33,
	            0xA62A4A56, 0x3F3125F9, 0x5EF47E1C, 0x9029317C,
	            0xFDF8E802, 0x04272F70, 0x80BB155C, 0x05282CE3,
	            0x95C11548, 0xE4C66D22, 0x48C1133F, 0xC70F86DC,
	            0x07F9C9EE, 0x41041F0F, 0x404779A4, 0x5D886E17,
	            0x325F51EB, 0xD59BC0D1, 0xF2BCC18F, 0x41113564,
	            0x257B7834, 0x602A9C60, 0xDFF8E8A3, 0x1F636C1B,
	            0x0E12B4C2, 0x02E1329E, 0xAF664FD1, 0xCAD18115,
	            0x6B2395E0, 0x333E92E1, 0x3B240B62, 0xEEBEB922,
	            0x85B2A20E, 0xE6BA0D99, 0xDE720C8C, 0x2DA2F728,
	            0xD0127845, 0x95B794FD, 0x647D0862, 0xE7CCF5F0,
	            0x5449A36F, 0x877D48FA, 0xC39DFD27, 0xF33E8D1E,
	            0x0A476341, 0x992EFF74, 0x3A6F6EAB, 0xF4F8FD37,
	            0xA812DC60, 0xA1EBDDF8, 0x991BE14C, 0xDB6E6B0D,
	            0xC67B5510, 0x6D672C37, 0x2765D43B, 0xDCD0E804,
	            0xF1290DC7, 0xCC00FFA3, 0xB5390F92, 0x690FED0B,
	            0x667B9FFB, 0xCEDB7D9C, 0xA091CF0B, 0xD9155EA3,
	            0xBB132F88, 0x515BAD24, 0x7B9479BF, 0x763BD6EB,
	            0x37392EB3, 0xCC115979, 0x8026E297, 0xF42E312D,
	            0x6842ADA7, 0xC66A2B3B, 0x12754CCC, 0x782EF11C,
	            0x6A124237, 0xB79251E7, 0x06A1BBE6, 0x4BFB6350,
	            0x1A6B1018, 0x11CAEDFA, 0x3D25BDD8, 0xE2E1C3C9,
	            0x44421659, 0x0A121386, 0xD90CEC6E, 0xD5ABEA2A,
	            0x64AF674E, 0xDA86A85F, 0xBEBFE988, 0x64E4C3FE,
	            0x9DBC8057, 0xF0F7C086, 0x60787BF8, 0x6003604D,
	            0xD1FD8346, 0xF6381FB0, 0x7745AE04, 0xD736FCCC,
	            0x83426B33, 0xF01EAB71, 0xB0804187, 0x3C005E5F,
	            0x77A057BE, 0xBDE8AE24, 0x55464299, 0xBF582E61,
	            0x4E58F48F, 0xF2DDFDA2, 0xF474EF38, 0x8789BDC2,
	            0x5366F9C3, 0xC8B38E74, 0xB475F255, 0x46FCD9B9,
	            0x7AEB2661, 0x8B1DDF84, 0x846A0E79, 0x915F95E2,
	            0x466E598E, 0x20B45770, 0x8CD55591, 0xC902DE4C,
	            0xB90BACE1, 0xBB8205D0, 0x11A86248, 0x7574A99E,
	            0xB77F19B6, 0xE0A9DC09, 0x662D09A1, 0xC4324633,
	            0xE85A1F02, 0x09F0BE8C, 0x4A99A025, 0x1D6EFE10,
	            0x1AB93D1D, 0x0BA5A4DF, 0xA186F20F, 0x2868F169,
	            0xDCB7DA83, 0x573906FE, 0xA1E2CE9B, 0x4FCD7F52,
	            0x50115E01, 0xA70683FA, 0xA002B5C4, 0x0DE6D027,
	            0x9AF88C27, 0x773F8641, 0xC3604C06, 0x61A806B5,
	            0xF0177A28, 0xC0F586E0, 0x006058AA, 0x30DC7D62,
	            0x11E69ED7, 0x2338EA63, 0x53C2DD94, 0xC2C21634,
	            0xBBCBEE56, 0x90BCB6DE, 0xEBFC7DA1, 0xCE591D76,
	            0x6F05E409, 0x4B7C0188, 0x39720A3D, 0x7C927C24,
	            0x86E3725F, 0x724D9DB9, 0x1AC15BB4, 0xD39EB8FC,
	            0xED545578, 0x08FCA5B5, 0xD83D7CD3, 0x4DAD0FC4,
	            0x1E50EF5E, 0xB161E6F8, 0xA28514D9, 0x6C51133C,
	            0x6FD5C7E7, 0x56E14EC4, 0x362ABFCE, 0xDDC6C837,
	            0xD79A3234, 0x92638212, 0x670EFA8E, 0x406000E0  ],
	        [   0x3A39CE37, 0xD3FAF5CF, 0xABC27737, 0x5AC52D1B,
	            0x5CB0679E, 0x4FA33742, 0xD3822740, 0x99BC9BBE,
	            0xD5118E9D, 0xBF0F7315, 0xD62D1C7E, 0xC700C47B,
	            0xB78C1B6B, 0x21A19045, 0xB26EB1BE, 0x6A366EB4,
	            0x5748AB2F, 0xBC946E79, 0xC6A376D2, 0x6549C2C8,
	            0x530FF8EE, 0x468DDE7D, 0xD5730A1D, 0x4CD04DC6,
	            0x2939BBDB, 0xA9BA4650, 0xAC9526E8, 0xBE5EE304,
	            0xA1FAD5F0, 0x6A2D519A, 0x63EF8CE2, 0x9A86EE22,
	            0xC089C2B8, 0x43242EF6, 0xA51E03AA, 0x9CF2D0A4,
	            0x83C061BA, 0x9BE96A4D, 0x8FE51550, 0xBA645BD6,
	            0x2826A2F9, 0xA73A3AE1, 0x4BA99586, 0xEF5562E9,
	            0xC72FEFD3, 0xF752F7DA, 0x3F046F69, 0x77FA0A59,
	            0x80E4A915, 0x87B08601, 0x9B09E6AD, 0x3B3EE593,
	            0xE990FD5A, 0x9E34D797, 0x2CF0B7D9, 0x022B8B51,
	            0x96D5AC3A, 0x017DA67D, 0xD1CF3ED6, 0x7C7D2D28,
	            0x1F9F25CF, 0xADF2B89B, 0x5AD6B472, 0x5A88F54C,
	            0xE029AC71, 0xE019A5E6, 0x47B0ACFD, 0xED93FA9B,
	            0xE8D3C48D, 0x283B57CC, 0xF8D56629, 0x79132E28,
	            0x785F0191, 0xED756055, 0xF7960E44, 0xE3D35E8C,
	            0x15056DD4, 0x88F46DBA, 0x03A16125, 0x0564F0BD,
	            0xC3EB9E15, 0x3C9057A2, 0x97271AEC, 0xA93A072A,
	            0x1B3F6D9B, 0x1E6321F5, 0xF59C66FB, 0x26DCF319,
	            0x7533D928, 0xB155FDF5, 0x03563482, 0x8ABA3CBB,
	            0x28517711, 0xC20AD9F8, 0xABCC5167, 0xCCAD925F,
	            0x4DE81751, 0x3830DC8E, 0x379D5862, 0x9320F991,
	            0xEA7A90C2, 0xFB3E7BCE, 0x5121CE64, 0x774FBE32,
	            0xA8B6E37E, 0xC3293D46, 0x48DE5369, 0x6413E680,
	            0xA2AE0810, 0xDD6DB224, 0x69852DFD, 0x09072166,
	            0xB39A460A, 0x6445C0DD, 0x586CDECF, 0x1C20C8AE,
	            0x5BBEF7DD, 0x1B588D40, 0xCCD2017F, 0x6BB4E3BB,
	            0xDDA26A7E, 0x3A59FF45, 0x3E350A44, 0xBCB4CDD5,
	            0x72EACEA8, 0xFA6484BB, 0x8D6612AE, 0xBF3C6F47,
	            0xD29BE463, 0x542F5D9E, 0xAEC2771B, 0xF64E6370,
	            0x740E0D8D, 0xE75B1357, 0xF8721671, 0xAF537D5D,
	            0x4040CB08, 0x4EB4E2CC, 0x34D2466A, 0x0115AF84,
	            0xE1B00428, 0x95983A1D, 0x06B89FB4, 0xCE6EA048,
	            0x6F3F3B82, 0x3520AB82, 0x011A1D4B, 0x277227F8,
	            0x611560B1, 0xE7933FDC, 0xBB3A792B, 0x344525BD,
	            0xA08839E1, 0x51CE794B, 0x2F32C9B7, 0xA01FBAC9,
	            0xE01CC87E, 0xBCC7D1F6, 0xCF0111C3, 0xA1E8AAC7,
	            0x1A908749, 0xD44FBD9A, 0xD0DADECB, 0xD50ADA38,
	            0x0339C32A, 0xC6913667, 0x8DF9317C, 0xE0B12B4F,
	            0xF79E59B7, 0x43F5BB3A, 0xF2D519FF, 0x27D9459C,
	            0xBF97222C, 0x15E6FC2A, 0x0F91FC71, 0x9B941525,
	            0xFAE59361, 0xCEB69CEB, 0xC2A86459, 0x12BAA8D1,
	            0xB6C1075E, 0xE3056A0C, 0x10D25065, 0xCB03A442,
	            0xE0EC6E0E, 0x1698DB3B, 0x4C98A0BE, 0x3278E964,
	            0x9F1F9532, 0xE0D392DF, 0xD3A0342B, 0x8971F21E,
	            0x1B0A7441, 0x4BA3348C, 0xC5BE7120, 0xC37632D8,
	            0xDF359F8D, 0x9B992F2E, 0xE60B6F47, 0x0FE3F11D,
	            0xE54CDA54, 0x1EDAD891, 0xCE6279CF, 0xCD3E7E6F,
	            0x1618B166, 0xFD2C1D05, 0x848FD2C5, 0xF6FB2299,
	            0xF523F357, 0xA6327623, 0x93A83531, 0x56CCCD02,
	            0xACF08162, 0x5A75EBB5, 0x6E163697, 0x88D273CC,
	            0xDE966292, 0x81B949D0, 0x4C50901B, 0x71C65614,
	            0xE6C6C7BD, 0x327A140A, 0x45E1D006, 0xC3F27B9A,
	            0xC9AA53FD, 0x62A80F00, 0xBB25BFE2, 0x35BDD2F6,
	            0x71126905, 0xB2040222, 0xB6CBCF7C, 0xCD769C2B,
	            0x53113EC0, 0x1640E3D3, 0x38ABBD60, 0x2547ADF0,
	            0xBA38209C, 0xF746CE76, 0x77AFA1C5, 0x20756060,
	            0x85CBFE4E, 0x8AE88DD8, 0x7AAAF9B0, 0x4CF9AA7E,
	            0x1948C25C, 0x02FB8A8C, 0x01C36AE4, 0xD6EBE1F9,
	            0x90D4F869, 0xA65CDEA0, 0x3F09252D, 0xC208E69F,
	            0xB74E6132, 0xCE77E25B, 0x578FDFE3, 0x3AC372E6  ]
	    ];

	    var BLOWFISH_CTX = {
	        pbox: [],
	        sbox: []
	    }

	    function F(ctx, x){
	        let a = (x >> 24) & 0xFF;
	        let b = (x >> 16) & 0xFF;
	        let c = (x >> 8) & 0xFF;
	        let d = x & 0xFF;

	        let y = ctx.sbox[0][a] + ctx.sbox[1][b];
	        y = y ^ ctx.sbox[2][c];
	        y = y + ctx.sbox[3][d];

	        return y;
	    }

	    function BlowFish_Encrypt(ctx, left, right){
	        let Xl = left;
	        let Xr = right;
	        let temp;

	        for(let i = 0; i < N; ++i){
	            Xl = Xl ^ ctx.pbox[i];
	            Xr = F(ctx, Xl) ^ Xr;

	            temp = Xl;
	            Xl = Xr;
	            Xr = temp;
	        }

	        temp = Xl;
	        Xl = Xr;
	        Xr = temp;

	        Xr = Xr ^ ctx.pbox[N];
	        Xl = Xl ^ ctx.pbox[N + 1];

	        return {left: Xl, right: Xr};
	    }

	    function BlowFish_Decrypt(ctx, left, right){
	        let Xl = left;
	        let Xr = right;
	        let temp;

	        for(let i = N + 1; i > 1; --i){
	            Xl = Xl ^ ctx.pbox[i];
	            Xr = F(ctx, Xl) ^ Xr;

	            temp = Xl;
	            Xl = Xr;
	            Xr = temp;
	        }

	        temp = Xl;
	        Xl = Xr;
	        Xr = temp;

	        Xr = Xr ^ ctx.pbox[1];
	        Xl = Xl ^ ctx.pbox[0];

	        return {left: Xl, right: Xr};
	    }

	    /**
	     * Initialization ctx's pbox and sbox.
	     *
	     * @param {Object} ctx The object has pbox and sbox.
	     * @param {Array} key An array of 32-bit words.
	     * @param {int} keysize The length of the key.
	     *
	     * @example
	     *
	     *     BlowFishInit(BLOWFISH_CTX, key, 128/32);
	     */
	    function BlowFishInit(ctx, key, keysize)
	    {
	        for(let Row = 0; Row < 4; Row++)
	        {
	            ctx.sbox[Row] = [];
	            for(let Col = 0; Col < 256; Col++)
	            {
	                ctx.sbox[Row][Col] = ORIG_S[Row][Col];
	            }
	        }

	        let keyIndex = 0;
	        for(let index = 0; index < N + 2; index++)
	        {
	            ctx.pbox[index] = ORIG_P[index] ^ key[keyIndex];
	            keyIndex++;
	            if(keyIndex >= keysize)
	            {
	                keyIndex = 0;
	            }
	        }

	        let Data1 = 0;
	        let Data2 = 0;
	        let res = 0;
	        for(let i = 0; i < N + 2; i += 2)
	        {
	            res = BlowFish_Encrypt(ctx, Data1, Data2);
	            Data1 = res.left;
	            Data2 = res.right;
	            ctx.pbox[i] = Data1;
	            ctx.pbox[i + 1] = Data2;
	        }

	        for(let i = 0; i < 4; i++)
	        {
	            for(let j = 0; j < 256; j += 2)
	            {
	                res = BlowFish_Encrypt(ctx, Data1, Data2);
	                Data1 = res.left;
	                Data2 = res.right;
	                ctx.sbox[i][j] = Data1;
	                ctx.sbox[i][j + 1] = Data2;
	            }
	        }

	        return true;
	    }

	    /**
	     * Blowfish block cipher algorithm.
	     */
	    var Blowfish = C_algo.Blowfish = BlockCipher.extend({
	        _doReset: function () {
	            // Skip reset of nRounds has been set before and key did not change
	            if (this._keyPriorReset === this._key) {
	                return;
	            }

	            // Shortcuts
	            var key = this._keyPriorReset = this._key;
	            var keyWords = key.words;
	            var keySize = key.sigBytes / 4;

	            //Initialization pbox and sbox
	            BlowFishInit(BLOWFISH_CTX, keyWords, keySize);
	        },

	        encryptBlock: function (M, offset) {
	            var res = BlowFish_Encrypt(BLOWFISH_CTX, M[offset], M[offset + 1]);
	            M[offset] = res.left;
	            M[offset + 1] = res.right;
	        },

	        decryptBlock: function (M, offset) {
	            var res = BlowFish_Decrypt(BLOWFISH_CTX, M[offset], M[offset + 1]);
	            M[offset] = res.left;
	            M[offset + 1] = res.right;
	        },

	        blockSize: 64/32,

	        keySize: 128/32,

	        ivSize: 64/32
	    });

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.Blowfish.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.Blowfish.decrypt(ciphertext, key, cfg);
	     */
	    C.Blowfish = BlockCipher._createHelper(Blowfish);
	}());


	return CryptoJS;

}));`,O2=`
${pE}
self.require = function(moduleName) {
    if (moduleName === 'crypto-js') return self.CryptoJS;
    throw new Error("Module '" + moduleName + "' is not supported");
};
`,mE=`
`+O2+`
self.onmessage = function(e) {
    var __script = e.data.script;
    var __response = e.data.response;
    var __vars = e.data.variables || {};
    var __mutations = {};
    var __logs = [];

    var __originalConsole = {
        log: self.console.log,
        error: self.console.error,
        warn: self.console.warn,
        info: self.console.info,
    };

    function __captureLog(type) {
        return function() {
            var args = Array.prototype.slice.call(arguments);
            var msg = args.map(function(a) { return typeof a === 'object' ? JSON.stringify(a) : String(a); }).join(' ');
            __logs.push({ type: type, message: msg, timestamp: Date.now(), scriptType: 'postrequest' });
            __originalConsole[type].apply(self.console, args);
        };
    }

    self.console.log = __captureLog('log');
    self.console.error = __captureLog('error');
    self.console.warn = __captureLog('warn');
    self.console.info = __captureLog('info');

    var pm = {
        environment: {
            get: function(key) { return __vars[key]; },
            set: function(key, value) { __mutations[key] = value; },
            unset: function(key) { delete __mutations[key]; __mutations[key] = null; },
            toObject: function() { return Object.assign({}, __vars, __mutations); }
        },
        variables: {
            get: function(key) { return __vars[key]; },
            set: function(key, value) { __mutations[key] = value; },
            unset: function(key) { delete __mutations[key]; __mutations[key] = null; },
            toObject: function() { return Object.assign({}, __vars, __mutations); }
        },
        CryptoJS: self.CryptoJS
    };

    try {
        delete self.fetch;
        delete self.XMLHttpRequest;
        delete self.WebSocket;
        delete self.importScripts;

        var fn = new Function('response', 'pm', __script);
        var result = fn(__response, pm);
        self.postMessage({ ok: true, result: result, mutations: __mutations, logs: __logs });
    } catch (err) {
        self.postMessage({ ok: false, error: err.message || 'Script execution failed', logs: __logs });
    }
};
`,gE=`
`+O2+`
self.onmessage = function(e) {
    var __script = e.data.script;
    var request = e.data.request || {};
    var __vars = e.data.variables || {};
    var __mutations = {};
    var __logs = [];

    var __originalConsole = {
        log: self.console.log,
        error: self.console.error,
        warn: self.console.warn,
        info: self.console.info,
    };

    function __captureLog(type) {
        return function() {
            var args = Array.prototype.slice.call(arguments);
            var msg = args.map(function(a) { return typeof a === 'object' ? JSON.stringify(a) : String(a); }).join(' ');
            __logs.push({ type: type, message: msg, timestamp: Date.now(), scriptType: 'prerequest' });
            __originalConsole[type].apply(self.console, args);
        };
    }

    self.console.log = __captureLog('log');
    self.console.error = __captureLog('error');
    self.console.warn = __captureLog('warn');
    self.console.info = __captureLog('info');

    var pm = {
        environment: {
            get: function(key) { return __vars[key]; },
            set: function(key, value) { __mutations[key] = value; __vars[key] = value; },
            unset: function(key) { delete __mutations[key]; __mutations[key] = null; delete __vars[key]; },
            toObject: function() { return Object.assign({}, __vars, __mutations); }
        },
        variables: {
            get: function(key) { return __vars[key]; },
            set: function(key, value) { __mutations[key] = value; __vars[key] = value; },
            unset: function(key) { delete __mutations[key]; __mutations[key] = null; delete __vars[key]; },
            toObject: function() { return Object.assign({}, __vars, __mutations); }
        },
        request: request,
        CryptoJS: self.CryptoJS
    };

    try {
        delete self.fetch;
        delete self.XMLHttpRequest;
        delete self.WebSocket;
        delete self.importScripts;

        var fn = new Function('request', 'pm', __script);
        var result = fn(request, pm);
        var finalRequest = (result && typeof result === 'object' && !Array.isArray(result) && (result.method || result.headers || result.url || result.body)) ? Object.assign(request, result) : request;
        self.postMessage({ ok: true, result: result, request: finalRequest, mutations: __mutations, logs: __logs });
    } catch (err) {
        self.postMessage({ ok: false, error: err.message || 'Pre-request script execution failed', logs: __logs });
    }
};
`;function vE(e){return new Promise((n,r)=>{const s=new Blob([mE],{type:"application/javascript"}),i=URL.createObjectURL(s),c=new Worker(i),f=setTimeout(()=>{c.terminate(),URL.revokeObjectURL(i),r(new Error("Script timed out (5s)"))},5e3);c.onmessage=u=>{clearTimeout(f),c.terminate(),URL.revokeObjectURL(i);const{ok:h,result:x,mutations:m,error:v,logs:y}=u.data;h?n({result:x,mutations:m||{},logs:y||[]}):r(new Error(v||"Unknown script error"))},c.onerror=u=>{clearTimeout(f),c.terminate(),URL.revokeObjectURL(i),r(new Error(u.message||"Worker error"))},c.postMessage(e)})}function M2(e){return new Promise((n,r)=>{const s=new Blob([gE],{type:"application/javascript"}),i=URL.createObjectURL(s),c=new Worker(i),f=setTimeout(()=>{c.terminate(),URL.revokeObjectURL(i),r(new Error("Pre-request script timed out (5s)"))},5e3);c.onmessage=u=>{clearTimeout(f),c.terminate(),URL.revokeObjectURL(i);const{ok:h,result:x,request:m,mutations:v,error:y,logs:_}=u.data;h?n({result:x,request:m||e.request,mutations:v||{},logs:_||[]}):r(new Error(y||"Unknown pre-request script error"))},c.onerror=u=>{clearTimeout(f),c.terminate(),URL.revokeObjectURL(i),r(new Error(u.message||"Worker error"))},c.postMessage(e)})}const fh=new Map,Qm=(e,n)=>{fh.set(e,n)},yE=e=>fh.get(e),Zm=e=>{fh.delete(e)};class xa{static success(n){Ja.custom(r=>g.jsxs("div",{className:"flex items-center justify-between bg-white rounded-[6px] shadow-md px-4 py-3 w-full min-w-[320px] gap-3",children:[g.jsxs("div",{className:"flex items-center gap-2.5",children:[g.jsx("div",{className:"p-[7px] rounded-[8px] bg-green-100",children:g.jsx("div",{className:"bg-emerald-600 text-white p-1 rounded-full",children:g.jsx(qd,{size:10,strokeWidth:5})})}),g.jsx("span",{className:"text-gray-500 font-normal text-sm",children:n})]}),g.jsx("button",{onClick:()=>Ja.dismiss(r),className:"text-gray-400 hover:text-gray-600",children:g.jsx(ma,{size:18})})]}))}static delete(n){Ja.custom(r=>g.jsxs("div",{className:"flex items-center justify-between bg-white rounded-[6px] shadow-md px-4 py-3 w-full min-w-[320px] gap-3",children:[g.jsxs("div",{className:"flex items-center gap-2.5",children:[g.jsx("div",{className:"p-[7px] rounded-[8px] bg-red-100",children:g.jsx(N3,{size:18,className:"text-red-600"})}),g.jsx("span",{className:"text-gray-500 font-normal text-sm",children:n})]}),g.jsx("button",{onClick:()=>Ja.dismiss(r),className:"text-gray-400 hover:text-gray-600",children:g.jsx(ma,{size:18})})]}))}static error(n){Ja.custom(r=>g.jsxs("div",{className:"flex items-center justify-between bg-white rounded-[6px] shadow-md px-4 py-3 w-full min-w-[320px] gap-3",children:[g.jsxs("div",{className:"flex items-center gap-2.5",children:[g.jsx("div",{className:"p-[7px] rounded-[8px] bg-red-100",children:g.jsx(O3,{size:18,className:"text-red-600"})}),g.jsx("span",{className:"text-gray-500 font-normal text-sm",children:n})]}),g.jsx("button",{onClick:()=>Ja.dismiss(r),className:"text-gray-400 hover:text-gray-600",children:g.jsx(ma,{size:18})})]}))}}const bE=e=>{const n=new FormData;for(const r of e){if(r.type==="file"&&r.id){const s=yE(r.id);if(s){n.append(r.key,s);continue}}n.append(r.key,r.value??"")}return n},ud=e=>{const r=[{key:"Content-Type",value:e.contentType},...e.headers].filter(u=>u.value).map(u=>`${u.key}: ${u.value}`).join(`
`),s=e.requestParams.length>0?"?"+e.requestParams.map(u=>`${encodeURIComponent(u.key)}=${encodeURIComponent(u.value??"")}`).join("&"):"";let i="";try{i=new URL(e.baseUrl).host}catch{i=e.baseUrl}let c="";return e.contentType==="application/json"?c=e.raw??"":e.contentType==="multipart/form-data"&&e.formData&&(c=e.formData.map(u=>`${u.key}: ${u.value}`).join(`
`)),[`${e.method} ${e.baseUrl}${e.endpoint}${s} HTTP/1.1`,`Host: ${i}`,r,"",c].join(`
`)},SE=e=>new Promise((n,r)=>{const s=new FileReader;s.onload=()=>n(s.result),s.onerror=r,s.readAsDataURL(e)}),$m=async(e,n)=>{const r=(n??"").toLowerCase(),s=r.includes("application/json")||r.includes("text/"),i=!!r&&!s;if(i)return{data:await SE(e),size:(e.size/1024).toFixed(2),isBinary:i};const c=await e.text();try{return{data:JSON.parse(c),size:(new Blob([c]).size/1024).toFixed(2),isBinary:i}}catch{return{data:c,size:(new Blob([c]).size/1024).toFixed(2),isBinary:i}}},_E=async e=>{const n=e.contentType==="multipart/form-data";console.log(e.baseUrl);let r=e.baseUrl,s=e.endpoint;try{const i=await ts.request({method:e.method,headers:{...n?{}:{"Content-Type":e.contentType},...e.headers.reduce((m,v)=>(m[v.key]=v.value??"",m),{})},baseURL:r,url:s,params:e.requestParams.reduce((m,v)=>(m[v.key]=v.value??"",m),{}),data:e.contentType==="application/json"?e.raw??"{}":bE(e.formData??[]),responseType:"blob",validateStatus:()=>!0,signal:e.signal}),c=i.headers["content-type"]?.toLowerCase()??"",{data:f,size:u,isBinary:h}=await $m(i.data,c),x={};return i.headers&&Object.entries(i.headers).forEach(([m,v])=>{typeof v=="string"&&(x[m]=v)}),{rawRequest:ud(e),protocol:"HTTP/1.1",responseTime:i.duration??0,responseSize:u,statusCode:i?.status??0,statusText:i?.statusText??"UNKNOWN",data:f,contentType:c,isBinary:h,headers:x}}catch(i){if(M3(i))return xa.error("Request canceled"),{rawRequest:ud(e),protocol:"HTTP/1.1",responseTime:0,responseSize:"0",statusCode:0,statusText:"Canceled",data:null,contentType:"",isBinary:!1,headers:{}};const c=i,f=c?.response?.data,u=c?.response?.headers?.["content-type"]??"",{data:h,size:x,isBinary:m}=f?await $m(f,u):{data:null,size:"0",isBinary:!1};return xa.error(c.message??"Request failed"),{rawRequest:ud(e),protocol:"HTTP/1.1",responseTime:c.duration??0,responseSize:x,statusCode:c.response?.status??0,statusText:c.response?.statusText??c.message??"UNKNOWN",data:h,contentType:u,isBinary:m,headers:{}}}},Tr=(e,n)=>{if(e==null)return"";let r;return typeof e=="string"?r=e:typeof e=="object"?e&&typeof e.toString=="function"&&e.toString!==Object.prototype.toString?r=e.toString():r=JSON.stringify(e):r=String(e),r.replace(/\{\{([^{}]+)\}\}/g,(s,i)=>{const c=i.trim(),f=n[c];return f==null?`{{${i}}}`:typeof f=="object"?f&&typeof f.toString=="function"&&f.toString!==Object.prototype.toString?f.toString():JSON.stringify(f):String(f)})},CE=e=>e==null?null:typeof e=="string"?e:typeof e=="object"?e&&typeof e.toString=="function"&&e.toString!==Object.prototype.toString?e.toString():JSON.stringify(e):String(e),eg=(e,n,r,s)=>{for(const[i,c]of Object.entries(e)){const f=CE(c);f===null?delete n[i]:n[i]=f;const u=r.findIndex(h=>h.key===i);if(f===null){if(u>=0){const h=r[u].id;r.splice(u,1),s(x=>x.filter(m=>m.id!==h))}}else if(u>=0){r[u]={...r[u],value:f};const h=r[u];s(x=>x.map(m=>m.id===h.id?{...m,value:f}:m))}else{const h={id:crypto.randomUUID(),key:i,value:f,type:"string",category:""};r.push(h),s(x=>[...x,h])}}},EE=(e,n,r,s)=>{const i=String(n.method||e.method).toUpperCase(),c=[];if(Array.isArray(n.headers)){for(const C of n.headers)if(C&&typeof C=="object"){const D=C.key??C.name??"",k=C.value!==void 0?C.value:"";c.push({id:C.id||crypto.randomUUID(),key:String(D),value:Tr(k,r),disabled:!!C.disabled})}for(const[C,D]of Object.entries(n.headers))/^\d+$/.test(C)||typeof D=="function"||c.push({id:crypto.randomUUID(),key:C,value:Tr(D,r),disabled:!1})}else if(n.headers&&typeof n.headers=="object")for(const[C,D]of Object.entries(n.headers))typeof D!="function"&&c.push({id:crypto.randomUUID(),key:C,value:Tr(D,r),disabled:!1});const f=c.find(C=>C?.key?.toLowerCase()==="content-type"&&!C.disabled),u=f?f.value:e.contentType,h=c.filter(C=>!C.disabled&&C?.key?.toLowerCase()!=="content-type"),x=n.query??(n.url&&typeof n.url=="object"?n.url.query:void 0)??e.requestParams,m=[];if(Array.isArray(x))for(const C of x)!C||C.disabled||m.push({...C,key:Tr(C.key,r),value:Tr(C.value,r)});else if(x&&typeof x=="object")for(const[C,D]of Object.entries(x))typeof D!="function"&&m.push({id:crypto.randomUUID(),key:Tr(C,r),value:Tr(D,r),disabled:!1});let v=e.baseUrl,y=e.endpoint,_;if(typeof n.url=="string"?_=n.url:n.url&&typeof n.url=="object"&&("raw"in n.url&&n.url.raw!==void 0?_=n.url.raw:"href"in n.url&&n.url.href!==void 0&&(_=n.url.href)),_!==void 0&&_!==""&&_!==s){const C=Tr(_,r);if(/^https?:\/\//i.test(C))try{const D=new URL(C);v=D.origin,y=`${D.pathname}${D.search?D.search:""}${D.hash}`}catch{y=C.split("?")[0]}else y=C.split("?")[0]}let E=e.raw;typeof n.body=="string"?E=Tr(n.body,r):n.body&&typeof n.body=="object"&&("raw"in n.body&&n.body.raw!==void 0?E=Tr(n.body.raw,r):!("mode"in n.body)&&!("formdata"in n.body)&&(E=Tr(n.body,r)));const b=n.body&&typeof n.body=="object"&&"formdata"in n.body?n.body.formdata:e.formData;return{baseUrl:v,endpoint:y,method:i,headers:h,requestParams:m,contentType:u,raw:E,formData:b,signal:e.signal}},wE=()=>{const e=cn();return async(n,r)=>{const s={};r.runtimeVariables.forEach(m=>{s[m.key]=m.value}),n.baseUrl&&(s.BASE_URL=n.baseUrl,r.runtimeVariables.filter(m=>m.category==="BASE_URL").forEach(m=>{s[m.key]=n.baseUrl}));let i=n;const c=[],f=[],u=[],h={};if(r.preScriptValue?.trim()&&r.request)try{const m=(n.baseUrl??"").replace(/\/+$/,""),v=(n.endpoint??"").replace(/^\/+/,""),y=m?v?`${m}/${v}`:m:v,_={...r.request,method:n.method,url:{...typeof r.request.url=="object"?r.request.url:{},raw:y}},E=await M2({script:r.preScriptValue,request:_,variables:s});E.mutations&&(Object.assign(h,E.mutations),Object.keys(E.mutations).length>0&&u.push({type:"prerequest",mutations:E.mutations}),eg(E.mutations,s,r.runtimeVariables,r.setRuntimeVariables),E.mutations.BASE_URL&&(n.baseUrl=String(E.mutations.BASE_URL)),r.runtimeVariables.filter(b=>b.category==="BASE_URL").forEach(b=>{E.mutations[b.key]&&(n.baseUrl=String(E.mutations[b.key]))})),E.logs?.length&&f.push(...E.logs),E.result!==void 0&&c.push({type:"prerequest",data:E.result}),i=EE(n,E.request,s,y)}catch(m){const v=m instanceof Error?m.message:String(m);xa.error(`Pre-request script error: ${v}`),f.push({type:"error",message:`Pre-request script error: ${v}`,timestamp:Date.now(),scriptType:"prerequest"}),e(Vm({id:r.requestId,result:c,mutations:u,logs:f}));return}const x=await _E(i);if(x){if(e(E8({id:r.requestId,response:x})),r.scriptValue?.trim())try{const{result:m,mutations:v,logs:y}=await vE({script:r.scriptValue,response:x,variables:s});v&&(Object.assign(h,v),Object.keys(v).length>0&&u.push({type:"postrequest",mutations:v}),eg(v,s,r.runtimeVariables,r.setRuntimeVariables)),y?.length&&f.push(...y),m!==void 0&&c.push({type:"postrequest",data:m})}catch(m){const v=m instanceof Error?m.message:String(m);xa.error(`Post-request script error: ${v}`),f.push({type:"error",message:`Post-request script error: ${v}`,timestamp:Date.now(),scriptType:"postrequest"})}return(c.length>0||f.length>0||u.length>0||Object.keys(h).length>0)&&e(Vm({id:r.requestId,result:c,mutations:u,logs:f})),x}}};function AE({...e}){return g.jsx(i3,{"data-slot":"alert-dialog",...e})}function TE({...e}){return g.jsx(u3,{"data-slot":"alert-dialog-portal",...e})}function kE({className:e,...n}){return g.jsx(d3,{"data-slot":"alert-dialog-overlay",className:Re("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",e),...n})}function DE({className:e,...n}){return g.jsxs(TE,{children:[g.jsx(kE,{}),g.jsx(l3,{"data-slot":"alert-dialog-content",className:Re("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",e),...n})]})}function BE({className:e,...n}){return g.jsx("div",{"data-slot":"alert-dialog-header",className:Re("flex flex-col gap-2 text-center sm:text-left",e),...n})}function FE({className:e,...n}){return g.jsx("div",{"data-slot":"alert-dialog-footer",className:Re("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",e),...n})}function RE({className:e,...n}){return g.jsx(o3,{"data-slot":"alert-dialog-title",className:Re("text-lg font-semibold",e),...n})}function NE({className:e,...n}){return g.jsx(c3,{"data-slot":"alert-dialog-description",className:Re("text-muted-foreground text-sm",e),...n})}function OE({className:e,...n}){return g.jsx(f3,{className:Re(Kv({variant:"outline"}),e),...n})}function xl({className:e,...n}){return g.jsx(h3,{"data-slot":"tabs",className:Re("flex flex-col gap-2",e),...n})}function pl({className:e,...n}){return g.jsx(x3,{"data-slot":"tabs-list",className:Re("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",e),...n})}function $n({className:e,...n}){return g.jsx(p3,{"data-slot":"tabs-trigger",className:Re("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",e),...n})}function Xr({className:e,...n}){return g.jsx(m3,{"data-slot":"tabs-content",className:Re("flex-1 outline-none",e),...n})}const ks="__new__",ME=()=>{const e=cn(),n=$e(ih),[r,s]=te.useState({[ks]:{key:"",value:""}}),i=r[ks]??{key:"",value:""},c=()=>{if(!i.key.trim())return;const h={id:crypto.randomUUID(),key:i.key.trim(),value:i.value,type:"string",category:""};e(T8(h)),s(x=>({...x,[ks]:{key:"",value:""}}))},f=(h,x,m)=>{const v=n.find(E=>E.id===h);!v||!{...r[h]??{key:v.key,value:v.value},[x]:m}.key.trim()||(e(D8({...v,[x]:m})),s(E=>{const b={...E};return delete b[h],b}))},u=h=>{e(k8({id:h})),s(x=>{const m={...x};return delete m[h],m})};return g.jsxs("div",{className:"flex flex-col h-full min-h-0",children:[g.jsxs("div",{className:"flex-1 overflow-auto rounded-lg border border-border",children:[g.jsxs("div",{className:"grid grid-cols-12 bg-muted px-3 py-2 text-xs font-medium uppercase tracking-wide text-muted-foreground",children:[g.jsx("span",{className:"col-span-5",children:"Key"}),g.jsx("span",{className:"col-span-5",children:"Value"}),g.jsx("span",{className:"col-span-2 text-right",children:"Action"})]}),n.length===0&&g.jsx("div",{className:"px-3 py-6 text-center text-sm text-muted-foreground",children:"No collection variables. Add one below."}),n.map(h=>{const x=r[h.id]??{key:h.key,value:h.value};return g.jsxs("div",{className:"grid grid-cols-12 border-t border-border px-3 py-2 items-center gap-2",children:[g.jsx("div",{className:"col-span-5",children:g.jsx(ut,{value:x.key,onChange:m=>s(v=>({...v,[h.id]:{...x,key:m.target.value}})),onBlur:()=>f(h.id,"key",x.key),className:"h-8 text-sm"})}),g.jsx("div",{className:"col-span-5",children:g.jsx(ut,{value:x.value,onChange:m=>s(v=>({...v,[h.id]:{...x,value:m.target.value}})),onBlur:()=>f(h.id,"value",x.value),className:"h-8 text-sm"})}),g.jsx("div",{className:"col-span-2 flex justify-end",children:g.jsx(Ve,{variant:"ghost",size:"sm",className:"h-8 w-8 p-0 text-red-500 hover:text-red-700",onClick:()=>u(h.id),children:g.jsx(ga,{className:"h-4 w-4"})})})]},h.id)})]}),g.jsx("div",{className:"shrink-0 pt-3",children:g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx(ut,{value:i.key,onChange:h=>s(x=>({...x,[ks]:{...x[ks],key:h.target.value}})),onKeyDown:h=>{h.key==="Enter"&&c()},placeholder:"Key",className:"flex-1"}),g.jsx(ut,{value:i.value,onChange:h=>s(x=>({...x,[ks]:{...x[ks],value:h.target.value}})),onKeyDown:h=>{h.key==="Enter"&&c()},placeholder:"Value",className:"flex-1"}),g.jsxs(Ve,{variant:"outline",size:"sm",onClick:c,children:[g.jsx(Ws,{className:"h-4 w-4 mr-1"})," Add"]})]})})]})},tg={AUTH:{LOGIN:"/auth/login",ME:"/auth/me"}},L2={login:async e=>{const r=(await ts.post(tg.AUTH.LOGIN,e)).data;if(!r||typeof r!="object")throw new Error("Invalid response received from login service");if("data"in r&&r.data)return r.data;if("token"in r)return r;throw new Error("Invalid login response format")},me:async()=>{const n=(await ts.get(tg.AUTH.ME)).data;if(!n||typeof n!="object")throw new Error("Invalid response received from auth service");if("data"in n&&n.data)return n.data;if("authenticated"in n)return n;throw new Error("Invalid auth response format")}},LE={username:null,isAuthenticated:!1,status:"idle",error:null},el=th("auth/login",async e=>await L2.login(e)),tl=th("auth/checkAuth",async()=>await L2.me()),j2=Vd({name:"auth",initialState:LE,reducers:{logout(e){e.username=null,e.isAuthenticated=!1,e.status="idle",e.error=null}},extraReducers:e=>{e.addCase(el.pending,n=>{n.status="loading",n.error=null}).addCase(el.fulfilled,(n,r)=>{if(!r.payload){n.status="failed",n.isAuthenticated=!1,n.username=null,n.error="Login failed";return}n.status="succeeded",n.isAuthenticated=!0,n.username=r.payload.username??null,n.error=null}).addCase(el.rejected,(n,r)=>{n.status="failed",n.isAuthenticated=!1,n.error=r.error.message||"Login failed"}).addCase(tl.pending,n=>{n.status="loading"}).addCase(tl.fulfilled,(n,r)=>{if(!r.payload){n.status="failed",n.isAuthenticated=!1,n.username=null,n.error=null;return}n.status="succeeded",n.isAuthenticated=!!r.payload.authenticated,n.username=r.payload.username??null,n.error=null}).addCase(tl.rejected,n=>{n.status="failed",n.isAuthenticated=!1,n.username=null,n.error=null})}}),{logout:R9}=j2.actions,jE=j2.reducer;s_();const I2=i_({reducer:{collection:b8,auth:jE},middleware:e=>e({serializableCheck:{ignoredPaths:["collection.dirTree"]}})});function uh(){const e=cn(),[n,r]=te.useState(!1),[s,i]=te.useState(!1),c=te.useCallback(async()=>{r(!0);try{await e(xc()).unwrap(),xa.success("Collection pulled successfully")}catch{xa.error("Failed to pull collection")}finally{r(!1)}},[e]),f=te.useCallback(async()=>{i(!0);try{e(R8());const u=y2(I2.getState());await Jv.writeCollection(JSON.stringify(u,null,2)),xa.success("Collection pushed successfully")}catch{xa.error("Failed to push collection")}finally{i(!1)}},[e]);return{pull:c,push:f,isPulling:n,isPushing:s}}function IE({className:e,...n}){return g.jsx("textarea",{"data-slot":"textarea",className:Re("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),...n})}const ng=typeof String.prototype.normalize=="function"?e=>e.normalize("NFKD"):e=>e;class Yi{constructor(n,r,s=0,i=n.length,c,f){this.test=f,this.value={from:0,to:0,precise:!1},this.done=!1,this.matches=[],this.buffer="",this.bufferPos=0,this.iter=n.iterRange(s,i),this.bufferStart=s,this.normalize=c?u=>c(ng(u)):ng,this.query=this.normalize(r)}peek(){if(this.bufferPos==this.buffer.length){if(this.bufferStart+=this.buffer.length,this.iter.next(),this.iter.done)return-1;this.bufferPos=0,this.buffer=this.iter.value}return m_(this.buffer,this.bufferPos)}next(){for(;this.matches.length;)this.matches.pop();return this.nextOverlapping()}nextOverlapping(){for(;;){let n=this.peek();if(n<0)return this.done=!0,this;let r=g_(n),s=this.bufferStart+this.bufferPos;this.bufferPos+=v_(n);let i=this.normalize(r);if(i.length)for(let c=0,f=s,u=!0;;c++){let h=i.charCodeAt(c),x=this.match(h,f,u,this.bufferPos+this.bufferStart,c==i.length-1);if(x)return this.value=x,this;if(c==i.length-1)break;u&&c<r.length&&r.charCodeAt(c)==h?f++:u=!1}}}match(n,r,s,i,c){let f=null;for(let u=0;u<this.matches.length;){let h=this.matches[u],x=!1;this.query.charCodeAt(h.index)==n&&(h.index==this.query.length-1?f={from:h.from,to:i,precise:c&&h.precise}:(h.index++,x=!0)),x?u++:this.matches.splice(u,1)}return this.query.charCodeAt(0)==n&&(this.query.length==1?f={from:r,to:i,precise:s&&c}:this.matches.push({from:r,index:1,precise:s})),f&&this.test&&!this.test(f.from,f.to,this.buffer,this.bufferStart)&&(f=null),f}}typeof Symbol<"u"&&(Yi.prototype[Symbol.iterator]=function(){return this});const H2={from:-1,to:-1,match:/.*/.exec(""),precise:!0},dh="gm"+(/x/.unicode==null?"":"u");class z2{constructor(n,r,s,i=0,c=n.length){if(this.text=n,this.to=c,this.curLine="",this.done=!1,this.value=H2,/\\[sWDnr]|\n|\r|\[\^/.test(r))return new U2(n,r,s,i,c);this.re=new RegExp(r,dh+(s?.ignoreCase?"i":"")),this.test=s?.test,this.iter=n.iter();let f=n.lineAt(i);this.curLineStart=f.from,this.matchPos=vc(n,i),this.getLine(this.curLineStart)}getLine(n){this.iter.next(n),this.iter.lineBreak?this.curLine="":(this.curLine=this.iter.value,this.curLineStart+this.curLine.length>this.to&&(this.curLine=this.curLine.slice(0,this.to-this.curLineStart)),this.iter.next())}nextLine(){this.curLineStart=this.curLineStart+this.curLine.length+1,this.curLineStart>this.to?this.curLine="":this.getLine(0)}next(){for(let n=this.matchPos-this.curLineStart;;){this.re.lastIndex=n;let r=this.matchPos<=this.to&&this.re.exec(this.curLine);if(r){let s=this.curLineStart+r.index,i=s+r[0].length;if(this.matchPos=vc(this.text,i+(s==i?1:0)),s==this.curLineStart+this.curLine.length&&this.nextLine(),(s<i||s>this.value.to)&&(!this.test||this.test(s,i,r)))return this.value={from:s,to:i,precise:!0,match:r},this;n=this.matchPos-this.curLineStart}else if(this.curLineStart+this.curLine.length<this.to)this.nextLine(),n=0;else return this.done=!0,this}}}const dd=new WeakMap;class Gi{constructor(n,r){this.from=n,this.text=r}get to(){return this.from+this.text.length}static get(n,r,s){let i=dd.get(n);if(!i||i.from>=s||i.to<=r){let u=new Gi(r,n.sliceString(r,s));return dd.set(n,u),u}if(i.from==r&&i.to==s)return i;let{text:c,from:f}=i;return f>r&&(c=n.sliceString(r,f)+c,f=r),i.to<s&&(c+=n.sliceString(i.to,s)),dd.set(n,new Gi(f,c)),new Gi(r,c.slice(r-f,s-f))}}class U2{constructor(n,r,s,i,c){this.text=n,this.to=c,this.done=!1,this.value=H2,this.matchPos=vc(n,i),this.re=new RegExp(r,dh+(s?.ignoreCase?"i":"")),this.test=s?.test,this.flat=Gi.get(n,i,this.chunkEnd(i+5e3))}chunkEnd(n){return n>=this.to?this.to:this.text.lineAt(n).to}next(){for(;;){let n=this.re.lastIndex=this.matchPos-this.flat.from,r=this.re.exec(this.flat.text);if(r&&!r[0]&&r.index==n&&(this.re.lastIndex=n+1,r=this.re.exec(this.flat.text)),r){let s=this.flat.from+r.index,i=s+r[0].length;if((this.flat.to>=this.to||r.index+r[0].length<=this.flat.text.length-10)&&(!this.test||this.test(s,i,r)))return this.value={from:s,to:i,precise:!0,match:r},this.matchPos=vc(this.text,i+(s==i?1:0)),this}if(this.flat.to==this.to)return this.done=!0,this;this.flat=Gi.get(this.text,this.flat.from,this.chunkEnd(this.flat.from+this.flat.text.length*2))}}}typeof Symbol<"u"&&(z2.prototype[Symbol.iterator]=U2.prototype[Symbol.iterator]=function(){return this});function HE(e){try{return new RegExp(e,dh),!0}catch{return!1}}function vc(e,n){if(n>=e.length)return n;let r=e.lineAt(n),s;for(;n<r.to&&(s=r.text.charCodeAt(n-r.from))>=56320&&s<57344;)n++;return n}const zE=e=>{let n=h_(e,"cm-goto-line");if(n){let f=n.dom.querySelector("input[type=text]");return f&&f.select(),!0}let{state:r}=e,s=String(r.doc.lineAt(e.state.selection.main.head).number),{close:i,result:c}=x_(e,{class:"cm-goto-line",label:r.phrase("Go to line"),input:{type:"text",name:"line",value:s},focus:!0,submitLabel:r.phrase("go")});return c.then(f=>{let u=f&&/^([+-])?(\d+)?(:\d+)?(%)?$/.exec(f.elements.line.value);if(!u){e.dispatch({effects:i});return}let h=r.doc.lineAt(r.selection.main.head),[,x,m,v,y]=u,_=v?+v.slice(1):0,E=m?+m:h.number;if(m&&y){let D=E/100;x&&(D=D*(x=="-"?-1:1)+h.number/r.doc.lines),E=Math.round(r.doc.lines*D)}else m&&x&&(E=E*(x=="-"?-1:1)+h.number);let b=r.doc.line(Math.max(1,Math.min(r.doc.lines,E))),C=Mr.cursor(b.from+Math.max(0,Math.min(_,b.length)));e.dispatch({effects:[i,Wn.scrollIntoView(C.from,{y:"center"})],selection:C})}),!0},UE={highlightWordAroundCursor:!1,minSelectionLength:1,maxMatches:100,wholeWords:!1},WE=Kd.define({combine(e){return Yd(e,UE,{highlightWordAroundCursor:(n,r)=>n||r,minSelectionLength:Math.min,maxMatches:Math.min})}});function PE(e){return[KE,VE]}const XE=tn.mark({class:"cm-selectionMatch"}),GE=tn.mark({class:"cm-selectionMatch cm-selectionMatch-main"});function rg(e,n,r,s){return(r==0||e(n.sliceDoc(r-1,r))!=br.Word)&&(s==n.doc.length||e(n.sliceDoc(s,s+1))!=br.Word)}function qE(e,n,r,s){return e(n.sliceDoc(r,r+1))==br.Word&&e(n.sliceDoc(s-1,s))==br.Word}const VE=Jd.fromClass(class{constructor(e){this.decorations=this.getDeco(e)}update(e){(e.selectionSet||e.docChanged||e.viewportChanged)&&(this.decorations=this.getDeco(e.view))}getDeco(e){let n=e.state.facet(WE),{state:r}=e,s=r.selection;if(s.ranges.length>1)return tn.none;let i=s.main,c,f=null;if(i.empty){if(!n.highlightWordAroundCursor)return tn.none;let h=r.wordAt(i.head);if(!h)return tn.none;f=r.charCategorizer(i.head),c=r.sliceDoc(h.from,h.to)}else{let h=i.to-i.from;if(h<n.minSelectionLength||h>200)return tn.none;if(n.wholeWords){if(c=r.sliceDoc(i.from,i.to),f=r.charCategorizer(i.head),!(rg(f,r,i.from,i.to)&&qE(f,r,i.from,i.to)))return tn.none}else if(c=r.sliceDoc(i.from,i.to),!c)return tn.none}let u=[];for(let h of e.visibleRanges){let x=new Yi(r.doc,c,h.from,h.to);for(;!x.next().done;){let{from:m,to:v}=x.value;if((!f||rg(f,r,m,v))&&(i.empty&&m<=i.from&&v>=i.to?u.push(GE.range(m,v)):(m>=i.to||v<=i.from)&&u.push(XE.range(m,v)),u.length>n.maxMatches))return tn.none}}return tn.set(u)}},{decorations:e=>e.decorations}),KE=Wn.baseTheme({".cm-selectionMatch":{backgroundColor:"#99ff7780"},".cm-searchMatch .cm-selectionMatch":{backgroundColor:"transparent"}}),YE=({state:e,dispatch:n})=>{let{selection:r}=e,s=Mr.create(r.ranges.map(i=>e.wordAt(i.head)||Mr.cursor(i.head)),r.mainIndex);return s.eq(r)?!1:(n(e.update({selection:s})),!0)};function JE(e,n){let{main:r,ranges:s}=e.selection,i=e.wordAt(r.head),c=i&&i.from==r.from&&i.to==r.to;for(let f=!1,u=new Yi(e.doc,n,s[s.length-1].to);;)if(u.next(),u.done){if(f)return null;u=new Yi(e.doc,n,0,Math.max(0,s[s.length-1].from-1)),f=!0}else{if(f&&s.some(h=>h.from==u.value.from))continue;if(c){let h=e.wordAt(u.value.from);if(!h||h.from!=u.value.from||h.to!=u.value.to)continue}return u.value}}const QE=({state:e,dispatch:n})=>{let{ranges:r}=e.selection;if(r.some(c=>c.from===c.to))return YE({state:e,dispatch:n});let s=e.sliceDoc(r[0].from,r[0].to);if(e.selection.ranges.some(c=>e.sliceDoc(c.from,c.to)!=s))return!1;let i=JE(e,s);return i?(n(e.update({selection:e.selection.addRange(Mr.range(i.from,i.to),!1),effects:Wn.scrollIntoView(i.to)})),!0):!1},Gs=Kd.define({combine(e){return Yd(e,{top:!1,caseSensitive:!1,literal:!1,regexp:!1,wholeWord:!1,createPanel:n=>new dw(n),scrollToMatch:n=>Wn.scrollIntoView(n)})}});function ZE(e){return e?[Gs.of(e),Nd]:Nd}class W2{constructor(n){this.search=n.search,this.caseSensitive=!!n.caseSensitive,this.literal=!!n.literal,this.regexp=!!n.regexp,this.replace=n.replace||"",this.valid=!!this.search&&(!this.regexp||HE(this.search)),this.unquoted=this.unquote(this.search),this.wholeWord=!!n.wholeWord,this.test=n.test}unquote(n){return this.literal?n:n.replace(/\\([nrt\\])/g,(r,s)=>s=="n"?`
`:s=="r"?"\r":s=="t"?"	":"\\")}eq(n){return this.search==n.search&&this.replace==n.replace&&this.caseSensitive==n.caseSensitive&&this.regexp==n.regexp&&this.wholeWord==n.wholeWord&&this.test==n.test}create(){return this.regexp?new aw(this):new tw(this)}getCursor(n,r=0,s){let i=n.doc?n:b_.create({doc:n});return s==null&&(s=i.doc.length),this.regexp?zi(this,i,r,s):Hi(this,i,r,s)}}class P2{constructor(n){this.spec=n}}function $E(e,n,r){return(s,i,c,f)=>{if(r&&!r(s,i,c,f))return!1;let u=s>=f&&i<=f+c.length?c.slice(s-f,i-f):n.doc.sliceString(s,i);return e(u,n,s,i)}}function Hi(e,n,r,s){let i;return e.wholeWord&&(i=ew(n.doc,n.charCategorizer(n.selection.main.head))),e.test&&(i=$E(e.test,n,i)),new Yi(n.doc,e.unquoted,r,s,e.caseSensitive?void 0:c=>c.toLowerCase(),i)}function ew(e,n){return(r,s,i,c)=>((c>r||c+i.length<s)&&(c=Math.max(0,r-2),i=e.sliceString(c,Math.min(e.length,s+2))),(n(yc(i,r-c))!=br.Word||n(bc(i,r-c))!=br.Word)&&(n(bc(i,s-c))!=br.Word||n(yc(i,s-c))!=br.Word))}class tw extends P2{constructor(n){super(n)}nextMatch(n,r,s){let i=Hi(this.spec,n,s,n.doc.length).nextOverlapping();if(i.done){let c=Math.min(n.doc.length,r+this.spec.unquoted.length);i=Hi(this.spec,n,0,c).nextOverlapping()}return i.done||i.value.from==r&&i.value.to==s?null:i.value}prevMatchInRange(n,r,s){for(let i=s;;){let c=Math.max(r,i-1e4-this.spec.unquoted.length),f=Hi(this.spec,n,c,i),u=null;for(;!f.nextOverlapping().done;)u=f.value;if(u)return u;if(c==r)return null;i-=1e4}}prevMatch(n,r,s){let i=this.prevMatchInRange(n,0,r);return i||(i=this.prevMatchInRange(n,Math.max(0,s-this.spec.unquoted.length),n.doc.length)),i&&(i.from!=r||i.to!=s)?i:null}getReplacement(n){return this.spec.unquote(this.spec.replace)}matchAll(n,r){let s=Hi(this.spec,n,0,n.doc.length),i=[];for(;!s.next().done;){if(i.length>=r)return null;i.push(s.value)}return i}highlight(n,r,s,i){let c=Hi(this.spec,n,Math.max(0,r-this.spec.unquoted.length),Math.min(s+this.spec.unquoted.length,n.doc.length));for(;!c.next().done;)i(c.value.from,c.value.to)}}function nw(e,n,r){return(s,i,c)=>(!r||r(s,i,c))&&e(c[0],n,s,i)}function zi(e,n,r,s){let i;return e.wholeWord&&(i=rw(n.charCategorizer(n.selection.main.head))),e.test&&(i=nw(e.test,n,i)),new z2(n.doc,e.search,{ignoreCase:!e.caseSensitive,test:i},r,s)}function yc(e,n){return e.slice(Bv(e,n,!1),n)}function bc(e,n){return e.slice(n,Bv(e,n))}function rw(e){return(n,r,s)=>!s[0].length||(e(yc(s.input,s.index))!=br.Word||e(bc(s.input,s.index))!=br.Word)&&(e(bc(s.input,s.index+s[0].length))!=br.Word||e(yc(s.input,s.index+s[0].length))!=br.Word)}class aw extends P2{nextMatch(n,r,s){let i=zi(this.spec,n,s,n.doc.length).next();return i.done&&(i=zi(this.spec,n,0,r).next()),i.done?null:i.value}prevMatchInRange(n,r,s){for(let i=1;;i++){let c=Math.max(r,s-i*1e4),f=zi(this.spec,n,c,s),u=null;for(;!f.next().done;)u=f.value;if(u&&(c==r||u.from>c+10))return u;if(c==r)return null}}prevMatch(n,r,s){return this.prevMatchInRange(n,0,r)||this.prevMatchInRange(n,s,n.doc.length)}getReplacement(n){return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g,(r,s)=>{if(s=="&")return n.match[0];if(s=="$")return"$";for(let i=s.length;i>0;i--){let c=+s.slice(0,i);if(c>0&&c<n.match.length)return n.match[c]+s.slice(i)}return r})}matchAll(n,r){let s=zi(this.spec,n,0,n.doc.length),i=[];for(;!s.next().done;){if(i.length>=r)return null;i.push(s.value)}return i}highlight(n,r,s,i){let c=zi(this.spec,n,Math.max(0,r-250),Math.min(s+250,n.doc.length));for(;!c.next().done;)i(c.value.from,c.value.to)}}const ml=Ps.define(),hh=Ps.define(),va=Tv.define({create(e){return new xd(Rd(e).create(),null)},update(e,n){for(let r of n.effects)r.is(ml)?e=new xd(r.value.create(),e.panel):r.is(hh)&&(e=new xd(e.query,r.value?xh:null));return e},provide:e=>kv.from(e,n=>n.panel)});function hd(e){var n;return((n=e.field(va,!1))===null||n===void 0?void 0:n.panel)!=null}class xd{constructor(n,r){this.query=n,this.panel=r}}const sw=tn.mark({class:"cm-searchMatch"}),iw=tn.mark({class:"cm-searchMatch cm-searchMatch-selected"}),lw=Jd.fromClass(class{constructor(e){this.view=e,this.decorations=this.highlight(e.state.field(va))}update(e){let n=e.state.field(va);(n!=e.startState.field(va)||e.docChanged||e.selectionSet||e.viewportChanged)&&(this.decorations=this.highlight(n))}highlight({query:e,panel:n}){if(!n||!e.spec.valid)return tn.none;let{view:r}=this,s=new Dv;for(let i=0,c=r.visibleRanges,f=c.length;i<f;i++){let{from:u,to:h}=c[i];for(;i<f-1&&h>c[i+1].from-500;)h=c[++i].to;e.highlight(r.state,u,h,(x,m)=>{let v=r.state.selection.ranges.some(y=>y.from==x&&y.to==m);s.add(x,m,v?iw:sw)})}return s.finish()}},{decorations:e=>e.decorations});function Al(e){return n=>{let r=n.state.field(va,!1);return r&&r.query.spec.valid?e(n,r):nl(n)}}const Sc=Al((e,{query:n})=>{let{to:r}=e.state.selection.main,s=n.nextMatch(e.state,r,r);if(!s)return!1;let i=Mr.single(s.from,s.to),c=e.state.facet(Gs);return e.dispatch({selection:i,effects:[mh(e,s),c.scrollToMatch(i.main,e)],userEvent:"select.search"}),G2(e),!0}),_c=Al((e,{query:n})=>{let{state:r}=e,{from:s}=r.selection.main,i=n.prevMatch(r,s,s);if(!i)return!1;let c=Mr.single(i.from,i.to),f=e.state.facet(Gs);return e.dispatch({selection:c,effects:[mh(e,i),f.scrollToMatch(c.main,e)],userEvent:"select.search"}),G2(e),!0}),ow=Al((e,{query:n})=>{let r=n.matchAll(e.state,1e3);return!r||!r.length?!1:(e.dispatch({selection:Mr.create(r.map(s=>Mr.range(s.from,s.to))),userEvent:"select.search.matches"}),!0)}),cw=({state:e,dispatch:n})=>{let r=e.selection;if(r.ranges.length>1||r.main.empty)return!1;let{from:s,to:i}=r.main,c=[],f=0;for(let u=new Yi(e.doc,e.sliceDoc(s,i));!u.next().done;){if(c.length>1e3)return!1;u.value.from==s&&(f=c.length),c.push(Mr.range(u.value.from,u.value.to))}return n(e.update({selection:Mr.create(c,f),userEvent:"select.search.matches"})),!0},ag=Al((e,{query:n})=>{let{state:r}=e,{from:s,to:i}=r.selection.main;if(r.readOnly)return!1;let c=n.nextMatch(r,s,s);if(!c)return!1;let f=c,u=[],h,x,m=[];f.precise?f.from==s&&f.to==i&&(x=r.toText(n.getReplacement(f)),u.push({from:f.from,to:f.to,insert:x}),f=n.nextMatch(r,f.from,f.to),m.push(Wn.announce.of(r.phrase("replaced match on line $",r.doc.lineAt(s).number)+"."))):f=n.nextMatch(r,f.from,f.to);let v=e.state.changes(u);return f&&(h=Mr.single(f.from,f.to).map(v),m.push(mh(e,f)),m.push(r.facet(Gs).scrollToMatch(h.main,e))),e.dispatch({changes:v,selection:h,effects:m,userEvent:"input.replace"}),!0}),fw=Al((e,{query:n})=>{if(e.state.readOnly)return!1;let r=[];for(let i of n.matchAll(e.state,1e9)){let{from:c,to:f,precise:u}=i;u&&r.push({from:c,to:f,insert:n.getReplacement(i)})}if(!r.length)return!1;let s=e.state.phrase("replaced $ matches",r.length)+".";return e.dispatch({changes:r,effects:Wn.announce.of(s),userEvent:"input.replace.all"}),!0});function xh(e){return e.state.facet(Gs).createPanel(e)}function Rd(e,n){var r,s,i,c,f;let u=e.selection.main,h=u.empty||u.to>u.from+100?"":e.sliceDoc(u.from,u.to);if(n&&!h)return n;let x=e.facet(Gs);return new W2({search:((r=n?.literal)!==null&&r!==void 0?r:x.literal)?h:h.replace(/\n/g,"\\n"),caseSensitive:(s=n?.caseSensitive)!==null&&s!==void 0?s:x.caseSensitive,literal:(i=n?.literal)!==null&&i!==void 0?i:x.literal,regexp:(c=n?.regexp)!==null&&c!==void 0?c:x.regexp,wholeWord:(f=n?.wholeWord)!==null&&f!==void 0?f:x.wholeWord})}function X2(e){let n=Av(e,xh);return n&&n.dom.querySelector("[main-field]")}function G2(e){let n=X2(e);n&&n==e.root.activeElement&&n.select()}const nl=e=>{let n=e.state.field(va,!1);if(n&&n.panel){let r=X2(e);if(r&&r!=e.root.activeElement){let s=Rd(e.state,n.query.spec);s.valid&&e.dispatch({effects:ml.of(s)}),r.focus(),r.select()}}else e.dispatch({effects:[hh.of(!0),n?ml.of(Rd(e.state,n.query.spec)):Ps.appendConfig.of(Nd)]});return!0},ph=e=>{let n=e.state.field(va,!1);if(!n||!n.panel)return!1;let r=Av(e,xh);return r&&r.dom.contains(e.root.activeElement)&&e.focus(),e.dispatch({effects:hh.of(!1)}),!0},uw=[{key:"Mod-f",run:nl,scope:"editor search-panel"},{key:"F3",run:Sc,shift:_c,scope:"editor search-panel",preventDefault:!0},{key:"Mod-g",run:Sc,shift:_c,scope:"editor search-panel",preventDefault:!0},{key:"Escape",run:ph,scope:"editor search-panel"},{key:"Mod-Shift-l",run:cw},{key:"Mod-Alt-g",run:zE},{key:"Mod-d",run:QE,preventDefault:!0}];class dw{constructor(n){this.view=n;let r=this.query=n.state.field(va).query.spec;this.commit=this.commit.bind(this),this.searchField=jt("input",{value:r.search,placeholder:Qn(n,"Find"),"aria-label":Qn(n,"Find"),class:"cm-textfield",name:"search",form:"","main-field":"true",onchange:this.commit,onkeyup:this.commit}),this.replaceField=jt("input",{value:r.replace,placeholder:Qn(n,"Replace"),"aria-label":Qn(n,"Replace"),class:"cm-textfield",name:"replace",form:"",onchange:this.commit,onkeyup:this.commit}),this.caseField=jt("input",{type:"checkbox",name:"case",form:"",checked:r.caseSensitive,onchange:this.commit}),this.reField=jt("input",{type:"checkbox",name:"re",form:"",checked:r.regexp,onchange:this.commit}),this.wordField=jt("input",{type:"checkbox",name:"word",form:"",checked:r.wholeWord,onchange:this.commit});function s(i,c,f){return jt("button",{class:"cm-button",name:i,onclick:c,type:"button"},f)}this.dom=jt("div",{onkeydown:i=>this.keydown(i),class:"cm-search"},[this.searchField,s("next",()=>Sc(n),[Qn(n,"next")]),s("prev",()=>_c(n),[Qn(n,"previous")]),s("select",()=>ow(n),[Qn(n,"all")]),jt("label",null,[this.caseField,Qn(n,"match case")]),jt("label",null,[this.reField,Qn(n,"regexp")]),jt("label",null,[this.wordField,Qn(n,"by word")]),...n.state.readOnly?[]:[jt("br"),this.replaceField,s("replace",()=>ag(n),[Qn(n,"replace")]),s("replaceAll",()=>fw(n),[Qn(n,"replace all")])],jt("button",{name:"close",onclick:()=>ph(n),"aria-label":Qn(n,"close"),type:"button"},["×"])])}commit(){let n=new W2({search:this.searchField.value,caseSensitive:this.caseField.checked,regexp:this.reField.checked,wholeWord:this.wordField.checked,replace:this.replaceField.value});n.eq(this.query)||(this.query=n,this.view.dispatch({effects:ml.of(n)}))}keydown(n){y_(this.view,n,"search-panel")?n.preventDefault():n.keyCode==13&&n.target==this.searchField?(n.preventDefault(),(n.shiftKey?_c:Sc)(this.view)):n.keyCode==13&&n.target==this.replaceField&&(n.preventDefault(),ag(this.view))}update(n){for(let r of n.transactions)for(let s of r.effects)s.is(ml)&&!s.value.eq(this.query)&&this.setQuery(s.value)}setQuery(n){this.query=n,this.searchField.value=n.search,this.replaceField.value=n.replace,this.caseField.checked=n.caseSensitive,this.reField.checked=n.regexp,this.wordField.checked=n.wholeWord}mount(){this.searchField.select()}get pos(){return 80}get top(){return this.view.state.facet(Gs).top}}function Qn(e,n){return e.state.phrase(n)}const Zo=30,$o=/[\s\.,:;?!]/;function mh(e,{from:n,to:r}){let s=e.state.doc.lineAt(n),i=e.state.doc.lineAt(r).to,c=Math.max(s.from,n-Zo),f=Math.min(i,r+Zo),u=e.state.sliceDoc(c,f);if(c!=s.from){for(let h=0;h<Zo;h++)if(!$o.test(u[h+1])&&$o.test(u[h])){u=u.slice(h);break}}if(f!=i){for(let h=u.length-1;h>u.length-Zo;h--)if(!$o.test(u[h-1])&&$o.test(u[h])){u=u.slice(0,h);break}}return Wn.announce.of(`${e.state.phrase("current match")}. ${u} ${e.state.phrase("on line")} ${s.number}.`)}const hw=Wn.baseTheme({".cm-panel.cm-search":{padding:"2px 6px 4px",position:"relative","& [name=close]":{position:"absolute",top:"0",right:"4px",backgroundColor:"inherit",border:"none",font:"inherit",padding:0,margin:0},"& input, & button, & label":{margin:".2em .6em .2em 0"},"& input[type=checkbox]":{marginRight:".2em"},"& label":{fontSize:"80%",whiteSpace:"pre"}},"&light .cm-searchMatch":{backgroundColor:"#ffff0054"},"&dark .cm-searchMatch":{backgroundColor:"#00ffff8a"},"&light .cm-searchMatch-selected":{backgroundColor:"#ff6a0054"},"&dark .cm-searchMatch-selected":{backgroundColor:"#ff00ff8a"}}),Nd=[va,p_.low(lw),hw],xw=Wn.theme({".cm-tooltip":{backgroundColor:"#18181b !important",border:"1px solid #3f3f46 !important",color:"#f4f4f5 !important",borderRadius:"6px",boxShadow:"0 10px 25px -5px rgba(0, 0, 0, 0.6), 0 8px 10px -6px rgba(0, 0, 0, 0.6)",zIndex:"9999 !important",pointerEvents:"auto !important"},".cm-tooltip.cm-tooltip-autocomplete":{borderRadius:"6px",overflow:"hidden","& > ul":{fontFamily:"var(--font-mono, monospace)",padding:"4px 0",maxHeight:"16em",minWidth:"260px",scrollbarWidth:"thin",scrollbarColor:"#3f3f46 transparent"},"& > ul > li":{padding:"5px 10px",lineHeight:"1.4",color:"#e4e4e7",cursor:"pointer",display:"flex",alignItems:"center",gap:"6px",fontSize:"12px"},"& > ul > li[aria-selected]":{backgroundColor:"#2563eb !important",color:"#ffffff !important"},"& > ul > li:hover:not([aria-selected])":{backgroundColor:"#27272a !important"},"& > ul > completion-section":{borderBottom:"1px solid #3f3f46",color:"#a1a1aa",fontSize:"11px",padding:"4px 8px",opacity:"0.8"}},".cm-completionMatchedText":{color:"#60a5fa !important",textDecoration:"underline",fontWeight:"600"},".cm-tooltip-autocomplete ul li[aria-selected] .cm-completionMatchedText":{color:"#ffffff !important",textDecoration:"underline",fontWeight:"700"},".cm-completionDetail":{color:"#a1a1aa",fontStyle:"italic",marginLeft:"auto",fontSize:"11px"},".cm-tooltip-autocomplete ul li[aria-selected] .cm-completionDetail":{color:"#dbeafe !important"},".cm-completionIcon":{opacity:"0.85",width:"1.2em",display:"inline-block",textAlign:"center",marginRight:"4px",fontSize:"12px"},".cm-tooltip-autocomplete ul li[aria-selected] .cm-completionIcon":{color:"#ffffff !important",opacity:"1"},".cm-completionIcon-function, .cm-completionIcon-method":{color:"#a78bfa"},".cm-completionIcon-variable, .cm-completionIcon-property":{color:"#38bdf8"},".cm-completionIcon-keyword":{color:"#f472b6"},".cm-completionIcon-class, .cm-completionIcon-interface":{color:"#fbbf24"},".cm-completionIcon-constant":{color:"#34d399"},".cm-completionIcon-type":{color:"#818cf8"},".cm-tooltip.cm-completionInfo":{backgroundColor:"#18181b !important",border:"1px solid #3f3f46 !important",color:"#f4f4f5 !important",borderRadius:"6px",padding:"8px 12px",boxShadow:"0 10px 25px -5px rgba(0, 0, 0, 0.6)",fontSize:"12px",lineHeight:"1.5"},".cm-panels":{backgroundColor:"#18181b !important",color:"#f4f4f5 !important",zIndex:"20 !important"},".cm-panels.cm-panels-top":{borderBottom:"1px solid #27272a !important"},".cm-panels.cm-panels-bottom":{borderTop:"1px solid #27272a !important"},".cm-panel.cm-search":{backgroundColor:"#18181b !important",color:"#f4f4f5 !important",padding:"6px 28px 6px 10px !important",fontFamily:"var(--font-sans, system-ui, sans-serif) !important",fontSize:"12px !important",display:"flex !important",flexWrap:"wrap !important",alignItems:"center !important",gap:"4px 6px !important",position:"relative !important"},".cm-panel.cm-search [name=close]":{position:"absolute !important",top:"6px !important",right:"6px !important",cursor:"pointer !important",color:"#a1a1aa !important",backgroundColor:"transparent !important",border:"none !important",borderRadius:"4px !important",width:"20px !important",height:"20px !important",padding:"0 !important",fontSize:"16px !important",lineHeight:"1 !important",display:"inline-flex !important",alignItems:"center !important",justifyContent:"center !important",transition:"background-color 0.15s, color 0.15s"},".cm-panel.cm-search [name=close]:hover":{backgroundColor:"#27272a !important",color:"#ffffff !important"},".cm-panel.cm-search input.cm-textfield":{backgroundColor:"#27272a !important",color:"#f4f4f5 !important",border:"1px solid #3f3f46 !important",borderRadius:"4px !important",padding:"2px 8px !important",fontSize:"12px !important",fontFamily:"var(--font-mono, monospace) !important",outline:"none !important",minWidth:"130px !important",maxWidth:"200px !important",height:"24px !important",margin:"0 !important",transition:"border-color 0.15s, box-shadow 0.15s"},".cm-panel.cm-search input.cm-textfield:focus":{borderColor:"#3b82f6 !important",boxShadow:"0 0 0 1px #3b82f6 !important"},".cm-panel.cm-search button.cm-button":{backgroundColor:"#27272a !important",color:"#e4e4e7 !important",border:"1px solid #3f3f46 !important",borderRadius:"4px !important",padding:"2px 8px !important",height:"24px !important",fontSize:"11px !important",fontWeight:"500 !important",cursor:"pointer !important",margin:"0 !important",display:"inline-flex !important",alignItems:"center !important",justifyContent:"center !important",transition:"background-color 0.15s, color 0.15s"},".cm-panel.cm-search button.cm-button:hover":{backgroundColor:"#3f3f46 !important",color:"#ffffff !important"},".cm-panel.cm-search button.cm-button:active":{backgroundColor:"#52525b !important"},".cm-panel.cm-search label":{fontSize:"11px !important",color:"#a1a1aa !important",display:"inline-flex !important",alignItems:"center !important",gap:"4px !important",cursor:"pointer !important",margin:"0 2px !important",userSelect:"none !important"},".cm-panel.cm-search label:hover":{color:"#f4f4f5 !important"},".cm-panel.cm-search input[type=checkbox]":{accentColor:"#2563eb",cursor:"pointer",margin:"0 !important"},".cm-panel.cm-search br":{flexBasis:"100% !important",height:"0px !important",margin:"0 !important",display:"block !important"},".cm-searchMatch":{backgroundColor:"rgba(234, 179, 8, 0.35) !important",outline:"1px solid rgba(234, 179, 8, 0.6) !important",borderRadius:"2px"},".cm-searchMatch.cm-searchMatch-selected":{backgroundColor:"rgba(249, 115, 22, 0.55) !important",outline:"1px solid rgba(249, 115, 22, 0.9) !important",borderRadius:"2px"},".cm-selectionMatch":{backgroundColor:"rgba(59, 130, 246, 0.25) !important",borderRadius:"2px"}},{dark:!0}),pw=Wn.theme({".cm-tooltip":{backgroundColor:"#ffffff !important",border:"1px solid #e2e8f0 !important",color:"#0f172a !important",borderRadius:"6px",boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",zIndex:"9999 !important",pointerEvents:"auto !important"},".cm-tooltip.cm-tooltip-autocomplete":{borderRadius:"6px",overflow:"hidden","& > ul":{fontFamily:"var(--font-mono, monospace)",padding:"4px 0",maxHeight:"16em",minWidth:"260px",scrollbarWidth:"thin",scrollbarColor:"#cbd5e1 transparent"},"& > ul > li":{padding:"5px 10px",lineHeight:"1.4",color:"#334155",cursor:"pointer",display:"flex",alignItems:"center",gap:"6px",fontSize:"12px"},"& > ul > li[aria-selected]":{backgroundColor:"#2563eb !important",color:"#ffffff !important"},"& > ul > li:hover:not([aria-selected])":{backgroundColor:"#f1f5f9 !important"},"& > ul > completion-section":{borderBottom:"1px solid #e2e8f0",color:"#64748b",fontSize:"11px",padding:"4px 8px",opacity:"0.8"}},".cm-completionMatchedText":{color:"#2563eb !important",textDecoration:"underline",fontWeight:"600"},".cm-tooltip-autocomplete ul li[aria-selected] .cm-completionMatchedText":{color:"#ffffff !important",textDecoration:"underline",fontWeight:"700"},".cm-completionDetail":{color:"#64748b",fontStyle:"italic",marginLeft:"auto",fontSize:"11px"},".cm-tooltip-autocomplete ul li[aria-selected] .cm-completionDetail":{color:"#dbeafe !important"},".cm-completionIcon":{opacity:"0.85",width:"1.2em",display:"inline-block",textAlign:"center",marginRight:"4px",fontSize:"12px"},".cm-tooltip-autocomplete ul li[aria-selected] .cm-completionIcon":{color:"#ffffff !important",opacity:"1"},".cm-tooltip.cm-completionInfo":{backgroundColor:"#ffffff !important",border:"1px solid #e2e8f0 !important",color:"#0f172a !important",borderRadius:"6px",padding:"8px 12px",boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1)",fontSize:"12px",lineHeight:"1.5"},".cm-panels":{backgroundColor:"#f8fafc !important",color:"#0f172a !important",zIndex:"20 !important"},".cm-panels.cm-panels-top":{borderBottom:"1px solid #e2e8f0 !important"},".cm-panels.cm-panels-bottom":{borderTop:"1px solid #e2e8f0 !important"},".cm-panel.cm-search":{backgroundColor:"#f8fafc !important",color:"#0f172a !important",padding:"6px 28px 6px 10px !important",fontFamily:"var(--font-sans, system-ui, sans-serif) !important",fontSize:"12px !important",display:"flex !important",flexWrap:"wrap !important",alignItems:"center !important",gap:"4px 6px !important",position:"relative !important"},".cm-panel.cm-search [name=close]":{position:"absolute !important",top:"6px !important",right:"6px !important",cursor:"pointer !important",color:"#64748b !important",backgroundColor:"transparent !important",border:"none !important",borderRadius:"4px !important",width:"20px !important",height:"20px !important",padding:"0 !important",fontSize:"16px !important",lineHeight:"1 !important",display:"inline-flex !important",alignItems:"center !important",justifyContent:"center !important",transition:"background-color 0.15s, color 0.15s"},".cm-panel.cm-search [name=close]:hover":{backgroundColor:"#e2e8f0 !important",color:"#0f172a !important"},".cm-panel.cm-search input.cm-textfield":{backgroundColor:"#ffffff !important",color:"#0f172a !important",border:"1px solid #cbd5e1 !important",borderRadius:"4px !important",padding:"2px 8px !important",fontSize:"12px !important",fontFamily:"var(--font-mono, monospace) !important",outline:"none !important",minWidth:"130px !important",maxWidth:"200px !important",height:"24px !important",margin:"0 !important",transition:"border-color 0.15s, box-shadow 0.15s"},".cm-panel.cm-search input.cm-textfield:focus":{borderColor:"#2563eb !important",boxShadow:"0 0 0 1px #2563eb !important"},".cm-panel.cm-search button.cm-button":{backgroundColor:"#ffffff !important",color:"#334155 !important",border:"1px solid #cbd5e1 !important",borderRadius:"4px !important",padding:"2px 8px !important",height:"24px !important",fontSize:"11px !important",fontWeight:"500 !important",cursor:"pointer !important",margin:"0 !important",display:"inline-flex !important",alignItems:"center !important",justifyContent:"center !important",transition:"background-color 0.15s, color 0.15s"},".cm-panel.cm-search button.cm-button:hover":{backgroundColor:"#e2e8f0 !important",color:"#0f172a !important"},".cm-panel.cm-search button.cm-button:active":{backgroundColor:"#cbd5e1 !important"},".cm-panel.cm-search label":{fontSize:"11px !important",color:"#64748b !important",display:"inline-flex !important",alignItems:"center !important",gap:"4px !important",cursor:"pointer !important",margin:"0 2px !important",userSelect:"none !important"},".cm-panel.cm-search label:hover":{color:"#0f172a !important"},".cm-panel.cm-search input[type=checkbox]":{accentColor:"#2563eb",cursor:"pointer",margin:"0 !important"},".cm-panel.cm-search br":{flexBasis:"100% !important",height:"0px !important",margin:"0 !important",display:"block !important"},".cm-searchMatch":{backgroundColor:"rgba(250, 204, 21, 0.4) !important",outline:"1px solid rgba(234, 179, 8, 0.7) !important",borderRadius:"2px"},".cm-searchMatch.cm-searchMatch-selected":{backgroundColor:"rgba(249, 115, 22, 0.45) !important",outline:"1px solid rgba(249, 115, 22, 0.8) !important",borderRadius:"2px"},".cm-selectionMatch":{backgroundColor:"rgba(59, 130, 246, 0.2) !important",borderRadius:"2px"}},{dark:!1});function mw({value:e,onChange:n,fileName:r,editorRef:s}){const{sandpack:i}=k_(),c=`/${r}`,f=i.files[c]?.code,u=te.useRef(f??""),h=te.useRef(e),x=te.useRef(n),m=te.useRef(i.updateFile);return x.current=n,m.current=i.updateFile,te.useEffect(()=>{f!==void 0&&f!==u.current&&(u.current=f,x.current?.(f))},[f]),te.useEffect(()=>{if(e!==h.current&&(h.current=e,e!==f)){u.current=e;try{const v=s.current?.getCodemirror();if(v){const y=e.length;v.state.selection.ranges.some(E=>E.to>y||E.from>y)&&v.dispatch({selection:{anchor:Math.min(v.state.selection.main.anchor,y)}})}}catch{}m.current(c,e)}},[f,c,e,s]),null}const gw=[],vw=[],yw=({value:e,onChange:n,readOnly:r,showReadOnly:s,showLineNumbers:i=!0,editorKey:c,autoComplete:f=!1,completionSources:u=gw,fileName:h="index.js",extensions:x=vw,className:m,style:v,theme:y,onSelectionContextMenu:_,showSearch:E=!0,dependencies:b,devDependencies:C,extraFiles:D})=>{const k="/__apitester_entry__.js",w=te.useRef(null),[H,V]=te.useState(!1),z=te.useMemo(()=>typeof e=="string"?e.replace(/\r\n/g,`
`):"",[e]),[R]=te.useState(()=>({[`/${h}`]:{code:z,active:!0},[k]:{code:"export default {};",hidden:!0},...D??{}})),W=te.useMemo(()=>{if(!b&&!C)return"";const P=Object.entries(b??{}).sort().map(([ue,he])=>`${ue}@${he}`).join(","),G=Object.entries(C??{}).sort().map(([ue,he])=>`${ue}@${he}`).join(",");return`:${P}:${G}`},[b,C]),U=te.useMemo(()=>({entry:k,...b?{dependencies:b}:{},...C?{devDependencies:C}:{}}),[k,W]),fe=te.useMemo(()=>({autorun:!1,activeFile:`/${h}`,visibleFiles:[`/${h}`]}),[h]),Z=y??"dark",L=Z!=="light",de=te.useMemo(()=>L?xw:pw,[L]),Ce=te.useMemo(()=>typeof document>"u"?[]:S_({parent:document.body}),[]),me=te.useMemo(()=>E?[ZE({top:!0}),PE(),Rm.of([...uw,{key:"Mod-h",run:nl,scope:"editor search-panel"}])]:[],[E]),X=te.useMemo(()=>{if(!E)return[];let P=!1;return Wn.updateListener.of(G=>{const ue=hd(G.state);ue!==P&&(P=ue,V(ue))})},[E]),ee=te.useMemo(()=>[de,Ce,...me,X,...x],[x,me,X,de,Ce]),we=te.useMemo(()=>Rm.of([{key:"Tab",run:__},...C_.filter(P=>P.key!=="Enter")]),[]),K=te.useMemo(()=>{if(!f&&u.length===0)return;const P=Array.isArray(f)?f:u.length>0?u:void 0,G={defaultKeymap:!1,...P?{override:P}:{}};return{extensions:[E_(G),we,...ee],extensionsKeymap:[]}},[f,u,we,ee]),ne=P=>{if(!_)return;const G=w.current?.getCodemirror();if(!G)return;const{from:ue,to:he}=G.state.selection.main,ve=G.state.sliceDoc(ue,he);ve&&(P.preventDefault(),_(ve,{x:P.clientX,y:P.clientY}))},Te=()=>{const P=w.current?.getCodemirror();P&&(hd(P.state)?ph(P):nl(P))},O=P=>{if(E&&(P.ctrlKey||P.metaKey)&&P.key.toLowerCase()==="f"){const G=w.current?.getCodemirror();G&&!hd(G.state)&&(P.preventDefault(),nl(G))}},J=te.useMemo(()=>({...m?{height:"100%"}:{},...v}),[m,v]);return g.jsxs(w_,{files:R,theme:Z,style:J,customSetup:U,options:fe,children:[g.jsx(mw,{value:z,onChange:n,fileName:h,editorRef:w}),g.jsxs(A_,{className:`relative ${m??""}`,style:J,onContextMenu:ne,onKeyDown:O,children:[E&&!H&&g.jsx("button",{type:"button",onClick:Te,title:"Search (Ctrl+F)","aria-label":"Search code",className:"absolute top-2 right-2 z-10 flex items-center justify-center h-6 w-6 rounded text-muted-foreground/70 hover:text-foreground hover:bg-muted bg-background/80 backdrop-blur-xs border border-border/50 transition-all cursor-pointer shadow-xs opacity-70 hover:opacity-100",children:g.jsx(Gd,{className:"h-3.5 w-3.5"})}),g.jsx(T_,{ref:w,className:m,style:J,showTabs:!1,showLineNumbers:i,showRunButton:!1,wrapContent:!0,readOnly:r,showReadOnly:s,...K,extensions:K?.extensions??ee})]})]},c)},Pc=({theme:e,...n})=>{const{theme:r,resolvedTheme:s}=Zd(),i=e??((s||r)==="dark"?"dark":"light"),c=te.useMemo(()=>{if(!n.dependencies&&!n.devDependencies)return"";const f=Object.entries(n.dependencies??{}).sort().map(([h,x])=>`${h}@${x}`).join(","),u=Object.entries(n.devDependencies??{}).sort().map(([h,x])=>`${h}@${x}`).join(",");return`:${f}:${u}`},[n.dependencies,n.devDependencies]);return g.jsx(yw,{theme:i,...n},`${n.editorKey??""}:${n.fileName??"index.js"}:${i}${c}`)},pd=[{label:"environment",detail:"pm.environment",children:[{label:"get(key)",detail:"(key: string) => string | undefined",apply:'get("$1")'},{label:"set(key, value)",detail:"(key: string, value: string) => void",apply:'set("$1", "$2")'},{label:"unset(key)",detail:"(key: string) => void",apply:'unset("$1")'},{label:"toObject()",detail:"() => Record<string, string>",apply:"toObject()"}]},{label:"collectionVariables",detail:"pm.collectionVariables",children:[{label:"get(key)",detail:"(key: string) => string | undefined",apply:'get("$1")'},{label:"set(key, value)",detail:"(key: string, value: string) => void",apply:'set("$1", "$2")'},{label:"has(key)",detail:"(key: string) => boolean",apply:'has("$1")'},{label:"unset(key)",detail:"(key: string) => void",apply:'unset("$1")'},{label:"clear()",detail:"() => void",apply:"clear()"}]},{label:"expect",detail:"pm.expect(value: any)",apply:"expect($1)"}],sg=[{label:"statusCode",detail:"{ statusCode: number }"},{label:"statusText",detail:"{ statusText: string }"},{label:"data",detail:"Object"},{label:"headers",detail:"{ headers: Record<string, string> }"},{label:"json()",detail:"{ json(): any }",apply:"json()"},{label:"text()",detail:"{ text(): string }",apply:"text()"}],bw=[{label:"toBe(expected)",detail:"(expected: any) => void",apply:"toBe($1)"},{label:"not",detail:"negate assertion",children:[{label:"toBe(expected)",detail:"(expected: any) => void",apply:"toBe($1)"}]},{label:"include(value)",detail:"(value: any) => void",apply:"include($1)"},{label:"equal(value)",detail:"(value: any) => void",apply:"equal($1)"},{label:"exist",detail:"assert value is truthy"},{label:"be",detail:"language chain",children:[{label:"true",detail:"assert true"},{label:"false",detail:"assert false"},{label:"null",detail:"assert null"},{label:"undefined",detail:"assert undefined"},{label:"empty",detail:"assert empty"}]},{label:"have",detail:"language chain",children:[{label:"property(name)",detail:"(name: string) => Assertion",apply:'property("$1")'},{label:"length(length)",detail:"(length: number) => Assertion",apply:"length($1)"}]}];function Wi(e){return e.map(n=>({label:n.label,type:n.children?"property":"function",detail:n.detail,apply:n.apply??n.label}))}function Sw(e,n){let r=bw;const s=n?e.length:e.length-1;for(let i=0;i<s;i++){const c=r.find(f=>f.label.startsWith(e[i]));if(!c)return null;if(!c.children)return i===e.length-1&&!n?r:[];r=c.children}return r}function q2(e){const n=e.matchBefore(/pm\.expect\([^)]*\)(?:\.[\w]+)*\.?/);if(n){const h=n.text,x=/pm\.expect\([^)]*\)/.exec(h)[0].length,m=h.slice(x);if(m==="")return null;const v=m.replace(/^\./,""),y=h.endsWith("."),_=v.split(".").filter(Boolean),E=Sw(_,y);if(!E)return null;const b=y?"":_[_.length-1]??"";return{from:n.to-b.length,options:Wi(E)}}const r=e.matchBefore(new RegExp("(?<!\\w)pm(?:\\.[\\w]*)*\\.?"));if(!r)return null;const s=r.text;if(s==="pm")return{from:r.to,options:Wi(pd)};const c=s.split(".").slice(1),f=c[0];if(c.length===1&&!s.endsWith("."))return{from:r.from+3,options:Wi(pd)};const u=pd.find(h=>h.label.startsWith(f));return u?.children?{from:r.to,options:Wi(u.children)}:null}function V2(e){const n=e.matchBefore(new RegExp("(?<!\\w)response(?:\\.[\\w]*)*\\.?"));if(!n)return null;const r=n.text;if(r==="response"||r==="response.")return{from:n.to,options:Wi(sg)};const s=r.split(".");if(s.length===2&&!r.endsWith(".")){const i=s[1],c=sg.filter(f=>f.label.startsWith(i));if(c.length>0)return{from:n.from+9,options:Wi(c)}}return null}class ig{constructor(n,r,s){this.from=n,this.to=r,this.diagnostic=s}}class Ds{constructor(n,r,s){this.diagnostics=n,this.panel=r,this.selected=s}static init(n,r,s){let i=s.facet(Gr).markerFilter;i&&(n=i(n,s));let c=n.slice().sort((_,E)=>_.from-E.from||_.to-E.to),f=new Dv,u=[],h=0,x=s.doc.iter(),m=0,v=s.doc.length;for(let _=0;;){let E=_==c.length?null:c[_];if(!E&&!u.length)break;let b,C;if(u.length)b=h,C=u.reduce((w,H)=>Math.min(w,H.to),E&&E.from>b?E.from:1e8);else{if(b=E.from,b>v)break;C=E.to,u.push(E),_++}for(;_<c.length;){let w=c[_];if(w.from==b&&(w.to>w.from||w.to==b))u.push(w),_++,C=Math.min(w.to,C);else{C=Math.min(w.from,C);break}}C=Math.min(C,v);let D=!1;if(u.some(w=>w.from==b&&(w.to==C||C==v))&&(D=b==C,!D&&C-b<10)){let w=b-(m+x.value.length);w>0&&(x.next(w),m=b);for(let H=b;;){if(H>=C){D=!0;break}if(!x.lineBreak&&m+x.value.length>H)break;H=m+x.value.length,m+=x.value.length,x.next()}}let k=Ow(u);if(D)f.add(b,b,tn.widget({widget:new Bw(k),diagnostics:u.slice()}));else{let w=u.reduce((H,V)=>V.markClass?H+" "+V.markClass:H,"");f.add(b,C,tn.mark({class:"cm-lintRange cm-lintRange-"+k+w,diagnostics:u.slice(),inclusiveEnd:u.some(H=>H.to>C)}))}if(h=C,h==v)break;for(let w=0;w<u.length;w++)u[w].to<=h&&u.splice(w--,1)}let y=f.finish();return new Ds(y,r,Ji(y))}}function Ji(e,n=null,r=0){let s=null;return e.between(r,1e9,(i,c,{spec:f})=>{if(!(n&&f.diagnostics.indexOf(n)<0))if(!s)s=new ig(i,c,n||f.diagnostics[0]);else{if(f.diagnostics.indexOf(s.diagnostic)<0)return!1;s=new ig(s.from,c,s.diagnostic)}}),s}function _w(e,n){let r=n.pos,s=n.end||r,i=e.state.facet(Gr).hideOn(e,r,s);if(i!=null)return i;let c=e.startState.doc.lineAt(n.pos);return!!(e.effects.some(f=>f.is(gh))||e.changes.touchesRange(c.from,Math.max(c.to,s)))}function Cw(e,n){return e.field(Fr,!1)?n:n.concat(Ps.appendConfig.of($2))}function Ew(e,n){return{effects:Cw(e,[gh.of(n)])}}const gh=Ps.define(),K2=Ps.define(),Y2=Ps.define(),Fr=Tv.define({create(){return new Ds(tn.none,null,null)},update(e,n){if(n.docChanged&&e.diagnostics.size){let r=e.diagnostics.map(n.changes),s=null,i=e.panel;if(e.selected){let c=n.changes.mapPos(e.selected.from,1);s=Ji(r,e.selected.diagnostic,c)||Ji(r,null,c)}!r.size&&i&&n.state.facet(Gr).autoPanel&&(i=null),e=new Ds(r,i,s)}for(let r of n.effects)if(r.is(gh)){let s=n.state.facet(Gr).autoPanel?r.value.length?Cc.open:null:e.panel;e=Ds.init(r.value,s,n.state)}else r.is(K2)?e=new Ds(e.diagnostics,r.value?Cc.open:null,e.selected):r.is(Y2)&&(e=new Ds(e.diagnostics,e.panel,r.value));return e},provide:e=>[kv.from(e,n=>n.panel),Wn.decorations.from(e,n=>n.diagnostics)]}),ww=tn.mark({class:"cm-lintRange cm-lintRange-active"});function Aw(e,n,r){let{diagnostics:s}=e.state.field(Fr),i,c=-1,f=-1;s.between(n-(r<0?1:0),n+(r>0?1:0),(h,x,{spec:m})=>{if(n>=h&&n<=x&&(h==x||(n>h||r>0)&&(n<x||r<0)))return i=m.diagnostics,c=h,f=x,!1});let u=e.state.facet(Gr).tooltipFilter;return i&&u&&(i=u(i,e.state)),i?{pos:c,end:f,above:!0,create(){return{dom:Tw(e,i)}}}:null}function Tw(e,n){return jt("ul",{class:"cm-tooltip-lint"},n.map(r=>Z2(e,r,!1)))}const lg=e=>{let n=e.state.field(Fr,!1);return!n||!n.panel?!1:(e.dispatch({effects:K2.of(!1)}),!0)},kw=Jd.fromClass(class{constructor(e){this.view=e,this.timeout=-1,this.set=!0;let{delay:n}=e.state.facet(Gr);this.lintTime=Date.now()+n,this.run=this.run.bind(this),this.timeout=setTimeout(this.run,n)}run(){clearTimeout(this.timeout);let e=Date.now();if(e<this.lintTime-10)this.timeout=setTimeout(this.run,this.lintTime-e);else{this.set=!1;let{state:n}=this.view,{sources:r}=n.facet(Gr);r.length&&Dw(r.map(s=>Promise.resolve(s(this.view))),s=>{this.view.state.doc==n.doc&&this.view.dispatch(Ew(this.view.state,s.reduce((i,c)=>i.concat(c))))},s=>{F_(this.view.state,s)})}}update(e){let n=e.state.facet(Gr);(e.docChanged||n!=e.startState.facet(Gr)||n.needsRefresh&&n.needsRefresh(e))&&(this.lintTime=Date.now()+n.delay,this.set||(this.set=!0,this.timeout=setTimeout(this.run,n.delay)))}force(){this.set&&(this.lintTime=Date.now(),this.run())}destroy(){clearTimeout(this.timeout)}});function Dw(e,n,r){let s=[],i=-1;for(let c of e)c.then(f=>{s.push(f),clearTimeout(i),s.length==e.length?n(s):i=setTimeout(()=>n(s),200)},r)}const Gr=Kd.define({combine(e){return{sources:e.map(n=>n.source).filter(n=>n!=null),...Yd(e.map(n=>n.config),{delay:750,markerFilter:null,tooltipFilter:null,needsRefresh:null,hideOn:()=>null},{delay:Math.max,markerFilter:og,tooltipFilter:og,needsRefresh:(n,r)=>n?r?s=>n(s)||r(s):n:r,hideOn:(n,r)=>n?r?(s,i,c)=>n(s,i,c)||r(s,i,c):n:r,autoPanel:(n,r)=>n||r})}}});function og(e,n){return e?n?(r,s)=>n(e(r,s),s):e:n}function J2(e,n={}){return[Gr.of({source:e,config:n}),kw,$2]}function Q2(e){let n=[];if(e)e:for(let{name:r}of e){for(let s=0;s<r.length;s++){let i=r[s];if(/[a-zA-Z]/.test(i)&&!n.some(c=>c.toLowerCase()==i.toLowerCase())){n.push(i);continue e}}n.push("")}return n}function Z2(e,n,r){var s;let i=r?Q2(n.actions):[];return jt("li",{class:"cm-diagnostic cm-diagnostic-"+n.severity},jt("span",{class:"cm-diagnosticText"},n.renderMessage?n.renderMessage(e):n.message),(s=n.actions)===null||s===void 0?void 0:s.map((c,f)=>{let u=!1,h=_=>{if(_.preventDefault(),u)return;u=!0;let E=Ji(e.state.field(Fr).diagnostics,n);E&&c.apply(e,E.from,E.to)},{name:x}=c,m=i[f]?x.indexOf(i[f]):-1,v=m<0?x:[x.slice(0,m),jt("u",x.slice(m,m+1)),x.slice(m+1)],y=c.markClass?" "+c.markClass:"";return jt("button",{type:"button",class:"cm-diagnosticAction"+y,onclick:h,onmousedown:h,"aria-label":` Action: ${x}${m<0?"":` (access key "${i[f]})"`}.`},v)}),n.source&&jt("div",{class:"cm-diagnosticSource"},n.source))}class Bw extends B_{constructor(n){super(),this.sev=n}eq(n){return n.sev==this.sev}toDOM(){return jt("span",{class:"cm-lintPoint cm-lintPoint-"+this.sev})}}class cg{constructor(n,r){this.diagnostic=r,this.id="item_"+Math.floor(Math.random()*4294967295).toString(16),this.dom=Z2(n,r,!0),this.dom.id=this.id,this.dom.setAttribute("role","option")}}class Cc{constructor(n){this.view=n,this.items=[];let r=i=>{if(!(i.ctrlKey||i.altKey||i.metaKey)){if(i.keyCode==27)lg(this.view),this.view.focus();else if(i.keyCode==38||i.keyCode==33)this.moveSelection((this.selectedIndex-1+this.items.length)%this.items.length);else if(i.keyCode==40||i.keyCode==34)this.moveSelection((this.selectedIndex+1)%this.items.length);else if(i.keyCode==36)this.moveSelection(0);else if(i.keyCode==35)this.moveSelection(this.items.length-1);else if(i.keyCode==13)this.view.focus();else if(i.keyCode>=65&&i.keyCode<=90&&this.selectedIndex>=0){let{diagnostic:c}=this.items[this.selectedIndex],f=Q2(c.actions);for(let u=0;u<f.length;u++)if(f[u].toUpperCase().charCodeAt(0)==i.keyCode){let h=Ji(this.view.state.field(Fr).diagnostics,c);h&&c.actions[u].apply(n,h.from,h.to)}}else return;i.preventDefault()}},s=i=>{for(let c=0;c<this.items.length;c++)this.items[c].dom.contains(i.target)&&this.moveSelection(c)};this.list=jt("ul",{tabIndex:0,role:"listbox","aria-label":this.view.state.phrase("Diagnostics"),onkeydown:r,onclick:s}),this.dom=jt("div",{class:"cm-panel-lint"},this.list,jt("button",{type:"button",name:"close","aria-label":this.view.state.phrase("close"),onclick:()=>lg(this.view)},"×")),this.update()}get selectedIndex(){let n=this.view.state.field(Fr).selected;if(!n)return-1;for(let r=0;r<this.items.length;r++)if(this.items[r].diagnostic==n.diagnostic)return r;return-1}update(){let{diagnostics:n,selected:r}=this.view.state.field(Fr),s=0,i=!1,c=null,f=new Set;for(n.between(0,this.view.state.doc.length,(u,h,{spec:x})=>{for(let m of x.diagnostics){if(f.has(m))continue;f.add(m);let v=-1,y;for(let _=s;_<this.items.length;_++)if(this.items[_].diagnostic==m){v=_;break}v<0?(y=new cg(this.view,m),this.items.splice(s,0,y),i=!0):(y=this.items[v],v>s&&(this.items.splice(s,v-s),i=!0)),r&&y.diagnostic==r.diagnostic?y.dom.hasAttribute("aria-selected")||(y.dom.setAttribute("aria-selected","true"),c=y):y.dom.hasAttribute("aria-selected")&&y.dom.removeAttribute("aria-selected"),s++}});s<this.items.length&&!(this.items.length==1&&this.items[0].diagnostic.from<0);)i=!0,this.items.pop();this.items.length==0&&(this.items.push(new cg(this.view,{from:-1,to:-1,severity:"info",message:this.view.state.phrase("No diagnostics")})),i=!0),c?(this.list.setAttribute("aria-activedescendant",c.id),this.view.requestMeasure({key:this,read:()=>({sel:c.dom.getBoundingClientRect(),panel:this.list.getBoundingClientRect()}),write:({sel:u,panel:h})=>{let x=h.height/this.list.offsetHeight;u.top<h.top?this.list.scrollTop-=(h.top-u.top)/x:u.bottom>h.bottom&&(this.list.scrollTop+=(u.bottom-h.bottom)/x)}})):this.selectedIndex<0&&this.list.removeAttribute("aria-activedescendant"),i&&this.sync()}sync(){let n=this.list.firstChild;function r(){let s=n;n=s.nextSibling,s.remove()}for(let s of this.items)if(s.dom.parentNode==this.list){for(;n!=s.dom;)r();n=s.dom.nextSibling}else this.list.insertBefore(s.dom,n);for(;n;)r()}moveSelection(n){if(this.selectedIndex<0)return;let r=this.view.state.field(Fr),s=Ji(r.diagnostics,this.items[n].diagnostic);s&&this.view.dispatch({selection:{anchor:s.from,head:s.to},scrollIntoView:!0,effects:Y2.of(s)})}static open(n){return new Cc(n)}}function Fw(e,n='viewBox="0 0 40 40"'){return`url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${n}>${encodeURIComponent(e)}</svg>')`}function ec(e){return Fw(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${e}" fill="none" stroke-width=".7"/>`,'width="6" height="3"')}const Rw=Wn.baseTheme({".cm-diagnostic":{padding:"3px 6px 3px 8px",marginLeft:"-1px",display:"block",whiteSpace:"pre-wrap"},".cm-diagnostic-error":{borderLeft:"5px solid #d11"},".cm-diagnostic-warning":{borderLeft:"5px solid orange"},".cm-diagnostic-info":{borderLeft:"5px solid #999"},".cm-diagnostic-hint":{borderLeft:"5px solid #66d"},".cm-diagnosticAction":{font:"inherit",border:"none",padding:"2px 4px",backgroundColor:"#444",color:"white",borderRadius:"3px",marginLeft:"8px",cursor:"pointer"},".cm-diagnosticSource":{fontSize:"70%",opacity:.7},".cm-lintRange":{backgroundPosition:"left bottom",backgroundRepeat:"repeat-x",paddingBottom:"0.7px"},".cm-lintRange-error":{backgroundImage:ec("#f11")},".cm-lintRange-warning":{backgroundImage:ec("orange")},".cm-lintRange-info":{backgroundImage:ec("#999")},".cm-lintRange-hint":{backgroundImage:ec("#66d")},".cm-lintRange-active":{backgroundColor:"#ffdd9980"},".cm-tooltip-lint":{padding:0,margin:0},".cm-lintPoint":{position:"relative","&:after":{content:'""',position:"absolute",bottom:0,left:"-2px",borderLeft:"3px solid transparent",borderRight:"3px solid transparent",borderBottom:"4px solid #d11"}},".cm-lintPoint-warning":{"&:after":{borderBottomColor:"orange"}},".cm-lintPoint-info":{"&:after":{borderBottomColor:"#999"}},".cm-lintPoint-hint":{"&:after":{borderBottomColor:"#66d"}},".cm-panel.cm-panel-lint":{position:"relative","& ul":{maxHeight:"100px",overflowY:"auto","& [aria-selected]":{backgroundColor:"#ddd","& u":{textDecoration:"underline"}},"&:focus [aria-selected]":{background_fallback:"#bdf",backgroundColor:"Highlight",color_fallback:"white",color:"HighlightText"},"& u":{textDecoration:"none"},padding:0,margin:0},"& [name=close]":{position:"absolute",top:"0",right:"2px",background:"inherit",border:"none",font:"inherit",padding:0,margin:0}},"&dark .cm-lintRange-active":{backgroundColor:"#86714a80"},"&dark .cm-panel.cm-panel-lint ul":{"& [aria-selected]":{backgroundColor:"#2e343e"}}});function Nw(e){return e=="error"?4:e=="warning"?3:e=="info"?2:1}function Ow(e){let n="hint",r=1;for(let s of e){let i=Nw(s.severity);i>r&&(r=i,n=s.severity)}return n}const Mw=D_(Aw,{hideOn:_w}),$2=[Fr,Wn.decorations.compute([Fr],e=>{let{selected:n,panel:r}=e.field(Fr);return!n||!r||n.from==n.to?tn.none:tn.set([ww.range(n.from,n.to)])}),Mw,Rw];function Lw(e,n,r,s){var i=this,c=te.useRef(null),f=te.useRef(0),u=te.useRef(0),h=te.useRef(null),x=te.useRef([]),m=te.useRef(),v=te.useRef(),y=te.useRef(e),_=te.useRef(!0),E=te.useRef(),b=te.useRef();y.current=e;var C=typeof window<"u",D=!n&&n!==0&&C;if(typeof e!="function")throw new TypeError("Expected a function");n=+n||0;var k=!!(r=r||{}).leading,w=!("trailing"in r)||!!r.trailing,H=!!r.flushOnExit&&w,V="maxWait"in r,z="debounceOnServer"in r&&!!r.debounceOnServer,R=V?Math.max(+r.maxWait||0,n):null,W=te.useMemo(function(){var U=function(X){var ee=x.current,we=m.current;return x.current=m.current=null,f.current=X,u.current=u.current||X,v.current=y.current.apply(we,ee)},fe=function(X,ee){D&&cancelAnimationFrame(h.current),h.current=D?requestAnimationFrame(X):setTimeout(X,ee)},Z=function(X){if(!_.current)return!1;var ee=X-c.current;return!c.current||ee>=n||ee<0||V&&X-f.current>=R},L=function(X){return h.current=null,w&&x.current?U(X):(x.current=m.current=null,v.current)},de=function X(){var ee=Date.now();if(k&&u.current===f.current&&Ce(),Z(ee))return L(ee);if(_.current){var we=n-(ee-c.current),K=V?Math.min(we,R-(ee-f.current)):we;fe(X,K)}},Ce=function(){},me=function(){if(C||z){var X,ee=Date.now(),we=Z(ee);if(x.current=[].slice.call(arguments),m.current=i,c.current=ee,H&&!E.current&&(E.current=function(){var K;((K=globalThis.document)==null?void 0:K.visibilityState)==="hidden"&&b.current.flush()},(X=globalThis.document)==null||X.addEventListener==null||X.addEventListener("visibilitychange",E.current)),we){if(!h.current&&_.current)return f.current=c.current,fe(de,n),k?U(c.current):v.current;if(V)return fe(de,n),U(c.current)}return h.current||fe(de,n),v.current}};return me.cancel=function(){var X=h.current;X&&(D?cancelAnimationFrame(h.current):clearTimeout(h.current)),f.current=0,x.current=c.current=m.current=h.current=null},me.isPending=function(){return!!h.current},me.flush=function(){return h.current?L(Date.now()):v.current},me},[k,V,n,R,w,H,D,C,z,s]);return b.current=W,te.useEffect(function(){return _.current=!0,function(){var U;H&&b.current.flush(),E.current&&((U=globalThis.document)==null||U.removeEventListener==null||U.removeEventListener("visibilitychange",E.current),E.current=null),_.current=!1}},[H]),W}const Ec=e=>{if(!e.trim())return null;try{return new Function("response","pm",e),null}catch(n){let r=n;if(r instanceof SyntaxError&&/await/i.test(r.message))try{return new Function("response","pm",`(async () => {
${e}
})`),null}catch(h){r=h}const s=r instanceof Error?r.message:"Invalid JavaScript",i=/position (\d+)/i.exec(s),c=/line (\d+)/i.exec(s),f=/Unexpected (?:token|identifier)\s+['"]?([^'"\s]+)['"]?/i.exec(s);let u=0;if(i){const h=Number(i[1]);u=Math.min(h,Math.max(e.length-1,0))}else if(c){const h=Number(c[1]),x=e.split(`
`);let m=0;for(let v=0;v<Math.min(h-1,x.length);v++)m+=x[v].length+1;u=Math.min(m,Math.max(e.length-1,0))}else if(f&&f[1]){const h=f[1],x=e.lastIndexOf(h);u=x!==-1?x:Math.max(e.length-1,0)}else u=Math.max(e.length-1,0);return{from:u,to:Math.min(u+1,e.length),severity:"error",message:s}}},jw={"crypto-js":"^4.2.0"},Iw=[q2,V2],Hw=()=>{const e=cn(),n=$e(b2),r=$e(hl),s=$e(Wc),[i,c]=te.useState(n),f=te.useRef(n),u=te.useRef(r),h=Lw(_=>{f.current=_,e(w8({script:_}))},300);te.useEffect(()=>{if(u.current!==r){u.current=r,h.cancel(),f.current=n,c(n);return}n!==f.current&&(f.current=n,c(n))},[r,n,h]),te.useEffect(()=>()=>{h.cancel()},[h]);const x=te.useMemo(()=>Ec(i),[i]),m=te.useMemo(()=>J2(_=>{const E=Ec(_.state.doc.toString());return E?[E]:[]},{delay:200}),[]),v=te.useMemo(()=>[m],[m]),y=te.useCallback(_=>{c(_),h(_)},[h]);return g.jsxs("div",{className:"relative rounded-lg overflow-hidden",children:[g.jsx("div",{className:"min-h-[280px] resize-y overflow-hidden rounded-lg border border-border",children:g.jsx(Pc,{editorKey:`${r}-${s??"actual"}`,showSearch:!0,fileName:"script.js",extensions:v,value:i,onChange:y,autoComplete:Iw,dependencies:jw})}),x&&g.jsxs("p",{role:"alert",className:"mt-2 rounded-md border border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-950/40 px-3 py-2 text-xs text-red-700 dark:text-red-300",children:["Invalid JavaScript: ",x.message]})]})},zw={"crypto-js":"^4.2.0"},Uw=[q2,V2],fg={id:"mock-req-id",name:"Mock Request",method:"GET",url:{raw:"https://api.example.com/users",host:["api","example","com"],path:["users"],query:[]},headers:[{id:"h1",key:"Accept",value:"application/json"}],query:[],body:{mode:"raw",raw:`{
  "title": "foo",
  "body": "bar"
}`},script:"",version:"1.0"},Ww=({isExpanded:e,onExpand:n,onCollapse:r})=>{const s=cn(),i=$e(S2),c=$e(ih),{push:f,isPushing:u}=uh(),[h,x]=te.useState(i),[m,v]=te.useState(!1),[y,_]=te.useState(""),[E,b]=te.useState([]),[C,D]=te.useState({}),[k,w]=te.useState(null),[H,V]=te.useState(!1),[z,R]=te.useState(fg),[W,U]=te.useState(!1);te.useEffect(()=>{x(i)},[i]);const fe=te.useMemo(()=>Ec(h),[h]),Z=te.useMemo(()=>J2(K=>{const ne=Ec(K.state.doc.toString());return ne?[ne]:[]},{delay:200}),[]),L=te.useMemo(()=>[Z],[Z]),de=async()=>{s(A8({script:h})),await f()},Ce=async()=>{if(!(!h.trim()||m)){v(!0),w(null),V(!0);try{const K={};for(const Te of c)K[Te.key]=Te.value;const ne=await M2({script:h,request:z,variables:K});_(typeof ne.result=="string"?ne.result:JSON.stringify(ne.result,null,2)),b(ne.logs),D(ne.mutations)}catch(K){w(K instanceof Error?K.message:"Unknown error"),_(""),b([]),D({})}finally{v(!1)}}},me=()=>{R(K=>({...K,headers:[...K.headers||[],{id:crypto.randomUUID(),key:"",value:""}]}))},X=(K,ne,Te)=>{R(O=>{const J=[...O.headers||[]];return J[K]&&(J[K]={...J[K],[ne]:Te}),{...O,headers:J}})},ee=K=>{R(ne=>({...ne,headers:(ne.headers||[]).filter((Te,O)=>O!==K)}))},we=()=>{R(fg)};return g.jsxs("div",{className:"flex flex-col min-h-0 h-full",children:[e&&g.jsxs("div",{className:"flex items-center justify-between shrink-0 mb-2 px-1",children:[g.jsx("span",{className:"text-sm font-medium text-foreground",children:"Collection Pre-request Script"}),g.jsx(Ve,{variant:"ghost",size:"sm",className:"h-8 w-8 p-0",onClick:r,children:g.jsx(L3,{className:"h-4 w-4"})})]}),g.jsxs("div",{className:"flex items-center gap-2 shrink-0 mb-2",children:[g.jsxs(Ve,{variant:"outline",size:"sm",disabled:u,onClick:de,children:[g.jsx(_v,{className:"h-4 w-4 mr-1"}),u?"Saving...":"Save"]}),g.jsxs(Ve,{variant:"outline",size:"sm",disabled:m||!h.trim(),onClick:Ce,children:[g.jsx(j3,{className:"h-4 w-4 mr-1"})," Run"]}),g.jsxs(Ve,{variant:W?"secondary":"outline",size:"sm",onClick:()=>U(!W),title:"Configure mock request variable for testing",children:[g.jsx(Fm,{className:"h-4 w-4 mr-1"})," Mock Request"]}),!e&&g.jsx(Ve,{variant:"ghost",size:"sm",className:"h-8 w-8 p-0 ml-auto",onClick:n,children:g.jsx(I3,{className:"h-4 w-4"})})]}),g.jsxs("div",{className:"flex flex-1 min-h-0 gap-3",children:[g.jsxs("div",{className:"flex-1 flex flex-col min-h-0 min-w-0",children:[g.jsx("div",{className:Re("min-h-0 rounded-lg border border-border overflow-hidden",e?"flex-1":"flex-[1_0_260px]"),children:g.jsx(Pc,{value:h,onChange:x,fileName:"script.js",showSearch:!0,dependencies:zw,autoComplete:Uw,extensions:L,className:"h-full"})}),fe&&g.jsxs("p",{role:"alert",className:"mt-2 shrink-0 rounded-md border border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-950/40 px-3 py-2 text-xs text-red-700 dark:text-red-300",children:["Invalid JavaScript: ",fe.message]}),H&&g.jsxs("div",{className:Re("shrink-0 overflow-auto rounded-lg border border-border mt-2",e?"flex-[0_0_220px]":"flex-[0_0_190px]"),children:[g.jsxs("div",{className:"px-3 py-1.5 bg-muted text-xs font-medium text-muted-foreground flex items-center justify-between",children:[g.jsx("span",{children:"Output"}),g.jsx(Ve,{variant:"ghost",size:"sm",className:"h-6 w-6 p-0 text-muted-foreground",onClick:()=>V(!1),children:g.jsx(ga,{className:"h-3 w-3"})})]}),g.jsxs("div",{className:"p-3 space-y-2 text-xs font-mono",children:[m&&g.jsx("div",{className:"text-muted-foreground",children:"Running pre-request script..."}),k&&g.jsx("div",{className:"text-red-500 whitespace-pre-wrap",children:k}),y&&!k&&g.jsxs("div",{children:[g.jsx("div",{className:"text-muted-foreground mb-1",children:"Result:"}),g.jsx("pre",{className:"text-foreground whitespace-pre-wrap bg-muted/40 p-2 rounded",children:y})]}),Object.keys(C).length>0&&g.jsxs("div",{children:[g.jsx("div",{className:"text-muted-foreground mb-1",children:"Variable Mutations:"}),Object.entries(C).map(([K,ne])=>g.jsxs("div",{className:"flex gap-2",children:[g.jsx("span",{className:"text-foreground",children:K}),g.jsx("span",{className:"text-muted-foreground",children:"→"}),g.jsx("span",{className:"text-emerald-400",children:ne??"(deleted)"})]},K))]}),E.map((K,ne)=>{const Te={error:"text-red-400",warn:"text-amber-400",info:"text-blue-400",log:"text-foreground"};return g.jsxs("div",{className:"flex gap-2",children:[g.jsxs("span",{className:Re("shrink-0",Te[K.type]??"text-muted-foreground"),children:["[",K.type,"]"]}),g.jsx("span",{className:"text-foreground break-all",children:K.message})]},ne)})]})]})]}),W&&g.jsxs("div",{className:"w-80 shrink-0 border border-border rounded-lg bg-card flex flex-col min-h-0 overflow-hidden text-xs",children:[g.jsxs("div",{className:"px-3 py-2 border-b border-border bg-muted/50 flex items-center justify-between shrink-0",children:[g.jsxs("span",{className:"font-semibold flex items-center gap-1.5 text-foreground",children:[g.jsx(Fm,{className:"h-3.5 w-3.5 text-primary"})," Mock Request Variable"]}),g.jsxs("div",{className:"flex items-center gap-1",children:[g.jsx(Ve,{variant:"ghost",size:"sm",className:"h-6 w-6 p-0 text-muted-foreground",title:"Reset mock request",onClick:we,children:g.jsx(H3,{className:"h-3.5 w-3.5"})}),g.jsx(Ve,{variant:"ghost",size:"sm",className:"h-6 w-6 p-0 text-muted-foreground",onClick:()=>U(!1),children:g.jsx(ma,{className:"h-3.5 w-3.5"})})]})]}),g.jsxs("div",{className:"p-3 space-y-3 overflow-y-auto flex-1 min-h-0",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-[11px] font-medium text-muted-foreground mb-1",children:"Method"}),g.jsxs(Ms,{value:z.method,onValueChange:K=>R(ne=>({...ne,method:K})),children:[g.jsx(js,{className:"h-7 text-xs",children:g.jsx(Ls,{placeholder:"Method"})}),g.jsxs(Is,{children:[g.jsx(bn,{value:"GET",children:"GET"}),g.jsx(bn,{value:"POST",children:"POST"}),g.jsx(bn,{value:"PUT",children:"PUT"}),g.jsx(bn,{value:"PATCH",children:"PATCH"}),g.jsx(bn,{value:"DELETE",children:"DELETE"})]})]})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-[11px] font-medium text-muted-foreground mb-1",children:"URL (request.url.raw)"}),g.jsx(ut,{value:z.url?.raw??"",onChange:K=>R(ne=>({...ne,url:{...ne.url,raw:K.target.value}})),placeholder:"https://api.example.com/users",className:"h-7 text-xs font-mono"})]}),g.jsxs("div",{children:[g.jsxs("div",{className:"flex items-center justify-between mb-1",children:[g.jsx("label",{className:"text-[11px] font-medium text-muted-foreground",children:"Headers (request.headers)"}),g.jsxs(Ve,{variant:"ghost",size:"sm",className:"h-5 px-1.5 text-[10px]",onClick:me,children:[g.jsx(Ws,{className:"h-3 w-3 mr-0.5"})," Add"]})]}),g.jsxs("div",{className:"space-y-1 max-h-36 overflow-y-auto pr-1",children:[(z.headers||[]).map((K,ne)=>g.jsxs("div",{className:"flex items-center gap-1",children:[g.jsx(ut,{value:K.key,onChange:Te=>X(ne,"key",Te.target.value),placeholder:"Key",className:"h-6 text-xs px-1.5 font-mono flex-1"}),g.jsx(ut,{value:K.value,onChange:Te=>X(ne,"value",Te.target.value),placeholder:"Value",className:"h-6 text-xs px-1.5 font-mono flex-1"}),g.jsx(Ve,{variant:"ghost",size:"sm",className:"h-6 w-6 p-0 text-muted-foreground hover:text-red-400 shrink-0",onClick:()=>ee(ne),children:g.jsx(ga,{className:"h-3 w-3"})})]},K.id||ne)),(z.headers||[]).length===0&&g.jsx("div",{className:"text-[11px] text-muted-foreground italic text-center py-2",children:"No headers configured"})]})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-[11px] font-medium text-muted-foreground mb-1",children:"Body (request.body.raw)"}),g.jsx(IE,{value:z.body?.raw??"",onChange:K=>R(ne=>({...ne,body:{raw:K.target.value,mode:"raw"}})),placeholder:'{\\n  "key": "value"\\n}',className:"text-xs font-mono min-h-[90px] h-28"})]})]})]})]})]})},Pw=()=>{const e=cn(),n=$e(v2),{push:r,isPushing:s}=uh(),[i,c]=te.useState("none"),[f,u]=te.useState(""),[h,x]=te.useState(!1);te.useEffect(()=>{if(!n){c("none"),u("");return}if((n.type||"").toLowerCase()==="bearer"){c("bearer");const y=n.bearer?.find(_=>_.key?.toLowerCase()==="token")?.value??n.bearer?.[0]?.value??"";u(y)}else c("none"),u("")},[n]);const m=async()=>{e(qm(i==="none"?{type:"none",bearer:[]}:{type:"bearer",bearer:[{key:"token",value:f,type:"string"}]})),await r()};return g.jsxs("div",{className:"flex flex-col h-full min-h-0 space-y-4",children:[g.jsxs("div",{className:"flex items-center justify-between shrink-0",children:[g.jsxs("div",{children:[g.jsx("h3",{className:"text-sm font-semibold text-foreground",children:"Auth Manager"}),g.jsx("p",{className:"text-xs text-muted-foreground",children:"Configure collection-level authorization. Requests set to inherit auth will use these settings."})]}),g.jsxs(Ve,{variant:"outline",size:"sm",disabled:s,onClick:m,children:[g.jsx(_v,{className:"h-4 w-4 mr-1.5"}),s?"Saving...":"Save"]})]}),g.jsxs("div",{className:"flex-1 overflow-auto rounded-lg border border-border p-4 space-y-4 bg-card",children:[g.jsxs("div",{className:"space-y-1.5",children:[g.jsx("label",{className:"text-xs font-medium text-foreground",children:"Auth Type"}),g.jsxs(Ms,{value:i,onValueChange:v=>c(v),children:[g.jsx(js,{className:"w-full",children:g.jsx(Ls,{placeholder:"Select auth type"})}),g.jsxs(Is,{children:[g.jsx(bn,{value:"none",children:"No Auth"}),g.jsx(bn,{value:"bearer",children:"Bearer Token"})]})]})]}),i==="bearer"&&g.jsxs("div",{className:"space-y-1.5",children:[g.jsx("label",{className:"text-xs font-medium text-foreground",children:"Token"}),g.jsxs("div",{className:"relative",children:[g.jsx(ut,{type:h?"text":"password",value:f,onChange:v=>u(v.target.value),placeholder:"Enter bearer token or {{variable}}...",className:"pr-10"}),g.jsx(Ve,{type:"button",variant:"ghost",size:"sm",className:"absolute right-0 top-0 h-full px-3 text-muted-foreground hover:text-foreground",onClick:()=>x(!h),children:h?g.jsx(jc,{className:"h-4 w-4"}):g.jsx(Ic,{className:"h-4 w-4"})})]}),g.jsxs("p",{className:"text-[11px] text-muted-foreground",children:["Authorization header will be automatically formatted as"," ",g.jsx("code",{className:"font-mono text-xs text-foreground",children:"Bearer <token>"}),"."]})]}),g.jsx("div",{className:"rounded-md border border-border bg-muted/40 p-3 text-xs flex items-start gap-2.5 text-muted-foreground",children:i==="bearer"?g.jsxs(g.Fragment,{children:[g.jsx(hc,{className:"h-4 w-4 text-emerald-500 shrink-0 mt-0.5"}),g.jsxs("div",{children:[g.jsx("span",{className:"font-medium text-foreground",children:"Bearer Token Active"}),g.jsx("p",{className:"mt-0.5",children:'Requests inside this collection configured with "Inherit From Parent" will automatically send this Bearer token.'})]})]}):g.jsxs(g.Fragment,{children:[g.jsx(z3,{className:"h-4 w-4 text-muted-foreground shrink-0 mt-0.5"}),g.jsxs("div",{children:[g.jsx("span",{className:"font-medium text-foreground",children:"No Authorization"}),g.jsx("p",{className:"mt-0.5",children:"No default authorization headers will be injected into child requests."})]})]})})]})]})},Xw=({open:e,onOpenChange:n})=>{const[r,s]=te.useState(!1),[i,c]=te.useState("environment");return te.useEffect(()=>{e||(s(!1),c("environment"))},[e]),g.jsx(AE,{open:e,onOpenChange:n,children:g.jsxs(DE,{className:Re("flex flex-col h-[80vh] pt-6 pb-4 px-4 transition-all duration-300 ease-in-out",r||i==="scripts"?"sm:max-w-5xl max-w-5xl":"sm:max-w-3xl max-w-3xl"),children:[!r&&g.jsxs(BE,{className:"shrink-0 mb-3",children:[g.jsx(RE,{children:"Collection Settings"}),g.jsx(NE,{children:"Manage your collection variables, pre-request scripts, and authorization."})]}),g.jsxs(xl,{orientation:"vertical",value:i,onValueChange:c,className:"flex-row gap-0 flex-1 min-h-0",children:[!r&&g.jsxs(pl,{className:"flex-col h-full w-12 shrink-0 rounded-lg",children:[g.jsx($n,{value:"environment",title:"Variables",children:g.jsx(U3,{className:"h-4 w-4 m-0"})}),g.jsx($n,{value:"scripts",title:"Scripts",children:g.jsx(W3,{className:"h-4 w-4 m-0"})}),g.jsx($n,{value:"auth",title:"Auth Manage",children:g.jsx(P3,{className:"h-4 w-4 m-0"})})]}),g.jsxs("div",{className:Re("flex-1 min-w-0",!r&&"pl-4"),children:[g.jsx(Xr,{value:"environment",className:"flex flex-col h-full min-h-0",children:g.jsx(ME,{})}),g.jsx(Xr,{value:"scripts",className:"flex flex-col h-full min-h-0",children:g.jsx(Ww,{isExpanded:r,onExpand:()=>s(!0),onCollapse:()=>s(!1)})}),g.jsx(Xr,{value:"auth",className:"flex flex-col h-full min-h-0",children:g.jsx(Pw,{})})]})]}),g.jsx(FE,{className:"shrink-0 mt-3",children:g.jsx(OE,{children:"Close"})})]})})},Gw=({onSend:e})=>{const n=cn(),r=wE(),s=$e(lh),i=$e(G8),c=$e(ih),f=$e(b2),u=$e(S2),h=$e(y2),x=$e(hl),m=$e(Wc),v=te.useRef(c);te.useEffect(()=>{v.current=c},[c]);const y=te.useCallback(he=>{const ve=typeof he=="function"?he(v.current):he;v.current=ve,n(B8(ve))},[n]);te.useEffect(()=>{const he=s?.request?.url?.raw??"",ve=he.indexOf("?");H(ve>=0?he.slice(0,ve):he)},[s?.request?.url?.raw]),te.useEffect(()=>{const he=s?.request?.method?.toUpperCase()||"GET";C(he)},[s?.request?.method]),te.useEffect(()=>{if(i.length===0){k("");return}k(he=>he&&i.includes(he)?he:i[0]??"")},[i]),te.useEffect(()=>{Z()},[]);const _=["GET","POST","PUT","PATCH","DELETE"],E={GET:"bg-emerald-600 dark:bg-emerald-600 hover:bg-emerald-700 dark:hover:bg-emerald-700",POST:"bg-amber-600 dark:bg-amber-600 hover:bg-amber-700 dark:hover:bg-amber-700",PUT:"bg-blue-600 dark:bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-700",PATCH:"bg-violet-600 dark:bg-violet-600 hover:bg-violet-700 dark:hover:bg-violet-700",DELETE:"bg-red-600 dark:bg-red-600 hover:bg-red-700 dark:hover:bg-red-700"},[b,C]=te.useState("GET"),[D,k]=te.useState(""),[w,H]=te.useState(s?.request?.url.raw??""),[V,z]=te.useState(""),[R,W]=te.useState(!1),[U,fe]=te.useState(!1),{pull:Z,push:L,isPulling:de,isPushing:Ce}=uh(),{theme:me,setTheme:X,resolvedTheme:ee}=Zd(),[we,K]=te.useState(!1);te.useEffect(()=>{K(!0)},[]);const ne=we?(ee||me)==="dark":!1,Te=he=>he.replace(/\{\{([^{}]+)\}\}/g,(ve,ye)=>{const _e=ye.trim();return c.find(I=>I.key===_e)?.value??`{{${ye}}}`}),O=he=>{const ve=he.indexOf("?");if(ve===-1)return{cleanUrl:he,params:[]};const ye=he.slice(0,ve),_e=he.slice(ve+1),Pe=_e.indexOf("#"),I=Pe>=0?_e.slice(0,Pe):_e,st=Pe>=0?_e.slice(Pe):"",Ue=[];return new URLSearchParams(I).forEach((qe,Be)=>{Ue.push({id:crypto.randomUUID(),key:Be,value:qe,disabled:!1})}),{cleanUrl:ye+st,params:Ue}},J=he=>{const ve=he.replace(/\{\{[^{}]+\}\}/g,"").trim();if(/^https?:\/\//i.test(ve))try{const ye=new URL(ve);return`${ye.pathname}${ye.hash}`}catch{return ve.split("?")[0]}return ve.split("?")[0]},P=async()=>{if(!s?.id||R)return;e&&e(),W(!0);const he={id:s.id,name:s.name,method:b,headers:(s.request?.header??[]).map(ve=>({...ve})),query:(s.request?.url?.query??[]).map(ve=>({...ve})),url:{raw:s.request?.url?.raw??w,host:s.request?.url?.host??[],path:s.request?.url?.path??[],query:s.request?.url?.query??[]},body:s.request?.body,script:f??"",version:"1.0"};try{await r({baseUrl:D,endpoint:J(w),method:b,headers:(s?.request?.header??[]).filter(ve=>!ve.disabled).map(ve=>({...ve,value:Te(ve.value??"")})),requestParams:(s?.request?.url.query??[]).filter(ve=>!ve.disabled),contentType:IC(s),raw:s?.request?.body?.raw,formData:s?.request?.body?.formdata},{requestId:s.id,request:he,preScriptValue:u,scriptValue:f,runtimeVariables:[...v.current],setRuntimeVariables:y})}finally{W(!1)}};te.useEffect(()=>{const he=ve=>{if(!(!h||R||de||Ce)&&!(!ve.ctrlKey&&!ve.metaKey))switch(ve.key){case"Enter":ve.preventDefault(),P();break;case"s":ve.preventDefault(),L();break;case"p":ve.preventDefault(),Z();break}};return window.addEventListener("keydown",he),()=>window.removeEventListener("keydown",he)});const G=()=>{const he=V.trim();if(!he)return;const ve={id:crypto.randomUUID(),key:"base_url",value:he,category:"BASE_URL",type:"string"};n(F8(ve)),z("")},ue=async()=>{de||Ce||(await Z(),await L())};return g.jsxs("header",{className:`fixed top-0 z-50 w-full gap-4 h-[60px] bg-background border-b border-border px-6 shadow-sm\r
         flex flex-row items-center`,children:[g.jsxs("div",{className:"basis-1/4 flex flex-row h-full items-center gap-3",children:[g.jsx("img",{src:uE.APP_LOGO,alt:"Stock management",className:"w-[30px] h-[37px] object-cover"}),g.jsx("h1",{className:"text-xl italic font-semibold text-foreground",children:"Apitester"}),g.jsxs("div",{className:"flex items-center h-full gap-2 ml-4",children:[g.jsx(Ve,{variant:"outline",size:"sm",className:"h-9",onClick:()=>fe(!0),children:g.jsx(X3,{className:"h-4 w-4"})}),g.jsx(Ve,{variant:"outline",size:"sm",className:"h-9",disabled:de||Ce,onClick:ue,children:g.jsx(G3,{className:Re("h-4 w-4",(de||Ce)&&"animate-spin")})}),g.jsx(Ve,{variant:"outline",size:"sm",className:"h-9",title:ne?"Switch to light mode":"Switch to dark mode","aria-label":ne?"Switch to light mode":"Switch to dark mode",onClick:()=>X(ne?"light":"dark"),children:ne?g.jsx(q3,{className:"h-4 w-4 text-amber-500"}):g.jsx(V3,{className:"h-4 w-4 text-slate-700 dark:text-slate-300"})}),g.jsx(Xw,{open:U,onOpenChange:fe})]})]}),g.jsxs("div",{className:"basis-3/4 flex items-center h-full gap-3",children:[g.jsxs(Ms,{value:b,disabled:!h||!s||Km(x),onValueChange:he=>{const ve=he;C(ve),s?.id?n(Dd({method:ve,id:s.id})):n(Dd({method:ve}))},children:[g.jsx(js,{className:Re("min-w-[110px] font-semibold text-white dark:text-white border-transparent dark:border-transparent [&_svg]:text-white",E[b]),children:g.jsx(Ls,{placeholder:"Method"})}),g.jsx(Is,{children:_.map(he=>g.jsx(bn,{value:he,className:Re("font-semibold text-foreground"),children:he},he))})]}),g.jsxs("div",{className:"flex w-full items-center rounded-md border border-input bg-transparent shadow-xs",children:[i.length>0?g.jsxs(Ms,{value:D,disabled:!h,onValueChange:k,children:[g.jsx(js,{className:"w-[240px] rounded-none border-0 border-r border-input shadow-none focus-visible:ring-0",children:g.jsx(Ls,{placeholder:"Select Base URL"})}),g.jsx(Is,{children:i.map(he=>g.jsx(bn,{value:he,children:he},he))})]}):g.jsxs("div",{className:"flex w-full items-center",children:[g.jsx(ut,{value:V,disabled:!h,onChange:he=>z(he.target.value),className:"border-0 rounded-none shadow-none focus-visible:ring-0",placeholder:"https://api.example.com","aria-label":"Add base URL"}),g.jsx(Ve,{variant:"ghost",size:"sm",disabled:!h||!V.trim(),className:"h-full rounded-none border-l border-input px-2 shrink-0",onClick:G,children:g.jsx(Ws,{className:"h-4 w-4"})})]}),g.jsx(ut,{value:J(w),disabled:!h,onChange:he=>{const ve=he.target.value,{cleanUrl:ye,params:_e}=O(ve);H(ye),n(h2({raw:ye}));const Pe=s?.request?.url?.query??[];_e.forEach(I=>{const st=Pe.find(Ue=>Ue.key===I.key);n(st?ah({query:{...st,value:I.value}}):rh({query:I}))})},className:"border-0 rounded-none shadow-none focus-visible:ring-0",placeholder:"/v1/users","aria-label":"Endpoint path"})]}),g.jsxs(Ve,{disabled:!h||R||Km(x)||!!m,onClick:P,title:m?"Switch to Actual Response to send":void 0,className:"bg-indigo-600 hover:bg-indigo-700 text-white whitespace-nowrap",children:[R?g.jsx(K3,{className:"h-4 w-4 mr-2 animate-spin"}):g.jsx(Y3,{className:"h-4 w-4 mr-2"}),"Send Request"]})]})]})},qw=()=>{const[e,n]=te.useState(!0);return e?g.jsxs("div",{className:"fixed bottom-4 left-4 z-50 flex flex-col gap-1 rounded-md border border-border bg-card/80 px-3 py-2 text-xs text-muted-foreground shadow-lg backdrop-blur-xl",children:[g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsx("span",{className:"text-[11px] font-semibold text-foreground",children:"Shortcuts"}),g.jsx("button",{onClick:()=>n(!1),className:"text-muted-foreground hover:text-foreground",children:g.jsx(ma,{size:14})})]}),g.jsxs("span",{children:[g.jsx("kbd",{className:"rounded border border-border bg-muted px-1 font-mono text-[11px] text-foreground",children:"Ctrl+Enter"})," Send Request"]}),g.jsxs("span",{children:[g.jsx("kbd",{className:"rounded border border-border bg-muted px-1 font-mono text-[11px] text-foreground",children:"Ctrl+S"})," Push to Collection"]}),g.jsxs("span",{children:[g.jsx("kbd",{className:"rounded border border-border bg-muted px-1 font-mono text-[11px] text-foreground",children:"Ctrl+P"})," Pull from Collection"]})]}):g.jsx("button",{onClick:()=>n(!0),className:"fixed bottom-4 left-4 z-50 rounded-full border border-border bg-card/80 p-2 shadow-lg backdrop-blur-xl text-muted-foreground hover:text-foreground",children:g.jsx(J3,{size:16})})},Vw=te.createContext(null),Kw=({children:e})=>{const[n,r]=te.useState(null),s=te.useMemo(()=>({setHeaderAction:r}),[]);return g.jsx(r8,{children:g.jsxs(Vw.Provider,{value:s,children:[g.jsx(Gw,{onSend:n}),g.jsx(cE,{}),g.jsx(qw,{}),g.jsx("main",{className:"flex-1 pt-[73px] overflow-hidden h-100dvh md:pl-64",children:e})]})})},Yw=Vv("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"}},defaultVariants:{variant:"default"}});function vh({className:e,variant:n,asChild:r=!1,...s}){const i=r?xv:"span";return g.jsx(i,{"data-slot":"badge",className:Re(Yw({variant:n}),e),...s})}const Jw=({authType:e,bearerValue:n,onBearerChange:r})=>{switch(e){case"none":return g.jsxs("div",{children:[g.jsx("p",{className:"text-sm font-medium text-foreground",children:"Authorization Value"}),g.jsx(ut,{className:"bg-muted",disabled:!0,type:"text",readOnly:!0})]});case"bearer":return g.jsxs("div",{children:[g.jsx("p",{className:"text-sm font-medium text-foreground",children:"Bearer Token"}),g.jsx(ut,{type:"password",value:n??"",onChange:s=>r?.(s.target.value),placeholder:"Enter bearer token..."})]});default:return g.jsxs("div",{children:[g.jsx("p",{className:"text-sm font-medium text-foreground",children:"Inherited Authorization"}),g.jsx(ut,{className:"bg-muted",type:"text",value:"****************************",readOnly:!0})]})}},Qw=({authType:e})=>{switch(e){case"none":return g.jsxs("div",{className:"flex items-center gap-2 font-medium rounded-md border border-orange-200 dark:border-orange-900/50 bg-orange-50 dark:bg-orange-950/40 p-3 text-orange-700 dark:text-orange-300",children:[g.jsx(hc,{className:"h-4 w-4"}),"No auth will be sent for this request."]});case"bearer":return g.jsxs("div",{className:"flex items-center gap-2 font-medium rounded-md border border-emerald-200 dark:border-emerald-900/50 bg-emerald-50 dark:bg-emerald-950/40 p-3 text-emerald-700 dark:text-emerald-300",children:[g.jsx(hc,{className:"h-4 w-4"}),"Authorization is scoped to this request only."]});default:return g.jsxs("div",{className:"flex items-center gap-2 font-medium rounded-md border border-emerald-200 dark:border-emerald-900/50 bg-emerald-50 dark:bg-emerald-950/40 p-3 text-emerald-700 dark:text-emerald-300",children:[g.jsx(hc,{className:"h-4 w-4"}),"Using token from parent collection"]})}},Zw=({className:e="grid gap-4 rounded-lg border border-border p-4 md:grid-cols-2"})=>{const n=cn(),r=$e(J8),s=$e(sh),i=$e(v2),c=te.useRef(r);te.useEffect(()=>{if(c.current!==r){if(c.current=r,r==="inherit"){const x=s.find(m=>m.key==="Authorization")?.id??crypto.randomUUID();n(Rs({header:{id:x,key:"Authorization",value:(i.bearer&&i.bearer[0]?.value)??""}}))}else if(r==="bearer"){const x=s.find(m=>m.key==="Authorization")?.id;x&&n(dl({id:x})),n(Rs({header:{key:"Authorization",value:"",id:crypto.randomUUID()}}))}else if(r==="none"){const x=s.find(m=>m.key==="Authorization")?.id;x&&n(dl({id:x}))}}},[r,n,s,i]);const f=s.find(x=>x.key==="Authorization")?.value??"",u=x=>{const m=s.find(v=>v.key==="Authorization");n(Rs({header:{id:m?.id??crypto.randomUUID(),key:"Authorization",value:x}}))},h=x=>{n(N8({authType:x}))};return g.jsxs("div",{className:Re(e),children:[g.jsxs("div",{className:"space-y-2",children:[g.jsx("p",{className:"text-sm font-medium text-slate-700",children:"Auth Type"}),g.jsxs(Ms,{value:r,onValueChange:x=>h(x),children:[g.jsx(js,{children:g.jsx(Ls,{})}),g.jsxs(Is,{children:[g.jsx(bn,{value:"none",children:"No Auth"}),g.jsx(bn,{value:"inherit",children:"Inherit From Parent"}),g.jsx(bn,{value:"bearer",children:"Bearer Token"})]})]})]}),g.jsx("div",{className:"space-y-2",children:g.jsx(Jw,{authType:r,bearerValue:f,onBearerChange:u})}),g.jsx("div",{className:"md:col-span-2 rounded-md border text-sm",children:g.jsx(Qw,{authType:r})})]})},$w=({query:e,updateQuery:n,className:r})=>{const s=cn(),i=$e(y8),c=e??i??[],[f,u]=te.useState(""),[h,x]=te.useState(""),[m,v]=te.useState(""),y=C=>{n?n(c.map(D=>D.id===C.id?C:D)):s(ah({query:C}))},_=C=>{y({...C,disabled:!C.disabled})},E=C=>{C&&(n?n(c.filter(D=>D.id!==C)):s(d2({id:C})))},b=()=>{if(!f.trim())return;const C={id:crypto.randomUUID(),key:f.trim(),value:h,description:m,disabled:!1};n?n([...c,C]):s(rh({query:C})),u(""),x(""),v("")};return g.jsxs("div",{className:Re("overflow-hidden rounded-lg border border-border",r),children:[g.jsxs("div",{className:"grid grid-cols-12 gap-x-2 bg-muted px-3 py-2 text-xs font-medium uppercase tracking-wide text-muted-foreground",children:[g.jsx("span",{className:"col-span-3",children:"Key"}),g.jsx("span",{className:"col-span-3",children:"Value"}),g.jsx("span",{className:"col-span-4",children:"Description"}),g.jsx("span",{className:"col-span-2"})]}),c.map(C=>g.jsxs("div",{className:Re("grid grid-cols-12 gap-x-2 border-t border-border px-3 py-2 items-center",C.disabled&&"opacity-50"),children:[g.jsx(ut,{value:C.key,readOnly:!0,className:"col-span-3 h-8 bg-background",disabled:C.disabled}),g.jsx(ut,{value:C.value,onChange:D=>y({...C,value:D.target.value}),className:"col-span-3 h-8 bg-background",disabled:C.disabled}),g.jsx(ut,{value:C.description??"",onChange:D=>y({...C,description:D.target.value}),className:"col-span-4 h-8 text-xs bg-background",disabled:C.disabled,placeholder:"description"}),g.jsxs("div",{className:"col-span-2 flex justify-end gap-1",children:[g.jsx(Ve,{type:"button",variant:"outline",size:"sm",onClick:()=>_(C),className:"h-8 w-8 p-0",children:C.disabled?g.jsx(Hc,{className:"h-4 w-4 text-muted-foreground"}):g.jsx(zc,{className:"h-4 w-4 text-emerald-600"})}),g.jsx(Ve,{type:"button",variant:"ghost",size:"sm",onClick:()=>E(C.id),className:"h-8 w-8 p-0 text-destructive hover:text-destructive hover:bg-destructive/10",children:g.jsx(ga,{className:"h-4 w-4"})})]})]},C.id??C.key)),g.jsxs("div",{className:"grid grid-cols-12 gap-x-2 border-t border-border px-3 py-2 items-center",children:[g.jsx(ut,{value:f,onChange:C=>u(C.target.value),className:"col-span-3 h-8",placeholder:"key"}),g.jsx(ut,{value:h,onChange:C=>x(C.target.value),className:"col-span-3 h-8",placeholder:"value"}),g.jsx(ut,{value:m,onChange:C=>v(C.target.value),className:"col-span-4 h-8 text-xs",placeholder:"description"}),g.jsx("div",{className:"col-span-2 flex justify-end",children:g.jsx(Ve,{type:"button",variant:"outline",size:"sm",onClick:b,className:"h-8 w-8 p-0",children:g.jsx(Ws,{className:"h-4 w-4"})})})]})]})},eA=({headers:e,updateHeaders:n,className:r})=>{const s=cn(),i=$e(sh),c=e??i??[],[f,u]=te.useState(""),[h,x]=te.useState(""),[m,v]=te.useState(!1),y=[{id:"sys-cache",key:"Cache-Control",value:"no-cache",disabled:!1},{id:"sys-ua",key:"User-Agent",value:"ApiTesterAgent/0.0.1",disabled:!1},{id:"sys-host",key:"Host",value:zC(),disabled:!1},{id:"sys-accept",key:"Accept",value:"*/*",disabled:!1},{id:"sys-encoding",key:"Accept-Encoding",value:"gzip, deflate, br",disabled:!1}],_=m?[...c,...y]:c,E=k=>{n?n(c.map(w=>w.id===k.id?k:w)):s(Rs({header:k}))},b=k=>{E({...k,disabled:!k.disabled})},C=k=>{k&&(n?n(c.filter(w=>w.id!==k)):s(dl({id:k})))},D=()=>{if(!f.trim())return;const k={id:crypto.randomUUID(),key:f.trim(),value:h,disabled:!1};n?n([...c,k]):s(u2({header:k})),u(""),x("")};return g.jsxs("div",{className:r,children:[g.jsx(Ve,{variant:"ghost",size:"xs",className:"mb-4 rounded-full bg-gray-100 hover:bg-gray-200 items-center",onClick:()=>v(k=>!k),children:m?g.jsxs(g.Fragment,{children:[g.jsx(Ic,{className:"text-slate-600",size:10}),g.jsx("span",{className:"text-[10px] font-medium text-slate-600",children:"Hide auto-generated headers"})]}):g.jsxs(g.Fragment,{children:[g.jsx(jc,{className:"text-slate-600",size:10}),g.jsx("span",{className:"text-[10px] font-medium text-slate-600",children:"Show auto-generated headers"})]})}),g.jsxs("div",{className:"overflow-hidden rounded-lg border border-border",children:[g.jsxs("div",{className:"grid grid-cols-12 bg-muted px-3 py-2 text-xs font-medium uppercase tracking-wide text-muted-foreground",children:[g.jsx("span",{className:"col-span-5",children:"Header"}),g.jsx("span",{className:"col-span-5",children:"Value"}),g.jsx("span",{className:"col-span-2"})]}),_.map(k=>{const w=k.id?.startsWith("sys-");return g.jsxs("div",{className:Re("grid grid-cols-12 border-t border-border px-3 py-2 items-center",k.disabled&&"opacity-50"),children:[g.jsx(ut,{value:k.key,readOnly:!0,className:"col-span-5 h-8 bg-background",disabled:k.disabled||w}),g.jsx(ut,{value:k.value,onChange:H=>E({...k,value:H.target.value}),className:"col-span-5 ml-3 h-8 bg-background",disabled:k.disabled||w,readOnly:w}),g.jsx("div",{className:"col-span-2 ml-3 flex justify-end gap-1",children:!w&&g.jsxs(g.Fragment,{children:[g.jsx(Ve,{type:"button",variant:"outline",size:"sm",onClick:()=>b(k),className:"h-8 w-8 p-0",children:k.disabled?g.jsx(Hc,{className:"h-4 w-4 text-muted-foreground"}):g.jsx(zc,{className:"h-4 w-4 text-emerald-600"})}),g.jsx(Ve,{type:"button",variant:"ghost",size:"sm",onClick:()=>C(k.id),className:"h-8 w-8 p-0 text-destructive hover:text-destructive hover:bg-destructive/10",children:g.jsx(ga,{className:"h-4 w-4"})})]})})]},k.id??k.key)}),g.jsxs("div",{className:"grid grid-cols-12 border-t border-border px-3 py-2 items-center",children:[g.jsx(ut,{value:f,onChange:k=>u(k.target.value),className:"col-span-5 h-8",placeholder:"header key"}),g.jsx(ut,{value:h,onChange:k=>x(k.target.value),className:"col-span-5 ml-3 h-8",placeholder:"header value"}),g.jsx("div",{className:"col-span-2 flex justify-end",children:g.jsx(Ve,{type:"button",variant:"outline",size:"sm",onClick:D,className:"h-8 w-8 p-0",children:g.jsx(Ws,{className:"h-4 w-4"})})})]})]})]})};function ey({className:e,...n}){return g.jsx("div",{"data-slot":"card",className:Re("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",e),...n})}const tA=({contentType:e})=>{const n=$e(x2),r=$e(hl),s=$e(Wc),i=cn(),c=te.useRef(null),[f,u]=te.useState(280),[h,x]=te.useState({open:!1,x:0,y:0,selectedText:""});te.useEffect(()=>{const L=c.current;if(!L)return;u(L.clientHeight);const de=new ResizeObserver(Ce=>{const me=Ce[0]?.contentRect.height;me&&u(me)});return de.observe(L),()=>{de.disconnect()}},[]);const m=()=>{x(L=>L.open?{...L,open:!1}:L)},[v]=te.useState([{key:"userId",value:"1"},{key:"token",value:"k1lkedlqk"}]),[y,_]=te.useState(""),E=v.filter(L=>L.key.toLowerCase().includes(y.toLowerCase())),b=(L,de)=>{const Ce=(n?.formdata??[]).map(me=>{if(me.id!==de)return me;const X=L==="disabled"?!me[L]:me[L]==="text"?"file":"text",ee={...me,[L]:X};return L==="type"&&(ee.value="",ee.src="",X==="text"&&Zm(de)),ee});i(Ii({body:Ce}))},C=(L,de,Ce)=>{const me=(n?.formdata??[]).map(X=>X.id===L?{...X,[de]:Ce}:X);i(Ii({body:me}))},D=L=>{Zm(L);const de=(n?.formdata??[]).filter(Ce=>Ce.id!==L);i(Ii({body:de}))},k=(L,de,Ce,me)=>{const X=crypto.randomUUID(),ee={id:X,key:L,value:de,description:Ce,type:me,src:me==="file"?de:""};me==="file"&&Z.current&&(Qm(X,Z.current),Z.current=null);const we=[...n?.formdata??[],ee];i(Ii({body:we}))},[w,H]=te.useState(""),[V,z]=te.useState(""),[R,W]=te.useState("text"),[U,fe]=te.useState(""),Z=te.useRef(null);switch(e){case"application/json":return g.jsxs("div",{className:"relative rounded-lg overflow-hidden",children:[g.jsx("div",{ref:c,className:"min-h-[280px] resize-y overflow-auto rounded-lg border border-border",onClick:h.open?m:void 0,children:g.jsx(Pc,{editorKey:`${r??"tab"}-${s??"actual"}`,value:n?.raw??"",onChange:L=>{i(Ii({body:L}))},fileName:"body.json",style:{height:`${f}px`,minHeight:"280px"},className:"h-full",onSelectionContextMenu:(L,de)=>{x({open:!0,x:de.x,y:de.y,selectedText:L})}})}),h.open&&g.jsxs(ey,{className:"fixed p-2 min-h-[80px]",style:{top:h.y,left:h.x,zIndex:1e3},children:[g.jsxs("div",{className:"inline-flex items-center rounded-md border px-2 h-[25px]",children:[g.jsx(Gd,{size:14}),g.jsx(ut,{className:" border-0 rounded-none shadow-none focus-visible:ring-0",size:10,placeholder:"Find variable",value:y,onChange:L=>{_(L.target.value)}})]}),g.jsx("div",{className:"mt-3 flex flex-col px-1",children:E.map(L=>g.jsxs(Ve,{variant:"ghost",size:"sm",onClick:de=>{de.preventDefault(),xa.success("Success modify variable data"),x(Ce=>({...Ce,open:!1}))},className:"flex h-6 w-full items-center justify-start hover:bg-gray-100",children:[g.jsx("span",{className:"mr-1 h-[12px] w-[12px] rounded-full bg-emerald-400"}),g.jsx("div",{className:"text-sm leading-none",children:L.key})]},L.key))})]})]});case"multipart/form-data":return g.jsxs("div",{className:"relative rounded-lg overflow-hidden border border-border",children:[g.jsxs("div",{className:"grid grid-cols-12 bg-muted/50 px-3 py-2 text-xs font-medium uppercase tracking-wide text-muted-foreground",children:[g.jsx("span",{className:"col-span-3",children:"Key"}),g.jsx("span",{className:"col-span-3",children:"Value"}),g.jsx("span",{className:"col-span-4",children:"Description"}),g.jsx("span",{className:"col-span-2"})]}),n?.formdata?.map(L=>g.jsxs("div",{className:Re("grid grid-cols-12 border-t border-border px-3 py-2 items-center",L.disabled&&"opacity-50"),children:[g.jsx("div",{className:"col-span-3",children:g.jsx(ut,{value:L.key,onChange:de=>C(L.id,"key",de.target.value),className:"h-8 bg-background",disabled:L.disabled})}),g.jsx("div",{className:"col-span-3 pl-2",children:g.jsxs("div",{className:Re("flex h-8 items-center justify-between rounded-md border border-input bg-background","transition-[color,box-shadow]"," focus-within:ring-[3px] focus-within:ring-ring/50"),children:[L.type==="file"?g.jsxs("div",{className:"ml-2",children:[g.jsx("input",{id:`file-${L.id}`,type:"file",className:"hidden",onChange:de=>{const Ce=de.target.files?.[0];Ce&&(Qm(L.id,Ce),C(L.id,"src",Ce.name))},disabled:L.disabled}),g.jsx("label",{htmlFor:`file-${L.id}`,className:"cursor-pointer rounded bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600 hover:bg-slate-200",children:L.src?L.src:"Choose File"})]}):g.jsx(ut,{value:L.value,onChange:de=>C(L.id,"value",de.target.value),className:Re("h-8 flex-1 border-0 bg-transparent rounded-none shadow-none focus-visible:ring-0 focus-visible:border-0","disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"),disabled:L.disabled,placeholder:"value"}),g.jsx(Ve,{variant:"ghost",size:"xs",onClick:de=>{de.preventDefault(),b("type",L.id)},className:Re("mr-2 select-none rounded-sm border border-border","px-2 py-0.5 text-[11px] font-medium text-muted-foreground","hover:bg-muted","disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"),children:L.type})]})}),g.jsx("div",{className:"col-span-4 pl-3",children:g.jsx(ut,{value:L.description??"",onChange:de=>C(L.id,"description",de.target.value),className:"h-8 bg-background text-xs text-muted-foreground",disabled:L.disabled,placeholder:"description"})}),g.jsxs("div",{className:"col-span-2 pl-3 flex items-center justify-end gap-1",children:[g.jsx(Ve,{type:"button",variant:"outline",size:"sm",onClick:()=>b("disabled",L.id),className:"h-8 w-8 p-0",children:L.disabled?g.jsx(Hc,{className:"h-4 w-4 text-muted-foreground"}):g.jsx(zc,{className:"h-4 w-4 text-emerald-600"})}),g.jsx(Ve,{type:"button",variant:"ghost",size:"sm",onClick:()=>D(L.id),className:"h-8 w-8 p-0 text-destructive hover:text-destructive hover:bg-destructive/10",children:g.jsx(ga,{className:"h-4 w-4"})})]})]},L.id??L.key)),g.jsxs("div",{className:"grid grid-cols-12 border-t border-border px-3 py-2 items-center",children:[g.jsx("div",{className:"col-span-3",children:g.jsx(ut,{value:w,onChange:L=>H(L.target.value),className:"h-8",placeholder:"key"})}),g.jsx("div",{className:"col-span-3 pl-2",children:g.jsxs("div",{className:Re("flex h-8 items-center justify-between rounded-md border border-input bg-background","transition-[color,box-shadow]"," focus-within:ring-[3px] focus-within:ring-ring/50"),children:[R==="file"?g.jsxs("div",{className:"ml-2",children:[g.jsx("input",{id:"file-new-fd",type:"file",className:"hidden",onChange:L=>{const de=L.target.files?.[0];de&&(Z.current=de,z(de.name),W("file"))}}),g.jsx("label",{htmlFor:"file-new-fd",className:"cursor-pointer rounded bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600 hover:bg-slate-200",children:V||"Choose File"})]}):g.jsx(ut,{onChange:L=>{z(L.target.value),W("text")},value:V,className:Re("h-8 flex-1 border-0 bg-transparent rounded-none shadow-none focus-visible:ring-0 focus-visible:border-0","disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"),placeholder:"value"}),g.jsx(Ve,{variant:"ghost",size:"xs",onClick:L=>{L.preventDefault(),W(R==="file"?"text":"file")},className:Re("mr-2 select-none rounded-sm border border-border","px-2 py-0.5 text-[11px] font-medium text-muted-foreground","hover:bg-muted","disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"),children:R})]})}),g.jsx("div",{className:"col-span-4 pl-3",children:g.jsx(ut,{value:U,onChange:L=>fe(L.target.value),className:"h-8 text-xs",placeholder:"description"})}),g.jsx("div",{className:"col-span-2 flex justify-end",children:g.jsx(Ve,{type:"button",variant:"outline",size:"sm",onClick:()=>{w.trim()&&(k(w.trim(),V,U,R),H(""),z(""),fe(""))},className:"h-8 w-8 p-0",children:g.jsx(Ws,{className:"h-4 w-4"})})})]})]});default:return null}},nA=()=>{const e=cn(),n=$e(sh),r=$e(x2),s=$e(C2),[i,c]=te.useState(r?.mode==="formdata"?"multipart/form-data":"application/json"),f=n.some(h=>h.key.toLowerCase()==="content-type"&&!h.disabled),u=()=>{const h=n.find(x=>x.key.toLowerCase()==="content-type");h?h.disabled?e(Rs({header:{...h,value:i,disabled:!1}})):e(dl({id:h.id})):e(Rs({header:{id:crypto.randomUUID(),key:"Content-Type",value:i,disabled:!1}}))};return g.jsxs("section",{className:"rounded-b-xl border border-border bg-card shadow-sm",children:[g.jsx("div",{className:"flex items-center justify-between border-b border-border px-4 py-3",children:g.jsxs("div",{children:[g.jsx("h2",{className:"text-sm font-semibold text-foreground",children:"Request Configuration"}),g.jsx("p",{className:"text-xs text-muted-foreground",children:"Manage query params, auth, headers, and payload."})]})}),s&&g.jsxs("div",{className:"flex items-center justify-between border-b border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/40 px-4 py-2 text-xs text-amber-900 dark:text-amber-200",children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx("span",{className:"font-semibold",children:"Editing Example:"}),g.jsx("span",{className:"font-medium underline decoration-amber-400",children:s.name}),g.jsx("span",{className:"text-amber-700/80 dark:text-amber-400/80 hidden sm:inline",children:"(Changes to params, auth, headers, body, or URL apply to this example's request)"})]}),g.jsx(Ve,{variant:"ghost",size:"sm",className:"h-6 text-xs text-amber-900 dark:text-amber-200 hover:bg-amber-100 dark:hover:bg-amber-900/50",onClick:()=>e(pc({exampleId:null})),children:"Switch to Actual Request"})]}),g.jsxs(xl,{defaultValue:"params",className:"gap-0",children:[g.jsx("div",{className:"border-b border-border px-4 pt-3",children:g.jsxs(pl,{className:"h-10 rounded-lg bg-muted",children:[g.jsx($n,{value:"params",children:"Params"}),g.jsx($n,{value:"auth",children:"Authorization"}),g.jsx($n,{value:"headers",children:"Headers"}),g.jsx($n,{value:"body",children:"Body"}),g.jsx($n,{value:"scripts",children:"Scripts"})]})}),g.jsx(Xr,{value:"params",className:"p-4",children:g.jsx($w,{})}),g.jsx(Xr,{value:"auth",className:"p-4",children:g.jsx(Zw,{})}),g.jsx(Xr,{value:"headers",className:"p-4",children:g.jsx(eA,{})}),g.jsx(Xr,{value:"body",className:"p-4",children:g.jsxs("div",{className:"space-y-3",children:[g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsxs(Ms,{value:i,onValueChange:h=>c(h),children:[g.jsx(js,{children:g.jsx(Ls,{})}),g.jsxs(Is,{children:[g.jsxs(bn,{value:"application/json",children:[g.jsx(Q3,{className:"h-4 w-4 text-indigo-500"}),"JSON Payload"]}),g.jsxs(bn,{value:"multipart/form-data",children:[g.jsx(Z3,{className:"h-4 w-4 text-indigo-500"}),"Multipart Form"]})]})]}),g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx(vh,{variant:"outline",className:"text-slate-600",children:i}),g.jsx(Ve,{type:"button",variant:"ghost",size:"sm",onClick:u,className:"h-8 w-8 p-0",children:f?g.jsx(zc,{className:"h-4 w-4 text-emerald-600"}):g.jsx(Hc,{className:"h-4 w-4 text-slate-400"})})]})]}),f?g.jsx(tA,{contentType:i}):g.jsx("div",{className:"flex items-center justify-center py-12 text-sm text-slate-400",children:"Body disabled — toggle to enable"})]})}),g.jsx(Xr,{value:"scripts",className:"p-4",children:g.jsx("div",{className:"space-y-3",children:g.jsx(Hw,{})})})]})]})},ty=[{group:"1xx Informational",items:[{code:100,status:"Continue"},{code:101,status:"Switching Protocols"},{code:102,status:"Processing"},{code:103,status:"Early Hints"}]},{group:"2xx Success",items:[{code:200,status:"OK"},{code:201,status:"Created"},{code:202,status:"Accepted"},{code:203,status:"Non-Authoritative Information"},{code:204,status:"No Content"},{code:205,status:"Reset Content"},{code:206,status:"Partial Content"},{code:207,status:"Multi-Status"},{code:208,status:"Already Reported"},{code:226,status:"IM Used"}]},{group:"3xx Redirection",items:[{code:300,status:"Multiple Choices"},{code:301,status:"Moved Permanently"},{code:302,status:"Found"},{code:303,status:"See Other"},{code:304,status:"Not Modified"},{code:305,status:"Use Proxy"},{code:307,status:"Temporary Redirect"},{code:308,status:"Permanent Redirect"}]},{group:"4xx Client Error",items:[{code:400,status:"Bad Request"},{code:401,status:"Unauthorized"},{code:402,status:"Payment Required"},{code:403,status:"Forbidden"},{code:404,status:"Not Found"},{code:405,status:"Method Not Allowed"},{code:406,status:"Not Acceptable"},{code:407,status:"Proxy Authentication Required"},{code:408,status:"Request Timeout"},{code:409,status:"Conflict"},{code:410,status:"Gone"},{code:411,status:"Length Required"},{code:412,status:"Precondition Failed"},{code:413,status:"Payload Too Large"},{code:414,status:"URI Too Long"},{code:415,status:"Unsupported Media Type"},{code:416,status:"Range Not Satisfiable"},{code:417,status:"Expectation Failed"},{code:418,status:"I'm a teapot"},{code:421,status:"Misdirected Request"},{code:422,status:"Unprocessable Content"},{code:423,status:"Locked"},{code:424,status:"Failed Dependency"},{code:425,status:"Too Early"},{code:426,status:"Upgrade Required"},{code:428,status:"Precondition Required"},{code:429,status:"Too Many Requests"},{code:431,status:"Request Header Fields Too Large"},{code:451,status:"Unavailable For Legal Reasons"}]},{group:"5xx Server Error",items:[{code:500,status:"Internal Server Error"},{code:501,status:"Not Implemented"},{code:502,status:"Bad Gateway"},{code:503,status:"Service Unavailable"},{code:504,status:"Gateway Timeout"},{code:505,status:"HTTP Version Not Supported"},{code:506,status:"Variant Also Negotiates"},{code:507,status:"Insufficient Storage"},{code:508,status:"Loop Detected"},{code:510,status:"Not Extended"},{code:511,status:"Network Authentication Required"}]}],ny=Object.fromEntries(ty.flatMap(e=>e.items.map(n=>[n.code,n.status]))),md=(e,n="OK")=>ny[e]??n;function tc({...e}){return g.jsx(g3,{"data-slot":"collapsible",...e})}function rA({...e}){return g.jsx(y3,{"data-slot":"collapsible-trigger",...e})}function nc({...e}){return g.jsx(v3,{"data-slot":"collapsible-content",...e})}var ry=1252,aA=[874,932,936,949,950,1250,1251,1252,1253,1254,1255,1256,1257,1258,1e4],yh={0:1252,1:65001,2:65001,77:1e4,128:932,129:949,130:1361,134:936,136:950,161:1253,162:1254,163:1258,177:1255,178:1256,186:1257,204:1251,222:874,238:1250,255:1252,69:6969},bh=function(e){aA.indexOf(e)!=-1&&(ry=yh[0]=e)};function sA(){bh(1252)}var Rr=function(e){bh(e)};function ay(){Rr(1200),sA()}function ug(e){for(var n=[],r=0,s=e.length;r<s;++r)n[r]=e.charCodeAt(r);return n}function iA(e){for(var n=[],r=0;r<e.length>>1;++r)n[r]=String.fromCharCode(e.charCodeAt(2*r)+(e.charCodeAt(2*r+1)<<8));return n.join("")}function sy(e){for(var n=[],r=0;r<e.length>>1;++r)n[r]=String.fromCharCode(e.charCodeAt(2*r+1)+(e.charCodeAt(2*r)<<8));return n.join("")}var Y0=function(e){var n=e.charCodeAt(0),r=e.charCodeAt(1);return n==255&&r==254?iA(e.slice(2)):n==254&&r==255?sy(e.slice(2)):n==65279?e.slice(1):e},rc=function(n){return String.fromCharCode(n)},dg=function(n){return String.fromCharCode(n)},gl,Za="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function hg(e){for(var n="",r=0,s=0,i=0,c=0,f=0,u=0,h=0,x=0;x<e.length;)r=e.charCodeAt(x++),c=r>>2,s=e.charCodeAt(x++),f=(r&3)<<4|s>>4,i=e.charCodeAt(x++),u=(s&15)<<2|i>>6,h=i&63,isNaN(s)?u=h=64:isNaN(i)&&(h=64),n+=Za.charAt(c)+Za.charAt(f)+Za.charAt(u)+Za.charAt(h);return n}function tr(e){var n="",r=0,s=0,i=0,c=0,f=0,u=0,h=0;e=e.replace(/[^\w\+\/\=]/g,"");for(var x=0;x<e.length;)c=Za.indexOf(e.charAt(x++)),f=Za.indexOf(e.charAt(x++)),r=c<<2|f>>4,n+=String.fromCharCode(r),u=Za.indexOf(e.charAt(x++)),s=(f&15)<<4|u>>2,u!==64&&(n+=String.fromCharCode(s)),h=Za.indexOf(e.charAt(x++)),i=(u&3)<<6|h,h!==64&&(n+=String.fromCharCode(i));return n}var ot=(function(){return typeof Buffer<"u"&&typeof process<"u"&&typeof process.versions<"u"&&!!process.versions.node})(),qs=(function(){if(typeof Buffer<"u"){var e=!Buffer.from;if(!e)try{Buffer.from("foo","utf8")}catch{e=!0}return e?function(n,r){return r?new Buffer(n,r):new Buffer(n)}:Buffer.from.bind(Buffer)}return function(){}})();function ns(e){return ot?Buffer.alloc?Buffer.alloc(e):new Buffer(e):typeof Uint8Array<"u"?new Uint8Array(e):new Array(e)}function xg(e){return ot?Buffer.allocUnsafe?Buffer.allocUnsafe(e):new Buffer(e):typeof Uint8Array<"u"?new Uint8Array(e):new Array(e)}var Br=function(n){return ot?qs(n,"binary"):n.split("").map(function(r){return r.charCodeAt(0)&255})};function Vs(e){if(Array.isArray(e))return e.map(function(s){return String.fromCharCode(s)}).join("");for(var n=[],r=0;r<e.length;++r)n[r]=String.fromCharCode(e[r]);return n.join("")}function Sh(e){if(typeof ArrayBuffer>"u")throw new Error("Unsupported");if(e instanceof ArrayBuffer)return Sh(new Uint8Array(e));for(var n=new Array(e.length),r=0;r<e.length;++r)n[r]=e[r];return n}var Qa=ot?function(e){return Buffer.concat(e.map(function(n){return Buffer.isBuffer(n)?n:qs(n)}))}:function(e){if(typeof Uint8Array<"u"){var n=0,r=0;for(n=0;n<e.length;++n)r+=e[n].length;var s=new Uint8Array(r),i=0;for(n=0,r=0;n<e.length;r+=i,++n)if(i=e[n].length,e[n]instanceof Uint8Array)s.set(e[n],r);else{if(typeof e[n]=="string")throw"wtf";s.set(new Uint8Array(e[n]),r)}return s}return[].concat.apply([],e.map(function(c){return Array.isArray(c)?c:[].slice.call(c)}))};function lA(e){for(var n=[],r=0,s=e.length+250,i=ns(e.length+255),c=0;c<e.length;++c){var f=e.charCodeAt(c);if(f<128)i[r++]=f;else if(f<2048)i[r++]=192|f>>6&31,i[r++]=128|f&63;else if(f>=55296&&f<57344){f=(f&1023)+64;var u=e.charCodeAt(++c)&1023;i[r++]=240|f>>8&7,i[r++]=128|f>>2&63,i[r++]=128|u>>6&15|(f&3)<<4,i[r++]=128|u&63}else i[r++]=224|f>>12&15,i[r++]=128|f>>6&63,i[r++]=128|f&63;r>s&&(n.push(i.slice(0,r)),r=0,i=ns(65535),s=65530)}return n.push(i.slice(0,r)),Qa(n)}var Fn=/\u0000/g,J0=/[\u0001-\u0006]/g;function qi(e){for(var n="",r=e.length-1;r>=0;)n+=e.charAt(r--);return n}function Nr(e,n){var r=""+e;return r.length>=n?r:It("0",n-r.length)+r}function _h(e,n){var r=""+e;return r.length>=n?r:It(" ",n-r.length)+r}function wc(e,n){var r=""+e;return r.length>=n?r:r+It(" ",n-r.length)}function oA(e,n){var r=""+Math.round(e);return r.length>=n?r:It("0",n-r.length)+r}function cA(e,n){var r=""+e;return r.length>=n?r:It("0",n-r.length)+r}var pg=Math.pow(2,32);function ji(e,n){if(e>pg||e<-pg)return oA(e,n);var r=Math.round(e);return cA(r,n)}function Ac(e,n){return n=n||0,e.length>=7+n&&(e.charCodeAt(n)|32)===103&&(e.charCodeAt(n+1)|32)===101&&(e.charCodeAt(n+2)|32)===110&&(e.charCodeAt(n+3)|32)===101&&(e.charCodeAt(n+4)|32)===114&&(e.charCodeAt(n+5)|32)===97&&(e.charCodeAt(n+6)|32)===108}var mg=[["Sun","Sunday"],["Mon","Monday"],["Tue","Tuesday"],["Wed","Wednesday"],["Thu","Thursday"],["Fri","Friday"],["Sat","Saturday"]],gd=[["J","Jan","January"],["F","Feb","February"],["M","Mar","March"],["A","Apr","April"],["M","May","May"],["J","Jun","June"],["J","Jul","July"],["A","Aug","August"],["S","Sep","September"],["O","Oct","October"],["N","Nov","November"],["D","Dec","December"]];function fA(e){return e||(e={}),e[0]="General",e[1]="0",e[2]="0.00",e[3]="#,##0",e[4]="#,##0.00",e[9]="0%",e[10]="0.00%",e[11]="0.00E+00",e[12]="# ?/?",e[13]="# ??/??",e[14]="m/d/yy",e[15]="d-mmm-yy",e[16]="d-mmm",e[17]="mmm-yy",e[18]="h:mm AM/PM",e[19]="h:mm:ss AM/PM",e[20]="h:mm",e[21]="h:mm:ss",e[22]="m/d/yy h:mm",e[37]="#,##0 ;(#,##0)",e[38]="#,##0 ;[Red](#,##0)",e[39]="#,##0.00;(#,##0.00)",e[40]="#,##0.00;[Red](#,##0.00)",e[45]="mm:ss",e[46]="[h]:mm:ss",e[47]="mmss.0",e[48]="##0.0E+0",e[49]="@",e[56]='"上午/下午 "hh"時"mm"分"ss"秒 "',e}var Je={0:"General",1:"0",2:"0.00",3:"#,##0",4:"#,##0.00",9:"0%",10:"0.00%",11:"0.00E+00",12:"# ?/?",13:"# ??/??",14:"m/d/yy",15:"d-mmm-yy",16:"d-mmm",17:"mmm-yy",18:"h:mm AM/PM",19:"h:mm:ss AM/PM",20:"h:mm",21:"h:mm:ss",22:"m/d/yy h:mm",37:"#,##0 ;(#,##0)",38:"#,##0 ;[Red](#,##0)",39:"#,##0.00;(#,##0.00)",40:"#,##0.00;[Red](#,##0.00)",45:"mm:ss",46:"[h]:mm:ss",47:"mmss.0",48:"##0.0E+0",49:"@",56:'"上午/下午 "hh"時"mm"分"ss"秒 "'},gg={5:37,6:38,7:39,8:40,23:0,24:0,25:0,26:0,27:14,28:14,29:14,30:14,31:14,50:14,51:14,52:14,53:14,54:14,55:14,56:14,57:14,58:14,59:1,60:2,61:3,62:4,67:9,68:10,69:12,70:13,71:14,72:14,73:15,74:16,75:17,76:20,77:21,78:22,79:45,80:46,81:47,82:0},uA={5:'"$"#,##0_);\\("$"#,##0\\)',63:'"$"#,##0_);\\("$"#,##0\\)',6:'"$"#,##0_);[Red]\\("$"#,##0\\)',64:'"$"#,##0_);[Red]\\("$"#,##0\\)',7:'"$"#,##0.00_);\\("$"#,##0.00\\)',65:'"$"#,##0.00_);\\("$"#,##0.00\\)',8:'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',66:'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',41:'_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)',42:'_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)',43:'_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)',44:'_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)'};function Tc(e,n,r){for(var s=e<0?-1:1,i=e*s,c=0,f=1,u=0,h=1,x=0,m=0,v=Math.floor(i);x<n&&(v=Math.floor(i),u=v*f+c,m=v*x+h,!(i-v<5e-8));)i=1/(i-v),c=f,f=u,h=x,x=m;if(m>n&&(x>n?(m=h,u=c):(m=x,u=f)),!r)return[0,s*u,m];var y=Math.floor(s*u/m);return[y,s*u-y*m,m]}function Fs(e,n,r){if(e>2958465||e<0)return null;var s=e|0,i=Math.floor(86400*(e-s)),c=0,f=[],u={D:s,T:i,u:86400*(e-s)-i,y:0,m:0,d:0,H:0,M:0,S:0,q:0};if(Math.abs(u.u)<1e-6&&(u.u=0),n&&n.date1904&&(s+=1462),u.u>.9999&&(u.u=0,++i==86400&&(u.T=i=0,++s,++u.D)),s===60)f=r?[1317,10,29]:[1900,2,29],c=3;else if(s===0)f=r?[1317,8,29]:[1900,1,0],c=6;else{s>60&&--s;var h=new Date(1900,0,1);h.setDate(h.getDate()+s-1),f=[h.getFullYear(),h.getMonth()+1,h.getDate()],c=h.getDay(),s<60&&(c=(c+6)%7),r&&(c=gA(h,f))}return u.y=f[0],u.m=f[1],u.d=f[2],u.S=i%60,i=Math.floor(i/60),u.M=i%60,i=Math.floor(i/60),u.H=i,u.q=c,u}var iy=new Date(1899,11,31,0,0,0),dA=iy.getTime(),hA=new Date(1900,2,1,0,0,0);function ly(e,n){var r=e.getTime();return n?r-=1461*24*60*60*1e3:e>=hA&&(r+=1440*60*1e3),(r-(dA+(e.getTimezoneOffset()-iy.getTimezoneOffset())*6e4))/(1440*60*1e3)}function Ch(e){return e.indexOf(".")==-1?e:e.replace(/(?:\.0*|(\.\d*[1-9])0+)$/,"$1")}function xA(e){return e.indexOf("E")==-1?e:e.replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/,"$1E").replace(/(E[+-])(\d)$/,"$10$2")}function pA(e){var n=e<0?12:11,r=Ch(e.toFixed(12));return r.length<=n||(r=e.toPrecision(10),r.length<=n)?r:e.toExponential(5)}function mA(e){var n=Ch(e.toFixed(11));return n.length>(e<0?12:11)||n==="0"||n==="-0"?e.toPrecision(6):n}function vl(e){var n=Math.floor(Math.log(Math.abs(e))*Math.LOG10E),r;return n>=-4&&n<=-1?r=e.toPrecision(10+n):Math.abs(n)<=9?r=pA(e):n===10?r=e.toFixed(10).substr(0,12):r=mA(e),Ch(xA(r.toUpperCase()))}function Hs(e,n){switch(typeof e){case"string":return e;case"boolean":return e?"TRUE":"FALSE";case"number":return(e|0)===e?e.toString(10):vl(e);case"undefined":return"";case"object":if(e==null)return"";if(e instanceof Date)return Sr(14,ly(e,n&&n.date1904),n)}throw new Error("unsupported value in General format: "+e)}function gA(e,n){n[0]-=581;var r=e.getDay();return e<60&&(r=(r+6)%7),r}function vA(e,n,r,s){var i="",c=0,f=0,u=r.y,h,x=0;switch(e){case 98:u=r.y+543;case 121:switch(n.length){case 1:case 2:h=u%100,x=2;break;default:h=u%1e4,x=4;break}break;case 109:switch(n.length){case 1:case 2:h=r.m,x=n.length;break;case 3:return gd[r.m-1][1];case 5:return gd[r.m-1][0];default:return gd[r.m-1][2]}break;case 100:switch(n.length){case 1:case 2:h=r.d,x=n.length;break;case 3:return mg[r.q][0];default:return mg[r.q][1]}break;case 104:switch(n.length){case 1:case 2:h=1+(r.H+11)%12,x=n.length;break;default:throw"bad hour format: "+n}break;case 72:switch(n.length){case 1:case 2:h=r.H,x=n.length;break;default:throw"bad hour format: "+n}break;case 77:switch(n.length){case 1:case 2:h=r.M,x=n.length;break;default:throw"bad minute format: "+n}break;case 115:if(n!="s"&&n!="ss"&&n!=".0"&&n!=".00"&&n!=".000")throw"bad second format: "+n;return r.u===0&&(n=="s"||n=="ss")?Nr(r.S,n.length):(s>=2?f=s===3?1e3:100:f=s===1?10:1,c=Math.round(f*(r.S+r.u)),c>=60*f&&(c=0),n==="s"?c===0?"0":""+c/f:(i=Nr(c,2+s),n==="ss"?i.substr(0,2):"."+i.substr(2,n.length-1)));case 90:switch(n){case"[h]":case"[hh]":h=r.D*24+r.H;break;case"[m]":case"[mm]":h=(r.D*24+r.H)*60+r.M;break;case"[s]":case"[ss]":h=((r.D*24+r.H)*60+r.M)*60+Math.round(r.S+r.u);break;default:throw"bad abstime format: "+n}x=n.length===3?1:2;break;case 101:h=u,x=1;break}var m=x>0?Nr(h,x):"";return m}function $a(e){var n=3;if(e.length<=n)return e;for(var r=e.length%n,s=e.substr(0,r);r!=e.length;r+=n)s+=(s.length>0?",":"")+e.substr(r,n);return s}var oy=/%/g;function yA(e,n,r){var s=n.replace(oy,""),i=n.length-s.length;return ya(e,s,r*Math.pow(10,2*i))+It("%",i)}function bA(e,n,r){for(var s=n.length-1;n.charCodeAt(s-1)===44;)--s;return ya(e,n.substr(0,s),r/Math.pow(10,3*(n.length-s)))}function cy(e,n){var r,s=e.indexOf("E")-e.indexOf(".")-1;if(e.match(/^#+0.0E\+0$/)){if(n==0)return"0.0E+0";if(n<0)return"-"+cy(e,-n);var i=e.indexOf(".");i===-1&&(i=e.indexOf("E"));var c=Math.floor(Math.log(n)*Math.LOG10E)%i;if(c<0&&(c+=i),r=(n/Math.pow(10,c)).toPrecision(s+1+(i+c)%i),r.indexOf("e")===-1){var f=Math.floor(Math.log(n)*Math.LOG10E);for(r.indexOf(".")===-1?r=r.charAt(0)+"."+r.substr(1)+"E+"+(f-r.length+c):r+="E+"+(f-c);r.substr(0,2)==="0.";)r=r.charAt(0)+r.substr(2,i)+"."+r.substr(2+i),r=r.replace(/^0+([1-9])/,"$1").replace(/^0+\./,"0.");r=r.replace(/\+-/,"-")}r=r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/,function(u,h,x,m){return h+x+m.substr(0,(i+c)%i)+"."+m.substr(c)+"E"})}else r=n.toExponential(s);return e.match(/E\+00$/)&&r.match(/e[+-]\d$/)&&(r=r.substr(0,r.length-1)+"0"+r.charAt(r.length-1)),e.match(/E\-/)&&r.match(/e\+/)&&(r=r.replace(/e\+/,"e")),r.replace("e","E")}var fy=/# (\?+)( ?)\/( ?)(\d+)/;function SA(e,n,r){var s=parseInt(e[4],10),i=Math.round(n*s),c=Math.floor(i/s),f=i-c*s,u=s;return r+(c===0?"":""+c)+" "+(f===0?It(" ",e[1].length+1+e[4].length):_h(f,e[1].length)+e[2]+"/"+e[3]+Nr(u,e[4].length))}function _A(e,n,r){return r+(n===0?"":""+n)+It(" ",e[1].length+2+e[4].length)}var uy=/^#*0*\.([0#]+)/,dy=/\).*[0#]/,hy=/\(###\) ###\\?-####/;function kn(e){for(var n="",r,s=0;s!=e.length;++s)switch(r=e.charCodeAt(s)){case 35:break;case 63:n+=" ";break;case 48:n+="0";break;default:n+=String.fromCharCode(r)}return n}function vg(e,n){var r=Math.pow(10,n);return""+Math.round(e*r)/r}function yg(e,n){var r=e-Math.floor(e),s=Math.pow(10,n);return n<(""+Math.round(r*s)).length?0:Math.round(r*s)}function CA(e,n){return n<(""+Math.round((e-Math.floor(e))*Math.pow(10,n))).length?1:0}function EA(e){return e<2147483647&&e>-2147483648?""+(e>=0?e|0:e-1|0):""+Math.floor(e)}function vr(e,n,r){if(e.charCodeAt(0)===40&&!n.match(dy)){var s=n.replace(/\( */,"").replace(/ \)/,"").replace(/\)/,"");return r>=0?vr("n",s,r):"("+vr("n",s,-r)+")"}if(n.charCodeAt(n.length-1)===44)return bA(e,n,r);if(n.indexOf("%")!==-1)return yA(e,n,r);if(n.indexOf("E")!==-1)return cy(n,r);if(n.charCodeAt(0)===36)return"$"+vr(e,n.substr(n.charAt(1)==" "?2:1),r);var i,c,f,u,h=Math.abs(r),x=r<0?"-":"";if(n.match(/^00+$/))return x+ji(h,n.length);if(n.match(/^[#?]+$/))return i=ji(r,0),i==="0"&&(i=""),i.length>n.length?i:kn(n.substr(0,n.length-i.length))+i;if(c=n.match(fy))return SA(c,h,x);if(n.match(/^#+0+$/))return x+ji(h,n.length-n.indexOf("0"));if(c=n.match(uy))return i=vg(r,c[1].length).replace(/^([^\.]+)$/,"$1."+kn(c[1])).replace(/\.$/,"."+kn(c[1])).replace(/\.(\d*)$/,function(E,b){return"."+b+It("0",kn(c[1]).length-b.length)}),n.indexOf("0.")!==-1?i:i.replace(/^0\./,".");if(n=n.replace(/^#+([0.])/,"$1"),c=n.match(/^(0*)\.(#*)$/))return x+vg(h,c[2].length).replace(/\.(\d*[1-9])0*$/,".$1").replace(/^(-?\d*)$/,"$1.").replace(/^0\./,c[1].length?"0.":".");if(c=n.match(/^#{1,3},##0(\.?)$/))return x+$a(ji(h,0));if(c=n.match(/^#,##0\.([#0]*0)$/))return r<0?"-"+vr(e,n,-r):$a(""+(Math.floor(r)+CA(r,c[1].length)))+"."+Nr(yg(r,c[1].length),c[1].length);if(c=n.match(/^#,#*,#0/))return vr(e,n.replace(/^#,#*,/,""),r);if(c=n.match(/^([0#]+)(\\?-([0#]+))+$/))return i=qi(vr(e,n.replace(/[\\-]/g,""),r)),f=0,qi(qi(n.replace(/\\/g,"")).replace(/[0#]/g,function(E){return f<i.length?i.charAt(f++):E==="0"?"0":""}));if(n.match(hy))return i=vr(e,"##########",r),"("+i.substr(0,3)+") "+i.substr(3,3)+"-"+i.substr(6);var m="";if(c=n.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))return f=Math.min(c[4].length,7),u=Tc(h,Math.pow(10,f)-1,!1),i=""+x,m=ya("n",c[1],u[1]),m.charAt(m.length-1)==" "&&(m=m.substr(0,m.length-1)+"0"),i+=m+c[2]+"/"+c[3],m=wc(u[2],f),m.length<c[4].length&&(m=kn(c[4].substr(c[4].length-m.length))+m),i+=m,i;if(c=n.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))return f=Math.min(Math.max(c[1].length,c[4].length),7),u=Tc(h,Math.pow(10,f)-1,!0),x+(u[0]||(u[1]?"":"0"))+" "+(u[1]?_h(u[1],f)+c[2]+"/"+c[3]+wc(u[2],f):It(" ",2*f+1+c[2].length+c[3].length));if(c=n.match(/^[#0?]+$/))return i=ji(r,0),n.length<=i.length?i:kn(n.substr(0,n.length-i.length))+i;if(c=n.match(/^([#0?]+)\.([#0]+)$/)){i=""+r.toFixed(Math.min(c[2].length,10)).replace(/([^0])0+$/,"$1"),f=i.indexOf(".");var v=n.indexOf(".")-f,y=n.length-i.length-v;return kn(n.substr(0,v)+i+n.substr(n.length-y))}if(c=n.match(/^00,000\.([#0]*0)$/))return f=yg(r,c[1].length),r<0?"-"+vr(e,n,-r):$a(EA(r)).replace(/^\d,\d{3}$/,"0$&").replace(/^\d*$/,function(E){return"00,"+(E.length<3?Nr(0,3-E.length):"")+E})+"."+Nr(f,c[1].length);switch(n){case"###,##0.00":return vr(e,"#,##0.00",r);case"###,###":case"##,###":case"#,###":var _=$a(ji(h,0));return _!=="0"?x+_:"";case"###,###.00":return vr(e,"###,##0.00",r).replace(/^0\./,".");case"#,###.00":return vr(e,"#,##0.00",r).replace(/^0\./,".")}throw new Error("unsupported format |"+n+"|")}function wA(e,n,r){for(var s=n.length-1;n.charCodeAt(s-1)===44;)--s;return ya(e,n.substr(0,s),r/Math.pow(10,3*(n.length-s)))}function AA(e,n,r){var s=n.replace(oy,""),i=n.length-s.length;return ya(e,s,r*Math.pow(10,2*i))+It("%",i)}function xy(e,n){var r,s=e.indexOf("E")-e.indexOf(".")-1;if(e.match(/^#+0.0E\+0$/)){if(n==0)return"0.0E+0";if(n<0)return"-"+xy(e,-n);var i=e.indexOf(".");i===-1&&(i=e.indexOf("E"));var c=Math.floor(Math.log(n)*Math.LOG10E)%i;if(c<0&&(c+=i),r=(n/Math.pow(10,c)).toPrecision(s+1+(i+c)%i),!r.match(/[Ee]/)){var f=Math.floor(Math.log(n)*Math.LOG10E);r.indexOf(".")===-1?r=r.charAt(0)+"."+r.substr(1)+"E+"+(f-r.length+c):r+="E+"+(f-c),r=r.replace(/\+-/,"-")}r=r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/,function(u,h,x,m){return h+x+m.substr(0,(i+c)%i)+"."+m.substr(c)+"E"})}else r=n.toExponential(s);return e.match(/E\+00$/)&&r.match(/e[+-]\d$/)&&(r=r.substr(0,r.length-1)+"0"+r.charAt(r.length-1)),e.match(/E\-/)&&r.match(/e\+/)&&(r=r.replace(/e\+/,"e")),r.replace("e","E")}function Pr(e,n,r){if(e.charCodeAt(0)===40&&!n.match(dy)){var s=n.replace(/\( */,"").replace(/ \)/,"").replace(/\)/,"");return r>=0?Pr("n",s,r):"("+Pr("n",s,-r)+")"}if(n.charCodeAt(n.length-1)===44)return wA(e,n,r);if(n.indexOf("%")!==-1)return AA(e,n,r);if(n.indexOf("E")!==-1)return xy(n,r);if(n.charCodeAt(0)===36)return"$"+Pr(e,n.substr(n.charAt(1)==" "?2:1),r);var i,c,f,u,h=Math.abs(r),x=r<0?"-":"";if(n.match(/^00+$/))return x+Nr(h,n.length);if(n.match(/^[#?]+$/))return i=""+r,r===0&&(i=""),i.length>n.length?i:kn(n.substr(0,n.length-i.length))+i;if(c=n.match(fy))return _A(c,h,x);if(n.match(/^#+0+$/))return x+Nr(h,n.length-n.indexOf("0"));if(c=n.match(uy))return i=(""+r).replace(/^([^\.]+)$/,"$1."+kn(c[1])).replace(/\.$/,"."+kn(c[1])),i=i.replace(/\.(\d*)$/,function(E,b){return"."+b+It("0",kn(c[1]).length-b.length)}),n.indexOf("0.")!==-1?i:i.replace(/^0\./,".");if(n=n.replace(/^#+([0.])/,"$1"),c=n.match(/^(0*)\.(#*)$/))return x+(""+h).replace(/\.(\d*[1-9])0*$/,".$1").replace(/^(-?\d*)$/,"$1.").replace(/^0\./,c[1].length?"0.":".");if(c=n.match(/^#{1,3},##0(\.?)$/))return x+$a(""+h);if(c=n.match(/^#,##0\.([#0]*0)$/))return r<0?"-"+Pr(e,n,-r):$a(""+r)+"."+It("0",c[1].length);if(c=n.match(/^#,#*,#0/))return Pr(e,n.replace(/^#,#*,/,""),r);if(c=n.match(/^([0#]+)(\\?-([0#]+))+$/))return i=qi(Pr(e,n.replace(/[\\-]/g,""),r)),f=0,qi(qi(n.replace(/\\/g,"")).replace(/[0#]/g,function(E){return f<i.length?i.charAt(f++):E==="0"?"0":""}));if(n.match(hy))return i=Pr(e,"##########",r),"("+i.substr(0,3)+") "+i.substr(3,3)+"-"+i.substr(6);var m="";if(c=n.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))return f=Math.min(c[4].length,7),u=Tc(h,Math.pow(10,f)-1,!1),i=""+x,m=ya("n",c[1],u[1]),m.charAt(m.length-1)==" "&&(m=m.substr(0,m.length-1)+"0"),i+=m+c[2]+"/"+c[3],m=wc(u[2],f),m.length<c[4].length&&(m=kn(c[4].substr(c[4].length-m.length))+m),i+=m,i;if(c=n.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))return f=Math.min(Math.max(c[1].length,c[4].length),7),u=Tc(h,Math.pow(10,f)-1,!0),x+(u[0]||(u[1]?"":"0"))+" "+(u[1]?_h(u[1],f)+c[2]+"/"+c[3]+wc(u[2],f):It(" ",2*f+1+c[2].length+c[3].length));if(c=n.match(/^[#0?]+$/))return i=""+r,n.length<=i.length?i:kn(n.substr(0,n.length-i.length))+i;if(c=n.match(/^([#0]+)\.([#0]+)$/)){i=""+r.toFixed(Math.min(c[2].length,10)).replace(/([^0])0+$/,"$1"),f=i.indexOf(".");var v=n.indexOf(".")-f,y=n.length-i.length-v;return kn(n.substr(0,v)+i+n.substr(n.length-y))}if(c=n.match(/^00,000\.([#0]*0)$/))return r<0?"-"+Pr(e,n,-r):$a(""+r).replace(/^\d,\d{3}$/,"0$&").replace(/^\d*$/,function(E){return"00,"+(E.length<3?Nr(0,3-E.length):"")+E})+"."+Nr(0,c[1].length);switch(n){case"###,###":case"##,###":case"#,###":var _=$a(""+h);return _!=="0"?x+_:"";default:if(n.match(/\.[0#?]*$/))return Pr(e,n.slice(0,n.lastIndexOf(".")),r)+kn(n.slice(n.lastIndexOf(".")))}throw new Error("unsupported format |"+n+"|")}function ya(e,n,r){return(r|0)===r?Pr(e,n,r):vr(e,n,r)}function TA(e){for(var n=[],r=!1,s=0,i=0;s<e.length;++s)switch(e.charCodeAt(s)){case 34:r=!r;break;case 95:case 42:case 92:++s;break;case 59:n[n.length]=e.substr(i,s-i),i=s+1}if(n[n.length]=e.substr(i),r===!0)throw new Error("Format |"+e+"| unterminated string ");return n}var py=/\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;function $i(e){for(var n=0,r="",s="";n<e.length;)switch(r=e.charAt(n)){case"G":Ac(e,n)&&(n+=6),n++;break;case'"':for(;e.charCodeAt(++n)!==34&&n<e.length;);++n;break;case"\\":n+=2;break;case"_":n+=2;break;case"@":++n;break;case"B":case"b":if(e.charAt(n+1)==="1"||e.charAt(n+1)==="2")return!0;case"M":case"D":case"Y":case"H":case"S":case"E":case"m":case"d":case"y":case"h":case"s":case"e":case"g":return!0;case"A":case"a":case"上":if(e.substr(n,3).toUpperCase()==="A/P"||e.substr(n,5).toUpperCase()==="AM/PM"||e.substr(n,5).toUpperCase()==="上午/下午")return!0;++n;break;case"[":for(s=r;e.charAt(n++)!=="]"&&n<e.length;)s+=e.charAt(n);if(s.match(py))return!0;break;case".":case"0":case"#":for(;n<e.length&&("0#?.,E+-%".indexOf(r=e.charAt(++n))>-1||r=="\\"&&e.charAt(n+1)=="-"&&"0#".indexOf(e.charAt(n+2))>-1););break;case"?":for(;e.charAt(++n)===r;);break;case"*":++n,(e.charAt(n)==" "||e.charAt(n)=="*")&&++n;break;case"(":case")":++n;break;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":for(;n<e.length&&"0123456789".indexOf(e.charAt(++n))>-1;);break;case" ":++n;break;default:++n;break}return!1}function kA(e,n,r,s){for(var i=[],c="",f=0,u="",h="t",x,m,v,y="H";f<e.length;)switch(u=e.charAt(f)){case"G":if(!Ac(e,f))throw new Error("unrecognized character "+u+" in "+e);i[i.length]={t:"G",v:"General"},f+=7;break;case'"':for(c="";(v=e.charCodeAt(++f))!==34&&f<e.length;)c+=String.fromCharCode(v);i[i.length]={t:"t",v:c},++f;break;case"\\":var _=e.charAt(++f),E=_==="("||_===")"?_:"t";i[i.length]={t:E,v:_},++f;break;case"_":i[i.length]={t:"t",v:" "},f+=2;break;case"@":i[i.length]={t:"T",v:n},++f;break;case"B":case"b":if(e.charAt(f+1)==="1"||e.charAt(f+1)==="2"){if(x==null&&(x=Fs(n,r,e.charAt(f+1)==="2"),x==null))return"";i[i.length]={t:"X",v:e.substr(f,2)},h=u,f+=2;break}case"M":case"D":case"Y":case"H":case"S":case"E":u=u.toLowerCase();case"m":case"d":case"y":case"h":case"s":case"e":case"g":if(n<0||x==null&&(x=Fs(n,r),x==null))return"";for(c=u;++f<e.length&&e.charAt(f).toLowerCase()===u;)c+=u;u==="m"&&h.toLowerCase()==="h"&&(u="M"),u==="h"&&(u=y),i[i.length]={t:u,v:c},h=u;break;case"A":case"a":case"上":var b={t:u,v:u};if(x==null&&(x=Fs(n,r)),e.substr(f,3).toUpperCase()==="A/P"?(x!=null&&(b.v=x.H>=12?"P":"A"),b.t="T",y="h",f+=3):e.substr(f,5).toUpperCase()==="AM/PM"?(x!=null&&(b.v=x.H>=12?"PM":"AM"),b.t="T",f+=5,y="h"):e.substr(f,5).toUpperCase()==="上午/下午"?(x!=null&&(b.v=x.H>=12?"下午":"上午"),b.t="T",f+=5,y="h"):(b.t="t",++f),x==null&&b.t==="T")return"";i[i.length]=b,h=u;break;case"[":for(c=u;e.charAt(f++)!=="]"&&f<e.length;)c+=e.charAt(f);if(c.slice(-1)!=="]")throw'unterminated "[" block: |'+c+"|";if(c.match(py)){if(x==null&&(x=Fs(n,r),x==null))return"";i[i.length]={t:"Z",v:c.toLowerCase()},h=c.charAt(1)}else c.indexOf("$")>-1&&(c=(c.match(/\$([^-\[\]]*)/)||[])[1]||"$",$i(e)||(i[i.length]={t:"t",v:c}));break;case".":if(x!=null){for(c=u;++f<e.length&&(u=e.charAt(f))==="0";)c+=u;i[i.length]={t:"s",v:c};break}case"0":case"#":for(c=u;++f<e.length&&"0#?.,E+-%".indexOf(u=e.charAt(f))>-1;)c+=u;i[i.length]={t:"n",v:c};break;case"?":for(c=u;e.charAt(++f)===u;)c+=u;i[i.length]={t:u,v:c},h=u;break;case"*":++f,(e.charAt(f)==" "||e.charAt(f)=="*")&&++f;break;case"(":case")":i[i.length]={t:s===1?"t":u,v:u},++f;break;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":for(c=u;f<e.length&&"0123456789".indexOf(e.charAt(++f))>-1;)c+=e.charAt(f);i[i.length]={t:"D",v:c};break;case" ":i[i.length]={t:u,v:u},++f;break;case"$":i[i.length]={t:"t",v:"$"},++f;break;default:if(",$-+/():!^&'~{}<>=€acfijklopqrtuvwxzP".indexOf(u)===-1)throw new Error("unrecognized character "+u+" in "+e);i[i.length]={t:"t",v:u},++f;break}var C=0,D=0,k;for(f=i.length-1,h="t";f>=0;--f)switch(i[f].t){case"h":case"H":i[f].t=y,h="h",C<1&&(C=1);break;case"s":(k=i[f].v.match(/\.0+$/))&&(D=Math.max(D,k[0].length-1)),C<3&&(C=3);case"d":case"y":case"M":case"e":h=i[f].t;break;case"m":h==="s"&&(i[f].t="M",C<2&&(C=2));break;case"X":break;case"Z":C<1&&i[f].v.match(/[Hh]/)&&(C=1),C<2&&i[f].v.match(/[Mm]/)&&(C=2),C<3&&i[f].v.match(/[Ss]/)&&(C=3)}switch(C){case 0:break;case 1:x.u>=.5&&(x.u=0,++x.S),x.S>=60&&(x.S=0,++x.M),x.M>=60&&(x.M=0,++x.H);break;case 2:x.u>=.5&&(x.u=0,++x.S),x.S>=60&&(x.S=0,++x.M);break}var w="",H;for(f=0;f<i.length;++f)switch(i[f].t){case"t":case"T":case" ":case"D":break;case"X":i[f].v="",i[f].t=";";break;case"d":case"m":case"y":case"h":case"H":case"M":case"s":case"e":case"b":case"Z":i[f].v=vA(i[f].t.charCodeAt(0),i[f].v,x,D),i[f].t="t";break;case"n":case"?":for(H=f+1;i[H]!=null&&((u=i[H].t)==="?"||u==="D"||(u===" "||u==="t")&&i[H+1]!=null&&(i[H+1].t==="?"||i[H+1].t==="t"&&i[H+1].v==="/")||i[f].t==="("&&(u===" "||u==="n"||u===")")||u==="t"&&(i[H].v==="/"||i[H].v===" "&&i[H+1]!=null&&i[H+1].t=="?"));)i[f].v+=i[H].v,i[H]={v:"",t:";"},++H;w+=i[f].v,f=H-1;break;case"G":i[f].t="t",i[f].v=Hs(n,r);break}var V="",z,R;if(w.length>0){w.charCodeAt(0)==40?(z=n<0&&w.charCodeAt(0)===45?-n:n,R=ya("n",w,z)):(z=n<0&&s>1?-n:n,R=ya("n",w,z),z<0&&i[0]&&i[0].t=="t"&&(R=R.substr(1),i[0].v="-"+i[0].v)),H=R.length-1;var W=i.length;for(f=0;f<i.length;++f)if(i[f]!=null&&i[f].t!="t"&&i[f].v.indexOf(".")>-1){W=f;break}var U=i.length;if(W===i.length&&R.indexOf("E")===-1){for(f=i.length-1;f>=0;--f)i[f]==null||"n?".indexOf(i[f].t)===-1||(H>=i[f].v.length-1?(H-=i[f].v.length,i[f].v=R.substr(H+1,i[f].v.length)):H<0?i[f].v="":(i[f].v=R.substr(0,H+1),H=-1),i[f].t="t",U=f);H>=0&&U<i.length&&(i[U].v=R.substr(0,H+1)+i[U].v)}else if(W!==i.length&&R.indexOf("E")===-1){for(H=R.indexOf(".")-1,f=W;f>=0;--f)if(!(i[f]==null||"n?".indexOf(i[f].t)===-1)){for(m=i[f].v.indexOf(".")>-1&&f===W?i[f].v.indexOf(".")-1:i[f].v.length-1,V=i[f].v.substr(m+1);m>=0;--m)H>=0&&(i[f].v.charAt(m)==="0"||i[f].v.charAt(m)==="#")&&(V=R.charAt(H--)+V);i[f].v=V,i[f].t="t",U=f}for(H>=0&&U<i.length&&(i[U].v=R.substr(0,H+1)+i[U].v),H=R.indexOf(".")+1,f=W;f<i.length;++f)if(!(i[f]==null||"n?(".indexOf(i[f].t)===-1&&f!==W)){for(m=i[f].v.indexOf(".")>-1&&f===W?i[f].v.indexOf(".")+1:0,V=i[f].v.substr(0,m);m<i[f].v.length;++m)H<R.length&&(V+=R.charAt(H++));i[f].v=V,i[f].t="t",U=f}}}for(f=0;f<i.length;++f)i[f]!=null&&"n?".indexOf(i[f].t)>-1&&(z=s>1&&n<0&&f>0&&i[f-1].v==="-"?-n:n,i[f].v=ya(i[f].t,i[f].v,z),i[f].t="t");var fe="";for(f=0;f!==i.length;++f)i[f]!=null&&(fe+=i[f].v);return fe}var bg=/\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;function Sg(e,n){if(n==null)return!1;var r=parseFloat(n[2]);switch(n[1]){case"=":if(e==r)return!0;break;case">":if(e>r)return!0;break;case"<":if(e<r)return!0;break;case"<>":if(e!=r)return!0;break;case">=":if(e>=r)return!0;break;case"<=":if(e<=r)return!0;break}return!1}function DA(e,n){var r=TA(e),s=r.length,i=r[s-1].indexOf("@");if(s<4&&i>-1&&--s,r.length>4)throw new Error("cannot find right format for |"+r.join("|")+"|");if(typeof n!="number")return[4,r.length===4||i>-1?r[r.length-1]:"@"];switch(r.length){case 1:r=i>-1?["General","General","General",r[0]]:[r[0],r[0],r[0],"@"];break;case 2:r=i>-1?[r[0],r[0],r[0],r[1]]:[r[0],r[1],r[0],"@"];break;case 3:r=i>-1?[r[0],r[1],r[0],r[2]]:[r[0],r[1],r[2],"@"];break}var c=n>0?r[0]:n<0?r[1]:r[2];if(r[0].indexOf("[")===-1&&r[1].indexOf("[")===-1)return[s,c];if(r[0].match(/\[[=<>]/)!=null||r[1].match(/\[[=<>]/)!=null){var f=r[0].match(bg),u=r[1].match(bg);return Sg(n,f)?[s,r[0]]:Sg(n,u)?[s,r[1]]:[s,r[f!=null&&u!=null?2:1]]}return[s,c]}function Sr(e,n,r){r==null&&(r={});var s="";switch(typeof e){case"string":e=="m/d/yy"&&r.dateNF?s=r.dateNF:s=e;break;case"number":e==14&&r.dateNF?s=r.dateNF:s=(r.table!=null?r.table:Je)[e],s==null&&(s=r.table&&r.table[gg[e]]||Je[gg[e]]),s==null&&(s=uA[e]||"General");break}if(Ac(s,0))return Hs(n,r);n instanceof Date&&(n=ly(n,r.date1904));var i=DA(s,n);if(Ac(i[1]))return Hs(n,r);if(n===!0)n="TRUE";else if(n===!1)n="FALSE";else if(n===""||n==null)return"";return kA(i[1],n,r,i[0])}function Ns(e,n){if(typeof n!="number"){n=+n||-1;for(var r=0;r<392;++r){if(Je[r]==null){n<0&&(n=r);continue}if(Je[r]==e){n=r;break}}n<0&&(n=391)}return Je[n]=e,n}function my(){Je=fA()}var BA={5:'"$"#,##0_);\\("$"#,##0\\)',6:'"$"#,##0_);[Red]\\("$"#,##0\\)',7:'"$"#,##0.00_);\\("$"#,##0.00\\)',8:'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',23:"General",24:"General",25:"General",26:"General",27:"m/d/yy",28:"m/d/yy",29:"m/d/yy",30:"m/d/yy",31:"m/d/yy",32:"h:mm:ss",33:"h:mm:ss",34:"h:mm:ss",35:"h:mm:ss",36:"m/d/yy",41:'_(* #,##0_);_(* (#,##0);_(* "-"_);_(@_)',42:'_("$"* #,##0_);_("$"* (#,##0);_("$"* "-"_);_(@_)',43:'_(* #,##0.00_);_(* (#,##0.00);_(* "-"??_);_(@_)',44:'_("$"* #,##0.00_);_("$"* (#,##0.00);_("$"* "-"??_);_(@_)',50:"m/d/yy",51:"m/d/yy",52:"m/d/yy",53:"m/d/yy",54:"m/d/yy",55:"m/d/yy",56:"m/d/yy",57:"m/d/yy",58:"m/d/yy",59:"0",60:"0.00",61:"#,##0",62:"#,##0.00",63:'"$"#,##0_);\\("$"#,##0\\)',64:'"$"#,##0_);[Red]\\("$"#,##0\\)',65:'"$"#,##0.00_);\\("$"#,##0.00\\)',66:'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',67:"0%",68:"0.00%",69:"# ?/?",70:"# ??/??",71:"m/d/yy",72:"m/d/yy",73:"d-mmm-yy",74:"d-mmm",75:"mmm-yy",76:"h:mm",77:"h:mm:ss",78:"m/d/yy h:mm",79:"mm:ss",80:"[h]:mm:ss",81:"mmss.0"},gy=/[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;function FA(e){var n=typeof e=="number"?Je[e]:e;return n=n.replace(gy,"(\\d+)"),new RegExp("^"+n+"$")}function RA(e,n,r){var s=-1,i=-1,c=-1,f=-1,u=-1,h=-1;(n.match(gy)||[]).forEach(function(v,y){var _=parseInt(r[y+1],10);switch(v.toLowerCase().charAt(0)){case"y":s=_;break;case"d":c=_;break;case"h":f=_;break;case"s":h=_;break;case"m":f>=0?u=_:i=_;break}}),h>=0&&u==-1&&i>=0&&(u=i,i=-1);var x=(""+(s>=0?s:new Date().getFullYear())).slice(-4)+"-"+("00"+(i>=1?i:1)).slice(-2)+"-"+("00"+(c>=1?c:1)).slice(-2);x.length==7&&(x="0"+x),x.length==8&&(x="20"+x);var m=("00"+(f>=0?f:0)).slice(-2)+":"+("00"+(u>=0?u:0)).slice(-2)+":"+("00"+(h>=0?h:0)).slice(-2);return f==-1&&u==-1&&h==-1?x:s==-1&&i==-1&&c==-1?m:x+"T"+m}var NA=(function(){var e={};e.version="1.2.0";function n(){for(var R=0,W=new Array(256),U=0;U!=256;++U)R=U,R=R&1?-306674912^R>>>1:R>>>1,R=R&1?-306674912^R>>>1:R>>>1,R=R&1?-306674912^R>>>1:R>>>1,R=R&1?-306674912^R>>>1:R>>>1,R=R&1?-306674912^R>>>1:R>>>1,R=R&1?-306674912^R>>>1:R>>>1,R=R&1?-306674912^R>>>1:R>>>1,R=R&1?-306674912^R>>>1:R>>>1,W[U]=R;return typeof Int32Array<"u"?new Int32Array(W):W}var r=n();function s(R){var W=0,U=0,fe=0,Z=typeof Int32Array<"u"?new Int32Array(4096):new Array(4096);for(fe=0;fe!=256;++fe)Z[fe]=R[fe];for(fe=0;fe!=256;++fe)for(U=R[fe],W=256+fe;W<4096;W+=256)U=Z[W]=U>>>8^R[U&255];var L=[];for(fe=1;fe!=16;++fe)L[fe-1]=typeof Int32Array<"u"?Z.subarray(fe*256,fe*256+256):Z.slice(fe*256,fe*256+256);return L}var i=s(r),c=i[0],f=i[1],u=i[2],h=i[3],x=i[4],m=i[5],v=i[6],y=i[7],_=i[8],E=i[9],b=i[10],C=i[11],D=i[12],k=i[13],w=i[14];function H(R,W){for(var U=W^-1,fe=0,Z=R.length;fe<Z;)U=U>>>8^r[(U^R.charCodeAt(fe++))&255];return~U}function V(R,W){for(var U=W^-1,fe=R.length-15,Z=0;Z<fe;)U=w[R[Z++]^U&255]^k[R[Z++]^U>>8&255]^D[R[Z++]^U>>16&255]^C[R[Z++]^U>>>24]^b[R[Z++]]^E[R[Z++]]^_[R[Z++]]^y[R[Z++]]^v[R[Z++]]^m[R[Z++]]^x[R[Z++]]^h[R[Z++]]^u[R[Z++]]^f[R[Z++]]^c[R[Z++]]^r[R[Z++]];for(fe+=15;Z<fe;)U=U>>>8^r[(U^R[Z++])&255];return~U}function z(R,W){for(var U=W^-1,fe=0,Z=R.length,L=0,de=0;fe<Z;)L=R.charCodeAt(fe++),L<128?U=U>>>8^r[(U^L)&255]:L<2048?(U=U>>>8^r[(U^(192|L>>6&31))&255],U=U>>>8^r[(U^(128|L&63))&255]):L>=55296&&L<57344?(L=(L&1023)+64,de=R.charCodeAt(fe++)&1023,U=U>>>8^r[(U^(240|L>>8&7))&255],U=U>>>8^r[(U^(128|L>>2&63))&255],U=U>>>8^r[(U^(128|de>>6&15|(L&3)<<4))&255],U=U>>>8^r[(U^(128|de&63))&255]):(U=U>>>8^r[(U^(224|L>>12&15))&255],U=U>>>8^r[(U^(128|L>>6&63))&255],U=U>>>8^r[(U^(128|L&63))&255]);return~U}return e.table=r,e.bstr=H,e.buf=V,e.str=z,e})(),ct=(function(){var n={};n.version="1.2.1";function r(A,M){for(var B=A.split("/"),F=M.split("/"),N=0,j=0,se=Math.min(B.length,F.length);N<se;++N){if(j=B[N].length-F[N].length)return j;if(B[N]!=F[N])return B[N]<F[N]?-1:1}return B.length-F.length}function s(A){if(A.charAt(A.length-1)=="/")return A.slice(0,-1).indexOf("/")===-1?A:s(A.slice(0,-1));var M=A.lastIndexOf("/");return M===-1?A:A.slice(0,M+1)}function i(A){if(A.charAt(A.length-1)=="/")return i(A.slice(0,-1));var M=A.lastIndexOf("/");return M===-1?A:A.slice(M+1)}function c(A,M){typeof M=="string"&&(M=new Date(M));var B=M.getHours();B=B<<6|M.getMinutes(),B=B<<5|M.getSeconds()>>>1,A.write_shift(2,B);var F=M.getFullYear()-1980;F=F<<4|M.getMonth()+1,F=F<<5|M.getDate(),A.write_shift(2,F)}function f(A){var M=A.read_shift(2)&65535,B=A.read_shift(2)&65535,F=new Date,N=B&31;B>>>=5;var j=B&15;B>>>=4,F.setMilliseconds(0),F.setFullYear(B+1980),F.setMonth(j-1),F.setDate(N);var se=M&31;M>>>=5;var ge=M&63;return M>>>=6,F.setHours(M),F.setMinutes(ge),F.setSeconds(se<<1),F}function u(A){xn(A,0);for(var M={},B=0;A.l<=A.length-4;){var F=A.read_shift(2),N=A.read_shift(2),j=A.l+N,se={};F===21589&&(B=A.read_shift(1),B&1&&(se.mtime=A.read_shift(4)),N>5&&(B&2&&(se.atime=A.read_shift(4)),B&4&&(se.ctime=A.read_shift(4))),se.mtime&&(se.mt=new Date(se.mtime*1e3))),A.l=j,M[F]=se}return M}var h;function x(){return h||(h={})}function m(A,M){if(A[0]==80&&A[1]==75)return ls(A,M);if((A[0]|32)==109&&(A[1]|32)==105)return cs(A,M);if(A.length<512)throw new Error("CFB file size "+A.length+" < 512");var B=3,F=512,N=0,j=0,se=0,ge=0,ie=0,le=[],ce=A.slice(0,512);xn(ce,0);var Ee=v(ce);switch(B=Ee[0],B){case 3:F=512;break;case 4:F=4096;break;case 0:if(Ee[1]==0)return ls(A,M);default:throw new Error("Major Version: Expected 3 or 4 saw "+B)}F!==512&&(ce=A.slice(0,F),xn(ce,28));var ke=A.slice(0,F);y(ce,B);var Ne=ce.read_shift(4,"i");if(B===3&&Ne!==0)throw new Error("# Directory Sectors: Expected 0 saw "+Ne);ce.l+=4,se=ce.read_shift(4,"i"),ce.l+=4,ce.chk("00100000","Mini Stream Cutoff Size: "),ge=ce.read_shift(4,"i"),N=ce.read_shift(4,"i"),ie=ce.read_shift(4,"i"),j=ce.read_shift(4,"i");for(var Ae=-1,Fe=0;Fe<109&&(Ae=ce.read_shift(4,"i"),!(Ae<0));++Fe)le[Fe]=Ae;var Ie=_(A,F);C(ie,j,Ie,F,le);var Et=k(Ie,se,le,F);Et[se].name="!Directory",N>0&&ge!==de&&(Et[ge].name="!MiniFAT"),Et[le[0]].name="!FAT",Et.fat_addrs=le,Et.ssz=F;var wt={},Bt=[],ir=[],fs=[];w(se,Et,Ie,Bt,N,wt,ir,ge),E(ir,fs,Bt),Bt.shift();var Ea={FileIndex:ir,FullPaths:fs};return M&&M.raw&&(Ea.raw={header:ke,sectors:Ie}),Ea}function v(A){if(A[A.l]==80&&A[A.l+1]==75)return[0,0];A.chk(Ce,"Header Signature: "),A.l+=16;var M=A.read_shift(2,"u");return[A.read_shift(2,"u"),M]}function y(A,M){var B=9;switch(A.l+=2,B=A.read_shift(2)){case 9:if(M!=3)throw new Error("Sector Shift: Expected 9 saw "+B);break;case 12:if(M!=4)throw new Error("Sector Shift: Expected 12 saw "+B);break;default:throw new Error("Sector Shift: Expected 9 or 12 saw "+B)}A.chk("0600","Mini Sector Shift: "),A.chk("000000000000","Reserved: ")}function _(A,M){for(var B=Math.ceil(A.length/M)-1,F=[],N=1;N<B;++N)F[N-1]=A.slice(N*M,(N+1)*M);return F[B-1]=A.slice(B*M),F}function E(A,M,B){for(var F=0,N=0,j=0,se=0,ge=0,ie=B.length,le=[],ce=[];F<ie;++F)le[F]=ce[F]=F,M[F]=B[F];for(;ge<ce.length;++ge)F=ce[ge],N=A[F].L,j=A[F].R,se=A[F].C,le[F]===F&&(N!==-1&&le[N]!==N&&(le[F]=le[N]),j!==-1&&le[j]!==j&&(le[F]=le[j])),se!==-1&&(le[se]=F),N!==-1&&F!=le[F]&&(le[N]=le[F],ce.lastIndexOf(N)<ge&&ce.push(N)),j!==-1&&F!=le[F]&&(le[j]=le[F],ce.lastIndexOf(j)<ge&&ce.push(j));for(F=1;F<ie;++F)le[F]===F&&(j!==-1&&le[j]!==j?le[F]=le[j]:N!==-1&&le[N]!==N&&(le[F]=le[N]));for(F=1;F<ie;++F)if(A[F].type!==0){if(ge=F,ge!=le[ge])do ge=le[ge],M[F]=M[ge]+"/"+M[F];while(ge!==0&&le[ge]!==-1&&ge!=le[ge]);le[F]=-1}for(M[0]+="/",F=1;F<ie;++F)A[F].type!==2&&(M[F]+="/")}function b(A,M,B){for(var F=A.start,N=A.size,j=[],se=F;B&&N>0&&se>=0;)j.push(M.slice(se*L,se*L+L)),N-=L,se=Bs(B,se*4);return j.length===0?en(0):Qa(j).slice(0,A.size)}function C(A,M,B,F,N){var j=de;if(A===de){if(M!==0)throw new Error("DIFAT chain shorter than expected")}else if(A!==-1){var se=B[A],ge=(F>>>2)-1;if(!se)return;for(var ie=0;ie<ge&&(j=Bs(se,ie*4))!==de;++ie)N.push(j);C(Bs(se,F-4),M-1,B,F,N)}}function D(A,M,B,F,N){var j=[],se=[];N||(N=[]);var ge=F-1,ie=0,le=0;for(ie=M;ie>=0;){N[ie]=!0,j[j.length]=ie,se.push(A[ie]);var ce=B[Math.floor(ie*4/F)];if(le=ie*4&ge,F<4+le)throw new Error("FAT boundary crossed: "+ie+" 4 "+F);if(!A[ce])break;ie=Bs(A[ce],le)}return{nodes:j,data:Fg([se])}}function k(A,M,B,F){var N=A.length,j=[],se=[],ge=[],ie=[],le=F-1,ce=0,Ee=0,ke=0,Ne=0;for(ce=0;ce<N;++ce)if(ge=[],ke=ce+M,ke>=N&&(ke-=N),!se[ke]){ie=[];var Ae=[];for(Ee=ke;Ee>=0;){Ae[Ee]=!0,se[Ee]=!0,ge[ge.length]=Ee,ie.push(A[Ee]);var Fe=B[Math.floor(Ee*4/F)];if(Ne=Ee*4&le,F<4+Ne)throw new Error("FAT boundary crossed: "+Ee+" 4 "+F);if(!A[Fe]||(Ee=Bs(A[Fe],Ne),Ae[Ee]))break}j[ke]={nodes:ge,data:Fg([ie])}}return j}function w(A,M,B,F,N,j,se,ge){for(var ie=0,le=F.length?2:0,ce=M[A].data,Ee=0,ke=0,Ne;Ee<ce.length;Ee+=128){var Ae=ce.slice(Ee,Ee+128);xn(Ae,64),ke=Ae.read_shift(2),Ne=kh(Ae,0,ke-le),F.push(Ne);var Fe={name:Ne,type:Ae.read_shift(1),color:Ae.read_shift(1),L:Ae.read_shift(4,"i"),R:Ae.read_shift(4,"i"),C:Ae.read_shift(4,"i"),clsid:Ae.read_shift(16),state:Ae.read_shift(4,"i"),start:0,size:0},Ie=Ae.read_shift(2)+Ae.read_shift(2)+Ae.read_shift(2)+Ae.read_shift(2);Ie!==0&&(Fe.ct=H(Ae,Ae.l-8));var Et=Ae.read_shift(2)+Ae.read_shift(2)+Ae.read_shift(2)+Ae.read_shift(2);Et!==0&&(Fe.mt=H(Ae,Ae.l-8)),Fe.start=Ae.read_shift(4,"i"),Fe.size=Ae.read_shift(4,"i"),Fe.size<0&&Fe.start<0&&(Fe.size=Fe.type=0,Fe.start=de,Fe.name=""),Fe.type===5?(ie=Fe.start,N>0&&ie!==de&&(M[ie].name="!StreamData")):Fe.size>=4096?(Fe.storage="fat",M[Fe.start]===void 0&&(M[Fe.start]=D(B,Fe.start,M.fat_addrs,M.ssz)),M[Fe.start].name=Fe.name,Fe.content=M[Fe.start].data.slice(0,Fe.size)):(Fe.storage="minifat",Fe.size<0?Fe.size=0:ie!==de&&Fe.start!==de&&M[ie]&&(Fe.content=b(Fe,M[ie].data,(M[ge]||{}).data))),Fe.content&&xn(Fe.content,0),j[Ne]=Fe,se.push(Fe)}}function H(A,M){return new Date((Zn(A,M+4)/1e7*Math.pow(2,32)+Zn(A,M)/1e7-11644473600)*1e3)}function V(A,M){return x(),m(h.readFileSync(A),M)}function z(A,M){var B=M&&M.type;switch(B||ot&&Buffer.isBuffer(A)&&(B="buffer"),B||"base64"){case"file":return V(A,M);case"base64":return m(Br(tr(A)),M);case"binary":return m(Br(A),M)}return m(A,M)}function R(A,M){var B=M||{},F=B.root||"Root Entry";if(A.FullPaths||(A.FullPaths=[]),A.FileIndex||(A.FileIndex=[]),A.FullPaths.length!==A.FileIndex.length)throw new Error("inconsistent CFB structure");A.FullPaths.length===0&&(A.FullPaths[0]=F+"/",A.FileIndex[0]={name:F,type:5}),B.CLSID&&(A.FileIndex[0].clsid=B.CLSID),W(A)}function W(A){var M="Sh33tJ5";if(!ct.find(A,"/"+M)){var B=en(4);B[0]=55,B[1]=B[3]=50,B[2]=54,A.FileIndex.push({name:M,type:2,content:B,size:4,L:69,R:69,C:69}),A.FullPaths.push(A.FullPaths[0]+M),U(A)}}function U(A,M){R(A);for(var B=!1,F=!1,N=A.FullPaths.length-1;N>=0;--N){var j=A.FileIndex[N];switch(j.type){case 0:F?B=!0:(A.FileIndex.pop(),A.FullPaths.pop());break;case 1:case 2:case 5:F=!0,isNaN(j.R*j.L*j.C)&&(B=!0),j.R>-1&&j.L>-1&&j.R==j.L&&(B=!0);break;default:B=!0;break}}if(!(!B&&!M)){var se=new Date(1987,1,19),ge=0,ie=Object.create?Object.create(null):{},le=[];for(N=0;N<A.FullPaths.length;++N)ie[A.FullPaths[N]]=!0,A.FileIndex[N].type!==0&&le.push([A.FullPaths[N],A.FileIndex[N]]);for(N=0;N<le.length;++N){var ce=s(le[N][0]);F=ie[ce],F||(le.push([ce,{name:i(ce).replace("/",""),type:1,clsid:X,ct:se,mt:se,content:null}]),ie[ce]=!0)}for(le.sort(function(Ne,Ae){return r(Ne[0],Ae[0])}),A.FullPaths=[],A.FileIndex=[],N=0;N<le.length;++N)A.FullPaths[N]=le[N][0],A.FileIndex[N]=le[N][1];for(N=0;N<le.length;++N){var Ee=A.FileIndex[N],ke=A.FullPaths[N];if(Ee.name=i(ke).replace("/",""),Ee.L=Ee.R=Ee.C=-(Ee.color=1),Ee.size=Ee.content?Ee.content.length:0,Ee.start=0,Ee.clsid=Ee.clsid||X,N===0)Ee.C=le.length>1?1:-1,Ee.size=0,Ee.type=5;else if(ke.slice(-1)=="/"){for(ge=N+1;ge<le.length&&s(A.FullPaths[ge])!=ke;++ge);for(Ee.C=ge>=le.length?-1:ge,ge=N+1;ge<le.length&&s(A.FullPaths[ge])!=s(ke);++ge);Ee.R=ge>=le.length?-1:ge,Ee.type=1}else s(A.FullPaths[N+1]||"")==s(ke)&&(Ee.R=N+1),Ee.type=2}}}function fe(A,M){var B=M||{};if(B.fileType=="mad")return Jc(A,B);if(U(A),B.fileType==="zip")return $s(A,B);var F=(function(Ne){for(var Ae=0,Fe=0,Ie=0;Ie<Ne.FileIndex.length;++Ie){var Et=Ne.FileIndex[Ie];if(Et.content){var wt=Et.content.length;wt>0&&(wt<4096?Ae+=wt+63>>6:Fe+=wt+511>>9)}}for(var Bt=Ne.FullPaths.length+3>>2,ir=Ae+7>>3,fs=Ae+127>>7,Ea=ir+Fe+Bt+fs,Lr=Ea+127>>7,s0=Lr<=109?0:Math.ceil((Lr-109)/127);Ea+Lr+s0+127>>7>Lr;)s0=++Lr<=109?0:Math.ceil((Lr-109)/127);var On=[1,s0,Lr,fs,Bt,Fe,Ae,0];return Ne.FileIndex[0].size=Ae<<6,On[7]=(Ne.FileIndex[0].start=On[0]+On[1]+On[2]+On[3]+On[4]+On[5])+(On[6]+7>>3),On})(A),N=en(F[7]<<9),j=0,se=0;{for(j=0;j<8;++j)N.write_shift(1,me[j]);for(j=0;j<8;++j)N.write_shift(2,0);for(N.write_shift(2,62),N.write_shift(2,3),N.write_shift(2,65534),N.write_shift(2,9),N.write_shift(2,6),j=0;j<3;++j)N.write_shift(2,0);for(N.write_shift(4,0),N.write_shift(4,F[2]),N.write_shift(4,F[0]+F[1]+F[2]+F[3]-1),N.write_shift(4,0),N.write_shift(4,4096),N.write_shift(4,F[3]?F[0]+F[1]+F[2]-1:de),N.write_shift(4,F[3]),N.write_shift(-4,F[1]?F[0]-1:de),N.write_shift(4,F[1]),j=0;j<109;++j)N.write_shift(-4,j<F[2]?F[1]+j:-1)}if(F[1])for(se=0;se<F[1];++se){for(;j<236+se*127;++j)N.write_shift(-4,j<F[2]?F[1]+j:-1);N.write_shift(-4,se===F[1]-1?de:se+1)}var ge=function(Ne){for(se+=Ne;j<se-1;++j)N.write_shift(-4,j+1);Ne&&(++j,N.write_shift(-4,de))};for(se=j=0,se+=F[1];j<se;++j)N.write_shift(-4,ee.DIFSECT);for(se+=F[2];j<se;++j)N.write_shift(-4,ee.FATSECT);ge(F[3]),ge(F[4]);for(var ie=0,le=0,ce=A.FileIndex[0];ie<A.FileIndex.length;++ie)ce=A.FileIndex[ie],ce.content&&(le=ce.content.length,!(le<4096)&&(ce.start=se,ge(le+511>>9)));for(ge(F[6]+7>>3);N.l&511;)N.write_shift(-4,ee.ENDOFCHAIN);for(se=j=0,ie=0;ie<A.FileIndex.length;++ie)ce=A.FileIndex[ie],ce.content&&(le=ce.content.length,!(!le||le>=4096)&&(ce.start=se,ge(le+63>>6)));for(;N.l&511;)N.write_shift(-4,ee.ENDOFCHAIN);for(j=0;j<F[4]<<2;++j){var Ee=A.FullPaths[j];if(!Ee||Ee.length===0){for(ie=0;ie<17;++ie)N.write_shift(4,0);for(ie=0;ie<3;++ie)N.write_shift(4,-1);for(ie=0;ie<12;++ie)N.write_shift(4,0);continue}ce=A.FileIndex[j],j===0&&(ce.start=ce.size?ce.start-1:de);var ke=j===0&&B.root||ce.name;if(le=2*(ke.length+1),N.write_shift(64,ke,"utf16le"),N.write_shift(2,le),N.write_shift(1,ce.type),N.write_shift(1,ce.color),N.write_shift(-4,ce.L),N.write_shift(-4,ce.R),N.write_shift(-4,ce.C),ce.clsid)N.write_shift(16,ce.clsid,"hex");else for(ie=0;ie<4;++ie)N.write_shift(4,0);N.write_shift(4,ce.state||0),N.write_shift(4,0),N.write_shift(4,0),N.write_shift(4,0),N.write_shift(4,0),N.write_shift(4,ce.start),N.write_shift(4,ce.size),N.write_shift(4,0)}for(j=1;j<A.FileIndex.length;++j)if(ce=A.FileIndex[j],ce.size>=4096)if(N.l=ce.start+1<<9,ot&&Buffer.isBuffer(ce.content))ce.content.copy(N,N.l,0,ce.size),N.l+=ce.size+511&-512;else{for(ie=0;ie<ce.size;++ie)N.write_shift(1,ce.content[ie]);for(;ie&511;++ie)N.write_shift(1,0)}for(j=1;j<A.FileIndex.length;++j)if(ce=A.FileIndex[j],ce.size>0&&ce.size<4096)if(ot&&Buffer.isBuffer(ce.content))ce.content.copy(N,N.l,0,ce.size),N.l+=ce.size+63&-64;else{for(ie=0;ie<ce.size;++ie)N.write_shift(1,ce.content[ie]);for(;ie&63;++ie)N.write_shift(1,0)}if(ot)N.l=N.length;else for(;N.l<N.length;)N.write_shift(1,0);return N}function Z(A,M){var B=A.FullPaths.map(function(ie){return ie.toUpperCase()}),F=B.map(function(ie){var le=ie.split("/");return le[le.length-(ie.slice(-1)=="/"?2:1)]}),N=!1;M.charCodeAt(0)===47?(N=!0,M=B[0].slice(0,-1)+M):N=M.indexOf("/")!==-1;var j=M.toUpperCase(),se=N===!0?B.indexOf(j):F.indexOf(j);if(se!==-1)return A.FileIndex[se];var ge=!j.match(J0);for(j=j.replace(Fn,""),ge&&(j=j.replace(J0,"!")),se=0;se<B.length;++se)if((ge?B[se].replace(J0,"!"):B[se]).replace(Fn,"")==j||(ge?F[se].replace(J0,"!"):F[se]).replace(Fn,"")==j)return A.FileIndex[se];return null}var L=64,de=-2,Ce="d0cf11e0a1b11ae1",me=[208,207,17,224,161,177,26,225],X="00000000000000000000000000000000",ee={MAXREGSECT:-6,DIFSECT:-4,FATSECT:-3,ENDOFCHAIN:de,FREESECT:-1,HEADER_SIGNATURE:Ce,HEADER_MINOR_VERSION:"3e00",MAXREGSID:-6,NOSTREAM:-1,HEADER_CLSID:X,EntryTypes:["unknown","storage","stream","lockbytes","property","root"]};function we(A,M,B){x();var F=fe(A,B);h.writeFileSync(M,F)}function K(A){for(var M=new Array(A.length),B=0;B<A.length;++B)M[B]=String.fromCharCode(A[B]);return M.join("")}function ne(A,M){var B=fe(A,M);switch(M&&M.type||"buffer"){case"file":return x(),h.writeFileSync(M.filename,B),B;case"binary":return typeof B=="string"?B:K(B);case"base64":return hg(typeof B=="string"?B:K(B));case"buffer":if(ot)return Buffer.isBuffer(B)?B:qs(B);case"array":return typeof B=="string"?Br(B):B}return B}var Te;function O(A){try{var M=A.InflateRaw,B=new M;if(B._processChunk(new Uint8Array([3,0]),B._finishFlushFlag),B.bytesRead)Te=A;else throw new Error("zlib does not expose bytesRead")}catch(F){console.error("cannot use native zlib: "+(F.message||F))}}function J(A,M){if(!Te)return Nl(A,M);var B=Te.InflateRaw,F=new B,N=F._processChunk(A.slice(A.l),F._finishFlushFlag);return A.l+=F.bytesRead,N}function P(A){return Te?Te.deflateRawSync(A):Qe(A)}var G=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],ue=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258],he=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577];function ve(A){var M=(A<<1|A<<11)&139536|(A<<5|A<<15)&558144;return(M>>16|M>>8|M)&255}for(var ye=typeof Uint8Array<"u",_e=ye?new Uint8Array(256):[],Pe=0;Pe<256;++Pe)_e[Pe]=ve(Pe);function I(A,M){var B=_e[A&255];return M<=8?B>>>8-M:(B=B<<8|_e[A>>8&255],M<=16?B>>>16-M:(B=B<<8|_e[A>>16&255],B>>>24-M))}function st(A,M){var B=M&7,F=M>>>3;return(A[F]|(B<=6?0:A[F+1]<<8))>>>B&3}function Ue(A,M){var B=M&7,F=M>>>3;return(A[F]|(B<=5?0:A[F+1]<<8))>>>B&7}function it(A,M){var B=M&7,F=M>>>3;return(A[F]|(B<=4?0:A[F+1]<<8))>>>B&15}function qe(A,M){var B=M&7,F=M>>>3;return(A[F]|(B<=3?0:A[F+1]<<8))>>>B&31}function Be(A,M){var B=M&7,F=M>>>3;return(A[F]|(B<=1?0:A[F+1]<<8))>>>B&127}function Ct(A,M,B){var F=M&7,N=M>>>3,j=(1<<B)-1,se=A[N]>>>F;return B<8-F||(se|=A[N+1]<<8-F,B<16-F)||(se|=A[N+2]<<16-F,B<24-F)||(se|=A[N+3]<<24-F),se&j}function an(A,M,B){var F=M&7,N=M>>>3;return F<=5?A[N]|=(B&7)<<F:(A[N]|=B<<F&255,A[N+1]=(B&7)>>8-F),M+3}function gn(A,M,B){var F=M&7,N=M>>>3;return B=(B&1)<<F,A[N]|=B,M+1}function De(A,M,B){var F=M&7,N=M>>>3;return B<<=F,A[N]|=B&255,B>>>=8,A[N+1]=B,M+8}function ze(A,M,B){var F=M&7,N=M>>>3;return B<<=F,A[N]|=B&255,B>>>=8,A[N+1]=B&255,A[N+2]=B>>>8,M+16}function mt(A,M){var B=A.length,F=2*B>M?2*B:M+5,N=0;if(B>=M)return A;if(ot){var j=xg(F);if(A.copy)A.copy(j);else for(;N<A.length;++N)j[N]=A[N];return j}else if(ye){var se=new Uint8Array(F);if(se.set)se.set(A);else for(;N<B;++N)se[N]=A[N];return se}return A.length=F,A}function je(A){for(var M=new Array(A),B=0;B<A;++B)M[B]=0;return M}function Ot(A,M,B){var F=1,N=0,j=0,se=0,ge=0,ie=A.length,le=ye?new Uint16Array(32):je(32);for(j=0;j<32;++j)le[j]=0;for(j=ie;j<B;++j)A[j]=0;ie=A.length;var ce=ye?new Uint16Array(ie):je(ie);for(j=0;j<ie;++j)le[N=A[j]]++,F<N&&(F=N),ce[j]=0;for(le[0]=0,j=1;j<=F;++j)le[j+16]=ge=ge+le[j-1]<<1;for(j=0;j<ie;++j)ge=A[j],ge!=0&&(ce[j]=le[ge+16]++);var Ee=0;for(j=0;j<ie;++j)if(Ee=A[j],Ee!=0)for(ge=I(ce[j],F)>>F-Ee,se=(1<<F+4-Ee)-1;se>=0;--se)M[ge|se<<Ee]=Ee&15|j<<4;return F}var Pn=ye?new Uint16Array(512):je(512),Ca=ye?new Uint16Array(32):je(32);if(!ye){for(var Xt=0;Xt<512;++Xt)Pn[Xt]=0;for(Xt=0;Xt<32;++Xt)Ca[Xt]=0}(function(){for(var A=[],M=0;M<32;M++)A.push(5);Ot(A,Ca,32);var B=[];for(M=0;M<=143;M++)B.push(8);for(;M<=255;M++)B.push(9);for(;M<=279;M++)B.push(7);for(;M<=287;M++)B.push(8);Ot(B,Pn,288)})();var ar=(function(){for(var M=ye?new Uint8Array(32768):[],B=0,F=0;B<he.length-1;++B)for(;F<he[B+1];++F)M[F]=B;for(;F<32768;++F)M[F]=29;var N=ye?new Uint8Array(259):[];for(B=0,F=0;B<ue.length-1;++B)for(;F<ue[B+1];++F)N[F]=B;function j(ge,ie){for(var le=0;le<ge.length;){var ce=Math.min(65535,ge.length-le),Ee=le+ce==ge.length;for(ie.write_shift(1,+Ee),ie.write_shift(2,ce),ie.write_shift(2,~ce&65535);ce-- >0;)ie[ie.l++]=ge[le++]}return ie.l}function se(ge,ie){for(var le=0,ce=0,Ee=ye?new Uint16Array(32768):[];ce<ge.length;){var ke=Math.min(65535,ge.length-ce);if(ke<10){for(le=an(ie,le,+(ce+ke==ge.length)),le&7&&(le+=8-(le&7)),ie.l=le/8|0,ie.write_shift(2,ke),ie.write_shift(2,~ke&65535);ke-- >0;)ie[ie.l++]=ge[ce++];le=ie.l*8;continue}le=an(ie,le,+(ce+ke==ge.length)+2);for(var Ne=0;ke-- >0;){var Ae=ge[ce];Ne=(Ne<<5^Ae)&32767;var Fe=-1,Ie=0;if((Fe=Ee[Ne])&&(Fe|=ce&-32768,Fe>ce&&(Fe-=32768),Fe<ce))for(;ge[Fe+Ie]==ge[ce+Ie]&&Ie<250;)++Ie;if(Ie>2){Ae=N[Ie],Ae<=22?le=De(ie,le,_e[Ae+1]>>1)-1:(De(ie,le,3),le+=5,De(ie,le,_e[Ae-23]>>5),le+=3);var Et=Ae<8?0:Ae-4>>2;Et>0&&(ze(ie,le,Ie-ue[Ae]),le+=Et),Ae=M[ce-Fe],le=De(ie,le,_e[Ae]>>3),le-=3;var wt=Ae<4?0:Ae-2>>1;wt>0&&(ze(ie,le,ce-Fe-he[Ae]),le+=wt);for(var Bt=0;Bt<Ie;++Bt)Ee[Ne]=ce&32767,Ne=(Ne<<5^ge[ce])&32767,++ce;ke-=Ie-1}else Ae<=143?Ae=Ae+48:le=gn(ie,le,1),le=De(ie,le,_e[Ae]),Ee[Ne]=ce&32767,++ce}le=De(ie,le,0)-1}return ie.l=(le+7)/8|0,ie.l}return function(ie,le){return ie.length<8?j(ie,le):se(ie,le)}})();function Qe(A){var M=en(50+Math.floor(A.length*1.1)),B=ar(A,M);return M.slice(0,B)}var Nt=ye?new Uint16Array(32768):je(32768),Nn=ye?new Uint16Array(32768):je(32768),Tt=ye?new Uint16Array(128):je(128),zt=1,Cr=1;function An(A,M){var B=qe(A,M)+257;M+=5;var F=qe(A,M)+1;M+=5;var N=it(A,M)+4;M+=4;for(var j=0,se=ye?new Uint8Array(19):je(19),ge=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],ie=1,le=ye?new Uint8Array(8):je(8),ce=ye?new Uint8Array(8):je(8),Ee=se.length,ke=0;ke<N;++ke)se[G[ke]]=j=Ue(A,M),ie<j&&(ie=j),le[j]++,M+=3;var Ne=0;for(le[0]=0,ke=1;ke<=ie;++ke)ce[ke]=Ne=Ne+le[ke-1]<<1;for(ke=0;ke<Ee;++ke)(Ne=se[ke])!=0&&(ge[ke]=ce[Ne]++);var Ae=0;for(ke=0;ke<Ee;++ke)if(Ae=se[ke],Ae!=0){Ne=_e[ge[ke]]>>8-Ae;for(var Fe=(1<<7-Ae)-1;Fe>=0;--Fe)Tt[Ne|Fe<<Ae]=Ae&7|ke<<3}var Ie=[];for(ie=1;Ie.length<B+F;)switch(Ne=Tt[Be(A,M)],M+=Ne&7,Ne>>>=3){case 16:for(j=3+st(A,M),M+=2,Ne=Ie[Ie.length-1];j-- >0;)Ie.push(Ne);break;case 17:for(j=3+Ue(A,M),M+=3;j-- >0;)Ie.push(0);break;case 18:for(j=11+Be(A,M),M+=7;j-- >0;)Ie.push(0);break;default:Ie.push(Ne),ie<Ne&&(ie=Ne);break}var Et=Ie.slice(0,B),wt=Ie.slice(B);for(ke=B;ke<286;++ke)Et[ke]=0;for(ke=F;ke<30;++ke)wt[ke]=0;return zt=Ot(Et,Nt,286),Cr=Ot(wt,Nn,30),M}function Kc(A,M){if(A[0]==3&&!(A[1]&3))return[ns(M),2];for(var B=0,F=0,N=xg(M||1<<18),j=0,se=N.length>>>0,ge=0,ie=0;(F&1)==0;){if(F=Ue(A,B),B+=3,F>>>1)F>>1==1?(ge=9,ie=5):(B=An(A,B),ge=zt,ie=Cr);else{B&7&&(B+=8-(B&7));var le=A[B>>>3]|A[(B>>>3)+1]<<8;if(B+=32,le>0)for(!M&&se<j+le&&(N=mt(N,j+le),se=N.length);le-- >0;)N[j++]=A[B>>>3],B+=8;continue}for(;;){!M&&se<j+32767&&(N=mt(N,j+32767),se=N.length);var ce=Ct(A,B,ge),Ee=F>>>1==1?Pn[ce]:Nt[ce];if(B+=Ee&15,Ee>>>=4,(Ee>>>8&255)===0)N[j++]=Ee;else{if(Ee==256)break;Ee-=257;var ke=Ee<8?0:Ee-4>>2;ke>5&&(ke=0);var Ne=j+ue[Ee];ke>0&&(Ne+=Ct(A,B,ke),B+=ke),ce=Ct(A,B,ie),Ee=F>>>1==1?Ca[ce]:Nn[ce],B+=Ee&15,Ee>>>=4;var Ae=Ee<4?0:Ee-2>>1,Fe=he[Ee];for(Ae>0&&(Fe+=Ct(A,B,Ae),B+=Ae),!M&&se<Ne&&(N=mt(N,Ne+100),se=N.length);j<Ne;)N[j]=N[j-Fe],++j}}}return M?[N,B+7>>>3]:[N.slice(0,j),B+7>>>3]}function Nl(A,M){var B=A.slice(A.l||0),F=Kc(B,M);return A.l+=F[1],F[0]}function Ol(A,M){if(A)typeof console<"u"&&console.error(M);else throw new Error(M)}function ls(A,M){var B=A;xn(B,0);var F=[],N=[],j={FileIndex:F,FullPaths:N};R(j,{root:M.root});for(var se=B.length-4;(B[se]!=80||B[se+1]!=75||B[se+2]!=5||B[se+3]!=6)&&se>=0;)--se;B.l=se+4,B.l+=4;var ge=B.read_shift(2);B.l+=6;var ie=B.read_shift(4);for(B.l=ie,se=0;se<ge;++se){B.l+=20;var le=B.read_shift(4),ce=B.read_shift(4),Ee=B.read_shift(2),ke=B.read_shift(2),Ne=B.read_shift(2);B.l+=8;var Ae=B.read_shift(4),Fe=u(B.slice(B.l+Ee,B.l+Ee+ke));B.l+=Ee+ke+Ne;var Ie=B.l;B.l=Ae+4,Zs(B,le,ce,j,Fe),B.l=Ie}return j}function Zs(A,M,B,F,N){A.l+=2;var j=A.read_shift(2),se=A.read_shift(2),ge=f(A);if(j&8257)throw new Error("Unsupported ZIP encryption");for(var ie=A.read_shift(4),le=A.read_shift(4),ce=A.read_shift(4),Ee=A.read_shift(2),ke=A.read_shift(2),Ne="",Ae=0;Ae<Ee;++Ae)Ne+=String.fromCharCode(A[A.l++]);if(ke){var Fe=u(A.slice(A.l,A.l+ke));(Fe[21589]||{}).mt&&(ge=Fe[21589].mt),((N||{})[21589]||{}).mt&&(ge=N[21589].mt)}A.l+=ke;var Ie=A.slice(A.l,A.l+le);switch(se){case 8:Ie=J(A,ce);break;case 0:break;default:throw new Error("Unsupported ZIP Compression method "+se)}var Et=!1;j&8&&(ie=A.read_shift(4),ie==134695760&&(ie=A.read_shift(4),Et=!0),le=A.read_shift(4),ce=A.read_shift(4)),le!=M&&Ol(Et,"Bad compressed size: "+M+" != "+le),ce!=B&&Ol(Et,"Bad uncompressed size: "+B+" != "+ce),ti(F,Ne,Ie,{unsafe:!0,mt:ge})}function $s(A,M){var B=M||{},F=[],N=[],j=en(1),se=B.compression?8:0,ge=0,ie=0,le=0,ce=0,Ee=0,ke=A.FullPaths[0],Ne=ke,Ae=A.FileIndex[0],Fe=[],Ie=0;for(ie=1;ie<A.FullPaths.length;++ie)if(Ne=A.FullPaths[ie].slice(ke.length),Ae=A.FileIndex[ie],!(!Ae.size||!Ae.content||Ne=="Sh33tJ5")){var Et=ce,wt=en(Ne.length);for(le=0;le<Ne.length;++le)wt.write_shift(1,Ne.charCodeAt(le)&127);wt=wt.slice(0,wt.l),Fe[Ee]=NA.buf(Ae.content,0);var Bt=Ae.content;se==8&&(Bt=P(Bt)),j=en(30),j.write_shift(4,67324752),j.write_shift(2,20),j.write_shift(2,ge),j.write_shift(2,se),Ae.mt?c(j,Ae.mt):j.write_shift(4,0),j.write_shift(-4,Fe[Ee]),j.write_shift(4,Bt.length),j.write_shift(4,Ae.content.length),j.write_shift(2,wt.length),j.write_shift(2,0),ce+=j.length,F.push(j),ce+=wt.length,F.push(wt),ce+=Bt.length,F.push(Bt),j=en(46),j.write_shift(4,33639248),j.write_shift(2,0),j.write_shift(2,20),j.write_shift(2,ge),j.write_shift(2,se),j.write_shift(4,0),j.write_shift(-4,Fe[Ee]),j.write_shift(4,Bt.length),j.write_shift(4,Ae.content.length),j.write_shift(2,wt.length),j.write_shift(2,0),j.write_shift(2,0),j.write_shift(2,0),j.write_shift(2,0),j.write_shift(4,0),j.write_shift(4,Et),Ie+=j.l,N.push(j),Ie+=wt.length,N.push(wt),++Ee}return j=en(22),j.write_shift(4,101010256),j.write_shift(2,0),j.write_shift(2,0),j.write_shift(2,Ee),j.write_shift(2,Ee),j.write_shift(4,Ie),j.write_shift(4,ce),j.write_shift(2,0),Qa([Qa(F),Qa(N),j])}var sr={htm:"text/html",xml:"text/xml",gif:"image/gif",jpg:"image/jpeg",png:"image/png",mso:"application/x-mso",thmx:"application/vnd.ms-officetheme",sh33tj5:"application/octet-stream"};function ei(A,M){if(A.ctype)return A.ctype;var B=A.name||"",F=B.match(/\.([^\.]+)$/);return F&&sr[F[1]]||M&&(F=(B=M).match(/[\.\\]([^\.\\])+$/),F&&sr[F[1]])?sr[F[1]]:"application/octet-stream"}function os(A){for(var M=hg(A),B=[],F=0;F<M.length;F+=76)B.push(M.slice(F,F+76));return B.join(`\r
`)+`\r
`}function Yc(A){var M=A.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g,function(le){var ce=le.charCodeAt(0).toString(16).toUpperCase();return"="+(ce.length==1?"0"+ce:ce)});M=M.replace(/ $/mg,"=20").replace(/\t$/mg,"=09"),M.charAt(0)==`
`&&(M="=0D"+M.slice(1)),M=M.replace(/\r(?!\n)/mg,"=0D").replace(/\n\n/mg,`
=0A`).replace(/([^\r\n])\n/mg,"$1=0A");for(var B=[],F=M.split(`\r
`),N=0;N<F.length;++N){var j=F[N];if(j.length==0){B.push("");continue}for(var se=0;se<j.length;){var ge=76,ie=j.slice(se,se+ge);ie.charAt(ge-1)=="="?ge--:ie.charAt(ge-2)=="="?ge-=2:ie.charAt(ge-3)=="="&&(ge-=3),ie=j.slice(se,se+ge),se+=ge,se<j.length&&(ie+="="),B.push(ie)}}return B.join(`\r
`)}function Ml(A){for(var M=[],B=0;B<A.length;++B){for(var F=A[B];B<=A.length&&F.charAt(F.length-1)=="=";)F=F.slice(0,F.length-1)+A[++B];M.push(F)}for(var N=0;N<M.length;++N)M[N]=M[N].replace(/[=][0-9A-Fa-f]{2}/g,function(j){return String.fromCharCode(parseInt(j.slice(1),16))});return Br(M.join(`\r
`))}function n0(A,M,B){for(var F="",N="",j="",se,ge=0;ge<10;++ge){var ie=M[ge];if(!ie||ie.match(/^\s*$/))break;var le=ie.match(/^(.*?):\s*([^\s].*)$/);if(le)switch(le[1].toLowerCase()){case"content-location":F=le[2].trim();break;case"content-type":j=le[2].trim();break;case"content-transfer-encoding":N=le[2].trim();break}}switch(++ge,N.toLowerCase()){case"base64":se=Br(tr(M.slice(ge).join("")));break;case"quoted-printable":se=Ml(M.slice(ge));break;default:throw new Error("Unsupported Content-Transfer-Encoding "+N)}var ce=ti(A,F.slice(B.length),se,{unsafe:!0});j&&(ce.ctype=j)}function cs(A,M){if(K(A.slice(0,13)).toLowerCase()!="mime-version:")throw new Error("Unsupported MAD header");var B=M&&M.root||"",F=(ot&&Buffer.isBuffer(A)?A.toString("binary"):K(A)).split(`\r
`),N=0,j="";for(N=0;N<F.length;++N)if(j=F[N],!!/^Content-Location:/i.test(j)&&(j=j.slice(j.indexOf("file")),B||(B=j.slice(0,j.lastIndexOf("/")+1)),j.slice(0,B.length)!=B))for(;B.length>0&&(B=B.slice(0,B.length-1),B=B.slice(0,B.lastIndexOf("/")+1),j.slice(0,B.length)!=B););var se=(F[1]||"").match(/boundary="(.*?)"/);if(!se)throw new Error("MAD cannot find boundary");var ge="--"+(se[1]||""),ie=[],le=[],ce={FileIndex:ie,FullPaths:le};R(ce);var Ee,ke=0;for(N=0;N<F.length;++N){var Ne=F[N];Ne!==ge&&Ne!==ge+"--"||(ke++&&n0(ce,F.slice(Ee,N),B),Ee=N)}return ce}function Jc(A,M){var B=M||{},F=B.boundary||"SheetJS";F="------="+F;for(var N=["MIME-Version: 1.0",'Content-Type: multipart/related; boundary="'+F.slice(2)+'"',"","",""],j=A.FullPaths[0],se=j,ge=A.FileIndex[0],ie=1;ie<A.FullPaths.length;++ie)if(se=A.FullPaths[ie].slice(j.length),ge=A.FileIndex[ie],!(!ge.size||!ge.content||se=="Sh33tJ5")){se=se.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g,function(Ie){return"_x"+Ie.charCodeAt(0).toString(16)+"_"}).replace(/[\u0080-\uFFFF]/g,function(Ie){return"_u"+Ie.charCodeAt(0).toString(16)+"_"});for(var le=ge.content,ce=ot&&Buffer.isBuffer(le)?le.toString("binary"):K(le),Ee=0,ke=Math.min(1024,ce.length),Ne=0,Ae=0;Ae<=ke;++Ae)(Ne=ce.charCodeAt(Ae))>=32&&Ne<128&&++Ee;var Fe=Ee>=ke*4/5;N.push(F),N.push("Content-Location: "+(B.root||"file:///C:/SheetJS/")+se),N.push("Content-Transfer-Encoding: "+(Fe?"quoted-printable":"base64")),N.push("Content-Type: "+ei(ge,se)),N.push(""),N.push(Fe?Yc(ce):os(ce))}return N.push(F+`--\r
`),N.join(`\r
`)}function Ll(A){var M={};return R(M,A),M}function ti(A,M,B,F){var N=F&&F.unsafe;N||R(A);var j=!N&&ct.find(A,M);if(!j){var se=A.FullPaths[0];M.slice(0,se.length)==se?se=M:(se.slice(-1)!="/"&&(se+="/"),se=(se+M).replace("//","/")),j={name:i(M),type:2},A.FileIndex.push(j),A.FullPaths.push(se),N||ct.utils.cfb_gc(A)}return j.content=B,j.size=B?B.length:0,F&&(F.CLSID&&(j.clsid=F.CLSID),F.mt&&(j.mt=F.mt),F.ct&&(j.ct=F.ct)),j}function jl(A,M){R(A);var B=ct.find(A,M);if(B){for(var F=0;F<A.FileIndex.length;++F)if(A.FileIndex[F]==B)return A.FileIndex.splice(F,1),A.FullPaths.splice(F,1),!0}return!1}function r0(A,M,B){R(A);var F=ct.find(A,M);if(F){for(var N=0;N<A.FileIndex.length;++N)if(A.FileIndex[N]==F)return A.FileIndex[N].name=i(B),A.FullPaths[N]=B,!0}return!1}function a0(A){U(A,!0)}return n.find=Z,n.read=z,n.parse=m,n.write=ne,n.writeFile=we,n.utils={cfb_new:Ll,cfb_add:ti,cfb_del:jl,cfb_mov:r0,cfb_gc:a0,ReadShift:rl,CheckField:Hy,prep_blob:xn,bconcat:Qa,use_zlib:O,_deflateRaw:Qe,_inflateRaw:Nl,consts:ee},n})();function OA(e){if(typeof Deno<"u")return Deno.readFileSync(e);if(typeof $<"u"&&typeof File<"u"&&typeof Folder<"u")try{var n=File(e);n.open("r"),n.encoding="binary";var r=n.read();return n.close(),r}catch(s){if(!s.message||!s.message.match(/onstruct/))throw s}throw new Error("Cannot access file "+e)}function qr(e){for(var n=Object.keys(e),r=[],s=0;s<n.length;++s)Object.prototype.hasOwnProperty.call(e,n[s])&&r.push(n[s]);return r}function Eh(e){for(var n=[],r=qr(e),s=0;s!==r.length;++s)n[e[r[s]]]=r[s];return n}var kc=new Date(1899,11,30,0,0,0);function Rn(e,n){var r=e.getTime(),s=kc.getTime()+(e.getTimezoneOffset()-kc.getTimezoneOffset())*6e4;return(r-s)/(1440*60*1e3)}var vy=new Date,MA=kc.getTime()+(vy.getTimezoneOffset()-kc.getTimezoneOffset())*6e4,_g=vy.getTimezoneOffset();function Xc(e){var n=new Date;return n.setTime(e*24*60*60*1e3+MA),n.getTimezoneOffset()!==_g&&n.setTime(n.getTime()+(n.getTimezoneOffset()-_g)*6e4),n}function LA(e){var n=0,r=0,s=!1,i=e.match(/P([0-9\.]+Y)?([0-9\.]+M)?([0-9\.]+D)?T([0-9\.]+H)?([0-9\.]+M)?([0-9\.]+S)?/);if(!i)throw new Error("|"+e+"| is not an ISO8601 Duration");for(var c=1;c!=i.length;++c)if(i[c]){switch(r=1,c>3&&(s=!0),i[c].slice(i[c].length-1)){case"Y":throw new Error("Unsupported ISO Duration Field: "+i[c].slice(i[c].length-1));case"D":r*=24;case"H":r*=60;case"M":if(s)r*=60;else throw new Error("Unsupported ISO Duration Field: M")}n+=r*parseInt(i[c],10)}return n}var Cg=new Date("2017-02-19T19:06:09.000Z"),yy=isNaN(Cg.getFullYear())?new Date("2/19/17"):Cg,jA=yy.getFullYear()==2017;function on(e,n){var r=new Date(e);if(jA)return n>0?r.setTime(r.getTime()+r.getTimezoneOffset()*60*1e3):n<0&&r.setTime(r.getTime()-r.getTimezoneOffset()*60*1e3),r;if(e instanceof Date)return e;if(yy.getFullYear()==1917&&!isNaN(r.getFullYear())){var s=r.getFullYear();return e.indexOf(""+s)>-1||r.setFullYear(r.getFullYear()+100),r}var i=e.match(/\d+/g)||["2017","2","19","0","0","0"],c=new Date(+i[0],+i[1]-1,+i[2],+i[3]||0,+i[4]||0,+i[5]||0);return e.indexOf("Z")>-1&&(c=new Date(c.getTime()-c.getTimezoneOffset()*60*1e3)),c}function zs(e,n){if(ot&&Buffer.isBuffer(e)){if(n){if(e[0]==255&&e[1]==254)return Z0(e.slice(2).toString("utf16le"));if(e[1]==254&&e[2]==255)return Z0(sy(e.slice(2).toString("binary")))}return e.toString("binary")}if(typeof TextDecoder<"u")try{if(n){if(e[0]==255&&e[1]==254)return Z0(new TextDecoder("utf-16le").decode(e.slice(2)));if(e[0]==254&&e[1]==255)return Z0(new TextDecoder("utf-16be").decode(e.slice(2)))}var r={"€":"","‚":"",ƒ:"","„":"","…":"","†":"","‡":"","ˆ":"","‰":"",Š:"","‹":"",Œ:"",Ž:"","‘":"","’":"","“":"","”":"","•":"","–":"","—":"","˜":"","™":"",š:"","›":"",œ:"",ž:"",Ÿ:""};return Array.isArray(e)&&(e=new Uint8Array(e)),new TextDecoder("latin1").decode(e).replace(/[€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ]/g,function(c){return r[c]||c})}catch{}for(var s=[],i=0;i!=e.length;++i)s.push(String.fromCharCode(e[i]));return s.join("")}function pn(e){if(typeof JSON<"u"&&!Array.isArray(e))return JSON.parse(JSON.stringify(e));if(typeof e!="object"||e==null)return e;if(e instanceof Date)return new Date(e.getTime());var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=pn(e[r]));return n}function It(e,n){for(var r="";r.length<n;)r+=e;return r}function Or(e){var n=Number(e);if(!isNaN(n))return isFinite(n)?n:NaN;if(!/\d/.test(e))return n;var r=1,s=e.replace(/([\d]),([\d])/g,"$1$2").replace(/[$]/g,"").replace(/[%]/g,function(){return r*=100,""});return!isNaN(n=Number(s))||(s=s.replace(/[(](.*)[)]/,function(i,c){return r=-r,c}),!isNaN(n=Number(s)))?n/r:n}var IA=["january","february","march","april","may","june","july","august","september","october","november","december"];function Qi(e){var n=new Date(e),r=new Date(NaN),s=n.getYear(),i=n.getMonth(),c=n.getDate();if(isNaN(c))return r;var f=e.toLowerCase();if(f.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)){if(f=f.replace(/[^a-z]/g,"").replace(/([^a-z]|^)[ap]m?([^a-z]|$)/,""),f.length>3&&IA.indexOf(f)==-1)return r}else if(f.match(/[a-z]/))return r;return s<0||s>8099?r:(i>0||c>1)&&s!=101?n:e.match(/[^-0-9:,\/\\]/)?r:n}var HA=(function(){var e="abacaba".split(/(:?b)/i).length==5;return function(r,s,i){if(e||typeof s=="string")return r.split(s);for(var c=r.split(s),f=[c[0]],u=1;u<c.length;++u)f.push(i),f.push(c[u]);return f}})();function by(e){return e?e.content&&e.type?zs(e.content,!0):e.data?Y0(e.data):e.asNodeBuffer&&ot?Y0(e.asNodeBuffer().toString("binary")):e.asBinary?Y0(e.asBinary()):e._data&&e._data.getContent?Y0(zs(Array.prototype.slice.call(e._data.getContent(),0))):null:null}function Sy(e){if(!e)return null;if(e.data)return ug(e.data);if(e.asNodeBuffer&&ot)return e.asNodeBuffer();if(e._data&&e._data.getContent){var n=e._data.getContent();return typeof n=="string"?ug(n):Array.prototype.slice.call(n)}return e.content&&e.type?e.content:null}function zA(e){return e&&e.name.slice(-4)===".bin"?Sy(e):by(e)}function yr(e,n){for(var r=e.FullPaths||qr(e.files),s=n.toLowerCase().replace(/[\/]/g,"\\"),i=s.replace(/\\/g,"/"),c=0;c<r.length;++c){var f=r[c].replace(/^Root Entry[\/]/,"").toLowerCase();if(s==f||i==f)return e.files?e.files[r[c]]:e.FileIndex[c]}return null}function wh(e,n){var r=yr(e,n);if(r==null)throw new Error("Cannot find file "+n+" in zip");return r}function Jt(e,n,r){if(!r)return zA(wh(e,n));if(!n)return null;try{return Jt(e,n)}catch{return null}}function er(e,n,r){if(!r)return by(wh(e,n));if(!n)return null;try{return er(e,n)}catch{return null}}function UA(e,n,r){return Sy(wh(e,n))}function Eg(e){for(var n=e.FullPaths||qr(e.files),r=[],s=0;s<n.length;++s)n[s].slice(-1)!="/"&&r.push(n[s].replace(/^Root Entry[\/]/,""));return r.sort()}function WA(e,n,r){if(e.FullPaths){if(typeof r=="string"){var s;return ot?s=qs(r):s=lA(r),ct.utils.cfb_add(e,n,s)}ct.utils.cfb_add(e,n,r)}else e.file(n,r)}function _y(e,n){switch(n.type){case"base64":return ct.read(e,{type:"base64"});case"binary":return ct.read(e,{type:"binary"});case"buffer":case"array":return ct.read(e,{type:"buffer"})}throw new Error("Unrecognized type "+n.type)}function Q0(e,n){if(e.charAt(0)=="/")return e.slice(1);var r=n.split("/");n.slice(-1)!="/"&&r.pop();for(var s=e.split("/");s.length!==0;){var i=s.shift();i===".."?r.pop():i!=="."&&r.push(i)}return r.join("/")}var Cy=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r
`,PA=/([^"\s?>\/]+)\s*=\s*((?:")([^"]*)(?:")|(?:')([^']*)(?:')|([^'">\s]+))/g,wg=/<[\/\?]?[a-zA-Z0-9:_-]+(?:\s+[^"\s?>\/]+\s*=\s*(?:"[^"]*"|'[^']*'|[^'">\s=]+))*\s*[\/\?]?>/mg,XA=/<[^>]*>/g,wn=Cy.match(wg)?wg:XA,GA=/<\w*:/,qA=/<(\/?)\w+:/;function Ge(e,n,r){for(var s={},i=0,c=0;i!==e.length&&!((c=e.charCodeAt(i))===32||c===10||c===13);++i);if(n||(s[0]=e.slice(0,i)),i===e.length)return s;var f=e.match(PA),u=0,h="",x=0,m="",v="",y=1;if(f)for(x=0;x!=f.length;++x){for(v=f[x],c=0;c!=v.length&&v.charCodeAt(c)!==61;++c);for(m=v.slice(0,c).trim();v.charCodeAt(c+1)==32;)++c;for(y=(i=v.charCodeAt(c+1))==34||i==39?1:0,h=v.slice(c+1+y,v.length-y),u=0;u!=m.length&&m.charCodeAt(u)!==58;++u);if(u===m.length)m.indexOf("_")>0&&(m=m.slice(0,m.indexOf("_"))),s[m]=h,s[m.toLowerCase()]=h;else{var _=(u===5&&m.slice(0,5)==="xmlns"?"xmlns":"")+m.slice(u+1);if(s[_]&&m.slice(u-3,u)=="ext")continue;s[_]=h,s[_.toLowerCase()]=h}}return s}function Vr(e){return e.replace(qA,"<$1")}var Ey={"&quot;":'"',"&apos;":"'","&gt;":">","&lt;":"<","&amp;":"&"},VA=Eh(Ey),dt=(function(){var e=/&(?:quot|apos|gt|lt|amp|#x?([\da-fA-F]+));/ig,n=/_x([\da-fA-F]{4})_/ig;return function r(s){var i=s+"",c=i.indexOf("<![CDATA[");if(c==-1)return i.replace(e,function(u,h){return Ey[u]||String.fromCharCode(parseInt(h,u.indexOf("x")>-1?16:10))||u}).replace(n,function(u,h){return String.fromCharCode(parseInt(h,16))});var f=i.indexOf("]]>");return r(i.slice(0,c))+i.slice(c+9,f)+r(i.slice(f+3))}})(),KA=/[&<>'"]/g,YA=/[\u0000-\u001f]/g;function Ah(e){var n=e+"";return n.replace(KA,function(r){return VA[r]}).replace(/\n/g,"<br/>").replace(YA,function(r){return"&#x"+("000"+r.charCodeAt(0).toString(16)).slice(-4)+";"})}var Ag=(function(){var e=/&#(\d+);/g;function n(r,s){return String.fromCharCode(parseInt(s,10))}return function(s){return s.replace(e,n)}})();function Rt(e){switch(e){case 1:case!0:case"1":case"true":case"TRUE":return!0;default:return!1}}function vd(e){for(var n="",r=0,s=0,i=0,c=0,f=0,u=0;r<e.length;){if(s=e.charCodeAt(r++),s<128){n+=String.fromCharCode(s);continue}if(i=e.charCodeAt(r++),s>191&&s<224){f=(s&31)<<6,f|=i&63,n+=String.fromCharCode(f);continue}if(c=e.charCodeAt(r++),s<240){n+=String.fromCharCode((s&15)<<12|(i&63)<<6|c&63);continue}f=e.charCodeAt(r++),u=((s&7)<<18|(i&63)<<12|(c&63)<<6|f&63)-65536,n+=String.fromCharCode(55296+(u>>>10&1023)),n+=String.fromCharCode(56320+(u&1023))}return n}function Tg(e){var n=ns(2*e.length),r,s,i=1,c=0,f=0,u;for(s=0;s<e.length;s+=i)i=1,(u=e.charCodeAt(s))<128?r=u:u<224?(r=(u&31)*64+(e.charCodeAt(s+1)&63),i=2):u<240?(r=(u&15)*4096+(e.charCodeAt(s+1)&63)*64+(e.charCodeAt(s+2)&63),i=3):(i=4,r=(u&7)*262144+(e.charCodeAt(s+1)&63)*4096+(e.charCodeAt(s+2)&63)*64+(e.charCodeAt(s+3)&63),r-=65536,f=55296+(r>>>10&1023),r=56320+(r&1023)),f!==0&&(n[c++]=f&255,n[c++]=f>>>8,f=0),n[c++]=r%256,n[c++]=r>>>8;return n.slice(0,c).toString("ucs2")}function kg(e){return qs(e,"binary").toString("utf8")}var ac="foo bar bazâð£",At=ot&&(kg(ac)==vd(ac)&&kg||Tg(ac)==vd(ac)&&Tg)||vd,Z0=ot?function(e){return qs(e,"utf8").toString("binary")}:function(e){for(var n=[],r=0,s=0,i=0;r<e.length;)switch(s=e.charCodeAt(r++),!0){case s<128:n.push(String.fromCharCode(s));break;case s<2048:n.push(String.fromCharCode(192+(s>>6))),n.push(String.fromCharCode(128+(s&63)));break;case(s>=55296&&s<57344):s-=55296,i=e.charCodeAt(r++)-56320+(s<<10),n.push(String.fromCharCode(240+(i>>18&7))),n.push(String.fromCharCode(144+(i>>12&63))),n.push(String.fromCharCode(128+(i>>6&63))),n.push(String.fromCharCode(128+(i&63)));break;default:n.push(String.fromCharCode(224+(s>>12))),n.push(String.fromCharCode(128+(s>>6&63))),n.push(String.fromCharCode(128+(s&63)))}return n.join("")},yl=(function(){var e={};return function(r,s){var i=r+"|"+(s||"");return e[i]?e[i]:e[i]=new RegExp("<(?:\\w+:)?"+r+'(?: xml:space="preserve")?(?:[^>]*)>([\\s\\S]*?)</(?:\\w+:)?'+r+">",s||"")}})(),wy=(function(){var e=[["nbsp"," "],["middot","·"],["quot",'"'],["apos","'"],["gt",">"],["lt","<"],["amp","&"]].map(function(n){return[new RegExp("&"+n[0]+";","ig"),n[1]]});return function(r){for(var s=r.replace(/^[\t\n\r ]+/,"").replace(/[\t\n\r ]+$/,"").replace(/>\s+/g,">").replace(/\s+</g,"<").replace(/[\t\n\r ]+/g," ").replace(/<\s*[bB][rR]\s*\/?>/g,`
`).replace(/<[^>]*>/g,""),i=0;i<e.length;++i)s=s.replace(e[i][0],e[i][1]);return s}})(),JA=(function(){var e={};return function(r){return e[r]!==void 0?e[r]:e[r]=new RegExp("<(?:vt:)?"+r+">([\\s\\S]*?)</(?:vt:)?"+r+">","g")}})(),QA=/<\/?(?:vt:)?variant>/g,ZA=/<(?:vt:)([^>]*)>([\s\S]*)</;function Dg(e,n){var r=Ge(e),s=e.match(JA(r.baseType))||[],i=[];if(s.length!=r.size){if(n.WTF)throw new Error("unexpected vector length "+s.length+" != "+r.size);return i}return s.forEach(function(c){var f=c.replace(QA,"").match(ZA);f&&i.push({v:At(f[2]),t:f[1]})}),i}var $A=/(^\s|\s$|\n)/;function e6(e){return qr(e).map(function(n){return" "+n+'="'+e[n]+'"'}).join("")}function t6(e,n,r){return"<"+e+(r!=null?e6(r):"")+(n!=null?(n.match($A)?' xml:space="preserve"':"")+">"+n+"</"+e:"/")+">"}function Th(e){if(ot&&Buffer.isBuffer(e))return e.toString("utf8");if(typeof e=="string")return e;if(typeof Uint8Array<"u"&&e instanceof Uint8Array)return At(Vs(Sh(e)));throw new Error("Bad input format: expected Buffer or string")}var bl=/<(\/?)([^\s?><!\/:]*:|)([^\s?<>:\/]+)(?:[\s?:\/][^>]*)?>/mg,n6={CT:"http://schemas.openxmlformats.org/package/2006/content-types"},r6=["http://schemas.openxmlformats.org/spreadsheetml/2006/main","http://purl.oclc.org/ooxml/spreadsheetml/main","http://schemas.microsoft.com/office/excel/2006/main","http://schemas.microsoft.com/office/excel/2006/2"];function a6(e,n){for(var r=1-2*(e[n+7]>>>7),s=((e[n+7]&127)<<4)+(e[n+6]>>>4&15),i=e[n+6]&15,c=5;c>=0;--c)i=i*256+e[n+c];return s==2047?i==0?r*(1/0):NaN:(s==0?s=-1022:(s-=1023,i+=Math.pow(2,52)),r*Math.pow(2,s-52)*i)}function s6(e,n,r){var s=(n<0||1/n==-1/0?1:0)<<7,i=0,c=0,f=s?-n:n;isFinite(f)?f==0?i=c=0:(i=Math.floor(Math.log(f)/Math.LN2),c=f*Math.pow(2,52-i),i<=-1023&&(!isFinite(c)||c<Math.pow(2,52))?i=-1022:(c-=Math.pow(2,52),i+=1023)):(i=2047,c=isNaN(n)?26985:0);for(var u=0;u<=5;++u,c/=256)e[r+u]=c&255;e[r+6]=(i&15)<<4|c&15,e[r+7]=i>>4|s}var Bg=function(e){for(var n=[],r=10240,s=0;s<e[0].length;++s)if(e[0][s])for(var i=0,c=e[0][s].length;i<c;i+=r)n.push.apply(n,e[0][s].slice(i,i+r));return n},Fg=ot?function(e){return e[0].length>0&&Buffer.isBuffer(e[0][0])?Buffer.concat(e[0].map(function(n){return Buffer.isBuffer(n)?n:qs(n)})):Bg(e)}:Bg,Rg=function(e,n,r){for(var s=[],i=n;i<r;i+=2)s.push(String.fromCharCode(pa(e,i)));return s.join("").replace(Fn,"")},kh=ot?function(e,n,r){return Buffer.isBuffer(e)?e.toString("utf16le",n,r).replace(Fn,""):Rg(e,n,r)}:Rg,Ng=function(e,n,r){for(var s=[],i=n;i<n+r;++i)s.push(("0"+e[i].toString(16)).slice(-2));return s.join("")},Ay=ot?function(e,n,r){return Buffer.isBuffer(e)?e.toString("hex",n,n+r):Ng(e,n,r)}:Ng,Og=function(e,n,r){for(var s=[],i=n;i<r;i++)s.push(String.fromCharCode(Ui(e,i)));return s.join("")},Tl=ot?function(n,r,s){return Buffer.isBuffer(n)?n.toString("utf8",r,s):Og(n,r,s)}:Og,Ty=function(e,n){var r=Zn(e,n);return r>0?Tl(e,n+4,n+4+r-1):""},ky=Ty,Dy=function(e,n){var r=Zn(e,n);return r>0?Tl(e,n+4,n+4+r-1):""},By=Dy,Fy=function(e,n){var r=2*Zn(e,n);return r>0?Tl(e,n+4,n+4+r-1):""},Ry=Fy,Ny=function(n,r){var s=Zn(n,r);return s>0?kh(n,r+4,r+4+s):""},Oy=Ny,My=function(e,n){var r=Zn(e,n);return r>0?Tl(e,n+4,n+4+r):""},Ly=My,jy=function(e,n){return a6(e,n)},Dc=jy,Iy=function(n){return Array.isArray(n)||typeof Uint8Array<"u"&&n instanceof Uint8Array};ot&&(ky=function(n,r){if(!Buffer.isBuffer(n))return Ty(n,r);var s=n.readUInt32LE(r);return s>0?n.toString("utf8",r+4,r+4+s-1):""},By=function(n,r){if(!Buffer.isBuffer(n))return Dy(n,r);var s=n.readUInt32LE(r);return s>0?n.toString("utf8",r+4,r+4+s-1):""},Ry=function(n,r){if(!Buffer.isBuffer(n))return Fy(n,r);var s=2*n.readUInt32LE(r);return n.toString("utf16le",r+4,r+4+s-1)},Oy=function(n,r){if(!Buffer.isBuffer(n))return Ny(n,r);var s=n.readUInt32LE(r);return n.toString("utf16le",r+4,r+4+s)},Ly=function(n,r){if(!Buffer.isBuffer(n))return My(n,r);var s=n.readUInt32LE(r);return n.toString("utf8",r+4,r+4+s)},Dc=function(n,r){return Buffer.isBuffer(n)?n.readDoubleLE(r):jy(n,r)},Iy=function(n){return Buffer.isBuffer(n)||Array.isArray(n)||typeof Uint8Array<"u"&&n instanceof Uint8Array});var Ui=function(e,n){return e[n]},pa=function(e,n){return e[n+1]*256+e[n]},i6=function(e,n){var r=e[n+1]*256+e[n];return r<32768?r:(65535-r+1)*-1},Zn=function(e,n){return e[n+3]*(1<<24)+(e[n+2]<<16)+(e[n+1]<<8)+e[n]},Bs=function(e,n){return e[n+3]<<24|e[n+2]<<16|e[n+1]<<8|e[n]},l6=function(e,n){return e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3]};function rl(e,n){var r="",s,i,c=[],f,u,h,x;switch(n){case"dbcs":if(x=this.l,ot&&Buffer.isBuffer(this))r=this.slice(this.l,this.l+2*e).toString("utf16le");else for(h=0;h<e;++h)r+=String.fromCharCode(pa(this,x)),x+=2;e*=2;break;case"utf8":r=Tl(this,this.l,this.l+e);break;case"utf16le":e*=2,r=kh(this,this.l,this.l+e);break;case"wstr":return rl.call(this,e,"dbcs");case"lpstr-ansi":r=ky(this,this.l),e=4+Zn(this,this.l);break;case"lpstr-cp":r=By(this,this.l),e=4+Zn(this,this.l);break;case"lpwstr":r=Ry(this,this.l),e=4+2*Zn(this,this.l);break;case"lpp4":e=4+Zn(this,this.l),r=Oy(this,this.l),e&2&&(e+=2);break;case"8lpp4":e=4+Zn(this,this.l),r=Ly(this,this.l),e&3&&(e+=4-(e&3));break;case"cstr":for(e=0,r="";(f=Ui(this,this.l+e++))!==0;)c.push(rc(f));r=c.join("");break;case"_wstr":for(e=0,r="";(f=pa(this,this.l+e))!==0;)c.push(rc(f)),e+=2;e+=2,r=c.join("");break;case"dbcs-cont":for(r="",x=this.l,h=0;h<e;++h){if(this.lens&&this.lens.indexOf(x)!==-1)return f=Ui(this,x),this.l=x+1,u=rl.call(this,e-h,f?"dbcs-cont":"sbcs-cont"),c.join("")+u;c.push(rc(pa(this,x))),x+=2}r=c.join(""),e*=2;break;case"cpstr":case"sbcs-cont":for(r="",x=this.l,h=0;h!=e;++h){if(this.lens&&this.lens.indexOf(x)!==-1)return f=Ui(this,x),this.l=x+1,u=rl.call(this,e-h,f?"dbcs-cont":"sbcs-cont"),c.join("")+u;c.push(rc(Ui(this,x))),x+=1}r=c.join("");break;default:switch(e){case 1:return s=Ui(this,this.l),this.l++,s;case 2:return s=(n==="i"?i6:pa)(this,this.l),this.l+=2,s;case 4:case-4:return n==="i"||(this[this.l+3]&128)===0?(s=(e>0?Bs:l6)(this,this.l),this.l+=4,s):(i=Zn(this,this.l),this.l+=4,i);case 8:case-8:if(n==="f")return e==8?i=Dc(this,this.l):i=Dc([this[this.l+7],this[this.l+6],this[this.l+5],this[this.l+4],this[this.l+3],this[this.l+2],this[this.l+1],this[this.l+0]],0),this.l+=8,i;e=8;case 16:r=Ay(this,this.l,e);break}}return this.l+=e,r}var o6=function(e,n,r){e[r]=n&255,e[r+1]=n>>>8&255,e[r+2]=n>>>16&255,e[r+3]=n>>>24&255},c6=function(e,n,r){e[r]=n&255,e[r+1]=n>>8&255,e[r+2]=n>>16&255,e[r+3]=n>>24&255},f6=function(e,n,r){e[r]=n&255,e[r+1]=n>>>8&255};function u6(e,n,r){var s=0,i=0;if(r==="dbcs"){for(i=0;i!=n.length;++i)f6(this,n.charCodeAt(i),this.l+2*i);s=2*n.length}else if(r==="sbcs"){for(n=n.replace(/[^\x00-\x7F]/g,"_"),i=0;i!=n.length;++i)this[this.l+i]=n.charCodeAt(i)&255;s=n.length}else if(r==="hex"){for(;i<e;++i)this[this.l++]=parseInt(n.slice(2*i,2*i+2),16)||0;return this}else if(r==="utf16le"){var c=Math.min(this.l+e,this.length);for(i=0;i<Math.min(n.length,e);++i){var f=n.charCodeAt(i);this[this.l++]=f&255,this[this.l++]=f>>8}for(;this.l<c;)this[this.l++]=0;return this}else switch(e){case 1:s=1,this[this.l]=n&255;break;case 2:s=2,this[this.l]=n&255,n>>>=8,this[this.l+1]=n&255;break;case 3:s=3,this[this.l]=n&255,n>>>=8,this[this.l+1]=n&255,n>>>=8,this[this.l+2]=n&255;break;case 4:s=4,o6(this,n,this.l);break;case 8:if(s=8,r==="f"){s6(this,n,this.l);break}case 16:break;case-4:s=4,c6(this,n,this.l);break}return this.l+=s,this}function Hy(e,n){var r=Ay(this,this.l,e.length>>1);if(r!==e)throw new Error(n+"Expected "+e+" saw "+r);this.l+=e.length>>1}function xn(e,n){e.l=n,e.read_shift=rl,e.chk=Hy,e.write_shift=u6}function En(e,n){e.l+=n}function en(e){var n=ns(e);return xn(n,0),n}function _a(e,n,r){if(e){var s,i,c;xn(e,e.l||0);for(var f=e.length,u=0,h=0;e.l<f;){u=e.read_shift(1),u&128&&(u=(u&127)+((e.read_shift(1)&127)<<7));var x=Mc[u]||Mc[65535];for(s=e.read_shift(1),c=s&127,i=1;i<4&&s&128;++i)c+=((s=e.read_shift(1))&127)<<7*i;h=e.l+c;var m=x.f&&x.f(e,c,r);if(e.l=h,n(m,x,u))return}}}function Od(){var e=[],n=ot?256:2048,r=function(x){var m=en(x);return xn(m,0),m},s=r(n),i=function(){s&&(s.length>s.l&&(s=s.slice(0,s.l),s.l=s.length),s.length>0&&e.push(s),s=null)},c=function(x){return s&&x<s.length-s.l?s:(i(),s=r(Math.max(x+1,n)))},f=function(){return i(),Qa(e)},u=function(x){i(),s=x,s.l==null&&(s.l=s.length),c(n)};return{next:c,push:u,end:f,_bufs:e}}function al(e,n,r){var s=pn(e);if(n.s?(s.cRel&&(s.c+=n.s.c),s.rRel&&(s.r+=n.s.r)):(s.cRel&&(s.c+=n.c),s.rRel&&(s.r+=n.r)),!r||r.biff<12){for(;s.c>=256;)s.c-=256;for(;s.r>=65536;)s.r-=65536}return s}function Mg(e,n,r){var s=pn(e);return s.s=al(s.s,n.s,r),s.e=al(s.e,n.s,r),s}function sl(e,n){if(e.cRel&&e.c<0)for(e=pn(e);e.c<0;)e.c+=n>8?16384:256;if(e.rRel&&e.r<0)for(e=pn(e);e.r<0;)e.r+=n>8?1048576:n>5?65536:16384;var r=Ke(e);return!e.cRel&&e.cRel!=null&&(r=x6(r)),!e.rRel&&e.rRel!=null&&(r=d6(r)),r}function yd(e,n){return e.s.r==0&&!e.s.rRel&&e.e.r==(n.biff>=12?1048575:n.biff>=8?65536:16384)&&!e.e.rRel?(e.s.cRel?"":"$")+nn(e.s.c)+":"+(e.e.cRel?"":"$")+nn(e.e.c):e.s.c==0&&!e.s.cRel&&e.e.c==(n.biff>=12?16383:255)&&!e.e.cRel?(e.s.rRel?"":"$")+mn(e.s.r)+":"+(e.e.rRel?"":"$")+mn(e.e.r):sl(e.s,n.biff)+":"+sl(e.e,n.biff)}function Dh(e){return parseInt(h6(e),10)-1}function mn(e){return""+(e+1)}function d6(e){return e.replace(/([A-Z]|^)(\d+)$/,"$1$$$2")}function h6(e){return e.replace(/\$(\d+)$/,"$1")}function Bh(e){for(var n=p6(e),r=0,s=0;s!==n.length;++s)r=26*r+n.charCodeAt(s)-64;return r-1}function nn(e){if(e<0)throw new Error("invalid column "+e);var n="";for(++e;e;e=Math.floor((e-1)/26))n=String.fromCharCode((e-1)%26+65)+n;return n}function x6(e){return e.replace(/^([A-Z])/,"$$$1")}function p6(e){return e.replace(/^\$([A-Z])/,"$1")}function m6(e){return e.replace(/(\$?[A-Z]*)(\$?\d*)/,"$1,$2").split(",")}function Bn(e){for(var n=0,r=0,s=0;s<e.length;++s){var i=e.charCodeAt(s);i>=48&&i<=57?n=10*n+(i-48):i>=65&&i<=90&&(r=26*r+(i-64))}return{c:r-1,r:n-1}}function Ke(e){for(var n=e.c+1,r="";n;n=(n-1)/26|0)r=String.fromCharCode((n-1)%26+65)+r;return r+(e.r+1)}function e0(e){var n=e.indexOf(":");return n==-1?{s:Bn(e),e:Bn(e)}:{s:Bn(e.slice(0,n)),e:Bn(e.slice(n+1))}}function ft(e,n){return typeof n>"u"||typeof n=="number"?ft(e.s,e.e):(typeof e!="string"&&(e=Ke(e)),typeof n!="string"&&(n=Ke(n)),e==n?e:e+":"+n)}function Ht(e){var n={s:{c:0,r:0},e:{c:0,r:0}},r=0,s=0,i=0,c=e.length;for(r=0;s<c&&!((i=e.charCodeAt(s)-64)<1||i>26);++s)r=26*r+i;for(n.s.c=--r,r=0;s<c&&!((i=e.charCodeAt(s)-48)<0||i>9);++s)r=10*r+i;if(n.s.r=--r,s===c||i!=10)return n.e.c=n.s.c,n.e.r=n.s.r,n;for(++s,r=0;s!=c&&!((i=e.charCodeAt(s)-64)<1||i>26);++s)r=26*r+i;for(n.e.c=--r,r=0;s!=c&&!((i=e.charCodeAt(s)-48)<0||i>9);++s)r=10*r+i;return n.e.r=--r,n}function Lg(e,n){var r=e.t=="d"&&n instanceof Date;if(e.z!=null)try{return e.w=Sr(e.z,r?Rn(n):n)}catch{}try{return e.w=Sr((e.XF||{}).numFmtId||(r?14:0),r?Rn(n):n)}catch{return""+n}}function Sa(e,n,r){return e==null||e.t==null||e.t=="z"?"":e.w!==void 0?e.w:(e.t=="d"&&!e.z&&r&&r.dateNF&&(e.z=r.dateNF),e.t=="e"?Js[e.v]||e.v:n==null?Lg(e,e.v):Lg(e,n))}function is(e,n){var r=n&&n.sheet?n.sheet:"Sheet1",s={};return s[r]=e,{SheetNames:[r],Sheets:s}}function zy(e,n,r){var s=r||{},i=e?Array.isArray(e):s.dense,c=e||(i?[]:{}),f=0,u=0;if(c&&s.origin!=null){if(typeof s.origin=="number")f=s.origin;else{var h=typeof s.origin=="string"?Bn(s.origin):s.origin;f=h.r,u=h.c}c["!ref"]||(c["!ref"]="A1:A1")}var x={s:{c:1e7,r:1e7},e:{c:0,r:0}};if(c["!ref"]){var m=Ht(c["!ref"]);x.s.c=m.s.c,x.s.r=m.s.r,x.e.c=Math.max(x.e.c,m.e.c),x.e.r=Math.max(x.e.r,m.e.r),f==-1&&(x.e.r=f=m.e.r+1)}for(var v=0;v!=n.length;++v)if(n[v]){if(!Array.isArray(n[v]))throw new Error("aoa_to_sheet expects an array of arrays");for(var y=0;y!=n[v].length;++y)if(!(typeof n[v][y]>"u")){var _={v:n[v][y]},E=f+v,b=u+y;if(x.s.r>E&&(x.s.r=E),x.s.c>b&&(x.s.c=b),x.e.r<E&&(x.e.r=E),x.e.c<b&&(x.e.c=b),n[v][y]&&typeof n[v][y]=="object"&&!Array.isArray(n[v][y])&&!(n[v][y]instanceof Date))_=n[v][y];else if(Array.isArray(_.v)&&(_.f=n[v][y][1],_.v=_.v[0]),_.v===null)if(_.f)_.t="n";else if(s.nullError)_.t="e",_.v=0;else if(s.sheetStubs)_.t="z";else continue;else typeof _.v=="number"?_.t="n":typeof _.v=="boolean"?_.t="b":_.v instanceof Date?(_.z=s.dateNF||Je[14],s.cellDates?(_.t="d",_.w=Sr(_.z,Rn(_.v))):(_.t="n",_.v=Rn(_.v),_.w=Sr(_.z,_.v))):_.t="s";if(i)c[E]||(c[E]=[]),c[E][b]&&c[E][b].z&&(_.z=c[E][b].z),c[E][b]=_;else{var C=Ke({c:b,r:E});c[C]&&c[C].z&&(_.z=c[C].z),c[C]=_}}}return x.s.c<1e7&&(c["!ref"]=ft(x)),c}function t0(e,n){return zy(null,e,n)}function g6(e){return e.read_shift(4,"i")}function Cn(e){var n=e.read_shift(4);return n===0?"":e.read_shift(n,"dbcs")}function v6(e){return{ich:e.read_shift(2),ifnt:e.read_shift(2)}}function Fh(e,n){var r=e.l,s=e.read_shift(1),i=Cn(e),c=[],f={t:i,h:i};if((s&1)!==0){for(var u=e.read_shift(4),h=0;h!=u;++h)c.push(v6(e));f.r=c}else f.r=[{ich:0,ifnt:0}];return e.l=r+n,f}var y6=Fh;function _r(e){var n=e.read_shift(4),r=e.read_shift(2);return r+=e.read_shift(1)<<16,e.l++,{c:n,iStyleRef:r}}function Ks(e){var n=e.read_shift(2);return n+=e.read_shift(1)<<16,e.l++,{c:-1,iStyleRef:n}}var b6=Cn;function Rh(e){var n=e.read_shift(4);return n===0||n===4294967295?"":e.read_shift(n,"dbcs")}var S6=Cn,Md=Rh;function Nh(e){var n=e.slice(e.l,e.l+4),r=n[0]&1,s=n[0]&2;e.l+=4;var i=s===0?Dc([0,0,0,0,n[0]&252,n[1],n[2],n[3]],0):Bs(n,0)>>2;return r?i/100:i}function Uy(e){var n={s:{},e:{}};return n.s.r=e.read_shift(4),n.e.r=e.read_shift(4),n.s.c=e.read_shift(4),n.e.c=e.read_shift(4),n}var Ys=Uy;function Sn(e){if(e.length-e.l<8)throw"XLS Xnum Buffer underflow";return e.read_shift(8,"f")}function _6(e){var n={},r=e.read_shift(1),s=r>>>1,i=e.read_shift(1),c=e.read_shift(2,"i"),f=e.read_shift(1),u=e.read_shift(1),h=e.read_shift(1);switch(e.l++,s){case 0:n.auto=1;break;case 1:n.index=i;var x=Os[i];x&&(n.rgb=_l(x));break;case 2:n.rgb=_l([f,u,h]);break;case 3:n.theme=i;break}return c!=0&&(n.tint=c>0?c/32767:c/32768),n}function C6(e){var n=e.read_shift(1);e.l++;var r={fBold:n&1,fItalic:n&2,fUnderline:n&4,fStrikeout:n&8,fOutline:n&16,fShadow:n&32,fCondense:n&64,fExtend:n&128};return r}function Wy(e,n){var r={2:"BITMAP",3:"METAFILEPICT",8:"DIB",14:"ENHMETAFILE"},s=e.read_shift(4);switch(s){case 0:return"";case 4294967295:case 4294967294:return r[e.read_shift(4)]||""}if(s>400)throw new Error("Unsupported Clipboard: "+s.toString(16));return e.l-=4,e.read_shift(0,n==1?"lpstr":"lpwstr")}function E6(e){return Wy(e,1)}function w6(e){return Wy(e,2)}var Oh=2,Un=3,sc=11,jg=12,Bc=19,ic=64,A6=65,T6=71,k6=4108,D6=4126,ln=80,Py=81,B6=[ln,Py],F6={1:{n:"CodePage",t:Oh},2:{n:"Category",t:ln},3:{n:"PresentationFormat",t:ln},4:{n:"ByteCount",t:Un},5:{n:"LineCount",t:Un},6:{n:"ParagraphCount",t:Un},7:{n:"SlideCount",t:Un},8:{n:"NoteCount",t:Un},9:{n:"HiddenCount",t:Un},10:{n:"MultimediaClipCount",t:Un},11:{n:"ScaleCrop",t:sc},12:{n:"HeadingPairs",t:k6},13:{n:"TitlesOfParts",t:D6},14:{n:"Manager",t:ln},15:{n:"Company",t:ln},16:{n:"LinksUpToDate",t:sc},17:{n:"CharacterCount",t:Un},19:{n:"SharedDoc",t:sc},22:{n:"HyperlinksChanged",t:sc},23:{n:"AppVersion",t:Un,p:"version"},24:{n:"DigSig",t:A6},26:{n:"ContentType",t:ln},27:{n:"ContentStatus",t:ln},28:{n:"Language",t:ln},29:{n:"Version",t:ln},255:{},2147483648:{n:"Locale",t:Bc},2147483651:{n:"Behavior",t:Bc},1919054434:{}},R6={1:{n:"CodePage",t:Oh},2:{n:"Title",t:ln},3:{n:"Subject",t:ln},4:{n:"Author",t:ln},5:{n:"Keywords",t:ln},6:{n:"Comments",t:ln},7:{n:"Template",t:ln},8:{n:"LastAuthor",t:ln},9:{n:"RevNumber",t:ln},10:{n:"EditTime",t:ic},11:{n:"LastPrinted",t:ic},12:{n:"CreatedDate",t:ic},13:{n:"ModifiedDate",t:ic},14:{n:"PageCount",t:Un},15:{n:"WordCount",t:Un},16:{n:"CharCount",t:Un},17:{n:"Thumbnail",t:T6},18:{n:"Application",t:ln},19:{n:"DocSecurity",t:Un},255:{},2147483648:{n:"Locale",t:Bc},2147483651:{n:"Behavior",t:Bc},1919054434:{}},Ig={1:"US",2:"CA",3:"",7:"RU",20:"EG",30:"GR",31:"NL",32:"BE",33:"FR",34:"ES",36:"HU",39:"IT",41:"CH",43:"AT",44:"GB",45:"DK",46:"SE",47:"NO",48:"PL",49:"DE",52:"MX",55:"BR",61:"AU",64:"NZ",66:"TH",81:"JP",82:"KR",84:"VN",86:"CN",90:"TR",105:"JS",213:"DZ",216:"MA",218:"LY",351:"PT",354:"IS",358:"FI",420:"CZ",886:"TW",961:"LB",962:"JO",963:"SY",964:"IQ",965:"KW",966:"SA",971:"AE",972:"IL",974:"QA",981:"IR",65535:"US"},N6=[null,"solid","mediumGray","darkGray","lightGray","darkHorizontal","darkVertical","darkDown","darkUp","darkGrid","darkTrellis","lightHorizontal","lightVertical","lightDown","lightUp","lightGrid","lightTrellis","gray125","gray0625"];function O6(e){return e.map(function(n){return[n>>16&255,n>>8&255,n&255]})}var M6=O6([0,16777215,16711680,65280,255,16776960,16711935,65535,0,16777215,16711680,65280,255,16776960,16711935,65535,8388608,32768,128,8421376,8388736,32896,12632256,8421504,10066431,10040166,16777164,13434879,6684774,16744576,26316,13421823,128,16711935,16776960,65535,8388736,8388608,32896,255,52479,13434879,13434828,16777113,10079487,16751052,13408767,16764057,3368703,3394764,10079232,16763904,16750848,16737792,6710937,9868950,13158,3381606,13056,3355392,10040064,10040166,3355545,3355443,16777215,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),Os=pn(M6),Js={0:"#NULL!",7:"#DIV/0!",15:"#VALUE!",23:"#REF!",29:"#NAME?",36:"#NUM!",42:"#N/A",43:"#GETTING_DATA",255:"#WTF?"},Xy={"#NULL!":0,"#DIV/0!":7,"#VALUE!":15,"#REF!":23,"#NAME?":29,"#NUM!":36,"#N/A":42,"#GETTING_DATA":43,"#WTF?":255},Hg={"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml":"workbooks","application/vnd.ms-excel.sheet.macroEnabled.main+xml":"workbooks","application/vnd.ms-excel.sheet.binary.macroEnabled.main":"workbooks","application/vnd.ms-excel.addin.macroEnabled.main+xml":"workbooks","application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml":"workbooks","application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml":"sheets","application/vnd.ms-excel.worksheet":"sheets","application/vnd.ms-excel.binIndexWs":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml":"charts","application/vnd.ms-excel.chartsheet":"charts","application/vnd.ms-excel.macrosheet+xml":"macros","application/vnd.ms-excel.macrosheet":"macros","application/vnd.ms-excel.intlmacrosheet":"TODO","application/vnd.ms-excel.binIndexMs":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml":"dialogs","application/vnd.ms-excel.dialogsheet":"dialogs","application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml":"strs","application/vnd.ms-excel.sharedStrings":"strs","application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml":"styles","application/vnd.ms-excel.styles":"styles","application/vnd.openxmlformats-package.core-properties+xml":"coreprops","application/vnd.openxmlformats-officedocument.custom-properties+xml":"custprops","application/vnd.openxmlformats-officedocument.extended-properties+xml":"extprops","application/vnd.openxmlformats-officedocument.customXmlProperties+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml":"comments","application/vnd.ms-excel.comments":"comments","application/vnd.ms-excel.threadedcomments+xml":"threadedcomments","application/vnd.ms-excel.person+xml":"people","application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml":"metadata","application/vnd.ms-excel.sheetMetadata":"metadata","application/vnd.ms-excel.pivotTable":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.chart+xml":"TODO","application/vnd.ms-office.chartcolorstyle+xml":"TODO","application/vnd.ms-office.chartstyle+xml":"TODO","application/vnd.ms-office.chartex+xml":"TODO","application/vnd.ms-excel.calcChain":"calcchains","application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml":"calcchains","application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings":"TODO","application/vnd.ms-office.activeX":"TODO","application/vnd.ms-office.activeX+xml":"TODO","application/vnd.ms-excel.attachedToolbars":"TODO","application/vnd.ms-excel.connections":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml":"TODO","application/vnd.ms-excel.externalLink":"links","application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml":"links","application/vnd.ms-excel.pivotCacheDefinition":"TODO","application/vnd.ms-excel.pivotCacheRecords":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml":"TODO","application/vnd.ms-excel.queryTable":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml":"TODO","application/vnd.ms-excel.userNames":"TODO","application/vnd.ms-excel.revisionHeaders":"TODO","application/vnd.ms-excel.revisionLog":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml":"TODO","application/vnd.ms-excel.tableSingleCells":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml":"TODO","application/vnd.ms-excel.slicer":"TODO","application/vnd.ms-excel.slicerCache":"TODO","application/vnd.ms-excel.slicer+xml":"TODO","application/vnd.ms-excel.slicerCache+xml":"TODO","application/vnd.ms-excel.wsSortMap":"TODO","application/vnd.ms-excel.table":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml":"TODO","application/vnd.openxmlformats-officedocument.theme+xml":"themes","application/vnd.openxmlformats-officedocument.themeOverride+xml":"TODO","application/vnd.ms-excel.Timeline+xml":"TODO","application/vnd.ms-excel.TimelineCache+xml":"TODO","application/vnd.ms-office.vbaProject":"vba","application/vnd.ms-office.vbaProjectSignature":"TODO","application/vnd.ms-office.volatileDependencies":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml":"TODO","application/vnd.ms-excel.controlproperties+xml":"TODO","application/vnd.openxmlformats-officedocument.model+data":"TODO","application/vnd.ms-excel.Survey+xml":"TODO","application/vnd.openxmlformats-officedocument.drawing+xml":"drawings","application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml":"TODO","application/vnd.openxmlformats-officedocument.vmlDrawing":"TODO","application/vnd.openxmlformats-package.relationships+xml":"rels","application/vnd.openxmlformats-officedocument.oleObject":"TODO","image/png":"TODO",sheet:"js"};function L6(){return{workbooks:[],sheets:[],charts:[],dialogs:[],macros:[],rels:[],strs:[],comments:[],threadedcomments:[],links:[],coreprops:[],extprops:[],custprops:[],themes:[],styles:[],calcchains:[],vba:[],drawings:[],metadata:[],people:[],TODO:[],xmlns:""}}function j6(e){var n=L6();if(!e||!e.match)return n;var r={};if((e.match(wn)||[]).forEach(function(s){var i=Ge(s);switch(i[0].replace(GA,"<")){case"<?xml":break;case"<Types":n.xmlns=i["xmlns"+(i[0].match(/<(\w+):/)||["",""])[1]];break;case"<Default":r[i.Extension]=i.ContentType;break;case"<Override":n[Hg[i.ContentType]]!==void 0&&n[Hg[i.ContentType]].push(i.PartName);break}}),n.xmlns!==n6.CT)throw new Error("Unknown Namespace: "+n.xmlns);return n.calcchain=n.calcchains.length>0?n.calcchains[0]:"",n.sst=n.strs.length>0?n.strs[0]:"",n.style=n.styles.length>0?n.styles[0]:"",n.defaults=r,delete n.calcchains,n}var Pi={WB:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",SHEET:"http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument",HLINK:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",VML:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing",XPATH:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath",XMISS:"http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing",XLINK:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLink",CXML:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXml",CXMLP:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXmlProps",CMNT:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments",CORE_PROPS:"http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties",EXT_PROPS:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties",CUST_PROPS:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties",SST:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings",STY:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles",THEME:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme",CHART:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart",CHARTEX:"http://schemas.microsoft.com/office/2014/relationships/chartEx",CS:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet",WS:["http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet","http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet"],DS:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet",MS:"http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet",IMG:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",DRAW:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing",XLMETA:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata",TCMNT:"http://schemas.microsoft.com/office/2017/10/relationships/threadedComment",PEOPLE:"http://schemas.microsoft.com/office/2017/10/relationships/person",VBA:"http://schemas.microsoft.com/office/2006/relationships/vbaProject"};function Ld(e){var n=e.lastIndexOf("/");return e.slice(0,n+1)+"_rels/"+e.slice(n+1)+".rels"}function il(e,n){var r={"!id":{}};if(!e)return r;n.charAt(0)!=="/"&&(n="/"+n);var s={};return(e.match(wn)||[]).forEach(function(i){var c=Ge(i);if(c[0]==="<Relationship"){var f={};f.Type=c.Type,f.Target=c.Target,f.Id=c.Id,c.TargetMode&&(f.TargetMode=c.TargetMode);var u=c.TargetMode==="External"?c.Target:Q0(c.Target,n);r[u]=f,s[c.Id]=f}}),r["!id"]=s,r}var I6="application/vnd.oasis.opendocument.spreadsheet";function H6(e,n){for(var r=Th(e),s,i;s=bl.exec(r);)switch(s[3]){case"manifest":break;case"file-entry":if(i=Ge(s[0],!1),i.path=="/"&&i.type!==I6)throw new Error("This OpenDocument is not a spreadsheet");break;case"encryption-data":case"algorithm":case"start-key-generation":case"key-derivation":throw new Error("Unsupported ODS Encryption");default:if(n&&n.WTF)throw s}}var ll=[["cp:category","Category"],["cp:contentStatus","ContentStatus"],["cp:keywords","Keywords"],["cp:lastModifiedBy","LastAuthor"],["cp:lastPrinted","LastPrinted"],["cp:revision","RevNumber"],["cp:version","Version"],["dc:creator","Author"],["dc:description","Comments"],["dc:identifier","Identifier"],["dc:language","Language"],["dc:subject","Subject"],["dc:title","Title"],["dcterms:created","CreatedDate","date"],["dcterms:modified","ModifiedDate","date"]],z6=(function(){for(var e=new Array(ll.length),n=0;n<ll.length;++n){var r=ll[n],s="(?:"+r[0].slice(0,r[0].indexOf(":"))+":)"+r[0].slice(r[0].indexOf(":")+1);e[n]=new RegExp("<"+s+"[^>]*>([\\s\\S]*?)</"+s+">")}return e})();function Gy(e){var n={};e=At(e);for(var r=0;r<ll.length;++r){var s=ll[r],i=e.match(z6[r]);i!=null&&i.length>0&&(n[s[1]]=dt(i[1])),s[2]==="date"&&n[s[1]]&&(n[s[1]]=on(n[s[1]]))}return n}var U6=[["Application","Application","string"],["AppVersion","AppVersion","string"],["Company","Company","string"],["DocSecurity","DocSecurity","string"],["Manager","Manager","string"],["HyperlinksChanged","HyperlinksChanged","bool"],["SharedDoc","SharedDoc","bool"],["LinksUpToDate","LinksUpToDate","bool"],["ScaleCrop","ScaleCrop","bool"],["HeadingPairs","HeadingPairs","raw"],["TitlesOfParts","TitlesOfParts","raw"]];function qy(e,n,r,s){var i=[];if(typeof e=="string")i=Dg(e,s);else for(var c=0;c<e.length;++c)i=i.concat(e[c].map(function(m){return{v:m}}));var f=typeof n=="string"?Dg(n,s).map(function(m){return m.v}):n,u=0,h=0;if(f.length>0)for(var x=0;x!==i.length;x+=2){switch(h=+i[x+1].v,i[x].v){case"Worksheets":case"工作表":case"Листы":case"أوراق العمل":case"ワークシート":case"גליונות עבודה":case"Arbeitsblätter":case"Çalışma Sayfaları":case"Feuilles de calcul":case"Fogli di lavoro":case"Folhas de cálculo":case"Planilhas":case"Regneark":case"Hojas de cálculo":case"Werkbladen":r.Worksheets=h,r.SheetNames=f.slice(u,u+h);break;case"Named Ranges":case"Rangos con nombre":case"名前付き一覧":case"Benannte Bereiche":case"Navngivne områder":r.NamedRanges=h,r.DefinedNames=f.slice(u,u+h);break;case"Charts":case"Diagramme":r.Chartsheets=h,r.ChartNames=f.slice(u,u+h);break}u+=h}}function W6(e,n,r){var s={};return n||(n={}),e=At(e),U6.forEach(function(i){var c=(e.match(yl(i[0]))||[])[1];switch(i[2]){case"string":c&&(n[i[1]]=dt(c));break;case"bool":n[i[1]]=c==="true";break;case"raw":var f=e.match(new RegExp("<"+i[0]+"[^>]*>([\\s\\S]*?)</"+i[0]+">"));f&&f.length>0&&(s[i[1]]=f[1]);break}}),s.HeadingPairs&&s.TitlesOfParts&&qy(s.HeadingPairs,s.TitlesOfParts,n,r),n}var P6=/<[^>]+>[^<]*/g;function X6(e,n){var r={},s="",i=e.match(P6);if(i)for(var c=0;c!=i.length;++c){var f=i[c],u=Ge(f);switch(u[0]){case"<?xml":break;case"<Properties":break;case"<property":s=dt(u.name);break;case"</property>":s=null;break;default:if(f.indexOf("<vt:")===0){var h=f.split(">"),x=h[0].slice(4),m=h[1];switch(x){case"lpstr":case"bstr":case"lpwstr":r[s]=dt(m);break;case"bool":r[s]=Rt(m);break;case"i1":case"i2":case"i4":case"i8":case"int":case"uint":r[s]=parseInt(m,10);break;case"r4":case"r8":case"decimal":r[s]=parseFloat(m);break;case"filetime":case"date":r[s]=on(m);break;case"cy":case"error":r[s]=dt(m);break;default:if(x.slice(-1)=="/")break;n.WTF&&typeof console<"u"&&console.warn("Unexpected",f,x,h)}}else if(f.slice(0,2)!=="</"){if(n.WTF)throw new Error(f)}}}return r}var G6={Title:"Title",Subject:"Subject",Author:"Author",Keywords:"Keywords",Comments:"Description",LastAuthor:"LastAuthor",RevNumber:"Revision",Application:"AppName",LastPrinted:"LastPrinted",CreatedDate:"Created",ModifiedDate:"LastSaved",Category:"Category",Manager:"Manager",Company:"Company",AppVersion:"Version",ContentStatus:"ContentStatus",Identifier:"Identifier",Language:"Language"},bd;function q6(e,n,r){bd||(bd=Eh(G6)),n=bd[n]||n,e[n]=r}function Mh(e){var n=e.read_shift(4),r=e.read_shift(4);return new Date((r/1e7*Math.pow(2,32)+n/1e7-11644473600)*1e3).toISOString().replace(/\.000/,"")}function Vy(e,n,r){var s=e.l,i=e.read_shift(0,"lpstr-cp");if(r)for(;e.l-s&3;)++e.l;return i}function Ky(e,n,r){var s=e.read_shift(0,"lpwstr");return s}function Yy(e,n,r){return n===31?Ky(e):Vy(e,n,r)}function jd(e,n,r){return Yy(e,n,r===!1?0:4)}function V6(e,n){if(!n)throw new Error("VtUnalignedString must have positive length");return Yy(e,n,0)}function K6(e){for(var n=e.read_shift(4),r=[],s=0;s!=n;++s){var i=e.l;r[s]=e.read_shift(0,"lpwstr").replace(Fn,""),e.l-i&2&&(e.l+=2)}return r}function Y6(e){for(var n=e.read_shift(4),r=[],s=0;s!=n;++s)r[s]=e.read_shift(0,"lpstr-cp").replace(Fn,"");return r}function J6(e){var n=e.l,r=Fc(e,Py);e[e.l]==0&&e[e.l+1]==0&&e.l-n&2&&(e.l+=2);var s=Fc(e,Un);return[r,s]}function Q6(e){for(var n=e.read_shift(4),r=[],s=0;s<n/2;++s)r.push(J6(e));return r}function zg(e,n){for(var r=e.read_shift(4),s={},i=0;i!=r;++i){var c=e.read_shift(4),f=e.read_shift(4);s[c]=e.read_shift(f,n===1200?"utf16le":"utf8").replace(Fn,"").replace(J0,"!"),n===1200&&f%2&&(e.l+=2)}return e.l&3&&(e.l=e.l>>3<<2),s}function Jy(e){var n=e.read_shift(4),r=e.slice(e.l,e.l+n);return e.l+=n,(n&3)>0&&(e.l+=4-(n&3)&3),r}function Z6(e){var n={};return n.Size=e.read_shift(4),e.l+=n.Size+3-(n.Size-1)%4,n}function Fc(e,n,r){var s=e.read_shift(2),i,c=r||{};if(e.l+=2,n!==jg&&s!==n&&B6.indexOf(n)===-1&&!((n&65534)==4126&&(s&65534)==4126))throw new Error("Expected type "+n+" saw "+s);switch(n===jg?s:n){case 2:return i=e.read_shift(2,"i"),c.raw||(e.l+=2),i;case 3:return i=e.read_shift(4,"i"),i;case 11:return e.read_shift(4)!==0;case 19:return i=e.read_shift(4),i;case 30:return Vy(e,s,4).replace(Fn,"");case 31:return Ky(e);case 64:return Mh(e);case 65:return Jy(e);case 71:return Z6(e);case 80:return jd(e,s,!c.raw).replace(Fn,"");case 81:return V6(e,s).replace(Fn,"");case 4108:return Q6(e);case 4126:case 4127:return s==4127?K6(e):Y6(e);default:throw new Error("TypedPropertyValue unrecognized type "+n+" "+s)}}function Ug(e,n){var r=e.l,s=e.read_shift(4),i=e.read_shift(4),c=[],f=0,u=0,h=-1,x={};for(f=0;f!=i;++f){var m=e.read_shift(4),v=e.read_shift(4);c[f]=[m,v+r]}c.sort(function(k,w){return k[1]-w[1]});var y={};for(f=0;f!=i;++f){if(e.l!==c[f][1]){var _=!0;if(f>0&&n)switch(n[c[f-1][0]].t){case 2:e.l+2===c[f][1]&&(e.l+=2,_=!1);break;case 80:e.l<=c[f][1]&&(e.l=c[f][1],_=!1);break;case 4108:e.l<=c[f][1]&&(e.l=c[f][1],_=!1);break}if((!n||f==0)&&e.l<=c[f][1]&&(_=!1,e.l=c[f][1]),_)throw new Error("Read Error: Expected address "+c[f][1]+" at "+e.l+" :"+f)}if(n){var E=n[c[f][0]];if(y[E.n]=Fc(e,E.t,{raw:!0}),E.p==="version"&&(y[E.n]=String(y[E.n]>>16)+"."+("0000"+String(y[E.n]&65535)).slice(-4)),E.n=="CodePage")switch(y[E.n]){case 0:y[E.n]=1252;case 874:case 932:case 936:case 949:case 950:case 1250:case 1251:case 1253:case 1254:case 1255:case 1256:case 1257:case 1258:case 1e4:case 1200:case 1201:case 1252:case 65e3:case-536:case 65001:case-535:Rr(u=y[E.n]>>>0&65535);break;default:throw new Error("Unsupported CodePage: "+y[E.n])}}else if(c[f][0]===1){if(u=y.CodePage=Fc(e,Oh),Rr(u),h!==-1){var b=e.l;e.l=c[h][1],x=zg(e,u),e.l=b}}else if(c[f][0]===0){if(u===0){h=f,e.l=c[f+1][1];continue}x=zg(e,u)}else{var C=x[c[f][0]],D;switch(e[e.l]){case 65:e.l+=4,D=Jy(e);break;case 30:e.l+=4,D=jd(e,e[e.l-4]).replace(/\u0000+$/,"");break;case 31:e.l+=4,D=jd(e,e[e.l-4]).replace(/\u0000+$/,"");break;case 3:e.l+=4,D=e.read_shift(4,"i");break;case 19:e.l+=4,D=e.read_shift(4);break;case 5:e.l+=4,D=e.read_shift(8,"f");break;case 11:e.l+=4,D=Pt(e,4);break;case 64:e.l+=4,D=on(Mh(e));break;default:throw new Error("unparsed value: "+e[e.l])}y[C]=D}}return e.l=r+s,y}function Wg(e,n,r){var s=e.content;if(!s)return{};xn(s,0);var i,c,f,u,h=0;s.chk("feff","Byte Order: "),s.read_shift(2);var x=s.read_shift(4),m=s.read_shift(16);if(m!==ct.utils.consts.HEADER_CLSID&&m!==r)throw new Error("Bad PropertySet CLSID "+m);if(i=s.read_shift(4),i!==1&&i!==2)throw new Error("Unrecognized #Sets: "+i);if(c=s.read_shift(16),u=s.read_shift(4),i===1&&u!==s.l)throw new Error("Length mismatch: "+u+" !== "+s.l);i===2&&(f=s.read_shift(16),h=s.read_shift(4));var v=Ug(s,n),y={SystemIdentifier:x};for(var _ in v)y[_]=v[_];if(y.FMTID=c,i===1)return y;if(h-s.l==2&&(s.l+=2),s.l!==h)throw new Error("Length mismatch 2: "+s.l+" !== "+h);var E;try{E=Ug(s,null)}catch{}for(_ in E)y[_]=E[_];return y.FMTID=[c,f],y}function Ya(e,n){return e.read_shift(n),null}function $6(e,n,r){for(var s=[],i=e.l+n;e.l<i;)s.push(r(e,i-e.l));if(i!==e.l)throw new Error("Slurp error");return s}function Pt(e,n){return e.read_shift(n)===1}function Qt(e){return e.read_shift(2,"u")}function Qy(e,n){return $6(e,n,Qt)}function eT(e){var n=e.read_shift(1),r=e.read_shift(1);return r===1?n:n===1}function kl(e,n,r){var s=e.read_shift(r&&r.biff>=12?2:1),i="sbcs-cont";if(r&&r.biff>=8,!r||r.biff==8){var c=e.read_shift(1);c&&(i="dbcs-cont")}else r.biff==12&&(i="wstr");r.biff>=2&&r.biff<=5&&(i="cpstr");var f=s?e.read_shift(s,i):"";return f}function tT(e){var n=e.read_shift(2),r=e.read_shift(1),s=r&4,i=r&8,c=1+(r&1),f=0,u,h={};i&&(f=e.read_shift(2)),s&&(u=e.read_shift(4));var x=c==2?"dbcs-cont":"sbcs-cont",m=n===0?"":e.read_shift(n,x);return i&&(e.l+=4*f),s&&(e.l+=u),h.t=m,i||(h.raw="<t>"+h.t+"</t>",h.r=h.t),h}function Us(e,n,r){var s;if(r){if(r.biff>=2&&r.biff<=5)return e.read_shift(n,"cpstr");if(r.biff>=12)return e.read_shift(n,"dbcs-cont")}var i=e.read_shift(1);return i===0?s=e.read_shift(n,"sbcs-cont"):s=e.read_shift(n,"dbcs-cont"),s}function Dl(e,n,r){var s=e.read_shift(r&&r.biff==2?1:2);return s===0?(e.l++,""):Us(e,s,r)}function Qs(e,n,r){if(r.biff>5)return Dl(e,n,r);var s=e.read_shift(1);return s===0?(e.l++,""):e.read_shift(s,r.biff<=4||!e.lens?"cpstr":"sbcs-cont")}function nT(e){var n=e.read_shift(1);e.l++;var r=e.read_shift(2);return e.l+=2,[n,r]}function rT(e){var n=e.read_shift(4),r=e.l,s=!1;n>24&&(e.l+=n-24,e.read_shift(16)==="795881f43b1d7f48af2c825dc4852763"&&(s=!0),e.l=r);var i=e.read_shift((s?n-24:n)>>1,"utf16le").replace(Fn,"");return s&&(e.l+=24),i}function aT(e){for(var n=e.read_shift(2),r="";n-- >0;)r+="../";var s=e.read_shift(0,"lpstr-ansi");if(e.l+=2,e.read_shift(2)!=57005)throw new Error("Bad FileMoniker");var i=e.read_shift(4);if(i===0)return r+s.replace(/\\/g,"/");var c=e.read_shift(4);if(e.read_shift(2)!=3)throw new Error("Bad FileMoniker");var f=e.read_shift(c>>1,"utf16le").replace(Fn,"");return r+f}function sT(e,n){var r=e.read_shift(16);switch(r){case"e0c9ea79f9bace118c8200aa004ba90b":return rT(e);case"0303000000000000c000000000000046":return aT(e);default:throw new Error("Unsupported Moniker "+r)}}function lc(e){var n=e.read_shift(4),r=n>0?e.read_shift(n,"utf16le").replace(Fn,""):"";return r}function iT(e,n){var r=e.l+n,s=e.read_shift(4);if(s!==2)throw new Error("Unrecognized streamVersion: "+s);var i=e.read_shift(2);e.l+=2;var c,f,u,h,x="",m,v;i&16&&(c=lc(e,r-e.l)),i&128&&(f=lc(e,r-e.l)),(i&257)===257&&(u=lc(e,r-e.l)),(i&257)===1&&(h=sT(e,r-e.l)),i&8&&(x=lc(e,r-e.l)),i&32&&(m=e.read_shift(16)),i&64&&(v=Mh(e)),e.l=r;var y=f||u||h||"";y&&x&&(y+="#"+x),y||(y="#"+x),i&2&&y.charAt(0)=="/"&&y.charAt(1)!="/"&&(y="file://"+y);var _={Target:y};return m&&(_.guid=m),v&&(_.time=v),c&&(_.Tooltip=c),_}function Zy(e){var n=e.read_shift(1),r=e.read_shift(1),s=e.read_shift(1),i=e.read_shift(1);return[n,r,s,i]}function $y(e,n){var r=Zy(e);return r[3]=0,r}function Kr(e){var n=e.read_shift(2),r=e.read_shift(2),s=e.read_shift(2);return{r:n,c:r,ixfe:s}}function lT(e){var n=e.read_shift(2),r=e.read_shift(2);return e.l+=8,{type:n,flags:r}}function oT(e,n,r){return n===0?"":Qs(e,n,r)}function cT(e,n,r){var s=r.biff>8?4:2,i=e.read_shift(s),c=e.read_shift(s,"i"),f=e.read_shift(s,"i");return[i,c,f]}function eb(e){var n=e.read_shift(2),r=Nh(e);return[n,r]}function fT(e,n,r){e.l+=4,n-=4;var s=e.l+n,i=kl(e,n,r),c=e.read_shift(2);if(s-=e.l,c!==s)throw new Error("Malformed AddinUdf: padding = "+s+" != "+c);return e.l+=c,i}function Gc(e){var n=e.read_shift(2),r=e.read_shift(2),s=e.read_shift(2),i=e.read_shift(2);return{s:{c:s,r:n},e:{c:i,r}}}function tb(e){var n=e.read_shift(2),r=e.read_shift(2),s=e.read_shift(1),i=e.read_shift(1);return{s:{c:s,r:n},e:{c:i,r}}}var uT=tb;function nb(e){e.l+=4;var n=e.read_shift(2),r=e.read_shift(2),s=e.read_shift(2);return e.l+=12,[r,n,s]}function dT(e){var n={};return e.l+=4,e.l+=16,n.fSharedNote=e.read_shift(2),e.l+=4,n}function hT(e){var n={};return e.l+=4,e.cf=e.read_shift(2),n}function vn(e){e.l+=2,e.l+=e.read_shift(2)}var xT={0:vn,4:vn,5:vn,6:vn,7:hT,8:vn,9:vn,10:vn,11:vn,12:vn,13:dT,14:vn,15:vn,16:vn,17:vn,18:vn,19:vn,20:vn,21:nb};function pT(e,n){for(var r=e.l+n,s=[];e.l<r;){var i=e.read_shift(2);e.l-=2;try{s.push(xT[i](e,r-e.l))}catch{return e.l=r,s}}return e.l!=r&&(e.l=r),s}function oc(e,n){var r={BIFFVer:0,dt:0};switch(r.BIFFVer=e.read_shift(2),n-=2,n>=2&&(r.dt=e.read_shift(2),e.l-=2),r.BIFFVer){case 1536:case 1280:case 1024:case 768:case 512:case 2:case 7:break;default:if(n>6)throw new Error("Unexpected BIFF Ver "+r.BIFFVer)}return e.read_shift(n),r}function mT(e,n){return n===0||e.read_shift(2),1200}function gT(e,n,r){if(r.enc)return e.l+=n,"";var s=e.l,i=Qs(e,0,r);return e.read_shift(n+s-e.l),i}function vT(e,n,r){var s=r&&r.biff==8||n==2?e.read_shift(2):(e.l+=n,0);return{fDialog:s&16,fBelow:s&64,fRight:s&128}}function yT(e,n,r){var s=e.read_shift(4),i=e.read_shift(1)&3,c=e.read_shift(1);switch(c){case 0:c="Worksheet";break;case 1:c="Macrosheet";break;case 2:c="Chartsheet";break;case 6:c="VBAModule";break}var f=kl(e,0,r);return f.length===0&&(f="Sheet1"),{pos:s,hs:i,dt:c,name:f}}function bT(e,n){for(var r=e.l+n,s=e.read_shift(4),i=e.read_shift(4),c=[],f=0;f!=i&&e.l<r;++f)c.push(tT(e));return c.Count=s,c.Unique=i,c}function ST(e,n){var r={};return r.dsst=e.read_shift(2),e.l+=n-2,r}function _T(e){var n={};n.r=e.read_shift(2),n.c=e.read_shift(2),n.cnt=e.read_shift(2)-n.c;var r=e.read_shift(2);e.l+=4;var s=e.read_shift(1);return e.l+=3,s&7&&(n.level=s&7),s&32&&(n.hidden=!0),s&64&&(n.hpt=r/20),n}function CT(e){var n=lT(e);if(n.type!=2211)throw new Error("Invalid Future Record "+n.type);var r=e.read_shift(4);return r!==0}function ET(e){return e.read_shift(2),e.read_shift(4)}function Pg(e,n,r){var s=0;r&&r.biff==2||(s=e.read_shift(2));var i=e.read_shift(2);r&&r.biff==2&&(s=1-(i>>15),i&=32767);var c={Unsynced:s&1,DyZero:(s&2)>>1,ExAsc:(s&4)>>2,ExDsc:(s&8)>>3};return[c,i]}function wT(e){var n=e.read_shift(2),r=e.read_shift(2),s=e.read_shift(2),i=e.read_shift(2),c=e.read_shift(2),f=e.read_shift(2),u=e.read_shift(2),h=e.read_shift(2),x=e.read_shift(2);return{Pos:[n,r],Dim:[s,i],Flags:c,CurTab:f,FirstTab:u,Selected:h,TabRatio:x}}function AT(e,n,r){if(r&&r.biff>=2&&r.biff<5)return{};var s=e.read_shift(2);return{RTL:s&64}}function TT(){}function kT(e,n,r){var s={dyHeight:e.read_shift(2),fl:e.read_shift(2)};switch(r&&r.biff||8){case 2:break;case 3:case 4:e.l+=2;break;default:e.l+=10;break}return s.name=kl(e,0,r),s}function DT(e){var n=Kr(e);return n.isst=e.read_shift(4),n}function BT(e,n,r){r.biffguess&&r.biff==2&&(r.biff=5);var s=e.l+n,i=Kr(e);r.biff==2&&e.l++;var c=Dl(e,s-e.l,r);return i.val=c,i}function FT(e,n,r){var s=e.read_shift(2),i=Qs(e,0,r);return[s,i]}var RT=Qs;function Xg(e,n,r){var s=e.l+n,i=r.biff==8||!r.biff?4:2,c=e.read_shift(i),f=e.read_shift(i),u=e.read_shift(2),h=e.read_shift(2);return e.l=s,{s:{r:c,c:u},e:{r:f,c:h}}}function NT(e){var n=e.read_shift(2),r=e.read_shift(2),s=eb(e);return{r:n,c:r,ixfe:s[0],rknum:s[1]}}function OT(e,n){for(var r=e.l+n-2,s=e.read_shift(2),i=e.read_shift(2),c=[];e.l<r;)c.push(eb(e));if(e.l!==r)throw new Error("MulRK read error");var f=e.read_shift(2);if(c.length!=f-i+1)throw new Error("MulRK length mismatch");return{r:s,c:i,C:f,rkrec:c}}function MT(e,n){for(var r=e.l+n-2,s=e.read_shift(2),i=e.read_shift(2),c=[];e.l<r;)c.push(e.read_shift(2));if(e.l!==r)throw new Error("MulBlank read error");var f=e.read_shift(2);if(c.length!=f-i+1)throw new Error("MulBlank length mismatch");return{r:s,c:i,C:f,ixfe:c}}function LT(e,n,r,s){var i={},c=e.read_shift(4),f=e.read_shift(4),u=e.read_shift(4),h=e.read_shift(2);return i.patternType=N6[u>>26],s.cellStyles&&(i.alc=c&7,i.fWrap=c>>3&1,i.alcV=c>>4&7,i.fJustLast=c>>7&1,i.trot=c>>8&255,i.cIndent=c>>16&15,i.fShrinkToFit=c>>20&1,i.iReadOrder=c>>22&2,i.fAtrNum=c>>26&1,i.fAtrFnt=c>>27&1,i.fAtrAlc=c>>28&1,i.fAtrBdr=c>>29&1,i.fAtrPat=c>>30&1,i.fAtrProt=c>>31&1,i.dgLeft=f&15,i.dgRight=f>>4&15,i.dgTop=f>>8&15,i.dgBottom=f>>12&15,i.icvLeft=f>>16&127,i.icvRight=f>>23&127,i.grbitDiag=f>>30&3,i.icvTop=u&127,i.icvBottom=u>>7&127,i.icvDiag=u>>14&127,i.dgDiag=u>>21&15,i.icvFore=h&127,i.icvBack=h>>7&127,i.fsxButton=h>>14&1),i}function jT(e,n,r){var s={};return s.ifnt=e.read_shift(2),s.numFmtId=e.read_shift(2),s.flags=e.read_shift(2),s.fStyle=s.flags>>2&1,n-=6,s.data=LT(e,n,s.fStyle,r),s}function IT(e){e.l+=4;var n=[e.read_shift(2),e.read_shift(2)];if(n[0]!==0&&n[0]--,n[1]!==0&&n[1]--,n[0]>7||n[1]>7)throw new Error("Bad Gutters: "+n.join("|"));return n}function Gg(e,n,r){var s=Kr(e);(r.biff==2||n==9)&&++e.l;var i=eT(e);return s.val=i,s.t=i===!0||i===!1?"b":"e",s}function HT(e,n,r){r.biffguess&&r.biff==2&&(r.biff=5);var s=Kr(e),i=Sn(e);return s.val=i,s}var qg=oT;function zT(e,n,r){var s=e.l+n,i=e.read_shift(2),c=e.read_shift(2);if(r.sbcch=c,c==1025||c==14849)return[c,i];if(c<1||c>255)throw new Error("Unexpected SupBook type: "+c);for(var f=Us(e,c),u=[];s>e.l;)u.push(Dl(e));return[c,i,f,u]}function Vg(e,n,r){var s=e.read_shift(2),i,c={fBuiltIn:s&1,fWantAdvise:s>>>1&1,fWantPict:s>>>2&1,fOle:s>>>3&1,fOleLink:s>>>4&1,cf:s>>>5&1023,fIcon:s>>>15&1};return r.sbcch===14849&&(i=fT(e,n-2,r)),c.body=i||e.read_shift(n-2),typeof i=="string"&&(c.Name=i),c}var UT=["_xlnm.Consolidate_Area","_xlnm.Auto_Open","_xlnm.Auto_Close","_xlnm.Extract","_xlnm.Database","_xlnm.Criteria","_xlnm.Print_Area","_xlnm.Print_Titles","_xlnm.Recorder","_xlnm.Data_Form","_xlnm.Auto_Activate","_xlnm.Auto_Deactivate","_xlnm.Sheet_Title","_xlnm._FilterDatabase"];function Kg(e,n,r){var s=e.l+n,i=e.read_shift(2),c=e.read_shift(1),f=e.read_shift(1),u=e.read_shift(r&&r.biff==2?1:2),h=0;(!r||r.biff>=5)&&(r.biff!=5&&(e.l+=2),h=e.read_shift(2),r.biff==5&&(e.l+=2),e.l+=4);var x=Us(e,f,r);i&32&&(x=UT[x.charCodeAt(0)]);var m=s-e.l;r&&r.biff==2&&--m;var v=s==e.l||u===0||!(m>0)?[]:_B(e,m,r,u);return{chKey:c,Name:x,itab:h,rgce:v}}function rb(e,n,r){if(r.biff<8)return WT(e,n,r);for(var s=[],i=e.l+n,c=e.read_shift(r.biff>8?4:2);c--!==0;)s.push(cT(e,r.biff>8?12:6,r));if(e.l!=i)throw new Error("Bad ExternSheet: "+e.l+" != "+i);return s}function WT(e,n,r){e[e.l+1]==3&&e[e.l]++;var s=kl(e,n,r);return s.charCodeAt(0)==3?s.slice(1):s}function PT(e,n,r){if(r.biff<8){e.l+=n;return}var s=e.read_shift(2),i=e.read_shift(2),c=Us(e,s,r),f=Us(e,i,r);return[c,f]}function XT(e,n,r){var s=tb(e);e.l++;var i=e.read_shift(1);return n-=8,[CB(e,n,r),i,s]}function Yg(e,n,r){var s=uT(e);switch(r.biff){case 2:e.l++,n-=7;break;case 3:case 4:e.l+=2,n-=8;break;default:e.l+=6,n-=12}return[s,bB(e,n,r)]}function GT(e){var n=e.read_shift(4)!==0,r=e.read_shift(4)!==0,s=e.read_shift(4);return[n,r,s]}function qT(e,n,r){if(!(r.biff<8)){var s=e.read_shift(2),i=e.read_shift(2),c=e.read_shift(2),f=e.read_shift(2),u=Qs(e,0,r);return r.biff<8&&e.read_shift(1),[{r:s,c:i},u,f,c]}}function VT(e,n,r){return qT(e,n,r)}function KT(e,n){for(var r=[],s=e.read_shift(2);s--;)r.push(Gc(e));return r}function YT(e,n,r){if(r&&r.biff<8)return QT(e,n,r);var s=nb(e),i=pT(e,n-22,s[1]);return{cmo:s,ft:i}}var JT={8:function(e,n){var r=e.l+n;e.l+=10;var s=e.read_shift(2);e.l+=4,e.l+=2,e.l+=2,e.l+=2,e.l+=4;var i=e.read_shift(1);return e.l+=i,e.l=r,{fmt:s}}};function QT(e,n,r){e.l+=4;var s=e.read_shift(2),i=e.read_shift(2),c=e.read_shift(2);e.l+=2,e.l+=2,e.l+=2,e.l+=2,e.l+=2,e.l+=2,e.l+=2,e.l+=2,e.l+=2,e.l+=6,n-=36;var f=[];return f.push((JT[s]||En)(e,n,r)),{cmo:[i,s,c],ft:f}}function ZT(e,n,r){var s=e.l,i="";try{e.l+=4;var c=(r.lastobj||{cmo:[0,0]}).cmo[1],f;[0,5,7,11,12,14].indexOf(c)==-1?e.l+=6:f=nT(e,6,r);var u=e.read_shift(2);e.read_shift(2),Qt(e,2);var h=e.read_shift(2);e.l+=h;for(var x=1;x<e.lens.length-1;++x){if(e.l-s!=e.lens[x])throw new Error("TxO: bad continue record");var m=e[e.l],v=Us(e,e.lens[x+1]-e.lens[x]-1);if(i+=v,i.length>=(m?u:2*u))break}if(i.length!==u&&i.length!==u*2)throw new Error("cchText: "+u+" != "+i.length);return e.l=s+n,{t:i}}catch{return e.l=s+n,{t:i}}}function $T(e,n){var r=Gc(e);e.l+=16;var s=iT(e,n-24);return[r,s]}function ek(e,n){e.read_shift(2);var r=Gc(e),s=e.read_shift((n-10)/2,"dbcs-cont");return s=s.replace(Fn,""),[r,s]}function tk(e){var n=[0,0],r;return r=e.read_shift(2),n[0]=Ig[r]||r,r=e.read_shift(2),n[1]=Ig[r]||r,n}function nk(e){for(var n=e.read_shift(2),r=[];n-- >0;)r.push($y(e));return r}function rk(e){for(var n=e.read_shift(2),r=[];n-- >0;)r.push($y(e));return r}function ak(e){e.l+=2;var n={cxfs:0,crc:0};return n.cxfs=e.read_shift(2),n.crc=e.read_shift(4),n}function ab(e,n,r){if(!r.cellStyles)return En(e,n);var s=r&&r.biff>=12?4:2,i=e.read_shift(s),c=e.read_shift(s),f=e.read_shift(s),u=e.read_shift(s),h=e.read_shift(2);s==2&&(e.l+=2);var x={s:i,e:c,w:f,ixfe:u,flags:h};return(r.biff>=5||!r.biff)&&(x.level=h>>8&7),x}function sk(e,n){var r={};return n<32||(e.l+=16,r.header=Sn(e),r.footer=Sn(e),e.l+=2),r}function ik(e,n,r){var s={area:!1};if(r.biff!=5)return e.l+=n,s;var i=e.read_shift(1);return e.l+=3,i&16&&(s.area=!0),s}var lk=Kr,ok=Qy,ck=Dl;function fk(e){var n=e.read_shift(2),r=e.read_shift(2),s=e.read_shift(4),i={fmt:n,env:r,len:s,data:e.slice(e.l,e.l+s)};return e.l+=s,i}function uk(e,n,r){r.biffguess&&r.biff==5&&(r.biff=2);var s=Kr(e);++e.l;var i=Qs(e,n-7,r);return s.t="str",s.val=i,s}function dk(e){var n=Kr(e);++e.l;var r=Sn(e);return n.t="n",n.val=r,n}function hk(e){var n=Kr(e);++e.l;var r=e.read_shift(2);return n.t="n",n.val=r,n}function xk(e){var n=e.read_shift(1);return n===0?(e.l++,""):e.read_shift(n,"sbcs-cont")}function pk(e,n){e.l+=6,e.l+=2,e.l+=1,e.l+=3,e.l+=1,e.l+=n-13}function mk(e,n,r){var s=e.l+n,i=Kr(e),c=e.read_shift(2),f=Us(e,c,r);return e.l=s,i.t="str",i.val=f,i}var gk=[2,3,48,49,131,139,140,245],Jg=(function(){var e={1:437,2:850,3:1252,4:1e4,100:852,101:866,102:865,103:861,104:895,105:620,106:737,107:857,120:950,121:949,122:936,123:932,124:874,125:1255,126:1256,150:10007,151:10029,152:10006,200:1250,201:1251,202:1254,203:1253,0:20127,8:865,9:437,10:850,11:437,13:437,14:850,15:437,16:850,17:437,18:850,19:932,20:850,21:437,22:850,23:865,24:437,25:437,26:850,27:437,28:863,29:850,31:852,34:852,35:852,36:860,37:850,38:866,55:850,64:852,77:936,78:949,79:950,80:874,87:1252,88:1252,89:1252,108:863,134:737,135:852,136:857,204:1257,255:16969},n=Eh({1:437,2:850,3:1252,4:1e4,100:852,101:866,102:865,103:861,104:895,105:620,106:737,107:857,120:950,121:949,122:936,123:932,124:874,125:1255,126:1256,150:10007,151:10029,152:10006,200:1250,201:1251,202:1254,203:1253,0:20127});function r(u,h){var x=[],m=ns(1);switch(h.type){case"base64":m=Br(tr(u));break;case"binary":m=Br(u);break;case"buffer":case"array":m=u;break}xn(m,0);var v=m.read_shift(1),y=!!(v&136),_=!1,E=!1;switch(v){case 2:break;case 3:break;case 48:_=!0,y=!0;break;case 49:_=!0,y=!0;break;case 131:break;case 139:break;case 140:E=!0;break;case 245:break;default:throw new Error("DBF Unsupported Version: "+v.toString(16))}var b=0,C=521;v==2&&(b=m.read_shift(2)),m.l+=3,v!=2&&(b=m.read_shift(4)),b>1048576&&(b=1e6),v!=2&&(C=m.read_shift(2));var D=m.read_shift(2),k=h.codepage||1252;v!=2&&(m.l+=16,m.read_shift(1),m[m.l]!==0&&(k=e[m[m.l]]),m.l+=1,m.l+=2),E&&(m.l+=36);for(var w=[],H={},V=Math.min(m.length,v==2?521:C-10-(_?264:0)),z=E?32:11;m.l<V&&m[m.l]!=13;)switch(H={},H.name=gl.utils.decode(k,m.slice(m.l,m.l+z)).replace(/[\u0000\r\n].*$/g,""),m.l+=z,H.type=String.fromCharCode(m.read_shift(1)),v!=2&&!E&&(H.offset=m.read_shift(4)),H.len=m.read_shift(1),v==2&&(H.offset=m.read_shift(2)),H.dec=m.read_shift(1),H.name.length&&w.push(H),v!=2&&(m.l+=E?13:14),H.type){case"B":(!_||H.len!=8)&&h.WTF&&console.log("Skipping "+H.name+":"+H.type);break;case"G":case"P":h.WTF&&console.log("Skipping "+H.name+":"+H.type);break;case"+":case"0":case"@":case"C":case"D":case"F":case"I":case"L":case"M":case"N":case"O":case"T":case"Y":break;default:throw new Error("Unknown Field Type: "+H.type)}if(m[m.l]!==13&&(m.l=C-1),m.read_shift(1)!==13)throw new Error("DBF Terminator not found "+m.l+" "+m[m.l]);m.l=C;var R=0,W=0;for(x[0]=[],W=0;W!=w.length;++W)x[0][W]=w[W].name;for(;b-- >0;){if(m[m.l]===42){m.l+=D;continue}for(++m.l,x[++R]=[],W=0,W=0;W!=w.length;++W){var U=m.slice(m.l,m.l+w[W].len);m.l+=w[W].len,xn(U,0);var fe=gl.utils.decode(k,U);switch(w[W].type){case"C":fe.trim().length&&(x[R][W]=fe.replace(/\s+$/,""));break;case"D":fe.length===8?x[R][W]=new Date(+fe.slice(0,4),+fe.slice(4,6)-1,+fe.slice(6,8)):x[R][W]=fe;break;case"F":x[R][W]=parseFloat(fe.trim());break;case"+":case"I":x[R][W]=E?U.read_shift(-4,"i")^2147483648:U.read_shift(4,"i");break;case"L":switch(fe.trim().toUpperCase()){case"Y":case"T":x[R][W]=!0;break;case"N":case"F":x[R][W]=!1;break;case"":case"?":break;default:throw new Error("DBF Unrecognized L:|"+fe+"|")}break;case"M":if(!y)throw new Error("DBF Unexpected MEMO for type "+v.toString(16));x[R][W]="##MEMO##"+(E?parseInt(fe.trim(),10):U.read_shift(4));break;case"N":fe=fe.replace(/\u0000/g,"").trim(),fe&&fe!="."&&(x[R][W]=+fe||0);break;case"@":x[R][W]=new Date(U.read_shift(-8,"f")-621356832e5);break;case"T":x[R][W]=new Date((U.read_shift(4)-2440588)*864e5+U.read_shift(4));break;case"Y":x[R][W]=U.read_shift(4,"i")/1e4+U.read_shift(4,"i")/1e4*Math.pow(2,32);break;case"O":x[R][W]=-U.read_shift(-8,"f");break;case"B":if(_&&w[W].len==8){x[R][W]=U.read_shift(8,"f");break}case"G":case"P":U.l+=w[W].len;break;case"0":if(w[W].name==="_NullFlags")break;default:throw new Error("DBF Unsupported data type "+w[W].type)}}}if(v!=2&&m.l<m.length&&m[m.l++]!=26)throw new Error("DBF EOF Marker missing "+(m.l-1)+" of "+m.length+" "+m[m.l-1].toString(16));return h&&h.sheetRows&&(x=x.slice(0,h.sheetRows)),h.DBF=w,x}function s(u,h){var x=h||{};x.dateNF||(x.dateNF="yyyymmdd");var m=t0(r(u,x),x);return m["!cols"]=x.DBF.map(function(v){return{wch:v.len,DBF:v}}),delete x.DBF,m}function i(u,h){try{return is(s(u,h),h)}catch(x){if(h&&h.WTF)throw x}return{SheetNames:[],Sheets:{}}}var c={B:8,C:250,L:1,D:8,"?":0,"":0};function f(u,h){var x=h||{};if(+x.codepage>=0&&Rr(+x.codepage),x.type=="string")throw new Error("Cannot write DBF to JS string");var m=Od(),v=Xd(u,{header:1,raw:!0,cellDates:!0}),y=v[0],_=v.slice(1),E=u["!cols"]||[],b=0,C=0,D=0,k=1;for(b=0;b<y.length;++b){if(((E[b]||{}).DBF||{}).name){y[b]=E[b].DBF.name,++D;continue}if(y[b]!=null){if(++D,typeof y[b]=="number"&&(y[b]=y[b].toString(10)),typeof y[b]!="string")throw new Error("DBF Invalid column name "+y[b]+" |"+typeof y[b]+"|");if(y.indexOf(y[b])!==b){for(C=0;C<1024;++C)if(y.indexOf(y[b]+"_"+C)==-1){y[b]+="_"+C;break}}}}var w=Ht(u["!ref"]),H=[],V=[],z=[];for(b=0;b<=w.e.c-w.s.c;++b){var R="",W="",U=0,fe=[];for(C=0;C<_.length;++C)_[C][b]!=null&&fe.push(_[C][b]);if(fe.length==0||y[b]==null){H[b]="?";continue}for(C=0;C<fe.length;++C){switch(typeof fe[C]){case"number":W="B";break;case"string":W="C";break;case"boolean":W="L";break;case"object":W=fe[C]instanceof Date?"D":"C";break;default:W="C"}U=Math.max(U,String(fe[C]).length),R=R&&R!=W?"C":W}U>250&&(U=250),W=((E[b]||{}).DBF||{}).type,W=="C"&&E[b].DBF.len>U&&(U=E[b].DBF.len),R=="B"&&W=="N"&&(R="N",z[b]=E[b].DBF.dec,U=E[b].DBF.len),V[b]=R=="C"||W=="N"?U:c[R]||0,k+=V[b],H[b]=R}var Z=m.next(32);for(Z.write_shift(4,318902576),Z.write_shift(4,_.length),Z.write_shift(2,296+32*D),Z.write_shift(2,k),b=0;b<4;++b)Z.write_shift(4,0);for(Z.write_shift(4,0|(+n[ry]||3)<<8),b=0,C=0;b<y.length;++b)if(y[b]!=null){var L=m.next(32),de=(y[b].slice(-10)+"\0\0\0\0\0\0\0\0\0\0\0").slice(0,11);L.write_shift(1,de,"sbcs"),L.write_shift(1,H[b]=="?"?"C":H[b],"sbcs"),L.write_shift(4,C),L.write_shift(1,V[b]||c[H[b]]||0),L.write_shift(1,z[b]||0),L.write_shift(1,2),L.write_shift(4,0),L.write_shift(1,0),L.write_shift(4,0),L.write_shift(4,0),C+=V[b]||c[H[b]]||0}var Ce=m.next(264);for(Ce.write_shift(4,13),b=0;b<65;++b)Ce.write_shift(4,0);for(b=0;b<_.length;++b){var me=m.next(k);for(me.write_shift(1,0),C=0;C<y.length;++C)if(y[C]!=null)switch(H[C]){case"L":me.write_shift(1,_[b][C]==null?63:_[b][C]?84:70);break;case"B":me.write_shift(8,_[b][C]||0,"f");break;case"N":var X="0";for(typeof _[b][C]=="number"&&(X=_[b][C].toFixed(z[C]||0)),D=0;D<V[C]-X.length;++D)me.write_shift(1,32);me.write_shift(1,X,"sbcs");break;case"D":_[b][C]?(me.write_shift(4,("0000"+_[b][C].getFullYear()).slice(-4),"sbcs"),me.write_shift(2,("00"+(_[b][C].getMonth()+1)).slice(-2),"sbcs"),me.write_shift(2,("00"+_[b][C].getDate()).slice(-2),"sbcs")):me.write_shift(8,"00000000","sbcs");break;case"C":var ee=String(_[b][C]!=null?_[b][C]:"").slice(0,V[C]);for(me.write_shift(1,ee,"sbcs"),D=0;D<V[C]-ee.length;++D)me.write_shift(1,32);break}}return m.next(1).write_shift(1,26),m.end()}return{to_workbook:i,to_sheet:s,from_sheet:f}})(),vk=(function(){var e={AA:"À",BA:"Á",CA:"Â",DA:195,HA:"Ä",JA:197,AE:"È",BE:"É",CE:"Ê",HE:"Ë",AI:"Ì",BI:"Í",CI:"Î",HI:"Ï",AO:"Ò",BO:"Ó",CO:"Ô",DO:213,HO:"Ö",AU:"Ù",BU:"Ú",CU:"Û",HU:"Ü",Aa:"à",Ba:"á",Ca:"â",Da:227,Ha:"ä",Ja:229,Ae:"è",Be:"é",Ce:"ê",He:"ë",Ai:"ì",Bi:"í",Ci:"î",Hi:"ï",Ao:"ò",Bo:"ó",Co:"ô",Do:245,Ho:"ö",Au:"ù",Bu:"ú",Cu:"û",Hu:"ü",KC:"Ç",Kc:"ç",q:"æ",z:"œ",a:"Æ",j:"Œ",DN:209,Dn:241,Hy:255,S:169,c:170,R:174,"B ":180,0:176,1:177,2:178,3:179,5:181,6:182,7:183,Q:185,k:186,b:208,i:216,l:222,s:240,y:248,"!":161,'"':162,"#":163,"(":164,"%":165,"'":167,"H ":168,"+":171,";":187,"<":188,"=":189,">":190,"?":191,"{":223},n=new RegExp("\x1BN("+qr(e).join("|").replace(/\|\|\|/,"|\\||").replace(/([?()+])/g,"\\$1")+"|\\|)","gm"),r=function(y,_){var E=e[_];return typeof E=="number"?dg(E):E},s=function(y,_,E){var b=_.charCodeAt(0)-32<<4|E.charCodeAt(0)-48;return b==59?y:dg(b)};e["|"]=254;function i(y,_){switch(_.type){case"base64":return c(tr(y),_);case"binary":return c(y,_);case"buffer":return c(ot&&Buffer.isBuffer(y)?y.toString("binary"):Vs(y),_);case"array":return c(zs(y),_)}throw new Error("Unrecognized type "+_.type)}function c(y,_){var E=y.split(/[\n\r]+/),b=-1,C=-1,D=0,k=0,w=[],H=[],V=null,z={},R=[],W=[],U=[],fe=0,Z;for(+_.codepage>=0&&Rr(+_.codepage);D!==E.length;++D){fe=0;var L=E[D].trim().replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g,s).replace(n,r),de=L.replace(/;;/g,"\0").split(";").map(function(G){return G.replace(/\u0000/g,";")}),Ce=de[0],me;if(L.length>0)switch(Ce){case"ID":break;case"E":break;case"B":break;case"O":break;case"W":break;case"P":de[1].charAt(0)=="P"&&H.push(L.slice(3).replace(/;;/g,";"));break;case"C":var X=!1,ee=!1,we=!1,K=!1,ne=-1,Te=-1;for(k=1;k<de.length;++k)switch(de[k].charAt(0)){case"A":break;case"X":C=parseInt(de[k].slice(1))-1,ee=!0;break;case"Y":for(b=parseInt(de[k].slice(1))-1,ee||(C=0),Z=w.length;Z<=b;++Z)w[Z]=[];break;case"K":me=de[k].slice(1),me.charAt(0)==='"'?me=me.slice(1,me.length-1):me==="TRUE"?me=!0:me==="FALSE"?me=!1:isNaN(Or(me))?isNaN(Qi(me).getDate())||(me=on(me)):(me=Or(me),V!==null&&$i(V)&&(me=Xc(me))),X=!0;break;case"E":K=!0;var O=Vi(de[k].slice(1),{r:b,c:C});w[b][C]=[w[b][C],O];break;case"S":we=!0,w[b][C]=[w[b][C],"S5S"];break;case"G":break;case"R":ne=parseInt(de[k].slice(1))-1;break;case"C":Te=parseInt(de[k].slice(1))-1;break;default:if(_&&_.WTF)throw new Error("SYLK bad record "+L)}if(X&&(w[b][C]&&w[b][C].length==2?w[b][C][0]=me:w[b][C]=me,V=null),we){if(K)throw new Error("SYLK shared formula cannot have own formula");var J=ne>-1&&w[ne][Te];if(!J||!J[1])throw new Error("SYLK shared formula cannot find base");w[b][C][1]=xb(J[1],{r:b-ne,c:C-Te})}break;case"F":var P=0;for(k=1;k<de.length;++k)switch(de[k].charAt(0)){case"X":C=parseInt(de[k].slice(1))-1,++P;break;case"Y":for(b=parseInt(de[k].slice(1))-1,Z=w.length;Z<=b;++Z)w[Z]=[];break;case"M":fe=parseInt(de[k].slice(1))/20;break;case"F":break;case"G":break;case"P":V=H[parseInt(de[k].slice(1))];break;case"S":break;case"D":break;case"N":break;case"W":for(U=de[k].slice(1).split(" "),Z=parseInt(U[0],10);Z<=parseInt(U[1],10);++Z)fe=parseInt(U[2],10),W[Z-1]=fe===0?{hidden:!0}:{wch:fe},Zi(W[Z-1]);break;case"C":C=parseInt(de[k].slice(1))-1,W[C]||(W[C]={});break;case"R":b=parseInt(de[k].slice(1))-1,R[b]||(R[b]={}),fe>0?(R[b].hpt=fe,R[b].hpx=Cl(fe)):fe===0&&(R[b].hidden=!0);break;default:if(_&&_.WTF)throw new Error("SYLK bad record "+L)}P<1&&(V=null);break;default:if(_&&_.WTF)throw new Error("SYLK bad record "+L)}}return R.length>0&&(z["!rows"]=R),W.length>0&&(z["!cols"]=W),_&&_.sheetRows&&(w=w.slice(0,_.sheetRows)),[w,z]}function f(y,_){var E=i(y,_),b=E[0],C=E[1],D=t0(b,_);return qr(C).forEach(function(k){D[k]=C[k]}),D}function u(y,_){return is(f(y,_),_)}function h(y,_,E,b){var C="C;Y"+(E+1)+";X"+(b+1)+";K";switch(y.t){case"n":C+=y.v||0,y.f&&!y.F&&(C+=";E"+aD(y.f,{r:E,c:b}));break;case"b":C+=y.v?"TRUE":"FALSE";break;case"e":C+=y.w||y.v;break;case"d":C+='"'+(y.w||y.v)+'"';break;case"s":C+='"'+y.v.replace(/"/g,"").replace(/;/g,";;")+'"';break}return C}function x(y,_){_.forEach(function(E,b){var C="F;W"+(b+1)+" "+(b+1)+" ";E.hidden?C+="0":(typeof E.width=="number"&&!E.wpx&&(E.wpx=Nc(E.width)),typeof E.wpx=="number"&&!E.wch&&(E.wch=Oc(E.wpx)),typeof E.wch=="number"&&(C+=Math.round(E.wch))),C.charAt(C.length-1)!=" "&&y.push(C)})}function m(y,_){_.forEach(function(E,b){var C="F;";E.hidden?C+="M0;":E.hpt?C+="M"+20*E.hpt+";":E.hpx&&(C+="M"+20*ub(E.hpx)+";"),C.length>2&&y.push(C+"R"+(b+1))})}function v(y,_){var E=["ID;PWXL;N;E"],b=[],C=Ht(y["!ref"]),D,k=Array.isArray(y),w=`\r
`;E.push("P;PGeneral"),E.push("F;P0;DG0G8;M255"),y["!cols"]&&x(E,y["!cols"]),y["!rows"]&&m(E,y["!rows"]),E.push("B;Y"+(C.e.r-C.s.r+1)+";X"+(C.e.c-C.s.c+1)+";D"+[C.s.c,C.s.r,C.e.c,C.e.r].join(" "));for(var H=C.s.r;H<=C.e.r;++H)for(var V=C.s.c;V<=C.e.c;++V){var z=Ke({r:H,c:V});D=k?(y[H]||[])[V]:y[z],!(!D||D.v==null&&(!D.f||D.F))&&b.push(h(D,y,H,V))}return E.join(w)+w+b.join(w)+w+"E"+w}return{to_workbook:u,to_sheet:f,from_sheet:v}})(),yk=(function(){function e(c,f){switch(f.type){case"base64":return n(tr(c),f);case"binary":return n(c,f);case"buffer":return n(ot&&Buffer.isBuffer(c)?c.toString("binary"):Vs(c),f);case"array":return n(zs(c),f)}throw new Error("Unrecognized type "+f.type)}function n(c,f){for(var u=c.split(`
`),h=-1,x=-1,m=0,v=[];m!==u.length;++m){if(u[m].trim()==="BOT"){v[++h]=[],x=0;continue}if(!(h<0)){var y=u[m].trim().split(","),_=y[0],E=y[1];++m;for(var b=u[m]||"";(b.match(/["]/g)||[]).length&1&&m<u.length-1;)b+=`
`+u[++m];switch(b=b.trim(),+_){case-1:if(b==="BOT"){v[++h]=[],x=0;continue}else if(b!=="EOD")throw new Error("Unrecognized DIF special command "+b);break;case 0:b==="TRUE"?v[h][x]=!0:b==="FALSE"?v[h][x]=!1:isNaN(Or(E))?isNaN(Qi(E).getDate())?v[h][x]=E:v[h][x]=on(E):v[h][x]=Or(E),++x;break;case 1:b=b.slice(1,b.length-1),b=b.replace(/""/g,'"'),b&&b.match(/^=".*"$/)&&(b=b.slice(2,-1)),v[h][x++]=b!==""?b:null;break}if(b==="EOD")break}}return f&&f.sheetRows&&(v=v.slice(0,f.sheetRows)),v}function r(c,f){return t0(e(c,f),f)}function s(c,f){return is(r(c,f),f)}var i=(function(){var c=function(h,x,m,v,y){h.push(x),h.push(m+","+v),h.push('"'+y.replace(/"/g,'""')+'"')},f=function(h,x,m,v){h.push(x+","+m),h.push(x==1?'"'+v.replace(/"/g,'""')+'"':v)};return function(h){var x=[],m=Ht(h["!ref"]),v,y=Array.isArray(h);c(x,"TABLE",0,1,"sheetjs"),c(x,"VECTORS",0,m.e.r-m.s.r+1,""),c(x,"TUPLES",0,m.e.c-m.s.c+1,""),c(x,"DATA",0,0,"");for(var _=m.s.r;_<=m.e.r;++_){f(x,-1,0,"BOT");for(var E=m.s.c;E<=m.e.c;++E){var b=Ke({r:_,c:E});if(v=y?(h[_]||[])[E]:h[b],!v){f(x,1,0,"");continue}switch(v.t){case"n":var C=v.w;!C&&v.v!=null&&(C=v.v),C==null?v.f&&!v.F?f(x,1,0,"="+v.f):f(x,1,0,""):f(x,0,C,"V");break;case"b":f(x,0,v.v?1:0,v.v?"TRUE":"FALSE");break;case"s":f(x,1,0,isNaN(v.v)?v.v:'="'+v.v+'"');break;case"d":v.w||(v.w=Sr(v.z||Je[14],Rn(on(v.v)))),f(x,0,v.w,"V");break;default:f(x,1,0,"")}}}f(x,-1,0,"EOD");var D=`\r
`,k=x.join(D);return k}})();return{to_workbook:s,to_sheet:r,from_sheet:i}})(),bk=(function(){function e(v){return v.replace(/\\b/g,"\\").replace(/\\c/g,":").replace(/\\n/g,`
`)}function n(v){return v.replace(/\\/g,"\\b").replace(/:/g,"\\c").replace(/\n/g,"\\n")}function r(v,y){for(var _=v.split(`
`),E=-1,b=-1,C=0,D=[];C!==_.length;++C){var k=_[C].trim().split(":");if(k[0]==="cell"){var w=Bn(k[1]);if(D.length<=w.r)for(E=D.length;E<=w.r;++E)D[E]||(D[E]=[]);switch(E=w.r,b=w.c,k[2]){case"t":D[E][b]=e(k[3]);break;case"v":D[E][b]=+k[3];break;case"vtf":var H=k[k.length-1];case"vtc":k[3]==="nl"?D[E][b]=!!+k[4]:D[E][b]=+k[4],k[2]=="vtf"&&(D[E][b]=[D[E][b],H])}}}return y&&y.sheetRows&&(D=D.slice(0,y.sheetRows)),D}function s(v,y){return t0(r(v,y),y)}function i(v,y){return is(s(v,y),y)}var c=["socialcalc:version:1.5","MIME-Version: 1.0","Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave"].join(`
`),f=["--SocialCalcSpreadsheetControlSave","Content-type: text/plain; charset=UTF-8"].join(`
`)+`
`,u=["# SocialCalc Spreadsheet Control Save","part:sheet"].join(`
`),h="--SocialCalcSpreadsheetControlSave--";function x(v){if(!v||!v["!ref"])return"";for(var y=[],_=[],E,b="",C=e0(v["!ref"]),D=Array.isArray(v),k=C.s.r;k<=C.e.r;++k)for(var w=C.s.c;w<=C.e.c;++w)if(b=Ke({r:k,c:w}),E=D?(v[k]||[])[w]:v[b],!(!E||E.v==null||E.t==="z")){switch(_=["cell",b,"t"],E.t){case"s":case"str":_.push(n(E.v));break;case"n":E.f?(_[2]="vtf",_[3]="n",_[4]=E.v,_[5]=n(E.f)):(_[2]="v",_[3]=E.v);break;case"b":_[2]="vt"+(E.f?"f":"c"),_[3]="nl",_[4]=E.v?"1":"0",_[5]=n(E.f||(E.v?"TRUE":"FALSE"));break;case"d":var H=Rn(on(E.v));_[2]="vtc",_[3]="nd",_[4]=""+H,_[5]=E.w||Sr(E.z||Je[14],H);break;case"e":continue}y.push(_.join(":"))}return y.push("sheet:c:"+(C.e.c-C.s.c+1)+":r:"+(C.e.r-C.s.r+1)+":tvf:1"),y.push("valueformat:1:text-wiki"),y.join(`
`)}function m(v){return[c,f,u,f,x(v),h].join(`
`)}return{to_workbook:i,to_sheet:s,from_sheet:m}})(),Sl=(function(){function e(m,v,y,_,E){E.raw?v[y][_]=m:m===""||(m==="TRUE"?v[y][_]=!0:m==="FALSE"?v[y][_]=!1:isNaN(Or(m))?isNaN(Qi(m).getDate())?v[y][_]=m:v[y][_]=on(m):v[y][_]=Or(m))}function n(m,v){var y=v||{},_=[];if(!m||m.length===0)return _;for(var E=m.split(/[\r\n]/),b=E.length-1;b>=0&&E[b].length===0;)--b;for(var C=10,D=0,k=0;k<=b;++k)D=E[k].indexOf(" "),D==-1?D=E[k].length:D++,C=Math.max(C,D);for(k=0;k<=b;++k){_[k]=[];var w=0;for(e(E[k].slice(0,C).trim(),_,k,w,y),w=1;w<=(E[k].length-C)/10+1;++w)e(E[k].slice(C+(w-1)*10,C+w*10).trim(),_,k,w,y)}return y.sheetRows&&(_=_.slice(0,y.sheetRows)),_}var r={44:",",9:"	",59:";",124:"|"},s={44:3,9:2,59:1,124:0};function i(m){for(var v={},y=!1,_=0,E=0;_<m.length;++_)(E=m.charCodeAt(_))==34?y=!y:!y&&E in r&&(v[E]=(v[E]||0)+1);E=[];for(_ in v)Object.prototype.hasOwnProperty.call(v,_)&&E.push([v[_],_]);if(!E.length){v=s;for(_ in v)Object.prototype.hasOwnProperty.call(v,_)&&E.push([v[_],_])}return E.sort(function(b,C){return b[0]-C[0]||s[b[1]]-s[C[1]]}),r[E.pop()[1]]||44}function c(m,v){var y=v||{},_="",E=y.dense?[]:{},b={s:{c:0,r:0},e:{c:0,r:0}};m.slice(0,4)=="sep="?m.charCodeAt(5)==13&&m.charCodeAt(6)==10?(_=m.charAt(4),m=m.slice(7)):m.charCodeAt(5)==13||m.charCodeAt(5)==10?(_=m.charAt(4),m=m.slice(6)):_=i(m.slice(0,1024)):y&&y.FS?_=y.FS:_=i(m.slice(0,1024));var C=0,D=0,k=0,w=0,H=0,V=_.charCodeAt(0),z=!1,R=0,W=m.charCodeAt(0);m=m.replace(/\r\n/mg,`
`);var U=y.dateNF!=null?FA(y.dateNF):null;function fe(){var Z=m.slice(w,H),L={};if(Z.charAt(0)=='"'&&Z.charAt(Z.length-1)=='"'&&(Z=Z.slice(1,-1).replace(/""/g,'"')),Z.length===0)L.t="z";else if(y.raw)L.t="s",L.v=Z;else if(Z.trim().length===0)L.t="s",L.v=Z;else if(Z.charCodeAt(0)==61)Z.charCodeAt(1)==34&&Z.charCodeAt(Z.length-1)==34?(L.t="s",L.v=Z.slice(2,-1).replace(/""/g,'"')):iD(Z)?(L.t="n",L.f=Z.slice(1)):(L.t="s",L.v=Z);else if(Z=="TRUE")L.t="b",L.v=!0;else if(Z=="FALSE")L.t="b",L.v=!1;else if(!isNaN(k=Or(Z)))L.t="n",y.cellText!==!1&&(L.w=Z),L.v=k;else if(!isNaN(Qi(Z).getDate())||U&&Z.match(U)){L.z=y.dateNF||Je[14];var de=0;U&&Z.match(U)&&(Z=RA(Z,y.dateNF,Z.match(U)||[]),de=1),y.cellDates?(L.t="d",L.v=on(Z,de)):(L.t="n",L.v=Rn(on(Z,de))),y.cellText!==!1&&(L.w=Sr(L.z,L.v instanceof Date?Rn(L.v):L.v)),y.cellNF||delete L.z}else L.t="s",L.v=Z;if(L.t=="z"||(y.dense?(E[C]||(E[C]=[]),E[C][D]=L):E[Ke({c:D,r:C})]=L),w=H+1,W=m.charCodeAt(w),b.e.c<D&&(b.e.c=D),b.e.r<C&&(b.e.r=C),R==V)++D;else if(D=0,++C,y.sheetRows&&y.sheetRows<=C)return!0}e:for(;H<m.length;++H)switch(R=m.charCodeAt(H)){case 34:W===34&&(z=!z);break;case V:case 10:case 13:if(!z&&fe())break e;break}return H-w>0&&fe(),E["!ref"]=ft(b),E}function f(m,v){return!(v&&v.PRN)||v.FS||m.slice(0,4)=="sep="||m.indexOf("	")>=0||m.indexOf(",")>=0||m.indexOf(";")>=0?c(m,v):t0(n(m,v),v)}function u(m,v){var y="",_=v.type=="string"?[0,0,0,0]:Ph(m,v);switch(v.type){case"base64":y=tr(m);break;case"binary":y=m;break;case"buffer":v.codepage==65001?y=m.toString("utf8"):v.codepage&&typeof gl<"u"||(y=ot&&Buffer.isBuffer(m)?m.toString("binary"):Vs(m));break;case"array":y=zs(m);break;case"string":y=m;break;default:throw new Error("Unrecognized type "+v.type)}return _[0]==239&&_[1]==187&&_[2]==191?y=At(y.slice(3)):v.type!="string"&&v.type!="buffer"&&v.codepage==65001?y=At(y):v.type=="binary"&&typeof gl<"u",y.slice(0,19)=="socialcalc:version:"?bk.to_sheet(v.type=="string"?y:At(y),v):f(y,v)}function h(m,v){return is(u(m,v),v)}function x(m){for(var v=[],y=Ht(m["!ref"]),_,E=Array.isArray(m),b=y.s.r;b<=y.e.r;++b){for(var C=[],D=y.s.c;D<=y.e.c;++D){var k=Ke({r:b,c:D});if(_=E?(m[b]||[])[D]:m[k],!_||_.v==null){C.push("          ");continue}for(var w=(_.w||(Sa(_),_.w)||"").slice(0,10);w.length<10;)w+=" ";C.push(w+(D===0?" ":""))}v.push(C.join(""))}return v.join(`
`)}return{to_workbook:h,to_sheet:u,from_sheet:x}})();function Sk(e,n){var r=n||{},s=!!r.WTF;r.WTF=!0;try{var i=vk.to_workbook(e,r);return r.WTF=s,i}catch(c){if(r.WTF=s,!c.message.match(/SYLK bad record ID/)&&s)throw c;return Sl.to_workbook(e,n)}}var ol=(function(){function e(O,J,P){if(O){xn(O,O.l||0);for(var G=P.Enum||ne;O.l<O.length;){var ue=O.read_shift(2),he=G[ue]||G[65535],ve=O.read_shift(2),ye=O.l+ve,_e=he.f&&he.f(O,ve,P);if(O.l=ye,J(_e,he,ue))return}}}function n(O,J){switch(J.type){case"base64":return r(Br(tr(O)),J);case"binary":return r(Br(O),J);case"buffer":case"array":return r(O,J)}throw"Unsupported type "+J.type}function r(O,J){if(!O)return O;var P=J||{},G=P.dense?[]:{},ue="Sheet1",he="",ve=0,ye={},_e=[],Pe=[],I={s:{r:0,c:0},e:{r:0,c:0}},st=P.sheetRows||0;if(O[2]==0&&(O[3]==8||O[3]==9)&&O.length>=16&&O[14]==5&&O[15]===108)throw new Error("Unsupported Works 3 for Mac file");if(O[2]==2)P.Enum=ne,e(O,function(Be,Ct,an){switch(an){case 0:P.vers=Be,Be>=4096&&(P.qpro=!0);break;case 6:I=Be;break;case 204:Be&&(he=Be);break;case 222:he=Be;break;case 15:case 51:P.qpro||(Be[1].v=Be[1].v.slice(1));case 13:case 14:case 16:an==14&&(Be[2]&112)==112&&(Be[2]&15)>1&&(Be[2]&15)<15&&(Be[1].z=P.dateNF||Je[14],P.cellDates&&(Be[1].t="d",Be[1].v=Xc(Be[1].v))),P.qpro&&Be[3]>ve&&(G["!ref"]=ft(I),ye[ue]=G,_e.push(ue),G=P.dense?[]:{},I={s:{r:0,c:0},e:{r:0,c:0}},ve=Be[3],ue=he||"Sheet"+(ve+1),he="");var gn=P.dense?(G[Be[0].r]||[])[Be[0].c]:G[Ke(Be[0])];if(gn){gn.t=Be[1].t,gn.v=Be[1].v,Be[1].z!=null&&(gn.z=Be[1].z),Be[1].f!=null&&(gn.f=Be[1].f);break}P.dense?(G[Be[0].r]||(G[Be[0].r]=[]),G[Be[0].r][Be[0].c]=Be[1]):G[Ke(Be[0])]=Be[1];break}},P);else if(O[2]==26||O[2]==14)P.Enum=Te,O[2]==14&&(P.qpro=!0,O.l=0),e(O,function(Be,Ct,an){switch(an){case 204:ue=Be;break;case 22:Be[1].v=Be[1].v.slice(1);case 23:case 24:case 25:case 37:case 39:case 40:if(Be[3]>ve&&(G["!ref"]=ft(I),ye[ue]=G,_e.push(ue),G=P.dense?[]:{},I={s:{r:0,c:0},e:{r:0,c:0}},ve=Be[3],ue="Sheet"+(ve+1)),st>0&&Be[0].r>=st)break;P.dense?(G[Be[0].r]||(G[Be[0].r]=[]),G[Be[0].r][Be[0].c]=Be[1]):G[Ke(Be[0])]=Be[1],I.e.c<Be[0].c&&(I.e.c=Be[0].c),I.e.r<Be[0].r&&(I.e.r=Be[0].r);break;case 27:Be[14e3]&&(Pe[Be[14e3][0]]=Be[14e3][1]);break;case 1537:Pe[Be[0]]=Be[1],Be[0]==ve&&(ue=Be[1]);break}},P);else throw new Error("Unrecognized LOTUS BOF "+O[2]);if(G["!ref"]=ft(I),ye[he||ue]=G,_e.push(he||ue),!Pe.length)return{SheetNames:_e,Sheets:ye};for(var Ue={},it=[],qe=0;qe<Pe.length;++qe)ye[_e[qe]]?(it.push(Pe[qe]||_e[qe]),Ue[Pe[qe]]=ye[Pe[qe]]||ye[_e[qe]]):(it.push(Pe[qe]),Ue[Pe[qe]]={"!ref":"A1"});return{SheetNames:it,Sheets:Ue}}function s(O,J){var P=J||{};if(+P.codepage>=0&&Rr(+P.codepage),P.type=="string")throw new Error("Cannot write WK1 to JS string");var G=Od(),ue=Ht(O["!ref"]),he=Array.isArray(O),ve=[];Dr(G,0,c(1030)),Dr(G,6,h(ue));for(var ye=Math.min(ue.e.r,8191),_e=ue.s.r;_e<=ye;++_e)for(var Pe=mn(_e),I=ue.s.c;I<=ue.e.c;++I){_e===ue.s.r&&(ve[I]=nn(I));var st=ve[I]+Pe,Ue=he?(O[_e]||[])[I]:O[st];if(!(!Ue||Ue.t=="z"))if(Ue.t=="n")(Ue.v|0)==Ue.v&&Ue.v>=-32768&&Ue.v<=32767?Dr(G,13,_(_e,I,Ue.v)):Dr(G,14,b(_e,I,Ue.v));else{var it=Sa(Ue);Dr(G,15,v(_e,I,it.slice(0,239)))}}return Dr(G,1),G.end()}function i(O,J){var P=J||{};if(+P.codepage>=0&&Rr(+P.codepage),P.type=="string")throw new Error("Cannot write WK3 to JS string");var G=Od();Dr(G,0,f(O));for(var ue=0,he=0;ue<O.SheetNames.length;++ue)(O.Sheets[O.SheetNames[ue]]||{})["!ref"]&&Dr(G,27,K(O.SheetNames[ue],he++));var ve=0;for(ue=0;ue<O.SheetNames.length;++ue){var ye=O.Sheets[O.SheetNames[ue]];if(!(!ye||!ye["!ref"])){for(var _e=Ht(ye["!ref"]),Pe=Array.isArray(ye),I=[],st=Math.min(_e.e.r,8191),Ue=_e.s.r;Ue<=st;++Ue)for(var it=mn(Ue),qe=_e.s.c;qe<=_e.e.c;++qe){Ue===_e.s.r&&(I[qe]=nn(qe));var Be=I[qe]+it,Ct=Pe?(ye[Ue]||[])[qe]:ye[Be];if(!(!Ct||Ct.t=="z"))if(Ct.t=="n")Dr(G,23,fe(Ue,qe,ve,Ct.v));else{var an=Sa(Ct);Dr(G,22,R(Ue,qe,ve,an.slice(0,239)))}}++ve}}return Dr(G,1),G.end()}function c(O){var J=en(2);return J.write_shift(2,O),J}function f(O){var J=en(26);J.write_shift(2,4096),J.write_shift(2,4),J.write_shift(4,0);for(var P=0,G=0,ue=0,he=0;he<O.SheetNames.length;++he){var ve=O.SheetNames[he],ye=O.Sheets[ve];if(!(!ye||!ye["!ref"])){++ue;var _e=e0(ye["!ref"]);P<_e.e.r&&(P=_e.e.r),G<_e.e.c&&(G=_e.e.c)}}return P>8191&&(P=8191),J.write_shift(2,P),J.write_shift(1,ue),J.write_shift(1,G),J.write_shift(2,0),J.write_shift(2,0),J.write_shift(1,1),J.write_shift(1,2),J.write_shift(4,0),J.write_shift(4,0),J}function u(O,J,P){var G={s:{c:0,r:0},e:{c:0,r:0}};return J==8&&P.qpro?(G.s.c=O.read_shift(1),O.l++,G.s.r=O.read_shift(2),G.e.c=O.read_shift(1),O.l++,G.e.r=O.read_shift(2),G):(G.s.c=O.read_shift(2),G.s.r=O.read_shift(2),J==12&&P.qpro&&(O.l+=2),G.e.c=O.read_shift(2),G.e.r=O.read_shift(2),J==12&&P.qpro&&(O.l+=2),G.s.c==65535&&(G.s.c=G.e.c=G.s.r=G.e.r=0),G)}function h(O){var J=en(8);return J.write_shift(2,O.s.c),J.write_shift(2,O.s.r),J.write_shift(2,O.e.c),J.write_shift(2,O.e.r),J}function x(O,J,P){var G=[{c:0,r:0},{t:"n",v:0},0,0];return P.qpro&&P.vers!=20768?(G[0].c=O.read_shift(1),G[3]=O.read_shift(1),G[0].r=O.read_shift(2),O.l+=2):(G[2]=O.read_shift(1),G[0].c=O.read_shift(2),G[0].r=O.read_shift(2)),G}function m(O,J,P){var G=O.l+J,ue=x(O,J,P);if(ue[1].t="s",P.vers==20768){O.l++;var he=O.read_shift(1);return ue[1].v=O.read_shift(he,"utf8"),ue}return P.qpro&&O.l++,ue[1].v=O.read_shift(G-O.l,"cstr"),ue}function v(O,J,P){var G=en(7+P.length);G.write_shift(1,255),G.write_shift(2,J),G.write_shift(2,O),G.write_shift(1,39);for(var ue=0;ue<G.length;++ue){var he=P.charCodeAt(ue);G.write_shift(1,he>=128?95:he)}return G.write_shift(1,0),G}function y(O,J,P){var G=x(O,J,P);return G[1].v=O.read_shift(2,"i"),G}function _(O,J,P){var G=en(7);return G.write_shift(1,255),G.write_shift(2,J),G.write_shift(2,O),G.write_shift(2,P,"i"),G}function E(O,J,P){var G=x(O,J,P);return G[1].v=O.read_shift(8,"f"),G}function b(O,J,P){var G=en(13);return G.write_shift(1,255),G.write_shift(2,J),G.write_shift(2,O),G.write_shift(8,P,"f"),G}function C(O,J,P){var G=O.l+J,ue=x(O,J,P);if(ue[1].v=O.read_shift(8,"f"),P.qpro)O.l=G;else{var he=O.read_shift(2);H(O.slice(O.l,O.l+he),ue),O.l+=he}return ue}function D(O,J,P){var G=J&32768;return J&=-32769,J=(G?O:0)+(J>=8192?J-16384:J),(G?"":"$")+(P?nn(J):mn(J))}var k={51:["FALSE",0],52:["TRUE",0],70:["LEN",1],80:["SUM",69],81:["AVERAGEA",69],82:["COUNTA",69],83:["MINA",69],84:["MAXA",69],111:["T",1]},w=["","","","","","","","","","+","-","*","/","^","=","<>","<=",">=","<",">","","","","","&","","","","","","",""];function H(O,J){xn(O,0);for(var P=[],G=0,ue="",he="",ve="",ye="";O.l<O.length;){var _e=O[O.l++];switch(_e){case 0:P.push(O.read_shift(8,"f"));break;case 1:he=D(J[0].c,O.read_shift(2),!0),ue=D(J[0].r,O.read_shift(2),!1),P.push(he+ue);break;case 2:{var Pe=D(J[0].c,O.read_shift(2),!0),I=D(J[0].r,O.read_shift(2),!1);he=D(J[0].c,O.read_shift(2),!0),ue=D(J[0].r,O.read_shift(2),!1),P.push(Pe+I+":"+he+ue)}break;case 3:if(O.l<O.length){console.error("WK1 premature formula end");return}break;case 4:P.push("("+P.pop()+")");break;case 5:P.push(O.read_shift(2));break;case 6:{for(var st="";_e=O[O.l++];)st+=String.fromCharCode(_e);P.push('"'+st.replace(/"/g,'""')+'"')}break;case 8:P.push("-"+P.pop());break;case 23:P.push("+"+P.pop());break;case 22:P.push("NOT("+P.pop()+")");break;case 20:case 21:ye=P.pop(),ve=P.pop(),P.push(["AND","OR"][_e-20]+"("+ve+","+ye+")");break;default:if(_e<32&&w[_e])ye=P.pop(),ve=P.pop(),P.push(ve+w[_e]+ye);else if(k[_e]){if(G=k[_e][1],G==69&&(G=O[O.l++]),G>P.length){console.error("WK1 bad formula parse 0x"+_e.toString(16)+":|"+P.join("|")+"|");return}var Ue=P.slice(-G);P.length-=G,P.push(k[_e][0]+"("+Ue.join(",")+")")}else return _e<=7?console.error("WK1 invalid opcode "+_e.toString(16)):_e<=24?console.error("WK1 unsupported op "+_e.toString(16)):_e<=30?console.error("WK1 invalid opcode "+_e.toString(16)):_e<=115?console.error("WK1 unsupported function opcode "+_e.toString(16)):console.error("WK1 unrecognized opcode "+_e.toString(16))}}P.length==1?J[1].f=""+P[0]:console.error("WK1 bad formula parse |"+P.join("|")+"|")}function V(O){var J=[{c:0,r:0},{t:"n",v:0},0];return J[0].r=O.read_shift(2),J[3]=O[O.l++],J[0].c=O[O.l++],J}function z(O,J){var P=V(O);return P[1].t="s",P[1].v=O.read_shift(J-4,"cstr"),P}function R(O,J,P,G){var ue=en(6+G.length);ue.write_shift(2,O),ue.write_shift(1,P),ue.write_shift(1,J),ue.write_shift(1,39);for(var he=0;he<G.length;++he){var ve=G.charCodeAt(he);ue.write_shift(1,ve>=128?95:ve)}return ue.write_shift(1,0),ue}function W(O,J){var P=V(O);P[1].v=O.read_shift(2);var G=P[1].v>>1;if(P[1].v&1)switch(G&7){case 0:G=(G>>3)*5e3;break;case 1:G=(G>>3)*500;break;case 2:G=(G>>3)/20;break;case 3:G=(G>>3)/200;break;case 4:G=(G>>3)/2e3;break;case 5:G=(G>>3)/2e4;break;case 6:G=(G>>3)/16;break;case 7:G=(G>>3)/64;break}return P[1].v=G,P}function U(O,J){var P=V(O),G=O.read_shift(4),ue=O.read_shift(4),he=O.read_shift(2);if(he==65535)return G===0&&ue===3221225472?(P[1].t="e",P[1].v=15):G===0&&ue===3489660928?(P[1].t="e",P[1].v=42):P[1].v=0,P;var ve=he&32768;return he=(he&32767)-16446,P[1].v=(1-ve*2)*(ue*Math.pow(2,he+32)+G*Math.pow(2,he)),P}function fe(O,J,P,G){var ue=en(14);if(ue.write_shift(2,O),ue.write_shift(1,P),ue.write_shift(1,J),G==0)return ue.write_shift(4,0),ue.write_shift(4,0),ue.write_shift(2,65535),ue;var he=0,ve=0,ye=0,_e=0;return G<0&&(he=1,G=-G),ve=Math.log2(G)|0,G/=Math.pow(2,ve-31),_e=G>>>0,(_e&2147483648)==0&&(G/=2,++ve,_e=G>>>0),G-=_e,_e|=2147483648,_e>>>=0,G*=Math.pow(2,32),ye=G>>>0,ue.write_shift(4,ye),ue.write_shift(4,_e),ve+=16383+(he?32768:0),ue.write_shift(2,ve),ue}function Z(O,J){var P=U(O);return O.l+=J-14,P}function L(O,J){var P=V(O),G=O.read_shift(4);return P[1].v=G>>6,P}function de(O,J){var P=V(O),G=O.read_shift(8,"f");return P[1].v=G,P}function Ce(O,J){var P=de(O);return O.l+=J-10,P}function me(O,J){return O[O.l+J-1]==0?O.read_shift(J,"cstr"):""}function X(O,J){var P=O[O.l++];P>J-1&&(P=J-1);for(var G="";G.length<P;)G+=String.fromCharCode(O[O.l++]);return G}function ee(O,J,P){if(!(!P.qpro||J<21)){var G=O.read_shift(1);O.l+=17,O.l+=1,O.l+=2;var ue=O.read_shift(J-21,"cstr");return[G,ue]}}function we(O,J){for(var P={},G=O.l+J;O.l<G;){var ue=O.read_shift(2);if(ue==14e3){for(P[ue]=[0,""],P[ue][0]=O.read_shift(2);O[O.l];)P[ue][1]+=String.fromCharCode(O[O.l]),O.l++;O.l++}}return P}function K(O,J){var P=en(5+O.length);P.write_shift(2,14e3),P.write_shift(2,J);for(var G=0;G<O.length;++G){var ue=O.charCodeAt(G);P[P.l++]=ue>127?95:ue}return P[P.l++]=0,P}var ne={0:{n:"BOF",f:Qt},1:{n:"EOF"},2:{n:"CALCMODE"},3:{n:"CALCORDER"},4:{n:"SPLIT"},5:{n:"SYNC"},6:{n:"RANGE",f:u},7:{n:"WINDOW1"},8:{n:"COLW1"},9:{n:"WINTWO"},10:{n:"COLW2"},11:{n:"NAME"},12:{n:"BLANK"},13:{n:"INTEGER",f:y},14:{n:"NUMBER",f:E},15:{n:"LABEL",f:m},16:{n:"FORMULA",f:C},24:{n:"TABLE"},25:{n:"ORANGE"},26:{n:"PRANGE"},27:{n:"SRANGE"},28:{n:"FRANGE"},29:{n:"KRANGE1"},32:{n:"HRANGE"},35:{n:"KRANGE2"},36:{n:"PROTEC"},37:{n:"FOOTER"},38:{n:"HEADER"},39:{n:"SETUP"},40:{n:"MARGINS"},41:{n:"LABELFMT"},42:{n:"TITLES"},43:{n:"SHEETJS"},45:{n:"GRAPH"},46:{n:"NGRAPH"},47:{n:"CALCCOUNT"},48:{n:"UNFORMATTED"},49:{n:"CURSORW12"},50:{n:"WINDOW"},51:{n:"STRING",f:m},55:{n:"PASSWORD"},56:{n:"LOCKED"},60:{n:"QUERY"},61:{n:"QUERYNAME"},62:{n:"PRINT"},63:{n:"PRINTNAME"},64:{n:"GRAPH2"},65:{n:"GRAPHNAME"},66:{n:"ZOOM"},67:{n:"SYMSPLIT"},68:{n:"NSROWS"},69:{n:"NSCOLS"},70:{n:"RULER"},71:{n:"NNAME"},72:{n:"ACOMM"},73:{n:"AMACRO"},74:{n:"PARSE"},102:{n:"PRANGES??"},103:{n:"RRANGES??"},104:{n:"FNAME??"},105:{n:"MRANGES??"},204:{n:"SHEETNAMECS",f:me},222:{n:"SHEETNAMELP",f:X},65535:{n:""}},Te={0:{n:"BOF"},1:{n:"EOF"},2:{n:"PASSWORD"},3:{n:"CALCSET"},4:{n:"WINDOWSET"},5:{n:"SHEETCELLPTR"},6:{n:"SHEETLAYOUT"},7:{n:"COLUMNWIDTH"},8:{n:"HIDDENCOLUMN"},9:{n:"USERRANGE"},10:{n:"SYSTEMRANGE"},11:{n:"ZEROFORCE"},12:{n:"SORTKEYDIR"},13:{n:"FILESEAL"},14:{n:"DATAFILLNUMS"},15:{n:"PRINTMAIN"},16:{n:"PRINTSTRING"},17:{n:"GRAPHMAIN"},18:{n:"GRAPHSTRING"},19:{n:"??"},20:{n:"ERRCELL"},21:{n:"NACELL"},22:{n:"LABEL16",f:z},23:{n:"NUMBER17",f:U},24:{n:"NUMBER18",f:W},25:{n:"FORMULA19",f:Z},26:{n:"FORMULA1A"},27:{n:"XFORMAT",f:we},28:{n:"DTLABELMISC"},29:{n:"DTLABELCELL"},30:{n:"GRAPHWINDOW"},31:{n:"CPA"},32:{n:"LPLAUTO"},33:{n:"QUERY"},34:{n:"HIDDENSHEET"},35:{n:"??"},37:{n:"NUMBER25",f:L},38:{n:"??"},39:{n:"NUMBER27",f:de},40:{n:"FORMULA28",f:Ce},142:{n:"??"},147:{n:"??"},150:{n:"??"},151:{n:"??"},152:{n:"??"},153:{n:"??"},154:{n:"??"},155:{n:"??"},156:{n:"??"},163:{n:"??"},174:{n:"??"},175:{n:"??"},176:{n:"??"},177:{n:"??"},184:{n:"??"},185:{n:"??"},186:{n:"??"},187:{n:"??"},188:{n:"??"},195:{n:"??"},201:{n:"??"},204:{n:"SHEETNAMECS",f:me},205:{n:"??"},206:{n:"??"},207:{n:"??"},208:{n:"??"},256:{n:"??"},259:{n:"??"},260:{n:"??"},261:{n:"??"},262:{n:"??"},263:{n:"??"},265:{n:"??"},266:{n:"??"},267:{n:"??"},268:{n:"??"},270:{n:"??"},271:{n:"??"},384:{n:"??"},389:{n:"??"},390:{n:"??"},393:{n:"??"},396:{n:"??"},512:{n:"??"},514:{n:"??"},513:{n:"??"},516:{n:"??"},517:{n:"??"},640:{n:"??"},641:{n:"??"},642:{n:"??"},643:{n:"??"},644:{n:"??"},645:{n:"??"},646:{n:"??"},647:{n:"??"},648:{n:"??"},658:{n:"??"},659:{n:"??"},660:{n:"??"},661:{n:"??"},662:{n:"??"},665:{n:"??"},666:{n:"??"},768:{n:"??"},772:{n:"??"},1537:{n:"SHEETINFOQP",f:ee},1600:{n:"??"},1602:{n:"??"},1793:{n:"??"},1794:{n:"??"},1795:{n:"??"},1796:{n:"??"},1920:{n:"??"},2048:{n:"??"},2049:{n:"??"},2052:{n:"??"},2688:{n:"??"},10998:{n:"??"},12849:{n:"??"},28233:{n:"??"},28484:{n:"??"},65535:{n:""}};return{sheet_to_wk1:s,book_to_wk3:i,to_workbook:n}})();function _k(e){var n={},r=e.match(wn),s=0,i=!1;if(r)for(;s!=r.length;++s){var c=Ge(r[s]);switch(c[0].replace(/\w*:/g,"")){case"<condense":break;case"<extend":break;case"<shadow":if(!c.val)break;case"<shadow>":case"<shadow/>":n.shadow=1;break;case"</shadow>":break;case"<charset":if(c.val=="1")break;n.cp=yh[parseInt(c.val,10)];break;case"<outline":if(!c.val)break;case"<outline>":case"<outline/>":n.outline=1;break;case"</outline>":break;case"<rFont":n.name=c.val;break;case"<sz":n.sz=c.val;break;case"<strike":if(!c.val)break;case"<strike>":case"<strike/>":n.strike=1;break;case"</strike>":break;case"<u":if(!c.val)break;switch(c.val){case"double":n.uval="double";break;case"singleAccounting":n.uval="single-accounting";break;case"doubleAccounting":n.uval="double-accounting";break}case"<u>":case"<u/>":n.u=1;break;case"</u>":break;case"<b":if(c.val=="0")break;case"<b>":case"<b/>":n.b=1;break;case"</b>":break;case"<i":if(c.val=="0")break;case"<i>":case"<i/>":n.i=1;break;case"</i>":break;case"<color":c.rgb&&(n.color=c.rgb.slice(2,8));break;case"<color>":case"<color/>":case"</color>":break;case"<family":n.family=c.val;break;case"<family>":case"<family/>":case"</family>":break;case"<vertAlign":n.valign=c.val;break;case"<vertAlign>":case"<vertAlign/>":case"</vertAlign>":break;case"<scheme":break;case"<scheme>":case"<scheme/>":case"</scheme>":break;case"<extLst":case"<extLst>":case"</extLst>":break;case"<ext":i=!0;break;case"</ext>":i=!1;break;default:if(c[0].charCodeAt(1)!==47&&!i)throw new Error("Unrecognized rich format "+c[0])}}return n}var Ck=(function(){var e=yl("t"),n=yl("rPr");function r(c){var f=c.match(e);if(!f)return{t:"s",v:""};var u={t:"s",v:dt(f[1])},h=c.match(n);return h&&(u.s=_k(h[1])),u}var s=/<(?:\w+:)?r>/g,i=/<\/(?:\w+:)?r>/;return function(f){return f.replace(s,"").split(i).map(r).filter(function(u){return u.v})}})(),Ek=(function(){var n=/(\r\n|\n)/g;function r(i,c,f){var u=[];i.u&&u.push("text-decoration: underline;"),i.uval&&u.push("text-underline-style:"+i.uval+";"),i.sz&&u.push("font-size:"+i.sz+"pt;"),i.outline&&u.push("text-effect: outline;"),i.shadow&&u.push("text-shadow: auto;"),c.push('<span style="'+u.join("")+'">'),i.b&&(c.push("<b>"),f.push("</b>")),i.i&&(c.push("<i>"),f.push("</i>")),i.strike&&(c.push("<s>"),f.push("</s>"));var h=i.valign||"";return h=="superscript"||h=="super"?h="sup":h=="subscript"&&(h="sub"),h!=""&&(c.push("<"+h+">"),f.push("</"+h+">")),f.push("</span>"),i}function s(i){var c=[[],i.v,[]];return i.v?(i.s&&r(i.s,c[0],c[2]),c[0].join("")+c[1].replace(n,"<br/>")+c[2].join("")):""}return function(c){return c.map(s).join("")}})(),wk=/<(?:\w+:)?t[^>]*>([^<]*)<\/(?:\w+:)?t>/g,Ak=/<(?:\w+:)?r>/,Tk=/<(?:\w+:)?rPh.*?>([\s\S]*?)<\/(?:\w+:)?rPh>/g;function Lh(e,n){var r=n?n.cellHTML:!0,s={};return e?(e.match(/^\s*<(?:\w+:)?t[^>]*>/)?(s.t=dt(At(e.slice(e.indexOf(">")+1).split(/<\/(?:\w+:)?t>/)[0]||"")),s.r=At(e),r&&(s.h=Ah(s.t))):e.match(Ak)&&(s.r=At(e),s.t=dt(At((e.replace(Tk,"").match(wk)||[]).join("").replace(wn,""))),r&&(s.h=Ek(Ck(s.r)))),s):{t:""}}var kk=/<(?:\w+:)?sst([^>]*)>([\s\S]*)<\/(?:\w+:)?sst>/,Dk=/<(?:\w+:)?(?:si|sstItem)>/g,Bk=/<\/(?:\w+:)?(?:si|sstItem)>/;function Fk(e,n){var r=[],s="";if(!e)return r;var i=e.match(kk);if(i){s=i[2].replace(Dk,"").split(Bk);for(var c=0;c!=s.length;++c){var f=Lh(s[c].trim(),n);f!=null&&(r[r.length]=f)}i=Ge(i[1]),r.Count=i.count,r.Unique=i.uniqueCount}return r}function Rk(e){return[e.read_shift(4),e.read_shift(4)]}function Nk(e,n){var r=[],s=!1;return _a(e,function(c,f,u){switch(u){case 159:r.Count=c[0],r.Unique=c[1];break;case 19:r.push(c);break;case 160:return!0;case 35:s=!0;break;case 36:s=!1;break;default:if(f.T,!s||n.WTF)throw new Error("Unexpected record 0x"+u.toString(16))}}),r}function sb(e){for(var n=[],r=e.split(""),s=0;s<r.length;++s)n[s]=r[s].charCodeAt(0);return n}function ba(e,n){var r={};return r.Major=e.read_shift(2),r.Minor=e.read_shift(2),n>=4&&(e.l+=n-4),r}function Ok(e){var n={};return n.id=e.read_shift(0,"lpp4"),n.R=ba(e,4),n.U=ba(e,4),n.W=ba(e,4),n}function Mk(e){for(var n=e.read_shift(4),r=e.l+n-4,s={},i=e.read_shift(4),c=[];i-- >0;)c.push({t:e.read_shift(4),v:e.read_shift(0,"lpp4")});if(s.name=e.read_shift(0,"lpp4"),s.comps=c,e.l!=r)throw new Error("Bad DataSpaceMapEntry: "+e.l+" != "+r);return s}function Lk(e){var n=[];e.l+=4;for(var r=e.read_shift(4);r-- >0;)n.push(Mk(e));return n}function jk(e){var n=[];e.l+=4;for(var r=e.read_shift(4);r-- >0;)n.push(e.read_shift(0,"lpp4"));return n}function Ik(e){var n={};return e.read_shift(4),e.l+=4,n.id=e.read_shift(0,"lpp4"),n.name=e.read_shift(0,"lpp4"),n.R=ba(e,4),n.U=ba(e,4),n.W=ba(e,4),n}function Hk(e){var n=Ik(e);if(n.ename=e.read_shift(0,"8lpp4"),n.blksz=e.read_shift(4),n.cmode=e.read_shift(4),e.read_shift(4)!=4)throw new Error("Bad !Primary record");return n}function ib(e,n){var r=e.l+n,s={};s.Flags=e.read_shift(4)&63,e.l+=4,s.AlgID=e.read_shift(4);var i=!1;switch(s.AlgID){case 26126:case 26127:case 26128:i=s.Flags==36;break;case 26625:i=s.Flags==4;break;case 0:i=s.Flags==16||s.Flags==4||s.Flags==36;break;default:throw"Unrecognized encryption algorithm: "+s.AlgID}if(!i)throw new Error("Encryption Flags/AlgID mismatch");return s.AlgIDHash=e.read_shift(4),s.KeySize=e.read_shift(4),s.ProviderType=e.read_shift(4),e.l+=8,s.CSPName=e.read_shift(r-e.l>>1,"utf16le"),e.l=r,s}function lb(e,n){var r={},s=e.l+n;return e.l+=4,r.Salt=e.slice(e.l,e.l+16),e.l+=16,r.Verifier=e.slice(e.l,e.l+16),e.l+=16,e.read_shift(4),r.VerifierHash=e.slice(e.l,s),e.l=s,r}function zk(e){var n=ba(e);switch(n.Minor){case 2:return[n.Minor,Uk(e)];case 3:return[n.Minor,Wk()];case 4:return[n.Minor,Pk(e)]}throw new Error("ECMA-376 Encrypted file unrecognized Version: "+n.Minor)}function Uk(e){var n=e.read_shift(4);if((n&63)!=36)throw new Error("EncryptionInfo mismatch");var r=e.read_shift(4),s=ib(e,r),i=lb(e,e.length-e.l);return{t:"Std",h:s,v:i}}function Wk(){throw new Error("File is password-protected: ECMA-376 Extensible")}function Pk(e){var n=["saltSize","blockSize","keyBits","hashSize","cipherAlgorithm","cipherChaining","hashAlgorithm","saltValue"];e.l+=4;var r=e.read_shift(e.length-e.l,"utf8"),s={};return r.replace(wn,function(c){var f=Ge(c);switch(Vr(f[0])){case"<?xml":break;case"<encryption":case"</encryption>":break;case"<keyData":n.forEach(function(u){s[u]=f[u]});break;case"<dataIntegrity":s.encryptedHmacKey=f.encryptedHmacKey,s.encryptedHmacValue=f.encryptedHmacValue;break;case"<keyEncryptors>":case"<keyEncryptors":s.encs=[];break;case"</keyEncryptors>":break;case"<keyEncryptor":s.uri=f.uri;break;case"</keyEncryptor>":break;case"<encryptedKey":s.encs.push(f);break;default:throw f[0]}}),s}function Xk(e,n){var r={},s=r.EncryptionVersionInfo=ba(e,4);if(n-=4,s.Minor!=2)throw new Error("unrecognized minor version code: "+s.Minor);if(s.Major>4||s.Major<2)throw new Error("unrecognized major version code: "+s.Major);r.Flags=e.read_shift(4),n-=4;var i=e.read_shift(4);return n-=4,r.EncryptionHeader=ib(e,i),n-=i,r.EncryptionVerifier=lb(e,n),r}function Gk(e){var n={},r=n.EncryptionVersionInfo=ba(e,4);if(r.Major!=1||r.Minor!=1)throw"unrecognized version code "+r.Major+" : "+r.Minor;return n.Salt=e.read_shift(16),n.EncryptedVerifier=e.read_shift(16),n.EncryptedVerifierHash=e.read_shift(16),n}function qk(e){var n=0,r,s=sb(e),i=s.length+1,c,f,u,h,x;for(r=ns(i),r[0]=s.length,c=1;c!=i;++c)r[c]=s[c-1];for(c=i-1;c>=0;--c)f=r[c],u=(n&16384)===0?0:1,h=n<<1&32767,x=u|h,n=x^f;return n^52811}var ob=(function(){var e=[187,255,255,186,255,255,185,128,0,190,15,0,191,15,0],n=[57840,7439,52380,33984,4364,3600,61902,12606,6258,57657,54287,34041,10252,43370,20163],r=[44796,19929,39858,10053,20106,40212,10761,31585,63170,64933,60267,50935,40399,11199,17763,35526,1453,2906,5812,11624,23248,885,1770,3540,7080,14160,28320,56640,55369,41139,20807,41614,21821,43642,17621,28485,56970,44341,19019,38038,14605,29210,60195,50791,40175,10751,21502,43004,24537,18387,36774,3949,7898,15796,31592,63184,47201,24803,49606,37805,14203,28406,56812,17824,35648,1697,3394,6788,13576,27152,43601,17539,35078,557,1114,2228,4456,30388,60776,51953,34243,7079,14158,28316,14128,28256,56512,43425,17251,34502,7597,13105,26210,52420,35241,883,1766,3532,4129,8258,16516,33032,4657,9314,18628],s=function(f){return(f/2|f*128)&255},i=function(f,u){return s(f^u)},c=function(f){for(var u=n[f.length-1],h=104,x=f.length-1;x>=0;--x)for(var m=f[x],v=0;v!=7;++v)m&64&&(u^=r[h]),m*=2,--h;return u};return function(f){for(var u=sb(f),h=c(u),x=u.length,m=ns(16),v=0;v!=16;++v)m[v]=0;var y,_,E;for((x&1)===1&&(y=h>>8,m[x]=i(e[0],y),--x,y=h&255,_=u[u.length-1],m[x]=i(_,y));x>0;)--x,y=h>>8,m[x]=i(u[x],y),--x,y=h&255,m[x]=i(u[x],y);for(x=15,E=15-u.length;E>0;)y=h>>8,m[x]=i(e[E],y),--x,--E,y=h&255,m[x]=i(u[x],y),--x,--E;return m}})(),Vk=function(e,n,r,s,i){i||(i=n),s||(s=ob(e));var c,f;for(c=0;c!=n.length;++c)f=n[c],f^=s[r],f=(f>>5|f<<3)&255,i[c]=f,++r;return[i,r,s]},Kk=function(e){var n=0,r=ob(e);return function(s){var i=Vk("",s,n,r);return n=i[1],i[0]}};function Yk(e,n,r,s){var i={key:Qt(e),verificationBytes:Qt(e)};return r.password&&(i.verifier=qk(r.password)),s.valid=i.verificationBytes===i.verifier,s.valid&&(s.insitu=Kk(r.password)),i}function Jk(e,n,r){var s=r||{};return s.Info=e.read_shift(2),e.l-=2,s.Info===1?s.Data=Gk(e):s.Data=Xk(e,n),s}function Qk(e,n,r){var s={Type:r.biff>=8?e.read_shift(2):0};return s.Type?Jk(e,n-2,s):Yk(e,r.biff>=8?n:n-2,r,s),s}var Zk=(function(){function e(i,c){switch(c.type){case"base64":return n(tr(i),c);case"binary":return n(i,c);case"buffer":return n(ot&&Buffer.isBuffer(i)?i.toString("binary"):Vs(i),c);case"array":return n(zs(i),c)}throw new Error("Unrecognized type "+c.type)}function n(i,c){var f=c||{},u=f.dense?[]:{},h=i.match(/\\trowd.*?\\row\b/g);if(!h.length)throw new Error("RTF missing table");var x={s:{c:0,r:0},e:{c:0,r:h.length-1}};return h.forEach(function(m,v){Array.isArray(u)&&(u[v]=[]);for(var y=/\\\w+\b/g,_=0,E,b=-1;E=y.exec(m);){switch(E[0]){case"\\cell":var C=m.slice(_,y.lastIndex-E[0].length);if(C[0]==" "&&(C=C.slice(1)),++b,C.length){var D={v:C,t:"s"};Array.isArray(u)?u[v][b]=D:u[Ke({r:v,c:b})]=D}break}_=y.lastIndex}b>x.e.c&&(x.e.c=b)}),u["!ref"]=ft(x),u}function r(i,c){return is(e(i,c),c)}function s(i){for(var c=["{\\rtf1\\ansi"],f=Ht(i["!ref"]),u,h=Array.isArray(i),x=f.s.r;x<=f.e.r;++x){c.push("\\trowd\\trautofit1");for(var m=f.s.c;m<=f.e.c;++m)c.push("\\cellx"+(m+1));for(c.push("\\pard\\intbl"),m=f.s.c;m<=f.e.c;++m){var v=Ke({r:x,c:m});u=h?(i[x]||[])[m]:i[v],!(!u||u.v==null&&(!u.f||u.F))&&(c.push(" "+(u.w||(Sa(u),u.w))),c.push("\\cell"))}c.push("\\pard\\intbl\\row")}return c.join("")+"}"}return{to_workbook:r,to_sheet:e,from_sheet:s}})();function $k(e){var n=e.slice(e[0]==="#"?1:0).slice(0,6);return[parseInt(n.slice(0,2),16),parseInt(n.slice(2,4),16),parseInt(n.slice(4,6),16)]}function _l(e){for(var n=0,r=1;n!=3;++n)r=r*256+(e[n]>255?255:e[n]<0?0:e[n]);return r.toString(16).toUpperCase().slice(1)}function e5(e){var n=e[0]/255,r=e[1]/255,s=e[2]/255,i=Math.max(n,r,s),c=Math.min(n,r,s),f=i-c;if(f===0)return[0,0,n];var u=0,h=0,x=i+c;switch(h=f/(x>1?2-x:x),i){case n:u=((r-s)/f+6)%6;break;case r:u=(s-n)/f+2;break;case s:u=(n-r)/f+4;break}return[u/6,h,x/2]}function t5(e){var n=e[0],r=e[1],s=e[2],i=r*2*(s<.5?s:1-s),c=s-i/2,f=[c,c,c],u=6*n,h;if(r!==0)switch(u|0){case 0:case 6:h=i*u,f[0]+=i,f[1]+=h;break;case 1:h=i*(2-u),f[0]+=h,f[1]+=i;break;case 2:h=i*(u-2),f[1]+=i,f[2]+=h;break;case 3:h=i*(4-u),f[1]+=h,f[2]+=i;break;case 4:h=i*(u-4),f[2]+=i,f[0]+=h;break;case 5:h=i*(6-u),f[2]+=h,f[0]+=i;break}for(var x=0;x!=3;++x)f[x]=Math.round(f[x]*255);return f}function Rc(e,n){if(n===0)return e;var r=e5($k(e));return n<0?r[2]=r[2]*(1+n):r[2]=1-(1-r[2])*(1-n),_l(t5(r))}var cb=6,n5=15,r5=1,Dn=cb;function Nc(e){return Math.floor((e+Math.round(128/Dn)/256)*Dn)}function Oc(e){return Math.floor((e-5)/Dn*100+.5)/100}function Id(e){return Math.round((e*Dn+5)/Dn*256)/256}function Sd(e){return Id(Oc(Nc(e)))}function jh(e){var n=Math.abs(e-Sd(e)),r=Dn;if(n>.005)for(Dn=r5;Dn<n5;++Dn)Math.abs(e-Sd(e))<=n&&(n=Math.abs(e-Sd(e)),r=Dn);Dn=r}function Zi(e){e.width?(e.wpx=Nc(e.width),e.wch=Oc(e.wpx),e.MDW=Dn):e.wpx?(e.wch=Oc(e.wpx),e.width=Id(e.wch),e.MDW=Dn):typeof e.wch=="number"&&(e.width=Id(e.wch),e.wpx=Nc(e.width),e.MDW=Dn),e.customWidth&&delete e.customWidth}var a5=96,fb=a5;function ub(e){return e*96/fb}function Cl(e){return e*fb/96}var s5={None:"none",Solid:"solid",Gray50:"mediumGray",Gray75:"darkGray",Gray25:"lightGray",HorzStripe:"darkHorizontal",VertStripe:"darkVertical",ReverseDiagStripe:"darkDown",DiagStripe:"darkUp",DiagCross:"darkGrid",ThickDiagCross:"darkTrellis",ThinHorzStripe:"lightHorizontal",ThinVertStripe:"lightVertical",ThinReverseDiagStripe:"lightDown",ThinHorzCross:"lightGrid"};function i5(e,n,r,s){n.Borders=[];var i={},c=!1;(e[0].match(wn)||[]).forEach(function(f){var u=Ge(f);switch(Vr(u[0])){case"<borders":case"<borders>":case"</borders>":break;case"<border":case"<border>":case"<border/>":i={},u.diagonalUp&&(i.diagonalUp=Rt(u.diagonalUp)),u.diagonalDown&&(i.diagonalDown=Rt(u.diagonalDown)),n.Borders.push(i);break;case"</border>":break;case"<left/>":break;case"<left":case"<left>":break;case"</left>":break;case"<right/>":break;case"<right":case"<right>":break;case"</right>":break;case"<top/>":break;case"<top":case"<top>":break;case"</top>":break;case"<bottom/>":break;case"<bottom":case"<bottom>":break;case"</bottom>":break;case"<diagonal":case"<diagonal>":case"<diagonal/>":break;case"</diagonal>":break;case"<horizontal":case"<horizontal>":case"<horizontal/>":break;case"</horizontal>":break;case"<vertical":case"<vertical>":case"<vertical/>":break;case"</vertical>":break;case"<start":case"<start>":case"<start/>":break;case"</start>":break;case"<end":case"<end>":case"<end/>":break;case"</end>":break;case"<color":case"<color>":break;case"<color/>":case"</color>":break;case"<extLst":case"<extLst>":case"</extLst>":break;case"<ext":c=!0;break;case"</ext>":c=!1;break;default:if(s&&s.WTF&&!c)throw new Error("unrecognized "+u[0]+" in borders")}})}function l5(e,n,r,s){n.Fills=[];var i={},c=!1;(e[0].match(wn)||[]).forEach(function(f){var u=Ge(f);switch(Vr(u[0])){case"<fills":case"<fills>":case"</fills>":break;case"<fill>":case"<fill":case"<fill/>":i={},n.Fills.push(i);break;case"</fill>":break;case"<gradientFill>":break;case"<gradientFill":case"</gradientFill>":n.Fills.push(i),i={};break;case"<patternFill":case"<patternFill>":u.patternType&&(i.patternType=u.patternType);break;case"<patternFill/>":case"</patternFill>":break;case"<bgColor":i.bgColor||(i.bgColor={}),u.indexed&&(i.bgColor.indexed=parseInt(u.indexed,10)),u.theme&&(i.bgColor.theme=parseInt(u.theme,10)),u.tint&&(i.bgColor.tint=parseFloat(u.tint)),u.rgb&&(i.bgColor.rgb=u.rgb.slice(-6));break;case"<bgColor/>":case"</bgColor>":break;case"<fgColor":i.fgColor||(i.fgColor={}),u.theme&&(i.fgColor.theme=parseInt(u.theme,10)),u.tint&&(i.fgColor.tint=parseFloat(u.tint)),u.rgb!=null&&(i.fgColor.rgb=u.rgb.slice(-6));break;case"<fgColor/>":case"</fgColor>":break;case"<stop":case"<stop/>":break;case"</stop>":break;case"<color":case"<color/>":break;case"</color>":break;case"<extLst":case"<extLst>":case"</extLst>":break;case"<ext":c=!0;break;case"</ext>":c=!1;break;default:if(s&&s.WTF&&!c)throw new Error("unrecognized "+u[0]+" in fills")}})}function o5(e,n,r,s){n.Fonts=[];var i={},c=!1;(e[0].match(wn)||[]).forEach(function(f){var u=Ge(f);switch(Vr(u[0])){case"<fonts":case"<fonts>":case"</fonts>":break;case"<font":case"<font>":break;case"</font>":case"<font/>":n.Fonts.push(i),i={};break;case"<name":u.val&&(i.name=At(u.val));break;case"<name/>":case"</name>":break;case"<b":i.bold=u.val?Rt(u.val):1;break;case"<b/>":i.bold=1;break;case"<i":i.italic=u.val?Rt(u.val):1;break;case"<i/>":i.italic=1;break;case"<u":switch(u.val){case"none":i.underline=0;break;case"single":i.underline=1;break;case"double":i.underline=2;break;case"singleAccounting":i.underline=33;break;case"doubleAccounting":i.underline=34;break}break;case"<u/>":i.underline=1;break;case"<strike":i.strike=u.val?Rt(u.val):1;break;case"<strike/>":i.strike=1;break;case"<outline":i.outline=u.val?Rt(u.val):1;break;case"<outline/>":i.outline=1;break;case"<shadow":i.shadow=u.val?Rt(u.val):1;break;case"<shadow/>":i.shadow=1;break;case"<condense":i.condense=u.val?Rt(u.val):1;break;case"<condense/>":i.condense=1;break;case"<extend":i.extend=u.val?Rt(u.val):1;break;case"<extend/>":i.extend=1;break;case"<sz":u.val&&(i.sz=+u.val);break;case"<sz/>":case"</sz>":break;case"<vertAlign":u.val&&(i.vertAlign=u.val);break;case"<vertAlign/>":case"</vertAlign>":break;case"<family":u.val&&(i.family=parseInt(u.val,10));break;case"<family/>":case"</family>":break;case"<scheme":u.val&&(i.scheme=u.val);break;case"<scheme/>":case"</scheme>":break;case"<charset":if(u.val=="1")break;u.codepage=yh[parseInt(u.val,10)];break;case"<color":if(i.color||(i.color={}),u.auto&&(i.color.auto=Rt(u.auto)),u.rgb)i.color.rgb=u.rgb.slice(-6);else if(u.indexed){i.color.index=parseInt(u.indexed,10);var h=Os[i.color.index];i.color.index==81&&(h=Os[1]),h||(h=Os[1]),i.color.rgb=h[0].toString(16)+h[1].toString(16)+h[2].toString(16)}else u.theme&&(i.color.theme=parseInt(u.theme,10),u.tint&&(i.color.tint=parseFloat(u.tint)),u.theme&&r.themeElements&&r.themeElements.clrScheme&&(i.color.rgb=Rc(r.themeElements.clrScheme[i.color.theme].rgb,i.color.tint||0)));break;case"<color/>":case"</color>":break;case"<AlternateContent":c=!0;break;case"</AlternateContent>":c=!1;break;case"<extLst":case"<extLst>":case"</extLst>":break;case"<ext":c=!0;break;case"</ext>":c=!1;break;default:if(s&&s.WTF&&!c)throw new Error("unrecognized "+u[0]+" in fonts")}})}function c5(e,n,r){n.NumberFmt=[];for(var s=qr(Je),i=0;i<s.length;++i)n.NumberFmt[s[i]]=Je[s[i]];var c=e[0].match(wn);if(c)for(i=0;i<c.length;++i){var f=Ge(c[i]);switch(Vr(f[0])){case"<numFmts":case"</numFmts>":case"<numFmts/>":case"<numFmts>":break;case"<numFmt":{var u=dt(At(f.formatCode)),h=parseInt(f.numFmtId,10);if(n.NumberFmt[h]=u,h>0){if(h>392){for(h=392;h>60&&n.NumberFmt[h]!=null;--h);n.NumberFmt[h]=u}Ns(u,h)}}break;case"</numFmt>":break;default:if(r.WTF)throw new Error("unrecognized "+f[0]+" in numFmts")}}}var cc=["numFmtId","fillId","fontId","borderId","xfId"],fc=["applyAlignment","applyBorder","applyFill","applyFont","applyNumberFormat","applyProtection","pivotButton","quotePrefix"];function f5(e,n,r){n.CellXf=[];var s,i=!1;(e[0].match(wn)||[]).forEach(function(c){var f=Ge(c),u=0;switch(Vr(f[0])){case"<cellXfs":case"<cellXfs>":case"<cellXfs/>":case"</cellXfs>":break;case"<xf":case"<xf/>":for(s=f,delete s[0],u=0;u<cc.length;++u)s[cc[u]]&&(s[cc[u]]=parseInt(s[cc[u]],10));for(u=0;u<fc.length;++u)s[fc[u]]&&(s[fc[u]]=Rt(s[fc[u]]));if(n.NumberFmt&&s.numFmtId>392){for(u=392;u>60;--u)if(n.NumberFmt[s.numFmtId]==n.NumberFmt[u]){s.numFmtId=u;break}}n.CellXf.push(s);break;case"</xf>":break;case"<alignment":case"<alignment/>":var h={};f.vertical&&(h.vertical=f.vertical),f.horizontal&&(h.horizontal=f.horizontal),f.textRotation!=null&&(h.textRotation=f.textRotation),f.indent&&(h.indent=f.indent),f.wrapText&&(h.wrapText=Rt(f.wrapText)),s.alignment=h;break;case"</alignment>":break;case"<protection":break;case"</protection>":case"<protection/>":break;case"<AlternateContent":i=!0;break;case"</AlternateContent>":i=!1;break;case"<extLst":case"<extLst>":case"</extLst>":break;case"<ext":i=!0;break;case"</ext>":i=!1;break;default:if(r&&r.WTF&&!i)throw new Error("unrecognized "+f[0]+" in cellXfs")}})}var u5=(function(){var n=/<(?:\w+:)?numFmts([^>]*)>[\S\s]*?<\/(?:\w+:)?numFmts>/,r=/<(?:\w+:)?cellXfs([^>]*)>[\S\s]*?<\/(?:\w+:)?cellXfs>/,s=/<(?:\w+:)?fills([^>]*)>[\S\s]*?<\/(?:\w+:)?fills>/,i=/<(?:\w+:)?fonts([^>]*)>[\S\s]*?<\/(?:\w+:)?fonts>/,c=/<(?:\w+:)?borders([^>]*)>[\S\s]*?<\/(?:\w+:)?borders>/;return function(u,h,x){var m={};if(!u)return m;u=u.replace(/<!--([\s\S]*?)-->/mg,"").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm,"");var v;return(v=u.match(n))&&c5(v,m,x),(v=u.match(i))&&o5(v,m,h,x),(v=u.match(s))&&l5(v,m,h,x),(v=u.match(c))&&i5(v,m,h,x),(v=u.match(r))&&f5(v,m,x),m}})();function d5(e,n){var r=e.read_shift(2),s=Cn(e);return[r,s]}function h5(e,n,r){var s={};s.sz=e.read_shift(2)/20;var i=C6(e);i.fItalic&&(s.italic=1),i.fCondense&&(s.condense=1),i.fExtend&&(s.extend=1),i.fShadow&&(s.shadow=1),i.fOutline&&(s.outline=1),i.fStrikeout&&(s.strike=1);var c=e.read_shift(2);switch(c===700&&(s.bold=1),e.read_shift(2)){case 1:s.vertAlign="superscript";break;case 2:s.vertAlign="subscript";break}var f=e.read_shift(1);f!=0&&(s.underline=f);var u=e.read_shift(1);u>0&&(s.family=u);var h=e.read_shift(1);switch(h>0&&(s.charset=h),e.l++,s.color=_6(e),e.read_shift(1)){case 1:s.scheme="major";break;case 2:s.scheme="minor";break}return s.name=Cn(e),s}var x5=En;function p5(e,n){var r=e.l+n,s=e.read_shift(2),i=e.read_shift(2);return e.l=r,{ixfe:s,numFmtId:i}}var m5=En;function g5(e,n,r){var s={};s.NumberFmt=[];for(var i in Je)s.NumberFmt[i]=Je[i];s.CellXf=[],s.Fonts=[];var c=[],f=!1;return _a(e,function(h,x,m){switch(m){case 44:s.NumberFmt[h[0]]=h[1],Ns(h[1],h[0]);break;case 43:s.Fonts.push(h),h.color.theme!=null&&n&&n.themeElements&&n.themeElements.clrScheme&&(h.color.rgb=Rc(n.themeElements.clrScheme[h.color.theme].rgb,h.color.tint||0));break;case 1025:break;case 45:break;case 46:break;case 47:c[c.length-1]==617&&s.CellXf.push(h);break;case 48:case 507:case 572:case 475:break;case 1171:case 2102:case 1130:case 512:case 2095:case 3072:break;case 35:f=!0;break;case 36:f=!1;break;case 37:c.push(m),f=!0;break;case 38:c.pop(),f=!1;break;default:if(x.T>0)c.push(m);else if(x.T<0)c.pop();else if(!f||r.WTF&&c[c.length-1]!=37)throw new Error("Unexpected record 0x"+m.toString(16))}}),s}var v5=["</a:lt1>","</a:dk1>","</a:lt2>","</a:dk2>","</a:accent1>","</a:accent2>","</a:accent3>","</a:accent4>","</a:accent5>","</a:accent6>","</a:hlink>","</a:folHlink>"];function y5(e,n,r){n.themeElements.clrScheme=[];var s={};(e[0].match(wn)||[]).forEach(function(i){var c=Ge(i);switch(c[0]){case"<a:clrScheme":case"</a:clrScheme>":break;case"<a:srgbClr":s.rgb=c.val;break;case"<a:sysClr":s.rgb=c.lastClr;break;case"<a:dk1>":case"</a:dk1>":case"<a:lt1>":case"</a:lt1>":case"<a:dk2>":case"</a:dk2>":case"<a:lt2>":case"</a:lt2>":case"<a:accent1>":case"</a:accent1>":case"<a:accent2>":case"</a:accent2>":case"<a:accent3>":case"</a:accent3>":case"<a:accent4>":case"</a:accent4>":case"<a:accent5>":case"</a:accent5>":case"<a:accent6>":case"</a:accent6>":case"<a:hlink>":case"</a:hlink>":case"<a:folHlink>":case"</a:folHlink>":c[0].charAt(1)==="/"?(n.themeElements.clrScheme[v5.indexOf(c[0])]=s,s={}):s.name=c[0].slice(3,c[0].length-1);break;default:if(r&&r.WTF)throw new Error("Unrecognized "+c[0]+" in clrScheme")}})}function b5(){}function S5(){}var _5=/<a:clrScheme([^>]*)>[\s\S]*<\/a:clrScheme>/,C5=/<a:fontScheme([^>]*)>[\s\S]*<\/a:fontScheme>/,E5=/<a:fmtScheme([^>]*)>[\s\S]*<\/a:fmtScheme>/;function w5(e,n,r){n.themeElements={};var s;[["clrScheme",_5,y5],["fontScheme",C5,b5],["fmtScheme",E5,S5]].forEach(function(i){if(!(s=e.match(i[1])))throw new Error(i[0]+" not found in themeElements");i[2](s,n,r)})}var A5=/<a:themeElements([^>]*)>[\s\S]*<\/a:themeElements>/;function db(e,n){(!e||e.length===0)&&(e=T5());var r,s={};if(!(r=e.match(A5)))throw new Error("themeElements not found in theme");return w5(r[0],s,n),s.raw=e,s}function T5(e,n){var r=[Cy];return r[r.length]='<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">',r[r.length]="<a:themeElements>",r[r.length]='<a:clrScheme name="Office">',r[r.length]='<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>',r[r.length]='<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>',r[r.length]='<a:dk2><a:srgbClr val="1F497D"/></a:dk2>',r[r.length]='<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>',r[r.length]='<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>',r[r.length]='<a:accent2><a:srgbClr val="C0504D"/></a:accent2>',r[r.length]='<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>',r[r.length]='<a:accent4><a:srgbClr val="8064A2"/></a:accent4>',r[r.length]='<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>',r[r.length]='<a:accent6><a:srgbClr val="F79646"/></a:accent6>',r[r.length]='<a:hlink><a:srgbClr val="0000FF"/></a:hlink>',r[r.length]='<a:folHlink><a:srgbClr val="800080"/></a:folHlink>',r[r.length]="</a:clrScheme>",r[r.length]='<a:fontScheme name="Office">',r[r.length]="<a:majorFont>",r[r.length]='<a:latin typeface="Cambria"/>',r[r.length]='<a:ea typeface=""/>',r[r.length]='<a:cs typeface=""/>',r[r.length]='<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>',r[r.length]='<a:font script="Hang" typeface="맑은 고딕"/>',r[r.length]='<a:font script="Hans" typeface="宋体"/>',r[r.length]='<a:font script="Hant" typeface="新細明體"/>',r[r.length]='<a:font script="Arab" typeface="Times New Roman"/>',r[r.length]='<a:font script="Hebr" typeface="Times New Roman"/>',r[r.length]='<a:font script="Thai" typeface="Tahoma"/>',r[r.length]='<a:font script="Ethi" typeface="Nyala"/>',r[r.length]='<a:font script="Beng" typeface="Vrinda"/>',r[r.length]='<a:font script="Gujr" typeface="Shruti"/>',r[r.length]='<a:font script="Khmr" typeface="MoolBoran"/>',r[r.length]='<a:font script="Knda" typeface="Tunga"/>',r[r.length]='<a:font script="Guru" typeface="Raavi"/>',r[r.length]='<a:font script="Cans" typeface="Euphemia"/>',r[r.length]='<a:font script="Cher" typeface="Plantagenet Cherokee"/>',r[r.length]='<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>',r[r.length]='<a:font script="Tibt" typeface="Microsoft Himalaya"/>',r[r.length]='<a:font script="Thaa" typeface="MV Boli"/>',r[r.length]='<a:font script="Deva" typeface="Mangal"/>',r[r.length]='<a:font script="Telu" typeface="Gautami"/>',r[r.length]='<a:font script="Taml" typeface="Latha"/>',r[r.length]='<a:font script="Syrc" typeface="Estrangelo Edessa"/>',r[r.length]='<a:font script="Orya" typeface="Kalinga"/>',r[r.length]='<a:font script="Mlym" typeface="Kartika"/>',r[r.length]='<a:font script="Laoo" typeface="DokChampa"/>',r[r.length]='<a:font script="Sinh" typeface="Iskoola Pota"/>',r[r.length]='<a:font script="Mong" typeface="Mongolian Baiti"/>',r[r.length]='<a:font script="Viet" typeface="Times New Roman"/>',r[r.length]='<a:font script="Uigh" typeface="Microsoft Uighur"/>',r[r.length]='<a:font script="Geor" typeface="Sylfaen"/>',r[r.length]="</a:majorFont>",r[r.length]="<a:minorFont>",r[r.length]='<a:latin typeface="Calibri"/>',r[r.length]='<a:ea typeface=""/>',r[r.length]='<a:cs typeface=""/>',r[r.length]='<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>',r[r.length]='<a:font script="Hang" typeface="맑은 고딕"/>',r[r.length]='<a:font script="Hans" typeface="宋体"/>',r[r.length]='<a:font script="Hant" typeface="新細明體"/>',r[r.length]='<a:font script="Arab" typeface="Arial"/>',r[r.length]='<a:font script="Hebr" typeface="Arial"/>',r[r.length]='<a:font script="Thai" typeface="Tahoma"/>',r[r.length]='<a:font script="Ethi" typeface="Nyala"/>',r[r.length]='<a:font script="Beng" typeface="Vrinda"/>',r[r.length]='<a:font script="Gujr" typeface="Shruti"/>',r[r.length]='<a:font script="Khmr" typeface="DaunPenh"/>',r[r.length]='<a:font script="Knda" typeface="Tunga"/>',r[r.length]='<a:font script="Guru" typeface="Raavi"/>',r[r.length]='<a:font script="Cans" typeface="Euphemia"/>',r[r.length]='<a:font script="Cher" typeface="Plantagenet Cherokee"/>',r[r.length]='<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>',r[r.length]='<a:font script="Tibt" typeface="Microsoft Himalaya"/>',r[r.length]='<a:font script="Thaa" typeface="MV Boli"/>',r[r.length]='<a:font script="Deva" typeface="Mangal"/>',r[r.length]='<a:font script="Telu" typeface="Gautami"/>',r[r.length]='<a:font script="Taml" typeface="Latha"/>',r[r.length]='<a:font script="Syrc" typeface="Estrangelo Edessa"/>',r[r.length]='<a:font script="Orya" typeface="Kalinga"/>',r[r.length]='<a:font script="Mlym" typeface="Kartika"/>',r[r.length]='<a:font script="Laoo" typeface="DokChampa"/>',r[r.length]='<a:font script="Sinh" typeface="Iskoola Pota"/>',r[r.length]='<a:font script="Mong" typeface="Mongolian Baiti"/>',r[r.length]='<a:font script="Viet" typeface="Arial"/>',r[r.length]='<a:font script="Uigh" typeface="Microsoft Uighur"/>',r[r.length]='<a:font script="Geor" typeface="Sylfaen"/>',r[r.length]="</a:minorFont>",r[r.length]="</a:fontScheme>",r[r.length]='<a:fmtScheme name="Office">',r[r.length]="<a:fillStyleLst>",r[r.length]='<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>',r[r.length]='<a:gradFill rotWithShape="1">',r[r.length]="<a:gsLst>",r[r.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>',r[r.length]='<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>',r[r.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>',r[r.length]="</a:gsLst>",r[r.length]='<a:lin ang="16200000" scaled="1"/>',r[r.length]="</a:gradFill>",r[r.length]='<a:gradFill rotWithShape="1">',r[r.length]="<a:gsLst>",r[r.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>',r[r.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>',r[r.length]="</a:gsLst>",r[r.length]='<a:lin ang="16200000" scaled="0"/>',r[r.length]="</a:gradFill>",r[r.length]="</a:fillStyleLst>",r[r.length]="<a:lnStyleLst>",r[r.length]='<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>',r[r.length]='<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>',r[r.length]='<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>',r[r.length]="</a:lnStyleLst>",r[r.length]="<a:effectStyleLst>",r[r.length]="<a:effectStyle>",r[r.length]="<a:effectLst>",r[r.length]='<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>',r[r.length]="</a:effectLst>",r[r.length]="</a:effectStyle>",r[r.length]="<a:effectStyle>",r[r.length]="<a:effectLst>",r[r.length]='<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>',r[r.length]="</a:effectLst>",r[r.length]="</a:effectStyle>",r[r.length]="<a:effectStyle>",r[r.length]="<a:effectLst>",r[r.length]='<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>',r[r.length]="</a:effectLst>",r[r.length]='<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>',r[r.length]='<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>',r[r.length]="</a:effectStyle>",r[r.length]="</a:effectStyleLst>",r[r.length]="<a:bgFillStyleLst>",r[r.length]='<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>',r[r.length]='<a:gradFill rotWithShape="1">',r[r.length]="<a:gsLst>",r[r.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>',r[r.length]='<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>',r[r.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>',r[r.length]="</a:gsLst>",r[r.length]='<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>',r[r.length]="</a:gradFill>",r[r.length]='<a:gradFill rotWithShape="1">',r[r.length]="<a:gsLst>",r[r.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>',r[r.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>',r[r.length]="</a:gsLst>",r[r.length]='<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>',r[r.length]="</a:gradFill>",r[r.length]="</a:bgFillStyleLst>",r[r.length]="</a:fmtScheme>",r[r.length]="</a:themeElements>",r[r.length]="<a:objectDefaults>",r[r.length]="<a:spDef>",r[r.length]='<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>',r[r.length]="</a:spDef>",r[r.length]="<a:lnDef>",r[r.length]='<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>',r[r.length]="</a:lnDef>",r[r.length]="</a:objectDefaults>",r[r.length]="<a:extraClrSchemeLst/>",r[r.length]="</a:theme>",r.join("")}function k5(e,n,r){var s=e.l+n,i=e.read_shift(4);if(i!==124226){if(!r.cellStyles){e.l=s;return}var c=e.slice(e.l);e.l=s;var f;try{f=_y(c,{type:"array"})}catch{return}var u=er(f,"theme/theme/theme1.xml",!0);if(u)return db(u,r)}}function D5(e){return e.read_shift(4)}function B5(e){var n={};switch(n.xclrType=e.read_shift(2),n.nTintShade=e.read_shift(2),n.xclrType){case 0:e.l+=4;break;case 1:n.xclrValue=F5(e,4);break;case 2:n.xclrValue=Zy(e);break;case 3:n.xclrValue=D5(e);break;case 4:e.l+=4;break}return e.l+=8,n}function F5(e,n){return En(e,n)}function R5(e,n){return En(e,n)}function N5(e){var n=e.read_shift(2),r=e.read_shift(2)-4,s=[n];switch(n){case 4:case 5:case 7:case 8:case 9:case 10:case 11:case 13:s[1]=B5(e);break;case 6:s[1]=R5(e,r);break;case 14:case 15:s[1]=e.read_shift(r===1?1:2);break;default:throw new Error("Unrecognized ExtProp type: "+n+" "+r)}return s}function O5(e,n){var r=e.l+n;e.l+=2;var s=e.read_shift(2);e.l+=2;for(var i=e.read_shift(2),c=[];i-- >0;)c.push(N5(e,r-e.l));return{ixfe:s,ext:c}}function M5(e,n){n.forEach(function(r){r[0]})}function L5(e,n){return{flags:e.read_shift(4),version:e.read_shift(4),name:Cn(e)}}function j5(e){for(var n=[],r=e.read_shift(4);r-- >0;)n.push([e.read_shift(4),e.read_shift(4)]);return n}function I5(e){return e.l+=4,e.read_shift(4)!=0}function H5(e,n,r){var s={Types:[],Cell:[],Value:[]},i=r||{},c=[],f=!1,u=2;return _a(e,function(h,x,m){switch(m){case 335:s.Types.push({name:h.name});break;case 51:h.forEach(function(v){u==1?s.Cell.push({type:s.Types[v[0]-1].name,index:v[1]}):u==0&&s.Value.push({type:s.Types[v[0]-1].name,index:v[1]})});break;case 337:u=h?1:0;break;case 338:u=2;break;case 35:c.push(m),f=!0;break;case 36:c.pop(),f=!1;break;default:if(!x.T){if(!f||i.WTF&&c[c.length-1]!=35)throw new Error("Unexpected record 0x"+m.toString(16))}}}),s}function z5(e,n,r){var s={Types:[],Cell:[],Value:[]};if(!e)return s;var i=!1,c=2,f;return e.replace(wn,function(u){var h=Ge(u);switch(Vr(h[0])){case"<?xml":break;case"<metadata":case"</metadata>":break;case"<metadataTypes":case"</metadataTypes>":break;case"<metadataType":s.Types.push({name:h.name});break;case"</metadataType>":break;case"<futureMetadata":for(var x=0;x<s.Types.length;++x)s.Types[x].name==h.name&&(f=s.Types[x]);break;case"</futureMetadata>":break;case"<bk>":break;case"</bk>":break;case"<rc":c==1?s.Cell.push({type:s.Types[h.t-1].name,index:+h.v}):c==0&&s.Value.push({type:s.Types[h.t-1].name,index:+h.v});break;case"</rc>":break;case"<cellMetadata":c=1;break;case"</cellMetadata>":c=2;break;case"<valueMetadata":c=0;break;case"</valueMetadata>":c=2;break;case"<extLst":case"<extLst>":case"</extLst>":case"<extLst/>":break;case"<ext":i=!0;break;case"</ext>":i=!1;break;case"<rvb":if(!f)break;f.offsets||(f.offsets=[]),f.offsets.push(+h.i);break;default:if(!i&&r.WTF)throw new Error("unrecognized "+h[0]+" in metadata")}return u}),s}function U5(e){var n=[];if(!e)return n;var r=1;return(e.match(wn)||[]).forEach(function(s){var i=Ge(s);switch(i[0]){case"<?xml":break;case"<calcChain":case"<calcChain>":case"</calcChain>":break;case"<c":delete i[0],i.i?r=i.i:i.i=r,n.push(i);break}}),n}function W5(e){var n={};n.i=e.read_shift(4);var r={};r.r=e.read_shift(4),r.c=e.read_shift(4),n.r=Ke(r);var s=e.read_shift(1);return s&2&&(n.l="1"),s&8&&(n.a="1"),n}function P5(e,n,r){var s=[];return _a(e,function(c,f,u){switch(u){case 63:s.push(c);break;default:if(!f.T)throw new Error("Unexpected record 0x"+u.toString(16))}}),s}function X5(e,n,r,s){if(!e)return e;var i=s||{},c=!1;_a(e,function(u,h,x){switch(x){case 359:case 363:case 364:case 366:case 367:case 368:case 369:case 370:case 371:case 472:case 577:case 578:case 579:case 580:case 581:case 582:case 583:case 584:case 585:case 586:case 587:break;case 35:c=!0;break;case 36:c=!1;break;default:if(!h.T){if(!c||i.WTF)throw new Error("Unexpected record 0x"+x.toString(16))}}},i)}function G5(e,n){if(!e)return"??";var r=(e.match(/<c:chart [^>]*r:id="([^"]*)"/)||["",""])[1];return n["!id"][r].Target}function Qg(e,n,r,s){var i=Array.isArray(e),c;n.forEach(function(f){var u=Bn(f.ref);if(i?(e[u.r]||(e[u.r]=[]),c=e[u.r][u.c]):c=e[f.ref],!c){c={t:"z"},i?e[u.r][u.c]=c:e[f.ref]=c;var h=Ht(e["!ref"]||"BDWGO1000001:A1");h.s.r>u.r&&(h.s.r=u.r),h.e.r<u.r&&(h.e.r=u.r),h.s.c>u.c&&(h.s.c=u.c),h.e.c<u.c&&(h.e.c=u.c);var x=ft(h);x!==e["!ref"]&&(e["!ref"]=x)}c.c||(c.c=[]);var m={a:f.author,t:f.t,r:f.r,T:r};f.h&&(m.h=f.h);for(var v=c.c.length-1;v>=0;--v){if(!r&&c.c[v].T)return;r&&!c.c[v].T&&c.c.splice(v,1)}if(r&&s){for(v=0;v<s.length;++v)if(m.a==s[v].id){m.a=s[v].name||m.a;break}}c.c.push(m)})}function q5(e,n){if(e.match(/<(?:\w+:)?comments *\/>/))return[];var r=[],s=[],i=e.match(/<(?:\w+:)?authors>([\s\S]*)<\/(?:\w+:)?authors>/);i&&i[1]&&i[1].split(/<\/\w*:?author>/).forEach(function(f){if(!(f===""||f.trim()==="")){var u=f.match(/<(?:\w+:)?author[^>]*>(.*)/);u&&r.push(u[1])}});var c=e.match(/<(?:\w+:)?commentList>([\s\S]*)<\/(?:\w+:)?commentList>/);return c&&c[1]&&c[1].split(/<\/\w*:?comment>/).forEach(function(f){if(!(f===""||f.trim()==="")){var u=f.match(/<(?:\w+:)?comment[^>]*>/);if(u){var h=Ge(u[0]),x={author:h.authorId&&r[h.authorId]||"sheetjsghost",ref:h.ref,guid:h.guid},m=Bn(h.ref);if(!(n.sheetRows&&n.sheetRows<=m.r)){var v=f.match(/<(?:\w+:)?text>([\s\S]*)<\/(?:\w+:)?text>/),y=!!v&&!!v[1]&&Lh(v[1])||{r:"",t:"",h:""};x.r=y.r,y.r=="<t></t>"&&(y.t=y.h=""),x.t=(y.t||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`),n.cellHTML&&(x.h=y.h),s.push(x)}}}}),s}function V5(e,n){var r=[],s=!1,i={},c=0;return e.replace(wn,function(u,h){var x=Ge(u);switch(Vr(x[0])){case"<?xml":break;case"<ThreadedComments":break;case"</ThreadedComments>":break;case"<threadedComment":i={author:x.personId,guid:x.id,ref:x.ref,T:1};break;case"</threadedComment>":i.t!=null&&r.push(i);break;case"<text>":case"<text":c=h+u.length;break;case"</text>":i.t=e.slice(c,h).replace(/\r\n/g,`
`).replace(/\r/g,`
`);break;case"<mentions":case"<mentions>":s=!0;break;case"</mentions>":s=!1;break;case"<extLst":case"<extLst>":case"</extLst>":case"<extLst/>":break;case"<ext":s=!0;break;case"</ext>":s=!1;break;default:if(!s&&n.WTF)throw new Error("unrecognized "+x[0]+" in threaded comments")}return u}),r}function K5(e,n){var r=[],s=!1;return e.replace(wn,function(c){var f=Ge(c);switch(Vr(f[0])){case"<?xml":break;case"<personList":break;case"</personList>":break;case"<person":r.push({name:f.displayname,id:f.id});break;case"</person>":break;case"<extLst":case"<extLst>":case"</extLst>":case"<extLst/>":break;case"<ext":s=!0;break;case"</ext>":s=!1;break;default:if(!s&&n.WTF)throw new Error("unrecognized "+f[0]+" in threaded comments")}return c}),r}function Y5(e){var n={};n.iauthor=e.read_shift(4);var r=Ys(e);return n.rfx=r.s,n.ref=Ke(r.s),e.l+=16,n}var J5=Cn;function Q5(e,n){var r=[],s=[],i={},c=!1;return _a(e,function(u,h,x){switch(x){case 632:s.push(u);break;case 635:i=u;break;case 637:i.t=u.t,i.h=u.h,i.r=u.r;break;case 636:if(i.author=s[i.iauthor],delete i.iauthor,n.sheetRows&&i.rfx&&n.sheetRows<=i.rfx.r)break;i.t||(i.t=""),delete i.rfx,r.push(i);break;case 3072:break;case 35:c=!0;break;case 36:c=!1;break;case 37:break;case 38:break;default:if(!h.T){if(!c||n.WTF)throw new Error("Unexpected record 0x"+x.toString(16))}}}),r}var Z5="application/vnd.ms-office.vbaProject";function $5(e){var n=ct.utils.cfb_new({root:"R"});return e.FullPaths.forEach(function(r,s){if(!(r.slice(-1)==="/"||!r.match(/_VBA_PROJECT_CUR/))){var i=r.replace(/^[^\/]*/,"R").replace(/\/_VBA_PROJECT_CUR\u0000*/,"");ct.utils.cfb_add(n,i,e.FileIndex[s].content)}}),ct.write(n)}function eD(){return{"!type":"dialog"}}function tD(){return{"!type":"dialog"}}function nD(){return{"!type":"macro"}}function rD(){return{"!type":"macro"}}var Vi=(function(){var e=/(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g,n={r:0,c:0};function r(s,i,c,f){var u=!1,h=!1;c.length==0?h=!0:c.charAt(0)=="["&&(h=!0,c=c.slice(1,-1)),f.length==0?u=!0:f.charAt(0)=="["&&(u=!0,f=f.slice(1,-1));var x=c.length>0?parseInt(c,10)|0:0,m=f.length>0?parseInt(f,10)|0:0;return u?m+=n.c:--m,h?x+=n.r:--x,i+(u?"":"$")+nn(m)+(h?"":"$")+mn(x)}return function(i,c){return n=c,i.replace(e,r)}})(),hb=/(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g,aD=(function(){return function(n,r){return n.replace(hb,function(s,i,c,f,u,h){var x=Bh(f)-(c?0:r.c),m=Dh(h)-(u?0:r.r),v=m==0?"":u?m+1:"["+m+"]",y=x==0?"":c?x+1:"["+x+"]";return i+"R"+v+"C"+y})}})();function xb(e,n){return e.replace(hb,function(r,s,i,c,f,u){return s+(i=="$"?i+c:nn(Bh(c)+n.c))+(f=="$"?f+u:mn(Dh(u)+n.r))})}function sD(e,n,r){var s=e0(n),i=s.s,c=Bn(r),f={r:c.r-i.r,c:c.c-i.c};return xb(e,f)}function iD(e){return e.length!=1}function Zg(e){return e.replace(/_xlfn\./g,"")}function Yt(e){e.l+=1}function rs(e,n){var r=e.read_shift(2);return[r&16383,r>>14&1,r>>15&1]}function pb(e,n,r){var s=2;if(r){if(r.biff>=2&&r.biff<=5)return mb(e);r.biff==12&&(s=4)}var i=e.read_shift(s),c=e.read_shift(s),f=rs(e),u=rs(e);return{s:{r:i,c:f[0],cRel:f[1],rRel:f[2]},e:{r:c,c:u[0],cRel:u[1],rRel:u[2]}}}function mb(e){var n=rs(e),r=rs(e),s=e.read_shift(1),i=e.read_shift(1);return{s:{r:n[0],c:s,cRel:n[1],rRel:n[2]},e:{r:r[0],c:i,cRel:r[1],rRel:r[2]}}}function lD(e,n,r){if(r.biff<8)return mb(e);var s=e.read_shift(r.biff==12?4:2),i=e.read_shift(r.biff==12?4:2),c=rs(e),f=rs(e);return{s:{r:s,c:c[0],cRel:c[1],rRel:c[2]},e:{r:i,c:f[0],cRel:f[1],rRel:f[2]}}}function gb(e,n,r){if(r&&r.biff>=2&&r.biff<=5)return oD(e);var s=e.read_shift(r&&r.biff==12?4:2),i=rs(e);return{r:s,c:i[0],cRel:i[1],rRel:i[2]}}function oD(e){var n=rs(e),r=e.read_shift(1);return{r:n[0],c:r,cRel:n[1],rRel:n[2]}}function cD(e){var n=e.read_shift(2),r=e.read_shift(2);return{r:n,c:r&255,fQuoted:!!(r&16384),cRel:r>>15,rRel:r>>15}}function fD(e,n,r){var s=r&&r.biff?r.biff:8;if(s>=2&&s<=5)return uD(e);var i=e.read_shift(s>=12?4:2),c=e.read_shift(2),f=(c&16384)>>14,u=(c&32768)>>15;if(c&=16383,u==1)for(;i>524287;)i-=1048576;if(f==1)for(;c>8191;)c=c-16384;return{r:i,c,cRel:f,rRel:u}}function uD(e){var n=e.read_shift(2),r=e.read_shift(1),s=(n&32768)>>15,i=(n&16384)>>14;return n&=16383,s==1&&n>=8192&&(n=n-16384),i==1&&r>=128&&(r=r-256),{r:n,c:r,cRel:i,rRel:s}}function dD(e,n,r){var s=(e[e.l++]&96)>>5,i=pb(e,r.biff>=2&&r.biff<=5?6:8,r);return[s,i]}function hD(e,n,r){var s=(e[e.l++]&96)>>5,i=e.read_shift(2,"i"),c=8;if(r)switch(r.biff){case 5:e.l+=12,c=6;break;case 12:c=12;break}var f=pb(e,c,r);return[s,i,f]}function xD(e,n,r){var s=(e[e.l++]&96)>>5;return e.l+=r&&r.biff>8?12:r.biff<8?6:8,[s]}function pD(e,n,r){var s=(e[e.l++]&96)>>5,i=e.read_shift(2),c=8;if(r)switch(r.biff){case 5:e.l+=12,c=6;break;case 12:c=12;break}return e.l+=c,[s,i]}function mD(e,n,r){var s=(e[e.l++]&96)>>5,i=lD(e,n-1,r);return[s,i]}function gD(e,n,r){var s=(e[e.l++]&96)>>5;return e.l+=r.biff==2?6:r.biff==12?14:7,[s]}function $g(e){var n=e[e.l+1]&1,r=1;return e.l+=4,[n,r]}function vD(e,n,r){e.l+=2;for(var s=e.read_shift(r&&r.biff==2?1:2),i=[],c=0;c<=s;++c)i.push(e.read_shift(r&&r.biff==2?1:2));return i}function yD(e,n,r){var s=e[e.l+1]&255?1:0;return e.l+=2,[s,e.read_shift(r&&r.biff==2?1:2)]}function bD(e,n,r){var s=e[e.l+1]&255?1:0;return e.l+=2,[s,e.read_shift(r&&r.biff==2?1:2)]}function SD(e){var n=e[e.l+1]&255?1:0;return e.l+=2,[n,e.read_shift(2)]}function _D(e,n,r){var s=e[e.l+1]&255?1:0;return e.l+=r&&r.biff==2?3:4,[s]}function vb(e){var n=e.read_shift(1),r=e.read_shift(1);return[n,r]}function CD(e){return e.read_shift(2),vb(e)}function ED(e){return e.read_shift(2),vb(e)}function wD(e,n,r){var s=(e[e.l]&96)>>5;e.l+=1;var i=gb(e,0,r);return[s,i]}function AD(e,n,r){var s=(e[e.l]&96)>>5;e.l+=1;var i=fD(e,0,r);return[s,i]}function TD(e,n,r){var s=(e[e.l]&96)>>5;e.l+=1;var i=e.read_shift(2);r&&r.biff==5&&(e.l+=12);var c=gb(e,0,r);return[s,i,c]}function kD(e,n,r){var s=(e[e.l]&96)>>5;e.l+=1;var i=e.read_shift(r&&r.biff<=3?1:2);return[DB[i],Sb[i],s]}function DD(e,n,r){var s=e[e.l++],i=e.read_shift(1),c=r&&r.biff<=3?[s==88?-1:0,e.read_shift(1)]:BD(e);return[i,(c[0]===0?Sb:kB)[c[1]]]}function BD(e){return[e[e.l+1]>>7,e.read_shift(2)&32767]}function FD(e,n,r){e.l+=r&&r.biff==2?3:4}function RD(e,n,r){if(e.l++,r&&r.biff==12)return[e.read_shift(4,"i"),0];var s=e.read_shift(2),i=e.read_shift(r&&r.biff==2?1:2);return[s,i]}function ND(e){return e.l++,Js[e.read_shift(1)]}function OD(e){return e.l++,e.read_shift(2)}function MD(e){return e.l++,e.read_shift(1)!==0}function LD(e){return e.l++,Sn(e)}function jD(e,n,r){return e.l++,kl(e,n-1,r)}function ID(e,n){var r=[e.read_shift(1)];if(n==12)switch(r[0]){case 2:r[0]=4;break;case 4:r[0]=16;break;case 0:r[0]=1;break;case 1:r[0]=2;break}switch(r[0]){case 4:r[1]=Pt(e,1)?"TRUE":"FALSE",n!=12&&(e.l+=7);break;case 37:case 16:r[1]=Js[e[e.l]],e.l+=n==12?4:8;break;case 0:e.l+=8;break;case 1:r[1]=Sn(e);break;case 2:r[1]=Qs(e,0,{biff:n>0&&n<8?2:n});break;default:throw new Error("Bad SerAr: "+r[0])}return r}function HD(e,n,r){for(var s=e.read_shift(r.biff==12?4:2),i=[],c=0;c!=s;++c)i.push((r.biff==12?Ys:Gc)(e));return i}function zD(e,n,r){var s=0,i=0;r.biff==12?(s=e.read_shift(4),i=e.read_shift(4)):(i=1+e.read_shift(1),s=1+e.read_shift(2)),r.biff>=2&&r.biff<8&&(--s,--i==0&&(i=256));for(var c=0,f=[];c!=s&&(f[c]=[]);++c)for(var u=0;u!=i;++u)f[c][u]=ID(e,r.biff);return f}function UD(e,n,r){var s=e.read_shift(1)>>>5&3,i=!r||r.biff>=8?4:2,c=e.read_shift(i);switch(r.biff){case 2:e.l+=5;break;case 3:case 4:e.l+=8;break;case 5:e.l+=12;break}return[s,0,c]}function WD(e,n,r){if(r.biff==5)return PD(e);var s=e.read_shift(1)>>>5&3,i=e.read_shift(2),c=e.read_shift(4);return[s,i,c]}function PD(e){var n=e.read_shift(1)>>>5&3,r=e.read_shift(2,"i");e.l+=8;var s=e.read_shift(2);return e.l+=12,[n,r,s]}function XD(e,n,r){var s=e.read_shift(1)>>>5&3;e.l+=r&&r.biff==2?3:4;var i=e.read_shift(r&&r.biff==2?1:2);return[s,i]}function GD(e,n,r){var s=e.read_shift(1)>>>5&3,i=e.read_shift(r&&r.biff==2?1:2);return[s,i]}function qD(e,n,r){var s=e.read_shift(1)>>>5&3;return e.l+=4,r.biff<8&&e.l--,r.biff==12&&(e.l+=2),[s]}function VD(e,n,r){var s=(e[e.l++]&96)>>5,i=e.read_shift(2),c=4;if(r)switch(r.biff){case 5:c=15;break;case 12:c=6;break}return e.l+=c,[s,i]}var KD=En,YD=En,JD=En;function Bl(e,n,r){return e.l+=2,[cD(e)]}function Ih(e){return e.l+=6,[]}var QD=Bl,ZD=Ih,$D=Ih,eB=Bl;function yb(e){return e.l+=2,[Qt(e),e.read_shift(2)&1]}var tB=Bl,nB=yb,rB=Ih,aB=Bl,sB=Bl,iB=["Data","All","Headers","??","?Data2","??","?DataHeaders","??","Totals","??","??","??","?DataTotals","??","??","??","?Current"];function lB(e){e.l+=2;var n=e.read_shift(2),r=e.read_shift(2),s=e.read_shift(4),i=e.read_shift(2),c=e.read_shift(2),f=iB[r>>2&31];return{ixti:n,coltype:r&3,rt:f,idx:s,c:i,C:c}}function oB(e){return e.l+=2,[e.read_shift(4)]}function cB(e,n,r){return e.l+=5,e.l+=2,e.l+=r.biff==2?1:4,["PTGSHEET"]}function fB(e,n,r){return e.l+=r.biff==2?4:5,["PTGENDSHEET"]}function uB(e){var n=e.read_shift(1)>>>5&3,r=e.read_shift(2);return[n,r]}function dB(e){var n=e.read_shift(1)>>>5&3,r=e.read_shift(2);return[n,r]}function hB(e){return e.l+=4,[0,0]}var ev={1:{n:"PtgExp",f:RD},2:{n:"PtgTbl",f:JD},3:{n:"PtgAdd",f:Yt},4:{n:"PtgSub",f:Yt},5:{n:"PtgMul",f:Yt},6:{n:"PtgDiv",f:Yt},7:{n:"PtgPower",f:Yt},8:{n:"PtgConcat",f:Yt},9:{n:"PtgLt",f:Yt},10:{n:"PtgLe",f:Yt},11:{n:"PtgEq",f:Yt},12:{n:"PtgGe",f:Yt},13:{n:"PtgGt",f:Yt},14:{n:"PtgNe",f:Yt},15:{n:"PtgIsect",f:Yt},16:{n:"PtgUnion",f:Yt},17:{n:"PtgRange",f:Yt},18:{n:"PtgUplus",f:Yt},19:{n:"PtgUminus",f:Yt},20:{n:"PtgPercent",f:Yt},21:{n:"PtgParen",f:Yt},22:{n:"PtgMissArg",f:Yt},23:{n:"PtgStr",f:jD},26:{n:"PtgSheet",f:cB},27:{n:"PtgEndSheet",f:fB},28:{n:"PtgErr",f:ND},29:{n:"PtgBool",f:MD},30:{n:"PtgInt",f:OD},31:{n:"PtgNum",f:LD},32:{n:"PtgArray",f:gD},33:{n:"PtgFunc",f:kD},34:{n:"PtgFuncVar",f:DD},35:{n:"PtgName",f:UD},36:{n:"PtgRef",f:wD},37:{n:"PtgArea",f:dD},38:{n:"PtgMemArea",f:XD},39:{n:"PtgMemErr",f:KD},40:{n:"PtgMemNoMem",f:YD},41:{n:"PtgMemFunc",f:GD},42:{n:"PtgRefErr",f:qD},43:{n:"PtgAreaErr",f:xD},44:{n:"PtgRefN",f:AD},45:{n:"PtgAreaN",f:mD},46:{n:"PtgMemAreaN",f:uB},47:{n:"PtgMemNoMemN",f:dB},57:{n:"PtgNameX",f:WD},58:{n:"PtgRef3d",f:TD},59:{n:"PtgArea3d",f:hD},60:{n:"PtgRefErr3d",f:VD},61:{n:"PtgAreaErr3d",f:pD},255:{}},xB={64:32,96:32,65:33,97:33,66:34,98:34,67:35,99:35,68:36,100:36,69:37,101:37,70:38,102:38,71:39,103:39,72:40,104:40,73:41,105:41,74:42,106:42,75:43,107:43,76:44,108:44,77:45,109:45,78:46,110:46,79:47,111:47,88:34,120:34,89:57,121:57,90:58,122:58,91:59,123:59,92:60,124:60,93:61,125:61},pB={1:{n:"PtgElfLel",f:yb},2:{n:"PtgElfRw",f:aB},3:{n:"PtgElfCol",f:QD},6:{n:"PtgElfRwV",f:sB},7:{n:"PtgElfColV",f:eB},10:{n:"PtgElfRadical",f:tB},11:{n:"PtgElfRadicalS",f:rB},13:{n:"PtgElfColS",f:ZD},15:{n:"PtgElfColSV",f:$D},16:{n:"PtgElfRadicalLel",f:nB},25:{n:"PtgList",f:lB},29:{n:"PtgSxName",f:oB},255:{}},mB={0:{n:"PtgAttrNoop",f:hB},1:{n:"PtgAttrSemi",f:_D},2:{n:"PtgAttrIf",f:bD},4:{n:"PtgAttrChoose",f:vD},8:{n:"PtgAttrGoto",f:yD},16:{n:"PtgAttrSum",f:FD},32:{n:"PtgAttrBaxcel",f:$g},33:{n:"PtgAttrBaxcel",f:$g},64:{n:"PtgAttrSpace",f:CD},65:{n:"PtgAttrSpaceSemi",f:ED},128:{n:"PtgAttrIfError",f:SD},255:{}};function Fl(e,n,r,s){if(s.biff<8)return En(e,n);for(var i=e.l+n,c=[],f=0;f!==r.length;++f)switch(r[f][0]){case"PtgArray":r[f][1]=zD(e,0,s),c.push(r[f][1]);break;case"PtgMemArea":r[f][2]=HD(e,r[f][1],s),c.push(r[f][2]);break;case"PtgExp":s&&s.biff==12&&(r[f][1][1]=e.read_shift(4),c.push(r[f][1]));break;case"PtgList":case"PtgElfRadicalS":case"PtgElfColS":case"PtgElfColSV":throw"Unsupported "+r[f][0]}return n=i-e.l,n!==0&&c.push(En(e,n)),c}function Rl(e,n,r){for(var s=e.l+n,i,c,f=[];s!=e.l;)n=s-e.l,c=e[e.l],i=ev[c]||ev[xB[c]],(c===24||c===25)&&(i=(c===24?pB:mB)[e[e.l+1]]),!i||!i.f?En(e,n):f.push([i.n,i.f(e,n,r)]);return f}function gB(e){for(var n=[],r=0;r<e.length;++r){for(var s=e[r],i=[],c=0;c<s.length;++c){var f=s[c];f?f[0]===2?i.push('"'+f[1].replace(/"/g,'""')+'"'):i.push(f[1]):i.push("")}n.push(i.join(","))}return n.join(";")}var vB={PtgAdd:"+",PtgConcat:"&",PtgDiv:"/",PtgEq:"=",PtgGe:">=",PtgGt:">",PtgLe:"<=",PtgLt:"<",PtgMul:"*",PtgNe:"<>",PtgPower:"^",PtgSub:"-"};function yB(e,n){if(!e&&!(n&&n.biff<=5&&n.biff>=2))throw new Error("empty sheet name");return/[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(e)?"'"+e+"'":e}function bb(e,n,r){if(!e)return"SH33TJSERR0";if(r.biff>8&&(!e.XTI||!e.XTI[n]))return e.SheetNames[n];if(!e.XTI)return"SH33TJSERR6";var s=e.XTI[n];if(r.biff<8)return n>1e4&&(n-=65536),n<0&&(n=-n),n==0?"":e.XTI[n-1];if(!s)return"SH33TJSERR1";var i="";if(r.biff>8)switch(e[s[0]][0]){case 357:return i=s[1]==-1?"#REF":e.SheetNames[s[1]],s[1]==s[2]?i:i+":"+e.SheetNames[s[2]];case 358:return r.SID!=null?e.SheetNames[r.SID]:"SH33TJSSAME"+e[s[0]][0];default:return"SH33TJSSRC"+e[s[0]][0]}switch(e[s[0]][0][0]){case 1025:return i=s[1]==-1?"#REF":e.SheetNames[s[1]]||"SH33TJSERR3",s[1]==s[2]?i:i+":"+e.SheetNames[s[2]];case 14849:return e[s[0]].slice(1).map(function(c){return c.Name}).join(";;");default:return e[s[0]][0][3]?(i=s[1]==-1?"#REF":e[s[0]][0][3][s[1]]||"SH33TJSERR4",s[1]==s[2]?i:i+":"+e[s[0]][0][3][s[2]]):"SH33TJSERR2"}}function tv(e,n,r){var s=bb(e,n,r);return s=="#REF"?s:yB(s,r)}function yn(e,n,r,s,i){var c=i&&i.biff||8,f={s:{c:0,r:0}},u=[],h,x,m,v=0,y=0,_,E="";if(!e[0]||!e[0][0])return"";for(var b=-1,C="",D=0,k=e[0].length;D<k;++D){var w=e[0][D];switch(w[0]){case"PtgUminus":u.push("-"+u.pop());break;case"PtgUplus":u.push("+"+u.pop());break;case"PtgPercent":u.push(u.pop()+"%");break;case"PtgAdd":case"PtgConcat":case"PtgDiv":case"PtgEq":case"PtgGe":case"PtgGt":case"PtgLe":case"PtgLt":case"PtgMul":case"PtgNe":case"PtgPower":case"PtgSub":if(h=u.pop(),x=u.pop(),b>=0){switch(e[0][b][1][0]){case 0:C=It(" ",e[0][b][1][1]);break;case 1:C=It("\r",e[0][b][1][1]);break;default:if(C="",i.WTF)throw new Error("Unexpected PtgAttrSpaceType "+e[0][b][1][0])}x=x+C,b=-1}u.push(x+vB[w[0]]+h);break;case"PtgIsect":h=u.pop(),x=u.pop(),u.push(x+" "+h);break;case"PtgUnion":h=u.pop(),x=u.pop(),u.push(x+","+h);break;case"PtgRange":h=u.pop(),x=u.pop(),u.push(x+":"+h);break;case"PtgAttrChoose":break;case"PtgAttrGoto":break;case"PtgAttrIf":break;case"PtgAttrIfError":break;case"PtgRef":m=al(w[1][1],f,i),u.push(sl(m,c));break;case"PtgRefN":m=r?al(w[1][1],r,i):w[1][1],u.push(sl(m,c));break;case"PtgRef3d":v=w[1][1],m=al(w[1][2],f,i),E=tv(s,v,i),u.push(E+"!"+sl(m,c));break;case"PtgFunc":case"PtgFuncVar":var H=w[1][0],V=w[1][1];H||(H=0),H&=127;var z=H==0?[]:u.slice(-H);u.length-=H,V==="User"&&(V=z.shift()),u.push(V+"("+z.join(",")+")");break;case"PtgBool":u.push(w[1]?"TRUE":"FALSE");break;case"PtgInt":u.push(w[1]);break;case"PtgNum":u.push(String(w[1]));break;case"PtgStr":u.push('"'+w[1].replace(/"/g,'""')+'"');break;case"PtgErr":u.push(w[1]);break;case"PtgAreaN":_=Mg(w[1][1],r?{s:r}:f,i),u.push(yd(_,i));break;case"PtgArea":_=Mg(w[1][1],f,i),u.push(yd(_,i));break;case"PtgArea3d":v=w[1][1],_=w[1][2],E=tv(s,v,i),u.push(E+"!"+yd(_,i));break;case"PtgAttrSum":u.push("SUM("+u.pop()+")");break;case"PtgAttrBaxcel":case"PtgAttrSemi":break;case"PtgName":y=w[1][2];var R=(s.names||[])[y-1]||(s[0]||[])[y],W=R?R.Name:"SH33TJSNAME"+String(y);W&&W.slice(0,6)=="_xlfn."&&!i.xlfn&&(W=W.slice(6)),u.push(W);break;case"PtgNameX":var U=w[1][1];y=w[1][2];var fe;if(i.biff<=5)U<0&&(U=-U),s[U]&&(fe=s[U][y]);else{var Z="";if(((s[U]||[])[0]||[])[0]==14849||(((s[U]||[])[0]||[])[0]==1025?s[U][y]&&s[U][y].itab>0&&(Z=s.SheetNames[s[U][y].itab-1]+"!"):Z=s.SheetNames[y-1]+"!"),s[U]&&s[U][y])Z+=s[U][y].Name;else if(s[0]&&s[0][y])Z+=s[0][y].Name;else{var L=(bb(s,U,i)||"").split(";;");L[y-1]?Z=L[y-1]:Z+="SH33TJSERRX"}u.push(Z);break}fe||(fe={Name:"SH33TJSERRY"}),u.push(fe.Name);break;case"PtgParen":var de="(",Ce=")";if(b>=0){switch(C="",e[0][b][1][0]){case 2:de=It(" ",e[0][b][1][1])+de;break;case 3:de=It("\r",e[0][b][1][1])+de;break;case 4:Ce=It(" ",e[0][b][1][1])+Ce;break;case 5:Ce=It("\r",e[0][b][1][1])+Ce;break;default:if(i.WTF)throw new Error("Unexpected PtgAttrSpaceType "+e[0][b][1][0])}b=-1}u.push(de+u.pop()+Ce);break;case"PtgRefErr":u.push("#REF!");break;case"PtgRefErr3d":u.push("#REF!");break;case"PtgExp":m={c:w[1][1],r:w[1][0]};var me={c:r.c,r:r.r};if(s.sharedf[Ke(m)]){var X=s.sharedf[Ke(m)];u.push(yn(X,f,me,s,i))}else{var ee=!1;for(h=0;h!=s.arrayf.length;++h)if(x=s.arrayf[h],!(m.c<x[0].s.c||m.c>x[0].e.c)&&!(m.r<x[0].s.r||m.r>x[0].e.r)){u.push(yn(x[1],f,me,s,i)),ee=!0;break}ee||u.push(w[1])}break;case"PtgArray":u.push("{"+gB(w[1])+"}");break;case"PtgMemArea":break;case"PtgAttrSpace":case"PtgAttrSpaceSemi":b=D;break;case"PtgTbl":break;case"PtgMemErr":break;case"PtgMissArg":u.push("");break;case"PtgAreaErr":u.push("#REF!");break;case"PtgAreaErr3d":u.push("#REF!");break;case"PtgList":u.push("Table"+w[1].idx+"[#"+w[1].rt+"]");break;case"PtgMemAreaN":case"PtgMemNoMemN":case"PtgAttrNoop":case"PtgSheet":case"PtgEndSheet":break;case"PtgMemFunc":break;case"PtgMemNoMem":break;case"PtgElfCol":case"PtgElfColS":case"PtgElfColSV":case"PtgElfColV":case"PtgElfLel":case"PtgElfRadical":case"PtgElfRadicalLel":case"PtgElfRadicalS":case"PtgElfRw":case"PtgElfRwV":throw new Error("Unsupported ELFs");case"PtgSxName":throw new Error("Unrecognized Formula Token: "+String(w));default:throw new Error("Unrecognized Formula Token: "+String(w))}var we=["PtgAttrSpace","PtgAttrSpaceSemi","PtgAttrGoto"];if(i.biff!=3&&b>=0&&we.indexOf(e[0][D][0])==-1){w=e[0][b];var K=!0;switch(w[1][0]){case 4:K=!1;case 0:C=It(" ",w[1][1]);break;case 5:K=!1;case 1:C=It("\r",w[1][1]);break;default:if(C="",i.WTF)throw new Error("Unexpected PtgAttrSpaceType "+w[1][0])}u.push((K?C:"")+u.pop()+(K?"":C)),b=-1}}if(u.length>1&&i.WTF)throw new Error("bad formula stack");return u[0]}function bB(e,n,r){var s=e.l+n,i=r.biff==2?1:2,c,f=e.read_shift(i);if(f==65535)return[[],En(e,n-2)];var u=Rl(e,f,r);return n!==f+i&&(c=Fl(e,n-f-i,u,r)),e.l=s,[u,c]}function SB(e,n,r){var s=e.l+n,i=r.biff==2?1:2,c,f=e.read_shift(i);if(f==65535)return[[],En(e,n-2)];var u=Rl(e,f,r);return n!==f+i&&(c=Fl(e,n-f-i,u,r)),e.l=s,[u,c]}function _B(e,n,r,s){var i=e.l+n,c=Rl(e,s,r),f;return i!==e.l&&(f=Fl(e,i-e.l,c,r)),[c,f]}function CB(e,n,r){var s=e.l+n,i,c=e.read_shift(2),f=Rl(e,c,r);return c==65535?[[],En(e,n-2)]:(n!==c+2&&(i=Fl(e,s-c-2,f,r)),[f,i])}function EB(e){var n;if(pa(e,e.l+6)!==65535)return[Sn(e),"n"];switch(e[e.l]){case 0:return e.l+=8,["String","s"];case 1:return n=e[e.l+2]===1,e.l+=8,[n,"b"];case 2:return n=e[e.l+2],e.l+=8,[n,"e"];case 3:return e.l+=8,["","s"]}return[]}function _d(e,n,r){var s=e.l+n,i=Kr(e);r.biff==2&&++e.l;var c=EB(e),f=e.read_shift(1);r.biff!=2&&(e.read_shift(1),r.biff>=5&&e.read_shift(4));var u=SB(e,s-e.l,r);return{cell:i,val:c[0],formula:u,shared:f>>3&1,tt:c[1]}}function qc(e,n,r){var s=e.read_shift(4),i=Rl(e,s,r),c=e.read_shift(4),f=c>0?Fl(e,c,i,r):null;return[i,f]}var wB=qc,Vc=qc,AB=qc,TB=qc,kB={0:"BEEP",1:"OPEN",2:"OPEN.LINKS",3:"CLOSE.ALL",4:"SAVE",5:"SAVE.AS",6:"FILE.DELETE",7:"PAGE.SETUP",8:"PRINT",9:"PRINTER.SETUP",10:"QUIT",11:"NEW.WINDOW",12:"ARRANGE.ALL",13:"WINDOW.SIZE",14:"WINDOW.MOVE",15:"FULL",16:"CLOSE",17:"RUN",22:"SET.PRINT.AREA",23:"SET.PRINT.TITLES",24:"SET.PAGE.BREAK",25:"REMOVE.PAGE.BREAK",26:"FONT",27:"DISPLAY",28:"PROTECT.DOCUMENT",29:"PRECISION",30:"A1.R1C1",31:"CALCULATE.NOW",32:"CALCULATION",34:"DATA.FIND",35:"EXTRACT",36:"DATA.DELETE",37:"SET.DATABASE",38:"SET.CRITERIA",39:"SORT",40:"DATA.SERIES",41:"TABLE",42:"FORMAT.NUMBER",43:"ALIGNMENT",44:"STYLE",45:"BORDER",46:"CELL.PROTECTION",47:"COLUMN.WIDTH",48:"UNDO",49:"CUT",50:"COPY",51:"PASTE",52:"CLEAR",53:"PASTE.SPECIAL",54:"EDIT.DELETE",55:"INSERT",56:"FILL.RIGHT",57:"FILL.DOWN",61:"DEFINE.NAME",62:"CREATE.NAMES",63:"FORMULA.GOTO",64:"FORMULA.FIND",65:"SELECT.LAST.CELL",66:"SHOW.ACTIVE.CELL",67:"GALLERY.AREA",68:"GALLERY.BAR",69:"GALLERY.COLUMN",70:"GALLERY.LINE",71:"GALLERY.PIE",72:"GALLERY.SCATTER",73:"COMBINATION",74:"PREFERRED",75:"ADD.OVERLAY",76:"GRIDLINES",77:"SET.PREFERRED",78:"AXES",79:"LEGEND",80:"ATTACH.TEXT",81:"ADD.ARROW",82:"SELECT.CHART",83:"SELECT.PLOT.AREA",84:"PATTERNS",85:"MAIN.CHART",86:"OVERLAY",87:"SCALE",88:"FORMAT.LEGEND",89:"FORMAT.TEXT",90:"EDIT.REPEAT",91:"PARSE",92:"JUSTIFY",93:"HIDE",94:"UNHIDE",95:"WORKSPACE",96:"FORMULA",97:"FORMULA.FILL",98:"FORMULA.ARRAY",99:"DATA.FIND.NEXT",100:"DATA.FIND.PREV",101:"FORMULA.FIND.NEXT",102:"FORMULA.FIND.PREV",103:"ACTIVATE",104:"ACTIVATE.NEXT",105:"ACTIVATE.PREV",106:"UNLOCKED.NEXT",107:"UNLOCKED.PREV",108:"COPY.PICTURE",109:"SELECT",110:"DELETE.NAME",111:"DELETE.FORMAT",112:"VLINE",113:"HLINE",114:"VPAGE",115:"HPAGE",116:"VSCROLL",117:"HSCROLL",118:"ALERT",119:"NEW",120:"CANCEL.COPY",121:"SHOW.CLIPBOARD",122:"MESSAGE",124:"PASTE.LINK",125:"APP.ACTIVATE",126:"DELETE.ARROW",127:"ROW.HEIGHT",128:"FORMAT.MOVE",129:"FORMAT.SIZE",130:"FORMULA.REPLACE",131:"SEND.KEYS",132:"SELECT.SPECIAL",133:"APPLY.NAMES",134:"REPLACE.FONT",135:"FREEZE.PANES",136:"SHOW.INFO",137:"SPLIT",138:"ON.WINDOW",139:"ON.DATA",140:"DISABLE.INPUT",142:"OUTLINE",143:"LIST.NAMES",144:"FILE.CLOSE",145:"SAVE.WORKBOOK",146:"DATA.FORM",147:"COPY.CHART",148:"ON.TIME",149:"WAIT",150:"FORMAT.FONT",151:"FILL.UP",152:"FILL.LEFT",153:"DELETE.OVERLAY",155:"SHORT.MENUS",159:"SET.UPDATE.STATUS",161:"COLOR.PALETTE",162:"DELETE.STYLE",163:"WINDOW.RESTORE",164:"WINDOW.MAXIMIZE",166:"CHANGE.LINK",167:"CALCULATE.DOCUMENT",168:"ON.KEY",169:"APP.RESTORE",170:"APP.MOVE",171:"APP.SIZE",172:"APP.MINIMIZE",173:"APP.MAXIMIZE",174:"BRING.TO.FRONT",175:"SEND.TO.BACK",185:"MAIN.CHART.TYPE",186:"OVERLAY.CHART.TYPE",187:"SELECT.END",188:"OPEN.MAIL",189:"SEND.MAIL",190:"STANDARD.FONT",191:"CONSOLIDATE",192:"SORT.SPECIAL",193:"GALLERY.3D.AREA",194:"GALLERY.3D.COLUMN",195:"GALLERY.3D.LINE",196:"GALLERY.3D.PIE",197:"VIEW.3D",198:"GOAL.SEEK",199:"WORKGROUP",200:"FILL.GROUP",201:"UPDATE.LINK",202:"PROMOTE",203:"DEMOTE",204:"SHOW.DETAIL",206:"UNGROUP",207:"OBJECT.PROPERTIES",208:"SAVE.NEW.OBJECT",209:"SHARE",210:"SHARE.NAME",211:"DUPLICATE",212:"APPLY.STYLE",213:"ASSIGN.TO.OBJECT",214:"OBJECT.PROTECTION",215:"HIDE.OBJECT",216:"SET.EXTRACT",217:"CREATE.PUBLISHER",218:"SUBSCRIBE.TO",219:"ATTRIBUTES",220:"SHOW.TOOLBAR",222:"PRINT.PREVIEW",223:"EDIT.COLOR",224:"SHOW.LEVELS",225:"FORMAT.MAIN",226:"FORMAT.OVERLAY",227:"ON.RECALC",228:"EDIT.SERIES",229:"DEFINE.STYLE",240:"LINE.PRINT",243:"ENTER.DATA",249:"GALLERY.RADAR",250:"MERGE.STYLES",251:"EDITION.OPTIONS",252:"PASTE.PICTURE",253:"PASTE.PICTURE.LINK",254:"SPELLING",256:"ZOOM",259:"INSERT.OBJECT",260:"WINDOW.MINIMIZE",265:"SOUND.NOTE",266:"SOUND.PLAY",267:"FORMAT.SHAPE",268:"EXTEND.POLYGON",269:"FORMAT.AUTO",272:"GALLERY.3D.BAR",273:"GALLERY.3D.SURFACE",274:"FILL.AUTO",276:"CUSTOMIZE.TOOLBAR",277:"ADD.TOOL",278:"EDIT.OBJECT",279:"ON.DOUBLECLICK",280:"ON.ENTRY",281:"WORKBOOK.ADD",282:"WORKBOOK.MOVE",283:"WORKBOOK.COPY",284:"WORKBOOK.OPTIONS",285:"SAVE.WORKSPACE",288:"CHART.WIZARD",289:"DELETE.TOOL",290:"MOVE.TOOL",291:"WORKBOOK.SELECT",292:"WORKBOOK.ACTIVATE",293:"ASSIGN.TO.TOOL",295:"COPY.TOOL",296:"RESET.TOOL",297:"CONSTRAIN.NUMERIC",298:"PASTE.TOOL",302:"WORKBOOK.NEW",305:"SCENARIO.CELLS",306:"SCENARIO.DELETE",307:"SCENARIO.ADD",308:"SCENARIO.EDIT",309:"SCENARIO.SHOW",310:"SCENARIO.SHOW.NEXT",311:"SCENARIO.SUMMARY",312:"PIVOT.TABLE.WIZARD",313:"PIVOT.FIELD.PROPERTIES",314:"PIVOT.FIELD",315:"PIVOT.ITEM",316:"PIVOT.ADD.FIELDS",318:"OPTIONS.CALCULATION",319:"OPTIONS.EDIT",320:"OPTIONS.VIEW",321:"ADDIN.MANAGER",322:"MENU.EDITOR",323:"ATTACH.TOOLBARS",324:"VBAActivate",325:"OPTIONS.CHART",328:"VBA.INSERT.FILE",330:"VBA.PROCEDURE.DEFINITION",336:"ROUTING.SLIP",338:"ROUTE.DOCUMENT",339:"MAIL.LOGON",342:"INSERT.PICTURE",343:"EDIT.TOOL",344:"GALLERY.DOUGHNUT",350:"CHART.TREND",352:"PIVOT.ITEM.PROPERTIES",354:"WORKBOOK.INSERT",355:"OPTIONS.TRANSITION",356:"OPTIONS.GENERAL",370:"FILTER.ADVANCED",373:"MAIL.ADD.MAILER",374:"MAIL.DELETE.MAILER",375:"MAIL.REPLY",376:"MAIL.REPLY.ALL",377:"MAIL.FORWARD",378:"MAIL.NEXT.LETTER",379:"DATA.LABEL",380:"INSERT.TITLE",381:"FONT.PROPERTIES",382:"MACRO.OPTIONS",383:"WORKBOOK.HIDE",384:"WORKBOOK.UNHIDE",385:"WORKBOOK.DELETE",386:"WORKBOOK.NAME",388:"GALLERY.CUSTOM",390:"ADD.CHART.AUTOFORMAT",391:"DELETE.CHART.AUTOFORMAT",392:"CHART.ADD.DATA",393:"AUTO.OUTLINE",394:"TAB.ORDER",395:"SHOW.DIALOG",396:"SELECT.ALL",397:"UNGROUP.SHEETS",398:"SUBTOTAL.CREATE",399:"SUBTOTAL.REMOVE",400:"RENAME.OBJECT",412:"WORKBOOK.SCROLL",413:"WORKBOOK.NEXT",414:"WORKBOOK.PREV",415:"WORKBOOK.TAB.SPLIT",416:"FULL.SCREEN",417:"WORKBOOK.PROTECT",420:"SCROLLBAR.PROPERTIES",421:"PIVOT.SHOW.PAGES",422:"TEXT.TO.COLUMNS",423:"FORMAT.CHARTTYPE",424:"LINK.FORMAT",425:"TRACER.DISPLAY",430:"TRACER.NAVIGATE",431:"TRACER.CLEAR",432:"TRACER.ERROR",433:"PIVOT.FIELD.GROUP",434:"PIVOT.FIELD.UNGROUP",435:"CHECKBOX.PROPERTIES",436:"LABEL.PROPERTIES",437:"LISTBOX.PROPERTIES",438:"EDITBOX.PROPERTIES",439:"PIVOT.REFRESH",440:"LINK.COMBO",441:"OPEN.TEXT",442:"HIDE.DIALOG",443:"SET.DIALOG.FOCUS",444:"ENABLE.OBJECT",445:"PUSHBUTTON.PROPERTIES",446:"SET.DIALOG.DEFAULT",447:"FILTER",448:"FILTER.SHOW.ALL",449:"CLEAR.OUTLINE",450:"FUNCTION.WIZARD",451:"ADD.LIST.ITEM",452:"SET.LIST.ITEM",453:"REMOVE.LIST.ITEM",454:"SELECT.LIST.ITEM",455:"SET.CONTROL.VALUE",456:"SAVE.COPY.AS",458:"OPTIONS.LISTS.ADD",459:"OPTIONS.LISTS.DELETE",460:"SERIES.AXES",461:"SERIES.X",462:"SERIES.Y",463:"ERRORBAR.X",464:"ERRORBAR.Y",465:"FORMAT.CHART",466:"SERIES.ORDER",467:"MAIL.LOGOFF",468:"CLEAR.ROUTING.SLIP",469:"APP.ACTIVATE.MICROSOFT",470:"MAIL.EDIT.MAILER",471:"ON.SHEET",472:"STANDARD.WIDTH",473:"SCENARIO.MERGE",474:"SUMMARY.INFO",475:"FIND.FILE",476:"ACTIVE.CELL.FONT",477:"ENABLE.TIPWIZARD",478:"VBA.MAKE.ADDIN",480:"INSERTDATATABLE",481:"WORKGROUP.OPTIONS",482:"MAIL.SEND.MAILER",485:"AUTOCORRECT",489:"POST.DOCUMENT",491:"PICKLIST",493:"VIEW.SHOW",494:"VIEW.DEFINE",495:"VIEW.DELETE",509:"SHEET.BACKGROUND",510:"INSERT.MAP.OBJECT",511:"OPTIONS.MENONO",517:"MSOCHECKS",518:"NORMAL",519:"LAYOUT",520:"RM.PRINT.AREA",521:"CLEAR.PRINT.AREA",522:"ADD.PRINT.AREA",523:"MOVE.BRK",545:"HIDECURR.NOTE",546:"HIDEALL.NOTES",547:"DELETE.NOTE",548:"TRAVERSE.NOTES",549:"ACTIVATE.NOTES",620:"PROTECT.REVISIONS",621:"UNPROTECT.REVISIONS",647:"OPTIONS.ME",653:"WEB.PUBLISH",667:"NEWWEBQUERY",673:"PIVOT.TABLE.CHART",753:"OPTIONS.SAVE",755:"OPTIONS.SPELL",808:"HIDEALL.INKANNOTS"},Sb={0:"COUNT",1:"IF",2:"ISNA",3:"ISERROR",4:"SUM",5:"AVERAGE",6:"MIN",7:"MAX",8:"ROW",9:"COLUMN",10:"NA",11:"NPV",12:"STDEV",13:"DOLLAR",14:"FIXED",15:"SIN",16:"COS",17:"TAN",18:"ATAN",19:"PI",20:"SQRT",21:"EXP",22:"LN",23:"LOG10",24:"ABS",25:"INT",26:"SIGN",27:"ROUND",28:"LOOKUP",29:"INDEX",30:"REPT",31:"MID",32:"LEN",33:"VALUE",34:"TRUE",35:"FALSE",36:"AND",37:"OR",38:"NOT",39:"MOD",40:"DCOUNT",41:"DSUM",42:"DAVERAGE",43:"DMIN",44:"DMAX",45:"DSTDEV",46:"VAR",47:"DVAR",48:"TEXT",49:"LINEST",50:"TREND",51:"LOGEST",52:"GROWTH",53:"GOTO",54:"HALT",55:"RETURN",56:"PV",57:"FV",58:"NPER",59:"PMT",60:"RATE",61:"MIRR",62:"IRR",63:"RAND",64:"MATCH",65:"DATE",66:"TIME",67:"DAY",68:"MONTH",69:"YEAR",70:"WEEKDAY",71:"HOUR",72:"MINUTE",73:"SECOND",74:"NOW",75:"AREAS",76:"ROWS",77:"COLUMNS",78:"OFFSET",79:"ABSREF",80:"RELREF",81:"ARGUMENT",82:"SEARCH",83:"TRANSPOSE",84:"ERROR",85:"STEP",86:"TYPE",87:"ECHO",88:"SET.NAME",89:"CALLER",90:"DEREF",91:"WINDOWS",92:"SERIES",93:"DOCUMENTS",94:"ACTIVE.CELL",95:"SELECTION",96:"RESULT",97:"ATAN2",98:"ASIN",99:"ACOS",100:"CHOOSE",101:"HLOOKUP",102:"VLOOKUP",103:"LINKS",104:"INPUT",105:"ISREF",106:"GET.FORMULA",107:"GET.NAME",108:"SET.VALUE",109:"LOG",110:"EXEC",111:"CHAR",112:"LOWER",113:"UPPER",114:"PROPER",115:"LEFT",116:"RIGHT",117:"EXACT",118:"TRIM",119:"REPLACE",120:"SUBSTITUTE",121:"CODE",122:"NAMES",123:"DIRECTORY",124:"FIND",125:"CELL",126:"ISERR",127:"ISTEXT",128:"ISNUMBER",129:"ISBLANK",130:"T",131:"N",132:"FOPEN",133:"FCLOSE",134:"FSIZE",135:"FREADLN",136:"FREAD",137:"FWRITELN",138:"FWRITE",139:"FPOS",140:"DATEVALUE",141:"TIMEVALUE",142:"SLN",143:"SYD",144:"DDB",145:"GET.DEF",146:"REFTEXT",147:"TEXTREF",148:"INDIRECT",149:"REGISTER",150:"CALL",151:"ADD.BAR",152:"ADD.MENU",153:"ADD.COMMAND",154:"ENABLE.COMMAND",155:"CHECK.COMMAND",156:"RENAME.COMMAND",157:"SHOW.BAR",158:"DELETE.MENU",159:"DELETE.COMMAND",160:"GET.CHART.ITEM",161:"DIALOG.BOX",162:"CLEAN",163:"MDETERM",164:"MINVERSE",165:"MMULT",166:"FILES",167:"IPMT",168:"PPMT",169:"COUNTA",170:"CANCEL.KEY",171:"FOR",172:"WHILE",173:"BREAK",174:"NEXT",175:"INITIATE",176:"REQUEST",177:"POKE",178:"EXECUTE",179:"TERMINATE",180:"RESTART",181:"HELP",182:"GET.BAR",183:"PRODUCT",184:"FACT",185:"GET.CELL",186:"GET.WORKSPACE",187:"GET.WINDOW",188:"GET.DOCUMENT",189:"DPRODUCT",190:"ISNONTEXT",191:"GET.NOTE",192:"NOTE",193:"STDEVP",194:"VARP",195:"DSTDEVP",196:"DVARP",197:"TRUNC",198:"ISLOGICAL",199:"DCOUNTA",200:"DELETE.BAR",201:"UNREGISTER",204:"USDOLLAR",205:"FINDB",206:"SEARCHB",207:"REPLACEB",208:"LEFTB",209:"RIGHTB",210:"MIDB",211:"LENB",212:"ROUNDUP",213:"ROUNDDOWN",214:"ASC",215:"DBCS",216:"RANK",219:"ADDRESS",220:"DAYS360",221:"TODAY",222:"VDB",223:"ELSE",224:"ELSE.IF",225:"END.IF",226:"FOR.CELL",227:"MEDIAN",228:"SUMPRODUCT",229:"SINH",230:"COSH",231:"TANH",232:"ASINH",233:"ACOSH",234:"ATANH",235:"DGET",236:"CREATE.OBJECT",237:"VOLATILE",238:"LAST.ERROR",239:"CUSTOM.UNDO",240:"CUSTOM.REPEAT",241:"FORMULA.CONVERT",242:"GET.LINK.INFO",243:"TEXT.BOX",244:"INFO",245:"GROUP",246:"GET.OBJECT",247:"DB",248:"PAUSE",251:"RESUME",252:"FREQUENCY",253:"ADD.TOOLBAR",254:"DELETE.TOOLBAR",255:"User",256:"RESET.TOOLBAR",257:"EVALUATE",258:"GET.TOOLBAR",259:"GET.TOOL",260:"SPELLING.CHECK",261:"ERROR.TYPE",262:"APP.TITLE",263:"WINDOW.TITLE",264:"SAVE.TOOLBAR",265:"ENABLE.TOOL",266:"PRESS.TOOL",267:"REGISTER.ID",268:"GET.WORKBOOK",269:"AVEDEV",270:"BETADIST",271:"GAMMALN",272:"BETAINV",273:"BINOMDIST",274:"CHIDIST",275:"CHIINV",276:"COMBIN",277:"CONFIDENCE",278:"CRITBINOM",279:"EVEN",280:"EXPONDIST",281:"FDIST",282:"FINV",283:"FISHER",284:"FISHERINV",285:"FLOOR",286:"GAMMADIST",287:"GAMMAINV",288:"CEILING",289:"HYPGEOMDIST",290:"LOGNORMDIST",291:"LOGINV",292:"NEGBINOMDIST",293:"NORMDIST",294:"NORMSDIST",295:"NORMINV",296:"NORMSINV",297:"STANDARDIZE",298:"ODD",299:"PERMUT",300:"POISSON",301:"TDIST",302:"WEIBULL",303:"SUMXMY2",304:"SUMX2MY2",305:"SUMX2PY2",306:"CHITEST",307:"CORREL",308:"COVAR",309:"FORECAST",310:"FTEST",311:"INTERCEPT",312:"PEARSON",313:"RSQ",314:"STEYX",315:"SLOPE",316:"TTEST",317:"PROB",318:"DEVSQ",319:"GEOMEAN",320:"HARMEAN",321:"SUMSQ",322:"KURT",323:"SKEW",324:"ZTEST",325:"LARGE",326:"SMALL",327:"QUARTILE",328:"PERCENTILE",329:"PERCENTRANK",330:"MODE",331:"TRIMMEAN",332:"TINV",334:"MOVIE.COMMAND",335:"GET.MOVIE",336:"CONCATENATE",337:"POWER",338:"PIVOT.ADD.DATA",339:"GET.PIVOT.TABLE",340:"GET.PIVOT.FIELD",341:"GET.PIVOT.ITEM",342:"RADIANS",343:"DEGREES",344:"SUBTOTAL",345:"SUMIF",346:"COUNTIF",347:"COUNTBLANK",348:"SCENARIO.GET",349:"OPTIONS.LISTS.GET",350:"ISPMT",351:"DATEDIF",352:"DATESTRING",353:"NUMBERSTRING",354:"ROMAN",355:"OPEN.DIALOG",356:"SAVE.DIALOG",357:"VIEW.GET",358:"GETPIVOTDATA",359:"HYPERLINK",360:"PHONETIC",361:"AVERAGEA",362:"MAXA",363:"MINA",364:"STDEVPA",365:"VARPA",366:"STDEVA",367:"VARA",368:"BAHTTEXT",369:"THAIDAYOFWEEK",370:"THAIDIGIT",371:"THAIMONTHOFYEAR",372:"THAINUMSOUND",373:"THAINUMSTRING",374:"THAISTRINGLENGTH",375:"ISTHAIDIGIT",376:"ROUNDBAHTDOWN",377:"ROUNDBAHTUP",378:"THAIYEAR",379:"RTD",380:"CUBEVALUE",381:"CUBEMEMBER",382:"CUBEMEMBERPROPERTY",383:"CUBERANKEDMEMBER",384:"HEX2BIN",385:"HEX2DEC",386:"HEX2OCT",387:"DEC2BIN",388:"DEC2HEX",389:"DEC2OCT",390:"OCT2BIN",391:"OCT2HEX",392:"OCT2DEC",393:"BIN2DEC",394:"BIN2OCT",395:"BIN2HEX",396:"IMSUB",397:"IMDIV",398:"IMPOWER",399:"IMABS",400:"IMSQRT",401:"IMLN",402:"IMLOG2",403:"IMLOG10",404:"IMSIN",405:"IMCOS",406:"IMEXP",407:"IMARGUMENT",408:"IMCONJUGATE",409:"IMAGINARY",410:"IMREAL",411:"COMPLEX",412:"IMSUM",413:"IMPRODUCT",414:"SERIESSUM",415:"FACTDOUBLE",416:"SQRTPI",417:"QUOTIENT",418:"DELTA",419:"GESTEP",420:"ISEVEN",421:"ISODD",422:"MROUND",423:"ERF",424:"ERFC",425:"BESSELJ",426:"BESSELK",427:"BESSELY",428:"BESSELI",429:"XIRR",430:"XNPV",431:"PRICEMAT",432:"YIELDMAT",433:"INTRATE",434:"RECEIVED",435:"DISC",436:"PRICEDISC",437:"YIELDDISC",438:"TBILLEQ",439:"TBILLPRICE",440:"TBILLYIELD",441:"PRICE",442:"YIELD",443:"DOLLARDE",444:"DOLLARFR",445:"NOMINAL",446:"EFFECT",447:"CUMPRINC",448:"CUMIPMT",449:"EDATE",450:"EOMONTH",451:"YEARFRAC",452:"COUPDAYBS",453:"COUPDAYS",454:"COUPDAYSNC",455:"COUPNCD",456:"COUPNUM",457:"COUPPCD",458:"DURATION",459:"MDURATION",460:"ODDLPRICE",461:"ODDLYIELD",462:"ODDFPRICE",463:"ODDFYIELD",464:"RANDBETWEEN",465:"WEEKNUM",466:"AMORDEGRC",467:"AMORLINC",468:"CONVERT",724:"SHEETJS",469:"ACCRINT",470:"ACCRINTM",471:"WORKDAY",472:"NETWORKDAYS",473:"GCD",474:"MULTINOMIAL",475:"LCM",476:"FVSCHEDULE",477:"CUBEKPIMEMBER",478:"CUBESET",479:"CUBESETCOUNT",480:"IFERROR",481:"COUNTIFS",482:"SUMIFS",483:"AVERAGEIF",484:"AVERAGEIFS"},DB={2:1,3:1,10:0,15:1,16:1,17:1,18:1,19:0,20:1,21:1,22:1,23:1,24:1,25:1,26:1,27:2,30:2,31:3,32:1,33:1,34:0,35:0,38:1,39:2,40:3,41:3,42:3,43:3,44:3,45:3,47:3,48:2,53:1,61:3,63:0,65:3,66:3,67:1,68:1,69:1,70:1,71:1,72:1,73:1,74:0,75:1,76:1,77:1,79:2,80:2,83:1,85:0,86:1,89:0,90:1,94:0,95:0,97:2,98:1,99:1,101:3,102:3,105:1,106:1,108:2,111:1,112:1,113:1,114:1,117:2,118:1,119:4,121:1,126:1,127:1,128:1,129:1,130:1,131:1,133:1,134:1,135:1,136:2,137:2,138:2,140:1,141:1,142:3,143:4,144:4,161:1,162:1,163:1,164:1,165:2,172:1,175:2,176:2,177:3,178:2,179:1,184:1,186:1,189:3,190:1,195:3,196:3,197:1,198:1,199:3,201:1,207:4,210:3,211:1,212:2,213:2,214:1,215:1,225:0,229:1,230:1,231:1,232:1,233:1,234:1,235:3,244:1,247:4,252:2,257:1,261:1,271:1,273:4,274:2,275:2,276:2,277:3,278:3,279:1,280:3,281:3,282:3,283:1,284:1,285:2,286:4,287:3,288:2,289:4,290:3,291:3,292:3,293:4,294:1,295:3,296:1,297:3,298:1,299:2,300:3,301:3,302:4,303:2,304:2,305:2,306:2,307:2,308:2,309:3,310:2,311:2,312:2,313:2,314:2,315:2,316:4,325:2,326:2,327:2,328:2,331:2,332:2,337:2,342:1,343:1,346:2,347:1,350:4,351:3,352:1,353:2,360:1,368:1,369:1,370:1,371:1,372:1,373:1,374:1,375:1,376:1,377:1,378:1,382:3,385:1,392:1,393:1,396:2,397:2,398:2,399:1,400:1,401:1,402:1,403:1,404:1,405:1,406:1,407:1,408:1,409:1,410:1,414:4,415:1,416:1,417:2,420:1,421:1,422:2,424:1,425:2,426:2,427:2,428:2,430:3,438:3,439:3,440:3,443:2,444:2,445:2,446:2,447:6,448:6,449:2,450:2,464:2,468:3,476:2,479:1,480:2,65535:0};function nv(e){return e.slice(0,3)=="of:"&&(e=e.slice(3)),e.charCodeAt(0)==61&&(e=e.slice(1),e.charCodeAt(0)==61&&(e=e.slice(1))),e=e.replace(/COM\.MICROSOFT\./g,""),e=e.replace(/\[((?:\.[A-Z]+[0-9]+)(?::\.[A-Z]+[0-9]+)?)\]/g,function(n,r){return r.replace(/\./g,"")}),e=e.replace(/\[.(#[A-Z]*[?!])\]/g,"$1"),e.replace(/[;~]/g,",").replace(/\|/g,";")}function Cd(e){var n=e.split(":"),r=n[0].split(".")[0];return[r,n[0].split(".")[1]+(n.length>1?":"+(n[1].split(".")[1]||n[1].split(".")[0]):"")]}var cl={},Ki={};function fl(e,n){if(e){var r=[.7,.7,.75,.75,.3,.3];n=="xlml"&&(r=[1,1,1,1,.5,.5]),e.left==null&&(e.left=r[0]),e.right==null&&(e.right=r[1]),e.top==null&&(e.top=r[2]),e.bottom==null&&(e.bottom=r[3]),e.header==null&&(e.header=r[4]),e.footer==null&&(e.footer=r[5])}}function _b(e,n,r,s,i,c){try{s.cellNF&&(e.z=Je[n])}catch(u){if(s.WTF)throw u}if(!(e.t==="z"&&!s.cellStyles)){if(e.t==="d"&&typeof e.v=="string"&&(e.v=on(e.v)),(!s||s.cellText!==!1)&&e.t!=="z")try{if(Je[n]==null&&Ns(BA[n]||"General",n),e.t==="e")e.w=e.w||Js[e.v];else if(n===0)if(e.t==="n")(e.v|0)===e.v?e.w=e.v.toString(10):e.w=vl(e.v);else if(e.t==="d"){var f=Rn(e.v);(f|0)===f?e.w=f.toString(10):e.w=vl(f)}else{if(e.v===void 0)return"";e.w=Hs(e.v,Ki)}else e.t==="d"?e.w=Sr(n,Rn(e.v),Ki):e.w=Sr(n,e.v,Ki)}catch(u){if(s.WTF)throw u}if(s.cellStyles&&r!=null)try{e.s=c.Fills[r],e.s.fgColor&&e.s.fgColor.theme&&!e.s.fgColor.rgb&&(e.s.fgColor.rgb=Rc(i.themeElements.clrScheme[e.s.fgColor.theme].rgb,e.s.fgColor.tint||0),s.WTF&&(e.s.fgColor.raw_rgb=i.themeElements.clrScheme[e.s.fgColor.theme].rgb)),e.s.bgColor&&e.s.bgColor.theme&&(e.s.bgColor.rgb=Rc(i.themeElements.clrScheme[e.s.bgColor.theme].rgb,e.s.bgColor.tint||0),s.WTF&&(e.s.bgColor.raw_rgb=i.themeElements.clrScheme[e.s.bgColor.theme].rgb))}catch(u){if(s.WTF&&c.Fills)throw u}}}function BB(e,n){var r=Ht(n);r.s.r<=r.e.r&&r.s.c<=r.e.c&&r.s.r>=0&&r.s.c>=0&&(e["!ref"]=ft(r))}var FB=/<(?:\w:)?mergeCell ref="[A-Z0-9:]+"\s*[\/]?>/g,RB=/<(?:\w+:)?sheetData[^>]*>([\s\S]*)<\/(?:\w+:)?sheetData>/,NB=/<(?:\w:)?hyperlink [^>]*>/mg,OB=/"(\w*:\w*)"/,MB=/<(?:\w:)?col\b[^>]*[\/]?>/g,LB=/<(?:\w:)?autoFilter[^>]*([\/]|>([\s\S]*)<\/(?:\w:)?autoFilter)>/g,jB=/<(?:\w:)?pageMargins[^>]*\/>/g,Cb=/<(?:\w:)?sheetPr\b(?:[^>a-z][^>]*)?\/>/,IB=/<(?:\w:)?sheetPr[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetPr)>/,HB=/<(?:\w:)?sheetViews[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetViews)>/;function zB(e,n,r,s,i,c,f){if(!e)return e;s||(s={"!id":{}});var u=n.dense?[]:{},h={s:{r:2e6,c:2e6},e:{r:0,c:0}},x="",m="",v=e.match(RB);v?(x=e.slice(0,v.index),m=e.slice(v.index+v[0].length)):x=m=e;var y=x.match(Cb);y?Hh(y[0],u,i,r):(y=x.match(IB))&&UB(y[0],y[1]||"",u,i,r);var _=(x.match(/<(?:\w*:)?dimension/)||{index:-1}).index;if(_>0){var E=x.slice(_,_+50).match(OB);E&&BB(u,E[1])}var b=x.match(HB);b&&b[1]&&VB(b[1],i);var C=[];if(n.cellStyles){var D=x.match(MB);D&&XB(C,D)}v&&KB(v[1],u,n,h,c,f);var k=m.match(LB);k&&(u["!autofilter"]=GB(k[0]));var w=[],H=m.match(FB);if(H)for(_=0;_!=H.length;++_)w[_]=Ht(H[_].slice(H[_].indexOf('"')+1));var V=m.match(NB);V&&WB(u,V,s);var z=m.match(jB);if(z&&(u["!margins"]=PB(Ge(z[0]))),!u["!ref"]&&h.e.c>=h.s.c&&h.e.r>=h.s.r&&(u["!ref"]=ft(h)),n.sheetRows>0&&u["!ref"]){var R=Ht(u["!ref"]);n.sheetRows<=+R.e.r&&(R.e.r=n.sheetRows-1,R.e.r>h.e.r&&(R.e.r=h.e.r),R.e.r<R.s.r&&(R.s.r=R.e.r),R.e.c>h.e.c&&(R.e.c=h.e.c),R.e.c<R.s.c&&(R.s.c=R.e.c),u["!fullref"]=u["!ref"],u["!ref"]=ft(R))}return C.length>0&&(u["!cols"]=C),w.length>0&&(u["!merges"]=w),u}function Hh(e,n,r,s){var i=Ge(e);r.Sheets[s]||(r.Sheets[s]={}),i.codeName&&(r.Sheets[s].CodeName=dt(At(i.codeName)))}function UB(e,n,r,s,i){Hh(e.slice(0,e.indexOf(">")),r,s,i)}function WB(e,n,r){for(var s=Array.isArray(e),i=0;i!=n.length;++i){var c=Ge(At(n[i]),!0);if(!c.ref)return;var f=((r||{})["!id"]||[])[c.id];f?(c.Target=f.Target,c.location&&(c.Target+="#"+dt(c.location))):(c.Target="#"+dt(c.location),f={Target:c.Target,TargetMode:"Internal"}),c.Rel=f,c.tooltip&&(c.Tooltip=c.tooltip,delete c.tooltip);for(var u=Ht(c.ref),h=u.s.r;h<=u.e.r;++h)for(var x=u.s.c;x<=u.e.c;++x){var m=Ke({c:x,r:h});s?(e[h]||(e[h]=[]),e[h][x]||(e[h][x]={t:"z",v:void 0}),e[h][x].l=c):(e[m]||(e[m]={t:"z",v:void 0}),e[m].l=c)}}}function PB(e){var n={};return["left","right","top","bottom","header","footer"].forEach(function(r){e[r]&&(n[r]=parseFloat(e[r]))}),n}function XB(e,n){for(var r=!1,s=0;s!=n.length;++s){var i=Ge(n[s],!0);i.hidden&&(i.hidden=Rt(i.hidden));var c=parseInt(i.min,10)-1,f=parseInt(i.max,10)-1;for(i.outlineLevel&&(i.level=+i.outlineLevel||0),delete i.min,delete i.max,i.width=+i.width,!r&&i.width&&(r=!0,jh(i.width)),Zi(i);c<=f;)e[c++]=pn(i)}}function GB(e){var n={ref:(e.match(/ref="([^"]*)"/)||[])[1]};return n}var qB=/<(?:\w:)?sheetView(?:[^>a-z][^>]*)?\/?>/;function VB(e,n){n.Views||(n.Views=[{}]),(e.match(qB)||[]).forEach(function(r,s){var i=Ge(r);n.Views[s]||(n.Views[s]={}),+i.zoomScale&&(n.Views[s].zoom=+i.zoomScale),Rt(i.rightToLeft)&&(n.Views[s].RTL=!0)})}var KB=(function(){var e=/<(?:\w+:)?c[ \/>]/,n=/<\/(?:\w+:)?row>/,r=/r=["']([^"']*)["']/,s=/<(?:\w+:)?is>([\S\s]*?)<\/(?:\w+:)?is>/,i=/ref=["']([^"']*)["']/,c=yl("v"),f=yl("f");return function(h,x,m,v,y,_){for(var E=0,b="",C=[],D=[],k=0,w=0,H=0,V="",z,R,W=0,U=0,fe,Z,L=0,de=0,Ce=Array.isArray(_.CellXf),me,X=[],ee=[],we=Array.isArray(x),K=[],ne={},Te=!1,O=!!m.sheetStubs,J=h.split(n),P=0,G=J.length;P!=G;++P){b=J[P].trim();var ue=b.length;if(ue!==0){var he=0;e:for(E=0;E<ue;++E)switch(b[E]){case">":if(b[E-1]!="/"){++E;break e}if(m&&m.cellStyles){if(R=Ge(b.slice(he,E),!0),W=R.r!=null?parseInt(R.r,10):W+1,U=-1,m.sheetRows&&m.sheetRows<W)continue;ne={},Te=!1,R.ht&&(Te=!0,ne.hpt=parseFloat(R.ht),ne.hpx=Cl(ne.hpt)),R.hidden=="1"&&(Te=!0,ne.hidden=!0),R.outlineLevel!=null&&(Te=!0,ne.level=+R.outlineLevel),Te&&(K[W-1]=ne)}break;case"<":he=E;break}if(he>=E)break;if(R=Ge(b.slice(he,E),!0),W=R.r!=null?parseInt(R.r,10):W+1,U=-1,!(m.sheetRows&&m.sheetRows<W)){v.s.r>W-1&&(v.s.r=W-1),v.e.r<W-1&&(v.e.r=W-1),m&&m.cellStyles&&(ne={},Te=!1,R.ht&&(Te=!0,ne.hpt=parseFloat(R.ht),ne.hpx=Cl(ne.hpt)),R.hidden=="1"&&(Te=!0,ne.hidden=!0),R.outlineLevel!=null&&(Te=!0,ne.level=+R.outlineLevel),Te&&(K[W-1]=ne)),C=b.slice(E).split(e);for(var ve=0;ve!=C.length&&C[ve].trim().charAt(0)=="<";++ve);for(C=C.slice(ve),E=0;E!=C.length;++E)if(b=C[E].trim(),b.length!==0){if(D=b.match(r),k=E,w=0,H=0,b="<c "+(b.slice(0,1)=="<"?">":"")+b,D!=null&&D.length===2){for(k=0,V=D[1],w=0;w!=V.length&&!((H=V.charCodeAt(w)-64)<1||H>26);++w)k=26*k+H;--k,U=k}else++U;for(w=0;w!=b.length&&b.charCodeAt(w)!==62;++w);if(++w,R=Ge(b.slice(0,w),!0),R.r||(R.r=Ke({r:W-1,c:U})),V=b.slice(w),z={t:""},(D=V.match(c))!=null&&D[1]!==""&&(z.v=dt(D[1])),m.cellFormula){if((D=V.match(f))!=null&&D[1]!==""){if(z.f=dt(At(D[1])).replace(/\r\n/g,`
`),m.xlfn||(z.f=Zg(z.f)),D[0].indexOf('t="array"')>-1)z.F=(V.match(i)||[])[1],z.F.indexOf(":")>-1&&X.push([Ht(z.F),z.F]);else if(D[0].indexOf('t="shared"')>-1){Z=Ge(D[0]);var ye=dt(At(D[1]));m.xlfn||(ye=Zg(ye)),ee[parseInt(Z.si,10)]=[Z,ye,R.r]}}else(D=V.match(/<f[^>]*\/>/))&&(Z=Ge(D[0]),ee[Z.si]&&(z.f=sD(ee[Z.si][1],ee[Z.si][2],R.r)));var _e=Bn(R.r);for(w=0;w<X.length;++w)_e.r>=X[w][0].s.r&&_e.r<=X[w][0].e.r&&_e.c>=X[w][0].s.c&&_e.c<=X[w][0].e.c&&(z.F=X[w][1])}if(R.t==null&&z.v===void 0)if(z.f||z.F)z.v=0,z.t="n";else if(O)z.t="z";else continue;else z.t=R.t||"n";switch(v.s.c>U&&(v.s.c=U),v.e.c<U&&(v.e.c=U),z.t){case"n":if(z.v==""||z.v==null){if(!O)continue;z.t="z"}else z.v=parseFloat(z.v);break;case"s":if(typeof z.v>"u"){if(!O)continue;z.t="z"}else fe=cl[parseInt(z.v,10)],z.v=fe.t,z.r=fe.r,m.cellHTML&&(z.h=fe.h);break;case"str":z.t="s",z.v=z.v!=null?At(z.v):"",m.cellHTML&&(z.h=Ah(z.v));break;case"inlineStr":D=V.match(s),z.t="s",D!=null&&(fe=Lh(D[1]))?(z.v=fe.t,m.cellHTML&&(z.h=fe.h)):z.v="";break;case"b":z.v=Rt(z.v);break;case"d":m.cellDates?z.v=on(z.v,1):(z.v=Rn(on(z.v,1)),z.t="n");break;case"e":(!m||m.cellText!==!1)&&(z.w=z.v),z.v=Xy[z.v];break}if(L=de=0,me=null,Ce&&R.s!==void 0&&(me=_.CellXf[R.s],me!=null&&(me.numFmtId!=null&&(L=me.numFmtId),m.cellStyles&&me.fillId!=null&&(de=me.fillId))),_b(z,L,de,m,y,_),m.cellDates&&Ce&&z.t=="n"&&$i(Je[L])&&(z.t="d",z.v=Xc(z.v)),R.cm&&m.xlmeta){var Pe=(m.xlmeta.Cell||[])[+R.cm-1];Pe&&Pe.type=="XLDAPR"&&(z.D=!0)}if(we){var I=Bn(R.r);x[I.r]||(x[I.r]=[]),x[I.r][I.c]=z}else x[R.r]=z}}}}K.length>0&&(x["!rows"]=K)}})();function YB(e,n){var r={},s=e.l+n;r.r=e.read_shift(4),e.l+=4;var i=e.read_shift(2);e.l+=1;var c=e.read_shift(1);return e.l=s,c&7&&(r.level=c&7),c&16&&(r.hidden=!0),c&32&&(r.hpt=i/20),r}var JB=Ys;function QB(){}function ZB(e,n){var r={},s=e[e.l];return++e.l,r.above=!(s&64),r.left=!(s&128),e.l+=18,r.name=b6(e),r}function $B(e){var n=_r(e);return[n]}function eF(e){var n=Ks(e);return[n]}function tF(e){var n=_r(e),r=e.read_shift(1);return[n,r,"b"]}function nF(e){var n=Ks(e),r=e.read_shift(1);return[n,r,"b"]}function rF(e){var n=_r(e),r=e.read_shift(1);return[n,r,"e"]}function aF(e){var n=Ks(e),r=e.read_shift(1);return[n,r,"e"]}function sF(e){var n=_r(e),r=e.read_shift(4);return[n,r,"s"]}function iF(e){var n=Ks(e),r=e.read_shift(4);return[n,r,"s"]}function lF(e){var n=_r(e),r=Sn(e);return[n,r,"n"]}function Eb(e){var n=Ks(e),r=Sn(e);return[n,r,"n"]}function oF(e){var n=_r(e),r=Nh(e);return[n,r,"n"]}function cF(e){var n=Ks(e),r=Nh(e);return[n,r,"n"]}function fF(e){var n=_r(e),r=Fh(e);return[n,r,"is"]}function uF(e){var n=_r(e),r=Cn(e);return[n,r,"str"]}function dF(e){var n=Ks(e),r=Cn(e);return[n,r,"str"]}function hF(e,n,r){var s=e.l+n,i=_r(e);i.r=r["!row"];var c=e.read_shift(1),f=[i,c,"b"];if(r.cellFormula){e.l+=2;var u=Vc(e,s-e.l,r);f[3]=yn(u,null,i,r.supbooks,r)}else e.l=s;return f}function xF(e,n,r){var s=e.l+n,i=_r(e);i.r=r["!row"];var c=e.read_shift(1),f=[i,c,"e"];if(r.cellFormula){e.l+=2;var u=Vc(e,s-e.l,r);f[3]=yn(u,null,i,r.supbooks,r)}else e.l=s;return f}function pF(e,n,r){var s=e.l+n,i=_r(e);i.r=r["!row"];var c=Sn(e),f=[i,c,"n"];if(r.cellFormula){e.l+=2;var u=Vc(e,s-e.l,r);f[3]=yn(u,null,i,r.supbooks,r)}else e.l=s;return f}function mF(e,n,r){var s=e.l+n,i=_r(e);i.r=r["!row"];var c=Cn(e),f=[i,c,"str"];if(r.cellFormula){e.l+=2;var u=Vc(e,s-e.l,r);f[3]=yn(u,null,i,r.supbooks,r)}else e.l=s;return f}var gF=Ys;function vF(e,n){var r=e.l+n,s=Ys(e),i=Rh(e),c=Cn(e),f=Cn(e),u=Cn(e);e.l=r;var h={rfx:s,relId:i,loc:c,display:u};return f&&(h.Tooltip=f),h}function yF(){}function bF(e,n,r){var s=e.l+n,i=Uy(e),c=e.read_shift(1),f=[i];if(f[2]=c,r.cellFormula){var u=wB(e,s-e.l,r);f[1]=u}else e.l=s;return f}function SF(e,n,r){var s=e.l+n,i=Ys(e),c=[i];if(r.cellFormula){var f=TB(e,s-e.l,r);c[1]=f,e.l=s}else e.l=s;return c}var _F=["left","right","top","bottom","header","footer"];function CF(e){var n={};return _F.forEach(function(r){n[r]=Sn(e)}),n}function EF(e){var n=e.read_shift(2);return e.l+=28,{RTL:n&32}}function wF(){}function AF(){}function TF(e,n,r,s,i,c,f){if(!e)return e;var u=n||{};s||(s={"!id":{}});var h=u.dense?[]:{},x,m={s:{r:2e6,c:2e6},e:{r:0,c:0}},v=!1,y=!1,_,E,b,C,D,k,w,H,V,z=[];u.biff=12,u["!row"]=0;var R=0,W=!1,U=[],fe={},Z=u.supbooks||i.supbooks||[[]];if(Z.sharedf=fe,Z.arrayf=U,Z.SheetNames=i.SheetNames||i.Sheets.map(function(we){return we.name}),!u.supbooks&&(u.supbooks=Z,i.Names))for(var L=0;L<i.Names.length;++L)Z[0][L+1]=i.Names[L];var de=[],Ce=[],me=!1;Mc[16]={n:"BrtShortReal",f:Eb};var X;if(_a(e,function(K,ne,Te){if(!y)switch(Te){case 148:x=K;break;case 0:_=K,u.sheetRows&&u.sheetRows<=_.r&&(y=!0),H=mn(C=_.r),u["!row"]=_.r,(K.hidden||K.hpt||K.level!=null)&&(K.hpt&&(K.hpx=Cl(K.hpt)),Ce[K.r]=K);break;case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 13:case 14:case 15:case 16:case 17:case 18:case 62:switch(E={t:K[2]},K[2]){case"n":E.v=K[1];break;case"s":w=cl[K[1]],E.v=w.t,E.r=w.r;break;case"b":E.v=!!K[1];break;case"e":E.v=K[1],u.cellText!==!1&&(E.w=Js[E.v]);break;case"str":E.t="s",E.v=K[1];break;case"is":E.t="s",E.v=K[1].t;break}if((b=f.CellXf[K[0].iStyleRef])&&_b(E,b.numFmtId,null,u,c,f),D=K[0].c==-1?D+1:K[0].c,u.dense?(h[C]||(h[C]=[]),h[C][D]=E):h[nn(D)+H]=E,u.cellFormula){for(W=!1,R=0;R<U.length;++R){var O=U[R];_.r>=O[0].s.r&&_.r<=O[0].e.r&&D>=O[0].s.c&&D<=O[0].e.c&&(E.F=ft(O[0]),W=!0)}!W&&K.length>3&&(E.f=K[3])}if(m.s.r>_.r&&(m.s.r=_.r),m.s.c>D&&(m.s.c=D),m.e.r<_.r&&(m.e.r=_.r),m.e.c<D&&(m.e.c=D),u.cellDates&&b&&E.t=="n"&&$i(Je[b.numFmtId])){var J=Fs(E.v);J&&(E.t="d",E.v=new Date(J.y,J.m-1,J.d,J.H,J.M,J.S,J.u))}X&&(X.type=="XLDAPR"&&(E.D=!0),X=void 0);break;case 1:case 12:if(!u.sheetStubs||v)break;E={t:"z",v:void 0},D=K[0].c==-1?D+1:K[0].c,u.dense?(h[C]||(h[C]=[]),h[C][D]=E):h[nn(D)+H]=E,m.s.r>_.r&&(m.s.r=_.r),m.s.c>D&&(m.s.c=D),m.e.r<_.r&&(m.e.r=_.r),m.e.c<D&&(m.e.c=D),X&&(X.type=="XLDAPR"&&(E.D=!0),X=void 0);break;case 176:z.push(K);break;case 49:X=((u.xlmeta||{}).Cell||[])[K-1];break;case 494:var P=s["!id"][K.relId];for(P?(K.Target=P.Target,K.loc&&(K.Target+="#"+K.loc),K.Rel=P):K.relId==""&&(K.Target="#"+K.loc),C=K.rfx.s.r;C<=K.rfx.e.r;++C)for(D=K.rfx.s.c;D<=K.rfx.e.c;++D)u.dense?(h[C]||(h[C]=[]),h[C][D]||(h[C][D]={t:"z",v:void 0}),h[C][D].l=K):(k=Ke({c:D,r:C}),h[k]||(h[k]={t:"z",v:void 0}),h[k].l=K);break;case 426:if(!u.cellFormula)break;U.push(K),V=u.dense?h[C][D]:h[nn(D)+H],V.f=yn(K[1],m,{r:_.r,c:D},Z,u),V.F=ft(K[0]);break;case 427:if(!u.cellFormula)break;fe[Ke(K[0].s)]=K[1],V=u.dense?h[C][D]:h[nn(D)+H],V.f=yn(K[1],m,{r:_.r,c:D},Z,u);break;case 60:if(!u.cellStyles)break;for(;K.e>=K.s;)de[K.e--]={width:K.w/256,hidden:!!(K.flags&1),level:K.level},me||(me=!0,jh(K.w/256)),Zi(de[K.e+1]);break;case 161:h["!autofilter"]={ref:ft(K)};break;case 476:h["!margins"]=K;break;case 147:i.Sheets[r]||(i.Sheets[r]={}),K.name&&(i.Sheets[r].CodeName=K.name),(K.above||K.left)&&(h["!outline"]={above:K.above,left:K.left});break;case 137:i.Views||(i.Views=[{}]),i.Views[0]||(i.Views[0]={}),K.RTL&&(i.Views[0].RTL=!0);break;case 485:break;case 64:case 1053:break;case 151:break;case 152:case 175:case 644:case 625:case 562:case 396:case 1112:case 1146:case 471:case 1050:case 649:case 1105:case 589:case 607:case 564:case 1055:case 168:case 174:case 1180:case 499:case 507:case 550:case 171:case 167:case 1177:case 169:case 1181:case 551:case 552:case 661:case 639:case 478:case 537:case 477:case 536:case 1103:case 680:case 1104:case 1024:case 663:case 535:case 678:case 504:case 1043:case 428:case 170:case 3072:case 50:case 2070:case 1045:break;case 35:v=!0;break;case 36:v=!1;break;case 37:v=!0;break;case 38:v=!1;break;default:if(!ne.T){if(!v||u.WTF)throw new Error("Unexpected record 0x"+Te.toString(16))}}},u),delete u.supbooks,delete u["!row"],!h["!ref"]&&(m.s.r<2e6||x&&(x.e.r>0||x.e.c>0||x.s.r>0||x.s.c>0))&&(h["!ref"]=ft(x||m)),u.sheetRows&&h["!ref"]){var ee=Ht(h["!ref"]);u.sheetRows<=+ee.e.r&&(ee.e.r=u.sheetRows-1,ee.e.r>m.e.r&&(ee.e.r=m.e.r),ee.e.r<ee.s.r&&(ee.s.r=ee.e.r),ee.e.c>m.e.c&&(ee.e.c=m.e.c),ee.e.c<ee.s.c&&(ee.s.c=ee.e.c),h["!fullref"]=h["!ref"],h["!ref"]=ft(ee))}return z.length>0&&(h["!merges"]=z),de.length>0&&(h["!cols"]=de),Ce.length>0&&(h["!rows"]=Ce),h}function kF(e){var n=[],r=e.match(/^<c:numCache>/),s;(e.match(/<c:pt idx="(\d*)">(.*?)<\/c:pt>/mg)||[]).forEach(function(c){var f=c.match(/<c:pt idx="(\d*?)"><c:v>(.*)<\/c:v><\/c:pt>/);f&&(n[+f[1]]=r?+f[2]:f[2])});var i=dt((e.match(/<c:formatCode>([\s\S]*?)<\/c:formatCode>/)||["","General"])[1]);return(e.match(/<c:f>(.*?)<\/c:f>/mg)||[]).forEach(function(c){s=c.replace(/<.*?>/g,"")}),[n,i,s]}function DF(e,n,r,s,i,c){var f=c||{"!type":"chart"};if(!e)return c;var u=0,h=0,x="A",m={s:{r:2e6,c:2e6},e:{r:0,c:0}};return(e.match(/<c:numCache>[\s\S]*?<\/c:numCache>/gm)||[]).forEach(function(v){var y=kF(v);m.s.r=m.s.c=0,m.e.c=u,x=nn(u),y[0].forEach(function(_,E){f[x+mn(E)]={t:"n",v:_,z:y[1]},h=E}),m.e.r<h&&(m.e.r=h),++u}),u>0&&(f["!ref"]=ft(m)),f}function BF(e,n,r,s,i){if(!e)return e;s||(s={"!id":{}});var c={"!type":"chart","!drawel":null,"!rel":""},f,u=e.match(Cb);return u&&Hh(u[0],c,i,r),(f=e.match(/drawing r:id="(.*?)"/))&&(c["!rel"]=f[1]),s["!id"][c["!rel"]]&&(c["!drawel"]=s["!id"][c["!rel"]]),c}function FF(e,n){e.l+=10;var r=Cn(e);return{name:r}}function RF(e,n,r,s,i){if(!e)return e;s||(s={"!id":{}});var c={"!type":"chart","!drawel":null,"!rel":""},f=!1;return _a(e,function(h,x,m){switch(m){case 550:c["!rel"]=h;break;case 651:i.Sheets[r]||(i.Sheets[r]={}),h.name&&(i.Sheets[r].CodeName=h.name);break;case 562:case 652:case 669:case 679:case 551:case 552:case 476:case 3072:break;case 35:f=!0;break;case 36:f=!1;break;case 37:break;case 38:break;default:if(!(x.T>0)){if(!(x.T<0)){if(!f||n.WTF)throw new Error("Unexpected record 0x"+m.toString(16))}}}},n),s["!id"][c["!rel"]]&&(c["!drawel"]=s["!id"][c["!rel"]]),c}var wb=[["allowRefreshQuery",!1,"bool"],["autoCompressPictures",!0,"bool"],["backupFile",!1,"bool"],["checkCompatibility",!1,"bool"],["CodeName",""],["date1904",!1,"bool"],["defaultThemeVersion",0,"int"],["filterPrivacy",!1,"bool"],["hidePivotFieldList",!1,"bool"],["promptedSolutions",!1,"bool"],["publishItems",!1,"bool"],["refreshAllConnections",!1,"bool"],["saveExternalLinkValues",!0,"bool"],["showBorderUnselectedTables",!0,"bool"],["showInkAnnotation",!0,"bool"],["showObjects","all"],["showPivotChartFilter",!1,"bool"],["updateLinks","userSet"]],NF=[["activeTab",0,"int"],["autoFilterDateGrouping",!0,"bool"],["firstSheet",0,"int"],["minimized",!1,"bool"],["showHorizontalScroll",!0,"bool"],["showSheetTabs",!0,"bool"],["showVerticalScroll",!0,"bool"],["tabRatio",600,"int"],["visibility","visible"]],OF=[],MF=[["calcCompleted","true"],["calcMode","auto"],["calcOnSave","true"],["concurrentCalc","true"],["fullCalcOnLoad","false"],["fullPrecision","true"],["iterate","false"],["iterateCount","100"],["iterateDelta","0.001"],["refMode","A1"]];function rv(e,n){for(var r=0;r!=e.length;++r)for(var s=e[r],i=0;i!=n.length;++i){var c=n[i];if(s[c[0]]==null)s[c[0]]=c[1];else switch(c[2]){case"bool":typeof s[c[0]]=="string"&&(s[c[0]]=Rt(s[c[0]]));break;case"int":typeof s[c[0]]=="string"&&(s[c[0]]=parseInt(s[c[0]],10));break}}}function av(e,n){for(var r=0;r!=n.length;++r){var s=n[r];if(e[s[0]]==null)e[s[0]]=s[1];else switch(s[2]){case"bool":typeof e[s[0]]=="string"&&(e[s[0]]=Rt(e[s[0]]));break;case"int":typeof e[s[0]]=="string"&&(e[s[0]]=parseInt(e[s[0]],10));break}}}function Ab(e){av(e.WBProps,wb),av(e.CalcPr,MF),rv(e.WBView,NF),rv(e.Sheets,OF),Ki.date1904=Rt(e.WBProps.date1904)}var LF="][*?/\\".split("");function jF(e,n){if(e.length>31)throw new Error("Sheet names cannot exceed 31 chars");var r=!0;return LF.forEach(function(s){if(e.indexOf(s)!=-1)throw new Error("Sheet name cannot contain : \\ / ? * [ ]")}),r}var IF=/<\w+:workbook/;function HF(e,n){if(!e)throw new Error("Could not find file");var r={AppVersion:{},WBProps:{},WBView:[],Sheets:[],CalcPr:{},Names:[],xmlns:""},s=!1,i="xmlns",c={},f=0;if(e.replace(wn,function(h,x){var m=Ge(h);switch(Vr(m[0])){case"<?xml":break;case"<workbook":h.match(IF)&&(i="xmlns"+h.match(/<(\w+):/)[1]),r.xmlns=m[i];break;case"</workbook>":break;case"<fileVersion":delete m[0],r.AppVersion=m;break;case"<fileVersion/>":case"</fileVersion>":break;case"<fileSharing":break;case"<fileSharing/>":break;case"<workbookPr":case"<workbookPr/>":wb.forEach(function(v){if(m[v[0]]!=null)switch(v[2]){case"bool":r.WBProps[v[0]]=Rt(m[v[0]]);break;case"int":r.WBProps[v[0]]=parseInt(m[v[0]],10);break;default:r.WBProps[v[0]]=m[v[0]]}}),m.codeName&&(r.WBProps.CodeName=At(m.codeName));break;case"</workbookPr>":break;case"<workbookProtection":break;case"<workbookProtection/>":break;case"<bookViews":case"<bookViews>":case"</bookViews>":break;case"<workbookView":case"<workbookView/>":delete m[0],r.WBView.push(m);break;case"</workbookView>":break;case"<sheets":case"<sheets>":case"</sheets>":break;case"<sheet":switch(m.state){case"hidden":m.Hidden=1;break;case"veryHidden":m.Hidden=2;break;default:m.Hidden=0}delete m.state,m.name=dt(At(m.name)),delete m[0],r.Sheets.push(m);break;case"</sheet>":break;case"<functionGroups":case"<functionGroups/>":break;case"<functionGroup":break;case"<externalReferences":case"</externalReferences>":case"<externalReferences>":break;case"<externalReference":break;case"<definedNames/>":break;case"<definedNames>":case"<definedNames":s=!0;break;case"</definedNames>":s=!1;break;case"<definedName":c={},c.Name=At(m.name),m.comment&&(c.Comment=m.comment),m.localSheetId&&(c.Sheet=+m.localSheetId),Rt(m.hidden||"0")&&(c.Hidden=!0),f=x+h.length;break;case"</definedName>":c.Ref=dt(At(e.slice(f,x))),r.Names.push(c);break;case"<definedName/>":break;case"<calcPr":delete m[0],r.CalcPr=m;break;case"<calcPr/>":delete m[0],r.CalcPr=m;break;case"</calcPr>":break;case"<oleSize":break;case"<customWorkbookViews>":case"</customWorkbookViews>":case"<customWorkbookViews":break;case"<customWorkbookView":case"</customWorkbookView>":break;case"<pivotCaches>":case"</pivotCaches>":case"<pivotCaches":break;case"<pivotCache":break;case"<smartTagPr":case"<smartTagPr/>":break;case"<smartTagTypes":case"<smartTagTypes>":case"</smartTagTypes>":break;case"<smartTagType":break;case"<webPublishing":case"<webPublishing/>":break;case"<fileRecoveryPr":case"<fileRecoveryPr/>":break;case"<webPublishObjects>":case"<webPublishObjects":case"</webPublishObjects>":break;case"<webPublishObject":break;case"<extLst":case"<extLst>":case"</extLst>":case"<extLst/>":break;case"<ext":s=!0;break;case"</ext>":s=!1;break;case"<ArchID":break;case"<AlternateContent":case"<AlternateContent>":s=!0;break;case"</AlternateContent>":s=!1;break;case"<revisionPtr":break;default:if(!s&&n.WTF)throw new Error("unrecognized "+m[0]+" in workbook")}return h}),r6.indexOf(r.xmlns)===-1)throw new Error("Unknown Namespace: "+r.xmlns);return Ab(r),r}function zF(e,n){var r={};return r.Hidden=e.read_shift(4),r.iTabID=e.read_shift(4),r.strRelID=Md(e),r.name=Cn(e),r}function UF(e,n){var r={},s=e.read_shift(4);r.defaultThemeVersion=e.read_shift(4);var i=n>8?Cn(e):"";return i.length>0&&(r.CodeName=i),r.autoCompressPictures=!!(s&65536),r.backupFile=!!(s&64),r.checkCompatibility=!!(s&4096),r.date1904=!!(s&1),r.filterPrivacy=!!(s&8),r.hidePivotFieldList=!!(s&1024),r.promptedSolutions=!!(s&16),r.publishItems=!!(s&2048),r.refreshAllConnections=!!(s&262144),r.saveExternalLinkValues=!!(s&128),r.showBorderUnselectedTables=!!(s&4),r.showInkAnnotation=!!(s&32),r.showObjects=["all","placeholders","none"][s>>13&3],r.showPivotChartFilter=!!(s&32768),r.updateLinks=["userSet","never","always"][s>>8&3],r}function WF(e,n){var r={};return e.read_shift(4),r.ArchID=e.read_shift(4),e.l+=n-8,r}function PF(e,n,r){var s=e.l+n;e.l+=4,e.l+=1;var i=e.read_shift(4),c=S6(e),f=AB(e,0,r),u=Rh(e);e.l=s;var h={Name:c,Ptg:f};return i<268435455&&(h.Sheet=i),u&&(h.Comment=u),h}function XF(e,n){var r={AppVersion:{},WBProps:{},WBView:[],Sheets:[],CalcPr:{},xmlns:""},s=[],i=!1;n||(n={}),n.biff=12;var c=[],f=[[]];return f.SheetNames=[],f.XTI=[],Mc[16]={n:"BrtFRTArchID$",f:WF},_a(e,function(h,x,m){switch(m){case 156:f.SheetNames.push(h.name),r.Sheets.push(h);break;case 153:r.WBProps=h;break;case 39:h.Sheet!=null&&(n.SID=h.Sheet),h.Ref=yn(h.Ptg,null,null,f,n),delete n.SID,delete h.Ptg,c.push(h);break;case 1036:break;case 357:case 358:case 355:case 667:f[0].length?f.push([m,h]):f[0]=[m,h],f[f.length-1].XTI=[];break;case 362:f.length===0&&(f[0]=[],f[0].XTI=[]),f[f.length-1].XTI=f[f.length-1].XTI.concat(h),f.XTI=f.XTI.concat(h);break;case 361:break;case 2071:case 158:case 143:case 664:case 353:break;case 3072:case 3073:case 534:case 677:case 157:case 610:case 2050:case 155:case 548:case 676:case 128:case 665:case 2128:case 2125:case 549:case 2053:case 596:case 2076:case 2075:case 2082:case 397:case 154:case 1117:case 553:case 2091:break;case 35:s.push(m),i=!0;break;case 36:s.pop(),i=!1;break;case 37:s.push(m),i=!0;break;case 38:s.pop(),i=!1;break;case 16:break;default:if(!x.T){if(!i||n.WTF&&s[s.length-1]!=37&&s[s.length-1]!=35)throw new Error("Unexpected record 0x"+m.toString(16))}}},n),Ab(r),r.Names=c,r.supbooks=f,r}function GF(e,n,r){return n.slice(-4)===".bin"?XF(e,r):HF(e,r)}function qF(e,n,r,s,i,c,f,u){return n.slice(-4)===".bin"?TF(e,s,r,i,c,f,u):zB(e,s,r,i,c,f,u)}function VF(e,n,r,s,i,c,f,u){return n.slice(-4)===".bin"?RF(e,s,r,i,c):BF(e,s,r,i,c)}function KF(e,n,r,s,i,c,f,u){return n.slice(-4)===".bin"?nD():rD()}function YF(e,n,r,s,i,c,f,u){return n.slice(-4)===".bin"?eD():tD()}function JF(e,n,r,s){return n.slice(-4)===".bin"?g5(e,r,s):u5(e,r,s)}function QF(e,n,r){return db(e,r)}function ZF(e,n,r){return n.slice(-4)===".bin"?Nk(e,r):Fk(e,r)}function $F(e,n,r){return n.slice(-4)===".bin"?Q5(e,r):q5(e,r)}function e7(e,n,r){return n.slice(-4)===".bin"?P5(e):U5(e)}function t7(e,n,r,s){return r.slice(-4)===".bin"?X5(e,n,r,s):void 0}function n7(e,n,r){return n.slice(-4)===".bin"?H5(e,n,r):z5(e,n,r)}var Tb=/([\w:]+)=((?:")([^"]*)(?:")|(?:')([^']*)(?:'))/g,kb=/([\w:]+)=((?:")(?:[^"]*)(?:")|(?:')(?:[^']*)(?:'))/;function kr(e,n){var r=e.split(/\s+/),s=[];if(s[0]=r[0],r.length===1)return s;var i=e.match(Tb),c,f,u,h;if(i)for(h=0;h!=i.length;++h)c=i[h].match(kb),(f=c[1].indexOf(":"))===-1?s[c[1]]=c[2].slice(1,c[2].length-1):(c[1].slice(0,6)==="xmlns:"?u="xmlns"+c[1].slice(6):u=c[1].slice(f+1),s[u]=c[2].slice(1,c[2].length-1));return s}function r7(e){var n=e.split(/\s+/),r={};if(n.length===1)return r;var s=e.match(Tb),i,c,f,u;if(s)for(u=0;u!=s.length;++u)i=s[u].match(kb),(c=i[1].indexOf(":"))===-1?r[i[1]]=i[2].slice(1,i[2].length-1):(i[1].slice(0,6)==="xmlns:"?f="xmlns"+i[1].slice(6):f=i[1].slice(c+1),r[f]=i[2].slice(1,i[2].length-1));return r}var ul;function a7(e,n){var r=ul[e]||dt(e);return r==="General"?Hs(n):Sr(r,n)}function s7(e,n,r,s){var i=s;switch((r[0].match(/dt:dt="([\w.]+)"/)||["",""])[1]){case"boolean":i=Rt(s);break;case"i2":case"int":i=parseInt(s,10);break;case"r4":case"float":i=parseFloat(s);break;case"date":case"dateTime.tz":i=on(s);break;case"i8":case"string":case"fixed":case"uuid":case"bin.base64":break;default:throw new Error("bad custprop:"+r[0])}e[dt(n)]=i}function i7(e,n,r){if(e.t!=="z"){if(!r||r.cellText!==!1)try{e.t==="e"?e.w=e.w||Js[e.v]:n==="General"?e.t==="n"?(e.v|0)===e.v?e.w=e.v.toString(10):e.w=vl(e.v):e.w=Hs(e.v):e.w=a7(n||"General",e.v)}catch(c){if(r.WTF)throw c}try{var s=ul[n]||n||"General";if(r.cellNF&&(e.z=s),r.cellDates&&e.t=="n"&&$i(s)){var i=Fs(e.v);i&&(e.t="d",e.v=new Date(i.y,i.m-1,i.d,i.H,i.M,i.S,i.u))}}catch(c){if(r.WTF)throw c}}}function l7(e,n,r){if(r.cellStyles&&n.Interior){var s=n.Interior;s.Pattern&&(s.patternType=s5[s.Pattern]||s.Pattern)}e[n.ID]=n}function o7(e,n,r,s,i,c,f,u,h,x){var m="General",v=s.StyleID,y={};x=x||{};var _=[],E=0;for(v===void 0&&u&&(v=u.StyleID),v===void 0&&f&&(v=f.StyleID);c[v]!==void 0&&(c[v].nf&&(m=c[v].nf),c[v].Interior&&_.push(c[v].Interior),!!c[v].Parent);)v=c[v].Parent;switch(r.Type){case"Boolean":s.t="b",s.v=Rt(e);break;case"String":s.t="s",s.r=Ag(dt(e)),s.v=e.indexOf("<")>-1?dt(n||e).replace(/<.*?>/g,""):s.r;break;case"DateTime":e.slice(-1)!="Z"&&(e+="Z"),s.v=(on(e)-new Date(Date.UTC(1899,11,30)))/(1440*60*1e3),s.v!==s.v?s.v=dt(e):s.v<60&&(s.v=s.v-1),(!m||m=="General")&&(m="yyyy-mm-dd");case"Number":s.v===void 0&&(s.v=+e),s.t||(s.t="n");break;case"Error":s.t="e",s.v=Xy[e],x.cellText!==!1&&(s.w=e);break;default:e==""&&n==""?s.t="z":(s.t="s",s.v=Ag(n||e));break}if(i7(s,m,x),x.cellFormula!==!1)if(s.Formula){var b=dt(s.Formula);b.charCodeAt(0)==61&&(b=b.slice(1)),s.f=Vi(b,i),delete s.Formula,s.ArrayRange=="RC"?s.F=Vi("RC:RC",i):s.ArrayRange&&(s.F=Vi(s.ArrayRange,i),h.push([Ht(s.F),s.F]))}else for(E=0;E<h.length;++E)i.r>=h[E][0].s.r&&i.r<=h[E][0].e.r&&i.c>=h[E][0].s.c&&i.c<=h[E][0].e.c&&(s.F=h[E][1]);x.cellStyles&&(_.forEach(function(C){!y.patternType&&C.patternType&&(y.patternType=C.patternType)}),s.s=y),s.StyleID!==void 0&&(s.ixfe=s.StyleID)}function c7(e){e.t=e.v||"",e.t=e.t.replace(/\r\n/g,`
`).replace(/\r/g,`
`),e.v=e.w=e.ixfe=void 0}function Ed(e,n){var r=n||{};my();var s=Y0(Th(e));(r.type=="binary"||r.type=="array"||r.type=="base64")&&(s=At(s));var i=s.slice(0,1024).toLowerCase(),c=!1;if(i=i.replace(/".*?"/g,""),(i.indexOf(">")&1023)>Math.min(i.indexOf(",")&1023,i.indexOf(";")&1023)){var f=pn(r);return f.type="string",Sl.to_workbook(s,f)}if(i.indexOf("<?xml")==-1&&["html","table","head","meta","script","style","div"].forEach(function(Ct){i.indexOf("<"+Ct)>=0&&(c=!0)}),c)return v7(s,r);ul={"General Number":"General","General Date":Je[22],"Long Date":"dddd, mmmm dd, yyyy","Medium Date":Je[15],"Short Date":Je[14],"Long Time":Je[19],"Medium Time":Je[18],"Short Time":Je[20],Currency:'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',Fixed:Je[2],Standard:Je[4],Percent:Je[10],Scientific:Je[11],"Yes/No":'"Yes";"Yes";"No";@',"True/False":'"True";"True";"False";@',"On/Off":'"Yes";"Yes";"No";@'};var u,h=[],x,m={},v=[],y=r.dense?[]:{},_="",E={},b={},C=kr('<Data ss:Type="String">'),D=0,k=0,w=0,H={s:{r:2e6,c:2e6},e:{r:0,c:0}},V={},z={},R="",W=0,U=[],fe={},Z={},L=0,de=[],Ce=[],me={},X=[],ee,we=!1,K=[],ne=[],Te={},O=0,J=0,P={Sheets:[],WBProps:{date1904:!1}},G={};bl.lastIndex=0,s=s.replace(/<!--([\s\S]*?)-->/mg,"");for(var ue="";u=bl.exec(s);)switch(u[3]=(ue=u[3]).toLowerCase()){case"data":if(ue=="data"){if(u[1]==="/"){if((x=h.pop())[0]!==u[3])throw new Error("Bad state: "+x.join("|"))}else u[0].charAt(u[0].length-2)!=="/"&&h.push([u[3],!0]);break}if(h[h.length-1][1])break;u[1]==="/"?o7(s.slice(D,u.index),R,C,h[h.length-1][0]=="comment"?me:E,{c:k,r:w},V,X[k],b,K,r):(R="",C=kr(u[0]),D=u.index+u[0].length);break;case"cell":if(u[1]==="/")if(Ce.length>0&&(E.c=Ce),(!r.sheetRows||r.sheetRows>w)&&E.v!==void 0&&(r.dense?(y[w]||(y[w]=[]),y[w][k]=E):y[nn(k)+mn(w)]=E),E.HRef&&(E.l={Target:dt(E.HRef)},E.HRefScreenTip&&(E.l.Tooltip=E.HRefScreenTip),delete E.HRef,delete E.HRefScreenTip),(E.MergeAcross||E.MergeDown)&&(O=k+(parseInt(E.MergeAcross,10)|0),J=w+(parseInt(E.MergeDown,10)|0),U.push({s:{c:k,r:w},e:{c:O,r:J}})),!r.sheetStubs)E.MergeAcross?k=O+1:++k;else if(E.MergeAcross||E.MergeDown){for(var he=k;he<=O;++he)for(var ve=w;ve<=J;++ve)(he>k||ve>w)&&(r.dense?(y[ve]||(y[ve]=[]),y[ve][he]={t:"z"}):y[nn(he)+mn(ve)]={t:"z"});k=O+1}else++k;else E=r7(u[0]),E.Index&&(k=+E.Index-1),k<H.s.c&&(H.s.c=k),k>H.e.c&&(H.e.c=k),u[0].slice(-2)==="/>"&&++k,Ce=[];break;case"row":u[1]==="/"||u[0].slice(-2)==="/>"?(w<H.s.r&&(H.s.r=w),w>H.e.r&&(H.e.r=w),u[0].slice(-2)==="/>"&&(b=kr(u[0]),b.Index&&(w=+b.Index-1)),k=0,++w):(b=kr(u[0]),b.Index&&(w=+b.Index-1),Te={},(b.AutoFitHeight=="0"||b.Height)&&(Te.hpx=parseInt(b.Height,10),Te.hpt=ub(Te.hpx),ne[w]=Te),b.Hidden=="1"&&(Te.hidden=!0,ne[w]=Te));break;case"worksheet":if(u[1]==="/"){if((x=h.pop())[0]!==u[3])throw new Error("Bad state: "+x.join("|"));v.push(_),H.s.r<=H.e.r&&H.s.c<=H.e.c&&(y["!ref"]=ft(H),r.sheetRows&&r.sheetRows<=H.e.r&&(y["!fullref"]=y["!ref"],H.e.r=r.sheetRows-1,y["!ref"]=ft(H))),U.length&&(y["!merges"]=U),X.length>0&&(y["!cols"]=X),ne.length>0&&(y["!rows"]=ne),m[_]=y}else H={s:{r:2e6,c:2e6},e:{r:0,c:0}},w=k=0,h.push([u[3],!1]),x=kr(u[0]),_=dt(x.Name),y=r.dense?[]:{},U=[],K=[],ne=[],G={name:_,Hidden:0},P.Sheets.push(G);break;case"table":if(u[1]==="/"){if((x=h.pop())[0]!==u[3])throw new Error("Bad state: "+x.join("|"))}else{if(u[0].slice(-2)=="/>")break;h.push([u[3],!1]),X=[],we=!1}break;case"style":u[1]==="/"?l7(V,z,r):z=kr(u[0]);break;case"numberformat":z.nf=dt(kr(u[0]).Format||"General"),ul[z.nf]&&(z.nf=ul[z.nf]);for(var ye=0;ye!=392&&Je[ye]!=z.nf;++ye);if(ye==392){for(ye=57;ye!=392;++ye)if(Je[ye]==null){Ns(z.nf,ye);break}}break;case"column":if(h[h.length-1][0]!=="table")break;if(ee=kr(u[0]),ee.Hidden&&(ee.hidden=!0,delete ee.Hidden),ee.Width&&(ee.wpx=parseInt(ee.Width,10)),!we&&ee.wpx>10){we=!0,Dn=cb;for(var _e=0;_e<X.length;++_e)X[_e]&&Zi(X[_e])}we&&Zi(ee),X[ee.Index-1||X.length]=ee;for(var Pe=0;Pe<+ee.Span;++Pe)X[X.length]=pn(ee);break;case"namedrange":if(u[1]==="/")break;P.Names||(P.Names=[]);var I=Ge(u[0]),st={Name:I.Name,Ref:Vi(I.RefersTo.slice(1),{r:0,c:0})};P.Sheets.length>0&&(st.Sheet=P.Sheets.length-1),P.Names.push(st);break;case"namedcell":break;case"b":break;case"i":break;case"u":break;case"s":break;case"em":break;case"h2":break;case"h3":break;case"sub":break;case"sup":break;case"span":break;case"alignment":break;case"borders":break;case"border":break;case"font":if(u[0].slice(-2)==="/>")break;u[1]==="/"?R+=s.slice(W,u.index):W=u.index+u[0].length;break;case"interior":if(!r.cellStyles)break;z.Interior=kr(u[0]);break;case"protection":break;case"author":case"title":case"description":case"created":case"keywords":case"subject":case"category":case"company":case"lastauthor":case"lastsaved":case"lastprinted":case"version":case"revision":case"totaltime":case"hyperlinkbase":case"manager":case"contentstatus":case"identifier":case"language":case"appname":if(u[0].slice(-2)==="/>")break;u[1]==="/"?q6(fe,ue,s.slice(L,u.index)):L=u.index+u[0].length;break;case"paragraphs":break;case"styles":case"workbook":if(u[1]==="/"){if((x=h.pop())[0]!==u[3])throw new Error("Bad state: "+x.join("|"))}else h.push([u[3],!1]);break;case"comment":if(u[1]==="/"){if((x=h.pop())[0]!==u[3])throw new Error("Bad state: "+x.join("|"));c7(me),Ce.push(me)}else h.push([u[3],!1]),x=kr(u[0]),me={a:x.Author};break;case"autofilter":if(u[1]==="/"){if((x=h.pop())[0]!==u[3])throw new Error("Bad state: "+x.join("|"))}else if(u[0].charAt(u[0].length-2)!=="/"){var Ue=kr(u[0]);y["!autofilter"]={ref:Vi(Ue.Range).replace(/\$/g,"")},h.push([u[3],!0])}break;case"name":break;case"datavalidation":if(u[1]==="/"){if((x=h.pop())[0]!==u[3])throw new Error("Bad state: "+x.join("|"))}else u[0].charAt(u[0].length-2)!=="/"&&h.push([u[3],!0]);break;case"pixelsperinch":break;case"componentoptions":case"documentproperties":case"customdocumentproperties":case"officedocumentsettings":case"pivottable":case"pivotcache":case"names":case"mapinfo":case"pagebreaks":case"querytable":case"sorting":case"schema":case"conditionalformatting":case"smarttagtype":case"smarttags":case"excelworkbook":case"workbookoptions":case"worksheetoptions":if(u[1]==="/"){if((x=h.pop())[0]!==u[3])throw new Error("Bad state: "+x.join("|"))}else u[0].charAt(u[0].length-2)!=="/"&&h.push([u[3],!0]);break;case"null":break;default:if(h.length==0&&u[3]=="document"||h.length==0&&u[3]=="uof")return fv(s,r);var it=!0;switch(h[h.length-1][0]){case"officedocumentsettings":switch(u[3]){case"allowpng":break;case"removepersonalinformation":break;case"downloadcomponents":break;case"locationofcomponents":break;case"colors":break;case"color":break;case"index":break;case"rgb":break;case"targetscreensize":break;case"readonlyrecommended":break;default:it=!1}break;case"componentoptions":switch(u[3]){case"toolbar":break;case"hideofficelogo":break;case"spreadsheetautofit":break;case"label":break;case"caption":break;case"maxheight":break;case"maxwidth":break;case"nextsheetnumber":break;default:it=!1}break;case"excelworkbook":switch(u[3]){case"date1904":P.WBProps.date1904=!0;break;case"windowheight":break;case"windowwidth":break;case"windowtopx":break;case"windowtopy":break;case"tabratio":break;case"protectstructure":break;case"protectwindow":break;case"protectwindows":break;case"activesheet":break;case"displayinknotes":break;case"firstvisiblesheet":break;case"supbook":break;case"sheetname":break;case"sheetindex":break;case"sheetindexfirst":break;case"sheetindexlast":break;case"dll":break;case"acceptlabelsinformulas":break;case"donotsavelinkvalues":break;case"iteration":break;case"maxiterations":break;case"maxchange":break;case"path":break;case"xct":break;case"count":break;case"selectedsheets":break;case"calculation":break;case"uncalced":break;case"startupprompt":break;case"crn":break;case"externname":break;case"formula":break;case"colfirst":break;case"collast":break;case"wantadvise":break;case"boolean":break;case"error":break;case"text":break;case"ole":break;case"noautorecover":break;case"publishobjects":break;case"donotcalculatebeforesave":break;case"number":break;case"refmoder1c1":break;case"embedsavesmarttags":break;default:it=!1}break;case"workbookoptions":switch(u[3]){case"owcversion":break;case"height":break;case"width":break;default:it=!1}break;case"worksheetoptions":switch(u[3]){case"visible":if(u[0].slice(-2)!=="/>")if(u[1]==="/")switch(s.slice(L,u.index)){case"SheetHidden":G.Hidden=1;break;case"SheetVeryHidden":G.Hidden=2;break}else L=u.index+u[0].length;break;case"header":y["!margins"]||fl(y["!margins"]={},"xlml"),isNaN(+Ge(u[0]).Margin)||(y["!margins"].header=+Ge(u[0]).Margin);break;case"footer":y["!margins"]||fl(y["!margins"]={},"xlml"),isNaN(+Ge(u[0]).Margin)||(y["!margins"].footer=+Ge(u[0]).Margin);break;case"pagemargins":var qe=Ge(u[0]);y["!margins"]||fl(y["!margins"]={},"xlml"),isNaN(+qe.Top)||(y["!margins"].top=+qe.Top),isNaN(+qe.Left)||(y["!margins"].left=+qe.Left),isNaN(+qe.Right)||(y["!margins"].right=+qe.Right),isNaN(+qe.Bottom)||(y["!margins"].bottom=+qe.Bottom);break;case"displayrighttoleft":P.Views||(P.Views=[]),P.Views[0]||(P.Views[0]={}),P.Views[0].RTL=!0;break;case"freezepanes":break;case"frozennosplit":break;case"splithorizontal":case"splitvertical":break;case"donotdisplaygridlines":break;case"activerow":break;case"activecol":break;case"toprowbottompane":break;case"leftcolumnrightpane":break;case"unsynced":break;case"print":break;case"printerrors":break;case"panes":break;case"scale":break;case"pane":break;case"number":break;case"layout":break;case"pagesetup":break;case"selected":break;case"protectobjects":break;case"enableselection":break;case"protectscenarios":break;case"validprinterinfo":break;case"horizontalresolution":break;case"verticalresolution":break;case"numberofcopies":break;case"activepane":break;case"toprowvisible":break;case"leftcolumnvisible":break;case"fittopage":break;case"rangeselection":break;case"papersizeindex":break;case"pagelayoutzoom":break;case"pagebreakzoom":break;case"filteron":break;case"fitwidth":break;case"fitheight":break;case"commentslayout":break;case"zoom":break;case"lefttoright":break;case"gridlines":break;case"allowsort":break;case"allowfilter":break;case"allowinsertrows":break;case"allowdeleterows":break;case"allowinsertcols":break;case"allowdeletecols":break;case"allowinserthyperlinks":break;case"allowformatcells":break;case"allowsizecols":break;case"allowsizerows":break;case"nosummaryrowsbelowdetail":y["!outline"]||(y["!outline"]={}),y["!outline"].above=!0;break;case"tabcolorindex":break;case"donotdisplayheadings":break;case"showpagelayoutzoom":break;case"nosummarycolumnsrightdetail":y["!outline"]||(y["!outline"]={}),y["!outline"].left=!0;break;case"blackandwhite":break;case"donotdisplayzeros":break;case"displaypagebreak":break;case"rowcolheadings":break;case"donotdisplayoutline":break;case"noorientation":break;case"allowusepivottables":break;case"zeroheight":break;case"viewablerange":break;case"selection":break;case"protectcontents":break;default:it=!1}break;case"pivottable":case"pivotcache":switch(u[3]){case"immediateitemsondrop":break;case"showpagemultipleitemlabel":break;case"compactrowindent":break;case"location":break;case"pivotfield":break;case"orientation":break;case"layoutform":break;case"layoutsubtotallocation":break;case"layoutcompactrow":break;case"position":break;case"pivotitem":break;case"datatype":break;case"datafield":break;case"sourcename":break;case"parentfield":break;case"ptlineitems":break;case"ptlineitem":break;case"countofsameitems":break;case"item":break;case"itemtype":break;case"ptsource":break;case"cacheindex":break;case"consolidationreference":break;case"filename":break;case"reference":break;case"nocolumngrand":break;case"norowgrand":break;case"blanklineafteritems":break;case"hidden":break;case"subtotal":break;case"basefield":break;case"mapchilditems":break;case"function":break;case"refreshonfileopen":break;case"printsettitles":break;case"mergelabels":break;case"defaultversion":break;case"refreshname":break;case"refreshdate":break;case"refreshdatecopy":break;case"versionlastrefresh":break;case"versionlastupdate":break;case"versionupdateablemin":break;case"versionrefreshablemin":break;case"calculation":break;default:it=!1}break;case"pagebreaks":switch(u[3]){case"colbreaks":break;case"colbreak":break;case"rowbreaks":break;case"rowbreak":break;case"colstart":break;case"colend":break;case"rowend":break;default:it=!1}break;case"autofilter":switch(u[3]){case"autofiltercolumn":break;case"autofiltercondition":break;case"autofilterand":break;case"autofilteror":break;default:it=!1}break;case"querytable":switch(u[3]){case"id":break;case"autoformatfont":break;case"autoformatpattern":break;case"querysource":break;case"querytype":break;case"enableredirections":break;case"refreshedinxl9":break;case"urlstring":break;case"htmltables":break;case"connection":break;case"commandtext":break;case"refreshinfo":break;case"notitles":break;case"nextid":break;case"columninfo":break;case"overwritecells":break;case"donotpromptforfile":break;case"textwizardsettings":break;case"source":break;case"number":break;case"decimal":break;case"thousandseparator":break;case"trailingminusnumbers":break;case"formatsettings":break;case"fieldtype":break;case"delimiters":break;case"tab":break;case"comma":break;case"autoformatname":break;case"versionlastedit":break;case"versionlastrefresh":break;default:it=!1}break;case"datavalidation":switch(u[3]){case"range":break;case"type":break;case"min":break;case"max":break;case"sort":break;case"descending":break;case"order":break;case"casesensitive":break;case"value":break;case"errorstyle":break;case"errormessage":break;case"errortitle":break;case"inputmessage":break;case"inputtitle":break;case"combohide":break;case"inputhide":break;case"condition":break;case"qualifier":break;case"useblank":break;case"value1":break;case"value2":break;case"format":break;case"cellrangelist":break;default:it=!1}break;case"sorting":case"conditionalformatting":switch(u[3]){case"range":break;case"type":break;case"min":break;case"max":break;case"sort":break;case"descending":break;case"order":break;case"casesensitive":break;case"value":break;case"errorstyle":break;case"errormessage":break;case"errortitle":break;case"cellrangelist":break;case"inputmessage":break;case"inputtitle":break;case"combohide":break;case"inputhide":break;case"condition":break;case"qualifier":break;case"useblank":break;case"value1":break;case"value2":break;case"format":break;default:it=!1}break;case"mapinfo":case"schema":case"data":switch(u[3]){case"map":break;case"entry":break;case"range":break;case"xpath":break;case"field":break;case"xsdtype":break;case"filteron":break;case"aggregate":break;case"elementtype":break;case"attributetype":break;case"schema":case"element":case"complextype":case"datatype":case"all":case"attribute":case"extends":break;case"row":break;default:it=!1}break;case"smarttags":break;default:it=!1;break}if(it||u[3].match(/!\[CDATA/))break;if(!h[h.length-1][1])throw"Unrecognized tag: "+u[3]+"|"+h.join("|");if(h[h.length-1][0]==="customdocumentproperties"){if(u[0].slice(-2)==="/>")break;u[1]==="/"?s7(Z,ue,de,s.slice(L,u.index)):(de=u,L=u.index+u[0].length);break}if(r.WTF)throw"Unrecognized tag: "+u[3]+"|"+h.join("|")}var Be={};return!r.bookSheets&&!r.bookProps&&(Be.Sheets=m),Be.SheetNames=v,Be.Workbook=P,Be.SSF=pn(Je),Be.Props=fe,Be.Custprops=Z,Be}function Hd(e,n){switch(Wh(n=n||{}),n.type||"base64"){case"base64":return Ed(tr(e),n);case"binary":case"buffer":case"file":return Ed(e,n);case"array":return Ed(Vs(e),n)}}function f7(e){var n={},r=e.content;if(r.l=28,n.AnsiUserType=r.read_shift(0,"lpstr-ansi"),n.AnsiClipboardFormat=E6(r),r.length-r.l<=4)return n;var s=r.read_shift(4);if(s==0||s>40||(r.l-=4,n.Reserved1=r.read_shift(0,"lpstr-ansi"),r.length-r.l<=4)||(s=r.read_shift(4),s!==1907505652)||(n.UnicodeClipboardFormat=w6(r),s=r.read_shift(4),s==0||s>40))return n;r.l-=4,n.Reserved2=r.read_shift(0,"lpwstr")}var u7=[60,1084,2066,2165,2175];function d7(e,n,r,s,i){var c=s,f=[],u=r.slice(r.l,r.l+c);if(i&&i.enc&&i.enc.insitu&&u.length>0)switch(e){case 9:case 521:case 1033:case 2057:case 47:case 405:case 225:case 406:case 312:case 404:case 10:break;case 133:break;default:i.enc.insitu(u)}f.push(u),r.l+=c;for(var h=pa(r,r.l),x=zd[h],m=0;x!=null&&u7.indexOf(h)>-1;)c=pa(r,r.l+2),m=r.l+4,h==2066?m+=4:(h==2165||h==2175)&&(m+=12),u=r.slice(m,r.l+4+c),f.push(u),r.l+=4+c,x=zd[h=pa(r,r.l)];var v=Qa(f);xn(v,0);var y=0;v.lens=[];for(var _=0;_<f.length;++_)v.lens.push(y),y+=f[_].length;if(v.length<s)throw"XLS Record 0x"+e.toString(16)+" Truncated: "+v.length+" < "+s;return n.f(v,v.length,i)}function Wr(e,n,r){if(e.t!=="z"&&e.XF){var s=0;try{s=e.z||e.XF.numFmtId||0,n.cellNF&&(e.z=Je[s])}catch(c){if(n.WTF)throw c}if(!n||n.cellText!==!1)try{e.t==="e"?e.w=e.w||Js[e.v]:s===0||s=="General"?e.t==="n"?(e.v|0)===e.v?e.w=e.v.toString(10):e.w=vl(e.v):e.w=Hs(e.v):e.w=Sr(s,e.v,{date1904:!!r,dateNF:n&&n.dateNF})}catch(c){if(n.WTF)throw c}if(n.cellDates&&s&&e.t=="n"&&$i(Je[s]||String(s))){var i=Fs(e.v);i&&(e.t="d",e.v=new Date(i.y,i.m-1,i.d,i.H,i.M,i.S,i.u))}}}function uc(e,n,r){return{v:e,ixfe:n,t:r}}function h7(e,n){var r={opts:{}},s={},i=n.dense?[]:{},c={},f={},u=null,h=[],x="",m={},v,y="",_,E,b,C,D={},k=[],w,H,V=[],z=[],R={Sheets:[],WBProps:{date1904:!1},Views:[{}]},W={},U=function(Qe){return Qe<8?Os[Qe]:Qe<64&&z[Qe-8]||Os[Qe]},fe=function(Qe,Nt,Nn){var Tt=Nt.XF.data;if(!(!Tt||!Tt.patternType||!Nn||!Nn.cellStyles)){Nt.s={},Nt.s.patternType=Tt.patternType;var zt;(zt=_l(U(Tt.icvFore)))&&(Nt.s.fgColor={rgb:zt}),(zt=_l(U(Tt.icvBack)))&&(Nt.s.bgColor={rgb:zt})}},Z=function(Qe,Nt,Nn){if(!(Te>1)&&!(Nn.sheetRows&&Qe.r>=Nn.sheetRows)){if(Nn.cellStyles&&Nt.XF&&Nt.XF.data&&fe(Qe,Nt,Nn),delete Nt.ixfe,delete Nt.XF,v=Qe,y=Ke(Qe),(!f||!f.s||!f.e)&&(f={s:{r:0,c:0},e:{r:0,c:0}}),Qe.r<f.s.r&&(f.s.r=Qe.r),Qe.c<f.s.c&&(f.s.c=Qe.c),Qe.r+1>f.e.r&&(f.e.r=Qe.r+1),Qe.c+1>f.e.c&&(f.e.c=Qe.c+1),Nn.cellFormula&&Nt.f){for(var Tt=0;Tt<k.length;++Tt)if(!(k[Tt][0].s.c>Qe.c||k[Tt][0].s.r>Qe.r)&&!(k[Tt][0].e.c<Qe.c||k[Tt][0].e.r<Qe.r)){Nt.F=ft(k[Tt][0]),(k[Tt][0].s.c!=Qe.c||k[Tt][0].s.r!=Qe.r)&&delete Nt.f,Nt.f&&(Nt.f=""+yn(k[Tt][1],f,Qe,K,L));break}}Nn.dense?(i[Qe.r]||(i[Qe.r]=[]),i[Qe.r][Qe.c]=Nt):i[y]=Nt}},L={enc:!1,sbcch:0,snames:[],sharedf:D,arrayf:k,rrtabid:[],lastuser:"",biff:8,codepage:0,winlocked:0,cellStyles:!!n&&!!n.cellStyles,WTF:!!n&&!!n.wtf};n.password&&(L.password=n.password);var de,Ce=[],me=[],X=[],ee=[],we=!1,K=[];K.SheetNames=L.snames,K.sharedf=L.sharedf,K.arrayf=L.arrayf,K.names=[],K.XTI=[];var ne=0,Te=0,O=0,J=[],P=[],G;L.codepage=1200,Rr(1200);for(var ue=!1;e.l<e.length-1;){var he=e.l,ve=e.read_shift(2);if(ve===0&&ne===10)break;var ye=e.l===e.length?0:e.read_shift(2),_e=zd[ve];if(_e&&_e.f){if(n.bookSheets&&ne===133&&ve!==133)break;if(ne=ve,_e.r===2||_e.r==12){var Pe=e.read_shift(2);if(ye-=2,!L.enc&&Pe!==ve&&((Pe&255)<<8|Pe>>8)!==ve)throw new Error("rt mismatch: "+Pe+"!="+ve);_e.r==12&&(e.l+=10,ye-=10)}var I={};if(ve===10?I=_e.f(e,ye,L):I=d7(ve,_e,e,ye,L),Te==0&&[9,521,1033,2057].indexOf(ne)===-1)continue;switch(ve){case 34:r.opts.Date1904=R.WBProps.date1904=I;break;case 134:r.opts.WriteProtect=!0;break;case 47:if(L.enc||(e.l=0),L.enc=I,!n.password)throw new Error("File is password-protected");if(I.valid==null)throw new Error("Encryption scheme unsupported");if(!I.valid)throw new Error("Password is incorrect");break;case 92:L.lastuser=I;break;case 66:var st=Number(I);switch(st){case 21010:st=1200;break;case 32768:st=1e4;break;case 32769:st=1252;break}Rr(L.codepage=st),ue=!0;break;case 317:L.rrtabid=I;break;case 25:L.winlocked=I;break;case 439:r.opts.RefreshAll=I;break;case 12:r.opts.CalcCount=I;break;case 16:r.opts.CalcDelta=I;break;case 17:r.opts.CalcIter=I;break;case 13:r.opts.CalcMode=I;break;case 14:r.opts.CalcPrecision=I;break;case 95:r.opts.CalcSaveRecalc=I;break;case 15:L.CalcRefMode=I;break;case 2211:r.opts.FullCalc=I;break;case 129:I.fDialog&&(i["!type"]="dialog"),I.fBelow||((i["!outline"]||(i["!outline"]={})).above=!0),I.fRight||((i["!outline"]||(i["!outline"]={})).left=!0);break;case 224:V.push(I);break;case 430:K.push([I]),K[K.length-1].XTI=[];break;case 35:case 547:K[K.length-1].push(I);break;case 24:case 536:G={Name:I.Name,Ref:yn(I.rgce,f,null,K,L)},I.itab>0&&(G.Sheet=I.itab-1),K.names.push(G),K[0]||(K[0]=[],K[0].XTI=[]),K[K.length-1].push(I),I.Name=="_xlnm._FilterDatabase"&&I.itab>0&&I.rgce&&I.rgce[0]&&I.rgce[0][0]&&I.rgce[0][0][0]=="PtgArea3d"&&(P[I.itab-1]={ref:ft(I.rgce[0][0][1][2])});break;case 22:L.ExternCount=I;break;case 23:K.length==0&&(K[0]=[],K[0].XTI=[]),K[K.length-1].XTI=K[K.length-1].XTI.concat(I),K.XTI=K.XTI.concat(I);break;case 2196:if(L.biff<8)break;G!=null&&(G.Comment=I[1]);break;case 18:i["!protect"]=I;break;case 19:I!==0&&L.WTF&&console.error("Password verifier: "+I);break;case 133:c[I.pos]=I,L.snames.push(I.name);break;case 10:{if(--Te)break;if(f.e){if(f.e.r>0&&f.e.c>0){if(f.e.r--,f.e.c--,i["!ref"]=ft(f),n.sheetRows&&n.sheetRows<=f.e.r){var Ue=f.e.r;f.e.r=n.sheetRows-1,i["!fullref"]=i["!ref"],i["!ref"]=ft(f),f.e.r=Ue}f.e.r++,f.e.c++}Ce.length>0&&(i["!merges"]=Ce),me.length>0&&(i["!objects"]=me),X.length>0&&(i["!cols"]=X),ee.length>0&&(i["!rows"]=ee),R.Sheets.push(W)}x===""?m=i:s[x]=i,i=n.dense?[]:{}}break;case 9:case 521:case 1033:case 2057:{if(L.biff===8&&(L.biff={9:2,521:3,1033:4}[ve]||{512:2,768:3,1024:4,1280:5,1536:8,2:2,7:2}[I.BIFFVer]||8),L.biffguess=I.BIFFVer==0,I.BIFFVer==0&&I.dt==4096&&(L.biff=5,ue=!0,Rr(L.codepage=28591)),L.biff==8&&I.BIFFVer==0&&I.dt==16&&(L.biff=2),Te++)break;if(i=n.dense?[]:{},L.biff<8&&!ue&&(ue=!0,Rr(L.codepage=n.codepage||1252)),L.biff<5||I.BIFFVer==0&&I.dt==4096){x===""&&(x="Sheet1"),f={s:{r:0,c:0},e:{r:0,c:0}};var it={pos:e.l-ye,name:x};c[it.pos]=it,L.snames.push(x)}else x=(c[he]||{name:""}).name;I.dt==32&&(i["!type"]="chart"),I.dt==64&&(i["!type"]="macro"),Ce=[],me=[],L.arrayf=k=[],X=[],ee=[],we=!1,W={Hidden:(c[he]||{hs:0}).hs,name:x}}break;case 515:case 3:case 2:i["!type"]=="chart"&&(n.dense?(i[I.r]||[])[I.c]:i[Ke({c:I.c,r:I.r})])&&++I.c,w={ixfe:I.ixfe,XF:V[I.ixfe]||{},v:I.val,t:"n"},O>0&&(w.z=J[w.ixfe>>8&63]),Wr(w,n,r.opts.Date1904),Z({c:I.c,r:I.r},w,n);break;case 5:case 517:w={ixfe:I.ixfe,XF:V[I.ixfe],v:I.val,t:I.t},O>0&&(w.z=J[w.ixfe>>8&63]),Wr(w,n,r.opts.Date1904),Z({c:I.c,r:I.r},w,n);break;case 638:w={ixfe:I.ixfe,XF:V[I.ixfe],v:I.rknum,t:"n"},O>0&&(w.z=J[w.ixfe>>8&63]),Wr(w,n,r.opts.Date1904),Z({c:I.c,r:I.r},w,n);break;case 189:for(var qe=I.c;qe<=I.C;++qe){var Be=I.rkrec[qe-I.c][0];w={ixfe:Be,XF:V[Be],v:I.rkrec[qe-I.c][1],t:"n"},O>0&&(w.z=J[w.ixfe>>8&63]),Wr(w,n,r.opts.Date1904),Z({c:qe,r:I.r},w,n)}break;case 6:case 518:case 1030:{if(I.val=="String"){u=I;break}if(w=uc(I.val,I.cell.ixfe,I.tt),w.XF=V[w.ixfe],n.cellFormula){var Ct=I.formula;if(Ct&&Ct[0]&&Ct[0][0]&&Ct[0][0][0]=="PtgExp"){var an=Ct[0][0][1][0],gn=Ct[0][0][1][1],De=Ke({r:an,c:gn});D[De]?w.f=""+yn(I.formula,f,I.cell,K,L):w.F=((n.dense?(i[an]||[])[gn]:i[De])||{}).F}else w.f=""+yn(I.formula,f,I.cell,K,L)}O>0&&(w.z=J[w.ixfe>>8&63]),Wr(w,n,r.opts.Date1904),Z(I.cell,w,n),u=I}break;case 7:case 519:if(u)u.val=I,w=uc(I,u.cell.ixfe,"s"),w.XF=V[w.ixfe],n.cellFormula&&(w.f=""+yn(u.formula,f,u.cell,K,L)),O>0&&(w.z=J[w.ixfe>>8&63]),Wr(w,n,r.opts.Date1904),Z(u.cell,w,n),u=null;else throw new Error("String record expects Formula");break;case 33:case 545:{k.push(I);var ze=Ke(I[0].s);if(_=n.dense?(i[I[0].s.r]||[])[I[0].s.c]:i[ze],n.cellFormula&&_){if(!u||!ze||!_)break;_.f=""+yn(I[1],f,I[0],K,L),_.F=ft(I[0])}}break;case 1212:{if(!n.cellFormula)break;if(y){if(!u)break;D[Ke(u.cell)]=I[0],_=n.dense?(i[u.cell.r]||[])[u.cell.c]:i[Ke(u.cell)],(_||{}).f=""+yn(I[0],f,v,K,L)}}break;case 253:w=uc(h[I.isst].t,I.ixfe,"s"),h[I.isst].h&&(w.h=h[I.isst].h),w.XF=V[w.ixfe],O>0&&(w.z=J[w.ixfe>>8&63]),Wr(w,n,r.opts.Date1904),Z({c:I.c,r:I.r},w,n);break;case 513:n.sheetStubs&&(w={ixfe:I.ixfe,XF:V[I.ixfe],t:"z"},O>0&&(w.z=J[w.ixfe>>8&63]),Wr(w,n,r.opts.Date1904),Z({c:I.c,r:I.r},w,n));break;case 190:if(n.sheetStubs)for(var mt=I.c;mt<=I.C;++mt){var je=I.ixfe[mt-I.c];w={ixfe:je,XF:V[je],t:"z"},O>0&&(w.z=J[w.ixfe>>8&63]),Wr(w,n,r.opts.Date1904),Z({c:mt,r:I.r},w,n)}break;case 214:case 516:case 4:w=uc(I.val,I.ixfe,"s"),w.XF=V[w.ixfe],O>0&&(w.z=J[w.ixfe>>8&63]),Wr(w,n,r.opts.Date1904),Z({c:I.c,r:I.r},w,n);break;case 0:case 512:Te===1&&(f=I);break;case 252:h=I;break;case 1054:if(L.biff==4){J[O++]=I[1];for(var Ot=0;Ot<O+163&&Je[Ot]!=I[1];++Ot);Ot>=163&&Ns(I[1],O+163)}else Ns(I[1],I[0]);break;case 30:{J[O++]=I;for(var Pn=0;Pn<O+163&&Je[Pn]!=I;++Pn);Pn>=163&&Ns(I,O+163)}break;case 229:Ce=Ce.concat(I);break;case 93:me[I.cmo[0]]=L.lastobj=I;break;case 438:L.lastobj.TxO=I;break;case 127:L.lastobj.ImData=I;break;case 440:for(C=I[0].s.r;C<=I[0].e.r;++C)for(b=I[0].s.c;b<=I[0].e.c;++b)_=n.dense?(i[C]||[])[b]:i[Ke({c:b,r:C})],_&&(_.l=I[1]);break;case 2048:for(C=I[0].s.r;C<=I[0].e.r;++C)for(b=I[0].s.c;b<=I[0].e.c;++b)_=n.dense?(i[C]||[])[b]:i[Ke({c:b,r:C})],_&&_.l&&(_.l.Tooltip=I[1]);break;case 28:{if(L.biff<=5&&L.biff>=2)break;_=n.dense?(i[I[0].r]||[])[I[0].c]:i[Ke(I[0])];var Ca=me[I[2]];_||(n.dense?(i[I[0].r]||(i[I[0].r]=[]),_=i[I[0].r][I[0].c]={t:"z"}):_=i[Ke(I[0])]={t:"z"},f.e.r=Math.max(f.e.r,I[0].r),f.s.r=Math.min(f.s.r,I[0].r),f.e.c=Math.max(f.e.c,I[0].c),f.s.c=Math.min(f.s.c,I[0].c)),_.c||(_.c=[]),E={a:I[1],t:Ca.TxO.t},_.c.push(E)}break;case 2173:M5(V[I.ixfe],I.ext);break;case 125:{if(!L.cellStyles)break;for(;I.e>=I.s;)X[I.e--]={width:I.w/256,level:I.level||0,hidden:!!(I.flags&1)},we||(we=!0,jh(I.w/256)),Zi(X[I.e+1])}break;case 520:{var Xt={};I.level!=null&&(ee[I.r]=Xt,Xt.level=I.level),I.hidden&&(ee[I.r]=Xt,Xt.hidden=!0),I.hpt&&(ee[I.r]=Xt,Xt.hpt=I.hpt,Xt.hpx=Cl(I.hpt))}break;case 38:case 39:case 40:case 41:i["!margins"]||fl(i["!margins"]={}),i["!margins"][{38:"left",39:"right",40:"top",41:"bottom"}[ve]]=I;break;case 161:i["!margins"]||fl(i["!margins"]={}),i["!margins"].header=I.header,i["!margins"].footer=I.footer;break;case 574:I.RTL&&(R.Views[0].RTL=!0);break;case 146:z=I;break;case 2198:de=I;break;case 140:H=I;break;case 442:x?W.CodeName=I||W.name:R.WBProps.CodeName=I||"ThisWorkbook";break}}else _e||console.error("Missing Info for XLS Record 0x"+ve.toString(16)),e.l+=ye}return r.SheetNames=qr(c).sort(function(ar,Qe){return Number(ar)-Number(Qe)}).map(function(ar){return c[ar].name}),n.bookSheets||(r.Sheets=s),!r.SheetNames.length&&m["!ref"]?(r.SheetNames.push("Sheet1"),r.Sheets&&(r.Sheets.Sheet1=m)):r.Preamble=m,r.Sheets&&P.forEach(function(ar,Qe){r.Sheets[r.SheetNames[Qe]]["!autofilter"]=ar}),r.Strings=h,r.SSF=pn(Je),L.enc&&(r.Encryption=L.enc),de&&(r.Themes=de),r.Metadata={},H!==void 0&&(r.Metadata.Country=H),K.names.length>0&&(R.Names=K.names),r.Workbook=R,r}var sv={SI:"e0859ff2f94f6810ab9108002b27b3d9",DSI:"02d5cdd59c2e1b10939708002b2cf9ae",UDI:"05d5cdd59c2e1b10939708002b2cf9ae"};function x7(e,n,r){var s=ct.find(e,"/!DocumentSummaryInformation");if(s&&s.size>0)try{var i=Wg(s,F6,sv.DSI);for(var c in i)n[c]=i[c]}catch(x){if(r.WTF)throw x}var f=ct.find(e,"/!SummaryInformation");if(f&&f.size>0)try{var u=Wg(f,R6,sv.SI);for(var h in u)n[h]==null&&(n[h]=u[h])}catch(x){if(r.WTF)throw x}n.HeadingPairs&&n.TitlesOfParts&&(qy(n.HeadingPairs,n.TitlesOfParts,n,r),delete n.HeadingPairs,delete n.TitlesOfParts)}function Db(e,n){n||(n={}),Wh(n),ay(),n.codepage&&bh(n.codepage);var r,s;if(e.FullPaths){if(ct.find(e,"/encryption"))throw new Error("File is password-protected");r=ct.find(e,"!CompObj"),s=ct.find(e,"/Workbook")||ct.find(e,"/Book")}else{switch(n.type){case"base64":e=Br(tr(e));break;case"binary":e=Br(e);break;case"buffer":break;case"array":Array.isArray(e)||(e=Array.prototype.slice.call(e));break}xn(e,0),s={content:e}}var i,c;if(r&&f7(r),n.bookProps&&!n.bookSheets)i={};else{var f=ot?"buffer":"array";if(s&&s.content)i=h7(s.content,n);else if((c=ct.find(e,"PerfectOffice_MAIN"))&&c.content)i=ol.to_workbook(c.content,(n.type=f,n));else if((c=ct.find(e,"NativeContent_MAIN"))&&c.content)i=ol.to_workbook(c.content,(n.type=f,n));else throw(c=ct.find(e,"MN0"))&&c.content?new Error("Unsupported Works 4 for Mac file"):new Error("Cannot find Workbook stream");n.bookVBA&&e.FullPaths&&ct.find(e,"/_VBA_PROJECT_CUR/VBA/dir")&&(i.vbaraw=$5(e))}var u={};return e.FullPaths&&x7(e,u,n),i.Props=i.Custprops=u,n.bookFiles&&(i.cfb=e),i}var Mc={0:{f:YB},1:{f:$B},2:{f:oF},3:{f:rF},4:{f:tF},5:{f:lF},6:{f:uF},7:{f:sF},8:{f:mF},9:{f:pF},10:{f:hF},11:{f:xF},12:{f:eF},13:{f:cF},14:{f:aF},15:{f:nF},16:{f:Eb},17:{f:dF},18:{f:iF},19:{f:Fh},20:{},21:{},22:{},23:{},24:{},25:{},26:{},27:{},28:{},29:{},30:{},31:{},32:{},33:{},34:{},35:{T:1},36:{T:-1},37:{T:1},38:{T:-1},39:{f:PF},40:{},42:{},43:{f:h5},44:{f:d5},45:{f:x5},46:{f:m5},47:{f:p5},48:{},49:{f:g6},50:{},51:{f:j5},52:{T:1},53:{T:-1},54:{T:1},55:{T:-1},56:{T:1},57:{T:-1},58:{},59:{},60:{f:ab},62:{f:fF},63:{f:W5},64:{f:wF},65:{},66:{},67:{},68:{},69:{},70:{},128:{},129:{T:1},130:{T:-1},131:{T:1,f:En,p:0},132:{T:-1},133:{T:1},134:{T:-1},135:{T:1},136:{T:-1},137:{T:1,f:EF},138:{T:-1},139:{T:1},140:{T:-1},141:{T:1},142:{T:-1},143:{T:1},144:{T:-1},145:{T:1},146:{T:-1},147:{f:ZB},148:{f:JB,p:16},151:{f:yF},152:{},153:{f:UF},154:{},155:{},156:{f:zF},157:{},158:{},159:{T:1,f:Rk},160:{T:-1},161:{T:1,f:Ys},162:{T:-1},163:{T:1},164:{T:-1},165:{T:1},166:{T:-1},167:{},168:{},169:{},170:{},171:{},172:{T:1},173:{T:-1},174:{},175:{},176:{f:gF},177:{T:1},178:{T:-1},179:{T:1},180:{T:-1},181:{T:1},182:{T:-1},183:{T:1},184:{T:-1},185:{T:1},186:{T:-1},187:{T:1},188:{T:-1},189:{T:1},190:{T:-1},191:{T:1},192:{T:-1},193:{T:1},194:{T:-1},195:{T:1},196:{T:-1},197:{T:1},198:{T:-1},199:{T:1},200:{T:-1},201:{T:1},202:{T:-1},203:{T:1},204:{T:-1},205:{T:1},206:{T:-1},207:{T:1},208:{T:-1},209:{T:1},210:{T:-1},211:{T:1},212:{T:-1},213:{T:1},214:{T:-1},215:{T:1},216:{T:-1},217:{T:1},218:{T:-1},219:{T:1},220:{T:-1},221:{T:1},222:{T:-1},223:{T:1},224:{T:-1},225:{T:1},226:{T:-1},227:{T:1},228:{T:-1},229:{T:1},230:{T:-1},231:{T:1},232:{T:-1},233:{T:1},234:{T:-1},235:{T:1},236:{T:-1},237:{T:1},238:{T:-1},239:{T:1},240:{T:-1},241:{T:1},242:{T:-1},243:{T:1},244:{T:-1},245:{T:1},246:{T:-1},247:{T:1},248:{T:-1},249:{T:1},250:{T:-1},251:{T:1},252:{T:-1},253:{T:1},254:{T:-1},255:{T:1},256:{T:-1},257:{T:1},258:{T:-1},259:{T:1},260:{T:-1},261:{T:1},262:{T:-1},263:{T:1},264:{T:-1},265:{T:1},266:{T:-1},267:{T:1},268:{T:-1},269:{T:1},270:{T:-1},271:{T:1},272:{T:-1},273:{T:1},274:{T:-1},275:{T:1},276:{T:-1},277:{},278:{T:1},279:{T:-1},280:{T:1},281:{T:-1},282:{T:1},283:{T:1},284:{T:-1},285:{T:1},286:{T:-1},287:{T:1},288:{T:-1},289:{T:1},290:{T:-1},291:{T:1},292:{T:-1},293:{T:1},294:{T:-1},295:{T:1},296:{T:-1},297:{T:1},298:{T:-1},299:{T:1},300:{T:-1},301:{T:1},302:{T:-1},303:{T:1},304:{T:-1},305:{T:1},306:{T:-1},307:{T:1},308:{T:-1},309:{T:1},310:{T:-1},311:{T:1},312:{T:-1},313:{T:-1},314:{T:1},315:{T:-1},316:{T:1},317:{T:-1},318:{T:1},319:{T:-1},320:{T:1},321:{T:-1},322:{T:1},323:{T:-1},324:{T:1},325:{T:-1},326:{T:1},327:{T:-1},328:{T:1},329:{T:-1},330:{T:1},331:{T:-1},332:{T:1},333:{T:-1},334:{T:1},335:{f:L5},336:{T:-1},337:{f:I5,T:1},338:{T:-1},339:{T:1},340:{T:-1},341:{T:1},342:{T:-1},343:{T:1},344:{T:-1},345:{T:1},346:{T:-1},347:{T:1},348:{T:-1},349:{T:1},350:{T:-1},351:{},352:{},353:{T:1},354:{T:-1},355:{f:Md},357:{},358:{},359:{},360:{T:1},361:{},362:{f:rb},363:{},364:{},366:{},367:{},368:{},369:{},370:{},371:{},372:{T:1},373:{T:-1},374:{T:1},375:{T:-1},376:{T:1},377:{T:-1},378:{T:1},379:{T:-1},380:{T:1},381:{T:-1},382:{T:1},383:{T:-1},384:{T:1},385:{T:-1},386:{T:1},387:{T:-1},388:{T:1},389:{T:-1},390:{T:1},391:{T:-1},392:{T:1},393:{T:-1},394:{T:1},395:{T:-1},396:{},397:{},398:{},399:{},400:{},401:{T:1},403:{},404:{},405:{},406:{},407:{},408:{},409:{},410:{},411:{},412:{},413:{},414:{},415:{},416:{},417:{},418:{},419:{},420:{},421:{},422:{T:1},423:{T:1},424:{T:-1},425:{T:-1},426:{f:bF},427:{f:SF},428:{},429:{T:1},430:{T:-1},431:{T:1},432:{T:-1},433:{T:1},434:{T:-1},435:{T:1},436:{T:-1},437:{T:1},438:{T:-1},439:{T:1},440:{T:-1},441:{T:1},442:{T:-1},443:{T:1},444:{T:-1},445:{T:1},446:{T:-1},447:{T:1},448:{T:-1},449:{T:1},450:{T:-1},451:{T:1},452:{T:-1},453:{T:1},454:{T:-1},455:{T:1},456:{T:-1},457:{T:1},458:{T:-1},459:{T:1},460:{T:-1},461:{T:1},462:{T:-1},463:{T:1},464:{T:-1},465:{T:1},466:{T:-1},467:{T:1},468:{T:-1},469:{T:1},470:{T:-1},471:{},472:{},473:{T:1},474:{T:-1},475:{},476:{f:CF},477:{},478:{},479:{T:1},480:{T:-1},481:{T:1},482:{T:-1},483:{T:1},484:{T:-1},485:{f:QB},486:{T:1},487:{T:-1},488:{T:1},489:{T:-1},490:{T:1},491:{T:-1},492:{T:1},493:{T:-1},494:{f:vF},495:{T:1},496:{T:-1},497:{T:1},498:{T:-1},499:{},500:{T:1},501:{T:-1},502:{T:1},503:{T:-1},504:{},505:{T:1},506:{T:-1},507:{},508:{T:1},509:{T:-1},510:{T:1},511:{T:-1},512:{},513:{},514:{T:1},515:{T:-1},516:{T:1},517:{T:-1},518:{T:1},519:{T:-1},520:{T:1},521:{T:-1},522:{},523:{},524:{},525:{},526:{},527:{},528:{T:1},529:{T:-1},530:{T:1},531:{T:-1},532:{T:1},533:{T:-1},534:{},535:{},536:{},537:{},538:{T:1},539:{T:-1},540:{T:1},541:{T:-1},542:{T:1},548:{},549:{},550:{f:Md},551:{},552:{},553:{},554:{T:1},555:{T:-1},556:{T:1},557:{T:-1},558:{T:1},559:{T:-1},560:{T:1},561:{T:-1},562:{},564:{},565:{T:1},566:{T:-1},569:{T:1},570:{T:-1},572:{},573:{T:1},574:{T:-1},577:{},578:{},579:{},580:{},581:{},582:{},583:{},584:{},585:{},586:{},587:{},588:{T:-1},589:{},590:{T:1},591:{T:-1},592:{T:1},593:{T:-1},594:{T:1},595:{T:-1},596:{},597:{T:1},598:{T:-1},599:{T:1},600:{T:-1},601:{T:1},602:{T:-1},603:{T:1},604:{T:-1},605:{T:1},606:{T:-1},607:{},608:{T:1},609:{T:-1},610:{},611:{T:1},612:{T:-1},613:{T:1},614:{T:-1},615:{T:1},616:{T:-1},617:{T:1},618:{T:-1},619:{T:1},620:{T:-1},625:{},626:{T:1},627:{T:-1},628:{T:1},629:{T:-1},630:{T:1},631:{T:-1},632:{f:J5},633:{T:1},634:{T:-1},635:{T:1,f:Y5},636:{T:-1},637:{f:y6},638:{T:1},639:{},640:{T:-1},641:{T:1},642:{T:-1},643:{T:1},644:{},645:{T:-1},646:{T:1},648:{T:1},649:{},650:{T:-1},651:{f:FF},652:{},653:{T:1},654:{T:-1},655:{T:1},656:{T:-1},657:{T:1},658:{T:-1},659:{},660:{T:1},661:{},662:{T:-1},663:{},664:{T:1},665:{},666:{T:-1},667:{},668:{},669:{},671:{T:1},672:{T:-1},673:{T:1},674:{T:-1},675:{},676:{},677:{},678:{},679:{},680:{},681:{},1024:{},1025:{},1026:{T:1},1027:{T:-1},1028:{T:1},1029:{T:-1},1030:{},1031:{T:1},1032:{T:-1},1033:{T:1},1034:{T:-1},1035:{},1036:{},1037:{},1038:{T:1},1039:{T:-1},1040:{},1041:{T:1},1042:{T:-1},1043:{},1044:{},1045:{},1046:{T:1},1047:{T:-1},1048:{T:1},1049:{T:-1},1050:{},1051:{T:1},1052:{T:1},1053:{f:AF},1054:{T:1},1055:{},1056:{T:1},1057:{T:-1},1058:{T:1},1059:{T:-1},1061:{},1062:{T:1},1063:{T:-1},1064:{T:1},1065:{T:-1},1066:{T:1},1067:{T:-1},1068:{T:1},1069:{T:-1},1070:{T:1},1071:{T:-1},1072:{T:1},1073:{T:-1},1075:{T:1},1076:{T:-1},1077:{T:1},1078:{T:-1},1079:{T:1},1080:{T:-1},1081:{T:1},1082:{T:-1},1083:{T:1},1084:{T:-1},1085:{},1086:{T:1},1087:{T:-1},1088:{T:1},1089:{T:-1},1090:{T:1},1091:{T:-1},1092:{T:1},1093:{T:-1},1094:{T:1},1095:{T:-1},1096:{},1097:{T:1},1098:{},1099:{T:-1},1100:{T:1},1101:{T:-1},1102:{},1103:{},1104:{},1105:{},1111:{},1112:{},1113:{T:1},1114:{T:-1},1115:{T:1},1116:{T:-1},1117:{},1118:{T:1},1119:{T:-1},1120:{T:1},1121:{T:-1},1122:{T:1},1123:{T:-1},1124:{T:1},1125:{T:-1},1126:{},1128:{T:1},1129:{T:-1},1130:{},1131:{T:1},1132:{T:-1},1133:{T:1},1134:{T:-1},1135:{T:1},1136:{T:-1},1137:{T:1},1138:{T:-1},1139:{T:1},1140:{T:-1},1141:{},1142:{T:1},1143:{T:-1},1144:{T:1},1145:{T:-1},1146:{},1147:{T:1},1148:{T:-1},1149:{T:1},1150:{T:-1},1152:{T:1},1153:{T:-1},1154:{T:-1},1155:{T:-1},1156:{T:-1},1157:{T:1},1158:{T:-1},1159:{T:1},1160:{T:-1},1161:{T:1},1162:{T:-1},1163:{T:1},1164:{T:-1},1165:{T:1},1166:{T:-1},1167:{T:1},1168:{T:-1},1169:{T:1},1170:{T:-1},1171:{},1172:{T:1},1173:{T:-1},1177:{},1178:{T:1},1180:{},1181:{},1182:{},2048:{T:1},2049:{T:-1},2050:{},2051:{T:1},2052:{T:-1},2053:{},2054:{},2055:{T:1},2056:{T:-1},2057:{T:1},2058:{T:-1},2060:{},2067:{},2068:{T:1},2069:{T:-1},2070:{},2071:{},2072:{T:1},2073:{T:-1},2075:{},2076:{},2077:{T:1},2078:{T:-1},2079:{},2080:{T:1},2081:{T:-1},2082:{},2083:{T:1},2084:{T:-1},2085:{T:1},2086:{T:-1},2087:{T:1},2088:{T:-1},2089:{T:1},2090:{T:-1},2091:{},2092:{},2093:{T:1},2094:{T:-1},2095:{},2096:{T:1},2097:{T:-1},2098:{T:1},2099:{T:-1},2100:{T:1},2101:{T:-1},2102:{},2103:{T:1},2104:{T:-1},2105:{},2106:{T:1},2107:{T:-1},2108:{},2109:{T:1},2110:{T:-1},2111:{T:1},2112:{T:-1},2113:{T:1},2114:{T:-1},2115:{},2116:{},2117:{},2118:{T:1},2119:{T:-1},2120:{},2121:{T:1},2122:{T:-1},2123:{T:1},2124:{T:-1},2125:{},2126:{T:1},2127:{T:-1},2128:{},2129:{T:1},2130:{T:-1},2131:{T:1},2132:{T:-1},2133:{T:1},2134:{},2135:{},2136:{},2137:{T:1},2138:{T:-1},2139:{T:1},2140:{T:-1},2141:{},3072:{},3073:{},4096:{T:1},4097:{T:-1},5002:{T:1},5003:{T:-1},5081:{T:1},5082:{T:-1},5083:{},5084:{T:1},5085:{T:-1},5086:{T:1},5087:{T:-1},5088:{},5089:{},5090:{},5092:{T:1},5093:{T:-1},5094:{},5095:{T:1},5096:{T:-1},5097:{},5099:{},65535:{n:""}},zd={6:{f:_d},10:{f:Ya},12:{f:Qt},13:{f:Qt},14:{f:Pt},15:{f:Pt},16:{f:Sn},17:{f:Pt},18:{f:Pt},19:{f:Qt},20:{f:qg},21:{f:qg},23:{f:rb},24:{f:Kg},25:{f:Pt},26:{},27:{},28:{f:VT},29:{},34:{f:Pt},35:{f:Vg},38:{f:Sn},39:{f:Sn},40:{f:Sn},41:{f:Sn},42:{f:Pt},43:{f:Pt},47:{f:Qk},49:{f:kT},51:{f:Qt},60:{},61:{f:wT},64:{f:Pt},65:{f:TT},66:{f:Qt},77:{},80:{},81:{},82:{},85:{f:Qt},89:{},90:{},91:{},92:{f:gT},93:{f:YT},94:{},95:{f:Pt},96:{},97:{},99:{f:Pt},125:{f:ab},128:{f:IT},129:{f:vT},130:{f:Qt},131:{f:Pt},132:{f:Pt},133:{f:yT},134:{},140:{f:tk},141:{f:Qt},144:{},146:{f:rk},151:{},152:{},153:{},154:{},155:{},156:{f:Qt},157:{},158:{},160:{f:ok},161:{f:sk},174:{},175:{},176:{},177:{},178:{},180:{},181:{},182:{},184:{},185:{},189:{f:OT},190:{f:MT},193:{f:Ya},197:{},198:{},199:{},200:{},201:{},202:{f:Pt},203:{},204:{},205:{},206:{},207:{},208:{},209:{},210:{},211:{},213:{},215:{},216:{},217:{},218:{f:Qt},220:{},221:{f:Pt},222:{},224:{f:jT},225:{f:mT},226:{f:Ya},227:{},229:{f:KT},233:{},235:{},236:{},237:{},239:{},240:{},241:{},242:{},244:{},245:{},246:{},247:{},248:{},249:{},251:{},252:{f:bT},253:{f:DT},255:{f:ST},256:{},259:{},290:{},311:{},312:{},315:{},317:{f:Qy},318:{},319:{},320:{},330:{},331:{},333:{},334:{},335:{},336:{},337:{},338:{},339:{},340:{},351:{},352:{f:Pt},353:{f:Ya},401:{},402:{},403:{},404:{},405:{},406:{},407:{},408:{},425:{},426:{},427:{},428:{},429:{},430:{f:zT},431:{f:Pt},432:{},433:{},434:{},437:{},438:{f:ZT},439:{f:Pt},440:{f:$T},441:{},442:{f:Dl},443:{},444:{f:Qt},445:{},446:{},448:{f:Ya},449:{f:ET,r:2},450:{f:Ya},512:{f:Xg},513:{f:lk},515:{f:HT},516:{f:BT},517:{f:Gg},519:{f:ck},520:{f:_T},523:{},545:{f:Yg},549:{f:Pg},566:{},574:{f:AT},638:{f:NT},659:{},1048:{},1054:{f:FT},1084:{},1212:{f:XT},2048:{f:ek},2049:{},2050:{},2051:{},2052:{},2053:{},2054:{},2055:{},2056:{},2057:{f:oc},2058:{},2059:{},2060:{},2061:{},2062:{},2063:{},2064:{},2066:{},2067:{},2128:{},2129:{},2130:{},2131:{},2132:{},2133:{},2134:{},2135:{},2136:{},2137:{},2138:{},2146:{},2147:{r:12},2148:{},2149:{},2150:{},2151:{f:Ya},2152:{},2154:{},2155:{},2156:{},2161:{},2162:{},2164:{},2165:{},2166:{},2167:{},2168:{},2169:{},2170:{},2171:{},2172:{f:ak,r:12},2173:{f:O5,r:12},2174:{},2175:{},2180:{},2181:{},2182:{},2183:{},2184:{},2185:{},2186:{},2187:{},2188:{f:Pt,r:12},2189:{},2190:{r:12},2191:{},2192:{},2194:{},2195:{},2196:{f:PT,r:12},2197:{},2198:{f:k5,r:12},2199:{},2200:{},2201:{},2202:{f:GT,r:12},2203:{f:Ya},2204:{},2205:{},2206:{},2207:{},2211:{f:CT},2212:{},2213:{},2214:{},2215:{},4097:{},4098:{},4099:{},4102:{},4103:{},4105:{},4106:{},4107:{},4108:{},4109:{},4116:{},4117:{},4118:{},4119:{},4120:{},4121:{},4122:{},4123:{},4124:{},4125:{},4126:{},4127:{},4128:{},4129:{},4130:{},4132:{},4133:{},4134:{f:Qt},4135:{},4146:{},4147:{},4148:{},4149:{},4154:{},4156:{},4157:{},4158:{},4159:{},4160:{},4161:{},4163:{},4164:{f:ik},4165:{},4166:{},4168:{},4170:{},4171:{},4174:{},4175:{},4176:{},4177:{},4187:{},4188:{f:nk},4189:{},4191:{},4192:{},4193:{},4194:{},4195:{},4196:{},4197:{},4198:{},4199:{},4200:{},0:{f:Xg},1:{},2:{f:hk},3:{f:dk},4:{f:uk},5:{f:Gg},7:{f:xk},8:{},9:{f:oc},11:{},22:{f:Qt},30:{f:RT},31:{},32:{},33:{f:Yg},36:{},37:{f:Pg},50:{f:pk},62:{},52:{},67:{},68:{f:Qt},69:{},86:{},126:{},127:{f:fk},135:{},136:{},137:{},145:{},148:{},149:{},150:{},169:{},171:{},188:{},191:{},192:{},194:{},195:{},214:{f:mk},223:{},234:{},354:{},421:{},518:{f:_d},521:{f:oc},536:{f:Kg},547:{f:Vg},561:{},579:{},1030:{f:_d},1033:{f:oc},1091:{},2157:{},2163:{},2177:{},2240:{},2241:{},2242:{},2243:{},2244:{},2245:{},2246:{},2247:{},2248:{},2249:{},2250:{},2251:{},2262:{r:12},29282:{}};function Dr(e,n,r,s){var i=n;if(!isNaN(i)){var c=(r||[]).length||0,f=e.next(4);f.write_shift(2,i),f.write_shift(2,c),c>0&&Iy(r)&&e.push(r)}}function iv(e,n){var r=n||{},s=r.dense?[]:{};e=e.replace(/<!--.*?-->/g,"");var i=e.match(/<table/i);if(!i)throw new Error("Invalid HTML: could not find <table>");var c=e.match(/<\/table/i),f=i.index,u=c&&c.index||e.length,h=HA(e.slice(f,u),/(:?<tr[^>]*>)/i,"<tr>"),x=-1,m=0,v=0,y=0,_={s:{r:1e7,c:1e7},e:{r:0,c:0}},E=[];for(f=0;f<h.length;++f){var b=h[f].trim(),C=b.slice(0,3).toLowerCase();if(C=="<tr"){if(++x,r.sheetRows&&r.sheetRows<=x){--x;break}m=0;continue}if(!(C!="<td"&&C!="<th")){var D=b.split(/<\/t[dh]>/i);for(u=0;u<D.length;++u){var k=D[u].trim();if(k.match(/<t[dh]/i)){for(var w=k,H=0;w.charAt(0)=="<"&&(H=w.indexOf(">"))>-1;)w=w.slice(H+1);for(var V=0;V<E.length;++V){var z=E[V];z.s.c==m&&z.s.r<x&&x<=z.e.r&&(m=z.e.c+1,V=-1)}var R=Ge(k.slice(0,k.indexOf(">")));y=R.colspan?+R.colspan:1,((v=+R.rowspan)>1||y>1)&&E.push({s:{r:x,c:m},e:{r:x+(v||1)-1,c:m+y-1}});var W=R.t||R["data-t"]||"";if(!w.length){m+=y;continue}if(w=wy(w),_.s.r>x&&(_.s.r=x),_.e.r<x&&(_.e.r=x),_.s.c>m&&(_.s.c=m),_.e.c<m&&(_.e.c=m),!w.length){m+=y;continue}var U={t:"s",v:w};r.raw||!w.trim().length||W=="s"||(w==="TRUE"?U={t:"b",v:!0}:w==="FALSE"?U={t:"b",v:!1}:isNaN(Or(w))?isNaN(Qi(w).getDate())||(U={t:"d",v:on(w)},r.cellDates||(U={t:"n",v:Rn(U.v)}),U.z=r.dateNF||Je[14]):U={t:"n",v:Or(w)}),r.dense?(s[x]||(s[x]=[]),s[x][m]=U):s[Ke({r:x,c:m})]=U,m+=y}}}}return s["!ref"]=ft(_),E.length&&(s["!merges"]=E),s}function p7(e,n,r,s){for(var i=e["!merges"]||[],c=[],f=n.s.c;f<=n.e.c;++f){for(var u=0,h=0,x=0;x<i.length;++x)if(!(i[x].s.r>r||i[x].s.c>f)&&!(i[x].e.r<r||i[x].e.c<f)){if(i[x].s.r<r||i[x].s.c<f){u=-1;break}u=i[x].e.r-i[x].s.r+1,h=i[x].e.c-i[x].s.c+1;break}if(!(u<0)){var m=Ke({r,c:f}),v=s.dense?(e[r]||[])[f]:e[m],y=v&&v.v!=null&&(v.h||Ah(v.w||(Sa(v),v.w)||""))||"",_={};u>1&&(_.rowspan=u),h>1&&(_.colspan=h),s.editable?y='<span contenteditable="true">'+y+"</span>":v&&(_["data-t"]=v&&v.t||"z",v.v!=null&&(_["data-v"]=v.v),v.z!=null&&(_["data-z"]=v.z),v.l&&(v.l.Target||"#").charAt(0)!="#"&&(y='<a href="'+v.l.Target+'">'+y+"</a>")),_.id=(s.id||"sjs")+"-"+m,c.push(t6("td",y,_))}}var E="<tr>";return E+c.join("")+"</tr>"}var m7='<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>',g7="</body></html>";function v7(e,n){var r=e.match(/<table[\s\S]*?>[\s\S]*?<\/table>/gi);if(!r||r.length==0)throw new Error("Invalid HTML: could not find <table>");if(r.length==1)return is(iv(r[0],n),n);var s=Xh();return r.forEach(function(i,c){Gh(s,iv(i,n),"Sheet"+(c+1))}),s}function y7(e,n,r){var s=[];return s.join("")+"<table"+(r&&r.id?' id="'+r.id+'"':"")+">"}function b7(e,n){var r=n||{},s=r.header!=null?r.header:m7,i=r.footer!=null?r.footer:g7,c=[s],f=e0(e["!ref"]);r.dense=Array.isArray(e),c.push(y7(e,f,r));for(var u=f.s.r;u<=f.e.r;++u)c.push(p7(e,f,u,r));return c.push("</table>"+i),c.join("")}function Bb(e,n,r){var s=r||{},i=0,c=0;if(s.origin!=null)if(typeof s.origin=="number")i=s.origin;else{var f=typeof s.origin=="string"?Bn(s.origin):s.origin;i=f.r,c=f.c}var u=n.getElementsByTagName("tr"),h=Math.min(s.sheetRows||1e7,u.length),x={s:{r:0,c:0},e:{r:i,c}};if(e["!ref"]){var m=e0(e["!ref"]);x.s.r=Math.min(x.s.r,m.s.r),x.s.c=Math.min(x.s.c,m.s.c),x.e.r=Math.max(x.e.r,m.e.r),x.e.c=Math.max(x.e.c,m.e.c),i==-1&&(x.e.r=i=m.e.r+1)}var v=[],y=0,_=e["!rows"]||(e["!rows"]=[]),E=0,b=0,C=0,D=0,k=0,w=0;for(e["!cols"]||(e["!cols"]=[]);E<u.length&&b<h;++E){var H=u[E];if(lv(H)){if(s.display)continue;_[b]={hidden:!0}}var V=H.children;for(C=D=0;C<V.length;++C){var z=V[C];if(!(s.display&&lv(z))){var R=z.hasAttribute("data-v")?z.getAttribute("data-v"):z.hasAttribute("v")?z.getAttribute("v"):wy(z.innerHTML),W=z.getAttribute("data-z")||z.getAttribute("z");for(y=0;y<v.length;++y){var U=v[y];U.s.c==D+c&&U.s.r<b+i&&b+i<=U.e.r&&(D=U.e.c+1-c,y=-1)}w=+z.getAttribute("colspan")||1,((k=+z.getAttribute("rowspan")||1)>1||w>1)&&v.push({s:{r:b+i,c:D+c},e:{r:b+i+(k||1)-1,c:D+c+(w||1)-1}});var fe={t:"s",v:R},Z=z.getAttribute("data-t")||z.getAttribute("t")||"";R!=null&&(R.length==0?fe.t=Z||"z":s.raw||R.trim().length==0||Z=="s"||(R==="TRUE"?fe={t:"b",v:!0}:R==="FALSE"?fe={t:"b",v:!1}:isNaN(Or(R))?isNaN(Qi(R).getDate())||(fe={t:"d",v:on(R)},s.cellDates||(fe={t:"n",v:Rn(fe.v)}),fe.z=s.dateNF||Je[14]):fe={t:"n",v:Or(R)})),fe.z===void 0&&W!=null&&(fe.z=W);var L="",de=z.getElementsByTagName("A");if(de&&de.length)for(var Ce=0;Ce<de.length&&!(de[Ce].hasAttribute("href")&&(L=de[Ce].getAttribute("href"),L.charAt(0)!="#"));++Ce);L&&L.charAt(0)!="#"&&(fe.l={Target:L}),s.dense?(e[b+i]||(e[b+i]=[]),e[b+i][D+c]=fe):e[Ke({c:D+c,r:b+i})]=fe,x.e.c<D+c&&(x.e.c=D+c),D+=w}}++b}return v.length&&(e["!merges"]=(e["!merges"]||[]).concat(v)),x.e.r=Math.max(x.e.r,b-1+i),e["!ref"]=ft(x),b>=h&&(e["!fullref"]=ft((x.e.r=u.length-E+b-1+i,x))),e}function Fb(e,n){var r=n||{},s=r.dense?[]:{};return Bb(s,e,n)}function S7(e,n){return is(Fb(e,n),n)}function lv(e){var n="",r=_7(e);return r&&(n=r(e).getPropertyValue("display")),n||(n=e.style&&e.style.display),n==="none"}function _7(e){return e.ownerDocument.defaultView&&typeof e.ownerDocument.defaultView.getComputedStyle=="function"?e.ownerDocument.defaultView.getComputedStyle:typeof getComputedStyle=="function"?getComputedStyle:null}function C7(e){var n=e.replace(/[\t\r\n]/g," ").trim().replace(/ +/g," ").replace(/<text:s\/>/g," ").replace(/<text:s text:c="(\d+)"\/>/g,function(s,i){return Array(parseInt(i,10)+1).join(" ")}).replace(/<text:tab[^>]*\/>/g,"	").replace(/<text:line-break\/>/g,`
`),r=dt(n.replace(/<[^>]*>/g,""));return[r]}var ov={day:["d","dd"],month:["m","mm"],year:["y","yy"],hours:["h","hh"],minutes:["m","mm"],seconds:["s","ss"],"am-pm":["A/P","AM/PM"],"day-of-week":["ddd","dddd"],era:["e","ee"],quarter:["\\Qm",'m\\"th quarter"']};function Rb(e,n){var r=n||{},s=Th(e),i=[],c,f,u={name:""},h="",x=0,m,v,y={},_=[],E=r.dense?[]:{},b,C,D={value:""},k="",w=0,H=[],V=-1,z=-1,R={s:{r:1e6,c:1e7},e:{r:0,c:0}},W=0,U={},fe=[],Z={},L=0,de=0,Ce=[],me=1,X=1,ee=[],we={Names:[]},K={},ne=["",""],Te=[],O={},J="",P=0,G=!1,ue=!1,he=0;for(bl.lastIndex=0,s=s.replace(/<!--([\s\S]*?)-->/mg,"").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm,"");b=bl.exec(s);)switch(b[3]=b[3].replace(/_.*$/,"")){case"table":case"工作表":b[1]==="/"?(R.e.c>=R.s.c&&R.e.r>=R.s.r?E["!ref"]=ft(R):E["!ref"]="A1:A1",r.sheetRows>0&&r.sheetRows<=R.e.r&&(E["!fullref"]=E["!ref"],R.e.r=r.sheetRows-1,E["!ref"]=ft(R)),fe.length&&(E["!merges"]=fe),Ce.length&&(E["!rows"]=Ce),m.name=m.名称||m.name,typeof JSON<"u"&&JSON.stringify(m),_.push(m.name),y[m.name]=E,ue=!1):b[0].charAt(b[0].length-2)!=="/"&&(m=Ge(b[0],!1),V=z=-1,R.s.r=R.s.c=1e7,R.e.r=R.e.c=0,E=r.dense?[]:{},fe=[],Ce=[],ue=!0);break;case"table-row-group":b[1]==="/"?--W:++W;break;case"table-row":case"行":if(b[1]==="/"){V+=me,me=1;break}if(v=Ge(b[0],!1),v.行号?V=v.行号-1:V==-1&&(V=0),me=+v["number-rows-repeated"]||1,me<10)for(he=0;he<me;++he)W>0&&(Ce[V+he]={level:W});z=-1;break;case"covered-table-cell":b[1]!=="/"&&++z,r.sheetStubs&&(r.dense?(E[V]||(E[V]=[]),E[V][z]={t:"z"}):E[Ke({r:V,c:z})]={t:"z"}),k="",H=[];break;case"table-cell":case"数据":if(b[0].charAt(b[0].length-2)==="/")++z,D=Ge(b[0],!1),X=parseInt(D["number-columns-repeated"]||"1",10),C={t:"z",v:null},D.formula&&r.cellFormula!=!1&&(C.f=nv(dt(D.formula))),(D.数据类型||D["value-type"])=="string"&&(C.t="s",C.v=dt(D["string-value"]||""),r.dense?(E[V]||(E[V]=[]),E[V][z]=C):E[Ke({r:V,c:z})]=C),z+=X-1;else if(b[1]!=="/"){++z,k="",w=0,H=[],X=1;var ve=me?V+me-1:V;if(z>R.e.c&&(R.e.c=z),z<R.s.c&&(R.s.c=z),V<R.s.r&&(R.s.r=V),ve>R.e.r&&(R.e.r=ve),D=Ge(b[0],!1),Te=[],O={},C={t:D.数据类型||D["value-type"],v:null},r.cellFormula)if(D.formula&&(D.formula=dt(D.formula)),D["number-matrix-columns-spanned"]&&D["number-matrix-rows-spanned"]&&(L=parseInt(D["number-matrix-rows-spanned"],10)||0,de=parseInt(D["number-matrix-columns-spanned"],10)||0,Z={s:{r:V,c:z},e:{r:V+L-1,c:z+de-1}},C.F=ft(Z),ee.push([Z,C.F])),D.formula)C.f=nv(D.formula);else for(he=0;he<ee.length;++he)V>=ee[he][0].s.r&&V<=ee[he][0].e.r&&z>=ee[he][0].s.c&&z<=ee[he][0].e.c&&(C.F=ee[he][1]);switch((D["number-columns-spanned"]||D["number-rows-spanned"])&&(L=parseInt(D["number-rows-spanned"],10)||0,de=parseInt(D["number-columns-spanned"],10)||0,Z={s:{r:V,c:z},e:{r:V+L-1,c:z+de-1}},fe.push(Z)),D["number-columns-repeated"]&&(X=parseInt(D["number-columns-repeated"],10)),C.t){case"boolean":C.t="b",C.v=Rt(D["boolean-value"]);break;case"float":C.t="n",C.v=parseFloat(D.value);break;case"percentage":C.t="n",C.v=parseFloat(D.value);break;case"currency":C.t="n",C.v=parseFloat(D.value);break;case"date":C.t="d",C.v=on(D["date-value"]),r.cellDates||(C.t="n",C.v=Rn(C.v)),C.z="m/d/yy";break;case"time":C.t="n",C.v=LA(D["time-value"])/86400,r.cellDates&&(C.t="d",C.v=Xc(C.v)),C.z="HH:MM:SS";break;case"number":C.t="n",C.v=parseFloat(D.数据数值);break;default:if(C.t==="string"||C.t==="text"||!C.t)C.t="s",D["string-value"]!=null&&(k=dt(D["string-value"]),H=[]);else throw new Error("Unsupported value type "+C.t)}}else{if(G=!1,C.t==="s"&&(C.v=k||"",H.length&&(C.R=H),G=w==0),K.Target&&(C.l=K),Te.length>0&&(C.c=Te,Te=[]),k&&r.cellText!==!1&&(C.w=k),G&&(C.t="z",delete C.v),(!G||r.sheetStubs)&&!(r.sheetRows&&r.sheetRows<=V))for(var ye=0;ye<me;++ye){if(X=parseInt(D["number-columns-repeated"]||"1",10),r.dense)for(E[V+ye]||(E[V+ye]=[]),E[V+ye][z]=ye==0?C:pn(C);--X>0;)E[V+ye][z+X]=pn(C);else for(E[Ke({r:V+ye,c:z})]=C;--X>0;)E[Ke({r:V+ye,c:z+X})]=pn(C);R.e.c<=z&&(R.e.c=z)}X=parseInt(D["number-columns-repeated"]||"1",10),z+=X-1,X=0,C={},k="",H=[]}K={};break;case"document":case"document-content":case"电子表格文档":case"spreadsheet":case"主体":case"scripts":case"styles":case"font-face-decls":case"master-styles":if(b[1]==="/"){if((c=i.pop())[0]!==b[3])throw"Bad state: "+c}else b[0].charAt(b[0].length-2)!=="/"&&i.push([b[3],!0]);break;case"annotation":if(b[1]==="/"){if((c=i.pop())[0]!==b[3])throw"Bad state: "+c;O.t=k,H.length&&(O.R=H),O.a=J,Te.push(O)}else b[0].charAt(b[0].length-2)!=="/"&&i.push([b[3],!1]);J="",P=0,k="",w=0,H=[];break;case"creator":b[1]==="/"?J=s.slice(P,b.index):P=b.index+b[0].length;break;case"meta":case"元数据":case"settings":case"config-item-set":case"config-item-map-indexed":case"config-item-map-entry":case"config-item-map-named":case"shapes":case"frame":case"text-box":case"image":case"data-pilot-tables":case"list-style":case"form":case"dde-links":case"event-listeners":case"chart":if(b[1]==="/"){if((c=i.pop())[0]!==b[3])throw"Bad state: "+c}else b[0].charAt(b[0].length-2)!=="/"&&i.push([b[3],!1]);k="",w=0,H=[];break;case"scientific-number":break;case"currency-symbol":break;case"currency-style":break;case"number-style":case"percentage-style":case"date-style":case"time-style":if(b[1]==="/"){if(U[u.name]=h,(c=i.pop())[0]!==b[3])throw"Bad state: "+c}else b[0].charAt(b[0].length-2)!=="/"&&(h="",u=Ge(b[0],!1),i.push([b[3],!0]));break;case"script":break;case"libraries":break;case"automatic-styles":break;case"default-style":case"page-layout":break;case"style":break;case"map":break;case"font-face":break;case"paragraph-properties":break;case"table-properties":break;case"table-column-properties":break;case"table-row-properties":break;case"table-cell-properties":break;case"number":switch(i[i.length-1][0]){case"time-style":case"date-style":f=Ge(b[0],!1),h+=ov[b[3]][f.style==="long"?1:0];break}break;case"fraction":break;case"day":case"month":case"year":case"era":case"day-of-week":case"week-of-year":case"quarter":case"hours":case"minutes":case"seconds":case"am-pm":switch(i[i.length-1][0]){case"time-style":case"date-style":f=Ge(b[0],!1),h+=ov[b[3]][f.style==="long"?1:0];break}break;case"boolean-style":break;case"boolean":break;case"text-style":break;case"text":if(b[0].slice(-2)==="/>")break;if(b[1]==="/")switch(i[i.length-1][0]){case"number-style":case"date-style":case"time-style":h+=s.slice(x,b.index);break}else x=b.index+b[0].length;break;case"named-range":f=Ge(b[0],!1),ne=Cd(f["cell-range-address"]);var _e={Name:f.name,Ref:ne[0]+"!"+ne[1]};ue&&(_e.Sheet=_.length),we.Names.push(_e);break;case"text-content":break;case"text-properties":break;case"embedded-text":break;case"body":case"电子表格":break;case"forms":break;case"table-column":break;case"table-header-rows":break;case"table-rows":break;case"table-column-group":break;case"table-header-columns":break;case"table-columns":break;case"null-date":break;case"graphic-properties":break;case"calculation-settings":break;case"named-expressions":break;case"label-range":break;case"label-ranges":break;case"named-expression":break;case"sort":break;case"sort-by":break;case"sort-groups":break;case"tab":break;case"line-break":break;case"span":break;case"p":case"文本串":if(["master-styles"].indexOf(i[i.length-1][0])>-1)break;if(b[1]==="/"&&(!D||!D["string-value"])){var Pe=C7(s.slice(w,b.index));k=(k.length>0?k+`
`:"")+Pe[0]}else Ge(b[0],!1),w=b.index+b[0].length;break;case"s":break;case"database-range":if(b[1]==="/")break;try{ne=Cd(Ge(b[0])["target-range-address"]),y[ne[0]]["!autofilter"]={ref:ne[1]}}catch{}break;case"date":break;case"object":break;case"title":case"标题":break;case"desc":break;case"binary-data":break;case"table-source":break;case"scenario":break;case"iteration":break;case"content-validations":break;case"content-validation":break;case"help-message":break;case"error-message":break;case"database-ranges":break;case"filter":break;case"filter-and":break;case"filter-or":break;case"filter-condition":break;case"list-level-style-bullet":break;case"list-level-style-number":break;case"list-level-properties":break;case"sender-firstname":case"sender-lastname":case"sender-initials":case"sender-title":case"sender-position":case"sender-email":case"sender-phone-private":case"sender-fax":case"sender-company":case"sender-phone-work":case"sender-street":case"sender-city":case"sender-postal-code":case"sender-country":case"sender-state-or-province":case"author-name":case"author-initials":case"chapter":case"file-name":case"template-name":case"sheet-name":break;case"event-listener":break;case"initial-creator":case"creation-date":case"print-date":case"generator":case"document-statistic":case"user-defined":case"editing-duration":case"editing-cycles":break;case"config-item":break;case"page-number":break;case"page-count":break;case"time":break;case"cell-range-source":break;case"detective":break;case"operation":break;case"highlighted-range":break;case"data-pilot-table":case"source-cell-range":case"source-service":case"data-pilot-field":case"data-pilot-level":case"data-pilot-subtotals":case"data-pilot-subtotal":case"data-pilot-members":case"data-pilot-member":case"data-pilot-display-info":case"data-pilot-sort-info":case"data-pilot-layout-info":case"data-pilot-field-reference":case"data-pilot-groups":case"data-pilot-group":case"data-pilot-group-member":break;case"rect":break;case"dde-connection-decls":case"dde-connection-decl":case"dde-link":case"dde-source":break;case"properties":break;case"property":break;case"a":if(b[1]!=="/"){if(K=Ge(b[0],!1),!K.href)break;K.Target=dt(K.href),delete K.href,K.Target.charAt(0)=="#"&&K.Target.indexOf(".")>-1?(ne=Cd(K.Target.slice(1)),K.Target="#"+ne[0]+"!"+ne[1]):K.Target.match(/^\.\.[\\\/]/)&&(K.Target=K.Target.slice(3))}break;case"table-protection":break;case"data-pilot-grand-total":break;case"office-document-common-attrs":break;default:switch(b[2]){case"dc:":case"calcext:":case"loext:":case"ooo:":case"chartooo:":case"draw:":case"style:":case"chart:":case"form:":case"uof:":case"表:":case"字:":break;default:if(r.WTF)throw new Error(b)}}var I={Sheets:y,SheetNames:_,Workbook:we};return r.bookSheets&&delete I.Sheets,I}function cv(e,n){n=n||{},yr(e,"META-INF/manifest.xml")&&H6(Jt(e,"META-INF/manifest.xml"),n);var r=er(e,"content.xml");if(!r)throw new Error("Missing content.xml in ODS / UOF file");var s=Rb(At(r),n);return yr(e,"meta.xml")&&(s.Props=Gy(Jt(e,"meta.xml"))),s}function fv(e,n){return Rb(e,n)}function zh(e){return new DataView(e.buffer,e.byteOffset,e.byteLength)}function Ud(e){return typeof TextDecoder<"u"?new TextDecoder().decode(e):At(Vs(e))}function Wd(e){var n=e.reduce(function(i,c){return i+c.length},0),r=new Uint8Array(n),s=0;return e.forEach(function(i){r.set(i,s),s+=i.length}),r}function uv(e){return e-=e>>1&1431655765,e=(e&858993459)+(e>>2&858993459),(e+(e>>4)&252645135)*16843009>>>24}function E7(e,n){for(var r=(e[n+15]&127)<<7|e[n+14]>>1,s=e[n+14]&1,i=n+13;i>=n;--i)s=s*256+e[i];return(e[n+15]&128?-s:s)*Math.pow(10,r-6176)}function El(e,n){var r=n?n[0]:0,s=e[r]&127;e:if(e[r++]>=128&&(s|=(e[r]&127)<<7,e[r++]<128||(s|=(e[r]&127)<<14,e[r++]<128)||(s|=(e[r]&127)<<21,e[r++]<128)||(s+=(e[r]&127)*Math.pow(2,28),++r,e[r++]<128)||(s+=(e[r]&127)*Math.pow(2,35),++r,e[r++]<128)||(s+=(e[r]&127)*Math.pow(2,42),++r,e[r++]<128)))break e;return n&&(n[0]=r),s}function rn(e){var n=0,r=e[n]&127;e:if(e[n++]>=128){if(r|=(e[n]&127)<<7,e[n++]<128||(r|=(e[n]&127)<<14,e[n++]<128)||(r|=(e[n]&127)<<21,e[n++]<128))break e;r|=(e[n]&127)<<28}return r}function _n(e){for(var n=[],r=[0];r[0]<e.length;){var s=r[0],i=El(e,r),c=i&7;i=Math.floor(i/8);var f=0,u;if(i==0)break;switch(c){case 0:{for(var h=r[0];e[r[0]++]>=128;);u=e.slice(h,r[0])}break;case 5:f=4,u=e.slice(r[0],r[0]+f),r[0]+=f;break;case 1:f=8,u=e.slice(r[0],r[0]+f),r[0]+=f;break;case 2:f=El(e,r),u=e.slice(r[0],r[0]+f),r[0]+=f;break;default:throw new Error("PB Type ".concat(c," for Field ").concat(i," at offset ").concat(s))}var x={data:u,type:c};n[i]==null?n[i]=[x]:n[i].push(x)}return n}function Uh(e,n){return e?.map(function(r){return n(r.data)})||[]}function w7(e){for(var n,r=[],s=[0];s[0]<e.length;){var i=El(e,s),c=_n(e.slice(s[0],s[0]+i));s[0]+=i;var f={id:rn(c[1][0].data),messages:[]};c[2].forEach(function(u){var h=_n(u.data),x=rn(h[3][0].data);f.messages.push({meta:h,data:e.slice(s[0],s[0]+x)}),s[0]+=x}),(n=c[3])!=null&&n[0]&&(f.merge=rn(c[3][0].data)>>>0>0),r.push(f)}return r}function A7(e,n){if(e!=0)throw new Error("Unexpected Snappy chunk type ".concat(e));for(var r=[0],s=El(n,r),i=[];r[0]<n.length;){var c=n[r[0]]&3;if(c==0){var f=n[r[0]++]>>2;if(f<60)++f;else{var u=f-59;f=n[r[0]],u>1&&(f|=n[r[0]+1]<<8),u>2&&(f|=n[r[0]+2]<<16),u>3&&(f|=n[r[0]+3]<<24),f>>>=0,f++,r[0]+=u}i.push(n.slice(r[0],r[0]+f)),r[0]+=f;continue}else{var h=0,x=0;if(c==1?(x=(n[r[0]]>>2&7)+4,h=(n[r[0]++]&224)<<3,h|=n[r[0]++]):(x=(n[r[0]++]>>2)+1,c==2?(h=n[r[0]]|n[r[0]+1]<<8,r[0]+=2):(h=(n[r[0]]|n[r[0]+1]<<8|n[r[0]+2]<<16|n[r[0]+3]<<24)>>>0,r[0]+=4)),i=[Wd(i)],h==0)throw new Error("Invalid offset 0");if(h>i[0].length)throw new Error("Invalid offset beyond length");if(x>=h)for(i.push(i[0].slice(-h)),x-=h;x>=i[i.length-1].length;)i.push(i[i.length-1]),x-=i[i.length-1].length;i.push(i[0].slice(-h,-h+x))}}var m=Wd(i);if(m.length!=s)throw new Error("Unexpected length: ".concat(m.length," != ").concat(s));return m}function T7(e){for(var n=[],r=0;r<e.length;){var s=e[r++],i=e[r]|e[r+1]<<8|e[r+2]<<16;r+=3,n.push(A7(s,e.slice(r,r+i))),r+=i}if(r!==e.length)throw new Error("data is not a valid framed stream!");return Wd(n)}function k7(e,n,r,s){var i=zh(e),c=i.getUint32(4,!0),f=(s>1?12:8)+uv(c&(s>1?3470:398))*4,u=-1,h=-1,x=NaN,m=new Date(2001,0,1);c&512&&(u=i.getUint32(f,!0),f+=4),f+=uv(c&(s>1?12288:4096))*4,c&16&&(h=i.getUint32(f,!0),f+=4),c&32&&(x=i.getFloat64(f,!0),f+=8),c&64&&(m.setTime(m.getTime()+i.getFloat64(f,!0)*1e3),f+=8);var v;switch(e[2]){case 0:break;case 2:v={t:"n",v:x};break;case 3:v={t:"s",v:n[h]};break;case 5:v={t:"d",v:m};break;case 6:v={t:"b",v:x>0};break;case 7:v={t:"n",v:x/86400};break;case 8:v={t:"e",v:0};break;case 9:if(u>-1)v={t:"s",v:r[u]};else if(h>-1)v={t:"s",v:n[h]};else if(!isNaN(x))v={t:"n",v:x};else throw new Error("Unsupported cell type ".concat(e.slice(0,4)));break;default:throw new Error("Unsupported cell type ".concat(e.slice(0,4)))}return v}function D7(e,n,r){var s=zh(e),i=s.getUint32(8,!0),c=12,f=-1,u=-1,h=NaN,x=NaN,m=new Date(2001,0,1);i&1&&(h=E7(e,c),c+=16),i&2&&(x=s.getFloat64(c,!0),c+=8),i&4&&(m.setTime(m.getTime()+s.getFloat64(c,!0)*1e3),c+=8),i&8&&(u=s.getUint32(c,!0),c+=4),i&16&&(f=s.getUint32(c,!0),c+=4);var v;switch(e[1]){case 0:break;case 2:v={t:"n",v:h};break;case 3:v={t:"s",v:n[u]};break;case 5:v={t:"d",v:m};break;case 6:v={t:"b",v:x>0};break;case 7:v={t:"n",v:x/86400};break;case 8:v={t:"e",v:0};break;case 9:if(f>-1)v={t:"s",v:r[f]};else throw new Error("Unsupported cell type ".concat(e[1]," : ").concat(i&31," : ").concat(e.slice(0,4)));break;case 10:v={t:"n",v:h};break;default:throw new Error("Unsupported cell type ".concat(e[1]," : ").concat(i&31," : ").concat(e.slice(0,4)))}return v}function B7(e,n,r){switch(e[0]){case 0:case 1:case 2:case 3:return k7(e,n,r,e[0]);case 5:return D7(e,n,r);default:throw new Error("Unsupported payload version ".concat(e[0]))}}function es(e){var n=_n(e);return El(n[1][0].data)}function dv(e,n){var r=_n(n.data),s=rn(r[1][0].data),i=r[3],c=[];return(i||[]).forEach(function(f){var u=_n(f.data),h=rn(u[1][0].data)>>>0;switch(s){case 1:c[h]=Ud(u[3][0].data);break;case 8:{var x=e[es(u[9][0].data)][0],m=_n(x.data),v=e[es(m[1][0].data)][0],y=rn(v.meta[1][0].data);if(y!=2001)throw new Error("2000 unexpected reference to ".concat(y));var _=_n(v.data);c[h]=_[3].map(function(E){return Ud(E.data)}).join("")}break}}),c}function F7(e,n){var r,s,i,c,f,u,h,x,m,v,y,_,E,b,C=_n(e),D=rn(C[1][0].data)>>>0,k=rn(C[2][0].data)>>>0,w=((s=(r=C[8])==null?void 0:r[0])==null?void 0:s.data)&&rn(C[8][0].data)>0||!1,H,V;if((c=(i=C[7])==null?void 0:i[0])!=null&&c.data&&n!=0)H=(u=(f=C[7])==null?void 0:f[0])==null?void 0:u.data,V=(x=(h=C[6])==null?void 0:h[0])==null?void 0:x.data;else if((v=(m=C[4])==null?void 0:m[0])!=null&&v.data&&n!=1)H=(_=(y=C[4])==null?void 0:y[0])==null?void 0:_.data,V=(b=(E=C[3])==null?void 0:E[0])==null?void 0:b.data;else throw"NUMBERS Tile missing ".concat(n," cell storage");for(var z=w?4:1,R=zh(H),W=[],U=0;U<H.length/2;++U){var fe=R.getUint16(U*2,!0);fe<65535&&W.push([U,fe])}if(W.length!=k)throw"Expected ".concat(k," cells, found ").concat(W.length);var Z=[];for(U=0;U<W.length-1;++U)Z[W[U][0]]=V.subarray(W[U][1]*z,W[U+1][1]*z);return W.length>=1&&(Z[W[W.length-1][0]]=V.subarray(W[W.length-1][1]*z)),{R:D,cells:Z}}function R7(e,n){var r,s=_n(n.data),i=(r=s?.[7])!=null&&r[0]?rn(s[7][0].data)>>>0>0?1:0:-1,c=Uh(s[5],function(f){return F7(f,i)});return{nrows:rn(s[4][0].data)>>>0,data:c.reduce(function(f,u){return f[u.R]||(f[u.R]=[]),u.cells.forEach(function(h,x){if(f[u.R][x])throw new Error("Duplicate cell r=".concat(u.R," c=").concat(x));f[u.R][x]=h}),f},[])}}function N7(e,n,r){var s,i=_n(n.data),c={s:{r:0,c:0},e:{r:0,c:0}};if(c.e.r=(rn(i[6][0].data)>>>0)-1,c.e.r<0)throw new Error("Invalid row varint ".concat(i[6][0].data));if(c.e.c=(rn(i[7][0].data)>>>0)-1,c.e.c<0)throw new Error("Invalid col varint ".concat(i[7][0].data));r["!ref"]=ft(c);var f=_n(i[4][0].data),u=dv(e,e[es(f[4][0].data)][0]),h=(s=f[17])!=null&&s[0]?dv(e,e[es(f[17][0].data)][0]):[],x=_n(f[3][0].data),m=0;x[1].forEach(function(v){var y=_n(v.data),_=e[es(y[2][0].data)][0],E=rn(_.meta[1][0].data);if(E!=6002)throw new Error("6001 unexpected reference to ".concat(E));var b=R7(e,_);b.data.forEach(function(C,D){C.forEach(function(k,w){var H=Ke({r:m+D,c:w}),V=B7(k,u,h);V&&(r[H]=V)})}),m+=b.nrows})}function O7(e,n){var r=_n(n.data),s={"!ref":"A1"},i=e[es(r[2][0].data)],c=rn(i[0].meta[1][0].data);if(c!=6001)throw new Error("6000 unexpected reference to ".concat(c));return N7(e,i[0],s),s}function M7(e,n){var r,s=_n(n.data),i={name:(r=s[1])!=null&&r[0]?Ud(s[1][0].data):"",sheets:[]},c=Uh(s[2],es);return c.forEach(function(f){e[f].forEach(function(u){var h=rn(u.meta[1][0].data);h==6e3&&i.sheets.push(O7(e,u))})}),i}function L7(e,n){var r=Xh(),s=_n(n.data),i=Uh(s[1],es);if(i.forEach(function(c){e[c].forEach(function(f){var u=rn(f.meta[1][0].data);if(u==2){var h=M7(e,f);h.sheets.forEach(function(x,m){Gh(r,x,m==0?h.name:h.name+"_"+m,!0)})}})}),r.SheetNames.length==0)throw new Error("Empty NUMBERS file");return r}function wd(e){var n,r,s,i,c={},f=[];if(e.FullPaths.forEach(function(h){if(h.match(/\.iwpv2/))throw new Error("Unsupported password protection")}),e.FileIndex.forEach(function(h){if(h.name.match(/\.iwa$/)){var x;try{x=T7(h.content)}catch(v){return console.log("?? "+h.content.length+" "+(v.message||v))}var m;try{m=w7(x)}catch(v){return console.log("## "+(v.message||v))}m.forEach(function(v){c[v.id]=v.messages,f.push(v.id)})}}),!f.length)throw new Error("File has no messages");var u=((i=(s=(r=(n=c?.[1])==null?void 0:n[0])==null?void 0:r.meta)==null?void 0:s[1])==null?void 0:i[0].data)&&rn(c[1][0].meta[1][0].data)==1&&c[1][0];if(u||f.forEach(function(h){c[h].forEach(function(x){var m=rn(x.meta[1][0].data)>>>0;if(m==1)if(!u)u=x;else throw new Error("Document has multiple roots")})}),!u)throw new Error("Cannot find Document root");return L7(c,u)}function j7(e){return function(r){for(var s=0;s!=e.length;++s){var i=e[s];r[i[0]]===void 0&&(r[i[0]]=i[1]),i[2]==="n"&&(r[i[0]]=Number(r[i[0]]))}}}function Wh(e){j7([["cellNF",!1],["cellHTML",!0],["cellFormula",!0],["cellStyles",!1],["cellText",!0],["cellDates",!1],["sheetStubs",!1],["sheetRows",0,"n"],["bookDeps",!1],["bookSheets",!1],["bookProps",!1],["bookFiles",!1],["bookVBA",!1],["password",""],["WTF",!1]])(e)}function I7(e){return Pi.WS.indexOf(e)>-1?"sheet":e==Pi.CS?"chart":e==Pi.DS?"dialog":e==Pi.MS?"macro":e&&e.length?e:"sheet"}function H7(e,n){if(!e)return 0;try{e=n.map(function(s){return s.id||(s.id=s.strRelID),[s.name,e["!id"][s.id].Target,I7(e["!id"][s.id].Type)]})}catch{return null}return!e||e.length===0?null:e}function z7(e,n,r,s,i,c,f,u,h,x,m,v){try{c[s]=il(er(e,r,!0),n);var y=Jt(e,n),_;switch(u){case"sheet":_=qF(y,n,i,h,c[s],x,m,v);break;case"chart":if(_=VF(y,n,i,h,c[s],x,m,v),!_||!_["!drawel"])break;var E=Q0(_["!drawel"].Target,n),b=Ld(E),C=G5(er(e,E,!0),il(er(e,b,!0),E)),D=Q0(C,E),k=Ld(D);_=DF(er(e,D,!0),D,h,il(er(e,k,!0),D),x,_);break;case"macro":_=KF(y,n,i,h,c[s],x,m,v);break;case"dialog":_=YF(y,n,i,h,c[s],x,m,v);break;default:throw new Error("Unrecognized sheet type "+u)}f[s]=_;var w=[];c&&c[s]&&qr(c[s]).forEach(function(H){var V="";if(c[s][H].Type==Pi.CMNT){V=Q0(c[s][H].Target,n);var z=$F(Jt(e,V,!0),V,h);if(!z||!z.length)return;Qg(_,z,!1)}c[s][H].Type==Pi.TCMNT&&(V=Q0(c[s][H].Target,n),w=w.concat(V5(Jt(e,V,!0),h)))}),w&&w.length&&Qg(_,w,!0,h.people||[])}catch(H){if(h.WTF)throw H}}function gr(e){return e.charAt(0)=="/"?e.slice(1):e}function U7(e,n){if(my(),n=n||{},Wh(n),yr(e,"META-INF/manifest.xml")||yr(e,"objectdata.xml"))return cv(e,n);if(yr(e,"Index/Document.iwa")){if(typeof Uint8Array>"u")throw new Error("NUMBERS file parsing requires Uint8Array support");if(typeof wd<"u"){if(e.FileIndex)return wd(e);var r=ct.utils.cfb_new();return Eg(e).forEach(function(Ce){WA(r,Ce,UA(e,Ce))}),wd(r)}throw new Error("Unsupported NUMBERS file")}if(!yr(e,"[Content_Types].xml"))throw yr(e,"index.xml.gz")?new Error("Unsupported NUMBERS 08 file"):yr(e,"index.xml")?new Error("Unsupported NUMBERS 09 file"):new Error("Unsupported ZIP file");var s=Eg(e),i=j6(er(e,"[Content_Types].xml")),c=!1,f,u;if(i.workbooks.length===0&&(u="xl/workbook.xml",Jt(e,u,!0)&&i.workbooks.push(u)),i.workbooks.length===0){if(u="xl/workbook.bin",!Jt(e,u,!0))throw new Error("Could not find workbook");i.workbooks.push(u),c=!0}i.workbooks[0].slice(-3)=="bin"&&(c=!0);var h={},x={};if(!n.bookSheets&&!n.bookProps){if(cl=[],i.sst)try{cl=ZF(Jt(e,gr(i.sst)),i.sst,n)}catch(Ce){if(n.WTF)throw Ce}n.cellStyles&&i.themes.length&&(h=QF(er(e,i.themes[0].replace(/^\//,""),!0)||"",i.themes[0],n)),i.style&&(x=JF(Jt(e,gr(i.style)),i.style,h,n))}i.links.map(function(Ce){try{var me=il(er(e,Ld(gr(Ce))),Ce);return t7(Jt(e,gr(Ce)),me,Ce,n)}catch{}});var m=GF(Jt(e,gr(i.workbooks[0])),i.workbooks[0],n),v={},y="";i.coreprops.length&&(y=Jt(e,gr(i.coreprops[0]),!0),y&&(v=Gy(y)),i.extprops.length!==0&&(y=Jt(e,gr(i.extprops[0]),!0),y&&W6(y,v,n)));var _={};(!n.bookSheets||n.bookProps)&&i.custprops.length!==0&&(y=er(e,gr(i.custprops[0]),!0),y&&(_=X6(y,n)));var E={};if((n.bookSheets||n.bookProps)&&(m.Sheets?f=m.Sheets.map(function(me){return me.name}):v.Worksheets&&v.SheetNames.length>0&&(f=v.SheetNames),n.bookProps&&(E.Props=v,E.Custprops=_),n.bookSheets&&typeof f<"u"&&(E.SheetNames=f),n.bookSheets?E.SheetNames:n.bookProps))return E;f={};var b={};n.bookDeps&&i.calcchain&&(b=e7(Jt(e,gr(i.calcchain)),i.calcchain));var C=0,D={},k,w;{var H=m.Sheets;v.Worksheets=H.length,v.SheetNames=[];for(var V=0;V!=H.length;++V)v.SheetNames[V]=H[V].name}var z=c?"bin":"xml",R=i.workbooks[0].lastIndexOf("/"),W=(i.workbooks[0].slice(0,R+1)+"_rels/"+i.workbooks[0].slice(R+1)+".rels").replace(/^\//,"");yr(e,W)||(W="xl/_rels/workbook."+z+".rels");var U=il(er(e,W,!0),W.replace(/_rels.*/,"s5s"));(i.metadata||[]).length>=1&&(n.xlmeta=n7(Jt(e,gr(i.metadata[0])),i.metadata[0],n)),(i.people||[]).length>=1&&(n.people=K5(Jt(e,gr(i.people[0])),n)),U&&(U=H7(U,m.Sheets));var fe=Jt(e,"xl/worksheets/sheet.xml",!0)?1:0;e:for(C=0;C!=v.Worksheets;++C){var Z="sheet";if(U&&U[C]?(k="xl/"+U[C][1].replace(/[\/]?xl\//,""),yr(e,k)||(k=U[C][1]),yr(e,k)||(k=W.replace(/_rels\/.*$/,"")+U[C][1]),Z=U[C][2]):(k="xl/worksheets/sheet"+(C+1-fe)+"."+z,k=k.replace(/sheet0\./,"sheet.")),w=k.replace(/^(.*)(\/)([^\/]*)$/,"$1/_rels/$3.rels"),n&&n.sheets!=null)switch(typeof n.sheets){case"number":if(C!=n.sheets)continue e;break;case"string":if(v.SheetNames[C].toLowerCase()!=n.sheets.toLowerCase())continue e;break;default:if(Array.isArray&&Array.isArray(n.sheets)){for(var L=!1,de=0;de!=n.sheets.length;++de)typeof n.sheets[de]=="number"&&n.sheets[de]==C&&(L=1),typeof n.sheets[de]=="string"&&n.sheets[de].toLowerCase()==v.SheetNames[C].toLowerCase()&&(L=1);if(!L)continue e}}z7(e,k,w,v.SheetNames[C],C,D,f,Z,n,m,h,x)}return E={Directory:i,Workbook:m,Props:v,Custprops:_,Deps:b,Sheets:f,SheetNames:v.SheetNames,Strings:cl,Styles:x,Themes:h,SSF:pn(Je)},n&&n.bookFiles&&(e.files?(E.keys=s,E.files=e.files):(E.keys=[],E.files={},e.FullPaths.forEach(function(Ce,me){Ce=Ce.replace(/^Root Entry[\/]/,""),E.keys.push(Ce),E.files[Ce]=e.FileIndex[me]}))),n&&n.bookVBA&&(i.vba.length>0?E.vbaraw=Jt(e,gr(i.vba[0]),!0):i.defaults&&i.defaults.bin===Z5&&(E.vbaraw=Jt(e,"xl/vbaProject.bin",!0))),E}function W7(e,n){var r=n||{},s="Workbook",i=ct.find(e,s);try{if(s="/!DataSpaces/Version",i=ct.find(e,s),!i||!i.content)throw new Error("ECMA-376 Encrypted file missing "+s);if(Ok(i.content),s="/!DataSpaces/DataSpaceMap",i=ct.find(e,s),!i||!i.content)throw new Error("ECMA-376 Encrypted file missing "+s);var c=Lk(i.content);if(c.length!==1||c[0].comps.length!==1||c[0].comps[0].t!==0||c[0].name!=="StrongEncryptionDataSpace"||c[0].comps[0].v!=="EncryptedPackage")throw new Error("ECMA-376 Encrypted file bad "+s);if(s="/!DataSpaces/DataSpaceInfo/StrongEncryptionDataSpace",i=ct.find(e,s),!i||!i.content)throw new Error("ECMA-376 Encrypted file missing "+s);var f=jk(i.content);if(f.length!=1||f[0]!="StrongEncryptionTransform")throw new Error("ECMA-376 Encrypted file bad "+s);if(s="/!DataSpaces/TransformInfo/StrongEncryptionTransform/!Primary",i=ct.find(e,s),!i||!i.content)throw new Error("ECMA-376 Encrypted file missing "+s);Hk(i.content)}catch{}if(s="/EncryptionInfo",i=ct.find(e,s),!i||!i.content)throw new Error("ECMA-376 Encrypted file missing "+s);var u=zk(i.content);if(s="/EncryptedPackage",i=ct.find(e,s),!i||!i.content)throw new Error("ECMA-376 Encrypted file missing "+s);if(u[0]==4&&typeof decrypt_agile<"u")return decrypt_agile(u[1],i.content,r.password||"",r);if(u[0]==2&&typeof decrypt_std76<"u")return decrypt_std76(u[1],i.content,r.password||"",r);throw new Error("File is password-protected")}function Ph(e,n){var r="";switch((n||{}).type||"base64"){case"buffer":return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]];case"base64":r=tr(e.slice(0,12));break;case"binary":r=e;break;case"array":return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]];default:throw new Error("Unrecognized type "+(n&&n.type||"undefined"))}return[r.charCodeAt(0),r.charCodeAt(1),r.charCodeAt(2),r.charCodeAt(3),r.charCodeAt(4),r.charCodeAt(5),r.charCodeAt(6),r.charCodeAt(7)]}function P7(e,n){return ct.find(e,"EncryptedPackage")?W7(e,n):Db(e,n)}function X7(e,n){var r,s=e,i=n||{};return i.type||(i.type=ot&&Buffer.isBuffer(e)?"buffer":"base64"),r=_y(s,i),U7(r,i)}function Nb(e,n){var r=0;e:for(;r<e.length;)switch(e.charCodeAt(r)){case 10:case 13:case 32:++r;break;case 60:return Hd(e.slice(r),n);default:break e}return Sl.to_workbook(e,n)}function G7(e,n){var r="",s=Ph(e,n);switch(n.type){case"base64":r=tr(e);break;case"binary":r=e;break;case"buffer":r=e.toString("binary");break;case"array":r=zs(e);break;default:throw new Error("Unrecognized type "+n.type)}return s[0]==239&&s[1]==187&&s[2]==191&&(r=At(r)),n.type="binary",Nb(r,n)}function q7(e,n){var r=e;return n.type=="base64"&&(r=tr(r)),r=gl.utils.decode(1200,r.slice(2),"str"),n.type="binary",Nb(r,n)}function V7(e){return e.match(/[^\x00-\x7F]/)?Z0(e):e}function Ad(e,n,r,s){return s?(r.type="string",Sl.to_workbook(e,r)):Sl.to_workbook(n,r)}function Pd(e,n){ay();var r=n||{};if(typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer)return Pd(new Uint8Array(e),(r=pn(r),r.type="array",r));typeof Uint8Array<"u"&&e instanceof Uint8Array&&!r.type&&(r.type=typeof Deno<"u"?"buffer":"array");var s=e,i=[0,0,0,0],c=!1;if(r.cellStyles&&(r.cellNF=!0,r.sheetStubs=!0),Ki={},r.dateNF&&(Ki.dateNF=r.dateNF),r.type||(r.type=ot&&Buffer.isBuffer(e)?"buffer":"base64"),r.type=="file"&&(r.type=ot?"buffer":"binary",s=OA(e),typeof Uint8Array<"u"&&!ot&&(r.type="array")),r.type=="string"&&(c=!0,r.type="binary",r.codepage=65001,s=V7(e)),r.type=="array"&&typeof Uint8Array<"u"&&e instanceof Uint8Array&&typeof ArrayBuffer<"u"){var f=new ArrayBuffer(3),u=new Uint8Array(f);if(u.foo="bar",!u.foo)return r=pn(r),r.type="array",Pd(Sh(s),r)}switch((i=Ph(s,r))[0]){case 208:if(i[1]===207&&i[2]===17&&i[3]===224&&i[4]===161&&i[5]===177&&i[6]===26&&i[7]===225)return P7(ct.read(s,r),r);break;case 9:if(i[1]<=8)return Db(s,r);break;case 60:return Hd(s,r);case 73:if(i[1]===73&&i[2]===42&&i[3]===0)throw new Error("TIFF Image File is not a spreadsheet");if(i[1]===68)return Sk(s,r);break;case 84:if(i[1]===65&&i[2]===66&&i[3]===76)return yk.to_workbook(s,r);break;case 80:return i[1]===75&&i[2]<9&&i[3]<9?X7(s,r):Ad(e,s,r,c);case 239:return i[3]===60?Hd(s,r):Ad(e,s,r,c);case 255:if(i[1]===254)return q7(s,r);if(i[1]===0&&i[2]===2&&i[3]===0)return ol.to_workbook(s,r);break;case 0:if(i[1]===0&&(i[2]>=2&&i[3]===0||i[2]===0&&(i[3]===8||i[3]===9)))return ol.to_workbook(s,r);break;case 3:case 131:case 139:case 140:return Jg.to_workbook(s,r);case 123:if(i[1]===92&&i[2]===114&&i[3]===116)return Zk.to_workbook(s,r);break;case 10:case 13:case 32:return G7(s,r);case 137:if(i[1]===80&&i[2]===78&&i[3]===71)throw new Error("PNG Image File is not a spreadsheet");break}return gk.indexOf(i[0])>-1&&i[2]<=12&&i[3]<=31?Jg.to_workbook(s,r):Ad(e,s,r,c)}function K7(e,n,r,s,i,c,f,u){var h=mn(r),x=u.defval,m=u.raw||!Object.prototype.hasOwnProperty.call(u,"raw"),v=!0,y=i===1?[]:{};if(i!==1)if(Object.defineProperty)try{Object.defineProperty(y,"__rowNum__",{value:r,enumerable:!1})}catch{y.__rowNum__=r}else y.__rowNum__=r;if(!f||e[r])for(var _=n.s.c;_<=n.e.c;++_){var E=f?e[r][_]:e[s[_]+h];if(E===void 0||E.t===void 0){if(x===void 0)continue;c[_]!=null&&(y[c[_]]=x);continue}var b=E.v;switch(E.t){case"z":if(b==null)break;continue;case"e":b=b==0?null:void 0;break;case"s":case"d":case"b":case"n":break;default:throw new Error("unrecognized type "+E.t)}if(c[_]!=null){if(b==null)if(E.t=="e"&&b===null)y[c[_]]=null;else if(x!==void 0)y[c[_]]=x;else if(m&&b===null)y[c[_]]=null;else continue;else y[c[_]]=m&&(E.t!=="n"||E.t==="n"&&u.rawNumbers!==!1)?b:Sa(E,b,u);b!=null&&(v=!1)}}return{row:y,isempty:v}}function Xd(e,n){if(e==null||e["!ref"]==null)return[];var r={t:"n",v:0},s=0,i=1,c=[],f=0,u="",h={s:{r:0,c:0},e:{r:0,c:0}},x=n||{},m=x.range!=null?x.range:e["!ref"];switch(x.header===1?s=1:x.header==="A"?s=2:Array.isArray(x.header)?s=3:x.header==null&&(s=0),typeof m){case"string":h=Ht(m);break;case"number":h=Ht(e["!ref"]),h.s.r=m;break;default:h=m}s>0&&(i=0);var v=mn(h.s.r),y=[],_=[],E=0,b=0,C=Array.isArray(e),D=h.s.r,k=0,w={};C&&!e[D]&&(e[D]=[]);var H=x.skipHidden&&e["!cols"]||[],V=x.skipHidden&&e["!rows"]||[];for(k=h.s.c;k<=h.e.c;++k)if(!(H[k]||{}).hidden)switch(y[k]=nn(k),r=C?e[D][k]:e[y[k]+v],s){case 1:c[k]=k-h.s.c;break;case 2:c[k]=y[k];break;case 3:c[k]=x.header[k-h.s.c];break;default:if(r==null&&(r={w:"__EMPTY",t:"s"}),u=f=Sa(r,null,x),b=w[f]||0,!b)w[f]=1;else{do u=f+"_"+b++;while(w[u]);w[f]=b,w[u]=1}c[k]=u}for(D=h.s.r+i;D<=h.e.r;++D)if(!(V[D]||{}).hidden){var z=K7(e,h,D,y,s,c,C,x);(z.isempty===!1||(s===1?x.blankrows!==!1:x.blankrows))&&(_[E++]=z.row)}return _.length=E,_}var hv=/"/g;function Y7(e,n,r,s,i,c,f,u){for(var h=!0,x=[],m="",v=mn(r),y=n.s.c;y<=n.e.c;++y)if(s[y]){var _=u.dense?(e[r]||[])[y]:e[s[y]+v];if(_==null)m="";else if(_.v!=null){h=!1,m=""+(u.rawNumbers&&_.t=="n"?_.v:Sa(_,null,u));for(var E=0,b=0;E!==m.length;++E)if((b=m.charCodeAt(E))===i||b===c||b===34||u.forceQuotes){m='"'+m.replace(hv,'""')+'"';break}m=="ID"&&(m='"ID"')}else _.f!=null&&!_.F?(h=!1,m="="+_.f,m.indexOf(",")>=0&&(m='"'+m.replace(hv,'""')+'"')):m="";x.push(m)}return u.blankrows===!1&&h?null:x.join(f)}function Ob(e,n){var r=[],s=n??{};if(e==null||e["!ref"]==null)return"";var i=Ht(e["!ref"]),c=s.FS!==void 0?s.FS:",",f=c.charCodeAt(0),u=s.RS!==void 0?s.RS:`
`,h=u.charCodeAt(0),x=new RegExp((c=="|"?"\\|":c)+"+$"),m="",v=[];s.dense=Array.isArray(e);for(var y=s.skipHidden&&e["!cols"]||[],_=s.skipHidden&&e["!rows"]||[],E=i.s.c;E<=i.e.c;++E)(y[E]||{}).hidden||(v[E]=nn(E));for(var b=0,C=i.s.r;C<=i.e.r;++C)(_[C]||{}).hidden||(m=Y7(e,i,C,v,f,h,c,s),m!=null&&(s.strip&&(m=m.replace(x,"")),(m||s.blankrows!==!1)&&r.push((b++?u:"")+m)));return delete s.dense,r.join("")}function J7(e,n){n||(n={}),n.FS="	",n.RS=`
`;var r=Ob(e,n);return r}function Q7(e){var n="",r,s="";if(e==null||e["!ref"]==null)return[];var i=Ht(e["!ref"]),c="",f=[],u,h=[],x=Array.isArray(e);for(u=i.s.c;u<=i.e.c;++u)f[u]=nn(u);for(var m=i.s.r;m<=i.e.r;++m)for(c=mn(m),u=i.s.c;u<=i.e.c;++u)if(n=f[u]+c,r=x?(e[m]||[])[u]:e[n],s="",r!==void 0){if(r.F!=null){if(n=r.F,!r.f)continue;s=r.f,n.indexOf(":")==-1&&(n=n+":"+n)}if(r.f!=null)s=r.f;else{if(r.t=="z")continue;if(r.t=="n"&&r.v!=null)s=""+r.v;else if(r.t=="b")s=r.v?"TRUE":"FALSE";else if(r.w!==void 0)s="'"+r.w;else{if(r.v===void 0)continue;r.t=="s"?s="'"+r.v:s=""+r.v}}h[h.length]=n+"="+s}return h}function Mb(e,n,r){var s=r||{},i=+!s.skipHeader,c=e||{},f=0,u=0;if(c&&s.origin!=null)if(typeof s.origin=="number")f=s.origin;else{var h=typeof s.origin=="string"?Bn(s.origin):s.origin;f=h.r,u=h.c}var x,m={s:{c:0,r:0},e:{c:u,r:f+n.length-1+i}};if(c["!ref"]){var v=Ht(c["!ref"]);m.e.c=Math.max(m.e.c,v.e.c),m.e.r=Math.max(m.e.r,v.e.r),f==-1&&(f=v.e.r+1,m.e.r=f+n.length-1+i)}else f==-1&&(f=0,m.e.r=n.length-1+i);var y=s.header||[],_=0;n.forEach(function(b,C){qr(b).forEach(function(D){(_=y.indexOf(D))==-1&&(y[_=y.length]=D);var k=b[D],w="z",H="",V=Ke({c:u+_,r:f+C+i});x=wl(c,V),k&&typeof k=="object"&&!(k instanceof Date)?c[V]=k:(typeof k=="number"?w="n":typeof k=="boolean"?w="b":typeof k=="string"?w="s":k instanceof Date?(w="d",s.cellDates||(w="n",k=Rn(k)),H=s.dateNF||Je[14]):k===null&&s.nullError&&(w="e",k=0),x?(x.t=w,x.v=k,delete x.w,delete x.R,H&&(x.z=H)):c[V]=x={t:w,v:k},H&&(x.z=H))})}),m.e.c=Math.max(m.e.c,u+y.length-1);var E=mn(f);if(i)for(_=0;_<y.length;++_)c[nn(_+u)+E]={t:"s",v:y[_]};return c["!ref"]=ft(m),c}function Z7(e,n){return Mb(null,e,n)}function wl(e,n,r){if(typeof n=="string"){if(Array.isArray(e)){var s=Bn(n);return e[s.r]||(e[s.r]=[]),e[s.r][s.c]||(e[s.r][s.c]={t:"z"})}return e[n]||(e[n]={t:"z"})}return typeof n!="number"?wl(e,Ke(n)):wl(e,Ke({r:n,c:r||0}))}function $7(e,n){if(typeof n=="number"){if(n>=0&&e.SheetNames.length>n)return n;throw new Error("Cannot find sheet # "+n)}else if(typeof n=="string"){var r=e.SheetNames.indexOf(n);if(r>-1)return r;throw new Error("Cannot find sheet name |"+n+"|")}else throw new Error("Cannot find sheet |"+n+"|")}function Xh(){return{SheetNames:[],Sheets:{}}}function Gh(e,n,r,s){var i=1;if(!r)for(;i<=65535&&e.SheetNames.indexOf(r="Sheet"+i)!=-1;++i,r=void 0);if(!r||e.SheetNames.length>=65535)throw new Error("Too many worksheets");if(s&&e.SheetNames.indexOf(r)>=0){var c=r.match(/(^.*?)(\d+)$/);i=c&&+c[2]||0;var f=c&&c[1]||r;for(++i;i<=65535&&e.SheetNames.indexOf(r=f+i)!=-1;++i);}if(jF(r),e.SheetNames.indexOf(r)>=0)throw new Error("Worksheet with name |"+r+"| already exists!");return e.SheetNames.push(r),e.Sheets[r]=n,r}function e9(e,n,r){e.Workbook||(e.Workbook={}),e.Workbook.Sheets||(e.Workbook.Sheets=[]);var s=$7(e,n);switch(e.Workbook.Sheets[s]||(e.Workbook.Sheets[s]={}),r){case 0:case 1:case 2:break;default:throw new Error("Bad sheet visibility setting "+r)}e.Workbook.Sheets[s].Hidden=r}function t9(e,n){return e.z=n,e}function Lb(e,n,r){return n?(e.l={Target:n},r&&(e.l.Tooltip=r)):delete e.l,e}function n9(e,n,r){return Lb(e,"#"+n,r)}function r9(e,n,r){e.c||(e.c=[]),e.c.push({t:n,a:r||"SheetJS"})}function a9(e,n,r,s){for(var i=typeof n!="string"?n:Ht(n),c=typeof n=="string"?n:ft(n),f=i.s.r;f<=i.e.r;++f)for(var u=i.s.c;u<=i.e.c;++u){var h=wl(e,f,u);h.t="n",h.F=c,delete h.v,f==i.s.r&&u==i.s.c&&(h.f=r,s&&(h.D=!0))}return e}var s9={encode_col:nn,encode_row:mn,encode_cell:Ke,encode_range:ft,decode_col:Bh,decode_row:Dh,split_cell:m6,decode_cell:Bn,decode_range:e0,format_cell:Sa,sheet_add_aoa:zy,sheet_add_json:Mb,sheet_add_dom:Bb,aoa_to_sheet:t0,json_to_sheet:Z7,table_to_sheet:Fb,table_to_book:S7,sheet_to_csv:Ob,sheet_to_txt:J7,sheet_to_json:Xd,sheet_to_html:b7,sheet_to_formulae:Q7,sheet_to_row_object_array:Xd,sheet_get_cell:wl,book_new:Xh,book_append_sheet:Gh,book_set_sheet_visibility:e9,cell_set_number_format:t9,cell_set_hyperlink:Lb,cell_set_internal_link:n9,cell_add_comment:r9,sheet_set_array_formula:a9,consts:{SHEET_VISIBLE:0,SHEET_HIDDEN:1,SHEET_VERY_HIDDEN:2}};const dc=({label:e,count:n,open:r,onToggle:s})=>g.jsx(rA,{asChild:!0,onClick:s,children:g.jsx("div",{className:"flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-slate-50 rounded-md",children:g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx(Lc,{className:"h-4 w-4 text-slate-500 transition-transform duration-200",style:{transform:r?"rotate(0deg)":"rotate(-90deg)"}}),g.jsx("span",{className:"text-sm font-medium text-slate-700",children:e}),n!==void 0&&n>0&&g.jsx(vh,{variant:"secondary",className:"text-xs px-1.5 py-0",children:n})]})})}),i9=({log:e})=>{const n=new Date(e.timestamp).toISOString().slice(11,23),r={error:"text-red-400",warn:"text-amber-400",info:"text-blue-400",log:"text-slate-200"};return g.jsxs("div",{className:"flex items-start gap-2 py-0.5 font-mono text-xs",children:[g.jsx("span",{className:"text-slate-500 shrink-0",children:n}),e.scriptType&&g.jsx("span",{className:Re("px-1.5 py-0.5 rounded text-[10px] font-semibold tracking-wide uppercase shrink-0 leading-none self-center",e.scriptType==="prerequest"?"bg-blue-500/20 text-blue-300 border border-blue-500/30":"bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"),children:e.scriptType==="prerequest"?"Pre-request":"Post-request"}),g.jsxs("span",{className:r[e.type]??"text-slate-200",children:["[",e.type,"]"]}),g.jsx("span",{className:"text-slate-300 break-all",children:e.message})]})},l9=()=>{const e=cn(),n=$e(Y8),r=$e(q8),s=$e(Q8),i=$e(Z8),c=$e($8),f=r?.exampleResponse??[],u=$e(Wc),h=$e(C2),x=u??"actual",[m,v]=te.useState(null),[y,_]=te.useState(""),E=De=>{v(De.id??""),_(De.name)},b=De=>{De&&y.trim()&&e(H8({exampleId:De,name:y.trim()})),v(null)},C=h?.code??n?.statusCode,D=h?.status??n?.statusText??(C?md(C):"OK"),k=(()=>{if(!C)return"bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300";const De=Math.floor(C/100);return De===1?"bg-sky-100 text-sky-700 dark:bg-sky-950/70 dark:text-sky-400":De===2?"bg-emerald-100 text-emerald-700 dark:bg-emerald-950/70 dark:text-emerald-400":De===3?"bg-blue-100 text-blue-700 dark:bg-blue-950/70 dark:text-blue-400":De===4?"bg-amber-100 text-amber-700 dark:bg-amber-950/70 dark:text-amber-400":"bg-red-100 text-red-700 dark:bg-red-950/70 dark:text-red-400"})(),w=te.useMemo(()=>h?h.body:JSON.stringify(n?.data),[h,n]),H=te.useMemo(()=>{if(!w)return"";try{return JSON.stringify(JSON.parse(w),null,2)}catch{return w}},[w]),V=te.useMemo(()=>s==null?[]:(Array.isArray(s)?s:[s]).map(ze=>{if(ze&&typeof ze=="object"&&"type"in ze){const je=ze.data;let Ot="";try{Ot=typeof je=="string"?je:JSON.stringify(je,null,2)}catch{Ot=String(je)}return{type:ze.type,display:Ot||"(empty)"}}let mt="";try{mt=typeof ze=="string"?ze:JSON.stringify(ze,null,2)}catch{mt=String(ze)}return{display:mt||"(empty)"}}).filter(ze=>ze.display!=="(empty)"||ze.type),[s]),z=te.useMemo(()=>{if(!c)return[];if(Array.isArray(c)){const De=[];for(const ze of c)if(ze&&typeof ze=="object"){const mt=ze.type,je=ze.mutations||ze.data;if(je&&typeof je=="object")for(const[Ot,Pn]of Object.entries(je))De.push({key:Ot,value:Pn,type:mt});else"key"in ze&&De.push({key:ze.key,value:ze.value??null,type:mt})}return De}return typeof c=="object"?Object.entries(c).map(([De,ze])=>({key:De,value:ze})):[]},[c]),R=i.length>0,W=z.length>0,U=te.useMemo(()=>z.some(De=>!!De.type),[z]),fe=V.length>0,[Z,L]=te.useState(!0),[de,Ce]=te.useState(!0),[me,X]=te.useState(!0),[ee,we]=te.useState(!0),[K,ne]=te.useState(!1),[Te,O]=te.useState(""),[J,P]=te.useState(!1),[G,ue]=te.useState([]),[he,ve]=te.useState([]),ye=n?.contentType??"",_e=ye.startsWith("image/"),Pe=ye.startsWith("audio/"),I=ye.startsWith("video/"),st=ye==="application/pdf",Ue=ye==="application/vnd.ms-excel"||ye==="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";te.useEffect(()=>{P(!1),ue([]),ve([])},[n]);const it=()=>{!r?.id||!Te.trim()||!n||(e(O8({id:r.id,name:Te.trim()})),O(""),ne(!1))},qe=De=>{const ze=De.split(",")[1],mt=atob(ze),je=new Uint8Array(mt.length);for(let Ot=0;Ot<mt.length;Ot++)je[Ot]=mt.charCodeAt(Ot);return je.buffer},Be=te.useCallback(()=>{if(!(!Ue||!n?.data)){if(J){P(!1);return}try{const De=Pd(qe(n.data),{type:"array"}),ze=De.SheetNames[0],mt=De.Sheets[ze],je=s9.sheet_to_json(mt,{header:1});je.length>0&&(ue(je[0].map(String)),ve(je.slice(1))),P(!0)}catch{P(!1)}}},[Ue,n?.data,J]),Ct=te.useCallback(De=>{e(pc(De==="actual"?{exampleId:null}:{exampleId:De}))},[e]),an=te.useCallback((De,ze)=>{u===De&&e(pc({exampleId:null})),e(L8({id:De,exampleId:De,requestId:r?.id,index:ze}))},[u,e,r?.id]),gn=te.useCallback(()=>{e(M8({id:r?.id}))},[e,r?.id]);return g.jsxs(g.Fragment,{children:[g.jsxs("section",{className:"flex min-h-[280px] flex-1 flex-col overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-sm",children:[g.jsxs("div",{className:"flex items-center justify-between border-b border-border px-4 py-3",children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx("h2",{className:"text-sm font-semibold text-foreground",children:"Response"}),h?g.jsxs(Ms,{value:String(h.code??200),onValueChange:De=>{const ze=parseInt(De,10),mt=md(ze,h.status||"OK");e(I8({exampleId:h.id,code:ze,status:mt}))},children:[g.jsx(js,{size:"sm",className:Re("h-7 w-auto min-w-[110px] gap-1.5 px-2.5 py-0.5 text-xs font-semibold rounded-md border border-transparent shadow-none cursor-pointer transition-colors",k),title:"Select HTTP response status code",children:g.jsxs(Ls,{children:[h.code??200," ",h.status??md(h.code??200)]})}),g.jsxs(Is,{className:"max-h-[300px]",children:[ty.map(De=>g.jsxs(Ym,{children:[g.jsx(Jm,{className:"text-[11px] font-semibold text-muted-foreground px-2 py-1",children:De.group}),De.items.map(ze=>g.jsxs(bn,{value:String(ze.code),className:"text-xs",children:[g.jsx("span",{className:"font-semibold",children:ze.code}),g.jsx("span",{className:"text-muted-foreground",children:ze.status})]},ze.code))]},De.group)),h.code&&!ny[h.code]&&g.jsxs(Ym,{children:[g.jsx(Jm,{className:"text-[11px] font-semibold text-muted-foreground px-2 py-1",children:"Custom"}),g.jsxs(bn,{value:String(h.code),className:"text-xs",children:[g.jsx("span",{className:"font-semibold",children:h.code}),g.jsx("span",{className:"text-muted-foreground",children:h.status})]})]},"custom")]})]}):C&&g.jsx(vh,{className:k,children:`${C} ${D}`})]}),g.jsx("div",{className:"flex items-center gap-2 text-xs text-muted-foreground",children:x==="actual"&&g.jsxs(g.Fragment,{children:[g.jsxs("span",{children:[n?.responseTime??0," ms"]}),g.jsxs("span",{children:[n?.responseSize??0," kb"]}),g.jsx("span",{children:n?.protocol})]})})]}),g.jsxs("div",{className:"border-b border-border px-4 pt-2 flex items-center gap-1.5 overflow-x-auto",children:[g.jsx(xl,{value:x,onValueChange:Ct,children:g.jsxs(pl,{className:"h-8 rounded-lg bg-muted flex items-center",children:[g.jsx($n,{value:"actual",className:"h-7 px-3 text-xs",children:"Actual Response"}),f.map((De,ze)=>{const mt=De.id||String(ze);return g.jsxs($n,{value:mt,className:"group relative h-7 px-2 text-xs flex items-center gap-1.5",children:[m===De.id?g.jsx("input",{type:"text",autoFocus:!0,value:y,onChange:je=>_(je.target.value),onBlur:()=>b(De.id),onKeyDown:je=>{je.key==="Enter"&&b(De.id),je.key==="Escape"&&v(null)},onClick:je=>je.stopPropagation(),className:"h-5 w-24 rounded border border-border bg-background px-1 text-xs text-foreground focus:outline-hidden"}):g.jsxs("span",{onDoubleClick:je=>{je.stopPropagation(),E(De)},title:"Double-click to rename",children:["Example: ",De.name]}),g.jsx("button",{type:"button","aria-label":"Rename example",className:"inline-flex h-4 w-4 items-center justify-center rounded-sm text-muted-foreground hover:bg-muted hover:text-foreground pointer-events-auto transition-colors opacity-70 hover:opacity-100",title:"Rename example",onClick:je=>{je.stopPropagation(),je.preventDefault(),E(De)},children:g.jsx($3,{className:"size-2.5"})}),g.jsx("button",{type:"button","aria-label":"Remove example",className:"inline-flex h-4 w-4 items-center justify-center rounded-sm text-muted-foreground hover:bg-muted hover:text-foreground pointer-events-auto transition-colors",onClick:je=>{je.stopPropagation(),je.preventDefault(),an(De.id,ze)},children:g.jsx(ma,{className:"size-3"})})]},mt)})]})}),g.jsx(Ve,{type:"button",variant:"ghost",size:"icon",className:"h-8 w-8 text-muted-foreground hover:bg-muted hover:text-foreground shrink-0 rounded-md",title:"Add response example","aria-label":"Add response example",onClick:gn,children:g.jsx(Ws,{className:"h-4 w-4"})})]}),g.jsxs(xl,{defaultValue:"pretty",className:"flex-1 overflow-hidden p-4",children:[g.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[g.jsxs(pl,{className:"h-9 rounded-lg bg-muted",children:[g.jsx($n,{value:"pretty",children:"Pretty"}),g.jsx($n,{value:"console",children:"Console"})]}),g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsxs(Ve,{variant:"outline",size:"sm",disabled:!n||!!h,title:h?"Save is disabled when viewing an example":void 0,onClick:()=>ne(!0),children:[g.jsx(e_,{className:"mr-1 h-4 w-4"}),"Save"]}),g.jsxs(Ve,{variant:"outline",size:"sm",children:[g.jsx(t_,{className:"mr-1 h-4 w-4"}),"Share"]}),g.jsxs(Ve,{variant:"outline",size:"sm",disabled:!Ue,onClick:Be,children:[J?g.jsx(jc,{className:"mr-1 h-4 w-4"}):g.jsx(Ic,{className:"mr-1 h-4 w-4"}),J?"Show Raw":"Visualize"]})]})]}),g.jsx(Xr,{value:"pretty",className:Re("h-[calc(100%-3.2rem)]",!H?.trim()&&"min-h-[280px]"),children:g.jsx("div",{className:Re("h-full",!H?.trim()&&"min-h-[280px]"),children:_e&&n?.data?g.jsx("div",{className:"flex items-center justify-center h-[300px] bg-slate-100 rounded-md",children:g.jsx("img",{src:n.data,alt:"response",className:"max-w-full max-h-full object-contain"})}):Pe&&n?.data?g.jsx("div",{className:"flex items-center justify-center py-8",children:g.jsx("audio",{controls:!0,src:n.data,className:"w-full max-w-md"})}):I&&n?.data?g.jsx("div",{className:"flex items-center justify-center",children:g.jsx("video",{controls:!0,src:n.data,className:"max-w-full max-h-[400px]"})}):st&&n?.data?g.jsx("iframe",{src:n.data,className:"w-full h-[500px] border-0 rounded-md"}):Ue&&J?g.jsx("div",{className:"h-full overflow-auto rounded-md border border-slate-200",children:g.jsxs("table",{className:"w-full text-sm border-collapse",children:[g.jsx("thead",{className:"sticky top-0 z-10",children:g.jsx("tr",{className:"bg-slate-100",children:G.map((De,ze)=>g.jsx("th",{className:"border border-slate-200 px-3 py-2 text-left font-medium text-slate-700 whitespace-nowrap",children:De},ze))})}),g.jsx("tbody",{children:he.map((De,ze)=>g.jsx("tr",{className:"hover:bg-slate-50 even:bg-slate-50/50",children:G.map((mt,je)=>g.jsx("td",{className:"border border-slate-200 px-3 py-1.5 text-slate-600 whitespace-nowrap",children:De[je]!=null?String(De[je]):""},je))},ze))})]})}):g.jsx(Pc,{editorKey:h?.id??"actual-response",readOnly:!h,value:H,onChange:De=>{h?.id&&e(j8({exampleId:h.id,body:De}))},fileName:"response.json",showLineNumbers:!1,className:Re("h-full",!H?.trim()&&"min-h-[280px]"),style:{height:"100%",...H?.trim()?{}:{minHeight:"280px"}}})})}),g.jsx(Xr,{value:"console",className:"h-[calc(100%-3.2rem)] overflow-auto",children:h?g.jsx("div",{className:"flex items-center justify-center h-full text-sm text-slate-400",children:"No console data for example responses"}):g.jsxs("div",{className:"space-y-2",children:[n?.rawRequest&&g.jsxs(tc,{open:Z,onOpenChange:L,className:"rounded-lg border border-slate-200",children:[g.jsx(dc,{label:"Request Raw",open:Z,onToggle:()=>L(!Z)}),g.jsx(nc,{className:"px-3 pb-3",children:g.jsx("pre",{className:"font-mono text-xs text-slate-300 bg-[#272822] rounded-md p-3 overflow-auto max-h-[200px] whitespace-pre-wrap",children:n.rawRequest})})]}),fe&&g.jsxs(tc,{open:de,onOpenChange:Ce,className:"rounded-lg border border-slate-200",children:[g.jsx(dc,{label:"Script Result",open:de,count:V.length>1?V.length:void 0,onToggle:()=>Ce(!de)}),g.jsx(nc,{className:"px-3 pb-3 space-y-2",children:V.map((De,ze)=>g.jsxs("div",{className:"rounded-md border border-border/50 bg-[#272822] p-3",children:[De.type&&g.jsx("div",{className:"flex items-center gap-2 mb-2 pb-1.5 border-b border-slate-700/50",children:g.jsx("span",{className:Re("px-2 py-0.5 rounded text-[10px] font-semibold tracking-wide uppercase",De.type==="prerequest"?"bg-blue-500/20 text-blue-300 border border-blue-500/30":"bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"),children:De.type==="prerequest"?"Pre-request Script":"Post-request Script"})}),g.jsx("pre",{className:"font-mono text-xs text-slate-300 overflow-auto max-h-[200px] whitespace-pre-wrap",children:De.display})]},ze))})]}),W&&g.jsxs(tc,{open:me,onOpenChange:X,className:"rounded-lg border border-slate-200",children:[g.jsx(dc,{label:"Mutations",count:z.length,open:me,onToggle:()=>X(!me)}),g.jsx(nc,{className:"px-3 pb-3",children:g.jsxs("div",{className:"overflow-hidden rounded-md border border-slate-200",children:[g.jsxs("div",{className:Re("grid bg-slate-100 px-3 py-1.5 text-xs font-medium uppercase text-slate-600",U?"grid-cols-[1fr_1fr_auto]":"grid-cols-2"),children:[g.jsx("span",{children:"Key"}),g.jsx("span",{children:"Value"}),U&&g.jsx("span",{className:"w-28 text-right",children:"Type"})]}),z.map((De,ze)=>g.jsxs("div",{className:Re("grid items-center border-t border-slate-200 px-3 py-1.5 text-xs",U?"grid-cols-[1fr_1fr_auto]":"grid-cols-2"),children:[g.jsx("span",{className:"font-mono text-slate-700 truncate",children:De.key}),g.jsx("span",{className:"font-mono text-slate-500 truncate",children:De.value??"(deleted)"}),U&&g.jsx("div",{className:"w-28 flex justify-end",children:De.type&&g.jsx("span",{className:Re("px-1.5 py-0.5 rounded text-[10px] font-semibold tracking-wide uppercase",De.type==="prerequest"?"bg-blue-50 text-blue-700 border border-blue-200":"bg-emerald-50 text-emerald-700 border border-emerald-200"),children:De.type==="prerequest"?"Pre-request":"Post-request"})})]},ze))]})})]}),R&&g.jsxs(tc,{open:ee,onOpenChange:we,className:"rounded-lg border border-slate-200",children:[g.jsx(dc,{label:"Console Logs",count:i.length,open:ee,onToggle:()=>we(!ee)}),g.jsx(nc,{className:"px-3 pb-3",children:g.jsx("div",{className:"bg-[#272822] rounded-md p-3 max-h-[300px] overflow-auto font-mono",children:i.map((De,ze)=>g.jsx(i9,{log:De},ze))})})]}),!n?.rawRequest&&!fe&&!W&&!R&&g.jsx("div",{className:"flex items-center justify-center h-full text-sm text-slate-400 py-12",children:"Send a request to see console output"})]})})]})]}),g.jsx(k2,{open:K,onOpenChange:ne,children:g.jsxs(D2,{className:"sm:max-w-sm",children:[g.jsxs(B2,{children:[g.jsx(F2,{children:"Save Example Response"}),g.jsx(R2,{children:"Enter a name for this response example."})]}),g.jsx(ut,{value:Te,onChange:De=>O(De.target.value),placeholder:"e.g. Success 200",onKeyDown:De=>{De.key==="Enter"&&it()}}),g.jsxs(iE,{children:[g.jsx(Ve,{variant:"outline",size:"sm",onClick:()=>ne(!1),children:"Cancel"}),g.jsx(Ve,{size:"sm",disabled:!Te.trim(),onClick:it,children:"Save"})]})]})})]})},jb=""+new URL("api-tester-banner-BypRQSqu.png",import.meta.url).href,o9=()=>g.jsxs("div",{className:"flex flex-col items-center justify-center py-24 text-center",children:[g.jsx("img",{src:jb,alt:"Welcome",className:"mb-8 w-64 h-auto"}),g.jsx("h2",{className:"text-xl font-semibold text-slate-700",children:"No Collection Loaded"}),g.jsxs("p",{className:"mt-2 max-w-md text-sm text-slate-500",children:["Pull a collection from the repository first to start editing and sending API requests. Use the ",g.jsx("kbd",{className:"rounded border border-gray-300 bg-gray-100 px-1 font-mono text-[11px]",children:"Pull"})," button in the header."]})]}),c9={GET:"bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400",POST:"bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400",PUT:"bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-400",PATCH:"bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-400",DELETE:"bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-400",TEST:"bg-indigo-100 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-400"},f9=()=>{const e=cn(),n=$e(P8),r=$e(_2),s=$e(hl),{allTabs:i,effectiveActiveTabId:c}=$e(x=>{const y=[...V8(x).map(b=>{const C=K8(x,b.id);return{id:b.id,type:"request",label:C?.name??"Untitled Request",method:(b.request?.method??C?.request?.method??"GET").toUpperCase()}})],_=hl(x)||s,E=(_&&y.some(b=>b.id===_)?_:y[y.length-1]?.id)||"";return{allTabs:y,effectiveActiveTabId:E}}),f=i.find(x=>x.id===c),u=x=>{x&&e(C8({id:x}))},h=x=>{e(_8({id:x.id})),e(g2({id:x.id,status:!1}))};return g.jsxs("div",{className:"h-full overflow-auto bg-[linear-gradient(180deg,#eef4ff_0%,#f8fafc_22%,#f8fafc_100%)] dark:bg-[linear-gradient(180deg,oklch(0.18_0.02_260)_0%,oklch(0.145_0_0)_22%,oklch(0.145_0_0)_100%)]",children:[g.jsx("div",{className:Re("fixed top-[60px] right-0 left-0 z-40 border-b border-border"," bg-background/80 backdrop-blur md:left-64"),children:g.jsxs("div",{className:"mx-auto flex w-full max-w-[1500px] flex-col px-4 pt-4",children:[g.jsxs("div",{className:"pb-4",children:[g.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground",children:"Workspace"}),g.jsx("h3",{className:"mt-1 text-3xl font-semibold text-foreground",children:n?n?.name:"Collection"}),g.jsx("h3",{className:"mt-1 text-sm font-normal text-muted-foreground",children:n?n?.description:""})]}),g.jsx(xl,{value:c,onValueChange:u,className:"gap-0",children:g.jsx("div",{className:"flex items-end justify-between gap-3",children:g.jsx(pl,{className:"h-auto w-full justify-start gap-1 overflow-x-auto rounded-none border-border bg-transparent p-0",children:i.map(x=>g.jsxs($n,{value:x.id,className:"group relative h-11 flex-none rounded-none border border-transparent border-b-0 bg-transparent px-3 text-muted-foreground shadow-none transition-all hover:bg-card hover:text-foreground data-[state=active]:border-border data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-sm",children:[g.jsx("span",{className:`rounded-md px-1.5 py-0.5 text-[10px] font-bold tracking-[0.16em] ${c9[x.method]??"bg-slate-100 text-slate-700 dark:bg-slate-950/60 dark:text-slate-400"}`,children:x.method}),g.jsx("span",{className:"max-w-[140px] truncate text-sm font-medium",children:x.label}),x.type==="request"&&r.includes(x.id)&&g.jsx("span",{className:"ml-1 h-2 w-2 rounded-full bg-orange-400 inline-block shrink-0"}),g.jsx("span",{className:"ml-1 inline-flex h-5 w-5 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground group-data-[state=active]:text-muted-foreground",children:g.jsx(Ve,{variant:"ghost",onClick:m=>{m.preventDefault(),m.stopPropagation(),h(x)},children:g.jsx(ma,{size:12})})})]},x.id))})})})]})}),g.jsx("div",{className:"mx-auto flex h-full w-full max-w-[1500px] flex-col px-4 pb-4 pt-[140px]",children:f?g.jsxs("div",{className:Re("rounded-b-2xl rounded-tr-2xl border border-t-0 border-border"," bg-card text-card-foreground shadow-sm"),children:[g.jsx(nA,{}),g.jsx("div",{className:"pt-3",children:g.jsx(l9,{})})]}):g.jsx("div",{className:Re("rounded-2xl border border-t-0 border-border"," bg-card text-card-foreground shadow-sm"),children:g.jsx(o9,{})})})]})},u9=()=>{const e=o_();return te.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",e.pathname)},[e.pathname]),g.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:g.jsxs("div",{className:"text-center",children:[g.jsx("h1",{className:"text-4xl font-bold mb-4",children:"404"}),g.jsx("p",{className:"text-xl text-gray-600 mb-4",children:"Oops! Page not found"}),g.jsx(c_,{to:"/",replace:!0,className:"text-blue-500 hover:text-blue-700 underline",children:"Return to Home"})]})})};function d9({className:e,...n}){return g.jsx(b3,{"data-slot":"checkbox",className:Re("peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",e),...n,children:g.jsx(S3,{"data-slot":"checkbox-indicator",className:"flex items-center justify-center text-current transition-none",children:g.jsx(qd,{className:"size-3.5"})})})}function Td({className:e,...n}){return g.jsx(_3,{"data-slot":"label",className:Re("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",e),...n})}const h9=""+new URL("bg-BO7dAebz.webm",import.meta.url).href,x9=""+new URL("bg-picture-DXBRu7Xo.png",import.meta.url).href,p9=()=>{const e=f_(),n=cn(),{status:r,error:s,isAuthenticated:i}=$e(b=>b.auth);te.useEffect(()=>{i&&e(Xi.EDITOR,{replace:!0})},[i,e]);const[c,f]=te.useState(!1),[u,h]=te.useState(""),[x,m]=te.useState(""),[v,y]=te.useState(!1),_=r==="loading",E=async b=>{if(b.preventDefault(),!u.trim()||!x.trim()){Ja.error("Please fill in all fields");return}const C=await n(el({username:u.trim(),password:x,rememberMe:v}));el.fulfilled.match(C)?e(Xi.EDITOR,{replace:!0}):Ja.error(s||"Invalid credentials")};return g.jsxs("div",{className:"h-screen flex flex-wrap items-center bg-amber-20",children:[g.jsxs("div",{className:"h-full hidden xl:flex w-[60%] items-center justify-center relative overflow-hidden",children:[g.jsx("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,poster:x9,className:"absolute inset-0 w-full h-full object-cover",children:g.jsx("source",{src:h9,type:"video/webm"})}),g.jsxs("div",{className:"relative z-10 text-left px-12",children:[g.jsx("h1",{className:"text-5xl font-extrabold text-white leading-tight",children:"API Collection Manager"}),g.jsx("p",{className:"mt-4 text-lg text-gray-300 leading-relaxed mx-auto",children:"Design, test, and manage API collections with an intuitive interface. Built for developers who value speed and simplicity."})]})]}),g.jsxs("div",{className:"w-full h-full xl:w-[40%] relative",children:[g.jsxs("div",{className:"flex flex-col justify-center items-start w-full absolute top-1/2 -translate-y-1/2",children:[g.jsx(ey,{className:"w-full mb-6 flex items-center justify-center border-none rounded-none shadow-[0_4px_6px_-3px_rgba(0,0,0,0.1)]",children:g.jsx("img",{src:jb,alt:"API Tester",className:"w-full max-h-60 object-contain"})}),g.jsx("h1",{className:"px-6 xl:px-10 text-2xl font-semibold pb-[26px] text-black",children:"Welcome back"}),g.jsxs("form",{className:"w-full px-6 xl:px-10",onSubmit:E,children:[g.jsxs("div",{className:"py-2.5",children:[g.jsx(Td,{htmlFor:"username",className:Re("text-sm font-medium text-black-900"),children:"Username"}),g.jsx(ut,{id:"username",placeholder:"Enter your username",type:"text",className:"my-2",value:u,onChange:b=>h(b.target.value),disabled:_,autoComplete:"username"})]}),g.jsxs("div",{className:"py-2.5",children:[g.jsx(Td,{htmlFor:"password",className:Re("text-sm font-medium text-black-900"),children:"Password"}),g.jsxs("div",{className:"relative w-full my-2",children:[g.jsx(ut,{id:"password",placeholder:"Enter your password",type:c?"text":"password",className:"pr-10",value:x,onChange:b=>m(b.target.value),disabled:_,autoComplete:"current-password"}),g.jsx(Ve,{type:"button",variant:"ghost",size:"icon",className:"absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 p-0",onClick:()=>f(b=>!b),children:c?g.jsx(Ic,{className:"w-4 h-4"}):g.jsx(jc,{className:"w-4 h-4"})})]})]}),g.jsxs("div",{className:"flex items-center gap-2 py-2.5",children:[g.jsx(d9,{id:"rememberMe",checked:v,onCheckedChange:b=>y(!!b),disabled:_}),g.jsx(Td,{htmlFor:"rememberMe",className:"text-sm font-normal cursor-pointer text-black-900",children:"Remember me"})]}),g.jsx(Ve,{className:Re("w-full h-[41px] cursor-pointer mt-3.5 bg-indigo-600 hover:bg-indigo-500"),disabled:_,children:_?"Signing in...":"Sign In"})]})]}),g.jsxs("p",{className:"absolute bottom-5 left-1/2 -translate-x-1/2 text-sm text-gray-500",children:["© ",new Date().getFullYear()," Apitester. All rights reserved."]})]})]})},m9=()=>{const e=cn(),{isAuthenticated:n,status:r}=$e(s=>s.auth);return te.useEffect(()=>{r==="idle"&&e(tl())},[r,e]),r==="idle"||r==="loading"?g.jsx("div",{className:"flex items-center justify-center h-screen bg-background",children:g.jsxs("div",{className:"flex flex-col items-center gap-4",children:[g.jsx("div",{className:"size-8 animate-spin rounded-full border-4 border-primary border-t-transparent"}),g.jsx("p",{className:"text-sm text-muted-foreground",children:"Verifying session..."})]})}):n?g.jsx(Ev,{}):g.jsx(Cv,{to:Xi.LOGIN,replace:!0})},g9=u_([{path:Xi.LOGIN,element:g.jsx(p9,{})},{path:"/",element:g.jsx(m9,{}),children:[{element:g.jsx(Kw,{children:g.jsx(Ev,{})}),children:[{index:!0,element:g.jsx(Cv,{to:Xi.EDITOR,replace:!0})},{path:Xi.EDITOR,element:g.jsx(f9,{})}]}]},{path:"*",element:g.jsx(u9,{})}]),v9=({children:e})=>{const n=cn();return te.useEffect(()=>{n(tl())},[n]),g.jsx(g.Fragment,{children:e})},y9=()=>g.jsx(l_,{store:I2,children:g.jsx(z_,{attribute:"class",defaultTheme:"system",enableSystem:!0,storageKey:"apitester-theme",children:g.jsx(qv,{children:g.jsxs(v9,{children:[g.jsx(q_,{position:"top-right",richColors:!0}),g.jsx(d_,{router:g9})]})})})});L_.createRoot(document.getElementById("root")).render(g.jsx(te.StrictMode,{children:g.jsx(y9,{})}));
