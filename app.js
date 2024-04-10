let truthBtn = document.querySelector("#truth-btn");
let dareBtn = document.querySelector("#dare-btn");
let curtain = document.querySelector("#curtain");
let headerTitle = document.querySelector("#header-title");
let todText = document.querySelector("#tod-text");

window.addEventListener("load", () => {
  headerTitle.textContent = "LOADING";
  todText.textContent = "LOADING";
  truthBtn.click();
});

function getData(type, button) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", `https://api.truthordarebot.xyz/api/${type}`);

  xhr.onprogress = function () {
    curtain.classList.toggle("curtain-down");
  };

  xhr.on;

  xhr.onload = function () {
    if (xhr.status == 200) {
      setTimeout(() => {
        let data = JSON.parse(xhr.responseText);
        headerTitle.textContent = data.type;
        todText.textContent = data.question;
        curtain.classList.toggle("curtain-down");
        button.classList.toggle("disabled");
      }, 500);
    }
  };

  xhr.send();
}

truthBtn.addEventListener("click", () => {
  truthBtn.classList.toggle("disabled");
  getData("truth", truthBtn);
});

dareBtn.addEventListener("click", () => {
  getData("dare", dareBtn);
  dareBtn.classList.toggle("disabled");
});
