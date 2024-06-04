import { FunctionComponent } from "react";
import { FiLayers , FiMonitor } from "react-icons/fi";

type WorkSectionListProps = {
    item: number;
    column: string;
}

const ServiceList = [
    {
        icon: <FiLayers />,
        title: 'Open Source Development',
        description: 'Open source projects I have built',
        link: "/projects/oss"
    },
    { 
        icon: <FiMonitor />,
        title: 'Client Projects',
        description: 'Some of the client projects I have worked on.',
        link: "/projects/work"
    },
    { 
        icon: <FiMonitor />,
        title: 'Mobile App Development',
        description: 'Mobile applications I have built',
        link: "/projects/mobile"
    }
]


const WorkSectionList: FunctionComponent<WorkSectionListProps> = ({ column, item }) => {
    const services = ServiceList.slice(0 , item);

    return(
        <div className="row">
            {services.map(({icon, title, description, link} , i) => (
                <div className={`${column}`} key={i}>
                    <a href={link}>
                        <div className="service service__style--2">
                            <div className="icon">
                                {icon}
                            </div>
                            <div className="content">
                                <h3 className="title">{title}</h3>
                                <p>{description}</p>
                            </div>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    )
}

export default WorkSectionList;
