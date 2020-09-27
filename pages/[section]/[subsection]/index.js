import Docs from "../../../components/Docs";

import { useRouter } from 'next/router'

function SubSection({ path }) {
    console.log(path)
    return (
        <Docs path={path + '/README.md'}/>
    )
}

SubSection.getInitialProps = function({ query }) {
    return { path: query.section + '/' + query.subsection }
}
export default SubSection