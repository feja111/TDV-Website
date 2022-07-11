import React from 'react'
import Layout from '../../../components/Layout';

export default function MedienPictures() {
  return (
		<Layout>
			<div
				className="bg-zinc-700 bg-cover bg-center"
				style={{
					backgroundImage:
						'url("/images/th2.png")',
				}}
			>
				<div className="w-full h-full bg-gradient-to-b from-zinc-700/50 via-zinc-700/50 to-zinc-800">
					<div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
						<div className="text-center z-100">
							<p className="mt-1 text-4xl font-extrabold text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl">
								Bilder
							</p>
							<p className="max-w-xl mt-5 mx-auto text-xl text-gray-300 underline font-bold">
								<a href="index.html">Zurück zu allen medien</a>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div
				onclick="closeImg();"
				style={{ display: 'none' }}
				id="openImg"
				className="bg-black/50 fixed top-0 left-0 w-full h-full overflow-hidden z-[100] flex"
			>
				<div className="m-auto">
					<div className="flex mb-3.5">
						<butto
							type="button"
							className="cursor-pointer duration-200 ml-auto inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-zinc-600 hover:bg-zinc-700 focus:outline-none"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								className="h-5 w-5"
								viewBox="0 0 16 16"
							>
								<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
							</svg>
						</butto>
					</div>
					<div className="max-w-6xl">
						<img
							id="openImgTag"
							src="https://tdv.minecraftmusical.com/textures/th3.png?width=1202&height=676"
							alt=""
							className="w-full"
						/>
					</div>
				</div>
			</div>
			<div className="bg-zinc-800 relative">
				<div className="overflow-hidden">
					<div
						className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 grid grid-cols-4 gap-4"
						id="images"
					>
						<div
							className="my-6 flex w-full col-span-4"
							id="image-spinner"
						>
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
