import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, Plugin} from 'vite';

function videoUploadPlugin(): Plugin {
  return {
    name: 'video-upload-plugin',
    configureServer(server) {
      server.middlewares.use('/api/upload-video', (req, res) => {
        if (req.method === 'POST') {
          const chunks: Buffer[] = [];
          req.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
          req.on('end', () => {
            try {
              const buffer = Buffer.concat(chunks);
              const publicVideosDir = path.resolve(__dirname, 'public/videos');
              if (!fs.existsSync(publicVideosDir)) {
                fs.mkdirSync(publicVideosDir, { recursive: true });
              }
              const targetPath = path.join(publicVideosDir, 'video-post-quiz.mp4');
              fs.writeFileSync(targetPath, buffer);

              const distVideosDir = path.resolve(__dirname, 'dist/videos');
              if (fs.existsSync(distVideosDir)) {
                fs.writeFileSync(path.join(distVideosDir, 'video-post-quiz.mp4'), buffer);
              }

              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, path: '/videos/video-post-quiz.mp4', size: buffer.length }));
            } catch (err: any) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: err?.message || 'Error saving video' }));
            }
          });
          return;
        }
        res.statusCode = 405;
        res.end('Method Not Allowed');
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), videoUploadPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
