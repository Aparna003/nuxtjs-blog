<template>
  <div class="admin-post-page">
    <section class="update-form">
     <AdminFormPost :post="loadedPost" />
   </section>
  </div>
</template>

<script>
import AdminFormPost from '@/components/Admin/AdminFormPost'
export default {
  layout: 'admin',
  components : {
    AdminFormPost
  },
  data(){
    return {
      loadedPost :{
        author : 'Aparna',
        title : "Story of my life",
        content: "Super amazing story! thank you",
        thumbnailLink: 'https://agnitogeek.com/wp-content/uploads/2020/03/download-16.png'
      }
    }
  }
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
