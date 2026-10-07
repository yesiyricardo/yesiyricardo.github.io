// config.js - Arquitectura Dinámica Unificada (Optimizada para Conversión Directa)
const SITE_CONFIG = {
    meta: {
        title: "Yesi y Ricardo | Plataforma Integral",
        description: "Explora el universo de Yesi y Ricardo: Alta gastronomía en Melómanos, Biohacking, Arpa Jazz, Tienda Oficial y Eventos.",
        favicon: "Foto Yesi Y Ricardo.jpg",
        ogImage: "Foto Yesi Y Ricardo.jpg"
    },
    navigation: [
        { label: "Inicio", target: "#hero" },
        { label: "Melómanos", target: "#melomanos" },
        { label: "Galería", target: "#multimedia" },
        { label: "Podcast", target: "#podcast" },
        { label: "Calendario", target: "#eventos" },
        { label: "Tienda", target: "#tienda" },
        { label: "Noticias", target: "#blog" },
        { label: "Contacto", target: "#contacto" }
    ],
    hero: {
        title: "Yesi y Ricardo",
        subtitle: "Música, Bienestar y Gastronomía Estimulante",
        videoBackground: "videos/halo-background.mp4",
        orientacion: "horizontal"
    },
    melomanos: {
        logo: "Logo Melómanos Comida Lenta.jpg",
        description: "Un santuario culinario donde el tiempo se detiene y la música guía los sabores. Cocina lenta para alimentar el alma y el cerebro.",
        gallery: [
            { type: "image", url: "imagenes/plato1.jpg", caption: "Gastronomía Evolutiva" },
            { type: "image", url: "imagenes/ambiente.jpg", caption: "Atmósfera Melómanos" }
        ]
    },
    multimedia: {
        videos: [
            { url: "videos/presentacion-arpa.mp4", titulo: "Sesión Íntima de Arpa Jazz", orientacion: "horizontal" },
            { url: "videos/neurociencia-clip.mp4", titulo: "Biohacking: Introducción Básica (Short)", orientacion: "vertical" }
        ],
        imagenes: [
            { url: "imagenes/galeria1.jpg", caption: "Encuentro Sociedad Bolivariana" },
            { url: "imagenes/galeria2.jpg", caption: "Ruta en Motocicleta Estilo Scrambler" },
            { url: "imagenes/galeria3.jpg", caption: "Concierto Acústico en Vivo" }
        ]
    },
    podcasts: [
        { id: "pod-1", titulo: "Episodio 1: Ondas Alfa y Frecuencias de Arpa", archivo: "audio/episodio1.mp3", portada: "imagenes/podcast-ep1.jpg", duracion: "15:24" },
        { id: "pod-2", titulo: "Episodio 2: Nutrición Celular y Ritmos Circadianos", archivo: "audio/episodio2.mp3", portada: "imagenes/podcast-ep2.jpg", duracion: "18:40" }
    ],
    eventos: [
        { 
            fecha: "05 Jun 2026", 
            titulo: "Noche de Arpa Jazz en Vivo", 
            hora: "08:00 PM", 
            lugar: "Melómanos Restaurante", 
            estado: "Cupos Limitados",
            whatsappLink: "https://wa.me/584121234567?text=Hola!%20Quiero%20reservar%20un%20cupo%20para%20la%20Noche%20de%20Arpa%20Jazz."
        },
        { 
            fecha: "18 Jun 2026", 
            titulo: "Masterclass: Biohacking y Nutrición Celular", 
            hora: "05:00 PM", 
            lugar: "Auditorio Presencial", 
            estado: "Inscripciones Abiertas",
            whatsappLink: "https://wa.me/584121234567?text=Hola!%20Me%20interesa%20inscribirme%20en%20la%20Masterclass%20de%20Biohacking."
        },
        { 
            fecha: "02 Jul 2026", 
            titulo: "Cena Sensorial a Ciegas - Menú Evolutivo", 
            hora: "07:30 PM", 
            lugar: "Melómanos Restaurante", 
            estado: "Últimas Mesas",
            whatsappLink: "https://wa.me/584121234567?text=Hola!%20Deseo%20información%20y%20reserva%20para%20la%20Cena%20Sensorial."
        }
    ],
    productos: [
        { id: "prod-01", nombre: "E-Book Premium: Código Biohacking", precio: "$19.99", imagen: "imagenes/ebook-cover.jpg", archivoDescarga: "documentos/codigo-biohacking.pdf" },
        { id: "prod-02", nombre: "Café Orgánico Melómanos - Selección Especial (500g)", precio: "$24.50", imagen: "imagenes/cafe-grano.jpg", archivoDescarga: "documentos/ficha-tecnica-cafe.pdf" },
        { id: "prod-03", nombre: "Álbum Digital Arpa Jazz Progresivo (WAV)", precio: "$12.00", imagen: "imagenes/album-cover.jpg", archivoDescarga: "documentos/album-arpa-jazz.zip" }
    ],
    blogs: [
        { title: "Neurociencia aplicada a la música diaria", summary: "Descubre cómo las frecuencias nativas modifican tus ondas alfa...", date: "22 May 2026", content: "El cerebro humano responde de manera asombrosa a las frecuencias acústicas organizadas. Al utilizar estructuras de arpa combinadas con progresiones armónicas de jazz, estimulamos la plasticidad sináptica y la segregación de neurotransmisores asociados al foco profundo." },
        { title: "El arte de comer despacio (Slow Food)", summary: "Por qué tu sistema digestivo y tu cerebro necesitan que mastiques con ritmo...", date: "15 May 2026", content: "La masticación consciente activa los receptores de saciedad en el hipotálamo mucho antes de que el estómago esté completamente lleno. En Melómanos diseñamos cada plato con un tempo específico para optimizar la respuesta digestiva neuro-entérica." }
    ],
    contacto: {
        email: "contacto@jesiyricardo.com",
        telefono: "+58 412-1234567",
        direccion: "Mérida, Venezuela",
        whatsappGeneral: "https://wa.me/584121234567?text=Hola!%20Me%20gustaría%20recibir%20atención%20al%20cliente%20y%20detalles%20de%20las%20experiencias."
    }
};
