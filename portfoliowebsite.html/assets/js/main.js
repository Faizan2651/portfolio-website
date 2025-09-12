 /* ----- NAVIGATION BAR FUNCTION ----- */
 function myMenuFunction(){
      var menuBtn = document.getElementById("myNavMenu");
      if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
      } else {
        menuBtn.className = "nav-menu";
      }
    }

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
     window.onscroll = function() {headerShadow()};

     function headerShadow() {
      const navHeader =document.getElementById("header");

      
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
        
      } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
      }
      
     }
/* ----- TYPING EFFECT ----- */
     var typingEffect = new Typed(".typedText",{
      strings : ["Faizan Sheikh", "a Web Developer", "a UI/UX Designer", "a Learner"],
      loop : true,
      typeSpeed : 100, 
      backSpeed : 60,
      // backDelay : 2000
      loop: true 
   })

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
   const sr = ScrollReveal({
          origin: 'top',
          distance: '80px',
          duration: 2000,
          reset: true     
   })


  /* -- HOME -- */
   sr.reveal('.featured-text-card',{})
  sr.reveal('.featured-name',{delay: 100})
  sr.reveal('.featured-text-info',{delay: 200})
  sr.reveal('.featured-text-btn',{delay: 200})
  sr.reveal('.social_icons',{delay: 200})
  sr.reveal('.featured-image',{delay: 300})
  

  /* -- PROJECT BOX -- */
  

  /* -- HEADINGS -- */
   sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

  /* -- ABOUT INFO & CONTACT INFO -- */
  const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srLeft.reveal('.about-info',{delay: 100})
  srLeft.reveal('.contact-info',{delay: 100})


  /* -- ABOUT SKILLS & FORM BOX -- */
  const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srRight.reveal('.skills-box',{delay: 100})
  srRight.reveal('.form-control',{delay: 100})
  


/* ----- CHANGE ACTIVE LINK ----- */
  const sections = document.querySelectorAll('section[id]')
  function scrollActive() {
    const scrollY = window.scrollY;
    sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id')
      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
          document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
      }  else {
        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
      }
  })
  }
  window.addEventListener('scroll', scrollActive)
   



  // ----- Show More / Show Less Certificates -----
// Place this in your JS file or inside <script> tag before </body>
document.getElementById("toggleButton").addEventListener("click", function () {
  const moreCerts = document.querySelector(".more-certificates");
  const button = document.getElementById("toggleButton");

  if (moreCerts.style.display === "none") {
    moreCerts.style.display = "flex";
    button.textContent = "Show Less";
  } else {
    moreCerts.style.display = "none";
    button.textContent = "Show More";
  }
});




// contact me 
(function() {
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
        .then(() => {
            alert("✅ Message sent successfully!");
            document.getElementById("contact-form").reset();
        }, (error) => {
            alert("❌ Failed to send message: " + JSON.stringify(error));
        });
});

