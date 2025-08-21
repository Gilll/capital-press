import React, {useEffect, useState} from 'react';
import Button from "antd/es/button";
import IconButton from "../../assets/icons/IconButton";
import NumericInput from "../UI/NumericInput";

const FormFooter = ({warning, tip, goToNext, validate, form, setForm}) => {
	const [showWarning, setShowWarning] = useState(false)
	const show = () => {
		if (validate) {
			setShowWarning(true)
			setTimeout(() => setShowWarning(false), 2000)
		}
	}

	useEffect(() => {
		show()
	},[validate])

	return (
		<>
			<div className="cp-row">
				<div className="cp-title">Тираж {tip && <span>{tip}</span>}</div>
				<div className="cp-item-line">
					<div className="cp-item">
						<NumericInput
							value={form.circulation}
							onChange={(val) => setForm({...form, circulation: val })}
							placeholder="тираж*"
							status={validate && !form.circulation && "error"}
						/>
					</div>
				</div>
			</div>
			<div className="cp-row last">
				<div className="cp-title">Комментарий</div>
				<textarea
					value={form.comment}
					onChange={(e) => setForm({...form, comment: e.target.value})}
					placeholder="Оставьте ваши пожелания к заказу"
				/>
			</div>
			{warning &&
				<div className='form-waning'>
					<div className="form-waning-icon">!</div>
					<span>{warning}</span>
				</div>
			}
			<div className="cp-actions">
				<div className={ showWarning ? "cp-actions-error show" : "cp-actions-error" }>
					<svg className="cp-actions-error-icon" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="22.5" cy="22.5" r="22.5" fill="#FF3B4C"/>
						<g clipPath="url(#clip0_905_7804)">
							<path d="M33.5221 27.2478L25.3973 12.3123C24.0919 10.1147 20.9098 10.1118 19.6027 12.3123L11.4783 27.2478C10.1438 29.4934 11.7594 32.337 14.3749 32.337H30.6248C33.2381 32.337 34.8566 29.4957 33.5221 27.2478ZM22.5 29.6417C21.7571 29.6417 21.1523 29.037 21.1523 28.2941C21.1523 27.5511 21.7571 26.9464 22.5 26.9464C23.2429 26.9464 23.8476 27.5511 23.8476 28.2941C23.8476 29.037 23.2429 29.6417 22.5 29.6417ZM23.8476 24.2511C23.8476 24.994 23.2429 25.5987 22.5 25.5987C21.7571 25.5987 21.1523 24.994 21.1523 24.2511V17.5128C21.1523 16.7699 21.7571 16.1652 22.5 16.1652C23.2429 16.1652 23.8476 16.7699 23.8476 17.5128V24.2511Z" fill="white"/>
						</g>
						<defs>
							<clipPath id="clip0_905_7804">
								<rect width="23" height="23" fill="white" transform="translate(11 10)"/>
							</clipPath>
						</defs>
					</svg>
					<div>Пожалуйста, заполните все обязательные поля</div>
				</div>
				<Button className="with-arrow" type="primary"
						onClick={() => {
							goToNext()
							show()
						}}
				>Далее<IconButton/></Button>
			</div>
		</>
	);
};

export default FormFooter;
