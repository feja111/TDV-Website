import React from 'react';

export default function Footer() {
	return (
		<footer
			className="bg-zinc-800 border-t-2 border-t-zinc-600"
			aria-labelledby="footer-heading"
		>
			<h2 id="footer-heading" className="sr-only">
				Fußzeile
			</h2>
			<div className="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:pt-24 lg:px-8">
				<div className="xl:grid xl:grid-cols-3 xl:gap-8">
					<div className="grid grid-cols-2 gap-8 xl:col-span-2">
						<div className="md:grid md:grid-cols-2 md:gap-8">
							<div>
								<h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
									Das Projekt
								</h3>
								<ul className="mt-4 space-y-4">
									<li>
										<a
											href="/"
											className="text-base text-gray-300 hover:text-gray-400"
										>
											Startseite
										</a>
									</li>
									<li>
										<a
											href="/progreammheft"
											className="text-base text-gray-300 hover:text-gray-400"
										>
											Programmheft
										</a>
									</li>
									<li>
										<a
											href="/premiere"
											className="text-base text-gray-300 hover:text-gray-400"
										>
											Premiere
										</a>
									</li>
									<li>
										{/*href="/bewerbung.html"*/}
										{/*text-gray-300 hover:text-gray-400*/}
										<a
											aria-disabled="true"
											href="/bewerben"
											className="text-base text-zinc-500 cursor-not-allowed"
										>
											Bewerben
										</a>
									</li>
								</ul>
							</div>
							<div className="mt-12 md:mt-0">
								<h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
									Medien
								</h3>
								<ul role="list" className="mt-4 space-y-4">
									<li>
										<a
											href="/medien/"
											className="text-base text-gray-300 hover:text-gray-400"
										>
											Alle Medien
										</a>
									</li>
									<li>
										<a
											href="/medien/videos"
											className="text-base text-gray-300 hover:text-gray-400"
										>
											Videos
										</a>
									</li>
									<li>
										<a
											href="/medien/bilder"
											className="text-base text-gray-300 hover:text-gray-400"
										>
											Bilder
										</a>
									</li>
									<li>
										<a
											href="/medien/musik"
											className="text-base text-gray-300 hover:text-gray-400"
										>
											Musik
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="md:grid md:grid-cols-2 md:gap-8">
							<div>
								<h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
									Team
								</h3>
								<ul className="mt-4 space-y-4">
									<li>
										<a
											href="/team"
											className="text-base text-gray-300 hover:text-gray-400"
										>
											Gesamtes Team
										</a>
									</li>
									<li>
										<a
											href="/team"
											className="text-base text-gray-300 hover:text-gray-400"
										>
											Linphator
										</a>
									</li>
									<li>
										<a
											href="/team"
											className="text-base text-gray-300 hover:text-gray-400"
										>
											Militalex
										</a>
									</li>
								</ul>
							</div>
							<div className="mt-12 md:mt-0">
								<h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
									Rechtliches
								</h3>
								<ul className="mt-4 space-y-4">
									<li>
										<a
											href="/impressum"
											className="text-base text-gray-300 hover:text-gray-400"
										>
											Impressum
										</a>
									</li>
									<li>
										<a
											href="/datenschutz"
											className="text-base text-gray-300 hover:text-gray-400"
										>
											Datenschutz
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="mt-12 xl:mt-0">
						<h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
							Discord
						</h3>
						<p className="mt-4 text-base text-gray-300">
							Werde Teil unser ständig wachsenden Community, um
							keine Kleinigkeit mehr zu verpassen.
						</p>
						<a
							href="https://discord.gg/HM5AbccMzk"
							className="mt-8 flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#5865F2] bg-opacity-80 hover:bg-opacity-90 sm:px-8"
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
				<div className="mt-12 border-t border-gray-500 pt-8 md:flex md:items-center md:justify-between lg:mt-16">
					<div className="flex space-x-6 md:order-2">
						<div className="text-zinc-400">v0.0.1 DEV_BUILD</div>
						<a
							href="https://discord.gg/HM5AbccMzk"
							className="text-gray-400 hover:text-gray-500"
						>
							<span className="sr-only">Discord</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								className="h-6 w-6"
								viewBox="0 0 16 16"
							>
								<path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
							</svg>
						</a>
						<a
							href="https://www.youtube.com/channel/UCKB14NibRymqBTfld5SBofg"
							className="text-gray-400 hover:text-gray-500"
						>
							<span className="sr-only">YouTube</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								className="h-6 w-6"
								viewBox="0 0 16 16"
							>
								<path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
							</svg>
						</a>
					</div>
					<p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
						© {new Date().getFullYear()} tdv.minecraftmusical.com (TDV
						in Minecraft) — Alle Rechte vorbehalten
					</p>
				</div>
			</div>
		</footer>
	);
}
