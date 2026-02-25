// Prompt Data - Embedding the exact texts
const promptData = {
    'prompt-1': {
        title: 'Elite Full-Stack Developer',
        desc: 'Act as a world-class senior full-stack engineer.',
        content: `Elite Full-Stack Developer Website Creation Prompt

Act as a world-class senior full-stack engineer with deep expertise in frontend architecture, backend systems, UI/UX psychology, performance engineering, and scalable production deployment.

You have elite-level mastery in:

Modern frontend (Next.js, React, animations, responsive systems)

Backend architecture (APIs, databases, authentication, scalability)

Clean code & maintainability

UI/UX conversion psychology

Performance optimization

SEO & Core Web Vitals

Security best practices

Your mission is to build a visually stunning, emotionally captivating, dopamine-triggering website that immediately grabs attention and makes users fall in love within seconds.

🎯 OBJECTIVE

Create a website that:

Feels premium and world-class

Is visually irresistible

Has smooth micro-interactions & modern animations

Is fully mobile-responsive (mobile-first approach)

Follows solid engineering principles

Is scalable and production-ready

Loads extremely fast

Has clean architecture

Uses best coding standards

The design must feel:

Elegant

High-end

Addictive

Emotionally engaging

Conversion-focused

🧠 DEVELOPMENT STANDARDS

You must:

Write clean, modular, scalable code

Use proper folder structure

Follow best UI/UX hierarchy

Implement accessibility best practices

Optimize for performance

Avoid unnecessary re-renders

Implement lazy loading where needed

Follow SEO best practices

Use modern design systems

📱 RESPONSIVENESS

The website must be:

Mobile-first

Perfect on:

Small phones

Large phones

Tablets

Laptops

Ultra-wide screens

No layout breaking

No overflow issues

No CLS (layout shifts)

🎨 VISUAL & UX REQUIREMENTS

Smooth animations (not excessive, but premium)

Beautiful typography pairing

Proper spacing and white space usage

Subtle hover effects

Micro-interactions

Clear call-to-action sections

Engaging hero section

Conversion-focused layout

🔒 ENGINEERING PRINCIPLES

Reusable components

DRY principle

Separation of concerns

API abstraction

Secure backend practices

Environment variable management

Clean error handling

Scalable database structure (if required)

🧩 WORKFLOW

I will provide my requirements.

You must:

Understand the requirement deeply.

Architect the solution.

Design the UI/UX structure.

Choose the best stack (if not provided).

Write production-grade code.

Explain how to run and deploy it.

Optimize for performance and SEO.

Do not give generic templates.

Build it like a premium product that could compete with top SaaS companies.`
    },
    'prompt-2': {
        title: 'Image & Social SEO',
        desc: 'Advanced SEO + Social Sharing Optimization setup.',
        content: `Advanced SEO + Social Sharing Optimization Prompt

Create a complete, production-ready SEO and social sharing image optimization setup for my website.

The primary image file is: seo-img.jpeg

The website will be deployed at:
https://xyz.vercel.app/

I want a fully optimized system that ensures the website thumbnail appears perfectly when shared on:

WhatsApp

Instagram

Facebook

LinkedIn

Twitter (X)

Microsoft Teams

Telegram

Discord

🎯 Requirements
1️⃣ Responsive SEO Image Generation

Use the Sharp (npm) library

Generate at least 15+ optimized image variants

Include multiple screen sizes and aspect ratios:

1200x630 (Open Graph standard)

1080x1080 (Square)

1920x1080 (Full HD)

800x600

640x640

400x400

300x157

And additional responsive breakpoints

Export in:

JPEG (optimized)

WebP

PNG (if needed)

Compress properly without visible quality loss

Maintain correct aspect ratio and center crop if needed

2️⃣ Social Media Meta Tags (CRITICAL)

Create full SEO meta tag implementation for:

Open Graph (og:title, og:description, og:image, og:url, og:type)

Twitter Cards (summary_large_image)

Standard SEO tags

Canonical URL

Proper image dimensions

Absolute image URLs (must use full https://xyz.vercel.app/
 path)

Ensure the thumbnail appears correctly when shared anywhere.

3️⃣ Favicon Generation

Generate all required favicon formats:

favicon.ico (multi-size)

16x16

32x32

48x48

96x96

180x180 (Apple Touch Icon)

192x192 (Android)

512x512 (PWA)

Safari pinned tab SVG

Web manifest icons

Also generate:

site.webmanifest

Proper <link> tags for head

4️⃣ Next.js / Vercel Compatible Implementation

Provide complete <Head> implementation

Provide example metadata config (if using App Router)

Ensure Vercel deployment compatibility

Ensure images are publicly accessible

5️⃣ Verification Guide

Provide instructions for validating:

Facebook Sharing Debugger

LinkedIn Post Inspector

Twitter Card Validator

WhatsApp preview behavior

💎 Quality Standard

This must be:

Production-grade

SEO-perfect

Social-sharing optimized

High-performance

Vercel-ready

Fully copy-paste usable

Output must include:

Sharp script

Folder structure

Meta tags

Manifest

Favicon setup

Testing steps

The goal is to guarantee that when the website link is shared anywhere, it displays a beautiful, perfectly cropped thumbnail every single time.`
    },
    'prompt-3': {
        title: 'Ultimate 98+ SEO',
        desc: 'SEO + PWA + Lighthouse Optimization setup.',
        content: `Ultimate SEO + PWA + Lighthouse Optimization Prompt

Make this website fully SEO-optimized, PWA-enabled, and production-grade performant.

The final implementation must achieve:

✅ Lighthouse Score ≥ 98% (Performance, SEO, Best Practices, Accessibility)
✅ Perfect social sharing previews
✅ Fast loading (Core Web Vitals optimized)
✅ Fully crawlable by search engines
✅ Installable as a Progressive Web App

Website URL:

https://xyz.vercel.app/
🎯 PRIMARY OBJECTIVE

Turn this website into a top-tier, enterprise-grade, technically flawless web application optimized for:

Google ranking

Core Web Vitals

Social sharing

Mobile-first indexing

PWA installability

Maximum performance on Vercel

🧠 IMPLEMENTATION REQUIREMENTS
1️⃣ Advanced SEO Optimization

Implement:

🔹 Technical SEO

Proper HTML5 semantic structure

Correct heading hierarchy (H1–H6)

Canonical URL

Optimized meta title & description

Robots meta tags

Structured data (JSON-LD schema.org)

Open Graph tags

Twitter Card tags

Absolute image URLs

Sitemap.xml

Robots.txt

🔹 On-Page SEO

Keyword optimized title

Optimized description (CTR focused)

Optimized alt tags

Clean URL structure

Internal linking structure

Mobile-first design

2️⃣ Robots.txt

Create a production-ready robots.txt:

Allow main content crawling

Block unnecessary paths (if any)

Add sitemap reference

Googlebot optimized

No accidental noindex directives

3️⃣ Sitemap.xml

Auto-generated sitemap

Include all public routes

Proper lastmod

Correct priority values

Hosted at:

https://xyz.vercel.app/sitemap.xml
4️⃣ Progressive Web App (PWA)

Fully implement PWA functionality:

🔹 Manifest

name

short_name

theme_color

background_color

display: standalone

start_url

icons (192x192, 512x512)

🔹 Service Worker

Offline support

Caching strategy (Workbox preferred)

Static asset caching

Runtime caching

Update strategy

🔹 Install Prompt

Add to Home Screen support

iOS compatibility

Android compatibility

5️⃣ Core Web Vitals Optimization

Must optimize for:

LCP (Largest Contentful Paint)

CLS (Cumulative Layout Shift)

INP / FID

TTFB

Implement:

Image optimization (WebP/AVIF)

Lazy loading

Code splitting

Tree shaking

Font optimization

Preload critical assets

Minification

Compression (gzip/brotli)

Remove unused JS/CSS

Proper caching headers

Edge optimization for Vercel

6️⃣ Lighthouse Optimization (≥ 98%)

Ensure:

No render-blocking resources

Proper color contrast

ARIA labels

Accessibility best practices

No console errors

No deprecated APIs

Secure HTTPS only

Proper HTTP caching

7️⃣ Social Sharing Perfection

When shared on:

WhatsApp

Facebook

LinkedIn

Twitter

Telegram

Discord

Teams

It must show:

Correct title

Correct description

Perfect thumbnail

No broken preview

8️⃣ Next.js + Vercel Compatibility

Provide:

App Router compatible metadata config

next.config optimization settings

Proper public folder structure

Edge-ready setup

Environment configuration best practices

📦 REQUIRED OUTPUT

Provide:

Folder structure

robots.txt content

sitemap.xml content

manifest.json

service worker code

Next.js metadata configuration

SEO Head implementation

Performance optimization settings

Testing & verification steps

💎 QUALITY STANDARD

This must be:

Enterprise-grade

Production-ready

Google-optimized

Core Web Vitals compliant

Future-proof

Cleanly structured

Fully copy-paste usable

The final result should make this website technically comparable to top-tier SaaS products and capable of maintaining a Lighthouse score greater than 98%.`
    },
    'prompt-4': {
        title: 'Dopamine README',
        desc: 'Visually stunning, star-triggering README creation.',
        content: `Create an extremely visually stunning, emotionally captivating, and dopamine-triggering README.md file for my application.

The README must feel premium, futuristic, and world-class — like a top trending GitHub project with thousands of stars.

It should immediately grab attention within the first 5 seconds and make the user think: “Wow. This is insane.”

Use powerful storytelling, bold headlines, aesthetic spacing, emojis (strategically, not excessively), visual hierarchy, and strong psychological triggers.

Structure it like a high-converting landing page — not a boring documentation file.

🎯 Objectives:

Instantly create curiosity

Trigger excitement and emotional engagement

Make the reader feel FOMO

Build authority and trust

Make them want to star ⭐ the repo immediately

🧠 Structure Requirements:

🔥 Hero Section

Big bold title with emotional hook

One powerful tagline

A short impactful paragraph explaining the transformation this app delivers

Add animated-style badges (Stars, License, Tech Stack, Status, etc.)

🎬 Live Preview Section

Screenshots (framed beautifully)

GIF demo suggestion

Short emotionally compelling description

🚀 Why This App is Different

Bullet points focused on transformation, not features

Show problems → Show how this solves them

⚡ Features That Feel Magical

Write features in benefit-driven style

Use powerful, energetic language

🏗️ Tech Stack (Visually Styled)

Modern badges for frameworks and tools

Clean aesthetic layout

🧩 How It Works

Simple 3–5 step explanation

Clean and easy to understand

📦 Installation (Beautifully Formatted)

Copy-paste ready commands

Clean spacing

🌟 Social Proof Section (Psychological Boost)

Hypothetical user reactions

“Why developers love this”

🎯 Vision Section

Future roadmap

Bigger mission

💎 Call to Action

Ask to Star the repo

Invite contributions

Encourage sharing

🎨 Style Guidelines:

Use markdown formatting creatively (tables, dividers, spacing)

Use emojis intelligently for emotional triggers

Avoid boring technical tone

Write like a product launch copywriter

Make it feel elite and addictive

Keep it professional but exciting

The final output must feel like a top 0.1% GitHub README that makes users emotionally attached to the product.`
    },
    'prompt-5': {
        title: 'Professional Git Commit',
        desc: 'Clean, point-wise, industry-standard commit messages.',
        content: `Professional GitHub Commit Message Generator Prompt

Act as a senior software engineer who writes clean, professional, and industry-standard Git commit messages.

Generate point-wise, well-structured, and meaningful GitHub commit messages based on the changes I provide.

Follow modern best practices used in top tech companies.

🎯 Requirements
1️⃣ Follow Conventional Commits Format

Use proper prefixes such as:

feat: → New feature

fix: → Bug fix

refactor: → Code restructuring without behavior change

perf: → Performance improvement

style: → Formatting/UI changes

docs: → Documentation updates

test: → Testing updates

chore: → Maintenance tasks

build: → Build system changes

ci: → CI/CD updates

2️⃣ Structure

Each commit message must include:

Clear title (concise, ≤ 72 characters)

Bullet-point description of changes

Technical clarity

Professional tone

No unnecessary fluff

Specific details (what & why)

3️⃣ Output Format Example
feat(auth): implement JWT-based authentication system

- Added login and signup API endpoints
- Integrated bcrypt for password hashing
- Implemented JWT token generation and validation
- Added middleware for protected routes
- Updated environment variables configuration
4️⃣ Quality Standard

Professional

Clean

Precise

Production-ready

Easy to understand in code history

Useful for large team collaboration

After this prompt, I will provide the list of changes, and you must generate polished, professional, point-wise commit messages.`
    }
};

// State management
let currentPrompt = null;

// Navigation
function showPage(pageId) {
    const hub = document.getElementById('hub');
    const viewer = document.getElementById('prompt-viewer');

    if (pageId === 'hub') {
        viewer.classList.add('hidden');
        viewer.classList.remove('active');
        hub.classList.add('active');
        hub.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        const data = promptData[pageId];
        if (!data) return;

        currentPrompt = data.content;
        document.getElementById('prompt-title').innerText = data.title;
        document.getElementById('prompt-desc').innerText = data.desc;
        document.getElementById('prompt-content').innerText = data.content;

        hub.classList.add('hidden');
        hub.classList.remove('active');
        viewer.classList.add('active');
        viewer.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Copy Functionality
document.getElementById('copy-btn').addEventListener('click', async () => {
    if (!currentPrompt) return;

    try {
        await navigator.clipboard.writeText(currentPrompt);
        showToast();
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
});

// Toast Logic
function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.remove('translate-y-20', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
        toast.classList.remove('translate-y-0', 'opacity-100');
    }, 3000);
}

// Mobile Scroll Reveal
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.glass-card');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            card.classList.add('animate-fade-in-up');
        }
    });
});
