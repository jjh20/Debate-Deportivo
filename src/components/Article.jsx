import React from "react";

export function Article ({img, numero, titulo, texto}){
    return (
    <article className="flex h-[162px]">
        <div className="w-[100px] flex-none">
            <img src={img} alt="" />
        </div>
        <div className="pl-6">
            <p className="text-gray-300 text-3xl mb-[18px] font-bold">{numero}</p>
            <h2 className="font-bold mb-[18px] hover:text-red-600 cursor-pointer ">{titulo}</h2>
            <p className="text-gray-300">{texto}</p>
            <img src="" alt="" />
        </div>
    </article> 
    )
}


