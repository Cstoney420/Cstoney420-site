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

const videoInput = document.querySelector("#youtube-id");
const loadVideoButton = document.querySelector("#load-video");
const player = document.querySelector("#youtube-player");
const videoMessage = document.querySelector("#video-message");

function getYouTubeId(value) {
  const input = value.trim();
  // Accept a bare video ID or common YouTube URL formats.
  if (/^[a-zA-Z0-9_-]{11}$/.test(input)) return input;

  try {
    const url = new URL(input);
    if (url.hostname === "youtu.be" || url.hostname.endsWith(".youtu.be")) {
      return url.pathname.split("/").filter(Boolean)[0] || null;
    }
    if (url.hostname.includes("youtube.com")) {
      if (url.pathname === "/watch") return url.searchParams.get("v");
      const parts = url.pathname.split("/").filter(Boolean);
      if (["embed", "shorts", "live"].includes(parts[0])) return parts[1] || null;
    }
  } catch {
    return null;
  }
  return null;
}

loadVideoButton.addEventListener("click", () => {
  const id = getYouTubeId(videoInput.value);
  if (!id || !/^[a-zA-Z0-9_-]{11}$/.test(id)) {
    videoMessage.textContent = "That doesn't look like a valid YouTube video ID or URL. Try a full YouTube link or its 11-character ID.";
    videoMessage.classList.add("error");
    return;
  }

  player.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}`;
  videoMessage.textContent = "Video loaded. If it doesn't play, the owner may have disabled embedding.";
  videoMessage.classList.remove("error");
});

videoInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") loadVideoButton.click();
});
