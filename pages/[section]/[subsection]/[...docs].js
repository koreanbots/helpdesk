import Docs from "../../../components/Docs";
function Document({ path, gg }) {
    console.log(gg)
    return (
        <Docs path={path+'.md'}/>
    )
}

Document.getInitialProps = function({ query }) {
    return { path: query.section + '/' + query.subsection + '/' + query.docs.join('/'), gg: query.Docs }
}
export default Document