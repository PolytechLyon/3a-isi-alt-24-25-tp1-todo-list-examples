(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const u of t.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&c(u)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const r=[];let l;const E=document.getElementById("todo-list"),m=document.getElementById("new-todo-item-title"),p=document.getElementById("edit-item-panel"),d=document.getElementById("edit-todo-item-title");document.getElementById("new-todo-item-add").addEventListener("click",g);m.addEventListener("keyup",a("Enter",g));document.getElementById("edit-todo-item-cancel").addEventListener("click",v);document.getElementById("edit-todo-item-confirm").addEventListener("click",y);d.addEventListener("keyup",a("Enter",y));d.addEventListener("keyup",a("Escape",v));function a(n,i){return o=>o.key===n&&i()}function h(n){const i=r[n];p.hidden=!1,d.value=i,l=n,d.focus()}function y(){l!==void 0&&(d.value&&(r[l]=d.value,f()),s())}function v(){s()}function s(){l=void 0,p.hidden=!0,d.value=""}function I(n){s(),r.splice(n,1),f()}function g(){s();const n=m.value;r.push(n),m.value="",f()}function L(n,i){const o=E.appendChild(document.createElement("li")),c=o.appendChild(document.createElement("span")),e=o.appendChild(document.createElement("button")),t=o.appendChild(document.createElement("button"));c.innerText=n,e.innerText="Modifier",t.innerText="Supprimer",e.addEventListener("click",()=>h(i)),t.addEventListener("click",()=>I(i))}function f(){E.replaceChildren(),r.forEach(L)}
