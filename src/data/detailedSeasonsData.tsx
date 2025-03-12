import seasonOnePoster from '../assets/images/season_1_poster.png';
import seasonTwoPoster from '../assets/images/season_2_poster.png';

const seasonImages = require.context(
  '../assets/images/seasons',
  false,
  /\.png$/
);
const seasonsImgsPaths = seasonImages.keys().map(seasonImages);
console.log('seasonsImgsPaths:', seasonsImgsPaths);

const detailedSeasonsData = [
  {
    title: 'Вторжение титанов (1 сезон)',
    img: seasonOnePoster,
    imgDescription: 'aot season 1 picture',
    seasonDescription: `«Атака титанов» начинается как типичная, но жестокая эпопея о выживании в фэнтези-мире.
       Главные герои — Эрен Йегер, его приемная сестра Микаса Аккерман и их друг Армин Арлерт.
        Троица живет в средневековом городе Шиганшине, окруженном огромной стеной,
         защищающей от титанов — безумных плотоядных великанов, пожирающих людей.`,
    seasonSlug: 'season-one',
    seasonImgs: [
      seasonsImgsPaths[0].default,
      seasonsImgsPaths[1].default,
      seasonsImgsPaths[2].default,
      seasonsImgsPaths[3].default,
    ],
  },
  {
    title: 'Тайна стен (2 сезон)',
    img: seasonTwoPoster,
    imgDescription: 'aot season 2 picture',
    seasonDescription: `Зритель знакомится со звероподобным титаном, который поведает новые тайны о предстоящем развитии сюжета.
     Во время очередной атаки выясняется, что среди разведчиков есть враги под прикрытием.
      После неожиданного вторжения титанов за стену, герои сталкиваются с новым, более страшным противником...`,
    seasonSlug: 'season-two',
    seasonImgs: [
      seasonsImgsPaths[4].default,
      seasonsImgsPaths[5].default,
      seasonsImgsPaths[6].default,
      seasonsImgsPaths[7].default,
    ],
  },
  {
    title: 'Битва за Шиганшину (3 сезон)',
    img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/6c382dcf-6759-4ca4-85cd-ecf9a6f5089c/3840x',
    imgDescription: 'aot season 3 picture',
    seasonDescription: `Фокус смещается на борьбу внутри самой человеческой цивилизации.
     Основное внимание уделено политическим интригам в стенах и борьбе с коррупцией внутри правительства.
      Главные герои — Эрен, Микаса и Армин — сталкиваются с новыми врагами, пытаясь раскрыть секреты, скрывающиеся за тем, что происходит в королевстве.
       С середины сезона начинается самая масштабная битва сериала.`,
    seasonSlug: 'season-three',
    seasonImgs: [
      seasonsImgsPaths[8].default,
      seasonsImgsPaths[9].default,
      seasonsImgsPaths[10].default,
      seasonsImgsPaths[11].default,
    ],
  },
  {
    title: 'По ту сторону моря... (4 сезон)',
    img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/e5f7745e-22b5-4079-8c5d-62c2370d86c6/3840x',
    imgDescription: 'aot season 4 picture',
    seasonDescription: `Все на самом деле не то, чем кажется. Четвертый сезон Атаки титанов кардинально меняет фокус, переворачивая все с ног на голову.
     Здесь зрители знакомятся с новыми персонажами, главные герои столкнутся с другими угрозами, которые угрожают миру.`,
    seasonSlug: 'season-four',
    seasonImgs: [
      seasonsImgsPaths[12].default,
      seasonsImgsPaths[13].default,
      seasonsImgsPaths[14].default,
      seasonsImgsPaths[15].default,
    ],
  },
];

export default detailedSeasonsData;
