import { supabase } from '@/lib/supabase'

export async function getPlans() {
  const { data } = await supabase.from('plans').select()
  return data ?? []
}
