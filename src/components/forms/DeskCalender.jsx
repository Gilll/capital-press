import React from 'react';
import {Select} from "antd";
import IconSelect from "../../assets/icons/IconSelect";
import NumericInput from "../UI/NumericInput";

const DeskCalender = ({form, setForm, validate}) => {
	const { Option, OptGroup } = Select

	return (
		<>
			<div className="cp-row">
				<div className="cp-title">Подложка</div>
				<div className="cp-item-line">
					<div className="cp-item">
						<NumericInput
							value={form.substrate.height}
							onChange={(val) => setForm({...form, substrate: {...form.substrate, height: val }})}
							placeholder="Высота (мм)*"
							status={validate && !form.substrate.height && "error"}
						/>
					</div>
					<div className="cp-item">
						<NumericInput
							placeholder="Ширина (мм)*"
							value={form.substrate.width}
							onChange={(val) => setForm({...form, substrate: {...form.substrate, width: val }})}
							status={validate && !form.substrate.width && "error"}
						/>
					</div>
					<div className="cp-item">
						<NumericInput
							placeholder="Плотность картона(г/м2)*"
							value={form.substrate.paperDensity}
							onChange={(val) => setForm({...form, substrate: {...form.substrate, paperDensity: val }})}
							status={validate && !form.substrate.paperDensity && "error"}
						/>
					</div>
				</div>
			</div>
			<div className="cp-row">
				<div className="cp-title">Блок</div>
				<div className="cp-item-line">
					<div className="cp-item">
						<NumericInput
							placeholder="Кол-во листов блока*"
							value={form.block.pagesCount}
							onChange={(val) => setForm({...form, block: {...form.block, pagesCount: val}})}
							status={validate && !form.block.pagesCount && "error"}
						/>
					</div>
					<div className="cp-item">
						<NumericInput
							placeholder="Размер листов блока (высота мм)*"
							value={form.block.height}
							onChange={(val) => setForm({...form, block: {...form.block, height: val}})}
							status={validate && !form.block.height && "error"}
						/>
					</div>
					<div className="cp-item">
						<NumericInput
							placeholder="Размер листа блока (ширина мм)*"
							value={form.block.width}
							onChange={(val) => setForm({...form, block: {...form.block, width: val}})}
							status={validate && !form.block.width && "error"}
						/>
					</div>
				</div>
				<div className="cp-item-line">
					<div className="cp-item">
						<NumericInput
							placeholder="Плотность листов блока(г/м2)*"
							value={form.block.paperDensity}
							onChange={(val) => setForm({...form, block: {...form.block, paperDensity: val}})}
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
							value={form.block.bonding}
							onChange={(val) => setForm({...form, block: {...form.block, bonding: val}})}
							status={validate && !form.block.bonding && "error"}
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
