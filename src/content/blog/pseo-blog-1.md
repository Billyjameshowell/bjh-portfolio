---
title: Making a Programmatic SEO (PSEO) Blog in One Day with No Code
pubDate: 06/14/23
author: "Billy Howell"
tags:
    - SEO
    - No Code
imgUrl: /blogpost1hero.png
description: Dive into the growing world of Programmatic SEO. It's blogging content meets AI meets Excel.
layout: '../../layouts/BlogPost.astro'
---

=============================================================
Hi! Last night I stayed up until George Lopez reruns were playing on TV because I was making [vstdatabase.com](https://www.vstdatabase.com/). Read along to find out why and how!

What’s PSEO?
============

In the SEO world it’s all about being on the first page of Google SERP (Search Engine Results Page). But for new entrants it’s almost impossible to get on that first page for high volume and high value queries.

This is because other website have a higher search ranking or reputation with Google and they likely have spent time and money locking down that search query. So you likely won’t rank high for a query like “new co-op video games”.

But you could rank high for a query like “new co-op video games created in Denmark”. **The idea of PSEO is to create hundreds of landing pages or blog posts that capture all of the low volume search queries for a topic.**

So in this example you would generate blog posts or listicles based on the query “co-op video games created in \[country\]”. You could modify it even further to something like “\[genre\] video games ceated in \[country\].

The Challenge
=============

Last night I set out to test this strategy with a topic I’m familiar with: music producer software. Plugins are “.VST” files that add instruments and mastering tools to music making software.

There’s a lot of money in the plugin game. They sell for anywhere from $20 to $800. Many “industry standard” plugins cost hundreds of dollars and monthly payment plans.

There’s not really a database to look at all of these plugins. So I want to capitalize off of google searches for different plugin types and price ranges.

The Stack
=========

*   Backend CMS: [Airtable](https://www.airtable.com/)
*   Domain management: Google Domains
*   Analytics: Google Analytics + Google Search
*   Website Builder: [Softr.io](https://www.softr.io/)
*   Content Writing: [Openai](https://openai.com/) Davinci Model
*   Openai -> Airtable: [Datafetcher](https://datafetcher.com/)

The Database
============

Let’s start with the database. I opened a new base in Airtable and started populating it with information.

Airtable is like Excel built into a relational database. And it integrates with most SaaS apps.

I added a few plugins and then added fields like function, publisher and price. You can even store images of each item in Airtable. On the website each plugin will have it’s own page that shows this info.

![Airtable screenshot](/post-one-airtable-screenshot.png)


After linking Airtable to Softr this is what the website looks like.

![Airtable screenshot](/vstdatabase-screenshot.png)

*Isn’t she beautiful?*

And here’s what you see when you click a plugin.
![Plugin Details Screenshot](/plugin-details-screenshot.png)

That description is generated entirely by OpenAI! Using the Data Fetcher [extension](https://datafetcher.com/) on Airtable I was able to have the Davinci model read each row and give a summary of the plugin.

Then the summary is stored in Airtable and pulled through to Softr automatically! I can even edit the text or manually approve what’s written before it is pushed live.

Programmatic Content
====================

You’re probably thinking, okay this is cool but why wouldn’t I just use Wix, Google Sheets and Chatgpt for the same result? Here’s where it gets fun.

On another table called “listicle” I have it set where I type in a topic and number of list items and it generates an article title.

![programmatic contetent](/programmatic-content-screenshot.png)

Then OpenAI writes the article based on the info in the table and posts it. It can even generate images for the blog posts but I don’t think the public is ready for it’s art style…


![lofi horror clipart](/lofi-horror-clipart.png)
*“lofi horror clipart”*

Once I have the base plugin data populated, I’ll be able to generate tons of content. Basically you just pick two different properties, make a table and then generate articles for them. “_Synths_ under _$10_" “_Drumkit_ under _$50_”  
Best _Compressors_ for _FL Studio_”, etc.

Then you go to Google analytics and Google search console and see which articles are performing well.

Clean those articles up, add internal links, affiliate links and more pictures. And thenmake more content like the high performers.

Thanks for reading
==================

Please share this article and follow me on Twitter [@billyowexlabs](https://twitter.com/billyowexlabs)! If you need help with SEO & blog content please dm me! Also, check out my [portfolio](https://billyjameshowell.github.io/) site.
