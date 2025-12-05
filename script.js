// بارگذاری مقالات از localStorage
let posts = JSON.parse(localStorage.getItem("posts")) || [];

const container = document.getElementById("posts");

posts.forEach(post=>{
  const div = document.createElement("div");
  div.className="post";
  div.innerHTML = `
    <img src="${post.cover}" alt="${post.title}">
    <h2>${post.title}</h2>
    <p>${post.text}</p>
    <button onclick="location.href='article.html?id=${post.id}'">ادامه مطلب</button>
  `;
  container.appendChild(div);
});
