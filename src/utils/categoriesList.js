
export const categories = {
	booksHard: 0,
	booksSoft: 1,
	leaflets: 2,
	booklets: 3,
	brochures: 4,
	newspapers: 5,
	diaries: 6,
	notepads: 7,
	calendars: 8,
	folders: 9,
	stickers: 10,
	posters: 11,
	letterhead: 12,
	catalogs: 13,
	magazines: 14,
	instructions: 15,
	labels: 16
}

export const fakePost = async () => {
	const result = await resolveAfter2000ms();
	return result;
}

function resolveAfter2000ms() {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve('resolved');
		}, 2000);
	});
}
