import React, {useState} from 'react';
import Button from "antd/es/button";
import IconButton from "../../assets/icons/IconButton";
import {categories} from "../../utils/categoriesList";

const Summary = ({setStep, request}) => {
	const [fake, setFake] = useState(false);
	const fakePost = () => {
		setFake(true);
		setTimeout(() => {
			setFake(false)
			setStep(4)
		}, 2000)
	}
	const renderResults = (id, form) => {
		switch (id) {
			case categories.booksHard: return <>
				<div className="sum-block">
					<div className="sum-block-title">Формат издания</div>
					<div className="sum-row">
						<div className="sum-title">Тип продукции:</div>
						<div className="sum-val">Книги в твердом переплете</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Тираж:</div>
						<div className="sum-val">{request.formFooter.circulation} экземпляров</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Формат (Ш х В):</div>
						<div className="sum-val">{form.format.width} x {form.format.height} мм</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Количество полос:</div>
						<div className="sum-val">{form.format.row}</div>
					</div>
				</div>
				<div className="sum-block">
					<div className="sum-block-title">Обложка</div>
					<div className="sum-row">
						<div className="sum-title">Переплет:</div>
						<div className="sum-val">{form.binding.cover.type}</div>
					</div>
					{form.binding.cover.thickness &&
						<div className="sum-row">
							<div className="sum-title">Толщина картона (мм):</div>
							<div className="sum-val">{form.binding.cover.thickness}</div>
						</div>
					}
				</div>
				<div className="sum-block">
					<div className="sum-block-title">Блок</div>
					<div className="sum-row">
						<div className="sum-title">Бумага:</div>
						<div className="sum-val">{form.binding.block.paper}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Плотность бумаги  (г/м2):</div>
						<div className="sum-val">{form.binding.block.paperDensity}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Красочность печати:</div>
						<div className="sum-val">{form.binding.block.printColorfulness}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Наличие вставок:</div>
						<div className="sum-val">{form.binding.block.inserts}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Красочность форзацев:</div>
						<div className="sum-val">{form.binding.block.endpapersColorful}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Tип корешка:</div>
						<div className="sum-val">{form.binding.block.spine}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Каптал:</div>
						<div className="sum-val">{form.binding.block.captal}</div>
					</div>
				</div>
				<div className="sum-block">
					<div className="sum-block-title">Дополнительная отделка</div>
					<div className="sum-row">
						<div className="sum-title">Выборочный УФ-ЛАК:</div>
						<div className="sum-val">{form.finishing.additionalFinishing.includes('выборочный уф-ЛАК') ? 'Да' : 'Нет'}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Тиснение фольгой:</div>
						<div className="sum-val">{form.finishing.additionalFinishing.includes('Тиснение фольгой') ? 'Да' : 'Нет'}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Блинтовое тиснение:</div>
						<div className="sum-val">{form.finishing.additionalFinishing.includes('Блинтовое тиснение') ? 'Да' : 'Нет'}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Ляссе:</div>
						<div className="sum-val">{form.finishing.additionalFinishing.includes('Ляссе') ? 'Да' : 'Нет'}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Ламинация обложки:</div>
						<div className="sum-val">{form.finishing.additionalFinishing.includes('ламинация обложки') ? form.finishing.coverLamination : 'Нет'}</div>
					</div>
				</div>
			</>;
			case categories.booksSoft: return <>
				<div className="sum-block">
					<div className="sum-block-title">Формат издания</div>
					<div className="sum-row">
						<div className="sum-title">Тип продукции:</div>
						<div className="sum-val">Книги в мягком переплете</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Тираж:</div>
						<div className="sum-val">{request.formFooter.circulation} экземпляров</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Формат (Ш х В):</div>
						<div className="sum-val">{form.format.width} x {form.format.height} мм</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Количество полос:</div>
						<div className="sum-val">{form.format.row}</div>
					</div>
				</div>
				<div className="sum-block">
					<div className="sum-block-title">Обложка</div>
					<div className="sum-row">
						<div className="sum-title">Плотность бумаги (г/м2):</div>
						<div className="sum-val">{form.binding.cover.thickness}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Красочность печати обложки:</div>
						<div className="sum-val">{form.binding.cover.printColorfulness}</div>
					</div>
				</div>
				<div className="sum-block">
					<div className="sum-block-title">Блок</div>
					<div className="sum-row">
						<div className="sum-title">Бумага:</div>
						<div className="sum-val">{form.binding.block.paper}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Плотность бумаги (г/м2):</div>
						<div className="sum-val">{form.binding.block.paperDensity}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Способ скрепления страниц:</div>
						<div className="sum-val">{form.binding.block.pageBinding}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Красочность печати:</div>
						<div className="sum-val">{form.binding.block.printColorfulness}</div>
					</div>
				</div>
				<div className="sum-block">
					<div className="sum-block-title">Дополнительная отделка</div>
					<div className="sum-row">
						<div className="sum-title">Выборочный УФ-ЛАК:</div>
						<div className="sum-val">{form.finishing.additionalFinishing.includes('выборочный уф-ЛАК') ? 'Да' : 'Нет'}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Тиснение фольгой:</div>
						<div className="sum-val">{form.finishing.additionalFinishing.includes('Тиснение фольгой') ? 'Да' : 'Нет'}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Блинтовое тиснение:</div>
						<div className="sum-val">{form.finishing.additionalFinishing.includes('Блинтовое тиснение') ? 'Да' : 'Нет'}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Ляссе:</div>
						<div className="sum-val">{form.finishing.additionalFinishing.includes('Ляссе') ? 'Да' : 'Нет'}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Ламинация обложки:</div>
						<div className="sum-val">{form.finishing.additionalFinishing.includes('ламинация обложки') ? form.finishing.coverLamination : 'Нет'}</div>
					</div>
				</div>
			</>;
			case categories.leaflets: return renderLeaflets(request.form, 'Листовки');
			case categories.posters: return renderLeaflets(request.form, 'Плакаты');
			case categories.letterhead: return renderLeaflets(request.form, 'Фирменные бланки');
			case categories.booklets: return <>
				<div className="sum-block">
					<div className="sum-block-title">Формат издания</div>
					<div className="sum-row">
						<div className="sum-title">Тип продукции:</div>
						<div className="sum-val">Буклеты</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Тираж:</div>
						<div className="sum-val">{request.formFooter.circulation} экземпляров</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Размер в сложенном виде (Ш х В):</div>
						<div className="sum-val">{form.format.width} x {form.format.height} мм</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Размер в развороте:</div>
						<div className="sum-val">{form.format.size} мм</div>
					</div>
				</div>
				<div className="sum-block">
					<div className="sum-block-title">Параметры</div>
					<div className="sum-row">
						<div className="sum-title">Бумага:</div>
						<div className="sum-val">{form.params.paper}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Плотность бумаги (г/м2):</div>
						<div className="sum-val">{form.params.paperDensity}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Красочность печати:</div>
						<div className="sum-val">{form.params.printColorfulness}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Количесвто фальцев:</div>
						<div className="sum-val">{form.params.foldsCount}</div>
					</div>
				</div>
			</>;
			case categories.catalogs: return renderCatalog(request.form, 'Каталоги');
			case categories.brochures: return renderCatalog(request.form, 'Брошюры');
			case categories.magazines: return renderMagazines(request.form, 'Журналы');
			case categories.instructions: return renderMagazines(request.form, 'Инструкции');
			case categories.newspapers: return <>
				<div className="sum-block">
					<div className="sum-block-title">Формат издания</div>
					<div className="sum-row">
						<div className="sum-title">Тип продукции:</div>
						<div className="sum-val">Газеты</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Тираж:</div>
						<div className="sum-val">{request.formFooter.circulation} экземпляров</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Размер в сложенном виде (Ш х В):</div>
						<div className="sum-val">{form.format.width} x {form.format.height} мм</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Количество полос:</div>
						<div className="sum-val">{form.format.row} мм</div>
					</div>
				</div>
				<div className="sum-block">
					<div className="sum-block-title">Параметры</div>
					<div className="sum-row">
						<div className="sum-title">Бумага:</div>
						<div className="sum-val">{form.params.paper}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Плотность бумаги (г/м2):</div>
						<div className="sum-val">{form.params.paperDensity}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Красочность печати:</div>
						<div className="sum-val">{form.params.printColorfulness}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Способ скрепления страниц:</div>
						<div className="sum-val">{form.params.pageBinding}</div>
					</div>
				</div>
			</>;
			case categories.diaries: return <>
				<div className="sum-block">
					<div className="sum-block-title">Формат издания</div>
					<div className="sum-row">
						<div className="sum-title">Тип продукции:</div>
						<div className="sum-val">Ежедневники</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Тираж:</div>
						<div className="sum-val">{request.formFooter.circulation} экземпляров</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Размер в сложенном виде (Ш х В):</div>
						<div className="sum-val">{form.format.width} x {form.format.height} мм</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Количество полос:</div>
						<div className="sum-val">{form.format.row}</div>
					</div>
				</div>
				<div className="sum-block">
					<div className="sum-block-title">Обложка</div>
					<div className="sum-row">
						<div className="sum-title">Переплет:</div>
						<div className="sum-val">{form.cover.type}</div>
					</div>
					{form.cover.thickness &&
						<div className="sum-row">
							<div className="sum-title">Толщина картона (мм):</div>
							<div className="sum-val">{form.cover.thickness}</div>
						</div>
					}
				</div>
				{form.block.type === 'Стандартный' ?
					<>
						<div className="sum-block">
							<div className="sum-block-title">Блок</div>
							<div className="sum-row">
								<div className="sum-title">Тип блока:</div>
								<div className="sum-val">{form.block.type}</div>
							</div>
							<div className="sum-row">
								<div className="sum-title">Каптал:</div>
								<div className="sum-val">{form.block.standard.captal}</div>
							</div>
							<div className="sum-row">
								<div className="sum-title">Красочность форзацев:</div>
								<div className="sum-val">{form.block.standard.colorfulEndpapers}</div>
							</div>
						</div>
					</>
					:
					<>
						<div className="sum-block">
							<div className="sum-block-title">Блок</div>
							<div className="sum-row">
								<div className="sum-title">Тип блока:</div>
								<div className="sum-val">{form.block.type}</div>
							</div>
							<div className="sum-row">
								<div className="sum-title">Бумага:</div>
								<div className="sum-val">{form.block.individual.paper}</div>
							</div>
							<div className="sum-row">
								<div className="sum-title">Плотность бумаги (г/м2):</div>
								<div className="sum-val">{form.block.individual.paperDensity}</div>
							</div>
							<div className="sum-row">
								<div className="sum-title">Красочность печати:</div>
								<div className="sum-val">{form.block.individual.printColorfulness}</div>
							</div>
							<div className="sum-row">
								<div className="sum-title">Наличие вставок:</div>
								<div className="sum-val">{form.block.individual.inserts}</div>
							</div>
							<div className="sum-row">
								<div className="sum-title">Тип корешка:</div>
								<div className="sum-val">{form.block.individual.spine}</div>
							</div>
							<div className="sum-row">
								<div className="sum-title">Каптал:</div>
								<div className="sum-val">{form.block.individual.captal}</div>
							</div>
						</div>
					</>
				}
				<div className="sum-block">
					<div className="sum-block-title">Дополнительная отделка</div>
					<div className="sum-row">
						<div className="sum-title">Выборочный УФ-ЛАК:</div>
						<div className="sum-val">{form.finishing.additionalFinishing.includes('выборочный уф-ЛАК') ? 'Да' : 'Нет'}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Тиснение фольгой:</div>
						<div className="sum-val">{form.finishing.additionalFinishing.includes('Тиснение фольгой') ? 'Да' : 'Нет'}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Блинтовое тиснение:</div>
						<div className="sum-val">{form.finishing.additionalFinishing.includes('Блинтовое тиснение') ? 'Да' : 'Нет'}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Ляссе:</div>
						<div className="sum-val">{form.finishing.additionalFinishing.includes('Ляссе') ? 'Да' : 'Нет'}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Ламинация обложки:</div>
						<div className="sum-val">{form.finishing.additionalFinishing.includes('ламинация обложки') ? form.finishing.coverLamination : 'Нет'}</div>
					</div>
				</div>
			</>;
			case categories.notepads: return <>
				<div className="sum-block">
					<div className="sum-block-title">Формат издания</div>
					<div className="sum-row">
						<div className="sum-title">Тип продукции:</div>
						<div className="sum-val">Блокноты</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Тираж:</div>
						<div className="sum-val">{request.formFooter.circulation} экземпляров</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Размер в сложенном виде (Ш х В):</div>
						<div className="sum-val">{form.format.width} x {form.format.height} мм</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">кол-во листов в блоке:</div>
						<div className="sum-val">{form.format.row}</div>
					</div>
				</div>
				<div className="sum-block">
					<div className="sum-block-title">Обложка</div>
					<div className="sum-row">
						<div className="sum-title">Бумага:</div>
						<div className="sum-val">{form.cover.paper}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Плотность бумаги (г/м2):</div>
						<div className="sum-val">{form.cover.paperDensity}</div>
					</div>
				</div>
				<div className="sum-block">
					<div className="sum-block-title">Блок</div>
					<div className="sum-row">
						<div className="sum-title">Бумага:</div>
						<div className="sum-val">{form.block.paper}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Плотность бумаги (г/м2):</div>
						<div className="sum-val">{form.block.paperDensity}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Красочночть печати:</div>
						<div className="sum-val">{form.block.printColorfulness}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Тип скрепления:</div>
						<div className="sum-val">{form.block.bonding}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Скрепление по:</div>
						<div className="sum-val">{form.block.bondingBy}</div>
					</div>
				</div>
				<div className="sum-block">
					<div className="sum-block-title">Дополнительная отделка</div>
					<div className="sum-row">
						<div className="sum-title">Выборочное УФ-лакирование:</div>
						<div className="sum-val">{form.finishing.additionalFinishing.includes('выборочный уф-ЛАК') ? 'Да' : 'Нет'}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Тиснение фольгой:</div>
						<div className="sum-val">{form.finishing.additionalFinishing.includes('Тиснение фольгой') ? 'Да' : 'Нет'}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Конгревное тиснение:</div>
						<div className="sum-val">{form.finishing.additionalFinishing.includes('Конгревное тиснение') ? 'Да' : 'Нет'}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Ламинация обложки:</div>
						<div className="sum-val">{form.finishing.additionalFinishing.includes('ламинация обложки') ? form.finishing.coverLamination : 'Нет'}</div>
					</div>
				</div>
			</>
			case categories.calendars: return renderCalendars(request.calendarType, request.form);
			case categories.folders: return <>
				<div className="sum-block">
					<div className="sum-block-title">Формат издания</div>
					<div className="sum-row">
						<div className="sum-title">Тип продукции:</div>
						<div className="sum-val">Папки самосборные</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Тираж:</div>
						<div className="sum-val">{request.formFooter.circulation} экземпляров</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Размер (Ш х В):</div>
						<div className="sum-val">{form.format.width} x {form.format.height} мм</div>
					</div>
				</div>
				<div className="sum-block">
					<div className="sum-block-title">Параметры</div>
					<div className="sum-row">
						<div className="sum-title">Материал:</div>
						<div className="sum-val">{form.params.paper}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Плотность (г/м2):</div>
						<div className="sum-val">{form.params.paperDensity}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Красочность печати:</div>
						<div className="sum-val">{form.params.printColorfulness}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Штанцформа:</div>
						<div className="sum-val">{form.params.formST}</div>
					</div>
				</div>
				<div className="sum-block">
					<div className="sum-block-title">Дополнительная отделка</div>
					<div className="sum-row">
						<div className="sum-title">Выборочное УФ-лакирование:</div>
						<div className="sum-val">{form.finishing.additionalFinishing.includes('выборочный уф-ЛАК') ? 'Да' : 'Нет'}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Тиснение фольгой:</div>
						<div className="sum-val">{form.finishing.additionalFinishing.includes('Тиснение фольгой') ? 'Да' : 'Нет'}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Конгревное тиснение:</div>
						<div className="sum-val">{form.finishing.additionalFinishing.includes('Конгревное тиснение') ? 'Да' : 'Нет'}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Ламинация обложки:</div>
						<div className="sum-val">{form.finishing.additionalFinishing.includes('ламинация обложки') ? form.finishing.coverLamination : 'Нет'}</div>
					</div>
				</div>
			</>;
			case categories.labels: return renderLabels('Этикетки', request.form);
			case categories.stickers: return renderLabels('Стикеры', request.form);
			default: return <></>;
		}
	}

	const renderLabels = (title, form) => {
		return <>
			<div className="sum-block">
				<div className="sum-block-title">Формат издания</div>
				<div className="sum-row">
					<div className="sum-title">Тип продукции:</div>
					<div className="sum-val">{title}</div>
				</div>
				<div className="sum-row">
					<div className="sum-title">Тираж:</div>
					<div className="sum-val">{request.formFooter.circulation} экземпляров</div>
				</div>
				<div className="sum-row">
					<div className="sum-title">Размер (Ш х В):</div>
					<div className="sum-val">{form.format.width} x {form.format.height} мм</div>
				</div>
			</div>
			<div className="sum-block">
				<div className="sum-block-title">Блок</div>
				<div className="sum-row">
					<div className="sum-title">Клеевое покрытие:</div>
					<div className="sum-val">{form.params.coating}</div>
				</div>
			</div>
		</>;
	}

	const renderCalendars = (type, form) => {
		switch (type) {
			case 'Квартальные календари': return <>
				<div className="sum-block">
					<div className="sum-block-title">Формат издания</div>
					<div className="sum-row">
						<div className="sum-title">Тип продукции:</div>
						<div className="sum-val">Квартальные календари</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Тираж:</div>
						<div className="sum-val">{request.formFooter.circulation} экземпляров</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Размер:</div>
						<div className="sum-val">{request.calendarSize}</div>
					</div>
				</div>
				<div className="sum-block">
					<div className="sum-block-title">Топ</div>
					<div className="sum-row">
						<div className="sum-title">Размер (мм):</div>
						<div className="sum-val">{form.top.size}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Красочность печати:</div>
						<div className="sum-val">{form.top.printColorfulness}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">УФ-Лакирование:</div>
						<div className="sum-val">{form.finishing.additionalFinishing.includes('УФ-Лакирование') ? 'Да' : 'Нет'}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Тиснение фольгой:</div>
						<div className="sum-val">{form.finishing.additionalFinishing.includes('Тиснение фольгой') ? 'Да' : 'Нет'}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Ламинация:</div>
						<div className="sum-val">{form.finishing.additionalFinishing.includes('ламинация') ? form.finishing.coverLamination : 'Нет'}</div>
					</div>
				</div>
				<div className="sum-block">
					<div className="sum-block-title">Блок</div>
					<div className="sum-row">
						<div className="sum-title">Тип:</div>
						<div className="sum-val">{form.block.type}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Бумага:</div>
						<div className="sum-val">{form.block.paper}</div>
					</div>
					{form.block.type === 'Индивидуальный' &&
						<div className="sum-row">
							<div className="sum-title">Плотность бумаги (Г/м2):</div>
							<div className="sum-val">{form.block.paperDensity}</div>
						</div>
					}
				</div>
				<div className="sum-block">
					<div className="sum-block-title">Подложка</div>
					<div className="sum-row">
						<div className="sum-title">Кол-во рекламных полей:</div>
						<div className="sum-val">{form.substrate.fieldsCount}</div>
					</div>
					{form.substrate.lamination.includes('Ламинация подложки') &&
						<div className="sum-row">
							<div className="sum-title">Ламинация подложки:</div>
							<div className="sum-val">{form.substrate.laminationType}</div>
						</div>
					}
				</div>
			</>;
			case 'Перекидные настенные календари': return <>
				<div className="sum-block">
					<div className="sum-block-title">Формат издания</div>
					<div className="sum-row">
						<div className="sum-title">Тип продукции:</div>
						<div className="sum-val">Перекидные настенные календари</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Тираж:</div>
						<div className="sum-val">{request.formFooter.circulation} экземпляров</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Размер (Ш х В):</div>
						<div className="sum-val">{form.format.width} x {form.format.height} мм</div>
					</div>
				</div>
				<div className="sum-block">
					<div className="sum-block-title">Параметры</div>
					<div className="sum-row">
						<div className="sum-title">Бумага:</div>
						<div className="sum-val">{form.params.paper}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Плотность бумаги (г/м2):</div>
						<div className="sum-val">{form.params.paperDensity}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Красочность печати:</div>
						<div className="sum-val">{form.params.printColorfulness}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Способ скрепления:</div>
						<div className="sum-val">{form.params.bonding}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Количество листов:</div>
						<div className="sum-val">{form.params.pagesCount}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Ригель для подвешивания:</div>
						<div className="sum-val">{form.params.rigel.length ? 'Да' : 'Нет'}</div>
					</div>
				</div>
			</>;
			case 'Настольный календарь-домик': return <>
				<div className="sum-block">
					<div className="sum-block-title">Формат издания</div>
					<div className="sum-row">
						<div className="sum-title">Тип продукции:</div>
						<div className="sum-val">Настольный календарь-домик</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Тираж:</div>
						<div className="sum-val">{request.formFooter.circulation} экземпляров</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Размер (Ш х В):</div>
						<div className="sum-val">{form.format.width} x {form.format.height} мм</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Размер в развороте:</div>
						<div className="sum-val">{form.format.size}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Плотность картона (Г/м2):</div>
						<div className="sum-val">{form.format.paperDensity}</div>
					</div>
				</div>
				<div className="sum-block">
					<div className="sum-block-title">Параметры</div>
					<div className="sum-row">
						<div className="sum-title">УФ-лакирование:</div>
						<div className="sum-val">{form.finishing.additionalFinishing.includes('УФ-лакирование') ? 'Да' : 'Нет'}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Тиснение фольгой:</div>
						<div className="sum-val">{form.finishing.additionalFinishing.includes('Тиснение фольгой') ? 'Да' : 'Нет'}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Ламинация подложки:</div>
						<div className="sum-val">{form.finishing.additionalFinishing.includes('Ламинация подложки') ? form.finishing.coverLamination : 'Нет'}</div>
					</div>
				</div>
			</>;
			case 'перекидные настольные': return <>
				<div className="sum-block">
					<div className="sum-block-title">Формат издания</div>
					<div className="sum-row">
						<div className="sum-title">Тип продукции:</div>
						<div className="sum-val">Перекидные настольные</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Тираж:</div>
						<div className="sum-val">{request.formFooter.circulation} экземпляров</div>
					</div>
				</div>
				<div className="sum-block">
					<div className="sum-block-title">Подложка</div>
					<div className="sum-row">
						<div className="sum-title">Размер (Ш х В):</div>
						<div className="sum-val">{form.substrate.width} x {form.substrate.height} мм</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Плотность картона (Г/м2):</div>
						<div className="sum-val">{form.substrate.paperDensity}</div>
					</div>
				</div>
				<div className="sum-block">
					<div className="sum-block-title">Блок</div>
					<div className="sum-row">
						<div className="sum-title">Размер листов блока (Ш х В):</div>
						<div className="sum-val">{form.block.width} x {form.block.height} мм</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Плотность листов блока (Г/м2):</div>
						<div className="sum-val">{form.block.paperDensity}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Кол-во листов блока:</div>
						<div className="sum-val">{form.block.pagesCount}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Красочность печати:</div>
						<div className="sum-val">{form.block.printColorfulness}</div>
					</div>
					<div className="sum-row">
						<div className="sum-title">Скрепление листов блока:</div>
						<div className="sum-val">{form.block.bonding}</div>
					</div>
				</div>
			</>;
			default: return <></>;
		}
	}

	const renderMagazines = (form, title) => {
		return <>
			<div className="sum-block">
				<div className="sum-block-title">Формат издания</div>
				<div className="sum-row">
					<div className="sum-title">Тип продукции:</div>
					<div className="sum-val">{title}</div>
				</div>
				<div className="sum-row">
					<div className="sum-title">Тираж:</div>
					<div className="sum-val">{request.formFooter.circulation} экземпляров</div>
				</div>
				<div className="sum-row">
					<div className="sum-title">Формат (Ш х В):</div>
					<div className="sum-val">{form.format.width} x {form.format.height} мм</div>
				</div>
				<div className="sum-row">
					<div className="sum-title">Количество полос:</div>
					<div className="sum-val">{form.format.row}</div>
				</div>
			</div>
			<div className="sum-block">
				<div className="sum-block-title">Обложка</div>
				<div className="sum-row">
					<div className="sum-title">Плотность бумаги (г/м2):</div>
					<div className="sum-val">{form.binding.cover.thickness}</div>
				</div>
				<div className="sum-row">
					<div className="sum-title">Красочность печати обложки:</div>
					<div className="sum-val">{form.binding.cover.printColorfulness}</div>
				</div>
			</div>
			<div className="sum-block">
				<div className="sum-block-title">Блок</div>
				<div className="sum-row">
					<div className="sum-title">Бумага:</div>
					<div className="sum-val">{form.binding.block.paper}</div>
				</div>
				<div className="sum-row">
					<div className="sum-title">Плотность бумаги (г/м2):</div>
					<div className="sum-val">{form.binding.block.paperDensity}</div>
				</div>
				<div className="sum-row">
					<div className="sum-title">Способ скрепления страниц:</div>
					<div className="sum-val">{form.binding.block.pageBinding}</div>
				</div>
				<div className="sum-row">
					<div className="sum-title">Красочность печати:</div>
					<div className="sum-val">{form.binding.block.printColorfulness}</div>
				</div>
			</div>
			<div className="sum-block">
				<div className="sum-block-title">Дополнительная отделка</div>
				<div className="sum-row">
					<div className="sum-title">Выборочное УФ-лакирование:</div>
					<div className="sum-val">{form.finishing.additionalFinishing.includes('выборочный уф-ЛАК') ? 'Да' : 'Нет'}</div>
				</div>
				<div className="sum-row">
					<div className="sum-title">Тиснение фольгой:</div>
					<div className="sum-val">{form.finishing.additionalFinishing.includes('Тиснение фольгой') ? 'Да' : 'Нет'}</div>
				</div>
				<div className="sum-row">
					<div className="sum-title">Конгревное тиснение:</div>
					<div className="sum-val">{form.finishing.additionalFinishing.includes('Конгревное тиснение') ? 'Да' : 'Нет'}</div>
				</div>
				<div className="sum-row">
					<div className="sum-title">Ламинация обложки:</div>
					<div className="sum-val">{form.finishing.additionalFinishing.includes('ламинация обложки') ? form.finishing.coverLamination : 'Нет'}</div>
				</div>
			</div>
		</>;
	}

	const renderCatalog = (form, title) => {
		return <>
			<div className="sum-block">
				<div className="sum-block-title">Формат издания</div>
				<div className="sum-row">
					<div className="sum-title">Тип продукции:</div>
					<div className="sum-val">{title}</div>
				</div>
				<div className="sum-row">
					<div className="sum-title">Тираж:</div>
					<div className="sum-val">{request.formFooter.circulation} экземпляров</div>
				</div>
				<div className="sum-row">
					<div className="sum-title">Формат (Ш х В):</div>
					<div className="sum-val">{form.format.width} x {form.format.height} мм</div>
				</div>
				<div className="sum-row">
					<div className="sum-title">Количество полос:</div>
					<div className="sum-val">{form.format.row}</div>
				</div>
				<div className="sum-row">
					<div className="sum-title">Переплет:</div>
					<div className="sum-val">{form.binding.type}</div>
				</div>
			</div>
			{form.binding.type === 'твердый' ?
				<>
					<div className="sum-block">
						<div className="sum-block-title">Обложка</div>
						<div className="sum-row">
							<div className="sum-title">Переплет:</div>
							<div className="sum-val">{form.binding.hard.cover.type}</div>
						</div>
						{form.binding.hard.cover.thickness &&
						<div className="sum-row">
							<div className="sum-title">Толщина картона (мм):</div>
							<div className="sum-val">{form.binding.hard.cover.thickness}</div>
						</div>
						}
					</div>
					<div className="sum-block">
						<div className="sum-block-title">Блок</div>
						<div className="sum-row">
							<div className="sum-title">Бумага:</div>
							<div className="sum-val">{form.binding.hard.block.paper}</div>
						</div>
						<div className="sum-row">
							<div className="sum-title">Плотность бумаги  (г/м2):</div>
							<div className="sum-val">{form.binding.hard.block.paperDensity}</div>
						</div>
						<div className="sum-row">
							<div className="sum-title">Красочность печати:</div>
							<div className="sum-val">{form.binding.hard.block.printColorfulness}</div>
						</div>
						<div className="sum-row">
							<div className="sum-title">Наличие вставок:</div>
							<div className="sum-val">{form.binding.hard.block.inserts}</div>
						</div>
						<div className="sum-row">
							<div className="sum-title">Красочность форзацев:</div>
							<div className="sum-val">{form.binding.hard.block.endpapersColorful}</div>
						</div>
						<div className="sum-row">
							<div className="sum-title">Tип корешка:</div>
							<div className="sum-val">{form.binding.hard.block.spine}</div>
						</div>
						<div className="sum-row">
							<div className="sum-title">Каптал:</div>
							<div className="sum-val">{form.binding.hard.block.captal}</div>
						</div>
					</div>
				</>
				:
				<>
					<div className="sum-block">
						<div className="sum-block-title">Обложка</div>
						<div className="sum-row">
							<div className="sum-title">Плотность бумаги (г/м2):</div>
							<div className="sum-val">{form.binding.soft.cover.thickness}</div>
						</div>
						<div className="sum-row">
							<div className="sum-title">Красочность печати обложки:</div>
							<div className="sum-val">{form.binding.soft.cover.printColorfulness}</div>
						</div>
					</div>
					<div className="sum-block">
						<div className="sum-block-title">Блок</div>
						<div className="sum-row">
							<div className="sum-title">Бумага:</div>
							<div className="sum-val">{form.binding.soft.block.paper}</div>
						</div>
						<div className="sum-row">
							<div className="sum-title">Плотность бумаги (г/м2):</div>
							<div className="sum-val">{form.binding.soft.block.paperDensity}</div>
						</div>
						<div className="sum-row">
							<div className="sum-title">Способ скрепления страниц:</div>
							<div className="sum-val">{form.binding.soft.block.pageBinding}</div>
						</div>
						<div className="sum-row">
							<div className="sum-title">Красочность печати:</div>
							<div className="sum-val">{form.binding.soft.block.printColorfulness}</div>
						</div>
					</div>
				</>
			}
			<div className="sum-block">
				<div className="sum-block-title">Дополнительная отделка</div>
				<div className="sum-row">
					<div className="sum-title">Выборочное УФ-лакирование:</div>
					<div className="sum-val">{form.finishing.additionalFinishing.includes('выборочный уф-ЛАК') ? 'Да' : 'Нет'}</div>
				</div>
				<div className="sum-row">
					<div className="sum-title">Тиснение фольгой:</div>
					<div className="sum-val">{form.finishing.additionalFinishing.includes('Тиснение фольгой') ? 'Да' : 'Нет'}</div>
				</div>
				<div className="sum-row">
					<div className="sum-title">Конгревное тиснение:</div>
					<div className="sum-val">{form.finishing.additionalFinishing.includes('Конгревное тиснение') ? 'Да' : 'Нет'}</div>
				</div>
				<div className="sum-row">
					<div className="sum-title">Ламинация обложки:</div>
					<div className="sum-val">{form.finishing.additionalFinishing.includes('ламинация обложки') ? form.finishing.coverLamination : 'Нет'}</div>
				</div>
			</div>
		</>;
	}

	const renderLeaflets = (form, title) => {
		return <>
			<div className="sum-block">
				<div className="sum-block-title">Формат продукции</div>
				<div className="sum-row">
					<div className="sum-title">Тип продукции:</div>
					<div className="sum-val">{title}</div>
				</div>
				<div className="sum-row">
					<div className="sum-title">Тираж:</div>
					<div className="sum-val">{request.formFooter.circulation} экземпляров</div>
				</div>
				<div className="sum-row">
					<div className="sum-title">Формат (Ш х В):</div>
					<div className="sum-val">{form.format.width} x {form.format.height} мм</div>
				</div>
			</div>
			<div className="sum-block">
				<div className="sum-block-title">Параметры</div>
				<div className="sum-row">
					<div className="sum-title">Бумага:</div>
					<div className="sum-val">{form.params.paper}</div>
				</div>
				<div className="sum-row">
					<div className="sum-title">Плотность бумаги (г/м2):</div>
					<div className="sum-val">{form.params.paperDensity}</div>
				</div>
				<div className="sum-row">
					<div className="sum-title">Красочность печати:</div>
					<div className="sum-val">{form.params.printColorfulness}</div>
				</div>
			</div>
		</>
	}

	return (
		<div className="cp-summary-form">
			<div className="cp-row">
				<div className="cp-title">Подтверждение данных</div>
				<div className="cp-text">Проверьте и подтвердите правильность оформления заказа</div>
				<div className="cp-summary-box">
					{request.manager &&
						<div className="sum-block">
							<div className="sum-block-title">Ваш менеджер:</div>
							<div className="sum-row">
								<div className="sum-title">{request.manager}</div>
							</div>
						</div>
					}
					{renderResults(request.formId, request.form)}
					{request.formFooter.comment &&
						<div className="sum-block">
							<div className="sum-block-title">Коментарий:</div>
							<div className="sum-row">
								<div className="sum-title">{request.formFooter.comment}</div>
							</div>
						</div>
					}
					<div className="sum-block">
						<div className="sum-block-title">Данные пользователя:</div>
						<div className="sum-row">
							<div className="sum-title">ФИО:</div>
							<div className="sum-val">{request.user.surname} {request.user.name} {request.user.patronymic}</div>
						</div>
						<div className="sum-row">
							<div className="sum-title">Телефон:</div>
							<div className="sum-val">{request.user.phone}</div>
						</div>
						<div className="sum-row">
							<div className="sum-title">E-mail:</div>
							<div className="sum-val">{request.user.email}</div>
						</div>
						<div className="sum-row">
							<div className="sum-title">Организация:</div>
							<div className="sum-val">{request.user.entity}</div>
						</div>
					</div>
				</div>
				<div className="cp-actions">
					<div className="btn-white" onClick={() => setStep(2)}><span className="mobHide">Вернуться&nbsp;</span><span>назад</span></div>
					<Button loading={fake} className="with-arrow" type="primary" onClick={fakePost}>Отправить<IconButton/></Button>
				</div>
			</div>
		</div>
	);
};

export default Summary;
