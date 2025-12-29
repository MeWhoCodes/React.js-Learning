import React from 'react'

function Comp(props){
    console.log("props:", props)
    return (
        <div>
            <div className='flex flex-col items-center gap-3 rounded-2xl'>
                <div>
                    <img className="size-48 shadow-xl rounded-md" alt="" src="https://tailwindcss.com/_next/static/media/cover.de1997f7.png" />
                </div>
                <div className="flex items-center">
                    <span className="text-2xl font-medium">{props.Title} </span>
                    <b></b>
                    <span className="font-medium text-sky-500">The Anti-Patterns</span>
                    <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
                        <span>No. 4</span>
                        <span>·</span>
                        <span>2025</span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Comp