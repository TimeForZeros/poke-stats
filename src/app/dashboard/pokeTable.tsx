'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  useReactTable,
  createColumnHelper,
  getCoreRowModel,
  flexRender,
  type Row,
  type Cell,
} from '@tanstack/react-table';
import { useVirtualizer, notUndefined } from '@tanstack/react-virtual';
import { useRef } from 'react';

export type PokemonEntry = {
  name: string;
  url: string;
};

const columnHelper = createColumnHelper<PokemonEntry>();
const columns = [
  columnHelper.accessor('name', {
    header: 'Name',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('url', {
    header: 'Link',
    cell: (info) => info.getValue(),
  }),
];

const PokeCell = ({ cell }: { cell: Cell<PokemonEntry, unknown> }) => (
  <TableCell>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
);
const PokeRow = ({ row }: { row: Row<PokemonEntry> }) => (
  <TableRow>
    {row.getVisibleCells().map((cell) => (
      <PokeCell key={cell.id} cell={cell} />
    ))}
  </TableRow>
);

const PokeTable = ({ data }: { data: PokemonEntry[] }) => {
  const parentRef = useRef<HTMLDivElement>(null);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const { rows } = table.getRowModel();

  const virtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 25,
    overscan: 5,
  });

  const items = virtualizer.getVirtualItems();

  return (
    <div className="overflow-auto h-[90vh]">
      <div ref={parentRef} style={{ height: `${virtualizer.getTotalSize()}px` }}>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {virtualizer.getVirtualItems().map((virtualRow, index) => {
              const row = rows[virtualRow.index];
              return <PokeRow key={row.id} row={row} />;
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PokeTable;
