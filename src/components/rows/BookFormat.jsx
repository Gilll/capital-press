import React from 'react';
import NumericInput from "../UI/NumericInput";

const BookFormat = ({format, setFormat, validate}) => {

	return (
		<div className="cp-row">
			<div className="cp-title">Формат издания</div>
			<div className="cp-item-line">
				<div className="cp-item">
					<NumericInput status={validate && !format.height && "error"} placeholder="Высота (мм)*" value={format.height} onChange={(val) => setFormat({...format, height: val})}/>
				</div>
				<div className="cp-item">
					<NumericInput status={validate && !format.width && "error"} placeholder="Ширина (мм)*" value={format.width} onChange={(val) => setFormat({...format, width: val})}/>
				</div>
				<div className="cp-item">
					<NumericInput status={validate && !format.row && "error"} placeholder="количество полос*" value={format.row} onChange={(val) => setFormat({...format, row: val})}/>
				</div>
			</div>
		</div>
	);
};

export default BookFormat;
