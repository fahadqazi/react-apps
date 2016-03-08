var React = require('react');
var Dropdown = require('./dropdown');


var options = {
  title: 'Choose a dessert', //button show up
  items: [
    'Apple pie',
    'Peach cobler',
    'Coconut Ice Cream'
  ]
}


// render the class
var element = React.createElement(Dropdown,options);

//tell React where to place the rendered element in the DOM
React.render(element, document.querySelector('.target'));
