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
        <div class="item6 hover">
          <img :src="item.author.avatar_url" width="30px" />
        </div>
        <div class="d-f">
          <div class="m-l1">{{item.reply_count}}</div>
          <div>/</div>
          <div class="f-s12 d-f a-i-c">{{item.visit_count}}</div>
        </div>
        <div class="m-l1">
          <div v-if="item.tab==='share'">
            <div v-if="index < 2">
              <div class="share">置顶</div>
            </div>
            <div v-else>
              <div class="ask">分享</div>
            </div>
          </div>
          <div v-else-if="item.tab==='ask'">
            <div class="ask">问答</div>
          </div>
          <div v-else>
            <div class="share">精华</div>
          </div>
        </div>
        <div class="m-l1 item7">{{item.title}}</div>
      </div>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      ></el-pagination>
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
.share {
  background: #80bd01;
  padding: 2px 4px;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -o-border-radius: 3px;
  color: #fff;
  font-size: 12px;
}
.ask {
  background-color: #e5e5e5;
  color: #999;
  padding: 2px 4px;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -o-border-radius: 3px;
  font-size: 12px;
}
.item7:hover {
  cursor: pointer;
  text-decoration: underline;
}
</style>