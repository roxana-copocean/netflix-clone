import React from 'react';
import { Container, Title, List, Item, Picture, Name } from './styles/profiles';

// Profile
export default function Profiles({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

// Profile Title
Profiles.Title = function ProfilesTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

// Profile List
Profiles.List = function ProfilesList({ children, ...restProps }) {
	return <List {...restProps}>{children}</List>;
};

// Profile User
Profiles.User = function ProfilesUser({ children, ...restProps }) {
	return <Item {...restProps}>{children}</Item>;
};

// Profile Picture
Profiles.Picture = function ProfilesPicture({ src, ...restProps }) {
	return <Picture {...restProps} src={src ? `images/users/${src}.png` : `/images/misc/loading.gif`} />;
};

// Profile Name
Profiles.Name = function ProfilesName({ children, ...restProps }) {
	return <Name {...restProps}>{children}</Name>;
};
