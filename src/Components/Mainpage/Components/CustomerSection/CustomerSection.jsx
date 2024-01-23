import "./styles.css"
import arrow_img from "./assets/arrow.png"
import customerService from "./assets/customerService.svg"


const CustomerSection = () => {
  const prev = () => {
    console.log("previous")
  }

  const next = () => {
    console.log("next")
  }

  return (
    <section id='CustomerSection'>
      <div id='CustomerSectionContainer'>
        <h2>Asiakkaidemme arvioita</h2>
        <h3 style={{marginBottom: '50px'}}>4.3/5⭐ - Muuttomaailman arvostelut</h3>
        <div id='CustomerSectionContainerContainer'>
          <div id='CommentSectionContainer'>
            <div className='Comment'>
              <h3>Maija Malliasiakas</h3>
              <p>Todella tyytyväinen palveluun! Tavarat siirtyivät nopeasti ja ehjänä</p>
            </div>

            <div id='csButtonContainer'>
              <div id='prevButton' onClick={prev}>
                <img
                  className='arrow_img'
                  id='arrow_image_left'
                  src={arrow_img}
                />
              </div>

              <div className='selectionDiv'></div>
              <div className='selectionDiv'></div>
              <div className='selectionDiv'></div>
              <div className='selectionDiv'></div>

              <div id='nextButton' onClick={next}>
                <img className='arrow_img' src={arrow_img} />
              </div>
            </div>
          </div>
          <div id='customerServiceImageContainer'>
            <img src={customerService}></img>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomerSection
