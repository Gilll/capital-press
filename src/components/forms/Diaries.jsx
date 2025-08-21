import React from 'react';
import BookFormat from "../rows/BookFormat";
import AdditionalFinishingHard from "../rows/AdditionalFinishingHard";
import Radio from "antd/es/radio";
import IconRadio from "../../assets/icons/IconRadio";
import {Select} from "antd";
import IconSelect from "../../assets/icons/IconSelect";
import NumericInput from "../UI/NumericInput";

const Diaries = ({form, setForm, validate}) => {
	const { Option, OptGroup } = Select

	return (
		<>
			<BookFormat validate={validate} format={form.format} setFormat={(val) => setForm({...form, format: val})}/>
			<div className="cp-row">
				<div className="cp-title">Обложка</div>
				<div className={validate && !form.cover.type ? "cp-item-line cp-item-line-error" : "cp-item-line"}>
					<Radio.Group value={form.cover.type} onChange={(e) => setForm({...form, cover: {...form.cover, type: e.target.value}})} className="flex-radio" buttonStyle="solid">
						<Radio.Button value="переплет 7бц"><IconRadio/>переплет 7бц</Radio.Button>
						<Radio.Button value="переплетный материал (7б)"><IconRadio/>переплетный материал (7б)</Radio.Button>
						<Radio.Button value="Картон /  картон с поролоном"><IconRadio/>Картон /  картон с поролоном</Radio.Button>
					</Radio.Group>
				</div>
				<div className={form.cover.type === 'Картон /  картон с поролоном' ? "cp-item-line hidden-line" : "cp-item-line hidden-line hidden"}>
					<div className="cp-item">
						<NumericInput
							value={form.cover.thickness}
							onChange={(val) => setForm({...form, cover: {...form.cover, thickness: val}})}
							placeholder="Толщина картона (мм)*"
							status={validate && !form.cover.thickness && "error"}
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
							placeholder="Тип блока*"
							suffixIcon={<IconSelect/>}
							value={form.block.type}
							onChange={(val) => setForm({...form, block: {...form.block, type: val}})}
						>
							<OptGroup label="Тип блока">
								<Option value='Стандартный'>Стандартный</Option>
								<Option value='Индивидуальный'>Индивидуальный</Option>
							</OptGroup>
						</Select>
					</div>
					<div className={form.block.type === 'Стандартный' ? "cp-item hidden-line" : "cp-item hidden-line hidden"}>
						<Select
							dropdownAlign={{ offset: [0, 10] }}
							placeholder="каптал*"
							suffixIcon={<IconSelect/>}
							value={form.block.standard.captal}
							onChange={(val) => setForm({...form, block: {...form.block, standard: {...form.block.standard, captal: val}}})}
							status={validate && !form.block.standard.captal && "error"}
						>
							<OptGroup label="каптал">
								<Option value='белый'>белый</Option>
								<Option value='цветной'>цветной</Option>
							</OptGroup>
						</Select>
					</div>
					<div className={form.block.type === 'Стандартный' ? "cp-item hidden-line" : "cp-item hidden-line hidden"}>
						<Select
							dropdownAlign={{ offset: [0, 10] }}
							placeholder="Красочность форзацев*"
							suffixIcon={<IconSelect/>}
							value={form.block.standard.colorfulEndpapers}
							onChange={(val) => setForm({...form, block: {...form.block, standard: {...form.block.standard, colorfulEndpapers: val}}})}
							status={validate && !form.block.standard.colorfulEndpapers && "error"}
						>
							<OptGroup label="Красочность форзацев">
								<Option value='черно-белая (1+1)'>черно-белая (1+1)</Option>
								<Option value='цветная (4+4)'>цветная (4+4)</Option>
							</OptGroup>
						</Select>
					</div>
				</div>
				<div className={form.block.type === 'Индивидуальный' ? "cp-item-line hidden-line" : "cp-item-line hidden-line hidden"}>
					<div className="cp-item">
						<Select
							dropdownAlign={{ offset: [0, 10] }}
							placeholder="Бумага*"
							suffixIcon={<IconSelect/>}
							value={form.block.individual.paper}
							onChange={(val) => setForm({...form, block: {...form.block, individual: {...form.block.individual, paper: val}}})}
							status={validate && !form.block.individual.paper && "error"}
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
							value={form.block.individual.paperDensity}
							onChange={(val) => setForm({...form, block: {...form.block, individual: {...form.block.individual, paperDensity: val}}})}
							status={validate && !form.block.individual.paperDensity && "error"}
						/>
					</div>
					<div className="cp-item">
						<Select
							dropdownAlign={{ offset: [0, 10] }}
							placeholder="Красочность печати*"
							suffixIcon={<IconSelect/>}
							value={form.block.individual.printColorfulness}
							onChange={(val) => setForm({...form, block: {...form.block, individual: {...form.block.individual, printColorfulness: val}}})}
							status={validate && !form.block.individual.printColorfulness && "error"}
						>
							<OptGroup label="Красочность печати">
								<Option value='черно-белая (1+1)'>черно-белая (1+1)</Option>
								<Option value='цветная (4+4)'>цветная (4+4)</Option>
							</OptGroup>
						</Select>
					</div>
				</div>
				<div className={form.block.type === 'Индивидуальный' ? "cp-item-line hidden-line" : "cp-item-line hidden-line hidden"}>
					<div className="cp-item">
						<Select
							dropdownAlign={{ offset: [0, 10] }}
							placeholder="Наличие вставок*"
							suffixIcon={<IconSelect/>}
							value={form.block.individual.inserts}
							onChange={(val) => setForm({...form, block: {...form.block, individual: {...form.block.individual, inserts: val}}})}
							status={validate && !form.block.individual.inserts && "error"}
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
							placeholder="Тип корешка*"
							suffixIcon={<IconSelect/>}
							value={form.block.individual.spine}
							onChange={(val) => setForm({...form, block: {...form.block, individual: {...form.block.individual, spine: val}}})}
							status={validate && !form.block.individual.spine && "error"}
						>
							<OptGroup label="Тип корешка">
								<Option value='прямой'>прямой</Option>
								<Option value='кругленый'>кругленый</Option>
							</OptGroup>
						</Select>
					</div>
					<div className="cp-item">
						<Select
							dropdownAlign={{ offset: [0, 10] }}
							placeholder="каптал*"
							suffixIcon={<IconSelect/>}
							value={form.block.individual.captal}
							onChange={(val) => setForm({...form, block: {...form.block, individual: {...form.block.individual, captal: val}}})}
							status={validate && !form.block.individual.captal && "error"}
						>
							<OptGroup label="каптал">
								<Option value='белый'>белый</Option>
								<Option value='цветной'>цветной</Option>
							</OptGroup>
						</Select>
					</div>
				</div>
			</div>
			<AdditionalFinishingHard validate={validate} finishing={form.finishing} setFinishing={(val) => setForm({...form, finishing: val})}/>
		</>
	);
};

export default Diaries;
