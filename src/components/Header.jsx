import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    const handleNavClick = (e, targetHash) => {
        e.preventDefault()
        setMenuOpen(false)
        if (location.pathname !== '/') {
            navigate('/')
            setTimeout(() => {
                window.location.hash = targetHash
            }, 100)
        } else {
            window.location.hash = targetHash
        }
    }

    return (
        <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
                        <span className="material-symbols-outlined text-xl">account_balance_wallet</span>
                    </div>
                    <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Spendex</h2>
                </Link>

                <nav className="hidden md:flex items-center gap-10">
                    <a className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" onClick={(e) => handleNavClick(e, '#features')}>Features</a>
                    <a className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" onClick={(e) => handleNavClick(e, '#how-it-works')}>How It Works</a>
                    <a className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" onClick={(e) => handleNavClick(e, '#security')}>Security</a>
                    <a className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" onClick={(e) => handleNavClick(e, '#pricing')}>Pricing</a>
                    <Link className="text-sm font-medium hover:text-primary transition-colors cursor-pointer text-primary font-bold dark:text-blue-400" to="/support">Support</Link>
                </nav>

                <div className="flex items-center gap-4">
                    <button className="hidden sm:block text-sm font-semibold hover:text-primary transition-colors">Log In</button>
                    <button className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-bold hover:opacity-90 transition-all shadow-lg shadow-primary/20">
                        Get Started
                    </button>
                    {/* Mobile menu button */}
                    <button
                        className="md:hidden flex items-center"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span className="material-symbols-outlined text-2xl">
                            {menuOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-md">
                    <nav className="flex flex-col px-6 py-4 gap-4">
                        <a className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" onClick={(e) => handleNavClick(e, '#features')}>Features</a>
                        <a className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" onClick={(e) => handleNavClick(e, '#how-it-works')}>How It Works</a>
                        <a className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" onClick={(e) => handleNavClick(e, '#security')}>Security</a>
                        <a className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" onClick={(e) => handleNavClick(e, '#pricing')}>Pricing</a>
                        <Link className="text-sm font-medium hover:text-primary transition-colors cursor-pointer text-primary font-bold dark:text-blue-400" to="/support" onClick={() => setMenuOpen(false)}>Support</Link>
                    </nav>
                </div>
            )}
        </header>
    )
}
