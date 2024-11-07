import { useParams } from "react-router-dom";

function Products() {
  let { id } = useParams();
  return <h1>Produk: {id}</h1>;
}
export default Products;
