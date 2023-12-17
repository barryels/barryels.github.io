---
layout: layouts/page.njk
title: "Blog"
description: "I am passionate about building better experiences for end users, and consequently helping businesses achieve their goals. Whether through technical innovation, solid user experience or internal process re-engineering, my focus is on continuous learning and consistent improvement over time. I have been fortunate enough to experience 20+ years of building solutions using a wide range of technologies within a multitude of business domains, most notably: healthcare, event management, education and insurance."
---

<section class="u-max-width">
  <ul>
    {%- for post in collections.post -%}
      <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
    {%- endfor -%}
  </ul>
</section>
