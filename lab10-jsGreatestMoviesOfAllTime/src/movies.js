// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectors = movies => movies.map(movie => movie.director).filter((movie, index, array)=> array.indexOf(movie) === index);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = movies => {
    return movies.filter((movie, index, array) => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")).length;
};

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = movies => {
    return movies.length ? Number((movies.reduce((sum, movie) => {
        return sum + (movie.rate ? movie.rate : 0);
        },0)/movies.length).toFixed(2)): 0;
};

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = movies => {
    const dramaMovies = movies.filter(movie => movie.genre.includes("Drama"));
    return ratesAverage(dramaMovies);
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = movies => {
    return JSON.parse(JSON.stringify(movies)).sort((a,b) => {
        if(a.year < b.year) return -1;
        if(a.year > b.year) return 1;
        if(a.title < b.title) return -1;
        if(a.title > b.title) return 1;
    });
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = movies => {
    const movies2 = JSON.parse(JSON.stringify(movies));//copie indépendante de movies
    return movies2.map(movie => movie.title).sort().filter((movie, index) => index < 20);
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = movies => {
    if (movies.length < 1) return [];
    const movies2 = JSON.parse(JSON.stringify(movies));
    movies2.map(movie => {
        const time = movie.duration.split(' ');
       let hours = 0;
       let mins = 0;
       if(time.length > 1){
            hours = parseInt(time[0].split("h")[0]);
            mins = parseInt(time[1].split("min")[0]);
        }else{
            if(time[0].length > 2){
                mins = parseInt(time[0].split("min")[0]);
            }else{
                hours = parseInt(time[0].split("h")[0]);
                mins = 0;
            }
        }
        movie.duration = hours * 60 + mins;
        return movie;  
    });
    return movies2;
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
const bestYearAvg = movies => {
    if (movies.length < 1) return null;
    let bestAvg = 0;
    let bestYear = 0;
    const years = movies.map(movie => movie.year).filter((item, index, array) => array.indexOf(item) === index).sort((a,b) => a - b);
    years.forEach(year => {
        const moviesOfTheYear = movies.filter(movie => movie.year === year);
        const avg = moviesOfTheYear.reduce((sum, movie) => {return sum + movie.rate},0)/moviesOfTheYear.length;
        if (avg > bestAvg){
            bestAvg = avg;
            bestYear = year;
        }
    });
    return `The best year was ${bestYear} with an average rate of ${bestAvg}`;
}

