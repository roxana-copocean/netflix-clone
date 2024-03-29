import React, { useState, useContext, createContext } from 'react';
import { Container, Frame, Title, Item, Inner, Header, Body } from './styles/accordion';

// creating the context, that will be used with the Provider wrapping the Item component
const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
	return (
		<Container {...restProps}>
			<Inner>{children}</Inner>
		</Container>
	);
}

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
	return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

// we will use the Item to encapsulate everything we have inside
Accordion.Item = function AccordionItem({ children, ...restProps }) {
	const [ toggleShow, setToggleShow ] = useState(false);

	return (
		<ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
			<Item {...restProps}>{children}</Item>
		</ToggleContext.Provider>
	);
};

// using our context in the Header component for conditionally rendering the close/open icons
Accordion.Header = function AccordionHeader({ children, ...restProps }) {
	const { toggleShow, setToggleShow } = useContext(ToggleContext);

	return (
		<Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
			{children}
			{toggleShow ? (
				<img src="/images/icons/close-slim.png" alt="Close" />
			) : (
				<img src="/images/icons/add.png" alt="Open" />
			)}
		</Header>
	);
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
	const { toggleShow } = useContext(ToggleContext);

	return toggleShow ? (
		<Body {...restProps}>
			<span>{children}</span>
		</Body>
	) : null;
};
