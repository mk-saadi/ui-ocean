"use client";

import { PRODUCTS_CATEGORIES } from "@/config";
import React, { useEffect, useRef, useState } from "react";
import NavItem from "./NavItem";
import { useOnClickOutside } from "@/hooks/click-outside";

const NavItems = () => {
	const [active, setActive] = useState<null | number>(null);

	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setActive(null);
			}
		};

		document.addEventListener("keydown", handler);

		return () => {
			document.removeEventListener("keydown", handler);
		};
	}, []); // whatever

	const isAnyOpen = active !== null;

	const navRef = useRef<HTMLDivElement | null>(null);

	useOnClickOutside(navRef, () => setActive(null));

	return (
		<div
			className="flex gap-4 h-full"
			ref={navRef}
		>
			{PRODUCTS_CATEGORIES.map((cat, i) => {
				const handleOpen = () => {
					if (active === i) {
						setActive(null);
					} else {
						setActive(i);
					}
				};

				const isOpen = i === active;

				return (
					<NavItem
						cat={cat}
						handleOpen={handleOpen}
						isOpen={isOpen}
						key={cat.value}
						isAnyOpen={isAnyOpen}
					/>
				);
			})}
		</div>
	);
};

export default NavItems;
