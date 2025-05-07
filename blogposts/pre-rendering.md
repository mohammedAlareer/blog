---
title: 'Two Forms of Pre-rendering in Next.js'
date: '2023-03-14'
---

Next.js provides two powerful and flexible forms of pre-rendering that allow developers to choose how HTML is generated for their pages: **Static Generation (SG)** and **Server-side Rendering (SSR)**. Understanding when and how to use each method can significantly improve your app's performance, scalability, and user experience.

## 🧱 1. Static Generation (SG)

**Static Generation** means generating the HTML at **build time**. During the build process, Next.js renders the components to HTML and stores it in a static file. When a user makes a request, that static HTML is served immediately, making it extremely fast.

This is the default rendering method in Next.js and is highly recommended for pages that do **not change often** or where real-time data is not required.

### ✅ Use cases:
- Blog posts and articles
- Marketing and landing pages
- Documentation sites
- Portfolio websites
- E-commerce product listings (when the data is not frequently updated)

### 🚀 Benefits:
- Very fast page loads (because content is cached in CDN)
- Improved SEO because the HTML is ready before the browser loads JavaScript
- Less server load since pages are generated once at build time

### ⚠️ Limitations:
- Not suitable for pages that need to update frequently or include personalized content
- Rebuild is needed every time content changes unless you use Incremental Static Regeneration (ISR)

## 🔄 2. Server-side Rendering (SSR)

**Server-side Rendering** means that the HTML is generated **on each request**, directly on the server. Every time a user accesses the page, the server runs the code and builds the HTML dynamically.

This is ideal for pages that depend on **real-time data**, **user-specific content**, or frequently changing information.

### ✅ Use cases:
- Dashboards with live data
- Pages requiring authentication or user personalization
- News feeds or stock tickers
- Admin panels

### 💡 Benefits:
- Always up-to-date data for the user
- Better for dynamic or user-specific content
- SEO-friendly just like Static Generation

### ⚠️ Limitations:
- Slower performance than SG because content is built on the fly
- Higher server load, especially with high traffic
- More potential points of failure (e.g., database, API errors)

## ⚖️ Choosing Between SG and SSR

Next.js gives you **full control** to choose the rendering method on a **per-page basis**. You can mix both within a single app to take advantage of their strengths.

- Use **Static Generation** whenever possible — especially for pages that don’t change often.
- Use **SSR** when your page needs fresh data on every request.

## 🧠 Bonus: Incremental Static Regeneration (ISR)

With ISR, you don’t have to choose strictly between SG or SSR. ISR allows you to **rebuild static pages in the background** without rebuilding the entire site. You set a `revalidate` time, and Next.js will regenerate the page automatically after that time expires.

