import React, { FC, useState } from "react";
import { IProductFilter } from "../../../../interfaces/products.interface";
import { IFilterElement } from "../../../../interfaces/filter.interface";
import ButtonAdmin from "../../Buttons/ButtonAdmin/ButtonAdmin";
import { AdminButtonFunctional, AdminButtonType } from "../../../../enums/AdminButtons.enum";
// import { AiOutlinePlus } from 'react-icons/ai';
import {
    AiOutlinePlus,
    AiOutlineRight,
    AiOutlineMore,
    AiOutlineCheck,
} from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import { RiEdit2Line } from 'react-icons/ri';


import s from "./FilterTable.module.scss";

interface FilterTableProps {
    filterArrInTable: IProductFilter[]
    filterElementArr: IFilterElement[]
}


const FilterTable: FC<FilterTableProps> = ({ filterArrInTable, filterElementArr }) => {
    const [dataArrInTable, setDataArrInTable] = useState<IProductFilter[]>(filterArrInTable)
    const [isFilterCreate, setIsFilterCreate] = useState<boolean>(false)




    const addEmptyFilter = () => {
        setDataArrInTable([...dataArrInTable, {
            id: null,
            name: null,
            slug: null,
            values: null,
            activeIndexFilterElement: 0,
            isActiveCreateBtn: true,
            isActiveEditBtn: false,
            isActiveDeleteBtn: false,
        }])
        setIsFilterCreate(false)
    }

    const handleChangeFilterElementCheckBox = (e: React.ChangeEvent<HTMLSelectElement>, indexCheckBox: number) => {
        console.log('e', e.target.value);

        e.preventDefault()
        const indexFilterElement = filterElementArr.findIndex((item) => item.name === e.target.value)

        console.log('indexFilterElement', indexFilterElement);


        setDataArrInTable(dataArrInTable.map((item, index) => index === indexCheckBox ? { ...item, activeIndexFilterElement: indexFilterElement } : item))
        // setCheckBoxFilterElementValue(e.target.value)
        console.log('dataArrInTableeeee', dataArrInTable);
    }


    return (
        <>
            <table className={s.table}>
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Фильтр</th>
                        <th>Значение</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataArrInTable.map((item, index) => (
                            <tr className={s.tr}>
                                <td>{index + 1}</td>
                                <td>
                                    <select className={s.filterCkeckbox} onChange={(e) => handleChangeFilterElementCheckBox(e, index)}>
                                        {
                                            filterElementArr.map((itemCheckBox, index) => <option key={index}>{itemCheckBox.name}</option>)
                                        }
                                    </select>
                                </td>
                                <td className={s.value}>
                                    <div className={s.valueLeft}>
                                        <select className={s.filterCheckboxValue}>
                                            {
                                                filterElementArr[item.activeIndexFilterElement].values.map((itemCheckBox, index) => <option key={index}>{itemCheckBox.name}</option>)
                                            }
                                        </select>
                                        {
                                            item.isActiveCreateBtn && (
                                                <div className={s.button}>
                                                    <ButtonAdmin typeBtn={AdminButtonType.Ico} functionalBtn={AdminButtonFunctional.Standard} border={false} ico={<AiOutlineCheck />} sizeIco={20} />
                                                </div>
                                            )
                                        }
                                        {
                                            item.isActiveEditBtn && (
                                                <div className={s.button}>
                                                    <ButtonAdmin typeBtn={AdminButtonType.Ico} functionalBtn={AdminButtonFunctional.Standard} border={false} ico={<RiEdit2Line />} sizeIco={20} />
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className={s.valueRight}>
                                        {
                                            item.isActiveDeleteBtn && (
                                                <div className={s.button}>
                                                    <ButtonAdmin typeBtn={AdminButtonType.Ico} functionalBtn={AdminButtonFunctional.Standard} border={false} ico={<MdDeleteOutline />} sizeIco={20} />
                                                </div>
                                            )
                                        }
                                    </div>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
            <ButtonAdmin typeBtn={AdminButtonType.Text} functionalBtn={AdminButtonFunctional.Standard} border={true} clickBtn={addEmptyFilter}>Добавить фильтр</ButtonAdmin>
        </>
    );
};

export default FilterTable;