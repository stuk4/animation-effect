import { Children, cloneElement,useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { IAnimateProps } from '../interfaces/IAnimations';
import { addDelayCSSAnimation, addNewClassNamesAnimation } from '../utils/animations';


interface AnimateInViewProps extends IAnimateProps{
    rootMargin?:string,
}

export const AnimateInView = ({
    children,
    duration=1000,
    delay=0,
    rootMargin='-100px 0px',
    animation}:AnimateInViewProps) => {


    const [ref, inView,node] = useInView({
        rootMargin,
        triggerOnce: true
    })

    const child = Children.only(children)
    const cssStyleDelay = addDelayCSSAnimation({elementProps:child.props,delay,duration})
    const newClassNames = addNewClassNamesAnimation({animation:animation,elementProps:child.props})

    const addAnimation = () => {
        const element = node?.target;
        if (!element) return;
        element.classList.add('animate');

    };
    useEffect(() => {
        if (!inView)return;
            addAnimation()
    }, [inView,addAnimation])
    
    const childProps:(Partial<any> & React.Attributes) = { ...child.props, 
        className: newClassNames,
        style:cssStyleDelay,
        ref
    }
  return  cloneElement(children,childProps)
}
