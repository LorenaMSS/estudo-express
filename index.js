const { response } = require('express');
const express = require('express');
const app = express();

/**
 * GET: buscar informações do back-end
 * POST: Criar uma informação no back end
 * PUT/PACH: alterar uma informação no back-end
 * DELETE: deletar informações do back-end
 */
/**Query Params: Vamos usar principalmente para filtros e paginação
 * Route Params: Identificar na hora de atualizar ou deletar
 * Request Params
 */

app.get('/projects', (request, response) => {
  const { title, owner } = request.query;

  console.log(title);
  console.log(owner);

  return response.json(['Projeto 1', 'Projeto 2']);
});

app.post('/projects', (request, response) => {
  return response.json(['Projeto 50', 'Projeto 2', 'Projeto 3', 'Projeto 4']);
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
