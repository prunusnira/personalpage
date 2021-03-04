const projPersonal = [
    {
        icon: "/project/banpick/icon.png",
        title: {
            "ko":"트위치 밴픽 앱",
            "jp":"",
            "en":"Twitch BanPicker"
        },
        simpledesc: {
            "ko":"트위치 스트리머의 컨텐츠에 활용될 수 있는 LoL 스타일 밴/픽 앱",
            "jp":"",
            "en":""
        },
        platform: "Web",
        tech: "ReactJS (TypeScript), bootstrap, AWS S3",
        period: "2020.11.09~2020.11.14 (5일+@)",
        link1: "https://banpick.nira.one",
        link2: "https://github.com/prunusnira/twitch-banpicker",
        link3: "https://youtu.be/t37LvUoVcFc",
        content: {
            "ko":`<ul>
                    <li>(링크3: 실제 사용 예시 영상)</li>
                    <li>트위치 스트리머를 위한 LoL 스타일의 밴/픽 웹앱</li>
                </ul>`,
            "jp":``,
            "en":``
        },
        dev: {
            "ko":`<ol>
                    <li>ReactJS 17.0 기반 개발</li>
                    <li>AWS S3에서 배포</li>
                    <li>Google Chrome 웹스토어용 앱으로도 같이 개발되었으나 서버를 S3로 옮기면서 게시하지 않음</li>
                </ol>`,
            "jp":``,
            "en":``
        },
        image: [
            "/project/banpick/01.png"
        ]
    },
    {
        icon: "/project/sin/icon.png",
        title: {
            "ko":"Skill Navigator",
            "jp":"Skill Navigator",
            "en":"Skill Navigator"
        },
        simpledesc: {
            "ko":"리듬게임 GITADORA 시리즈의 기록 관리 사이트",
            "jp":"",
            "en":""
        },
        platform: "Web",
        tech: "ReactJS (TypeScript), Spring Boot (Kotlin), MariaDB, nginx, etc",
        period: "2016.01~",
        link1: "https://sin.nira.one",
        link2: "https://github.com/prunusnira/gdinfo-react",
        link3: "https://github.com/prunusnira/gdinfo-server",
        content: {
            "ko":`<ul>
                    <li>음악게임 GITADORA의 개인 기록 관리 사이트</li>
                    <li>공식에서 지원하지 않는 부가적인 기능을 제공</li>
                    <li>(2020년 2월 기준) 등록 계정 수 3800 (한국/일본/기타 해외)</li>
                </ul>`,
            "jp":``,
            "en":``
        },
        dev: {
            "ko":`<ol>
                    <li>1세대: Spring Framework 4 / JSP</li>
                    <li>2세대: Spring Boot 2 / Thymeleaf / Vue.js (MPA)</li>
                    <li>3세대: Spring Boot 2 (Backend) + ReactJS (Frontend): GCE -> EC2 -> Lightsail</li>
                    <li>4세대: Spring Boot 2 (Backend-AWS Lightsail) + ReactJS (Frontend-AWS S3)</li>
                </ol>`,
            "jp":``,
            "en":``
        },
        image: [
            "/project/sin/01.jpg", "/project/sin/02.jpg"
        ]
    },
    {
        icon: "/project/piu/icon.png",
        title: {
            "ko":"PIU 기록 관리 툴",
            "jp":"PIU 記録管理ツール",
            "en":"PIU Manager"
        },
        simpledesc: {
            "ko":"리듬게임 Pump It Up의 기록 관리 사이트",
            "jp":"",
            "en":""
        },
        platform: "Web",
        tech: "ReactJS (TypeScript), NodeJS (TypeScript), AWS DynamoDB, AWS S3, AWS Lambda, etc",
        period: "2018.07~",
        link1: "https://piu.nira.one",
        link2: "https://github.com/prunusnira/piumanager",
        link3: "",
        content: {
            "ko":`<ul>
                    <li>음악게임 Pump It Up의 개인 기록 관리 사이트</li>
                    <li>유저들이 사용하고 있는 수동적으로 관리하는 서열표를 보고 자동화하면 어떨까 하는 생각으로 제작</li>
                    <li>패턴의 데이터는 DB에서 관리하지만 개인의 기록은 CSV 파일 형태로 보관</li>
                    <li>Kotlin을 사용해 WebView를 응용한 하이브리드 앱을 개발하여 PlayStore에 게시</li>
                </ul>`,
            "jp":``,
            "en":``
        },
        dev: {
            "ko":`Backend<br/>
                <ul>
                    <li>1세대: NodeJS, NGINX, MariaDB</li>
                    <li>2세대: AWS Lambda, AWS S3, AWS DynamoDB</li>
                </ul>
                Front<br/>
                <ul>
                    <li>ReactJS, TypeScript</li>
                </ul>`,
            "jp":"",
            "en":""
        },
        image: [
            "/project/piu/01.jpg", "/project/piu/02.jpg"
        ]
    },
    {
        icon: "/project/rhythm/icon.png",
        title: {
            "ko":"RhythmTracers (BMS Player)",
            "jp":"RhythmTracers (BMS Player)",
            "en":"RhythmTracers (BMS Player)"
        },
        simpledesc: {
            "ko":"Unity로 제작된 BMS 구동기",
            "jp":"",
            "en":""
        },
        platform: "Unity3D (Windows)",
        tech: "Unity3D",
        period: "2020.08~",
        link1: "https://youtu.be/lWQG4gIjGDM",
        link2: "https://github.com/prunusnira/rhythmspaceV2",
        link3: "",
        content: {
            "ko":`<ul>
                    <li>Unity3D로 개발된 건반형 리듬게임</li>
                    <li>BMS(Be-Music Script)를 읽어 게임을 진행</li>
                </ul>`,
            "jp":``,
            "en":``
        },
        dev: {
            "ko":`<ul>
                    <li>C# 기반의 BMS 처리 모듈을 별도로 제작<br/>
                    (BMS에 대한 클래스 정의, 각 노트 오브젝트에 대한 구조 등)</li>
                    <li>플레이 시작 시간을 기준으로 곡의 재생 시간에 맞추어 노트 위치를 변경시키는 방식으로 구현</li>
                </ul>`,
            "jp":"",
            "en":""
        },
        image: [
            "/project/rhythm/01.png", "/project/rhythm/02.png",
            "/project/rhythm/03.jpg"
        ]
    },
    {
        icon: "/project/ringtone/icon.png",
        title: {
            "ko":"벨소리 관리자",
            "jp":"Ringtone Manager",
            "en":"Ringtone Manager"
        },
        simpledesc: {
            "ko":"구 안드로이드에서 사용된 벨소리 랜덤 재생 어플",
            "jp":"",
            "en":""
        },
        platform: "Android (Under 7)",
        tech: "Android (Java), SQLite",
        period: "2011~2012 / 2015",
        link1: "https://play.google.com/store/apps/details?id=com.ring.roxyeris",
        link2: "https://github.com/prunusnira/ringtone-public",
        link3: "",
        content: {
            "ko":`<ul>
                    <li>기기의 전화가 한 번 올 때마다 벨소리를 랜덤으로 바꿔주는 앱</li>
                    <li>착신 상태를 확인하여 상태 변경에 따라 시스템 옵션을 변경</li>
                    <li>14000+ 다운로드, 3.85 평점</li>
                    <li>Disclaimer: 8~9년 전에 작성된 앱으로 현재 안드로이드 버전과는 맞지 않음</li>
                </ul>`,
            "jp":``,
            "en":``
        },
        dev: {
            "ko":`<ul>
                <li>Android 내부의 Telephony Manager로 착신 상태 확인</li>
                <li>SQLite를 사용해 등록된 곡 관리</li>
            </ul>`,
            "jp":``,
            "en":``
        },
        image: [
            "/project/ringtone/01.jpg", "/project/ringtone/02.jpg",
            "/project/ringtone/03.jpg", "/project/ringtone/04.jpg",
            "/project/ringtone/05.jpg"
        ]
    },
    {
        icon: "/project/launcher/icon.png",
        title: {
            "ko":"Drawing Launcher",
            "jp":"Drawing Launcher",
            "en":"Drawing Launcher"
        },
        simpledesc: {
            "ko":"사용자의 제스처로 앱을 실행하는 런처",
            "jp":"",
            "en":""
        },
        platform: "Android",
        tech: "Android (Java)",
        period: "2016.08~2017.04",
        link1: "https://play.google.com/store/apps/details?id=com.roxyeris.drawinglauncher",
        link2: "https://github.com/prunusnira/DrawingLauncher",
        link3: "",
        content: {
            "ko":`<ul>
                    <li>제스처를 그려서 사용하는 앱 런처</li>
                    <li>개인 사용을 목표로 만들었음</li>
                </ul>`,
            "jp":``,
            "en":``
        },
        dev: {
            "ko":`<ul>
                <li>Android의 API로 제공되는 Gesture, Gesture Store를 사용하여 개발</li>
                <li>Gesture는 Gesture Store에 포함되어 로컬 파일로 저장 - 별도 DB 미사용</li>
                <li>앱 서랍은 GridLayout으로 표현</li>
            </ul>`,
            "jp":"",
            "en":""
        },
        image: [
            "/project/launcher/01.jpg", "/project/launcher/02.jpg",
            "/project/launcher/03.jpg", "/project/launcher/04.jpg"
        ]
    }
];

export default projPersonal;