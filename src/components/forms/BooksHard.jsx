import React from 'react';
import BookFormat from "../rows/BookFormat";
import BindingHard from "./BindingHard";
import AdditionalFinishingHard from "../rows/AdditionalFinishingHard";

const BooksHard = ({form, setForm}) => {

	return (
		<>
			<BookFormat format={form.format} setFormat={(val) => setForm({...form, format: val})}/>
			<BindingHard/>
			<AdditionalFinishingHard/>
		</>
	);
};

export default BooksHard;
