import React, { useState } from 'react';
import { Link as LogoLinkRouter } from 'react-router-dom';
import {
	Background,
	Container,
	Logo,
	Picture,
	ButtonLink,
	Feature,
	Dropdown,
	Text,
	Link,
	Profile,
	PlayButton,
	Search,
	SearchIcon,
	SearchInput,
	Group,
	FeatureCallOut
} from './styles/header';

// Header
export default function Header({ bg = true, children, ...restProps }) {
	return bg ? (
		<Background data-testid="header-bg" {...restProps}>
			{children}
		</Background>
	) : (
		children
	);
}

// Feature
Header.Feature = function HeaderFeature({ children, ...restProps }) {
	return <Feature {...restProps}>{children}</Feature>;
};

// Profile
Header.Profile = function HeaderProfile({ children, ...restProps }) {
	return <Profile {...restProps}>{children}</Profile>;
};

// Frame
Header.Frame = function HeaderFrame({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
};

// Group
Header.Group = function HeaderGroup({ children, ...restProps }) {
	return <Group {...restProps}>{children}</Group>;
};

// Picture
Header.Picture = function HeaderPicture({ src, ...restProps }) {
	return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};

// Search
Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
	const [ searchActive, setSearchActive ] = useState(false);
	return (
		<Search {...restProps}>
			<SearchIcon onClick={() => setSearchActive((searchActive) => !searchActive)}>
				<img src="/images/icons/search.png" alt="Search" />
			</SearchIcon>
			<SearchInput
				value={searchTerm}
				onChange={({ target }) => setSearchTerm(target.value)}
				placeholder="Search films and series"
				active={searchActive}
			/>
		</Search>
	);
};

// The Logo Element that uses The Link from React Router
Header.Logo = function HeaderLogo({ to, ...restProps }) {
	return (
		<LogoLinkRouter to={to}>
			<Logo {...restProps} />
		</LogoLinkRouter>
	);
};

// Button Link
Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
	return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

// Text
Header.Text = function HeaderText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

// Dropdown
Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
	return <Dropdown {...restProps}>{children}</Dropdown>;
};

// TextLink
Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
	return <Link {...restProps}>{children}</Link>;
};

// PlayButton
Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
	return <PlayButton {...restProps}>{children}</PlayButton>;
};

// FeautureCallOut
Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }) {
	return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};
