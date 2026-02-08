---
authors: [lada_kesseler]
---

# Degrades Under Complexity (Obstacle)

## Description

AI struggles with complex, multi-step tasks that require holding many moving pieces in mind simultaneously.
Reliability degrades as complexity increases, either through larger steps or larger artifacts.
Small errors accumulate, and quality drops when working with large codebases or long documents.

## Impact

- Complex requests often fail or produce incorrect results
- Effectiveness degrades with the size of the codebase
- AI loses track of requirements, constraints, or context
- Multi-step transformations attempted in one shot are especially error-prone
- Small errors accumulate, code quality and system reliability degrade rapidly

## Related

- <a rel="caused_by" href="../../anti-patterns/sunk-cost">Sunk Cost</a>
- <a rel="solved_by" href="../../patterns/canary-in-the-code-mine">Canary In The Code Mine</a>
- <a rel="solved_by" href="../../patterns/chain-of-small-steps">Chain Of Small Steps</a>
- <a rel="solved_by" href="../../patterns/chunking">Chunking</a>
