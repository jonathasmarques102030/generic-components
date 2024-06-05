import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

interface TableProps<T> {
  items: T[];
}

export default function CustomTable<T extends { id?: string; name?: string; telefone?: string }>(
  props: TableProps<T>
) {
  const { items } = props;
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Telefone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((value) => (
            <TableRow key={value?.id}>
              <TableCell>{value?.id}</TableCell>
              <TableCell>{value?.name}</TableCell>
              <TableCell>{value?.telefone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}