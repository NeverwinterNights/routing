import React, {useEffect} from 'react';
import {Navigate, useNavigate, useParams, useSearchParams} from "react-router-dom";

export const Profile = React.memo(() => {
    const params = useParams<"id" | "x">() // данные приходят строкой в обьекте
    const navigate = useNavigate()

    const [searchParams, setSearchParams] = useSearchParams()
    console.log ("searchParams", searchParams.get("name")) // дает параметр из name
    console.log ("searchParams in object", Object.entries(setSearchParams)) // дает весь обьект



    console.log("params", params)

    console.log("params", params.id)
    console.log("value")
    // useEffect(() => {
    //     if (true) {
    //         navigate("/login")
    //     }
    // }, [])
    const isAuth = true
    return (
        // позволяет отрисовать переход без сплешскрина
        <div>
            {isAuth ? <Navigate to={"/login"}/> : <>Profile with id
                <button onClick={() => navigate("/login")}>to login</button>
                <button onClick={() => navigate(-1)}>back to one screen</button>
                <button onClick={() => navigate(-2)}>back to two screen</button>
                <button onClick={() => navigate(1)}>forwфкв to one screen</button>
            </>}

        </div>
    );
});

