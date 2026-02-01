import bannerWP from '../assets/projects/banner_wp.png';
import viewWP from '../assets/projects/web_adida.png'
import bannerTU from '../assets/projects/banner_turnos.png';
import viewTU from '../assets/projects/login_turnos.png';
import viewTUP from '../assets/projects/panel_turnos.png';
import bannerCO from '../assets/projects/banner_control.png';
import viewCO from '../assets/projects/login_acceso.png';
import viewCOP from '../assets/projects/panel_acceso.png';
import bannerMA from '../assets/projects/banner_mailer.png';
import viewMA from '../assets/projects/panel_mailer.png';
import viewMAG from '../assets/projects/groups_mailer.png';
import viewMAT from '../assets/projects/templates_mailer.png';

export const projects = [
    {
        id: 1,
        title: 'Aplicación cambios de turnos',
        descripcion: ['Este proyecto representó mi primer gran reto profesional. ',
            'En el año 2021, dentro de la empresa donde laboraba, se identificó una ',
            'problemática crítica relacionada con los cambios de turnos del personal asistencial, ',
            'los cuales se realizaban de forma desorganizada y poco eficiente. ',
            'Ante esta situación, surgió la necesidad de desarrollar una herramienta ',
            'digital que optimizara y centralizara el proceso de gestión de turnos, facilitando ',
            'tanto al personal asistencial como al personal administrativo la planificación, ',
            'el control y la trazabilidad de los cambios realizados.'

        ],
        descripcion2: ['El objetivo de este proyecto fue optimizar y facilitar la gestión de los cambios de turno del personal ',
            'asistencial, un proceso que anteriormente se realizaba de forma manual y desorganizada. La solución ',
            'digital desarrollada permitió centralizar la información, reducir errores operativos y mejorar la ',
            'comunicación entre el personal asistencial y administrativo, logrando así una gestión más eficiente, ágil y confiable.'
        ],
        impact: ['Se logró organizar y digitalizar un proceso que anteriormente se realizaba de forma manual y desordenada.',
            'Reducción significativa de errores en los cambios de turno y conflictos operativos entre el personal asistencial.',
            'Optimización del tiempo de gestión, permitiendo una planificación más eficiente y transparente de los turnos.',
            'El sistema sentó las bases para futuras mejoras en la gestión de recursos humanos dentro de la organización.'
        ],

        caracteristicas: {
            front: {
                title: 'Front-end',
                content: [
                    'El front-end de este proyecto fue desarrollado utilizando Html, Css, JavaScript y jQuery. Se diseñó una interfaz simple e intuitiva, ',
                    'priorizando la experiencia de usuario. Para ello, se implementaron formularios claros y funcionales, enfocados en facilitar la interacción ',
                    'del personal con el sistema y reducir la complejidad en el uso diario de la aplicación.'
                ],
            },
            back: {
                title: 'Back-end',
                content: [
                    'El back-end de este proyecto fue desarrollado en PHP puro, utilizando MySQL como motor de base de datos. ',
                    'La lógica del sistema se estructuró de manera clara y modular, permitiendo un manejo eficiente de la información, ',
                    'así como una correcta comunicación entre el servidor y el front-end.'
                ]
            },
            auth: {
                title: 'Autenticación',
                content: [
                    'La aplicación implementa un sistema de autenticación de nivel medio, enfocado en garantizar el acceso seguro a la plataforma. ',
                    'Se integró la API de Google para permitir el inicio de sesión mediante cuentas de Gmail, ',
                    'además de una configuración de roles y permisos que controla el acceso a las distintas funcionalidades del sistema.'
                ]
            },
            notify: {
                title: 'Notificaciones',
                content: [
                    'El sistema de notificaciones está diseñado para mantener al personal constantemente informado sobre los procesos internos. ',
                    'Se utiliza PhpMailer para la gestión de notificaciones por correo electrónico, ',
                    'incluyendo eventos como el registro de una nueva solicitud de cambio de turno, ',
                    'la aprobación o el rechazo de dichas solicitudes, notificando de forma oportuna a todo el personal involucrado.'
                ]
            },

            deploy: {
                title: 'Despliegue',
                content: [
                    'La aplicación fue desplegada en un servidor local con Windows Server 2010, utilizando Nginx como servidor web. ',
                    'Se prestó especial atención a la seguridad del sistema, limitando el acceso únicamente a nivel de red, ',
                    'permitiendo el ingreso solo de forma local o mediante conexión VPN.'
                ]
            }
        },
        skills: [1, 3, 5, 8, 16, 17, 18],
        image: bannerTU,
        image2: viewTU,
        image3: viewTUP,
    },

    {
        id: 2,
        title: 'Pagina web',
        descripcion: ['Este fue mi primer proyecto desarrollado en WordPress. Consistió en la creación de un sitio web corporativo, ',
            'siguiendo las buenas prácticas y lineamientos establecidos por la plataforma. ',
            'Se utilizó la plantilla Avril como base, la cual fue personalizada y adaptada a las necesidades específicas del ',
            'cliente, ajustando el diseño, la estructura y los contenidos para ofrecer una presencia digital profesional, ',
            'funcional y alineada con la identidad de la empresa. ',
        ],
        descripcion2: ['El objetivo de esta página web fue modernizar la versión anterior, la cual utilizaba tecnologías obsoletas. ',
            'Para ello, se realizó una actualización completa tanto a nivel visual como técnico, incorporando ',
            'herramientas y buenas prácticas actuales que mejoran el rendimiento, la seguridad, la experiencia de ',
            'usuario y la facilidad de mantenimiento del sitio. ',
        ],
        impact: ['El cliente obtuvo una presencia digital profesional, alineada con su identidad corporativa.',
            'La personalización de la plantilla permitió un sitio más claro, funcional y fácil de administrar.',
            'El proyecto fortaleció mis conocimientos en WordPress, personalización de plantillas y buenas prácticas web.',
            'Se entregó un sitio optimizado para usabilidad, contenido y estructura, listo para crecer en el tiempo.'
        ],
        caracteristicas: {
            front: {
                title: 'Front-end',
                content: [
                    'El front-end de esta página web fue desarrollado a partir de la plantilla Avril, la cual fue personalizada para adaptarse a los requerimientos del proyecto. ',
                    'Se utilizó Gutenberg como editor de bloques para la creación, adición y edición del contenido del sitio web, ',
                    'además de integrar diferentes plugins que permitieron la creación de formularios, tablas y otros elementos dinámicos necesarios para el funcionamiento de la página.'
                ],
            },
            back: {
                title: 'Back-end',
                content: [
                    'El back-end de este proyecto fue desarrollado en PHP puro, utilizando MySQL como motor de base de datos. ',
                    'Se implementaron bloques de código personalizados para realizar filtros por cédula y permitir la descarga de certificados en formato PDF, ',
                    'garantizando un procesamiento eficiente y seguro de la información.'
                ]
            },

            deploy: {
                title: 'Despliegue',
                content: [
                    'El despliegue de esta página web se realizó en un servicio de hosting, donde se configuraron correctamente los diferentes registros DNS, ',
                    'asegurando el correcto direccionamiento del dominio y la disponibilidad del sitio para los usuarios finales.'
                ]
            }
        },
        skills: [3, 5, 8, 15],
        image: bannerWP,
        image2: viewWP,
    },

    {
        id: 3,
        title: 'Sistema control de acceso',
        descripcion: ['Este proyecto consiste en el desarrollo de un sistema de control ',
            'de ingreso a las instalaciones de un edificio, orientado a mejorar la seguridad ',
            'y el registro de accesos. ',
            'La plataforma permite gestionar y monitorear el ingreso de personas de manera organizada, brindando ',
            'trazabilidad, control y validación de accesos, lo que facilita la administración y refuerza los protocolos de ',
            'seguridad del lugar.'
        ],
        descripcion2: ['El objetivo de este sistema fue fortalecer la seguridad y optimizar el control y registro de accesos a las ',
            'instalaciones de la empresa, permitiendo un seguimiento preciso de ingresos y salidas, mayor ',
            'trazabilidad de la información y una gestión más confiable para el personal administrativo y de seguridad.'

        ],
        impact: ['Se implementó un control centralizado de accesos, mejorando la seguridad de las instalaciones.',
            'Posibilidad de registrar y auditar ingresos de forma ordenada y confiable.',
            'Reducción de accesos no autorizados gracias a un proceso de validación estructurado.',
            'Mayor control administrativo y trazabilidad histórica de los accesos realizados.',
        ],
        caracteristicas: {
            front: {
                title: 'Front-end',
                content: [
                    'El front-end de este sistema fue desarrollado en ReactJS, mediante la creación de componentes eficientes y reutilizables, así como el uso de hooks para la gestión del estado y la lógica de la aplicación. ',
                    'El sistema consume APIs expuestas desde el back-end, permitiendo una comunicación fluida y desacoplada entre ambas capas. ',
                ]
            },
            back: {
                title: 'Back-end',
                content: [
                    'El back-end de este proyecto fue desarrollado en Laravel, siguiendo los lineamientos del patrón de arquitectura MVC. ',
                    'La aplicación se conecta a una base de datos PostgreSQL y expone sus funcionalidades al front-end a través de APIs seguras y bien estructuradas.',
                ]
            },

            auth: {
                title: 'Autenticación',
                content: [
                    'El proyecto cuenta con un sistema de autenticación robusto y seguro para el registro y acceso de usuarios. ',
                    'La autenticación está basada en Laravel Spatie para la configuración de roles y permisos, junto con la protección de rutas mediante Laravel Sanctum. ',
                    'Además, se implementan middlewares que refuerzan la seguridad y validan la autenticación a través de tokens.'
                ]
            },

            deploy: {
                title: 'Despliegue',
                content: [
                    'El despliegue de este sistema se realiza en el VPS de la empresa, utilizando Nginx como servidor web. ',
                    'Se configura el dominio y se gestionan correctamente los registros DNS para apuntar al VPS, garantizando estabilidad, seguridad y disponibilidad del sistema.'
                ]
            },
        },
        skills: [2, 4, 6, 7, 10, 11, 12, 13, 14, 18, 19],
        image: bannerCO,
        image2: viewCO,
        image3: viewCOP,
    },

    {
        id: 4,
        title: 'Sistema de correos masivos',
        descripcion: ['Plataforma de envíos masivos de correos electrónicos, diseñada como una solución completa y adaptable a ',
            'las necesidades del usuario. Aunque ya se lanzó una primera fase funcional del proyecto, se encuentra en  ',
            'constante evolución. ',
            'Actualmente, el sistema cuenta con funcionalidades como la gestión de plantillas, importación de contactos, ',
            'creación y administración de grupos, entre otras. Está prevista una nueva actualización para 2026, ',
            'en la cual se incorporarán funcionalidades adicionales orientadas a mejorar el rendimiento, la ',
            'automatización y el control de campañas.'
        ],
        descripcion2: ['Este proyecto consiste en el desarrollo de un sistema de envíos masivos de correos electrónicos diseñado ',
            'para optimizar la comunicación institucional y comercial. La plataforma permite gestionar listas de ',
            'destinatarios, enviar correos personalizados (simples o con plantillas HTML), programar envíos y controlar ',
            'la tasa de envío para garantizar la entrega efectiva. '

        ],
        impact: ['Se desarrolló una plataforma escalable capaz de gestionar campañas de correo masivo de forma organizada.',
            'Automatización de procesos clave como la gestión de contactos, grupos y plantillas.',
            'Mejora en la eficiencia operativa frente al envío manual de correos.',
            'Base sólida para futuras mejoras, permitiendo la evolución continua del sistema.',
            'El proyecto demuestra capacidad de planificación por fases, mantenimiento y crecimiento progresivo de una aplicación.',
        ],
        caracteristicas: {
            front: {
                title: 'Front-end',
                content: [
                    'El front-end de este sistema de envíos masivos fue desarrollado en ReactJS, mediante la creación de componentes eficientes y reutilizables, así como el uso de hooks para la gestión del estado, formularios y flujos de envío de correos. ',
                    'El sistema consume APIs expuestas desde el back-end para la gestión de campañas, listas de destinatarios, plantillas y estados de envío, permitiendo una comunicación fluida y desacoplada entre ambas capas. ',
                ]
            },
            back: {
                title: 'Back-end',
                content: [
                    'El back-end de este proyecto fue desarrollado en Laravel, siguiendo los lineamientos del patrón de arquitectura MVC. ',
                    'La aplicación se conecta a una base de datos PostgreSQL y gestiona la lógica de envío masivo, auditoría y control de correos, exponiendo sus funcionalidades al front-end a través de APIs seguras y bien estructuradas.',
                ]
            },

            auth: {
                title: 'Autenticación',
                content: [
                    'El proyecto cuenta con un sistema de autenticación robusto y seguro para el registro y acceso de usuarios al sistema de envíos masivos. ',
                    'La autenticación está basada en Laravel Spatie para la configuración de roles y permisos, junto con la protección de rutas mediante Laravel Sanctum. ',
                    'Además, se implementan middlewares que refuerzan la seguridad, controlan el acceso a las funcionalidades del sistema y validan la autenticación a través de tokens.'
                ]
            },

            deploy: {
                title: 'Despliegue',
                content: [
                    'El despliegue de este sistema de envíos masivos se realiza en el VPS de la empresa, utilizando Nginx como servidor web. ',
                    'Se configura el dominio y se gestionan correctamente los registros DNS para apuntar al VPS, garantizando estabilidad, seguridad y disponibilidad del servicio de envío.'
                ]
            },

        },
        skills: [2, 4, 6, 7, 10, 11, 12, 13, 14, 18, 19],
        image: bannerMA,
        image2: viewMA,
        image3: viewMAG,
        image4: viewMAT,
    },

]

