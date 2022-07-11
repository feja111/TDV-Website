import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { ParallaxProvider } from 'react-scroll-parallax';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/Home';
import MedienPictures from './pages/Medien/Bilder';
import MedienHome from './pages/Medien/Home';
import MedienMusic from './pages/Medien/Musik';
import MedienVideos from './pages/Medien/Videos';
import TeamPage from './pages/Team';

const App = () => (
	<>
		<ParallaxProvider>
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/team" exact component={TeamPage} />
					<Route path="/medien" exact component={MedienHome} />
					<Route
						path="/medien/bilder"
						exact
						component={MedienPictures}
					/>
					<Route path="/medien/musik" exact component={MedienMusic} />
					<Route
						path="/medien/videos"
						exact
						component={MedienVideos}
					/>
					<Route component={() => <h1>404</h1>} />
				</Switch>
			</BrowserRouter>
		</ParallaxProvider>
		{/* ggf. entfernen */}
		<CookieConsent
			location="bottom"
			cookieName="cookie_consent"
			style={{ background: '#27272a' }}
			//buttonClasses="bg-green-200"
			buttonText="Ich bin einverstanden"
			//declineButtonClasses="bg-red-200"
			declineButtonText="Ich bin nicht einverstanden"
			enableDeclineButton
			expires={150}
		>
			<span className="font-medium">
				Diese Website verwendet Cookies.
			</span>{' '}
			<span className="text-sm">
				Es werden nur für die Website notwendige Cookies gespeichert.
			</span>
		</CookieConsent>
	</>
);

export default App;


