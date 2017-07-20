FROM quay.io/ukhomeofficedigital/nodejs-base:v6

RUN mkdir /public

COPY package.json /app/package.json
RUN npm --loglevel warn install --production
COPY . /app
RUN npm --loglevel warn run postinstall --production
RUN chown -R nodejs:nodejs /public

USER nodejs

CMD ["/app/run.sh"]
