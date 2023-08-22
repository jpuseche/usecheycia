import Banner from "../sections/services/Banner.js";
import Summary from "../sections/services/Summary.js";
import servicesMap from "../data/services-map";

function Service() {
    let serviceID = window.location.href.split("/").pop()
    return (
        <div>
            <Banner
                title={servicesMap[serviceID].title}
                subtitle={servicesMap[serviceID].subtitle}
                imageSrc={servicesMap[serviceID].imageSrc}
                servicesMap={servicesMap[serviceID].imageAlt}
            />
            <Summary
                title={servicesMap[serviceID].title}
                summary={servicesMap[serviceID].summary}
            />
        </div>
    );
};

export default Service;