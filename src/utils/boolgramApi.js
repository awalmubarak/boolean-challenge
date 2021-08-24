import { GET_POSTS, GET_PROFILES } from './endpoints';

const baseUrl = 'https://flynn.boolean.careers/exercises/api/boolgram/';

export const getPosts = async () => {
	try {
		const response = await fetch(`${baseUrl}/${GET_POSTS}`);
		const posts = await response.json();
		return posts;
	} catch (error) {
		console.log(error);
	}
};

export const getProfiles = async () => {
	try {
		const response = await fetch(`${baseUrl}/${GET_PROFILES}`);
		const profiles = await response.json();
		return profiles;
	} catch (error) {
		console.log(error);
	}
};
