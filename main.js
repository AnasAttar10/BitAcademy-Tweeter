
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

