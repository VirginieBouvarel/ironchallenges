
// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies){
    return movies.map(movie => movie.director).filter((item, index, self) => self.indexOf(item) === index);
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies){
    return movies.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")).length;
} 

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies){
    if (movies && movies.length > 0){
        const avg = movies.reduce((sum, movie) => {
            if (movie.rate === undefined || movie.rate === ""){
               movie.rate = 0;
            }
            return sum + movie.rate
        },0)/movies.length;
        const roundedAvg = Math.round(avg * 100)/100;
        return roundedAvg;
    }else{
        return 0;
    }
} 

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies){
   const dramaMovies = movies.filter(movie => movie.genre.includes("Drama"));
   return ratesAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies){
    const moviesByYear = [...movies].sort((a,b) => {
        //Si les années sont différentes on range les films dans l'ordre de grandeur des années
        if(a.year > b.year)return 1;
        if(a.year < b.year) return -1;
        //Sinon (elles sont donc égales) on compare les titres
        //Et on range les films en fonction de la position de leur titre dans l'alphabet
        if(a.title > b.title) return 1;
        if (a.title < b.title) return -1;
    }); 
    return moviesByYear;
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies){
    let titles = [...movies].map(movie => movie.title );
    titles = titles.sort();
    if (titles.length <= 20){
        return titles;
    }else{
        titles = titles.slice(0,20);
        return titles;
    }
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function hoursToMinutes(stringDuration){
    let arrayDuration = stringDuration.toString().split(/[\sa-z]+/);
    let duration;
    if(Number(arrayDuration[0]) > 5 && Number(arrayDuration[0] < 60) && arrayDuration[1] === ""){
        duration =  Number(arrayDuration[0]);
    }else{
        duration = Number(arrayDuration[0])*60 + Number(arrayDuration[1]);
    }
    return duration;
}
function turnHoursToMinutes(movies){
    let movies2 =  JSON.parse(JSON.stringify(movies));
    movies2.forEach(movie => movie.duration = hoursToMinutes(movie.duration));
    return movies2;
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(movies){
    if(movies.length === 0){
        return null;
    }
    //Initialisation des variables de sortie
        let bestYear = 0;
        let bestAvgRate = 0;

    //Liste des années à évaluer, sans doublons, triées par ordre croissant
        const movieYears = movies.map(movie => movie.year).filter((value, index, array) => array.indexOf(value) === index).sort((a,b) => a - b);

    //Calcul des scores de chaque année et assignation des variables de sortie
        movieYears.forEach(year =>{
        //On récupère les films de l'année 
        const moviesOfYear =  movies.filter((movie) => movie.year === year);
        //On calcule le score moyen de l'année
        const rateAvgOfYear = moviesOfYear.reduce((sum,movie) => { return sum + movie.rate}, 0)/moviesOfYear.length; 
        //On compare le score moyen de l'année au meilleur score et on met à jour si nécessaire
        if (rateAvgOfYear > bestAvgRate){
            bestAvgRate = rateAvgOfYear;
            bestYear = year;
        }
        });
    
    //Affichage des résultats sous forme de string
        console.log(`The best year was ${bestYear} with an average rate of ${bestAvgRate}`);
        return `The best year was ${bestYear} with an average rate of ${bestAvgRate}`;
}



