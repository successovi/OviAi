// ============================================
// OviAi - Complete JavaScript with Scroll Hide/Show Search
// ============================================

// AI Data Arrays - Fixed logo URLs
const aiData = {
    conversational: [
        { name: "ChatGPT", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg", desc: "OpenAI's revolutionary conversational AI for text generation, chat, coding assistance, and creative writing. Features GPT-4 architecture for human-like interactions.", link: "https://chat.openai.com" },
        { name: "Gemini", logo: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg", desc: "Google's advanced multimodal AI capable of understanding text, images, audio, and video. Built on the Pathways architecture for comprehensive reasoning.", link: "https://gemini.google.com" },
        { name: "Claude", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Anthropic_Claude_logo.png", desc: "Anthropic's AI assistant focused on safety and helpfulness. Excels at analysis, writing, coding, and thoughtful conversations with extended context.", link: "https://www.anthropic.com/claude" },
        { name: "Grok", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Grok_logo.png/600px-Grok_logo.png", desc: "xAI's conversational AI with real-time knowledge via X integration. Features witty personality and willingness to tackle spicy questions.", link: "https://grok.x.ai" },
        { name: "Perplexity", logo: "https://upload.wikimedia.org/wikipedia/commons/8/85/Perplexity.ai_logo.png", desc: "AI-powered answer engine providing accurate, cited responses. Combines large language models with web search for real-time information.", link: "https://www.perplexity.ai" },
        { name: "Kimi", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Kimi_AI_logo.png", desc: "Moonshot AI's long-context conversational model supporting up to 2 million tokens. Optimized for document analysis and extended discussions.", link: "https://kimi.moonshot.cn" }
    ],
    image: [
        { name: "MidJourney", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/MidJourney_Logo.png", desc: "Leading AI image generation platform creating stunning artistic visuals from text descriptions. Known for dreamy, detailed aesthetic quality.", link: "https://www.midjourney.com" },
        { name: "DALL·E 3", logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/DALL-E_logo.png", desc: "OpenAI's advanced image generation model with exceptional prompt adherence and text rendering capabilities. Integrated with ChatGPT.", link: "https://openai.com/dall-e-3" },
        { name: "Leonardo AI", logo: "https://cdn.leonardo.ai/users/default-user-avatar.jpg", desc: "Professional AI art platform specializing in game assets, concept art, and photorealistic images. Features fine-tuned models and advanced editing.", link: "https://www.leonardo.ai" },
        { name: "Playground AI", logo: "https://playgroundai.com/favicon.ico", desc: "Free-to-use image generation platform with mixed image editing. Allows combining real and synthetic images for creative compositions.", link: "https://playgroundai.com" },
        { name: "Stable Diffusion", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Stable_Diffusion_logo.png/600px-Stable_Diffusion_logo.png", desc: "Open-source image generation model enabling local deployment and customization. Foundation for numerous AI art applications.", link: "https://stability.ai" },
        { name: "Adobe Firefly", logo: "https://www.adobe.com/favicon.ico", desc: "Adobe's ethical AI image generator trained on licensed content. Integrated with Creative Cloud for seamless design workflows.", link: "https://www.adobe.com/sensei/generative-ai/firefly.html" },
        { name: "Freepik", logo: "https://www.freepik.com/favicon.ico", desc: "Popular design resource platform with AI image generation tools. Offers AI-powered image creation, editing, and a vast library of stock photos, vectors, and templates for creative projects.", link: "https://www.freepik.com/ai" },
        { name: "Genspark AI", logo: "https://www.genspark.ai/favicon.ico", desc: "Advanced AI image generation platform with multiple specialized models. Features high-quality text-to-image generation, style transfer, and creative tools for professional designers and artists.", link: "https://www.genspark.ai" },
        { name: "Pixverse AI", logo: "https://pixverse.ai/favicon.ico", desc: "Innovative AI platform for image and video generation. Offers powerful text-to-image capabilities with stunning visual quality, style customization, and user-friendly interface for creators.", link: "https://pixverse.ai" }
    ],
    video: [
        { name: "Runway", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Runway_logo.png", desc: "Professional AI video editing and generation platform. Features Gen-2 for text-to-video and advanced motion brush controls.", link: "https://runwayml.com" },
        { name: "Pika Labs", logo: "https://pikalabs.com/favicon.ico", desc: "AI video generation platform specializing in cinematic quality. Offers text-to-video and image-to-video with impressive motion coherence.", link: "https://pikalabs.com" },
        { name: "Synthesia", logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/Synthesia_logo.png", desc: "Leading AI avatar video generation platform. Create professional videos with realistic AI presenters in 120+ languages.", link: "https://www.synthesia.io" },
        { name: "Kaiber", logo: "https://kaiber.ai/favicon.ico", desc: "AI-powered video generation for artists and musicians. Transform images and audio into stunning animated visuals.", link: "https://www.kaiber.ai" },
        { name: "Veo 3", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_Veo_logo.png", desc: "Google's advanced video generation model producing high-quality 1080p footage. Features improved physics and prompt understanding.", link: "https://deepmind.google/technologies/veo/veo-3/" },
        { name: "HeyGen", logo: "https://heygen.com/favicon.ico", desc: "AI video platform for creating talking avatar videos. Features voice cloning, translation, and customizable AI presenters.", link: "https://www.heygen.com" }
    ],
    voice: [
        { name: "ElevenLabs", logo: "https://elevenlabs.io/favicon.ico", desc: "Industry-leading text-to-speech platform with ultra-realistic voice cloning. Supports 29 languages with emotional range control.", link: "https://elevenlabs.io" },
        { name: "Murf AI", logo: "https://murf.ai/favicon.ico", desc: "Professional AI voice generator for presentations, videos, and e-learning. Features studio-quality voices with pitch and speed control.", link: "https://murf.ai" },
        { name: "Play.ht", logo: "https://play.ht/favicon.ico", desc: "AI voice generation platform with 900+ voices. Specializes in podcast creation, audiobooks, and conversational AI voices.", link: "https://play.ht" },
        { name: "Lovo AI", logo: "https://lovo.ai/favicon.ico", desc: "AI voiceover platform with emotional voice styles. Features voice cloning and extensive customization for content creators.", link: "https://lovo.ai" },
        { name: "Descript Overdub", logo: "https://www.descript.com/favicon.ico", desc: "Create ultra-realistic text-to-speech clones of your own voice. Edit audio by editing text with seamless overdubbing.", link: "https://www.descript.com/overdub" },
        { name: "Resemble AI", logo: "https://www.resemble.ai/favicon.ico", desc: "Real-time voice cloning and generation API. Create unique AI voices or clone existing ones with granular emotional control.", link: "https://www.resemble.ai" }
    ],
    coding: [
        { name: "GitHub Copilot", logo: "https://github.githubassets.com/favicons/favicon.svg", desc: "AI pair programmer powered by OpenAI Codex. Provides context-aware code suggestions, completions, and entire function generation.", link: "https://github.com/features/copilot" },
        { name: "Codeium", logo: "https://codeium.com/favicon.ico", desc: "Free AI coding assistant with autocomplete, chat, and explanation features. Supports 70+ languages and 40+ IDEs.", link: "https://codeium.com" },
        { name: "Replit AI", logo: "https://replit.com/favicon.ico", desc: "Integrated AI coding assistant within Replit's cloud IDE. Features code generation, explanation, and debugging capabilities.", link: "https://replit.com" },
        { name: "Cursor", logo: "https://cursor.sh/favicon.ico", desc: "AI-first code editor built on VS Code. Features codebase-wide understanding and natural language code editing.", link: "https://cursor.sh" },
        { name: "Amazon CodeWhisperer", logo: "https://aws.amazon.com/favicon.ico", desc: "AWS's AI coding companion with security scanning. Trained on Amazon's codebase for cloud-optimized suggestions.", link: "https://aws.amazon.com/codewhisperer" },
        { name: "Tabnine", logo: "https://www.tabnine.com/favicon.ico", desc: "AI code completion tool with privacy-focused options. Supports team learning for consistent code patterns.", link: "https://www.tabnine.com" }
    ],
    hosting: [
        { name: "Vercel", logo: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png", desc: "Premier platform for frontend frameworks and static sites. Features instant deployments, serverless functions, and edge network.", link: "https://vercel.com" },
        { name: "Netlify", logo: "https://www.netlify.com/favicon/icon.svg", desc: "All-in-one platform for modern web projects. Offers continuous deployment, serverless functions, and form handling.", link: "https://www.netlify.com" },
        { name: "Railway", logo: "https://railway.app/favicon.ico", desc: "Developer-friendly cloud platform for deploying apps and databases. Simplifies infrastructure management with automatic scaling.", link: "https://railway.app" },
        { name: "Render", logo: "https://render.com/favicon.ico", desc: "Unified cloud platform for hosting full-stack applications. Supports web services, static sites, databases, and background workers.", link: "https://render.com" },
        { name: "Supabase", logo: "https://supabase.com/favicon.ico", desc: "Open-source Firebase alternative with PostgreSQL. Features authentication, instant APIs, and real-time subscriptions.", link: "https://supabase.com" },
        { name: "PlanetScale", logo: "https://planetscale.com/favicon.ico", desc: "Serverless MySQL database platform with Vitess scaling. Features branching schema changes and deploy requests.", link: "https://planetscale.com" }
    ]
};

// Global variables
let selectedForComparison = [];
let currentCategory = 'all';
let lastScrollY = 0;
let scrollThreshold = 100;
let isSearchVisible = true;

// ============================================
// Initialization
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initIntroVideo();
    initSidebar();
    initThemeToggle();
    initCards();
    initCategoryMenu();
    initSearch();
    initComparison();
    initScrollReveal();
    initScrollProgress();
    initScrollSearchHide(); // NEW: Initialize scroll hide/show
    initFireflies();
    initModal();
    initFAQ();
});

// ============================================
// NEW: Scroll Hide/Show Search Functionality
// ============================================
function initScrollSearchHide() {
    const searchWrapper = document.getElementById('searchWrapper');
    if (!searchWrapper) return;

    // Set initial state
    searchWrapper.classList.add('visible');
    isSearchVisible = true;

    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    function handleScroll() {
        const currentScrollY = window.scrollY;
        const searchWrapper = document.getElementById('searchWrapper');

        if (!searchWrapper) return;

        // At the very top - always show
        if (currentScrollY <= 10) {
            if (!isSearchVisible) {
                showSearch();
            }
            lastScrollY = currentScrollY;
            return;
        }

        // Scrolling down and past threshold - hide
        if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
            if (isSearchVisible) {
                hideSearch();
            }
        }
        // Scrolling up - show
        else if (currentScrollY < lastScrollY) {
            if (!isSearchVisible) {
                showSearch();
            }
        }

        lastScrollY = currentScrollY;
    }

    function hideSearch() {
        searchWrapper.classList.remove('visible', 'animating-in');
        searchWrapper.classList.add('animating-out');

        // After animation completes, keep it hidden
        setTimeout(() => {
            searchWrapper.classList.remove('animating-out');
            searchWrapper.classList.add('hidden');
        }, 400);

        isSearchVisible = false;
    }

    function showSearch() {
        searchWrapper.classList.remove('hidden', 'animating-out');
        searchWrapper.classList.add('animating-in');

        // Clean up animation class after completion
        setTimeout(() => {
            searchWrapper.classList.remove('animating-in');
            searchWrapper.classList.add('visible');
        }, 500);

        isSearchVisible = true;
    }
}

// ============================================
// Intro Video Handler - Show only once
// ============================================
function initIntroVideo() {
    const introOverlay = document.getElementById('introOverlay');
    const introVideo = document.getElementById('introVideo');
    const skipBtn = document.getElementById('skipIntro');
    const mainHeader = document.getElementById('mainHeader');
    const searchContainer = document.getElementById('searchContainer');

    if (!introOverlay) return;

    // Check if user has already seen intro
    const hasSeenIntro = localStorage.getItem('oviai-intro-seen');

    if (hasSeenIntro) {
        // Skip intro completely
        introOverlay.style.display = 'none';
        mainHeader?.classList.add('hidden');
        searchContainer?.classList.add('sticky-visible');
        return;
    }

    // Skip button handler
    skipBtn?.addEventListener('click', () => {
        endIntro();
    });

    // Video ended handler
    introVideo?.addEventListener('ended', () => {
        endIntro();
    });

    // Auto skip after 7 seconds
    setTimeout(() => {
        if (introOverlay && !introOverlay.classList.contains('hidden')) {
            endIntro();
        }
    }, 7000);

    function endIntro() {
        introOverlay.classList.add('hidden');
        localStorage.setItem('oviai-intro-seen', 'true');

        // Hide header after 3 seconds but keep search sticky
        setTimeout(() => {
            if (mainHeader) {
                mainHeader.classList.add('hidden');
                const searchWrapper = document.getElementById('searchWrapper');
                searchWrapper?.classList.add('sticky');
            }
        }, 3000);
    }
}

// ============================================
// Sidebar Navigation
// ============================================
function initSidebar() {
    const hamburger = document.getElementById('hamburgerMenu');
    const sidebar = document.getElementById('sidebar');

    if (!hamburger || !sidebar) return;

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        sidebar.classList.toggle('active');
    });

    // Close sidebar when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !sidebar.contains(e.target)) {
            hamburger.classList.remove('active');
            sidebar.classList.remove('active');
        }
    });
}

// ============================================
// Theme Toggle with smooth background transition
// ============================================
function initThemeToggle() {
    const toggles = [
        document.getElementById('sidebarToggleMode')
    ];

    // Check for saved theme
    const savedTheme = localStorage.getItem('oviai-theme');
    if (savedTheme) {
        document.body.classList.remove('dark', 'light');
        document.body.classList.add(savedTheme);
        toggles.forEach(toggle => {
            if (toggle) toggle.checked = savedTheme === 'light';
        });
    }

    toggles.forEach(toggle => {
        if (!toggle) return;

        toggle.addEventListener('change', (e) => {
            const isLight = e.target.checked;

            // Add transition class for smooth background change
            document.body.classList.add('theme-transitioning');

            setTimeout(() => {
                document.body.classList.remove('dark', 'light');
                document.body.classList.add(isLight ? 'light' : 'dark');
                localStorage.setItem('oviai-theme', isLight ? 'light' : 'dark');

                // Remove transition class after change
                setTimeout(() => {
                    document.body.classList.remove('theme-transitioning');
                }, 800);
            }, 50);

            // Sync other toggles
            toggles.forEach(t => {
                if (t && t !== e.target) t.checked = isLight;
            });

            // Toggle fireflies
            toggleFireflies(!isLight);
        });
    });
}

// ============================================
// Card Generation with fallback logos
// ============================================
function initCards() {
    // Create all cards container
    const allContainer = document.getElementById('allContainer');
    if (allContainer) {
        const allAI = [];
        Object.values(aiData).forEach(category => {
            allAI.push(...category);
        });
        createCards(allAI, 'allContainer');
    }

    // Create category containers
    Object.keys(aiData).forEach(category => {
        createCards(aiData[category], `${category}Container`);
    });
}

function createCards(data, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    data.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'card reveal';
        card.style.animationDelay = `${index * 0.1}s`;

        // Create initials for fallback
        const initials = item.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

        card.innerHTML = `
            <div class="logo-container">
                <img src="${item.logo}" alt="${item.name}" 
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="logo-fallback" style="display:none;">${initials}</div>
            </div>
            <h3>${item.name}</h3>
            <p>${item.desc.substring(0, 80)}...</p>
        `;

        // 3D hover effect
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left - rect.width / 2) / 20;
            const y = (e.clientY - rect.top - rect.height / 2) / 20;
            card.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg) scale(1.03)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateY(0) rotateX(0)';
        });

        // Modal popup
        card.addEventListener('click', () => openModal(item));

        container.appendChild(card);
    });
}

// ============================================
// Category Menu
// ============================================
function initCategoryMenu() {
    const buttons = document.querySelectorAll('.ai-category');
    const containers = document.querySelectorAll('.card-container');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.target;

            // Update active button
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Show/hide containers
            containers.forEach(c => {
                c.classList.remove('active', 'show-all');
                c.style.display = 'none';
            });

            if (target === 'all') {
                const allContainer = document.getElementById('allContainer');
                if (allContainer) {
                    allContainer.classList.add('show-all');
                    allContainer.style.display = 'grid';
                }
            } else {
                const targetContainer = document.getElementById(`${target}Container`);
                if (targetContainer) {
                    targetContainer.classList.add('active');
                    targetContainer.style.display = 'grid';
                }
            }

            currentCategory = target;

            // Trigger reveal animation
            setTimeout(() => {
                document.querySelectorAll('.card').forEach((card, i) => {
                    setTimeout(() => card.classList.add('active'), i * 50);
                });
            }, 100);
        });
    });

    // Show all by default
    const allBtn = document.querySelector('[data-target="all"]');
    if (allBtn) allBtn.click();
}

// ============================================
// Search Functionality
// ============================================
function initSearch() {
    const searchInput = document.getElementById('search');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('.card');

        cards.forEach(card => {
            const name = card.querySelector('h3').textContent.toLowerCase();
            const desc = card.querySelector('p').textContent.toLowerCase();

            if (name.includes(query) || desc.includes(query)) {
                card.style.display = 'block';
                card.style.opacity = '1';
            } else {
                card.style.display = 'none';
                card.style.opacity = '0';
            }
        });
    });
}

// ============================================
// AI Comparison System
// ============================================
function initComparison() {
    const compareBtn = document.getElementById('compareBtn');
    const comparisonPanel = document.getElementById('comparisonPanel');
    const closeCompare = document.getElementById('closeCompare');
    const startCompare = document.getElementById('startCompare');
    const compareSearch = document.getElementById('compareSearch');
    const comparisonList = document.getElementById('comparisonList');

    if (!compareBtn) return;

    compareBtn.addEventListener('click', () => {
        comparisonPanel.classList.add('active');
        populateComparisonList();
    });

    closeCompare?.addEventListener('click', () => {
        comparisonPanel.classList.remove('active');
    });

    startCompare?.addEventListener('click', () => {
        if (selectedForComparison.length < 2) {
            alert('Please select at least 2 AI tools to compare');
            return;
        }
        showComparisonResult();
    });

    compareSearch?.addEventListener('input', (e) => {
        populateComparisonList(e.target.value.toLowerCase());
    });

    // Close on backdrop click
    comparisonPanel?.addEventListener('click', (e) => {
        if (e.target === comparisonPanel) {
            comparisonPanel.classList.remove('active');
        }
    });
}

function populateComparisonList(filter = '') {
    const comparisonList = document.getElementById('comparisonList');
    if (!comparisonList) return;

    comparisonList.innerHTML = '';

    const allAI = [];
    Object.entries(aiData).forEach(([category, items]) => {
        items.forEach(item => {
            allAI.push({ ...item, category });
        });
    });

    const filtered = allAI.filter(item => 
        item.name.toLowerCase().includes(filter)
    );

    filtered.forEach(item => {
        const div = document.createElement('div');
        div.className = 'compare-item';
        if (selectedForComparison.find(s => s.name === item.name)) {
            div.classList.add('selected');
        }

        div.innerHTML = `
            <strong>${item.name}</strong>
            <small style="display:block;opacity:0.7;margin-top:4px;">${item.category}</small>
        `;

        div.addEventListener('click', () => {
            const index = selectedForComparison.findIndex(s => s.name === item.name);
            if (index > -1) {
                selectedForComparison.splice(index, 1);
                div.classList.remove('selected');
            } else {
                if (selectedForComparison.length >= 4) {
                    alert('You can compare up to 4 AI tools at once');
                    return;
                }
                selectedForComparison.push(item);
                div.classList.add('selected');
            }
        });

        comparisonList.appendChild(div);
    });
}

function showComparisonResult() {
    const modal = document.getElementById('modal');
    const modalContent = document.querySelector('.modal-body');

    if (!modal || !modalContent) return;

    let html = '<h2>AI Comparison</h2><div style="display:grid;gap:20px;margin-top:20px;">';

    selectedForComparison.forEach(ai => {
        html += `
            <div style="background:rgba(0,242,255,0.1);padding:20px;border-radius:15px;border:1px solid rgba(0,242,255,0.2);">
                <h3 style="color:var(--primary);margin-bottom:10px;">${ai.name}</h3>
                <p style="margin-bottom:10px;">${ai.desc}</p>
                <a href="${ai.link}" target="_blank" class="modal-link">Visit Website</a>
            </div>
        `;
    });

    html += '</div>';
    modalContent.innerHTML = html;

    modal.classList.add('active');

    // Reset selection
    selectedForComparison = [];
    document.getElementById('comparisonPanel')?.classList.remove('active');
}

// ============================================
// Modal System
// ============================================
function openModal(item) {
    const modal = document.getElementById('modal');
    const modalContent = document.querySelector('.modal-body');

    if (!modal || !modalContent) return;

    const initials = item.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

    modalContent.innerHTML = `
        <h2>${item.name}</h2>
        <div class="modal-logo-container">
            <img src="${item.logo}" alt="${item.name}" 
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="modal-logo-fallback" style="display:none;">${initials}</div>
        </div>
        <p>${item.desc}</p>
        <div class="modal-links">
            <a href="${item.link}" target="_blank" class="modal-link">Visit Official Website →</a>
        </div>
    `;

    modal.classList.add('active');
}

function initModal() {
    const modal = document.getElementById('modal');
    const modalClose = document.getElementById('modalClose');

    modalClose?.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modal?.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modal?.classList.remove('active');
            document.getElementById('comparisonPanel')?.classList.remove('active');
        }
    });
}

// ============================================
// Scroll Reveal Animation
// ============================================
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });
}

// ============================================
// Scroll Progress Bar
// ============================================
function initScrollProgress() {
    window.addEventListener('scroll', () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;

        const progressBar = document.getElementById('progressBar');
        if (progressBar) {
            progressBar.style.width = scrolled + '%';
        }
    });
}

// ============================================
// Fireflies Animation
// ============================================
function initFireflies() {
    const container = document.getElementById('firefliesContainer');
    if (!container) return;

    // Only show in dark mode
    if (document.body.classList.contains('light')) return;

    createFireflies(container);
}

function createFireflies(container) {
    container.innerHTML = '';
    const fireflyCount = 25;

    for (let i = 0; i < fireflyCount; i++) {
        const firefly = document.createElement('div');
        firefly.className = 'firefly';

        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const moveX = (Math.random() - 0.5) * 200;
        const moveY = (Math.random() - 0.5) * 200;
        const duration = 15 + Math.random() * 20;
        const delay = Math.random() * 15;

        firefly.style.left = `${startX}%`;
        firefly.style.top = `${startY}%`;
        firefly.style.setProperty('--moveX', `${moveX}px`);
        firefly.style.setProperty('--moveY', `${moveY}px`);
        firefly.style.animationDuration = `${duration}s`;
        firefly.style.animationDelay = `${delay}s`;

        container.appendChild(firefly);
    }
}

function toggleFireflies(show) {
    const container = document.getElementById('firefliesContainer');
    if (!container) return;

    if (show) {
        createFireflies(container);
    } else {
        container.innerHTML = '';
    }
}

// ============================================
// FAQ Accordion
// ============================================
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question?.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all others
            faqItems.forEach(i => i.classList.remove('active'));

            // Toggle current
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// ============================================
// Utility Functions
// ============================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle window resize
window.addEventListener('resize', debounce(() => {
    // Reinitialize any size-dependent features if needed
}, 250));

// Reset intro (for testing) - call resetIntro() in console
function resetIntro() {
    localStorage.removeItem('oviai-intro-seen');
    location.reload();
}
