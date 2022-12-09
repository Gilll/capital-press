import React from 'react';
import Input from "antd/es/input";
import {Select} from "antd";
import IconSelect from "../../assets/icons/IconSelect";

const DeskCalender = () => {
	const { Option, OptGroup } = Select

	return (
		<>
			<div className="cp-row">
				<div className="cp-title">Подложка</div>
				<div className="cp-item-line">
					<div className="cp-item">
						<Input placeholder="Высота (мм)*"/>
					</div>
					<div className="cp-item">
						<Input placeholder="Ширина (мм)*"/>
					</div>
					<div className="cp-item">
						<Input placeholder="Плотность картона*"/>
					</div>
				</div>
			</div>
			<div className="cp-row">
				<div className="cp-title">Блок</div>
				<div className="cp-item-line">
					<div className="cp-item">
						<Input placeholder="Кол-во листов блока*"/>
					</div>
					<div className="cp-item">
						<Input placeholder="Размер листов блока (высота)*"/>
					</div>
					<div className="cp-item">
						<Input placeholder="Размер листа блока (ширина)*"/>
					</div>
				</div>
				<div className="cp-item-line">
					<div className="cp-item">
						<Input placeholder="Плотность листов блока*"/>
					</div>
					<div className="cp-item">
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
					<div className="cp-item">
						<Select
							dropdownAlign={{ offset: [0, 10] }}
							placeholder="Скрепление листов блока*"
							suffixIcon={<IconSelect/>}
							value='пружина'
						>
							<OptGroup label="Скрепление листов блока">
								<Option value='пружина'>пружина</Option>
							</OptGroup>
						</Select>
					</div>
				</div>
			</div>
		</>
	);
};

export default DeskCalender;
