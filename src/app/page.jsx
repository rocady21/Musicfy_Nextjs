
import { Layout } from "./admin/layout"
import { Populate } from "@/components/Home/Populate"
import { Profile } from "@/components/Home/Profile"
import { Interactions } from "@/components/Home/Interactions"


export default function Home() {
  return (
    <Layout>
      <div className="relative w-full h-full flex flex-row">
          <div className="h-full w-2/3  p-3 pr-1 box-border z-10">
            <Populate/>
          </div>
          <div className="h-full w-1/3 flex box-border z-10 flex-col justify-between p-3  ">
            <Profile />
            <Interactions />
          </div>
      </div>
    </Layout>

  )
}
