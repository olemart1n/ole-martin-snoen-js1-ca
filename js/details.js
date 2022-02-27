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
const goBack = document.querySelector(".goBack");
const brewersTips = document.querySelector("aside");
goBack.innerHTML = "";

async function spesificApi() {
try {
    const req1 = await fetch(url + id)
    const json1 = await req1.json();
    console.log(json1)
    createHtml(json1)

    for (let i = 0; i < json1[0].ingredients.malt.length; i++) {
        const malt = json1[0].ingredients.malt[i];
        console.log(malt.name);
        displayMalts(malt);
        arrowImg(json1)

    }
    for (let h = 0; h < json1[0].ingredients.hops.length; h++) {
        const hop = json1[0].ingredients.hops[h];
        displayHops(hop);
    }
    for (let f = 0; f < json1[0].food_pairing.length; f++) {
        const food = json1[0].food_pairing[f];
        displayFood(food);
        console.log(food)
    }
} catch (error) {
    console.log(error)
    container.innerHTML = `<h1 class="failure"> error. try again later</h1>`;
}
}
spesificApi()


function createHtml (recipe) {
    recipeContainer.innerHTML += `
                                    <h3 style="font-size: 2em;">Ingredients<h3>
                                    `;
    titleOfBeer.innerHTML = `<h1>${recipe[0].name}</h1>`;
    tagLine.innerHTML = `<p style="font-style:italic;">${recipe[0].tagline}"</p>`
    brewersTips.innerHTML = `<p class="tips">${recipe[0].brewers_tips}</p>`
    console.log(recipe[0].name);
}

function displayMalts (malt) {
    maltsContainer.innerHTML += `
                                <p>Name: ${malt.name}. Amount: ${malt.amount.value} ${malt.amount.unit} </p>`;
}

function displayHops (hop) {
    hopsContainer.innerHTML += `<p>Name: ${hop.name}. Amount: ${hop.amount.value} ${hop.amount.unit} </p>`
}

function displayFood(pairings) {
    foodContainer.innerHTML += `<p>${pairings}</p>`;
}

function arrowImg(img) {
    goBack.innerHTML += `        <a href="index.html">                
    <img class="imagess one" src="${img[0].image_url}">
    <img class="imagess two" src="${img[0].image_url}">
    <img class="imagess three" src="${img[0].image_url}">
    <img class="imagess four" src="${img[0].image_url}">
    </a>`;
}

