const projects = [
    {
        'title': 'memory card game',
        'image': './img/memory-card.png',
        'id': 'project-card-memory-game',
        'codeUrl': 'https://github.com/blevinspercussion/memory-card',
        'demoUrl': 'https://blevinspercussion.github.io/memory-card/',
        'about': '',
    },
    {
        'title': 'storefront and shopping cart',
        'image': './img/snare-drum-store.png',
        'id': 'project-card-shopping-cart',
        'codeUrl': 'https://github.com/blevinspercussion/shopping-cart',
        'demoUrl': 'https://blevinspercussion.github.io/shopping-cart/',
        'about': '',
    },
    {
        'title': 'personal website',
        'image': './img/Screenshot from 2022-07-17 15-44-53.png',
        'id': 'project-card-personal-website',
        'codeUrl': null,
        'demoUrl': 'https://blevinspercussion.com/',
        'about': '',
    },
]

const mockups = [
    {
        'title': 'memory card game',
        'image': './img/memory-card.png',
        'codeUrl': 'https://github.com/blevinspercussion/memory-card',
        'demoUrl': 'https://blevinspercussion.github.io/memory-card/',
        'about': '',
    },
    {
        'title': 'memory card game',
        'image': './img/memory-card.png',
        'codeUrl': 'https://github.com/blevinspercussion/memory-card',
        'demoUrl': 'https://blevinspercussion.github.io/memory-card/',
        'about': '',
    },
    {
        'title': 'memory card game',
        'image': './img/memory-card.png',
        'codeUrl': 'https://github.com/blevinspercussion/memory-card',
        'demoUrl': 'https://blevinspercussion.github.io/memory-card/',
        'about': '',
    },
]

// Get main elements
const mainContent = document.getElementById('main-content');
const aboutLink = document.getElementById('about-link');
const projectsLink = document.getElementById('projects-link');
const linksLink = document.getElementById('links-link');

// Create DOM Elements for 'about' section

const aboutSection = document.createElement('section');
const aboutText = document.createElement('div');
const aboutHead = document.createElement('h1');
const aboutSubHead = document.createElement('h3');
const aboutParagraph = document.createElement('p');
const aboutImageDiv = document.createElement('div');
const aboutImage = document.createElement('img');

// Add classes and IDs to 'about' section 
aboutSection.setAttribute('id', 'about');
aboutSection.classList.add('about-onscreen');
aboutImageDiv.classList.add('image');
aboutImage.classList.add('profile-pic');

// Add content to 'about' section elements 
aboutHead.textContent = 'Welcome!';
aboutSubHead.textContent = 'My name is Adam Blevins and I am a front end web developer.';
aboutParagraph.textContent = '';
aboutImage.setAttribute('src', './img/cobra-kai.jpg');

// Append elements 
aboutSection.appendChild(aboutText);
aboutText.appendChild(aboutHead);
aboutText.appendChild(aboutSubHead);
aboutText.appendChild(aboutParagraph);
aboutSection.appendChild(aboutImageDiv);
aboutImageDiv.appendChild(aboutImage);

// Create DOM elements for 'projects' section
const projectsSection = document.createElement('section');
const projectsNav = document.createElement('ul');
const frontEndProjectsLink = document.createElement('li');
const frontEndMockupsLink = document.createElement('li');


// Add classes and IDs to 'projects' section
projectsSection.setAttribute('id', 'projects');
frontEndProjectsLink.setAttribute = 'front-end-projects-link';
frontEndProjectsLink.classList.add('sub-link', 'active-link');
frontEndMockupsLink.setAttribute('id', 'front-end-mockups-link');
frontEndMockupsLink.classList.add('sub-link', 'inactive-link');

// Add content to 'projects' section elements
frontEndProjectsLink.textContent = 'front end projects';
frontEndMockupsLink.textContent = 'front end mockups';

// Create DOM elements for 'front end projects' section
const frontEndProjects = document.createElement('div');
const frontEndProjectsText = document.createElement('p');
const projectCardsDiv = document.createElement('div');

// Add classes and IDs to 'front end projects' section 
frontEndProjects.setAttribute('id', 'front-end-projects');
frontEndProjects.classList.add('front-end-projects-onscreen');
projectCardsDiv.setAttribute('id', 'project-cards');

// Add content to 'front end projects' elements 
frontEndProjectsText.textContent = 'The projects in this section were designed and coded by me, from conception to completion.'

// Append elements
projectsSection.appendChild(projectsNav);
projectsNav.appendChild(frontEndProjectsLink);
projectsNav.appendChild(frontEndMockupsLink);
projectsSection.appendChild(projectCardsDiv);

// Create project cards
for (let project in projects) {
    // Create elements
    const projectCardDiv = document.createElement('div');
    const projectCardHeading = document.createElement('h3');
    const projectCardImage = document.createElement('img');
    const projectCardLinks = document.createElement('div');
    const projectCardCodeLink = document.createElement('a');
    const projectCardDemoLink = document.createElement('a');

    // Add classes and IDs 
    projectCardDiv.classList.add('project-card');
    projectCardDiv.setAttribute('id', projects[project].id);
    projectCardImage.classList.add('project-image');
    projectCardLinks.classList.add('project-card-links');

    // Add content to elements
    projectCardHeading.textContent = projects[project].title;
    projectCardImage.setAttribute('src', projects[project].image);
    projectCardCodeLink.setAttribute('href', projects[project].codeUrl);
    projectCardCodeLink.setAttribute('target', '_blank');
    projectCardCodeLink.textContent = 'github';
    projectCardDemoLink.setAttribute('href', projects[project].demoUrl);
    projectCardDemoLink.setAttribute('target', '_blank');
    projectCardDemoLink.textContent = 'live demo';

    // Append elements
    projectCardsDiv.appendChild(projectCardDiv);
    projectCardDiv.appendChild(projectCardHeading);
    projectCardDiv.appendChild(projectCardImage);
    projectCardDiv.appendChild(projectCardLinks);
    projectCardLinks.appendChild(projectCardCodeLink);
    projectCardLinks.appendChild(projectCardDemoLink);

}

mainContent.appendChild(aboutSection);


const sectionLinks = document.querySelectorAll('.section-link');



// Get DOM Elements

// const aboutLink = document.getElementById('about-link');
// const projectsLink = document.getElementById('projects-link');
// const linksLink = document.getElementById('links-link');

// const aboutSection = document.getElementById('about');

// const sectionLinks = document.querySelectorAll('.link');

// const frontEndProjectsLink = document.getElementById('front-end-projects-link');
// const frontEndMockupsLink = document.getElementById('front-end-mockups-link');

// const frontEndProjects = document.getElementById('front-end-projects');

// const projectsSection = document.getElementById('projects');

// DOM Functions 
removeAboutSection = () => {
    aboutSection.remove();
}

hideAboutSection = () => {
    aboutSection.classList.remove('about-onscreen');
    aboutSection.classList.add('about-offscreen');
    aboutSection.style.visibility = 'hidden';
    aboutSection.addEventListener('transitionend', removeAboutSection());
    aboutSection.removeEventListener('transitionend', removeAboutSection());
}

showProjectsSection = () => {
    mainContent.appendChild(projectsSection);
}


// Add event listeners

sectionLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (link.classList.contains('inactive-link')) {
            sectionLinks.forEach(link => {
                if (link.classList.contains('active-link')) {
                    link.classList.remove('active-link');
                    link.classList.add('inactive-link');
                }
            })
        }
        link.classList.remove('inactive-link');
        link.classList.add('active-link');
    })
});

aboutLink.addEventListener('click', () => {
    aboutSection.classList.remove('about-offscreen');
    aboutSection.classList.add('about-onscreen');
    aboutSection.style.visibility = 'visible';
});

projectsLink.addEventListener('click', () => {
    hideAboutSection();
    showProjectsSection();
});

// linksLink.addEventListener('click', () => {
//     removeAboutSection();
// });

// frontEndMockupsLink.addEventListener('click', () => {
//     frontEndProjects.classList.remove('front-end-projects-onscreen');
//     frontEndProjects.classList.add('front-end-projects-offscreen');
//     frontEndProjects.addEventListener('transitionend', () => {
//         frontEndProjects.remove();
//     });
// });

// frontEndProjectsLink.addEventListener('click', () => {
//     projects.appendChild(frontEndProjects);
//     frontEndProjects.classList.remove('front-end-projects-offscreen');
//     frontEndProjects.classList.add('front-end-projects-onscreen');
// });