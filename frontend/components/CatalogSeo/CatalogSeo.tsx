import React from 'react';
import { ISection } from '../../interfaces/section.interface';
import { getTextInTextBlockFromSection } from '../../services/core/parse';

import s from './CatalogSeo.module.scss'

interface CatalogSeoProps {
    catalogSeoSection: ISection
}

const CatalogSeo: React.FC<CatalogSeoProps> = ({ catalogSeoSection }) => {
    return (
        <section className={s.catalogSeo}>
            {/* <div className='container'>
                <h2 className={s.title}>Купить недорого букет роз в Воронеже с доставкой</h2>
                <p className={s.text}>Если возникла необходимость приобрести цветочную композицию, обращайтесь в наш интернет-магазин. Покупая у нас, Вы получаете следующие преимущества:<br/>
                Большой ассортимент цветов и дополнительных приятных сюрпризов к презенту, например, мягкие игрушки, гелиевые шары, конфеты.
Доставим по городу и за его пределами на расстоянии до 50 км. Мы привезем заказ точно в указанное время и без опозданий.
Высокое качество от поставщиков из российских теплиц, с голландских аукционов, а также плантаций Кении, Колумбии и Эквадора.</p>
                <p className={s.subtitle}>О чем говорит цвет</p>
                <p className={s.text}>Благодаря большому цветовому разнообразию, Вы подберете любой тон бутонов, который, на Ваш взгляд, понравится получателю презента. Однако считается, что каждая расцветка несет свое символическое значение. Поэтому перед тем как определиться с выбором композиции, предлагаем ознакомиться с символикой цвета:<br/>
                Красный. Это символ любви и страсти. Обычно такой вариант принято дарить своим возлюбленным или очень близким людям. Уместно будет их преподнести маме или бабушке – в этом случае букет будет означать признание в бесконечном уважении.
Розовый. Такие цветы олицетворяет нежность и тепло. Они отлично подойдут для подарка девушке, например, дочери на день рождения. Светло-розовый тон говорит о симпатии и восхищении, а ярко-малиновый о привязанности и желании быть рядом.
Белоснежный. Символизирует чистоту и совершенство. Это универсальный подарок, который подойдет как для второй половинки, так и для коллег или просто знакомых.</p>
            </div> */}
            <div className='container'>
                <h2 className={s.title}>{getTextInTextBlockFromSection(catalogSeoSection, 'catalog-seo', 'zagolovok')}</h2>
                <p className={s.text}>{getTextInTextBlockFromSection(catalogSeoSection, 'catalog-seo', 'tekst-1')}<br/>{getTextInTextBlockFromSection(catalogSeoSection, 'catalog-seo', 'tekst-2')}</p>
                <p className={s.subtitle}>{getTextInTextBlockFromSection(catalogSeoSection, 'catalog-seo', 'podzagolovok')}</p>
                <p className={s.text}>{getTextInTextBlockFromSection(catalogSeoSection, 'catalog-seo', 'tekst-3')}<br/>{getTextInTextBlockFromSection(catalogSeoSection, 'catalog-seo', 'tekst-4')}</p>
            </div>
        </section>
    );
};

export default CatalogSeo;