// define the sections
let section = document.querySelectorAll("section");

// define the navbar
let lists = document.querySelectorAll(".navbar-nav .nav-link");

// function to add active class to nav-link
function activeLink(navLink) {
  lists.forEach(item => item.classList.remove("active"));
  navLink.classList.add("active");
}

// add event listener to nav-link
lists.forEach(item =>
  item.addEventListener("click", function () {
    activeLink(this);
  })
);

// Get the button scroll
let buttonScroll = document.getElementById("scrollToTopButton");

// Function to show the button when the user scrolls down 20px from the top of the document
function scrollingToTop() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    buttonScroll.style.display = "block";
  } else {
    buttonScroll.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// When the user scrolling the page, execute the function
window.onscroll = () => {
  // add active class to nav-link when scrolling
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 60;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    // add active class to nav-link
    if (top >= offset && top < offset + height) {
      const target = document.querySelector(`[href='#${id}']`);
      activeLink(target);
    }
  });

  // trigger scrolling to top
  scrollingToTop();
};
