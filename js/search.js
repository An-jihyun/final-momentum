const searching = searchFunc.prototype;

function searchFunc() {
  this.keyword = document.querySelector('input[name="search"]');
  this.engine = document.querySelector(".selectSearch");
  this.button = document.querySelector(".img-button");
  this.form = document.querySelector(".search");

  this.engineFunce();
}

searching.engineFunce = function () {
  this.form.addEventListener("submit", (e) => {
    e.preventDefault();

    let engine = this.engine.value;
    let keyword = this.keyword.value;

    if (engine === "google") {
      location.href = "https://www.google.co.kr/search?q=" + keyword;
    } else if (engine === "naver") {
      location.href = "https://search.naver.com/search.naver?query=" + keyword;
    }
  });
};

new searchFunc();
