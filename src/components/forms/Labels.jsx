import React from 'react';
import Input from "antd/es/input";
import {Select} from "antd";
import IconSelect from "../../assets/icons/IconSelect";

const Labels = () => {
	const { Option, OptGroup } = Select

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
				<div className="cp-title">Блок</div>
				<div className="cp-item-line">
					<div className="cp-item">
						<Select
							dropdownAlign={{ offset: [0, 10] }}
							placeholder="Клеевое покрытие**"
							suffixIcon={<IconSelect/>}
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
