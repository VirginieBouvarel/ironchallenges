/**
 * Lab de Juan Jose Carreno
 * Que la TA a félicité pour la propreté et la clarté de son code
 */


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?



function getAllDirectors(movies){
    return movies.map((movie) => movie.director).filter((value, index, self) => self.indexOf(value) === index);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies){
    return movies.filter(function(movie){
        return (movie.director == "Steven Spielberg" && movie.genre.indexOf("Drama") !== -1);
    }).length;
}



// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies){
    return  movies.length ? Number((movies.reduce(function(acc, movie){
        return acc + (movie.rate ? movie.rate: 0);
    }, 0)/movies.length).toFixed(2)) : 0;
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies){    
    if (movies.length) {
        let dramaMovies = movies.filter(movie => movie.genre[0] === 'Drama');
        if (!dramaMovies.length) {
            return 0;
        }
        else {
            return Number(((dramaMovies.reduce((acc, filteredMovie) => {
                return acc + filteredMovie.rate;
             }, 0))/dramaMovies.length).toFixed(2));
        }
    }         
     else {
         return 0;
     }
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies){
    if (movies.length) {
        return movies.sort(function(movie1, movie2){
            if (movie1.year == movie2.year){
                if (movie1.title < movie2.title){
                    return -1;
                }
                else if (movie1.title > movie2.title){
                    return 1;
                }
                return 0;
            }
            else {
                return movie1.year - movie2.year;
            }
        });
     }
     else {
         return 0;
     }

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function orderAlphabetically(movies){
    let clonedMovies = JSON.parse(JSON.stringify(movies))
    if (clonedMovies.length) {
        return clonedMovies.sort(function(movie1, movie2){
            if (movie1.title < movie2.title){
                return -1;
            }
            else if (movie1.title > movie2.title){
                return 1;
            }
            return 0;
        }).slice(0, 20).map(function(filteredMovies){
            return filteredMovies.title;
        });
     }
     else {
         return [];
     }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies){
    let clonedMovies = JSON.parse(JSON.stringify(movies));
    if (clonedMovies.length) {
        return clonedMovies.map(function(movie){
            if (typeof movie.duration !== "number"){
                let time = movie.duration.split(' ');
                let hours, mins, finalDuration; 
                if(time[0].split('h')[1] == '') {
                    hours = Number(time[0].split('h')[0]); 
                    mins = time[1] ? Number(time[1].split('min')[0]): 0;                   
                    finalDuration = hours > 0 ? hours * 60 + mins: mins;
                }
                else if (time[0].split('min')[1] == '') { 
                    mins = Number(time[0].split('min')[0]);
                    finalDuration = mins;
                }        
                movie.duration = finalDuration;
            }
            return movie;
        });
     }
     else {
         return [];
     }
}
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(movies){
    let clonedMovies = JSON.parse(JSON.stringify(movies));
    if (clonedMovies.length) {
        let myYears = {};
        console.log(clonedMovies)
        clonedMovies.forEach(function(movie){
            if (!(movie.year in myYears)){
                myYears[movie.year] = []
                myYears[movie.year].push(movie);
            }
            else {
                myYears[movie.year].push(movie);
            }
        });
        let highestRatingAverage = 0;
        let highestRatedYear = 0;
        for (let year in myYears){
            let rateaverage = ratesAverage(myYears[year])
            console.log(year, rateaverage)
            if (rateaverage > highestRatingAverage) {
                highestRatedYear = year;
                highestRatingAverage = rateaverage;
            }
        }
        return `The best year was ${highestRatedYear} with an average rate of ${highestRatingAverage}`;
     }
     else {
         return null;
     }
} 