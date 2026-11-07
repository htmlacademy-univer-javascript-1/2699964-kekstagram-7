import { getRandomInteger } from './util.js';

const photoCount = 25;
const minLikes = 15;
const maxLikes = 200;
const minComments = 0;
const maxComments = 30;
const minAvatar = 1;
const maxAvatar = 6;

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const names = [
  'Артём',
  'Мария',
  'Иван',
  'Елена',
  'Максим',
  'София',
  'Дмитрий',
  'Анна'
];

const generateMessage = () => {
  let messageText = '';
  const count = getRandomInteger(1, 2);
  const availableMessages = [...messages];

  for (let i = 0; i < count; i++) {
    const randomIndex = getRandomInteger(0, availableMessages.length - 1);
    messageText += `${availableMessages[randomIndex]} `;
    availableMessages.splice(randomIndex, 1);
  }

  return messageText.trim();
};

const getUniquePhotoId = (function() {
  const usedIds = [];

  return function generateId() {
    const newId = getRandomInteger(1, photoCount);

    if (!usedIds.includes(newId)) {
      usedIds.push(newId);
      return newId;
    } else {
      return generateId();
    }
  };
})();

const createComment = (function() {
  let lastId = 0;

  return function() {
    return {
      id: ++lastId,
      avatar: `img/avatar-${getRandomInteger(minAvatar, maxAvatar)}.svg`,
      message: generateMessage(),
      name: names[getRandomInteger(0, names.length - 1)]
    };
  };
})();

const generateComments = () => {
  const count = getRandomInteger(minComments, maxComments);
  return Array.from({ length: count }, () => createComment());
};

const createPhotoUser = (function() {
  let lastId = 0;

  return function() {
    return {
      id: ++lastId,
      url: `photos/${getUniquePhotoId()}.jpg`,
      description: 'Описание',
      likes: getRandomInteger(minLikes, maxLikes),
      comments: generateComments()
    };
  };
})();

const generatePhotos = (count = photoCount) => {
  const result = [];

  for (let i = 0; i < count; i++) {
    result.push(createPhotoUser());
  }

  return result;
};

export { generatePhotos };
