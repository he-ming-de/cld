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
    getdata(){
      axios.get(``)
    }
  },
  mounted() {
    this.id=this.$route.query.id
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>