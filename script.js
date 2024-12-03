let links = document.getElementsByClassName("nav-link");
let toggleBtn = document.querySelector(".nav-button");
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", () => {
    if (!links[i].classList.contains("active-link")) {
      changePage(i);
    }
  });
}

function changePage(index) {
  for (let i = 0; i < links.length; i++) {
    links[i].classList.remove("active-link");
  }
  links[index].classList.add("active-link");
}

function navbarToggle() {
  if (toggleBtn.classList.contains("nav-closed")) {
    for (let i = 0; i < links.length; i++) {
      if (!links[i].classList.contains("active-link")) {
        links[i].style.display = "none";
      }
    }
    toggleBtn.classList.remove("nav-closed");
  } else {
    toggleBtn.classList.add("nav-closed");
    for (let i = 0; i < links.length; i++) {
      links[i].style.display = "block";
    }
  }
}
