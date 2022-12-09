import React from 'react';
import Button from "antd/es/button";
import IconButton from "../../assets/icons/IconButton";

const Summary = ({setStep}) => {
	return (
		<div className="cp-summary-form">
			<div className="cp-row">
				<div className="cp-title">Подтверждение данных</div>
				<div className="cp-text">Проверьте и подтвердите правильность оформления заказа</div>
				<div className="cp-summary-box">

				</div>
				<div className="cp-actions">
					<div className="btn-white" onClick={() => setStep(2)}>Вернуться назад</div>
					<Button className="with-arrow" type="primary" onClick={() => setStep(4)}>Отправить<IconButton/></Button>
				</div>
			</div>
		</div>
	);
};

export default Summary;
