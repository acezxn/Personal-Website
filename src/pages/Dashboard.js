import { BasicInfoCard } from "../components/BasicInfoCard"
import { Navbar } from "../components/Navbar"

export const Dashboard = () => {
    return (
        <>
            <Navbar />
            <div style={{ margin: 10 }}>
                <BasicInfoCard />
            </div>
        </>
    )
}