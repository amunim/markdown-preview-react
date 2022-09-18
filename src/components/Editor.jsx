import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompress, faArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateMarkdown } from '../stores/markdownStore';


export default function Editor({ id, onExpandCollapse, compressed }) {
    const [text, setText] = useState(useSelector(state => state.markdown));
    const dispatch = useDispatch();

    return (
        <>
            <div className={`flex flex-col items-center my-4 ${(compressed) ? " h-max" : ""}`}>
                <div className="border-[1.5px] p-0 w-[30rem] shadow-2xl">
                    <div className="bg-secondary p-1 m-0">
                        <div className="flex flex-row my-0 justify-start border-b-2">
                            <FontAwesomeIcon className="mt-1" icon={faFreeCodeCamp} />
                            <h2 className=" font-bold ml-1">Editor</h2>

                            <div
                                className="ml-auto hover:bg-secondary"
                                onClick={() => onExpandCollapse()}>
                                <FontAwesomeIcon
                                    className="mt-1 changeonhover"
                                    icon={compressed ? faCompress : faArrowsAlt}
                                />
                            </div>
                        </div>
                    </div>
                    <textarea
                        id={id}
                        className="m-0 p-0 bg-highlightbg resize-y min-h-[140px] -mb-1 w-full"
                        value={text}
                        onChange={(event) => {
                            setText(event.target.value);
                            dispatch(updateMarkdown(event.target.value));
                        }}
                    />
                </div>
            </div>

        </>
    )
}