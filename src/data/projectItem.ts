class ProjectItem {
    title: string;
    platform: string;
    tech: string;
    period: string;
    link1: string;
    link2: string;
    link3: string;
    content: string;
    dev: string;
    image: Array<string>;

    constructor(title: string, platform: string, tech: string,
        period: string, link: string, link2: string, link3: string,
        content: string, dev: string, image: Array<string>) {
            this.title = title;
            this.platform = platform;
            this.tech = tech;
            this.period = period;
            this.link1 = link;
            this.link2 = link2;
            this.link3 = link3;
            this.content = content;
            this.dev = dev;
            this.image = image;
    }
}

export default ProjectItem;