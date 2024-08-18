'use client';

import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { AosProvider } from './aosProvider';
import { TasksProvider } from './tasksProvider';

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <AosProvider>
        <TasksProvider>{children}</TasksProvider>
      </AosProvider>
    </ChakraProvider>
  );
}
