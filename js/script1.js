
const url = "https://api.punkapi.com/v2/beers";
const container = document.querySelector(".beers");

async function makeApi() {
try {
        const req = await fetch(url);
        const json = await req.json();
        console.log(json)
        for (let i = 0; i < json.length; i++) {
            console.log(json[i]);
            createHtml(json[i]);
}
} catch (error) {
    console.log(error)
    container.innerHTML = `<h1 class="failure"> error. try again later</h1>`;
} finally {
    hideLoader("loaderr")
}
}
makeApi()


function createHtml(parameter) {
    container.innerHTML += `<div class="spesific">
                            <h3 class="name">${parameter.name}</h3>
                            <img class="images" src="${parameter.image_url}">
                            <p class="introduction">${parameter.description}</p>
                            <a href="/details.html?id=${parameter.id}" class="button">click for recipe</a>
                            </div>
                            `
}

function hideLoader(id) {
                document.getElementById(id).style.display = "none";
}