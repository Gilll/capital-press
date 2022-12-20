import React from 'react';
import Input from "antd/es/input";
import {Select} from "antd";
import IconSelect from "../../assets/icons/IconSelect";

const DeskCalender = ({form, setForm, validate}) => {
	const { Option, OptGroup } = Select

	return (
		<>
			<div className="cp-row">
				<div className="cp-title">Подложка</div>
				<div className="cp-item-line">
					<div className="cp-item">
						<Input
							value={form.substrate.height}
							onChange={(e) => setForm({...form, substrate: {...form.substrate, height: e.target.value}})}
							placeholder="Высота (мм)*"
							status={validate && !form.substrate.height && "error"}
						/>
					</div>
					<div className="cp-item">
						<Input
							placeholder="Ширина (мм)*"
							value={form.substrate.width}
							onChange={(e) => setForm({...form, substrate: {...form.substrate, width: e.target.value}})}
							status={validate && !form.substrate.width && "error"}
						/>
					</div>
					<div className="cp-item">
						<Input
							placeholder="Плотность картона*"
							value={form.substrate.paperDensity}
							onChange={(e) => setForm({...form, substrate: {...form.substrate, paperDensity: e.target.value}})}
							status={validate && !form.substrate.paperDensity && "error"}
						/>
					</div>
				</div>
			</div>
			<div className="cp-row">
				<div className="cp-title">Блок</div>
				<div className="cp-item-line">
					<div className="cp-item">
						<Input
							placeholder="Кол-во листов блока*"
							value={form.block.pagesCount}
							onChange={(e) => setForm({...form, block: {...form.block, pagesCount: e.target.value}})}
							status={validate && !form.block.pagesCount && "error"}
						/>
					</div>
					<div className="cp-item">
						<Input
							placeholder="Размер листов блока (высота)*"
							value={form.block.height}
							onChange={(e) => setForm({...form, block: {...form.block, height: e.target.value}})}
							status={validate && !form.block.height && "error"}
						/>
					</div>
					<div className="cp-item">
						<Input
							placeholder="Размер листа блока (ширина)*"
							value={form.block.width}
							onChange={(e) => setForm({...form, block: {...form.block, width: e.target.value}})}
							status={validate && !form.block.width && "error"}
						/>
					</div>
				</div>
				<div className="cp-item-line">
					<div className="cp-item">
						<Input
							placeholder="Плотность листов блока*"
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
