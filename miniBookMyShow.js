const movieCollection = [

{title: "Inception",
    price: 200,
    seatsAvailable: 50,
    ratings: 4.5
},
{
    title: "Intersteller",
    price: 100,
    seatsAvailable: 20,
    ratings: 4
},
    {
        title: "Avengers",
        price: 50,
        seatsAvailable: 30,
        ratings: 5

    },
    {
        title: "Venom",
        price: 150,
        seatsAvailable: 100,
        ratings: 4.5
    },
    {
        title: "The Dark Knight",
        price: 200,
        seatsAvailable: 100,
        ratings: 4
    }

]
const isWeekend = () => {
    const today = new date ();
    const day = today.Getday ();
    return day === 0 || day ===6;
}
const allMovies = movieCollection.map(movie => {
    return {
        title: movie.title,
        price: movie.price,
        seatsAvailable: movie.seatsAvailable,
        ratings: movie.ratings,
        status: movie.seatsAvailable > 0 ? "Available" : "Soldout"
    }
})
console.log(allMovies);
console.log("====================================Available Movies===================================================");