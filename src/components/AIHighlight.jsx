import React from 'react'

export default function AIHighlight() {
    const barHeights = ['40%', '55%', '45%', '70%', '85%', '60%', '40%']

    return (
        <section id="features" className="bg-primary text-white py-24 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path d="M0 100 L100 0 L100 100 Z" fill="white" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest mb-6">
                        Deep Learning Tech
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                        Predict the future, don't just track the past.
                    </h2>
                    <div className="space-y-8">
                        <div className="flex gap-6">
                            <span className="material-symbols-outlined text-accent-mint text-3xl shrink-0">event_repeat</span>
                            <div>
                                <h4 className="text-xl font-bold mb-2">Smart Bill Prediction</h4>
                                <p className="text-white/70">Never be surprised by a bill again. Spendex predicts upcoming costs based on historical seasonality.</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <span className="material-symbols-outlined text-accent-mint text-3xl shrink-0">notifications_active</span>
                            <div>
                                <h4 className="text-xl font-bold mb-2">Proactive Alerts</h4>
                                <p className="text-white/70">Get notified if your current spending velocity will lead to an end-of-month deficit.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-sm">
                        <div className="flex justify-between items-center mb-8">
                            <h5 className="font-bold text-lg">AI Financial Projection</h5>
                            <span className="text-xs bg-accent-mint text-primary px-3 py-1 rounded-full font-bold">Next 30 Days</span>
                        </div>
                        <div className="space-y-6">
                            <div className="h-32 w-full flex items-end gap-2">
                                {barHeights.map((height, idx) => (
                                    <div
                                        key={idx}
                                        className={`flex-1 rounded-t-md transition-all duration-500 ${idx === 4
                                                ? 'bg-accent-mint shadow-lg shadow-accent-mint/20'
                                                : idx === 3
                                                    ? 'bg-white/40'
                                                    : 'bg-white/20'
                                            }`}
                                        style={{ height }}
                                    />
                                ))}
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-white/10 rounded-xl">
                                    <p className="text-[10px] text-white/60 uppercase font-bold mb-1">Potential Savings</p>
                                    <p className="text-2xl font-black">$284.10</p>
                                </div>
                                <div className="p-4 bg-white/10 rounded-xl">
                                    <p className="text-[10px] text-white/60 uppercase font-bold mb-1">Overspend Risk</p>
                                    <p className="text-2xl font-black text-red-400">Low</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
