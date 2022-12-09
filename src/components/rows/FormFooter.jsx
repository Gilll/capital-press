import React, {useState} from 'react';
import Input from "antd/es/input";
import Button from "antd/es/button";
import IconButton from "../../assets/icons/IconButton";
import {fakePost} from "../../utils/categoriesList";

const FormFooter = ({warning, tip, goToNext}) => {
	const [isLoading, setIsLoading] = useState(false)
	const trySubmit = () => {
		setIsLoading(true)
		fakePost().then(() => {
			setIsLoading(false)
			goToNext();
		})
	}

	return (
		<>
			<div className="cp-row">
				<div className="cp-title">Тираж {tip && <span>{tip}</span>}</div>
				<div className="cp-item-line">
					<div className="cp-item">
						<Input placeholder="тираж*"/>
					</div>
				</div>
			</div>
			<div className="cp-row last">
				<div className="cp-title">Комментарий</div>
				<textarea placeholder="Оставьте ваши пожелания к заказу"/>
			</div>
			{warning &&
				<div className='form-waning'>
					<div className="form-waning-icon">!</div>
					<span>{warning}</span>
				</div>
			}
			<div className="cp-actions">
				<Button loading={isLoading} className="with-arrow" type="primary" onClick={() => trySubmit()}>Далее<IconButton/></Button>
			</div>
		</>
	);
};

export default FormFooter;
