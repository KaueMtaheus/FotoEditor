const newImg = document.getElementById("newImg");
const inputFile = document.querySelector("input[type=file]");
const img = document.querySelector(".img-content img");
const ButtonFilter = document.querySelectorAll(".filters-content button");
const range = document.querySelector("input[type-range]");
const spnRangeValue = document.getElementById("spnRangeValue");
const btnResetFilters = document.getElementById("btnResetFilters");
const btnSalvar= document.getElementById("btnSalvar");

let rotate;
let flipY;
let flipX;

let filterActive;

let filters;


