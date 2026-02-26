import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-slate-950 py-16 border-t border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
                    <div className="col-span-2 lg:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="size-6 bg-primary rounded flex items-center justify-center text-white">
                                <span className="material-symbols-outlined text-xs">account_balance_wallet</span>
                            </div>
                            <h2 className="text-lg font-bold tracking-tight">Spendex</h2>
                        </div>
                        <p className="text-slate-500 max-w-xs mb-8">
                            Redefining personal finance with AI-driven insights for the modern generation.
                        </p>
                        <div className="flex gap-4">
                            <div className="size-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                                <span className="material-symbols-outlined text-sm">share</span>
                            </div>
                            <div className="size-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                                <span className="material-symbols-outlined text-sm">public</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Product</h4>
                        <ul className="space-y-4 text-sm text-slate-500">
                            <li><a className="hover:text-primary transition-colors" href="#features">Features</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#security">Security</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Roadmap</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#pricing">Pricing</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-slate-500">
                            <li><a className="hover:text-primary transition-colors" href="#">About Us</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Careers</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Contact</a></li>
                            <li><Link className="hover:text-primary transition-colors" to="/support">Support Center</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Legal</h4>
                        <ul className="space-y-4 text-sm text-slate-500">
                            <li><Link className="hover:text-primary transition-colors" to="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link className="hover:text-primary transition-colors" to="/terms-of-service">Terms of Service</Link></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
                    <p>© 2024 Spendex Inc. All rights reserved.</p>
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-xs">language</span>
                        English (US)
                    </div>
                </div>
            </div>
        </footer>
    )
}
