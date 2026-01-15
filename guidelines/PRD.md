# Product Requirements Document (PRD)

## 1. Overview

### Product Name

Personal Portfolio Website

### Purpose

Build a fast, SEO-friendly, professional personal portfolio website that presents the developer's profile, skills, projects, and published technical articles. The website should be simple, maintainable, and optimized for hiring managers and potential clients.

### Target Audience

* Recruiters and hiring managers
* Tech founders / clients
* Developers reviewing technical skills

### Primary Goals

* Clearly communicate professional positioning (Laravel / Full-Stack Developer)
* Showcase real projects with technical depth
* Centralize links to external blog content (Medium, Dev.to)
* Rank well on search engines
* Be fast, accessible, and easy to maintain

### Non-Goals

* No user authentication
* No admin panel or CMS
* No database-driven content

---

## 2. Tech Stack & Architecture

### Core Stack

* Framework: **Astro** (static-first)
* Rendering: Static Site Generation (SSG)
* Styling: Tailwind CSS
* Components (optional): React (only if needed)
* Content Source: Markdown + JSON


### Performance & SEO

* Static HTML output
* Optimized images
* Semantic HTML
* Meta tags per page
* Sitemap and robots.txt

---

## 3. Content Strategy (No Admin Panel)

### Content Management Approach

All content is managed via the codebase:

* Markdown files for long-form content (About, Projects)
* JSON or JS objects for structured data (Skills, Blog links)
* Git-based updates

### Blog Links Strategy

* Do NOT host full blog articles
* Store only metadata:

  * title
  * excerpt (2–3 lines)
  * platform (Medium / Dev.to)
  * URL
  * publish date
* Always link to the original source
* No duplicate content risk

---

## 4. Information Architecture

### Pages

* `/` Home
* `/projects`
* `/blog`
* `/about`

---

## 5. Section-by-Section Requirements

### 5.1 Hero / Intro Section

**Purpose:**
Immediately communicate who the developer is and what they specialize in.

**Content Requirements:**

* Name
* Professional title (e.g. Laravel / Full-Stack Developer)
* Short value proposition (1–2 lines)
* Primary CTA button (View Projects)
* Secondary CTA (Contact)

**Guidelines:**

* Clear and concise
* No long biography

---

### 5.2 About Section

**Purpose:**
Provide professional context and background.

**Content Requirements:**

* Short professional summary
* Areas of focus (APIs, SaaS, ecommerce, dashboards)
* Problem-solving mindset

**Guidelines:**

* Technical and professional tone
* Avoid personal life details

---

### 5.3 Projects Section

**Purpose:**
Demonstrate real-world experience and technical competence.

**Content Requirements per Project:**

* Project name
* Short description (problem → solution)
* Tech stack used
* Key features
* Screenshots or preview image
* Links:

  * Live demo (if available)
  * GitHub repository (if public)

**Guidelines:**

* 3–6 high-quality projects
* Prefer real systems over demos
* Focus on impact and architecture

---

### 5.4 Skills Section

**Purpose:**
Summarize technical capabilities in a structured way.

**Categories:**

* Backend
* Frontend
* Databases
* DevOps / Tools

**Guidelines:**

* No skill bars or percentages
* Use grouped lists
* Keep it scannable

---

### 5.5 Experience Section

**Purpose:**
Show professional maturity and continuity.

**Content Requirements:**

* Role title
* Context (freelance, personal, startup, etc.)
* Responsibilities and outcomes

**Guidelines:**

* Self-driven projects are valid
* Focus on results

---

### 5.6 Blog / Writing Section

**Purpose:**
Show thought leadership and communication skills.

**Content Requirements:**

* List of external articles
* Title
* Short excerpt
* Platform badge
* Link to original article

**Guidelines:**

* No duplicated content
* Chronological order (latest first)

---

### 5.7 Contact Section

**Purpose:**
Enable easy professional contact.

**Content Requirements:**

* Email address
* Phone Number (whatsapp)
* GitHub link
* LinkedIn link

**Guidelines:**

* No contact form required
* Simple and accessible

---

## 6. SEO Requirements

* Unique meta title and description per page
* Open Graph tags
* Structured data (Person schema if possible)
* Clean URLs
* Fast load times (<1s)

---

## 7. Design Guidelines

* Minimal, professional design
* Neutral color palette
* Consistent typography
* Mobile-first responsive layout
* Accessibility (contrast, semantic HTML)

---

## 8. Success Criteria

* Lighthouse score > 90
* Fully static output
* Clear positioning within 5 seconds
* Easy content updates via Git

---

## 9. Future Enhancements (Optional)

* Dark mode
* RSS feed for blog links
* Project detail pages
* Analytics (privacy-friendly)
