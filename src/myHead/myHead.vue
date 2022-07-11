<template>
  <div id="myhead">
    <el-row :gutter="10">

      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content bg-purple" id="myhead-logo">
          <a href="">
            <img src="../assets/logo.png" alt="" />
          </a>
        </div>
      </el-col>

      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content bg-purple">

        </div>
      </el-col>

      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content bg-purple-light">
          <div class="head-input">
            <input type="text" class="search" placeholder="搜索产品" />
            <button id="the_uni_search" class="btn"><i class="el-icon-search"></i></button>
          </div>
        </div>
      </el-col>

      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content bg-purple-light">
          <div class="login">
            <router-link to="/login"><i class="el-icon-user-solid">登陆</i></router-link>
          </div>
        </div>
      </el-col>

    </el-row>
  </div>

</template>

<script>
export default {
  name: "myHead",
};
</script>

<style scoped>

* {
  padding: 0 0;
  margin: 0 0;
}

#myhead {
  /* border-bottom: 1px solid #000000; */
  background: #ffffff;
  box-shadow: 10px 10px 30px #dcdfe6;
  width: 100%;
  height: 8%;
  position: fixed;
  z-index: 100;
}

#myhead-logo{
  margin: 7px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.head-input {
  padding: 4px 0;
  position: absolute;
  right: 15%;
}

.bg-purple-light .head-input .search {
  margin: 5px;
  display: inline-block;
  width: 200px;
  height: 30px;
}

.bg-purple-light .head-input .btn {
  display: inline-block;
  height: 35px;
  width: 35px;
}

.bg-purple-light .login {
  padding: 14px;
  margin-left: 30px;
  align-self: center;
}

.bg-purple {
    background: #ffffff;
}

</style>

