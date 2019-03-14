# Sample to test Contour Prefix path
Prerequis : Contour running on your cluser
## run "mynodeapp" in local: 

1) clone the repo
2) run app in local :
```
$ yarn
```
```
$ yarn start
```
go to [http://localhost:8080](http://localhost:8080)

It's OK ? so next :

## deploy "mynodeapp" on k8s: 
1) Deploy "mynodeapp" on K8s

```
$ kubectl apply -f k8s.yaml
```

2) Deploy the ingressroute 

```
$ kubectl apply -f ingressroute.yaml
```

