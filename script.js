const slider = document.querySelector("input[type=range]");
const toggle = document.querySelector("input[type=checkbox]");
const pageviews = document.querySelector('.page-views');
const price = document.querySelector('.change-price');
const button = document.querySelector('.btn-order');
const card = document.querySelector('.card');
// let width = document.getElementById('width');

let priceChoice = 16;

slider.onchange = function() {

  // The value is expressed in percantage. The + sign
  // is needed to convert the value to a number because the switch
  // doesn't read percentage.
  switch(+slider.value) {
    case 0:
      pageviews.innerHTML = "10K PAGEVIEWS"
      priceChoice = 8
      price.innerHTML = `$ ${priceDiscount(priceChoice)}`
      break;
    
    
    case 25: 
      pageviews.innerHTML = "50K PAGEVIEWS";
      priceChoice = 12;
      price.innerHTML = `$ ${priceDiscount(priceChoice)}`;
      break;
    
    
    case 50:
      pageviews.innerHTML = "100K PAGEVIEWS";
      priceChoice = 16;
      price.innerHTML = `$ ${priceDiscount(priceChoice)}`;
      break;
    
    
    case 75:
      pageviews.innerHTML = "500K PAGEVIEWS";
      priceChoice = 24;
      price.innerHTML = `$ ${priceDiscount(priceChoice)}`;
      break;
    
     
    case 100:
      pageviews.innerHTML = "1M PAGEVIEWS";
      priceChoice = 36;
      price.innerHTML = `$ ${priceDiscount(priceChoice)}`;
      break;
      default:
      console.error('There\'s something wrong');
  } 
};


slider.addEventListener('mousemove', function() {
  const activeSlider =  slider.value;
  const sliderColor = `linear-gradient(90deg, rgb(165, 243, 235) ${activeSlider}%,
  rgb(234, 238, 251) ${activeSlider}%)`;
  slider.style.background = sliderColor;
});

const priceDiscount = function(discount) {
  if(toggle.checked) {
    discount = (discount * 25 / 100);
  }
  return discount.toFixed(2);
};

toggle.addEventListener('change', function() {
  price.innerHTML = `$ ${priceDiscount(priceChoice)}`;
});

// Button trial simulation
function deleteCard() {
  card.style.display = 'none';
}

button.addEventListener('click', function() {
  button.innerHTML = 'Ordering...';
  
  setTimeout(() => {
    button.innerHTML = 'Start my trial';
    deleteCard();
  }, 3000);
});



/* Javascript for showing the page width, useful for responsive design,
 no need to open the developer tool. :-)
  
const onresize = function() {
   width.innerText = document.body.clientWidth;
   width.classList.add('display-width');
   setTimeout(() => {
       width.classList.remove('display-width');
   }, 2000)
}
window.addEventListener("resize", onresize); */