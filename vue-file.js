(function (global) {
  var VueFile = {};

  VueFile.install = function (Vue) {
    Vue.directive("file", {
      bind: function (el, binding, vnode) {
        el.addEventListener('change', function (event) {
          var files = event.target.files;
          for (var index = 0; index < files.length; index++) {
            var file = files[index];
            (function (file) {
              if (typeof FileReader !== "undefined") {
                var reader = new FileReader();
                reader.onload = function (event) {
                  binding.value(file, event.target.result);
                };
                reader.readAsDataURL(file);
              } else {
                binding.value(file);
              }
            })(file);
          }
        });
      },
    });
  };

  if (typeof exports !== "undefined") {
    module.exports = VueFile;
  } else {
    global.VueFile = VueFile;
    if (global.Vue) {
      global.Vue.use(VueFile);
    }
  }

})(this);
