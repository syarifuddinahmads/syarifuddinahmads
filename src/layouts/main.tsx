import * as React from 'react';
import Head from 'next/head';
import Footer from '@/components/Footer';

interface MainLayoutProps {
    children: React.ReactNode
    title: string
}

export default function MainLayout({ children, title = 'Home' }: MainLayoutProps) {
    return (
        <>
            <Head>
                <title>{`${title} | Ahmad Syarifuddin - Software Engineer (Frontend & Mobile)`}</title>
                <meta name="description" content={`${title} | Ahmad Syarifuddin - Software Engineer (Frontend & Mobile)`} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {children}
            <Footer />
        </>
    );
}