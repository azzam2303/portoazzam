const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const languageBtn = document.getElementById("languageBtn");

const translations = {
    id: {
        navHome: "Beranda",
        navAbout: "Tentang",
        navSkills: "Keahlian",
        navProjects: "Proyek",
        navContact: "Kontak",
        navCta: "Hubungi Saya ↗",
        menuOpen: "Buka navigasi",
        menuClose: "Tutup navigasi",
        availability: "PELAJAR & CALON WEB DEVELOPER",
        heroTitle: "Membangun",
        heroTitleAccent: "Pengalaman Digital.",
        heroDescription: "Halo, saya Azzam Fadhlan Efrizal Yusuf. Seorang pelajar yang tertarik pada teknologi, desain, dan pengembangan web.",
        heroProjects: "Lihat Karya Saya ↗",
        heroAbout: "Kenali Saya",
        structure: "Struktur",
        design: "Desain",
        interaction: "Interaksi",
        basedIn: "BERDOMISILI DI",
        creativeMindset: "POLA PIKIR KREATIF ✳",
        aboutLabel: "01 / TENTANG SAYA",
        aboutTitle: "Mengubah ide menjadi",
        aboutTitleAccent: "kenyataan digital.",
        aboutFirst: "Saya adalah pelajar SMKN 20 Jakarta yang memiliki minat besar pada teknologi dan pengembangan website.",
        aboutSecond: "Saya dapat membuat dan mendesain website menggunakan HTML, CSS, dan JavaScript. Saya senang mempelajari hal baru dan mengembangkan ide menjadi karya digital.",
        fullName: "NAMA LENGKAP",
        education: "PENDIDIKAN",
        interest: "MINAT",
        interestValue: "Pengembangan Web & Desain",
        skillsLabel: "02 / KEAHLIAN SAYA",
        skillsTitle: "Keahlian &",
        skillsTitleAccent: "Teknologi.",
        skillHtml: "Membangun halaman web yang terstruktur dan semantik.",
        skillCss: "Membuat desain modern, responsif, dan menarik.",
        skillJs: "Menambahkan interaksi dan fungsionalitas pada website.",
        projectsLabel: "03 / PROYEK PILIHAN",
        projectsTitle: "Yang Telah",
        projectsTitleAccent: "Saya Buat.",
        projectsDescription: "Kumpulan perjalanan belajar dan proyek saya.",
        projectFinanceAlt: "Tangkapan layar proyek Az Finance",
        projectVillageAlt: "Tangkapan layar Web Kelurahan Cipete Selatan",
        contactLabel: "04 / HUBUNGI SAYA",
        contactTitle: "Punya ide?",
        contactTitleSecond: "Mari kita",
        contactTitleAccent: "wujudkan.",
        contactDescription: "Silakan hubungi saya untuk berkolaborasi, bertanya, atau sekadar menyapa.",
        myProfile: "PROFIL SAYA",
        footerCredit: "Dirancang & Dibuat oleh Azzam Fadhlan © 2026",
        backToTop: "KEMBALI KE ATAS ↑"
    },
    en: {
        navHome: "Home",
        navAbout: "About",
        navSkills: "Skills",
        navProjects: "Projects",
        navContact: "Contact",
        navCta: "Let's Talk ↗",
        menuOpen: "Open navigation",
        menuClose: "Close navigation",
        availability: "STUDENT & ASPIRING WEB DEVELOPER",
        heroTitle: "Building",
        heroTitleAccent: "Digital Experiences.",
        heroDescription: "Hi, I'm Azzam Fadhlan Efrizal Yusuf. I'm a student interested in technology, design, and web development.",
        heroProjects: "Explore My Work ↗",
        heroAbout: "More About Me",
        structure: "Structure",
        design: "Design",
        interaction: "Interaction",
        basedIn: "BASED IN",
        creativeMindset: "CREATIVE MINDSET ✳",
        aboutLabel: "01 / ABOUT ME",
        aboutTitle: "Turning ideas into",
        aboutTitleAccent: "digital reality.",
        aboutFirst: "I'm a student at SMKN 20 Jakarta with a strong interest in technology and website development.",
        aboutSecond: "I can build and design websites using HTML, CSS, and JavaScript. I enjoy learning new things and turning ideas into digital work.",
        fullName: "FULL NAME",
        education: "EDUCATION",
        interest: "INTEREST",
        interestValue: "Web Development & Design",
        skillsLabel: "02 / MY EXPERTISE",
        skillsTitle: "Skills &",
        skillsTitleAccent: "Technologies.",
        skillHtml: "Building structured and semantic web pages.",
        skillCss: "Creating modern, responsive, and attractive designs.",
        skillJs: "Adding interaction and functionality to websites.",
        projectsLabel: "03 / SELECTED WORK",
        projectsTitle: "Things I've",
        projectsTitleAccent: "Built.",
        projectsDescription: "A collection of my learning journey and projects.",
        projectFinanceAlt: "Screenshot of the Az Finance project",
        projectVillageAlt: "Screenshot of the Cipete Selatan Village website",
        contactLabel: "04 / GET IN TOUCH",
        contactTitle: "Have an idea?",
        contactTitleSecond: "Let's make it",
        contactTitleAccent: "happen.",
        contactDescription: "Feel free to reach out for collaboration, questions, or just to say hello.",
        myProfile: "MY PROFILE",
        footerCredit: "Designed & Built by Azzam Fadhlan © 2026",
        backToTop: "BACK TO TOP ↑"
    }
};

let currentLanguage = "id";

function setLanguage(language) {
    currentLanguage = language;
    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;
        element.textContent = translations[language][key];
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach(element => {
        const key = element.dataset.i18nAriaLabel;
        element.setAttribute("aria-label", translations[language][key]);
    });

    languageBtn.textContent = language === "id" ? "EN" : "ID";
    languageBtn.setAttribute(
        "aria-label",
        language === "id" ? "Switch language to English" : "Ganti bahasa ke Indonesia"
    );
    menuBtn.setAttribute(
        "aria-label",
        navLinks.classList.contains("active")
            ? translations[language].menuClose
            : translations[language].menuOpen
    );
}

setLanguage(currentLanguage);

languageBtn.addEventListener("click", () => {
    setLanguage(currentLanguage === "id" ? "en" : "id");
});

// Mobile navigation
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");
    menuBtn.textContent = isOpen ? "✕" : "☰";
    menuBtn.setAttribute("aria-expanded", String(isOpen));
    menuBtn.setAttribute("aria-label", translations[currentLanguage][isOpen ? "menuClose" : "menuOpen"]);
});

// Close menu after clicking navigation
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", translations[currentLanguage].menuOpen);
    });
});

// Reveal animation when scrolling
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(
    ".section-title, .skill-card, .project-card, .about-content"
).forEach(element => {
    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "all .7s ease";
    observer.observe(element);
});