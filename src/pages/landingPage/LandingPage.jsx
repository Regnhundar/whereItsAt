import "./landingpage.css"
import { Link } from "react-router-dom";

function LandingPage() {

  return (
    <Link className="logo" to="/events">
      <div className="logo__inner-wrapper">
        <img className="logo__image" src="/src/assets/logo.svg" alt="Where it's at logotype" />
        <h1 className="logo__title">Where it's @</h1>
        <h2 className="logo__subtitle">Ticketing made easy</h2>
      </div>
    </Link>
  )
}

export default LandingPage;