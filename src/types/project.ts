import { ui, defaultLang } from '@/i18n/ui';

export type TranslationKey = keyof typeof ui[typeof defaultLang];

export interface Project {
    name: TranslationKey;
    info: TranslationKey;
    link: string;
    fallback: string;
    techs: string[];
    img: string;
    logo: string;
    alt: string;
}
