
// script.js

export const url = "https://api.punkapi.com/v2/beers";
export const container = document.querySelector(".beers");

// details.js

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = "https://api.punkapi.com/v2/beers/";
const recipeContainer = document.querySelector(".recipe");
const titleOfBeer = document.querySelector("h1");
const tagLine = document.querySelector(".tagline");
const maltsContainer = document.querySelector(".recipe1");
const hopsContainer = document.querySelector(".recipe2");
const foodContainer = document.querySelector(".foodPairings");
