import { useState } from "react";
import "./main.css";
import FarmLogo from "./assets/logo.png";
import reactLogo from "./assets/react.svg";
import { Button } from "./components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./components/ui/card";

export function Main() {
	const [count, setCount] = useState(0);

	return (
		<div className="flex flex-col w-full min-h-screen">
			<header className="flex sticky top-0 gap-4 justify-center items-center px-4 h-16 md:px-6 bg-background">
				<a href="https://farmfe.org/" target="_blank" rel="noreferrer">
					<img src={FarmLogo} className="logo" alt="Farm logo" />
				</a>
				<a href="https://react.dev" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</header>
			<main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
				<div className="grid gap-2 mx-auto w-full max-w-6xl">
					<h1 className="text-3xl font-semibold">Farm + React</h1>
				</div>
				<Card>
					<CardHeader>
						<CardTitle>Simple Counter</CardTitle>
						<CardDescription>
							Edit <code>src/main.tsx</code> and save to test HMR
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Button
							type="button"
							onClick={() => setCount((count) => count + 1)}
						>
							count is {count}
						</Button>
					</CardContent>
				</Card>
				<p className="read-the-docs">
					Click on the Farm and React logos to learn more
				</p>
			</main>
		</div>
	);
}
