---
layout: layouts/page.njk
title: "Senior Software Engineer @ MWI Animal Health United Kingdom"
description: "I am passionate about building better experiences for end users, and consequently helping businesses achieve their goals. Whether through technical innovation, solid user experience or internal process re-engineering, my focus is on continuous learning and consistent improvement over time. I have been fortunate enough to experience 20+ years of building solutions using a wide range of technologies within a multitude of business domains, most notably: healthcare, event management, education and insurance."
---

<div class="panels u-max-width">
  <section
    id="about"
    class="stack stack--spacing-2x panel inset--2x panel--about"
  >
    <p>
      Hi, I'm <span class="h3">Barry</span>, a creative technologist
      dedicated to enhancing user experiences and assisting businesses in
      reaching their objectives. With over 20 years of experience in various
      domains such as
      <span class="tag tag--inline tag--domain-healthcare">healthcare</span
      >,
      <span class="tag tag--inline tag--domain-event-management"
        >event management</span
      >,
      <span class="tag tag--inline tag--domain-education">education</span>,
      <span class="tag tag--inline tag--domain-insurance">insurance</span>
      and
      <span class="tag tag--inline tag--domain-e-commerce">e-commerce</span
      >, I've employed technologies like
      <span class="tag tag--inline tag--tech">React</span>,
      <span class="tag tag--inline tag--tech">Rails</span>,
      <span class="tag tag--inline tag--tech">Node.js</span>,
      <span class="tag tag--inline tag--tech">PHP</span>,
      <span class="tag tag--inline tag--tech">AWS</span> and
      <span class="tag tag--inline tag--tech"
        >many other frameworks / tools</span
      >. I strive to focus on perpetual learning, technical innovation and
      continuous improvement.
    </p>
  </section>

  <section
    class="stack stack--spacing-2x panel inset--2x panel--interests"
  >
    <h2 class="h4">Interests</h2>
    <p>Things I'm currently learning about or interested in:</p>
    <ul class="interests-list">
      <li class="interests-list__item">
        <a
          href="https://en.wikipedia.org/wiki/OODA_loop"
          rel="noreferrer"
          target="_blank"
          title="OODA (Observe, Orient, Decide, Act) loop"
          >OODA loop</a
        >
      </li>
      <li class="interests-list__item">
        <a
          href="https://en.wikipedia.org/wiki/Johari_window"
          rel="noreferrer"
          target="_blank"
          title="Johari window"
          >Johari window</a
        >
      </li>
      <li class="interests-list__item">
        <a
          href="https://en.wikipedia.org/wiki/Event_storming"
          rel="noreferrer"
          target="_blank"
          title="Event storming"
          >Event storming</a
        >
      </li>
    </ul>
  </section>

  <section
    class="stack stack--spacing-2x panel inset--2x panel--creation"
  >
    <h2 class="h4">Currently creating...</h2>
    <ul class="creation-list">
      {%- for creationItem in creation -%}
        <li>
          <a
            href="{{ creationItem.url }}"
            rel="noreferrer"
            target="_blank"
          >{{ creationItem.title }}
          </a>
        </li>
      {%- endfor -%}
    </ul>
  </section>

  <section
    class="stack stack--spacing-2x panel inset--2x panel--podcasts"
  >
    <h2 class="h4">Currently listening to...</h2>
    <ul class="podcasts-list">
      {%- for listeningToItem in listeningTo -%}
        <li class="podcasts-list__item">
          <a
            href="{{ listeningToItem.url }}"
            title="{{ listeningToItem.title }}"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src="{{ listeningToItem.image.url }}"
              alt="{{ listeningToItem.image.alt }}"
            />
          </a>
        </li>
      {%- endfor -%}
    </ul>
  </section>

  <section
    id="contact"
    class="stack stack--spacing-2x panel inset--2x panel--contact"
  >
    <p>You can find me here:</p>
    <ul class="contact-list">
      <li class="contact-list__item">
        <a
          href="https://www.linkedin.com/in/barryels/"
          rel="noreferrer"
          target="_blank"
          title="LinkedIn profile"
          ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"
            ></path>
          </svg>
        </a>
      </li>
      <li class="contact-list__item">
        <a
          href="https://github.com/barryels"
          rel="noreferrer"
          target="_blank"
          title="GitHub profile"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"
            ></path>
          </svg>
        </a>
      </li>
    </ul>
  </section>
</div>
