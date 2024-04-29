import "./ContentMain.css";
import Search from "./../assets/img/Search.svg";
function ContentMain() {
  return (
    <div>
      <main className="main">
        <div className="contentTitle">
          <h1>Bienvenido a Programming School</h1>
          <p>
            Este es un proyecto de código abierto para ayudar con el aprendizaje
            continuo.
          </p>
        </div>
        <div className="contentSearch">
          <div className="search">
            <img src={Search} alt="" />
            <input type="search" placeholder="Buscar curso" />
          </div>
        </div>
        <div className="contentCourses">
          <a href="" className="card card1">
            <h3>Algoritmos y estructura de datos</h3>
            <p>
              Un plan de estudios de código abierto para aprender los
              fundamentos de la programación, que ofrece recursos y proyectos en
              varios idiomas.
            </p>
          </a>
          <a href="" className="card card2">
            <h3>Algoritmos y estructura de datos</h3>
            <p>
              Un plan de estudios de código abierto para aprender los
              fundamentos de la programación, que ofrece recursos y proyectos en
              varios idiomas.
            </p>
          </a>
          <a href="" className="card card3">
            <h3>Algoritmos y estructura de datos</h3>
            <p>
              Un plan de estudios de código abierto para aprender los
              fundamentos de la programación, que ofrece recursos y proyectos en
              varios idiomas.
            </p>
          </a>
          <a href="" className="card card4">
            <h3>Algoritmos y estructura de datos</h3>
            <p>
              Un plan de estudios de código abierto para aprender los
              fundamentos de la programación, que ofrece recursos y proyectos en
              varios idiomas.
            </p>
          </a>
          <a href="" className="card card5">
            <h3>Algoritmos y estructura de datos</h3>
            <p>
              Un plan de estudios de código abierto para aprender los
              fundamentos de la programación, que ofrece recursos y proyectos en
              varios idiomas.
            </p>
          </a>
          <a href="" className="card card6">
            <h3>Algoritmos y estructura de datos</h3>
            <p>
              Un plan de estudios de código abierto para aprender los
              fundamentos de la programación, que ofrece recursos y proyectos en
              varios idiomas.
            </p>
          </a>
          <a href="" className="card card1">
            <h3>Algoritmos y estructura de datos</h3>
            <p>
              Un plan de estudios de código abierto para aprender los
              fundamentos de la programación, que ofrece recursos y proyectos en
              varios idiomas.
            </p>
          </a>
          <a href="" className="card card2">
            <h3>Algoritmos y estructura de datos</h3>
            <p>
              Un plan de estudios de código abierto para aprender los
              fundamentos de la programación, que ofrece recursos y proyectos en
              varios idiomas.
            </p>
          </a>
        </div>
        <div className="contentFooter">
          <p>
            Puedes apoyar con tu donación para hacer que este proyecto siga
            creciendo
          </p>
        </div>
      </main>
    </div>
  );
}

export default ContentMain;
