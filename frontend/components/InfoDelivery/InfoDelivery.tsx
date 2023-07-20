import { FC } from "react"
import CardImgText from "../Elements/Cards/CardImgText/CardImgText"

import s from './InfoDelivery.module.scss'

interface InfoDeliveryProps { }

const InfoDelivery: FC<InfoDeliveryProps> = () => {
    return (
        <section className={s.delivery}>
            <h1 className={s.title}>Доставка</h1>
            <div className={s.topCard}>
                <CardImgText
                    isWidthMax={true}
                    isBorder={true}
                    borderColor="E2E4EB"
                    borderRadius={10}
                    padding="30px"
                    imgUrl={'/img/delivery-ico.png'}
                    imgWidth={48}
                    imgHeight={48}
                    textGap={30}
                    imgAlignItems="center"
                >
                    <p className={s.cardText}>Доставка цветов осуществляется по Воронежу и пригороду Воронежа в течении двух часов!</p>
                </CardImgText>
            </div>

            <p className={s.text}>Наша служба доставки работает без праздников и выходных. Доставка цветов осуществляется в указанное время +- 30 минут.</p>

            <div className={s.cardWrap}>
                <CardImgText
                    isBorder={true}
                    borderColor="D0D2D7"
                    borderRadius={10}
                    padding={'20px 30px'}
                    imgUrl={'/img/ruble-ico.png'}
                    imgWidth={48}
                    imgHeight={48}
                    textFontSize={16}
                    textIsBold={true}
                    textGap={20}
                >
                    <h2 className={s.cardItemTitle}>Тарифы на доставку:</h2>
                    <p className={s.cardItemSubTitle}>По городу 300 руб.</p>
                    <p className={s.cardItemText}>Отдаленые районы - расчет производится автоматически при оформление заказа!</p>
                </CardImgText>
                <CardImgText
                    isBorder={true}
                    borderColor="D0D2D7"
                    borderRadius={10}
                    padding={'30px 120px 30px 30px'}
                    imgUrl={'/img/clock3.png'}
                    imgWidth={48}
                    imgHeight={48}
                    textFontSize={16}
                    textIsBold={true}
                    textGap={20}
                >
                    <h2 className={s.cardItemTitle}>Время работы магазина:</h2>
                    <p className={s.cardItemTime}>Пн-Сб: 8:00-20:00 Вс: 9:00-20:00</p>
                </CardImgText>
            </div>
        </section>
    )
}

export default InfoDelivery