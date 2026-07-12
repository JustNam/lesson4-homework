'use client'

import { Box } from '@mui/material'
import PlanList from '@/components/PlanList'
import PlanDetail from '@/components/PlanDetail'

// ─── App ─────────────────────────────────────────────────────────────────────
// PlanList and PlanDetail sit side by side but don't talk to each other.

export default function App() {

  // ── STEP 2: Lift state up ─────────────────────────────────────────────────
  // Move selectedPlan here so both components can access it.
  // Then pass it down as props.


  // ─────────────────────────────────────────────────────────────────────────

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <PlanList />        {/* STEP 3: pass onSelect so it can report up */}
      <PlanDetail />      {/* STEP 3: pass plan so it knows what to show */}
    </Box>
  )
}
