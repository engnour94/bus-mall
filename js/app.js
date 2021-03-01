'use strict';

let productArr=[
  'bag.jpg',
  'banana.jpg',
  'bathroom.jpg',
  'boots.jpg',
  'breakfast.jpg',
  'bubblegum.jpg',
  'chair.jpg',
  'cthulhu.jpg',
  'dog-duck.jpg',
  'dragon.jpg',
  'pen.jpg',
  'pet-sweep.jpg',
  'scissors.jpg',
  'shark.jpg',
  'sweep.png',
  'tauntaun.jpg',
  'unicorn.jpg',
  'usb.gif',
  'water-can.jpg',
  'wine-glass.jpg'
];
const imageSection = document.getElementById( 'imageSection' );
const leftImage = document.getElementById( 'leftImage' );
const midImage = document.getElementById( 'midImage' );
const rightImage = document.getElementById( 'rightImage' );
const viewResult = document.getElementById( 'viewResult' );
const result = document.getElementById('result')

let leftProductIndex = 0;
let midProductIndex = 0;
let rightProductIndex = 0;
const clickCounter = 25;




console.log( productArr.length );
function Product ( name )
{
  this.imageUrl = `../img/${name}`;
  this.imageName = name.split( '.' )[0];
  this.clicks = 0;
  this.shown = 0;
  Product.all.push( this );
}

Product.all = [];
Product.counter=0;

for( let i = 0; i < productArr.length; i++ ) {
  new Product( productArr[i] );
}
function render(){
  let leftIndex =randomNumber( 0,Product.all.length - 1 );
  let midIndex =randomNumber( 0,Product.all.length - 1 );
  let rightIndex =randomNumber( 0,Product.all.length - 1 );

  while( leftIndex===rightIndex|| leftIndex===midIndex||rightIndex===midIndex ){
    leftIndex =randomNumber( 0,Product.all.length - 1 );
    midIndex =randomNumber( 0,Product.all.length - 1 );
    rightIndex =randomNumber( 0,Product.all.length - 1 );


  }
  leftImage.src = Product.all[leftIndex].imageUrl;
  leftImage.alt = Product.all[leftIndex].name;
  leftProductIndex =leftIndex;

  midImage.src = Product.all[midIndex].imageUrl;
  midImage.alt = Product.all[midIndex].name;
  midProductIndex =leftIndex;

  rightImage.src = Product.all[rightIndex].imageUrl;
  rightImage.alt = Product.all[rightIndex].name;
  rightProductIndex =leftIndex;


  Product.all[leftIndex].shown++;
  Product.all[midIndex].shown++;
  Product.all[rightIndex].shown++;

}


function handelClick( event ){

  if( Product.counter <= clickCounter ){
    const clickedElement = event.target;

    if( clickedElement.id === 'leftImage' || clickedElement.id === 'rightImage'||clickedElement.id==='midImage' ) {
      if( clickedElement.id ==='leftImage' ) {
        Product.all[leftProductIndex].clicks++;
      }

      if( clickedElement.id === 'rightImage' ) {
        Product.all[rightProductIndex].clicks++;
      }

      if( clickedElement.id === 'midImage' ) {
        Product.all[midProductIndex].clicks++;

      }

      Product.counter++;
      render();
      //console.log( Product.all );
    }


  }


}
imageSection.addEventListener( 'click', handelClick );

viewResult.addEventListener( 'click', getResult );

function getResult() {
  console.log( Product.all );
  for ( let i = 0; i < Product.all.length; i++ ) {
    let liE1 = document.createElement( 'li' );
    result.appendChild( liE1 );
    liE1.textContent = `${Product.all[i].imageName} had ${Product.all[i].clicks} Votes, and was seen ${Product.all[i].shown} times`;
  }
  viewResult.removeEventListener( 'click', getResult );
  viewResult.textContent = 'Reset';
  viewResult.onclick = function( ) {
    location.reload();
  };
}





//console.log( Product.all );

// Helper function
function randomNumber( min, max ) {
  return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
}

render();
//console.log( render );
