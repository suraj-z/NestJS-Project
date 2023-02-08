import { Test, TestingModule } from '@nestjs/testing';
import { FinalsController } from './finals.controller';
import { FinalsService } from './finals.service';
import { CreateFinalDto } from './dto/create-final.dto';
import { UpdateFinalDto } from './dto/update-final.dto';
import { Finals } from './entities/final.entity';

const testfinalDto: CreateFinalDto = {
    order: 1,
    name: "TEST",
    alias: "TEST",
    group_alias: "TEST",
    tcp_port: 1234,
    udp_port: 1234,
    wi_port: 1234,
    wi_password: "TEST@123",
    max_connections: 1234,
    max_files: 1234,
    downstream_limit: 1234,
    user_cache_reloading_interval: 1234,
    is_nat: 1234,
    proxify_ipv6: 1234,
    hidden: 1234,
    is_proxy: 1234,
    threads: 1234,
    password: "TEST@123",
    zabbix_hostid: "TEST",
    datacenter_id: 1234,
    logging: 1234,
    server_id: 1
}


describe('FinalsController', () => {
    let controller: FinalsController;
    let service: FinalsService

    const mockFinalService = {
        createFinal: jest
            .fn()
            .mockImplementation((final: Finals) => {
                return {
                    ...final,
                };
            }),
        getFinalById: jest.fn().mockImplementation((id: number) => {
            return {
                id,
                ...testfinalDto
            }
        }),
        getAllFinals: jest.fn().mockResolvedValue([
            testfinalDto,
            testfinalDto
        ]),
        updateFinal: jest.fn().mockImplementation((id: number, input: UpdateFinalDto) => {
            return {
                id,
                ...input
            }
        }),
        deleteFinal: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [FinalsController],
            providers: [FinalsService],
        })
            .overrideProvider(FinalsService)
            .useValue(mockFinalService)
            .compile();

        controller = module.get<FinalsController>(FinalsController);
        service = module.get<FinalsService>(FinalsService);

    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    it('should create a final', async () => {
        const createFinal = await controller.createFinal(testfinalDto)
        expect(createFinal.order).toEqual(testfinalDto.order);
        expect(createFinal.name).toEqual(testfinalDto.name);
        expect(createFinal.alias).toEqual(testfinalDto.alias);
        expect(createFinal.group_alias).toEqual(testfinalDto.group_alias);
        expect(createFinal.tcp_port).toEqual(testfinalDto.tcp_port);
        expect(createFinal.udp_port).toEqual(testfinalDto.udp_port);
        expect(createFinal.wi_port).toEqual(testfinalDto.wi_port);
        expect(createFinal.wi_password).toEqual(testfinalDto.wi_password);
        expect(createFinal.max_connections).toEqual(testfinalDto.max_connections);
        expect(createFinal.max_files).toEqual(testfinalDto.max_files);
        expect(createFinal.downstream_limit).toEqual(testfinalDto.downstream_limit);
        expect(createFinal.user_cache_reloading_interval).toEqual(testfinalDto.user_cache_reloading_interval);
        expect(createFinal.is_nat).toEqual(testfinalDto.is_nat);
        expect(createFinal.proxify_ipv6).toEqual(testfinalDto.proxify_ipv6);
        expect(createFinal.hidden).toEqual(testfinalDto.hidden);
        expect(createFinal.is_proxy).toEqual(testfinalDto.is_proxy);
        expect(createFinal.datacenter_id).toEqual(testfinalDto.datacenter_id);
        expect(createFinal.threads).toEqual(testfinalDto.threads);
        expect(createFinal.password).toEqual(testfinalDto.password);
        expect(createFinal.zabbix_hostid).toEqual(testfinalDto.zabbix_hostid);
        expect(createFinal.datacenter_id).toEqual(testfinalDto.datacenter_id);
        expect(createFinal.logging).toEqual(testfinalDto.logging);
        expect(createFinal.server_id).toEqual(testfinalDto.server_id);
    })

    it('should return array of Finals', async () => {
        const getAllBridges = await controller.getAllFinals();
        expect(service.getAllFinals).toHaveBeenCalled();
    })

    it('should get a final by given ID', async () => {
        const getFinal = await controller.getFinalByID(355);
        expect(getFinal.order).toEqual(testfinalDto.order);
        expect(getFinal.name).toEqual(testfinalDto.name);
        expect(getFinal.alias).toEqual(testfinalDto.alias);
        expect(getFinal.group_alias).toEqual(testfinalDto.group_alias);
        expect(getFinal.tcp_port).toEqual(testfinalDto.tcp_port);
        expect(getFinal.udp_port).toEqual(testfinalDto.udp_port);
        expect(getFinal.wi_port).toEqual(testfinalDto.wi_port);
        expect(getFinal.wi_password).toEqual(testfinalDto.wi_password);
        expect(getFinal.max_connections).toEqual(testfinalDto.max_connections);
        expect(getFinal.max_files).toEqual(testfinalDto.max_files);
        expect(getFinal.downstream_limit).toEqual(testfinalDto.downstream_limit);
        expect(getFinal.user_cache_reloading_interval).toEqual(testfinalDto.user_cache_reloading_interval);
        expect(getFinal.is_nat).toEqual(testfinalDto.is_nat);
        expect(getFinal.proxify_ipv6).toEqual(testfinalDto.proxify_ipv6);
        expect(getFinal.hidden).toEqual(testfinalDto.hidden);
        expect(getFinal.is_proxy).toEqual(testfinalDto.is_proxy);
        expect(getFinal.datacenter_id).toEqual(testfinalDto.datacenter_id);
        expect(getFinal.threads).toEqual(testfinalDto.threads);
        expect(getFinal.password).toEqual(testfinalDto.password);
        expect(getFinal.zabbix_hostid).toEqual(testfinalDto.zabbix_hostid);
        expect(getFinal.datacenter_id).toEqual(testfinalDto.datacenter_id);
        expect(getFinal.logging).toEqual(testfinalDto.logging);
        expect(getFinal.server_id).toEqual(testfinalDto.server_id);
    });


    it('should return updated final for given id', async () => {
        const updateFinal = await controller.updateFinal(355, testfinalDto);
        expect(updateFinal.order).toEqual(testfinalDto.order);
        expect(updateFinal.name).toEqual(testfinalDto.name);
        expect(updateFinal.alias).toEqual(testfinalDto.alias);
        expect(updateFinal.group_alias).toEqual(testfinalDto.group_alias);
        expect(updateFinal.tcp_port).toEqual(testfinalDto.tcp_port);
        expect(updateFinal.udp_port).toEqual(testfinalDto.udp_port);
        expect(updateFinal.wi_port).toEqual(testfinalDto.wi_port);
        expect(updateFinal.wi_password).toEqual(testfinalDto.wi_password);
        expect(updateFinal.max_connections).toEqual(testfinalDto.max_connections);
        expect(updateFinal.max_files).toEqual(testfinalDto.max_files);
        expect(updateFinal.downstream_limit).toEqual(testfinalDto.downstream_limit);
        expect(updateFinal.user_cache_reloading_interval).toEqual(testfinalDto.user_cache_reloading_interval);
        expect(updateFinal.is_nat).toEqual(testfinalDto.is_nat);
        expect(updateFinal.proxify_ipv6).toEqual(testfinalDto.proxify_ipv6);
        expect(updateFinal.hidden).toEqual(testfinalDto.hidden);
        expect(updateFinal.is_proxy).toEqual(testfinalDto.is_proxy);
        expect(updateFinal.datacenter_id).toEqual(testfinalDto.datacenter_id);
        expect(updateFinal.threads).toEqual(testfinalDto.threads);
        expect(updateFinal.password).toEqual(testfinalDto.password);
        expect(updateFinal.zabbix_hostid).toEqual(testfinalDto.zabbix_hostid);
        expect(updateFinal.datacenter_id).toEqual(testfinalDto.datacenter_id);
        expect(updateFinal.logging).toEqual(testfinalDto.logging);
        expect(updateFinal.server_id).toEqual(testfinalDto.server_id);
    });

    it('should delete a bridge ', async () => {
        const deleteFinal = await controller.deleteFinal(1351);
        expect(service.deleteFinal).toHaveBeenCalled();
    })

});
