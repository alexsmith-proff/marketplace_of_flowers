import { FC } from "react"

import s from './PersonalArea.module.scss'

interface PersonalAreaProps {
}

const PersonalArea: FC<PersonalAreaProps> = ({ }) => {
    return (
        <div>
            <div className={s.title}>Личный кабинет</div>
            <table className={s.table}>
                <thead className={s.thead}>
                    <tr>
                        <th className={s.th}>Номер заказа</th>
                        <th className={s.th}>Название</th>
                        <th className={s.th}>Дата доставки</th>
                        <th className={s.th}>Получатель</th>
                        <th className={s.th}>Статус</th>
                        <th className={s.th}>Сумма</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={s.tr}>
                        <td className={s.td}>64587930</td>
                        <td className={s.td}>Букет малиновых роз</td>
                        <td className={s.td}>23.05.2021</td>
                        <td className={s.td}>Кузнецов Алексей</td>
                        <td className={s.td + ' ' + s.awaitingpayment}>Ожидает оплаты</td>
                        <td className={s.td}>5 739 ₽</td>
                    </tr>
                    <tr className={s.tr}>
                        <td className={s.td}>64587930</td>
                        <td className={s.td}>Букет малиновых роз</td>
                        <td className={s.td}>23.05.2021</td>
                        <td className={s.td}>Кузнецов Алексей</td>
                        <td className={s.td}>Оплачен</td>
                        <td className={s.td}>5 739 ₽</td>
                    </tr>
                    <tr className={s.tr}>
                        <td className={s.td}>64587930</td>
                        <td className={s.td}>Букет малиновых роз</td>
                        <td className={s.td}>23.05.2021</td>
                        <td className={s.td}>Кузнецов Алексей</td>
                        <td className={s.td + ' ' + s.canceled }>Отменен</td>
                        <td className={s.td}>5 739 ₽</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default PersonalArea