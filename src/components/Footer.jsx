const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__contenedor">
                <p className="footer__copyright">
                    © ParanDev {new Date().getFullYear()}.
                        Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
};

export default Footer;