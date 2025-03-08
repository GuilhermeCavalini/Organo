import "./Rodape.css";

export const Rodape = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/guilherme-cavalini-lopes/" >
            <img src="/imagens/fb.png" alt="Facebook"></img>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/guilherme-cavalini-lopes/" >
              <img src='/imagens/tw.png' alt="Twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/gui_cavalinii/">
            <img src="/imagens/ig.png" alt="Instagram"></img>
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="/imagens/logo.png" alt="" />
      </section>
      <section>
        <p>Desenvolvido por Guilherme.</p>
      </section>
    </footer>
  );
};
