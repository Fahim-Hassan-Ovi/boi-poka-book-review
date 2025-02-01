import { Helmet } from "react-helmet"
import { Banner } from "../Banner/Banner"
import { Books } from "../Books/Books"

export const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Boi Poka</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Banner></Banner>
      <Books></Books>
    </div>
  )
}
