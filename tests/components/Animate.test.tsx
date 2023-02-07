import React from "react";
import { render, screen } from '@testing-library/react';
import { Animate } from '../../src/components/Animate';



const ReactTestRenderer = require('react-test-renderer');


describe('Animate component', () => {
    const text = 'Animated Text';
    const animation = "fadeIn"
    it('clone the correct element type', () => {
      const tag = "p"
      render(
        <Animate animation={animation}>
          <p>{text}</p>
        </Animate>
      );
      const element = screen.getByTestId('animate-element');
      
      expect(element.tagName.toLowerCase()).toBe(tag);
    });
    it('renders the children with animation styles', () => {
      render(
        <Animate animation={animation}>
          <p>{text}</p>
        </Animate>
      );
      const element = screen.getByTestId("animate-element");
      expect(element.classList.contains(`animate__${animation}`)).toBe(true)

    

    });
    it('applies custom animation duration', () => {
      const duration = 2000;
      render(
        <Animate animation={animation} duration={duration}>
          <p>{text}</p>
        </Animate>
      );
      const element = screen.getByText(text);
      expect(element).toHaveStyle(`animation-duration: ${duration}ms`);
      
    });

    it('applies custom animation delay', () => {
      const delay = 2000;
      render(
        <Animate animation={animation} delay={delay}>
          <p>{text}</p>
        </Animate>
      );
      const element = screen.getByText(text);
      expect(element).toHaveStyle(`animation-delay: ${delay}ms`);
      
    });

    it('matches the snapshot', () => {
  
      const tree = ReactTestRenderer.create(
        <Animate animation={animation}>
            <p>{text}</p>
        </Animate>
        )
      .toJSON();
      expect(tree).toMatchSnapshot();
    });
});
