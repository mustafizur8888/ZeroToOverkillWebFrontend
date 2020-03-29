import { GroupModel } from '../models/group-model';

export interface GroupEndPoint {
  getAll(): Promise<GroupModel[]>;
  getById(id: number): Promise<GroupModel>;
  add(group: GroupModel): Promise<GroupModel>;
  update(group: GroupModel): Promise<GroupModel>;
  remove(id: number): Promise<void>;
}
