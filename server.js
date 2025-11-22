const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.write("Jhon Chester M. Guijoba\n");
  res.write("BSIT-BA-4101\n");
  res.write("Believe you can and youre halfway there. Quoted By Theodore Roosevelt");
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});