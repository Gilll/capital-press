import { Select } from 'antd';
import React, {useEffect, useState} from 'react';
import {categories} from "./utils/categoriesList";
import IconSelect from "./assets/icons/IconSelect";
import BooksHard from "./components/forms/BooksHard";
import BooksSoft from "./components/forms/BooksSoft";
import Leaflets from "./components/forms/Leaflets";
import Booklets from "./components/forms/Booklets";
import Catalogs from "./components/forms/Catalogs";
import Newspapers from "./components/forms/Newspapers";
import Diaries from "./components/forms/Diaries";
import Notepads from "./components/forms/Notepads";
import CalendarQuarterly from "./components/forms/CalendarQuarterly";
import DeskCalender from "./components/forms/DeskCalender";
import WallCalendar from "./components/forms/WallCalendar";
import HomeCalendar from "./components/forms/HomeCalendar";
import Folders from "./components/forms/Folders";
import Labels from "./components/forms/Labels";
import Button from "antd/es/button";
import IconButton from "./assets/icons/IconButton";
import FormFooter from "./components/rows/FormFooter";
import Download from "./components/forms/Download";
import Credential from "./components/forms/Credencial";
import Summary from "./components/forms/Summary";
import Posters from "./components/forms/Posters";
import Magazines from "./components/forms/Magazines";
import {
	booklets,
	booksHard,
	booksSoft, calendarQuarterly,
	catalogs, deskCalender,
	diaries, folders, homeCalendar, labels,
	leaflets,
	magazines,
	newspapers,
	notepads, wallCalendar
} from "./model/model";
import {validateForm} from "./utils/validate";
import Finish from "./components/forms/Finish";

function App() {
	const [currentStep, setCurrentStep] = useState(0);
	const { Option, OptGroup } = Select
	const [validate, setValidate] = useState(false)
	const [request, setRequest] = useState({
		formId: null,
		manager: null,
		form: {},
		skipForm: false,
		calendarType: null,
		calendarSize: null,
		formFooter: {
			circulation: null,
			comment: ''
		},
		user: {
			name: null,
			surname: null,
			patronymic: null,
			email: null,
			phone: null,
			entity: null
		}
	})

	const getForm = (val, ct) => {
		switch (val) {
			case categories.booksHard: return {...booksHard};
			case categories.booksSoft: return {...booksSoft};
			case categories.leaflets: return {...leaflets};
			case categories.posters: return {...leaflets};
			case categories.letterhead: return {...leaflets};
			case categories.booklets: return {...booklets};
			case categories.catalogs: return {...catalogs};
			case categories.brochures: return {...catalogs};
			case categories.magazines: return {...magazines};
			case categories.instructions: return {...magazines};
			case categories.newspapers: return {...newspapers};
			case categories.diaries: return {...diaries};
			case categories.notepads: return {...notepads};
			case categories.folders: return {...folders};
			case categories.labels: return {...labels};
			case categories.stickers: return {...labels};
			case categories.calendars: switch (ct) {
				case 'Квартальные календари': return {...calendarQuarterly};
				case 'Перекидные настенные календари': return {...wallCalendar};
				case 'Настольный календарь-домик': return {...homeCalendar};
				case 'перекидные настольные': return {...deskCalender};
				default: return {}
			}
			default: return {}
		}
	}

	useEffect(() => {
		console.log(request);
	},[request])

	const renderForm = () => {
		switch (request.formId) {
			case categories.booksHard: return <BooksHard validate={validate} form={request.form} setForm={(val) => setRequest({...request, form: val})}/>;
			case categories.booksSoft: return <BooksSoft validate={validate} form={request.form} setForm={(val) => setRequest({...request, form: val})}/>;
			case categories.leaflets: return <Leaflets validate={validate} form={request.form} setForm={(val) => setRequest({...request, form: val})}/>;
			case categories.posters: return <Posters validate={validate} form={request.form} setForm={(val) => setRequest({...request, form: val})}/>;
			case categories.letterhead: return <Leaflets validate={validate} form={request.form} setForm={(val) => setRequest({...request, form: val})}/>;
			case categories.booklets: return <Booklets validate={validate} form={request.form} setForm={(val) => setRequest({...request, form: val})}/>;
			case categories.catalogs: return <Catalogs validate={validate} form={request.form} setForm={(val) => setRequest({...request, form: val})}/>;
			case categories.brochures: return <Catalogs validate={validate} form={request.form} setForm={(val) => setRequest({...request, form: val})}/>;
			case categories.magazines: return <Magazines validate={validate} form={request.form} setForm={(val) => setRequest({...request, form: val})}/>;
			case categories.instructions: return <Magazines validate={validate} form={request.form} setForm={(val) => setRequest({...request, form: val})}/>;
			case categories.newspapers: return <Newspapers validate={validate} form={request.form} setForm={(val) => setRequest({...request, form: val})}/>;
			case categories.diaries: return <Diaries validate={validate} form={request.form} setForm={(val) => setRequest({...request, form: val})}/>;
			case categories.notepads: return <Notepads validate={validate} form={request.form} setForm={(val) => setRequest({...request, form: val})}/>;
			case categories.calendars:
				switch(request.calendarType) {
					case 'Квартальные календари': return <CalendarQuarterly validate={validate} form={request.form} setForm={(val) => setRequest({...request, form: val})}/>;
					case 'Перекидные настенные календари': return <WallCalendar validate={validate} form={request.form} setForm={(val) => setRequest({...request, form: val})}/>;
					case 'Настольный календарь-домик': return <HomeCalendar validate={validate} form={request.form} setForm={(val) => setRequest({...request, form: val})}/>;
					case 'перекидные настольные': return <DeskCalender validate={validate} form={request.form} setForm={(val) => setRequest({...request, form: val})}/>;
					default: return <></>
				}
			case categories.folders: return <Folders validate={validate} form={request.form} setForm={(val) => setRequest({...request, form: val})}/>;
			case categories.labels: return <Labels validate={validate} form={request.form} setForm={(val) => setRequest({...request, form: val})}/>;
			case categories.stickers: return <Labels validate={validate} form={request.form} setForm={(val) => setRequest({...request, form: val})}/>;
			default: return <></>
		}
	}

	const checkForm = () => {
		if (request.formId === categories.calendars) {
			if (validateForm(request.calendarType, request.form) && request.formFooter.circulation) {
				setCurrentStep(1);
				setValidate(false);
			} else {
				setValidate(true);
			}
		} else {
			if (validateForm(request.formId, request.form) && request.formFooter.circulation) {
				setCurrentStep(1);
				setValidate(false);
			} else {
				setValidate(true);
			}
		}
	}

  return (
  	<>
		{currentStep < 4 && <div className="cp-header">
			<div className={currentStep === 0 ? "cp-header__item active" : "cp-header__item"}>
				<div className="cp-header__step">1</div>
				<div className="cp-header__title">Параметры заказа</div>
			</div>
			<div className={currentStep === 1 ? "cp-header__item active" : "cp-header__item"}>
				<div className="cp-header__step">2</div>
				<div className="cp-header__title">загрузка макета</div>
			</div>
			<div className={currentStep > 1 ? "cp-header__item active" : "cp-header__item"}>
				<div className="cp-header__step">3</div>
				<div className="cp-header__title">Контактные данные</div>
			</div>
		</div>}
		<div className={ currentStep < 4 ? "cp-box" : "cp-box finish" }>
			{currentStep === 0 &&
				<>
					<div className={request.formId !== null ? "cp-special hidden" : "cp-special"}>
						<div className="cp-special-title mobShow">упрощенная форма запроса</div>
						<div className="cp-special-text mobShow">Вы можете воспользоваться формой быстрого запроса: загрузить файлы и оставить комментарии</div>
						<Button type="primary" onClick={() => {
							setRequest({...request, skipForm: true })
							setCurrentStep(1)
						}}>ОТправить файл</Button>
						<Button type="primary" onClick={() => {
							setRequest({...request, skipForm: true })
							setCurrentStep(1)
						}} className='arrow-only'><IconButton/></Button>
					</div>
					<div className="cp-row">
						<div className="cp-title">Выберите тип продукции</div>
						<div className="cp-item-line">
							<div className="cp-item">
								<Select
									value={request.formId}
									className="main-select"
									dropdownAlign={{ offset: [0, 10] }}
									onChange={(val) => {
										setRequest({...request, calendarType: null, calendarSize: null, form: getForm(val), formId: val, formFooter: {circulation: null, comment: ''}});
										setValidate(false)
									}}
									placeholder="Тип продукции"
									suffixIcon={<IconSelect/>}
								>
									<OptGroup label="Тип продукции">
										<Option value={categories.booksHard}>Книги в твердом переплете</Option>
										<Option value={categories.booksSoft}>Книги в мягком переплете</Option>
										<Option value={categories.leaflets}>Листовки</Option>
										<Option value={categories.posters}>Плакаты</Option>
										<Option value={categories.letterhead}>фирменные бланки</Option>
										<Option value={categories.booklets}>Буклеты</Option>
										<Option value={categories.catalogs}>Каталоги</Option>
										<Option value={categories.brochures}>Брошюры</Option>
										<Option value={categories.magazines}>Журналы</Option>
										<Option value={categories.instructions}>Инструкции</Option>
										<Option value={categories.newspapers}>Газеты</Option>
										<Option value={categories.diaries}>Ежедневники</Option>
										<Option value={categories.notepads}>Блокноты</Option>
										<Option value={categories.calendars}>Календари</Option>
										<Option value={categories.folders}>Папки самосборные </Option>
										<Option value={categories.labels}>Этикетки</Option>
										<Option value={categories.stickers}>Стикеры</Option>
									</OptGroup>
								</Select>
							</div>
							<div className={request.formId === categories.calendars ? "cp-item hidden-line" : "cp-item hidden-line hidden"}>
								<Select
									dropdownAlign={{ offset: [0, 10] }}
									placeholder="Тип календаря*"
									suffixIcon={<IconSelect/>}
									value={request.calendarType}
									onChange={(val) => {
										setRequest({...request,
											form: getForm(request.formId, val),
											formFooter: {circulation: null, comment: ''},
											calendarType: val
										})
									}}
								>
									<OptGroup label="Тип календаря">
										<Option value='Квартальные календари'>Квартальные календари</Option>
										<Option value='Перекидные настенные календари'>Перекидные настенные календари</Option>
										<Option value='Настольный календарь-домик'>Настольный календарь-домик</Option>
										<Option value='перекидные настольные'>перекидные настольные</Option>
									</OptGroup>
								</Select>
							</div>
							<div className={request.calendarType === 'Квартальные календари' && request.formId === categories.calendars ? "cp-item hidden-line" : "cp-item hidden-line hidden"}>
								<Select
									dropdownAlign={{ offset: [0, 10] }}
									placeholder="Размер*"
									suffixIcon={<IconSelect/>}
									value={request.calendarSize}
									onChange={(val) => setRequest({...request, calendarSize: val})}
									status={validate && !request.calendarSize && 'error'}
								>
									<OptGroup label="Размер">
										<Option value='мини'>мини</Option>
										<Option value='миди'>миди</Option>
										<Option value='макси'>макси</Option>
									</OptGroup>
								</Select>
							</div>
						</div>
					</div>
					{renderForm()}
					{request.formId !== null &&
						<FormFooter
							validate={validate}
							goToNext={checkForm}
							form={request.formFooter}
							setForm={(val) => setRequest({...request, formFooter: val})}
							warning={
								(categories.diaries === request.formId && 'Наша типография не осуществляет скругление, а также перфорацию углов ежедневников.') ||
								((categories.calendars === request.formId && request.calendarType === 'Квартальные календари') && 'Если блоки покупные, укажите их название полностью и цвет.')
							}
							tip={(categories.labels === request.formId || categories.stickers === request.formId) && 'от 300 экземпляров'}
						/>
					}
				</>
			}
			{currentStep === 1 &&
				<Download setStep={(val) => setCurrentStep(val)} setSkipForm={() => setRequest({...request, skipForm: false})}/>
			}
			{currentStep === 2 &&
				<Credential request={request} setRequest={(val) => setRequest(val)} user={request.user} setUser={(val) => setRequest({...request, user: val })} setStep={(val) => setCurrentStep(val)}/>
			}
			{currentStep === 3 &&
				<Summary request={request} setStep={(val) => setCurrentStep(val)}/>
			}
			{currentStep === 4 &&
				<Finish setStep={(val) => setCurrentStep(val)} clearForm={() => setRequest({...request, formId: null})}/>
			}
		</div>
		{request.formId === null &&
			<div className="special-holder"/>
		}
	</>
  );
}

export default App;
