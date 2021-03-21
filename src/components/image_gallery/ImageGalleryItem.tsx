import React, { useCallback } from 'react';
import { ImageResource } from '../../types/Types';
import Avatar from '../common/avatar/Avatar';
import Button from '../common/button/Button';
import Image from '../common/image/Image';

import './ImageGalleryItem.scss';

export type OnImageClicked = (image: ImageResource) => void;

export interface ImageGalleryItemProps {
    image: ImageResource;
    className?: string;
    onImageClicked: OnImageClicked;
}

const ImageGalleryItem: React.FC<ImageGalleryItemProps> = ({
    image,
    className,
    onImageClicked,
}) => {
    const { url, user, alt_description } = image;
    const { profile_image, name } = user;

    const onClick = useCallback(() => {
        onImageClicked(image);
    }, [image, onImageClicked]);

    return (
        <div className={`ImageGalleryItem ${className}`}>
            <Image src={url} alt={alt_description} />
            <Avatar avatarSrc={profile_image} name={name} className="ImageGalleryItem__avatar" />
            <Button className="ImageGalleryItem__previewButton" type="button" onClick={onClick}>
                Preview Image
            </Button>
        </div>
    );
};

export default ImageGalleryItem;
