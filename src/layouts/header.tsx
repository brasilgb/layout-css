'use client'
import Actions from "@/components/Actions"
import AppLogo from "@/components/AppLogo"
import MenuButton from "@/components/MenuButton"
import NavTop from "@/components/NavTop"
import React from 'react'

const HeaderLayout = () => {
    return (
        <div className="shadow-inner bg-blue-500">
            <div className="container h-16 md:px-0 px-6 md:mx-auto flex flex-row items-center justify-start">
                <div className="mr-8">
                    <AppLogo />
                </div>
                <div className="flex justify-between flex-1">
                    <div className="md:flex justify-start md:flex-1 hidden">
                        <NavTop />
                    </div>
                    <div className="md:flex hidden">
                        <Actions />
                    </div>
                </div>
                <div className="md:hidden relative">
                    <MenuButton />
                </div>
            </div>
        </div>
    )
}

export default HeaderLayout;