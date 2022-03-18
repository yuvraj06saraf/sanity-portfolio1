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
                  buildHookId: '623434d3a1ddb34ce4aba19e',
                  title: 'Sanity Studio',
                  name: 'sanity-portfolio-1-studio',
                  apiId: '90ec18f8-0753-47d3-8ed1-95e2e32b2500'
                },
                {
                  buildHookId: '623434d3a1ddb33f82aba6ab',
                  title: 'Portfolio Website',
                  name: 'sanity-portfolio-1',
                  apiId: '7e67d692-66c6-48b9-a8f1-67cb92258f91'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/yuvraj06saraf/sanity-portfolio1',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-portfolio-1.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
