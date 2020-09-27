import Head from 'next/head'
import Link from 'next/link'
import { Card, CardColumns, CardDeck, Container, Image, Jumbotron } from 'react-bootstrap'
import Layout from '../components/Layout'

const sections = [ { id: 'announcement', name: '공지사항', desc: '아아!! 알립니다! 공지사항들입니다.', img: '/speaker.svg' }, { id: 'bots', name: '한국 디스코드봇 리스트', desc: '"국내 디스코드 봇을 한 곳에서." 한국 디스코드봇 리스트를 소개합니다.', img: '/koreanbots.png' }, { id: 'community', name: '커뮤니티', desc: '파트너, 인증 등과 같은 커뮤니티 프로그램들을 소개합니다!', img: '/partner.png' } ]
function Home() {
  return (
    <Layout>
      <Jumbotron align="center">
          <h1 className="header">
            도움이 필요하신가요?
          </h1>
        </Jumbotron>
      <Container align="center">
        <CardColumns>
          {
              sections.map(el=> (
               <a href={el.id} style={{ color: 'unset' }}>
                <Card style={{ height: '214px', cursor: 'pointer' }}>
                  <Card.Body>
                    {
                      el.img && (
                        <Image src={el.img} style={{ height: '90px' }}/>
                      )
                    }
                    <Card.Title style={{ color: "#36f" }}>{el.name}</Card.Title>
                    <Card.Text>
                      {el.desc}
                    </Card.Text>
                  </Card.Body>
                </Card>
                </a>
              ))
            }
        </CardColumns>
      </Container>
    </Layout>
  )
}

export default Home