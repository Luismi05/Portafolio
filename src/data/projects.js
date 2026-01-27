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

        tech: ['Html', 'JavaScript', 'Jquery', 'Php', 'Css', 'MySQL'],
        image: '../public/banner_turnos.png',
        image2: '../public/turnos.png'
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
        tech: ['Php', 'WordPress', 'Gutenberg ', 'Mysql'],
        image: '../public/banner_wp.png',
        image2: '../public/web_adida.png',
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
        tech: ['Laravel', 'React', 'PostgreSQL'],
        image: '../public/banner_control.png',
        image2: '../public/login_acceso.png',
        image3: '../public/panel_acceso.png'
    },

    {
        id: 4,
        title: 'Sistema de correos correos masivos',
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
        caracteristicas: [],
        tech: ['laravel', 'React', 'PostgreSQL'],
        image: '../public/banner_mailer.png',
        image2: '../public/',
        image3: '../public'
    },

]

