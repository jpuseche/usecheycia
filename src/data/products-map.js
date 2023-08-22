const publicDir = process.env.PUBLIC_URL;

const productsMap = new Map();

productsMap["antifoam"] = {
    title: "Antiespumas",
    subtitle: "Productos Antiespumas para Procesos Industriales",
    imageSrc: publicDir + "/img/products/img-antiespumas.jpg",
    imageAlt: "imagen antiespumas",
    summary: "Nuestros productos antiespumantes son la solución perfecta para combatir y prevenir la formación de espuma no deseada en una amplia gama de aplicaciones industriales. Diseñados con precisión, estos agentes antiespumantes altamente eficaces eliminan rápidamente la espuma existente y evita su reaparición, mejorando la eficiencia y estabilidad de los procesos. Desde aplicaciones en la industria química hasta la producción alimentaria, nuestros productos antiespumantes garantizan un control confiable y duradero de la espuma, permitiendo un funcionamiento suave y sin interrupciones. Simplifica tus operaciones y optimiza los resultados con nuestras soluciónes antiespumantes de confianza."
};

productsMap["boiler-chemicals"] = {
    title: "Químicos para calderas",
    subtitle: "Productos Químicos Esenciales para Calderas Eficientes",
    imageSrc: publicDir + "/img/products/img-quimicos-para-calderas.jpg",
    imageAlt: "imagen químicos para calderas",
    summary: "Nuestra selección de químicos para calderas ofrece un enfoque integral para mantener y optimizar el rendimiento de tus sistemas de calentamiento. Diseñados específicamente para abordar problemas como incrustaciones, corrosión y formación de sedimentos, nuestros químicos garantizan una operación eficiente y prolongan la vida útil de tus equipos. Con fórmulas avanzadas y probadas, estos productos trabajan en sinergia para prevenir problemas costosos y mantener una producción de calor consistente y segura. Confía en nuestra experiencia en químicos para calderas para lograr una eficiencia térmica óptima y una operación confiable en tus procesos industriales o comerciales."
};

productsMap["coagulants"] = {
    title: "Coagulantes",
    subtitle: "Productos Coagulantes para una Purificación Efectiva del Agua",
    imageSrc: publicDir + "/img/products/img-coagulantes.jpg",
    imageAlt: "imagen coagulantes",
    summary: "Nuestra línea de productos coagulantes ofrece soluciones avanzadas para la purificación del agua. Diseñados meticulosamente, estos agentes facilitan la agregación y precipitación de partículas suspendidas y contaminantes en el agua, permitiendo una remoción eficiente. Desde aplicaciones municipales hasta industriales, nuestros productos coagulantes garantizan una clarificación efectiva y una mejora en la calidad del agua. Con formulaciones adaptadas a diversas necesidades, brindamos soluciones confiables para enfrentar los desafíos de tratamiento de aguas. Confía en nuestra experiencia en productos coagulantes para lograr resultados de purificación superiores y un suministro de agua más limpio y seguro."
};

productsMap["desinfectants"] = {
    title: "Desinfectantes",
    subtitle: "Productos Desinfectantes para Ambientes Saludables",
    imageSrc: publicDir + "/img/products/img-desinfectantes.jpg",
    imageAlt: "imagen desinfectantes",
    summary: "Nuestra selección de productos desinfectantes de agua ofrece una solución integral para garantizar la seguridad microbiológica de tu suministro de agua. Diseñados para eliminar bacterias, virus y microorganismos patógenos, estos productos aseguran una desinfección efectiva sin comprometer la calidad del agua. Desde el tratamiento de agua potable hasta aplicaciones industriales, nuestros desinfectantes son confiables y de alto rendimiento, garantizando la salud pública y la integridad de tus procesos. Confía en nuestra experiencia en productos desinfectantes de agua para mantener un suministro de agua libre de contaminantes y seguro para diversas aplicaciones."
};

productsMap["floculants"] = {
    title: "Floculantes",
    subtitle: "Productos Floculantes para una Sedimentación Eficiente del Agua",
    imageSrc: publicDir + "/img/products/img-floculantes.png",
    imageAlt: "imagen floculantes",
    summary: "Nuestra gama de productos floculantes representa una solución efectiva para la clarificación del agua. Estos agentes cuidadosamente formulados facilitan la aglomeración y precipitación de partículas y sedimentos suspendidos en el agua, permitiendo una eliminación más eficiente. Desde aplicaciones municipales hasta industriales, nuestros productos floculantes garantizan una sedimentación mejorada y una mejora en la calidad del agua. Adaptados a diversas necesidades, ofrecemos soluciones confiables para abordar los desafíos de tratamiento de aguas. Confía en nuestra experiencia en productos floculantes para lograr resultados superiores en la clarificación y mantener un suministro de agua más limpio y claro."
};

productsMap["oxygen-cleaners"] = {
    title: "Limpiadores de Oxígeno",
    subtitle: "Productos Limpiadores para una Hidratación y Claridad Refrescantes",
    imageSrc: publicDir + "/img/products/img-limpiador-oxigeno.jpg",
    imageAlt: "imagen limpiador oxigeno",
    summary: "Nuestra línea de productos limpiadores de oxígeno en agua ofrece una solución esencial para mantener niveles óptimos de oxígeno disuelto en sistemas acuáticos. Estos productos están diseñados para aumentar la cantidad de oxígeno disponible en el agua, promoviendo un entorno saludable para peces y organismos acuáticos. Ya sea para acuarios, estanques o sistemas industriales, nuestros limpiadores de oxígeno mejoran la calidad del agua, ayudando a prevenir problemas de hipoxia y estrés en la vida acuática. Confía en nuestra experiencia en productos limpiadores de oxígeno para mantener un equilibrio vital en tus sistemas acuáticos y asegurar un entorno acuático vibrante y saludable."
};

export default productsMap;