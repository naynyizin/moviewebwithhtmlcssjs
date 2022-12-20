const getarrows = document.querySelectorAll(".arrows");
const getwrappers = document.querySelectorAll(".wrapper");

getarrows.forEach((arrow, ind) => {
  let itemlength = getwrappers[ind].querySelectorAll("img").length;
  let count = 0;

  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 350);
    count++;
    if (itemlength - (ratio + count) >= 0) {
      getwrappers[ind].style.transform = `translateX(${
        getwrappers[ind].computedStyleMap().get("transform")[0].x.value - 350
      }px)`;
    } else {
      count = 0;
      getwrappers[ind].style.transform = `translateX(0)`;
    }
  });
});

const getdorlbtn = document.querySelector(".dorl-btn");
const getactiveEle = document.querySelectorAll(
  "nav,.navs li a,.pf-text,.side-bar,.dorl-btn,.wrapper-container h1,.side-bar-icons,.container,.wrapper-item,.btn-ball"
);

getdorlbtn.addEventListener("click", () => {
  getactiveEle.forEach((ele) => {
    ele.classList.toggle("active");
  });
});
