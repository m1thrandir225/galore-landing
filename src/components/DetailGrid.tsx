"use client"
import React, {useRef} from "react"
import { motion } from "motion/react";

type DetailImageBlockProps = {
    type: "image",
    imageURL: string
    index: number,
    containerRef: React.RefObject<HTMLDivElement | null>
}

type DetailTextBlockProps = {
    type: "text",
    title: string
    description: string
    index: number,
}

const DetailImageBlock: React.FC<DetailImageBlockProps> = (props) => {
    const {
        imageURL,
        index,
        containerRef
    } = props;

    return (
        <div className="w-1/2 mx-auto h-[450px] border-2 border-mainContainer rounded-[24px] relative overflow-visible hover:bg-mainContainer transition-all ease-in-out duration-200">
            <motion.div
                className="absolute inset-0"
                initial={{
                    x: index % 2 == 0 ? 100 : -100,
                    opacity: 0,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                transition={{
                    delay: 0.25 * index ,
                    duration: 1,
                    type: "spring",
                    bounce: 0.25,
                    damping: 20
                }}
                viewport={{ root: containerRef}}
            >
                <img
                    src={imageURL}
                    alt={`detailed-image-${index}`}
                    className="absolute -top-[50px] left-1/2 transform -translate-x-1/2 z-10"
                    style={{
                        objectFit: "contain",
                        width: "100%",
                        height: "550px"
                    }}
                />
            </motion.div>
        </div>
    )
}

const DetailTextBlock: React.FC<DetailTextBlockProps> = (props) => {
    const {title, description, index} = props;

    return (
        <div
            className="w-full h-[450px] bg-mainContainer rounded-[24px] relative p-8 flex flex-col gap-4 items-center justify-center">
            <motion.h2
                className="text-[28px] font-bold text-main font-stardom max-w-[80%] mx-auto text-center"
                initial={{
                    y: index % 2 == 0 ? 100 : -100,
                    opacity: 0,
                }}
                whileInView={{
                    y: 0,
                    opacity: 1,
                }}
                transition={{
                    delay: 0.25 * index,
                    duration: 1,
                    type: "spring",
                    bounce: 0.25,
                    damping: 20
                }}
            >{title}</motion.h2>
            <motion.p
                className="text-[16px] text-onMainContainer font-satoshi max-w-[80%] mx-auto"
                initial={{
                    y: index % 2 == 0 ? 100 : -100,
                    opacity: 0,
                }}
                whileInView={{
                    y: 0,
                    opacity: 1,
                }}
                transition={{
                    delay: 0.35 * index,
                    duration: 1,
                    type: "spring",
                    bounce: 0.25,
                    damping: 20
                }}
            >{description}</motion.p>
        </div>
    )
}

const DetailGrid: React.FC = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    const blocks: (DetailImageBlockProps | DetailTextBlockProps)[] = [
        {type: "image", imageURL: "/cocktail-details-mockup.png", index: 1, containerRef: containerRef},
        {
            type: "text",
            title: "Dive Into the Details",
            description: "Every cocktail has a story. Explore ingredients, preparation steps, and flavor profiles in a beautifully designed view. Favorite your top picks and revisit them anytime to impress your guests or treat yourself!",
            index: 2
        },
        {
            type: "text",
            title: "Create Your Signature Cocktail",
            description: "Let your imagination flow! Choose up to 3 flavors and reference cocktails, and watch Galore’s AI craft a unique concoction just for you. Whether it’s bold and experimental or light and refreshing, your perfect sip is just a tap away.",
            index: 3
        },
        { type: "image", imageURL: "/generate-mockup.png", index: 4, containerRef: containerRef },
    ];



    return (
        <div ref={containerRef} className={"w-full container mx-auto grid grid-cols-2 grid-rows-2 gap-y-[64px] py-[120px]"}>
            {blocks.map((block, index) => {
                if (block.type === "image") {
                    return <DetailImageBlock key={index} {...block} />;
                } else if (block.type === "text") {
                    return <DetailTextBlock key={index} {...block} />;
                }
                return null;
            })}
        </div>
    )
}

export default DetailGrid