import React from 'react'

const steps = [
    {
        icon: 'link',
        title: '1. Connect Accounts',
        description: 'Securely link your bank accounts and credit cards in seconds using bank-grade encryption.',
    },
    {
        icon: 'neurology',
        title: '2. AI Analysis',
        description: 'Our AI categorizes every transaction and identifies deep patterns in your spending habits.',
    },
    {
        icon: 'insights',
        title: '3. Smart Insights',
        description: 'Receive personalized, actionable recommendations to save more and grow your wealth.',
    },
]

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="bg-white dark:bg-slate-900 py-24 border-y border-slate-100 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Simple, Fast, &amp; Intelligent</h2>
                    <p className="text-slate-500 text-lg">Three steps to achieving total financial clarity.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {steps.map((step, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center group">
                            <div className="size-20 bg-primary/5 rounded-3xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                <span className="material-symbols-outlined text-4xl">{step.icon}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                            <p className="text-slate-500 leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
