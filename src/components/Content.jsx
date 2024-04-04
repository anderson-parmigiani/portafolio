import HabilidadCard from "./HabilidadCard";

const Content = () => {
  // Projects Links on click
  const projectClick = (tipo) => {
    switch (tipo) {
      case "sistema":
        window.open("https://sistema-control-desechos.web.app/", "_blank");
        break;
      case "todo":
        window.open("https://statuesque-caramel-c7fd30.netlify.app/", "_blank");
        break;
      case "portafolio":
        window.scrollTo({
          top: document.getElementById("#"),
          behavior: "smooth",
        });
        break;
    }
  };

  return (
    <>
      <main className="principal">
        <section className="presentacion presentacion__contenedor">
          <picture>
            <source
              srcSet="assets/img/mixtas/imagen_personal.avif"
              type="image/avif"
            />
            <source
              srcSet="assets/img/mixtas/imagen_personal.webp"
              type="image/webp"
            />
            <img
              className="presentacion__imagen"
              src="assets/img/mixtas/imagen_personal.png"
              alt="imagen personal"
              width="120"
              height="120"
              loading="lazy"
              decoding="async"
            />
          </picture>

          <h2 className="presentacion__heading">Sobre mí</h2>
          <p className="presentacion__texto">
            Me caracterizo por ser un profesional responsable, proactivo, y
            colaborativo, que prioriza el trabajo en equipo y las buenas
            relaciones. Busco oportunidades para desarrollar y aplicar mis
            conocimientos y habilidades como desarrollador frontend, mi objetivo
            es seguir creciendo profesionalmente y aportar valor a mi sitio de
            trabajo y a la sociedad.
          </p>
        </section>

        <section className="formacion formacion__contenedor">
          <a href="https://cert.efset.org/ndLLrv" target="_blank">
            <picture>
              <source
                srcSet="assets/img/mixtas/efset_cert.avif"
                type="image/avif"
              />
              <source
                srcSet="assets/img/mixtas/efset_cert.webp"
                type="image/webp"
              />
              <img
                className="formacion__efset"
                src="assets/img/mixtas/efset_cert.png"
                alt="imagen certificado efset"
                width="138"
                height="138"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </a>

          <h2 className="formacion__heading">Mi formación</h2>

          <ul className="formacion__elementos">
            <li className="formacion__elemento">
              <h3 className="formacion__centro">
                Universidad José Antonio Páez.
                <span className="formacion__titulo">
                  Ingeniería de Computación
                </span>
              </h3>
              <div className="formacion__reconocimientos">
                <img
                  className="formacion__estrella"
                  src="assets/img/iconos/recognition.svg"
                  alt="imagen reconocimiento universidad"
                  width="20"
                  height="20"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  className="formacion__estrella"
                  src="assets/img/iconos/recognition.svg"
                  alt="imagen reconocimiento universidad"
                  width="20"
                  height="20"
                  loading="lazy"
                  decoding="async"
                />
                <span className="formacion__tooltip">
                  2 Reconocimientos: #1
                </span>
              </div>
            </li>
            <li className="formacion__elemento">
              <h3 className="formacion__centro">
                Lourtec.
                <span className="formacion__titulo">
                  Técnico en Tecnología Microsoft
                </span>
              </h3>
            </li>
            <li className="formacion__elemento">
              <h3 className="formacion__centro">
                Keys.
                <span className="formacion__titulo">
                  Especialista en Soporte Técnico | Seguridad Electrónica |
                  Instalador en Redes
                </span>
              </h3>
            </li>
            <li className="formacion__elemento">
              <h3 className="formacion__centro">
                Cisco Networking Academy | Universidad Central de Venezuela,
                Campus Maracay.
                <span className="formacion__titulo">
                  CCNA R&S: Introduction to Networks | Routing and Switching
                  Essentials | Scaling Networks
                </span>
              </h3>
            </li>
          </ul>
        </section>

        <section className="experiencia">
          <div className="experiencia__contenedor">
            <h2 className="experiencia__heading">Experiencia</h2>

            <ul className="experiencia__elementos">
              <li className="experiencia__elemento">
                <h3 className="experiencia__empresa">
                  Almacenadora Lara-Mar.
                  <span className="experiencia__cargo">Soporte Técnico</span>
                </h3>
              </li>
              <li className="experiencia__elemento">
                <h3 className="experiencia__empresa">
                  PC Actual.
                  <span className="experiencia__cargo">Soporte Técnico</span>
                </h3>
              </li>
            </ul>
          </div>
          <div className="experiencia__imagenes">
            <div className="experiencia__blanco"></div>

            <div className="experiencia__logos">
              <picture>
                <source
                  srcSet="assets/img/mixtas/almacenadora_lara-mar.avif"
                  type="image/avif"
                />
                <source
                  srcSet="assets/img/mixtas/almacenadora_lara-mar.webp"
                  type="image/webp"
                />
                <img
                  className="experiencia__logo-laramar"
                  src="assets/img/mixtas/almacenadora_lara-mar.png"
                  alt="logo laramar"
                  width="169"
                  height="102"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <picture>
                <source
                  srcSet="assets/img/mixtas/pcactual.avif"
                  type="image/avif"
                />
                <source
                  srcSet="assets/img/mixtas/pcactual.webp"
                  type="image/webp"
                />
                <img
                  className="experiencia__logo-pcactual"
                  src="assets/img/mixtas/pcactual.png"
                  alt="logo pcactual"
                  width="131"
                  height="131"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>

            <div className="experiencia__background"></div>
          </div>
        </section>

        <section className="habilidades">
          <div className="habilidades__contenedor">
            <h2 className="habilidades__heading">Habilidades</h2>
            <div className="habilidades__grid">
              <HabilidadCard
                tipo="lenguajes"
                contenido={["html", "css", "javascript", "typescript"]}
              />
              <HabilidadCard
                tipo="frameworksLibrerias"
                contenido={["sass", "tailwind", "bootstrap", "vue", "react"]}
              />
              <HabilidadCard
                tipo="herramientas"
                contenido={[
                  "npm",
                  "gulp",
                  "eslint",
                  "firebase",
                  "vite",
                  "git",
                  "github",
                  "babel",
                  "...etc",
                ]}
              />
              <HabilidadCard
                tipo="usoSecundario"
                contenido={[
                  "python",
                  "java",
                  "php",
                  "jquery",
                  "vb",
                  "mysql",
                  "figma",
                  "wordpress",
                  "...etc",
                ]}
              />
            </div>
          </div>
        </section>

        <section className="proyectos">
          <div className="proyectos__contenedor">
            <h2 className="proyectos__heading">Proyectos</h2>
            <div className="proyectos__grid">
              <div className="proyecto">
                <div
                  className="proyecto__sistema"
                  onClick={() => projectClick("sistema")}
                >
                  <div className="proyecto__imagen-sistema"></div>

                  <div className="proyecto__contenido">
                    <h3 className="proyecto__titulo-sistema">
                      Sistema de Control de Desechos
                    </h3>
                    <p className="proyecto__descripcion">
                      Sistema de información bajo plataforma web para el control
                      de la disposición de materiales de desecho electrónico.
                    </p>
                    <div className="proyecto__lenguajes">
                      <span className="proyecto__lenguaje">html</span>
                      <span className="proyecto__lenguaje">sass</span>
                      <span className="proyecto__lenguaje">typescript</span>
                      <span className="proyecto__lenguaje">vue</span>
                      <span className="proyecto__lenguaje">firebase</span>
                    </div>
                    <nav className="proyecto__nav">
                      <a
                        className="proyecto__enlace"
                        href="https://github.com/anderson-parmigiani/sistema-control-desechos"
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                      >
                        <span className="proyecto__accesible">Github</span>
                      </a>
                    </nav>
                  </div>
                </div>
              </div>

              <div className="proyecto">
                <div
                  className="proyecto__todo"
                  onClick={() => projectClick("todo")}
                >
                  <div className="proyecto__imagen-todo"></div>

                  <div className="proyecto__contenido">
                    <h3 className="proyecto__titulo-todo">Todo</h3>
                    <p className="proyecto__descripcion">Todo App (CRUD).</p>
                    <div className="proyecto__todo-group">
                      <div className="proyecto__lenguajes-todo">
                        <span className="proyecto__lenguaje">html</span>
                        <span className="proyecto__lenguaje">tailwind</span>
                        <span className="proyecto__lenguaje">javascript</span>
                        <span className="proyecto__lenguaje">react</span>
                      </div>
                      <nav className="proyecto__nav">
                        <a
                          className="proyecto__enlace"
                          href="https://github.com/anderson-parmigiani/todo-crud"
                          onClick={(e) => e.stopPropagation()}
                          target="_blank"
                        >
                          <span className="proyecto__accesible">Github</span>
                        </a>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>

              <div className="proyecto">
                <div
                  className="proyecto__portafolio"
                  onClick={() => projectClick("portafolio")}
                >
                  <div className="proyecto__imagen-portafolio"></div>

                  <div className="proyecto__contenido">
                    <h3 className="proyecto__titulo-portafolio">Portafolio</h3>
                    <p className="proyecto__descripcion proyecto__descripcion--portafolio">
                      Portafolio de mi autoría donde muestro información
                      profesional relevante sobre mí. Actualmente se está
                      visualizando.
                    </p>
                    <div className="proyecto__lenguajes">
                      <span className="proyecto__lenguaje">html</span>
                      <span className="proyecto__lenguaje">sass</span>
                      <span className="proyecto__lenguaje">javascript</span>
                      <span className="proyecto__lenguaje">react</span>
                    </div>
                    <nav className="proyecto__nav">
                      <a
                        className="proyecto__enlace"
                        href="https://github.com/anderson-parmigiani/portafolio"
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                      >
                        <span className="proyecto__accesible">Github</span>
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Content;
