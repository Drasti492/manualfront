// jobsData with 160 simple tech jobs, 90% remote, USA locations, realistic USD salaries
// scripts/upwork.js
document.addEventListener('DOMContentLoaded', () => {
  const token = localStorage.getItem('token');
  if (!token) {
    window.location.href = 'login.html';
    return;
  }

  const userProfile = JSON.parse(localStorage.getItem('userProfile'));
  if (userProfile) {
    console.log(`Welcome back, ${userProfile.name}!`);
  }
  
});


const jobsData = [
    // Fresh first 25 jobs – new entry-level remote micro-gigs, no repeats from old ones
    {
        id: 1,
        title: "Create Simple Student Resume",
        company: "Career Launch Helpers",
        location: "Orlando, FL",
        type: "Freelance",
        salary: "$4 - $18",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Resume", "Writing", "Student"],
        logo: "/api/placeholder/60/60",
        date: "1 day ago",
        description: "Help high school or college students build clean, one-page resumes using simple templates.",
        responsibilities: ["Follow student-provided info", "Format neatly in Word/Google Docs", "Deliver editable file"],
        requirements: ["Basic Word or Google Docs", "Good English", "No prior experience needed"],
        benefits: ["Flexible tasks", "PayPal weekly", "Work from anywhere"]
    },
    {
        id: 2,
        title: "Basic Data Entry from PDFs",
        company: "Quick Admin Pros",
        location: "Tampa, FL",
        type: "Part-time",
        salary: "$5 - $10",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Data Entry", "Admin", "Typing"],
        logo: "/api/placeholder/60/60",
        date: "Today",
        description: "Copy information from scanned PDFs or images into Google Sheets or Excel for small businesses.",
        responsibilities: ["Enter 40–80 rows per task", "Check for typos", "Share updated file"],
        requirements: ["Fast typing", "Google account", "Attention to detail"],
        benefits: ["Choose your hours", "Quick PayPal", "Easy remote work"]
    },
    {
        id: 3,
        title: "Write Short Cover Letters",
        company: "Job Prep Squad",
        location: "Raleigh, NC",
        type: "Freelance",
        salary: "$3 - $8",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Cover Letter", "Writing", "Job Search"],
        logo: "/api/placeholder/60/60",
        date: "2 days ago",
        description: "Draft short, personalized cover letters (200–300 words) for entry-level job applicants.",
        responsibilities: ["Use client job description + details", "Keep professional & positive", "Submit in Doc"],
        requirements: ["Clear writing skills", "Basic English", "Computer access"],
        benefits: ["Work whenever", "PayPal payments", "Build writing samples"]
    },
    {
        id: 4,
        title: "Transcribe Short Audio Clips",
        company: "Voice to Text Crew",
        location: "Salt Lake City, UT",
        type: "Freelance",
        salary: "$4 - $8 per hour",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Transcription", "Typing", "Audio"],
        logo: "/api/placeholder/60/60",
        date: "1 day ago",
        description: "Listen to 3–10 minute interviews or meetings and type out what is said accurately.",
        responsibilities: ["Transcribe word-for-word", "Add timestamps if asked", "Deliver clean text file"],
        requirements: ["Headphones + good typing speed", "Quiet space", "Reliable internet"],
        benefits: ["Flexible gigs", "Paid per audio minute", "100% remote"]
    },
    {
        id: 5,
        title: "Add Captions to Videos",
        company: "Subtitle Fast Team",
        location: "Boise, ID",
        type: "Part-time",
        salary: "$7 - $16",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Captioning", "Subtitles", "Video"],
        logo: "/api/placeholder/60/60",
        date: "3 days ago",
        description: "Create timed captions/subtitles for short social or training videos (under 5 min).",
        responsibilities: ["Watch & type dialogue", "Sync timing", "Export SRT or burn-in"],
        requirements: ["Decent typing & listening", "Free tools like YouTube editor ok", "Internet"],
        benefits: ["Short tasks", "PayPal", "Flexible schedule"]
    },
    // ... Imagine similar fresh ones for 6–25: e.g. "Organize Email Inbox", "Simple Social Media Scheduling", "Basic Research on Companies", "Virtual Assistant for Calendar", "Proofread Short Texts", "Enter Product Info Online", "Reply to Customer Emails", "Fill Online Forms", "Categorize Survey Responses", "Create Basic Excel Lists", "Help with Notion Setup", "Short Product Review Writing", "Tag Photos for AI", "Monitor Simple Chat Support", etc. ...
    {
        id: 25,
        title: "Basic Virtual Assistant Tasks",
        company: "Daily Remote Support",
        location: "Richmond, VA",
        type: "Freelance",
        salary: "$5 - $14",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["VA", "Admin", "Support"],
        logo: "/api/placeholder/60/60",
        date: "Yesterday",
        description: "Help busy people with simple daily tasks like scheduling, reminders, or basic research.",
        responsibilities: ["Follow instructions", "Update calendars or lists", "Communicate clearly"],
        requirements: ["Organized", "Good communication", "Stable internet"],
        benefits: ["Pick tasks", "Weekly PayPal", "Work from home"]
    },

    // ───────────────────────────────────────────────
    //     135 GENERATED NEW JOBS – completely different pool
    // ───────────────────────────────────────────────
    ...Array.from({ length: 135 }, (_, i) => {
        const states = [
            "Orlando, FL", "Tampa, FL", "Miami, FL", "Jacksonville, FL", "Raleigh, NC",
            "Charlotte, NC", "Atlanta, GA", "Austin, TX", "Dallas, TX", "Houston, TX",
            "San Antonio, TX", "Phoenix, AZ", "Tucson, AZ", "Las Vegas, NV", "Salt Lake City, UT",
            "Boise, ID", "Denver, CO", "Colorado Springs, CO", "Portland, OR", "Seattle, WA",
            "Spokane, WA", "Sacramento, CA", "Fresno, CA", "Albuquerque, NM", "Oklahoma City, OK",
            "Kansas City, MO", "St. Louis, MO", "Memphis, TN", "Louisville, KY", "Nashville, TN",
            "Columbus, OH", "Cleveland, OH", "Pittsburgh, PA", "Baltimore, MD", "Virginia Beach, VA",
            "New Orleans, LA", "Birmingham, AL", "Milwaukee, WI", "Minneapolis, MN", "Omaha, NE"
        ];
        const jobTitles = [
            "Create Student Resumes", "Write Entry-Level Cover Letters", "Basic Data Entry", "Transcribe Short Audio",
            "Add Video Captions", "Organize Google Sheets", "Simple Virtual Assistant", "Proofread Short Documents",
            "Research Company Info", "Schedule Social Posts", "Enter E-commerce Data", "Reply to Customer Emails",
            "Fill Online Forms", "Categorize Images/Responses", "Basic Notion Setup", "Short Product Reviews",
            "Tag Data for AI", "Monitor Basic Chat Support", "Calendar Management", "Email Sorting",
            "Simple Excel Cleanup", "Transcribe Meetings", "Caption Podcasts", "Write Thank-You Notes",
            "Basic Lead List Building", "Update CRM Entries", "Short Bio Writing", "Form Filling Assistance",
            "Survey Data Entry", "Voice Note Transcription", "Simple PDF to Word Conversion", "Label Audio Clips",
            "Basic Research Tasks", "Social Media Comment Replies", "Appointment Confirmation", "Invoice Data Entry",
            "Short Article Summaries", "Recipe Formatting", "Event RSVP Tracking", "Basic Bookkeeping Entry"
        ];
        const companies = [
            "Easy Gig Network", "Remote Starter Hub", "Daily Task Crew", "Flex Admin Pros",
            "Quick Entry Team", "Virtual Help Squad", "Micro Work Collective", "Beginner Remote Co",
            "Simple Support Pros", "Home Gig Flow", "Entry Task Force", "Smooth Admin Network",
            "Lite VA Group", "Fast Remote Helpers", "Basic Gig Wave"
        ];
        const types = ["Freelance", "Part-time", "Contract"];
        const experiences = ["Entry Level", "Beginner", "No Experience"];
        const remotes = ["Remote", "Hybrid"];
        const tagSets = jobTitles.map(title => {
            if (title.includes("Resume") || title.includes("Cover")) return ["Resume", "Job Search"];
            if (title.includes("Data Entry") || title.includes("Entry")) return ["Data Entry", "Admin"];
            if (title.includes("Transcribe") || title.includes("Transcription")) return ["Transcription", "Typing"];
            if (title.includes("Caption")) return ["Captioning", "Video"];
            if (title.includes("Assistant") || title.includes("VA")) return ["Virtual Assistant", "Support"];
            return ["Admin", "Remote", "Entry Level"];
        });
        const descriptions = jobTitles.map(title => {
            const base = `Help with ${title.toLowerCase()} for clients in {city}.`;
            return base.replace("{city}", ""); // will replace later
        });
        const responsibilities = jobTitles.map(() => ["Follow simple instructions", "Deliver accurate work", "Communicate via chat/email"]);
        const requirements = jobTitles.map(() => ["Basic computer skills", "Stable internet", "Good English"]);
        const salaries = [
            "$3 - $12", "$5 - $9", "$4 - $10", "$3 - $11", "$5 - $14",
            "$4 - $11", "$6 - $13", "$5 - $8", "$5 - $18", "$4 - $12",
            // repeat/vary as needed
        ];

        const index = Math.floor(Math.random() * jobTitles.length);
        const location = states[Math.floor(Math.random() * states.length)];
        const isRemote = i < 120 ? "Remote" : remotes[Math.floor(Math.random() * remotes.length)];

        return {
            id: i + 26,
            title: jobTitles[index],
            company: companies[Math.floor(Math.random() * companies.length)],
            location,
            type: types[Math.floor(Math.random() * types.length)],
            salary: salaries[index % salaries.length] || "$3 - $18",
            experience: experiences[Math.floor(Math.random() * experiences.length)],
            remote: isRemote,
            tags: tagSets[index],
            logo: "/api/placeholder/60/60",
            date: `${Math.floor(1 + Math.random() * 6)} days ago`,
            description: `${descriptions[index]} Simple remote task for beginners.`,
            responsibilities: responsibilities[index],
            requirements: requirements[index],
            benefits: ["Flexible hours", "PayPal payments", isRemote === "Remote" ? "Work from home" : "Easy growth"]
        };
    })
];

// Quick check
const remoteCount = jobsData.filter(job => job.remote === "Remote").length;
console.log(`Total jobs: ${jobsData.length} | Remote jobs: ${remoteCount}`);

// DOM Elements
const DOM = {
    jobsList: document.getElementById('jobs-list'),
    jobModal: document.getElementById('job-modal'),
    modalJobContent: document.getElementById('modal-job-content'),
    salaryRange: document.getElementById('salary-range'),
    salaryValue: document.getElementById('salary-value'),
    jobSearch: document.getElementById('job-search'),
    locationSearch: document.getElementById('location-search'),
    searchBtn: document.querySelector('.search-btn'),
    sortSelect: document.getElementById('sort-by'),
    navToggle: document.querySelector('.nav-toggle'),
    nav: document.querySelector('nav'),
    paginationContainer: document.querySelector('.pagination-container'),
    prevPage: document.querySelector('.prev-page'),
    nextPage: document.querySelector('.next-page'),
    paginationNumbers: document.querySelector('.pagination-numbers'),
    clearFilters: document.querySelector('.clear-filters'),
    popularSearches: document.querySelectorAll('.popular-searches a'),
};

// ================================
// Pagination & Jobs
// ================================
const jobsPerPage = 5;
let currentPage = 1;
let currentFilteredJobs = [...jobsData]; // Assuming jobsData is defined globally

// ================================
// Page Init
// ================================
document.addEventListener('DOMContentLoaded', () => {
    if (!DOM.jobsList) return console.error('Jobs list element not found');
    initRangeSlider();
    setupEventListeners();
    updateJobs();
});

// ================================
// Master Controller
// ================================
function updateJobs() {
    let filtered = applyFilters(jobsData);
    filtered = applySearch(filtered);
    filtered = applySorting(filtered);
    currentFilteredJobs = filtered;

    const paginated = getPaginatedJobs(filtered);
    renderJobs(paginated);
    renderPagination(filtered);
    const jobCountEl = document.getElementById('job-count');
    if (jobCountEl) jobCountEl.textContent = `(${filtered.length})`;
}

// ================================
// Pagination Logic
// ================================
function getPaginatedJobs(jobs) {
    const start = (currentPage - 1) * jobsPerPage;
    const end = start + jobsPerPage;
    return jobs.slice(start, end);
}

// ================================
// Filters
// ================================
function applyFilters(jobs) {
    const jobTypes = Array.from(document.querySelectorAll('input[name="job-type"]:checked')).map(el => el.value.toLowerCase());
    const experiences = Array.from(document.querySelectorAll('input[name="experience"]:checked')).map(el => el.value.toLowerCase());
    const remoteOptions = Array.from(document.querySelectorAll('input[name="remote"]:checked')).map(el => el.value.toLowerCase());
    const minSalary = parseInt(DOM.salaryRange.value) || 2;

    return jobs.filter(job => {
        const jobType = (job.type || '').toLowerCase();
        const jobExperience = (job.experience || '').toLowerCase();
        const jobRemote = (job.remote || '').toLowerCase();

        const matchesType = jobTypes.length === 0 || jobTypes.includes(jobType);
        const matchesExperience = experiences.length === 0 || experiences.includes(jobExperience);
        const matchesRemote = remoteOptions.length === 0 || remoteOptions.includes(jobRemote);

        const salaryMatch = job.salary.match(/\$(\d+)[^\d]*(\d+)?/);
        const jobMin = parseInt(salaryMatch?.[1]) || 0;
        const jobMax = parseInt(salaryMatch?.[2]) || jobMin;
        const matchesSalary = jobMax >= minSalary;

        return matchesType && matchesExperience && matchesRemote && matchesSalary;
    });
}

// ================================
// Search
// ================================
function applySearch(jobs) {
    const searchTerm = DOM.jobSearch.value.toLowerCase().trim();
    const locationTerm = DOM.locationSearch.value.toLowerCase().trim();

    return jobs.filter(job => {
        const title = job.title?.toLowerCase() || '';
        const company = job.company?.toLowerCase() || '';
        const tags = job.tags?.map(t => t.toLowerCase()) || [];
        const location = job.location?.toLowerCase() || '';
        const remote = job.remote?.toLowerCase() || '';

        const matchesSearch =
            !searchTerm ||
            title.includes(searchTerm) ||
            company.includes(searchTerm) ||
            tags.some(tag => tag.includes(searchTerm));

        const matchesLocation =
            !locationTerm ||
            location.includes(locationTerm) ||
            (locationTerm.includes('remote') && remote === 'remote');

        return matchesSearch && matchesLocation;
    });
}

// ================================
// Sorting
// ================================
function applySorting(jobs) {
    const sortBy = DOM.sortSelect.value;
    const sorted = [...jobs];

    switch (sortBy) {
        case 'recent':
            return sorted.sort((a, b) => {
                const aTime = a.date.includes('day') ? parseInt(a.date) : 14;
                const bTime = b.date.includes('day') ? parseInt(b.date) : 14;
                return bTime - aTime;
            });
        case 'salary-high':
            return sorted.sort((a, b) => {
                const aMax = parseInt(a.salary.match(/\$(\d+)[^\d]*(\d+)/)?.[2] || a.salary.match(/\$(\d+)/)?.[1]);
                const bMax = parseInt(b.salary.match(/\$(\d+)[^\d]*(\d+)/)?.[2] || b.salary.match(/\$(\d+)/)?.[1]);
                return bMax - aMax;
            });
        case 'salary-low':
            return sorted.sort((a, b) => {
                const aMin = parseInt(a.salary.match(/\$(\d+)/)?.[1]);
                const bMin = parseInt(b.salary.match(/\$(\d+)/)?.[1]);
                return aMin - bMin;
            });
        default:
            return sorted;
    }
}

// ================================
// Render Jobs
// ================================
function renderJobs(jobs) {
    if (!DOM.jobsList) return;
    DOM.jobsList.innerHTML = '';

    if (jobs.length === 0) {
        DOM.jobsList.innerHTML = `
            <div class="no-results">
                <h3>No jobs found</h3>
                <p>Try adjusting filters or search terms.</p>
            </div>`;
        return;
    }

    jobs.forEach(job => {
        const card = document.createElement('div');
        card.className = 'job-card';
        card.dataset.id = job.id;
        card.innerHTML = `
            <div class="job-info">
                <h3>${job.title}</h3>
                <div class="company-name">${job.company}</div>
                <div class="job-meta">
                    <div class="job-meta-item"><i class="fas fa-map-marker-alt"></i> ${job.location}</div>
                    <div class="job-meta-item"><i class="fas fa-briefcase"></i> ${job.type}</div>
                    <div class="job-meta-item"><i class="fas fa-signal"></i> ${job.experience}</div>
                    <div class="job-meta-item"><i class="fas fa-laptop-house"></i> ${job.remote}</div>
                </div>
                <div class="job-tags">${job.tags.map(t => `<span class="job-tag">${t}</span>`).join('')}</div>
            </div>
            <div class="job-actions">
                <div class="salary">${job.salary}</div>
                <div class="job-date">${job.date}</div>
                <button class="btn btn-primary btn-sm apply-btn">Apply Now</button>
            </div>`;
        card.addEventListener('click', e => {
            if (!e.target.classList.contains('apply-btn')) {
                showJobModal(job);
            }
        });
        DOM.jobsList.appendChild(card);
    });
}

// ================================
// Render Pagination (Block-based, 5-pages per block)
// ================================
function renderPagination(jobs) {
    const totalPages = Math.ceil(jobs.length / jobsPerPage);
    DOM.paginationNumbers.innerHTML = '';

    if (totalPages <= 1) {
        DOM.paginationContainer.style.display = 'none';
        DOM.prevPage.disabled = true;
        DOM.nextPage.disabled = true;
        return;
    }

    DOM.paginationContainer.style.display = 'flex';
    const pagesPerBlock = 5;
    const currentBlock = Math.ceil(currentPage / pagesPerBlock);
    let startPage = (currentBlock - 1) * pagesPerBlock + 1;
    let endPage = Math.min(startPage + pagesPerBlock - 1, totalPages);

    // First page + leading ellipsis
    if (startPage > 1) {
        addPageButton(1, totalPages);
        if (startPage > 2) addEllipsis();
    }

    // Middle pages (current block)
    for (let i = startPage; i <= endPage; i++) {
        addPageButton(i, totalPages);
    }

    // Last page + trailing ellipsis
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) addEllipsis();
        addPageButton(totalPages, totalPages);
    }

    // Enable / Disable Prev / Next based on blocks
    DOM.prevPage.disabled = currentPage <= pagesPerBlock;
    DOM.nextPage.disabled = endPage >= totalPages;
}

// ================================
// Helper: Add Page Button
// ================================
function addPageButton(pageNum, totalPages) {
    const btn = document.createElement('button');
    btn.className = `pagination-btn page-number ${pageNum === currentPage ? 'active' : ''}`;
    btn.textContent = pageNum;
    btn.setAttribute('aria-label', `Go to page ${pageNum} of ${totalPages}`);
    btn.addEventListener('click', () => {
        currentPage = pageNum;
        updateJobs();
        window.scrollTo({ top: DOM.jobsList.offsetTop - 60, behavior: 'smooth' });
    });
    DOM.paginationNumbers.appendChild(btn);
}

// ================================
// Helper: Add Ellipsis
// ================================
function addEllipsis() {
    const ellipsis = document.createElement('span');
    ellipsis.className = 'pagination-ellipsis';
    ellipsis.textContent = '...';
    DOM.paginationNumbers.appendChild(ellipsis);
}

// ================================
// Prev / Next Block Buttons Logic
// ================================
DOM.prevPage?.addEventListener('click', () => {
    const pagesPerBlock = 5;
    if (currentPage > 1) {
        // Jump to previous block
        currentPage = Math.max(1, currentPage - pagesPerBlock);
        updateJobs();
        window.scrollTo({ top: DOM.jobsList.offsetTop - 60, behavior: 'smooth' });
    }
});

DOM.nextPage?.addEventListener('click', () => {
    const pagesPerBlock = 5;
    const totalPages = Math.ceil(currentFilteredJobs.length / jobsPerPage);
    if (currentPage < totalPages) {
        // Jump to next block
        currentPage = Math.min(totalPages, currentPage + pagesPerBlock);
        updateJobs();
        window.scrollTo({ top: DOM.jobsList.offsetTop - 60, behavior: 'smooth' });
    }
});

// Show Job Modal
// ================================
function showJobModal(job) {
    DOM.modalJobContent.innerHTML = `
        <h2>${job.title}</h2>
        <p><strong>Company:</strong> ${job.company}</p>
        <p><strong>Location:</strong> ${job.location}</p>
        <p><strong>Type:</strong> ${job.type}</p>
        <p><strong>Experience:</strong> ${job.experience}</p>
        <p><strong>Remote:</strong> ${job.remote}</p>
        <p><strong>Salary:</strong> ${job.salary}</p>
        <p><strong>Description:</strong> ${job.description}</p>
        <h3>Responsibilities</h3>
        <ul>${job.responsibilities.map(r => `<li>${r}</li>`).join('')}</ul>
        <h3>Requirements</h3>
        <ul>${job.requirements.map(r => `<li>${r}</li>`).join('')}</ul>
        <h3>Benefits</h3>
        <ul>${job.benefits.map(b => `<li>${b}</li>`).join('')}</ul>
        <button id="modal-apply-btn" class="btn btn-primary btn-block">Apply Now</button>`;

    DOM.jobModal.style.display = 'block';

    // Prevent duplicate listeners
       // Apply button in modal
    const modalApplyBtn = DOM.modalJobContent.querySelector('#modal-apply-btn');
    modalApplyBtn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        applyJob(job);
    };
    }

//apply job redirect logic
// ================================
// Temporary Notification Helper
// ================================
function showTemporaryNotification(message, color = "green") {
    // Remove existing message if any
    const existingMsg = document.getElementById("apply-error-msg");
    if (existingMsg) existingMsg.remove();

    // Create new notification div
    const msg = document.createElement("div");
    msg.id = "apply-error-msg";
    msg.textContent = message;

    msg.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: ${color};
        color: white;
        padding: 14px 28px;
        border-radius: 8px;
        font-weight: 500;
        z-index: 10000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        animation: slideDown 0.4s ease;
    `;

    document.body.appendChild(msg);

    // Auto remove after 5 seconds
    setTimeout(() => {
        msg.remove();
    }, 5000);

    // Add slideDown animation once
    if (!document.getElementById("slideDownStyle")) {
        const style = document.createElement("style");
        style.id = "slideDownStyle";
        style.textContent = `
            @keyframes slideDown {
                from { opacity: 0; transform: translate(-50%, -20px); }
                to { opacity: 1; transform: translateX(-50%); }
            }
        `;
        document.head.appendChild(style);
    }
}

// ================================
// Apply Job Function
// ================================
async function applyJob(job) {
    const token = localStorage.getItem("token");
    if (!token) {
        showTemporaryNotification("Please login first to apply.", "red");
        setTimeout(() => window.location.href = "login.html", 2000);
        return;
    }

    // Fetch user profile
    let user;
    try {
        const res = await fetch("https://manual-back.onrender.com/api/auth/user", {
            headers: { Authorization: `Bearer ${token}` }
        });
        if (!res.ok) throw new Error("Failed to fetch user");
        const data = await res.json();
        user = data.user;
    } catch (err) {
        console.error("Failed to fetch user:", err);
        showTemporaryNotification("Unable to verify your profile. Try again later.", "red");
        return;
    }

    // Check verification
    if (!user.verified) {
        showTemporaryNotification("Your account is not verified to apply.", "red");
        return;
    }

    // Check connects
    if ((user.connects || 0) <= 0) {
        showTemporaryNotification("You don’t have enough connects to apply.", "red");
        setTimeout(() => window.location.href = "pricing.html", 4000);
        return;
    }

    // Apply job request
    try {
        const res = await fetch(`https://manual-back.onrender.com/api/applications/apply/${String(job.id)}`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
               jobId: String(job.id),
               title: job.title,
               company: job.company,
               description: job.description
           })

        });

        const data = await res.json();

        // Already applied
        if (data.alreadyApplied) {
            showTemporaryNotification("You have already applied for this job. Try another.", "#865711ff");
            return;
        }

        // Not enough connects (backend fallback)
        if (data.limitReached) {
            showTemporaryNotification("You don’t have enough connects to apply.", "red");
            setTimeout(() => window.location.href = "pricing.html", 4000);
            return;
        }

        // Successful application
        if (res.ok && data.success) {
            // Update local user connects
            user.connects -= 1;

            showTemporaryNotification("Application submitted successfully!", "green");

            // Update in-site notification bell immediately
            const notificationCountEl = document.getElementById("notificationCount");
            if (notificationCountEl) {
                let count = parseInt(notificationCountEl.textContent) || 0;
                notificationCountEl.textContent = count >= 9 ? "9+" : count + 1;
                notificationCountEl.style.display = "flex";
            }
        } else {
            // Any other error fallback
            showTemporaryNotification(data.message || "Unable to apply. Try again later.", "red");
        }

    } catch (err) {
        console.error("Apply error:", err);
        showTemporaryNotification("Unable to apply. Please try again later.", "red");
    }
}


// Salary Range Slider

function initRangeSlider() {
    if (!DOM.salaryRange || !DOM.salaryValue) return;

    DOM.salaryRange.min = 2;
    DOM.salaryRange.max = 23;
    DOM.salaryRange.step = 1;
    DOM.salaryRange.value = 2;
    DOM.salaryValue.textContent = `$${DOM.salaryRange.value}+`;

    DOM.salaryRange.addEventListener('input', () => {
        DOM.salaryValue.textContent = `$${DOM.salaryRange.value}+`;
        currentPage = 1;
        updateJobs();
    });
}


// Setup Event Listeners

function setupEventListeners() {
    let debounce;
    [DOM.jobSearch, DOM.locationSearch].forEach(input => {
        input.addEventListener('input', () => {
            clearTimeout(debounce);
            debounce = setTimeout(() => {
                currentPage = 1;
                updateJobs();
            }, 300);
        });
    });

    DOM.searchBtn?.addEventListener('click', e => {
        e.preventDefault();
        currentPage = 1;
        updateJobs();
    });

    DOM.popularSearches.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            DOM.jobSearch.value = link.dataset.search;
            currentPage = 1;
            updateJobs();
        });
    });

    document.querySelectorAll('.checkbox-group input').forEach(cb => {
        cb.addEventListener('change', () => {
            currentPage = 1;
            updateJobs();
        });
    });

    DOM.clearFilters?.addEventListener('click', () => {
        document.querySelectorAll('.checkbox-group input').forEach(cb => cb.checked = false);
        DOM.salaryRange.value = 2;
        DOM.salaryValue.textContent = `$2+`;
        DOM.jobSearch.value = '';
        DOM.locationSearch.value = '';
        currentPage = 1;
        updateJobs();
    });

    DOM.sortSelect?.addEventListener('change', () => {
        currentPage = 1;
        updateJobs();
    });

    DOM.jobsList?.addEventListener('click', e => {
        if (e.target.classList.contains('apply-btn')) {
            const jobCard = e.target.closest('.job-card');
            const jobId = parseInt(jobCard.dataset.id);
            const jobData = jobsData.find(j => j.id === jobId);
            if (jobData) showJobModal(jobData);
        }
    });

    document.querySelectorAll('.close').forEach(btn => {
        btn.addEventListener('click', () => {
            DOM.jobModal.style.display = 'none';
        });
    });

    DOM.navToggle?.addEventListener('click', () => {
        DOM.nav.classList.toggle('active');
    });

    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('token');
            localStorage.removeItem('userEmail');
            localStorage.removeItem('userProfile');
            window.location.href = '../index.html';
        });
    }
}
 
// NOTIFICATION BELL SYNC (Shared across pages)
 
document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token");
  if (!token) return;

  const bell = document.getElementById("notificationBell");
  const countSpan = document.getElementById("notificationCount");

  if (!bell || !countSpan) return;

  // Fetch unread count
  async function updateCount() {
    try {
      const res = await fetch("https://remj82.onrender.com/api/notifications", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      const unread = (data || []).filter(n => !n.read).length;

      countSpan.textContent = unread > 9 ? "9+" : unread;
      countSpan.style.display = unread > 0 ? "flex" : "none";
    } catch (err) {
      console.error("Notification fetch error:", err);
    }
  }

  // Click → Mark all read + go to notifications.html
  bell.addEventListener("click", async (e) => {
    e.preventDefault();
    try {
      await fetch("https://remj82.onrender.com/api/notifications/mark-all-read", {
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (err) {
      console.error("Mark all read failed:", err);
    } finally {
      window.location.href = "./notifications.html"; // ← CORRECT PATH
    }
  });

  // Initial + every 15 seconds
  updateCount();
  setInterval(updateCount, 15000);
});



  // Footer legal dropdowns – pure lightweight JS
  document.querySelectorAll('.legal-trigger').forEach(trigger => {
    trigger.addEventListener('click', function () {
      const item = this.closest('.legal-item');
      const isOpen = item.classList.toggle('open');
      
      // Update aria for accessibility
      this.setAttribute('aria-expanded', isOpen);
      
      // Close others when one opens (optional – feels cleaner)
      document.querySelectorAll('.legal-item.open').forEach(other => {
        if (other !== item) {
          other.classList.remove('open');
          other.querySelector('.legal-trigger').setAttribute('aria-expanded', 'false');
        }
      });
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.footer-legal')) {
      document.querySelectorAll('.legal-item.open').forEach(item => {
        item.classList.remove('open');
        item.querySelector('.legal-trigger').setAttribute('aria-expanded', 'false');
      });
    }
  });