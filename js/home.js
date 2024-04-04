

document.querySelector("#searchBtn").addEventListener('click', function () {
    alert("Search successful!")
    location.reload();
  })



window.addEventListener('scroll', function () {
    const header = document.querySelector('nav');
    header.classList.toggle('sticky', window.scrollY > 0)
})




window.addEventListener('scroll', () => {
    let reveals = document.querySelectorAll('.reveal')

    for(let i = 0; i< reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let revealTop = reveals[i].getBoundingClientRect().top;
      let revealPoint = 50;

      if(revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add('active')
      }
    }
  })

  const scrollBtn = document.querySelector('.scrollToTop-btn')
  window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('active', window.scrollY > 250)
  })

  const progressCircle = document.querySelector(".autoplay-progress svg");
  const progressContent = document.querySelector(".autoplay-progress span");
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    on: {
      autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty("--progress", 1 - progress);
        progressContent.textContent = `${Math.ceil(time / 1000)}s`;
      }
    }
  });

 
  document.querySelector("#clickbtn").addEventListener("click", function () {
    let icon = document.querySelector("#icon");
    let button =  document.querySelector("#clickbtn");
    if(icon.style.rotate == "180deg"){
      icon.style.rotate = "0deg";
      button.style.color = "black";
    }else{
      icon.style.rotate = "180deg";
      button.style.color = "blue";
    }
  });


  document.querySelector("#clickbtn2").addEventListener("click", function () {
    let icon2 = document.querySelector("#icon2");
    let button2 =  document.querySelector("#clickbtn2");
    if(icon2.style.rotate == "180deg"){
      icon2.style.rotate = "0deg";
      button2.style.color = "black";
    }else{
      icon2.style.rotate = "180deg";
      button2.style.color = "blue";
    }
  });
  document.querySelector("#clickbtn3").addEventListener("click", function () {
    let icon3 = document.querySelector("#icon3");
    let button3 =  document.querySelector("#clickbtn3");
    if(icon3.style.rotate == "180deg"){
      icon3.style.rotate = "0deg";
      button3.style.color = "black";
    }else{
      icon3.style.rotate = "180deg";
      button3.style.color = "blue";
    }
  });
  document.querySelector("#clickbtn4").addEventListener("click", function () {
    let icon4 = document.querySelector("#icon4");
    let button4 =  document.querySelector("#clickbtn4");
    if(icon4.style.rotate == "180deg"){
      icon4.style.rotate = "0deg";
      button4.style.color = "black";
    }else{
      icon4.style.rotate = "180deg";
      button4.style.color = "blue";
    }
  });
  document.querySelector("#clickbtn5").addEventListener("click", function () {
    let icon5 = document.querySelector("#icon5");
    let button5 =  document.querySelector("#clickbtn5");
    if(icon5.style.rotate == "180deg"){
      icon5.style.rotate = "0deg";
      button5.style.color = "black";
    }else{
      icon5.style.rotate = "180deg";
      button5.style.color = "blue";
    }
  })