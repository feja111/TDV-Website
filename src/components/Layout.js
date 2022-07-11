import React from 'react';
import Footer from './Footer';
import Header from './Header';

export default function Layout(props) {
	return (
		<div style={{ minHeight: ' 100vh' }} className="bg-zinc-800 text-white">
			<Header />
			{props.children}
			<Footer />
		</div>
	);
}
