var React = require('react');

var ThumbnailList = require('./ThumbnailList.jsx');


var options = {
  thumbnailData: [{
  title: 'See Tutorial',
  number: 32,
  header: 'Learn React',
  description: 'React is an awesome tool React is an awesome tool React is an awesome tool React is an awesome tool React is an awesome tool React is an awesome tool',
  imageUrl: 'http://formatjs.io/img/react.svg'
},
{
  title: 'See Tutorial',
  number: 12,
  header: 'Learn Gulp',
  description: 'Gulp will speed up your development work flow Gulp will speed up your development work flow Gulp will speed up your development work flow',
  imageUrl: 'https://avatars0.githubusercontent.com/u/6200624?v=3&s=400'
}
]
};


// render the class
var element = React.createElement(ThumbnailList,options);

//tell React where to place the rendered element in the DOM
React.render(element, document.querySelector('.target'));
