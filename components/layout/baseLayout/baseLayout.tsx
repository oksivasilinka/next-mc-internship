import {NextPage} from "next";
import {PropsWithChildren, ReactElement} from "react";
import {Layout} from "components/layout/layout";

export const BaseLayout: NextPage<PropsWithChildren> = ({children}) => {
    return <Layout>{children}</Layout>
}

export function getLayout(page: ReactElement) {
    return <BaseLayout>{page}</BaseLayout>
}