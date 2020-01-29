# NodeJs For Modern Web

- NodeJs -- version ( 12.14.1 )

- Express -- version ( 4.16.1 )

- npm -- version ( 6.13.1 )

- MongoDB Shell -- version ( 4.2.2 )

- Bootstrap 

- Vue.js

- AWS EC2 - Ubuntu ( 18.04 ) 

- NodeMon

## To use cfg.js For connect with MongoDB Atlas

- You must change db.url for your MongoDB atlas
- /cfg have been imported .gitignore file
- So you must change cfg.js  

    **cfg/cfg.js**

    ```javascript
    module.exports = {
      db: {
        url: 'mongodb://id:password@shell연결시들어간샤드주소들/디비이름?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin'
      },
      web: {
        
      },
    };
    ```
