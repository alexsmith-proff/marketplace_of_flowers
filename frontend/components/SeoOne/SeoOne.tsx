import React, { FC } from 'react'

import s from './SeoOne.module.scss'

interface SeoOneProps {
}

const SeoOne: FC<SeoOneProps> = ({ }) => {

    return (
        <>
            <section className={s.seoOne}>
                <div className={s.container}>
                    <div className={s.seoOne__mainTitle}>Цветы в Воронеже с доставкой на дом</div>
                    <div className={s.seoOne__block}>
                        <p className={s.seoOne__text}>Сделать приятный сюрприз близкому человеку, выразить свою симпатию, любовь или уважение можно из любой точки мира. Порадовать вторую половинку или проявить внимание к жене, маме, сестре, подруге очень легко – воспользуйтесь доставкой цветов в Воронеже и Воронежской области.<br /><br />Интернет-магазин «Лавка роз» всегда готов предложить большой выбор цветочных композиций на любой вкус и бюджет. Наши флористы и оформители подберут наиболее эффектное сочетание, создадут действительно красивый и оригинальный презент, который обязательно понравится даже самым искушенным и требовательным особам. Курьеры в кратчайшие сроки привезут и вручат подарок, передав всю вашу любовь и заботу. Дарите яркие эмоции и впечатления, счастье и радость дорогим сердцу людям – обращайтесь к нам прямо сейчас.<br /><br />Мы тщательно следим за свежестью и эстетичностью наших товаров на всех этапах – с момента поставки до непосредственного вручения. Для этого созданы специальные зоны хранения и упаковки, транспортные средства оснащены герметичными боксами. Можете быть уверены в том, что Ваш презент на протяжении длительного периода времени будет радовать своим невероятным ароматом и шикарным внешним видом.<br /><br /> Всегда в наличии продукция из российских теплиц, голландских аукционов и плантаций Эквадора, Колумбии, Кении. В нашем магазине цветов в Воронеже Вы можете купить букеты из десятков сортов роз, тюльпанов, альстромерий, хризантем, пионов и сделать заказ с доставкой на дом – при желании подарок можно дополнить сопутствующим товаром. На выбор покупателей представлено большое разнообразие мягких игрушек, шаров, конфет, сладостей и прочих приятных мелочей, с которыми Ваш презент станет еще более изысканным.</p>
                    </div>
                </div>
                <img className={s.seoOne__bgLeft} src="../../../img/seo1-left-bg.png" alt="seo1-left-bg" />
                <img className={s.seoOne__bgRight} src="../../../img/seo1-right-bg.png" alt="seo1-right-bg" />
            </section>
        </>
    )
};

export default SeoOne;
