import React from 'react';
import Layout from '../../../components/Layout';

export default function MedienHome() {
	return (
		<Layout>
			<div className="bg-zinc-700">
				<div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
					<div className="text-center">
						<p className="mt-1 text-4xl font-extrabold text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl">
							Alle Medien
						</p>
						<p className="max-w-xl mt-5 mx-auto text-xl text-gray-300">
							Bilder Videos und mehr, alles hier.
						</p>
					</div>
				</div>
			</div>
			<div className="bg-zinc-800 relative">
				<div
					aria-hidden="true"
					className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-zinc-700"
				/>
				<div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
						<a
							href="/medien/videos"
							className="relative h-56 rounded-lg shadow-sm flex items-center group"
						>
							<div className="absolute top-0 left-0 bottom-0 right-0">
								<img
									src="/images/th3.png?width=1202&height=676"
									alt=""
									className="rounded-lg w-full h-full object-cover"
								/>
							</div>
							<div className="m-auto z-50 inline-flex items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									className="w-16 h-16"
									viewBox="0 0 16 16"
								>
									<path
										fillRule="evenodd"
										d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z"
									/>
								</svg>
								<div className="duration-300 transition-all float-left m-0 group-hover:ml-7 opacity-0 group-hover:opacity-100 text-[0px] group-hover:text-2xl">
									Videos
								</div>
							</div>
						</a>
						<a
							href="/medien/bilder"
							className="relative h-56 rounded-lg shadow-sm flex items-center group"
						>
							<div className="absolute top-0 left-0 bottom-0 right-0">
								<img
									src="/images/th2.png?width=1202&height=676"
									alt=""
									className="rounded-lg w-full h-full object-cover"
								/>
							</div>
							<div className="m-auto z-50 inline-flex items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									className="w-16 h-16"
									viewBox="0 0 16 16"
								>
									<path d="M6.502 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
									<path d="M14 14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5V14zM4 1a1 1 0 0 0-1 1v10l2.224-2.224a.5.5 0 0 1 .61-.075L8 11l2.157-3.02a.5.5 0 0 1 .76-.063L13 10V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4z" />
								</svg>
								<div className="duration-300 transition-all float-left m-0 group-hover:ml-7 opacity-0 group-hover:opacity-100 text-[0px] group-hover:text-2xl">
									Bilder
								</div>
							</div>
						</a>
						<a
							href="/medien/musik"
							className="relative h-56 rounded-lg shadow-sm flex items-center group"
						>
							<div className="absolute top-0 left-0 bottom-0 right-0">
								<img
									src="/images/th4.png?width=1202&height=676"
									alt=""
									className="rounded-lg w-full h-full object-cover"
								/>
							</div>
							<div className="m-auto z-50 inline-flex items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									className="w-16 h-16"
									viewBox="0 0 16 16"
								>
									<path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z" />
									<path
										fillRule="evenodd"
										d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"
									/>
									<path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z" />
								</svg>
								<div className="duration-300 transition-all float-left m-0 group-hover:ml-7 opacity-0 group-hover:opacity-100 text-[0px] group-hover:text-2xl">
									Musik
								</div>
							</div>
						</a>
						<a
							target="_blank"
							href="https://www.youtube.com/channel/UCYbRGScasxuBqlbrJtIAarg"
							className="relative h-56 rounded-lg shadow-sm flex items-center group"
						>
							<div className="absolute top-0 left-0 bottom-0 right-0">
								<img
									src="/images/th5.png?width=1202&height=676"
									alt=""
									className="rounded-lg w-full h-full object-cover"
								/>
							</div>
							<div className="m-auto z-50 inline-flex items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									className="w-16 h-16"
									viewBox="0 0 16 16"
								>
									<path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
								</svg>
								<div className="duration-300 transition-all inline-flex items-center float-left m-0 group-hover:ml-7 opacity-0 group-hover:opacity-100 text-[0px] group-hover:text-2xl">
									YouTube
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</Layout>
	);
}
