import http from '../http-common';

const getAll = () => http.get('/apps/GhDO75eC4vmoMWigGVGM/books');

const create = (data) => http.post('/apps/GhDO75eC4vmoMWigGVGM/books', data);

const remove = (id) => http.delete(`/apps/GhDO75eC4vmoMWigGVGM/books/${id}`);

const BookService = {
  getAll,
  create,
  remove,
};

export default BookService;
