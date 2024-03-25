function toggleDropdown() {
    var dropdownContent = document.getElementById("myDropdown");
    dropdownContent.classList.toggle("show");
  }
  
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
    if (!event.target.matches("#dropbtn1")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
  window.onclick = function (event) {};
  
  document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const logos = [
      "img/dualix.png",
      "img/maya.png",
      "img/octo.png",
      "img/popper.png",
      "img/dualix.png",
      "img/maya.png",
      "img/octo.png",
      "img/popper.png",
      "img/dualix.png",
      "img/maya.png",
      "img/octo.png",
      "img/popper.png",
      "img/dualix.png",
      "img/maya.png",
      "img/octo.png",
      "img/popper.png",
      "img/dualix.png",
      "img/maya.png",
      "img/octo.png",
      "img/popper.png",
      "img/dualix.png",
      "img/maya.png",
      "img/octo.png",
      "img/popper.png",
      "img/dualix.png",
      "img/maya.png",
      "img/octo.png",
      "img/popper.png",
      "img/dualix.png",
      "img/maya.png",
      "img/octo.png",
      "img/popper.png",
    ];
  
    // Dynamically add images to the slider
    logos.forEach((logo) => {
      const img = document.createElement("img");
      img.src = logo;
      img.alt = "Logo";
      slider.appendChild(img.cloneNode(true)); // Clone the images and append
    });
  
    // Set interval for automatic sliding
    setInterval(() => {
      slider.style.transition = "transform 0.5s ease-in-out";
      slider.style.transform = `translateX(-100%)`;
  
      // Reset the slider to the beginning when reaching the last cloned item
      setTimeout(() => {
        slider.style.transition = "none";
        slider.style.transform = "translateX(0)";
      }, 500);
    }, 3000);
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    window.onload = function () {
      changeContentBasedOnPageWidth();
    };
  
    function changeContentBasedOnPageWidth() {
      var paragraph = document.getElementById("selected-p");
      if (window.innerWidth <= 1500) {
        paragraph.innerHTML =
          "Over the years, I've partnered with startups of all sizes<br> and various stages to create some truly unique products.<br> Here are a few that I feel were the most challenging yet<br> rewarding.";
      }
      if (window.innerWidth <= 1330) {
        paragraph.innerHTML =
          "Over the years, I've partnered with startups of<br> all sizes and various stages to create some truly<br> unique products. Here are a few that I feel were<br> the most challenging yet rewarding.";
      }
    }
    window.onresize = function () {
      changeContentBasedOnPageWidth();
    };
  });
  