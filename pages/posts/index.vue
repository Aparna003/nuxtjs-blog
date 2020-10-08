<template>
  <div class = "posts-pg">
   <PostList />
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList';
export default {
  components: { PostList }
}
</script>

<style>
.posts-pg {
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>
