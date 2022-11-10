import ServerException from '../exceptions/server.exception';

class ServerService {
    async ping() {
        const isException = Math.floor(Math.random() * 2);

        if (isException) {
            throw new ServerException("this is my random exception cuz u are dump", 400);
        }

        return {data: "PONG!"}
    }
}

export default new ServerService();
