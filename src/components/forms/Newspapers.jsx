import React from 'react';
import Input from "antd/es/input";
import {Select} from "antd";
import IconSelect from "../../assets/icons/IconSelect";

const Newspapers = ({form, setForm, validate}) => {
	const { Option, OptGroup } = Select

	return (
		<>
			<div className="cp-row">
				<div className="cp-title">Формат продукции</div>
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
							value={form.format.row}
							onChange={(e) => setForm({...form, format: {...form.format, row: e.target.value}})}
							placeholder="количество полос*"
							status={validate && !form.format.row && "error"}
						/>
					</div>
				</div>
			</div>
			<div className="cp-row">
				<div className="cp-title">Параметры</div>
				<div className="cp-item-line">
					<div className="cp-item">
						<Select
							dropdownAlign={{ offset: [0, 10] }}
							placeholder="Бумага*"
							suffixIcon={<IconSelect/>}
							value={form.params.paper}
							onChange={(val) => setForm({...form, params: {...form.params, paper: val}})}
							status={validate && !form.params.paper && "error"}
						>
							<OptGroup label="Бумага">
								<Option value='офсетная'>офсетная</Option>
								<Option value='мелованная глянцевая'>мелованная глянцевая</Option>
								<Option value='мелованная матовая'>мелованная матовая</Option>
							</OptGroup>
						</Select>
					</div>
					<div className="cp-item">
						<Input
							value={form.params.paperDensity}
							onChange={(e) => setForm({...form, params: {...form.params, paperDensity: e.target.value}})}
							placeholder="Плотность бумаги (г/м2)*"
							status={validate && !form.params.paperDensity && "error"}
						/>
					</div>
					<div className="cp-item">
						<Select
							dropdownAlign={{ offset: [0, 10] }}
							placeholder="Красочность печати*"
							suffixIcon={<IconSelect/>}
							value={form.params.printColorfulness}
							onChange={(val) => setForm({...form, params: {...form.params, printColorfulness: val}})}
							status={validate && !form.params.printColorfulness && "error"}
						>
							<OptGroup label="Красочность печати">
								<Option value='черно-белая печать (1+1)'>черно-белая печать (1+1)</Option>
								<Option value='цветная печать (4+4)'>цветная печать (4+4)</Option>
							</OptGroup>
						</Select>
					</div>
				</div>
				<div className="cp-item-line">
					<div className="cp-item">
						<Select
							dropdownAlign={{ offset: [0, 10] }}
							placeholder="Способ скрепления страниц*"
							suffixIcon={<IconSelect/>}
							value={form.params.pageBinding}
							onChange={(val) => setForm({...form, params: {...form.params, pageBinding: val}})}
							status={validate && !form.params.pageBinding && "error"}
						>
							<OptGroup label="Способ скрепления страниц">
								<Option value='скрепка'>скрепка</Option>
								<Option value='нет'>нет</Option>
							</OptGroup>
						</Select>
					</div>
				</div>
			</div>
		</>
	);
};

export default Newspapers;
