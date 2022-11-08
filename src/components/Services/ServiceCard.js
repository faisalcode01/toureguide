import React from 'react';

const ServiceCard = (props) => {
    const {image_url,title,details,rating} = props.props;

    return (
        <div>
            <div className="group relative p-4 mb-5">
                <div className="absolute inset-0 rounded-lg bg-indigo-100 transform transition ease-out duration-150 skew-y-2 group-hover:-rotate-2"></div>
                <img src={image_url} alt="User Avatar" className="relative rounded-lg shadow" />
            </div>
            <h4 className="text-xl font-semibold mb-1">
               {title}
            </h4>

            <p className="prose prose-indigo">
                {details.slice(0, 100)+"..."}
            </p>
      </div>
    );
};

export default ServiceCard;