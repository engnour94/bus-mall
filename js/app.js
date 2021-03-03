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
const result = document.getElementById( 'result' );

let leftProductIndex = 0;
let midProductIndex = 0;
let rightProductIndex = 0;
const clickCounter = 25;
let indices =[];



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



  let leftIndex = randomNumber( 0, Product.all.length - 1 );

  leftImage.src = Product.all[leftIndex].imageUrl;
  leftImage.alt = Product.all[leftIndex].imageName;
  leftProductIndex = leftIndex;
  indices.push( leftIndex );

  let midIndex;
  let rightIndex;
  do {
    midIndex =randomNumber( 0,Product.all.length - 1 );
  } while ( leftIndex === midIndex||midIndex===rightIndex );
  midImage.src = Product.all[midIndex].imageUrl;
  midImage.alt = Product.all[midIndex].imageName;
  midProductIndex = midIndex;
  indices.push( midIndex );

  do {
    rightIndex = randomNumber( 0, Product.all.length - 1 );
  } while ( leftIndex === rightIndex || midIndex === rightIndex );
  rightImage.src = Product.all[rightIndex].imageUrl;
  rightImage.alt = Product.all[rightIndex].imageName;
  rightProductIndex = rightIndex;
  indices.push( rightIndex );

  Product.all[leftIndex].shown++;
  Product.all[midIndex].shown++;
  Product.all[rightIndex].shown++;
}


function handelClick( event ){

  if( Product.counter < clickCounter ){
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

    }



  }


}



imageSection.addEventListener( 'click', handelClick );
removeEventListener( 'click',handelClick );

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
  renderChart();
}







function renderChart() {

  let nameArray = [];
  let clicksArray = [];
  let shownArray = [];
  for( let i = 0; i < Product.all.length; i++ ) {
    nameArray.push( Product.all[i].imageName );
    clicksArray.push( Product.all[i].clicks );
    // console.log(Product.all[i].shown)
    shownArray.push( Product.all[i].shown );

  }

  //console.log(Product.all[0])

  let ctx = document.getElementById( 'myChart' ).getContext( '2d' );
  let myChart = new Chart( ctx, {
    type: 'bar',
    data: {
      labels: nameArray,
      datasets: [{
        label: '# of Votes',
        data: clicksArray,
        backgroundColor: [

          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)'

        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1},

      {
        label: '# of Shown',
        data: shownArray,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1

      }]


    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  } );
}
//renderChart();


//console.log( Product.all );

// Helper function



// Helper function



function randomNumber( min, max ) {

  let index2 = Math.floor( Math.random() * ( max - min + 1 ) ) + min;
  for( let i = 0;i < indices.length;i++ ){
    if ( index2 === indices[i] ){
      index2 = Math.floor( Math.random() * ( max - min + 1 ) ) + min;
    }
  }return( index2 );

}
render();
