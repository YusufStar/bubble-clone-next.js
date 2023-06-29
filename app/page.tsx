"use client";

import Image from "next/image";
import { Button } from "@/components/Button";
import { useEffect, useRef, useState } from "react";
import image1 from "@/public/images/1.svg";
import image2 from "@/public/images/2.svg";
import image3 from "@/public/images/3.svg";
import Link from "next/link";

export default function Home() {
    const imageRef = useRef(null);
    const animationDuration = 9600;
    const images = [image1, image2, image3];
    const brandImages = [
        {
            image: require("@/public/images/brand1.png")
        },
        {
            image: require("@/public/images/brand2.png"),
        },
        {
            image: require("@/public/images/brand3.png"),
        },
        {
          image: require("@/public/images/brand4.png"),
        },
        {
            image: require("@/public/images/brand5.png"),
        },
        {
            image: require("@/public/images/brand6.png"),
        },
        {
            image: require("@/public/images/brand7.png"),
        },
        {
            image: require("@/public/images/brand8.png"),
        }
    ]
    const  bubbleItemsWithImage = [
        {
            image: require("@/public/images/prototype.svg"),
            title: "Prototype",
            desc: "Demonstrate your idea before making an investment in technical resources.",
        },
        {
            image: require("@/public/images/launch.svg"),
            title: "Launch",
            desc: "Build customer-facing web platforms and internal tools in hours instead of months.",
        },
        {
            image: require("@/public/images/iterate.svg"),
            title: "Launch",
            desc: "Build customer-facing web platforms and internal tools in hours instead of months.",
        },
        {
            image: require("@/public/images/scale.svg"),
            title: "Launch",
            desc: "Build customer-facing web platforms and internal tools in hours instead of months.",
        },
    ]
    const containers = [
        {
            image: require("@/public/images/sectionimage1.png"),
            title: "Full functionality, no code",
            bg: "#f2f5f9",
            descHTML: <>
                <span>Bubble lets you create interactive, multi-user apps for desktop</span>
                <span>and mobile web browsers, including all the features you need to</span>
                <span>build a site like Facebook or Airbnb. Build out logic and manage a</span>
                <span>database with our intuitive, fully customizable platform.</span>
            </>
        },
        {
            image: require("@/public/images/sectionimage2.gif"),
            title: "Pixel-perfect designs",
            bg: "#fff",
            descHTML: <>
                <span>Bubble offers total design freedom without any knowledge of</span>
                <span>HTML or CSS. Create mobile-friendly layouts and dynamic</span>
                <span>content for a polished product that you'll be proud to show off to </span>
                <span>your prospects, customers, or investors.</span>
            </>
        },
        {
            image: require("@/public/images/sectionimage2.svg"),
            title: "Robust, scalable infrastructure",
            bg: "#f2f5f9",
            descHTML: <>
                <span>Traditional web applications require you to manage your code and</span>
                <span>set up a deployment process to a web server. Bubble handles</span>
                <span>deployment and hosting for you. There are no hard limits on the</span>
                <span>number of users, volume of traffic, or data storage.</span>
            </>
        },
    ]
    const successful = [
        {
            image: require("@/public/images/divined.png"),
            title: "Offers clean energy home financing",
            money: "$365M",
        },
        {
            image: require("@/public/images/qoins.png"),
            title: "Helps repay loans and debt automatically",
            money: "$1.5M",
        },
        {
            image: require("@/public/images/comet.svg"),
            title: "Curates agile freelance IT talent",
            money: "$13M",
        },
        {
            image: require("@/public/images/teal.png"),
            title: "Tracks and organizes job search\n",
            money: "$5M",
        },
    ]
    const thriving = [
        {
            image: require("@/public/images/forum.svg"),
            title: "Forum",
            desc: "Ask and answer questions about Bubble in our active user community.",
        },
        {
            image: require("@/public/images/integration.svg"),
            title: "Integrations",
            desc: "Extend Bubble’s core functionality with new elements, actions, and API connections.",
        },
        {
            image: require("@/public/images/marketplace.svg"),
            title: "Marketplace",
            desc: "Find the perfect template or plugin to help you realize your vision.\n",
        },
        {
            image: require("@/public/images/agencies.svg"),
            title: "Agencies",
            desc: "Purchase services from our vibrant ecosystem of freelancers and agencies.\n",
        }
    ]
    const texts = ["tech products", "marketplaces", "SaaS apps", "dashboards", "CRMs"]
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentText, setCurrentText] = useState<string>(texts[0]);
    const currentImage = images[currentImageIndex];

    useEffect(() => {
        const changeImage = () => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        };

        const interval = setInterval(changeImage, animationDuration);

        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % texts.length;
            setCurrentText(texts[currentIndex]);
        }, 2500);

        return () => clearInterval(interval);
    }, [texts]);


    useEffect(() => {
        const spanElement = document.getElementById("changingText");
        spanElement.classList.add("changeText");

        const animationTimeout = setTimeout(() => {
            spanElement.classList.remove("changeText");
        }, 1000);

        return () => clearTimeout(animationTimeout);
    }, [currentText]);

    return (
        <main className="w-full h-full pt-[120px] flex flex-col overflow-hidden items-center">
            <div className="flex w-full flex-col px-6 xl:items-start  pb-24 items-center xl:gap-[50px] justify-center xl:flex-row">
                <div className="flex w-auto max-w-[545px] flex-col justify-between">
                    <h2 className="text-[#00033d] flex flex-col leading-[4rem] text-[50px] font-extrabold mb-8">
                        The best way to build{" "}
                        <span id="changingText" className={`${currentText && "changeText"} text-[#424df8]`}>
                            {currentText}
                        </span>
                        {" "}without code
                    </h2>

                    <p className="mb-12 text-[20px] font-medium">Building tech is slow and expensive. Bubble is the most powerful no-code platform for creating digital products. Build better and faster</p>

                    <div className="flex w-full justify-between items-center">
                            <Button className="px-[50px]">
                            Get started for free
                        </Button>
                        <p className="text-[#00033e] font-medium text-[15px]">Join <span className="font-bold">3,002,504</span> Bubblers today.</p>
                    </div>
                </div>
                <Image ref={imageRef} src={currentImage} alt="" className="w-full md:w-[700px]" />
            </div>
            
            <div className="bg-[#f2f5f9] w-full py-[65px] gap-8 flex flex-col items-center justify-around">
                <h2 className="text-[#262626] text-[16px] font-bold">EMPOWERING INNOVATIVE COMPANIES WORLDWIDE</h2>
                <div className="images_brand flex flex-wrap gap-x-12 gap-y-6 md:gap-x-20 md:px-24 items-center justify-center">
                    {brandImages.map((brand)  => <Image className="object-contain w-[80px] h-[max-content]" src={brand.image}/>)}
                </div>
            </div>

            <div className="flex flex-col w-full items-center justify-center py-[90px]">
                 <div className="md:flex md:flex-row grid grid-cols-2 grid-rows-2 gap-8">
                     {bubbleItemsWithImage.map((bubbleItem) => (
                         <div className="w-[290px] h-[190px]">
                             <h1 className="flex items-center mb-4 gap-6 font-semibold text-[17px]"><Image src={bubbleItem.image} alt={bubbleItem.title} />{bubbleItem.title}</h1>
                             <span className="text-[15px]">
                             {bubbleItem.desc}
                         </span>
                         </div>
                     ))}
                 </div>

                <h1 className="flex flex-col items-center font-bold text-4xl pt-10">
                    <span>Design, develop and run powerful</span>
                    <span>products with Bubble.</span>
                </h1>

                <Link className="pt-7 font-semibold text-xl text-[#424df8]" href="#">Edit this page in Bubble to see how it works </Link>
            </div>

               {containers.map((item) => (
                   <div className={`flex flex-col items-center w-full justify-center rounded-md py-[60px] bg-[${item.bg}] gap-[40px]`}>
                       <Image src={item.image} alt="" className="w-[640px] object-contain shadow-lg rounded-xl"/>
                       <h2 className="font-bold text-3xl">
                           {item.title}
                       </h2>

                       <p className="flex flex-col items-center font-medium text-[18px]">
                           {item.descHTML}
                       </p>

                       <Button className="px-[100px] text-lg">Get started for free</Button>
                   </div>
               ))}
            
            <div className="flex flex-col py-[60px] w-auto h-auto items-center justify-center">
                <h2 className="text-4xl font-bold">Successful companies use Bubble.</h2>
                <div className="py-[30px] grid grid-cols-2 grid-rows-2 gap-10">
                    {successful.map((item) => (
                        <div className="bg-[#f1f3f6] px-[60px] py-[40px] rounded-xl flex flex-col items-center gap-5" >
                            <Image src={item.image} height={45} alt="" />
                            <h3 className="text-[18px] font-medium">{item.title}</h3>
                            <p className="flex flex-col items-center font-bold">
                                <span>Raised {item.money}</span>
                                <span>in venture funding</span>
                            </p>
                        </div>
                    ))}
                </div>
                    <Button className="px-32">Get started for free</Button>
            </div>

            <div className="flex flex-col py-[60px] w-auto h-auto items-center justify-center">
                <h2 className="text-4xl font-bold">Join a thriving community of Bubble developers.</h2>
                <div className="py-[30px] grid grid-cols-2 grid-rows-2 gap-10">
                    {thriving.map((item) => (
                        <div className="max-w-[450px] px-4 py-6 flex flex-col gap-4 cursor-pointer pb-12 bg-[#f8f9fa] rounded-xl shadow-none transition-all duration-500 ease hover:bg-white hover:shadow-xl">
                            <div className="flex items-center gap-4">
                                <Image src={item.image} alt="" width={36} height={36} />
                                <h2 className="font-semibold text-lg">{item.title}</h2>
                            </div>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>


            <div className="w-full h-96 flex flex-col items-center justify-center bg-[#100635]">
                <h2 className="font-bold text-white pb-6 text-4xl">Create a free account to get started.</h2>
                <Button className="px-[50px] mb-4">
                    Get started for free
                </Button>
                <p className="text-white text-sm">Join 2,943,094 Bubblers today and start building.</p>
            </div>
        </main>
    );
}
