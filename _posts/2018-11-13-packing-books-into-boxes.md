---
layout     : post
title      : "Packing Books Into Boxes"
tags       : [books, boxes, packing, heuristic, shipping]
excerpt    : My heuristic for packing books into boxes before shipping.
---

**Contents**
1. ToC will be auto-placed here
{:toc}


## Packing and shipping

This past weekend I managed to pack about 600 books into 12 cardboard boxes.
Each box had fixed dimensions of 30 cm x 40 cm x 43 cm, which equates to 0.052
cubic metres of volume. So their total volume is just over 0.6 cubic metres,
which is fortunately half of my limit of 1.2 cubic metres for shipping via a
shared container. The remaining half of my limit will be taken up by my other
belongings shortly (e.g., a large globular map of the world).

All this got me thinking about the [bin packing problem][binpackurl]. That
linked Wikipedia page is very handy for a general introduction. You get a good
sense of the breadth of applications in the first few paragraphs. If you follow
some of the external links on that Wikipedia page, you'll come across companies
that provide web APIs which compute near-optimal packing for shipping, storage,
transportation, etc. I didn't use any available software to compute the packing
per se. Instead, I decided to get some much needed physical exercise by
ferrying heavy books across my room, and manually trying out a few heuristics
that I had dreamt up earlier. Needless to say that I'm rather sore right now.

[binpackurl]: https://en.wikipedia.org/wiki/Bin_packing_problem


## My constraints

An optimisation problem begins with a set of well defined constraints. In my
case, the aforementioned volume limit of 1.2 cubic metres is the obvious
one. But I also had to consider a couple more, as follows.

* Maintain the structural integrity of each box, i.e., make it as dense as
  possible from top to bottom such that piling on more boxes higher won't
  buckle the cardboard walls (assuming that boxes are piled higher in the
  clearly marked "This Way Up" orientation).

* Minimise the weight of each box so that they can be easily handled by the
  removalists.

Well, these two turned out to be rather contradictory because maximising
density for structural integrity automatically means foregoing any hope of
minimising the weight, and vice versa. I ended up focusing on structural
integrity, as that seemed to be the biggest risk in shipping. I'm hoping that
the removalists will be well equipped to handle such monstrously heavy, albeit
smallish, boxes.


## Bottom heavy, top skinny

After some trials, I found that the best heuristic was to pack each box with
columns of thick/heavy books at the bottom first, then gradually fill up the
columns with thin/skinny books near the top. This made it possible to finely
balance the column heights at the top of the box with dense books (however thin
they may be), rather than non-dense filler material, such as bubble wraps,
scrunched up paper balls, etc.

Supporting many further boxes piled on top requires that each column has no
horizontal gap so that the cardboard walls are not bearing any load. Of course
this would all turn pear shaped if the boxes are not piled in the designated
orientation. So I tried to counter that, somewhat, by packing as many hardcover
books between the columns as possible, along with filler material to ensure
that the books in each column don't shift or slide horizontally with ease.

From an algorithmic perspective, this heuristic requires first sorting all the
books according to thickness and page size (or cover area). Each column of
books is basically a step pyramid with a flat roof when you obey this
_bottom-heavy-top-skinny_ rule. I found it pretty easy to follow this
repeatedly over the course of a weekend. I naturally made some variations when
sorting all the books. For example, I separated all the Penguin paperbacks of
identical dimensions and packed them into straight columns, as opposed to step
pyramids. As mentioned earlier, I also separated thin hardcover books for
filling gaps between columns to allow certain amount of disoriented box piling.


## Piled higher and deeper

With due deference to PhD Comics, below is a picture of how I managed to pile
higher and deeper.

![piled_boxes]({{ "/imgs/piled_boxes.jpg" | absolute_url }})

If you have keen eyes then you may be wondering how I managed to lift those
second level of boxes off the ground, given my claim earlier that each one is
"monstrously heavy". The answer is that I only lifted empty boxes before
placing and packing them at their resting spot that you see in the picture
above. It's the kind of _algorithmic look ahead_ that is often beneficial.


## Brickwork pattern

One promising heuristic that I tried was the brickwork pattern (inspired by the
wall you can glean at the right-hand edge of the picture above). It would work
best with same sized books, preferably all hardcover, that can each stand on
its spine and become perpendicular at alternating layers for interlocking
strength of the whole structure (akin to a Jenga tower). It would also provide
much better support for piling boxes in a disoriented fashion. However, books
of wildly varying sizes meant that it was impossible to balance the height of
each layer, and still fill up to the very top of the box with dense
books. Nevertheless, it's worth an honourable mention.
