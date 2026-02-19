// Simple JS for scroll reveal
const card = document.querySelectorAll('.card');
window.addEventListener('scroll', () => {
  card.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 340) {
      card.classList.add('show');
    }
    if (rect.top < window.innerHeight - 400) {
    container.classList.add('show');
  }

  if (rect.top < window.innerHeight - 400) {
    container.classList.add('show');
  }
  });
});



//2
const container = document.querySelector('.tool-container');

window.addEventListener('scroll', () => {
  const rect = container.getBoundingClientRect();
  // if (rect.top < window.innerHeight - 400) {
  //   container.classList.add('show');
  // }
});

//3
const toolkit = document.querySelector('.toolkit');

window.addEventListener('scroll', () => {
  const rect = toolkit.getBoundingClientRect();
  
  if(rect.top < window.innerHeight - 100 && !toolkit.classList.contains('show')) {
    toolkit.classList.add('show');

    // remove glow animation after 4 seconds
    setTimeout(() => {
      toolkit.style.animation = 'none'; 
    }, 1500);
  }
});




// EMAIL VIA GMAIL
document.getElementById("emailForm").addEventListener("submit", function (e) {
  e.preventDefault();


  let name = encodeURIComponent(document.getElementById("emailName").value);
  let email = encodeURIComponent(document.getElementById("emailEmail").value);
  let message = encodeURIComponent(document.getElementById("emailMessage").value);

  window.open(
    `https://mail.google.com/mail/?view=cm&fs=1&to=georgeparadise4u@gmail.com&su=Message from ${name}&body=Name: ${name}%0AEmail: ${email}%0A%0A${message}`,
    "_blank"
  );
});

// WHATSAPP FUNCTION
document.getElementById("whatsappForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("waName").value;
  let email = document.getElementById("waEmail").value;
  let message = document.getElementById("waMessage").value;

  let whatsappMessage =
    `Name: ${name}%0AEmail: ${email}%0A%0A${message}`;

  window.open(
    `https://wa.me/2348037998324?text=${whatsappMessage}`,
    "_blank"
  );
});



console.log(document.getElementById("emailForm"));
console.log(document.getElementById("whatsappForm"));


  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });







// Close mobile menu when clicking on a link
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// Handle resize events
window.addEventListener('resize', () => {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  
  // Close mobile menu when resizing to larger screens
  if (window.innerWidth > 700) {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }
});

// Improve touch experience for cards
// document.querySelectorAll('.card, .tool-card, .project-card').forEach(card => {
//   card.addEventListener('touchstart', function() {
//     this.style.transform = 'scale(0.98)';
//   });
  
//   card.addEventListener('touchend', function() {
//     this.style.transform = '';
//   });
// });

import { inject } from '@vercel/analytics';
inject();