(function() {
  // Variable Declarations
  let handburgers = document.querySelectorAll(".handburger");
  let links = document.querySelectorAll("aside ul.sidenav li");
  let activeClass = 0;

  // Toggle Menu items
  function handburgerClicked() {
    this.parentNode.classList.toggle("active");
  }

  function changeActive(index) {
    links[activeClass].classList.remove("active");
    activeClass = index;
    links[activeClass].classList.add("active");
  }

  // Adding click event listener for all the handburger icons
  handburgers.forEach(handburger => {
    handburger.addEventListener("click", handburgerClicked);
  });

  // Adding click event listener for all the links
  links.forEach((link, index) => {
    link.addEventListener("click", changeActive.bind(this, index));
  });
})();
