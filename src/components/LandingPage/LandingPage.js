import landingPageBackground from '../../assets/landing-page-background.jpg';
import recycleInstructions from '../../assets/recycle-instructions.png';
import './LandingPage.css';

const LandingPage = () => (
  <>
    <section className="landing-page-container">
      <div className="background-wash">
        <img
          src={landingPageBackground}
          className="landing-page-img"
          alt="recycle icon with wooden background"
        ></img>
      </div>
      <div className="text-container">
        <h1 className="landing-page-h1">
          Because sometimes we need a little help recycling.
        </h1>
        <h2 className="landing-page-h2">Bin less, recycle more.</h2>
      </div>
    </section>
    <img
      src={recycleInstructions}
      className="recycle-instructional-img"
      alt="instructions on how to recycle"
    />
    <div className="landing-page-footer">
      Need help recycling? Search for a recycling solution below
    </div>
  </>
);

export default LandingPage;
