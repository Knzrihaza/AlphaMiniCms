import client from "@/lib/mongoDb";
import DashboardPage from "./ui";
import { fetchCollectionData } from "@/lib/functions";
import { LandingPageData } from "@/types/types";


export default async function DashboardLandingPage() {

    try {
        const db = await client.db("photoGemma")

        const dataArray: LandingPageData[] = await fetchCollectionData<LandingPageData>(db, "landingPage")
        const data: LandingPageData = dataArray[0]


        console.log("ooooooooo", data.hero)
        return (
            <DashboardPage data={data} />
        );
    } catch (error) {
        console.log(error)
        return <h1>Something bad happened</h1>;
    }




}
