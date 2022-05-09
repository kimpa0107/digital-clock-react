import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import { resolve as r } from 'path';
const resolve = (dir: string) => r(__dirname, dir);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
