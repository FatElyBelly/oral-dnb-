var consisteMetierOpen = false
var conditionMetierOpen = false

var consisteMetier = document.getElementById("consisteMetier")
var conditionMetier = document.getElementById("conditionMetier")

openConsisteMetier = () => {
    if (consisteMetierOpen == false) {
        closeConditionMetier()
        consisteMetier.style.display = 'flex'
        consisteMetierOpen = true
        consisteMetier.scrollIntoView()
        setTimeout(() => {
            consisteMetier.style.padding = '1rem'
            consisteMetier.style.height = '35rem'
            const yOffset = -250
            const y = document.getElementById("resetScrollAfterMetier").getBoundingClientRect().top + window.pageYOffset + yOffset
            window.scrollTo({top: y, behavior: 'smooth'})
        }, 1)  
    } else {
        closeConsisteMetier()
    }
}

openConditionMetier = () => {
    if (conditionMetierOpen == false) {
        closeConsisteMetier()
        conditionMetier.style.display = 'flex'
        conditionMetierOpen = true
        conditionMetier.scrollIntoView()
        setTimeout(() => {
            conditionMetier.style.padding = '1rem'
            conditionMetier.style.height = '35rem'
            const yOffset = -250
            const y = document.getElementById("resetScrollAfterMetier").getBoundingClientRect().top + window.pageYOffset + yOffset
            window.scrollTo({top: y, behavior: 'smooth'})
        }, 1)  
    } else {
        closeConditionMetier()
    }
}

closeConsisteMetier = () => {
    consisteMetier.style.padding = '0'
    consisteMetier.style.height = '0'
    consisteMetierOpen = false
    document.getElementById("metierSection").scrollIntoView()
}

closeConditionMetier = () => {
    conditionMetier.style.padding = '0'
    conditionMetier.style.height = '0'
    conditionMetierOpen = false
    document.getElementById("metierSection").scrollIntoView()
}

var pageOverlay = document.getElementById('pageOverlay')
var showImage = document.getElementById('showImage')
var shownImage = document.getElementById('shownImage')

openImage = (img) => {
    shownImage.src = "images/" + img + '.png';
    pageOverlay.style.display = 'block'
    showImage.style.display = 'block'
}

closeImage = () => {
    showImage.style.display = 'none'
    pageOverlay.style.display = 'none'
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000);
}