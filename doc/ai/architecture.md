# Frontend Architecture Overview

## Design System

Location: `src/lib/designSystem/`

- Contains only reusable UI building blocks
- Must not depend on any feature / module code
- May depend only on other design system parts
- Examples: menu, select field, table, panel, page components

## App Shell

Location: `src/lib/appShell/`

- Defines the basic structure of the application (layout, routing frame, global setup)
- Is allowed to use the design system and feature modules
- Contains: sidebar, navbar, layout components

## Feature Modules

Location: `src/lib/module/<feature-name>/`

- Feature-specific code lives under `module/<feature-name>/`
- Each feature has three layers:
  - `client/` - UI components, depends only on its own feature and shared parts
  - `server/` - Server-side logic, API handlers
  - `domain/` - Business logic, entities, value objects
- Shared feature-independent code lives under `module/_shared`

### Simple Features (no sub-features)

For features with a single aggregate, use flat structure:

```
module/<feature-name>/
├── client/
├── server/
└── domain/
```

### Complex Features (with sub-features)

For features with multiple aggregates, add a sub-feature level:

```
module/<feature-name>/
└── <sub-feature>/
    ├── client/
    ├── server/
    └── domain/
```

## DDD Mapping

If you are familiar with Domain-Driven Design:

- A **feature** corresponds to a _bounded context_
- A **sub-feature** corresponds to an _aggregate_
- Simple features (single aggregate) use the feature name as the aggregate

## Structure Goal

- Clear separation between UI building blocks, app structure, and features
- Allows multiple people to work in parallel without stepping on each other
- Keeps feature code isolated and easier to reason about

## Directory Structure

```
src/lib/
├── designSystem/          # Reusable UI components
│   ├── primitives/        # Basic elements (Button, Input, etc.)
│   ├── page/              # Page layout components
│   └── toast/             # Notification components
├── appShell/              # App structure
│   ├── layout/            # Layout components
│   ├── sidebar/           # Sidebar navigation
│   └── navbar/            # Top navigation
└── module/                # Feature modules
    ├── _shared/           # Shared utilities across features
    ├── <simple-feature>/  # Simple feature (single aggregate)
    │   ├── client/
    │   ├── server/
    │   └── domain/
    └── <complex-feature>/ # Complex feature (multiple aggregates)
        └── <sub-feature>/
            ├── client/
            ├── server/
            └── domain/
```
