Posts = new Mongo.Collection( 'posts' );
Pages = new Mongo.Collection( 'pages' );
log = loglevel.createLogger( 'ssr.collections', 'trace' );
if ( Meteor.isServer ) {
  Posts.remove( {} );
  i = Posts.insert( {
    _id: 'one',
    title: 'My Book',
    content: 'Yeah! Check our Meteor Blog for more!'
  } );
  ii = Posts.insert( {
    _id: 'two',
    title: 'MeteorHacks + Kadira => Kadira++',
    content: 'Something new soon.'
  } );
  iii = Posts.insert( {
    _id: 'three',
    title: 'My Secret Post',
    category: 'private'
  } );
  log.info( i, ii, iii )
}
