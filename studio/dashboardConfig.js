export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f8d970441823760e76a5543',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-r43vzm1g',
                  apiId: '155e36db-7ca8-4555-bf35-92523c9d7e31'
                },
                {
                  buildHookId: '5f8d9704dafb1259fb2c7244',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-sofbpxws',
                  apiId: '7cde12bc-81a7-4c55-b4d6-c9be3c32addd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/karinabot/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-sofbpxws.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
