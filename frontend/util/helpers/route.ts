import { useRouter } from "next/router"

export const goto = (path: string) => {
    const router = useRouter()
    router.push(path)
}