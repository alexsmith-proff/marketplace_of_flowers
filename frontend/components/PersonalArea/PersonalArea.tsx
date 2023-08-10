import { FC } from "react"

import s from './PersonalArea.module.scss'
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"

interface PersonalAreaProps {
}

const PersonalArea: FC<PersonalAreaProps> = ({ }) => {
    const userProfile = useSelector((orders: RootState) => orders.user.profile)

    console.log(userProfile);
    
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
                    {
                        userProfile.orders?.map(order => (
                            <tr className={s.tr} key={order.id}>
                                <td className={s.td}>{order.number}</td>
                                <td className={s.td}>{order.name}</td>
                                <td className={s.td}>{order.deliveryDate}</td>
                                <td className={s.td}>{userProfile.name}</td>
                                <td className={s.td + ' ' + s.awaitingpayment}>{order.status}</td>
                                <td className={s.td}>{order.price} ₽</td>
                            </tr>
                        ))
                    }

                    {/* <tr className={s.tr}>
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
                        <td className={s.td + ' ' + s.canceled}>Отменен</td>
                        <td className={s.td}>5 739 ₽</td>
                    </tr> */}
                </tbody>
            </table>

        </div>
    )
}

export default PersonalArea