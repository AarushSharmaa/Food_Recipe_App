// lets grab our searchForm, searchResult, whole container
// and declare an empty searchQuery string

const searchForm = document.querySelector("form");
const searchResultDiv = document.querySelector(".search-result");
const container = document.querySelector(".container");
let searchQuery = "";
const APP_ID = "f01324d9";
const APP_KEY = "86b9a8fa0989a4d70ce734e6aec522d1";

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector("input").value;
    console.log(searchQuery);
})