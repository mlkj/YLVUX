<template>
<div>
    <x-header :left-options="{showBack: false}">中铁一局物资管理系统</x-header>
    <div style="text-align:center">
      <img src="../assets/logo.png" ></x-img>
    </div>
    <group >
      <x-input title="用户名" name="userName" v-model="loginForm.userName" required placeholder="请输入账号" is-type="text"></x-input>
    </group>
    <group >
      <x-input title="密码" name="email" required v-model="loginForm.passWord"  placeholder="请输入密码" is-type="password"></x-input>
    </group>
    <div style="padding:15px;">
      <x-button @click.native="_login" type="primary"> 登录</x-button>
       <x-button @click.native="_resetForm" type="warn"> 取消</x-button>
    </div>
</div>
</template>

<script type="text/babel">
import { XInput, Group, XButton, Cell,XHeader } from 'vux'
export default {
   components: {
    XInput,
    XButton,
    Group,
    Cell,
    XHeader
   },
    data(){
        return {
            loginForm:{
                userName: "",
                passWord: ""
            }
        }
    },
    methods:{
      _resetForm(){
        console.log("cancel!");
      },
      _login(){
        console.log("success!");
        this.$router.push({ path:'/home'});
      }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
