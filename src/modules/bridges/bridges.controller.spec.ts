import { Test, TestingModule } from '@nestjs/testing';
import { BridgesController } from './bridges.controller';
import { BridgesService } from './bridges.service';
import { CreateBridgeDto } from './dto/create-bridge.dto';
import { UpdateBridgeDto } from './dto/update-bridge.dto';
import { Bridge } from './entities/bridge.entity';


const testBridgeDto: CreateBridgeDto = {
    group: 1,
    group_alias: "group_alias",
    ip: "ip",
    ipv6: "ipv6",
    tcp_port: 1,
    udp_port: 1,
    wi_port: 1,
    wi_password: "wi_password",
    max_files: 1,
    user_cache_reloading_interval: 1,
    threads: 1,
    ddos_protection: 1,
    datacenter_id: 1,
    logging: 1,
    zabbix_hostid: "1",
    name: "name",
    server_id: 1,
}

describe('BridgesController', () => {
    let controller: BridgesController;
    let service: BridgesService;

    const mockBridgeService = {
        createNewBridgeEntry: jest
            .fn()
            .mockImplementation((bridge: Bridge) => {
                return {
                    ...bridge,
                };
            }),
        getAllBridges: jest.fn().mockResolvedValue([
            testBridgeDto,
            testBridgeDto
        ]),
        updateBridge: jest.fn().mockImplementation((id: number, input: UpdateBridgeDto) => {
            return {
                id,
                ...input
            }
        }),
        getBridgeById: jest.fn().mockImplementation((id: number) => {
            return {
                id,
                ...testBridgeDto
            }
        }),
        removeBridge: jest.fn()
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [BridgesController],
            providers: [
                BridgesService,
                { provide: BridgesService, useValue: mockBridgeService },
            ],
        })
            .overrideProvider(BridgesService)
            .useValue(mockBridgeService)
            .compile();

        controller = module.get<BridgesController>(BridgesController);
        service = module.get<BridgesService>(BridgesService);
    });


    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    it('should create a Bridge', async () => {
        const createResp = await controller.createBridge(testBridgeDto)
        expect(createResp.group).toEqual(testBridgeDto.group);
        expect(createResp.group_alias).toEqual(testBridgeDto.group_alias);
        expect(createResp.ip).toEqual(testBridgeDto.ip);
        expect(createResp.ipv6).toEqual(testBridgeDto.ipv6);
        expect(createResp.tcp_port).toEqual(testBridgeDto.tcp_port);
        expect(createResp.udp_port).toEqual(testBridgeDto.udp_port);
        expect(createResp.wi_port).toEqual(testBridgeDto.wi_port);
        expect(createResp.wi_password).toEqual(testBridgeDto.wi_password);
        expect(createResp.max_files).toEqual(testBridgeDto.max_files);
        expect(createResp.user_cache_reloading_interval).toEqual(testBridgeDto.user_cache_reloading_interval);
        expect(createResp.threads).toEqual(testBridgeDto.threads);
        expect(createResp.ddos_protection).toEqual(testBridgeDto.ddos_protection);
        expect(createResp.datacenter_id).toEqual(testBridgeDto.datacenter_id);
        expect(createResp.logging).toEqual(testBridgeDto.logging);
        expect(createResp.zabbix_hostid).toEqual(testBridgeDto.zabbix_hostid);
        expect(createResp.name).toEqual(testBridgeDto.name);
        expect(createResp.server_id).toEqual(testBridgeDto.server_id);
    })

    it('should return array of Bridges', async () => {
        const getAllBridges = await controller.getAllBridges();
        expect(service.getAllBridges).toHaveBeenCalled();
    })

    it('should find a bridge by given ID', async () => {
        const getBridge = await controller.getBridgeByID(1351);
        expect(getBridge.group).toEqual(testBridgeDto.group);
        expect(getBridge.group_alias).toEqual(testBridgeDto.group_alias);
        expect(getBridge.ip).toEqual(testBridgeDto.ip);
        expect(getBridge.ipv6).toEqual(testBridgeDto.ipv6);
        expect(getBridge.tcp_port).toEqual(testBridgeDto.tcp_port);
        expect(getBridge.udp_port).toEqual(testBridgeDto.udp_port);
        expect(getBridge.wi_port).toEqual(testBridgeDto.wi_port);
        expect(getBridge.wi_password).toEqual(testBridgeDto.wi_password);
        expect(getBridge.max_files).toEqual(testBridgeDto.max_files);
        expect(getBridge.user_cache_reloading_interval).toEqual(testBridgeDto.user_cache_reloading_interval);
        expect(getBridge.threads).toEqual(testBridgeDto.threads);
        expect(getBridge.ddos_protection).toEqual(testBridgeDto.ddos_protection);
        expect(getBridge.datacenter_id).toEqual(testBridgeDto.datacenter_id);
        expect(getBridge.logging).toEqual(testBridgeDto.logging);
        expect(getBridge.zabbix_hostid).toEqual(testBridgeDto.zabbix_hostid);
        expect(getBridge.name).toEqual(testBridgeDto.name);
        expect(getBridge.server_id).toEqual(testBridgeDto.server_id);
    });

    it('should return updated bridge for given id', async () => {
        const updateBridge = await controller.updateBridge(1351, testBridgeDto);
        expect(updateBridge.group).toEqual(testBridgeDto.group);
        expect(updateBridge.group_alias).toEqual(testBridgeDto.group_alias);
        expect(updateBridge.ip).toEqual(testBridgeDto.ip);
        expect(updateBridge.ipv6).toEqual(testBridgeDto.ipv6);
        expect(updateBridge.tcp_port).toEqual(testBridgeDto.tcp_port);
        expect(updateBridge.udp_port).toEqual(testBridgeDto.udp_port);
        expect(updateBridge.wi_port).toEqual(testBridgeDto.wi_port);
        expect(updateBridge.wi_password).toEqual(testBridgeDto.wi_password);
        expect(updateBridge.max_files).toEqual(testBridgeDto.max_files);
        expect(updateBridge.user_cache_reloading_interval).toEqual(testBridgeDto.user_cache_reloading_interval);
        expect(updateBridge.threads).toEqual(testBridgeDto.threads);
        expect(updateBridge.ddos_protection).toEqual(testBridgeDto.ddos_protection);
        expect(updateBridge.datacenter_id).toEqual(testBridgeDto.datacenter_id);
        expect(updateBridge.logging).toEqual(testBridgeDto.logging);
        expect(updateBridge.zabbix_hostid).toEqual(testBridgeDto.zabbix_hostid);
        expect(updateBridge.name).toEqual(testBridgeDto.name);
        expect(updateBridge.server_id).toEqual(testBridgeDto.server_id);
    })


    it('should delete a bridge ', async () => {
        const deleteBridge = await controller.deleteBridge(1351);
        expect(service.removeBridge).toHaveBeenCalled();
    })
});