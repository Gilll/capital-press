import React, {useState} from 'react';
import Button from "antd/es/button";
import IconButton from "../../assets/icons/IconButton";
import {categories} from "../../utils/categoriesList";
import {renderToStaticMarkup} from "react-dom/server";

const Summary = ({setStep, request}) => {

	const renderResults = (id, form) => {
		switch (id) {
			case categories.booksHard: return <>
				<div className="sum-block" style={{paddingBottom: "1.5em"}}>
					<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Формат издания</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Тип продукции:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>Книги в твердом переплете</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Тираж:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{request.formFooter.circulation} экземпляров</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Формат (Ш х В):</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.format.width} x {form.format.height} мм</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Количество полос:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.format.row}</div>
					</div>
				</div>
				<div className="sum-block" style={{paddingBottom: "1.5em"}}>
					<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Обложка</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Переплет:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.binding.cover.type}</div>
					</div>
					{form.binding.cover.thickness &&
						<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
							<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Толщина картона (мм):</div>
							<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.binding.cover.thickness}</div>
						</div>
					}
				</div>
				<div className="sum-block" style={{paddingBottom: "1.5em"}}>
					<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Блок</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Бумага:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.binding.block.paper}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Плотность бумаги  (г/м2):</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.binding.block.paperDensity}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Красочность печати:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.binding.block.printColorfulness}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Наличие вставок:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.binding.block.inserts}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Красочность форзацев:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.binding.block.endpapersColorful}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Tип корешка:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.binding.block.spine}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Каптал:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.binding.block.captal}</div>
					</div>
				</div>
				<div className="sum-block" style={{paddingBottom: "1.5em"}}>
					<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Дополнительная отделка</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Выборочный УФ-ЛАК:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.finishing.additionalFinishing.includes('выборочный уф-ЛАК') ? 'Да' : 'Нет'}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Тиснение фольгой:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.finishing.additionalFinishing.includes('Тиснение фольгой') ? 'Да' : 'Нет'}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Блинтовое тиснение:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.finishing.additionalFinishing.includes('Блинтовое тиснение') ? 'Да' : 'Нет'}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Ляссе:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.finishing.additionalFinishing.includes('Ляссе') ? 'Да' : 'Нет'}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Ламинация обложки:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.finishing.additionalFinishing.includes('ламинация обложки') ? form.finishing.coverLamination : 'Нет'}</div>
					</div>
				</div>
			</>;
			case categories.booksSoft: return <>
				<div className="sum-block" style={{paddingBottom: "1.5em"}}>
					<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Формат издания</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Тип продукции:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>Книги в мягком переплете</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Тираж:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{request.formFooter.circulation} экземпляров</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Формат (Ш х В):</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.format.width} x {form.format.height} мм</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Количество полос:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.format.row}</div>
					</div>
				</div>
				<div className="sum-block" style={{paddingBottom: "1.5em"}}>
					<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Обложка</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Плотность бумаги (г/м2):</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.binding.cover.thickness}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Красочность печати обложки:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.binding.cover.printColorfulness}</div>
					</div>
				</div>
				<div className="sum-block" style={{paddingBottom: "1.5em"}}>
					<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Блок</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Бумага:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.binding.block.paper}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Плотность бумаги (г/м2):</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.binding.block.paperDensity}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Способ скрепления страниц:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.binding.block.pageBinding}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Красочность печати:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.binding.block.printColorfulness}</div>
					</div>
				</div>
				<div className="sum-block" style={{paddingBottom: "1.5em"}}>
					<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Дополнительная отделка</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Выборочный УФ-ЛАК:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.finishing.additionalFinishing.includes('выборочный уф-ЛАК') ? 'Да' : 'Нет'}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Тиснение фольгой:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.finishing.additionalFinishing.includes('Тиснение фольгой') ? 'Да' : 'Нет'}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Блинтовое тиснение:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.finishing.additionalFinishing.includes('Блинтовое тиснение') ? 'Да' : 'Нет'}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Ляссе:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.finishing.additionalFinishing.includes('Ляссе') ? 'Да' : 'Нет'}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Ламинация обложки:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.finishing.additionalFinishing.includes('ламинация обложки') ? form.finishing.coverLamination : 'Нет'}</div>
					</div>
				</div>
			</>;
			case categories.leaflets: return renderLeaflets(request.form, 'Листовки');
			case categories.posters: return renderLeaflets(request.form, 'Плакаты');
			case categories.letterhead: return renderLeaflets(request.form, 'Фирменные бланки');
			case categories.booklets: return <>
				<div className="sum-block" style={{paddingBottom: "1.5em"}}>
					<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Формат издания</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Тип продукции:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>Буклеты</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Тираж:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{request.formFooter.circulation} экземпляров</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Размер в сложенном виде (Ш х В):</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.format.width} x {form.format.height} мм</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Размер в развороте:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.format.size} мм</div>
					</div>
				</div>
				<div className="sum-block" style={{paddingBottom: "1.5em"}}>
					<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Параметры</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Бумага:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.params.paper}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Плотность бумаги (г/м2):</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.params.paperDensity}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Красочность печати:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.params.printColorfulness}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Количесвто фальцев:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.params.foldsCount}</div>
					</div>
				</div>
			</>;
			case categories.catalogs: return renderCatalog(request.form, 'Каталоги');
			case categories.brochures: return renderCatalog(request.form, 'Брошюры');
			case categories.magazines: return renderMagazines(request.form, 'Журналы');
			case categories.instructions: return renderMagazines(request.form, 'Инструкции');
			case categories.newspapers: return <>
				<div className="sum-block" style={{paddingBottom: "1.5em"}}>
					<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Формат издания</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Тип продукции:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>Газеты</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Тираж:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{request.formFooter.circulation} экземпляров</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Размер в сложенном виде (Ш х В):</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.format.width} x {form.format.height} мм</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Количество полос:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.format.row} мм</div>
					</div>
				</div>
				<div className="sum-block" style={{paddingBottom: "1.5em"}}>
					<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Параметры</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Бумага:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.params.paper}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Плотность бумаги (г/м2):</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.params.paperDensity}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Красочность печати:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.params.printColorfulness}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Способ скрепления страниц:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.params.pageBinding}</div>
					</div>
				</div>
			</>;
			case categories.diaries: return <>
				<div className="sum-block" style={{paddingBottom: "1.5em"}}>
					<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Формат издания</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Тип продукции:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>Ежедневники</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Тираж:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{request.formFooter.circulation} экземпляров</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Размер в сложенном виде (Ш х В):</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.format.width} x {form.format.height} мм</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Количество полос:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.format.row}</div>
					</div>
				</div>
				<div className="sum-block" style={{paddingBottom: "1.5em"}}>
					<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Обложка</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Переплет:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.cover.type}</div>
					</div>
					{form.cover.thickness &&
						<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
							<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Толщина картона (мм):</div>
							<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.cover.thickness}</div>
						</div>
					}
				</div>
				{form.block.type === 'Стандартный' ?
					<>
						<div className="sum-block" style={{paddingBottom: "1.5em"}}>
							<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Блок</div>
							<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
								<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Тип блока:</div>
								<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.block.type}</div>
							</div>
							<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
								<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Каптал:</div>
								<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.block.standard.captal}</div>
							</div>
							<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
								<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Красочность форзацев:</div>
								<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.block.standard.colorfulEndpapers}</div>
							</div>
						</div>
					</>
					:
					<>
						<div className="sum-block" style={{paddingBottom: "1.5em"}}>
							<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Блок</div>
							<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
								<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Тип блока:</div>
								<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.block.type}</div>
							</div>
							<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
								<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Бумага:</div>
								<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.block.individual.paper}</div>
							</div>
							<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
								<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Плотность бумаги (г/м2):</div>
								<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.block.individual.paperDensity}</div>
							</div>
							<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
								<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Красочность печати:</div>
								<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.block.individual.printColorfulness}</div>
							</div>
							<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
								<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Наличие вставок:</div>
								<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.block.individual.inserts}</div>
							</div>
							<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
								<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Тип корешка:</div>
								<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.block.individual.spine}</div>
							</div>
							<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
								<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Каптал:</div>
								<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.block.individual.captal}</div>
							</div>
						</div>
					</>
				}
				<div className="sum-block" style={{paddingBottom: "1.5em"}}>
					<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Дополнительная отделка</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Выборочный УФ-ЛАК:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.finishing.additionalFinishing.includes('выборочный уф-ЛАК') ? 'Да' : 'Нет'}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Тиснение фольгой:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.finishing.additionalFinishing.includes('Тиснение фольгой') ? 'Да' : 'Нет'}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Блинтовое тиснение:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.finishing.additionalFinishing.includes('Блинтовое тиснение') ? 'Да' : 'Нет'}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Ляссе:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.finishing.additionalFinishing.includes('Ляссе') ? 'Да' : 'Нет'}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Ламинация обложки:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.finishing.additionalFinishing.includes('ламинация обложки') ? form.finishing.coverLamination : 'Нет'}</div>
					</div>
				</div>
			</>;
			case categories.notepads: return <>
				<div className="sum-block" style={{paddingBottom: "1.5em"}}>
					<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Формат издания</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Тип продукции:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>Блокноты</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Тираж:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{request.formFooter.circulation} экземпляров</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Размер в сложенном виде (Ш х В):</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.format.width} x {form.format.height} мм</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>кол-во листов в блоке:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.format.row}</div>
					</div>
				</div>
				<div className="sum-block" style={{paddingBottom: "1.5em"}}>
					<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Обложка</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Бумага:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.cover.paper}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Плотность бумаги (г/м2):</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.cover.paperDensity}</div>
					</div>
				</div>
				<div className="sum-block" style={{paddingBottom: "1.5em"}}>
					<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Блок</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Бумага:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.block.paper}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Плотность бумаги (г/м2):</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.block.paperDensity}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Красочночть печати:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.block.printColorfulness}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Тип скрепления:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.block.bonding}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Скрепление по:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.block.bondingBy}</div>
					</div>
				</div>
				<div className="sum-block" style={{paddingBottom: "1.5em"}}>
					<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Дополнительная отделка</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Выборочное УФ-лакирование:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.finishing.additionalFinishing.includes('выборочный уф-ЛАК') ? 'Да' : 'Нет'}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Тиснение фольгой:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.finishing.additionalFinishing.includes('Тиснение фольгой') ? 'Да' : 'Нет'}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Конгревное тиснение:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.finishing.additionalFinishing.includes('Конгревное тиснение') ? 'Да' : 'Нет'}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Ламинация обложки:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.finishing.additionalFinishing.includes('ламинация обложки') ? form.finishing.coverLamination : 'Нет'}</div>
					</div>
				</div>
			</>
			case categories.calendars: return renderCalendars(request.calendarType, request.form);
			case categories.folders: return <>
				<div className="sum-block" style={{paddingBottom: "1.5em"}}>
					<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Формат издания</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Тип продукции:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>Папки самосборные</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Тираж:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{request.formFooter.circulation} экземпляров</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Размер (Ш х В):</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.format.width} x {form.format.height} мм</div>
					</div>
				</div>
				<div className="sum-block" style={{paddingBottom: "1.5em"}}>
					<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Параметры</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Материал:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.params.paper}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Плотность (г/м2):</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.params.paperDensity}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Красочность печати:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.params.printColorfulness}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Штанцформа:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.params.formST}</div>
					</div>
				</div>
				<div className="sum-block" style={{paddingBottom: "1.5em"}}>
					<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Дополнительная отделка</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Выборочное УФ-лакирование:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.finishing.additionalFinishing.includes('выборочный уф-ЛАК') ? 'Да' : 'Нет'}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Тиснение фольгой:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.finishing.additionalFinishing.includes('Тиснение фольгой') ? 'Да' : 'Нет'}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Конгревное тиснение:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.finishing.additionalFinishing.includes('Конгревное тиснение') ? 'Да' : 'Нет'}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Ламинация обложки:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.finishing.additionalFinishing.includes('ламинация обложки') ? form.finishing.coverLamination : 'Нет'}</div>
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
			<div className="sum-block" style={{paddingBottom: "1.5em"}}>
				<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Формат издания</div>
				<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
					<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Тип продукции:</div>
					<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{title}</div>
				</div>
				<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
					<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Тираж:</div>
					<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{request.formFooter.circulation} экземпляров</div>
				</div>
				<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
					<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Размер (Ш х В):</div>
					<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.format.width} x {form.format.height} мм</div>
				</div>
			</div>
			<div className="sum-block" style={{paddingBottom: "1.5em"}}>
				<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Блок</div>
				<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
					<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Клеевое покрытие:</div>
					<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.params.coating}</div>
				</div>
			</div>
		</>;
	}

	const renderCalendars = (type, form) => {
		switch (type) {
			case 'Квартальные календари': return <>
				<div className="sum-block" style={{paddingBottom: "1.5em"}}>
					<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Формат издания</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Тип продукции:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>Квартальные календари</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Тираж:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{request.formFooter.circulation} экземпляров</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Размер:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{request.calendarSize}</div>
					</div>
				</div>
				<div className="sum-block" style={{paddingBottom: "1.5em"}}>
					<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Топ</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Размер (мм):</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.top.size}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Красочность печати:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.top.printColorfulness}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>УФ-Лакирование:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.finishing.additionalFinishing.includes('УФ-Лакирование') ? 'Да' : 'Нет'}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Тиснение фольгой:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.finishing.additionalFinishing.includes('Тиснение фольгой') ? 'Да' : 'Нет'}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Ламинация:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.finishing.additionalFinishing.includes('ламинация') ? form.finishing.coverLamination : 'Нет'}</div>
					</div>
				</div>
				<div className="sum-block" style={{paddingBottom: "1.5em"}}>
					<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Блок</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Тип:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.block.type}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Бумага:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.block.paper}</div>
					</div>
					{form.block.type === 'Индивидуальный' &&
						<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
							<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Плотность бумаги (Г/м2):</div>
							<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.block.paperDensity}</div>
						</div>
					}
				</div>
				<div className="sum-block" style={{paddingBottom: "1.5em"}}>
					<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Подложка</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Кол-во рекламных полей:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.substrate.fieldsCount}</div>
					</div>
					{form.substrate.lamination.includes('Ламинация подложки') &&
						<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
							<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Ламинация подложки:</div>
							<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.substrate.laminationType}</div>
						</div>
					}
				</div>
			</>;
			case 'Перекидные настенные календари': return <>
				<div className="sum-block" style={{paddingBottom: "1.5em"}}>
					<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Формат издания</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Тип продукции:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>Перекидные настенные календари</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Тираж:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{request.formFooter.circulation} экземпляров</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Размер (Ш х В):</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.format.width} x {form.format.height} мм</div>
					</div>
				</div>
				<div className="sum-block" style={{paddingBottom: "1.5em"}}>
					<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Параметры</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Бумага:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.params.paper}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Плотность бумаги (г/м2):</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.params.paperDensity}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Красочность печати:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.params.printColorfulness}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Способ скрепления:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.params.bonding}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Количество листов:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.params.pagesCount}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Ригель для подвешивания:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.params.rigel.length ? 'Да' : 'Нет'}</div>
					</div>
				</div>
			</>;
			case 'Настольный календарь-домик': return <>
				<div className="sum-block" style={{paddingBottom: "1.5em"}}>
					<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Формат издания</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Тип продукции:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>Настольный календарь-домик</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Тираж:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{request.formFooter.circulation} экземпляров</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Размер (Ш х В):</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.format.width} x {form.format.height} мм</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Размер в развороте:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.format.size}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Плотность картона (Г/м2):</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.format.paperDensity}</div>
					</div>
				</div>
				<div className="sum-block" style={{paddingBottom: "1.5em"}}>
					<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Параметры</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>УФ-лакирование:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.finishing.additionalFinishing.includes('УФ-лакирование') ? 'Да' : 'Нет'}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Тиснение фольгой:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.finishing.additionalFinishing.includes('Тиснение фольгой') ? 'Да' : 'Нет'}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Ламинация подложки:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.finishing.additionalFinishing.includes('Ламинация подложки') ? form.finishing.coverLamination : 'Нет'}</div>
					</div>
				</div>
			</>;
			case 'перекидные настольные': return <>
				<div className="sum-block" style={{paddingBottom: "1.5em"}}>
					<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Формат издания</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Тип продукции:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>Перекидные настольные</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Тираж:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{request.formFooter.circulation} экземпляров</div>
					</div>
				</div>
				<div className="sum-block" style={{paddingBottom: "1.5em"}}>
					<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Подложка</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Размер (Ш х В):</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.substrate.width} x {form.substrate.height} мм</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Плотность картона (Г/м2):</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.substrate.paperDensity}</div>
					</div>
				</div>
				<div className="sum-block" style={{paddingBottom: "1.5em"}}>
					<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Блок</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Размер листов блока (Ш х В):</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.block.width} x {form.block.height} мм</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Плотность листов блока (Г/м2):</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.block.paperDensity}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Кол-во листов блока:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.block.pagesCount}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Красочность печати:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.block.printColorfulness}</div>
					</div>
					<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
						<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Скрепление листов блока:</div>
						<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.block.bonding}</div>
					</div>
				</div>
			</>;
			default: return <></>;
		}
	}

	const renderMagazines = (form, title) => {
		return <>
			<div className="sum-block" style={{paddingBottom: "1.5em"}}>
				<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Формат издания</div>
				<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
					<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Тип продукции:</div>
					<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{title}</div>
				</div>
				<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
					<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Тираж:</div>
					<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{request.formFooter.circulation} экземпляров</div>
				</div>
				<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
					<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Формат (Ш х В):</div>
					<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.format.width} x {form.format.height} мм</div>
				</div>
				<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
					<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Количество полос:</div>
					<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.format.row}</div>
				</div>
			</div>
			<div className="sum-block" style={{paddingBottom: "1.5em"}}>
				<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Обложка</div>
				<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
					<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Плотность бумаги (г/м2):</div>
					<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.binding.cover.thickness}</div>
				</div>
				<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
					<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Красочность печати обложки:</div>
					<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.binding.cover.printColorfulness}</div>
				</div>
			</div>
			<div className="sum-block" style={{paddingBottom: "1.5em"}}>
				<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Блок</div>
				<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
					<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Бумага:</div>
					<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.binding.block.paper}</div>
				</div>
				<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
					<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Плотность бумаги (г/м2):</div>
					<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.binding.block.paperDensity}</div>
				</div>
				<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
					<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Способ скрепления страниц:</div>
					<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.binding.block.pageBinding}</div>
				</div>
				<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
					<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Красочность печати:</div>
					<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.binding.block.printColorfulness}</div>
				</div>
			</div>
			<div className="sum-block" style={{paddingBottom: "1.5em"}}>
				<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Дополнительная отделка</div>
				<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
					<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Выборочное УФ-лакирование:</div>
					<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.finishing.additionalFinishing.includes('выборочный уф-ЛАК') ? 'Да' : 'Нет'}</div>
				</div>
				<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
					<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Тиснение фольгой:</div>
					<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.finishing.additionalFinishing.includes('Тиснение фольгой') ? 'Да' : 'Нет'}</div>
				</div>
				<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
					<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Конгревное тиснение:</div>
					<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.finishing.additionalFinishing.includes('Конгревное тиснение') ? 'Да' : 'Нет'}</div>
				</div>
				<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
					<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Ламинация обложки:</div>
					<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.finishing.additionalFinishing.includes('ламинация обложки') ? form.finishing.coverLamination : 'Нет'}</div>
				</div>
			</div>
		</>;
	}

	const renderCatalog = (form, title) => {
		return <>
			<div className="sum-block" style={{paddingBottom: "1.5em"}}>
				<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Формат издания</div>
				<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
					<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Тип продукции:</div>
					<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{title}</div>
				</div>
				<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
					<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Тираж:</div>
					<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{request.formFooter.circulation} экземпляров</div>
				</div>
				<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
					<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Формат (Ш х В):</div>
					<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.format.width} x {form.format.height} мм</div>
				</div>
				<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
					<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Количество полос:</div>
					<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.format.row}</div>
				</div>
				<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
					<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Переплет:</div>
					<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.binding.type}</div>
				</div>
			</div>
			{form.binding.type === 'твердый' ?
				<>
					<div className="sum-block" style={{paddingBottom: "1.5em"}}>
						<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Обложка</div>
						<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
							<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Переплет:</div>
							<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.binding.hard.cover.type}</div>
						</div>
						{form.binding.hard.cover.thickness &&
						<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
							<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Толщина картона (мм):</div>
							<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.binding.hard.cover.thickness}</div>
						</div>
						}
					</div>
					<div className="sum-block" style={{paddingBottom: "1.5em"}}>
						<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Блок</div>
						<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
							<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Бумага:</div>
							<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.binding.hard.block.paper}</div>
						</div>
						<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
							<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Плотность бумаги  (г/м2):</div>
							<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.binding.hard.block.paperDensity}</div>
						</div>
						<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
							<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Красочность печати:</div>
							<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.binding.hard.block.printColorfulness}</div>
						</div>
						<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
							<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Наличие вставок:</div>
							<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.binding.hard.block.inserts}</div>
						</div>
						<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
							<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Красочность форзацев:</div>
							<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.binding.hard.block.endpapersColorful}</div>
						</div>
						<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
							<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Tип корешка:</div>
							<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.binding.hard.block.spine}</div>
						</div>
						<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
							<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Каптал:</div>
							<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.binding.hard.block.captal}</div>
						</div>
					</div>
				</>
				:
				<>
					<div className="sum-block" style={{paddingBottom: "1.5em"}}>
						<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Обложка</div>
						<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
							<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Плотность бумаги (г/м2):</div>
							<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.binding.soft.cover.thickness}</div>
						</div>
						<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
							<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Красочность печати обложки:</div>
							<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.binding.soft.cover.printColorfulness}</div>
						</div>
					</div>
					<div className="sum-block" style={{paddingBottom: "1.5em"}}>
						<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Блок</div>
						<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
							<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Бумага:</div>
							<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.binding.soft.block.paper}</div>
						</div>
						<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
							<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Плотность бумаги (г/м2):</div>
							<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.binding.soft.block.paperDensity}</div>
						</div>
						<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
							<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Способ скрепления страниц:</div>
							<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.binding.soft.block.pageBinding}</div>
						</div>
						<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
							<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Красочность печати:</div>
							<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.binding.soft.block.printColorfulness}</div>
						</div>
					</div>
				</>
			}
			<div className="sum-block" style={{paddingBottom: "1.5em"}}>
				<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Дополнительная отделка</div>
				<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
					<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Выборочное УФ-лакирование:</div>
					<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.finishing.additionalFinishing.includes('выборочный уф-ЛАК') ? 'Да' : 'Нет'}</div>
				</div>
				<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
					<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Тиснение фольгой:</div>
					<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.finishing.additionalFinishing.includes('Тиснение фольгой') ? 'Да' : 'Нет'}</div>
				</div>
				<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
					<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Конгревное тиснение:</div>
					<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.finishing.additionalFinishing.includes('Конгревное тиснение') ? 'Да' : 'Нет'}</div>
				</div>
				<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
					<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Ламинация обложки:</div>
					<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.finishing.additionalFinishing.includes('ламинация обложки') ? form.finishing.coverLamination : 'Нет'}</div>
				</div>
			</div>
		</>;
	}

	const renderLeaflets = (form, title) => {
		return <>
			<div className="sum-block" style={{paddingBottom: "1.5em"}}>
				<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Формат продукции</div>
				<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
					<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Тип продукции:</div>
					<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{title}</div>
				</div>
				<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
					<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Тираж:</div>
					<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{request.formFooter.circulation} экземпляров</div>
				</div>
				<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
					<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Формат (Ш х В):</div>
					<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.format.width} x {form.format.height} мм</div>
				</div>
			</div>
			<div className="sum-block" style={{paddingBottom: "1.5em"}}>
				<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Параметры</div>
				<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
					<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Бумага:</div>
					<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.params.paper}</div>
				</div>
				<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
					<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Плотность бумаги (г/м2):</div>
					<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.params.paperDensity}</div>
				</div>
				<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
					<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Красочность печати:</div>
					<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{form.params.printColorfulness}</div>
				</div>
			</div>
		</>
	}

	const [isLoading, setIsLoading] = useState(false)

	const saveData = async () => {
		let resp = '', htmlData = document.getElementById('cp-summary-box').innerHTML;
		setIsLoading(true)
		try {
			const response = await fetch('/ajax/send/send.php', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					html: htmlData,
					files: request.files
				})
			});
			resp = await response.json();
			if (!response.ok) {
				setIsLoading(false);
				throw new Error(resp.error.description);
			}
			setIsLoading(false);
			setStep(4);
		} catch (e) {
			setIsLoading(false);
			if (e.message === 'Failed to fetch') {
				throw new Error('Нет соединения с сервером')
			} else {
				throw new Error(e.message)
			}
		}
	}

	return (
		<div className="cp-summary-form">
			<div className="cp-row">
				<div className="cp-title">Подтверждение данных</div>
				<div className="cp-text">Проверьте и подтвердите правильность оформления заказа</div>
				<div id='cp-summary-box' className="cp-summary-box">
					{request.manager &&
						<div className="sum-block" style={{paddingBottom: "1.5em"}}>
							<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Ваш менеджер:</div>
							<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
								<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>{request.manager}</div>
							</div>
						</div>
					}
					{renderResults(request.formId, request.form)}
					{request.files.length > 0 &&
						<div className="sum-block" style={{paddingBottom: "1.5em"}}>
							<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Файлы:</div>
							{request.files.map((file, index) =>
								<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }} key={index}>
									<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>
										<a href={file.url} style={{ color: '#47669D'}}>{file.name}</a>
									</div>
								</div>
							)}
						</div>
					}
					{request.formFooter.comment &&
						<div className="sum-block" style={{paddingBottom: "1.5em"}}>
							<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Коментарий:</div>
							<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
								<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>{request.formFooter.comment}</div>
							</div>
						</div>
					}
					<div className="sum-block" style={{paddingBottom: "1.5em"}}>
						<div className="sum-block-title" style={{ marginBottom: "0.6em", fontWeight: 700, fontSize: "1.4em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase" }}>Данные пользователя:</div>
						<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
							<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>ФИО:</div>
							<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{request.user.surname} {request.user.name} {request.user.patronymic}</div>
						</div>
						<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
							<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Телефон:</div>
							<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{request.user.phone}</div>
						</div>
						<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
							<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>E-mail:</div>
							<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{request.user.email}</div>
						</div>
						<div className="sum-row" style={{ display: "flex",marginBottom: "0.5em", fontSize: "1em", color: "#424A55" }}>
							<div className="sum-title" style={{ marginBottom: "0.5em", fontSize: "1em", lineHeight: 1.2 }}>Организация:</div>
							<div className="sum-val" style={{ marginLeft: "1em", fontWeight: 700, fontSize: "0.9em", lineHeight: 1.25, color: "#424A55", textTransform: "uppercase"}}>{request.user.entity}</div>
						</div>
					</div>
				</div>
				<div className="cp-actions">
					<div className="btn-white" onClick={() => setStep(2)}><span className="mobHide">Вернуться&nbsp;</span><span>назад</span></div>
					<Button loading={isLoading} className="with-arrow" type="primary" onClick={saveData}>Отправить<IconButton/></Button>
				</div>
			</div>
		</div>
	);
};

export default Summary;
