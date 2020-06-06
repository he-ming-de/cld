<template>
  <div>
    <div>
      <div class="container">
        <div class="warp d-f a-i-c j-c-s-b">
          <div class="d-f a-i-c">
            <div>
              <img
                src="https://static2.cnodejs.org/public/images/cnodejs_light.svg"
                height="30px"
                class="hover"
              />
            </div>
            <div>
              <i class="iconfont icon-sousuo"></i>
              <input type="text" />
            </div>
          </div>
          <div class="d-f a-i-c">
            <div class="p1 c-c nav1">首页</div>
            <div class="p1 c-c nav1">新手入门</div>
            <div class="p1 c-c nav1">API</div>
            <div class="p1 c-c nav1">关于</div>
            <div class="p1 c-c nav1">注册</div>
            <div class="p1 c-c nav1" @click="signins">登录</div>
          </div>
        </div>
      </div>
      <div d-f>
        <router-view></router-view>
        <Sidebar></Sidebar>
      </div>
      <div>
        <First></First>
      </div>
    </div>
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
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$router.push("/");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
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
  background: #fff;
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
  background: #fff;
}
.container {
  background: rgb(68, 68, 68);
  height: 50px;
}
.icon-sousuo {
  position: absolute;
  left: 275px;
  top: 16px;
}
input {
  outline: none;
  margin-left: 15px;
  height: 25px;
  width: 200px;
  border: 0.5px solid transparent;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.5);
  padding-left: 25px;
  transition: all .5s;
}
input:hover {
  background: rgb(255, 255, 255);
}
.nav1 {
  color: rgba(255, 255, 255, 0.5);
}
.nav1:hover {
  cursor: pointer;
  color: #fff;
}
</style>