<template>
<div>
    <x-header :right-options="{showMore: true}" @on-click-more="showMenus=true">中铁一局物资管理系统</x-header>
     <actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
     
	        <transition name="fade">
                <router-view></router-view>
            </transition>
      <tabbar>
       <tabbar-item show-dot >
            <img slot="icon" src="../assets/vux_logo.png">
            <span slot="label">返回</span>
        </tabbar-item>
        <tabbar-item show-dot link="/home">
            <img slot="icon" src="../assets/vux_logo.png">
            <span slot="label">主页</span>
        </tabbar-item>
        <tabbar-item selected link="/systemConfig">
            <img slot="icon" src="../assets/vux_logo.png">
            <span slot="label">系统设置</span>
        </tabbar-item>
    </tabbar>
  </div>
  
</template>

<script>
import { XHeader,Actionsheet,Tabbar, TabbarItem} from 'vux'
export default {
    components: {
        XHeader,
        Actionsheet,
        Tabbar, 
        TabbarItem, 
    },
    data(){
        return{
            menus: {
                menu1: '转化角色',
                menu2: '人员信息',
                menu3: '注销登录'  
            },
            showMenus: false
      }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
