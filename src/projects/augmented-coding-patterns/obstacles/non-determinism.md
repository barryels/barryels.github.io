---
authors: [lada_kesseler]
---

# Non-Determinism (Obstacle)

## Description

AI outputs are non-deterministic. The same input may yield different results across runs.  
Responses can vary in quality: sometimes worse, sometimes better.

## Impact

Unlike deterministic systems where same input always produces same output:

- Results are not guaranteed to be repeatable.
- Reliability is unpredictable — retries may diverge significantly.

## Related

- <a rel="solved_by" href="/projects/augmented-coding-patterns/patterns/knowledge-checkpoint">Knowledge Checkpoint</a>
- <a rel="solved_by" href="/projects/augmented-coding-patterns/patterns/offload-deterministic">Offload Deterministic</a>
- <a rel="solved_by" href="/projects/augmented-coding-patterns/patterns/parallel-implementations">Parallel Implementations</a>
- <a rel="solved_by" href="/projects/augmented-coding-patterns/patterns/take-all-paths">Take All Paths</a>
- <a rel="solved_by" href="/projects/augmented-coding-patterns/patterns/constrained-tests">Constrained Tests</a>
