module.exports = {
    apps: [
        {
            // pm2로 실행한 프로세스 목록에서 이 애플리케이션의 이름으로 지정될 문자열
            name: "yap-admin",
            // pm2로 실행될 파일 경로
            script: "./server.js",
            // 프로세스를 CPU 코어 갯수만큼 띄움
            instances: "max",
            // 개발환경시 적용될 설정 지정
            exec_mode: 'cluster_mode',
            env: {
                "PORT": 3000,
                "NODE_ENV": "dev",
                "NODE_ENV_TYPE" : "dev",
                "PROXY_URL": "https://yap-api.dev.yanolja.in",
                "GRAPHQL_URL": "https://yap-graphql.dev.yanolja.in",
            },
            env_development : {
                "PORT": 8080,
                "NODE_ENV": "production",
                "API_ENV": "dev",
                "PROXY_URL": "https://yap-api.dev.yanolja.in",
                "GRAPHQL_URL": "https://yap-graphql.dev.yanolja.in",
            },
            env_qa : {
                "PORT": 8080,
                "NODE_ENV": "production",
                "API_ENV": "qa",
                "PROXY_URL": "https://yap-api.qa.yanolja.in",
                "GRAPHQL_URL": "https://yap-graphql.qa.yanolja.in",
            },
            env_sandbox : {
                "PORT": 8080,
                "NODE_ENV": "production",
                "API_ENV": "sandbox",
                "PROXY_URL": "https://sandbox-api.yap.yanolja.com",
                "GRAPHQL_URL": "https://sandbox-graphql.yap.yanolja.com",
            },
            env_staging : {
                "PORT": 8080,
                "NODE_ENV": "production",
                "API_ENV": "staging",
                "PROXY_URL": "https://yap-api.stage.yanolja.in",
                "GRAPHQL_URL": "https://yap-graphql.stage.yanolja.in",
            },
            // 배포환경시 적용될 설정 지정
            env_production: {
                "PORT": 8080,
                "NODE_ENV": "production",
                "API_ENV": "production",
                "PROXY_URL": "https://api.yap.yanolja.com",
                "GRAPHQL_URL": "https://graphql.yap.yanolja.com",
            }
        }
    ]
};