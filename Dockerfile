FROM	node:8

RUN	mkdir /app
WORKDIR	/app

ADD	/build/bundle	.
RUN	(cd programs/server && npm install)

ENV	PORT=3000
EXPOSE	3000

CMD	["node", "main.js"]
