import React from 'react';
import BindingSoft from "../rows/BindingSoft";
import AdditionalFinishing from "../rows/AditionalFinishing";
import NumericInput from "../UI/NumericInput";

const Magazines = ({form, setForm, validate}) => {

	return (
		<>
			<div className="cp-row">
				<div className="cp-title">Формат продукции</div>
				<div className="cp-item-line">
					<div className="cp-item">
						<NumericInput
							value={form.format.height}
							onChange={(val) => setForm({...form, format: {...form.format, height: val }})}
							placeholder="Высота (мм)*"
							status={validate && !form.format.height && "error"}
						/>
					</div>
					<div className="cp-item">
						<NumericInput
							value={form.format.width}
							onChange={(val) => setForm({...form, format: {...form.format, width: val }})}
							placeholder="Ширина (мм)*"
							status={validate && !form.format.width && "error"}
						/>
					</div>
					<div className="cp-item">
						<NumericInput
							value={form.format.row}
							onChange={(val) => setForm({...form, format: {...form.format, row: val }})}
							placeholder="количество полос*"
							status={validate && !form.format.row && "error"}
						/>
					</div>
				</div>
			</div>
			<BindingSoft validate={validate} binding={form.binding} setBinding={(val) => setForm({...form, binding: val })}/>
			<AdditionalFinishing validate={validate} finishing={form.finishing} setFinishing={(val) => setForm({...form, finishing: val})}/>
		</>
	);
};

export default Magazines;
