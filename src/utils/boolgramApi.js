import { GET_POSTS, GET_STORIES } from './endpoints';

const baseUrl = 'https://flynn.boolean.careers/exercises/api/boolgram';

export const getPosts = async () => {
	try {
		const response = await fetch(`${baseUrl}/${GET_POSTS}`);
		const posts = await response.json();
		return posts;
	} catch (error) {
		console.log(error);
	}
};

export const getStories = async () => {
	try {
		const response = await fetch(`${baseUrl}/${GET_STORIES}`);
		const profiles = await response.json();
		return profiles;
	} catch (error) {
		console.log(error);
	}
};
