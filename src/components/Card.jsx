
import React from 'react'

const Card = ({title,content,buttonText,bgHover,cardBody,contentColor,titleColor,textHover,buttonTextColor,hoverButtonBg,buttonLink}) => {

      
  
  
  return (
    <div className={`lg:w-[320px] w-[full] ${cardBody} rounded-md  relative hover:${bgHover} hover:${textHover}`}>
        <div className={`text-center font-bold font-mono ${titleColor} z-20 hover:${textHover}`}>
            {title}
        </div>
        <div className={`text-sm ${contentColor} p-1 mt-4 text-center hover:${textHover} font-mono`}>
            {content}
        </div>
        <div className={`mx-auto flex justify-center border rounded-xl mt-4 hover:${hoverButtonBg} hover:border-black`}>
        <a className={`p-2 font-mono ${buttonTextColor}`} href={buttonLink}>{buttonText}</a>
        </div>
    </div>
  )
}

export default Card