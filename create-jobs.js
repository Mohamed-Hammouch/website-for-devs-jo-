const jobs = [
  {
    title: "Senior Frontend Developer",
    location: "Amman, Jordan",
    type: "FULL_TIME",
    level: "SENIOR",
    salary: "2000-3000 JOD",
    description: "Looking for an experienced frontend developer to lead our web development team.",
    requirements: [
      "5+ years of experience with modern JavaScript",
      "Strong experience with React",
      "Team leadership experience",
      "Excellent problem-solving skills"
    ],
    skills: ["React", "TypeScript", "Next.js", "Redux", "CSS3", "HTML5"],
    benefits: ["Health insurance", "Yearly bonus", "Flexible hours", "Remote work option"]
  },
  {
    title: "Junior Backend Developer",
    location: "Remote",
    type: "FULL_TIME",
    level: "JUNIOR",
    salary: "800-1200 JOD",
    description: "Seeking a passionate junior backend developer to join our growing team.",
    requirements: [
      "0-2 years of experience",
      "Knowledge of Node.js",
      "Basic understanding of databases",
      "Good communication skills"
    ],
    skills: ["Node.js", "Express", "MongoDB", "REST APIs", "Git"],
    benefits: ["Training program", "Health insurance", "Annual leave", "Work from home"]
  },
  {
    title: "DevOps Engineer",
    location: "Irbid, Jordan",
    type: "FULL_TIME",
    level: "MID",
    salary: "1500-2000 JOD",
    description: "Join our DevOps team to help build and maintain our cloud infrastructure.",
    requirements: [
      "3+ years of DevOps experience",
      "Strong Linux administration skills",
      "Experience with AWS or Azure",
      "CI/CD pipeline expertise"
    ],
    skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform", "Linux"],
    benefits: ["Health insurance", "Performance bonuses", "Training budget", "Flexible hours"]
  },
  {
    title: "Mobile App Developer",
    location: "Aqaba, Jordan",
    type: "FULL_TIME",
    level: "MID",
    salary: "1400-1800 JOD",
    description: "Create innovative mobile applications for iOS and Android platforms.",
    requirements: [
      "3+ years mobile development experience",
      "Experience with React Native",
      "Understanding of mobile UI/UX principles",
      "App Store deployment experience"
    ],
    skills: ["React Native", "iOS", "Android", "JavaScript", "Mobile UI/UX"],
    benefits: ["Health coverage", "Transportation", "Annual bonus", "Team activities"]
  },
  {
    title: "UI/UX Designer",
    location: "Amman, Jordan",
    type: "PART_TIME",
    level: "SENIOR",
    salary: "1200-1500 JOD",
    description: "Part-time senior designer needed to create beautiful and intuitive user interfaces.",
    requirements: [
      "5+ years of UI/UX design experience",
      "Strong portfolio",
      "Experience with design systems",
      "User research experience"
    ],
    skills: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research"],
    benefits: ["Flexible schedule", "Remote work", "Design tools subscription", "Healthcare"]
  },
  {
    title: "Data Scientist",
    location: "Remote",
    type: "CONTRACT",
    level: "SENIOR",
    salary: "Contract based",
    description: "Contract position for an experienced data scientist to work on machine learning projects.",
    requirements: [
      "Masters or PhD in related field",
      "Strong background in ML/AI",
      "Experience with big data technologies",
      "Published research is a plus"
    ],
    skills: ["Python", "TensorFlow", "PyTorch", "SQL", "Machine Learning", "Statistics"],
    benefits: ["Competitive contract rate", "Remote work", "Flexible hours", "Project bonuses"]
  },
  {
    title: "QA Engineer",
    location: "Zarqa, Jordan",
    type: "FULL_TIME",
    level: "ENTRY",
    salary: "600-800 JOD",
    description: "Entry-level QA position for someone passionate about software quality.",
    requirements: [
      "Basic understanding of software testing",
      "Knowledge of test planning",
      "Good attention to detail",
      "Strong communication skills"
    ],
    skills: ["Manual Testing", "Test Planning", "Bug Tracking", "Basic SQL"],
    benefits: ["Training opportunities", "Health insurance", "Transportation", "Annual leave"]
  },
  {
    title: "WordPress Developer",
    location: "Remote",
    type: "FREELANCE",
    level: "MID",
    salary: "Project based",
    description: "Freelance WordPress developer needed for ongoing projects.",
    requirements: [
      "3+ years WordPress development",
      "Custom theme development",
      "Plugin development experience",
      "SEO knowledge"
    ],
    skills: ["WordPress", "PHP", "JavaScript", "MySQL", "HTML/CSS"],
    benefits: ["Project-based payment", "Long-term collaboration", "Flexible schedule"]
  },
  {
    title: "Technical Support Specialist",
    location: "Amman, Jordan",
    type: "FULL_TIME",
    level: "JUNIOR",
    salary: "700-900 JOD",
    description: "Join our support team to help customers with technical issues.",
    requirements: [
      "1+ year customer service experience",
      "Basic technical knowledge",
      "Excellent communication skills",
      "Problem-solving ability"
    ],
    skills: ["Customer Service", "Troubleshooting", "Technical Support", "Communication"],
    benefits: ["Health insurance", "Transportation", "Shift allowance", "Training"]
  },
  {
    title: "AI Research Intern",
    location: "Amman, Jordan",
    type: "INTERNSHIP",
    level: "ENTRY",
    salary: "400-500 JOD",
    description: "Exciting internship opportunity in AI research and development.",
    requirements: [
      "Currently pursuing CS degree",
      "Strong interest in AI/ML",
      "Good programming skills",
      "Research mindset"
    ],
    skills: ["Python", "Machine Learning", "Deep Learning", "Research", "Mathematics"],
    benefits: ["Learning opportunities", "Mentorship", "Flexible hours", "Future employment possibility"]
  }
];

// Create a script tag to run in the browser
const script = document.createElement('script');
script.textContent = `
async function createCompanyAndJobs() {
  try {
    // First create company profile
    const companyResponse = await fetch('/api/company-profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: "TechHub Jordan",
        description: "Leading tech recruitment company in Jordan",
        website: "techhub.jo",
        location: "Amman, Jordan",
        address: "King Hussein Business Park",
        phone: "+962 6 000 0000",
        email: "jobs@techhub.jo"
      }),
    });

    if (!companyResponse.ok) {
      throw new Error('Failed to create company profile');
    }

    console.log('Company profile created successfully');

    // Then create jobs
    const jobs = ${JSON.stringify(jobs)};
    
    for (const job of jobs) {
      try {
        const response = await fetch('/api/jobs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(job),
        });
        
        if (!response.ok) {
          const error = await response.text();
          throw new Error(error);
        }
        
        console.log(\`Created job: \${job.title}\`);
      } catch (error) {
        console.error(\`Error creating job: \${job.title}\`, error);
      }
    }
  } catch (error) {
    console.error('Failed to create jobs:', error);
  }
}

createCompanyAndJobs();
`;

document.body.appendChild(script);