<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <img src="../../static/image/yaoji5.jpg" alt />
        <span>电商后台管理系统</span>
      </div>
      <el-button type="primary" @click="logout()">退出</el-button>
    </el-header>
    <!-- 页面主体 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse?'64px':'200px'">
          <div class="toggle-button" @click="toggleCollapse()">|||</div>
        <!-- //侧边栏菜单 -->
        <el-menu background-color="#333744" text-color="#fff"
        active-text-color="#409EFF" unique-opened router
        :collapse="isCollapse" :collapse-transition="isCollapse_transiton"
        :default-active="activePath">
          <!-- 一级菜单 -->
          <el-submenu :index="''+item.id" v-for="item in menulist" :key="item.id">
            <!-- 一级菜单的模板区域 -->
            <template slot="title">
              <!-- 图标 -->
              <i :class="iconsObj[item.id]"></i>
              <!-- 文本 -->
              <span>{{item.authName}}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item :index="'/'+item1.path" v-for="item1 in item.children"
            :key="item1.id" @click="saveNavState('/'+item1.path)">
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-menu"></i>
                <!-- 文本 -->
                <span>{{item1.authName}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧内容主体 -->
      <el-main>
          <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data () {
    return {
      // 左侧菜单数据
      menulist: [],
      iconsObj: {
        '125': 'iconfont el-icon-s-custom',
        '103': 'iconfont el-icon-s-order',
        '101': 'iconfont el-icon-s-goods',
        '102': 'iconfont el-icon-s-data',
        '145': 'iconfont el-icon-s-marketing'
      },
      isCollapse_transiton: false,
      // 是否折叠
      isCollapse: false,
      //   被激活的链接地址
      activePath: ''
    }
  },
  created () {
    this.getMenuList()
    this.activePath = window.sessionStorage.getItem('activePath')
    console.log(this.activePath)
  },
  methods: {
    //   折叠侧边栏
    toggleCollapse () {
      this.isCollapse_transiton = true
      this.isCollapse = !this.isCollapse
    },
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    // 获取所有的菜单数据
    async getMenuList () {
      const {data: res} = await this.$http.get(`menus`)
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
      this.menulist = res.data
      console.log(res)
    },
    // 保存链接的激活状态
    saveNavState (activePath) {
      console.log(activePath)
      window.sessionStorage.setItem('activePath', activePath)

      this.activePath = activePath
    }
  }
}
</script>
<style lang="less" scoped>
.home-container {
  height: 100%;
  .el-header {
    display: flex;
    justify-content: space-between;
    background-color: #373d41;
    padding-left: 0;
    align-items: center;
    color: #fff;
    font-size: 20px;
    > div {
      display: flex;
      align-items: center;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      span {
        margin-left: 15px;
      }
    }
  }
  .el-aside {
    background-color: #333744;
    .toggle-button{
        background-color:#4a5064;
        font-size:10px;line-height: 24px;
        text-align:center;color:#fff;letter-spacing:.2vw;
    }
    .el-menu{
        border:0;
    }
    .iconfont{
        margin-right:15px;
    }
  }
  .el-main {
    background-color: #eaedf1;
  }
}
</style>
