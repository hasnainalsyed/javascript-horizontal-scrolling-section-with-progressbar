
const spaceHolder = document.querySelector('.space-holder');
const horizontal = document.querySelector('.horizontal');
spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;

function calcDynamicHeight(ref) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const objectWidth = ref.scrollWidth;
  return objectWidth - vw + vh; // 150 is the padding (in pixels) desired on the right side of the .cards container. This can be set to whatever your styles dictate
}

window.addEventListener('scroll', () => {
  const sticky = document.querySelector('.sticky');
  horizontal.style.transform = `translateX(-${sticky.offsetTop}px)`;
});

window.addEventListener('resize', () => {
  spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
});

// When the user scrolls the page, execute progressBar
window.onscroll = function () { progressBar() };
function progressBar() {
  var h1 = document.getElementById('mySection'); //element
  var bounding = h1.getBoundingClientRect(); //get its values like height, top, width, bottom etc
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  if (bounding.top < 0) { //run function after the container hits top of screen
    var scrolled = (winScroll / height) * 100;
    console.log(scrolled);
    console.log(bounding.width);
    if (bounding.width == 1349) {
      if (scrolled > 86) {
        scrolled = 100;
      }
    } else if (bounding.width == 2023) {
      if (scrolled > 90) {
        scrolled = 100;
      }
    } else {

    }
    document.getElementById("progressBar").style.width = scrolled + "%";
  }
  if (bounding.top > 0) {
    document.getElementById("progressBar").style.width = "0%";
  }
}
function onLoad() { //set progressBar to 0% width on load
  document.getElementById("progressBar").style.width = scrolled + "%";
}
