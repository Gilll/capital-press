import React from 'react';
import {Select} from "antd";
import IconSelect from "../../assets/icons/IconSelect";
import CCheck from "../UI/CCheck";
import Radio from "antd/es/radio";
import IconRadio from "../../assets/icons/IconRadio";
import NumericInput from "../UI/NumericInput";

const CalendarQuarterly = ({form, setForm, validate}) => {
	const { Option, OptGroup } = Select

	return (
		<>
			<div className="cp-row">
				<div className="cp-title">Топ</div>
				<CCheck value={form.finishing.additionalFinishing} onChange={(val) => {
					if (val.includes('ламинация обложки')) {
						setForm({...form, finishing: {...form.finishing, additionalFinishing: val}})
					} else {
						setForm({...form, finishing: {...form.finishing,additionalFinishing: val, coverLamination: null}})
					}
				}}>
					<div>
						<NumericInput
							placeholder="размер (мм)*"
							value={form.top.size}
							onChange={(val) => setForm({...form, top: {...form.top, size: val }})}
							status={validate && !form.top.size && "error"}
						/>
					</div>
					<div>
						<Select
							dropdownAlign={{ offset: [0, 10] }}
							placeholder="Красочность печати*"
							suffixIcon={<IconSelect/>}
							value={form.top.printColorfulness}
							onChange={(val) => setForm({...form, top: {...form.top, printColorfulness: val}})}
							status={validate && !form.top.printColorfulness && "error"}
						>
							<OptGroup label="Красочность печати">
								<Option value='цветная с одной стороны (4+0)'>цветная с одной стороны (4+0)</Option>
							</OptGroup>
						</Select>
					</div>
					<CCheck.Item value="УФ-Лакирование">УФ-Лакирование</CCheck.Item>
					<CCheck.Item value="Тиснение фольгой">Тиснение фольгой</CCheck.Item>
					<CCheck.Item value="ламинация">ламинация</CCheck.Item>
					<div className={form.finishing.additionalFinishing.includes('ламинация') ? "hidden-line" : "hidden-line hidden" }>
						<Select
							dropdownAlign={{ offset: [0, 10] }}
							placeholder="тип ламинации*"
							suffixIcon={<IconSelect/>}
							value={form.finishing.coverLamination}
							onChange={(val) => setForm({...form, finishing: {...form.finishing, coverLamination: val }})}
							status={validate && !form.finishing.coverLamination && "error"}
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
				<div className={validate && !form.block.type ? "cp-item-line cp-item-line-error" : "cp-item-line"}>
					<Radio.Group
						value={form.block.type}
						onChange={(e) => {
							setForm({...form, block: {...form.block, type:  e.target.value, paperDensity: null }})
						}}
						className="flex-radio" buttonStyle="solid"
					>
						<Radio.Button value="Стандартный"><IconRadio/>Стандартный</Radio.Button>
						<Radio.Button value="Индивидуальный"><IconRadio/>Индивидуальный</Radio.Button>
						<div className='cp-item'>
							<Select
								dropdownAlign={{ offset: [0, 10] }}
								placeholder="Бумага*"
								suffixIcon={<IconSelect/>}
								value={form.block.paper}
								onChange={(val) => setForm({...form, block: {...form.block, paper:  val}})}
								status={validate && !form.block.paper && "error"}
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
				<div className={form.block.type === 'Индивидуальный' ? "cp-item-line hidden-line" : "cp-item-line hidden-line hidden"}>
					<div className='cp-item'>
						<NumericInput
							placeholder="Плотность бумаги (г/м2)*"
							value={form.block.paperDensity}
							onChange={(val) => setForm({...form, block: {...form.block, paperDensity: val }})}
							status={validate && !form.block.paperDensity && "error"}
						/>
					</div>
				</div>
			</div>
			<div className="cp-row">
				<div className="cp-title">Подложка</div>
				<CCheck value={form.substrate.lamination} onChange={(val) => setForm({...form, substrate: {...form.substrate, lamination: val, laminationType: null}})}>
					<div>
						<Select
							dropdownAlign={{ offset: [0, 10] }}
							placeholder="Кол-во рекламных полей*"
							suffixIcon={<IconSelect/>}
							value={form.substrate.fieldsCount}
							onChange={(val) => setForm({...form, substrate: {...form.substrate, fieldsCount: val}})}
							status={validate && !form.substrate.fieldsCount && "error"}
						>
							<OptGroup label="Кол-во рекламных полей">
								<Option value='1'>1</Option>
								<Option value='3'>3</Option>
							</OptGroup>
						</Select>
					</div>
					<CCheck.Item value="Ламинация подложки">Ламинация подложки</CCheck.Item>
					<div className={ form.substrate.lamination.includes("Ламинация подложки") ? "hidden-line" : "hidden-line hidden"}>
						<Select
							dropdownAlign={{ offset: [0, 10] }}
							placeholder="тип ламинации подложки*"
							suffixIcon={<IconSelect/>}
							value={form.substrate.laminationType}
							onChange={(val) => setForm({...form, substrate: {...form.substrate, laminationType: val}})}
							status={validate && !form.substrate.laminationType && "error"}
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

export default CalendarQuarterly;
