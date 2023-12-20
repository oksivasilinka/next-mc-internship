import {PageWrapper} from "components/PageWrapper/PageWrapper";
import {getLayout} from "components/layout/baseLayout/baseLayout";
import * as path from "path";
import * as process from "process";
import fs from "fs/promises";

export const getStaticProps = async () => {

    const getParsedData = async (): Promise<{title: string}> => {
        const filePath = path.join(process.cwd(), 'public', 'staticData.json')
        try {
            const jsonData = await fs.readFile(filePath)
            return JSON.parse(jsonData.toString())
        } catch (e) {
            return {title: 'no title'}
        }
    }

    const {title} = await getParsedData()

    return {
        props: {
            title
        },
    }
}

type Props = {
    title: string
}

const Test = ({title}: Props) => {

    return (
        <PageWrapper>
            {title}
        </PageWrapper>
    )
}
Test.getLayout = getLayout
export default Test