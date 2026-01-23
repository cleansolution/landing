import React, { useEffect, useState } from 'react';

const Preloader: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timerId = window.setTimeout(() => {
            setIsLoading(false);
        }, 800);

        return () => {
            clearTimeout(timerId);
        };
    }, []);
    if (!isLoading) return null;
    return (
        <div className="page-loader">
            <div className="leap-frog">
                <div className="leap-frog__dot"></div>
                <div className="leap-frog__dot"></div>
                <div className="leap-frog__dot"></div>
            </div>
        </div>
    );
};

export default Preloader;