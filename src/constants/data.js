import images from './images';
/* 
const works = [
  {
    production: 'Christmas Salon Concert',
    when: '2024',
    where: 'Japan || Tokyo',
  },
  {
    production: 'Hungarian Festival',
    when: '2024',
    where: 'Japan || Tokyo',
  },
  {
    production: 'La Traviata',
    when: '2024',
    where: 'Japan || Tokyo',
  },
  {
    production: 'Juristenball Wien',
    when: '2024',
    where: 'Austria || Vienna',
  },
  {
    production: 'Shizuki Asato Dinner Show',
    when: '2023',
    where: 'Japan || Tokyo',
  },
  {
    production: 'Made In Japan',
    when: '2023',
    where: 'Austria || Wiener Neustadt',
  },
  {
    production: 'Hungarian Embassy Concerts',
    when: '2023',
    where: 'Japan || Tokyo',
  },
  {
    production: 'Think Of Me Concert',
    when: '2023',
    where: 'Japan || Tokyo',
  },
  {
    production: 'Musical and Miskolc Gala',
    when: '2023',
    where: 'Hungary || Miskolc',
  },

  {
    production: 'Akiko Nakajima and Friends',
    when: '2022',
    where: 'Japan || Tokyo',
  },
  {
    production: 'Sound Of Music Concert',
    when: '2021',
    where: 'Germany',
  },
  {
    production: 'Maya’s Magic Moments',
    when: '2020',
    where: 'Austria || Vienna',
  },
  {
    production: 'Musical and Miskolc Concert',
    when: '2017-2019',
    where: 'Hungary || Miskolc',
  },
  {
    production: 'The Cinema Musical Concert',
    when: '2016',
    where: 'Japan || Tokyo',
  },
  {
    production: 'Asato-Mate-Kanata Special Live',
    when: '2016',
    where: 'Japan || Tokyo',
  },
  {
    production: 'ELISABETH / der TOD',
    when: '2015-2016',
    where: 'Germany || Austria',
  },
  {
    production: 'Golden Songs Concert Tour',
    when: '2015',
    where: 'Japan || Tokyo',
  },
  {
    production: 'MK Future Documentation Tour',
    when: '2014',
    where: 'Japan || Tokyo',
  },
  {
    production: 'CHESS in Concert / Arbiter',
    when: '2013',
    where: 'Japan || Tokyo',
  },
  {
    production: 'Mate Kamaras Solo Live',
    when: '2013',
    where: 'Japan || Tokyo',
  },
  {
    production: 'ELISABETH / der TOD (Vienna cast)',
    when: '2012',
    where: 'Japan || Tokyo',
  },
  {
    production: 'ELISABETH / der TOD (japanese cast)',
    when: '2012',
    where: 'Japan || Tokyo',
  },
  {
    production: 'MITSUKO / Heinrich (japanese cast)',
    when: '2011',
    where: 'Japan || Tokyo',
  },
  {
    production: 'Mate Kamaras Solo Live',
    when: '2010',
    where: 'Japan || Tokyo',
  },
  {
    production: 'LULU / Jack',
    when: '2010',
    where: 'Austria || Vienna',
  },
  {
    production: 'Super Live Vol.2 LOVE LEGEND',
    when: '2009',
    where: 'Japan || Tokyo',
  },
  {
    production: 'WIENER MUSICALGALA / Soloist',
    when: '2008',
    where: 'Japan || Tokyo',
  },
  {
    production: 'SUPER LIFE TOUR MATÉ!',
    when: '2007',
    where: 'Japan || Tokyo',
  },
  {
    production: 'ELISABETH / der TOD (Vienna Cast)',
    when: '2007',
    where: 'Japan || Tokyo',
  },
  {
    production: 'ELISABETH / der TOD',
    when: '2003-2006',
    where: 'Austria || Vienna',
  },
  {
    production: 'FIRE OF DANCE / Solist',
    when: '2001-2003',
    where: 'Europe || Various',
  },
  {
    production: 'Webber Gala/ Solist',
    when: '2002',
    where: 'Europe || Various',
  },
  {
    production: 'ELIZABETH / Halál ',
    when: '1998-2001',
    where: 'Hungary || Budapest',
  },
  {
    production: 'West Side Story / Tony ',
    when: '2001',
    where: 'Hungary || Szeged',
  },
  {
    production: 'CHESS / the American',
    when: '2000',
    where: 'Norway || Oslo',
  },
  {
    production: 'FALCO CYBER SHOW/ Amadeus',
    when: '2000',
    where: 'Austria || Vienna',
  },
  {
    production: 'TANZ DER VAMPIRE / Herbert',
    when: '1999-2000',
    where: 'Austria || Vienna',
  },
  {
    production: 'Attila Isten Kardja / Csaba',
    when: '1999',
    where: 'Hungary || Szeged',
  },
  {
    production: 'Rock It! / Tenor',
    when: '1998',
    where: 'Austria || Zell am See',
  },
  {
    production: 'TANZ DER VAMPIRE / Tenor Solo',
    when: '1997-1998',
    where: 'Austria || Vienna',
  },
  {
    production: 'FAME / Nick',
    when: '1996',
    where: 'Hungary || Budapest',
  },
  {
    production: 'Barbarok / Elke',
    when: '1996',
    where: 'Hungary || Miskolc',
  },
  {
    production: 'Les Miserable / Jean Valjean',
    when: '1995',
    where: 'Hungary || Miskolc',
  },
]; */

const works = [
  {
    title: 'ChristmasSalonConcert',
    when: '2024',
  },
  {
    title: 'HungarianFestival',
    when: '2024',
  },
  {
    title: 'LaTraviata',
    when: '2024',
  },
  {
    title: 'JuristenballWien',
    when: '2024',
  },
  
  {
    title: 'ShizukiAsatoDinnerShow',
    when: '2023',
  },
  {
    title: 'MadeInJapan',
    when: '2023',
  },
  {
    title: 'HungarianEmbassyConcerts',
    when: '2023',
  },
  {
    title: 'ThinkOfMeConcert',
    when: '2023',
  },
  {
    title: 'MusicalAndMiskolcGala',
    when: '2023',
  },
  {
    title: 'AkikoNakajimaAndFriends',
    when: '2022',
  },
  {
    title: 'SoundOfMusicConcert',
    when: '2021',
  },
  {
    title: 'MayasMagicMoments',
    when: '2020',
  },
  {
    title: 'MusicalAndMiskolcConcert',
    when: '2017-2019',
  },
  {
    title: 'TheCinemaMusicalConcert',
    when: '2016',
  },
  {
    title: 'AsatoMateKanataSpecialLive',
    when: '2016',
  },
  {
    title: 'ElisabethDerTod',
    when: '2015-2016',
  },
  {
    title: 'GoldenSongsConcertTour',
    when: '2015',
  },
  {
    title: 'MKFutureDocumentationTour',
    when: '2014',
  },
  {
    title: 'ChessInConcertArbiter',
    when: '2013',
  },
  {
    title: 'MateKamarasSoloLive2013',
    when: '2013',
  },
  {
    title: 'ElisabethDerTodViennaCast',
    when: '2012',
  },
  {
    title: 'ElisabethDerTodJapaneseCast',
    when: '2012',
  },
  {
    title: 'MitsukoHeinrichJapaneseCast',
    when: '2011',
  },
  {
    title: 'MateKamarasSoloLive2010',
    when: '2010',
  },
  {
    title: 'LuluJack',
    when: '2010',
  },
  {
    title: 'SuperLiveVol2LoveLegend',
    when: '2009',
  },
  {
    title: 'WienerMusicalgalaSoloist',
    when: '2008',
  },
  {
    title: 'SuperLifeTourMate',
    when: '2007',
  },
  {
    title: 'ElisabethDerTodViennaCast2007',
    when: '2007',
  },
  {
    title: 'ElisabethDerTod2003',
    when: '2003-2006',
  },
  {
    title: 'FireOfDanceSolist',
    when: '2001-2003',
  },
  {
    title: 'WebberGalaSolist',
    when: '2002',
  },
  {
    title: 'ElizabethHalal',
    when: '1998-2001',
  },
  {
    title: 'WestSideStoryTony',
    when: '2001',
  },
  {
    title: 'ChessTheAmerican',
    when: '2000',
  },
  {
    title: 'FalcoCyberShowAmadeus',
    when: '2000',
  },
  {
    title: 'TanzDerVampireHerbert',
    when: '1999-2000',
  },
  {
    title: 'AttilaIstenKardjaCsaba',
    when: '1999',
  },
  {
    title: 'RockItTenor',
    when: '1998',
  },
  {
    title: 'TanzDerVampireTenorSolo',
    when: '1997-1998',
  },
  {
    title: 'FameNick',
    when: '1996',
  },
  {
    title: 'BarbarokElke',
    when: '1996',
  },
  {
    title: 'LesMiserableJeanValjean',
    when: '1995',
  },
];

const awards = [
  {
    imgUrl: images.awards1,
    title: 'elisabethDvd',
  },
  {
    imgUrl: images.awards3,
    title: 'goodwill',
  },
  {
    imgUrl: images.awards2,
    title: 'muzsa',
  },
  {
    imgUrl: images.awards4,
    title: 'elisabethCd',
  },
];

const galleryImages = [
  {
    imgUrl: images.pos00,
    title: 'Elisabeth-Vienna',
  },
  {
    imgUrl: images.pos01,
    title: 'Elisabeth-Japan',
  },
  {
    imgUrl: images.pos01b,
    title: 'Broadway-Cast',
  },
  {
    imgUrl: images.pos02,
    title: 'Elisabeth-Vienna-Cast-JP',
  },
  {
    imgUrl: images.pos03,
    title: 'Super-Live',
  },
  {
    imgUrl: images.pos04,
    title: 'Super-Live',
  },
  {
    imgUrl: images.pos05,
    title: 'Love-Legend',
  },
  {
    imgUrl: images.pos06,
    title: 'Special-Live',
  },
  {
    imgUrl: images.pos07,
    title: 'Frank&Friends/Mitsuko',
  },
  {
    imgUrl: images.pos08,
    title: 'HarunoLive',
  },
  {
    imgUrl: images.pos09,
    title: 'Chess',
  },
  {
    imgUrl: images.pos10,
    title: 'Akiko Nakajima & Friends',
  },
  {
    imgUrl: images.pos11,
    title: 'Golden Songs',
  },
  {
    imgUrl: images.pos12,
    title: 'Christmas DinnerShow',
  },
  {
    imgUrl: images.pos13,
    title: 'Super Live',
  },
  {
    imgUrl: images.pos14,
    title: 'Super Live',
  },
  {
    imgUrl: images.pos15,
    title: 'One Heart',
  },
  {
    imgUrl: images.pos16,
    title: 'Future Documentation Exclusive Cd',
  },
  {
    imgUrl: images.pos17,
    title: 'Future Documentation Cd',
  },
  {
    imgUrl: images.pos18,
    title: 'Future Documentation Cd',
  },
];

export default { awards, galleryImages, works };
