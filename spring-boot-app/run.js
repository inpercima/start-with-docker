var shjs = require('shelljs');

shjs.exec('docker rm -f inpercima_sba');
shjs.exec('docker run --name inpercima_sba -d -i -t -p 8080:8080 --link mysql5 inpercima/sba');