const PROJECT = [
    {
        TITLE: "TeamWorks",
        DESCRIPTION: "협업 시 발생하는 무임승차 문제를 데이터 기반으로 해결하는 공정 협업 관리 플랫폼",
        TOP_COLOR: "#3666Fa",
        THUMBNAIL: "teamworks_thumbnail",
        MEMBER: "총 4명 (BE - 1, FE - 1, 디자인 - 1, 기획 - 1)",
        ROLE: "FE",
        DURATION: "2025.08 ~ 현재",
        DEMO_LINK: "https://teamworks-space.site",
        FE_STACK: [
            "Next.js", "JavaScript", "HTML", "TailwindCSS",
            "Zustand", "Recharts", "Chart.js", "React-PDF"
        ],
        BE_STACK: [
            "Kotlin", "Spring", "Redis", "PostgreSQL"
        ],
        DEPLOYMENT: [
            "Netlify", "NCP"
        ],
        TOOL: [
            "Github", "Figma", "Notion"
        ],
        GITHUB: "https://github.com/LeeKangRyong/teamworks-fe",
        IMAGES: [
            "teamworks_1", "teamworks_2", "teamworks_3", "teamworks_4"
        ],
        FUNCTION: [
            "AI 기반 팀원 개인별 기여도 분석 및 무임승차 자동 감지",
            "관리자/참여자 역할 별 차별화된 대시보드",
            "실시간 과제 제출 및 채점 시스템",
            "팀 활동 타임라인 시각화"
        ],
        RESULT: [
            "대규모 서비스 대비 FSD 아키텍처 도입 → 도메인 간 명확한 의존성 주입, 확장 기능 대비, MFA 전환 대비",
            "config 설정 후 JS로 빠른 MVP 출시 및 동시에 TS로 점진적 migration 준비",
            "SSR + Semantic tag 사용으로 SEO 최적화 수행",
            "Zustand를 통한 UI 관련 전역 상태 관리 간편화 (ex. 사이드바 접힘/펴짐)"
        ],
        TROUBLE: [
            {
                PROBLEM: "PDF.js 라이브러리가 모든 페이지에 번들되어 초기 로딩 지연 발생",
                SOLUTION: "Code Splitting + Lazy Loading 적용 (dynamic import, ssr: false)",
                RESULT: "초기 번들 감소, 로딩 시간 개선 + 로딩 UI로 UX 향상"
            },
            {
                PROBLEM: "여러 Pretendard font 파일을 개별 로딩하면서 FOUT 및 Layout Shift 발생",
                SOLUTION: "Variable Font 도입 + font-display: swap 적용",
                RESULT: "폰트 파일 크기 감소, FOUT 현상 제거"
            }
        ]
    },
    {
        TITLE: "포트폴리오 (VanillaJS)",
        DESCRIPTION: "기존 포트폴리오를 기술적 도전을 위해 VanillaJS로 재구현 및 리뉴얼",
        TOP_COLOR: "#dba231",
        THUMBNAIL: "portfolio_thumbnail",
        MEMBER: "총 1명",
        ROLE: "FE, 디자인, 기획",
        DURATION: "2025.11 ~ 2025.11 (1주)",
        DEMO_LINK: "https://portfolio-krlee-vanila.netlify.app",
        FE_STACK: [
            "JavaScript", "HTML", "CSS"
        ],
        BE_STACK: [
            "X"
        ],
        DEPLOYMENT: [
            "Netlify"
        ],
        TOOL: [
            "Github", "Figma"
        ],
        GITHUB: "https://github.com/LeeKangRyong/portfolio-vanila",
        IMAGES: [
            "portfolio_vanila_1", "portfolio_vanila_2", "portfolio_vanila_3", "portfolio_vanila_4"
        ],
        FUNCTION: [
            "기존 React 기반 웹사이트를 HTML/CSS/JS로만 구현",
            "순수 CSS와 JS로 SPA Application 구현",
            "스크롤 + 모달로 하나의 전체 페이지 구성",
            "순수 CSS를 통한 애니메이션 + 반응형 구현"
        ],
        RESULT: [
            "hash 기반 라우팅 시스템을 통해 SPA 구조에서 routing 구현",
            "생성자 + 메서드 패턴으로 재사용 가능한 컴포넌트 아키텍처 구축",
            "'한 메서드를 최대한 작게, indent depth < 3' 등의 Clean Code 법칙 수행",
            "display 속성을 이용하여 순수 CSS로 Modal 구현",
            "Fetch를 활용한 useAsset 유틸 함수로 확장자 자동 감지 (png/jpg/jpeg) 구현"
        ],
        TROUBLE: [
            {
                PROBLEM: "모달 사용 중에 배경 콘텐츠가 스크롤되는 문제 발생",
                SOLUTION: "모달이 열릴 때 body.style.overflow = 'hidden'으로 배경 스크롤 차단",
                RESULT: "사용자 집중도 향상 및 UX 개선"
            },
            {
                PROBLEM: "Skill 컴포넌트의 다수 이미지를 순차 로딩하여 초기 렌더링 지연 발생",
                SOLUTION: "Promise.all()로 병렬 처리 전환 (map으로 Promise 배열 생성 후 일괄 await)",
                RESULT: "순차 for문 대비 로딩 속도 대폭 개선 및 사용자 체감 성능 향상"
            }
        ]
    },
    {
        TITLE: "포트폴리오",
        DESCRIPTION: "React + Framer Motion을 활용한 개인 포트폴리오 웹사이트",
        TOP_COLOR: "#252c26",
        THUMBNAIL: "portfolio_thumbnail",
        MEMBER: "총 1명",
        ROLE: "FE, 디자인, 기획",
        DURATION: "2025.06 ~ 2025.07 (2주)",
        DEMO_LINK: "https://portfolio-krlee.netlify.app",
        FE_STACK: [
            "React", "JavaScript", "HTML", "CSS", "Framer Motion"
        ],
        BE_STACK: [
            "X"
        ],
        DEPLOYMENT: [
            "Netlify"
        ],
        TOOL: [
            "Github", "Figma"
        ],
        GITHUB: "https://github.com/LeeKangRyong/portfolio",
        IMAGES: [
            "portfolio_vanila_1", "portfolio_vanila_2", "portfolio_vanila_3", "portfolio_vanila_4"
        ],
        FUNCTION: [
            "4단계 반응형 디자인 (Desktop/Tablet/Mobile/Small Mobile)",
            "프로젝트 모달 시스템을 통한 상세 정보 제공",
            "Framer Motion 기반 페이지 전환 및 스크롤 애니메이션",
            "Custom Hooks로 재사용 가능한 로직 분리"
        ],
        RESULT: [
            "CSS Grid + Flexbox 조합, rem 단위 + clamp() 함수로 유연한 font 구현",
            "Custom Hooks(useAssets, useModal, useHover) 설계로 코드 재사용성 향상",
            "Framer Motion + Intersection Observer API로 부드러운 애니메이션 구현",
            "lazy loading, 이미지 최적화, 번들 크기 최소화로 빠른 로딩 속도 달성"
        ],
        TROUBLE: [
            {
                PROBLEM: "준비중",
                SOLUTION: "준비중",
                RESULT: "준비중"
            },
            {
                PROBLEM: "준비중",
                SOLUTION: "준비중",
                RESULT: "준비중"
            }
        ]
    },
    {
        TITLE: "당신의 AI 심장비서, 콩콩",
        DESCRIPTION: "RAG 기반 AI Agent '콩콩이'를 탑재한 진단, 질의응답 및 병원 추천 종합 헬스케어 앱",
        TOP_COLOR: "#dc2626",
        THUMBNAIL: "kong_thumbnail",
        MEMBER: "총 5명(AI - 3, 디자인/기획 - 1, 개발 - 1",
        ROLE: "풀스택",
        DURATION: "2025.05 ~ 2025.08",
        DEMO_LINK: "none",
        FE_STACK: [
            "React Native", "JavaScript", "HTML", 
            "Styled-Components", "Zustand"
        ],
        BE_STACK: [
            "Node.js", "JavaScript", "MySQL", "Prisma", "FastAPI", "Python"
        ],
        DEPLOYMENT: [
            "AWS", "NGINX", "Github Actions", "Ngrok"
        ],
        TOOL: [
            "Github", "Figma", "Notion"
        ],
        GITHUB: "https://github.com/Prometheus-AI-Project/2025_1_Heart_Docter_kongkong",
        IMAGES: [
            "kong_1", "kong_2", "kong_3", "kong_4"
        ],
        FUNCTION: [
            "실시간 ECG 측정 및 AI 기반 ECG 부정맥 예측",
            "RAG 기반 의료 챗봇",
            "채팅 내용에 따라 실시간 진단 혹은 병원 위치 추천"
        ],
        RESULT: [
            "MVC + MVVM 구조를 통한 빠른 풀스택 아키텍처 설계 및 구현",
            "Prisma ORM을 통한 타입 안정성 확보 및 마이그레이션 자동화",
            "Zustand를 통한 인증 토큰 및 사용자 정보 중앙 관리로 props drilling 제거",
            "Access/Refresh Token 기반 JWT 보안 시스템 구축",
            "FastAPI AI 서버 구조를 설계하고 AI 팀원들에게 가이드 제공"
        ],
        TROUBLE: [
            {
                PROBLEM: "AI 개발자들이 웹 서버 구축 경험이 없어 모델을 API로 배포하는 과정에서 막힘",
                SOLUTION: "FastAPI 서버, 패키지 설치, 엔드포인트 명세 가이드를 작성하여 제공",
                RESULT: "각자 독립적으로 모델 서버를 구축, 메인 서버와 성공적으로 연동"
            },
            {
                PROBLEM: "AWS GPU 서버 비용이 과도하여 AI 서버 운영이 어려웠음",
                SOLUTION: "로컬에서 AI 서버를 실행하고 Ngrok으로 데모데이에만 서버 연결",
                RESULT: "인프라 비용 100% 절감, 데모데이에 실시간 AI 기능을 원활하게 시연 성공"
            }
        ]
    },
    {
        TITLE: "EncapMoments",
        DESCRIPTION: "AI 미션 기반 추억을 만들고 저장하는 가족 공유 앱서비스",
        TOP_COLOR: "#504B38",
        THUMBNAIL: "encap_thumbnail",
        MEMBER: "총 3명 (FE - 1, BE - 2)",
        ROLE: "FE, 디자인, 기획",
        DURATION: "2025.03 ~ 2025.05",
        DEMO_LINK: "none",
        FE_STACK: [
            "React Native", "JavaScript", "HTML", "Styled-Components", "Zustand"
        ],
        BE_STACK: [
            "Node.js", "JavaScript", "MySQL", "Prisma"
        ],
        DEPLOYMENT: [
            "AWS", "NGINX", "Github Actions"
        ],
        TOOL: [
            "Github", "Figma", "Notion"
        ],
        GITHUB: "https://github.com/encapmoments",
        IMAGES: [
            "encap_1", "encap_2", "encap_3", "encap_4"
        ],
        FUNCTION: [
            "AI가 개인 요구사항에 맞게 생성하는 일일/주간 미션 시스템",
            "미션 완료 시 포인트 적립 및 마켓 내에서 리워드 교환",
            "가족 구성원 관리 및 프로필 시스템",
            "추억 앨범 (사진/댓글) 공유 기능"
        ],
        RESULT: [
            "MVVM 아키텍처 도입으로 독립성 및 유지보수성 향상",
            "Zustand 기반 상태 관리로 props drilling 해결",
            "useMock 플래그로 Mock/Real API 간 즉시 전환 가능",
            "공통 컴포넌트 라이브러리 구축으로 촉박한 기간 내 개발 속도 향상"
        ],
        TROUBLE: [
            {
                PROBLEM: "빈번한 기획 변경으로 API 응답 구조가 자주 변경되어 BE 수정 대기 필요",
                SOLUTION: "FE에서 우선 Mock 데이터로 구현 후, 수정된 명세서를 역으로 BE에 전달",
                RESULT: "개발 속도 유지, FE 주도로 API 구조 개선 제안 가능"
            },
            {
                PROBLEM: "text + 이미지까지 한 번에 만드는 시간이 openAI API로 인해 너무 오래 걸림",
                SOLUTION: "만드는 시간 동안 Skeleton UI를 출력",
                RESULT: "사용자 이탈 방지, UX 향상"
            }
        ]
    }
]

export { PROJECT };