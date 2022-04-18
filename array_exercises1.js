// Time to practice (1)

/*
Given an array of cities, return an array with the first 
letter of each city’s name capitalized.
You can use ES5 or ES6 syntax, whichever you feel 
more comfortable with at this point.
*/

// Array of cities:
const cities = [
    'miami', 
    'barcelona', 
    'madrid', 
    'amsterdam', 
    'berlin', 
    'sao paulo', 
    'lisbon', 
    'mexico city', 
    'paris'];

    const citiesCapitalized = cities.map((city) => {
        const separatedArray = city.split(" ");
        if (separatedArray.length > 1) {
            const capitalized = separatedArray.map((word) => {
                return word.charAt(0).toUpperCase() + word.slice(1);
            })
                return capitalized.join(' ');
        }
        return city.charAt(0).toUpperCase() + city.slice(1);
    });
    console.log(citiesCapitalized);


// Time to practice (2)

/* 
Avg calories
Given a menu of foods and their calories, calculate the average number of
calories for the entire list. Starter code:
*/

const menu = [
    { name: 'Carrots', calories: 150 },
    { name: 'Steak', calories: 350 },
    { name: 'Broccoli', calories: 120 },
    { name: 'Chicken', calories: 250 },
    { name: 'Pizza', calories: 520 }
    ];

const avg = menu.reduce((prev, curr) => {
    return (prev + curr.calories)
},0)/menu.length;

console.log(avg);

// Time to practice (3)

// Given the following array, filter the ones who are eligible to go to bars in the USA.

const people = [
    { name: 'Candice', age: 25 },
    { name: 'Tammy', age: 30 },
    { name: 'Allen', age: 20 },
    { name: 'Nettie', age: 21 },
    { name: 'Stuart', age: 17 },
    { name: 'Bill', age: 19 }
  ];
  
  // your code...
  
  console.log(ofDrinkingAge);
  // [
  //   { name: 'Candice', age: 25 },
  //   { name: 'Tammy', age: 30 },
  //   { name: 'Nettie', age: 21 }
  // ]
  