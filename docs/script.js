document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".social-links .button");
    buttons.forEach(button => button.classList.add("show"));
  });
 document.addEventListener("DOMContentLoaded", function () {
    const video = document.querySelector("video");
  
    if (video) {
      video.play().catch(error => {
        console.error("Автозапуск видео не сработал:", error);
      });
    }
  });
  
