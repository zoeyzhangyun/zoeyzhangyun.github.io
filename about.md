---
layout: default
title: About
permalink: /about/
---
<section class="listing about" aria-labelledby="about-title">
  <div><span class="eyebrow">About</span><h1 id="about-title">{{ site.data.profile.aboutFirst | escape }}<br><em>{{ site.data.profile.aboutSecond | escape }}</em></h1></div>
  {% include about-summary.html %}
</section>
