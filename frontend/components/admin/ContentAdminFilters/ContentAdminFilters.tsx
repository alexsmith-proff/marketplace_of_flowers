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
import { CREATE_FILTER, CREATE_FILTER_ELEMENT, DELETE_FILTER, DELETE_FILTER_ELEMENT, GET_ALL_FILTERS, UPDATE_FILTER, UPDATE_FILTER_ELEMENT } from "../../../graphql/filters.graphql";
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

    const editUpdateRef = useRef(null)
    const editCreateRef = useRef(null)

    const [filterArr, setFilterArr] = useState<IFilter[]>(null);
    const [currentIndexFilter, setCurrentIndexFilter] = useState<number>(0);
    const [currentIndexFilterItem, setCurrentIndexFilterItem] = useState<number>(0)
    const [editFilterUpdateActive, setEditFilterUpdateActive] = useState<boolean>(false)
    const [editFilterCreateActive, setEditFilterCreateActive] = useState<boolean>(false)

    const [filterItemActive, setFilterItemActive] = useState<boolean>(true)


//   const [menuItemActive, setMenuItemActive] = useState<boolean>(true)
//   const [submenuItemActive, setSubMenuItemActive] = useState<boolean>(false)
//   const [submenuItemTwoActive, setSubMenuItemTwoActive] = useState<boolean>(false)
//   const [currentIndexMenuItem, setCurrentIndexMenuItem] = useState<number>(0)
//   const [currentIndexSubmenuItem, setCurrentIndexSubMenuItem] = useState<number>(null)
//   const [currentIndexSubmenuItemTwo, setCurrentIndexSubMenuItemTwo] = useState<number>(null)
//   const menus = useQuery(GET_ALL_MENU);
//   const [loadMenu, ddd] = useLazyQuery(GET_ALL_MENU);
//   const [createMenuName, dataCreateMenuName] = useMutation(CREATE_MENU_NAME)
//   const [updateMenuName, dataUpdateMenuName] = useMutation(UPDATE_MENU_NAME)
//   const [deleteMenuName, dataDeleteMenuName] = useMutation(DELETE_MENU_NAME)
//   const [createMenuItemName, dataCreateMenuItemName] = useMutation(CREATE_MENU_ITEM_NAME)
//   const [updateMenuItemName, dataUpdateMenuItemName] = useMutation(UPDATE_MENU_ITEM_NAME)
//   const [deleteMenuItemName, dataDeleteMenuItemName] = useMutation(DELETE_MENU_ITEM_NAME)
//   const [createSubMenuItemName, dataCreateSubMenuItemName] = useMutation(CREATE_SUBMENU_ITEM_NAME)
//   const [updateSubMenuItemName, dataUpdateSubMenuItemName] = useMutation(UPDATE_SUBMENU_ITEM_NAME)
//   const [deleteSubMenuItemName, dataDeleteSubMenuItemName] = useMutation(DELETE_SUBMENU_ITEM_NAME)
//   const [createSubMenuItemTwoName, dataCreateSubMenuItemTwoName] = useMutation(CREATE_SUBMENU_ITEM_TWO_NAME)
//   const [updateSubMenuItemTwoName, dataUpdateSubMenuItemTwoName] = useMutation(UPDATE_SUBMENU_ITEM_TWO_NAME)
//   const [deleteSubMenuItemTwoName, dataDeleteSubMenuItemTwoName] = useMutation(DELETE_SUBMENU_ITEM_TWO_NAME) 
//   const editUpdateMenuRef = useRef(null)
//   const editCreateMenuRef = useRef(null)
//   const [menuArr, setMenuArr] = useState<IMenu[]>(null);
//   const [currentIndexMenu, setCurrentIndexMenu] = useState<number>(0);
//   const [editMenuUpdateActive, setEditMenuUpdateActive] = useState<boolean>(false)
//   const [editMenuCreateActive, setEditMenuCreateActive] = useState<boolean>(false)
//   const [menuItemActive, setMenuItemActive] = useState<boolean>(true)
//   const [submenuItemActive, setSubMenuItemActive] = useState<boolean>(false)
//   const [submenuItemTwoActive, setSubMenuItemTwoActive] = useState<boolean>(false)
//   const [currentIndexMenuItem, setCurrentIndexMenuItem] = useState<number>(0)
//   const [currentIndexSubmenuItem, setCurrentIndexSubMenuItem] = useState<number>(null)
//   const [currentIndexSubmenuItemTwo, setCurrentIndexSubMenuItemTwo] = useState<number>(null)




  const handleChangeComboBox = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentIndexFilter(Number(e.target.value))
    setCurrentIndexFilterItem(null)
  };

  const clickToItemFilterItem = (index) => {
    setCurrentIndexFilterItem(index)
    // setCurrentIndexSubMenuItem(null)
    // setCurrentIndexSubMenuItemTwo(null)

    // setSubMenuItemActive(true)
    // setSubMenuItemTwoActive(false)
  }
//   const clickToItemSubMenuItem = (index) => {
//     setCurrentIndexSubMenuItem(index)
//     setCurrentIndexSubMenuItemTwo(null)
//     setSubMenuItemTwoActive(true)
//   }
//   const clickToItemSubMenuItemTwo = (index) => {
//     setCurrentIndexSubMenuItemTwo(index)
//   }

  const handleEditCreateFilter = () => {
    createFilter({
      variables: {
        createFilterInput: {
          name: editCreateRef.current.value,
          // serial_number: +filters.data.getAllFilter.length * 100
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
    console.log('upppaspasd', editUpdateRef.current.value);
    
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
    console.log('handleEditCreateFilterElement');
    
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
    console.log('handleEditUpdateFilterElement');
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
    console.log('handleUpdateSlugFilterElement');
    updateFilterElement({
      variables: {
        updateFilterElementInput: {
          id: +filters.data.getAllFilter[currentIndexFilter].elements[index].id,
          slug: slug
        },
      }
    })
  }

  // const handleUpdateLinkFilterItem = (index, link) => {
  //   updateFilterItemName({
  //     variables: {
  //       updateMenuItemInput: {
  //         id: +menus.data.getAllMenus[currentIndexMenu].items[index].id,
  //         link: link
  //       },
  //     }
  //   })
  // }
  const handleEditDeleteFilterElement = (index) => {
    console.log('handleEditDeleteFilterElement');
    // setCurrentIndexSubMenuItemTwo(null)
    // setCurrentIndexSubMenuItem(null)
    // setSubMenuItemActive(false)
    // setSubMenuItemTwoActive(false)

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

//   const handleEditCreateSubMenuItemName = (name) => {
//     createSubMenuItemName({
//       variables: {
//         createSubmenuItemInput: {
//           name: name,
//           menuitem_id: +menus.data.getAllMenus[currentIndexMenu].items[currentIndexMenuItem].id,
//           serial_number: +menus.data.getAllMenus[currentIndexMenu].items[currentIndexMenuItem].submenuitems.length * 100
//         }
//       },
//       refetchQueries: [
//         {
//           query: GET_ALL_MENU
//         }
//       ]
//     })
//   }
//   const handleEditUpdateSubMenuItemName = (index, name) => {    
//     updateSubMenuItemName({
//       variables: {
//         updateSubmenuItemInput: {
//           id: +menus.data.getAllMenus[currentIndexMenu].items[currentIndexMenuItem].submenuitems[index].id,
//           name: name
//         }
//       }
//     })
//   }
//   const handleUpdateSerialNumberByIndexSubMenuItem = (index, serialNumber) => {
//     updateSubMenuItemName({
//       variables: {
//         updateSubmenuItemInput: {
//           id: +menus.data.getAllMenus[currentIndexMenu].items[currentIndexMenuItem].submenuitems[index].id,
//           serial_number: serialNumber
//         }
//       },
//       refetchQueries: [
//         {
//           query: GET_ALL_MENU
//         }
//       ]
//     })
//   }
//   const handleUpdateSerialNumberByIDSubMenuItem = (id: number, serialNumber:number) => {
//     updateSubMenuItemName({
//       variables: {
//         updateSubmenuItemInput: {
//           id: +id,
//           serial_number: +serialNumber
//         }
//       },
//       refetchQueries: [
//         {
//           query: GET_ALL_MENU
//         }
//       ]
//     })
//   }
//   const handleUpdateLinkSubMenuItem = (index, link) => {
//     updateSubMenuItemName({
//       variables: {
//         updateSubmenuItemInput: {
//           id: +menus.data.getAllMenus[currentIndexMenu].items[currentIndexMenuItem].submenuitems[index].id,
//           link: link
//         },
//       }
//     })
//   }
//   const handleUpdateSlugSubMenuItem = (index, slug) => {
//     updateSubMenuItemName({
//       variables: {
//         updateSubmenuItemInput: {
//           id: +menus.data.getAllMenus[currentIndexMenu].items[currentIndexMenuItem].submenuitems[index].id,
//           slug: slug
//         },
//       }
//     })
//   }
//   const handleEditDeleteSubMenuItemName = (index) => {
//     setCurrentIndexSubMenuItemTwo(null)
//     setSubMenuItemTwoActive(false)
    
//     deleteSubMenuItemName({
//       variables: {
//         id: +menus.data.getAllMenus[currentIndexMenu].items[currentIndexMenuItem].submenuitems[index].id
//       },
//       refetchQueries: [
//         {
//           query: GET_ALL_MENU
//         }
//       ]
//     })
//   }

//   const handleEditCreateSubMenuItemTwoName = (name) => {
//     createSubMenuItemTwoName({
//       variables: {
//         createSubmenuItemTwoInput: {
//           name: name,
//           menuitem_id: +menus.data.getAllMenus[currentIndexMenu].items[currentIndexMenuItem].submenuitems[currentIndexSubmenuItem].id,
//           serial_number: +menus.data.getAllMenus[currentIndexMenu].items[currentIndexMenuItem].submenuitems[currentIndexSubmenuItem].submenuitems.length * 100
//         }
//       },
//       refetchQueries: [
//         {
//           query: GET_ALL_MENU
//         }
//       ]
//     })
//   }
//   const handleEditUpdateSubMenuItemTwoName = (index, name) => {
//     updateSubMenuItemTwoName({
//       variables: {
//         updateSubmenuItemTwoInput: {
//           id: +menus.data.getAllMenus[currentIndexMenu].items[currentIndexMenuItem].submenuitems[currentIndexSubmenuItem].submenuitems[index].id,
//           name: name
//         }
//       }
//     })
//   }
//   const handleUpdateSerialNumberByIndexSubMenuItemTwo = (index, serialNumber) => {
//     updateSubMenuItemTwoName({
//       variables: {
//         updateSubmenuItemTwoInput: {
//           id: +menus.data.getAllMenus[currentIndexMenu].items[currentIndexMenuItem].submenuitems[currentIndexSubmenuItem].submenuitems[index].id,
//           serial_number: serialNumber
//         }
//       },
//       refetchQueries: [
//         {
//           query: GET_ALL_MENU
//         }
//       ]
//     })
//   }
//   const handleUpdateSerialNumberByIDSubMenuItemTwo = (id: number, serialNumber: number) => {
//     updateSubMenuItemTwoName({
//       variables: {
//         updateSubmenuItemTwoInput: {
//           id: +id,
//           serial_number: +serialNumber
//         }
//       },
//       refetchQueries: [
//         {
//           query: GET_ALL_MENU
//         }
//       ]
//     })
//   }
//   const handleUpdateLinkSubMenuItemTwo = (index, link) => {
//     updateSubMenuItemTwoName({
//       variables: {
//         updateSubmenuItemTwoInput: {
//           id: +menus.data.getAllMenus[currentIndexMenu].items[currentIndexMenuItem].submenuitems[currentIndexSubmenuItem].submenuitems[index].id,
//           link: link
//         },
//       }
//     })
//   }
//   const handleUpdateSlugSubMenuItemTwo = (index, slug) => {
//     updateSubMenuItemTwoName({
//       variables: {
//         updateSubmenuItemTwoInput: {
//           id: +menus.data.getAllMenus[currentIndexMenu].items[currentIndexMenuItem].submenuitems[currentIndexSubmenuItem].submenuitems[index].id,
//           slug: slug
//         },
//       }
//     })
//   }
//   const handleEditDeleteSubMenuItemTwoName = (index) => {
//     deleteSubMenuItemTwoName({
//       variables: {
//         id: +menus.data.getAllMenus[currentIndexMenu].items[currentIndexMenuItem].submenuitems[currentIndexSubmenuItem].submenuitems[index].id
//       },
//       refetchQueries: [
//         {
//           query: GET_ALL_MENU
//         }
//       ]
//     })
//   }

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
              filterItemActive &&
              <WindowListAdmin
              typeList={AdminListType.Filter}
                visible={filterItemActive}
                title={filters.data.getAllFilter[currentIndexFilter].name}
                itemArr={filters.data.getAllFilter[currentIndexFilter].elements}
                clickToItem={clickToItemFilterItem}
                createItemName={handleEditCreateFilterElement}
                updateItemName={handleEditUpdateFilterElement}
                deleteItemName={handleEditDeleteFilterElement}
                updateSlug={handleUpdateSlugFilterElement}
              />
            }
            {/* {
              submenuItemActive &&
              <WindowListAdmin
                visible={submenuItemActive}
                title={menus.data.getAllMenus[currentIndexMenu].items[currentIndexMenuItem].name}
                clickToItem={clickToItemSubMenuItem}
                itemArr={menus.data.getAllMenus[currentIndexMenu].items[currentIndexMenuItem].submenuitems}
                createItemName={handleEditCreateSubMenuItemName}
                updateItemName={handleEditUpdateSubMenuItemName}
                deleteItemName={handleEditDeleteSubMenuItemName}
                updateSerialNumberByIndex={handleUpdateSerialNumberByIndexSubMenuItem}
                updateSerialNumberById={handleUpdateSerialNumberByIDSubMenuItem}
                updateLink={handleUpdateLinkSubMenuItem}
                updateSlug={handleUpdateSlugSubMenuItem}
              />
            } */}
            {/* {
              // currentIndexSubmenuItem != null &&
              submenuItemTwoActive &&
              <WindowListAdmin
                visible={submenuItemTwoActive}
                title={menus.data.getAllMenus[currentIndexMenu].items[currentIndexMenuItem].submenuitems[currentIndexSubmenuItem].name}
                clickToItem={clickToItemSubMenuItemTwo}
                itemArr={menus.data.getAllMenus[currentIndexMenu].items[currentIndexMenuItem].submenuitems[currentIndexSubmenuItem].submenuitems}
                createItemName={handleEditCreateSubMenuItemTwoName}
                updateItemName={handleEditUpdateSubMenuItemTwoName}
                deleteItemName={handleEditDeleteSubMenuItemTwoName}
                updateSerialNumberByIndex={handleUpdateSerialNumberByIndexSubMenuItemTwo}
                updateSerialNumberById={handleUpdateSerialNumberByIDSubMenuItem}
                updateLink={handleUpdateLinkSubMenuItemTwo}
                updateSlug={handleUpdateSlugSubMenuItemTwo}
              />
            } */}
          </>
        }
      </div>
    </>
  );
};

export default ContentAdminFilters;
