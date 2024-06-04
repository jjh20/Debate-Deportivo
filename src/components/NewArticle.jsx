import React from "react";

export function NewArticle({title, texto}) {  
    return (
        <article className="h-[150px] border-b-2 border-gray-400 py-7 lg:h-[140px]
        last:border-none lg:py-4">
            <h2 className="cursor-pointer hover:text-red-500 text-[10px] 
            mb-3 font-bold">{title}</h2>
            <p className="text-[16px]">{texto}</p>
        </article>
    );
}
