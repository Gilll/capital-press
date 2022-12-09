import React, {useState} from 'react';
import CCheck from "../UI/CCheck";
import {Select} from "antd";
import IconSelect from "../../assets/icons/IconSelect";

const AdditionalFinishing = () => {
	const { Option, OptGroup } = Select
	const [form, setForm] = useState({
		additionalFinishing: '',
		coverLamination: null
	})

	return (
		<div className="cp-row">
			<div className="cp-title">Дополнительная отделка</div>
			<CCheck value={form.additionalFinishing} onChange={(val) => {
				if (val.includes('ламинация обложки')) {
					setForm({...form, additionalFinishing: val})
				} else {
					setForm({...form, additionalFinishing: val, coverLamination: null})
				}
			}}>
				<CCheck.Item value="выборочный уф-ЛАК">Выборочное УФ-лакирование</CCheck.Item>
				<CCheck.Item value="Тиснение фольгой">Тиснение фольгой</CCheck.Item>
				<CCheck.Item value="Конгревное тиснение">Конгревное тиснение</CCheck.Item>
				<CCheck.Item value="ламинация обложки">ламинация обложки</CCheck.Item>
				<div className={form.additionalFinishing.includes('ламинация обложки') ? "hidden-line" : "hidden-line hidden" }>
					<Select
						dropdownAlign={{ offset: [0, 10] }}
						placeholder="тип ламинации обложки"
						suffixIcon={<IconSelect/>}
						value={form.coverLamination} onChange={(val) => setForm({...form, coverLamination: val})}
					>
						<OptGroup label="тип ламинации обложки">
							<Option value='глянцевая'>глянцевая</Option>
							<Option value='матовая'>матовая</Option>
							<Option value='soft touch'>soft touch</Option>
							<Option value='фактурная'>фактурная</Option>
						</OptGroup>
					</Select>
				</div>
			</CCheck>
		</div>
	);
};

export default AdditionalFinishing;
