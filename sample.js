new Vue({
    el: '#app',
    data: {
      list:[
        {
          id: 1,
          name: 'sample',
          course: 'sample',
          time: 'sample'
        }
      ],
    },
    methods:{
      add: function () {
        var max = this.list.reduce(function (a, b) {
          if(a.id > b.id){
            return a.id
          }else{
            return  b.id
          }
        }, 0)
        this.list.push({
          id: max + 1,
          name: this.name,
          course: this.course,
          time: this.time
        })
      }
    }
})
