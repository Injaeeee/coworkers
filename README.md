![header](https://capsule-render.vercel.app/api?type=waving&color=047857&height=250&section=header&text=COWERKERS&fontSize=80&fontAlignY=40&fontColor=ffffff)

**코드잇에서 주관하는  프로젝트입니다.**

## 📑 목차
> ***[프로젝트 소개](#프로젝트-소개)***
> 
> ***[개발 기간](#개발-기간)***
> 
> ***[개발자 소개](#개발자-소개)***
> 
> ***[상세 계획](#상세-계획)***
> 
> ***[User Flow](#User-Flow)***
> 
> ***[프로젝트 구조](#프로젝트-구조)***
> 
> ***[개발 환경](#개발-환경)***
> 
> ***[기술 스택](#기술-스택)***
> 
> ***[주요 기능](#주요-기능)***
>
> ***[배포 및 실행 방법](#배포-및-실행-방법)***
> 
  
## 🧑‍💻 <a name="프로젝트-소개"/>프로젝트 소개


## 🗓️ <a name="개발-기간"/>개발 기간
***10 / 7 (목) ~ 11 / 14 (목)***

## 👨‍👨‍👦‍👦 <a name="개발자-소개"/>개발자 소개 

- ** [**@**](, "개발자  프로필 링크")** : 

- ** [**@**](, "개발자  프로필 링크")** : 
  
- ** [**@**](, "개발자  프로필 링크")** : 

- ** [**@**](, "개발자  프로필 링크")** : 

- **정인재 [**@Injaeeee**](https://github.com/Injaeeee?pvs=4, "개발자  프로필 링크")** : 


## 📃 <a name="상세-계획"/>상세 계획과 일정



[**📌 상세 계획**](https://www.notion.so/wonsik/11309277475d81549fe7ebf0e04dae7d, "상세 계획 노션 링크")

[**📝 상세 일정**](https://www.notion.so/wonsik/11309277475d810db53ec53c248f89d7, "회의록 노션 링크")

## 💡 <a name="User-Flow"/>User Flow
![코워커스 유저플로우](https://github.com/user-attachments/assets/8a985e36-821c-495c-93bf-64154343e896)




## 📁 <a name="프로젝트-구조"/>프로젝트 구조
```
📁wine/
│
├── 📁public/
│   ├── 📁images/                 # 이미지 파일 폴더
│   └── 📁ic_wine.svg ...
│
├── 📁constants/
│   └── 📁auth/        
│   └── mediaQueryBreakPoint.ts
│
├── 📁src/
│   └── 📁components/             # 재사용 가능한 컴포넌트
│       └── 📁common/            # 공통 컴포넌트
│           ├── 📁Button/
│           │     └── Button.tsx
│           └── 📁Toast/
│                 └── Toast.tsx
│   
├── 📁pages/                  # Next.js page 라우팅 
│   │   └── 📁signin/
│   │       └── index.tsx
│   │   └── 📁signup/
│   │       └── index.tsx
│   │   └── 📁[id]/              # 팀 페이지에 들어갈 컴포넌트 모음
│   │   │   ├── 📁editteam/
│   │   │   │     └── index.tsx
│   │       └── index.tsx
│   │   └── index.tsx
│   │   └── _app.tsx
│   │   └── _404.tsx
│   │
│   ├── 📁libs/                   # 라이브러리 관련된 세팅 및 함수들 정리하는 폴더
│   │   └── 📁axios/              # axios 관련 세팅 및 api 요청 함수
│   │       └── axiosInstance.ts
│   │       └── 📁auth/          
│   │       └── 📁image/       
│   │       └── 📁review/      
│   │       └── 📁user/     
│   │       └── 📁wine/    
│   │
│   ├── 📁contexts/               # 전역 상태 관리 
│   │
│   ├── 📁hooks/                  # 커스텀 React 훅
│   │
│   ├── 📁types/                  # 타입 폴더 (DTO 혹은 전역적으로 사용되는 type을 미리 정의)
│   │                             # 컴포넌트 props의 경우에는 해당 컴포넌트 위치에 정의
│   │
│   ├── 📁styles/                 # 스타일 관련 파일 모음
│   │   └── global.css
│   │
│   │
│   └── 📁utils/                  # 유틸리티 폴더
│
├─ .gitignore
├─ .env.local                     # 각자 환경에서 별도 생성 필요
├─ .eslintrc.json
├─ .prettierrc.json
├─ next.confing.mjs
├─ tailwind.config.ts
├─ tsconfig.json
│
...생략
```

## 💻 <a name="개발-환경"/>개발 환경

|OS|IDE|Version Control|Package Manager|deploy|Community|
|:---:|:---:|:---:|:---:|:---:|:---:|
|![macOS](https://img.shields.io/badge/macOS-000000?style=for-the-badge&logo=apple&logoColor=white) ![Windows](https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white)|![Visual Studio Code](https://img.shields.io/badge/Visual_Studio_Code-0078d7?style=for-the-badge&logo=visual-studio-code&logoColor=white) ![IntelliJ IDEA](https://img.shields.io/badge/IntelliJ_IDEA-000000?style=for-the-badge&logo=intellij-idea&logoColor=white)|![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)|![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)|![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)|![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white)|


## ⚒ <a name="기술-스택"/>기술 스택

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)


## 👨‍🏫 <a name="주요-기능"/>주요 기능

|![image](https://github.com/user-attachments/assets/31c20b48-9c9e-4894-b560-de0630da47d2)|![image](https://github.com/user-attachments/assets/553dcfc9-d308-4e3d-a0a3-60dd602900c4)|![image](https://github.com/user-attachments/assets/0e1908e3-88e1-4f30-baf9-bb6ec3abb8ec)|
|:---:|:---:|:---:|
|**랜딩 페이지**|**팀 페이지**|**할 일 페이지**|

|![image](https://github.com/user-attachments/assets/6b3ed4c5-ed2a-4c8c-ae32-8f7d9622b67a)|![image](https://github.com/user-attachments/assets/50679453-8afa-4185-8aa1-03f14e3eb6e2)|![image](https://github.com/user-attachments/assets/1432afe2-988e-404f-81a2-c23e313f4049)|
|:---:|:---:|:---:|
|**자유 게시판**|**계정 설정 페이지**|**마이 히스토리 페이지**|


## 🚀 <a name="배포-및-실행-방법"/>배포 및 실행 방법

### 1. 프로젝트 클론

```git clone https://github.com/Codeit-FE08-Part3-Team6/wine.git cd wine](https://github.com/team-collabor/coworkers.git```

### 2. 의존성 설치
프로젝트에서 사용하는 패키지들을 설치합니다.

```npm install```

### 3. 개발 서버 실행
다음 명령어를 실행하여 로컬 개발 환경에서 프로젝트를 실행할 수 있습니다.

```npm run dev```

이후 브라우저에서 http://localhost:3000 으로 접속하여 개발 중인 웹 애플리케이션을 확인할 수 있습니다.

### 4. 빌드 및 배포
프로덕션 환경에서 사용하기 위해 빌드할 때는 아래 명령어를 사용합니다.

```npm run build```


그 후, 아래 명령어로 빌드된 파일을 실제로 실행합니다.


```npm start```


### 5. 배포
이 프로젝트는 netlify을 사용하여 배포할 수 있습니다. 

GitHub와 연동된 netlify 계정을 통해 자동으로 배포되며, 코드를 push하면 자동으로 배포 프로세스가 진행됩니다.


[**배포 사이트**](https://wine-nine-xi.vercel.app/?pvs=4](https://coworkers-colla.netlify.app/, "COWERKERS")



