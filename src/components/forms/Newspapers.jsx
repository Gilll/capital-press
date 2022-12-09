import React from 'react';
import Input from "antd/es/input";
import {Select} from "antd";
import IconSelect from "../../assets/icons/IconSelect";

const Newspapers = () => {
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
					<div className="cp-item">
						<Input placeholder="количество полос*"/>
					</div>
				</div>
			</div>
			<div className="cp-row">
				<div className="cp-title">Параметры</div>
				<div className="cp-item-line">
					<div className="cp-item">
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
					<div className="cp-item"><Input placeholder="Плотность бумаги (г/м2)"/></div>
					<div className="cp-item">
						<Select
							dropdownAlign={{ offset: [0, 10] }}
							placeholder="Красочность печати*"
							suffixIcon={<IconSelect/>}
						>
							<OptGroup label="Красочность печати">
								<Option value='черно-белая печать (1+1)'>черно-белая печать (1+1)</Option>
								<Option value='цветная печать (4+4)'>цветная печать (4+4)</Option>
							</OptGroup>
						</Select>
					</div>
				</div>
				<div className="cp-item-line">
					<div className="cp-item">
						<Select
							dropdownAlign={{ offset: [0, 10] }}
							placeholder="Способ скрепления страниц*"
							suffixIcon={<IconSelect/>}
						>
							<OptGroup label="Способ скрепления страниц">
								<Option value='скрепка'>скрепка</Option>
								<Option value='нет'>нет</Option>
							</OptGroup>
						</Select>
					</div>
				</div>
			</div>
		</>
	);
};

export default Newspapers;
