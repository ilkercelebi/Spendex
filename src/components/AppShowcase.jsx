import React from 'react'

const screenshots = [
    {
        alt: 'Screenshot of budget overview screen in app',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCz86mPTyv0zMPBnmF1dh5HciYrGqzOVnXXGkD6cM7tbTJclnZ7H2dXq7Gj8t6B3-DNQ8c0ieLn1NrGYCxvfzdh2LXhDYorGm9cdUX6xlPi-fRvTAsajgnapAPbgqmcDId3CNoINerH9ggaRSeUCpUHrunep6tsbORzSPNg0t1osJl29vA94gHY_cxHAzybqF7KQ3O2a5oF9_hgCXVvoVnhCT1N5fzfpyPAle0dpFdI5GOB8hfqAava3SnKA0GLSyAZFa9SlK3inw',
    },
    {
        alt: 'Screenshot of investment analysis chart in app',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD18D-LRzA6yj3zcsJ_rIUOsJOnhkfVW_RBnH5bwUvLuicTUjTbtEL79A2n5noHpzUYSNpnHnlJ8v30VGQEgnXcplDdBZ_hrTW2nazLVO-FklDKRUvA9bwyfczaFkBn5QEoWdsmWvFMVqi9dcsfP9Si4coWFfxMTOse51qgaRo5DTepiR5CuPpqYTD9slIKZAK4WDBZN7ceUs1fXDuuLH8KtUBNbzBazXTlXbx8q09nSO7ixbL-zx3OZir9erli93QXPWU-5TcGYA',
    },
    {
        alt: 'Screenshot of personalized spending goals in app',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVQ5HQ_acG0TcVQDKJbg8JOsXp86e4-hPzSItBR06vuVqee8FiZEvSE0sFLgaSYc4OIrUTdBfw1zW_KfeJMbIfE9-uUBaluiT2HDw__63-xG4zWR2wwUWrZeCiNxhBpDTkrn9D7xnOkuejkpmBCGAf7rzXF2axQP7qKlFSCiUJvIjOTSvVs1xftCiH2KCH01fragES4AjaoM523FlHDTzIN260zveL7ekqPTi8eB5hf1u-VBgwmgUURn_YrbDucIq7PVFWil_ivg',
    },
    {
        alt: 'Screenshot of security settings and bank connections',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMsUSAU7X7KNX5tKpKi3pPAcd64G2O44EiaG5AKZ9SqpMcfFO5isZkDqM9CV1QX0QoMKOJV34g86j2aopoPCST3AQSbZkAwKDJfmEr7ixiXRE-_oqj4NgY8ow02KkUFsmG6L8ZhdSnM6khNkno026ix3aGGTsgcNJQEDZE7obsD58sRcdGXUXwzHZ6-LPkr-9wIuTejRqRQ1Fljr_UxEGtYWj-It39F8aep1uaemejR0yEIY-2Yo2bAzOvRMqO_ds9WZf_Wp0jRg',
    },
]

export default function AppShowcase() {
    return (
        <section className="py-24 bg-background-light overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12">
                <h2 className="text-3xl font-bold tracking-tight">Elegance in every pixel.</h2>
            </div>
            <div className="flex gap-8 px-6 overflow-x-auto no-scrollbar pb-8">
                {screenshots.map((img, idx) => (
                    <div
                        key={idx}
                        className="min-w-[300px] h-[500px] rounded-[2rem] bg-slate-200 overflow-hidden shadow-xl border border-slate-300 shrink-0 hover:scale-[1.02] transition-transform duration-300"
                    >
                        <img
                            className="w-full h-full object-cover"
                            alt={img.alt}
                            src={img.src}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}
