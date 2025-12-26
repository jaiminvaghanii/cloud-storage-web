export const Transparency = () => {
    return (
        <>
            <section id="overview" className="mb-12">
                <h2 id="overview" className="text-2xl font-bold text-white mb-4">1. Overview</h2>
                <p className="mb-4">
                    At Tenbox, we believe in being open and transparent about how we handle user data and government requests. This Transparency Report details the requests we have received for user data or content removal.
                </p>
            </section>

            <section id="data-requests" className="mb-12">
                <h2 id="data-requests" className="text-2xl font-bold text-white mb-4">2. Government Data Requests</h2>
                <p className="mb-4">
                    We received the following number of requests for user data from government agencies in the last reporting period (Jan 1, 2024 - Dec 31, 2024):
                </p>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-white/10">
                                <th className="py-4 px-4 font-bold text-white">Request Type</th>
                                <th className="py-4 px-4 font-bold text-white">Requests Received</th>
                                <th className="py-4 px-4 font-bold text-white">Users Affected</th>
                                <th className="py-4 px-4 font-bold text-white">Data Disclosed</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-300">
                            <tr className="border-b border-white/5 bg-white/5">
                                <td className="py-4 px-4">Search Warrants</td>
                                <td className="py-4 px-4">0</td>
                                <td className="py-4 px-4">0</td>
                                <td className="py-4 px-4">0%</td>
                            </tr>
                            <tr className="border-b border-white/5">
                                <td className="py-4 px-4">Subpoenas</td>
                                <td className="py-4 px-4">2</td>
                                <td className="py-4 px-4">2</td>
                                <td className="py-4 px-4">0%</td>
                            </tr>
                            <tr className="border-b border-white/5 bg-white/5">
                                <td className="py-4 px-4">Court Orders</td>
                                <td className="py-4 px-4">0</td>
                                <td className="py-4 px-4">0</td>
                                <td className="py-4 px-4">0%</td>
                            </tr>
                            <tr className="border-b border-white/5">
                                <td className="py-4 px-4">National Security Letters</td>
                                <td className="py-4 px-4">0</td>
                                <td className="py-4 px-4">0</td>
                                <td className="py-4 px-4">0%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section id="takedown-requests" className="mb-12">
                <h2 id="takedown-requests" className="text-2xl font-bold text-white mb-4">3. Content Removal Requests</h2>
                <p className="mb-4">
                    Requests to remove content based on local laws or Terms of Service violations.
                </p>
                {/* Add chart or table here if needed */}
            </section>
        </>
    );
};
