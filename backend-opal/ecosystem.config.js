module.exports = {
  apps: [
    {
      name: 'opal',
      script: './start.js'
    }
  ],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-54-199-209-203.ap-northeast-1.compute.amazonaws.com',
      key: '~/.ssh/jsa-opal.pem',
      ref: 'origin/master',
      repo: 'git@github.com:green-fox-academy/JSA-Opal-ShenZhen.git',
      path: '/home/ubuntu/opal',
      'post-deploy':
        'cd backend-opal && npm install && export NODE_ENV=prod && node migration.js up && pm2 startOrRestart ecosystem.config.js'
    }
  }
};
