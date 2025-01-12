import About from "../../Components/About"
import CardsPromo from "../../Components/CardsPromo"
import Crypto from "../../Components/Crypto"
import PageHolder from "../../Components/PageHolder"
import PerformanceSection from "../../Components/PerformanceSection"
import SentimentSection from "../../Components/SentimentSection"
import ToggleSection from "../../Components/ToggleSection"
import Tokenomics from "../../Components/Tokenomics"
import TrendingCoins from "../../Components/TrendingCoins"
import TeamCard from "../../Components/TeamCard"
import SuggestionSection from "../../Components/SuggestionSection"


function HomePage() {
  return (
    <div className="h-full w-screen bg-slate-200/40">
      <PageHolder/>

      <div className="w-screen lg:flex">
        <div className="lg:w-8/12 lg:ml-14 mx-4">
             <Crypto/>
             <ToggleSection/>
             <PerformanceSection/>
             <SentimentSection/>
             <About/>
             <Tokenomics/>
             <TeamCard/>
        </div>
        <div className="lg:w-4/12 lg:mr-14 mx-4">
          <CardsPromo/>
          <TrendingCoins/>
        </div>
        
      </div>
        <SuggestionSection/>
        {/* <Crypto/> */}
    </div>
  )
}

export default HomePage;