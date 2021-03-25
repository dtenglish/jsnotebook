import path from 'path';
import { Command } from 'commander';
import { serve } from 'local-api';

const isProduction = process.env.NODE_ENV === 'production';

export const serveCommand = new Command()
  .command('serve [filename]')
  .description('Open a file for editing')
  .option('-p, --port <number>', 'port to run server on', '4005')
  .action(async (filename = 'notebook.js', options: { port: string }) => {
    const dir = path.join(process.cwd(), path.dirname(filename));
    var { port } = options;

    if (port.charAt(0) === '=') port = port.substring(1);

    try {
      await serve(dir, path.basename(filename), parseInt(port), !isProduction);
      console.log(
        `Opened ${filename}. Navigate to http://localhost:${port} to access the notebook editor.`
      );
    } catch (err) {
      if (err.code === 'EADDRINUSE') {
        console.error('Port already in use. Try running on a different port')
      } else if (err.code === 'ERR_SOCKET_BAD_PORT') {
        console.error('Invalid port provided. Please provide a number between 0-65535')
      } else {
        console.log('Problem found: ', err.message);
      }
      process.exit(1);
    }
  });
