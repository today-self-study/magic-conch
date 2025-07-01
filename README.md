# 마법의 소라고동 (Magic Conch)

🐚 **마법의 소라고동**은 스폰지밥 애니메이션의 마법의 소라고동처럼, 사용자가 질문을 입력하면 랜덤하게 대답(예/아니오/명언 등)을 해주는 웹 서비스입니다. 질문과 응답은 암호화되어 URL로 공유할 수 있습니다.

[👉 서비스 바로가기](https://today-self-study.github.io/magic-conch/)

---

## 주요 기능
- 질문을 입력하고 "마법의 소라고동님께 물어보기" 버튼을 누르면 랜덤 응답을 받습니다.
- 응답은 일반 메시지(messages.txt), 명언(quotes.txt), 기타 답변(answers.txt)에서 무작위로 선택됩니다.
- 질문/응답은 암호화되어 URL로 공유할 수 있습니다. URL만으로는 질문/응답 내용을 알 수 없습니다.
- URL로 접속 시 복호화하여 질문/응답을 보여줍니다.
- "나도 물어보기" 버튼으로 새 질문 가능, "공유하기" 버튼으로 URL 복사 가능
- 모든 소라고동 이미지는 🐚 이모지로 일원화되어 파비콘, OG/Twitter 미리보기, UI 등에 사용됩니다.

## 서비스 구조
```
magic-conch/
  ├─ public/
  │    ├─ answers.txt         # 기타 응답/명언 리스트 (한 줄에 하나)
  │    ├─ messages.txt        # 일반 메시지(예/아니오/중립 등)
  │    ├─ quotes.txt          # 명언(짧은 한국어 명언, 한 줄에 하나)
  │    ├─ favicon.svg         # 🐚 이모지 기반 파비콘
  │    ├─ og-image.svg        # 🐚 이모지 기반 OG/Twitter 미리보기 이미지
  │    └─ conch.svg           # 🐚 이모지 SVG(호환성용)
  ├─ src/
  │    ├─ App.jsx
  │    ├─ main.jsx
  │    ├─ index.css
  │    ├─ components/
  │    └─ utils/
  ├─ README.md
  ├─ package.json
  └─ ...
```

## 텍스트 파일 관리법
- `public/answers.txt`, `public/messages.txt`, `public/quotes.txt`는 모두 한 줄에 하나씩 텍스트를 추가합니다.
- **answers.txt**: 기타 응답/명언(예: "그래", "아니", "고생 끝에 낙이 온다." 등)
- **messages.txt**: 명확한 일반 메시지(예/아니오/중립 등)
- **quotes.txt**: 짧고 다양한 주제의 실제 한국어 명언 100개
- 파일 수정 후 반드시 아래 순서로 커밋/푸시하세요:
  1. `git add public/answers.txt public/messages.txt public/quotes.txt`
  2. `git commit -m "응답/명언 파일 업데이트"`
  3. `git push`

## 개발 및 실행 방법
```bash
npm install
npm run dev
```

## Github Pages 배포 방법
1. `package.json`에 아래 항목이 포함되어야 합니다:
   - `"homepage": "https://<your-github-username>.github.io/<repo-name>"`
   - scripts에 `"predeploy": "npm run build"`, `"deploy": "gh-pages -d dist"`
2. 아래 명령어를 한 줄씩 실행하세요:
   ```bash
   git add .
   git commit -m "배포 준비"
   git push
   npm run deploy
   ```

## 브랜딩/디자인
- 모든 소라고동 이미지는 🐚 이모지로 통일되어, 파비콘, OG/Twitter, UI 등에서 일관되게 사용됩니다.
- 반응형 UI, 컬러, 버튼, 이모지 등으로 심플하고 직관적인 UX 제공

## 라이선스
MIT
