    const getContent  = (specialty, users) => {
      const template  = `
    <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${specialty}</title>
        </head>
        <body>
        <a href="/">HOME</a>
        <a href="/developers">DEVELOPERS</a>
        <a href="/marketing">MARKETING</a>
        <a href="/ventas">VENTAS</a>
        <a href="/qas">QAs</a>
        <h1>${specialty}</h1>
        <p>Número de personas: ${users.length}</p>
        <ul>
        ${users.map(user => `<li><h2>Nombre: ${user.name}</h2><p>Edad: ${user.age}</p></li>`).join("")}
        </ul>
        </body>
      </html>`
      return template

    }

      module.exports = getContent;
