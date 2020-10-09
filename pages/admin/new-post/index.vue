<template>
  <div class="admin-new-post-pg">
    <section class="new-post-form">
       <AdminFormPost />
    </section>
  </div>
</template>

<script>
import AdminFormPost from '@/components/Admin/AdminFormPost'

export default {
  components : {
    AdminFormPost
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
