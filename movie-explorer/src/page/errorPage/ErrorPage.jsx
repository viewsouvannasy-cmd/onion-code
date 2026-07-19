import { Link } from "react-router";
import { HeaderSection } from "../../components/Header/HeaderSection";
import "./ErrorPage.css";

export function ErrorPage() {
  return (
    <>
      <title>onion - 404</title>
      <HeaderSection />

      <div className="container-error-main">
        <div className="container-error">
          <h1>404</h1>
          <div>
            <p>
              something was wrong back to <Link to="/">home page</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
