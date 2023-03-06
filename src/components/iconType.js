import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudRain, faSnowflake, faSun, faCloud, faWind } from '@fortawesome/free-solid-svg-icons';

const IconType = ({ iconType }) => {
        const ICON_TYPES = {
                Rain: <FontAwesomeIcon icon={faCloudRain} className="icon"/>,
                Snow: <FontAwesomeIcon icon={faSnowflake} className="icon" />,
                Clear: <FontAwesomeIcon icon={faSun} className="icon" />,
                Wind: <FontAwesomeIcon icon={faWind} className="icon"/>,
                Clouds: <FontAwesomeIcon icon={faCloud} className="icon" />
        };
      
        return <div>{ICON_TYPES[iconType]}</div>;
      };
      
      
export default IconType;