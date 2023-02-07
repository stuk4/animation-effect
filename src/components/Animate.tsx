import React, { cloneElement, useEffect } from 'react'
import { Children } from 'react';
import {  IAnimateProps } from '../interfaces/IAnimations';
import { addDelayCSSAnimation, addNewClassNamesAnimation } from '../utils/animations';


export const Animate = ({children,delay=0,duration=1000,animation}:IAnimateProps) => {

    const child = Children.only(children)
    const cssStyleDelay = addDelayCSSAnimation({elementProps:child.props,delay,duration})
    const newClassNames = addNewClassNamesAnimation({animation:animation,elementProps:child.props})
    

    const childProps:(Partial<any> & React.Attributes) = { ...child.props, 
        className: `animate ${newClassNames} `,
        style:cssStyleDelay,
        "data-testid":"animate-element"
    }

    return  cloneElement(children,childProps)
}
