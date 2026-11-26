# CLAUDE.md

## Delegation
- Delegate every repo search and test run to the Haiku 5.5 subagents to keep the main context small: `search` maps the repo, `grep` finds call sites, `audit` checks the diff and runs lint/build.
