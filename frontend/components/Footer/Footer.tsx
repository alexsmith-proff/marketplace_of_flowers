import React, { FC } from 'react'

import s from './Footer.module.scss'

interface FooterProps {
}

const Footer: FC<FooterProps> = ({ }) => {

    return (
        <>
            <footer className={s.footer}>
                <div className="container">
                    <div className={s.footer__top}>
                        <ul className={s.footer__menu}>
                            <li className={s.footer__item}>
                                Цветы поштучно
                                <ul className={s.footer__menuChild}>
                                    <li className={s.footer__menuChildItem}>Розы поштучно</li>
                                    <li className={s.footer__menuChildItem}>Кустовая роза</li>
                                    <li className={s.footer__menuChildItem}>Пионовидная роза</li>
                                    <li className={s.footer__menuChildItem}>Хризантемы поштучно</li>
                                    <li className={s.footer__menuChildItem}>Альстромерия</li>
                                    <li className={s.footer__menuChildItem}>Тюльпаны</li>
                                    <li className={s.footer__menuChildItem}>Герберы поштучно</li>
                                    <li className={s.footer__menuChildItem}>Лилии поштучно</li>
                                    <li className={s.footer__menuChildItem}>Пионы</li>
                                    <li className={s.footer__menuChildItem}>Эустома</li>
                                    <li className={s.footer__menuChildItem}>Каллы поштучно</li>
                                    <li className={s.footer__menuChildItem}>Маттиола</li>
                                </ul>

                            </li>
                            <li className={s.footer__item}>
                                Розы
                                <ul className={s.footer__menuChild}>
                                    <li className={s.footer__menuChildItem}>Голландские розы</li>
                                    <li className={s.footer__menuChildItem}>Местная роза</li>
                                    <li className={s.footer__menuChildItem}>Кустовые розы</li>
                                    <li className={s.footer__menuChildItem}>Пионовидные розы</li>
                                    <li className={s.footer__menuChildItem}>Букет из 101 розы</li>
                                </ul>
                            </li>
                            <li className={s.footer__item}>
                                Букеты
                                <ul className={s.footer__menuChild}>
                                    <li className={s.footer__menuChildItem}>Сборные букеты</li>
                                    <li className={s.footer__menuChildItem}>Букеты из хризантем</li>
                                    <li className={s.footer__menuChildItem}>Букеты из Альстромерий</li>
                                    <li className={s.footer__menuChildItem}>Букеты из эустом</li>
                                    <li className={s.footer__menuChildItem}>Букеты Гипсофилы</li>
                                    <li className={s.footer__menuChildItem}>Букеты из гербер</li>
                                    <li className={s.footer__menuChildItem}>Букеты из пионов</li>
                                    <li className={s.footer__menuChildItem}>Букеты из тюльпанов</li>
                                </ul>
                            </li>
                            <li className={s.footer__item}>
                                Композиции
                                <ul className={s.footer__menuChild}>
                                    <li className={s.footer__menuChildItem}>Ящики с цветами</li>
                                    <li className={s.footer__menuChildItem}>Коробки с цветами</li>
                                    <li className={s.footer__menuChildItem}>Корзины с цветами</li>
                                </ul>
                            </li>
                            <li className={s.footer__item}>
                                Подарки
                                <ul className={s.footer__menuChild}>
                                    <li className={s.footer__menuChildItem}>Мягкие игрушки</li>
                                    <li className={s.footer__menuChildItem}>Коробки конфет</li>
                                </ul>
                            </li>
                            <li className={s.footer__item}>
                                Шары
                                <ul className={s.footer__menuChild}>
                                    <li className={s.footer__menuChildItem}>Шары в виде цифр</li>
                                    <li className={s.footer__menuChildItem}>Фольгированные шары</li>
                                    <li className={s.footer__menuChildItem}>Латексные шары</li>
                                </ul>
                            </li>
                            <li className={s.footer__item}>
                                Информация
                                <ul className={s.footer__menuChild}>
                                    <li className={s.footer__menuChildItem}>Доставка</li>
                                    <li className={s.footer__menuChildItem}>Оплата</li>
                                    <li className={s.footer__menuChildItem}>Отзывы</li>
                                    <li className={s.footer__menuChildItem}>Блог</li>
                                    <li className={s.footer__menuChildItem}>Гарантии</li>
                                    <li className={s.footer__menuChildItem}>Вопрос и ответ</li>
                                    <li className={s.footer__menuChildItem}>Корпоративным клиентам</li>
                                    <li className={s.footer__menuChildItem}>О компании</li>
                                    <li className={s.footer__menuChildItem}>Контакты</li>
                                </ul>
                            </li>
                        </ul>

                        <div className={s.footer__contacts}>
                            <div className={s.contacts__title}>Наши координаты</div>
                            <div className={s.contacts__point}>
                                <div className={s.contacts__pointName}>Служба Доставки</div>
                                <div className={s.contacts__pointPhone}>+7 (920) 211-49-03</div>
                            </div>
                            <div className={s.contacts__point}>
                                <div className={s.contacts__pointName}>Ул. Вл. Невского 17</div>
                                <div className={s.contacts__pointPhone}>+7 (920) 211-49-03</div>
                            </div>
                            <div className={s.contacts__point}>
                                <div className={s.contacts__pointName}>Ул. Революции 1905 года 80</div>
                                <div className={s.contacts__pointPhone}>+7 (906) 678-65-99</div>
                            </div>
                            <div className={s.contacts__email}>
                                <div className={s.contacts__emailName}>E-mail:</div>
                                <div className={s.contacts__emailText}>info@lavkaroz.ru</div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
};

export default Footer;
