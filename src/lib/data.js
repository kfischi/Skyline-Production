// src/lib/data.js
import fs from 'fs';
import path from 'path';

// Helper function to read JSON files
function readJsonFile(filename) {
  const filePath = path.join(process.cwd(), 'src', 'data', filename);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

// פרויקטים
export function getAllProjects() {
  const data = readJsonFile('projects.json');
  return data.projects.filter(p => p.published);
}

export function getProjectBySlug(slug) {
  const data = readJsonFile('projects.json');
  return data.projects.find(p => p.slug === slug && p.published);
}

export function getFeaturedProjects() {
  const data = readJsonFile('projects.json');
  return data.projects.filter(p => p.published && p.featured);
}

// פוסטים
export function getAllPosts() {
  const data = readJsonFile('posts.json');
  return data.posts.filter(p => p.published);
}

export function getPostBySlug(slug) {
  const data = readJsonFile('posts.json');
  return data.posts.find(p => p.slug === slug && p.published);
}

export function getPostsByCategory(category) {
  const data = readJsonFile('posts.json');
  return data.posts.filter(p => p.published && p.category === category);
}

// המלצות
export function getAllTestimonials() {
  const data = readJsonFile('testimonials.json');
  return data.testimonials.filter(t => t.published);
}

export function getFeaturedTestimonials() {
  const data = readJsonFile('testimonials.json');
  return data.testimonials.filter(t => t.published && t.featured);
}

// אודות
export function getAboutData() {
  const data = readJsonFile('about.json');
  return data.about;
}

// הגדרות אתר
export function getSiteSettings() {
  const data = readJsonFile('site-settings.json');
  return data.site;
}

export function getThemeSettings() {
  const data = readJsonFile('site-settings.json');
  return data.theme;
}

export function getContactInfo() {
  const data = readJsonFile('site-settings.json');
  return data.site.contact;
}

export function getSocialLinks() {
  const data = readJsonFile('site-settings.json');
  return data.site.social;
}
