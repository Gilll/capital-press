import React from 'react';
import Input from "antd/es/input";
import Button from "antd/es/button";
import IconButton from "../../assets/icons/IconButton";

const Credential = ({setStep}) => {
	return (
		<div className="cp-credential-form">
			<div className="cp-row">
				<div className="cp-title">Контактные данные</div>
				<div className="cp-item-line">
					<div className="cp-item">
						<Input placeholder="Фамилия*"/>
					</div>
					<div className="cp-item">
						<Input placeholder="имя*"/>
					</div>
					<div className="cp-item">
						<Input placeholder="Отчество"/>
					</div>
				</div>
				<div className="cp-item-line">
					<div className="cp-item">
						<Input placeholder="Организация*"/>
					</div>
					<div className="cp-item">
						<Input placeholder="контактный телефон*"/>
					</div>
					<div className="cp-item">
						<Input placeholder="e-mail*"/>
					</div>
				</div>
				<div className="cp-actions">
					<div className="btn-white" onClick={() => setStep(1)}>Вернуться назад</div>
					<Button className="with-arrow" type="primary" onClick={() => setStep(3)}>Далее<IconButton/></Button>
				</div>
			</div>
		</div>
	);
};

export default Credential;
