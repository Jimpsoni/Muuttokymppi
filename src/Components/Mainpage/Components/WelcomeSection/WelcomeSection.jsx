import "./styles.css"
import image from "./assets/autot.png"

const WelcomeSection = () => {
  const img_src = image
  const topMargin = {marginTop: '15px'}
  const greenText = {color: '#00ad1b'}

  return (
    <section id='welcomeSectionRoot'>
      <div id='welcomeSectionContainer'>
        <div>
          <div id='textContainer'>
            <h1>
              <span style={greenText}> Täyden Kympin</span> Muuttopalvelua!
            </h1>
            <h3 style={topMargin}>Me hoidamme Kotimuutot!</h3>
            <p style={topMargin} id='welcomeSectionBodyText'>
              Olemme jo yli vuosikymmenen ajan hoitaneet koti- ja yritysmuuttoja
              niin Jyväskylän sisällä kuin ulkopaikkakunnillekin!
            </p>
          </div>
          <div id='welcomesectionImageContainer'>
            <img id='welcomesectionImage' src={img_src}></img>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WelcomeSection
