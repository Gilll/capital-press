import React from 'react';
import Input from "antd/es/input";
import {Select} from "antd";
import IconSelect from "../../assets/icons/IconSelect";

const BindingSoft = ({ visible, animated }) => {
	const { Option, OptGroup } = Select

	return (
		<div className={ 'binding-soft' + (animated ? ' animate' : '') + (visible ? ' show' : '')}
			 style={{ height: animated ? visible ? '50.4rem' : '0' : '' }}
		>
			<div className="cp-row">
				<div className="cp-title">Обложка</div>
				<div className="cp-item-line">
					<div className="cp-item">
						<Input placeholder="Плотность бумаги (г/м2)*"/>
					</div>
					<div className="cp-item">
						<Select
							dropdownAlign={{ offset: [0, 10] }}
							placeholder="Красочность печати*"
							suffixIcon={<IconSelect/>}
						>
							<OptGroup label="Красочность печати">
								<Option value='цветная с одной стороны (4+0)'>цветная с одной стороны (4+0)</Option>
								<Option value='цветная (4+4)'>цветная с двух сторон (4+4)</Option>
							</OptGroup>
						</Select>
					</div>
				</div>
			</div>
			<div className="cp-row">
				<div className="cp-title">Блок</div>
				<div className="cp-item-line">
					<div className="cp-item">
						<Select
							dropdownAlign={{ offset: [0, 10] }}
							placeholder="Способ скрепления страниц*"
							suffixIcon={<IconSelect/>}
						>
							<OptGroup label="Способ скрепления страниц">
								<Option value='клеевое'>клеевое</Option>
								<Option value='клеевое швейное'>клеевое швейное</Option>
							</OptGroup>
						</Select>
					</div>
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
					<div className="cp-item"><Input placeholder="Плотность бумаги (г/м2)"/></div>
				</div>
				<div className="cp-item-line">
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
			</div>
		</div>
	);
};

export default BindingSoft;
