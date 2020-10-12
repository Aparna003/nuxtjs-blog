import Vuex from 'vuex'

const createStore= () =>{
   return new Vuex.Store({
      state: {
        loadedPosts:[]
      },
      mutations:{
        setPosts(state, posts){
          state.loadedPosts = posts
        }
      },
      actions:{
        nuxtServerInit(vuexContext,context) {
            return new Promise((resolve, reject)=>{
             setTimeout(() => {
               vuexContext.commit('setPosts',[
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
               ])
               resolve();
              },1500)})

             },
        setPosts(vuexContext, posts){
           vuexContext.commit('setPosts',posts)
        }
      },
      getters:{
        loadedPosts(state){
           return state.loadedPosts
        }
      }
   })
}

export default createStore
