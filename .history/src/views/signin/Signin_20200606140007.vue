<template>
  <div class="d-f">
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
              <a class="m-l1 box4">忘记了密码？</a>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <div class="m-l2 m-t1 box5">
      <div class="box1 p-t1 p-b1 p-l2">关于</div>
      <div class="m-t1 m-b1 p-l2">CNode：Node.js专业中文社区</div>
      <div class="m-b1 p-l2">在这里你可以：</div>
      <ul class="m-l3 p-l2">
        <li>向别人提出你遇到的问题</li>
        <li>帮助遇到问题的人</li>
        <li>分享自己的知识</li>
        <li>和其它人一起进步</li>
      </ul>
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
  methods: {
    ubmitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
  },
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
  background: rgb(91, 192, 222);
}
.box3:hover {
  background: rgb(47, 150, 180);
}
.box4:hover {
  text-decoration: underline;
  cursor: pointer;
}
.box5 {
  width: 340px;
}
</style>