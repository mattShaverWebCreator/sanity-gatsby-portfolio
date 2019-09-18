export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d824d92440852dbc0c61226',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-z4121fja',
                  apiId: 'ed07c886-0314-42a0-9d13-c351656dc61a'
                },
                {
                  buildHookId: '5d824d938ac64bc66662046c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-iak2pndn',
                  apiId: 'e69fad1a-60f2-418f-b6f1-16192df3af4e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mattShaverWebCreator/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-iak2pndn.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
