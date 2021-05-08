/**
 * DONE: Create getPostIdParam to get the id of the post to use in the request later
 * DONE: Complete getPost function to get post data from API
 * DONE: Complete buildPost function to fill in the post data in the post.html file using ids
 */

const API_URL = "http://localhost:3000/api/posts/";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
    getPost();
}

const getPostIdParam=()=>{
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString); 
    return urlParams.get('id');
}

const getPost = () => {
    // CODE GOES HERE
    const postId = getPostIdParam();
    const URL = `${API_URL}${postId}`;
    fetch(URL,{
        method:'GET'
    }).then((response)=>{
        return response.json();
    }).then((data)=>{
        buildPost(data);
    })
}

const buildPost = (data) => {
    const postImage = `${API_BASE_URL}${data.post_image}`;
    document.getElementById('individual-post-title').innerHTML = data.title;
    document.getElementById('individual-post-date').innerHTML = new Date(parseInt( data.added_date) ).toDateString();
    document.getElementById('individual-post-content').innerHTML = data.content;
    document.querySelector("header").style.backgroundImage = `url(${postImage})`
}

