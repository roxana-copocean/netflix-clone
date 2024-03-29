import React, { useContext, useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import { SelectProfileContainer } from './profiles';
import { FirebaseContext } from '../context/firebase';
import { Card, Loading, Header, Player } from '../components';
import { FooterContainer } from './footer';
import * as ROUTES from '../constants/routes.js';
import logo from '../logo.svg';

export function BrowseContainer({ slides }) {
	const [ category, setCategory ] = useState('series');
	const [ searchTerm, setSearchTerm ] = useState('');
	const [ profile, setProfile ] = useState({});
	const [ loading, setLoading ] = useState(true);
	const [ slideRows, setSlideRows ] = useState([]);
	const { firebase } = useContext(FirebaseContext);
	// pulling the user out of firebase
	const user = firebase.auth().currentUser || {};

	useEffect(
		() => {
			setTimeout(() => {
				setLoading(false);
			}, 2000);
		},
		[ profile.displayName ]
	);

	useEffect(
		() => {
			setSlideRows(slides[category]);
		},
		[ slides, category ]
	);

	useEffect(
		() => {
			const fuse = new Fuse(slideRows, {
				keys: [ 'data.description', 'data.title', 'data.genre' ]
			});
			const results = fuse.search(searchTerm).map(({ item }) => item);
			if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
				setSlideRows(results);
			} else {
				setSlideRows(slides[category]);
			}
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[ searchTerm ]
	);
	return profile.displayName ? (
		<React.Fragment>
			{loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
			<Header src="joker3" dontShowOnSmallViewport>
				<Header.Frame>
					<Header.Group>
						<Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
						<Header.TextLink
							active={category === 'series' ? 'true' : 'false'}
							onClick={() => setCategory('series')}
						>
							Series
						</Header.TextLink>
						<Header.TextLink
							active={category === 'films' ? 'true' : 'false'}
							onClick={() => setCategory('films')}
						>
							Films
						</Header.TextLink>
					</Header.Group>
					<Header.Group>
						<Header.Profile>
							<Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
							<Header.Picture src={user.photoURL} />
							<Header.Dropdown>
								<Header.Group>
									<Header.Picture src={user.photoURL} />
									<Header.TextLink>{user.displayName}</Header.TextLink>
								</Header.Group>
								{/* Sign Out */}
								<Header.Group>
									<Header.TextLink onClick={() => firebase.auth().signOut()}>
										Sign out
									</Header.TextLink>
								</Header.Group>
							</Header.Dropdown>
						</Header.Profile>
					</Header.Group>
				</Header.Frame>
				<Header.Feature>
					<Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
					<Header.Text>
						{' '}
						In 1981 Gotham City, a struggling, mentally ill comic battles to be seen. His life takes a dark,
						gut-wrenching turn after he lashes back at attackers.
					</Header.Text>
					<Header.PlayButton>Play</Header.PlayButton>
				</Header.Feature>
			</Header>

			{/* The Card - slides  */}
			<Card.Group>
				{slideRows.map((slideItem) => (
					<Card key={`${category}-${slideItem.title.toLowerCase()}`}>
						<Card.Title>{slideItem.title}</Card.Title>
						<Card.Entities>
							{slideItem.data.map((item) => (
								<Card.Item key={item.docId} item={item}>
									<Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
									<Card.Meta>
										<Card.SubTitle>{item.title}</Card.SubTitle>
										<Card.Text>{item.description}</Card.Text>
									</Card.Meta>
								</Card.Item>
							))}
						</Card.Entities>
						<Card.Feature category={category}>
							<Player>
								<Player.Button />
								<Player.Video src="/videos/bunny.mp4" />
							</Player>
						</Card.Feature>
					</Card>
				))}
			</Card.Group>
			<FooterContainer />
		</React.Fragment>
	) : (
		<SelectProfileContainer user={user} setProfile={setProfile} />
	);
}
