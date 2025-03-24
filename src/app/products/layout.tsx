import React from 'react';

function Layout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            product layout
            {children}
        </div>
    );
}

export default Layout;