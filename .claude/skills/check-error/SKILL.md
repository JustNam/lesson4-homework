---
name: check-error
description: Use when the student reports an error or the Next.js dev server is crashing — reads server logs and returns a plain, human-friendly error message without technical root cause
---

# Check Error

Read the Next.js server output and translate the error into one plain sentence a beginner can understand.

## Rules

- Show the **original error** (one line, verbatim)
- Follow with a **plain sentence** a beginner can understand
- No stack traces, no file paths, no technical jargon in the plain sentence

## Format

```
Error: <original error message>
What it means: <one plain sentence>
```

## Examples

```
Error: TypeError: Cannot read properties of undefined (reading 'map')
What it means: You're trying to use a list that doesn't exist yet.

Error: SyntaxError: Unexpected token
What it means: There's a typo or missing character in your code.

Error: Module not found: Can't resolve './Foo'
What it means: You're importing something that doesn't exist.

Error: React Hook useState is called conditionally
What it means: You put a useState inside an if — hooks must always run in the same order.
```
