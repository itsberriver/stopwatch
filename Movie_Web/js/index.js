const requestURL = "./json/peliculas.json";

async function fetchMoviesJSON(){
    const response = await fetch(requestURL);
    const movies = await response.json();
    return movies;
}

fetchMoviesJSON().then(movies => {
   // console.log(movies);
    for (let i = 0; i < movies.peliculas.length; i++) {


        let title = movies.peliculas[i].nombre;
        let director = movies.peliculas[i].director;
        let clasificacion = movies.peliculas[i].clasificacion;
        let image = movies.peliculas[i].image;
        let info = movies.peliculas[i].info;

        moviesSection.innerHTML += `
            <div class="card">
                <div class="filmBox">
                    <div id="filmText">
                            <img class="image" src=${image}></img>
                            <p class="titleName">${title}</p>
                            <p class="directorName">${director}</p>
                            <p class="category">${clasificacion}</p>
                    </div>
            </div>
            <div class="moreInfo">${info}</div>
            `
        
    }
    console.log(moviesSection)
})