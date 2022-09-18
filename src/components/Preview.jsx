import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompress, faArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import { useSelector } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';

export default function Preview({ id, onExpandCollapse, compressed }) {
    const markdown = useSelector(state => state.markdown);

    return (
        <>
            <div className="flex flex-col items-center my-4 p-10">
                <div className="border-[1.5px] p-0 w-[49rem] shadow-2xl">
                    <div className="bg-secondary p-1 m-0">
                        <div className="flex flex-row my-0 justify-start border-b-2">
                            <FontAwesomeIcon className="mt-1 w-4" icon={faFreeCodeCamp} />
                            <h2 className=" font-bold ml-1">Previewer</h2>

                            <div className="ml-auto" onClick={() => onExpandCollapse()}>
                                <FontAwesomeIcon
                                    className="mt-1 hover:fill-orange-500 changeonhover"
                                    icon={compressed ? faCompress : faArrowsAlt}
                                />
                            </div>
                        </div>
                    </div>
                    <div id={id} className="m-0 py-0 px-4 bg-highlightbg -mb-1 w-full border-b-2">
                        <ReactMarkdown remarkPlugins={[remarkBreaks, remarkGfm]} children={markdown}  />
                    </div>
                </div>
            </div>
        </>
    )
}