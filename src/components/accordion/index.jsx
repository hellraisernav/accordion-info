import { useState } from "react";

import data from "./data";
import "./style.css";
export default function Accordion() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelectio] = useState(false);
    const [multiple, setMultiple] = useState([]);
    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }
    function handleMultiSelction(getCurrentId) {
        let cpyMultiple = [...multiple];
        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

        if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
        else cpyMultiple.splice(findIndexOfCurrentId, 1);
        setMultiple(cpyMultiple);
    }
    console.log(selected, multiple);
    return (
        <div className='wrapper'>
            <button
                onClick={() => setEnableMultiSelectio(!enableMultiSelection)}
            >
                Enable Multi Selection
            </button>
            <div className='accordian'>
                {data && data.length > 0 ? (
                    data.map((dataItem) => (
                        // eslint-disable-next-line react/jsx-key
                        <div className='item'>
                            <div
                                onClick={
                                    enableMultiSelection
                                        ? () => handleMultiSelction(dataItem.id)
                                        : () =>
                                              handleSingleSelection(dataItem.id)
                                }
                                className='title'
                            >
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {selected === dataItem.id ||
                            multiple.indexOf(dataItem.id) !== -1 ? (
                                <div className='content'>{dataItem.answer}</div>
                            ) : null}
                        </div>
                    ))
                ) : (
                    <div>No data found</div>
                )}
            </div>
        </div>
    );
}
