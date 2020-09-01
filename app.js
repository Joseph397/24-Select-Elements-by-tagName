// Select the element or group of elements that we want
// Decide the effect we want to apply to the selection

// getElementByTagName('tagname');
// node-list = array-like object
// index, length property but not array methods

const headings = document.getElementsByTagName('h2'); // selects all h2 elements
//console.log(headings); // returns  with h2 elements
headings[0].style.color = 'red'; 
// console.log(headings.length);
headings[1].style.fontSize = '100px';

const items = document.getElementsByTagName('li')

// items.forEach(function(item){
//     console.log(item);
// });

const betterItems = [...items]

betterItems.forEach(function(item) {
    // console.log(item);
});

items[2].style.color = 'orange';

console.log(items);
console.log(betterItems);
