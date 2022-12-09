import React, {useState} from 'react';
import Input from "antd/es/input";
import CCheck from "../UI/CCheck";
import {Select} from "antd";
import IconSelect from "../../assets/icons/IconSelect";

const HomeCalendar = () => {
	const { Option, OptGroup } = Select
	const [form, setForm] = useState({
		cover: '',
		additionalFinishing: '',
		coverLamination: null,
		blockType: null,
		paperDensity: null,
		substrate: []
	});

	return (
		<>
			<div className="cp-row">
				<div className="cp-title">Формат продукции</div>
				<div className="cp-item-line">
					<div className="cp-item">
						<Input placeholder="Высота (мм)*"/>
					</div>
					<div className="cp-item">
						<Input placeholder="Ширина (мм)*"/>
					</div>
					<div className="cp-item">
						<Input placeholder="Размер в развороте*"/>
					</div>
				</div>
				<div className="cp-item-line">
					<div className="cp-item">
						<Input placeholder="Плотность картона (Г/м2)*"/>
					</div>
				</div>
			</div>
			<div className="cp-row">
				<div className="cp-title">Параметры</div>
				<div className="cp-item-line">
					<CCheck value={form.substrate} onChange={(val) => setForm({...form, substrate: val})}>
						<CCheck.Item value="УФ-лакирование">УФ-лакирование</CCheck.Item>
						<CCheck.Item value="Тиснение фольгой">Тиснение фольгой</CCheck.Item>
						<CCheck.Item value="Ламинация подложки">Ламинация подложки</CCheck.Item>
						<div className={ form.substrate.includes("Ламинация подложки") ? "hidden-line" : "hidden-line hidden"}>
							<Select
								dropdownAlign={{ offset: [0, 10] }}
								placeholder="тип ламинации подложки*"
								suffixIcon={<IconSelect/>}
								value={form.coverLamination} onChange={(val) => setForm({...form, coverLamination: val})}
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
			</div>
		</>
	);
};

export default HomeCalendar;
