<template>
  <div>
    <div class="nav m-t1 f-d-c">
      <div>
        <div class="box1 d-f p-t1 p-b1">
          <div class="box2 p-l2">主页</div>
          <div class="box1 m-r1 m-l1">/</div>
          <div class="box1">登录</div>
        </div>
        <div class="box m-t2 m-l3">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="用户名" prop="username">
              <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="ruleForm.password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="pass">
              <el-input v-model="ruleForm.pass"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
              <el-button type="primary" @click="submitForm('ruleForm')" class="box3">通过 GitHub 登录</el-button>
              <a>忘记了密码？</a>
            </el-form-item>
          </el-form>
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
    return {
      ruleForm: {
        password: "",
        username: "",
        pass: ""
      },
      rules: {
        username: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur"
          },

          {
            min: 2,
            max: 10,
            message: "在2~10之间",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          },
          {
            min: 6,
            max: 15,
            message: "在6~15之间",
            trigger: "biur"
          }
        ],
        pass: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          },
          {
            min: 6,
            max: 15,
            message: "在6~15之间",
            trigger: "biur"
          }
        ]
      }
    };
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box1 {
  background: rgb(246, 246, 246);
}
.box2 {
  color: rgb(128, 189, 1);
}
.box {
  width: 500px;
}
.nav {
  width: 1000px;
  margin-left: 60px;
}
.box3 {
  background: rgb(91,192,222);
}
</style>