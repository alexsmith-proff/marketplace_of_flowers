import React from "react";
import CardViews from "../CardViews/CardViews";
import { AiOutlineEye, AiOutlineTeam, AiOutlineAudit, AiOutlineShoppingCart } from "react-icons/ai";

import s from "./ContentAdminMain.module.scss";

interface ContentAdminMainProps {}

const ContentAdminMain = ({}: ContentAdminMainProps) => {
  return (
    <>
      <div className={s.content}>
        <div className={s.cards}>
          <CardViews
            text="Всего просмотров"
            count={964}
            ico={<AiOutlineEye size={30} />}
          />
          <CardViews
            text="Всего заявок"
            count={155}
            ico={<AiOutlineAudit size={30} />}
          />
          <CardViews
            text="Всего покупателей"
            count={95}
            ico={<AiOutlineTeam size={30} />}
          />
          <CardViews
            text="Всего продаж"
            count={107}
            ico={<AiOutlineShoppingCart size={30} />}
          />
        </div>
      </div>
    </>
  );
};

export default ContentAdminMain;
