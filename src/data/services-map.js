const publicDir = process.env.PUBLIC_URL;

const servicesMap = new Map();

servicesMap["desalinated-water"] = {
    title: "Agua Osmotizada",
    subtitle: "Agua Pura y Saludable para tu Hogar u Oficina",
    imageSrc: publicDir + "/img/services/img-osmotizada.jpeg",
    imageAlt: "imagen agua osmotizada",
    summary: "Nuestro servicio ofrece acceso conveniente a agua osmotizada de alta pureza. Utilizando tecnología de ósmosis inversa de vanguardia, eliminamos las impurezas y contaminantes, proporcionando agua excepcionalmente limpia y saludable para beber y cocinar. Nuestro proceso asegura la eliminación efectiva de sedimentos, minerales y sabores no deseados, ofreciendo una experiencia de hidratación y sabor superiores. Además, enfocados en la sostenibilidad, reducimos residuos alentando el uso de envases reutilizables. Mejore su estilo de vida con nuestra agua osmotizada, respaldando su bienestar y contribuyendo al cuidado del medio ambiente de manera cómoda y efectiva."
};

servicesMap["filtration-and-softening"] = {
    title: "Filtración y Suavización",
    subtitle: "Técnicas de Filtración y Suavización para una Calidad Superior",
    imageSrc: publicDir + "/img/services/img-filtracion.jpg",
    imageAlt: "imagen filtración y suavización",
    summary: "Nuestro servicio de Filtración y Suavización de agua ofrece una solución completa para mejorar la calidad de tu suministro de agua. Mediante avanzados sistemas de filtración, eliminamos sedimentos, impurezas y contaminantes, garantizando un agua más clara y segura para beber y usar en tu hogar o negocio. Además, nuestra tecnología de suavización reduce los niveles de minerales que causan dureza en el agua, mejorando la eficiencia de tus electrodomésticos y prolongando su vida útil. Disfruta de los beneficios de un agua más limpia, suave y saludable con nuestro servicio especializado de Filtración y Suavización."
};

servicesMap["clarification"] = {
    title: "Clarificación",
    subtitle: "Métodos de Purificación de Agua para una Transparencia Cristalina",
    imageSrc: publicDir + "/img/services/img-clarificacion.jpg",
    imageAlt: "imagen clarificación",
    summary: "Nuestro servicio de Clarificación de Agua brinda una solución efectiva para lograr una claridad cristalina en tu suministro de agua. A través de métodos avanzados de clarificación, eliminamos partículas suspendidas y turbidez, proporcionándote un agua visualmente transparente y estéticamente agradable. Ya sea para consumo o aplicaciones industriales, nuestra tecnología de vanguardia garantiza que el agua cumpla con los más altos estándares de pureza. Confía en nuestro servicio de Clarificación de Agua para obtener un suministro límpido y de calidad superior, mejorando tanto la utilidad como la apariencia del agua en tus necesidades diarias."
};

servicesMap["chemical-cleaning"] = {
    title: "Limpieza Química",
    subtitle: "Estrategias Avanzadas de Limpieza Química para la Potabilización del Agua",
    imageSrc: publicDir + "/img/services/img-limpieza.jpg",
    imageAlt: "imagen limpieza química",
    summary: "Nuestro servicio de Limpieza Química de Agua ofrece una solución integral para la optimización de la calidad del agua. A través de procesos avanzados de limpieza, eliminamos eficazmente contaminantes químicos y biológicos, garantizando la seguridad y pureza del suministro de agua. Ya sea para sistemas de distribución, equipos industriales o aplicaciones comerciales, nuestra tecnología especializada aborda problemas como incrustaciones y corrosión, mejorando la eficiencia operativa y prolongando la vida útil de los sistemas de agua. Confía en nuestro servicio de Limpieza Química de Agua para mantener un suministro limpio, saludable y funcional, cumpliendo con los más altos estándares de calidad."
};

servicesMap["cooling"] = {
    title: "Enfriamiento",
    subtitle: "Tecnologías y Métodos para el Enfriamiento Eficiente del Agua",
    imageSrc: publicDir + "/img/services/img-enfriamiento.jpg",
    imageAlt: "imagen enfriamiento",
    summary: "Nuestro servicio de Enfriamiento de Agua ofrece soluciones de vanguardia para mantener la temperatura adecuada en tus procesos industriales o sistemas de refrigeración. A través de tecnologías avanzadas, regulamos eficientemente la temperatura del agua, optimizando el rendimiento de tus equipos y garantizando la seguridad operativa. Ya sea para aplicaciones comerciales o industriales, nuestro servicio se adapta a tus necesidades específicas, proporcionando un control térmico confiable y sostenible. Confía en nuestra experiencia en Enfriamiento de Agua para mantener tus operaciones funcionando sin problemas y tus sistemas trabajando en condiciones ideales de temperatura."
};

servicesMap["boilers"] = {
    title: "Calderas",
    subtitle: "Funcionamiento y Optimización de Calderas de Agua",
    imageSrc: publicDir + "/img/services/img-caldera.jpg",
    imageAlt: "imagen calderas",
    summary: "Nuestro servicio de Calderas de Agua brinda soluciones integrales para una generación eficiente de vapor y calefacción. Con tecnología de punta, diseñamos, instalamos y mantenemos calderas que cumplen con los más altos estándares de seguridad y rendimiento. Ya sea para aplicaciones industriales o comerciales, nuestras soluciones se adaptan a tus necesidades energéticas y operativas. Garantizamos una operación confiable y rentable de tus sistemas de calefacción y producción de vapor, maximizando la eficiencia y minimizando el impacto ambiental. Confía en nuestro expertise en Calderas de Agua para un suministro de calor y vapor seguro, eficiente y sostenible."
};

export default servicesMap;