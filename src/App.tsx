import React from 'react';
import './App.css';
import {NavLink, Route, Routes} from "react-router-dom";
import {RoutesComponent} from "./RoutesComponent";


// ставим yarn add react-router-dom
// оборачиваем в индексе браузер роутер
function App() {
    return (
        <div className="App">
            <NavLink to={"/"}>main--</NavLink>
            <NavLink to={"/login"}>login--</NavLink>
            <NavLink style={({isActive}) => ({color: isActive ? "red" : ""})} to={"/profile"}>profile--</NavLink>
            <NavLink to={"/profile/1"}>profile/1--</NavLink>
            <NavLink to={"/profile/settings"}>settings</NavLink>
            <RoutesComponent/>

            {/*<Routes>*/}
            {/*    <Route path={"*"} element={<div>404</div>}/> // на необработанный роут*/}
            {/*    <Route path={"/"} element={<div>main</div>}/>*/}
            {/*    /!*<Route path={"/login/*"} element={<div>login</div>}/>*!/ // остаемся в логине даже если в роуте после логина что угодно*/}
            {/*    <Route path={"/login"} element={<div>login</div>}/>*/}
            {/*    <Route path={"/profile/*"} element={(<div>profile*/}
            {/*        <Routes>*/}
            {/*            <Route path={"/settings"} element={<div>settings</div>}/>*/}
            {/*        </Routes>*/}
            {/*    </div>)}/>*/}
            {/*    /!*<Route path={"/profile/settings"} element={<div>settings</div>}/>// отрисовывается сеттинг*!/*/}
            {/*</Routes>*/}

        </div>
    );
}

export default App;
