module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Cria um componente e uma história no Storybook',
    prompts: [
      {
        type: 'input',
        name: 'name', // Isso define a variável que será usada nos templates
        message: 'Nome do componente?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}.tsx', // Usa 'pascalCase' para converter o nome para o formato Pascal
        templateFile: 'plop-templates/component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/stories/{{pascalCase name}}.stories.tsx', // Gera a história correspondente
        templateFile: 'plop-templates/component.stories.tsx.hbs',
      },
    ],
  });
};
