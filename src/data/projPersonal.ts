const projPersonal = [
    {
        icon: "/project/banpick/icon.png",
        title: {
            "ko":"트위치 밴/픽 앱",
            "jp":"",
            "en":"Twitch BanPicker"
        },
        simpledesc: {
            "ko":"트위치 스트리머의 컨텐츠에 활용될 수 있는 LoL 스타일 밴/픽 앱",
            "jp":"",
            "en":""
        },
        platform: "Web",
        tech: "ReactJS (TypeScript), JavaScript, Bootstrap, AWS S3, Jest, Redux",
        period: "2020.11.09~2020.11.14 (5일 + 지속적으로 업데이트 진행 중)",
        link: ["https://banpick.nira.one",
                "https://github.com/prunusnira/twitch-banpicker",
                "https://youtu.be/t37LvUoVcFc"],
        content: {
            "ko":`(링크3: 실제 사용 예시 영상)
                <ul>
                    <li>트위치 스트리머의 컨텐츠에 활용할 수 있는 LoL 스타일의 밴/픽 앱</li>
                    <li>시청자는 웹 앱에서 지정한 명령어를 채팅으로 입력하여 스트리머와 소통하면서 앱을 사용할 수 있음</li>
                    <li>Twitch API, WebSocket 등을 활용하여 만든 앱</li>
                </ul>`,
            "jp":``,
            "en":``
        },
        dev: {
            "ko":`<ol>
                    <li>Twitch API로 채널 내 시청자들의 채팅 내용을 읽어 분석하고, 자체 명령어를 기반으로 동작을 수행</li>
                    <li>AWS S3에 데이터를 올리고 CloudFront로 SSL을 지원하는 방식으로 배포</li>
                    <li>저장이 필요한 데이터는 redux-persist를 사용</li>
                </ol>`,
            "jp":``,
            "en":``
        },
        image: [
            "/project/banpick/01.png", "/project/banpick/02.png"
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
        period: "2016.04~",
        link: ["https://sin.nira.one",
                "https://github.com/prunusnira/gdinfo-react",
                "https://github.com/prunusnira/gdinfo-server"],
        content: {
            "ko":`<ul>
                    <li>리듬게임 GITADORA 시리즈의 개인 기록을 관리해주는 웹 서비스</li>
                    <li>공식에서 지원하지 않는 부가적인 기능을 제공</li>
                    <li>(2020년 2월 기준) 등록 계정 수 3800 (한국/일본/기타 해외)</li>
                </ul>`,
            "jp":``,
            "en":``
        },
        dev: {
            "ko":`시스템 구성<br/>
                서비스가 오래 지속되어 시스템에 변화가 많이 있었음
                <ol>
                    <li>1세대: Spring Framework 4 / JSP</li>
                    <li>2세대: Spring Boot 2 / Thymeleaf / Vue.js (non SPA)</li>
                    <li>3세대: Spring Boot 2 (Backend) + ReactJS (Frontend): GCE -> EC2 -> Lightsail</li>
                    <li>4세대: Spring Boot 2 (Backend-AWS Lightsail) + ReactJS (Frontend-AWS S3)</li>
                </ol>
                사용 구조
                <ul>
                    <li>WebCrawler로 개인 기록을 수집하여 DB에 저장</li>
                    <li>사용자가 특정 기능에 접근할 때 저장된 데이터에 대해 연산을 수행하여 사용자에게 정보를 제공</li>
                </ul>`,
            "jp":``,
            "en":``
        },
        image: [
            "/project/sin/01.jpg", "/project/sin/02.png", "/project/sin/03.jpg"
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
        platform: "Web, Android",
        tech: "ReactJS (TypeScript), NodeJS (TypeScript), Android (Kotlin), AWS DynamoDB, AWS S3, AWS Lambda, etc",
        period: "2018.07~",
        link: ["https://piu.nira.one",
                "https://play.google.com/store/apps/details?id=one.nira.piu",
                "https://github.com/prunusnira/piumanager"],
        content: {
            "ko":`<ul>
                    <li>리듬게임 Pump It Up의 개인 기록 관리를 자동화 한 웹 서비스</li>
                    <li>유저들이 수동적으로 이미지를 수정하면서 사용하고 있는 서열표를 보고 자동화하면 어떨까 하는 생각으로 제작</li>
                    <li>GitHub에서 PR을 받아 새로운 번역을 추가하기도 했음</li>
                </ul>`,
            "jp":``,
            "en":``
        },
        dev: {
            "ko":`Backend<br/>
                <ul>
                    <li>1세대: NodeJS, NGINX, MariaDB</li>
                    <li>2세대: AWS Lambda, AWS S3, MariaDB</li>
                </ul>
                Front<br/>
                <ul>
                    <li>ReactJS, TypeScript</li>
                </ul>
                데이터
                <ul>
                    <li>패턴 데이터는 DB에서 관리하지만 개인 기록을 저장하는 데이터는 urlencoded 된 내용을 CSV 파일로 제공</li>
                    <li>Kotlin을 사용해 WebView를 응용한 하이브리드 앱을 개발하여 PlayStore에 게시 (앱은 CSV파일을 내부적으로 관리함)</li>
                </ul>
                `,
            "jp":"",
            "en":""
        },
        image: [
            "/project/piu/01.jpg", "/project/piu/02.png"
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
            "ko":"Unity로 제작된 BMS 구동기 (리듬게임)",
            "jp":"",
            "en":""
        },
        platform: "Unity3D (Windows)",
        tech: "Unity3D",
        period: "2020.08~",
        link: ["https://youtu.be/lWQG4gIjGDM",
                "https://github.com/prunusnira/rhythmspaceV2"],
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
                    <li>C# 기반의 BMS 처리 모듈을 제작<br/>
                    (BMS에 대한 파싱, 노트 오브젝트 생성, 시간에 따른 노트 이동 등)</li>
                    <li>플레이 시작 시간을 기준으로 곡의 재생 시간에 맞추어 노트 위치를 변경시키는 방식으로 구현</li>
                    <li>외부에서 읽어들인 BMS의 목록은 SQLite로 관리</li>
                    <li>사용자들이 만든 커스텀 스킨을 적용할 수 있는 시스템 제공</li>
                    <li>싱크 조절이나 최대 프레임 레이트 등 역시 자유롭게 조절할 수 있게 만듦</li>
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
        icon: "/project/launcher/icon.png",
        title: {
            "ko":"Drawing Launcher",
            "jp":"Drawing Launcher",
            "en":"Drawing Launcher"
        },
        simpledesc: {
            "ko":"사용자의 제스처로 앱을 실행하는 안드로이드 런처",
            "jp":"",
            "en":""
        },
        platform: "Android",
        tech: "Android (Java)",
        period: "2016.08~2017.04",
        link: ["https://play.google.com/store/apps/details?id=com.roxyeris.drawinglauncher",
                "https://github.com/prunusnira/DrawingLauncher"],
        content: {
            "ko":`<ul>
                    <li>화면에 제스처를 그려서 앱을 실행하거나 다른 동작을 수행하는 안드로이드 런처</li>
                    <li>단순히 제스처 외에도 일반적인 앱 서랍 기능도 포함</li>
                </ul>`,
            "jp":``,
            "en":``
        },
        dev: {
            "ko":`<ul>
                <li>Android의 API로 제공되는 Gesture, Gesture Store를 사용하여 개발</li>
                <li>Gesture는 Gesture Store에 포함되어 로컬 파일로 저장</li>
                <li>앱 서랍은 GridLayout으로 표현하며 옵션에서 사이즈 변경이 가능</li>
            </ul>`,
            "jp":"",
            "en":""
        },
        image: [
            "/project/launcher/01.jpg", "/project/launcher/02.jpg",
            "/project/launcher/03.jpg", "/project/launcher/04.jpg"
        ]
    },
    {
        icon: "/project/ringtone/icon.png",
        title: {
            "ko":"Ringtone Randomizer",
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
        link: ["https://play.google.com/store/apps/details?id=com.ring.roxyeris",
                "https://github.com/prunusnira/ringtone-public"],
        content: {
            "ko":`<ul>
                    <li>기기의 전화가 한 번 올 때마다 벨소리를 랜덤으로 바꿔주는 앱</li>
                    <li>착신 상태를 확인하여 상태 변경에 따라 시스템 옵션을 변경</li>
                </ul>`,
            "jp":``,
            "en":``
        },
        dev: {
            "ko":`<ul>
                    <li>Android 내부의 Telephony Manager, Phone State Listener로 착신 상태 확인</li>
                    <li>SQLite에 사용자가 벨소리로 지정하고 싶어하는 음악 파일을 등록 및 관리</li>
                    <li>착신 상태가 변경될 때 마다 백그라운드 서비스로 벨소리를 변경하도록 처리</li>
                </ul>`,
            "jp":``,
            "en":``
        },
        image: [
            "/project/ringtone/01.jpg", "/project/ringtone/02.jpg",
            "/project/ringtone/03.jpg", "/project/ringtone/04.jpg",
            "/project/ringtone/05.jpg"
        ]
    }
];

export default projPersonal;