import React, {useEffect, useState} from 'react';
import IconRadio from "../../assets/icons/IconRadio";

const CCheck = ({ children, value, onChange }) => {
	const [curVal, setCurVal] = useState(value || []);
	const toggleValue = (el) => {
		let val = curVal.includes(el) ? curVal.filter((vl) => vl !== el) : [...curVal, el]
		setCurVal(val)
		onChange && onChange(val)
	}

	useEffect(() => {
		setCurVal(value)
	},[value])

	return (
		<>
			<div className='cCheck-group'>
				{children.map((component, index) =>
					component.type.displayName === 'Item' ?
							<div className='cCheck-item' key={index}>
								<Item onClick={() => toggleValue(component.props.value)} cur={curVal} value={component.props.value} className={curVal.includes(component.props.value) ? "cCheck-label checked" : "cCheck-label"}>{component.props.children}</Item>
							</div>
						: <div className='cCheck-item' key={index}>{component}</div>
				)}
			</div>
		</>
	);
};

const Item = (props) => {
	return (
		<div {...props}><IconRadio/>{props.children}</div>
	);
};
Item.displayName = 'Item';
CCheck.Item = Item;

export default CCheck;
