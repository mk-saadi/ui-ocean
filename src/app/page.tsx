import MaxWidth from "@/components/MaxWidth";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";

const points = [
	{
		id: 1,
		name: "Instant Delivery",
		icon: ArrowDownToLine,
		description:
			"Provide downloadable UI kits for popular design platforms, making it easy to integrate UIocean into existing workflows.",
	},
	{
		id: 2,
		name: "Guaranteed Quality",
		icon: CheckCircle,
		description:
			"Every Products in our platform is verified by our team to ensure highest quality standard. Not happy? We offer a 7-days refund policy",
	},
	{
		id: 3,
		name: "For The Planet",
		icon: Leaf,
		description:
			"We've pledged 1% of sales to the preservation of the natural environment",
	},
];

export default function Home() {
	return (
		<>
			{" "}
			<MaxWidth>
				<div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
					<h1 className="text-4xl font-bold tracking-tight text-gray-700 sm:text-6xl">
						Marketplace of amazing{" "}
						<span className="text-[#16a34a]">UI assets</span>.
					</h1>
					<p className="mt-6 text-lg max-w-prose text-muted-foreground">
						Welcome to <span>UIOCEAN</span>. Craft beautiful,
						responsive interfaces with ease, powered by UIocean's
						intuitive components verified by our team.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 mt-7">
						<Link
							href="/products"
							className={buttonVariants()}
						>
							Browse Products
						</Link>
						<Button variant="outline">
							Our quality promise &rarr;
						</Button>
					</div>
				</div>

				{/* todo: list products */}
			</MaxWidth>
			<section className="border-t border-gray-200 bg-gray-50">
				<MaxWidth className="py-20">
					<div className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
						{points.map((po) => (
							<div
								key={po.id}
								className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
							>
								<div className="md:flex-shrink-0 flex justify-center">
									<div className="h-16 w-16 flex items-center justify-center rounded-lg bg-green-200 text-green-[#16a34a]">
										{<po.icon className="w-1/3 h-1/3" />}
									</div>
								</div>

								<div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
									<h3 className="text-base font-medium text-gray-700">
										{po.name}
									</h3>
									<p className="mt-3 text-sm text-muted-foreground">
										{po.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</MaxWidth>
			</section>
		</>
	);
}
