import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // 개발 환경에서는 '/', 프로덕션에서는 GitHub Pages 경로 사용
  base: mode === 'production' ? '/weddingInvitation/' : '/',
}))
