---
lang: nl
author: anthony-candaele
date: 06/02/2024
featured: false
image: ./images/homepage-nl.jpg
title: Het Ontwikkelen Van De Webmoov Website
description: Een overzicht van de technology stack en ontwikkeling van Webmoov.be
translation: building-the-webmoov-website
---

Als eerste blog artikel op Webmoov.be leek het me een goed idee om uit te leggen hoe Webmoov.be werd ontwikkelt.

## Astro.js voor content rich websites

Omdat de website relatief klein en statisch is, heb ik gekozen voor [Astro](https://astro.build/) als ondersteunend framework.
Astro.js is vrij populair onder Javascript ontwikkelaars, en voor content gedreven websites is het het go to framework. Het is heel makkelijk om te leren en websites die ontwikkeld zijn met Astro.js presteren heel goed. Dit komt voornamelijk omdat het ongebruikte Javascript en HTML verwijderd voor betere core web vitals, conversie ratio en SEO.

## Ontwikkel een blog met Content Collections

Content Collections maken het eenvoudig om eender welke content zoals blog artikels, producten, ... op te slaan in de content directory. Astro.js maakt het heel makkelijk om deze content aan te spreken in je applicatie. Ik heb een src/content/posts collectie gemaakt om mijn blog artikels op te slaan. Astro laat je toe om een schema te maken dat een gemeenschappelijke structuur definieert voor elk artikel. Dit zal je helpen om fouten sneller te ontdekken. Astro.js heeft zelfs een API voor het implementeren van paginering.

## Astro.js next-gen 'Islands' architectuur.

Wanneer nodig kan Astro.js meer complexe functionaliteit uitvoeren via wat 'Islands' architectuur wordt genoemd. Hierdoor is het mogelijk om componenten te gebruiken in welke technologie je ook verkiest, zoals React, Svelte, Vue, ...

Webmoov.be gebruikt bijvoorbeeld React voor het contactformulier en FAQ componenten. Het voordeel hiervan is dat de website snel blijft: het merendeel van de website is omgezet naar statische HTML en Javascript wordt enkel geladen voor die componenten die het nodig hebben.

## De ContactForm Component

Zoals gezegd in de vorige paragraaf, is de ContactForm functionaliteit geïmplementeerd als een Astro island. Ik heb dit component gebouwd met React.

Voor de form technologie gebruikte ik [React Hook Form](https://www.react-hook-form.com/), wat het heel makkelijk maakt om validatie te implementeren, en [Zod](https://zod.dev/), een Typescript-first schema en validatie library. Deze twee technologieën werken heel goed samen en zijn een krachtige combinatie.

Om de emails te versturen gebruik ik React Email en Resend, twee tools die het proces van het maken en versturen van emails aanzienlijk vereenvoudigen.

## Internationalizatie (i18n) implementeren

Zoals je misschien al hebt opgemerkt, is Webmoov een meertalige website. Dit is vrij makkelijk te implementeren met Astro's Routing API. Het laat je toe om meertalige content te brengen met ondersteuning voor het configureren van een standaard taal en het berekenen van relatieve pagina URL's.

Ik wil hierbij ook Rebeca Murillo bedanken, haar [astro-blog-i18n-starter](https://github.com/rebecamurillo/astro-blog-i18n-starter) starterkit gaf me veel inzichten in hoe je meertalige functionaliteit kan implementeren in een Astro website.

## Conclusie

Ik had een goede ervaring met het bouwen van mijn marketing website in Astro.js. Het had alles wat ik nodig had voor een multipage website: content collecties voor mijn blog artikels, Route API voor internalisatie (i18n), en voor meer complexe functionaliteit gebruikte ik React componenten. Dus Astro.js biedt je het beste van beide werelden: de eenvoud van een statische website en componenten om complexe functionaliteit toe te voegen.
