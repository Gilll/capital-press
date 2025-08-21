import React from 'react';
import {Select} from "antd";
import IconSelect from "../../assets/icons/IconSelect";
import NumericInput from "../UI/NumericInput";

const Labels = ({form, setForm, validate}) => {
	const { Option, OptGroup } = Select

	return (
		<>
			<div className="cp-row">
				<div className="cp-title">Формат продукции</div>
				<div className="cp-item-line">
					<div className="cp-item">
						<NumericInput
							value={form.format.height}
							onChange={(val) => setForm({...form, format: {...form.format, height: val}})}
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
				<div className="cp-title">Блок</div>
				<div className="cp-item-line">
					<div className="cp-item">
						<Select
							dropdownAlign={{ offset: [0, 10] }}
							placeholder="Клеевое покрытие**"
							suffixIcon={<IconSelect/>}
							value={form.params.coating}
							onChange={(val) => setForm({...form, params: {...form.params, coating: val}})}
							status={validate && !form.params.coating && "error"}
						>
							<OptGroup label="Клеевое покрытие*">
								<Option value='Переменное клеевое покрытие (позволяет оклеивать стикеры, не оставляя следов на поверхности)'>Переменное клеевое покрытие (позволяет оклеивать стикеры, не оставляя следов на поверхности)</Option>
								<Option value='Постоянное клеевое покрытие (отличается максимальной прочностью сцепления)'>Постоянное клеевое покрытие (отличается максимальной прочностью сцепления)</Option>
							</OptGroup>
						</Select>
					</div>
				</div>
			</div>
		</>
	);
};

export default Labels;
