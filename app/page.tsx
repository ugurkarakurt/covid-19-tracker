import HomeContainer from "@/containers/home/home-container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Covid-19 Tracker",
  description: "View current COVID-19 cases around the world on an interactive map with the COVID-19 tracker. Get instant access to the number of cases, deaths and recoveries by country.",
  icons: {
    icon: './icon.ico',
  },
};

const Home: React.FC = () => {
  return (
    <HomeContainer />
  );
}

export default Home;