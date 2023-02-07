import React from 'react';

function PortfolioItem({title, imgUrl, stack, link}) {
    return (
        <div
        href={link}
        target="_blank"
        rel="noopener noreferrer" 
        className="relative group border-2 border-stone-900 rounded-md overflow-hidden dark:border-white">
            <a
            href={link}
            target="_blank"
            rel="noopener noreferrer" 
            >
                <div className="absolute top-[30%] text-center w-full opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                    GitHub
                </div>
                <img 
                    src={imgUrl} 
                    alt="portfolio" 
                    className="w-full h-36 md:h-48 object-cover cursor-pointer
                    opacity-100 group-hover:opacity-30 transition duration-300 ease-in-out bg-black-700
                    "
                />
            </a>
            <div className="w-full p-4">
                <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold dark:text-white">{title}</h3>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white">
                    {stack.map(item => (
                        <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md dark:border-white">
                            {item}
                        </span>
                    ))}
                </p>
            </div>
        </div>
    )
}

export default PortfolioItem;