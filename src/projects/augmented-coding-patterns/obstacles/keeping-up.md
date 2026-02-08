---
authors: [ivett_ordog]
---

# Keeping up (Obstacle)

## Description
AI coding agents generate code and take actions faster than humans can review and understand it. The code is often verbose, and attempting to thoroughly understand every change becomes a bottleneck. The AI isn't optimized for bringing humans along - it focuses on speed and quantity of generation over comprehensibility.

## Impact
Engineers face a choice between speed and understanding. Since AI-generated code is typically lower quality than human-written code, the time saved on creation is lost on verification. As a result the potential productivity gain is not realized - or worse, the engineer would have been faster without AI. The temptation is to skip review entirely, leading to codebases where nobody understands what the AI built.

## Related

- <a rel="causes" href="/anti-patterns/flying-blind">Flying Blind</a>
- <a rel="solved_by" href="/patterns/active-partner">Active Partner</a>
- <a rel="solved_by" href="/patterns/feedback-loop">Feedback Loop</a>
- <a rel="solved_by" href="/patterns/constrained-tests">Constrained Tests</a>
