import React from 'react';
import Image, { ImageSize } from '../image/Image';

export interface AvatarProps {
    avatarSrc: string;
    name: string;
    className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ avatarSrc, name, className = '' }) => {
    return (
        <div className={`Avatar ${className}`}>
            <Image src={avatarSrc} alt={name} size={ImageSize.X_SMALL} />
        </div>
    );
};

export default Avatar;
