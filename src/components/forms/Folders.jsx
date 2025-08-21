import React from 'react';
import {Select} from "antd";
import IconSelect from "../../assets/icons/IconSelect";
import AdditionalFinishing from "../rows/AditionalFinishing";
import NumericInput from "../UI/NumericInput";

const Folders = ({form, setForm, validate}) => {
	const { Option, OptGroup } = Select

	return (
		<>
			<div className="cp-row">
				<div className="cp-title">Формат продукции</div>
				<div className="cp-item-line">
					<div className="cp-item">
						<NumericInput
							value={form.format.height}
							onChange={(val) => setForm({...form, format: {...form.format, height: val}})}
							placeholder="Высота (мм)*"
							status={validate && !form.format.height && "error"}
						/>
					</div>
					<div className="cp-item">
						<NumericInput
							value={form.format.width}
							onChange={(val) => setForm({...form, format: {...form.format, width: val}})}
							placeholder="Ширина (мм)*"
							status={validate && !form.format.width && "error"}
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
							placeholder="Красочность печати*"
							suffixIcon={<IconSelect/>}
							value={form.params.printColorfulness}
							onChange={(val) => setForm({...form, params: {...form.params, printColorfulness: val}})}
							status={validate && !form.params.printColorfulness && "error"}
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
							value={form.params.paper}
							onChange={(val) => setForm({...form, params: {...form.params, paper: val}})}
							status={validate && !form.params.paper && "error"}
						>
							<OptGroup label="Материал">
								<Option value='бумага'>бумага</Option>
								<Option value='картон'>картон</Option>
							</OptGroup>
						</Select>
					</div>
					<div className="cp-item">
						<NumericInput
							placeholder="Плотность (г/м2)*"
							value={form.params.paperDensity}
							onChange={(val) => setForm({...form, params: {...form.params, paperDensity: val}})}
							status={validate && !form.params.paperDensity && "error"}
						/>
					</div>
				</div>
				<div className="cp-item-line">
					<div className="cp-item">
						<Select
							dropdownAlign={{ offset: [0, 10] }}
							placeholder="Штанцформа*"
							suffixIcon={<IconSelect/>}
							value={form.params.formST}
							onChange={(val) => setForm({...form, params: {...form.params, formST: val}})}
							status={validate && !form.params.formST && "error"}
						>
							<OptGroup label="Штанцформа">
								<Option value='стандартная'>стандартная</Option>
								<Option value='индивидуальная'>индивидуальная</Option>
							</OptGroup>
						</Select>
					</div>
				</div>
			</div>
			<AdditionalFinishing validate={validate} finishing={form.finishing} setFinishing={(val) => setForm({...form, finishing: val})}/>
		</>
	);
};

export default Folders;
