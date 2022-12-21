import type { NextPage } from "next";
import { useEffect } from "react";
import "../styles/notFoundPage.module.css";

const NotFoundPage: NextPage = () => {
	useEffect(() => {
		document.body.classList.add("notFoundBody");
	}, []);
	return (
		<>
			<section className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white flex flex-col items-center text-center ">
				<div
					title="404"
					className="notFoundDiv text-[96px]"
				>
					404
				</div>
				<p>Please I want to know. What are you looking for? 👀 </p>
			</section>
		</>
	);
};

export default NotFoundPage;
