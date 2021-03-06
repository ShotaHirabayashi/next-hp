import Head from 'next/head';
import Link from 'next/link'

export default function Layout({children, title= "HP ny Next.js"}){return(
    <div className="text-gray-600 font-mono min-h-screen flex flex-col justify-center items-center">
    <Head>
        <title>{title}</title>
    </Head>
    <header>
        <nav className="bg-gray-800 w-screen">
            <div className="flex items-center pl-8 h-14">
                <div className="flex space-x-4">
                    <Link href="/">
                        <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                            Home
                        </a>
                    </Link>
                    <Link href="/blog-page">
                        <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                            Blog
                        </a>
                    </Link>
                    <Link href="/contact-page">
                        <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                            Contact
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    </header>
    <main className="flex flex-1 justify-center items-center flex-col w-screen">
        {children}
    </main>
        <footer className="w-10 h-12 flex justify-center items-center border-1">
          Created by Hirabayashi
      </footer>
    </div>
)}
