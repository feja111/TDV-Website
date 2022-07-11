import React from 'react';
import Layout from '../../components/Layout';

export default function TeamPage() {
	return (
		<Layout>
			<div className="bg-zinc-700">
				<div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
					<div className="text-center">
						<p className="mt-1 text-4xl font-extrabold text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl">
							Das gesamte Team
						</p>
						<p className="max-w-xl mt-5 mx-auto text-xl text-gray-300">
							Die Menschen die für all das Verantwortlich sind.
						</p>
					</div>
				</div>
			</div>
			<div className="bg-zinc-800 relative">
				<div
					aria-hidden="true"
					className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-zinc-700"
				/>
				<div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 group">
					<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
						<div className="relative flex bg-gradient-to-r from-red-800 to-red-900 rounded shadow">
							<div className="sm:flex">
								<div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
									<img
										src="https://cdn.discordapp.com/attachments/857590621724082176/858693447514718228/unknown.png"
										alt=""
										className="object-cover max-h-36 w-full h-full sm:max-h-full overflow-hidden sm:w-32 rounded-l"
									/>
								</div>
								<div className="py-3 px-5 lg:px-2">
									<div className="flex">
										<div>
											<h4 className="text-2xl font-bold">
												Linphator
											</h4>
											<h4 className="text-lg font-semibold">
												— Projektleitung
											</h4>
										</div>
										<div className="flex items-center h-min space-x-4 ml-auto pt-2 pr-5">
											<a
												href="/"
												className="text-gray-200 transition-colors duration-100 hover:text-gray-400"
											>
												<svg
													viewBox="0 0 24 24"
													fill="currentColor"
													className="h-5"
												>
													<path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
												</svg>
											</a>
											<a
												href="/"
												className="text-gray-200 transition-colors duration-100 hover:text-gray-400"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="currentColor"
													className="h-6"
													viewBox="0 0 16 16"
												>
													<path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
												</svg>
											</a>
											<a
												href="/"
												className="text-gray-200 transition-colors duration-100 hover:text-gray-400"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="currentColor"
													className="h-5"
													viewBox="0 0 16 16"
												>
													<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
												</svg>
											</a>
										</div>
									</div>
									<p className="mt-1.5">
										Lorem ipsum dolor sit, amet consectetur
										adipisicing elit. Perspiciatis
										aspernatur explicabo aliquam! Nam magni
										magnam nostrum, numquam doloremque quo
										eum? Lorem ipsum, dolor.
									</p>
								</div>
							</div>
						</div>
						<div className="relative flex bg-gradient-to-r from-red-800 to-red-900 rounded shadow">
							<div className="sm:flex">
								<div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
									<img
										src="/images/T1.png"
										alt=""
										className="object-cover max-h-36 w-full h-full sm:max-h-full overflow-hidden sm:w-32 rounded-l"
									/>
								</div>
								<div className="py-3 px-5 lg:px-2">
									<div className="flex">
										<div>
											<h4 className="text-2xl font-bold">
												Linphator
											</h4>
											<h4 className="text-lg font-semibold">
												— Projektleitung
											</h4>
										</div>
										<div className="flex items-center h-min space-x-4 ml-auto pt-2 pr-5">
											<a
												href="/"
												className="text-gray-200 transition-colors duration-100 hover:text-gray-400"
											>
												<svg
													viewBox="0 0 24 24"
													fill="currentColor"
													className="h-5"
												>
													<path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
												</svg>
											</a>
											<a
												href="/"
												className="text-gray-200 transition-colors duration-100 hover:text-gray-400"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="currentColor"
													className="h-6"
													viewBox="0 0 16 16"
												>
													<path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
												</svg>
											</a>
											<a
												href="/"
												className="text-gray-200 transition-colors duration-100 hover:text-gray-400"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="currentColor"
													className="h-5"
													viewBox="0 0 16 16"
												>
													<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
												</svg>
											</a>
										</div>
									</div>
									<p className="mt-1.5">
										Lorem ipsum dolor sit, amet consectetur
										adipisicing elit. Perspiciatis
										aspernatur explicabo aliquam! Nam magni
										magnam nostrum, numquam doloremque quo
										eum? Lorem ipsum, dolor.
									</p>
								</div>
							</div>
						</div>
						<div className="relative flex bg-zinc-600 rounded shadow">
							<div className="sm:flex">
								<div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
									<img
										src="https://cdn.discordapp.com/attachments/857590621724082176/858693447514718228/unknown.png"
										alt=""
										className="object-cover max-h-36 w-full h-full sm:max-h-full overflow-hidden sm:w-32 rounded-l"
									/>
								</div>
								<div className="py-3 px-5 lg:px-2">
									<div className="flex">
										<div>
											<h4 className="text-2xl font-bold">
												Linphator
											</h4>
											<h4 className="text-lg font-semibold">
												— Projektleitung
											</h4>
										</div>
										<div className="flex items-center h-min space-x-4 ml-auto pt-2 pr-5">
											<a
												href="/"
												className="text-gray-200 transition-colors duration-100 hover:text-gray-400"
											>
												<svg
													viewBox="0 0 24 24"
													fill="currentColor"
													className="h-5"
												>
													<path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
												</svg>
											</a>
											<a
												href="/"
												className="text-gray-200 transition-colors duration-100 hover:text-gray-400"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="currentColor"
													className="h-6"
													viewBox="0 0 16 16"
												>
													<path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
												</svg>
											</a>
											<a
												href="/"
												className="text-gray-200 transition-colors duration-100 hover:text-gray-400"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="currentColor"
													className="h-5"
													viewBox="0 0 16 16"
												>
													<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
												</svg>
											</a>
										</div>
									</div>
									<p className="mt-1.5">
										Lorem ipsum dolor sit, amet consectetur
										adipisicing elit. Perspiciatis
										aspernatur explicabo aliquam! Nam magni
										magnam nostrum, numquam doloremque quo
										eum? Lorem ipsum, dolor.
									</p>
								</div>
							</div>
						</div>
						<div className="relative flex bg-zinc-600 rounded shadow">
							<div className="sm:flex">
								<div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
									<img
										src="https://cdn.discordapp.com/attachments/857590621724082176/858693447514718228/unknown.png"
										alt=""
										className="object-cover max-h-36 w-full h-full sm:max-h-full overflow-hidden sm:w-32 rounded-l"
									/>
								</div>
								<div className="py-3 px-5 lg:px-2">
									<div className="flex">
										<div>
											<h4 className="text-2xl font-bold">
												Linphator
											</h4>
											<h4 className="text-lg font-semibold">
												— Projektleitung
											</h4>
										</div>
										<div className="flex items-center h-min space-x-4 ml-auto pt-2 pr-5">
											<a
												href="/"
												className="text-gray-200 transition-colors duration-100 hover:text-gray-400"
											>
												<svg
													viewBox="0 0 24 24"
													fill="currentColor"
													className="h-5"
												>
													<path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
												</svg>
											</a>
											<a
												href="/"
												className="text-gray-200 transition-colors duration-100 hover:text-gray-400"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="currentColor"
													className="h-6"
													viewBox="0 0 16 16"
												>
													<path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
												</svg>
											</a>
											<a
												href="/"
												className="text-gray-200 transition-colors duration-100 hover:text-gray-400"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="currentColor"
													className="h-5"
													viewBox="0 0 16 16"
												>
													<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
												</svg>
											</a>
										</div>
									</div>
									<p className="mt-1.5">
										Lorem ipsum dolor sit, amet consectetur
										adipisicing elit. Perspiciatis
										aspernatur explicabo aliquam! Nam magni
										magnam nostrum, numquam doloremque quo
										eum? Lorem ipsum, dolor.
									</p>
								</div>
							</div>
						</div>
						<div className="relative flex col-span-2">
							<div className="sm:flex">
								<div className="flex-shrink-0 sm:mr-4 my-auto">
									<img
										src="https://cdn.discordapp.com/attachments/857590621724082176/858693447514718228/unknown.png"
										alt=""
										className="object-cover h-24 w-24 overflow-hidden rounded-full"
									/>
								</div>
								<div className="py-3 px-5 lg:px-2">
									<div className="flex">
										<div className="flex">
											<h4 className="text-2xl font-semibold">
												Linphator
											</h4>
											<h4 className="my-auto text-lg font-medium ml-4">
												Projektleitung
											</h4>
										</div>
										<div className="flex items-center h-min space-x-4 ml-auto my-auto pr-5">
											<a
												href="/"
												className="text-gray-200 transition-colors duration-100 hover:text-gray-400"
											>
												<svg
													viewBox="0 0 24 24"
													fill="currentColor"
													className="h-5"
												>
													<path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
												</svg>
											</a>
											<a
												href="/"
												className="text-gray-200 transition-colors duration-100 hover:text-gray-400"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="currentColor"
													className="h-6"
													viewBox="0 0 16 16"
												>
													<path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
												</svg>
											</a>
											<a
												href="/"
												className="text-gray-200 transition-colors duration-100 hover:text-gray-400"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="currentColor"
													className="h-5"
													viewBox="0 0 16 16"
												>
													<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
												</svg>
											</a>
										</div>
									</div>
									<p className="mt-1.5">
										Lorem ipsum dolor sit, amet consectetur
										adipisicing elit. Perspiciatis
										aspernatur explicabo aliquam! Nam magni
										magnam nostrum, numquam doloremque quo
										eum? Lorem ipsum, dolor.
									</p>
								</div>
							</div>
						</div>
						<div className="relative flex col-span-2">
							<div className>
								<div className="py-3 px-5 lg:px-2">
									<div className="flex">
										<div className="flex">
											<h4 className="text-2xl font-semibold">
												Linphator
											</h4>
											<h4 className="my-auto text-lg font-medium ml-4">
												Projektleitung
											</h4>
										</div>
										<div className="flex items-center h-min space-x-4 ml-auto my-auto pr-5">
											<a
												href="/"
												className="text-gray-200 transition-colors duration-100 hover:text-gray-400"
											>
												<svg
													viewBox="0 0 24 24"
													fill="currentColor"
													className="h-5"
												>
													<path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
												</svg>
											</a>
											<a
												href="/"
												className="text-gray-200 transition-colors duration-100 hover:text-gray-400"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="currentColor"
													className="h-6"
													viewBox="0 0 16 16"
												>
													<path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
												</svg>
											</a>
											<a
												href="/"
												className="text-gray-200 transition-colors duration-100 hover:text-gray-400"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="currentColor"
													className="h-5"
													viewBox="0 0 16 16"
												>
													<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
												</svg>
											</a>
										</div>
									</div>
									<p className="mt-1.5">
										Lorem ipsum dolor sit, amet consectetur
										adipisicing elit. Perspiciatis
										aspernatur explicabo aliquam! Nam magni
										magnam nostrum, numquam doloremque quo
										eum? Lorem ipsum, dolor.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/*
          <div class="relative max-w-4xl mx-auto sm:px-6 sm:py-24 lg:max-w-5xl lg:px-8">
              <div class="absolute inset-0 flex items-center" aria-hidden="true">
                  <div class="w-full border-t border-zinc-700"></div>
              </div>
              <div class="relative flex justify-center">
                  <span class="px-2 bg-zinc-800 text-sm text-gray-200">
                      Und mehr...
                  </span>
              </div>
          </div>
          */}
			</div>
		</Layout>
	);
}
