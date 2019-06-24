npm init -y
yarn add hapi@16 mysql2 sequelize env2
yarn add sequelize-cli -D
./node_modules/.bin/sequelize init
配置 config.js  .env  .env_port
./node_modules/.bin/sequelize db:create 执行创建数据库的命令
./node_modules/.bin/sequelize migration:create --name create-shop-table (创建创建表的迁移文件)
./node_modules/.bin/sequelize migration:create --name create-good-table
./node_modules/.bin/sequelize seed:create --name init-shop (创建插入数据的迁移文件)
./node_modules/.bin/sequelize seed:create --name init-good
配置 migration目录下的文件（创建表）
./node_modules/.bin/sequelize db:migrate   执行创建表命令
配置 seeders目录下的文件（插入数据）
./node_modules/.bin/sequelize db:seed:all   执行插入数据命令   