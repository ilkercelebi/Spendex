import React from 'react'

export default function PrivacyPolicy() {
    return (
        <div className="flex-grow">
            {/* Hero Header Section */}
            <div className="bg-white dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
                <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div className="max-w-2xl">
                            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Privacy Policy</h1>
                            <p className="text-slate-500 dark:text-slate-400 text-lg">Last updated: October 24, 2023</p>
                        </div>
                        <div className="w-full max-w-sm">
                            <label className="block text-sm font-medium mb-2 text-slate-600 dark:text-slate-400">Search legal terms</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">policy</span>
                                <input
                                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary text-base"
                                    placeholder="Search for 'Encryption'..."
                                    type="text"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="mx-auto max-w-4xl px-6 py-12">
                <article className="prose prose-slate dark:prose-invert max-w-none space-y-12">
                    <section>
                        <h2 className="text-2xl font-bold flex items-center gap-3 mb-4">
                            <span className="flex items-center justify-center size-8 rounded-lg bg-primary/10 text-primary">1</span>
                            Information We Collect
                        </h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                            At Spendex, we prioritize your data security. To provide our AI-powered insights, we collect certain information as described below. This data helps us categorize your spending and offer personalized financial advice.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                <span className="material-symbols-outlined text-primary mb-3">person_search</span>
                                <h3 className="font-bold mb-2">Personal Information</h3>
                                <p className="text-sm text-slate-500">Name, email address, and profile settings you provide when creating an account.</p>
                            </div>
                            <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                <span className="material-symbols-outlined text-primary mb-3">account_balance</span>
                                <h3 className="font-bold mb-2">Financial Data</h3>
                                <p className="text-sm text-slate-500">Transaction history, account balances, and merchant information from linked accounts.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold flex items-center gap-3 mb-4">
                            <span className="flex items-center justify-center size-8 rounded-lg bg-primary/10 text-primary">2</span>
                            How We Use Your Data
                        </h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                            The information we collect is used to power the core features of the Spendex platform:
                        </p>
                        <ul className="space-y-4">
                            <li className="flex gap-4">
                                <span className="material-symbols-outlined text-primary shrink-0">check_circle</span>
                                <div>
                                    <strong className="block">AI Personalization</strong>
                                    <span className="text-sm text-slate-500">Training our local models to recognize your specific spending habits for better categorization.</span>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <span className="material-symbols-outlined text-primary shrink-0">check_circle</span>
                                <div>
                                    <strong className="block">Security &amp; Fraud Prevention</strong>
                                    <span className="text-sm text-slate-500">Monitoring for suspicious activity to protect your financial assets.</span>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <span className="material-symbols-outlined text-primary shrink-0">check_circle</span>
                                <div>
                                    <strong className="block">Service Communications</strong>
                                    <span className="text-sm text-slate-500">Sending you budget alerts, weekly summaries, and important security updates.</span>
                                </div>
                            </li>
                        </ul>
                    </section>

                    <section className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
                        <h2 className="text-2xl font-bold flex items-center gap-3 mb-4 text-primary">
                            <span className="material-symbols-outlined">shield_lock</span>
                            Data Security Commitment
                        </h2>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                            We use industry-standard 256-bit AES encryption for all data at rest and TLS for data in transit. We never sell your personal financial data to third parties. Your trust is our most valuable asset.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold flex items-center gap-3 mb-4">
                            <span className="flex items-center justify-center size-8 rounded-lg bg-primary/10 text-primary">3</span>
                            Your Choices &amp; Rights
                        </h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                            You maintain full control over your data within Spendex. You have the right to:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <button className="flex flex-col items-center gap-3 p-6 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                <span className="material-symbols-outlined text-slate-400">download</span>
                                <span className="text-sm font-semibold">Export Data</span>
                            </button>
                            <button className="flex flex-col items-center gap-3 p-6 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                <span className="material-symbols-outlined text-slate-400">edit_square</span>
                                <span className="text-sm font-semibold">Correct Info</span>
                            </button>
                            <button className="flex flex-col items-center gap-3 p-6 rounded-xl border border-dashed border-red-300 dark:border-red-900 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors">
                                <span className="material-symbols-outlined text-red-400">delete_forever</span>
                                <span className="text-sm font-semibold text-red-500">Delete Account</span>
                            </button>
                        </div>
                    </section>
                </article>

                {/* Footer Support */}
                <div className="mt-20 pt-10 border-t border-slate-200 dark:border-slate-800 text-center">
                    <h3 className="text-lg font-bold mb-2">Have questions about our privacy practices?</h3>
                    <p className="text-slate-500 mb-6">Our legal and security teams are here to help you understand how we protect your information.</p>
                    <a className="inline-flex items-center gap-2 text-primary font-bold hover:underline" href="mailto:privacy@spendex.com">
                        <span className="material-symbols-outlined text-sm">mail</span>
                        Contact Privacy Team
                    </a>
                </div>
            </div>
        </div>
    )
}
