# PDCA Design: Landing Page for Kim Hong-nyeon

## 1. Overview
Based on the plan, this design outlines the structure and visual style for the personal landing page of Kim Hong-nyeon, focusing on "Vibe Coding" and "Generative AI" education.

## 2. UI Structure / Wireframe
The page will be a single-page scrolling landing page (or a simple multi-page site if content grows).

### Sections:
1.  **Header / Navigation**
    - Logo: "Kim Hong-nyeon" or a personal icon.
    - Links: About, Vibe Coding, Lectures, Contact.
2.  **Hero Section**
    - **Background**: Abstract, flowy, vibrant gradient (Purple/Blue/Pink) representing "Vibe" and "AI".
    - **Content**:
        - Headline: "바이브 코딩으로 여는 미래 교육" (Opening Future Education with Vibe Coding)
        - Sub-headline: "초등학교 교사 김홍년입니다. 생성형 AI와 코딩으로 선생님의 업무를 덜고, 아이들의 꿈을 키웁니다."
        - CTA Button: "강의 문의하기" (Contact for Lectures) or "더 알아보기" (Learn More).
3.  **About Me (Profile)**
    - **Layout**: Two columns (Image + Text).
    - **Image**: Professional yet friendly photo of Kim Hong-nyeon.
    - **Text**: Introduction, background as a teacher, philosophy on tech in education.
4.  **Expertise (Vibe Coding & AI)**
    - **Layout**: Grid of cards.
    - **Cards**:
        - "Vibe Coding": What it is, why it matters.
        - "Generative AI": Practical usage in classrooms.
        - "Teacher Tools": Reducing admin work.
5.  **Lectures & Programs**
    - **Layout**: List or Timeline style.
    - **Items**:
        - "AI Utilization for Teachers"
        - "Vibe Coding Workshop"
        - "EdTech Development"
6.  **Footer**
    - **Content**: Copyright, Email link, Social Media links (YouTube, Blog, etc.).

## 3. Component Design

| Component | Description | Props |
| :--- | :--- | :--- |
| `Header` | Fixed top navigation bar. | `links` |
| `Hero` | Full-screen intro with gradient background. | `title`, `subtitle`, `ctaLink` |
| `ProfileSection` | Layout for image and bio text. | `imageUrl`, `bioText` |
| `FeatureGrid` | Container for expertise cards. | `features` (Array) |
| `FeatureCard` | Individual card for an area of expertise. | `icon`, `title`, `description` |
| `LectureList` | List of lecture topics. | `lectures` (Array) |
| `Footer` | Simple footer with contact info. | `contactInfo` |

## 4. Tech Stack & Tools
- **Framework**: Next.js (App Router) - per `starter` skill.
- **Styling**: Tailwind CSS (recommended for rapid, modern styling) or CSS Modules.
- **Icons**: Lucide React or Heroicons.
- **Deployment**: Vercel.

## 5. Visual Theme ("Vibe" & "AI")
- **Color Palette**:
    - Primary: Deep Purple (#6200EA) to Vibrant Pink (#D500F9) gradient.
    - Secondary: Clean White (#FFFFFF) and Light Gray (#F5F5F5) for readability.
    - Accent: Electric Blue (#00E5FF) for interactive elements.
- **Typography**:
    - Korean: 'Pretendard' or 'Noto Sans KR' (Clean, modern sans-serif).
    - English: 'Inter' or 'Roboto'.
- **Atmosphere**: Futuristic, Energetic, Professional, Educational.

## 6. Implementation Steps
1.  Initialize Next.js project (`/starter init`).
2.  Install Tailwind CSS (if not included).
3.  Create directory structure (`components/`, `app/sections/`).
4.  Implement components (Header, Hero, Profile, etc.).
5.  Assemble page in `app/page.tsx`.
6.  Deploy.
