import React from 'react';
import { useImages } from '../../../image/ImagesContext';
import Loader from '../../common/loader/Loader';
import ImageGallery from '../../image_gallery/ImageGallery';

import './Gallery.scss';

const Gallery: React.FC = () => {
    const { loading, images } = useImages();

    return (
        <div className="Gallery">
            {loading ? <Loader /> : <ImageGallery images={images} className="Gallery__images" />}
        </div>
    );
};

export default Gallery;
