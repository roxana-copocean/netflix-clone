import styled from 'styled-components/macro';

export const Container = styled.section`
	display: flex;
	border-bottom: 8px solid #222;
`;

// This Frame will hold the Item folder, and encalsupate it
export const Frame = styled.div`
	margin-bottom: 10px;
	max-width: 1200px;
`;

export const Inner = styled.div`
	display: flex;
	padding: 70px 45px;
	flex-direction: column;
	max-width: 815px;
	margin: auto;
`;

export const Item = styled.div`
	color: white;
	margin-bottom: 10px;
	margin: auto;
	max-width: 700px;
	width: 100%;

	&:first-of-type {
		margin-top: 3em;
	}
`;

export const Header = styled.div`
	display: flex;
	box-sizing: border-box;
	justify-content: space-between;
	cursor: pointer;
	margin-bottom: 3px;
	font-size: 26px;
	font-weight: normal;
	background-color: #303030;
	padding: 0.8em 1.2em;
	align-items: center;
	user-select: none;
	width: 100%;

	img {
		filter: brightness(0) invert(1);
		width: 24px;
		@media (max-width: 600px) {
			width: 16px;
		}
	}
	@media (max-width: 600px) {
		font-size: 16px;
	}
`;

export const Title = styled.h1`
	font-size: 50px;
	line-height: 1.1;
	margin-bottom: 8px;
	margin-top: 0;
	color: white;
	text-align: center;
	max-width: 1200px;
	@media (max-width: 600px) {
		font-size: 35px;
	}
`;

export const Body = styled.div`
	box-sizing: border-box;
	font-size: 26px;
	font-weight: normal;
	line-height: normal;
	background: #303030;
	padding: 0.8em 1.2em 0.8em 1.2em;
	white-space: pre-wrap;
	user-select: none;
	width: 100%;
	max-height: 1200px;
	transition: max-height 0.7s cubic-bezier(0.5, 0, 0.1, 1);

	span {
		display: block;
		padding: 0.8em 2.2em 0.8em 1.2em;
	}

	@media (max-width: 600px) {
	}
	font-size: 16px;
	line-height: 22px;
`;
