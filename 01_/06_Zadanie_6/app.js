

fetch("https://swapi.dev/api/starships")
    .then(function (response) {
        return response.json();
    })
    .then(function (starships) {
        console.log(starships.results);
        const starshipsElement=document.getElementById("starships");
        for (let i = 0; i < starships.results.length; i++) {

            const listElement=document.createElement("li");
            const h2Element=document.createElement("h2");
            h2Element.innerText=starships.results[i].name;
            const h3Element=document.createElement("h3");
            h3Element.innerText=starships.results[i].model;
            starshipsElement.appendChild(h2Element);
            starshipsElement.appendChild(h3Element);

        }
    });