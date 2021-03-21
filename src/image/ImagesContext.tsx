import React, { createContext, useContext, useEffect, useState } from 'react';
import { ImageResource } from '../types/Types';

export interface ImagesContextProps {
    loading: boolean;
    images: ImageResource[];
}

const IMAGE_LIMIT = 20;

const fetchImages = async (limit: number): Promise<ImageResource[]> => {
    const images = await fetch(`images?limit=${limit}`);
    return images.json();
};

export const ImagesContext = createContext<ImagesContextProps>({} as ImagesContextProps);

export const ImagesProvider: React.FC = ({ children }) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [images, setImages] = useState<ImageResource[]>([]);

    const loadImages = async (limit: number) => {
        const response = await fetchImages(limit);
        setImages(response);
        setLoading(false);
    };

    useEffect(() => {
        setLoading(true);
        loadImages(IMAGE_LIMIT);
    }, []);

    const values = {
        loading,
        images,
    };

    return <ImagesContext.Provider value={values}>{children}</ImagesContext.Provider>;
};

export function useImages(): ImagesContextProps {
    return useContext(ImagesContext);
}
