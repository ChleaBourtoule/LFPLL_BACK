import { RowDataPacket } from 'mysql2';

export default interface IRegion extends RowDataPacket {
  id_region: number;
  name: string;
  color: string;
}
