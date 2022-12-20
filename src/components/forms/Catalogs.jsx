import React from 'react';
import Input from "antd/es/input";
import IconSelect from "../../assets/icons/IconSelect";
import {Select} from "antd";
import AdditionalFinishing from "../rows/AditionalFinishing";
import BindingHard from "./BindingHard";
import BindingSoft from "../rows/BindingSoft";

const Catalogs = ({form, setForm, validate}) => {
	const { Option, OptGroup } = Select

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
				<div className="cp-item-line">
					<div className="cp-item">
						<Select
							dropdownAlign={{ offset: [0, 10] }}
							placeholder="Переплет*"
							suffixIcon={<IconSelect/>}
							value={form.binding.type}
							onChange={(val) => setForm({...form, binding: {...form.binding, type: val}})}
							status={validate && !form.binding.type && "error"}
						>
							<OptGroup label="Переплет">
								<Option value='твердый'>твердый</Option>
								<Option value='мягкий'>мягкий</Option>
							</OptGroup>
						</Select>
					</div>
				</div>
			</div>
			<BindingHard
				animated={true}
				visible={form.binding.type === 'твердый'}
				validate={validate} binding={form.binding.hard} setBinding={(val) => setForm({...form, binding: {...form.binding, hard: val}})}
			/>
			<BindingSoft
				animated={true}
				visible={form.binding.type === 'мягкий'}
				validate={validate} binding={form.binding.soft} setBinding={(val) => setForm({...form, binding: {...form.binding, soft: val}})}
			/>
			<AdditionalFinishing validate={validate} finishing={form.finishing} setFinishing={(val) => setForm({...form, finishing: val})}/>
		</>
	);
};

export default Catalogs;
