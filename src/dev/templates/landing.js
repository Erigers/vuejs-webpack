export default{
  data (){
    return {
      name: 'erigers',
      age: null,
      born: 1992
    }
  },

  methods: {
    calcAge () {
      const today = new Date();
      const year = today.getFullYear();
      return this.age = year - this.born;
    }
  },

  created () {
    this.calcAge();
  }
}
