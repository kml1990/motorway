import { RouteProps } from 'react-router';
import Form from '../components/pages/form/Form';
import Gallery from '../components/pages/gallery/Gallery';

export interface RouteConfig extends RouteProps {
    id: string;
    name: string;
}

export const Routes = {
    GALLERY: '/gallery',
    FORM: '/form',
};

export const RoutesConfig: RouteConfig[] = [
    {
        id: 'gallery',
        name: 'Gallery',
        path: Routes.GALLERY,
        exact: true,
        component: Gallery,
    },
    {
        id: 'form',
        name: 'Form',
        path: Routes.FORM,
        exact: true,
        component: Form,
    },
];
