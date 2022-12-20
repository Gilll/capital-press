import React from 'react';
import Input from "antd/es/input";
import BindingSoft from "../rows/BindingSoft";
import AdditionalFinishing from "../rows/AditionalFinishing";

const Magazines = ({form, setForm, validate}) => {

	return (
		<>
			<div className="cp-row">
				<div className="cp-title">Формат продукции</div>
				<div className="cp-item-line">
					<div className="cp-item">
						<Input
							value={form.format.height}
							onChange={(e) => setForm({...form, format: {...form.format, height: e.target.value}})}
							placeholder="Высота (мм)*"
							status={validate && !form.format.height && "error"}
						/>
					</div>
					<div className="cp-item">
						<Input
							value={form.format.width}
							onChange={(e) => setForm({...form, format: {...form.format, width: e.target.value}})}
							placeholder="Ширина (мм)*"
							status={validate && !form.format.width && "error"}
						/>
					</div>
					<div className="cp-item">
						<Input
							value={form.format.row}
							onChange={(e) => setForm({...form, format: {...form.format, row: e.target.value}})}
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
