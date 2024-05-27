import { error } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export function GET({url}:{url: URL}) {

	const random = "string";

	return new Response(String(JSON.stringify(random)));
}