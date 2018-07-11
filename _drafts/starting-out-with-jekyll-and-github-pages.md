---
layout     : post
title      : "Starting out with Jekyll and GitHub Pages"
tags       : []
categories : [jekyll, github pages]
excerpt    : Initial post about setting up this blog.
---

**Contents**
1. ToC will be auto-placed here
{:toc}


## In the beginning ...

I wanted to start a public blog long ago, but the perennial procrastination
just kept on getting the better of me. It didn't help that I never liked any of
the platform offerings out there in the blogosphere - until I came across
Jekyll and GitHub Pages. Blogging in Git suddenly seemed too enjoyable a
pastime to defer any longer. Thus alifwahid.com was born!


## I prefer static

Keeping a public blog appeals to me only as a means to entertain my future
self. That boils down to writing plain text now, and reading the typeset pages
later. Everything else is irrelevant. So it shouldn't be hard to see why a
statically generated site is my preference. Of course, there are many other
pros, and a handful of cons, when dealing with static sites. It turns out that
Jekyll and GitHub Pages make them all irrelevant, too.


## Jekyll and GitHub Pages

Jekyll converts plain text (well, Markdown or an equivalent) into HTML + CSS +
JavaScript for hosting by a simple web server, such as GitHub Pages. No need
for anything fancier. GitHub Pages is smart enough to use the automated *Let's
Encrypt* certificate authority for serving sites over HTTPS - that's a major,
major plus in my book! So I can initially reside in the offline world of Git,
then push (i.e., publish) my writing when its ready.

Strictly speaking, JavaScript is not required for a statically generated
website. But I prefer to use it for various client-side benefits (e.g.,
beautifully typeset equations by MathJax). Read further below about the search
functionality. It's also possible to use client-side JavaScript to GET
arbitrary data compiled with the static site and served up by GitHub
Pages. That's something I'll use in future posts for D3 visuals.


## Customised the layout

I've gone with the default minima theme in Jekyll for now. It looks acceptable
and is easy to customise. I've already changed the header and footer of every
page. I also added the necessary pagination logic based on Jekyll docs. Given
my newbie status, it took about a week of my spare time to make these essential
changes. Most of that time was spent browsing and understanding what others
have done. I'll probably make various tweaks in due course (e.g., modify the
colour scheme to better suit my palette).


## Added a search box

I suppose the main drawback of a static site is that it makes searching hard,
given that the server is so simple. Fortunately, there are options! The folks
at [CloudCannon][cclink] have a fantastic tutorial (with code and all) for
adding search functionality to a Jekyll site using client-side Lunr.js and an
index that's created at build-time but served by GitHub Pages subsequently. I
made some minor tweaks to the code from CloudCannon. You can get my Git repo
[here][ghlink]. Searching the blog works fine now but won't scale as the blog
grows. I'll have to revisit this and consider other options when the time
comes.


## Where to from here?

Well, now that the blogging is underway, it's a matter of pushing whenever I've
got something written up and ready to go. Being a hobby of sorts, there won't
be any kind of schedule for new content. I have plenty of topics in mind. All
will be published in due course.


[cclink]: https://learn.cloudcannon.com/jekyll/jekyll-search-using-lunr-js/
[ghlink]: https://github.com/alifwahid/alifwahid.github.io
