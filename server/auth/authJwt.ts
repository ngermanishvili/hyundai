import { CommonServerError } from '../error/CommonServerError';
import jwtToken, { TOKEN_EXPIRED } from './jwtToken';
import { NextFunction, Response, Request } from 'express';

interface AuthRequest extends Request {
  userId: string;
}

export const authJwt = (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  if (typeof req.headers.authorization !== 'string')
    throw new CommonServerError('Cannot find token');

  const token = req.headers.authorization.split('Bearer ')[1];
  const result = jwtToken.verify(token);
  if (result.ok && result.userId) {
    req.userId = result.userId;
    next();
  } else if (!result.ok && result.error === TOKEN_EXPIRED) {
    throw new CommonServerError('token_expired');
  } else {
    throw new CommonServerError('Invalid token');
  }
};
