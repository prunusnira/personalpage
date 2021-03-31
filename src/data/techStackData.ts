import { TechStackWrap } from "./TechStackWrap";

const techStackData: TechStackWrap[] = [
    {
        title: "Web",
        cont: [
            {
                title: "Frontend",
                cont: [
                    { img: "/img/about/js.png", name: "JavaScript" },
                    { img: "/img/about/ts.png", name: "TypeScript" },
                    { img: "/img/about/html.png", name: "HTML" },
                    { img: "/img/about/css.png", name: "CSS" },
                    { img: "/img/about/react.png", name: "ReactJS" },
                    { img: "/img/about/bootstrap.png", name: "Bootstrap" },
                    { img: "/img/about/jquery.png", name: "jQuery" }
                ],
                desc: ""
            },
            {
                title: "Backend",
                cont: [
                    { img: "/img/about/java.png", name: "Java" },
                    { img: "/img/about/kotlin.png", name: "Kotlin" },
                    { img: "/img/about/spring.png", name: "Spring" },
                    { img: "/img/about/aws.png", name: "AWS" },
                    { img: "/img/about/nginx.png", name: "NGINX" },
                    { img: "/img/about/letsencrypt.png", name: "CertBot" }
                ],
                desc: "* AWS는 S3, Lambda, DynamoDB, CloudFront, API Gateway, Lightsail를 경험해보았습니다"
            },
            {
                title: "Usage Examples",
                cont: [],
                desc: `인증서 채팅봇 프론트엔드 개발(2020), 인증서 백업 서버 개발(2020),
                            개인 웹 서비스 3종 개발 및 운영중(2016~)`
            }
        ]
    },
    {
        title: "Android",
        cont: [
            {
                title: "Language",
                cont: [
                    { img: "/img/about/java.png", name: "Java" },
                    { img: "/img/about/kotlin.png", name: "Kotlin" }
                ],
                desc: ""
            },
            {
                title: "Usage Examples",
                cont: [],
                desc: "웹 서비스용 앱 개발 (총 2종, 2020), 개인 앱 개발 및 PlayStore 게시(2013~)"
            }
        ]
    },
    {
        title: "Unity3D",
        cont: [
            {
                title: "Language",
                cont: [
                    { img: "/img/about/csharp.png", name: "C#" }
                ],
                desc: ""
            },
            {
                title: "Usage Examples",
                cont: [],
                desc: "리듬게임(BMS구동기) 개발, AI 플랫폼을 활용한 게임 및 플러그인 개발"
            }
        ]
    },
    {
        title: "DB",
        cont: [
            {
                title: "Tried",
                cont: [
                    { img: "/img/about/mysql.png", name: "MySQL" },
                    { img: "/img/about/mariadb.png", name: "MariaDB" },
                    { img: "/img/about/sqlite.png", name: "SQLite" },
                    { img: "/img/about/postgresql.png", name: "PostgreSQL" },
                    { img: "/img/about/dynamodb.png", name: "AWS DynamoDB" },
                ],
                desc: ""
            },
            {
                title: "Usage Examples",
                cont: [],
                desc: "개인 개발한 웹 서비스(MySQL계/DynamoDB), 회사 업무(PostgreSQL), Android 앱 및 Unity(SQLite)"
            }
        ]
    },
    {
        title: "etc",
        cont: [
            {
                title: "Version Management",
                cont: [
                    { img: "/img/about/github.png", name: "GitHub" },
                    { img: "/img/about/gitlab.png", name: "GitLab" },
                    { img: "/img/about/bitbucket.png", name: "BitBucket" }
                ],
                desc: ""
            },
            {
                title: "UML",
                cont: [
                    { img: "/img/about/ea.png", name: "Enterprise Architect" },
                    { img: "/img/about/visualparadigm.png", name: "Visual Paradigm" },
                    { img: "/img/about/staruml.png", name: "StarUML" }
                ],
                desc: ""
            },
            {
                title: "Documentation",
                cont: [
                    { img: "/img/about/msoffice.png", name: "MS Office" }
                ],
                desc: "Word, PowerPoint, Excel"
            },
            {
                title: "Design",
                cont: [
                    { img: "/img/about/photoshop.png", name: "Photoshop" }
                ],
                desc: "기본적인 사용 레벨, 유튜브 썸네일 정도의 작업은 가능합니다"
            }
        ]
    }
];

export default techStackData;