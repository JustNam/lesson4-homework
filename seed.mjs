import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://rzisaikmdwsdxtioefwk.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6aXNhaWttZHdzZHh0aW9lZndrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MzUxNzg3NCwiZXhwIjoyMDk5MDkzODc0fQ.wl6NIIeHGcsTo7Q3qFXHuYWcffgjwf3ihhFL_QUllU8'
)

const plans = [
  {
    title: 'Validate customer onboarding flow',
    questions: [
      'Walk me through the first time you signed up for a new tool at work.',
      'What made you decide to keep using it after the first session?',
      'Where did you get stuck or feel uncertain during setup?',
      'What would have made the first week easier?',
    ],
  },
  {
    title: 'Explore pain points in weekly reporting',
    questions: [
      'How do you currently put together your weekly report?',
      'What takes the longest part of that process?',
      'Who reads your reports, and do you get useful feedback?',
      'If you could remove one step entirely, what would it be?',
    ],
  },
  {
    title: 'Understand hiring manager workflow',
    questions: [
      'Can you walk me through your last hire from job post to offer?',
      'At what point do candidates usually drop out, and why?',
      'How do you coordinate feedback across the interview panel?',
      'What information do you wish you had earlier in the process?',
    ],
  },
]

const { data, error } = await supabase.from('plans').insert(plans).select()

if (error) {
  console.error('Seed failed:', error.message)
} else {
  console.log(`Seeded ${data.length} plans.`)
}
