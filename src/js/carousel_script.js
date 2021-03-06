var index = 0;
activateCarousel();

function activateCarousel() {
    var i;
//  Retrieves all images to be used in the carousel
    var carousel = document.getElementsByClassName("carousel");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < carousel.length; i++) {
       carousel[i].style.display = "none";  
    }
    
    index++;
    
    if (index > carousel.length) {
        index = 1;
    }
    
//  Changes active buttons
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    carousel[index-1].style.display = "block";  
    dots[index-1].className += " active";
//  Change image every 2 seconds
    setTimeout(activateCarousel, 6000); 
}