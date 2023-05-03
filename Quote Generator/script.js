//Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote:`“One cannot step twice in the same river.”`,
        person : `—Heraclitus`
    },
    {
        quote:`“You can discover more about a person in an hour of play than in a year of conversation.”`,
        person : `—Plato`
    },
    {
        quote:`“"The farther backward you can look, the farther forward you are likely to see."`,
        person : `_Sir Winston Churchill`
    },
    {
        quote:`"The price of greatness is responsibility."`,
        person : `—Sir Winston Churchill`
    },
    {
        quote:`“"Strength does not come from physical capacity. It comes from an indomitable will."`,
        person : `—Mohandas K. Gandhi`
    },
    {
        quote:`““The truth is rarely pure and never simple.”`,
        person : `—Oscar Wilde`
    },
    {
        quote:`“"Fortune favors the brave."`,
        person : `—Virgil, from the "Aeneid"`
    },
];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})


//Practicing
const greet = function()=>'hello,world';