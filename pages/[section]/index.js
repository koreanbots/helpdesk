import Docs from "../../components/Docs";

import { useRouter } from 'next/router'

function Section({ path }) {
    console.log(path)
    return (
        <Docs path={path + '/README.md'}/>
    )
}

Section.getInitialProps = function({ query }) {
    return { path: query.section }
}
export default Section