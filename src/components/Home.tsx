"use client";
import HomeFooter from "./HomeFooter";
import HomeHeader from "./HomeHeader";
import HomeInfo from "./HomeInfo";
import { useState } from "react";
export default function HomePage() {
	const [useSection, setSection] = useState("0");
	// nav list component
	const navListItems = [
		{
			label: "Quienes somos",
		},
		{
			label: "Contacto",
		},
	];

	return (
		<div className="bg-[#063457] relative overflow-hidden">
			<HomeHeader navList={navListItems} setSection={setSection} />

			<HomeInfo useSection={useSection} navList={navListItems} />

			<HomeFooter />
		</div>
	);
}
