import React, { useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';
import { Container, Button, Overlay, Inner, Close } from './style/player';
/* eslint-disable  no-unused-vars */

// Context
export const PlayerContext = createContext();

// Player
export default function Player({ children, ...restProps }) {
	const [ showPlayer, setShowPlayer ] = useState(false);

	return (
		<PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
			<Container {...restProps}>{children}</Container>
		</PlayerContext.Provider>
	);
}

// Video
Player.Video = function PlayerVideo({ src, ...restProps }) {
	const { showPlayer, setShowPlayer } = useContext(PlayerContext);
	// Creating the Portal
	return showPlayer
		? ReactDOM.createPortal(
				<Overlay onClick={() => setShowPlayer(false)} {...restProps}>
					<Inner>
						<video id="netflix-player" controls>
							<source src={src} type="video/mp4" />
						</video>
						<Close />
					</Inner>
				</Overlay>,
				document.body
			)
		: null;
};

// Button
Player.Button = function PlayerButton({ ...restProps }) {
	const { showPlayer, setShowPlayer } = useContext(PlayerContext);
	return <Button onClick={() => setShowPlayer((showPlayer) => !showPlayer)}>Play</Button>;
};
