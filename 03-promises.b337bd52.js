var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire95a2;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequire95a2=o);var r=o("9EgcF");function i(e,t){return new Promise(((n,o)=>{const r=Math.random()>.3;setTimeout((()=>{r?n(`✅ Fulfilled promise ${e} in ${t}ms`):o(`❌ Rejected promise ${e} in ${t}ms`)}),t)}))}function u(e){r.Notify.success(e,{timeout:5e3,width:"400px"})}function f(e){r.Notify.failure(e,{timeout:5e3,width:"400px"})}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();!function(e){const t={};e.forEach(((e,n)=>t[n]=Number(e)));let n=t.delay;for(let e=1;e<=t.amount;e++){const o=e;o>1&&(n+=t.step),i(o,n).then(u).catch(f)}}(new FormData(e.target))}));
//# sourceMappingURL=03-promises.b337bd52.js.map
