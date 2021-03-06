class Language {
    static getLang(): string {
        return 'ko'
        /*let lang = navigator.language;// || navigator.systemLanguage;
        if(this.readCookie("lang") !== null &&
            (this.readCookie("lang") === 'ko' || this.readCookie("lang") === 'jp' || this.readCookie("lang") === 'en')
        ) {
            lang = this.readCookie("lang")!;
        }
        else {
            if(lang==='ko' || lang==='ko-kr' || lang==='ko-KR') {
                lang = 'ko';
            }
            else if(lang==='ja' || lang==='ja-jp' || lang==='ja-JP') {
                lang = 'jp';
            }
            else {
                lang = 'en';
            }
        
            this.eraseCookie("lang");
            this.createCookie("lang", lang, 1);
        }
        return lang;*/
    }

    static changeLang(type: string) {
        this.eraseCookie("lang");
        this.createCookie("lang", type, 1);
        window.location.reload();
    }

    static createCookie(name: string, value: string, days: number) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime()+(days*24*60*60*1000));
            expires = "; expires="+date.toUTCString();
        }
        else expires = "";
        document.cookie = name+"="+value+expires+"; path=/";
    }

    static readCookie(name: string) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for(let i=0;i < ca.length;i++) {
            let c = ca[i];
            while (c.charAt(0)===' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    static eraseCookie(name: string) {
        this.createCookie(name,"",-1);
    }
}

export default Language;