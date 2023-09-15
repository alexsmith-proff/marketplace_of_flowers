import React, { FC } from 'react';
import Reviews from '../Reviews/Reviews';
import { ISection } from '../../interfaces/section.interface';
import SimpleBtn from '../Elements/Buttons/SimpleBtn/SimpleBtn';
import ReviewSlider from '../Reviews/ReviewSlider/ReviewSlider';
import { useReviewsMainPage } from '../../hooks/useReviewsMainPage';

interface ReviewsMainPageProps {
    reviewSection: ISection
}

const ReviewsMainPage: FC<ReviewsMainPageProps> = ({ reviewSection }) => {
    const { handleOnClickAllReviews } = useReviewsMainPage()

    return (
        <Reviews
            sliderOrListComponent={
                <SimpleBtn
                    text='Оставить отзыв'
                    paddingTop={13}
                    paddingBottom={13}
                    paddingLeft={30}
                    paddingRight={30}
                    fontSize={16}
                    color='#0093A2'
                    backgroundColor='#FFFFFF'
                    border='1px solid #0093A2'
                    borderRadius={5}
                    click={null}
                />}
            sendReviewBtnComponent={<ReviewSlider slides={reviewSection.elements} />}
            allReviewBtnComponent={
                <SimpleBtn
                    text='Все отзывы'
                    maxWith={150}
                    isMaxWidth={false}
                    paddingTop={13}
                    paddingBottom={13}
                    paddingLeft={30}
                    paddingRight={30}
                    fontSize={16}
                    color='#0093A2'
                    backgroundColor='#FFFFFF'
                    border='1px solid #0093A2'
                    borderRadius={5}
                    click={handleOnClickAllReviews}
                />
            }
        />
    );
};

export default ReviewsMainPage;



