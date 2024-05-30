const createApplication = require('express');

const app = createApplication();

//stream html content
app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');

  res.setHeader('transfer-encoding', 'chunked');

  res.write('Hello World!  ');

  setTimeout(() => {
    res.write('2nd chunk  ');
  }, 2000);

  setTimeout(() => {
    res.write('3rd chunk  ');
  }, 4000);
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
