import React from 'react'
import { Link } from 'react-router-dom'

export default function Support() {
    return (
        <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-12">
            {/* Hero Search Section */}
            <section className="relative mb-16 rounded-xl overflow-hidden bg-primary p-12 text-center shadow-2xl">
                <div
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '24px 24px'
                    }}
                ></div>
                <div className="relative z-10">
                    <h1 className="text-white text-4xl md:text-5xl font-black mb-4 tracking-tight">How can we help you?</h1>
                    <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto font-normal">
                        Search our help center for detailed guides and answers to your questions about AI-powered finance.
                    </p>
                    <div className="max-w-xl mx-auto">
                        <div className="flex items-center bg-white rounded-xl p-2 shadow-xl ring-4 ring-primary/30">
                            <span className="material-symbols-outlined text-slate-400 px-3">search</span>
                            <input
                                className="flex-1 border-none focus:ring-0 text-slate-800 placeholder:text-slate-400 text-base py-3"
                                placeholder="Search for articles, guides, or keywords..."
                                type="text"
                            />
                            <button className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition-colors">
                                Search
                            </button>
                        </div>
                    </div>
                    <div className="mt-6 flex flex-wrap justify-center gap-3">
                        <span className="text-blue-200 text-sm">Popular:</span>
                        <a className="text-white text-sm hover:underline decoration-blue-300 transition-all cursor-pointer">Linking bank accounts</a>
                        <a className="text-white text-sm hover:underline decoration-blue-300 transition-all cursor-pointer">CSV Export</a>
                        <a className="text-white text-sm hover:underline decoration-blue-300 transition-all cursor-pointer">Resetting Password</a>
                    </div>
                </div>
            </section>

            {/* FAQ Content */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                {/* Sidebar Categories */}
                <aside className="lg:col-span-1">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-6 px-2">Categories</h3>
                    <nav className="space-y-1">
                        <a className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary dark:bg-blue-900/30 dark:text-blue-300 font-bold border border-primary/20 cursor-pointer transition-colors">
                            <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
                            Getting Started
                        </a>
                        <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                            <span className="material-symbols-outlined text-[20px]">shield</span>
                            Security
                        </a>
                        <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                            <span className="material-symbols-outlined text-[20px]">psychology</span>
                            AI Insights
                        </a>
                        <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                            <span className="material-symbols-outlined text-[20px]">payments</span>
                            Account &amp; Billing
                        </a>
                        <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                            <span className="material-symbols-outlined text-[20px]">api</span>
                            Integrations
                        </a>
                    </nav>
                </aside>

                {/* FAQ Accordions */}
                <div className="lg:col-span-3">
                    <div className="flex items-center justify-between mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">
                        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
                        <span className="text-sm text-slate-500">12 articles in this category</span>
                    </div>

                    <div className="space-y-4">
                        <details className="group rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm hover:shadow-md transition-shadow" open>
                            <summary className="flex cursor-pointer items-center justify-between gap-6 px-6 py-5 list-none">
                                <span className="text-slate-900 dark:text-slate-100 font-semibold text-lg">How does the AI analyze my spending?</span>
                                <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-slate-400">expand_more</span>
                            </summary>
                            <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-50 dark:border-slate-800 pt-4">
                                Spendex uses advanced neural networks to categorize transactions with 99.9% accuracy. It learns from your habits over time to suggest personalized budget adjustments and identify potential savings automatically. Your data is processed in real-time, giving you instant clarity on where your money goes.
                            </div>
                        </details>

                        <details className="group rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <summary className="flex cursor-pointer items-center justify-between gap-6 px-6 py-5 list-none">
                                <span className="text-slate-900 dark:text-slate-100 font-semibold text-lg">Is my financial data secure?</span>
                                <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-slate-400">expand_more</span>
                            </summary>
                            <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-50 dark:border-slate-800 pt-4">
                                Security is our top priority. We use bank-level 256-bit encryption and multi-factor authentication (MFA) to ensure your data remains private. We never sell your personal information, and our infrastructure is SOC 2 Type II compliant.
                            </div>
                        </details>

                        <details className="group rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <summary className="flex cursor-pointer items-center justify-between gap-6 px-6 py-5 list-none">
                                <span className="text-slate-900 dark:text-slate-100 font-semibold text-lg">How do I link my bank accounts?</span>
                                <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-slate-400">expand_more</span>
                            </summary>
                            <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-50 dark:border-slate-800 pt-4">
                                Simply head to the "Accounts" tab, click "Add New," and select your financial institution. We partner with Plaid and Salt Edge to securely connect to over 15,000 banks worldwide without ever storing your login credentials.
                            </div>
                        </details>

                        <details className="group rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <summary className="flex cursor-pointer items-center justify-between gap-6 px-6 py-5 list-none">
                                <span className="text-slate-900 dark:text-slate-100 font-semibold text-lg">Can I export my monthly reports?</span>
                                <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-slate-400">expand_more</span>
                            </summary>
                            <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-50 dark:border-slate-800 pt-4">
                                Yes, you can export your data in CSV, PDF, or XLSX formats. Go to the "Insights" section, select your desired date range, and click the "Export" button in the top right corner.
                            </div>
                        </details>
                    </div>

                    {/* Contact Support Form */}
                    <div className="mt-20 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 shadow-xl">
                        <div className="text-center mb-10">
                            <h2 className="text-2xl font-bold mb-2">Still need help?</h2>
                            <p className="text-slate-500 dark:text-slate-400">Can't find the answer you're looking for? Reach out to our human support team.</p>
                        </div>

                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold">Your Name</label>
                                <input
                                    className="rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary px-4 py-2.5 outline-none"
                                    placeholder="John Doe"
                                    type="text"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold">Email Address</label>
                                <input
                                    className="rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary px-4 py-2.5 outline-none"
                                    placeholder="john@example.com"
                                    type="email"
                                />
                            </div>
                            <div className="flex flex-col gap-2 md:col-span-2">
                                <label className="text-sm font-semibold">Subject</label>
                                <select className="rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary px-4 py-2.5 outline-none">
                                    <option>General Inquiry</option>
                                    <option>Technical Issue</option>
                                    <option>Billing Question</option>
                                    <option>Feature Request</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-2 md:col-span-2">
                                <label className="text-sm font-semibold">Message</label>
                                <textarea
                                    className="rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary px-4 py-2.5 outline-none resize-y min-h-[100px]"
                                    placeholder="How can we help?"
                                    rows="4"
                                ></textarea>
                            </div>
                            <div className="md:col-span-2 flex justify-center mt-4">
                                <button
                                    className="bg-primary text-white font-bold py-3 px-12 rounded-lg hover:bg-blue-800 transition-colors shadow-lg shadow-primary/30 w-full md:w-auto"
                                    type="button"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}
