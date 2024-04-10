// write your code here
const cardTitle=document.getElementById("card-title");
const dogImage=document.getElementById("card-image");
const comment=document.getElementById("comments-list");
const likeCount=document.getElementById("like-count");
const post=document.getElementById("comment-button" );
const submittedPost=document.getElementById("comment-form")
cardTitle.innerText="Woofing those bugs away"
 
//getting the comments rn

  function getdata(){
    const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
  fetch("http://localhost:3000/comments", requestOptions)
    .then((response) => response.json())
    .then((result) =>{
      console.log(result);
      updateList(result)
  }) 

    .catch((error) => console.error(error));
  
  }
getdata()
   

   function updateList(ctn) {
    let html = "";
    for (let i = 0; i < ctn.length; i++) {
      let ctns = ctn[i].content; 
      html += `<li>${ctns}</li>`; 
    }
    
    comment.innerHTML = `<ul id="comments-list" class="comments">${html}</ul>`; 
  }


function likes() {
  const btn = document.getElementById("like-button");
  let count = 0;

  btn.addEventListener('click', function() {
    count++;
    console.log('Likes: ' + count);
    const likeCount = document.getElementById("like-count");
    likeCount.innerText = ` ${count} Likes`;
  });
}
likes()



function posting(q){
  const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "imageId": 1,
  "content":q
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("http://localhost:3000/comments", requestOptions)
  .then((response) => response.text())
  .then((result) =>{console.log(result)
    getdata()
  })

  .catch((error) => console.error(error));
}

document.getElementById("comment-form").addEventListener("submit",function(e){
e.preventDefault()
let input=document.getElementById("comment")
posting(input.value)

})


 




   











