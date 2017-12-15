import React, { Component } from 'react';

const Header = ({ scoreState }) => (
	<header>
		<h1>2048</h1>
		<h3>Score:{scoreState.score}</h3>
	</header>
);

export default Header;
