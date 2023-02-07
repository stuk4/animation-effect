import React from "react";
import { render, screen } from '@testing-library/react';
import { Animate } from '../../src/components/Animate';



const ReactTestRenderer = require('react-test-renderer');


describe('Animate component', () => {
  
  it('renders the children with animation styles',async () => {
    const text = 'Animated Text';
    const {getByTestId,rerender} = render(
  
      <Animate animation={"fadeIn"}>
        <p>{text}</p>
      </Animate>
    );
    const element = await screen.getByTestId("animate-element");
    await screen.debug()
    expect(element.classList.contains(`animate__${'fadeIn'}`)).toBe(true)
  

  });

});

it('matches the snapshot', () => {
  const text = 'Animated Text';
  const tree = ReactTestRenderer.create(
    <Animate animation="fadeIn">
        <p>{text}</p>
    </Animate>
    )
    .toJSON();
expect(tree).toMatchSnapshot();
});
// describe('TypeWriter component', () => {
//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   it('renders the correct element type', () => {
//     const tag = "h1"
//     const { getByTestId, } = render(
//       <TypeWriter elementType={tag} text="Test text" />
//     );
//     const element = getByTestId('typewriter-element');
//     expect(element.tagName.toLowerCase()).toBe(tag);
//   });


//   it('calls handleTypeWriter with correct parameters', async () => {
//     const text = 'Test text';
//     const interval = 20;
//     const delay = 0;
//     const { getByTestId } = render(
//       <TypeWriter elementType="h1" text={text} interval={interval} delay={delay} />
//     );
//     // waiting delay 
//     const element = getByTestId('typewriter-element')
//     await waitFor(() => {
//       expect(handleTypeWriter).toHaveBeenCalledWith(element, text, interval)
//     })

//   });



//   it('has the correct class name', () => {
//     const className = 'test-class';
//     const { getByTestId } = render(
//       <TypeWriter elementType="h1" text="Test text" classNames={className} />
//     );
//     const element = getByTestId('typewriter-element');
//     expect(element.classList.contains(className)).toBe(true);
   
//   });

  
//   it('matches the snapshot', () => {
//     const tree = ReactTestRenderer.create(<TypeWriter elementType="h1" text="Test text" />)
//       .toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });
