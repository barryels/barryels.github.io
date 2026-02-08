# Augmented Coding Patterns

Different UI implementation for https://github.com/lexler/augmented-coding-patterns

## Patterns

<ul>
{%- for item in collections['acp-pattern'] | sort(attribute='data.title') %}
  <li><a href="{{ item.url }}">{{ item.data.title or item.fileSlug | replace('-', ' ') | title }}</a></li>
{%- endfor %}
</ul>

## Anti-Patterns

<ul>
{%- for item in collections['acp-anti-pattern'] | sort(attribute='data.title') %}
  <li><a href="{{ item.url }}">{{ item.data.title or item.fileSlug | replace('-', ' ') | title }}</a></li>
{%- endfor %}
</ul>

## Obstacles

<ul>
{%- for item in collections['acp-obstacle'] | sort(attribute='data.title') %}
  <li><a href="{{ item.url }}">{{ item.data.title or item.fileSlug | replace('-', ' ') | title }}</a></li>
{%- endfor %}
</ul>
