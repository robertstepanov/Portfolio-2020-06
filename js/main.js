// When the user scrolls down 20px from the top of the document, show the button

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('topBtn').style.display = 'block';
  } else {
    document.getElementById('topBtn').style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

let mainNavLinks = document.querySelectorAll('nav h4 a');

let mainSections = document.querySelectorAll('section div');

let lastId;
let cur = [];

window.addEventListener('scroll', (event) => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach((link) => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop + 160 &&
      section.offsetTop + section.offsetHeight >= fromTop + 160
    ) {
      link.classList.add('current');
    } else {
      link.classList.remove('current');
    }
  });
});
