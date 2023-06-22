"use client";
import Image from "next/image";
import {useEffect, useRef, useState} from "react";
import Link from "next/link";
import classNames from "classnames";
import {Button} from "@/components/Button";

export const Navbar = () => {
    const [ModalOpen, setModalOpen] = useState<boolean>(false);
    const modalRef = useRef(null);

    useEffect(() => {
        const modalFuncListener = (e: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                setModalOpen(false);
            }
        };

        document.addEventListener("click", modalFuncListener);

        return () => {
            document.removeEventListener("click", modalFuncListener);
        };
    }, []);

    return (
        <nav className="h-[60px] w-full flex bg-white shadow-sm fixed items-center px-[30px] justify-between">
            <Link href={"/"}>
                <Image width={106} height={32} src="https://meta-l.cdn.bubble.io/f1531946819200x747478706762194600/Bubble%20logo.svg" alt="Logo" />
            </Link>

            {/* Nav Links */}
            <div className="h-full gap-[27.5px] flex items-center">
                <div ref={modalRef} className="relative flex items-center text-[14px] font-bold transition-colors duration-150 cursor-pointer">
                    <span onClick={() => setModalOpen((prev) => !prev)} className="hover:text-activeNav text-nav flex items-center gap-1">
                        <p>Product</p>
                    <span className="material-icons">keyboard_arrow_down</span>
                    </span>

                    {/* Sub Links */}
                    <div
                         className={
                        classNames(
                            "absolute cursor-default transition-opacity duration-200 top-full right-0 flex flex-col text-[13px] font-bold gap-[19px] rounded-xl shadow-modalShadow w-[200px] max-w-[200px] min-w-[200px] p-[20px] mt-[10px] mr-[4px] mb-[6px] ml-0",
                            ModalOpen ? "opacity-100" : "opacity-0 top-[-999999999999999px]",
                        )
                    }>
                        <p className="hover:text-activeNav cursor-pointer text-nav">Features</p>
                        <p className="hover:text-activeNav cursor-pointer text-nav">Responsive design</p>
                        <p className="hover:text-activeNav cursor-pointer text-nav">Version control <span className="ml-2 bg-[#90dfff] py-[3px] px-[6px] text-[7px] rounded-sm">NEW</span></p>
                        <p className="hover:text-activeNav cursor-pointer text-nav">Marketplace</p>
                        <p className="hover:text-activeNav cursor-pointer text-nav">Security</p>
                    </div>
                </div>
                <Link className="hover:text-activeNav text-nav text-[15px] font-bold transition-colors duration-150" href="pricing">Pricing</Link>
                <Link className="hover:text-activeNav text-nav text-[15px] font-bold transition-colors duration-150" href="showcase">Showcase</Link>
                <Link className="hover:text-activeNav text-nav text-[15px] font-bold transition-colors duration-150" href="academy">Academy</Link>

                <div className="w-[1px] h-6 bg-[#E4EAF1]" />

                <div className="flex gap-4 items-center">
                    <Link className="text-activeNav opacity-75 hover:opacity-100 text-[15px] font-bold transition-opacity duration-150" href="login">Log in</Link>
                    <Button>
                        Get Started
                    </Button>
                </div>
            </div>
        </nav>
    );
};
