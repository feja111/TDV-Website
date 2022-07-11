import React from 'react'
import Layout from '../../../components/Layout';

export default function MedienVideos() {
  return (
		<Layout>
			<div
				className="bg-zinc-700 bg-cover bg-center"
				style={{
					backgroundImage:
						'url("https://tdv.minecraftmusical.com/textures/th3.png?width=1202&height=676")',
				}}
			>
				<div className="w-full h-full bg-gradient-to-b from-zinc-700/50 via-zinc-700/50 to-zinc-800">
					<div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
						<div className="text-center">
							<p className="mt-1 text-4xl font-extrabold text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl">
								Videos
							</p>
							<p className="max-w-xl mt-5 mx-auto text-xl text-gray-300 underline font-bold">
								<a href="index.html">Zurück zu allen medien</a>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-zinc-800 relative">
				<div className="overflow-hidden">
					<div
						id="videos"
						className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
					>
						<div className="my-6 flex w-full" id="video-spinner">
							<div className="m-auto">
								<div className="animate-spin rounded-full border-l-2 border-t-2 w-8 h-8" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
  );
}
