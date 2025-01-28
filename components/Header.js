import Image from 'next/image'
const Header = () => {
    return (
        <header className="w-full bg-white shadow-sm">
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
                    <span className="text-2xl font-bold text-gray-900">URLSnip</span>
                </div>
                <nav className="items-center space-x-6">
                    <p className='text-sm text-black'>Built by <a href="https://adilc0070.site" className="text-gray-600 hover:text-blue-500 transition-colors">adilc0070.site</a></p>
                </nav>
            </div>
        </header>
    )
}

export default Header