import React, { useEffect, useRef, useState } from "react";
import { RiEdit2Line } from 'react-icons/ri';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdDeleteOutline } from 'react-icons/md';

import ButtonAdmin from "../Buttons/ButtonAdmin/ButtonAdmin";

import s from "./ContentAdminFilters.module.scss";

import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import InputAdminMenu from "../Inputs/InputMenu/InputAdminMenu";
import { AdminButtonFunctional, AdminButtonType } from "../../../enums/AdminButtons.enum";
import WindowListAdmin from "../WindowListAdmin/WindowListAdmin";
import { CREATE_FILTER, CREATE_FILTER_ELEMENT, CREATE_FILTER_VALUE, DELETE_FILTER, DELETE_FILTER_ELEMENT, DELETE_FILTER_VALUE, GET_ALL_FILTERS, UPDATE_FILTER, UPDATE_FILTER_ELEMENT, UPDATE_FILTER_VALUE } from "../../../graphql/filters.graphql";
import { IFilter } from "../../../interfaces/filter.interface";
import { AdminListType } from "../../../enums/AdminList.enum";

interface ContentAdminFiltersProps { }

const ContentAdminFilters = ({ }: ContentAdminFiltersProps) => {
  const filters = useQuery(GET_ALL_FILTERS);
  const [createFilter, dataCreateFilter] = useMutation(CREATE_FILTER)
  const [updateFilter, dataUpdateFilter] = useMutation(UPDATE_FILTER)
  const [deleteFilter, dataDeleteFilter] = useMutation(DELETE_FILTER)

  const [createFilterElement, dataCreateFilterElement] = useMutation(CREATE_FILTER_ELEMENT)
  const [updateFilterElement, dataUpdateFilterElement] = useMutation(UPDATE_FILTER_ELEMENT)
  const [deleteFilterElement, dataDeleteFilterElement] = useMutation(DELETE_FILTER_ELEMENT)

  const [createFilterValue, dataCreateFilterValue] = useMutation(CREATE_FILTER_VALUE)
  const [updateFilterValue, dataUpdateFilterValue] = useMutation(UPDATE_FILTER_VALUE)
  const [deleteFilterValue, dataDeleteFilterValue] = useMutation(DELETE_FILTER_VALUE)

  const editUpdateRef = useRef(null)
  const editCreateRef = useRef(null)

  const [filterArr, setFilterArr] = useState<IFilter[]>(null);
  const [currentIndexFilter, setCurrentIndexFilter] = useState<number>(0);
  const [currentIndexFilterElement, setCurrentIndexFilterElement] = useState<number>(0)
  const [currentIndexFilterValue, setCurrentIndexFilterValue] = useState<number>(0)
  const [editFilterUpdateActive, setEditFilterUpdateActive] = useState<boolean>(false)
  const [editFilterCreateActive, setEditFilterCreateActive] = useState<boolean>(false)

  const [filterElementActive, setFilterElementActive] = useState<boolean>(true)
  const [filterValueActive, setFilterValueActive] = useState<boolean>(false)


  const handleChangeComboBox = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentIndexFilter(Number(e.target.value))
    setCurrentIndexFilterElement(null)
    setCurrentIndexFilterValue(null)

    setFilterValueActive(false)
  };

  const clickToItemFilterElement = (index) => {
    console.log('clickToItemFilterElement index', index);
    
    setCurrentIndexFilterElement(index)
    setCurrentIndexFilterValue(null)
    setFilterValueActive(true)
  }

  const clickToItemFilterValue = (index) => {
    setCurrentIndexFilterValue(index)
    // setFilterValueActive(true)
  }


  const handleEditCreateFilter = () => {
    createFilter({
      variables: {
        createFilterInput: {
          name: editCreateRef.current.value,
        }
      },
      refetchQueries: [
        {
          query: GET_ALL_FILTERS
        }
      ]
    })
    setEditFilterCreateActive(false)
  }
  const handleEditUpdateFilter = () => {
    updateFilter({
      variables: {
        updateFilterInput: {
          id: +filterArr[currentIndexFilter].id,
          name: editUpdateRef.current.value
        }
      }
    })
    setEditFilterUpdateActive(false)
  }
  const handleDeleteFilter = () => {
    deleteFilter({
      variables: {
        id: +filterArr[currentIndexFilter].id
      },
      refetchQueries: [
        {
          query: GET_ALL_FILTERS
        }
      ]
    })
    setCurrentIndexFilter(0)
  }


  const handleEditCreateFilterElement = (name) => {
    createFilterElement({
      variables: {
        createFilterElementInput: {
          name: name,
          filter_id: +filters.data.getAllFilter[currentIndexFilter].id,
        }
      },
      refetchQueries: [
        {
          query: GET_ALL_FILTERS
        }
      ]
    })
  }
  const handleEditUpdateFilterElement = (index, name) => {
    updateFilterElement({
      variables: {
        updateFilterElementInput: {
          id: +filters.data.getAllFilter[currentIndexFilter].elements[index].id,
          name: name
        }
      }
    })
  }

  const handleUpdateSlugFilterElement = (index, slug) => {
    updateFilterElement({
      variables: {
        updateFilterElementInput: {
          id: +filters.data.getAllFilter[currentIndexFilter].elements[index].id,
          slug: slug
        },
      }
    })
  }

  const handleEditDeleteFilterElement = (index) => {
    deleteFilterElement({
      variables: {
        id: +filters.data.getAllFilter[currentIndexFilter].elements[index].id
      },
      refetchQueries: [
        {
          query: GET_ALL_FILTERS
        }
      ]
    })
  }







  const handleEditCreateFilterValue = (name) => {
    createFilterValue({
      variables: {
        createFilterValueInput: {
          name: name,
          filter_element_id: +filters.data.getAllFilter[currentIndexFilter].elements[currentIndexFilterElement].id,
        }
      },
      refetchQueries: [
        {
          query: GET_ALL_FILTERS
        }
      ]
    })
  }
  const handleEditUpdateFilterValue = (index, name) => {
    updateFilterValue({
      variables: {
        updateFilterValueInput: {
          id: +filters.data.getAllFilter[currentIndexFilter].elements[currentIndexFilterElement].values[index].id,
          name: name
        }
      }
    })
  }

  const handleUpdateSlugFilterValue = (index, slug) => {
    updateFilterValue({
      variables: {
        updateFilterValueInput: {
          id: +filters.data.getAllFilter[currentIndexFilter].elements[currentIndexFilterElement].values[index].id,
          slug: slug
        },
      }
    })
  }
  const handleEditDeleteFilterValue = (index) => {
    deleteFilterValue({
      variables: {
        id: +filters.data.getAllFilter[currentIndexFilter].elements[currentIndexFilterElement].values[index].id,
      },
      refetchQueries: [
        {
          query: GET_ALL_FILTERS
        }
      ]
    })
  }


  useEffect(() => {
    // console.log(filters);

    if (filters.data) {
      setFilterArr(filters.data.getAllFilter);
    }
  }, [filters]);

  return (
    <>
      <div className={s.top}>
        <div className={s.dropdown}>
          <select
            name="one"
            className={s.dropdownSelect}
            onChange={handleChangeComboBox}
          >
            {filterArr &&
              filterArr.map((item, index) => (
                <option key={item.id} value={index}>
                  {item.name}
                </option>
              ))}
          </select>
          {
            filterArr != null && filterArr.length > 0 && (
              <InputAdminMenu inputActive={editFilterUpdateActive} inputRef={editUpdateRef} initTitle={filterArr[currentIndexFilter].name} inputConfirm={handleEditUpdateFilter} />
            )
          }
          <InputAdminMenu inputActive={editFilterCreateActive} inputRef={editCreateRef} initTitle="" inputConfirm={handleEditCreateFilter} />
        </div>
        <div className={s.ButtonAdminEdit}>
          <ButtonAdmin typeBtn={AdminButtonType.Ico} functionalBtn={AdminButtonFunctional.ToggleVisibleEdit} border={true} editVisible={editFilterCreateActive} setEditActive={setEditFilterCreateActive} URef={editCreateRef} ico={<AiOutlinePlus />} sizeIco={22} />
        </div>
        <div className={s.ButtonAdminEdit}>
          <ButtonAdmin typeBtn={AdminButtonType.Ico} functionalBtn={AdminButtonFunctional.ToggleVisibleEdit} border={true} editVisible={editFilterUpdateActive} setEditActive={setEditFilterUpdateActive} URef={editUpdateRef} ico={<RiEdit2Line />} sizeIco={22} />
        </div>
        <div className={s.ButtonAdminEdit}>
          <ButtonAdmin typeBtn={AdminButtonType.Ico} functionalBtn={AdminButtonFunctional.Standard} border={true} clickBtn={handleDeleteFilter} ico={<MdDeleteOutline />} sizeIco={22} />
        </div>
      </div>
      <div className={s.menuContainer}>
        {
          filterArr != null && filterArr.length > 0 &&
          <>
            {
              filterElementActive &&
              <WindowListAdmin
                typeList={AdminListType.Filter}
                visible={filterElementActive}
                title={filters.data.getAllFilter[currentIndexFilter].name}
                itemArr={filters.data.getAllFilter[currentIndexFilter].elements}
                clickToItem={clickToItemFilterElement}
                createItemName={handleEditCreateFilterElement}
                updateItemName={handleEditUpdateFilterElement}
                deleteItemName={handleEditDeleteFilterElement}
                updateSlug={handleUpdateSlugFilterElement}
              />
            }
            {
              filterValueActive &&
              <WindowListAdmin
                typeList={AdminListType.Filter}
                visible={filterValueActive}
                title={filters.data.getAllFilter[currentIndexFilter].elements[currentIndexFilterElement].name}
                itemArr={filters.data.getAllFilter[currentIndexFilter].elements[currentIndexFilterElement].values}
                clickToItem={clickToItemFilterValue}
                createItemName={handleEditCreateFilterValue}
                updateItemName={handleEditUpdateFilterValue}
                deleteItemName={handleEditDeleteFilterValue}
                updateSlug={handleUpdateSlugFilterValue}
              />
            }
          </>
        }
      </div>
    </>
  );
};

export default ContentAdminFilters;
