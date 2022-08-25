

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

// EVERY


let greaterThanZero = nums.every( all => all >= 0);
console.log(greaterThanZero);

/////////////////////////////////////////

let lessThanEight = panagram.every( x => x.length < 8);
console.log(lessThanEight);


//FILTER

let lessThanFour = nums.filter( y => y < 4);
console.log(lessThanFour);

///////////////////////////////////////

let evenLength = panagram.filter(n => n.length % 2 === 0);
console.log(evenLength);

//FIND

let divByFive = nums.find( z => z % 5 === 0);
console.log(divByFive);

///////////////////////////////////////

let longerThanFive = panagram.find( p => p.length > 5);
console.log(longerThanFive);

//FIND INDEX

let divByThree = nums.findIndex( t => t % 3 === 0);
console.log(divByThree);

//////////////////////////////////////

let lessThanTwo = panagram.findIndex( s => s.length < 2);
console.log(lessThanTwo);
/* works but returns -1 when less than two not found? */

// FOR EACH

nums.forEach(o => console.log( o * 3));

///////////////////////////////////////

panagram.forEach(v => console.log( v + '!'));

// MAP

nums.map(b => console.log(b * 100));

///////////////////////////////////////

panagram.map(w => console.log(w.toUpperCase()));

// SOME

nums.some(u => {if(u % 7 === 0 && u > 0) {console.log(u)}})

///////////////////////////////////////

panagram.some(f => console.log(f.includes('a')) );

// isPanagram

// panagram.match(/[a-z]/i); //can't quite get it to work. did figure out I need to use regular expression.

///////////////////////////////////////

// Working with Data



const products = [
    {
      "name": "allen wrench",
      "price": 2.99,
      "description": "handy tool"
    },
    {
      "name": "cornucopia",
      "price": 5.99,
      "description": "festive holiday decoration"
    },
    {
      "name": "banana",
      "price": 0.99,
      "description": "full of potassium"
    },
    {
      "name": "guillotine (cigar)",
      "price": 10.59,
      "description": "behead your stub"
    },
    {
      "name": "jack-o-lantern",
      "price": 3.99,
      "description": "spooky seasonal fun"
    },
    {
      "name": "doggie treat (box)",
      "price": 5.99,
      "description": "fido loves 'em"
    },
    {
      "name": "egg separator",
      "price": 3.99,
      "description": "it separates yolks from whites"
    },
    {
      "name": "owl pellets",
      "price": 3.99,
      "description": "Don't ask what they used to be."
    },
    {
      "name": "flag",
      "price": 5.99,
      "description": "catches the breeze"
    },
    {
      "name": "hair brush",
      "price": 6.99,
      "description": "fine boar bristles"
    },
    {
      "name": "iridium (one gram)",
      "price": 19.36,
      "description": "corrosion-resistant metal"
    },
    {
      "name": "quark",
      "price": 0.01,
      "description": "Very small"
    },
    {
      "name": "turtleneck",
      "price": 19.99,
      "description": "available in black and slightly-darker black"
    },
    {
      "name": "kaleidoscope",
      "price": 8.25,
      "description": "tube with moving plastic pieces inside"
    },
    {
      "name": "mitt (leather)",
      "price": 15,
      "description": "regulation sized"
    },
    {
      "name": "nothing",
      "price": 10,
      "description": "Hey, if you pay us, we won't ask any questions."
    },
    {
      "name": "violin",
      "price": 2000,
      "description": "Talk about a JS fiddle..."
    },
    {
      "name": "yoyo",
      "price": 1,
      "description": "We had to pull some strings to get this one in."
    },
    {
      "name": "pincushion",
      "price": 1.99,
      "description": "You'll get 'stuck' on it"
    },
  ]


  let lessThanTen = products.filter(q => q < 10);
  console.log(lessThanTen);

//////////////////////////////////////

let names = products.sort((a,b) => a.name > b.name ? 1 : -1)
console.log(names)



