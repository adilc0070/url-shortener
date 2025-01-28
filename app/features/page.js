import { BarChart, Code, Link, Lock, Settings, Smartphone } from 'lucide-react';
import React from 'react'

const Features = () => {
    const features = [
        {
            icon: <Link className="w-6 h-6 text-blue-500" />,
            title: "Quick URL Shortening",
            description: "Instantly shorten long URLs to concise, shareable links."
        },
        {
            icon: <BarChart className="w-6 h-6 text-blue-500" />,
            title: "Analytics Dashboard",
            description: "Track the performance of your shortened URLs with detailed analytics such as click counts, geographic data, and timestamps."
        },
        {
            icon: <Settings className="w-6 h-6 text-blue-500" />,
            title: "Custom Short Links",
            description: "Create personalized short links for branding purposes."
        },
        {
            icon: <Settings className="w-6 h-6 text-blue-500" />,
            title: "URL Management",
            description: "Manage your shortened URLs with options to edit or delete them."
        },
        {
            icon: <Lock className="w-6 h-6 text-blue-500" />,
            title: "Secure and Reliable",
            description: "We prioritize your data security and ensure high availability of our service."
        },
        {
            icon: <Code className="w-6 h-6 text-blue-500" />,
            title: "API Access",
            description: "Integrate our URL shortening service into your applications using our developer-friendly API."
        },
        {
            icon: <Smartphone className="w-6 h-6 text-blue-500" />,
            title: "Mobile-Friendly",
            description: "Seamlessly use the application on desktop and mobile devices."
        }
    ];
    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Features</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Discover all the powerful features that make our URL shortening service stand out.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center">
                <p className="text-gray-600">
                    For questions or further information, feel free to contact us at{' '}
                    <a href="mailto:adilc0070@gmail.com" className="text-blue-500 hover:text-blue-600">
                        adilc0070@gmail.com
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Features