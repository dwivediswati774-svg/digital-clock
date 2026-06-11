 // ⏰ Digital Clock (setInterval)
setInterval(() => {
  let now = new Date();
  document.getElementById("clock").innerText =
    now.toLocaleTimeString();
}, 1000);

// 🎨 Background Color Changer (setInterval)
setInterval(() => {
  let  colors = ["#ff5733", "#33ff57", "#3357ff", "#ff33a8", "#f4d03f"];
  let random = Math.floor(Math.random() * colors.length);
  document.body.style.background = colors[random];
}, 2000);

// 👋 Welcome Message (setTimeout)
setTimeout(() => {
  document.getElementById("msg").innerText =
     "";
}, 2000);