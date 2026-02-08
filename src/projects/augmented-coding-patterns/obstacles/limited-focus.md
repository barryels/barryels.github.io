---
authors: [lada_kesseler]
---

# Limited Focus (Obstacle)

## Description

LLMs have limited attention. Everything you load into context competes for that attention.

When too much is loaded at once, the model either:

- Dilutes attention across everything (stays shallow)
- Fixates on the wrong parts (misses what matters)

## Impact

- Worse performance on all tasks when context is too broad
- Even explicit ground rules get ignored
- A longer, focused context outperforms a shorter, scattered one

## Related

- <a rel="caused_by" href="../../anti-patterns/distracted-agent">Distracted Agent</a>
- <a rel="solved_by" href="../../patterns/chain-of-small-steps">Chain Of Small Steps</a>
- <a rel="solved_by" href="../../patterns/chunking">Chunking</a>
- <a rel="solved_by" href="../../patterns/focused-agent">Focused Agent</a>
- <a rel="solved_by" href="../../patterns/reference-docs">Reference Docs</a>
