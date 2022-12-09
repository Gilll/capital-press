import React from 'react';
import Input from "antd/es/input";
import {Select} from "antd";
import IconSelect from "../../assets/icons/IconSelect";

const Booklets = () => {
	const { Option, OptGroup } = Select

	return (
		<>
			<div className="cp-row">
				<div className="cp-title">Размер в сложенном виде</div>
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
				<div className="cp-title">Размер в развороте</div>
				<div className="cp-item-line">
					<div className="cp-item">
						<Input placeholder="Ширина (мм)*"/>
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
					<div className="cp-item">
						<Select
							dropdownAlign={{ offset: [0, 10] }}
							placeholder="Красочность печати*"
							suffixIcon={<IconSelect/>}
						>
							<OptGroup label="Красочность печати">
								<Option value='черно-белая, печать с 2-х сторон (1+1)'>черно-белая, печать с 2-х сторон (1+1)</Option>
								<Option value='цветная печать с 2-х сторон (4+4)'>цветная, печать с 2-х сторон (4+4)</Option>
							</OptGroup>
						</Select>
					</div>
					<div className="cp-item"><Input placeholder="Количесвто фальцев*"/></div>
				</div>
				<div className="cp-item-line">
					<div className="cp-item">
						<Input placeholder="Ширина (мм)*"/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Booklets;
