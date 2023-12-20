import {useRouter} from "next/router";
import {PropsWithChildren} from "react";

export const LoginNavigate = ({children}: PropsWithChildren<{}>) => {
    const router = useRouter()
    const isAuth = false
    if (!isAuth) router.push('/test')

    return <>{children}</>
}