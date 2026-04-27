// CURSOR TRACKING
const cursorBubble = document.getElementById('cursorBubble');
document.addEventListener('mousemove', (e) => {
  cursorBubble.style.left = e.clientX + 'px';
  cursorBubble.style.top = e.clientY + 'px';
});

// THEME TOGGLE
const themeToggle = document.getElementById('themeToggle');
const themeToggleMobile = document.getElementById('themeToggleMobile');
const body = document.body;

function toggleTheme() {
  body.classList.toggle('dark');
  body.classList.toggle('light');
}

themeToggle.addEventListener('click', toggleTheme);
themeToggleMobile.addEventListener('click', toggleTheme);

// HAMBURGER MENU
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('open');
});

// NAVIGATION ACTIVE STATE
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link, .mobile-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-section') === current) {
      link.classList.add('active');
    }
  });
});

// CLOSE MOBILE MENU ON LINK CLICK
const mobileLinks = document.querySelectorAll('.mobile-link');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('open');
  });
});

// PROJECTS DATA
const projects = [
  {
    title: "Dishcovery – Recipe App",
    description: "A lightweight recipe-sharing platform built for easy access to Nigerian dishes with search and filtering features.",
    tags: ["HTML", "CSS", "JavaScript", "API Integration"],
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&h=400&fit=crop",
    liveUrl: "#",
    repoUrl: "#"
  },
  {
    title: "QuickCalc",
    description: "A modern, responsive calculator with advanced mathematical functions and keyboard support for quick calculations.",
    tags: ["HTML", "CSS", "JavaScript", "Math Logic"],
    image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=600&h=400&fit=crop",
    liveUrl: "#",
    repoUrl: "#"
  },
  {
    title: "Guess King",
    description: "An interactive number guessing game with multiple difficulty levels, score tracking, and engaging animations.",
    tags: ["HTML", "CSS", "JavaScript", "Game Logic"],
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop",
    liveUrl: "#",
    repoUrl: "#"
  },
  {
    title: "Vista Suites – Hotel Landing Page",
    description: "A clean, modern, and responsive hotel landing page showcasing luxury suites with user-friendly booking sections and elegant design.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
    liveUrl: "#",
    repoUrl: "#"
  },
  {
    title: "Counter Program",
    description: "A simple, interactive, and responsive counter program that lets users increment, decrement, and reset values with smooth animations and clean design.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop",
    liveUrl: "#",
    repoUrl: "#"
  },
  {
    title: "Gidam Parks",
    description: "A responsive web project for Gidam Parks built with HTML, CSS, and JavaScript, featuring clean structure, smooth interactions, and a user-first design approach.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX"],
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop",
    liveUrl: "#",
    repoUrl: "#"
  },
  {
    title: "Luxe Store",
    description: "A modern e-commerce web app designed for a clean and smooth shopping experience. Users can browse products, view details, and interact with a stylish UI built for performance.",
    tags: ["HTML", "CSS", "JavaScript", "E-commerce", "UI/UX"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    liveUrl: "#",
    repoUrl: "#"
  },
  {
    title: "FuelRadar",
    description: "A smart web app that helps users find the cheapest fuel stations nearby. It focuses on real-time discovery, location-based results, and a simple user experience.",
    tags: ["HTML", "CSS", "JavaScript", "Maps", "Geolocation"],
    image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=600&h=400&fit=crop",
    liveUrl: "#",
    repoUrl: "#"
  }
];

// RENDER PROJECTS
const projectsGrid = document.getElementById('projectsGrid');
projects.forEach(project => {
  const projectCard = document.createElement('div');
  projectCard.className = 'project-card';
  projectCard.innerHTML = `
    <img src="${project.image}" alt="${project.title}">
    <div class="project-content">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-tags">
        ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
      </div>
      <div class="project-links">
        <a href="${project.liveUrl}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
          View Project
        </a>
        <a href="${project.repoUrl}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          View Repo
        </a>
      </div>
    </div>
  `;
  projectsGrid.appendChild(projectCard);
});

// EMAIL FORM SUBMIT
document.getElementById("emailForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  let name = encodeURIComponent(this.elements.name.value);
  let email = encodeURIComponent(this.elements.email.value);
  let message = encodeURIComponent(this.elements.message.value);

  window.open(
    `https://mail.google.com/mail/?view=cm&fs=1&to=georgeparadise4u@gmail.com&su=Message from ${name}&body=Name: ${name}%0AEmail: ${email}%0A%0A${message}`,
    "_blank"
  );
});

// WHATSAPP FORM SUBMIT
document.getElementById("whatsappForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = this.elements.name.value;
  let email = this.elements.email.value;
  let message = this.elements.message.value;

  let whatsappMessage = `Name: ${name}%0AEmail: ${email}%0A%0A${message}`;

  window.open(
    `https://wa.me/2348037998324?text=${whatsappMessage}`,
    "_blank"
  );
});

// COPY TO CLIPBOARD FUNCTIONS
function showCopyNotification(message) {
  const notification = document.getElementById('copyNotification');
  notification.textContent = message;
  notification.classList.add('show');
  
  setTimeout(() => {
    notification.classList.remove('show');
  }, 2000);
}

function copyToClipboard(text, message) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    document.execCommand('copy');
    showCopyNotification(message);
  } catch (err) {
    console.error('Failed to copy text: ', err);
    showCopyNotification('Copy failed - please try again');
  }

  document.body.removeChild(textArea);
}

function copyEmail() {
  copyToClipboard('georgeparadise4u@gmail.com', 'Copied Email');
}

function copyPhone() {
  copyToClipboard('+2348037998324', 'Copied Phone Number');
}
