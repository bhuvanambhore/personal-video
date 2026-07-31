if(localStorage.getItem("loggedIn")!=="true"){
location.href="login.html";
}
const videos = [

{
title:"Vacation",
url:"#"
},

{
title:"Family",
url:"#"
},

{
title:"Tutorial",
url:"#"
}

];

const list=document.getElementById("videoList");

videos.forEach(video=>{

const card=document.createElement("div");

card.className="card";

card.innerHTML=`

<h3>${video.title}</h3>

<button onclick="alert('Video player coming in Step 4')">

Play Video

</button>

`;

list.appendChild(card);

});
