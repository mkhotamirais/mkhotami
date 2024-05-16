import { useEffect } from "react";
import { useGetProductsQuery } from "../../../../../app/api/productApiSlice";
import { CardGrid, Err, Loading } from "../../../../../components/Components";
import ShopAdmProdItems from "./ShopAdmProdItems";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";

const ShopAdmProd = () => {
  const { data, isLoading, isError, isSuccess, error } = useGetProductsQuery();
  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);
  let content;
  if (isLoading) content = <Loading />;
  else if (isError) content = <Err>{error}</Err>;
  else if (isSuccess) {
    const renderedProduct = data.map((item) => <ShopAdmProdItems key={item?._id} item={item} />);
    content = <CardGrid>{renderedProduct}</CardGrid>;
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <div>Product List</div>
        <Link to="post" className="bg-cyan-500 p-2 text-sm rounded-full text-white hover:opacity-70">
          <FaPlus />
        </Link>
      </div>
      <div className="mt-2">{content}</div>
    </>
  );
};

export default ShopAdmProd;
