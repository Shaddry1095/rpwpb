const reviewInput = document.querySelector('.reviews-input')
const custumerReviews = document.querySelector('.customer-reviews')
const reviewButton = document.querySelector('#review-button')
const nameInput = document.querySelector('.name-input')
const starInput = document.querySelector('.stars')
const commentInput = document.querySelector('.comment-input')
const customerStars = document.querySelector('.customer-stars')
const customerName = document.querySelector('.customer-name')
const customerComment = document.querySelector('.customer-comment')
const customerReview = document.querySelector('.customer-review')
const reviewTop = document.querySelector('.review-top')
const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.links');
    const navLinks = document.querySelectorAll('.links li');
    /*oneStar = document.querySelector('#one-star')
    twoStar = document.querySelector('#two-star')
    threeStar = document.querySelector('#three-star')
    fourStar = document.querySelector('#four-star')
    fiveStar = document.querySelector('#five-star')*/
    //Toggle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')
        //Animate links
        navLinks.forEach((link, index)=>{
            if (link.style.animation) {
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 4 + 0.5}s`
            }
            
        });
        //Burger animation
        burger.classList.toggle('toggle');
    });
    
    
};


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

let oneStar = document.querySelector('#one-star')
let twoStar = document.querySelector('#two-star')
let threeStar = document.querySelector('#three-star')
let fourStar = document.querySelector('#four-star')
let fiveStar = document.querySelector('#five-star')




oneStar.addEventListener('click', () =>{
    oneStar.style.color = 'yellow';
    twoStar.style.color = 'black';
    threeStar.style.color = 'black';
    fourStar.style.color = 'black';
    fiveStar.style.color = 'black';
    
});

twoStar.addEventListener('click', () =>{
    oneStar.style.color = 'yellow';
    twoStar.style.color = 'yellow';
    threeStar.style.color = 'black';
    fourStar.style.color = 'black';
    fiveStar.style.color = 'black';
    
});

threeStar.addEventListener('click', () =>{
    oneStar.style.color = 'yellow';
    twoStar.style.color = 'yellow';
    threeStar.style.color = 'yellow';
    fourStar.style.color = 'black';
    fiveStar.style.color = 'black';
    
});

fourStar.addEventListener('click', () =>{
    oneStar.style.color = 'yellow';
    twoStar.style.color = 'yellow';
    threeStar.style.color = 'yellow';
    fourStar.style.color = 'yellow';
    fiveStar.style.color = 'black';
    
});

fiveStar.addEventListener('click', () =>{
    oneStar.style.color = 'yellow';
    twoStar.style.color = 'yellow';
    threeStar.style.color = 'yellow';
    fourStar.style.color = 'yellow';
    fiveStar.style.color = 'yellow';
    
});




reviewButton.addEventListener('click', () =>{
    customerName.textContent = nameInput.value
    customerStars.innerHTML = starInput.innerHTML 
    customerComment.textContent = commentInput.value  
    
    
    customerReview.style.border = '1px solid black'
})


