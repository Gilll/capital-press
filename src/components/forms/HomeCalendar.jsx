import React from 'react';
import Input from "antd/es/input";
import CCheck from "../UI/CCheck";
import {Select} from "antd";
import IconSelect from "../../assets/icons/IconSelect";

const HomeCalendar = ({form, setForm, validate}) => {
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
							placeholder="Размер в развороте*"
							value={form.format.size}
							onChange={(e) => setForm({...form, format: {...form.format, size: e.target.value}})}
							status={validate && !form.format.size && "error"}
						/>
					</div>
				</div>
				<div className="cp-item-line">
					<div className="cp-item">
						<Input
							placeholder="Плотность картона (Г/м2)*"
							value={form.format.paperDensity}
							onChange={(e) => setForm({...form, format: {...form.format, paperDensity: e.target.value}})}
							status={validate && !form.format.paperDensity && "error"}
						/>
					</div>
				</div>
			</div>
			<div className="cp-row">
				<div className="cp-title">Параметры</div>
				<CCheck
					value={form.finishing.additionalFinishing}
					onChange={(val) => setForm({...form, finishing: {...form.finishing, additionalFinishing: val}})}
				>
					<CCheck.Item value="УФ-лакирование">УФ-лакирование</CCheck.Item>
					<CCheck.Item value="Тиснение фольгой">Тиснение фольгой</CCheck.Item>
					<CCheck.Item value="Ламинация подложки">Ламинация подложки</CCheck.Item>
					<div className={ form.finishing.additionalFinishing.includes("Ламинация подложки") ? "hidden-line" : "hidden-line hidden"}>
						<Select
							dropdownAlign={{ offset: [0, 10] }}
							placeholder="тип ламинации подложки*"
							suffixIcon={<IconSelect/>}
							value={form.finishing.coverLamination}
							onChange={(val) => setForm({...form, finishing: {...form.finishing, coverLamination: val }})}
							status={validate && !form.finishing.coverLamination && "error"}
						>
							<OptGroup label="тип ламинации подложки">
								<Option value='глянцевая'>глянцевая</Option>
								<Option value='матовая'>матовая</Option>
								<Option value='soft touch'>soft touch</Option>
								<Option value='фактурная'>фактурная</Option>
							</OptGroup>
						</Select>
					</div>
				</CCheck>
			</div>
		</>
	);
};

export default HomeCalendar;
