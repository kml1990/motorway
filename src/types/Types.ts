export interface ImageResource {
    id: string;
    created_at: Date;
    updated_at: Date;
    color: string;
    description: string;
    alt_description: string;
    categories: string[];
    likes: number;
    user: User;
    url: string;
}

export interface User {
    id: string;
    updated_at: Date;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    bio: string;
    location: string;
    profile_image: string;
    total_collections: number;
    total_likes: number;
    total_photos: number;
}

export interface SimpleForm {
    name: string;
    email: string;
    dob: string;
    favouriteColour: string;
    salary: number;
}
