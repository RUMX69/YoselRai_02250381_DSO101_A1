const request = require('supertest');
const app = require('./app');

describe('Todo API', () => {
  test('GET /tasks returns an array', async () => {
    const res = await request(app).get('/tasks');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('POST /tasks creates a task', async () => {
    const res = await request(app)
      .post('/tasks')
      .send({ title: 'Buy groceries' });
    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe('Buy groceries');
    expect(res.body.done).toBe(false);
    expect(res.body.id).toBeDefined();
  });

  test('PUT /tasks/:id updates a task', async () => {
    const createRes = await request(app)
      .post('/tasks')
      .send({ title: 'Original title' });
    const id = createRes.body.id;

    const updateRes = await request(app)
      .put(`/tasks/${id}`)
      .send({ title: 'Updated title', done: true });
    expect(updateRes.statusCode).toBe(200);
    expect(updateRes.body.title).toBe('Updated title');
    expect(updateRes.body.done).toBe(true);
  });

  test('DELETE /tasks/:id deletes a task', async () => {
    const createRes = await request(app)
      .post('/tasks')
      .send({ title: 'Task to delete' });
    const id = createRes.body.id;

    const deleteRes = await request(app).delete(`/tasks/${id}`);
    expect(deleteRes.statusCode).toBe(200);
    expect(deleteRes.body.message).toBe('Deleted!');
  });
});