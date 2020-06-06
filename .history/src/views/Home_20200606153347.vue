<template>
  <div class="item">
    <div class="item1">
      <div class="item2">
        <div class="p1">
          <div class="item3 c-c p-r1 p-l1">全部</div>
          <div class="item4 p-r1 p-l1">精华</div>
          <div class="item4 p-r1 p-l1">分享</div>
          <div class="item4 p-r1 p-l1">问答</div>
          <div class="item4 p-r1 p-l1">招聘</div>
          <div class="item4 p-r1 p-l1">客户端测试</div>
        </div>
      </div>
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
.item {
  background: rgb(225, 225, 225);
}
.item1 {
  background: #fff;
  width: 1062px;
}
.item2 {
  background: rgb(246, 246, 246);
}
.item3 {
  background: rgb(128, 189, 1);
}
.item4 {
  color:rgb(128,189,1);
}
</style>