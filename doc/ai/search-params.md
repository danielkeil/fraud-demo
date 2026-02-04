# URL Search Params with useSearchParams

Reactive, schema-validated URL search params using `runed/kit`.

## Quick Start

### 1. Define Schema (Valibot)

```ts
// schemas.ts
import * as v from "valibot";

export const productSearchSchema = v.object({
    page: v.fallback(v.pipe(v.string(), v.transform(Number)), 1),
    filter: v.fallback(v.string(), ""),
    sort: v.fallback(v.picklist(["newest", "oldest", "price"]), "newest")
});
```

### 2. Use in Svelte Component

```svelte
<script lang="ts">
import { useSearchParams } from "runed/kit";
import { productSearchSchema } from "./schemas";

const params = useSearchParams(productSearchSchema);

// Read params (reactive)
const page = $derived(params.page);
const sort = $derived(params.sort);
</script>

<!-- Bind directly to inputs -->
<input type="text" bind:value={params.filter} />

<!-- Update programmatically -->
<button onclick={() => params.page = params.page + 1}>Next</button>
<button onclick={() => params.update({ page: 1, sort: "newest" })}>Reset</button>
```

### 3. Validate in Load Functions

```ts
// +page.ts or +page.server.ts
import { validateSearchParams } from "runed/kit";
import { productSearchSchema } from "./schemas";

export const load = async ({ url, fetch }) => {
    const { searchParams } = validateSearchParams(url, productSearchSchema);

    const response = await fetch(`/api/products?${searchParams.toString()}`);
    return { products: await response.json() };
};
```

## Key Options

```ts
const params = useSearchParams(schema, {
    showDefaults: false,    // Hide default values from URL (default)
    debounce: 300,          // Delay URL updates (ms) - useful for inputs
    pushHistory: false,     // Replace instead of push history entries
    compress: true,         // Compress all params into single `_data` param
    compressedParamName: "_data",  // Custom name for compressed param
    updateURL: true,        // Set false for in-memory only
    noScroll: true          // Preserve scroll position on URL change
});
```

## Methods

```ts
params.page = 2;                           // Update single param
params.update({ page: 1, sort: "newest" }); // Update multiple at once
params.reset();                            // Reset all to defaults
params.toURLSearchParams();                // Get as URLSearchParams
```

## Reactivity Limitation

**Top-level properties only.** Nested mutations don't trigger updates:

```ts
// Works
params.config = { theme: "dark" };
params.items = [...params.items, newItem];

// Does NOT work
params.config.theme = "dark";    // No update
params.items.push(newItem);      // No update
```

Always reassign the entire value for nested structures.

## Compression

When using `compress: true`, pass the same `compressedParamName` to `validateSearchParams`:

```ts
// Client
const params = useSearchParams(schema, {
    compress: true,
    compressedParamName: "_c"
});

// Server
const { searchParams } = validateSearchParams(url, schema, {
    compressedParamName: "_c"
});
```
