// for store modularization in Nuxt
// no subdirectories in `/store/`, instead name of file 
// is used as the module's name
export const state = () => ({
  all: [
    {
      // some reason `id` needs to be a String; reckon in-part due to hard-coding posts
      id: '1',
      title: 'The Post Page',
      content: "Beard roof party you probably haven't heard of them gochujang health goth meh aliqua raclette hot chicken subway tile humblebrag kogi schlitz. Hammock air plant locavore, dreamcatcher flexitarian photo booth pinterest. Ut elit tacos literally mumblecore. Put a bird on it non retro sint street art, banh mi pabst shaman ut lomo coloring book chartreuse. 90's bespoke shabby chic sunt bushwick aliquip. Nostrud beard hoodie disrupt dolore non fugiat tilde."
    },
    {
      id: '2',
      title: 'Post Deux!',
      content: "Wayfarers normcore brooklyn snackwave labore bespoke lo-fi fingerstache, typewriter letterpress proident squid flexitarian polaroid. Retro actually pork belly narwhal ennui in seitan venmo bushwick asymmetrical exercitation 8-bit cupidatat. Pour-over cold-pressed bespoke everyday carry snackwave. Hexagon sustainable mumblecore migas put a bird on it small batch. Ipsum culpa crucifix shabby chic, tousled farm-to-table gentrify messenger bag chia fixie tofu commodo activated charcoal truffaut."
    },
    {
      id: '3',
      title: 'Dummy text?',
      content: "I'm baby offal dolor flexitarian 3 wolf moon cold-pressed crucifix VHS. Tacos marfa pug next level kogi commodo sed et. Franzen intelligentsia shabby chic jianbing, ad quis fanny pack swag. Mollit ea four loko hot chicken paleo coloring book poke. Small batch kinfolk semiotics qui four dollar toast laboris esse taiyaki craft beer keytar vice microdosing distillery subway tile."
    },
    {
      id: '4',
      title: 'Dummy text again!!?!1!?',
      content: "I'm baby offal dolor flexitarian 3 wolf moon cold-pressed crucifix VHS. Tacos marfa pug next level kogi commodo sed et. Franzen intelligentsia shabby chic jianbing, ad quis fanny pack swag. Mollit ea four loko hot chicken paleo coloring book poke. Small batch kinfolk semiotics qui four dollar toast laboris esse taiyaki craft beer keytar vice microdosing distillery subway tile."
    },
    {
      id: '5',
      title: 'More thicc text...',
      content: "I'm baby offal dolor flexitarian 3 wolf moon cold-pressed crucifix VHS. Tacos marfa pug next level kogi commodo sed et. Franzen intelligentsia shabby chic jianbing, ad quis fanny pack swag. Mollit ea four loko hot chicken paleo coloring book poke. Small batch kinfolk semiotics qui four dollar toast laboris esse taiyaki craft beer keytar vice microdosing distillery subway tile."
    }
  ]
})