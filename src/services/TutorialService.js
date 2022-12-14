import http from '../http-common';

const getAll = () => http.get('/apps/abc234/books');

const get = (id) => http.get(`/apps/abc234/books/${id}`);

const create = (data) => http.post('/apps/abc234/books', data);

const update = (id, data) => http.put(`/apps/abc234/books/${id}`, data);

const remove = (id) => http.delete(`/apps/abc234/books/${id}`);

const TutorialService = {
  getAll,
  get,
  create,
  update,
  remove,
};

export default TutorialService;
