# Node Port Test
This is a simple node server which opens ports and replies on those.

## Params
The ports can be passed by the ENV variable `PORTS`.
Please use a simple `,` as separation digit. 

e.g.

```
PORTS=8080,8090 nodejs index.js
``` 

In a docker environment it can be used like this
```
docker run --name node-port-test --env PORTS="8080,9090" -p 8080:8080 -p 9090:9090 ese7en/node-port-test
```

You can make use of the docker port-range
```
docker run --name node-port-test --env PORTS="11620,11621,11622,11623,11624,11625,11626,11627,11628,11629" -p 11620-11629:11620-11629 ese7en/node-port-test
```
