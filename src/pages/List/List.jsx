import React from "react";
import { useNftListQuery } from "src/hooks/queries";
import Spinner from "src/components/Spinner";

const List = () => {
  const { isLoading, data } = useNftListQuery();

  if (isLoading) return <Spinner text="Fetching nft list" />;

  if (!data) return <div>No data.....</div>;

  return (
    <>
      {data.map((item) => (
        <div className="card w-96 bg-base-100 shadow-xl" key={item.id}>
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.username}
              <div className="badge-secondary badge">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge-outline badge">Fashion</div>
              <div className="badge-outline badge">Products</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default List;
