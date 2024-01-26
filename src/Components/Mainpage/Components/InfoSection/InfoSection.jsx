import { useState } from "react"
import { kotimuutto, yritysmuutto } from "./ChangeText"
import koti from "./assets/koti.png"
import yritys from "./assets/yritys.jpg"
import "./styles.css"

const WelcomeSection = () => {
  const [display, setDisplay] = useState("kotimuutto")
  const [image, setImage] = useState(koti)

  const ChangingText = () => {
    if (display === "kotimuutto") return kotimuutto
    return yritysmuutto
  }

  const setYritysmuutto = () => {
    setDisplay("yritysmuutto")
    setImage(yritys)
  }

  const setKotimuutto = () => {
    setDisplay("kotimuutto")
    setImage(koti)
  }

  return (
    <section id='infoSectionRoot'>
      <div id='infoSection2'>
        <h2>Etsitkö...?</h2>
        <div id='infoSectionContainer'>
          <div
            style={{ backgroundImage: `url(${image})` }}
            id='infoSectionButtonContainer'
          >
            <input
              type='radio'
              className='infoSectionButton'
              onChange={setKotimuutto}
              id='kotimuutto'
              name='display'
              checked={display === "kotimuutto"}
            />
            <label htmlFor='kotimuutto'>Kotimuuttoa</label>
            <input
              type='radio'
              className='infoSectionButton'
              onChange={setYritysmuutto}
              id='yritysmuutto'
              name='display'
              checked={display === "yritysmuutto"}
            />
            <label htmlFor='yritysmuutto'>Yritysmuuttoa</label>
          </div>
          <ChangingText />
        </div>
      </div>

      <div id='CTObox'>
        <h3>
          Pyydä meiltä tarjous! Se ei sido sinua mihinkään ja saat arvion
          muutostasi!
        </h3>
        <div id='CTOButtonInfo'>Tarjouslomakkeeseen 🡆</div>
      </div>
    </section>
  )
}

export default WelcomeSection
