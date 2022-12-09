import React, {useState} from 'react';
import Input from "antd/es/input";
import IconSelect from "../../assets/icons/IconSelect";
import {Select} from "antd";
import AdditionalFinishing from "../rows/AditionalFinishing";
import BindingHard from "./BindingHard";
import BindingSoft from "../rows/BindingSoft";

const Catalogs = () => {
	const [binding, setBinding] = useState(null)
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
				<div className="cp-item-line">
					<div className="cp-item">
						<Select
							dropdownAlign={{ offset: [0, 10] }}
							placeholder="Переплет*"
							suffixIcon={<IconSelect/>}
							value={binding}
							onChange={(val) => setBinding(val)}
						>
							<OptGroup label="Переплет">
								<Option value='твердый'>твердый</Option>
								<Option value='мягкий'>мягкий</Option>
							</OptGroup>
						</Select>
					</div>
				</div>
			</div>
			<BindingHard animated={true} visible={binding === 'твердый'}/>
			<BindingSoft animated={true} visible={binding === 'мягкий'}/>
			<AdditionalFinishing/>
		</>
	);
};

export default Catalogs;
