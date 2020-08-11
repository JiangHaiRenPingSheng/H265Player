!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var i in r)("object"==typeof exports?exports:e)[i]=r[i]}}(window,(function(){return function(e){var t={};function r(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(i,o,function(t){return e[t]}.bind(null,o));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){
/*!
 *  znu-event v0.0.7
 *  (c) 2020-2020 chenwuai
 *  https://github.com/chenchenwuai/znu-event.git
 * Released under the MIT License.
 */
e.exports=function(){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */function e(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],i=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function t(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var i,o,n=r.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(i=n.next()).done;)s.push(i.value)}catch(e){o={error:e}}finally{try{i&&!i.done&&(r=n.return)&&r.call(n)}finally{if(o)throw o.error}}return s}function r(){for(var e=[],r=0;r<arguments.length;r++)e=e.concat(t(arguments[r]));return e}return function(){function i(){this._listenersMap={}}return i.prototype.on=function(e,t){return void 0===this._listenersMap[e]&&(this._listenersMap[e]=[]),this._listenersMap[e].push(t),this},i.prototype.once=function(e,t){return t.isOnce=!0,this.on(e,t),this},i.prototype.off=function(e,t){var r=this._listenersMap[e];if(void 0!==r)if(void 0===t)delete this._listenersMap[e];else{var i=r.findIndex((function(e){return e===t}));r.splice(i,1)}return this},i.prototype.offAll=function(){this._listenersMap={}},i.prototype.emit=function(i){for(var o,n,s=[],a=1;a<arguments.length;a++)s[a-1]=arguments[a];var d=this._listenersMap[i];if(void 0!==d&&d.length>0){try{for(var c=e(d.entries()),u=c.next();!u.done;u=c.next()){var l=t(u.value,2),h=l[0],f=l[1];if(f.isOnce){var p=f;d.splice(h,1),p.apply(void 0,r(s))}else f.apply(void 0,r(s))}}catch(e){o={error:e}}finally{try{u&&!u.done&&(n=c.return)&&n.call(c)}finally{if(o)throw o.error}}return!0}return!1},i.prototype.has=function(e){return void 0!==this._listenersMap[e]&&this._listenersMap[e].length>0},i.prototype.eventNames=function(){var e=[];for(var t in this._listenersMap)e.push(t);return e},i.prototype.destroy=function(){this.offAll()},i}()}()},function(e,t,r){"use strict";r.r(t);const i=0,o={InitDecodeRES:0,InitDecodeREQ:1,OpenDecodeRES:2,OpenDecodeREQ:3,StartDecodeRES:4,StartDecodeREQ:5,FeedDataRES:6,VideoFrameREQ:7,PauseDecodeRES:8,PauseDecodeREQ:9,CloseDecodeRES:10,CloseDecodeREQ:11},n=0,s=1;function a(e){this.gl=e,this.texture=e.createTexture(),e.bindTexture(e.TEXTURE_2D,this.texture),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}function d(e,t){this.canvas=e,this.gl=e.getContext("webgl")||e.getContext("experimental-webgl"),this.initGL(t)}a.prototype.bind=function(e,t,r){var i=this.gl;i.activeTexture([i.TEXTURE0,i.TEXTURE1,i.TEXTURE2][e]),i.bindTexture(i.TEXTURE_2D,this.texture),i.uniform1i(i.getUniformLocation(t,r),e)},a.prototype.fill=function(e,t,r){var i=this.gl;i.bindTexture(i.TEXTURE_2D,this.texture),i.texImage2D(i.TEXTURE_2D,0,i.LUMINANCE,e,t,0,i.LUMINANCE,i.UNSIGNED_BYTE,r)},d.prototype.initGL=function(e){if(this.gl){var t=this.gl;t.pixelStorei(t.UNPACK_ALIGNMENT,1);var r=t.createProgram(),i=["attribute highp vec4 aVertexPosition;","attribute vec2 aTextureCoord;","varying highp vec2 vTextureCoord;","void main(void) {"," gl_Position = aVertexPosition;"," vTextureCoord = aTextureCoord;","}"].join("\n"),o=t.createShader(t.VERTEX_SHADER);t.shaderSource(o,i),t.compileShader(o);var n=["precision highp float;","varying lowp vec2 vTextureCoord;","uniform sampler2D YTexture;","uniform sampler2D UTexture;","uniform sampler2D VTexture;","const mat4 YUV2RGB = mat4","("," 1.1643828125, 0, 1.59602734375, -.87078515625,"," 1.1643828125, -.39176171875, -.81296875, .52959375,"," 1.1643828125, 2.017234375, 0, -1.081390625,"," 0, 0, 0, 1",");","void main(void) {"," gl_FragColor = vec4( texture2D(YTexture, vTextureCoord).x, texture2D(UTexture, vTextureCoord).x, texture2D(VTexture, vTextureCoord).x, 1) * YUV2RGB;","}"].join("\n"),s=t.createShader(t.FRAGMENT_SHADER);t.shaderSource(s,n),t.compileShader(s),t.attachShader(r,o),t.attachShader(r,s),t.linkProgram(r),t.useProgram(r),t.getProgramParameter(r,t.LINK_STATUS)||console.log("[ER] Shader link failed.");var d=t.getAttribLocation(r,"aVertexPosition");t.enableVertexAttribArray(d);var c=t.getAttribLocation(r,"aTextureCoord");t.enableVertexAttribArray(c);var u=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,u),t.bufferData(t.ARRAY_BUFFER,new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0]),t.STATIC_DRAW),t.vertexAttribPointer(d,3,t.FLOAT,!1,0,0);var l=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,l),t.bufferData(t.ARRAY_BUFFER,new Float32Array([1,0,0,0,1,1,0,1]),t.STATIC_DRAW),t.vertexAttribPointer(c,2,t.FLOAT,!1,0,0),t.y=new a(t),t.u=new a(t),t.v=new a(t),t.y.bind(0,r,"YTexture"),t.u.bind(1,r,"UTexture"),t.v.bind(2,r,"VTexture")}else console.log("[ER] WebGL not supported.")},d.prototype.renderFrame=function(e,t,r,i,o){if(this.gl){var n=this.gl;n.viewport(0,0,n.canvas.width,n.canvas.height),n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT),n.y.fill(t,r,e.subarray(0,i)),n.u.fill(t>>1,r>>1,e.subarray(i,i+o)),n.v.fill(t>>1,r>>1,e.subarray(i+o,e.length)),n.drawArrays(n.TRIANGLE_STRIP,0,4)}else console.log("[ER] Render frame failed due to WebGL not supported.")},d.prototype.fullscreen=function(){var e=this.canvas;e.RequestFullScreen?e.RequestFullScreen():e.webkitRequestFullScreen?e.webkitRequestFullScreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.msRequestFullscreen?e.msRequestFullscreen():alert("This browser doesn't supporter fullscreen")},d.prototype.exitfullscreen=function(){document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():alert("Exit fullscreen doesn't work")};var c=d,u=r(0),l=r.n(u);class h{static isSupported(){try{return void 0!==self.Worker&&void 0!==self.WebGLRenderingContext}catch(e){return!1}}constructor(e){this.TAG="H265Player",this.CLASS_ID=function(){const e=+new Date+"";return(+(parseInt(65536*(1+Math.random()))+""+e)).toString(32)}(),this.canvas=null,this.webglPlayer=null,this.callback=null,this.decodeStatus=i,this.playerStatus=n,this.DECODER_H265=1,this.decoding=!1,this.frameBuffer=[],this.event=new l.a,this.config={decoderPath:"H265Decoder.js",isDebug:!1},e&&(this.config=function e(t,r){return"object"!=typeof t&&(t={}),Array.isArray(r)?r.slice():(Object.keys(r).forEach(i=>{const o=r[i];t[i]="object"==typeof o?e(t[i],o):o}),t)}(this.config,e)),this.requestAnimationFrameId=null,this.decodeWorker=null,this.initDecodeWorker(),this.registerVisibilityEvent(e=>{e?this.playerStatus==s&&this.startDecoding():this.playerStatus==s&&this.pauseDecoding()})}initDecodeWorker(){this._Log("initDecoderWorker");var e=this;this.decodeWorker=new Worker(this.config.decoderPath),this.decodeWorker.onmessage=function(t){var r=t.data;switch(e._Log("Get decodeWorker message",JSON.stringify(r)),r.type){case o.InitDecodeREQ:e.onInitDecoder();break;case o.OpenDecodeREQ:e.onOpenDecoder();break;case o.VideoFrameREQ:e.onVideoFrame(r)}};var t={type:"INIT_DECODE",config:{isDebug:!0,logLevel:1,DECODER_H265:this.DECODER_H265,DECODE_MESSAGE:o}};this.decodeWorker.postMessage(t)}play(e,t){this._Log("Start Play");var r={err:0,msg:"Success"};do{if(!e){r.err=-2,r.msg="Canvas not set",!1,this._Log("[ER] playVideo error, canvas empty.");break}if(!this.decodeWorker){r.err=-4,r.msg="Decoder not initialized",!1,this._Log("[ER] Decoder not initialized.");break}this.canvas=e,this.callback=t,this.playerStatus=s,this.startDecoding(),this.displayLoop(),this.webglPlayer=new c(this.canvas,{preserveDrawingBuffer:!1})}while(0);return r}displayLoop(){if(this._Log("displayLoop"),this.playerStatus!==n&&(this.requestAnimationFrameId=requestAnimationFrame(this.displayLoop.bind(this))),this.playerStatus===s&&0!=this.frameBuffer.length)for(let t=0;t<2;++t){var e=this.frameBuffer[0];switch(e.type){case o.VideoFrameREQ:this.displayVideoFrame(e)&&this.frameBuffer.shift();break;default:return}if(0==this.frameBuffer.length)break}}displayVideoFrame(e){if(this.playerStatus!==s)return!1;var t=e.width,r=e.height;this.videoWidth=t,this.videoHeight=r,this.yLength=t*r,this.uvLength=t/2*(r/2);var i=new Uint8Array(e.data);return this.renderVideoFrame(i),!0}renderVideoFrame(e){this.webglPlayer.renderFrame(e,this.videoWidth,this.videoHeight,this.yLength,this.uvLength),this.event.emit("renderProgress",{videoHeight:this.videoHeight,videoWidth:this.videoWidth})}onInitDecoder(){this._Log("init decoder response")}onOpenDecoder(){this._Log("open decoder response"),this.startDecoding()}decode(e,t){try{if(this._Log(`Decode Buffer, decoding:${this.decoding} timestamp:${t}`),this.decoding){var r={type:o.FeedDataRES,data:e,timestamp:t};this.decodeWorker.postMessage(r,r.data)}}catch(e){console.error(e)}}startDecoding(){this.decoding=!0,this.decodeWorker.postMessage({type:o.StartDecodeRES}),this._Log("Send Message: start decode")}pauseDecoding(){this.decoding=!1,this.decodeWorker.postMessage({type:o.PauseDecodeRES}),this._Log("Send Message: pause decode")}stopDecoding(){this.decoding=!1,this.decodeWorker.postMessage({type:o.CloseDecodeRES}),this._Log("Send Message: Finish decode")}bufferFrame(e){this.decoding&&this.frameBuffer.push(e)}onVideoFrame(e){this.bufferFrame(e)}fullscreen(){this.webglPlayer&&this.webglPlayer.fullscreen()}registerVisibilityEvent(e){var t="hidden";function r(r){var i={focus:!0,focusin:!0,pageshow:!0,blur:!1,focusout:!1,pagehide:!1},o=!0;o=(r=r||window.event).type in i?i[r.type]:!this[t],e(o)}t in document?document.addEventListener("visibilitychange",r):(t="mozHidden")in document?document.addEventListener("mozvisibilitychange",r):(t="webkitHidden")in document?document.addEventListener("webkitvisibilitychange",r):(t="msHidden")in document?document.addEventListener("msvisibilitychange",r):"onfocusin"in document?document.onfocusin=document.onfocusout=r:window.onpageshow=window.onpagehide=window.onfocus=window.onblur=r,void 0!==document[t]&&r({type:document[t]?"blur":"focus"})}async clean(){this.cleaning||this.pauseDecoding(),this.requestAnimationFrameId&&window.cancelAnimationFrame(this.requestAnimationFrameId),this.canvas=null,this.webglPlayer=null,this.callback=null,this.decodeStatus=i,this.playerStatus=n,this.decoding=!1,this.frameBuffer=[],this.event&&await this.event.offAll()}async destroy(){await this.stopDecoding(),this.cleaning=!0,await this.clean()}on(e,t){this.event.on(e,t)}off(e,t){this.event.off(e,t)}_Log(){if(this.config.isDebug){var e=new Date(Date.now()),t=e.getHours()+":"+e.getMinutes()+":"+e.getSeconds()+":"+e.getMilliseconds();console.log(`[${t}][ ${this.TAG}|${this.CLASS_ID} ] : `,...arguments)}}}window&&(window.H265Player=h);t.default=h}])}));