import React, { CSSProperties } from 'react'
import { AnimationTypes } from '../interfaces/IAnimations';

interface AddDelayCSSAnimationProps{
    elementProps: React.HTMLAttributes<any> & { className?: string; style?: React.CSSProperties };
    delay?:number,
    duration?:number,
}

export const addDelayCSSAnimation = ({elementProps,delay=0,duration=1000}:AddDelayCSSAnimationProps):CSSProperties => {
    const cssPropsWithDelay:CSSProperties ={
        ...elementProps.style,
        ...( delay && {animationDelay:delay.toString()+'ms'}),
        animationDuration:duration.toString()+'ms',
    }
  return cssPropsWithDelay;
}
interface AddNewClassNamesProps{
    elementProps: React.HTMLAttributes<any> & { className?: string; style?: React.CSSProperties };
    animation:AnimationTypes

}
export const addNewClassNamesAnimation = ({elementProps,animation}:AddNewClassNamesProps):string =>{
    const newClassNamesAnimation = elementProps.className
        ? `${elementProps.className} animate__${CSS.escape(animation)}` 
        : `animate__${CSS.escape(animation)}`
    return newClassNamesAnimation
}


  