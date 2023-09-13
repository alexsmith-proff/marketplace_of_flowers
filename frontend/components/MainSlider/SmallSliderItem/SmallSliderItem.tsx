import { FC } from 'react'
import Image from 'next/image'
import { getFileNameInImgBlockFromElement, getTextInTextBlockFromElement } from '../../../services/core/parse'
import { IElement } from '../../../interfaces/section.interface'

import s from './SmallSliderItem.module.scss'

interface SmallSliderItemProps {
    slider: IElement
}

const SmallSliderItem: FC<SmallSliderItemProps> = ({ slider }) => {
    return (
        <div className={s.item} key={slider.id}>
            <Image src={`${process.env.API_URI_DOCKER}/${getFileNameInImgBlockFromElement(slider, 'background')}`} width={278} height={251} alt={`slider-small_${slider.id}`} />
            <div className={s.info}>
                <div className={s.Title}>{getTextInTextBlockFromElement(slider, 'nazvanie')}</div>
                <div className={s.SubTitle}>{getTextInTextBlockFromElement(slider, 'opisanie')}</div>
                <div className={s.Chart}>
                    <div>
                        <div className={s.Price}>{getTextInTextBlockFromElement(slider, 'cena') + ' ₽'}</div>
                        <div className={s.CrossPrice}>{getTextInTextBlockFromElement(slider, 'staraya-cena') + ' ₽'}</div>
                    </div>
                    <div className={s.Btn}>
                        <Image src="/img/cart-ico.png" width={28} height={28} alt="cart-ico" />
                        <div className={s.BtnText}>В корзину</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SmallSliderItem