import { useRouter } from "next/router"

export const useReviewsMainPage = () => {
    const router = useRouter()

    const handleOnClickAllReviews = () => {
        router.push('/reviews')
    }
    return { handleOnClickAllReviews }
}