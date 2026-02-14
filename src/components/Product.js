import Card from "./common/Card";

const Product = ({ data }) => {
  return (
    <div className="product">
      <div className="box">
        <Card
          id={data.id}
          title={data.title}
          category={data.category}
          description={data.description}
          image={data.image}
          price={data.price}
          rating={data.rating.rate}
        />
      </div>
    </div>
  );
};

export default Product;
