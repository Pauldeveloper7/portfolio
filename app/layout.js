import {Inter} from 'next/font/google'
import Authprovider from '@/components/Authprovider'
const inter = Inter({subsets:["latin"]})
export const metadata = {
    title: 'Portfolio',
    description: 'Portfolio',
    image: '/images/portfolio.png',
    url: 'https://portfolioyt.vercel.app',
}
export default function Rootlayout({children}){
    return(
        <html lang="en">
            <body className={inter.className}>
                <Authprovider>
                    {children}
                </Authprovider>
            </body>

        </html>
    )
}