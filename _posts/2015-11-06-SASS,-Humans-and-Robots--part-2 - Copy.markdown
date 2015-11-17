---
layout: post
title:  "SASS, Humans, and Robots part 2"
date:   2015-11-11 20:36:00
categories: jekyll update
comments: true
---

##What is robots.txt and how have you configure it for your site?
Robots.txt is a wall to search engines where you can block access. For example - you have a very deep hatred towards 'bing.com', then you can use robots.txt to block your site from that search engine.

You can also use robots.txt to block all search enginge - which might be usefull whilst you develp your site, since you might use some example text before using the real text. If you don't block the engines before publishing your website, then a faulty version of your site might show up on, for example google. So if you use, let's say 'Forcem Ipsum' on your site and dont block the search engine - then your site will most likely show up on starwars searches.

As an example, if you want to block all engines: 

	User-agent: *
	Disallow: /

and, if you just want to allow google: 

	User-agent: Google
	Disallow:

	User-agent: *
	Disallow: /



##What is humans.txt and how have you configure it for your site?
Humans.txt is useful for adding authors, and teams to the site, as well as adding site information. This makes it easier for the users to find out who actually made/created the website.

To make this happen - create a normal .txt file and name it humans, and then write some information like the one below: 

	/* TEAM */
	The all-in-one:Oscar Nordquist
	Contact: oscar.cv.nordquist [at] gmail.com
	From:Jönköping, Sweden

	/* SITE */
	Last update:11/11/2015
	Language: English
	Doctype:HTML5
	IDE: Sublime Text 2, Photoshop, Jekyll

which give the reader some information who's behind all this - and what that person have been using.


##How did you implements comments to blog posts?
To implement comments on my blog, I used the well knows Disqus - which is a webplugin often used in - for example - wordpress. 

When I implemented it on my site, I first had to register to their website - then copy some standard code from Disqus website onto my post.html document.


##What is Open Graph and how do you make use of it?

Open graph checks the content of a website and makes it a lot easier to share on, for example, 'facebook' and 'twitter'. When the page get linked - the reciever is presented with the tags the creator has used. For example - meta="og:title" - would show up as a big text. As another example og:img would show up as a thumbnail of the site.