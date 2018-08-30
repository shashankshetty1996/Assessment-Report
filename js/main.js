let nav = (function() {
  // Variable Declarations
  let handburgers = document.querySelectorAll(".handburger"),
    links = document.querySelectorAll("aside ul.sidenav li"),
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
})();

let model = (function() {
  // Variable Declarations
  let boxes = document.querySelectorAll(".box"),
    modelCloseBtn = document.querySelectorAll("a[data-close]");

  // Display model functions
  function modelShow() {
    // Model type to be displayed
    let targetId = this.getAttribute("data-target");
    document.getElementById(targetId).classList.add("active");
  }

  // Close display model
  function modelClose(e) {
    e.preventDefault();
    let targetId = this.getAttribute("data-close");
    document.getElementById(targetId).classList.remove("active");
  }

  // Adding click event for the box
  boxes.forEach(box => {
    box.addEventListener("click", modelShow);
  });

  // Close model box
  modelCloseBtn.forEach(btn => {
    btn.addEventListener("click", modelClose);
  });

  return {
    model: modelShow
  };
})();
