(function (global) {
  var VueFile = {};

  VueFile.install = function (Vue) {

    Vue.directive("file-picker", {
      bind: function (el, binding, vnode) {
        el.addEventListener("change", function (event) {
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

    Vue.filter("file-size", function (size, precision) {
      var sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
      var index = 0;
      var block = 1024;
      if (!precision) { precision = 4; }

      while (size > block) {
        size /= block;
        index++;
      }

      size = Number(Math.round(size + 'e+' + precision) + 'e-' + precision);

      return size + " " + sizes[index];
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
