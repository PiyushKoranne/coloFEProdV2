module.exports = {
  apps: [
    {
      name: 'vite-app',
      script: 'npm',
      args: 'run dev',
      watch: true,
      env: {
        NODE_ENV: 'development'
      }
    }
  ]
};

