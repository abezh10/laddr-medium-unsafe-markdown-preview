# Unsafe Markdown Preview

- Category: Secure / Input Safety
- Difficulty: Medium

## Contains
- `client/src/pages/ArticleEditorPage.tsx`
- `client/src/components/MarkdownPreview.tsx`
- `client/src/utils/markdown.ts`
- `package.json`

## Prompt
Markdown preview renders unsafe user content and allows script injection. Sanitize dangerous content without breaking normal formatting behavior.

## Likely Change Dirs
- `client/src/pages`
- `client/src/components`
- `client/src/utils`
