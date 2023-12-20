import {LoginNavigate} from "hoc/loginNavigate";
import {PageWrapper} from "components/PageWrapper/PageWrapper";
import {getLayout} from "components/layout/baseLayout/baseLayout";

export const Private = () => {
    return (
        <LoginNavigate>
            <PageWrapper>
                Private page
            </PageWrapper>
        </LoginNavigate>
    )
}

Private.getLayout = getLayout
export default Private