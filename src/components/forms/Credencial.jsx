import React, {useEffect, useState} from 'react';
import Input from "antd/es/input";
import Button from "antd/es/button";
import IconButton from "../../assets/icons/IconButton";
import {Select} from "antd";
import IconSelect from "../../assets/icons/IconSelect";

const Credential = ({setStep, user, setUser, request, setRequest}) => {
	const [errUser, setErrUser] = useState(false);
	const [checkForm, setCheckForm] = useState(false);
	const { Option, OptGroup } = Select

	const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
	const isEmailValid = (value) => {
		return EMAIL_REGEXP.test(value);
	}

	const validateUser = () => {
		return !!(user.name &&
			user.surname &&
			user.phone &&
			user.entity &&
			user.email && isEmailValid(user.email))
	}

	useEffect(() => {
		if (checkForm) {
			setErrUser(!validateUser())
		}
	},[user, checkForm])

	return (
		<div className="cp-credential-form">
			{request.skipForm &&
				<div className="cp-row">
					<div className="cp-title">Контактные данные</div>
					<div className="cp-item-line">
						<div className="cp-item">
							<Select
								dropdownAlign={{ offset: [0, 10] }}
								placeholder="выберите менеджера"
								suffixIcon={<IconSelect/>}
								value={request.manager}
								onChange={(val) => setRequest({...request, manager: val})}
							>
								<OptGroup label="выберите менеджера">
									<Option value='Леонид Космодемьянский'>Леонид Космодемьянский</Option>
									<Option value='Валерия Ибрагимова'>Валерия Ибрагимова</Option>
									<Option value='Анастасия Перепелкина'>Анастасия Перепелкина</Option>
									<Option value='Л Космодемьянский'>Л Космодемьянский</Option>
									<Option value='В Ибрагимова'>В Ибрагимова</Option>
									<Option value='А Перепелкина'>А Перепелкина</Option>
								</OptGroup>
							</Select>
						</div>
					</div>
				</div>
			}
			<div className="cp-row">
				<div className="cp-title">Контактные данные</div>
				<div className="cp-item-line">
					<div className="cp-item">
						<Input
							placeholder="Фамилия*"
							value={user.surname}
							onChange={(e) => setUser({...user, surname: e.target.value})}
							status={checkForm && !user.surname && 'error'}
						/>
					</div>
					<div className="cp-item">
						<Input
							placeholder="имя*"
							value={user.name}
							onChange={(e) => setUser({...user, name: e.target.value})}
							status={checkForm && !user.name && 'error'}
						/>
					</div>
					<div className="cp-item">
						<Input
							placeholder="Отчество"
							value={user.patronymic}
							onChange={(e) => setUser({...user, patronymic: e.target.value})}
						/>
					</div>
				</div>
				<div className="cp-item-line">
					<div className="cp-item">
						<Input
							placeholder="Организация*"
							value={user.entity}
							onChange={(e) => setUser({...user, entity: e.target.value})}
							status={checkForm && !user.entity && 'error'}
						/>
					</div>
					<div className="cp-item">
						<Input
							placeholder="контактный телефон*"
							value={user.phone}
							onChange={(e) => setUser({...user, phone: e.target.value})}
							status={checkForm && !user.phone && 'error'}
						/>
					</div>
					<div className={checkForm && !isEmailValid(user.email) ? 'email cp-item email-format-err' : 'cp-item email'}>
						<Input
							placeholder="e-mail*"
							value={user.email}
							onChange={(e) => setUser({...user, email: e.target.value})}
							status={checkForm && (!user.email || !isEmailValid(user.email)) && 'error'}
						/>
					</div>
				</div>
				{request.skipForm &&
					<div className="cp-row last">
						<div className="cp-title">Комментарий</div>
						<textarea
							value={request.formFooter.comment}
							onChange={(e) => setRequest({...request, formFooter: {...request.formFooter, comment: e.target.value}})}
							placeholder="Оставьте ваши пожелания к заказу"
						/>
					</div>
				}
				<div className="cp-actions">
					<div className={ errUser && checkForm ? "cp-actions-error show" : "cp-actions-error" }>
						<svg className="cp-actions-error-icon" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="22.5" cy="22.5" r="22.5" fill="#FF3B4C"/>
							<g clip-path="url(#clip0_905_7804)">
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
					<div className= { errUser && checkForm ? "cp-actions-text hide" : "cp-actions-text" }>
						Нажимая на кнопку “Далее”, я даю <a href="#">согласие на обработку персональных данных</a>
					</div>
					<div className="btn-white" onClick={() => setStep(1)}><span className="mobHide">Вернуться&nbsp;</span><span>назад</span></div>
					<Button className="with-arrow" type="primary"
							onClick={() => {
								if (validateUser()) {
									setCheckForm(false)
									setStep(3)
								} else {
									setCheckForm(true)
								}
							}}>
						Далее<IconButton/></Button>
				</div>
			</div>
		</div>
	);
};

export default Credential;
