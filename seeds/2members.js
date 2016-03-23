
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('members').del(), 

    // Inserts seed entries
    knex('members').insert(
        {
          name: 'Casper Ivy',
          password: 'CIvy13',
          bio: 'This is Casper\'s Bio. Bacon ipsum dolor amet ground round pork chop mollit turkey irure. Bacon pork belly enim jerky incididunt boudin. Do in magna dolore, tempor kielbasa pork belly et spare ribs. Enim fatback cupim, duis drumstick cow labore turkey proident rump.',
          twitter: '@CasperFTF',
          instagram: '@CasperFTF',
          position: 'Editor In Chief',
          writer: true,
          editor: true,
          admin: true
        }),
    knex('members').insert(
        {
          name: 'Kyle Maxwell',
          password: 'Maxw3ll82',
          bio: 'This is Kyle\'s Bio. Frankfurter mollit prosciutto ex biltong. Anim sirloin kielbasa cow dolor nulla enim porchetta nisi. Pork loin fugiat tempor beef. Swine sausage aliquip shankle eu adipisicing sirloin short loin occaecat prosciutto ut salami shank. Dolore meatball salami biltong drumstick brisket cupim. Frankfurter pastrami est consequat. Beef ribs minim occaecat aute ut, id hamburger ribeye filet mignon drumstick officia.',
          twitter: '@KyleJayMaxwell',
          instagram: '@KyleJayMaxwell',
          position: 'Full Stack Developer || Graphic Designer',
          writer: false,
          editor: false,
          admin: true
        }),
    knex('members').insert(
        {
          name: 'Wesley Stone',
          password: 'WesleyTheory',
          bio: 'This is Wesley\'s Bio. Biltong nostrud doner aliqua. Quis exercitation chuck ground round velit. Sunt cow brisket dolore. Alcatra non beef ribs, mollit kevin duis enim. Ham hock pastrami alcatra, beef ribs short loin labore tongue minim aute t-bone tri-tip. Exercitation rump ullamco quis. Pork chop deserunt flank cupidatat jerky, dolore venison minim ad tenderloin spare ribs meatloaf officia sausage.',
          twitter: '@WesleyStone',
          instagram: '@WesleyStone',
          position: 'Managing Editor',
          writer: true,
          editor: true,
          admin: false
        })                   
  );
};