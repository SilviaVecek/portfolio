import React from 'react';
import classnames from 'classnames';
import './styles.scss';


const Silvitko = ({className}) => {
    return (
    <footer className={classnames("silvitko", className)}>
        {/* <div className="seagull-flying">
            <div className="seagull-flapping"></div>
        </div> */}
        <div className="silvitko__sailing">
            <div className="silvitko__paddling"></div>
        </div>
    </footer>
    );
}

export default Silvitko;