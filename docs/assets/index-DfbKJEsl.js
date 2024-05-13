import{u as _,a as g,o as Q,c as r,b as I,r as Y,d as RC,t as S,e as eC,f as M,g as U,h as V,i as Z,_ as TC,j as SC,k as K,w as e,p as UC,l as VC}from"./index-BNyAW5Th.js";let X=null,a="",i="",d="",n=null,l=null,N=1,t=!1;const m={isAutofitRunnig:!1,init(D={},A=!0){A&&console.log("autofit.js is running");const{dw:C=1920,dh:F=1080,el:B=typeof D=="string"?D:"body",resize:E=!0,ignore:J=[],transition:G="none",delay:O=0,limit:P=.1}=D;X=B;let H=document.querySelector(B);if(!H){console.error(`autofit: '${B}' is not exist`);return}const L=document.createElement("style"),R=document.createElement("style");L.lang="text/css",R.lang="text/css",L.id="autofit-style",R.id="ignoreStyle",L.innerHTML="body {overflow: hidden;}";const W=document.querySelector("body");W.appendChild(L),W.appendChild(R),H.style.height=`${F}px`,H.style.width=`${C}px`,H.style.transformOrigin="0 0",H.style.overflow="hidden",c(C,F,H,J,P),n=()=>{clearTimeout(l),O!=0?l=setTimeout(()=>{c(C,F,H,J,P),t&&s(a,d,i)},O):(c(C,F,H,J,P),t&&s(a,d,i))},E&&window.addEventListener("resize",n),this.isAutofitRunnig=!0,setTimeout(()=>{H.style.transition=`${G}s`})},off(D="body"){try{t=!1,window.removeEventListener("resize",n),document.querySelector("#autofit-style").remove();const A=document.querySelector("#ignoreStyle");A&&A.remove(),document.querySelector(X||D).style="",t&&tC()}catch(A){console.error("autofit: Failed to remove normally",A),this.isAutofitRunnig=!1}this.isAutofitRunnig&&console.log("autofit.js is off")}};function s(D,A=!0,C=1){m.isAutofitRunnig||console.error("autofit.js：autofit has not been initialized yet"),!D&&console.error(`autofit.js：bad selector: ${D}`),a=D,i=C,d=A;const F=document.querySelectorAll(D);if(F.length==0){console.error("autofit.js：elRectification found no element");return}for(let B of F){let E=N==1?1:N*C;t||(B.originalWidth=B.clientWidth,B.originalHeight=B.clientHeight),A?(B.style.width=`${B.originalWidth*E}px`,B.style.height=`${B.originalHeight*E}px`):(B.style.width=`${100*E}%`,B.style.height=`${100*E}%`),B.style.transform=`scale(${1/N})`,B.style.transformOrigin="0 0"}t=!0}function tC(){if(a)for(let D of document.querySelectorAll(a))D.style.width="",D.style.height="",D.style.transform=""}function c(D,A,C,F,B){let E=document.documentElement.clientHeight,J=document.documentElement.clientWidth;N=J/E<D/A?J/D:E/A,N=Math.abs(1-N)>B?N.toFixed(2):1;let G=Math.round(E/N),O=Math.round(J/N);C.style.height=`${G}px`,C.style.width=`${O}px`,C.style.transform=`scale(${N})`;const P=document.querySelector("#ignoreStyle");P.innerHTML="";for(let H of F){let L=H.el||H.dom;if(typeof H=="string"&&(L=H),!L){console.error(`autofit: bad selector: ${L}`);continue}let R=H.scale?H.scale:1/N,W=R!=N?H.fontSize:"autofit",PC=R!=N?H.width:"autofit",QC=R!=N?H.height:"autofit";new RegExp(`${L}( |{)`,"gm").test(P.innerHTML)||(P.innerHTML+=`
${L} { 
      transform: scale(${R})!important;
      transform-origin: 0 0;
      width: ${PC}!important;
      height: ${QC}!important;
    }`,W&&(P.innerHTML+=`
${L} div ,${L} span,${L} a,${L} * {
        font-size: ${W}px;