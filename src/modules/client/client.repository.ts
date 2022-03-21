import { EntityRepository, Repository } from 'typeorm';
import { ClientEntity } from '../../enyity/client.entity';

@EntityRepository(ClientEntity)
export class ClientRepository extends Repository<ClientEntity> {}
