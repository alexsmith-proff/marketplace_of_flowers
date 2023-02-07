import React, { FC, useState } from "react";
import { IFilterElement } from "../../../../interfaces/filter.interface";
import ButtonAdmin from "../../Buttons/ButtonAdmin/ButtonAdmin";
import { AdminButtonFunctional, AdminButtonType } from "../../../../enums/AdminButtons.enum";
// import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineCheck } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";


import s from "./FilterTable.module.scss";
import { IProductFilterRowTable } from "../../../../interfaces/products.interface";

interface FilterTableProps {
    filterArrInTable: IProductFilterRowTable[]
    change: (items: IProductFilterRowTable[]) => void
    isReadyCreate: boolean
    filterElementArr: IFilterElement[]
}


const FilterTable: FC<FilterTableProps> = ({ filterArrInTable, change, isReadyCreate, filterElementArr }) => {
    // const [dataArrInTable, setDataArrInTable] = useState<IProductFilterRowTable[]>(filterArrInTable)
    const [isFilterCreate, setIsFilterCreate] = useState<boolean>(false) // Фильтр создан? Если false, то кнопка 'Добавить фильтр' работает, также задает логику кнопок: 'редактировать', 'удалить'


    const addEmptyFilter = () => {
        if (!isFilterCreate) {
            change([...filterArrInTable, {
                filterElementName: '',
                filterValueName: '',
                activeIndexFilterElement: 0,
                isActiveCreateBtn: true,
                isActiveEditBtn: false,
                isActiveDeleteBtn: false,
                hover: false
            }])
            setIsFilterCreate(true)
        }
    }

    const handleChangeFilterElementCheckBox = (e: React.ChangeEvent<HTMLSelectElement>, indexCheckBox: number) => {
        e.preventDefault()
        const indexFilterElement = filterElementArr.findIndex((item) => item.name === e.target.value)
        if(indexFilterElement == -1){
            change(filterArrInTable.map((item, index) => index === indexCheckBox ? { ...item, activeIndexFilterElement: 0, filterElementName: '' } : item))
        }else{
            change(filterArrInTable.map((item, index) => index === indexCheckBox ? { ...item, activeIndexFilterElement: indexFilterElement, filterElementName: e.target.value } : item))
        }
    }
    const handleChangeFilterValueCheckBox = (e: React.ChangeEvent<HTMLSelectElement>, indexCheckBox: number) => {
        e.preventDefault()
        change(filterArrInTable.map((item, index) => index === indexCheckBox ? { ...item, filterValueName: e.target.value } : item))
    }

    const handleClickCreateFilterBtn = (indexFilterRow: number) => {
        if (isReadyCreate) {
            setIsFilterCreate(false)
            change(filterArrInTable.map((item, index) => index === indexFilterRow ? { ...item, isActiveCreateBtn: false, isActiveEditBtn: true, isActiveDeleteBtn: true } : item))
        }
    }

    const handleClickDeleteFilterBtn = async(indexFilterRow: number) => {
        // console.log('filterArrInTable_Before', filterArrInTable);
        // const arr = filterArrInTable.filter((_, index) => index == indexFilterRow)
        // console.log('arr', arr);
        // await change([...arr])

        change([...filterArrInTable.filter((_, index) => index !== indexFilterRow)])

        // console.log('filterArrInTable_After', filterArrInTable);
    }

    console.log('filterArrInTableeeee', filterArrInTable);
    console.log('filterElementArrrrrr', filterElementArr);
    

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
                        filterArrInTable.map((item, index) => (
                            <tr className={s.tr} key={index}>
                                <td>{index + 1}</td>
                                <td>
                                    <select className={s.filterCkeckbox} onChange={(e) => handleChangeFilterElementCheckBox(e, index)}  value={item.filterElementName}>
                                        <option></option>
                                        {
                                            filterElementArr.map((itemCheckBox, index) => <option key={index}>{itemCheckBox.name}</option>)
                                        }
                                    </select>
                                </td>
                                <td className={s.value}>
                                    <div className={s.valueLeft}>
                                        <select className={s.filterCheckboxValue} onChange={(e) => handleChangeFilterValueCheckBox(e, index)} value={item.filterValueName}>
                                            <option></option>
                                            {
                                                filterElementArr[item.activeIndexFilterElement].values.map((itemCheckBox, index) => <option key={index}>{itemCheckBox.name}</option>)
                                            }
                                        </select>
                                        {
                                            item.isActiveCreateBtn && (
                                                // Кнопка создать
                                                <div className={s.button}>
                                                    <ButtonAdmin typeBtn={AdminButtonType.Ico} functionalBtn={AdminButtonFunctional.Standard} border={false} clickBtn={() => handleClickCreateFilterBtn(index)} ico={<AiOutlineCheck />} sizeIco={22} />
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className={s.valueRight}>
                                        {
                                            item.isActiveDeleteBtn && (
                                                // Кнопка удалить
                                                <div className={s.button}>
                                                    <ButtonAdmin typeBtn={AdminButtonType.Ico} functionalBtn={AdminButtonFunctional.Standard} border={false} clickBtn={() => handleClickDeleteFilterBtn(index)} ico={<MdDeleteOutline />} sizeIco={18} />
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