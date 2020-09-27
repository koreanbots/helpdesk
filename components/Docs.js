import Head from "next/head"
import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import MarkdownView from 'react-showdown'
import Layout from "./Layout"

export default function Docs({ path }) {
    const [ document, setDoc ] = useState(null)
    const [ loading, setLoading ] = useState(true)
    useEffect(async()=> {
        const res = await fetch(`https://raw.githubusercontent.com/koreanbots/docs/master/${path}`)
        if(res.status.toString().startsWith('4') || res.status.toString().startsWith('5')) setLoading(false)
        else {
            setDoc(await res.text())
            setLoading(false)
         }
    }, [])
    return (
        <Layout>
            {
            loading ? (
                <div className="text-center">
                    <Head>
                        <title>한국 디스코드봇 리스트</title>
                        <meta name="description" content="도움이 필요하신가요?" />
                    </Head>
                    <div className="spinner-border m-5" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            ) : document ? (
                <Container style={{ paddingTop: '20px' }}>
                    <Head>
                        <title>{document.split('\n')[0].replace(/^# /, '') || '한국 디스코드봇 리스트'}</title>
                        <meta name="description" content="도움이 필요하신가요?" />
                    </Head>
                    <MarkdownView markdown={document} />
                </Container>
            ) : (
                <div className="text-center">
                    문서를 불러올 수 없습니다.
                </div>
            )
        }
        </Layout>
    )
}