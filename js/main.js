(function() {
  // Variable Declarations
  let handburgers = document.querySelectorAll(".handburger");

  // Toggle Menu items
  function handburgerClicked() {
    this.parentNode.classList.toggle("active");
  }

  // Adding click event listner for all the handburger icons
  handburgers.forEach(handburger => {
    handburger.addEventListener("click", handburgerClicked);
  });
})();
