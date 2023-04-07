import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';

export const LoaderContext = createContext();

const Root = () => {

    const loader = useLoaderData();

    return (
        <LoaderContext.Provider value={loader}>
            <Header></Header>
            <Outlet></Outlet>
        </LoaderContext.Provider>
    );
};

export default Root;