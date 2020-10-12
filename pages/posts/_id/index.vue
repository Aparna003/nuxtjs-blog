 <template>
   <div class="single-post-pg">
    <section class="post">
      <h2 class="post-title">{{ loadedPost.title }}</h2>
        <div class="post-details">
          <div class="post-detail" >{{ loadedPost.updatedDate }}</div>
          <div class="post-detail"> {{ loadedPost.author }}</div>
        </div>
        <p class="post-content">{{ loadedPost.content  }} </p>
    </section>
    <section class="post=feedback">
      <p> For more queries send a mail to <a href="mailto:feedback@blog.com">feedback@blog.com</a></p>
     </section>
    </div>
 </template>

<script>
export default {
  asyncData(context,callback){
    setTimeout(() => {
         callback(null,{
        loadedPost : {
           id:'1',
           title: "first post  (id:"+context.route.params.id+")",
           previewText: 'this is my preview text',
           author: 'Aparna',
           updatedDate :new Date(),
           content: 'static  content used as dummy content',
           thumbnail:'https://agnitogeek.com/wp-content/uploads/2020/03/download-16.png'
        }
      })
    },1000)
  }
}
</script>

<style scoped>
.single-post-pg {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}

</style>
