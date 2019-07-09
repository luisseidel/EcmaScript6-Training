# Integração do GitHub no VS Code para uso do JavaScript:

1 - Instalar Node JS: servidor JS
    https://nodejs.org/en/

2 - Instalar Yarn: gerenciador de pacotes para JS:
    https://yarnpkg.com/pt-BR/

3 - Instalar Git: gerenciador de versionamento
    https://git-scm.com/

4 - Instalar VS Code: Editor de código
    https://code.visualstudio.com/

5 - Instalar as extensões no VSCode:
    -GitLens
    -GitHistory
    -Material Icon theme
    -Node Exec
    -Watch in Chrome

6 - Instalar no Chrome:
    6.1 - VS Code Watch in chrome: para utilizar a extensão, toda vez que for executar um html → Ctrl + Shift + P e digitar o Watch in chrome dentro do arquivo que você quer executar. Isso fará com que todas as modificações feitas nos arquivos html sejam automaticamente transmitidas por meio de um miniservidor local e não precisemos atualizar o navegador a cada mudança.

7 - Criar as pastas do projeto no VSCode
    7.1 - pelo terminal ou power shell, verificar as instalações do node e yarn, pelos comandos “node -v” e “yarn -v”, que devem retornar as respectivas versões dos arquivos.

8. Integrar projetos github:
8.1 - Criar um repositório no github
    8.2 - no VS code: Ctrl + Shift + P e inserir o comando “clone” e adicionar o url do repositório. Provavelmente será pedido seu login e senha do github.
    8.3 - Selecionar a pasta de destino do repositório no pc.
    8.4 - Criar os arquivos do projeto, main.java, index.html, main.js, etc…
    8.4.1 (Opcional) - criar um arquivo .gitignore na raiz da pasta do projeto e adicionar as pastas/arquivos que não devem ir ao git.
    8.5 - Em Source Control, aparecerão todos os arquivos alterados e, teremos um campo para digitar a mensagem de commit. Após digitar a mensagem, só apertar o check.
    8.6 - Após devemos ir na extensão GitLens e dar um push (seta para cima ao lado do nome do repositório)
    8.7 - Ao criar uma branch pelo githhub, devemos fazer pull (dowload) das novas informações do repositório.
    

9. Para projetos JS:
    9.1 - Pelo terminal, entrar na pasta raiz do projeto.
    9.2 - Iniciar o yarn pelo comando “yarn init”
    9.3 - Instalar as dependências “yarn add @babel/preset-env”, “yarn add @babel/cli”, “yarn add @babel/core”. Isso fará com que sejam criados alguns arquivos e pastas no projeto.
    9.4 - Dentro do arquivo package.json adicionar após “dependencies”:
    "scripts": {
        "dev": "babel ./main.js -o bundle.js -w"
      }
    Isso irá criar um ‘comando’ para o yarn chamado dev, que por meio do babel, irá pegar o arquivo main.js e transformar todo o código dele de forma que navegadores mais antigos, também possam ler o código do JS. A opção “-w” no fim do arquivo faz com que o terminal fique monitorando e adicionando as mudanças em tempo real no arquivo bundle.js.
