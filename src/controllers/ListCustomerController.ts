import { FastifyRequest, FastifyReply} from 'fastify';
import { ListCustomerService } from '../services/ListCustomerService';

class ListCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listCustomer = new ListCustomerService();
    const customer = await listCustomer.execute();

    reply.send(customer)
  }
}

export { ListCustomerController };