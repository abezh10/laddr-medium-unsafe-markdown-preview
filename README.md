# Unsafe Markdown Preview

- Category: Secure
- Topic: Input Safety
- Difficulty: Medium

## Overview
This sample repository is set up for a medium secure exercise in the input safety track. The starter code is intentionally lightweight: it gives Sandpack something meaningful to render or inspect, but it still leaves the real evaluation work in place so a candidate has to tighten the implementation without removing the intended workflow.

## Exercise Summary
Markdown preview renders unsafe user content and allows script injection. Sanitize dangerous content without breaking normal formatting behavior.

## Starter State
The current scaffold keeps the requested folder layout intact and includes small task-adjacent starter implementations. Frontend files render simple placeholder UI, while routes, services, hooks, utilities, and data files expose minimal sample data or placeholder behavior without solving the exercise for the learner.

## Repo Files
- `client/src/components/MarkdownPreview.tsx`
- `client/src/pages/ArticleEditorPage.tsx`
- `client/src/utils/markdown.ts`
- `package.json`

## Likely Change Areas
- `client/src/components`
- `client/src/pages`
- `client/src/utils`

## Sandbox Notes
These files are intentionally small and preview-friendly. They should render a lightweight surface where that makes sense, while still leaving the real build, debug, refactor, security, or migration work undone.
