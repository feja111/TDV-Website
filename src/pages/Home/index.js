import { useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout from '../../components/Layout';

export function HomePage() {
	return (
		<Layout>
			<main>
				<div className="relative">
					<div className="absolute inset-x-0 bottom-0 h-1/2 bg-zinc-700" />
					<div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
						<div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
							<div className="absolute inset-0">
								<img
									className="h-full w-full object-cover blur-sm"
									src="/images/th1.png?width=928&height=522"
									alt="People working on laptops"
								/>
								<div className="absolute inset-0 bg-gradient-to-r from-red-800/40 to-red-700/40 mix-blend-multiply" />
							</div>
							<div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
								<h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
									<span className="block text-white">
										Ein Musical in Minecraft
									</span>
								</h1>
								<p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
									Das ultimative Theater Erlebnis jetzt auch
									in Minecraft
								</p>
								<div className="mt-24 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
									<div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
										<a
											href="#scroll-down"
											className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-red-600 bg-white hover:bg-indigo-50 sm:px-8"
										>
											Mehr erfahren
										</a>
										<a
											href="#"
											className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#7289DA] bg-opacity-80 hover:bg-opacity-90 sm:px-8"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												className="w-5 h-5 mr-4"
												viewBox="0 0 16 16"
											>
												<path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
											</svg>
											Discord
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="bg-zinc-700">
					<div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
						<p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
							Ankündigungen
						</p>
						<div className="mt-6">
							<div class="flex justify-center col-span-3">
								<div className="flex flex-col gap-2 max-w-xs w-full mr-4">
									<button className="bg-gray-100/[15%] text-left duration-150 ring-inset ring-2 ring-gray-200 rounded-md px-5 py-3">
										Neuigkeit 1
									</button>
									<button className="bg-gray-100/10 text-left duration-150 ring-inset hover:ring-2 ring-gray-200 rounded-md px-5 py-3">
										Neuigkeit 2
									</button>
								</div>
								<button class="bg-zinc-600 hover:bg-zinc-600/50 hover:ring-1 ring-gray-500 transition-all duration-200 ring-inset w-full overflow-hidden shadow rounded-lg flex flex-col">
									<div class="px-4 py-5 sm:p-6 w-full">
										<h2 class="text-2xl font-bold text-center">
											Neuigkeit 1
										</h2>
										<p class="mt-2 text-justify">
											Lorem ipsum dolor sit amet
											consectetur adipisicing elit. Ea,
											beatae minima voluptatum, numquam
											quae sint illum porro iusto dolore,
											esse ipsum! Laborum saepe ea quos
											repellat perferendis neque illo
											praesentium.
										</p>
									</div>
									<div class="px-4 py-4 sm:px-6 flex mt-auto w-full">
										<span class="mt-auto text-sm text-gray-300 font-medium">
											1.1.2001
										</span>
										<div class="ml-auto inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white focus:outline-none">
											Mehr Infos
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												class="h-4 w-4 ml-2"
												viewBox="0 0 16 16"
											>
												<path
													fill-rule="evenodd"
													d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
												/>
											</svg>
										</div>
									</div>
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* TODO: make a suitable solution */}
				<div className="bg-zinc-700">
					<div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
						<p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
							Video
						</p>
						<div>
							<video className="w-full mt-4" controls>
								<source
									src="https://archive.org/download/Rick_Astley_Never_Gonna_Give_You_Up/Rick_Astley_Never_Gonna_Give_You_Up.mp4"
									type="video/mp4"
								/>
								Bitte aktualisiere deinen Browser.
							</video>
						</div>
					</div>
				</div>

				<div className="bg-zinc-800">
					<div className="relative pt-16 pb-24 overflow-hidden">
						<div
							aria-hidden="true"
							className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-zinc-700"
						/>

						<div className="relative">
							<Collapsable
								number={'1'}
								title={'Das Stück'}
								button={
									<a
										href="#"
										className="inline-flex bg-gradient-to-r from-red-600 to-red-800 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-red-700 hover:to-red-900"
									>
										Programmheft
									</a>
								}
								text={
									<>
										Das Musical "Tanz der Vampire" basiert
										auf dem gleichnamigen Roman von
										Regisseur Roman Polański. Gemeinsam mit
										der Hilfe von Jim Steinman (Musik) und
										Michael Kunze (Buch) wurde das Musical
										erstmals am 04. Oktober 1997 im Wiener
										Raimundtheater uraufgeführt. Das Musical
										wurde in insgesamt 12 Sprachen übersetzt
										und zählte bis jetzt ca. 9 Millionen
										Besucher.
										<br />
										Das oberste Ziel des Projektes ist es,
										das Wiener Kultmusical bestmöglich zu
										imitieren und zu zeigen was im
										Computerspiel „Minecraft“ alles möglich
										ist. Unsere Teammitglieder haben sich
										dazu entschieden große Teile ihrer
										Freizeit dem Projekt zu widmen um eine
										qualitativ hochwertige Nachahmung von
										"Tanz der Vampire" zu gewährleisten.
										Neugierig?
									</>
								}
								img={'/images/th3.png?width=1202&height=676'}
							/>
						</div>

						<div className="relative mt-24">
							<Collapsable
								number={'2'}
								title={'Die Theatermap'}
								button={
									<a
										href="theater.html"
										className="inline-flex bg-gradient-to-r from-red-600 to-red-800 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-red-700 hover:to-red-900"
									>
										Mehr Infos
									</a>
								}
								text={
									<>
										Das Theater ist unteranderem aus der
										Inspiration des Park Theaters Göggingen
										entstanden und soll dessen Wärme und
										Anmut widerspiegeln. Daher zieren große
										bunte Fenster den Theatersaal. Die
										Parkanlage um das Theater ist in einen
										symmetrischen barockischen Stil
										angelegt, welches durch moderne Einwürfe
										kontrastiert wird. Dies spiegelt das
										Hotel auf der gegenüber liegenden Seite
										ebenfalls wieder. Das ehemalige
										Stadtschloss wurde komplett entkernt und
										überrascht die Hotelgäste mit einem
										modernen Design. Besonders der Keller
										ist eine architektonische
										Meisterleistung, welche gekonnt durch
										seine Unregelmäßigkeiten in der
										Symmetrie im Raum kontrastiert und somit
										ein besonderes Gefühl erschafft.
										<br />
										Die Theatermap wurde von unseren
										<a
											target="_blank"
											href="https://www.youtube.com/channel/UCcVeRmfFOrAK5jalzP9yVAQ"
											style={{
												textDecoration: 'underline',
												fontWeight: 'bolder',
											}}
										>
											Chef Designer Vinctilus
										</a>
										konzipiert, der Mitglied des
										wohlbekannten Bauteams
										<a
											target="_blank"
											href="https://www.youtube.com/c/Darkenya/featured"
											style={{
												textDecoration: 'underline',
												fontWeight: 'bolder',
											}}
										>
											Darkenya
										</a>
										ist.
									</>
								}
								img={'/images/th2.png'}
							/>
						</div>

						<div className="relative mt-24">
							<Collapsable
								number={'3'}
								title={'Die Technik'}
								button={
									<a
										href="#"
										className="inline-flex bg-gradient-to-r from-red-600 to-red-800 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-red-700 hover:to-red-900"
									>
										Weitere Einblicke
									</a>
								}
								text={
									<>
										Die Technik, die hinter der Animation
										und den ganzen Ablauf der Show steckt,
										ist eine Verschmelzung aller in
										Minecraft verfügbaren Ressourcen.
										<br />
										Eigens für die Animation wurde eine
										auschließlich dafür bestimmte Engine
										programmiert (Datapack) mit Hilfe derer
										man Animationen mittels Keyframes und
										Commandblocktechniken umsetzen kann.
										<br />
										Die Technik verbindet Ressourcepack,
										Datapack, Redstone, Command- und
										Structureblock Techniken um das
										Unmögliche in Minecraft Vanilla (ohne
										Modifikationen) möglich zu machen.
										<br />
										Interesse wie man die Technik baut?
										<br />
										Dann schau auf
										<a
											target="_blank"
											rel="noopener noreferrer"
											href="https://www.youtube.com/channel/UCYbRGScasxuBqlbrJtIAarg"
											style={{
												textDecoration: 'underline',
												fontWeight: 'bolder',
											}}
										>
											MilitaerMilitz YouTube Kanal
										</a>
										vorbei
									</>
								}
								img={'/images/th4.png?width=1202&height=676'}
							/>
						</div>

						<div className="relative mt-24">
							<Collapsable
								number={'4'}
								title={'Die Musik'}
								button={
									<a
										href="#"
										className="inline-flex bg-gradient-to-r from-red-600 to-red-800 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-red-700 hover:to-red-900"
									>
										Musik anhören
									</a>
								}
								text={
									<>
										Die Musik, die ein wesentlicher
										Bestandteil eines jeden Musicals ist,
										ist komplett in Minecraft mithilfe von
										Notenblöcken und Commandblöcken
										parodiert worden.
										<br />
										Sie wird in aufwendiger Arbeit per Hand
										von wildparkmaedel und unter der Leitung
										von Linphator gebaut. Dabei stellt es
										eine große Herausforderung dar mit den
										begrenzten Möglichkeiten, die Minecraft
										bietet, das bestmögliche musikalische
										Erlebnis zu erzielen. <br />
										Auf
										<a
											target="_blank"
											rel="noopener noreferrer"
											href="https://www.youtube.com/channel/UCKB14NibRymqBTfld5SBofg"
											style={{
												textDecoration: 'underline',
												fontWeight: 'bolder',
											}}
										>
											Linphators YouTube Kanal
										</a>
										gibt es weitere Informationen zu der
										Musik. Außerdem kann die bereits gebaute
										Musik dort oder auf unserem
										<a
											target="_blank"
											rel="noopener noreferrer"
											href="https://discord.gg/HM5AbccMzk"
											style={{
												textDecoration: 'underline',
												fontWeight: 'bolder',
											}}
										>
											Discord Server
										</a>
										angehört werden.
									</>
								}
								img={'/images/th5.png'}
							/>
						</div>
					</div>
					{/*
      <div class="relative bg-red-900">
          <div class="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
              <div class="h-full w-full xl:grid xl:grid-cols-2">
                  <div class="h-full xl:relative xl:col-start-2">
                      <img class="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                          src="https://github.com/MilitaerMilitz/TDV-Website/raw/master/textures/th2_.png"
                          alt="People working on laptops">
                      <div aria-hidden="true"
                          class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-red-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r">
                      </div>
                      <div class="absolute w-full h-full flex">
                          <div class="m-auto w-0 h-0 xl:h-auto xl:w-auto opacity-100 hover:opacity-25 duration-200">
                              <img src="https://tdv.minecraftmusical.com/textures/TDV4.png" alt="TDV Logo" class="">
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div
              class="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
              <div class="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
                  <p class="mt-3 text-3xl font-extrabold text-white">
                      Ein komplettes Musical, in Minecraft
                  </p>
                  <p class="mt-5 text-lg text-gray-300">Mehrere Stunden voller Spannung, Musik und Emotionen.
                      Und das alles in dem Videospiel Minecraft. Es hat so viele Möglichkeiten und lässt Kreativen
                      Köpfen freien lauf. Dieses Projekt wurde von vielen Menschen auf dei Beine gestellt, welche fast
                      alle gerne mit Klötzchen spielen. <a href="team.html"
                          style="text-decoration: underline; font-weight: bolder;">
                          Sieh dir das Team an
                      </a>
                  </p>
                  <div class="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
                      <p>
                          <span class="block text-2xl font-bold text-white">2.000+</span>
                          <span class="mt-1 block text-base text-gray-300"><span
                                  class="font-medium text-white">Commandblöcke</span> wurden bereits platziert.</span>
                      </p>
    
                      <p>
                          <span class="block text-2xl font-bold text-white">9.000+</span>
                          <span class="mt-1 block text-base text-gray-300"><span
                                  class="font-medium text-white">Notenblöcke</span> wurden insgesamt gestellt.</span>
                      </p>
    
                      <p>
                          <span class="block text-2xl font-bold text-white">86%</span>
                          <span class="mt-1 block text-base text-gray-300"><span
                                  class="font-medium text-white">Positive Rückmeldung</span>
                                  von Spielern die das Stück gesehen haben.
                              </span>
                      </p>
    
                      <p>
                          <span class="block text-2xl font-bold text-white">220+</span>
                          <span class="mt-1 block text-base text-gray-300"><span class="font-medium text-white">Menschen</span>
                              sind bereits unserer Community beigetreten.
                              <a target="_blank" href="https://discord.gg/HM5AbccMzk" style="text-decoration: underline; font-weight: bolder;">
                                  Sei auch einer davon.
                              </a>
                          </span>
                      </p>
                  </div>
              </div>
          </div>
      </div>
    */}
				</div>
			</main>
		</Layout>
	);
}

function Collapsable(props) {
	let [revealed, setRevealed] = useState(false);
	return (
		<div className="lg:mx-auto lg:max-w-7xl lg:px-8 relative">
			<div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0 xl:w-[45%]">
				<div>
					<div className="flex gap-8">
						<span className="text-white h-12 w-12 font-extrabold rounded-md flex items-center justify-center bg-gradient-to-r from-red-500 to-red-700">
							{props.number}
						</span>
					</div>
					<div className="mt-6" id="sroll-down">
						<h2 className="text-3xl font-extrabold tracking-tight text-gray-100">
							{props.title}
						</h2>
						<p className="mt-4 text-lg text-gray-400">
							{props.text}
						</p>
						<div className="mt-6">
							{props.button}
							<button
								onClick={() => setRevealed(!revealed)}
								className="xl:hidden inline-flex bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:underline"
							>
								Bild einblenden
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="hidden xl:block">
				<div
					style={{ right: revealed ? '45%' : '98%' }}
					className="mt-12 duration-500 sm:mt-16 lg:mt-0 absolute top-0 h-full"
				>
					<div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full w-full">
						<img
							className="rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto w-full max-w-[88rem] object-cover overflow-hidden"
							src={props.img}
							alt=""
						/>
						<button
							className="asbolute top-0 bottom-0 pt-12"
							onClick={() => {
								setRevealed(!revealed);
							}}
						>
							<div
								// hover:-left-8  hover:rounded-r-sm
								className={
									(!revealed
										? 'hover:-left-8  hover:rounded-r-sm'
										: 'hover:-left-32') +
									' bg-red-700 rounded-l-sm absolute -left-8 w-8 group hover:w-32 duration-[250ms] h-8 flex place-content-center items-center'
								}
							>
								<span className="group-hover:opacity-100 group-hover:text-base text-[0px] opacity-0 duration-[250ms] text-white font-medium">
									{props.title}
								</span>
							</div>
						</button>
					</div>
				</div>
			</div>
			<div className="block xl:hidden w-full">
				<div
					style={{ height: '100%' }}
					className={
						(revealed ? 'hidden' : '') +
						' mt-16 absolute top-0 left-0 w-full px-4'
					}
				>
					<button
						onClick={() => setRevealed(!revealed)}
						className="h-full group w-full"
					>
						<img
							className="rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 h-full w-full overflow-hidden object-cover"
							src={props.img}
							alt=""
						/>
						<div className="absolute bottom-0 rounded-tr left-0 bg-zinc-800/50 px-3 pl-8 py-2 flex items-center text-white font-medium group-hover:underline">
							{props.title}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								className="h-4 w-4 ml-2 float-right"
								viewBox="0 0 16 16"
							>
								<path
									fillRule="evenodd"
									d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
								/>
							</svg>
						</div>
					</button>
				</div>
			</div>
		</div>
	);
}

