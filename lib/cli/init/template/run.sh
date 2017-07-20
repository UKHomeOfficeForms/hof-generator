#!/bin/bash

# kubernetes does not support volumes-from so when we want to
# share a dir with nginx we use /public which is an emptyDir
# we then copy files from app/public on start of the container which
# is why this line exists until kube has a better method of
# sharing directiries between containers
cp -r /app/public/* /public/

node app.js
