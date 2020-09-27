import Docs from "../../../components/Docs";

import { useRouter } from 'next/router'

function Document({ path, gg }) {
    console.log(gg)
    return (
        <Docs path={path + '/README.md'}/>
    )
}

Document.getInitialProps = function({ query }) {
    return { path: query.section + '/' + query.subsection, gg: query.Docs }
}
export default Document