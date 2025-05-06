"use client";
 
import Image from "next/image";
import React from "react";



function Cards() {
  return (
<div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 ml-24 mb-24  ">
  {[1, 2, 3, 4].map((num) => (
        <Image
          src={`/card${num}.png`}
          height={500}
          width={500}
          className="transition-all duration-300  hover:translate-y-1"
          alt={`3d-card_${num}`}
        />

  ))}
</div>




  
    
    
    
    

  )
}

export default Cards
