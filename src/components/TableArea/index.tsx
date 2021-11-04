import * as C from './styles';
import { Item } from '../../types/Item';
import { TableItem } from '../TableItem';

type Props = {
  list: Item[]
}

export const TableArea = ({ list }: Props) => {
  return (
    <C.Table>
      <thead>
        <tr>
            <C.TableHeadCollunm width={150} >Date</C.TableHeadCollunm>
            <C.TableHeadCollunm width={150} >Category</C.TableHeadCollunm>
            <C.TableHeadCollunm>Title</C.TableHeadCollunm>
            <C.TableHeadCollunm width={150} >Value</C.TableHeadCollunm>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index)=>(
          
            <TableItem key={index} item={item} />
         
        ))}

      </tbody>
    </C.Table>
  );
}