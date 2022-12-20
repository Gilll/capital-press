import React from 'react';
import BookFormat from "../rows/BookFormat";
import BindingSoft from "../rows/BindingSoft";
import AdditionalFinishingHard from "../rows/AdditionalFinishingHard";

const BooksSoft = ({form, setForm, validate}) => {

	return (
		<>
			<BookFormat validate={validate} format={form.format} setFormat={(val) => setForm({...form, format: val})}/>
			<BindingSoft validate={validate} binding={form.binding} setBinding={(val) => setForm({...form, binding: val})}/>
			<AdditionalFinishingHard validate={validate} finishing={form.finishing} setFinishing={(val) => setForm({...form, finishing: val})}/>
		</>
	);
};

export default BooksSoft;
