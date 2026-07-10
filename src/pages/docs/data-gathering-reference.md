---
title: Data Gathering Reference
description: Quick reference, code snippets, and technology notes for FileMaker web viewer data workflows.
---

## Quick Reference: Two FileMaker Script Conventions

These two scripts show up throughout the data-gathering journey.

| Script | Purpose | Call shape |
| --- | --- | --- |
| **`Fetch Data`** | Reads data | `{ type, query }` - `type` identifies which widget is calling (the script is shared across widgets); `query` carries filter/search criteria, omitted for load-all. One exception: `{ type: "load" }` fetches a config object for self-booting widgets. |
| **`WV Event`** | Sends something back to FileMaker | `{ event, data }` - `event` names what happened, FileMaker branches on it. Fire-and-forget via `FileMaker.PerformScript`, or fire-and-wait via `FMGofer.PerformScript(...).json()` when the widget needs FileMaker's result back. |

## Core Code Snippets

```js
// Fetch Data - reading, via FMGofer (returns a real Promise)
const data = await FMGofer.PerformScript('Fetch Data', {
  type: 'companies',
  query,
}).json()
```

```js
// WV Event - fire-and-forget (no response needed)
FileMaker.PerformScript(
  'WV Event',
  JSON.stringify({ event: 'recordSelected', data: { id: 42 } })
)
```

```js
// WV Event - fire-and-wait (need FileMaker's result back)
const result = await FMGofer.PerformScript('WV Event', {
  event: 'checkout',
  data: cart,
}).json()
```

## Question-Specific Code

### Data Scope Query Example

```js
import { useQuery } from '@tanstack/react-query'
import FMGofer from 'fm-gofer'

const TYPE = 'companies'

// query is optional: pass filter criteria to narrow results,
// or call with no argument to load everything.
export function useCompanies(query) {
  return useQuery({
    queryKey: ['companies', query],
    queryFn: () => FMGofer.PerformScript('Fetch Data', { type: TYPE, query }).json(),
  })
}
```

### Boot Pattern Example

```jsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()
const root = createRoot(document.getElementById('root'))

root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
)
```

```jsx
function App() {
  const { data, isPending, isError } = useCompanies()

  return (
    <>
      <h1>Companies</h1>
      {isPending && <SkeletonCards count={4} />}
      {isError && <ErrorCallout />}
      {data && <CompanyList companies={data} />}
    </>
  )
}
```

### Refresh Strategy Example

```js
async function loadCompanies() {
  const companies = await FMGofer.PerformScript('Fetch Data', {
    type: 'companies',
  }).json()
  render(companies)
}
```

```js
export function useCompanies() {
  return useQuery({
    queryKey: ['companies'],
    queryFn: () => FMGofer.PerformScript('Fetch Data', { type: 'companies' }).json(),
    refetchInterval: 30_000,
  })
}
```

## Technologies and Tools

What is actually running under the hood? The pieces used depend on which kind of widget you are building.

### Core, in every widget

| Technology | Purpose |
| --- | --- |
| **Vite** | Dev server + build tool behind every widget scaffold - instant reload while developing (`npm start` -> `localhost:1234`), and produces the bundle uploaded into the FileMaker web viewer. |
| **`FileMaker.PerformScript`** | The native bridge built into FileMaker's web viewer that calls a FileMaker script from JS. Used for fire-and-forget calls where no response is needed. |
| **`fm-gofer` (FMGofer)** | A wrapper around `FileMaker.PerformScript` that returns a real JS Promise, so you can `await` a FileMaker script result and call `.json()` on it. This makes `Fetch Data` calls and fire-and-wait `WV Event` calls possible. |

### Simple or practice widgets - vanilla JS

| Technology | Purpose |
| --- | --- |
| Vanilla JS + DOM | For widgets simple enough not to need a framework. |
| **ApexCharts** | Charting library - line, bar, donut, sparkline, and more. |
| **DataTables** | Sortable, searchable, paginated tables. |

### Complex, data-fetching widgets - React

| Technology | Purpose |
| --- | --- |
| **React** | Renders the widget UI declaratively and re-renders automatically as data and state change. |
| **TanStack Query** (`@tanstack/react-query`) | Manages data-fetching lifecycle: loading and error states, caching, and refetching via `useQuery` hooks. This is the widget state when the state is data. |
| **Tailwind CSS v4** | Utility-first styling, already wired into the scaffold with a single `@import "tailwindcss"`. |

### Scaffolds (starting points)

| Repo | Use for |
| --- | --- |
| `js-dev-environment-new` | Lightweight vanilla-JS scaffold for simple widgets and practice/learning. |
| `js-dev-react` | Full React + TanStack Query scaffold for complex, reactive widgets. Ships with `fm-gofer` and `@tanstack/react-query` installed. |

### npm scripts (same across scaffolds)

| Command | What it does |
| --- | --- |
| `npm start` | Dev server at `http://localhost:1234/` |
| `npm run deploy-to-fm` | Build + upload to FileMaker |
| `npm run upload` | Upload only, no rebuild |
| `npm run generate-script-steps` | Outputs exact FileMaker script steps to build `Fetch Data` |
