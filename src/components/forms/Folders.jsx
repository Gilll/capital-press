import React from 'react';
import Input from "antd/es/input";
import {Select} from "antd";
import IconSelect from "../../assets/icons/IconSelect";
import AdditionalFinishing from "../rows/AditionalFinishing";

const Folders = () => {
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
				<div className="cp-title">Формат продукции</div>
				<div className="cp-item-line">
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
							placeholder="Материал*"
							suffixIcon={<IconSelect/>}
						>
							<OptGroup label="Материал">
								<Option value='бумага'>бумага</Option>
								<Option value='картон'>картон</Option>
							</OptGroup>
						</Select>
					</div>
					<div className="cp-item">
						<Input placeholder="Плотность (г/м2)*"/>
					</div>
				</div>
				<div className="cp-item-line">
					<div className="cp-item">
						<Select
							dropdownAlign={{ offset: [0, 10] }}
							placeholder="Штанцформа*"
							suffixIcon={<IconSelect/>}
						>
							<OptGroup label="Штанцформа">
								<Option value='стандартная'>стандартная</Option>
								<Option value='индивидуальная'>индивидуальная</Option>
							</OptGroup>
						</Select>
					</div>
				</div>
			</div>
			<AdditionalFinishing/>
		</>
	);
};

export default Folders;
