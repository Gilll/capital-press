import React from 'react';
import CCheck from "../UI/CCheck";
import {Select} from "antd";
import IconSelect from "../../assets/icons/IconSelect";
import NumericInput from "../UI/NumericInput";

const WallCalendar = ({form, setForm, validate}) => {
	const { Option, OptGroup } = Select

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
				</div>
			</div>
			<div className="cp-row">
				<div className="cp-title">Параметры</div>
				<CCheck value={form.params.rigel} onChange={(val) => setForm({...form, params: {...form.params, rigel: val}})}>
					<div>
						<Select
							dropdownAlign={{ offset: [0, 10] }}
							placeholder="Бумага*"
							suffixIcon={<IconSelect/>}
							value={form.params.paper}
							onChange={(val) => setForm({...form, params: {...form.params, paper: val}})}
							status={validate && !form.params.paper && "error"}
						>
							<OptGroup label="Бумага">
								<Option value='мелованная глянцевая'>мелованная глянцевая</Option>
								<Option value='мелованная матовая'>мелованная матовая</Option>
							</OptGroup>
						</Select>
					</div>
					<div>
						<NumericInput
							placeholder="Количество листов*"
							value={form.params.pagesCount}
							onChange={(val) => setForm({...form, params: {...form.params, pagesCount: val }})}
							status={validate && !form.params.pagesCount && "error"}
						/>
					</div>
					<div>
						<Select
							dropdownAlign={{ offset: [0, 10] }}
							placeholder="Красочность печати*"
							suffixIcon={<IconSelect/>}
							value={form.params.printColorfulness}
							onChange={(val) => setForm({...form, params: {...form.params, printColorfulness: val}})}
							status={validate && !form.params.printColorfulness && "error"}
						>
							<OptGroup label="Красочность печати">
								<Option value='цветная печать с 1-ой стороны листа'>цветная печать с 1-ой стороны листа</Option>
								<Option value='цветная печать с 2-х сторон листа'>цветная печать с 2-х сторон листа</Option>
							</OptGroup>
						</Select>
					</div>
					<div>
						<NumericInput
							placeholder="Плотность бумаги (Г/м2)*"
							value={form.params.paperDensity}
							onChange={(val) => setForm({...form, params: {...form.params, paperDensity: val }})}
							status={validate && !form.params.paperDensity && "error"}
						/>
					</div>
					<div>
						<Select
							dropdownAlign={{ offset: [0, 10] }}
							placeholder="Способ скрепления*"
							suffixIcon={<IconSelect/>}
							value={form.params.bonding}
							onChange={(val) => setForm({...form, params: {...form.params, bonding: val}})}
							status={validate && !form.params.bonding && "error"}
						>
							<OptGroup label="Способ скрепления">
								<Option value='пружина'>пружина</Option>
							</OptGroup>
						</Select>
					</div>
					<CCheck.Item value="Ригель для подвешивания">Ригель для подвешивания</CCheck.Item>
				</CCheck>
			</div>
		</>
	);
};

export default WallCalendar;
