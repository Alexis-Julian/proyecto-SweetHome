import Image from "next/image";

export default function Home() {
	const sizeImg = 300;
	return (
		<div className="h-full w-full  layoutFirstPage ">
			<div className="bg-[#063457b7]">
				<Image
					className=""
					src="/svg/palm.svg"
					width={200}
					height={200}
					alt=""
				/>
			</div>
			<div className="bg-[#063457] ">
				<header className=" w-full flex  justify-center  ">
					<Image
						src="/svg/sweethomelogo.svg"
						width={sizeImg}
						height={sizeImg}
						alt=""
					/>
				</header>
				<main></main>
				<footer></footer>
			</div>
			<div className="bg-[#063457b7]"></div>
		</div>
	);
}
