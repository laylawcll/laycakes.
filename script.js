document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.querySelector('header nav');

  // Funcionalidade para o menu responsivo (hambúrguer)
  menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
  });
  HTML
  // Fechar o menu quando um link é clicado (para mobile)
  nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
          if (nav.classList.contains('active')) {
              nav.classList.remove('active');
          }
      });
  });

  // Exemplo de como você poderia lidar com o formulário de cadastro
  const cadastroForm = document.querySelector('.cadastro-form');
  if (cadastroForm) {
      cadastroForm.addEventListener('submit', (event) => {
          event.preventDefault(); // Impede o envio padrão do formulário

          const nome = document.getElementById('nome').value;
          const email = document.getElementById('email').value;
          const telefone = document.getElementById('telefone').value;

          // Em um cenário real, você enviaria esses dados para um servidor.
          // Por enquanto, vamos apenas exibir no console e dar um feedback.
          console.log('Dados do Cadastro:', { nome, email, telefone });

          alert('Obrigado por se cadastrar na LAYCAKES! Você receberá novidades em breve.');

          cadastroForm.reset(); // Limpa o formulário após o envio
      });
  }

  // Funcionalidade para modificar imagens ao clicar (exemplo simples)
  // Isso é uma demonstração. Para um sistema de modificação real (upload, etc.),
  // seria necessário um backend para gerenciar os arquivos.
  const menuImages = document.querySelectorAll('.menu-item img');

  menuImages.forEach(img => {
      img.addEventListener('click', () => {
          const currentSrc = img.src;
          const altText = img.alt;
          
          // Lógica de troca de imagem:
          // Você pode ter um array de imagens para cada produto e alternar entre elas.
          // Aqui, usamos um placeholder para simular a mudança.
          if (currentSrc.includes('pao.jpg')) {
              img.src = 'https://via.placeholder.com/300x200/F8C8DC/BA55D3?text=Pao+Fresquinho';
          } else if (currentSrc.includes('doce.jpg')) {
              img.src = 'https://via.placeholder.com/300x200/D8BFD8/F8C8DC?text=Doce+Colorido';
          } else if (currentSrc.includes('bolo.jpg')) {
              img.src = 'https://via.placeholder.com/300x200/F8C8DC/FFFFFF?text=Bolo+Decorado';
          } else if (currentSrc.includes('torta.jpg')) {
              img.src = 'https://via.placeholder.com/300x200/D8BFD8/F8C8DC?text=Torta+Deliciosa';
          } else if (currentSrc.includes('cafe.jpg')) {
              img.src = 'https://via.placeholder.com/300x200/F8C8DC/BA55D3?text=Cafe+Aromático';
          } else if (currentSrc.includes('bebida.jpg')) {
              img.src = 'https://via.placeholder.com/300x200/D8BFD8/F8C8DC?text=Bebida+Refrescante';
          } else {
              // Se for um placeholder, tenta voltar para a original
              // Isso requer que o 'alt' text corresponda ao nome do arquivo original
              const originalFileName = altText.toLowerCase().replace(/ /g, '_').replace(/á/g, 'a').replace(/ã/g, 'a').replace(/é/g, 'e').replace(/ç/g, 'c') + '.jpg';
              img.src = `images/${originalFileName}`;
          }
      });
  });
});
