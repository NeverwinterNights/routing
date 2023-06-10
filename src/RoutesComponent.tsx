import React from "react";
import {Route, Routes} from "react-router-dom";
import {Profile} from "./Profile";

export const RoutesComponent = () => {

    const routes = [{
        path: "*",
        component: <div>404</div>,
    }, {
        path: '/',
        component: <div>main</div>,
    }, {
        path: '/login',
        component: <div>login</div>,
    }, {
        path: '/profile',
        component: <div>profile simple</div>,
    }, {
        path: '/profile/:id',
        component: <Profile/>
    }, {
        path: '/profile/:id/:x',
        component: <Profile/>
    },
        // path: 'profile/*',
        // component: <div>profile<Routes>
        //     <Route path={"/settings"} element={<div>settings</div>}/>
        //     {/*<Route path={":id"} element={<div>settings/id</div>}/>*/}
        //     <Route path={"profile/:id"} element={<Profile/>}/>
        // </Routes></div>
    {

        // path: ':id', получается любой другой урл определяет ид
        // component: <div>id</div>,

    }];

    const routeComponents = routes.map(({path, component}, key) => <Route path={path} element={component} key={key}/>);
    return (
        <Routes>
            {routeComponents}
        </Routes>
    );
};
