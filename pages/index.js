import Hero from 'components/hero'
import Container from 'components/container'
import Meta from 'components/meta'

const Home = () => {
  return (
    <Container>
      <Meta />
      <Hero title='CUBE' subtitle='アウトプットしていくサイト' imageOn />
    </Container>
  )
}
export default Home
