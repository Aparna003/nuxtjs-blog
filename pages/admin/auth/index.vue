<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form>
        <!-- <AppControlInput type="email">E-Mail Address</AppControlInput>
        <AppControlInput type="password">Password</AppControlInput> -->
        <div class="center content-inputs">
      <vs-input placeholder="Email" v-model="value" />
      <br>
       <vs-input type="password" v-model="pwd" placeholder="Password">
      </vs-input>
    </div>

        <AppButton type="submit">{{ isLogin ? 'Login' : 'Sign Up' }}</AppButton>
        <AppButton
          type="button"
          btn-style="inverted"
          style="margin-left: 10px"
          @click="isLogin = !isLogin">Switch to {{ isLogin ? 'Signup' : 'Login' }}</AppButton>
      </form>
    </div>
  </div>
</template>

<script>
import AppControlInput from '@/components/UI/AppControlInput'
import AppButton from '@/components/UI/AppButton'

export default {
  name: 'AdminAuthPage',
  layout: 'admin',
  components: {
    AppControlInput,
    AppButton
  },
  data() {
    return {
      isLogin: true,
      value: '',
      pwd:'',

    }
  }
}
</script>

<style scoped>
.admin-auth-page {
  padding: 20px;
}
.content-inputs{
  margin:1em 2em;
}
.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}
</style>

