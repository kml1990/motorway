import React, { ImgHTMLAttributes } from 'react';
import LazyLoad from 'react-lazyload';
import Loader from '../loader/Loader';

import './Image.scss';

export enum ImageSize {
    X_SMALL = 'xSmall',
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
    X_LARGE = 'xLarge',
}

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    size?: ImageSize;
    className?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, size = 'medium', className = '' }) => {
    return (
        <LazyLoad height={250} offset={200} placeholder={<Loader />}>
            <img
                className={`Image Image--${size} ${className}`}
                loading="lazy"
                src={src}
                alt={alt}
            />
        </LazyLoad>
    );
};

export default Image;
