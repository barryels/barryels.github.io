---
authors: [lada_kesseler]
---

# Ground Rules

## Problem
You need essential information in every session without re-explaining or remembering to load it.

## Pattern
Knowledge documents that auto-load when you open a session. They're always in context.

Put only your most important things here - the things you always want the AI to know. Can be scoped hierarchically:
- **User level**: Your preferred communication style, tools available in all conversations
- **Project level**: Team standards and crucial preferences

Contains: behaviors, tools, context, links - whatever is essential for each scope

## Example
- `~/.claude/CLAUDE.md`:
  - "Prefer simple solutions", 
  - "Tell me something I need to know even if I don't want to hear it", 
  - "use ./speak.sh tool to talk to me outloud when you warn me about issues"
- `project/CLAUDE.md` 
  - "Use TypeScript strict mode, all functions must have explicit return types"
  - "always run tests via ./test.sh" 
  - links to key places in the repository

## Related

- <a rel="uses" href="/patterns/knowledge-document">Knowledge Document</a>
- <a rel="used_by" href="/patterns/context-management">Context Management</a>
- <a rel="solves" href="/obstacles/cannot-learn">Cannot Learn</a>