// src/lib/data.js

// ייבוא ישיר של JSON
const projectsData = {
  "projects": [
    {
      "id": "marry-land",
      "title": "פסטיבל Marry Land",
      "slug": "marry-land",
      "category": "festival",
      "shortDescription": "פסטיבל חתונות ראשון מסוגו בישראל",
      "heroVideo": "https://res.cloudinary.com/dptyfvwyo/video/upload/v1763320961/Marry-Land_dkt5yr.mp4",
      "published": true,
      "featured": true
    },
    {
      "id": "jungle-wedding",
      "title": "קונספט: ג'ונגל אורבני",
      "slug": "jungle-wedding",
      "category": "wedding",
      "shortDescription": "חתונה בקונספט ג'ונגל אורבני ייחודי",
      "heroVideo": "https://res.cloudinary.com/dptyfvwyo/video/upload/v1763211981/%D7%95%D7%99%D7%93%D7%90_%D7%A4%D7%AA%D7%99%D7%97%D7%94_wm08bo.mp4",
      "published": true,
      "featured": true
    },
    {
      "id": "metal-wedding",
      "title": "קונספט: All Black Metal",
      "slug": "metal-wedding",
      "category": "wedding",
      "shortDescription": "חתונה דרמטית בשחור מוחלט",
      "heroVideo": "https://res.cloudinary.com/dptyfvwyo/video/upload/v1715425663/VID-20250916-WA0002_rdm3vh.mp4",
      "published": true,
      "featured": true
    }
  ]
};

const postsData = {
  "posts": [
    {
      "id": "5-signs",
      "title": "5 סימנים שהאולם עושה עליכם סיבוב",
      "slug": "5-signs",
      "excerpt": "לפני שאתם סוגרים חוזה...",
      "thumbnailUrl": "https://res.cloudinary.com/dptyfvwyo/image/upload/c_fill,w_800,h_450/v1715425656/5_%D7%A1%D7%99%D7%9E%D7%A0%D7%99%D7%9D_%D7%A9%D7%94%D7%90%D7%95%D7%9C%D7%9D_kbqjzv.jpg",
      "published": true
    }
  ]
};

const testimonialsData = {
  "testimonials": []
};

const aboutData = {
  "about": {}
};

const siteSettings = {
  "site": {
    "contact": {
      "email": "info@skylineproductions.com",
      "phone": "+972546203038",
      "whatsapp": "+972546203038",
      "whatsappMessage": "שלום דנה! 👋\nראיתי את האתר של Skyline Productions ואני מעוניין/ת לשמוע עוד על הפקת אירועים.\nמתי נוכל לדבר?"
    },
    "social": {
      "youtube": "",
      "facebook": "",
      "instagram": "",
      "tiktok": ""
    }
  }
};

// פונקציות
export function getAllProjects() {
  return projectsData.projects.filter(p => p.published);
}

export function getProjectBySlug(slug) {
  return projectsData.projects.find(p => p.slug === slug && p.published);
}

export function getFeaturedProjects() {
  return projectsData.projects.filter(p => p.published && p.featured);
}

export function getAllPosts() {
  return postsData.posts.filter(p => p.published);
}

export function getPostBySlug(slug) {
  return postsData.posts.find(p => p.slug === slug && p.published);
}

export function getPostsByCategory(category) {
  return postsData.posts.filter(p => p.published && p.category === category);
}

export function getAllTestimonials() {
  return testimonialsData.testimonials.filter(t => t.published);
}

export function getFeaturedTestimonials() {
  return testimonialsData.testimonials.filter(t => t.published && t.featured);
}

export function getAboutData() {
  return aboutData.about;
}

export function getSiteSettings() {
  return siteSettings.site;
}

export function getThemeSettings() {
  return {};
}

export function getContactInfo() {
  return siteSettings.site.contact;
}

export function getSocialLinks() {
  return siteSettings.site.social;
}
