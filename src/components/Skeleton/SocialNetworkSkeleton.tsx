export default function SocialNetworkSkeleton() {
	return (
		<div role="status" className="animate-pulse">
			<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
			<div className="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
			<div className="flex items-center justify-center mt-4 gap-3">
				<button className="w-8 h-8 rounded-full bg-red-500 ">T</button>
				<button className="w-8 h-8 rounded-full bg-red-500 ">E</button>
				<button className="w-8 h-8 rounded-full bg-red-500 ">S</button>
				<button className="w-8 h-8 rounded-full bg-red-500 ">T</button>
			</div>
		</div>
	);
}
