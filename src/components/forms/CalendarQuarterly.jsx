import React, {useState} from 'react';
import Input from "antd/es/input";
import {Select} from "antd";
import IconSelect from "../../assets/icons/IconSelect";
import CCheck from "../UI/CCheck";
import Radio from "antd/es/radio";
import IconRadio from "../../assets/icons/IconRadio";

const CalendarQuarterly = () => {
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
				<div className="cp-title">Топ</div>
				<CCheck value={form.additionalFinishing} onChange={(val) => {
					if (val.includes('ламинация обложки')) {
						setForm({...form, additionalFinishing: val})
					} else {
						setForm({...form, additionalFinishing: val, coverLamination: null})
					}
				}}>
					<div><Input placeholder="размер (мм)*"/></div>
					<div>
						<Select
							dropdownAlign={{ offset: [0, 10] }}
							placeholder="Красочность печати*"
							suffixIcon={<IconSelect/>}
							value='цветная с одной стороны (4+0)'
						>
							<OptGroup label="Красочность печати">
								<Option value='цветная с одной стороны (4+0)'>цветная с одной стороны (4+0)</Option>
							</OptGroup>
						</Select>
					</div>
					<CCheck.Item value="УФ-Лакирование">УФ-Лакирование</CCheck.Item>
					<CCheck.Item value="Тиснение фольгой">Тиснение фольгой</CCheck.Item>
					<CCheck.Item value="ламинация">ламинация</CCheck.Item>
					<div className={form.additionalFinishing.includes('ламинация') ? "hidden-line" : "hidden-line hidden" }>
						<Select
							dropdownAlign={{ offset: [0, 10] }}
							placeholder="тип ламинации*"
							suffixIcon={<IconSelect/>}
							value={form.coverLamination} onChange={(val) => setForm({...form, coverLamination: val})}
						>
							<OptGroup label="тип ламинации">
								<Option value='глянцевая'>глянцевая</Option>
								<Option value='матовая'>матовая</Option>
								<Option value='soft touch'>soft touch</Option>
								<Option value='фактурная'>фактурная</Option>
							</OptGroup>
						</Select>
					</div>
				</CCheck>
			</div>
			<div className="cp-row">
				<div className="cp-title">Блок</div>
				<div className="cp-item-line">
					<Radio.Group value={form.blockType} onChange={(e) => setForm({...form, blockType: e.target.value})} className="flex-radio" buttonStyle="solid">
						<Radio.Button value="Стандартный"><IconRadio/>Стандартный</Radio.Button>
						<Radio.Button value="Индивидуальный"><IconRadio/>Индивидуальный</Radio.Button>
						<div className='cp-item'>
							<Select
								dropdownAlign={{ offset: [0, 10] }}
								placeholder="Бумага*"
								suffixIcon={<IconSelect/>}
							>
								<OptGroup label="Бумага">
									<Option value='офсетная'>офсетная</Option>
									<Option value='мелованная глянцевая'>мелованная глянцевая</Option>
									<Option value='мелованная матовая'>мелованная матовая</Option>
								</OptGroup>
							</Select>
						</div>
					</Radio.Group>
				</div>
				<div className={form.blockType === 'Индивидуальный' ? "cp-item-line hidden-line" : "cp-item-line hidden-line hidden"}>
					<div className='cp-item'><Input value={form.paperDensity} onChange={(val) => setForm({...form, paperDensity: val})} placeholder="Плотность бумаги (г/м2)*"/></div>
				</div>
			</div>
			<div className="cp-row">
				<div className="cp-title">Подложка</div>
				<div className="cp-item-line">
					<CCheck value={form.substrate} onChange={(val) => setForm({...form, substrate: val})}>
						<div>
							<Select
								dropdownAlign={{ offset: [0, 10] }}
								placeholder="Кол-во рекламных полей*"
								suffixIcon={<IconSelect/>}
							>
								<OptGroup label="Кол-во рекламных полей">
									<Option value='1'>1</Option>
									<Option value='3'>3</Option>
								</OptGroup>
							</Select>
						</div>
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

export default CalendarQuarterly;
