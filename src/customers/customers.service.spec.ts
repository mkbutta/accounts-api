import { Test, TestingModule } from '@nestjs/testing';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
describe('CustomersService', () => {
  let service: CustomersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomersService],
    }).compile();

    service = module.get<CustomersService>(CustomersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Customer Should be created', () => {
    const dob: Date = new Date('1970-07-05');
    const customer: CreateCustomerDto = {
      firstName: 'Mahesh',
      middleName: null,
      dateOfBirth: dob,
      lastName: 'Butta',
      address: ' Nesepet, Bellary Road',
      city: 'Rayadurg',
      state: 'AP',
      zip: '515865',
      email: 'mkbutta@gmail.com',
      contactNumber: '9440975531',
    };

    const newCustomer = service.create(customer);
    expect(newCustomer).toBeDefined();
  });
});
