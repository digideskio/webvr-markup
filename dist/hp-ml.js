!function e(r,t,n){function o(a,c){if(!t[a]){if(!r[a]){var u="function"==typeof require&&require;if(!c&&u)return u(a,!0);if(i)return i(a,!0);throw new Error("Cannot find module '"+a+"'")}var f=t[a]={exports:{}};r[a][0].call(f.exports,function(e){var t=r[a][1][e];return o(t?t:e)},f,f.exports,e,r,t,n)}return t[a].exports}for(var i="function"==typeof require&&require,a=0;a<n.length;a++)o(n[a]);return o}({1:[function(e,r,t){"use strict";Polymer({is:"meta-verse",factoryImpl:function(){},listeners:{"meta-created":"handleCreatedChildren"},handleCreatedChildren:function(e){console.log("trigged",e)},created:function(){console.log("meta-verse created")},properties:{},ready:function(){},attached:function(){},detached:function(){},attributeChanged:function(e,r){}}),Polymer({is:"meta-room",created:function(){this.fire("meta-created",{target:this.is}),console.log("room created")}})},{}]},{},[1]);