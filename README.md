# weddingInvitation 💒

모바일 청첩장 (React + Vite + TailwindCSS)

## 🎯 주요 기능

- **Hero 섹션**: 메인 사진, 결혼 날짜, D-day 카운트다운
- **Couple 섹션**: 신랑/신부 소개 및 연락처
- **Gallery 섹션**: Swiper.js를 활용한 사진 슬라이더
- **Location 섹션**: 카카오맵 연동 예식장 위치 및 교통 안내
- **Guestbook 섹션**: Supabase를 활용한 축하 메시지 CRUD
- **Footer**: 감사 인사 및 SNS 공유 기능

## 🛠️ 기술 스택

- React 19
- Vite
- TailwindCSS
- Supabase (guestbook)
- Swiper.js (image slider)
- gh-pages (GitHub Pages 배포)

## 📦 설치 및 실행

### 1. 패키지 설치
\`\`\`bash
npm install
\`\`\`

### 2. 환경 변수 설정

프로젝트 루트에 \`.env\` 파일을 생성하고 Supabase 정보를 입력하세요:

\`\`\`env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
\`\`\`

### 3. Supabase 테이블 생성

Supabase 대시보드에서 다음 SQL을 실행하세요:

\`\`\`sql
CREATE TABLE guestbook (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Row Level Security 활성화
ALTER TABLE guestbook ENABLE ROW LEVEL SECURITY;

-- 모든 사용자가 읽기 가능
CREATE POLICY "Anyone can read guestbook" ON guestbook
  FOR SELECT USING (true);

-- 모든 사용자가 메시지 작성 가능
CREATE POLICY "Anyone can insert guestbook" ON guestbook
  FOR INSERT WITH CHECK (true);

-- 모든 사용자가 삭제 가능 (실제 배포 시에는 보안 강화 필요)
CREATE POLICY "Anyone can delete guestbook" ON guestbook
  FOR DELETE USING (true);
\`\`\`

### 4. 개발 서버 실행
\`\`\`bash
npm run dev
\`\`\`

## 🖼️ 이미지 설정

\`public/images/\` 폴더에 다음 이미지를 추가하세요:

- \`hero.jpg\` - 메인 히어로 배경 이미지
- \`groom.jpg\` - 신랑 프로필 사진
- \`bride.jpg\` - 신부 프로필 사진
- \`gallery1.jpg\` ~ \`gallery6.jpg\` - 갤러리 슬라이더 이미지

## 🎨 커스터마이징

### 결혼 정보 수정

각 컴포넌트에서 더미 데이터를 실제 정보로 변경하세요:

- \`src/components/Hero.jsx\` - 결혼 날짜, 이름
- \`src/components/Couple.jsx\` - 신랑신부 정보, 부모님 성함
- \`src/components/Location.jsx\` - 예식장 정보, 카카오맵 URL
- \`src/components/Footer.jsx\` - 공유 메시지

### 색상 커스터마이징

\`tailwind.config.js\`에서 primary/secondary 색상을 변경할 수 있습니다:

\`\`\`js
colors: {
  primary: '#c9a770',    // 메인 색상
  secondary: '#8b7355',  // 보조 색상
}
\`\`\`

## 🚀 GitHub Pages 배포

### 1. GitHub 저장소 생성
GitHub에서 새 저장소를 생성합니다.

### 2. vite.config.js 수정
\`base\` 값을 저장소 이름으로 변경하세요:

\`\`\`js
export default defineConfig({
  plugins: [react()],
  base: '/your-repository-name/',
})
\`\`\`

### 3. 배포 실행
\`\`\`bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/repository-name.git
git push -u origin main

npm run deploy
\`\`\`

배포 후 \`https://username.github.io/repository-name/\`에서 확인할 수 있습니다.

## 📝 추가 기능 제안

- 카카오톡 공유 SDK 연동
- 참석 여부 RSVP 기능
- 계좌번호 안내 (축의금)
- 방명록 비밀번호 기능
- 관리자 페이지

## 📄 라이선스

MIT License

## 💝 감사합니다

행복한 결혼을 축하드립니다! 🎉
