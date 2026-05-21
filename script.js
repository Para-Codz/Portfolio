/* ============================================
   PARADISE GEORGE — PORTFOLIO SCRIPT
   Pure Vanilla JavaScript — No frameworks
   ============================================ */

(function () {
  'use strict';

  /* ============ SVG ICON LIBRARY ============ */
  const ICONS = {
    figma: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"/></svg>',
    vscode: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
    html5: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg>',
    css3: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/></svg>',
    js: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg>',
    bootstrap: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z"/></svg>',
    twitter: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    externalLink: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
    palette: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>',
    code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    zap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    fileText: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',
    smartphone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>',
    gitBranch: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>',
    layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>'
  };

  /* ============ DATA ============ */
  const techIcons = [
    { name: 'Figma',      color: '#F24E1E',              svg: ICONS.figma },
    { name: 'VS Code',    color: '#007ACC',              svg: ICONS.vscode },
    { name: 'GitHub',     color: 'var(--text-primary)',  svg: ICONS.github },
    { name: 'HTML5',      color: '#E34F26',              svg: ICONS.html5 },
    { name: 'CSS3',       color: '#1572B6',              svg: ICONS.css3 },
    { name: 'JavaScript', color: '#F7DF1E',              svg: ICONS.js },
    { name: 'Bootstrap',  color: '#7952B3',              svg: ICONS.bootstrap }
  ];

  const summaries = [
    { icon: ICONS.palette, title: 'Modern UI/UX',          desc: 'Crafting sleek, intuitive interfaces that keep users engaged and delighted', color: '#3b82f6' },
    { icon: ICONS.code,    title: 'Efficient Codebase',    desc: 'Writing clean, modular code built for growth and long-term stability',     color: '#22c55e' },
    { icon: ICONS.zap,     title: 'High-Speed Experience', desc: 'Delivering smooth, lightning-fast websites that perform flawlessly across devices', color: '#f59e0b' }
  ];

  const technologies = [
    { name: 'HTML5',             desc: 'Semantic markup, accessibility-focused structure.',   icon: ICONS.fileText,   color: '#E34F26' },
    { name: 'CSS3',              desc: 'Modern layouts, Flexbox, Grid, clean styling.',       icon: ICONS.palette,    color: '#1572B6' },
    { name: 'JavaScript (ES6)',  desc: 'DOM manipulation, logic, and interactivity.',         icon: ICONS.code,       color: '#F7DF1E' },
    { name: 'Bootstrap',         desc: 'Rapid, mobile-first responsive components.',          icon: ICONS.bootstrap,  color: '#7952B3' },
    { name: 'Responsive Design', desc: 'Mobile-first layouts across all screen sizes.',       icon: ICONS.smartphone, color: '#22c55e' },
    { name: 'Git & GitHub',      desc: 'Version control and collaboration workflow.',         icon: ICONS.gitBranch,  color: 'var(--text-primary)' },
    { name: 'UI/UX Basics',      desc: 'Clean interfaces with user-focused design.',          icon: ICONS.layers,     color: '#3b82f6' }
  ];

  const projects = [
    {
      title: 'Dishcovery – Recipe App',
      desc: 'A lightweight recipe-sharing platform built for easy access to Nigerian dishes with search and filtering features.',
      tags: ['HTML', 'CSS', 'JavaScript', 'API Integration'],
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop',
      projectUrl: 'https://dishcovery-cmbl.vercel.app/',
      repoUrl: 'https://github.com/Ogfejiro/Dishcovery'
    },
    {
      title: 'QuickCalc',
      desc: 'A modern, responsive calculator with advanced mathematical functions and keyboard support for quick calculations.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Math Logic'],
      image: 'https://images.unsplash.com/photo-1611125832047-1d7ad1e8e48f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FsY3VsYXRvcnxlbnwwfHwwfHx8MA%3D%3D',
      projectUrl: 'https://quic-calc.vercel.app/',
      repoUrl: 'https://github.com/Para-Codz/QuicCalc'
    },
    {
      title: 'Guess King',
      desc: 'An interactive number guessing game with multiple difficulty levels, score tracking, and engaging animations.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Game Logic'],
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=250&fit=crop',
      projectUrl: 'https://guess-king.vercel.app/',
      repoUrl: 'https://github.com/Para-Codz/GuessKing'
    },
    {
      title: 'Vista Suites – Hotel Landing Page',
      desc: 'A clean, modern, and responsive hotel landing page showcasing luxury suites with user-friendly booking sections and elegant design.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=250&fit=crop',
      projectUrl: 'https://vista-suites.vercel.app/',
      repoUrl: 'https://github.com/Para-Codz/Vista-Suites'
    },
    {
      title: 'Counter Program',
      desc: 'A simple, interactive, and responsive counter program that lets users increment, decrement, and reset values with smooth animations and clean design.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      projectUrl: 'https://counter-program-iota.vercel.app/',
      repoUrl: 'https://github.com/Para-Codz/Counter-Program'
    },
    {
      title: 'Gidam Parks',
      desc: 'A responsive web project for Gidam Parks built with HTML, CSS, and JavaScript, featuring clean structure, smooth interactions, and a user-first design approach.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'UI/UX'],
      image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=250&fit=crop',
      projectUrl: 'https://gidam-parks-and-gardens.pxxl.click/',
      repoUrl: 'https://github.com/Para-Codz/Gidam-Parks-and-Gardens'
    },
    {
      title: 'Luxe Store',
      desc: 'A modern e-commerce web app designed for a clean and smooth shopping experience. Users can browse products, view details, and interact with a stylish UI built for performance.',
      tags: ['HTML', 'CSS', 'JavaScript', 'E-commerce', 'UI/UX'],
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop',
      projectUrl: 'https://luxe-store.pxxl.click/',
      repoUrl: 'https://github.com/Para-Codz/Luxe-Store'
    },
    {
      title: 'FuelRadar',
      desc: 'A smart web app that helps users find the cheapest fuel stations nearby. It focuses on real-time discovery, location-based results, and a simple user experience.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Maps', 'Geolocation'],
      image: 'https://plus.unsplash.com/premium_photo-1661962311915-916344dcba01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnVlbHxlbnwwfHwwfHx8MA%3D%3D',
      projectUrl: 'https://fuelradar.pxxl.click/',
      repoUrl: 'https://github.com/Para-Codz/FuelRadar'
    }
  ];

  const socials = [
    { name: 'Twitter',   icon: ICONS.twitter,   href: 'https://x.com/ParadiseGe41509',   cls: 'social-twitter',   type: 'link' },
    { name: 'GitHub',    icon: ICONS.github,    href: 'https://github.com/para-Codz',    cls: 'social-github',    type: 'link' },
    { name: 'Instagram', icon: ICONS.instagram, href: 'https://www.instagram.com/para.codz/', cls: 'social-instagram', type: 'link' },
    { name: 'WhatsApp',  icon: ICONS.whatsapp,  href: 'https://wa.me/2349033173219',          cls: 'social-whatsapp',  type: 'link' },
    { name: 'Email',     icon: ICONS.mail,      value: 'georgeparadise4u@gmail.com',          cls: 'social-email',     type: 'copy' },
    { name: 'Phone',     icon: ICONS.phone,     value: '09033173219',                          cls: 'social-phone',     type: 'copy' }
  ];

  /* ============ RENDER FUNCTIONS ============ */
  function renderTechIcons() {
    const container = document.getElementById('techRow');
    if (!container) return;
    container.innerHTML = techIcons.map(function (t) {
      return '<div class="tech-icon" title="' + t.name + '" style="color:' + t.color + '">' + t.svg + '</div>';
    }).join('');
  }

  function renderSummaries() {
    const container = document.getElementById('summaryGrid');
    if (!container) return;
    container.innerHTML = summaries.map(function (s) {
      return (
        '<div class="card summary-card">' +
          '<div class="summary-icon" style="background-color:' + s.color + '20;color:' + s.color + '">' + s.icon + '</div>' +
          '<div>' +
            '<h3 class="summary-title">' + s.title + '</h3>' +
            '<p class="summary-desc">' + s.desc + '</p>' +
          '</div>' +
        '</div>'
      );
    }).join('');
  }

  function renderTechnologies() {
    const container = document.getElementById('techGrid');
    if (!container) return;
    container.innerHTML = technologies.map(function (t) {
      return (
        '<div class="card">' +
          '<div class="tech-card-header">' +
            '<div class="tech-card-icon" style="background-color:' + t.color + '20;color:' + t.color + '">' + t.icon + '</div>' +
            '<h3 class="tech-card-title">' + t.name + '</h3>' +
          '</div>' +
          '<p class="tech-card-desc">' + t.desc + '</p>' +
        '</div>'
      );
    }).join('');
  }

  function renderProjects() {
    const container = document.getElementById('projectsGrid');
    if (!container) return;
    container.innerHTML = projects.map(function (p) {
      const tagsHtml = p.tags.map(function (tag) {
        return '<span class="project-tag">' + tag + '</span>';
      }).join('');

      return (
        '<div class="project-card">' +
          '<div class="project-img"><img src="' + p.image + '" alt="' + p.title + '" loading="lazy"/></div>' +
          '<div class="project-body">' +
            '<h3 class="project-title">' + p.title + '</h3>' +
            '<p class="project-desc">' + p.desc + '</p>' +
            '<div class="project-tags">' + tagsHtml + '</div>' +
            '<div class="project-buttons">' +
              '<a href="' + p.projectUrl + '" target="_blank" rel="noopener noreferrer" class="project-btn project-btn-primary btn-glow">' +
                ICONS.externalLink + '<span>View Project</span>' +
              '</a>' +
              '<a href="' + p.repoUrl + '" target="_blank" rel="noopener noreferrer" class="project-btn project-btn-outline">' +
                ICONS.github + '<span>View Repo</span>' +
              '</a>' +
            '</div>' +
          '</div>' +
        '</div>'
      );
    }).join('');
  }

  function renderSocials() {
    const container = document.getElementById('socialsGrid');
    if (!container) return;
    container.innerHTML = socials.map(function (s) {
      if (s.type === 'link') {
        return (
          '<a href="' + s.href + '" target="_blank" rel="noopener noreferrer" title="' + s.name + '" class="social-btn ' + s.cls + '">' +
            s.icon +
          '</a>'
        );
      } else {
        return (
          '<button data-copy="' + s.value + '" title="Copy ' + s.value + '" class="social-btn ' + s.cls + '">' +
            s.icon +
            '<span class="copy-tooltip">Copied!</span>' +
          '</button>'
        );
      }
    }).join('');
  }

  /* ============ BUBBLE CURSOR ============ */
  function initBubbleCursor() {
    const bubble = document.getElementById('bubbleFollower');
    if (!bubble) return;

    const isDesktop = window.matchMedia('(hover: hover) and (pointer: fine)').matches && window.innerWidth > 768;
    if (!isDesktop) return;

    let mouseX = -100, mouseY = -100;
    let bubbleX = -100, bubbleY = -100;

    document.addEventListener('mousemove', function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    document.addEventListener('mouseover', function (e) {
      const t = e.target;
      const isInteractive =
        t.tagName === 'A' || t.tagName === 'BUTTON' ||
        t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' ||
        t.closest('a') || t.closest('button');
      if (isInteractive) bubble.classList.add('hover');
      else bubble.classList.remove('hover');
    });

    document.addEventListener('mousedown', function () { bubble.classList.add('click'); });
    document.addEventListener('mouseup', function () { bubble.classList.remove('click'); });

    function animate() {
      bubbleX += (mouseX - bubbleX) * 0.15;
      bubbleY += (mouseY - bubbleY) * 0.15;
      bubble.style.left = bubbleX + 'px';
      bubble.style.top = bubbleY + 'px';
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }

  /* ============ THEME TOGGLE ============ */
  function updateThemeIcons(theme) {
    const sun     = document.querySelector('.icon-sun');
    const moon    = document.querySelector('.icon-moon');
    const sunM    = document.querySelector('.icon-sun-m');
    const moonM   = document.querySelector('.icon-moon-m');
    const moonThumb = document.querySelector('.moon-thumb');
    const sunThumb  = document.querySelector('.sun-thumb');

    if (theme === 'dark') {
      if (sun) sun.style.display = '';
      if (moon) moon.style.display = 'none';
      if (sunM) sunM.style.display = '';
      if (moonM) moonM.style.display = 'none';
      if (moonThumb) moonThumb.style.display = '';
      if (sunThumb) sunThumb.style.display = 'none';
    } else {
      if (sun) sun.style.display = 'none';
      if (moon) moon.style.display = '';
      if (sunM) sunM.style.display = 'none';
      if (moonM) moonM.style.display = '';
      if (moonThumb) moonThumb.style.display = 'none';
      if (sunThumb) sunThumb.style.display = '';
    }
  }

  function initTheme() {
    const html = document.documentElement;
    const saved = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', saved);
    updateThemeIcons(saved);

    function toggle() {
      const current = html.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      updateThemeIcons(next);
    }

    const tt  = document.getElementById('themeToggle');
    const ttm = document.getElementById('themeToggleMobile');
    const tsm = document.getElementById('themeSwitchMobile');
    if (tt)  tt.addEventListener('click', toggle);
    if (ttm) ttm.addEventListener('click', toggle);
    if (tsm) tsm.addEventListener('click', toggle);
  }

  /* ============ NAVIGATION ============ */
  function initNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuBtn = document.getElementById('menuBtn');
    let isOpen = false;

    const MENU_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
    const CLOSE_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';

    function toggleMenu(force) {
      isOpen = typeof force === 'boolean' ? force : !isOpen;
      mobileMenu.classList.toggle('open', isOpen);
      if (menuBtn) menuBtn.innerHTML = isOpen ? CLOSE_SVG : MENU_SVG;
    }

    if (menuBtn) menuBtn.addEventListener('click', function () { toggleMenu(); });

    // Smooth scroll for any element with data-scroll-to
    document.addEventListener('click', function (e) {
      const target = e.target.closest('[data-scroll-to]');
      if (!target) return;
      const id = target.getAttribute('data-scroll-to');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        toggleMenu(false);
      }
    });

    // Active section + navbar scroll style
    window.addEventListener('scroll', function () {
      navbar.classList.toggle('scrolled', window.scrollY > 50);

      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      let active = 'home';
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          active = sections[i];
          break;
        }
      }
      const navLinks = document.querySelectorAll('[data-section]');
      for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.toggle('active', navLinks[i].getAttribute('data-section') === active);
      }
    });
  }

  /* ============ FORMS — GMAIL & WHATSAPP ============ */
  function initForms() {
    // EMAIL VIA GMAIL
    const emailForm = document.getElementById('emailForm');
    if (emailForm) {
      emailForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name    = encodeURIComponent(document.getElementById('emailName').value);
        const email   = encodeURIComponent(document.getElementById('emailEmail').value);
        const message = encodeURIComponent(document.getElementById('emailMessage').value);

        window.open(
          'https://mail.google.com/mail/?view=cm&fs=1&to=georgeparadise4u@gmail.com&su=Message from ' + name + '&body=Name: ' + name + '%0AEmail: ' + email + '%0A%0A' + message,
          '_blank'
        );
      });
    }

    // WHATSAPP
    const whatsappForm = document.getElementById('whatsappForm');
    if (whatsappForm) {
      whatsappForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name    = document.getElementById('waName').value;
        const email   = document.getElementById('waEmail').value;
        const message = document.getElementById('waMessage').value;

        const whatsappMessage = 'Name: ' + name + '%0AEmail: ' + email + '%0A%0A' + message;

        window.open(
          'https://wa.me/2348037998324?text=' + whatsappMessage,
          '_blank'
        );
      });
    }
  }

  /* ============ COPY TO CLIPBOARD ============ */
  function initCopy() {
    document.addEventListener('click', function (e) {
      const btn = e.target.closest('[data-copy]');
      if (!btn) return;

      const text = btn.getAttribute('data-copy');

      // Modern clipboard API with fallback
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).catch(function () { fallbackCopy(text); });
      } else {
        fallbackCopy(text);
      }

      // Tooltip animation
      const tooltip = btn.querySelector('.copy-tooltip');
      if (tooltip) {
        tooltip.classList.add('show');
        setTimeout(function () { tooltip.classList.remove('show'); }, 2000);
      }

      // Icon swap (copy → check)
      const copyIcon  = btn.querySelector('.copy-icon');
      const checkIcon = btn.querySelector('.check-icon');
      if (copyIcon && checkIcon) {
        copyIcon.style.display = 'none';
        checkIcon.style.display = '';
        setTimeout(function () {
          copyIcon.style.display = '';
          checkIcon.style.display = 'none';
        }, 2000);
      }
    });
  }

  function fallbackCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch (e) { /* ignore */ }
    document.body.removeChild(ta);
  }

  /* ============ INIT ============ */
  function init() {
    renderTechIcons();
    renderSummaries();
    renderTechnologies();
    renderProjects();
    renderSocials();
    initTheme();
    initNavigation();
    initForms();
    initCopy();
    initBubbleCursor();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
