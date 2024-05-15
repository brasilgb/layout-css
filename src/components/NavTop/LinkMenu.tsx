import Link from "next/link";
import React from 'react'

interface LinkMenuProps {
    title: string;
    url: string;
}

const LinkMenu = (props: LinkMenuProps) => {
    return (
        <Link
            className="text-base text-white hover:text-gray-100 transition-colors duration-150 ease-in-out"
            href="#"
        >
            <span>{props.title}</span>
        </Link>
    )
}

export default LinkMenu