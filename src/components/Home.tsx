import Image from "next/image";
export default function HomePage() {
	const sizeImg = 300;

	return (
		<div className="bg-[#063457]  ">
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
	);
}
