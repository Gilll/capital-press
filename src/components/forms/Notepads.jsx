import React from 'react';
import AdditionalFinishing from "../rows/AditionalFinishing";
import Input from "antd/es/input";
import {Select} from "antd";
import IconSelect from "../../assets/icons/IconSelect";

const Notepads = ({form, setForm, validate}) => {
	const { Option, OptGroup } = Select

	return (
		<>
			<div className="cp-row">
				<div className="cp-title">Формат издания</div>
				<div className="cp-item-line">
					<div className="cp-item">
						<Input
							value={form.format.height}
							onChange={(e) => setForm({...form, format: {...form.format, height: e.target.value}})}
							placeholder="Высота (мм)*"
							status={validate && !form.format.height && "error"}
						/>
					</div>
					<div className="cp-item">
						<Input
							value={form.format.width}
							onChange={(e) => setForm({...form, format: {...form.format, width: e.target.value}})}
							placeholder="Ширина (мм)*"
							status={validate && !form.format.width && "error"}
						/>
					</div>
					<div className="cp-item">
						<Input
							value={form.format.pagesCount}
							onChange={(e) => setForm({...form, format: {...form.format, pagesCount: e.target.value}})}
							placeholder="кол-во листов в блоке*"
							status={validate && !form.format.pagesCount && "error"}
						/>
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
							value={form.cover.paper}
							onChange={(val) => setForm({...form, cover: {...form.cover, paper: val}})}
							status={validate && !form.cover.paper && "error"}
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
						<Input
							placeholder="Плотность бумаги (г/м2)*"
							value={form.cover.paperDensity}
							onChange={(e) => setForm({...form, cover: {...form.cover, paperDensity: e.target.value}})}
							status={validate && !form.cover.paperDensity && "error"}
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
							value={form.block.paper}
							onChange={(val) => setForm({...form, block: {...form.block, paper: val}})}
							status={validate && !form.block.paper && "error"}
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
						<Input
							placeholder="Плотность бумаги (г/м2)*"
							value={form.block.paperDensity}
							onChange={(e) => setForm({...form, block: {...form.block, paperDensity: e.target.value}})}
							status={validate && !form.block.paperDensity && "error"}
						/>
					</div>
					<div className="cp-item">
						<Select
							dropdownAlign={{ offset: [0, 10] }}
							placeholder="Красочность печати*"
							suffixIcon={<IconSelect/>}
							value={form.block.printColorfulness}
							onChange={(val) => setForm({...form, block: {...form.block, printColorfulness: val}})}
							status={validate && !form.block.printColorfulness && "error"}
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
							value={form.block.bonding}
							onChange={(val) => setForm({...form, block: {...form.block, bonding: val}})}
							status={validate && !form.block.bonding && "error"}
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
							value={form.block.bondingBy}
							onChange={(val) => setForm({...form, block: {...form.block, bondingBy: val}})}
							status={validate && !form.block.bondingBy && "error"}
						>
							<OptGroup label="Скрепление по">
								<Option value='меньшей стороне'>меньшей стороне</Option>
								<Option value='большей стороне'>большей стороне</Option>
							</OptGroup>
						</Select>
					</div>
				</div>
			</div>
			<AdditionalFinishing validate={validate} finishing={form.finishing} setFinishing={(val) => setForm({...form, finishing: val})}/>
		</>
	);
};

export default Notepads;
