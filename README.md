# 📝 Todo App

Uma aplicação moderna de gerenciamento de tarefas construída com React, TypeScript e Tailwind CSS. Organize suas tarefas de forma simples e eficiente!

![Todo App](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=for-the-badge&logo=vite)

## ✨ Funcionalidades

- ✅ **Gerenciamento de Tarefas**: Adicione, edite e remova tarefas facilmente
- 🎯 **Status de Conclusão**: Marque tarefas como concluídas ou pendentes
- 📊 **Resumo Estatístico**: Visualize o progresso das suas tarefas
- 💾 **Persistência Local**: Dados salvos automaticamente no navegador
- 🎨 **Interface Moderna**: Design limpo e responsivo com Tailwind CSS
- ⚡ **Performance Otimizada**: Construído com Vite para máxima velocidade
- 🔧 **Componentes Reutilizáveis**: Arquitetura modular e escalável

## 🚀 Tecnologias

- **React 19** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS 4** - Framework CSS utilitário
- **Vite** - Build tool e dev server
- **React Router** - Roteamento da aplicação
- **Class Variance Authority** - Sistema de variantes de componentes
- **SVGR** - Importação de SVGs como componentes React

## 📦 Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/todo-app.git
   cd todo-app
   ```

2. **Instale as dependências**
   ```bash
   yarn install
   # ou
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   yarn dev
   # ou
   npm run dev
   ```

4. **Acesse a aplicação**
   ```
   http://localhost:5173
   ```

## 🛠️ Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `yarn dev` | Inicia o servidor de desenvolvimento |
| `yarn build` | Gera build de produção |
| `yarn preview` | Visualiza o build de produção |
| `yarn lint` | Executa o linter ESLint |

## 📁 Estrutura do Projeto

```
src/
├── assets/          # Ícones e recursos estáticos
├── components/      # Componentes reutilizáveis (UI)
├── core-components/ # Componentes específicos da aplicação
├── helpers/         # Funções utilitárias
├── hooks/           # Custom React hooks
├── models/          # Tipos e interfaces TypeScript
├── pages/           # Componentes de página
└── App.tsx          # Componente principal
```

## 🎨 Componentes Principais

### Core Components
- **TasksList** - Lista principal de tarefas
- **TaskItem** - Item individual de tarefa
- **TasksSummary** - Resumo estatístico das tarefas

### UI Components
- **ButtonIcon** - Botão com ícone e estados de loading
- **Container** - Wrapper responsivo
- **Icon** - Sistema de ícones com animações

### Tailwind CSS
O projeto usa Tailwind CSS 4 com configuração automática. As classes estão disponíveis globalmente.

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona perfeitamente em:
- 📱 Dispositivos móveis
- 💻 Tablets
- 🖥️ Desktops

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🙏 Agradecimentos

- [React](https://react.dev/) - Biblioteca JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Vite](https://vitejs.dev/) - Build tool
- [TypeScript](https://www.typescriptlang.org/) - Superset JavaScript

---

⭐ **Se este projeto te ajudou, considere dar uma estrela!**
