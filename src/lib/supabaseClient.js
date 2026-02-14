import { createClient } from '@supabase/supabase-js'

// Supabase 설정
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// 환경 변수가 없으면 더미 클라이언트 생성 (에러 방지)
let supabase
if (supabaseUrl && supabaseAnonKey && supabaseUrl !== 'https://your-project-id.supabase.co') {
  supabase = createClient(supabaseUrl, supabaseAnonKey)
} else {
  // 더미 클라이언트 (에러 방지용)
  supabase = {
    from: () => ({
      select: () => Promise.resolve({ data: [], error: null }),
      insert: () => Promise.resolve({ data: null, error: new Error('Supabase not configured') }),
      delete: () => Promise.resolve({ data: null, error: new Error('Supabase not configured') }),
      order: () => ({
        select: () => Promise.resolve({ data: [], error: null })
      })
    })
  }
}

export { supabase }

