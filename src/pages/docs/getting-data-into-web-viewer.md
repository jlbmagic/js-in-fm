---
title: Getting Data Into the Web Viewer
description: Questions and practical guidance for moving FileMaker data into a web viewer widget.
---

Getting data into the FileMaker Web Viewer.

## Purpose

- To show the struggles and successes I have had in getting data in.
- To inform your intelligence about the various methods and factors.
- To pose questions and provide details and tools that posit an answer.

For quick reference details, tooling notes, and code snippets, see [Data Gathering Reference](/docs/data-gathering-reference).

---


## 1. What is the data we are talking about?

### Points

- The biggest thing to consider is how much data will be sent into the web viewer.
- Data complexity can affect how you need to fetch it.
- JS inside the web viewer can handle large sets of data; getting it in there is usually the slowest part.
- Some gather methods take a long time or return a truncated set of records.
- Is caching worth it for this widget?
- Data size and complexity often decide the build approach: a simple widget (vanilla JS + a library like ApexCharts or DataTables) for small, mostly self-contained data, versus a complex, reactive widget (React + TanStack Query) for live, evolving FileMaker data.

### Examples

Example coming soon.

### Images


### Inform Your Intelligence

> Look at your actual Fetch Data result, real JSON not a guess, and size it up: record count, nesting, and how much the widget truly needs to render. That answer alone often decides whether you are building a five-minute vanilla-JS widget or a full React + TanStack Query build.

---

## 2. Are we loading all the data or just some of it?

### Points

- There is probably never a time when the user needs all the data.
- Tables can have pages, filters, and sorts that affect what data needs to be shown.
- It is possible the user will never need to see most of the data.
- Parent record and some child record data may be enough.
- This is the data scope question: if the widget is not loading everything, it needs to tell `Fetch Data` what to narrow down to. That is what the `query` property is for, sent alongside `type`.

### Examples

Example coming soon.

### Images


### Inform Your Intelligence

> Describe what the user is trying to accomplish, then shape the `query` property you send to `Fetch Data`. Narrowing scope early in FileMaker find logic beats fetching everything and filtering in JS afterward.

---

## 3. What is the user experience?

### Points

- We can construct the web viewer to load structure first, then fetch data.
- Since finding is the slowest part, show progress while it runs.
- Use modern web techniques to provide a skeleton state.
- Some data may need to be available right away as a config object.
- Websites load this way: render now, fill in as data arrives.
- This is also where boot mode matters: a self-booting widget renders immediately and fetches config via `{ type: "load" }`; a load-by-script widget waits for FileMaker to call `loadApp(config)` with config in hand.
- The title should render immediately, with skeleton placeholders while loading, and a clear error state if fetch fails.

### Examples

Example coming soon.

### Inform Your Intelligence

> Talk through the two boot modes, self-booting vs load-by-script, and whether the widget needs a separate config object. Getting this right up front avoids rebuilding the loading sequence later.

---

## 4. How often does data need to be refreshed?

### Points

- Data can be static.
- Data can be refreshed often:
  1. Plain JS
  2. React + TanStack Query
- Sometimes records are added by other users; refreshing eventually picks those up.
- This maps to two build paths: a static or rarely changing widget can use a one-shot `FMGofer.PerformScript(...).json()` call; a widget that must stay current (reacting to new records, refetching, caching) is what `useQuery` hooks are for.

### Examples

Example coming soon.

### Inform Your Intelligence

> Decide how often the underlying FileMaker data changes and who else might edit it. That is the deciding factor between a one-shot fetch and a `useQuery` hook.

---

## 5. In FileMaker, what are good ways to collect the data?

### Points

- The `Fetch Data` script should exit with a plain JSON array of records: `{ recordId, fieldData, portalData }`, including related portal data the widget needs.
- `npm run generate-script-steps` outputs exact FileMaker script steps to build this, so script shape stays aligned with widget expectations.
- Open item: expand with your FileMaker-side techniques, like ExecuteSQL or branching by `type`.

### Examples

Example coming soon.

### Inform Your Intelligence

> Once your widget's `Fetch Data` shape is settled, run `npm run generate-script-steps` and walk those results into your FileMaker script. It keeps FileMaker and JS sides from drifting apart.
