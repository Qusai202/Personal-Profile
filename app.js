document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        en: {
            name: "Qusai Harb",
            title: "Web & Mobile App Developer",
            about_me: "I am a fresh graduate in Computer Science and a passionate developer in web and mobile technologies. I enjoy building interactive and modern applications.",
            skills_heading: "Skills",
            projects_heading: "Projects",
            project1_title: "📱 Kitabi – Personal Library App",
            project1_description: "An Android app to manage your personal book collection using RecyclerView and Firebase. Allows users to add and categorize books.",
            project2_title: "🌐 Smart Pharmacy Locator",
            project2_description: "A graduation project system that transforms medical prescriptions into QR codes and allows users to search for nearby pharmacies that have the required medication in stock using barcode scanning and smart filters via JavaScript and PHP.",
        },
        ar: {
            name: "قصي حرب",
            title: "مطوّر تطبيقات الويب والهواتف المحمولة",
            about_me: "أنا خريج جديد في علوم الحاسوب ومطور شغوف بتقنيات الويب والهواتف المحمولة. أستمتع ببناء تطبيقات تفاعلية وحديثة.",
            skills_heading: "المهارات",
            projects_heading: "المشاريع",
            project1_title: "📱 كتابي – تطبيق مكتبة شخصية",
            project1_description: "تطبيق أندرويد لإدارة مجموعتك الشخصية من الكتب باستخدام RecyclerView و Firebase. يسمح للمستخدمين بإضافة الكتب وتصنيفها.",
            project2_title: "🌐 محدد الصيدليات الذكي",
            project2_description: "نظام مشروع تخرج يحول الوصفات الطبية إلى أكواد QR ويسمح للمستخدمين بالبحث عن الصيدليات القريبة التي لديها الدواء المطلوب في المخزون باستخدام مسح الباركود والفلاتر الذكية عبر JavaScript و PHP.",
        }
    };

    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

    function setTheme(theme) {
        if (theme === 'dark') {
            document.body.classList.remove('light-mode');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        } else {
            document.body.classList.add('light-mode');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
        localStorage.setItem('theme', theme);
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    });

 
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else if (prefersDarkMode.matches) {
        setTheme('dark');
    } else {
        setTheme('dark');
    }


    const fadeInElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeInElements.forEach(element => {
        observer.observe(element);
    });

});