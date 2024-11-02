/* eslint-disable react/no-unescaped-entities */
import { useGetProductsQuery } from "../../redux/redux";
import Depertment from "../Depertment/Depertment";
import Navbar from "../Navbar/Navbar";

const DashboardCard = () => {
  const { data: products, isError, isLoading } = useGetProductsQuery([]);
  console.log(products);
  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <h2>Loading...</h2>
      </div>
    );
  }
  if (!isLoading && !isError && products?.length === 0) {
    return (
      <div className="text-center p-20 ">
        <h2 className="text-lg font-semibold">
          Can't find any products please reload the page and find products
        </h2>
      </div>
    );
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="lg:px-20 md:px-16 px-12 py-4">
        <h2 className="text-2xl font-semibold text-[#262626]/70 mt-4">
          Dashboard
        </h2>

        <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-4 mt-8">
          {products?.map((product) => (
            <div key={product.persen}>
              <div className="border rounded shadow-md flex items-center justify-center text-center flex-col relative py-8">
                <p className="right-4 top-4 absolute text-[#8ECF4D] font-medium">
                  <span>+6%</span>
                  <span></span>
                </p>
                <div>
                  <h2 className="text-2xl font-semibold text-[#262626]/80">
                    {product.total}
                  </h2>
                  <p className="font-medium text-[#262626]/60">
                    {product.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <Depertment></Depertment>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
