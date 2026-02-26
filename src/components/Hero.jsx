import React from 'react'

export default function Hero() {
    return (
        <section className="max-w-7xl mx-auto px-6 pt-20 pb-32 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider mb-8 border border-primary/10">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Now with GPT-4 Financial Analysis
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight max-w-4xl mb-8 leading-[1.1]">
                Your AI-Powered <span className="text-primary">Budget Companion</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-12">
                Master your finances with the power of artificial intelligence. Track, save, and invest smarter with a dashboard built for the future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-20">
                <button className="bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined">phone_iphone</span>
                    App Store
                </button>
                <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-slate-50 transition-colors shadow-sm">
                    <span className="material-symbols-outlined">play_arrow</span>
                    Google Play
                </button>
            </div>

            {/* App Mockup */}
            <div className="relative w-full max-w-5xl mx-auto">
                <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full -z-10"></div>
                <div className="bg-slate-900 p-4 rounded-[3rem] shadow-2xl border-4 border-slate-800 inline-block overflow-hidden max-w-[320px] md:max-w-[400px]">
                    <img
                        alt="Spendex App Interface"
                        className="rounded-[2.5rem] w-full"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAwNFSJt8B2doB0VnUKzpefshrG5AmjhbGcEqPLxe602K-VFFh1n_fvbOKKLUk-cT1SLUsasGiM4JHeGqy8bUdpqynZ_hwWMRD-DqAwvDkeFR5uQcMNYp-00qqlLN5ynR-jtWz7MOeORknPPxv3KIl_2AI1tXhw6UxwOzkMDWBonROyf0IVIlzy1oi8bMKVU2W5kaMycfkWcX9A1DWKXGDOSqmlkdjqIn0dfA4O43th4p2ZmFcUxKRzx3SegT-kQ-uvBXY73SPQw"
                    />
                </div>

                {/* Decorative Elements */}
                <div className="hidden lg:block absolute top-1/4 -left-12 glass-card p-6 rounded-2xl shadow-xl max-w-xs text-left animate-float-slow">
                    <div className="flex items-center gap-3 mb-4 text-green-600 font-bold">
                        <span className="material-symbols-outlined">trending_up</span>
                        Savings up 14%
                    </div>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">Spendex identified $42 in recurring subscriptions you haven't used lately.</p>
                </div>

                <div className="hidden lg:block absolute bottom-1/4 -right-12 glass-card p-6 rounded-2xl shadow-xl max-w-xs text-left animate-float-slow" style={{ animationDelay: '1s' }}>
                    <div className="flex items-center gap-3 mb-4 text-primary font-bold">
                        <span className="material-symbols-outlined">psychology</span>
                        AI Prediction
                    </div>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">Estimated $450 electric bill arriving in 3 days. Adjusting daily budget...</p>
                </div>
            </div>
        </section>
    )
}
