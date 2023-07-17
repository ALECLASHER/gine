document.addEventListener("DOMContentLoaded", function () {
     const dayContainers = document.querySelectorAll(".day-container");
   
     dayContainers.forEach((container) => {
       const fullContent = container.querySelector(".full-content");
       const readMoreButton = document.createElement("button");
       readMoreButton.innerText = "Apri";
       readMoreButton.classList.add("read-more-button");
       container.appendChild(readMoreButton);
   
       readMoreButton.addEventListener("click", function () {
         if (fullContent.classList.contains("preview")) {
           fullContent.classList.remove("preview");
           readMoreButton.innerText = "Chiudi";
         } else {
           fullContent.classList.add("preview");
           readMoreButton.innerText = "Apri";
         }
       });
     });
   });
   