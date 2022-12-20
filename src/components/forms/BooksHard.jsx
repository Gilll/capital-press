import React from 'react';
import BookFormat from "../rows/BookFormat";
import BindingHard from "./BindingHard";
import AdditionalFinishingHard from "../rows/AdditionalFinishingHard";

const BooksHard = ({form, setForm, validate}) => {
	return (
		<>
			<BookFormat validate={validate} format={form.format} setFormat={(val) => setForm({...form, format: val})}/>
			<BindingHard validate={validate} binding={form.binding} setBinding={(val) => setForm({...form, binding: val})}/>
			<AdditionalFinishingHard validate={validate} finishing={form.finishing} setFinishing={(val) => setForm({...form, finishing: val})}/>
		</>
	);
};

export default BooksHard;
