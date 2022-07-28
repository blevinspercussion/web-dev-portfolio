// Get DOM Elements

const aboutLink = document.getElementById('about-link');
const projectsLink = document.getElementById('projects-link');
const linksLink = document.getElementById('links-link');

const aboutSection = document.getElementById('about');

const sectionLinks = document.querySelectorAll('.link');

const frontEndProjectsLink = document.getElementById('front-end-projects-link');
const frontEndMockupsLink = document.getElementById('front-end-mockups-link');

const frontEndProjects = document.getElementById('front-end-projects');

const projectsSection = document.getElementById('projects');

// DOM Functions 

removeAboutSection = () => {
    aboutSection.classList.remove('about-onscreen');
    aboutSection.classList.add('about-offscreen');
    aboutSection.style.visibility = 'hidden';
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
    removeAboutSection();
});

linksLink.addEventListener('click', () => {
    removeAboutSection();
});

frontEndMockupsLink.addEventListener('click', () => {
    frontEndProjects.classList.remove('front-end-projects-onscreen');
    frontEndProjects.classList.add('front-end-projects-offscreen');
    frontEndProjects.addEventListener('transitionend', () => {
        frontEndProjects.remove();
    });
});

frontEndProjectsLink.addEventListener('click', () => {
    projects.appendChild(frontEndProjects);
    frontEndProjects.classList.remove('front-end-projects-offscreen');
    frontEndProjects.classList.add('front-end-projects-onscreen');
});