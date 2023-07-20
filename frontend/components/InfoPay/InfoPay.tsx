import { FC } from "react"

import s from './InfoPay.module.scss'
import CardImgText from "../Elements/Cards/CardImgText/CardImgText"

interface InfoPayProps { }

const InfoPay: FC<InfoPayProps> = () => {
    return (
        <section className={s.pay}>
            <h1 className={s.title}>Оплата</h1>
            <p className={s.text}>Мы предлагаем Вам следующие способы оплаты заказов:</p>
            <div className={s.item}>
                <CardImgText
                    imgUrl={'/img/pay-card1.png'}
                    imgWidth={48}
                    imgHeight={48}
                    textGap={20}
                    imgAlignItems="center"
                    text="Оплата в цветочном магазине наличными или банковской картой"
                />
            </div>
            <div className={s.item}>
                <CardImgText
                    imgUrl={'/img/pay-card2.png'}
                    imgWidth={48}
                    imgHeight={48}
                    textGap={20}
                    imgAlignItems="center"
                    text="Банковской картой"
                />
            </div>
            <div className={s.info}>
                <CardImgText
                    imgUrl={'/img/info-ico.png'}
                    imgWidth={30}
                    imgHeight={30}
                    textGap={15}
                    text="Для выбора оплаты товара с помощью банковской карты на соответствующей странице необходимо нажать кнопку «Оплата заказа банковской картой»."
                />
            </div>
            <p className={s.text}>Оплата происходит через ПАО СБЕРБАНК с использованием Банковских карт следующих платежных систем:</p>
            <div className={s.cardWrap}>
                <CardImgText
                    isHorizontal={false}
                    isBorder={true}
                    borderColor="D0D2D7"
                    borderRadius={10}
                    padding={'30px 60px'}
                    imgUrl={'/img/pay-cards1.png'}
                    imgWidth={280}
                    imgHeight={30}
                    imgAlignItems="center"
                    textFontSize={16}
                    textIsBold={true}
                    textGap={20}
                    text="Банковские карты"
                />
                <CardImgText
                    isHorizontal={false}
                    isBorder={true}
                    borderColor="D0D2D7"
                    borderRadius={10}
                    padding={'30px 120px'}
                    imgUrl={'/img/pay-cards2.png'}
                    imgWidth={140}
                    imgHeight={30}
                    imgAlignItems="center"
                    textFontSize={16}
                    textIsBold={true}
                    textGap={20}
                    text="Электронные деньги"
                />
            </div>
            <div className={s.info}>
                <CardImgText
                    imgUrl={'/img/info-ico.png'}
                    imgWidth={30}
                    imgHeight={30}
                    textGap={15}
                    text="Если заказ сделан в рабочее время (с 8:00 до 20:00 MSK), то в течение 20 минут наш менеджер свяжется с Вами по телефону для подтверждения заказа и уточнения удобного для Вас времени доставки."
                />
            </div>



        </section>
    )

}

export default InfoPay