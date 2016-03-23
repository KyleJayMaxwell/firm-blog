
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('articles').del(), 

    // Inserts seed entries
    knex('articles').insert(
        {
          title: 'Testing #1',
          article: 'Lorem tempor anim picanha biltong beef ribs irure. Ball tip ullamco venison labore, sed voluptate beef ribs filet mignon bacon pastrami ut pariatur drumstick pig in. Shankle hamburger dolore, laborum shank cupidatat occaecat ad enim jowl pancetta. In nostrud t-bone fatback esse tri-tip deserunt occaecat kielbasa drumstick commodo dolore. Tenderloin pork belly duis capicola sint beef strip steak swine jerky officia. Boudin cillum filet mignon kevin, alcatra lorem sunt sed doner officia flank non drumstick aliquip bresaola.',
          c_id: 2
        }),
    knex('articles').insert(
        {
          title: 'Music Test #1',
          article: 'Lorem tempor anim picanha biltong beef ribs irure. Ball tip ullamco venison labore, sed voluptate beef ribs filet mignon bacon pastrami ut pariatur drumstick pig in. Shankle hamburger dolore, laborum shank cupidatat occaecat ad enim jowl pancetta. In nostrud t-bone fatback esse tri-tip deserunt occaecat kielbasa drumstick commodo dolore. Tenderloin pork belly duis capicola sint beef strip steak swine jerky officia. Boudin cillum filet mignon kevin, alcatra lorem sunt sed doner officia flank non drumstick aliquip bresaola.',
          c_id: 4
        })                     
  );
};