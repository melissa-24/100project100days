
const CategoryCard = ({ data }) => {

    return (
        <div>
            <h2>Categories</h2>
            <ul>
                {data.map((category, index) => (
                <li key={index}>{category.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryCard;
