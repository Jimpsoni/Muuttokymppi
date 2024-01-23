import Header from "../Header"
import WelcomeSection from "./Components/WelcomeSection"
import InfoSection from "./Components/InfoSection"
import CustomerSection from "./Components/CustomerSection"
import TipSection from "./Components/TipsForRemoval/TipSection"
import CTOSection from "./Components/CTOSection"
import "./mainpageStyles.css"
import Footer from "../Footer"

const Mainpage = () => {
  return (
    <>
      <Header />
      <WelcomeSection/>
      <InfoSection/>
      <TipSection/>
      <CustomerSection/>
      <CTOSection/>
      <Footer/>
    </>
  )
}

export default Mainpage
