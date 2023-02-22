const searchBar = document.querySelector(".main__search-bar");
const searchBox = document.querySelector("#input-search");
const closeBTN = document.querySelector(".main__icon:nth-child(3)");

function changeBGcolor() {
  searchBar.classList.add("searchBgColor");
  searchBox.classList.add("searchBgColor");
}

function resetBGcolor() {
  searchBar.classList.remove("searchBgColor");
}

function showCloseBtn() {
  closeBTN.style.display = "block";
}

function clearSearch() {
  searchBox.value = "";
  closeBTN.style.display = "none";
}

searchBar.addEventListener("mouseover", changeBGcolor);
searchBar.addEventListener("mouseout", resetBGcolor);
searchBox.addEventListener("input", showCloseBtn);
closeBTN.addEventListener("click", clearSearch);
