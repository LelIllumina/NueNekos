export default async function fetchNekostats(username) {
	const response = await fetch(`https://nekoweb.org/api/site/info/${username}`);

	const data = await response.json();

	return data;
}
