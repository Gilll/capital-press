import React from 'react';

const Finish = ({setStep, clearForm}) => {
	return (
		<>
			<svg className="icon-done" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
				<circle cx="60" cy="60" r="60" fill="#5CCD5A"/>
				<path d="M50.1275 83C48.358 83.0007 46.661 82.2974 45.4108 81.0452L31.1508 66.7904C29.6164 65.2555 29.6164 62.7675 31.1508 61.2326C32.6857 59.6982 35.1737 59.6982 36.7086 61.2326L50.1275 74.6515L85.6282 39.1508C87.1631 37.6164 89.6511 37.6164 91.186 39.1508C92.7204 40.6857 92.7204 43.1737 91.186 44.7086L54.8441 81.0452C53.594 82.2974 51.897 83.0007 50.1275 83Z" fill="white"/>
			</svg>
			<div className="finish-title">Спасибо, Ваш заказ принят!</div>
			<div className="finish-text">
				Ваш заказ успешно оформлен. Мы свяжемся с Вами в ближайшее время.<br/> Ваш номер заказа: <span>#31097534562</span>
			</div>
			<div className="finish-actions">
				<div className="btn-white" onClick={() => {
					clearForm()
					setStep(0)
				}}>На главную</div>
			</div>
		</>
	);
};

export default Finish;
