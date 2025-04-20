const cinema = {
    name: "AMB Cinemas",
    location: "HiTech city",
    movies: [
        {
            title: "Chaava",
            shows: ["10.00AM", "2.00PM"],
            seats: [50, 60], // Fixed "Seats" to "seats"
            price: {
                normal: 200,
                premium: 300,
            },
            genre: "Historical, Drama, Action",
            image: "https://tse3.mm.bing.net/th?id=OIP.gcgqN3IeOID-24SAgDo83AHaJ3&pid=Api&P=0&h=180",
        },
        {
            title: "Return of the Dragon",
            shows: ["10.00AM", "2.00PM"], // Fixed incorrect array format
            seats: [20, 30],
            price: {
                normal: 100,
                premium: 200,
            },
            genre: "Comedy, Drama, Thriller",
            image: "https://tse3.mm.bing.net/th?id=OIP.XYpo_aOlZ2RAMHMtkiDgHgHaJQ&pid=Api&P=0&h=180",
        },
        {
            title: "Mickey 17",
            shows: ["10.00AM", "2.00PM"],
            seats: [40, 60],
            price: { // Fixed "Price" to "price"
                normal: 80,
                premium: 100,
            },
            genre: "Fantasy, Sci-fi, Adventure",
            image: "https://tse4.mm.bing.net/th?id=OIP.KThP5Nu7IhtUQLQdUGGTGQHaJQ&pid=Api&P=0&h=180",
        },
        {
            title: "Kingstone",
            shows: ["10.00AM", "2.00PM"],
            seats: [20, 40],
            price: {
                normal: 70,
                premium: 90,
            },
            genre: "Adventure, Thriller, Action",
            image: "https://s.yimg.com/fz/api/res/1.2/6ht5wCNFSO1aSbj6CnkFbA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI2MDtxPTgwO3c9MTk0/https://s.yimg.com/zb/imgv1/3b6de4b8-bc10-3bd7-a5e6-6a109749dcff/t_500x300",
        },
        {
            title: "Mazaka",
            shows: ["10.00AM", "2.00PM"],
            seats: [70, 30],
            price: {
                normal: 300,
                premium: 200,
            },
            genre: "Comedy, Family, Romantic",
            image: "https://tse3.mm.bing.net/th?id=OIP.oQJhiqYkTbsC2F2etGiY7QHaKl&pid=Api&P=0&h=180",
        },
        {
            title: "Sabdham",
            shows: ["6.00AM", "10.00AM"], // Fixed incorrect array format
            seats: [100, 80],
            price: {
                normal: 100,
                premium: 200,
            },
            genre: "Horror, Thriller",
            image: "https://tse1.mm.bing.net/th?id=OIP.f2PMqhxwSgiFuI_GoCNFegAAAA&pid=Api&P=0&h=180",
        },
        {
            title: "The Monkey",
            shows: ["7.00AM", "11.00AM"], // Fixed incorrect array format
            seats: [60, 30],
            price: {
                normal: 150,
                premium: 170,
            },
            genre: "Comedy, Horror, Thriller",
            image: "https://up.yimg.com/ib/th?id=OIP.rDFEPzaihIqFevz3k16NgAHaK-&pid=Api&rs=1&c=1&qlt=95&w=83&h=124",
        },
        {
            title: "Crazxy",
            shows: ["10.00AM", "2.00PM"],
            seats: [80, 30],
            price: {
                normal: 80,
                premium: 100,
            },
            genre: "Drama, Thriller",
            image: "https://up.yimg.com/ib/th?id=OIP.R6E3uuAQiVgVP65Nv1cnPgAAAA&pid=Api&rs=1&c=1&qlt=95&w=67&h=101",
        },
    ],
};

// Console Log Test
console.log("Theatre name:", cinema.name);
console.log("First movie name:", cinema.movies[0].title);
