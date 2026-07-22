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
    // Fresh first 25 jobs – new entry-level remote micro-gigs
    {
        id: 1,
        title: "Organize Digital Photo Albums",
        company: "Tidy Cloud Helpers",
        location: "Austin, TX",
        type: "Freelance",
        salary: "$4 - $12",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Organization", "Admin", "Photos"],
        logo: "/api/placeholder/60/60",
        date: "Today",
        description: "Sort and rename batches of personal or business photos into labeled folders using Google Drive or Dropbox.",
        responsibilities: ["Sort photos by date/category", "Rename files consistently", "Share organized folder link"],
        requirements: ["Google Drive or Dropbox account", "Attention to detail", "No experience needed"],
        benefits: ["Simple repeatable tasks", "Weekly PayPal", "Fully remote"]
    },
    {
        id: 2,
        title: "Type Up Handwritten Notes",
        company: "ClearText Admin",
        location: "Denver, CO",
        type: "Part-time",
        salary: "$5 - $11",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Typing", "Data Entry", "Admin"],
        logo: "/api/placeholder/60/60",
        date: "1 day ago",
        description: "Convert photographed handwritten notes or forms into clean typed documents.",
        responsibilities: ["Read handwriting carefully", "Type into Word or Docs", "Flag unclear sections"],
        requirements: ["Good eyesight for handwriting", "Basic typing skills", "Word or Google Docs"],
        benefits: ["Choose your hours", "Fast PayPal payout", "Beginner friendly"]
    },
    {
        id: 3,
        title: "Write Simple Product Descriptions",
        company: "ShopCopy Starters",
        location: "Charlotte, NC",
        type: "Freelance",
        salary: "$3 - $9",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Writing", "E-commerce", "Copywriting"],
        logo: "/api/placeholder/60/60",
        date: "2 days ago",
        description: "Write short 2–3 sentence product descriptions for small online shops based on provided details.",
        responsibilities: ["Read product specs", "Write clear, friendly copy", "Submit in shared doc"],
        requirements: ["Basic English writing", "Follow simple style guide", "Computer access"],
        benefits: ["Work anytime", "PayPal payments", "Great for building a portfolio"]
    },
    {
        id: 4,
        title: "Listen and Log Voicemail Summaries",
        company: "CallNote Team",
        location: "Nashville, TN",
        type: "Freelance",
        salary: "$4 - $9 per hour",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Transcription", "Listening", "Admin"],
        logo: "/api/placeholder/60/60",
        date: "1 day ago",
        description: "Listen to short voicemail clips and write a one-line summary of each message for a small business inbox.",
        responsibilities: ["Listen to short clips", "Summarize in one sentence", "Log into shared sheet"],
        requirements: ["Headphones", "Basic listening comprehension", "Reliable internet"],
        benefits: ["Short flexible tasks", "Paid per batch", "100% remote"]
    },
    {
        id: 5,
        title: "Add Simple Captions to Reels",
        company: "CaptionEasy Studio",
        location: "Phoenix, AZ",
        type: "Part-time",
        salary: "$6 - $14",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Captioning", "Social Media", "Video"],
        logo: "/api/placeholder/60/60",
        date: "3 days ago",
        description: "Add on-screen text captions to short social media reels (under 2 minutes) using free editing tools.",
        responsibilities: ["Watch short clip", "Add readable captions", "Export finished file"],
        requirements: ["Free app like CapCut is fine", "Basic attention to timing", "Internet access"],
        benefits: ["Short tasks", "PayPal", "Flexible schedule"]
    },
    {
        id: 6,
        title: "Sort and Reply to Simple Inbox Emails",
        company: "InboxZero Helpers",
        location: "Columbus, OH",
        type: "Freelance",
        salary: "$5 - $13",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Email", "Admin", "Support"],
        logo: "/api/placeholder/60/60",
        date: "Today",
        description: "Sort a small business inbox into folders and send short templated replies to common questions.",
        responsibilities: ["Sort by category", "Send templated replies", "Flag urgent emails"],
        requirements: ["Comfortable with Gmail/Outlook", "Polite writing tone", "No experience needed"],
        benefits: ["Flexible tasks", "Weekly PayPal", "Remote friendly"]
    },
    {
        id: 7,
        title: "Build a Simple Contact List",
        company: "LeadStart Basics",
        location: "Kansas City, MO",
        type: "Freelance",
        salary: "$4 - $10",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Research", "Lead Generation", "Data Entry"],
        logo: "/api/placeholder/60/60",
        date: "2 days ago",
        description: "Search Google for small business contact info and add it to a spreadsheet in a set format.",
        responsibilities: ["Search for business info", "Add to spreadsheet", "Double-check accuracy"],
        requirements: ["Google Sheets or Excel", "Basic internet research skills", "Patience for repetitive work"],
        benefits: ["Pick your own pace", "PayPal payments", "Work from home"]
    },
    {
        id: 8,
        title: "Proofread Short Blog Drafts",
        company: "CleanCopy Editors",
        location: "Minneapolis, MN",
        type: "Freelance",
        salary: "$5 - $15",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Proofreading", "Writing", "Editing"],
        logo: "/api/placeholder/60/60",
        date: "1 day ago",
        description: "Read short 400–600 word blog drafts and fix basic spelling and grammar mistakes.",
        responsibilities: ["Read draft carefully", "Correct spelling/grammar", "Return edited version"],
        requirements: ["Strong grasp of English grammar", "Attention to detail", "Word or Google Docs"],
        benefits: ["Flexible workload", "PayPal", "Good for beginner editors"]
    },
    {
        id: 9,
        title: "Update Simple Spreadsheet Records",
        company: "SheetKeepers Co",
        location: "Milwaukee, WI",
        type: "Part-time",
        salary: "$4 - $11",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Data Entry", "Spreadsheets", "Admin"],
        logo: "/api/placeholder/60/60",
        date: "4 days ago",
        description: "Update rows in an existing Google Sheet with new information provided by the client.",
        responsibilities: ["Enter new data accurately", "Keep formatting consistent", "Notify client when done"],
        requirements: ["Comfortable with Google Sheets", "Careful and accurate typing", "No experience needed"],
        benefits: ["Simple recurring tasks", "PayPal weekly", "Fully remote"]
    },
    {
        id: 10,
        title: "Schedule Simple Appointments",
        company: "BookIt Assist",
        location: "Louisville, KY",
        type: "Freelance",
        salary: "$5 - $12",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Scheduling", "Admin", "Virtual Assistant"],
        logo: "/api/placeholder/60/60",
        date: "Today",
        description: "Use a calendar tool to book and confirm appointments for a small local service business.",
        responsibilities: ["Check calendar availability", "Confirm with clients", "Send reminder messages"],
        requirements: ["Comfortable with Calendly or Google Calendar", "Clear communication", "Internet access"],
        benefits: ["Flexible hours", "PayPal", "Work from anywhere"]
    },
    {
        id: 11,
        title: "Write Short Thank-You Messages",
        company: "KindWords Co",
        location: "Memphis, TN",
        type: "Freelance",
        salary: "$3 - $8",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Writing", "Customer Service"],
        logo: "/api/placeholder/60/60",
        date: "3 days ago",
        description: "Write short, warm thank-you notes for small businesses to send to customers after a purchase.",
        responsibilities: ["Follow simple tone guide", "Personalize each note", "Submit batch by deadline"],
        requirements: ["Friendly writing style", "Basic English", "Computer access"],
        benefits: ["Easy repeatable work", "PayPal", "Fully remote"]
    },
    {
        id: 12,
        title: "Test Simple Website Links",
        company: "LinkCheck Crew",
        location: "Oklahoma City, OK",
        type: "Freelance",
        salary: "$4 - $10",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["QA", "Website Testing", "Admin"],
        logo: "/api/placeholder/60/60",
        date: "2 days ago",
        description: "Click through a website's pages and links, noting any that are broken or slow to load.",
        responsibilities: ["Click through all pages", "Log broken/slow links", "Report findings in a sheet"],
        requirements: ["Basic browser use", "Patience for repetitive clicking", "No experience needed"],
        benefits: ["Short simple tasks", "PayPal", "Remote work"]
    },
    {
        id: 13,
        title: "Create Simple Instagram Captions",
        company: "PostReady Social",
        location: "New Orleans, LA",
        type: "Freelance",
        salary: "$4 - $10",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Social Media", "Writing", "Marketing"],
        logo: "/api/placeholder/60/60",
        date: "1 day ago",
        description: "Write short, catchy captions for Instagram posts based on a photo and short brief.",
        responsibilities: ["Review photo + brief", "Write 1–2 sentence caption", "Add relevant hashtags"],
        requirements: ["Basic social media familiarity", "Casual writing style", "Internet access"],
        benefits: ["Fun creative work", "PayPal", "Flexible schedule"]
    },
    {
        id: 14,
        title: "Compare Prices Across Websites",
        company: "PriceCheck Helpers",
        location: "Baltimore, MD",
        type: "Freelance",
        salary: "$4 - $9",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Research", "Data Entry", "Admin"],
        logo: "/api/placeholder/60/60",
        date: "Today",
        description: "Search a list of products across a few websites and record the prices in a spreadsheet.",
        responsibilities: ["Search each product", "Record prices accurately", "Note item availability"],
        requirements: ["Basic internet research", "Google Sheets", "Attention to detail"],
        benefits: ["Simple flexible task", "PayPal", "Work anytime"]
    },
    {
        id: 15,
        title: "Format Resumes into Clean Templates",
        company: "ResumeFix Team",
        location: "Virginia Beach, VA",
        type: "Freelance",
        salary: "$5 - $14",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Resume", "Formatting", "Writing"],
        logo: "/api/placeholder/60/60",
        date: "2 days ago",
        description: "Take a client's messy resume text and reformat it neatly into a provided clean template.",
        responsibilities: ["Copy content into template", "Fix formatting/spacing", "Deliver as PDF or Doc"],
        requirements: ["Word or Google Docs", "Eye for clean layout", "No experience needed"],
        benefits: ["Flexible tasks", "PayPal weekly", "Remote work"]
    },
    {
        id: 16,
        title: "Log Customer Feedback into a Sheet",
        company: "FeedbackTrack Co",
        location: "Pittsburgh, PA",
        type: "Part-time",
        salary: "$4 - $10",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Data Entry", "Customer Service", "Admin"],
        logo: "/api/placeholder/60/60",
        date: "3 days ago",
        description: "Read short customer reviews and log the rating and key comments into a spreadsheet.",
        responsibilities: ["Read reviews", "Summarize key points", "Enter into shared sheet"],
        requirements: ["Basic reading comprehension", "Google Sheets", "Attention to detail"],
        benefits: ["Easy repeatable work", "PayPal", "Fully remote"]
    },
    {
        id: 17,
        title: "Set Up a Basic Notion Page",
        company: "NotionStart Helpers",
        location: "Cleveland, OH",
        type: "Freelance",
        salary: "$6 - $16",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Notion", "Organization", "Admin"],
        logo: "/api/placeholder/60/60",
        date: "1 day ago",
        description: "Set up a simple Notion workspace for a client using a template they provide or a basic layout.",
        responsibilities: ["Follow client's layout request", "Add sample content", "Share finished page link"],
        requirements: ["Free Notion account", "Basic comfort with new tools", "No experience needed"],
        benefits: ["Creative simple task", "PayPal", "Flexible hours"]
    },
    {
        id: 18,
        title: "Write Short Product Review Drafts",
        company: "ReviewWrite Co",
        location: "Sacramento, CA",
        type: "Freelance",
        salary: "$3 - $9",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Writing", "Reviews", "E-commerce"],
        logo: "/api/placeholder/60/60",
        date: "2 days ago",
        description: "Write short, honest-sounding product review drafts (60–100 words) based on product info given.",
        responsibilities: ["Read product details", "Write short review", "Submit in shared doc"],
        requirements: ["Basic English writing", "Follow simple guidelines", "Computer access"],
        benefits: ["Quick simple tasks", "PayPal", "Remote work"]
    },
    {
        id: 19,
        title: "Tag Images for a Small Dataset",
        company: "TagWork Labs",
        location: "Fresno, CA",
        type: "Freelance",
        salary: "$4 - $11",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Data Tagging", "AI", "Admin"],
        logo: "/api/placeholder/60/60",
        date: "Today",
        description: "Look at a batch of images and label what's in them using a simple provided list of tags.",
        responsibilities: ["Review each image", "Apply correct tags", "Submit completed batch"],
        requirements: ["Good attention to detail", "Basic computer skills", "No experience needed"],
        benefits: ["Simple repeatable work", "PayPal", "Fully remote"]
    },
    {
        id: 20,
        title: "Confirm Event RSVPs by Email",
        company: "RSVP Helpers",
        location: "Albuquerque, NM",
        type: "Freelance",
        salary: "$4 - $10",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Admin", "Email", "Events"],
        logo: "/api/placeholder/60/60",
        date: "3 days ago",
        description: "Send simple templated emails to confirm guest attendance for a small event and track responses.",
        responsibilities: ["Send templated emails", "Track replies in sheet", "Follow up on no-response guests"],
        requirements: ["Comfortable with email", "Basic organization skills", "Internet access"],
        benefits: ["Short-term flexible task", "PayPal", "Remote friendly"]
    },
    {
        id: 21,
        title: "Simplify Long Articles into Summaries",
        company: "QuickRead Team",
        location: "Boise, ID",
        type: "Freelance",
        salary: "$5 - $13",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Writing", "Summarizing", "Research"],
        logo: "/api/placeholder/60/60",
        date: "1 day ago",
        description: "Read short articles and write a 3–4 sentence summary highlighting the main points.",
        responsibilities: ["Read source article", "Write concise summary", "Submit via shared doc"],
        requirements: ["Good reading comprehension", "Basic English writing", "No experience needed"],
        benefits: ["Flexible pace", "PayPal", "Work from home"]
    },
    {
        id: 22,
        title: "Enter Invoice Details into a Tracker",
        company: "InvoiceEasy Admin",
        location: "Omaha, NE",
        type: "Part-time",
        salary: "$4 - $10",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Data Entry", "Bookkeeping", "Admin"],
        logo: "/api/placeholder/60/60",
        date: "2 days ago",
        description: "Copy details from simple invoices (amount, date, client) into a spreadsheet tracker.",
        responsibilities: ["Read invoice details", "Enter into tracker sheet", "Flag any missing info"],
        requirements: ["Google Sheets or Excel", "Careful attention to numbers", "No experience needed"],
        benefits: ["Simple recurring work", "PayPal", "Fully remote"]
    },
    {
        id: 23,
        title: "Format Recipes for a Food Blog",
        company: "RecipeReady Co",
        location: "Tucson, AZ",
        type: "Freelance",
        salary: "$4 - $12",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Writing", "Formatting", "Content"],
        logo: "/api/placeholder/60/60",
        date: "Today",
        description: "Take raw recipe text and format it neatly into a blog-ready structure with clear steps.",
        responsibilities: ["Organize ingredients list", "Number the steps clearly", "Check for missing details"],
        requirements: ["Basic writing skills", "Word or Google Docs", "No experience needed"],
        benefits: ["Fun simple task", "PayPal", "Flexible schedule"]
    },
    {
        id: 24,
        title: "Reply to Simple Live Chat Questions",
        company: "ChatSupport Lite",
        location: "Spokane, WA",
        type: "Part-time",
        salary: "$6 - $15",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Customer Service", "Chat Support", "Admin"],
        logo: "/api/placeholder/60/60",
        date: "1 day ago",
        description: "Answer basic customer questions in a live chat widget using a provided FAQ script.",
        responsibilities: ["Respond using FAQ script", "Escalate complex questions", "Stay friendly and prompt"],
        requirements: ["Good written English", "Comfortable multitasking", "Reliable internet"],
        benefits: ["Flexible shifts", "PayPal weekly", "Fully remote"]
    },
    {
        id: 25,
        title: "General Beginner Virtual Assistant Tasks",
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
    //     135 GENERATED NEW JOBS – refreshed pool
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
            "Organize Cloud Photo Folders", "Type Handwritten Notes", "Write Simple Product Blurbs",
            "Summarize Short Voicemails", "Add Basic Captions to Clips", "Sort a Small Inbox",
            "Build a Basic Contact List", "Proofread Short Drafts", "Update Spreadsheet Rows",
            "Schedule Client Appointments", "Write Short Thank-You Notes", "Test Website Links",
            "Write Simple Social Captions", "Compare Product Prices", "Reformat a Resume",
            "Log Customer Feedback", "Set Up a Basic Notion Page", "Draft Short Product Reviews",
            "Tag a Batch of Images", "Confirm Event RSVPs", "Summarize a Short Article",
            "Enter Invoice Details", "Format a Simple Recipe", "Answer Basic Chat Questions",
            "General Beginner VA Tasks", "Clean Up a Contact Spreadsheet", "Draft Short Email Replies",
            "Research Basic Company Info", "Fill Out Simple Online Forms", "Sort Survey Responses",
            "Transcribe a Short Voice Memo", "Convert a PDF to Word", "Label Short Audio Clips",
            "Reply to Social Media Comments", "Track RSVPs in a Spreadsheet", "Enter Basic Bookkeeping Data",
            "Write a Short Bio", "Build a Simple Task Checklist", "Update a Basic Price List",
            "Format Bullet Points into Paragraphs"
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
            if (title.includes("Resume") || title.includes("Bio")) return ["Resume", "Writing"];
            if (title.includes("Entry") || title.includes("Spreadsheet") || title.includes("List") || title.includes("Data")) return ["Data Entry", "Admin"];
            if (title.includes("Transcribe") || title.includes("Voice") || title.includes("Audio") || title.includes("Voicemail")) return ["Transcription", "Typing"];
            if (title.includes("Caption") || title.includes("Clip")) return ["Captioning", "Video"];
            if (title.includes("VA") || title.includes("Task")) return ["Virtual Assistant", "Support"];
            if (title.includes("Chat") || title.includes("Comment") || title.includes("Email") || title.includes("Feedback")) return ["Customer Service", "Support"];
            return ["Admin", "Remote", "Entry Level"];
        });
        const descriptions = jobTitles.map(title => `Help a small US-based business with a simple task: ${title.toLowerCase()}.`);
        const responsibilities = jobTitles.map(() => ["Follow simple instructions", "Deliver accurate work on time", "Communicate updates via chat/email"]);
        const requirements = jobTitles.map(() => ["Basic computer skills", "Stable internet connection", "Good written English"]);
        const salaries = [
            "$3 - $12", "$5 - $9", "$4 - $10", "$3 - $11", "$5 - $14",
            "$4 - $11", "$6 - $13", "$5 - $8", "$5 - $18", "$4 - $12"
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
        showTemporaryNotification("You don't have enough connects to apply.", "red");
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
            showTemporaryNotification("You don't have enough connects to apply.", "red");
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
