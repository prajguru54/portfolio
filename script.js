// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Pagination logic
const projects = [
    {
        title: "Project 1",
        description: "Description of Project 1. This is a brief overview of what the project does and the technologies used.",
        image: "https://source.unsplash.com/400x200/?programming,code"
    },
    {
        title: "Project 2",
        description: "Description of Project 2. This is a brief overview of what the project does and the technologies used.",
        image: "https://source.unsplash.com/400x200/?programming,web"
    },
    {
        title: "Project 3",
        description: "Description of Project 3. This is a brief overview of what the project does and the technologies used.",
        image: "https://source.unsplash.com/400x200/?programming,software"
    },
    {
        title: "Project 4",
        description: "Description of Project 4. This is a brief overview of what the project does and the technologies used.",
        image: "https://source.unsplash.com/400x200/?programming,app"
    },
    {
        title: "Project 5",
        description: "Description of Project 5. This is a brief overview of what the project does and the technologies used.",
        image: "https://source.unsplash.com/400x200/?programming,development"
    },
    {
        title: "Project 6",
        description: "Description of Project 6. This is a brief overview of what the project does and the technologies used.",
        image: "https://source.unsplash.com/400x200/?programming,technology"
    }
];

let currentPage = 0;
const projectsPerPage = 3;

function renderProjects() {
    const start = currentPage * projectsPerPage;
    const end = start + projectsPerPage;
    const projectContainer = document.getElementById('project-container');
    projectContainer.innerHTML = '';

    projects.slice(start, end).forEach(project => {
        const projectCard = `
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
                <div class="p-6">
                    <h3 class="font-bold text-xl mb-2">${project.title}</h3>
                    <p class="text-gray-700 mb-4">${project.description}</p>
                    <a href="#" class="text-blue-500 hover:underline">View Project</a>
                </div>
            </div>
        `;
        projectContainer.innerHTML += projectCard;
    });
}

document.getElementById('prev').addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        renderProjects();
    }
});

document.getElementById('next').addEventListener('click', () => {
    if (currentPage < Math.ceil(projects.length / projectsPerPage) - 1) {
        currentPage++;
        renderProjects();
    }
});

// Initial render
renderProjects();