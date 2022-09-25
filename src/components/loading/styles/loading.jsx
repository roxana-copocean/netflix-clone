import styled, { createGlobalStyle } from 'styled-components';

// LockBody - locking the body
export const LockBody = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

// RealeaseBody - unlocking the body
export const ReleaseBody = createGlobalStyle`
  body {
    overflow: visible;
  }
`;

//  Picture
export const Picture = styled.img`
	width: 50px;
	height: 50px;
	position: absolute;
	top: 50%;
	left: 50%;
	margin-top: -100px;
	margin-left: -22px;
`;

// Spinner
export const Spinner = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	background-color: black;
	z-index: 999;
	:after {
		content: "";
		position: absolute;
		top: 50%;
		left: 50%;
		background-image: url(/images/misc/spinner.png);
		background-size: contain;
		background-repeat: no-repeat;
		margin-top: -150px;
		margin-left: -75px;
		width: 150px;
		height: 150px;
		animation-name: spinner;
		animation-duration: 800ms;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
	}
	@-ms-keyframes spinner {
		from {
			-ms-transform: rotate(0deg);
		}
		to {
			-ms-transform: rotate(360deg);
		}
	}
	@-moz-keyframes spinner {
		from {
			-moz-transform: rotate(0deg);
		}
		to {
			-moz-transform: rotate(360deg);
		}
	}
	@-webkit-keyframes spinner {
		from {
			-webkit-transform: rotate(0deg);
		}
		to {
			-webkit-transform: rotate(360deg);
		}
	}
	@keyframes spinner {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;
