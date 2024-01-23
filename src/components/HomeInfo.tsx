"use client";
import { useEffect, useState } from "react";
import { CardPlacehoderSkeleton } from "./Skeleton/CardPlaceHolderSkeleton";
import ImagePlacehoderSkeleton from "./Skeleton/ImagePlacehoderSkeleton";

export default function HomeInfo({
	useSection,
	navList,
}: {
	useSection: string;
	navList: { label: string }[];
}) {
	const cantSection = navList.length;
	const totalHeight = cantSection * 100;

	const part = 100 / cantSection;
	const [useTest, setTest] = useState("");

	useEffect(() => {
		setTest(useSection);
	}, [useSection]); //No se porque tuve que poner un useState mas para que funcione

	return (
		<main className=" h-[80%] overflow-hidden">
			<div
				className={`transition-all `}
				style={{
					transform: `translateY(-${useTest}%)`,
					height: `${totalHeight}%`,
				}}
			>
				<div className={`h-[${part}%] `}>1</div>
				<div className={`h-[${part}%]`}>2</div>
			</div>
		</main>
	);
}
