const internalServerMessage = 'На сервере произошла ошибка';

// movies

// Bad Request
const invalidFilmDataMessage = 'Переданы некорректные данные при добавлении фильма';
const invalidIdMessage = 'Невалидный id';

// Not Found
const filmIdNotFoundMessage = 'Фильм с указанным _id не найден';

// Forbidden
const deleteForeignFilmMessage = 'Удаление фильмов других пользователей запрещено';

// users

// Bad Request
const invalidUpdateDataMessage = 'Переданы некорректные данные при обновлении профиля';
const invalidCreateDataMessage = 'Переданы некорректные данные при создании пользователя';

// Not Found
const userIdNotFoundMessage = 'Пользователь с указанным _id не найден';

// Conflict
const emailIsUsedMessage = 'Данный email уже используется';

// Unathorized
const wrongEmailOrPassword = 'Неправильные почта или пароль';

module.exports = {
  internalServerMessage,
  invalidFilmDataMessage,
  invalidIdMessage,
  invalidUpdateDataMessage,
  invalidCreateDataMessage,
  filmIdNotFoundMessage,
  userIdNotFoundMessage,
  deleteForeignFilmMessage,
  emailIsUsedMessage,
  wrongEmailOrPassword
};
