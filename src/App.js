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

function App() {
	const [currentStep, setCurrentStep] = useState(0);
	const [calendarType, setCalendarType] = useState();
	const { Option, OptGroup } = Select
	const [request, setRequest] = useState({
		formId: null,
		form: {},
		user: {}
	})

	const getForm = (val) => {
		switch (val) {
			case categories.booksHard: return {
				format: {
					width: null,
					height: null,
					rows: null
				},
				binding: {
					cover: {
						type: '',
						thickness: null
					},
					block: {

					}
				}
			};
			case categories.booksSoft: return {
				format: {
					width: null,
					height: null,
					rows: null
				},
				binding: {
					cover: {
						type: '',
						thickness: null
					},
					block: {

					}
				}
			};
			case categories.diaries: return {
				format: {
					width: null,
					height: null,
					rows: null
				},
				binding: {
					cover: {
						type: '',
						thickness: null
					},
					block: {

					}
				}
			};
			default: return {}
		}
	}

	useEffect(() => {
		console.log(request);
	},[request])

	const renderForm = () => {
		switch (request.formId) {
			case categories.booksHard: return <BooksHard form={request.form} setForm={(val) => setRequest({...request, form: val})}/>;
			case categories.booksSoft: return <BooksSoft form2={request.form} setForm2={(val) => setRequest({...request, form: val})}/>;
			case categories.leaflets: return <Leaflets/>;
			case categories.posters: return <Leaflets/>;
			case categories.letterhead: return <Leaflets/>;
			case categories.booklets: return <Booklets/>;
			case categories.catalogs: return <Catalogs/>;
			case categories.brochures: return <Catalogs/>;
			case categories.magazines: return <Catalogs/>;
			case categories.instructions: return <Catalogs/>;
			case categories.newspapers: return <Newspapers/>;
			case categories.diaries: return <Diaries form2={request.form} setForm2={(val) => setRequest({...request, form: val})}/>;
			case categories.notepads: return <Notepads/>;
			case categories.calendars:
				switch(calendarType) {
					case 'Квартальные календари': return <CalendarQuarterly/>;
					case 'Перекидные настенные календари': return <WallCalendar/>;
					case 'Настольный календарь-домик': return <HomeCalendar/>;
					case 'перекидные настольные': return <DeskCalender/>;
					default: return <></>
				}
			case categories.folders: return <Folders/>;
			case categories.labels: return <Labels/>;
			case categories.stickers: return <Labels/>;
			default: return <></>
		}
	}


  return (
  	<>
		<div className="cp-header">
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
		</div>
		<div className="cp-box">
			{currentStep === 0 &&
				<>
					<div className={request.formId >= 0 ? "cp-special hidden" : "cp-special"}>
						<Button type="primary">ОТправить файл</Button>
						<Button type="primary" className='arrow-only'><IconButton/></Button>
					</div>
					<div className="cp-row">
						<div className="cp-title">Выберите тип продукции</div>
						<div className="cp-item-line">
							<div className="cp-item">
								<Select
									value={request.formId}
									style={{ width: '38.6rem' }}
									dropdownAlign={{ offset: [0, 10] }}
									onChange={(val) => { setRequest({...request, form: getForm(val), formId: val});}}
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
									value={calendarType}
									onChange={(val) => setCalendarType(val)}
								>
									<OptGroup label="Тип календаря">
										<Option value='Квартальные календари'>Квартальные календари</Option>
										<Option value='Перекидные настенные календари'>Перекидные настенные календари</Option>
										<Option value='Настольный календарь-домик'>Настольный календарь-домик</Option>
										<Option value='перекидные настольные'>перекидные настольные</Option>
									</OptGroup>
								</Select>
							</div>
							<div className={calendarType === 'Квартальные календари' && request.formId === categories.calendars ? "cp-item hidden-line" : "cp-item hidden-line hidden"}>
								<Select
									dropdownAlign={{ offset: [0, 10] }}
									placeholder="Размер*"
									suffixIcon={<IconSelect/>}
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
							goToNext={() => setCurrentStep(1)}
							warning={categories.diaries === request.formId && 'Наша типография не осуществляет скругление, а также перфорацию углов ежедневников.'}
							tip={(categories.labels === request.formId || categories.stickers === request.formId) && 'от 300 экземпляров'}
						/>
					}
				</>
			}
			{currentStep === 1 &&
				<Download setStep={(val) => setCurrentStep(val)}/>
			}
			{currentStep === 2 &&
				<Credential setStep={(val) => setCurrentStep(val)}/>
			}
			{currentStep === 3 &&
				<Summary setStep={(val) => setCurrentStep(val)}/>
			}
		</div>
	</>
  );
}

export default App;
