class ProjectItem {
    icon: string;
    title: string;
    simpledesc: string;
    platform: string;
    tech: string;
    period: string;
    link: string[];
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
        link: string[],
        content: string,
        dev: string,
        image: Array<string>) {
            this.icon = icon;
            this.title = title;
            this.simpledesc = simpledesc;
            this.platform = platform;
            this.tech = tech;
            this.period = period;
            this.link = link;
            this.content = content;
            this.dev = dev;
            this.image = image;
    }
}

export default ProjectItem;