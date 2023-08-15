import { data as Info } from "../data";


const List = () => {
    return (
        <div className="bg-white max-w-5xl mx-auto p-4">
            <h1 className="text-3xl uppercase underline text-left min-w-[400px]">Accordion-self closing</h1>
            {Info.map((item, index) => {
                const { id, title, tagline, description } = item;

                return (
                    <div className="accordion text-left min-w-[400px] my-4" key={id}>
                        <div className="header">
                            <h3 className="text-2xl">{title}</h3>
                        </div>
                        <div className="content text-left">
                            <p className="font-semibold">{tagline}</p>
                            <p>{description}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default List;
