import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { ImagesProvider } from '../../image/ImagesContext';
import { Routes, RoutesConfig } from '../../routes/Routes';
import Content from '../common/content/Content';
import Navbar from '../common/navbar/Navbar';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <ImagesProvider>
                <Content>
                    <Switch>
                        {RoutesConfig.map(({ id, exact, path, component }) => (
                            <Route key={id} exact={exact} path={path} component={component} />
                        ))}
                        <Redirect to={Routes.GALLERY} />
                    </Switch>
                </Content>
            </ImagesProvider>
        </BrowserRouter>
    );
};

export default App;
