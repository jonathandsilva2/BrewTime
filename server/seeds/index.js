const { Pool } = require('pg');
const squel = require('squel').useFlavour('postgres');
const config = require('../config/default.json');

const breweriesSeeds = [
  {
    name: 'Blood Brothers',
  },
];

const descriptionsSeeds = [
  {
    description:
      'Blood Brothers Brewing is a family owned craft brewery opened in 2015 by Dustin and Brayden Jones in Toronto, Ontario.',
    dorder: 1,
    brewery_id: 1,
  },
  {
    description:
      'From its humble beginnings, Blood Brothers has been centred around brewing interesting beers our friends and family would want to drink. From the way we source our ingredients to our methodical brewing process, we approach each step with passion and independent spirit. Our goal is to provide innovative beers to all of our customers. We strive to push back against consolidation and uniformity in today’s beer market.',
    dorder: 2,
    brewery_id: 1,
  },
  {
    description:
      'Our beer can be found in a variety of bars in the Toronto area as well as purchased directly from our bottle shop. Our tap room and bottle shop are open 7 days a week.',
    dorder: 3,
    brewery_id: 1,
  },
];

const mapsSeeds = [
  {
    latitude: 43.66988,
    longitude: -79.436234,
    latitudedelta: 0.0922,
    longitudedelta: 0.0421,
    brewery_id: 1,
  },
];

const locationsSeeds = [
  {
    address: '165 Geary Ave, Toronto, ON, M6H 2B8',
    description:
      'Zombie ipsum brains reversus ab cerebellum viral inferno, brein nam rick mend grimes malum cerveau cerebro. De carne cerebro lumbering animata cervello corpora quaeritis.',
    latitude: 43.644,
    longitude: -79.39993,
    map_id: 1,
  },
  {
    address: '520 Wellington St W, Toronto, ON M5V 1E3',
    description:
      'Zombie ipsum brains reversus ab cerebellum viral inferno, brein nam rick mend grimes malum cerveau cerebro. De carne cerebro lumbering animata cervello corpora quaeritis.',
    latitude: 43.64331,
    longitude: -79.40156,
    map_id: 1,
  },
  {
    address: '609 King St W, Toronto, ON M5V 1M5',
    description:
      'Zombie ipsum brains reversus ab cerebellum viral inferno, brein nam rick mend grimes malum cerveau cerebro. De carne cerebro lumbering animata cervello corpora quaeritis.',
    latitude: 43.64411,
    longitude: -79.40289,
    map_id: 1,
  },
];

const bookingsSeeds = [
  {
    title: 'Brewery Tour',
    description:
      'Take a tour of our facilities, try out some of our famous sours, and leave with a face on your smile.',
    location_id: 3,
    guide: 'Big Boi',
    time: '2019-08-27 10:00:00',
    brewery_id: 1,
  },
  {
    title: 'Brewery Tour',
    description:
      'Take a tour of our facilities, try out some of our famous sours, and leave with a face on your smile.',
    location_id: 3,
    guide: 'Andre 3000',
    time: '2019-09-03 10:00:00',
    brewery_id: 1,
  },
  {
    title: 'Brewery Tour',
    description:
      'Take a tour of our facilities, try out some of our famous sours, and leave with a face on your smile.',
    location_id: 3,
    guide: 'Lupe Fiasco',
    time: '2019-09-05 10:00:00',
    brewery_id: 1,
  },
  {
    title: 'Brewery Tour',
    description:
      'Take a tour of our facilities, try out some of our famous sours, and leave with a face on your smile.',
    location_id: 3,
    guide: 'Chingy',
    time: '2019-09-10 10:00:00',
    brewery_id: 1,
  },
  {
    title: 'Brewery Tour',
    description:
      'Take a tour of our facilities, try out some of our famous sours, and leave with a face on your smile.',
    location_id: 3,
    guide: 'Simon Stern',
    time: '2019-09-12 10:00:00',
    brewery_id: 1,
  },
  {
    title: 'Brewery Tour',
    description:
      'Take a tour of our facilities, try out some of our famous sours, and leave with a face on your smile.',
    location_id: 3,
    guide: 'Simon Stern',
    time: '2019-09-17 10:00:00',
    brewery_id: 1,
  },
  {
    title: 'Brewery Tour',
    description:
      'Take a tour of our facilities, try out some of our famous sours, and leave with a face on your smile.',
    location_id: 3,
    guide: 'Simon Stern',
    time: '2019-09-19 10:00:00',
    brewery_id: 1,
  },
  {
    title: 'Brewery Tour',
    description:
      'Take a tour of our facilities, try out some of our famous sours, and leave with a face on your smile.',
    location_id: 3,
    guide: 'Funkmaster Flex',
    time: '2019-09-24 10:00:00',
    brewery_id: 1,
  },
  {
    title: 'Brewery Tour',
    description:
      'Nescio brains an Undead cervello zombies. Sicut thalamus malus putrid brains voodoo horror. Nigh basal ganglia tofth eliv ingdead.',
    location_id: 3,
    guide: 'Missy Elliot',
    time: '2019-09-26 10:00:00',
    brewery_id: 1,
  },
];

const imagesSeeds = [
  {
    uri:
      'https://images.squarespace-cdn.com/content/v1/55c359fce4b0e87fe8114ca2/1563460379919-SYA7QLASX45002KNBZ9F/ke17ZwdGBToddI8pDm48kH2tcVPxrHjlNBy3DN2qdb17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USen6zmnKCKCvBRpthH2f819Vc-dg8SrmdbOUVLfQHKwIeAend6sbk36Ssanx5fwTw/331A1415.jpg?format=1500w',
    description: 'Outdoor Patio of Blood Brothers Location',
    width: 1500,
    height: 1000,
  },
  {
    uri:
      'https://images.squarespace-cdn.com/content/v1/55c359fce4b0e87fe8114ca2/1563895457426-AV6C748774T3A0X8EEPQ/ke17ZwdGBToddI8pDm48kPbFuD4DsZ8lLVxxq_Jd-BcUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dg6loTLRzxe7DDCBNuUACxDIqthDAoqF7A4FqS-Rqk2xm7cT0R_dexc_UL_zbpz6JQ/331A0947.jpg?format=1000w',
    description: 'Indoor seating booth at Blood Brothers with fancy beer glass',
    width: 1000,
    height: 563,
  },
  {
    uri:
      'https://images.squarespace-cdn.com/content/v1/55c359fce4b0e87fe8114ca2/1563460475264-PUADBCGW00K99HEF03W6/ke17ZwdGBToddI8pDm48kH2tcVPxrHjlNBy3DN2qdb17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USen6zmnKCKCvBRpthH2f819Vc-dg8SrmdbOUVLfQHKwIeAend6sbk36Ssanx5fwTw/331A1390.jpg?format=1000w',
    description: 'A crowded afternoon inside Blood Brothers',
    width: 1500,
    height: 1000,
  },
  {
    uri:
      'https://images.squarespace-cdn.com/content/v1/55c359fce4b0e87fe8114ca2/1563895511973-S7KVUF77DYY7RHWQ9RAJ/ke17ZwdGBToddI8pDm48kPbFuD4DsZ8lLVxxq_Jd-BcUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dg6loTLRzxe7DDCBNuUACxDIqthDAoqF7A4FqS-Rqk2xm7cT0R_dexc_UL_zbpz6JQ/331A1506.jpg?format=1000w',
    description: 'An image of the several beers on tap',
    width: 1500,
    height: 844,
  },

  {
    uri:
      'https://images.squarespace-cdn.com/content/v1/55c359fce4b0e87fe8114ca2/1566229708468-DSCO8P4OPGKBUM5LDQPO/ke17ZwdGBToddI8pDm48kJBETQKo7KrhhSSCUTfEZ-N7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UYsn0J_7BrH3f0UIMPlqJrXpboKdjKzH7lISzas_zDqkckN8YfsLXRIlXOtOxTMY9Q/id-label.jpg?format=500w',
    description: 'Beer: ID',
    width: 262,
    height: 436,
  },
  {
    uri:
      'https://images.squarespace-cdn.com/content/v1/55c359fce4b0e87fe8114ca2/1566234426387-FTMVU9C21URAQKEK4BMS/ke17ZwdGBToddI8pDm48kJBETQKo7KrhhSSCUTfEZ-N7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UYsn0J_7BrH3f0UIMPlqJrXpboKdjKzH7lISzas_zDqkckN8YfsLXRIlXOtOxTMY9Q/Trill-9-trillmatic.jpg?format=500w',
    description: 'Beer: DEVILS TRILL IX: TRILLMATIC',
    width: 262,
    height: 436,
  },
  {
    uri:
      'https://images.squarespace-cdn.com/content/v1/55c359fce4b0e87fe8114ca2/1565360106173-877UWF105QNJEF5HGNIV/ke17ZwdGBToddI8pDm48kJBETQKo7KrhhSSCUTfEZ-N7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UYsn0J_7BrH3f0UIMPlqJrXpboKdjKzH7lISzas_zDqkckN8YfsLXRIlXOtOxTMY9Q/autopoplabel.jpg?format=500w',
    description: 'Beer: AUTOPOP',
    width: 262,
    height: 436,
  },
  {
    uri:
      'https://images.squarespace-cdn.com/content/v1/55c359fce4b0e87fe8114ca2/1519396118236-BTGH3J86UCLTLWLBJ54R/ke17ZwdGBToddI8pDm48kJBETQKo7KrhhSSCUTfEZ-N7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UYsn0J_7BrH3f0UIMPlqJrXpboKdjKzH7lISzas_zDqkckN8YfsLXRIlXOtOxTMY9Q/BloodBrothers_Cactushead.jpg?format=500w',
    description: 'Beer: CACTUS HEAD',
    width: 262,
    height: 436,
  },
  {
    uri:
      'https://images.squarespace-cdn.com/content/v1/55c359fce4b0e87fe8114ca2/1513006572952-RCUNY6LT6Y0EX5BWU5MB/ke17ZwdGBToddI8pDm48kJBETQKo7KrhhSSCUTfEZ-N7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UYsn0J_7BrH3f0UIMPlqJrXpboKdjKzH7lISzas_zDqkckN8YfsLXRIlXOtOxTMY9Q/BB_Label_ParadiseLost-Guava.jpg?format=500w',
    description: 'Beer: PARADISE LOST',
    width: 262,
    height: 436,
  },
  {
    uri:
      'https://images.squarespace-cdn.com/content/v1/55c359fce4b0e87fe8114ca2/1527783714152-MDREICX2IBUZQ2991M37/ke17ZwdGBToddI8pDm48kJNJLDKVmoPPJCCYR0HtowB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmLKoxsx6wp33kn5fgRqCuBRkOhVjoliNvyh1dqUpdD3_bQW0WeAfG1v3wPpd_MCtE/whiteliesmuscat.jpg?format=500w',
    description: 'Beer: WHITE LIES W/ MUSCAT',
    width: 262,
    height: 436,
  },
  {
    uri:
      'https://images.squarespace-cdn.com/content/v1/55c359fce4b0e87fe8114ca2/1509658728486-KT4EB5OKIGHB9HFOG9MX/ke17ZwdGBToddI8pDm48kJBETQKo7KrhhSSCUTfEZ-N7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UYsn0J_7BrH3f0UIMPlqJrXpboKdjKzH7lISzas_zDqkckN8YfsLXRIlXOtOxTMY9Q/BB_Label_Shumei.jpg?format=500w',
    description: 'Beer: SHUMEI',
    width: 262,
    height: 436,
  },
  {
    uri:
      'https://images.squarespace-cdn.com/content/v1/55c359fce4b0e87fe8114ca2/1509658769471-7UTTKONNPXWCQW55OCAB/ke17ZwdGBToddI8pDm48kJBETQKo7KrhhSSCUTfEZ-N7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UYsn0J_7BrH3f0UIMPlqJrXpboKdjKzH7lISzas_zDqkckN8YfsLXRIlXOtOxTMY9Q/BB_Label_TheInnerEyePaleAle.jpg?format=500w',
    description: 'Beer: THE INNER EYE',
    width: 262,
    height: 436,
  },
];

const dimensionsSeeds = [
  {
    height: 19.0,
    length: 15.0,
    weight: 32.0,
    width: 15.0,
  },
];

const productsSeeds = [
  {
    caption: 'Dry Hopped Sour Pale Ale w/ Mango & Pineapple  •  6% ABV',
    description:
      'Dry hopped with tropical El Dorado and Vic Secret. Anticipate a big, fruit bowl aroma of citrus, melon, mango and papaya. Mango flavour is strong on the palate, with light sourness and an orange rind finish.',
    name: 'ID',
    dimension_id: 1,
    price: 8,
    brewery_id: 1,
  },
  {
    caption: 'IPA w/ Cryo Citra, El Dorado & Nelson Sauvin  •  7.2% ABV',
    description:
      'Live a little with this extremely hazy IPA fermented with Voss Kveik yeast. Featuring juicy, invigorating notes of green grapes, melon, pomelo zest, pineapple and a citrus peel finish.',
    name: 'DEVILS TRILL IX: TRILLMATIC',
    dimension_id: 1,
    price: 7,
    brewery_id: 1,
  },
  {
    caption: 'Dry Hopped Berliner-Rice',
    description:
      'This Berliner is brewed with rice and lightly dry hopped with Wakatu and Centennial. Expect a refreshing floral and lime aroma, balanced acidity and clean finish. Low ABV makes this brew the perfect session sour.',
    name: 'AUTOPOP',
    dimension_id: 1,
    price: 5,
    brewery_id: 1,
  },
  {
    caption: 'Double Dry Hopped IPA  •  6.5% ABV',
    description:
      'Double dry hopped with Mosaic Lupulin powder, Citra and Motueka hops. This IPA features juicy tropical fruit flavours and aromas. The addition of white grape must gives the body extra complexity and juicy qualities.',
    name: 'CACTUS HEAD',
    dimension_id: 1,
    price: 7,
    brewery_id: 1,
  },
  {
    caption: 'Sour Ale  •  6% ABV',
    description:
      'A golden sour ale refermented with heaps of Guava nectar. A juicy, fruit-forward sour ale with a lingering tropical fruit aftertaste.',
    name: 'PARADISE LOST',
    dimension_id: 1,
    price: 8,
    brewery_id: 1,
  },
  {
    caption: 'Dry Hopped Sour Ale  •  6% ABV',
    description:
      'Golden sour ale brewed with Muscat grapes and dry hopped with Citra, Wai-ti and Wakatu hops.',
    name: 'WHITE LIES W/ MUSCAT',
    dimension_id: 1,
    price: 200,
    brewery_id: 1,
  },
  {
    caption: 'North American IPA  •  7% ABV',
    description:
      'A hybrid of West Coast and Northeastern-style IPAs. Assertive bitterness with citrus and pine combined with the juicy qualities of northeastern-style pale ales.',
    name: 'SHUMEI',
    dimension_id: 1,
    price: 200,
    brewery_id: 1,
  },
  {
    caption: 'North American Pale Ale  •  5.5% ABV',
    description:
      'More yeast forward than most interpretations of the style, Inner Eye Pale Ale features floral and citrusy hop aromas with tropical fruit esters from a unique strain of yeast.',
    name: 'THE INNER EYE',
    dimension_id: 1,
    price: 200,
    brewery_id: 1,
  },
];

const metadataSeeds = [{ product_id: 1 }];

const breweriesImagesSeeds = [
  {
    brewery_id: 1,
    image_id: 1,
  },
  {
    brewery_id: 1,
    image_id: 2,
  },
  {
    brewery_id: 1,
    image_id: 3,
  },
  {
    brewery_id: 1,
    image_id: 4,
  },
  {
    brewery_id: 1,
    image_id: 5,
  },
];

const bookingsImagesSeeds = [
  {
    booking_id: 1,
    image_id: 1,
  },
  {
    booking_id: 1,
    image_id: 2,
  },
  {
    booking_id: 1,
    image_id: 3,
  },
  {
    booking_id: 1,
    image_id: 4,
  },
];

const productsImagesSeeds = [
  {
    product_id: 1,
    image_id: 5,
  },
  {
    product_id: 2,
    image_id: 6,
  },
  {
    product_id: 3,
    image_id: 7,
  },
  {
    product_id: 4,
    image_id: 8,
  },
  {
    product_id: 5,
    image_id: 9,
  },
  {
    product_id: 6,
    image_id: 10,
  },
  {
    product_id: 7,
    image_id: 11,
  },
  {
    product_id: 8,
    image_id: 12,
  },
];

const seed = async () => {
  const pg = await new Pool(config.db).connect();

  try {
    await pg.query('BEGIN');

    console.log('Seeding Breweries...');

    await Promise.all(
      breweriesSeeds.map(breweriesSeed =>
        pg.query(
          squel
            .insert()
            .into('brewtime.breweries')
            .setFields(breweriesSeed)
            .toParam(),
        ),
      ),
    );

    console.log('Seeding Breweries... [DONE]');

    console.log('Seeding Descriptions...');

    await Promise.all(
      descriptionsSeeds.map(descriptionsSeed =>
        pg.query(
          squel
            .insert()
            .into('brewtime.descriptions')
            .setFields(descriptionsSeed)
            .toParam(),
        ),
      ),
    );

    console.log('Seeding Descriptions... [DONE]');

    console.log('Seeding Maps...');

    await Promise.all(
      mapsSeeds.map(mapsSeed =>
        pg.query(
          squel
            .insert()
            .into('brewtime.maps')
            .setFields(mapsSeed)
            .toParam(),
        ),
      ),
    );

    console.log('Seeding Maps... [DONE]');

    console.log('Seeding Locations...');

    await Promise.all(
      locationsSeeds.map(locationSeed =>
        pg.query(
          squel
            .insert()
            .into('brewtime.locations')
            .setFields(locationSeed)
            .toParam(),
        ),
      ),
    );

    console.log('Seeding Locations... [DONE]');

    console.log('Seeding Bookings...');

    await Promise.all(
      bookingsSeeds.map(bookingsSeed =>
        pg.query(
          squel
            .insert()
            .into('brewtime.bookings')
            .setFields(bookingsSeed)
            .toParam(),
        ),
      ),
    );

    console.log('Seeding Bookings... [DONE]');

    console.log('Seeding Images...');

    await Promise.all(
      imagesSeeds.map(imagesSeed =>
        pg.query(
          squel
            .insert()
            .into('brewtime.images')
            .setFields(imagesSeed)
            .toParam(),
        ),
      ),
    );

    console.log('Seeding Images... [DONE]');

    console.log('Seeding Dimensions...');

    await Promise.all(
      dimensionsSeeds.map(dimensionsSeed =>
        pg.query(
          squel
            .insert()
            .into('brewtime.dimensions')
            .setFields(dimensionsSeed)
            .toParam(),
        ),
      ),
    );

    console.log('Seeding Dimensions... [DONE]');

    console.log('Seeding Products...');

    await Promise.all(
      productsSeeds.map(productsSeed =>
        pg.query(
          squel
            .insert()
            .into('brewtime.products')
            .setFields(productsSeed)
            .toParam(),
        ),
      ),
    );

    console.log('Seeding Products... [DONE]');

    console.log('Seeding Metadata...');

    await Promise.all(
      metadataSeeds.map(metadataSeed =>
        pg.query(
          squel
            .insert()
            .into('brewtime.metadata')
            .setFields(metadataSeed)
            .toParam(),
        ),
      ),
    );

    console.log('Seeding Metadata... [DONE]');

    console.log('Seeding Brewery Images...');

    await Promise.all(
      breweriesImagesSeeds.map(breweriesImagesSeed =>
        pg.query(
          squel
            .insert()
            .into('brewtime.breweries_images')
            .setFields(breweriesImagesSeed)
            .toParam(),
        ),
      ),
    );

    console.log('Seeding Brewery Images... [DONE]');

    console.log('Seeding Bookings Images...');

    await Promise.all(
      bookingsImagesSeeds.map(bookingsImagesSeed =>
        pg.query(
          squel
            .insert()
            .into('brewtime.bookings_images')
            .setFields(bookingsImagesSeed)
            .toParam(),
        ),
      ),
    );

    console.log('Seeding Bookings Images... [DONE]');

    console.log('Seeding Products Images...');

    await Promise.all(
      productsImagesSeeds.map(productsImagesSeed =>
        pg.query(
          squel
            .insert()
            .into('brewtime.products_images')
            .setFields(productsImagesSeed)
            .toParam(),
        ),
      ),
    );

    console.log('Seeding Products Images... [DONE]');

    await pg.query('COMMIT');
  } catch (e) {
    await pg.query('ROLLBACK');
    throw e;
  } finally {
    pg.release();
  }
};

seed().catch(e => {
  setImmediate(() => {
    throw e;
  });
});
