// Get currentYear
const currentDate = () => {
    const footerYear = document.querySelector('.footer__year');

    const fecha = new Date();
    footerYear.innerHTML = fecha.getFullYear();
};

// Copy email
const copiar = () => {
    const btnCopy = document.querySelector('.header__email-copiar');
    const email = document.querySelector('.header__email-texto');
    const copyTooltip = document.querySelector('.header__email-tooltip');
    let copyTimer;

    btnCopy.addEventListener('click', async () => {
        clearTimeout(copyTimer);
        
        const emailTexto = email.value;
        await navigator.clipboard.writeText(emailTexto).catch(e => {
            console.log(e);
        });
    
        copyTooltip.style.display = "block";

        copyTimer = setTimeout(() => {
            copyTooltip.style.display = "none";
        }, 1500);
    });
};

// Projects Links on click
const projectsClick = () => {
    const projectSystem = document.querySelector('.proyecto__sistema');
    const projectPortafolio = document.querySelector('.proyecto__portafolio');

    const projects = [projectSystem, projectPortafolio];

    projects.forEach(project => {
        project.addEventListener('click', () => {
            if (project.className === 'proyecto__sistema') {
                window.open('https://sistema-control-desechos.web.app/', '_blank')
            } else {
                window.scrollTo ({
                    top: document.getElementById('#'),
                    behavior: "smooth"
                }); 
            }
        });
    });
};

// Anchor inside projects
const anchorsGit = () => {
   const anchors = document.querySelectorAll('.proyecto__enlace')

   anchors.forEach(anchor => {
        anchor.addEventListener('click', e => {
                e.stopPropagation();
        });
   });
};

currentDate();
copiar();
projectsClick();
anchorsGit();