
// script.js

export const url = "https://api.punkapi.com/v2/beers";
export const container = document.querySelector(".beers");

// details.js

export const queryString = document.location.search;
export const params = new URLSearchParams(queryString);
export const id = params.get("id");
export const url = "https://api.punkapi.com/v2/beers/";
export const recipeContainer = document.querySelector(".recipe");
export const titleOfBeer = document.querySelector("h1");
export const tagLine = document.querySelector(".tagline");
export const maltsContainer = document.querySelector(".recipe1");
export const hopsContainer = document.querySelector(".recipe2");
export const foodContainer = document.querySelector(".foodPairings");
