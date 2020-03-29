import { GroupEndPoint } from './group-endpoint';
import { GroupModel } from '../models/group-model';
import axios from 'axios';

export class GroupService implements GroupEndPoint {
  private readonly baseUrl: string = '/api/group';
  public async getAll(): Promise<GroupModel[]> {
    const response = await axios.get(this.baseUrl);
    return response.data;
  }
  public async getById(id: number): Promise<GroupModel> {
    const response = await axios.get(`${this.baseUrl}/${id}`);
    return response.data;
  }
  public async add(group: GroupModel): Promise<GroupModel> {
    const response = await axios.post(this.baseUrl, group);
    return response.data;
  }
  public async update(group: GroupModel): Promise<GroupModel> {
    const response = await axios.put(`${this.baseUrl}/${group.id}`, group);
    return response.data;
  }
  public async remove(id: number): Promise<void> {
    const response = await axios.delete(`${this.baseUrl}/${id}`);
    return response.data;
  }
}
