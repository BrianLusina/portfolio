import {FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { BreadcrumbProps } from "./Breadcrumb.types";
import { BreadcrumbWrapper, BreadcrumbDescription } from "./styles";


const Breadcrumb: FunctionComponent<BreadcrumbProps> = ({ title, description, parent, backgroundImage }) => {
    return(
        <BreadcrumbWrapper className="breadcrumb-area rn-bg-color ptb--120 bg_image" imageSrc={backgroundImage} data-black-overlay="6">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breadcrumb-inner pt--100">
                            <h2 className="title">{title}</h2>
                            {description ? <BreadcrumbDescription>{description}</BreadcrumbDescription>:''}
                            <ul className="page-list">
                                <li className="breadcrumb-item">
                                    <Link to="/">
                                        Home
                                    </Link>
                                </li>
                                {parent? <li className="breadcrumb-item">{parent}</li>:''}
                                <li className="breadcrumb-item active">{title}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </BreadcrumbWrapper>
    )
}

export default Breadcrumb;

