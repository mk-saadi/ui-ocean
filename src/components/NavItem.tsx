"use client";

import React from "react";
import { Button } from "./ui/button";
import { PRODUCTS_CATEGORIES } from "@/config";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type Cat = (typeof PRODUCTS_CATEGORIES)[number];

interface NavItemsProps {
	cat: Cat;
	handleOpen: () => void;
	isOpen: boolean;
	isAnyOpen: boolean;
}

const NavItem = ({ isAnyOpen, cat, handleOpen, isOpen }: NavItemsProps) => {
	return (
		<div className="flex ">
			<div className="relative flex items-center">
				<Button
					className="gap-1.5"
					onClick={handleOpen}
					variant={isOpen ? "default" : "outline"}
				>
					{cat.label}
					<ChevronDown
						className={cn(
							"h-4 w-4 transition-all text-muted-foreground",
							{ "-rotate-180": isOpen }
						)}
					/>
				</Button>
			</div>

			{isOpen ? (
				<div
					className={cn(
						"absolute inset-x-0 top-full text-sm text-muted-foreground",
						{
							"animate-in fade-in-10 slide-in-from-top-5":
								!isAnyOpen,
						}
					)}
				>
					<div
						className="absolute inset-0 top-1/2 bg-white shadow-sm"
						aria-hidden="true"
					/>

					<div className="relative bg-white">
						<div className="mx-auto max-w-7xl px-8">
							<div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
								<div className="col-span-4 col-start-1 grid grid-cols-3 gap-x-8">
									{cat.featured.map((fe) => (
										<div
											key={fe.name}
											className="group relative text-base sm:text-sm"
										>
											<div className="relative aspect-video overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
												<Image
													alt={fe.name}
													fill
													src={fe.imageSrc}
													className="object-cover object-center"
												/>
											</div>

											<Link
												href={fe.href}
												className="mt-6 block font-medium text-gray-700"
											>
												{fe.name}
											</Link>
											<p
												className="mt-1"
												aria-hidden="true"
											></p>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			) : null}
		</div>
	);
};

export default NavItem;
