import { data as Info } from "../data";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";


const List = () => {
    const [selectedId, setSelectedId] = useState(null);

    console.log(selectedId);

    // "will be used to toggle the display of the content. If the clicking on the selected item, content will be displayed as the item will put the id of the selected item in the state. 
    // If the selected item is clicked again, the content will be hidden as the id of the selected item will be removed from the state (will be set to null)."

    const toggleDisplay = (id) => {
        if (selectedId === id) {
            setSelectedId(null);
        } else {
            setSelectedId(id);
        }
    };


    return (
        <div className="bg-white max-w-5xl mx-auto p-4">
            <h1 className="text-3xl uppercase underline text-left min-w-[400px]">Accordion-self closing</h1>
            {Info.map((item, index) => {
                const { id, title, tagline, description } = item;
                const isActive = selectedId === id;

                return (
                    <div className="accordion text-left min-w-[800px] my-4" key={id}>
                        <div className="header flex items-center justify-between my-4 border-b-2 border-gray-200 py-4">
                            <h3 className="text-2xl">{title}</h3>
                            <button onClick={() => { toggleDisplay(id); }}>
                                {isActive ? <AiOutlineClose className="text-2xl" /> : <BsPlusLg className="text-2xl" />
                                }
                            </button>
                        </div>
                        {isActive && <div className="content text-left">
                            <p className="font-semibold">{tagline}</p>
                            <p>{description}</p>
                        </div>}
                    </div>
                );
            })}
        </div>
    );
};

export default List;
