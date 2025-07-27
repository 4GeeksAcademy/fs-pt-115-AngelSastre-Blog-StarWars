import { Card } from "./Card";

export const CardList = ({ title, items, type }) => {
    return (
        <div className="mb-5">
            <h2 className="text-warning mb-4">{title}</h2>
            <div className="starwars-scroll">
                {items.length === 0 ? (
                    <p className="text-light">Loading {title}...</p>
                ) : (
                    items.map((item, index) => (
                        <div key={index} className="flex-shrink-0">
                            <Card
                                item={item}
                                type={type}
                                imageType={type === "people" ? "characters" : type}
                            />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};


