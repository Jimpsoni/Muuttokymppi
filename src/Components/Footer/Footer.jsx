import "./styles.css"

const Footer = () => {
  return (
    <section id='footer'>
      <div id='footerContainer'>
        <div id='mainInfo'>
          <h2 id='FooterSubheader'>Muuttokymppi Oy</h2>
          <p style={{ marginBottom: "25px" }}>Y-tunnus: 2569982-3</p>

          <h3>Yhteystiedot</h3>
          <p>☎️ 0400 421 803</p>
          <p>muuttokymppi@gmail.com</p>
        </div>
        <div>
          <h3>Käynti- ja Postiosoite</h3>
          <p>
            Koivupurontie 10
            <br />
            40320 Jyväskylä
          </p>
        </div>

        <div>
          <h3>Löysitkö etsimäsi?</h3>
          <ul>
            <a>
              <li>Tarjouspyyntö lomake</li>
            </a>
            <a>
              <li>Vinkit muuttoon</li>
            </a>
            <a>
              <li>Pakkausmateriaalit</li>
            </a>
            <a>
              <li>Yhteystiedot</li>
            </a>
          </ul>
        </div>

        <div>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d780.1898876264066!2d25.821300467850808!3d62.284113287560615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46857498f455c9c1%3A0xd37321f8d93d92b2!2sKoivupurontie%2010%2C%2040320%20Jyv%C3%A4skyl%C3%A4!5e0!3m2!1sfi!2sfi!4v1705797140282!5m2!1sfi!2sfi'
            width='100%'
            height='300'
            style={{ border: "0" }}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default Footer
