import{u as y,a as f,o as R,c as Z,b as J,r,d as mB,t as U,e as yB,f as O,g as V,h as t,i as l,_ as fB,j as uB,k as L,w as T,p as bB,l as hB}from"./index-CuyW-24S.js";let n=null,X="",d="",Y="",c=null,s=null,M=1,o=!1;const u={isAutofitRunnig:!1,init(C={},A=!0){A&&console.log("autofit.js is running");const{dw:D=1920,dh:G=1080,el:B=typeof C=="string"?C:"body",resize:F=!0,ignore:K=[],transition:H="none",delay:P=0,limit:Q=.1}=C;n=B;let I=document.querySelector(B);if(!I){console.error(`autofit: '${B}' is not exist`);return}const N=document.createElement("style"),e=document.createElement("style");N.lang="text/css",e.lang="text/css",N.id="autofit-style",e.id="ignoreStyle",N.innerHTML="body {overflow: hidden;}";const a=document.querySelector("body");a.appendChild(N),a.appendChild(e),I.style.height=`${G}px`,I.style.width=`${D}px`,I.style.transformOrigin="0 0",I.style.overflow="hidden",i(D,G,I,K,Q),c=()=>{clearTimeout(s),P!=0?s=setTimeout(()=>{i(D,G,I,K,Q),o&&p(X,Y,d)},P):(i(D,G,I,K,Q),o&&p(X,Y,d))},F&&window.addEventListener("resize",c),this.isAutofitRunnig=!0,setTimeout(()=>{I.style.transition=`${H}s`})},off(C="body"){try{o=!1,window.removeEventListener("resize",c),document.querySelector("#autofit-style").remove();const A=document.querySelector("#ignoreStyle");A&&A.remove(),document.querySelector(n||C).style="",o&&jB()}catch(A){console.error("autofit: Failed to remove normally",A),this.isAutofitRunnig=!1}this.isAutofitRunnig&&console.log("autofit.js is off")}};function p(C,A=!0,D=1){u.isAutofitRunnig||console.error("autofit.js：autofit has not been initialized yet"),!C&&console.error(`autofit.js：bad selector: ${C}`),X=C,d=D,Y=A;const G=document.querySelectorAll(C);if(G.length==0){console.error("autofit.js：elRectification found no element");return}for(let B of G){let F=M==1?1:M*D;o||(B.originalWidth=B.clientWidth,B.originalHeight=B.clientHeight),A?(B.style.width=`${B.originalWidth*F}px`,B.style.height=`${B.originalHeight*F}px`):(B.style.width=`${100*F}%`,B.style.height=`${100*F}%`),B.style.transform=`scale(${1/M})`,B.style.transformOrigin="0 0"}o=!0}function jB(){if(X)for(let C of document.querySelectorAll(X))C.style.width="",C.style.height="",C.style.transform=""}function i(C,A,D,G,B){let F=document.documentElement.clientHeight,K=document.documentElement.clientWidth;M=K/F<C/A?K/C:F/A,M=Math.abs(1-M)>B?M.toFixed(2):1;let H=Math.round(F/M),P=Math.round(K/M);D.style.height=`${H}px`,D.style.width=`${P}px`,D.style.transform=`scale(${M})`;const Q=document.querySelector("#ignoreStyle");Q.innerHTML="";for(let I of G){let N=I.el||I.dom;if(typeof I=="string"&&(N=I),!N){console.error(`autofit: bad selector: ${N}`);continue}let e=I.scale?I.scale:1/M,a=e!=M?I.fontSize:"autofit",_B=e!=M?I.width:"autofit",gB=e!=M?I.height:"autofit";new RegExp(`${N}( |{)`,"gm").test(Q.innerHTML)||(Q.innerHTML+=`
${N} { 
      transform: scale(${e})!important;
      transform-origin: 0 0;
      width: ${_B}!important;
      height: ${gB}!important;
    }`,a&&(Q.innerHTML+=`
${N} div ,${N} span,${N} a,${N} * {
        font-size: ${a}px;