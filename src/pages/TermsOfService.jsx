import React from 'react'
import { Link } from 'react-router-dom'

export default function TermsOfService() {
    return (
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
            <div className="flex flex-col lg:flex-row gap-12">
                {/* Sticky Sidebar Navigation */}
                <aside className="w-full lg:w-64 flex-shrink-0 hidden lg:block">
                    <div className="sticky top-28">
                        <div className="flex flex-col mb-6">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Documentation</h4>
                            <p className="text-slate-900 dark:text-white font-bold">Table of Contents</p>
                        </div>
                        <nav className="space-y-1">
                            <a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg bg-primary/10 text-primary border-l-2 border-primary" href="#acceptance">
                                <span className="material-symbols-outlined text-[20px]">verified_user</span>
                                1. Acceptance
                            </a>
                            <a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors group" href="#eligibility">
                                <span className="material-symbols-outlined text-[20px] group-hover:text-primary">person</span>
                                2. Eligibility
                            </a>
                            <a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors group" href="#accounts">
                                <span className="material-symbols-outlined text-[20px] group-hover:text-primary">manage_accounts</span>
                                3. Accounts
                            </a>
                            <a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors group" href="#ai-services">
                                <span className="material-symbols-outlined text-[20px] group-hover:text-primary">auto_awesome</span>
                                4. AI Services
                            </a>
                            <a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors group" href="#payment">
                                <span className="material-symbols-outlined text-[20px] group-hover:text-primary">payments</span>
                                5. Fees &amp; Payment
                            </a>
                            <a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors group" href="#privacy">
                                <span className="material-symbols-outlined text-[20px] group-hover:text-primary">shield_lock</span>
                                6. Privacy
                            </a>
                            <a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors group" href="#termination">
                                <span className="material-symbols-outlined text-[20px] group-hover:text-primary">cancel</span>
                                7. Termination
                            </a>
                            <a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors group" href="#contact">
                                <span className="material-symbols-outlined text-[20px] group-hover:text-primary">mail</span>
                                8. Contact
                            </a>
                        </nav>
                        <div className="mt-10 p-4 rounded-xl bg-primary/5 border border-primary/10">
                            <p className="text-xs font-semibold text-primary mb-2">Need help?</p>
                            <p className="text-xs text-slate-500 mb-4">Questions about these terms? Our legal team is here for you.</p>
                            <Link className="text-xs font-bold text-accent-mint hover:underline" to="/support">Support Center →</Link>
                        </div>
                    </div>
                </aside>

                {/* Document Content */}
                <article className="flex-1 max-w-3xl">
                    <header className="mb-12">
                        <span className="inline-block px-3 py-1 rounded-full bg-accent-mint/10 text-accent-mint text-xs font-bold tracking-wider uppercase mb-4">Legal Document</span>
                        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">Terms of Service</h1>
                        <p className="text-slate-500 text-lg leading-relaxed">Last updated: October 24, 2023</p>
                    </header>
                    <div className="prose dark:prose-invert max-w-none prose-p:text-slate-600 dark:prose-p:text-slate-400 prose-p:mb-5 prose-p:leading-[1.625] prose-h3:text-slate-900 dark:prose-h3:text-white prose-h3:font-bold prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-4">
                        <section id="acceptance" className="scroll-mt-28">
                            <h3>1. Acceptance of Terms</h3>
                            <p>
                                By accessing or using the Spendex mobile application or website ("the Platform"), you agree to be bound by these Terms of Service. These terms constitute a legally binding agreement between you and Spendex Inc.
                            </p>
                            <p>
                                If you do not agree to all of the terms and conditions, you may not access our services. We reserve the right to modify these terms at any time, and your continued use of the platform after such modifications will constitute your acknowledgment of the modified Terms.
                            </p>
                        </section>

                        <section id="eligibility" className="scroll-mt-28">
                            <h3>2. Eligibility</h3>
                            <p>
                                To use Spendex, you must be at least 18 years of age and reside in a jurisdiction where our services are offered. By creating an account, you represent and warrant that you have the full right, power, and authority to enter into this agreement.
                            </p>
                        </section>

                        <section id="accounts" className="scroll-mt-28">
                            <h3>3. User Accounts</h3>
                            <p>
                                When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
                            </p>
                            <p>
                                You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password. Spendex cannot and will not be liable for any loss or damage arising from your failure to comply with the above.
                            </p>
                        </section>

                        <section id="ai-services" className="scroll-mt-28">
                            <h3>4. AI-Powered Insights</h3>
                            <p>
                                Spendex uses advanced artificial intelligence and machine learning algorithms to provide financial insights, predictions, and automated categorization. While we strive for 100% accuracy, these insights are for information purposes only.
                            </p>
                            <p className="bg-primary/5 p-4 rounded-lg border-l-4 border-accent-mint !text-slate-700 dark:!text-slate-300">
                                <strong className="text-slate-900 dark:text-white">Disclaimer:</strong> Spendex AI insights do not constitute professional financial, tax, or legal advice. Always consult with a qualified professional before making significant financial decisions.
                            </p>
                        </section>

                        <section id="payment" className="scroll-mt-28">
                            <h3>5. Fees and Payment</h3>
                            <p>
                                Some features of Spendex require a paid subscription. All fees are exclusive of taxes, and you are responsible for all applicable taxes. We use third-party payment processors (Stripe/Apple Pay) and do not store your credit card information directly.
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400 mb-6">
                                <li>Subscriptions renew automatically unless cancelled.</li>
                                <li>Refunds are processed according to our <Link className="text-accent-mint font-medium hover:underline" to="#">Refund Policy</Link>.</li>
                                <li>Price changes will be notified at least 30 days in advance.</li>
                            </ul>
                        </section>

                        <section id="privacy" className="scroll-mt-28">
                            <h3>6. Privacy &amp; Data Security</h3>
                            <p>
                                Your privacy is our priority. We employ industry-standard encryption and security measures to protect your financial data. Our collection and use of personal information is governed by our <Link className="text-accent-mint font-medium hover:underline" to="/privacy-policy">Privacy Policy</Link>.
                            </p>
                        </section>

                        <section id="termination" className="scroll-mt-28">
                            <h3>7. Termination</h3>
                            <p>
                                We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                            </p>
                        </section>

                        <section id="contact" className="scroll-mt-28">
                            <h3>8. Contact Us</h3>
                            <p>
                                If you have any questions about these Terms, please contact us at:
                            </p>
                            <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 not-prose mt-4">
                                <p className="font-bold text-slate-900 dark:text-white mb-1">Spendex Legal Department</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">123 Fintech Way, Suite 400</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">San Francisco, CA 94103</p>
                                <p className="text-sm mt-3 text-slate-600 dark:text-slate-400">
                                    <span className="font-semibold">Email: </span>
                                    <a className="text-primary font-medium" href="mailto:legal@spendex.ai">legal@spendex.ai</a>
                                </p>
                            </div>
                        </section>
                    </div>

                    <div className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                <span className="material-symbols-outlined text-sm">download</span>
                                Download PDF
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                <span className="material-symbols-outlined text-sm">print</span>
                                Print Terms
                            </button>
                        </div>
                        <p className="text-xs text-slate-400">© 2023 Spendex Inc. All rights reserved.</p>
                    </div>
                </article>
            </div>
        </main>
    )
}
