---
authors: [lada_kesseler]
---

# Context Management

## Problem

AI has no persistent memory and context degrades over time.

## Pattern

Treat context as a scarce, degrading resource that requires active management.
You have only two operations: **append to context** (prompt it) and **reset it** (start a new conversation). Everything you do with AI works within this constraint.

## Related

- <a rel="uses" href="/projects/augmented-coding-patterns/patterns/ground-rules">Ground Rules</a>
- <a rel="uses" href="/projects/augmented-coding-patterns/patterns/reference-docs">Reference Docs</a>
- <a rel="uses" href="/projects/augmented-coding-patterns/patterns/knowledge-document">Knowledge Document</a>
- <a rel="uses" href="/projects/augmented-coding-patterns/patterns/extract-knowledge">Extract Knowledge</a>
- <a rel="uses" href="/projects/augmented-coding-patterns/patterns/knowledge-checkpoint">Knowledge Checkpoint</a>
- <a rel="uses" href="/projects/augmented-coding-patterns/patterns/focused-agent">Focused Agent</a>
- <a rel="uses" href="/projects/augmented-coding-patterns/patterns/semantic-zoom">Semantic Zoom</a>
- <a rel="uses" href="/projects/augmented-coding-patterns/patterns/noise-cancellation">Noise Cancellation</a>
- <a rel="solves" href="/projects/augmented-coding-patterns/obstacles/cannot-learn">Cannot Learn</a>
- <a rel="solves" href="/projects/augmented-coding-patterns/obstacles/context-rot">Context Rot</a>
- <a rel="solves" href="/projects/augmented-coding-patterns/obstacles/limited-context-window">Limited Context Window</a>
