import React from 'react';
import AdditionalFinishing from "../rows/AditionalFinishing";
import Input from "antd/es/input";
import {Select} from "antd";
import IconSelect from "../../assets/icons/IconSelect";

const Notepads = () => {
	const { Option, OptGroup } = Select

	return (
		<>
			<div className="cp-row">
				<div className="cp-title">Формат издания</div>
				<div className="cp-item-line">
					<div className="cp-item">
						<Input placeholder="Высота (мм)*"/>
					</div>
					<div className="cp-item">
						<Input placeholder="Ширина (мм)*"/>
					</div>
					<div className="cp-item">
						<Input placeholder="кол-во листов в блоке*"/>
					</div>
				</div>
			</div>
			<div className="cp-row">
				<div className="cp-title">Обложка</div>
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
								<Option value='дизайнерская'>дизайнерская</Option>
							</OptGroup>
						</Select>
					</div>
					<div className="cp-item">
						<Input placeholder="Плотность бумаги (г/м2)*"/>
					</div>
				</div>
			</div>
			<div className="cp-row">
				<div className="cp-title">Блок</div>
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
								<Option value='дизайнерская'>дизайнерская</Option>
							</OptGroup>
						</Select>
					</div>
					<div className="cp-item"><Input placeholder="Плотность бумаги (г/м2)*"/></div>
					<div className="cp-item">
						<Select
							dropdownAlign={{ offset: [0, 10] }}
							placeholder="Красочность печати*"
							suffixIcon={<IconSelect/>}
						>
							<OptGroup label="Красочность печати">
								<Option value='черно-белая (1+1)'>черно-белая (1+1)</Option>
								<Option value='цветная (4+4)'>цветная (4+4)</Option>
							</OptGroup>
						</Select>
					</div>
				</div>
				<div className="cp-item-line">
					<div className="cp-item">
						<Select
							dropdownAlign={{ offset: [0, 10] }}
							placeholder="Скрепление*"
							suffixIcon={<IconSelect/>}
							value="пружина"
						>
							<OptGroup label="Скрепление">
								<Option value='пружина'>пружина</Option>
							</OptGroup>
						</Select>
					</div>
					<div className="cp-item">
						<Select
							dropdownAlign={{ offset: [0, 10] }}
							placeholder="Скрепление по*"
							suffixIcon={<IconSelect/>}
						>
							<OptGroup label="Скрепление по">
								<Option value='меньшей стороне'>меньшей стороне</Option>
								<Option value='большей стороне'>большей стороне</Option>
							</OptGroup>
						</Select>
					</div>
				</div>
			</div>
			<AdditionalFinishing/>
		</>
	);
};

export default Notepads;
