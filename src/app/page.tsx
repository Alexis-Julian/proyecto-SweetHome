import Image from "next/image";
import BorderMain from "@/components/BorderMain";
import HomePage from "@/components/Home";

export default function Home() {
	return (
		<div className="h-full w-full  layoutFirstPage ">
			<BorderMain rotate={false} /> {/* Bordes principales de la pagina */}
			<HomePage />
			<BorderMain rotate={true} /> {/* Bordes principales de la pagina */}
		</div>
	);
}
