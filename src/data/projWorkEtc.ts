const projWorkEtc = [
    {
        title: {
            "ko":"온톨로지 기반의 상황인지 모바일 프레임워크",
            "jp":"Skill Navigator",
            "en":"Situation aware mobile framework based on ontology"
        },
        platform: "Java, Android",
        tech: "Java, Android, Protege, Jena",
        period: "2013",
        link1: "",
        link2: "",
        link3: "",
        content: {
            "ko":`- 모바일 환경에서 사용자의 현재 조건에 맞는 콘텐츠를 제공하는 프레임워크
            - 증명 지원을 위한 안드로이드 앱 개발과 이미 만들어진 프레임워크의 수정을 담당
            - SCI-E 논문의 제 2저자로 참가
            * Mobile situation-aware framework for developing smart mobile software, Joonseok Park, Taejun Kang, Keunhyuk Yeom, Journal of Software: Evolution and Process, Vol. 26, Issue 12, 1 Dec 2014`,
            "jp":"",
            "en":""
        },
        dev: {
            "ko":``,
            "jp":"",
            "en":""
        },
        image: [
            "/projWorkEtc/situation/01.jpg", "/projWorkEtc/situation/02.jpg",
            "/projWorkEtc/situation/03.jpg", "/projWorkEtc/situation/04.jpg"
        ]
    },
    {
        title: {
            "ko":"AI 플랫폼 개발",
            "jp":"AIプラットフォーム",
            "en":"AI Platform Development"
        },
        platform: "Java",
        tech: "",
        period: "2015.5~2016.8",
        link1: "https://aibrain.com/solutions/aicore-adaptive-interactive-cognitive-reasoning-engine/",
        link2: "",
        link3: "",
        content: {
            "ko":`- 대화 가능한 AI를 만들기 위한 자연언어 처리 프로젝트에 모듈 개발로 참가
            
            (1) NLG(Natural Language Generation) 엔진
            - Planner에서 생성할 문장을 입력을 받음
            - 시간 정보를 제외한 문장 생성
            - 분석된 시제 정보에 따라 문장 시제 변경
            - 완성된 문장을 리턴
            
            (2) IAC(Inter-Agent Communication)
            - Planner에서 다른 에이전트로의 데이터 전송을 요청받음
            - JADE Framework에서 FIPA-ACL 메시지 구조에 맞는 통신용 메시지를 작성
            - JADE Framework로 메시지를 전송
            
            * JADE Framework: Java로 작성된 Multi-Agent System 개발을 위한 프레임워크
            * ACL: Agent Communication Language`,
            "jp":`- 言葉を分かるAIを作る為の自然言語処理プロジェクトに参加`,
            "en":``
        },
        dev: {
            "ko":"Java, JADE Framework",
            "jp":"",
            "en":""
        },
        image: [
            "/projWorkEtc/aicore/01.jpg", "/projWorkEtc/aicore/02.jpg",
            "/projWorkEtc/aicore/03.jpg", "/projWorkEtc/aicore/04.jpg",
            "/projWorkEtc/aicore/05.jpg"
        ]
    },
    {
        title: {
            "ko":"AI 게임 개발",
            "jp":"AIゲーム開発",
            "en":"AI Game Development"
        },
        platform: "Unity",
        tech: "Unity",
        period: "2016.8~2017.2",
        link1: "https://aibrain.com/products/futurable-true-ai-game/",
        link2: "",
        link3: "",
        content: {
            "ko":`- 회사가 보유한 AI 기술을 활용하여 게임 개발을 진행
            - NPC는 게임의 환경을 확인하여 현재 자신의 상태와 조건을 확인
            - NPC의 다음 동작은 이러한 상태를 사용한 추론 결과에 따라 진행됨`,
            "jp":``,
            "en":``
        },
        dev: {
            "ko":`(1) 클라이언트 (C#)
            - Google Play Service 연동, 서버 통신, UI, 디버깅

            (2) 서버 (Java/Spring)
            - 회사에서 보유중인 AI 플랫폼을 서버에서 구동
            - 유저별 대화내용 보존 및 대화 시스템 구성 및 개발
            - XHR로 클라이언트에서 요청을 받음`,
            "jp":"",
            "en":""
        },
        image: [
            "", ""
        ]
    },
    {
        title: {
            "ko":"AI 게임 개발 플러그인",
            "jp":"AIゲームプラグイン開発",
            "en":"AI Game Plugin Development"
        },
        platform: "Unity",
        tech: "Unity",
        period: "2016.12~2018.1",
        link1: "https://aibrain.com/products/futurable-true-ai-game/",
        link2: "",
        link3: "",
        content: {
            "ko":`- AI 게임에 사용된 기술을 사용하여 Unity 개발자가 사용할 수 있는 플러그인을 제작
            - 개발자는 게임내의 환경 상황, 캐릭터의 시야나 인지에 대한 설정, 캐릭터가 수행하는 동작에 대한 조건 등을 플러그인에 입력
            - 사용자가 지정한 조건을 서버로 전송하여 Tensorflow로 학습
            - 학습의 결과로 나온 ProtoBuf 파일을 다운로드하여 클라이언트에 적용
            
            * ProtoBuf(Protocol Buffer): 구글이 개발한 직렬화 데이터 구조 (Serialized Data Structure)`,
            "jp":``,
            "en":``
        },
        dev: {
            "ko":`(1) 클라이언트 (C#)
            - UI, 서버 통신, 디버그

            (2) 서버 (Java/Spring)
            - 서버에서 전송한 게임 환경 정보 등을 Process로 Python 코드를 실행하는 방식으로 수행
            - 다수의 클라이언트에서 동시에 요청이 들어오는 경우 Queue로 관리
            - XHR로 클라이언트에서 요청을 받음`,
            "jp":"",
            "en":""
        },
        image: [
            "", ""
        ]
    }
];

export default projWorkEtc;