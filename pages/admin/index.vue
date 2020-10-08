<template>
  <div class="admin-page">
     <section class="new-post">
      <vs-button class="btn"
        transparent
        :active="active == 0"
        @click="$router.push('/admin/new-post')"> Create Post</vs-button>
     </section>
     <section class="existing-posts">
       <h1>Existing Posts </h1>
       <PostList />
     </section>
  </div>
</template>
<script>
import PostList from '@/components/Posts/PostList'
export default {
  components :{ PostList },
  data:()=> ({
        active: 0
      })
}
</script>

<style scoped>
.btn {
 margin: 0 2em;
 font-weight:bold;

}
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>
