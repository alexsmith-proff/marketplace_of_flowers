import { useQuery } from "@apollo/client";
import React, { FC, useEffect, useState } from "react";
import { GET_ALL_PRODUCTS } from "../../../../graphql/admin-product.graphql";
import { IAdminProducts } from "../../../../interfaces/products.interface";

import s from "./AdminProductSection.module.scss";

interface AdminProductSectionProps {}

const AdminProductSection: FC<AdminProductSectionProps> = () => {
  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);

  const [products, setProducts] = useState<IAdminProducts[]>(null);

  useEffect(() => {
    if (data) {
      setProducts(data.getAllProducts);
    }
  }, [data]);

  return (
    <>
      {products && (
        <ul>
          {products.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default AdminProductSection;
