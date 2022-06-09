window.onscroll = function() {stickyHeader()};

const header = document.getElementById('Main-Header');

const sticky = header.offsetTop;

function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
} 