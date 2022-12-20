
const booksFormat = {
	width: null,
	height: null,
	row: null
}

const bindingHard = {
	cover: {
		type: null,
		thickness: null
	},
	block: {
		paper: null,
		paperDensity: null,
		printColorfulness: null,
		inserts: null,
		endpapersColorful: null,
		spine: null,
		captal: null
	}
}

const bindingSoft = {
	cover: {
		printColorfulness: null,
		thickness: null
	},
	block: {
		paper: null,
		paperDensity: null,
		printColorfulness: null,
		pageBinding: null
	}
}

const finishing = {
	additionalFinishing: [],
	coverLamination: null
}

export const booksHard = {
	format: {...booksFormat},
	binding: {...bindingHard},
	finishing: {...finishing}
}

export const catalogs = {
	format: {...booksFormat},
	binding: {
		type: null,
		hard: {...bindingHard},
		soft: {...bindingSoft}
	},
	finishing: {...finishing}
}

export const magazines = {
	format: {...booksFormat},
	binding: {...bindingSoft},
	finishing: {...finishing}
}

export const booksSoft = {
	format: {...booksFormat},
	binding: {...bindingSoft},
	finishing: {...finishing}
}

export const leaflets = {
	format: {
		width: null,
		height: null
	},
	params: {
		paper: null,
		paperDensity: null,
		printColorfulness: null,
	}
}

export const newspapers = {
	format: {...booksFormat},
	params: {
		paper: null,
		paperDensity: null,
		printColorfulness: null,
		pageBinding: null
	}
}

export const diaries = {
	format: {...booksFormat},
	cover: {
		type: null,
		thickness: null
	},
	block: {
		type: null,
		standard: {
			colorfulEndpapers: null,
			captal: null
		},
		individual: {
			paper: null,
			paperDensity: null,
			printColorfulness: null,
			inserts: null,
			spine: null,
			captal: null
		}
	},
	finishing: {...finishing}
}

export const booklets = {
	format: {
		width: null,
		height: null,
		size: null
	},
	params: {
		paper: null,
		paperDensity: null,
		printColorfulness: null,
		foldsCount: null
	}
}

export const wallCalendar = {
	format: {
		width: null,
		height: null
	},
	params: {
		paper: null,
		paperDensity: null,
		printColorfulness: null,
		pagesCount: null,
		rigel: [],
		bonding: "пружина",
	}
}

export const homeCalendar = {
	format: {
		width: null,
		height: null,
		size: null,
		paperDensity: null
	},
	finishing: {...finishing},
}

export const folders = {
	format: {
		width: null,
		height: null,
	},
	params: {
		paper: null,
		paperDensity: null,
		formST: null,
		printColorfulness: null
	},
	finishing: {...finishing},
}

export const labels = {
	format: {
		width: null,
		height: null,
	},
	params: {
		coating: null
	}
}

export const deskCalender = {
	substrate: {
		width: null,
		height: null,
		paperDensity: null
	},
	block: {
		width: null,
		height: null,
		paperDensity: null,
		pagesCount: null,
		bonding: "пружина",
		printColorfulness: null
	}
}

export const calendarQuarterly = {
	top: {
		size: null,
		printColorfulness: 'цветная с одной стороны (4+0)',
	},
	finishing: {...finishing},
	block: {
		type: null,
		paper: null,
		paperDensity: null,
	},
	substrate: {
		fieldsCount: null,
		lamination: [],
		laminationType: null
	}
}

export const notepads = {
	format: {
		width: null,
		height: null,
		pagesCount: null
	},
	cover: {
		paper: null,
		paperDensity: null,
	},
	block: {
		paper: null,
		paperDensity: null,
		printColorfulness: null,
		bonding: "пружина",
		bondingBy: null
	},
	finishing: {...finishing}
}
