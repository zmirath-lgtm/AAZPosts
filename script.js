// بارگذاری مقالات از posts.json
fetch("posts.json")
  .then(res => res.json())
  .then(posts => {
    const container = document.getElementById("posts");
    posts.forEach(post => {
      const div = document.createElement("div");
      div.className = "post";
      div.innerHTML = `
        <img src="${post.cover}" alt="${post.title}">
        <h2>${post.title}</h2>
        <p>${post.text}</p>
        <button onclick="location.href='article.html?id=${post.id}'">ادامه مطلب</button>
      `;
      container.appendChild(div);
    });
  })
  .catch(err => console.error("مشکل در بارگذاری مقالات:", err));
