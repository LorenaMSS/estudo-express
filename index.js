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
  const params = request.params;

  console.log(params);

  return response.json(['Projeto 5105', 'Projeto 2']);
});

app.delete('/projects/:id', (request, response) => {
  return response.json(['Projeto 50', 'Projeto 2']);
});

app.listen(3333);
