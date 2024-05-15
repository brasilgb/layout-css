import Link from "next/link"
import React from 'react'

const Actions = () => {
  return (
    <div className="flex justify-start">
        <Link
        className="bg-blue-100  px-4 py-1 rounded"
        href="/signin"
        >
        <span className="text-base">SignIn</span>
        </Link>
    </div>
  )
}

export default Actions