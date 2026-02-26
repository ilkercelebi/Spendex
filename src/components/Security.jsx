import React from 'react'

export default function Security() {
    const badges = ['SECURED', 'TRUSTE', 'FINCEN', 'ISO27001']

    return (
        <section id="security" className="max-w-7xl mx-auto px-6 py-24">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-12 text-center">
                <div className="flex justify-center mb-8">
                    <div className="size-16 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                        <span className="material-symbols-outlined text-4xl">verified_user</span>
                    </div>
                </div>
                <h2 className="text-3xl font-bold mb-6">Bank-Grade Security</h2>
                <p className="text-slate-500 max-w-2xl mx-auto mb-12">
                    We use AES-256 bit encryption and multi-factor authentication to ensure your data is always safe. Your banking credentials are never stored on our servers.
                </p>
                <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {badges.map((badge, idx) => (
                        <div key={idx} className="flex items-center gap-2 font-black text-xl italic tracking-tighter">
                            {badge}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
