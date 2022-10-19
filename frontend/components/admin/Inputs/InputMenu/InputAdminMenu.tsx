import { useMutation, useQuery } from "@apollo/client";
import React, { FC, useEffect } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { CREATE_MENU, UPDATE_MENU, GET_ALL_MENU } from "../../../../graphql/menu.graphql";

import s from "./InputAdminMenu.module.scss";

interface InputAdminMenuProps {
  inputActive: boolean;
  inputRef?: any;
  initTitle?: string;
  inputConfirm: () => void;
}

const InputAdminMenu: FC<InputAdminMenuProps> = ({
  inputActive,
  inputRef,
  initTitle,
  inputConfirm,
}) => {
  const [createMenuName, {data, loading, error}] = useMutation(CREATE_MENU);
  const m = useQuery(GET_ALL_MENU);

  console.log('m', m.data);

  const handleEditChange = (e) => {
    console.log(inputRef.current.value);
  };

  function inputConfirm_() {
    console.log('sdfkkjhhhhhh');
    
     createMenuName({
      variables: {
        name: "zzzzzzz"
      }
    });
  };

  

  useEffect(() => {
    inputRef.current.value = initTitle;
  }, [inputActive]);
  return (
    <div className={inputActive ? s.edit + " " + s.active : s.edit}>
      <input ref={inputRef} type="text" onChange={handleEditChange} />
      <div className={s.btn} onClick={inputConfirm_}>
        <AiOutlineCheck size={20} />
      </div>
    </div>
  );
};

export default InputAdminMenu;
