import KibanaLogger from './Kibana.logger';
import { NODE_ENV } from '../Config';

class NoOpLogger extends KibanaLogger {
    log(message: string) {
        message;
    }
    info(message: string) {
        message;
    }
    debug(message: string) {
        message;
    }
    warn(message: string) {
        message;
    }
    error(message: string) {
        message;
    }
}

class LoggerFactory {
    public static getLogger(context?: string) {
        if (NODE_ENV === 'development') {
            return new KibanaLogger(context);
        }
        return new NoOpLogger();
    }
}

export default LoggerFactory;
