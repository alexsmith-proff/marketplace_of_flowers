import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import CardItem from "./CardItem"

const onClickProduct = jest.fn()
const onClickAddToCart = jest.fn()
const onClickAddToFavorite = jest.fn()

describe('CardItem', () => {
    it('CardItem render', () => {
        render(
            <CardItem
                productID={1}
                imgSrc={'/file.png'}
                alt={'altImg'}
                title={'Заголовок'}
                subtitle={'Подзаголовок'}
                price={500}
                crossPrice={300}
                isBuyProduct={true}
                isActive={true}
                onClickProduct={onClickProduct}
                onClickAddToCart={onClickAddToCart}
                onClickAddToFavorite={onClickAddToFavorite}
            />
        )
        expect(screen.getByText(/Заголовок/)).toBeInTheDocument()
        expect(screen.getByText(/Подзаголовок/)).toBeInTheDocument()
    })
    it('CardItem snapshot', () => {
        const el = render(
            <CardItem
                productID={1}
                imgSrc={'/file.png'}
                alt={'altImg'}
                title={'Заголовок'}
                subtitle={'Подзаголовок'}
                price={500}
                crossPrice={300}
                isBuyProduct={true}
                isActive={true}
                onClickProduct={onClickProduct}
                onClickAddToCart={onClickAddToCart}
                onClickAddToFavorite={onClickAddToFavorite}
            />
        )
        expect(el).toMatchSnapshot()
    })
})
