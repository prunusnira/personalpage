class ProjectItem {
    icon: string;
    title: string;
    simpledesc: string;
    platform: string;
    tech: string;
    period: string;
    link1: string;
    link2: string;
    link3: string;
    content: string;
    dev: string;
    image: Array<string>;

    constructor(
        icon: string,
        title: string,
        simpledesc: string,
        platform: string,
        tech: string,
        period: string,
        link: string,
        link2: string,
        link3: string,
        content: string,
        dev: string,
        image: Array<string>) {
            this.icon = icon;
            this.title = title;
            this.simpledesc = simpledesc;
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