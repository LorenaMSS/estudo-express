const { response } = require('express');
const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json());

const projects = [];

/**
 * GET: buscar informações do back-end
 * POST: Criar uma informação no back end
 * PUT/PACH: alterar uma informação no back-end
 * DELETE: deletar informações do back-end
 */
/**Query Params: Vamos usar principalmente para filtros e paginação
 * Route Params: Identificar na hora de atualizar ou deletar
 * Request Body: Resto do conteúdo na hora de criar ou editar um recurso
 */

app.get('/projects', (request, response) => {
  //const { title, owner } = request.query;

  return response.json(projects);
});

app.post('/projects', (request, response) => {
  const { title, owner } = request.body;

  const project = { id: uuidv4(), title, owner };

  projects.push(project); // joga a criação do projeto para o array

  return response.json(project); // sempre retornar o projeto recém-criado e nunca a exibir a lista completa
});

app.put('/projects/:id', (request, response) => {
  const { id } = request.params; // aqui pegamos nosso ID
  const { title, owner } = request.body; // retornando uma nova informação

  // aqui usamos o findIndex para percorrer todo o array atrás do id
  //findIndex vai percorrer todos os projetos e toda vez que ele percorrer na variavel project
  // caso ela satisfeita e retornar true ela vai me retornar o id que estou passando (project=>project.id===id)
  const projectIndex = projects.findIndex((project) => project.id === id);

  if (projectIndex < 0) {
    return response.status(400).json({ error: 'Projeto não foi encontrado' });
  }

  // agora tenho indice vou criar uma nova indormação de projeto

  const project = {
    id,
    title,
    owner,
  };

  projects[projectIndex] = project;

  return response.json(project);
});

app.delete('/projects/:id', (request, response) => {
  const { id } = request.params;
  const projectIndex = projects.findIndex((project) => project.id === id);

  if (projectIndex < 0) {
    return response.status(400).json({ error: 'Projeto não foi encontrado' });
  }

  projects.splice(projectIndex, 1);

  return response.status(204).send();
});

app.listen(3333);
