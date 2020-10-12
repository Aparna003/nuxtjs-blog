<template>
  <div class="admin-new-post-pg">
    <section class="new-post-form">
       <AdminFormPost @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import AdminFormPost from '@/components/Admin/AdminFormPost'
import axios from 'axios'
export default {
  components : {
    AdminFormPost
  },
  methods:{
    onSubmitted(postData){
       axios.post('https://nuxtvue-blog.firebaseio.com/posts.json',postData)
       .then(result=>console.log(result))
       .catch(e => console.log(e))
    }
  }
};
</script>

<style scoped>
 .new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
