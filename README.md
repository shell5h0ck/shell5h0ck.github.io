# zibai blog (static, dynamic UI)

이 패키지는 **빌드 없이도** GitHub Pages에 올릴 수 있는 정적 사이트(HTML/CSS/JS)입니다.

## 1) GitHub Pages 배포
1. GitHub에서 새 저장소 생성 (Public 권장)
2. 이 폴더의 파일을 저장소 루트에 업로드
3. `Settings → Pages`
4. Branch: `main` / Folder: `/ (root)`
5. 잠시 후 Pages URL로 접속

## 2) 수정 포인트
- 메인: `index.html`
- 글: `posts/2026-02-22-hoyolab-cookie.html`
- 문의: `contact.html`
- 스타일: `assets/styles.css`
- 스크립트: `assets/app.js`
- 이미지: `assets/hoyolab-cookie-blur.png`

## 3) 로컬에서 미리보기
- VSCode Live Server 확장 사용 또는
- Python:
  ```bash
  python3 -m http.server 8080
  ```
  이후 `http://localhost:8080` 접속
