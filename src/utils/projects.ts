import type { Project } from '@/types/project';

export const projects: Project[] = [
    {
        name: "index.projects.vswiss.title",
        info: "index.projects.vswiss.description",
        link: "",
        fallback: "",
        techs: ["Laravel", "Inertia", "React", "Tailwind"],
        img: "/vswiss_main.png",
        logo: "",
        alt: "vswiss project presentation"
    },
    {
        name: "index.projects.cncep.title",
        info: "index.projects.cncep.description",
        link: "https://cncep-2025.vercel.app/",
        fallback: "",
        techs: ["React", "Tailwind"],
        img: "",
        logo: "/cncep_logo.webp",
        alt: "CNCEP project presentation"
    },
    {
        name: "index.projects.mbp.title",
        info: "index.projects.mbp.description",
        link: "",
        fallback: "projects/musicbandpage",
        techs: ["Laravel", "Inertia", "React", "Tailwind", "Stripe", "Filament"],
        img: "/mbp_ex_port.png",
        logo: "",
        alt: "MBP project presentation"
    },
    {
        name: "index.projects.sailaway.title",
        info: "index.projects.sailaway.description",
        link: "",
        fallback: "projects/sailaway",
        techs: ["Laravel", "MySQL", "Tailwind"],
        img: "/sailaway/000.png",
        logo: "",
        alt: "Sailaway project presentation"
    },
];
