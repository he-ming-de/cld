<template>
  <div></div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
      id: ""
    };
  },
  components: {},
  methods: {
    getData(){
      axios.get(` https://cnodejs.org/api/v1 /topic/${item.id}`).then(res=>{
        console.log(res.data);
      }).catch(err=>{
        console.log(err);
      })
    }
  },
  mounted() {
    this.id=this.$route.query.id
    this.getData()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>