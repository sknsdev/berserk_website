module.exports = {
    apps: [
        {
            name: 'berserk-main',
            script: 'npm',
            args: 'start',
            env: {
                NODE_ENV: 'development',
            },
            env_production: {
                NODE_ENV: 'production',
            },
        },
    ],
};