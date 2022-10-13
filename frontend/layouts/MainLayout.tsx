import React from 'react';

import s from './MainLayout.module.scss'

interface MainLayoutProps{
    children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {      
    return (
        <>            
            {children}

        </>
    );
};

export default MainLayout;