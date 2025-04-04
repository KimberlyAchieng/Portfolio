const portfolioData = {
    name: "Kimberly Achieng",
    title: "Virtual Assistant & Web Developer",
    location: "Nairobi, Kenya",
    email: "kimberly.achieng@example.com",
    linkedin: "https://linkedin.com/in/kimberlyachieng",
    github: "https://github.com/yourgithubusername",
    resume: "resume.pdf",
    skills: [
      "WordPress", "Web Design", "SEO Optimization", "Social Media Management",
      "Project Management", "Client Communication", "Google Workspace", "Microsoft Office"
    ],
    experience: [
      {
        role: "Virtual Assistant",
        company: "Digilab Marketing Agency",
        duration: "May 2024 - Present",
        description: "Providing part-time virtual assistance, managing tasks, and supporting SEO research."
      },
      {
        role: "Administrative Support Volunteer",
        company: "Moi Educational Centre",
        duration: "January 2024 - April 2024",
        description: "Handled administrative tasks, coordinated events, and supported office functions."
      }
    ],
    education: [
      {
        institution: "ALX Online",
        course: "Virtual Assistant Program",
        year: "2024"
      }
    ]
  };
  
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("name").innerText = portfolioData.name;
    document.getElementById("title").innerText = portfolioData.title;
    document.getElementById("location").innerText = portfolioData.location;
    document.getElementById("email").innerText = portfolioData.email;
    document.getElementById("linkedin").href = portfolioData.linkedin;
    document.getElementById("github").href = portfolioData.github;
  
    let skillsList = document.getElementById("skills");
    portfolioData.skills.forEach(skill => {
      let li = document.createElement("li");
      li.textContent = skill;
      skillsList.appendChild(li);
    });
  
    let experienceList = document.getElementById("experience");
    portfolioData.experience.forEach(exp => {
      let div = document.createElement("div");
      div.innerHTML = `<h3>${exp.role} - ${exp.company}</h3><p>${exp.duration}</p><p>${exp.description}</p>`;
      experienceList.appendChild(div);
    });
  });
  