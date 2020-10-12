<template>
  <div class = "posts-pg">
   <PostList />
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList';
export default {
  components: {
    PostList
    },
   asyncData(context) {
     return new Promise((resolve, reject)=>{
      setTimeout(() => {
          resolve({
         loadedPosts :[
         {
           id:'1',
           title: "first post",
           previewText: 'this is my preview text',
           thumbnail:'https://agnitogeek.com/wp-content/uploads/2020/03/download-16.png'
         },
         {
           id:'2',
           title: "My Web project",
           previewText: 'this is my preview of project',
           thumbnail:'https://wallpapercave.com/wp/wp4974478.jpg'
         },
         {
           id:'3' ,
           title: "first post",
           previewText: 'this is my preview text',
           thumbnail:'https://wallpapercave.com/wp/wp4974475.jpg'
         }
       ]
      });
     },1500);
     })
     .then(data =>{
       return data
     })
     .catch(e=> {
       context.error(new Error())
     });
   },
}
</script>

<style>
.posts-pg {
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>
