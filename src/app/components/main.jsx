"use client"
import React from 'react';
import Image from 'next/image'
import computerPhoto from "../assets/computerPhoto.png"
export default function Main(){

    
    return(
        <section id="main"  dir="ltr">
            <div className="absolute lg:ml-52 flex ">
                <div id="leftSide">
                    <h1 className="text-white ml-16 pt-12 text-5xl">
                        <b>
                            <i>
                                Blade2Dev
                            </i>
                        </b>
                    </h1>
                    <br></br>
                <a href="#services" id='servicesBtn' 
                className="py-3 px-20 ml-14 text-center bg-stone-200 rounded text-green-800 font-bold"
                >تصفح خدماتنا
                    </a>
                    
                </div>
                <div id="rightSide ">
                    <Image
                    src={computerPhoto}
                    alt='computerPhoto'
                    width={550}
                    id='computerPhoto'
                    />
                </div>
            </div>
            
        </section>
        
    )
}