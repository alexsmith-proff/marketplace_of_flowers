import React, { FC } from "react";

import s from "./CardViews.module.scss";

interface CardViewsProps {
  text: string;
  count: number;
  ico: JSX.Element;
}

const CardViews: FC<CardViewsProps> = ({ text, count, ico }) => {
  return (
    <div className={s.card}>
      <div className={s.topWrap}>
        <div className={s.text}>{text}</div>
        {ico}
      </div>
      <div className={s.count}>{count}</div>
    </div>
  );
};

export default CardViews;
