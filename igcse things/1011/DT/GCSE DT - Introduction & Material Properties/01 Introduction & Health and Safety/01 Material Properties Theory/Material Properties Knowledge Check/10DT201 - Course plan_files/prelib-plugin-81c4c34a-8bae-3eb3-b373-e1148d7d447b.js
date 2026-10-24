/* Copyright (c) 2025 WalkMe v3.0.1 */
;(function () { var __wmPrelibConfig = {"buildDate":"2025-09-15T16:01:11.237Z","plugins":[{"name":"wm-plugin-set-walkme-language@1.3.0@prelib","url":"prelib"},{"name":"wm-plugin-user-behavior@5.0.80@prelib","url":"prelib"},{"name":"wm-plugin-native-functions-restorer@0.6.4@prelib","url":"prelib"}]};
!function(){var t={224:function(t){!function(){function e(t,e){this._object=void 0,this._name=t,this._ctx=e,this.properties={strategy:a.defaults.strategy,factory:a.defaults.factory,injector:a.defaults.injector,load:a.defaults.load,wasReady:!1,initialize:!0}}e.prototype.name=function(){return this._name},e.prototype.asFactory=function(t,e){return null!=e&&this.type(e),this.factory(t),this},e.prototype.loadDependencies=function(t,e){return null!=e&&this.dependencies(e),this.load(t),this},e.prototype.asFunction=function(t){return this.asFactory(a.factory.func,t)},e.prototype.asInstance=function(t){return this.asFactory(a.factory.instance,t)},e.prototype.asCtor=function(t){return this.asFactory(a.factory.constructor,t)},e.prototype.asSingleton=function(){return this.strategy(a.strategy.singleton)},e.prototype.asProto=function(){return this.strategy(a.strategy.proto)},e.prototype.injectToCtor=function(){return this.injector(a.injector.ctor)},e.prototype.injectToReady=function(){return this.injector(a.injector.ready)},e.prototype.injectToProperty=function(){return this.injector(a.injector.property)},e.prototype.flatDependencies=function(t){return this.loadDependencies(a.load.flat,t)},e.prototype.recursiveDependencies=function(t){return this.loadDependencies(a.load.recursive,t)},e.prototype.useOnce=function(){var t=this.getObject;return this.getObject=function(){return this._ctx.map[this.name()]=null,t.apply(this,arguments)},this},e.prototype.depsDictionary=function(t){return arguments.length?(this.properties.depsDictionary=t,this):(this.properties.depsDictionary||this.depsDictionary(this._ctx.resolve(this)),this.properties.depsDictionary)},e.prototype.create=function(t,e,r){r=r||a.load.recursive;var n=this.properties.strategy.test(this._object,r);if(e)return n;n&&(t=this.properties.injector.create(t||this.properties.args,this,this._ctx,r));var o=this.properties.strategy.create(this._object,this.properties.factory,this.properties.type,t,this._ctx,this,r);return this._ctx.ready(o,this)},e.prototype.getObject=function(t){return this.create(void 0,void 0,t)},e.prototype.object=function(t){return arguments.length?(this._object=t,this):this.create()};for(var r=["load","wasReady","strategy","injector","type","dependencies","args","factory","initialize"],n=0;n<r.length;n++){o(r[n])}function o(t){e.prototype[t]=function(e){return arguments.length?(this.properties[t]=e,this):this.properties[t]}}var i=function(){function t(t){this.fallbackCtx=t,this.map={},this.decorators={},this.initialize=this.createInitializer()}return t.prototype.decorate=function(t,e){this.decorators[t]||(this.decorators[t]=[]),this.decorators[t].push(e)},t.prototype.entry=function(t){return void 0!==this.map[t]?this.map[t]:this.fallbackCtx&&this.fallbackCtx.entry(t)},t.prototype.register=function(t,r,n){var o=new e(t,this).type(r).args(n);return this.map[t]=o,o},t.prototype.has=function(t){return null!=this.entry(t)},t.prototype.remove=function(t){return!!this.has(t)&&(this.map[t]=null,!0)},t.prototype.isEntryRemoved=function(t){return null===this.entry(t)},t.prototype.get=function(t,e){return this.isEntryRemoved(t)&&a.error("Object["+t+"] was removed"),this.has(t)||a.error("Object["+t+"] is not registered"),this.entry(t).getObject(e)},t.prototype.create=function(t,e){if(this.entry(t).strategy()==a.strategy.singleton&&a.error("Attempt to create singleton object ["+t+"]"),this.has(t))return this.entry(t).create(e);a.error("Object["+t+"] is not registered")},t.prototype.createInitializer=function(){var t=this;return function(e){if(e)t.innerInit(e);else for(var r in t.map)t.innerInit(r)}},t.prototype.innerInit=function(t){var e=this.entry(t);e?e.initialize()&&e.strategy().initialize()&&this.get(t):a.error("Object["+t+"] is not registered")},t.prototype.clear=function(){this.map={},this.decorators={}},t.prototype.removeSpaces=function(t){for(;t.indexOf(" ")>=0;)t=t.replace(" ","");return t},t.prototype.resolve=function(t){var e=this,r=t.load(),n={};return this.eachDependency(t.dependencies(),(function(o,i){var s=e.get(o,r);e.ready(s,e.entry(o)),null==s&&a.error("Dependency ["+t.name()+"."+i+"]->["+o+"] can not be satisfied",t),n[i]=s})),n},t.prototype.eachDependency=function(t,e){if(t)for(var r=this.removeSpaces(t).split(","),n=0;n<r.length;n++){var o=r[n];if(o){var i=a.dependencyExpression(o);try{e(i.name,i.property,n)}catch(t){a.error("An exception was thrown while the DI tried to resolve class '"+i.name+"'. Check the class name, or if it was registred correctly. \r\n inner exception: \r\n"+t.message)}}}},t.prototype.ready=function(t,e){if(null===e&&t)return t;var r=e.wasReady();if(e.wasReady(!0),!r){var n=this.createCallback();n&&n(e.name(),t),t&&"function"==typeof t.ready&&t!=window&&t!=window.document&&t!=window.document.body&&(e.wasReady(!0),t.ready.apply(t,e.injector().ready(t,e)||[]))}return t},t.prototype.createCallback=function(t){return 0==arguments.length?this.callback:(this.callback=t,this)},t}(),a=function(t){(t=t||{}).version="0.3.3";function r(t,e,r,n,o){var i=t(e,r,o),a=void 0!==n.decorators[o.name()]?n.decorators[o.name()]:n.fallbackCtx&&n.fallbackCtx.decorators[o.name()];if(a)for(var s=0;s<a.length;s++)i=a[s](i);return i}return t.logger=function(t,e){},t.log=function(e,r,n){r&&(e="[class="+r.name()+"] "+e),t.logger("DI - "+e,n||4)},t.error=function(e,r,n){t.log(e,r,n)},t.createContext=function(t){return new i(t)},t.dependencyExpression=function(t){var e={},r=t,n=t;if(t.indexOf("=")>0){var o=t.split("=");r=o[0],n=o[1]}return e.name=n,e.property=r,e},t.entry=function(t,r){return new e(t,r)},t.strategy={proto:{test:function(t,e){return!e||e()},initialize:function(){return!1},create:function(t,e,n,o,i,a,s){return t=r(e,n,o,i,a),s()&&a.injector().ready(t,a),a.depsDictionary(void 0),a.wasReady(!1),t}},singleton:{test:function(t,e){return!t&&(!e||e())},initialize:function(){return!0},create:function(t,e,n,o,i,a,s){return t||(t=r(e,n,o,i,a),a.object(t),a.wasReady(!0),s()&&a.injector().ready(t,a),a.wasReady(!1)),t}}},t.factory={constructor:function(e,r,n){return r instanceof Array?r.length<=10?new e(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9]):r.length<=30?new e(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9],r[10],r[11],r[12],r[13],r[14],r[15],r[16],r[17],r[18],r[19],r[20],r[21],r[22],r[23],r[24],r[25],r[26],r[27],r[28],r[29]):void t.error("trying to create a class with too many args!",n):new e(r)},func:function(t,e,r){return e instanceof Array?t.apply(t,e):t(e)},instance:function(t,e,r){return t}},t.injector={property:{create:function(t,e,r){return t},ready:function(t,e){var r=e.depsDictionary();for(var n in r)t[n]=r[n];var o=e.args();null==o||r.hasOwnProperty("args")||(t.args=o)}},ready:{create:function(t,e,r){return t},ready:function(t,e){var r=e.args(),n=[],o=e.depsDictionary();if(s.eachDependency(e.dependencies(),(function(t,e,r){n[r]=o[e]})),r){r=r instanceof Array?r:[r];for(var i=0;i<r.length;i++)n.push(r[i])}return n}},ctor:{create:function(t,e,r){var n=[],o=e.depsDictionary();if(r.eachDependency(e.dependencies(),(function(t,e,r){n[r]=o[e]})),t){t=t instanceof Array?t:[t];for(var i=0;i<t.length;i++)n.push(t[i])}return n},ready:function(t,e){}}},t.load={flat:function(t,e,r){return!1},recursive:function(t,e,r){return!0}},t.defaults={strategy:t.strategy.singleton,factory:t.factory.constructor,injector:t.injector.ctor,load:t.load.recursive},t}(),s=a.createContext();
/**
 * @license
 *  Copyright 2013 the original author or authors.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  You may obtain a copy of the License at
 *
 *		http://www.apache.org/licenses/LICENSE-2.0
    *
    *  Unless required by applicable law or agreed to in writing, software
    *  distributed under the License is distributed on an "AS IS" BASIS,
    *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    *  See the License for the specific language governing permissions and
    *  limitations under the License.
    */t.exports=function(t,e){t.di=a,t.ctx=e?a.createContext(e):s}}()},57:function(t,e){"use strict";e.__esModule=!0;var r=function(){function t(t){this._eventsBase=t}return t.prototype.on=function(t,e){var r=n(e);this._eventsBase.on(t,r)},t.prototype.once=function(t,e){var r=n(e);this._eventsBase.one(t,r)},t.prototype.off=function(t,e){var r=function(t){return t&&t.__wmEventWrapped||t}(e);this._eventsBase.off(t,r)},t}();function n(t){return t.__wmEventWrapped||(t.__wmEventWrapped=function(t){return function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var n=t.apply(this,e),o=(e[0],e[1]);return o&&o.__asyncResults&&o.__asyncResults.push(n),n}}(t)),t.__wmEventWrapped}e.EventsListener=r},805:function(t,e){"use strict";e.__esModule=!0;var r=function(){function t(t,e){this._eventsBase=t,this._promiseManager=e}return t.prototype.async=function(t,e,r,n){var o;try{o=this._eventsBase.triggerHandler(t,e)}catch(t){n&&n()}this._promiseManager.Promise.resolve(o).then(r,n)},t.prototype.sync=function(t,e,r){var n=e&&e.asyncCallback;n&&(e.__asyncResults=[]);var o=this._eventsBase.triggerHandler(t,e);return n&&(o=this._promiseManager.all(e.__asyncResults).then((function(t){return t[t.length-1]}))),null==o?r:o},t}();e.EventsTrigger=r},662:function(t,e,r){"use strict";var n=r(57);e._e=n.EventsListener;var o=r(805);e.gt=o.EventsTrigger},508:function(t,e,r){"use strict";e.__esModule=!0,e.ActivationManager=function(t){var e=t.wmLoader,r=this;r.list=function(){var t=[];for(var r in e.packages)e.packages.hasOwnProperty(r)&&t.push({name:r,isActive:!0});for(var n=0;n<e.inactive.length;n++)t.push({name:e.inactive[n],isActive:!1});return t},r.deactivateAll=function(){a(o.inactive)},r.activateAll=function(){a(o.active)},r.activate=function(t){i(t,o.active)},r.deactivate=function(t){i(t,o.inactive)};var o={active:1,inactive:0};function i(t,e){var r=n.pluginsStateWrapper.getState();r[t]=e,n.pluginsStateWrapper.saveState(r)}function a(t){var r={};for(var o in e.packages)e.packages.hasOwnProperty(o)&&(r[o]=t);for(var i=0;i<e.inactive.length;i++)r[e.inactive[i]]=t;n.pluginsStateWrapper.saveState(r)}};var n=r(971)},606:function(t,e){"use strict";e.__esModule=!0;e.cookieManager=new function(){this.setCookie=function(r,n,o,i){"string"!=typeof n&&(n=n.toString());n=encodeURIComponent(n);var a="";i&&i.length>0&&(a="; domain="+i);var s=new Date;s.setTime(s.getTime()+1e3*o);var c="; expires="+s.toUTCString(),u=e?t:"",l=n+c+"; path=/"+a;document.cookie=r+"="+l+u},this.getCookie=function(t){for(var e=document.cookie.split(";"),r=0;r<e.length;r++){var n=e[r].substr(0,e[r].indexOf("=")),o=e[r].substr(e[r].indexOf("=")+1);if((n=n.replace(/^\s+|\s+$/g,""))===t)return decodeURIComponent(o)}};var t=";secure",e=void 0;e="https:"===window.location.protocol}},556:function(t,e){"use strict";e.__esModule=!0,e.dummyPlugin=function(t,e){var r=t(),n=r.ctx,o=n.get("PrelibLogger");o.write("[wm-loader] "+e+" is disabled and therefore not loaded")}},640:function(t,e,r){"use strict";e.__esModule=!0,e.default=function(t){var e=t.Promise,r=t.document,i=this;i.load=function(t,i){if(!t)throw new Error("cannot load module without a name");if(!i)throw new Error("cannot load module without an URL");if(!n.pluginsStateWrapper.shouldLoad(t))return d.push(t),e.resolve((function(e){(0,o.dummyPlugin)(e,t)}));var a=f[t]=f[t]||{name:t};if(!a.promise)if(a.factory)a.promise=e.resolve(h(a));else{(w=a).promise=new e((function(t,e){w.resolve=t,w.reject=e}));var p=function(t,e){var n=l[e];if(n)n.packages[t]=!0;else{var o;n=l[e]={url:e,status:"loading",start:new Date,packages:(o={},o[t]=!0,o)};var i=function(t){var e=r.createElement("script");return e.type="text/javascript",e.charset="utf-8",e.async=!0,e.src=t,e}(e);!function(t,e){if(t.addEventListener)t.addEventListener("load",v(e),!1),t.addEventListener("error",y(e),!1);else{if(!t.attachEvent)throw new Error("neither addEventListener nor attachEvent is supported");t.attachEvent("onreadystatechange",v(e))}}(i,e),u.appendChild(i)}return n}(t,i);"loaded"===p.status?g(a,s(t,i)):"error"===p.status&&g(a,c(t,i))}var w;return a.promise},i.define=function(t,e,r){if(!n.pluginsStateWrapper.shouldLoad(t))return;var o=f[t]=f[t]||{name:t};o.factory||(o.factory=r,o.build=e);if(o.resolve)try{i=o,a=h(o),i.resolve(a),w(i)}catch(e){g(o,function(t,e){var r=new Error("error thrown in factory. package: "+e+"\ncaused by:\n"+t.stack);return r.name="FactoryError",r.cause=t,r.package=e,r}(e,t))}var i,a};var u=r.getElementsByTagName("head")[0],l={},f={},p=[],d=[];function h(t){return t.factory(t.build)}i.bundles=l,i.packages=f,i.errors=p,i.inactive=d;var v=function(t){return function(e){if(function(t){if("load"===t.type)return!0;var e=a(t),r=e.readyState;return"complete"===r||"loaded"===r}(e)){var r=l[t];for(var n in r.status="loaded",r.loadMs||(r.loadMs=(new Date).getTime()-r.start),r.packages)if(r.packages.hasOwnProperty(n)){var o=f[n];o.reject&&g(o,s(n,t))}m(a(e))}}},y=function(t){return function(e){var r=l[t];for(var n in r.status="error",r.loadMs||(r.loadMs=(new Date).getTime()-r.start),r.packages)if(r.packages.hasOwnProperty(n)){var o=f[n];o.reject&&g(o,c(n,t))}m(a(e))}};function g(t,e){!function(t){t.date=new Date,p.push(t)}(e),t.reject(e),w(t)}function w(t){delete t.resolve,delete t.reject}function m(t){t.parentNode.removeChild(t)}};var n=r(971),o=r(556),i=r(508);function a(t){return t.currentTarget||t.srcElement}function s(t,e){var r=new Error("package not found in the specified bundle. package: "+t+", bundle: "+e);return r.name="PackageNotFound",r.package=t,r.bundle=e,r}function c(t,e){var r=new Error("cannot load bundle. package: "+t+", bundle: "+e);return r.name="BundleLoadError",r.package=t,r.bundle=e,r}e.ActivationManager=i.ActivationManager},971:function(t,e,r){"use strict";e.__esModule=!0,e.pluginsStateWrapper=void 0;var n=r(606);e.pluginsStateWrapper=new function(){var t=this;t.shouldLoad=function(t){return!(0===e[t])},t.saveState=function(t){n.cookieManager.setCookie(r,JSON.stringify(t),86400)},t.getState=function(){return JSON.parse(n.cookieManager.getCookie(r)||"{}")};var e=void 0,r="walkme_prelib_activ_state";e=JSON.parse(n.cookieManager.getCookie(r)||"{}")}},780:function(t){"use strict";var e,r,n,o,i="walkme_prelib_log_enabled",a="wm-prelib-send-logs",s=[],c=[],u={write:function(){if(f()){var t=arguments;try{t.stack=(new Error).stack}catch(t){}!function(t){var e=new Date;t.timeElapsed=e-(n||e),n=e,s.unshift(t),s=s.splice(0,1e4)}(t);var r=Array().slice.call(t);console.log.apply(console,r)}(function(){if("boolean"==typeof e)return e;e=!1;var t=localStorage.getItem(a);n=t,o=parseInt(n),!isNaN(o)&&o==n&&Date.now()<t?e=!0:"true"===t&&(e=!0,localStorage.setItem(a,((r=new Date).setDate(r.getDate()+1),r.setHours(0,0,0,0))));var r;var n,o;return e})()&&(_walkmeInternals.ctx.has("DataSenderLog")?(!function(){for(;c.length;)l(c.shift())}(),l(h(arguments))):c.push(h(arguments)))},getCookieName:function(){return i},setCookieName:function(t){i=t},enableLog:function(){r=!0,d(i,!0)},disableLog:function(){r=!1,d(i,"",-1)},isLogEnabled:f,readCookie:p,writeCookie:d,getLogHistoryRecords:function(){return s}};function l(t){_walkmeInternals.ctx.get("EventCollectorLogger").log("info",t,{component:"prelib",_logSessionId:(o||(o=_walkmeInternals.ctx.get("GuidGenerator").generateGuid()),o)})}function f(){return void 0!==r?r:(t=window.console&&(p(i)||!1),r=t&&"true"==t.toString().toLowerCase());var t}function p(t){var e=document.cookie.match("(^|;)\\s*"+t+"\\s*=\\s*([^;]+)");return e?e.pop():void 0}function d(t,e,r){var n,o="";r&&((n=new Date).setTime(n.getTime()+864e5*r),o="; expires="+n.toUTCString()),document.cookie=t+"="+e+o+"; path=/"}function h(t){for(var e="",r=0,n=t.length;r<n;r++){e=e+("string"==typeof t[r]?t[r]:JSON.stringify(t[r]))+" "}return e.slice(0,-1)}t.exports=u},743:function(t,e){"use strict";var r=function(){function t(t){this.promiseManager=t,this._plugins=[]}return t.prototype.register=function(t){this._plugins.push(t)},t.prototype.run=function(t){for(var e,r=this._plugins,n=[],o=0;o<r.length;o++)(e=r[o].run(t))&&n.push(e);return this.promiseManager.all(n)},t}();e.Q=r},257:function(t,e){"use strict";var r=function(){function t(t,e,r){this.PluginsManager=e,this._configs=new this.PluginsManager(r),this._plugins=new this.PluginsManager(r),this.ctx=t.ctx,this.di=t.di}return t.prototype.config=function(t){this._configs.register(t)},t.prototype.plugin=function(t){this._plugins.register(t)},t.prototype.start=function(t){var e=this,r=this._configs,n=this._plugins;return r.run(t).then((function(){return n.run(t)})).then((function(){return e.callWalkmePreLibLoaded()})).catch((function(t){e.logError(t)}))},t.prototype.callWalkmePreLibLoaded=function(){window.walkme_pre_lib_loaded&&window.walkme_pre_lib_loaded()},t.prototype.logError=function(t){throw this.ctx.has("PrelibLogger")&&this.ctx.get("PrelibLogger").write("Prelib encountered an error while loading: "+t+"\nDetails:\n"+t.stack),t},t}();e.H=r},551:function(t){t.exports=function(t,e,r){var n=e().ctx,o=n.get("PromiseManager").Promise,i=n.get("PrelibLogger");l("loading plugins",t);for(var a=[],s=0;s<t.plugins.length;s++){var c=u(t.plugins[s]);a.push(c)}return o.all(a).then((function(){return}));function u(t){return l("loading",t.name,"from",t.url),r.load(t.name,t.url).then((function(r){l("loaded",t.name),r(e)})).catch((function(e){l("cannot load",t.name),i.write(e),r.errors.push(e)}))}function l(){for(var t=["[prelib-loader]"],e=0;e<arguments.length;e++)t.push(arguments[e]);i.write.apply(i,t)}}},403:function(t,e,r){var n,o,i=(o=document.getElementById("walkme-native-functions"))?o.contentWindow:((n=document.createElement("iframe")).id="walkme-native-functions",n.style.display="none",n.style.position="absolute",n.style.visibility="hidden",n.style.zIndex="-2147483647",document.body.appendChild(n),n.contentWindow),a=i&&i.Promise,s={};a?(a.Promise=i.Promise,(s=a).on=function(){},s.defer=function(){return wmjQuery.Deferred()}):
/*!
  * @overview RSVP - a tiny implementation of Promises/A+.
  * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors
  * @license   Licensed under MIT license
  *            See https://raw.githubusercontent.com/tildeio/rsvp.js/master/LICENSE
  * @version   3.1.0
  */
s=function(){"use strict";function t(t){return"function"==typeof t}var e=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},n=Date.now||function(){return(new Date).getTime()};function o(){}var i=Object.create||function(t){if(arguments.length>1)throw new Error("Second argument not supported");if("object"!=typeof t)throw new TypeError("Argument must be an object");return o.prototype=t,new o};function a(t,e){for(var r=0,n=t.length;r<n;r++)if(t[r]===e)return r;return-1}function s(t){var e=t._promiseCallbacks;return e||(e=t._promiseCallbacks={}),e}var c={mixin:function(t){return t.on=this.on,t.off=this.off,t.trigger=this.trigger,t._promiseCallbacks=void 0,t},on:function(t,e){if("function"!=typeof e)throw new TypeError("Callback must be a function");var r,n=s(this);(r=n[t])||(r=n[t]=[]),-1===a(r,e)&&r.push(e)},off:function(t,e){var r,n,o=s(this);e?-1!==(n=a(r=o[t],e))&&r.splice(n,1):o[t]=[]},trigger:function(t,e,r){var n;if(n=s(this)[t])for(var o=0;o<n.length;o++)(0,n[o])(e,r)}},u={instrument:!1};function l(t,e){if("onerror"!==t)return 2!==arguments.length?u[t]:void(u[t]=e);u.on("error",e)}c.mixin(u);var f=[];var p=function(t,e,r){1===f.push({name:t,payload:{key:e._guidKey,id:e._id,eventName:t,detail:e._result,childId:r&&r._id,label:e._label,timeStamp:n(),error:u["instrument-with-stack"]?new Error(e._label):null}})&&setTimeout((function(){for(var t,e=0;e<f.length;e++){var r=(t=f[e]).payload;r.guid=r.key+r.id,r.childGuid=r.key+r.childId,r.error&&(r.stack=r.error.stack),u.trigger(t.name,t.payload)}f.length=0}),50)};function d(){}var h=void 0,v=new E;function y(e,r){if(r.constructor===e.constructor)!function(t,e){1===e._state?m(t,e._result):2===e._state?(e._onError=null,_(t,e._result)):b(e,void 0,(function(r){e!==r?g(t,r):m(t,r)}),(function(e){_(t,e)}))}(e,r);else{var n=function(t){try{return t.then}catch(t){return v.error=t,v}}(r);n===v?_(e,v.error):void 0===n?m(e,r):t(n)?function(t,e,r){u.async((function(t){var n=!1,o=function(t,e,r,n){try{t.call(e,r,n)}catch(t){return t}}(r,e,(function(r){n||(n=!0,e!==r?g(t,r):m(t,r))}),(function(e){n||(n=!0,_(t,e))}),t._label);!n&&o&&(n=!0,_(t,o))}),t)}(e,r,n):m(e,r)}}function g(t,e){var r;t===e?m(t,e):"function"==typeof(r=e)||"object"==typeof r&&null!==r?y(t,e):m(t,e)}function w(t){t._onError&&t._onError(t._result),k(t)}function m(t,e){t._state===h&&(t._result=e,t._state=1,0===t._subscribers.length?u.instrument&&p("fulfilled",t):u.async(k,t))}function _(t,e){t._state===h&&(t._state=2,t._result=e,u.async(w,t))}function b(t,e,r,n){var o=t._subscribers,i=o.length;t._onError=null,o[i]=e,o[i+1]=r,o[i+2]=n,0===i&&t._state&&u.async(k,t)}function k(t){var e=t._subscribers,r=t._state;if(u.instrument&&p(1===r?"fulfilled":"rejected",t),0!==e.length){for(var n,o,i=t._result,a=0;a<e.length;a+=3)n=e[a],o=e[a+r],n?x(r,n,o,i):o(i);t._subscribers.length=0}}function E(){this.error=null}var j=new E;function x(e,r,n,o){var i,a,s,c,u=t(n);if(u){if(i=function(t,e){try{return t(e)}catch(t){return j.error=t,j}}(n,o),i===j?(c=!0,a=i.error,i=null):s=!0,r===i)return void _(r,new TypeError("A promises callback cannot return that same promise."))}else i=o,s=!0;r._state!==h||(u&&s?g(r,i):c?_(r,a):1===e?m(r,i):2===e&&_(r,i))}function C(t,e,r){return 1===t?{state:"fulfilled",value:r}:{state:"rejected",reason:r}}function S(t,e,r,n){var o=this;o._instanceConstructor=t,o.promise=new t(d,n),o._abortOnReject=r,o._validateInput(e)?(o._input=e,o.length=e.length,o._remaining=e.length,o._init(),0===o.length?m(o.promise,o._result):(o.length=o.length||0,o._enumerate(),0===o._remaining&&m(o.promise,o._result))):_(o.promise,o._validationError())}var P=S;S.prototype._validateInput=function(t){return e(t)},S.prototype._validationError=function(){return new Error("Array Methods must be provided an Array")},S.prototype._init=function(){this._result=new Array(this.length)},S.prototype._enumerate=function(){for(var t=this,e=t.length,r=t.promise,n=t._input,o=0;r._state===h&&o<e;o++)t._eachEntry(n[o],o)},S.prototype._eachEntry=function(t,e){var r,n=this,o=n._instanceConstructor;"object"==typeof(r=t)&&null!==r?t.constructor===o&&t._state!==h?(t._onError=null,n._settledAt(t._state,e,t._result)):n._willSettleAt(o.resolve(t),e):(n._remaining--,n._result[e]=n._makeResult(1,e,t))},S.prototype._settledAt=function(t,e,r){var n=this,o=n.promise;o._state===h&&(n._remaining--,n._abortOnReject&&2===t?_(o,r):n._result[e]=n._makeResult(t,e,r)),0===n._remaining&&m(o,n._result)},S.prototype._makeResult=function(t,e,r){return r},S.prototype._willSettleAt=function(t,e){var r=this;b(t,void 0,(function(t){r._settledAt(1,e,t)}),(function(t){r._settledAt(2,e,t)}))};var A=function(t,e){return new P(this,t,!0,e).promise};var I=function(t,r){var n=new this(d,r);if(!e(t))return _(n,new TypeError("You must pass an array to race.")),n;var o=t.length;function i(t){g(n,t)}function a(t){_(n,t)}for(var s=0;n._state===h&&s<o;s++)b(this.resolve(t[s]),void 0,i,a);return n};var O=function(t,e){if(t&&"object"==typeof t&&t.constructor===this)return t;var r=new this(d,e);return g(r,t),r};var T=function(t,e){var r=new this(d,e);return _(r,t),r},D="rsvp_"+n()+"-",M=0;function L(e,r){var n=this;n._id=M++,n._label=r,n._state=void 0,n._result=void 0,n._subscribers=[],u.instrument&&p("created",n),d!==e&&(t(e)||function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),n instanceof L||function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}(),function(t,e){var r=!1;try{e((function(e){r||(r=!0,g(t,e))}),(function(e){r||(r=!0,_(t,e))}))}catch(e){_(t,e)}}(n,e))}var R=L;function N(t,e,r){this._superConstructor(t,e,!1,r)}L.cast=O,L.all=A,L.race=I,L.resolve=O,L.reject=T,L.prototype={constructor:L,_guidKey:D,_onError:function(t){var e=this;u.after((function(){e._onError&&u.trigger("error",t,e._label)}))},then:function(t,e,r){var n=this,o=n._state;if(1===o&&!t||2===o&&!e)return u.instrument&&p("chained",n,n),n;n._onError=null;var i=new n.constructor(d,r),a=n._result;if(u.instrument&&p("chained",n,i),o){var s=arguments[o-1];u.async((function(){x(o,i,s,a)}))}else b(n,i,t,e);return i},catch:function(t,e){return this.then(void 0,t,e)},finally:function(t,e){var r=this.constructor;return this.then((function(e){return r.resolve(t()).then((function(){return e}))}),(function(e){return r.resolve(t()).then((function(){throw e}))}),e)}},N.prototype=i(P.prototype),N.prototype._superConstructor=P,N.prototype._makeResult=C,N.prototype._validationError=function(){return new Error("allSettled must be called with an array")};var W=function(t,e){return new N(R,t,e).promise};var B,F=function(t,e){return R.all(t,e)},z=0;var U=function(t,e){rt[z]=t,rt[z+1]=e,2===(z+=2)&&$()},H="undefined"!=typeof window?window:void 0,G=H||{},J=G.MutationObserver||G.WebKitMutationObserver,Q="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),Y="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function K(){return function(){setTimeout(nt,1)}}var $,q,V,X,Z,tt,et,rt=new Array(1e3);function nt(){for(var t=0;t<z;t+=2){(0,rt[t])(rt[t+1]),rt[t]=void 0,rt[t+1]=void 0}z=0}Q?(tt=process.nextTick,et=process.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/),Array.isArray(et)&&"0"===et[1]&&"10"===et[2]&&(tt=setImmediate),$=function(){tt(nt)}):J?(V=0,X=new J(nt),Z=document.createTextNode(""),X.observe(Z,{characterData:!0}),$=function(){Z.data=V=++V%2}):Y?((q=new MessageChannel).port1.onmessage=nt,$=function(){q.port2.postMessage(0)}):$=void 0===H?function(){try{var t=r(Object(function(){var t=new Error("Cannot find module 'vertx'");throw t.code="MODULE_NOT_FOUND",t}()));return B=t.runOnLoop||t.runOnContext,function(){B(nt)}}catch(t){return K()}}():K();var ot=function(t){var e={};return e.promise=new R((function(t,r){e.resolve=t,e.reject=r}),t),e};var it=function(e,r,n){return R.all(e,n).then((function(e){if(!t(r))throw new TypeError("You must pass a function as filter's second argument.");for(var o=e.length,i=new Array(o),a=0;a<o;a++)i[a]=r(e[a]);return R.all(i,n).then((function(t){for(var r=new Array(o),n=0,i=0;i<o;i++)t[i]&&(r[n]=e[i],n++);return r.length=n,r}))}))};function at(t,e,r){this._superConstructor(t,e,!0,r)}var st=at;function ct(t,e,r){this._superConstructor(t,e,!1,r)}at.prototype=i(P.prototype),at.prototype._superConstructor=P,at.prototype._init=function(){this._result={}},at.prototype._validateInput=function(t){return t&&"object"==typeof t},at.prototype._validationError=function(){return new Error("Promise.hash must be called with an object")},at.prototype._enumerate=function(){var t=this,e=t.promise,r=t._input,n=[];for(var o in r)e._state===h&&Object.prototype.hasOwnProperty.call(r,o)&&n.push({position:o,entry:r[o]});var i,a=n.length;t._remaining=a;for(var s=0;e._state===h&&s<a;s++)i=n[s],t._eachEntry(i.entry,i.position)},ct.prototype=i(st.prototype),ct.prototype._superConstructor=P,ct.prototype._makeResult=C,ct.prototype._validationError=function(){return new Error("hashSettled must be called with an object")};var ut=function(t,e){return new ct(R,t,e).promise};var lt=function(t,e){return new st(R,t,e).promise};var ft=function(e,r,n){return R.all(e,n).then((function(e){if(!t(r))throw new TypeError("You must pass a function as map's second argument.");for(var o=e.length,i=new Array(o),a=0;a<o;a++)i[a]=r(e[a]);return R.all(i,n)}))};function pt(){this.value=void 0}var dt=new pt,ht=new pt;function vt(t,e,r){try{t.apply(e,r)}catch(t){return dt.value=t,dt}}function yt(t,e){return{then:function(r,n){return t.call(e,r,n)}}}var gt=function(t,r){var n=function(){for(var n,o=arguments.length,i=new Array(o+1),a=!1,s=0;s<o;++s){if(n=arguments[s],!a){if((a=wt(n))===ht){var c=new R(d);return _(c,ht.value),c}a&&!0!==a&&(n=yt(a,n))}i[s]=n}var u=new R(d);return i[o]=function(t,n){t?_(u,t):void 0===r?g(u,n):!0===r?g(u,function(t){for(var e=t.length,r=new Array(e-1),n=1;n<e;n++)r[n-1]=t[n];return r}(arguments)):e(r)?g(u,function(t,e){for(var r,n={},o=t.length,i=new Array(o),a=0;a<o;a++)i[a]=t[a];for(r=0;r<e.length;r++)n[e[r]]=i[r+1];return n}(arguments,r)):g(u,n)},a?function(t,e,r,n){return R.all(e).then((function(e){var o=vt(r,n,e);return o===dt&&_(t,o.value),t}))}(u,i,t,this):function(t,e,r,n){var o=vt(r,n,e);o===dt&&_(t,o.value);return t}(u,i,t,this)};return n.__proto__=t,n};function wt(t){return!(!t||"object"!=typeof t)&&(t.constructor===R||function(t){try{return t.then}catch(t){return dt.value=t,dt}}(t))}if("object"==typeof self)self;else{if("object"!=typeof r.g)throw new Error("no global: `self` or `global` found");r.g}var mt=function(t,e){return R.race(t,e)};var _t=function(t,e){return R.reject(t,e)};var bt=function(t,e){return R.resolve(t,e)};var kt=function(t){throw setTimeout((function(){throw t})),t};u.async=U,u.after=function(t){setTimeout(t,0)};function Et(){u.on.apply(u,arguments)}if("undefined"!=typeof window&&"object"==typeof window.__PROMISE_INSTRUMENTATION__){var jt=window.__PROMISE_INSTRUMENTATION__;for(var xt in l("instrument",!0),jt)jt.hasOwnProperty(xt)&&Et(xt,jt[xt])}var Ct={race:mt,Promise:R,allSettled:W,hash:lt,hashSettled:ut,denodeify:gt,on:Et,off:function(){u.off.apply(u,arguments)},map:ft,filter:it,resolve:bt,reject:_t,all:F,rethrow:kt,defer:ot,EventTarget:c,configure:l,async:function(t,e){u.async(t,e)}};return Ct}(),e.b=s}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}();var n=r(640),o=r(224),i=r(780),a=r(403).b,s=r(743).Q,c=r(662).gt,u=r(662)._e,l=r(257).H,f=r(551);window._walkmeInternals=window._walkmeInternals||{};var p=new(0,n.default)({Promise:a.Promise,document:document});window._walkmeInternals.wmloader=p;var d,h=new(0,n.ActivationManager)({wmLoader:p});function v(){return d}window._walkmeInternals.plugins=h,o(window._walkmeInternals);var y=window._walkmeInternals.ctx;y.register("PromiseManager").asInstance(a),y.register("Promise").asCtor(a.Promise).asProto(),d=new l(window._walkmeInternals,s,a);var g=wmjQuery({}),w=new c(g,a),m=new u(g);window._walkmeInternals.events={listener:m,trigger:w,_eventsBase:g},d.ctx.register("EventsTrigger").asInstance(w),d.ctx.register("EventsListener").asInstance(m),d.ctx.register("PrelibLogger").asInstance(i);var _,b,k=((b=window.wmSnippet||window.wmPlaySnippet||window.wmPreviewSnippet)&&(_=b.getSettingsFile()),_||(_={}),_);a.resolve().then((function(){return f(__wmPrelibConfig,v,p)})).catch((function(t){i.write("cannot load plugins"),i.write(t)})).then((function(){return i.write("starting plugins"),d.start(k)})).then((function(){i.write("plugins started")})).catch((function(t){i.write("cannot start plugins"),i.write(t)}))}();
})();


"undefined"!=typeof _walkmeInternals&&_walkmeInternals.wmloader&&_walkmeInternals.wmloader.define("wm-plugin-set-walkme-language@1.3.0@prelib",{name:"wm-plugin-set-walkme-language",version:"1.3.0",toolbelt:"1.4.1",packageDate:"2024-02-29T13:33:26.919Z",entry:"prelib"},function(e){var t;return function(){var e={979:function(e,t,a){e.exports=a(179)},361:function(e,t,a){t.__esModule=!0,t.LanguageGetterFactory=void 0;var n=a(395),i=a(725),r=a(559),o=a(945),s=["cookie","var","jquery","localstorage","sessionstorage","function","s3"],u=function(){function e(){}return e.create=function(e){var t=e.method.toLowerCase();if("detect"==t)return new n.Detect(e);if("url"==t)return new i.Url(e);if("html"==t)return new o.Html(e);if(s.indexOf(t)!=-1)return new r.Value(e);throw"ERROR: No chat factory found"},e}();t.LanguageGetterFactory=u},395:function(e,t,a){t.__esModule=!0,t.Detect=void 0;var n=a(250),i=function(){function e(e){this.options=e,this.logger=_walkmeInternals.ctx.get("PrelibLogger")}return e.prototype.get=function(){var e=this.getHTML(),t=this.extractTextFromHTML(e),a=this.guessLanguage(t);return _walkmeInternals.ctx.create("Promise",function(e){return e(a)})},e.prototype.getHTML=function(){var e=this,t="";return wmjQuery(this.options.detect.searchTextSelector).filter(function(e){var t=0===wmjQuery(this).children().length;return t}).not(this.options.detect.excludeSelector).filter(":mt_visible").each(function(a,n){if(t+=e.sanitize(wmjQuery(n).text()),t.length>e.options.detect.maxStringDetectionLength)return!1}),this.log("Search Selector: ".concat(this.options.detect.searchTextSelector)),this.log("Exclude Selector: ".concat(this.options.detect.excludeSelector)),this.log("Captured string: ".concat(t)),t},e.prototype.sanitize=function(e){return e=e.trim().replace(/\s{2,}/g," "),e.length>0&&(e+=" "),e},e.prototype.extractTextFromHTML=function(e){var t=document.createElement("span");return t.innerHTML=e,[t.textContent||t.innerText].toString().replace(/ +/g," ")},e.prototype.guessLanguage=function(e){var t;if(n.guessLanguage.detect(e,function(e){t=e}),void 0===t||"und"===t||"unknown"===t)throw"ERROR: Unable to guess the language";return this.log("Detected Language: ".concat(t)),t},e.prototype.log=function(e){this.logger.write("[ detect method ]: ".concat(e))},e}();t.Detect=i},945:function(e,t){t.__esModule=!0,t.Html=void 0;var a=function(){function e(e){this.options=e}return e.prototype.get=function(){return _walkmeInternals.ctx.create("Promise",function(e,t){!function a(n){n<0&&t("Cant find Language attribute on HTML tag. Aborting.");var i=wmjQuery("html").attr("lang");i?e(i):a(--n)}(40)})},e}();t.Html=a},725:function(e,t){t.__esModule=!0,t.Url=void 0;var a=function(){function e(e){this.options=e}return e.prototype.get=function(){var e=this;return _walkmeInternals.ctx.create("Promise",function(t,a){if(!e.options.key)return a("ERROR: key option must be defined");var n=new RegExp("[?&]".concat(e.options.key,"=([^&#]*)"),"i"),i=n.exec(window.location.href);if(!i)return a("ERROR: Cannot find the variable [ ".concat(e.options.key," ] in the url"));t(i[1])})},e}();t.Url=a},559:function(e,t){t.__esModule=!0,t.Value=void 0;var a=function(){function e(e){this.options=e,this.method=e.method.toLowerCase(),this.retries=e.retries||5,this.retryInterval=e.retryInterval,this.scriptAdded=!1,this.errorMsg=""}return e.prototype.get=function(){var e=this;return _walkmeInternals.ctx.create("Promise",function(t,a){if(!e.options.key)return a("ERROR: Value [ key ] is not defined in the options and is mandatory for the mehtod [ value ]");e.waitForLangAttribute(t,a)})},e.prototype.waitForLangAttribute=function(e,t){var a=this,n=_walkmeInternals.ctx.get("TimerManager").setWalkmeInterval(function(){--a.retries;var i;try{i=a.getValue()}catch(r){clearInterval(n),t(r.message)}i?(clearInterval(n),e(i)):0==a.retries&&(clearInterval(n),t("s3"==a.method?"".concat(a.errorMsg||"Language not detected"," for user: ").concat(a.userGuid||"User detection error"):"ERROR: Couldn't find the variable ".concat(a.options.key," stored using ").concat(a.method)))},this.retryInterval)},e.prototype.getValue=function(){var e=this,t=this.options.Lego&&this.options.Lego.ctx||window._walkmeInternals&&window._walkmeInternals.ctx;switch(this.method){case"var":return this.saveAndCallDetector(function(){return t.get("CommonUtils").getWindowVar(e.options.key)});case"cookie":return this.saveAndCallDetector(function(){return t.get("CookiesManager").getCookie(e.options.key)});case"jquery":return this.saveAndCallDetector(function(){return t.get("JQueryElementFinder").getjQueryElementText(e.options.key)});case"localstorage":return this.saveAndCallDetector(function(){return t.get("LocalStorageService").get().getItem(e.options.key)});case"sessionstorage":return this.saveAndCallDetector(function(){return window.sessionStorage&&window.sessionStorage.getItem&&window.sessionStorage.getItem(e.options.key)});case"function":try{return this.saveAndCallDetector(new Function(this.options.key))}catch(a){throw new Error("in Function, ".concat(a))}case"s3":try{if(this.scriptAdded)return window._walkmeInternals.deepUiLanguage||window._walkmeInternals.languageDetectorFunction&&window._walkmeInternals.languageDetectorFunction(),window._walkmeInternals.deepUiLanguage;if(window._walkmeInternals&&window._walkmeInternals.walkmeBasePath){var n=window._walkmeInternals.walkmeBasePath.split(".com")[0],i=window._walkmeInternals.ctx.get("SettingsFile");if(i&&n){var r=i.getAllUserGuids();if(r&&r.length){this.userGuid=r[0];var o="".concat(n,".com/deepui/language-detector/").concat(this.userGuid,"/languageDetectionScript.js"),s=window._walkmeInternals.ctx.get("ScriptInjector");return s.addScript(o,function(){try{window._walkmeInternals.languageDetectorFunction&&window._walkmeInternals.languageDetectorFunction()}catch(e){}},function(t){e.errorMsg="Error loading script, url: ".concat(t.srcElement.src)}),this.scriptAdded=!0,window._walkmeInternals.deepUiLanguage}}}return""}catch(a){throw new Error("in S3, ".concat(a))}default:return""}},e.prototype.saveAndCallDetector=function(e){return window._walkmeInternals&&(window._walkmeInternals.languageDetectorFunction=function(){window._walkmeInternals.deepUiLanguage=e()}),e()},e}();t.Value=a},384:function(e,t,a){e=a.nmd(e);!function(t){var a={de:"en er  dederie  didiescheincheichdenin te ch  eiungn dnd  beveres  zueitgenund un au inchtit ten daent veand geine mir dhenng nde voe dbermenei mit stterrent d ereren sste see sht desistne aufe aiscon rte re wegesuch fü sobeie enenr sachfürierparür  haas ert an pa sa sp wifortagzu dasreihe hrentesenvor scechetzheilann apd st staeselic ab sigte waitikein engeseitrazen im laartim llen wrderecsetstrteitte nie peheersg dnicvon al pran auserfr etzetüruf ag alsar chsendge igeionls n mngsnisnt ords ssse tüahle bedeem lenn iormprorkeruns dwahwerürk meageattellesthatn bollrafs atsc es fo gr jaabeaucbene negelien ur vre ritsag amagtahrbrade erdheritele n pn vor rbert sicwieübe is übchachie fe meriiedmmenerr astit at stis koarbds gann zr fr wranse t iweiwir br npam besd ddeue ge kefoet eutfenhselten rnpdr brhet wtz  fr ih ke maameangd seilel eraerhh di dkann fn lntsochragrd spdsprtio ar en kaarkass",en:" ththehe ed  to iner ingng  annd  ofandto of  coat on in  a d t hee tiones  rere hat sa st haherthatioor  ''en  whe sentn ts aas foris t t beld e ars  waut ve ll al  mae i fo's an est hi mo se prs tatest tereretednt verd a wise e cectns  only toley r t caatits all nohiss oerscone oearf te wwasonssta'' stin astot h weid th  itce  diaved hcouproad ollry d se m soillctite toreveg tit  ch dehavoulty ulduse alarech me outovewitys chit aithoth ab te wos srest wtine be hncet sy te pelehins inte lile  doaidheyne s w as fr trendsai el ne su't ay houivelecn't yebutd oo ty o ho mebe cale ehadple at bu lad bs hsayt i are fghthilighintnotren is pa shayscomn sr ariny a unn com thi miby d ie de nt o bye rerioldomewheyea grar itymplounoneow r ss ftat ba vobousamtimvotaboantds ialinemanmen or poampcandere llesny ot rectesthoicaildir ndeoseouspresteeraperr oredrie bo lealiarsorerics mstr faessie istlaturi",es:" dede  laos la el es  qu coe las que elue en ent en senteresconest ess d lo prlos y do ón ión unciódelo d poa dacistate adopreto para ea lra al e ese proar ia o e reidadadtrapors p a a paracia pacomno  di inienn lad ante smena con un lasnci trcioierntotivn dn eor s cencernio a sicis e madose ae cempicaivol pn cr eta tere desaez mpro as a ca suion cu juan da eneerona recro tar al anbiee per l cn pompten emistnesntao cso teseral dl mlesntro sorerá s qs ystoa aa raridese qiviliclo n aoneoraperpuer lre renunaía adacasereideminn sndoranrno ac ex go noa tabableeceectl al glidnsionsracriostruerust ha le mi mu ob pe pu soa ialeca ctoe ie uesoferficgobjo ma mplo pobis msa sepstestitadtody s ciandcescó dore meciecoesiintizal elarmienerorcrciriatictor as sice dene re tenderiespialidoinaincmito lomeplirass tsidsuptabuenuesuravo vor sa tiablaliasoastcorcticuedivducensetiimiinileco qoceortralrmarocrod",fr:"es  dede  leentle nt la s d laionon re  pae le d l'e p co prtions  enne quer llesur en atiue  po d'par a et it  qumenonste  ett d redes unie s l supou au à coner  noaite cse té du  du déce e eis n ds a soe re sourresssieur seemeestus surantiqus puneussl'aprotertreendrs  cee at pun  ma ru réousrisrussseansar come mirencentet l av mo teil me onttena pdanpasquis es s inistllenoupré'unaird'air n eropts  daa sas au denmaimisorioutrmesiotteux a dienn antrommortouvs csontesverère il m  sa vea raisavadi n pstiven miainencforitélaroirremrenrroréssiet atur pe tod'uellerrersideineissmesporransitst t rutivaié lési di n' éta casse tin ndeprerats mstetaitchui uroès  es fo tr'adappauxe àettitilitnalopér dra rairors rtatutéà l afancaraartbrechédree fenslemn rn tndrnneonnposs ttiqure tualeandaveclacoue nembinsjoummerierèssemstrt iuesuniuveé dée  ch do eu fa lo ne raarlattec ical al'ol'émmintaormou r urle",it:" dito la  dedi no  core ione d e le delne ti ell la unni i dper peent inonehe ta ziocheo da dna atoe s soi sllaa pli te  al cher  pa siconsta pra c seel ia si e p dae ii pontanoi callazinteon ntio s rii ao aun  anarearie ai eitamenri  ca il no poa santil in a laticiae cro annestglità  que lnta a como cra  le nealiereist ma è io lleme eraicaostprotaruna pida tat miattca mo nonparsti fa i  re suessinintoo lssittoa eamecolei ma o iza  sta aaleancanii miano ponisiotantti loi rociolionaonotra l a reriettlo nzaquestrtertta ba li teasse fenzfornnooloorirestor ci voa ial chie nliapreriauniver spimol al cransensoctic fi moa nce deiggigioitil slitll monolapacsimtituttvol ar fo ha saacce riremanntrratscotrotutva  do gi me sc tu ve via mbercanciti lieritàlliminn pnatndao eo fo uoreoroortstotentivvanartccoci cosdale vi iilainol pn cnitoleomepo riosa  ce es tra bandataderensersgi ialinaittizilanlormil",pl:"ie nieem  ni po prdzi naże rzena łemwie w  żego  byprzowaię  do siowi pa zach egoał sięej wałym aniałeto  i  to tee p je z czybyłpanstakie jado  ch cz wiiała ppow mili enizie ta wało ać dy ak e w a  od stniarzyied ktodzcieczeia ielktóo ptórści sp wyjaktakzy  moałęproskitemłęs tre mjesmy  roedzeliiej rza nalean e sestle o si pki  coadaczne te zentny prerząy s ko o acham e no tolipodzia go kaby iegiernośrozspoychząd mnaczadzbiechomnio nostpraze ła  soa mczaiemić obiył yło mu móa tacjci e bichkanmi mieoścrowzenzyd al rea wdenedyił ko o wracśmy ma ra sz tye jiskji ka m sno o zrezwa ów łowść  obecheczezyi wja konmówne ni nownympolpotyde dl sya sakialidlaiczku oczst strszytrzwiay pza  wtchcesziecim la o msa waćy nzaczec gda zardco dare rienm nm wmiamożrawrdztantedtegwiłwtey zznazłoa rawibarcjicządoweż gdyiekje o dtałwalwszzedówięsa ba lu woalnarnba dzoe chodigiligm pmyśo conirelskustey wystz w",pt:"de  deos as que coão o d quue  a do ent sea ds de aes  prra da  es pato  o em cono p doestnteção da rema par tearaida e adeis  um poa aa pdadno te  noaçãproal come ds a asa cer mens eaisntoresa sadoists pteme ce sia o so ao ce pstata traura di pear e eserumamosse  cao e naa edesontpor in maecto qrias csteverciadosicastr ao emdase titoizapretos nãadanãoesseveor rans ns ttur ac faa renserina sso si é braespmo nosro um a nao icolizmino nonspritenticões tra magae niliimem ancinhantaspetivam anoarcasscere oeceemoga o mragso são au os saalica emaempiciidoinhissl dla licm cmaioncpecrams q ci en foa oamecarco dereirho io om orar asenter br exa uculdeve uha mprnceocaoverios osa semtesunivenzaççõe ad al an mi mo ve à a ia qalaamoblicencolcosctoe me vedegásiasitaivandoo torer dralreas fsidtrovelvidás  ap ar ce ou pú so via factarrbilcame fe iel forlemlidlo m dmarndeo oomoortperpúbr ureiremrosrressi",ru:" на прто  нели  поно  в на ть не  и  коом про тоих  каатьото заие ователтор деой сти отах ми стр бе во раая ватей ет же ичеия ов сто обверго и ви пи сии исто восттра теелиерекотльнникнтио срорствчес бо ве да ин но с  со сп ст чталиамивиддете нельескестзали ниваконогоодножнольорировскося терчто мо са этантвсеерреслидеинаиноироитека ко колкомла нияо толоранредсь тивтичых  ви вс го ма слакоаниастбезделе де пем жнои дикаказкакки носо нопаприрроскити товые  вы до ме ни од ро св чиа наетазаатебесв пва е ве ме сез ениза знаиникамкахктоловмерможналницны нымораороот порравресрисросскат нтомчитшко бы о  тр уж чу шка ба ва рабиалаалоальаннатибинвесвново вшидалдатдное зегоелееннентетеи оилиисьит ициковленлькменмы нетни нныногнойномо побновеовнорыперпо прапреразропры се слисовтретсяуроцелчноь вькоьноэтоют я н ан ес же из кт ми мы пе се цеа ма па тавшажеак ал алеанеачиаютбнаболбы в ив сванградаждене к"};t._languageData=(e.exports===t&&e||{}).exports=a}(this)},250:function(e,t,a){!function(t,n){var i=function(){var i=t._languageData||{};e.exports===t&&(i=a(384)||{});var r=4096,o=20,s=300,u={ab:"Abkhazian",af:"Afrikaans",ar:"Arabic",az:"Azeri",be:"Belarusian",bg:"Bulgarian",bn:"Bengali",bo:"Tibetan",br:"Breton",ca:"Catalan",ceb:"Cebuano",cs:"Czech",cy:"Welsh",da:"Danish",de:"German",el:"Greek",en:"English",eo:"Esperanto",es:"Spanish",et:"Estonian",eu:"Basque",fa:"Farsi",fi:"Finnish",fo:"Faroese",fr:"French",fy:"Frisian",gd:"Scots Gaelic",gl:"Galician",gu:"Gujarati",ha:"Hausa",haw:"Hawaiian",he:"Hebrew",hi:"Hindi",hmn:"Pahawh Hmong",hr:"Croatian",hu:"Hungarian",hy:"Armenian",id:"Indonesian",is:"Icelandic",it:"Italian",ja:"Japanese",ka:"Georgian",kk:"Kazakh",km:"Cambodian",ko:"Korean",ku:"Kurdish",ky:"Kyrgyz",la:"Latin",lt:"Lithuanian",lv:"Latvian",mg:"Malagasy",mk:"Macedonian",ml:"Malayalam",mn:"Mongolian",mr:"Marathi",ms:"Malay",nd:"Ndebele",ne:"Nepali",nl:"Dutch",nn:"Nynorsk",no:"Norwegian",nso:"Sepedi",pa:"Punjabi",pl:"Polish",ps:"Pashto",pt:"Portuguese","pt-PT":"Portuguese (Portugal)","pt-BR":"Portuguese (Brazil)",ro:"Romanian",ru:"Russian",sa:"Sanskrit",bs:"Serbo-Croatian",sk:"Slovak",sl:"Slovene",so:"Somali",sq:"Albanian",sr:"Serbian",sv:"Swedish",sw:"Swahili",ta:"Tamil",te:"Telugu",th:"Thai",tl:"Tagalog",tlh:"Klingon",tn:"Setswana",tr:"Turkish",ts:"Tsonga",tw:"Twi",uk:"Ukrainian",ur:"Urdu",uz:"Uzbek",ve:"Venda",vi:"Vietnamese",xh:"Xhosa",zh:"Chinese","zh-TW":"Traditional Chinese (Taiwan)",zu:"Zulu"},l={ab:12026,af:40,ar:26020,az:26030,be:11890,bg:26050,bn:26040,bo:26601,br:1361,ca:3,ceb:26060,cs:26080,cy:26560,da:26090,de:26160,el:26165,en:26110,eo:11933,es:26460,et:26120,eu:1232,fa:26130,fi:26140,fo:11817,fr:26150,fy:1353,gd:65555,gl:1252,gu:26599,ha:26170,haw:26180,he:26592,hi:26190,hr:26070,hu:26200,hy:26597,id:26220,is:26210,it:26230,ja:26235,ka:26600,kk:26240,km:1222,ko:26255,ku:11815,ky:26260,la:26280,lt:26300,lv:26290,mg:1362,mk:26310,ml:26598,mn:26320,mr:1201,ms:1147,ne:26330,nl:26100,nn:172,no:26340,pa:65550,pl:26380,ps:26350,pt:26390,ro:26400,ru:26410,sa:1500,bs:1399,sk:26430,sl:26440,so:26450,sq:26010,sr:26420,sv:26480,sw:26470,ta:26595,te:26596,th:26594,tl:26490,tlh:26250,tn:65578,tr:26500,tw:1499,uk:26520,ur:26530,uz:26540,vi:26550,zh:26065,"zh-TW":22},c=[["Armenian","hy"],["Hebrew","he"],["Bengali","bn"],["Gurmukhi","pa"],["Greek","el"],["Gujarati","gu"],["Oriya","or"],["Tamil","ta"],["Telugu","te"],["Kannada","kn"],["Malayalam","ml"],["Sinhala","si"],["Thai","th"],["Lao","lo"],["Tibetan","bo"],["Burmese","my"],["Georgian","ka"],["Mongolian","mn"],["Khmer","km"],["Pahawh Hmong","hmn"]],g="unknown",d=["en","ceb","ha","so","tlh","id","haw","la","sw","eu","nr","nso","zu","xh","ss","st","tn","ts"],p=["cs","af","pl","hr","ro","sk","sl","tr","hu","az","et","sq","ca","es","fr","de","nl","it","da","is","no","sv","fi","lv","pt","ve","lt","tl","cy","vi"],m=d.concat(p),h=["ru","uk","kk","uz","mn","sr","mk","bg","ky"],f=["ar","fa","ps","ur"],F=["hi","ne"],w=["pt-BR","pt-PT"],v={"Basic Latin":/[\u0000-\u007F]/g,"Latin-1 Supplement":/[\u0080-\u00FF]/g,"Latin Extended-A":/[\u0100-\u017F]/g,"Latin Extended-B":/[\u0180-\u024F]/g,"IPA Extensions":/[\u0250-\u02AF]/g,"Spacing Modifier Letters":/[\u02B0-\u02FF]/g,"Combining Diacritical Marks":/[\u0300-\u036F]/g,"Greek and Coptic":/[\u0370-\u03FF]/g,Cyrillic:/[\u0400-\u04FF]/g,"Cyrillic Supplement":/[\u0500-\u052F]/g,Armenian:/[\u0530-\u058F]/g,Hebrew:/[\u0590-\u05FF]/g,Arabic:/[\u0600-\u06FF]/g,Syriac:/[\u0700-\u074F]/g,"Arabic Supplement":/[\u0750-\u077F]/g,Thaana:/[\u0780-\u07BF]/g,NKo:/[\u07C0-\u07FF]/g,Devanagari:/[\u0900-\u097F]/g,Bengali:/[\u0980-\u09FF]/g,Gurmukhi:/[\u0A00-\u0A7F]/g,Gujarati:/[\u0A80-\u0AFF]/g,Oriya:/[\u0B00-\u0B7F]/g,Tamil:/[\u0B80-\u0BFF]/g,Telugu:/[\u0C00-\u0C7F]/g,Kannada:/[\u0C80-\u0CFF]/g,Malayalam:/[\u0D00-\u0D7F]/g,Sinhala:/[\u0D80-\u0DFF]/g,Thai:/[\u0E00-\u0E7F]/g,Lao:/[\u0E80-\u0EFF]/g,Tibetan:/[\u0F00-\u0FFF]/g,Burmese:/[\u1000-\u109F]/g,Georgian:/[\u10A0-\u10FF]/g,"Hangul Jamo":/[\u1100-\u11FF]/g,Ethiopic:/[\u1200-\u137F]/g,"Ethiopic Supplement":/[\u1380-\u139F]/g,Cherokee:/[\u13A0-\u13FF]/g,"Unified Canadian Aboriginal Syllabics":/[\u1400-\u167F]/g,Ogham:/[\u1680-\u169F]/g,Runic:/[\u16A0-\u16FF]/g,"Pahawh Hmong":/[\u16B0-\u16B8]/g,Tagalog:/[\u1700-\u171F]/g,Hanunoo:/[\u1720-\u173F]/g,Buhid:/[\u1740-\u175F]/g,Tagbanwa:/[\u1760-\u177F]/g,Khmer:/[\u1780-\u17FF]/g,Mongolian:/[\u1800-\u18AF]/g,Limbu:/[\u1900-\u194F]/g,"Tai Le":/[\u1950-\u197F]/g,"New Tai Lue":/[\u1980-\u19DF]/g,"Khmer Symbols":/[\u19E0-\u19FF]/g,Buginese:/[\u1A00-\u1A1F]/g,Balinese:/[\u1B00-\u1B7F]/g,"Phonetic Extensions":/[\u1D00-\u1D7F]/g,"Phonetic Extensions Supplement":/[\u1D80-\u1DBF]/g,"Combining Diacritical Marks Supplement":/[\u1DC0-\u1DFF]/g,"Latin Extended Additional":/[\u1E00-\u1EFF]/g,"Greek Extended":/[\u1F00-\u1FFF]/g,"General Punctuation":/[\u2000-\u206F]/g,"Superscripts and Subscripts":/[\u2070-\u209F]/g,"Currency Symbols":/[\u20A0-\u20CF]/g,"Combining Diacritical Marks for Symbols":/[\u20D0-\u20FF]/g,"Letterlike Symbols":/[\u2100-\u214F]/g,"Number Forms":/[\u2150-\u218F]/g,Arrows:/[\u2190-\u21FF]/g,"Mathematical Operators":/[\u2200-\u22FF]/g,"Miscellaneous Technical":/[\u2300-\u23FF]/g,"Control Pictures":/[\u2400-\u243F]/g,"Optical Character Recognition":/[\u2440-\u245F]/g,"Enclosed Alphanumerics":/[\u2460-\u24FF]/g,"Box Drawing":/[\u2500-\u257F]/g,"Block Elements":/[\u2580-\u259F]/g,"Geometric Shapes":/[\u25A0-\u25FF]/g,"Miscellaneous Symbols":/[\u2600-\u26FF]/g,Dingbats:/[\u2700-\u27BF]/g,"Miscellaneous Mathematical Symbols-A":/[\u27C0-\u27EF]/g,"Supplemental Arrows-A":/[\u27F0-\u27FF]/g,"Braille Patterns":/[\u2800-\u28FF]/g,"Supplemental Arrows-B":/[\u2900-\u297F]/g,"Miscellaneous Mathematical Symbols-B":/[\u2980-\u29FF]/g,"Supplemental Mathematical Operators":/[\u2A00-\u2AFF]/g,"Miscellaneous Symbols and Arrows":/[\u2B00-\u2BFF]/g,Glagolitic:/[\u2C00-\u2C5F]/g,"Latin Extended-C":/[\u2C60-\u2C7F]/g,Coptic:/[\u2C80-\u2CFF]/g,"Georgian Supplement":/[\u2D00-\u2D2F]/g,Tifinagh:/[\u2D30-\u2D7F]/g,"Ethiopic Extended":/[\u2D80-\u2DDF]/g,"Supplemental Punctuation":/[\u2E00-\u2E7F]/g,"CJK Radicals Supplement":/[\u2E80-\u2EFF]/g,"KangXi Radicals":/[\u2F00-\u2FDF]/g,"Ideographic Description Characters":/[\u2FF0-\u2FFF]/g,"CJK Symbols and Punctuation":/[\u3000-\u303F]/g,Hiragana:/[\u3040-\u309F]/g,Katakana:/[\u30A0-\u30FF]/g,Bopomofo:/[\u3100-\u312F]/g,"Hangul Compatibility Jamo":/[\u3130-\u318F]/g,Kanbun:/[\u3190-\u319F]/g,"Bopomofo Extended":/[\u31A0-\u31BF]/g,"CJK Strokes":/[\u31C0-\u31EF]/g,"Katakana Phonetic Extensions":/[\u31F0-\u31FF]/g,"Enclosed CJK Letters and Months":/[\u3200-\u32FF]/g,"CJK Compatibility":/[\u3300-\u33FF]/g,"CJK Unified Ideographs Extension A":/[\u3400-\u4DBF]/g,"Yijing Hexagram Symbols":/[\u4DC0-\u4DFF]/g,"CJK Unified Ideographs":/[\u4E00-\u9FFF]/g,"Yi Syllables":/[\uA000-\uA48F]/g,"Yi Radicals":/[\uA490-\uA4CF]/g,"Modifier Tone Letters":/[\uA700-\uA71F]/g,"Latin Extended-D":/[\uA720-\uA7FF]/g,"Syloti Nagri":/[\uA800-\uA82F]/g,"Phags-pa":/[\uA840-\uA87F]/g,"Hangul Syllables":/[\uAC00-\uD7AF]/g,"High Surrogates":/[\uD800-\uDB7F]/g,"High Private Use Surrogates":/[\uDB80-\uDBFF]/g,"Low Surrogates":/[\uDC00-\uDFFF]/g,"Private Use Area":/[\uE000-\uF8FF]/g,"CJK Compatibility Ideographs":/[\uF900-\uFAFF]/g,"Alphabetic Presentation Forms":/[\uFB00-\uFB4F]/g,"Arabic Presentation Forms-A":/[\uFB50-\uFDFF]/g,"Variation Selectors":/[\uFE00-\uFE0F]/g,"Vertical Forms":/[\uFE10-\uFE1F]/g,"Combining Half Marks":/[\uFE20-\uFE2F]/g,"CJK Compatibility Forms":/[\uFE30-\uFE4F]/g,"Small Form Variants":/[\uFE50-\uFE6F]/g,"Arabic Presentation Forms-B":/[\uFE70-\uFEFF]/g,"Halfwidth and Fullwidth Forms":/[\uFF00-\uFFEF]/g,Specials:/[\uFFF0-\uFFFF]/g};function y(e){var t={};for(var a in v){var n=e.match(v[a]),i=(n?n.length:0)/e.length;t[a]=i}return t}function k(e,t){var a=y(e);if(a["Hangul Syllables"]+a["Hangul Jamo"]+a["Hangul Compatibility Jamo"]>=.4)return void t.apply(n,["ko"]);if(a["Greek and Coptic"]>=.4)return void t.apply(n,["el"]);if(a.Hiragana+a.Katakana+a["Katakana Phonetic Extensions"]>=.2)return void t.apply(n,["ja"]);if(a["CJK Unified Ideographs"]+a.Bopomofo+a["Bopomofo Extended"]+a["KangXi Radicals"]>=.4)return void t.apply(n,["zh"]);if(a.Cyrillic>=.4)return void b(e,h,t);if(a.Arabic+a["Arabic Presentation Forms-A"]+a["Arabic Presentation Forms-B"]>=.4)return void b(e,f,t);if(a.Devanagari>=.4)return void b(e,F,t);for(var i=0,r=c.length;i<r;i++)if(a[c[i][0]]>=.4)return void t.apply(n,[c[i][1]]);if(a["Latin-1 Supplement"]+a["Latin Extended-A"]+a["IPA Extensions"]>=.4)return void b(e,p,function(a){"pt"==a?b(e,w,t):t.apply(n,[a])});if(a["Basic Latin"]>=.15)return void b(e,m,t);t.apply(n,[g])}function b(e,t,a){if(e.length<o)return void a.apply(n,[g]);for(var i={},r=L(e),s=0,u=t.length;s<u;s++){var l=t[s].toLowerCase(),c=E(l)||null;if(!c)continue;i[l]=z(r,c)}var d=[];for(var p in i)d.push([p,i[p]]);if(0==d.length)return void a.apply(n,[g]);var m=d.sort(function(e,t){return e[1]-t[1]});a.apply(n,[m[0][0]])}function L(e){for(var t={},a=[],e=e.toLowerCase(),n=e.split(""),i=0,r=n.length-2;i<r;i++){var o=n[i]+n[i+1]+n[i+2]+"";t[o]?t[o]+=1:t[o]=1}for(var i in t)a[a.length]=[i,t[i]];return a.sort(function(e,t){return t[1]-e[1]})}var C={};function E(e){if(C[e])return C[e];var t=i[e];if(!t)return{};for(var a=t.match(/([\s\S]{1,3})/g),n={},r=0,o=a.length;r<o;r++)n[a[r]]=r;return C[e]=n,n}function z(e,t){for(var a=0,n=0,i=e.length;n<i;n++)a+=t[e[n][0]]?Math.abs(e[n][1]-t[e[n][0]]):s;return a}return{detect:function(e,t){if(!e)return void t.apply(n,[g]);e=e.substr(0,r).replace(/[\u0021-\u0040]/g,""),k(e,t)},info:function(e,t){this.detect(e,function(e){if(e===g)return void t.apply(n,[[g,g,g]]);t.apply(n,[[e,l[e],u[e]]])})},code:function(e,t){this.detect(e,function(e){if(e===g)return void t.apply(n,[-1]);t.apply(n,[l[e]])})},name:function(e,t){this.detect(e,function(e){if(e===g)return void t.apply(n,[g]);t.apply(n,[u[e]])})}}};t.guessLanguage=(t.module||{}).exports=new i}(this)},351:function(e){var t,a=function(){function e(e){this.DEFAULT_EVENT="DataLoadedEvent",this._ctx=e,this._promiseManager=this._ctx.get("PromiseManager"),this._eventsListener=this._ctx.get("EventsListener"),this._eventsTrigger=this._ctx.get("EventsTrigger"),this._logger=this._ctx.get("PrelibLogger"),this._eventListeners={}}return e.prototype.registerFunction=function(e,t){var a,n;"string"==typeof e?(a=e.toString(),n=t):(a=this.DEFAULT_EVENT,n=e),this.addEventListener(a),this._eventListeners[a].push(n)},e.prototype.registerEventListener=function(e){"string"!=typeof e&&(e=this.DEFAULT_EVENT),this.addEventListener(e)},e.prototype.getSiteConfig=function(){this._siteConfig||(this._siteConfig=this._ctx.get("SiteConfigManager").get())},e.prototype.generatePromise=function(e){for(var t=[],a=this._eventListeners[e],n=0;n<a.length;n++){var i=a[n](this._siteConfig);i&&t.push(i)}return this._promiseManager.all(t)},e.prototype.addEventListener=function(e){var t=this;this._eventListeners[e]||(this._eventListeners[e]=[],this._eventsListener.on(e,function(){return t.getSiteConfig(),t.generatePromise(e)}))},e}();e.exports=function(e){return t?t:t=new a(e)}},179:function(e,t,a){!function(t,a){"object"==typeof e.exports?e.exports=a:t.setWalkmeLanguagePlugin=a}(this,function(e){var n=e();n.ctx,n.di;Object.defineProperty(t,"__esModule",{value:!0});var i=a(361),r=a(351)(n.ctx),o=function(){function e(){this.defaultOptions={method:"detect","default":"en",retryInterval:500,retries:10,detect:{searchTextSelector:"body *:not(script):not(style)",excludeSelector:"[style*=font] *",excludeWords:"",maxStringDetectionLength:500},ignoreCountryCode:!1},this._logger=n.ctx.get("PrelibLogger")}return e.prototype.run=function(){var e,t=this,a=_walkmeInternals.plugins&&_walkmeInternals.plugins.list().filter(function(e){var t=e.name.match(/^wm-plugin-(sf-vars||wait-for-end-user)@(.*)@prelib$/);return!!t});a&&a.length&&a.length>0&&(e=void 0!==a.find(function(e){return e.name.indexOf("sf-vars")>-1})?"sfVarsLoaded":"waitForEndUserVarEnd");var i=e?e:"WalkMeConfigFileLoaded";r.registerFunction(i,function(){if(!n.ctx.get("CommonUtils").getJsonSettings().setWalkMeLanguage)return;if(t._libDestroyer=n.ctx.get("LibDestroyer"),t.setOptions(),t.isBlacklistedUrl())return void t.log("Url match in Blacklist regex. Finishing.");return t.updateLanguage(t.options)}),n.ctx.get("EventsListener").on("changeLanguageApiCalled",function(e,t){this.updateWalkMeLanguage(t.language)})},e.prototype.updateLanguage=function(e){var t=this;return i.LanguageGetterFactory.create(e).get().then(function(e){t.updateWalkMeLanguage(e)},function(e){t.updateWalkMeLanguage(t.options["default"]),t.log("set default language (".concat(t.options["default"],"), because: ").concat(e))})["catch"](function(e){return t.log("Exception while calculating language: "+e.message)})},e.prototype.setOptions=function(){var e=n.ctx.get("CommonUtils").getJsonSettings().setWalkMeLanguage;return this.options=wmjQuery.extend({},this.defaultOptions,e),this.options.Lego=n,""==this.options["default"]&&this._libDestroyer.removeWalkMe("[ setWalkMeLanguage ] ERROR: default option is not defined"),this.options},e.prototype.updateWalkMeLanguage=function(e){var t=this;e=this.checkCDSetWMLaung(e);try{if(this.log("updateWalkMeLanguage was called with ".concat(e)),!e)return void this.log("no lang, abort update language");var a=this.sanitizeLanguage(e);window.walkme_get_language=function(){return t.log("Lanaguage [".concat(a,"] was selected by SetWalkMePlugin")),a}}catch(n){this.log(n)}},e.prototype.sanitizeLanguage=function(e){if(!isNaN(e))return e.toString();return e.replace(/_/g,"-")},e.prototype.checkWalkMeDefaultLanguage=function(e){return this.options["default"]==e?"":e},e.prototype.isBlacklistedUrl=function(){if(!this.options.blacklist)return!1;var e=!1,t=[].concat(this.options.blacklist);return t.forEach(function(t){new RegExp(t).test(window.location.href)&&(e=!0)}),e},e.prototype.checkCDSetWMLaung=function(e){var t=n.ctx.get("FeaturesManager").isFeatureEnabled("cdSetWalkMeLanguage");if(t){var a=n.ctx.get("ClientStorageManager"),i=a.getData("wm-top-lang");if(i&&i.domain===window.location.hostname&&i.topLang!==e||!i)a.saveData("wm-top-lang",{domain:window.location.hostname,topLang:e},6e3),this.log("updateWalkMeLanguage top lang key was set with ".concat(e," from ").concat(window.location.hostname,"}"));else if(i&&i.domain!==window.location.hostname)return this.log("updateWalkMeLanguage from key with ".concat(i.topLang)),i.topLang}return e},e.prototype.log=function(e){this._logger.write("[ setWalkMeLanguage ] ".concat(e))},e}();n.plugin(new o)})}},a={};function n(t){var i=a[t];if(void 0!==i)return i.exports;var r=a[t]={id:t,loaded:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}!function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}();var i=n(979);t=i}(),t});

/* WalkMe Module */ typeof _walkmeInternals !== 'undefined' && _walkmeInternals.wmloader && _walkmeInternals.wmloader.define('wm-plugin-user-behavior@5.0.80@prelib', {"name":"wm-plugin-user-behavior","version":"5.0.80","toolbelt":"2.0.2","packageDate":"2025-04-29T12:31:00.595Z","entry":"prelib"}, function (__wmplugin__) {  
var wmbundle;
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 398:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/

var define = false; /* Disable AMD for misbehaving libraries */

module.exports = __webpack_require__(169);



/***/ }),

/***/ 758:
/***/ (function(__unused_webpack_module, exports) {

var __webpack_unused_export__;
/*** IMPORTS FROM imports-loader ***/

var define = false; /* Disable AMD for misbehaving libraries */

__webpack_unused_export__ = true;
var XpathEscaper;
(function (XpathEscaper) {
    var xpathReservedCharacters = /([&=\.\]\[\/\#])/g;
    var xpathEscapedCharacters = /\\([&=\.\]\[\/\#\\/])/g;
    function escape(value) {
        return value.replace(xpathReservedCharacters, "\\$1");
    }
    XpathEscaper.escape = escape;
    function unescape(value) {
        return value.replace(xpathEscapedCharacters, "$1");
    }
    XpathEscaper.unescape = unescape;
})(XpathEscaper = exports.J || (exports.J = {}));



/***/ }),

/***/ 750:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/

var define = false; /* Disable AMD for misbehaving libraries */

var __extends = function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var AbraDi = /** @class */ (function () {
    function AbraDi() {
    }
    AbraDi.registerClass = function (name, ctor, dependencies) {
        AbraDi.classRegistrations.push({
            name: name,
            ctor: ctor,
            dependencies: dependencies
        });
    };
    AbraDi.getCtx = function () {
        if (AbraDi.ctx) {
            return AbraDi.ctx;
        }
        throw new Error('ctx is not set');
    };
    AbraDi.load = function (ctx) {
        AbraDi.ctx = ctx;
        AbraDi.loadMockDependencies(ctx);
        AbraDi.loadModules(ctx);
        for (var _i = 0, _a = AbraDi.classRegistrations; _i < _a.length; _i++) {
            var registration = _a[_i];
            var entry = ctx.register(registration.name).asCtor(registration.ctor);
            if (registration.dependencies) {
                entry.dependencies(registration.dependencies);
            }
        }
        AbraDi.classRegistrations = [];
    };
    AbraDi.loadMockDependencies = function (ctx) {
        ctx.register('Abra:Walkme').asInstance(window['_walkMe']); //remove once `_walkme` is registered to the ctx
    };
    AbraDi.loadModules = function (ctx) {
        ctx.register('Abra:EventObfuscator').asCtor((__webpack_require__(670).Encoder)).dependencies('Abra:JSON');
        ctx.register('Abra:QueryGenerator')
            .asFunction(function (jQuery) {
            var jqueryProxy = __webpack_require__(807)({});
            var generator = __webpack_require__(211)(jQuery, jqueryProxy);
            return {
                generate: function (element) { return generator.generate(jQuery(element)); }
            };
        })
            .dependencies('wmjQuery');
        ctx.register('Abra:XpathEscaper').asInstance((__webpack_require__(758)/* .XpathEscaper */ .J));
    };
    AbraDi.classRegistrations = [];
    return AbraDi;
}());
var CaptureElementApiLoader = /** @class */ (function () {
    function CaptureElementApiLoader(jQuery, xPathGenerator, elementDescriptionGenerator, meaningfulElementGetter, commonEventAttributesProvider, privacyUtils) {
        this.jQuery = jQuery;
        this.xPathGenerator = xPathGenerator;
        this.elementDescriptionGenerator = elementDescriptionGenerator;
        this.meaningfulElementGetter = meaningfulElementGetter;
        this.commonEventAttributesProvider = commonEventAttributesProvider;
        this.privacyUtils = privacyUtils;
    }
    CaptureElementApiLoader.prototype.getLocation = function (element) {
        var attributes = this.commonEventAttributesProvider.get();
        return attributes && attributes.ctx && attributes.ctx.location;
    };
    CaptureElementApiLoader.prototype.getElementAttributes = function (element) {
        var removeTextValues = this.privacyUtils.shouldCensorText(null, element);
        return this.xPathGenerator.getAttributes(this.jQuery(element), removeTextValues);
    };
    CaptureElementApiLoader.prototype.getElementId = function (element) {
        return this.xPathGenerator.getId(this.jQuery(element));
    };
    CaptureElementApiLoader.prototype.getElementClasses = function (element) {
        return this.xPathGenerator.getClasses(this.jQuery(element));
    };
    CaptureElementApiLoader.prototype.getElementText = function (element) {
        if (!this.privacyUtils.shouldCensorText(null, element)) {
            var meaningfulElement = this.meaningfulElementGetter.get(element);
            return this.elementDescriptionGenerator.getText(meaningfulElement ? meaningfulElement.element : element).text;
        }
    };
    CaptureElementApiLoader.prototype.load = function () {
        AbraMain.AbraObject = this.jQuery.extend(AbraMain.AbraObject, {
            getLocation: this.getLocation.bind(this),
            getElementAttributes: this.getElementAttributes.bind(this),
            getElementId: this.getElementId.bind(this),
            getElementClasses: this.getElementClasses.bind(this),
            getElementText: this.getElementText.bind(this)
        });
    };
    return CaptureElementApiLoader;
}());
AbraDi.registerClass('Abra:CaptureElementApiLoader', CaptureElementApiLoader, 'wmjQuery, Abra:XPathGenerator, Abra:ElementDescriptionGenerator, Abra:MeaningfulElementGetter, CommonEventAttributesProvider, Abra:PrivacyUtils');
var CollectionIndicator = /** @class */ (function () {
    function CollectionIndicator(logger, eventsTrigger, timingUtils, dataCollectionSettings) {
        var _this = this;
        this.logger = logger;
        this.eventsTrigger = eventsTrigger;
        this.timingUtils = timingUtils;
        this.lastNotification = null;
        this.cachedResult = null; // kept for 1 event loop
        this.collectByDefault = !this.isManualMode(dataCollectionSettings);
        AbraMain.AbraObject.isCollecting = function () { return _this.shouldCollect(); };
        this.cleanCachedResultOnNextEventLoop = this.timingUtils.createOnNextEventLoopFunc(function () {
            if (_this) {
                _this.cachedResult = null;
            }
        });
    }
    CollectionIndicator.prototype.shouldCollect = function () {
        if (this.cachedResult !== null) {
            return this.cachedResult;
        }
        try {
            this.cachedResult = this.querySite();
            this.cachedResult !== null && this.cleanCachedResultOnNextEventLoop();
        }
        catch (error) {
            this.cachedResult = null;
            this.logger.error('Error on ShouldCollectUserData', error);
        }
        var result = this.cachedResult !== null ? this.cachedResult : this.collectByDefault;
        this.notifyChange(result);
        return result;
    };
    CollectionIndicator.prototype.querySite = function () {
        var siteVariable = window.isWalkmeUserBehaviorDataCollectionEnabled;
        // Underscore.js isFunction implementation
        if (siteVariable && siteVariable.constructor && siteVariable.call && siteVariable.apply) {
            var result = siteVariable();
            if (result === true || result === false) {
                return result;
            }
            else {
                throw new Error('return value expected to be boolean');
            }
        }
        return null;
    };
    CollectionIndicator.prototype.isManualMode = function (dataCollectionSettings) {
        var settings = dataCollectionSettings.get();
        return !!(settings && settings.loading && settings.loading.mode === 'manual');
    };
    CollectionIndicator.prototype.notifyChange = function (shouldCollect) {
        if (this.lastNotification !== shouldCollect) {
            this.lastNotification = shouldCollect;
            this.eventsTrigger.async('UBT:CollectionStatusChanged', { isCollecting: shouldCollect });
        }
    };
    return CollectionIndicator;
}());
AbraDi.registerClass('Abra:CollectionIndicator', CollectionIndicator, 'Abra:Logger, EventsTrigger, Abra:TimingUtils, Abra:DataCollectionSettingsWrapper');
/**
 * Main entry point for Abra
 */
var AbraMain;
(function (AbraMain) {
    AbraMain.App = {
        name: 'abra', //do not change, EC filters by this field
        version: '5.0.80',
        rev: 'ad25a9f'
    };
    AbraMain.WalkmeInternals = window['_walkmeInternals'];
    AbraMain.AbraObject = { version: AbraMain.App.version, rev: AbraMain.App.rev };
    function setState(state) {
        AbraMain.WalkmeInternals.abraState = state;
    }
    AbraMain.setState = setState;
    function setErrorInfo(info) {
        setState('errored');
        AbraMain.AbraObject['errorInfo'] = info;
    }
    AbraMain.setErrorInfo = setErrorInfo;
    function start(ctx) {
        try {
            var eventsListener = ctx.get('EventsListener');
            var loadInsightsConfigOnce_1 = function () {
                if (!ctx.has('Abra:InsightsConfigurationGetter') && ctx.has('WmAjax') && ctx.has('SettingsFile') && ctx.has('PromiseManager') && ctx.has('TimerManager') && ctx.has('CommonUtils')) {
                    ctx.register('Abra:InsightsConfigurationGetter').asCtor(InsightsConfigurationGetter).dependencies('WmAjax, SettingsFile, PromiseManager, TimerManager, CommonUtils');
                    ctx.get('Abra:InsightsConfigurationGetter').get(); // fires ajax call
                }
            };
            eventsListener.once('DICreated', loadInsightsConfigOnce_1);
            var startCallback = FunctionUtils.allowOnce(function () {
                loadInsightsConfigOnce_1();
                startUbt(ctx);
            });
            eventsListener.once('wm.pagescript.envIdInjected', startCallback); // api only, used to capture elements via FE
            eventsListener.once('BeforeWalkmeReady', startCallback);
            ReferrerCollectionEnablement.enable(ctx);
            createPageLoadSync(ctx);
        }
        catch (error) {
            setErrorInfo({ error: error });
        }
        // return null on purpose, we don't want the Lego framework to wait for this loading process.
        return null;
    }
    AbraMain.start = start;
    function createPageLoadSync(ctx) {
        var pageLoad = {
            initializationData: undefined
        };
        ctx.get('EventsListener').once('PageVisitIdUpdated', function (event, pageInfo) {
            pageLoad.initializationData = pageInfo;
        });
        ctx.register('Abra:PageLoadSync').asInstance(pageLoad);
    }
    function startUbt(ctx) {
        ctx.register('Abra:UbtPerformance').asCtor(UbtPerformance).dependencies('PerformanceBILogger');
        AbraMain.AbraObject.dbg = new UbtDebugger(ctx).getApi();
        var logger = Logger.registerLogger(ctx);
        var loadStep = 'verify requirements';
        try {
            if ((AbraMain.WalkmeInternals.abra || AbraMain.WalkmeInternals.ubt) && AbraMain.WalkmeInternals.abraState !== 'removed') {
                return logger.error('Abra was already loaded');
            }
            AbraMain.WalkmeInternals.abra = AbraMain.AbraObject;
            AbraMain.WalkmeInternals.ubt = AbraMain.AbraObject;
            var hostData = ctx.get('HostData');
            //don't load abra if IE version is less than 9
            if (hostData.isIE() && !hostData.isIE(9, 'gte')) {
                return setErrorInfo({ error: new Error('Browser is not supported') });
            }
            if (!ctx.get('AuditingEnabledIndicator').isEnabledForInsights()) {
                return setErrorInfo({ error: new Error('Disabled due to noAudit feature enabled') });
            }
            var loadPerf_1 = logger.perf('load');
            setState('preload');
            loadStep = 'load abra to ctx';
            AbraDi.load(ctx);
            ctx.get('EventsTrigger').sync('Abra:CtxLoaded'); //allow to decorate using ctx
            loadStep = 'load abra';
            var silent_1 = !!ctx.get('IsInEditor').get();
            var configurationGetter_1 = ctx.get('Abra:InsightsConfigurationGetter');
            configurationGetter_1
                .get()
                ['catch'](function (error) {
                logger.error('error loading ubt, using fallback', error);
                /**
                 * We have noticed errors when loading the configuration file (VIS-10107).
                 * Some of the errors are due to CSP, preventing JSON files from being loaded from our domain (they only allow js files).
                 * todo: This should be removed after we solve the JSON loading issue, curently only whitelist & sampling feature uses the configuration.
                 */
                configurationGetter_1.overrideConfiguration();
            })
                .then(function () {
                return ctx
                    .get('Abra:Loader')
                    .load(silent_1)
                    .then(function (succeeded) {
                    if (succeeded) {
                        loadPerf_1.stop();
                    }
                });
            })
                ['catch'](function (error) {
                logger.error('error loading ubt', error);
                setErrorInfo({ error: error });
            });
        }
        catch (error) {
            logger.error("could not ".concat(loadStep), error);
            setErrorInfo({ error: error });
        }
    }
})(AbraMain || (AbraMain = {}));
module.exports = AbraMain;
var InsightsConfigurationGetter = /** @class */ (function () {
    function InsightsConfigurationGetter(wmAjax, settingsFile, promiseManager, timerManager, commonUtils) {
        this.wmAjax = wmAjax;
        this.settingsFile = settingsFile;
        this.promiseManager = promiseManager;
        this.timerManager = timerManager;
        this.commonUtils = commonUtils;
        this.promiseResolved = false;
    }
    InsightsConfigurationGetter.prototype.get = function () {
        this.promise = this.promise || this.fetch();
        return this.promise;
    };
    InsightsConfigurationGetter.prototype.getSync = function () {
        if (!this.promiseResolved) {
            throw new Error('InsightsConfigurationGetter.getSync should be called within "get" function scope');
        }
        return this.configuration;
    };
    InsightsConfigurationGetter.prototype.overrideConfiguration = function (configuration) {
        this.promise = this.promiseManager.resolve(configuration);
        this.configuration = configuration;
        this.promiseResolved = true;
    };
    InsightsConfigurationGetter.prototype.getFileExtension = function (url) {
        return url.substring(url.lastIndexOf('.') + 1);
    };
    InsightsConfigurationGetter.prototype.fetch = function () {
        var _this = this;
        var promise = new this.promiseManager.Promise(function (resolve, reject) {
            var url = localStorage['ubt-te-whitelist-url'] || _this.settingsFile.getSettingsFile().InsightsConfigurationFile;
            if (url) {
                var extension = _this.getFileExtension(url);
                if (extension === 'js') {
                    _this.commonUtils.addScriptWithCallback(url, 'InsightsConfigurationCallback', resolve, reject, true);
                }
                else {
                    _this.ajax(url, resolve, reject, 1);
                }
            }
            else {
                resolve();
            }
        });
        promise.then(function (configuration) {
            _this.promiseResolved = true;
            _this.configuration = configuration;
        });
        return promise;
    };
    InsightsConfigurationGetter.prototype.ajax = function (url, resolve, reject, retryCount) {
        var _this = this;
        if (retryCount === void 0) { retryCount = 0; }
        this.wmAjax.execute({
            url: url,
            dataType: 'json',
            success: function (data) {
                resolve(data);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                if (retryCount > 0) {
                    _this.timerManager.libSetTimeout(function () {
                        _this.ajax(url, resolve, reject, retryCount - 1);
                    }, 500);
                }
                else {
                    var logError = { message: 'error getting configuration', extraData: { file: url, errorThrown: errorThrown, textStatus: textStatus, status: jqXHR.status } };
                    reject(logError);
                }
            }
        });
    };
    return InsightsConfigurationGetter;
}());
/// <reference path="abra-di.ts"/>
var Loader = /** @class */ (function () {
    function Loader(logger, storageSynchronizer, eventsSenderWrapper, eventsTrigger, jQuery, userEventCreator, idleEventCreator, windowIdGetter, errorUtils, frameBinder, pageInfoCreator, timingUtils, eventsListener, userEventListener, keypressEventCreator, captureElementApiLoader, insightsConfigurationGetter, featuresManager) {
        this.logger = logger;
        this.storageSynchronizer = storageSynchronizer;
        this.eventsSenderWrapper = eventsSenderWrapper;
        this.eventsTrigger = eventsTrigger;
        this.jQuery = jQuery;
        this.userEventCreator = userEventCreator;
        this.idleEventCreator = idleEventCreator;
        this.windowIdGetter = windowIdGetter;
        this.errorUtils = errorUtils;
        this.frameBinder = frameBinder;
        this.pageInfoCreator = pageInfoCreator;
        this.timingUtils = timingUtils;
        this.eventsListener = eventsListener;
        this.userEventListener = userEventListener;
        this.keypressEventCreator = keypressEventCreator;
        this.captureElementApiLoader = captureElementApiLoader;
        this.insightsConfigurationGetter = insightsConfigurationGetter;
        this.featuresManager = featuresManager;
        this.isUnloaded = false;
    }
    Loader.prototype.load = function (silent) {
        var _this = this;
        if (silent === void 0) { silent = false; }
        var key;
        AbraMain.setState('loading');
        return this.storageSynchronizer
            .getStorageKey()
            ['catch'](this.errorUtils.wrapCatch('get storage key'))
            .then(function () { return _this.windowIdGetter.load(); })
            ['catch'](this.errorUtils.wrapCatch('get winId'))
            .then(function () {
            if (!silent) {
                if (_this.featuresManager.isFeatureEnabled('UbtUsePointerEvent')) {
                    MousedownWrapper.enablePointerEvent();
                }
                _this.errorUtils.wrapCall(function () { return _this.eventsSenderWrapper.init(key); }, 'load sender');
                _this.errorUtils.wrapCall(function () { return _this.frameBinder.load(); }, 'bind frames');
                _this.errorUtils.wrapCall(function () { return _this.userEventCreator.load(); }, 'load event creator');
                if (_this.featuresManager.isFeatureEnabled('UbtEnableKeypressEvent')) {
                    _this.errorUtils.wrapCall(function () { return _this.keypressEventCreator.load(); }, 'load keypress event creator');
                }
                _this.errorUtils.wrapCall(function () { return _this.idleEventCreator.load(); }, 'load idle event creator');
                _this.errorUtils.wrapCall(function () { return _this.pageInfoCreator.load(); }, 'load page info creator');
            }
            _this.errorUtils.wrapCall(function () { return _this.captureElementApiLoader.load(); }, 'load capture element api');
            AbraMain.WalkmeInternals.removeAbra = function (message) {
                _this.unload({ message: message || 'no error provided' }, { failPoint: 'API call' });
            };
            _this.eventsListener.once('removeWalkMe', function () {
                //if WalkMe was removed due to an error, it does the logging by itself (with message "WalkMe was removed")
                _this.unload({ message: 'removeWalkMe' }, undefined, true);
            });
            /**
             * The Player's heartbeat is disabled when UBT is present, except when whitelist feature is on
             */
            var insightsConfiguration = _this.insightsConfigurationGetter.getSync();
            if (!insightsConfiguration || !insightsConfiguration.trackedEventsWhitelist) {
                _this.disableHeartbeat();
            }
            AbraMain.setState(silent ? 'silent' : 'loaded');
            _this.eventsTrigger.sync('Abra:Ready');
            return true;
        })
            ['catch'](function (error) {
            _this.unload(error);
            return false;
        });
    };
    /**
     * The player compensate for the lake of abra events by sending "heartbeat" events (aka keep-alive),
     * in order to keep the session open (server-side).
     * When abra is present we need to turn it off.
     */
    Loader.prototype.disableHeartbeat = function () {
        if (AbraDi.getCtx().has('HeartbeatEventSender')) {
            AbraDi.getCtx().get('HeartbeatEventSender').disable();
        }
    };
    Loader.prototype.unload = function (error, extraData, skipLog) {
        if (skipLog === void 0) { skipLog = false; }
        if (this.isUnloaded === true) {
            return;
        }
        AbraMain.setState('removing');
        AbraMain.WalkmeInternals.removeAbra = undefined;
        this.isUnloaded = true;
        extraData = extraData ? this.jQuery.extend(error.extraData || {}, extraData) : error.extraData || {};
        AbraMain.setErrorInfo({
            error: error,
            extraData: extraData
        });
        try {
            //todo: unbind all
            this.userEventListener.disable();
            this.eventsSenderWrapper.disable();
            this.timingUtils.disable();
            this.frameBinder.unload();
            this.windowIdGetter.unload();
            this.userEventCreator.unload();
            this.idleEventCreator.unload();
            this.pageInfoCreator.unload();
            this.keypressEventCreator.unload();
            AbraMain.setState('removed');
        }
        catch (err) {
            this.logger.warn('error unloading abra', err);
        }
        extraData.failPoint = extraData.failPoint || 'unknown reason';
        if (!skipLog) {
            this.logger.error("abra unload: ".concat(extraData.failPoint), error, extraData);
        }
    };
    return Loader;
}());
AbraDi.registerClass('Abra:Loader', Loader, 'Abra:Logger, Abra:StorageSynchronizer, Abra:EventsSenderWrapper, EventsTrigger, wmjQuery, Abra:UserEventCreator, Abra:IdleEventCreator, Abra:WindowIdGetter, Abra:ErrorUtils, Abra:FrameBinder, Abra:PageInfoCreator, Abra:TimingUtils, EventsListener, Abra:UserEventListener, Abra:KeypressEventCreator, Abra:CaptureElementApiLoader, Abra:InsightsConfigurationGetter, FeaturesManager');
var UbtDebuggerOptions = /** @class */ (function () {
    function UbtDebuggerOptions(ctx) {
        this.ctx = ctx;
    }
    UbtDebuggerOptions.prototype.get = function () {
        return {
            disableEventListeners: this.disableEventListeners.bind(this),
            disableEventSender: this.disableEventSender.bind(this),
            disableXpathBuilder: this.disableXpathBuilder.bind(this),
            disableAutoQuery: this.disableAutoQuery.bind(this),
            disableMeaningfulElement: this.disableMeaningfulElement.bind(this),
            disableLabel: this.disableLabel.bind(this),
            disableText: this.disableText.bind(this),
            disableIdleActive: this.disableIdleActive.bind(this),
            enablePerformanceLogs: this.enablePerformanceLogs.bind(this)
        };
    };
    UbtDebuggerOptions.prototype.decorateOnLoad = function (className, decoratingFunc) {
        var _this = this;
        this.ctx.get('EventsListener').once('Abra:CtxLoaded', function () {
            _this.ctx.decorate(className, decoratingFunc);
        });
    };
    UbtDebuggerOptions.prototype.disableEventListeners = function () {
        this.decorateOnLoad('Abra:UserEventListener', function (userEventListener) {
            userEventListener.register = function () { return -1; };
            return userEventListener;
        });
    };
    UbtDebuggerOptions.prototype.disableEventSender = function () {
        this.decorateOnLoad('Abra:EventsSenderWrapper', function (eventsSenderWrapper) {
            eventsSenderWrapper.init = function () { return undefined; };
            eventsSenderWrapper.send = function () { return undefined; };
            return eventsSenderWrapper;
        });
    };
    UbtDebuggerOptions.prototype.disableXpathBuilder = function () {
        this.decorateOnLoad('Abra:XPathGenerator', function (xPathGenerator) {
            xPathGenerator.generate = function () {
                return { xpath: 'mock[0]', xpathParts: null };
            };
            return xPathGenerator;
        });
    };
    UbtDebuggerOptions.prototype.disableAutoQuery = function () {
        this.decorateOnLoad('Abra:QueryGenerator', function (queryGenerator) {
            queryGenerator.generate = function () { return 'mock'; };
            return queryGenerator;
        });
    };
    UbtDebuggerOptions.prototype.disableMeaningfulElement = function () {
        this.decorateOnLoad('Abra:MeaningfulElementGetter', function (meaningfulElementGetter) {
            meaningfulElementGetter.get = function () { return undefined; };
            return meaningfulElementGetter;
        });
    };
    UbtDebuggerOptions.prototype.disableLabel = function () {
        this.decorateOnLoad('Abra:LabelGetter', function (labelGetter) {
            labelGetter.get = function () { return 'mock'; };
            return labelGetter;
        });
    };
    UbtDebuggerOptions.prototype.disableText = function () {
        this.decorateOnLoad('Abra:ElementDescriptionGenerator', function (elementDescriptionGenerator) {
            elementDescriptionGenerator.getText = function () {
                return { text: 'mock' };
            };
            return elementDescriptionGenerator;
        });
    };
    UbtDebuggerOptions.prototype.disableIdleActive = function () {
        this.decorateOnLoad('Abra:IdleEventCreator', function (idleEventCreator) {
            idleEventCreator.load = function () { return undefined; };
            return idleEventCreator;
        });
    };
    UbtDebuggerOptions.prototype.enablePerformanceLogs = function () {
        var _this = this;
        this.ctx.decorate('Abra:UbtPerformance', function (ubtPerformance) {
            var logger;
            ubtPerformance.perf = function (key) {
                logger = logger || _this.ctx.get('Abra:Logger');
                return UbtDebuggerOptions.createPerf(key, logger);
            };
            return ubtPerformance;
        });
    };
    UbtDebuggerOptions.createPerf = function (key, logger) {
        var perf = window.performance;
        var t0 = perf.now();
        var lastStepTime = t0;
        return {
            stop: function () { return logger.info("performance: ".concat(key, " took ").concat((perf.now() - t0).toFixed(2), " ms")); },
            step: function (name) {
                var t1 = perf.now();
                logger.info("performance: ".concat(key, "-").concat(name, " time from start ").concat((t1 - t0).toFixed(2), " ms (time from last step ").concat((t1 - lastStepTime).toFixed(2), " ms)"));
                lastStepTime = t1;
            }
        };
    };
    return UbtDebuggerOptions;
}());
/**
 * Please notice:
 *      apply via this command: localStorage['wm-ubt-dbg'] = true;
 *      a refresh is needed to apply changes
 *      to view performance measurements enable logger
 */
var UbtDebugger = /** @class */ (function () {
    function UbtDebugger(ctx) {
        this.enableIndicatorFlag = 'wm-ubt-dbg';
        this.storage = window.localStorage;
        if (this.storage && this.checkFlag(this.enableIndicatorFlag)) {
            this.options = new UbtDebuggerOptions(ctx).get();
            this.activateFlags();
            this.api = this.createApi();
        }
    }
    UbtDebugger.prototype.getApi = function () {
        return this.api;
    };
    UbtDebugger.prototype.activateFlags = function () {
        for (var option in this.options) {
            if (this.options.hasOwnProperty(option) && this.checkFlag(this.getFlagName(option))) {
                this.options[option]();
            }
        }
    };
    UbtDebugger.prototype.getFlagName = function (option) {
        return "".concat(this.enableIndicatorFlag, "-").concat(option);
    };
    UbtDebugger.prototype.checkFlag = function (flagName) {
        return this.storage[flagName] === 'true';
    };
    UbtDebugger.prototype.toggleFlag = function (flagName) {
        this.storage[flagName] = !this.checkFlag(flagName);
        return this.checkFlag(flagName);
    };
    UbtDebugger.prototype.clearFlag = function (flagName) {
        this.storage.removeItem(flagName);
    };
    UbtDebugger.prototype.createApi = function () {
        var _this = this;
        var api = {};
        var _loop_1 = function (option) {
            if (this_1.options.hasOwnProperty(option)) {
                api[option] = function () { return _this.toggleFlag(_this.getFlagName(option)); };
            }
        };
        var this_1 = this;
        for (var option in this.options) {
            _loop_1(option);
        }
        api['clear'] = function () {
            for (var option in _this.options) {
                if (_this.options.hasOwnProperty(option)) {
                    _this.clearFlag(_this.getFlagName(option));
                }
            }
            _this.clearFlag(_this.enableIndicatorFlag);
        };
        return api;
    };
    return UbtDebugger;
}());
var ElementParentsGetter = /** @class */ (function () {
    function ElementParentsGetter(logger, jQuery, errorUtils, featuresManager) {
        this.logger = logger;
        this.jQuery = jQuery;
        this.errorUtils = errorUtils;
        this.featuresManager = featuresManager;
        this.get = errorUtils.bindCall(this, this.get, 'error getting element parents');
        this.useJQueryParent = featuresManager.isFeatureEnabled('Abra-Use-JQuery-Parent');
    }
    ElementParentsGetter.prototype.get = function (event) {
        var path = event.path || (event.composedPath && event.composedPath()) || []; // for shadow dom
        var targetElement = (ElementUtils.isElement(path[0]) ? path[0] : event.target);
        if (!ElementUtils.isElement(targetElement)) {
            throw new Error('unexpected event target type: ' + typeof targetElement);
        }
        return this.getFromElement(targetElement);
    };
    ElementParentsGetter.prototype.getFromElement = function (element) {
        var parents = [];
        var i = ElementParentsGetter.MaxClimbCount;
        var node = element;
        var prevNode;
        do {
            if (ElementUtils.isElement(node)) {
                parents.unshift(node);
            }
            prevNode = node;
            node = this.getParent(node);
            if (--i <= 0) {
                throw new Error('ElementParentsGetter loop reached its limit');
            }
        } while (node && prevNode !== node);
        return parents;
    };
    ElementParentsGetter.prototype.getParent = function (node) {
        if (ElementUtils.isDocument(node)) {
            return this.tryGetFrameElement(node);
        }
        if (this.useJQueryParent) {
            return this.jQuery(node).parent()[0];
        }
        else {
            return this.getParentElementDefault(node);
        }
    };
    ElementParentsGetter.prototype.getParentElementDefault = function (node) {
        if (node.assignedSlot) {
            return node.assignedSlot;
        }
        if (node.parentNode) {
            return node.parentNode;
        }
        if (node.host) {
            return node.host;
        }
    };
    ElementParentsGetter.prototype.tryGetFrameElement = function (document) {
        try {
            var window_1 = document.defaultView || document['parentWindow']; //parentWindow is IE non-standard
            if (window_1 && this.shouldClimbMore(window_1)) {
                return window_1.frameElement;
            }
        }
        catch (error) {
            this.logger.error('error getting frame element', error);
        }
    };
    ElementParentsGetter.prototype.shouldClimbMore = function (win) {
        try {
            return !win['_makeTutorial'];
        }
        catch (error) {
            //Blocked by browser, cross domain is most likely
            return false;
        }
    };
    ElementParentsGetter.MaxClimbCount = 1000;
    return ElementParentsGetter;
}());
AbraDi.registerClass('Abra:ElementParentsGetter', ElementParentsGetter, 'Abra:Logger, wmjQuery, Abra:ErrorUtils, FeaturesManager');
var ElementUtils = /** @class */ (function () {
    function ElementUtils() {
    }
    ElementUtils.isElementTextNode = function (domElement) {
        return domElement.nodeType === NodeType.Text || domElement.nodeType === NodeType.CDATASection;
    };
    ElementUtils.isVisualDomElement = function (domElement) {
        var result = domElement.nodeType === NodeType.Element && !domElement.tagName.match(/^(script|style)$/i);
        return result;
    };
    ElementUtils.isElement = function (htmlNode) {
        return htmlNode && htmlNode.nodeType === NodeType.Element;
    };
    ElementUtils.isDocument = function (htmlNode) {
        return htmlNode && (htmlNode.nodeType === NodeType.Document || htmlNode.nodeType === NodeType.DocumentType);
    };
    ElementUtils.getLowerCaseTagName = function (element) {
        return (element.nodeName || element.localName).toLowerCase();
    };
    return ElementUtils;
}());
var LabelGetter = /** @class */ (function () {
    function LabelGetter(hostData, jQuery) {
        this.hostData = hostData;
        this.jQuery = jQuery;
    }
    LabelGetter.prototype.get = function (element) {
        var label = this.getLabelElement(element);
        return label && label.textContent && TextUtils.trim(label.textContent);
    };
    LabelGetter.prototype.getLabelElement = function (element) {
        var labelElement = element['labels'] && element['labels'][0];
        if (labelElement) {
            return labelElement;
        }
        return this.getLabelElementIePolyfill(element);
    };
    // based on: https://stackoverflow.com/questions/4844594/jquery-select-the-associated-label-element-of-a-input-field
    LabelGetter.prototype.getLabelElementIePolyfill = function (element) {
        if ((this.hostData.isIE() || this.hostData.isEdge()) && this.jQuery.inArray(ElementUtils.getLowerCaseTagName(element), LabelGetter.polyfillElementTypes) !== -1) {
            var jqElement = this.jQuery(element);
            var elementId = jqElement.attr('id');
            if (elementId && typeof elementId === 'string') {
                var jqLabelElement = this.jQuery('label[for="' + TextUtils.escapeJQuerySelectorAttributeValue(elementId) + '"]', element.ownerDocument);
                if (jqLabelElement.length !== 0) {
                    return jqLabelElement[0];
                }
            }
            /**
             * label can be a parent of an element
             * see ref: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label
             */
            return jqElement.closest('label')[0];
        }
    };
    LabelGetter.polyfillElementTypes = ['input', 'textarea', 'button', 'select', 'output'];
    return LabelGetter;
}());
AbraDi.registerClass('Abra:LabelGetter', LabelGetter, 'HostData, wmjQuery');
var ElementDescriptionGenerator = /** @class */ (function () {
    function ElementDescriptionGenerator(jQuery, privacyUtils, textUtils, logger, xpathGenerator, queryGenerator, labelGetter, featuresManager, overlappedText) {
        this.jQuery = jQuery;
        this.privacyUtils = privacyUtils;
        this.textUtils = textUtils;
        this.logger = logger;
        this.xpathGenerator = xpathGenerator;
        this.queryGenerator = queryGenerator;
        this.labelGetter = labelGetter;
        this.featuresManager = featuresManager;
        this.overlappedText = overlappedText;
        this.textOptions = {
            maxLength: 200
        };
    }
    ElementDescriptionGenerator.prototype.generate = function (event, meaningfulElement) {
        var capturePerf = this.logger.perf('capture');
        var elementDescription = {};
        var result = { desc: elementDescription };
        var parents = event.getParents();
        capturePerf.step('getParents');
        var removeText = this.privacyUtils.shouldCensorText(parents);
        capturePerf.step('shouldCensorText');
        try {
            var xpathResult = this.generateXpath(event, removeText);
            elementDescription.xpath = xpathResult.xpath;
            result.xpathParts = xpathResult.xpathParts;
            capturePerf.step('generateXpath');
        }
        catch (error) {
            //If the element detached from DOM on cpature, we still want the event, without the xpath
            this.logger.error('cannot generate xpath', error);
        }
        var clickedElement = event.getElement();
        var element = meaningfulElement || clickedElement;
        try {
            elementDescription.autoQuery = this.queryGenerator.generate(element); //todo: remove this
            capturePerf.step('generateAutoQuery');
        }
        catch (error) {
            this.logger.error('cannot generate autoQuery', error);
        }
        if (!removeText) {
            elementDescription.label = this.labelGetter.get(element);
            capturePerf.step('getLabel');
            if (!this.privacyUtils.isPrivacyUnsafeElementType(element)) {
                var eventText = this.getText(element, true);
                capturePerf.step('getText');
                elementDescription.text = eventText.text;
                if (eventText.isOverlapped) {
                    result.misc = { textSource: 'overlapped' };
                }
                var val = this.jQuery(element).val();
                elementDescription.value = val ? TextUtils.trim(val.toString(), this.textOptions.maxLength) : undefined;
            }
        }
        capturePerf.stop();
        return result;
    };
    ElementDescriptionGenerator.prototype.generateXpath = function (event, removeText) {
        var parents = event.getParents();
        removeText = removeText !== undefined ? removeText : this.privacyUtils.shouldCensorText(parents);
        return this.xpathGenerator.generate(parents, removeText);
    };
    ElementDescriptionGenerator.prototype.getSelectTagText = function (element) {
        //todo: write tests for value and text collection
        //the normal "text" function will return the entire options separated be a Newline char
        var jqElement = this.jQuery(element);
        var elementValue = jqElement.val();
        //newline causes an exception to be thrown, current jquery don't handle escaping
        if (typeof elementValue === 'string' && elementValue.indexOf('\n') === -1) {
            return jqElement.find('option[value="' + TextUtils.escapeJQuerySelectorAttributeValue(elementValue) + '"]').text();
        }
    };
    ElementDescriptionGenerator.prototype.getElementText = function (element, skipPrivacyCheck) {
        if (skipPrivacyCheck === void 0) { skipPrivacyCheck = false; }
        if (!skipPrivacyCheck && (this.privacyUtils.isPrivacyUnsafeElementType(element) || this.privacyUtils.shouldCensorText(null, element))) {
            return;
        }
        if (ElementUtils.getLowerCaseTagName(element) === 'select') {
            return this.getSelectTagText(element);
        }
        return TextUtils.trim(this.textUtils.collectText(element, this.textOptions), this.textOptions.maxLength);
    };
    ElementDescriptionGenerator.prototype.getText = function (element, skipPrivacyCheck) {
        if (skipPrivacyCheck === void 0) { skipPrivacyCheck = false; }
        var result = {};
        result.text = this.getElementText(element, skipPrivacyCheck);
        if (!result.text && this.featuresManager.isFeatureEnabled('UbtAddOverlappedText')) {
            try {
                var overlappedElement = this.overlappedText.getOverlappedTextElement(element);
                if (overlappedElement) {
                    result.text = this.getElementText(overlappedElement, false);
                    result.isOverlapped = true;
                }
            }
            catch (error) {
                this.logger.error('cannot get overlapped text', error);
            }
        }
        return result;
    };
    return ElementDescriptionGenerator;
}());
AbraDi.registerClass('Abra:ElementDescriptionGenerator', ElementDescriptionGenerator, 'wmjQuery, Abra:PrivacyUtils, Abra:TextUtils, Abra:Logger, Abra:XPathGenerator, Abra:QueryGenerator, Abra:LabelGetter, FeaturesManager, Abra:OverlappedText');
/**
 * Motivation: sometimes in terms of UX user clicks on element with text, but in terms of DOM he clicks another
 * element (for example, positioned with greater z-index and transparent) without text. This feature enable to check all the elements
 * at clicked element coordinates, and if one of them has text, it will be returned.
 */
var OverlappedText = /** @class */ (function () {
    function OverlappedText() {
    }
    //TODO: consider add checking if transparent
    /**
     * Returns an array of first n ancestors (where n=OverlappedText.maxDistToParent)
     */
    OverlappedText.getElementFirstAncestors = function (element) {
        var ancestors = [];
        var parent = element.parentElement;
        var count = 0;
        while (parent && count < OverlappedText.maxDistToParent) {
            ancestors.push(parent);
            count++;
            parent = parent.parentElement;
        }
        return ancestors;
    };
    /**
     * Accepts two paths (from descendants to ancestors and not including element itself)
     * calculates distances to common ancestor element for every path and returns true if distance to common ancestor
     * in one of paths is too high.
     */
    OverlappedText.isMaxDistanceToCommonAncestorExceeded = function (path1, path2) {
        var cursor1 = path1.length - 1;
        var cursor2 = path2.length - 1;
        // common ancestor is outside given paths
        if (path1[cursor1] !== path2[cursor2]) {
            return true;
        }
        while (cursor1 >= 0 && cursor2 >= 0 && path1[cursor1] === path2[cursor2]) {
            cursor1--;
            cursor2--;
        }
        var distInChain1 = cursor1 + 2; // Example: if path1[0] is a common ancestor, that means that the distance
        // from element is 1, but in this case cursor1 will be -1 since we made "redundant" cursor1-=1 in the loop
        var distInChain2 = cursor2 + 2;
        return distInChain1 > OverlappedText.maxDistToParent || distInChain2 > OverlappedText.maxDistToParent;
    };
    OverlappedText.getElementCenter = function (element) {
        var _a = element.getBoundingClientRect(), left = _a.left, right = _a.right, top = _a.top, bottom = _a.bottom;
        return { x: (right + left) / 2, y: (bottom + top) / 2 };
    };
    /**
     * Returns true if element or one of his descents has positive z-index.
     * Checks only n descents (performance concern), where n = OverlappedText.maxDistToParent
     *
     * (Note: actually, overlapping may occur without any reference to z-index, for example by setting relative position
     * and moving elements. If isPositiveZIndex such kind of  cases will not be detected. Limitation in favor of performance.)
     */
    OverlappedText.isPositiveZIndex = function (element) {
        var testedElement = element;
        var steps = 0;
        while (testedElement && steps < OverlappedText.maxDistToParent) {
            if (parseInt(getComputedStyle(testedElement).zIndex) > 0) {
                return true;
            }
            steps++;
            testedElement = testedElement.parentElement;
        }
        return false;
    };
    /**
     * Wrapper for `document.elementsFromPoint` function, in order to enable it on IE
     */
    OverlappedText.getElementsAtPoint = function (doc, x, y) {
        if (doc.elementsFromPoint) {
            return doc.elementsFromPoint(x, y);
        }
        var elements = doc.msElementsFromPoint(x, y);
        var result = [];
        if (elements !== null) {
            for (var i = 0; i < elements.length; i++) {
                result.push(elements[i]);
            }
        }
        return result;
    };
    /**
     * Returns number of element's descendants. If OverlappedText.maxDescendants exceeded - stops calculation and returns Infinity.
     * Note. This function is equivalent to `(element)=>element.getElementsByTagName('*').length < max;` but if has
     * some performance advantage.
     */
    OverlappedText.getElementDescendantsNum = function (element, alreadyFoundNum) {
        if (alreadyFoundNum === void 0) { alreadyFoundNum = 0; }
        if (alreadyFoundNum > OverlappedText.maxDescendants)
            return Infinity;
        var children = element.children;
        if (children.length === 0)
            return 0;
        var localDescendantsNum = children.length;
        if (alreadyFoundNum + localDescendantsNum > OverlappedText.maxDescendants)
            return Infinity;
        for (var i = 0; i < children.length; i++) {
            var num = OverlappedText.getElementDescendantsNum(children[i], alreadyFoundNum + localDescendantsNum);
            localDescendantsNum += num;
            if (alreadyFoundNum + localDescendantsNum > OverlappedText.maxDescendants)
                return Infinity;
        }
        return localDescendantsNum;
    };
    OverlappedText.isElementHasTooMuchDescendants = function (element) {
        return OverlappedText.getElementDescendantsNum(element) > OverlappedText.maxDescendants;
    };
    OverlappedText.isElementHasInnerText = function (element) {
        var text = element.innerText;
        if (text) {
            text = text.trim();
        }
        return !!text;
    };
    OverlappedText.prototype.getOverlappedTextElement = function (element) {
        if (!OverlappedText.isPositiveZIndex(element)) {
            return;
        }
        var _a = OverlappedText.getElementCenter(element), x = _a.x, y = _a.y;
        var elementsAtPoint = OverlappedText.getElementsAtPoint(element.ownerDocument, x, y);
        var ancestors = OverlappedText.getElementFirstAncestors(element);
        var detectedElement;
        for (var i = 0; i < elementsAtPoint.length && !detectedElement; i++) {
            var testedElement = elementsAtPoint[i];
            // Skip if it's an ancestor or if it's a clicked element itself
            if (ancestors.indexOf(testedElement) > -1 || testedElement === element) {
                continue;
            }
            if (!OverlappedText.isElementHasInnerText(testedElement)) {
                continue;
            }
            // Skip if common ancestor is too far
            var testedElementFirstAncestors = OverlappedText.getElementFirstAncestors(testedElement);
            if (OverlappedText.isMaxDistanceToCommonAncestorExceeded(ancestors, testedElementFirstAncestors)) {
                continue;
            }
            if (OverlappedText.isElementHasTooMuchDescendants(testedElement)) {
                continue;
            }
            detectedElement = testedElement;
        }
        return detectedElement;
    };
    OverlappedText.maxDistToParent = 3; // if clicked of detected element too far from common parent, it will be skipped
    OverlappedText.maxDescendants = 6; // if detected element has too many descendants, it will be skipped
    return OverlappedText;
}());
AbraDi.registerClass('Abra:OverlappedText', OverlappedText);
var MeaningfulElementGetter = /** @class */ (function () {
    function MeaningfulElementGetter(jQuery) {
        this.jQuery = jQuery;
    }
    MeaningfulElementGetter.prototype.get = function (element) {
        var jelement = this.jQuery(element); //JQueryify
        var result = undefined, couldBePointer = true, climbCount = -1;
        do {
            if (jelement[0].shadowRoot) {
                // do not climb out of shadow scope
                break;
            }
            climbCount++;
            //button means that the programmer had a single purpose in mind for all the elements inside it
            if (ElementUtils.getLowerCaseTagName(jelement[0]) === 'button') {
                result = {
                    type: 'button',
                    element: jelement[0],
                    climb: climbCount
                };
                break;
            }
            if (couldBePointer === true) {
                var currentCursor = this.getElementCursor(jelement);
                if (this.isPointer(jelement, currentCursor)) {
                    result = {
                        type: 'pointer',
                        element: jelement[0],
                        climb: climbCount
                    };
                }
                else {
                    couldBePointer = this.isCursorCouldBePointer(jelement[0], currentCursor);
                }
            }
            if (result === undefined) {
                if (this.isStoppableAttribute(jelement[0])) {
                    result = {
                        type: 'attribute',
                        element: jelement[0],
                        climb: climbCount
                    };
                }
            }
            jelement = jelement.parent();
        } while (climbCount < MeaningfulElementGetter.MaxClimbCount && jelement.prop('nodeType') === NodeType.Element);
        if (result !== undefined && result.climb > 0 && result.element !== undefined && result.element !== element) {
            return result;
        }
    };
    /**
     * checks if the element have an attribute that we can stop on (that indicates this element is meaningful)
     */
    MeaningfulElementGetter.prototype.isStoppableAttribute = function (element) {
        if (!element || !element.attributes) {
            return false;
        }
        var attr = element.attributes['tabIndex'];
        //tab index can be set by browser, we want to address only explicit html
        if (attr && attr.value && element.tabIndex >= 0) {
            return true;
        }
        attr = element.attributes['accesskey'];
        return !!(attr && attr.value);
    };
    MeaningfulElementGetter.prototype.getElementCursor = function (element) {
        /**
         * Calling `css` function could throw "TypeError: Cannot read property 'defaultView' of null" exception
         * One of the causes could be that the element is detached from the DOM on execution
         * ref: https://github.com/jquery/jquery/issues/2086
         */
        try {
            return this.jQuery(element).css('cursor');
        }
        catch (ex) {
            return 'auto';
        }
    };
    MeaningfulElementGetter.prototype.isPointer = function (element, cursor) {
        //trivial case
        if (cursor === 'pointer') {
            return true;
        }
        //auto mean the user-agent decides
        if (cursor !== 'auto') {
            return false;
        }
        switch (ElementUtils.getLowerCaseTagName(element[0])) {
            case 'a':
                return element.attr('href') !== undefined; //no href - no pointer
            default:
                return false;
        }
    };
    MeaningfulElementGetter.prototype.isCursorCouldBePointer = function (element, cursor) {
        if (cursor === 'pointer') {
            return true;
        }
        if (cursor !== 'auto') {
            return false;
        }
        return this.jQuery.inArray(ElementUtils.getLowerCaseTagName(element), MeaningfulElementGetter.cursorOverrideNotPointer) === -1;
    };
    MeaningfulElementGetter.cursorOverrideNotPointer = ['select', 'input', 'button', 'textarea', 'video', 'audio', 'label'];
    MeaningfulElementGetter.MaxClimbCount = 1000;
    return MeaningfulElementGetter;
}());
AbraDi.registerClass('Abra:MeaningfulElementGetter', MeaningfulElementGetter, 'wmjQuery');
var XPathGenerator = /** @class */ (function () {
    function XPathGenerator(jQuery, dataCollectionSettings, xpathEscaper, urlCensorshipController, xpathReducer) {
        this.jQuery = jQuery;
        this.dataCollectionSettings = dataCollectionSettings;
        this.xpathEscaper = xpathEscaper;
        this.urlCensorshipController = urlCensorshipController;
        this.xpathReducer = xpathReducer;
        this.textProperties = ObjectUtils.convertArrayToObject(['name', 'title']);
        this.attributesToCollect = this.getAttributesToCollect(dataCollectionSettings.get());
        this.settings = dataCollectionSettings.get().element.xpath;
    }
    XPathGenerator.prototype.getAttributesToCollect = function (collectionSettings) {
        var attributes = collectionSettings.element && collectionSettings.element.attributesToCollect;
        if (attributes && attributes.length !== 0) {
            var attributesToCollect = attributes.slice(); //shallow clone
            if (this.urlCensorshipController.shouldCensorUrl()) {
                attributesToCollect = this.filterAttributesByCensorship(attributesToCollect);
            }
            attributesToCollect.sort(); //don't remove - makes it sorted upon collection
            return attributesToCollect;
        }
    };
    XPathGenerator.prototype.filterAttributesByCensorship = function (attributes) {
        var _this = this;
        var urlContainingAttributes = ['src', 'href'];
        return this.jQuery.grep(attributes, function (item) {
            return _this.jQuery.inArray(item, urlContainingAttributes) === -1;
        });
    };
    XPathGenerator.prototype.generate = function (parents, removeTextProperties) {
        if (removeTextProperties === void 0) { removeTextProperties = false; }
        var xpathParts = this.generateXpathParts(parents, removeTextProperties);
        var xpathStringArray = this.convertXpathToStringArray(xpathParts);
        var xpath = this.applyXpathLengthLimitation(xpathStringArray).join('');
        return { xpath: xpath, xpathParts: xpathParts };
    };
    XPathGenerator.prototype.generateXpathParts = function (elementsPath, removeTextProperties) {
        var _this = this;
        return this.jQuery(elementsPath)
            .map(function (i, element) {
            var jqElement = _this.jQuery(element);
            return {
                tagName: ElementUtils.getLowerCaseTagName(element),
                tagIndex: _this.getTagIndex(element),
                classes: _this.getClasses(jqElement),
                id: _this.getId(jqElement),
                attributes: _this.getAttributes(jqElement, removeTextProperties)
            };
        })
            .toArray();
    };
    XPathGenerator.prototype.getAttributes = function (jqElement, removeTextProperties) {
        var _this = this;
        var attributes = [];
        if (this.attributesToCollect && this.xpathReducer.shouldCollectAttributesOrClasses(jqElement)) {
            //jQuery.map filters out undefined
            this.jQuery.each(this.attributesToCollect, function (i, attributeName) {
                if (removeTextProperties && _this.textProperties[attributeName]) {
                    return;
                }
                var attributeValue = jqElement.attr(attributeName);
                if (attributeValue !== undefined) {
                    var attributeName_1 = _this.attributesToCollect[i];
                    if (attributeValue.length <= _this.settings.attributeMaxLength && XPathGenerator.shouldCollectAttribute(attributeValue)) {
                        attributes.push(ObjectUtils.createKeyValuePair(attributeName_1, attributeValue));
                    }
                    else {
                        attributes.push(ObjectUtils.createKeyValuePair(attributeName_1));
                    }
                }
            });
        }
        return attributes;
    };
    XPathGenerator.prototype.getClasses = function (jqElement) {
        var _this = this;
        var classes = [];
        if (this.xpathReducer.shouldCollectAttributesOrClasses(jqElement)) {
            var rawClasses = jqElement.attr('class');
            if (rawClasses) {
                classes = this.jQuery.grep(rawClasses.split(XPathGenerator.classDelimiter), XPathGenerator.shouldCollectClassOrId);
                classes = this.jQuery.map(classes, function (className) { return TextUtils.trim(className); });
                classes = this.jQuery.grep(classes, function (className) {
                    return className && className.length <= _this.settings.classMaxLength;
                });
                classes.sort();
            }
        }
        return classes;
    };
    XPathGenerator.prototype.getId = function (jqElement) {
        var rawId = jqElement.attr('id');
        if (XPathGenerator.shouldCollectClassOrId(rawId)) {
            var trimmedId = TextUtils.trim(rawId);
            if (trimmedId.length <= this.settings.idMaxLength) {
                return trimmedId;
            }
        }
    };
    XPathGenerator.prototype.convertXpathToStringArray = function (xpathParts) {
        var _this = this;
        var outputArray = [];
        for (var i = 0; i < xpathParts.length; i++) {
            var part = xpathParts[i];
            outputArray.push(part.tagName);
            outputArray.push('[');
            outputArray.push((part.tagIndex + 1).toString());
            outputArray.push(']');
            if (part.id) {
                outputArray.push('#');
                outputArray.push(part.id);
            }
            if (part.classes) {
                var classes = this.jQuery.map(part.classes, function (className) { return ".".concat(className); });
                outputArray.push.apply(outputArray, classes);
            }
            if (part.attributes) {
                var attributes = this.jQuery.map(part.attributes, function (attribute) { return (attribute.value ? "&".concat(attribute.key, "=").concat(_this.xpathEscaper.escape(attribute.value)) : "&".concat(attribute.key)); });
                outputArray.push.apply(outputArray, attributes);
            }
            outputArray.push(XPathGenerator.delimiter);
        }
        outputArray.pop();
        return outputArray;
    };
    /**
     * Remove data from xpath to make sure we could send it within our length-limit
     * @param rawXpath array of parts of xpath
     */
    XPathGenerator.prototype.applyXpathLengthLimitation = function (rawXpath) {
        var length = 0;
        for (var i = 0; i < rawXpath.length; i++) {
            length += rawXpath[i].length;
        }
        /**
         * Remove classes if length exceeded (starting from parents)
         */
        for (var i = 0; length > this.settings.xpathMaxLength && i < rawXpath.length; i++) {
            var str = rawXpath[i];
            if (str[0] === '.') {
                length -= str.length;
                rawXpath[i] = '';
            }
        }
        /**
         * Remove Xpath-Parts if length exceeded (starting from parents)
         */
        if (length > this.settings.xpathMaxLength) {
            var cutSize = 0;
            var cutIndex = 0;
            for (var i = 0; i < rawXpath.length && cutIndex === 0; i++) {
                var str = rawXpath[i];
                cutSize += str.length;
                if (str === '/' && length - cutSize <= this.settings.xpathMaxLength) {
                    cutIndex = i;
                }
            }
            rawXpath = cutIndex !== 0 ? rawXpath.slice(cutIndex + 1) : [];
        }
        return rawXpath;
    };
    XPathGenerator.prototype.getTagIndex = function (element) {
        var tagIndex = 0;
        for (var sibling = element.previousSibling; sibling; sibling = sibling.previousSibling) {
            if (sibling.localName === element.localName) {
                tagIndex++;
            }
        }
        return tagIndex;
    };
    XPathGenerator.shouldCollectClassOrId = function (value) {
        // classes and ids are allowed to contain CC like strings
        // see: https://walkme.atlassian.net/browse/DATA-206
        return value && !XPathGenerator.forbiddenCharsRegex.test(value);
    };
    XPathGenerator.shouldCollectAttribute = function (value) {
        // attributes are not allowed to contain CC like strings
        // attibutes are allowed to contain special chars (they are escaped)
        return value && !PrivacyUtils.isCreditCard(value);
    };
    XPathGenerator.forbiddenCharsRegex = /[&=\.\]\[\/\#]/;
    XPathGenerator.classDelimiter = /[\s\uFEFF\xA0]+/;
    XPathGenerator.delimiter = '/';
    return XPathGenerator;
}());
AbraDi.registerClass('Abra:XPathGenerator', XPathGenerator, 'wmjQuery, Abra:DataCollectionSettingsWrapper, Abra:XpathEscaper, Abra:UrlCensorshipController, Abra:XpathReducer');
var XpathReducer = /** @class */ (function () {
    function XpathReducer() {
    }
    XpathReducer.prototype.shouldCollectAttributesOrClasses = function (jqElement) {
        if (jqElement && ElementUtils.isElement(jqElement[0])) {
            var tagName = ElementUtils.getLowerCaseTagName(jqElement[0]);
            return tagName !== 'html' && tagName !== 'body';
        }
        return true;
    };
    return XpathReducer;
}());
AbraDi.registerClass('Abra:XpathReducer', XpathReducer);
var EventHandler = /** @class */ (function () {
    function EventHandler(eventBuilder, eventsSenderWrapper, eventsTrigger, logger, windowIdGetter, commonEventAttributesProvider, jQuery, obfuscator, textValueCensorship, collectionIndicator, webhooksIdsAdder, featuresManager) {
        this.eventBuilder = eventBuilder;
        this.eventsSenderWrapper = eventsSenderWrapper;
        this.eventsTrigger = eventsTrigger;
        this.logger = logger;
        this.windowIdGetter = windowIdGetter;
        this.commonEventAttributesProvider = commonEventAttributesProvider;
        this.jQuery = jQuery;
        this.obfuscator = obfuscator;
        this.textValueCensorship = textValueCensorship;
        this.collectionIndicator = collectionIndicator;
        this.webhooksIdsAdder = webhooksIdsAdder;
        this.shouldEncode = true;
        this.shouldEncode = !featuresManager.isFeatureEnabled('Abra-DisableEncoding');
        if (AbraDi.getCtx().has('CleanObject')) {
            this.cleanObject = AbraDi.getCtx().get('CleanObject');
        }
    }
    EventHandler.prototype.initiate = function (eventData) {
        var _this = this;
        if (!this.collectionIndicator.shouldCollect()) {
            return;
        }
        var time = TimingUtils.now();
        this.eventBuilder
            .build(eventData)
            .then(function (event) {
            event.time = time;
            event.ctx = event.ctx || {};
            _this.addTimingData(event);
            _this.addIframeData(event);
            _this.addApplicationData(event);
            return _this.addWindowData(event).then(function () {
                _this.substringEvent(event);
                _this.textValueCensorship.censorEvent(eventData);
                event = _this.jQuery.extend(true, event, _this.commonEventAttributesProvider.get());
                if (_this.cleanObject) {
                    event = _this.cleanObject(event);
                }
                _this.webhooksIdsAdder && _this.webhooksIdsAdder.add(event); // VIS-6832
                _this.sendEvent(event);
            });
        })
            ['catch'](function (error) {
            _this.logger.error('error sending event', error);
        });
    };
    EventHandler.prototype.substringEvent = function (event) {
        TextUtils.substringObject(EventPropertiesMaxLength.Value, event);
    };
    EventHandler.prototype.addTimingData = function (event) {
        event.ctx.timing = TimingUtils.getTimingData();
    };
    EventHandler.prototype.addWindowData = function (event) {
        return this.windowIdGetter.getOrCreate().then(function (id) {
            event.ctx.winId = id;
        });
    };
    EventHandler.prototype.addIframeData = function (event) {
        try {
            if (FrameUtils.isIframe()) {
                event.ctx.topTitle = FrameUtils.getTopTitle();
            }
        }
        catch (error) {
            //Blocked a frame from accessing a cross-origin frame
        }
    };
    EventHandler.prototype.addApplicationData = function (event) {
        event.version = { abra: AbraMain.App.version };
    };
    EventHandler.prototype.sendEvent = function (event) {
        this.eventsSenderWrapper.send(this.shouldEncode ? this.obfuscator.encode(event) : event);
        this.eventsTrigger.sync('Abra:EventSent', event); //used at kadabra & tests
        this.logger.debug(event); //used for debugging, especially needed on old browsers (IE8 don't have network devtools)
    };
    return EventHandler;
}());
AbraDi.registerClass('Abra:EventHandler', EventHandler, 'Abra:EventBuilder, Abra:EventsSenderWrapper, EventsTrigger, Abra:Logger, Abra:WindowIdGetter, CommonEventAttributesProvider, wmjQuery, Abra:EventObfuscator, Abra:TextValueCensorship, Abra:CollectionIndicator, WebhooksIdsAdder, FeaturesManager');
var EventTypes = {
    active: 'active',
    idle: 'idle',
    pageChange: 'pageChange'
};
/// <reference path="../typings/declarations/event-types.ts"/>
/**
 * Fire `idle` event each time the user becomes inactive
 * This event will be followed by an `active` event when the user performs any interaction with the site
 */
var IdleEventCreator = /** @class */ (function () {
    //private readonly isIFrame: boolean; //todo: think about it
    function IdleEventCreator(eventHandler, userEventListener, reusableTimerFactory, errorUtils, throttle) {
        this.eventHandler = eventHandler;
        this.userEventListener = userEventListener;
        this.reusableTimerFactory = reusableTimerFactory;
        this.errorUtils = errorUtils;
        this.throttle = throttle;
        this.delay = 60 * 1000;
        this.isIdle = false;
        this.isEnabled = false;
        this.throttleIntervalMS = 1000;
    }
    IdleEventCreator.prototype.load = function () {
        var _this = this;
        if (!this.timer) {
            this.timer = this.reusableTimerFactory.create(function () { return _this.setIdle(); }, this.delay);
            this.registerId = this.userEventListener.register(this.throttle(function (event) { return _this.setActive(event); }, this.throttleIntervalMS), [
                'blur',
                'change',
                'click',
                'dblclick',
                'focus',
                'focusin',
                'focusout',
                'hover',
                'keydown',
                'keypress',
                'keyup',
                'mousedown',
                'mouseenter',
                'mouseleave',
                'mousemove',
                'mouseout',
                'mouseover',
                'mouseup',
                'resize',
                'scroll',
                'select',
                'submit'
            ]);
            this.timer.set();
            this.isEnabled = true;
        }
    };
    IdleEventCreator.prototype.unload = function () {
        if (this.timer) {
            this.userEventListener.unregister(this.registerId);
            this.timer.clear();
            this.isEnabled = false;
        }
    };
    /**
     * for tests
     */
    IdleEventCreator.prototype.setDelay = function (delay) {
        this.delay = delay;
    };
    /**
     * for tests
     */
    IdleEventCreator.prototype.setThrottleInterval = function (interval) {
        this.throttleIntervalMS = interval;
    };
    IdleEventCreator.prototype.setActive = function (event) {
        if (this.isEnabled) {
            if (this.isIdle) {
                this.isIdle = false;
                this.raiseEvent(EventTypes.active, event.getEventType());
            }
            this.timer.set();
        }
    };
    IdleEventCreator.prototype.setIdle = function () {
        if (this.isEnabled) {
            this.isIdle = true;
            this.raiseEvent(EventTypes.idle);
        }
    };
    IdleEventCreator.prototype.raiseEvent = function (type, trigger) {
        var _this = this;
        this.errorUtils.wrapCallAndLog(function () {
            _this.eventHandler.initiate({
                event: {
                    type: type,
                    misc: { trigger: trigger }
                }
            });
        }, 'error at IdleEventCreator', { type: type, trigger: trigger });
    };
    return IdleEventCreator;
}());
AbraDi.registerClass('Abra:IdleEventCreator', IdleEventCreator, 'Abra:EventHandler, Abra:UserEventListener, Abra:ReusableTimerFactory, Abra:ErrorUtils, Throttle');
var KeypressEventCreator = /** @class */ (function () {
    function KeypressEventCreator(userEventListener, errorUtils, eventHandler, reusableTimerFactory, elementDescriptionGenerator, textValueCensorship, collectionIndicator) {
        var _this = this;
        this.userEventListener = userEventListener;
        this.errorUtils = errorUtils;
        this.eventHandler = eventHandler;
        this.reusableTimerFactory = reusableTimerFactory;
        this.elementDescriptionGenerator = elementDescriptionGenerator;
        this.textValueCensorship = textValueCensorship;
        this.collectionIndicator = collectionIndicator;
        this.isEnabled = false;
        this.timer = this.reusableTimerFactory.create(function () { return _this.feedEvent(); }, 1000);
    }
    KeypressEventCreator.prototype.load = function () {
        var _this = this;
        if (!this.isEnabled) {
            this.registerId = this.userEventListener.register(function (event) { return _this.feedEvent(event); }, ['keypress']);
            this.registerBeforeUnload();
            this.isEnabled = true;
        }
    };
    KeypressEventCreator.prototype.unload = function () {
        if (this.isEnabled) {
            this.timer.clear();
            this.userEventListener.unregister(this.registerId);
            this.eventData = undefined;
            this.isEnabled = false;
        }
    };
    KeypressEventCreator.prototype.feedEvent = function (event) {
        if (!this.isEnabled)
            return;
        if (event && this.collectionIndicator.shouldCollect()) {
            //keypress after keypress
            if (this.eventData) {
                if (this.eventData.desc.xpath === this.elementDescriptionGenerator.generateXpath(event).xpath) {
                    //on same element
                    this.timer.set(); //add 1000ms to window
                    this.eventData.count++; //todo: add limition of keystrokes?
                }
                else {
                    //on other element
                    this.raiseEvent(); //fire previous event
                    this.createNew(event);
                }
            }
            else {
                //first keypress sequence on this element
                this.createNew(event);
            }
        }
        else {
            this.raiseEvent();
        }
    };
    KeypressEventCreator.prototype.createNew = function (event) {
        this.eventData = {
            desc: this.elementDescriptionGenerator.generate(event).desc,
            censorshipData: this.textValueCensorship.createCensorshipData(event),
            count: 1,
            t1: TimingUtils.now()
        };
        this.timer.set(); //add 1000ms to window
    };
    KeypressEventCreator.prototype.raiseEvent = function () {
        this.timer.clear();
        if (this.eventData) {
            this.eventHandler.initiate({
                event: {
                    type: 'keypress',
                    element: this.eventData.desc, //todo: filter out stuff (text, value, etc)
                    misc: {
                        count: this.eventData.count,
                        t1: this.eventData.t1
                    }
                },
                data: { censorshipData: this.eventData.censorshipData }
            });
            this.eventData = undefined;
        }
    };
    KeypressEventCreator.prototype.registerBeforeUnload = function () {
        var _this = this;
        var _originalUnloadEvent = window.onbeforeunload;
        window.onbeforeunload = function (event) {
            if (_this.isEnabled) {
                _this.errorUtils.wrapCallAndLog(function () { return _this.feedEvent(); }, 'error on onbeforeunload keypress');
            }
            // keep current functionality - don't mess up code on client's site
            if (_originalUnloadEvent) {
                return _originalUnloadEvent.call(window, event);
            }
        };
    };
    return KeypressEventCreator;
}());
AbraDi.registerClass('Abra:KeypressEventCreator', KeypressEventCreator, 'Abra:UserEventListener, Abra:ErrorUtils, Abra:EventHandler, Abra:ReusableTimerFactory, Abra:ElementDescriptionGenerator, Abra:TextValueCensorship, Abra:CollectionIndicator');
var MousedownWrapper = /** @class */ (function () {
    function MousedownWrapper() {
    }
    MousedownWrapper.getEventNameForListening = function () {
        return _a.eventNameForListening;
    };
    MousedownWrapper.wrapEventNameForSending = function (type) {
        return type === _a.pointerdown ? _a.mousedown : type;
    };
    MousedownWrapper.enablePointerEvent = function () {
        if (window.PointerEvent) {
            _a.eventNameForListening = _a.pointerdown;
        }
    };
    var _a;
    _a = MousedownWrapper;
    MousedownWrapper.mousedown = 'mousedown';
    MousedownWrapper.pointerdown = 'pointerdown';
    MousedownWrapper.eventNameForListening = _a.mousedown;
    return MousedownWrapper;
}());
/// <reference path="../typings/declarations/event-types.ts"/>
/**
 * Todo: remove this file after pageChange is fully migrated to WalkMe's player
 */
var PageInfoCreator = /** @class */ (function () {
    function PageInfoCreator(logger, pageVisitIdProvider, eventHandler, pageLoadSync, eventsListener) {
        var _this = this;
        this.logger = logger;
        this.pageVisitIdProvider = pageVisitIdProvider;
        this.eventHandler = eventHandler;
        this.pageLoadSync = pageLoadSync;
        this.eventsListener = eventsListener;
        this.disabledByWalkmePlayer = AbraDi.getCtx().has('PageChangeEventSender');
        this.eventCallback = function () { return _this.distribute(); };
    }
    PageInfoCreator.prototype.distribute = function () {
        //todo: think about getting the trigger from the player, this will help us filter out stuff if needed
        this.eventHandler.initiate({
            event: {
                type: EventTypes.pageChange
            }
        });
    };
    PageInfoCreator.prototype.load = function () {
        if (this.disabledByWalkmePlayer) {
            return;
        }
        if (this.pageLoadSync.initializationData) {
            if (this.pageVisitIdProvider.get() !== this.pageLoadSync.initializationData.id) {
                this.logger.error('Data inconsistency in pageVisitId');
            }
            this.distribute();
        }
        this.eventsListener.on('PageVisitIdUpdated', this.eventCallback);
    };
    PageInfoCreator.prototype.unload = function () {
        if (this.disabledByWalkmePlayer) {
            return;
        }
        this.eventsListener.off('PageVisitIdUpdated', this.eventCallback);
    };
    return PageInfoCreator;
}());
AbraDi.registerClass('Abra:PageInfoCreator', PageInfoCreator, 'Abra:Logger, PageVisitIdProvider, Abra:EventHandler, Abra:PageLoadSync, EventsListener');
var ReferrerCollectionEnablement = /** @class */ (function () {
    function ReferrerCollectionEnablement() {
    }
    /**
     * Makes Walkme Player collect the `referrer` property.
     * see: $/player/lib/events/eventSenderContextDataProvider.js@shouldCollectReferrer
     */
    ReferrerCollectionEnablement.enable = function (ctx) {
        ctx.get('EventsListener').once('EventSenderContextDataProviderReferrerEnablement', function () { return true; });
    };
    return ReferrerCollectionEnablement;
}());
var UserEventBinder = /** @class */ (function () {
    function UserEventBinder(jQuery, compatibilityUtils) {
        this.jQuery = jQuery;
        this.compatibilityUtils = compatibilityUtils;
        this.initBindingFunctions();
    }
    UserEventBinder.prototype.initBindingFunctions = function () {
        var restoredFuncs;
        if (AbraDi.getCtx().has('NativeEventListenerFunctionsProvider')) {
            restoredFuncs = AbraDi.getCtx().get('NativeEventListenerFunctionsProvider').get();
        }
        restoredFuncs = restoredFuncs || {};
        this.addEventListener = restoredFuncs.addEventListener || document.addEventListener;
        this.removeEventListener = restoredFuncs.removeEventListener || document.removeEventListener;
    };
    UserEventBinder.prototype.bindEvents = function (document, events, callback) {
        var _this = this;
        var jqBind = function (event) { return _this.jQuery(document).on("".concat(event, ".abra"), callback); };
        var bindFunc = jqBind;
        if (this.compatibilityUtils.isCaptureBindCompatible()) {
            bindFunc = function (event) {
                try {
                    _this.addEventListener.apply(document, [event, callback, true]);
                }
                catch (ex) {
                    jqBind(event);
                }
            };
        }
        this.jQuery.each(events, function (index, event) {
            bindFunc(event);
        });
    };
    UserEventBinder.prototype.unbindEvents = function (document, events, callback) {
        var _this = this;
        var unbinedFunc = function (event) {
            try {
                _this.removeEventListener.apply(document, [event, callback, true]);
                _this.jQuery(document).off("".concat(event, ".abra"), callback);
            }
            catch (ex) {
                //ignored
            }
        };
        this.jQuery.each(events, function (index, event) {
            unbinedFunc(event);
        });
    };
    return UserEventBinder;
}());
AbraDi.registerClass('Abra:UserEventBinder', UserEventBinder, 'wmjQuery, Abra:CompatibilityUtils');
var UserEventCreator = /** @class */ (function () {
    function UserEventCreator(userEventListener, eventHandler, elementDescriptionGenerator, meaningfulElementGetter, jQuery, errorUtils, textValueCensorship, collectionIndicator, eventThrottle, trackedElementsFilter) {
        this.userEventListener = userEventListener;
        this.eventHandler = eventHandler;
        this.elementDescriptionGenerator = elementDescriptionGenerator;
        this.jQuery = jQuery;
        this.errorUtils = errorUtils;
        this.textValueCensorship = textValueCensorship;
        this.collectionIndicator = collectionIndicator;
        this.eventThrottle = eventThrottle;
        this.trackedElementsFilter = trackedElementsFilter;
        this.generateElementDescription = this.errorUtils.bindCall(this.elementDescriptionGenerator, this.elementDescriptionGenerator.generate, 'element capture');
        /**
         * Replace the element with a more "meaningful" element.
         */
        this.meaningfulElementGetter = this.errorUtils.bindCall(this, function (eventType, clickedElement) {
            if (eventType === 'mousedown' || eventType === 'dblclick') {
                return meaningfulElementGetter.get(clickedElement);
            }
        }, 'meaningful element');
        //todo: addIframeData?
    }
    UserEventCreator.prototype.createEvent = function (event) {
        if (!this.collectionIndicator.shouldCollect()) {
            return;
        }
        var clickedElement = event.getElement();
        var eventType = event.getEventType();
        if (!clickedElement || !this.shouldCreateEvent(clickedElement, eventType)) {
            return;
        }
        var meaningfulElement = this.meaningfulElementGetter(eventType, clickedElement);
        var misc;
        if (meaningfulElement) {
            misc = { type: meaningfulElement.type, climb: meaningfulElement.climb };
        }
        var element = meaningfulElement ? meaningfulElement.element : clickedElement;
        var _a = this.generateElementDescription(event, element), desc = _a.desc, textMisc = _a.misc, xpathParts = _a.xpathParts;
        if (textMisc) {
            misc = this.jQuery.extend(textMisc, misc);
        }
        var whitelistResult = xpathParts && this.trackedElementsFilter.shouldSend(event, desc, xpathParts);
        if (!whitelistResult || !whitelistResult.result) {
            return;
        }
        if (this.eventThrottle.shouldThrottle(desc, eventType)) {
            return;
        }
        this.eventHandler.initiate({
            event: {
                type: eventType,
                element: desc,
                misc: misc,
                reason: whitelistResult.reason
            },
            data: {
                event: event,
                censorshipData: this.textValueCensorship.createCensorshipData(event)
            }
        });
    };
    UserEventCreator.prototype.shouldCreateEvent = function (element, eventType) {
        if (this.jQuery.inArray(ElementUtils.getLowerCaseTagName(element), UserEventCreator.BlockedTags) !== -1) {
            return false;
        }
        if (this.jQuery.inArray(eventType, ['mousedown', 'dblclick']) !== -1 && element.textContent && element.textContent.length > UserEventCreator.MaxTextContent) {
            return false;
        }
        return true;
    };
    UserEventCreator.prototype.load = function () {
        var _this = this;
        this.registerId = this.userEventListener.register(function (event) { return _this.createEvent(event); }, ['change', MousedownWrapper.getEventNameForListening(), 'dblclick', 'submit']);
    };
    UserEventCreator.prototype.unload = function () {
        this.userEventListener.unregister(this.registerId);
    };
    UserEventCreator.BlockedTags = ['html', 'body'];
    UserEventCreator.MaxTextContent = 250;
    return UserEventCreator;
}());
AbraDi.registerClass('Abra:UserEventCreator', UserEventCreator, 'Abra:UserEventListener, Abra:EventHandler, Abra:ElementDescriptionGenerator, Abra:MeaningfulElementGetter, wmjQuery, Abra:ErrorUtils, Abra:TextValueCensorship, Abra:CollectionIndicator, Abra:EventThrottle, Abra:TrackedElementsFilter');
var UserEventListener = /** @class */ (function () {
    function UserEventListener(userEventBinder, frameBinder, errorUtils, userEventWrapper) {
        var _this = this;
        this.userEventBinder = userEventBinder;
        this.frameBinder = frameBinder;
        this.errorUtils = errorUtils;
        this.userEventWrapper = userEventWrapper;
        this.runningCallbackId = -1;
        this.distributeMap = {};
        this.unregisterData = {};
        this.enabled = true;
        this.mainCallback = function (event) { return _this.distribute(event); };
    }
    UserEventListener.prototype.register = function (callback, events) {
        var callbackId = ++this.runningCallbackId;
        var bindEventList = [];
        for (var i = 0; i < events.length; i++) {
            var eventName = events[i];
            if (this.distributeMap[eventName]) {
                this.distributeMap[eventName].push(callback);
            }
            else {
                this.distributeMap[eventName] = [callback];
                bindEventList.push(eventName);
            }
        }
        this.bind(bindEventList, this.mainCallback);
        this.unregisterData[callbackId] = {
            callback: callback,
            events: events
        };
        return callbackId;
    };
    UserEventListener.prototype.unregister = function (callbackId) {
        var item = this.unregisterData[callbackId];
        if (!item) {
            return false;
        }
        var unbindEventList = [];
        for (var i = 0; i < item.events.length; i++) {
            var eventName = item.events[i];
            var eventCallbacks = this.distributeMap[eventName];
            for (var j = 0; j < eventCallbacks.length; j++) {
                if (eventCallbacks[j] === item.callback) {
                    eventCallbacks.splice(j, 1); //remove from array
                    if (eventCallbacks.length === 0) {
                        unbindEventList.push(eventName);
                        delete this.distributeMap[eventName];
                    }
                    break;
                }
            }
        }
        this.unbind(unbindEventList, this.mainCallback);
        delete this.unregisterData[callbackId];
        return true;
    };
    UserEventListener.prototype.disable = function () {
        this.enabled = false;
    };
    UserEventListener.prototype.distribute = function (event) {
        var _this = this;
        if (this.enabled) {
            var callbacks_1 = this.distributeMap[event.type] || [];
            var _loop_2 = function (i) {
                this_2.errorUtils.wrapCallAndLog(function () { return callbacks_1[i](_this.userEventWrapper.wrap(event)); }, 'error distributing event', { trigger: event.type });
            };
            var this_2 = this;
            for (var i = 0; i < callbacks_1.length; i++) {
                _loop_2(i);
            }
        }
    };
    UserEventListener.prototype.bind = function (events, callback) {
        var _this = this;
        this.frameBinder.forEach(function (document) {
            _this.userEventBinder.bindEvents(document, events, callback);
        });
    };
    UserEventListener.prototype.unbind = function (events, callback) {
        var _this = this;
        this.frameBinder.forEach(function (document) {
            _this.userEventBinder.unbindEvents(document, events, callback);
        });
    };
    return UserEventListener;
}());
AbraDi.registerClass('Abra:UserEventListener', UserEventListener, 'Abra:UserEventBinder, Abra:FrameBinder, Abra:ErrorUtils, Abra:UserEventWrapper');
var UserEventWrapper = /** @class */ (function () {
    function UserEventWrapper(elementParentsGetter) {
        this.elementParentsGetter = elementParentsGetter;
    }
    UserEventWrapper.prototype.wrap = function (event) {
        return new WrappedUserEvent(this.elementParentsGetter, event);
    };
    return UserEventWrapper;
}());
var WrappedUserEvent = /** @class */ (function () {
    function WrappedUserEvent(elementParentsGetter, event) {
        this.elementParentsGetter = elementParentsGetter;
        this.event = event;
    }
    WrappedUserEvent.prototype.getParents = function () {
        this.parents = this.parents || this.elementParentsGetter.get(this.event);
        return this.parents;
    };
    WrappedUserEvent.prototype.getElement = function () {
        var parents = this.getParents();
        return parents[parents.length - 1];
    };
    WrappedUserEvent.prototype.getEvent = function () {
        return this.event;
    };
    WrappedUserEvent.prototype.getEventType = function () {
        return MousedownWrapper.wrapEventNameForSending(this.event.type);
    };
    return WrappedUserEvent;
}());
AbraDi.registerClass('Abra:UserEventWrapper', UserEventWrapper, 'Abra:ElementParentsGetter');
var CensorshipConditionsGetter = /** @class */ (function () {
    function CensorshipConditionsGetter(jQuery) {
        this.jQuery = jQuery;
    }
    CensorshipConditionsGetter.prototype.get = function () {
        var _this = this;
        return {
            classInElementTree: function (rule, parents) { return _this.classInElementTree(rule, parents); },
            idInElementTree: function (rule, parents) { return _this.idInElementTree(rule, parents); }
        };
    };
    CensorshipConditionsGetter.prototype.classInElementTree = function (rule, parents) {
        if (!rule.compiled) {
            rule.compiled = this.convertClassArrayToRegex(rule.values);
        }
        if (rule.values.length > 0) {
            for (var i = parents.length - 1; i >= 0; i--) {
                var className = this.jQuery(parents[i]).attr('class');
                if (className && rule.compiled.test(className)) {
                    return true;
                }
            }
        }
        return false;
    };
    CensorshipConditionsGetter.prototype.convertClassArrayToRegex = function (classes) {
        var regexString = [];
        this.jQuery.each(classes, function (i, className) {
            var escapedClassName = TextUtils.escapeRegExp(className);
            regexString.push("(^|[\\s\\uFEFF\\xA0]{1})".concat(escapedClassName, "($|[\\s\\uFEFF\\xA0]{1})"));
        });
        return new RegExp(regexString.join('|'), 'i');
    };
    CensorshipConditionsGetter.prototype.idInElementTree = function (rule, parents) {
        if (rule.values.length > 0 && this.isIdsExistInElementArray(parents, rule.values)) {
            return true;
        }
        return false;
    };
    CensorshipConditionsGetter.prototype.isIdsExistInElementArray = function (elements, ids) {
        for (var i = 0; i < elements.length; i++) {
            for (var j = 0; j < ids.length; j++) {
                if (elements[i].id === ids[j]) {
                    return true;
                }
            }
        }
        return false;
    };
    return CensorshipConditionsGetter;
}());
AbraDi.registerClass('Abra:CensorshipConditionsGetter', CensorshipConditionsGetter, 'wmjQuery');
var CensorshipMethodsProvider = /** @class */ (function () {
    function CensorshipMethodsProvider(jQuery, logger, censorshipConditionsGetter, dataCollectionSettings) {
        this.jQuery = jQuery;
        this.logger = logger;
        this.censorshipRules = this.getCensorshipRules(dataCollectionSettings.get());
        this.conditionDictionary = censorshipConditionsGetter.get();
    }
    CensorshipMethodsProvider.prototype.hasCensorshipRules = function () {
        return this.censorshipRules.length > 0;
    };
    CensorshipMethodsProvider.prototype.getCensorshipRules = function (dataCollectionSettings) {
        var censorshipRules = dataCollectionSettings && dataCollectionSettings.element && dataCollectionSettings.element.censorshipRules;
        return censorshipRules || [];
    };
    CensorshipMethodsProvider.prototype.provide = function (parents) {
        var methodsSet = {};
        for (var i = this.censorshipRules.length - 1; i >= 0; i--) {
            if (this.conditionDictionary[this.censorshipRules[i].type]) {
                if (this.conditionDictionary[this.censorshipRules[i].type](this.censorshipRules[i], parents)) {
                    var methodsToAdd = this.censorshipRules[i].methods;
                    if (methodsToAdd && methodsToAdd.length > 0) {
                        this.jQuery.each(methodsToAdd, function (i, methodName) {
                            methodsSet[methodName] = true;
                        });
                    }
                }
            }
            else {
                this.logger.error("censorship type does not exist: ".concat(this.censorshipRules[i].type));
            }
        }
        return methodsSet;
    };
    return CensorshipMethodsProvider;
}());
AbraDi.registerClass('Abra:CensorshipMethodsProvider', CensorshipMethodsProvider, 'wmjQuery, Abra:Logger, Abra:CensorshipConditionsGetter, Abra:DataCollectionSettingsWrapper');
var TextValueCensorship = /** @class */ (function () {
    function TextValueCensorship(privacyUtils) {
        this.privacyUtils = privacyUtils;
        this.propertiesToIgnore = ObjectUtils.convertArrayToObject(['xpath']);
    }
    TextValueCensorship.prototype.censorEvent = function (eventData) {
        var event = eventData.event;
        if (event.element) {
            //copied from NoKeyLoggerDataProvider, prevent logging keystrokes, need to understand if needed
            //todo: test
            if (this.privacyUtils.removeInputValues && (event.type === 'keypress' || event.type === 'change')) {
                var tagName = eventData.data && eventData.data.censorshipData && eventData.data.censorshipData.tagName;
                if (tagName !== 'select') {
                    event.element.value = undefined;
                    event.element.text = undefined;
                }
            }
            event.element = this.privacyUtils.filterCreditCard(event.element, this.propertiesToIgnore);
        }
    };
    TextValueCensorship.prototype.createCensorshipData = function (event) {
        return { tagName: ElementUtils.getLowerCaseTagName(event.getElement()) };
    };
    return TextValueCensorship;
}());
AbraDi.registerClass('Abra:TextValueCensorship', TextValueCensorship, 'Abra:PrivacyUtils');
var EventBuilderRegistrationType;
(function (EventBuilderRegistrationType) {
    EventBuilderRegistrationType[EventBuilderRegistrationType["Creating"] = 0] = "Creating";
    EventBuilderRegistrationType[EventBuilderRegistrationType["Altering"] = 1] = "Altering";
    EventBuilderRegistrationType[EventBuilderRegistrationType["Finalizing"] = 1000] = "Finalizing"; //censorship and stuff
})(EventBuilderRegistrationType || (EventBuilderRegistrationType = {}));
var EventBuilder = /** @class */ (function () {
    function EventBuilder(promiseManager, jQuery, logger) {
        this.promiseManager = promiseManager;
        this.jQuery = jQuery;
        this.logger = logger;
        this.providers = [];
        this.providersCount = 0;
    }
    /**
     *
     * @param event this will be sent
     * @param data this can be used by providers to enrich the event
     */
    EventBuilder.prototype.build = function (eventData) {
        var _this = this;
        if (this.providersCount === 0) {
            return this.promiseManager.resolve(eventData.event);
        }
        return this.jQuery(EventBuilder.ProvidersTypeOrder)
            .reduce(function (accumulatorPromise, providerType) {
            return accumulatorPromise.then(function () {
                return _this.runProvidersGroup(eventData, _this.providers[providerType]);
            });
        }, this.promiseManager.resolve())
            .then(function () {
            return eventData.event;
        });
    };
    EventBuilder.prototype.runProvidersGroup = function (eventData, providers) {
        var _this = this;
        var promises = [];
        if (providers) {
            var _loop_3 = function (providerIndex) {
                var provider = providers[providerIndex];
                try {
                    var providerResult = provider.handler(eventData);
                    if (providerResult) {
                        var promise = providerResult['catch'](function (error) {
                            _this.logger.error('failed to run provider', error, { providerName: provider.name, promise: true });
                        });
                        promises.push(promise);
                    }
                }
                catch (error) {
                    this_3.logger.error('failed to run provider', error, { providerName: provider.name });
                }
            };
            var this_3 = this;
            for (var providerIndex = 0; providerIndex < providers.length; providerIndex++) {
                _loop_3(providerIndex);
            }
        }
        return this.promiseManager.all(promises);
    };
    EventBuilder.prototype.register = function (providerName, handler, type) {
        if (type === void 0) { type = EventBuilderRegistrationType.Creating; }
        this.providers[type] = this.providers[type] || [];
        this.providers[type].push({
            name: providerName,
            handler: handler
        });
        this.providersCount++;
    };
    EventBuilder.ProvidersTypeOrder = [EventBuilderRegistrationType.Creating, EventBuilderRegistrationType.Altering, EventBuilderRegistrationType.Finalizing];
    return EventBuilder;
}());
AbraDi.registerClass('Abra:EventBuilder', EventBuilder, 'PromiseManager, wmjQuery, Abra:Logger');
var EventThrottle = /** @class */ (function () {
    function EventThrottle() {
        this.throttleTTL = 1000 * 60;
        this.cache = {};
    }
    EventThrottle.prototype.shouldThrottle = function (description, eventType) {
        var now = TimingUtils.now();
        if (this.existsInCache(description, eventType, now)) {
            return true;
        }
        else {
            this.saveToCache(description, eventType, now);
            return false;
        }
    };
    EventThrottle.prototype.existsInCache = function (description, eventType, now) {
        var cache = this.cache[eventType];
        return (cache &&
            now <= cache.time + this.throttleTTL &&
            description.xpath === cache.description.xpath &&
            description.value === cache.description.value &&
            description.text === cache.description.text &&
            description.label === cache.description.label);
    };
    EventThrottle.prototype.saveToCache = function (description, eventType, now) {
        var cachedElementDescription = {
            xpath: description.xpath,
            value: description.value,
            text: description.text,
            label: description.label
        };
        this.cache[eventType] = { description: cachedElementDescription, time: now };
    };
    /**
     * for tests
     */
    EventThrottle.prototype.setThrottleTTL = function (throttleTTL) {
        this.throttleTTL = throttleTTL;
    };
    return EventThrottle;
}());
AbraDi.registerClass('Abra:EventThrottle', EventThrottle);
var CompatibilityUtils = /** @class */ (function () {
    function CompatibilityUtils(walkme) {
        this.walkme = walkme;
    }
    CompatibilityUtils.prototype.isCaptureBindCompatible = function () {
        var hostData = this.walkme.getHostData();
        return hostData.isIE(9, 'gte') || !hostData.isIE();
    };
    return CompatibilityUtils;
}());
AbraDi.registerClass('Abra:CompatibilityUtils', CompatibilityUtils, 'Abra:Walkme');
var ErrorUtils = /** @class */ (function () {
    function ErrorUtils(promiseManager, jQuery, logger) {
        this.promiseManager = promiseManager;
        this.jQuery = jQuery;
        this.logger = logger;
    }
    /**
     * Wraps promise error, and add failPoint propery to it, allowing better logging.
     * The error is not handled, just stamped with failPoint
     */
    ErrorUtils.prototype.wrapCatch = function (extraData) {
        var _this_1 = this;
        return function (error) {
            return _this_1.promiseManager.reject(_this_1.wrapError(error, extraData));
        };
    };
    /**
     * Wraps callback error, and add failPoint propery to it, allowing better logging.
     * The error is not handled, just stamped with failPoint
     */
    ErrorUtils.prototype.wrapCall = function (callback, extraData) {
        try {
            return callback();
        }
        catch (error) {
            throw this.wrapError(error, extraData);
        }
    };
    ErrorUtils.prototype.bindCall = function (thisArg, func, extraData) {
        if (thisArg === void 0) { thisArg = null; }
        var _this = this; //eslint-disable-line @typescript-eslint/no-this-alias
        return function () {
            try {
                return func.apply(thisArg, arguments);
            }
            catch (error) {
                throw _this.wrapError(error, extraData);
            }
        };
    };
    /**
     * Calls a callback, if errored then catch the error and logs it
     * Should be used in places that otherwise won't handle  the error and it might get to the console
     */
    ErrorUtils.prototype.wrapCallAndLog = function (callback, message, extraData) {
        try {
            return callback();
        }
        catch (error) {
            error = this.wrapError(error, extraData);
            this.logger.error(message, error, error.extraData);
        }
    };
    ErrorUtils.prototype.wrapError = function (error, extraData) {
        var wrappedError = typeof error === 'string' ? { message: error } : error || { message: 'no error provided' }; //some rejects with a string
        extraData = typeof extraData !== 'string' ? extraData || {} : { failPoint: extraData };
        wrappedError.extraData = this.jQuery.extend(extraData, wrappedError.extraData);
        return wrappedError;
    };
    return ErrorUtils;
}());
AbraDi.registerClass('Abra:ErrorUtils', ErrorUtils, 'PromiseManager, wmjQuery, Abra:Logger');
/// <reference path="../abra-di.ts"/>
var EventsSenderWrapper = /** @class */ (function () {
    function EventsSenderWrapper(eventsSenderFactory) {
        this.eventsSenderFactory = eventsSenderFactory;
    }
    EventsSenderWrapper.prototype.init = function (key) {
        var config = {
            name: 'Abra',
            postEventAction: '/event/tell',
            storageConfig: { keyName: key, autoSave: false, expiresSeconds: 60 * 10 },
            stagingStorageConfig: { keyName: key + '-s', autoSave: false, expiresSeconds: 60 * 10 },
            failureStorageConfig: { keyName: key + '-f', autoSave: true, expiresSeconds: 60 * 60 * 24 },
            storageType: 'session',
            dataSender: 'accumulation',
            clientStorageManager: 'ArrayBuffer',
            clientStagingStorageManager: 'ArrayBuffer'
        };
        this.sender = this.eventsSenderFactory.generateAndGetEventsSender(config);
        this.sender.enable();
    };
    EventsSenderWrapper.prototype.disable = function () {
        if (this.sender) {
            this.sender.sleep();
            this.sender.disable();
            this.sender = undefined;
        }
    };
    EventsSenderWrapper.prototype.send = function (packet) {
        if (this.sender) {
            this.sender.send(packet);
        }
    };
    return EventsSenderWrapper;
}());
AbraDi.registerClass('Abra:EventsSenderWrapper', EventsSenderWrapper, 'EventsSenderFactory');
var FrameBinder = /** @class */ (function () {
    function FrameBinder(iFramesManager, uIChangeTracker, featuresManager, logger) {
        this.iFramesManager = iFramesManager;
        this.uIChangeTracker = uIChangeTracker;
        this.featuresManager = featuresManager;
        this.logger = logger;
    }
    FrameBinder.prototype.load = function () {
        var _this = this;
        if (!this.isSpa()) {
            /**
             * currently if `UIChangeTracker` is not initialized, the `mapIframes` function is not called
             * `mapIframes` function is filling the array that `foreachIframe` uses.
             * if we'll have an indication that an iframe might have been added to the page, we need to call `this.iFramesManager.remapTopIframes()`
             */
            this.iFramesManager.mapIframes();
        }
        if (this.featuresManager.isFeatureEnabled('Abra-ObserveIframes')) {
            try {
                this.iframeObserver = new IframeObserver(FrameBinder.IframeObserverMaxDrillDown);
                this.iframeObserver.observe(function () {
                    _this.iFramesManager.remapTopIframes();
                }, function (error) {
                    _this.logger.error('iframe mutation observer callback error', error);
                });
            }
            catch (error) {
                this.logger.error('error observing iframe mutations', error);
            }
        }
    };
    FrameBinder.prototype.unload = function () {
        if (this.iframeObserver) {
            this.iframeObserver.disconnect();
            this.iframeObserver = undefined;
        }
    };
    FrameBinder.prototype.forEach = function (callback) {
        var _this = this;
        callback(document);
        try {
            var callbackWrapper = function (iframeWrapper) {
                var doc = iframeWrapper.documentAccessible && _this.getDocument(iframeWrapper.iframe);
                if (doc) {
                    callback(doc);
                }
            };
            this.iFramesManager.foreachIframe(callbackWrapper, true);
            this.iFramesManager.onIframeLoad(callbackWrapper);
        }
        catch (ex) {
            // do nothing
        }
    };
    FrameBinder.prototype.getDocument = function (iframe) {
        try {
            var doc = iframe.contentWindow && iframe.contentWindow.document;
            doc = doc || (iframe.contentWindow && iframe.contentWindow.window && iframe.contentWindow.window.document);
            doc = doc || iframe.contentDocument;
            return doc;
        }
        catch (error) {
            // ignored
        }
    };
    FrameBinder.prototype.isSpa = function () {
        return this.uIChangeTracker.isActivated();
    };
    FrameBinder.IframeObserverMaxDrillDown = 3;
    return FrameBinder;
}());
AbraDi.registerClass('Abra:FrameBinder', FrameBinder, 'IFramesManager, UIChangeTracker, FeaturesManager, Abra:Logger');
var FrameUtils = /** @class */ (function () {
    function FrameUtils() {
    }
    FrameUtils.isIframe = function () {
        return top !== window;
    };
    FrameUtils.getTopTitle = function () {
        return top.window.document.title;
    };
    return FrameUtils;
}());
var FunctionUtils;
(function (FunctionUtils) {
    function allowOnce(func) {
        var wasCalled = false;
        return function () {
            if (!wasCalled) {
                wasCalled = true;
                return func();
            }
        };
    }
    FunctionUtils.allowOnce = allowOnce;
})(FunctionUtils || (FunctionUtils = {}));
var IframeObserver = /** @class */ (function () {
    function IframeObserver(maxDrillDown) {
        this.maxDrillDown = maxDrillDown;
    }
    IframeObserver.prototype.observe = function (callback, errorCallback) {
        var _this = this;
        var MutationObserverCtor = window.MutationObserver;
        if (MutationObserverCtor) {
            var config = { attributes: false, childList: true, subtree: true };
            this.observer = new MutationObserverCtor(function (mutations) {
                try {
                    if (_this.wasIframeAdded(mutations)) {
                        callback();
                    }
                }
                catch (error) {
                    errorCallback(error);
                }
            });
            this.observer.observe(document, config);
        }
    };
    IframeObserver.prototype.disconnect = function () {
        this.observer.disconnect();
    };
    IframeObserver.prototype.wasIframeAdded = function (mutations) {
        for (var i = 0; i < mutations.length; i++) {
            var mutation = mutations[i];
            if (mutation.type == 'childList') {
                var addedNodes = mutation.addedNodes;
                for (var j = 0; j < addedNodes.length; j++) {
                    if (IframeObserver.isParentNodeContainsIframe(addedNodes[j], this.maxDrillDown)) {
                        return true;
                    }
                }
            }
        }
        return false;
    };
    IframeObserver.isParentNodeContainsIframe = function (parentNode, currentDepth) {
        if (parentNode) {
            if (parentNode.nodeType === NodeType.Element || parentNode.nodeType === NodeType.DocumentType || parentNode.nodeType === NodeType.Document || parentNode.nodeType === NodeType.DocumentFragment) {
                if (parentNode.nodeName === 'IFRAME') {
                    return true;
                }
                var children = parentNode.children;
                if (currentDepth > 0 && children) {
                    for (var i = 0; i < children.length; i++) {
                        if (IframeObserver.isParentNodeContainsIframe(children[i], currentDepth - 1)) {
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    };
    return IframeObserver;
}());
var ObjectUtils;
(function (ObjectUtils) {
    function createKeyValuePair(key, value) {
        return {
            key: key,
            value: value
        };
    }
    ObjectUtils.createKeyValuePair = createKeyValuePair;
    function convertArrayToObject(array) {
        var retValue = {};
        for (var i = 0; i < array.length; i++) {
            retValue[array[i]] = true;
        }
        return retValue;
    }
    ObjectUtils.convertArrayToObject = convertArrayToObject;
    function convertArrayToValueIndexMap(array) {
        var retValue = {};
        for (var i = 0; i < array.length; i++) {
            retValue[array[i]] = i;
        }
        return retValue;
    }
    ObjectUtils.convertArrayToValueIndexMap = convertArrayToValueIndexMap;
})(ObjectUtils || (ObjectUtils = {}));
var PrivacyUtils = /** @class */ (function () {
    function PrivacyUtils(jQuery, censorshipMethodsProvider, elementParentsGetter, featuresManager, dataCollectionSettings) {
        this.jQuery = jQuery;
        this.censorshipMethodsProvider = censorshipMethodsProvider;
        this.elementParentsGetter = elementParentsGetter;
        this.featuresManager = featuresManager;
        this.dataCollectionSettings = dataCollectionSettings;
        this.allowedInputTypes = ['radio', 'checkbox', 'button', 'reset', 'submit'];
        this.removeInputValues = true;
        this.censorAllText = false;
        var settings = dataCollectionSettings.get();
        this.removeInputValues = (settings && settings.element && settings.element.inputValues) !== 'collect';
        if (!this.removeInputValues) {
            this.allowedInputTypes = jQuery.merge(this.allowedInputTypes, ['text', 'search', 'number', 'tel', 'email', 'url']);
        }
        if (featuresManager.isFeatureEnabled('UbtNoText')) {
            this.censorAllText = true;
        }
    }
    PrivacyUtils.prototype.isPrivacyUnsafeElementType = function (domElement) {
        if (domElement.nodeType === NodeType.Element && domElement.tagName) {
            //https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Editable_content
            if (this.removeInputValues && this.jQuery(domElement).attr('contenteditable') === 'true') {
                return true;
            }
            var tagName = ElementUtils.getLowerCaseTagName(domElement);
            if (this.removeInputValues && tagName === 'textarea') {
                return true;
            }
            else if (tagName === 'input') {
                var type = (domElement['type'] || '').toLowerCase();
                if (this.jQuery.inArray(type, this.allowedInputTypes) !== -1) {
                    return false;
                }
                return true;
            }
        }
        return false;
    };
    /**
     * Traverse whole object and filter CreditCard-like values
     */
    PrivacyUtils.prototype.filterCreditCard = function (value, ignoreSet) {
        if (ignoreSet === void 0) { ignoreSet = {}; }
        //todo: ask security (add iban? 9 digits?)
        if (value) {
            var valueType = typeof value;
            if (valueType === 'object') {
                if (typeof value.length === 'number' && !value.propertyIsEnumerable('length')) {
                    //array
                    for (var i = value.length - 1; i >= 0; i--) {
                        value[i] = this.filterCreditCard(value[i]);
                    }
                }
                else {
                    //object
                    for (var key in value) {
                        if (value.hasOwnProperty(key) && !ignoreSet[key]) {
                            value[key] = this.filterCreditCard(value[key]);
                        }
                    }
                }
            }
            else if (valueType === 'string' && value.length >= 12) {
                if (PrivacyUtils.isCreditCard(value)) {
                    return null;
                }
            }
            else if (valueType === 'number' && value >= 99999999999) {
                //filter if over 12 digits
                return null;
            }
        }
        return value;
    };
    PrivacyUtils.isCreditCard = function (value) {
        return value.length >= 12 && this.creditCardRegex.test(value); //check if credit card if over 12 digits
    };
    PrivacyUtils.prototype.shouldCensorText = function (parents, element) {
        if (this.censorAllText) {
            return true;
        }
        if (this.censorshipMethodsProvider.hasCensorshipRules()) {
            parents = parents || this.elementParentsGetter.getFromElement(element);
            return this.censorshipMethodsProvider.provide(parents)['removeTextValues']; //todo: extract type
        }
        return false;
    };
    PrivacyUtils.creditCardRegex = /(?:[\s\xA0-]{0,5}\d{4,}){3}/;
    return PrivacyUtils;
}());
AbraDi.registerClass('Abra:PrivacyUtils', PrivacyUtils, 'wmjQuery, Abra:CensorshipMethodsProvider, Abra:ElementParentsGetter, FeaturesManager, Abra:DataCollectionSettingsWrapper');
var StatisticsUtils = /** @class */ (function () {
    function StatisticsUtils() {
    }
    StatisticsUtils.prototype.gamble = function (chance) {
        return Math.random() <= chance;
    };
    return StatisticsUtils;
}());
AbraDi.registerClass('Abra:StatisticsUtils', StatisticsUtils);
/**
 * A wrapper for the Walkme-Player JSON
 */
var WalkmeJsonWrap = /** @class */ (function () {
    function WalkmeJsonWrap(walkmeCommonUtils) {
        this.walkmeCommonUtils = walkmeCommonUtils;
    }
    WalkmeJsonWrap.prototype.stringify = function (value) {
        return this.walkmeCommonUtils.toJSON(value);
    };
    WalkmeJsonWrap.prototype.parse = function (text) {
        return this.walkmeCommonUtils.secureEvalJSON(text);
    };
    return WalkmeJsonWrap;
}());
AbraDi.registerClass('Abra:JSON', WalkmeJsonWrap, 'CommonUtils');
/**
 * This was previously named "session_id"
 * todo: we need to figure out if we need to create new window id for each new walkme session.
 * (we did it for the session_id, this might be unnecessary now)
 */
var WindowIdGetter = /** @class */ (function () {
    function WindowIdGetter(storageManager, promiseManager, guidGenerator, sessionPersister, jQuery) {
        var _this = this;
        this.storageManager = storageManager;
        this.promiseManager = promiseManager;
        this.guidGenerator = guidGenerator;
        this.sessionPersister = sessionPersister;
        this.jQuery = jQuery;
        this.libCallback = function () { return _this.createNew(); };
    }
    WindowIdGetter.prototype.load = function () {
        this.jQuery(AbraMain.WalkmeInternals).on(WindowIdGetter.LibNewSessionEventName, this.libCallback);
        /**
         * If we have new Walkme session, we change the windowId
         */
        if (this.sessionPersister.isNewSession()) {
            return this.promiseManager.resolve(this.createNew());
        }
        return this.getOrCreate();
    };
    WindowIdGetter.prototype.unload = function () {
        this.jQuery(AbraMain.WalkmeInternals).off(WindowIdGetter.LibNewSessionEventName, this.libCallback);
    };
    WindowIdGetter.prototype.getOrCreate = function () {
        var _this = this;
        return this.get().then(function (windowId) {
            return windowId || _this.createNew();
        });
    };
    WindowIdGetter.prototype.get = function () {
        var _this = this;
        return new this.promiseManager.Promise(function (resolve) {
            _this.storageManager.getStorage().getData(WindowIdGetter.WindowIdStorageKey, undefined, undefined, function (windowId) {
                resolve(windowId);
            });
        });
    };
    WindowIdGetter.prototype.createNew = function () {
        var windowId = this.guidGenerator.generateGuid(true);
        this.storageManager.getStorage().saveData(WindowIdGetter.WindowIdStorageKey, windowId);
        return windowId;
    };
    WindowIdGetter.WindowIdStorageKey = '__WMML_SESSION_ID__';
    WindowIdGetter.LibNewSessionEventName = 'NewSession';
    return WindowIdGetter;
}());
AbraDi.registerClass('Abra:WindowIdGetter', WindowIdGetter, 'Abra:StorageManager, PromiseManager, GuidGenerator, SessionPersister, wmjQuery');
/**
 * A wrapper for the Walkme-Player Logger ("CustomerLog")
 * doc: https://knowledge.walkme.com/display/RD/Customer+Log
 * enable client logs with: WalkMeAPI.log.enable(5).track('Abra');
 */
var WalkmeLoggerWrap = /** @class */ (function () {
    function WalkmeLoggerWrap(walkmeLogger) {
        this.customerLog = walkmeLogger.wrapCustomerLog('Abra');
    }
    WalkmeLoggerWrap.prototype.error = function (message, error) {
        this.logError(1, message, error);
    };
    WalkmeLoggerWrap.prototype.warn = function (message, error) {
        this.logError(2, message, error);
    };
    WalkmeLoggerWrap.prototype.info = function (message) {
        this.log(3, message);
    };
    WalkmeLoggerWrap.prototype.debug = function (message) {
        this.log(4, message);
    };
    WalkmeLoggerWrap.prototype.logError = function (level, message, error) {
        var errorString = (error && error.stack) || (error && error.length ? error : '');
        this.customerLog("".concat(message, ": ").concat(errorString), level);
    };
    WalkmeLoggerWrap.prototype.log = function (level, message) {
        this.customerLog(message, level);
    };
    return WalkmeLoggerWrap;
}());
/// <reference path="./walkme-logger-wrap.ts"/>
var Logger = /** @class */ (function (_super) {
    __extends(Logger, _super);
    function Logger(serverLogger, ubtPerformance, walkmeLogger, walkMeInfo, featuresManager, wmjQuery) {
        var _this = _super.call(this, walkmeLogger) || this;
        _this.serverLogger = serverLogger;
        _this.ubtPerformance = ubtPerformance;
        _this.walkmeLogger = walkmeLogger;
        _this.walkMeInfo = walkMeInfo;
        _this.featuresManager = featuresManager;
        _this.wmjQuery = wmjQuery;
        _this.enableServerLogger = true;
        try {
            _this.libVersion = walkMeInfo.getLibVersion();
            if (featuresManager.isFeatureEnabled('UbtReduceServerLogs') && Math.random() > 0.05) {
                _this.enableServerLogger = false;
            }
            if (AbraDi.getCtx().has('CleanObject')) {
                _this.cleanObject = AbraDi.getCtx().get('CleanObject');
            }
        }
        catch (error) {
            // ignored
        }
        return _this;
    }
    Logger.registerLogger = function (ctx) {
        var AbraLoggerCtxName = 'Abra:Logger';
        if (!ctx.has(AbraLoggerCtxName)) {
            ctx.register(AbraLoggerCtxName).asCtor(Logger).dependencies('EventSenderErrorLogger, Abra:UbtPerformance, Logger, WalkMeInfo, FeaturesManager, wmjQuery');
        }
        return ctx.get(AbraLoggerCtxName);
    };
    Logger.prototype.error = function (message, error, extraData) {
        if (extraData === void 0) { extraData = {}; }
        extraData.app = AbraMain.App.name;
        extraData.version = AbraMain.App.version;
        extraData.rev = AbraMain.App.rev;
        extraData.libVersion = this.libVersion;
        if (error) {
            if (typeof error === 'string') {
                extraData.errorMsg = error;
            }
            else if (error.message || error.stack || error.extraData) {
                extraData.errorMsg = error.message;
                extraData.stack = error.stack;
                extraData = error.extraData ? this.wmjQuery.extend(extraData, error.extraData) : extraData;
            }
        }
        if (extraData.errorMsg === undefined && error !== undefined) {
            extraData.errorMsg = 'could not get errorMsg, error type is "' + typeof error + '"';
        }
        if (this.cleanObject) {
            extraData = this.cleanObject(extraData);
        }
        this.enableServerLogger && this.serverLogger.logError(message, extraData);
        _super.prototype.error.call(this, message, error);
    };
    Logger.prototype.perf = function (key) {
        return this.ubtPerformance.perf(key);
    };
    return Logger;
}(WalkmeLoggerWrap));
var UbtPerformance = /** @class */ (function () {
    function UbtPerformance(performanceLogger) {
        this.performanceLogger = performanceLogger;
        this.perfOptions = this.createPerfOptions();
    }
    UbtPerformance.prototype.createPerfOptions = function () {
        return {
            extraData: {
                app: AbraMain.App.name,
                version: AbraMain.App.version,
                gitRevision: AbraMain.App.rev
            }
        };
    };
    UbtPerformance.prototype.perf = function (key) {
        var serverPerf = this.performanceLogger.measure("".concat(AbraMain.App.name, "-").concat(key), this.perfOptions);
        return {
            stop: function () { return serverPerf && serverPerf.stop(); },
            step: function (name) { } //eslint-disable-line @typescript-eslint/no-empty-function
        };
    };
    return UbtPerformance;
}());
var DataCollectionSettingsWrapper = /** @class */ (function () {
    function DataCollectionSettingsWrapper(logger, jQuery, statisticsUtils) {
        this.logger = logger;
        this.settings = {};
        if (AbraDi.getCtx().has('DataCollectionSettings')) {
            var settings = AbraDi.getCtx().get('DataCollectionSettings').get();
            this.settings = jQuery.extend(true, {}, settings);
            statisticsUtils.gamble(1 / 50) && this.validateSettings(this.settings);
        }
        this.settings.element = this.settings.element || {};
        this.applyCensorshipDefaults();
        this.applyXpathDefaults();
    }
    DataCollectionSettingsWrapper.prototype.validateSettings = function (rawSettings) {
        if (!(rawSettings.element || rawSettings.page || rawSettings.loading)) {
            this.logger.error('Collection settings are missing, using default');
        }
    };
    DataCollectionSettingsWrapper.prototype.applyCensorshipDefaults = function () {
        this.settings.element.censorshipRules = this.settings.element.censorshipRules || [];
        this.settings.element.censorshipRules.push({
            type: 'classInElementTree',
            values: ['jaco-hide', 'wm-hide'],
            methods: ['removeTextValues']
        });
    };
    DataCollectionSettingsWrapper.prototype.applyXpathDefaults = function () {
        this.settings.element.xpath = this.settings.element.xpath || {};
        this.settings.element.xpath.classMaxLength = this.settings.element.xpath.classMaxLength || 35;
        this.settings.element.xpath.idMaxLength = this.settings.element.xpath.idMaxLength || 40;
        this.settings.element.xpath.attributeMaxLength = this.settings.element.xpath.attributeMaxLength || 300;
        this.settings.element.xpath.xpathMaxLength = this.settings.element.xpath.xpathMaxLength || 3000;
    };
    DataCollectionSettingsWrapper.prototype.get = function () {
        return this.settings;
    };
    return DataCollectionSettingsWrapper;
}());
AbraDi.registerClass('Abra:DataCollectionSettingsWrapper', DataCollectionSettingsWrapper, 'Abra:Logger, wmjQuery, Abra:StatisticsUtils');
/* This code should be part of the data-lib */
var UrlCensorshipController = /** @class */ (function () {
    function UrlCensorshipController(dataCollectionSettings, featuresManager) {
        this.dataCollectionSettings = dataCollectionSettings;
        this.featuresManager = featuresManager;
        this.result = undefined;
    }
    UrlCensorshipController.prototype.shouldCensorUrl = function () {
        if (this.result === undefined) {
            this.result = this.checkCollectionSettings() || this.checkLegacyFlags();
        }
        return this.result;
    };
    UrlCensorshipController.prototype.checkCollectionSettings = function () {
        var collectionSettins = this.dataCollectionSettings.get();
        return !!(collectionSettins && collectionSettins.page && collectionSettins.page.censorship && collectionSettins.page.censorship.url);
    };
    UrlCensorshipController.prototype.checkLegacyFlags = function () {
        return this.featuresManager.isFeatureEnabled('disableWidgetOpenFullUrl') || this.featuresManager.isFeatureEnabled('dontSendPageUrl');
    };
    return UrlCensorshipController;
}());
AbraDi.registerClass('Abra:UrlCensorshipController', UrlCensorshipController, 'Abra:DataCollectionSettingsWrapper, FeaturesManager');
var LibStorageWrapper = /** @class */ (function () {
    function LibStorageWrapper(storage) {
        this.storage = storage;
    }
    LibStorageWrapper.prototype.getData = function (key, defaultValue, userGuid, callback) {
        this.storage.sessionGetData(key, defaultValue, userGuid, callback);
    };
    LibStorageWrapper.prototype.saveData = function (key, value) {
        this.storage.sessionSetData(key, value);
    };
    return LibStorageWrapper;
}());
var SessionStorageWrapper = /** @class */ (function () {
    function SessionStorageWrapper() {
    }
    SessionStorageWrapper.prototype.getData = function (key, defaultValue, userGuid, callback) {
        callback(sessionStorage[key] || defaultValue);
    };
    SessionStorageWrapper.prototype.saveData = function (key, value) {
        sessionStorage[key] = value;
    };
    return SessionStorageWrapper;
}());
var UbtStorageManager = /** @class */ (function () {
    function UbtStorageManager(walkme) {
        this.walkme = walkme;
        if (this.isCrossDomain()) {
            this.storage = new LibStorageWrapper(this.walkme.getClientStorageManager());
        }
        else {
            this.storage = new SessionStorageWrapper();
        }
    }
    UbtStorageManager.prototype.isCrossDomain = function () {
        var storageType = this.walkme.getStorageType();
        if (storageType.indexOf('crossdomain') !== -1) {
            return true;
        }
        return false;
    };
    UbtStorageManager.prototype.getStorage = function () {
        return this.storage;
    };
    return UbtStorageManager;
}());
AbraDi.registerClass('Abra:StorageManager', UbtStorageManager, 'Abra:Walkme');
var StorageSynchronizer = /** @class */ (function () {
    function StorageSynchronizer(promiseManager, storageManager) {
        this.promiseManager = promiseManager;
        this.storageManager = storageManager;
    }
    // TODO: fix this - it will not work on page refresh (will not send events saved in storage from iframes)
    StorageSynchronizer.prototype.getStorageKey = function () {
        var _this = this;
        return new this.promiseManager.Promise(function (resolve) {
            // this prevents iframes from using the same storage key and causing conflicts
            if (FrameUtils.isIframe()) {
                _this.storageManager.getStorage().getData(StorageSynchronizer.StorageNumberKey, 1, undefined, function (storageNum) {
                    _this.storageManager.getStorage().saveData(StorageSynchronizer.StorageNumberKey, Number(storageNum) + 1);
                    resolve('wm-dc-storage' + storageNum);
                });
            }
            else {
                resolve('wm-dc-storage' + 0);
            }
        });
    };
    StorageSynchronizer.StorageNumberKey = '__WMML_STORAGE_NUM__';
    return StorageSynchronizer;
}());
AbraDi.registerClass('Abra:StorageSynchronizer', StorageSynchronizer, 'PromiseManager, Abra:StorageManager');
var EventPropertiesMaxLength = /** @class */ (function () {
    function EventPropertiesMaxLength() {
    }
    EventPropertiesMaxLength.Value = {
        element: {
            autoQuery: 500,
            text: 500,
            value: 120
        },
        ctx: {
            topTitle: 512
        }
    };
    return EventPropertiesMaxLength;
}());
var StringBuilder = /** @class */ (function () {
    function StringBuilder() {
        this.buffer = [];
    }
    StringBuilder.prototype.append = function (data) {
        this.buffer.push(data);
    };
    StringBuilder.prototype.toString = function () {
        var text = this.buffer.join('');
        return text;
    };
    return StringBuilder;
}());
/**
 * https://stackoverflow.com/questions/31986614/what-is-a-surrogate-pair
 */
var SurrogatePairsUtils = /** @class */ (function () {
    function SurrogatePairsUtils() {
    }
    SurrogatePairsUtils.escapeSurrogatePairs = function (str) {
        if (!SurrogatePairsUtils.containsSurrogatePair(str))
            return str;
        // Loop over each code unit in the string and escape it
        var index = -1;
        var length = str.length;
        var result = new StringBuilder();
        while (++index < length) {
            var character = str.charAt(index);
            if (!/[\uD800-\uDBFF]/.test(character) && !/[\uDC00-\uDFFF]/.test(character)) {
                result.append(character);
            }
            else {
                result.append(SurrogatePairsUtils.escapeChar(character));
            }
        }
        return result.toString();
    };
    SurrogatePairsUtils.containsSurrogatePair = function (str) {
        var surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
        return surrogatePairs.exec(str) != null;
    };
    SurrogatePairsUtils.escapeChar = function (pchar) {
        var charCode = pchar.charCodeAt(0);
        var hexadecimal = charCode.toString(16).toUpperCase();
        var longhand = hexadecimal.length > 2;
        var escaped = '\\' + (longhand ? 'u' : 'x') + ('0000' + hexadecimal).slice(longhand ? -4 : -2);
        return escaped;
    };
    return SurrogatePairsUtils;
}());
var TextUtils = /** @class */ (function () {
    function TextUtils(privacyUtils) {
        this.privacyUtils = privacyUtils;
    }
    TextUtils.substringObject = function (config, value) {
        if (config && value && typeof value === 'object') {
            for (var key in config) {
                if (config.hasOwnProperty(key) && value.hasOwnProperty(key)) {
                    var propType = typeof value[key];
                    if (propType === 'string' && typeof config[key] === 'number') {
                        value[key] = value[key].substring(0, config[key]);
                    }
                    else if (propType === 'object') {
                        value[key] = TextUtils.substringObject(config[key], value[key]);
                    }
                }
            }
        }
        return value;
    };
    TextUtils.trim = function (str, maxStringLength) {
        if (maxStringLength !== undefined) {
            return str
                .replace(/^[\s\uFEFF\xA0]+/g, '')
                .substr(0, maxStringLength)
                .replace(/[\s\uFEFF\xA0]+$/g, '');
        }
        return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    };
    /* Handles new-line, carrige-return, tab, space */
    TextUtils.removeExtraSpaces = function (str) {
        var whiteSpaceRegex = /\s+/g;
        return str.replace(whiteSpaceRegex, ' ').trim();
    };
    TextUtils.extractElementText = function (domElement) {
        var text = domElement.nodeValue;
        if (text) {
            text = TextUtils.removeExtraSpaces(text);
            text = SurrogatePairsUtils.escapeSurrogatePairs(text);
        }
        return text;
    };
    TextUtils.prototype.collectText = function (domElement, options) {
        var context = { textBuffer: [], totalLength: 0, active: true };
        this.collectTextInner(domElement, options, context);
        var retValue = context.textBuffer.join('\n'); //flat array to string
        if (options.maxLength !== undefined && retValue.length > options.maxLength) {
            retValue = retValue.substring(0, options.maxLength);
        }
        return retValue;
    };
    TextUtils.prototype.collectTextInner = function (domElement, options, context) {
        if (domElement && !this.privacyUtils.isPrivacyUnsafeElementType(domElement)) {
            if (ElementUtils.isElementTextNode(domElement)) {
                var nodeText = TextUtils.extractElementText(domElement);
                if (nodeText && nodeText.length !== 0) {
                    if (options.maxNodeTextLength !== undefined) {
                        nodeText = nodeText.substring(0, options.maxNodeTextLength);
                    }
                    var textFilteredOut = false;
                    if (options.textFilterCb !== undefined) {
                        textFilteredOut = options.textFilterCb(nodeText, domElement.nodeValue) !== true;
                    }
                    if (textFilteredOut === false) {
                        context.textBuffer.push(nodeText);
                        context.totalLength += nodeText.length;
                        if ((options.maxLength !== undefined && context.totalLength >= options.maxLength) || options.collectFirstOnly === true) {
                            context.active = false;
                        }
                    }
                }
            }
            var ignoreElementChildNodes = false;
            if (options.includeNonVisual !== true) {
                ignoreElementChildNodes = ElementUtils.isVisualDomElement(domElement) === false;
            }
            if (domElement.childNodes && context.active && ignoreElementChildNodes === false) {
                for (var i = 0, l = domElement.childNodes.length; i < l && context.active; i++) {
                    this.collectTextInner(domElement.childNodes[i], options, context);
                }
            }
        }
    };
    //https://stackoverflow.com/questions/3115150/how-to-escape-regular-expression-special-characters-using-javascript
    TextUtils.escapeRegExp = function (text) {
        return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    };
    TextUtils.escapeJQuerySelectorAttributeValue = function (text) {
        return text.replace(this.escapeJQuerySelectorAttributeValueRegex, '\\"');
    };
    TextUtils.escapeJQuerySelectorAttributeValueRegex = /"/g;
    return TextUtils;
}());
AbraDi.registerClass('Abra:TextUtils', TextUtils, 'Abra:PrivacyUtils');
var TimingUtils = /** @class */ (function () {
    function TimingUtils(timerManager, errorUtils) {
        this.timerManager = timerManager;
        this.errorUtils = errorUtils;
        this.enabled = true;
    }
    TimingUtils.prototype.clearTimeout = function (timer) {
        if (timer) {
            timer.clear();
        }
    };
    TimingUtils.prototype.disable = function () {
        this.enabled = false;
    };
    /**
     * cleared on `removeWalkme`
     */
    TimingUtils.prototype.setTimeout = function (callback, time) {
        var _this = this;
        if (this.enabled) {
            return this.timerManager.libSetTimeout(function () { return _this.enabled && _this.errorUtils.wrapCallAndLog(callback, 'timeout'); }, time);
        }
    };
    TimingUtils.prototype.createOnNextEventLoopFunc = function (callback) {
        var _this = this;
        return function () {
            _this.timerManager.libSetTimeout(callback, 0);
        };
    };
    /**
     * Alternative for the non-ie8-compatible Date.Now()
     */
    TimingUtils.now = function () {
        return new Date().getTime();
    };
    TimingUtils.getTimingData = function () {
        // see: https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming
        var perf = window.performance;
        var timing = perf && perf.timing;
        if (timing) {
            var navStart = timing.navigationStart;
            var loadEnd = timing.loadEventEnd;
            return {
                navStart: navStart,
                loadTime: loadEnd - navStart
            };
        }
    };
    return TimingUtils;
}());
AbraDi.registerClass('Abra:TimingUtils', TimingUtils, 'TimerManager, Abra:ErrorUtils');
var ReusableTimerFactory = /** @class */ (function () {
    function ReusableTimerFactory(timingUtils) {
        this.timingUtils = timingUtils;
    }
    ReusableTimerFactory.prototype.create = function (callback, delay) {
        return new ReusableTimer(this.timingUtils, callback, delay);
    };
    return ReusableTimerFactory;
}());
AbraDi.registerClass('Abra:ReusableTimerFactory', ReusableTimerFactory, 'Abra:TimingUtils');
var ReusableTimer = /** @class */ (function () {
    function ReusableTimer(timingUtils, callback, delay) {
        this.timingUtils = timingUtils;
        this.callback = callback;
        this.delay = delay;
    }
    ReusableTimer.prototype.clear = function () {
        if (this.timerHandle) {
            this.timingUtils.clearTimeout(this.timerHandle);
            this.timerHandle = undefined;
        }
    };
    ReusableTimer.prototype.set = function () {
        this.clear();
        this.timerHandle = this.timingUtils.setTimeout(this.callback, this.delay);
    };
    return ReusableTimer;
}());
var NodeType;
(function (NodeType) {
    NodeType[NodeType["Element"] = 1] = "Element";
    NodeType[NodeType["Text"] = 3] = "Text";
    NodeType[NodeType["CDATASection"] = 4] = "CDATASection";
    NodeType[NodeType["DocumentType"] = 9] = "DocumentType";
    NodeType[NodeType["Document"] = 10] = "Document";
    NodeType[NodeType["DocumentFragment"] = 11] = "DocumentFragment";
})(NodeType || (NodeType = {}));
/**
 * Important: do not change the existing values, this enum is saved into druid / presto
 */
var EventReason;
(function (EventReason) {
    EventReason[EventReason["TrackedEvent"] = 1] = "TrackedEvent";
    EventReason[EventReason["Sampling"] = 2] = "Sampling";
})(EventReason || (EventReason = {}));
var EventSampler = /** @class */ (function () {
    function EventSampler(statisticsUtils, insightsConfigurationGetter) {
        this.statisticsUtils = statisticsUtils;
        this.isEnabledFlag = false;
        this.chance = 0;
        var configuration = insightsConfigurationGetter.getSync();
        var sampleRate;
        if (configuration && configuration.trackedEventsWhitelist && configuration.trackedEventsWhitelist.settings) {
            sampleRate = configuration.trackedEventsWhitelist.settings.sampleRate;
        }
        if (typeof sampleRate === 'number' && sampleRate > 0) {
            this.chance = 1 / sampleRate;
            this.isEnabledFlag = true;
        }
    }
    EventSampler.prototype.shouldSample = function () {
        return this.isEnabledFlag && this.statisticsUtils.gamble(this.chance);
    };
    EventSampler.prototype.isEnabled = function () {
        return this.isEnabledFlag;
    };
    return EventSampler;
}());
AbraDi.registerClass('Abra:EventSampler', EventSampler, 'Abra:StatisticsUtils, Abra:InsightsConfigurationGetter');
/// <reference path="../typings/events/event-reason.ts"/>
var TrackedElementsFilter = /** @class */ (function () {
    function TrackedElementsFilter(jQuery, trackedElementsGetter, eventSampler, logger) {
        this.jQuery = jQuery;
        this.trackedElementsGetter = trackedElementsGetter;
        this.eventSampler = eventSampler;
        this.logger = logger;
    }
    TrackedElementsFilter.prototype.shouldSend = function (event, desc, xpathParts) {
        var eventType = event.getEventType();
        if (eventType !== 'mousedown' && eventType !== 'change' && eventType !== 'dblclick') {
            return TrackedElementsFilter.Results.Collect;
        }
        var whitelist = this.trackedElementsGetter.get(eventType);
        if (!whitelist && !this.eventSampler.isEnabled()) {
            return TrackedElementsFilter.Results.Collect;
        }
        if (whitelist && this.isWhitelistConditionsApply(event, desc, xpathParts, whitelist)) {
            return TrackedElementsFilter.Results.TrackedEvent;
        }
        else if (this.eventSampler.shouldSample()) {
            return TrackedElementsFilter.Results.Sampling;
        }
        return TrackedElementsFilter.Results.DoNotCollect;
    };
    TrackedElementsFilter.prototype.isWhitelistConditionsApply = function (event, desc, xpathParts, whitelist) {
        SelectorsOptimizator.prepareOptimizationObject(whitelist);
        var wlPerf = this.logger.perf('whitelist filter');
        wlPerf.step('ids and classes');
        for (var i = xpathParts.length - 1; i >= 0; i--) {
            var part = xpathParts[i];
            if (part.id) {
                if (whitelist.ids && whitelist.ids[part.id]) {
                    return true;
                }
                if (whitelist._selectorsOptimization && whitelist._selectorsOptimization.usedInSelectors.ids && whitelist._selectorsOptimization.usedInSelectors.ids[part.id] !== undefined) {
                    whitelist._selectorsOptimization.existInXpath.ids[whitelist._selectorsOptimization.usedInSelectors.ids[part.id]] = true;
                }
            }
            for (var j = 0; j < part.classes.length; j++) {
                if (whitelist.classes && whitelist.classes[part.classes[j]]) {
                    return true;
                }
                if (whitelist._selectorsOptimization && whitelist._selectorsOptimization.usedInSelectors.classes && whitelist._selectorsOptimization.usedInSelectors.classes[part.classes[j]] !== undefined) {
                    whitelist._selectorsOptimization.existInXpath.classes[whitelist._selectorsOptimization.usedInSelectors.classes[part.classes[j]]] = true;
                }
            }
            if (whitelist._selectorsOptimization && whitelist._selectorsOptimization.usedInSelectors.tags && whitelist._selectorsOptimization.usedInSelectors.tags[part.tagName] !== undefined) {
                whitelist._selectorsOptimization.existInXpath.tags[whitelist._selectorsOptimization.usedInSelectors.tags[part.tagName]] = true;
            }
            if (whitelist._selectorsOptimization && whitelist._selectorsOptimization.usedInSelectors.attributes) {
                for (var j = 0; j < part.attributes.length; j++) {
                    if (whitelist._selectorsOptimization.usedInSelectors.attributes[part.attributes[j].key] !== undefined) {
                        whitelist._selectorsOptimization.existInXpath.attributes[whitelist._selectorsOptimization.usedInSelectors.attributes[part.attributes[j].key]] = true;
                    }
                }
            }
        }
        wlPerf.step('text');
        if (desc && desc.text && whitelist.text && whitelist.text[desc.text]) {
            return true;
        }
        wlPerf.step('labels');
        if (desc && desc.label && whitelist.labels && whitelist.labels[desc.label]) {
            return true;
        }
        wlPerf.step('selectors');
        if (whitelist.selectors) {
            var parents = void 0;
            for (var i = 0; i < whitelist.selectors.length; i++) {
                if (whitelist.selectors[i] && SelectorsOptimizator.shouldRunSelector(whitelist, i)) {
                    parents = parents || this.prepareParents(event.getParents());
                    try {
                        for (var j = parents.length - 1; j >= 0; j--) {
                            if (parents[j].is(whitelist.selectors[i])) {
                                return true;
                            }
                        }
                    }
                    catch (error) {
                        whitelist.selectors[i] = null; // remove bad selectors
                    }
                }
            }
        }
        wlPerf.stop();
        return false;
    };
    TrackedElementsFilter.prototype.prepareParents = function (parents) {
        var _this = this;
        return this.jQuery(parents.slice(-TrackedElementsFilter.SelectorsMaxParents))
            .map(function (index, element) { return _this.jQuery(element); })
            .get();
    };
    TrackedElementsFilter.SelectorsMaxParents = 50;
    TrackedElementsFilter.Results = {
        DoNotCollect: { result: false },
        Collect: { result: true },
        TrackedEvent: { result: true, reason: EventReason.TrackedEvent },
        Sampling: { result: true, reason: EventReason.Sampling }
    };
    return TrackedElementsFilter;
}());
AbraDi.registerClass('Abra:TrackedElementsFilter', TrackedElementsFilter, 'wmjQuery, Abra:TrackedElementsGetter, Abra:EventSampler, Abra:Logger');
var TrackedElementsGetter = /** @class */ (function () {
    function TrackedElementsGetter(insightsConfigurationGetter) {
        this.insightsConfigurationGetter = insightsConfigurationGetter;
    }
    TrackedElementsGetter.prototype.get = function (eventType) {
        var configuration = this.insightsConfigurationGetter.getSync();
        if (configuration) {
            var whitelist = configuration.trackedEventsWhitelist;
            if (whitelist) {
                switch (eventType) {
                    case 'change':
                        return whitelist.inputs || {};
                    default:
                        return whitelist.clicks || {};
                }
            }
        }
        return null;
    };
    return TrackedElementsGetter;
}());
AbraDi.registerClass('Abra:TrackedElementsGetter', TrackedElementsGetter, 'Abra:InsightsConfigurationGetter');
var SelectorsOptimizator = /** @class */ (function () {
    function SelectorsOptimizator() {
    }
    /**
     * clean the existing object, or create a new one if does not exists
     */
    SelectorsOptimizator.prepareOptimizationObject = function (whitelistMap) {
        if (!whitelistMap || !whitelistMap.selectorsComponents || !whitelistMap.selectorsComponents.symbols || !whitelistMap.selectorsComponents.usage)
            return;
        if (!whitelistMap._selectorsOptimization) {
            whitelistMap._selectorsOptimization = this.createOptimizationObject(whitelistMap);
        }
        else {
            for (var i = 0; i < SelectorsOptimizator.ComponentTypes.length; i++) {
                SelectorsOptimizator.resetArray(whitelistMap._selectorsOptimization.existInXpath[SelectorsOptimizator.ComponentTypes[i]]);
            }
        }
    };
    SelectorsOptimizator.shouldRunSelector = function (whitelistMap, selectorIndex) {
        if (!whitelistMap._selectorsOptimization)
            return true; // if there is no optimization, run all
        for (var i = 0; i < SelectorsOptimizator.ComponentTypes.length; i++) {
            var componentType = SelectorsOptimizator.ComponentTypes[i];
            var usedValues = whitelistMap.selectorsComponents.usage[componentType] && whitelistMap.selectorsComponents.usage[componentType][selectorIndex];
            if (usedValues && whitelistMap._selectorsOptimization.existInXpath[componentType]) {
                for (var j = 0; j < usedValues.length; j++) {
                    if (!whitelistMap._selectorsOptimization.existInXpath[componentType][usedValues[j]])
                        return false;
                }
            }
        }
        return true;
    };
    SelectorsOptimizator.createOptimizationObject = function (whitelistMap) {
        var selectorsOptimization = {
            usedInSelectors: {},
            existInXpath: {}
        };
        for (var i = 0; i < SelectorsOptimizator.ComponentTypes.length; i++) {
            var componentType = SelectorsOptimizator.ComponentTypes[i];
            if (whitelistMap.selectorsComponents.symbols[componentType]) {
                selectorsOptimization.usedInSelectors[componentType] = ObjectUtils.convertArrayToValueIndexMap(whitelistMap.selectorsComponents.symbols[componentType]);
                selectorsOptimization.existInXpath[componentType] = this.createCompareArray(whitelistMap.selectorsComponents.symbols[componentType].length);
            }
        }
        return selectorsOptimization;
    };
    SelectorsOptimizator.createCompareArray = function (length) {
        var result = [];
        for (var i = 0; i < length; i++) {
            result.push(false);
        }
        return result;
    };
    SelectorsOptimizator.resetArray = function (array) {
        if (!array)
            return;
        for (var i = 0; i < array.length; i++) {
            array[i] = false;
        }
    };
    SelectorsOptimizator.ComponentTypes = ['ids', 'classes', 'attributes', 'tags'];
    return SelectorsOptimizator;
}());



/***/ }),

/***/ 807:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/

var define = false; /* Disable AMD for misbehaving libraries */

module.exports = function create(options) {
	var jqueryGetter = new (__webpack_require__(297))(options);
	var jQueryProxy = new (__webpack_require__(108))(jqueryGetter, options);
	return jQueryProxy;
};



/***/ }),

/***/ 297:
/***/ (function(module) {

/*** IMPORTS FROM imports-loader ***/

var define = false; /* Disable AMD for misbehaving libraries */

module.exports = JQueryGetter;

function JQueryGetter(options) {
	this.getJQuery = getJQuery;

	function getJQuery(element) {
		if (options.jquery) {
			return options.jquery;
		}
		if (options.getJQuery) {
			return options.getJQuery(element);
		}
		var win = getWindow(element);
		return win && win.wmjQuery;
	}

	function getFnName(winProvider) {
		if (options.fnName) {
			return options.fnName;
		}
		if (winProvider) {
			if (winProvider.getLibWrappedWindow) {
				return 'getLibWrappedWindow';
			}
			if (winProvider.getLibWindow) {
				return 'getLibWindow';
			}
		}
	}

	function getWindow(element) {
		if (options.winProvider) {
			var fnName = getFnName(options.winProvider);
			return options.winProvider[fnName](element);
		}
		return window;
	}
}


/***/ }),

/***/ 108:
/***/ (function(module) {

/*** IMPORTS FROM imports-loader ***/

var define = false; /* Disable AMD for misbehaving libraries */

module.exports = JQueryProxy;

function JQueryProxy(jqueryGetter, options) {
	this.isEnabled = function() {
		try {
			return options.featuresService && options.featuresService.isEnabled("jQueryProxy");
		} catch (ex) {
			return false;
		}
	};

	this.jqProxyProp = function(element, prop) {
		if (this.isEnabled()) {
			var jQuery = jqueryGetter.getJQuery(element);
		    if (jQuery && jQuery['fnHelpers']) {
		        return jQuery['fnHelpers'][prop](element);
			}
	    }
        return element[prop];
	};
	
	this.parentNode = function(element) {
		return this.jqProxyProp(element, 'parentNode');
	};
	
	this.firstElementChild = function(element) {
		return this.jqProxyProp(element, 'firstElementChild');
	};

	this.childNodes = function(element) {
		return this.jqProxyProp(element, 'childNodes');
	};
	
	this.previousSibling = function(element) {
		return this.jqProxyProp(element, 'previousSibling');
	};
};


/***/ }),

/***/ 169:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/

var define = false; /* Disable AMD for misbehaving libraries */

var createPluginEntry = (__webpack_require__(445)/* .createPluginEntry */ .mJ);

module.exports = createPluginEntry(function(registerPlugin) {
    var WmPluginAbra = (__webpack_require__(405)/* .WmPluginAbra */ .q);

    registerPlugin(new WmPluginAbra());
});



/***/ }),

/***/ 405:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/

var define = false; /* Disable AMD for misbehaving libraries */

var getCtx = (__webpack_require__(445)/* .getCtx */ .yK);

function WmPluginAbra() {
	this.run = run;

	function run() {
		return (__webpack_require__(750).start)(getCtx());;
	}
}

exports.q = WmPluginAbra;



/***/ }),

/***/ 445:
/***/ (function(__unused_webpack_module, exports) {

var __webpack_unused_export__;
/*** IMPORTS FROM imports-loader ***/

var define = false; /* Disable AMD for misbehaving libraries */

'use strict';

var pluginEntryManager = {
    createPluginEntry: createPluginEntry,
    getCtx: getCtx
};

var lego;

function createPluginEntry(createPluginCallback) {
    return function(getLego) {
        lego = getLego();

        createPluginCallback(registerPlugin);
    }
}

function getCtx() {
    return lego.ctx;
}

function registerPlugin(plugin) {
    lego.plugin(plugin);
}

__webpack_unused_export__ = true;
__webpack_unused_export__ = pluginEntryManager;
exports.mJ = pluginEntryManager.createPluginEntry;
exports.yK = pluginEntryManager.getCtx;



/***/ }),

/***/ 211:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/

var define = false; /* Disable AMD for misbehaving libraries */

(function(scope, factory){
	if ( true && typeof module.exports === "object" ){
		module.exports = factory;
	} else {
		scope.queryGenerator = factory;
}}(this, function(jQuery, jQueryProxy) {
/// <reference path="jquery.d.ts" />
var QueryGenerator;
(function (QueryGenerator) {
    var tagsToIgnore = ["DIV", "SPAN", "HTML", "BODY", "TR", "TD"];
    var illegalChars = ["'"];
    var SimpleNLP = __webpack_require__(239);
    SimpleNLP.setJQuery(jQuery);
    function generate(element) {
        var parents = extractParents(element);
        var all = [element[0]].concat(parents);
        var matches = jQuery.map(all, getTagSelector);
        var details = filter(matches, function (t) { return t !== null; });
        var narrowed = narrowToFirstId(details);
        narrowed = narrowed.reverse();
        var selectors = jQuery.map(narrowed, tagInfoToSelectorString);
        var selector = selectors.join(" ");
        return isLegal(selector) ? selector : undefined;
    }
    QueryGenerator.generate = generate;
    function modifyAutoQuery(currentAutoQuery, isIgnoreId, elementId) {
        if (!currentAutoQuery) {
            return currentAutoQuery;
        }
        var segmentSeparationRegex = /^((.+) )*(([^\[]+)(\[id=".*"\])?)$/;
        var matchResult = currentAutoQuery.match(segmentSeparationRegex);
        var entireQueryWithoutLastSegment = matchResult[1] || '';
        var lastSegmentWithoutId = matchResult[4];
        var modifiedAutoQuery = entireQueryWithoutLastSegment + lastSegmentWithoutId;
        if (!isIgnoreId && elementId && SimpleNLP.isPhraseHuman(elementId)) {
            modifiedAutoQuery += '[id="' + elementId + '"]';
        }
        return modifiedAutoQuery;
    }
    QueryGenerator.modifyAutoQuery = modifyAutoQuery;
    function isLegal(selector) {
        if (!selector || !selector.length) {
            return false;
        }
        for (var i = 0; i < illegalChars.length; i++) {
            if (selector.indexOf(illegalChars[i]) >= 0) {
                return false;
            }
        }
        return true;
    }
    function extractParents(jelement, jcontext) {
        var currentParent = jQueryProxy.parentNode(jelement[0]);
        var context = jcontext && jcontext[0] && jQueryProxy.parentNode(jcontext[0]);
        var parentsArray = [];
        var i = 0;
        for (; currentParent && currentParent.nodeType == 1 && currentParent != context; currentParent = jQueryProxy.parentNode(currentParent)) {
            parentsArray.push(currentParent);
        }
        return parentsArray;
    }
    function filter(array, match) {
        var arr = [];
        for (var i = 0; i < array.length; ++i) {
            var arrItem = array[i];
            if (match(arrItem)) {
                arr.push(arrItem);
            }
        }
        return arr;
    }
    function tagInfoToSelectorString(info) {
        var selector = info.tagName;
        if (info.id) {
            selector += '[id="' + info.id + '"]';
        }
        return selector;
    }
    function narrowToFirstId(infoList) {
        var firstIdIndex = infoList.length;
        for (var i = 0; i < infoList.length; i++) {
            var currentTag = infoList[i];
            // There is no meaning for more than one id
            if (currentTag.id) {
                firstIdIndex = i;
                break;
            }
        }
        var narrowed = infoList.slice(0, firstIdIndex + 1);
        return narrowed;
    }
    function extractElementId(element) {
        var id = element.attr('id');
        if (id) {
            if (SimpleNLP.isPhraseHuman(id)) {
                return id;
            }
        }
        return null;
    }
    function getTagSelector(theElement, index) {
        var jelem = jQuery(theElement);
        var id = extractElementId(jelem);
        var tagName = jelem[0].tagName;
        var tagTypeIsIgnored = jQuery.inArray(tagName, tagsToIgnore) >= 0;
        var isMainElement = (index === 0);
        var tagIsImportant = isMainElement || id || !tagTypeIsIgnored;
        if (!tagIsImportant)
            return null;
        var res = {
            tagName: tagName,
            id: id
        };
        //var classSelector = getClassSelector(element);
        //selector += classSelector;
        return res;
    }
})(QueryGenerator || (QueryGenerator = {}));
	return QueryGenerator;
}));


/***/ }),

/***/ 239:
/***/ (function(module) {

/*** IMPORTS FROM imports-loader ***/

var define = false; /* Disable AMD for misbehaving libraries */

/*! wm-simple-nlp - v1.0.9 - 2019-02-17
* Copyright (c) 2019 WalkMe; Licensed ISC */
var SimpleNLP;
(function (SimpleNLP) {
    var alphabetRegex = /[a-zA-Z]/, numericRegex = /[0-9]/; //these regexes are used on strings with a single char only
    var _jq;
    var CharCategory;
    (function (CharCategory) {
        CharCategory[CharCategory["Digit"] = 0] = "Digit";
        CharCategory[CharCategory["Alphabet"] = 1] = "Alphabet";
        CharCategory[CharCategory["Other"] = 2] = "Other";
    })(CharCategory || (CharCategory = {}));
    function setJQuery(jquery) {
        _jq = jquery;
    }
    SimpleNLP.setJQuery = setJQuery;
    function isPhraseHuman(phrase) {
        var classifier = new SentanceClassifier();
        var sentance = new Sentence(phrase);
        var res = classifier.isHuman(sentance);
        return res;
    }
    SimpleNLP.isPhraseHuman = isPhraseHuman;
    function categorizeChar(c) {
        if (alphabetRegex.test(c))
            return CharCategory.Alphabet;
        if (numericRegex.test(c))
            return CharCategory.Digit;
        return CharCategory.Other;
    }
    var Sentence = (function () {
        function Sentence(raw) {
            this.words = [];
            this.raw = raw;
            this.buildWords();
        }
        Sentence.prototype.buildWords = function () {
            this.splitCategories();
        };
        Sentence.prototype.addWord = function (word) {
            var _this = this;
            word = _jq.trim(word);
            if (!word) {
                return;
            }
            else if (categorizeChar(word[0]) !== CharCategory.Alphabet) {
                this.words.push(word);
            }
            else {
                var parts = this.splitCamelCase(word);
                _jq.each(parts, function (i, sub) { return _this.words.push(sub.toLowerCase()); });
            }
        };
        Sentence.prototype.splitCamelCase = function (word) {
            var withSpcae = word.replace(/([a-z](?=[A-Z]))/g, '$1 ');
            var parts = withSpcae.split(' ');
            return parts;
        };
        Sentence.prototype.splitCategories = function () {
            var lastCategory = categorizeChar(this.raw[0]);
            var i = 0;
            var sub;
            for (var j = 0; j < this.raw.length; j++) {
                var c = this.raw[j];
                var currentCategory = categorizeChar(c);
                if (currentCategory != lastCategory) {
                    sub = this.raw.substring(j, i);
                    this.addWord(sub);
                    i = j;
                    lastCategory = currentCategory;
                }
            }
            sub = this.raw.substring(i, j + 1);
            this.addWord(sub);
        };
        return Sentence;
    }());
    SimpleNLP.Sentence = Sentence;
    var MAX_REPEATED_CONSONANT = 5;
    var WordClassifier = (function () {
        function WordClassifier() {
            var _this = this;
            this.WHITE_LIST = ['html', 'css', 'btn', 'js', 'http', 'a'];
            this.VOWELS = 'aeiou';
            this.pointers = {};
            this.pointers[CharCategory.Alphabet] = function (x) { return _this.alphabetPred(x); };
            this.pointers[CharCategory.Digit] = function (x) { return _this.numberPred(x); };
            this.pointers[CharCategory.Other] = function (x) { return _this.otherPred(x); };
        }
        WordClassifier.prototype.numberPred = function (word) {
            //return word.length === 1 || (word.length === 2 && word[0] === '0');
            return false;
        };
        WordClassifier.prototype.otherPred = function (word) {
            return true;
        };
        WordClassifier.prototype.alphabetPred = function (word) {
            var consonantCount = 0;
            for (var i = 0; i < word.length; i++) {
                var c = word[i];
                if (this.VOWELS.indexOf(c) == -1) {
                    consonantCount++;
                }
                else {
                    consonantCount = 0;
                }
                if (consonantCount >= MAX_REPEATED_CONSONANT)
                    return false;
            }
            return true;
        };
        WordClassifier.prototype.isHuman = function (word) {
            if (this.contains(this.WHITE_LIST, word))
                return true;
            var cat = categorizeChar(word[0]);
            var pred = this.pointers[cat];
            var res = pred(word);
            return res;
        };
        WordClassifier.prototype.contains = function (arr, item) {
            return _jq.inArray(item, arr) !== -1;
        };
        return WordClassifier;
    }());
    SimpleNLP.WordClassifier = WordClassifier;
    var SentanceClassifier = (function () {
        function SentanceClassifier() {
        }
        SentanceClassifier.prototype.isHuman = function (sent) {
            if (sent.raw.length <= 2)
                return false;
            if (this.isUrl(sent))
                return false;
            var classifier = new WordClassifier();
            var parts = _jq.map(sent.words, function (word, i) { return classifier.isHuman(word); });
            var allTrue = this.all(parts);
            return allTrue;
        };
        SentanceClassifier.prototype.all = function (arr) {
            for (var i = arr.length - 1; i >= 0; i--) {
                if (!arr[i]) {
                    return false;
                }
            }
            return true;
        };
        SentanceClassifier.prototype.isUrl = function (sent) {
            var isUrl = (sent.raw.indexOf('/') == 0) ||
                (sent.raw.indexOf('http') == 0);
            return isUrl;
        };
        return SentanceClassifier;
    }());
    SimpleNLP.SentanceClassifier = SentanceClassifier;
})(SimpleNLP || (SimpleNLP = {}));
module.exports = SimpleNLP;



/***/ }),

/***/ 670:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/

var define = false; /* Disable AMD for misbehaving libraries */

var main = __webpack_require__(224);

function Encoder(json){
    Encoder.prototype.encode = function encode(obj){
        var encoded = main.encode(json.stringify(obj));
        return { _enc: encoded };
    }
}

module.exports = {
    Encoder: Encoder
}


/***/ }),

/***/ 224:
/***/ (function(module) {

/*** IMPORTS FROM imports-loader ***/

var define = false; /* Disable AMD for misbehaving libraries */

var mask = 31;

function encode(str) {
	var charCodeArray = [], x;

	for(var i = str.length-1; i >= 0; i--) {
		x = str.charCodeAt(i);
		charCodeArray.push(((~(x&mask))&mask) | (x&(~mask)));
	}

	return String.fromCharCode.apply(null, charCodeArray); 
}

module.exports = {
	decode: encode,
	encode: encode
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(398);
/******/ 	wmbundle = __webpack_exports__;
/******/ 	
/******/ })()
;
/* WalkMe Module */ return wmbundle; })
//# sourceMappingURL=bundle.js.map

"undefined"!=typeof _walkmeInternals&&_walkmeInternals.wmloader&&_walkmeInternals.wmloader.define("wm-plugin-native-functions-restorer@0.6.4@prelib",{name:"wm-plugin-native-functions-restorer",version:"0.6.4",toolbelt:"1.4.1",packageDate:"2024-08-02T05:11:26.612Z",entry:"prelib"},function(e){var t;return function(){var e={373:function(e,t,n){e.exports=n(390)},546:function(e,t,n){var r;r=!0;var o=n(142);function i(e){e().has("NativeFunctionRestorer")||e().register("NativeFunctionRestorer").asCtor(o.NativeFunctionsRestorer)}t.w=i},61:function(e,t,n){t.__esModule=!0;var r=n(203).Iy;function o(){var e,t;wmjQuery.support.ignoreNativesCheck=!0,null===(t=(e=wmjQuery.find).setDocument)||void 0===t?void 0:t.call(e)}t.jq3IgnoreNativesCheck=o;function i(){var e,t;if(wmjQuery.queryHelpers&&u(wmjQuery.queryHelpers,c()),null===(e=null===wmjQuery||void 0===wmjQuery?void 0:wmjQuery.fnHelpers)||void 0===e?void 0:e.textContent){var n=r().get("NativeNodeFunctionsProvider").textContentGetter;wmjQuery.fnHelpers.textContent=function(e){return n.apply(e)}}if(null===(t=null===wmjQuery||void 0===wmjQuery?void 0:wmjQuery.fnHelpers)||void 0===t?void 0:t.innerText){var o=r().get("NativeHtmlElementFunctionsProvider").innerTextGetter;wmjQuery.fnHelpers.innerText=function(e){return e instanceof HTMLElement?o.apply(e):e.innerText}}}t.supplyJQNatives=i;function u(e,t){var n={};for(var r in t)n[r]=e[r],e[r]=t[r];return n}function a(e){return function(t,n){return t[n]=e(n),t}}function s(e){return function(t){return function(n,r){var o=n;if(1===n.nodeType&&(o=e.element),9===n.nodeType&&(o=e.doc),11===n.nodeType&&(o=e.docFrag),o[t])return o[t].call(n,r)}}}var c=function(){var e,t=["getElementById","getElementsByTagName","getElementsByName","getElementsByClassName","querySelectorAll"];return function(){if(void 0!==e)return e;var n=r().get("NativeDocumentFunctionsProvider");return e=t.reduce(a(s(n)),{})}}()},142:function(e,t,n){t.__esModule=!0;var r=n(61),o=n(203).Iy,i=function(){function e(){this.initialized=!1,this.registerDateNowFunctionProvider=function(e){o().register("NativeDateNowFunctionProvider").asInstance({dateNow:function(){return e.Date.now()}})}}return e.prototype.run=function(){if(this.initialized)return null;this.initialized=!0;var e=this.createIframe();return this.decoratePostMessage(e),this.registerGetComputedStyle(e),this.decorateNativeTimerFunctionsProvider(e),this.registerNativeEventListenerFunctionsProvider(e),this.registerNativeDocumentFunctions(e),this.registerNativeWindowProvider(e),this.registerNodeFunctionsProvider(e),this.registerHtmlElementFunctionsProvider(e),this.registerElementFunctionsProvider(e),this.registerDateNowFunctionProvider(e),this.registerJSONParseFunctionProvider(e),r.supplyJQNatives(),r.jq3IgnoreNativesCheck(),null},e.prototype.createIframe=function(){var e=wmjQuery("#walkme-native-functions"),t=this.getTarget();e.length||(e=wmjQuery('<iframe id="walkme-native-functions" style="display: none; position: absolute;"/>').appendTo(t));var n=e[0].contentWindow;return wmjQuery(window._walkmeInternals).on("removeWalkMe",function(){e.remove()}),n},e.prototype.getTarget=function(){if(wmjQuery("frameset").length>0)return"html";if(window._walkmeConfig&&window._walkmeConfig.loadNFRIframeOnBody)return"body";return"html"},e.prototype.decoratePostMessage=function(e){o().decorate("PostMessage",function(t){return e.postMessage})},e.prototype.registerGetComputedStyle=function(e){o().register("GetComputedStyle").asInstance(e.getComputedStyle)},e.prototype.registerNativeDocumentFunctions=function(e){function t(e){return{getElementById:e.getElementById,getElementsByTagName:e.getElementsByTagName,getElementsByName:e.getElementsByName,getElementsByClassName:e.getElementsByClassName,querySelectorAll:e.querySelectorAll}}o().register("NativeDocumentFunctionsProvider").asInstance({doc:t(e.document),element:t(e.document.body),docFrag:t(e.DocumentFragment.prototype)})},e.prototype.decorateNativeTimerFunctionsProvider=function(e){o().decorate("NativeTimerFunctionsProvider",function(t){return t.get=function(){return{clearTimeout:e.clearTimeout,clearInterval:e.clearInterval,setTimeout:e.setTimeout,setInterval:e.setInterval}},t})},e.prototype.registerNativeWindowProvider=function(e){o().decorate("NativeWindowProvider",function(t){return t.get=function(){return e},t})},e.prototype.registerNativeEventListenerFunctionsProvider=function(e){o().register("NativeEventListenerFunctionsProvider").asCtor(function(){this.get=function(){return{addEventListener:e.document.addEventListener,attachEvent:e.document.attachEvent,removeEventListener:e.document.removeEventListener,detachEvent:e.document.detachEvent}}})},e.prototype.registerNodeFunctionsProvider=function(e){var t=Object.getOwnPropertyDescriptor(e.Node.prototype,"textContent").get,n=Object.getOwnPropertyDescriptor(e.Node.prototype,"childNodes").get,r=Object.getOwnPropertyDescriptor(e.Node.prototype,"parentNode").get;o().register("NativeNodeFunctionsProvider").asInstance({textContentGetter:t,childNodesGetter:n,parentNodeGetter:r})},e.prototype.registerHtmlElementFunctionsProvider=function(e){var t=Object.getOwnPropertyDescriptor(e.HTMLElement.prototype,"innerText").get;o().register("NativeHtmlElementFunctionsProvider").asInstance({innerTextGetter:t})},e.prototype.registerElementFunctionsProvider=function(e){var t=e.Element.prototype.animate;o().register("NativeElementFunctionsProvider").asInstance({animate:t})},e.prototype.registerJSONParseFunctionProvider=function(e){o().register("NativeJSONParseFunctionProvider").asInstance({JSONParse:function(t){return e.JSON.parse(t)}})},e}();t.NativeFunctionsRestorer=i},390:function(e,t,n){var r=n(203).s,o=n(203).Iy;e.exports=r(function(e){function t(){var e=n(546).w;return e(o),o().get("NativeFunctionRestorer")}e(t())})},203:function(e,t){var n,r,o={createPluginEntry:i,getCtx:u};function i(e){return function(t){r=t(),e(a)}}function u(){return r.ctx}function a(e){r.plugin(e)}n=!0,n=o,t.s=o.createPluginEntry,t.Iy=o.getCtx}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={exports:{}};return e[t](i,i.exports,r),i.exports}var o=r(373);t=o}(),t});