import {API} from "assets/api/api";
import {CharacterType, ResponseType} from "assets/api/rick-and-morty-api";
import {PageWrapper} from "components/PageWrapper/PageWrapper";
import {CharacterCard} from "components/Card/CharacterCard/CharacterCard";
import {getLayout} from "components/layout/baseLayout/baseLayout";

export const getStaticProps = async () => {
    const characters = await API.rickAndMorty.getCharacters()

    return {
        props: {
            characters
        },

    }
}

type Props = {
    characters: ResponseType<CharacterType>
}

const Characters = ({characters}: Props) => {

    const charactersList = characters.results.map(character => (

        <CharacterCard key={character.id} character={character}/>
    ))

    return (
        <PageWrapper>
            {charactersList}
        </PageWrapper>
    )
}
Characters.getLayout = getLayout
export default Characters