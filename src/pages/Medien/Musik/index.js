import React from 'react'
import Layout from '../../../components/Layout';

export default function MedienMusic() {
  return (
		<Layout>
			<div
				style={{ display: 'none' }}
				id="media"
				className="z-[100] fixed bottom-0 left-0"
			>
				<div className="ml-12 mb-8 max-w-sm sm:max-w-lg w-full bg-gradient-to-t from-zinc-900 to-red-900 rounded overflow-hidden shadow">
					<div className="px-4 py-5 sm:p-6">
						<div className="sm:flex">
							<div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
								<img
									id="audioImage"
									src
									alt=""
									className="h-16 w-full sm:w-16 object-cover rounded-sm shadow"
								/>
							</div>
							<div>
								<h4
									className="text-lg font-bold"
									id="musicTitle"
								>
									Carpte Nocten
								</h4>
								<p className="mt-1" id="musicFoot">
									Linphator — 2:30
								</p>
							</div>
							<div className="sm:ml-auto flex-shrink-0 w-20 flex sm:flex-col">
								<div className="ml-auto my-auto sm:my-0">
									<button
										onclick="changePlayState()"
										className="text-white hover:text-gray-300"
									>
										<svg
											id="playingIcon"
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											className="w-6 h-6"
											viewBox="0 0 16 16"
										>
											<path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
										</svg>
									</button>
								</div>
								<div className="sm:mt-auto w-20 sm:w-auto my-auto sm:my-0">
									<div className="relative my-auto w-full bg-zinc-600/50 rounded-full h-1">
										<div
											id="audioVisual"
											className="h-full bg-red-700 rounded-full"
											style={{ width: '20%' }}
										/>
										<input
											id="audioSlider"
											onchange="updateAudio(event.target.value)"
											min={0}
											defaultValue={20}
											max={100}
											className="absolute w-full mb-auto -translate-y-0.5 custom-slider rounded-full h-0"
											type="range"
											name
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="px-4 pb-4 sm:px-6">
						<div className="grid grid-cols-12 gap-4">
							<div className="col-span-1" id="timeRun">
								1:30
							</div>
							<div className="col-span-10 inline-flex flex-col relative">
								<div className="relative my-auto w-full bg-zinc-600/50 rounded-full h-1">
									<div
										id="progressVisual"
										className="h-full bg-red-700 rounded-full"
										style={{ width: '20%' }}
									/>
									<input
										min={0}
										max={100}
										onmousedown="setWaitForMouse(true)"
										onmouseup="setWaitForMouse(false)"
										onchange="updateSliderManual(event.target.value);"
										id="progressBar"
										className="absolute w-full mb-auto -translate-y-0.5 custom-slider rounded-full h-0"
										type="range"
										name
									/>
								</div>
							</div>
							<div className="col-span-1" id="timeRemain">
								2:30
							</div>
						</div>
					</div>
				</div>
			</div>
			<main>
				<div
					className="bg-zinc-700 bg-cover bg-center"
					style={{
						backgroundImage:
							'url("/images/th4.png?width=1202&height=676")',
					}}
				>
					<div className="w-full h-full bg-gradient-to-b from-zinc-700/50 via-zinc-700/50 to-zinc-800">
						<div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
							<div className="text-center">
								<p className="mt-1 text-4xl font-extrabold text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl">
									Musik
								</p>
								<p className="max-w-xl mt-5 mx-auto text-xl text-gray-300 underline font-bold">
									<a href="index.html">
										Zurück zu allen medien
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-zinc-800 relative">
					<div className="overflow-hidden">
						<div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
							<div
								id="songs"
								className="lg:px-64 mb-12 flex flex-col gap-5"
							>
								<div
									className="my-6 flex w-full"
									id="song-spinner"
								>
									<div className="m-auto">
										<div className="animate-spin rounded-full border-l-2 border-t-2 w-8 h-8" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</Layout>
  );
}
