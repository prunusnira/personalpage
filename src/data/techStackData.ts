import { TechStackWrap } from "./TechStackWrap";

const techStackData: TechStackWrap[] = [
    {
        title: "Web",
        cont: [
            {
                title: "Frontend",
                cont: [
                    { img: "/img/about/js.png", name: "JavaScript", desc: "ES6 문법 사용" },
                    { img: "/img/about/ts.png", name: "TypeScript", desc: "최근 프로젝트 전반에 사용" },
                    { img: "/img/about/html.png", name: "HTML", desc: "마크업을 사용한 화면 표시" },
                    { img: "/img/about/css.png", name: "CSS", desc: "Flexbox 활용" },
                    { img: "/img/about/react.png", name: "ReactJS", desc: "Class/Hook 사용, Mobx/Redux 상태관리" },
                    { img: "/img/about/bootstrap.png", name: "Bootstrap", desc: "빠른 UI 구성을 위해 사용" },
                    { img: "/img/about/styledcomp.png", name: "styled-components", desc: "자체적 UI 구성이 필요한 프로젝트에서 사용" }
                ]
            },
            {
                title: "Backend",
                cont: [
                    { img: "/img/about/java.png", name: "Java", desc: "Spring 개발 시 사용" },
                    { img: "/img/about/kotlin.png", name: "Kotlin", desc: "Java 대신 사용, Java 대비 간결해진 문법, null safety" },
                    { img: "/img/about/spring.png", name: "Spring", desc: "REST API, 웹 서비스 등 개발 경험" },
                    { img: "/img/about/aws.png", name: "AWS", desc: "(개인프로젝트) S3, Lambda, CloudFront, API Gateway, Lightsail" },
                    { img: "/img/about/nginx.png", name: "NGINX", desc: "쉬운 서버 구축, 프록시 활용" },
                    { img: "/img/about/letsencrypt.png", name: "CertBot", desc: "무료로 SSL 구성 시 사용" }
                ]
            }
        ]
    },
    {
        title: "DB",
        cont: [
            {
                title: "Tried",
                cont: [
                    { img: "/img/about/mysql.png", name: "MySQL", desc: "업무/개인 포함 가장 많이 사용한 RDB" },
                    { img: "/img/about/mariadb.png", name: "MariaDB", desc: "업무/개인 포함 가장 많이 사용한 RDB" },
                    { img: "/img/about/sqlite.png", name: "SQLite", desc: "안드로이드나 게임 등에서 간단한 DB를 위해 사용" },
                    { img: "/img/about/postgresql.png", name: "PostgreSQL", desc: "업무에서 1회 사용 경험" },
                ]
            }
        ]
    },
    {
        title: "Android",
        cont: [
            {
                title: "Language",
                cont: [
                    { img: "/img/about/java.png", name: "Java", desc: "학부때부터 써온 언어" },
                    { img: "/img/about/kotlin.png", name: "Kotlin", desc: "사실 안드로이드 때문에 Kotlin을 처음 접함" }
                ]
            }
        ]
    },
    {
        title: "Unity3D",
        cont: [
            {
                title: "Language",
                cont: [
                    { img: "/img/about/csharp.png", name: "C#", desc: "업무에서 처음 접한 후 개인 프로젝트에서도 계속 활용" }
                ]
            }
        ]
    },
    {
        title: "etc",
        cont: [
            {
                title: "Version Management",
                cont: [
                    { img: "/img/about/github.png", name: "GitHub", desc: "개인 프로젝트 관리" },
                    { img: "/img/about/gitlab.png", name: "GitLab", desc: "업무에서 사용" },
                    { img: "/img/about/bitbucket.png", name: "BitBucket", desc: "이전에 사용했으나 GitHub에 Private이 생긴 뒤 사용하지 않음" }
                ]
            },
            {
                title: "UML",
                cont: [
                    { img: "/img/about/ea.png", name: "Enterprise Architect", desc: "대학원 연구실에서 사용한 UML 프로그램" },
                    { img: "/img/about/visualparadigm.png", name: "Visual Paradigm", desc: "대학원 연구실에서 사용한 UML 프로그램 2" },
                    { img: "/img/about/staruml.png", name: "StarUML", desc: "1은 무료지만 2는 유료인 UML 프로그램" }
                ]
            },
            {
                title: "Documentation",
                cont: [
                    { img: "/img/about/msoffice.png", name: "MS Office", desc: "Word, PowerPoint, Excel 사용, Google Docs도 가능" }
                ]
            },
            {
                title: "Design",
                cont: [
                    { img: "/img/about/photoshop.png", name: "Photoshop", desc: "기본적인 사용 레벨, 유튜브 썸네일 정도의 작업은 가능" }
                ]
            }
        ]
    }
];

export default techStackData;