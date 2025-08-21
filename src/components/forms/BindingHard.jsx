import React from 'react';
import Radio from "antd/es/radio";
import IconRadio from "../../assets/icons/IconRadio";
import {Select} from "antd";
import IconSelect from "../../assets/icons/IconSelect";
import NumericInput from "../UI/NumericInput";

const BindingHard = ({ visible, animated, binding, setBinding, validate }) => {
	const { Option, OptGroup } = Select

	return (
		<div className={ 'binding-hard' + (animated ? ' animate' : '') + (visible ? ' show' : '')}
			 style={{ height: animated ? visible ? binding.cover.type === 'Картон /  картон с поролоном' ? '76.4rem' : '66.4rem' : '0' : '' }}
		>
			<div className="cp-row">
				<div className="cp-title">Обложка</div>
				<div className={validate && !binding.cover.type ? "cp-item-line cp-item-line-error" : "cp-item-line"}>
					<Radio.Group value={binding.cover.type} onChange={(e) => setBinding({...binding, cover: {...binding.cover, type: e.target.value, thickness: null}})} className="flex-radio" buttonStyle="solid">
						<Radio.Button value="переплет 7бц"><IconRadio/>переплет 7бц</Radio.Button>
						<Radio.Button value="переплетный материал (7б)"><IconRadio/>переплетный материал (7б)</Radio.Button>
						<Radio.Button value="Картон /  картон с поролоном"><IconRadio/>Картон /  картон с поролоном</Radio.Button>
					</Radio.Group>
				</div>
				<div className={binding.cover.type === 'Картон /  картон с поролоном' ? "cp-item-line hidden-line" : "cp-item-line hidden-line hidden"}>
					<div className="cp-item">
						<NumericInput
							value={binding.cover.thickness}
							onChange={(val) => setBinding({...binding, cover: {...binding.cover, thickness: val}})}
							placeholder="Толщина картона (мм)*"
							status={validate && !binding.cover.thickness && "error"}
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
							placeholder="Бумага*"
							suffixIcon={<IconSelect/>}
							value={binding.block.paper}
							onChange={(val) => setBinding({...binding, block: {...binding.block, paper: val}})}
							status={validate && !binding.block.paper && "error"}
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
					<div className="cp-item">
						<NumericInput
							placeholder="Плотность бумаги (г/м2)*"
							value={binding.block.paperDensity}
							onChange={(val) => setBinding({...binding, block: {...binding.block, paperDensity: val}})}
							status={validate && !binding.block.paperDensity && "error"}
						/>
					</div>
					<div className="cp-item">
						<Select
							dropdownAlign={{ offset: [0, 10] }}
							placeholder="Красочность печати*"
							suffixIcon={<IconSelect/>}
							value={binding.block.printColorfulness}
							onChange={(val) => setBinding({...binding, block: {...binding.block, printColorfulness: val}})}
							status={validate && !binding.block.printColorfulness && "error"}
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
							value={binding.block.inserts}
							onChange={(val) => setBinding({...binding, block: {...binding.block, inserts: val}})}
							status={validate && !binding.block.inserts && "error"}
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
							value={binding.block.endpapersColorful}
							onChange={(val) => setBinding({...binding, block: {...binding.block, endpapersColorful: val}})}
							status={validate && !binding.block.endpapersColorful && "error"}
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
							value={binding.block.spine}
							onChange={(val) => setBinding({...binding, block: {...binding.block, spine: val}})}
							status={validate && !binding.block.spine && "error"}
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
							value={binding.block.captal}
							onChange={(val) => setBinding({...binding, block: {...binding.block, captal: val}})}
							status={validate && !binding.block.captal && "error"}
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
