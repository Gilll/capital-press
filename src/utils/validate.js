import {categories} from "./categoriesList";

export const validateForm = (formId, form) => {
	switch (formId) {
		case categories.booksHard: {
			if (form.format.width &&
				form.format.height &&
				form.format.row &&
				form.binding.cover.type &&
				form.binding.block.paper &&
				form.binding.block.paperDensity &&
				form.binding.block.printColorfulness &&
				form.binding.block.inserts &&
				form.binding.block.endpapersColorful &&
				form.binding.block.spine &&
				form.binding.block.captal) {
				if (form.binding.cover.type === 'Картон /  картон с поролоном') {
					if (!form.binding.cover.thickness) { return false; }
				}
				if (form.finishing.additionalFinishing.includes('ламинация обложки')) {
					if (!form.finishing.coverLamination) { return false; }
				}
				return true;
			}
			return false;
		}
		case categories.booksSoft: {
			if (form.format.width &&
				form.format.height &&
				form.format.row &&
				form.binding.cover.printColorfulness &&
				form.binding.cover.thickness &&
				form.binding.block.paper &&
				form.binding.block.paperDensity &&
				form.binding.block.printColorfulness &&
				form.binding.block.pageBinding) {
				if (form.finishing.additionalFinishing.includes('ламинация обложки')) {
					if (!form.finishing.coverLamination) { return false; }
				}
				return true;
			}
			return false;
		}
		case categories.leaflets: {
			return !!(form.format.width &&
				form.format.height &&
				form.params.paper &&
				form.params.paperDensity &&
				form.params.printColorfulness);
		}
		case categories.posters: {
			return !!(form.format.width &&
				form.format.height &&
				form.params.paper &&
				form.params.paperDensity &&
				form.params.printColorfulness);
		}
		case categories.letterhead: {
			return !!(form.format.width &&
				form.format.height &&
				form.params.paper &&
				form.params.paperDensity &&
				form.params.printColorfulness);
		}
		case categories.labels: {
			return !!(form.format.width &&
				form.format.height &&
				form.params.coating);
		}
		case categories.stickers: {
			return !!(form.format.width &&
				form.format.height &&
				form.params.coating);
		}
		case categories.booklets: {
			return !!(form.format.width &&
				form.format.height &&
				form.format.size &&
				form.params.paper &&
				form.params.foldsCount &&
				form.params.paperDensity &&
				form.params.printColorfulness);
		}
		case categories.catalogs: {
			if (form.format.width &&
				form.format.height &&
				form.format.row &&
				form.binding.type) {
					if (!checkFinishing(form.finishing)) {
						return false;
					}
					if (form.binding.type === "мягкий") {
						return checkBindingSoft(form.binding.soft)
					}
					if (form.binding.type === "твердый") {
						return checkBindingHard(form.binding.hard)
					}
				return true;
			}
			return false;
		}
		case categories.brochures: {
			if (form.format.width &&
				form.format.height &&
				form.format.row &&
				form.binding.type) {
					if (!checkFinishing(form.finishing)) {
						return false;
					}
					if (form.binding.type === "мягкий") {
						return checkBindingSoft(form.binding.soft)
					}
					if (form.binding.type === "твердый") {
						return checkBindingHard(form.binding.hard)
					}
				return true;
			}
			return false;
		}
		case categories.magazines: {
			if (form.format.width &&
				form.format.height &&
				form.format.row) {
					if (!checkFinishing(form.finishing)) {
						return false;
					}
				return checkBindingSoft(form.binding)
			}
			return false;
		}
		case categories.instructions: {
			if (form.format.width &&
				form.format.height &&
				form.format.row) {
					if (!checkFinishing(form.finishing)) {
						return false;
					}
				return checkBindingSoft(form.binding)
			}
			return false;
		}
		case categories.folders: {
			if (form.format.width &&
				form.format.height &&
				form.params.paper &&
				form.params.paperDensity &&
				form.params.formST &&
				form.params.printColorfulness) {
				return checkFinishing(form.finishing);
			}
			return false;
		}
		case categories.newspapers: {
			return !!(form.format.width &&
				form.format.height &&
				form.format.row &&
				form.params.paper &&
				form.params.paperDensity &&
				form.params.pageBinding &&
				form.params.printColorfulness);
		}
		case categories.diaries: {
			if (form.format.width &&
				form.format.height &&
				form.format.row) {
				if (form.cover.type === 'Картон /  картон с поролоном') {
					if (!form.cover.thickness) { return false; }
				}
				if (!checkFinishing(form.finishing)) {
					return false;
				}
				if (form.block.type === 'Стандартный') {
					if (form.block.standard.colorfulEndpapers && form.block.standard.captal) { return true; }
				}
				if (form.block.type === 'Индивидуальный') {
					if (form.block.individual.paper &&
						form.block.individual.paperDensity &&
						form.block.individual.printColorfulness &&
						form.block.individual.inserts &&
						form.block.individual.spine &&
						form.block.individual.captal)
					{ return true; }
				}
			}
			return false;
		}
		case categories.notepads: {
			if (form.format.width &&
				form.format.height &&
				form.cover.paper &&
				form.cover.paperDensity &&
				form.block.paper &&
				form.block.paperDensity &&
				form.block.printColorfulness &&
				form.block.bonding &&
				form.block.bondingBy &&
				form.format.pagesCount) {
				return checkFinishing(form.finishing);
			}
			return false;
		}
		case 'Квартальные календари': {
			if (form.top.size &&
				form.top.printColorfulness &&
				form.block.type &&
				form.block.paper &&
				form.substrate.fieldsCount) {
				if (form.block.type === 'Индивидуальный' && !form.block.paperDensity) {
					return false;
				}
				if (form.substrate.lamination.includes('Ламинация подложки') && !form.substrate.laminationType) {
					return false;
				}
				return checkFinishing(form.finishing);
			}
			return false;
		}
		case 'Перекидные настенные календари': {
			return !!(form.format.width &&
				form.format.height &&
				form.params.paper &&
				form.params.paperDensity &&
				form.params.printColorfulness &&
				form.params.pagesCount &&
				form.params.bonding);
		}
		case 'Настольный календарь-домик': {
			if (form.format.width &&
				form.format.height &&
				form.format.paperDensity &&
				form.format.size) {
				if (form.finishing.additionalFinishing.includes('Ламинация подложки') && !form.finishing.coverLamination) {
					return false;
				}
				return true;
			}
			return false;
		}
		case 'перекидные настольные': {
			return !!(form.substrate.width &&
				form.substrate.height &&
				form.substrate.paperDensity &&
				form.block.width &&
				form.block.paperDensity &&
				form.block.pagesCount &&
				form.block.bonding &&
				form.block.printColorfulness &&
				form.block.height);
		}
		default: return false;
	}
}

const checkBindingHard = (binding) => {
	if (binding.cover.type &&
		binding.block.paper &&
		binding.block.paperDensity &&
		binding.block.printColorfulness &&
		binding.block.inserts &&
		binding.block.endpapersColorful &&
		binding.block.spine &&
		binding.block.captal) {
		if (binding.cover.type === 'Картон /  картон с поролоном') {
			if (!binding.cover.thickness) { return false; }
		}
		return true;
	}
	return false;
}

const checkBindingSoft = (binding) => {
	return !!(binding.cover.printColorfulness &&
		binding.cover.thickness &&
		binding.block.paper &&
		binding.block.paperDensity &&
		binding.block.printColorfulness &&
		binding.block.pageBinding);
}
const checkFinishing = (finishing) => {
	if (finishing.additionalFinishing.includes('ламинация обложки')) {
		if (!finishing.coverLamination) { return false; }
	}
	return true;
}
