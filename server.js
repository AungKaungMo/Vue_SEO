// import express from 'express'
// import { render } from './src/entry-server'

// const server = express()

// server.get('*', async (req, res) => {
//   const { appContent, headTags } = await render(req.url)

//   res.send(`
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//       ${headTags}
//     </head>
//     <body>
//       <div id="app">${appContent}</div>
//       <script type="module" src="/src/entry-client.js"></script>
//     </body>
//     </html>
//   `)
// })

// server.listen(3000, () => {
//   console.log('Server is running at http://localhost:3000')
// })


import express from 'express';
import { render } from './src/entry-server';

const server = express()

server.get('*', async (req, res) => {
    const {appContent, headTags} = await render(req.url)

    res.send(`
         <!DOCTYPE html>
            <html lang="en">
            <head>
              ${headTags}
            </head>
            <body>
              <div id="app">${appContent}</div>
              <script type="module" src="/src/entry-client.js"></script>
            </body>
         </html>
        `)
})

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000')
})