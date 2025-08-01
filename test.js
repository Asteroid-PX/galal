let tutorial = false;
const videos = [
  {
    src: "https://www.youtube.com/shorts/vEMn8QKINyU",
    title:
      "test",
  },
];

const videoPlayContainer = document.querySelector(".video-container");
const videoContainer = document.querySelector(".video-modal-container");
const closeButton = videoContainer.querySelector(".close-modal-btn");
const overlay = videoContainer.querySelector(".video-overlay-container");

const WatchButtons = document.querySelectorAll(".watch-video-btn");

WatchButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    videoContainer.classList.add("active-video");
    document.body.classList.add("no-scroll");
    videoContainer.classList.add("active-video");
    if (!tutorial) {
      const videoID = +e.target.getAttribute("data-video-id");
      const videoURL = videos[+videoID - 1].src;
      const videoTitle = videos[+videoID - 1].title;
      const iframe = document.createElement("iframe");
      iframe.src = videoURL;
      iframe.setAttribute("width", "100%");
      iframe.setAttribute("height", "100%");
      iframe.setAttribute("title", videoTitle);
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allowfullscreen", "");
      iframe.setAttribute(
        "allow",
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      );
      tutorial = true;
      videoPlayContainer.appendChild(iframe);
    }
  });
});

closeButton.addEventListener("click", () => {
  videoContainer.classList.remove("active-video");
  overlay.classList.remove("active");
  document.body.classList.remove("no-scroll");
});

overlay.addEventListener("click", () => {
  videoContainer.classList.remove("active-video");
  overlay.classList.remove("active");
  document.body.classList.remove("no-scroll");
});
