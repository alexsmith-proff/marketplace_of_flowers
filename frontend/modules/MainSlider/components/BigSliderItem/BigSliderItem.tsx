import { FC } from 'react'
import Image from 'next/image'
import { getFileNameInImgBlockFromElement, getTextInTextBlockFromElement } from '../../../../services/core/parse'
import { IElement } from '../../../../interfaces/section.interface'

import s from './BigSliderItem.module.scss'

interface BigSliderItemProps {
    slider: IElement
}

const BigSliderItem: FC<BigSliderItemProps> = ({ slider }) => {
    return (
        <div className={s.item}>
            <Image src={`${process.env.API_URI_DOCKER}/${getFileNameInImgBlockFromElement(slider, 'background')}`} width={873} height={441} alt={`slider_${slider.id}`} />
            <div className={s.info}>
                <div className={s.TopText}>{getTextInTextBlockFromElement(slider, 'tekst-vverkhu')}</div>
                <div className={s.MiddleText}>{getTextInTextBlockFromElement(slider, 'tekst-v-seredine')}</div>
                <div className={s.UnderText}>{getTextInTextBlockFromElement(slider, 'promokod-tekst')}</div>

                <div className={s.Promo}>
                    <div className={s.PromoText}>{getTextInTextBlockFromElement(slider, 'tekst-vnizu')}</div>
                    <div className={s.PromoBtn}>
                        <Image src="/img/promo-btn-copy.png" width={24} height={24} alt="promo-btn-copy" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BigSliderItem