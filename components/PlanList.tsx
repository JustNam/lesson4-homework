'use client'

import { useState, useEffect } from 'react'
import { List, ListItemButton } from '@mui/material'
import { getPlans } from '@/services/plans'

function PlanList() {
  const [plans, setPlans] = useState([])
  const [selectedPlan, setSelectedPlan] = useState(null)

  // ── STEP 1: Fetch plans ────────────────────────────────────────────────────
  // Add a useEffect here that runs once on mount.
  // Call getPlans() and store the result in plans.


  // ──────────────────────────────────────────────────────────────────────────

  return (
    <List sx={{ width: 280, borderRight: '1px solid #eee' }}>
      {plans.map((p) => (
        <ListItemButton
          key={p.id}
          selected={selectedPlan?.id === p.id}
          onClick={() => setSelectedPlan(p)}
        >
          {p.title}
        </ListItemButton>
      ))}
    </List>
  )
}

export default PlanList
