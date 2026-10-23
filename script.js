const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");

menuToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();

// Cstoney420 video shuffle. Includes the video and stream links supplied by the site owner.
const videos = [
  { id: "4-eGOst2cvY", type: "VIDEO" },
  { id: "gpn8EE7qklU", type: "VIDEO" },
  { id: "wlr1Omj3bD0", type: "STREAM / REPLAY" },
  { id: "jbTCXLW5U4M", type: "STREAM / REPLAY" },
  { id: "iUPwKi22m9o", type: "STREAM / REPLAY" }
];
const player = document.querySelector("#youtube-player");
const videoMessage = document.querySelector("#video-message");
const randomVideoButton = document.querySelector("#random-video");
let currentVideoId = "";

function pickRandomVideo() {
  if (!videos.length) return;
  let choices = videos.filter((video) => video.id !== currentVideoId);
  if (!choices.length) choices = videos;
  const video = choices[Math.floor(Math.random() * choices.length)];
  currentVideoId = video.id;
  player.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(video.id)}`;
  videoMessage.textContent = `Random pick loaded: ${video.type}. Press play in the player to watch.`;
}

randomVideoButton.addEventListener("click", pickRandomVideo);
pickRandomVideo();
