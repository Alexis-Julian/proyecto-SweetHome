export default function BorderMain({ rotate }: { rotate: boolean }) {
	return (
		<div
			className={`relative  border-white-500 ${
				rotate ? "border-l-8" : "border-r-8"
			}`}
		>
			<div className="absolute bg-cyan-600 blur-sm opacity-80 h-full w-full z-50  "></div>
			<div
				className={`bg-[url('/image/palm.jpg')] absolute h-full blur-sm  w-full   ${
					rotate && "rotatey"
				}`}
			></div>
		</div>
	);
}
