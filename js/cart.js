var vue = new Vue({
  el: "#app",
  data: {
    title: 'hello vue'
  },
  filters: {

  },
  mounted: function () {
    this.test()
  },
  methods: {
    test: function () {
      this.title = 'vue hello'
    }
  }
})