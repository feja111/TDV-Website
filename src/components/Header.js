import React from 'react';

export default function Header() {
	return (
		<header className="sticky top-0 z-[55]">
			<div className="relative bg-zinc-800">
				<div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
					<div className="flex justify-start items-center lg:w-0 lg:flex-1">
						<a href="/">
							<span className="sr-only">Tanz der Vampire</span>
							<img
								className="h-8 w-auto sm:h-10"
								src="/images/TDV5.png"
								alt=""
							/>
						</a>
						<a
							href="/"
							className="ml-8 whitespace-nowrap text-base font-medium text-gray-100 hover:text-gray-300"
						>
							Startseite
						</a>
					</div>
					<div className="-mr-2 -my-2 md:hidden">
						<button
							onClick="toggleMobileMenu()"
							type="button"
							className="bg-zinc-600 rounded-md p-2 inline-flex items-center justify-center text-zinc-400 hover:text-zinc-500 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
							aria-expanded="false"
						>
							<span className="sr-only">Open menu</span>
							<svg
								className="h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>
					</div>
					<div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
						<a
							href="/medien/"
							className="whitespace-nowrap text-base font-medium text-gray-100 hover:text-gray-300"
						>
							Medien
						</a>
						<a
							href="/team"
							className="ml-8 whitespace-nowrap text-base font-medium text-gray-100 hover:text-gray-300"
						>
							Team
						</a>
						<a
							href="/programmheft"
							className="ml-8 whitespace-nowrap text-base font-medium text-gray-100 hover:text-gray-300"
						>
							Programmheft
						</a>
						<a
							href="/premiere"
							className="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-red-600 to-red-800 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-red-700 hover:to-red-900"
						>
							Premiere
						</a>
						<a
							href="/programmheft"
							className="ml-8 whitespace-nowrap text-base font-medium text-gray-100 hover:text-gray-300 group flex"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								className="h-6 w-6 "
								viewBox="0 0 16 16"
							>
								<path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
							</svg>
							<span className="w-0 opacity-0 group-hover:opacity-100 group-hover:w-12 my-auto ml-0 group-hover:ml-2 duration-200">
								Discord
							</span>
						</a>
						<a
							href="/programmheft"
							className="ml-8 whitespace-nowrap text-base font-medium text-gray-100 hover:text-gray-300 group flex"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								className="h-6 w-6"
								viewBox="0 0 16 16"
							>
								<path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
							</svg>
							<span className="w-0 opacity-0 group-hover:opacity-100 group-hover:w-12 my-auto ml-0 group-hover:ml-2 duration-200">
								YouTube
							</span>
						</a>
					</div>
				</div>
				<div
					hidden
					id="mobile-menu"
					className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right"
				>
					<div className="rounded-lg shadow-lg ring-2 ring-zinc-900 bg-zinc-800">
						<div className="pt-5 pb-6 px-5">
							<div className="flex items-center justify-between">
								<div>
									<img
										className="h-8 w-auto"
										src="https://tdv.minecraftmusical.com/textures/TDV5.png"
										alt=""
									/>
								</div>
								<div className="-mr-2">
									<button
										onClick="toggleMobileMenu()"
										type="button"
										className="bg-zinc-600 rounded-md p-2 inline-flex items-center justify-center text-zinc-400 hover:text-zinc-500 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
									>
										<span className="sr-only">
											Close menu
										</span>
										<svg
											className="h-6 w-6"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											aria-hidden="true"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M6 18L18 6M6 6l12 12"
											/>
										</svg>
									</button>
								</div>
							</div>
						</div>
						<div className="py-6 px-5">
							<div className="pb-6 grid grid-cols-2 gap-4">
								<a
									href="/"
									className="text-base font-medium text-gray-200 hover:text-gray-300"
								>
									Startseite
								</a>
								<a
									href="/medien/"
									className="text-base font-medium text-gray-200 hover:text-gray-300"
								>
									Medien
								</a>
								<a
									href="/team"
									className="text-base font-medium text-gray-200 hover:text-gray-300"
								>
									Team
								</a>
								<a
									href="/programmheft"
									className="text-base font-medium text-gray-200 hover:text-gray-300"
								>
									Programmheft
								</a>
								<a
									href="https://discord.gg/HM5AbccMzk"
									target="_blank"
									rel="noopener noreferrer"
									className="text-base font-medium text-gray-200 hover:text-gray-300"
								>
									Discord
								</a>
							</div>
							<div className="mt-6">
								<a
									href="/premiere"
									className="w-full flex items-center justify-center bg-gradient-to-r from-red-600 to-red-800 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-red-700 hover:to-red-900"
								>
									Premiere
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
