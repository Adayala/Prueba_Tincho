const http = require('http');

const server = http.createServer((request, response) => {
	const { url, method } = request; 

	if (method === 'GET' && url === '/') {
		response.writeHead(200,{ 
			'Content-Type': 'application-json'
		})

		response.end(JSON.stringify({status: 'ok', resp: 'Hello World' }))
	}

}); 

server.listen(4000); 
