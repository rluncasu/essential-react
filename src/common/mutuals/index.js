/**
 * isDevelopment
 * @type {Boolean}
 */
export const isDevelopment = process.env.DEVELOPMENT || false;

/**
 * isProduction
 * @type {Boolean}
 */
export const isProduction = process.env.PRODUCTION || true

/**
 * nodeEnv
 * @type {String}
 */
export const nodeEnv = process.env.NODE_ENV || 'production'
