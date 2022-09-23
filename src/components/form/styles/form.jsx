import styled from 'styled-components/macro';
import { Link as RouterLink } from 'react-router-dom';
// I am renaming the Link because I do have an other Link component, and want to keep naming it like that

// Container
export const Container = styled.section`
	display: flex;
	flex-direction: column;
	min-height: 660px;
	background-color: rgba(0, 0, 0, 0.7);
	border-radius: 5px;
	box-sizing: border-box;
	width: 100%;
	margin: auto;
	max-width: 450px;
	padding: 60px 68px 48px;
	margin-bottom: 100px;
`;

// Base - as the Form
export const Base = styled.form`
	display: flex;
	flex-direction: column;
	max-width: 450px;
	width: 100%;
`;

// Error
export const Error = styled.div`
	background-color: #e87c03;
	border-radius: 4px;
	font-size: 14px;
	margin: 0 0 16px;
	color: white;
	padding: 15px 20px;
`;

// Title
export const Title = styled.h1`
	color: #fff;
	font-size: 32px;
	font-weight: bold;
	margin-bottom: 28px;
`;

// Text
export const Text = styled.h1`
	color: #737373;
	font-size: 16px;
	font-weight: 500;
`;

// TextSmall
export const TextSmall = styled.h2`
	margin-top: 10px;
	font-size: 13px;
	line-height: normal;
	color: #8c8c8c;
`;

// Link
export const Link = styled(RouterLink)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

// Input
export const Input = styled.input`
	background: #333;
	border-radius: 4px;
	border: 0;
	color: white;
	height: 50px;
	line-height: 50px;
	padding: 5px 20px;
	margin-bottom: 20px;

	&:last-of-type {
		margin-bottom: 30px;
	}
`;

// Submit- the submit button
export const Submit = styled.button`
	background: #e50914;
	border-radius: 4px;
	font-size: 16px;
	margin: 0px 0 12px;
	padding: 16px;
	border: 0;
	color: white;
	cursor: pointer;

	&:disabled {
		opacity: 0.5;
	}
`;
