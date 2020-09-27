import Docs from "../../components/Docs";

function Section({ path }) {
    return (
        <Docs path={path + '/README.md'}/>
    )
}

Section.getInitialProps = function({ query }) {
    return { path: query.section }
}
export default Section