# 마법의 소라고동 (Magic Conch)

스폰지밥 애니메이션의 마법의 소라고동처럼, 사용자가 질문을 입력하면 랜덤하게 대답(예/아니오/명언 등)을 해주는 웹 서비스입니다. 질문과 응답은 암호화되어 URL로 공유할 수 있습니다.

## 주요 기능
- 질문을 입력하고 "마법의 소라고동님께 물어보기" 버튼을 누르면 랜덤 응답을 받습니다.
- 응답 풀에는 "그래", "아니", "괜찮을 것 같아", "별로야"와 한국어 명언 50개가 포함되어 있습니다.
- 응답 풀은 `public/answers.txt` 파일로 관리하며, 줄바꿈(\n)으로 구분합니다.
- 질문/응답은 암호화되어 URL로 공유할 수 있습니다. URL만으로는 질문/응답 내용을 알 수 없습니다.
- URL로 접속 시 복호화하여 질문/응답을 보여줍니다.
- "나도 물어보기" 버튼으로 새 질문 가능, "공유하기" 버튼으로 URL 복사 가능

## 프로젝트 구조
```
magic-conch/
  ├─ public/
  │    └─ answers.txt         # 응답/명언 리스트 (줄바꿈 구분)
  ├─ src/
  │    ├─ App.jsx
  │    ├─ components/
  │    ├─ utils/
  │    └─ index.js
  ├─ README.md
  ├─ package.json
  └─ ...
```

## answers.txt 관리법
- `public/answers.txt` 파일에 한 줄에 하나씩 응답/명언을 추가합니다.
- 예시:
  ```
  그래
  아니
  괜찮을 것 같아
  별로야
  고생 끝에 낙이 온다.
  ...
  ```
- 파일 수정 후 반드시 아래 순서로 커밋/푸시하세요:
  1. `git add public/answers.txt`
  2. `git commit -m "answers.txt 업데이트"`
  3. `git push`

## 개발 및 실행 방법
```bash
npm install
npm run dev
```

## Github Pages 배포 방법
1. `package.json`에 아래 항목을 추가/수정하세요:
   - `"homepage": "https://<your-github-username>.github.io/<repo-name>"`
   - scripts에 `"predeploy": "npm run build"`, `"deploy": "gh-pages -d dist"`
2. 아래 명령어를 한 줄씩 실행하세요:
   ```bash
   git add .
   git commit -m "배포 준비"
   git push
   npm run deploy
   ```

## 라이선스
MIT
