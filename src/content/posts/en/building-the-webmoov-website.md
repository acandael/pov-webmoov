---
lang: en
author: anthony-candaele
date: 06/02/2024
featured: false
image: ./images/homepage.jpg
title: Building the Webmoov website
description: A deep dive into the technology stack and development for Webmoov.be
translation: het-ontwikkelen-van-de-webmoov-website
---

As the first article on Webmoov.be, I thought it's a good idea to explain how Webmoov.be was built.

## Astro.js is ideal for content-rich websites.

When building a relatively small and static website, I decided to use Astro.js as the supporting framework. [Astro](https://astro.build/) is quite popular among Javascript developers and is the go-to framework for content-driven websites. It is easy to learn, and websites developed with Astro.js perform really well. This is mainly because it removes unused Javascript and optimizes HTML for better core web vitals, conversion rates, and SEO.

## Build a blog with content collections

You have the option to store various types of content such as blog articles, products, etc. in the content directory. Astro.js simplifies the process of accessing this content across your application. For example, I set up a src/content/posts collection to manage my blog articles. Astro enables you to create a schema that establishes a consistent structure for each post. This can help you identify errors early on. Moreover, Astro.js includes an API for incorporating pagination.

## Astro.js next-gen 'Islands' architecture

When required, Astro.js can execute more complex functionality using the 'Islands' architecture. This enables the use of components in any preferred technology, such as React, Svelte, Vue, and more.

Webmoov.be, for instance, uses React for its contact form and FAQ components. The benefit of this is improved performance: most of the website is converted to fast, static HTML, and JavaScript is only loaded for the individual components that require it.

## The ContactForm Component

As mentioned in the previous paragraph, the ContactForm functionality is implemented in an Astro island. I built this component with React.

For the form technology, I use [React Hook Form](https://www.react-hook-form.com/), which makes it very easy to implement validation, and [Zod](https://zod.dev/), a TypeScript-first schema and validation library. These two technologies play very well together and are a powerful combination.

For sending the emails, I use React Email and Resend. These two tools significantly simplify the process of creating and sending emails.

## Implementing Internationalization (i18n)

As you noticed, Webmoov is a multilingual website. Implementing this is fairly easy with Astro's Routing API, which allows you to bring your multilingual content with support for configuring a default language and computing relative page URLs.

Also, a big shoutout to Rebeca Murillo. Her [astro-blog-i18n-starter](https://github.com/rebecamurillo/astro-blog-i18n-starter) starter kit gave me lots of insights on how to implement multilingual functionality in an Astro website.

## Conclusion

I thoroughly enjoyed creating my marketing website using Astro.js. It provided all the necessary features for a multipage website, including content collections for my blog posts, a Route API for internalization (i18n), and the ability to incorporate more complex functionality using React components. Astro.js combines the simplicity of a static website with the flexibility of components for more sophisticated features.
