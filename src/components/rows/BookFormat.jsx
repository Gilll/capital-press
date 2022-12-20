import React from 'react';
import Input from "antd/es/input";

const BookFormat = ({format, setFormat, validate}) => {

	return (
		<div className="cp-row">
			<div className="cp-title">Формат издания</div>
			<div className="cp-item-line">
				<div className="cp-item">
					<Input status={validate && !format.height && "error"} placeholder="Высота (мм)*" value={format.height} onChange={(e) => setFormat({...format, height: e.target.value})}/>
				</div>
				<div className="cp-item">
					<Input status={validate && !format.width && "error"} placeholder="Ширина (мм)*" value={format.width} onChange={(e) => setFormat({...format, width: e.target.value})}/>
				</div>
				<div className="cp-item">
					<Input status={validate && !format.row && "error"} placeholder="количество полос*" value={format.row} onChange={(e) => setFormat({...format, row: e.target.value})}/>
				</div>
			</div>
		</div>
	);
};

export default BookFormat;
