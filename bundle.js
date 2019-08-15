!function(t){var e={};function r(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){t.exports=r(1)},function(t,e,r){"use strict";async function n(t,e,r){return t.set("card","private",{POMORELLO_ACTIVE:!0,POMORELLO_BREAK:!1,POMORELLO_START:Date.now(),POMORELLO_SET_LENGTH:e,POMORELLO_BREAK_LENGTH:r})}function a(t,e){return t.refresh?{refresh:t.refresh,...e}:e}function s(t){return a(t,{text:"No Pomodoro Active",color:"yellow"})}function i(t){const e={text:`Resting: ${t.timeStr()}`,color:"blue"};return a(t,e)}r.r(e);class o{constructor(t=10){this.is_active=!1,this.is_break=!1,this.start_ms=0,this.set_length=15e5,this.break_length=3e5,this.name="?",this.refresh=t}async fetch(t){const e=t.card("name"),r=(await t.getAll()).card.shared;console.log("Got data: ",JSON.stringify(r,null,2)),this.is_active=r.POMORELLO_ACTIVE,this.is_break=r.POMORELLO_BREAK,this.start_ms=r.POMORELLO_START,this.set_length=r.POMORELLO_SET_LENGTH,this.break_length=r.POMORELLO_BREAK_LENGTH,this.name=(await e).name}async sync(t){return t.set("card","shared",{POMORELLO_ACTIVE:this.is_active,POMORELLO_BREAK:this.is_break,POMORELLO_START:this.start_ms,POMORELLO_SET_LENGTH:this.set_length,POMORELLO_BREAK_LENGTH:this.break_length})}age(){return Date.now()-start_ms}timeStr(){let t;this.is_active?t=this.set_length:this.is_break&&(t=this.break_length);const e=t-this.age();let r=Math.floor(e/1e3);return this.refresh&&(r=this.refresh*Math.ceil(r/this.refresh)),`${(Math.floor(r/60)%60).toFixed(0).padStart(2,"0")}:${(r%60).toFixed(0).padStart(2,"0")}`}}function c(t,e){t.popup({title:"Start a Pomodoro",items:[{text:"Plain 25/5",callback:(t,e)=>n(t,15e5,3e5)},{text:"Debug 1/0.5",callback:(t,e)=>n(t,6e4,3e4)}]})}window.TrelloPowerUp.initialize({"card-buttons":async(t,e)=>[{text:"Pomorello",callback:c}],"card-badges":async(t,e)=>[{dynamic:async()=>{const e=new o;await e.fetch(t);const r=e.age();return is_active?r>e.set_length?(await async function(t,e){return t.alert({message:`Pomodoro for card ${e.name} complete. Time to take a break!`,duration:10,display:"success"}),e.is_active=!1,e.is_break=!0,e.start=Date.now(),e.sync(t)}(t,e),i(e)):function(t){const e={text:`Pomodoro Active: ${t.timeStr()}`,color:"green"};return a(t,e)}(e):e.is_break?r>e.break_length?(await async function(t,e){return t.alert({message:`Break for card ${e.name} has ended!`,duration:10,display:"success"}),e.is_active=!1,e.is_break=!1,e.sync(t)}(t,e),s(e)):i(e):s(e)}}]})}]);