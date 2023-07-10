require('dotenv').config();
const app = require('./src/app');
const { logger } = require('./src/utils');
const db = require('./src/database');

const PORT = process.env.PORT || 3001;

logger.info('Initializing server....');
db.connect()
  .then(() => {
    logger.info('Connect database successfully');
    app.listen(PORT, () => {
      logger.info(
        `Initialize server successfully. Server is running at port ${ PORT }`
      );
    });
  })
  .catch((err) => {
    logger.error('Initializing failed');
    logger.error(err);
    process.exit(0);
  });

