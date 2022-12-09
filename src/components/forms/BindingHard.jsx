import React, {useEffect, useState} from 'react';
import Radio from "antd/es/radio";
import IconRadio from "../../assets/icons/IconRadio";
import Input from "antd/es/input";
import {Select} from "antd";
import IconSelect from "../../assets/icons/IconSelect";

const BindingHard = ({ visible, animated }) => {
	const { Option, OptGroup } = Select
	const [form, setForm] = useState({
		cover: '',
		additionalFinishing: '',
		coverLamination: null
	});

	useEffect(() => {
		console.log(form.cover);
	},[form.cover])

	return (
		<div className={ 'binding-hard' + (animated ? ' animate' : '') + (visible ? ' show' : '')}
			 style={{ height: animated ? visible ? form.cover === 'Картон /  картон с поролоном' ? '76.4rem' : '66.4rem' : '0' : '' }}
		>
			<div className="cp-row">
				<div className="cp-title">Обложка</div>
				<div className="cp-item-line">
					<Radio.Group value={form.cover} onChange={(e) => setForm({...form, cover: e.target.value})} className="flex-radio" buttonStyle="solid">
						<Radio.Button value="переплет 7бц"><IconRadio/>переплет 7бц</Radio.Button>
						<Radio.Button value="переплетный материал (7б)"><IconRadio/>переплетный материал (7б)</Radio.Button>
						<Radio.Button value="Картон /  картон с поролоном"><IconRadio/>Картон /  картон с поролоном</Radio.Button>
					</Radio.Group>
				</div>
				<div className={form.cover === 'Картон /  картон с поролоном' ? "cp-item-line hidden-line" : "cp-item-line hidden-line hidden"}>
					<div className="cp-item">
						<Input placeholder="Толщина картона (мм)*"/>
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
								<Option value='газетная'>газетная</Option>
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
							placeholder="Наличие вставок*"
							suffixIcon={<IconSelect/>}
						>
							<OptGroup label="Наличие вставок">
								<Option value='да'>да</Option>
								<Option value='нет'>нет</Option>
							</OptGroup>
						</Select>
					</div>
					<div className="cp-item">
						<Select
							dropdownAlign={{ offset: [0, 10] }}
							placeholder="Красочность форзацев*"
							suffixIcon={<IconSelect/>}
						>
							<OptGroup label="Красочность форзацев">
								<Option value='белые (без запечатки)'>белые (без запечатки)</Option>
								<Option value='цветные с 1-ой стороны'>цветные с 1-ой стороны</Option>
								<Option value='цветные с 2-ух сторон'>цветные с 2-ух сторон</Option>
							</OptGroup>
						</Select>
					</div>
					<div className="cp-item">
						<Select
							dropdownAlign={{ offset: [0, 10] }}
							placeholder="Корешок*"
							suffixIcon={<IconSelect/>}
						>
							<OptGroup label="Корешок">
								<Option value='прямой'>прямой</Option>
								<Option value='кругленый'>кругленый</Option>
							</OptGroup>
						</Select>
					</div>
				</div>
				<div className="cp-item-line">
					<div className="cp-item">
						<Select
							dropdownAlign={{ offset: [0, 10] }}
							placeholder="каптал*"
							suffixIcon={<IconSelect/>}
						>
							<OptGroup label="каптал">
								<Option value='белый'>белый</Option>
								<Option value='цветной'>цветной</Option>
							</OptGroup>
						</Select>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BindingHard;
