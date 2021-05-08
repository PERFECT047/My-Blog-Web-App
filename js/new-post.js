/**
 * DONE: Finish submitNewPost function to submit form data to the API 
 */

const API_URL = "http://localhost:3000/api/posts";

const submitNewPost = () => {

    var data = new FormData(); //FormData for submission
    const title =document.getElementById("form-post-title").value;
    const content = document.getElementById("form-post-content").value;
    const input = document.getElementById("form-post-image");
    
    data.append("title",title);
    data.append("content",content);
    data.append("post-image",input.files[0]);

    fetch(API_URL,{
        method:"POST",
        body: data
    }).then(()=>{
        setTimeout(()=>{
            window.location.href = "index.html";
        },1000);  
    })
}