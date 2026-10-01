const btnHamburger = document.getElementById('btn-hamburger');
const menuDropdown = document.getElementById('menu-dropdown');

if (btnHamburger && menuDropdown) {
    btnHamburger.addEventListener('click', function() {
        menuDropdown.classList.toggle('ativo');
        const estaAberto = menuDropdown.classList.contains('ativo');
        btnHamburger.setAttribute('aria-expanded', estaAberto);
    });
}

/* =========================================
   2. LÓGICA DA SINGLE PAGE APPLICATION (SPA)
   ========================================= */
const rotasSPA = {
    //  index.html
    '#inicio': `
        <section>
            <img src="imagens/imagem-da-empresa.jpg" alt="Foto da fachada do prédio da Empresa Exemplo com logotipo na porta" class="imagem-empresa">
        <p>Somos uma empresa dedicada a oferecer as melhores soluções para o seu negócio, unindo inovação, qualidade e atendimento de excelência.</p>
        <p><a href="projetos.html" class="btn">Confira nossos projetos</a></p>
        </section>
    `,
    
    // projetos.html
    '#projetos': `
        <section class="secao-projetos">
            <!-- Apresentação dos Projetos -->
        <section>
            <h2>O Que Nós Fazemos</h2>
            <p>Atuamos há 5 anos levando educação, cultura e alimentação para áreas de vulnerabilidade social. Abaixo, veja um dos nossos principais projetos em ação:</p>
            <img src="imagens/foto-projeto.jpg" alt="Voluntários distribuindo livros e sorrindo junto com crianças da comunidade" class="foto-projeto">
            
        </section>

        <!-- Chamada para Ação (Como Ajudar) -->
        <section>
            <h2>Como Você Pode Ajudar?</h2>
            <p>Nossos projetos só acontecem graças ao apoio de pessoas como você. Escolha a melhor forma de se envolver:</p>

            <h3>1. Contribuição Financeira</h3>
            <p>Sua doação garante a compra de materiais, alimentos e a manutenção do nosso espaço. Qualquer valor faz a diferença!</p>
            <p><a href="Contato.html" class="btn"><strong>Clique aqui para Doar Agora</strong></a></p>

            <h3>2. Trabalho Voluntário</h3>
            <p>Doe o seu tempo e talento. Precisamos de educadores, ajudantes gerais e pessoas dispostas a colocar a mão na massa.</p>
            <p><a href="Contato.html" class="btn"><strong>Clique aqui para ser um Voluntário</strong></a></p>
        </section>
    

        <!-- ==========================================
             INÍCIO DO NOVO CÓDIGO (MAIS PROJETOS)
             ========================================== -->
             
        <!-- Divisória -->
        <hr class="divisor-projetos">

        <!-- Seção Estilo Blog -->
        <section class="mais-projetos">
            <h2>Mais Projetos</h2>
            
            <!-- Utilizando o Grid de 12 colunas já criado -->
            <div class="grid-12">
                
                <article class="card-projeto">
                    <h3>Educação Verde</h3>
                    <p>Programa de conscientização ambiental nas escolas públicas, ensinando crianças sobre reciclagem, compostagem e cuidados com o bioma local.</p>
                    
                </article>

                <article class="card-projeto">
                    <h3>Horta Comunitária</h3>
                    <p>Criação e manutenção de hortas urbanas sustentáveis para fornecer alimentos frescos e orgânicos para famílias em situação de vulnerabilidade.</p>
                    
                </article>

                <article class="card-projeto">
                    <h3>Inclusão Digital</h3>
                    <p>Aulas de informática básica e programação para jovens, preparando-os para o mercado de trabalho e democratizando o acesso à tecnologia.</p>
                    
                </article>

            </div>
        </section>
        
        <!-- ==========================================
             FIM DO NOVO CÓDIGO
             ========================================== -->
            </div>
        </section>
    `,
    
    //cadastro.html
    '#cadastro': `
        <section>
            <form action="/enviar-cadastro" method="POST">
            
            <fieldset>
                <legend>Seus Dados Pessoais e Contato</legend>

                <div>
                    <label for="nome">Nome Completo:</label>
                    <input type="text" id="nome" name="nome" required>
                </div>

                <div>
                    <label for="email">E-mail:</label>
                    <input type="email" id="email" name="email" required>
                </div>

                <!-- CAMPO CPF COM PATTERN -->
                <div>
                    <label for="cpf">CPF:</label>
                    <input type="text" id="cpf" name="cpf" 
                           placeholder="000.000.000-00"
                           pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}" 
                           title="Digite o CPF no formato: 000.000.000-00" required>
                </div>

                <!-- CAMPO TELEFONE COM PATTERN -->
                <div>
                    <label for="telefone">Telefone:</label>
                    <input type="tel" id="telefone" name="telefone" 
                           placeholder="(11) 90000-0000"
                           pattern="\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}" 
                           title="Digite o telefone no formato: (99) 99999-9999" required>
                </div>

                <!-- CAMPO CEP COM PATTERN -->
                <div>
                    <label for="cep">CEP:</label>
                    <input type="text" id="cep" name="cep" 
                           placeholder="00000-000"
                           pattern="[0-9]{5}-[0-9]{3}" 
                           title="Digite o CEP no formato: 00000-000" required>
                </div>

                <div>
    <label for="senha">Senha:</label>
    <input type="password" id="senha" name="senha" 
           pattern="(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).{8,}" 
           title="A senha deve ter pelo menos 8 caracteres, incluindo no mínimo uma letra maiúscula, um número e um caractere especial." 
           required>
</div>
            </fieldset>

            <button type="submit">Cadastrar</button>

        </form>
        </section
      
    //contato.html
    '#contato': `
        <section>`   
        <form action="/enviar-cadastro" method="POST">
            
            <fieldset>
                <legend>Seus Dados Pessoais e Contato</legend>

                <div>
                    <label for="nome">Nome Completo:</label>
                    <input type="text" id="nome" name="nome" required>
                </div>

                <div>
                    <label for="email">E-mail:</label>
                    <input type="email" id="email" name="email" 
                    placeholder="email@provedor.com"
                    required>
                </div>

            
                <!-- CAMPO TELEFONE COM PATTERN -->
                <div>
                    <label for="telefone">Telefone:</label>
                    <input type="tel" id="telefone" name="telefone" 
                           placeholder="(11) 90000-0000"
                           pattern="\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}" 
                           title="Digite o telefone no formato: (99) 99999-9999" required>
                </div>
                
                <div>
                    <label for="mensagem">Sua solicitação ou Detalhes do envio de doação:</label>
                 <!-- A tag textarea precisa ser aberta e fechada -->
                 <textarea id="mensagem" name="mensagem" rows="5" placeholder="Conte-nos por que você quer ser voluntário..."></textarea>
</div>        
                
</div>
            </fieldset>

            <button type="submit">Contato</button>

        </form>
        </section>`
};

const appRoot = document.getElementById('app-root');

function renderizarPagina() {
    // 1. Pega o hash da URL (se não tiver, usa #inicio)
    const hashAtual = window.location.hash || '#inicio';
    
    // 2. Busca o HTML correspondente ou exibe erro
    const novoConteudoHTML = rotasSPA[hashAtual] || `<h2>Página não encontrada</h2>`;
    
    // 3. Injeta o HTML no contêiner
    appRoot.innerHTML = novoConteudoHTML;

    // 4. (Opcional) Fecha o menu hambúrguer automaticamente no celular ao clicar num link
    if (menuDropdown && menuDropdown.classList.contains('ativo')) {
        menuDropdown.classList.remove('ativo');
        btnHamburger.setAttribute('aria-expanded', 'false');
    }
}

// Executa a função quando o site abre e quando o hash muda
window.addEventListener('load', renderizarPagina);
window.addEventListener('hashchange', renderizarPagina);