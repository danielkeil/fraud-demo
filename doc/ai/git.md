## Git Commit Convention

Use **Conventional Commits** for all commit messages.

### Hard Rules

- **Never auto-push**: User will push manually
- **Never commit without approval**: Always ask user to approve the commit message first
- **No incomplete work**: If tests fail or work is incomplete, explain what must be fixed first
- **Commit size limit**: If changes can't be summarized in 2-6 bullets, propose splitting into multiple commits

### Commit Message Format

```
<type>(<scope>): <subject>

<body>
```

### Types

| Type       | Description                                       |
|------------|---------------------------------------------------|
| `feat`     | New behavior or capability                        |
| `fix`      | Bug fix                                           |
| `refactor` | Internal change, no behavior change               |
| `perf`     | Performance improvement                           |
| `docs`     | Documentation only                                |
| `test`     | Tests only                                        |
| `chore`    | Tooling, deps, config                             |
| `build`    | Build system or dependencies                      |
| `ci`       | CI/CD pipelines                                   |
| `ai`       | AI config (claude.md, skills, commands, ai docs)  |

### Rules

- **Subject**: Imperative mood, max 256 chars (e.g., "add user authentication")
- **Scope**: Optional, in parentheses (e.g., `feat(pricing)`, `fix(auth)`)
- **Body**: 2-10 bullet points describing key changes

### Workflow

1. After completing work, propose commit message to user
2. Wait for explicit user approval
3. Only run `git commit` after approval
4. If commit too large, propose split and ask user how to proceed

### Examples

```
fix(auth): prevent session timeout during long form edits

- Extend session refresh interval to 30 minutes
- Add activity-based session renewal

```