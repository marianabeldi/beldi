exports.ids = [2,1];
exports.modules = {

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(24);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1930a9a0", content, true, context)
};

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".NuxtLogo{-webkit-animation:appear 1s;animation:appear 1s;margin:auto}@-webkit-keyframes appear{0%{opacity:0}}@keyframes appear{0%{opacity:0}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(28);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1b7833da", content, true, context)
};

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Logo.vue?vue&type=template&id=74d08a4c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"viewBox":"0 0 64 64","width":"100","heigh":"100"}},[_vm._ssrNode("<g><circle cx=\"32\" cy=\"32\" fill=\"#fff\" r=\"29\"></circle> <path d=\"M59.67 40.73A29.007 29.007 0 1115.33 8.27 29.292 29.292 0 0014 17a29 29 0 0045.67 23.73z\" fill=\"#cff09e\"></path> <path d=\"M58.46 20.14l-6.06.55a19.947 19.947 0 01-6.71-.52l-4.56-1.14a14.244 14.244 0 00-8.14.38 15.983 15.983 0 01-2.91.68 7.707 7.707 0 00-4.01 1.81A9.231 9.231 0 0120 24a9.231 9.231 0 01-6.07-2.1A7.908 7.908 0 008.7 20H5.6a27.411 27.411 0 012.91-5h1.5a8.335 8.335 0 004.65-1.46A9.572 9.572 0 0120 12a9.572 9.572 0 015.34 1.54A8.335 8.335 0 0029.99 15l1.82-.52a20.125 20.125 0 0110.42-.17l3.46.86a19.947 19.947 0 006.71.52l3.37-.31a27.491 27.491 0 012.69 4.76z\" fill=\"#a8dba8\"></path> <path d=\"M59.54 41.11a28.652 28.652 0 01-3.7 7.4 25.317 25.317 0 00-6.33.18l-.13.02A8.091 8.091 0 0142 53a8.478 8.478 0 01-6.1-2.48 5.735 5.735 0 00-3.3-1.72 25.591 25.591 0 00-11.2.88 25.208 25.208 0 01-9.43.93l-2.37-.18a28.633 28.633 0 01-4.8-8.37l7.43.57a25.363 25.363 0 009.33-1 24.515 24.515 0 0110.52-.9l1.95.27a5.088 5.088 0 003.4-.74 8.942 8.942 0 018.91-.14 4.981 4.981 0 002.41.63 4.866 4.866 0 00.76-.06 25.634 25.634 0 018.95.2z\" fill=\"#a8dba8\"></path> <ellipse cx=\"20\" cy=\"18\" fill=\"#79bd9a\" rx=\"3\" ry=\"2\"></ellipse> <g fill=\"#a8dba8\"><path d=\"M47.31 7.36l-1.65.51a16.294 16.294 0 01-7.44.5l-5.55-.93a16.312 16.312 0 00-5.34 0 16.185 16.185 0 01-6.61-.26l-2.6-.65a29.057 29.057 0 0129.19.83z\"></path> <path d=\"M61 32a27.987 27.987 0 01-.49 5.29l-1.99-.87a23.743 23.743 0 00-11.53-1.92l-4.15.35a23.8 23.8 0 01-3.68.02l-8.95-.64a23.9 23.9 0 00-6.37.4l-6.43 1.29a23.9 23.9 0 01-10.74-.32l-3.54-.93A26.23 26.23 0 013 32a28.81 28.81 0 01.76-6.61l5.5 2.07a23.767 23.767 0 0013.76.92l.4-.09a23.835 23.835 0 0111.14.1 24.05 24.05 0 005.77.71 23.983 23.983 0 007.02-1.05l4.66-1.44a23.378 23.378 0 014.05-.87l4.14-.52A29.064 29.064 0 0161 32z\"></path> <path d=\"M43.67 58.55a29.027 29.027 0 01-27.66-2.35l3.31-1.33a20.135 20.135 0 0117.2 1.08l.61.34a20.049 20.049 0 006.1 2.18z\"></path></g> <ellipse cx=\"42\" cy=\"46\" fill=\"#79bd9a\" rx=\"4\" ry=\"3\"></ellipse></g> <g fill=\"#3b8686\"><path d=\"M32 2a30 30 0 1030 30A30.034 30.034 0 0032 2zM6.336 43.181l5.815.446q1.053.084 2.1.083a26.264 26.264 0 007.593-1.122 23.429 23.429 0 0110.1-.867l1.946.269a6.117 6.117 0 004.063-.877 8.066 8.066 0 017.9-.118 6.025 6.025 0 003.808.683 24.552 24.552 0 018.539.183 27.919 27.919 0 01-2.881 5.612 26.547 26.547 0 00-5.964.229l-.13.02a1 1 0 00-.749.555A7.074 7.074 0 0142 52a7.483 7.483 0 01-5.381-2.175 6.781 6.781 0 00-3.876-2.015 26.446 26.446 0 00-11.639.915 24.217 24.217 0 01-9.058.888l-1.9-.145a28 28 0 01-3.81-6.287zm52.32-3.271a26.5 26.5 0 00-9.3-.207 3.959 3.959 0 01-2.519-.452 10.1 10.1 0 00-9.929.158 4.069 4.069 0 01-2.737.6l-1.944-.269a25.446 25.446 0 00-10.952.932 24.24 24.24 0 01-8.964.961l-6.776-.52a27.781 27.781 0 01-1.24-5.1l2.125.558a25.044 25.044 0 0011.191.333l6.429-1.29a22.946 22.946 0 016.1-.383l8.948.641a24.726 24.726 0 003.837-.021l4.15-.35A22.786 22.786 0 0158.12 37.34l1.254.548c-.15.7-.328 1.386-.529 2.064zm.266-4.406a24.856 24.856 0 00-12.016-2l-4.147.351a22.855 22.855 0 01-3.528.019l-8.951-.641a25.02 25.02 0 00-6.637.417l-6.429 1.29a23.059 23.059 0 01-10.29-.307l-2.854-.75C4.029 33.26 4 32.633 4 32a28 28 0 01.5-5.262l4.4 1.657a24.709 24.709 0 0014.332.96l.406-.091a22.957 22.957 0 0110.675.1 25.046 25.046 0 006.01.739 24.984 24.984 0 007.315-1.1l4.661-1.44a22.4 22.4 0 013.879-.833l3.236-.406a27.842 27.842 0 01.307 9.531zM10.01 16a9.318 9.318 0 005.21-1.631A8.594 8.594 0 0120 13a8.6 8.6 0 014.781 1.369A9.31 9.31 0 0029.99 16a.983.983 0 00.275-.039l1.819-.52a19.115 19.115 0 019.9-.16l3.457.859a20.978 20.978 0 005.114.636q.966 0 1.932-.091l2.768-.254a28.293 28.293 0 011.669 2.844l-4.622.419a18.908 18.908 0 01-6.374-.494l-4.558-1.141a15.3 15.3 0 00-8.711.408 14.915 14.915 0 01-2.72.633 8.693 8.693 0 00-4.529 2.048A8.262 8.262 0 0120 23a8.267 8.267 0 01-5.411-1.852A8.913 8.913 0 008.7 19H7.212a27.958 27.958 0 011.83-3zM8.7 21a6.914 6.914 0 014.57 1.651A10.282 10.282 0 0020 25a10.277 10.277 0 006.728-2.348 6.71 6.71 0 013.5-1.573 16.89 16.89 0 003.092-.725A13.29 13.29 0 0140.887 20l4.559 1.14a20.934 20.934 0 007.044.546l5.342-.485a27.93 27.93 0 011.1 3.17l-3 .377a24.426 24.426 0 00-4.223.906l-4.656 1.44a23 23 0 01-12.253.326 24.964 24.964 0 00-11.6-.105l-.407.091a22.718 22.718 0 01-13.182-.882l-4.66-1.754A27.815 27.815 0 016.254 21zM44.724 7.071a15.4 15.4 0 01-6.338.313l-5.56-.932a17.134 17.134 0 00-5.662 0 15.09 15.09 0 01-6.107-.225 27.932 27.932 0 0123.667.842zM18.286 7.6l2.191.548a17.066 17.066 0 007.008.278 15.206 15.206 0 015.019 0l5.554.931a17.346 17.346 0 002.806.228 17.419 17.419 0 005.092-.759l1.178-.365a28.2 28.2 0 016.74 6.089l-1.567.144a18.855 18.855 0 01-6.376-.5l-3.457-.859a21.14 21.14 0 00-10.939.179l-1.68.486a7.336 7.336 0 01-3.955-1.289A10.621 10.621 0 0020 11a10.609 10.609 0 00-5.9 1.711 7.393 7.393 0 01-3.487 1.242A28.222 28.222 0 0118.286 7.6zm-.035 48.775l1.441-.579a19.054 19.054 0 019.2-1.244 18.849 18.849 0 017.142 2.27l.613.342a21.2 21.2 0 003.66 1.576 27.954 27.954 0 01-22.055-2.365zm25.275 1.13l-.117-.021a19.01 19.01 0 01-5.792-2.069l-.611-.341a20.851 20.851 0 00-7.894-2.51 21.066 21.066 0 00-10.165 1.376l-2.8 1.124a28.124 28.124 0 01-4.11-3.454 26.149 26.149 0 009.654-.976 24.415 24.415 0 0110.763-.846 4.7 4.7 0 012.723 1.425A9.491 9.491 0 0042 54a9.171 9.171 0 008.028-4.375 24.818 24.818 0 013.882-.225 28.159 28.159 0 01-10.384 8.107z\"></path> <path d=\"M42 50c2.757 0 5-1.794 5-4s-2.243-4-5-4-5 1.794-5 4 2.243 4 5 4zm0-6c1.626 0 3 .916 3 2s-1.374 2-3 2-3-.916-3-2 1.374-2 3-2z\"></path> <path d=\"M20 21c2.243 0 4-1.318 4-3s-1.757-3-4-3-4 1.318-4 3 1.757 3 4 3zm0-4c1.221 0 2 .592 2 1s-.779 1-2 1-2-.592-2-1 .779-1 2-1z\"></path></g>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Logo.vue?vue&type=template&id=74d08a4c&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Logo.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(23)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6da294b5"
  
)

/* harmony default export */ var Logo = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html{font-family:\"Quicksand\",\"Source Sans Pro\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}*,:after,:before{box-sizing:border-box}body{background-color:#012e42;color:#eee8d3;font-size:1.5rem;margin:0}.container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title{display:block;font-size:6rem;font-weight:300;letter-spacing:1px}input[type=radio]{margin-right:1rem;height:2rem;width:2rem}.questions-form{display:flex;flex-wrap:wrap}.question-wrapper div label{align-items:center;display:flex;margin-bottom:1rem}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=a67287ea&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div>","</div>",[_c('Logo'),_vm._ssrNode(" <h1 class=\"title\">\n      beldi\n    </h1> <section class=\"form\"><form class=\"questions-form\"><div class=\"question-wrapper\"><p>1. De qué signo sos?</p> "+(_vm._ssrList((_vm.signos),function(signo){return ("<div><label"+(_vm._ssrAttr("for",signo.id))+" class=\"checkmark-container\"><input"+(_vm._ssrAttr("id",signo.id))+" type=\"radio\" name=\"color\""+(_vm._ssrAttr("value",signo.id))+">"+_vm._ssrEscape("\n              "+_vm._s(signo.id)+"\n            ")+"</label></div>")}))+" <button>Siguiente</button></div> <div class=\"question-wrapper\"><p>2. Cómo te sentiste al escuchar la canción?</p> "+(_vm._ssrList((_vm.sentimientos),function(sentimiento){return ("<div><label"+(_vm._ssrAttr("for",sentimiento.id))+" class=\"checkmark-container\"><input"+(_vm._ssrAttr("id",sentimiento.id))+" type=\"radio\" name=\"sentimiento\""+(_vm._ssrAttr("value",sentimiento.id))+">"+_vm._ssrEscape("\n              "+_vm._s(sentimiento.id)+"\n            ")+"</label></div>")}))+" <button>Siguiente</button></div> <div class=\"question-wrapper\"><p>3. En este momento te sentís:</p> "+(_vm._ssrList((_vm.animos),function(animo){return ("<div><label"+(_vm._ssrAttr("for",animo.id))+" class=\"checkmark-container\"><input"+(_vm._ssrAttr("id",animo.id))+" type=\"radio\" name=\"animo\""+(_vm._ssrAttr("value",animo.id))+">"+_vm._ssrEscape("\n              "+_vm._s(animo.id)+"\n            ")+"</label></div>")}))+" <button>Siguiente</button></div> <div class=\"question-wrapper\"><p>4. En este momento te estás:</p> "+(_vm._ssrList((_vm.modos),function(modo){return ("<div><label"+(_vm._ssrAttr("for",modo.id))+" class=\"checkmark-container\"><input"+(_vm._ssrAttr("id",modo.id))+" type=\"radio\" name=\"modo\""+(_vm._ssrAttr("value",modo.id))+">"+_vm._ssrEscape("\n              "+_vm._s(modo.id)+"\n            ")+"</label></div>")}))+" <button>Siguiente</button></div> <div class=\"question-wrapper\"><p>5. Nos definirías como una banda:</p> "+(_vm._ssrList((_vm.estilos),function(estilo){return ("<div><label"+(_vm._ssrAttr("for",estilo.id))+" class=\"checkmark-container\"><input"+(_vm._ssrAttr("id",estilo.id))+" type=\"radio\" name=\"estilo\""+(_vm._ssrAttr("value",estilo.id))+">"+_vm._ssrEscape("\n              "+_vm._s(estilo.id)+"\n            ")+"</label></div>")}))+" <button>Terminar</button></div></form></section> <svg viewBox=\"0 0 160 160\""+(_vm._ssrAttr("width",_vm.planetSize))+(_vm._ssrAttr("height",_vm.planetSize))+" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><defs><g id=\"planeta\"><path d=\"M46.35 48.67c-13.15 15-16.74 40.92-.76 59.29 19.69 22.63 58.93 22.1 75.54-.35 14.8-20 14-47-4.29-62.84-19.32-16.71-53.32-15.71-70.49 3.9z\"></path><path d=\"M44.78 44.85C30.7 61.43 27.74 86 39.06 104.93c10.72 17.91 32.82 26.67 53.1 23.64 21.26-3.17 36.39-18.87 41-39.66 4.75-21.5-4.47-43.94-24.21-54.28-20.55-10.76-48.41-7.21-64.17 10.22-2.42 2.67 0 11.12 3.15 7.64C72 25.84 128.05 36.3 128.53 76.76c.22 18.34-11.53 35.3-28.91 41.05-15.6 5.17-34.21 2.12-47-8.3-17.55-14.28-19.19-39.93-4.68-57a5.93 5.93 0 00.9-6.14c-.66-1.37-2.61-3.24-4.06-1.52z\"></path></g></defs> <pattern id=\"pat1\" width=\"10\" height=\"10\" patternUnits=\"userSpaceOnUse\"><path d=\"M.4 4.2C.4.7 6.4.3 6.5 4c.1 3.3-4.8 3.2-5.9.6-.3-.7-.6.7-.4 1.1.8 1.7 2.9 2.7 4.7 2C6.8 7.1 7.4 5 7.1 3.3 6.8 1.4 5.4-.3 3.4 0 1.4.3 0 2.2 0 4.2c0 .5.4.5.4 0z\" fill=\"#eee8d3\"></path></pattern> <pattern id=\"pat2\" width=\"10\" height=\"10\" patternUnits=\"userSpaceOnUse\"><path fill=\"#eee8d3\" d=\"M7.5 16.1c.3 0 .5 0 .8-.1.3 0 .3-.5.3-.7 0-.2-.1-.7-.3-.7-.3 0-.5 0-.8-.1-.1 0-.2.1-.2.2-.1.2-.1.4-.1.5 0 .2 0 .4.1.5 0 .2.1.4.2.4zM23.6 26.9c-.2.2-.3.4-.5.6-.3.3-.1 1.8.4 1.3.2-.2.3-.4.5-.5.3-.4.1-1.8-.4-1.4-.1.2-.3.4-.5.6-.3.3 0 1.7.3 1.4l.5-.5c.5-.5.2-2.1-.3-1.5zM19.8 19.8c.2 0 .2-.8 0-.8-.3 0-.3.8 0 .8zM9.1 27.8c.1 0 .1-.4 0-.4-.1-.1-.1.4 0 .4zM18.9 4.5c.4 0 .4-1.3 0-1.3s-.4 1.3 0 1.3zM10 29.7c.3 0 .3-.9 0-.9-.4-.1-.3.9 0 .9zM5.9 9.9c1 0 .9-2.2-.1-2.2s-.9 2.2.1 2.2zM1 24.6c1 0 .9-2.2-.1-2.2s-.9 2.2.1 2.2zM23.8 12.5c.3 0 .3-.9 0-.9s-.3.9 0 .9zM10 1.2c.4 0 .3-1.2 0-1.2-.4 0-.4 1.2 0 1.2zM13.2 16.4c1 0 .9-2.2-.1-2.2-.9 0-.9 2.2.1 2.2zM11.6 10c.3 0 .2-.9 0-.9-.3 0-.3.9 0 .9zM.1 2.5c.2 0 .2-.6 0-.6s-.1.6 0 .6zM13.2 25.7c.4 0 .4-1.2 0-1.2s-.4 1.2 0 1.2zM7.5 23.8c.2 0 .2-.6 0-.6s-.2.6 0 .6zM.1 17.2c.1 0 .1-.5 0-.5s-.1.5 0 .5z\"></path></pattern> <pattern id=\"pat3\" width=\"60\" height=\"70\" patternUnits=\"userSpaceOnUse\"><path d=\"M.3 73.1C28.9 48.2 58.6 24.6 88.5 1.4c.3-.2.1-1.6-.2-1.4C57.9 22.6 28.6 47 .1 72c-.2.2 0 1.3.2 1.1z\" fill=\"#eee8d3\"></path></pattern> <pattern id=\"pat4\" width=\"90\" height=\"30\" patternUnits=\"userSpaceOnUse\"><path fill=\"#eee8d3\" d=\"M0 4.2C-.2 11.8 8.7 22 16.8 17.9c5.5-2.8 7.6-9.6 13.4-12.3 8.4-3.9 10.9 4.3 15.5 9 11.6 12 19.1-12 29.5-12.3 11.2-.4 13.1 25.2 26.5 16 .8-.5.2-2.6-.8-1.9C89 24.5 86.5-.5 75 0 64.7.5 56.6 24.2 46 12.3c-2.5-2.9-4.2-6.8-7.6-8.8-4-2.4-8.4-.7-11.8 1.9-3.9 3-6.5 9.2-11.3 10.8-6.7 2.2-14-5.7-13.9-12C1.5 2.8 0 2.8 0 4.2z\"></path><path fill=\"#eee8d3\" d=\"M70.6 13c.9-2.7 3.8-3.7 6.3-2.4 2 1.1 2.3 4.2.8 5.8-2.8 3-8 .2-7.1-3.7.3-1.2-1.1-2-1.4-.6-.5 2.1.1 4.9 1.8 6.3 2.6 2.3 7 1.6 8.5-1.5 1.2-2.5.9-6.5-1.6-8.1-3.3-2.2-7.3-.6-8.6 3.1-.3 1 .8 2.5 1.3 1.1z\"></path></pattern> <pattern id=\"pat5\" width=\"25\" height=\"25\" patternUnits=\"userSpaceOnUse\"><path fill=\"#eee8d3\" d=\"M1.5 6.1c2 0 1.9-4.5-.1-4.5-1.9 0-1.9 4.5.1 4.5zM9.4 14c2 0 1.9-4.5-.1-4.5S7.4 14 9.4 14zM23 14c2 0 1.9-4.5-.1-4.5S21 14 23 14zM12.2 24.7c2 0 1.9-4.5-.1-4.5-1.9 0-1.8 4.5.1 4.5zM3.2 22.5c2 0 1.9-4.5-.1-4.5-2 .1-1.9 4.5.1 4.5zM15.6 4.5c2 0 1.9-4.5-.1-4.5s-1.9 4.5.1 4.5z\"></path></pattern> <pattern id=\"pat6\" width=\"10\" height=\"7\" patternUnits=\"userSpaceOnUse\"><path d=\"M.3 7c-.3-2.8 2.4-5.2 5-5.2 2.4 0 4.4 1.6 5.1 3.8.1.4.4-1.2.3-1.5-1-3-4.4-5.1-7.5-3.6C.7 1.8-.3 4.7.1 7.3c.1.8.3.1.2-.3z\" fill=\"#eee8d3\"></path></pattern> <use xlink:href=\"#planeta\""+(_vm._ssrAttr("fill",_vm.planetColor))+"></use> <use xlink:href=\"#planeta\""+(_vm._ssrAttr("fill",_vm.planetTexture))+"></use> <g>"+(_vm._s(_vm.planetTexture))+"</g> <g>"+(_vm._s(_vm.planetSatelite))+"</g> <g>"+(_vm._s(_vm.planetAro))+"</g></svg>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=a67287ea&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  data() {
    return {
      planetSize: "200",
      planetColor: "none",
      planetSatelite: "",
      planetAro: "",
      planetTexture: "none",
      signos: [{
        id: "aries",
        value: false,
        color: "#db6c5a"
      }, {
        id: "tauro",
        value: false,
        color: "#e99468"
      }, {
        id: "geminis",
        value: false,
        color: "#ebd186"
      }, {
        id: "cancer",
        value: false,
        color: "#acba8a"
      }, {
        id: "leo",
        value: false,
        color: "#689782"
      }, {
        id: "virgo",
        value: false,
        color: "#578c80"
      }, {
        id: "libra",
        value: false,
        color: "#5c89a5"
      }, {
        id: "escorpio",
        value: false,
        color: "#306687"
      }, {
        id: "sagitario",
        value: false,
        color: "#00517b"
      }, {
        id: "capricornio",
        value: false,
        color: "#45327a"
      }, {
        id: "acuario",
        value: false,
        color: "#5d2c7a"
      }, {
        id: "piscis",
        value: false,
        color: "#992676"
      }],
      sentimientos: [{
        id: "enérgico",
        value: false,
        texture: 'url(#pat1)'
      }, {
        id: "trance",
        value: false,
        texture: 'url(#pat2)'
      }, {
        id: "relajado",
        value: false,
        texture: 'url(#pat3)'
      }, {
        id: "rockeando",
        value: false,
        texture: 'url(#pat4)'
      }, {
        id: "con ganas de salir",
        value: false,
        texture: 'url(#pat5)'
      }, {
        id: "melanco",
        value: false,
        texture: 'url(#pat6)'
      }],
      animos: [{
        id: "ansioso",
        value: false,
        svg: '<path d="M130.32 46.11c-2-.12 22.34-7.25 25.27-4.19 5.33 5.55-18.86 23.88-25.22 28.2-34.12 23.17-52.37 33.4-91.75 48.06-5 1.87-23.95 7.54-26.66 2.92-1.6-2.74 5.81-11.41 9.32-14.11a38.12 38.12 0 0112.82-7.75c6.58-2.18-9 7.23-9.65 11.26 7.29 3.25 37.22-12.12 42.63-14.92C99.79 78.66 101.61 77 132.75 57.46c2.57-1.61 11.73-7.89 10.22-9.12a54.82 54.82 0 00-12.65-2.23z" fill="#eee8d3"/>'
      }, {
        id: "relajado",
        value: false,
        svg: ""
      }, {
        id: "ns/nc",
        value: false,
        svg: '<path d="M43.44 115.51A89.19 89.19 0 0038 132a34.09 34.09 0 00-1 9.55c.1 1.69.33 4.76 2.45 5.23 1.19.27 2.63-.7 3.6-1.26a55.58 55.58 0 006.53-4.59 234.69 234.69 0 0018.6-16.64q11.1-10.84 21.21-22.63c7.48-8.75 14.38-18 21-27.37 6.19-8.69 12.17-17.56 17.5-26.81 3.67-6.35 7.29-13 9.29-20.1a26.5 26.5 0 001-7.92c-.07-2-.18-4.75-1.83-6.16-2.08-1.76-5.41.23-7.3 1.35a116.78 116.78 0 00-12 8.72 476.45 476.45 0 01-7.21 5.55c-.45.33-.27 1.82-.25 2.31a16.76 16.76 0 00.41 2.27c4.43-3.34 8.73-6.84 13.17-10.17 2.92-2.2 6.1-4.78 9.65-5.89 1.94-.61 3.81-.31 4.6 1.74.06.13.09.27.14.41s0 .2.08.34 0-.38 0-.43v.25c0 .23 0 .46-.08.69-.08.53-.19 1-.3 1.58-1.45 6.35-4.63 12.36-7.73 18a287.19 287.19 0 01-15.38 24.54c-6.32 9.2-12.89 18.29-19.89 27C88 99.35 81.34 106.79 74.43 114c-6.17 6.44-12.56 12.69-19.27 18.58-4.07 3.55-8.33 7.42-13.16 10.05-1 .53-2.17 1.19-3.24.54-1.67-1-1.36-3.22-1.16-4.8.76-6.17 2.79-12.29 4.95-18.1.32-.85.64-1.7 1-2.54a3.4 3.4 0 00.08-1.42c0-.12-.16-.93-.22-.8z" fill="#eee8d3"/>'
      }],
      modos: [{
        id: "optimista",
        value: false,
        svg: '<path d="M7.61 88.84c3.63 1.81 9.12 1.34 11.13-2.32 2.57-4.66.3-8.86-3.61-10.64s-8.77-.1-10.44 2.9c-1.93 3.46-1.29 7.98 2.92 10.06z" fill="#fff"/><path d="M7.27 91c4.66 2.09 10.61 1.18 13-3.76a10 10 0 00-4.08-13.19c-4.65-2.5-10.94-.7-13.06 4.25A9.77 9.77 0 007.27 91c1.78 1 2.32-3.41.67-4.33-2.9-1.61-3.86-5.1-1.22-7.52a7.67 7.67 0 019-.61c3.06 2 3.56 6.15.19 8.16-2.41 1.43-5.54 1.07-8 0-1.91-.88-2.37 3.53-.64 4.3z" fill="#fff"/><path d="M10.73 77.94a.72.72 0 00.86.87.69.69 0 00.12-1.19c-.45-.24-1.07.32-.86.78" fill="#dddddb"/><path d="M4.74 82.33a1 1 0 001.07 1.13 1 1 0 10-.7-1.74 1 1 0 000 1.55" fill="#dddddb"/><path d="M9 89.88v.4a.61.61 0 00.87-.28.55.55 0 00-.56-.67.5.5 0 00-.32.78" fill="#dddddb"/><path d="M14.51 78a.68.68 0 001 .38.81.81 0 00.32-1 .79.79 0 00-1-.39.63.63 0 00-.06 1" fill="#dddddb"/><path d="M7.33 76.92a1.17 1.17 0 01.8-1.72 1.18 1.18 0 011.17 1.5 1.17 1.17 0 01-1.86.36" fill="#dddddb"/><path d="M5.23 86.52a.54.54 0 00.88 0 .5.5 0 00-.47-.71.46.46 0 00-.18.79" fill="#dddddb"/><path d="M15.22 86.33c-.16.12.16.4.25.22s.14-.48-.09-.48-.3.39-.09.48" fill="#dddddb"/><path d="M11.64 87.58a.45.45 0 100-.76.38.38 0 00.24.57" fill="#dddddb"/><path d="M17.5 87.05a.93.93 0 00.81.08.53.53 0 00-.19-.76.52.52 0 00-.68.39.62.62 0 00.5.41" fill="#dddddb"/><path d="M12.87 76.41a.34.34 0 00.11.37.44.44 0 00.15-.81.39.39 0 00-.25.56" fill="#dddddb"/><path d="M4.38 80.23a.5.5 0 00.78-.17.44.44 0 00-.54-.53c-.29.13-.24.66.07.7" fill="#dddddb"/><path d="M14.68 75a.27.27 0 00.33-.3.27.27 0 00-.43-.12v.36" fill="#dddddb"/><path d="M11.84 90c-.19.15 0 .51.23.46a.33.33 0 00.13-.55.41.41 0 00-.6.13l.26.3" fill="#dddddb"/><path d="M11 74.26a.54.54 0 00.79.38.47.47 0 00-.11-.81c-.33-.1-.65.39-.41.64" fill="#dddddb"/><path d="M14.43 90.15a.46.46 0 00.7-.22.44.44 0 10-.79.13" fill="#dddddb"/><path d="M9 80.67a.57.57 0 00.81-.51.9.9 0 00-.92.07l.13.39" fill="#dddddb"/><path d="M18.43 84.28c-.13.26.32.48.53.28a.78.78 0 00.1-.8c-.3-.23-.77.24-.55.54" fill="#dddddb"/>'
      }, {
        id: "pesimista",
        value: false,
        svg: '<path d="M155.68 94.28c.17-2.4.25-5-1.29-7-1.94-2.53-6-2.81-7.79 0a10.11 10.11 0 00-1 3.67 56.87 56.87 0 01-2.27 9.61c-1.92 5.29-5 10-7.41 15.11-.12.26-.27 2.17.33 1.86a31.34 31.34 0 008.75-6.63l-.4-1.72-2.76 10.11c0 .18-.1 2.14.41 1.74a37.08 37.08 0 0013.65-26.59c0-.89-.66-2.08-.78-.57A36.11 36.11 0 01142 119l.41 1.75 2.75-10.13c.05-.18 0-2.15-.41-1.72a31.25 31.25 0 01-8.74 6.66l.33 1.85c2.67-5.68 6.12-11 8-17 .9-2.81 1.06-5.71 1.84-8.52 2.2-7.91 9-5.11 9.12 2.25.05.41.35.7.38.14z" fill="#db6c5a"/><path d="M149.11 94.57a3.23 3.23 0 01-1.52-4.65 3.63 3.63 0 015.7-.54 3.41 3.41 0 01-1.18 5.21 4 4 0 01-3-.02z" fill="#eee8d3"/><path d="M151.72 98.67c-1 4.33-2.2 8.22-4.79 11.9l.42 1.06c.28-2 .42-4.07.7-6.1 0-.13-.07-1.59-.38-1.25a18.55 18.55 0 01-5.34 4l.3 1.67a37.65 37.65 0 005.23-13.57c.11-.53-.35-2.11-.62-.93a39.05 39.05 0 01-5 12.93c-.16.25-.21 1.95.31 1.67a18.89 18.89 0 005.31-4.17l-.41-1.05c-.26 2.05-.39 4.11-.65 6.16 0 .18.13 1.34.44.88a28.9 28.9 0 004.62-13.08c0-.12-.09-.42-.15-.17z" fill="#ebd186"/>'
      }, {
        id: "ns/nc",
        value: false,
        svg: ""
      }],
      estilos: [{
        id: "extraterrestre",
        value: false,
        size: "50"
      }, {
        id: "indie",
        value: false,
        size: "100"
      }, {
        id: "pop-rock",
        value: false,
        size: "200"
      }]
    };
  },

  methods: {
    setSigno(signoid) {
      for (let i = 0; i < this.signos.length; i++) {
        if (this.signos[i].id === signoid) {
          this.planetColor = this.signos[i].color;
        }
      }
    },

    setSentimiento(sentimientoid) {
      for (let i = 0; i < this.sentimientos.length; i++) {
        if (this.sentimientos[i].id === sentimientoid) {
          this.planetTexture = this.sentimientos[i].texture;
        }
      }
    },

    setAnimo(animoid) {
      for (let i = 0; i < this.animos.length; i++) {
        if (this.animos[i].id === animoid) {
          this.planetAro = this.animos[i].svg;
        }
      }
    },

    setModo(modoid) {
      for (let i = 0; i < this.modos.length; i++) {
        if (this.modos[i].id === modoid) {
          this.planetSatelite = this.modos[i].svg;
        }
      }
    },

    setEstilo(estiloid) {
      for (let i = 0; i < this.estilos.length; i++) {
        if (this.estilos[i].id === estiloid) {
          this.planetSize = this.estilos[i].size;
        }
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(27)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "bc183550"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Logo: __webpack_require__(26).default})


/***/ })

};;
//# sourceMappingURL=index.js.map