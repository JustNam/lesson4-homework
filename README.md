# Lesson 3 — Talking to the World

## What you're building

A two-panel plan viewer. The left panel lists plans fetched from a database. The right panel shows the details of whichever plan you clicked.

Right now the two panels don't talk to each other — clicking a plan does nothing. Your job is to connect them.

---

## The exercise

There are 3 steps, each marked in the code with a comment.

**STEP 1 — Fetch the data** (`components/PlanList.tsx`)
Add a `useEffect` that runs once on mount. Call `getPlans()` and store the result in `plans`.

**STEP 2 — Lift state up** (`app/page.tsx`)
Move `selectedPlan` from `PlanList` into `App`, so both panels can access it.

**STEP 3 — Pass props** (`app/page.tsx`)
- Pass `onSelect` to `PlanList` so it can tell `App` which plan was clicked
- Pass `plan` to `PlanDetail` so it knows what to show

---

## Project structure

```
app/page.tsx          ← App — owns the shared state
components/
  PlanList.tsx        ← shows the list, reports selection up
  PlanDetail.tsx      ← shows the selected plan's details
services/
  plans.ts            ← getPlans() — fetches from the database
lib/
  supabase.ts         ← database client (don't touch this)
```

`services/plans.ts` is the boundary between your UI and the database. Components call `getPlans()` — they don't need to know anything about Supabase.

---

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
