import React, {useState} from 'react';
import Input from "antd/es/input";
import CCheck from "../UI/CCheck";
import {Select} from "antd";
import IconSelect from "../../assets/icons/IconSelect";

const WallCalendar = () => {
	const { Option, OptGroup } = Select
	const [form, setForm] = useState({
		settings: []
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
				</div>
			</div>
			<div className="cp-row">
				<div className="cp-title">Параметры</div>
				<CCheck value={form.settings} onChange={(val) => setForm({...form, settings: val})}>
					<div>
						<Select
							dropdownAlign={{ offset: [0, 10] }}
							placeholder="Бумага*"
							suffixIcon={<IconSelect/>}
						>
							<OptGroup label="Бумага">
								<Option value='мелованная глянцевая'>мелованная глянцевая</Option>
								<Option value='мелованная матовая'>мелованная матовая</Option>
							</OptGroup>
						</Select>
					</div>
					<div>
						<Input placeholder="Количество листов*"/>
					</div>
					<div>
						<Select
							dropdownAlign={{ offset: [0, 10] }}
							placeholder="Красочность печати*"
							suffixIcon={<IconSelect/>}
						>
							<OptGroup label="Красочность печати">
								<Option value='цветная печать с 1-ой стороны листа'>цветная печать с 1-ой стороны листа</Option>
								<Option value='цветная печать с 2-х сторон листа'>цветная печать с 2-х сторон листа</Option>
							</OptGroup>
						</Select>
					</div>
					<div>
						<Input placeholder="Плотность бумаги (Г/м2)*"/>
					</div>
					<div>
						<Select
							dropdownAlign={{ offset: [0, 10] }}
							placeholder="Способ скрепления*"
							suffixIcon={<IconSelect/>}
							value="пружина"
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
