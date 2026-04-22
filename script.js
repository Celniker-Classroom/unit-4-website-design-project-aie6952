function toggleTheme() {
   var element = document.body;
   element.classList.toggle("light-mode");
}

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("myModal");
  const btn = document.getElementById("myBtn");
  const closeSpan = document.querySelector(".close");


  btn.addEventListener("click", () => {
    modal.style.display = "block";
  });


  closeSpan.addEventListener("click", () => {
    modal.style.display = "none";
  });


  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});


var slideIndex = 1;
if (document.getElementsByClassName("mySlides").length > 0) {
    showDivs(slideIndex);
}


function plusDivs(n) {
    showDivs(slideIndex += n);
}


function currentDiv(n) {
    showDivs(slideIndex = n);
}


function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-red", "");
    }
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " w3-red";
}



