import React, { useCallback, useState } from 'react';
import { ImageResource } from '../../types/Types';
import ImageGalleryItem from './ImageGalleryItem';

import './ImageGallery.scss';
import Modal from '../common/modal/Modal';
import Image, { ImageSize } from '../common/image/Image';

export interface ImageGalleryProps {
    images: ImageResource[];
    className?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, className = '' }) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<ImageResource | null>(null);

    const onImageClicked = useCallback((image: ImageResource) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    }, []);

    const onImageClosed = useCallback(() => {
        setIsModalOpen(false);
        setSelectedImage(null);
    }, []);

    return (
        <div className={`ImageGallery ${className}`}>
            {images.map(image => (
                <ImageGalleryItem
                    key={image.id}
                    image={image}
                    className="ImageGallery__item"
                    onImageClicked={onImageClicked}
                />
            ))}
            <Modal isOpen={isModalOpen} onClose={onImageClosed}>
                <Image
                    src={selectedImage?.url}
                    alt={selectedImage?.alt_description}
                    size={ImageSize.X_LARGE}
                />
            </Modal>
        </div>
    );
};

export default ImageGallery;
