import React from 'react'

export default function CTA() {
    return (
        <section id="pricing" className="max-w-7xl mx-auto px-6 py-32 text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-12">
                Start your journey to <br />
                <span className="text-primary">financial freedom.</span>
            </h2>
            <button className="bg-primary text-white px-12 py-5 rounded-2xl text-lg font-bold hover:scale-105 transition-transform shadow-2xl shadow-primary/30 mb-8">
                Get Spendex Free
            </button>
            <p className="text-slate-500 text-sm">Join over 1 million people managing money better.</p>
        </section>
    )
}
