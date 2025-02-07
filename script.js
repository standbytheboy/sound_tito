const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
    {
      name: 'Everson Costa',
      position: 'Aluno de Piano',
      photo:
        'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text:
        "Sempre sonhei em tocar piano, mas nunca soube por onde começar. A Escola Lapa me deu toda a base e hoje toco com prazer em diversas apresentações.",
    },
    {
      name: 'Débora Souza',
      position: 'Aluna de Violão',
      photo: 'https://randomuser.me/api/portraits/women/44.jpg',
      text:
        'A Escola de Música Lapa tem sido uma experiência transformadora para mim. Comecei a aprender violão do zero e, com a paciência e a didática dos professores, já estou tocando minhas músicas favoritas! O ambiente é acolhedor e todos são super atenciosos. Além disso, a plataforma online do site é super fácil de navegar. Eu recomendo muito!',
    },
    {
      name: 'Carlos Henrique',
      position: 'Aluna de Piano',
      photo: 'https://randomuser.me/api/portraits/women/44.jpg',
      text:
        'Sempre sonhei em aprender piano, mas nunca sabia por onde começar. Na Escola de Música Lapa, encontrei o apoio perfeito para me desenvolver musicalmente. As aulas são dinâmicas e os professores sabem como te desafiar no momento certo. O site também tem todas as informações que preciso, e é super simples de entrar em contato com a escola!',
    },
    {
      name: 'Mariana Lima',
      position: 'Aluna de Bateria',
      photo: 'https://randomuser.me/api/portraits/women/44.jpg',
      text:
        'Tocar bateria sempre foi uma paixão, mas nunca tive oportunidade de estudar com profundidade. Quando encontrei a Escola de Música Lapa, não só aprendi muito sobre o instrumento, mas também descobri uma verdadeira comunidade de músicos. O site tem todas as informações claras sobre os cursos e as redes sociais da escola fazem a comunicação ser bem direta',
    },
]

let idx = 1;

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}
setInterval(updateTestimonial, 10000);

// ======================= VALIDAÇÃO DO EMAIL =======================

const emailForm = document.getElementById("emailForm");
const btnForm = document.getElementById("btnForm");

function validarEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

btnForm.addEventListener("click", () => {
  const emailValue = emailForm.value.trim();

  // Verifica se o email tem o formato correto
  if (!validarEmail(emailValue)) {
    alert("Por favor, insira um email válido");
    emailForm.focus();
    return;
  }

  // Caso a validação passe
  alert("Email enviado com sucesso!");
  emailForm.value = ""; // Limpa o campo após sucesso
});

emailForm.addEventListener("keydown", (event) => {
  if(event.key === "Enter"){
    btnForm.click();
}
});

// ======================= SEARCHBAR =======================

const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
    search.classList.toggle('active');
    input.focus();
})
