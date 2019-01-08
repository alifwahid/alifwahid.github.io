---
layout     : post
title      : "Abundance And Lifetime Of Hardware"
tags       : [economics, engineering, equilibrium]
excerpt    : Why some things are repairable and others are replaceable.
---


What is *abundance*? What is *lifetime*? Well, I use them according to their
dictionary definitions, that is, abundance is the prevalence of something and
lifetime is simply the interval between that thing's birth and death. What
makes them interesting for computer hardware is that they provide essential
insights into the interplay between economics and engineering.

The figure below is a qualitative mapping between abundance and lifetime for
some common things. I've left out numbers because I'm only trying to create an
approximate ranking here. If you dig up the relevant data for these things,
then you may very well poke gaping holes in my drawing. Nevertheless, I reckon
the rough order that I've depicted below is solid enough for the discussion
which follows.

![abun_vs_life_1]({{ "/imgs/abundance_vs_lifetime.svg" | absolute_url }})

The diagonal in the figure above is partly an artefact of the way I've drawn
it. In reality you are unlikely to find such a straight line despite the
negative correlation between abundance and lifetime. But there's likely to be a
power law relationship between the two axes on a log-log plot, even though I
can't demonstrate that in the absence of numbers. In any case, the key
information in the figure above is the presence of an equilibrium that's
remarkably stable - *things that are abundant have short lifetimes and things
that endure are rather rare*.

What keeps this equilibrium going is the cost of *repair* versus the cost of
*replacement*. As I have noted on the diagram, enduring things are expensive to
replace (bottom right-hand corner), while the reverse is true for abundant
things (top left-hand corner). It's also likely that the *size* of things is a
key factor regarding the cost of repair versus the cost of replacement. Big
things are rare and long lasting, so making them repairable is a practical
necessity, while little things are ubiquitous and short lived, hence their
replacement is easier and cheaper. This is a nice parallel with the biological
world, where unicellular organisms would lie on the top left-hand corner of
this diagram and large animals would lie on the bottom right-hand corner.

How does such an equilibrium emerge? My answer is that the design and
manufacture of hardware begin on the bottom left-hand corner of the diagram -
this is where the proverbial *prototype* resides. If a prototype becomes
successful in terms of demand, then it begins to move towards the diagonal line
before finding an appropriate slot. However, the pace of this movement towards
equilibrium is not the same for all cases. For instance, a prototype will
*sprint* towards abundance if it becomes popular, whereas it will *walk*
towards endurance if it is proven reliable. That means, even though the
equilibrium appears to be static in this picture, there are fascinating dynamic
processes at work here.

One such dynamic process is the position of phones on this qualitative map. The
lifetime of a typical phone is two or three years nowadays, since that's how
long people hold onto their phones before upgrading to a new one. If that
lifetime elongates further, let's say it doubles, then phones are guaranteed to
become more repairable, similar to fridges and cars. That would of course have
consequences for the way they are designed and manufactured in the future. For
example, phones may not be hermetically sealed under such a hypothetical
scenario, because they would need to be opened up for essential servicing by
someone other than the original manufacturer. Also, the price of new phones
will adjust as a matter of course, given that supply and demand will match up.

A concluding prediction I will make is that there won't be anything in the top
right-hand corner of the diagram. In other words, *nothing can be abundant and
enduring at the same time*. This is a straightforward implication of the
negative correlation between abundance and lifetime, and perhaps also a
consequence of the increasing size as you traverse the diagonal downward from
left to right. Could we ever see an invention that is concurrently small,
abundant and enduring? I don't think so, given the fact that optimising across
the many dimensions simultaneously makes our probability of success vanishingly
small.
