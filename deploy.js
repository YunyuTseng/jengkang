const FtpDeploy = require('ftp-deploy')
const ftpDeploy = new FtpDeploy()

require('dotenv').config()

const config = {
  host: process.env.FTP_HOST,
  user: process.env.FTP_USER,
  password: process.env.FTP_PASSWORD,
  port: process.env.FTP_PORT,
  // eslint-disable-next-line node/no-path-concat
  localRoot: __dirname + '/dist',
  remoteRoot: '/httpdocs/',
  include: ['*', '**/*'],
  deleteRemote: false,
  forcePasv: true,
  sftp: false,
}

ftpDeploy
  .deploy(config)
  .then(res => console.log('finished:', res))
  .catch(err => console.log(err))
