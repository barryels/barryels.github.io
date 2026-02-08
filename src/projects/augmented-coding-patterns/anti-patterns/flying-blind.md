---
authors: [ivett_ordog]
---

# Flying Blind (Anti-pattern)

## Problem

Engineers can't keep up with reviewing AI-generated code, so they give up and fall back to excessive vibe coding.

## What Goes Wrong

Without review, bugs accumulate silently. Code quality degrades. Technical debt piles up. Nobody understands the codebase anymore. When things inevitably break, debugging is nearly impossible because no one knows what the AI built or why.

## Example

Engineer asks AI to "add user authentication" and accepts whatever gets generated without review. The AI adds unnecessary dependencies, creates security vulnerabilities, or implements patterns inconsistent with the codebase. It "works" in the moment but creates problems later.

## Solution

Use Active Partner to maintain collaboration and understanding throughout development. Use Feedback Loop for quick verification cycles that catch issues early. Use Constrained Tests to ensure validation happens automatically without manual review overhead.

## Related

- <a rel="caused_by" href="/projects/augmented-coding-patterns/obstacles/keeping-up">Keeping Up</a>
- <a rel="solved_by" href="/projects/augmented-coding-patterns/patterns/active-partner">Active Partner</a>
- <a rel="solved_by" href="/projects/augmented-coding-patterns/patterns/feedback-loop">Feedback Loop</a>
- <a rel="solved_by" href="/projects/augmented-coding-patterns/patterns/constrained-tests">Constrained Tests</a>
