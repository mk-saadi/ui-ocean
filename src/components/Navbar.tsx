import React from "react";
import MaxWidth from "./MaxWidth";
import Link from "next/link";
import { Icons } from "./icons";
import NavItems from "./NavItems";
import { buttonVariants } from "./ui/button";

const Navbar = () => {
	const user = null;

	return (
		<div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
			<header className="relative bg-white">
				<MaxWidth>
					<div className="border-b border-gray-200">
						<div className="flex h-16 items-center">
							{/* todo: mobile nav right here */}
							<div className="ml-4 flex lg:ml-0">
								<Link href="/">
									<Icons.logo className="h-10 w-10" />
								</Link>
							</div>

							<div className="hidden lg:block lg:ml-8 lg:self-stretch">
								<NavItems />
							</div>

							<div className="ml-auto flex items-center">
								<div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
									{user ? null : (
										<Link
											href="/sign-in"
											className={buttonVariants()}
										>
											Sign In
										</Link>
									)}

									{user ? null : (
										<span
											className="h-6 w-px bg-gray-200"
											aria-hidden="true"
										/>
									)}

									{user ? (
										<p></p>
									) : (
										<Link
											href="/register"
											className={buttonVariants({
												variant: "outline",
											})}
										>
											Register
										</Link>
									)}

									{user ? (
										<span className={buttonVariants()}>
											Logout
										</span>
									) : null}

									{user ? null : (
										<span
											className="h-6 w-px bg-gray-200"
											aria-hidden="true"
										/>
									)}

									<div className="ml-4 flow-root lg:ml-6"></div>
								</div>
							</div>
						</div>
					</div>
				</MaxWidth>
			</header>
		</div>
	);
};

export default Navbar;
