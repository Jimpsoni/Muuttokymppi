import "./styles.css"

const TipSection = () => {
  return (
    <section id='vinkitMuuttoon'>
      <div id='tipSectionContainer'>
        <div id='tipSectionHeaders'>
          <h2>Näillä onnistut muutossasi</h2>
          <h3 id='tipSectionSubHeader'>
            Tässä meidän vinkit helpompaan muuttoon!
          </h3>
        </div>

        <div id='gridContainer'>
          <div className='tipCardcontainer'>
            <div className='tipCard'>
              <img
                className='tipcardImage'
                src='https://lainalaatikko.fi/uploads/muuttolaatikko-l2.jpg'
              ></img>
              <div className='tipCardTextContainer'>
                <h3 className='tipcardHeader'>Laadukkaat Muuttolaatikot</h3>
                <p className='tipcardText'>
                  Panosta hyviin muuttolaatikoihin, ne nopeuttavat muuttoa
                  eivätkä petä kesken kantamisen.
                </p>
              </div>
            </div>
          </div>
          <div className='tipCardcontainer'>
            <div className='tipCard'>
              <img
                className='tipcardImage'
                src='https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,q_auto:best,t_productPageHeroGalleryTransformation_v2,w_auto/legacy_dam/en-us/S001672871/NPIB-12140-Self-Adhesive-Tape-Holiday-001?cb=f4e4e61932c1e86b0a0d70a921ec82dc44bc2f26'
              ></img>
              <div className='tipCardTextContainer'>
                <h3 className='tipcardHeader'>Hyvät Pakkausmateriaalit</h3>
                <p className='tipcardText'>
                  Laadukkaiden pakkausmateriaalien avulla muutto nopeutuu sekä
                  tavara tulee ehjänä perille.
                </p>
              </div>
            </div>
          </div>
          <div className='tipCardcontainer'>
            <div className='tipCard'>
              <img
                className='tipcardImage'
                src='https://www.jamestowncontainer.com/wp-content/uploads/2020/04/best-packaging-materials.jpg'
              ></img>
              <div className='tipCardTextContainer'>
                <h3 className='tipcardHeader'>Suojaa Tavarat Hyvin</h3>
                <p className='tipcardText'>
                  Tavaroiden suojaaminen nopeuttaa muuttoa, koska suojattuja
                  tavaroita on helpompi kantaa oviaukoista ja pakata autoon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TipSection
