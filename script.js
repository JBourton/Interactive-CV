document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Timeline Interaction
    const timelineToggles = document.querySelectorAll('.timeline-toggle');
    timelineToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const content = toggle.parentElement.nextElementSibling;
            content.classList.toggle('open');
            toggle.textContent = content.classList.contains('open') ? 'Hide Details ▲' : 'Show Details ▼';
        });
    });
});

// JS for toggling additional education
const toggleButton = document.getElementById('toggle-education-button');
const educationContent = document.getElementById('previous-education');

toggleButton.addEventListener('click', () => {
    const isHidden = educationContent.classList.toggle('hidden');
    if (isHidden) {
        toggleButton.innerHTML = 'Show Previous Education ▼';
    } else {
        toggleButton.innerHTML = 'Hide Previous Education ▲';
    }
});


// ===================================================================
// DATA: Skills Definition
// ===================================================================
const skillsData = {
    "Cloud & DevOps": {
        color: '#38bdf8', // sky-400
        description: "Designing and managing scalable, resilient cloud infrastructure with a focus on automation and continuous delivery.",
        skills: {
            "Cloud-Native Architecture": { description: "Designed end-to-end architecture for a production-grade application, from initial infrastructure diagrams to live deployment. Gained hands-on experience with cloud-native principles including scalability, resilience, and service decoupling, with a strong focus on aligning design with enterprise cloud infrastructure standards."},
            "Azure Databricks": { description: "Designed complex joins and relationships between datasets as foundational prework to ETL processes. Contributed to structuring efficient ETL pipelines within Azure Databricks to support scalable data integration and transformation workflows." },
            "Azure SQL": { description: "Proficient in architecting and managing Azure SQL Databases as part of complex ETL workflows, hosted on Azure App Service. Integrated with CI/CD pipelines to support robust, automated deployment to production-grade web applications." },
            "Enterprise IT Infrastructure": { description: "Experience in designing Application Environment Diagrams (AEDs) and Technical Infrastructure Diagrams (TIDs) aligned with corporate technical infrastructure standards. Skilled in laying the foundational architecture required for new application development, ensuring compliance with enterprise networking, security, and systems requirements." },
            "CI/CD": { description: "Specialised in creating and maintaining Continuous Integration and Continuous Delivery pipelines to automate software builds, tests, and deployments." },
        }
    },
    "Development & Security": {
        color: '#fb923c', // orange-400
        description: "Writing clean, efficient code and integrating robust security practices throughout the development lifecycle.",
        skills: {
            "C#": { description: "Expertise in C# and the .NET framework for building robust and scalable data loaders." },
            "Streamlit": { description: "Proficient in rapidly developing and deploying Proof-of-Concepts and interactive statistical dashboards using Python and Streamlit. Delivered an internal technical talk to a team of 20 developers, successfully contributing to digital upskilling across the team." },
            "DASH": { description: "Experienced in creating mathematical modelling web applications with highly customisable user interfaces using Plotly Dash." },
            "Selenium": { description: "Some experience using Selenium for automating web browser interaction, primarily for testing purposes." },
            "SAST": { description: "Knowledgeable in Static Application Security Testing (SAST) to identify and fix security vulnerabilities in source code early." },
            "Snyk": { description: "Limited experience with Snyk for finding and fixing vulnerabilities in open source dependencies and container images." },
            "SonarQube": { description: "Utilising SonarQube for continuous inspection of code quality to perform automatic reviews with static analysis of code." },
        }
    },
    "Data & Analytics": {
         color: '#4ade80', // green-400
         description: "Transforming raw data into actionable insights through visualisation, analysis, and robust data management.",
         skills: {
            "Microsoft Power BI": { description: "String expertise in creating compelling and interactive dashboards and reports with Power BI to drive business decisions." },
            "Pandas": { description: "Utilised Pandas to build and analyse mathematical models, specifically for simulating the performance and output of a factory machines to identify points of optimisation." },
            "Microsoft Data Factory": { description: "Used to scope and extract valuable data from a large-scale corporate data lake. Performed data transformation and processing using SQL to prepare datasets for impactful visualisation in Power BI and web-based dashboards, enabling data-driven decision-making across the business." },
            "SQL Optimisation": { description: "Improved performance of legacy SQL queries by identifying and eliminating redundant data access patterns. Optimised query structure to significantly reduce execution time and enhance overall data retrieval efficiency across business-critical systems." },
         }
    },
    "Product & Project Management": {
        color: '#a78bfa', // violet-400
        description: "Guiding products from concept to launch using agile methodologies, ensuring stakeholder alignment and user satisfaction.",
        skills: {
            "Digital Product Management": { description: "Overseeing the entire lifecycle of a digital product, from ideation and strategy to launch and iteration." },
            "Third Party Management": { description: "Skilled in managing relationships, contracts, and performance of third-party vendors and partners." },
            "Agile Methodologies": { description: "Rapidly upskilled in Agile practices to lead a time-sensitive project from initiation to delivery in collaboration with a third party. Acted as project manager, hosting daily stand-ups and weekly progress reviews, ensuring alignment and momentum. Stepped in at short notice and played a key role in the project’s successful delivery." },
            "User Experience (UX)": { description: "Focused on designing and reworking interfaces that are intuitive, efficient, and enjoyable for the end-user." },
            "Requirements Gathering": { description: "Proficient in eliciting, analysing, and documenting requirements from stakeholders to ensure project clarity and success." },
        }
    },
    "Professional & Soft Skills": {
        color: '#f472b6', // pink-400
        description: "Core professional competencies that enable effective communication, leadership, and collaboration in diverse environments.",
        skills: {
            "Presentations": { description: "Adept at delivering clear, engaging, and persuasive presentations to both technical and non-technical audiences. During my internship, I led four successful performance reviews and delivered high-stakes progress presentations to senior stakeholders closely connected to the CEO. Despite limited time to prepare, I communicated complex project outcomes effectively and with confidence." },
            "Intercultural Communication": { description: "Experienced in adapting communication styles to effectively engage with diverse audiences, including learners with special needs and limited English proficiency. Successfully taught classes in Vietnam, navigating different cultural expectations between teachers and students with sensitivity and respect." },
            "Language Teaching": { description: "Experience in breaking down complex concepts and teaching them effectively, fostering learning and development amongst learners of all abilities." },
            "Team Leadership": { description: "Successfully led a project team through an exceptionally tight deadline that many expected to fail. By taking decisive action, motivating the team, and efficiently distributing tasks, I helped turn the situation around and deliver the project on time, maintaining team focus and high morale throughout." },
            "Customer Service": { description: "Committed to delivering exceptional customer service by actively understanding and addressing diverse needs. Experience spans front-line retail environments, where I developed strong interpersonal skills, as well as supporting internal R&D customers during my internship, ensuring clear communication and satisfaction across technical and non-technical stakeholders." },
        }
    }
};

// ===================================================================
// SCRIPT: Skill Cloud
// ===================================================================
const skillCloudContainer = document.getElementById('skill-cloud-container');
const modal = document.getElementById('skill-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalCategory = document.getElementById('modal-category');
const closeModalBtn = document.getElementById('close-modal');

function populateSkillCloud() {
    let html = '';
    for (const [category, data] of Object.entries(skillsData)) {
        html += `
            <div class="bg-slate-50 p-6 rounded-lg transition-shadow hover:shadow-md">
                <h3 class="text-xl font-bold mb-4" style="color: ${data.color};">${category}</h3>
                <p class="text-slate-600 mb-6 min-h-[60px]">${data.description}</p>
                <div class="flex flex-wrap gap-2">
        `;
        for (const [skillName, skillData] of Object.entries(data.skills)) {
            html += `
                <button class="skill-tag text-sm font-medium bg-white text-slate-700 px-3 py-1.5 rounded-full shadow-sm border border-slate-200 hover:bg-slate-100 hover:border-slate-300 transition-all"
                        data-skill="${skillName}" data-category="${category}">
                    ${skillName}
                </button>
            `;
        }
        html += `
                </div>
            </div>
        `;
    }
    skillCloudContainer.innerHTML = html;
}

function openModal(skillName, category) {
    const skillInfo = skillsData[category].skills[skillName];
    modalTitle.textContent = skillName;
    modalDescription.textContent = skillInfo.description;
    modalCategory.textContent = category;
    
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.querySelector('.modal-backdrop').classList.remove('opacity-0');
        modal.querySelector('.modal-content').classList.remove('scale-95');
        modal.querySelector('.modal-content').classList.add('scale-100');
    }, 10);
}

function closeModal() {
    modal.classList.add('opacity-0');

    // The content inside the modal should scale down.
    const content = modal.querySelector('.modal-content');
    if (content) {
        content.classList.add('scale-95');
    }

    // After the transition duration (300ms), hide the modal completely.
    setTimeout(() => {
        modal.classList.add('hidden');
        // Reset the opacity so it's ready for the next time it opens.
        modal.classList.remove('opacity-0');
    }, 300);
}

skillCloudContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('skill-tag')) {
        const skillName = e.target.dataset.skill;
        const category = e.target.dataset.category;
        openModal(skillName, category);
    }
});


// This is the event listener that makes the close button clickable.
if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
}

// This listener allows closing the modal by clicking on the dark background.
if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

populateSkillCloud();