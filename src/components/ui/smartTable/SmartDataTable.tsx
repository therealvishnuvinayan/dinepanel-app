'use client';

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Input
} from '@heroui/react';
import { Button } from '@heroui/react';
import { Download } from 'lucide-react';
import React, { useState } from 'react';

export type Column<T> = {
  key: keyof T | string;
  label: string;
  render?: (row: T) => React.ReactNode;
};

interface SmartDataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  pageSize?: number;
  onSearch?: (value: string) => void;
  onExport?: () => void;
  renderToolbarActions?: () => React.ReactNode;
  searchValue?: string;
  renderFilters?: () => React.ReactNode;
  showSearch?: boolean;
}

export function SmartDataTable<T>({
  data,
  columns,
  pageSize = 5,
  onSearch,
  onExport,
  renderToolbarActions,
  searchValue = '',
  renderFilters,
  showSearch = true
}: SmartDataTableProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(searchValue);
  const totalPages = Math.ceil(data.length / pageSize);
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch?.(value);
  };

  const paginatedData = data.slice(start, end);

  return (
    <div className='border-default-300 bg-background rounded-xl border p-4 shadow-md'>
      {(showSearch || onExport || renderToolbarActions || renderFilters) && (
        <div className='mb-4 flex flex-wrap items-center justify-between gap-4'>
          <div className='flex gap-2'>
            {showSearch && (
              <Input
                placeholder='Search...'
                value={searchTerm}
                onChange={handleSearch}
                className='border-default-300 bg-background text-foreground w-72 rounded-md border'
              />
            )}
            {renderFilters?.()}
          </div>
          <div className='flex gap-2'>
            {onExport && (
              <Button
                variant='bordered'
                className='border-default-300 rounded-md border bg-white text-black dark:bg-white dark:text-black'
                onPress={onExport}
              >
                <Download className='mr-2 h-4 w-4 text-black' /> Export
              </Button>
            )}
            {renderToolbarActions?.()}
          </div>
        </div>
      )}
      <Table
        isStriped
        removeWrapper={false}
        classNames={{
          base: 'border border-default-300 rounded-lg overflow-hidden',
          table: 'min-w-full border-separate border-spacing-0',
          th: 'bg-default-100 border-b border-default-300 px-4 py-2 text-sm font-semibold text-left',
          td: 'border-b border-default-200 px-4 py-3 text-sm text-default-700',
          tr: 'hover:bg-default-50 transition-colors'
        }}
      >
        <TableHeader>
          {columns.map((column) => (
            <TableColumn key={String(column.key)}>{column.label}</TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {paginatedData.map((item, index) => (
            <TableRow key={index}>
              {columns.map((col) => (
                <TableCell key={String(col.key)}>
                  {col.render
                    ? col.render(item)
                    : (item[col.key as keyof T] as React.ReactNode)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className='mt-4 flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <label
            htmlFor='rows-per-page'
            className='text-muted-foreground text-sm'
          >
            Rows per page:
          </label>
          <select
            id='rows-per-page'
            value={pageSize}
            className='border-default-300 rounded-md border px-2 py-1 text-sm'
            disabled
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={25}>25</option>
          </select>
        </div>
        <Pagination
          total={totalPages}
          initialPage={currentPage}
          onChange={setCurrentPage}
          showControls
        />
      </div>
    </div>
  );
}
