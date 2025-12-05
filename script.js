const posts = [
  {
    id: 1,
    title: "چرا دیگر به سری Assassins Creed علاقه‌ای نداریم",
    text: "سالیان سال با دنیای Assassin’s Creed بزرگ شدم؛ دنیایی که برایم فقط یک بازی نبود، بلکه بخشی از نوجوانی‌ام بود.\nاما با گذشت زمان، مسیر این سری آن‌قدر تغییر کرد که دیگر آن حماسه‌ی آشنا را در آن پیدا نمی‌کنم.\nاین نوشته، روایت دل‌زدگی کسی است که روزی عاشقانه پای هر قسمت این مجموعه می‌نشست.",
    full: "<p>از اوایل دوران نوجوانی شروع شد؛ همان زمانی که برای اولین بار نسخه‌ی اول Assassin’s Creed را بازی کردم و انگار یک دنیای تازه به رویم باز شد...</p>",
    cover: "https://i.ibb.co/3W5FQ6J/asc.png"
  },
  {
    id: 2,
    title: "چرا بازی‌های جدید کمتر هیجان‌انگیز هستند",
    text: "بازی‌های جدید معمولاً گرافیک بهتری دارند، اما احساس و هیجان گذشته را ندارند.\nدلیلش می‌تواند تغییر مسیر سازندگان و تمرکز بر فروش باشد.",
    full: "<p>بازی‌های جدید معمولاً گرافیک بسیار بهتری نسبت به گذشته دارند و دنیای بزرگ‌تری ارائه می‌دهند، اما متأسفانه حس و هیجان بازی‌های کلاسیک را منتقل نمی‌کنند...</p>",
    cover: "https://i.ibb.co/3W5FQ6J/game2.png"
  }
];

// نمایش مقالات در index.html
const container = document.getElementById("posts");
posts.forEach(post => {
  const div = document.createElement("div");
  div.className = "post";
  div.innerHTML = `
    <img src="${post.cover}" alt="${post.title}" style="max-width:200px;">
    <h2>${post.title}</h2>
    <p>${post.text.replace(/\n/g, "<br>")}</p>
    <button onclick="location.href='article.html?id=${post.id}'">ادامه مطلب</button>
  `;
  container.appendChild(div);
});

