import { addDelayCSSAnimation, addNewClassNamesAnimation } from "../../src/utils/animations";



describe('addDelayCSSAnimation', () => {
  it('should return a CSSProperties object with animationDelay and animationDuration properties set', () => {
    const elementProps = { style: { backgroundColor: 'red' } };
    const delay = 500;
    const duration = 1000;
    const result = addDelayCSSAnimation({ elementProps, delay, duration });
    expect(result).toEqual({
      backgroundColor: 'red',
      animationDelay:`${delay}ms`,
      animationDuration:`${duration}ms`,
    });
  });

  it('should return a CSSProperties object with animationDuration property set and animationDelay property not set when delay is not provided', () => {
    const elementProps = { style: { backgroundColor: 'red' } };
    const duration = 1000;
    const result = addDelayCSSAnimation({ elementProps, duration });
    expect(result).toEqual({
      backgroundColor: 'red',
      animationDuration: `${duration}ms`,
    });
  });
});

describe('addNewClassNamesAnimation', () => {
  it('should return a new className with animate__ and animation type', () => {
    const elementProps = { className: 'container' };
    const animation = 'fadeIn';
    const result = addNewClassNamesAnimation({ elementProps, animation });
    expect(result).toEqual('container animate__fadeIn');
  });

  it('should return a new className with animate__ and animation type when className is not provided', () => {
    const elementProps = {};
    const animation = 'fadeIn';
    const result = addNewClassNamesAnimation({ elementProps, animation });
    expect(result).toEqual('animate__fadeIn');
  });
});
