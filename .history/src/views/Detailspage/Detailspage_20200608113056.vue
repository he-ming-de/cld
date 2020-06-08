<template>
  <div>
  <div>{{item.c}}</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Detailspage",
  props: {},
  data() {
    return {
      id: "",
      detail:{}
    };
  },
  components: {},
  methods: {
    getData(){
      axios.get(` https://cnodejs.org/api/v1 /topic/${item.id}`).then(res=>{
        this.detail=res.data.data
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