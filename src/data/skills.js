import {
    FaBootstrap,
    FaCss3,
    FaGitAlt,
    FaGithub,
    FaHtml5,
    FaJs,
    FaLaravel,
    FaPhp,
    FaReact,
    FaWordpress
} from 'react-icons/fa';

import {
    SiPostgresql,
    SiMysql,
    SiJsonwebtokens,
    SiVite,
    SiJquery,
    SiNginx
} from 'react-icons/si';

import { MdApi, MdSecurity } from 'react-icons/md';

export const skills = [
    { id: 1, label: 'JavaScript', icon: FaJs, className: 'icon-js' },
    { id: 2, label: 'React', icon: FaReact, className: 'icon-react' },
    { id: 3, label: 'PHP', icon: FaPhp, className: 'icon-php' },
    { id: 4, label: 'Laravel', icon: FaLaravel, className: 'icon-laravel' },
    { id: 5, label: 'CSS', icon: FaCss3, className: 'icon-css' },
    { id: 6, label: 'Bootstrap', icon: FaBootstrap, className: 'icon-bootstrap' },
    { id: 7, label: 'PostgreSQL', icon: SiPostgresql, className: 'icon-postgresql' },
    { id: 8, label: 'MySQL', icon: SiMysql, className: 'icon-mysql' },
    { id: 9, label: 'JWT', icon: SiJsonwebtokens, className: 'icon-jwt' },
    { id: 10, label: 'Laravel Sanctum', icon: MdSecurity, className: 'icon-laravel' },
    { id: 11, label: 'Git', icon: FaGitAlt, className: 'icon-git' },
    { id: 12, label: 'GitHub', icon: FaGithub, className: 'icon-github' },
    { id: 13, label: 'Vite', icon: SiVite, className: 'icon-vite' },
    { id: 14, label: 'REST API', icon: MdApi, className: 'icon-api' },
    { id: 15, label: 'WordPress', icon: FaWordpress, className: 'icon-wordpress' },
    { id: 16, label: 'Html', icon: FaHtml5, className: 'icon-api' },
    { id: 17, label: 'Jquery', icon: SiJquery, className: 'icon-postgresql' },
    { id: 18, label: 'Nginx', icon: SiNginx, className: 'icon-nginx' },
];
