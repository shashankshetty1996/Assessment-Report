let nav = (function() {
  // Variable Declarations
  let handburgers = document.querySelectorAll(".handburger"),
    links = document.querySelectorAll("aside ul.sidenav li"),
    nav = document.querySelector("nav"),
    activeClass = 0;

  // Toggle Menu items
  function handburgerClicked() {
    this.parentNode.classList.toggle("active");
  }

  function changeActive(index) {
    links[activeClass].classList.remove("active");
    activeClass = index;
    links[activeClass].classList.add("active");
    model.model.call(this);
  }

  // Adding click event listener for all the handburger icons
  handburgers.forEach(handburger => {
    handburger.addEventListener("click", handburgerClicked);
  });

  // Adding click event listener for all the links
  links.forEach((link, index) => {
    link.addEventListener("click", changeActive.bind(link, index));
  });

  return {
    navbar: nav
  };
})();

let model = (function() {
  // Variable Declarations
  let boxes = document.querySelectorAll(".box"),
    modelCloseBtn = document.querySelectorAll("a[data-target]"),
    modelLayout = document.querySelectorAll(".model"),
    activeModel = "";

  // Toggle display model functions
  function modelToggle() {
    activeModel = this.getAttribute("data-target");
    document.getElementById(activeModel).classList.toggle("active");
  }

  // Close display model
  function modelClose(e) {
    e.preventDefault();
    modelToggle.call(this);
  }

  // Adding click event for the box
  boxes.forEach(box => {
    box.addEventListener("click", modelToggle);
  });

  // Close model box
  modelCloseBtn.forEach(btn => {
    btn.addEventListener("click", modelClose);
  });

  /*

  Overlay JS to be added
  
  */
  modelLayout.forEach(model => {
    model.addEventListener("click", () => {});
  });

  return {
    model: modelToggle
  };
})();

// window
(function() {
  let navInitializer = function() {
    if (window.matchMedia("screen and (min-width: 1400px)").matches) {
      // let cardImg = document.querySelector(".card-image img");
      // cardImg.setAttribute(
      //   "src",
      //   "https://images.unsplash.com/photo-1527153818091-1a9638521e2a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5fce4ce8856a711cc50a14e03e58783a&auto=format&fit=crop&w=1458&q=80"
      // );
      nav.navbar.classList.add("active");
      return;
    }
    nav.navbar.classList.remove("active");
  };

  // navInitializer();
  window.addEventListener("DOMContentLoaded", navInitializer);
  window.addEventListener("resize", navInitializer);
})();
