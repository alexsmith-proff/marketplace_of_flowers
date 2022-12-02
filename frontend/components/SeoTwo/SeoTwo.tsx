import React, { FC } from 'react'

import s from './SeoTwo.module.scss'

interface SeoTwoProps {
}

const SeoTwo: FC<SeoTwoProps> = ({ }) => {

    return (
        <>
            <section className={s.seoTwo}>
                <div className="container">
                    <div className={s.seoTwo__MainTitle}>Почему Лавка Роз</div>
                    <p className={s.seoTwo__text}>Мы предоставляем исключительно комфортные условия взаимодействия всем категориям покупателей, в том числе коммерческим и корпоративным:</p>
                    <ul className={s.seoTwo__list}>
                        <li className={s.seoTwo__item}>Удобные способы оплаты – наличными, банковскими картами, по безналичному расчету.</li>
                        <li className={s.seoTwo__item}>Вручение по любому адресу (город + пригород) в течение 2 часов.</li>
                        <li className={s.seoTwo__item}>Работаем ежедневно, в том числе в выходные и праздничные дни.</li>
                        <li className={s.seoTwo__item}>Пошаговое консультационное и информационное сопровождение.</li>
                        <li className={s.seoTwo__item}>Предоставление фото- и видеоотчетов (по желанию).</li>
                    </ul>
                    <img className={s.seoTwo__bg} src="../../../img/seo2.png" alt="seo2 " />
                    <img className={s.seoTwo__bgImg} src="../../../img/seo2_img.png" alt="seo2-img" />
                </div>
            </section>
        </>
    )
};

export default SeoTwo;
