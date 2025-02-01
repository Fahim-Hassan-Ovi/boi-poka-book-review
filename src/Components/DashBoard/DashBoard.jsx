import { Helmet } from "react-helmet"

export const DashBoard = () => {
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Dashboard | Boi Poka</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <h2 className="text-5xl">DashBoard Page</h2>
    </div>
  )
}
