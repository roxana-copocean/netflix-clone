import React from 'react';

import { Container, Base, Error, Title, Text, TextSmall, Link, Input, Submit } from './styles/form';

// Form
export default function Form({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

// Form Error
Form.Error = function FormError({ children, ...restProps }) {
	return <Error {...restProps}>{children}</Error>;
};

// Form Base - I am going to encapsulate everything inside
Form.Base = function FormBase({ children, ...restProps }) {
	return <Base {...restProps}>{children}</Base>;
};

// Form Title
Form.Title = function FormTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

// Form Text
Form.Text = function FormText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

// Form  Text Small
Form.TextSmall = function FormTextSmall({ children, ...restProps }) {
	return <TextSmall {...restProps}>{children}</TextSmall>;
};

// Form Link
Form.Link = function FormLink({ children, ...restProps }) {
	return <Link {...restProps}>{children}</Link>;
};

// Form Input
Form.Input = function FormInput({ children, ...restProps }) {
	return <Input {...restProps}>{children}</Input>;
};

// Form Submit
Form.Submit = function FormSubmit({ children, ...restProps }) {
	return <Submit {...restProps}>{children}</Submit>;
};
