
export type AnimationTypes = 
    | 'fadeIn'
    | 'fadeInUp' 
    | 'fadeInDown' 
    | 'zoomOut' 
    | 'zoomIn' 
    | 'zoomOutDown' 
    | 'zoomInDown';

export interface ITypeWriterProps{
    text:string;
    elementType: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div' | 'li' | 'a',
    delay?:number
    classNames?:string;
    disabledInMobile?:boolean,
    disableTypeWriter?:boolean,
}

export interface IAnimateProps{
    children:JSX.Element;
    duration?:number, 
    delay?: number,
    animation:AnimationTypes
}
