
let _Posts = [
    {
        text: "First post!",
        id: "p1",
        comments: [
            { id: "c1", text: "First comment on first post!" },
            { id: "c2", text: "Second comment on first post!!" },
            { id: "c3", text: "Third comment on first post!!!" }
        ]
    },
    {
        text: "Aw man, I wanted to be first",
        id: "p2",
        comments: [
            { id: "c4", text: "Don't wory second poster, you'll be first one day." },
            { id: "c5", text: "Yeah, believe in yourself!" },
            { id: "c6", text: "Haha second place what a joke." }
        ]
    }
] 
 


const Tweeter = function(){

let postIdCounter = _Posts.length ;

let commentsCounter = countcomments()


let getPosts = function(){

    for (const post of _Posts) {

        console.log(post);

    }
}

let addPost = function(text){

    let newPost ={"text" : 0 , "id" :0 , "comments" : 0 }

    newPost.text = text ;

    newPost.id = "p" + (postIdCounter + 1);

    newPost.comments =[]

    _Posts.push(newPost)

    postIdCounter++;
}

let removePost = function(postId){

    const targetIndex = _Posts.findIndex(post => {

        return  post.id === postId
        
    })

    _Posts.splice(targetIndex , 1)

}

let addComment = function(comment , postId){

    let newComment ={"id" : 0 , "text" : 0} 

    commentId = "c"+ (commentsCounter+1)

    newComment["id"] = commentId 

    newComment["text"]=comment
    
    const targetIndex = _Posts.findIndex(post => {

        return  post.id === postId
        
    })

    commentsCounter++ 


    _Posts[targetIndex].comments.push(newComment)

}

let removeComment = function(postId , commentId){

    const targetIndexForPost = _Posts.findIndex(post => {

        return  post.id === postId
        
    })

    const targetIndexForcomment = _Posts[targetIndexForPost].comments.findIndex(comment => {

        return  comment.id === commentId
        
    })

    _Posts[targetIndexForPost].comments.splice( targetIndexForcomment , 1)

}

 function countcomments (){

    let TotalComments = 0  ; 

    for (const post of _Posts) {

        let CountCommentsEveryPost = post.comments.length

        TotalComments += CountCommentsEveryPost

    }

    return TotalComments ;
}

return {

    getPosts : getPosts ,

    addPost : addPost ,

    removePost : removePost ,

    addComment : addComment ,

    removeComment : removeComment ,

}

}

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


const test =Tweeter()

const render =Render()

let input =$("#input")

let postbtn = $("#post")

render.reRender(_Posts)

postbtn.on("click" , function(){

    test.addPost(input.val())

    render.reRender(_Posts)

    input.val("")

})

$("#posts").on("click" , ".delete" , function(){
    
    let postId = $(this).closest(".newPost").attr("id");

    console.log(postId);

    test.removePost(postId)

    render.reRender(_Posts)
    
})

$("#posts").on("click" , ".addNewComment" , function(){

    let commentValue = $(this).siblings(".inputComment").val()

    let postId = $(this).closest(".newPost").attr("id")

    test.addComment(commentValue, postId)

    render.reRender(_Posts)

    $(this).siblings(".inputComment").val("")

})

$("#posts").on("click",".delete-comment" , function(){

    let postId = $(this).closest(".newPost").attr("id")

    let commentId = $(this).closest("div").attr("id")

    console.log(postId , commentId);

    test.removeComment(postId, commentId)

    render.reRender(_Posts)


})

