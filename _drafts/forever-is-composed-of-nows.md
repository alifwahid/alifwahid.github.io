---
layout     : post
title      : "Forever Is Composed Of Nows"
tags       : [simulations]
categories : [statistics, science, poetry]
excerpt    : Intuitions about simulations.
---


We tend to have a static conception of probability, something like a coin toss,
or a dice roll, or even a lottery. Simulations encompass a dynamic conception
of probability. So they necessarily deal with changes in probability over time
and across space. The technical literature is rather terse for precisely
defining and working with simulations in a wide array of fields. Definitely not
the sort of thing that I enjoy blogging about. But delving into the intuitive
side is stimulating stuff.

Incidentally, the title of this post comes from a [poem][emilypoem] by Emily
Dickinson. It eloquently hints at the intuitions that are very useful for
appreciating simulations. She managed to express a living, morphing, breathing
image of time and space, in just a dozen succinct lines. That's the metaphoric
equivalent of anything which is dynamic and random. It is born. It breathes. It
lives. And it even dies! Throughout all that, it's made of many different
instances, or "Nows".

Dickinson clearly grasped incremental progress toward an asymptote, which is
the essence of simulations as I conceptualise them. My favourite examples of
simulations are actually far outside my own field. I've been curious about
weather forecasting and solar system evolution for a long time. So in the rest
of this post I'll try to illuminate my intuitions about simulations using these
two fields.

[emilypoem]: https://www.poetryfoundation.org/poems/52202/forever-is-composed-of-nows-690

Gerd Gigerenzer's book *Risk Savvy* (2014) makes a clever point about the
chance of rain tomorrow, e.g., what does a 30% chance of rain tomorrow actually
mean? Without any further clarification, you might interpret it along the
following lines.

1. Around 30% of the suburbs will experience rain at some point tomorrow, but
there's no indication as to which ones.

2. Around 30% of the meteorologists in the committee agree that it will rain at
some point tomorrow, but there's no consensus as to when.

Even though it's a simplified example, it nonetheless illustrates an important
difference between static and dynamic views of probability. On the one hand, a
static view of probability means that the two interpretations above are
mutually exclusive: so it's either the first or the second, but not both. On
the other hand, a dynamic view means that both are valid along with the added
specification of *where* and *when* it's likely to rain.

The dynamic view is indeed what modern [weather forecasting][weatherlink]
uses. Giant supercomputers run regular simulations of the fluid-dynamical
models corresponding to your local atmosphere and terrain. Thus tomorrow's
forecast informs you about which suburbs are likely to experience rain, as well
as roughly what time of day that's expected, among other variables such as
temperature, humidity, wind, etc. And of course the forecast is regularly
updated to keep pace with the changing atmosphere and latest measurements.

[weatherlink]: https://en.wikipedia.org/wiki/Weather_forecasting

Much has been popularised about the chaotic nature of fluid dynamics (e.g.,
read James Gleick), along with the challenges of accurate weather
forecasting. However, 21st century weather forecasting has become ridiculously
good!  Nate Silver spent a whole chapter on this topic in his book *The Signal
and the Noise* (2012). He said everything that I ever thought of saying about
the accuracy of weather forecasting. But as far as the intuitive side is
concerned, it's worth stating the common knowledge that although tomorrow's
forecast is trustworthy, the ten day forecast is to be taken with a pinch of
salt, because such distant horizons have large uncertainties. And forecasts
covering vast territories are also inconveniently inaccurate, as rural folks
know all too well.

The main explanation behind that common knowledge is [chaos theory][chaoslink],
whereby the errors from numerical rounding of initial measurements compound to
produce vastly different (even contradictory) predictions beyond a small window
of time and space. Even though chaos theory is deterministic and it's the
numerical errors that compound, the uncertainty in its predictions cannot be
eliminated due to the intense sensitivity to starting conditions and our finite
computers. So to make progress with weather forecasting, meteorologists run
lots of simulations and then average the results. This step is akin to
composing forever from nows, as in Dickinson's poem. It's a way of reaching
ever closer to an asymptote that's forever unreachable.

[chaoslink]: https://en.wikipedia.org/wiki/Chaos_theory

Marcus du Sautoy's book *What We Cannot Know* (2016) reviews the history of
chaos theory in a thoroughly enlightening manner. He points out that computing
the extremely long term evolution of the solar system suffers from the same
error compounding effects as weather forecasting. The main difference is that
the window of validity is a few million years for the solar system due to its
very slow changes compared to the weather anywhere on earth. He cites a
[paper][collidelink] published by the journal Nature in 2009 that has the
apocalyptic title '*Existence of collisional trajectories of Mercury, Mars and
Venus with the Earth*'. We can all rest assured that this potential collision
is well over three billion years from now.

[collidelink]: https://www.nature.com/articles/nature08096

I'm rather fond of this example because it is endlessly fascinating to ponder
the possibility that the orbits of the terrestrial planets could become so
unstable in the very distant future that they end up smashing into each other
(though not all at the same time). The authors of the paper make it clear that
they estimate a probability of only 1% for this possibility to manifest after
three billion years from now, based on their simulations of the solar system
evolution under general relativity. That's just about as unlikely an event as
you can imagine. However, it's the amazing range and sequence of possibilities
uncovered by their simulations that are worth reading in the paper. In
meteorological simulations the possibilities are not as striking as this (the
butterfly effect notwithstanding).

Whether it's forecasting planetary trajectories or tomorrow's weather, the role
of simulations in helping us make sense of the chaos is worth appreciating
more. We happen to be a bit lucky with deterministic theories of fluid dynamics
and general relativity to the extent that they can be simulated with mainly the
numerical errors being compounded, and that reality happens to match our
theories exceedingly well in these cases. Simulations naturally lead us into a
cumulative trajectory, where we compose a grainy picture of reality after
numerous iterations. It's necessarily a slow grind, similar to what Dickinson
said, "Let Months dissolve in further Months - / And Years - exhale in Years
-".
