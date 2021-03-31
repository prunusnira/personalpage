const projNonPersonal = [
    {
        icon: "/project/chatbot/icon.png",
        title: {
            "ko":"UniBot (인증서 채팅봇)",
            "jp":"",
            "en":""
        },
        simpledesc: {
            "ko":"인증서에 대한 사용자들의 질문에 대해 답변을 자동으로 수행해주는 채팅봇",
            "jp":"",
            "en":""
        },
        platform: "Android / Web",
        tech: "Android (Kotlin), ReactJS (TypeScript), Bootstrap, NGINX, Spring Boot, MariaDB",
        period: "2019.10-2020.02",
        link: ["https://chatapp.crosscert.com"],
                //"https://play.google.com/store/apps/details?id=com.crosscert.aichat"],
        content: {
            "ko":`<ul>
                    <li>인증서 서비스 사용자들에게 필요한 사용법, 질문에 대한 답변을 채팅봇으로 만든 서비스</li>
                    <li>사용자들은 안드로이드 앱 혹은 PC 브라우저로 채팅봇에 접속하여 앱을 사용할 수 있었음</li>
                </ul>`,
            "jp":"",
            "en":""
        },
        dev: {
            "ko":`
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>[ 담당파트: 프론트엔드, ChatScript와 연결하는 중간서버, 안드로이드 앱, DB설계 ]</b>
                <ul>
                    <li>프론트엔드: ReactJS (TypeScript), Bootstrap (Reactstrap) 사용</li>
                    <li>안드로이드: Kotlin으로 개발, WebView를 사용한 하이브리드 앱</li>
                    <li>중간서버: SpringBoot(Kotlin)으로 개발, 백엔드 파트와 연동을 위해 구현. ChatScript와 통신을 위한 REST API 구축</li>
                    <li>시스템 구성: NGINX위에 Reversed Proxy를 사용해 백엔드와 프론트엔드를 모두 구동</li>
                </ul>`,
            "jp":"",
            "en":""
        },
        image: [
            "/project/chatbot/01.jpg", "/project/chatbot/02.jpg",
            "/project/chatbot/03.jpg", "/project/chatbot/04.jpg"
        ]
    },
    {
        icon: "/project/backup/icon.png",
        title: {
            "ko":"인증서 클라우드 백업 서비스",
            "jp":"",
            "en":""
        },
        simpledesc: {
            "ko":"브라우저 내부 저장소의 인증서를 백업하여 다른 기기에서 쓸 수 있게 해주는 서비스",
            "jp":"",
            "en":""
        },
        platform: "Web",
        tech: "Spring Boot 2 (Java), PostgreSQL",
        period: "2019.12-2020.05",
        link: [],
        content: {
            "ko":`<ul>
                    <li>브라우저 내부 저장소에 저장되어있는 인증서를 서버에 백업하여 브라우저/기기에 상관없이 인증서를 사용할 수 있게 하는 서비스</li>
                    <li>클라이언트는 기존 개발되어있는 가입자 소프트웨어를 확장하여 클라이언트를 만듦</li>
                    <li>서버는 Spring Boot와 PostgreSQL을 사용하여 신규 제작</li>
                </ul>`,
            "jp":"",
            "en":""
        },
        dev: {
            "ko":`
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>[ 담당파트: 서버 및 DB ]</b>
                <ul>
                    <li>클라이언트와의 통신을 위해 RESTful API 형태로 개발</li>
                    <li>HSM을 연동하여 보안성을 높임 (PKCS11 Provider)</li>
                    <li>외부의 SMS 모듈을 사용한 SMS 인증 제공</li>
                </ul>`,
            "jp":"",
            "en":""
        },
        image: [
            "/project/backup/01.png", "/project/backup/02.jpg", "/project/backup/03.png"
        ]
    },
    {
        icon: "/project/aicore/icon.png",
        title: {
            "ko":"AI 플랫폼 개발 및 채팅봇 개발",
            "jp":"AIプラットフォーム",
            "en":"AI Platform Development"
        },
        simpledesc: {
            "ko":"AI Agent간 데이터 전송 개발, AI 플랫폼을 활용한 채팅봇 서비스 개발",
            "jp":"",
            "en":""
        },
        platform: "Java, Web",
        tech: "Java, JavaScript, Tomcat 8, jQuery, HTML, Bootstrap",
        period: "2015.5~2016.8",
        link: ["https://aibrain.com/solutions/aicore-adaptive-interactive-cognitive-reasoning-engine/"],
        content: {
            "ko":`대화 가능한 AI를 만들기 위한 자연언어 처리 프로젝트에 통신 모듈 개발로 참가<br/><br/>
            (1) IAC(Inter-Agent Communication)
            <ul>
                <li>Planner에서 다른 에이전트로의 데이터 전송을 요청받음</li>
                <li>JADE Framework에서 FIPA-ACL 메시지 구조에 맞는 통신용 메시지를 작성 및 전송</li>
            </ul>
            (2) AI 플랫폼을 활용한 채팅봇 개발
            <ul>
                <li>상기 플랫폼을 사용하여 클라이언트와 서버가 자연어로 대화를 주고받을 수 있는 채팅봇 서비스를 개발</li>
                <li>TTS로 채팅 내용을 읽어주고 및 마이크를 사용해 말을 전달 할 수 있도록 개발</li>
                <li>Vanilla JS로 개발하였으며 1년간 회사 홈페이지에서 서비스</li>
            </ul>
            * JADE Framework: Java로 작성된 Multi-Agent System 개발을 위한 프레임워크<br/>
            * ACL: Agent Communication Language`,
            "jp":``,
            "en":``
        },
        dev: {
            "ko":`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[ 채팅봇 관련 ]
                <ul>
                    <li>Tomcat에 Natural Language Processing 엔진을 수정하여 구동</li>
                    <li>TTS에는 Speech Synthesis API를 사용하여 개발</li>
                </ul>`,
            "jp":"",
            "en":""
        },
        image: [
            "/project/aicore/01.jpg", "/project/aicore/02.jpg",
            "/project/aicore/03.jpg", "/project/aicore/04.jpg",
            "/project/aicore/05.jpg"
        ]
    },
    {
        icon: "/project/aigame/icon.png",
        title: {
            "ko":"AI 플랫폼을 활용한 데모 게임 개발",
            "jp":"AIゲーム開発",
            "en":"AI Game Development"
        },
        simpledesc: {
            "ko":"NPC가 게임의 환경을 이해하고 다음 동작을 결정해 행동하는 데모 게임 개발",
            "jp":"",
            "en":""
        },
        platform: "Unity",
        tech: "Java, C#, Spring Framework, Unity3D, MariaDB",
        period: "2016.8~2017.2",
        link: ["https://aibrain.com/products/futurable-true-ai-game/"],
        content: {
            "ko":`<ul>
                    <li>회사가 보유한 AI 기술을 활용하여 데모 게임 개발을 진행</li>
                    <li>NPC는 게임의 환경을 확인하여 현재 자신의 상태와 조건을 확인</li>
                    <li>NPC의 다음 동작은 이러한 상태를 사용한 추론 결과에 따라 진행됨</li>
                </ul>`,
            "jp":``,
            "en":``
        },
        dev: {
            "ko":`(1) 클라이언트 (C#)
            <ul>
                <li>Google Play Service 연동, 서버 통신, UI, 디버깅</li>
            </ul>
            (2) 서버 (Java/Spring)
            <ul>
                <li>회사에서 제작한 AI 플랫폼을 서버에서 구동</li>
                <li>유저별 대화내용 보존 및 대화 시스템 구성 및 개발</li>
                <li>클라이언트와 서버간의 요청과 응답은 API 형태로 제작</li>
            </ul>`,
            "jp":"",
            "en":""
        },
        image: [
            "/project/aigame/01.jpg", "/project/aigame/02.jpg",
            "/project/aigame/03.jpg"
        ]
    },
    {
        icon: "/project/fautonomy/icon.png",
        title: {
            "ko":"AI 게임 개발 플러그인",
            "jp":"AIゲームプラグイン開発",
            "en":"AI Game Plugin Development"
        },
        simpledesc: {
            "ko":"",
            "jp":"",
            "en":""
        },
        platform: "Unity",
        tech: "Java, C#, Spring Framework, Unity3D",
        period: "2017~2019",
        link: ["https://aibrain.com/products/futurable-true-ai-game/",
                "https://assetstore.unity.com/packages/tools/ai/fautonomy-105444"],
        content: {
            "ko":`<ul>
                    <li>AI 게임에 사용된 기술을 사용하여 Unity 개발자가 사용할 수 있는 플러그인을 제작</li>
                    <li>개발자는 게임내의 환경 상황, 캐릭터의 시야나 인지에 대한 설정, 캐릭터가 수행하는 동작에 대한 조건 등을 플러그인에 입력</li>
                    <li>사용자가 지정한 조건을 서버로 전송하여 Tensorflow로 학습</li>
                    <li>학습의 결과로 나온 ProtoBuf 파일을 다운로드하여 클라이언트에 적용</li>
                </ul>`,
            "jp":``,
            "en":``
        },
        dev: {
            "ko":`(1) 클라이언트 (C#)
            <ul>
                <li>UI, 서버 통신, 디버그</li>
            </ul>
            (2) 서버 (Java/Spring)
            <ul>
                <li>서버에서 전송한 게임 환경 정보 등을 Process로 Python 코드를 실행하는 방식으로 수행</li>
                <li>Python 코드는 Tensorflow를 실행하기 위한 코드가 들어있음</li>
                <li>다수의 클라이언트에서 동시에 요청이 들어오는 경우 Queue로 관리</li>
                <li>URL로 클라이언트에서 요청을 받고 처리함</li>
            </ul>`,
            "jp":"",
            "en":""
        },
        image: [
            "/project/fautonomy/01.jpg", "/project/fautonomy/02.jpg",
            "/project/fautonomy/03.jpg"
        ]
    },
    {
        icon: "/project/situation/icon.png",
        title: {
            "ko":"온톨로지 기반의 상황인지 모바일 프레임워크",
            "jp":"",
            "en":"Situation aware mobile framework based on ontology"
        },
        simpledesc: {
            "ko":"논문 내용 증명 개발 지원으로 참여한 프로젝트",
            "jp":"",
            "en":""
        },
        platform: "Java, Android",
        tech: "Java, OWL, SPARQL, Android, Protege, Apache Jena",
        period: "2013",
        link: ["https://www.researchgate.net/publication/264428214_Mobile_situation-aware_framework_for_developing_smart_mobile_software"],
        content: {
            "ko":`<ul>
                    <li>모바일 환경에서 사용자의 현재 조건에 맞는 콘텐츠를 제공하는 프레임워크</li>
                    <li>증명 지원을 위한 안드로이드 앱 개발과 이미 만들어진 프레임워크의 수정을 담당</li>
                    <li>SCI-E 논문의 제 2저자로 참가</li>
                    <li>* Mobile situation-aware framework for developing smart mobile software, Joonseok Park, Taejun Kang, Keunhyuk Yeom, Journal of Software: Evolution and Process, Vol. 26, Issue 12, 1 Dec 2014</li>
                </ul>`,
            "jp":"",
            "en":""
        },
        dev: {
            "ko":`[테스트용 음악 재생 어플]
                    <ul>
                        <li>스마트폰의 센서에서 데이터를 수집하고 온톨로지를 사용한 추론을 통해 결과값을 얻음</li>
                        <li>도출된 결과 값을 이용하여 사용자에게 적합한 음악을 추천 및 재생</li>
                    </ul>
                    [프레임워크 수정]
                    <ul>
                        <li>온톨로지를 분석하여 사용자가 설정한 값을 한 번에 확인할 수 있는 트리 구조 생성 및 제공</li>
                    </ul>`,
            "jp":"",
            "en":""
        },
        image: [
            "/project/situation/01.jpg", "/project/situation/02.jpg",
            "/project/situation/03.jpg", "/project/situation/04.jpg"
        ]
    },
    {
        icon: "/project/bigdata/icon.png",
        title: {
            "ko":"Big Data 서비스 조합 프레임워크",
            "jp":"",
            "en":""
        },
        simpledesc: {
            "ko":"빅 데이터의 수집, 가공, 표현을 수행하는 서비스들을 조합하여 하나의 데이터 통계 처리 시스템으로 만들어 주는 프레임워크 개발",
            "jp":"",
            "en":""
        },
        platform: "Web",
        tech: "PHP, JavaScript, jQuery, Apache HTTP Server, JBoss",
        period: "2013~2014",
        link: [],
        content: {
            "ko":`<ul>
                    <li>Big Data의 사용을 수집, 처리, 표현의 3가지로 나누어 서비스들을 합쳐 하나의 시스템을 만들어내는 프레임워크</li>
                </ul>`,
            "jp":"",
            "en":""
        },
        dev: {
            "ko":`<ul>
                    <li>UML로 시스템 구조 설계에 참여</li>
                    <li>jQuery를 사용하여 UI 일부와 관련 동작을 개발</li>
                </ul>`,
            "jp":"",
            "en":""
        },
        image: [
            "/project/bigdata/01.jpg", "/project/bigdata/02.jpg"
        ]
    }
];

export default projNonPersonal;