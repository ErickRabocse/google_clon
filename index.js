const searchBar = document.querySelector(".main__search-bar");
const searchBox = document.querySelector("#input-search");
const closeBTN = document.querySelector(".main__icon:nth-child(3)");

function changeBGcolor() {
  searchBar.classList.add("searchBgColor");
  searchBox.classList.add("searchBgColor");
  searchBox.style.outline = "none";
}

function resetBGcolor() {
  searchBar.classList.remove("searchBgColor");
  searchBox.style.outline = "1px solid rgb(95 99 103)";
}

function showCloseBtn() {
  closeBTN.style.display = "block";
  if (searchBar.clientWidth < 500) {
    closeBTN.style.right = "5px";
    closeBTN.style.border = "none";
  }
}

function clearSearch() {
  searchBox.value = "";
  closeBTN.style.display = "none";
}

searchBar.addEventListener("mouseover", changeBGcolor);
searchBar.addEventListener("mouseout", resetBGcolor);
searchBox.addEventListener("input", showCloseBtn);
closeBTN.addEventListener("click", clearSearch);
