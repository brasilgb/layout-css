import React from 'react'

type Props = {}

const ServiceContent = (props: Props) => {
    return (
        <div className="bg-white shadow-md rounded-md overflow-hidden duration-500 hover:scale-105 hover:shadow-lg">
            <img src="https://tailwindcss.com/_next/static/media/headlessui@75.c1d50bc1.jpg"
                alt="Headless UI" className="w-full h-64 object-cover" />
            <div className="p-4 md:p-6">
                <div>
                    <h3 className="text-xl font-semibold text-indigo-500 dark:text-indigo-300 mb-2">Headless UI</h3>
                    <p className="text-gray-700 mb-4 two-lines">
                        Completely unstyled, fully accessible UI
                        components,
                        designed to integrate beautifully with Tailwind CSS.
                    </p>
                </div>
                <div className="flex justify-end">
                    <a href="#"
                        className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-full">
                        Laia mais
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ServiceContent