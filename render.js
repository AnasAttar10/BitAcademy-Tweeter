const Render = function(){

    let reRender = function(Posts){

        $("#posts").empty()

        let newPost 
     
        for (const post of Posts) {
     
              newPost = 
     
             `<div id=${post.id} class="newPost">
     
                 <p class="postText">${post.text}</p>
     
                 <div class="comments">`
     
                 for (const comment of post.comments) {
     
                     newPost +=
     
                     `<div id=${comment.id}>
     
                         <span class="delete-comment" >X</span>
     
                         <span>${comment.text}</span>

                     </div>`
                 }
                 newPost +=

                 `<div class="NewComment">

                 <input type="text" class="inputComment"/>

                 <button class="addNewComment">comment</button>

                 </div>
                 </div>

                 <button class="delete">Delete Post</button>
     
              </div>`
     
             $("#posts").append(newPost)

    }

   }

   return{

    reRender :reRender

   }

}
