import Banner from "../sections/service/Banner.js";
import Summary from "../sections/service/Summary.js";
import servicesMap from "../data/services-map";

function Service() {
    let serviceID = window.location.href.split("/").pop()
    return (
        <div>
            <Banner
                title={servicesMap[serviceID].title}
                subtitle={servicesMap[serviceID].subtitle}
                imageSrc={servicesMap[serviceID].imageSrc}
                imageAlt={servicesMap[serviceID].imageAlt}
            />
            <Summary
                title={servicesMap[serviceID].title}
                summary={servicesMap[serviceID].summary}
            />
        </div>
    );
};

export default Service;