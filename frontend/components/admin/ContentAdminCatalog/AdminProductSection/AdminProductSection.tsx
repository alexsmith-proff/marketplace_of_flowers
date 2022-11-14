import { useQuery } from "@apollo/client";
import React, { FC, useEffect, useState } from "react";
import { GET_ALL_PRODUCTS } from "../../../../graphql/admin-product.graphql";
import { IAdminProducts } from "../../../../interfaces/products.interface";
import ButtonAdmin from "../../Buttons/ButtonAdmin/ButtonAdmin";
import { AdminButtonType, AdminButtonFunctional } from "../../../../enums/AdminButtons.enum";

import s from "./AdminProductSection.module.scss";

interface AdminProductSectionProps { }

const AdminProductSection: FC<AdminProductSectionProps> = () => {
  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);

  const [products, setProducts] = useState<IAdminProducts[]>(null);

  useEffect(() => {
    if (data) {
      setProducts(data.getAllProducts);
    }
  }, [data]);

  return (
    <div className={s.section}>
      <div className={s.createProduct}>
        <ButtonAdmin typeBtn={AdminButtonType.Text} functionalBtn={AdminButtonFunctional.Standard} border={true} clickBtn={() => null}>
          Создать товар
        </ButtonAdmin>
      </div>


      <table className={s.table}>
        <thead>
          <tr>
            <th>№</th>
            <th>Название</th>
            <th>Артикул</th>
            <th>Цена, руб</th>
            <th>Бренд</th>
            <th>Кол.-во</th>
            <th>Категория</th>

          </tr>
        </thead>
        <tbody>
          {
            products &&
            <>
            {
              products.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.vendor_code}</td>
                  <td>{item.price}</td>
                  <td>{item.brand.name}</td>
                  <td>{item.count_in_stock}</td>
                  <td>Цветы в ящиках</td>
                </tr>
              ))
            }
            </>
          }

        </tbody>
      </table>

      {/* {products && (
        <ul>
          {products.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )} */}


    </div>
  );
};

export default AdminProductSection;
