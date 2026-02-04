# Document Fraud Review Demo

A demo application for reviewing documents and detecting potential fraud, built with SvelteKit and Svelte 5.

**[Live Demo →](https://fraud-demo.keil.dev/)**

![Document Viewer Screenshot](doc/screenshot.png)

## About This Project

This demo was created in roughly eight hours and includes a few pre-existing components and layouts. The goal was to recreate what I normally build in React (typically using the TanStack ecosystem) using SvelteKit + Svelte 5 instead—and to explore what's changed in Svelte over the last six months.

The application lets users review documents for fraud. A mocked API returns OCR results from a document and flags anomalies for the user to inspect.

## What We Used

| Category | Technology |
|----------|------------|
| Framework | [SvelteKit](https://svelte.dev/docs/kit) + [Svelte 5](https://svelte.dev/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Components | [Bits UI](https://bits-ui.com/) |
| Validation | [Valibot](https://valibot.dev/) |
| Utilities | [Runed](https://runed.dev/) |
| Icons | [Lucide Svelte](https://lucide.dev/) |
| Data Fetching | Svelte's [remote functions](https://svelte.dev/docs/kit/load#Remote-functions) (`query`) |

Special thanks to **Bits UI** for making accessible components straightforward to build.

## Architecture

Some of the decisions here might feel like overkill for a demo. That's intentional—if this were the foundation for a real application with multiple developers, having a clear, well-structured front-end architecture becomes important.

This isn't presented as "the right way" to structure a Svelte app. It's one approach I've used successfully on larger projects. Whether it fits your situation depends on your team, your timeline, and how much the codebase is expected to grow.

### Layers

```
src/lib/
├── designSystem/      # Reusable UI building blocks
│   ├── primitives/    # Button, Toggle, etc.
│   ├── page/          # Page layout components
│   └── colorPicker/   # Specialized components
│
├── appShell/          # Application structure
│   ├── layout/        # Layout wrappers
│   ├── sidebar/       # Navigation sidebar
│   └── navbar/        # Top navigation
│
└── module/            # Feature modules
    └── fraud/
        └── document/
            ├── client/   # UI components
            ├── server/   # Data fetching, API
            └── domain/   # Schemas, types, business logic
```

**Design System** — Contains only reusable UI components with no knowledge of features. These can be extracted to a separate package if needed.

**App Shell** — Defines the application's layout and navigation structure. It can use the design system and import from feature modules.

**Feature Modules** — Each feature is self-contained with three layers:
- `client/` — UI components specific to this feature
- `server/` — Server-side logic and data fetching
- `domain/` — Schemas, types, and business rules

This separation keeps feature code isolated. Multiple people can work on different features without stepping on each other.

### Key Patterns

**URL State with Schema Validation**

Viewer settings (OCR visibility, colors, zoom) are stored in URL search params using `useSearchParams` from Runed, validated with Valibot schemas. This makes the viewer state shareable and bookmarkable.

```ts
const searchParams = useSearchParams(searchParamsSchema, {
  showDefaults: false,
  noScroll: true
});
```

**Remote Functions**

Data fetching uses Svelte's `query` function, which runs on the server and handles serialization automatically.

```ts
export const getDocument = query(v.string(), async (id) => {
  // runs on server, result sent to client
});
```

**Accessibility**

Accessibility was a priority throughout. Bits UI provides accessible primitives out of the box. Anomaly overlays are sorted in reading order so keyboard navigation follows a logical flow. Keyboard shortcuts are available for common actions.

## AI-Assisted Development

This project was built with AI assistance—not as a moonshot experiment, but as a practical way to move faster. The architecture and structure are not AI-generated; they come from patterns I've used on previous projects.

**[Claude Code](https://claude.ai/code)** (Opus 4.5) handled some of the coding. I added AI-specific documentation covering newer SvelteKit features like remote functions—this helps the model stay current with APIs that may have changed since its training cutoff. I also provided reference implementations and architectural guidance so the AI could follow established patterns rather than invent its own.

For planning, I used a **custom agent built on the ChatGPT API**. The workflow involved refining initial ideas, building base prompts, and researching outside of AI tools. Once the direction was clear, I handed it off to Claude Code for implementation—followed by 2-3 rounds of refinement and a final cleanup pass.

## Running Locally

```bash
pnpm install
pnpm dev
```

## Final Thoughts

It was fun to build something like this outside the usual React + TanStack setup. Svelte 5's runes (`$state`, `$derived`, `$props`) feel like a natural evolution, and the component model remains refreshingly simple compared to some alternatives.
