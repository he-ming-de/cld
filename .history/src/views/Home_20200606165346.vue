<template>
  <div class="item1 m3">
    <div class="item2">
      <div class="p1 d-f">
        <div class="item3 c-c">全部</div>
        <div class="item4 p-r1 p-l1">精华</div>
        <div class="item4 p-r1 p-l1">分享</div>
        <div class="item4 p-r1 p-l1">问答</div>
        <div class="item4 p-r1 p-l1">招聘</div>
        <div class="item4 p-r1 p-l1">客户端测试</div>
      </div>
      <div v-for="(item,index) in arr" :key="index" class="item5 p1 d-f a-i-c">
        <div class="item6">
          <img :src="item.author.avatar_url" width="30px" />
        </div>
        <div class="d-f">
          <div class="m-l1">{{item.reply_count}}</div>
          <div>/</div>
          <div class="f-s12 d-f a-i-c">{{item.visit_count}}</div>
        </div>
        <div v-if="index < 2">
        <div>置顶</div>
        </div>
        <div v-if="item.tab==='share'">
          <div>分享</div>
        </div>
        <div v-if="item.tab==='ask'">
          <div>问答</div>
        </div>
        <div class="m-l1">{{item.tab}}</div>
        <div class="m-l1">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
      arr: []
    };
  },
  components: {},
  methods: {
    getdata() {
      axios
        .get(`https://cnodejs.org/api/v1/topics`)
        .then(res => {
          console.log(res.data);
          this.arr = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getdata();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.item1 {
  background: #fff;
  width: 1062px;
}
.item2 {
  background: rgb(246, 246, 246);
}
.item3 {
  background: rgb(128, 189, 1);
  border-radius: 5px;
  padding: 0 5px;
}
.item4 {
  color: rgb(128, 189, 1);
}
.item5 {
  border-bottom: 1px solid #ccc;
}
.item6 {
  width: 30px;
  height: 30px;
}
</style>