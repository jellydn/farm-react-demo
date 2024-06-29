import { DevTool } from "@hookform/devtools";
import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";
import { Controller, type SubmitHandler, useForm } from "react-hook-form";

import { useState } from "react";
import type { AnimeListResponse } from "./api-response";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./components/ui/card";
import { Input } from "./components/ui/input";

type FormValue = {
	search: string;
};

function AnimeList({ name }: { name: string }) {
	const { isPending, error, data } = useQuery<AnimeListResponse>({
		queryKey: ["anime", name],
		queryFn: () => fetch(`/api/anime?q=${name}`).then((res) => res.json()),
		enabled: !!name,
	});

	if (!name) {
		return <p className="mt-4">Search for an anime, e.g: Naruto</p>;
	}

	if (isPending) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>Error: {error.message}</p>;
	}

	return data?.data.map((anime) => (
		<Card key={anime.mal_id}>
			<CardHeader>
				<CardTitle>
					<a href={anime.url} target="_blank" rel="noreferrer">
						{anime.title}
					</a>
				</CardTitle>
				<CardDescription>
					<span>
						{anime.type} - {anime.episodes} episodes - {anime.duration}.
					</span>
				</CardDescription>
			</CardHeader>
			<CardContent className="flex gap-4">
				<img
					alt={anime.title}
					className="object-cover rounded-md aspect-square"
					src={anime.images.webp.image_url}
				/>
				<p>{anime.synopsis}</p>
			</CardContent>
		</Card>
	));
}

export function Anime() {
	const [searchBy, setSearchBy] = useState("");
	const { control, handleSubmit } = useForm({
		defaultValues: {
			search: "",
		},
	});

	const onSubmit: SubmitHandler<FormValue> = (data) => {
		setSearchBy(data.search);
	};

	return (
		<div className="flex flex-col">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="relative flex-1 gap-4 ml-auto md:grow-0">
					<Search className="absolute top-2.5 left-2.5 w-4 h-4 text-muted-foreground" />
					<Controller
						name="search"
						control={control}
						render={({ field }) => (
							<Input
								placeholder="Search..."
								className="pl-8 w-full rounded-lg bg-background md:w-[200px] lg:w-[336px]"
								{...field}
							/>
						)}
					/>
				</div>
			</form>
			<AnimeList name={searchBy} />
			<DevTool control={control} />
		</div>
	);
}
