module.exports={
    cookieSecret: 'здесь находится наш секрет cookie-файла',
    gmail: {
        user: 'mikeas53.i@gmail.com',
        password: 'iconiatab',
    },
    mongo: {
        development: {
        connectionString: 'mongodb://localhost:27017/usersdb'
        },
        production: {
        connectionString: 'mongodb://localhost:27017/usersdb'
        }
       }
};