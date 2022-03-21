import React from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <header>
        <nav className="bg bg-secondary ">
          <ul className="nav justify-content-center ">
            <li className="nav-item ">
              <Link href="/">
                <a className="nav-link active text-white">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item ">
              <Link href="/Flashcards/MentalFlashCard">
                <a className="nav-link active text-white">
                  MentalFlashCard
                </a>
              </Link>
            </li>
            <li className="nav-item ">
              <Link href="/Flashcards/InputFlashCard">
                <a className="nav-link text-white">InputFlashCard</a>
              </Link>
            </li>
            <li className="nav-item ">
              <Link href="/Flashcards/MultipleFlashCard">
                <a className="nav-link text-white">MultipleFlashCard</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

        <main>
            <article className="container">{children}</article>
        </main>
       

      <footer className="footer">
        <Link href="#">
          <a>Powered by {'Laurent'}</a>
        </Link>
      </footer>
    
    </>
  );
};
export default Layout;