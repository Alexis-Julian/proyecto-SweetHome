"use client";
import Image from "next/image";
import React from "react";
import { Navbar, MenuItem } from "@material-tailwind/react";
import { Dispatch, SetStateAction } from "react";

function NavList({
	navList,
	setSection,
}: {
	navList: { label: string }[];
	setSection: Dispatch<SetStateAction<string>>;
}) {
	return (
		<ul className="mt-2 mb-4 w-full items-center justify-center flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
			{navList.map(({ label }, key) => {
				const item = key + 1;
				const sectionSelected = 100 / item;

				return (
					<div
						key={label}
						className="font-customtwo font-normal "
						onClick={() =>
							setSection(
								sectionSelected == 100 ? String(0) : String(sectionSelected)
							)
						}
					>
						<MenuItem
							className="flex items-center gap-2 lg:rounded-full"
							placeholder={undefined}
						>
							<span className="text-white text-lg "> {label}</span>
						</MenuItem>
					</div>
				);
			})}
		</ul>
	);
}

export default function HomeHeader({
	navList,
	setSection,
}: {
	navList: { label: string }[];
	setSection: any;
}) {
	return (
		<div className="p-1 h-[10%] flex items-center  ">
			<Navbar
				className=" mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6 bg-cyan-500  "
				placeholder={undefined}
			>
				<div className="relative mx-auto grid items-center grid-rows-1 grid-cols-3  text-blue-gray-900">
					<div className="w-full   lg:block   ">
						<NavList navList={navList} setSection={setSection} />
					</div>
					<div className="flex w-full h-full justify-center items-center">
						<Image
							src="/svg/sweethomelogo.svg"
							width={60}
							height={60}
							className="rounded-full flex items-center justify-center"
							alt=""
						/>
					</div>
					<div className=" flex w-full justify-center  lg:block   ">
						<NavList navList={navList} setSection={setSection} />
					</div>
				</div>
			</Navbar>
		</div>
	);
}
