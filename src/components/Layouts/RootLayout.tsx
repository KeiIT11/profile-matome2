import HomeNavbar from '@/components/Header/navbar';

import { Zen_Kaku_Gothic_New, Noto_Sans_JP } from 'next/font/google'

const zen_kaku_gothic = Zen_Kaku_Gothic_New({
    weight: ["400"],
    subsets: ['latin']
})


const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <header>
                <HomeNavbar />
            </header>
            <main className='min-h-screen'>
                {children}
            </main>
        </>
    )
}

export default Layout;