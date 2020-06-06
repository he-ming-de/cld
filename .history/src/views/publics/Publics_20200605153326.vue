<template>
  <div class="container">
    <div class="warp nav d-f a-i-c">
      <div class="d-f a-i-c">
        <div>
          <img src="https://static2.cnodejs.org/public/images/cnodejs_light.svg" height="30px" />
        </div>
        <div>
          <i class="iconfont icon-sousuo"></i>
          <input type="text" />
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.container {
  background: rgb(68, 68, 68);
}
.nav {
  height: 50px;
}
.icon-sousuo {
  position: absolute;
  left: 270px;
  top: 50px;
}
input {
  outline: none;
  margin-left: 10px;
  height: 24px;
  width: 240px;
  border: 0.5px solid transparent;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.5);
}
input:hover {
  background: rgb(255, 255, 255);
}
</style>