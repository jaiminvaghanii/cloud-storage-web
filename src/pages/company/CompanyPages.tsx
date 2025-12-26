
export const About = () => (
    <div className="space-y-8">
        <section>
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
                At Tenbox, we are on a mission to redefine digital ownership. We believe that your data belongs to you—not to corporations, not to advertisers, and certainly not to prying eyes. Our antigravity design philosophy isn't just aesthetic; it represents the weightlessness of true freedom in the cloud.
            </p>
        </section>
        <section>
            <h3 className="text-2xl font-bold text-white mb-4">The Team</h3>
            <p className="text-gray-300">
                We are a diverse team of encryption experts, UI designers, and distributed systems engineers working together to build the most secure and beautiful storage platform in the world.
            </p>
        </section>
    </div>
);

export const Blog = () => (
    <div className="space-y-12">
        {[1, 2, 3].map((i) => (
            <article key={i} className="border-b border-white/10 pb-8 last:border-0">
                <span className="text-primary text-sm font-medium">Product Update • Dec {20 + i}, 2025</span>
                <h2 className="text-2xl font-bold text-white mt-2 mb-3 hover:text-primary cursor-pointer transition-colors">
                    The Future of Decentralized Storage v{i}.0
                </h2>
                <p className="text-gray-400 mb-4">
                    Explore how we are making zero-knowledge encryption faster and more accessible than ever before...
                </p>
                <button className="text-sm font-bold text-white hover:underline">Read more &rarr;</button>
            </article>
        ))}
    </div>
);

export const Careers = () => (
    <div>
        <h2 className="text-3xl font-bold text-white mb-8">Join the Crew</h2>
        <p className="text-gray-300 mb-12">
            Help us build the future of the internet. We are looking for passionate individuals who care about privacy and design.
        </p>

        <div className="space-y-4">
            {[
                { role: 'Senior Rust Engineer', team: 'Core Systems', loc: 'Remote' },
                { role: 'Product Designer', team: 'Design', loc: 'San Francisco' },
                { role: 'DevOps Specialist', team: 'Infrastructure', loc: 'Remote' }
            ].map((job, i) => (
                <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between hover:bg-white/10 transition-colors cursor-pointer group">
                    <div>
                        <h3 className="font-bold text-white group-hover:text-primary transition-colors">{job.role}</h3>
                        <p className="text-sm text-gray-400">{job.team} • {job.loc}</p>
                    </div>
                    <button className="px-4 py-2 rounded-lg bg-white/10 text-white text-sm font-medium group-hover:bg-primary group-hover:text-black transition-all">
                        Apply
                    </button>
                </div>
            ))}
        </div>
    </div>
);

export const Contact = () => (
    <div className="max-w-xl">
        <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
        <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary" placeholder="John Doe" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary" placeholder="john@example.com" />
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary" placeholder="How can we help?"></textarea>
            </div>
            <button className="w-full py-4 bg-primary text-black font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25">
                Send Message
            </button>
        </form>
    </div>
);
