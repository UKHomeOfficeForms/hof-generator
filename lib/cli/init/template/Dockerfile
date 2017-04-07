FROM quay.io/ukhomeofficedigital/nodejs-base:v6.9.1

RUN mkdir /public
RUN yum clean all && \
  yum update -y -q && \
  yum install -y -q git && \
  yum clean all && \
  rpm --rebuilddb && \
  npm install -g npm@latest --loglevel warn

COPY . /app

CMD cd /app
CMD npm start
