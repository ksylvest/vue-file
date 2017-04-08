(function (global) {
  var VueFile = {};

  VueFile.install = function (Vue) {
    Vue.directive("file", {
      bind: function (el, binding, vnode) {
        console.log('bind', el, binding, vnode);
      },
    });
  };

  if (typeof exports === "object") {
    module.exports = VueFile;
  } else {
    global.VueFile = VueFile;
    if (global.Vue) {
      global.Vue.use(VueFile);
    }
  }

})(this);
