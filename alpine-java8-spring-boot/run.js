var lightjs = require('light-js');

lightjs.exec('docker', 'container rm -f inpercima_ajsb');
lightjs.exec('docker', 'container run --name inpercima_ajsb -d -it -p 8080:8080 inpercima/alpine-java8-spring-boot');
