module.exports.chirac_datas = {
        meta_favicon: {
          url: '/medias/logo/logo_Elysée.png',
          alt: 'logo Elysée',
          dimensions: { width: 44, height: 44 },
        },
        meta_title: [
          {
            text: 'Jacque Chirac Président',
          }
        ],
         meta_description: [
          {
            text: 'Petit quiz sur les plus belle punchline de notre ancien président de la république.',
          }
        ],
       
        meta_image: {},
        
        title: [{text: 'Jacques Chirac'}],
        
        subtitle: [{text: 'Président'}],
      
        presidence_date: [ {text: '07.05.1995 - 16.05.2007'}],

        timeline: [
            { date: '1932', event: '' },
            { date: '1959', event: "Diplomé de l'ENA" },
            { date: '1967', event: 'Député de la Corèze' },
            { date: '1972', event: "Ministre de l'Agriculture" },
            { date: '1974', event: 'Premier ministre' },
            { date: '1977', event: 'Maire de Paris' },
            { date: '1986', event: 'Premier ministre' },
            { date: '1995', event: 'Président de la République' },
            { date: '2002', event: 'Président de la République' },
            { date: '2019', event: '' }
        ],
      
        logo: {
          dimensions: { width: 90, height: 85 },
          alt: "Logo de l'Elysée",
          url: 'https://images.prismic.io/portfolio-2-0/Z1ngbJbqstJ98WIG_logo_white.png?auto=format,compress',
          id: 'Z1ngbJbqstJ98WIG',
        },
        
        description: [{ text: "Figure emblématique de la République française, il a marqué l'histoire par son charisme et ses prises de décision forte. Humanisme sincère, il a placé la dignité humaine, la justice sociale et la paix au cœur de son action."}],
      
        quiz_title: [{text: '“Qui veut détourner des millions”'}],
        link_quiz: {
           type: 'project_jacques_chirac_quiz',
           slug: 'project-jacques-chirac-quiz',
         },
        citations: [
            "“Que voulez-vous, je suis Français, et j'adore aller expliquer aux autres ce que je suis infoutu de faire chez moi.”",
            "“Que voulez-vous, je suis Français, et j'adore aller expliquer aux autres ce que je suis infoutu de faire chez moi.”",
            "“Le monde politique est une jungle.“",
            "“Il ne faut pas blesser une bête : on la caresse ou on la tue.“",
            "“La pomme est un fruit sympathique et je l'observe tous les jour“",
            "“On gagne toujours quand on parie sur l'homme.“",
            "“Il y a plus d'idées dans deux têtes que dans une.“",
            "“Il est des moments, rares, où l\\'Histoire est dans la main de quelques hommes.“",
            "“Un chef, c'est fait pour cheffer“"
        ],

        social_media: [
            {
              social_logo: {
                alt: 'logo pinterest',
                url: 'https://portfolio-2-0.cdn.prismic.io/portfolio-2-0/Z1n3npbqstJ98Who_Pinterest.svg',
                id: 'Z1n3npbqstJ98Who',
              },
              social_link: {
                link_type: 'Web',
                key: 'c020612a-56d2-4980-94a0-ef7abd079351',
                url: 'https://fr.pinterest.com/grardrousseau/jacques-chirac/'
              }
            },
            {
              social_logo: {
                alt: 'logo instagram',
                url: 'https://portfolio-2-0.cdn.prismic.io/portfolio-2-0/Z1n8LZbqstJ98Wi7_instagram-1.svg',
                id: 'Z1n8LZbqstJ98Wi7',
              },
              social_link: {
                link_type: 'Web',
                key: '2b2fe610-c500-429f-b1a1-bd0c110a19f5',
                url: 'https://www.instagram.com/fuckyeahjacqueschirac/?hl=fr'
              }
            },
            {
              social_logo: {
                alt: 'logo wikipedia',
                url: 'https://portfolio-2-0.cdn.prismic.io/portfolio-2-0/Z1n8XJbqstJ98WjB_wikipedia.svg',
                id: 'Z1n8XJbqstJ98WjB',
              },
              social_link: {
                link_type: 'Web',
                key: '79987142-fad4-429a-99fc-2ec277d6953c',
                url: 'https://fr.wikipedia.org/wiki/Jacques_Chirac'
              }
            }
        ]    
}

module.exports.chirac_quiz = {
      meta_title: [{text: 'Qui veut détourner des millions'}],
     
      gains_amounts: [ '100 000 €', '250 000 €', '500 000 €', '750 000 €', '1000 000 €'],
       
      jokers: [
        { 
          icon: [{url: 'https://portfolio-2-0.cdn.prismic.io/portfolio-2-0/Z2RvuZbqstJ98slh_jacquesOrOthers.svg'}],
          name: [{text: 'Jacques Chirac ou les autres.',}], 
          description: [{text: 'Retire soit "Jacques Chirac" soit les 3 autres propositions'}] 
        },

        { 
          icon: [{url: 'https://portfolio-2-0.cdn.prismic.io/portfolio-2-0/Z2RwApbqstJ98sln_icons8-google1.svg'}],
          name: [{text: 'Appelle ton amis Google',}], 
          description: [{text: 'Stop le chrono et appelle ton ami Google'}] 
        },
        
        { 
          icon: [{url: 'https://portfolio-2-0.cdn.prismic.io/portfolio-2-0/Z2RwX5bqstJ98sly_50_50.svg'}],
          name: [{text: '50/50',}], 
          description: [{text: 'Retire 2 mauvaises réponses'}] 
        }
      ],
      
      questions_list: [
        {
          image: [
            {
              alt: 'Chirac fume',
              url: 'https://images.prismic.io/portfolio-2-0/Z2RxNpbqstJ98sl-_Chirac-fume1.png?auto=format,compress',
            }
          ],
          image_position: 'right',
          question: [{text: 'Ma femme est un homme politique.'}],
          response_a: [{text: 'Jacques Chirac'}],
          response_b: [{text: 'Bertrand Delanoë'}],
          response_c: [{text: 'François Mitterand'}],
          response_d: [{text: 'Laurent Ruqier'}]
        },
        {
          image: [
            {
              alt: 'Chirac debout',
              url: 'https://images.prismic.io/portfolio-2-0/Z2RxrJbqstJ98smI_chirac-debout1.png?auto=format,compress',
            }
          ],
          image_position: 'center',
          question: [{text: "Le courage, c'est de ne pas avoir peur"}],
          response_a: [{text: 'Jacques Chirac'}],
          response_b: [{text: 'Sébastien Chabal'}],
          response_c: [{text: 'Jean Claude Van Damme'}],
          response_d: [{text: 'David Douillet'}]
        },
        {
          image: [
            {
              alt: 'Chirac qui pense',
              url: 'https://images.prismic.io/portfolio-2-0/Z2RyqpbqstJ98smW_chirac-fume2.png?auto=format,compress',
            }
          ],
          image_position: 'right',
          question: [{text: "Pourquois essayer de faire semblant de travailler? C'est de la fatigue inutile !"}],
          response_a: [{text: 'Jacques Chirac'}],
          response_b: [{text: 'Pierre Dac'}],
          response_c: [{text: 'Jeff Lebowski'}],
          response_d: [{text: 'Doc gynéco'}]
        },
        {
          image: [
            {
              alt: 'Chirac qui fume',
              url: 'https://images.prismic.io/portfolio-2-0/Z2RzXZbqstJ98smj_chirac-fume3.png?auto=format,compress',
            }
          ],
          image_position: 'left',
          question: [{text: 'Il a un côté sympathique, seulement on le voit toujours de face.'}],
          response_a: [{text: 'Jacques Chirac'}],
          response_b: [{text: 'Francis Blanche'}],
          response_c: [{text: 'Thierry Ardisson'}],
          response_d: [{text: 'Guy Lux'}]
        },
        {
          image: [
            {
              alt: 'Chirac avec une bière',
              url: 'https://images.prismic.io/portfolio-2-0/Z2R3CpbqstJ98sno_chirac-biere.png?auto=format,compress',
            }
          ],
          image_position: 'right',
          question: [{text: 'Bien sûr que je suis de gauche ! Je mange de la choucroute et je bois de la bière.'}],
          response_a: [{text: 'Jacques Chirac'}],
          response_b: [{text: 'Jean-Luc Mélenchon'}],
          response_c: [{text: 'Gérard Depardieu'}],
          response_d: [{text: 'Patrick Sebastien'}]
        }
      ]
}