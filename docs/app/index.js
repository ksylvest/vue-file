import axios from "axios";

import Vue from "vue";
import VueFile from "vue-file";

Vue.use(VueFile);

(function () {
  var app = new Vue({
    el: "#app",
    data: {
      selections: [],
    },
    methods: {
      selected: function (file, data) {
        this.selections.push({ file: file, data: data });
      },
    },
  });
})();
