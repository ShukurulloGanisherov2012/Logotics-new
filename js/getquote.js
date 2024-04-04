
const input5 = document.querySelector('#input5').value;
document.querySelector('#bnt').addEventListener('click', function() {

        
            document.getElementById("myCard").style.display = "block";
            document.getElementById("myCard").style.border = "none";
            var text = `✋ Hello user, you have successfully registered on our site. Welcome to our Logotics site.`;
            var index = 0;
            var speed = 50; // Matnning harfni ozgarishi tezligi (milisaniya cinsida)
            var interval = setInterval(function() {
                if (index < text.length) {
                    document.getElementById("myCard").textContent += text.charAt(index);
                    index++;
                } else {
                    clearInterval(interval);
                    setTimeout(function() {
                        document.getElementById("myCard").style.display = "none";
                        document.getElementById("myCard").textContent = ""; // Matnni tozalash
                    }, 10000);
                }
            }, speed);


})



window.addEventListener('scroll', function () {
    const header = document.querySelector('nav');
    header.classList.toggle('sticky', window.scrollY > 0)
})




window.addEventListener('scroll', () => {
    let reveals = document.querySelectorAll('.reveal')

    for(let i = 0; i < reveals.length; i++) {
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
