function loading() {
  var tl = gsap.timeline();

  tl.to(".loader .yellow1", {
    top: "-100%",
    delay: 0.5,
    duration: 0.5,
    ease: "expo.out",
  });

  tl.from(
    ".loader .yellow2",
    {
      top: "100%",
      delay: 0.5,
      duration: 0.5,
      ease: "expo.out",
    },
    "anim"
  );

  tl.to(
    ".loader h1",
    {
      delay: 0.6,
      duration: 0.5,
      color: "black",
    },
    "anim"
  );

  tl.to(".loader", {
    opacity: 0,
  });
  tl.to(".loader", {
    display: "none",
  });
}

loading();

const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

function navAnim() {
  var icon = document.querySelector("#plsicon");
  icon.addEventListener("click", function () {
    gsap.to("#plsicon", {
      rotation: 90,
    });
  });
}
navAnim();

function page2anim() {
  var elem = document.querySelectorAll(".elem");
  var page2 = document.querySelector(".page2");
  elem.forEach(function (ele) {
    ele.addEventListener("mouseenter", function () {
      var bgimg = ele.getAttribute("data-img");
      page2.style.backgroundImage = `url(${bgimg})`;
    });
  });
}
page2anim();

document.querySelector(".footer .icon").addEventListener("click", function () {
  scroll.scrollTo(0);
});
